var _ADMFP = function() {
    this.letter = "0123456789abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ!()-_*.~".split("");
};
_ADMFP.prototype.hashFont = function(a) {
    for (var f = a.length, k = f, l = a.length, p = this.letter.length, m = 0; m < a.length; m++) f *= a.charCodeAt(m), f = f % p + 1, k += a.charCodeAt(m), k = k % p + 1;
    var n = Array(3);
    n[0] = a.charCodeAt(0) * a.charCodeAt(l - 1) + 7 * l;
    n[1] = f;
    n[2] = k;
    for (m = 0; m < n.length; m++) n[m] = this.letter[n[m] % p];
    a = "";
    for (m = 0; m < n.length; m++) a += n[m];
    return a
};
_ADMFP.prototype.md5 = function(a) {
    var f = function(a, g) {
        var c, d, b, f, e;
        b = a & 2147483648;
        f = g & 2147483648;
        c = a & 1073741824;
        d = g & 1073741824;
        e = (a & 1073741823) + (g & 1073741823);
        return c & d ? e ^ 2147483648 ^ b ^ f : c | d ? e & 1073741824 ? e ^ 3221225472 ^ b ^ f : e ^ 1073741824 ^ b ^ f : e ^ b ^ f
    }, k = function(a, b, g, c, d, e, h) {
            a = f(a, f(f(b & g | ~b & c, d), h));
            return f(a << e | a >>> 32 - e, b)
        }, l = function(a, b, g, c, d, e, h) {
            a = f(a, f(f(b & c | g & ~c, d), h));
            return f(a << e | a >>> 32 - e, b)
        }, p = function(a, b, c, g, d, e, h) {
            a = f(a, f(f(b ^ c ^ g, d), h));
            return f(a << e | a >>> 32 - e, b)
        }, m = function(a, b, c, e, g, d,
            h) {
            a = f(a, f(f(c ^ (b | ~e), g), h));
            return f(a << d | a >>> 32 - d, b)
        }, n = function(a) {
            var b = "",
                c = "",
                d;
            for (d = 0; 3 >= d; d++) c = a >>> 8 * d & 255, c = "0" + c.toString(16), b += c.substr(c.length - 2, 2);
            return b
        }, e = [],
        h, q, t, r, u, g, c, d, b;
    a = this.utf8_encode(a);
    e = function(a) {
        var b, c = a.length;
        b = c + 8;
        for (var d = 16 * ((b - b % 64) / 64 + 1), e = Array(d - 1), g = 0, f = 0; f < c;) b = (f - f % 4) / 4, g = f % 4 * 8, e[b] |= a.charCodeAt(f) << g, f++;
        b = (f - f % 4) / 4;
        e[b] |= 128 << f % 4 * 8;
        e[d - 2] = c << 3;
        e[d - 1] = c >>> 29;
        return e
    }(a);
    g = 1732584193;
    c = 4023233417;
    d = 2562383102;
    b = 271733878;
    a = e.length;
    for (h = 0; h < a; h +=
        16) q = g, t = c, r = d, u = b, g = k(g, c, d, b, e[h + 0], 7, 3614090360), b = k(b, g, c, d, e[h + 1], 12, 3905402710), d = k(d, b, g, c, e[h + 2], 17, 606105819), c = k(c, d, b, g, e[h + 3], 22, 3250441966), g = k(g, c, d, b, e[h + 4], 7, 4118548399), b = k(b, g, c, d, e[h + 5], 12, 1200080426), d = k(d, b, g, c, e[h + 6], 17, 2821735955), c = k(c, d, b, g, e[h + 7], 22, 4249261313), g = k(g, c, d, b, e[h + 8], 7, 1770035416), b = k(b, g, c, d, e[h + 9], 12, 2336552879), d = k(d, b, g, c, e[h + 10], 17, 4294925233), c = k(c, d, b, g, e[h + 11], 22, 2304563134), g = k(g, c, d, b, e[h + 12], 7, 1804603682), b = k(b, g, c, d, e[h + 13], 12, 4254626195), d = k(d, b,
        g, c, e[h + 14], 17, 2792965006), c = k(c, d, b, g, e[h + 15], 22, 1236535329), g = l(g, c, d, b, e[h + 1], 5, 4129170786), b = l(b, g, c, d, e[h + 6], 9, 3225465664), d = l(d, b, g, c, e[h + 11], 14, 643717713), c = l(c, d, b, g, e[h + 0], 20, 3921069994), g = l(g, c, d, b, e[h + 5], 5, 3593408605), b = l(b, g, c, d, e[h + 10], 9, 38016083), d = l(d, b, g, c, e[h + 15], 14, 3634488961), c = l(c, d, b, g, e[h + 4], 20, 3889429448), g = l(g, c, d, b, e[h + 9], 5, 568446438), b = l(b, g, c, d, e[h + 14], 9, 3275163606), d = l(d, b, g, c, e[h + 3], 14, 4107603335), c = l(c, d, b, g, e[h + 8], 20, 1163531501), g = l(g, c, d, b, e[h + 13], 5, 2850285829), b = l(b,
        g, c, d, e[h + 2], 9, 4243563512), d = l(d, b, g, c, e[h + 7], 14, 1735328473), c = l(c, d, b, g, e[h + 12], 20, 2368359562), g = p(g, c, d, b, e[h + 5], 4, 4294588738), b = p(b, g, c, d, e[h + 8], 11, 2272392833), d = p(d, b, g, c, e[h + 11], 16, 1839030562), c = p(c, d, b, g, e[h + 14], 23, 4259657740), g = p(g, c, d, b, e[h + 1], 4, 2763975236), b = p(b, g, c, d, e[h + 4], 11, 1272893353), d = p(d, b, g, c, e[h + 7], 16, 4139469664), c = p(c, d, b, g, e[h + 10], 23, 3200236656), g = p(g, c, d, b, e[h + 13], 4, 681279174), b = p(b, g, c, d, e[h + 0], 11, 3936430074), d = p(d, b, g, c, e[h + 3], 16, 3572445317), c = p(c, d, b, g, e[h + 6], 23, 76029189),
    g = p(g, c, d, b, e[h + 9], 4, 3654602809), b = p(b, g, c, d, e[h + 12], 11, 3873151461), d = p(d, b, g, c, e[h + 15], 16, 530742520), c = p(c, d, b, g, e[h + 2], 23, 3299628645), g = m(g, c, d, b, e[h + 0], 6, 4096336452), b = m(b, g, c, d, e[h + 7], 10, 1126891415), d = m(d, b, g, c, e[h + 14], 15, 2878612391), c = m(c, d, b, g, e[h + 5], 21, 4237533241), g = m(g, c, d, b, e[h + 12], 6, 1700485571), b = m(b, g, c, d, e[h + 3], 10, 2399980690), d = m(d, b, g, c, e[h + 10], 15, 4293915773), c = m(c, d, b, g, e[h + 1], 21, 2240044497), g = m(g, c, d, b, e[h + 8], 6, 1873313359), b = m(b, g, c, d, e[h + 15], 10, 4264355552), d = m(d, b, g, c, e[h + 6], 15, 2734768916),
    c = m(c, d, b, g, e[h + 13], 21, 1309151649), g = m(g, c, d, b, e[h + 4], 6, 4149444226), b = m(b, g, c, d, e[h + 11], 10, 3174756917), d = m(d, b, g, c, e[h + 2], 15, 718787259), c = m(c, d, b, g, e[h + 9], 21, 3951481745), g = f(g, q), c = f(c, t), d = f(d, r), b = f(b, u);
    return (n(g) + n(c) + n(d) + n(b)).toLowerCase()
};
_ADMFP.prototype.utf8_encode = function(a) {
    if (null === a || "undefined" === typeof a) return "";
    a += "";
    var f = "",
        k, l, p = 0;
    k = l = 0;
    for (var p = a.length, m = 0; m < p; m++) {
        var n = a.charCodeAt(m),
            e = null;
        128 > n ? l++ : e = 127 < n && 2048 > n ? String.fromCharCode(n >> 6 | 192) + String.fromCharCode(n & 63 | 128) : String.fromCharCode(n >> 12 | 224) + String.fromCharCode(n >> 6 & 63 | 128) + String.fromCharCode(n & 63 | 128);
        null !== e && (l > k && (f += a.slice(k, l)), f += e, k = l = m + 1)
    }
    l > k && (f += a.slice(k, p));
    return f
};
_ADMFP.prototype.getCanvas = function() {
    try {
        var a = document.createElement("canvas"),
            c = a.getContext("2d");
        c.textBaseline = "top";
        c.font = "14px 'Arial'";
        c.textBaseline = "alphabetic";
        c.fillStyle = "#f60";
        c.fillRect(125, 1, 62, 20);
        c.fillStyle = "#069";
        c.fillText("http://admicro.vn/", 2, 15);
        c.fillStyle = "rgba(102, 204, 0, 0.7)";
        c.fillText("http://admicro.vn/",
            4, 17);
        return this.md5(a.toDataURL())
    } catch (e) {
        return "Unknown";
    }

};
_ADMFP.prototype.binaryToHex = function binaryToHex(s) {
    var i, k, part, accum, ret = '';
    for (i = s.length - 1; i >= 3; i -= 4) {
        // extract out in substrings of 4 and convert to hex
        part = s.substr(i + 1 - 4, 4);
        accum = 0;
        for (k = 0; k < 4; k += 1) {
            if (part[k] !== '0' && part[k] !== '1') {
                // invalid character
                return {
                    valid: false
                };
            }
            // compute the length 4 substring
            accum = accum * 2 + parseInt(part[k], 10);
        }
        if (accum >= 10) {
            // 'A' to 'F'
            ret = String.fromCharCode(accum - 10 + 'A'.charCodeAt(0)) + ret;
        } else {
            // '0' to '9'
            ret = String(accum) + ret;
        }
    }
    // remaining characters, i = 0, 1, or 2
    if (i >= 0) {
        accum = 0;
        // convert from front
        for (k = 0; k <= i; k += 1) {
            if (s[k] !== '0' && s[k] !== '1') {
                return {
                    valid: false
                };
            }
            accum = accum * 2 + parseInt(s[k], 10);
        }
        // 3 bits, value cannot exceed 2^3 - 1 = 7, just convert
        ret = String(accum) + ret;
    }
    return {
        valid: true,
        result: ret
    };
}
_ADMFP.prototype.getWebGL = function() {
    var a;
    if (window.WebGLRenderingContext)
        for (var f = document.createElement("canvas"), k = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], l = 0; 4 > l; l++) try {
            if ((a = f.getContext(k[l])) && "function" == typeof a.getParameter) {
                a = {
                    name: k[l],
                    gl: a
                };
                break
            }
        } catch (p) {}
    if ("undefined" == typeof a) return "Unknown";
    a = a.gl;
    f = "";
    k = a.getExtension("WEBGL_debug_renderer_info");
    null != k && (f += a.getParameter(k.UNMASKED_RENDERER_WEBGL) + "|");
    if (k == null)
        f += "0|";
    f += a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS) +
        "|" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE);

    return "" == f ? "0|0|0" : f
};
_ADMFP.prototype.getNumberCore = function() {
    return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "Unknown"
};
_ADMFP.prototype.getFontFlash = function() {
    var a = "";
    try {
        a = ADS_CHECKER.getFlashMovie("_admFlck").getFont()
    } catch (f) {}
    return this.getFontResult(a);
};
_ADMFP.prototype.getFontJS = function() {
    var stringFonts = "Book Antiqua,Palatino Linotype,Constantia,MS Mincho,Browallia New,.VnTime,Segoe UI Semibold,Century Gothic,VNI-Times,MT Extra,VNI-Maria,Viner Hand ITC,Mistral,Lucida Sans,Arial Unicode MS,VNI-Linus,VNI-Awchon,Rage Italic,Papyrus,French Script MT,VNI-Thufap2,WST_Swed,.TMC-Ong Do,VnTimes2,Calibri Light,VNI-ShellaL,VNI-Rush,SansSerif,Segoe UI Semilight,VNI-Pagon,Vni 13 Annabelle,VNcommercial Script,TeamViewer10,VNI Helve Condense,BankGothic Md BT,Verdana Ref,ABC Sans Serif,Myanmar Text,Vineta BT,Swis721 BT,ISOCT2,Thanhoa,VnNCentury2,VPS Courier Hoa,GreekS,VnHelvIns2,Anklepants,VnBookman,VnMystical,VfFree45,Giolinh,Smudger LET,Arabic Transparent,Architecture,Myriad Pro,Andong,Amazone,Letter Gothic Std,TeamViewer9,VPS My Tho Hoa,Palatino,VNbanff,MusicalSymbols,Adobe Hebrew,Vni 01 LinotypeZapfino one,PhuongThaoH 1.1,Times,AvantGarde,ZapfDingbats BT,A Charming Font,Banmethuot,Georgia Ref,Clarendon,Parry Hotter,VNHelvet,TypoUpright BT,VNTime,Nueva Std,AnkeCalligraph,DT-Umbrella,VNI Centur,KV-Mariage,VNI-Ongdo (nobita),VNmonotype corsiva,Futura,OCR-A BT,Antique,VN-UniversityRoman,DS Sans Serif,ThaHuongH 1.1,Furniture,UVN Vi Vi,Fences,DejaVu Sans,Angiang,HL Thuphap 2BK,Tuyhoa,TeamViewer8,Usuzi,Monotype Sorts,DreamScar,VfFree17,Bell Gothic Std Light,UVN Hong Ha,Arno Pro,MT Extra Tiger,Humanst521 BT,WP CyrillicA,SVNhelvetica,MS Reference Serif,PhTimes,AngelasHand,Scriptina,Map Symbols,VS2 Sample Font,Vn-Sans-Serif,Lingoes Unicode,ParkAvenue BT,HL Freewrite,Blade Runner Movie Font,Graffiti Treat,MarionsHand,Pokemon Hollow,Loki Cola,Ruritania,Distortia,UNI Tap Viet 0,VSDict Phonetic,.VnTahoma,Source Sans Pro,VNIWed1,Abadi MT Condensed Light,HGSHeiseiMinchotaiW9,AvantGarde Bk BT,Almonte Snow,Bizarro,Eurostile,Plasma Drip BRK,SketchFlow Print,Albertus Extra Bold,VNtimes New Roman,Helvetica Neue,Degrassi,HP Simplified,VNIBandit,Polo,VNI-Eurasia,Myriad Web Pro,GoudyOlSt BT,Bookshelf Symbol 2,CD Tahoma,Open Sans,Inkburrow,HP-Helve-Condense,Univers Condensed,VNI-ThienHoang,Bleeding Cowboys,HL Hoctro,PN-Time,Yu Gothic UI,BatmanForeverAlternate,Amazone BT,HP-Dan Truong,PT Serif,barcode font,Blazed,Anastasia,VnArchitecture,Matisse ITC,Westminster,GOST Common,UTM Edwardian,VAGRounded BT,LCD,Earwig Factory,A Charming Font Expanded,Liberation Sans Narrow,Nokia Standard Multiscript,MapInfo Miscellaneous,OfficinaSanITCMedium,VU Times,Blood Of Dracula,Comic Book Commando,Windsong,VNFriz,Schoolnet Sans Serif,Courier10 BT,BaileysCar,IT Arial Narrow,VnCommerce2,Fiolex Girls,Due Date,Barber shop,kt001,A Yummy Apology,Cooper Blk BT,FZShuTi,VNI Wed2,VNSVNI2,Deftone Stylus,KR Heartalicious,Aliens,Rapscallion,Alien League,SWSimp,TMC-Holtzschue,Belphebe,PresidentGas,VPS Times,AlphaMack AOE,RixLoveFool,VNI 39 GoodVibrationsROB,UTM Chickenhawk,HGGothicE,Guitar Pro 5,UTM Neo Sans Intel,Boomerang,Neurochrome,SquareDance10,Arial CE,VPS Times Hoa,Maximillion,Buffet Script,Code39AzaleaRegular1,UVnVogue Medium,ESRI Cartography,VfFree50,SFU Futura,AlfredDrake,UVnHelvetIns Medium,Kievit Offc Pro,Good Times,Adriator,Bullpen,Mael,Beckett,Apple LiSung,WC Rhesus B Bta,Maestro,CygnetRound,Lithos Pro,QUAKE,AdineKirnberg-Script,BN Manson Nights,Airstream,Khmer OS,Baby Kruffy,Autumn,BlackChancery,Starcraft,Creepygirl,Black Rose,IDAutomationHC39M,VNI QuangNinh 2,VNTeknika,Sesame,Bitstream Vera Sans Mono,VNI Souvir,Ubuntu,Aphrodite Pro,Breathe Pro,PJ Hiragana,VfWedding34,Digital-7,OCR-B-Seagull";
    return this.getFontResult(stringFonts);
}
_ADMFP.prototype.getFontResult = function(stringFonts) {
    // get Font by JS
    var testString = "abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789";
    var subFont = ["black", "bold", "italic", "semilight", "semibold", "demibold", "demi", "compressed", "light", "medium", "ultra", "extra", "extended", "ext", "condensed", "cond", ];
    var defaultFont = 'Impact,\"Courier New\",Georgia,\"century schoolbook l\",\"URW Chancery L\",Geneva';
    /*--------------*/
    var fonts = stringFonts.split(",");
    var body = document.getElementsByTagName("body")[0];
    var container = document.createElement("div");
    body.appendChild(container);
    var pTest = document.createElement("p");
    pTest.innerHTML = testString;
    pTest.style.font = '20px ' + defaultFont;
    container.appendChild(pTest);
    var defaultWidth = pTest.clientWidth;
    var defaultHeight = pTest.clientHeight;
    container.removeChild(pTest);
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.font = '20px sans-serif';
    var defaultCanvas = context.measureText(testString).width;

    function isFontAvailable(fontName) {
        var p = document.createElement("p");
        p.innerHTML = testString;
        p.style.font = '20px \"' + fontName + '\",' + defaultFont;
        container.appendChild(p);
        var newWidth = p.clientWidth;
        var newHight = p.clientHeight;
        container.removeChild(p);
        if (newHight !== defaultHeight || newWidth !== defaultWidth) {
            return true;
        } else {
            context.font = '20px \"' + fontName + '\", sans-serif';
            var newCanvas = context.measureText(testString).width;
            if (newCanvas !== defaultCanvas) {
                return true;
            } else {
                for (var i = 0; i < subFont.length; i++) {
                    var index = fontName.indexOf(" " + subFont[i]);
                    if (index >= 0) {
                        var newFont = fontName.replace(" " + subFont[i], "");
                        return isFontAvailable(newFont);
                    }
                }
                return false;
            }
        }
    }

    function fontResult() {
        var output = "";
        for (var i = 0; i < fonts.length; i++) {
            output += isFontAvailable(fonts[i].toLowerCase()) ? "1" : "0";
        }
        delete canvas;
        body.removeChild(container);
        return output;

    }

    return this.binaryToHex(fontResult()).result;
}
_ADMFP.prototype.getDisplay = function() {
    var a, f;
    f = a = null;
    try {
        return (a = window.screen) && (f = a.colorDepth + "|" + a.pixelDepth + "|" + Math.floor(window.devicePixelRatio * a.width) + "|" + Math.floor(window.devicePixelRatio * a.height) + "|" + a.availWidth + "|" + a.availHeight), f
    } catch (k) {
        return "0|0|0|0|0|0"
    }
};
_ADMFP.prototype.yesNo = function() {
    var a;
    a = "" + (navigator.cookieEnabled ? "1" : "0");
    a += (navigator.doNotTrack == 1) || navigator.msDoNotTrack ? "1" : "0";
    a += navigator.javaEnabled ? "1" : "0";
    a += window.localStorage ? "1" : "0";
    a += window.sessionStorage ? "1" : "0";
    a += ADS_CHECKER.flash ? "1" : "0";
    return a += navigator.plugins["Silverlight Plug-In"] ? "1" : "0"
};
_ADMFP.prototype.getTimeZone = function() {
    return (new Date).getTimezoneOffset()
};
_ADMFP.prototype.getTime = function() {
    return (new Date).getTime()
};
_ADMFP.prototype.getLanguage = function() {
    return navigator.language
};
_ADMFP.prototype.getPlugins = function() {
    var a = navigator.plugins.length,
        f = "",
        k = "",
        l, p, m, n, e;
    for (i = 0; i < a; i++) {
        l = navigator.plugins[i];
        f += l.name;
        f += "," + l.filename;
        p = l.length;
        for (j = 0; j < p; j++)
            if (m = l[j]) n = "0", (e = m.enabledPlugin) && e.name == l.name && (n = "1"), f += "," + m.type + "|" + m.suffixes + "|";
        k += this.hashFont(f) + n;
        f = ""
    }
    return k
};
_ADMFP.prototype.getFont = function() {
    var a = "";
    try {
        a = ADS_CHECKER.getFlashMovie("_admFlck").getFont()
    } catch (f) {}
    return a
};

