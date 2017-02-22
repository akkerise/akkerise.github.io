parent._admloadJs('//admicro1.vcmedia.vn/core/rickmedia-core.js');
	var idm=admid.replace('cpmzone_','');
	idm=idm.replace('_0_','_');
	var srcimg=admGetUrlCk();
	srcimg=srcimg.replace('cid=-1','cid=1');
	srcimg=srcimg.replace('cov=1','cov=0');
	var bid=idm.split('_');
	
	parent._arAdmExpand[idm]={
								"bannertype": 24,
								"src": "//adi.vcmedia.vn/adt/cpc/cpm7k/2016/04/160x1-11461229792.swf",
								"width": scMedium.h,
								"height": scMedium.w,
								"expsrc": scExpand.src+'?url='+encodeURIComponent(admGetUrlCk()+encodeURIComponent(__admLink)),
								"expopt": {
									"width": 980,
									"height": 600
								},
								"logexpand": srcimg,
								"draw": "iframe",
								"type": "swf",
								"btn": "000000",
								"logclick": admGetUrlCk()+encodeURIComponent(__admLink),
								"admconfig": {
									"full": true,
									"w": 1600,
									"h": 1200
								}
							};
	
	
function Expand(){	
	var srcimg=admGetUrlCk();
	srcimg=srcimg.replace('cid=-1','cid=1');
	srcimg=srcimg.replace('cov=1','cov=0');
	var img=(new Image());
	img.src=srcimg;
	parent.__ADMExpand.adm_Expand_Sidekick (idm);
	
}