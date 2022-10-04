(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{21:function(e,t,n){},23:function(e,t){},39:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},56:function(e,t){},57:function(e,t){},58:function(e,t){},59:function(e,t){},60:function(e,t){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(19),s=n(16),i=n(5),a=n(0),r=n(2),o=Object(a.createContext)(),l=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(i.a)(n,2),s=c[0],l=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(r.jsx)(o.Provider,{value:[{themeName:s,toggleTheme:function(){var e="dark"===s?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},j=n(3),u="https://a-r-j-u-n-s.github.io/",d="home",b="arjun srivastava",h="software developer and musician",m="here's some stuff i've been working on recently!",p="https://drive.google.com/file/d/1jMtR7GI8Ep8_82HVB6yuDoDzdHDI5dxu/view?usp=sharing",f={linkedin:"https://www.linkedin.com/in/arjun-srivastava042701/",github:"https://github.com/a-r-j-u-n-s",youtube:"https://www.youtube.com/channel/UCLj5djpva10jFLe6WB7WQrg",spotify:""},O=[{name:"SoulsSave",description:"A program for managing savegames in FromSoftware's PC videogames, complete with a full graphical user interface and command line interface. Features include automatic save folder backups, seamless interchanging of saves, recovering corrupted saves, and more. Developed in pure Python and can be used with multiple games simultaneously!",stack:["Python","Batch","Tcl"],sourceCode:"https://github.com/a-r-j-u-n-s/SoulsSave"},{name:"RDXtreme",description:"A highly customizeable I/O testing program for storage devices (HDD, SSD), and memory (DIMM). Supports a wide variety of I/O tests and input parameters and runs on both ARM64 and x86 architectures",stack:["Rust","PowerShell","Win32"],sourceCode:"https://github.com/a-r-j-u-n-s/RDXtreme"},{name:"Data Migration - Firestore/Redis",description:"A bash CLI and Python script for local import/export jobs between Google Cloud Firestore and redis. Intended to be used for small projects where quick data transfer is needed.",stack:["Python","Bash","Redis","Firestore"],sourceCode:"https://github.com/a-r-j-u-n-s/data-migration-firestore-redis"}],x=[{name:"Rain - Unprocessed (Acoustic Cover)",description:"My cover of Rain by Unprocessed",link:"https://www.youtube.com/watch?v=SzgINZ0Wn2w",embedId:"SzgINZ0Wn2w"},{name:"G.O.A.T - Polyphia (Ukulele Cover)",description:"My cover of Polyphia's 'G.O.A.T', but on a Uke",link:"https://www.youtube.com/watch/RkRrl2ozp8k",embedId:"RkRrl2ozp8k"},{name:"Roz Roz / Magic (Mashup)",description:'A mashup I produced and played guitar on for my band, "Unplugged". We combined Roz Roz by Shilpa Rao and the Yellow Diary with Magic by Coldplay',link:"https://www.youtube.com/watch?v=UYcRUVlF9-E",embedId:"UYcRUVlF9-E"},{name:"Death Note - Ichika Nito (Guitar Cover)",description:"One of the hardest covers I've ever attempted",link:"https://www.youtube.com/watch?v=oqAoS5xQupw",embedId:"oqAoS5xQupw"},{name:"Best Part - Daniel Caesar ft. H.E.R. (Cover)",description:"Fingerstyle guitar/vocal cover with a friend of one of my favorite songs.",link:"https://www.youtube.com/watch?v=Zjtz8UDJ4lw",embedId:"Zjtz8UDJ4lw"},{name:"moonrise - arjun (guitar playthrough)",description:"Me playing the first song I ever wrote!",link:"https://www.youtube.com/watch?v=5w28hk2gG1A",embedId:"5w28hk2gG1A"},{name:"Real - Unprocessed ft. Tim Henson (Solo Cover)",description:"Covering a great solo from one of my favorite guitarists",link:"https://www.youtube.com/watch?v=_QyIU8uKn-4",embedId:"_QyIU8uKn-4"}],v=["Python","Rust","C++","JavaScript","C","Java","Node.js","MongoDB","React","Django","Git","Redis","Kafka","Win32"],g="arj1@uw.edu",k=n(26),w=n.n(k),N=n(24),y=n.n(N),_=n(28),C=n.n(_),S=n(27),I=n.n(S),R=(n(39),function(){var e=Object(a.useContext)(o),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,s=Object(a.useState)(!1),l=Object(i.a)(s,2),j=l[0],u=l[1],d=function(){return u(!j)};return Object(r.jsxs)("nav",{className:"center nav",children:[Object(r.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(r.jsx)("li",{className:"nav__list-item",children:Object(r.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,x.length?Object(r.jsx)("li",{className:"nav__list-item",children:Object(r.jsx)("a",{href:"#music",onClick:d,className:"link link--nav",children:"Music"})}):null,v.length?Object(r.jsx)("li",{className:"nav__list-item",children:Object(r.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,g?Object(r.jsx)("li",{className:"nav__list-item",children:Object(r.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(r.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(r.jsx)(y.a,{}):Object(r.jsx)(w.a,{})}),Object(r.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(r.jsx)(I.a,{}):Object(r.jsx)(C.a,{})})]})}),D=(n(43),function(){var e=u,t=d;return Object(r.jsxs)("header",{className:"header center",children:[Object(r.jsx)("h3",{children:e?Object(r.jsx)("a",{href:e,className:"link",children:t}):t}),Object(r.jsx)(R,{})]})}),P=n(17),U=n.n(P),A=n(29),M=n.n(A),z=n(30),E=n.n(z),F=(n(44),function(){var e=b,t=h,n=m,c=p,s=f;return Object(r.jsxs)("div",{className:"about center",children:[e&&Object(r.jsxs)("h1",{children:["hi, i'm"," ",Object(r.jsx)("span",{className:"about__name",children:e})]}),t&&Object(r.jsx)("h2",{className:"about__role",children:t}),Object(r.jsx)("p",{className:"about__desc",children:n&&n}),Object(r.jsxs)("div",{className:"about__contact center",children:[c&&Object(r.jsx)("a",{href:c,children:Object(r.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(r.jsxs)(r.Fragment,{children:[s.github&&Object(r.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(r.jsx)(U.a,{})}),s.linkedin&&Object(r.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(r.jsx)(M.a,{})}),s.youtube&&Object(r.jsx)("a",{href:s.youtube,"aria-label":"youtube",className:"link link--icon",children:Object(r.jsx)(E.a,{})})]})]})]})}),G=n(12),B=n.n(G),W=n(31),L=n.n(W),J=(n(45),function(e){var t=e.project;return Object(r.jsxs)("div",{className:"project",children:[Object(r.jsx)("h3",{children:t.name}),Object(r.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(r.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(r.jsx)("li",{className:"project__stack-item",children:e},B()())}))}),t.sourceCode&&Object(r.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(r.jsx)(U.a,{})}),t.livePreview&&Object(r.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(r.jsx)(L.a,{})})]})}),T=(n(21),function(){return O.length?Object(r.jsxs)("section",{id:"projects",className:"section projects",children:[Object(r.jsx)("h2",{className:"section__title",children:"projects"}),Object(r.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(r.jsx)(J,{project:e},B()())}))})]}):null}),H=(n(46),function(){return v.length?Object(r.jsxs)("section",{className:"section skills",id:"skills",children:[Object(r.jsx)("h2",{className:"section__title",children:"technical skills"}),Object(r.jsx)("ul",{className:"skills__list",children:v.map((function(e){return Object(r.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},B()())}))})]}):null}),Q=n(32),Y=n.n(Q),Z=(n(47),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(r.jsx)("div",{className:"scroll-top",children:Object(r.jsx)("a",{href:"#top",children:Object(r.jsx)(Y.a,{fontSize:"large"})})}):null}),q=(n(48),function(){return g?Object(r.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(r.jsx)("h2",{className:"section__title",children:"Contact"}),Object(r.jsx)("a",{href:"mailto:".concat(g),children:Object(r.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),K=(n(49),function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("a",{href:"https://github.com/a-r-j-u-n-s",className:"link footer__link",children:"Arjun Srivastava"})})}),V=(n(50),function(e){var t=e.embedId;return Object(r.jsx)("div",{className:"video-responsive",children:Object(r.jsx)("iframe",{width:"relative",height:"relative",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})}),X=function(e){var t=e.music;return Object(r.jsxs)("div",{className:"music",children:[Object(r.jsx)("h3",{children:t.name}),Object(r.jsx)(V,{embedId:t.embedId}),Object(r.jsx)("p",{className:"music__description",children:t.description})]})},$=(n(51),function(){return x.length?Object(r.jsxs)("section",{id:"music",className:"section projects",children:[Object(r.jsx)("h2",{className:"section__title",children:"music"}),Object(r.jsx)("div",{className:"music__grid",children:x.map((function(e){return Object(r.jsx)(X,{music:e},B()())}))})]}):null}),ee=n(13);n(63);function te(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(1),l=Object(i.a)(o,2),j=l[0],u=l[1];function d(e){u((function(t){return t+e}))}var b=e.pdf;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ee.a,{file:b,options:{workerSrc:"/pdf.worker.js"},onLoadSuccess:function(){s(c),u(1)},children:Object(r.jsx)(ee.b,{pageNumber:j})}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["Page ",j||(c?1:"--")," of ",c||"--"]}),Object(r.jsx)("button",{type:"button",disabled:j<=1,onClick:function(){d(-1)},children:"Previous"}),Object(r.jsx)("button",{type:"button",disabled:j>=c,onClick:function(){d(1)},children:"Next"})]})]})}ee.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(ee.c.version,"/pdf.worker.js");var ne=n.p+"static/media/Arjun_Srivastava_Resume.0cf634cd.pdf",ce=(n(64),function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("main",{children:[Object(r.jsx)(F,{}),Object(r.jsx)(T,{}),Object(r.jsx)($,{}),Object(r.jsx)(H,{}),Object(r.jsx)(q,{})]}),Object(r.jsx)(Z,{})]})}),se=function(){var e=Object(a.useContext)(o),t=Object(i.a)(e,1)[0].themeName;return Object(r.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(r.jsx)(D,{}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{path:"/",element:Object(r.jsx)(ce,{})}),Object(r.jsx)(j.a,{path:"/resume",element:Object(r.jsx)(te,{pdf:ne})})]}),Object(r.jsx)(K,{})]})};n(65);Object(s.render)(Object(r.jsx)(l,{children:Object(r.jsx)(c.a,{children:Object(r.jsx)(se,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.048cf276.chunk.js.map