_ADMFP = new _ADMFP();
(function() {
   window.setTimeout(function() {
        var f1 = encodeURIComponent(_ADMFP.md5(_ADMFP.getFont()) + ',' + _ADMFP.getFontJS());
        window.setTimeout(function() {
			var dmn=document.domain;
            var img = new Image;
            img.src = "//lg.logging.admicro.vn/fig?guid=" + ADM_AdsTracking.get("__uid") + "&pl=" + encodeURIComponent(_ADMFP.getPlugins()) + "&src=1&je=" + _ADMFP.yesNo() + "&tz=" + encodeURIComponent(_ADMFP.getTimeZone()) +
                "&st=" + encodeURIComponent(_ADMFP.getTime()) + "&rs=" + encodeURIComponent(_ADMFP.getDisplay()) + "&lf=" + f1 + "&lg=" + encodeURIComponent(_ADMFP.getLanguage()) + "&wr=" + encodeURIComponent(_ADMFP.getWebGL()) + "&cv=" + encodeURIComponent(_ADMFP.getCanvas()) + "&nc=" + encodeURIComponent(_ADMFP.getNumberCore());

            var a = (_ADMFP.getFont() + "").split(","),
                f = [];
            if (150 < a.length)
                for (var k = "", l = 1, p = 0, m = a.length; p < m; p++) p < 150 * l && (k = k + a[p] + ","), p == 150 * l && (k = k.slice(0, -1), f[f.length] = k, l++, k = ""), p == a.length - 1 && (k = k.slice(0, -1), f[f.length] = k);
            else f = [a];
            a = [];
            l = 0;
			if(dmn=='soha.vn'){
				for (k = f.length; l < k; l++) a[l] = new Image, a[l].src = "//lg.logging.admicro.vn/fig?guid=" + ADM_AdsTracking.get("__uid") + "&pl=" + _ADMFP.getPlugins() + "&src=1&je=" + _ADMFP.yesNo() + "&tz=" + _ADMFP.getTimeZone() +
                "&st=" + _ADMFP.getTime() + "&rs=" + _ADMFP.getDisplay() + "&lf=" + f[l] + "&lg=" + _ADMFP.getLanguage() + "&wr=" + _ADMFP.getWebGL() + "&cv=" + _ADMFP.getCanvas() + "&nc=" + _ADMFP.getNumberCore()
			}

        }, 3e3);
    }, 1E3)
})();