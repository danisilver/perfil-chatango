define("particles-cfg",["particlesjs"],function(){var e={particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:6,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:.5}},bubble:{distance:400,size:4,duration:.3,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};return{initParticles:function(){var t=document.createElement("div");t.id="particles-js",document.body.appendChild(t),particlesJS("particles-js",e)}}}),define("scm-main",[],function(){var e=document.createElement("script");e.id="scm-element",e.type="text/javascript";var t={skin:"http://static.tumblr.com/mky4cgu/CwOmbgj5t/musica3dfalsa-moral.css",volume:100,autoplay:!1,shuffle:!1,repeat:1,placement:"top",showplaylist:!1,playlist:[{title:"Valesco - All i need",url:"https://www.youtube.com/watch?v=MIJcADnsJt4"},{title:"Retach - Funko",url:"https://www.youtube.com/watch?v=SfZbGxE4Ndk"},{title:"Romos - Catharsis",url:"https://www.youtube.com/watch?v=xsmlB4e1d00"},{title:"Extan - Faster than light",url:"https://www.youtube.com/watch?v=9iyUrtO2YpI"},{title:"Wanderflux - Visions",url:"https://www.youtube.com/watch?v=GTZizUmlq_Y"},{title:"Erio - Monolith",url:"https://www.youtube.com/watch?v=_oivKNpHNEE"},{title:"Nameless Warning - You are worth it",url:"https://www.youtube.com/watch?v=dtHli5Y2E14"},{title:"Valesco - Stay with me",url:"https://www.youtube.com/watch?v=KA62Dn5K4is"},{title:"Noxive - Home",url:"https://www.youtube.com/watch?v=wRljEG0epiA"},{title:"crystal drop",url:" https://www.youtube.com/watch?v=gd2N_0NINRQ"},{title:"Not another progressive house",url:"https://www.youtube.com/watch?v=KlIlioP-LM8"},{title:"Restless Modern - maybe",url:"https://www.youtube.com/watch?v=rddy3Dx2Sw4"},{title:"From the dust",url:"https://www.youtube.com/watch?v=DCe3HYQYI-Q"}]};return e.setAttribute("data-config",JSON.stringify(t)),e.setAttribute("src","http://scmplayer.net/script.js"),{init:function(){document.body.appendChild(e)}}}),define("vl",[],function(){var e=document.createElement("script");return e.type="text/javascript",e.setAttribute("src","http://barrykun.com/vl.js"),{init:function(){document.body.appendChild(e)}}}),requirejs.config({paths:{particlesjs:"http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min"}}),require(["particles-cfg","scm-main","vl"],function(e,t,n){document.body.innerHTML="",t.init();var r=document.createElement("link");r.rel="stylesheet",r.setAttribute("href","https://cdn.rawgit.com/danisilver/perfil-chatango/master/style.css"),document.head.appendChild(r),window.onload=function(){n.init(),e.initParticles()},console.log("something to third revision")}),define("main",function(){});