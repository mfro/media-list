(function(e){function t(t){for(var c,a,l=t[0],i=t[1],o=t[2],f=0,d=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);s&&s(t);while(d.length)d.shift()();return u.push.apply(u,o||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],c=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(c=!1)}c&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={index:0},u=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var s=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"20e7":function(e,t,n){},"2ef2":function(e,t,n){},"30c4":function(e,t,n){"use strict";n("645f")},"3b42":function(e,t,n){"use strict";n("3ed6")},"3d94":function(e,t,n){},"3ed6":function(e,t,n){},"588f":function(e,t,n){"use strict";n("20e7")},"645f":function(e,t,n){},"8d29":function(e,t,n){"use strict";n("2ef2")},9458:function(e,t,n){"use strict";n("cd5c")},cd49:function(e,t,n){"use strict";n.r(t);n("fd85"),n("15db"),n("c026"),n("4031"),n("241c"),n("5a85"),n("534d"),n("f432");var c=n("79c4"),r=n("5a0f"),u=n("9a81"),a=Object(c["z"])("data-v-1db123ab"),l=a((function(e,t,n,r,u,l){var i=Object(c["r"])("media-search"),o=Object(c["r"])("v-card"),s=Object(c["r"])("media-item"),f=Object(c["r"])("v-flex"),d=Object(c["r"])("media-details"),b=Object(c["r"])("v-dialog"),j=Object(c["r"])("v-app");return Object(c["l"])(),Object(c["f"])(j,{class:"app"},{default:a((function(){return[Object(c["i"])(o,{class:"ma-1",style:{overflow:"hidden"}},{default:a((function(){return[Object(c["i"])(i,{onInput:r.onInput},null,8,["onInput"])]})),_:1}),r.context.data?(Object(c["l"])(),Object(c["f"])(f,{key:0,"align-start":"",class:"pr-1",style:{"flex-wrap":"wrap"}},{default:a((function(){return[(Object(c["l"])(!0),Object(c["f"])(c["a"],null,Object(c["p"])(r.context.data.state.movies,(function(e){return Object(c["l"])(),Object(c["f"])(s,{key:e,value:e,class:"ml-1 mb-1",onClick:function(t){return r.open(e)}},null,8,["value","onClick"])})),128))]})),_:1})):Object(c["g"])("",!0),Object(c["i"])(b,{modelValue:null!=r.opened,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.opened=null})},{default:a((function(){return[Object(c["i"])(o,{style:{overflow:"hidden"}},{default:a((function(){return[Object(c["i"])(d,{value:r.opened,onClose:t[1]||(t[1]=function(e){return r.opened=null}),onDelete:t[2]||(t[2]=function(e){return r.onDelete(r.opened),r.opened=null})},null,8,["value"])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})})),i=Object(c["z"])("data-v-78ca7d60");Object(c["n"])("data-v-78ca7d60");var o=Object(c["h"])("close");Object(c["m"])();var s=i((function(e,t,n,r,u,a){var l=Object(c["r"])("v-text-field"),s=Object(c["r"])("v-icon"),f=Object(c["r"])("v-button"),d=Object(c["r"])("v-flex"),b=Object(c["r"])("search-result");return Object(c["l"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(d,{class:"bar-container"},{default:i((function(){return[Object(c["i"])(l,{placeholder:"add movies",modelValue:r.query,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.query=e}),class:"mt-0",style:{flex:"1 1"}},null,8,["modelValue"]),Object(c["i"])(f,{icon:"",class:"close-button",onClick:t[2]||(t[2]=function(e){return r.query=""})},{default:i((function(){return[Object(c["i"])(s,null,{default:i((function(){return[o]})),_:1})]})),_:1})]})),_:1}),Object(c["i"])(d,{"align-start":"",style:{"overflow-x":"scroll"}},{default:i((function(){return[(Object(c["l"])(!0),Object(c["f"])(c["a"],null,Object(c["p"])(r.results,(function(e){return Object(c["l"])(),Object(c["f"])(b,{key:e,value:e,onClick:function(t){return r.onInput(e)}},null,8,["value","onClick"])})),128))]})),_:1})],64)})),f=n("7a28");n("c1c3"),n("9588"),n("32ec"),n("cbcf"),n("862d");function d(e){return b.apply(this,arguments)}function b(){return b=Object(f["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=t.toLowerCase().replace(/[^a-z0-9 ]/g,"").replace(/ /g,"_"),0!=t.length){e.next=3;break}return e.abrupt("return",[]);case 3:return e.abrupt("return",new Promise((function(e){var n="imdb$".concat(t),c=window;c[n]=function(t){delete c[n],document.head.removeChild(r),e(t.d)};var r=document.createElement("script");r.src="https://sg.media-imdb.com/suggests/".concat(t[0],"/").concat(t,".json"),r.async=!0,document.head.appendChild(r)})));case 4:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}var j=Object(c["z"])("data-v-27c2142e");Object(c["n"])("data-v-27c2142e");var O=Object(c["h"])("theaters"),v=Object(c["i"])("span",{class:"my-1"},null,-1),p=Object(c["i"])("span",{class:"my-3"},null,-1);Object(c["m"])();var m=j((function(e,t,n,r,u,a){var l=Object(c["r"])("v-icon"),i=Object(c["r"])("v-flex"),o=Object(c["r"])("v-text"),s=Object(c["r"])("v-button");return Object(c["l"])(),Object(c["f"])(s,{text:"",tile:"",class:"button px-0",onClick:t[1]||(t[1]=function(t){return e.$emit("click",n.value)})},{default:j((function(){return[Object(c["i"])(i,{class:"result"},{default:j((function(){return[n.value.i?(Object(c["l"])(),Object(c["f"])("img",{key:0,src:r.imageUrl},null,8,["src"])):(Object(c["l"])(),Object(c["f"])(i,{key:1,"align-center":"","justify-center":"",class:"image-placeholder"},{default:j((function(){return[Object(c["i"])(l,{"x-large":""},{default:j((function(){return[O]})),_:1})]})),_:1})),Object(c["i"])(i,{column:"","align-start":"",class:"px-3 py-1 details"},{default:j((function(){return[Object(c["i"])(o,{title:""},{default:j((function(){return[Object(c["h"])(Object(c["v"])(n.value.l),1)]})),_:1}),v,Object(c["i"])(o,{subtitle:""},{default:j((function(){return[Object(c["h"])(Object(c["v"])(n.value.y),1)]})),_:1}),p,Object(c["i"])(o,{subtitle:""},{default:j((function(){return[Object(c["h"])(Object(c["v"])(n.value.s),1)]})),_:1}),Object(c["i"])(i,{grow:""})]})),_:1})]})),_:1})]})),_:1})})),h={name:"search-result",props:{value:Object},emits:["click"],setup:function(e){var t=Object(c["d"])((function(){return e.value.i[0].replace("._V1_.jpg","._V1._SX128_CR0,0,128,186_.jpg")}));return{imageUrl:t}}};n("30c4");h.render=m,h.__scopeId="data-v-27c2142e";var g=h,_={name:"media-search",components:{SearchResult:g},emits:["input"],setup:function(e,t){var n=t.emit,r=Object(c["u"])(""),u=Object(c["u"])([]);return Object(c["w"])(r,function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:if(n=e.sent,t==r.value){e.next=5;break}return e.abrupt("return");case 5:u.value=n.filter((function(e){return"feature"==e.q}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),{query:r,results:u,onInput:function(e){r.value="",n("input",e)}}}};n("9458");_.render=s,_.__scopeId="data-v-78ca7d60";var y=_,w=Object(c["z"])("data-v-47162566");Object(c["n"])("data-v-47162566");var x=Object(c["h"])("theaters");Object(c["m"])();var k=w((function(e,t,n,r,u,a){var l=Object(c["r"])("v-icon"),i=Object(c["r"])("v-flex"),o=Object(c["r"])("v-button");return Object(c["l"])(),Object(c["f"])(o,{class:"button px-0",onClick:t[1]||(t[1]=function(t){return e.$emit("click",n.value)})},{default:w((function(){return[Object(c["i"])(i,{class:"result"},{default:w((function(){return[n.value.i?(Object(c["l"])(),Object(c["f"])("img",{key:0,src:r.imageUrl,style:r.imageStyle},null,12,["src"])):(Object(c["l"])(),Object(c["f"])(i,{key:1,style:r.imageStyle,"align-center":"","justify-center":"",class:"image-placeholder"},{default:w((function(){return[Object(c["i"])(l,{"x-large":""},{default:w((function(){return[x]})),_:1})]})),_:1},8,["style"]))]})),_:1})]})),_:1})})),C=Object(c["u"])(window.innerWidth);window.addEventListener("resize",(function(){return C.value=window.innerWidth}));var S={name:"media-item",props:{value:Object},emits:["click"],setup:function(e){var t=Object(c["d"])((function(){var e=180,t=Math.ceil((C.value-4)/e),n=Math.floor((C.value-4)/t)-4;return n})),n=Object(c["d"])((function(){return 1.453125*t.value})),r=Object(c["d"])((function(){return e.value.i[0].replace("._V1_.jpg","._V1._SX".concat(t.value*devicePixelRatio,"_CR0,0,").concat(t.value*devicePixelRatio,",").concat(n.value*devicePixelRatio,"_.jpg"))})),u=Object(c["d"])((function(){return{width:"".concat(t.value,"px"),height:"".concat(n.value,"px")}}));return{imageUrl:r,imageStyle:u}}};n("8d29");S.render=k,S.__scopeId="data-v-47162566";var I=S,P=Object(c["z"])("data-v-42ee4c50");Object(c["n"])("data-v-42ee4c50");var R=Object(c["i"])("span",{class:"my-1"},null,-1),V=Object(c["i"])("span",{class:"my-3"},null,-1),M=Object(c["h"])("remove"),D=Object(c["i"])("span",{class:"my-1"},null,-1),U=Object(c["h"])("dl"),z=Object(c["i"])("span",{class:"mx-1"},null,-1),E=Object(c["h"])("imdb"),q=Object(c["i"])("span",{class:"mx-1"},null,-1),L=Object(c["h"])("google");Object(c["m"])();var W=P((function(e,t,n,r,u,a){var l=Object(c["r"])("v-text"),i=Object(c["r"])("v-flex"),o=Object(c["r"])("v-button");return Object(c["l"])(),Object(c["f"])(i,{column:"",class:"result",style:r.resultStyle},{default:P((function(){return[n.value.i?(Object(c["l"])(),Object(c["f"])("img",{key:0,class:"image",src:r.imageUrl,style:r.imageStyle,onClick:t[1]||(t[1]=function(t){return e.$emit("close")})},null,12,["src"])):Object(c["g"])("",!0),Object(c["i"])(i,{grow:"",column:"",class:"px-2 py-2 details"},{default:P((function(){return[Object(c["i"])(i,null,{default:P((function(){return[Object(c["i"])(l,{title:""},{default:P((function(){return[Object(c["h"])(Object(c["v"])(n.value.l),1)]})),_:1}),Object(c["i"])(i,{grow:""})]})),_:1}),R,Object(c["i"])(l,{subtitle:""},{default:P((function(){return[Object(c["h"])(Object(c["v"])(n.value.y),1)]})),_:1}),V,Object(c["i"])(i,null,{default:P((function(){return[Object(c["i"])(i,{grow:""}),Object(c["i"])(o,{small:"",color:"error",onClick:r.remove},{default:P((function(){return[M]})),_:1},8,["onClick"])]})),_:1}),D,Object(c["i"])(i,{grow:"","align-end":"","justify-end":""},{default:P((function(){return[Object(c["i"])(i,{grow:""}),Object(c["i"])(o,{small:"",color:"default",onClick:r.openDl},{default:P((function(){return[U]})),_:1},8,["onClick"]),z,Object(c["i"])(o,{small:"",color:"default",onClick:r.openImdb},{default:P((function(){return[E]})),_:1},8,["onClick"]),q,Object(c["i"])(o,{small:"",color:"default",onClick:r.openGoogle},{default:P((function(){return[L]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["style"])})),$=Object(c["u"])(window.innerWidth),X=Object(c["u"])(window.innerHeight);window.addEventListener("resize",(function(){return $.value=window.innerWidth,X.value=window.innerHeight}));var G={name:"media-details",props:{value:Object},emits:["close","delete"],setup:function(e,t){var n=t.emit,r=Object(c["d"])((function(){var e=.8*$.value,t=.7*X.value/1.453125;return Math.min(e,t)})),u=Object(c["d"])((function(){return 1.453125*r.value})),a=Object(c["d"])((function(){return e.value.i[0].replace("._V1_.jpg","._V1._SX".concat(r.value*devicePixelRatio,"_CR0,0,").concat(r.value*devicePixelRatio,",").concat(u.value*devicePixelRatio,"_.jpg"))})),l=Object(c["d"])((function(){return{width:"".concat(r.value,"px"),height:"".concat(u.value,"px")}})),i=Object(c["d"])((function(){return{width:"".concat(r.value,"px")}}));return{imageUrl:a,imageStyle:l,resultStyle:i,remove:function(){n("delete",e.value)},openDl:function(){var t="https://rargb.to/search/?order=seeders&by=DESC&search=".concat(e.value.l,"+").concat(e.value.y);window.open(t,"_blank").focus()},openImdb:function(){var t="https://www.imdb.com/title/".concat(e.value.id,"/");window.open(t,"_blank").focus()},openGoogle:function(){var t="https://www.google.com/search?q=".concat(e.value.l,"+(").concat(e.value.y,")");window.open(t,"_blank").focus()}}}};n("3b42");G.render=W,G.__scopeId="data-v-42ee4c50";var H=G,J={name:"media-list",components:{MediaSearch:y,MediaItem:I,MediaDetails:H},setup:function(e){var t=Object(c["j"])("context"),n=Object(c["u"])(null);return{opened:n,context:t,onInput:function(e){t.data.mutate("ADD_MOVIE",e)},onDelete:function(e){var n=t.data.state.movies.indexOf(e);t.data.mutate("DEL_MOVIE",n)},open:function(e){n.value=e}}}};n("efb7"),n("588f");J.render=l,J.__scopeId="data-v-1db123ab";var T=J,A=n("ccef"),B=n("e421");function F(e){var t=Object(c["t"])({data:null});return Object(A["a"])(B["a"],e).then((function(e){e.state=Object(c["o"])(e.state),t.data=e})),t}var K=new URL(location.href),N=K.searchParams.get("remote");Object(u["a"])(null!=N,"remote");var Q=F(N),Y=Object(c["e"])(T);Y.use(r["a"]),Y.provide("context",Q),Y.mount("#app")},cd5c:function(e,t,n){},efb7:function(e,t,n){"use strict";n("3d94")}});
//# sourceMappingURL=index.08c05382.js.map