(function(){if(typeof(window.admlgnews)!='undefined'){return false;}window.admlgnews='tknews';function p(b){var a=b;"string"==typeof b?document.getElementById&&(a=document.getElementById(b)):document.all&&(a=document.all[b]);if(null!=a){yPos=a.offsetTop;for(tempEl=a.offsetParent;null!=tempEl;)yPos+=tempEl.offsetTop,tempEl=tempEl.offsetParent;return yPos}return 0}function w(b,a,c){"addEventListener"in b?b.addEventListener(a,c):"attachEvent"in b&&b.attachEvent("on"+a,c)}document.addEventListener("mousedown",function(b){try{if(10!=b.which){var a=b.target,c="";"a"!=a.localName&&("img"==
a.localName?(a=b.target.parentNode,c+="img"):a=b.target.parentNode);if("figure"==a.localName){a=a.parentNode}if("a"==a.localName){var d=a.href,g=/-([0-9]+)(.chn|.html|.htm)$/;if(g.test(d)){var h=a.parentNode.getAttribute("data-marked-zoneid");if(null==h||""==h)if(a=a.parentNode,h=a.getAttribute("data-marked-zoneid"),null==h||""==h)if(a=a.parentNode,h=a.getAttribute("data-marked-zoneid"),null==h||""==h)if(a=a.parentNode,h=a.getAttribute("data-marked-zoneid"),null==h||""==h)if(a=a.parentNode,h=a.getAttribute("data-marked-zoneid"),null==h||""==h)if(a=a.parentNode,h=a.getAttribute("data-marked-zoneid"),null==h||""==h)a=a.parentNode,h=a.getAttribute("data-marked-zoneid");var f=g.exec(d);if(null!=f&&2<=f.length){var e=b.pageY,l=b.pageX,k=location.pathname+
"";b="l";-1!=k.indexOf("/")?b="h":g.test(k)&&(b="d");c=b+(1200>=e?1:2E3>=e?2:3)+c+"-"+f[1];null!=h&&""!=h&&(c=h+"-"+f[1]);localStorage.setItem("idtrackingnew",c);localStorage.setItem("postrackingnew",e+"_"+l)}}}}}catch(m){}});(function(){try{var b=window.location.href,a=/-([0-9]+)(.chn|.html|.htm)$/;if(a.test(b)){var c=a.exec(b)[1],b=/-([0-9]+)$/;null!=localStorage.getItem("idtrackingnew")&&parseInt(b.exec(localStorage.getItem("idtrackingnew"))[1])===parseInt(c)&&((new Image).src="//lg1.logging.admicro.vn/tl?ii="+
localStorage.getItem("postrackingnew")+"-"+localStorage.getItem("idtrackingnew")+"&d="+encodeURIComponent(location.host)+"&p="+encodeURIComponent(location.pathname)+"&cov=1",localStorage.removeItem("idtrackingnew"),localStorage.removeItem("postrackingnew"))}}catch(d){}})();try{var t=function(){d&&clearTimeout(d);if(0==c.length)return!1;d=setTimeout(function(){var b=[],a="",g=ADS_CHECKER.wdHeight(),f=ADS_CHECKER.getScrollTop(),e;for(e in c)c[e].t>f&&c[e].t<f+g?a+=c[e].a+",":b[b.length]=c[e];c=b;""!=
a&&(a=a.slice(0,-1),(new Image).src="//lg1.logging.admicro.vn/tl?ii="+a+"&d="+encodeURIComponent(location.host)+"&p="+encodeURIComponent(location.pathname));clearTimeout(d)},3E3)},l=document.querySelectorAll("[data-marked-zoneid]"),m=[],c=[],q=/-([0-9]+)(.chn|.html|.htm)$/,u=location.pathname+"",f="l";-1!=u.indexOf("/")?f="h":q.test(u)&&(f="d");if(0<l.length)for(var f=0,r=l.length;f<r;f++)for(var x=l[f].getAttribute("data-marked-zoneid"),e=l[f].querySelectorAll("a"),v=p(l[f]),g=0,y=e.length;g<y;g++){var d=
q.exec(e[g].href);if(null!=d&&2<=d.length&&!ADS_CHECKER.in_array(d[1],m)){m[m.length]=d[1];var n=p(e[g]),k=c.length;c[k]={};c[k].t=n<v?v:n;e[g].innerHTML.indexOf("<img");c[k].a=x+"-"+d[1]}}else for(e=document.querySelectorAll("a"),g=0,r=e.length;g<r;g++)d=q.exec(e[g].href),null!=d&&2<=d.length&&!ADS_CHECKER.in_array(d[1],m)&&(m[m.length]=d[1],n=p(e[g]),k=c.length,c[k]={},c[k].t=n,l=f+(1200>=n?1:2E3>=n?2:3),-1!=e[g].innerHTML.indexOf("<img")?c[k].a=l+"img-"+d[1]:c[k].a=l+"-"+d[1]);0<c.length&&(t(),
w(document,"scroll",t))}catch(b){}})();