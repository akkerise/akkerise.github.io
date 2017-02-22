

var jsTimeout = new Number();
var jsTimeDelay = 60;
var jsAcceleration = 0.2;
var jsVelocity = 3;


function jsAnimate(div_id, attr, value)
{
	
	var _originValue = new Number();
	var _splitArr = new Array();
	
	_splitArr = String(document.getElementById(div_id).style[attr]).split("px");	
	_originValue = parseInt(_splitArr[0]);
	clearTimeout(jsTimeout);
	if (parseInt(value) > _originValue)
	{
		jsTimeout = setTimeout('animateProcess("'+div_id+'", "'+attr+'", "increase", "'+_originValue+'", "'+value+'", 1)', jsTimeDelay);
	} else if (parseInt(value) < _originValue)
	{
		jsTimeout = setTimeout('animateProcess("'+div_id+'", "'+attr+'", "increase", "'+_originValue+'", "'+value+'", 1)', jsTimeDelay);
	}
}

function animateProcess(div_id, attr, type, begin, end, timing)
{
	clearTimeout(jsTimeout);
	var _distance = (jsAcceleration * Math.pow(parseInt(timing),2)) / 2 + jsVelocity * parseInt(timing);
	var _s = new Number();
	switch (type)
	{
		case "increase":
			_s = parseInt(begin) + parseInt(_distance);
			if (_s >= parseInt(end))
			{
				document.getElementById(div_id).style[attr]	= end + "px";
			} else {
				document.getElementById(div_id).style[attr]	= _s + "px";
				timing++;
				jsTimeout = setTimeout('animateProcess("'+div_id+'", "'+attr+'", "'+type+'", "'+_s+'", "'+end+'", '+timing+')', jsTimeDelay);
			}
			break;
		case "decrease":
			_s = parseInt(begin) - parseInt(_distance);
			if (_s <= parseInt(end))
			{
				document.getElementById(div_id).style[attr]	= end + "px";
			} else {
				document.getElementById(div_id).style[attr]	= _s + "px";
				timing++;
				jsTimeout = setTimeout('animateProcess("'+div_id+'", "'+attr+'", "'+type+'", "'+_s+'", "'+end+'", '+timing+')', jsTimeDelay);
			}
			break;
	}
}

function hookExpand(objID, val, isExpand){
	var obj = document.getElementById(objID);
	if (obj==null) return;

	if (isExpand){
		// Scroll to this Obj
		var desty = obj.offsetTop;
		var thisNode = obj;
		while (thisNode.offsetParent && 
			  (thisNode.offsetParent != document.body)) {
		  thisNode = thisNode.offsetParent;
		  desty += thisNode.offsetTop;
		}
		window.scrollTo(0, desty);
	}
	
	obj.style.clip = val;
}


