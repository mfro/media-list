(function(e){function t(t){for(var c,u,l=t[0],i=t[1],o=t[2],s=0,b=[];s<l.length;s++)u=l[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(t);while(b.length)b.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(c=!1)}c&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},r={index:0},a=[];function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var f=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"30c4":function(e,t,n){"use strict";n("645f")},"645f":function(e,t,n){},"8cd7":function(e,t,n){"use strict";n("b4d8")},"8ee0":function(e,t,n){"use strict";n("9a4a")},"92a3":function(e,t,n){"use strict";n("b68b")},"9a4a":function(e,t,n){},b4d8:function(e,t,n){},b68b:function(e,t,n){},bbef:function(e,t,n){"use strict";n("c558")},c558:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("fd85"),n("15db"),n("c026"),n("4031"),n("241c"),n("5a85"),n("534d"),n("f432");var c=n("79c4"),r=n("5a0f"),a=n("9a81"),u=Object(c["z"])("data-v-f245e3aa"),l=u((function(e,t,n,r,a,l){var i=Object(c["r"])("media-search"),o=Object(c["r"])("v-card"),f=Object(c["r"])("media-item"),s=Object(c["r"])("v-flex"),b=Object(c["r"])("media-details"),d=Object(c["r"])("v-dialog"),j=Object(c["r"])("v-app");return Object(c["l"])(),Object(c["f"])(j,{class:"app"},{default:u((function(){return[Object(c["i"])(o,{class:"ma-1",style:{overflow:"hidden"}},{default:u((function(){return[Object(c["i"])(i,{onInput:r.onInput},null,8,["onInput"])]})),_:1}),r.context.data?(Object(c["l"])(),Object(c["f"])(s,{key:0,"align-start":"",class:"pr-1",style:{"flex-wrap":"wrap"}},{default:u((function(){return[(Object(c["l"])(!0),Object(c["f"])(c["a"],null,Object(c["p"])(r.context.data.state.movies,(function(e){return Object(c["l"])(),Object(c["f"])(f,{key:e,value:e,class:"ml-1 mb-1",onClick:function(t){return r.open(e)}},null,8,["value","onClick"])})),128))]})),_:1})):Object(c["g"])("",!0),Object(c["i"])(d,{modelValue:null!=r.opened,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.opened=null})},{default:u((function(){return[Object(c["i"])(o,{style:{width:"90vw","max-width":"800px",overflow:"hidden"}},{default:u((function(){return[Object(c["i"])(b,{value:r.opened,onDelete:t[1]||(t[1]=function(e){return r.onDelete(r.opened),r.opened=null})},null,8,["value"])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})})),i=Object(c["z"])("data-v-7a57ea66");Object(c["n"])("data-v-7a57ea66");var o=Object(c["h"])("close");Object(c["m"])();var f=i((function(e,t,n,r,a,u){var l=Object(c["r"])("v-text-field"),f=Object(c["r"])("v-icon"),s=Object(c["r"])("v-button"),b=Object(c["r"])("v-flex"),d=Object(c["r"])("search-result");return Object(c["l"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(b,{class:"bar-container"},{default:i((function(){return[Object(c["i"])(l,{placeholder:"search",modelValue:r.query,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.query=e}),class:"mt-0",style:{flex:"1 1"}},null,8,["modelValue"]),Object(c["i"])(s,{icon:"",class:"close-button",onClick:t[2]||(t[2]=function(e){return r.query=""})},{default:i((function(){return[Object(c["i"])(f,null,{default:i((function(){return[o]})),_:1})]})),_:1})]})),_:1}),Object(c["i"])(b,{"align-start":"",style:{"overflow-x":"scroll"}},{default:i((function(){return[(Object(c["l"])(!0),Object(c["f"])(c["a"],null,Object(c["p"])(r.results,(function(e){return Object(c["l"])(),Object(c["f"])(d,{key:e,value:e,onClick:function(t){return r.onInput(e)}},null,8,["value","onClick"])})),128))]})),_:1})],64)})),s=n("7a28");n("c1c3"),n("9588"),n("32ec"),n("cbcf"),n("862d");function b(e){return d.apply(this,arguments)}function d(){return d=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=t.toLowerCase().replace(/[^a-z0-9 ]/g,"").replace(/ /g,"_"),0!=t.length){e.next=3;break}return e.abrupt("return",[]);case 3:return e.abrupt("return",new Promise((function(e){var n="imdb$".concat(t),c=window;c[n]=function(t){delete c[n],document.head.removeChild(r),e(t.d)};var r=document.createElement("script");r.src="https://sg.media-imdb.com/suggests/".concat(t[0],"/").concat(t,".json"),r.async=!0,document.head.appendChild(r)})));case 4:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}var j=Object(c["z"])("data-v-27c2142e");Object(c["n"])("data-v-27c2142e");var O=Object(c["h"])("theaters"),v=Object(c["i"])("span",{class:"my-1"},null,-1),p=Object(c["i"])("span",{class:"my-3"},null,-1);Object(c["m"])();var m=j((function(e,t,n,r,a,u){var l=Object(c["r"])("v-icon"),i=Object(c["r"])("v-flex"),o=Object(c["r"])("v-text"),f=Object(c["r"])("v-button");return Object(c["l"])(),Object(c["f"])(f,{text:"",tile:"",class:"button px-0",onClick:t[1]||(t[1]=function(t){return e.$emit("click",n.value)})},{default:j((function(){return[Object(c["i"])(i,{class:"result"},{default:j((function(){return[n.value.i?(Object(c["l"])(),Object(c["f"])("img",{key:0,src:r.imageUrl},null,8,["src"])):(Object(c["l"])(),Object(c["f"])(i,{key:1,"align-center":"","justify-center":"",class:"image-placeholder"},{default:j((function(){return[Object(c["i"])(l,{"x-large":""},{default:j((function(){return[O]})),_:1})]})),_:1})),Object(c["i"])(i,{column:"","align-start":"",class:"px-3 py-1 details"},{default:j((function(){return[Object(c["i"])(o,{title:""},{default:j((function(){return[Object(c["h"])(Object(c["v"])(n.value.l),1)]})),_:1}),v,Object(c["i"])(o,{subtitle:""},{default:j((function(){return[Object(c["h"])(Object(c["v"])(n.value.y),1)]})),_:1}),p,Object(c["i"])(o,{subtitle:""},{default:j((function(){return[Object(c["h"])(Object(c["v"])(n.value.s),1)]})),_:1}),Object(c["i"])(i,{grow:""})]})),_:1})]})),_:1})]})),_:1})})),h={name:"search-result",props:{value:Object},emits:["click"],setup:function(e){var t=Object(c["d"])((function(){return e.value.i[0].replace("._V1_.jpg","._V1._SX128_CR0,0,128,186_.jpg")}));return{imageUrl:t}}};n("30c4");h.render=m,h.__scopeId="data-v-27c2142e";var _=h,g={name:"media-search",components:{SearchResult:_},emits:["input"],setup:function(e,t){var n=t.emit,r=Object(c["u"])(""),a=Object(c["u"])([]);return Object(c["w"])(r,function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:if(n=e.sent,t==r.value){e.next=5;break}return e.abrupt("return");case 5:a.value=n.filter((function(e){return"feature"==e.q}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),{query:r,results:a,onInput:function(e){r.value="",n("input",e)}}}};n("8cd7");g.render=f,g.__scopeId="data-v-7a57ea66";var y=g,w=Object(c["z"])("data-v-429be233");Object(c["n"])("data-v-429be233");var x=Object(c["h"])("theaters");Object(c["m"])();var k=w((function(e,t,n,r,a,u){var l=Object(c["r"])("v-icon"),i=Object(c["r"])("v-flex"),o=Object(c["r"])("v-button");return Object(c["l"])(),Object(c["f"])(o,{class:"button px-0",onClick:t[1]||(t[1]=function(t){return e.$emit("click",n.value)})},{default:w((function(){return[Object(c["i"])(i,{class:"result"},{default:w((function(){return[n.value.i?(Object(c["l"])(),Object(c["f"])("img",{key:0,src:r.imageUrl,style:r.imageStyle},null,12,["src"])):(Object(c["l"])(),Object(c["f"])(i,{key:1,style:r.imageStyle,"align-center":"","justify-center":"",class:"image-placeholder"},{default:w((function(){return[Object(c["i"])(l,{"x-large":""},{default:w((function(){return[x]})),_:1})]})),_:1},8,["style"]))]})),_:1})]})),_:1})})),C=Object(c["u"])(window.innerWidth);window.addEventListener("resize",(function(){return C.value=window.innerWidth}));var I={name:"media-item",props:{value:Object},emits:["click"],setup:function(e){var t=Object(c["d"])((function(){var e=180,t=Math.ceil((C.value-4)/e),n=Math.floor((C.value-4)/t)-4;return n})),n=Object(c["d"])((function(){return 1.453125*t.value})),r=Object(c["d"])((function(){return e.value.i[0].replace("._V1_.jpg","._V1._SX".concat(2*t.value,"_CR0,0,").concat(2*t.value,",").concat(2*n.value,"_.jpg"))})),a=Object(c["d"])((function(){return{width:"".concat(t.value,"px"),height:"".concat(n.value,"px")}}));return{imageUrl:r,imageStyle:a}}};n("92a3");I.render=k,I.__scopeId="data-v-429be233";var S=I,V=Object(c["z"])("data-v-7ad50ded");Object(c["n"])("data-v-7ad50ded");var M=Object(c["h"])("theaters"),P=Object(c["i"])("span",{class:"my-1"},null,-1),R=Object(c["i"])("span",{class:"my-3"},null,-1),U=Object(c["h"])("remove"),z=Object(c["i"])("span",{class:"my-1"},null,-1),D=Object(c["h"])("imdb"),q=Object(c["i"])("span",{class:"mx-1"},null,-1),E=Object(c["h"])("google"),L=Object(c["i"])("span",{class:"my-1"},null,-1);Object(c["m"])();var W=V((function(e,t,n,r,a,u){var l=Object(c["r"])("v-icon"),i=Object(c["r"])("v-flex"),o=Object(c["r"])("v-text"),f=Object(c["r"])("v-button");return Object(c["l"])(),Object(c["f"])(i,{class:"result"},{default:V((function(){return[n.value.i?(Object(c["l"])(),Object(c["f"])("img",{key:0,src:r.imageUrl,style:r.imageStyle},null,12,["src"])):(Object(c["l"])(),Object(c["f"])(i,{key:1,style:r.imageStyle,"align-center":"","justify-center":"",class:"image-placeholder"},{default:V((function(){return[Object(c["i"])(l,{"x-large":""},{default:V((function(){return[M]})),_:1})]})),_:1},8,["style"])),Object(c["i"])(i,{grow:"",column:"",class:"px-3 py-1 details"},{default:V((function(){return[Object(c["i"])(i,null,{default:V((function(){return[Object(c["i"])(o,{title:""},{default:V((function(){return[Object(c["h"])(Object(c["v"])(n.value.l),1)]})),_:1}),Object(c["i"])(i,{grow:""})]})),_:1}),P,Object(c["i"])(o,{subtitle:""},{default:V((function(){return[Object(c["h"])(Object(c["v"])(n.value.y),1)]})),_:1}),R,Object(c["i"])(i,{grow:"",column:"","align-end":"","justify-end":""},{default:V((function(){return[Object(c["i"])(f,{small:"",color:"error",onClick:r.remove},{default:V((function(){return[U]})),_:1},8,["onClick"]),z,Object(c["i"])(i,null,{default:V((function(){return[Object(c["i"])(f,{small:"",color:"default",onClick:r.openImdb},{default:V((function(){return[D]})),_:1},8,["onClick"]),q,Object(c["i"])(f,{small:"",color:"default",onClick:r.openGoogle},{default:V((function(){return[E]})),_:1},8,["onClick"])]})),_:1}),L]})),_:1})]})),_:1})]})),_:1})})),X=Object(c["u"])(window.innerWidth);window.addEventListener("resize",(function(){return X.value=window.innerWidth}));var $={name:"media-details",props:{value:Object},emits:["delete"],setup:function(e,t){var n=t.emit,r=Object(c["d"])((function(){var e=180,t=Math.ceil((X.value-4)/e),n=Math.floor((X.value-4)/t)-4;return n})),a=Object(c["d"])((function(){return 1.453125*r.value})),u=Object(c["d"])((function(){return e.value.i[0].replace("._V1_.jpg","._V1._SX".concat(r.value,"_CR0,0,").concat(r.value,",").concat(a.value,"_.jpg"))})),l=Object(c["d"])((function(){return{width:"".concat(r.value,"px"),height:"".concat(a.value,"px")}}));return{imageUrl:u,imageStyle:l,remove:function(){n("delete",e.value)},openImdb:function(){var t="https://www.imdb.com/title/".concat(e.value.id,"/");window.open(t,"_blank").focus()},openGoogle:function(){var t="https://www.google.com/search?q=".concat(e.value.l,"+(").concat(e.value.y,")");window.open(t,"_blank").focus()}}}};n("bbef");$.render=W,$.__scopeId="data-v-7ad50ded";var G=$,J={name:"media-list",components:{MediaSearch:y,MediaItem:S,MediaDetails:G},setup:function(e){var t=Object(c["j"])("context"),n=Object(c["u"])(null);return{opened:n,context:t,onInput:function(e){t.data.mutate("ADD_MOVIE",e)},onDelete:function(e){var n=t.data.state.movies.indexOf(e);t.data.mutate("DEL_MOVIE",n)},open:function(e){n.value=e}}}};n("8ee0");J.render=l,J.__scopeId="data-v-f245e3aa";var T=J,A=n("ccef"),B=n("e421");function F(e){var t=Object(c["t"])({data:null});return Object(A["a"])(B["a"],e).then((function(e){e.state=Object(c["o"])(e.state),t.data=e})),t}var H=new URL(location.href),K=H.searchParams.get("remote");Object(a["a"])(null!=K,"remote");var N=F(K),Q=Object(c["e"])(T);Q.use(r["a"]),Q.provide("context",N),Q.mount("#app")}});
//# sourceMappingURL=index.d7540f64.js.map