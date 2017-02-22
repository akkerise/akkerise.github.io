(function(){var m=this;function n(a){return void 0!==a}
function p(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function r(a){return"array"==q(a)}
function t(a){return"string"==typeof a}
function u(a){return"function"==q(a)}
function aa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ba(a,b,c){return a.call.apply(a.bind,arguments)}
function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function da(a,b,c){da=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return da.apply(null,arguments)}
function w(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var ea=Date.now||function(){return+new Date};
function x(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&n(b)?d[e]=b:d[e]?d=d[e]:d=d[e]={}}
function y(a,b){function c(){}
c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.H=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}}
;var fa;var ha=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ia=/&/g,ka=/</g,la=/>/g,ma=/"/g,na=/'/g,oa=/\x00/g,pa=/[\x00&<>"']/;
function qa(a){var b=new RegExp("/".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"");return a.replace(b,"")}
function ra(a,b){return a<b?-1:a>b?1:0}
;var sa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(t(a))return t(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ta=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ua=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=t(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},va=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=t(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};function wa(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function xa(a){a.classList?a=a.classList.contains("playing"):(a=wa(a),a=0<=sa(a,"playing"));return a}
function ya(){var a=document.body;a.classList?a.classList.add("playing"):xa(a)||(a.className+=0<a.className.length?" playing":"playing")}
function za(){var a=document.body;a.classList?a.classList.remove("playing"):xa(a)&&(a.className=ua(wa(a),function(a){return"playing"!=a}).join(" "))}
;function Aa(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Ba(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}
function Ca(a){var b=Da,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;var A;a:{var Ea=m.navigator;if(Ea){var Fa=Ea.userAgent;if(Fa){A=Fa;break a}}A=""}function B(a){return-1!=A.indexOf(a)}
;function C(){this.a="";this.b=Ha}
C.prototype.w=!0;C.prototype.v=function(){return this.a};
function Ka(a){if(a instanceof C&&a.constructor===C&&a.b===Ha)return a.a;q(a);return"type_error:SafeUrl"}
var La=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Ma(a){if(a instanceof C)return a;a=a.w?a.v():String(a);La.test(a)||(a="about:invalid#zClosurez");return Na(a)}
var Ha={};function Na(a){var b=new C;b.a=a;return b}
Na("about:blank");function D(){this.a="";this.b=Oa}
D.prototype.w=!0;D.prototype.v=function(){return this.a};
function Pa(a){if(a instanceof D&&a.constructor===D&&a.b===Oa)return a.a;q(a);return"type_error:SafeHtml"}
var Oa={};function Qa(a){var b=new D;b.a=a;return b}
Qa("<!DOCTYPE html>");Qa("");Qa("<br>");function E(a,b){this.x=n(a)?a:0;this.y=n(b)?b:0}
E.prototype.clone=function(){return new E(this.x,this.y)};
E.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
E.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
E.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var Ra=B("Opera"),F=B("Trident")||B("MSIE"),Sa=B("Edge"),Ta=Sa||F,G=B("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),Ua=-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge");function Va(){var a=m.document;return a?a.documentMode:void 0}
var Wa;a:{var Xa="",Ya=function(){var a=A;if(G)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Sa)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ua)return/WebKit\/(\S+)/.exec(a);if(Ra)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ya&&(Xa=Ya?Ya[1]:"");if(F){var Za=Va();if(null!=Za&&Za>parseFloat(Xa)){Wa=String(Za);break a}}Wa=Xa}var $a=Wa,ab={};
function H(a){var b;if(!(b=ab[a])){b=0;for(var c=ha(String($a)).split("."),d=ha(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",k=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var z=k.exec(g)||["","",""],v=l.exec(h)||["","",""];if(0==z[0].length&&0==v[0].length)break;b=ra(0==z[1].length?0:parseInt(z[1],10),0==v[1].length?0:parseInt(v[1],10))||ra(0==z[2].length,0==v[2].length)||ra(z[2],v[2])}while(0==b)}b=ab[a]=0<=b}return b}
var bb=m.document,cb=bb&&F?Va()||("CSS1Compat"==bb.compatMode?parseInt($a,10):5):void 0;!G&&!F||F&&9<=Number(cb)||G&&H("1.9.1");F&&H("9");function db(a,b){var c;c=b instanceof C?b:Ma(b);a.href=Ka(c)}
;function eb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function fb(a){return gb(a,function(a){if(a="A"==a.nodeName)a=!0;return a},void 0)}
function gb(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function I(a){this.a=a||m.document||document}
I.prototype.createElement=function(a){return this.a.createElement(a)};
I.prototype.isElement=function(a){return aa(a)&&1==a.nodeType};
I.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var ib=p("yt.dom.getNextId_");if(!ib){ib=function(){return++jb};
x("yt.dom.getNextId_",ib);var jb=0};var kb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",kb);x("yt.tokens_",window.yt&&window.yt.tokens_||{});var lb=window.yt&&window.yt.msgs_||p("window.ytcfg.msgs")||{};x("yt.msgs_",lb);function nb(a){ob(kb,arguments)}
function J(a,b){return a in kb?kb[a]:b}
function pb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(d){var b=d,c=p("yt.logging.errors.log");c?c(b,void 0,void 0,void 0,void 0):(c=J("ERRORS",[]),c.push([b,void 0,void 0,void 0,void 0]),nb("ERRORS",c));throw d;}}:a}
function ob(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
;function K(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.a=a;for(var b in a)b in qb||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&
(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
K.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
K.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
K.prototype.stopImmediatePropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopImmediatePropagation&&this.a.stopImmediatePropagation())};
var qb={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var Da=p("yt.events.listeners_")||{};x("yt.events.listeners_",Da);var rb=p("yt.events.counter_")||{count:0};x("yt.events.counter_",rb);function sb(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ca(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function L(a,b,c,d){if(a&&(a.addEventListener||a.attachEvent)){d=!!d;var e=sb(a,b,c,d);if(!e){var e=++rb.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new K(d);if(!gb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new K(b);
b.currentTarget=a;return c.call(a,b)};
g=pb(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Da[e]=[a,b,c,g,d]}}}
;function tb(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
;function ub(){}
var vb="function"==typeof Uint8Array,wb=[];function N(a){var b=xb;if(a<b.c){a+=b.f;var c=b.a[a];return c===wb?b.a[a]=[]:c}c=b.b[a];return c===wb?b.b[a]=[]:c}
ub.prototype.toString=function(){return this.a.toString()};function yb(a){a||(a=[]);this.f=-1;this.a=a;a:{if(this.a.length){a=this.a.length-1;var b=this.a[a];if(b&&"object"==typeof b&&!r(b)&&!(vb&&b instanceof Uint8Array)){this.c=a- -1;this.b=b;break a}}this.c=Number.MAX_VALUE}}
y(yb,ub);var zb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Ab(a){return a?decodeURI(a):a}
function Bb(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Cb=/#|$/,Db=/[?&]($|#)/;function Eb(a){Eb[" "](a);return a}
Eb[" "]=function(){};
function Fb(a,b){try{return Eb(a[b]),!0}catch(c){}return!1}
;function Gb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}
function Hb(){var a=Ib;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec(decodeURIComponent(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""}
;function Jb(a,b){this.a=a;this.b=b}
function Kb(a,b){this.url=a;this.A=!!b;this.depth=null}
;function Lb(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}
;function Mb(a,b,c,d,e){this.h=c||4E3;this.c=a||"&";this.i=b||",$";this.f=n(d)?d:"trn";this.o=e||null;this.g=!1;this.b={};this.m=0;this.a=[]}
function Nb(a,b){var c={};c[a]=b;return[c]}
function O(a,b,c,d){a.a.push(b);a.b[b]=Nb(c,d)}
function Ob(a,b,c,d){b=b+"//"+c+d;var e=Pb(a)-d.length-0;if(0>e)return"";a.a.sort(function(a,b){return a-b});
d=null;c="";for(var f=0;f<a.a.length;f++)for(var g=a.a[f],h=a.b[g],k=0;k<h.length;k++){if(!e){d=null==d?g:d;break}var l=Qb(h[k],a.c,a.i);if(l){l=c+l;if(e>=l.length){e-=l.length;b+=l;c=a.c;break}else a.g&&(c=e,l[c-1]==a.c&&--c,b+=l.substr(0,c),c=a.c,e=0);d=null==d?g:d}}f="";a.f&&null!=d&&(f=c+a.f+"="+(a.o||d));return b+f+""}
function Pb(a){if(!a.f)return a.h;var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return a.h-a.f.length-b-a.c.length-1}
function Qb(a,b,c,d,e){var f=[];Gb(a,function(a,h){var k=Rb(a,b,c,d,e);k&&f.push(h+"="+k)});
return f.join(b)}
function Rb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Rb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Qb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}
;function Sb(a,b,c,d,e,f){try{var g;c instanceof Mb?g=c:(g=new Mb,Gb(c,function(a,b){var c=g,d=c.m++,e=Nb(b,a);c.a.push(d);c.b[d]=e}));
if((d?a.c:Math.random())<(e||a.a)){var h=Ob(g,a.b,a.f,a.g+b+"&");"undefined"===typeof f?Tb(h):Tb(h,f)}}catch(k){}}
function Tb(a,b){m.google_image_requests||(m.google_image_requests=[]);var c=m.document.createElement("img");if(b){var d=function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",a);a=d;c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};
Lb(c,"load",d);Lb(c,"error",d)}c.src=a;m.google_image_requests.push(c)}
;function Ub(a,b,c){this.c=a;this.g=b;this.a=c;this.f=this.b}
function Vb(a,b,c){this.message=a;this.a=b||"";this.b=c||-1}
function Wb(a,b){var c;try{c=b()}catch(f){var d=a.a;try{var e=Xb(f),d=a.f.call(a,"osd_proto::reqm_int",e,void 0,void 0)}catch(g){a.b("pAR",g)}if(!d)throw f;}finally{}return c}
function Yb(a){var b=Zb;return function(){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];return Wb(b,function(){return a.apply(void 0,c)})}}
Ub.prototype.b=function(a,b,c,d,e){try{var f=e||this.g,g=new Mb;g.g=!0;O(g,1,"context",a);b instanceof Vb||(b=Xb(b));O(g,2,"msg",b.message.substring(0,512));b.a&&O(g,3,"file",b.a);0<b.b&&O(g,4,"line",b.b.toString());b={};if(d)try{d(b)}catch(ga){}d=[b];g.a.push(5);g.b[5]=d;var h;e=m;d=[];var k,l=null;do{b=e;var z;try{z=!!b&&null!=b.location.href&&Fb(b,"foo")}catch(ga){z=!1}z?(k=b.location.href,l=b.document&&b.document.referrer||null):(k=l,l=null);d.push(new Kb(k||""));try{e=b.parent}catch(ga){e=null}}while(e&&
b!=e);k=0;for(var v=d.length-1;k<=v;++k)d[k].depth=v-k;b=m;if(b.location&&b.location.ancestorOrigins&&b.location.ancestorOrigins.length==d.length-1)for(k=1;k<d.length;++k){var Ga=d[k];Ga.url||(Ga.url=b.location.ancestorOrigins[k-1]||"",Ga.A=!0)}for(var Ia=new Kb(m.location.href,!1),Ja=d.length-1,v=Ja;0<=v;--v){var M=d[v];if(M.url&&!M.A){Ia=M;break}}var M=null,Mc=d.length&&d[Ja].url;0!=Ia.depth&&Mc&&(M=d[Ja]);h=new Jb(Ia,M);h.b&&O(g,6,"top",h.b.url||"");O(g,7,"url",h.a.url||"");Sb(this.c,f,g,!1,c)}catch(ga){try{Sb(this.c,
f,{context:"ecmserr",rctx:a,msg:$b(ga),url:h.a.url},!1,c)}catch(hd){}}return this.a};
function Xb(a){return new Vb($b(a),a.fileName,a.lineNumber)}
function $b(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b}
;var ac=document,P=window;var bc,Zb;bc=new function(){this.b="http:"===P.location.protocol?"http:":"https:";this.f="pagead2.googlesyndication.com";this.g="/pagead/gen_204?id=";this.a=.01;this.c=Math.random()};
Zb=new Ub(bc,"jserror",!0);function cc(a,b,c,d){if(d)c=a+("&"+b+"="+c);else{var e="&"+b+"=",f=a.indexOf(e);0>f?c=a+e+c:(f+=e.length,e=a.indexOf("&",f),c=0<=e?a.substring(0,f)+c+a.substring(e):a.substring(0,f)+c)}return 2E3<c.length?n(void 0)?cc(a,b,void 0,d):a:c}
;function dc(a,b){this.type=a;this.label=b}
function Q(a){new dc(a,1)}
function R(a){new dc(a,2)}
function S(a){new dc(a,3)}
Q("d");R("d");S("d");Q("f");R("f");S("f");Q("i");R("i");S("i");Q("j");R("j");S("j");Q("u");R("u");S("u");Q("v");R("v");S("v");Q("b");R("b");S("b");Q("e");R("e");S("e");Q("s");R("s");S("s");Q("B");R("B");S("B");Q("x");R("x");S("x");Q("y");R("y");S("y");Q("g");R("g");S("g");Q("h");R("h");S("h");Q("n");R("n");S("n");Q("o");R("o");S("o");function T(){this.c=this.c;this.a=this.a}
T.prototype.c=!1;T.prototype.isDisposed=function(){return this.c};
T.prototype.dispose=function(){this.c||(this.c=!0,this.i())};
T.prototype.i=function(){if(this.a)for(;this.a.length;)this.a.shift()()};
function ec(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var fc=[0,2,1],gc=null;function hc(){var a=window.event||gc;if(!a)return null;var b;(b=a.which?1<<fc[a.which-1]:a.button)&&a.shiftKey&&(b|=8);b&&a.altKey&&(b|=16);b&&a.ctrlKey&&(b|=32);return b}
document.addEventListener&&document.addEventListener("mousedown",function(a){gc=a},!0);
window.mb=function(a){if(a){var b=hc();b&&(window.css?css(a.id,"mb",b,void 0,void 0):a&&(a.href=cc(a.href,"mb",b,void 0)))}};var ic=!F||9<=Number(cb),jc=F&&!H("9");!Ua||H("528");G&&H("1.9b")||F&&H("8")||Ra&&H("9.5")||Ua&&H("528");G&&!H("8")||F&&H("9");function kc(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.b=!1}
kc.prototype.stopPropagation=function(){this.b=!0};
kc.prototype.preventDefault=function(){this.defaultPrevented=!0};function U(a,b){kc.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.a=this.state=null;a&&this.init(a,b)}
y(U,kc);
U.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?G&&(Fb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,
this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.a=a;a.defaultPrevented&&this.preventDefault()};
U.prototype.stopPropagation=function(){U.u.stopPropagation.call(this);this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0};
U.prototype.preventDefault=function(){U.u.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,jc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var lc="closure_listenable_"+(1E6*Math.random()|0),mc=0;function nc(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.l=!!d;this.b=e;this.key=++mc;this.j=this.s=!1}
function oc(a){a.j=!0;a.listener=null;a.a=null;a.src=null;a.b=null}
;function pc(a){this.src=a;this.a={};this.b=0}
pc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=qc(e,b,c,d);return-1<b?(oc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.b--),!0):!1};
pc.prototype.hasListener=function(a,b){var c=n(a),d=c?a.toString():"",e=n(b);return Ba(this.a,function(a){for(var g=0;g<a.length;++g)if(!(c&&a[g].type!=d||e&&a[g].l!=b))return!0;return!1})};
function qc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.j&&f.listener==b&&f.l==!!c&&f.b==d)return e}return-1}
;var rc="closure_lm_"+(1E6*Math.random()|0),sc={},tc=0;
function uc(a,b,c,d,e){if(r(b)){for(var f=0;f<b.length;f++)uc(a,b[f],c,d,e);return null}c=vc(c);if(a&&a[lc])a=wc(a,b,c,d,e);else{f=c;if(!b)throw Error("Invalid event type");c=!!d;var g=xc(a);g||(a[rc]=g=new pc(a));var h=g,k=b.toString(),g=h.a[k];g||(g=h.a[k]=[],h.b++);var l=qc(g,f,d,e);-1<l?(d=g[l],d.s=!1):(d=new nc(f,h.src,k,!!d,e),d.s=!1,g.push(d));if(!d.a){e=yc();d.a=e;e.src=a;e.listener=d;if(a.addEventListener)a.addEventListener(b.toString(),e,c);else if(a.attachEvent)a.attachEvent(zc(b.toString()),
e);else throw Error("addEventListener and attachEvent are unavailable.");tc++}a=d}return a}
function yc(){var a=Ac,b=ic?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Bc(a){if("number"!=typeof a&&a&&!a.j){var b=a.src;if(b&&b[lc])b.a(a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.l):b.detachEvent&&b.detachEvent(zc(c),d);tc--;if(c=xc(b)){var d=a.type,e;if(e=d in c.a){e=c.a[d];var f=sa(e,a),g;(g=0<=f)&&Array.prototype.splice.call(e,f,1);e=g}e&&(oc(a),0==c.a[d].length&&(delete c.a[d],c.b--));0==c.b&&(c.src=null,b[rc]=null)}else oc(a)}}}
function zc(a){return a in sc?sc[a]:sc[a]="on"+a}
function Cc(a,b,c,d){var e=!0;if(a=xc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.l==c&&!f.j&&(f=Dc(f,d),e=e&&!1!==f)}return e}
function Dc(a,b){var c=a.listener,d=a.b||a.src;a.s&&Bc(a);return c.call(d,b)}
function Ac(a,b){if(a.j)return!0;if(!ic){var c=b||p("window.event"),d=new U(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,g=c.length-1;!d.b&&0<=g;g--){d.currentTarget=c[g];var h=Cc(c[g],f,!0,d),e=e&&h}for(g=0;!d.b&&g<c.length;g++)d.currentTarget=c[g],h=Cc(c[g],f,!1,d),e=e&&h}return e}return Dc(a,new U(b,this))}
function xc(a){a=a[rc];return a instanceof pc?a:null}
var Ec="__closure_events_fn_"+(1E9*Math.random()>>>0);function vc(a){if(u(a))return a;a[Ec]||(a[Ec]=function(b){return a.handleEvent(b)});
return a[Ec]}
;function V(a){T.call(this);this.f=a;this.b={}}
y(V,T);var Fc=[];function wc(a,b,c,d,e){r(c)||(c&&(Fc[0]=c.toString()),c=Fc);for(var f=0;f<c.length;f++){var g=uc(b,c[f],d||a.handleEvent,e||!1,a.f||a);if(!g)break;a.b[g.key]=g}return a}
function Gc(a){Aa(a.b,function(a,c){this.b.hasOwnProperty(c)&&Bc(a)},a);
a.b={}}
V.prototype.i=function(){V.u.i.call(this);Gc(this)};
V.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function W(a,b,c){T.call(this);this.f=a;this.m=b;this.C=c;this.h=0;this.b={};this.g=new V(this);a=w(ec,this.g);this.c?a.call(void 0):(this.a||(this.a=[]),this.a.push(n(void 0)?da(a,void 0):a));Hc(this)}
y(W,T);function Hc(a){ta(a.C,function(a){wc(this.g,a.element,"mousedown",this.D,!0);wc(this.g,a.element,"mouseup",w(this.G,a),!0)},a);
wc(a.g,a.m,"mouseenter",a.F,void 0)}
function Ic(a,b){Aa(a.b,function(a,d){for(var e=b,f=e.search(Cb),g=0,h,k=[];0<=(h=Bb(e,g,d,f));)k.push(e.substring(g,h)),g=Math.min(e.indexOf("&",h)+1||f,f);k.push(e.substr(g));e=[k.join("").replace(Db,"$1"),"&",d];null!=a&&e.push("=",encodeURIComponent(String(a)));e[1]&&(f=e[0],g=f.indexOf("#"),0<=g&&(e.push(f.substr(g)),e[0]=f=f.substr(0,g)),g=f.indexOf("?"),0>g?e[1]="?":g==f.length-1&&(e[1]=void 0));b=e.join("")});
return b}
W.prototype.D=function(){this.o=ea()};
W.prototype.G=function(a,b){var c=a.element;1==(this.f&1)&&(0==this.h&&this.h++,this.b.nm=this.h);2==(this.f&2)&&(this.b.nb=a.B);if(8==(this.f&8)){var d=this.m,e=eb(d),f=new E(0,0),g;g=e?eb(e):document;g=!F||9<=Number(cb)||"CSS1Compat"==(g?new I(eb(g)):fa||(fa=new I)).a.compatMode?g.documentElement:g.body;if(d!=g){var h;b:{try{h=d.getBoundingClientRect()}catch(k){h={left:0,top:0,right:0,bottom:0};break b}F&&d.ownerDocument.body&&(d=d.ownerDocument,h.left-=d.documentElement.clientLeft+d.body.clientLeft,
h.top-=d.documentElement.clientTop+d.body.clientTop)}d=(e?new I(eb(e)):fa||(fa=new I)).a;e=d.scrollingElement?d.scrollingElement:Ua||"CSS1Compat"!=d.compatMode?d.body||d.documentElement:d.documentElement;d=d.parentWindow||d.defaultView;e=F&&H("10")&&d.pageYOffset!=e.scrollTop?new E(e.scrollLeft,e.scrollTop):new E(d.pageXOffset||e.scrollLeft,d.pageYOffset||e.scrollTop);f.x=h.left+e.x;f.y=h.top+e.y}this.b.nx=Math.round(b.clientX-f.x);this.b.ny=Math.round(b.clientY-f.y)}16==(this.f&16)&&null!=this.o&&
(f=ea()-this.o,this.b.clkt=f);512==(this.f&512)&&(f=hc())&&(this.b.mb=f);"A"==c.tagName.toUpperCase()&&db(c,Ic(this,c.href))};
W.prototype.F=function(){this.h++};if(ac&&ac.URL){var Ib=ac.URL,Jc=!(Ib&&0<Hb().length);Zb.a=Jc};function Kc(a,b){this.b=a||0;this.a=b||""}
Kc.prototype.match=function(a){return(this.b||this.a)&&(a.b||a.a)?this.a||a.a?this.a==a.a:this.b||a.b?this.b==a.b:!1:!1};
Kc.prototype.toString=function(){var a=""+this.b;this.a&&(a+="-"+this.a);return a};
function Lc(a){var b=[];Aa(a,function(a,d){var e=encodeURIComponent(d),f=a;t(f)&&(f=encodeURIComponent(f));b.push(e+"="+f)});
b.push("24="+(new Date).getTime());return b.join("\n")}
var Nc=0,Oc=0;function Pc(){var a=0,b=P;try{if(b&&b.Goog_AdSense_getAdAdapterInstance)return b}catch(d){}var c=b.location&&b.location.ancestorOrigins;if(n(c)&&(!c||!c.length))return null;for(;b&&5>a;){try{if(b.google_osd_static_frame)return b}catch(d){}try{if(b.aswift_0&&b.aswift_0.google_osd_static_frame)return b.aswift_0}catch(d){}a++;b=b!=b.parent?b.parent:null}return null}
function Qc(a,b,c,d,e){if(10<Oc)P.clearInterval(Nc);else if(++Oc,P.postMessage&&(b.b||b.a)){var f=Pc();if(f){var g={};b.b&&(g[4]=b.b);b.a&&(g[12]=b.a);g[0]="goog_request_monitoring";g[6]=a;g[16]=c;d&&d.length&&(g[17]=d.join(","));e&&(g[19]=e);try{var h=Lc(g);f.postMessage(h,"*")}catch(k){}}}}
;function Rc(a,b,c){if(c.data){var d=c.data;if(t(d)){c={};for(var d=d.split("\n"),e=0;e<d.length;e++){var f=d[e].indexOf("=");if(!(0>=f)){var g=Number(d[e].substr(0,f)),f=d[e].substr(f+1);switch(g){case 5:case 8:case 11:case 15:case 16:case 18:f="true"==f;break;case 4:case 7:case 6:case 14:case 20:case 21:case 22:case 23:case 24:f=Number(f);break;case 3:case 19:if(u(decodeURIComponent))try{f=decodeURIComponent(f)}catch(h){throw Error("Error: URI malformed: "+f);}break;case 17:f=va(decodeURIComponent(f).split(","),
Number)}c[g]=f}}c=c[0]?c:null}else c=null;c&&(d=new Kc(c[4],c[12]),a&&a.match(d)&&"goog_update_data"==c[0]&&(a=c[7],"number"==typeof a&&b(a)))}}
;var Sc={"pyv-embed":2,"pyv-embed-container":2,"pyv-embed-channel-image-overlay":19,"pyv-embed-channel-name-overlay":20,"pyv-embed-channel-banner-overlay":9,"pyv-embed-overlay":21,"pyv-embed-headline-overlay":0,"pyv-embed-description-overlay":7},Tc=!1,Uc=!1,X=null,xb=new yb,Y=null,Vc=!1,Wc=null,Xc=null;function Yc(){var a=0;Z("osd-1")?a=.01:Z("osd-25")?a=.25:Z("osd-50")?a=.5:Z("osd-75")&&(a=.75);null!=Xc&&Vc&&!Tc&&(Xc>=a?Y.playVideo():Y.pauseVideo())}
function Zc(){var a=15E3-1E3*Y.getCurrentTime();return 0<=a?a:0}
function $c(){Y.mute();Z("osd")?(Vc=!0,Yc()):Y.playVideo()}
function ad(a){if(Z("osd"))switch(a.data){case YT.PlayerState.PLAYING:null===X&&(0==Zc()?bd():(ya(),X=m.setTimeout(bd,Zc())));break;case YT.PlayerState.PAUSED:null!=X&&(m.clearTimeout(X),X=null);0==Zc()&&bd();break;case YT.PlayerState.ENDED:za(),Tc=!0}else switch(a.data){case YT.PlayerState.PLAYING:Uc||(ya(),m.setTimeout(bd,15E3),Uc=!0);break;case YT.PlayerState.ENDED:za()}}
function bd(){za();Tc=!0;Y.stopVideo()}
function cd(){var a=J("PLAYER_CONFIG",void 0),b=J("VIDEO_ID",void 0),c=J("HOST",void 0);aa(a)&&t(b)&&aa(YT)&&u(YT.ready)&&u(YT.Player)&&YT.ready(function(){var d={height:"100%",width:"100%",videoId:b,playerVars:a,events:{onReady:$c,onStateChange:ad}};t(c)&&(d.host=c);Y=new YT.Player("iframe-player",d)})}
function dd(a){Xc=a;null===Y?cd():Yc()}
function ed(){var a=N(1);Ab(a.match(zb)[3]||null)||(0==a.lastIndexOf("/",0)&&(a=qa(a)),a="https://googleads.g.doubleclick.net/"+a);var b=[],c=0;null!=N(2)&&(c=N(2));Aa(Sc,function(c,e){var f;f=document;if((f=t(e)?f.getElementById(e):e)&&(Z("background_click")||document.body.id!=e)&&(Z("container_click")||"pyv-embed-container"!=e)){var g=Z("background_click")||Z("container_click");"a"==f.nodeName.toLowerCase()?(db(f,a),g||L(f,"click",fd,!0)):(L(f,"click",w(gd,a)),L(f,"click",fd,!0));b.push({element:f,
B:c})}});
document.body&&!Z("dss")&&(Wc=new W(c,document.body,b))}
function Z(a){var b=J("RENDERING_EXPERIMENTS")||[];return r(b)&&0<=sa(b,a)}
function gd(a,b){var c;c=b||window.event;c=c.target||c.srcElement;3==c.nodeType&&(c=c.parentNode);if(a&&c&&!fb(c)){c=b||window.event;c.cancelBubble=!0;c.stopPropagation&&c.stopPropagation();null!=Wc&&(a=Ic(Wc,a));var d=a,e={target:"_blank"};c=window;var f;f=d instanceof C?d:Ma("undefined"!=typeof d.href?d.href:String(d));var d=e.target||d.target,g=[],h;for(h in e)switch(h){case "width":case "height":case "top":case "left":g.push(h+"="+e[h]);break;case "target":case "noreferrer":break;default:g.push(h+
"="+(e[h]?1:0))}h=g.join(",");(B("iPhone")&&!B("iPod")&&!B("iPad")||B("iPad")||B("iPod"))&&c.navigator&&c.navigator.standalone&&d&&"_self"!=d?(h=c.document.createElement("A"),db(h,f),h.setAttribute("target",d),e.noreferrer&&h.setAttribute("rel","noreferrer"),f=document.createEvent("MouseEvent"),f.initMouseEvent("click",!0,!0,c,1),h.dispatchEvent(f)):e.noreferrer?(h=c.open("",d,h),c=Ka(f),h&&(Ta&&-1!=c.indexOf(";")&&(c="'"+c.replace(/'/g,"%27")+"'"),h.opener=null,pa.test(c)&&(-1!=c.indexOf("&")&&(c=
c.replace(ia,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(ka,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(la,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(ma,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(na,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(oa,"&#0;"))),c=Qa('<META HTTP-EQUIV="refresh" content="0; url='+c+'">'),h.document.write(Pa(c)),h.document.close())):c.open(Ka(f),d,h)}}
function fd(){Sb(bc,"pyv_user_click",{},!0,.1,void 0)}
;x("yt.setConfig",nb);x("yt.setMsg",function(a){ob(lb,arguments)});
L(window,"load",function(){Z("osd")||cd()});
L(window,"message",function(a){try{var b=tb(a.data)}catch(c){return}r(b)&&(xb=new yb(b),null!=N(1)&&(ed(),Z("osd")&&null!=N(3)&&(a=window,b=N(3),b=new Kc(b,null),b.b||b.a)))&&(Lb(a,"message",w(Rc,b,dd)),Nc=P.setInterval(Yb(w(Qc,2,b,void 0,void 0,void 0)),500))});})();
