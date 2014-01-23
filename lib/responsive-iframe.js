/*
 * responsive-iframe
 * https://github.com/jack/responsive-iframe
 *
 * Copyright (c) 2013 Jack Bishop
 * Licensed under the MIT license.
 */

(function(exports) {

	'use strict';

	var iframe, iframeHeight, iframeWidth, contents, innerHtmlElement, innerBodyElement;

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
                // iframeHeight = innerBodyElement.height();
                // iframeHeight = iframe.get(0).contentDocument.body.scrollHeight;
                iframeHeight = $(innerBodyElement).get(0).offsetHeight;
	            
	            console.log('innerBodyElement.height()');
	            console.log(innerBodyElement.height());
	            console.log('innerBodyElement.get(0).clientHeight');
	            console.log(innerBodyElement.get(0).clientHeight);
				console.log('$(innerBodyElement).scrollHeight');
				console.log($(innerBodyElement).scrollHeight);
				console.log('iframe.get(0).contentDocument.body.scrollHeight');
				console.log(iframe.get(0).contentDocument.body.scrollHeight);
				console.log('$(innerBodyElement).get(0).offsetHeight');
				console.log($(innerBodyElement).get(0).offsetHeight);
				console.log('iframe.get(0).contentDocument.body.offsetHeight');
				console.log(iframe.get(0).contentDocument.body.offsetHeight);
				console.log('innerBodyElement.clientHeight');
				console.log(innerBodyElement.clientHeight);
				console.log('iframe.get(0).contentDocument.body.clientHeight');
				console.log(iframe.get(0).contentDocument.body.clientHeight);
				console.log('iframe.get(0).scrollTop');
				console.log(iframe.get(0).scrollTop);
				console.log(iframe.get(0).contentDocument.body.scrollTop);
				
            } else {
                iframeHeight = contents.height();
            }
            
            if(iframeHeight > 0) { //never set to 0
            	iframe.height(iframe.get(0).contentDocument.body.clientHeight);
                setTimeout(function(){
                	iframe.height(iframeHeight);
                }, 0);
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

	exports.makeResponsive = function(iframeElement) {
		iframe = iframeElement;

		if (!iframe || !iframeContentAccessible()) {
			return; //there is no iframe on the page or content is inaccessible
		}

		iframe.css('box-sizing','border-box')

		window.requestAnimationFrame(resize);
		setTimeout(triggerResize, 3000);
	};

}(typeof exports === 'object' && exports || this));