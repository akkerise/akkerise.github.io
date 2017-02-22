if (typeof (_admBrV) == 'undefined') {
    var _ADMBrowser = {
        Version: function () {
            var version = 999;
            if (navigator.appVersion.indexOf("MSIE") != -1) version = parseFloat(navigator.appVersion.split("MSIE")[1]);
            return version;
        }
    }
    var _admBrV = _ADMBrowser.Version();
}
if (typeof (admImgHost) == 'undefined') {
    admImgHost = false;
}
function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function getSubString(str, max){
		var j = str.length;
		var bstr = str;
		if(j>max){
			max = max - 4;
			bstr = str.substr(0, max);
			var n = bstr.lastIndexOf(" ");
			bstr =  bstr.substr(0, n);
			bstr = bstr + '...';
		}		
		return bstr;
}
function sponsorzone_13630_getScrollTop(){
    var ScrollTop = document.body.scrollTop;
    if (ScrollTop == 0)
    {
        if (window.pageYOffset)
            ScrollTop = window.pageYOffset;
        else
            ScrollTop = (document.body.parentElement) ? document.body.parentElement.scrollTop : 0;
    }
    return ScrollTop;
}
function sponsorzone_13630_getElementTop(Elem) {
    if(document.getElementById) {
        var elem = document.getElementById(Elem);
    } else if (document.all) {
        var elem = document.all[Elem];
    }
    if(elem!=null){
        yPos = elem.offsetTop;
        tempEl = elem.offsetParent;
        while (tempEl != null) {
            yPos += tempEl.offsetTop;
            tempEl = tempEl.offsetParent;
        }
        return yPos;
    }
    else{
        return 0;
    }
}

function formatIntNumber(number, places, thousand, decimal) {
		number = number || 0;
		places = !isNaN(places = Math.abs(places)) ? places : 2;
		thousand = thousand || ".";
		decimal = decimal || ",";
		var negative = number < 0 ? "-" : "",
			i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
			j = (j = i.length) > 3 ? j % 3 : 0;
		return  negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}
function sponsorzone_13630_wirtecountview(countadv, intloop){
	var txtcount;
	if(countadv/1000000 >1){
		var d = a = Math.floor(countadv/1000000); 
		a = formatIntNumber(a,0);
		var b = Math.floor(countadv - d*1000000).toString();
		b = b.substring(0,1);
		if(b==0) b = "";
		txtcount = '(+'+a+','+b+'M views)';
	}else
	if(countadv/1000 >1){
		var d = a = Math.floor(countadv/1000); 
		a = formatIntNumber(a,0);
		var b = Math.floor(countadv - d*1000).toString();
		b = b.substring(0,1);
		if(b==0) b = "";
		txtcount = '(+'+a+','+b+'k views)';
	}else {
		txtcount = '('+countadv+' views)';
	}
	if(document.getElementById('sponsorzone_13630_txtviewadv_'+intloop)) document.getElementById('sponsorzone_13630_txtviewadv_'+intloop).innerHTML=txtcount;			
	else{
		window.setTimeout(function(){
			sponsorzone_13630_wirtecountview(countadv, intloop);
		},200);		
	}
}

