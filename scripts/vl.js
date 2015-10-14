/**
 * 
 */

define('vl', [], function(){
	var el = document.createElement("script");
	el.type = "text/javascript";
	el.setAttribute('src', "http://barrykun.com/vl.js");
	
	return {
		init: function(){
			document.body.appendChild(el);	
		}
	}
})