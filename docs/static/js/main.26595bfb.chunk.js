(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/html.8ee96cee.svg"},function(e,a,t){e.exports=t.p+"static/media/css.f5da6f25.svg"},function(e,a,t){e.exports=t.p+"static/media/js.6e350c5b.svg"},,,function(e,a,t){e.exports=t.p+"static/media/sass.88c10477.svg"},function(e,a,t){e.exports=t.p+"static/media/react.e9f3d01c.svg"},,,function(e,a,t){e.exports=t.p+"static/media/jquery.8ec9bacf.svg"},,,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/banner.21801692.svg"},function(e,a,t){e.exports=t.p+"static/media/HoyosJuanManuel.89d1952a.pdf"},function(e,a,t){e.exports=t.p+"static/media/perfil.a98164ee.jpg"},function(e,a,t){e.exports=t.p+"static/media/bootstrap.c4ce29f3.svg"},function(e,a,t){e.exports=t.p+"static/media/nodejs.f13b681b.svg"},function(e,a,t){e.exports=t.p+"static/media/express.f1a0b0e9.svg"},function(e,a,t){e.exports=t.p+"static/media/mongodb.52783a2f.svg"},function(e,a,t){e.exports=t.p+"static/media/php.e09959d7.svg"},function(e,a,t){e.exports=t.p+"static/media/sql.560ce161.svg"},function(e,a,t){e.exports=t.p+"static/media/mysql.73636822.svg"},function(e,a,t){e.exports=t.p+"static/media/git.f3f4f15d.svg"},function(e,a,t){e.exports=t.p+"static/media/github.76d344f0.svg"},function(e,a,t){e.exports=t.p+"static/media/bitbucket.733b9782.svg"},function(e,a,t){e.exports=t.p+"static/media/404.c05b6e8a.svg"},function(e,a,t){e.exports=t(89)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(37),l=t.n(o),r=t(10),s=(t(58),t(59),t(8)),i=t(2),m=function(e){var a=e.children;return c.a.createElement("h3",{className:"label-title"},a)},p=function(){return c.a.createElement("h2",{className:"gretting"},"Hola, soy ",c.a.createElement("br",null)," Hoyos Juan")},u=function(){return c.a.createElement("h1",{className:"professions"},"Full Stack Developer")},d=(t(60),function(e){var a=e.btnVerMas,t=e.photo,n=e.perfil;return c.a.createElement("div",{className:"about-me"},c.a.createElement("div",{className:"info-about-me"},c.a.createElement(m,null,"Sobre m\xed"),c.a.createElement(p,null),c.a.createElement(u,null),c.a.createElement("p",{className:"description-about-me"},"Estudiante autodidacta interesado en el mundo del desarrollo web. Amante de javascript y de los problemas que no son falcil de resolver."),a&&c.a.createElement(r.b,{to:"./about-me",className:"btn"},"ver m\xe1s")),c.a.createElement("div",{className:"img-about-me"},c.a.createElement("img",{src:t,alt:"img-banner",width:n?"320":"100%"})))}),g=t(9),E=t(14),b=function(e){var a=e.mode,t=e.actMode;return c.a.createElement("button",{className:a?"btn-mode dark-mode":"btn-mode dark-mode active",onClick:function(){return t()}},c.a.createElement("span",null,c.a.createElement(g.a,{icon:E.e})),c.a.createElement("span",null,c.a.createElement(g.a,{icon:E.d})))},f=t(19),h=t.n(f),v=t(25),N=(t(83),function(e){var a=e.selected,t=e.mode,o=e.actMode,l=Object(n.useState)({}),i=Object(s.a)(l,2),m=i[0],p=i[1];return Object(n.useEffect)((function(){h.a.get("https://backend-portfolio-hoyos-juan.herokuapp.com/about").then((function(e){p(e.data[0].networks)}))}),[p]),c.a.createElement("div",{className:t?"menu-bar dark-bar":"menu-bar light-bar"},c.a.createElement("div",{className:"primera-fila"},c.a.createElement("h2",{className:"my-name"},c.a.createElement("span",{className:"span-dev"},"Dev"),"HoyosJuan"),c.a.createElement(b,{mode:t,actMode:o})),c.a.createElement("ul",{className:"options-menu"},c.a.createElement("li",{className:"1"===a?"option selected":"option"},c.a.createElement(r.b,{to:"./"},c.a.createElement(g.a,{icon:E.c})," ",c.a.createElement("span",null,"Inicio"))),c.a.createElement("li",{className:"2"===a?"option selected":"option"},c.a.createElement(r.b,{to:"./about-me"},c.a.createElement(g.a,{icon:E.a})," ",c.a.createElement("span",null," Sobre mi"))),c.a.createElement("li",{className:"3"===a?"option selected":"option"},c.a.createElement(r.b,{to:"./my-portfolio"},c.a.createElement(g.a,{icon:E.f})," ",c.a.createElement("span",null,"Mis Proyectos")))),c.a.createElement("ul",{className:"social-networks"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/HoyosJuan16",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(g.a,{icon:v.a}))),c.a.createElement("li",null,c.a.createElement("a",{href:m.linkedin,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(g.a,{icon:v.b}))),c.a.createElement("li",null,c.a.createElement("a",{href:"mailto:".concat(m.email)},c.a.createElement(g.a,{icon:E.b})))))}),j=(t(84),function(e){var a=e.cargar,t=e.mode;return c.a.createElement("div",{className:a?t?"loader loader-dark":"loader loader-light":"no-loader"},c.a.createElement("div",{className:"spinner-box"},c.a.createElement("div",{className:"circle-border"},c.a.createElement("div",{className:"circle-core"}))))}),y=(t(85),t(39)),x=t.n(y),k=function(e){var a=e.mode,t=e.actMode,o=Object(n.useState)(!0),l=Object(s.a)(o,2),r=l[0],i=l[1];return Object(n.useEffect)((function(){i(!1)}),[i]),c.a.createElement(n.Fragment,null,c.a.createElement(j,{cargar:r,mode:a}),c.a.createElement("div",{className:a?"page page-dark":"page page-light"},c.a.createElement("div",{className:"container container-home"},c.a.createElement(d,{btnVerMas:!0,photo:x.a,perfil:!1}),c.a.createElement("h2",{className:"subtitle"},"Mis proyectos"),c.a.createElement("div",{className:"recent"},c.a.createElement("div",{className:"project-resume"},c.a.createElement("div",{className:"portada-project-resume"},c.a.createElement("img",{src:"https://i.ibb.co/frj7PG9/proyecto-memoria.png",alt:"project"})),c.a.createElement("h2",{className:"name-project-resume"},"Juego de la memoria"),c.a.createElement("p",{className:"label-project-resume"},"Mi primer juego con js")),c.a.createElement("div",{className:"project-resume"},c.a.createElement("div",{className:"portada-project-resume"},c.a.createElement("img",{src:"https://i.ibb.co/4shf3cK/proyecto-tienda-cursos.png",alt:"project"})),c.a.createElement("h2",{className:"name-project-resume"},"Tienda Cursos"),c.a.createElement("p",{className:"label-project-resume"},"Tienda simple con js")),c.a.createElement("div",{className:"project-resume"},c.a.createElement("div",{className:"portada-project-resume"},c.a.createElement("img",{src:"https://i.ibb.co/d0DLFVr/proyecto-blog-viajes.png",alt:"project"})),c.a.createElement("h2",{className:"name-project-resume"},"Blog Viajes"),c.a.createElement("p",{className:"label-project-resume"},"Plantilla de blog")),c.a.createElement("div",{className:"project-resume"},c.a.createElement("div",{className:"portada-project-resume"},c.a.createElement("img",{src:"https://i.ibb.co/Vvrh2x4/proyecto-ecommerce.png",alt:"project"})),c.a.createElement("h2",{className:"name-project-resume"},"E-commerce"),c.a.createElement("p",{className:"label-project-resume"},"Plantilla de e-commerce"))))),c.a.createElement(N,{selected:"1",mode:a,actMode:t}))},M=t(40),L=t.n(M),w=(t(86),t(41)),S=t.n(w),J=t(11),O=t.n(J),H=t(12),V=t.n(H),B=t(16),q=t.n(B),P=t(42),D=t.n(P),_=t(13),F=t.n(_),I=t(20),C=t.n(I),U=t(17),W=t.n(U),z=t(43),R=t.n(z),T=t(44),G=t.n(T),K=t(45),Q=t.n(K),A=t(46),$=t.n(A),X=t(47),Y=t.n(X),Z=t(48),ee=t.n(Z),ae=t(49),te=t.n(ae),ne=t(50),ce=t.n(ne),oe=t(51),le=t.n(oe),re=function(e){var a=e.mode,t=e.actMode,o=Object(n.useState)([]),l=Object(s.a)(o,2),r=l[0],i=l[1],m=Object(n.useState)(!0),p=Object(s.a)(m,2),u=p[0],g=p[1],E=Object(n.useState)([]),b=Object(s.a)(E,2),f=b[0],v=b[1];return Object(n.useEffect)((function(){h.a.get("https://backend-portfolio-hoyos-juan.herokuapp.com/about").then((function(e){i(e.data[0].skills),v(e.data[0].intereses),g(!1)}))}),[i]),c.a.createElement(n.Fragment,null,c.a.createElement(j,{cargar:u,mode:a}),c.a.createElement("div",{className:a?"page page-dark":"page page-light"},c.a.createElement("div",{className:"container container-about-me"},c.a.createElement(d,{btnVerMas:!1,photo:S.a,perfil:!0}),c.a.createElement("div",{className:"box-6"},c.a.createElement("h3",{className:"subtitle",onClick:function(){return console.log(r)}},"Intereses"),c.a.createElement("p",{className:"description-box"},f.puno),c.a.createElement("p",{className:"description-box"},f.pdos),c.a.createElement("a",{className:"btn",href:L.a,target:"__blank",style:{gridColumn:"span 12",textAlign:"center",marginBottom:"15px"}},"Descargar CV")),c.a.createElement("div",{className:"box-6"},c.a.createElement("h3",{className:"subtitle"},"Tecnologias"),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:O.a,alt:"Logo html5"}),c.a.createElement("span",null,r[0])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:V.a,alt:"Logo css"}),c.a.createElement("span",null,r[1])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:q.a,alt:"Logo Sass"}),c.a.createElement("span",null,r[2])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:D.a,alt:"Logo Bootstrap"}),c.a.createElement("span",null,r[3])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:F.a,alt:"Logo js"}),c.a.createElement("span",null,r[4])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:C.a,alt:"Logo jQuery"}),c.a.createElement("span",null,r[5])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:W.a,alt:"Logo React"}),c.a.createElement("span",null,r[6])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:R.a,alt:"Logo NodeJS"}),c.a.createElement("span",null,r[7])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:G.a,alt:"Logo Express",id:"logoExpress"}),c.a.createElement("span",null,r[8])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:Q.a,alt:"Logo MongoDB"}),c.a.createElement("span",null,r[9])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:$.a,alt:"Logo PHP"}),c.a.createElement("span",null,r[10])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:Y.a,alt:"Logo SQL"}),c.a.createElement("span",null,r[11])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:ee.a,alt:"Logo MySQL"}),c.a.createElement("span",null,r[12])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:te.a,alt:"Logo Git"}),c.a.createElement("span",null,r[13])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:ce.a,alt:"Logo GitHub"}),c.a.createElement("span",null,r[14])),c.a.createElement("div",{className:"icono-tecnologia"},c.a.createElement("img",{src:le.a,alt:"Logo Bitbucket"}),c.a.createElement("span",null,r[15]))))),c.a.createElement(N,{selected:"2",mode:a,actMode:t}))},se=function(e){var a=e.tecnologias,t=e.image,o=e.name,l=e.description,r=e.repositorio,s=e.web;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"project"},c.a.createElement("div",{className:"front"},c.a.createElement("img",{src:t,alt:"Project 1"}),c.a.createElement("div",{className:"tecnologias-usadas"},a.length>0&&a.map((function(e,a){return c.a.createElement("div",{className:"icono-tec",key:a},c.a.createElement("img",{src:e,alt:"icono"}))})))),c.a.createElement("div",{className:"description-project"},c.a.createElement("div",{className:"name-and-labels"},c.a.createElement("h3",{className:"name-project"},o)),c.a.createElement("p",{className:"text-description"},l),c.a.createElement("div",{className:"buttons-project"},c.a.createElement("a",{href:s,className:"go-to-page",target:"__blank"},"Ver sitio web"),c.a.createElement("a",{href:r,className:"go-to-repository",target:"__blank"},"Ir al repositorio")))))},ie=(t(87),function(e){var a=e.mode,t=e.actMode;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:a?"page page-dark":"page page-light"},c.a.createElement("div",{className:"container container-portfolio"},c.a.createElement("h2",{className:"subtitle"},"Mis proyectos"),c.a.createElement(se,{name:"Reloj analogico y digital",description:"Un reloj analogico y uno digital teniendo ambos el modo 'dark' o su modo 'light'",tecnologias:[O.a,V.a,F.a,W.a],web:"https://hoyosjuan16.github.io/watch-view/",repositorio:"https://github.com/HoyosJuan16/watch",image:"https://i.ibb.co/2KLRzLb/2020-10-21-22h41-55.png"}),c.a.createElement(se,{name:"Juego de la memoria",description:"El juego consiste en encontrar la pareja de cada cartas que estan boca abajo, la dificultad puede ser elegida o puede ser al azar.",tecnologias:[O.a,V.a,q.a,F.a,C.a],web:"https://hoyosjuan16.github.io/busca-pareja/",repositorio:"https://github.com/HoyosJuan16/busca-pareja",image:"https://i.ibb.co/vL08Kvh/proyecto-memoria.png"}),c.a.createElement(se,{name:"Blog Viajes",description:"Una plantilla basica para un blog. Lo que llama la atencion de este blog es su banner y la forma en la que cambia el fondo de pantalla.",tecnologias:[O.a,V.a,q.a,F.a],web:"https://hoyosjuan16.github.io/BlogViajes/",repositorio:"https://github.com/HoyosJuan16/BlogViajes",image:"https://i.ibb.co/99WV61N/proyecto-blog-viajes.png"}),c.a.createElement(se,{name:"Tienda Cursos",description:"Una practica de una tienda orientada a cursos, pero obviamente aplicable a cualquier tipo de productos.",tecnologias:[O.a,V.a,q.a,F.a],web:"https://hoyosjuan16.github.io/tienda-cursos/",repositorio:"https://github.com/HoyosJuan16/tienda-cursos",image:"https://i.ibb.co/VHfN5dJ/proyecto-tienda-cursos.png"}),c.a.createElement(se,{name:"Lista de tareas",description:"Una lista de tareas organizable.",tecnologias:[O.a,V.a,q.a,F.a],web:"https://hoyosjuan16.github.io/lista-de-tareas/",repositorio:"https://github.com/HoyosJuan16/lista-de-tareas/",image:"https://i.ibb.co/sR8M0Pt/2020-10-22-09h18-52.png"}),c.a.createElement(se,{name:"Search Movies",description:"Una app que busca peliculas y obtiene los resultados a traves de una api.",tecnologias:[O.a,V.a,F.a,W.a],web:"/",repositorio:"https://github.com/HoyosJuan16/search-movies/",image:"https://i.ibb.co/WznPWsn/2020-10-21-23h12-38.png"}))),c.a.createElement(N,{selected:"3",mode:a,actMode:t}))}),me=t(52),pe=t.n(me),ue=(t(88),function(e){var a=e.mode,t=e.actMode;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:a?"page page-dark":"page page-light"},c.a.createElement("div",{className:"container container-not-found"},c.a.createElement("img",{src:pe.a,alt:"404"}))),c.a.createElement(N,{selected:"0",mode:a,actMode:t}))}),de=function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0],o=a[1];Object(n.useEffect)((function(){var e=localStorage.getItem("modeDark")||"true";o("false"!==e)}),[o]);var l=function(){t?(localStorage.setItem("modeDark","false"),o(!1)):(localStorage.setItem("modeDark","true"),o(!0)),console.log(t)};return c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(k,{mode:t,actMode:l})),c.a.createElement(i.a,{exact:!0,path:"/about-me"},c.a.createElement(re,{mode:t,actMode:l})),c.a.createElement(i.a,{exact:!0,path:"/my-portfolio"},c.a.createElement(ie,{mode:t,actMode:l})),c.a.createElement(i.a,null,c.a.createElement(ue,{mode:t,actMode:l})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(r.a,null,c.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[53,1,2]]]);
//# sourceMappingURL=main.26595bfb.chunk.js.map