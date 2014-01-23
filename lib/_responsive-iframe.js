nike.cq.NikeCom.Iframe = (function() {
    var iframe = undefined,
        iframeHeight = undefined,
        iframeWidth = undefined,
        contents = undefined,
        innerHtmlElement = undefined,
        innerBodyElement = undefined;

    /*
     * Set iframe height to height of content within iframe
     */
    function resize(timestamp) {
        contents = iframe.contents();
        innerHtmlElement = contents.find('html:first');
        innerBodyElement = contents.find('body:first');
        
        if (contents.length > 0 && contents.get(0).readyState === 'complete') {

            //to guard against height: 100% set in CSS
            innerHtmlElement.css('height', 'auto');
            innerBodyElement.css('height', 'auto');

            if (innerBodyElement.length > 0 ) {
                iframeHeight = innerBodyElement.height();
            } else {
                iframeHeight = contents.height();
            }
            
            if(iframeHeight > 0) { //never set to 0
                iframe.height(iframeHeight);
            }
        }

        setTimeout(function(){
            window.requestAnimationFrame(resize);
        }, 1000);
    }

    /*
     * Trigger resize on iframe content
     */
    function triggerResize() {
        iframeWidth = iframe.width();
        iframe.width(iframeWidth - 1);
        iframe.removeAttr('style');
    }

    /*
     * Check iframe content is accessible
     */
    function iframeContentAccessible() {
        var readyState, isAccessible;
        try {
            contents = iframe.contents();
            readyState = contents.get(0).readyState;
            isAccessible = true;
        } catch(e) {
            isAccessible = false;
        }
        return isAccessible;
    }
    
    function init() {
        iframe = $('#iframe-container');

        if (iframe.length === 0 || !iframeContentAccessible()) {
            return; //there is no iframe on the page or content is inaccessible
        }
        
        window.requestAnimationFrame(resize);
        setTimeout(triggerResize, 3000);
    }

    return {
        init: init
    }

})();

$(function() {
    nike.cq.NikeCom.Iframe.init();
});