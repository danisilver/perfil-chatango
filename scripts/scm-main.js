/**
 * 
 */

define(function(){
	var el = document.createElement("script");
	el.id = "scm-element";
	el.type = "text/javascript";
	var cfg = {
		'skin' : 'http://static.tumblr.com/mky4cgu/CwOmbgj5t/musica3dfalsa-moral.css',
		'volume' : 100,
		'autoplay' : false,
		'shuffle' : false,
		'repeat' : 1,
		'placement' : 'top',
		'showplaylist' : false,
		'playlist' : [ 
		{
			'title': 'Valesco - All i need',
			'url': 'https://www.youtube.com/watch?v=MIJcADnsJt4'
		}, {
			'title': 'Retach - Funko',
			'url': 'https://www.youtube.com/watch?v=SfZbGxE4Ndk'
		}, {
			'title': 'Romos - Catharsis',
			'url': 'https://www.youtube.com/watch?v=xsmlB4e1d00'
		},{
			'title': 'Extan - Faster than light',
			'url': 'https://www.youtube.com/watch?v=9iyUrtO2YpI'
		},{
			'title': 'Wanderflux - Visions',
			'url': 'https://www.youtube.com/watch?v=GTZizUmlq_Y'
		},{
			'title': 'Erio - Monolith',
			url: 'https://www.youtube.com/watch?v=_oivKNpHNEE'
		},{
			'title': 'Nameless Warning - You are worth it',
			'url': 'https://www.youtube.com/watch?v=dtHli5Y2E14'
		},{
			'title': 'Valesco - Stay with me',
			'url': 'https://www.youtube.com/watch?v=KA62Dn5K4is'
		},{
			'title': 'Noxive - Home',
			'url': 'https://www.youtube.com/watch?v=wRljEG0epiA'
		},{
			'title' : 'crystal drop',
			'url' : ' https://www.youtube.com/watch?v=gd2N_0NINRQ'
		}, {
			'title' : 'Not another progressive house',
			'url' : 'https://www.youtube.com/watch?v=KlIlioP-LM8'
		}, {
			'title' : 'Restless Modern - maybe',
			'url' : 'https://www.youtube.com/watch?v=rddy3Dx2Sw4'
		}, {
			'title' : 'From the dust',
			'url' : 'https://www.youtube.com/watch?v=DCe3HYQYI-Q'
		}]
	}

	el.setAttribute("data-config", JSON.stringify(cfg));
	el.setAttribute('src', "http://scmplayer.net/script.js");
	
	return {
		init: function(){
			document.body.appendChild(el);
		}
	}
});

