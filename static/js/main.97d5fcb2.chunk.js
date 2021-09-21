(this["webpackJsonpnomflix-clone"]=this["webpackJsonpnomflix-clone"]||[]).push([[0],{65:function(e,t,n){"use strict";n.r(t);var a,r,i,c,o,s,l,u,d,b,j,p,g,h,x,O,f,m,v,_,y,w,S,k,U,z,R,T,M,C,I,N,P=n(1),E=n(31),F=n.n(E),V=n(3),q=n(2),B=n(32),J=Object(q.createGlobalStyle)(a||(a=Object(V.a)(["\n    ","\n    a {\n        text-decoration : none;\n        color: inherit;\n    }\n    * {\n        box-sizing: border-box;\n    }\n    body {\n        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 12px;\n        background-color: rgba(20, 20, 20,1);\n        color: white;\n        padding-top: 50px;\n    }\n"])),B.a),L=n(14),A=n(4),D=n(0),G=q.default.header(r||(r=Object(V.a)(["\n    color: white;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n\n    background-color: rgba(20, 20, 20, 0.8);\n    z-index: 10;\n    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n\n"]))),H=q.default.ul(i||(i=Object(V.a)(["\n    display: flex;\n"]))),K=q.default.li(c||(c=Object(V.a)(["\n    width: 80px;\n    height: 50px;\n    text-align: center;\n    border-bottom: 3px solid\n                ",";\n    transition: border-bottom 0.5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),Q=Object(q.default)(L.b)(o||(o=Object(V.a)(["\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),W=Object(A.j)((function(e){var t=e.location.pathname;return Object(D.jsx)(G,{children:Object(D.jsxs)(H,{children:[Object(D.jsx)(K,{current:"/"===t,children:Object(D.jsx)(Q,{to:"/",children:"Movies"})}),Object(D.jsx)(K,{current:"/tv"===t,children:Object(D.jsx)(Q,{to:"/tv",children:"TV"})}),Object(D.jsx)(K,{current:"/search"===t,children:Object(D.jsx)(Q,{to:"/search",children:"Search"})})]})})})),X=n(11),Y=n.n(X),Z=n(12),$=n(5),ee=n(37),te=n.n(ee).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"17f63f0af9afb30432061e00d90f277a",language:"en-US"}}),ne=function(){return te.get("tv/top_rated")},ae=function(){return te.get("tv/popular")},re=function(){return te.get("tv/airing_today")},ie=function(e){return te.get("tv/".concat(e),{params:{append_to_response:"videos"}})},ce=function(e){return te.get("search/tv",{params:{query:encodeURIComponent(e)}})},oe=function(){return te.get("movie/now_playing")},se=function(){return te.get("movie/upcoming")},le=function(){return te.get("movie/popular")},ue=function(e){return te.get("movie/".concat(e),{params:{append_to_response:"videos"}})},de=function(e){return te.get("search/movie",{params:{query:encodeURIComponent(e)}})},be=q.default.div(s||(s=Object(V.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]))),je=q.default.span(l||(l=Object(V.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]))),pe=q.default.div(u||(u=Object(V.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]))),ge=function(e){var t=e.title,n=e.children;return Object(D.jsxs)(be,{children:[Object(D.jsx)(je,{children:t}),Object(D.jsx)(pe,{children:n})]})},he=n(2).default.div(d||(d=Object(V.a)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    font-size: 28px;\n    margin-top: 20px;\n"]))),xe=function(){return Object(D.jsx)(he,{children:Object(D.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f0"})})},Oe=q.default.div(b||(b=Object(V.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]))),fe=q.default.span(j||(j=Object(V.a)(["\n  color: ",";\n"])),(function(e){return e.color})),me=function(e){var t=e.text,n=e.color;return Object(D.jsx)(Oe,{children:Object(D.jsx)(fe,{color:n,text:t})})},ve=q.default.div(p||(p=Object(V.a)(["\n  font-size: 12px;\n"]))),_e=q.default.div(g||(g=Object(V.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"])),(function(e){return e.bgUrl})),ye=q.default.span(h||(h=Object(V.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]))),we=q.default.div(x||(x=Object(V.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),_e,ye),Se=q.default.span(O||(O=Object(V.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]))),ke=q.default.span(f||(f=Object(V.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]))),Ue=function(e){var t=e.id,n=e.imageUrl,a=e.title,r=e.rating,i=e.year,c=e.isMovie,o=void 0!==c&&c;return Object(D.jsx)(L.b,{to:o?"/movie/".concat(t):"/show/".concat(t),children:Object(D.jsxs)(ve,{children:[Object(D.jsxs)(we,{children:[Object(D.jsx)(_e,{bgUrl:n}),Object(D.jsxs)(ye,{children:[Object(D.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"})," ",r,"/10"]})]}),Object(D.jsx)(Se,{children:a}),Object(D.jsx)(ke,{children:i})]})})},ze=q.default.div(m||(m=Object(V.a)(["\n  padding: 20px;\n"]))),Re=function(e){var t=e.nowPlaying,n=e.upcoming,a=e.popular,r=e.error;return e.loading?Object(D.jsx)(xe,{}):Object(D.jsxs)(ze,{children:[t&&t.length>0&&Object(D.jsx)(ge,{title:"Now Playing",children:t.map((function(e){return Object(D.jsx)(Ue,{id:e.id,imageUrl:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(D.jsx)(ge,{title:"Upcoming Movies",children:n.map((function(e){return Object(D.jsx)(Ue,{id:e.id,imageUrl:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),a&&a.length>0&&Object(D.jsx)(ge,{title:"Popular Movies",children:a.map((function(e){return Object(D.jsx)(Ue,{id:e.id,imageUrl:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),r&&Object(D.jsx)(me,{color:"#e74c3c",text:r})]})},Te=function(e){e.props;var t=Object(P.useState)(null),n=Object($.a)(t,2),a=n[0],r=n[1],i=Object(P.useState)(null),c=Object($.a)(i,2),o=c[0],s=c[1],l=Object(P.useState)(null),u=Object($.a)(l,2),d=u[0],b=u[1],j=Object(P.useState)(null),p=Object($.a)(j,2),g=p[0],h=p[1],x=Object(P.useState)(!0),O=Object($.a)(x,2),f=O[0],m=O[1];return Object(P.useEffect)((function(){(function(){var e=Object(Z.a)(Y.a.mark((function e(){var t,n,a,i,c,o;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe();case 3:return t=e.sent,n=t.data.results,e.next=7,se();case 7:return a=e.sent,i=a.data.results,e.next=11,le();case 11:c=e.sent,o=c.data.results,r(n),s(i),b(o),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),h("Can't find movie info.");case 21:return e.prev=21,m(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(Re,{nowPlaying:a,upcoming:o,popular:d,error:g,loading:f})})},Me=q.default.div(v||(v=Object(V.a)(["\n  padding: 0px 20px;\n"]))),Ce=q.default.form(_||(_=Object(V.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),Ie=q.default.input(y||(y=Object(V.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]))),Ne=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,r=e.loading,i=e.handleSubmit,c=e.error,o=e.updateTerm;return Object(D.jsxs)(Me,{children:[Object(D.jsx)(Ce,{onSubmit:i,children:Object(D.jsx)(Ie,{placeholder:"Search Movies or TV Shows",value:a,onChange:o})}),r?Object(D.jsx)(xe,{}):Object(D.jsxs)(D.Fragment,{children:[t&&t.length>0&&Object(D.jsx)(ge,{title:"Movie Results",children:t.map((function(e){return Object(D.jsx)(Ue,{id:e.id,imageUrl:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(D.jsx)(ge,{title:"TV Show Results",children:n.map((function(e){return Object(D.jsx)(Ue,{id:e.id,imageUrl:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),c&&Object(D.jsx)(me,{color:"#e74c3c",text:c}),n&&t&&0===n.length&&0===t.length&&Object(D.jsx)(me,{text:"Nothing found",color:"#95a5a6"})]})]})},Pe=function(){var e=Object(P.useState)(null),t=Object($.a)(e,2),n=t[0],a=t[1],r=Object(P.useState)(null),i=Object($.a)(r,2),c=i[0],o=i[1],s=Object(P.useState)(""),l=Object($.a)(s,2),u=l[0],d=l[1],b=Object(P.useState)(!1),j=Object($.a)(b,2),p=j[0],g=j[1],h=Object(P.useState)(null),x=Object($.a)(h,2),O=x[0],f=x[1],m=function(){var e=Object(Z.a)(Y.a.mark((function e(){var t,n,r,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,de(u);case 4:return t=e.sent,n=t.data.results,e.next=8,ce(u);case 8:r=e.sent,i=r.data.results,a(n),o(i),console.log(i),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),f("Can't find results");case 18:return e.prev=18,g(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})));return function(){return e.apply(this,arguments)}}();return Object(D.jsx)(Ne,{movieResults:n,tvResults:c,searchTerm:u,loading:p,error:O,handleSubmit:function(e){e.preventDefault(),""!==u&&m()},updateTerm:function(e){var t=e.target.value;d(t)}})},Ee=q.default.div(w||(w=Object(V.a)(["\n  padding: 20px;\n"]))),Fe=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,r=e.loading,i=e.error;return r?Object(D.jsx)(xe,{}):Object(D.jsxs)(Ee,{children:[t&&t.length>0&&Object(D.jsx)(ge,{title:"Top Rated Shows",children:t.map((function(e){return Object(D.jsx)(Ue,{id:e.id,imageUrl:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(D.jsx)(ge,{title:"Popular Shows",children:n.map((function(e){return Object(D.jsx)(Ue,{id:e.id,imageUrl:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),a&&a.length>0&&Object(D.jsx)(ge,{title:"Airing Today",children:a.map((function(e){return Object(D.jsx)(Ue,{id:e.id,imageUrl:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),i&&Object(D.jsx)(me,{color:"#e74c3c",text:i})]})},Ve=function(){var e=Object(P.useState)(null),t=Object($.a)(e,2),n=t[0],a=t[1],r=Object(P.useState)(null),i=Object($.a)(r,2),c=i[0],o=i[1],s=Object(P.useState)(null),l=Object($.a)(s,2),u=l[0],d=l[1],b=Object(P.useState)(!0),j=Object($.a)(b,2),p=j[0],g=j[1],h=Object(P.useState)(null),x=Object($.a)(h,2),O=x[0],f=x[1];return Object(P.useEffect)((function(){(function(){var e=Object(Z.a)(Y.a.mark((function e(){var t,n,r,i,c,s;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne();case 3:return t=e.sent,n=t.data.results,e.next=7,ae();case 7:return r=e.sent,i=r.data.results,e.next=11,re();case 11:c=e.sent,s=c.data.results,a(n),o(i),d(s),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),f("Can't find TV info.");case 21:return e.prev=21,g(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(D.jsx)(Fe,{topRated:n,popular:c,airingToday:u,loading:p,error:O})},qe=q.default.div(S||(S=Object(V.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),Be=q.default.div(k||(k=Object(V.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),Je=q.default.div(U||(U=Object(V.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]))),Le=q.default.div(z||(z=Object(V.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"])),(function(e){return e.bgImage})),Ae=q.default.div(R||(R=Object(V.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]))),De=q.default.h3(T||(T=Object(V.a)(["\n  font-size: 32px;\n"]))),Ge=q.default.div(M||(M=Object(V.a)(["\n  margin: 20px 0;\n"]))),He=q.default.span(C||(C=Object(V.a)([""]))),Ke=q.default.span(I||(I=Object(V.a)(["\n  margin: 0 10px;\n"]))),Qe=q.default.p(N||(N=Object(V.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]))),We=function(e){var t=e.result,n=e.loading,a=e.error;return null===t||void 0===t?(console.log("result\uac00 \ube44\uc5c8\uc5b4\uc694!"),""):(console.log(a),n?Object(D.jsx)(xe,{}):Object(D.jsxs)(qe,{children:[Object(D.jsx)(Be,{bgImage:t&&t.backdrop_path&&"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(D.jsxs)(Je,{children:[Object(D.jsx)(Le,{bgImage:t&&t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):""}),Object(D.jsxs)(Ae,{children:[Object(D.jsx)(De,{children:t.original_title||t.original_name}),Object(D.jsxs)(Ge,{children:[Object(D.jsx)(He,{children:t.release_date||t.first_air_date}),Object(D.jsx)(Ke,{children:"\u2022"}),Object(D.jsxs)(He,{children:[t.runtime||t.episode_run_time[0]," min"]}),Object(D.jsx)(Ke,{children:"\u2022"}),Object(D.jsx)(He,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(D.jsx)(Qe,{children:t.overview})]})]})]}))},Xe=function(){var e=Object(A.g)(),t=Object(A.h)(),n=Object(A.i)(),a=Object(P.useState)(null),r=Object($.a)(a,2),i=r[0],c=r[1],o=Object(P.useState)(null),s=Object($.a)(o,2),l=s[0],u=s[1],d=Object(P.useState)(!0),b=Object($.a)(d,2),j=b[0],p=b[1],g=Object(P.useState)(t.pathname.includes("/movie/")),h=Object($.a)(g,2),x=h[0],O=(h[1],function(){var e=Object(Z.a)(Y.a.mark((function e(t){var n,a,r;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,e.prev=1,!x){e.next=11;break}return e.next=5,ue(t);case 5:a=e.sent,n=a.data,console.log(n),c(n),e.next=17;break;case 11:return e.next=13,ie(t);case 13:r=e.sent,n=r.data,console.log(n),c(n);case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(1),console.log("error occur!"),u("Can't find anything.");case 23:return e.prev=23,p(!1),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[1,19,23,26]])})));return function(t){return e.apply(this,arguments)}}());return Object(P.useEffect)((function(){if(!1===isNaN(Number(n.id))){var t=Number(n.id);O(t)}else e.push("/"),console.log("now steal alive")}),[]),Object(D.jsx)(We,{result:i,error:l,loading:j})},Ye=function(){return Object(D.jsxs)(L.a,{children:[Object(D.jsx)(W,{}),Object(D.jsxs)(A.d,{children:[Object(D.jsx)(A.b,{path:"/",exact:!0,component:Te}),Object(D.jsx)(A.b,{path:"/tv",component:Ve}),Object(D.jsx)(A.b,{path:"/search",component:Pe}),Object(D.jsx)(A.b,{path:"/movie/:id",component:Xe}),Object(D.jsx)(A.b,{path:"/show/:id",component:Xe}),Object(D.jsx)(A.a,{from:"*",to:"/"})]})]})},Ze=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Ye,{}),Object(D.jsx)(J,{})]})};F.a.render(Object(D.jsx)(Ze,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.97d5fcb2.chunk.js.map