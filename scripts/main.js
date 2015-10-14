/**
 * Main file
 */

requirejs.config({
	paths:{
		'particlesjs':'http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min'
		//'vl': 'http://barrykun.com/vl'	
	}
});

require(["particles-cfg", "scm-main", "vl"], function(particlesJS, scm, vl){
	document.body.innerHTML = '';
	scm.init();

	var style = document.createElement('link');
	style.rel = "stylesheet";
	style.setAttribute('href', 'http://proyectofinal.comule.com/scripts/style-build.css');
	document.head.appendChild(style);
	
	window.onload = function(){
		vl.init();
		particlesJS.initParticles();
	}
});
