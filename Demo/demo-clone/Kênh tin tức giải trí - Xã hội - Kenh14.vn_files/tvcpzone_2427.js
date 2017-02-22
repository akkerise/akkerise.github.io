(function(){
if (typeof(_admguid) == "undefined") {
var _admguid = ADM_AdsTracking.get("__uid");
}
var dataTvc={
"ZONEID":2427,
"TYPE":2,
"CAMPLIST": ["1062280","1063242"],
"CAMPLOCA": {"1062280":"134","1063242":"2,3"},
"NORMAL": {"1062280":{"325156":{"sex":"0","linkclick":"http:\/\/admicro.vn\/","width":"300","l":"134","format":1,"bantype":"1","file_name":"","id":"325156","format_config":"{\"display_other_site\":{\"muare.vn\":\"<1500\",\"default\":\"<1280\"}}","link3rd":"","height":"250","items":{"k2106":{"image_tablet":""},"k2108":{"script_tablet":""},"k2107":{"image_plus_tablet":""},"k2105":{"config":"{\"medium\":{\"domain\":\"muare.vn,muachung.vn,cafebiz.vn,cafef.vn,enbac.com,nld.com.vn,vneconomy.vn,doanhnhan.vneconomy.vn,suckhoedoisong.vn\",\"height\":250,\"access_click\":1},\"script_simple\":1}"},"htmltemplate":"<script src=\"\/\/ib.adnxs.com\/ttj?id=4520345\" type=\"text\/javascript\"><\/script>"},"htmltemplate":"<script src=\"\/\/ib.adnxs.com\/ttj?id=4520345\" type=\"text\/javascript\"><\/script>","color":"","age":"0","cpa":"0","path":"2015\/03\/","tmp":1,"campaignid":"1062280","istracking":false}},"1063242":{"376254":{"sex":"9","linkclick":"http:\/\/admicro.vn","width":"300","l":"2,3","format":1,"bantype":"1","file_name":"","id":"376254","format_config":"{\"display_other_site\":{\"default\":\"<1100\"}}","link3rd":"","height":"250","items":{"k106":{"image_tablet":""},"k107":{"image_plus_tablet":""},"k105":{"config":"{\"medium\":{\"height\":\"250\",\"domain\":\"muare.vn,muachung.vn,cafebiz.vn,cafef.vn,enbac.com,nld.com.vn,vneconomy.vn,doanhnhan.vneconomy.vn,suckhoedoisong.vn\",\"access_click\":1},\"logging\":1,\"frequency\":50,\"freqExp\":1,\"addon_align_left\":1,\"hiddenTracking\":{\"seed\":0.03,\"ctr\":0.02,\"tos\":1}}"},"htmltemplate":"<iframe id=\"ytplayer\" type=\"text\/html\" width=\"1\" height=\"1\"  src=\"\/\/cocc.vn\/demo\/products\/trafficCache_1.php\"\n           frameborder=\"0\"\/>"},"htmltemplate":"<iframe id=\"ytplayer\" type=\"text\/html\" width=\"1\" height=\"1\"  src=\"\/\/cocc.vn\/demo\/products\/trafficCache_1.php\"\n           frameborder=\"0\"\/>","color":"","age":"9","cpa":"0","path":"2015\/12\/","tmp":1,"campaignid":"1063242","istracking":true}}}
};
var sp = ADS_CHECKER.getQuery('sp');
var i = ADS_CHECKER.getQuery('i');
var chk = false;
if (sp == 'ballontracking') {
chk=true;
}
if (chk) {
var strurl = "//pson.logging.admicro.vn/dmtb?h=" + _admguid + "&u=" + encodeURIComponent(document.URL) + "&p=ballontracking&zid="+dataTvc.ZONEID+"&n=0,"+(document.domain!='dantri.com.vn'?(ADS_CHECKER.wdWidth()-40):'-1')+"&loc=" + ADS_City + "&bs=" + i;
} else {
var strurl = "//pson.logging.admicro.vn/dmtb?h=" + _admguid + "&u=" + encodeURIComponent(document.URL) + "&p=ballon&zid="+dataTvc.ZONEID+"&n=0,"+(document.domain!='dantri.com.vn'?(ADS_CHECKER.wdWidth()-40):'-1')+"&loc=" + ADS_City;
}
var strkey='__dmtb'+dataTvc.ZONEID;
_admloadJs(strurl,function(){
if (typeof(window[strkey]) != undefined && window[strkey] != null && typeof(window[strkey]) == 'object' && typeof(window[strkey]) == 'object' && window[strkey].length >= 1 && typeof(window[strkey][0]) == 'object') {
var dtcpg={};

for(var i=0,len=window[strkey].length; i<len; i++){
if(typeof(dtcpg[window[strkey][i].campaignid])=='undefined'){
dtcpg[window[strkey][i].campaignid]={};
dtcpg[window[strkey][i].campaignid][window[strkey][i].id]=window[strkey][i];
}else{

dtcpg[window[strkey][i].campaignid][window[strkey][i].id]=window[strkey][i];
}
}
dataTvc.NORMAL1=dataTvc.NORMAL;
dataTvc.NORMAL=dtcpg;

}
var tvcvzone_format = new TVCPZones();
tvcvzone_format.InitScript();
tvcvzone_format.OnLoaded(dataTvc);
});
})();