function sponsorzone_13630_linkLandPageViewPlus(strhref){
	window.open(strhref,'_blank');
	e.stopPropagation();
}
function sponsorzone_13630_linkLandPage(strhref){
	window.open(strhref,'_blank');
}
function AdmZones() {
    this.rand = Math.random();
    this.fl = Math.floor;
    this.domain = 'http://' + document.domain + '/';
	this.admDomain=document.domain+'';
	this.admDomain=ADS_CHECKER.getQuery('admdomain')!=''?ADS_CHECKER.getQuery('admdomain'):'vneconomy.vn';
	this.channel = document.location.href;
    this.rand_limit = 5;
	this.min_limit = 3;
    this.zoneid = -1;
    var campRunned = [];
    this.ClientLo = 0;
    var aThis = this;
    this.bannerRun = [];
	this.arrBanRun=[];
	this.checkBanRunNoDF=0;
    aThis.trkItem = [];
    aThis.df = [];
    this.randNum = function () {
	
        return this.fl(this.rand * 11) + 1;
    }
    this.clLocat = function (name) {
        if (typeof (this.getCookie(name)) != 'undefine' || this.getCookie(name) != '') {
            return this.ClientLo = this.getCookie(name);
        }
        return 0;
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt) {
            var len = this.length;
            var from = Number(arguments[1]) || 0;
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0) from += len;
            for (; from < len; from++) {
                if (from in this && this[from] === elt) return from;
            }
            return -1;
        };
    }
    this.arrBid = [];
    this.init = function (a) {
		
        var arrBanRun = [],
            clientLo = this.clLocat('__R'),
			clientLoC = this.clLocat('__RC'),
            l = '',
			la='',
            limit = 0;
            //k = /,[1|2|3],[1|2|3],[1|2|3],/g,
			//re = new RegExp("," + clientLo + ",", "g"),
			//re1 = new RegExp("," + clientLoC + ",", "g");
        if (a.length == 0) {
            return a;
        }
        var arr = [],
            trackI;
        if (window["ADS_CHECKER"] != undefined && window["ADS_CHECKER"] != "undefined") {
            trackI = ADS_CHECKER.getQuery('i');
        }
        trackI = (trackI == '' && isNaN(trackI)) ? 0 : parseInt(trackI);
        var check = false;
        for (var i=0; i<a.length;i++) {
			
            var b = aThis.toArray(a[i]);
           
			for (var t=0; t<b.length;t++) {
			/*
                l = ',' + b[t].l + ',';
				la = ',' + b[t].la + ',';
				
                if (l == ',,' || l == ",0," || re.test(l) || re1.test(l) || (la!=',,' && re.test(la)) || k.test(l)) {
					arrBanRun.push(b[t]);
                }
				*/
				//////
				if(b[t].l || typeof(b[t].l)!='undefined'){
					l = b[t].l;
					if(ADS_CHECKER.in_array(clientLo, l) || ADS_CHECKER.in_array(clientLoC, l)) arrBanRun.push(b[t]);		
				}else {
					arrBanRun.push(b[t]);
				}		
				/////
                if (b[t].bid == trackI && check == false) {
                    check = true;
                    aThis.trkItem.push(b[t]);
                }
            }
        }
		limit = arrBanRun.length;
		arrBanRun = this.Shuffle(arrBanRun);
		var arrangeBanRun = [];
		//chuyen trong so df len tren 
		var temDf = [], temNoDf=[];
		for (var t = 0; t < limit; t++) {
			if( typeof(arrBanRun[t]['df'])==='undefined' || arrBanRun[t]['df'] === 'undefined' || parseInt(arrBanRun[t]['df'])===0 ){	
				temNoDf.push(arrBanRun[t]);
			}else temDf.push(arrBanRun[t]);
        }
		if(temNoDf.length<1) {
			this.checkBanRunNoDF=1		
		}
		arrangeBanRun = temNoDf.concat(temDf);
		arrBanRun = arrangeBanRun;
		//
		var tempArrBanRun = [];
		if(this.rand_limit > limit){
			this.rand_limit = limit;
		}else {
			for (var i = 0; i < this.rand_limit; i++) {
                tempArrBanRun.push(arrBanRun[i]);
            }
			arrBanRun = tempArrBanRun;
		}
		/*
        limit = arrBanRun.length;
        if (this.rand_limit > limit && limit > 0) {
            if ((this.rand_limit - limit) > 0 && limit > 0) {
                arrBanRun = this.Shuffle(arrBanRun);
                var j = 0;
                for (var i = 0; i < (this.rand_limit -
                    limit); i++) {
                    arrBanRun.push(arrBanRun[j]);
                    if (j < (limit - 1)) {
                        j++;
                    } else {
                        j = 0;
                    }
                }
            }
        }
		*/
        aThis.arrBanRun = arrBanRun;
    };
    
    this.strDomain = '';
    this.choseData = function (a) {
        var dt = aThis.data['DATA'];
        var strbid = ',',
            arrdata = [];
        return a;
    }
    this.chose = function (a, limit) {
        var arr = [],
            arr1 = a,
            arr2 = [],
            dt = aThis.data['DATA'];
        if (aThis.strDomain != '') {
            arr1 = this.choseData(arr1);
        }
        for (var i = 0; i < limit; i++) {
            var len = arr1.length;
            var rd = Math.floor(len * Math.random());
            arr.push(arr1[rd]);
            delete(arr1[rd]);
            arr1 = aThis.choseData(arr1);
        }
        return arr;
    }
   
    
    
    this.explode = function (delimiter, string, limit) {
        var emptyArray = {
            0: ''
        };
        if (arguments.length < 2 || typeof arguments[0] == 'undefined' || typeof arguments[1] == 'undefined') {
            return null;
        }
        if (delimiter === '' || delimiter === false || delimiter === null) {
            return false;
        }
        if (typeof delimiter == 'function' || typeof delimiter == 'object' || typeof string == 'function' || typeof string == 'object') {
            return emptyArray;
        }
        if (delimiter === true) {
            delimiter = '1';
        }
        if (!limit) {
            return string.toString().split(delimiter.toString());
        } else {
            var splitted = string.toString().split(delimiter.toString()),
                partA = splitted.splice(0, limit - 1),
                partB = splitted.join(delimiter.toString());
            if (typeof (partB) != 'undefined' || partB != '' || partB > 0) {
                partA.push(partB);
            }
            return partA;
        }
    }
    this.setCookie = function (c_name, value, expiredays, reset) {
        if (window["ADS_CHECKER"] != undefined && window["ADS_CHECKER"] != "undefined") {
            ADS_CHECKER.setStorage(c_name, value, 0, '/');
            return true;
        }
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        if (reset == 1) {
            document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toUTCString()) + ";path=/";
        } else {
            var curCook = this.getCookie('cpcSelfServ');
            if (curCook.search(value) < 0 || curCook == '' || curCook == null) {
                document.cookie = c_name + "=" + escape(curCook + value) + ((expiredays == null) ? "" : ";expires=" + exdate.toUTCString()) + ";path=/";
            }
        }
    }
    this.isArray = function (obj) {
        return obj.constructor == Array;
    }
    this.getCookie = function (c_name) {
        if (window["ADS_CHECKER"] != undefined && window["ADS_CHECKER"] != "undefined") {
            return ADS_CHECKER.getStorage(c_name);
        }
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    }
    this.Shuffle = function (v) {
        var vlen = v.length;
        for (var j, x, i = vlen; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
        return v;
    }
    this.toArray = function (o) {
		if (o.length == 0) {
            return o;
        }
        var a = [];
        for (x in o) {
            a.push(o[x]);
        }
        return a;
    } 
    this.CreateStyleSheet = function () {	
		//var woff = '//adi.vcmedia.vn/adt/adn/view-icon-gray.png';
		//var woff = 'http://demo.admicro.vn/viewplus/images/utmswiss.woff';
		//var ttf = 'http://demo.admicro.vn/viewplus/images/utmswiss.ttf';
		var woff = '//adi.vcmedia.vn/adt/adn/utmswiss.woff';
		var ttf = '//adi.vcmedia.vn/adt/adn/utmswiss.ttf';
		
		var bghead = '#ec5f5f';
		var colorinfo = '#ec5f5f';
		var domain = document.domain;
		//domain = 'soha.vn';
		if(domain.indexOf('kenh14.vn')>-1) bghead = '#eea50c';
		else if(domain.indexOf('giadinh.net.vn')>-1) bghead = '#df4d64';
		else if(domain.indexOf('soha.vn')>-1) { bghead = '#008375'; colorinfo = '#808080'; }//008375
		else if(domain.indexOf('cafef.vn')>-1) { bghead = '#ff5252'; colorinfo = '#ff5252'; }
		else if(domain.indexOf('vneconomy.vn')>-1) { bghead = '#ed4848'; colorinfo = '#ff5252'; }
		else if(domain.indexOf('sannhac.com')>-1) { bghead = '#004048'; colorinfo = '#4a959c'; }
		else if(domain.indexOf('autopro.com.vn')>-1) { bghead = '#C30204';}
		
		var css='@font-face{font-family:UTMswiss;src:url('+woff+') format("woff"),url('+ttf+') format("truetype")}.sponsorzone_13630_clearfix,html[xmlns] .sponsorzone_13630_clearfix{display:block}.sponsorzone_13630_clearfix:after{clear:both;content:".";display:block;height:0;visibility:hidden;line-height:0;font-size:1px;overflow:hidden}#sponsorzone_13630_box p{padding:0;margin:0}#sponsorzone_13630_box ul,li{list-style-type:none;padding:0;margin:0}#sponsorzone_13630_box{width:300px;margin:0 auto;font-family:Arial;font-size:12px;}#sponsorzone_13630_box *{-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important;box-sizing:content-box!important}.sponsorzone_13630_utm{font-family:UTMswiss,Arial,Sans-Serif!important}#sponsorzone_13630_head{width:100%;background:'+bghead+';height:36px}#sponsorzone_13630_head .sponsorzone_13630_lh{color:#fff;font-size:18px;margin-left:12px;height:36px;line-height:36px;text-align: left!important;}#sponsorzone_13630_line{background:#e4e4e4;height:18px;line-height:18px;padding-left:12px;font-size:11px;color:#a0a1a2;text-align: left!important;}#sponsorzone_13630_line a{height:18px;line-height:18px;font-size:11px;color:#a0a1a2;text-decoration: none;}#sponsorzone_13630_main{background:#fff;border-bottom:#d3d3d3 2px solid;float:left;width:100%}.noborderT{border-top:0!important}.noborderB{border-bottom:0!important}#sponsorzone_13630_ads{padding:12px;width:276px;float:left;border-bottom:1px #e3e3e3 solid;border-top:2px #fff solid;background:#f3f3f3}#sponsorzone_13630_ads .sponsorzone_13630_thumb{width:50px;height:50px;border:0;float:left}#sponsorzone_13630_ads .sponsorzone_13630_cont{width:214px;float:right;text-align: left;}#sponsorzone_13630_ads .sponsorzone_13630_info{margin-bottom:6px;font-family:tahoma;color:#808080;font-weight:700;line-height: 10px;}#sponsorzone_13630_ads .sponsorzone_13630_info:hover{text-decoration: underline;cursor: pointer;}#sponsorzone_13630_ads .sponsorzone_13630_title,#sponsorzone_13630_ads .sponsorzone_13630_title a {color:#454545;font-size:16px;text-decoration: none;line-height:19px}#sponsorzone_13630_ads .sponsorzone_13630_title a:hover {color:#3b5998;}#sponsorzone_13630_ads .sponsorzone_13630_views,#sponsorzone_13630_ads .sponsorzone_13630_views a{font-size:12px;color:#b0b0b0;font-family:tahoma!important;  display: inline-block;}#sponsorzone_13630_ads .sponsorzone_13630_views a:hover{color:#b0b0b0;text-decoration: underline;}#sponsorzone_13630_ads .sponsorzone_13630_dom{font-size:12px;color:#b0b0b0;font-family:tahoma;margin-top:5px;line-height: 10px;}';
		
		var doc = document,
            style = doc.createElement('style');
        style.type = 'text/css';
        var head = doc.getElementsByTagName('head')[0];
        head.appendChild(style);
        if (style.styleSheet) style.styleSheet.cssText = css;
        else style.appendChild(doc.createTextNode(css));
    }
    this.InitScript = function () {
        this.CreateStyleSheet();
    }
    this.escapeHtml = function (str) {
        var stra = str.replace(/<(span|strong|b)[^>]*>(.*?)<\/(span|strong|b)>/g, '$2');
        stra = stra.replace(/\"/g, '"');
        return stra;
    }
    this.PArray = function (a, b, c) {
        var x = -1;
        for (i = 0; i < c; i++) {
            if (b[i]['bid'] == a) {
                x = i;
            }
        }
        return x;
    }
    this.trackBanner = function (i, a, b) {
        var d = a;
        var cAllI = b.length,
            bPost = -1;
        bPost = this.PArray(i, b, cAllI);
        if (bPost < 0) {
            d = a;
        } else {
            var cA = a.length,
                biPos = -1;
            biPos = this.PArray(i, a, cA);
            if (biPos >= 0) {
                d = a;
            } else {
                a[0] = b[bPost];
                d = a;
            }
        }
        return d;
    };
	this.getArticle=function(lk){
		if(lk==null || lk==''){
			return 0;
		}
		try{
			var article=lk;
			article=article.toLowerCase();
			var chkchar=(/\?|\#/).exec(article);
			if(chkchar){
				article=article.substring(0,article.indexOf(chkchar[0]));
			}
		   article=article.substring(0,article.lastIndexOf('.'));	
		   var artDomain=(/([a-z0-9\-\.]+)\//).exec(article)[1];
		   article=(/([a-z0-9]+)$/).exec(article);
			return _admMd5(artDomain+'_'+article[0]);
		}catch(e){
			return 0;
		}
	};
    this.DrawBanner = function () {
        var json = aThis.data,
            output = '',
            allItems = [];
        this.zoneid = json['ZONEID'];
        var docBizone = document.getElementById('sponsorzone_13630_items');
		var dt = aThis.arrBanRun;
		
		var clientLo = this.clLocat('__R'),
            clientLoC = this.clLocat('__RC');
        clientLo = (clientLo == '') ? 0 : clientLo;
        clientLoC = (clientLoC == '') ? 0 : clientLoC;
      
        var campLen = dt.length,
            banLog = [];
        trackI = '';
        if (campLen == 0) {
            var sponsorzone_13630 = document.getElementById('sponsorzone_13630');
            sponsorzone_13630.style.display = 'none';
            return false;
        }
        var ri = this.randNum(),
            rdca = (this.rand * 9),
            curDom = document.domain;
        var Items = dt;
        //Items = this.Shuffle(Items);
		__Admcounter(8);
		var logCid=[],arrCid=[];
		
		var herftadv = 'http://viewplus.vn';
		output = '<div id="sponsorzone_13630_box" class="sponsorzone_13630_clearfix"><div id="sponsorzone_13630_head"><div class="sponsorzone_13630_lh sponsorzone_13630_utm">HỌ NÓI VỀ CHÚNG TÔI </div></div><div id="sponsorzone_13630_line"><a href="'+herftadv+'" title="Powered by View Plus" target="_blank">Powered by <b>View Plus</b></a> </div><div id="sponsorzone_13630_main">';
		
        for (var j = 0; j < this.rand_limit; j++) {
            var admAticle=this.getArticle(Items[j]['link']);
			if (!ADS_CHECKER.in_array(Items[j]['cid'],arrCid)) {
				arrCid.push(Items[j]['cid']);
				this.logCount.push('http://lg.logging.admicro.vn/av?aid='+admAticle+'&cid='+Items[j]['cid']);
			}
			if(Items[j]['tracking_click']!="" && Items[j]['tracking_click'] != undefined){
				Items[j]['link'] = Items[j]['tracking_click'];
			}
			logCid.push(Items[j]['cid']);
            if (!ADS_CHECKER.in_array(Items[j]['bid'],this.bannerRun)) {
                this.bannerRun.push(Items[j]['bid']);
                banLog.push('//lg.logging.admicro.vn/adn?pt=sp&pr='+Items[j]['pr']+'&items='+Items[j]['bid']+'&dmn='+encodeURIComponent(this.channel)+ __AdmsendRandom+'&zid='+ this.zoneid+'&cmpg='+Items[j]['cid']+'&cid=-1&tpn=18&tp='+(Items[j]['is_view']==2?12:11));
				if(Items[j]['tracking_view']!="" && Items[j]['tracking_view'] != undefined){
					banLog.push(Items[j]['tracking_view']);
				}
            }
            var logurl ='//lg.logging.admicro.vn/adn?pt=sp&cov=1&pr='+Items[j]['pr']+'&items='+Items[j]['bid']+'&dmn='+encodeURIComponent(this.channel)+ __AdmsendRandom+'&zid='+ this.zoneid+'&cmpg='+Items[j]['cid']+'&cid=-1&re='+escape(Items[j]['link'])+'&tpn=18&tp='+(Items[j]['is_view']==2?12:11);
            lineBorder = '';
            var anC = '';
            if (Items[j]['bid']) {
                anC = '<div id="' + this.zoneid + '_' + Items[j]['bid'] + '" style="height:0px;width:0px;overflow:hidden;"><span></span></div>';
            }
            
            var title = this.escapeHtml(Items[j]['title']);
            if (window["ADS_CHECKER"] != undefined && window["ADS_CHECKER"] != "undefined") {
                var qr = ADS_CHECKER.getQuery('admdebug');
                if (qr != '') {
                    title = 'B=' + Items[j]['bid'] + ', L=' + Items[j]['l'] + ', LA=' + Items[j]['la'] + ', R=' + ADS_CHECKER.getCookie('__R') + ', RC=' + ADS_CHECKER.getCookie('__RC');
                }
            }
			
			var urllog = logurl;
			var imgadv = Items[j].image;
			var titadv = Items[j].title;
			var titadvc = getSubString(titadv, 82);
			var conadv = Items[j].content;
			var logoadvx = Items[j].blogo;
			var advinfo = Items[j].bname;
			//var advtxt = Items[j].bintro;
			
			var noborderT = (j===0)? ' class="noborderT"':'';
			var noborderB = (j===this.rand_limit-1)? ' class="noborderB"':'';
			//var advviewtxt = 'Đã tăng <span id="viewplusartc_'+this.zid+'"></span> lượt xem';
			var sub_conadv = capitaliseFirstLetter(Items[j].after_title);
			
			output +='<div id="sponsorzone_13630_ads" '+noborderT+' '+noborderB+'><div class="sponsorzone_13630_cont"><p class="sponsorzone_13630_info"> '+advinfo+' </p><p class="sponsorzone_13630_title sponsorzone_13630_utm"> <a href="'+urllog+'" title="'+titadv+'" target="_blank">'+titadvc+'</a> <span class="sponsorzone_13630_views"><a href="javascript:void(0)" target="_blank" id="sponsorzone_13630_txtviewadv_'+j+'"></a></span> </p><p class="sponsorzone_13630_dom">'+sub_conadv+'</p></div><a href="'+urllog+'" title="'+titadv+'" target="_blank"> <img src="'+imgadv+'" class="sponsorzone_13630_thumb" border="0" title="'+titadv+'" alt="'+titadv+'"/> </a></div>';
			
        }
		output+='</div></div>';
		
        if (docBizone) {
            docBizone.innerHTML = output;
        }
		this.banLog=banLog;
        /*if (document.images && banLog != '') {
            var img = new Image();
            img.src = banLog;
        }*/

		var zid=this.zoneid;
		
		for (var j = 0; j < this.rand_limit; j++) {
			(function(t){	
				if(typeof(window['__av'+logCid[t]])=='undefined'){
					_admloadJs('http://lg.logging.admicro.vn/av?cid='+logCid[t],function(){
						if(typeof(window['__av'+logCid[t]])){
							sponsorzone_13630_wirtecountview(parseInt(window['__av'+logCid[t]]), t);
						}
					});
				}else{
					sponsorzone_13630_wirtecountview(parseInt(window['__av'+logCid[t]]), t);
				}
			})(j);
		}
		
    }	
	
    this.OnLoaded = function (data, methodName) {
		this.logCount = [];
		this.banLog=[];
        aThis.data = eval(data);
        this.brun = [];
        this.zoneid = aThis.data['ZONEID'];
        this.init(this.toArray(aThis.data['DATA']));
		
		if(aThis.arrBanRun.length<aThis.min_limit || this.checkBanRunNoDF==1){
			AdmLoadDefault('sponsorzone_13630');
			return false;			
		}
		
        aThis.DrawBanner();
		
		var sponsorzone_13630_codelogcheck = 1;
		var logCount = this.logCount;
		var banLog=this.banLog;
		var sponsorzone_13630_scollcheckadm =  function (event) {		
			if(sponsorzone_13630_codelogcheck==1){
				var sctop=sponsorzone_13630_getScrollTop();
				var sponsorzone_13630_topadm = sponsorzone_13630_getElementTop('sponsorzone_13630');

				if((sctop+ADS_CHECKER.wdHeight())>sponsorzone_13630_topadm){
					for (var j = 0; j < logCount.length; j++) {
						if(logCount[j]!=''){
							var img1 = new Image();
							img1.src =logCount[j];
						}
					}
					//console.log(banLog);
					for (var j = 0; j < banLog.length; j++) {
					   // console.log(banLog[j],j);
						if(banLog[j]!=''){
							var img2 = new Image();
							img2.src =banLog[j];
						}
					}
					sponsorzone_13630_codelogcheck = 0;
				}
			}			
			if(sponsorzone_13630_codelogcheck == 0) admRemoveEventListener(document,'scroll',sponsorzone_13630_scollcheckadm);
		};
		admaddEventListener(document,'scroll',sponsorzone_13630_scollcheckadm);
    }
}
var d = document.domain;
d = d.replace('www.', '');
var url = d.split('.');
output = '<div id="sponsorzone_13630_items"></div>';
try {
    var docZone = document.getElementById('sponsorzone_13630');
    try {
        if (docZone) {
            docZone.innerHTML = output;
        }
    } catch (e) {}
} catch (e) {}
(function() {
var i = ADS_CHECKER.getQuery('i');
var bz = ADS_CHECKER.getQuery('bz');
var z = ADS_CHECKER.getQuery('z');
var zidchk = (document.URL + '').split('#');
var chk = false;
if (i != '' && zidchk.length > 1) {
var zidstr = zidchk[1].replace('_' + i, '');
chk = (zidstr == 13630) ? true : false;
}
window._AdmZones13630=function(){
try {
window.viewplus_300_600 = new AdmZones();
var data1={"ZONEID":13630,"DATA":{"1":{"1":{"image300":"http:\/\/viewplus.vcmedia.vn\/booking\/data\/2016\/06\/crop_270x142_14655329197BYxk_351b54c35d8b9e0acdc2aa1f1c1fd4dd.jpg","bintro":"","is_view":"1","link":"http:\/\/kenh14.vn\/fashion\/ha-anh-va-cam-hung-moi-mang-ten-fearless-style-p5r20160607111319248.chn","title":"H\u00e0 Anh v\u00e0 c\u1ea3m h\u1ee9ng m\u1edbi mang t\u00ean Fearless Style","blogo":"http:\/\/viewplus.vcmedia.vn\/booking\/logo\/2016\/06\/91U_73bf0d8a631a39381c2b22feb2e2bf79.png","df":"0","tracking_view":"","streamline_click":"","image_native":"https:\/\/k14.vcmedia.vn\/thumb_w\/600\/2016\/1465273068115-53-0-366-500-crop-1465273076896.jpg","cpa":0,"image180":"http:\/\/viewplus.vcmedia.vn\/booking\/data\/2016\/06\/crop_180x150_14655329197BYxk_351b54c35d8b9e0acdc2aa1f1c1fd4dd.jpg","bid":"2730","dt_urlimage":"","streamline_view":"","star":0,"image":"http:\/\/viewplus.vcmedia.vn\/booking\/data\/2016\/06\/crop_180x150_14655329197BYxk_351b54c35d8b9e0acdc2aa1f1c1fd4dd.jpg","nav_content":"Kh\u00f4ng h\u1ed5 danh l\u00e0 m\u1ed9t icon th\u1eddi trang cao c\u1ea5p c\u1ee7a showbiz Vi\u1ec7t, si\u00eau m\u1eabu H\u00e0 Anh m\u1ed9t l\u1ea7n n\u1eefa l\u1ea1i d\u1eabn \u0111\u1ea7u xu h\u01b0\u1edbng phong c\u00e1ch m\u1edbi c\u1ef1c l\u00f4i cu\u1ed1n mang t\u00ean Fearless Style.","l":"1,2,3","cid":"1665","after_title":"kenh14.vn","content":"Kh\u00f4ng h\u1ed5 danh l\u00e0 m\u1ed9t icon th\u1eddi trang cao c\u1ea5p c\u1ee7a showbiz Vi\u1ec7t, si\u00eau m\u1eabu H\u00e0 Anh m\u1ed9t l\u1ea7n n\u1eefa l\u1ea1i d\u1eabn \u0111\u1ea7u xu h\u01b0\u1edbng phong c\u00e1ch m\u1edbi c\u1ef1c l\u00f4i cu\u1ed1n mang t\u00ean Fearless Style.","bname":"TRESemm\u00e9","image_stream":"https:\/\/k14.vcmedia.vn\/thumb_w\/600\/2016\/1465273068115-53-0-366-500-crop-1465273076896.jpg","link3rd":"","r":1,"nav_title":"H\u00e0 Anh v\u00e0 c\u1ea3m h\u1ee9ng m\u1edbi mang t\u00ean Fearless Style","la":"","descr":"kenh14.vn","pr":"349741146"},"2":{"image300":"http:\/\/viewplus.vcmedia.vn\/booking\/data\/2015\/04\/crop_500x312_1428401111ILA_1v9zs_1428401092_DdX_655074189f0cb9aea8b86cf70ce952a6_.gif","bintro":"","is_view":"1","link":"http:\/\/dantri.com.vn\/kinh-doanh\/quang-cao-tren-di-dong-tai-viet-nam-len-ngoi-774760.htm","title":"Qu\u1ea3ng c\u00e1o tr\u00ean di \u0111\u1ed9ng t\u1ea1i Vi\u1ec7t Nam l\u00ean ng\u00f4i","blogo":"http:\/\/viewplus.vcmedia.vn\/booking\/logo\/2015\/04\/1428400060_Eoo_^11D8415DA36345F29E7CA1C6D8CE7DCBCB272F46B36C494B93^pimgpsh_fullsize_distr.jpg","df":"1","tracking_view":"","streamline_click":"","image_native":"http:\/\/dantri21.vcmedia.vn\/lsvaPE0d7foDdfJ7sLS\/Image\/2013\/09\/Thumb_nail-a2080.jpg","cpa":0,"image180":"http:\/\/viewplus.vcmedia.vn\/booking\/data\/2015\/04\/crop_500x312_1428401121XKv_HavqM_1428401092_DdX_655074189f0cb9aea8b86cf70ce952a6_.gif","bid":"1612","dt_urlimage":"","streamline_view":"","star":0,"image":"http:\/\/viewplus.vcmedia.vn\/booking\/data\/2015\/04\/crop_500x312_1428401121XKv_HavqM_1428401092_DdX_655074189f0cb9aea8b86cf70ce952a6_.gif","nav_content":"T\u1ea1i l\u1ec5 c\u00f4ng b\u1ed1 m\u1ea1ng qu\u1ea3ng c\u00e1o tr\u00ean di \u0111\u1ed9ng ph\u1ee7 r\u1ed9ng nh\u1ea5t Vi\u1ec7t Nam ng\u00e0y 29\/08\/2013 v\u1eeba qua, s\u1ed1 li\u1ec7u th\u1ed1ng k\u00ea c\u1ee7a Admicro ch\u1ec9 ra r\u1eb1ng c\u00e1c website l\u1edbn m\u00e0 \u0111\u01a1n v\u1ecb \u0111ang kinh doanh c\u00f3 s\u1ed1 l\u01b0\u1ee3t truy c\u1eadp tr\u00ean mobile \u0111\u1ea1t 30-35% so v\u1edbi web, pageview \u0111\u1ea1t g\u1ea7n 50%.","l":"1,2,3","cid":"545","after_title":"dantri.com.vn","content":"T\u1ea1i l\u1ec5 c\u00f4ng b\u1ed1 m\u1ea1ng qu\u1ea3ng c\u00e1o tr\u00ean di \u0111\u1ed9ng ph\u1ee7 r\u1ed9ng nh\u1ea5t Vi\u1ec7t Nam ng\u00e0y 29\/08\/2013 v\u1eeba qua, s\u1ed1 li\u1ec7u th\u1ed1ng k\u00ea c\u1ee7a Admicro ch\u1ec9 ra r\u1eb1ng c\u00e1c...","bname":"Admicro","image_stream":"http:\/\/dantri21.vcmedia.vn\/lsvaPE0d7foDdfJ7sLS\/Image\/2013\/09\/Thumb_nail-a2080.jpg","link3rd":"","r":1,"nav_title":"Qu\u1ea3ng c\u00e1o tr\u00ean di \u0111\u1ed9ng t\u1ea1i Vi\u1ec7t Nam l\u00ean ng\u00f4i","la":"","descr":"dantri.com.vn","pr":"237921606"},"3":{"image300":"http:\/\/viewplus.vcmedia.vn\/booking\/data\/2015\/04\/crop_280x130_14284005356kz_UZtFm_1428400519_HP3_box-q-11393929900.jpg","bintro":"","is_view":"1","link":"http:\/\/dantri.com.vn\/thi-truong\/de-nhu-mua-quang-cao-truc-tuyen-thoi-cong-nghe-739714.htm","title":"D\u1ec5 nh\u01b0 mua qu\u1ea3ng c\u00e1o tr\u1ef1c tuy\u1ebfn th\u1eddi c\u00f4ng ngh\u1ec7","blogo":"http:\/\/viewplus.vcmedia.vn\/booking\/logo\/2015\/04\/1428400553_jlW_^11D8415DA36345F29E7CA1C6D8CE7DCBCB272F46B36C494B93^pimgpsh_fullsize_distr.jpg","df":"1","tracking_view":"","streamline_click":"","image_native":"http:\/\/dantri21.vcmedia.vn\/ZnmrEyihQodbfhR9C8h5\/Image\/2013\/06\/av-bf9a6.jpg","cpa":0,"image180":"http:\/\/viewplus.vcmedia.vn\/booking\/data\/2015\/04\/crop_280x130_1428400547log_XKyPz_1428400519_HP3_box-q-11393929900.jpg","bid":"1613","dt_urlimage":"","streamline_view":"","star":0,"image":"http:\/\/viewplus.vcmedia.vn\/booking\/data\/2015\/04\/crop_280x130_1428400547log_XKyPz_1428400519_HP3_box-q-11393929900.jpg","nav_content":"M\u1ed9t chi\u1ebfn d\u1ecbch Marketing chi ph\u00ed th\u1ea5p nh\u01b0ng l\u1ea1i \u0111\u1ea1t hi\u1ec7u qu\u1ea3 cao lu\u00f4n l\u00e0 ti\u00eau ch\u00ed h\u00e0ng \u0111\u1ea7u cho b\u1ea5t k\u1ef3 doanh nghi\u1ec7p n\u00e0o. Nh\u01b0ng t\u1ef1 thi\u1ebft k\u1ebf qu\u1ea3ng c\u00e1o, ch\u1ee7 \u0111\u1ed9ng qu\u1ea3n l\u00fd \u0111\u01b0\u1ee3c chi\u1ebfn d\u1ecbch c\u1ea3 v\u1ec1 th\u1eddi gian, gi\u00e1 c\u1ea3 l\u1eabn s\u1ef1 ti\u1ec7n l\u1ee3i th\u00ec kh\u00f4ng ph\u1ea3i doanh nghi\u1ec7p n\u00e0o c\u0169ng c\u00f3 gi\u1ea3i ph\u00e1p.","l":"1,2,3","cid":"546","after_title":"dantri.com.vn","content":"M\u1ed9t chi\u1ebfn d\u1ecbch Marketing chi ph\u00ed th\u1ea5p nh\u01b0ng l\u1ea1i \u0111\u1ea1t hi\u1ec7u qu\u1ea3 cao lu\u00f4n l\u00e0 ti\u00eau ch\u00ed h\u00e0ng \u0111\u1ea7u cho b\u1ea5t k\u1ef3 doanh nghi\u1ec7p n\u00e0o. Nh\u01b0ng t\u1ef1 thi\u1ebft...","bname":"Admicro","image_stream":"http:\/\/dantri21.vcmedia.vn\/ZnmrEyihQodbfhR9C8h5\/Image\/2013\/06\/av-bf9a6.jpg","link3rd":"","r":1,"nav_title":"D\u1ec5 nh\u01b0 mua qu\u1ea3ng c\u00e1o tr\u1ef1c tuy\u1ebfn th\u1eddi c\u00f4ng ngh\u1ec7","la":"","descr":"dantri.com.vn","pr":"238031616"}}}};
viewplus_300_600.InitScript();
if(typeof(__dmtb13630)!='undefined' && __dmtb13630!=null && typeof(__dmtb13630)=='object' && typeof(__dmtb13630[0])=='object'){
var data={}; for(var i=1;i<=__dmtb13630.length;i++){data[i]=__dmtb13630[i-1]}
if(chk){
for(var j in data1['DATA']['1']){
if(data['1']['bid']!=data1['DATA']['1'][j]['bid']){
data[i]= data1['DATA']['1'][j];
i++;
}
}
}
viewplus_300_600.OnLoaded({"ZONEID":13630,"DATA":{1:data}});
return false;
}
viewplus_300_600.OnLoaded(data1);
} catch (e) {
if (viewplus_300_600.campaignAvaiLen == 0) document.getElementById('sponsorzone_13630').style.display = 'none';
}
};
if(typeof(ADM_AdsTracking)!="undefined"&&typeof(_admloadJs)!="undefined"){
if (i != '' && bz != '' && chk) {
_admloadJs("//pson.logging.admicro.vn/dmtb?h="+ADM_AdsTracking.get("__uid")+"&zid=13630&p=vplustracking&loc="+ADS_Location+"&bs="+i,_AdmZones13630);
}else{
_admloadJs("//pson.logging.admicro.vn/dmtb?h="+ADM_AdsTracking.get("__uid")+"&zid=13630&p=vplus&loc="+ADS_Location,_AdmZones13630);
}
}
})();
