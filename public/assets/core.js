if ("undefined" == typeof I$) I$ = function () {
    var e = {}, t = function () {
        return !1
    }, a = {};
    var i = function (t, a) {
        return e.toString.call(t) === "[object " + a + "]"
    };
    return function (e, n) {
        var s = a[e], r = i(n, "Function");
        if (null != n && !r) s = n;
        if (r) {
            var o = [];
            for (var c = 2, l = arguments.length; c < l; c++) o.push(arguments.callee(arguments[c]));
            var d = {};
            o.push.call(o, d, {}, t, []);
            var u = n.apply(null, o) || d;
            if (!s || !i(u, "Object")) s = u; else if (Object.keys) for (var p = Object.keys(u), c = 0, l = p.length, f; c < l; c++) {
                f = p[c];
                s[f] = u[f]
            } else for (var f in u) s[f] = u[f]
        }
        if (null == s) s = {};
        a[e] = s;
        return s
    }
}();
I$("49abd5fbcf8c81327ebfad26d5407002", function () {
    function e(e) {
        return !!e && "[object Object]" === Object.prototype.toString.call(e)
    }

    function t(e) {
        return e instanceof Array
    }

    function a(e) {
        return Array.prototype.slice.call(e)
    }

    function i() {
        if (!(this instanceof i)) return new i
    }

    var n = Object.names || function (e) {
        var t = [], a = "";
        for (a in e) if (e.hasOwnProperty(a)) t.push(a);
        return t
    };
    i.prototype = {
        get: function (e) {
            var t = e + "=";
            var a = document.cookie.split(";");
            for (var i = 0; i < a.length; i++) {
                var n = a[i];
                for (; " " == n.charAt(0);) n = n.substring(1, n.length);
                if (0 == n.indexOf(t)) return unescape(n.substring(t.length, n.length))
            }
            return !1
        }, set: function (t, a, i) {
            if (e(t)) {
                for (var n in t) if (t.hasOwnProperty(n)) this.set(n, t[n], a)
            } else {
                var s = e(i) ? i : {expires: i}, r = void 0 !== s.expires ? s.expires : "", o = typeof r,
                    c = void 0 !== s.path ? ";path=" + s.path : ";path=/", l = s.domain ? ";domain=" + s.domain : "",
                    d = s.secure ? ";secure" : "";
                if ("string" === o && "" !== r) r = new Date(r); else if ("number" === o) r = new Date(+new Date + 864e5 * r);
                if ("" !== r && "toGMTString" in r) r = ";expires=" + r.toGMTString();
                document.cookie = t + "=" + escape(a) + r + c + l + d
            }
        }, remove: function (e) {
            e = t(e) ? e : a(arguments);
            for (var i = 0, n = e.length; i < n; i++) this.set(e[i], "", -1);
            return e
        }, clear: function (e) {
            return this.remove(n(this.all()))
        }, all: function () {
            if ("" === document.cookie) return {};
            var e = document.cookie.split("; "), t = {};
            for (var a = 0, i = e.length; a < i; a++) {
                var n = e[a].split("=");
                t[unescape(n[0])] = unescape(n[1])
            }
            return t
        }
    };
    var s = function (t, a, n) {
        var s = arguments;
        if (0 === s.length) return i().clear();
        if (2 === s.length && !a) return i().clear(t);
        if ("string" == typeof t && !a) return i().get(t);
        if (e(t) || s.length > 1 && t && a) return i().set(t, a, n);
        if (null === a) return i().remove(t); else return i().all()
    };
    for (var r in i.prototype) s[r] = i.prototype[r];
    return s
});
I$("81aff2a53e18d21e037ee9fc803fbf2b", function (e, t, a, i) {
    var n = Function.prototype;
    n._$aop = function (e, t) {
        var t = t || a, e = e || a, n = this;
        return function () {
            var a = {args: i.slice.call(arguments, 0)};
            e(a);
            if (!a.stopped) {
                a.value = n.apply(this, a.args);
                t(a)
            }
            return a.value
        }
    };
    n._$bind = function () {
        var e = arguments, t = arguments[0], a = this;
        return function () {
            var n = i.slice.call(e, 1);
            i.push.apply(n, arguments);
            return a.apply(t || null, n)
        }
    };
    n._$bind2 = function () {
        var e = arguments, t = i.shift.call(e), a = this;
        return function () {
            i.push.apply(arguments, e);
            return a.apply(t || null, arguments)
        }
    };
    var n = String.prototype;
    if (!n.trim) n.trim = function () {
        var e = /(?:^\s+)|(?:\s+$)/g;
        return function () {
            return this.replace(e, "")
        }
    }();
    if (!this.console) this.console = {log: a, error: a};
    if (!0) {
        NEJ = this.NEJ || {};
        NEJ.copy = function (e, a) {
            e = e || {};
            a = a || t;
            for (var i in a) if (a.hasOwnProperty(i)) e[i] = a[i];
            return e
        };
        NEJ = NEJ.copy(NEJ, {
            O: t, R: i, F: a, P: function (e) {
                if (!e || !e.length) return null;
                var t = window;
                for (var a = e.split("."), i = a.length, n = "window" == a[0] ? 1 : 0; n < i; t = t[a[n]] = t[a[n]] || {}, n++) ;
                return t
            }
        });
        return NEJ
    }
    return e
});
I$("fad1d74b18388e1b95a7f60da269e6af", function (e, t, a, i) {
    e.__forIn = function (e, t, a) {
        if (!e || !t) return null;
        var i = Object.keys(e);
        for (var n = 0, s = i.length, r, o; n < s; n++) {
            r = i[n];
            o = t.call(a || null, e[r], r, e);
            if (o) return r
        }
        return null
    };
    e.__forEach = function (e, t, a) {
        e.forEach(t, a)
    };
    e.__col2array = function (e) {
        return i.slice.call(e, 0)
    };
    e.__str2time = function (e) {
        return Date.parse(e)
    };
    return e
});
I$("b6a40003f918f58537b5b77b495b3193", function (e, t, a, i, n) {
    var s = this.navigator.platform, r = this.navigator.userAgent;
    var o = {mac: s, win: s, linux: s, ipad: r, ipod: r, iphone: s, android: r};
    t._$IS = o;
    for (var c in o) o[c] = new RegExp(c, "i").test(o[c]);
    o.ios = o.ipad || o.iphone || o.ipod;
    o.tablet = o.ipad;
    o.desktop = o.mac || o.win || o.linux && !o.android;
    t._$is = function (e) {
        return !!o[e]
    };
    var l = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    t._$KERNEL = l;
    if (/msie\s+(.*?);/i.test(r) || /trident\/.+rv:([\d\.]+)/i.test(r)) {
        l.engine = "trident";
        l.browser = "ie";
        l.version = RegExp.$1;
        l.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var d = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        l.release = d[document.documentMode] || d[parseInt(l.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(r)) {
        l.engine = "webkit";
        l.release = RegExp.$1 || "";
        l.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(r)) {
        l.engine = "gecko";
        l.release = RegExp.$1 || "";
        l.browser = "firefox";
        l.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(r)) l.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(r)) {
        l.engine = "presto";
        l.release = RegExp.$1 || "";
        l.browser = "opera";
        l.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(r)) l.version = RegExp.$1 || ""
    }
    if ("unknow" == l.browser) {
        var d = ["chrome", "maxthon", "safari"];
        for (var u = 0, p = d.length, f; u < p; u++) {
            f = "safari" == d[u] ? "version" : d[u];
            if (new RegExp(f + "/(.*?)(?=\\s|$)", "i").test(r)) {
                l.browser = d[u];
                l.version = RegExp.$1.trim();
                break
            }
        }
    }
    t._$SUPPORT = {};
    t._$support = function (e) {
        return !!t._$SUPPORT[e]
    };
    if (!0) e.copy(e.P("nej.p"), t);
    return t
}, "81aff2a53e18d21e037ee9fc803fbf2b");
I$("b1082ea271786111b0ecdbfafdd7ef90", function (e, t, a, i, n, s) {
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "4.0") I$("d95da0ba691784dddc9ba7f3636d584e", function () {
        e.__forIn = function (e, t, a) {
            if (e && t) {
                var i;
                for (var n in e) if (e.hasOwnProperty(n)) {
                    i = t.call(a, e[n], n, e);
                    if (i) return n
                } else ;
            }
        };
        e.__forEach = function (e, t, a) {
            for (var i = 0, n = e.length; i < n; i++) t.call(a, e[i], i, e)
        };
        e.__col2array = function (e) {
            var t = [];
            if (e && e.length) for (var a = 0, i = e.length; a < i; a++) t.push(e[a]);
            return t
        };
        e.__str2time = function () {
            var e = /-/g;
            return function (t) {
                return Date.parse(t.replace(e, "/").split(".")[0])
            }
        }()
    });
    return e
}, "fad1d74b18388e1b95a7f60da269e6af", "b6a40003f918f58537b5b77b495b3193");
I$("6f5d8ca720f8058b197bc7c887a7de3a", function (e, t, a, i, n, s) {
    var r = function (e, t) {
        try {
            t = t.toLowerCase();
            if (null === e) return "null" == t;
            if (void 0 === e) return "undefined" == t; else return i.toString.call(e).toLowerCase() == "[object " + t + "]"
        } catch (a) {
            return !1
        }
    };
    a._$isFunction = function (e) {
        return r(e, "function")
    };
    a._$isString = function (e) {
        return r(e, "string")
    };
    a._$isNumber = function (e) {
        return r(e, "number")
    };
    a._$isBoolean = function (e) {
        return r(e, "boolean")
    };
    a._$isDate = function (e) {
        return r(e, "date")
    };
    a._$isArray = function (e) {
        return r(e, "array")
    };
    a._$isObject = function (e) {
        return r(e, "object")
    };
    a._$length = function () {
        var e = /[^\x00-\xff]/g;
        return function (t) {
            return ("" + (t || "")).replace(e, "**").length
        }
    }();
    a._$loop = function (e, i, n) {
        if (a._$isObject(e) && a._$isFunction(i)) return t.__forIn.apply(t, arguments); else return null
    };
    a._$indexOf = function (e, t) {
        var i = a._$isFunction(t) ? t : function (e) {
            return e === t
        }, n = a._$forIn(e, i);
        return null != n ? n : -1
    };
    a._$binSearch = function () {
        var e;
        var t = function (a, i, n) {
            if (i > n) return -1;
            var s = Math.ceil((i + n) / 2), r = e(a[s], s, a);
            if (0 == r) return s;
            if (r < 0) return t(a, i, s - 1); else return t(a, s + 1, n)
        };
        return function (a, i) {
            e = i || n;
            return t(a, 0, a.length - 1)
        }
    }();
    a._$reverseEach = function (e, t, i) {
        if (e && e.length && a._$isFunction(t)) for (var n = e.length - 1; n >= 0; n--) if (t.call(i, e[n], n, e)) return n;
        return null
    };
    a._$forEach = function (e, i, n) {
        if (e && e.length && a._$isFunction(i)) if (!e.forEach) a._$forIn.apply(a, arguments); else t.__forEach(e, i, n)
    };
    a._$forIn = function (e, t, i) {
        if (!e || !a._$isFunction(t)) return null;
        if (a._$isNumber(e.length)) {
            for (var n = 0, s = e.length; n < s; n++) if (t.call(i, e[n], n, e)) return n
        } else if (a._$isObject(e)) return a._$loop(e, t, i);
        return null
    };
    a._$encode = function (e, t) {
        t = "" + t;
        if (!e || !t) return t || ""; else return t.replace(e.r, function (t) {
            var a = e[!e.i ? t.toLowerCase() : t];
            return null != a ? a : t
        })
    };
    a._$escape = function () {
        var e = /<br\/?>$/, t = {
            r: /\<|\>|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": ""
        };
        return function (i) {
            i = a._$encode(t, i);
            return i.replace(e, "<br/><br/>")
        }
    }();
    a._$unescape = function () {
        var e = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (t) {
            return a._$encode(e, t)
        }
    }();
    a._$format = function () {
        var e = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, t = ["上午", "下午"],
            i = ["A.M.", "P.M."], n = ["日", "一", "二", "三", "四", "五", "六"],
            s = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var o = function (e) {
            e = parseInt(e) || 0;
            return (e < 10 ? "0" : "") + e
        };
        var c = function (e) {
            return e < 12 ? 0 : 1
        };
        return function (l, d, u) {
            if (!l || !d) return "";
            l = a._$var2date(l);
            e.yyyy = l.getFullYear();
            e.yy = ("" + e.yyyy).substr(2);
            e.M = l.getMonth() + 1;
            e.MM = o(e.M);
            e.eM = r[e.M - 1];
            e.cM = s[e.M - 1];
            e.d = l.getDate();
            e.dd = o(e.d);
            e.H = l.getHours();
            e.HH = o(e.H);
            e.m = l.getMinutes();
            e.mm = o(e.m);
            e.s = l.getSeconds();
            e.ss = o(e.s);
            e.ms = l.getMilliseconds();
            e.w = n[l.getDay()];
            var p = c(e.H);
            e.ct = t[p];
            e.et = i[p];
            if (u) e.H = e.H % 12;
            return a._$encode(e, d)
        }
    }();
    a._$var2date = function (e) {
        var i = e;
        if (a._$isString(e)) i = new Date(t.__str2time(e));
        if (!a._$isDate(i)) i = new Date(e);
        return i
    };
    a._$fixed = function (e, t) {
        return parseFloat(Number(e).toFixed(t))
    };
    a._$absolute = function () {
        var e = /([^\/:])\/.*$/, t = /\/[^\/]+$/, a = /[#\?]/, i = location.href.split(/[?#]/)[0],
            n = document.createElement("a");
        var s = function (e) {
            return (e || "").indexOf("://") > 0
        };
        var r = function (e) {
            return (e || "").split(a)[0].replace(t, "/")
        };
        var o = function (t, a) {
            if (0 == t.indexOf("/")) return a.replace(e, "$1") + t; else return r(a) + t
        };
        i = r(i);
        return function (e, t) {
            e = (e || "").trim();
            if (!s(t)) t = i;
            if (!e) return t;
            if (s(e)) return e;
            e = o(e, t);
            n.href = e;
            e = n.href;
            return s(e) ? e : n.getAttribute("href", 4)
        }
    }();
    a._$url2origin = function () {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (t) {
            if (e.test(t || "")) return RegExp.$1.toLowerCase(); else return ""
        }
    }();
    a._$string2object = function (e, t) {
        var i = {};
        a._$forEach((e || "").split(t), function (e) {
            var t = e.split("=");
            if (t && t.length) {
                var a = t.shift();
                if (a) i[decodeURIComponent(a)] = decodeURIComponent(t.join("="));
            }
        });
        return i
    };
    a._$object2string = function (e, t, i) {
        if (!e) return "";
        var n = [];
        a._$loop(e, function (e, t) {
            if (!a._$isFunction(e)) {
                if (a._$isDate(e)) e = e.getTime(); else if (a._$isArray(e)) e = e.join(","); else if (a._$isObject(e)) e = JSON.stringify(e);
                if (i) e = encodeURIComponent(e);
                n.push(encodeURIComponent(t) + "=" + e)
            }
        });
        return n.join(t || ",")
    };
    a._$query2object = function (e) {
        return a._$string2object(e, "&")
    };
    a._$object2query = function (e) {
        return a._$object2string(e, "&", !0)
    };
    a._$object2array = function (e) {
        return t.__col2array(e)
    };
    a._$array2object = function (e, t) {
        var i = {};
        a._$forEach(e, function (e) {
            var a = e;
            if (t) a = t(e);
            if (null != a) i[a] = e
        });
        return i
    };
    a._$number2string = function (e, t) {
        var a = ("" + e).length, i = Math.max(1, parseInt(t) || 0), n = i - a;
        if (n > 0) e = new Array(n + 1).join("0") + e;
        return "" + e
    };
    a._$safeDelete = function (e, t) {
        if (!a._$isArray(t)) try {
            delete e[t]
        } catch (i) {
            e[t] = void 0
        } else a._$forEach(t, function (t) {
            a._$safeDelete(e, t)
        })
    };
    a._$randString = function () {
        var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (t) {
            t = t || 10;
            var a = [];
            for (var i = 0, n; i < t; ++i) {
                n = Math.floor(Math.random() * e.length);
                a.push(e.charAt(n))
            }
            return a.join("")
        }
    }();
    a._$randNumber = function (e, t) {
        return Math.floor(Math.random() * (t - e) + e)
    };
    a._$randNumberString = function (e) {
        e = Math.max(0, Math.min(e || 8, 30));
        var t = Math.pow(10, e - 1), i = 10 * t;
        return a._$randNumber(t, i).toString()
    };
    a._$uniqueID = function () {
        var e = +new Date;
        return function () {
            return "" + e++
        }
    }();
    a._$query = function (e, t) {
        e = e || i;
        var a = (t || "").split(".");
        for (var n = 0, s = a.length; n < s; n++) {
            e = e[a[n]];
            if (!e) break
        }
        return e
    };
    a._$merge = function () {
        var e = arguments.length - 1, t = arguments[e];
        if (a._$isFunction(t)) e -= 1; else t = n;
        var i = arguments[0] || {};
        for (var s = 1; s <= e; s++) a._$loop(arguments[s], function (e, a) {
            if (!t(e, a)) i[a] = e
        });
        return i
    };
    a._$fetch = function (e, t) {
        if (t) a._$loop(e, function (e, a, i) {
            var n = t[a];
            if (null != n) i[a] = n
        });
        return e
    };
    a._$hasProperty = function (e) {
        if (!e) return !1;
        if (null != e.length) return e.length > 0;
        var t = 0;
        a._$loop(e, function () {
            t++;
            return t > 0
        });
        return t > 0
    };
    if (!0) {
        e.Q = a._$query;
        e.X = a._$merge;
        e.EX = a._$fetch;
        e.copy(this.NEJ, e);
        e.copy(e.P("nej.u"), a)
    }
    return a
}, "81aff2a53e18d21e037ee9fc803fbf2b", "b1082ea271786111b0ecdbfafdd7ef90");
I$("0fd53a069581c1fdc7a28944d1b23201", function (e, t, a, i, n, s) {
    var r = {};
    a.__url2host = function () {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (t) {
            t = t || "";
            if (e.test(t)) return RegExp.$1; else return location.protocol + "//" + location.host
        }
    }();
    a.__set = function (e, t) {
        r[e] = t
    };
    a.__get = function (e) {
        return r[e]
    };
    var o = function () {
        var e = {
            portrait: {name: "portrait", dft: "portrait/"},
            "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"},
            "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"},
            "audio.swf": {name: "audio", dft: "nej_player_audio.swf"},
            "video.swf": {name: "video", dft: "nej_player_video.swf"},
            "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"},
            "upload.image.swf": {name: "uploadimage", dft: "nej_upload_image.swf"}
        };
        var n = function (e) {
            var t = {};
            if (!e || !e.length) return t;
            for (var i = 0, n = e.length, s; i < n; i++) {
                s = e[i];
                if (s.indexOf("://") > 0) t[a.__url2host(s)] = s
            }
            return t
        };
        return function (s) {
            a.__set("root", s.root || "/res/");
            var r = a.__get("root");
            t._$loop(e, function (e, t, i) {
                a.__set(t, s[e.name] || r + e.dft)
            });
            var o = s.p_csrf;
            if (o === !0) o = {cookie: "AntiCSRF", param: "AntiCSRF"};
            o = o || i;
            a.__set("csrf", {param: o.param || "", cookie: o.cookie || ""});
            a.__set("frames", n(s.p_frame));
            a.__set("flashs", n(s.p_flash))
        }
    }();
    o(this.NEJ_CONF || i);
    return a
}, "81aff2a53e18d21e037ee9fc803fbf2b", "6f5d8ca720f8058b197bc7c887a7de3a");
I$("3e9a6ec79c9d6ea95cadac1b73f28b14", function (e, t, a, i, n, s) {
    if ("trident" === t._$KERNEL.engine) I$("eeae098e8731b2c1932791a755f618a3", function () {
        e.__set("storage.swf", (this.NEJ_CONF || i).storage || e.__get("root") + "nej_storage.swf")
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "3.0") I$("751172d4a6015274a450fb221ea19395", function () {
        e.__set("blank.png", (this.NEJ_CONF || i).blank || e.__get("root") + "nej_blank.gif")
    });
    return e
}, "0fd53a069581c1fdc7a28944d1b23201", "b6a40003f918f58537b5b77b495b3193");
I$("851b16fbc1f6b9d8d7b6c0901d3abccf", function (e, t, a, i, n, s) {
    a._$getFrameProxy = function (e) {
        var i = t.__url2host(e);
        var n = e.indexOf("/cdl/cdallcookie") !== -1 ? "/cdl" : "";
        return a._$get("frames")[i] || i + n + "/res/nej_proxy_frame.html"
    };
    a._$getFlashProxy = function (e) {
        return a._$get("flashs")[t.__url2host(e)]
    };
    a._$get = function (e) {
        return t.__get(e)
    };
    if (!0) e.copy(e.P("nej.c"), a);
    return a
}, "81aff2a53e18d21e037ee9fc803fbf2b", "3e9a6ec79c9d6ea95cadac1b73f28b14");
I$("0710a240299ec13a855c50149e98077e", function (e, t, a, i, n, s) {
    var r = +new Date;
    a._$CODE_NOTFUND = 1e4 - r;
    a._$CODE_NOTASGN = 10001 - r;
    a._$CODE_NOTSPOT = 10002 - r;
    a._$CODE_TIMEOUT = 10003 - r;
    a._$CODE_ERREVAL = 10004 - r;
    a._$CODE_ERRCABK = 10005 - r;
    a._$CODE_ERRSERV = 10006 - r;
    a._$CODE_ERRABRT = 10007 - r;
    a._$HEAD_CT = "Content-Type";
    a._$HEAD_CT_PLAN = "text/plain";
    a._$HEAD_CT_FILE = "multipart/form-data";
    a._$HEAD_CT_FORM = "application/x-www-form-urlencoded";
    a._$BLANK_IMAGE = t._$get("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    if (!0) e.copy(e.P("nej.g"), a);
    return a
}, "81aff2a53e18d21e037ee9fc803fbf2b", "851b16fbc1f6b9d8d7b6c0901d3abccf");
I$("69f65528b15b06380ca9693205212ff7", function (e, t) {
    var a = {};
    t._$merge = function (t) {
        e._$merge(a, t)
    };
    t._$dump = function () {
        return a
    };
    t._$clear = function () {
        a = {}
    };
    return t
}, "6f5d8ca720f8058b197bc7c887a7de3a");
I$("6cfea62826577da9d3e121e58ef7b146", function (e, t, a, i, n, s) {
    a.__getElementById = function (e, t) {
        if (e.getElementById) return e.getElementById("" + t);
        try {
            return e.querySelector("#" + t)
        } catch (a) {
            return null
        }
    };
    a.__getChildren = function (t) {
        return e._$object2array(t.children)
    };
    a.__getElementsByClassName = function (t, a) {
        return e._$object2array(t.getElementsByClassName(a))
    };
    a.__nextSibling = function (e) {
        return e.nextElementSibling
    };
    a.__previousSibling = function (e) {
        return e.previousElementSibling
    };
    a.__dataset = function (e, t, a) {
        e.dataset = e.dataset || {};
        if (void 0 !== a) e.dataset[t] = a;
        return e.dataset[t]
    };
    a.__getAttribute = function (e, t) {
        if (e.getAttribute) return e.getAttribute(t)
    };
    a.__serializeDOM2XML = function (e) {
        return (new XMLSerializer).serializeToString(e) || ""
    };
    a.__parseDOMFromXML = function (e) {
        var t = (new DOMParser).parseFromString(e, "text/xml").documentElement;
        return "parsererror" == t.nodeName ? null : t
    };
    a.__fullScreen = function () {
    };
    a.__mask = function () {
    };
    a.__unmask = function () {
    };
    var r = t._$SUPPORT, o = t._$KERNEL.prefix;
    a.__isMatchedName = function () {
        var e = /^([a-z]+?)[A-Z]/;
        return function (t, a) {
            return !!(a[t] || e.test(t) && a[RegExp.$1])
        }
    }();
    a.__isNeedPrefixed = function () {
        var t = e._$array2object(["animation", "transform", "transition", "appearance", "userSelect", "box", "flex", "column"]);
        return function (e) {
            return a.__isMatchedName(e, t)
        }
    }();
    a.__fmtStyleName = function () {
        var e = /-([a-z])/g;
        return function (t) {
            t = t || "";
            return t.replace(e, function (e, t) {
                return t.toUpperCase()
            })
        }
    }();
    a.__getStyleName = function () {
        var e = /^[a-z]/, t = o.css || "";
        return function (i) {
            i = a.__fmtStyleName(i);
            if (!a.__isNeedPrefixed(i)) return i; else return t + i.replace(e, function (e) {
                return e.toUpperCase()
            })
        }
    }();
    a.__getStyleValue = function (e, t) {
        var i = window.getComputedStyle(e, null);
        return i[a.__getStyleName(t)] || ""
    };
    a.__setStyleValue = function (e, t, i) {
        e.style[a.__getStyleName(t)] = i
    };
    a.__getCSSMatrix = function () {
        var t = /\((.*?)\)/, a = /\s*,\s*/, i = ["CSSMatrix", o.clz + "CSSMatrix"],
            n = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var s = function (i) {
            var s = {};
            if (t.test(i || "")) e._$forEach(RegExp.$1.split(a), function (e, t) {
                s[n[t]] = e
            });
            return s
        };
        return function (t) {
            var a;
            e._$forIn(i, function (e) {
                if (this[e]) {
                    a = new this[e](t || "");
                    return !0
                }
            });
            return !a ? s(t) : a
        }
    }();
    a.__injectCSSText = function (e, t) {
        e.textContent = t
    };
    a.__processCSSText = function () {
        var t = /\$<(.*?)>/gi, n = /\{(.*?)\}/g, s = "-" + o.css.toLowerCase() + "-", c = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})",
            matrix: "matrix({m11},{m12},{m21},{m22},{m41},{m42})"
        }, l = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})",
            matrix: "matrix3d({m11},{m12},{m13},{m14},{m21},{m22},{m23},{m24},{m31},{m32},{m33|1},{m34},{m41},{m42},{m43},{m44|1})"
        };
        var d = function (e, t) {
            t = t || i;
            return e.replace(n, function (e, a) {
                var i = a.split("|");
                return t[i[0]] || i[1] || "0"
            })
        };
        a.__processTransformValue = function (e, t) {
            var a = (!r.css3d ? c : l)[e.trim()];
            if (a) return d(a, t); else return ""
        };
        return function (i) {
            if (!i.replace) return i; else return i.replace(t, function (t, i) {
                if ("vendor" === i) return s;
                var n = (i || "").split("|");
                return a.__processTransformValue(n[0], e._$query2object(n[1])) || t
            })
        }
    }();
    a.__appendCSSText = function (e, t) {
        var a = e.sheet, i = a.cssRules.length;
        a.insertRule(t, i);
        return a.cssRules[i]
    };
    a.__getClassList = function () {
        var e = /\s+/;
        return function (t) {
            t = (t || "").trim();
            return t ? t.split(e) : null
        }
    }();
    a.__processClassName = function (t, i, n) {
        if ("replace" != i) e._$forEach(a.__getClassList(n), function (e) {
            t.classList[i](e)
        }); else {
            a.__processClassName(t, "remove", n);
            a.__processClassName(t, "add", arguments[3])
        }
    };
    a.__hasClassName = function (t, i) {
        var n = t.classList;
        if (!n || !n.length) return !1; else return e._$indexOf(a.__getClassList(i), function (e) {
            return n.contains(e)
        }) >= 0
    };
    !function () {
        if (!r.css3d) {
            var e = a.__getCSSMatrix();
            r.css3d = !!e && null != e.m41
        }
    }();
    return a
}, "6f5d8ca720f8058b197bc7c887a7de3a", "b6a40003f918f58537b5b77b495b3193");
I$("40b0c68444eb3d16f95b35bc5691347c", function (e, t, a, i, n, s, r) {
    if ("trident" === t._$KERNEL.engine) I$("5259b51bd86f56b74cdc05ff971116c9", function () {
        e.__getChildren = e.__getChildren._$aop(function (e) {
            var t = e.args[0];
            if (!t.children) {
                e.stopped = !0;
                var i = [];
                a._$forEach(t.childNodes, function (e) {
                    if (1 == e.nodeType) i.push(e)
                });
                e.value = i
            }
        })
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "6.0") I$("e054163142269b7319cf172a6fc1f7a0", function () {
        e.__dataset = function () {
            var e = {}, t = "data-", i = /\-(.{1})/gi;
            var n = function (n) {
                var s = n.id;
                if (!e[s]) {
                    var r = {};
                    a._$forEach(n.attributes, function (e) {
                        var a = e.nodeName;
                        if (0 == a.indexOf(t)) {
                            a = a.replace(t, "").replace(i, function (e, t) {
                                return t.toUpperCase()
                            });
                            r[a] = e.nodeValue || ""
                        }
                    });
                    e[s] = r
                }
            };
            return function (t, a, i) {
                n(t);
                var s = e[t.id];
                if (void 0 !== i) s[a] = i;
                return s[a]
            }
        }()
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "5.0") I$("76f3e6d2db9dfbfdf256d481d734bc6e", function () {
        try {
            document.execCommand("BackgroundImageCache", !1, !0);
        } catch (t) {
        }
        e.__injectCSSText = function () {
            var t = 30;
            return e.__injectCSSText._$aop(function (e) {
                var a = e.args[0];
                if (a.styleSheet) {
                    e.stopped = !0;
                    var i = e.args[1];
                    var n = document.styleSheets;
                    if (n.length > t) {
                        a = n[t];
                        i = a.cssText + i
                    } else a = a.styleSheet;
                    a.cssText = i
                }
            })
        }();
        e.__getClassRegExp = function () {
            var e = /\s+/g;
            return function (t) {
                t = (t || "").trim().replace(e, "|");
                return !t ? null : new RegExp("(\\s|^)(?:" + t + ")(?=\\s|$)", "g")
            }
        }();
        e.__processClassName = function (t, a, i) {
            i = i || "";
            var n = t.className || "", s = e.__getClassRegExp(i + " " + (arguments[3] || ""));
            var r = n;
            if (s) r = r.replace(s, "");
            switch (a) {
                case"remove":
                    i = "";
                    break;
                case"replace":
                    i = arguments[3] || ""
            }
            r = (r + " " + i).trim();
            if (n != r) t.className = r
        };
        e.__hasClassName = function (t, a) {
            var i = e.__getClassRegExp(a);
            if (i) return i.test(t.className || ""); else return !1
        }
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "4.0") I$("897be51d58f41287f3bcd3ecc2912be0", function () {
        e.__getElementsByClassName = function (e, t) {
            var i = [], n = new RegExp("(\\s|^)(?:" + t.replace(/\s+/g, "|") + ")(?=\\s|$)");
            a._$forEach(e.getElementsByTagName("*"), function (e) {
                if (n.test(e.className)) i.push(e)
            });
            return i
        };
        e.__nextSibling = function (e) {
            for (; e = e.nextSibling;) if (1 == e.nodeType) return e
        };
        e.__previousSibling = function (e) {
            for (; e = e.previousSibling;) if (1 == e.nodeType) return e
        };
        e.__serializeDOM2XML = function (e) {
            return "xml" in e ? e.xml : e.outerHTML
        };
        e.__parseDOMFromXML = function () {
            var e = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
            var t = function () {
                try {
                    for (var t = 0, a = e.length; t < a; t++) return new ActiveXObject(e[t])
                } catch (i) {
                    return null
                }
            };
            return function (e) {
                var a = t();
                if (a && a.loadXML(e) && !a.parseError.errorCode) return a.documentElement; else return null
            }
        }();
        e.__getStyleValue = function () {
            var t = /opacity\s*=\s*([\d]+)/i;
            var a = {
                opacity: function (e) {
                    var a = 0;
                    if (t.test(e.filter || "")) a = parseFloat(RegExp.$1) / 100;
                    return a
                }
            };
            return function (t, i) {
                var n = t.currentStyle, s = a[i];
                if (s) return s(n); else return n[e.__getStyleName(i)] || ""
            }
        }();
        e.__setStyleValue = function () {
            var t = {
                opacity: function (e, t) {
                    e.style.filter = "alpha(opacity=" + 100 * t + ")"
                }
            };
            return function (a, i, n) {
                var s = t[i];
                if (s) s(a, n); else a.style[e.__getStyleName(i)] = n
            }
        }();
        e.__appendCSSText = function (e, t) {
            var a = e.styleSheet, i = a.rules.length, n = t.split(/[\{\}]/);
            a.addRule(n[0], n[1], i);
            return a.rules[i]
        }
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "3.0") I$("e9267ee226c6f84fa4a016efb32f97e6", function () {
        e.__getAttribute = e.__getAttribute._$aop(null, function (e) {
            var t = e.args;
            if ("maxlength" == t[1] && 2147483647 == e.value) e.value = null
        })
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "2.0") I$("48440845ed6194e7698f7bea599524b7", function () {
        e.__fullScreen = function (e, t) {
            var a = e.style;
            a.width = t.scrollWidth + "px";
            a.height = t.scrollHeight + "px"
        };
        e.__mask = function () {
            var t = {};
            e.__unmask = function (e) {
                var a = e.id, i = t[a];
                if (i) {
                    delete t[a];
                    i.parentNode.removeChild(i)
                }
            };
            return function (e) {
                var a = e.id, i = t[a];
                if (!i) {
                    i = document.createElement("iframe");
                    i.style.position = "absolute";
                    t[a] = i
                }
                var n = i.style, s = e.style;
                n.top = (parseInt(s.top) || 0) + "px";
                n.left = (parseInt(s.left) || 0) + "px";
                n.width = e.offsetWidth + "px";
                n.height = e.offsetHeight + "px";
                e.insertAdjacentElement("beforeBegin", i);
                return i
            }
        }()
    });
    if ("gecko" === t._$KERNEL.engine) I$("90d802bb4316bf93994c844d019bf3db", function () {
        if (!t._$SUPPORT.css3d) t._$SUPPORT.css3d = "MozPerspective" in document.body.style;
        if (!("insertAdjacentElement" in document.body)) HTMLElement.prototype.insertAdjacentElement = function (e, t) {
            if (e && t) switch (e) {
                case"beforeEnd":
                    this.appendChild(t);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(t, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(t) : this.insertBefore(t, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(t) : this.parentNode.insertBefore(t, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (e) {
                this.textContent = e
            })
        }
    });
    return e
}, "6cfea62826577da9d3e121e58ef7b146", "b6a40003f918f58537b5b77b495b3193", "6f5d8ca720f8058b197bc7c887a7de3a");
I$("b35210847be0ba21283cbada2712d274", function (e, t, a, i, n, s, r, o, c, l) {
    var d = {}, u, p = {}, f = {}, m = document.createDocumentFragment();
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    r.dump = function () {
        return {pool: p, dirty: f, fragment: m}
    };
    r._$id = d._$id = function (e) {
        e = r._$get(e);
        if (e) {
            var t = e.id ? e.id : "auto-id-" + a._$uniqueID();
            if (!("id" in e)) p[t] = e;
            e.id = t;
            if (!r._$get(t)) f[t] = e;
            return t
        }
    };
    r._$get = function (e) {
        try {
            var t = p["" + e]
        } catch (i) {
        }
        if (t) return t;
        if (!a._$isString(e) && !a._$isNumber(e)) return e;
        var t = document.getElementById(e);
        if (!t) t = s.__getElementById(m, e);
        if (t) delete f[e];
        return t || f[e]
    };
    r._$getChildren = d._$getChildren = function (e, t) {
        e = r._$get(e);
        if (!e) return null;
        var i = s.__getChildren(e);
        if (t) a._$reverseEach(i, function (e, a, i) {
            if (!r._$hasClassName(e, t)) i.splice(a, 1)
        });
        return i
    };
    r._$getParent = function () {
        var e;
        var t = function (t, a) {
            var i = t.split(":");
            if (i.length > 1) {
                if (!e) e = {
                    a: r._$attr, d: r._$dataset, c: r._$hasClassName, t: function (e, t) {
                        return (e.tagName || "").toLowerCase() === t
                    }
                };
                var n = e[i[0]];
                if (n) return !!n(a, i[1]);
                t = i[1]
            }
            return !!r._$attr(a, t) || !!r._$dataset(a, t) || r._$hasClassName(a, t)
        };
        return function (e, i) {
            e = r._$get(e);
            if (e) {
                if (!i) return e;
                if (a._$isString(i)) i = t._$bind(null, i);
                if (a._$isFunction(i)) {
                    for (; e;) {
                        if (i(e)) return e;
                        e = e.parentNode
                    }
                    return null
                }
                return e
            }
        }
    }();
    r._$getByClassName = d._$getByClassName = function (e, t) {
        e = r._$get(e);
        return !e ? null : s.__getElementsByClassName(e, t.trim())
    };
    r._$getSibling = d._$getSibling = function () {
        var e = function () {
            return !0
        };
        return function (t, i) {
            t = r._$get(t);
            if (!t) return null;
            var n = {backward: !1, filter: e};
            if (a._$isFunction(i)) n.filter = i; else n = a._$fetch(n, i);
            var o = n.backward ? s.__previousSibling : s.__nextSibling;
            for (; (t = o(t)) && !n.filter(t);) ;
            return t
        }
    }();
    r._$getScrollViewPort = function (e) {
        e = r._$get(e);
        if (e) {
            e = e.parentNode;
            for (; e && !(e.scrollHeight > e.clientHeight);) e = e.parentNode;
            if (e) return e
        }
        var t = document.body.scrollHeight, a = document.documentElement.scrollHeight;
        return a >= t ? document.documentElement : document.body
    };
    r._$getPageBox = function () {
        var e = function (e) {
            var t = 0;
            a._$forEach(e, function (e) {
                if (e) if (!t) t = e; else t = Math.min(t, e)
            });
            return t
        };
        var t = [{
            main: "scroll", sub: ["Top", "Left"], func: function (e, t, a) {
                return Math.max(t["scroll" + e], a["scroll" + e])
            }
        }, {
            main: "client", sub: ["Width", "Height"], func: function (t, a, i) {
                return e([a["client" + t], a["offset" + t], i["client" + t], i["offset" + t]])
            }
        }, {
            main: "scroll", sub: ["Width", "Height"], func: function (e, t, a, i) {
                return Math.max(i["client" + e], t["scroll" + e], a["scroll" + e])
            }
        }];
        return function (e) {
            var i = {}, n = e || document, s = n.body, r = n.documentElement;
            a._$forEach(t, function (e) {
                var t = e.main;
                a._$forEach(e.sub, function (a) {
                    i[t + a] = e.func(a, s, r, i)
                })
            });
            return i
        }
    }();
    r._$getMaxBox = function (e, t) {
        var i = a._$merge({}, e), n = t.width / t.height, s = e.width / e.height;
        if (n > s && e.height > t.height) {
            i.height = t.height;
            i.width = i.height * s
        }
        if (n < s && e.width > t.width) {
            i.width = t.width;
            i.height = i.width / s
        }
        return i
    };
    r._$scrollTo = d._$scrollTo = function (e) {
        var t = r._$offset(e);
        window.scrollTo(t.x, t.y)
    };
    r._$align = function () {
        var e = /\s+/;
        var t = {
            left: function () {
                return 0
            }, center: function (e, t) {
                return (e.width - t.width) / 2
            }, right: function (e, t) {
                return e.width - t.width
            }, top: function () {
                return 0
            }, middle: function (e, t) {
                return (e.height - t.height) / 2
            }, bottom: function (e, t) {
                return e.height - t.height
            }
        };
        return function (a, i, n) {
            var s = {}, r = (n || "").split(e), o = t[r[1]] || t.middle, c = t[r[0]] || t.center;
            s.top = o(a, i);
            s.left = c(a, i);
            return s
        }
    }();
    r._$offset = d._$offset = function () {
        var e = function (e) {
            return e == document.body || e == document.documentElement
        };
        return function (t, a) {
            t = r._$get(t);
            if (!t) return null;
            a = r._$get(a) || null;
            var i = t, n = {x: 0, y: 0}, s, o, c;
            for (; i && i != a;) {
                s = e(i) || i == t;
                o = s ? 0 : i.scrollLeft;
                c = parseInt(r._$getStyle(i, "borderLeftWidth")) || 0;
                n.x += i.offsetLeft + c - o;
                o = s ? 0 : i.scrollTop;
                c = parseInt(r._$getStyle(i, "borderTopWidth")) || 0;
                n.y += i.offsetTop + c - o;
                i = i.offsetParent
            }
            return n
        }
    }();
    r._$fullScreen = d._$fullScreen = function (e) {
        e = r._$get(e);
        if (e) s.__fullScreen(e, r._$getPageBox())
    };
    r._$mask = d._$mask = function (e) {
        e = r._$get(e);
        if (e) {
            r._$id(e);
            return s.__mask(e)
        }
        return null
    };
    r._$unmask = d._$unmask = function (e) {
        e = r._$get(e);
        if (e) {
            r._$id(e);
            return s.__unmask(e)
        }
        return null
    };
    r._$create = function () {
        var e = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (t, i, n) {
            var s = document.createElement(t), o = e[t.toLowerCase()];
            a._$merge(s, o);
            if (i) s.className = i;
            n = r._$get(n);
            if (n) n.appendChild(s); else if (!o) m.appendChild(s);
            return s
        }
    }();
    r._$createXFrame = function () {
        var e = function () {
            if (location.hostname == document.domain) return "about:blank"; else return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var t = function (e) {
            e = e.trim();
            if (!e) return r._$create("iframe");
            var t;
            try {
                t = document.createElement('<iframe name="' + e + '"></iframe>');
                t.frameBorder = 0
            } catch (a) {
                t = r._$create("iframe");
                t.name = e
            }
            return t
        };
        return function (n) {
            n = n || o;
            var s = t(n.name || "");
            if (!n.visible) s.style.display = "none";
            if (a._$isFunction(n.onload)) i._$addEvent(s, "load", function (e) {
                if (s.src) {
                    i._$clearEvent(s, "load");
                    n.onload(e)
                }
            });
            var c = n.parent;
            if (a._$isFunction(c)) try {
                c(s)
            } catch (l) {
            } else (r._$get(c) || document.body).appendChild(s);
            var d = n.src || e();
            window.setTimeout(function () {
                s.src = d
            }, 0);
            return s
        }
    }();
    r._$remove = d._$remove = function () {
        var e = {
            img: function (e) {
                e.src = t._$BLANK_IMAGE
            }, iframe: function (e) {
                e.src = "about:blank"
            }
        };
        var n = function (t, i) {
            if (i) {
                if (t.getElementsByTagName) a._$forEach(t.getElementsByTagName(i), n)
            } else {
                var s = (t.tagName || "").toLowerCase(), r = e[s];
                if (r) r(t)
            }
        };
        return function (e) {
            e = r._$get(e);
            if (e) {
                if (!arguments[1]) i._$clearEvent(e);
                n(e);
                n(e, "img");
                n(e, "iframe");
                if (e.parentNode) e.parentNode.removeChild(e)
            }
        }
    }();
    r._$removeByEC = d._$removeByEC = function (e) {
        e = r._$get(e);
        if (e) try {
            m.appendChild(e)
        } catch (t) {
            void 0
        }
    };
    r._$clearChildren = d._$clearChildren = function (e) {
        e = r._$get(e);
        if (e) a._$reverseEach(e.childNodes, function (e) {
            r._$remove(e)
        })
    };
    r._$wrapInline = d._$wrapInline = function () {
        var e, t = /\s+/;
        var a = function () {
            if (!e) {
                e = r._$pushCSSText(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
                r._$dumpCSSText()
            }
        };
        return function (i, n) {
            i = r._$get(i);
            if (!i) return null;
            a();
            n = n || o;
            var s = i.parentNode;
            if (!r._$hasClassName(s, e)) {
                s = r._$create("span", e);
                i.insertAdjacentElement("beforeBegin", s);
                s.appendChild(i)
            }
            var c = n.nid || "", l = r._$getByClassName(s, c || e + "-show")[0];
            if (!l) {
                var d = ((n.clazz || "") + " " + c).trim();
                d = e + "-show" + (!d ? "" : " ") + d;
                l = r._$create(n.tag || "span", d);
                s.appendChild(l)
            }
            var d = n.clazz;
            if (d) {
                d = (d || "").trim().split(t)[0] + "-parent";
                r._$addClassName(s, d)
            }
            return l
        }
    }();
    r._$dataset = d._$dataset = function (e, t, i) {
        var n = r._$id(e);
        if (!n) return null;
        if (a._$isString(t)) return s.__dataset(r._$get(e), t, i);
        if (a._$isObject(t)) {
            var o = {};
            a._$forIn(t, function (e, t) {
                o[t] = r._$dataset(n, t, e)
            });
            return o
        }
        if (a._$isArray(t)) {
            var o = {};
            a._$forEach(t, function (e) {
                o[e] = r._$dataset(n, e)
            });
            return o
        }
        return null
    };
    r._$attr = d._$attr = function (e, t, a) {
        e = r._$get(e);
        if (!e) return "";
        if (void 0 !== a && e.setAttribute) e.setAttribute(t, a);
        return s.__getAttribute(e, t)
    };
    r._$html2node = function () {
        var e = /<(.*?)(?=\s|>)/i, t = {li: "ul", tr: "tbody", td: "tr", th: "tr", option: "select"};
        return function (a) {
            var i;
            if (e.test(a)) i = t[(RegExp.$1 || "").toLowerCase()] || "";
            var n = r._$create(i || "div");
            n.innerHTML = a;
            var s = r._$getChildren(n);
            return s.length > 1 ? n : s[0]
        }
    }();
    r._$dom2xml = d._$dom2xml = function (e) {
        e = r._$get(e);
        return !e ? "" : s.__serializeDOM2XML(e)
    };
    r._$xml2dom = function (e) {
        e = (e || "").trim();
        return !e ? null : s.__parseDOMFromXML(e)
    };
    r._$dom2object = d._$dom2object = function (e, t) {
        t = t || {};
        e = r._$get(e);
        if (!e) return t;
        var i = e.tagName.toLowerCase(), n = r._$getChildren(e);
        if (!n || !n.length) {
            t[i] = e.textContent || e.text || "";
            return t
        }
        var s = {};
        t[i] = s;
        a._$forEach(n, function (e) {
            r._$dom2object(e, s)
        });
        return t
    };
    r._$xml2object = function (e) {
        try {
            return r._$dom2object(r._$xml2dom(e))
        } catch (t) {
            return null
        }
    };
    r._$text2type = function () {
        var e = {
            xml: function (e) {
                return r._$xml2dom(e)
            }, json: function (e) {
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return null
                }
            }, dft: function (e) {
                return e
            }
        };
        return function (t, a) {
            a = (a || "").toLowerCase();
            return (e[a] || e.dft)(t || "")
        }
    }();
    r._$style = d._$style = function (e, t) {
        e = r._$get(e);
        if (e) a._$loop(t, function (t, a) {
            r._$setStyle(e, a, t)
        })
    };
    r._$setStyle = d._$setStyle = function (e, t, a) {
        e = r._$get(e);
        if (e) s.__setStyleValue(e, t, s.__processCSSText(a))
    };
    r._$getStyle = d._$getStyle = function (e, t) {
        e = r._$get(e);
        return !e ? "" : s.__getStyleValue(e, t)
    };
    r._$addScript = function (e) {
        try {
            e = e.trim();
            if (e) return new Function(e)()
        } catch (t) {
            void 0;
            void 0
        }
    };
    r._$addStyle = function () {
        var e = /[\s\r\n]+/gi;
        return function (t) {
            t = (t || "").replace(e, " ").trim();
            var a = null;
            if (t) {
                a = r._$create("style");
                document.head.appendChild(a);
                s.__injectCSSText(a, s.__processCSSText(t))
            }
            return a
        }
    }();
    r._$pushCSSText = function () {
        var e = /#<(.*?)>/g, t = +new Date;
        return function (t, i) {
            if (!u) u = [];
            var n = "auto-" + a._$uniqueID(), s = a._$merge({uispace: n}, i);
            u.push(t.replace(e, function (e, t) {
                return s[t] || e
            }));
            return n
        }
    }();
    r._$dumpCSSText = function () {
        if (u) {
            r._$addStyle(u.join(" "));
            u = null
        }
    };
    r._$appendCSSText = d._$appendCSSText = function (e, t) {
        e = r._$get(e);
        return !e ? null : s.__appendCSSText(e, s.__processCSSText(t))
    };
    r._$addClassName = d._$addClassName = function (e, t) {
        if (t) {
            e = r._$get(e);
            if (e) s.__processClassName(e, "add", t)
        }
    };
    r._$delClassName = d._$delClassName = function (e, t) {
        e = r._$get(e);
        if (e) s.__processClassName(e, "remove", t)
    };
    r._$replaceClassName = d._$replaceClassName = function (e, t, a) {
        e = r._$get(e);
        if (e) s.__processClassName(e, "replace", t, a)
    };
    r._$hasClassName = d._$hasClassName = function (e, t) {
        e = r._$get(e);
        if (e) return s.__hasClassName(e, t); else return !1
    };
    r._$matrix = function (e) {
        e = (e || "").trim();
        return s.__getCSSMatrix(e)
    };
    r._$css3d = d._$css3d = function (e, t, a) {
        e = r._$get(e);
        if (e) {
            var i = s.__processTransformValue(t, a);
            if (i) r._$setStyle(e, "transform", i)
        }
    };
    n._$merge(d);
    if (!0) e.copy(e.P("nej.e"), r);
    return r
}, "81aff2a53e18d21e037ee9fc803fbf2b", "0710a240299ec13a855c50149e98077e", "6f5d8ca720f8058b197bc7c887a7de3a", "1876a96e5fed91c4cce05bda442b78ae", "69f65528b15b06380ca9693205212ff7", "40b0c68444eb3d16f95b35bc5691347c");
I$("d32b8e1f6a1599826625688ff4eeaa38", function (e, t, a, i, n, s) {
    a.__checkEvent = function () {
        var e = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, a = t._$KERNEL.prefix, i = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration",
            visibilitychange: "visibilitychange",
            fullscreenchange: "fullscreenchange"
        };
        var n = {
            enter: function (e, t, a) {
                var i = {type: "keypress"};
                if (a) i.handler = function (t) {
                    if (13 === t.keyCode) a.call(e, t)
                };
                return i
            }
        };
        var s = function (e) {
            return (a.evt || a.pro) + e
        };
        return function (t, a, r) {
            var o = {type: a, handler: r};
            if (!("on" + a in t)) {
                var c = e[a];
                if (c) {
                    o.type = c;
                    return o
                }
                var c = i[a];
                if (c) {
                    o.type = s(c);
                    return o
                }
                var l = n[a];
                if (l) return l.apply(null, arguments)
            }
            return o
        }
    }();
    a.__addEvent = function () {
        var e = arguments;
        if (!1) if (!("on" + e[1] in e[0])) void 0;
        e[0].addEventListener(e[1], e[2], e[3])
    };
    a.__delEvent = function () {
        var e = arguments;
        e[0].removeEventListener(e[1], e[2], e[3])
    };
    a.__dispatchEvent = function (t, a, i) {
        var n = document.createEvent("Event");
        n.initEvent(a, !0, !0);
        e._$merge(n, i);
        t.dispatchEvent(n)
    };
    return a
}, "6f5d8ca720f8058b197bc7c887a7de3a", "b6a40003f918f58537b5b77b495b3193");
I$("3207e910a172ea93a3d85acf7fbb8d7e", function (e, t, a, i, n, s, r) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release >= "6.0") I$("6c17c55c41bccd2a002b0e3adc2214f2", function () {
        t.__checkEvent = function () {
            var e = {
                touchcancel: "MSPointerCancel",
                touchstart: "MSPointerDown",
                touchmove: "MSPointerMove",
                touchend: "MSPointerUp",
                fullscreenchange: "MSFullscreenChange"
            };
            return t.__checkEvent._$aop(function (t) {
                var a = t.args;
                var i = e[a[1]];
                if (i) {
                    t.stopped = !0;
                    t.value = {type: i, handler: a[2]}
                }
            })
        }()
    });
    if ("trident" === e._$KERNEL.engine && "5.0" == e._$KERNEL.release) I$("729d669f63ab26d9ba4a1c298b91a398", function () {
        t.__checkEvent = function () {
            var e = {};
            var a = {
                input: function (t, a, i) {
                    if (!i) return {type: a}; else return {
                        type: a, handler: function (a) {
                            var n = t.id;
                            e[n] = t.value;
                            i.call(t, a)
                        }, link: [[document, "selectionchange", function (a) {
                            var n = t.id;
                            if (t == document.activeElement) {
                                if (e[n] !== t.value) {
                                    e[n] = t.value;
                                    i.call(t, a)
                                }
                            } else delete e[n]
                        }]]
                    }
                }
            };
            return t.__checkEvent._$aop(function (e) {
                var t = e.args;
                var i = a[t[1]];
                if (i) {
                    e.stopped = !0;
                    e.value = i.apply(null, t)
                }
            })
        }()
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release >= "5.0") I$("2317a8ba3527e201274dbcc645a221d9", function () {
        var e = {propertychange: 1};
        t.__addEvent = t.__addEvent._$aop(function (t) {
            var a = t.args;
            if (null != e[a[1]] && a[0].attachEvent) {
                t.stopped = !0;
                a[0].attachEvent("on" + a[1], a[2])
            }
        });
        t.__delEvent = t.__delEvent._$aop(function (t) {
            var a = t.args, i = e[a[1]];
            if (null != e[a[1]] && a[0].detachEvent) {
                t.stopped = !0;
                a[0].detachEvent("on" + a[1], a[2])
            }
        })
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "4.0") I$("150f423614def25a467eb0e716ee15e4", function () {
        t.__checkEvent = function () {
            var e = {};
            var a = {
                input: function (t, a, i) {
                    var n = {type: "propertychange"};
                    if (i) {
                        var s = t.id;
                        var r = function (a) {
                            if (t.value && !e["x-" + s]) {
                                e["x-" + s] = !0;
                                i.call(t, a)
                            }
                        };
                        n.handler = function (a) {
                            if ("value" in t && "value" == a.propertyName) {
                                if (e[s]) return;
                                e[s] = !0;
                                i.call(t, a);
                                delete e[s]
                            }
                        };
                        n.link = [[t, "keyup", r], [t, "mouseup", r], [t, "mousemove", r]];
                        n.destroy = function () {
                            delete e[s];
                            delete e["x-" + s]
                        }
                    }
                    return n
                }, load: function (e, t, a) {
                    var i = {type: "readystatechange"};
                    if (a) i.handler = function (t) {
                        if ("loaded" == e.readyState || "complete" == e.readyState) a.call(e, t)
                    };
                    return i
                }
            };
            return t.__checkEvent._$aop(function (e) {
                var t = e.args;
                var i = a[t[1]];
                if (i) {
                    e.stopped = !0;
                    e.value = i.apply(null, t)
                }
                if (t[2]) t[2] = t[2]._$bind(t[0])
            })
        }();
        t.__addEvent = function () {
            var e = arguments;
            if (!1) if (!("on" + e[1] in e[0])) void 0;
            e[0].attachEvent("on" + e[1], e[2])
        };
        t.__delEvent = function () {
            var e = arguments;
            e[0].detachEvent("on" + e[1], e[2])
        };
        t.__dispatchEvent = function () {
            var e = {propertychange: {propertyName: "value"}};
            return function (t, i, n) {
                var s = document.createEventObject();
                try {
                    a._$merge(s, e[i], n);
                    t.fireEvent("on" + i, s)
                } catch (r) {
                    void 0;
                    void 0
                }
            }
        }()
    });
    if ("gecko" === e._$KERNEL.engine) I$("cd99482edcc3c1c6b14bdbc4f49e482d", function () {
        t.__checkEvent = function () {
            var e = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
            var a = {
                mousewheel: function (e, t, a) {
                    var i = {type: "MozMousePixelScroll"};
                    if (a) i.handler = function (t) {
                        var i = t.detail;
                        t.wheelDelta = -i;
                        t.wheelDeltaY = -i;
                        t.wheelDeltaX = 0;
                        a.call(e, t)
                    };
                    return i
                }
            };
            return t.__checkEvent._$aop(function (t) {
                var i = t.args;
                if (e.test(i[1])) {
                    t.stopped = !0;
                    t.value = {type: i[1], handler: i[2]}
                }
                var n = a[i[1]];
                if (n) {
                    t.stopped = !0;
                    t.value = n.apply(null, i)
                }
            })
        }()
    });
    return t
}, "b6a40003f918f58537b5b77b495b3193", "d32b8e1f6a1599826625688ff4eeaa38", "6f5d8ca720f8058b197bc7c887a7de3a");
I$("1876a96e5fed91c4cce05bda442b78ae", function (e, t, a, i, n, s, r, o, c) {
    var l = {}, d = {};
    var u = function () {
        var e = /[\s,;]+/;
        return function (t) {
            var t = (t || "").trim().toLowerCase();
            return !t ? null : t.split(e)
        }
    }();
    var p = function (e, a, i) {
        var n = "page" + a;
        return null != e[n] ? e[n] : e["client" + a] + t._$getPageBox()["scroll" + i]
    };
    var f = function (e, t, a) {
        var i = "scroll" + a;
        _node = s._$getElement(e), _xret = p(e, t, a);
        for (; _node && _node != document.body && _node != document.documentElement;) {
            _xret += _node[i] || 0;
            _node = _node.parentNode
        }
        return _xret
    };
    var m = function (e, i, n, s) {
        var r = {};
        e = t._$get(e);
        if (!e) return null;
        t._$id(e);
        r.element = e;
        if (!a._$isFunction(n)) return null;
        r.handler = n;
        var i = u(i);
        if (!i) return null;
        r.type = i;
        r.capture = !!s;
        return r
    };
    s._$addEvent = d._$addEvent = function () {
        var e = function (e, a, i) {
            var n = t._$id(a.element), s = l[n] || {}, r = s[e] || [];
            r.push({
                type: i.type || e,
                func: i.handler || a.handler,
                sfun: a.handler,
                capt: a.capture,
                link: i.link,
                destroy: i.destroy
            });
            s[e] = r;
            l[n] = s
        };
        return function () {
            var i = m.apply(null, arguments);
            if (i) a._$forEach(i.type, function (s) {
                var r = n.__checkEvent(i.element, s, i.handler);
                n.__addEvent(i.element, r.type, r.handler, i.capture);
                a._$forIn(r.link, function (e) {
                    e[3] = !!e[3];
                    n.__addEvent.apply(n, e);
                    e[0] = t._$id(e[0])
                });
                e(s, i, r)
            })
        }
    }();
    s._$delEvent = d._$delEvent = function () {
        var e = function (e, i) {
            var n = t._$id(i.element), s = l[n] || r, o = s[e], c = a._$indexOf(o, function (e) {
                return e.sfun === i.handler && e.capt === i.capture
            });
            var d = null;
            if (c >= 0) {
                var u = o.splice(c, 1)[0];
                d = [[i.element, u.type, u.func, i.capture]];
                if (u.link) {
                    a._$forEach(u.link, function (e) {
                        e[0] = t._$get(e[0])
                    });
                    d.push.apply(d, u.link)
                }
                if (u.destroy) u.destroy();
                if (!o.length) delete s[e];
                if (!a._$hasProperty(s)) delete l[n]
            }
            return d
        };
        return function () {
            var t = m.apply(null, arguments);
            if (t) a._$forEach(t.type, function (i) {
                a._$forEach(e(i, t), function (e) {
                    n.__delEvent.apply(n, e)
                })
            })
        }
    }();
    s._$clearEvent = d._$clearEvent = function () {
        var e = function (e, t, i) {
            a._$reverseEach(i, function (a) {
                s._$delEvent(e, t, a.sfun, a.capt)
            })
        };
        return function (i, n) {
            var r = t._$id(i);
            if (r) {
                var o = l[r];
                if (o) {
                    n = u(n);
                    if (n) a._$forEach(n, function (t) {
                        e(r, t, o[t])
                    }); else a._$loop(o, function (e, t) {
                        s._$clearEvent(i, t)
                    })
                }
            }
        }
    }();
    s._$dispatchEvent = d._$dispatchEvent = function (e, i, s) {
        var e = t._$get(e);
        if (e) a._$forEach(u(i), function (t) {
            var a = n.__checkEvent(e, t);
            n.__dispatchEvent(e, a.type, s)
        })
    };
    s._$getElement = function (e) {
        if (!e) return null;
        var a = e.target || e.srcElement, i = arguments[1];
        return t._$getParent(a, i)
    };
    s._$stop = function (e) {
        s._$stopBubble(e);
        s._$stopDefault(e)
    };
    s._$stopBubble = function (e) {
        if (e) e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    };
    s._$stopDefault = function (e) {
        if (e) e.preventDefault ? e.preventDefault() : e.returnValue = !1
    };
    s._$page = function (e) {
        return {x: s._$pageX(e), y: s._$pageY(e)}
    };
    s._$pageX = function (e) {
        return f(e, "X", "Left")
    };
    s._$pageY = function (e) {
        return f(e, "Y", "Top")
    };
    s._$clientX = function (e) {
        return p(e, "X", "Left")
    };
    s._$clientY = function (e) {
        return p(e, "Y", "Top")
    };
    i._$merge(d);
    if (!0) e.copy(e.P("nej.v"), s);
    return s
}, "81aff2a53e18d21e037ee9fc803fbf2b", "b35210847be0ba21283cbada2712d274", "6f5d8ca720f8058b197bc7c887a7de3a", "69f65528b15b06380ca9693205212ff7", "3207e910a172ea93a3d85acf7fbb8d7e");
I$("2d7b7830023367208f24a9e991826992", function (e, t, a, i, n, s) {
    a._$klass = function () {
        var e = function () {
            return "[object Function]" !== i.toString.call(arguments[0])
        };
        var a = function (e, a) {
            for (; a;) {
                var i = a.prototype, n = t.__forIn(i, function (t) {
                    return e === t
                });
                if (null != n) return {name: n, klass: a};
                a = a._$super
            }
        };
        return function () {
            var i = function () {
                return this.__init.apply(this, arguments)
            };
            i.prototype.__init = n;
            i._$extend = function (i, n) {
                if (!e(i)) {
                    var s = this;
                    if (n !== !1) t.__forIn(i, function (t, a) {
                        if (!e(t)) s[a] = t
                    });
                    this._$super = i;
                    var r = function () {
                    };
                    r.prototype = i.prototype;
                    this.prototype = new r;
                    this.prototype.constructor = this;
                    var o = [], c = {};
                    var l = function (e, t) {
                        var i = a(e, t);
                        if (i) {
                            if (o[o.length - 1] != i.name) o.push(i.name);
                            c[i.name] = i.klass._$super;
                            return i.name
                        }
                    };
                    this.prototype.__super = function () {
                        var e = o[o.length - 1], t = arguments.callee.caller;
                        if (!e) e = l(t, this.constructor); else {
                            var a = c[e].prototype;
                            if (!a.hasOwnProperty(t) || t != a[e]) e = l(t, this.constructor); else c[e] = c[e]._$super
                        }
                        var i = c[e].prototype[e].apply(this, arguments);
                        if (e == o[o.length - 1]) {
                            o.pop();
                            delete c[e]
                        }
                        return i
                    };
                    if (!0) {
                        var d = this.prototype;
                        d.__supInit = d.__super;
                        d.__supReset = d.__super;
                        d.__supDestroy = d.__super;
                        d.__supInitNode = d.__super;
                        d.__supDoBuild = d.__super;
                        d.__supOnShow = d.__super;
                        d.__supOnHide = d.__super;
                        d.__supOnRefresh = d.__super;
                        this._$supro = i.prototype
                    }
                    return this.prototype
                }
            };
            return i
        }
    }();
    if (!0) {
        e.C = a._$klass;
        e.copy(this.NEJ, e)
    }
    return a
}, "81aff2a53e18d21e037ee9fc803fbf2b", "b1082ea271786111b0ecdbfafdd7ef90");
I$("ed0f456f3899038e08714242d5d8b800", function (e, t, a, i, n, s, r, o) {
    var c;
    n._$$EventTarget = t._$klass();
    c = n._$$EventTarget.prototype;
    n._$$EventTarget._$allocate = function (e) {
        e = e || {};
        var t = !!this.__pool && this.__pool.shift();
        if (!t) {
            t = new this(e);
            this.__inst__ = (this.__inst__ || 0) + 1
        }
        t.__reset(e);
        return t
    };
    n._$$EventTarget._$recycle = function () {
        var e = function (e, t, a) {
            e._$recycle();
            a.splice(t, 1)
        };
        return function (t) {
            if (!t) return null;
            if (!i._$isArray(t)) {
                if (!(t instanceof this)) {
                    var a = t.constructor;
                    if (a._$recycle) a._$recycle(t);
                    return null
                }
                if (t == this.__instance) delete this.__instance;
                if (t == this.__inctanse) delete this.__inctanse;
                t.__destroy();
                if (!this.__pool) this.__pool = [];
                if (i._$indexOf(this.__pool, t) < 0) this.__pool.push(t);
                return null
            }
            i._$reverseEach(t, e, this)
        }
    }();
    n._$$EventTarget._$getInstance = function (e) {
        if (!this.__instance) this.__instance = this._$allocate(e);
        return this.__instance
    };
    n._$$EventTarget._$getInstanceWithReset = function (e, t) {
        if (t && this.__inctanse) {
            this.__inctanse._$recycle();
            delete this.__inctanse
        }
        if (!this.__inctanse) this.__inctanse = this._$allocate(e); else this.__inctanse.__reset(e);
        return this.__inctanse
    };
    c.__init = function () {
        this.__events = {};
        this.__events_dom = {};
        this.id = i._$uniqueID()
    };
    c.__reset = function (e) {
        this._$batEvent(e)
    };
    c.__destroy = function () {
        this._$clearEvent();
        this.__doClearDomEvent()
    };
    c.__doInitDomEvent = function () {
        var e = function (e) {
            if (e && !(e.length < 3)) {
                this.__events_dom["de-" + i._$uniqueID()] = e;
                a._$addEvent.apply(a, e)
            }
        };
        return function (t) {
            i._$forEach(t, e, this)
        }
    }();
    c.__doClearDomEvent = function () {
        var e = function (e, t, i) {
            delete i[t];
            a._$delEvent.apply(a, e)
        };
        return function () {
            i._$loop(this.__events_dom, e)
        }
    }();
    c.__doClearComponent = function (e) {
        e = e || r;
        i._$loop(this, function (t, a, i) {
            if (t && t._$recycle && !e(t)) {
                delete i[a];
                t._$recycle()
            }
        })
    };
    c._$recycle = function () {
        this.constructor._$recycle(this)
    };
    c._$hasEvent = function (e) {
        var e = (e || "").toLowerCase(), t = this.__events[e];
        return !!t && t !== r
    };
    c._$delEvent = function (e, t) {
        var e = (e || "").toLowerCase(), a = this.__events[e];
        if (i._$isArray(a)) {
            i._$reverseEach(a, function (e, a, i) {
                if (e == t) i.splice(a, 1)
            });
            if (!a.length) delete this.__events[e]
        } else if (a == t) delete this.__events[e]
    };
    c._$setEvent = function (e, t) {
        if (e && i._$isFunction(t)) this.__events[e.toLowerCase()] = t
    };
    c._$batEvent = function () {
        var e = function (e, t) {
            this._$setEvent(t, e)
        };
        return function (t) {
            i._$loop(t, e, this)
        }
    }();
    c._$clearEvent = function () {
        var e = function (e, t) {
            this._$clearEvent(t)
        };
        return function (t) {
            var t = (t || "").toLowerCase();
            if (t) delete this.__events[t]; else i._$loop(this.__events, e, this)
        }
    }();
    c._$addEvent = function (e, t) {
        if (e && i._$isFunction(t)) {
            e = e.toLowerCase();
            var a = this.__events[e];
            if (a) {
                if (!i._$isArray(a)) this.__events[e] = [a];
                this.__events[e].push(t)
            } else this.__events[e] = t
        }
    };
    c._$dispatchEvent = function (e) {
        var e = (e || "").toLowerCase(), t = this.__events[e];
        if (t) {
            var a = o.slice.call(arguments, 1);
            if (i._$isArray(t)) i._$forEach(t, function (e) {
                if (!1) e.apply(this, a); else try {
                    e.apply(this, a)
                } catch (t) {
                    void 0;
                    void 0
                }
            }, this); else t.apply(this, a)
        }
    };
    if (!0) {
        n._$$Event = n._$$EventTarget;
        e.copy(e.P("nej.ut"), n)
    }
    return n
}, "81aff2a53e18d21e037ee9fc803fbf2b", "2d7b7830023367208f24a9e991826992", "1876a96e5fed91c4cce05bda442b78ae", "6f5d8ca720f8058b197bc7c887a7de3a");
I$("206f0e477cd3d8f883e140c120b2be76", function (e, t, a, i, n, s) {
    a._$cookie = function () {
        var e = new Date, a = +e, n = 864e5;
        var s = function (e) {
            var t = document.cookie, a = "\\b" + e + "=", i = t.search(a);
            if (i < 0) return "";
            i += a.length - 2;
            var n = t.indexOf(";", i);
            if (n < 0) n = t.length;
            return t.substring(i, n) || ""
        };
        return function (r, o) {
            if (void 0 === o) return s(r);
            if (t._$isString(o)) {
                if (o) {
                    document.cookie = r + "=" + o + ";";
                    return o
                }
                o = {expires: -100}
            }
            o = o || i;
            var c = r + "=" + (o.value || "") + ";";
            delete o.value;
            if (void 0 !== o.expires) {
                e.setTime(a + o.expires * n);
                o.expires = e.toGMTString()
            }
            c += t._$object2string(o, ";");
            document.cookie = c
        }
    }();
    if (!0) e.copy(e.P("nej.j"), a);
    return a
}, "81aff2a53e18d21e037ee9fc803fbf2b", "6f5d8ca720f8058b197bc7c887a7de3a");
!function () {
    var e = !0, t = null;
    !function (a) {
        function i(a) {
            if ("bug-string-char-index" == a) return "a" != "a"[0];
            var i, s = "json" == a;
            if (s || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || s) {
                    var r = l.stringify, c = "function" == typeof r && d;
                    if (c) {
                        (i = function () {
                            return 1
                        }).toJSON = i;
                        try {
                            c = "0" === r(0) && "0" === r(Number) && '""' == r(String) && r(n) === o && r(o) === o && r() === o && "1" === r(i) && "[1]" == r([i]) && "[null]" == r([o]) && "null" == r(t) && "[null,null,null]" == r([o, n, t]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == r({a: [i, e, !1, t, "\0\b\n\f\r\t"]}) && "1" === r(t, i) && "[\n 1,\n 2\n]" == r([1, 2], t, 1) && '"-271821-04-20T00:00:00.000Z"' == r(new Date((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == r(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == r(new Date((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == r(new Date((-1)))
                        } catch (u) {
                            c = !1
                        }
                    }
                    if (!s) return c
                }
                if ("json-parse" == a || s) {
                    a = l.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            i = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var p = 5 == i.a.length && 1 === i.a[0];
                            if (p) {
                                try {
                                    p = !a('"\t"')
                                } catch (f) {
                                }
                                if (p) try {
                                    p = 1 !== a("01")
                                } catch (m) {
                                }
                            }
                        }
                    } catch (h) {
                        p = !1
                    }
                    if (!s) return p
                }
                return c && p
            }
        }

        var n = {}.toString, s, r, o, c = "function" == typeof define && define.amd,
            l = "object" == typeof exports && exports;
        l || c ? "object" == typeof JSON && JSON ? l ? (l.stringify = JSON.stringify, l.parse = JSON.parse) : l = JSON : c && (l = a.JSON = {}) : l = a.JSON || (a.JSON = {});
        var d = new Date((-0xc782b5b800cec));
        try {
            d = -109252 == d.getUTCFullYear() && 0 === d.getUTCMonth() && 1 === d.getUTCDate() && 10 == d.getUTCHours() && 37 == d.getUTCMinutes() && 6 == d.getUTCSeconds() && 708 == d.getUTCMilliseconds()
        } catch (u) {
        }
        if (!i("json")) {
            var p = i("bug-string-char-index");
            if (!d) var f = Math.floor, m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                h = function (e, t) {
                    return m[t] + 365 * (e - 1970) + f((e - 1969 + (t = +(t > 1))) / 4) - f((e - 1901 + t) / 100) + f((e - 1601 + t) / 400)
                };
            if (!(s = {}.hasOwnProperty)) s = function (e) {
                var a = {}, i;
                if ((a.__proto__ = t, a.__proto__ = {toString: 1}, a).toString != n) s = function (e) {
                    var a = this.__proto__, e = e in (this.__proto__ = t, this);
                    this.__proto__ = a;
                    return e
                }; else {
                    i = a.constructor;
                    s = function (e) {
                        var t = (this.constructor || i).prototype;
                        return e in this && !(e in t && this[e] === t[e])
                    }
                }
                a = t;
                return s.call(this, e)
            };
            var v = {"boolean": 1, number: 1, string: 1, undefined: 1};
            r = function (e, a) {
                var i = 0, r, o, c;
                (r = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                o = new r;
                for (c in o) s.call(o, c) && i++;
                r = o = t;
                if (i) i = 2 == i ? function (e, t) {
                    var a = {}, i = "[object Function]" == n.call(e), r;
                    for (r in e) !(i && "prototype" == r) && !s.call(a, r) && (a[r] = 1) && s.call(e, r) && t(r)
                } : function (e, t) {
                    var a = "[object Function]" == n.call(e), i, r;
                    for (i in e) !(a && "prototype" == i) && s.call(e, i) && !(r = "constructor" === i) && t(i);
                    (r || s.call(e, i = "constructor")) && t(i)
                }; else {
                    o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    i = function (e, t) {
                        var a = "[object Function]" == n.call(e), i, r;
                        if (r = !a) if (r = "function" != typeof e.constructor) {
                            r = typeof e.hasOwnProperty;
                            r = "object" == r ? !!e.hasOwnProperty : !v[r]
                        }
                        r = r ? e.hasOwnProperty : s;
                        for (i in e) !(a && "prototype" == i) && r.call(e, i) && t(i);
                        for (a = o.length; i = o[--a]; r.call(e, i) && t(i)) ;
                    }
                }
                i(e, a)
            };
            if (!i("json-stringify")) {
                var g = {
                    92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n",
                    13: "\\r", 9: "\\t"
                }, b = function (e, t) {
                    return ("000000" + (t || 0)).slice(-e)
                }, _ = function (e) {
                    var t = '"', a = 0, i = e.length, n = i > 10 && p, s;
                    for (n && (s = e.split("")); a < i; a++) {
                        var r = e.charCodeAt(a);
                        switch (r) {
                            case 8:
                            case 9:
                            case 10:
                            case 12:
                            case 13:
                            case 34:
                            case 92:
                                t += g[r];
                                break;
                            default:
                                if (r < 32) {
                                    t += "\\u00" + b(2, r.toString(16));
                                    break
                                }
                                t += n ? s[a] : p ? e.charAt(a) : e[a]
                        }
                    }
                    return t + '"'
                }, x = function (a, i, c, l, d, u, p) {
                    var m = i[a], v, g, y, $, w, C, k, E, N;
                    try {
                        m = i[a]
                    } catch (T) {
                    }
                    if ("object" == typeof m && m) {
                        v = n.call(m);
                        if ("[object Date]" == v && !s.call(m, "toJSON")) if (m > -1 / 0 && m < 1 / 0) {
                            if (h) {
                                y = f(m / 864e5);
                                for (v = f(y / 365.2425) + 1970 - 1; h(v + 1, 0) <= y; v++) ;
                                for (g = f((y - h(v, 0)) / 30.42); h(v, g + 1) <= y; g++) ;
                                y = 1 + y - h(v, g);
                                $ = (m % 864e5 + 864e5) % 864e5;
                                w = f($ / 36e5) % 24;
                                C = f($ / 6e4) % 60;
                                k = f($ / 1e3) % 60;
                                $ %= 1e3
                            } else {
                                v = m.getUTCFullYear();
                                g = m.getUTCMonth();
                                y = m.getUTCDate();
                                w = m.getUTCHours();
                                C = m.getUTCMinutes();
                                k = m.getUTCSeconds();
                                $ = m.getUTCMilliseconds()
                            }
                            m = (v <= 0 || v >= 1e4 ? (v < 0 ? "-" : "+") + b(6, v < 0 ? -v : v) : b(4, v)) + "-" + b(2, g + 1) + "-" + b(2, y) + "T" + b(2, w) + ":" + b(2, C) + ":" + b(2, k) + "." + b(3, $) + "Z"
                        } else m = t; else if ("function" == typeof m.toJSON && ("[object Number]" != v && "[object String]" != v && "[object Array]" != v || s.call(m, "toJSON"))) m = m.toJSON(a)
                    }
                    c && (m = c.call(i, a, m));
                    if (m === t) return "null";
                    v = n.call(m);
                    if ("[object Boolean]" == v) return "" + m;
                    if ("[object Number]" == v) return m > -1 / 0 && m < 1 / 0 ? "" + m : "null";
                    if ("[object String]" == v) return _("" + m);
                    if ("object" == typeof m) {
                        for (a = p.length; a--;) if (p[a] === m) throw TypeError();
                        p.push(m);
                        E = [];
                        i = u;
                        u += d;
                        if ("[object Array]" == v) {
                            g = 0;
                            for (a = m.length; g < a; N || (N = e), g++) {
                                v = x(g, m, c, l, d, u, p);
                                E.push(v === o ? "null" : v)
                            }
                            a = N ? d ? "[\n" + u + E.join(",\n" + u) + "\n" + i + "]" : "[" + E.join(",") + "]" : "[]"
                        } else {
                            r(l || m, function (t) {
                                var a = x(t, m, c, l, d, u, p);
                                a !== o && E.push(_(t) + ":" + (d ? " " : "") + a);
                                N || (N = e)
                            });
                            a = N ? d ? "{\n" + u + E.join(",\n" + u) + "\n" + i + "}" : "{" + E.join(",") + "}" : "{}"
                        }
                        p.pop();
                        return a
                    }
                };
                l.stringify = function (e, t, a) {
                    var i, s, r;
                    if ("function" == typeof t || "object" == typeof t && t) if ("[object Function]" == n.call(t)) s = t; else if ("[object Array]" == n.call(t)) {
                        r = {};
                        for (var o = 0, c = t.length, l; o < c; l = t[o++], ("[object String]" == n.call(l) || "[object Number]" == n.call(l)) && (r[l] = 1)) ;
                    }
                    if (a) if ("[object Number]" == n.call(a)) {
                        if ((a -= a % 1) > 0) {
                            i = "";
                            for (a > 10 && (a = 10); i.length < a; i += " ") ;
                        }
                    } else "[object String]" == n.call(a) && (i = a.length <= 10 ? a : a.slice(0, 10));
                    return x("", (l = {}, l[""] = e, l), s, r, i, "", [])
                }
            }
            if (!i("json-parse")) {
                var y = String.fromCharCode,
                    $ = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, w, C,
                    k = function () {
                        w = C = t;
                        throw SyntaxError()
                    }, E = function () {
                        for (var a = C, i = a.length, n, s, r, o, c; w < i;) {
                            c = a.charCodeAt(w);
                            switch (c) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    w++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    n = p ? a.charAt(w) : a[w];
                                    w++;
                                    return n;
                                case 34:
                                    n = "@";
                                    for (w++; w < i;) {
                                        c = a.charCodeAt(w);
                                        if (c < 32) k(); else if (92 == c) {
                                            c = a.charCodeAt(++w);
                                            switch (c) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    n += $[c];
                                                    w++;
                                                    break;
                                                case 117:
                                                    s = ++w;
                                                    for (r = w + 4; w < r; w++) {
                                                        c = a.charCodeAt(w);
                                                        c >= 48 && c <= 57 || c >= 97 && c <= 102 || c >= 65 && c <= 70 || k()
                                                    }
                                                    n += y("0x" + a.slice(s, w));
                                                    break;
                                                default:
                                                    k()
                                            }
                                        } else {
                                            if (34 == c) break;
                                            c = a.charCodeAt(w);
                                            for (s = w; c >= 32 && 92 != c && 34 != c;) c = a.charCodeAt(++w);
                                            n += a.slice(s, w)
                                        }
                                    }
                                    if (34 == a.charCodeAt(w)) {
                                        w++;
                                        return n
                                    }
                                    k();
                                default:
                                    s = w;
                                    if (45 == c) {
                                        o = e;
                                        c = a.charCodeAt(++w)
                                    }
                                    if (c >= 48 && c <= 57) {
                                        for (48 == c && (c = a.charCodeAt(w + 1), c >= 48 && c <= 57) && k(); w < i && (c = a.charCodeAt(w), c >= 48 && c <= 57); w++) ;
                                        if (46 == a.charCodeAt(w)) {
                                            for (r = ++w; r < i && (c = a.charCodeAt(r), c >= 48 && c <= 57); r++) ;
                                            r == w && k();
                                            w = r
                                        }
                                        c = a.charCodeAt(w);
                                        if (101 == c || 69 == c) {
                                            c = a.charCodeAt(++w);
                                            (43 == c || 45 == c) && w++;
                                            for (r = w; r < i && (c = a.charCodeAt(r), c >= 48 && c <= 57); r++) ;
                                            r == w && k();
                                            w = r
                                        }
                                        return +a.slice(s, w)
                                    }
                                    o && k();
                                    if ("true" == a.slice(w, w + 4)) {
                                        w += 4;
                                        return e
                                    }
                                    if ("false" == a.slice(w, w + 5)) {
                                        w += 5;
                                        return !1
                                    }
                                    if ("null" == a.slice(w, w + 4)) {
                                        w += 4;
                                        return t
                                    }
                                    k()
                            }
                        }
                        return "$"
                    }, N = function (t) {
                        var a, i;
                        "$" == t && k();
                        if ("string" == typeof t) {
                            if ("@" == (p ? t.charAt(0) : t[0])) return t.slice(1);
                            if ("[" == t) {
                                for (a = []; ; i || (i = e)) {
                                    t = E();
                                    if ("]" == t) break;
                                    if (i) if ("," == t) {
                                        t = E();
                                        "]" == t && k()
                                    } else k();
                                    "," == t && k();
                                    a.push(N(t))
                                }
                                return a
                            }
                            if ("{" == t) {
                                for (a = {}; ; i || (i = e)) {
                                    t = E();
                                    if ("}" == t) break;
                                    if (i) if ("," == t) {
                                        t = E();
                                        "}" == t && k()
                                    } else k();
                                    ("," == t || "string" != typeof t || "@" != (p ? t.charAt(0) : t[0]) || ":" != E()) && k();
                                    a[t.slice(1)] = N(E())
                                }
                                return a
                            }
                            k()
                        }
                        return t
                    }, T = function (e, t, a) {
                        a = j(e, t, a);
                        a === o ? delete e[t] : e[t] = a
                    }, j = function (e, t, a) {
                        var i = e[t], s;
                        if ("object" == typeof i && i) if ("[object Array]" == n.call(i)) for (s = i.length; s--;) T(i, s, a); else r(i, function (e) {
                            T(i, e, a)
                        });
                        return a.call(e, t, i)
                    };
                l.parse = function (e, a) {
                    var i, s;
                    w = 0;
                    C = "" + e;
                    i = N(E());
                    "$" != E() && k();
                    w = C = t;
                    return a && "[object Function]" == n.call(a) ? j((s = {}, s[""] = i, s), "", a) : i
                }
            }
        }
        c && define(function () {
            return l
        })
    }(this);
    return JSON
}();
I$("13f4d30bccccecf1e4fabf28931ab89f", function (_m, _p, _o, _f, _r) {
    if ("trident" === _m._$KERNEL.engine && "2.0" == _m._$KERNEL.release) I$("39e3c868e73f5a4252ecd252426a1e7a", function () {
        JSON.parse = function () {
            var _isSafeJSON = function (e) {
                return !/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(e.replace(/"(\\.|[^"\\])*"/g, ""))
            };
            return JSON.parse._$aop(function (_event) {
                var _str = _event.args[0] || "";
                if (_str.length >= 5e5) {
                    _event.stopped = !0;
                    _event.value = eval("(" + _str + ")")
                }
            })
        }()
    });
    return JSON
}, "b6a40003f918f58537b5b77b495b3193");
I$("695d111e5b2a9157a79cffbd39b4943d", function () {
    return JSON
}, "13f4d30bccccecf1e4fabf28931ab89f");
I$("a14bfafc51d1e1290c6cec255af8c595", function (e, t, a, i, n, s, r, o, c, l, d, u) {
    var p;
    c._$$ProxyAbstract = e._$klass();
    p = c._$$ProxyAbstract._$extend(s._$$EventTarget);
    p.__reset = function (e) {
        this.__super(e);
        this.__request = t._$fetch({url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4}, e);
        var a = i._$get("csrf");
        if (a.cookie && a.param) {
            var s = encodeURIComponent(a.param) + "=" + encodeURIComponent(r._$cookie(a.cookie) || ""),
                o = this.__request.url.indexOf("?") < 0 ? "?" : "&";
            this.__request.url += o + s
        }
        this.__headers = e.headers || {};
        var c = this.__headers[n._$HEAD_CT];
        if (null == c) this.__headers[n._$HEAD_CT] = n._$HEAD_CT_FORM
    };
    p.__destroy = function () {
        this.__super();
        delete this.__rkey;
        delete this.__request;
        delete this.__headers
    };
    p.__onLoadRequest = function (e) {
        var t = e.status;
        if (t != -1) if (0 == ("" + t).indexOf("2")) this._$dispatchEvent("onload", a._$text2type(e.result, this.__request.type)); else this._$dispatchEvent("onerror", {
            data: t,
            result: e.result,
            code: n._$CODE_ERRSERV,
            message: "服务器返回异常状态[" + t + "]!"
        }); else this._$dispatchEvent("onerror", {code: n._$CODE_TIMEOUT, message: "请求[" + this.__request.url + "]超时！"})
    };
    p.__doSendRequest = d;
    p.__getResponseHeader = d;
    p.__onAbort = function () {
        this._$dispatchEvent("onerror", {code: n._$CODE_ERRABRT, message: "客户端终止请求"})
    };
    p._$send = function (e) {
        var t = this.__request.url;
        if (t) try {
            this.__request.data = null == e ? null : e;
            var a = {request: this.__request, headers: this.__headers};
            try {
                this._$dispatchEvent("onbeforerequest", a)
            } catch (i) {
                void 0;
                void 0
            }
            this.__doSendRequest(a)
        } catch (s) {
            this._$dispatchEvent("onerror", {code: n._$CODE_ERRSERV, message: "请求[" + t + "]失败:" + s.message + "！"})
        } else this._$dispatchEvent("onerror", {code: n._$CODE_NOTASGN, message: "没有输入请求地址！"})
    };
    p._$abort = d;
    p._$header = function (e) {
        if (!t._$isArray(e)) return this.__getResponseHeader(e) || "";
        var a = {};
        t._$forEach(e, function (e) {
            a[e] = this._$header(e)
        }, this);
        return a
    };
    return c
}, "2d7b7830023367208f24a9e991826992", "6f5d8ca720f8058b197bc7c887a7de3a", "b35210847be0ba21283cbada2712d274", "851b16fbc1f6b9d8d7b6c0901d3abccf", "0710a240299ec13a855c50149e98077e", "ed0f456f3899038e08714242d5d8b800", "206f0e477cd3d8f883e140c120b2be76", "695d111e5b2a9157a79cffbd39b4943d");
I$("8bbdce5f616d413db9ef9f06de5bc9ac", function (e, t, a, i) {
    e.__getXMLHttpRequest = function () {
        return new XMLHttpRequest
    };
    e.__hasAbortEvent = function () {
        return !0
    };
    return e
});
I$("fd8eb266bdb2e9fb480a656ed2e75478", function (e, t, a, i, n, s, r) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "5.0") I$("d61e2344cc30e218fa903b8717432979", function () {
        t.__hasAbortEvent = function () {
            return !1
        }
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "2.0") I$("be64cf2d3c5d7f3619c31edfc4d93102", function () {
        t.__getXMLHttpRequest = function () {
            var e = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
            return function () {
                var t = null;
                a._$forIn(e, function (e) {
                    try {
                        t = new ActiveXObject(e);
                        return !0
                    } catch (a) {
                    }
                });
                return t
            }
        }()
    });
    return t
}, "b6a40003f918f58537b5b77b495b3193", "8bbdce5f616d413db9ef9f06de5bc9ac", "6f5d8ca720f8058b197bc7c887a7de3a");
I$("9d99abe3866414a8bb7cb2a8264d073d", function (e, t, a, i, n, s, r, o, c) {
    var l;
    s._$$ProxyXHR = a._$klass();
    l = s._$$ProxyXHR._$extend(e._$$ProxyAbstract);
    l.__destroy = function () {
        this.__super();
        window.clearTimeout(this.__timer);
        delete this.__timer;
        try {
            this.__xhr.onreadystatechange = o;
            this.__xhr.abort()
        } catch (e) {
        }
        delete this.__xhr
    };
    l.__doSendRequest = function () {
        var e = function (e, t) {
            this.__xhr.setRequestHeader(t, e)
        };
        var a = function (e) {
            var a = [];
            t._$reverseEach(e.getElementsByTagName("input"), function (e) {
                if ("file" == e.type) if (e.name) {
                    if (e.files.length > 1) {
                        t._$forEach(e.files, function (t) {
                            a.push({name: e.name, file: t})
                        });
                        e.parentNode.removeChild(e)
                    }
                } else e.parentNode.removeChild(e)
            });
            return a.length > 0 ? a : null
        };
        return function (s) {
            var r = s.request, o = s.headers;
            this.__xhr = n.__getXMLHttpRequest();
            if (o[i._$HEAD_CT] === i._$HEAD_CT_FILE) {
                delete o[i._$HEAD_CT];
                this.__xhr.upload.onprogress = this.__onStateChange._$bind(this, 1);
                if ("FORM" === r.data.tagName) {
                    var c = a(r.data);
                    r.data = new FormData(r.data);
                    t._$forEach(c, function (e) {
                        var a = e.file;
                        r.data.append(e.name || a.name || "file-" + t._$uniqueID(), a)
                    })
                }
            }
            this.__xhr.onreadystatechange = this.__onStateChange._$bind(this, 2);
            this.__xhr.onabort = this.__onAbort._$bind(this);
            if (0 !== r.timeout) this.__timer = window.setTimeout(this.__onStateChange._$bind(this, 3), r.timeout);
            this.__xhr.open(r.method, r.url, !r.sync);
            t._$loop(o, e, this);
            if (this.__request.cookie && "withCredentials" in this.__xhr) this.__xhr.withCredentials = !0;
            if (!(o[i._$HEAD_CT] !== i._$HEAD_CT_FORM || window.FormData && r.data instanceof window.FormData)) r.data = t._$object2string(r.data, "&", !0);
            this.__xhr.send(r.data)
        }
    }();
    l.__onStateChange = function (e) {
        switch (e) {
            case 1:
                this._$dispatchEvent("onuploading", arguments[1]);
                break;
            case 2:
                if (4 == this.__xhr.readyState) this.__onLoadRequest({
                    status: this.__xhr.status,
                    result: this.__xhr.responseText || ""
                });
                break;
            case 3:
                this.__onLoadRequest({status: -1})
        }
    };
    l.__getResponseHeader = function (e) {
        return !this.__xhr ? "" : this.__xhr.getResponseHeader(e);
    };
    l._$abort = function () {
        if (!n.__hasAbortEvent()) this.__onAbort(); else {
            this.__xhr.onreadystatechange = o;
            this.__xhr.abort()
        }
    };
    return s
}, "a14bfafc51d1e1290c6cec255af8c595", "6f5d8ca720f8058b197bc7c887a7de3a", "2d7b7830023367208f24a9e991826992", "0710a240299ec13a855c50149e98077e", "fd8eb266bdb2e9fb480a656ed2e75478");
!function () {
    if ("undefined" == typeof TrimPath) {
        TrimPath = {};
        if ("undefined" != typeof exports) TrimPath = exports
    }
    var e = {}, t = [], a = /\s+/g, i = +new Date, n, s, r;
    var o = function () {
        var e = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, t = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;]/,
            a = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, i = /^new\s+/,
            n = /['"]/;
        var s = function (t) {
            if (!e.test(t)) {
                t = t.split(".")[0].trim();
                if (t && !n.test(t)) {
                    t = t.replace(i, "");
                    try {
                        if (a.test(t)) return;
                        r[t] = 1
                    } catch (s) {
                    }
                }
            }
        };
        return function (a) {
            a = a || "";
            if (a && !e.test(a)) {
                var i = a.split(t);
                for (var n = 0, r = i.length; n < r; n++) s(i[n])
            }
        }
    }();
    var c = function (e) {
        if ("in" != e[2]) throw"bad for loop statement: " + e.join(" ");
        t.push(e[1]);
        o(e[3]);
        return "var __HASH__" + e[1] + " = " + e[3] + "," + e[1] + "," + e[1] + "_count=0;if (!!__HASH__" + e[1] + ")for(var " + e[1] + "_key in __HASH__" + e[1] + "){" + e[1] + " = __HASH__" + e[1] + "[" + e[1] + "_key];if (typeof(" + e[1] + ')=="function") continue;' + e[1] + "_count++;"
    };
    var l = function () {
        var e = t[t.length - 1];
        return "}; if(!__HASH__" + e + "||!" + e + "_count){"
    };
    var d = function () {
        t.pop();
        return "};"
    };
    var u = function (e) {
        if ("as" != e[2]) throw"bad for list loop statement: " + e.join(" ");
        var t = e[1].split("..");
        if (t.length > 1) {
            o(t[0]);
            o(t[1]);
            return "for(var " + e[3] + "," + e[3] + "_index=0," + e[3] + "_beg=" + t[0] + "," + e[3] + "_end=" + t[1] + "," + e[3] + "_length=parseInt(" + e[3] + "_end-" + e[3] + "_beg+1);" + e[3] + "_index<" + e[3] + "_length;" + e[3] + "_index++){" + e[3] + " = " + e[3] + "_beg+" + e[3] + "_index;"
        } else {
            o(e[1]);
            return "for(var __LIST__" + e[3] + " = " + e[1] + "," + e[3] + "," + e[3] + "_index=0," + e[3] + "_length=__LIST__" + e[3] + ".length;" + e[3] + "_index<" + e[3] + "_length;" + e[3] + "_index++){" + e[3] + " = __LIST__" + e[3] + "[" + e[3] + "_index];"
        }
    };
    var p = function (e) {
        if (e && e.length) {
            e.shift();
            var t = e[0].split("(")[0];
            return "var " + t + " = function" + e.join("").replace(t, "") + "{var __OUT=[];"
        }
    };
    var f = function (e) {
        if (!e[1]) throw"bad include statement: " + e.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var m = function (e, t) {
        o(t.slice(1).join(" "));
        return e
    };
    var h = function (e) {
        return m("if(", e)
    };
    var v = function (e) {
        return m("}else if(", e)
    };
    var g = function (e) {
        return m("var ", e)
    };
    s = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: h, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: v, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: c, pmin: 3},
            forelse: {pfix: l},
            "/for": {pfix: d},
            list: {pfix: u, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: g, sfix: ";"},
            macro: {pfix: p},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    n = !0
                }
            },
            "/trim": {
                pfix: function () {
                    n = null
                }
            },
            inline: {pfix: f, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (e) {
                return (e || "") + "" + i
            }, "default": function (e, t) {
                return e || t
            }
        }
    };
    var b = function () {
        var e = /\\([\{\}])/g;
        return function (t, i) {
            t = t.replace(e, "$1");
            var n = t.slice(1, -1).split(a), r = s.def[n[0]];
            if (r) {
                if (r.pmin && r.pmin >= n.length) throw"Statement needs more parameters:" + t;
                i.push(r.pfix && "string" != typeof r.pfix ? r.pfix(n) : r.pfix || "");
                if (r.sfix) {
                    if (n.length <= 1) {
                        if (r.pdft) i.push(r.pdft)
                    } else for (var o = 1, c = n.length; o < c; o++) {
                        if (o > 1) i.push(" ");
                        i.push(n[o])
                    }
                    i.push(r.sfix)
                }
            } else x(t, i)
        }
    }();
    var _ = function (e, t) {
        if (e && e.length) if (1 != e.length) {
            var a = e.pop().split(":");
            t.push("__MDF['" + a.shift() + "'](");
            _(e, t);
            if (a.length > 0) {
                var i = a.join(":");
                o(i);
                t.push("," + i)
            }
            t.push(")")
        } else {
            var n = e.pop();
            o(n);
            t.push("" == n ? '""' : n)
        }
    };
    var x = function (e, t) {
        if (e) {
            var a = e.split("\n");
            if (a && a.length) for (var i = 0, s = a.length, r; i < s; i++) {
                r = a[i];
                if (n) {
                    r = r.trim();
                    if (!r) continue
                }
                y(r, t);
                if (n && i < s - 1) t.push("__OUT.push('\\n');")
            }
        }
    };
    var y = function () {
        var e = /\|\|/g, t = /#@@#/g;
        return function (a, i) {
            var n = "}", s = -1, r = a.length, o, c, l, d, u;
            for (; s + n.length < r;) {
                o = "${";
                c = "}";
                l = a.indexOf(o, s + n.length);
                if (l < 0) break;
                if ("%" == a.charAt(l + 2)) {
                    o = "${%";
                    c = "%}"
                }
                d = a.indexOf(c, l + o.length);
                if (d < 0) break;
                $(a.substring(s + n.length, l), i);
                u = a.substring(l + o.length, d).replace(e, "#@@#").split("|");
                for (var p = 0, f = u.length; p < f; u[p] = u[p].replace(t, "||"), p++) ;
                i.push("__OUT.push(");
                _(u, i);
                i.push(");");
                n = c;
                s = d
            }
            $(a.substring(s + n.length), i)
        }
    }();
    var $ = function () {
        var e = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var t = function (t) {
            return (t || "").replace(e.r, function (t) {
                return e[t] || t
            })
        };
        return function (e, a) {
            if (e) a.push("__OUT.push('" + t(e) + "');")
        }
    }();
    var w = function () {
        var e = /\t/g, t = /\n/g, i = /\r\n?/g;
        var n = function (e, t) {
            var a = e.indexOf("}", t + 1);
            for (; "\\" == e.charAt(a - 1);) a = e.indexOf("}", a + 1);
            return a
        };
        var o = function () {
            var e = [], t = arguments[0];
            for (var a in t) {
                a = (a || "").trim();
                if (a) e.push(a + "=$v('" + a + "')"); else ;
            }
            return e.length > 0 ? "var " + e.join(",") + ";" : ""
        };
        return function (c) {
            r = {};
            c = c.replace(i, "\n").replace(e, "    ");
            var l = ["if(!__CTX) return '';", ""];
            l.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            l.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            l.push("__OUT=[];");
            var d = -1, u = c.length;
            var p, f, m, h, v, g, _, y;
            for (; d + 1 < u;) {
                p = d;
                p = c.indexOf("{", p + 1);
                for (; p >= 0;) {
                    f = n(c, p);
                    m = c.substring(p, f);
                    h = m.match(s.blk);
                    if (h) {
                        v = h[1].length + 1;
                        g = c.indexOf("}", p + v);
                        if (g >= 0) {
                            _ = g - p - v <= 0 ? "{/" + h[1] + "}" : m.substr(v + 1);
                            v = c.indexOf(_, g + 1);
                            if (v >= 0) {
                                x(c.substring(d + 1, p), l);
                                y = c.substring(g + 1, v);
                                switch (h[1]) {
                                    case"cdata":
                                        $(y, l);
                                        break;
                                    case"minify":
                                        $(y.replace(t, " ").replace(a, " "), l);
                                        break;
                                    case"eval":
                                        if (y) l.push("__OUT.push((function(){" + y + "})());")
                                }
                                p = d = v + _.length - 1
                            }
                        }
                    } else if ("$" != c.charAt(p - 1) && "\\" != c.charAt(p - 1) && 0 == m.substr("/" == m.charAt(1) ? 2 : 1).search(s.tag)) break;
                    p = c.indexOf("{", p + 1)
                }
                if (p < 0) break;
                f = n(c, p);
                if (f < 0) break;
                x(c.substring(d + 1, p), l);
                b(c.substring(p, f + 1), l);
                d = f
            }
            x(c.substring(d + 1), l);
            l.push(';return __OUT.join("");');
            l[1] = o(r);
            r = null;
            return new Function("__CTX", "__MDF", l.join(""))
        }
    }();
    TrimPath.seed = function () {
        return i
    };
    TrimPath.merge = function () {
        var t = {};
        TrimPath.dump = function () {
            return {func: t, text: e}
        };
        return function (a, i, n) {
            try {
                i = i || {};
                if (!t[a] && !e[a]) return "";
                if (!t[a]) {
                    t[a] = w(e[a]);
                    delete e[a]
                }
                if (n) for (var r in s.ext) if (!n[r]) n[r] = s.ext[r];
                return t[a](i, n || s.ext)
            } catch (o) {
                return o.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var t = +new Date;
        return function (a, i) {
            if (!a) return "";
            i = i || "ck-" + t++;
            if (null != e[i]) {
                void 0;
                void 0;
                void 0
            }
            e[i] = a;
            return i
        }
    }()
}();
I$("84d040fb184ff3b696fe94c49f713bb1", function (e, t, a, i, n, s, r, o, c) {
    var l = {};
    s._$seed = TrimPath.seed;
    s._$get = function () {
        var e = function (e) {
            return !s._$getTextTemplate ? "" : s._$getTextTemplate(e)
        };
        return function (a, i, n) {
            i = i || {};
            i.inline = e;
            n = t._$merge({}, l, n);
            n.rand = t._$uniqueID;
            n.format = t._$format;
            n.escape = t._$escape;
            n.inline = e;
            return TrimPath.merge(a, i, n)
        }
    }();
    s._$add = function (e, t) {
        if (!e) return "";
        var i, n = a._$get(e);
        if (n) {
            i = n.id;
            e = n.value || n.innerText;
            if (!t) a._$remove(n)
        }
        return TrimPath.parse(e, i)
    };
    s._$addTemplate = function (e, t) {
        return TrimPath.parse(e, t)
    };
    s._$render = function (e, t, i, n) {
        e = a._$get(e);
        if (e) e.innerHTML = s._$get(t, i, n)
    };
    s._$extend = function (e) {
        t._$merge(l, e)
    };
    i._$merge({_$render: s._$render});
    if (!0) {
        var d = e.P("nej.e");
        d._$addHtmlTemplate = s._$add;
        d._$getHtmlTemplate = s._$get;
        d._$getHtmlTemplateSeed = s._$seed;
        d._$renderHtmlTemplate = s._$render;
        d._$registJSTExt = s._$extend
    }
    return s
}, "81aff2a53e18d21e037ee9fc803fbf2b", "6f5d8ca720f8058b197bc7c887a7de3a", "b35210847be0ba21283cbada2712d274", "69f65528b15b06380ca9693205212ff7", "264830afdf2c6eaf3a146a286558e501");
I$("e5dea9d01488e9d1277e74ee019773e2", function (e, t, a, i, n) {
    var s = this, r = e._$KERNEL.prefix.pro, o = e._$is("desktop") ? 80 : e._$is("ios") ? 50 : 30;
    t.__requestAnimationFrame = function () {
        var t = e._$is("android") ? null : s.requestAnimationFrame || s[r + "RequestAnimationFrame"];
        return function () {
            if (!t) t = function (e) {
                return window.setTimeout(function () {
                    try {
                        e(+new Date)
                    } catch (t) {
                    }
                }, 1e3 / o)
            };
            return t.apply(this, arguments)
        }
    }();
    t.__cancelAnimationFrame = function () {
        var t = e._$is("android") ? null : s.cancelAnimationFrame || s[r + "CancelAnimationFrame"];
        return function () {
            if (!t) t = function (e) {
                window.clearTimeout(e)
            };
            return t.apply(this, arguments)
        }
    }();
    return t
}, "b6a40003f918f58537b5b77b495b3193");
I$("6e2ca012ab65455f5873bd246662603d", function (e, t) {
    return e
}, "e5dea9d01488e9d1277e74ee019773e2", "b6a40003f918f58537b5b77b495b3193");
I$("a210e968ac9a4414be92514d457fff34", function (e, t, a, i, n, s) {
    a.requestAnimationFrame = function () {
        t.__requestAnimationFrame.apply(null, arguments)
    };
    a.cancelAnimationFrame = function () {
        t.__cancelAnimationFrame.apply(null, arguments)
    };
    if (!0) {
        if (!this.requestAnimationFrame) this.requestAnimationFrame = a.requestAnimationFrame;
        if (!this.cancelAnimationFrame) this.cancelAnimationFrame = a.cancelAnimationFrame
    }
    return a
}, "b6a40003f918f58537b5b77b495b3193", "6e2ca012ab65455f5873bd246662603d");
I$("18020ebdf7f52c2a024b0d643ccb9c1c", function (e, t, a, i, n) {
    t.__canFlashEventBubble = function (e) {
        return "transparent" != (e || "").toLowerCase()
    };
    return t
}, "b6a40003f918f58537b5b77b495b3193");
I$("4066cbcdde14984f1a0b639a2414d503", function (e, t, a, i, n, s) {
    if ("trident" === t._$KERNEL.engine) I$("84d5a5244ed399d046646765bef594fc", function () {
        e.__canFlashEventBubble = function (e) {
            return !0
        }
    });
    if ("webkit" === t._$KERNEL.engine) I$("48eb70182b7dbcfe04b30072223f4597", function () {
        e.__canFlashEventBubble = function (e) {
            return !0
        }
    });
    return e
}, "18020ebdf7f52c2a024b0d643ccb9c1c", "b6a40003f918f58537b5b77b495b3193");
I$("03388d2474e68c5dac147b6b09abe478", '{var hide  = defined("hidden")&&!!hidden}\n{var param = defined("params")&&params||NEJ.O}\n{var width = !hide?width:"1px",height = !hide?height:"1px"}\n{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}\n<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"\n        codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"\n        width = "${width|default:"100px"}"\n        height = "${height|default:"100px"}" id="${id}">\n    <param value="${src}" name="movie">\n    {for x in param}\n    <param value="${x}" name="${x_key}"/>\n    {/for}\n    <embed src="${src}" name="${id}"\n           width="${width|default:"100px"}"\n           height="${height|default:"100px"}"\n           pluginspage="http://www.adobe.com/go/getflashplayer"\n           type="application/x-shockwave-flash"\n           {for x in param}${x_key}="${x}" {/for}></embed>\n</object>\n{if hide}</div>{/if}');
I$("c65bd2a498d6ce6190758edc2f86c239", function (e, t, a, i, n, s, r, o, c, l, d, u) {
    var p = n._$add(o);
    c._$flash = function () {
        var o = {}, c, l = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (e) {
            var t = decodeURIComponent(e.target), a = e.type.toLowerCase();
            var i = o[t + "-tgt"];
            if (i && l.test(a)) u(i, e);
            var n = o[t + "-on" + a];
            if (n) {
                var s = "";
                try {
                    s = n(e)
                } catch (r) {
                }
                return s
            }
        };
        var d = function (e) {
            c = document.title;
            var a = t._$get(e.parent) || document.body, i = n._$get(p, e);
            a.insertAdjacentHTML(!e.hidden ? "beforeEnd" : "afterBegin", i)
        };
        var u = function (e, t) {
            var i = t.type.toLowerCase();
            s.requestAnimationFrame(function () {
                a._$dispatchEvent(e, i)
            })
        };
        var f = function (e) {
            return !!e && !!e.inited && !!e.inited()
        };
        var m = function (e) {
            var a = [document.embeds[e], t._$get(e), document[e], window[e]], n = i._$forIn(a, f), s = a[n],
                r = e + "-count";
            o[r]++;
            if (!(s || o[r] > 100)) window.setTimeout(m._$bind(null, e), 300); else {
                if (c) {
                    document.title = c;
                    c = null
                }
                o[e](s);
                delete o[e];
                delete o[r]
            }
        };
        var h = function (e) {
            var a = e.id, n = e.params;
            if (!n) {
                n = {};
                e.params = n
            }
            var s = n.flashvars || "";
            s += (!s ? "" : "&") + ("id=" + a);
            if (!e.hidden && (e.target || r.__canFlashEventBubble(n.wmode))) {
                var c = t._$id(e.target) || t._$id(e.parent);
                o[a + "-tgt"] = c
            }
            n.flashvars = s;
            i._$loop(e, function (e, t) {
                if (i._$isFunction(e) && "onready" != t) o[a + "-" + t] = e
            })
        };
        return function (t) {
            t = e.X({}, t);
            if (t.src) {
                var a = "_" + i._$uniqueID();
                t.id = a;
                h(t);
                d(t);
                if (t.onready) {
                    o[a] = t.onready;
                    o[a + "-count"] = 0;
                    m(a)
                }
            }
        }
    }();
    if (!0) e.copy(e.P("nej.e"), c);
    return c
}, "81aff2a53e18d21e037ee9fc803fbf2b", "b35210847be0ba21283cbada2712d274", "1876a96e5fed91c4cce05bda442b78ae", "6f5d8ca720f8058b197bc7c887a7de3a", "84d040fb184ff3b696fe94c49f713bb1", "a210e968ac9a4414be92514d457fff34", "4066cbcdde14984f1a0b639a2414d503", "03388d2474e68c5dac147b6b09abe478");
I$("415520e09ca80cb2bda32fb30490a224", function (e, t, a, i, n, s, r, o, c) {
    var l, d = {}, u = i._$uniqueID();
    this["ld" + u] = function (e, t) {
        var a = d[e];
        if (a) {
            delete d[e];
            a.__onLoadRequest({status: 200, result: t})
        }
    };
    this["er" + u] = function (e, t) {
        var a = d[e];
        if (a) {
            delete d[e];
            a.__onLoadRequest({status: t || 0})
        }
    };
    s._$$ProxyFlash = t._$klass();
    l = s._$$ProxyFlash._$extend(e._$$ProxyAbstract);
    l.__doSendRequest = function (e) {
        var t = d.flash;
        if (!i._$isArray(t)) if (t) {
            this.__rkey = i._$uniqueID();
            d[this.__rkey] = this;
            var s = i._$fetch({url: "", data: null, method: "GET"}, e.request);
            s.key = this.__rkey;
            s.headers = e.headers;
            s.onerror = "cb.er" + u;
            s.onloaded = "cb.ld" + u;
            var r = a._$getFlashProxy(s.url);
            if (r) s.policyURL = r;
            t.request(s)
        } else {
            d.flash = [this.__doSendRequest._$bind(this, e)];
            n._$flash({
                hidden: !0, src: a._$get("ajax.swf"), onready: function (e) {
                    if (e) {
                        var t = d.flash;
                        d.flash = e;
                        i._$reverseEach(t, function (e, t, a) {
                            try {
                                e()
                            } catch (i) {
                            }
                        })
                    }
                }
            })
        } else t.push(this.__doSendRequest._$bind(this, e))
    };
    l._$abort = function () {
        delete d[this.__rkey];
        this.__onAbort()
    };
    return s
}, "a14bfafc51d1e1290c6cec255af8c595", "2d7b7830023367208f24a9e991826992", "851b16fbc1f6b9d8d7b6c0901d3abccf", "6f5d8ca720f8058b197bc7c887a7de3a", "c65bd2a498d6ce6190758edc2f86c239");
I$("c887ab94233e7d133811256ea7897907", function (e, t, a, i) {
    e.__formatOrigin = function () {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (t) {
            t = t || "";
            if (e.test(t)) return RegExp.$1; else return "*"
        }
    }();
    e.__formatPassData = function (e) {
        return e
    };
    e.__postMessage = function (a, i) {
        if (a.postMessage) {
            i = i || t;
            a.postMessage(e.__formatPassData(i.data), e.__formatOrigin(i.origin))
        }
    };
    return e
});
I$("881319b253a2dd3553e93ce64a055e7e", function (e, t, a, i, n, s, r, o, c, l) {
    var d;
    r._$$CustomEvent = t._$klass();
    d = r._$$CustomEvent._$extend(s._$$EventTarget);
    d.__init = function () {
        this.__cache = {};
        this.__super()
    };
    d.__reset = function (e) {
        this.__super(e);
        this.__element = a._$get(e.element) || window;
        this.__doEventInit(e.event);
        this.__doEventAPIEnhance();
        this._$dispatchEvent("oninit")
    };
    d.__destroy = function () {
        var e = function (e, t, a) {
            if (!n._$isArray(e)) n._$safeDelete(this.__element, t);
            delete a[t]
        };
        return function () {
            this.__super();
            n._$loop(this.__cache, e, this);
            delete this.__element
        }
    }();
    d.__isDelegate = function (e, t) {
        e = a._$get(e);
        return !(e !== this.__element || t && !this.__cache["on" + t])
    };
    d.__doEventInit = function (e) {
        if (!n._$isString(e)) {
            if (n._$isArray(e)) n._$forEach(e, this.__doEventInit, this)
        } else {
            var t = "on" + e;
            if (!this.__cache[t]) this.__cache[t] = this.__doEventDispatch._$bind(this, e);
            this.__doEventBind(e)
        }
    };
    d.__doEventBind = function (e) {
        var t = "on" + e, a = this.__element[t], i = this.__cache[t];
        if (a != i) {
            this.__doEventDelete(e);
            if (a && a != c) this.__doEventAdd(e, a);
            this.__element[t] = i
        }
    };
    d.__doEventAdd = function (e, t, a) {
        var i = this.__cache[e];
        if (!i) {
            i = [];
            this.__cache[e] = i
        }
        if (n._$isFunction(t)) !a ? i.push(t) : i.unshift(t)
    };
    d.__doEventDelete = function (e, t) {
        var a = this.__cache[e];
        if (a && a.length) if (t) n._$reverseEach(a, function (e, a, i) {
            if (t === e) {
                i.splice(a, 1);
                return !0
            }
        }); else delete this.__cache[e]
    };
    d.__doEventDispatch = function (e, t) {
        t = t || {noargs: !0};
        if (t == o) t = {};
        t.type = e;
        this._$dispatchEvent("ondispatch", t);
        if (!t.stopped) n._$forEach(this.__cache[e], function (e) {
            if (!1) e(t); else try {
                e(t)
            } catch (a) {
                void 0;
                void 0
            }
        })
    };
    d.__doEventAPIEnhance = function () {
        var t = function (e) {
            var t = e.args, a = t[1].toLowerCase();
            if (this.__isDelegate(t[0], a)) {
                e.stopped = !0;
                this.__doEventBind(a);
                this.__doEventAdd(a, t[2], t[3]);
                this._$dispatchEvent("oneventadd", {type: a, listener: t[2]})
            }
        };
        var a = function (e) {
            var t = e.args, a = t[1].toLowerCase();
            if (this.__isDelegate(t[0], a)) {
                e.stopped = !0;
                this.__doEventDelete(a, t[2])
            }
        };
        var s = function (e) {
            var t = e.args, a = (t[1] || "").toLowerCase();
            if (this.__isDelegate(t[0])) {
                if (a) {
                    this.__doEventDelete(a);
                    return
                }
                n._$loop(this.__cache, function (e, t) {
                    if (n._$isArray(e)) this.__doEventDelete(t)
                }, this)
            }
        };
        var r = function (e) {
            var t = e.args, a = t[1].toLowerCase();
            if (this.__isDelegate(t[0], a)) {
                e.stopped = !0;
                t[0]["on" + a].apply(t[0], t.slice(2))
            }
        };
        return function () {
            if (!this.__enhanced) {
                this.__enhanced = !0;
                i._$addEvent = i._$addEvent._$aop(t._$bind(this));
                i._$delEvent = i._$delEvent._$aop(a._$bind(this));
                i._$clearEvent = i._$clearEvent._$aop(s._$bind(this));
                i._$dispatchEvent = i._$dispatchEvent._$aop(r._$bind(this));
                if (!0) e.copy(e.P("nej.v"), i)
            }
        }
    }();
    if (!0) e.copy(e.P("nej.ut"), r);
    return r
}, "81aff2a53e18d21e037ee9fc803fbf2b", "2d7b7830023367208f24a9e991826992", "b35210847be0ba21283cbada2712d274", "1876a96e5fed91c4cce05bda442b78ae", "6f5d8ca720f8058b197bc7c887a7de3a", "ed0f456f3899038e08714242d5d8b800");
I$("9b51fae42374d43a397813935f2b3b3e", function (e, t, a, i, n, s, r, o) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release >= "4.0" && e._$KERNEL.release <= "5.0") I$("47a713b983c2514fca2fbb35184a46fc", function () {
        t.__formatPassData = function (e) {
            return JSON.stringify(e)
        }
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "3.0") I$("6ecc1df6e6b49e423d25fd4812a438e5", function (e) {
        var n = "MSG|", r = [];
        var o = function () {
            var e = unescape(window.name || "").trim();
            if (e && 0 == e.indexOf(n)) {
                window.name = "";
                var s = a._$string2object(e.replace(n, ""), "|"), r = (s.origin || "").toLowerCase();
                if (!r || "*" == r || 0 == location.href.toLowerCase().indexOf(r)) i._$dispatchEvent(window, "message", {
                    data: JSON.parse(s.data || "null"),
                    source: window.frames[s.self] || s.self,
                    origin: t.__formatOrigin(s.ref || document.referrer)
                })
            }
        };
        var c = function () {
            var e;
            var t = function (t, i, n) {
                if (a._$indexOf(e, t.w) < 0) {
                    e.push(t.w);
                    n.splice(i, 1);
                    t.w.name = t.d
                }
            };
            return function () {
                e = [];
                a._$reverseEach(r, t);
                e = null
            }
        }();
        t.__postMessage = function () {
            var e = function (e) {
                var t = {};
                e = e || s;
                t.origin = e.origin || "";
                t.ref = location.href;
                t.self = e.source;
                t.data = JSON.stringify(e.data);
                return n + a._$object2string(t, "|", !0)
            };
            return function (t, a) {
                r.unshift({w: t, d: escape(e(a))})
            }
        }();
        e._$$CustomEvent._$allocate({element: window, event: "message"});
        setInterval(c, 100);
        setInterval(o, 20)
    }, "881319b253a2dd3553e93ce64a055e7e", "695d111e5b2a9157a79cffbd39b4943d");
    return t
}, "b6a40003f918f58537b5b77b495b3193", "c887ab94233e7d133811256ea7897907", "6f5d8ca720f8058b197bc7c887a7de3a", "1876a96e5fed91c4cce05bda442b78ae");
I$("0e8e958123485f754e931caaa6e89ab1", function (e, t, a, i, n, s, r, o) {
    n._$postMessage = function () {
        var e = window.name || "_parent", n = {_top: window.top, _self: window, _parent: window.parent};
        return function (r, o) {
            if (t._$isString(r)) {
                r = n[r] || window.frames[r] || (a._$get(r) || s).contentWindow;
                if (!r) return
            }
            var c = t._$fetch({data: null, origin: "*", source: e}, o);
            i.__postMessage(r, c)
        }
    }();
    if (!0) e.copy(e.P("nej.j"), n);
    return n
}, "81aff2a53e18d21e037ee9fc803fbf2b", "6f5d8ca720f8058b197bc7c887a7de3a", "b35210847be0ba21283cbada2712d274", "9b51fae42374d43a397813935f2b3b3e");
I$("6dace71511fae5b88fcc5b103ea54963", function (e, t, a, i, n, s, r, o, c, l, d) {
    var u, p = {};
    o._$$ProxyFrame = a._$klass();
    u = o._$$ProxyFrame._$extend(e._$$ProxyAbstract);
    u.__init = function () {
        var e = "NEJ-AJAX-DATA:", t = !1;
        var a = function (t) {
            var a = t.data;
            if (0 == a.indexOf(e)) {
                a = JSON.parse(a.replace(e, ""));
                var i = p[a.key];
                if (i) {
                    delete p[a.key];
                    a.result = decodeURIComponent(a.result || "");
                    i.__onLoadRequest(a)
                }
            }
        };
        var n = function () {
            if (!t) {
                t = !0;
                i._$addEvent(window, "message", a)
            }
        };
        return function () {
            this.__super();
            n()
        }
    }();
    u.__doSendRequest = function (e) {
        var a = e.request, o = n._$getFrameProxy(a.url), c = p[o];
        if (!t._$isArray(c)) if (c) {
            this.__rkey = t._$uniqueID();
            p[this.__rkey] = this;
            var l = t._$fetch({url: "", data: null, timeout: 0, method: "GET"}, a);
            l.key = this.__rkey;
            l.headers = e.headers;
            r._$postMessage(p[o], {data: l})
        } else {
            p[o] = [this.__doSendRequest._$bind(this, e)];
            s._$createXFrame({
                src: o, visible: !1, onload: function (e) {
                    var a = p[o];
                    p[o] = i._$getElement(e).contentWindow;
                    t._$reverseEach(a, function (e) {
                        try {
                            e()
                        } catch (t) {
                        }
                    })
                }
            })
        } else c.push(this.__doSendRequest._$bind(this, e))
    };
    u._$abort = function () {
        delete p[this.__rkey];
        this.__onAbort()
    };
    return o
}, "a14bfafc51d1e1290c6cec255af8c595", "6f5d8ca720f8058b197bc7c887a7de3a", "2d7b7830023367208f24a9e991826992", "1876a96e5fed91c4cce05bda442b78ae", "851b16fbc1f6b9d8d7b6c0901d3abccf", "b35210847be0ba21283cbada2712d274", "0e8e958123485f754e931caaa6e89ab1");
I$("a04515740a80a645cd380b7e57d4f999", function (e, t, a, i, n, s, r, o, c, l, d, u) {
    var p, f = {}, m = "NEJ-UPLOAD-RESULT:";
    c._$$ProxyUpload = t._$klass();
    p = c._$$ProxyUpload._$extend(e._$$ProxyAbstract);
    p.__init = function () {
        var e = !1;
        var t = function (e) {
            var t = e.data;
            if (0 == t.indexOf(m)) {
                t = JSON.parse(t.replace(m, ""));
                var a = f[t.key];
                if (a) {
                    delete f[t.key];
                    a.__onLoadRequest(decodeURIComponent(t.result))
                }
            }
        };
        var a = function () {
            if (!e) {
                e = !0;
                i._$addEvent(window, "message", t)
            }
        };
        return function () {
            this.__super();
            a()
        }
    }();
    p.__destroy = function () {
        this.__super();
        n._$remove(this.__frame);
        delete this.__frame;
        window.clearTimeout(this.__timer);
        delete this.__timer
    };
    p.__onLoadRequest = function (e) {
        try {
            var t = n._$text2type(e, this.__request.type);
            this._$dispatchEvent("onload", t)
        } catch (a) {
            this._$dispatchEvent("onerror", {code: s._$CODE_ERREVAL, message: e})
        }
    };
    p.__doSendRequest = function () {
        var e = function () {
            var e, t;
            try {
                var e = this.__frame.contentWindow.document.body, t = (e.innerText || e.textContent || "").trim();
                if (t.indexOf(m) >= 0 || e.innerHTML.indexOf(m) >= 0) return
            } catch (a) {
                return
            }
            this.__onLoadRequest(t)
        };
        var t = function (e, a, i) {
            r._$request(e, {
                type: "json", method: "POST", cookie: i, mode: parseInt(a) || 0, onload: function (n) {
                    if (this.__timer) {
                        this._$dispatchEvent("onuploading", n);
                        this.__timer = window.setTimeout(t._$bind(this, e, a, i), 1e3)
                    }
                }._$bind(this), onerror: function (n) {
                    if (this.__timer) this.__timer = window.setTimeout(t._$bind(this, e, a, i), 1e3)
                }._$bind(this)
            })
        };
        return function (r) {
            var o = r.request, c = r.headers, d = o.data, u = a._$uniqueID();
            f[u] = this;
            d.target = u;
            d.method = "POST";
            d.enctype = s._$HEAD_CT_FILE;
            d.encoding = s._$HEAD_CT_FILE;
            var p = d.action || "", m = p.indexOf("?") <= 0 ? "?" : "&";
            d.action = p + m + "_proxy_=form";
            this.__frame = n._$createXFrame({
                name: u, onload: function (a) {
                    var n = i._$getElement(a);
                    i._$addEvent(n, "load", e._$bind(this));
                    d.submit();
                    var s = (d.nej_query || l).value;
                    if (s) {
                        var r = (d.nej_mode || l).value, o = "true" === (d.nej_cookie || l).value;
                        this.__timer = window.setTimeout(t._$bind(this, s, r, o), 100)
                    }
                }._$bind(this)
            })
        }
    }();
    p._$abort = function () {
        this.__onAbort()
    };
    return c
}, "a14bfafc51d1e1290c6cec255af8c595", "2d7b7830023367208f24a9e991826992", "6f5d8ca720f8058b197bc7c887a7de3a", "1876a96e5fed91c4cce05bda442b78ae", "b35210847be0ba21283cbada2712d274", "0710a240299ec13a855c50149e98077e", "210e75c6134afb4034b83dc5bde53d96", "0e8e958123485f754e931caaa6e89ab1");
I$("0f99bf88c4eb407b81537ad9cb00a936", function (e, t, a, i, n, s, r, o) {
    n.__getProxyByMode = function (n, s, r) {
        var o = s ? {2: i._$$ProxyUpload} : {2: a._$$ProxyFrame, 3: t._$$ProxyFlash};
        return (o[n] || e._$$ProxyXHR)._$allocate(r)
    };
    return n
}, "9d99abe3866414a8bb7cb2a8264d073d", "415520e09ca80cb2bda32fb30490a224", "6dace71511fae5b88fcc5b103ea54963", "a04515740a80a645cd380b7e57d4f999");
I$("505b955e0b733fb0540d96ee67f61126", function (e, t, a, i, n, s) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "5.0") I$("135b87469ec2ca20ec5e0a63606632c7", function () {
        t.__getProxyByMode = function () {
            var e = {0: 2, 1: 3};
            return t.__getProxyByMode._$aop(function (t) {
                var a = t.args, i = a[0] || 0;
                a[0] = a[1] ? 2 : e[i] || i
            })
        }()
    });
    return t
}, "b6a40003f918f58537b5b77b495b3193", "0f99bf88c4eb407b81537ad9cb00a936");
I$("210e75c6134afb4034b83dc5bde53d96", function (e, t, a, i, n, s, r, o, c, l) {
    var d = {}, u = c;
    r._$abort = function (e) {
        var t = d[e];
        if (t) t.req._$abort()
    };
    r._$filter = function (e) {
        u = e || c
    };
    r._$request = function () {
        var e = (location.protocol + "//" + location.host).toLowerCase();
        var i = function (t) {
            var i = a._$url2origin(t);
            return !!i && i != e
        };
        var r = function (e) {
            return (e || o)[t._$HEAD_CT] == t._$HEAD_CT_FILE
        };
        var l = function (e) {
            var t = r(e.headers);
            if (!i(e.url) && !t) return n._$$ProxyXHR._$allocate(e); else return s.__getProxyByMode(e.mode, t, e)
        };
        var p = function (e, t) {
            var a = {data: t};
            var i = e.result.headers;
            if (i) a.headers = e.req._$header(i);
            return a
        };
        var f = function (e) {
            var t = d[e];
            if (t) {
                if (t.req) t.req._$recycle();
                delete d[e]
            }
        };
        var m = function (e, t) {
            var a = d[e];
            if (a) {
                var i = arguments[2];
                if ("onload" == t && a.result) i = p(a, i);
                f(e);
                var n = {type: t, result: i};
                u(n);
                if (!n.stopped) (a[t] || c)(n.result)
            }
        };
        var h = function (e, t) {
            m(e, "onload", t)
        };
        var v = function (e, t) {
            m(e, "onerror", t)
        };
        var g = function (e, t) {
            var i = e.indexOf("?") < 0 ? "?" : "&", t = t || "";
            if (a._$isObject(t)) t = a._$object2query(t);
            if (t) e += i + t;
            return e
        };
        return function (e, t) {
            t = t || {};
            var i = a._$uniqueID(), n = {result: t.result, onload: t.onload || c, onerror: t.onerror || c};
            d[i] = n;
            t.onload = h._$bind(null, i);
            t.onerror = v._$bind(null, i);
            if (t.query) e = g(e, t.query);
            var s = t.method || "";
            if ((!s || /get/i.test(s)) && t.data) {
                e = g(e, t.data);
                t.data = null
            }
            t.url = e;
            n.req = l(t);
            n.req._$send(t.data);
            return i
        }
    }();
    r._$upload = function (e, n) {
        e = i._$get(e);
        if (!e) return "";
        var s = a._$fetch({
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        }, n);
        s.data = e;
        s.method = "POST";
        s.timeout = 0;
        s.headers[t._$HEAD_CT] = t._$HEAD_CT_FILE;
        return r._$request(e.action, s)
    };
    if (!0) e.copy(e.P("nej.j"), r);
    return r
}, "81aff2a53e18d21e037ee9fc803fbf2b", "0710a240299ec13a855c50149e98077e", "6f5d8ca720f8058b197bc7c887a7de3a", "b35210847be0ba21283cbada2712d274", "9d99abe3866414a8bb7cb2a8264d073d", "505b955e0b733fb0540d96ee67f61126");
I$("282365e47218c60922e48e5f5e3aaa6b", function (e, t, a, i, n) {
    n._$jump = function () {
        var t = e._$url2origin(window.location.href);
        window.location.href = t + "/logout"
    };
    n._$delCookie = function () {
        var t = "https://yun.reg.163.com/cdl/cdallcookie";
        var a = {};
        i._$request(t, {
            type: "json", method: "GET", timeout: 5e3, onload: function (t) {
                var a = t.nextUrls || [];
                this.iframeCount = a.length || 0;
                this.iframeIndex = 0;
                this.sdTimer = window.setTimeout(function () {
                    this._$jump()
                }._$bind(this), 5e3);
                e._$forEach(a, function (e) {
                    this._$addIframe(e)
                }._$bind(this))
            }._$bind(this), onerror: function () {
                this._$jump()
            }._$bind(this)
        })
    };
    n._$addIframe = function (e) {
        if ("https" === location.protocol) e = e.replace("http", "https");
        a._$createXFrame({
            src: e, parent: document.body, visiable: !1, onload: function () {
                this.iframeIndex++;
                if (this.iframeCount == this.iframeIndex) {
                    this.sdTimer = clearTimeout(this.sdTimer);
                    this._$jump()
                }
            }._$bind(this)
        })
    };
    return n
}, "6f5d8ca720f8058b197bc7c887a7de3a", "1876a96e5fed91c4cce05bda442b78ae", "b35210847be0ba21283cbada2712d274", "210e75c6134afb4034b83dc5bde53d96");
I$("52a31311e138d34e969e723dd7fac76b", function () {
    return {
        addEvent: function (e, t, a) {
            if (e) if (e.addEventListener) e.addEventListener(t, a, !1); else if (e.attachEvent) e.attachEvent("on" + t, function (t) {
                a.call(e, t)
            }); else e["on" + t] = a
        }, removeEvent: function (e, t, a) {
            if (e) if (e.removeEventListener) e.removeEventListener(t, a); else if (e.detachEvent) e.detachEvent("on" + t, a); else e["on" + t] = null
        }, query: function (e, t) {
            var a = t ? document.querySelectorAll : document.querySelector;
            if (a) return a.call(document, e)
        }, addClass: function (e, t) {
            if (e) {
                var a = e.className || "";
                if ((" " + a + " ").indexOf(" " + t + " ") === -1) e.className = a ? a + " " + t : t
            }
        }, delClass: function (e, t) {
            if (e) {
                var a = e.className || "";
                e.className = (" " + a + " ").replace(" " + t + " ", " ").trim()
            }
        }, hasClass: function (e, t) {
            if (e) {
                var a = e.className || "";
                return (" " + a + " ").indexOf(" " + t + " ") !== -1
            }
        }, getClientTop: function (e) {
            return e && !e.length ? e.getBoundingClientRect().top : 0
        }, getClientLeft: function (e) {
            return e && !e.length ? e.getBoundingClientRect().left : 0
        }
    }
});
I$("91150511a7e91fcd90f2c37b08e5730b", function (e, t, a, i) {
    var n = null;
    var s = null;
    var r = "yidun";
    var o = null;
    i.__needShowLoginModal = function () {
        var e = "initlogin";
        var t = window.location.search || "";
        return t.slice(1).indexOf(e) !== -1
    };
    i.initSwitchHead = function () {
        var e = a.query(".j-tyun"), t = a.query(".j-thead");
        var i = function () {
            var i = document.documentElement.scrollTop || document.body.scrollTop;
            if (i >= 2) {
                a.addClass(e, "z-scroll");
                a.addClass(t, "z-scroll")
            } else {
                a.delClass(e, "z-scroll");
                a.delClass(t, "z-scroll")
            }
        };
        i();
        a.addEvent(window, "scroll", i)
    };
    i.initGoTop = function () {
        var e = 572;
        var t = a.query(".j-back_top");
        var i = function () {
            var i = document.documentElement.scrollTop || document.body.scrollTop;
            i >= e ? a.addClass(t, "z-act") : a.delClass(t, "z-act")
        };
        i();
        a.addEvent(window, "scroll", i);
        a.addEvent(t, "click", function () {
            window.scrollTo(0, 0)
        })
    };
    i.initNavHover = function () {
        var e = a.query(".j-drop_handle", !0), t = a.query(".j-drop_target", !0);
        if (e.length !== t.length) throw new Error("handle length !== target length");
        var i = 200, n = "z-hover";
        var s = function (i, s) {
            for (var r = 0, o = e.length; r < o; r++) if (e[r] !== i) {
                window.clearTimeout(e[r].timer);
                a.delClass(t[r], n);
                a.delClass(e[r], n)
            }
            window.clearTimeout(i.timer);
            a.addClass(s, n);
            a.addClass(i, n)
        };
        var r = function (e, t) {
            e.timer = window.setTimeout(function () {
                a.delClass(t, n);
                a.delClass(e, n)
            }, i)
        };
        var o = function (a, i) {
            return function () {
                "over" === a ? s(e[i], t[i]) : r(e[i], t[i])
            }
        };
        for (var c = 0, l = e.length; c < l; c++) {
            a.addEvent(e[c], "mouseover", o("over", c));
            a.addEvent(e[c], "mouseleave", o("leave", c));
            a.addEvent(t[c], "mouseover", o("over", c));
            a.addEvent(t[c], "mouseleave", o("leave", c))
        }
    };
    i.initMoreLinks = function () {
        var e = a.query(".j-flmore"), t = a.query(".j-flbody"), i = !1;
        a.addEvent(e, "click", function () {
            t.style.height = i ? "24px" : "auto";
            i ? a.delClass(e, "z-open") : a.addClass(e, "z-open");
            i = !i
        })
    };
    i.initTrackChanel = function () {
        function t() {
            var t = i() || e("from");
            if (t) {
                var n = document.querySelectorAll('a[href^="https://id.163yun.com"]');
                for (var s = 0, r = n.length; s < r; s++) a(n[s], t)
            }
        }

        function a(e, t) {
            var a = e.getAttribute("href");
            var i = ~a.indexOf("?") ? a + "&fromyd=" + t : a + "?fromyd" + t;
            e.setAttribute("href", i);
            return i
        }

        function i() {
            var e = decodeURIComponent(location.search.slice(1)).split("&");
            for (var t = 0; t < e.length; t++) {
                var a = e[t].split("=");
                if ("from" === a[0]) return a[1]
            }
        }

        setTimeout(t, 0)
    };
    i.initPhoneLink = function () {
        var e = a.query(".J_reg_phone + .J_reg", !0);
        for (var t = 0, i = e.length; t < i; t++) a.addEvent(e[t], "click", function (e) {
            var e = e || window.event;
            var t = e.target || e.srcElement;
            var a = t.previousElementSibling || t.previousSibling;
            for (; 1 !== a.nodeType;) a = a.previousSibling;
            if ("INPUT" === a.tagName && a.value) {
                var i = encodeURIComponent(a.value);
                window.open(t.href + (t.href.indexOf("?") !== -1 ? "&tel=" + i : "?tel=" + i), "_blank");
                e.preventDefault && e.preventDefault();
                e.returnValue = !1;
                return !1
            }
        })
    };
    i.initImage = function () {
        var e = document.createElement("img");
        if (!("srcset" in e)) {
            var t;
            var i = function (e) {
                var t = "img" === e.nodeName.toLowerCase();
                var a = t ? e.src : e.style.backgroundImage;
                if (!/@2x.png[$\?]/.test(a)) t ? e.src = a.replace(/\.png/, "@2x.png") : e.style.backgroundImage = a.replace(/\.png/, "@2x.png")
            };
            if (window.devicePixelRatio && window.devicePixelRatio > 1) {
                t = a.query('img[src^="/public/res/next"]', !0);
                for (var n = 0, s = t.length; n < s; n++) i(t[n])
            }
        }
    };
    i.initInputPlaceholder = function () {
        if (!("placeholder" in document.createElement("input"))) {
            var e = a.query(".J_placeholder", !0);
            var t = function (e) {
                var t = e.getAttribute("placeholder");
                var i = e.getAttribute("type");
                if (t && !e.value && "text" === i) {
                    e.value = t;
                    a.addEvent(e, "focus", function () {
                        if (e.value === t) e.value = ""
                    });
                    a.addEvent(e, "blur", function () {
                        if (!e.value) e.value = t
                    })
                }
            };
            for (var i = 0, n = e.length; i < n; i++) t(e[i])
        }
    };
    i.initCURS = function () {
        var t = this.__needShowLoginModal();
        var a = function () {
            $.ajaxSetup({headers: {csrftoken: e("csrftoken") || ""}})
        };
        var i = function () {
            try {
                n = new CURS({
                    pd: r,
                    pkid: "RtaEBUh",
                    pkht: "dun.163.com",
                    autoReg: 1,
                    loginCallBack: s,
                    closeCallBack: f
                });
                if (t) {
                    $(".j-entry").trigger("click");
                    t = !1
                }
            } catch (e) {
            }
        };
        var s = function (e) {
            u(e)
        };
        var o = function (e) {
            $("#urs-lg-form .curs-m-pop").html('<i class="curs-i"></i><span class="curs-u-info">' + e + "</span>")
        };
        var c = location.protocol + "//" + location.host + "/dashboard";
        var l = function () {
            return Math.random().toString(36).substr(2)
        };
        var d = function (t, a) {
            if (!a) a = window.YD_INFO && window.YD_INFO.passport || "can't get user id";
            if (!e("YD_ADTRACED")) try {
                if (t && t.data["isFirstLogin"]) {
                    _$addAdtrace(a, 0);
                    e("YD_ADTRACED", l())
                }
                if (t && !t.data["isFirstLogin"]) e("YD_ADTRACED", l())
            } catch (i) {
            }
        };
        var u = function (t) {
            var a = t ? t.un : "";
            $.post("/login", {username: a}, function (t) {
                d(t, a);
                switch (t.code) {
                    case 0:
                        e("__NEED_DETAIL", "0");
                        window.location.href = c;
                        break;
                    case 6:
                        o("抱歉, 您的登录出现异常");
                        e("__NEED_DETAIL", "0");
                        break;
                    case 7:
                        e("__NEED_DETAIL", "1");
                        n.destroy();
                        m.init(t.data);
                        break;
                    case 8:
                        e("__NEED_DETAIL", "0");
                        window.location.href = c;
                        break;
                    default:
                        o("抱歉, 您的登录出现异常");
                        e("__NEED_DETAIL", "0")
                }
            })
        };
        var p = function () {
            a();
            $.post("/user-status.json", function (t) {
                d(t);
                switch (t.code) {
                    case 0:
                        e("__NEED_DETAIL", "0");
                        window.location.href = c;
                        break;
                    case 6:
                        n.getInstance();
                        e("__NEED_DETAIL", "0");
                        break;
                    case 7:
                        e("__NEED_DETAIL", "1");
                        m.init(t.data);
                        break;
                    case 8:
                        e("__NEED_DETAIL", "0");
                        window.location.href = c;
                        break;
                    default:
                        e("__NEED_DETAIL", "0")
                }
            })
        };
        var f = function () {
            n.hide();
            n.destroy()
        };
        var m = {
            init: function (e) {
                this.initDOM();
                a();
                this.field = e;
                this.initItems();
                this.phoneItems = $("#j-userinfo .j-mobile");
                this.phoneIpt = $("#j-phoneIpt");
                this.codeIpt = $("#j-vcodeIpt");
                this.codeImg = $("#j-codeImg img");
                this.clearBtn = $("#j-userinfo .clear");
                this.smsIpt = $("#j-smsIpt");
                this.smsBtn = $("#j-smsBtn");
                this.companyIpt = $("#j-companyIpt");
                this.sureBtn = $("#j-sureBtn");
                this.globalErrDOM = $("#j-globalErr");
                this.currentItem = null;
                this.timer = null;
                this.countDown = -1;
                this.abledSMS = !1;
                this.running = !1;
                this.dialog = $("#j-userinfo");
                this.close = $("#j-userinfo .dialog-close");
                this.delayClear = !1;
                this.getVcode();
                this.addEvt();
                this.sureBtn.data("abled", !1);
                this.dialog.show()
            }, initDOM: function () {
                var e = $("#j-dialogTpl").html();
                $(document.body).append(e)
            }, initItems: function () {
                var e = $(".fitem");
                var t = this.field;
                var a = {"j-mobile": "mobile", "j-company": "company"};
                var i = {0: "请输入正确的手机格式", 1: "请输入正确的图片验证码", 2: "请输入正确的短信验证码", 3: "请输入正确的公司或团队名称"};
                e.each(function (e, t) {
                    var a = $(this);
                    a.data("status", 0);
                    a.data("status-msg", i[e])
                });
                for (var n in a) if (!t[a[n]]) $("." + n).remove()
            }, addEvt: function () {
                var e = this;
                this.addEvtFn(this.phoneIpt, "blur", $.proxy(this.checkPhone, this));
                this.addEvtFn(this.companyIpt, "blur", $.proxy(this.checkCompany, this));
                this.addEvtFn(this.codeImg, "click", $.proxy(this.getVcode, this));
                this.addEvtFn(this.codeIpt, "blur", $.proxy(this.checkVcode, this));
                this.addEvtFn(this.smsBtn, "click", $.proxy(this.sendSMS, this));
                this.addEvtFn(this.smsIpt, "blur", $.proxy(this.checkSMS, this));
                this.addEvtFn(this.clearBtn, "click", $.proxy(this.clearVal, this));
                this.addEvtFn(this.sureBtn, "click", $.proxy(this.submitForm, this));
                this.addEvtFn(this.phoneIpt, "keydown", $.proxy(this.toggleClear, this));
                this.addEvtFn(this.companyIpt, "keydown", $.proxy(this.toggleClear, this));
                this.addEvtFn(this.codeIpt, "keydown", $.proxy(this.toggleClear, this));
                this.addEvtFn(this.smsIpt, "keydown", $.proxy(this.toggleClear, this));
                this.close.on("click", function () {
                    e.dialog.hide();
                    e.dialog.remove();
                    $("html").css("overflow", "initial")
                })
            }, toggleClear: function (e) {
                var t = $(e.target);
                var a = t.parents(".fitem");
                a.find(".clear").show()
            }, addEvtFn: function (e, t, a) {
                e[0] && e.on(t, a)
            }, showError: function (e) {
                var t = this.currentItem.find(".tip");
                var a = this.currentItem.find(".ok");
                var e = e || this.currentItem.data("status-msg");
                this.currentItem.addClass("fitem-err");
                a.hide();
                t.html(e).show()
            }, showSuccess: function () {
                var e = this.currentItem.find(".tip");
                var t = this.currentItem.find(".ok");
                this.currentItem.removeClass("fitem-err");
                e.hide().html("");
                t.show()
            }, showFallBack: function (e) {
                var t = this.currentItem.find(".tip");
                var a = this.currentItem.find(".ok");
                if (e) {
                    a.hide();
                    t.html(e).show()
                } else {
                    t.html("").hide();
                    a.show()
                }
            }, clearVal: function (e) {
                var t = $(e.target);
                var a = t.parents(".fitem");
                var i = a.find("input");
                t.hide();
                i.val("");
                this.currentItem = a;
                this.resetItem()
            }, getVcode: function () {
                var e = this;
                this.codeImg.show();
                $.post("/api/account/fetch-img-code.json", function (t) {
                    e.codeImg[0].src = "data:image/jpg;base64," + t.data
                })
            }, checkVcode: function (e) {
                var t = this;
                var a = this.codeIpt.val();
                this.currentItem = this.codeIpt.parents(".fitem");
                if (!this.currentItem.data("status")) if ($.trim(a)) $.post("/api/account/validate-img-code.json", {codeValue: a}, function (e) {
                    if (e.data) {
                        t.currentItem.data("status", 1);
                        t.showSuccess();
                        t.currentItem.addClass("fitem-dis")
                    } else {
                        t.currentItem.data("status", 0);
                        t.showError();
                        t.getVcode()
                    }
                    t.updateSMSBtn();
                    t.updateSubmitBtn()
                }); else this.resetItem()
            }, checkPhone: function (e) {
                var t = this.phoneIpt.val();
                var a = /^(13|14|15|17|18|19)\d{9}$/;
                this.currentItem = this.phoneIpt.parents(".fitem");
                if ($.trim(t)) {
                    if (!a.test(t)) {
                        this.currentItem.data("status", 0);
                        this.showError()
                    } else {
                        this.currentItem.data("status", 1);
                        this.showSuccess()
                    }
                    this.updateSMSBtn();
                    this.updateSubmitBtn()
                } else this.resetItem()
            }, checkSMS: function () {
                var e = this.smsIpt.val();
                var t = /^[0-9]{6}$/;
                this.currentItem = this.smsIpt.parents(".fitem");
                if ($.trim(e)) {
                    if (!t.test(e)) {
                        this.currentItem.data("status", 0);
                        this.showError()
                    } else {
                        this.currentItem.data("status", 1);
                        this.showSuccess()
                    }
                    this.updateSubmitBtn()
                } else this.resetItem()
            }, checkCompany: function () {
                var e = this.companyIpt.val();
                var t = /^[\u2E80-\u9FFF0-9a-zA-Z\ ()（）【】\[\]\._\-]{1,30}$/;
                this.currentItem = this.companyIpt.parents(".fitem");
                if ($.trim(e)) {
                    if (!t.test(e)) {
                        this.currentItem.data("status", 0);
                        this.showError()
                    } else {
                        this.currentItem.data("status", 1);
                        this.showSuccess()
                    }
                    this.updateSubmitBtn()
                } else this.resetItem()
            }, resetItem: function () {
                this.currentItem.data("status", 0);
                this.currentItem.removeClass("fitem-err");
                this.currentItem.find("input").removeClass("z-err");
                this.currentItem.find(".tip").hide().html("");
                this.currentItem.find(".ok").hide();
                this.currentItem.find(".clear").hide();
                this.smsBtn[0] && this.updateSMSBtn();
                this.updateSubmitBtn()
            }, sendSMS: function () {
                if (!this.running) {
                    var e = this;
                    var t = this.phoneIpt.val();
                    this.currentItem = this.smsIpt.parents(".fitem");
                    if (t) $.post("/api/account/send-sms-code.json", {mobile: t, product: r}, function (t) {
                        if (t.data) {
                            e.running = !0;
                            e.countDown = 60;
                            e.updateSMS();
                            e.intervalTime()
                        } else e.showError("手机验证码发送失败")
                    })
                }
            }, updateSMS: function () {
                if (this.running) this.smsBtn.html("重新发送(" + this.countDown + "s)"); else {
                    clearInterval(this.timer);
                    this.smsBtn.html("发送验证码")
                }
                this.updateSMSBtn(!0)
            }, updateSMSBtn: function (e) {
                var t = $(".fitem");
                var a = !1;
                if (this.running) a = !1; else a = t.eq(0).data("status") && t.eq(1).data("status");
                this.smsBtn.toggleClass("sms-act", !!a)
            }, updateSubmitBtn: function () {
                var e = !0;
                var t = $(".fitem");
                var a;
                for (var i = 0; i < t.length; i++) {
                    a = !!t.eq(i).data("status");
                    if (!a) break
                }
                this.sureBtn.toggleClass("u-btn3-act", a);
                this.sureBtn.data("abled", !!a)
            }, intervalTime: function () {
                var e = this;
                this.timer = setInterval(function () {
                    e.countDown--;
                    if (e.countDown < 0) e.running = !1;
                    e.updateSMS()
                }, 1e3)
            }, submitForm: function (e) {
                e.preventDefault();
                var t = this.sureBtn.data("abled");
                if (t) {
                    var a = this;
                    var i = {product: r};
                    var n = {mobile: a.phoneIpt.val(), smscode: a.smsIpt.val()};
                    var s = {corpName: a.companyIpt.val()};
                    if (this.field.mobile) i = $.extend(i, n);
                    if (this.field.company) i = $.extend(i, s);
                    $.post("/api/account/account-info-supply.json", i, function (e) {
                        if (11 !== e.code) if (e.data) window.location.href = c; else a.globalErr(e.msg); else window.location.reload()
                    })
                }
            }, globalErr: function (e) {
                if (e.indexOf("手机验证码") === -1) this.globalErrDOM.html(e).show(); else {
                    this.currentItem = this.smsIpt.parents(".fitem");
                    this.showError(e)
                }
            }
        };
        try {
            CURS_MSG.getJs(i)
        } catch (h) {
        }
        $(document).on("click", ".j-entry", function (e) {
            e.preventDefault();
            if (!n) i();
            p()
        })
    };
    i.initClearCookie = function () {
        if ("undefined" != typeof jQuery) jQuery(document).on("click", 'a[href="/logout"]', function (a) {
            a.preventDefault();
            e.remove("YD_ADTRACED");
            t._$delCookie()
        })
    };
    i.initNewsLoop = function () {
        function e(e) {
            return "translateY(" + e * -20 + "px)"
        }

        function t(t) {
            function n() {
                var t = i <= 0 ? 2 : i - 1;
                var a = i >= 2 ? 0 : i + 1;
                s[t].style.opacity = 0;
                $.each(r, function (n, r) {
                    s[t].style[r] = e(t + 1);
                    s[i].style[r] = e(i);
                    s[a].style[r] = e(a - 1)
                });
                s[i].style.opacity = 1;
                i++;
                if (i > 2) i = 0
            }

            var s = $(".j-loop-news").children();
            if (s.length) {
                var r = ["transform", "msTransform", "webkitTransform"];
                i = t || 0;
                n();
                clearInterval(a);
                a = setInterval(function () {
                    n()
                }, 2500)
            }
        }

        var a = null;
        var i = 0;
        if ($(".j-loop-news").length) {
            $.get("/node/api/news/query", {pageSize: 3, pageNum: 1}, function (e) {
                var a = e.data || [];
                var i = $.map(a, function (e) {
                    return '<li class="footer-news__item"><a target="_blank" href="/news/p/' + e.definedName + '">' + e.title + "</a></li>"
                });
                $(".j-loop-news").html(i.join(""));
                t()
            });
            $(".j-loop-next").on("click", function () {
                t(i)
            })
        }
    };
    i.init = function () {
        this.initSwitchHead();
        this.initNavHover();
        this.initTrackChanel();
        this.initPhoneLink();
        this.initGoTop();
        this.initClearCookie();
        this.initNewsLoop()
    };
    return i
}, "49abd5fbcf8c81327ebfad26d5407002", "282365e47218c60922e48e5f5e3aaa6b", "52a31311e138d34e969e723dd7fac76b");
I$("0bf13a34b47ae189d3ded18d5977d4c4", '<carousel class="m-carousel-customer" animation="fade" duration=3000>\n  {#list items as group }\n  <carouselItem>\n    <div class="gallery">\n        <ul class="gallery__container">\n          {#list group as item}\n          <li class="gallery__item">\n              <img src="{item.image + \'.png\'}" srcset="{item.image + \'@2x.png\'} 2x" alt="{item.name}">\n          </li>\n          {/list}\n        </ul>\n    </div>\n  </carouselItem>\n  {/list}\n</carousel>\n');
this.AraleQRCode = function (e) {
    function t(i) {
        if (a[i]) return a[i].exports;
        var n = a[i] = {exports: {}, id: i, loaded: !1};
        return e[i].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
    }

    var a = {};
    return t.m = e, t.c = a, t.p = "", t(0)
}([function (e, t, a) {
    e.exports = a(1)
}, function (e, t, a) {
    "use strict";
    e.exports = a(2)
}, function (e, t, a) {
    "use strict";
    var i = a(4), n = [], s = a(3), r = function (e) {
        var t = e.options;
        return t.pdground && (e.row > 1 && e.row < 5 && e.col > 1 && e.col < 5 || e.row > e.count - 6 && e.row < e.count - 2 && e.col > 1 && e.col < 5 || e.row > 1 && e.row < 5 && e.col > e.count - 6 && e.col < e.count - 2) ? t.pdground : t.foreground
    }, o = function (e) {
        var t = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / t
    }, c = function (e) {
        "string" == typeof e && (e = {text: e}), this.options = i({}, {
            text: "",
            render: "",
            size: 256,
            correctLevel: 3,
            background: "#ffffff",
            foreground: "#000000",
            image: "",
            imageSize: 30
        }, e);
        for (var t = null, a = 0, r = n.length; r > a; a++) if (n[a].text == this.options.text && n[a].text.correctLevel == this.options.correctLevel) {
            t = n[a].obj;
            break
        }
        if (a == r && (t = new s(this.options.text, this.options.correctLevel), n.push({
            text: this.options.text,
            correctLevel: this.options.correctLevel,
            obj: t
        })), this.options.render) switch (this.options.render) {
            case"canvas":
                return this.createCanvas(t);
            case"table":
                return this.createTable(t);
            case"svg":
                return this.createSVG(t);
            default:
                return this.createDefault(t)
        }
        return this.createDefault(t)
    };
    i(c.prototype, {
        createDefault: function (e) {
            var t = document.createElement("canvas");
            if (t.getContext) return this.createCanvas(e);
            var a = "http://www.w3.org/2000/svg";
            return document.createElementNS && document.createElementNS(a, "svg").createSVGRect ? this.createSVG(e) : this.createTable(e)
        }, createCanvas: function (e) {
            var t = this.options, a = document.createElement("canvas"), i = a.getContext("2d"), n = e.getModuleCount(),
                s = o(i), c = t.size, l = c * s, d = t.imageSize * s, u = function (e, t) {
                    var a = new Image;
                    a.src = e, a.onload = function () {
                        t(this), a.onload = null
                    }
                }, p = (l / n).toPrecision(4), f = (l / n).toPrecision(4);
            a.width = l, a.height = l;
            for (var m = 0; n > m; m++) for (var h = 0; n > h; h++) {
                var v = Math.ceil((h + 1) * p) - Math.floor(h * p), g = Math.ceil((m + 1) * p) - Math.floor(m * p),
                    b = r({row: m, col: h, count: n, options: t});
                i.fillStyle = e.modules[m][h] ? b : t.background, i.fillRect(Math.round(h * p), Math.round(m * f), v, g)
            }
            return t.image && u(t.image, function (e) {
                var t = ((l - d) / 2).toFixed(2), a = ((l - d) / 2).toFixed(2);
                i.drawImage(e, t, a, d, d)
            }), a.style.width = c + "px", a.style.height = c + "px", a
        }, createTable: function (e) {
            var t = this.options, a = e.getModuleCount(), i = Math.floor(t.size / a), n = Math.floor(t.size / a);
            0 >= i && (i = 80 > a ? 2 : 1), 0 >= n && (n = 80 > a ? 2 : 1);
            var s = [];
            s.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color:' + t.background + ';">');
            for (var o = 0; a > o; o++) {
                s.push('<tr style="border:0px; margin:0px; padding:0px; height:' + n + 'px">');
                for (var c = 0; a > c; c++) {
                    var l = r({row: o, col: c, count: a, options: t});
                    e.modules[o][c] ? s.push('<td style="border:0px; margin:0px; padding:0px; width:' + i + "px; background-color:" + l + '"></td>') : s.push('<td style="border:0px; margin:0px; padding:0px; width:' + i + "px; background-color:" + t.background + '"></td>')
                }
                s.push("</tr>")
            }
            if (s.push("</table>"), t.image) {
                var d = i * a, u = n * a, p = ((d - t.imageSize) / 2).toFixed(2),
                    f = ((u - t.imageSize) / 2).toFixed(2);
                s.unshift("<div style='position:relative;\n                        width:" + d + "px;\n                        height:" + u + "px;'>"), s.push("<img src='" + t.image + "'\n                        width='" + t.imageSize + "'\n                        height='" + t.imageSize + "'\n                        style='position:absolute;left:" + p + "px; top:" + f + "px;'>"), s.push("</div>")
            }
            var m = document.createElement("span");
            return m.innerHTML = s.join(""), m.firstChild
        }, createSVG: function (e) {
            var t = this.options, a = e.getModuleCount(), i = a / t.size,
                n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            n.setAttribute("width", t.size), n.setAttribute("height", t.size), n.setAttribute("viewBox", "0 0 " + a + " " + a);
            for (var s = 0; a > s; s++) for (var o = 0; a > o; o++) {
                var c = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
                    l = r({row: s, col: o, count: a, options: t});
                c.setAttribute("x", o), c.setAttribute("y", s), c.setAttribute("width", 1), c.setAttribute("height", 1), c.setAttribute("stroke-width", 0), e.modules[s][o] ? c.setAttribute("fill", l) : c.setAttribute("fill", t.background), n.appendChild(c)
            }
            if (t.image) {
                var d = document.createElementNS("http://www.w3.org/2000/svg", "image");
                d.setAttributeNS("http://www.w3.org/1999/xlink", "href", t.image), d.setAttribute("x", ((a - t.imageSize * i) / 2).toFixed(2)), d.setAttribute("y", ((a - t.imageSize * i) / 2).toFixed(2)), d.setAttribute("width", t.imageSize * i), d.setAttribute("height", t.imageSize * i), n.appendChild(d)
            }
            return n
        }
    }), e.exports = c
}, function (e, t) {
    "use strict";

    function a(e) {
        var t, a, i;
        return 128 > e ? [e] : 2048 > e ? (t = 192 + (e >> 6), a = 128 + (63 & e), [t, a]) : (t = 224 + (e >> 12), a = 128 + (e >> 6 & 63), i = 128 + (63 & e), [t, a, i])
    }

    function i(e) {
        for (var t = [], i = 0; i < e.length; i++) for (var n = e.charCodeAt(i), s = a(n), r = 0; r < s.length; r++) t.push(s[r]);
        return t
    }

    function n(e, t) {
        this.typeNumber = -1, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.rsBlocks = null, this.totalDataCount = -1, this.data = e, this.utf8bytes = i(e), this.make()
    }

    function s(e, t) {
        if (void 0 == e.length) throw new Error(e.length + "/" + t);
        for (var a = 0; a < e.length && 0 == e[a];) a++;
        this.num = new Array(e.length - a + t);
        for (var i = 0; i < e.length - a; i++) this.num[i] = e[i + a]
    }

    function r() {
        this.buffer = [], this.length = 0
    }

    n.prototype = {
        constructor: n, getModuleCount: function () {
            return this.moduleCount
        }, make: function () {
            this.getRightType(), this.dataCache = this.createData(), this.createQrcode()
        }, makeImpl: function (e) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var t = 0; t < this.moduleCount; t++) this.modules[t] = new Array(this.moduleCount);
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(!0, e), this.typeNumber >= 7 && this.setupTypeNumber(!0), this.mapData(this.dataCache, e)
        }, setupPositionProbePattern: function (e, t) {
            for (var a = -1; 7 >= a; a++) if (!(-1 >= e + a || this.moduleCount <= e + a)) for (var i = -1; 7 >= i; i++) -1 >= t + i || this.moduleCount <= t + i || (a >= 0 && 6 >= a && (0 == i || 6 == i) || i >= 0 && 6 >= i && (0 == a || 6 == a) || a >= 2 && 4 >= a && i >= 2 && 4 >= i ? this.modules[e + a][t + i] = !0 : this.modules[e + a][t + i] = !1)
        }, createQrcode: function () {
            for (var e = 0, t = 0, a = null, i = 0; 8 > i; i++) {
                this.makeImpl(i);
                var n = l.getLostPoint(this);
                (0 == i || e > n) && (e = n, t = i, a = this.modules)
            }
            this.modules = a, this.setupTypeInfo(!1, t), this.typeNumber >= 7 && this.setupTypeNumber(!1)
        }, setupTimingPattern: function () {
            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0, null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0))
        }, setupPositionAdjustPattern: function () {
            for (var e = l.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++) for (var a = 0; a < e.length; a++) {
                var i = e[t], n = e[a];
                if (null == this.modules[i][n]) for (var s = -2; 2 >= s; s++) for (var r = -2; 2 >= r; r++) -2 == s || 2 == s || -2 == r || 2 == r || 0 == s && 0 == r ? this.modules[i + s][n + r] = !0 : this.modules[i + s][n + r] = !1
            }
        }, setupTypeNumber: function (e) {
            for (var t = l.getBCHTypeNumber(this.typeNumber), a = 0; 18 > a; a++) {
                var i = !e && 1 == (t >> a & 1);
                this.modules[Math.floor(a / 3)][a % 3 + this.moduleCount - 8 - 3] = i, this.modules[a % 3 + this.moduleCount - 8 - 3][Math.floor(a / 3)] = i
            }
        }, setupTypeInfo: function (e, t) {
            for (var a = o[this.errorCorrectLevel] << 3 | t, i = l.getBCHTypeInfo(a), n = 0; 15 > n; n++) {
                var s = !e && 1 == (i >> n & 1);
                6 > n ? this.modules[n][8] = s : 8 > n ? this.modules[n + 1][8] = s : this.modules[this.moduleCount - 15 + n][8] = s;
                var s = !e && 1 == (i >> n & 1);
                8 > n ? this.modules[8][this.moduleCount - n - 1] = s : 9 > n ? this.modules[8][15 - n - 1 + 1] = s : this.modules[8][15 - n - 1] = s
            }
            this.modules[this.moduleCount - 8][8] = !e
        }, createData: function () {
            var e = new r, t = this.typeNumber > 9 ? 16 : 8;
            e.put(4, 4), e.put(this.utf8bytes.length, t);
            for (var a = 0, i = this.utf8bytes.length; i > a; a++) e.put(this.utf8bytes[a], 8);
            for (e.length + 4 <= 8 * this.totalDataCount && e.put(0, 4); e.length % 8 != 0;) e.putBit(!1);
            for (; !(e.length >= 8 * this.totalDataCount) && (e.put(n.PAD0, 8), !(e.length >= 8 * this.totalDataCount));) e.put(n.PAD1, 8);
            return this.createBytes(e)
        }, createBytes: function (e) {
            for (var t = 0, a = 0, i = 0, n = this.rsBlock.length / 3, r = [], o = 0; n > o; o++) for (var c = this.rsBlock[3 * o + 0], d = this.rsBlock[3 * o + 1], u = this.rsBlock[3 * o + 2], p = 0; c > p; p++) r.push([u, d]);
            for (var f = new Array(r.length), m = new Array(r.length), h = 0; h < r.length; h++) {
                var v = r[h][0], g = r[h][1] - v;
                a = Math.max(a, v), i = Math.max(i, g), f[h] = new Array(v);
                for (var o = 0; o < f[h].length; o++) f[h][o] = 255 & e.buffer[o + t];
                t += v;
                var b = l.getErrorCorrectPolynomial(g), _ = new s(f[h], b.getLength() - 1), x = _.mod(b);
                m[h] = new Array(b.getLength() - 1);
                for (var o = 0; o < m[h].length; o++) {
                    var y = o + x.getLength() - m[h].length;
                    m[h][o] = y >= 0 ? x.get(y) : 0
                }
            }
            for (var $ = new Array(this.totalDataCount), w = 0, o = 0; a > o; o++) for (var h = 0; h < r.length; h++) o < f[h].length && ($[w++] = f[h][o]);
            for (var o = 0; i > o; o++) for (var h = 0; h < r.length; h++) o < m[h].length && ($[w++] = m[h][o]);
            return $
        }, mapData: function (e, t) {
            for (var a = -1, i = this.moduleCount - 1, n = 7, s = 0, r = this.moduleCount - 1; r > 0; r -= 2) for (6 == r && r--; ;) {
                for (var o = 0; 2 > o; o++) if (null == this.modules[i][r - o]) {
                    var c = !1;
                    s < e.length && (c = 1 == (e[s] >>> n & 1));
                    var d = l.getMask(t, i, r - o);
                    d && (c = !c), this.modules[i][r - o] = c, n--, -1 == n && (s++, n = 7)
                }
                if (i += a, 0 > i || this.moduleCount <= i) {
                    i -= a, a = -a;
                    break
                }
            }
        }
    }, n.PAD0 = 236, n.PAD1 = 17;
    for (var o = [1, 0, 3, 2], c = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    }, l = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (e) {
            for (var t = e << 10; l.getBCHDigit(t) - l.getBCHDigit(l.G15) >= 0;) t ^= l.G15 << l.getBCHDigit(t) - l.getBCHDigit(l.G15);
            return (e << 10 | t) ^ l.G15_MASK
        },
        getBCHTypeNumber: function (e) {
            for (var t = e << 12; l.getBCHDigit(t) - l.getBCHDigit(l.G18) >= 0;) t ^= l.G18 << l.getBCHDigit(t) - l.getBCHDigit(l.G18);
            return e << 12 | t
        },
        getBCHDigit: function (e) {
            for (var t = 0; 0 != e;) t++, e >>>= 1;
            return t
        },
        getPatternPosition: function (e) {
            return l.PATTERN_POSITION_TABLE[e - 1]
        },
        getMask: function (e, t, a) {
            switch (e) {
                case c.PATTERN000:
                    return (t + a) % 2 == 0;
                case c.PATTERN001:
                    return t % 2 == 0;
                case c.PATTERN010:
                    return a % 3 == 0;
                case c.PATTERN011:
                    return (t + a) % 3 == 0;
                case c.PATTERN100:
                    return (Math.floor(t / 2) + Math.floor(a / 3)) % 2 == 0;
                case c.PATTERN101:
                    return t * a % 2 + t * a % 3 == 0;
                case c.PATTERN110:
                    return (t * a % 2 + t * a % 3) % 2 == 0;
                case c.PATTERN111:
                    return (t * a % 3 + (t + a) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + e)
            }
        },
        getErrorCorrectPolynomial: function (e) {
            for (var t = new s([1], 0), a = 0; e > a; a++) t = t.multiply(new s([1, d.gexp(a)], 0));
            return t
        },
        getLostPoint: function (e) {
            for (var t = e.getModuleCount(), a = 0, i = 0, n = 0; t > n; n++) for (var s = 0, r = e.modules[n][0], o = 0; t > o; o++) {
                var c = e.modules[n][o];
                if (t - 6 > o && c && !e.modules[n][o + 1] && e.modules[n][o + 2] && e.modules[n][o + 3] && e.modules[n][o + 4] && !e.modules[n][o + 5] && e.modules[n][o + 6] && (t - 10 > o ? e.modules[n][o + 7] && e.modules[n][o + 8] && e.modules[n][o + 9] && e.modules[n][o + 10] && (a += 40) : o > 3 && e.modules[n][o - 1] && e.modules[n][o - 2] && e.modules[n][o - 3] && e.modules[n][o - 4] && (a += 40)), t - 1 > n && t - 1 > o) {
                    var l = 0;
                    c && l++, e.modules[n + 1][o] && l++, e.modules[n][o + 1] && l++, e.modules[n + 1][o + 1] && l++, (0 == l || 4 == l) && (a += 3)
                }
                r ^ c ? s++ : (r = c, s >= 5 && (a += 3 + s - 5), s = 1), c && i++
            }
            for (var o = 0; t > o; o++) for (var s = 0, r = e.modules[0][o], n = 0; t > n; n++) {
                var c = e.modules[n][o];
                t - 6 > n && c && !e.modules[n + 1][o] && e.modules[n + 2][o] && e.modules[n + 3][o] && e.modules[n + 4][o] && !e.modules[n + 5][o] && e.modules[n + 6][o] && (t - 10 > n ? e.modules[n + 7][o] && e.modules[n + 8][o] && e.modules[n + 9][o] && e.modules[n + 10][o] && (a += 40) : n > 3 && e.modules[n - 1][o] && e.modules[n - 2][o] && e.modules[n - 3][o] && e.modules[n - 4][o] && (a += 40)), r ^ c ? s++ : (r = c, s >= 5 && (a += 3 + s - 5), s = 1)
            }
            var d = Math.abs(100 * i / t / t - 50) / 5;
            return a += 10 * d
        }
    }, d = {
        glog: function (e) {
            if (1 > e) throw new Error("glog(" + e + ")");
            return d.LOG_TABLE[e]
        }, gexp: function (e) {
            for (; 0 > e;) e += 255;
            for (; e >= 256;) e -= 255;
            return d.EXP_TABLE[e]
        }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256)
    }, u = 0; 8 > u; u++) d.EXP_TABLE[u] = 1 << u;
    for (var u = 8; 256 > u; u++) d.EXP_TABLE[u] = d.EXP_TABLE[u - 4] ^ d.EXP_TABLE[u - 5] ^ d.EXP_TABLE[u - 6] ^ d.EXP_TABLE[u - 8];
    for (var u = 0; 255 > u; u++) d.LOG_TABLE[d.EXP_TABLE[u]] = u;
    s.prototype = {
        get: function (e) {
            return this.num[e]
        }, getLength: function () {
            return this.num.length
        }, multiply: function (e) {
            for (var t = new Array(this.getLength() + e.getLength() - 1), a = 0; a < this.getLength(); a++) for (var i = 0; i < e.getLength(); i++) t[a + i] ^= d.gexp(d.glog(this.get(a)) + d.glog(e.get(i)));
            return new s(t, 0)
        }, mod: function (e) {
            var t = this.getLength(), a = e.getLength();
            if (0 > t - a) return this;
            for (var i = new Array(t), n = 0; t > n; n++) i[n] = this.get(n);
            for (; i.length >= a;) {
                for (var r = d.glog(i[0]) - d.glog(e.get(0)), n = 0; n < e.getLength(); n++) i[n] ^= d.gexp(d.glog(e.get(n)) + r);
                for (; 0 == i[0];) i.shift()
            }
            return new s(i, 0)
        }
    };
    var p = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
    n.prototype.getRightType = function () {
        for (var e = 1; 41 > e; e++) {
            var t = p[4 * (e - 1) + this.errorCorrectLevel];
            if (void 0 == t) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + this.errorCorrectLevel);
            for (var a = t.length / 3, i = 0, n = 0; a > n; n++) {
                var s = t[3 * n + 0], r = t[3 * n + 2];
                i += r * s
            }
            var o = e > 9 ? 2 : 1;
            if (this.utf8bytes.length + o < i || 40 == e) {
                this.typeNumber = e, this.rsBlock = t, this.totalDataCount = i;
                break
            }
        }
    }, r.prototype = {
        get: function (e) {
            var t = Math.floor(e / 8);
            return this.buffer[t] >>> 7 - e % 8 & 1
        }, put: function (e, t) {
            for (var a = 0; t > a; a++) this.putBit(e >>> t - a - 1 & 1)
        }, putBit: function (e) {
            var t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
        }
    }, e.exports = n
}, function (e, t) {
    e.exports = function (e) {
        for (var t, a = Array.prototype.slice.call(arguments, 1), i = 0; t = a[i]; i++) if (t) for (var n in t) e[n] = t[n];
        return e
    }
}]);
I$("3cc4f6065fcbcec6d9f198809f81e4d0", function (e) {
    function t(t) {
        t = t || {};
        this.header = e.query(t.head || i);
        this.sider = e.query(t.sider || a);
        this.footer = e.query(t.footer || n);
        this.headerHeight = this.header.offsetHeight;
        this.siderHeight = this.sider.offsetHeight;
        this.footerTop = this.footer.offsetTop - this.siderHeight - 38;
        this.maxHeight = this.siderHeight + this.headerHeight;
        this.init()
    }

    var a = ".g-sd2";
    var i = ".g-hd";
    var n = ".layout-footer";
    t.prototype.init = function () {
        e.addEvent(window, "scroll", this.onScroll._$bind(this))
    };
    t.prototype.onScroll = function () {
        var t = e.getClientTop(this.footer);
        if (t <= this.maxHeight) {
            this.sider.style.position = "absolute";
            this.sider.style.top = this.footerTop + "px"
        } else {
            this.sider.style.position = "fixed";
            this.sider.style.top = ""
        }
    };
    return t
}, "52a31311e138d34e969e723dd7fac76b");
!function (e, t, a) {
    function i(e) {
        e = e || {};
        if (e.macros) this._macros = e.macros;
        this._links = {};
        this._rules = {};
        this.TRUNK = null;
        this.cache = L(e.maxCache || 200);
        this.cache.set("", [[]])
    }

    function n(e) {
        return oe.parse(e)
    }

    function s(e, t) {
        return t ? e.nodeName === t : 1 === e.nodeType
    }

    function r(e, t) {
        var e = e.firstChild;
        return !e || s(e, t) ? e : l(e, t)
    }

    function o(e, t) {
        var e = e.lastChild;
        return !e || s(e, t) ? e : c(e, t)
    }

    function c(e, t) {
        for (; e = e.previousSibling;) if (s(e, t)) return e;
        return e
    }

    function l(e, t) {
        for (; e = e.nextSibling;) if (s(e, t)) return e;
        return e
    }

    function d(e, t) {
        var a = le[t];
        if (a) return "function" == typeof a ? a(e) : e[a];
        if (ue) return e.getAttribute(t);
        var i = e.getAttributeNode(t);
        return "boolean" == typeof e[t] ? e[t] ? t : null : i && i.specified ? i.value : null
    }

    function u(e) {
        for (var t = e.length; t--;) {
            var a = e[t];
            e.splice(t, 1, null);
            if (~e.indexOf(a)) e.splice(t, 1); else e.splice(t, 1, a)
        }
        return e
    }

    function p(e, t) {
        if (e && t) {
            var a = e.nextSibling;
            for (; a;) {
                if (a === t) return -1;
                a = a.nextSibling
            }
        }
        return e ? 1 : -1
    }

    function f(e) {
        return u(e.sort(pe))
    }

    function m(e, t) {
        var a, i, n, s;
        if (e) {
            n = t ? "type" : "child";
            a = l;
            i = c;
            s = r
        } else {
            n = "last" + (t ? "type" : "child");
            i = l;
            a = c;
            s = o
        }
        return function (e, r) {
            var o = me[n];
            if (e === ce) return !1;
            var c = fe(e), l = e.parentNode, d = r.step > 0 ? a : i, u = r.step, p = r.start, f = t && e.nodeName;
            if (null === u) return !1;
            if (!o[c]) {
                var m = s(l, f), h = 0;
                do {
                    o[fe(m)] = ++h;
                    me.length++
                } while (m = a(m, f))
            }
            var v = o[c];
            if (0 === u) return v === p; else return (v - p) / u >= 0 && (v - p) % u === 0
        }
    }

    function h() {
        if (me.length) me = {child: {}, lastchild: {}, type: {}, lasttype: {}, length: 0}
    }

    function v(e, t, a) {
        var i;
        for (var n in t) if (a !== n && (i = ve[n]) && !i(e, t[n])) return !1;
        return !0
    }

    function g(e, t, a) {
        var i = t.length, n = t[i - 1];
        if (!v(e, n, a)) return !1; else {
            if (1 == i) return !0;
            var s = t[i - 2], r = ge.combos[s.combo], o = be[i - 2], c = r(e, o);
            if (c) return !0; else return !1
        }
    }

    function b(e) {
        return function (a) {
            if (a == ce || null == a || a == t) return null; else return g(a, e)
        }
    }

    function _(e) {
        var t = [];
        for (var a = 0, i = e.length; a < i; a++) t.push(b(e.slice(0, a + 1)));
        return t
    }

    function x(e, t, a) {
        if (!t.length) return e;
        var i = be;
        be = _(t);
        for (var n = e.length; n--;) if (!g(e[n], t, a)) e.splice(n, 1);
        be = i;
        return e
    }

    function y(e, t) {
        var a, i, n = e[e.length - 1];
        if (n.id) {
            a = he.byId(n.id);
            i = "id"
        } else if (n.classList && n.classList.length && he.byClassName) {
            a = he.byClassName(n.classList, t);
            i = "classList"
        } else {
            a = he.byTagName(n.tag || "*", t);
            i = "tag"
        }
        if (!a.length) return a; else return x(a, e, i)
    }

    function $(e, t) {
        if (!e[0][0]) return [];
        var a = [], i = 0;
        for (var n = 0, s = e.length; n < s; n++) {
            var r = e[n], o = r.length, c = r[o - 1], l = y(r, t);
            if (l && l.length) i++;
            if (!a) a = l; else a = a.concat(l)
        }
        h();
        if (i > 1) f(a);
        return a
    }

    function w(e, a) {
        var i = n(e);
        var s = $(i, a || t);
        return s
    }

    function C(e, a) {
        var i;
        if (_e && !j.debug) try {
            i = (a || t).querySelector(e)
        } catch (n) {
            i = w(e, a)[0]
        } else i = w(e, a)[0];
        return i
    }

    function k(e, a) {
        var i;
        if (_e && !j.debug) try {
            i = B((a || t).querySelectorAll(e))
        } catch (n) {
            i = w(e, a)
        } else i = w(e, a);
        return i
    }

    function E(e, t) {
        if (!e || 1 !== e.nodeType) return !1;
        var a = n(t), i = a.length;
        if (!a[i - 1][0]) return !1;
        for (; i--;) if (N(e, a[i])) return !0;
        return !1
    }

    function N(e, t) {
        var a = t.length;
        if (!v(e, t[a - 1])) return !1; else return 1 === x([e], t.slice(0)).length
    }

    function T(e) {
        return function (t, a) {
            var i = a.split(/\s+of\s+/);
            if (i.length < 2) throw Error("no 'of' keyword in nth-match\"s selector");
            var n = ie(i[0]), s = i[1], r = t.parentNode[e ? "firstChild" : "lastChild"],
                o = e ? "nextSibling" : "previousSibling", c = n.step, l = n.start, d = 0;
            if (!E(t, s)) return !1;
            if (null === c) return !1;
            do {
                if (1 === r.nodeType && j.matches(r, s)) d++;
                if (r === t) break
            } while (r = r[o]);
            if (0 === c) return d === l; else return (d - l) / c >= 0 && (d - l) % c === 0
        }
    }

    var j = function (e, t) {
        return k(e, t)
    }, I = {};
    var S = Array.prototype, A = Object.prototype, D = String.prototype, F = Function.prototype, q = S.slice,
        O = t.body, M = t.createElement("div"), B = function (e) {
            return q.call(e)
        }, R = function (e) {
            return null == e ? String(e) : A.toString.call(e).slice(8, -1).toLowerCase()
        }, P = function (e, t, a) {
            for (var i in t) if (null == e[i] || a) e[i] = t[i]
        }, L = function (e) {
            var t = [], i = {};
            return {
                set: function (e, a) {
                    if (t.length > this.length) delete i[t.shift()];
                    i[e] = a;
                    t.push(e);
                    return a
                }, get: function (e) {
                    if (e === a) return i; else return i[e]
                }, length: e, len: function () {
                    return t.length
                }
            }
        }, z = function (e) {
            return function (t, a) {
                if ("object" == R(t)) for (var i in t) e.call(this, i, t[i]); else e.call(this, t, a);
                return this
            }
        }, H = function (e) {
            try {
                return e()
            } catch (t) {
                return !1
            } finally {
                M = document.createElement("div")
            }
        };
    try {
        q.call(t.getElementsByTagName("body"))
    } catch (U) {
        B = function (e) {
            var t = [], a = e.length;
            for (var i = 0; i < a; i++) t.push(e[i]);
            return t
        }
    }
    var X = /^\s+|\s+$/g;
    D.trim = D.trim || function () {
        return this.replace(X, "")
    };
    F.bind = F.bind || function (e, t) {
        t = q.call(arguments, 1);
        var a = this;
        return function () {
            return a.apply(e, t.concat(q.call(arguments)))
        }
    };
    S.indexOf = S.indexOf || function (e) {
        for (var t = 0, a = this.length; t < a; t++) if (e === this[t]) return t;
        return -1
    };
    var G = /\(\?\!|\(\?\:/, W = function (e) {
        var t = 0, a = 0, i = e.length, n = e.split(G).length - 1;
        for (; i--;) {
            var s = e.charAt(i);
            if (0 === i || "\\" !== e.charAt(i - 1)) {
                if ("(" === s) t++;
                if (")" === s) a++
            }
        }
        if (t !== a) throw e + "中的括号不匹配"; else return t - n
    }, J = /\\(\d+)/g, Y = function (e, t) {
        return e
    }, V = Object.keys || function (e) {
        var t = [];
        for (var a in e) if (e.hasOwnProperty(a)) t.push(a);
        return t
    }, K = function (e) {
        var t = e.reg;
        if ("regexp" === R(t)) t = t.toString().slice(1, -1);
        e.regexp = t.replace(Q, function (e, t) {
            if (t in ne) return ne[t]; else throw new Error('can"t replace undefined macros:' + t)
        });
        return e
    }, Z = function (e) {
        for (var t in e) if (e.hasOwnProperty(t)) K(e[t]);
        return e
    };
    P(i.prototype, {
        parse: function (e) {
            e = clean(e);
            if (t = this.cache.get(e)) return t;
            var t = this.parsed = [[null]];
            var a = this.input = e;
            var i = this.TRUNK;
            var n;
            for (; n != (a = a.replace(i, this._process.bind(this)));) n = a;
            if ("" !== a) this.error(a);
            return this.cache.set(e, t)
        }, on: function (e) {
            if ("string" === R(e)) {
                var t = {};
                t[e] = arguments[1];
                e = t
            }
            for (var i in e) {
                var n = e[i];
                if ("object" !== R(n)) n = {regexp: n};
                var s = n.regexp;
                if ("regexp" === R(s)) n.regexp = s.toString().slice(1, -1);
                if (n.order === a) n.order = 1;
                this._rules[i] = n
            }
            this.setup();
            return this
        }, off: function (e) {
            if ("array" === R(e)) for (var t = e.length; t--;) this.off(e[t]); else if (this._rules[e]) delete this._rules[e];
            return this
        }, current: function () {
            var e = this.parsed;
            var t = e[e.length - 1], a = t.length;
            return t[a - 1] || (t[a - 1] = {tag: "*"})
        }, error: function (e) {
            throw Error("输入  " + this.input + "  含有未识别语句:" + e || "")
        }, clone: function (e) {
            return (new i).on(this._rules)
        }, _process: function () {
            var e = this._links, t = this._rules, a = q.call(arguments);
            for (var i in e) {
                var n = e[i], s = n[1], r = parseInt(n[0]);
                if (a[r] && (rule = t[i])) {
                    rule.action.apply(this, a.slice(r, r + s));
                    return ""
                }
            }
            return ""
        }, setup: function () {
            Z(this._rules);
            var e = 1, t = [], a = this._rules, i = this._links, n = V(a).sort(function (e, t) {
                return a[e].order >= a[t].order
            }), s = n.length;
            for (; s--;) {
                var r = n[s], o = a[r], c = W(o.regexp) + 1;
                if (o.filter && !ve[r]) ve[r] = o.filter;
                i[r] = [e, c];
                var l = Y(o.regexp, e - 1);
                e += c;
                t.push(l)
            }
            this.TRUNK = new RegExp("^(?:(" + t.join(")|(") + "))");
            return this
        }
    });
    var Q = /\{\{([^\}]*)\}\}/g, ee = /^(?:(\d+)|([+-]?\d*)?n([+-]\d+)?)$/, te = /^(nth)[\w-]*(-of-type|-child)/,
        ae = L(100), ie = function (e) {
            var t, a, i;
            if (!e || !(e = e.replace(/\s+/g, ""))) return {start: 1, step: 0};
            if (i = ae.get(e)) return i;
            if ("even" == e) {
                a = 2;
                t = 2
            } else if ("odd" == e) {
                t = 2;
                a = 1
            } else {
                i = e.match(ee);
                if (!i) t = null; else if (i[1]) {
                    t = 0;
                    a = parseInt(i[1])
                } else {
                    if ("-" == i[2]) i[2] = "-1";
                    t = i[2] ? parseInt(i[2]) : 1;
                    a = i[3] ? parseInt(i[3]) : 0
                }
            }
            if (a < 1) if (t < 1) t = null; else a = --a % t + t;
            return ae.set(e, {start: a, step: t})
        };
    var ne = {split: "\\s*,\\s*", operator: "[*^$|~!]?=", combo: "[>\\s+~](?!=)", word: "[\\\\\\w\\u00A1-\\uFFFF-]"},
        se = {
            split: {
                reg: "{{split}}", action: function (e) {
                    this.parsed.push([null])
                }, order: 0
            },
            id: {
                reg: "#({{word}}+)", action: function (e, t) {
                    this.current().id = t
                }
            },
            tag: {
                reg: "\\*|[a-zA-Z-]\\w*", action: function (e) {
                    this.current().tag = e.toLowerCase()
                }
            },
            classList: {
                reg: "\\.({{word}}+)", action: function (e, t) {
                    var a = this.current(), i = a.classList || (a.classList = []);
                    i.push(t)
                }
            },
            pesudos: {
                reg: ":({{word}}+)(?:\\(([^\\(\\)]*|(?:\\([^\\)]+\\)|[^\\(\\)]*)+)\\))?",
                action: function (e, t, a) {
                    var i = this.current(), n = i.pesudos || (i.pesudos = []), t = t.toLowerCase(), s = {name: t};
                    if (a) a = a.trim();
                    if (te.test(t)) a = ie(a);
                    if (a) s.param = a;
                    n.push(s)
                }
            },
            attributes: {
                reg: "\\[\\s*({{word}}+)(?:({{operator}})['\"]?([^'\"\\[]+)['\"]?)?\\s*\\]",
                action: function (e, t, a, i) {
                    var n = this.current(), s = n.attributes || (n.attributes = []);
                    var r = {};
                    s.push({key: t, operator: a, value: i})
                }
            },
            combo: {
                reg: "\\s*({{combo}})\\s*", action: function (e, t) {
                    var a = this.parsed, i = a[a.length - 1];
                    this.current().combo = t;
                    i.push(null)
                }, order: 0
            }
        };
    var re = new RegExp("\\s*(,|" + ne.combo + "|" + ne.operator + ")\\s*", "g");
    clean = function (e) {
        return e.trim().replace(/\s+/g, " ").replace(re, "$1")
    };
    var oe = new i;
    oe.on(se);
    var ce = t.documentElement || t;
    var le = {
        "for": "htmlFor", href: function (e) {
            return "href" in e ? e.getAttribute("href", 2) : e.getAttribute("href")
        }, type: function (e) {
            return "type" in e ? e.getAttribute("type") : e.type
        }
    };
    var de = H(function () {
        M.appendChild(t.createComment(""));
        return !M.getElementsByTagName("*").length || "number" != typeof t.getElementsByTagName("input").length
    });
    var ue = H(function () {
        M.innerHTML = "<select></select>";
        var e = R(M.lastChild.getAttribute("multiple"));
        return "boolean" !== e && "string" !== e
    });
    var pe = t.compareDocumentPosition ? function (e, t) {
        if (!e.compareDocumentPosition || !t.compareDocumentPosition) return 0; else return 4 & e.compareDocumentPosition(t) ? -1 : e === t ? 0 : 1
    } : "sourceIndex" in t ? function (e, t) {
        if (!e.sourceIndex || !t.sourceIndex) return 0; else return e.sourceIndex - t.sourceIndex
    } : function (e, a) {
        var i = 0, n = [e], s = [a], r = e.parentNode, o = a.parentNode, c = r;
        if (e === t) return -1; else if (a === t) return 1; else if (!r && !o) return 0; else if (!o) return -1; else if (!r) return 1; else if (r === o) return p(e, a);
        for (; c;) {
            n.unshift(c);
            c = c.parentNode
        }
        c = o;
        for (; c;) {
            s.unshift(c);
            c = c.parentNode
        }
        for (; n[i] === s[i];) i++;
        return p(n[i], s[i])
    };
    var fe = function (e) {
        var t = 0;
        return function (a) {
            return a._uid || (a._uid = e + t++)
        }
    }("nes_" + (+new Date).toString(36));
    var me = {length: 1};
    h();
    var he = {
        byId: function (e) {
            var a = t.getElementById(e);
            return a ? [a] : []
        }, byClassName: t.getElementsByClassName ? function (e, a) {
            e = e.join(" ");
            return B((a || t).getElementsByClassName(e))
        } : null, byTagName: de ? function (e, a) {
            var i = (a || t).getElementsByTagName(e);
            return B(i)
        } : function (e, a) {
            var i = (a || t).getElementsByTagName(e);
            var n, s = [], r = 0;
            for (; n = i[r]; r++) if (1 === n.nodeType) s.push(n);
            return s
        }
    };
    var ve = {
        id: function (e, t) {
            return e.id === t
        }, classList: function (e, t) {
            var a = t.length, i = " " + e.className + " ";
            for (; a--;) if (i.indexOf(" " + t[a] + " ") === -1) return !1;
            return !0
        }, tag: function (e, t) {
            if ("*" == t) return !0; else return e.tagName.toLowerCase() === t
        }, pesudos: function (e, t) {
            var a = t.length, i = ge["pesudos"];
            for (; a--;) {
                var n = t[a], s = n.name, r = i[s];
                if (!r) throw Error("不支持的伪类:" + s);
                if (!r(e, n.param)) return !1
            }
            return !0
        }, attributes: function (e, t) {
            var a = t.length, i = ge["operators"];
            for (; a--;) {
                var n = t[a], s = n["operator"], r = i[s], o = d(e, n.key);
                if (null !== o) if (s) {
                    if (!r) throw Error("不支持的操作符:" + s);
                    if (!r(n.value, o + "")) return !1
                } else ; else if ("!=" !== s) return !1
            }
            return !0
        }
    };
    var ge = {
        combos: {
            ">": function (e, t) {
                var a = e.parentNode;
                if (t(a)) return a
            }, "~": function (e, t) {
                var a = c(e);
                for (; a;) {
                    if (t(a)) return a;
                    a = c(a)
                }
            }, " ": function (e, t) {
                var a = e.parentNode;
                for (; a;) {
                    var i = t(a);
                    if (i) return a;
                    if (null === i) return null;
                    a = a.parentNode
                }
                return null
            }, "+": function (e, t) {
                var a = c(e);
                if (a && t(a)) return a
            }
        }, operators: {
            "^=": function (e, t) {
                if (null == t) return !1; else return 0 === t.indexOf(e)
            }, "=": function (e, t) {
                return t === e
            }, "~=": function (e, t) {
                if (null == t) return !1; else return ~(" " + t + " ").indexOf(e)
            }, "$=": function (e, t) {
                return t.substr(t.length - e.length) === e
            }, "|=": function (e, t) {
                return ~("-" + t + "-").indexOf("-" + e + "-")
            }, "*=": function (e, t) {
                return ~t.indexOf(e)
            }, "!=": function (e, t) {
                return t !== e
            }
        }, pesudos: {
            not: function (e, t) {
                return !E(e, t)
            },
            matches: function (e, t) {
                return E(e, t)
            },
            "nth-child": m(!0, !1),
            "nth-last-child": m(!1, !1),
            "nth-of-type": m(!0, !0),
            "nth-last-of-type": m(!1, !0),
            "first-child": function (e) {
                return !c(e)
            },
            "last-child": function (e) {
                return !l(e)
            },
            "last-of-type": function (e) {
                return !l(e, e.nodeName)
            },
            "first-of-type": function (e) {
                return !c(e, e.nodeName)
            },
            "only-child": function (e) {
                return !c(e) && !l(e)
            },
            "only-of-type": function (e) {
                return !c(e, e.nodeName) && !l(e, e.nodeName)
            },
            contains: function (e, t) {
                return ~(e.innerText || e.textContent || "").indexOf(t)
            },
            checked: function (e) {
                return !!e.checked || !!e.selected
            },
            selected: function (e) {
                return e.selected
            },
            enabled: function (e) {
                return e.disabled === !1
            },
            disabled: function (e) {
                return e.disabled === !0
            },
            empty: function (e) {
                var t;
                e = e.firstChild;
                for (; e;) {
                    if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                    e = e.nextSibling
                }
                return !0
            },
            focus: function (e) {
                return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            target: function (e, t) {
                var a = e.id || e.name;
                if (!a) return !1; else return "#" + a === location.hash
            }
        }
    };
    var be = null;
    var _e = !!t.querySelector;
    !function xe(e, t) {
        for (var a in e) j[a] = function (a) {
            var i = e[a];
            return z(function (e, n) {
                i[e] = n;
                if (a in t) t[a](e, n)
            })
        }(a)
    }(ge, {
        operators: function (e) {
            var t = ne.operator.split("]");
            t.splice(1, 0, e.charAt(0) + "]");
            ne.operator = t.join("");
            oe.setup()
        }, combos: function (e) {
            var t = ne.combo.split("]");
            t.splice(1, 0, e + "]");
            ne.combo = t.join("");
            oe.setup()
        }
    });
    j.debug = !1;
    j._nthCache = ae;
    j.parser = oe;
    j.parse = n;
    j._find = $;
    j._get = w;
    j.one = C;
    j.all = k;
    j.matches = E;
    j._uniqueSort = f;
    j._cleanSelector = clean;
    j._getUid = fe;
    if ("object" == typeof exports) module.exports = j; else if ("function" == typeof define && define.amd) define(function () {
        return j
    }); else e.nes = j;
    j.pesudos({
        "nth-match": T(!0), "nth-last-match": T(!1), "local-link": function (e, t) {
            if (t) t = parseInt(t)
        }
    })
}(window, document, void 0);
I$("b44a021fd2fc4a454a46a0b2f27049ce", function (e, t, a, i, n, s) {
    a._$all = function () {
        try {
            return nes.all.apply(nes, arguments)
        } catch (e) {
            return null
        }
    };
    a._$one = function () {
        try {
            return nes.one.apply(nes, arguments)
        } catch (e) {
            return null
        }
    };
    a._$g = nes._get;
    if (!0) e.copy(e.P("nej.e"), a);
    return a
}, "81aff2a53e18d21e037ee9fc803fbf2b", "a27da6620d19c7d30b151d15565f64e2");
I$("00c8984ee3eef37e0d8057a23a6df389", function (e, t, a, i, n) {
    function s(e, t) {
        this.length = 0;
        this._signs = {};
        this._context = t || c;
        if (e) if ("string" == typeof e) {
            if (t && t instanceof s) t = t[0];
            if ("string" == typeof t) t = _(t)[0];
            this._$add(n._$all(e, t))
        } else if (e instanceof s || v(e) || e.length) this._$add(e)
    }

    var r = /^\s*<(\w+|!)[^>]*>/, o = [].slice, c = document, l = "documentElement", d = c[l],
        u = c.createElement("div"), p = null == u.textContent ? "innerText" : "textContent", f = function (e, t, a) {
            a = a || {};
            if (null == this[e] || a.override) this[e] = t;
            return this
        }, m = function (e, t, a) {
            for (; t && t !== a;) {
                if (nes.matches(t, e)) return t;
                t = t.parentNode
            }
        }, h = function (a, i, n) {
            return a === n || "undefined" === a || a === this || a === t || a === e
        }, v = function (e) {
            if (!e) return !1;
            var t = e.nodeType;
            return 1 === t || 9 === t || 11 === t || e.window === e
        }, g = function (e) {
            var t = e.prototype, a = {};
            return {
                extend: function (e, i) {
                    a[e] = t[e];
                    t[e] = i;
                    return this
                }, reset: function () {
                    for (var e in a) if (a.hasOwnProperty(e)) if (void 0 === a[e]) delete t[e]; else t[e] = a[e]
                }
            }
        }, b = g(Function);
    b.extend("autoSet", function () {
        var e = this;
        return function (t, i) {
            if (a._$isObject(t)) {
                var n = o.call(arguments, 1);
                for (var s in t) e.apply(this, [s, t[s]].concat(n));
                return this
            } else return e.apply(this, arguments)
        }
    }).extend("splitProcess", function (e) {
        var t = this;
        return function (i) {
            if (a._$isArray(i)) {
                var n = o.call(arguments, 1), s = i.length, r;
                if (e) r = {};
                for (var c = 0; c < s; c++) {
                    var l = i[c], d = t.apply(this, [l].concat(n));
                    if (e && "string" == typeof l) r[l] = d
                }
                return e ? r : this
            } else return t.apply(this, arguments)
        }
    });
    f = f.autoSet();
    var _ = function (e, t) {
        _._$implement(i._$dump(), {statics: !0});
        i._$clear();
        if ("string" == typeof e && 0 == e.trim().indexOf("<")) {
            var a = document.createElement("div");
            a.innerHTML = e;
            var n = _(a.childNodes);
            return n
        }
        return new s(e, t)
    };
    _._$extend = f._$bind(_);
    _._$extend({
        _$signal: "_uid",
        _$instances: {},
        _$handlers: [],
        _$fragment: function () {
        },
        _$implement: function (e, t, a) {
            a = a || {};
            f.call(s.prototype, e, a.statics ? this._transport(t) : t)
        }.autoSet(),
        _transport: function (e) {
            return function () {
                var t = o.call(arguments);
                t.unshift(this[0]);
                var a = e.apply(this, t);
                if (!h.call(this, a)) return a;
                this._$forEach(function (a, i) {
                    if (0 !== i) {
                        t[0] = a;
                        e.apply(this, t)
                    }
                });
                return this
            }
        },
        _merge: function (e, t, a) {
            var i = e.length || 0, n = 0;
            for (; void 0 !== t[n];) {
                var s = t[n++];
                if (!a || a.call(e, s)) e[i++] = s
            }
            e.length = i;
            return e
        },
        _toArray: function (e) {
            return _._merge([], e)
        },
        _contains: d.contains ? function (e, t) {
            return e === t || (9 == e.nodeType ? e[l] : e).contains(t)
        } : d.compareDocumentPosition ? function (e, t) {
            return t && !!(16 & e.compareDocumentPosition(t))
        } : function (e, t) {
            for (; t = t.parentNode;) if (t === e) return !0;
            return !1
        },
        _$cloneNode: function (e, t) {
            t = !!t;
            var a = e.cloneNode(t), i, n;
            if (t) {
                n = nes.all("*", e);
                n.push(e);
                i = nes.all("*", a);
                i.push(a)
            } else {
                n = [e];
                i = [a]
            }
            for (_i = i.length; _i--;) $.fixture.clone(i[_i], n[_i]);
            return a
        },
        _delegateHandlers: {},
        _cleanSelector: nes._cleanSelector,
        _$uniqueSort: nes._uniqueSort,
        _$matches: nes.matches,
        _$fn: s.prototype,
        _$uid: nes._getUid
    });
    var x = /^(?:click|dblclick|contextmenu|DOMMouseScroll|mouse(?:\w+))$/, y = /^key(?:)/, $ = {
        insertor: {
            top: function (e, t) {
                e.insertBefore(t, e.firstChild)
            }, bottom: function (e, t) {
                e.appendChild(t)
            }, before: function (e, t) {
                var a = e.parentNode;
                if (a) a.insertBefore(t, e)
            }, after: function (e, t) {
                var a = e.parentNode;
                if (a) a.insertBefore(t, e.nextSibling)
            }
        },
        fixProps: {input: "checked", option: "selected", textarea: "value", script: "text"},
        fixture: {
            clone: function (e, t) {
                var a, i;
                if (1 === e.nodeType) {
                    if (e.clearAttributes) {
                        e.clearAttributes();
                        e.mergeAttributes(t)
                    }
                    a = e.nodeName.toLowerCase();
                    if (_prop = $.fixProps[a]) e[_prop] = t[_prop];
                    e.removeAttribute(_._$signal);
                    e.removeAttribute("id")
                }
            }, event: function (t) {
                var a = t.type;
                var i = t.button;
                t.__fixed = !0;
                t.target = t.target || t.srcElement || document;
                t.metaKey = !!t.metaKey;
                if (3 === t.target.nodeType) t.target = t.target.parentNode;
                if (x.test(a)) {
                    t.pageX = e._$pageX(t);
                    t.pageY = e._$pageY(t);
                    if ("mouseover" === a || "mouseout" === a) {
                        var n = t.relatedTarget || t[("mouseover" == a ? "from" : "to") + "Element"];
                        for (; n && 3 == n.nodeType;) n = n.parentNode;
                        t.relatedTarget = n
                    }
                }
                t.which = null != t.charCode ? t.charCode : t.keyCode;
                if (!t.which && void 0 !== i) t.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0;
                if (!t.preventDefault) t.preventDefault = function () {
                    this.returnValue = !1;
                    return this
                };
                if (!t.stopPropagation) t.stopPropagation = function () {
                    this.cancelBubble = !0;
                    return this
                }
            }
        }
    }, w = function (e) {
        var t = _._$matches;
        return function (a, i) {
            var n = _([]);
            if ("boolean" == typeof a) {
                i = a;
                a = null
            }
            this._$forEach(function (s) {
                var r = s[e];
                for (; r;) {
                    if (1 === r.nodeType && (!a || t(r, a))) {
                        n._$add(r);
                        if (!i) break
                    }
                    r = r[e]
                }
            });
            return n
        }
    };
    _._$implement({
        _$style: function (e, a) {
            if (!e) throw Error("缺少css样式名");
            if (void 0 === a) return t._$getStyle(this[0], e); else return this._$forEach(function (i) {
                t._$setStyle(i, e, a)
            })
        }.splitProcess(!0).autoSet(),
        _$attr: function (e, a) {
            if (!e) throw Error("缺少属性名");
            if (void 0 === a) return t._$attr(this[0], e); else return this._$forEach(function (i) {
                t._$attr(i, e, a)
            })
        }.splitProcess(!0).autoSet(),
        _$forEach: function (e) {
            a._$forEach(this, e);
            return this
        },
        _$filter: function (e) {
            var t = [], a = "string" == typeof e;
            this._$forEach(function (i, n) {
                var s = a ? _._$matches(i, e) : e.call(this, i, n);
                if (s) t.push(i)
            });
            return _(t)
        },
        _$map: function (e) {
            var t = [], a = !1;
            this._$forEach(function (i, n) {
                var s = e.call(this, i, n);
                if (!v(s)) a = !0;
                t.push(s)
            });
            return a ? t : _([])._$add(t)
        },
        _$sort: function () {
            var e = this._$get();
            _._$uniqueSort(e);
            return _(e)
        },
        _$add: function (e) {
            if (e) {
                if (e.tagName || "number" != typeof e.length || e === window) e = [e];
                _._merge(this, e, function (e) {
                    if (!v(e)) return !1;
                    var t = _._$uid(e);
                    if (this._signs[t]) return !1; else {
                        this._signs[t] = 1;
                        return !0
                    }
                });
                return this
            }
        },
        _$get: function (e, t) {
            if ("number" != typeof e) return _._toArray(this); else return t ? _(this[e]) : this[e]
        },
        _$last: function (e) {
            return e ? _(this[this.length - 1]) : this[this.length - 1]
        },
        _$first: function (e) {
            return e ? _(this[0]) : this[0]
        },
        _$matches: function (e) {
            return _._$matches(this[0], e)
        },
        _$parent: w("parentNode"),
        _$prev: w("previousSibling"),
        _$next: w("nextSibling"),
        _$children: function (e, t) {
            var a = _([]);
            if ("boolean" == typeof e) {
                t = e;
                e = null
            }
            this._$forEach(function (i) {
                var s = t ? n._$all(e || "*", i) : e ? _(i.childNodes)._$filter(e) : _(i.childNodes);
                a._$add(s)
            });
            return a
        },
        _$siblings: function (e) {
            return this._$prev(e, !0)._$add(this._$next(e, !0))
        },
        _$insert: function (e, t) {
            t = t && t.toLowerCase() || "bottom";
            if (!$.insertor[t]) t = "bottom";
            var a = _(e)[0], i = $.insertor[t];
            if (!a) throw Error("The Element to be inserted is not exist");
            return this._$forEach(function (e, t) {
                i(e, 0 === t ? a : _._$cloneNode(a, !0))
            })
        },
        _$insert2: function (e, t) {
            _(e)._$insert(this, t);
            return this
        },
        _$clone: function (e) {
            return this._$map(function (t) {
                return _._$cloneNode(t, e)
            })
        },
        _$text: function (e) {
            if (void 0 === e) {
                if (!this[0]) throw Error("内部节点为空，无法完成get操作");
                return this[0][p]
            }
            return this._$forEach(function (t) {
                t[p] = e
            })
        },
        _$html: function (e) {
            if (void 0 === e) {
                if (!this[0]) throw Error("内部节点为空，无法完成get操作");
                return this[0].innerHTML
            }
            return this._$forEach(function (t) {
                t.innerHTML = e
            })
        },
        _$val: function (e) {
            if (void 0 === e) {
                if (!this[0]) throw Error("内部节点为空，无法完成get操作");
                return this[0].value
            }
            return this._$forEach(function (t) {
                t.value = e
            })
        },
        _delegate: function (t, a, i) {
            a = _._cleanSelector(a);
            return this._$forEach(function (n) {
                var s = _._$uid(n), r = _._delegateHandlers[s] || (_._delegateHandlers[s] = {}),
                    o = r[t] || (r[t] = {}), c = o[a] || (o[a] = []);
                var l = function (e) {
                    var t;
                    if (t = m(a, e.target || e.srcElement, n)) i.apply(t, arguments)
                };
                l._raw = i;
                c.push(l);
                e._$addEvent(n, t, l)
            })
        },
        _undelegate: function (t, a, i) {
            a = _._cleanSelector(a);
            return this._$forEach(function (n) {
                var s = _._$uid(n);
                var r, o, c;
                if ((r = _._delegateHandlers[s]) && (o = r[t]) && (c = o[a])) {
                    for (var l = c.length; l--;) {
                        var d = c[l];
                        if (!i || d._raw === i) {
                            e._$delEvent(n, t, d);
                            c.splice(l, 1)
                        }
                    }
                    if (!c.length) delete o[a]
                }
            })
        },
        _$on: function (t, a, i) {
            if (void 0 === t) throw Error("缺少事件名参数");
            if ("function" == typeof a) {
                i = a;
                a = null
            }
            var n = t.indexOf(" ");
            if (~n) {
                a = t.slice(n + 1);
                t = t.slice(0, n)
            }
            if (!i) throw Error("缺少回调函数"); else {
                var s = i;
                var i = function (e) {
                    $.fixture.event(e);
                    s.apply(this, arguments)
                };
                s.real = i
            }
            if (a) return this._delegate(t, a, i); else return this._$forEach(function (a) {
                e._$addEvent(a, t, i)
            })
        }.splitProcess().autoSet(),
        _$off: function (t, a, i) {
            if ("function" == typeof a) {
                i = a;
                a = null
            }
            var n;
            if (t && ~(n = t.indexOf(" "))) {
                a = t.slice(n + 1);
                t = t.slice(0, n)
            }
            if (i) i = i.real || i;
            if (a) return this._undelegate(t, a, i); else return this._$forEach(function (a) {
                var n = _._$uid(a), s = _._delegateHandlers[n], r;
                if (!t) {
                    if (s) delete _._delegateHandlers[n];
                    e._$clearEvent(a, t)
                } else {
                    if (s) r = s[t];
                    if (!i) {
                        if (r) delete s[t];
                        e._$clearEvent(a, t)
                    } else e._$delEvent(a, t, i)
                }
            })
        }.splitProcess().autoSet(),
        _$trigger: function (t, a) {
            if ("string" != typeof t) throw Error("事件类型参数错误");
            this._$forEach(function (i) {
                e._$dispatchEvent(i, t, a)
            });
            return this
        }.splitProcess().autoSet(),
        splice: function () {
            throw Error("don't use the NodeList#splice")
        }
    });
    b.reset();
    if (!0) nej.$ = _;
    return _
}, "1876a96e5fed91c4cce05bda442b78ae", "b35210847be0ba21283cbada2712d274", "6f5d8ca720f8058b197bc7c887a7de3a", "69f65528b15b06380ca9693205212ff7", "b44a021fd2fc4a454a46a0b2f27049ce");
I$("8465ecd87acf3410bf9c7e1a7d2a3c95", function (e) {
    return e
}, "00c8984ee3eef37e0d8057a23a6df389");
I$("01553d4fdb7211cac7c84b112a2d7a92", function (e, t, a) {
    var i = null;
    var n = function (a, n, s) {
        var r = '<div id="warning" class="alertbar"><div class="ctr"><div class="logo"></div><div class="ctn">' + n + "</div></div></div>";
        var o = ' <div id="success" class="alertbar"><div class="ctr"><div class="logo"></div><div class="ctn">' + n + "</div></div></div>";
        if (1 !== e(a).length) {
            switch (a) {
                case"#warning":
                    var c = t._$html2node(r);
                    document.body.appendChild(c);
                    break;
                case"#success":
                    var c = t._$html2node(o);
                    document.body.appendChild(c)
            }
            e(a)._$setStyle("display", "block");
            i = setTimeout(function () {
                e(".alertbar")._$setStyle("display", "none");
                if (void 0 !== s) s()
            }, 2500)
        } else {
            e(a + " .ctn")._$text(n);
            e(a)._$setStyle("display", "block");
            clearTimeout(i);
            i = setTimeout(function () {
                e(".alertbar")._$setStyle("display", "none");
                if (void 0 !== s) s()
            }, 2500)
        }
    };
    a._$failed = function (e, t) {
        if ("" === e) e = "加载失败";
        n("#warning", e, t)
    };
    a._$success = function (e, t) {
        if ("" === e) e = "加载成功";
        n("#success", e, t)
    };
    a._$destroy = function () {
        e(".alertbar")._$setStyle("display", "none");
        clearTimeout(i)
    };
    return a
}, "8465ecd87acf3410bf9c7e1a7d2a3c95", "b35210847be0ba21283cbada2712d274");
I$("7e1026b5cb68ba8bcf79a148e82f2d88", {
    "application/1d-interleaved-parityfec": {source: "iana"},
    "application/3gpdash-qoe-report+xml": {source: "iana", compressible: !0},
    "application/3gpp-ims+xml": {source: "iana", compressible: !0},
    "application/a2l": {source: "iana"},
    "application/activemessage": {source: "iana"},
    "application/activity+json": {source: "iana", compressible: !0},
    "application/alto-costmap+json": {source: "iana", compressible: !0},
    "application/alto-costmapfilter+json": {source: "iana", compressible: !0},
    "application/alto-directory+json": {source: "iana", compressible: !0},
    "application/alto-endpointcost+json": {source: "iana", compressible: !0},
    "application/alto-endpointcostparams+json": {source: "iana", compressible: !0},
    "application/alto-endpointprop+json": {source: "iana", compressible: !0},
    "application/alto-endpointpropparams+json": {source: "iana", compressible: !0},
    "application/alto-error+json": {source: "iana", compressible: !0},
    "application/alto-networkmap+json": {source: "iana", compressible: !0},
    "application/alto-networkmapfilter+json": {source: "iana", compressible: !0},
    "application/aml": {source: "iana"},
    "application/andrew-inset": {source: "iana", extensions: ["ez"]},
    "application/applefile": {source: "iana"},
    "application/applixware": {source: "apache", extensions: ["aw"]},
    "application/atf": {source: "iana"},
    "application/atfx": {source: "iana"},
    "application/atom+xml": {source: "iana", compressible: !0, extensions: ["atom"]},
    "application/atomcat+xml": {source: "iana", compressible: !0, extensions: ["atomcat"]},
    "application/atomdeleted+xml": {source: "iana", compressible: !0},
    "application/atomicmail": {source: "iana"},
    "application/atomsvc+xml": {source: "iana", compressible: !0, extensions: ["atomsvc"]},
    "application/atxml": {source: "iana"},
    "application/auth-policy+xml": {source: "iana", compressible: !0},
    "application/bacnet-xdd+zip": {source: "iana", compressible: !1},
    "application/batch-smtp": {source: "iana"},
    "application/bdoc": {compressible: !1, extensions: ["bdoc"]},
    "application/beep+xml": {source: "iana", compressible: !0},
    "application/calendar+json": {source: "iana", compressible: !0},
    "application/calendar+xml": {source: "iana", compressible: !0},
    "application/call-completion": {source: "iana"},
    "application/cals-1840": {source: "iana"},
    "application/cbor": {source: "iana"},
    "application/cccex": {source: "iana"},
    "application/ccmp+xml": {source: "iana", compressible: !0},
    "application/ccxml+xml": {source: "iana", compressible: !0, extensions: ["ccxml"]},
    "application/cdfx+xml": {source: "iana", compressible: !0},
    "application/cdmi-capability": {source: "iana", extensions: ["cdmia"]},
    "application/cdmi-container": {source: "iana", extensions: ["cdmic"]},
    "application/cdmi-domain": {source: "iana", extensions: ["cdmid"]},
    "application/cdmi-object": {source: "iana", extensions: ["cdmio"]},
    "application/cdmi-queue": {source: "iana", extensions: ["cdmiq"]},
    "application/cdni": {source: "iana"},
    "application/cea": {source: "iana"},
    "application/cea-2018+xml": {source: "iana", compressible: !0},
    "application/cellml+xml": {source: "iana", compressible: !0},
    "application/cfw": {source: "iana"},
    "application/clue_info+xml": {source: "iana", compressible: !0},
    "application/cms": {source: "iana"},
    "application/cnrp+xml": {source: "iana", compressible: !0},
    "application/coap-group+json": {source: "iana", compressible: !0},
    "application/coap-payload": {source: "iana"},
    "application/commonground": {source: "iana"},
    "application/conference-info+xml": {source: "iana", compressible: !0},
    "application/cose": {source: "iana"},
    "application/cose-key": {source: "iana"},
    "application/cose-key-set": {source: "iana"},
    "application/cpl+xml": {source: "iana", compressible: !0},
    "application/csrattrs": {source: "iana"},
    "application/csta+xml": {source: "iana", compressible: !0},
    "application/cstadata+xml": {source: "iana", compressible: !0},
    "application/csvm+json": {source: "iana", compressible: !0},
    "application/cu-seeme": {source: "apache", extensions: ["cu"]},
    "application/cwt": {source: "iana"},
    "application/cybercash": {source: "iana"},
    "application/dart": {compressible: !0},
    "application/dash+xml": {source: "iana", compressible: !0, extensions: ["mpd"]},
    "application/dashdelta": {source: "iana"},
    "application/davmount+xml": {source: "iana", compressible: !0, extensions: ["davmount"]},
    "application/dca-rft": {source: "iana"},
    "application/dcd": {source: "iana"},
    "application/dec-dx": {source: "iana"},
    "application/dialog-info+xml": {source: "iana", compressible: !0},
    "application/dicom": {source: "iana"},
    "application/dicom+json": {source: "iana", compressible: !0},
    "application/dicom+xml": {source: "iana", compressible: !0},
    "application/dii": {source: "iana"},
    "application/dit": {source: "iana"},
    "application/dns": {source: "iana"},
    "application/dns+json": {source: "iana", compressible: !0},
    "application/dns-message": {source: "iana"},
    "application/docbook+xml": {source: "apache", compressible: !0, extensions: ["dbk"]},
    "application/dskpp+xml": {source: "iana", compressible: !0},
    "application/dssc+der": {source: "iana", extensions: ["dssc"]},
    "application/dssc+xml": {source: "iana", compressible: !0, extensions: ["xdssc"]},
    "application/dvcs": {source: "iana"},
    "application/ecmascript": {source: "iana", compressible: !0, extensions: ["ecma", "es"]},
    "application/edi-consent": {source: "iana"},
    "application/edi-x12": {source: "iana", compressible: !1},
    "application/edifact": {source: "iana", compressible: !1},
    "application/efi": {source: "iana"},
    "application/emergencycalldata.comment+xml": {source: "iana", compressible: !0},
    "application/emergencycalldata.control+xml": {source: "iana", compressible: !0},
    "application/emergencycalldata.deviceinfo+xml": {source: "iana", compressible: !0},
    "application/emergencycalldata.ecall.msd": {source: "iana"},
    "application/emergencycalldata.providerinfo+xml": {source: "iana", compressible: !0},
    "application/emergencycalldata.serviceinfo+xml": {source: "iana", compressible: !0},
    "application/emergencycalldata.subscriberinfo+xml": {source: "iana", compressible: !0},
    "application/emergencycalldata.veds+xml": {source: "iana", compressible: !0},
    "application/emma+xml": {source: "iana", compressible: !0, extensions: ["emma"]},
    "application/emotionml+xml": {source: "iana", compressible: !0},
    "application/encaprtp": {source: "iana"},
    "application/epp+xml": {source: "iana", compressible: !0},
    "application/epub+zip": {source: "iana", compressible: !1, extensions: ["epub"]},
    "application/eshop": {source: "iana"},
    "application/exi": {source: "iana", extensions: ["exi"]},
    "application/expect-ct-report+json": {source: "iana", compressible: !0},
    "application/fastinfoset": {source: "iana"},
    "application/fastsoap": {source: "iana"},
    "application/fdt+xml": {source: "iana", compressible: !0},
    "application/fhir+json": {source: "iana", compressible: !0},
    "application/fhir+xml": {source: "iana", compressible: !0},
    "application/fido.trusted-apps+json": {compressible: !0},
    "application/fits": {source: "iana"},
    "application/font-sfnt": {source: "iana"},
    "application/font-tdpfr": {source: "iana", extensions: ["pfr"]},
    "application/font-woff": {source: "iana", compressible: !1},
    "application/framework-attributes+xml": {source: "iana", compressible: !0},
    "application/geo+json": {source: "iana", compressible: !0, extensions: ["geojson"]},
    "application/geo+json-seq": {source: "iana"},
    "application/geopackage+sqlite3": {source: "iana"},
    "application/geoxacml+xml": {source: "iana", compressible: !0},
    "application/gltf-buffer": {source: "iana"},
    "application/gml+xml": {source: "iana", compressible: !0, extensions: ["gml"]},
    "application/gpx+xml": {source: "apache", compressible: !0, extensions: ["gpx"]},
    "application/gxf": {source: "apache", extensions: ["gxf"]},
    "application/gzip": {source: "iana", compressible: !1, extensions: ["gz"]},
    "application/h224": {source: "iana"},
    "application/held+xml": {source: "iana", compressible: !0},
    "application/hjson": {extensions: ["hjson"]},
    "application/http": {source: "iana"},
    "application/hyperstudio": {source: "iana", extensions: ["stk"]},
    "application/ibe-key-request+xml": {source: "iana", compressible: !0},
    "application/ibe-pkg-reply+xml": {source: "iana", compressible: !0},
    "application/ibe-pp-data": {source: "iana"},
    "application/iges": {source: "iana"},
    "application/im-iscomposing+xml": {source: "iana", compressible: !0},
    "application/index": {source: "iana"},
    "application/index.cmd": {source: "iana"},
    "application/index.obj": {source: "iana"},
    "application/index.response": {source: "iana"},
    "application/index.vnd": {source: "iana"},
    "application/inkml+xml": {source: "iana", compressible: !0, extensions: ["ink", "inkml"]},
    "application/iotp": {source: "iana"},
    "application/ipfix": {source: "iana", extensions: ["ipfix"]},
    "application/ipp": {source: "iana"},
    "application/isup": {source: "iana"},
    "application/its+xml": {source: "iana", compressible: !0},
    "application/java-archive": {source: "apache", compressible: !1, extensions: ["jar", "war", "ear"]},
    "application/java-serialized-object": {source: "apache", compressible: !1, extensions: ["ser"]},
    "application/java-vm": {source: "apache", compressible: !1, extensions: ["class"]},
    "application/javascript": {source: "iana", charset: "UTF-8", compressible: !0, extensions: ["js", "mjs"]},
    "application/jf2feed+json": {source: "iana", compressible: !0},
    "application/jose": {source: "iana"},
    "application/jose+json": {source: "iana", compressible: !0},
    "application/jrd+json": {source: "iana", compressible: !0},
    "application/json": {source: "iana", charset: "UTF-8", compressible: !0, extensions: ["json", "map"]},
    "application/json-patch+json": {source: "iana", compressible: !0},
    "application/json-seq": {source: "iana"},
    "application/json5": {extensions: ["json5"]},
    "application/jsonml+json": {source: "apache", compressible: !0, extensions: ["jsonml"]},
    "application/jwk+json": {source: "iana", compressible: !0},
    "application/jwk-set+json": {source: "iana", compressible: !0},
    "application/jwt": {source: "iana"},
    "application/kpml-request+xml": {source: "iana", compressible: !0},
    "application/kpml-response+xml": {source: "iana", compressible: !0},
    "application/ld+json": {
        source: "iana", compressible: !0, extensions: ["jsonld"]
    },
    "application/lgr+xml": {source: "iana", compressible: !0},
    "application/link-format": {source: "iana"},
    "application/load-control+xml": {source: "iana", compressible: !0},
    "application/lost+xml": {source: "iana", compressible: !0, extensions: ["lostxml"]},
    "application/lostsync+xml": {source: "iana", compressible: !0},
    "application/lxf": {source: "iana"},
    "application/mac-binhex40": {source: "iana", extensions: ["hqx"]},
    "application/mac-compactpro": {source: "apache", extensions: ["cpt"]},
    "application/macwriteii": {source: "iana"},
    "application/mads+xml": {source: "iana", compressible: !0, extensions: ["mads"]},
    "application/manifest+json": {charset: "UTF-8", compressible: !0, extensions: ["webmanifest"]},
    "application/marc": {source: "iana", extensions: ["mrc"]},
    "application/marcxml+xml": {source: "iana", compressible: !0, extensions: ["mrcx"]},
    "application/mathematica": {source: "iana", extensions: ["ma", "nb", "mb"]},
    "application/mathml+xml": {source: "iana", compressible: !0, extensions: ["mathml"]},
    "application/mathml-content+xml": {source: "iana", compressible: !0},
    "application/mathml-presentation+xml": {source: "iana", compressible: !0},
    "application/mbms-associated-procedure-description+xml": {source: "iana", compressible: !0},
    "application/mbms-deregister+xml": {source: "iana", compressible: !0},
    "application/mbms-envelope+xml": {source: "iana", compressible: !0},
    "application/mbms-msk+xml": {source: "iana", compressible: !0},
    "application/mbms-msk-response+xml": {source: "iana", compressible: !0},
    "application/mbms-protection-description+xml": {source: "iana", compressible: !0},
    "application/mbms-reception-report+xml": {source: "iana", compressible: !0},
    "application/mbms-register+xml": {source: "iana", compressible: !0},
    "application/mbms-register-response+xml": {source: "iana", compressible: !0},
    "application/mbms-schedule+xml": {source: "iana", compressible: !0},
    "application/mbms-user-service-description+xml": {source: "iana", compressible: !0},
    "application/mbox": {source: "iana", extensions: ["mbox"]},
    "application/media-policy-dataset+xml": {source: "iana", compressible: !0},
    "application/media_control+xml": {source: "iana", compressible: !0},
    "application/mediaservercontrol+xml": {source: "iana", compressible: !0, extensions: ["mscml"]},
    "application/merge-patch+json": {source: "iana", compressible: !0},
    "application/metalink+xml": {source: "apache", compressible: !0, extensions: ["metalink"]},
    "application/metalink4+xml": {source: "iana", compressible: !0, extensions: ["meta4"]},
    "application/mets+xml": {source: "iana", compressible: !0, extensions: ["mets"]},
    "application/mf4": {source: "iana"},
    "application/mikey": {source: "iana"},
    "application/mmt-usd+xml": {source: "iana", compressible: !0},
    "application/mods+xml": {source: "iana", compressible: !0, extensions: ["mods"]},
    "application/moss-keys": {source: "iana"},
    "application/moss-signature": {source: "iana"},
    "application/mosskey-data": {source: "iana"},
    "application/mosskey-request": {source: "iana"},
    "application/mp21": {source: "iana", extensions: ["m21", "mp21"]},
    "application/mp4": {source: "iana", extensions: ["mp4s", "m4p"]},
    "application/mpeg4-generic": {source: "iana"},
    "application/mpeg4-iod": {source: "iana"},
    "application/mpeg4-iod-xmt": {source: "iana"},
    "application/mrb-consumer+xml": {source: "iana", compressible: !0},
    "application/mrb-publish+xml": {source: "iana", compressible: !0},
    "application/msc-ivr+xml": {source: "iana", compressible: !0},
    "application/msc-mixer+xml": {source: "iana", compressible: !0},
    "application/msword": {source: "iana", compressible: !1, extensions: ["doc", "dot"]},
    "application/mud+json": {source: "iana", compressible: !0},
    "application/mxf": {source: "iana", extensions: ["mxf"]},
    "application/n-quads": {source: "iana", extensions: ["nq"]},
    "application/n-triples": {source: "iana", extensions: ["nt"]},
    "application/nasdata": {source: "iana"},
    "application/news-checkgroups": {source: "iana"},
    "application/news-groupinfo": {source: "iana"},
    "application/news-transmission": {source: "iana"},
    "application/nlsml+xml": {source: "iana", compressible: !0},
    "application/node": {source: "iana"},
    "application/nss": {source: "iana"},
    "application/ocsp-request": {source: "iana"},
    "application/ocsp-response": {source: "iana"},
    "application/octet-stream": {
        source: "iana",
        compressible: !1,
        extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"]
    },
    "application/oda": {source: "iana", extensions: ["oda"]},
    "application/odm+xml": {source: "iana", compressible: !0},
    "application/odx": {source: "iana"},
    "application/oebps-package+xml": {source: "iana", compressible: !0, extensions: ["opf"]},
    "application/ogg": {source: "iana", compressible: !1, extensions: ["ogx"]},
    "application/omdoc+xml": {source: "apache", compressible: !0, extensions: ["omdoc"]},
    "application/onenote": {source: "apache", extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"]},
    "application/oxps": {source: "iana", extensions: ["oxps"]},
    "application/p2p-overlay+xml": {source: "iana", compressible: !0},
    "application/parityfec": {source: "iana"},
    "application/passport": {source: "iana"},
    "application/patch-ops-error+xml": {source: "iana", compressible: !0, extensions: ["xer"]},
    "application/pdf": {source: "iana", compressible: !1, extensions: ["pdf"]},
    "application/pdx": {source: "iana"},
    "application/pem-certificate-chain": {source: "iana"},
    "application/pgp-encrypted": {source: "iana", compressible: !1, extensions: ["pgp"]},
    "application/pgp-keys": {source: "iana"},
    "application/pgp-signature": {source: "iana", extensions: ["asc", "sig"]},
    "application/pics-rules": {source: "apache", extensions: ["prf"]},
    "application/pidf+xml": {source: "iana", compressible: !0},
    "application/pidf-diff+xml": {source: "iana", compressible: !0},
    "application/pkcs10": {source: "iana", extensions: ["p10"]},
    "application/pkcs12": {source: "iana"},
    "application/pkcs7-mime": {source: "iana", extensions: ["p7m", "p7c"]},
    "application/pkcs7-signature": {source: "iana", extensions: ["p7s"]},
    "application/pkcs8": {source: "iana", extensions: ["p8"]},
    "application/pkcs8-encrypted": {source: "iana"},
    "application/pkix-attr-cert": {source: "iana", extensions: ["ac"]},
    "application/pkix-cert": {source: "iana", extensions: ["cer"]},
    "application/pkix-crl": {source: "iana", extensions: ["crl"]},
    "application/pkix-pkipath": {source: "iana", extensions: ["pkipath"]},
    "application/pkixcmp": {source: "iana", extensions: ["pki"]},
    "application/pls+xml": {source: "iana", compressible: !0, extensions: ["pls"]},
    "application/poc-settings+xml": {source: "iana", compressible: !0},
    "application/postscript": {source: "iana", compressible: !0, extensions: ["ai", "eps", "ps"]},
    "application/ppsp-tracker+json": {source: "iana", compressible: !0},
    "application/problem+json": {source: "iana", compressible: !0},
    "application/problem+xml": {source: "iana", compressible: !0},
    "application/provenance+xml": {source: "iana", compressible: !0},
    "application/prs.alvestrand.titrax-sheet": {source: "iana"},
    "application/prs.cww": {source: "iana", extensions: ["cww"]},
    "application/prs.hpub+zip": {source: "iana", compressible: !1},
    "application/prs.nprend": {source: "iana"},
    "application/prs.plucker": {source: "iana"},
    "application/prs.rdf-xml-crypt": {source: "iana"},
    "application/prs.xsf+xml": {source: "iana", compressible: !0},
    "application/pskc+xml": {source: "iana", compressible: !0, extensions: ["pskcxml"]},
    "application/qsig": {source: "iana"},
    "application/raml+yaml": {compressible: !0, extensions: ["raml"]},
    "application/raptorfec": {source: "iana"},
    "application/rdap+json": {source: "iana", compressible: !0},
    "application/rdf+xml": {source: "iana", compressible: !0, extensions: ["rdf", "owl"]},
    "application/reginfo+xml": {source: "iana", compressible: !0, extensions: ["rif"]},
    "application/relax-ng-compact-syntax": {source: "iana", extensions: ["rnc"]},
    "application/remote-printing": {source: "iana"},
    "application/reputon+json": {source: "iana", compressible: !0},
    "application/resource-lists+xml": {source: "iana", compressible: !0, extensions: ["rl"]},
    "application/resource-lists-diff+xml": {source: "iana", compressible: !0, extensions: ["rld"]},
    "application/rfc+xml": {source: "iana", compressible: !0},
    "application/riscos": {source: "iana"},
    "application/rlmi+xml": {source: "iana", compressible: !0},
    "application/rls-services+xml": {source: "iana", compressible: !0, extensions: ["rs"]},
    "application/route-apd+xml": {source: "iana", compressible: !0},
    "application/route-s-tsid+xml": {source: "iana", compressible: !0},
    "application/route-usd+xml": {source: "iana", compressible: !0},
    "application/rpki-ghostbusters": {source: "iana", extensions: ["gbr"]},
    "application/rpki-manifest": {source: "iana", extensions: ["mft"]},
    "application/rpki-publication": {source: "iana"},
    "application/rpki-roa": {source: "iana", extensions: ["roa"]},
    "application/rpki-updown": {source: "iana"},
    "application/rsd+xml": {source: "apache", compressible: !0, extensions: ["rsd"]},
    "application/rss+xml": {source: "apache", compressible: !0, extensions: ["rss"]},
    "application/rtf": {source: "iana", compressible: !0, extensions: ["rtf"]},
    "application/rtploopback": {source: "iana"},
    "application/rtx": {source: "iana"},
    "application/samlassertion+xml": {source: "iana", compressible: !0},
    "application/samlmetadata+xml": {source: "iana", compressible: !0},
    "application/sbml+xml": {source: "iana", compressible: !0, extensions: ["sbml"]},
    "application/scaip+xml": {source: "iana", compressible: !0},
    "application/scim+json": {source: "iana", compressible: !0},
    "application/scvp-cv-request": {source: "iana", extensions: ["scq"]},
    "application/scvp-cv-response": {source: "iana", extensions: ["scs"]},
    "application/scvp-vp-request": {source: "iana", extensions: ["spq"]},
    "application/scvp-vp-response": {source: "iana", extensions: ["spp"]},
    "application/sdp": {source: "iana", extensions: ["sdp"]},
    "application/secevent+jwt": {source: "iana"},
    "application/senml+cbor": {source: "iana"},
    "application/senml+json": {source: "iana", compressible: !0},
    "application/senml+xml": {source: "iana", compressible: !0},
    "application/senml-exi": {source: "iana"},
    "application/sensml+cbor": {source: "iana"},
    "application/sensml+json": {source: "iana", compressible: !0},
    "application/sensml+xml": {source: "iana", compressible: !0},
    "application/sensml-exi": {source: "iana"},
    "application/sep+xml": {source: "iana", compressible: !0},
    "application/sep-exi": {source: "iana"},
    "application/session-info": {source: "iana"},
    "application/set-payment": {source: "iana"},
    "application/set-payment-initiation": {
        source: "iana", extensions: ["setpay"]
    },
    "application/set-registration": {source: "iana"},
    "application/set-registration-initiation": {source: "iana", extensions: ["setreg"]},
    "application/sgml": {source: "iana"},
    "application/sgml-open-catalog": {source: "iana"},
    "application/shf+xml": {source: "iana", compressible: !0, extensions: ["shf"]},
    "application/sieve": {source: "iana"},
    "application/simple-filter+xml": {source: "iana", compressible: !0},
    "application/simple-message-summary": {source: "iana"},
    "application/simplesymbolcontainer": {source: "iana"},
    "application/slate": {source: "iana"},
    "application/smil": {source: "iana"},
    "application/smil+xml": {source: "iana", compressible: !0, extensions: ["smi", "smil"]},
    "application/smpte336m": {source: "iana"},
    "application/soap+fastinfoset": {source: "iana"},
    "application/soap+xml": {source: "iana", compressible: !0},
    "application/sparql-query": {source: "iana", extensions: ["rq"]},
    "application/sparql-results+xml": {source: "iana", compressible: !0, extensions: ["srx"]},
    "application/spirits-event+xml": {source: "iana", compressible: !0},
    "application/sql": {source: "iana"},
    "application/srgs": {source: "iana", extensions: ["gram"]},
    "application/srgs+xml": {source: "iana", compressible: !0, extensions: ["grxml"]},
    "application/sru+xml": {source: "iana", compressible: !0, extensions: ["sru"]},
    "application/ssdl+xml": {source: "apache", compressible: !0, extensions: ["ssdl"]},
    "application/ssml+xml": {source: "iana", compressible: !0, extensions: ["ssml"]},
    "application/stix+json": {source: "iana", compressible: !0},
    "application/tamp-apex-update": {source: "iana"},
    "application/tamp-apex-update-confirm": {source: "iana"},
    "application/tamp-community-update": {source: "iana"},
    "application/tamp-community-update-confirm": {source: "iana"},
    "application/tamp-error": {source: "iana"},
    "application/tamp-sequence-adjust": {source: "iana"},
    "application/tamp-sequence-adjust-confirm": {source: "iana"},
    "application/tamp-status-query": {source: "iana"},
    "application/tamp-status-response": {source: "iana"},
    "application/tamp-update": {source: "iana"},
    "application/tamp-update-confirm": {source: "iana"},
    "application/tar": {compressible: !0},
    "application/taxii+json": {source: "iana", compressible: !0},
    "application/tei+xml": {source: "iana", compressible: !0, extensions: ["tei", "teicorpus"]},
    "application/tetra_isi": {source: "iana"},
    "application/thraud+xml": {source: "iana", compressible: !0, extensions: ["tfi"]},
    "application/timestamp-query": {source: "iana"},
    "application/timestamp-reply": {source: "iana"},
    "application/timestamped-data": {source: "iana", extensions: ["tsd"]},
    "application/tlsrpt+gzip": {source: "iana"},
    "application/tlsrpt+json": {source: "iana", compressible: !0},
    "application/tnauthlist": {source: "iana"},
    "application/trickle-ice-sdpfrag": {source: "iana"},
    "application/trig": {source: "iana"},
    "application/ttml+xml": {source: "iana", compressible: !0},
    "application/tve-trigger": {source: "iana"},
    "application/tzif": {source: "iana"},
    "application/tzif-leap": {source: "iana"},
    "application/ulpfec": {source: "iana"},
    "application/urc-grpsheet+xml": {source: "iana", compressible: !0},
    "application/urc-ressheet+xml": {source: "iana", compressible: !0},
    "application/urc-targetdesc+xml": {source: "iana", compressible: !0},
    "application/urc-uisocketdesc+xml": {source: "iana", compressible: !0},
    "application/vcard+json": {source: "iana", compressible: !0},
    "application/vcard+xml": {source: "iana", compressible: !0},
    "application/vemmi": {source: "iana"},
    "application/vividence.scriptfile": {source: "apache"},
    "application/vnd.1000minds.decision-model+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp-prose+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp-prose-pc3ch+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp-v2x-local-service-information": {source: "iana"},
    "application/vnd.3gpp.access-transfer-events+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.bsf+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.gmop+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mc-signalling-ear": {source: "iana"},
    "application/vnd.3gpp.mcdata-affiliation-command+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcdata-info+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcdata-payload": {source: "iana"},
    "application/vnd.3gpp.mcdata-service-config+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcdata-signalling": {source: "iana"},
    "application/vnd.3gpp.mcdata-ue-config+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcdata-user-profile+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcptt-affiliation-command+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcptt-floor-request+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcptt-info+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcptt-location-info+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcptt-service-config+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcptt-signed+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcptt-ue-config+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcptt-ue-init-config+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcptt-user-profile+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcvideo-affiliation-command+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcvideo-affiliation-info+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcvideo-location-info+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcvideo-service-config+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcvideo-transmission-request+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcvideo-ue-config+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mcvideo-user-profile+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.mid-call+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.pic-bw-large": {source: "iana", extensions: ["plb"]},
    "application/vnd.3gpp.pic-bw-small": {source: "iana", extensions: ["psb"]},
    "application/vnd.3gpp.pic-bw-var": {source: "iana", extensions: ["pvb"]},
    "application/vnd.3gpp.sms": {source: "iana"},
    "application/vnd.3gpp.sms+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.srvcc-ext+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.srvcc-info+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.state-and-event-info+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp.ussd+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp2.bcmcsinfo+xml": {source: "iana", compressible: !0},
    "application/vnd.3gpp2.sms": {source: "iana"},
    "application/vnd.3gpp2.tcap": {source: "iana", extensions: ["tcap"]},
    "application/vnd.3lightssoftware.imagescal": {source: "iana"},
    "application/vnd.3m.post-it-notes": {source: "iana", extensions: ["pwn"]},
    "application/vnd.accpac.simply.aso": {source: "iana", extensions: ["aso"]},
    "application/vnd.accpac.simply.imp": {source: "iana", extensions: ["imp"]},
    "application/vnd.acucobol": {source: "iana", extensions: ["acu"]},
    "application/vnd.acucorp": {source: "iana", extensions: ["atc", "acutc"]},
    "application/vnd.adobe.air-application-installer-package+zip": {
        source: "apache",
        compressible: !1,
        extensions: ["air"]
    },
    "application/vnd.adobe.flash.movie": {source: "iana"},
    "application/vnd.adobe.formscentral.fcdt": {source: "iana", extensions: ["fcdt"]},
    "application/vnd.adobe.fxp": {source: "iana", extensions: ["fxp", "fxpl"]},
    "application/vnd.adobe.partial-upload": {source: "iana"},
    "application/vnd.adobe.xdp+xml": {source: "iana", compressible: !0, extensions: ["xdp"]},
    "application/vnd.adobe.xfdf": {source: "iana", extensions: ["xfdf"]},
    "application/vnd.aether.imp": {source: "iana"},
    "application/vnd.afpc.afplinedata": {source: "iana"},
    "application/vnd.afpc.modca": {source: "iana"},
    "application/vnd.ah-barcode": {source: "iana"},
    "application/vnd.ahead.space": {source: "iana", extensions: ["ahead"]},
    "application/vnd.airzip.filesecure.azf": {source: "iana", extensions: ["azf"]},
    "application/vnd.airzip.filesecure.azs": {source: "iana", extensions: ["azs"]},
    "application/vnd.amadeus+json": {source: "iana", compressible: !0},
    "application/vnd.amazon.ebook": {source: "apache", extensions: ["azw"]},
    "application/vnd.amazon.mobi8-ebook": {source: "iana"},
    "application/vnd.americandynamics.acc": {source: "iana", extensions: ["acc"]},
    "application/vnd.amiga.ami": {source: "iana", extensions: ["ami"]},
    "application/vnd.amundsen.maze+xml": {source: "iana", compressible: !0},
    "application/vnd.android.package-archive": {source: "apache", compressible: !1, extensions: ["apk"]},
    "application/vnd.anki": {source: "iana"},
    "application/vnd.anser-web-certificate-issue-initiation": {source: "iana", extensions: ["cii"]},
    "application/vnd.anser-web-funds-transfer-initiation": {source: "apache", extensions: ["fti"]},
    "application/vnd.antix.game-component": {source: "iana", extensions: ["atx"]},
    "application/vnd.apache.thrift.binary": {source: "iana"},
    "application/vnd.apache.thrift.compact": {source: "iana"},
    "application/vnd.apache.thrift.json": {source: "iana"},
    "application/vnd.api+json": {source: "iana", compressible: !0},
    "application/vnd.apothekende.reservation+json": {source: "iana", compressible: !0},
    "application/vnd.apple.installer+xml": {source: "iana", compressible: !0, extensions: ["mpkg"]},
    "application/vnd.apple.keynote": {source: "iana", extensions: ["keynote"]},
    "application/vnd.apple.mpegurl": {source: "iana", extensions: ["m3u8"]},
    "application/vnd.apple.numbers": {source: "iana", extensions: ["numbers"]},
    "application/vnd.apple.pages": {source: "iana", extensions: ["pages"]},
    "application/vnd.apple.pkpass": {compressible: !1, extensions: ["pkpass"]},
    "application/vnd.arastra.swi": {source: "iana"},
    "application/vnd.aristanetworks.swi": {source: "iana", extensions: ["swi"]},
    "application/vnd.artisan+json": {source: "iana", compressible: !0},
    "application/vnd.artsquare": {source: "iana"},
    "application/vnd.astraea-software.iota": {source: "iana", extensions: ["iota"]},
    "application/vnd.audiograph": {source: "iana", extensions: ["aep"]},
    "application/vnd.autopackage": {source: "iana"},
    "application/vnd.avalon+json": {
        source: "iana", compressible: !0
    },
    "application/vnd.avistar+xml": {source: "iana", compressible: !0},
    "application/vnd.balsamiq.bmml+xml": {source: "iana", compressible: !0},
    "application/vnd.balsamiq.bmpr": {source: "iana"},
    "application/vnd.banana-accounting": {source: "iana"},
    "application/vnd.bbf.usp.msg": {source: "iana"},
    "application/vnd.bbf.usp.msg+json": {source: "iana", compressible: !0},
    "application/vnd.bekitzur-stech+json": {source: "iana", compressible: !0},
    "application/vnd.bint.med-content": {source: "iana"},
    "application/vnd.biopax.rdf+xml": {source: "iana", compressible: !0},
    "application/vnd.blink-idb-value-wrapper": {source: "iana"},
    "application/vnd.blueice.multipass": {source: "iana", extensions: ["mpm"]},
    "application/vnd.bluetooth.ep.oob": {source: "iana"},
    "application/vnd.bluetooth.le.oob": {source: "iana"},
    "application/vnd.bmi": {source: "iana", extensions: ["bmi"]},
    "application/vnd.businessobjects": {source: "iana", extensions: ["rep"]},
    "application/vnd.byu.uapi+json": {source: "iana", compressible: !0},
    "application/vnd.cab-jscript": {source: "iana"},
    "application/vnd.canon-cpdl": {source: "iana"},
    "application/vnd.canon-lips": {source: "iana"},
    "application/vnd.capasystems-pg+json": {source: "iana", compressible: !0},
    "application/vnd.cendio.thinlinc.clientconf": {source: "iana"},
    "application/vnd.century-systems.tcp_stream": {source: "iana"},
    "application/vnd.chemdraw+xml": {source: "iana", compressible: !0, extensions: ["cdxml"]},
    "application/vnd.chess-pgn": {source: "iana"},
    "application/vnd.chipnuts.karaoke-mmd": {source: "iana", extensions: ["mmd"]},
    "application/vnd.cinderella": {source: "iana", extensions: ["cdy"]},
    "application/vnd.cirpack.isdn-ext": {source: "iana"},
    "application/vnd.citationstyles.style+xml": {source: "iana", compressible: !0, extensions: ["csl"]},
    "application/vnd.claymore": {source: "iana", extensions: ["cla"]},
    "application/vnd.cloanto.rp9": {source: "iana", extensions: ["rp9"]},
    "application/vnd.clonk.c4group": {source: "iana", extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"]},
    "application/vnd.cluetrust.cartomobile-config": {source: "iana", extensions: ["c11amc"]},
    "application/vnd.cluetrust.cartomobile-config-pkg": {source: "iana", extensions: ["c11amz"]},
    "application/vnd.coffeescript": {source: "iana"},
    "application/vnd.collabio.xodocuments.document": {source: "iana"},
    "application/vnd.collabio.xodocuments.document-template": {source: "iana"},
    "application/vnd.collabio.xodocuments.presentation": {source: "iana"},
    "application/vnd.collabio.xodocuments.presentation-template": {source: "iana"},
    "application/vnd.collabio.xodocuments.spreadsheet": {source: "iana"},
    "application/vnd.collabio.xodocuments.spreadsheet-template": {source: "iana"},
    "application/vnd.collection+json": {source: "iana", compressible: !0},
    "application/vnd.collection.doc+json": {source: "iana", compressible: !0},
    "application/vnd.collection.next+json": {source: "iana", compressible: !0},
    "application/vnd.comicbook+zip": {source: "iana", compressible: !1},
    "application/vnd.comicbook-rar": {source: "iana"},
    "application/vnd.commerce-battelle": {source: "iana"},
    "application/vnd.commonspace": {source: "iana", extensions: ["csp"]},
    "application/vnd.contact.cmsg": {source: "iana", extensions: ["cdbcmsg"]},
    "application/vnd.coreos.ignition+json": {source: "iana", compressible: !0},
    "application/vnd.cosmocaller": {source: "iana", extensions: ["cmc"]},
    "application/vnd.crick.clicker": {source: "iana", extensions: ["clkx"]},
    "application/vnd.crick.clicker.keyboard": {source: "iana", extensions: ["clkk"]},
    "application/vnd.crick.clicker.palette": {source: "iana", extensions: ["clkp"]},
    "application/vnd.crick.clicker.template": {source: "iana", extensions: ["clkt"]},
    "application/vnd.crick.clicker.wordbank": {source: "iana", extensions: ["clkw"]},
    "application/vnd.criticaltools.wbs+xml": {source: "iana", compressible: !0, extensions: ["wbs"]},
    "application/vnd.ctc-posml": {source: "iana", extensions: ["pml"]},
    "application/vnd.ctct.ws+xml": {source: "iana", compressible: !0},
    "application/vnd.cups-pdf": {source: "iana"},
    "application/vnd.cups-postscript": {source: "iana"},
    "application/vnd.cups-ppd": {source: "iana", extensions: ["ppd"]},
    "application/vnd.cups-raster": {source: "iana"},
    "application/vnd.cups-raw": {source: "iana"},
    "application/vnd.curl": {source: "iana"},
    "application/vnd.curl.car": {source: "apache", extensions: ["car"]},
    "application/vnd.curl.pcurl": {source: "apache", extensions: ["pcurl"]},
    "application/vnd.cyan.dean.root+xml": {source: "iana", compressible: !0},
    "application/vnd.cybank": {source: "iana"},
    "application/vnd.d2l.coursepackage1p0+zip": {source: "iana", compressible: !1},
    "application/vnd.dart": {source: "iana", compressible: !0, extensions: ["dart"]},
    "application/vnd.data-vision.rdz": {source: "iana", extensions: ["rdz"]},
    "application/vnd.datapackage+json": {source: "iana", compressible: !0},
    "application/vnd.dataresource+json": {source: "iana", compressible: !0},
    "application/vnd.debian.binary-package": {source: "iana"},
    "application/vnd.dece.data": {source: "iana", extensions: ["uvf", "uvvf", "uvd", "uvvd"]},
    "application/vnd.dece.ttml+xml": {source: "iana", compressible: !0, extensions: ["uvt", "uvvt"]},
    "application/vnd.dece.unspecified": {source: "iana", extensions: ["uvx", "uvvx"]},
    "application/vnd.dece.zip": {source: "iana", extensions: ["uvz", "uvvz"]},
    "application/vnd.denovo.fcselayout-link": {source: "iana", extensions: ["fe_launch"]},
    "application/vnd.desmume.movie": {source: "iana"},
    "application/vnd.dir-bi.plate-dl-nosuffix": {source: "iana"},
    "application/vnd.dm.delegation+xml": {source: "iana", compressible: !0},
    "application/vnd.dna": {source: "iana", extensions: ["dna"]},
    "application/vnd.document+json": {source: "iana", compressible: !0},
    "application/vnd.dolby.mlp": {source: "apache", extensions: ["mlp"]},
    "application/vnd.dolby.mobile.1": {source: "iana"},
    "application/vnd.dolby.mobile.2": {source: "iana"},
    "application/vnd.doremir.scorecloud-binary-document": {source: "iana"},
    "application/vnd.dpgraph": {source: "iana", extensions: ["dpg"]},
    "application/vnd.dreamfactory": {source: "iana", extensions: ["dfac"]},
    "application/vnd.drive+json": {source: "iana", compressible: !0},
    "application/vnd.ds-keypoint": {source: "apache", extensions: ["kpxx"]},
    "application/vnd.dtg.local": {source: "iana"},
    "application/vnd.dtg.local.flash": {source: "iana"},
    "application/vnd.dtg.local.html": {source: "iana"},
    "application/vnd.dvb.ait": {source: "iana", extensions: ["ait"]},
    "application/vnd.dvb.dvbj": {source: "iana"},
    "application/vnd.dvb.esgcontainer": {source: "iana"},
    "application/vnd.dvb.ipdcdftnotifaccess": {source: "iana"},
    "application/vnd.dvb.ipdcesgaccess": {source: "iana"},
    "application/vnd.dvb.ipdcesgaccess2": {source: "iana"},
    "application/vnd.dvb.ipdcesgpdd": {source: "iana"},
    "application/vnd.dvb.ipdcroaming": {source: "iana"},
    "application/vnd.dvb.iptv.alfec-base": {source: "iana"},
    "application/vnd.dvb.iptv.alfec-enhancement": {source: "iana"},
    "application/vnd.dvb.notif-aggregate-root+xml": {source: "iana", compressible: !0},
    "application/vnd.dvb.notif-container+xml": {source: "iana", compressible: !0},
    "application/vnd.dvb.notif-generic+xml": {source: "iana", compressible: !0},
    "application/vnd.dvb.notif-ia-msglist+xml": {source: "iana", compressible: !0},
    "application/vnd.dvb.notif-ia-registration-request+xml": {source: "iana", compressible: !0},
    "application/vnd.dvb.notif-ia-registration-response+xml": {source: "iana", compressible: !0},
    "application/vnd.dvb.notif-init+xml": {source: "iana", compressible: !0},
    "application/vnd.dvb.pfr": {source: "iana"},
    "application/vnd.dvb.service": {source: "iana", extensions: ["svc"]},
    "application/vnd.dxr": {source: "iana"},
    "application/vnd.dynageo": {source: "iana", extensions: ["geo"]},
    "application/vnd.dzr": {source: "iana"},
    "application/vnd.easykaraoke.cdgdownload": {source: "iana"},
    "application/vnd.ecdis-update": {source: "iana"},
    "application/vnd.ecip.rlp": {source: "iana"},
    "application/vnd.ecowin.chart": {source: "iana", extensions: ["mag"]},
    "application/vnd.ecowin.filerequest": {source: "iana"},
    "application/vnd.ecowin.fileupdate": {source: "iana"},
    "application/vnd.ecowin.series": {source: "iana"},
    "application/vnd.ecowin.seriesrequest": {source: "iana"},
    "application/vnd.ecowin.seriesupdate": {source: "iana"},
    "application/vnd.efi.img": {source: "iana"},
    "application/vnd.efi.iso": {source: "iana"},
    "application/vnd.emclient.accessrequest+xml": {source: "iana", compressible: !0},
    "application/vnd.enliven": {source: "iana", extensions: ["nml"]},
    "application/vnd.enphase.envoy": {source: "iana"},
    "application/vnd.eprints.data+xml": {source: "iana", compressible: !0},
    "application/vnd.epson.esf": {source: "iana", extensions: ["esf"]},
    "application/vnd.epson.msf": {source: "iana", extensions: ["msf"]},
    "application/vnd.epson.quickanime": {source: "iana", extensions: ["qam"]},
    "application/vnd.epson.salt": {source: "iana", extensions: ["slt"]},
    "application/vnd.epson.ssf": {source: "iana", extensions: ["ssf"]},
    "application/vnd.ericsson.quickcall": {source: "iana"},
    "application/vnd.espass-espass+zip": {source: "iana", compressible: !1},
    "application/vnd.eszigno3+xml": {source: "iana", compressible: !0, extensions: ["es3", "et3"]},
    "application/vnd.etsi.aoc+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.asic-e+zip": {source: "iana", compressible: !1},
    "application/vnd.etsi.asic-s+zip": {source: "iana", compressible: !1},
    "application/vnd.etsi.cug+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.iptvcommand+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.iptvdiscovery+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.iptvprofile+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.iptvsad-bc+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.iptvsad-cod+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.iptvsad-npvr+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.iptvservice+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.iptvsync+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.iptvueprofile+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.mcid+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.mheg5": {source: "iana"},
    "application/vnd.etsi.overload-control-policy-dataset+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.pstn+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.sci+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.simservs+xml": {
        source: "iana", compressible: !0
    },
    "application/vnd.etsi.timestamp-token": {source: "iana"},
    "application/vnd.etsi.tsl+xml": {source: "iana", compressible: !0},
    "application/vnd.etsi.tsl.der": {source: "iana"},
    "application/vnd.eudora.data": {source: "iana"},
    "application/vnd.evolv.ecig.profile": {source: "iana"},
    "application/vnd.evolv.ecig.settings": {source: "iana"},
    "application/vnd.evolv.ecig.theme": {source: "iana"},
    "application/vnd.exstream-empower+zip": {source: "iana", compressible: !1},
    "application/vnd.exstream-package": {source: "iana"},
    "application/vnd.ezpix-album": {source: "iana", extensions: ["ez2"]},
    "application/vnd.ezpix-package": {source: "iana", extensions: ["ez3"]},
    "application/vnd.f-secure.mobile": {source: "iana"},
    "application/vnd.fastcopy-disk-image": {source: "iana"},
    "application/vnd.fdf": {source: "iana", extensions: ["fdf"]},
    "application/vnd.fdsn.mseed": {source: "iana", extensions: ["mseed"]},
    "application/vnd.fdsn.seed": {source: "iana", extensions: ["seed", "dataless"]},
    "application/vnd.ffsns": {source: "iana"},
    "application/vnd.filmit.zfc": {source: "iana"},
    "application/vnd.fints": {source: "iana"},
    "application/vnd.firemonkeys.cloudcell": {source: "iana"},
    "application/vnd.flographit": {source: "iana", extensions: ["gph"]},
    "application/vnd.fluxtime.clip": {source: "iana", extensions: ["ftc"]},
    "application/vnd.font-fontforge-sfd": {source: "iana"},
    "application/vnd.framemaker": {source: "iana", extensions: ["fm", "frame", "maker", "book"]},
    "application/vnd.frogans.fnc": {source: "iana", extensions: ["fnc"]},
    "application/vnd.frogans.ltf": {source: "iana", extensions: ["ltf"]},
    "application/vnd.fsc.weblaunch": {source: "iana", extensions: ["fsc"]},
    "application/vnd.fujitsu.oasys": {source: "iana", extensions: ["oas"]},
    "application/vnd.fujitsu.oasys2": {source: "iana", extensions: ["oa2"]},
    "application/vnd.fujitsu.oasys3": {source: "iana", extensions: ["oa3"]},
    "application/vnd.fujitsu.oasysgp": {source: "iana", extensions: ["fg5"]},
    "application/vnd.fujitsu.oasysprs": {source: "iana", extensions: ["bh2"]},
    "application/vnd.fujixerox.art-ex": {source: "iana"},
    "application/vnd.fujixerox.art4": {source: "iana"},
    "application/vnd.fujixerox.ddd": {source: "iana", extensions: ["ddd"]},
    "application/vnd.fujixerox.docuworks": {source: "iana", extensions: ["xdw"]},
    "application/vnd.fujixerox.docuworks.binder": {source: "iana", extensions: ["xbd"]},
    "application/vnd.fujixerox.docuworks.container": {source: "iana"},
    "application/vnd.fujixerox.hbpl": {source: "iana"},
    "application/vnd.fut-misnet": {source: "iana"},
    "application/vnd.futoin+cbor": {source: "iana"},
    "application/vnd.futoin+json": {source: "iana", compressible: !0},
    "application/vnd.fuzzysheet": {source: "iana", extensions: ["fzs"]},
    "application/vnd.genomatix.tuxedo": {source: "iana", extensions: ["txd"]},
    "application/vnd.geo+json": {source: "iana", compressible: !0},
    "application/vnd.geocube+xml": {source: "iana", compressible: !0},
    "application/vnd.geogebra.file": {source: "iana", extensions: ["ggb"]},
    "application/vnd.geogebra.tool": {source: "iana", extensions: ["ggt"]},
    "application/vnd.geometry-explorer": {source: "iana", extensions: ["gex", "gre"]},
    "application/vnd.geonext": {source: "iana", extensions: ["gxt"]},
    "application/vnd.geoplan": {source: "iana", extensions: ["g2w"]},
    "application/vnd.geospace": {source: "iana", extensions: ["g3w"]},
    "application/vnd.gerber": {source: "iana"},
    "application/vnd.globalplatform.card-content-mgt": {source: "iana"},
    "application/vnd.globalplatform.card-content-mgt-response": {source: "iana"},
    "application/vnd.gmx": {source: "iana", extensions: ["gmx"]},
    "application/vnd.google-apps.document": {compressible: !1, extensions: ["gdoc"]},
    "application/vnd.google-apps.presentation": {compressible: !1, extensions: ["gslides"]},
    "application/vnd.google-apps.spreadsheet": {compressible: !1, extensions: ["gsheet"]},
    "application/vnd.google-earth.kml+xml": {source: "iana", compressible: !0, extensions: ["kml"]},
    "application/vnd.google-earth.kmz": {source: "iana", compressible: !1, extensions: ["kmz"]},
    "application/vnd.gov.sk.e-form+xml": {source: "iana", compressible: !0},
    "application/vnd.gov.sk.e-form+zip": {source: "iana", compressible: !1},
    "application/vnd.gov.sk.xmldatacontainer+xml": {source: "iana", compressible: !0},
    "application/vnd.grafeq": {source: "iana", extensions: ["gqf", "gqs"]},
    "application/vnd.gridmp": {source: "iana"},
    "application/vnd.groove-account": {source: "iana", extensions: ["gac"]},
    "application/vnd.groove-help": {source: "iana", extensions: ["ghf"]},
    "application/vnd.groove-identity-message": {source: "iana", extensions: ["gim"]},
    "application/vnd.groove-injector": {source: "iana", extensions: ["grv"]},
    "application/vnd.groove-tool-message": {source: "iana", extensions: ["gtm"]},
    "application/vnd.groove-tool-template": {source: "iana", extensions: ["tpl"]},
    "application/vnd.groove-vcard": {source: "iana", extensions: ["vcg"]},
    "application/vnd.hal+json": {source: "iana", compressible: !0},
    "application/vnd.hal+xml": {source: "iana", compressible: !0, extensions: ["hal"]},
    "application/vnd.handheld-entertainment+xml": {source: "iana", compressible: !0, extensions: ["zmm"]},
    "application/vnd.hbci": {source: "iana", extensions: ["hbci"]},
    "application/vnd.hc+json": {source: "iana", compressible: !0},
    "application/vnd.hcl-bireports": {source: "iana"},
    "application/vnd.hdt": {source: "iana"},
    "application/vnd.heroku+json": {source: "iana", compressible: !0},
    "application/vnd.hhe.lesson-player": {source: "iana", extensions: ["les"]},
    "application/vnd.hp-hpgl": {source: "iana", extensions: ["hpgl"]},
    "application/vnd.hp-hpid": {source: "iana", extensions: ["hpid"]},
    "application/vnd.hp-hps": {source: "iana", extensions: ["hps"]},
    "application/vnd.hp-jlyt": {source: "iana", extensions: ["jlt"]},
    "application/vnd.hp-pcl": {source: "iana", extensions: ["pcl"]},
    "application/vnd.hp-pclxl": {source: "iana", extensions: ["pclxl"]},
    "application/vnd.httphone": {source: "iana"},
    "application/vnd.hydrostatix.sof-data": {source: "iana", extensions: ["sfd-hdstx"]},
    "application/vnd.hyper+json": {source: "iana", compressible: !0},
    "application/vnd.hyper-item+json": {source: "iana", compressible: !0},
    "application/vnd.hyperdrive+json": {source: "iana", compressible: !0},
    "application/vnd.hzn-3d-crossword": {source: "iana"},
    "application/vnd.ibm.afplinedata": {source: "iana"},
    "application/vnd.ibm.electronic-media": {source: "iana"},
    "application/vnd.ibm.minipay": {source: "iana", extensions: ["mpy"]},
    "application/vnd.ibm.modcap": {source: "iana", extensions: ["afp", "listafp", "list3820"]},
    "application/vnd.ibm.rights-management": {source: "iana", extensions: ["irm"]},
    "application/vnd.ibm.secure-container": {source: "iana", extensions: ["sc"]},
    "application/vnd.iccprofile": {source: "iana", extensions: ["icc", "icm"]},
    "application/vnd.ieee.1905": {source: "iana"},
    "application/vnd.igloader": {source: "iana", extensions: ["igl"]},
    "application/vnd.imagemeter.folder+zip": {source: "iana", compressible: !1},
    "application/vnd.imagemeter.image+zip": {source: "iana", compressible: !1},
    "application/vnd.immervision-ivp": {source: "iana", extensions: ["ivp"]},
    "application/vnd.immervision-ivu": {source: "iana", extensions: ["ivu"]},
    "application/vnd.ims.imsccv1p1": {source: "iana"},
    "application/vnd.ims.imsccv1p2": {source: "iana"},
    "application/vnd.ims.imsccv1p3": {source: "iana"},
    "application/vnd.ims.lis.v2.result+json": {source: "iana", compressible: !0},
    "application/vnd.ims.lti.v2.toolconsumerprofile+json": {source: "iana", compressible: !0},
    "application/vnd.ims.lti.v2.toolproxy+json": {source: "iana", compressible: !0},
    "application/vnd.ims.lti.v2.toolproxy.id+json": {source: "iana", compressible: !0},
    "application/vnd.ims.lti.v2.toolsettings+json": {source: "iana", compressible: !0},
    "application/vnd.ims.lti.v2.toolsettings.simple+json": {source: "iana", compressible: !0},
    "application/vnd.informedcontrol.rms+xml": {source: "iana", compressible: !0},
    "application/vnd.informix-visionary": {source: "iana"},
    "application/vnd.infotech.project": {source: "iana"},
    "application/vnd.infotech.project+xml": {source: "iana", compressible: !0},
    "application/vnd.innopath.wamp.notification": {source: "iana"},
    "application/vnd.insors.igm": {source: "iana", extensions: ["igm"]},
    "application/vnd.intercon.formnet": {source: "iana", extensions: ["xpw", "xpx"]},
    "application/vnd.intergeo": {source: "iana", extensions: ["i2g"]},
    "application/vnd.intertrust.digibox": {source: "iana"},
    "application/vnd.intertrust.nncp": {source: "iana"},
    "application/vnd.intu.qbo": {source: "iana", extensions: ["qbo"]},
    "application/vnd.intu.qfx": {source: "iana", extensions: ["qfx"]},
    "application/vnd.iptc.g2.catalogitem+xml": {source: "iana", compressible: !0},
    "application/vnd.iptc.g2.conceptitem+xml": {source: "iana", compressible: !0},
    "application/vnd.iptc.g2.knowledgeitem+xml": {source: "iana", compressible: !0},
    "application/vnd.iptc.g2.newsitem+xml": {source: "iana", compressible: !0},
    "application/vnd.iptc.g2.newsmessage+xml": {source: "iana", compressible: !0},
    "application/vnd.iptc.g2.packageitem+xml": {source: "iana", compressible: !0},
    "application/vnd.iptc.g2.planningitem+xml": {source: "iana", compressible: !0},
    "application/vnd.ipunplugged.rcprofile": {source: "iana", extensions: ["rcprofile"]},
    "application/vnd.irepository.package+xml": {source: "iana", compressible: !0, extensions: ["irp"]},
    "application/vnd.is-xpr": {source: "iana", extensions: ["xpr"]},
    "application/vnd.isac.fcs": {source: "iana", extensions: ["fcs"]},
    "application/vnd.jam": {source: "iana", extensions: ["jam"]},
    "application/vnd.japannet-directory-service": {source: "iana"},
    "application/vnd.japannet-jpnstore-wakeup": {source: "iana"},
    "application/vnd.japannet-payment-wakeup": {source: "iana"},
    "application/vnd.japannet-registration": {source: "iana"},
    "application/vnd.japannet-registration-wakeup": {source: "iana"},
    "application/vnd.japannet-setstore-wakeup": {source: "iana"},
    "application/vnd.japannet-verification": {source: "iana"},
    "application/vnd.japannet-verification-wakeup": {source: "iana"},
    "application/vnd.jcp.javame.midlet-rms": {source: "iana", extensions: ["rms"]},
    "application/vnd.jisp": {source: "iana", extensions: ["jisp"]},
    "application/vnd.joost.joda-archive": {source: "iana", extensions: ["joda"]},
    "application/vnd.jsk.isdn-ngn": {source: "iana"},
    "application/vnd.kahootz": {source: "iana", extensions: ["ktz", "ktr"]},
    "application/vnd.kde.karbon": {source: "iana", extensions: ["karbon"]},
    "application/vnd.kde.kchart": {source: "iana", extensions: ["chrt"]},
    "application/vnd.kde.kformula": {
        source: "iana", extensions: ["kfo"]
    },
    "application/vnd.kde.kivio": {source: "iana", extensions: ["flw"]},
    "application/vnd.kde.kontour": {source: "iana", extensions: ["kon"]},
    "application/vnd.kde.kpresenter": {source: "iana", extensions: ["kpr", "kpt"]},
    "application/vnd.kde.kspread": {source: "iana", extensions: ["ksp"]},
    "application/vnd.kde.kword": {source: "iana", extensions: ["kwd", "kwt"]},
    "application/vnd.kenameaapp": {source: "iana", extensions: ["htke"]},
    "application/vnd.kidspiration": {source: "iana", extensions: ["kia"]},
    "application/vnd.kinar": {source: "iana", extensions: ["kne", "knp"]},
    "application/vnd.koan": {source: "iana", extensions: ["skp", "skd", "skt", "skm"]},
    "application/vnd.kodak-descriptor": {source: "iana", extensions: ["sse"]},
    "application/vnd.las.las+json": {source: "iana", compressible: !0},
    "application/vnd.las.las+xml": {source: "iana", compressible: !0, extensions: ["lasxml"]},
    "application/vnd.leap+json": {source: "iana", compressible: !0},
    "application/vnd.liberty-request+xml": {source: "iana", compressible: !0},
    "application/vnd.llamagraphics.life-balance.desktop": {source: "iana", extensions: ["lbd"]},
    "application/vnd.llamagraphics.life-balance.exchange+xml": {source: "iana", compressible: !0, extensions: ["lbe"]},
    "application/vnd.lotus-1-2-3": {source: "iana", extensions: ["123"]},
    "application/vnd.lotus-approach": {source: "iana", extensions: ["apr"]},
    "application/vnd.lotus-freelance": {source: "iana", extensions: ["pre"]},
    "application/vnd.lotus-notes": {source: "iana", extensions: ["nsf"]},
    "application/vnd.lotus-organizer": {source: "iana", extensions: ["org"]},
    "application/vnd.lotus-screencam": {source: "iana", extensions: ["scm"]},
    "application/vnd.lotus-wordpro": {source: "iana", extensions: ["lwp"]},
    "application/vnd.macports.portpkg": {source: "iana", extensions: ["portpkg"]},
    "application/vnd.mapbox-vector-tile": {source: "iana"},
    "application/vnd.marlin.drm.actiontoken+xml": {source: "iana", compressible: !0},
    "application/vnd.marlin.drm.conftoken+xml": {source: "iana", compressible: !0},
    "application/vnd.marlin.drm.license+xml": {source: "iana", compressible: !0},
    "application/vnd.marlin.drm.mdcf": {source: "iana"},
    "application/vnd.mason+json": {source: "iana", compressible: !0},
    "application/vnd.maxmind.maxmind-db": {source: "iana"},
    "application/vnd.mcd": {source: "iana", extensions: ["mcd"]},
    "application/vnd.medcalcdata": {source: "iana", extensions: ["mc1"]},
    "application/vnd.mediastation.cdkey": {source: "iana", extensions: ["cdkey"]},
    "application/vnd.meridian-slingshot": {source: "iana"},
    "application/vnd.mfer": {source: "iana", extensions: ["mwf"]},
    "application/vnd.mfmp": {source: "iana", extensions: ["mfm"]},
    "application/vnd.micro+json": {source: "iana", compressible: !0},
    "application/vnd.micrografx.flo": {source: "iana", extensions: ["flo"]},
    "application/vnd.micrografx.igx": {source: "iana", extensions: ["igx"]},
    "application/vnd.microsoft.portable-executable": {source: "iana"},
    "application/vnd.microsoft.windows.thumbnail-cache": {source: "iana"},
    "application/vnd.miele+json": {source: "iana", compressible: !0},
    "application/vnd.mif": {source: "iana", extensions: ["mif"]},
    "application/vnd.minisoft-hp3000-save": {source: "iana"},
    "application/vnd.mitsubishi.misty-guard.trustweb": {source: "iana"},
    "application/vnd.mobius.daf": {source: "iana", extensions: ["daf"]},
    "application/vnd.mobius.dis": {source: "iana", extensions: ["dis"]},
    "application/vnd.mobius.mbk": {source: "iana", extensions: ["mbk"]},
    "application/vnd.mobius.mqy": {source: "iana", extensions: ["mqy"]},
    "application/vnd.mobius.msl": {source: "iana", extensions: ["msl"]},
    "application/vnd.mobius.plc": {source: "iana", extensions: ["plc"]},
    "application/vnd.mobius.txf": {source: "iana", extensions: ["txf"]},
    "application/vnd.mophun.application": {source: "iana", extensions: ["mpn"]},
    "application/vnd.mophun.certificate": {source: "iana", extensions: ["mpc"]},
    "application/vnd.motorola.flexsuite": {source: "iana"},
    "application/vnd.motorola.flexsuite.adsi": {source: "iana"},
    "application/vnd.motorola.flexsuite.fis": {source: "iana"},
    "application/vnd.motorola.flexsuite.gotap": {source: "iana"},
    "application/vnd.motorola.flexsuite.kmr": {source: "iana"},
    "application/vnd.motorola.flexsuite.ttc": {source: "iana"},
    "application/vnd.motorola.flexsuite.wem": {source: "iana"},
    "application/vnd.motorola.iprm": {source: "iana"},
    "application/vnd.mozilla.xul+xml": {source: "iana", compressible: !0, extensions: ["xul"]},
    "application/vnd.ms-3mfdocument": {source: "iana"},
    "application/vnd.ms-artgalry": {source: "iana", extensions: ["cil"]},
    "application/vnd.ms-asf": {source: "iana"},
    "application/vnd.ms-cab-compressed": {source: "iana", extensions: ["cab"]},
    "application/vnd.ms-color.iccprofile": {source: "apache"},
    "application/vnd.ms-excel": {
        source: "iana",
        compressible: !1,
        extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
    },
    "application/vnd.ms-excel.addin.macroenabled.12": {source: "iana", extensions: ["xlam"]},
    "application/vnd.ms-excel.sheet.binary.macroenabled.12": {source: "iana", extensions: ["xlsb"]},
    "application/vnd.ms-excel.sheet.macroenabled.12": {source: "iana", extensions: ["xlsm"]},
    "application/vnd.ms-excel.template.macroenabled.12": {source: "iana", extensions: ["xltm"]},
    "application/vnd.ms-fontobject": {source: "iana", compressible: !0, extensions: ["eot"]},
    "application/vnd.ms-htmlhelp": {source: "iana", extensions: ["chm"]},
    "application/vnd.ms-ims": {source: "iana", extensions: ["ims"]},
    "application/vnd.ms-lrm": {source: "iana", extensions: ["lrm"]},
    "application/vnd.ms-office.activex+xml": {source: "iana", compressible: !0},
    "application/vnd.ms-officetheme": {source: "iana", extensions: ["thmx"]},
    "application/vnd.ms-opentype": {source: "apache", compressible: !0},
    "application/vnd.ms-outlook": {compressible: !1, extensions: ["msg"]},
    "application/vnd.ms-package.obfuscated-opentype": {source: "apache"},
    "application/vnd.ms-pki.seccat": {source: "apache", extensions: ["cat"]},
    "application/vnd.ms-pki.stl": {source: "apache", extensions: ["stl"]},
    "application/vnd.ms-playready.initiator+xml": {source: "iana", compressible: !0},
    "application/vnd.ms-powerpoint": {source: "iana", compressible: !1, extensions: ["ppt", "pps", "pot"]},
    "application/vnd.ms-powerpoint.addin.macroenabled.12": {source: "iana", extensions: ["ppam"]},
    "application/vnd.ms-powerpoint.presentation.macroenabled.12": {source: "iana", extensions: ["pptm"]},
    "application/vnd.ms-powerpoint.slide.macroenabled.12": {source: "iana", extensions: ["sldm"]},
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {source: "iana", extensions: ["ppsm"]},
    "application/vnd.ms-powerpoint.template.macroenabled.12": {source: "iana", extensions: ["potm"]},
    "application/vnd.ms-printdevicecapabilities+xml": {source: "iana", compressible: !0},
    "application/vnd.ms-printing.printticket+xml": {source: "apache", compressible: !0},
    "application/vnd.ms-printschematicket+xml": {source: "iana", compressible: !0},
    "application/vnd.ms-project": {source: "iana", extensions: ["mpp", "mpt"]},
    "application/vnd.ms-tnef": {source: "iana"},
    "application/vnd.ms-windows.devicepairing": {source: "iana"},
    "application/vnd.ms-windows.nwprinting.oob": {source: "iana"},
    "application/vnd.ms-windows.printerpairing": {source: "iana"},
    "application/vnd.ms-windows.wsd.oob": {source: "iana"},
    "application/vnd.ms-wmdrm.lic-chlg-req": {source: "iana"},
    "application/vnd.ms-wmdrm.lic-resp": {source: "iana"},
    "application/vnd.ms-wmdrm.meter-chlg-req": {source: "iana"},
    "application/vnd.ms-wmdrm.meter-resp": {source: "iana"},
    "application/vnd.ms-word.document.macroenabled.12": {source: "iana", extensions: ["docm"]},
    "application/vnd.ms-word.template.macroenabled.12": {source: "iana", extensions: ["dotm"]},
    "application/vnd.ms-works": {source: "iana", extensions: ["wps", "wks", "wcm", "wdb"]},
    "application/vnd.ms-wpl": {source: "iana", extensions: ["wpl"]},
    "application/vnd.ms-xpsdocument": {source: "iana", compressible: !1, extensions: ["xps"]},
    "application/vnd.msa-disk-image": {source: "iana"},
    "application/vnd.mseq": {source: "iana", extensions: ["mseq"]},
    "application/vnd.msign": {source: "iana"},
    "application/vnd.multiad.creator": {source: "iana"},
    "application/vnd.multiad.creator.cif": {source: "iana"},
    "application/vnd.music-niff": {source: "iana"},
    "application/vnd.musician": {source: "iana", extensions: ["mus"]},
    "application/vnd.muvee.style": {source: "iana", extensions: ["msty"]},
    "application/vnd.mynfc": {source: "iana", extensions: ["taglet"]},
    "application/vnd.ncd.control": {source: "iana"},
    "application/vnd.ncd.reference": {source: "iana"},
    "application/vnd.nearst.inv+json": {source: "iana", compressible: !0},
    "application/vnd.nervana": {source: "iana"},
    "application/vnd.netfpx": {source: "iana"},
    "application/vnd.neurolanguage.nlu": {source: "iana", extensions: ["nlu"]},
    "application/vnd.nimn": {source: "iana"},
    "application/vnd.nintendo.nitro.rom": {source: "iana"},
    "application/vnd.nintendo.snes.rom": {source: "iana"},
    "application/vnd.nitf": {source: "iana", extensions: ["ntf", "nitf"]},
    "application/vnd.noblenet-directory": {source: "iana", extensions: ["nnd"]},
    "application/vnd.noblenet-sealer": {source: "iana", extensions: ["nns"]},
    "application/vnd.noblenet-web": {source: "iana", extensions: ["nnw"]},
    "application/vnd.nokia.catalogs": {source: "iana"},
    "application/vnd.nokia.conml+wbxml": {source: "iana"},
    "application/vnd.nokia.conml+xml": {source: "iana", compressible: !0},
    "application/vnd.nokia.iptv.config+xml": {source: "iana", compressible: !0},
    "application/vnd.nokia.isds-radio-presets": {source: "iana"},
    "application/vnd.nokia.landmark+wbxml": {source: "iana"},
    "application/vnd.nokia.landmark+xml": {source: "iana", compressible: !0},
    "application/vnd.nokia.landmarkcollection+xml": {source: "iana", compressible: !0},
    "application/vnd.nokia.n-gage.ac+xml": {source: "iana", compressible: !0},
    "application/vnd.nokia.n-gage.data": {source: "iana", extensions: ["ngdat"]},
    "application/vnd.nokia.n-gage.symbian.install": {source: "iana", extensions: ["n-gage"]},
    "application/vnd.nokia.ncd": {source: "iana"},
    "application/vnd.nokia.pcd+wbxml": {source: "iana"},
    "application/vnd.nokia.pcd+xml": {source: "iana", compressible: !0},
    "application/vnd.nokia.radio-preset": {source: "iana", extensions: ["rpst"]},
    "application/vnd.nokia.radio-presets": {source: "iana", extensions: ["rpss"]},
    "application/vnd.novadigm.edm": {source: "iana", extensions: ["edm"]},
    "application/vnd.novadigm.edx": {source: "iana", extensions: ["edx"]},
    "application/vnd.novadigm.ext": {source: "iana", extensions: ["ext"]},
    "application/vnd.ntt-local.content-share": {
        source: "iana"
    },
    "application/vnd.ntt-local.file-transfer": {source: "iana"},
    "application/vnd.ntt-local.ogw_remote-access": {source: "iana"},
    "application/vnd.ntt-local.sip-ta_remote": {source: "iana"},
    "application/vnd.ntt-local.sip-ta_tcp_stream": {source: "iana"},
    "application/vnd.oasis.opendocument.chart": {source: "iana", extensions: ["odc"]},
    "application/vnd.oasis.opendocument.chart-template": {source: "iana", extensions: ["otc"]},
    "application/vnd.oasis.opendocument.database": {source: "iana", extensions: ["odb"]},
    "application/vnd.oasis.opendocument.formula": {source: "iana", extensions: ["odf"]},
    "application/vnd.oasis.opendocument.formula-template": {source: "iana", extensions: ["odft"]},
    "application/vnd.oasis.opendocument.graphics": {source: "iana", compressible: !1, extensions: ["odg"]},
    "application/vnd.oasis.opendocument.graphics-template": {source: "iana", extensions: ["otg"]},
    "application/vnd.oasis.opendocument.image": {source: "iana", extensions: ["odi"]},
    "application/vnd.oasis.opendocument.image-template": {source: "iana", extensions: ["oti"]},
    "application/vnd.oasis.opendocument.presentation": {source: "iana", compressible: !1, extensions: ["odp"]},
    "application/vnd.oasis.opendocument.presentation-template": {source: "iana", extensions: ["otp"]},
    "application/vnd.oasis.opendocument.spreadsheet": {source: "iana", compressible: !1, extensions: ["ods"]},
    "application/vnd.oasis.opendocument.spreadsheet-template": {source: "iana", extensions: ["ots"]},
    "application/vnd.oasis.opendocument.text": {source: "iana", compressible: !1, extensions: ["odt"]},
    "application/vnd.oasis.opendocument.text-master": {source: "iana", extensions: ["odm"]},
    "application/vnd.oasis.opendocument.text-template": {source: "iana", extensions: ["ott"]},
    "application/vnd.oasis.opendocument.text-web": {source: "iana", extensions: ["oth"]},
    "application/vnd.obn": {source: "iana"},
    "application/vnd.ocf+cbor": {source: "iana"},
    "application/vnd.oftn.l10n+json": {source: "iana", compressible: !0},
    "application/vnd.oipf.contentaccessdownload+xml": {source: "iana", compressible: !0},
    "application/vnd.oipf.contentaccessstreaming+xml": {source: "iana", compressible: !0},
    "application/vnd.oipf.cspg-hexbinary": {source: "iana"},
    "application/vnd.oipf.dae.svg+xml": {source: "iana", compressible: !0},
    "application/vnd.oipf.dae.xhtml+xml": {source: "iana", compressible: !0},
    "application/vnd.oipf.mippvcontrolmessage+xml": {source: "iana", compressible: !0},
    "application/vnd.oipf.pae.gem": {source: "iana"},
    "application/vnd.oipf.spdiscovery+xml": {source: "iana", compressible: !0},
    "application/vnd.oipf.spdlist+xml": {source: "iana", compressible: !0},
    "application/vnd.oipf.ueprofile+xml": {source: "iana", compressible: !0},
    "application/vnd.oipf.userprofile+xml": {source: "iana", compressible: !0},
    "application/vnd.olpc-sugar": {source: "iana", extensions: ["xo"]},
    "application/vnd.oma-scws-config": {source: "iana"},
    "application/vnd.oma-scws-http-request": {source: "iana"},
    "application/vnd.oma-scws-http-response": {source: "iana"},
    "application/vnd.oma.bcast.associated-procedure-parameter+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.bcast.drm-trigger+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.bcast.imd+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.bcast.ltkm": {source: "iana"},
    "application/vnd.oma.bcast.notification+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.bcast.provisioningtrigger": {source: "iana"},
    "application/vnd.oma.bcast.sgboot": {source: "iana"},
    "application/vnd.oma.bcast.sgdd+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.bcast.sgdu": {source: "iana"},
    "application/vnd.oma.bcast.simple-symbol-container": {source: "iana"},
    "application/vnd.oma.bcast.smartcard-trigger+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.bcast.sprov+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.bcast.stkm": {source: "iana"},
    "application/vnd.oma.cab-address-book+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.cab-feature-handler+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.cab-pcc+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.cab-subs-invite+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.cab-user-prefs+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.dcd": {source: "iana"},
    "application/vnd.oma.dcdc": {source: "iana"},
    "application/vnd.oma.dd2+xml": {source: "iana", compressible: !0, extensions: ["dd2"]},
    "application/vnd.oma.drm.risd+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.group-usage-list+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.lwm2m+json": {source: "iana", compressible: !0},
    "application/vnd.oma.lwm2m+tlv": {source: "iana"},
    "application/vnd.oma.pal+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.poc.detailed-progress-report+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.poc.final-report+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.poc.groups+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.poc.invocation-descriptor+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.poc.optimized-progress-report+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.push": {source: "iana"},
    "application/vnd.oma.scidm.messages+xml": {source: "iana", compressible: !0},
    "application/vnd.oma.xcap-directory+xml": {source: "iana", compressible: !0},
    "application/vnd.omads-email+xml": {source: "iana", compressible: !0},
    "application/vnd.omads-file+xml": {source: "iana", compressible: !0},
    "application/vnd.omads-folder+xml": {source: "iana", compressible: !0},
    "application/vnd.omaloc-supl-init": {source: "iana"},
    "application/vnd.onepager": {source: "iana"},
    "application/vnd.onepagertamp": {source: "iana"},
    "application/vnd.onepagertamx": {source: "iana"},
    "application/vnd.onepagertat": {source: "iana"},
    "application/vnd.onepagertatp": {source: "iana"},
    "application/vnd.onepagertatx": {source: "iana"},
    "application/vnd.openblox.game+xml": {source: "iana", compressible: !0},
    "application/vnd.openblox.game-binary": {source: "iana"},
    "application/vnd.openeye.oeb": {source: "iana"},
    "application/vnd.openofficeorg.extension": {source: "apache", extensions: ["oxt"]},
    "application/vnd.openstreetmap.data+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.custom-properties+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.drawing+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.extended-properties+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        source: "iana",
        compressible: !1,
        extensions: ["pptx"]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.presentationml.slide": {source: "iana", extensions: ["sldx"]},
    "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {source: "iana", extensions: ["ppsx"]},
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.presentationml.template": {source: "iana", extensions: ["potx"]},
    "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
        source: "iana", compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        source: "iana",
        compressible: !1,
        extensions: ["xlsx"]
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {source: "iana", extensions: ["xltx"]},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.theme+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.themeoverride+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.vmldrawing": {source: "iana"},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        source: "iana",
        compressible: !1,
        extensions: ["docx"]
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {source: "iana", extensions: ["dotx"]},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
        source: "iana",
        compressible: !0
    },
    "application/vnd.openxmlformats-package.core-properties+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {source: "iana", compressible: !0},
    "application/vnd.openxmlformats-package.relationships+xml": {source: "iana", compressible: !0},
    "application/vnd.oracle.resource+json": {source: "iana", compressible: !0},
    "application/vnd.orange.indata": {source: "iana"},
    "application/vnd.osa.netdeploy": {source: "iana"},
    "application/vnd.osgeo.mapguide.package": {source: "iana", extensions: ["mgp"]},
    "application/vnd.osgi.bundle": {source: "iana"},
    "application/vnd.osgi.dp": {source: "iana", extensions: ["dp"]},
    "application/vnd.osgi.subsystem": {source: "iana", extensions: ["esa"]},
    "application/vnd.otps.ct-kip+xml": {source: "iana", compressible: !0},
    "application/vnd.oxli.countgraph": {source: "iana"},
    "application/vnd.pagerduty+json": {source: "iana", compressible: !0},
    "application/vnd.palm": {source: "iana", extensions: ["pdb", "pqa", "oprc"]},
    "application/vnd.panoply": {source: "iana"},
    "application/vnd.paos.xml": {source: "iana"},
    "application/vnd.patentdive": {source: "iana"},
    "application/vnd.patientecommsdoc": {source: "iana"},
    "application/vnd.pawaafile": {source: "iana", extensions: ["paw"]},
    "application/vnd.pcos": {source: "iana"},
    "application/vnd.pg.format": {source: "iana", extensions: ["str"]},
    "application/vnd.pg.osasli": {source: "iana", extensions: ["ei6"]},
    "application/vnd.piaccess.application-licence": {source: "iana"},
    "application/vnd.picsel": {source: "iana", extensions: ["efif"]},
    "application/vnd.pmi.widget": {source: "iana", extensions: ["wg"]},
    "application/vnd.poc.group-advertisement+xml": {source: "iana", compressible: !0},
    "application/vnd.pocketlearn": {source: "iana", extensions: ["plf"]},
    "application/vnd.powerbuilder6": {source: "iana", extensions: ["pbd"]},
    "application/vnd.powerbuilder6-s": {source: "iana"},
    "application/vnd.powerbuilder7": {source: "iana"},
    "application/vnd.powerbuilder7-s": {source: "iana"},
    "application/vnd.powerbuilder75": {source: "iana"},
    "application/vnd.powerbuilder75-s": {source: "iana"},
    "application/vnd.preminet": {source: "iana"},
    "application/vnd.previewsystems.box": {source: "iana", extensions: ["box"]},
    "application/vnd.proteus.magazine": {source: "iana", extensions: ["mgz"]},
    "application/vnd.psfs": {source: "iana"},
    "application/vnd.publishare-delta-tree": {source: "iana", extensions: ["qps"]},
    "application/vnd.pvi.ptid1": {source: "iana", extensions: ["ptid"]},
    "application/vnd.pwg-multiplexed": {source: "iana"},
    "application/vnd.pwg-xhtml-print+xml": {source: "iana", compressible: !0},
    "application/vnd.qualcomm.brew-app-res": {source: "iana"},
    "application/vnd.quarantainenet": {source: "iana"},
    "application/vnd.quark.quarkxpress": {source: "iana", extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]},
    "application/vnd.quobject-quoxdocument": {source: "iana"},
    "application/vnd.radisys.moml+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-audit+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-audit-conf+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-audit-conn+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-audit-dialog+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-audit-stream+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-conf+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-dialog+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-dialog-base+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-dialog-fax-detect+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-dialog-group+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-dialog-speech+xml": {source: "iana", compressible: !0},
    "application/vnd.radisys.msml-dialog-transform+xml": {source: "iana", compressible: !0},
    "application/vnd.rainstor.data": {source: "iana"},
    "application/vnd.rapid": {source: "iana"},
    "application/vnd.rar": {source: "iana"},
    "application/vnd.realvnc.bed": {source: "iana", extensions: ["bed"]},
    "application/vnd.recordare.musicxml": {source: "iana", extensions: ["mxl"]},
    "application/vnd.recordare.musicxml+xml": {source: "iana", compressible: !0, extensions: ["musicxml"]},
    "application/vnd.renlearn.rlprint": {source: "iana"},
    "application/vnd.restful+json": {source: "iana", compressible: !0},
    "application/vnd.rig.cryptonote": {source: "iana", extensions: ["cryptonote"]},
    "application/vnd.rim.cod": {source: "apache", extensions: ["cod"]},
    "application/vnd.rn-realmedia": {source: "apache", extensions: ["rm"]},
    "application/vnd.rn-realmedia-vbr": {source: "apache", extensions: ["rmvb"]},
    "application/vnd.route66.link66+xml": {source: "iana", compressible: !0, extensions: ["link66"]},
    "application/vnd.rs-274x": {source: "iana"},
    "application/vnd.ruckus.download": {source: "iana"},
    "application/vnd.s3sms": {source: "iana"},
    "application/vnd.sailingtracker.track": {source: "iana", extensions: ["st"]},
    "application/vnd.sbm.cid": {source: "iana"},
    "application/vnd.sbm.mid2": {source: "iana"},
    "application/vnd.scribus": {source: "iana"},
    "application/vnd.sealed.3df": {source: "iana"},
    "application/vnd.sealed.csf": {source: "iana"},
    "application/vnd.sealed.doc": {source: "iana"},
    "application/vnd.sealed.eml": {source: "iana"},
    "application/vnd.sealed.mht": {source: "iana"},
    "application/vnd.sealed.net": {source: "iana"},
    "application/vnd.sealed.ppt": {source: "iana"},
    "application/vnd.sealed.tiff": {source: "iana"},
    "application/vnd.sealed.xls": {source: "iana"},
    "application/vnd.sealedmedia.softseal.html": {source: "iana"},
    "application/vnd.sealedmedia.softseal.pdf": {source: "iana"},
    "application/vnd.seemail": {source: "iana", extensions: ["see"]},
    "application/vnd.sema": {source: "iana", extensions: ["sema"]},
    "application/vnd.semd": {source: "iana", extensions: ["semd"]},
    "application/vnd.semf": {source: "iana", extensions: ["semf"]},
    "application/vnd.shana.informed.formdata": {source: "iana", extensions: ["ifm"]},
    "application/vnd.shana.informed.formtemplate": {source: "iana", extensions: ["itp"]},
    "application/vnd.shana.informed.interchange": {source: "iana", extensions: ["iif"]},
    "application/vnd.shana.informed.package": {source: "iana", extensions: ["ipk"]},
    "application/vnd.shootproof+json": {
        source: "iana", compressible: !0
    },
    "application/vnd.sigrok.session": {source: "iana"},
    "application/vnd.simtech-mindmapper": {source: "iana", extensions: ["twd", "twds"]},
    "application/vnd.siren+json": {source: "iana", compressible: !0},
    "application/vnd.smaf": {source: "iana", extensions: ["mmf"]},
    "application/vnd.smart.notebook": {source: "iana"},
    "application/vnd.smart.teacher": {source: "iana", extensions: ["teacher"]},
    "application/vnd.software602.filler.form+xml": {source: "iana", compressible: !0},
    "application/vnd.software602.filler.form-xml-zip": {source: "iana"},
    "application/vnd.solent.sdkm+xml": {source: "iana", compressible: !0, extensions: ["sdkm", "sdkd"]},
    "application/vnd.spotfire.dxp": {source: "iana", extensions: ["dxp"]},
    "application/vnd.spotfire.sfs": {source: "iana", extensions: ["sfs"]},
    "application/vnd.sqlite3": {source: "iana"},
    "application/vnd.sss-cod": {source: "iana"},
    "application/vnd.sss-dtf": {source: "iana"},
    "application/vnd.sss-ntf": {source: "iana"},
    "application/vnd.stardivision.calc": {source: "apache", extensions: ["sdc"]},
    "application/vnd.stardivision.draw": {source: "apache", extensions: ["sda"]},
    "application/vnd.stardivision.impress": {source: "apache", extensions: ["sdd"]},
    "application/vnd.stardivision.math": {source: "apache", extensions: ["smf"]},
    "application/vnd.stardivision.writer": {source: "apache", extensions: ["sdw", "vor"]},
    "application/vnd.stardivision.writer-global": {source: "apache", extensions: ["sgl"]},
    "application/vnd.stepmania.package": {source: "iana", extensions: ["smzip"]},
    "application/vnd.stepmania.stepchart": {source: "iana", extensions: ["sm"]},
    "application/vnd.street-stream": {source: "iana"},
    "application/vnd.sun.wadl+xml": {source: "iana", compressible: !0, extensions: ["wadl"]},
    "application/vnd.sun.xml.calc": {source: "apache", extensions: ["sxc"]},
    "application/vnd.sun.xml.calc.template": {source: "apache", extensions: ["stc"]},
    "application/vnd.sun.xml.draw": {source: "apache", extensions: ["sxd"]},
    "application/vnd.sun.xml.draw.template": {source: "apache", extensions: ["std"]},
    "application/vnd.sun.xml.impress": {source: "apache", extensions: ["sxi"]},
    "application/vnd.sun.xml.impress.template": {source: "apache", extensions: ["sti"]},
    "application/vnd.sun.xml.math": {source: "apache", extensions: ["sxm"]},
    "application/vnd.sun.xml.writer": {source: "apache", extensions: ["sxw"]},
    "application/vnd.sun.xml.writer.global": {source: "apache", extensions: ["sxg"]},
    "application/vnd.sun.xml.writer.template": {source: "apache", extensions: ["stw"]},
    "application/vnd.sus-calendar": {source: "iana", extensions: ["sus", "susp"]},
    "application/vnd.svd": {source: "iana", extensions: ["svd"]},
    "application/vnd.swiftview-ics": {source: "iana"},
    "application/vnd.symbian.install": {source: "apache", extensions: ["sis", "sisx"]},
    "application/vnd.syncml+xml": {source: "iana", compressible: !0, extensions: ["xsm"]},
    "application/vnd.syncml.dm+wbxml": {source: "iana", extensions: ["bdm"]},
    "application/vnd.syncml.dm+xml": {source: "iana", compressible: !0, extensions: ["xdm"]},
    "application/vnd.syncml.dm.notification": {source: "iana"},
    "application/vnd.syncml.dmddf+wbxml": {source: "iana"},
    "application/vnd.syncml.dmddf+xml": {source: "iana", compressible: !0},
    "application/vnd.syncml.dmtnds+wbxml": {source: "iana"},
    "application/vnd.syncml.dmtnds+xml": {source: "iana", compressible: !0},
    "application/vnd.syncml.ds.notification": {source: "iana"},
    "application/vnd.tableschema+json": {source: "iana", compressible: !0},
    "application/vnd.tao.intent-module-archive": {source: "iana", extensions: ["tao"]},
    "application/vnd.tcpdump.pcap": {source: "iana", extensions: ["pcap", "cap", "dmp"]},
    "application/vnd.think-cell.ppttc+json": {source: "iana", compressible: !0},
    "application/vnd.tmd.mediaflex.api+xml": {source: "iana", compressible: !0},
    "application/vnd.tml": {source: "iana"},
    "application/vnd.tmobile-livetv": {source: "iana", extensions: ["tmo"]},
    "application/vnd.tri.onesource": {source: "iana"},
    "application/vnd.trid.tpt": {source: "iana", extensions: ["tpt"]},
    "application/vnd.triscape.mxs": {source: "iana", extensions: ["mxs"]},
    "application/vnd.trueapp": {source: "iana", extensions: ["tra"]},
    "application/vnd.truedoc": {source: "iana"},
    "application/vnd.ubisoft.webplayer": {source: "iana"},
    "application/vnd.ufdl": {source: "iana", extensions: ["ufd", "ufdl"]},
    "application/vnd.uiq.theme": {source: "iana", extensions: ["utz"]},
    "application/vnd.umajin": {source: "iana", extensions: ["umj"]},
    "application/vnd.unity": {source: "iana", extensions: ["unityweb"]},
    "application/vnd.uoml+xml": {source: "iana", compressible: !0, extensions: ["uoml"]},
    "application/vnd.uplanet.alert": {source: "iana"},
    "application/vnd.uplanet.alert-wbxml": {source: "iana"},
    "application/vnd.uplanet.bearer-choice": {source: "iana"},
    "application/vnd.uplanet.bearer-choice-wbxml": {source: "iana"},
    "application/vnd.uplanet.cacheop": {source: "iana"},
    "application/vnd.uplanet.cacheop-wbxml": {source: "iana"},
    "application/vnd.uplanet.channel": {source: "iana"},
    "application/vnd.uplanet.channel-wbxml": {source: "iana"},
    "application/vnd.uplanet.list": {source: "iana"},
    "application/vnd.uplanet.list-wbxml": {source: "iana"},
    "application/vnd.uplanet.listcmd": {source: "iana"},
    "application/vnd.uplanet.listcmd-wbxml": {source: "iana"},
    "application/vnd.uplanet.signal": {source: "iana"},
    "application/vnd.uri-map": {source: "iana"},
    "application/vnd.valve.source.material": {source: "iana"},
    "application/vnd.vcx": {source: "iana", extensions: ["vcx"]},
    "application/vnd.vd-study": {source: "iana"},
    "application/vnd.vectorworks": {source: "iana"},
    "application/vnd.vel+json": {source: "iana", compressible: !0},
    "application/vnd.verimatrix.vcas": {source: "iana"},
    "application/vnd.veryant.thin": {source: "iana"},
    "application/vnd.vidsoft.vidconference": {source: "iana"},
    "application/vnd.visio": {source: "iana", extensions: ["vsd", "vst", "vss", "vsw"]},
    "application/vnd.visionary": {source: "iana", extensions: ["vis"]},
    "application/vnd.vividence.scriptfile": {source: "iana"},
    "application/vnd.vsf": {source: "iana", extensions: ["vsf"]},
    "application/vnd.wap.sic": {source: "iana"},
    "application/vnd.wap.slc": {source: "iana"},
    "application/vnd.wap.wbxml": {source: "iana", extensions: ["wbxml"]},
    "application/vnd.wap.wmlc": {source: "iana", extensions: ["wmlc"]},
    "application/vnd.wap.wmlscriptc": {source: "iana", extensions: ["wmlsc"]},
    "application/vnd.webturbo": {source: "iana", extensions: ["wtb"]},
    "application/vnd.wfa.p2p": {source: "iana"},
    "application/vnd.wfa.wsc": {source: "iana"},
    "application/vnd.windows.devicepairing": {source: "iana"},
    "application/vnd.wmc": {source: "iana"},
    "application/vnd.wmf.bootstrap": {source: "iana"},
    "application/vnd.wolfram.mathematica": {source: "iana"},
    "application/vnd.wolfram.mathematica.package": {source: "iana"},
    "application/vnd.wolfram.player": {source: "iana", extensions: ["nbp"]},
    "application/vnd.wordperfect": {source: "iana", extensions: ["wpd"]},
    "application/vnd.wqd": {source: "iana", extensions: ["wqd"]},
    "application/vnd.wrq-hp3000-labelled": {source: "iana"},
    "application/vnd.wt.stf": {source: "iana", extensions: ["stf"]},
    "application/vnd.wv.csp+wbxml": {source: "iana"},
    "application/vnd.wv.csp+xml": {source: "iana", compressible: !0},
    "application/vnd.wv.ssp+xml": {source: "iana", compressible: !0},
    "application/vnd.xacml+json": {source: "iana", compressible: !0},
    "application/vnd.xara": {source: "iana", extensions: ["xar"]},
    "application/vnd.xfdl": {source: "iana", extensions: ["xfdl"]},
    "application/vnd.xfdl.webform": {source: "iana"},
    "application/vnd.xmi+xml": {source: "iana", compressible: !0},
    "application/vnd.xmpie.cpkg": {source: "iana"},
    "application/vnd.xmpie.dpkg": {source: "iana"},
    "application/vnd.xmpie.plan": {source: "iana"},
    "application/vnd.xmpie.ppkg": {source: "iana"},
    "application/vnd.xmpie.xlim": {source: "iana"},
    "application/vnd.yamaha.hv-dic": {source: "iana", extensions: ["hvd"]},
    "application/vnd.yamaha.hv-script": {source: "iana", extensions: ["hvs"]},
    "application/vnd.yamaha.hv-voice": {source: "iana", extensions: ["hvp"]},
    "application/vnd.yamaha.openscoreformat": {source: "iana", extensions: ["osf"]},
    "application/vnd.yamaha.openscoreformat.osfpvg+xml": {source: "iana", compressible: !0, extensions: ["osfpvg"]},
    "application/vnd.yamaha.remote-setup": {source: "iana"},
    "application/vnd.yamaha.smaf-audio": {source: "iana", extensions: ["saf"]},
    "application/vnd.yamaha.smaf-phrase": {source: "iana", extensions: ["spf"]},
    "application/vnd.yamaha.through-ngn": {source: "iana"},
    "application/vnd.yamaha.tunnel-udpencap": {source: "iana"},
    "application/vnd.yaoweme": {source: "iana"},
    "application/vnd.yellowriver-custom-menu": {source: "iana", extensions: ["cmp"]},
    "application/vnd.youtube.yt": {source: "iana"},
    "application/vnd.zul": {source: "iana", extensions: ["zir", "zirz"]},
    "application/vnd.zzazz.deck+xml": {source: "iana", compressible: !0, extensions: ["zaz"]},
    "application/voicexml+xml": {source: "iana", compressible: !0, extensions: ["vxml"]},
    "application/voucher-cms+json": {source: "iana", compressible: !0},
    "application/vq-rtcpxr": {source: "iana"},
    "application/wasm": {compressible: !0, extensions: ["wasm"]},
    "application/watcherinfo+xml": {source: "iana", compressible: !0},
    "application/webpush-options+json": {source: "iana", compressible: !0},
    "application/whoispp-query": {source: "iana"},
    "application/whoispp-response": {source: "iana"},
    "application/widget": {source: "iana", extensions: ["wgt"]},
    "application/winhlp": {source: "apache", extensions: ["hlp"]},
    "application/wita": {source: "iana"},
    "application/wordperfect5.1": {source: "iana"},
    "application/wsdl+xml": {source: "iana", compressible: !0, extensions: ["wsdl"]},
    "application/wspolicy+xml": {source: "iana", compressible: !0, extensions: ["wspolicy"]},
    "application/x-7z-compressed": {source: "apache", compressible: !1, extensions: ["7z"]},
    "application/x-abiword": {source: "apache", extensions: ["abw"]},
    "application/x-ace-compressed": {source: "apache", extensions: ["ace"]},
    "application/x-amf": {source: "apache"},
    "application/x-apple-diskimage": {source: "apache", extensions: ["dmg"]},
    "application/x-arj": {compressible: !1, extensions: ["arj"]},
    "application/x-authorware-bin": {source: "apache", extensions: ["aab", "x32", "u32", "vox"]},
    "application/x-authorware-map": {source: "apache", extensions: ["aam"]},
    "application/x-authorware-seg": {source: "apache", extensions: ["aas"]},
    "application/x-bcpio": {source: "apache", extensions: ["bcpio"]},
    "application/x-bdoc": {compressible: !1, extensions: ["bdoc"]},
    "application/x-bittorrent": {
        source: "apache", extensions: ["torrent"]
    },
    "application/x-blorb": {source: "apache", extensions: ["blb", "blorb"]},
    "application/x-bzip": {source: "apache", compressible: !1, extensions: ["bz"]},
    "application/x-bzip2": {source: "apache", compressible: !1, extensions: ["bz2", "boz"]},
    "application/x-cbr": {source: "apache", extensions: ["cbr", "cba", "cbt", "cbz", "cb7"]},
    "application/x-cdlink": {source: "apache", extensions: ["vcd"]},
    "application/x-cfs-compressed": {source: "apache", extensions: ["cfs"]},
    "application/x-chat": {source: "apache", extensions: ["chat"]},
    "application/x-chess-pgn": {source: "apache", extensions: ["pgn"]},
    "application/x-chrome-extension": {extensions: ["crx"]},
    "application/x-cocoa": {source: "nginx", extensions: ["cco"]},
    "application/x-compress": {source: "apache"},
    "application/x-conference": {source: "apache", extensions: ["nsc"]},
    "application/x-cpio": {source: "apache", extensions: ["cpio"]},
    "application/x-csh": {source: "apache", extensions: ["csh"]},
    "application/x-deb": {compressible: !1},
    "application/x-debian-package": {source: "apache", extensions: ["deb", "udeb"]},
    "application/x-dgc-compressed": {source: "apache", extensions: ["dgc"]},
    "application/x-director": {
        source: "apache",
        extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"]
    },
    "application/x-doom": {source: "apache", extensions: ["wad"]},
    "application/x-dtbncx+xml": {source: "apache", compressible: !0, extensions: ["ncx"]},
    "application/x-dtbook+xml": {source: "apache", compressible: !0, extensions: ["dtb"]},
    "application/x-dtbresource+xml": {source: "apache", compressible: !0, extensions: ["res"]},
    "application/x-dvi": {source: "apache", compressible: !1, extensions: ["dvi"]},
    "application/x-envoy": {source: "apache", extensions: ["evy"]},
    "application/x-eva": {source: "apache", extensions: ["eva"]},
    "application/x-font-bdf": {source: "apache", extensions: ["bdf"]},
    "application/x-font-dos": {source: "apache"},
    "application/x-font-framemaker": {source: "apache"},
    "application/x-font-ghostscript": {source: "apache", extensions: ["gsf"]},
    "application/x-font-libgrx": {source: "apache"},
    "application/x-font-linux-psf": {source: "apache", extensions: ["psf"]},
    "application/x-font-pcf": {source: "apache", extensions: ["pcf"]},
    "application/x-font-snf": {source: "apache", extensions: ["snf"]},
    "application/x-font-speedo": {source: "apache"},
    "application/x-font-sunos-news": {source: "apache"},
    "application/x-font-type1": {source: "apache", extensions: ["pfa", "pfb", "pfm", "afm"]},
    "application/x-font-vfont": {source: "apache"},
    "application/x-freearc": {source: "apache", extensions: ["arc"]},
    "application/x-futuresplash": {source: "apache", extensions: ["spl"]},
    "application/x-gca-compressed": {source: "apache", extensions: ["gca"]},
    "application/x-glulx": {source: "apache", extensions: ["ulx"]},
    "application/x-gnumeric": {source: "apache", extensions: ["gnumeric"]},
    "application/x-gramps-xml": {source: "apache", extensions: ["gramps"]},
    "application/x-gtar": {source: "apache", extensions: ["gtar"]},
    "application/x-gzip": {source: "apache"},
    "application/x-hdf": {source: "apache", extensions: ["hdf"]},
    "application/x-httpd-php": {compressible: !0, extensions: ["php"]},
    "application/x-install-instructions": {source: "apache", extensions: ["install"]},
    "application/x-iso9660-image": {source: "apache", extensions: ["iso"]},
    "application/x-java-archive-diff": {source: "nginx", extensions: ["jardiff"]},
    "application/x-java-jnlp-file": {source: "apache", compressible: !1, extensions: ["jnlp"]},
    "application/x-javascript": {compressible: !0},
    "application/x-latex": {source: "apache", compressible: !1, extensions: ["latex"]},
    "application/x-lua-bytecode": {extensions: ["luac"]},
    "application/x-lzh-compressed": {source: "apache", extensions: ["lzh", "lha"]},
    "application/x-makeself": {source: "nginx", extensions: ["run"]},
    "application/x-mie": {source: "apache", extensions: ["mie"]},
    "application/x-mobipocket-ebook": {source: "apache", extensions: ["prc", "mobi"]},
    "application/x-mpegurl": {compressible: !1},
    "application/x-ms-application": {source: "apache", extensions: ["application"]},
    "application/x-ms-shortcut": {source: "apache", extensions: ["lnk"]},
    "application/x-ms-wmd": {source: "apache", extensions: ["wmd"]},
    "application/x-ms-wmz": {source: "apache", extensions: ["wmz"]},
    "application/x-ms-xbap": {source: "apache", extensions: ["xbap"]},
    "application/x-msaccess": {source: "apache", extensions: ["mdb"]},
    "application/x-msbinder": {source: "apache", extensions: ["obd"]},
    "application/x-mscardfile": {source: "apache", extensions: ["crd"]},
    "application/x-msclip": {source: "apache", extensions: ["clp"]},
    "application/x-msdos-program": {extensions: ["exe"]},
    "application/x-msdownload": {source: "apache", extensions: ["exe", "dll", "com", "bat", "msi"]},
    "application/x-msmediaview": {source: "apache", extensions: ["mvb", "m13", "m14"]},
    "application/x-msmetafile": {source: "apache", extensions: ["wmf", "wmz", "emf", "emz"]},
    "application/x-msmoney": {source: "apache", extensions: ["mny"]},
    "application/x-mspublisher": {source: "apache", extensions: ["pub"]},
    "application/x-msschedule": {source: "apache", extensions: ["scd"]},
    "application/x-msterminal": {source: "apache", extensions: ["trm"]},
    "application/x-mswrite": {source: "apache", extensions: ["wri"]},
    "application/x-netcdf": {source: "apache", extensions: ["nc", "cdf"]},
    "application/x-ns-proxy-autoconfig": {compressible: !0, extensions: ["pac"]},
    "application/x-nzb": {source: "apache", extensions: ["nzb"]},
    "application/x-perl": {source: "nginx", extensions: ["pl", "pm"]},
    "application/x-pilot": {source: "nginx", extensions: ["prc", "pdb"]},
    "application/x-pkcs12": {source: "apache", compressible: !1, extensions: ["p12", "pfx"]},
    "application/x-pkcs7-certificates": {source: "apache", extensions: ["p7b", "spc"]},
    "application/x-pkcs7-certreqresp": {source: "apache", extensions: ["p7r"]},
    "application/x-rar-compressed": {source: "apache", compressible: !1, extensions: ["rar"]},
    "application/x-redhat-package-manager": {source: "nginx", extensions: ["rpm"]},
    "application/x-research-info-systems": {source: "apache", extensions: ["ris"]},
    "application/x-sea": {source: "nginx", extensions: ["sea"]},
    "application/x-sh": {source: "apache", compressible: !0, extensions: ["sh"]},
    "application/x-shar": {source: "apache", extensions: ["shar"]},
    "application/x-shockwave-flash": {source: "apache", compressible: !1, extensions: ["swf"]},
    "application/x-silverlight-app": {source: "apache", extensions: ["xap"]},
    "application/x-sql": {source: "apache", extensions: ["sql"]},
    "application/x-stuffit": {source: "apache", compressible: !1, extensions: ["sit"]},
    "application/x-stuffitx": {source: "apache", extensions: ["sitx"]},
    "application/x-subrip": {source: "apache", extensions: ["srt"]},
    "application/x-sv4cpio": {source: "apache", extensions: ["sv4cpio"]},
    "application/x-sv4crc": {source: "apache", extensions: ["sv4crc"]},
    "application/x-t3vm-image": {source: "apache", extensions: ["t3"]},
    "application/x-tads": {source: "apache", extensions: ["gam"]},
    "application/x-tar": {source: "apache", compressible: !0, extensions: ["tar"]},
    "application/x-tcl": {source: "apache", extensions: ["tcl", "tk"]},
    "application/x-tex": {source: "apache", extensions: ["tex"]},
    "application/x-tex-tfm": {source: "apache", extensions: ["tfm"]},
    "application/x-texinfo": {source: "apache", extensions: ["texinfo", "texi"]},
    "application/x-tgif": {source: "apache", extensions: ["obj"]},
    "application/x-ustar": {source: "apache", extensions: ["ustar"]},
    "application/x-virtualbox-hdd": {compressible: !0, extensions: ["hdd"]},
    "application/x-virtualbox-ova": {compressible: !0, extensions: ["ova"]},
    "application/x-virtualbox-ovf": {compressible: !0, extensions: ["ovf"]},
    "application/x-virtualbox-vbox": {compressible: !0, extensions: ["vbox"]},
    "application/x-virtualbox-vbox-extpack": {compressible: !1, extensions: ["vbox-extpack"]},
    "application/x-virtualbox-vdi": {compressible: !0, extensions: ["vdi"]},
    "application/x-virtualbox-vhd": {compressible: !0, extensions: ["vhd"]},
    "application/x-virtualbox-vmdk": {compressible: !0, extensions: ["vmdk"]},
    "application/x-wais-source": {source: "apache", extensions: ["src"]},
    "application/x-web-app-manifest+json": {compressible: !0, extensions: ["webapp"]},
    "application/x-www-form-urlencoded": {source: "iana", compressible: !0},
    "application/x-x509-ca-cert": {source: "apache", extensions: ["der", "crt", "pem"]},
    "application/x-xfig": {source: "apache", extensions: ["fig"]},
    "application/x-xliff+xml": {source: "apache", compressible: !0, extensions: ["xlf"]},
    "application/x-xpinstall": {source: "apache", compressible: !1, extensions: ["xpi"]},
    "application/x-xz": {source: "apache", extensions: ["xz"]},
    "application/x-zmachine": {source: "apache", extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]},
    "application/x400-bp": {source: "iana"},
    "application/xacml+xml": {source: "iana", compressible: !0},
    "application/xaml+xml": {source: "apache", compressible: !0, extensions: ["xaml"]},
    "application/xcap-att+xml": {source: "iana", compressible: !0},
    "application/xcap-caps+xml": {source: "iana", compressible: !0},
    "application/xcap-diff+xml": {source: "iana", compressible: !0, extensions: ["xdf"]},
    "application/xcap-el+xml": {source: "iana", compressible: !0},
    "application/xcap-error+xml": {source: "iana", compressible: !0},
    "application/xcap-ns+xml": {source: "iana", compressible: !0},
    "application/xcon-conference-info+xml": {source: "iana", compressible: !0},
    "application/xcon-conference-info-diff+xml": {source: "iana", compressible: !0},
    "application/xenc+xml": {source: "iana", compressible: !0, extensions: ["xenc"]},
    "application/xhtml+xml": {source: "iana", compressible: !0, extensions: ["xhtml", "xht"]},
    "application/xhtml-voice+xml": {source: "apache", compressible: !0},
    "application/xliff+xml": {source: "iana", compressible: !0},
    "application/xml": {source: "iana", compressible: !0, extensions: ["xml", "xsl", "xsd", "rng"]},
    "application/xml-dtd": {source: "iana", compressible: !0, extensions: ["dtd"]},
    "application/xml-external-parsed-entity": {source: "iana"},
    "application/xml-patch+xml": {source: "iana", compressible: !0},
    "application/xmpp+xml": {source: "iana", compressible: !0},
    "application/xop+xml": {source: "iana", compressible: !0, extensions: ["xop"]},
    "application/xproc+xml": {source: "apache", compressible: !0, extensions: ["xpl"]},
    "application/xslt+xml": {source: "iana", compressible: !0, extensions: ["xslt"]},
    "application/xspf+xml": {source: "apache", compressible: !0, extensions: ["xspf"]},
    "application/xv+xml": {source: "iana", compressible: !0, extensions: ["mxml", "xhvml", "xvml", "xvm"]},
    "application/yang": {source: "iana", extensions: ["yang"]},
    "application/yang-data+json": {
        source: "iana", compressible: !0
    },
    "application/yang-data+xml": {source: "iana", compressible: !0},
    "application/yang-patch+json": {source: "iana", compressible: !0},
    "application/yang-patch+xml": {source: "iana", compressible: !0},
    "application/yin+xml": {source: "iana", compressible: !0, extensions: ["yin"]},
    "application/zip": {source: "iana", compressible: !1, extensions: ["zip"]},
    "application/zlib": {source: "iana"},
    "application/zstd": {source: "iana"},
    "audio/1d-interleaved-parityfec": {source: "iana"},
    "audio/32kadpcm": {source: "iana"},
    "audio/3gpp": {source: "iana", compressible: !1, extensions: ["3gpp"]},
    "audio/3gpp2": {source: "iana"},
    "audio/aac": {source: "iana"},
    "audio/ac3": {source: "iana"},
    "audio/adpcm": {source: "apache", extensions: ["adp"]},
    "audio/ape": {extensions: ["ape"]},
    "audio/amr": {source: "iana", extensions: ["amr"]},
    "audio/amr-wb": {source: "iana"},
    "audio/amr-wb+": {source: "iana"},
    "audio/aptx": {source: "iana"},
    "audio/asc": {source: "iana"},
    "audio/atrac-advanced-lossless": {source: "iana"},
    "audio/atrac-x": {source: "iana"},
    "audio/atrac3": {source: "iana"},
    "audio/basic": {source: "iana", compressible: !1, extensions: ["au", "snd"]},
    "audio/bv16": {source: "iana"},
    "audio/bv32": {source: "iana"},
    "audio/clearmode": {source: "iana"},
    "audio/cn": {source: "iana"},
    "audio/dat12": {source: "iana"},
    "audio/dls": {source: "iana"},
    "audio/dsr-es201108": {source: "iana"},
    "audio/dsr-es202050": {source: "iana"},
    "audio/dsr-es202211": {source: "iana"},
    "audio/dsr-es202212": {source: "iana"},
    "audio/dv": {source: "iana"},
    "audio/dvi4": {source: "iana"},
    "audio/eac3": {source: "iana"},
    "audio/encaprtp": {source: "iana"},
    "audio/evrc": {source: "iana"},
    "audio/evrc-qcp": {source: "iana"},
    "audio/evrc0": {source: "iana"},
    "audio/evrc1": {source: "iana"},
    "audio/evrcb": {source: "iana"},
    "audio/evrcb0": {source: "iana"},
    "audio/evrcb1": {source: "iana"},
    "audio/evrcnw": {source: "iana"},
    "audio/evrcnw0": {source: "iana"},
    "audio/evrcnw1": {source: "iana"},
    "audio/evrcwb": {source: "iana"},
    "audio/evrcwb0": {source: "iana"},
    "audio/evrcwb1": {source: "iana"},
    "audio/evs": {source: "iana"},
    "audio/fwdred": {source: "iana"},
    "audio/g711-0": {source: "iana"},
    "audio/g719": {source: "iana"},
    "audio/g722": {source: "iana"},
    "audio/g7221": {source: "iana"},
    "audio/g723": {source: "iana"},
    "audio/g726-16": {source: "iana"},
    "audio/g726-24": {source: "iana"},
    "audio/g726-32": {source: "iana"},
    "audio/g726-40": {source: "iana"},
    "audio/g728": {source: "iana"},
    "audio/g729": {source: "iana"},
    "audio/g7291": {source: "iana"},
    "audio/g729d": {source: "iana"},
    "audio/g729e": {source: "iana"},
    "audio/gsm": {source: "iana"},
    "audio/gsm-efr": {source: "iana"},
    "audio/gsm-hr-08": {source: "iana"},
    "audio/ilbc": {source: "iana"},
    "audio/ip-mr_v2.5": {source: "iana"},
    "audio/isac": {source: "apache"},
    "audio/l16": {source: "iana"},
    "audio/l20": {source: "iana"},
    "audio/l24": {source: "iana", compressible: !1},
    "audio/l8": {source: "iana"},
    "audio/lpc": {source: "iana"},
    "audio/melp": {source: "iana"},
    "audio/melp1200": {source: "iana"},
    "audio/melp2400": {source: "iana"},
    "audio/melp600": {source: "iana"},
    "audio/midi": {source: "apache", extensions: ["mid", "midi", "kar", "rmi"]},
    "audio/mobile-xmf": {source: "iana"},
    "audio/mp3": {compressible: !1, extensions: ["mp3"]},
    "audio/mp4": {source: "iana", compressible: !1, extensions: ["m4a", "mp4a"]},
    "audio/mp4a-latm": {source: "iana"},
    "audio/mpa": {source: "iana"},
    "audio/mpa-robust": {source: "iana"},
    "audio/mpeg": {source: "iana", compressible: !1, extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]},
    "audio/mpeg4-generic": {source: "iana"},
    "audio/musepack": {source: "apache"},
    "audio/ogg": {source: "iana", compressible: !1, extensions: ["oga", "ogg", "spx"]},
    "audio/opus": {source: "iana"},
    "audio/parityfec": {source: "iana"},
    "audio/pcma": {source: "iana"},
    "audio/pcma-wb": {source: "iana"},
    "audio/pcmu": {source: "iana"},
    "audio/pcmu-wb": {source: "iana"},
    "audio/prs.sid": {source: "iana"},
    "audio/qcelp": {source: "iana"},
    "audio/raptorfec": {source: "iana"},
    "audio/red": {source: "iana"},
    "audio/rtp-enc-aescm128": {source: "iana"},
    "audio/rtp-midi": {source: "iana"},
    "audio/rtploopback": {source: "iana"},
    "audio/rtx": {source: "iana"},
    "audio/s3m": {source: "apache", extensions: ["s3m"]},
    "audio/silk": {source: "apache", extensions: ["sil"]},
    "audio/smv": {source: "iana"},
    "audio/smv-qcp": {source: "iana"},
    "audio/smv0": {source: "iana"},
    "audio/sp-midi": {source: "iana"},
    "audio/speex": {source: "iana"},
    "audio/t140c": {source: "iana"},
    "audio/t38": {source: "iana"},
    "audio/telephone-event": {source: "iana"},
    "audio/tetra_acelp": {source: "iana"},
    "audio/tone": {source: "iana"},
    "audio/uemclip": {source: "iana"},
    "audio/ulpfec": {source: "iana"},
    "audio/usac": {source: "iana"},
    "audio/vdvi": {source: "iana"},
    "audio/vmr-wb": {source: "iana"},
    "audio/vnd.3gpp.iufp": {source: "iana"},
    "audio/vnd.4sb": {source: "iana"},
    "audio/vnd.audiokoz": {source: "iana"},
    "audio/vnd.celp": {source: "iana"},
    "audio/vnd.cisco.nse": {source: "iana"},
    "audio/vnd.cmles.radio-events": {source: "iana"},
    "audio/vnd.cns.anp1": {source: "iana"},
    "audio/vnd.cns.inf1": {source: "iana"},
    "audio/vnd.dece.audio": {source: "iana", extensions: ["uva", "uvva"]},
    "audio/vnd.digital-winds": {source: "iana", extensions: ["eol"]},
    "audio/vnd.dlna.adts": {source: "iana"},
    "audio/vnd.dolby.heaac.1": {source: "iana"},
    "audio/vnd.dolby.heaac.2": {source: "iana"},
    "audio/vnd.dolby.mlp": {source: "iana"},
    "audio/vnd.dolby.mps": {source: "iana"},
    "audio/vnd.dolby.pl2": {source: "iana"},
    "audio/vnd.dolby.pl2x": {source: "iana"},
    "audio/vnd.dolby.pl2z": {source: "iana"},
    "audio/vnd.dolby.pulse.1": {source: "iana"},
    "audio/vnd.dra": {source: "iana", extensions: ["dra"]},
    "audio/vnd.dts": {source: "iana", extensions: ["dts"]},
    "audio/vnd.dts.hd": {source: "iana", extensions: ["dtshd"]},
    "audio/vnd.dts.uhd": {source: "iana"},
    "audio/vnd.dvb.file": {source: "iana"},
    "audio/vnd.everad.plj": {source: "iana"},
    "audio/vnd.hns.audio": {source: "iana"},
    "audio/vnd.lucent.voice": {source: "iana", extensions: ["lvp"]},
    "audio/vnd.ms-playready.media.pya": {source: "iana", extensions: ["pya"]},
    "audio/vnd.nokia.mobile-xmf": {source: "iana"},
    "audio/vnd.nortel.vbk": {source: "iana"},
    "audio/vnd.nuera.ecelp4800": {source: "iana", extensions: ["ecelp4800"]},
    "audio/vnd.nuera.ecelp7470": {source: "iana", extensions: ["ecelp7470"]},
    "audio/vnd.nuera.ecelp9600": {source: "iana", extensions: ["ecelp9600"]},
    "audio/vnd.octel.sbc": {source: "iana"},
    "audio/vnd.presonus.multitrack": {source: "iana"},
    "audio/vnd.qcelp": {source: "iana"},
    "audio/vnd.rhetorex.32kadpcm": {source: "iana"},
    "audio/vnd.rip": {source: "iana", extensions: ["rip"]},
    "audio/vnd.rn-realaudio": {compressible: !1},
    "audio/vnd.sealedmedia.softseal.mpeg": {source: "iana"},
    "audio/vnd.vmx.cvsd": {source: "iana"},
    "audio/vnd.wave": {compressible: !1},
    "audio/vorbis": {source: "iana", compressible: !1},
    "audio/vorbis-config": {source: "iana"},
    "audio/wav": {compressible: !1, extensions: ["wav"]},
    "audio/wave": {compressible: !1, extensions: ["wav"]},
    "audio/webm": {source: "apache", compressible: !1, extensions: ["weba"]},
    "audio/x-aac": {source: "apache", compressible: !1, extensions: ["aac"]},
    "audio/x-aiff": {source: "apache", extensions: ["aif", "aiff", "aifc"]},
    "audio/x-caf": {source: "apache", compressible: !1, extensions: ["caf"]},
    "audio/x-flac": {source: "apache", extensions: ["flac"]},
    "audio/x-m4a": {source: "nginx", extensions: ["m4a"]},
    "audio/x-matroska": {source: "apache", extensions: ["mka"]},
    "audio/x-mpegurl": {source: "apache", extensions: ["m3u"]},
    "audio/x-ms-wax": {source: "apache", extensions: ["wax"]},
    "audio/x-ms-wma": {source: "apache", extensions: ["wma"]},
    "audio/x-pn-realaudio": {source: "apache", extensions: ["ram", "ra"]},
    "audio/x-pn-realaudio-plugin": {source: "apache", extensions: ["rmp"]},
    "audio/x-realaudio": {source: "nginx", extensions: ["ra"]},
    "audio/x-tta": {source: "apache"},
    "audio/x-wav": {source: "apache", extensions: ["wav"]},
    "audio/xm": {source: "apache", extensions: ["xm"]},
    "chemical/x-cdx": {source: "apache", extensions: ["cdx"]},
    "chemical/x-cif": {source: "apache", extensions: ["cif"]},
    "chemical/x-cmdf": {source: "apache", extensions: ["cmdf"]},
    "chemical/x-cml": {source: "apache", extensions: ["cml"]},
    "chemical/x-csml": {source: "apache", extensions: ["csml"]},
    "chemical/x-pdb": {source: "apache"},
    "chemical/x-xyz": {source: "apache", extensions: ["xyz"]},
    "font/collection": {source: "iana", extensions: ["ttc"]},
    "font/otf": {source: "iana", compressible: !0, extensions: ["otf"]},
    "font/sfnt": {source: "iana"},
    "font/ttf": {source: "iana", extensions: ["ttf"]},
    "font/woff": {source: "iana", extensions: ["woff"]},
    "font/woff2": {source: "iana", extensions: ["woff2"]},
    "image/aces": {source: "iana", extensions: ["exr"]},
    "image/apng": {compressible: !1, extensions: ["apng"]},
    "image/avci": {source: "iana"},
    "image/avcs": {source: "iana"},
    "image/bmp": {source: "iana", compressible: !0, extensions: ["bmp"]},
    "image/cgm": {source: "iana", extensions: ["cgm"]},
    "image/dicom-rle": {source: "iana", extensions: ["drle"]},
    "image/emf": {source: "iana", extensions: ["emf"]},
    "image/fits": {source: "iana", extensions: ["fits"]},
    "image/g3fax": {source: "iana", extensions: ["g3"]},
    "image/gif": {source: "iana", compressible: !1, extensions: ["gif"]},
    "image/heic": {source: "iana", extensions: ["heic"]},
    "image/heic-sequence": {source: "iana", extensions: ["heics"]},
    "image/heif": {source: "iana", extensions: ["heif"]},
    "image/heif-sequence": {source: "iana", extensions: ["heifs"]},
    "image/ief": {source: "iana", extensions: ["ief"]},
    "image/jls": {source: "iana", extensions: ["jls"]},
    "image/jp2": {source: "iana", compressible: !1, extensions: ["jp2", "jpg2"]},
    "image/jpeg": {source: "iana", compressible: !1, extensions: ["jpeg", "jpg", "jpe"]},
    "image/jpm": {source: "iana", compressible: !1, extensions: ["jpm"]},
    "image/jpx": {source: "iana", compressible: !1, extensions: ["jpx", "jpf"]},
    "image/ktx": {source: "iana", extensions: ["ktx"]},
    "image/naplps": {source: "iana"},
    "image/pjpeg": {compressible: !1},
    "image/png": {source: "iana", compressible: !1, extensions: ["png"]},
    "image/prs.btif": {source: "iana", extensions: ["btif"]},
    "image/prs.pti": {source: "iana", extensions: ["pti"]},
    "image/pwg-raster": {source: "iana"},
    "image/sgi": {source: "apache", extensions: ["sgi"]},
    "image/svg+xml": {source: "iana", compressible: !0, extensions: ["svg", "svgz"]},
    "image/t38": {source: "iana", extensions: ["t38"]},
    "image/tiff": {source: "iana", compressible: !1, extensions: ["tif", "tiff"]},
    "image/tiff-fx": {source: "iana", extensions: ["tfx"]},
    "image/vnd.adobe.photoshop": {source: "iana", compressible: !0, extensions: ["psd"]},
    "image/vnd.airzip.accelerator.azv": {source: "iana", extensions: ["azv"]},
    "image/vnd.cns.inf2": {
        source: "iana"
    },
    "image/vnd.dece.graphic": {source: "iana", extensions: ["uvi", "uvvi", "uvg", "uvvg"]},
    "image/vnd.djvu": {source: "iana", extensions: ["djvu", "djv"]},
    "image/vnd.dvb.subtitle": {source: "iana", extensions: ["sub"]},
    "image/vnd.dwg": {source: "iana", extensions: ["dwg"]},
    "image/vnd.dxf": {source: "iana", extensions: ["dxf"]},
    "image/vnd.fastbidsheet": {source: "iana", extensions: ["fbs"]},
    "image/vnd.fpx": {source: "iana", extensions: ["fpx"]},
    "image/vnd.fst": {source: "iana", extensions: ["fst"]},
    "image/vnd.fujixerox.edmics-mmr": {source: "iana", extensions: ["mmr"]},
    "image/vnd.fujixerox.edmics-rlc": {source: "iana", extensions: ["rlc"]},
    "image/vnd.globalgraphics.pgb": {source: "iana"},
    "image/vnd.microsoft.icon": {source: "iana", extensions: ["ico"]},
    "image/vnd.mix": {source: "iana"},
    "image/vnd.mozilla.apng": {source: "iana"},
    "image/vnd.ms-modi": {source: "iana", extensions: ["mdi"]},
    "image/vnd.ms-photo": {source: "apache", extensions: ["wdp"]},
    "image/vnd.net-fpx": {source: "iana", extensions: ["npx"]},
    "image/vnd.radiance": {source: "iana"},
    "image/vnd.sealed.png": {source: "iana"},
    "image/vnd.sealedmedia.softseal.gif": {source: "iana"},
    "image/vnd.sealedmedia.softseal.jpg": {source: "iana"},
    "image/vnd.svf": {source: "iana"},
    "image/vnd.tencent.tap": {source: "iana", extensions: ["tap"]},
    "image/vnd.valve.source.texture": {source: "iana", extensions: ["vtf"]},
    "image/vnd.wap.wbmp": {source: "iana", extensions: ["wbmp"]},
    "image/vnd.xiff": {source: "iana", extensions: ["xif"]},
    "image/vnd.zbrush.pcx": {source: "iana", extensions: ["pcx"]},
    "image/webp": {source: "apache", extensions: ["webp"]},
    "image/wmf": {source: "iana", extensions: ["wmf"]},
    "image/x-3ds": {source: "apache", extensions: ["3ds"]},
    "image/x-cmu-raster": {source: "apache", extensions: ["ras"]},
    "image/x-cmx": {source: "apache", extensions: ["cmx"]},
    "image/x-freehand": {source: "apache", extensions: ["fh", "fhc", "fh4", "fh5", "fh7"]},
    "image/x-icon": {source: "apache", compressible: !0, extensions: ["ico"]},
    "image/x-jng": {source: "nginx", extensions: ["jng"]},
    "image/x-mrsid-image": {source: "apache", extensions: ["sid"]},
    "image/x-ms-bmp": {source: "nginx", compressible: !0, extensions: ["bmp"]},
    "image/x-pcx": {source: "apache", extensions: ["pcx"]},
    "image/x-pict": {source: "apache", extensions: ["pic", "pct"]},
    "image/x-portable-anymap": {source: "apache", extensions: ["pnm"]},
    "image/x-portable-bitmap": {source: "apache", extensions: ["pbm"]},
    "image/x-portable-graymap": {source: "apache", extensions: ["pgm"]},
    "image/x-portable-pixmap": {source: "apache", extensions: ["ppm"]},
    "image/x-rgb": {source: "apache", extensions: ["rgb"]},
    "image/x-tga": {source: "apache", extensions: ["tga"]},
    "image/x-xbitmap": {source: "apache", extensions: ["xbm"]},
    "image/x-xcf": {compressible: !1},
    "image/x-xpixmap": {source: "apache", extensions: ["xpm"]},
    "image/x-xwindowdump": {source: "apache", extensions: ["xwd"]},
    "message/cpim": {source: "iana"},
    "message/delivery-status": {source: "iana"},
    "message/disposition-notification": {source: "iana", extensions: ["disposition-notification"]},
    "message/external-body": {source: "iana"},
    "message/feedback-report": {source: "iana"},
    "message/global": {source: "iana", extensions: ["u8msg"]},
    "message/global-delivery-status": {source: "iana", extensions: ["u8dsn"]},
    "message/global-disposition-notification": {source: "iana", extensions: ["u8mdn"]},
    "message/global-headers": {source: "iana", extensions: ["u8hdr"]},
    "message/http": {source: "iana", compressible: !1},
    "message/imdn+xml": {source: "iana", compressible: !0},
    "message/news": {source: "iana"},
    "message/partial": {source: "iana", compressible: !1},
    "message/rfc822": {source: "iana", compressible: !0, extensions: ["eml", "mime"]},
    "message/s-http": {source: "iana"},
    "message/sip": {source: "iana"},
    "message/sipfrag": {source: "iana"},
    "message/tracking-status": {source: "iana"},
    "message/vnd.si.simp": {source: "iana"},
    "message/vnd.wfa.wsc": {source: "iana", extensions: ["wsc"]},
    "model/3mf": {source: "iana"},
    "model/gltf+json": {source: "iana", compressible: !0, extensions: ["gltf"]},
    "model/gltf-binary": {source: "iana", compressible: !0, extensions: ["glb"]},
    "model/iges": {source: "iana", compressible: !1, extensions: ["igs", "iges"]},
    "model/mesh": {source: "iana", compressible: !1, extensions: ["msh", "mesh", "silo"]},
    "model/stl": {source: "iana"},
    "model/vnd.collada+xml": {source: "iana", compressible: !0, extensions: ["dae"]},
    "model/vnd.dwf": {source: "iana", extensions: ["dwf"]},
    "model/vnd.flatland.3dml": {source: "iana"},
    "model/vnd.gdl": {source: "iana", extensions: ["gdl"]},
    "model/vnd.gs-gdl": {source: "apache"},
    "model/vnd.gs.gdl": {source: "iana"},
    "model/vnd.gtw": {source: "iana", extensions: ["gtw"]},
    "model/vnd.moml+xml": {source: "iana", compressible: !0},
    "model/vnd.mts": {source: "iana", extensions: ["mts"]},
    "model/vnd.opengex": {source: "iana"},
    "model/vnd.parasolid.transmit.binary": {source: "iana"},
    "model/vnd.parasolid.transmit.text": {source: "iana"},
    "model/vnd.rosette.annotated-data-model": {source: "iana"},
    "model/vnd.usdz+zip": {source: "iana", compressible: !1},
    "model/vnd.valve.source.compiled-map": {source: "iana"},
    "model/vnd.vtu": {source: "iana", extensions: ["vtu"]},
    "model/vrml": {source: "iana", compressible: !1, extensions: ["wrl", "vrml"]},
    "model/x3d+binary": {source: "apache", compressible: !1, extensions: ["x3db", "x3dbz"]},
    "model/x3d+fastinfoset": {source: "iana"},
    "model/x3d+vrml": {source: "apache", compressible: !1, extensions: ["x3dv", "x3dvz"]},
    "model/x3d+xml": {source: "iana", compressible: !0, extensions: ["x3d", "x3dz"]},
    "model/x3d-vrml": {source: "iana"},
    "multipart/alternative": {source: "iana", compressible: !1},
    "multipart/appledouble": {source: "iana"},
    "multipart/byteranges": {source: "iana"},
    "multipart/digest": {source: "iana"},
    "multipart/encrypted": {source: "iana", compressible: !1},
    "multipart/form-data": {source: "iana", compressible: !1},
    "multipart/header-set": {source: "iana"},
    "multipart/mixed": {source: "iana", compressible: !1},
    "multipart/multilingual": {source: "iana"},
    "multipart/parallel": {source: "iana"},
    "multipart/related": {source: "iana", compressible: !1},
    "multipart/report": {source: "iana"},
    "multipart/signed": {source: "iana", compressible: !1},
    "multipart/vnd.bint.med-plus": {source: "iana"},
    "multipart/voice-message": {source: "iana"},
    "multipart/x-mixed-replace": {source: "iana"},
    "text/1d-interleaved-parityfec": {source: "iana"},
    "text/cache-manifest": {source: "iana", compressible: !0, extensions: ["appcache", "manifest"]},
    "text/calendar": {source: "iana", extensions: ["ics", "ifb"]},
    "text/calender": {compressible: !0},
    "text/cmd": {compressible: !0},
    "text/coffeescript": {extensions: ["coffee", "litcoffee"]},
    "text/css": {source: "iana", charset: "UTF-8", compressible: !0, extensions: ["css"]},
    "text/csv": {source: "iana", compressible: !0, extensions: ["csv"]},
    "text/csv-schema": {source: "iana"},
    "text/directory": {source: "iana"},
    "text/dns": {source: "iana"},
    "text/ecmascript": {source: "iana"},
    "text/encaprtp": {source: "iana"},
    "text/enriched": {source: "iana"},
    "text/fwdred": {source: "iana"},
    "text/grammar-ref-list": {source: "iana"},
    "text/html": {source: "iana", compressible: !0, extensions: ["html", "htm", "shtml"]},
    "text/jade": {extensions: ["jade"]},
    "text/javascript": {source: "iana", compressible: !0},
    "text/jcr-cnd": {source: "iana"},
    "text/jsx": {compressible: !0, extensions: ["jsx"]},
    "text/less": {compressible: !0, extensions: ["less"]},
    "text/markdown": {source: "iana", compressible: !0, extensions: ["markdown", "md"]},
    "text/mathml": {source: "nginx", extensions: ["mml"]},
    "text/mizar": {source: "iana"},
    "text/n3": {source: "iana", compressible: !0, extensions: ["n3"]},
    "text/parameters": {source: "iana"},
    "text/parityfec": {source: "iana"},
    "text/plain": {
        source: "iana",
        compressible: !0,
        extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
    },
    "text/provenance-notation": {source: "iana"},
    "text/prs.fallenstein.rst": {source: "iana"},
    "text/prs.lines.tag": {source: "iana", extensions: ["dsc"]},
    "text/prs.prop.logic": {source: "iana"},
    "text/raptorfec": {source: "iana"},
    "text/red": {source: "iana"},
    "text/rfc822-headers": {source: "iana"},
    "text/richtext": {source: "iana", compressible: !0, extensions: ["rtx"]},
    "text/rtf": {source: "iana", compressible: !0, extensions: ["rtf"]},
    "text/rtp-enc-aescm128": {source: "iana"},
    "text/rtploopback": {source: "iana"},
    "text/rtx": {source: "iana"},
    "text/sgml": {source: "iana", extensions: ["sgml", "sgm"]},
    "text/shex": {extensions: ["shex"]},
    "text/slim": {extensions: ["slim", "slm"]},
    "text/strings": {source: "iana"},
    "text/stylus": {extensions: ["stylus", "styl"]},
    "text/t140": {source: "iana"},
    "text/tab-separated-values": {source: "iana", compressible: !0, extensions: ["tsv"]},
    "text/troff": {source: "iana", extensions: ["t", "tr", "roff", "man", "me", "ms"]},
    "text/turtle": {source: "iana", charset: "UTF-8", extensions: ["ttl"]},
    "text/ulpfec": {source: "iana"},
    "text/uri-list": {source: "iana", compressible: !0, extensions: ["uri", "uris", "urls"]},
    "text/vcard": {source: "iana", compressible: !0, extensions: ["vcard"]},
    "text/vnd.a": {source: "iana"},
    "text/vnd.abc": {source: "iana"},
    "text/vnd.ascii-art": {source: "iana"},
    "text/vnd.curl": {source: "iana", extensions: ["curl"]},
    "text/vnd.curl.dcurl": {source: "apache", extensions: ["dcurl"]},
    "text/vnd.curl.mcurl": {source: "apache", extensions: ["mcurl"]},
    "text/vnd.curl.scurl": {source: "apache", extensions: ["scurl"]},
    "text/vnd.debian.copyright": {source: "iana"},
    "text/vnd.dmclientscript": {source: "iana"},
    "text/vnd.dvb.subtitle": {source: "iana", extensions: ["sub"]},
    "text/vnd.esmertec.theme-descriptor": {source: "iana"},
    "text/vnd.fly": {source: "iana", extensions: ["fly"]},
    "text/vnd.fmi.flexstor": {source: "iana", extensions: ["flx"]},
    "text/vnd.gml": {source: "iana"},
    "text/vnd.graphviz": {source: "iana", extensions: ["gv"]},
    "text/vnd.hgl": {source: "iana"},
    "text/vnd.in3d.3dml": {source: "iana", extensions: ["3dml"]},
    "text/vnd.in3d.spot": {source: "iana", extensions: ["spot"]},
    "text/vnd.iptc.newsml": {source: "iana"},
    "text/vnd.iptc.nitf": {source: "iana"},
    "text/vnd.latex-z": {source: "iana"},
    "text/vnd.motorola.reflex": {source: "iana"},
    "text/vnd.ms-mediapackage": {source: "iana"},
    "text/vnd.net2phone.commcenter.command": {source: "iana"},
    "text/vnd.radisys.msml-basic-layout": {source: "iana"},
    "text/vnd.senx.warpscript": {source: "iana"},
    "text/vnd.si.uricatalogue": {source: "iana"},
    "text/vnd.sun.j2me.app-descriptor": {source: "iana", extensions: ["jad"]},
    "text/vnd.trolltech.linguist": {source: "iana"},
    "text/vnd.wap.si": {source: "iana"},
    "text/vnd.wap.sl": {source: "iana"},
    "text/vnd.wap.wml": {source: "iana", extensions: ["wml"]},
    "text/vnd.wap.wmlscript": {
        source: "iana", extensions: ["wmls"]
    },
    "text/vtt": {charset: "UTF-8", compressible: !0, extensions: ["vtt"]},
    "text/x-asm": {source: "apache", extensions: ["s", "asm"]},
    "text/x-c": {source: "apache", extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]},
    "text/x-component": {source: "nginx", extensions: ["htc"]},
    "text/x-fortran": {source: "apache", extensions: ["f", "for", "f77", "f90"]},
    "text/x-gwt-rpc": {compressible: !0},
    "text/x-handlebars-template": {extensions: ["hbs"]},
    "text/x-java-source": {source: "apache", extensions: ["java"]},
    "text/x-jquery-tmpl": {compressible: !0},
    "text/x-lua": {extensions: ["lua"]},
    "text/x-markdown": {compressible: !0, extensions: ["mkd"]},
    "text/x-nfo": {source: "apache", extensions: ["nfo"]},
    "text/x-opml": {source: "apache", extensions: ["opml"]},
    "text/x-org": {compressible: !0, extensions: ["org"]},
    "text/x-pascal": {source: "apache", extensions: ["p", "pas"]},
    "text/x-processing": {compressible: !0, extensions: ["pde"]},
    "text/x-sass": {extensions: ["sass"]},
    "text/x-scss": {extensions: ["scss"]},
    "text/x-setext": {source: "apache", extensions: ["etx"]},
    "text/x-sfv": {source: "apache", extensions: ["sfv"]},
    "text/x-suse-ymp": {compressible: !0, extensions: ["ymp"]},
    "text/x-uuencode": {source: "apache", extensions: ["uu"]},
    "text/x-vcalendar": {source: "apache", extensions: ["vcs"]},
    "text/x-vcard": {source: "apache", extensions: ["vcf"]},
    "text/xml": {source: "iana", compressible: !0, extensions: ["xml"]},
    "text/xml-external-parsed-entity": {source: "iana"},
    "text/yaml": {extensions: ["yaml", "yml"]},
    "video/1d-interleaved-parityfec": {source: "iana"},
    "video/3gpp": {source: "iana", extensions: ["3gp", "3gpp"]},
    "video/3gpp-tt": {source: "iana"},
    "video/3gpp2": {source: "iana", extensions: ["3g2"]},
    "video/bmpeg": {source: "iana"},
    "video/bt656": {source: "iana"},
    "video/celb": {source: "iana"},
    "video/dv": {source: "iana"},
    "video/encaprtp": {source: "iana"},
    "video/h261": {source: "iana", extensions: ["h261"]},
    "video/h263": {source: "iana", extensions: ["h263"]},
    "video/h263-1998": {source: "iana"},
    "video/h263-2000": {source: "iana"},
    "video/h264": {source: "iana", extensions: ["h264"]},
    "video/h264-rcdo": {source: "iana"},
    "video/h264-svc": {source: "iana"},
    "video/h265": {source: "iana"},
    "video/iso.segment": {source: "iana"},
    "video/jpeg": {source: "iana", extensions: ["jpgv"]},
    "video/jpeg2000": {source: "iana"},
    "video/jpm": {source: "apache", extensions: ["jpm", "jpgm"]},
    "video/mj2": {source: "iana", extensions: ["mj2", "mjp2"]},
    "video/mp1s": {source: "iana"},
    "video/mp2p": {source: "iana"},
    "video/mp2t": {source: "iana", extensions: ["ts"]},
    "video/mp4": {source: "iana", compressible: !1, extensions: ["mp4", "mp4v", "mpg4"]},
    "video/mp4v-es": {source: "iana"},
    "video/mpeg": {source: "iana", compressible: !1, extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"]},
    "video/mpeg4-generic": {source: "iana"},
    "video/mpv": {source: "iana"},
    "video/nv": {source: "iana"},
    "video/ogg": {source: "iana", compressible: !1, extensions: ["ogv"]},
    "video/parityfec": {source: "iana"},
    "video/pointer": {source: "iana"},
    "video/quicktime": {source: "iana", compressible: !1, extensions: ["qt", "mov"]},
    "video/raptorfec": {source: "iana"},
    "video/raw": {source: "iana"},
    "video/rtp-enc-aescm128": {source: "iana"},
    "video/rtploopback": {source: "iana"},
    "video/rtx": {source: "iana"},
    "video/smpte291": {source: "iana"},
    "video/smpte292m": {source: "iana"},
    "video/ulpfec": {source: "iana"},
    "video/vc1": {source: "iana"},
    "video/vc2": {source: "iana"},
    "video/vnd.cctv": {source: "iana"},
    "video/vnd.dece.hd": {source: "iana", extensions: ["uvh", "uvvh"]},
    "video/vnd.dece.mobile": {source: "iana", extensions: ["uvm", "uvvm"]},
    "video/vnd.dece.mp4": {source: "iana"},
    "video/vnd.dece.pd": {source: "iana", extensions: ["uvp", "uvvp"]},
    "video/vnd.dece.sd": {source: "iana", extensions: ["uvs", "uvvs"]},
    "video/vnd.dece.video": {source: "iana", extensions: ["uvv", "uvvv"]},
    "video/vnd.directv.mpeg": {source: "iana"},
    "video/vnd.directv.mpeg-tts": {source: "iana"},
    "video/vnd.dlna.mpeg-tts": {source: "iana"},
    "video/vnd.dvb.file": {source: "iana", extensions: ["dvb"]},
    "video/vnd.fvt": {source: "iana", extensions: ["fvt"]},
    "video/vnd.hns.video": {source: "iana"},
    "video/vnd.iptvforum.1dparityfec-1010": {source: "iana"},
    "video/vnd.iptvforum.1dparityfec-2005": {source: "iana"},
    "video/vnd.iptvforum.2dparityfec-1010": {source: "iana"},
    "video/vnd.iptvforum.2dparityfec-2005": {source: "iana"},
    "video/vnd.iptvforum.ttsavc": {source: "iana"},
    "video/vnd.iptvforum.ttsmpeg2": {source: "iana"},
    "video/vnd.motorola.video": {source: "iana"},
    "video/vnd.motorola.videop": {source: "iana"},
    "video/vnd.mpegurl": {source: "iana", extensions: ["mxu", "m4u"]},
    "video/vnd.ms-playready.media.pyv": {source: "iana", extensions: ["pyv"]},
    "video/vnd.nokia.interleaved-multimedia": {source: "iana"},
    "video/vnd.nokia.mp4vr": {source: "iana"},
    "video/vnd.nokia.videovoip": {source: "iana"},
    "video/vnd.objectvideo": {source: "iana"},
    "video/vnd.radgamettools.bink": {source: "iana"},
    "video/vnd.radgamettools.smacker": {source: "iana"},
    "video/vnd.sealed.mpeg1": {source: "iana"},
    "video/vnd.sealed.mpeg4": {source: "iana"},
    "video/vnd.sealed.swf": {source: "iana"},
    "video/vnd.sealedmedia.softseal.mov": {source: "iana"},
    "video/vnd.uvvu.mp4": {source: "iana", extensions: ["uvu", "uvvu"]},
    "video/vnd.vivo": {source: "iana", extensions: ["viv"]},
    "video/vp8": {source: "iana"},
    "video/webm": {source: "apache", compressible: !1, extensions: ["webm"]},
    "video/x-f4v": {source: "apache", extensions: ["f4v"]},
    "video/x-fli": {source: "apache", extensions: ["fli"]},
    "video/x-flv": {source: "apache", compressible: !1, extensions: ["flv"]},
    "video/x-m4v": {source: "apache", extensions: ["m4v"]},
    "video/x-matroska": {source: "apache", compressible: !1, extensions: ["mkv", "mk3d", "mks"]},
    "video/x-mng": {source: "apache", extensions: ["mng"]},
    "video/x-ms-asf": {source: "apache", extensions: ["asf", "asx"]},
    "video/x-ms-vob": {source: "apache", extensions: ["vob"]},
    "video/x-ms-wm": {source: "apache", extensions: ["wm"]},
    "video/x-ms-wmv": {source: "apache", compressible: !1, extensions: ["wmv"]},
    "video/x-ms-wmx": {source: "apache", extensions: ["wmx"]},
    "video/x-ms-wvx": {source: "apache", extensions: ["wvx"]},
    "video/x-msvideo": {source: "apache", extensions: ["avi"]},
    "video/x-sgi-movie": {source: "apache", extensions: ["movie"]},
    "video/x-smv": {source: "apache", extensions: ["smv"]},
    "x-conference/x-cooltalk": {source: "apache", extensions: ["ice"]},
    "x-shader/x-fragment": {compressible: !0},
    "x-shader/x-vertex": {compressible: !0}
});
I$("ad0edce683507b3149a9630d3c50a434", function (e, t, a) {
    function i(e, t, a) {
        this.el = e;
        this.files = [];
        this._callback = a || {};
        this._options = $.extend({}, n, t);
        this._events = [];
        this._abort = "";
        this._curRequest = null
    }

    var n = {
        autoUpload: !0,
        limit: 1,
        maxSize: 0,
        acceptType: "",
        fileExt: "*",
        chunkSize: 131072,
        retry: 1,
        duration: 18e4,
        tokenUrl: "/node/api/get-token.json",
        infoUrl: "/node/api/get-video-info.json"
    };
    var s = "https://nosup-hz1.127.net/";
    var r = -600;
    var o = -601;
    var c = -602;
    var l = -603;
    var d = -604;
    var u = -605;
    i.prototype = {
        constructor: i, init: function () {
            this.refresh();
            this.el.setAttribute("accept", this._options.fileExt);
            var e = function (e) {
                var t = Array.prototype.slice.call(e.target.files);
                t.forEach(function (e) {
                    e._type = this.getMimeType(e)
                }.bind(this));
                this.addFiles(t)
            }.bind(this);
            t.addEvent(this.el, "change", e);
            this._events = [this.el, "change", e]
        }, getMimeType: function (e) {
            var t = (this._options.acceptType || "").split(",");
            if (t.length && t.indexOf(e.type) !== -1) return e.type;
            var i = e.name;
            if (!i || "string" != typeof i) return "";
            var n = i.lastIndexOf(".");
            var s = n !== -1 ? i.slice(n + 1) : "";
            s = s.toLocaleLowerCase();
            var r = Object.keys(a).find(function (e) {
                var t = a[e].extensions;
                return t && t.indexOf(s) !== -1
            });
            return r || ""
        }, addFiles: function (e) {
            e.length && this.triggerEvent("fileFilter", {files: e});
            var t = e.filter(function (e) {
                return this.isValid(e)
            }.bind(this));
            var a = this._options.limit || 0;
            if (0 !== a && this.files.length + t.length > a) ;
            var i = t.slice(0, a - this.files.length);
            if (i.length) {
                this.files.push.call(this.files, i);
                this.triggerEvent("fileAdd", {files: i});
                this._options.autoUpload && this.start(i)
            }
        }, triggerEvent: function (e, t) {
            var a = this._callback["on" + e];
            return a && a(t)
        }, isValid: function (e) {
            var t = this._options.maxSize;
            var a = (this._options.acceptType || "").split(",");
            if (t && t < e.size) {
                this.triggerEvent("error", {code: r, file: e});
                return !1
            }
            if (a.length && a.indexOf(e._type) === -1) {
                this.triggerEvent("error", {code: o, file: e});
                return !1
            }
            return !0
        }, refresh: function () {
            this.files = [];
            this._abort = "";
            this._curRequest = null
        }, start: function (e) {
            e = e || this.files;
            e.forEach(function (e) {
                var t = this.triggerEvent("beforeUpload", {file: e});
                if (t && t.then) t.then(function (t) {
                    var a = Object.prototype.toString.call(t);
                    var i = e;
                    if ("[object File]" === a || "[object Blob]" === a) i = t;
                    this.startUpload(i)
                }.bind(this)); else if (t !== !1) this.startUpload(e)
            }.bind(this))
        }, startUpload: function (t) {
            this.triggerEvent("uploading", {file: t});
            e._$request(this._options.tokenUrl, {
                data: {filename: t.name},
                type: "json",
                method: "get",
                timeout: 1e4,
                onload: function (e) {
                    if (e && 0 === e.code && e.data) {
                        var a = e.data;
                        var i = s + a.bucketName + "/" + encodeURIComponent(a.objectKey);
                        t._nosUrl = i;
                        t._objectKey = a.objectKey;
                        return this.startChunckUpload(t, a.token)
                    }
                    this.triggerEvent("error", {code: e.code, file: t})
                }.bind(this),
                onerror: function (e) {
                    this.triggerEvent("error", {code: c, file: t})
                }.bind(this)
            })
        }, startChunckUpload: function (e, t) {
            var a = this._options.chunkSize;
            var i = e.size;
            var n = e._type;
            var s = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice;
            var r = this._options.retry;
            var o = r;
            var c = function (d) {
                var u = d.chunkEnd >= i;
                var p = "?offset=" + d.offset + "&complete=" + u + "&context=" + d.context + "&version=1.0";
                var f = new XMLHttpRequest;
                this._curRequest = f;
                f.onreadystatechange = function () {
                    if (4 === f.readyState) if ("all" !== this._abort && this._abort !== e._objectKey) {
                        var t;
                        try {
                            t = JSON.parse(f.responseText)
                        } catch (n) {
                            t = {error: n, msg: "上传失败"}
                        }
                        if (200 === f.status) {
                            o = r;
                            if (t.offset >= i) this.endUploadFile(e); else c({
                                chunkEnd: Math.min(t.offset + a, i),
                                offset: t.offset,
                                context: t.context
                            })
                        } else if (o > 0) {
                            o--;
                            c({offset: d.offset, chunkEnd: d.chunkEnd, context: d.context})
                        } else this.triggerEvent("error", {code: l, file: e})
                    }
                }.bind(this);
                f.open("post", e._nosUrl + p);
                f.setRequestHeader("x-nos-token", t);
                f.setRequestHeader("content-type", n);
                f.timeout = 1e4;
                f.send(s.call(e, d.offset, d.chunkEnd))
            }.bind(this);
            c({offset: 0, context: "", chunkEnd: Math.min(a, i)})
        }, abortChunkUpload: function (e) {
            this._abort = e || "all";
            this._curRequest && this._curRequest.abort()
        }, endUploadFile: function (t) {
            var a = this;
            e._$request(this._options.infoUrl, {
                data: {objectKey: t._objectKey, withMeta: !0},
                type: "json",
                method: "get",
                timeout: 1e4,
                onload: function (e) {
                    var i = {code: u, file: t};
                    if (e && 0 === e.code) {
                        var n = e.data.meta;
                        var s = n && n.Duration <= a._options.duration;
                        if (s) {
                            a.triggerEvent("uploaded", {file: t, data: e.data});
                            return
                        }
                        i.code = d
                    }
                    a.triggerEvent("error", i)
                },
                onerror: function () {
                    a.triggerEvent("error", {code: u, file: t})
                }
            })
        }, destroy: function () {
            this._events.forEach(function (e) {
                t.removeEvent(e[0], e[1], e[2])
            })
        }
    };
    return i
}, "210e75c6134afb4034b83dc5bde53d96", "52a31311e138d34e969e723dd7fac76b", "7e1026b5cb68ba8bcf79a148e82f2d88");
I$("e3fa0fba666070c138bd3f49ee088976", function (e, t, a) {
    var i = t._$cookie("csrftoken");
    a._$ajax = function (t, a) {
        e._$request(t, {
            sync: !1,
            type: "JSON",
            data: a.data,
            method: "POST",
            timeout: void 0 === a.timeout ? 5e3 : a.timeout,
            headers: {"X-Requested-With": "XMLHttpRequest", csrftoken: i},
            onbeforerequest: a.onbeforerequest,
            onload: a.onload,
            onerror: a.onerror
        })
    };
    a._$ajaxJSON = function (t, a) {
        e._$request(t, {
            sync: !1,
            type: "JSON",
            data: JSON.stringify(a.data),
            method: "POST",
            timeout: void 0 === a.timeout ? 5e3 : a.timeout,
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json;charset=utf-8",
                csrftoken: i
            },
            onbeforerequest: a.onbeforerequest,
            onload: a.onload,
            onerror: a.onerror
        })
    };
    a.__getConfig = function (e, t, a) {
        e = {
            sync: !1,
            type: "JSON",
            data: e.data,
            method: t,
            timeout: void 0 === e.timeout ? 5e3 : e.timeout,
            headers: {"X-Requested-With": "XMLHttpRequest", csrftoken: i},
            onbeforerequest: e.onbeforerequest,
            onload: e.onload,
            onerror: e.onerror
        };
        if (a) {
            e.data = JSON.stringify(e.data);
            e.headers["Content-Type"] = "application/json;charset=utf-8"
        }
        return e
    };
    a._$get = function (t, a, i) {
        a = this.__getConfig(a, "GET", i);
        e._$request(t, a)
    };
    a._$post = function (t, a, i) {
        var a = this.__getConfig(a, "POST", i);
        e._$request(t, a)
    };
    var n = function (e) {
        var t = !1;
        var a, i;
        return function (n, s, r) {
            if (!t) {
                t = !0;
                a = s.onload;
                i = s.onerror;
                s.onload = function (e) {
                    t = !1;
                    a.call(this, e)
                };
                s.onerror = function (e) {
                    t = !1;
                    i.call(this, e)
                };
                if ("GET" === e) this._$get(n, s, r);
                if ("POST" === e) this._$post(n, s, r)
            }
        }
    };
    a._$postOnce = n("POST");
    a._$getOnce = n("GET");
    return a
}, "210e75c6134afb4034b83dc5bde53d96", "206f0e477cd3d8f883e140c120b2be76");
I$("75da5b5cd8310042500b5d50f9739843", function () {
    var e = /^[\u2E80-\u9FFF0-9a-zA-Z\(\)（）【】\[\]\._\-]{1,30}$/;
    var t = /^[\u2E80-\u9FFF0-9a-zA-Z\(\)（）【】\[\]\._\-]{1,30}$/;
    var a = /^[\u2E80-\u9FFF0-9a-zA-Z\(\)（）【】\[\]\._\-]{1,30}$/;
    var i = /^(1[34578]\d{9}|0\d{2,3}\-[2-9][0-9]{6,7})$/;
    var n = /^[A-Za-z0-9][\w.-\\]{0,}@([\w\-]+\.)+[\w]{2,3}$/;
    var s = /(^$|^[A-Za-z0-9][\w.-\\]{0,}@([\w\-]+\.)+[\w]{2,3}$)/;
    var r = /(^(\s*)$)|(^([1-9]\d{4,12})$)/;
    var o = {
        name: [{type: "isFilled", on: "blur", message: "请输入姓名！"}],
        partyName: [{type: "isFilled", on: "blur", message: "请输入公司名称！"}, {
            type: "is",
            on: "blur",
            reg: e,
            message: "请输入正确的公司名称！"
        }],
        displayName: [{type: "isFilled", on: "blur", message: "请输入产品名称！"}, {
            type: "is",
            on: "blur",
            reg: e,
            message: "请输入正确的产品名称！"
        }],
        address: [{type: "isFilled", on: "blur", message: "请输入地址！"}, {
            type: "is",
            on: "blur",
            reg: t,
            message: "请输入正确的地址！"
        }],
        contactor: [{type: "isFilled", on: "blur", message: "请输入联系人！"}, {
            type: "is",
            on: "blur",
            reg: a,
            message: "请输入正确的联系人！"
        }],
        phone: [{type: "isFilled", on: "blur", message: "请输入电话！"}, {
            type: "is",
            on: "blur",
            reg: i,
            message: "请输入正确的电话！"
        }],
        mobile: [{type: "isFilled", on: "blur", message: "请输入手机号！"}, {
            type: "is",
            on: "blur",
            reg: i,
            message: "请输入正确的手机号！"
        }],
        email: [{type: "isFilled", on: "blur", message: "请输入邮箱！"}, {
            type: "is",
            on: "blur",
            reg: n,
            message: "请输入正确的邮箱！"
        }],
        email2: [{type: "is", on: "blur", reg: s, message: "请输入正确的邮箱！"}],
        qq: [{type: "is", on: "blur", reg: r, message: "请输入正确的QQ！"}]
    };
    return o
});