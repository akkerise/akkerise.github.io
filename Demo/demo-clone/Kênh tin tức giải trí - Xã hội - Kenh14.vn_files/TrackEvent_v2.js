var trackEvent = {
    init: function () {
        if (typeof ga == 'undefined') return;

        var zoneUrl = $('#hdZoneUrl').val();
        var parentZoneUrl = $('#hdParentZoneUrl').val();
        
        if ($('#hdNewsId').val() != null && zoneUrl != null) {//detail
            ga('send', 'event', 'LoadDetail_' + zoneUrl, window.location.href, zoneUrl);
            ga('send', 'event', 'TotalCategory_' + zoneUrl, window.location.href, zoneUrl);
        }else {
            if (zoneUrl != null) {//zone
                ga('send', 'event', 'TotalCategory_' + zoneUrl, window.location.href, zoneUrl);
            }

        }

        if (parentZoneUrl != null) {//parent zone
            ga('send', 'event', 'TotalCategory_' + parentZoneUrl, window.location.href, parentZoneUrl);
        }

        
    },
    stream: function (target, category, pageIndex) {
        ga('send', 'event', 'Stream' + target + "_" + category, 'load page ' + pageIndex, category);
    }
};