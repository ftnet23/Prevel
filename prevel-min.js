/* Prevel Framework v1.0.16
 * http://github.com/chernikovalexey/Prevel
 * 
 * Copyright 2011, Alexey Chernikov
 * Dual licensed under the:
 *  - GNU LGPL (http://opensource.org/licenses/lgpl-license.php)
 *  - MIT License (http://opensource.org/licenses/mit-license.php)
 * 
 * =====
 * 
 * Contains YASS v0.3.9
 * http://yass.webo.in
 * 
 * Copyright 2008-2009, Nikolay Matsievsky (sunnybear)
 * Dual licensed under the:
 *  - MIT License (http://opensource.org/licenses/mit-license.php)
 *  - GNU GPL (http://opensource.org/licenses/gpl-license.php)
**/
(function(r,g,A,B,p,o,D,v,H,w,C,I){(function(){var g={"function":"fn",object:"obj",number:"int",string:"str","boolean":"bool","undefined":v},n=!!Object[A].__lookupGetter__&&!!Object[A].__lookupSetter__&&!!Object[A].__defineGetter__&&!!Object[A].__defineSetter,e=function(){return function(a,b,c){return e.fn?new e.fn.init(a,b,c):I}}(),b=r.navigator.userAgent.toLowerCase();e.extend=function(a,b){b||(b=a,a=e);var c=a;if(n){var d,f,g;for(g in b)d=b.__lookupGetter__(g),f=b.__lookupSetter__(g),d||f?(d&&a.__defineGetter__(g,d),f&&a.__defineSetter__(g,f)):a[g]||(a[g]=b[g])}else for(g in b)a[g]||(a[g]=b[g]);return c===e.fn&&e.implement(e.fn.init,e.fn),a},e.extend({implement:function(a,b){return e.extend(a[A],b)},isArray:Array.isArray||function(a){return Object[A].toString.call(a)==="[object Array]"},type:function(a,b){var c=e.isArray(a)?"arr":a instanceof RegExp?"regexp":a instanceof Date?"date":a===w?D:g[typeof a];return b?c===b:c},empty:function(a){if(e.type(a,"obj")){for(var b in a)return!1;return!0}return e.type(a,D)||e.type(a,v)||!a.length},trim:function(a){return a=a||"","".trim?a.trim():a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},each:function(a,b){for(var c=a.length;--c>-1;)b.call(a[c],c,a[c])},inArray:function(a,b,c){var d;if(b){if([].indexOf)return b.indexOf(a,c);for(d=b.length,c=c?c<0?Math.max(0,d+c):c:0;c<d;++c)if(c in b&&b[c]===a)return c}return-1},toParams:function(a){if(!e.type(a,"obj"))return a;var b=[],c;for(c in a)b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},JSON:function(b){return r.JSON&&r.JSON.parse?r.JSON.parse(b):!/[^,:{}[]0-9.-+Eaeflnr-u nrt]/.test(b.replace(/"(.|[^"])*"/g,""))&&eval("("+b+")")},browser:function(a){var c=/opera/i.test(b),d=/chrome/i.test(b),c={opera:c,ie:!c&&/msie/i.test(b),ie6:!c&&/msie 6/i.test(b),ie7:!c&&/msie 7/i.test(b),ie8:!c&&/msie 8/i.test(b),firefox:/firefox/i.test(b),chrome:d,safari_khtml:!d&&/khtml/i.test(b),safari:!d&&/webkit|safari/i.test(b)},e;for(e in c)if(c[e])return a?a===e:e}}),r.pl=e})(),function(){pl.extend({ajax:function(a){var b,c=a.load||C,d=a.error||C,e=a.success||C,f=function(c){b.setRequestHeader("X-Requested-With","XMLHttpRequest"),c&&b.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset="+(a.charset||"utf-8"))};a.type=a.type||"POST",a.data=pl.toParams(a.data||{}),a.async=a.async||!0,function(){if(r.XMLHttpRequest)b=new XMLHttpRequest,b.overrideMimeType&&b.overrideMimeType("text/html");else if(r.ActiveXObject)try{b=new ActiveXObject("Msxml2.XMLHTTP")}catch(f){try{b=new ActiveXObject("Microsoft.XMLHTTP")}catch(h){}}if(!b)return alert("Could not create an XMLHttpRequest instance.");b.onreadystatechange=function(){switch(b.readyState){case 1:c();break;case 4:b.status===200?e(a.dataType==="json"?pl.JSON(b.responseText):b.responseText):d(b.status)}}}();switch(a.type){case"POST":b.open("POST",a.url,a.async),f(1),b.send(a.data);break;case"GET":b.open("GET",a.url+"?"+a.data,a.async),f(),b.send(w)}}})}(),function(){var a,b={"class":"className","float":"cssFloat","for":"htmlFor"};pl.extend({fn:{},find:function(a,b){return g.querySelectorAll(b?b+" "+a:a)}}),pl.extend(pl.fn,{init:function(){return function(b,c,e){var f;switch(pl.type(b)){case"str":var h=b.match(H);if(h)f=c,h=g.createElement(h[1]),f=[f?pl(h).attr(f).get():h];else switch(pl.type(c)){case"str":switch(pl.type(e)){case"int":f=[pl.find(b,c)[e]];break;default:case v:f=pl.find(b)}break;case"int":f=[pl.find(b)[c]];break;default:case v:f=pl.find(b)}break;case"fn":d.ready(b);break;case"obj":f=b[0]?b:[b]}return this.elements=f,this.selector=arguments,a=this,this}}(),len:function(){return this.elements.length},last:function(){var a=this.elements.length;return this.elements=[a&&!pl.type(this.elements[a-1],v)?this.elements[a-1]:w],this},html:function(a,b){return e(this,"innerHTML",a,b)},text:function(a,b){return e(this,c,a,b)},get:function(a){var b=this.elements;return b.length===1?b[0]:pl.type(a,v)?b:b[a]},parent:function(a){return a||(a=1),this.elements=[i(this.elements[0],a)],this},remove:function(){return pl.each(this.elements,function(){this.parentNode.removeChild(this)}),this},addClass:function(a){return pl.each(this.elements,function(){this[o]&&!~pl.inArray(a,this[o].split(" "))&&(this[o]+=(this[o]?" ":"")+a)}),this},hasClass:function(a){return this.elements[0]&&this.elements[0][o]?!!~pl.inArray(a,this.elements[0][o].split(" ")):!1},removeClass:function(a){return pl.each(this.elements,function(){if(this[o]){var b=this[o].split(" "),c=pl.inArray(a,b);~c&&(b.splice(c,1),this[o]=(pl.empty(b)?b.slice(c,1):b).join(" "))}}),this},attr:function(a,c){a=b[a]||a;if(c)pl.each(this.elements,function(){this[a]=c});else switch(pl.type(a)){case"obj":for(var d in a)arguments.callee.call(this,d,a[d]);break;case"str":return this.elements[0][a]}return this},removeAttr:function(a){return a=b[a]||a,pl.each(this.elements,function(){this[a]=w}),this},css:function(a,b){if(b){a=f.fixStyle(a);if(pl.type(b,"int")&&!f.rmvPostFix[a])b+="px";else if(a==="opacity")var c=f.fixOpacity(b),a=c[0],b=c[1];pl.each(this.elements,function(){this.style[a]=b})}else switch(pl.type(a)){case"obj":for(c in a)arguments.callee.call(this,c,a[c]);break;case"str":return f.get(this.elements[0],a)}return this},each:function(b){return pl.each(a.elements,function(){b.call(this)}),this},bind:function(a,b){return d.routeEvent(a,b,1)},unbind:function(a,b){return d.routeEvent(a,b,0)},show:function(){return pl.each(this.elements,function(){pl(this).css("display")==="none"&&pl(this).css("display",this.getAttribute("plrd")||"")}),this},hide:function(){return pl.each(this.elements,function(){var a=pl(this).css("display");a!=="none"&&(this.setAttribute("plrd",a),this.style.display="none")}),this},after:function(a){if(pl.type(a,"obj")){var b=g.createElement("div");b.appendChild(a),a=b.innerHTML}return pl.each(this.elements,function(){var b=this,c=g.createElement("div");c.innerHTML=a;try{pl.each(c.childNodes,function(){b.parentNode.insertBefore(this,b.nextSibling)})}catch(d){}}),this},before:function(a){if(pl.type(a,"obj")){var b=g.createElement("div");b.appendChild(a),a=b.innerHTML}return pl.each(this.elements,function(){var b=this,c=g.createElement("div");c.innerHTML=a;try{pl.each(c.childNodes,function(){b.parentNode.insertBefore(this,b)})}catch(d){}}),this},append:function(a){if(pl.type(a,"obj")){var b=g.createElement("div");b.appendChild(a),a=b.innerHTML}return pl.each(this.elements,function(){var b=this,c=g.createElement("div");c.innerHTML=a;try{pl.each(c.childNodes,function(){b.appendChild(this)})}catch(d){}}),this},prepend:function(a){if(pl.type(a,"obj")){var b=g.createElement("div");b.appendChild(a),a=b.innerHTML}return pl.each(this.elements,function(){var b=this,c=g.createElement("div");c.innerHTML=a;try{pl.each(c.childNodes,function(){b.insertBefore(this,b.firstChild)})}catch(d){}}),this},appendTo:function(a,b,c){return pl(a,b,c).append(this.elements[0]),this},prependTo:function(a,b,c){return pl(a,b,c).prepend(this.elements[0]),this}}),pl.implement(pl.fn.init,pl.fn);var c=pl.browser("ie")?"innerText":"textContent",d={ready:function(){this.readyList=[],this.bindReady=function(a){function b(){c||(c=!0,a())}var c=!1;if(g[B])d.attaches.bind(g,"DOMContentLoaded",b);else if(g.attachEvent){if(g.documentElement.doScroll&&r===r.top){var e=function(){if(!c&&g.body)try{g.documentElement.doScroll("left"),b()}catch(a){setTimeout(e,0)}};e()}d.attaches.bind(g,"readystatechange",function(){g.readyState==="complete"&&b()})}d.attaches.bind(r,"load",b)};var a=this;return function(b){a.readyList.length||a.bindReady(function(){pl.each(a.readyList,function(){this()})}),a.readyList.push(b)}}(),attaches:function(){function a(a){a=a||r.event;if(a.fixed)return a;a.fixed=!0,a.preventDefault=a.preventDefault||function(){this.returnValue=!1},a.stopPropagation=a.stopPropagation||function(){this.cancelBubble=!0},a.target||(a.target=a.srcElement);if(a.pageX==w&&a.clientX!=w){var b=g.documentElement,c=g.body;a.pageX=a.clientX+(b&&b.scrollLeft||c&&c.scrollLeft||0)-(b.clientLeft||0),a.pageY=a.clientY+(b&&b.scrollTop||c&&c.scrollTop||0)-(b.clientTop||0)}return pl.type(a.which,"undef")&&!pl.type(a.button,"undef")&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0),a}function b(b){var b=a(b),c=this.evt[b.type],d;for(d in c)c[d].call(this,b)===!1&&(b.preventDefault(),b.stopPropagation())}var c=0;return{bind:function(a,e,f){if(a.setInterval&&!a.frameElement&&(a!==r&&(a=r),~pl.inArray(e,h)))return window.onload=function(){pl(g.body).bind(e,f)};console.log(a,e,f),f.turnID||(f.turnID=++c),a.evt||(a.evt={},a.handleEvt=function(c){if(!pl.type(d.attaches,v))return b.call(a,c)}),a.evt[e]||(a.evt[e]={},a[B]?a[B](e,a.handleEvt,!1):a.attachEvent("on"+e,a.handleEvt)),a.evt[e][f.turnID]=f},unbind:function(a,b,c){var e=a.evt;if(pl.type(c,v)){if(e)for(var f in e)if(pl.type(b,v)||b===f)for(var g in e[f])d.attaches.unbind(a,f,e[f][g])}else if(e=e&&e[b]){delete e[c.turnID];for(g in e)return;a.removeEventListener?a.removeEventListener(b,a.handleEvt,!1):a.detachEvent("on"+b,a.handleEvt),delete a.evt[b];for(g in a.evt)return;try{delete a.handleEvt,delete a.evt}catch(h){a.removeAttribute("handleEvt"),a.removeAttribute("evt")}}}}}(),routeEvent:function(b,c,e){if(pl.type(b,"obj"))for(var f in b)arguments.callee(f,b[f],e);else if(c&&b||!c&&b||!c&&!b)e?(console.log("Right way.."),pl.each(a.elements,function(){d.attaches.bind(this,b,c)})):pl.each(a.elements,function(){d.attaches.unbind(this,b,c)});return a}},e=function(a,b,c,d){var e=a,a=e.elements[0];if(!c)return a[b];if(d)switch(d){case 1:pl.each(e.elements,function(){this[b]+=c});break;case-1:pl.each(e.elements,function(){this[b]=c+this[b]})}else a[b]=c;return e},f={fixStyle:function(a){return a.match("-")?(a=a.split("-"),a[0]+a[1].charAt(0).toUpperCase()+a[1].substr(1)):a},fixOpacity:function(a){var b=["opacity",a];switch(pl.browser()){case"ie7":b[0]="filter",b[1]="alpha(opacity="+a*100+");";break;case"ie8":b[0]="-ms-filter",b[1]="alpha(opacity="+a*100+")";break;case"safari_khtml":b[0]="-khtml-opacity";break;case"firefox":b[0]="-moz-opacity"}return b},fixReturnOpacity:function(a){return a?a.match("opacity=")?a.match("=([0-9]+)")[1]/100:a:w},rmvPostFix:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},get:function(a,b){return b==="opacity"&&(b=f.fixOpacity(0)[0]),f.fixReturnOpacity(a.currentStyle?a.currentStyle[b]:r.getComputedStyle(a,w).getPropertyValue(b))}},h="click,mouseover,mouseout,keyup,keydown,dblclick,mousedown,mouseup,keypress".split(","),i=function(a,b){return b>0?i(a.parentNode,--b):a}}(),function(){var a=!!g[p+"sByClassName"],b=!!g.querySelectorAll;pl.find=function(c){return pl.extend(c,{attr:{"":function(a,b){return!!a.getAttribute(b)},"=":function(a,b,c){return(b=a.getAttribute(b))&&b===c},"&=":function(){},"^=":function(){},"$=":function(){},"*=":function(){},"|=":function(){},"!=":function(){}},mods:{"first-child":function(a){return a.parentNode.getElementsByTagName("*")[0]!==a},"last-child":function(a){for(;(a=a.nextSibling)&&a.nodeType!=1;);return!!a},root:function(a){return a.nodeName.toLowerCase()!=="html"},"nth-child":function(a,b){var c=a.nodeIndex||0,d=b[3]=b[3]?(b[2]==="%"?-1:1)*b[3]:0,e=b[1];if(c)return!((c+d)%e);var f=a.parentNode.firstChild;c++;do if(f.nodeType==1&&(f.nodeIndex=++c)&&a===f&&(c+d)%e)return 0;while(f=f.nextSibling);return 1},"nth-last-child":function(a,b){var c=a.nodeIndexLast||0,d=b[3]?(b[2]==="%"?-1:1)*b[3]:0,e=b[1];if(c)return!((c+d)%e);var f=a.parentNode.lastChild;c++;do if(f.nodeType==1&&(f.nodeLastIndex=c++)&&a===f&&(c+d)%e)return 0;while(f=f.previousSibling);return 1},empty:function(a){return!!a.firstChild},parent:function(a){return!a.firstChild},"only-child":function(a){return a.parentNode[p+"sByTagName"]("*").length!=1},checked:function(a){return!a.checked},lang:function(a,b){return a.lang!==b&&g.documentElement.lang!==b},enabled:function(a){return a.disabled||a.type==="hidden"},disabled:function(a){return!a.disabled},selected:function(){return!child.selected}}}),function(d,f){f&&(d=f+" "+d),f=g;var h=[];if(d==="body *")return g.body[p+"sByTagName"]("*");if(/^[\w[:#.][\w\]*^|=!]*$/.test(d)){var i=0;switch(d.charAt(0)){case"#":i=d.slice(1),h=g[p+"ById"](i),pl.browser("ie")&&h.id!==i&&(h=g.all[i]),h=h?[h]:[];break;case".":var j=d.slice(1);if(a)h=(h=f[p+"sByClassName"](j)).length?h:[];else{for(var j=" "+j+" ",k=f[p+"sByTagName"]("*"),l=0,m;m=k[l++];)(" "+m[o]+" ").indexOf(j)!=-1&&(h[i++]=m);h=i?h:[]}break;case":":for(var k=f[p+"sByTagName"]("*"),l=0,q=d.replace(/[^(]*\(([^)]*)\)/,"$1"),s=d.replace(/\(.*/,"");m=k[l++];)c.mods[s]&&!c.mods[s](m,q)&&(h[i++]=m);h=i?h:[];break;case"[":for(var k=f[p+"sByTagName"]("*"),l=0,s=/\[([^!~^*|$ [:=]+)([$^*|]?=)?([^ :\]]+)?\]/.exec(d),t=s[1],u=s[2]||"",s=s[3];m=k[l++];)c.attr[u]&&(c.attr[u](m,t,s)||t==="class"&&c.attr[u](m,o,s))&&(h[i++]=m);h=i?h:[];break;default:h=(h=f[p+"sByTagName"](d)).length?h:[]}}else if(b&&d.indexOf("!=")==-1)h=f.querySelectorAll(d.replace(/=([^\]]+)/,'="$1"'));else{m=d.split(/ *, */);for(var v=m.length-1,x=!!v,y,z,A,B,C,D,E,F,G,H,I,J;i=m[v--];){for(z=(y=i.replace(/(\([^)]*)\+/,"$1%").replace(/(\[[^\]]+)~/,"$1&").replace(/(~|>|\+)/," $1 ").split(/ +/)).length,l=0,B=" ",k=[f];A=y[l++];)if(A!==" "&&A!==">"&&A!=="~"&&A!=="+"&&k){for(A=A.match(/([^[:.#]+)?(?:#([^[:.#]+))?(?:\.([^[:.]+))?(?:\[([^!&^*|$[:=]+)([!$^*|&]?=)?([^:\]]+)?\])?(?:\:([^(]+)(?:\(([^)]+)\))?)?/),C=A[1]||"*",D=A[2],j=A[3]?" "+A[3]+" ":"",t=A[4],u=A[5]||"",s=A[7],q=s==="nth-child"||s==="nth-last-child"?/(?:(-?\d*)n)?(?:(%|-)(\d*))?/.exec(A[8]==="even"&&"2n"||A[8]==="odd"&&"2n%1"||!/\D/.test(A[8])&&"0n%"+A[8]||A[8]):A[8],E=[],i=F=0,H=l==z;G=k[F++];)switch(B){case" ":for(I=G[p+"sByTagName"](C),G=0;J=I[G++];)(!D||J.id===D)&&(!j||(" "+J[o]+" ").indexOf(j)!=-1)&&(!t||c.attr[u]&&(c.attr[u](J,t,A[6])||t==="class"&&c.attr[u](J,o,A[6])))&&!J.yeasss&&(c.mods[s]?!c.mods[s](J,q):!s)&&(H&&(J.yeasss=1),E[i++]=J);break;case"~":for(C=C.toLowerCase();(G=G.nextSibling)&&!G.yeasss;)G.nodeType==1&&(C==="*"||G.nodeName.toLowerCase()===C)&&(!D||G.id===D)&&(!j||(" "+G[o]+" ").indexOf(j)!=-1)&&(!t||c.attr[u]&&(c.attr[u](J,t,A[6])||t==="class"&&c.attr[u](J,o,A[6])))&&!G.yeasss&&(c.mods[s]?!c.mods[s](G,q):!s)&&(H&&(G.yeasss=1),E[i++]=G);break;case"+":for(;(G=G.nextSibling)&&G.nodeType!=1;);G&&(G.nodeName.toLowerCase()===C.toLowerCase()||C==="*")&&(!D||G.id===D)&&(!j||(" "+J[o]+" ").indexOf(j)!=-1)&&(!t||c.attr[u]&&(c.attr[u](J,t,A[6])||t==="class"&&c.attr[u](J,o,A[6])))&&!G.yeasss&&(c.mods[s]?!c.mods[s](G,q):!s)&&(H&&(G.yeasss=1),E[i++]=G);break;case">":for(I=G[p+"sByTagName"](C),l=0;J=I[l++];)J.parentNode===G&&(!D||J.id===D)&&(!j||(" "+J[o]+" ").indexOf(j)!=-1)&&(!t||c.attr[u]&&(c.attr[u](J,t,A[6])||t==="class"&&c.attr[u](J,o,A[6])))&&!J.yeasss&&(c.mods[s]?!c.mods[s](J,q):!s)&&(H&&(J.yeasss=1),E[i++]=J)}k=E}else B=A;if(x){if(!k.concat){for(E=[],G=0;J=k[G];)E[G++]=J;k=E}h=k.concat(h.length==1?h[0]:h)}else h=k}for(i=h.length;i--;)h[i].yeasss=h[i].nodeIndex=h[i].nodeIndexLast=w}return h}}({})}()})(this,document,"prototype","addEventListener","getElement","className","null","undef","<([A-z]+)>",null,function(){})