function hookExpandOverflow(objID, val, isExpand){
	var obj = document.getElementById(objID);
	if (obj==null) return;
	obj.style.clip = val;
	if (isExpand){
		// Scroll to this Obj
		var desty = obj.offsetTop;
		var thisNode = obj;
		while (thisNode.offsetParent && 
			  (thisNode.offsetParent != document.body)) {
		  thisNode = thisNode.offsetParent;
		  desty += thisNode.offsetTop;
		}
		window.scrollTo(0, desty);
		
		// Remove parent overflow: hidden
		var pNode = obj.parentNode;
		while (pNode.parentNode&& 
			  (pNode.parentNode!= document.body)) {
			if (pNode.style.overflow != 'visible') pNode.style.overflow = 'visible';
			if (parseInt(pNode.offsetHeight)>=500) break;
			pNode = pNode.parentNode; 
		}
	}
}
var __ADMExpand= new function(){
	var flag;
	this.getScrollTop=function() {
		var ScrollTop = document.body.scrollTop;
		if (ScrollTop == 0)
		{
			if (window.pageYOffset)
				ScrollTop = window.pageYOffset;
			else
				ScrollTop = (document.body.parentElement) ? document.body.parentElement.scrollTop : 0;
		}
		return ScrollTop;
	};
	this.create=function (htmlStr) {
		var frag = document.createDocumentFragment(), temp = document.createElement('div');
		temp.innerHTML = htmlStr;
	
		while (temp.firstChild) {
			frag.appendChild(temp.firstChild);
		}
	
		return frag;
	};
	this.getScrollBarWidth=function() {
		var inner = document.createElement('p');
		inner.style.width = "100%";
		inner.style.height = "200px";
		var outer = document.createElement('div');
		outer.style.position = "absolute";
		outer.style.top = "0px";
		outer.style.left = "0px";
		outer.style.visibility = "hidden";
		outer.style.width = "200px";
		outer.style.height = "150px";
		outer.style.overflow = "hidden";
		outer.appendChild(inner);
	
		document.body.appendChild(outer);
		var w1 = inner.offsetWidth;
		outer.style.overflow = 'scroll';
		var w2 = inner.offsetWidth;
		if (w1 == w2)
			w2 = outer.clientWidth;
	
		document.body.removeChild(outer);
	
		return (w1 - w2);
	};
	this.getScrollLeft=function() {
		var ScrollLeft = document.body.scrollLeft;
		if (ScrollLeft == 0)
		{
			if (window.pageXOffset)
				ScrollLeft = window.pageXOffset;
			else
				ScrollLeft = (document.body.parentElement) ? document.body.parentElement.scrollLeft : 0;
		}
		return ScrollLeft;
	};
	this.adm_Expand_Sidekick_timeout=function(id){
		if(typeof(_arAdmExpand[id].btn)!='undefined' && _arAdmExpand[id].btn!=''){
			var time=(new Date()).getTime();
			var chk=ADS_CHECKER.getQuery('chktest');
			if(chk=='test'){
				var time1=((time-__ADMExpand.timeStartExp)/100);
			}else{
				var time1=((time-__ADMExpand.timeStartExp)/1500);
			}
			
			if(time1>1){
				time1=1;
			}
			var postLeft=ADS_CHECKER.wdWidth()-(time1*ADS_CHECKER.wdWidth());
			var id1=document.getElementById('_AdmFrameExpand');
			id1.style.left=postLeft+'px';
			if(time1==1){
				__ADMExpand.timeStartExp=0;
				var idClose=document.getElementById('btnCloseStick');
				if(idClose){
					idClose.style.visibility='visible';
				}
				return false;
			}
			setTimeout(function(){
				__ADMExpand.adm_Expand_Sidekick_timeout(id);
			}, 50);
			return false;
		}
		
		if (flag != 'undefined') {
			if (flag == this.getScrollLeft()) {
				var idClose=document.getElementById('btnCloseStick');
				if(idClose){
					idClose.style.visibility='visible';
				}
				return;
			}
		}
		flag = this.getScrollLeft();
		window.scrollBy(50, 0);
		//document.getElementById('_AdmFrameExpand').style.top =  this.getScrollTop() + 'px';
		//document.getElementById('file1').style.marginRight = parseInt((ADS_CHECKER.wdWidth()-980)/2) +'px';
		//document.getElementById('_AdmFrameExpand').style.bottom = '0px';
		setTimeout(function(){
			__ADMExpand.adm_Expand_Sidekick_timeout(id);
		}, 50);
		
		
	
	};
	this.adm_Expand_Sidekick=function(id) {
		__ADMExpand.timeStartExp=(new Date()).getTime();
		if(typeof advScroll !='undefined'){
			window['adm_expandScroll'] = advScroll;
			advScroll = function(id,height,footer){var id1=document.getElementById('advZone'+id);id1.style.position='';return false};
         }

		
		var idMenu=document.getElementById('admMenuStick');
		if(idMenu){
			idMenu.style.display='none';
		}
		var a = document.getElementById('_AdmExpand');
	
		
		if (a == undefined) {
			var fragment = this.create('<div style="border: 0px none; margin: 0px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 1000001; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>');
			document.body.insertBefore(fragment, document.body.childNodes[0]);
	
		}
	
		var b = document.getElementById('_AdmExpand');
		if (b != undefined) {
			if(typeof(_AdmAPIExpand)!='undefined'){
				_AdmAPIExpand(0);
			}
			if(typeof(_arAdmExpand[id].draw)!='undefined' && _arAdmExpand[id].draw=='iframe'){
				var tmp='<if'+'rame style="width:'+ADS_CHECKER.wdWidth()+'px; height:'+ADS_CHECKER.wdHeight()+'px;" frameborder="no" src="'+_arAdmExpand[id].expsrc+'" id="expIframe" style="border:none; overflow: hidden;" scrolling="no" name="ariel"></if'+'rame>';
				
			}
			else{
				if(typeof(_arAdmExpand[id].admconfig)!='undefined' && _arAdmExpand[id].admconfig!='' && typeof(_arAdmExpand[id].admconfig.full)!='undefined' && _arAdmExpand[id].admconfig.full==true){
					var wd1=(_arAdmExpand[id].admconfig.w-ADS_CHECKER.wdWidth())>0?_arAdmExpand[id].admconfig.w:ADS_CHECKER.wdWidth();
					var wh1=(wd1*3/4);
					var wd=-1*Math.floor((_arAdmExpand[id].admconfig.w-ADS_CHECKER.wdWidth())/2);
					var wh=-1*Math.floor((wh1-ADS_CHECKER.wdHeight())/2);
					if(wd>0){
						wd=0;
					}
					if(wh>0){
						wh=0
					}
					window.setTimeout(function(){
						var id1=ADS_CHECKER.getFlashMovie('large_'+id);
						if(id1){
							if(typeof(id1.length)=='undefined'){
								id1.style.width=wd1+'px';
								id1.style.height=wh1+'px';
							}else{
								for(var t=0,lent=id1.length; t<lent;t++){
									id1[t].style.width=wd1+'px';
									id1[t].style.height=wh1+'px';
								}
							}
						}
					},1000);
					var tmp = '<div style="margin-top:'+wh+'px;margin-left:'+wd+'px;width:100%; height:100%;"><object  type="application/x-shockwave-flash"   width="1" height="1" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="large_'+id+'" id="large_'+id+'"><param name="scale" value="exactFit" /><param value="alink1='+encodeURIComponent(_arAdmExpand[id].logclick)+'&id='+id+'" name="flashvars"><param value="'+_arAdmExpand[id].expsrc+'" name="movie"><PARAM NAME="SCALE" VALUE="exactfit"><param value="high" name="quality"><param value="transparent" name="wmode"><param value="11.0.0.0" name="swfversion"><param value="false" name="allowFullScreen"><param value="always" name="allowScriptAccess"><embed   name="large_'+id+'" id="large_'+id+'" width="1" height="1"  align="middle" src="'+_arAdmExpand[id].expsrc+'"  flashvars="alink1='+encodeURIComponent(_arAdmExpand[id].logclick)+'&id='+id+'" SCALE="exactfit" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowscriptaccess="always" wmode="transparent" quality="high"></embed></object></div>';
				}
				else{
					window.setTimeout(function(){
						var id1=ADS_CHECKER.getFlashMovie('large_'+id);
						if(id1){
							if(typeof(id1.length)=='undefined'){
								id1.style.width=ADS_CHECKER.wdWidth()+'px';
								id1.style.height=ADS_CHECKER.wdHeight()+'px';
							}else{
								for(var t=0,lent=id1.length; t<lent;t++){
									id1[t].style.width=ADS_CHECKER.wdWidth()+'px';
									id1[t].style.height=ADS_CHECKER.wdHeight()+'px';
								}
							}
								
								
							}
					},1000);
					var tmp = '<object type="application/x-shockwave-flash"   width="1" height="1" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="large_'+id+'" id="large_'+id+'"><param value="alink1='+encodeURIComponent(_arAdmExpand[id].logclick)+'&id='+id+'" name="flashvars"><param value="'+_arAdmExpand[id].expsrc+'" name="movie"><param value="high" name="quality"><param value="transparent" name="wmode"><param value="11.0.0.0" name="swfversion"><param value="false" name="allowFullScreen"><param value="always" name="allowScriptAccess"><embed name="large_'+id+'" id="large_'+id+'" width="1" height="1" align="middle" src="'+_arAdmExpand[id].expsrc+'"  flashvars="alink1='+encodeURIComponent(_arAdmExpand[id].logclick)+'&id='+id+'" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowscriptaccess="always" wmode="transparent" quality="high"></embed></object>';
				}
				
			}
			var btnClose='//adi.vcmedia.vn/cpmstick/000000.png';
			if(typeof(_arAdmExpand[id].btn)!='undefined' && _arAdmExpand[id].btn!=''){
				btnClose='http://adi.vcmedia.vn/cpmstick/'+_arAdmExpand[id].btn+'.png';
			}
			tmp+='<div style="height: 69px; position: fixed; top: 10px; right: 15px; z-index: 1000001; visibility: visible;" id="advStickyClose"><a style="clear:both; height:69px;text-align:right; padding-right:10px;" href="javascript:void(0);__ADMExpand.closeExpand(\''+id+'\');"><img id="btnCloseStick" style="visibility:hidden;" border="0" src="'+btnClose+'"></a></div>';
			document.getElementById('_AdmExpand').innerHTML = '<div id="_AdmFrameExpand" style="border: 0 none;clip:rect(0px, '+ADS_CHECKER.wdWidth()+'px, '+ADS_CHECKER.wdHeight()+'px, 0px);position: fixed;background:#fff;width:'+ADS_CHECKER.wdWidth()+'px;height:'+ADS_CHECKER.wdHeight()+'px;">'+tmp+'</div>';
			document.body.style.overflow = 'hidden';
			document.getElementById('_AdmFrameExpand').style.left = ADS_CHECKER.wdWidth() + 'px';
			//document.getElementById('_AdmFrameExpand').style.top =  this.getScrollTop() + 'px';
			
	
			
	//            if (typeof advScroll != 'undefined') {
	//                tvcpzone.expandScroll = advScroll;
	//                advScroll = function(id, height, footer) {
	//                    var id1 = document.getElementById('advZone' + id);
	//                    id1.style.position = '';
	//                    return false
	//                };
	//            }
			//document.getElementById('_AdmFrameExpand').innerHTML = tmp;
		}
		
		//document.getElementById('_AdmFrameExpand').style.top =  this.getScrollTop() + 'px';
	//            document.getElementById('file1').style.marginRight = parseInt((ADS_CHECKER.wdWidth()-980)/2) +'px';
		document.getElementById('_AdmFrameExpand').style.bottom =  'auto';
		document.getElementById('_AdmFrameExpand').style.top =  '0px';
		__ADMExpand.adm_Expand_Sidekick_timeout(id);
	};
	this.adm_Close_Sidekick=function(o) {
		if(typeof(_arAdmExpand[o].btn)!='undefined' && _arAdmExpand[o].btn!=''){
			if(__ADMExpand.timeStartExp==0){
				__ADMExpand.timeStartExp=(new Date()).getTime();
			}
			var time=(new Date()).getTime();
			var time1=((time-__ADMExpand.timeStartExp)/1500);
			if(time1>1){
				time1=1;
			}
			var postLeft=(time1*ADS_CHECKER.wdWidth());
			var id1=document.getElementById('_AdmFrameExpand');
			id1.style.left=postLeft+'px';
			if(time1==1){
				if(typeof advScroll !='undefined'){
					advScroll= window['adm_expandScroll'];
				}
				var id=document.getElementById(o);
				
				if(id){
					id.style.visibility='visible';
				}
				document.getElementById('_AdmExpand').innerHTML = '';
				document.body.style.overflow = 'auto';
				return false;
			}
			setTimeout(function(){
				__ADMExpand.adm_Close_Sidekick(o);
			}, 50);
			return false;
		}
		
		var left = this.getScrollLeft();
		if (left == 0) {
			if(typeof advScroll !='undefined'){
            	advScroll= window['adm_expandScroll'];
			}
			if(typeof(_AdmAPIExpand)!='undefined'){
				_AdmAPIExpand(1);
			}
			var id=document.getElementById(o);
			if(id){
				id.style.visibility='visible';
			}
			document.getElementById('_AdmExpand').innerHTML = '';
			document.body.style.overflow = 'auto';
			return false;
		} else {
			window.scrollBy(-150, 0);
		}
	
		setTimeout(function(){
			__ADMExpand.adm_Close_Sidekick(o);
		}, 50);
	};
	this.adm_Expand_Iplay=function(id) {
		var a = document.getElementById('_AdmExpand');
		if (a == undefined) {
			var fragment = this.create('<div style="border: 0px none; margin: 0px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 1000001; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>');
			document.body.insertBefore(fragment, document.body.childNodes[0]);
	
		}
	
		var b = document.getElementById('_AdmExpand');
		if (b != undefined) {
			//'+_arAdmExpand[id].expopt.width+'
			window.setTimeout(function(){
				var id1=ADS_CHECKER.getFlashMovie('large_'+id);
				if(typeof(id1.length)=='undefined'){
					id1.style.width=_arAdmExpand[id].expopt.width+'px';
					id1.style.height=_arAdmExpand[id].expopt.height+'px';
				}else{
					for(var t=0,lent=id1.length; t<lent;t++){
						id1[t].style.width=_arAdmExpand[id].expopt.width+'px';
						id1[t].style.height=_arAdmExpand[id].expopt.height+'px';
					}
				}
			},1000);
			var tmp = '<object name="large_'+id+'"  id="large_'+id+'"  type="application/x-shockwave-flash"   width="1" height="1" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ><param value="alink1='+encodeURIComponent(_arAdmExpand[id].logclick)+'&id='+id+'" name="flashvars"><param value="'+_arAdmExpand[id].expsrc+'" name="movie"><param value="high" name="quality"><param value="transparent" name="wmode"><param value="11.0.0.0" name="swfversion"><param value="false" name="allowFullScreen"><param value="always" name="allowScriptAccess"><embed name="large_'+id+'" id="large_'+id+'"  flashvars="alink1='+encodeURIComponent(_arAdmExpand[id].logclick)+'&id='+id+'"  width="" height="" align="middle" src="'+_arAdmExpand[id].expsrc+'"  pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowscriptaccess="always" wmode="transparent" quality="high"></embed></object>';
			document.getElementById('_AdmExpand').innerHTML = '<div id="_AdmFrameExpand" style="border: 0 none;clip:rect(0px, '+_arAdmExpand[id].expopt.width+'px, '+_arAdmExpand[id].expopt.height+'px, 0px);position: absolute;">'+tmp+'</div>';
			document.body.style.overflow = 'hidden';
			var leftW=(ADS_CHECKER.wdWidth() - _arAdmExpand[id].expopt.width) / 2;	
			if(leftW<0){
				leftW=0;
			}
			document.getElementById('_AdmFrameExpand').style.left = leftW + 'px';
			
			//document.getElementById('_AdmFrameExpand').innerHTML = tmp;
			document.getElementById('_AdmExpand').style.width='100%';
			document.getElementById('_AdmExpand').style.height=wPrototype.bdHeight()+'px';
			document.getElementById('_AdmExpand').style.backgroundImage = 'url("http://adi.vcmedia.vn/adt/tvc/box300x250Expand/overlay.png")';
		}
		var topH=(ADS_CHECKER.wdHeight() - _arAdmExpand[id].expopt.height) / 2;
		if(topH<0){
			topH=0;
		}
		document.getElementById('_AdmFrameExpand').style.top = (this.getScrollTop() + topH) + 'px';
		
	//        setTimeout('adm_Expand_Sidekick()', 50);
	};
	this.adm_Close_Iplay=function() {
		document.getElementById('_AdmExpand').innerHTML = '';
		document.getElementById('_AdmExpand').style.width='1px';
		document.getElementById('_AdmExpand').style.height='1px';
		document.getElementById('_AdmExpand').style.backgroundImage = '';
		document.body.style.overflow = 'auto';
	}
	this.Expand=function(o){
		if(typeof(_arAdmExpand[o])!='undefined'){
			var img =new Image();
			img.src=_arAdmExpand[o].logexpand;
		}
		var type=parseInt(_arAdmExpand[o].bannertype);
		var idexp=_arAdmExpand[o].bid;
		switch(type){
			case 21: 
				var id=document.getElementById('admBanLarge_'+_arAdmExpand[o].bid);
				
				if(id){
					window.setTimeout(function(){
						id.style.width=_arAdmExpand[idexp].expopt.width+'px';
						id.style.height=_arAdmExpand[idexp].expopt.height+'px';
					},300);
					id.style.display='block';
				}
				var id1=document.getElementById('admBanSmall_'+_arAdmExpand[o].bid);
				if(id1){
					id1.style.width='1px';
					id1.style.height='1px';
					id1.style.display='none';
				}
				jsAnimate('admBanExpand_'+_arAdmExpand[o].bid,'height',_arAdmExpand[o].expopt.height);
				break;
			case 22: 
				var id=document.getElementById('admBanLarge_'+_arAdmExpand[o].bid);
				if(id){
					window.setTimeout(function(){
						id.style.width=_arAdmExpand[idexp].expopt.width+'px';
						id.style.height=_arAdmExpand[idexp].expopt.height+'px';
					},300);
					id.style.display='block';
				}
				var id1=document.getElementById('admBanSmall_'+_arAdmExpand[o].bid);
				if(id1){
					
					id1.style.display='none';
				}
				hookExpand('admBanExpand_'+_arAdmExpand[o].bid,'rect(0px,'+_arAdmExpand[o].expopt.width+'px,'+_arAdmExpand[o].expopt.height+'px,0px)');
				break;
			case 23: 
				this.adm_Expand_Iplay(o);
				break;
			case 24: 
				var id=document.getElementById(o);
				if(id){
					id.style.visibility='hidden';
				}
				this.adm_Expand_Sidekick(o);
				break;
			
		}
		
	};
	
	this.closeExpand=function(o){
		var idexp=_arAdmExpand[o].bid;
		setTimeout(function(){	
			var type=parseInt(_arAdmExpand[o].bannertype);
			switch(type){
				case 21:
					var id=document.getElementById('admBanLarge_'+_arAdmExpand[o].bid);
					if(id){
						id.style.width='1px';
						id.style.height='1px';
						id.style.display='none';
					} 
					var id1=document.getElementById('admBanSmall_'+_arAdmExpand[o].bid);
					if(id1){
						window.setTimeout(function(){
							id1.style.width=_arAdmExpand[idexp].width+'px';
							id1.style.height=_arAdmExpand[idexp].height+'px';
						},300);
						id1.style.display='block';
					}
					jsAnimate('admBanExpand_'+_arAdmExpand[o].bid,'height',_arAdmExpand[o].height);
					break;
				case 22:
					var id=document.getElementById('admBanLarge_'+_arAdmExpand[o].bid);
					if(id){
						id.style.width='1px';
						id.style.height='1px';
						id.style.display='none';
					}
					var id1=document.getElementById('admBanSmall_'+_arAdmExpand[o].bid);
					if(id1){
						window.setTimeout(function(){
							id1.style.width=_arAdmExpand[idexp].width+'px';
							id1.style.height=_arAdmExpand[idexp].height+'px';
						},300);
						id1.style.display='block';
					}
					hookExpand('admBanExpand_'+_arAdmExpand[o].bid,'rect(0px,'+_arAdmExpand[o].width+'px,'+_arAdmExpand[o].height+'px,0px)');
					break;
				case 23: 
					__ADMExpand.adm_Close_Iplay(o);
					break;
				case 24: 
					var idMenu=document.getElementById('admMenuStick');
					if(idMenu){
						idMenu.style.display='';
					}
					__ADMExpand.adm_Close_Sidekick(o);
					break;
				
			}
		},200);
	};
	this.adm_Expand_SidekickMM_timeout=function(){
		var time=(new Date()).getTime();
			var time1=((time-__ADMExpand.timeStartExp)/1500);
			
			if(time1>1){
				time1=1;
				
			}
			var postLeft=ADS_CHECKER.wdWidth()-(time1*ADS_CHECKER.wdWidth());
			var id1=document.getElementById('_AdmExpandMMStick');
			id1.style.left=postLeft+'px';
			if(time1==1){
				__ADMExpand.timeStartExp=0;
				return false;
			}
			
			setTimeout(function(){
				__ADMExpand.adm_Expand_SidekickMM_timeout();
			}, 50);
			return false;
		
		if (flag != 'undefined') {
			if (flag == this.getScrollLeft()) {
				return;
			}
		}
		document.body.style.overflow='auto';
		flag = this.getScrollLeft();
		window.scrollBy(50, 0);
		document.getElementById('_AdmExpandMMStick').style.top =  this.getScrollTop()+'px';	
		setTimeout(function(){
			__ADMExpand.adm_Expand_SidekickMM_timeout();
		}, 50);
		
		
	
	};
	this.adm_Expand_SidekickMM=function() {
		if(typeof advScroll !='undefined'){
			window['adm_expandScroll'] = advScroll;
			advScroll = function(id,height,footer){var id1=document.getElementById('advZone'+id);id1.style.position='';return false};
         }
		if(typeof(_AdmAPIExpand)!='undefined'){
				_AdmAPIExpand(0);
		}
		var idMenu=document.getElementById('admMenuStick');
		if(idMenu){
			idMenu.style.display='none';
		}
		document.body.style.overflow = 'hidden';
		document.getElementById('_AdmExpandMMStick').style.left = ADS_CHECKER.wdWidth()+'px';
		document.getElementById('_AdmExpandMMStick').style.position='fixed';
		document.getElementById('_AdmExpandMMStick').style.right = 'auto';
		document.getElementById('_AdmExpandMMStick').style.top =  '0px';
		document.getElementById('_AdmExpandMMStick').style.bottom =  'auto';
		__ADMExpand.timeStartExp=(new Date()).getTime();
		__ADMExpand.adm_Expand_SidekickMM_timeout();
	};
	this.adm_Close_SidekickMM=function() {
		/*
		if(__ADMExpand.timeStartExp==0){
			__ADMExpand.timeStartExp=(new Date()).getTime();
		}
		var time=(new Date()).getTime();
		var time1=((time-__ADMExpand.timeStartExp)/1500);
		if(time1>1){
			time1=1;
		}
		var postLeft=(time1*(ADS_CHECKER.wdWidth()-160));
		var id1=document.getElementById('_AdmExpandMMStick');
		id1.style.left=postLeft+'px';
		if(time1==1){
			if(typeof advScroll !='undefined'){
				advScroll= window['adm_expandScroll'];
			}
			document.body.style.overflow = 'auto';
			id1.style.position='fixed';
			id1.style.top='auto';
			id1.style.right='0';
			id1.style.left='auto';
			id1.style.bottom='0';
			return false;
		}
		setTimeout(function(){
			__ADMExpand.adm_Close_SidekickMM();
		}, 50);
		*/
		
		var left = this.getScrollLeft();
		if (left == 0) {
			document.getElementById('_AdmExpandMMStick').style.position='fixed';
			document.getElementById('_AdmExpandMMStick').style.bottom='0px';
			document.getElementById('_AdmExpandMMStick').style.right='0px';
			document.getElementById('_AdmExpandMMStick').style.left='auto';
			document.getElementById('_AdmExpandMMStick').style.top='auto';
			if(typeof advScroll !='undefined'){
            	advScroll= window['adm_expandScroll'];
			}
			if(typeof(_AdmAPIExpand)!='undefined'){
				_AdmAPIExpand(1);
			}
			document.body.style.overflow = 'auto';
			return;
		} 
	
			window.scrollBy(-150, 0);
		
		setTimeout(function(){
			__ADMExpand.adm_Close_SidekickMM();
		}, 50);
		
	};
};
//id cua banner nho dat nhu dau id='admBanSmall_'+id id='admBanLarge_'+id;
//object duoc ghi nhan theo id= {bannertype:'',id:'',click:'truyen vao dang alink1',width:'',height:'',widtex:'',heightex:'',file:'',fileEx:''}

//var __ADMExpand=new __ADMExpand1();
//__ADMExpand.adm_Expand_Iplay();
//__ADMExpand.adm_Close_Sidekick