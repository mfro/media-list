(function(e){function t(t){for(var c,u,l=t[0],i=t[1],o=t[2],s=0,d=[];s<l.length;s++)u=l[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(c=!1)}c&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},r={index:0},a=[];function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var f=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0f50":function(e,t,n){"use strict";n("fce9")},"30c4":function(e,t,n){"use strict";n("645f")},"645f":function(e,t,n){},"7bde":function(e,t,n){"use strict";n("ca99")},"80ff":function(e,t,n){},9458:function(e,t,n){"use strict";n("cd5c")},"954e":function(e,t,n){"use strict";n("80ff")},b91c:function(e,t,n){},ca99:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("fd85"),n("15db"),n("c026"),n("4031"),n("241c"),n("5a85"),n("534d"),n("f432");var c=n("79c4"),r=n("5a0f"),a=n("9a81"),u=Object(c["z"])("data-v-7fe49c58"),l=u((function(e,t,n,r,a,l){var i=Object(c["r"])("media-search"),o=Object(c["r"])("v-card"),f=Object(c["r"])("media-item"),s=Object(c["r"])("v-flex"),d=Object(c["r"])("media-details"),b=Object(c["r"])("v-dialog"),j=Object(c["r"])("v-app");return Object(c["l"])(),Object(c["f"])(j,{class:"app"},{default:u((function(){return[Object(c["i"])(o,{class:"ma-1",style:{overflow:"hidden"}},{default:u((function(){return[Object(c["i"])(i,{onInput:r.onInput},null,8,["onInput"])]})),_:1}),r.context.data?(Object(c["l"])(),Object(c["f"])(s,{key:0,"align-start":"",class:"pr-1",style:{"flex-wrap":"wrap"}},{default:u((function(){return[(Object(c["l"])(!0),Object(c["f"])(c["a"],null,Object(c["p"])(r.context.data.state.movies,(function(e){return Object(c["l"])(),Object(c["f"])(f,{key:e,value:e,class:"ml-1 mb-1",onClick:function(t){return r.open(e)}},null,8,["value","onClick"])})),128))]})),_:1})):Object(c["g"])("",!0),Object(c["i"])(b,{modelValue:null!=r.opened,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.opened=null})},{default:u((function(){return[Object(c["i"])(o,{style:{overflow:"hidden"}},{default:u((function(){return[Object(c["i"])(d,{value:r.opened,onClose:t[1]||(t[1]=function(e){return r.opened=null}),onWatch:t[2]||(t[2]=function(e){return r.onWatch(r.opened),r.opened=null})},null,8,["value"])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})})),i=Object(c["z"])("data-v-78ca7d60");Object(c["n"])("data-v-78ca7d60");var o=Object(c["h"])("close");Object(c["m"])();var f=i((function(e,t,n,r,a,u){var l=Object(c["r"])("v-text-field"),f=Object(c["r"])("v-icon"),s=Object(c["r"])("v-button"),d=Object(c["r"])("v-flex"),b=Object(c["r"])("search-result");return Object(c["l"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(d,{class:"bar-container"},{default:i((function(){return[Object(c["i"])(l,{placeholder:"add movies",modelValue:r.query,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.query=e}),class:"mt-0",style:{flex:"1 1"}},null,8,["modelValue"]),Object(c["i"])(s,{icon:"",class:"close-button",onClick:t[2]||(t[2]=function(e){return r.query=""})},{default:i((function(){return[Object(c["i"])(f,null,{default:i((function(){return[o]})),_:1})]})),_:1})]})),_:1}),Object(c["i"])(d,{"align-start":"",style:{"overflow-x":"scroll"}},{default:i((function(){return[(Object(c["l"])(!0),Object(c["f"])(c["a"],null,Object(c["p"])(r.results,(function(e){return Object(c["l"])(),Object(c["f"])(b,{key:e,value:e,onClick:function(t){return r.onInput(e)}},null,8,["value","onClick"])})),128))]})),_:1})],64)})),s=n("7a28");n("c1c3"),n("9588"),n("32ec"),n("cbcf"),n("862d");function d(e){return b.apply(this,arguments)}function b(){return b=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=t.toLowerCase().replace(/[^a-z0-9 ]/g,"").replace(/ /g,"_"),0!=t.length){e.next=3;break}return e.abrupt("return",[]);case 3:return e.abrupt("return",new Promise((function(e){var n="imdb$".concat(t),c=window;c[n]=function(t){delete c[n],document.head.removeChild(r),e(t.d)};var r=document.createElement("script");r.src="https://sg.media-imdb.com/suggests/".concat(t[0],"/").concat(t,".json"),r.async=!0,document.head.appendChild(r)})));case 4:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}var j=Object(c["z"])("data-v-27c2142e");Object(c["n"])("data-v-27c2142e");var v=Object(c["h"])("theaters"),O=Object(c["i"])("span",{class:"my-1"},null,-1),p=Object(c["i"])("span",{class:"my-3"},null,-1);Object(c["m"])();var m=j((function(e,t,n,r,a,u){var l=Object(c["r"])("v-icon"),i=Object(c["r"])("v-flex"),o=Object(c["r"])("v-text"),f=Object(c["r"])("v-button");return Object(c["l"])(),Object(c["f"])(f,{text:"",tile:"",class:"button px-0",onClick:t[1]||(t[1]=function(t){return e.$emit("click",n.value)})},{default:j((function(){return[Object(c["i"])(i,{class:"result"},{default:j((function(){return[n.value.i?(Object(c["l"])(),Object(c["f"])("img",{key:0,src:r.imageUrl},null,8,["src"])):(Object(c["l"])(),Object(c["f"])(i,{key:1,"align-center":"","justify-center":"",class:"image-placeholder"},{default:j((function(){return[Object(c["i"])(l,{"x-large":""},{default:j((function(){return[v]})),_:1})]})),_:1})),Object(c["i"])(i,{column:"","align-start":"",class:"px-3 py-1 details"},{default:j((function(){return[Object(c["i"])(o,{title:""},{default:j((function(){return[Object(c["h"])(Object(c["v"])(n.value.l),1)]})),_:1}),O,Object(c["i"])(o,{subtitle:""},{default:j((function(){return[Object(c["h"])(Object(c["v"])(n.value.y),1)]})),_:1}),p,Object(c["i"])(o,{subtitle:""},{default:j((function(){return[Object(c["h"])(Object(c["v"])(n.value.s),1)]})),_:1}),Object(c["i"])(i,{grow:""})]})),_:1})]})),_:1})]})),_:1})})),h={name:"search-result",props:{value:Object},emits:["click"],setup:function(e){var t=Object(c["d"])((function(){return e.value.i[0].replace("._V1_.jpg","._V1._SX128_CR0,0,128,186_.jpg")}));return{imageUrl:t}}};n("30c4");h.render=m,h.__scopeId="data-v-27c2142e";var _=h,g={name:"media-search",components:{SearchResult:_},emits:["input"],setup:function(e,t){var n=t.emit,r=Object(c["u"])(""),a=Object(c["u"])([]);return Object(c["w"])(r,function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:if(n=e.sent,t==r.value){e.next=5;break}return e.abrupt("return");case 5:a.value=n.filter((function(e){return"feature"==e.q}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),{query:r,results:a,onInput:function(e){r.value="",n("input",e)}}}};n("9458");g.render=f,g.__scopeId="data-v-78ca7d60";var y=g,w=Object(c["z"])("data-v-d84e59d4");Object(c["n"])("data-v-d84e59d4");var x=Object(c["h"])("theaters");Object(c["m"])();var k=w((function(e,t,n,r,a,u){var l=Object(c["r"])("v-icon"),i=Object(c["r"])("v-flex"),o=Object(c["r"])("v-button");return Object(c["l"])(),Object(c["f"])(o,{tile:"",class:"button px-0",onClick:t[1]||(t[1]=function(t){return e.$emit("click",n.value)})},{default:w((function(){return[Object(c["i"])(i,{class:"result"},{default:w((function(){return[n.value.i?(Object(c["l"])(),Object(c["f"])("img",{key:0,src:r.imageUrl,style:r.imageStyle},null,12,["src"])):(Object(c["l"])(),Object(c["f"])(i,{key:1,style:r.imageStyle,"align-center":"","justify-center":"",class:"image-placeholder"},{default:w((function(){return[Object(c["i"])(l,{"x-large":""},{default:w((function(){return[x]})),_:1})]})),_:1},8,["style"]))]})),_:1})]})),_:1})})),C=Object(c["u"])(window.innerWidth);window.addEventListener("resize",(function(){return C.value=window.innerWidth}));var S={name:"media-item",props:{value:Object},emits:["click"],setup:function(e){var t=Object(c["d"])((function(){var e=180,t=Math.ceil((C.value-4)/e),n=Math.floor((C.value-4)/t)-4;return n})),n=Object(c["d"])((function(){return 1.453125*t.value})),r=Object(c["d"])((function(){return e.value.i[0].replace("._V1_.jpg","._V1._SX".concat(t.value*devicePixelRatio,"_CR0,0,").concat(t.value*devicePixelRatio,",").concat(n.value*devicePixelRatio,"_.jpg"))})),a=Object(c["d"])((function(){return{width:"".concat(t.value,"px"),height:"".concat(n.value,"px")}}));return{imageUrl:r,imageStyle:a}}};n("954e");S.render=k,S.__scopeId="data-v-d84e59d4";var I=S,P=Object(c["z"])("data-v-8614a326");Object(c["n"])("data-v-8614a326");var R=Object(c["i"])("span",{class:"my-1"},null,-1),V=Object(c["h"])("watched"),M=Object(c["i"])("span",{class:"my-1"},null,-1),U=Object(c["h"])("dl"),z=Object(c["i"])("span",{class:"mx-1"},null,-1),W=Object(c["h"])("imdb"),q=Object(c["i"])("span",{class:"mx-1"},null,-1),D=Object(c["h"])("google");Object(c["m"])();var E=P((function(e,t,n,r,a,u){var l=Object(c["r"])("v-text"),i=Object(c["r"])("v-grow"),o=Object(c["r"])("v-button"),f=Object(c["r"])("v-flex");return Object(c["l"])(),Object(c["f"])(f,{column:"",class:"result",style:r.resultStyle},{default:P((function(){return[n.value.i?(Object(c["l"])(),Object(c["f"])("img",{key:0,class:"image",src:r.imageUrl,style:r.imageStyle,onClick:t[1]||(t[1]=function(t){return e.$emit("close")})},null,12,["src"])):Object(c["g"])("",!0),Object(c["i"])(f,{column:"",class:"px-2 py-2 details",style:{flex:"0 0 auto"}},{default:P((function(){return[Object(c["i"])(l,{title:""},{default:P((function(){return[Object(c["h"])(Object(c["v"])(n.value.l),1)]})),_:1}),R,Object(c["i"])(f,{"align-start":""},{default:P((function(){return[Object(c["i"])(l,{subtitle:""},{default:P((function(){return[Object(c["h"])(Object(c["v"])(n.value.y),1)]})),_:1}),Object(c["i"])(i),Object(c["i"])(o,{"x-small":"",color:"error",onClick:r.remove},{default:P((function(){return[V]})),_:1},8,["onClick"])]})),_:1}),M,Object(c["i"])(f,{"justify-end":"",style:{flex:"0 0 auto"}},{default:P((function(){return[Object(c["i"])(o,{"x-small":"",color:"default",onClick:r.openDl},{default:P((function(){return[U]})),_:1},8,["onClick"]),z,Object(c["i"])(o,{"x-small":"",color:"default",onClick:r.openImdb},{default:P((function(){return[W]})),_:1},8,["onClick"]),q,Object(c["i"])(o,{"x-small":"",color:"default",onClick:r.openGoogle},{default:P((function(){return[D]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["style"])})),L=Object(c["u"])(window.innerWidth),$=Object(c["u"])(window.innerHeight);window.addEventListener("resize",(function(){return L.value=window.innerWidth,$.value=window.innerHeight}));var H={name:"media-details",props:{value:Object},emits:["close","watch"],setup:function(e,t){var n=t.emit,r=Object(c["d"])((function(){var e=.7*L.value,t=.66*$.value/1.453125;return Math.min(e,t)})),a=Object(c["d"])((function(){return 1.453125*r.value})),u=Object(c["d"])((function(){return e.value.i[0].replace("._V1_.jpg","._V1._SX".concat(r.value*devicePixelRatio,"_CR0,0,").concat(r.value*devicePixelRatio,",").concat(a.value*devicePixelRatio,"_.jpg"))})),l=Object(c["d"])((function(){return{width:"".concat(r.value,"px"),height:"".concat(a.value,"px")}})),i=Object(c["d"])((function(){return{width:"".concat(r.value,"px")}}));return{imageUrl:u,imageStyle:l,resultStyle:i,remove:function(){n("watch",e.value)},openDl:function(){var t="https://rargb.to/search/?order=seeders&by=DESC&search=".concat(e.value.l,"+").concat(e.value.y);window.open(t,"_blank").focus()},openImdb:function(){var t="https://www.imdb.com/title/".concat(e.value.id,"/");window.open(t,"_blank").focus()},openGoogle:function(){var t="https://www.google.com/search?q=".concat(e.value.l,"+(").concat(e.value.y,")");window.open(t,"_blank").focus()}}}};n("0f50");H.render=E,H.__scopeId="data-v-8614a326";var T=H,X={name:"media-list",components:{MediaSearch:y,MediaItem:I,MediaDetails:T},setup:function(e){var t=Object(c["j"])("context"),n=Object(c["u"])(null);return{opened:n,context:t,onInput:function(e){t.data.mutate("ADD_MOVIE",e)},onWatch:function(e){var n=t.data.state.movies.indexOf(e);t.data.mutate("WATCH_MOVIE",n)},open:function(e){n.value=e}}}};n("7bde"),n("eafb");X.render=l,X.__scopeId="data-v-7fe49c58";var A=X,G=n("ccef"),J=n("e421");function B(e){var t=Object(c["t"])({data:null});return Object(G["a"])(J["a"],e).then((function(e){e.state=Object(c["o"])(e.state),t.data=e})),t}var F=new URL(location.href),K=F.searchParams.get("remote");Object(a["a"])(null!=K,"remote");var N=B(K),Q=Object(c["e"])(A);Q.use(r["a"]),Q.provide("context",N),Q.mount("#app")},cd5c:function(e,t,n){},eafb:function(e,t,n){"use strict";n("b91c")},fce9:function(e,t,n){}});
//# sourceMappingURL=index.2f200cd0.js.map