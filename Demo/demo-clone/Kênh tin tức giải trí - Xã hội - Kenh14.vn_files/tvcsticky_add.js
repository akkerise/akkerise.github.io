var tvcStickyWd_add=0,tvcStickyHe_add=0,tvcStickySendlog_add=!1,_parentTvcWide_add=!1;"undefined"==typeof _admIframeLightBox&&(_admIframeLightBox=!1);"object"!==typeof JSON&&(JSON={});
(function(){function a(a){return 10>a?"0"+a:a}function c(a){e.lastIndex=0;return e.test(a)?'"'+a.replace(e,function(a){var b=h[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function b(a,d){var e,h,r,u,v=f,p,m=d[a];m&&"object"===typeof m&&"function"===typeof m.toJSON&&(m=m.toJSON(a));"function"===typeof k&&(m=k.call(d,a,m));switch(typeof m){case "string":return c(m);case "number":return isFinite(m)?String(m):"null";case "boolean":case "null":return String(m);
case "object":if(!m)return"null";f+=g;p=[];if("[object Array]"===Object.prototype.toString.apply(m)){u=m.length;for(e=0;e<u;e+=1)p[e]=b(e,m)||"null";r=0===p.length?"[]":f?"[\n"+f+p.join(",\n"+f)+"\n"+v+"]":"["+p.join(",")+"]";f=v;return r}if(k&&"object"===typeof k)for(u=k.length,e=0;e<u;e+=1)"string"===typeof k[e]&&(h=k[e],(r=b(h,m))&&p.push(c(h)+(f?": ":":")+r));else for(h in m)Object.prototype.hasOwnProperty.call(m,h)&&(r=b(h,m))&&p.push(c(h)+(f?": ":":")+r);r=0===p.length?"{}":f?"{\n"+f+p.join(",\n"+
f)+"\n"+v+"}":"{"+p.join(",")+"}";f=v;return r}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(b){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var d=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
e=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f,g,h={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},k;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,c,d){var e;g=f="";if("number"===typeof d)for(e=0;e<d;e+=1)g+=" ";else"string"===typeof d&&(g=d);if((k=c)&&"function"!==typeof c&&("object"!==typeof c||"number"!==typeof c.length))throw Error("JSON.stringify");return b("",{"":a})});
"function"!==typeof JSON.parse&&(JSON.parse=function(a,b){function c(a,d){var e,f,g=a[d];if(g&&"object"===typeof g)for(e in g)Object.prototype.hasOwnProperty.call(g,e)&&(f=c(g,e),void 0!==f?g[e]=f:delete g[e]);return b.call(a,d,g)}var e;a=String(a);d.lastIndex=0;d.test(a)&&(a=a.replace(d,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof b?c({"":e},""):e;throw new SyntaxError("JSON.parse");})})();var admClick_tvc_3rd_add="",admTvcSticky_add=!1,timerStickyTvc,jsTimeout=new Number,jsTimeDelay=60,jsAcceleration=.2,jsVelocity=3,admChk1=!1,admPopupHeight=250,admchkClose=!1,admTvcBr=999,admTvcCheck=0,admTvcTrack_add={tracking:!1,close:!1,bid:1},admTvcPopup=!1,_admTvcAddonShow={show:!0,chk:!0,first:0};
function admBrowserVer(){-1!=navigator.appVersion.indexOf("MSIE")&&parseFloat(navigator.appVersion.split("MSIE")[1]);return 6}function admtimeExpire(a){a=a.split(",");for(var c=0,b=a.length;c<b;c++)if(-1!=(a[c]+"").indexOf("tmp_"))return a=(a[c]+"").replace("tmp_",""),parseInt(a);return 0}function admcheckCount(a,c){for(var b=a.split(","),d=0,e=b.length;d<e;d++)if(-1!=b[d].indexOf(c+"_")){var f=b[d].split("_");if(f[0]==c)return parseInt(f[1])}return 0}
function admcountAdd(a,c){for(var b=a.split(","),d=0,e=b.length;d<e;d++)if(-1!=b[d].indexOf(c+"_")){var f=b[d].split("_");if(f[0]==c){f[1]=parseInt(f[1])+1;b[d]=f[0]+"_"+f[1];a=b.join(",");break}}return a}function admsetCount(a,c,b){for(var d=a.split(","),e=0,f=d.length;e<f;e++)if(-1!=d[e].indexOf(c+"_")){var g=d[e].split("_");if(g[0]==c){g[1]=parseInt(g[1])+1;d[e]=g[0]+"_"+b;a=d.join(",");break}}return a}
function admcloseAddFreq(a,c){var b=ADS_CHECKER.getStorage("_azs"),d=ADS_CHECKER.subCookie(b,"tvcclose"),e=d.replace("tvcclose:",""),f=(new Date).getTime(),f=parseInt(f/6E4);""==d?b+="tvcclose:"+a+"_"+(f+c)+";":(e=0==admcheckCount(e,a)?e+(","+a+"_"+(f+c)):admsetCount(e,a,f+c),b=b.replace(d,"tvcclose:"+e));ADS_CHECKER.setStorage("_azs",b,"","/")}
function admcountView(a){var c=ADS_CHECKER.getStorage("_azs"),b=ADS_CHECKER.subCookie(c,"cpmtvc"),d=b.replace("cpmtvc:","");if(""==b)var e=(new Date).getTime(),f=e-e%864E5+864E5,c=c+("cpmtvc:tmp_"+f+","+a+"_1;");else{var e=(new Date).getTime(),f=e-e%864E5+864E5,d=admtimeExpire(d),g="";e<d?(e=admcheckCount(b,a),g=0==e?b+","+a+"_1":admsetCount(b,a,e+1)):g="cpmtvc:tmp_"+f+","+a+"_1";c=c.replace(b,g)}ADS_CHECKER.setStorage("_azs",c,"","/")}
function admcheckAddq(a,c){var b=ADS_CHECKER.getStorage("_azs"),b=ADS_CHECKER.subCookie(b,a).replace(a+":","");if(""!=b)for(var b=b.split(","),d=0,e=b.length;d<e;d++){var f=b[d].split("_");f[1]=parseInt(f[1]);3==arguments.length?f[0]==arguments[2]&&f[1]>=c&&(ADS_CHECKER.in_array(f[0],__arCPM4K)||__arCPM4K.push(parseInt(f[0]))):f[1]>=c&&(ADS_CHECKER.in_array(f[0],__arCPM4K)||__arCPM4K.push(parseInt(f[0])))}}
function getFlashMovie(a){return-1!=navigator.appName.indexOf("Microsoft")?document.getElementById(a):document[a]}function jsAnimate(a,c,b){var d=new Number,d=[],d=String(document.getElementById(a).style[c]).split("px"),d=parseInt(d[0]);clearTimeout(jsTimeout);parseInt(b)>d?jsTimeout=setTimeout('animateProcess("'+a+'", "'+c+'", "increase", "'+d+'", "'+b+'", 1)',jsTimeDelay):parseInt(b)<d&&(jsTimeout=setTimeout('animateProcess("'+a+'", "'+c+'", "increase", "'+d+'", "'+b+'", 1)',jsTimeDelay))}
function animateProcess(a,c,b,d,e,f){clearTimeout(jsTimeout);var g=jsAcceleration*Math.pow(parseInt(f),2)/2+jsVelocity*parseInt(f),h=new Number;switch(b){case "increase":h=parseInt(d)+parseInt(g);h>=parseInt(e)?document.getElementById(a).style[c]=e+"px":(document.getElementById(a).style[c]=h+"px",f++,jsTimeout=setTimeout('animateProcess("'+a+'", "'+c+'", "'+b+'", "'+h+'", "'+e+'", '+f+")",jsTimeDelay));break;case "decrease":h=parseInt(d)-parseInt(g),h<=parseInt(e)?document.getElementById(a).style[c]=
e+"px":(document.getElementById(a).style[c]=h+"px",f++,jsTimeout=setTimeout('animateProcess("'+a+'", "'+c+'", "'+b+'", "'+h+'", "'+e+'", '+f+")",jsTimeDelay))}}function hookAdserving(a,c){document.getElementById(a).style.clip=c}
function hookExpand(a,c,b){var d=c;a=document.getElementById(a);if(_admIframeLightBox&&(d=d.replace(/px|rect|\(|\)|\s|\n/gi,""),""!=d)){var e=d.split(",");if(4==e.length){var d=window.parent.document.getElementById(_admIframeLBName),f=parseInt(e[1])-parseInt(e[3]),e=10+parseInt(e[2])-parseInt(e[0]);d.style.height=(300>e?303:e)+"px";d.style.width=(303>f?303:f)+"px"}}if(null!=a){if(b){b=a.offsetTop;for(d=a;d.offsetParent&&d.offsetParent!=document.body;)d=d.offsetParent,b+=d.offsetTop;window.scrollTo(0,
b)}a.style.clip=c}}function hookExpandOverflow(a,c,b){a=document.getElementById(a);if(null!=a&&(a.style.clip=c,b)){c=a.offsetTop;for(b=a;b.offsetParent&&b.offsetParent!=document.body;)b=b.offsetParent,c+=b.offsetTop;window.scrollTo(0,c);for(a=a.parentNode;a.parentNode&&a.parentNode!=document.body;){"visible"!=a.style.overflow&&(a.style.overflow="visible");if(500<=parseInt(a.offsetHeight))break;a=a.parentNode}}}
function jsRight(a){a=document.getElementById(a);a.style.left="auto";a.style.right="0px"}function jsCenter(a,c){var b=document.getElementById(a),d=windowPrototype.wdWidth();b.style.left=c>d?0:Math.floor((d-c)/2)+"px";b.style.right="auto"}
if("undefined"==typeof windowPrototype)var windowPrototype={wdHeight:function(){var a;"number"==typeof window.innerWidth?a=window.innerHeight:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(a=document.body.clientHeight);return a},wdWidth:function(){var a;"number"==typeof window.innerWidth?a=window.innerWidth:document.documentElement&&document.documentElement.clientWidth?a=document.documentElement.clientWidth:
document.body&&document.body.clientWidth&&(a=document.body.clientWidth);return a}};function rickShowEmpty(a){admchkClose=!0;a=document.getElementById(a);var c=document.getElementById("rick_Addon");void 0!=c&&null!=c&&(c.style.display="none");null!=a&&(a.style.display="none",admTvcTrack_add.close||(admTvcTrack_add.close=!0,admcloseAddFreq(admTvcTrack_add.bid,10)),tvcvzoneTime_add&&clearTimeout(tvcvzoneTime_add))}
if("undefined"==typeof getElementWidth)var getElementWidth$0=function(a){return(a=document.getElementById(a))?a.clientWidth:0};function getScrollTop(){var a=document.body.scrollTop;0==a&&(a=window.pageYOffset?window.pageYOffset:document.body.parentElement?document.body.parentElement.scrollTop:0);return a}
function getElementTop(a){if(document.getElementById)var c=document.getElementById(a);else document.all&&(c=document.all[a]);if(null!=c){yPos=c.offsetTop;for(tempEl=c.offsetParent;null!=tempEl;)yPos+=tempEl.offsetTop,tempEl=tempEl.offsetParent;return yPos}return 150}function scrollTvcTo(a,c){a=c>a+50?a+50:c+10;window.scrollTo(0,a);a<c?timerStickyTvc=setTimeout("scrollTvcTo("+a+","+c+")",5):timerStickyTvc&&clearTimeout(timerStickyTvc)}
function admCheckSticky_add(){var a=document.getElementById("tvcvzone_add"),c=7<tvcvzone_add.ieVersion()?ADS_CHECKER.wdWidth():Math.min(ADS_CHECKER.wdWidth(),(window.screen.width-20)/admScaleIe()),b=(window.navigator.userAgent+"").match(/iPad|Andorid|Windows Phone/i);if(ADS_CHECKER.flash&&1200>c&&a&&"none"!=a.style.display&&!b)return a.style.display="none",tvcvzoneTime_add=setTimeout("admCheckSticky_add()",100),!1;1200<=c&&a&&"none"==a.style.display&&(a.style.display="");a=document.getElementById("tvcvzoneIframe_add");
tvcvzone_add.admCheckBool(!0)?admTvcSticky_add||(c=a.contentWindow,c.tkClick||(b=window.screen.width,-1!=(tvcvzone_add.admDomain+"").indexOf("dantri.com.vn")||1600<=b?(_parentTvcWide_add=!0,a.style.width="600px",a.style.height="415px"):1300<=b?(_parentTvcWide_add=!1,a.style.width="500px",a.style.height="348px"):(_parentTvcWide_add=!1,a.style.width="444px",a.style.height="301px"),admTvcSticky_add=!0,tvcStickySendlog_add||("undefined"!=typeof arrDataTVCV_add.link3rd&&""!=arrDataTVCV_add.link3rd&&null!=
arrDataTVCV_add.link3rd&&((new Image).src=arrDataTVCV_add.link3rd),tvcStickySendlog_add=!0),"undefined"!=typeof c.parentshowMedium&&c.parentshowMedium())):admTvcSticky_add&&(c=a.contentWindow,admTvcSticky_add=!1,c.showAddon());tvcvzoneTime_add=setTimeout("admCheckSticky_add()",100)}if("undefined"==typeof imgHost)var imgHost=("https:"==document.location.protocol?"https://":"http://")+"admicro2.vcmedia.vn/adt/cpc/";var imgHost3=imgHost+"tvcads/",arrDataTVCV_add=null,_admTVCV_top=235;
if("undefined"==typeof __arCPM4K)var __arCPM4K=[];function get_datatvcv_add(){return arrDataTVCV_add}var tvcvzone_add,tvcvzoneTime_add;
function TVCVZones(){this.ieVersion=function(){var a=999;-1!=navigator.appVersion.indexOf("MSIE")&&(a=parseFloat(navigator.appVersion.split("MSIE")[1]));return a};this.admDomain=document.domain+"";this.admDomain=""!=ADS_CHECKER.getQuery("admdomain")?ADS_CHECKER.getQuery("admdomain"):this.admDomain;tvcvzone_add=this;this.admTvcMedium=function(){var a=tvcvzone_add.admCheckBool(!1);"object"==typeof a&&tvcvzone_add.scrollTvcTo(a[0],a[1])};this.rand=Math.random();this.fl=Math.floor;this.domain=("https:"==
document.location.protocol?"https://":"http://")+document.domain+"/";this.channel=document.location.href;this.rand_limit=1;this.zoneid=-1;this.ClientLo=0;this.version=Math.random();this.clLocat=function(a){if("undefine"!=typeof this.getCookie(a))return this.ClientLo=this.getCookie(a)};this.campWillRun=function(a){var c=[],b=this.cookCpRunned(),d=a.length,b=b.substr(0,b.length-1);this.explode(",",b);clientLo=this.clLocat("__R");clientLoC=this.clLocat("__RC");this._r=clientLo;this._rc=clientLoC;var e=
this.CAMPLOCA,f=[],g=/,[1|2|3],[1|2|3],[1|2|3],/g;if("0"==clientLo||"0"==clientLoC||""==clientLo)for(var h=clientLo=0;h<d;h++){var k=","+e[a[h]]+",";(g.test(k)||",,"==k||",0,"==k)&&f.push(a[h])}else for(h=0;h<d;h++)k=","+e[a[h]]+",",-1==k.indexOf(","+clientLo+",")&&-1==k.indexOf(","+clientLoC+",")||f.push(a[h]);if(""==b||null==b)c=f;else{h=0;for(a=f.length;h<a;h++)"undefined"!=typeof f[h]&&-1==b.indexOf(this.zoneid+"_"+f[h])&&c.push(f[h]);0==c.length&&""!=b&&(this.removeZoneCook(b),c=f)}return c};
this.removeZoneCook=function(a){var c=this.getCookie("cpcZone");a=a.split(",");for(var b=a.length-1,d=0;d<b;d++)c=c.replace(a[d]+",","");this.setCookie("cpcZone",c,1,1)};this.cookCpRunned=function(){var a=this.getCookie("cpcZone"),c="";if(""!=a&&1<a.length||"undefined"!=typeof a){for(var a=a.toString().split(","),b=0;b<a.length;b++)-1!=a[b].indexOf(this.zoneid+"_")&&(c+=a[b]+",");return c}return""};this.explode=function(a,c,b){var d={0:""};if(2>arguments.length||"undefined"==typeof arguments[0]||
"undefined"==typeof arguments[1])return null;if(""===a||!1===a||null===a)return!1;if("function"==typeof a||"object"==typeof a||"function"==typeof c||"object"==typeof c)return d;!0===a&&(a="1");if(b){var e=c.toString().split(a.toString()),d=e.splice(0,b-1),e=e.join(a.toString());("undefined"!=typeof e||""!=e||0<e)&&d.push(e);return d}return c.toString().split(a.toString())};this.setCookie=function(a,c,b,d){if(void 0!=window.ADS_CHECKER&&"undefined"!=window.ADS_CHECKER)return ADS_CHECKER.setStorage(a,
c,0,"/"),!0;var e=new Date;e.setDate(e.getDate()+b);if(1==d)document.cookie=a+"="+escape(c)+(null==b?"":";expires="+e.toUTCString())+";path=/";else if(d=this.getCookie("cpcZone"),0>d.search(c)||""==d||null==d)document.cookie=a+"="+escape(d+c)+(null==b?"":";expires="+e.toUTCString())+";path=/"};this.in_array=function(a,c,b){var d=!1,e;b=!!b;for(e in c)if(b&&c[e]===a||!b&&c[e]==a){d=!0;break}return d};this.isArray=function(a){return a.constructor==Array};this.getCookie=function(a){return void 0!=window.ADS_CHECKER&&
"undefined"!=window.ADS_CHECKER?ADS_CHECKER.getStorage(a):0<document.cookie.length&&(c_start=document.cookie.indexOf(a+"="),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""};this.Shuffle=function(a){for(var c,b,d=a.length;d;c=parseInt(Math.random()*d),b=a[--d],a[d]=a[c],a[c]=b);return a};this.toArray=function(a){var c=[];for(x in a)c.push(a[x]);return c};this.image=function(a){return imgHost3+
this.path+a};this.logging=function(a,c,b,d){var e="";b?(e=("https:"==document.location.protocol?"https://":"http://")+"lg.logging.admicro.vn/atvc?p=",e=d?encodeURIComponent(e+a.cid+";"+a.id+";"+a.zid+";"+("undefined"==c?0:c)+";-1;9;0;5;"+("undefined"!=a.hn?a.hn:"")+";"+encodeURIComponent(a.url)+"&cov=0"):e+a.cid+";"+a.id+";"+a.zid+";"+("undefined"==c?0:c)+";-1;9;0;5;"+("undefined"!=a.hn?a.hn:"")+";"+encodeURIComponent(a.url)+"&cov=0"):(e=1==a.cpa?("https:"==document.location.protocol?"https://":"http://")+
"lg.logging.admicro.vn/c_cpa?":("https:"==document.location.protocol?"https://":"http://")+"lg.logging.admicro.vn/atvc?p=",e=d?encodeURIComponent(e+a.cid+";"+a.id+";"+a.zid+";"+("undefined"==c?0:c)+";-1;9;15;5;"+("undefined"!=a.hn?a.hn:"")+";="+encodeURIComponent(a.url)+"&cov=1&re="+encodeURIComponent(a.click)):e+a.cid+";"+a.id+";"+a.zid+";"+("undefined"==c?0:c)+";-1;9;15;5;"+("undefined"!=a.hn?a.hn:"")+";="+encodeURIComponent(a.url)+"&cov=1&re="+encodeURIComponent(a.click));return e};this.getLinkClick=
function(){return this.trackingClick};this.sendTkc=function(){(new Image).src=this.trackingClick};this.execMethod=function(a){for(var c=0,b=a.length;c<b;c++){if("undefined"!=typeof a[c].paramGlobal)for(var d in a[c].paramGlobal)window[d]=a[c].paramGlobal[d];window[a[c].name]=(new Function("return ("+a[c]["function"]+")"))()}};this.resetData=function(a){var c={},b={},d=0,e={};c.hn=document.domain.replace("www.","");url=function(){var a=document.URL+"",b=document.domain+"";return""==b?a:a.substring(a.indexOf(b)+
b.length,a.length)};c.url=url();c.zid=this.zoneid;c.type=this.type;c.height=parseInt(a.heght);c.config="";for(var f in a)switch(f){case "campaignid":c.cid=a[f];break;case "linkclick":c.click=a[f];break;case "file_name":b[d]={image:imgHost3+a.path+a[f],click:a.linkclick,key:-1};d++;break;case "items":for(var g in a[f])if("undefined"==typeof a[f][g].length){var h={};h.key=g.replace(/k/g,"");h.click=a.linkclick;for(var k in a[f][g])if(""!=a[f][g][k]){if("config"==k){if(""!=a[f][g][k]&&"undefined"!=typeof JSON&&
"undefined"!=typeof JSON.parse&&(c.config=JSON.parse(a[f][g][k]),"undefined"!=typeof c.config.method&&this.execMethod(c.config.method),"undefined"!=typeof c.config.click_3rd&&(admClick_tvc_3rd_add=c.config.click_3rd),"undefined"!=typeof c.config.medium)){var l=document.domain,q=!1;if("undefined"!=typeof c.config.medium.domain){var t=(c.config.medium.domain+"").split(",");0<t.length&&(q=ADS_CHECKER.in_array(l,t))}"undefined"!=typeof c.config.medium.image&&(1==c.type||_admIframeLightBox||q&&2==c.type)&&
(b[0].image=c.config.medium.image);"undefined"!=typeof c.config.medium.height&&(1==c.type||_admIframeLightBox||q&&2==c.type)&&(c.height=parseInt(c.config.medium.height))}}else h[k]="image"==k||"title_image"==k||"addon"==k||"image_plus"==k?imgHost3+a.path+a[f][g][k]:a[f][g][k];if("image_tablet"==k||"image_plus_tablet"==k||"title"==k)e[k]="title"==k?a[f][g][k]:imgHost3+a.path+a[f][g][k]}b[d]=h;d++;h={}}else b[d]=a[f][g],d++;2==c.type&&(b[1].image=b[1].image_plus);c.items=b;break;default:c[f]=a[f]}""==
c.config&&(c.config={});"undefined"!=typeof c.tmp&&1==c.tmp&&1==c.tmp&&(c.tmp=2);c.ipad=e;return c};this.InitScript=function(){};this.bindCss=function(a){var c=document.createElement("style");c.type="text/css";document.getElementsByTagName("head")[0].appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))};this.timeOnPage=(new Date).getTime();this.addEventListener=function(a,c,b){"addEventListener"in a?a.addEventListener(c,b):"attachEvent"in a&&a.attachEvent("on"+
c,b)};tvcvzone_add.timeOnPage=(new Date).getTime();this.admTvcTracking=function(a){return!1};this.admTvcchangeHeight=function(){doc=document;bodyHeight=Math.max(Math.max(doc.body.scrollHeight,doc.documentElement.scrollHeight),Math.max(doc.body.offsetHeight,doc.documentElement.offsetHeight),Math.max(doc.body.clientHeight,doc.documentElement.clientHeight));bodyWidth=Math.max(Math.max(doc.body.scrollWidth,doc.documentElement.scrollWidth),Math.max(doc.body.offsetWidth,doc.documentElement.offsetWidth),
Math.max(doc.body.clientWidth,doc.documentElement.clientWidth));wdH=windowPrototype.wdHeight();idAdserving=document.getElementById("tvcvzoneIframe_add");wdCheckWd=Math.floor((bodyWidth-1020)/2);scrolltop=getScrollTop();io=idAdserving.contentWindow;id1=io.document.getElementById("admTvcAddonDiv");wdH=windowPrototype.wdHeight();admPopupHeight=400;config={bottom:0,fixbottom:0,fixright:0,ele:"advZoneStickyTop","default":"advZoneSticky"};wdCheckWd=0>wdCheckWd?0:wdCheckWd;id1.style.height="800px";id1.style.width=
wdCheckWd+"px";idAdserving.style.width=wdCheckWd+"px";idAdserving.style.height="800px"};this.admCheckBool=function(a){var c=400,b={bottom:0,fixbottom:0,fixright:0,ele:"advZoneStickyTop","default":"advZoneSticky"},d=document,e=Math.max(Math.max(d.body.scrollHeight,d.documentElement.scrollHeight),Math.max(d.body.offsetHeight,d.documentElement.offsetHeight),Math.max(d.body.clientHeight,d.documentElement.clientHeight)),f=Math.max(Math.max(d.body.scrollWidth,d.documentElement.scrollWidth),Math.max(d.body.offsetWidth,
d.documentElement.offsetWidth),Math.max(d.body.clientWidth,d.documentElement.clientWidth)),d=windowPrototype.wdHeight(),c=getScrollTop(),g=e-(c+d),h=document.getElementById("tvcvzoneIframe_add"),c=400;if("undefined"!=typeof tvcStickyConfig){"undefined"==typeof tvcStickyConfig.ele&&(tvcStickyConfig.ele="advZoneStickyTop");"undefined"==typeof tvcStickyConfig["default"]&&(tvcStickyConfig["default"]="advZoneSticky");for(var k in tvcStickyConfig)b[k]=tvcStickyConfig[k];if("string"==typeof b.ele)b.ele=
getElementTop(b.ele);else if("object"==typeof b.ele){for(var l=k=0,q=b.ele.length;l<q;l++)if("string"==typeof b.ele[l]){var t=document.getElementById(b.ele[l]);t&&(k=Math.max(k,getElementTop(b.ele[l])))}else k=Math.max(k,b.ele[l]);b.ele=k}if("string"==typeof b.bottom)b.bottom=e-getElementTop(b.bottom);else if("object"==typeof b.bottom)for(l=0,q=b.bottom.length;l<q;l++)if("string"==typeof b.bottom[l]){if(t=document.getElementById(b.bottom[l])){k=getElementTop(b.bottom[l]);b.bottom=e-k;break}}else{b.bottom=
b.bottom[l];break}arrDataTVCV_add.adserving?h.style.bottom=g>b.bottom?b.fixbottom+"px":b.bottom-g+"px":n&&(g>b.bottom?(n.style.bottom=b.fixbottom+"px",id2.style.bottom=b.fixbottom+"px"):(n.style.bottom=b.bottom-g+"px",id2.style.bottom=b.bottom-g+"px"))}n=getScrollTop();k=0;f=Math.floor((f-1020)/2);g=n>=_admTVCV_top?d-b.fixbottom:d-b.fixbottom-_admTVCV_top;f=0>f?0:f;k="string"==typeof b.ele?getElementTop(b.ele):b.ele;if(a){if(e-k>b.bottom+c&&n+d>k+c&&0<k)return!0;if(!admTvcSticky_add&&(tvcStickyWd_add!=
f||g!=tvcStickyHe_add)){tvcStickyWd_add=f;h.style.width=f+"px";h.style.height=g+"px";a=h.contentWindow;var n=a.document.getElementById("admTvcAddonDiv");n&&(n.style.height=g+"px",n.style.width=f+"px")}return!1}if(e-k>b.bottom+c)return[n,k+c-d];!admTvcSticky_add&&(tvcStickyWd_add!=f||g!=tvcStickyHe_add)&&(tvcStickyWd_add=f,h.style.width=f+"px",h.style.height=g+"px",a=h.contentWindow,n=a.document.getElementById("admTvcAddonDiv"))&&(n.style.height=g+"px",n.style.width=f+"px");return!1};this.admcheckAddFreq=
function(a,c){var b=ADS_CHECKER.getStorage("_azs"),b=ADS_CHECKER.subCookie(b,a).replace(a+":","");if(""!=b)for(var b=b.split(","),d=0,e=b.length;d<e;d++){var f=b[d].split("_");f[1]=parseInt(f[1]);3==arguments.length?f[0]==arguments[2]&&f[1]>=c&&(ADS_CHECKER.in_array(f[0],__arCPM4K)||__arCPM4K.push(parseInt(f[0]))):f[1]>=c&&(ADS_CHECKER.in_array(f[0],__arCPM4K)||__arCPM4K.push(parseInt(f[0])))}};this.sexAvai=function(a){var c;return"undefined"!=typeof a.sex&&null!=a.sex&&""!=a.sex?"0"==a.sex||"undefined"!=
typeof ADS_CHECKER&&"undefined"!=typeof ADS_CHECKER.SEX&&(c=ADS_CHECKER.SEX,-1!=a.sex.indexOf(c))?!0:!1:!0};this.OnLoaded=function(a,c){var b=a.NORMAL,d={},e={bottom:0,fixbottom:0,fixright:0,ele:"advZoneStickyTop","default":"advZoneSticky"};parseInt(window.screen.width);if("undefined"!=typeof tvcStickyConfig){"undefined"==typeof tvcStickyConfig.ele&&(tvcStickyConfig.ele="advZoneStickyTop");"undefined"==typeof tvcStickyConfig["default"]&&(tvcStickyConfig["default"]="advZoneSticky");for(var f in tvcStickyConfig)e[f]=
tvcStickyConfig[f]}for(var g in b){d[g]={};f=0;for(var h in b[g])if("undefined"!=typeof ADS_CHECKER&&("undefined"!=typeof b[g][h].fr&&""!=b[g][h].id&&0<parseInt(b[g][h].id)?tvcvzone_add.admcheckAddFreq("cpmtvc",parseInt(b[g][h].id),b[g][h].id):tvcvzone_add.admcheckAddFreq("cpmtvc",6,b[g][h].id)),"undefined"==typeof b[g][h].tmp||isNaN(parseInt(b[g][h].tmp))||parseInt(b[g][h].tmp),!this.in_array(b[g][h].id,__arCPM4K)||0==b[g][h].id){var k=!1;if(0==b[g][h].id)k=!0;else if("undefined"==typeof b[g][h].retargetingtag||
null==b[g][h].retargetingtag||""==b[g][h].retargetingtag)k=!0;else var k=b[g][h].retargetingtag+"",l=","+("undefined"!=typeof ADS_UserInfo?ADS_UserInfo:"")+",",k=","+k.replace(/\,/g,",|,")+",",k=(new RegExp(k)).test(l);"undefined"==typeof b[g][h].sex||""==b[g][h].sex||this.sexAvai(b[g][h])||(k=!1);k&&(d[g][h]=b[g][h],f++)}0===f&&(delete d[g],delete a.CAMPLOCA[g])}a.NORMAL=d;this.zoneid=a.ZONEID;this.lstbannerid=a.lstbannerid;this.type=a.TYPE;this.CAMPLOCA=a.CAMPLOCA;b=document.getElementById("tvcvzone_add");
f=this.campWillRun(a.CAMPLIST);this.cookCpRunned();k=f.length;g=this.Shuffle(f);g=a;d=/,[1|2|3],[1|2|3],[1|2|3],/g;if("undefined"!=typeof e.show){var l=e.show.url,q=document.URL;g=0;for(h=l.length;g<h;g++)if(l[g]==q){if(screen.width<=e.show.width)return AdmLoadDefault("tvcvzone_add"),!1;break}}if(0==k)return"undefined"!=typeof _admDefault&&AdmLoadDefault("tvcvzone_add"),!1;g=this.Shuffle(f);g=this.Shuffle(g);h={};this.toArray(a.NORMAL);if("undefined"!=typeof h.id)g=h;else{f=[];k=[];k=this.toArray(a.NORMAL[g[0]]);
if("0"==this._r||"0"==this._rc||""==this._r)for(g=0,h=k.length;g<h;g++)l=","+k[g].l+",",(d.test(l)||",,"==l||",0,"==l)&&f.push(g);else for(g=0,h=k.length;g<h;g++)l=","+k[g].l+",",-1==l.indexOf(","+this._r+",")&&-1==l.indexOf(","+this._rc+",")||f.push(g);if(0==f.length)return AdmLoadDefault("tvcvzone_add"),b.style.display="none",!1;f=this.Shuffle(f);g=k[f[0]]}b=this.getCookie("cpcZone");this.setCookie("cpcZone",b+this.zoneid+"_"+g.campaignid+",",1,"");output="";arrDataTVCV_add=this.resetData(g);b=
0;h=document.domain;d=-1!=h.indexOf("enbac.com")?990:9999;f=arrDataTVCV_add;-1!=h.indexOf("f319.com")&&(b=25);"undefined"!=typeof e.fixbottom&&0!=e.fixbottom&&(b=e.fixbottom);e=this.logging(f,-1,!1,!1)+"";-1!=e.indexOf("&re=")&&(e=e.substring(0,e.indexOf("&re=")+4));this.trackingClick=e;admTvcTrack_add.bid=g.id;output+='<div id="admTvcLoadHide" style="display:none;height:0;width:0;"></div>';arrDataTVCV_add.adserving=!1;if("undefined"!=typeof arrDataTVCV_add.htmltemplate&&null!=arrDataTVCV_add.htmltemplate&&
""!=arrDataTVCV_add.htmltemplate)return arrDataTVCV_add.adserving=!0,arrDataTVCV_add.checkloaded=!1,e=document.getElementById("tvcvzone_add"),document.getElementById("tvcvzone_add"),e.style.zIndex=d,e.innerHTML='<iframe style="'+("position:fixed;bottom:"+b+"px;right:0px;width:130px;height:250px;border:none;")+'" id="tvcvzoneIframe_add" width="130" scrolling="no" frameborder="no" height="250"></iframe>',e=document.getElementById("tvcvzoneIframe_add"),e=e.contentWindow?e.contentWindow.document:e.contentDocument?
e.contentDocument:e.document,e.write("<style>body{margin:0}</style>"+arrDataTVCV_add.htmltemplate.replace(/\\n|\\/g,"")),e.close(),window.setTimeout("admCheckSticky_add()",1500),!1}};