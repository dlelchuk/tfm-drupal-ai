/*! For license information please see Components_Home_2022.js.LICENSE.txt */
!function() {
    var t = {
        257: function(t) {
            !function() {
                var e = {
                    de_DE: {
                        identifier: "de-DE",
                        days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                        shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                        months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                        shortMonths: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                        AM: "AM",
                        PM: "PM",
                        am: "am",
                        pm: "pm",
                        formats: {
                            c: "%a %d %b %Y %X %Z",
                            D: "%d.%m.%Y",
                            F: "%Y-%m-%d",
                            R: "%H:%M",
                            r: "%I:%M:%S %p",
                            T: "%H:%M:%S",
                            v: "%e-%b-%Y",
                            X: "%T",
                            x: "%D"
                        }
                    },
                    en_CA: {
                        identifier: "en-CA",
                        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        ordinalSuffixes: ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st"],
                        AM: "AM",
                        PM: "PM",
                        am: "am",
                        pm: "pm",
                        formats: {
                            c: "%a %d %b %Y %X %Z",
                            D: "%d/%m/%y",
                            F: "%Y-%m-%d",
                            R: "%H:%M",
                            r: "%I:%M:%S %p",
                            T: "%H:%M:%S",
                            v: "%e-%b-%Y",
                            X: "%r",
                            x: "%D"
                        }
                    },
                    en_US: {
                        identifier: "en-US",
                        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        ordinalSuffixes: ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st"],
                        AM: "AM",
                        PM: "PM",
                        am: "am",
                        pm: "pm",
                        formats: {
                            c: "%a %d %b %Y %X %Z",
                            D: "%m/%d/%y",
                            F: "%Y-%m-%d",
                            R: "%H:%M",
                            r: "%I:%M:%S %p",
                            T: "%H:%M:%S",
                            v: "%e-%b-%Y",
                            X: "%r",
                            x: "%D"
                        }
                    },
                    es_MX: {
                        identifier: "es-MX",
                        days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
                        shortDays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
                        months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
                        shortMonths: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
                        AM: "AM",
                        PM: "PM",
                        am: "am",
                        pm: "pm",
                        formats: {
                            c: "%a %d %b %Y %X %Z",
                            D: "%d/%m/%Y",
                            F: "%Y-%m-%d",
                            R: "%H:%M",
                            r: "%I:%M:%S %p",
                            T: "%H:%M:%S",
                            v: "%e-%b-%Y",
                            X: "%T",
                            x: "%D"
                        }
                    },
                    fr_FR: {
                        identifier: "fr-FR",
                        days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
                        shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                        months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
                        shortMonths: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
                        AM: "AM",
                        PM: "PM",
                        am: "am",
                        pm: "pm",
                        formats: {
                            c: "%a %d %b %Y %X %Z",
                            D: "%d/%m/%Y",
                            F: "%Y-%m-%d",
                            R: "%H:%M",
                            r: "%I:%M:%S %p",
                            T: "%H:%M:%S",
                            v: "%e-%b-%Y",
                            X: "%T",
                            x: "%D"
                        }
                    },
                    it_IT: {
                        identifier: "it-IT",
                        days: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
                        shortDays: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                        months: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
                        shortMonths: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
                        AM: "AM",
                        PM: "PM",
                        am: "am",
                        pm: "pm",
                        formats: {
                            c: "%a %d %b %Y %X %Z",
                            D: "%d/%m/%Y",
                            F: "%Y-%m-%d",
                            R: "%H:%M",
                            r: "%I:%M:%S %p",
                            T: "%H:%M:%S",
                            v: "%e-%b-%Y",
                            X: "%T",
                            x: "%D"
                        }
                    },
                    nl_NL: {
                        identifier: "nl-NL",
                        days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
                        shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                        months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                        shortMonths: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                        AM: "AM",
                        PM: "PM",
                        am: "am",
                        pm: "pm",
                        formats: {
                            c: "%a %d %b %Y %X %Z",
                            D: "%d-%m-%y",
                            F: "%Y-%m-%d",
                            R: "%H:%M",
                            r: "%I:%M:%S %p",
                            T: "%H:%M:%S",
                            v: "%e-%b-%Y",
                            X: "%T",
                            x: "%D"
                        }
                    },
                    pt_BR: {
                        identifier: "pt-BR",
                        days: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
                        shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                        months: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
                        shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                        AM: "AM",
                        PM: "PM",
                        am: "am",
                        pm: "pm",
                        formats: {
                            c: "%a %d %b %Y %X %Z",
                            D: "%d-%m-%Y",
                            F: "%Y-%m-%d",
                            R: "%H:%M",
                            r: "%I:%M:%S %p",
                            T: "%H:%M:%S",
                            v: "%e-%b-%Y",
                            X: "%T",
                            x: "%D"
                        }
                    },
                    ru_RU: {
                        identifier: "ru-RU",
                        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                        shortDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                        shortMonths: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
                        AM: "AM",
                        PM: "PM",
                        am: "am",
                        pm: "pm",
                        formats: {
                            c: "%a %d %b %Y %X",
                            D: "%d.%m.%y",
                            F: "%Y-%m-%d",
                            R: "%H:%M",
                            r: "%I:%M:%S %p",
                            T: "%H:%M:%S",
                            v: "%e-%b-%Y",
                            X: "%T",
                            x: "%D"
                        }
                    },
                    tr_TR: {
                        identifier: "tr-TR",
                        days: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
                        shortDays: ["Paz", "Pzt", "Sal", "Çrş", "Prş", "Cum", "Cts"],
                        months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                        shortMonths: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                        AM: "ÖÖ",
                        PM: "ÖS",
                        am: "ÖÖ",
                        pm: "ÖS",
                        formats: {
                            c: "%a %d %b %Y %X %Z",
                            D: "%d-%m-%Y",
                            F: "%Y-%m-%d",
                            R: "%H:%M",
                            r: "%I:%M:%S %p",
                            T: "%H:%M:%S",
                            v: "%e-%b-%Y",
                            X: "%T",
                            x: "%D"
                        }
                    },
                    zh_CN: {
                        identifier: "zh-CN",
                        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                        shortDays: ["日", "一", "二", "三", "四", "五", "六"],
                        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                        shortMonths: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                        AM: "上午",
                        PM: "下午",
                        am: "上午",
                        pm: "下午",
                        formats: {
                            c: "%a %d %b %Y %X %Z",
                            D: "%d/%m/%y",
                            F: "%Y-%m-%d",
                            R: "%H:%M",
                            r: "%I:%M:%S %p",
                            T: "%H:%M:%S",
                            v: "%e-%b-%Y",
                            X: "%r",
                            x: "%D"
                        }
                    }
                }
                  , s = e.en_US
                  , i = new function t(i, p, u) {
                    var m, f = i || s, g = p || 0, _ = u || !1, y = 0;
                    function v(t, e, s, i) {
                        for (var d = "", p = null, u = !1, m = t.length, f = !1, y = 0; y < m; y++) {
                            var w = t.charCodeAt(y);
                            if (!0 !== u)
                                37 !== w ? d += t[y] : u = !0;
                            else {
                                if (45 === w) {
                                    p = "";
                                    continue
                                }
                                if (95 === w) {
                                    p = " ";
                                    continue
                                }
                                if (48 === w) {
                                    p = "0";
                                    continue
                                }
                                if (58 === w) {
                                    f && h("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"),
                                    f = !0;
                                    continue
                                }
                                switch (w) {
                                case 37:
                                    d += "%";
                                    break;
                                case 65:
                                    d += s.days[e.getDay()];
                                    break;
                                case 66:
                                    d += s.months[e.getMonth()];
                                    break;
                                case 67:
                                    d += n(Math.floor(e.getFullYear() / 100), p);
                                    break;
                                case 68:
                                    d += v(s.formats.D, e, s, i);
                                    break;
                                case 70:
                                    d += v(s.formats.F, e, s, i);
                                    break;
                                case 72:
                                    d += n(e.getHours(), p);
                                    break;
                                case 73:
                                    d += n(o(e.getHours()), p);
                                    break;
                                case 76:
                                    d += r(Math.floor(i % 1e3));
                                    break;
                                case 77:
                                    d += n(e.getMinutes(), p);
                                    break;
                                case 80:
                                    d += e.getHours() < 12 ? s.am : s.pm;
                                    break;
                                case 82:
                                    d += v(s.formats.R, e, s, i);
                                    break;
                                case 83:
                                    d += n(e.getSeconds(), p);
                                    break;
                                case 84:
                                    d += v(s.formats.T, e, s, i);
                                    break;
                                case 85:
                                    d += n(a(e, "sunday"), p);
                                    break;
                                case 87:
                                    d += n(a(e, "monday"), p);
                                    break;
                                case 88:
                                    d += v(s.formats.X, e, s, i);
                                    break;
                                case 89:
                                    d += e.getFullYear();
                                    break;
                                case 90:
                                    d += _ && 0 === g ? "GMT" : c(e) || "";
                                    break;
                                case 97:
                                    d += s.shortDays[e.getDay()];
                                    break;
                                case 98:
                                case 104:
                                    d += s.shortMonths[e.getMonth()];
                                    break;
                                case 99:
                                    d += v(s.formats.c, e, s, i);
                                    break;
                                case 100:
                                    d += n(e.getDate(), p);
                                    break;
                                case 101:
                                    d += n(e.getDate(), null == p ? " " : p);
                                    break;
                                case 106:
                                    var S = new Date(e.getFullYear(),0,1);
                                    d += r(b = Math.ceil((e.getTime() - S.getTime()) / 864e5));
                                    break;
                                case 107:
                                    d += n(e.getHours(), null == p ? " " : p);
                                    break;
                                case 108:
                                    d += n(o(e.getHours()), null == p ? " " : p);
                                    break;
                                case 109:
                                    d += n(e.getMonth() + 1, p);
                                    break;
                                case 110:
                                    d += "\n";
                                    break;
                                case 111:
                                    var b = e.getDate();
                                    s.ordinalSuffixes ? d += String(b) + (s.ordinalSuffixes[b - 1] || l(b)) : d += String(b) + l(b);
                                    break;
                                case 112:
                                    d += e.getHours() < 12 ? s.AM : s.PM;
                                    break;
                                case 114:
                                    d += v(s.formats.r, e, s, i);
                                    break;
                                case 115:
                                    d += Math.floor(i / 1e3);
                                    break;
                                case 116:
                                    d += "\t";
                                    break;
                                case 117:
                                    d += 0 === (b = e.getDay()) ? 7 : b;
                                    break;
                                case 118:
                                    d += v(s.formats.v, e, s, i);
                                    break;
                                case 119:
                                    d += e.getDay();
                                    break;
                                case 120:
                                    d += v(s.formats.x, e, s, i);
                                    break;
                                case 121:
                                    d += n(e.getFullYear() % 100, p);
                                    break;
                                case 122:
                                    if (_ && 0 === g)
                                        d += f ? "+00:00" : "+0000";
                                    else {
                                        var x, k = (x = 0 !== g ? g / 6e4 : -e.getTimezoneOffset()) < 0 ? "-" : "+", P = f ? ":" : "", C = Math.floor(Math.abs(x / 60)), A = Math.abs(x % 60);
                                        d += k + n(C) + P + n(A)
                                    }
                                    break;
                                default:
                                    u && (d += "%"),
                                    d += t[y]
                                }
                                p = null,
                                u = !1
                            }
                        }
                        return d
                    }
                    var w = function(t, e) {
                        var s;
                        if (e) {
                            if (s = e.getTime(),
                            _) {
                                var i = d(e);
                                if (d(e = new Date(s + i + g)) !== i) {
                                    var n = d(e);
                                    e = new Date(s + n + g)
                                }
                            }
                        } else {
                            var r = Date.now();
                            r > y ? (y = r,
                            m = new Date(y),
                            s = y,
                            _ && (m = new Date(y + d(m) + g))) : s = y,
                            e = m
                        }
                        return v(t, e, f, s)
                    };
                    return w.localize = function(e) {
                        return new t(e || f,g,_)
                    }
                    ,
                    w.localizeByIdentifier = function(t) {
                        var s = e[t];
                        return s ? w.localize(s) : (h('[WARNING] No locale found with identifier "' + t + '".'),
                        w)
                    }
                    ,
                    w.timezone = function(e) {
                        var s = g
                          , i = _
                          , n = typeof e;
                        return "number" !== n && "string" !== n || (i = !0,
                        "string" === n ? s = ("-" === e[0] ? -1 : 1) * (60 * parseInt(e.slice(1, 3), 10) + parseInt(e.slice(3, 5), 10)) * 60 * 1e3 : "number" === n && (s = 60 * e * 1e3)),
                        new t(f,s,i)
                    }
                    ,
                    w.utc = function() {
                        return new t(f,g,!0)
                    }
                    ,
                    w
                }
                (s,0,!1);
                function n(t, e) {
                    return "" === e || t > 9 ? "" + t : (null == e && (e = "0"),
                    e + t)
                }
                function r(t) {
                    return t > 99 ? t : t > 9 ? "0" + t : "00" + t
                }
                function o(t) {
                    return 0 === t ? 12 : t > 12 ? t - 12 : t
                }
                function a(t, e) {
                    e = e || "sunday";
                    var s = t.getDay();
                    "monday" === e && (0 === s ? s = 6 : s--);
                    var i = Date.UTC(t.getFullYear(), 0, 1)
                      , n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())
                      , r = (Math.floor((n - i) / 864e5) + 7 - s) / 7;
                    return Math.floor(r)
                }
                function l(t) {
                    var e = t % 10
                      , s = t % 100;
                    if (s >= 11 && s <= 13 || 0 === e || e >= 4)
                        return "th";
                    switch (e) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd"
                    }
                }
                function d(t) {
                    return 6e4 * (t.getTimezoneOffset() || 0)
                }
                function c(t, e) {
                    return function(t, e) {
                        if (null == e)
                            return null;
                        var s = t.toLocaleString(e, {
                            timeZoneName: "short"
                        }).match(/\s([\w]+)$/);
                        return s && s[1]
                    }(t, e) || function(t) {
                        var e = t.toString().match(/\(([\w\s]+)\)/);
                        return e && e[1]
                    }(t)
                }
                function h(t) {
                    "undefined" != typeof console && "function" == typeof console.warn && console.warn(t)
                }
                t.exports = i,
                "function" != typeof Date.now && (Date.now = function() {
                    return +new Date
                }
                )
            }()
        }
    }
      , e = {};
    function s(i) {
        var n = e[i];
        if (void 0 !== n)
            return n.exports;
        var r = e[i] = {
            exports: {}
        };
        return t[i](r, r.exports, s),
        r.exports
    }
    s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return s.d(e, {
            a: e
        }),
        e
    }
    ,
    s.d = function(t, e) {
        for (var i in e)
            s.o(e, i) && !s.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: e[i]
            })
    }
    ,
    s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    function() {
        "use strict";
        const t = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
          , e = (t, e, s=null) => {
            for (; e !== s; ) {
                const s = e.nextSibling;
                t.removeChild(e),
                e = s
            }
        }
          , i = `{{lit-${String(Math.random()).slice(2)}}}`
          , n = `\x3c!--${i}--\x3e`
          , r = new RegExp(`${i}|${n}`)
          , o = "$lit$";
        class a {
            constructor(t, e) {
                this.parts = [],
                this.element = e;
                const s = []
                  , n = []
                  , a = document.createTreeWalker(e.content, 133, null, !1);
                let d = 0
                  , p = -1
                  , u = 0;
                const {strings: m, values: {length: f}} = t;
                for (; u < f; ) {
                    const t = a.nextNode();
                    if (null !== t) {
                        if (p++,
                        1 === t.nodeType) {
                            if (t.hasAttributes()) {
                                const e = t.attributes
                                  , {length: s} = e;
                                let i = 0;
                                for (let t = 0; t < s; t++)
                                    l(e[t].name, o) && i++;
                                for (; i-- > 0; ) {
                                    const e = m[u]
                                      , s = h.exec(e)[2]
                                      , i = s.toLowerCase() + o
                                      , n = t.getAttribute(i);
                                    t.removeAttribute(i);
                                    const a = n.split(r);
                                    this.parts.push({
                                        type: "attribute",
                                        index: p,
                                        name: s,
                                        strings: a
                                    }),
                                    u += a.length - 1
                                }
                            }
                            "TEMPLATE" === t.tagName && (n.push(t),
                            a.currentNode = t.content)
                        } else if (3 === t.nodeType) {
                            const e = t.data;
                            if (e.indexOf(i) >= 0) {
                                const i = t.parentNode
                                  , n = e.split(r)
                                  , a = n.length - 1;
                                for (let e = 0; e < a; e++) {
                                    let s, r = n[e];
                                    if ("" === r)
                                        s = c();
                                    else {
                                        const t = h.exec(r);
                                        null !== t && l(t[2], o) && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -5) + t[3]),
                                        s = document.createTextNode(r)
                                    }
                                    i.insertBefore(s, t),
                                    this.parts.push({
                                        type: "node",
                                        index: ++p
                                    })
                                }
                                "" === n[a] ? (i.insertBefore(c(), t),
                                s.push(t)) : t.data = n[a],
                                u += a
                            }
                        } else if (8 === t.nodeType)
                            if (t.data === i) {
                                const e = t.parentNode;
                                null !== t.previousSibling && p !== d || (p++,
                                e.insertBefore(c(), t)),
                                d = p,
                                this.parts.push({
                                    type: "node",
                                    index: p
                                }),
                                null === t.nextSibling ? t.data = "" : (s.push(t),
                                p--),
                                u++
                            } else {
                                let e = -1;
                                for (; -1 !== (e = t.data.indexOf(i, e + 1)); )
                                    this.parts.push({
                                        type: "node",
                                        index: -1
                                    }),
                                    u++
                            }
                    } else
                        a.currentNode = n.pop()
                }
                for (const t of s)
                    t.parentNode.removeChild(t)
            }
        }
        const l = (t, e) => {
            const s = t.length - e.length;
            return s >= 0 && t.slice(s) === e
        }
          , d = t => -1 !== t.index
          , c = () => document.createComment("")
          , h = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        function p(t, e) {
            const {element: {content: s}, parts: i} = t
              , n = document.createTreeWalker(s, 133, null, !1);
            let r = m(i)
              , o = i[r]
              , a = -1
              , l = 0;
            const d = [];
            let c = null;
            for (; n.nextNode(); ) {
                a++;
                const t = n.currentNode;
                for (t.previousSibling === c && (c = null),
                e.has(t) && (d.push(t),
                null === c && (c = t)),
                null !== c && l++; void 0 !== o && o.index === a; )
                    o.index = null !== c ? -1 : o.index - l,
                    r = m(i, r),
                    o = i[r]
            }
            d.forEach(t => t.parentNode.removeChild(t))
        }
        const u = t => {
            let e = 11 === t.nodeType ? 0 : 1;
            const s = document.createTreeWalker(t, 133, null, !1);
            for (; s.nextNode(); )
                e++;
            return e
        }
          , m = (t, e=-1) => {
            for (let s = e + 1; s < t.length; s++) {
                const e = t[s];
                if (d(e))
                    return s
            }
            return -1
        }
          , f = new WeakMap
          , g = t => "function" == typeof t && f.has(t)
          , _ = {}
          , y = {};
        class v {
            constructor(t, e, s) {
                this.__parts = [],
                this.template = t,
                this.processor = e,
                this.options = s
            }
            update(t) {
                let e = 0;
                for (const s of this.__parts)
                    void 0 !== s && s.setValue(t[e]),
                    e++;
                for (const t of this.__parts)
                    void 0 !== t && t.commit()
            }
            _clone() {
                const e = t ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                  , s = []
                  , i = this.template.parts
                  , n = document.createTreeWalker(e, 133, null, !1);
                let r, o = 0, a = 0, l = n.nextNode();
                for (; o < i.length; )
                    if (r = i[o],
                    d(r)) {
                        for (; a < r.index; )
                            a++,
                            "TEMPLATE" === l.nodeName && (s.push(l),
                            n.currentNode = l.content),
                            null === (l = n.nextNode()) && (n.currentNode = s.pop(),
                            l = n.nextNode());
                        if ("node" === r.type) {
                            const t = this.processor.handleTextExpression(this.options);
                            t.insertAfterNode(l.previousSibling),
                            this.__parts.push(t)
                        } else
                            this.__parts.push(...this.processor.handleAttributeExpressions(l, r.name, r.strings, this.options));
                        o++
                    } else
                        this.__parts.push(void 0),
                        o++;
                return t && (document.adoptNode(e),
                customElements.upgrade(e)),
                e
            }
        }
        const w = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: t => t
        })
          , S = ` ${i} `;
        class b {
            constructor(t, e, s, i) {
                this.strings = t,
                this.values = e,
                this.type = s,
                this.processor = i
            }
            getHTML() {
                const t = this.strings.length - 1;
                let e = ""
                  , s = !1;
                for (let r = 0; r < t; r++) {
                    const t = this.strings[r]
                      , a = t.lastIndexOf("\x3c!--");
                    s = (a > -1 || s) && -1 === t.indexOf("--\x3e", a + 1);
                    const l = h.exec(t);
                    e += null === l ? t + (s ? S : n) : t.substr(0, l.index) + l[1] + l[2] + o + l[3] + i
                }
                return e += this.strings[t],
                e
            }
            getTemplateElement() {
                const t = document.createElement("template");
                let e = this.getHTML();
                return void 0 !== w && (e = w.createHTML(e)),
                t.innerHTML = e,
                t
            }
        }
        const x = t => null === t || !("object" == typeof t || "function" == typeof t)
          , k = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        class P {
            constructor(t, e, s) {
                this.dirty = !0,
                this.element = t,
                this.name = e,
                this.strings = s,
                this.parts = [];
                for (let t = 0; t < s.length - 1; t++)
                    this.parts[t] = this._createPart()
            }
            _createPart() {
                return new C(this)
            }
            _getValue() {
                const t = this.strings
                  , e = t.length - 1
                  , s = this.parts;
                if (1 === e && "" === t[0] && "" === t[1]) {
                    const t = s[0].value;
                    if ("symbol" == typeof t)
                        return String(t);
                    if ("string" == typeof t || !k(t))
                        return t
                }
                let i = "";
                for (let n = 0; n < e; n++) {
                    i += t[n];
                    const e = s[n];
                    if (void 0 !== e) {
                        const t = e.value;
                        if (x(t) || !k(t))
                            i += "string" == typeof t ? t : String(t);
                        else
                            for (const e of t)
                                i += "string" == typeof e ? e : String(e)
                    }
                }
                return i += t[e],
                i
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class C {
            constructor(t) {
                this.value = void 0,
                this.committer = t
            }
            setValue(t) {
                t === _ || x(t) && t === this.value || (this.value = t,
                g(t) || (this.committer.dirty = !0))
            }
            commit() {
                for (; g(this.value); ) {
                    const t = this.value;
                    this.value = _,
                    t(this)
                }
                this.value !== _ && this.committer.commit()
            }
        }
        class A {
            constructor(t) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.options = t
            }
            appendInto(t) {
                this.startNode = t.appendChild(c()),
                this.endNode = t.appendChild(c())
            }
            insertAfterNode(t) {
                this.startNode = t,
                this.endNode = t.nextSibling
            }
            appendIntoPart(t) {
                t.__insert(this.startNode = c()),
                t.__insert(this.endNode = c())
            }
            insertAfterPart(t) {
                t.__insert(this.startNode = c()),
                this.endNode = t.endNode,
                t.endNode = this.startNode
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                if (null === this.startNode.parentNode)
                    return;
                for (; g(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = _,
                    t(this)
                }
                const t = this.__pendingValue;
                t !== _ && (x(t) ? t !== this.value && this.__commitText(t) : t instanceof b ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : k(t) ? this.__commitIterable(t) : t === y ? (this.value = y,
                this.clear()) : this.__commitText(t))
            }
            __insert(t) {
                this.endNode.parentNode.insertBefore(t, this.endNode)
            }
            __commitNode(t) {
                this.value !== t && (this.clear(),
                this.__insert(t),
                this.value = t)
            }
            __commitText(t) {
                const e = this.startNode.nextSibling
                  , s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = s : this.__commitNode(document.createTextNode(s)),
                this.value = t
            }
            __commitTemplateResult(t) {
                const e = this.options.templateFactory(t);
                if (this.value instanceof v && this.value.template === e)
                    this.value.update(t.values);
                else {
                    const s = new v(e,t.processor,this.options)
                      , i = s._clone();
                    s.update(t.values),
                    this.__commitNode(i),
                    this.value = s
                }
            }
            __commitIterable(t) {
                Array.isArray(this.value) || (this.value = [],
                this.clear());
                const e = this.value;
                let s, i = 0;
                for (const n of t)
                    s = e[i],
                    void 0 === s && (s = new A(this.options),
                    e.push(s),
                    0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
                    s.setValue(n),
                    s.commit(),
                    i++;
                i < e.length && (e.length = i,
                this.clear(s && s.endNode))
            }
            clear(t=this.startNode) {
                e(this.startNode.parentNode, t.nextSibling, this.endNode)
            }
        }
        class E {
            constructor(t, e, s) {
                if (this.value = void 0,
                this.__pendingValue = void 0,
                2 !== s.length || "" !== s[0] || "" !== s[1])
                    throw new Error("Boolean attributes can only contain a single expression");
                this.element = t,
                this.name = e,
                this.strings = s
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; g(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = _,
                    t(this)
                }
                if (this.__pendingValue === _)
                    return;
                const t = !!this.__pendingValue;
                this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = t),
                this.__pendingValue = _
            }
        }
        class N extends P {
            constructor(t, e, s) {
                super(t, e, s),
                this.single = 2 === s.length && "" === s[0] && "" === s[1]
            }
            _createPart() {
                return new T(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element[this.name] = this._getValue())
            }
        }
        class T extends C {
        }
        let M = !1;
        ( () => {
            try {
                const t = {
                    get capture() {
                        return M = !0,
                        !1
                    }
                };
                window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t)
            } catch (t) {}
        }
        )();
        class U {
            constructor(t, e, s) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.element = t,
                this.eventName = e,
                this.eventContext = s,
                this.__boundHandleEvent = t => this.handleEvent(t)
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; g(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = _,
                    t(this)
                }
                if (this.__pendingValue === _)
                    return;
                const t = this.__pendingValue
                  , e = this.value
                  , s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
                  , i = null != t && (null == e || s);
                s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                i && (this.__options = $(t),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                this.value = t,
                this.__pendingValue = _
            }
            handleEvent(t) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
            }
        }
        const $ = t => t && (M ? {
            capture: t.capture,
            passive: t.passive,
            once: t.once
        } : t.capture);
        function V(t) {
            let e = L.get(t.type);
            void 0 === e && (e = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            L.set(t.type, e));
            let s = e.stringsArray.get(t.strings);
            if (void 0 !== s)
                return s;
            const n = t.strings.join(i);
            return s = e.keyString.get(n),
            void 0 === s && (s = new a(t,t.getTemplateElement()),
            e.keyString.set(n, s)),
            e.stringsArray.set(t.strings, s),
            s
        }
        const L = new Map
          , O = new WeakMap
          , R = new class {
            handleAttributeExpressions(t, e, s, i) {
                const n = e[0];
                return "." === n ? new N(t,e.slice(1),s).parts : "@" === n ? [new U(t,e.slice(1),i.eventContext)] : "?" === n ? [new E(t,e.slice(1),s)] : new P(t,e,s).parts
            }
            handleTextExpression(t) {
                return new A(t)
            }
        }
        ;
        "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        const q = (t, ...e) => new b(t,e,"html",R)
          , j = (t, e) => `${t}--${e}`;
        let z = !0;
        void 0 === window.ShadyCSS ? z = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
        z = !1);
        const I = t => e => {
            const s = j(e.type, t);
            let n = L.get(s);
            void 0 === n && (n = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            L.set(s, n));
            let r = n.stringsArray.get(e.strings);
            if (void 0 !== r)
                return r;
            const o = e.strings.join(i);
            if (r = n.keyString.get(o),
            void 0 === r) {
                const s = e.getTemplateElement();
                z && window.ShadyCSS.prepareTemplateDom(s, t),
                r = new a(e,s),
                n.keyString.set(o, r)
            }
            return n.stringsArray.set(e.strings, r),
            r
        }
          , H = ["html", "svg"]
          , F = new Set;
        window.JSCompiler_renameProperty = (t, e) => t;
        const D = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t)
                }
                return t
            }
        }
          , B = (t, e) => e !== t && (e == e || t == t)
          , W = {
            attribute: !0,
            type: String,
            converter: D,
            reflect: !1,
            hasChanged: B
        }
          , J = "finalized";
        class Y extends HTMLElement {
            constructor() {
                super(),
                this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this._classProperties.forEach( (e, s) => {
                    const i = this._attributeNameForProperty(s, e);
                    void 0 !== i && (this._attributeToPropertyMap.set(i, s),
                    t.push(i))
                }
                ),
                t
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const t = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== t && t.forEach( (t, e) => this._classProperties.set(e, t))
                }
            }
            static createProperty(t, e=W) {
                if (this._ensureClassProperties(),
                this._classProperties.set(t, e),
                e.noAccessor || this.prototype.hasOwnProperty(t))
                    return;
                const s = "symbol" == typeof t ? Symbol() : `__${t}`
                  , i = this.getPropertyDescriptor(t, s, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i)
            }
            static getPropertyDescriptor(t, e, s) {
                return {
                    get() {
                        return this[e]
                    },
                    set(i) {
                        const n = this[t];
                        this[e] = i,
                        this.requestUpdateInternal(t, n, s)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this._classProperties && this._classProperties.get(t) || W
            }
            static finalize() {
                const t = Object.getPrototypeOf(this);
                if (t.hasOwnProperty(J) || t.finalize(),
                this[J] = !0,
                this._ensureClassProperties(),
                this._attributeToPropertyMap = new Map,
                this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
                    for (const s of e)
                        this.createProperty(s, t[s])
                }
            }
            static _attributeNameForProperty(t, e) {
                const s = e.attribute;
                return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
            }
            static _valueHasChanged(t, e, s=B) {
                return s(t, e)
            }
            static _propertyValueFromAttribute(t, e) {
                const s = e.type
                  , i = e.converter || D
                  , n = "function" == typeof i ? i : i.fromAttribute;
                return n ? n(t, s) : t
            }
            static _propertyValueToAttribute(t, e) {
                if (void 0 === e.reflect)
                    return;
                const s = e.type
                  , i = e.converter;
                return (i && i.toAttribute || D.toAttribute)(t, s)
            }
            initialize() {
                this._updateState = 0,
                this._updatePromise = new Promise(t => this._enableUpdatingResolver = t),
                this._changedProperties = new Map,
                this._saveInstanceProperties(),
                this.requestUpdateInternal()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach( (t, e) => {
                    if (this.hasOwnProperty(e)) {
                        const t = this[e];
                        delete this[e],
                        this._instanceProperties || (this._instanceProperties = new Map),
                        this._instanceProperties.set(e, t)
                    }
                }
                )
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach( (t, e) => this[e] = t),
                this._instanceProperties = void 0
            }
            connectedCallback() {
                this.enableUpdating()
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
                this._enableUpdatingResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(t, e, s) {
                e !== s && this._attributeToProperty(t, s)
            }
            _propertyToAttribute(t, e, s=W) {
                const i = this.constructor
                  , n = i._attributeNameForProperty(t, s);
                if (void 0 !== n) {
                    const t = i._propertyValueToAttribute(e, s);
                    if (void 0 === t)
                        return;
                    this._updateState = 8 | this._updateState,
                    null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
                    this._updateState = -9 & this._updateState
                }
            }
            _attributeToProperty(t, e) {
                if (8 & this._updateState)
                    return;
                const s = this.constructor
                  , i = s._attributeToPropertyMap.get(t);
                if (void 0 !== i) {
                    const t = s.getPropertyOptions(i);
                    this._updateState = 16 | this._updateState,
                    this[i] = s._propertyValueFromAttribute(e, t),
                    this._updateState = -17 & this._updateState
                }
            }
            requestUpdateInternal(t, e, s) {
                let i = !0;
                if (void 0 !== t) {
                    const n = this.constructor;
                    s = s || n.getPropertyOptions(t),
                    n._valueHasChanged(this[t], e, s.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
                    !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
                    this._reflectingProperties.set(t, s))) : i = !1
                }
                !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
            }
            requestUpdate(t, e) {
                return this.requestUpdateInternal(t, e),
                this.updateComplete
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise
                } catch (t) {}
                const t = this.performUpdate();
                return null != t && await t,
                !this._hasRequestedUpdate
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState
            }
            get hasUpdated() {
                return 1 & this._updateState
            }
            performUpdate() {
                if (!this._hasRequestedUpdate)
                    return;
                this._instanceProperties && this._applyInstanceProperties();
                let t = !1;
                const e = this._changedProperties;
                try {
                    t = this.shouldUpdate(e),
                    t ? this.update(e) : this._markUpdated()
                } catch (e) {
                    throw t = !1,
                    this._markUpdated(),
                    e
                }
                t && (1 & this._updateState || (this._updateState = 1 | this._updateState,
                this.firstUpdated(e)),
                this.updated(e))
            }
            _markUpdated() {
                this._changedProperties = new Map,
                this._updateState = -5 & this._updateState
            }
            get updateComplete() {
                return this._getUpdateComplete()
            }
            _getUpdateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._updatePromise
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach( (t, e) => this._propertyToAttribute(e, this[e], t)),
                this._reflectingProperties = void 0),
                this._markUpdated()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        Y[J] = !0;
        const Z = Element.prototype;
        Z.msMatchesSelector || Z.webkitMatchesSelector;
        const G = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , X = Symbol();
        class K {
            constructor(t, e) {
                if (e !== X)
                    throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (G ? (this._styleSheet = new CSSStyleSheet,
                this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
                this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        const Q = {};
        class tt extends Y {
            static getStyles() {
                return this.styles
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
                    return;
                const t = this.getStyles();
                if (Array.isArray(t)) {
                    const e = (t, s) => t.reduceRight( (t, s) => Array.isArray(s) ? e(s, t) : (t.add(s),
                    t), s)
                      , s = e(t, new Set)
                      , i = [];
                    s.forEach(t => i.unshift(t)),
                    this._styles = i
                } else
                    this._styles = void 0 === t ? [] : [t];
                this._styles = this._styles.map(t => {
                    if (t instanceof CSSStyleSheet && !G) {
                        const e = Array.prototype.slice.call(t.cssRules).reduce( (t, e) => t + e.cssText, "");
                        return new K(String(e),X)
                    }
                    return t
                }
                )
            }
            initialize() {
                super.initialize(),
                this.constructor._getUniqueStyles(),
                this.renderRoot = this.createRenderRoot(),
                window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions)
            }
            adoptStyles() {
                const t = this.constructor._styles;
                0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? G ? this.renderRoot.adoptedStyleSheets = t.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
            }
            update(t) {
                const e = this.render();
                super.update(t),
                e !== Q && this.constructor.render(e, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }),
                this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
                this.constructor._styles.forEach(t => {
                    const e = document.createElement("style");
                    e.textContent = t.cssText,
                    this.renderRoot.appendChild(e)
                }
                ))
            }
            render() {
                return Q
            }
        }
        tt.finalized = !0,
        tt.render = (t, s, i) => {
            if (!i || "object" != typeof i || !i.scopeName)
                throw new Error("The `scopeName` option is required.");
            const n = i.scopeName
              , r = O.has(s)
              , o = z && 11 === s.nodeType && !!s.host
              , a = o && !F.has(n)
              , l = a ? document.createDocumentFragment() : s;
            if (( (t, s, i) => {
                let n = O.get(s);
                void 0 === n && (e(s, s.firstChild),
                O.set(s, n = new A(Object.assign({
                    templateFactory: V
                }, i))),
                n.appendInto(s)),
                n.setValue(t),
                n.commit()
            }
            )(t, l, Object.assign({
                templateFactory: I(n)
            }, i)),
            a) {
                const t = O.get(l);
                O.delete(l);
                ( (t, e, s) => {
                    F.add(t);
                    const i = s ? s.element : document.createElement("template")
                      , n = e.querySelectorAll("style")
                      , {length: r} = n;
                    if (0 === r)
                        return void window.ShadyCSS.prepareTemplateStyles(i, t);
                    const o = document.createElement("style");
                    for (let t = 0; t < r; t++) {
                        const e = n[t];
                        e.parentNode.removeChild(e),
                        o.textContent += e.textContent
                    }
                    (t => {
                        H.forEach(e => {
                            const s = L.get(j(e, t));
                            void 0 !== s && s.keyString.forEach(t => {
                                const {element: {content: e}} = t
                                  , s = new Set;
                                Array.from(e.querySelectorAll("style")).forEach(t => {
                                    s.add(t)
                                }
                                ),
                                p(t, s)
                            }
                            )
                        }
                        )
                    }
                    )(t);
                    const a = i.content;
                    s ? function(t, e, s=null) {
                        const {element: {content: i}, parts: n} = t;
                        if (null == s)
                            return void i.appendChild(e);
                        const r = document.createTreeWalker(i, 133, null, !1);
                        let o = m(n)
                          , a = 0
                          , l = -1;
                        for (; r.nextNode(); )
                            for (l++,
                            r.currentNode === s && (a = u(e),
                            s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l; ) {
                                if (a > 0) {
                                    for (; -1 !== o; )
                                        n[o].index += a,
                                        o = m(n, o);
                                    return
                                }
                                o = m(n, o)
                            }
                    }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild),
                    window.ShadyCSS.prepareTemplateStyles(i, t);
                    const l = a.querySelector("style");
                    if (window.ShadyCSS.nativeShadow && null !== l)
                        e.insertBefore(l.cloneNode(!0), e.firstChild);
                    else if (s) {
                        a.insertBefore(o, a.firstChild);
                        const t = new Set;
                        t.add(o),
                        p(s, t)
                    }
                }
                )(n, l, t.value instanceof v ? t.value.template : void 0),
                e(s, s.firstChild),
                s.appendChild(l),
                O.set(s, t)
            }
            !r && o && window.ShadyCSS.styleElement(s.host)
        }
        ,
        tt.shadowRootOptions = {
            mode: "open"
        };
        var et = et || {};
        Object.defineProperty(et, "__esModule", {
            value: !0
        }),
        et.Shadowless = void 0;
        const st = t => class extends t {
            constructor() {
                super(...arguments),
                this.slots = {},
                this.willYield = !1
            }
            createRenderRoot() {
                return this
            }
            adoptChildren() {
                Array.from(this.childNodes).forEach(t => {
                    const e = this.getSlotNameForChild(t)
                      , {[e]: s=[]} = this.slots;
                    Object.assign(this.slots, {
                        [e]: [...s, t]
                    })
                }
                )
            }
            getSlotNameForChild(t) {
                return t instanceof Comment && t.nextSibling instanceof Element ? this.getSlotNameForChild(t.nextSibling) : "slot"in t ? t.slot || "" : t instanceof Element && t.hasAttribute("slot") && t.getAttribute("slot") || ""
            }
            isTextNodeEmpty(t) {
                return !t.textContent || !t.textContent.trim()
            }
            isSlotEmpty(t) {
                const e = this.slots[t];
                return !e || e.every(t => t instanceof Comment || t instanceof Text && this.isTextNodeEmpty(t))
            }
            update(t) {
                !this.hasUpdated && this.willYield && this.adoptChildren(),
                super.update(t)
            }
            yield(t, e) {
                return this.slots[t]
            }
        }
        ;
        et.Shadowless = st;
        const it = t => class extends t {
            _renderLight(t) {
                try {
                    var e = [...t.values, ""].map(t => {
                        if ("object" == typeof t) {
                            if (Array.isArray(t)) {
                                const e = [];
                                return t.forEach(t => {
                                    e.push(this._renderLight(t))
                                }
                                ),
                                e.join(" ")
                            }
                            return "TemplateResult" === t.constructor.name ? this._renderLight(t) : t instanceof Element ? t.innerHTML : t
                        }
                        return t
                    }
                    )
                } catch (e) {
                    console.log(t, e)
                }
                return t.strings.reduce( (t, s, i) => t + s + e[i], "")
            }
        }
        ;
        class nt extends (st(tt)) {
            constructor() {
                super(),
                this.hero_ratio = 0,
                this.hero_contentwidth = 0,
                this.hero_scrollratio = 0,
                this.hero_minsize = 0,
                this.hero_scrollnew = 0,
                this.hero_scrollold = 0,
                this.hero_ratioheight = 0,
                this.hero_speedup = 10
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hero && this._initHeroEvents(this)
            }
            static get properties() {
                return {
                    news: {
                        type: Array
                    },
                    hero: {
                        type: Number
                    },
                    isevent: {
                        type: Number
                    },
                    showicon: {
                        type: Number
                    },
                    hideteaser: {
                        type: Number
                    }
                }
            }
            _commonCSS() {
                return q`
            <style>
                ug-heronews a {
                    color: inherit !important;
                    background-image: none !important;
                    outline: none !important;
                }
            </style>
        `
            }
            render() {
                return this.hero ? this._renderHero() : this.isevent ? this._renderEvents() : this._renderNews()
            }
            _renderEvents() {
                var t = this.news;
                t && void 0 !== t || (t = this._getFromSlot("link", ["headline", "teaser", "href", "date", "category", "language", "categories"]));
                var e = "";
                return this.showicon && (e = this.isevent ? q`<div class="bt_eventicon"></div>` : q`<div class="bt_eventicon white"></div>`),
                q`
            ${this._commonCSS()}
            <style>
                .bt_newsdet {
                    display: flex;
                    margin-left: -30px;
                    margin-right: -30px;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                }

                .bt_newsdet article {
                    flex: 0 0 50%;
                    position: relative;
                    padding-right: 15px;
                    padding-left:15px;
                    padding-bottom:30px;
                }

                .bt_newsdet .bt_newswrap {
                    height:36vw;
                    max-height: 715px;
                    display: table;
                    background-position: center bottom;
                    background-repeat:no-repeat;
                    background-size: 100%;
                    -webkit-transition: background-size 1.4s ease-in-out;
                    transition: background-size 1.4s ease-in-out;
                    -moz-transition: background-size 1.4s ease-in-out;
                    -ms-transition: background-size 1.4s ease-in-out;
                    -o-transition: background-size 1.4s ease-in-out;
                    -webkit-transition: background-size 1.4s ease-in-out;
                }

                @media (max-width: 768px) {
                    .bt_newsdet .bt_newswrap {
                        -webkit-transition: none;
                        transition: none;
                        -moz-transition: none;
                        -ms-transition: none;
                        -o-transition: none;
                        -webkit-transition: none;
                    }
                }

                .bt_newsdet .bt_newswrap .bt_newscontent {
                    display: table-cell;
                    background-image: linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.7) 70%);
                    padding: 30px;
                    padding-right:70px;
                    vertical-align: bottom;
                    color: #fff;
                }

                .bt_newsdet .bt_newswrap .bt_mainnews_kat {
                    text-transform: uppercase;
                }

                .bt_newsdet .bt_newswrap .bt_mainnews_text {
                    margin-top:25px;
                    margin-bottom: -10px;
                }

                .bt_newsdet .bt_newswrap .bt_mainnews {
                    position:relative;
                    opacity:1;
                    -webkit-transition: opacity 0.2s ease-in-out;
                    -moz-transition: opacity 0.2s ease-in-out;
                    transition: opacity 0.2s ease-in-out;
                }

                .bt_newsdet .bt_newswrap .bt_mainteaser {
                    opacity: 0;
                    position: absolute;
                    bottom: -7px;
                    left: 0px;
                    padding: 30px;
                    -webkit-transition: opacity 0.2s ease-in-out;
                    -moz-transition: opacity 0.2s ease-in-out;
                    transition: opacity 0.2s ease-in-out;
                }

                .bt_newsdet .bt_newswrap:hover {
                    background-size: 110%;
                }

                @media (max-width: 1500px) {
                    .bt_newsdet .bt_newswrap {
                        height:480px;
                    }
                }

                @media (max-width: 1399px) {
                    .bt_newsdet .bt_newswrap {
                        height:410px;
                    }
                }


                @media (max-width: 1199px) {
                    .bt_newsdet .bt_newswrap {
                        height: 340px;
                    }
                }

                @media (max-width: 991px) {
                    .bt_newsdet .bt_newswrap {
                        height: 260px;
                    }
                }

                @media (max-width: 767px) {
                    .bt_newsdet article {
                        flex: 0 0 100%;
                    }

                    .bt_newsdet .bt_newswrap {
                        height: 51vw;
                    }
                }

                @media (max-width:700px) {
                    .bt_newsdet .bt_newswrap {
                        height: 59vw;
                    }
                }

                @media (max-width: 640px) {
                    .bt_newsdet .bt_newswrap {
                        height: 64vw;
                    }
                }

                @media (max-width: 575px) {
                    .bt_newsdet .bt_newswrap {
                        height: 67vw;
                    }
                }

                @media (max-width: 460px) {
                    .bt_newsdet .bt_newswrap {
                        height: 88vw;
                        background-size: cover;
                    }

                    .bt_newsdet .bt_newswrap:hover {
                        background-size: 148%;
                    }

                    .bt_newsdet {
                        padding-bottom: 15px;
                    }
                }

                .bt_newsdet.eventitem .bt_newswrap.overed .bt_mainnews {
                    opacity:1 !important;
                }

                .bt_newswrap.yellow {
                    background-color: #ffd500;
                }

                .bt_newsdet.eventitem .bt_newscontent {
                    color: #000;
                }

                .bt_eventicon {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46.005' height='43.004' viewBox='0 0 46.005 43.004'%3E%3Cg id='Gruppe_996' data-name='Gruppe 996' transform='translate(-394.428 -4945.428)'%3E%3Ccircle id='Ellipse_15' data-name='Ellipse 15' cx='7.501' cy='7.501' r='7.501' transform='translate(396.428 4957.929)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Ccircle id='Ellipse_16' data-name='Ellipse 16' cx='7.501' cy='7.501' r='7.501' transform='translate(423.431 4947.428)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Ccircle id='Ellipse_17' data-name='Ellipse 17' cx='7.501' cy='7.501' r='7.501' transform='translate(423.431 4971.43)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Cline id='Linie_153' data-name='Linie 153' y1='5.063' x2='13.018' transform='translate(410.921 4957.648)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Cline id='Linie_154' data-name='Linie 154' x2='13.582' y2='6.791' transform='translate(410.639 4968.79)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3C/g%3E%3C/svg%3E%0A");
                    width: 46px;
                    height: 43px;
                    position: absolute;
                    right: 45px;
                    top: 30px;
                }

                .bt_eventicon.white {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46.005' height='43.004' viewBox='0 0 46.005 43.004'%3E%3Cg id='Gruppe_996' data-name='Gruppe 996' transform='translate(-394.428 -4945.428)'%3E%3Ccircle id='Ellipse_15' data-name='Ellipse 15' cx='7.501' cy='7.501' r='7.501' transform='translate(396.428 4957.929)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Ccircle id='Ellipse_16' data-name='Ellipse 16' cx='7.501' cy='7.501' r='7.501' transform='translate(423.431 4947.428)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Ccircle id='Ellipse_17' data-name='Ellipse 17' cx='7.501' cy='7.501' r='7.501' transform='translate(423.431 4971.43)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Cline id='Linie_153' data-name='Linie 153' y1='5.063' x2='13.018' transform='translate(410.921 4957.648)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Cline id='Linie_154' data-name='Linie 154' x2='13.582' y2='6.791' transform='translate(410.639 4968.79)' fill='none' stroke='%fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3C/g%3E%3C/svg%3E%0A");
                }

                .sr-only {
                    border: 0;
                    clip: rect(0, 0, 0, 0);
                    height: 1px;
                    margin: -1px;
                    overflow: hidden;
                    padding: 0;
                    position: absolute;
                    width: 1px;
                }

            </style>
            <div class="bt_newsdet eventitem">
                ${t.map(t => q`
                    <article class="animate animate--fadeIn cursor_black link-trigger" @click=${this._followLink}>
                        <div class="bt_newswrap yellow">
                            <div class="bt_newscontent" style="background-image: none !important;">
                                ${e}
                                <div class="bt_mainnews">
                                    <div class="bt_mainnews_kat">${t.category}</div>
                                    <div class="sr-only">${new Date(1e3 * t.date).toLocaleString("de-AT", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                })} ${new Date(1e3 * t.date).toLocaleString("de-AT", {
                    hour: "numeric",
                    minute: "numeric"
                })} Uhr</div>
                                    <div class="focus">
                                        <div class="bt_mainnews_date">
                                            ${t.date ? new Date(1e3 * t.date).toLocaleString(t.locale, {
                    weekday: "long",
                    day: "numeric",
                    month: "numeric",
                    year: "numeric"
                }) : ""}
                                            ${t.date ? new Date(1e3 * t.date).toLocaleString(t.locale, {
                    hour: "numeric",
                    minutes: "numeric"
                }) : ""}
                                        </div>
                                        <div class="bt_mainnews_text h1">
                                            <a href="${t.link}" title="${t.headline}" class="cursor_black ">${q([t.headline])}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                `)}
            </div>
        `
            }
            _renderNews() {
                var t = this.news;
                t && void 0 !== t || (t = this._getFromSlot("link", ["headline", "image", "imageprimarysrcset", "teaser", "href", "date", "category", "language", "categories"]));
                var e = "";
                return this.showicon && (e = this.isevent ? q`<div class="bt_eventicon"></div>` : q`<div class="bt_eventicon white"></div>`),
                q`
            ${this._commonCSS()}
            <style>
                .bt_newsdet {
                    display: flex;
                    margin-left: -30px;
                    margin-right: -30px;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                }

                .bt_newsdet article {
                    flex: 0 0 50%;
                    position: relative;
                    padding-right: 15px;
                    padding-left:15px;
                    padding-bottom:30px;
                }

                .bt_newsdet .bt_newswrap {
                    height:36vw;
                    max-height: 715px;
                    display: table;
                    background-position: center top;
                    background-repeat:no-repeat;
                    background-size: 100%;
                    -webkit-transition: background-size 1.4s ease-in-out;
                    transition: background-size 1.4s ease-in-out;
                    -moz-transition: background-size 1.4s ease-in-out;
                    -ms-transition: background-size 1.4s ease-in-out;
                    -o-transition: background-size 1.4s ease-in-out;
                    -webkit-transition: background-size 1.4s ease-in-out;
                }

                @media (max-width: 768px) {
                    .bt_newsdet .bt_newswrap {
                        -webkit-transition: none;
                        transition: none;
                        -moz-transition: none;
                        -ms-transition: none;
                        -o-transition: none;
                        -webkit-transition: none;
                    }
                }

                .bt_newsdet .bt_newswrap .bt_newscontent {
                    display: table-cell;
                    background-image: linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.7) 70%);
                    padding: 30px;
                    padding-right:70px;
                    vertical-align: bottom;
                    color: #fff;
                }

                .bt_newsdet .bt_newswrap .bt_newscontent.has-categories {
                    padding-bottom: 10px;
                }

                .bt_newsdet .bt_newswrap .bt_mainnews_kat {
                    text-transform: uppercase;
                }

                .bt_newsdet .bt_newswrap .bt_mainnews_text {
                    margin-top:25px;
                    margin-bottom: -10px;
                }

                .bt_newsdet .bt_newswrap .bt_mainnews {
                    position:relative;
                    opacity:1;
                    -webkit-transition: opacity 0.2s ease-in-out;
                    -moz-transition: opacity 0.2s ease-in-out;
                    transition: opacity 0.2s ease-in-out;
                }

                .bt_newsdet .bt_newswrap .bt_mainteaser {
                    opacity: 0;
                    position: absolute;
                    bottom: -7px;
                    left: 0px;
                    padding: 30px;
                    -webkit-transition: opacity 0.2s ease-in-out;
                    -moz-transition: opacity 0.2s ease-in-out;
                    transition: opacity 0.2s ease-in-out;
                }

                .bt_newsdet .bt_newswrap:hover {
                    background-size: 110%;
                }
                .bt_newsdet .categories {
                    margin-top: 10px;
                    margin-bottom: 0;
                }
                .bt_newsdet .news-category {
                    font-size: 0.6em;
                    font-weight: bold
                }

                @media (max-width: 1500px) {
                    .bt_newsdet .bt_newswrap {
                        height:480px;
                    }
                }

                @media (max-width: 1399px) {
                    .bt_newsdet .bt_newswrap {
                        height:410px;
                    }
                }


                @media (max-width: 1199px) {
                    .bt_newsdet .bt_newswrap {
                        height: 340px;
                    }
                }

                @media (max-width: 991px) {
                    .bt_newsdet .bt_newswrap {
                        height: 260px;
                    }
                }

                @media (max-width: 767px) {
                    .bt_newsdet article {
                        flex: 0 0 100%;
                    }

                    .bt_newsdet .bt_newswrap {
                        height: 51vw;
                    }
                }

                @media (max-width:700px) {
                    .bt_newsdet .bt_newswrap {
                        height: 59vw;
                    }
                }

                @media (max-width: 640px) {
                    .bt_newsdet .bt_newswrap {
                        height: 64vw;
                    }
                }

                @media (max-width: 575px) {
                    .bt_newsdet .bt_newswrap {
                        height: 67vw;
                    }
                }

                @media (max-width: 460px) {
                    .bt_newsdet .bt_newswrap {
                        height: 88vw;
                        background-size: cover;
                    }

                    .bt_newsdet .bt_newswrap:hover {
                        background-size: 148%;
                    }

                    .bt_newsdet {
                        padding-bottom: 15px;
                    }
                }

                ${this.hideteaser ? "" : q`
                    .bt_newsdet .bt_newswrap.overed .bt_mainnews {
                    opacity:0;
                    }

                    .bt_newsdet .bt_newswrap.overed .bt_mainteaser {
                    opacity:1;
                    }
                `}

                bt_eventicon {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46.005' height='43.004' viewBox='0 0 46.005 43.004'%3E%3Cg id='Gruppe_996' data-name='Gruppe 996' transform='translate(-394.428 -4945.428)'%3E%3Ccircle id='Ellipse_15' data-name='Ellipse 15' cx='7.501' cy='7.501' r='7.501' transform='translate(396.428 4957.929)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Ccircle id='Ellipse_16' data-name='Ellipse 16' cx='7.501' cy='7.501' r='7.501' transform='translate(423.431 4947.428)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Ccircle id='Ellipse_17' data-name='Ellipse 17' cx='7.501' cy='7.501' r='7.501' transform='translate(423.431 4971.43)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Cline id='Linie_153' data-name='Linie 153' y1='5.063' x2='13.018' transform='translate(410.921 4957.648)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Cline id='Linie_154' data-name='Linie 154' x2='13.582' y2='6.791' transform='translate(410.639 4968.79)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3C/g%3E%3C/svg%3E%0A");
                    width: 46px;
                    height: 43px;
                    position: absolute;
                    right: 45px;
                    top: 30px;
                }

                .bt_eventicon.white {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46.005' height='43.004' viewBox='0 0 46.005 43.004'%3E%3Cg id='Gruppe_996' data-name='Gruppe 996' transform='translate(-394.428 -4945.428)'%3E%3Ccircle id='Ellipse_15' data-name='Ellipse 15' cx='7.501' cy='7.501' r='7.501' transform='translate(396.428 4957.929)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Ccircle id='Ellipse_16' data-name='Ellipse 16' cx='7.501' cy='7.501' r='7.501' transform='translate(423.431 4947.428)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Ccircle id='Ellipse_17' data-name='Ellipse 17' cx='7.501' cy='7.501' r='7.501' transform='translate(423.431 4971.43)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Cline id='Linie_153' data-name='Linie 153' y1='5.063' x2='13.018' transform='translate(410.921 4957.648)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Cline id='Linie_154' data-name='Linie 154' x2='13.582' y2='6.791' transform='translate(410.639 4968.79)' fill='none' stroke='%fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3C/g%3E%3C/svg%3E%0A");
                }

                .sr-only {
                    border: 0;
                    clip: rect(0, 0, 0, 0);
                    height: 1px;
                    margin: -1px;
                    overflow: hidden;
                    padding: 0;
                    position: absolute;
                    width: 1px;
                }

            </style>
            <div class="bt_newsdet">
                ${t.map(t => q`
                    <article class="animate animate--fadeIn cursor_white link-trigger" @click=${this._followLink}>
                        <div class="bt_newswrap" style="background-image:url('${t.image}'); background-image: -webkit-image-set(${t.imageprimarysrcset});background-image: image-set(${t.imageprimarysrcset});">
                            <div class="bt_newscontent ${t.categories ? "has-categories" : ""}">
                                ${e}
                                <div class="bt_mainnews">
                                    <div class="bt_mainnews_kat">${t.category}</div>
                                    <div class="focus">
                                        <div class="bt_mainnews_date">
                                            ${t.date ? new Date(1e3 * t.date).toLocaleString(t.locale, {
                    weekday: "long",
                    day: "numeric",
                    month: "numeric",
                    year: "numeric"
                }) : ""}
                                        </div>
                                        <div class="bt_mainnews_text h1">
                                            <a class="cursor_white" href="${t.link}" title="${t.headline}">${q([t.headline])}</a>
                                        </div>
                                        ${t.categories ? q([t.categories]) : ""}
                                    </div>
                                </div>
                                ${this.hideteaser ? "" : q`
                                    <div class="bt_mainteaser">
                                        ${q([t.teaser])}
                                    </div>
                                `}
                            </div>
                        </div>
                    </article>
                `)}
            </div>
        `
            }
            _renderHero() {
                var t = this.news;
                return t && "undefned" != typeof t || (t = this._getFromSlot("link", ["headline", "image", "imageprimarysrcset", "href", "class", "categories"])),
                q`
            <style>
                .heronews {
                    box-sizing: border-box;
                }

                .heronews .hero_topnews {
                    margin-left: auto;
                    margin-right: auto;
                    background-size:cover;
                    background-position:center center;
                    height: 55vw;
                    color: #fff;
                    padding-top:80px;
                    padding-bottom:80px;
                    box-sizing: border-box;
                    max-height: 88vh;
                }

                .heronews .hero_topnews.heronews-1 a{
                    background-image: linear-gradient(rgba(0,0,0,.05)5%,rgba(0,0,0,.4)50% ,rgba(0,0,0,.05) 95%) !important;
                    background-size: auto;
                    padding-left: 15px;
                    padding-right: 15px;
                }

                .heronews .newscat, .heronews .newsdate {
                    text-transform:uppercase;
                }

                .heronews .h1 {
                    margin-top:50px;
                    max-width: 80%;
                }

                .heronews .container {
                    padding-left: 25px;
                    padding-right: 25px;
                }

                @media (min-width: 1500px) {
                    .heronews .hero_topnews {
                        padding-left: 55px;
                        padding-right: 55px;
                    }
                }

                @media (max-width: 1499px) {
                    .scrolled .heronews .hero_topnews .container {
                        padding-left: 27px;
                        padding-right: 27px;
                    }
                }

                @media (max-width: 768px) {
                    .heronews .hero_topnews {
                        height: 72vw !important;
                    }

                    .scrolled .heronews .hero_topnews .container {
                        padding-left: 25px;
                        padding-right: 25px;
                    }
                }

                @media (max-width: 640px) {
                    .heronews .hero_topnews {
                        height: 83vw !important;
                    }

                    .heronews .hero_topnews .h1 {
                        margin-top: 15px;
                    }
                }

                @media (max-width: 575px) {
                    .heronews .hero_topnews {
                        height: 65vh !important;
                    }
                }

                @media (max-width: 450px) {
                    .heronews .hero_topnews {
                        height: 71vh !important;
                        padding-top: 25px;
                        padding-bottom: 25px;
                    }
                }

                @media (min-width: 1500px) {
                    .scrolled .heronews .hero_topnews .container {
                        padding-left: 10px;
                        padding-right: 10px;
                    }
                }
            </style>
            <div class="heronews">
                ${t.map(t => q`
                    <div class="hero_topnews cursor_white link-trigger ${t.class}" style="background-image:url('${t.image}'); background-image: -webkit-image-set(${t.imageprimarysrcset});background-image: image-set(${t.imageprimarysrcset});" @click=${this._followLink}>
                        <div class="container">
                            <h1  class="focus"><a class='h1 cursor_white' href="${t.link}" title="${t.headline}">${q([t.headline])}</a></h1>
                        </div>
                    </div>
                `)}
            </div>
        `
            }
            _getFromSlot(t, e) {
                const s = {
                    0: "de-AT",
                    1: "en-US"
                };
                var i = this.querySelectorAll('[slot^="' + t + '"]')
                  , n = [];
                return i.forEach(t => {
                    let i;
                    if (e.length > 0) {
                        i = new Object,
                        i.language = t.getAttribute("language"),
                        i.locale = s[i.language] || "de-AT",
                        "A" == t.tagName && (i.link = t.getAttribute("href"),
                        i.url = t.getAttribute("href"),
                        i.title = t.getAttribute("title"));
                        for (var r = 0; r < e.length; r++) {
                            let s = t.getAttribute(e[r]);
                            s || (s = t.getAttribute("data-" + e[r])),
                            !s && t.querySelector("." + e[r]) && (s = t.querySelector("." + e[r]).innerHTML),
                            i[e[r]] = s
                        }
                    } else
                        "A" == t.tagName ? (i = new Object,
                        i.url = t.getAttribute("href"),
                        i.title = t.getAttribute("title"),
                        i.text = t.innerHTML) : i = t.innerHTML;
                    n.push(i)
                }
                ),
                n
            }
            _initHeroEvents(t) {
                this._scrollingHero = this._scrollingHero.bind(this),
                window.addEventListener("scroll", t => {
                    this._scrollingHero(this)
                }
                , !1),
                window.addEventListener("resize", e => {
                    this.hero_contentwidth = Math.floor(document.body.getBoundingClientRect().width),
                    this.hero_ratio = .56,
                    this.hero_scrollratio = this.hero_contentwidth * this.hero_ratio,
                    this.hero_minsize = Math.floor(document.querySelector(".heronews .container").getBoundingClientRect().width),
                    this.hero_minsize > 1800 && (this.hero_minsize = 1932),
                    this.hero_ratioheight = document.querySelector(".heronews .container").offsetHeight,
                    document.querySelectorAll(".hero_topnews").forEach(function(e) {
                        e.style.width = t.hero_contentwidth + "px",
                        e.style.height = t.hero_contentwidth * t.hero_ratio + "px"
                    }),
                    this._scrollingHero(this)
                }
                , !1)
            }
            _initHeroNews(t) {
                t.hero_contentwidth = Math.floor(document.body.getBoundingClientRect().width),
                t.hero_ratio = .56,
                t.hero_scrollratio = t.hero_contentwidth * t.hero_ratio,
                t.hero_minsize = Math.floor(document.querySelector(".heronews .container").getBoundingClientRect().width),
                t.hero_minsize > 1800 && (t.hero_minsize = 1932),
                t.hero_ratioheight = document.querySelector(".heronews .container").offsetHeight,
                document.querySelectorAll(".hero_topnews").forEach(function(e) {
                    e.style.width = t.hero_contentwidth + "px",
                    e.style.height = t.hero_contentwidth * t.hero_ratio + "px"
                })
            }
            _initNews() {
                document.querySelectorAll(".bt_newswrap").forEach(function(t) {
                    t.addEventListener("mouseenter", t => {
                        t.target.classList.add("overed")
                    }
                    ),
                    t.addEventListener("mouseleave", t => {
                        t.target.classList.remove("overed")
                    }
                    )
                })
            }
            firstUpdated() {
                super.firstUpdated(),
                this.hero ? this._initHeroNews(this) : this._initNews()
            }
            _scrollingHero(t) {
                var e = document.body.getBoundingClientRect().width;
                t.hero_scrollnew = window.pageYOffset,
                e >= 1500 && e <= 1930 || e <= 567 ? document.querySelectorAll(".hero_topnews").forEach(function(e) {
                    e.style.width = "100%",
                    e.style.height = t.hero_contentwidth * t.hero_ratio + "px"
                }) : document.querySelectorAll(".hero_topnews").forEach(function(s) {
                    var i = s.getBoundingClientRect();
                    0 == t.hero_scrollnew ? (t.hero_contentwidth = Math.floor(e),
                    s.style.width = t.hero_contentwidth + "px",
                    s.style.height = t.hero_contentwidth * t.hero_ratio + "px") : i.top < window.innerHeight && i.bottom >= 0 && (t.hero_scrollold - t.hero_scrollnew < 0 ? t.hero_minsize < t.hero_contentwidth - 10 * t.hero_ratio - t.hero_speedup ? (t.hero_contentwidth = t.hero_contentwidth - 10 * t.hero_ratio - t.hero_speedup,
                    s.style.width = t.hero_contentwidth + "px",
                    s.style.height = t.hero_contentwidth * t.hero_ratio + "px") : t.hero_contentwidth != t.hero_minsize && (t.hero_contentwidth = t.hero_minsize,
                    s.style.width = t.hero_contentwidth + "px",
                    s.style.height = t.hero_contentwidth * t.hero_ratio + "px") : i.width != e && i.width < e + 10 * t.hero_ratio + t.hero_speedup && (t.hero_contentwidth = t.hero_contentwidth + 10 * t.hero_ratio + t.hero_speedup,
                    e < t.hero_contentwidth && (t.hero_contentwidth = e),
                    document.documentElement.getBoundingClientRect().width < t.hero_contentwidth && (t.hero_contentwidth = ocument.documentElement.getBoundingClientRect().width),
                    s.style.width = t.hero_contentwidth + "px",
                    s.style.height = t.hero_contentwidth * t.hero_ratio + "px"))
                }),
                t.hero_scrollold = t.hero_scrollnew
            }
            _followLink(t) {
                t.target.closest(".link-trigger").querySelector("a").click()
            }
        }
        customElements.define("ug-heronews", nt);
        const rt = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
          , ot = (t, e, s=null) => {
            for (; e !== s; ) {
                const s = e.nextSibling;
                t.removeChild(e),
                e = s
            }
        }
          , at = `{{lit-${String(Math.random()).slice(2)}}}`
          , lt = `\x3c!--${at}--\x3e`
          , dt = new RegExp(`${at}|${lt}`)
          , ct = "$lit$";
        class ht {
            constructor(t, e) {
                this.parts = [],
                this.element = e;
                const s = []
                  , i = []
                  , n = document.createTreeWalker(e.content, 133, null, !1);
                let r = 0
                  , o = -1
                  , a = 0;
                const {strings: l, values: {length: d}} = t;
                for (; a < d; ) {
                    const t = n.nextNode();
                    if (null !== t) {
                        if (o++,
                        1 === t.nodeType) {
                            if (t.hasAttributes()) {
                                const e = t.attributes
                                  , {length: s} = e;
                                let i = 0;
                                for (let t = 0; t < s; t++)
                                    pt(e[t].name, ct) && i++;
                                for (; i-- > 0; ) {
                                    const e = l[a]
                                      , s = ft.exec(e)[2]
                                      , i = s.toLowerCase() + ct
                                      , n = t.getAttribute(i);
                                    t.removeAttribute(i);
                                    const r = n.split(dt);
                                    this.parts.push({
                                        type: "attribute",
                                        index: o,
                                        name: s,
                                        strings: r
                                    }),
                                    a += r.length - 1
                                }
                            }
                            "TEMPLATE" === t.tagName && (i.push(t),
                            n.currentNode = t.content)
                        } else if (3 === t.nodeType) {
                            const e = t.data;
                            if (e.indexOf(at) >= 0) {
                                const i = t.parentNode
                                  , n = e.split(dt)
                                  , r = n.length - 1;
                                for (let e = 0; e < r; e++) {
                                    let s, r = n[e];
                                    if ("" === r)
                                        s = mt();
                                    else {
                                        const t = ft.exec(r);
                                        null !== t && pt(t[2], ct) && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -5) + t[3]),
                                        s = document.createTextNode(r)
                                    }
                                    i.insertBefore(s, t),
                                    this.parts.push({
                                        type: "node",
                                        index: ++o
                                    })
                                }
                                "" === n[r] ? (i.insertBefore(mt(), t),
                                s.push(t)) : t.data = n[r],
                                a += r
                            }
                        } else if (8 === t.nodeType)
                            if (t.data === at) {
                                const e = t.parentNode;
                                null !== t.previousSibling && o !== r || (o++,
                                e.insertBefore(mt(), t)),
                                r = o,
                                this.parts.push({
                                    type: "node",
                                    index: o
                                }),
                                null === t.nextSibling ? t.data = "" : (s.push(t),
                                o--),
                                a++
                            } else {
                                let e = -1;
                                for (; -1 !== (e = t.data.indexOf(at, e + 1)); )
                                    this.parts.push({
                                        type: "node",
                                        index: -1
                                    }),
                                    a++
                            }
                    } else
                        n.currentNode = i.pop()
                }
                for (const t of s)
                    t.parentNode.removeChild(t)
            }
        }
        const pt = (t, e) => {
            const s = t.length - e.length;
            return s >= 0 && t.slice(s) === e
        }
          , ut = t => -1 !== t.index
          , mt = () => document.createComment("")
          , ft = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        function gt(t, e) {
            const {element: {content: s}, parts: i} = t
              , n = document.createTreeWalker(s, 133, null, !1);
            let r = yt(i)
              , o = i[r]
              , a = -1
              , l = 0;
            const d = [];
            let c = null;
            for (; n.nextNode(); ) {
                a++;
                const t = n.currentNode;
                for (t.previousSibling === c && (c = null),
                e.has(t) && (d.push(t),
                null === c && (c = t)),
                null !== c && l++; void 0 !== o && o.index === a; )
                    o.index = null !== c ? -1 : o.index - l,
                    r = yt(i, r),
                    o = i[r]
            }
            d.forEach(t => t.parentNode.removeChild(t))
        }
        const _t = t => {
            let e = 11 === t.nodeType ? 0 : 1;
            const s = document.createTreeWalker(t, 133, null, !1);
            for (; s.nextNode(); )
                e++;
            return e
        }
          , yt = (t, e=-1) => {
            for (let s = e + 1; s < t.length; s++) {
                const e = t[s];
                if (ut(e))
                    return s
            }
            return -1
        }
          , vt = new WeakMap
          , wt = t => "function" == typeof t && vt.has(t)
          , St = {}
          , bt = {};
        class xt {
            constructor(t, e, s) {
                this.__parts = [],
                this.template = t,
                this.processor = e,
                this.options = s
            }
            update(t) {
                let e = 0;
                for (const s of this.__parts)
                    void 0 !== s && s.setValue(t[e]),
                    e++;
                for (const t of this.__parts)
                    void 0 !== t && t.commit()
            }
            _clone() {
                const t = rt ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                  , e = []
                  , s = this.template.parts
                  , i = document.createTreeWalker(t, 133, null, !1);
                let n, r = 0, o = 0, a = i.nextNode();
                for (; r < s.length; )
                    if (n = s[r],
                    ut(n)) {
                        for (; o < n.index; )
                            o++,
                            "TEMPLATE" === a.nodeName && (e.push(a),
                            i.currentNode = a.content),
                            null === (a = i.nextNode()) && (i.currentNode = e.pop(),
                            a = i.nextNode());
                        if ("node" === n.type) {
                            const t = this.processor.handleTextExpression(this.options);
                            t.insertAfterNode(a.previousSibling),
                            this.__parts.push(t)
                        } else
                            this.__parts.push(...this.processor.handleAttributeExpressions(a, n.name, n.strings, this.options));
                        r++
                    } else
                        this.__parts.push(void 0),
                        r++;
                return rt && (document.adoptNode(t),
                customElements.upgrade(t)),
                t
            }
        }
        const kt = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: t => t
        })
          , Pt = ` ${at} `;
        class Ct {
            constructor(t, e, s, i) {
                this.strings = t,
                this.values = e,
                this.type = s,
                this.processor = i
            }
            getHTML() {
                const t = this.strings.length - 1;
                let e = ""
                  , s = !1;
                for (let i = 0; i < t; i++) {
                    const t = this.strings[i]
                      , n = t.lastIndexOf("\x3c!--");
                    s = (n > -1 || s) && -1 === t.indexOf("--\x3e", n + 1);
                    const r = ft.exec(t);
                    e += null === r ? t + (s ? Pt : lt) : t.substr(0, r.index) + r[1] + r[2] + ct + r[3] + at
                }
                return e += this.strings[t],
                e
            }
            getTemplateElement() {
                const t = document.createElement("template");
                let e = this.getHTML();
                return void 0 !== kt && (e = kt.createHTML(e)),
                t.innerHTML = e,
                t
            }
        }
        const At = t => null === t || !("object" == typeof t || "function" == typeof t)
          , Et = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        class Nt {
            constructor(t, e, s) {
                this.dirty = !0,
                this.element = t,
                this.name = e,
                this.strings = s,
                this.parts = [];
                for (let t = 0; t < s.length - 1; t++)
                    this.parts[t] = this._createPart()
            }
            _createPart() {
                return new Tt(this)
            }
            _getValue() {
                const t = this.strings
                  , e = t.length - 1
                  , s = this.parts;
                if (1 === e && "" === t[0] && "" === t[1]) {
                    const t = s[0].value;
                    if ("symbol" == typeof t)
                        return String(t);
                    if ("string" == typeof t || !Et(t))
                        return t
                }
                let i = "";
                for (let n = 0; n < e; n++) {
                    i += t[n];
                    const e = s[n];
                    if (void 0 !== e) {
                        const t = e.value;
                        if (At(t) || !Et(t))
                            i += "string" == typeof t ? t : String(t);
                        else
                            for (const e of t)
                                i += "string" == typeof e ? e : String(e)
                    }
                }
                return i += t[e],
                i
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class Tt {
            constructor(t) {
                this.value = void 0,
                this.committer = t
            }
            setValue(t) {
                t === St || At(t) && t === this.value || (this.value = t,
                wt(t) || (this.committer.dirty = !0))
            }
            commit() {
                for (; wt(this.value); ) {
                    const t = this.value;
                    this.value = St,
                    t(this)
                }
                this.value !== St && this.committer.commit()
            }
        }
        class Mt {
            constructor(t) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.options = t
            }
            appendInto(t) {
                this.startNode = t.appendChild(mt()),
                this.endNode = t.appendChild(mt())
            }
            insertAfterNode(t) {
                this.startNode = t,
                this.endNode = t.nextSibling
            }
            appendIntoPart(t) {
                t.__insert(this.startNode = mt()),
                t.__insert(this.endNode = mt())
            }
            insertAfterPart(t) {
                t.__insert(this.startNode = mt()),
                this.endNode = t.endNode,
                t.endNode = this.startNode
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                if (null === this.startNode.parentNode)
                    return;
                for (; wt(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = St,
                    t(this)
                }
                const t = this.__pendingValue;
                t !== St && (At(t) ? t !== this.value && this.__commitText(t) : t instanceof Ct ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : Et(t) ? this.__commitIterable(t) : t === bt ? (this.value = bt,
                this.clear()) : this.__commitText(t))
            }
            __insert(t) {
                this.endNode.parentNode.insertBefore(t, this.endNode)
            }
            __commitNode(t) {
                this.value !== t && (this.clear(),
                this.__insert(t),
                this.value = t)
            }
            __commitText(t) {
                const e = this.startNode.nextSibling
                  , s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = s : this.__commitNode(document.createTextNode(s)),
                this.value = t
            }
            __commitTemplateResult(t) {
                const e = this.options.templateFactory(t);
                if (this.value instanceof xt && this.value.template === e)
                    this.value.update(t.values);
                else {
                    const s = new xt(e,t.processor,this.options)
                      , i = s._clone();
                    s.update(t.values),
                    this.__commitNode(i),
                    this.value = s
                }
            }
            __commitIterable(t) {
                Array.isArray(this.value) || (this.value = [],
                this.clear());
                const e = this.value;
                let s, i = 0;
                for (const n of t)
                    s = e[i],
                    void 0 === s && (s = new Mt(this.options),
                    e.push(s),
                    0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
                    s.setValue(n),
                    s.commit(),
                    i++;
                i < e.length && (e.length = i,
                this.clear(s && s.endNode))
            }
            clear(t=this.startNode) {
                ot(this.startNode.parentNode, t.nextSibling, this.endNode)
            }
        }
        class Ut {
            constructor(t, e, s) {
                if (this.value = void 0,
                this.__pendingValue = void 0,
                2 !== s.length || "" !== s[0] || "" !== s[1])
                    throw new Error("Boolean attributes can only contain a single expression");
                this.element = t,
                this.name = e,
                this.strings = s
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; wt(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = St,
                    t(this)
                }
                if (this.__pendingValue === St)
                    return;
                const t = !!this.__pendingValue;
                this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = t),
                this.__pendingValue = St
            }
        }
        class $t extends Nt {
            constructor(t, e, s) {
                super(t, e, s),
                this.single = 2 === s.length && "" === s[0] && "" === s[1]
            }
            _createPart() {
                return new Vt(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element[this.name] = this._getValue())
            }
        }
        class Vt extends Tt {
        }
        let Lt = !1;
        ( () => {
            try {
                const t = {
                    get capture() {
                        return Lt = !0,
                        !1
                    }
                };
                window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t)
            } catch (t) {}
        }
        )();
        class Ot {
            constructor(t, e, s) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.element = t,
                this.eventName = e,
                this.eventContext = s,
                this.__boundHandleEvent = t => this.handleEvent(t)
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; wt(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = St,
                    t(this)
                }
                if (this.__pendingValue === St)
                    return;
                const t = this.__pendingValue
                  , e = this.value
                  , s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
                  , i = null != t && (null == e || s);
                s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                i && (this.__options = Rt(t),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                this.value = t,
                this.__pendingValue = St
            }
            handleEvent(t) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
            }
        }
        const Rt = t => t && (Lt ? {
            capture: t.capture,
            passive: t.passive,
            once: t.once
        } : t.capture);
        function qt(t) {
            let e = jt.get(t.type);
            void 0 === e && (e = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            jt.set(t.type, e));
            let s = e.stringsArray.get(t.strings);
            if (void 0 !== s)
                return s;
            const i = t.strings.join(at);
            return s = e.keyString.get(i),
            void 0 === s && (s = new ht(t,t.getTemplateElement()),
            e.keyString.set(i, s)),
            e.stringsArray.set(t.strings, s),
            s
        }
        const jt = new Map
          , zt = new WeakMap
          , It = new class {
            handleAttributeExpressions(t, e, s, i) {
                const n = e[0];
                return "." === n ? new $t(t,e.slice(1),s).parts : "@" === n ? [new Ot(t,e.slice(1),i.eventContext)] : "?" === n ? [new Ut(t,e.slice(1),s)] : new Nt(t,e,s).parts
            }
            handleTextExpression(t) {
                return new Mt(t)
            }
        }
        ;
        "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        const Ht = (t, ...e) => new Ct(t,e,"html",It)
          , Ft = (t, e) => `${t}--${e}`;
        let Dt = !0;
        void 0 === window.ShadyCSS ? Dt = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
        Dt = !1);
        const Bt = t => e => {
            const s = Ft(e.type, t);
            let i = jt.get(s);
            void 0 === i && (i = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            jt.set(s, i));
            let n = i.stringsArray.get(e.strings);
            if (void 0 !== n)
                return n;
            const r = e.strings.join(at);
            if (n = i.keyString.get(r),
            void 0 === n) {
                const s = e.getTemplateElement();
                Dt && window.ShadyCSS.prepareTemplateDom(s, t),
                n = new ht(e,s),
                i.keyString.set(r, n)
            }
            return i.stringsArray.set(e.strings, n),
            n
        }
          , Wt = ["html", "svg"]
          , Jt = new Set;
        window.JSCompiler_renameProperty = (t, e) => t;
        const Yt = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t)
                }
                return t
            }
        }
          , Zt = (t, e) => e !== t && (e == e || t == t)
          , Gt = {
            attribute: !0,
            type: String,
            converter: Yt,
            reflect: !1,
            hasChanged: Zt
        }
          , Xt = "finalized";
        class Kt extends HTMLElement {
            constructor() {
                super(),
                this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this._classProperties.forEach( (e, s) => {
                    const i = this._attributeNameForProperty(s, e);
                    void 0 !== i && (this._attributeToPropertyMap.set(i, s),
                    t.push(i))
                }
                ),
                t
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const t = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== t && t.forEach( (t, e) => this._classProperties.set(e, t))
                }
            }
            static createProperty(t, e=Gt) {
                if (this._ensureClassProperties(),
                this._classProperties.set(t, e),
                e.noAccessor || this.prototype.hasOwnProperty(t))
                    return;
                const s = "symbol" == typeof t ? Symbol() : `__${t}`
                  , i = this.getPropertyDescriptor(t, s, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i)
            }
            static getPropertyDescriptor(t, e, s) {
                return {
                    get() {
                        return this[e]
                    },
                    set(i) {
                        const n = this[t];
                        this[e] = i,
                        this.requestUpdateInternal(t, n, s)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this._classProperties && this._classProperties.get(t) || Gt
            }
            static finalize() {
                const t = Object.getPrototypeOf(this);
                if (t.hasOwnProperty(Xt) || t.finalize(),
                this[Xt] = !0,
                this._ensureClassProperties(),
                this._attributeToPropertyMap = new Map,
                this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
                    for (const s of e)
                        this.createProperty(s, t[s])
                }
            }
            static _attributeNameForProperty(t, e) {
                const s = e.attribute;
                return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
            }
            static _valueHasChanged(t, e, s=Zt) {
                return s(t, e)
            }
            static _propertyValueFromAttribute(t, e) {
                const s = e.type
                  , i = e.converter || Yt
                  , n = "function" == typeof i ? i : i.fromAttribute;
                return n ? n(t, s) : t
            }
            static _propertyValueToAttribute(t, e) {
                if (void 0 === e.reflect)
                    return;
                const s = e.type
                  , i = e.converter;
                return (i && i.toAttribute || Yt.toAttribute)(t, s)
            }
            initialize() {
                this._updateState = 0,
                this._updatePromise = new Promise(t => this._enableUpdatingResolver = t),
                this._changedProperties = new Map,
                this._saveInstanceProperties(),
                this.requestUpdateInternal()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach( (t, e) => {
                    if (this.hasOwnProperty(e)) {
                        const t = this[e];
                        delete this[e],
                        this._instanceProperties || (this._instanceProperties = new Map),
                        this._instanceProperties.set(e, t)
                    }
                }
                )
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach( (t, e) => this[e] = t),
                this._instanceProperties = void 0
            }
            connectedCallback() {
                this.enableUpdating()
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
                this._enableUpdatingResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(t, e, s) {
                e !== s && this._attributeToProperty(t, s)
            }
            _propertyToAttribute(t, e, s=Gt) {
                const i = this.constructor
                  , n = i._attributeNameForProperty(t, s);
                if (void 0 !== n) {
                    const t = i._propertyValueToAttribute(e, s);
                    if (void 0 === t)
                        return;
                    this._updateState = 8 | this._updateState,
                    null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
                    this._updateState = -9 & this._updateState
                }
            }
            _attributeToProperty(t, e) {
                if (8 & this._updateState)
                    return;
                const s = this.constructor
                  , i = s._attributeToPropertyMap.get(t);
                if (void 0 !== i) {
                    const t = s.getPropertyOptions(i);
                    this._updateState = 16 | this._updateState,
                    this[i] = s._propertyValueFromAttribute(e, t),
                    this._updateState = -17 & this._updateState
                }
            }
            requestUpdateInternal(t, e, s) {
                let i = !0;
                if (void 0 !== t) {
                    const n = this.constructor;
                    s = s || n.getPropertyOptions(t),
                    n._valueHasChanged(this[t], e, s.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
                    !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
                    this._reflectingProperties.set(t, s))) : i = !1
                }
                !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
            }
            requestUpdate(t, e) {
                return this.requestUpdateInternal(t, e),
                this.updateComplete
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise
                } catch (t) {}
                const t = this.performUpdate();
                return null != t && await t,
                !this._hasRequestedUpdate
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState
            }
            get hasUpdated() {
                return 1 & this._updateState
            }
            performUpdate() {
                if (!this._hasRequestedUpdate)
                    return;
                this._instanceProperties && this._applyInstanceProperties();
                let t = !1;
                const e = this._changedProperties;
                try {
                    t = this.shouldUpdate(e),
                    t ? this.update(e) : this._markUpdated()
                } catch (e) {
                    throw t = !1,
                    this._markUpdated(),
                    e
                }
                t && (1 & this._updateState || (this._updateState = 1 | this._updateState,
                this.firstUpdated(e)),
                this.updated(e))
            }
            _markUpdated() {
                this._changedProperties = new Map,
                this._updateState = -5 & this._updateState
            }
            get updateComplete() {
                return this._getUpdateComplete()
            }
            _getUpdateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._updatePromise
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach( (t, e) => this._propertyToAttribute(e, this[e], t)),
                this._reflectingProperties = void 0),
                this._markUpdated()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        Kt[Xt] = !0;
        const Qt = Element.prototype;
        Qt.msMatchesSelector || Qt.webkitMatchesSelector;
        const te = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , ee = Symbol();
        class se {
            constructor(t, e) {
                if (e !== ee)
                    throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (te ? (this._styleSheet = new CSSStyleSheet,
                this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
                this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        const ie = {};
        class ne extends Kt {
            static getStyles() {
                return this.styles
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
                    return;
                const t = this.getStyles();
                if (Array.isArray(t)) {
                    const e = (t, s) => t.reduceRight( (t, s) => Array.isArray(s) ? e(s, t) : (t.add(s),
                    t), s)
                      , s = e(t, new Set)
                      , i = [];
                    s.forEach(t => i.unshift(t)),
                    this._styles = i
                } else
                    this._styles = void 0 === t ? [] : [t];
                this._styles = this._styles.map(t => {
                    if (t instanceof CSSStyleSheet && !te) {
                        const e = Array.prototype.slice.call(t.cssRules).reduce( (t, e) => t + e.cssText, "");
                        return new se(String(e),ee)
                    }
                    return t
                }
                )
            }
            initialize() {
                super.initialize(),
                this.constructor._getUniqueStyles(),
                this.renderRoot = this.createRenderRoot(),
                window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions)
            }
            adoptStyles() {
                const t = this.constructor._styles;
                0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? te ? this.renderRoot.adoptedStyleSheets = t.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
            }
            update(t) {
                const e = this.render();
                super.update(t),
                e !== ie && this.constructor.render(e, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }),
                this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
                this.constructor._styles.forEach(t => {
                    const e = document.createElement("style");
                    e.textContent = t.cssText,
                    this.renderRoot.appendChild(e)
                }
                ))
            }
            render() {
                return ie
            }
        }
        ne.finalized = !0,
        ne.render = (t, e, s) => {
            if (!s || "object" != typeof s || !s.scopeName)
                throw new Error("The `scopeName` option is required.");
            const i = s.scopeName
              , n = zt.has(e)
              , r = Dt && 11 === e.nodeType && !!e.host
              , o = r && !Jt.has(i)
              , a = o ? document.createDocumentFragment() : e;
            if (( (t, e, s) => {
                let i = zt.get(e);
                void 0 === i && (ot(e, e.firstChild),
                zt.set(e, i = new Mt(Object.assign({
                    templateFactory: qt
                }, s))),
                i.appendInto(e)),
                i.setValue(t),
                i.commit()
            }
            )(t, a, Object.assign({
                templateFactory: Bt(i)
            }, s)),
            o) {
                const t = zt.get(a);
                zt.delete(a);
                ( (t, e, s) => {
                    Jt.add(t);
                    const i = s ? s.element : document.createElement("template")
                      , n = e.querySelectorAll("style")
                      , {length: r} = n;
                    if (0 === r)
                        return void window.ShadyCSS.prepareTemplateStyles(i, t);
                    const o = document.createElement("style");
                    for (let t = 0; t < r; t++) {
                        const e = n[t];
                        e.parentNode.removeChild(e),
                        o.textContent += e.textContent
                    }
                    (t => {
                        Wt.forEach(e => {
                            const s = jt.get(Ft(e, t));
                            void 0 !== s && s.keyString.forEach(t => {
                                const {element: {content: e}} = t
                                  , s = new Set;
                                Array.from(e.querySelectorAll("style")).forEach(t => {
                                    s.add(t)
                                }
                                ),
                                gt(t, s)
                            }
                            )
                        }
                        )
                    }
                    )(t);
                    const a = i.content;
                    s ? function(t, e, s=null) {
                        const {element: {content: i}, parts: n} = t;
                        if (null == s)
                            return void i.appendChild(e);
                        const r = document.createTreeWalker(i, 133, null, !1);
                        let o = yt(n)
                          , a = 0
                          , l = -1;
                        for (; r.nextNode(); )
                            for (l++,
                            r.currentNode === s && (a = _t(e),
                            s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l; ) {
                                if (a > 0) {
                                    for (; -1 !== o; )
                                        n[o].index += a,
                                        o = yt(n, o);
                                    return
                                }
                                o = yt(n, o)
                            }
                    }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild),
                    window.ShadyCSS.prepareTemplateStyles(i, t);
                    const l = a.querySelector("style");
                    if (window.ShadyCSS.nativeShadow && null !== l)
                        e.insertBefore(l.cloneNode(!0), e.firstChild);
                    else if (s) {
                        a.insertBefore(o, a.firstChild);
                        const t = new Set;
                        t.add(o),
                        gt(s, t)
                    }
                }
                )(i, a, t.value instanceof xt ? t.value.template : void 0),
                ot(e, e.firstChild),
                e.appendChild(a),
                zt.set(e, t)
            }
            !n && r && window.ShadyCSS.styleElement(e.host)
        }
        ,
        ne.shadowRootOptions = {
            mode: "open"
        };
        const re = {
            num_items: 0,
            current: 1,
            directon: 1,
            active: !1,
            init: function() {
                if (this.num_items = document.querySelectorAll(".bt_eventscroll article").length,
                !this.active && (this.current = 1,
                document.querySelectorAll(".bt_eventscroll article").forEach(function(t, e) {
                    t.style.order = e + 1
                }),
                this.addEvents(),
                this.active = !0,
                document.querySelector(".bt_eventpic"))) {
                    var t = document.querySelector(".bt_eventscroll article[data-position='1'] a").getAttribute("data-img");
                    t && document.querySelector(".bt_eventpic img").setAttribute("src", t)
                }
            },
            clear: function() {
                if (document.querySelectorAll(".bt_eventscroll article").forEach(function(t) {
                    t.style.order = ""
                }),
                this.current = 1,
                this.active = !1,
                document.querySelector(".bt_eventpic")) {
                    var t = document.querySelector(".bt_eventscroll article[data-position='1'] a").getAttribute("data-img");
                    t && document.querySelector(".bt_eventpic img").setAttribute("src", t)
                }
            },
            addEvents: function() {
                document.querySelector(".bt_eventscroll") && document.querySelector(".bt_eventscroll").addEventListener("transitionend", () => {
                    this.changeOrder()
                }
                )
            },
            changeOrder: function() {
                this.current == this.num_items ? this.current = 1 : 1 == this.directon ? this.current++ : this.current--;
                let t = 1;
                for (let e = this.current; e <= this.num_items; e++)
                    document.querySelector(".bt_eventscroll article[data-position='" + e + "']").style.order = t,
                    t++;
                for (let e = 1; e < this.current; e++)
                    document.querySelector(".bt_eventscroll article[data-position='" + e + "']").style.order = t,
                    1 == this.directon ? t++ : t--;
                document.querySelector(".bt_eventscroll").classList.remove("container-transition"),
                document.querySelector(".bt_eventscroll").style.transform = "translateX(0)",
                this.loadImage()
            },
            gotoNext: function() {
                this.active && (this.directon = 1,
                document.querySelector(".bt_eventscroll").classList.add("container-transition"),
                document.querySelector(".bt_eventscroll").style.transform = "translateX(-100%)",
                window.innerWidth < 768 && document.querySelector(".bt_eventpic") && (document.querySelector(".bt_eventpic img").classList.remove("fadescroll"),
                window.setTimeout( () => {
                    document.querySelector(".bt_eventpic img").classList.add("fadescroll")
                }
                , 100)))
            },
            gotoPrev: function() {
                this.active && this.current > 1 && (this.directon = 2,
                document.querySelector(".bt_eventscroll").classList.add("container-transition"),
                document.querySelector(".bt_eventscroll").style.transform = "translateX(+100%)",
                window.innerWidth < 768 && document.querySelector(".bt_eventpic") && (document.querySelector(".bt_eventpic img").classList.remove("fadescroll"),
                window.setTimeout( () => {
                    document.querySelector(".bt_eventpic img").classList.add("fadescroll")
                }
                , 100)))
            },
            loadImage: function() {
                var t = "";
                window.innerWidth < 768 ? document.querySelector(".bt_eventpic") && (t = document.querySelector(".bt_eventscroll article[data-position='" + this.current + "']").getAttribute("data-img")) && document.querySelector(".bt_eventpic img").setAttribute("src", t) : document.querySelector(".bt_eventpic") && (t = document.querySelector(".bt_eventscroll article[data-position='1']").getAttribute("data-img")) && document.querySelector(".bt_eventpic img").setAttribute("src", t)
            }
        };
        class oe extends (st(ne)) {
            constructor() {
                super(),
                this.elposition = 2,
                this.initialX = null,
                this.initialY = null
            }
            static get properties() {
                return {
                    primeEvent: {
                        type: Number
                    },
                    slideElements: {
                        type: Number
                    },
                    events: {
                        type: Array
                    }
                }
            }
            render() {
                return this.events && "undefned" != typeof this.events || (this.events = this._getFromSlot("link", ["headline", "image", "teaser", "href", "datetime", "icon"])),
                this.primeEvent ? this._renderMainEvent(this) : this._renderSubEvents(this)
            }
            _getFromSlot(t, e) {
                var s = this.querySelectorAll('[slot^="' + t + '"]')
                  , i = [];
                return s.forEach(t => {
                    let s;
                    if (e.length > 0) {
                        s = new Object,
                        "A" == t.tagName && (s.link = t.getAttribute("href"),
                        s.url = t.getAttribute("href"),
                        s.title = t.getAttribute("title"));
                        for (var n = 0; n < e.length; n++) {
                            let i = t.getAttribute(e[n]);
                            i || (i = t.getAttribute("data-" + e[n])),
                            !i && t.querySelector("." + e[n]) && (i = t.querySelector("." + e[n]).innerText),
                            s[e[n]] = i
                        }
                    } else
                        "A" == t.tagName ? (s = new Object,
                        s.url = t.getAttribute("href"),
                        s.title = t.getAttribute("title"),
                        s.text = t.innerHTML) : s = t.innerHTML;
                    i.push(s)
                }
                ),
                i
            }
            _getStyle() {
                return Ht`
        <style>

            ug-events a {
                text-decoration: none !important;
                background-image: none !important;
                outline: none !important;
            }

            .bt_eventscroll .bt_eventpic {
                display: none;
            }

            .bt_eventinfo .icon {
                margin-top: 5px;
            }

            .bt_eventinfo .icon.computer {
                content:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28.294' height='23' viewBox='0 0 28.294 23'%3E%3Cg id='Gruppe_994' data-name='Gruppe 994' transform='translate(0.147 0.125)'%3E%3Cg id='Gruppe_968' data-name='Gruppe 968'%3E%3Cpath id='Pfad_15379' data-name='Pfad 15379' d='M24,13.875V2.5A1.751,1.751,0,0,0,22.25.75H4.75A1.751,1.751,0,0,0,3,2.5V13.875Z' transform='translate(0.5 0.125)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath id='Pfad_15380' data-name='Pfad 15380' d='M26.85,17.414a1.749,1.749,0,0,1-1.6,2.461H2.5A1.749,1.749,0,0,1,.9,17.414L3.375,12h21Z' transform='translate(0.125 2)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cline id='Linie_166' data-name='Linie 166' x2='3.5' transform='translate(12.25 18.375)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
                position:relative;
            }

            .bt_eventinfo .icon.people {
                content:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29.072' height='28.661' viewBox='0 0 29.072 28.661'%3E%3Cg id='Gruppe_995' data-name='Gruppe 995' transform='translate(0.535 0.125)'%3E%3Cline id='Linie_167' data-name='Linie 167' x2='17.5' transform='translate(5.252 13.125)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath id='Pfad_15381' data-name='Pfad 15381' d='M7.852,14.75l-.35-3.5H18l-.35,3.5' transform='translate(1.251 1.875)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cg id='Gruppe_966' data-name='Gruppe 966' transform='translate(0 0)'%3E%3Cg id='Gruppe_969' data-name='Gruppe 969'%3E%3Ccircle id='Ellipse_20' data-name='Ellipse 20' cx='3.063' cy='3.063' r='3.063' transform='translate(10.94 0.875)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath id='Pfad_15382' data-name='Pfad 15382' d='M16.334,8.5a4.981,4.981,0,0,0-7.583,0' transform='translate(1.459 1.125)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Ccircle id='Ellipse_21' data-name='Ellipse 21' cx='3.063' cy='3.063' r='3.063' transform='translate(1.605 18.375)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath id='Pfad_15383' data-name='Pfad 15383' d='M8.333,23.5a4.981,4.981,0,0,0-7.583,0' transform='translate(0.125 3.626)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Ccircle id='Ellipse_22' data-name='Ellipse 22' cx='3.063' cy='3.063' r='3.063' transform='translate(10.94 18.375)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath id='Pfad_15384' data-name='Pfad 15384' d='M16.334,23.5a4.981,4.981,0,0,0-7.583,0' transform='translate(1.459 3.626)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Ccircle id='Ellipse_23' data-name='Ellipse 23' cx='3.063' cy='3.063' r='3.063' transform='translate(20.275 18.375)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath id='Pfad_15385' data-name='Pfad 15385' d='M24.335,23.5a4.981,4.981,0,0,0-7.583,0' transform='translate(2.792 3.626)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
                position:relative;
            }

            .bt_eventinfo .icon.envelope {
                content:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='22' viewBox='0 0 30 22'%3E%3Cg id='Gruppe_997' data-name='Gruppe 997' transform='translate(1.296 1)'%3E%3Crect id='Rechteck_448' data-name='Rechteck 448' width='28' height='20' rx='1.5' transform='translate(-0.296)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath id='Pfad_15364' data-name='Pfad 15364' d='M27.937,1.3,17.178,9.007a4.627,4.627,0,0,1-5.329,0L1.089,1.3' transform='translate(-0.672 -0.623)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A");
                position:relative;
            }

            .bt_nav {
                display: none;
            }

            .bt_left {
                cursor: pointer;
                content:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17.657' height='29.657' viewBox='0 0 17.657 29.657'%3E%3Cpath id='Pfad_15724' data-name='Pfad 15724' d='M12,0,0,12,12,24' transform='translate(2.828 2.828)' fill='none' stroke='%23000' stroke-linecap='round' stroke-width='4'/%3E%3C/svg%3E%0A");
            }

            .bt_right {
                cursor: pointer;
                content:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17.657' height='29.657' viewBox='0 0 17.657 29.657'%3E%3Cpath id='Pfad_15723' data-name='Pfad 15723' d='M0,0,12,12,0,24' transform='translate(2.828 2.828)' fill='none' stroke='%23000' stroke-linecap='round' stroke-width='4'/%3E%3C/svg%3E%0A");
            }

            @media (max-width: 767px) {
                .bt_nav {
                    display: block;
                }
            }

        </style>
        `
            }
            _renderSubEvents(t) {
                var e = t.events
                  , s = Ht`
            <style>
                ug-events a {
                    text-decoration: none !important;
                    background-image: none !important;
                }
                </style>
        `;
                return document.querySelector(".mobileevent") || (s = this._getStyle()),
                Ht`
            ${s}
            <div class="bt_eventscroll container-transition">
                ${e.map( (t, e) => Ht`
                    <article data-position="${e + 2}" class="animate animate--fadeIn link-trigger cursor_black" data-img="${t.image}" @click=${this._followLink}>

                            <div class="row focus">
                                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div class="bt_eventinfo">
                                        ${new Date(1e3 * t.datetime).toLocaleString("de-AT", {
                    day: "2-digit",
                    month: "short"
                })}<br>
                                        ${new Date(1e3 * t.datetime).toLocaleString("de-AT", {
                    hour: "numeric",
                    minute: "numeric"
                })} Uhr<br>
                                        <div class="icon ${t.icon}"></div>
                                    </div>
                                </div>
                                <div class="col-xl-9 col-lg-8 col-md-8 col-sm-8 col-8">
                                    <div class="bt_eventteaser">
                                    <a href="${t.link}" title="${t.headline}" class="cursor_black" >${t.teaser}</a>
                                    </div>
                                </div>
                            </div>
                    </article>
                `)}
            </div>
            <div class="bt_nav">
                <div class="bt_left"></div>
                <div class="bt_right"></div>
           </div>
        `
            }
            _renderMainEvent(t) {
                var e = t.events
                  , s = "";
                return document.querySelector(".bt_eventscroll") || (s = this._getStyle()),
                Ht`
            ${s}
            ${e.map(t => Ht`
                <article class="mobileevent animate animate--fadeIn link-trigger cursor_black" data-img="${t.image}" data-position="1" @click=${this._followLink}>

                        <div class="row">
                            <div class="col-md-12 bt_eventpic">
                                <img src="${t.image}">
                            </div>
                            <div class="focus">
                            <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
                                <div class="bt_eventinfo">
                                    ${new Date(1e3 * t.datetime).toLocaleString("de-AT", {
                    day: "2-digit",
                    month: "short"
                })}<br>
                                    ${new Date(1e3 * t.datetime).toLocaleString("de-AT", {
                    hour: "numeric",
                    minute: "numeric"
                })} Uhr<br>
                                    <div class="icon ${t.icon}"></div>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-8 col-md-8 col-sm-8 col-8">
                                <div class="bt_eventteaser">
                                <a href="${t.link}" title="${t.headline}" class="cursor_black">${t.teaser}</a>
                                </div>
                            </div>
                            </div>
                        </div>

                </article>
            `)}

        `
            }
            _initTouchEvents() {
                this._startTouch = this._startTouch.bind(this),
                this._moveTouch = this._moveTouch.bind(this),
                document.querySelector(".bt_eventscroll") && (document.querySelector(".bt_eventscroll").addEventListener("touchstart", this._startTouch, !1),
                document.querySelector(".bt_eventscroll").addEventListener("mousedown", this._startTouch, !1),
                document.querySelector(".bt_eventscroll").addEventListener("touchmove", this._moveTouch, !1),
                document.querySelector(".bt_eventscroll").addEventListener("mousemove", this._moveTouch, !1),
                document.querySelector(".bt_left").addEventListener("click", this._goPrev, !1),
                document.querySelector(".bt_right").addEventListener("click", this._goNext, !1))
            }
            _goPrev() {
                re.gotoPrev()
            }
            _goNext() {
                re.gotoNext()
            }
            _startTouch(t) {
                t.touches ? (this.initialX = t.touches[0].clientX,
                this.initialY = t.touches[0].clientY) : (this.initialX = t.clientX,
                this.initialY = t.clientY)
            }
            _moveTouch(t) {
                if (null !== this.initialX && null !== this.initialY && !(t.touches[0].clientY > this.initialY + 5 || t.touches[0].clientY < this.initialY - 5)) {
                    if (t.touches)
                        var e = t.touches[0].clientX
                          , s = t.touches[0].clientY;
                    else
                        e = t.clientX,
                        s = t.clientY;
                    var i = this.initialX - e
                      , n = this.initialY - s;
                    Math.abs(i) > Math.abs(n) ? i > 0 ? re.gotoNext() : re.gotoPrev() : n > 0 ? re.gotoNext() : re.gotoPrev(),
                    this.initialX = null,
                    this.initialY = null,
                    t.preventDefault()
                }
            }
            _observeEvents() {
                document.querySelectorAll(".bt_events").forEach(function(t) {
                    let e = document.querySelector(".bt_topmenu");
                    window.pageYOffset;
                    t.getBoundingClientRect().top,
                    e.offsetHeight
                })
            }
            _observeWindowsize() {
                window.innerWidth < 768 ? re.init() : re.clear()
            }
            firstUpdated() {
                if (super.firstUpdated(),
                !this.primeEvent && this.slideElements) {
                    this._initTouchEvents = this._initTouchEvents.bind(this),
                    this._observeWindowsize = this._observeWindowsize.bind(this),
                    this._observeEvents = this._observeEvents.bind(this);
                    var t = document.querySelector(".mobileevent").cloneNode(!0);
                    document.querySelector(".bt_eventscroll").insertBefore(t, document.querySelector(".bt_eventscroll").firstChild),
                    re.init(),
                    this._initTouchEvents(),
                    this._observeWindowsize(),
                    window.addEventListener("scroll", t => {
                        this._observeEvents()
                    }
                    , !1),
                    window.addEventListener("resize", t => {
                        this._observeWindowsize(),
                        this._observeEvents()
                    }
                    , !1)
                }
            }
            _followLink(t) {
                t.target.closest(".link-trigger").querySelector("a").click()
            }
        }
        customElements.define("ug-events", oe);
        const ae = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
          , le = (t, e, s=null) => {
            for (; e !== s; ) {
                const s = e.nextSibling;
                t.removeChild(e),
                e = s
            }
        }
          , de = `{{lit-${String(Math.random()).slice(2)}}}`
          , ce = `\x3c!--${de}--\x3e`
          , he = new RegExp(`${de}|${ce}`)
          , pe = "$lit$";
        class ue {
            constructor(t, e) {
                this.parts = [],
                this.element = e;
                const s = []
                  , i = []
                  , n = document.createTreeWalker(e.content, 133, null, !1);
                let r = 0
                  , o = -1
                  , a = 0;
                const {strings: l, values: {length: d}} = t;
                for (; a < d; ) {
                    const t = n.nextNode();
                    if (null !== t) {
                        if (o++,
                        1 === t.nodeType) {
                            if (t.hasAttributes()) {
                                const e = t.attributes
                                  , {length: s} = e;
                                let i = 0;
                                for (let t = 0; t < s; t++)
                                    me(e[t].name, pe) && i++;
                                for (; i-- > 0; ) {
                                    const e = l[a]
                                      , s = _e.exec(e)[2]
                                      , i = s.toLowerCase() + pe
                                      , n = t.getAttribute(i);
                                    t.removeAttribute(i);
                                    const r = n.split(he);
                                    this.parts.push({
                                        type: "attribute",
                                        index: o,
                                        name: s,
                                        strings: r
                                    }),
                                    a += r.length - 1
                                }
                            }
                            "TEMPLATE" === t.tagName && (i.push(t),
                            n.currentNode = t.content)
                        } else if (3 === t.nodeType) {
                            const e = t.data;
                            if (e.indexOf(de) >= 0) {
                                const i = t.parentNode
                                  , n = e.split(he)
                                  , r = n.length - 1;
                                for (let e = 0; e < r; e++) {
                                    let s, r = n[e];
                                    if ("" === r)
                                        s = ge();
                                    else {
                                        const t = _e.exec(r);
                                        null !== t && me(t[2], pe) && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -5) + t[3]),
                                        s = document.createTextNode(r)
                                    }
                                    i.insertBefore(s, t),
                                    this.parts.push({
                                        type: "node",
                                        index: ++o
                                    })
                                }
                                "" === n[r] ? (i.insertBefore(ge(), t),
                                s.push(t)) : t.data = n[r],
                                a += r
                            }
                        } else if (8 === t.nodeType)
                            if (t.data === de) {
                                const e = t.parentNode;
                                null !== t.previousSibling && o !== r || (o++,
                                e.insertBefore(ge(), t)),
                                r = o,
                                this.parts.push({
                                    type: "node",
                                    index: o
                                }),
                                null === t.nextSibling ? t.data = "" : (s.push(t),
                                o--),
                                a++
                            } else {
                                let e = -1;
                                for (; -1 !== (e = t.data.indexOf(de, e + 1)); )
                                    this.parts.push({
                                        type: "node",
                                        index: -1
                                    }),
                                    a++
                            }
                    } else
                        n.currentNode = i.pop()
                }
                for (const t of s)
                    t.parentNode.removeChild(t)
            }
        }
        const me = (t, e) => {
            const s = t.length - e.length;
            return s >= 0 && t.slice(s) === e
        }
          , fe = t => -1 !== t.index
          , ge = () => document.createComment("")
          , _e = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        function ye(t, e) {
            const {element: {content: s}, parts: i} = t
              , n = document.createTreeWalker(s, 133, null, !1);
            let r = we(i)
              , o = i[r]
              , a = -1
              , l = 0;
            const d = [];
            let c = null;
            for (; n.nextNode(); ) {
                a++;
                const t = n.currentNode;
                for (t.previousSibling === c && (c = null),
                e.has(t) && (d.push(t),
                null === c && (c = t)),
                null !== c && l++; void 0 !== o && o.index === a; )
                    o.index = null !== c ? -1 : o.index - l,
                    r = we(i, r),
                    o = i[r]
            }
            d.forEach(t => t.parentNode.removeChild(t))
        }
        const ve = t => {
            let e = 11 === t.nodeType ? 0 : 1;
            const s = document.createTreeWalker(t, 133, null, !1);
            for (; s.nextNode(); )
                e++;
            return e
        }
          , we = (t, e=-1) => {
            for (let s = e + 1; s < t.length; s++) {
                const e = t[s];
                if (fe(e))
                    return s
            }
            return -1
        }
          , Se = new WeakMap
          , be = t => "function" == typeof t && Se.has(t)
          , xe = {}
          , ke = {};
        class Pe {
            constructor(t, e, s) {
                this.__parts = [],
                this.template = t,
                this.processor = e,
                this.options = s
            }
            update(t) {
                let e = 0;
                for (const s of this.__parts)
                    void 0 !== s && s.setValue(t[e]),
                    e++;
                for (const t of this.__parts)
                    void 0 !== t && t.commit()
            }
            _clone() {
                const t = ae ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                  , e = []
                  , s = this.template.parts
                  , i = document.createTreeWalker(t, 133, null, !1);
                let n, r = 0, o = 0, a = i.nextNode();
                for (; r < s.length; )
                    if (n = s[r],
                    fe(n)) {
                        for (; o < n.index; )
                            o++,
                            "TEMPLATE" === a.nodeName && (e.push(a),
                            i.currentNode = a.content),
                            null === (a = i.nextNode()) && (i.currentNode = e.pop(),
                            a = i.nextNode());
                        if ("node" === n.type) {
                            const t = this.processor.handleTextExpression(this.options);
                            t.insertAfterNode(a.previousSibling),
                            this.__parts.push(t)
                        } else
                            this.__parts.push(...this.processor.handleAttributeExpressions(a, n.name, n.strings, this.options));
                        r++
                    } else
                        this.__parts.push(void 0),
                        r++;
                return ae && (document.adoptNode(t),
                customElements.upgrade(t)),
                t
            }
        }
        const Ce = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: t => t
        })
          , Ae = ` ${de} `;
        class Ee {
            constructor(t, e, s, i) {
                this.strings = t,
                this.values = e,
                this.type = s,
                this.processor = i
            }
            getHTML() {
                const t = this.strings.length - 1;
                let e = ""
                  , s = !1;
                for (let i = 0; i < t; i++) {
                    const t = this.strings[i]
                      , n = t.lastIndexOf("\x3c!--");
                    s = (n > -1 || s) && -1 === t.indexOf("--\x3e", n + 1);
                    const r = _e.exec(t);
                    e += null === r ? t + (s ? Ae : ce) : t.substr(0, r.index) + r[1] + r[2] + pe + r[3] + de
                }
                return e += this.strings[t],
                e
            }
            getTemplateElement() {
                const t = document.createElement("template");
                let e = this.getHTML();
                return void 0 !== Ce && (e = Ce.createHTML(e)),
                t.innerHTML = e,
                t
            }
        }
        const Ne = t => null === t || !("object" == typeof t || "function" == typeof t)
          , Te = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        class Me {
            constructor(t, e, s) {
                this.dirty = !0,
                this.element = t,
                this.name = e,
                this.strings = s,
                this.parts = [];
                for (let t = 0; t < s.length - 1; t++)
                    this.parts[t] = this._createPart()
            }
            _createPart() {
                return new Ue(this)
            }
            _getValue() {
                const t = this.strings
                  , e = t.length - 1
                  , s = this.parts;
                if (1 === e && "" === t[0] && "" === t[1]) {
                    const t = s[0].value;
                    if ("symbol" == typeof t)
                        return String(t);
                    if ("string" == typeof t || !Te(t))
                        return t
                }
                let i = "";
                for (let n = 0; n < e; n++) {
                    i += t[n];
                    const e = s[n];
                    if (void 0 !== e) {
                        const t = e.value;
                        if (Ne(t) || !Te(t))
                            i += "string" == typeof t ? t : String(t);
                        else
                            for (const e of t)
                                i += "string" == typeof e ? e : String(e)
                    }
                }
                return i += t[e],
                i
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class Ue {
            constructor(t) {
                this.value = void 0,
                this.committer = t
            }
            setValue(t) {
                t === xe || Ne(t) && t === this.value || (this.value = t,
                be(t) || (this.committer.dirty = !0))
            }
            commit() {
                for (; be(this.value); ) {
                    const t = this.value;
                    this.value = xe,
                    t(this)
                }
                this.value !== xe && this.committer.commit()
            }
        }
        class $e {
            constructor(t) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.options = t
            }
            appendInto(t) {
                this.startNode = t.appendChild(ge()),
                this.endNode = t.appendChild(ge())
            }
            insertAfterNode(t) {
                this.startNode = t,
                this.endNode = t.nextSibling
            }
            appendIntoPart(t) {
                t.__insert(this.startNode = ge()),
                t.__insert(this.endNode = ge())
            }
            insertAfterPart(t) {
                t.__insert(this.startNode = ge()),
                this.endNode = t.endNode,
                t.endNode = this.startNode
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                if (null === this.startNode.parentNode)
                    return;
                for (; be(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = xe,
                    t(this)
                }
                const t = this.__pendingValue;
                t !== xe && (Ne(t) ? t !== this.value && this.__commitText(t) : t instanceof Ee ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : Te(t) ? this.__commitIterable(t) : t === ke ? (this.value = ke,
                this.clear()) : this.__commitText(t))
            }
            __insert(t) {
                this.endNode.parentNode.insertBefore(t, this.endNode)
            }
            __commitNode(t) {
                this.value !== t && (this.clear(),
                this.__insert(t),
                this.value = t)
            }
            __commitText(t) {
                const e = this.startNode.nextSibling
                  , s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = s : this.__commitNode(document.createTextNode(s)),
                this.value = t
            }
            __commitTemplateResult(t) {
                const e = this.options.templateFactory(t);
                if (this.value instanceof Pe && this.value.template === e)
                    this.value.update(t.values);
                else {
                    const s = new Pe(e,t.processor,this.options)
                      , i = s._clone();
                    s.update(t.values),
                    this.__commitNode(i),
                    this.value = s
                }
            }
            __commitIterable(t) {
                Array.isArray(this.value) || (this.value = [],
                this.clear());
                const e = this.value;
                let s, i = 0;
                for (const n of t)
                    s = e[i],
                    void 0 === s && (s = new $e(this.options),
                    e.push(s),
                    0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
                    s.setValue(n),
                    s.commit(),
                    i++;
                i < e.length && (e.length = i,
                this.clear(s && s.endNode))
            }
            clear(t=this.startNode) {
                le(this.startNode.parentNode, t.nextSibling, this.endNode)
            }
        }
        class Ve {
            constructor(t, e, s) {
                if (this.value = void 0,
                this.__pendingValue = void 0,
                2 !== s.length || "" !== s[0] || "" !== s[1])
                    throw new Error("Boolean attributes can only contain a single expression");
                this.element = t,
                this.name = e,
                this.strings = s
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; be(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = xe,
                    t(this)
                }
                if (this.__pendingValue === xe)
                    return;
                const t = !!this.__pendingValue;
                this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = t),
                this.__pendingValue = xe
            }
        }
        class Le extends Me {
            constructor(t, e, s) {
                super(t, e, s),
                this.single = 2 === s.length && "" === s[0] && "" === s[1]
            }
            _createPart() {
                return new Oe(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element[this.name] = this._getValue())
            }
        }
        class Oe extends Ue {
        }
        let Re = !1;
        ( () => {
            try {
                const t = {
                    get capture() {
                        return Re = !0,
                        !1
                    }
                };
                window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t)
            } catch (t) {}
        }
        )();
        class qe {
            constructor(t, e, s) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.element = t,
                this.eventName = e,
                this.eventContext = s,
                this.__boundHandleEvent = t => this.handleEvent(t)
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; be(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = xe,
                    t(this)
                }
                if (this.__pendingValue === xe)
                    return;
                const t = this.__pendingValue
                  , e = this.value
                  , s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
                  , i = null != t && (null == e || s);
                s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                i && (this.__options = je(t),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                this.value = t,
                this.__pendingValue = xe
            }
            handleEvent(t) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
            }
        }
        const je = t => t && (Re ? {
            capture: t.capture,
            passive: t.passive,
            once: t.once
        } : t.capture);
        function ze(t) {
            let e = Ie.get(t.type);
            void 0 === e && (e = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            Ie.set(t.type, e));
            let s = e.stringsArray.get(t.strings);
            if (void 0 !== s)
                return s;
            const i = t.strings.join(de);
            return s = e.keyString.get(i),
            void 0 === s && (s = new ue(t,t.getTemplateElement()),
            e.keyString.set(i, s)),
            e.stringsArray.set(t.strings, s),
            s
        }
        const Ie = new Map
          , He = new WeakMap
          , Fe = new class {
            handleAttributeExpressions(t, e, s, i) {
                const n = e[0];
                return "." === n ? new Le(t,e.slice(1),s).parts : "@" === n ? [new qe(t,e.slice(1),i.eventContext)] : "?" === n ? [new Ve(t,e.slice(1),s)] : new Me(t,e,s).parts
            }
            handleTextExpression(t) {
                return new $e(t)
            }
        }
        ;
        "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        const De = (t, ...e) => new Ee(t,e,"html",Fe)
          , Be = (t, e) => `${t}--${e}`;
        let We = !0;
        void 0 === window.ShadyCSS ? We = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
        We = !1);
        const Je = t => e => {
            const s = Be(e.type, t);
            let i = Ie.get(s);
            void 0 === i && (i = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            Ie.set(s, i));
            let n = i.stringsArray.get(e.strings);
            if (void 0 !== n)
                return n;
            const r = e.strings.join(de);
            if (n = i.keyString.get(r),
            void 0 === n) {
                const s = e.getTemplateElement();
                We && window.ShadyCSS.prepareTemplateDom(s, t),
                n = new ue(e,s),
                i.keyString.set(r, n)
            }
            return i.stringsArray.set(e.strings, n),
            n
        }
          , Ye = ["html", "svg"]
          , Ze = new Set;
        window.JSCompiler_renameProperty = (t, e) => t;
        const Ge = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t)
                }
                return t
            }
        }
          , Xe = (t, e) => e !== t && (e == e || t == t)
          , Ke = {
            attribute: !0,
            type: String,
            converter: Ge,
            reflect: !1,
            hasChanged: Xe
        }
          , Qe = "finalized";
        class ts extends HTMLElement {
            constructor() {
                super(),
                this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this._classProperties.forEach( (e, s) => {
                    const i = this._attributeNameForProperty(s, e);
                    void 0 !== i && (this._attributeToPropertyMap.set(i, s),
                    t.push(i))
                }
                ),
                t
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const t = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== t && t.forEach( (t, e) => this._classProperties.set(e, t))
                }
            }
            static createProperty(t, e=Ke) {
                if (this._ensureClassProperties(),
                this._classProperties.set(t, e),
                e.noAccessor || this.prototype.hasOwnProperty(t))
                    return;
                const s = "symbol" == typeof t ? Symbol() : `__${t}`
                  , i = this.getPropertyDescriptor(t, s, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i)
            }
            static getPropertyDescriptor(t, e, s) {
                return {
                    get() {
                        return this[e]
                    },
                    set(i) {
                        const n = this[t];
                        this[e] = i,
                        this.requestUpdateInternal(t, n, s)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this._classProperties && this._classProperties.get(t) || Ke
            }
            static finalize() {
                const t = Object.getPrototypeOf(this);
                if (t.hasOwnProperty(Qe) || t.finalize(),
                this[Qe] = !0,
                this._ensureClassProperties(),
                this._attributeToPropertyMap = new Map,
                this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
                    for (const s of e)
                        this.createProperty(s, t[s])
                }
            }
            static _attributeNameForProperty(t, e) {
                const s = e.attribute;
                return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
            }
            static _valueHasChanged(t, e, s=Xe) {
                return s(t, e)
            }
            static _propertyValueFromAttribute(t, e) {
                const s = e.type
                  , i = e.converter || Ge
                  , n = "function" == typeof i ? i : i.fromAttribute;
                return n ? n(t, s) : t
            }
            static _propertyValueToAttribute(t, e) {
                if (void 0 === e.reflect)
                    return;
                const s = e.type
                  , i = e.converter;
                return (i && i.toAttribute || Ge.toAttribute)(t, s)
            }
            initialize() {
                this._updateState = 0,
                this._updatePromise = new Promise(t => this._enableUpdatingResolver = t),
                this._changedProperties = new Map,
                this._saveInstanceProperties(),
                this.requestUpdateInternal()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach( (t, e) => {
                    if (this.hasOwnProperty(e)) {
                        const t = this[e];
                        delete this[e],
                        this._instanceProperties || (this._instanceProperties = new Map),
                        this._instanceProperties.set(e, t)
                    }
                }
                )
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach( (t, e) => this[e] = t),
                this._instanceProperties = void 0
            }
            connectedCallback() {
                this.enableUpdating()
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
                this._enableUpdatingResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(t, e, s) {
                e !== s && this._attributeToProperty(t, s)
            }
            _propertyToAttribute(t, e, s=Ke) {
                const i = this.constructor
                  , n = i._attributeNameForProperty(t, s);
                if (void 0 !== n) {
                    const t = i._propertyValueToAttribute(e, s);
                    if (void 0 === t)
                        return;
                    this._updateState = 8 | this._updateState,
                    null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
                    this._updateState = -9 & this._updateState
                }
            }
            _attributeToProperty(t, e) {
                if (8 & this._updateState)
                    return;
                const s = this.constructor
                  , i = s._attributeToPropertyMap.get(t);
                if (void 0 !== i) {
                    const t = s.getPropertyOptions(i);
                    this._updateState = 16 | this._updateState,
                    this[i] = s._propertyValueFromAttribute(e, t),
                    this._updateState = -17 & this._updateState
                }
            }
            requestUpdateInternal(t, e, s) {
                let i = !0;
                if (void 0 !== t) {
                    const n = this.constructor;
                    s = s || n.getPropertyOptions(t),
                    n._valueHasChanged(this[t], e, s.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
                    !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
                    this._reflectingProperties.set(t, s))) : i = !1
                }
                !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
            }
            requestUpdate(t, e) {
                return this.requestUpdateInternal(t, e),
                this.updateComplete
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise
                } catch (t) {}
                const t = this.performUpdate();
                return null != t && await t,
                !this._hasRequestedUpdate
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState
            }
            get hasUpdated() {
                return 1 & this._updateState
            }
            performUpdate() {
                if (!this._hasRequestedUpdate)
                    return;
                this._instanceProperties && this._applyInstanceProperties();
                let t = !1;
                const e = this._changedProperties;
                try {
                    t = this.shouldUpdate(e),
                    t ? this.update(e) : this._markUpdated()
                } catch (e) {
                    throw t = !1,
                    this._markUpdated(),
                    e
                }
                t && (1 & this._updateState || (this._updateState = 1 | this._updateState,
                this.firstUpdated(e)),
                this.updated(e))
            }
            _markUpdated() {
                this._changedProperties = new Map,
                this._updateState = -5 & this._updateState
            }
            get updateComplete() {
                return this._getUpdateComplete()
            }
            _getUpdateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._updatePromise
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach( (t, e) => this._propertyToAttribute(e, this[e], t)),
                this._reflectingProperties = void 0),
                this._markUpdated()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        ts[Qe] = !0;
        const es = Element.prototype;
        es.msMatchesSelector || es.webkitMatchesSelector;
        const ss = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , is = Symbol();
        class ns {
            constructor(t, e) {
                if (e !== is)
                    throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (ss ? (this._styleSheet = new CSSStyleSheet,
                this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
                this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        const rs = (t, ...e) => {
            const s = e.reduce( (e, s, i) => e + (t => {
                if (t instanceof ns)
                    return t.cssText;
                if ("number" == typeof t)
                    return t;
                throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
            }
            )(s) + t[i + 1], t[0]);
            return new ns(s,is)
        }
        ;
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        const os = {};
        class as extends ts {
            static getStyles() {
                return this.styles
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
                    return;
                const t = this.getStyles();
                if (Array.isArray(t)) {
                    const e = (t, s) => t.reduceRight( (t, s) => Array.isArray(s) ? e(s, t) : (t.add(s),
                    t), s)
                      , s = e(t, new Set)
                      , i = [];
                    s.forEach(t => i.unshift(t)),
                    this._styles = i
                } else
                    this._styles = void 0 === t ? [] : [t];
                this._styles = this._styles.map(t => {
                    if (t instanceof CSSStyleSheet && !ss) {
                        const e = Array.prototype.slice.call(t.cssRules).reduce( (t, e) => t + e.cssText, "");
                        return new ns(String(e),is)
                    }
                    return t
                }
                )
            }
            initialize() {
                super.initialize(),
                this.constructor._getUniqueStyles(),
                this.renderRoot = this.createRenderRoot(),
                window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions)
            }
            adoptStyles() {
                const t = this.constructor._styles;
                0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? ss ? this.renderRoot.adoptedStyleSheets = t.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
            }
            update(t) {
                const e = this.render();
                super.update(t),
                e !== os && this.constructor.render(e, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }),
                this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
                this.constructor._styles.forEach(t => {
                    const e = document.createElement("style");
                    e.textContent = t.cssText,
                    this.renderRoot.appendChild(e)
                }
                ))
            }
            render() {
                return os
            }
        }
        as.finalized = !0,
        as.render = (t, e, s) => {
            if (!s || "object" != typeof s || !s.scopeName)
                throw new Error("The `scopeName` option is required.");
            const i = s.scopeName
              , n = He.has(e)
              , r = We && 11 === e.nodeType && !!e.host
              , o = r && !Ze.has(i)
              , a = o ? document.createDocumentFragment() : e;
            if (( (t, e, s) => {
                let i = He.get(e);
                void 0 === i && (le(e, e.firstChild),
                He.set(e, i = new $e(Object.assign({
                    templateFactory: ze
                }, s))),
                i.appendInto(e)),
                i.setValue(t),
                i.commit()
            }
            )(t, a, Object.assign({
                templateFactory: Je(i)
            }, s)),
            o) {
                const t = He.get(a);
                He.delete(a);
                ( (t, e, s) => {
                    Ze.add(t);
                    const i = s ? s.element : document.createElement("template")
                      , n = e.querySelectorAll("style")
                      , {length: r} = n;
                    if (0 === r)
                        return void window.ShadyCSS.prepareTemplateStyles(i, t);
                    const o = document.createElement("style");
                    for (let t = 0; t < r; t++) {
                        const e = n[t];
                        e.parentNode.removeChild(e),
                        o.textContent += e.textContent
                    }
                    (t => {
                        Ye.forEach(e => {
                            const s = Ie.get(Be(e, t));
                            void 0 !== s && s.keyString.forEach(t => {
                                const {element: {content: e}} = t
                                  , s = new Set;
                                Array.from(e.querySelectorAll("style")).forEach(t => {
                                    s.add(t)
                                }
                                ),
                                ye(t, s)
                            }
                            )
                        }
                        )
                    }
                    )(t);
                    const a = i.content;
                    s ? function(t, e, s=null) {
                        const {element: {content: i}, parts: n} = t;
                        if (null == s)
                            return void i.appendChild(e);
                        const r = document.createTreeWalker(i, 133, null, !1);
                        let o = we(n)
                          , a = 0
                          , l = -1;
                        for (; r.nextNode(); )
                            for (l++,
                            r.currentNode === s && (a = ve(e),
                            s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l; ) {
                                if (a > 0) {
                                    for (; -1 !== o; )
                                        n[o].index += a,
                                        o = we(n, o);
                                    return
                                }
                                o = we(n, o)
                            }
                    }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild),
                    window.ShadyCSS.prepareTemplateStyles(i, t);
                    const l = a.querySelector("style");
                    if (window.ShadyCSS.nativeShadow && null !== l)
                        e.insertBefore(l.cloneNode(!0), e.firstChild);
                    else if (s) {
                        a.insertBefore(o, a.firstChild);
                        const t = new Set;
                        t.add(o),
                        ye(s, t)
                    }
                }
                )(i, a, t.value instanceof Pe ? t.value.template : void 0),
                le(e, e.firstChild),
                e.appendChild(a),
                He.set(e, t)
            }
            !n && r && window.ShadyCSS.styleElement(e.host)
        }
        ,
        as.shadowRootOptions = {
            mode: "open"
        };
        class ls extends (it(as)) {
            constructor() {
                super(),
                this.columns = "1",
                this.noheader = "1",
                this.values = [],
                this.resizeObserver = new ResizeObserver(t => {
                    for (const e of t)
                        parseInt(window.getComputedStyle(e.target).width.replace("px", "")) < 769 ? (this.classList.remove("showcol"),
                        this.classList.add("showrow")) : (this.shadowRoot.querySelectorAll(".tablerow").forEach(function(t) {
                            t.classList.remove("active")
                        }),
                        this.shadowRoot.querySelectorAll(".tablenormal").forEach(function(t) {
                            t.classList.remove("active")
                        }),
                        this.classList.remove("showrow"),
                        this._getTableCookie() && ("lyt-cols-1" === this._getTableCookie() ? (this.shadowRoot.querySelectorAll(".tablerow").forEach(function(t) {
                            t.classList.add("active")
                        }),
                        this.classList.add("showrow"),
                        this.classList.remove("showcol")) : (this.shadowRoot.querySelectorAll(".tablenormal").forEach(function(t) {
                            t.classList.add("active")
                        }),
                        this.classList.remove("showrow"),
                        this.classList.add("showcol"))))
                }
                )
            }
            static get properties() {
                return {
                    noheader: {
                        type: String
                    }
                }
            }
            static get styles() {
                return rs`


            .hidden {
              display:none !important;
            }
            .tableswitch .tablenormal {
                width: 20px;
                height: 20px;
                margin-left: 20px;
                cursor:pointer;
            }

            .tableswitch .tablerow {
                width: 20px;
                height: 20px;
                cursor:pointer;
            }

            .tableswitch .tablerow:hover svg rect,
            .tableswitch .tablenormal:hover svg rect,
            :host(.showcol) .tableswitch .tablenormal svg rect,
            :host(.showrow) .tableswitch .tablerow svg rect
            {
                fill: #ffd500;
            }

            .tableswitch {
                display: flex;
                margin-bottom: 15px;
                margin-top: 10px;
            }



            @media (max-width: 768px) {
              .tableswitch {
                  display: none;
              }

            }
      `
            }
            connectedCallback() {
                super.connectedCallback(),
                this.resizeObserver.observe(document.body)
            }
            render() {
                return this.innerHTML = this._renderLight(this._renderBootstrapTable()),
                De`

                <div class='tableswitch'>
                  <div class='tablerow' title='Nachfolgende Tabelle als Liste darstellen' role='button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20">
                      <rect id="Rechteck_857" data-name="Rechteck 857" width="19" height="20"/>
                    </svg>
                  </div>
                  <div class='tablenormal active' title='Nachfolgende Tabelle tabellarisch darstellen' role='button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20">
                      <g id="Gruppe_1529" data-name="Gruppe 1529" transform="translate(-471 -4746)">
                        <rect id="Rechteck_858" data-name="Rechteck 858" width="5" height="20" transform="translate(471 4746)"/>
                        <rect id="Rechteck_860" data-name="Rechteck 860" width="5" height="20" transform="translate(478 4746)"/>
                        <rect id="Rechteck_861" data-name="Rechteck 861" width="5" height="20" transform="translate(485 4746)"/>
                      </g>
                    </svg>
                  </div>
                </div>

                <slot></slot>
      `
            }
            _renderBootstrapTable() {
                return this.values.length || this._getFromSlot(),
                this.columns,
                "0" == this.noheader ? De`
                        ${this.values.map(t => De`
                          <div class="tableelement_wrap layout-${this.columns}">
                            <div class="tableelement_tablecontent">
                              <div part="row" class="animateoff animate--fadeInOff row">
                                  ${t.map( (e, s) => {
                    let i = this._getBootstrapColWidth(t);
                    return e.header && e.content.prepend(e.header),
                    De`
                                          <div part="col col-md-${i} col-sm-12" class="col-md-${i} col-sm-12 tableelement_col tableelement_value ${e.content.classList.value}">
                                              ${e.content}
                                          </div>
                                  `
                }
                )}
                              </div>
                            </div>
                          </div>
                        `)}
            ` : De`

                      ${this.values.map(t => De`
                        <div class="tableelement_wrap layout-${this.columns}">
                          <div class="tableelement_tablecontent">
                            <div part="row" class="animateOff animate--fadeInOff row">
                                ${t.map( (e, s) => {
                    let i = this._getBootstrapColWidth(t);
                    return De`
                                        <div part="col col-md-${i} col-sm-12" class="col-md-${i} col-sm-12  tableelement_col tableelement_value ${e.content.classList.value}">
                                          ${e.content}
                                        </div>
                                `
                }
                )}
                            </div>
                          </div>
                        </div>
                      `)}
            `
            }
            _getFromSlot() {
                this.values = [];
                var t = ""
                  , e = !1;
                this.querySelectorAll("th").length && (this.noheader = "0",
                e = !0);
                var s = []
                  , i = []
                  , n = this.querySelectorAll("tr");
                n.forEach( (e, n) => {
                    let r = e.querySelectorAll("th,td")
                      , o = e.querySelectorAll("th")
                      , a = e.querySelectorAll("th,td").length;
                    this.columns < a && (this.columns = a);
                    let l = []
                      , d = o.length < r.length ? "row" : "col";
                    d != t && "" != t ? t = "both" : "both" != t && (t = d),
                    o.forEach( (t, e) => {
                        let n = parseInt(t.getAttribute("colspan") || "1")
                          , r = e;
                        for (; i[r] && i[r] > 1; )
                            l.push(s[s.length - 1][r]),
                            i[r]--,
                            r++;
                        r = e;
                        for (let s = 0; s < n; s++)
                            if (l.push(t.innerHTML),
                            r += s,
                            t.getAttribute("rowspan")) {
                                for (; i.length < r; )
                                    i.push(1);
                                i[e + s] ? i[e + s] = parseInt(t.getAttribute("rowspan")) : i.push(parseInt(t.getAttribute("rowspan")))
                            }
                        i[r + 1] && i[r + 1] > 1 && (i[r + 1]--,
                        l.push(s[s.length - 1][r + 1]))
                    }
                    ),
                    0 != n && 1 != n || (this.columns = this.columns < l.length ? l.length : this.columns),
                    s.push(l)
                }
                );
                var r = [];
                for (let t = 0; t < this.columns; t++)
                    r.push({
                        span: 1,
                        row: 1
                    });
                n.forEach( (i, n, o) => {
                    let a = new Array
                      , l = 0;
                    var d = 0;
                    i.querySelectorAll("td,th").forEach(function(i, o, c) {
                        i.setAttribute("slot", "row-" + n + "-col-" + o);
                        try {
                            for (; r[d].span > 1 && n - r[d].row < r[d].span; ) {
                                let e = this.values[n - 1][d].content.cloneNode(!0)
                                  , i = this._getHeaders(s, n, d, t);
                                a.push({
                                    content: e,
                                    header: i,
                                    slot: "row-" + n + "-col-" + o
                                }),
                                l++,
                                d++
                            }
                        } catch (t) {
                            console.error(t)
                        }
                        let h = i.getAttribute("colspan") ? parseInt(i.getAttribute("colspan")) : 1;
                        l += h;
                        for (let l = 0; l < h; l++) {
                            let c = this._getCellcontent(i, e, s, n, d + l, t);
                            c.slot = "row-" + n + "-col-" + o,
                            a.push(c),
                            i.getAttribute("rowspan") && parseInt(i.getAttribute("rowspan")) > 1 && (r[o + l] = {
                                span: parseInt(i.getAttribute("rowspan")),
                                row: n
                            })
                        }
                        if (o == c.length - 1 && l < this.columns) {
                            let e = o + 1;
                            for (; n - r[e].row < r[e].span; ) {
                                let i = this.values[n - 1][e].content.cloneNode(!0)
                                  , r = this._getHeaders(s, n, e, t);
                                if (a.push({
                                    content: i,
                                    header: r,
                                    slot: "row-" + n + "-col-" + o
                                }),
                                e++,
                                e > this.columns - 1)
                                    break
                            }
                        }
                        d++
                    }, this),
                    this.values.push(a)
                }
                )
            }
            _getHeaders(t, e, s, i) {
                var n = ""
                  , r = "";
                "col" != i && "both" != i || (r = t[0][s],
                t.length > 1 && t[1][s] && t[1][s] != t[0][s] && (r = r + " " + t[1][s])),
                "row" != i && "both" != i || (n = t[e][0],
                t[e][1] && t[e][1] != t[e][0] && (n = n + " " + t[e][1]),
                n || (n = ""));
                var o = document.createElement("div");
                return o.classList.add("tableelement_tablecontent_rowtitle"),
                o.innerHTML = n + " " + r,
                o
            }
            _getCellcontent(t, e, s, i, n, r) {
                if (!t)
                    return null;
                var o = document.createElement("div")
                  , a = document.createElement("div")
                  , l = !1;
                a = this._getHeaders(s, i, n, r),
                l = !0,
                "TH" == t.tagName ? (o.classList.add("th"),
                l = !1) : o.classList.add("tr"),
                o.innerHTML = t.innerHTML;
                var d = {
                    content: o,
                    header: null
                };
                return l && e && (d.header = a),
                d
            }
            _getElement(t, e, s) {
                return t.item(e).querySelectorAll("th,td").item(s)
            }
            _getDomain() {
                var t = location.hostname.split(".").slice(-2).join(".");
                return t.length < 4 ? location.hostname : t
            }
            _setTableCookie(t) {
                const e = new Date;
                e.setTime(e.getTime() + 31536e6);
                let s = "expires=" + e.toUTCString();
                document.cookie = "accessibility-lyt=" + t + ";" + s + ";domain=" + this._getDomain() + ";path=/"
            }
            _getTableCookie() {
                let t = decodeURIComponent(document.cookie).split(";");
                for (let e = 0; e < t.length; e++) {
                    let s = t[e];
                    for (; " " == s.charAt(0); )
                        s = s.substring(1);
                    if (0 == s.indexOf("accessibility-lyt="))
                        return s.substring(18, s.length)
                }
                return ""
            }
            _getOneColumnCookie() {
                let t = decodeURIComponent(document.cookie).split(";");
                for (let e = 0; e < t.length; e++) {
                    let s = t[e];
                    for (; " " == s.charAt(0); )
                        s = s.substring(1);
                    if (0 == s.indexOf("accessibility-mg="))
                        return s.substring(17, s.length)
                }
                return ""
            }
            _initTableLayout() {
                this.shadowRoot.querySelectorAll(".tablerow").forEach(function(t) {
                    t.classList.remove("active")
                }),
                this.shadowRoot.querySelectorAll(".tablenormal").forEach(function(t) {
                    t.classList.remove("active")
                }),
                document.querySelectorAll("ug-bootstraptable").forEach(function(t) {
                    t.classList.remove("showrow")
                }),
                this._getTableCookie() ? "lyt-cols-1" === this._getTableCookie() ? (this.shadowRoot.querySelectorAll(".tablerow").forEach(function(t) {
                    t.classList.add("active")
                }),
                document.querySelectorAll("ug-bootstraptable").forEach(function(t) {
                    t.classList.add("showrow"),
                    t.classList.remove("showcol")
                })) : (this.shadowRoot.querySelectorAll(".tablenormal").forEach(function(t) {
                    t.classList.add("active")
                }),
                document.querySelectorAll("ug-bootstraptable").forEach(function(t) {
                    t.classList.remove("showrow"),
                    t.classList.add("showcol")
                })) : this._setTableCookie("lyt-default")
            }
            _getBootstrapColWidth(t) {
                var e = t.length;
                return e > 6 && (e = 0),
                [1, 12, 6, 4, 3, 2, 2, 1][e]
            }
            firstUpdated() {
                super.firstUpdated(),
                this._getOneColumnCookie() ? (this._setTableCookie("lyt-cols-1"),
                this.shadowRoot.querySelector(".tableswitch").classList.add("hidden")) : this.shadowRoot.querySelector(".tableswitch").classList.remove("hidden"),
                this._initTableLayout();
                var t = this;
                this.shadowRoot.querySelector(".tablerow").addEventListener("click", t => {
                    t.preventDefault(),
                    this._setTableCookie("lyt-cols-1"),
                    this._initTableLayout()
                }
                ),
                this.shadowRoot.querySelector(".tablenormal").addEventListener("click", t => {
                    t.preventDefault(),
                    this._setTableCookie("lyt-default"),
                    this._initTableLayout()
                }
                ),
                this.shadowRoot.querySelectorAll(".tableelement_value").forEach(function(t) {
                    t.querySelectorAll(".th").length && t.classList.add("th")
                }),
                this.shadowRoot.querySelectorAll(".tableelement_tablecontent .row").forEach(function(e) {
                    e.querySelectorAll(".tableelement_value.th").length == t.columns && e.classList.add("th")
                })
            }
        }
        customElements.define("ug-bootstraptable", ls);
        const ds = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
          , cs = (t, e, s=null) => {
            for (; e !== s; ) {
                const s = e.nextSibling;
                t.removeChild(e),
                e = s
            }
        }
          , hs = `{{lit-${String(Math.random()).slice(2)}}}`
          , ps = `\x3c!--${hs}--\x3e`
          , us = new RegExp(`${hs}|${ps}`)
          , ms = "$lit$";
        class fs {
            constructor(t, e) {
                this.parts = [],
                this.element = e;
                const s = []
                  , i = []
                  , n = document.createTreeWalker(e.content, 133, null, !1);
                let r = 0
                  , o = -1
                  , a = 0;
                const {strings: l, values: {length: d}} = t;
                for (; a < d; ) {
                    const t = n.nextNode();
                    if (null !== t) {
                        if (o++,
                        1 === t.nodeType) {
                            if (t.hasAttributes()) {
                                const e = t.attributes
                                  , {length: s} = e;
                                let i = 0;
                                for (let t = 0; t < s; t++)
                                    gs(e[t].name, ms) && i++;
                                for (; i-- > 0; ) {
                                    const e = l[a]
                                      , s = vs.exec(e)[2]
                                      , i = s.toLowerCase() + ms
                                      , n = t.getAttribute(i);
                                    t.removeAttribute(i);
                                    const r = n.split(us);
                                    this.parts.push({
                                        type: "attribute",
                                        index: o,
                                        name: s,
                                        strings: r
                                    }),
                                    a += r.length - 1
                                }
                            }
                            "TEMPLATE" === t.tagName && (i.push(t),
                            n.currentNode = t.content)
                        } else if (3 === t.nodeType) {
                            const e = t.data;
                            if (e.indexOf(hs) >= 0) {
                                const i = t.parentNode
                                  , n = e.split(us)
                                  , r = n.length - 1;
                                for (let e = 0; e < r; e++) {
                                    let s, r = n[e];
                                    if ("" === r)
                                        s = ys();
                                    else {
                                        const t = vs.exec(r);
                                        null !== t && gs(t[2], ms) && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -5) + t[3]),
                                        s = document.createTextNode(r)
                                    }
                                    i.insertBefore(s, t),
                                    this.parts.push({
                                        type: "node",
                                        index: ++o
                                    })
                                }
                                "" === n[r] ? (i.insertBefore(ys(), t),
                                s.push(t)) : t.data = n[r],
                                a += r
                            }
                        } else if (8 === t.nodeType)
                            if (t.data === hs) {
                                const e = t.parentNode;
                                null !== t.previousSibling && o !== r || (o++,
                                e.insertBefore(ys(), t)),
                                r = o,
                                this.parts.push({
                                    type: "node",
                                    index: o
                                }),
                                null === t.nextSibling ? t.data = "" : (s.push(t),
                                o--),
                                a++
                            } else {
                                let e = -1;
                                for (; -1 !== (e = t.data.indexOf(hs, e + 1)); )
                                    this.parts.push({
                                        type: "node",
                                        index: -1
                                    }),
                                    a++
                            }
                    } else
                        n.currentNode = i.pop()
                }
                for (const t of s)
                    t.parentNode.removeChild(t)
            }
        }
        const gs = (t, e) => {
            const s = t.length - e.length;
            return s >= 0 && t.slice(s) === e
        }
          , _s = t => -1 !== t.index
          , ys = () => document.createComment("")
          , vs = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        function ws(t, e) {
            const {element: {content: s}, parts: i} = t
              , n = document.createTreeWalker(s, 133, null, !1);
            let r = bs(i)
              , o = i[r]
              , a = -1
              , l = 0;
            const d = [];
            let c = null;
            for (; n.nextNode(); ) {
                a++;
                const t = n.currentNode;
                for (t.previousSibling === c && (c = null),
                e.has(t) && (d.push(t),
                null === c && (c = t)),
                null !== c && l++; void 0 !== o && o.index === a; )
                    o.index = null !== c ? -1 : o.index - l,
                    r = bs(i, r),
                    o = i[r]
            }
            d.forEach(t => t.parentNode.removeChild(t))
        }
        const Ss = t => {
            let e = 11 === t.nodeType ? 0 : 1;
            const s = document.createTreeWalker(t, 133, null, !1);
            for (; s.nextNode(); )
                e++;
            return e
        }
          , bs = (t, e=-1) => {
            for (let s = e + 1; s < t.length; s++) {
                const e = t[s];
                if (_s(e))
                    return s
            }
            return -1
        }
          , xs = new WeakMap
          , ks = t => "function" == typeof t && xs.has(t)
          , Ps = {}
          , Cs = {};
        class As {
            constructor(t, e, s) {
                this.__parts = [],
                this.template = t,
                this.processor = e,
                this.options = s
            }
            update(t) {
                let e = 0;
                for (const s of this.__parts)
                    void 0 !== s && s.setValue(t[e]),
                    e++;
                for (const t of this.__parts)
                    void 0 !== t && t.commit()
            }
            _clone() {
                const t = ds ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                  , e = []
                  , s = this.template.parts
                  , i = document.createTreeWalker(t, 133, null, !1);
                let n, r = 0, o = 0, a = i.nextNode();
                for (; r < s.length; )
                    if (n = s[r],
                    _s(n)) {
                        for (; o < n.index; )
                            o++,
                            "TEMPLATE" === a.nodeName && (e.push(a),
                            i.currentNode = a.content),
                            null === (a = i.nextNode()) && (i.currentNode = e.pop(),
                            a = i.nextNode());
                        if ("node" === n.type) {
                            const t = this.processor.handleTextExpression(this.options);
                            t.insertAfterNode(a.previousSibling),
                            this.__parts.push(t)
                        } else
                            this.__parts.push(...this.processor.handleAttributeExpressions(a, n.name, n.strings, this.options));
                        r++
                    } else
                        this.__parts.push(void 0),
                        r++;
                return ds && (document.adoptNode(t),
                customElements.upgrade(t)),
                t
            }
        }
        const Es = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: t => t
        })
          , Ns = ` ${hs} `;
        class Ts {
            constructor(t, e, s, i) {
                this.strings = t,
                this.values = e,
                this.type = s,
                this.processor = i
            }
            getHTML() {
                const t = this.strings.length - 1;
                let e = ""
                  , s = !1;
                for (let i = 0; i < t; i++) {
                    const t = this.strings[i]
                      , n = t.lastIndexOf("\x3c!--");
                    s = (n > -1 || s) && -1 === t.indexOf("--\x3e", n + 1);
                    const r = vs.exec(t);
                    e += null === r ? t + (s ? Ns : ps) : t.substr(0, r.index) + r[1] + r[2] + ms + r[3] + hs
                }
                return e += this.strings[t],
                e
            }
            getTemplateElement() {
                const t = document.createElement("template");
                let e = this.getHTML();
                return void 0 !== Es && (e = Es.createHTML(e)),
                t.innerHTML = e,
                t
            }
        }
        const Ms = t => null === t || !("object" == typeof t || "function" == typeof t)
          , Us = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        class $s {
            constructor(t, e, s) {
                this.dirty = !0,
                this.element = t,
                this.name = e,
                this.strings = s,
                this.parts = [];
                for (let t = 0; t < s.length - 1; t++)
                    this.parts[t] = this._createPart()
            }
            _createPart() {
                return new Vs(this)
            }
            _getValue() {
                const t = this.strings
                  , e = t.length - 1
                  , s = this.parts;
                if (1 === e && "" === t[0] && "" === t[1]) {
                    const t = s[0].value;
                    if ("symbol" == typeof t)
                        return String(t);
                    if ("string" == typeof t || !Us(t))
                        return t
                }
                let i = "";
                for (let n = 0; n < e; n++) {
                    i += t[n];
                    const e = s[n];
                    if (void 0 !== e) {
                        const t = e.value;
                        if (Ms(t) || !Us(t))
                            i += "string" == typeof t ? t : String(t);
                        else
                            for (const e of t)
                                i += "string" == typeof e ? e : String(e)
                    }
                }
                return i += t[e],
                i
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class Vs {
            constructor(t) {
                this.value = void 0,
                this.committer = t
            }
            setValue(t) {
                t === Ps || Ms(t) && t === this.value || (this.value = t,
                ks(t) || (this.committer.dirty = !0))
            }
            commit() {
                for (; ks(this.value); ) {
                    const t = this.value;
                    this.value = Ps,
                    t(this)
                }
                this.value !== Ps && this.committer.commit()
            }
        }
        class Ls {
            constructor(t) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.options = t
            }
            appendInto(t) {
                this.startNode = t.appendChild(ys()),
                this.endNode = t.appendChild(ys())
            }
            insertAfterNode(t) {
                this.startNode = t,
                this.endNode = t.nextSibling
            }
            appendIntoPart(t) {
                t.__insert(this.startNode = ys()),
                t.__insert(this.endNode = ys())
            }
            insertAfterPart(t) {
                t.__insert(this.startNode = ys()),
                this.endNode = t.endNode,
                t.endNode = this.startNode
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                if (null === this.startNode.parentNode)
                    return;
                for (; ks(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Ps,
                    t(this)
                }
                const t = this.__pendingValue;
                t !== Ps && (Ms(t) ? t !== this.value && this.__commitText(t) : t instanceof Ts ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : Us(t) ? this.__commitIterable(t) : t === Cs ? (this.value = Cs,
                this.clear()) : this.__commitText(t))
            }
            __insert(t) {
                this.endNode.parentNode.insertBefore(t, this.endNode)
            }
            __commitNode(t) {
                this.value !== t && (this.clear(),
                this.__insert(t),
                this.value = t)
            }
            __commitText(t) {
                const e = this.startNode.nextSibling
                  , s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = s : this.__commitNode(document.createTextNode(s)),
                this.value = t
            }
            __commitTemplateResult(t) {
                const e = this.options.templateFactory(t);
                if (this.value instanceof As && this.value.template === e)
                    this.value.update(t.values);
                else {
                    const s = new As(e,t.processor,this.options)
                      , i = s._clone();
                    s.update(t.values),
                    this.__commitNode(i),
                    this.value = s
                }
            }
            __commitIterable(t) {
                Array.isArray(this.value) || (this.value = [],
                this.clear());
                const e = this.value;
                let s, i = 0;
                for (const n of t)
                    s = e[i],
                    void 0 === s && (s = new Ls(this.options),
                    e.push(s),
                    0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
                    s.setValue(n),
                    s.commit(),
                    i++;
                i < e.length && (e.length = i,
                this.clear(s && s.endNode))
            }
            clear(t=this.startNode) {
                cs(this.startNode.parentNode, t.nextSibling, this.endNode)
            }
        }
        class Os {
            constructor(t, e, s) {
                if (this.value = void 0,
                this.__pendingValue = void 0,
                2 !== s.length || "" !== s[0] || "" !== s[1])
                    throw new Error("Boolean attributes can only contain a single expression");
                this.element = t,
                this.name = e,
                this.strings = s
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; ks(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Ps,
                    t(this)
                }
                if (this.__pendingValue === Ps)
                    return;
                const t = !!this.__pendingValue;
                this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = t),
                this.__pendingValue = Ps
            }
        }
        class Rs extends $s {
            constructor(t, e, s) {
                super(t, e, s),
                this.single = 2 === s.length && "" === s[0] && "" === s[1]
            }
            _createPart() {
                return new qs(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element[this.name] = this._getValue())
            }
        }
        class qs extends Vs {
        }
        let js = !1;
        ( () => {
            try {
                const t = {
                    get capture() {
                        return js = !0,
                        !1
                    }
                };
                window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t)
            } catch (t) {}
        }
        )();
        class zs {
            constructor(t, e, s) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.element = t,
                this.eventName = e,
                this.eventContext = s,
                this.__boundHandleEvent = t => this.handleEvent(t)
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; ks(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Ps,
                    t(this)
                }
                if (this.__pendingValue === Ps)
                    return;
                const t = this.__pendingValue
                  , e = this.value
                  , s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
                  , i = null != t && (null == e || s);
                s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                i && (this.__options = Is(t),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                this.value = t,
                this.__pendingValue = Ps
            }
            handleEvent(t) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
            }
        }
        const Is = t => t && (js ? {
            capture: t.capture,
            passive: t.passive,
            once: t.once
        } : t.capture);
        function Hs(t) {
            let e = Fs.get(t.type);
            void 0 === e && (e = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            Fs.set(t.type, e));
            let s = e.stringsArray.get(t.strings);
            if (void 0 !== s)
                return s;
            const i = t.strings.join(hs);
            return s = e.keyString.get(i),
            void 0 === s && (s = new fs(t,t.getTemplateElement()),
            e.keyString.set(i, s)),
            e.stringsArray.set(t.strings, s),
            s
        }
        const Fs = new Map
          , Ds = new WeakMap
          , Bs = new class {
            handleAttributeExpressions(t, e, s, i) {
                const n = e[0];
                return "." === n ? new Rs(t,e.slice(1),s).parts : "@" === n ? [new zs(t,e.slice(1),i.eventContext)] : "?" === n ? [new Os(t,e.slice(1),s)] : new $s(t,e,s).parts
            }
            handleTextExpression(t) {
                return new Ls(t)
            }
        }
        ;
        "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        const Ws = (t, ...e) => new Ts(t,e,"html",Bs)
          , Js = (t, e) => `${t}--${e}`;
        let Ys = !0;
        void 0 === window.ShadyCSS ? Ys = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
        Ys = !1);
        const Zs = t => e => {
            const s = Js(e.type, t);
            let i = Fs.get(s);
            void 0 === i && (i = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            Fs.set(s, i));
            let n = i.stringsArray.get(e.strings);
            if (void 0 !== n)
                return n;
            const r = e.strings.join(hs);
            if (n = i.keyString.get(r),
            void 0 === n) {
                const s = e.getTemplateElement();
                Ys && window.ShadyCSS.prepareTemplateDom(s, t),
                n = new fs(e,s),
                i.keyString.set(r, n)
            }
            return i.stringsArray.set(e.strings, n),
            n
        }
          , Gs = ["html", "svg"]
          , Xs = new Set;
        window.JSCompiler_renameProperty = (t, e) => t;
        const Ks = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t)
                }
                return t
            }
        }
          , Qs = (t, e) => e !== t && (e == e || t == t)
          , ti = {
            attribute: !0,
            type: String,
            converter: Ks,
            reflect: !1,
            hasChanged: Qs
        }
          , ei = "finalized";
        class si extends HTMLElement {
            constructor() {
                super(),
                this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this._classProperties.forEach( (e, s) => {
                    const i = this._attributeNameForProperty(s, e);
                    void 0 !== i && (this._attributeToPropertyMap.set(i, s),
                    t.push(i))
                }
                ),
                t
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const t = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== t && t.forEach( (t, e) => this._classProperties.set(e, t))
                }
            }
            static createProperty(t, e=ti) {
                if (this._ensureClassProperties(),
                this._classProperties.set(t, e),
                e.noAccessor || this.prototype.hasOwnProperty(t))
                    return;
                const s = "symbol" == typeof t ? Symbol() : `__${t}`
                  , i = this.getPropertyDescriptor(t, s, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i)
            }
            static getPropertyDescriptor(t, e, s) {
                return {
                    get() {
                        return this[e]
                    },
                    set(i) {
                        const n = this[t];
                        this[e] = i,
                        this.requestUpdateInternal(t, n, s)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this._classProperties && this._classProperties.get(t) || ti
            }
            static finalize() {
                const t = Object.getPrototypeOf(this);
                if (t.hasOwnProperty(ei) || t.finalize(),
                this[ei] = !0,
                this._ensureClassProperties(),
                this._attributeToPropertyMap = new Map,
                this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
                    for (const s of e)
                        this.createProperty(s, t[s])
                }
            }
            static _attributeNameForProperty(t, e) {
                const s = e.attribute;
                return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
            }
            static _valueHasChanged(t, e, s=Qs) {
                return s(t, e)
            }
            static _propertyValueFromAttribute(t, e) {
                const s = e.type
                  , i = e.converter || Ks
                  , n = "function" == typeof i ? i : i.fromAttribute;
                return n ? n(t, s) : t
            }
            static _propertyValueToAttribute(t, e) {
                if (void 0 === e.reflect)
                    return;
                const s = e.type
                  , i = e.converter;
                return (i && i.toAttribute || Ks.toAttribute)(t, s)
            }
            initialize() {
                this._updateState = 0,
                this._updatePromise = new Promise(t => this._enableUpdatingResolver = t),
                this._changedProperties = new Map,
                this._saveInstanceProperties(),
                this.requestUpdateInternal()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach( (t, e) => {
                    if (this.hasOwnProperty(e)) {
                        const t = this[e];
                        delete this[e],
                        this._instanceProperties || (this._instanceProperties = new Map),
                        this._instanceProperties.set(e, t)
                    }
                }
                )
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach( (t, e) => this[e] = t),
                this._instanceProperties = void 0
            }
            connectedCallback() {
                this.enableUpdating()
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
                this._enableUpdatingResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(t, e, s) {
                e !== s && this._attributeToProperty(t, s)
            }
            _propertyToAttribute(t, e, s=ti) {
                const i = this.constructor
                  , n = i._attributeNameForProperty(t, s);
                if (void 0 !== n) {
                    const t = i._propertyValueToAttribute(e, s);
                    if (void 0 === t)
                        return;
                    this._updateState = 8 | this._updateState,
                    null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
                    this._updateState = -9 & this._updateState
                }
            }
            _attributeToProperty(t, e) {
                if (8 & this._updateState)
                    return;
                const s = this.constructor
                  , i = s._attributeToPropertyMap.get(t);
                if (void 0 !== i) {
                    const t = s.getPropertyOptions(i);
                    this._updateState = 16 | this._updateState,
                    this[i] = s._propertyValueFromAttribute(e, t),
                    this._updateState = -17 & this._updateState
                }
            }
            requestUpdateInternal(t, e, s) {
                let i = !0;
                if (void 0 !== t) {
                    const n = this.constructor;
                    s = s || n.getPropertyOptions(t),
                    n._valueHasChanged(this[t], e, s.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
                    !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
                    this._reflectingProperties.set(t, s))) : i = !1
                }
                !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
            }
            requestUpdate(t, e) {
                return this.requestUpdateInternal(t, e),
                this.updateComplete
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise
                } catch (t) {}
                const t = this.performUpdate();
                return null != t && await t,
                !this._hasRequestedUpdate
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState
            }
            get hasUpdated() {
                return 1 & this._updateState
            }
            performUpdate() {
                if (!this._hasRequestedUpdate)
                    return;
                this._instanceProperties && this._applyInstanceProperties();
                let t = !1;
                const e = this._changedProperties;
                try {
                    t = this.shouldUpdate(e),
                    t ? this.update(e) : this._markUpdated()
                } catch (e) {
                    throw t = !1,
                    this._markUpdated(),
                    e
                }
                t && (1 & this._updateState || (this._updateState = 1 | this._updateState,
                this.firstUpdated(e)),
                this.updated(e))
            }
            _markUpdated() {
                this._changedProperties = new Map,
                this._updateState = -5 & this._updateState
            }
            get updateComplete() {
                return this._getUpdateComplete()
            }
            _getUpdateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._updatePromise
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach( (t, e) => this._propertyToAttribute(e, this[e], t)),
                this._reflectingProperties = void 0),
                this._markUpdated()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        si[ei] = !0;
        const ii = Element.prototype;
        ii.msMatchesSelector || ii.webkitMatchesSelector;
        const ni = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , ri = Symbol();
        class oi {
            constructor(t, e) {
                if (e !== ri)
                    throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (ni ? (this._styleSheet = new CSSStyleSheet,
                this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
                this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        const ai = (t, ...e) => {
            const s = e.reduce( (e, s, i) => e + (t => {
                if (t instanceof oi)
                    return t.cssText;
                if ("number" == typeof t)
                    return t;
                throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
            }
            )(s) + t[i + 1], t[0]);
            return new oi(s,ri)
        }
        ;
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        const li = {};
        class di extends si {
            static getStyles() {
                return this.styles
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
                    return;
                const t = this.getStyles();
                if (Array.isArray(t)) {
                    const e = (t, s) => t.reduceRight( (t, s) => Array.isArray(s) ? e(s, t) : (t.add(s),
                    t), s)
                      , s = e(t, new Set)
                      , i = [];
                    s.forEach(t => i.unshift(t)),
                    this._styles = i
                } else
                    this._styles = void 0 === t ? [] : [t];
                this._styles = this._styles.map(t => {
                    if (t instanceof CSSStyleSheet && !ni) {
                        const e = Array.prototype.slice.call(t.cssRules).reduce( (t, e) => t + e.cssText, "");
                        return new oi(String(e),ri)
                    }
                    return t
                }
                )
            }
            initialize() {
                super.initialize(),
                this.constructor._getUniqueStyles(),
                this.renderRoot = this.createRenderRoot(),
                window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions)
            }
            adoptStyles() {
                const t = this.constructor._styles;
                0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? ni ? this.renderRoot.adoptedStyleSheets = t.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
            }
            update(t) {
                const e = this.render();
                super.update(t),
                e !== li && this.constructor.render(e, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }),
                this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
                this.constructor._styles.forEach(t => {
                    const e = document.createElement("style");
                    e.textContent = t.cssText,
                    this.renderRoot.appendChild(e)
                }
                ))
            }
            render() {
                return li
            }
        }
        di.finalized = !0,
        di.render = (t, e, s) => {
            if (!s || "object" != typeof s || !s.scopeName)
                throw new Error("The `scopeName` option is required.");
            const i = s.scopeName
              , n = Ds.has(e)
              , r = Ys && 11 === e.nodeType && !!e.host
              , o = r && !Xs.has(i)
              , a = o ? document.createDocumentFragment() : e;
            if (( (t, e, s) => {
                let i = Ds.get(e);
                void 0 === i && (cs(e, e.firstChild),
                Ds.set(e, i = new Ls(Object.assign({
                    templateFactory: Hs
                }, s))),
                i.appendInto(e)),
                i.setValue(t),
                i.commit()
            }
            )(t, a, Object.assign({
                templateFactory: Zs(i)
            }, s)),
            o) {
                const t = Ds.get(a);
                Ds.delete(a);
                ( (t, e, s) => {
                    Xs.add(t);
                    const i = s ? s.element : document.createElement("template")
                      , n = e.querySelectorAll("style")
                      , {length: r} = n;
                    if (0 === r)
                        return void window.ShadyCSS.prepareTemplateStyles(i, t);
                    const o = document.createElement("style");
                    for (let t = 0; t < r; t++) {
                        const e = n[t];
                        e.parentNode.removeChild(e),
                        o.textContent += e.textContent
                    }
                    (t => {
                        Gs.forEach(e => {
                            const s = Fs.get(Js(e, t));
                            void 0 !== s && s.keyString.forEach(t => {
                                const {element: {content: e}} = t
                                  , s = new Set;
                                Array.from(e.querySelectorAll("style")).forEach(t => {
                                    s.add(t)
                                }
                                ),
                                ws(t, s)
                            }
                            )
                        }
                        )
                    }
                    )(t);
                    const a = i.content;
                    s ? function(t, e, s=null) {
                        const {element: {content: i}, parts: n} = t;
                        if (null == s)
                            return void i.appendChild(e);
                        const r = document.createTreeWalker(i, 133, null, !1);
                        let o = bs(n)
                          , a = 0
                          , l = -1;
                        for (; r.nextNode(); )
                            for (l++,
                            r.currentNode === s && (a = Ss(e),
                            s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l; ) {
                                if (a > 0) {
                                    for (; -1 !== o; )
                                        n[o].index += a,
                                        o = bs(n, o);
                                    return
                                }
                                o = bs(n, o)
                            }
                    }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild),
                    window.ShadyCSS.prepareTemplateStyles(i, t);
                    const l = a.querySelector("style");
                    if (window.ShadyCSS.nativeShadow && null !== l)
                        e.insertBefore(l.cloneNode(!0), e.firstChild);
                    else if (s) {
                        a.insertBefore(o, a.firstChild);
                        const t = new Set;
                        t.add(o),
                        ws(s, t)
                    }
                }
                )(i, a, t.value instanceof As ? t.value.template : void 0),
                cs(e, e.firstChild),
                e.appendChild(a),
                Ds.set(e, t)
            }
            !n && r && window.ShadyCSS.styleElement(e.host)
        }
        ,
        di.shadowRootOptions = {
            mode: "open"
        },
        customElements.define("ug-imagecontenttiles", class extends di {
            constructor() {
                super(),
                this.itemsPerRow = 2
            }
            connectedCallback() {
                super.connectedCallback()
            }
            static get properties() {
                return {
                    itemsPerRow: {
                        type: String
                    }
                }
            }
            static get styles() {
                return ai`

      :root {
        --tile-height: 0;
        --tile-text-offset: 0;
       }
      * {
        color: var(--ug-wc-color);
      }
        a {
            /*color: var(--ug-wc-color);*/
            background-image: none !important;
            text-decoration: none;
        }

        .imagecontenttile a {
            position: static !important;
        }


        .imagecontenttile a:focus-visible {
            outline: none;
        }

        .imagecontenttile a:before {
            /*display: none !important;*/
            position: absolute;
            content: "";
            display: inline-block;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent !important;
        }
        .imagecontenttile .layout-4 .imagecontenttile_container {
          height: 22vw;
        }
        .imagecontenttile .layout-2 .imagecontenttile_container {
          height: 25vw;
        }
        .imagecontenttile .layout-1 .imagecontenttile_container {
          height: 49vw;
        }

       .imagecontenttile .bt_eventicon {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46.005' height='43.004' viewBox='0 0 46.005 43.004'%3E%3Cg id='Gruppe_996' data-name='Gruppe 996' transform='translate(-394.428 -4945.428)'%3E%3Ccircle id='Ellipse_15' data-name='Ellipse 15' cx='7.501' cy='7.501' r='7.501' transform='translate(396.428 4957.929)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Ccircle id='Ellipse_16' data-name='Ellipse 16' cx='7.501' cy='7.501' r='7.501' transform='translate(423.431 4947.428)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Ccircle id='Ellipse_17' data-name='Ellipse 17' cx='7.501' cy='7.501' r='7.501' transform='translate(423.431 4971.43)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Cline id='Linie_153' data-name='Linie 153' y1='5.063' x2='13.018' transform='translate(410.921 4957.648)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3Cline id='Linie_154' data-name='Linie 154' x2='13.582' y2='6.791' transform='translate(410.639 4968.79)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'/%3E%3C/g%3E%3C/svg%3E%0A");
            width: 46px;
            height: 43px;
            position: absolute;
            right: 45px;
            top: 30px;
        }

        .imagecontenttile .imagecontenttile_container {
            height: 22vw;
            position: relative;
            display: flex;
            align-items: flex-end;
            color: #fff;
            margin-bottom: 30px;
            position: relative;
        }
         .imagecontenttile_container .primary {
           display: block
       }
       .imagecontenttile_container:hover .hoverable  .primary {
         display: none;
       }
       .imagecontenttile_container .hoverable .hover {
           display:none;
       }
       .imagecontenttile_container:hover .hoverable .hover {
         display: block;
       }


        .imagecontenttile .imagecontenttile_container .imagecontenttile_primary_image, .imagecontenttile_secondary_image {
            width: 100%;
            height: 100%;
            position: absolute;
            background-size: cover;
            background-position: center center;
            z-index: 1;
        }

        .imagecontenttile .imagecontenttile_container .imagecontenttile_primary_image {
            z-index: 2;
            animation: fadeInFull ease 0.5s;
            -webkit-animation: fadeInFull ease 0.5s;
            -moz-animation: fadeInFull ease 0.5s;
            -o-animation: fadeInFull ease 0.5s;
            -ms-animation: fadeInFull ease 0.5s;
            animation-timing-function: ease !important;
            -webkit-animation-timing-function: ease !important;
            -webkit-animation-fill-mode: forwards !important;
             animation-fill-mode: forwards !important;
        }

        .imagecontenttile .imagecontenttile_container .imagecontenttile_text {
            padding: 22px;
            z-index: 3;
            position: relative;
            background-image:  linear-gradient(0deg,#000,transparent 50%);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            width: 100%;
            box-sizing: border-box;
        }

        .imagecontenttile .imagecontenttile_container p {
            font-size: 24px;
            line-height: 32px;
            font-weight: 800;
            max-width: 80%;
            text-transform: none;
            margin-bottom: 0;
            font-family: var(--ug-wc-font-bb);
        }

        .imagecontenttile .imagecontenttile_container p,
        .imagecontenttile .imagecontenttile_container a {
            text-shadow: 3px 1px 3px rgba(0,0,0,.7),-1px -1px 3px rgba(0,0,0,.7);
        }

        .imagecontenttile .imagecontenttile_container h3 {
            text-transform: uppercase;
            font-size: 20px;
            line-height: 26px;
            margin-bottom: 20px;
            font-family: var(--ug-wc-font-bb);
        }


        .imagecontenttile .imagecontenttile_container.twoimages:hover .imagecontenttile_primary_image {
            animation: fadeOutFull ease 0.5s;
            -webkit-animation: fadeOutFull ease 0.5s;
            -moz-animation: fadeOutFull ease 0.5s;
            -o-animation: fadeOutFull ease 0.5s;
            -ms-animation: fadeOutFull ease 0.5s;
            animation-timing-function: ease !important;
            -webkit-animation-timing-function: ease !important;
            -webkit-animation-fill-mode: forwards !important;
            animation-fill-mode: forwards !important;
        }

        .imagecontenttile .imagecontenttile_container.evbox {
            background-color: #ffd500;
        }

        .imagecontenttile .imagecontenttile_container.evbox .imagecontenttile_text {
          background-image: none;
        }

        .imagecontenttile .imagecontenttile_container.evbox h3,
        .imagecontenttile .imagecontenttile_container.evbox a {
            color: #000;
            text-shadow: none;
        }

        .imagecontenttile .imagecontenttile_container.evbox .imagecontenttile_primary_image,
        .imagecontenttile .imagecontenttile_container.evbox .imagecontenttile_secondary_image {
            display: none;
        }

        .imagecontenttile .imagecontenttile_container.evbox .imagecontenttile_text {
            background: none;
        }

        .imagecontenttile .imagecontenttile_container.evbox .bt_mainnews_kat {
            color: #000;
            margin-bottom: 27px;
            font-size: 25px;
        }


        .imagecontenttile_container.no-overlay .imagecontenttile_text,
        .imagecontenttile_container.imagetextbox-1 .imagecontenttile_text{
          background-image: none;
        }

        .imagecontenttile_container .copyright-info {
          position: absolute;
          z-index: 99;
          right: 0;
          bottom: 5px;
          right: 2px;
          color: #fff;
          max-height: 75%;
          max-width: 75%;
          writing-mode: sideways-lr;
          background: linear-gradient(90deg,transparent,rgba(0,0,0,.15) 20px),linear-gradient(180deg,transparent,rgba(0,0,0,.15) 20px);
          font-size: .8rem;
          word-wrap: break-word;
          hyphens: auto;
       }

        @keyframes fadeOutFull {
             0% {
               opacity:1;
             }
             100% {
               opacity:0;
             }
       }
       @-moz-keyframes fadeOutFull {
         0% {
           opacity:1;
         }
         100% {
           opacity:0;
         }
       }
       @-webkit-keyframes fadeOutFull {
         0% {
           opacity:1;
         }
         100% {
           opacity:0;
         }
       }
       @-o-keyframes fadeOutFull {
         0% {
           opacity:1;
         }
         100% {
           opacity:0;
         }
       }
       @-ms-keyframes fadeOutFull {
         0% {
           opacity:1;
         }
         100% {
           opacity:0;
         }
       }
       @keyframes fadeInFull {
         0% {
           opacity:0;
         }
         100% {
           opacity:1;
         }
       }
       @-moz-keyframes fadeInFull {
         0% {
           opacity:0;
         }
         100% {
           opacity:1;
         }
       }
       @-webkit-keyframes fadeInFull {
         0% {
           opacity:0;
         }
         100% {
           opacity:1;
         }
       }
       @-o-keyframes fadeInFull {
         0% {
           opacity:0;
         }
         100% {
           opacity:1;
         }
       }
       @-ms-keyframes fadeInFull {
         0% {
           opacity:0;
         }
         100% {
           opacity:1;
         }
       }

       @media (max-width: 1500px) {
         .imagecontenttile .layout-4 .imagecontenttile_container p {
             font-size: 21px;
             line-height: 27px;
         }
       }
       @media (max-width: 1349px) {
         .imagecontenttile .layout-3 .imagecontenttile_container p {
             font-size: 18px;
             line-height: 23px;
             font-weight: 600;
         }
         .imagecontenttile .imagecontenttile_container.evbox .bt_mainnews_kat {
             margin-bottom: 24px;
             font-size: 20px;
         }
         .imagecontenttile .imagecontenttile_container.evbox h3 {
             font-weight: bold;
             font-size: 24px;
             line-height: 28px;
         }
         .imagecontenttile .bt_eventicon {
             transform: scale(0.8);
             right: 17px !important;
         }
       }
       @media (max-width: 1340px) {
         .imagecontenttile .layout-4 .imagecontenttile_container p {
             font-size: 18px;
             line-height: 23px;
             font-weight: 600;
         }
       }
       @media (max-width: 1200px) {
         .imagecontenttile .imagecontenttile_container.evbox h3 {
             font-size: 22px;
             line-height: 27px;
         }
         .imagecontenttile .imagecontenttile_container.evbox .bt_mainnews_kat {
             margin-bottom: 18px;
         }
       }
       @media (max-width: 1160px) {
         .imagecontenttile .layout-4 .imagecontenttile_container p {
             font-size: 16px;
             line-height: 18px;
         }
         .imagecontenttile .layout-4 .imagecontenttile_container h3 {
             font-size: 17px;
             line-height: 14px;
         }
         .imagecontenttile .layout-1 .imagecontenttile_container {
             height: 62vw;
         }
       }
       @media (max-width: 991px) {
         .imagecontenttile .layout-4 .imagecontenttile_container {
             height: 35vw;
         }
         .imagecontenttile .layout-3 .imagecontenttile_container {
             height: 35vw;
         }
         .imagecontenttile .layout-2 .imagecontenttile_container p {
             font-size: 21px;
             line-height: 25px;
         }
       }
       @media (max-width: 767px) {
         .imagecontenttile .layout-4 .imagecontenttile_container,
         .imagecontenttile .layout-3 .imagecontenttile_container,
         .imagecontenttile .layout-2 .imagecontenttile_container.
         .imagecontenttile .layout-1 .imagecontenttile_container {
             height: 60vw;
         }
       }
       @media (max-width: 500px) {
         .imagecontenttile .layout-4 .imagecontenttile_container,
         .imagecontenttile .layout-3 .imagecontenttile_container,
         .imagecontenttile .layout-2 .imagecontenttile_container,
         .imagecontenttile .layout-1 .imagecontenttile_container {
             height: 70vw;
         }
       }
       @media (max-width: 360px) {
         .imagecontenttile .imagecontenttile_container p {
             font-size: 18px;
             line-height: 20px;
         }
         .imagecontenttile .layout-1 .imagecontenttile_container h3,
         .imagecontenttile .layout-2 .imagecontenttile_container h3.
         .imagecontenttile .layout-3 .imagecontenttile_container h3,
         .imagecontenttile .layout-4 .imagecontenttile_container h3 {
             font-size: 18px;
             line-height: 23px;
         }
       }

       @media (max-width: 767px) {
         .imagecontenttile_container .copyright-info {
           max-width: 95%;
         }
       } `
            }
            render() {
                return this._renderImageTiles()
            }
            _renderImageTiles() {
                let t = this._getFromSlot("link", ["imageprimary", "imageprimarysrcset", "primarycopyright", "imagesecondary", "imagesecondarysrcset", "hovercopyright", "teaser", "headline", "date", "isevent", "isnews", "category", "class"])
                  , e = "col-md-6 col-sm-12";
                switch (this.itemsPerRow) {
                case "1":
                    e = "col-md-12 col-sm-12";
                    break;
                case "2":
                    e = "col-lg-6 col-md-6 col-sm-12";
                    break;
                case "3":
                    e = "col-lg-4 col-md-6 col-sm-12";
                    break;
                case "4":
                    e = "col-lg-3 col-md-6 col-sm-12"
                }
                return Ws`

            <div class="contentelement imagecontenttile animate animate--fadeIn">
                <div part="row" class="layout-${this.itemsPerRow}">
                    ${t.map( (t, s) => Ws`
                        <div part="col ${e}">
                                <div id="tile-${s + 1}" class="${t.class ? t.class : ""} imagecontenttile_container cursor_white animate animate--fadeIn ${t.imagesecondary ? "twoimages" : ""} ${t.imageprimary ? "" : "noimage"} ${t.isevent ? "evbox" : ""} link-trigger" >
                                    <div class="imagecontenttile_primary_image" style="background-image:url('${t.imageprimary}'); background-image: -webkit-image-set(${t.imageprimarysrcset});background-image: image-set(${t.imageprimarysrcset});"></div>
                                    ${t.imagesecondary ? Ws`<div class="imagecontenttile_secondary_image" style="background-image:url('${t.imagesecondary}'); background-image: -webkit-image-set(${t.imagesecondarysrcset});background-image: image-set(${t.imagesecondarysrcset});"></div>` : ""}
                                    ${t.isevent ? Ws`<div class="bt_eventicon"></div>` : ""}
                                  ${t.isevent || t.isnews ? this._renderNewsBox(t) : this._renderFreeBox(t)}
                                  <div class="copyright-info ${t.hovercopyright ? "hoverable" : ""}">
                                    ${this._renderImageCopyright(t)}
                                  </div>
                                </div>

                        </div>
                    `)}
                </div>
            </div>
        `
            }
            _renderImageCopyright(t) {
                let e = new Array;
                return t.primarycopyright && e.push(Ws`<span class="primary">© ${t.primarycopyright}</span>`),
                t.hovercopyright && e.push(Ws`<span class="hover">© ${t.hovercopyright}</span>`),
                e
            }
            _renderFreeBox(t) {
                return Ws`
            <div class="imagecontenttile_text">
                <div part="focus" class="focus">
                      ${this._renderHeadline(t)}
                      ${t.headline ? this._renderTeaser(t) : this._renderLinkedTeaser(t)}
                </div>
            </div>
          `
            }
            _renderHeadline(t) {
                return t.headline ? Ws`
                <h3>
                    <a part="cursor_white" class="cursor_white" href="${t.link}" target="${t.target}" title="${null !== t.title ? t.title : ""}">${Ws([t.headline])}</a>
                </h3>
            ` : ""
            }
            _renderTeaser(t) {
                return Ws`
            ${t.teaser ? Ws`<p>${t.teaser}</p>` : ""}
        `
            }
            _renderLinkedTeaser(t) {
                return Ws`
            ${t.teaser && t.link ? Ws`
            <p>
                <a part="cursor_white" class="cursor_white" href="${t.link}" target="${t.target}" title="${null !== t.title ? t.title : ""}">
                    ${Ws([t.teaser])}
                </a>
            </p>
        ` : ""}
        `
            }
            _renderNewsBox(t) {
                return Ws`
            ${t.isevent ? Ws`<div class="bt_eventicon"></div>` : ""}
            <div class="imagecontenttile_text">
                ${t.isevent ? Ws`<div class="bt_mainnews_kat">${t.category}</div>` : ""}
                <div part="focus" class="focus">
                    <h3>
                        ${t.isevent ? Ws`${new Date(1e3 * t.date).toLocaleString(t.locale, {
                    day: "2-digit",
                    month: "short"
                })} <br> ${new Date(1e3 * t.date).toLocaleString(t.locale, {
                    hour: "numeric",
                    minute: "numeric"
                })} ${"de-AT" == t.locale ? "Uhr" : ""} <br>` : Ws([t.headline])}
                    </h3>

                    <p><a part="cursor_white" class="cursor_white" href="${t.link}" target="${t.target}" title="${null !== t.title ? t.title : ""}"> ${Ws([t.teaser])}</a></p>
                </div>
            </div>
        `
            }
            _getFromSlot(t, e) {
                const s = {
                    0: "de-AT",
                    1: "en-US"
                };
                var i = this.querySelectorAll('[slot^="' + t + '"]')
                  , n = [];
                return i.forEach(t => {
                    let i;
                    if (e.length > 0) {
                        i = new Object,
                        i.locale = s[t.getAttribute("language")] || "de-AT",
                        "A" == t.tagName && (i.link = t.getAttribute("href"),
                        i.target = "",
                        null != t.getAttribute("target") && (i.target = t.getAttribute("target")),
                        i.url = t.getAttribute("href"),
                        i.title = t.getAttribute("title"),
                        i.text = t.innerHTML);
                        for (var r = 0; r < e.length; r++) {
                            let s = t.getAttribute(e[r]);
                            s || (s = t.getAttribute("data-" + e[r])),
                            !s && t.querySelector("." + e[r]) && (s = t.querySelector("." + e[r]).innerHTML),
                            i[e[r]] = s
                        }
                    }
                    n.push(i)
                }
                ),
                n
            }
            firstUpdated() {
                super.firstUpdated()
            }
            _followLink(t) {
                t.target.closest(".link-trigger").querySelector("a").click()
            }
            _calculateLinkOverlay() {
                this.shadowRoot.querySelectorAll(".imagecontenttile_container").forEach(t => {
                    var e = t.querySelector(".imagecontenttile_text");
                    if (e) {
                        let t = getComputedStyle(e);
                        var s = parseInt(t.height.replace("px", "")) + parseInt(t.paddingTop.replace("px", "")) + parseInt(t.paddingBottom.replace("px", ""))
                    }
                    let i = getComputedStyle(t).height
                      , n = s - parseInt(i.replace("px", ""));
                    t.style.setProperty("--tile-height", i),
                    t.style.setProperty("--tile-text-offset", n + "px")
                }
                )
            }
        }
        );
        const ci = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
          , hi = (t, e, s=null) => {
            for (; e !== s; ) {
                const s = e.nextSibling;
                t.removeChild(e),
                e = s
            }
        }
          , pi = `{{lit-${String(Math.random()).slice(2)}}}`
          , ui = `\x3c!--${pi}--\x3e`
          , mi = new RegExp(`${pi}|${ui}`)
          , fi = "$lit$";
        class gi {
            constructor(t, e) {
                this.parts = [],
                this.element = e;
                const s = []
                  , i = []
                  , n = document.createTreeWalker(e.content, 133, null, !1);
                let r = 0
                  , o = -1
                  , a = 0;
                const {strings: l, values: {length: d}} = t;
                for (; a < d; ) {
                    const t = n.nextNode();
                    if (null !== t) {
                        if (o++,
                        1 === t.nodeType) {
                            if (t.hasAttributes()) {
                                const e = t.attributes
                                  , {length: s} = e;
                                let i = 0;
                                for (let t = 0; t < s; t++)
                                    _i(e[t].name, fi) && i++;
                                for (; i-- > 0; ) {
                                    const e = l[a]
                                      , s = wi.exec(e)[2]
                                      , i = s.toLowerCase() + fi
                                      , n = t.getAttribute(i);
                                    t.removeAttribute(i);
                                    const r = n.split(mi);
                                    this.parts.push({
                                        type: "attribute",
                                        index: o,
                                        name: s,
                                        strings: r
                                    }),
                                    a += r.length - 1
                                }
                            }
                            "TEMPLATE" === t.tagName && (i.push(t),
                            n.currentNode = t.content)
                        } else if (3 === t.nodeType) {
                            const e = t.data;
                            if (e.indexOf(pi) >= 0) {
                                const i = t.parentNode
                                  , n = e.split(mi)
                                  , r = n.length - 1;
                                for (let e = 0; e < r; e++) {
                                    let s, r = n[e];
                                    if ("" === r)
                                        s = vi();
                                    else {
                                        const t = wi.exec(r);
                                        null !== t && _i(t[2], fi) && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -5) + t[3]),
                                        s = document.createTextNode(r)
                                    }
                                    i.insertBefore(s, t),
                                    this.parts.push({
                                        type: "node",
                                        index: ++o
                                    })
                                }
                                "" === n[r] ? (i.insertBefore(vi(), t),
                                s.push(t)) : t.data = n[r],
                                a += r
                            }
                        } else if (8 === t.nodeType)
                            if (t.data === pi) {
                                const e = t.parentNode;
                                null !== t.previousSibling && o !== r || (o++,
                                e.insertBefore(vi(), t)),
                                r = o,
                                this.parts.push({
                                    type: "node",
                                    index: o
                                }),
                                null === t.nextSibling ? t.data = "" : (s.push(t),
                                o--),
                                a++
                            } else {
                                let e = -1;
                                for (; -1 !== (e = t.data.indexOf(pi, e + 1)); )
                                    this.parts.push({
                                        type: "node",
                                        index: -1
                                    }),
                                    a++
                            }
                    } else
                        n.currentNode = i.pop()
                }
                for (const t of s)
                    t.parentNode.removeChild(t)
            }
        }
        const _i = (t, e) => {
            const s = t.length - e.length;
            return s >= 0 && t.slice(s) === e
        }
          , yi = t => -1 !== t.index
          , vi = () => document.createComment("")
          , wi = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        function Si(t, e) {
            const {element: {content: s}, parts: i} = t
              , n = document.createTreeWalker(s, 133, null, !1);
            let r = xi(i)
              , o = i[r]
              , a = -1
              , l = 0;
            const d = [];
            let c = null;
            for (; n.nextNode(); ) {
                a++;
                const t = n.currentNode;
                for (t.previousSibling === c && (c = null),
                e.has(t) && (d.push(t),
                null === c && (c = t)),
                null !== c && l++; void 0 !== o && o.index === a; )
                    o.index = null !== c ? -1 : o.index - l,
                    r = xi(i, r),
                    o = i[r]
            }
            d.forEach(t => t.parentNode.removeChild(t))
        }
        const bi = t => {
            let e = 11 === t.nodeType ? 0 : 1;
            const s = document.createTreeWalker(t, 133, null, !1);
            for (; s.nextNode(); )
                e++;
            return e
        }
          , xi = (t, e=-1) => {
            for (let s = e + 1; s < t.length; s++) {
                const e = t[s];
                if (yi(e))
                    return s
            }
            return -1
        }
          , ki = new WeakMap
          , Pi = t => "function" == typeof t && ki.has(t)
          , Ci = {}
          , Ai = {};
        class Ei {
            constructor(t, e, s) {
                this.__parts = [],
                this.template = t,
                this.processor = e,
                this.options = s
            }
            update(t) {
                let e = 0;
                for (const s of this.__parts)
                    void 0 !== s && s.setValue(t[e]),
                    e++;
                for (const t of this.__parts)
                    void 0 !== t && t.commit()
            }
            _clone() {
                const t = ci ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                  , e = []
                  , s = this.template.parts
                  , i = document.createTreeWalker(t, 133, null, !1);
                let n, r = 0, o = 0, a = i.nextNode();
                for (; r < s.length; )
                    if (n = s[r],
                    yi(n)) {
                        for (; o < n.index; )
                            o++,
                            "TEMPLATE" === a.nodeName && (e.push(a),
                            i.currentNode = a.content),
                            null === (a = i.nextNode()) && (i.currentNode = e.pop(),
                            a = i.nextNode());
                        if ("node" === n.type) {
                            const t = this.processor.handleTextExpression(this.options);
                            t.insertAfterNode(a.previousSibling),
                            this.__parts.push(t)
                        } else
                            this.__parts.push(...this.processor.handleAttributeExpressions(a, n.name, n.strings, this.options));
                        r++
                    } else
                        this.__parts.push(void 0),
                        r++;
                return ci && (document.adoptNode(t),
                customElements.upgrade(t)),
                t
            }
        }
        const Ni = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: t => t
        })
          , Ti = ` ${pi} `;
        class Mi {
            constructor(t, e, s, i) {
                this.strings = t,
                this.values = e,
                this.type = s,
                this.processor = i
            }
            getHTML() {
                const t = this.strings.length - 1;
                let e = ""
                  , s = !1;
                for (let i = 0; i < t; i++) {
                    const t = this.strings[i]
                      , n = t.lastIndexOf("\x3c!--");
                    s = (n > -1 || s) && -1 === t.indexOf("--\x3e", n + 1);
                    const r = wi.exec(t);
                    e += null === r ? t + (s ? Ti : ui) : t.substr(0, r.index) + r[1] + r[2] + fi + r[3] + pi
                }
                return e += this.strings[t],
                e
            }
            getTemplateElement() {
                const t = document.createElement("template");
                let e = this.getHTML();
                return void 0 !== Ni && (e = Ni.createHTML(e)),
                t.innerHTML = e,
                t
            }
        }
        const Ui = t => null === t || !("object" == typeof t || "function" == typeof t)
          , $i = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        class Vi {
            constructor(t, e, s) {
                this.dirty = !0,
                this.element = t,
                this.name = e,
                this.strings = s,
                this.parts = [];
                for (let t = 0; t < s.length - 1; t++)
                    this.parts[t] = this._createPart()
            }
            _createPart() {
                return new Li(this)
            }
            _getValue() {
                const t = this.strings
                  , e = t.length - 1
                  , s = this.parts;
                if (1 === e && "" === t[0] && "" === t[1]) {
                    const t = s[0].value;
                    if ("symbol" == typeof t)
                        return String(t);
                    if ("string" == typeof t || !$i(t))
                        return t
                }
                let i = "";
                for (let n = 0; n < e; n++) {
                    i += t[n];
                    const e = s[n];
                    if (void 0 !== e) {
                        const t = e.value;
                        if (Ui(t) || !$i(t))
                            i += "string" == typeof t ? t : String(t);
                        else
                            for (const e of t)
                                i += "string" == typeof e ? e : String(e)
                    }
                }
                return i += t[e],
                i
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class Li {
            constructor(t) {
                this.value = void 0,
                this.committer = t
            }
            setValue(t) {
                t === Ci || Ui(t) && t === this.value || (this.value = t,
                Pi(t) || (this.committer.dirty = !0))
            }
            commit() {
                for (; Pi(this.value); ) {
                    const t = this.value;
                    this.value = Ci,
                    t(this)
                }
                this.value !== Ci && this.committer.commit()
            }
        }
        class Oi {
            constructor(t) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.options = t
            }
            appendInto(t) {
                this.startNode = t.appendChild(vi()),
                this.endNode = t.appendChild(vi())
            }
            insertAfterNode(t) {
                this.startNode = t,
                this.endNode = t.nextSibling
            }
            appendIntoPart(t) {
                t.__insert(this.startNode = vi()),
                t.__insert(this.endNode = vi())
            }
            insertAfterPart(t) {
                t.__insert(this.startNode = vi()),
                this.endNode = t.endNode,
                t.endNode = this.startNode
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                if (null === this.startNode.parentNode)
                    return;
                for (; Pi(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Ci,
                    t(this)
                }
                const t = this.__pendingValue;
                t !== Ci && (Ui(t) ? t !== this.value && this.__commitText(t) : t instanceof Mi ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : $i(t) ? this.__commitIterable(t) : t === Ai ? (this.value = Ai,
                this.clear()) : this.__commitText(t))
            }
            __insert(t) {
                this.endNode.parentNode.insertBefore(t, this.endNode)
            }
            __commitNode(t) {
                this.value !== t && (this.clear(),
                this.__insert(t),
                this.value = t)
            }
            __commitText(t) {
                const e = this.startNode.nextSibling
                  , s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = s : this.__commitNode(document.createTextNode(s)),
                this.value = t
            }
            __commitTemplateResult(t) {
                const e = this.options.templateFactory(t);
                if (this.value instanceof Ei && this.value.template === e)
                    this.value.update(t.values);
                else {
                    const s = new Ei(e,t.processor,this.options)
                      , i = s._clone();
                    s.update(t.values),
                    this.__commitNode(i),
                    this.value = s
                }
            }
            __commitIterable(t) {
                Array.isArray(this.value) || (this.value = [],
                this.clear());
                const e = this.value;
                let s, i = 0;
                for (const n of t)
                    s = e[i],
                    void 0 === s && (s = new Oi(this.options),
                    e.push(s),
                    0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
                    s.setValue(n),
                    s.commit(),
                    i++;
                i < e.length && (e.length = i,
                this.clear(s && s.endNode))
            }
            clear(t=this.startNode) {
                hi(this.startNode.parentNode, t.nextSibling, this.endNode)
            }
        }
        class Ri {
            constructor(t, e, s) {
                if (this.value = void 0,
                this.__pendingValue = void 0,
                2 !== s.length || "" !== s[0] || "" !== s[1])
                    throw new Error("Boolean attributes can only contain a single expression");
                this.element = t,
                this.name = e,
                this.strings = s
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; Pi(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Ci,
                    t(this)
                }
                if (this.__pendingValue === Ci)
                    return;
                const t = !!this.__pendingValue;
                this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = t),
                this.__pendingValue = Ci
            }
        }
        class qi extends Vi {
            constructor(t, e, s) {
                super(t, e, s),
                this.single = 2 === s.length && "" === s[0] && "" === s[1]
            }
            _createPart() {
                return new ji(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element[this.name] = this._getValue())
            }
        }
        class ji extends Li {
        }
        let zi = !1;
        ( () => {
            try {
                const t = {
                    get capture() {
                        return zi = !0,
                        !1
                    }
                };
                window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t)
            } catch (t) {}
        }
        )();
        class Ii {
            constructor(t, e, s) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.element = t,
                this.eventName = e,
                this.eventContext = s,
                this.__boundHandleEvent = t => this.handleEvent(t)
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; Pi(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Ci,
                    t(this)
                }
                if (this.__pendingValue === Ci)
                    return;
                const t = this.__pendingValue
                  , e = this.value
                  , s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
                  , i = null != t && (null == e || s);
                s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                i && (this.__options = Hi(t),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                this.value = t,
                this.__pendingValue = Ci
            }
            handleEvent(t) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
            }
        }
        const Hi = t => t && (zi ? {
            capture: t.capture,
            passive: t.passive,
            once: t.once
        } : t.capture);
        function Fi(t) {
            let e = Di.get(t.type);
            void 0 === e && (e = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            Di.set(t.type, e));
            let s = e.stringsArray.get(t.strings);
            if (void 0 !== s)
                return s;
            const i = t.strings.join(pi);
            return s = e.keyString.get(i),
            void 0 === s && (s = new gi(t,t.getTemplateElement()),
            e.keyString.set(i, s)),
            e.stringsArray.set(t.strings, s),
            s
        }
        const Di = new Map
          , Bi = new WeakMap
          , Wi = new class {
            handleAttributeExpressions(t, e, s, i) {
                const n = e[0];
                return "." === n ? new qi(t,e.slice(1),s).parts : "@" === n ? [new Ii(t,e.slice(1),i.eventContext)] : "?" === n ? [new Ri(t,e.slice(1),s)] : new Vi(t,e,s).parts
            }
            handleTextExpression(t) {
                return new Oi(t)
            }
        }
        ;
        "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        const Ji = (t, ...e) => new Mi(t,e,"html",Wi)
          , Yi = (t, e) => `${t}--${e}`;
        let Zi = !0;
        void 0 === window.ShadyCSS ? Zi = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
        Zi = !1);
        const Gi = t => e => {
            const s = Yi(e.type, t);
            let i = Di.get(s);
            void 0 === i && (i = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            Di.set(s, i));
            let n = i.stringsArray.get(e.strings);
            if (void 0 !== n)
                return n;
            const r = e.strings.join(pi);
            if (n = i.keyString.get(r),
            void 0 === n) {
                const s = e.getTemplateElement();
                Zi && window.ShadyCSS.prepareTemplateDom(s, t),
                n = new gi(e,s),
                i.keyString.set(r, n)
            }
            return i.stringsArray.set(e.strings, n),
            n
        }
          , Xi = ["html", "svg"]
          , Ki = new Set;
        window.JSCompiler_renameProperty = (t, e) => t;
        const Qi = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t)
                }
                return t
            }
        }
          , tn = (t, e) => e !== t && (e == e || t == t)
          , en = {
            attribute: !0,
            type: String,
            converter: Qi,
            reflect: !1,
            hasChanged: tn
        }
          , sn = "finalized";
        class nn extends HTMLElement {
            constructor() {
                super(),
                this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this._classProperties.forEach( (e, s) => {
                    const i = this._attributeNameForProperty(s, e);
                    void 0 !== i && (this._attributeToPropertyMap.set(i, s),
                    t.push(i))
                }
                ),
                t
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const t = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== t && t.forEach( (t, e) => this._classProperties.set(e, t))
                }
            }
            static createProperty(t, e=en) {
                if (this._ensureClassProperties(),
                this._classProperties.set(t, e),
                e.noAccessor || this.prototype.hasOwnProperty(t))
                    return;
                const s = "symbol" == typeof t ? Symbol() : `__${t}`
                  , i = this.getPropertyDescriptor(t, s, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i)
            }
            static getPropertyDescriptor(t, e, s) {
                return {
                    get() {
                        return this[e]
                    },
                    set(i) {
                        const n = this[t];
                        this[e] = i,
                        this.requestUpdateInternal(t, n, s)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this._classProperties && this._classProperties.get(t) || en
            }
            static finalize() {
                const t = Object.getPrototypeOf(this);
                if (t.hasOwnProperty(sn) || t.finalize(),
                this[sn] = !0,
                this._ensureClassProperties(),
                this._attributeToPropertyMap = new Map,
                this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
                    for (const s of e)
                        this.createProperty(s, t[s])
                }
            }
            static _attributeNameForProperty(t, e) {
                const s = e.attribute;
                return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
            }
            static _valueHasChanged(t, e, s=tn) {
                return s(t, e)
            }
            static _propertyValueFromAttribute(t, e) {
                const s = e.type
                  , i = e.converter || Qi
                  , n = "function" == typeof i ? i : i.fromAttribute;
                return n ? n(t, s) : t
            }
            static _propertyValueToAttribute(t, e) {
                if (void 0 === e.reflect)
                    return;
                const s = e.type
                  , i = e.converter;
                return (i && i.toAttribute || Qi.toAttribute)(t, s)
            }
            initialize() {
                this._updateState = 0,
                this._updatePromise = new Promise(t => this._enableUpdatingResolver = t),
                this._changedProperties = new Map,
                this._saveInstanceProperties(),
                this.requestUpdateInternal()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach( (t, e) => {
                    if (this.hasOwnProperty(e)) {
                        const t = this[e];
                        delete this[e],
                        this._instanceProperties || (this._instanceProperties = new Map),
                        this._instanceProperties.set(e, t)
                    }
                }
                )
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach( (t, e) => this[e] = t),
                this._instanceProperties = void 0
            }
            connectedCallback() {
                this.enableUpdating()
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
                this._enableUpdatingResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(t, e, s) {
                e !== s && this._attributeToProperty(t, s)
            }
            _propertyToAttribute(t, e, s=en) {
                const i = this.constructor
                  , n = i._attributeNameForProperty(t, s);
                if (void 0 !== n) {
                    const t = i._propertyValueToAttribute(e, s);
                    if (void 0 === t)
                        return;
                    this._updateState = 8 | this._updateState,
                    null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
                    this._updateState = -9 & this._updateState
                }
            }
            _attributeToProperty(t, e) {
                if (8 & this._updateState)
                    return;
                const s = this.constructor
                  , i = s._attributeToPropertyMap.get(t);
                if (void 0 !== i) {
                    const t = s.getPropertyOptions(i);
                    this._updateState = 16 | this._updateState,
                    this[i] = s._propertyValueFromAttribute(e, t),
                    this._updateState = -17 & this._updateState
                }
            }
            requestUpdateInternal(t, e, s) {
                let i = !0;
                if (void 0 !== t) {
                    const n = this.constructor;
                    s = s || n.getPropertyOptions(t),
                    n._valueHasChanged(this[t], e, s.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
                    !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
                    this._reflectingProperties.set(t, s))) : i = !1
                }
                !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
            }
            requestUpdate(t, e) {
                return this.requestUpdateInternal(t, e),
                this.updateComplete
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise
                } catch (t) {}
                const t = this.performUpdate();
                return null != t && await t,
                !this._hasRequestedUpdate
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState
            }
            get hasUpdated() {
                return 1 & this._updateState
            }
            performUpdate() {
                if (!this._hasRequestedUpdate)
                    return;
                this._instanceProperties && this._applyInstanceProperties();
                let t = !1;
                const e = this._changedProperties;
                try {
                    t = this.shouldUpdate(e),
                    t ? this.update(e) : this._markUpdated()
                } catch (e) {
                    throw t = !1,
                    this._markUpdated(),
                    e
                }
                t && (1 & this._updateState || (this._updateState = 1 | this._updateState,
                this.firstUpdated(e)),
                this.updated(e))
            }
            _markUpdated() {
                this._changedProperties = new Map,
                this._updateState = -5 & this._updateState
            }
            get updateComplete() {
                return this._getUpdateComplete()
            }
            _getUpdateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._updatePromise
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach( (t, e) => this._propertyToAttribute(e, this[e], t)),
                this._reflectingProperties = void 0),
                this._markUpdated()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        nn[sn] = !0;
        const rn = Element.prototype;
        rn.msMatchesSelector || rn.webkitMatchesSelector;
        const on = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , an = Symbol();
        class ln {
            constructor(t, e) {
                if (e !== an)
                    throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (on ? (this._styleSheet = new CSSStyleSheet,
                this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
                this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        const dn = {};
        class cn extends nn {
            static getStyles() {
                return this.styles
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
                    return;
                const t = this.getStyles();
                if (Array.isArray(t)) {
                    const e = (t, s) => t.reduceRight( (t, s) => Array.isArray(s) ? e(s, t) : (t.add(s),
                    t), s)
                      , s = e(t, new Set)
                      , i = [];
                    s.forEach(t => i.unshift(t)),
                    this._styles = i
                } else
                    this._styles = void 0 === t ? [] : [t];
                this._styles = this._styles.map(t => {
                    if (t instanceof CSSStyleSheet && !on) {
                        const e = Array.prototype.slice.call(t.cssRules).reduce( (t, e) => t + e.cssText, "");
                        return new ln(String(e),an)
                    }
                    return t
                }
                )
            }
            initialize() {
                super.initialize(),
                this.constructor._getUniqueStyles(),
                this.renderRoot = this.createRenderRoot(),
                window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions)
            }
            adoptStyles() {
                const t = this.constructor._styles;
                0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? on ? this.renderRoot.adoptedStyleSheets = t.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
            }
            update(t) {
                const e = this.render();
                super.update(t),
                e !== dn && this.constructor.render(e, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }),
                this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
                this.constructor._styles.forEach(t => {
                    const e = document.createElement("style");
                    e.textContent = t.cssText,
                    this.renderRoot.appendChild(e)
                }
                ))
            }
            render() {
                return dn
            }
        }
        cn.finalized = !0,
        cn.render = (t, e, s) => {
            if (!s || "object" != typeof s || !s.scopeName)
                throw new Error("The `scopeName` option is required.");
            const i = s.scopeName
              , n = Bi.has(e)
              , r = Zi && 11 === e.nodeType && !!e.host
              , o = r && !Ki.has(i)
              , a = o ? document.createDocumentFragment() : e;
            if (( (t, e, s) => {
                let i = Bi.get(e);
                void 0 === i && (hi(e, e.firstChild),
                Bi.set(e, i = new Oi(Object.assign({
                    templateFactory: Fi
                }, s))),
                i.appendInto(e)),
                i.setValue(t),
                i.commit()
            }
            )(t, a, Object.assign({
                templateFactory: Gi(i)
            }, s)),
            o) {
                const t = Bi.get(a);
                Bi.delete(a);
                ( (t, e, s) => {
                    Ki.add(t);
                    const i = s ? s.element : document.createElement("template")
                      , n = e.querySelectorAll("style")
                      , {length: r} = n;
                    if (0 === r)
                        return void window.ShadyCSS.prepareTemplateStyles(i, t);
                    const o = document.createElement("style");
                    for (let t = 0; t < r; t++) {
                        const e = n[t];
                        e.parentNode.removeChild(e),
                        o.textContent += e.textContent
                    }
                    (t => {
                        Xi.forEach(e => {
                            const s = Di.get(Yi(e, t));
                            void 0 !== s && s.keyString.forEach(t => {
                                const {element: {content: e}} = t
                                  , s = new Set;
                                Array.from(e.querySelectorAll("style")).forEach(t => {
                                    s.add(t)
                                }
                                ),
                                Si(t, s)
                            }
                            )
                        }
                        )
                    }
                    )(t);
                    const a = i.content;
                    s ? function(t, e, s=null) {
                        const {element: {content: i}, parts: n} = t;
                        if (null == s)
                            return void i.appendChild(e);
                        const r = document.createTreeWalker(i, 133, null, !1);
                        let o = xi(n)
                          , a = 0
                          , l = -1;
                        for (; r.nextNode(); )
                            for (l++,
                            r.currentNode === s && (a = bi(e),
                            s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l; ) {
                                if (a > 0) {
                                    for (; -1 !== o; )
                                        n[o].index += a,
                                        o = xi(n, o);
                                    return
                                }
                                o = xi(n, o)
                            }
                    }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild),
                    window.ShadyCSS.prepareTemplateStyles(i, t);
                    const l = a.querySelector("style");
                    if (window.ShadyCSS.nativeShadow && null !== l)
                        e.insertBefore(l.cloneNode(!0), e.firstChild);
                    else if (s) {
                        a.insertBefore(o, a.firstChild);
                        const t = new Set;
                        t.add(o),
                        Si(s, t)
                    }
                }
                )(i, a, t.value instanceof Ei ? t.value.template : void 0),
                hi(e, e.firstChild),
                e.appendChild(a),
                Bi.set(e, t)
            }
            !n && r && window.ShadyCSS.styleElement(e.host)
        }
        ,
        cn.shadowRootOptions = {
            mode: "open"
        };
        class hn extends (st(cn)) {
            constructor() {
                super()
            }
            connectedCallback() {
                super.connectedCallback()
            }
            render() {
                return this._renderAccordionItems()
            }
            _renderAccordionItems() {
                let t = this._getFromSlot("accordionitem", ["header", "text"]);
                return Ji`
            <style>
                .accordionbox_list .accordionbox_item {
                    border-top: 1px solid #000;
                    padding: 30px;
                    padding-left: 22px;
                    padding-right: 22px;
                    position: relative;
                }

                .accordionbox_list .accordionbox_item .accordionbox_text {
                    float: left;
                    width: 100%;
                }

                .accordionbox_list .accordionbox_item .accordionbox_headline {
                    position: relative;
                }

                .accordionbox_list .accordionbox_item h3 {
                    font-weight: bold;
                    font-size: 32px;
                    margin-bottom: 0px !important;
                    line-height: 42px !important;
                    cursor: pointer;
                    width: calc(100% - 120px);
                }

                .accordionbox_list .accordionbox_item .accordionbox_content {
                    overflow: hidden;
                    max-height: 0px;
                    transition: all 0.4s cubic-bezier(0, 1, 0, 1);
                    opacity: 0;
                }

                .accordionbox_list .accordionbox_item .accordionbox_content_wrap {
                    padding-top: 30px;
                }

                .accordionbox_list .accordionbox_item .accordionbox_arrow {
                    width: 24px;
                    height: 12px;
                    float: right;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29.657' height='17.657' viewBox='0 0 29.657 17.657'%3E%3Cpath id='Pfad_15398' data-name='Pfad 15398' d='M0,0,12,12,0,24' transform='translate(26.828 2.828) rotate(90)' fill='none' stroke='%23000' stroke-linecap='round' stroke-width='4'/%3E%3C/svg%3E%0A");
                    position: absolute;
                    right: 18px;
                    top: 50%;
                    margin-top: -6px;
                    cursor: pointer;
                    transition-duration: 0.4s;
                    transition-property: transform;
                }

                .accordionbox_list .accordionbox_item.active .accordionbox_arrow {
                    transform: rotate(180deg);
                }

                .accordionbox_list .accordionbox_item.active .accordionbox_text .accordionbox_content {
                      overflow: inherit;
                      max-height: 100000px;
                      transition: all 0.4s ease-in-out;
                      opacity: 1;
                }

                .accordionbox_list .accordionbox_item:last-child {
                    border-bottom: 1px solid #000;
                }
            </style>
            <div class="accordionbox_list">
                ${t.map(t => Ji`
                    <div id="${t.id}" class="accordionbox_item animate animate--fadeIn">
                      <div class="accordionbox_text">
                              <div class="accordionbox_headline">
                                  <h3 role="button">${t.header.innerHTML}</h3>
                                  <div class="accordionbox_arrow"></div>
                              </div>
                              <div class="accordionbox_content">
                                  <div class="accordionbox_content_wrap">
                                    ${t.text}
                                  </div>
                              </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                `)}
            </div>
        `
            }
            _getFromSlot(t, e) {
                var s = this.querySelectorAll("." + t)
                  , i = [];
                return s.forEach(t => {
                    let s;
                    if (e.length > 0) {
                        s = new Object;
                        for (var n = 0; n < e.length; n++) {
                            let i = t.getAttribute(e[n]);
                            i || (i = t.getAttribute("data-" + e[n])),
                            !i && t.querySelector("." + e[n]) && (i = t.querySelector("." + e[n])),
                            s[e[n]] = i
                        }
                        t.getAttribute("id") ? s.id = t.getAttribute("id") : s.id = "ai_" + Date.now()
                    }
                    i.push(s)
                }
                ),
                i
            }
            _openAccordion(t) {
                document.querySelectorAll(".accordionbox_item").forEach(e => {
                    e != t.target.parentElement.parentElement.parentElement && e.classList.remove("active")
                }
                ),
                document.querySelector("body").classList.add("down"),
                t.target.parentElement.parentElement.parentElement.classList.contains("active") ? t.target.parentElement.parentElement.parentElement.classList.remove("active") : (t.target.parentElement.parentElement.parentElement.classList.add("active"),
                setTimeout( () => {
                    t.target.parentElement.parentElement.parentElement.classList.add("active"),
                    setTimeout( () => {
                        var e = 0;
                        document.querySelector("#header-breadcrumb-wrapper") && (e += document.querySelector("#header-breadcrumb-wrapper").offsetHeight);
                        var s = t.target.parentElement.parentElement.parentElement.getBoundingClientRect().top + document.documentElement.scrollTop - e;
                        window.scrollTo({
                            top: s,
                            behavior: "smooth"
                        }),
                        document.querySelector("body").classList.add("down")
                    }
                    , 600)
                }
                , 50))
            }
            _initAccordion() {
                this._openAccordion = this._openAccordion.bind(this),
                this.querySelectorAll(".accordionbox_headline").forEach(t => {
                    t.addEventListener("click", this._openAccordion, !1)
                }
                )
            }
            firstUpdated() {
                super.firstUpdated(),
                this._initAccordion = this._initAccordion.bind(this),
                this._initAccordion()
            }
        }
        customElements.define("ug-accordionbox", hn);
        const pn = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
          , un = (t, e, s=null) => {
            for (; e !== s; ) {
                const s = e.nextSibling;
                t.removeChild(e),
                e = s
            }
        }
          , mn = `{{lit-${String(Math.random()).slice(2)}}}`
          , fn = `\x3c!--${mn}--\x3e`
          , gn = new RegExp(`${mn}|${fn}`)
          , _n = "$lit$";
        class yn {
            constructor(t, e) {
                this.parts = [],
                this.element = e;
                const s = []
                  , i = []
                  , n = document.createTreeWalker(e.content, 133, null, !1);
                let r = 0
                  , o = -1
                  , a = 0;
                const {strings: l, values: {length: d}} = t;
                for (; a < d; ) {
                    const t = n.nextNode();
                    if (null !== t) {
                        if (o++,
                        1 === t.nodeType) {
                            if (t.hasAttributes()) {
                                const e = t.attributes
                                  , {length: s} = e;
                                let i = 0;
                                for (let t = 0; t < s; t++)
                                    vn(e[t].name, _n) && i++;
                                for (; i-- > 0; ) {
                                    const e = l[a]
                                      , s = bn.exec(e)[2]
                                      , i = s.toLowerCase() + _n
                                      , n = t.getAttribute(i);
                                    t.removeAttribute(i);
                                    const r = n.split(gn);
                                    this.parts.push({
                                        type: "attribute",
                                        index: o,
                                        name: s,
                                        strings: r
                                    }),
                                    a += r.length - 1
                                }
                            }
                            "TEMPLATE" === t.tagName && (i.push(t),
                            n.currentNode = t.content)
                        } else if (3 === t.nodeType) {
                            const e = t.data;
                            if (e.indexOf(mn) >= 0) {
                                const i = t.parentNode
                                  , n = e.split(gn)
                                  , r = n.length - 1;
                                for (let e = 0; e < r; e++) {
                                    let s, r = n[e];
                                    if ("" === r)
                                        s = Sn();
                                    else {
                                        const t = bn.exec(r);
                                        null !== t && vn(t[2], _n) && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -5) + t[3]),
                                        s = document.createTextNode(r)
                                    }
                                    i.insertBefore(s, t),
                                    this.parts.push({
                                        type: "node",
                                        index: ++o
                                    })
                                }
                                "" === n[r] ? (i.insertBefore(Sn(), t),
                                s.push(t)) : t.data = n[r],
                                a += r
                            }
                        } else if (8 === t.nodeType)
                            if (t.data === mn) {
                                const e = t.parentNode;
                                null !== t.previousSibling && o !== r || (o++,
                                e.insertBefore(Sn(), t)),
                                r = o,
                                this.parts.push({
                                    type: "node",
                                    index: o
                                }),
                                null === t.nextSibling ? t.data = "" : (s.push(t),
                                o--),
                                a++
                            } else {
                                let e = -1;
                                for (; -1 !== (e = t.data.indexOf(mn, e + 1)); )
                                    this.parts.push({
                                        type: "node",
                                        index: -1
                                    }),
                                    a++
                            }
                    } else
                        n.currentNode = i.pop()
                }
                for (const t of s)
                    t.parentNode.removeChild(t)
            }
        }
        const vn = (t, e) => {
            const s = t.length - e.length;
            return s >= 0 && t.slice(s) === e
        }
          , wn = t => -1 !== t.index
          , Sn = () => document.createComment("")
          , bn = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        function xn(t, e) {
            const {element: {content: s}, parts: i} = t
              , n = document.createTreeWalker(s, 133, null, !1);
            let r = Pn(i)
              , o = i[r]
              , a = -1
              , l = 0;
            const d = [];
            let c = null;
            for (; n.nextNode(); ) {
                a++;
                const t = n.currentNode;
                for (t.previousSibling === c && (c = null),
                e.has(t) && (d.push(t),
                null === c && (c = t)),
                null !== c && l++; void 0 !== o && o.index === a; )
                    o.index = null !== c ? -1 : o.index - l,
                    r = Pn(i, r),
                    o = i[r]
            }
            d.forEach(t => t.parentNode.removeChild(t))
        }
        const kn = t => {
            let e = 11 === t.nodeType ? 0 : 1;
            const s = document.createTreeWalker(t, 133, null, !1);
            for (; s.nextNode(); )
                e++;
            return e
        }
          , Pn = (t, e=-1) => {
            for (let s = e + 1; s < t.length; s++) {
                const e = t[s];
                if (wn(e))
                    return s
            }
            return -1
        }
          , Cn = new WeakMap
          , An = t => "function" == typeof t && Cn.has(t)
          , En = {}
          , Nn = {};
        class Tn {
            constructor(t, e, s) {
                this.__parts = [],
                this.template = t,
                this.processor = e,
                this.options = s
            }
            update(t) {
                let e = 0;
                for (const s of this.__parts)
                    void 0 !== s && s.setValue(t[e]),
                    e++;
                for (const t of this.__parts)
                    void 0 !== t && t.commit()
            }
            _clone() {
                const t = pn ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                  , e = []
                  , s = this.template.parts
                  , i = document.createTreeWalker(t, 133, null, !1);
                let n, r = 0, o = 0, a = i.nextNode();
                for (; r < s.length; )
                    if (n = s[r],
                    wn(n)) {
                        for (; o < n.index; )
                            o++,
                            "TEMPLATE" === a.nodeName && (e.push(a),
                            i.currentNode = a.content),
                            null === (a = i.nextNode()) && (i.currentNode = e.pop(),
                            a = i.nextNode());
                        if ("node" === n.type) {
                            const t = this.processor.handleTextExpression(this.options);
                            t.insertAfterNode(a.previousSibling),
                            this.__parts.push(t)
                        } else
                            this.__parts.push(...this.processor.handleAttributeExpressions(a, n.name, n.strings, this.options));
                        r++
                    } else
                        this.__parts.push(void 0),
                        r++;
                return pn && (document.adoptNode(t),
                customElements.upgrade(t)),
                t
            }
        }
        const Mn = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: t => t
        })
          , Un = ` ${mn} `;
        class $n {
            constructor(t, e, s, i) {
                this.strings = t,
                this.values = e,
                this.type = s,
                this.processor = i
            }
            getHTML() {
                const t = this.strings.length - 1;
                let e = ""
                  , s = !1;
                for (let i = 0; i < t; i++) {
                    const t = this.strings[i]
                      , n = t.lastIndexOf("\x3c!--");
                    s = (n > -1 || s) && -1 === t.indexOf("--\x3e", n + 1);
                    const r = bn.exec(t);
                    e += null === r ? t + (s ? Un : fn) : t.substr(0, r.index) + r[1] + r[2] + _n + r[3] + mn
                }
                return e += this.strings[t],
                e
            }
            getTemplateElement() {
                const t = document.createElement("template");
                let e = this.getHTML();
                return void 0 !== Mn && (e = Mn.createHTML(e)),
                t.innerHTML = e,
                t
            }
        }
        const Vn = t => null === t || !("object" == typeof t || "function" == typeof t)
          , Ln = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        class On {
            constructor(t, e, s) {
                this.dirty = !0,
                this.element = t,
                this.name = e,
                this.strings = s,
                this.parts = [];
                for (let t = 0; t < s.length - 1; t++)
                    this.parts[t] = this._createPart()
            }
            _createPart() {
                return new Rn(this)
            }
            _getValue() {
                const t = this.strings
                  , e = t.length - 1
                  , s = this.parts;
                if (1 === e && "" === t[0] && "" === t[1]) {
                    const t = s[0].value;
                    if ("symbol" == typeof t)
                        return String(t);
                    if ("string" == typeof t || !Ln(t))
                        return t
                }
                let i = "";
                for (let n = 0; n < e; n++) {
                    i += t[n];
                    const e = s[n];
                    if (void 0 !== e) {
                        const t = e.value;
                        if (Vn(t) || !Ln(t))
                            i += "string" == typeof t ? t : String(t);
                        else
                            for (const e of t)
                                i += "string" == typeof e ? e : String(e)
                    }
                }
                return i += t[e],
                i
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class Rn {
            constructor(t) {
                this.value = void 0,
                this.committer = t
            }
            setValue(t) {
                t === En || Vn(t) && t === this.value || (this.value = t,
                An(t) || (this.committer.dirty = !0))
            }
            commit() {
                for (; An(this.value); ) {
                    const t = this.value;
                    this.value = En,
                    t(this)
                }
                this.value !== En && this.committer.commit()
            }
        }
        class qn {
            constructor(t) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.options = t
            }
            appendInto(t) {
                this.startNode = t.appendChild(Sn()),
                this.endNode = t.appendChild(Sn())
            }
            insertAfterNode(t) {
                this.startNode = t,
                this.endNode = t.nextSibling
            }
            appendIntoPart(t) {
                t.__insert(this.startNode = Sn()),
                t.__insert(this.endNode = Sn())
            }
            insertAfterPart(t) {
                t.__insert(this.startNode = Sn()),
                this.endNode = t.endNode,
                t.endNode = this.startNode
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                if (null === this.startNode.parentNode)
                    return;
                for (; An(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = En,
                    t(this)
                }
                const t = this.__pendingValue;
                t !== En && (Vn(t) ? t !== this.value && this.__commitText(t) : t instanceof $n ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : Ln(t) ? this.__commitIterable(t) : t === Nn ? (this.value = Nn,
                this.clear()) : this.__commitText(t))
            }
            __insert(t) {
                this.endNode.parentNode.insertBefore(t, this.endNode)
            }
            __commitNode(t) {
                this.value !== t && (this.clear(),
                this.__insert(t),
                this.value = t)
            }
            __commitText(t) {
                const e = this.startNode.nextSibling
                  , s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = s : this.__commitNode(document.createTextNode(s)),
                this.value = t
            }
            __commitTemplateResult(t) {
                const e = this.options.templateFactory(t);
                if (this.value instanceof Tn && this.value.template === e)
                    this.value.update(t.values);
                else {
                    const s = new Tn(e,t.processor,this.options)
                      , i = s._clone();
                    s.update(t.values),
                    this.__commitNode(i),
                    this.value = s
                }
            }
            __commitIterable(t) {
                Array.isArray(this.value) || (this.value = [],
                this.clear());
                const e = this.value;
                let s, i = 0;
                for (const n of t)
                    s = e[i],
                    void 0 === s && (s = new qn(this.options),
                    e.push(s),
                    0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
                    s.setValue(n),
                    s.commit(),
                    i++;
                i < e.length && (e.length = i,
                this.clear(s && s.endNode))
            }
            clear(t=this.startNode) {
                un(this.startNode.parentNode, t.nextSibling, this.endNode)
            }
        }
        class jn {
            constructor(t, e, s) {
                if (this.value = void 0,
                this.__pendingValue = void 0,
                2 !== s.length || "" !== s[0] || "" !== s[1])
                    throw new Error("Boolean attributes can only contain a single expression");
                this.element = t,
                this.name = e,
                this.strings = s
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; An(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = En,
                    t(this)
                }
                if (this.__pendingValue === En)
                    return;
                const t = !!this.__pendingValue;
                this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = t),
                this.__pendingValue = En
            }
        }
        class zn extends On {
            constructor(t, e, s) {
                super(t, e, s),
                this.single = 2 === s.length && "" === s[0] && "" === s[1]
            }
            _createPart() {
                return new In(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element[this.name] = this._getValue())
            }
        }
        class In extends Rn {
        }
        let Hn = !1;
        ( () => {
            try {
                const t = {
                    get capture() {
                        return Hn = !0,
                        !1
                    }
                };
                window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t)
            } catch (t) {}
        }
        )();
        class Fn {
            constructor(t, e, s) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.element = t,
                this.eventName = e,
                this.eventContext = s,
                this.__boundHandleEvent = t => this.handleEvent(t)
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; An(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = En,
                    t(this)
                }
                if (this.__pendingValue === En)
                    return;
                const t = this.__pendingValue
                  , e = this.value
                  , s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
                  , i = null != t && (null == e || s);
                s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                i && (this.__options = Dn(t),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                this.value = t,
                this.__pendingValue = En
            }
            handleEvent(t) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
            }
        }
        const Dn = t => t && (Hn ? {
            capture: t.capture,
            passive: t.passive,
            once: t.once
        } : t.capture);
        function Bn(t) {
            let e = Wn.get(t.type);
            void 0 === e && (e = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            Wn.set(t.type, e));
            let s = e.stringsArray.get(t.strings);
            if (void 0 !== s)
                return s;
            const i = t.strings.join(mn);
            return s = e.keyString.get(i),
            void 0 === s && (s = new yn(t,t.getTemplateElement()),
            e.keyString.set(i, s)),
            e.stringsArray.set(t.strings, s),
            s
        }
        const Wn = new Map
          , Jn = new WeakMap
          , Yn = new class {
            handleAttributeExpressions(t, e, s, i) {
                const n = e[0];
                return "." === n ? new zn(t,e.slice(1),s).parts : "@" === n ? [new Fn(t,e.slice(1),i.eventContext)] : "?" === n ? [new jn(t,e.slice(1),s)] : new On(t,e,s).parts
            }
            handleTextExpression(t) {
                return new qn(t)
            }
        }
        ;
        "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        const Zn = (t, ...e) => new $n(t,e,"html",Yn)
          , Gn = (t, e) => `${t}--${e}`;
        let Xn = !0;
        void 0 === window.ShadyCSS ? Xn = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
        Xn = !1);
        const Kn = t => e => {
            const s = Gn(e.type, t);
            let i = Wn.get(s);
            void 0 === i && (i = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            Wn.set(s, i));
            let n = i.stringsArray.get(e.strings);
            if (void 0 !== n)
                return n;
            const r = e.strings.join(mn);
            if (n = i.keyString.get(r),
            void 0 === n) {
                const s = e.getTemplateElement();
                Xn && window.ShadyCSS.prepareTemplateDom(s, t),
                n = new yn(e,s),
                i.keyString.set(r, n)
            }
            return i.stringsArray.set(e.strings, n),
            n
        }
          , Qn = ["html", "svg"]
          , tr = new Set;
        window.JSCompiler_renameProperty = (t, e) => t;
        const er = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t)
                }
                return t
            }
        }
          , sr = (t, e) => e !== t && (e == e || t == t)
          , ir = {
            attribute: !0,
            type: String,
            converter: er,
            reflect: !1,
            hasChanged: sr
        }
          , nr = "finalized";
        class rr extends HTMLElement {
            constructor() {
                super(),
                this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this._classProperties.forEach( (e, s) => {
                    const i = this._attributeNameForProperty(s, e);
                    void 0 !== i && (this._attributeToPropertyMap.set(i, s),
                    t.push(i))
                }
                ),
                t
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const t = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== t && t.forEach( (t, e) => this._classProperties.set(e, t))
                }
            }
            static createProperty(t, e=ir) {
                if (this._ensureClassProperties(),
                this._classProperties.set(t, e),
                e.noAccessor || this.prototype.hasOwnProperty(t))
                    return;
                const s = "symbol" == typeof t ? Symbol() : `__${t}`
                  , i = this.getPropertyDescriptor(t, s, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i)
            }
            static getPropertyDescriptor(t, e, s) {
                return {
                    get() {
                        return this[e]
                    },
                    set(i) {
                        const n = this[t];
                        this[e] = i,
                        this.requestUpdateInternal(t, n, s)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this._classProperties && this._classProperties.get(t) || ir
            }
            static finalize() {
                const t = Object.getPrototypeOf(this);
                if (t.hasOwnProperty(nr) || t.finalize(),
                this[nr] = !0,
                this._ensureClassProperties(),
                this._attributeToPropertyMap = new Map,
                this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
                    for (const s of e)
                        this.createProperty(s, t[s])
                }
            }
            static _attributeNameForProperty(t, e) {
                const s = e.attribute;
                return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
            }
            static _valueHasChanged(t, e, s=sr) {
                return s(t, e)
            }
            static _propertyValueFromAttribute(t, e) {
                const s = e.type
                  , i = e.converter || er
                  , n = "function" == typeof i ? i : i.fromAttribute;
                return n ? n(t, s) : t
            }
            static _propertyValueToAttribute(t, e) {
                if (void 0 === e.reflect)
                    return;
                const s = e.type
                  , i = e.converter;
                return (i && i.toAttribute || er.toAttribute)(t, s)
            }
            initialize() {
                this._updateState = 0,
                this._updatePromise = new Promise(t => this._enableUpdatingResolver = t),
                this._changedProperties = new Map,
                this._saveInstanceProperties(),
                this.requestUpdateInternal()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach( (t, e) => {
                    if (this.hasOwnProperty(e)) {
                        const t = this[e];
                        delete this[e],
                        this._instanceProperties || (this._instanceProperties = new Map),
                        this._instanceProperties.set(e, t)
                    }
                }
                )
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach( (t, e) => this[e] = t),
                this._instanceProperties = void 0
            }
            connectedCallback() {
                this.enableUpdating()
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
                this._enableUpdatingResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(t, e, s) {
                e !== s && this._attributeToProperty(t, s)
            }
            _propertyToAttribute(t, e, s=ir) {
                const i = this.constructor
                  , n = i._attributeNameForProperty(t, s);
                if (void 0 !== n) {
                    const t = i._propertyValueToAttribute(e, s);
                    if (void 0 === t)
                        return;
                    this._updateState = 8 | this._updateState,
                    null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
                    this._updateState = -9 & this._updateState
                }
            }
            _attributeToProperty(t, e) {
                if (8 & this._updateState)
                    return;
                const s = this.constructor
                  , i = s._attributeToPropertyMap.get(t);
                if (void 0 !== i) {
                    const t = s.getPropertyOptions(i);
                    this._updateState = 16 | this._updateState,
                    this[i] = s._propertyValueFromAttribute(e, t),
                    this._updateState = -17 & this._updateState
                }
            }
            requestUpdateInternal(t, e, s) {
                let i = !0;
                if (void 0 !== t) {
                    const n = this.constructor;
                    s = s || n.getPropertyOptions(t),
                    n._valueHasChanged(this[t], e, s.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
                    !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
                    this._reflectingProperties.set(t, s))) : i = !1
                }
                !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
            }
            requestUpdate(t, e) {
                return this.requestUpdateInternal(t, e),
                this.updateComplete
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise
                } catch (t) {}
                const t = this.performUpdate();
                return null != t && await t,
                !this._hasRequestedUpdate
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState
            }
            get hasUpdated() {
                return 1 & this._updateState
            }
            performUpdate() {
                if (!this._hasRequestedUpdate)
                    return;
                this._instanceProperties && this._applyInstanceProperties();
                let t = !1;
                const e = this._changedProperties;
                try {
                    t = this.shouldUpdate(e),
                    t ? this.update(e) : this._markUpdated()
                } catch (e) {
                    throw t = !1,
                    this._markUpdated(),
                    e
                }
                t && (1 & this._updateState || (this._updateState = 1 | this._updateState,
                this.firstUpdated(e)),
                this.updated(e))
            }
            _markUpdated() {
                this._changedProperties = new Map,
                this._updateState = -5 & this._updateState
            }
            get updateComplete() {
                return this._getUpdateComplete()
            }
            _getUpdateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._updatePromise
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach( (t, e) => this._propertyToAttribute(e, this[e], t)),
                this._reflectingProperties = void 0),
                this._markUpdated()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        rr[nr] = !0;
        const or = Element.prototype;
        or.msMatchesSelector || or.webkitMatchesSelector;
        const ar = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , lr = Symbol();
        class dr {
            constructor(t, e) {
                if (e !== lr)
                    throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (ar ? (this._styleSheet = new CSSStyleSheet,
                this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
                this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        const cr = (t, ...e) => {
            const s = e.reduce( (e, s, i) => e + (t => {
                if (t instanceof dr)
                    return t.cssText;
                if ("number" == typeof t)
                    return t;
                throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
            }
            )(s) + t[i + 1], t[0]);
            return new dr(s,lr)
        }
        ;
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        const hr = {};
        class pr extends rr {
            static getStyles() {
                return this.styles
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
                    return;
                const t = this.getStyles();
                if (Array.isArray(t)) {
                    const e = (t, s) => t.reduceRight( (t, s) => Array.isArray(s) ? e(s, t) : (t.add(s),
                    t), s)
                      , s = e(t, new Set)
                      , i = [];
                    s.forEach(t => i.unshift(t)),
                    this._styles = i
                } else
                    this._styles = void 0 === t ? [] : [t];
                this._styles = this._styles.map(t => {
                    if (t instanceof CSSStyleSheet && !ar) {
                        const e = Array.prototype.slice.call(t.cssRules).reduce( (t, e) => t + e.cssText, "");
                        return new dr(String(e),lr)
                    }
                    return t
                }
                )
            }
            initialize() {
                super.initialize(),
                this.constructor._getUniqueStyles(),
                this.renderRoot = this.createRenderRoot(),
                window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions)
            }
            adoptStyles() {
                const t = this.constructor._styles;
                0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? ar ? this.renderRoot.adoptedStyleSheets = t.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
            }
            update(t) {
                const e = this.render();
                super.update(t),
                e !== hr && this.constructor.render(e, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }),
                this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
                this.constructor._styles.forEach(t => {
                    const e = document.createElement("style");
                    e.textContent = t.cssText,
                    this.renderRoot.appendChild(e)
                }
                ))
            }
            render() {
                return hr
            }
        }
        pr.finalized = !0,
        pr.render = (t, e, s) => {
            if (!s || "object" != typeof s || !s.scopeName)
                throw new Error("The `scopeName` option is required.");
            const i = s.scopeName
              , n = Jn.has(e)
              , r = Xn && 11 === e.nodeType && !!e.host
              , o = r && !tr.has(i)
              , a = o ? document.createDocumentFragment() : e;
            if (( (t, e, s) => {
                let i = Jn.get(e);
                void 0 === i && (un(e, e.firstChild),
                Jn.set(e, i = new qn(Object.assign({
                    templateFactory: Bn
                }, s))),
                i.appendInto(e)),
                i.setValue(t),
                i.commit()
            }
            )(t, a, Object.assign({
                templateFactory: Kn(i)
            }, s)),
            o) {
                const t = Jn.get(a);
                Jn.delete(a);
                ( (t, e, s) => {
                    tr.add(t);
                    const i = s ? s.element : document.createElement("template")
                      , n = e.querySelectorAll("style")
                      , {length: r} = n;
                    if (0 === r)
                        return void window.ShadyCSS.prepareTemplateStyles(i, t);
                    const o = document.createElement("style");
                    for (let t = 0; t < r; t++) {
                        const e = n[t];
                        e.parentNode.removeChild(e),
                        o.textContent += e.textContent
                    }
                    (t => {
                        Qn.forEach(e => {
                            const s = Wn.get(Gn(e, t));
                            void 0 !== s && s.keyString.forEach(t => {
                                const {element: {content: e}} = t
                                  , s = new Set;
                                Array.from(e.querySelectorAll("style")).forEach(t => {
                                    s.add(t)
                                }
                                ),
                                xn(t, s)
                            }
                            )
                        }
                        )
                    }
                    )(t);
                    const a = i.content;
                    s ? function(t, e, s=null) {
                        const {element: {content: i}, parts: n} = t;
                        if (null == s)
                            return void i.appendChild(e);
                        const r = document.createTreeWalker(i, 133, null, !1);
                        let o = Pn(n)
                          , a = 0
                          , l = -1;
                        for (; r.nextNode(); )
                            for (l++,
                            r.currentNode === s && (a = kn(e),
                            s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l; ) {
                                if (a > 0) {
                                    for (; -1 !== o; )
                                        n[o].index += a,
                                        o = Pn(n, o);
                                    return
                                }
                                o = Pn(n, o)
                            }
                    }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild),
                    window.ShadyCSS.prepareTemplateStyles(i, t);
                    const l = a.querySelector("style");
                    if (window.ShadyCSS.nativeShadow && null !== l)
                        e.insertBefore(l.cloneNode(!0), e.firstChild);
                    else if (s) {
                        a.insertBefore(o, a.firstChild);
                        const t = new Set;
                        t.add(o),
                        xn(s, t)
                    }
                }
                )(i, a, t.value instanceof Tn ? t.value.template : void 0),
                un(e, e.firstChild),
                e.appendChild(a),
                Jn.set(e, t)
            }
            !n && r && window.ShadyCSS.styleElement(e.host)
        }
        ,
        pr.shadowRootOptions = {
            mode: "open"
        },
        customElements.define("ug-statistics", class extends pr {
            constructor() {
                super()
            }
            firstUpdated() {
                this.statistics = this.statistics.map(t => {
                    let e = !1;
                    return t.number / Math.abs(t.number) < 0 && (e = !0),
                    "true" == t.ispercentage ? {
                        ...t,
                        number: Math.abs(100 * t.number).toFixed(0),
                        isNegative: e
                    } : {
                        ...t,
                        number: Math.abs(t.number),
                        isNegative: e
                    }
                }
                )
            }
            static get properties() {
                return {
                    statistics: {
                        type: Array
                    },
                    duration: {
                        type: Number
                    },
                    theme2022: {
                        type: String
                    }
                }
            }
            static get styles() {
                return cr`
        * {
            font-family: var(--ug-wc-font);
        }
        .statistics{
            display: flex;
            background: #FFD500 ;
            justify-content: space-around;
        }
        @media (max-width: 1199.98px) {
            .statistics{
                flex-wrap: wrap;
            }
        }
        .stat-number{
            font-size: 126px;
            font-weight: 800;
        }
        @media (max-width: 767px){
            .stat-number {
                font-size: 110px;
                text-align: center;
            }
            .stat-title{
                text-align: center;
            }
            .stat {
                width:100%;
            }
        }
        .stat-title{
            font-size: 22px;
            font-weight: 800;
        }
        .stat {
            padding: 25px;
        }
        .statistics.theme-2022 {
            background: transparent !important;
            justify-content: space-around;
            text-align: center;
            font-family: "nunito_extrabold" !important;
        }

        .theme-2022 .stat-number {
            font-size: 96px !important;
            line-height: 100px !important;
            font-weight: bold !important;
            margin-bottom: 10px;
        }

        .theme-2022 .stat-title {
            line-height: 32px !important;
            font-size: 24px !important;
            font-weight: bold !important;
        }

        @media (max-width: 1299px) {
            .theme-2022 .stat-number {
                font-size: 70px !important;
                line-height: 80px !important;
            }

            .theme-2022 .stat-title {
                font-size: 18px !important;
                line-height: 24px !important;
            }
        }

        @media (max-width: 991px) {
            .theme-2022 .stat-number {
                font-size: 50px !important;
                line-height: 60px !important;
            }
        }

        @media (max-width: 767px) {
            .theme-2022 .stat-number {
                font-size: 70px !important;
                line-height: 80px !important;
            }
        }

        @media (max-width: 576px) {
            .theme-2022 .stat-number {
                font-size: 50px !important;
                line-height: 60px !important;
            }
        }
        `
            }
            render() {
                return Zn`
            <div class="statistics ${this.theme2022 ? "theme-2022" : ""}">
                ${this.statistics.map( (t, e) => Zn`
                    <div class="stat">
                        <div class="stat-number">
                            <span class="stat-nr">${t.isNegative ? "-" : ""}${t.number}${"true" == t.ispercentage ? "%" : ""}
                            </span>
                        </div>
                        <div class="stat-title">
                            ${t.title}
                        </div>
                    </div>
                `)}
            </div>
        `
            }
        }
        );
        const ur = window
          , mr = ur.ShadowRoot && (void 0 === ur.ShadyCSS || ur.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , fr = Symbol()
          , gr = new WeakMap;
        class _r {
            constructor(t, e, s) {
                if (this._$cssResult$ = !0,
                s !== fr)
                    throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t,
                this.t = e
            }
            get styleSheet() {
                let t = this.o;
                const e = this.t;
                if (mr && void 0 === t) {
                    const s = void 0 !== e && 1 === e.length;
                    s && (t = gr.get(e)),
                    void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText),
                    s && gr.set(e, t))
                }
                return t
            }
            toString() {
                return this.cssText
            }
        }
        const yr = (t, ...e) => {
            const s = 1 === t.length ? t[0] : e.reduce( (e, s, i) => e + (t => {
                if (!0 === t._$cssResult$)
                    return t.cssText;
                if ("number" == typeof t)
                    return t;
                throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
            }
            )(s) + t[i + 1], t[0]);
            return new _r(s,t,fr)
        }
          , vr = mr ? t => t : t => t instanceof CSSStyleSheet ? (t => {
            let e = "";
            for (const s of t.cssRules)
                e += s.cssText;
            return (t => new _r("string" == typeof t ? t : t + "",void 0,fr))(e)
        }
        )(t) : t;
        var wr;
        const Sr = window
          , br = Sr.trustedTypes
          , xr = br ? br.emptyScript : ""
          , kr = Sr.reactiveElementPolyfillSupport
          , Pr = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    t = t ? xr : null;
                    break;
                case Object:
                case Array:
                    t = null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                let s = t;
                switch (e) {
                case Boolean:
                    s = null !== t;
                    break;
                case Number:
                    s = null === t ? null : Number(t);
                    break;
                case Object:
                case Array:
                    try {
                        s = JSON.parse(t)
                    } catch (t) {
                        s = null
                    }
                }
                return s
            }
        }
          , Cr = (t, e) => e !== t && (e == e || t == t)
          , Ar = {
            attribute: !0,
            type: String,
            converter: Pr,
            reflect: !1,
            hasChanged: Cr
        }
          , Er = "finalized";
        class Nr extends HTMLElement {
            constructor() {
                super(),
                this._$Ei = new Map,
                this.isUpdatePending = !1,
                this.hasUpdated = !1,
                this._$El = null,
                this._$Eu()
            }
            static addInitializer(t) {
                var e;
                this.finalize(),
                (null !== (e = this.h) && void 0 !== e ? e : this.h = []).push(t)
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this.elementProperties.forEach( (e, s) => {
                    const i = this._$Ep(s, e);
                    void 0 !== i && (this._$Ev.set(i, s),
                    t.push(i))
                }
                ),
                t
            }
            static createProperty(t, e=Ar) {
                if (e.state && (e.attribute = !1),
                this.finalize(),
                this.elementProperties.set(t, e),
                !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
                    const s = "symbol" == typeof t ? Symbol() : "__" + t
                      , i = this.getPropertyDescriptor(t, s, e);
                    void 0 !== i && Object.defineProperty(this.prototype, t, i)
                }
            }
            static getPropertyDescriptor(t, e, s) {
                return {
                    get() {
                        return this[e]
                    },
                    set(i) {
                        const n = this[t];
                        this[e] = i,
                        this.requestUpdate(t, n, s)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this.elementProperties.get(t) || Ar
            }
            static finalize() {
                if (this.hasOwnProperty(Er))
                    return !1;
                this[Er] = !0;
                const t = Object.getPrototypeOf(this);
                if (t.finalize(),
                void 0 !== t.h && (this.h = [...t.h]),
                this.elementProperties = new Map(t.elementProperties),
                this._$Ev = new Map,
                this.hasOwnProperty("properties")) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
                    for (const s of e)
                        this.createProperty(s, t[s])
                }
                return this.elementStyles = this.finalizeStyles(this.styles),
                !0
            }
            static finalizeStyles(t) {
                const e = [];
                if (Array.isArray(t)) {
                    const s = new Set(t.flat(1 / 0).reverse());
                    for (const t of s)
                        e.unshift(vr(t))
                } else
                    void 0 !== t && e.push(vr(t));
                return e
            }
            static _$Ep(t, e) {
                const s = e.attribute;
                return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
            }
            _$Eu() {
                var t;
                this._$E_ = new Promise(t => this.enableUpdating = t),
                this._$AL = new Map,
                this._$Eg(),
                this.requestUpdate(),
                null === (t = this.constructor.h) || void 0 === t || t.forEach(t => t(this))
            }
            addController(t) {
                var e, s;
                (null !== (e = this._$ES) && void 0 !== e ? e : this._$ES = []).push(t),
                void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t))
            }
            removeController(t) {
                var e;
                null === (e = this._$ES) || void 0 === e || e.splice(this._$ES.indexOf(t) >>> 0, 1)
            }
            _$Eg() {
                this.constructor.elementProperties.forEach( (t, e) => {
                    this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]),
                    delete this[e])
                }
                )
            }
            createRenderRoot() {
                var t;
                const e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
                return ( (t, e) => {
                    mr ? t.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach(e => {
                        const s = document.createElement("style")
                          , i = ur.litNonce;
                        void 0 !== i && s.setAttribute("nonce", i),
                        s.textContent = e.cssText,
                        t.appendChild(s)
                    }
                    )
                }
                )(e, this.constructor.elementStyles),
                e
            }
            connectedCallback() {
                var t;
                void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
                this.enableUpdating(!0),
                null === (t = this._$ES) || void 0 === t || t.forEach(t => {
                    var e;
                    return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
                }
                )
            }
            enableUpdating(t) {}
            disconnectedCallback() {
                var t;
                null === (t = this._$ES) || void 0 === t || t.forEach(t => {
                    var e;
                    return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
                }
                )
            }
            attributeChangedCallback(t, e, s) {
                this._$AK(t, s)
            }
            _$EO(t, e, s=Ar) {
                var i;
                const n = this.constructor._$Ep(t, s);
                if (void 0 !== n && !0 === s.reflect) {
                    const r = (void 0 !== (null === (i = s.converter) || void 0 === i ? void 0 : i.toAttribute) ? s.converter : Pr).toAttribute(e, s.type);
                    this._$El = t,
                    null == r ? this.removeAttribute(n) : this.setAttribute(n, r),
                    this._$El = null
                }
            }
            _$AK(t, e) {
                var s;
                const i = this.constructor
                  , n = i._$Ev.get(t);
                if (void 0 !== n && this._$El !== n) {
                    const t = i.getPropertyOptions(n)
                      , r = "function" == typeof t.converter ? {
                        fromAttribute: t.converter
                    } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : Pr;
                    this._$El = n,
                    this[n] = r.fromAttribute(e, t.type),
                    this._$El = null
                }
            }
            requestUpdate(t, e, s) {
                let i = !0;
                void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || Cr)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e),
                !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map),
                this._$EC.set(t, s))) : i = !1),
                !this.isUpdatePending && i && (this._$E_ = this._$Ej())
            }
            async _$Ej() {
                this.isUpdatePending = !0;
                try {
                    await this._$E_
                } catch (t) {
                    Promise.reject(t)
                }
                const t = this.scheduleUpdate();
                return null != t && await t,
                !this.isUpdatePending
            }
            scheduleUpdate() {
                return this.performUpdate()
            }
            performUpdate() {
                var t;
                if (!this.isUpdatePending)
                    return;
                this.hasUpdated,
                this._$Ei && (this._$Ei.forEach( (t, e) => this[e] = t),
                this._$Ei = void 0);
                let e = !1;
                const s = this._$AL;
                try {
                    e = this.shouldUpdate(s),
                    e ? (this.willUpdate(s),
                    null === (t = this._$ES) || void 0 === t || t.forEach(t => {
                        var e;
                        return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
                    }
                    ),
                    this.update(s)) : this._$Ek()
                } catch (t) {
                    throw e = !1,
                    this._$Ek(),
                    t
                }
                e && this._$AE(s)
            }
            willUpdate(t) {}
            _$AE(t) {
                var e;
                null === (e = this._$ES) || void 0 === e || e.forEach(t => {
                    var e;
                    return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
                }
                ),
                this.hasUpdated || (this.hasUpdated = !0,
                this.firstUpdated(t)),
                this.updated(t)
            }
            _$Ek() {
                this._$AL = new Map,
                this.isUpdatePending = !1
            }
            get updateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._$E_
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._$EC && (this._$EC.forEach( (t, e) => this._$EO(e, this[e], t)),
                this._$EC = void 0),
                this._$Ek()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        var Tr;
        Nr[Er] = !0,
        Nr.elementProperties = new Map,
        Nr.elementStyles = [],
        Nr.shadowRootOptions = {
            mode: "open"
        },
        null == kr || kr({
            ReactiveElement: Nr
        }),
        (null !== (wr = Sr.reactiveElementVersions) && void 0 !== wr ? wr : Sr.reactiveElementVersions = []).push("1.6.3");
        const Mr = window
          , Ur = Mr.trustedTypes
          , $r = Ur ? Ur.createPolicy("lit-html", {
            createHTML: t => t
        }) : void 0
          , Vr = "$lit$"
          , Lr = `lit$${(Math.random() + "").slice(9)}$`
          , Or = "?" + Lr
          , Rr = `<${Or}>`
          , qr = document
          , jr = () => qr.createComment("")
          , zr = t => null === t || "object" != typeof t && "function" != typeof t
          , Ir = Array.isArray
          , Hr = "[ \t\n\f\r]"
          , Fr = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
          , Dr = /-->/g
          , Br = />/g
          , Wr = RegExp(`>|${Hr}(?:([^\\s"'>=/]+)(${Hr}*=${Hr}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g")
          , Jr = /'/g
          , Yr = /"/g
          , Zr = /^(?:script|style|textarea|title)$/i
          , Gr = t => (e, ...s) => ({
            _$litType$: t,
            strings: e,
            values: s
        })
          , Xr = Gr(1)
          , Kr = Gr(2)
          , Qr = Symbol.for("lit-noChange")
          , to = Symbol.for("lit-nothing")
          , eo = new WeakMap
          , so = qr.createTreeWalker(qr, 129, null, !1);
        function io(t, e) {
            if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
                throw Error("invalid template strings array");
            return void 0 !== $r ? $r.createHTML(e) : e
        }
        const no = (t, e) => {
            const s = t.length - 1
              , i = [];
            let n, r = 2 === e ? "<svg>" : "", o = Fr;
            for (let e = 0; e < s; e++) {
                const s = t[e];
                let a, l, d = -1, c = 0;
                for (; c < s.length && (o.lastIndex = c,
                l = o.exec(s),
                null !== l); )
                    c = o.lastIndex,
                    o === Fr ? "!--" === l[1] ? o = Dr : void 0 !== l[1] ? o = Br : void 0 !== l[2] ? (Zr.test(l[2]) && (n = RegExp("</" + l[2], "g")),
                    o = Wr) : void 0 !== l[3] && (o = Wr) : o === Wr ? ">" === l[0] ? (o = null != n ? n : Fr,
                    d = -1) : void 0 === l[1] ? d = -2 : (d = o.lastIndex - l[2].length,
                    a = l[1],
                    o = void 0 === l[3] ? Wr : '"' === l[3] ? Yr : Jr) : o === Yr || o === Jr ? o = Wr : o === Dr || o === Br ? o = Fr : (o = Wr,
                    n = void 0);
                const h = o === Wr && t[e + 1].startsWith("/>") ? " " : "";
                r += o === Fr ? s + Rr : d >= 0 ? (i.push(a),
                s.slice(0, d) + Vr + s.slice(d) + Lr + h) : s + Lr + (-2 === d ? (i.push(void 0),
                e) : h)
            }
            return [io(t, r + (t[s] || "<?>") + (2 === e ? "</svg>" : "")), i]
        }
        ;
        class ro {
            constructor({strings: t, _$litType$: e}, s) {
                let i;
                this.parts = [];
                let n = 0
                  , r = 0;
                const o = t.length - 1
                  , a = this.parts
                  , [l,d] = no(t, e);
                if (this.el = ro.createElement(l, s),
                so.currentNode = this.el.content,
                2 === e) {
                    const t = this.el.content
                      , e = t.firstChild;
                    e.remove(),
                    t.append(...e.childNodes)
                }
                for (; null !== (i = so.nextNode()) && a.length < o; ) {
                    if (1 === i.nodeType) {
                        if (i.hasAttributes()) {
                            const t = [];
                            for (const e of i.getAttributeNames())
                                if (e.endsWith(Vr) || e.startsWith(Lr)) {
                                    const s = d[r++];
                                    if (t.push(e),
                                    void 0 !== s) {
                                        const t = i.getAttribute(s.toLowerCase() + Vr).split(Lr)
                                          , e = /([.?@])?(.*)/.exec(s);
                                        a.push({
                                            type: 1,
                                            index: n,
                                            name: e[2],
                                            strings: t,
                                            ctor: "." === e[1] ? ho : "?" === e[1] ? uo : "@" === e[1] ? mo : co
                                        })
                                    } else
                                        a.push({
                                            type: 6,
                                            index: n
                                        })
                                }
                            for (const e of t)
                                i.removeAttribute(e)
                        }
                        if (Zr.test(i.tagName)) {
                            const t = i.textContent.split(Lr)
                              , e = t.length - 1;
                            if (e > 0) {
                                i.textContent = Ur ? Ur.emptyScript : "";
                                for (let s = 0; s < e; s++)
                                    i.append(t[s], jr()),
                                    so.nextNode(),
                                    a.push({
                                        type: 2,
                                        index: ++n
                                    });
                                i.append(t[e], jr())
                            }
                        }
                    } else if (8 === i.nodeType)
                        if (i.data === Or)
                            a.push({
                                type: 2,
                                index: n
                            });
                        else {
                            let t = -1;
                            for (; -1 !== (t = i.data.indexOf(Lr, t + 1)); )
                                a.push({
                                    type: 7,
                                    index: n
                                }),
                                t += Lr.length - 1
                        }
                    n++
                }
            }
            static createElement(t, e) {
                const s = qr.createElement("template");
                return s.innerHTML = t,
                s
            }
        }
        function oo(t, e, s=t, i) {
            var n, r, o, a;
            if (e === Qr)
                return e;
            let l = void 0 !== i ? null === (n = s._$Co) || void 0 === n ? void 0 : n[i] : s._$Cl;
            const d = zr(e) ? void 0 : e._$litDirective$;
            return (null == l ? void 0 : l.constructor) !== d && (null === (r = null == l ? void 0 : l._$AO) || void 0 === r || r.call(l, !1),
            void 0 === d ? l = void 0 : (l = new d(t),
            l._$AT(t, s, i)),
            void 0 !== i ? (null !== (o = (a = s)._$Co) && void 0 !== o ? o : a._$Co = [])[i] = l : s._$Cl = l),
            void 0 !== l && (e = oo(t, l._$AS(t, e.values), l, i)),
            e
        }
        class ao {
            constructor(t, e) {
                this._$AV = [],
                this._$AN = void 0,
                this._$AD = t,
                this._$AM = e
            }
            get parentNode() {
                return this._$AM.parentNode
            }
            get _$AU() {
                return this._$AM._$AU
            }
            u(t) {
                var e;
                const {el: {content: s}, parts: i} = this._$AD
                  , n = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : qr).importNode(s, !0);
                so.currentNode = n;
                let r = so.nextNode()
                  , o = 0
                  , a = 0
                  , l = i[0];
                for (; void 0 !== l; ) {
                    if (o === l.index) {
                        let e;
                        2 === l.type ? e = new lo(r,r.nextSibling,this,t) : 1 === l.type ? e = new l.ctor(r,l.name,l.strings,this,t) : 6 === l.type && (e = new fo(r,this,t)),
                        this._$AV.push(e),
                        l = i[++a]
                    }
                    o !== (null == l ? void 0 : l.index) && (r = so.nextNode(),
                    o++)
                }
                return so.currentNode = qr,
                n
            }
            v(t) {
                let e = 0;
                for (const s of this._$AV)
                    void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, e),
                    e += s.strings.length - 2) : s._$AI(t[e])),
                    e++
            }
        }
        class lo {
            constructor(t, e, s, i) {
                var n;
                this.type = 2,
                this._$AH = to,
                this._$AN = void 0,
                this._$AA = t,
                this._$AB = e,
                this._$AM = s,
                this.options = i,
                this._$Cp = null === (n = null == i ? void 0 : i.isConnected) || void 0 === n || n
            }
            get _$AU() {
                var t, e;
                return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cp
            }
            get parentNode() {
                let t = this._$AA.parentNode;
                const e = this._$AM;
                return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode),
                t
            }
            get startNode() {
                return this._$AA
            }
            get endNode() {
                return this._$AB
            }
            _$AI(t, e=this) {
                t = oo(this, t, e),
                zr(t) ? t === to || null == t || "" === t ? (this._$AH !== to && this._$AR(),
                this._$AH = to) : t !== this._$AH && t !== Qr && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : (t => Ir(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]))(t) ? this.T(t) : this._(t)
            }
            k(t) {
                return this._$AA.parentNode.insertBefore(t, this._$AB)
            }
            $(t) {
                this._$AH !== t && (this._$AR(),
                this._$AH = this.k(t))
            }
            _(t) {
                this._$AH !== to && zr(this._$AH) ? this._$AA.nextSibling.data = t : this.$(qr.createTextNode(t)),
                this._$AH = t
            }
            g(t) {
                var e;
                const {values: s, _$litType$: i} = t
                  , n = "number" == typeof i ? this._$AC(t) : (void 0 === i.el && (i.el = ro.createElement(io(i.h, i.h[0]), this.options)),
                i);
                if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === n)
                    this._$AH.v(s);
                else {
                    const t = new ao(n,this)
                      , e = t.u(this.options);
                    t.v(s),
                    this.$(e),
                    this._$AH = t
                }
            }
            _$AC(t) {
                let e = eo.get(t.strings);
                return void 0 === e && eo.set(t.strings, e = new ro(t)),
                e
            }
            T(t) {
                Ir(this._$AH) || (this._$AH = [],
                this._$AR());
                const e = this._$AH;
                let s, i = 0;
                for (const n of t)
                    i === e.length ? e.push(s = new lo(this.k(jr()),this.k(jr()),this,this.options)) : s = e[i],
                    s._$AI(n),
                    i++;
                i < e.length && (this._$AR(s && s._$AB.nextSibling, i),
                e.length = i)
            }
            _$AR(t=this._$AA.nextSibling, e) {
                var s;
                for (null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, e); t && t !== this._$AB; ) {
                    const e = t.nextSibling;
                    t.remove(),
                    t = e
                }
            }
            setConnected(t) {
                var e;
                void 0 === this._$AM && (this._$Cp = t,
                null === (e = this._$AP) || void 0 === e || e.call(this, t))
            }
        }
        class co {
            constructor(t, e, s, i, n) {
                this.type = 1,
                this._$AH = to,
                this._$AN = void 0,
                this.element = t,
                this.name = e,
                this._$AM = i,
                this.options = n,
                s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String),
                this.strings = s) : this._$AH = to
            }
            get tagName() {
                return this.element.tagName
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(t, e=this, s, i) {
                const n = this.strings;
                let r = !1;
                if (void 0 === n)
                    t = oo(this, t, e, 0),
                    r = !zr(t) || t !== this._$AH && t !== Qr,
                    r && (this._$AH = t);
                else {
                    const i = t;
                    let o, a;
                    for (t = n[0],
                    o = 0; o < n.length - 1; o++)
                        a = oo(this, i[s + o], e, o),
                        a === Qr && (a = this._$AH[o]),
                        r || (r = !zr(a) || a !== this._$AH[o]),
                        a === to ? t = to : t !== to && (t += (null != a ? a : "") + n[o + 1]),
                        this._$AH[o] = a
                }
                r && !i && this.j(t)
            }
            j(t) {
                t === to ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
            }
        }
        class ho extends co {
            constructor() {
                super(...arguments),
                this.type = 3
            }
            j(t) {
                this.element[this.name] = t === to ? void 0 : t
            }
        }
        const po = Ur ? Ur.emptyScript : "";
        class uo extends co {
            constructor() {
                super(...arguments),
                this.type = 4
            }
            j(t) {
                t && t !== to ? this.element.setAttribute(this.name, po) : this.element.removeAttribute(this.name)
            }
        }
        class mo extends co {
            constructor(t, e, s, i, n) {
                super(t, e, s, i, n),
                this.type = 5
            }
            _$AI(t, e=this) {
                var s;
                if ((t = null !== (s = oo(this, t, e, 0)) && void 0 !== s ? s : to) === Qr)
                    return;
                const i = this._$AH
                  , n = t === to && i !== to || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive
                  , r = t !== to && (i === to || n);
                n && this.element.removeEventListener(this.name, this, i),
                r && this.element.addEventListener(this.name, this, t),
                this._$AH = t
            }
            handleEvent(t) {
                var e, s;
                "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t)
            }
        }
        class fo {
            constructor(t, e, s) {
                this.element = t,
                this.type = 6,
                this._$AN = void 0,
                this._$AM = e,
                this.options = s
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(t) {
                oo(this, t)
            }
        }
        const go = Mr.litHtmlPolyfillSupport;
        var _o, yo;
        null == go || go(ro, lo),
        (null !== (Tr = Mr.litHtmlVersions) && void 0 !== Tr ? Tr : Mr.litHtmlVersions = []).push("2.8.0");
        class vo extends Nr {
            constructor() {
                super(...arguments),
                this.renderOptions = {
                    host: this
                },
                this._$Do = void 0
            }
            createRenderRoot() {
                var t, e;
                const s = super.createRenderRoot();
                return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = s.firstChild),
                s
            }
            update(t) {
                const e = this.render();
                this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
                super.update(t),
                this._$Do = ( (t, e, s) => {
                    var i, n;
                    const r = null !== (i = null == s ? void 0 : s.renderBefore) && void 0 !== i ? i : e;
                    let o = r._$litPart$;
                    if (void 0 === o) {
                        const t = null !== (n = null == s ? void 0 : s.renderBefore) && void 0 !== n ? n : null;
                        r._$litPart$ = o = new lo(e.insertBefore(jr(), t),t,void 0,null != s ? s : {})
                    }
                    return o._$AI(t),
                    o
                }
                )(e, this.renderRoot, this.renderOptions)
            }
            connectedCallback() {
                var t;
                super.connectedCallback(),
                null === (t = this._$Do) || void 0 === t || t.setConnected(!0)
            }
            disconnectedCallback() {
                var t;
                super.disconnectedCallback(),
                null === (t = this._$Do) || void 0 === t || t.setConnected(!1)
            }
            render() {
                return Qr
            }
        }
        vo.finalized = !0,
        vo._$litElement$ = !0,
        null === (_o = globalThis.litElementHydrateSupport) || void 0 === _o || _o.call(globalThis, {
            LitElement: vo
        });
        const wo = globalThis.litElementPolyfillSupport;
        null == wo || wo({
            LitElement: vo
        }),
        (null !== (yo = globalThis.litElementVersions) && void 0 !== yo ? yo : globalThis.litElementVersions = []).push("3.3.3");
        const So = Symbol.for("")
          , bo = t => {
            if ((null == t ? void 0 : t.r) === So)
                return null == t ? void 0 : t._$litStatic$
        }
          , xo = new Map
          , ko = t => (e, ...s) => {
            const i = s.length;
            let n, r;
            const o = []
              , a = [];
            let l, d = 0, c = !1;
            for (; d < i; ) {
                for (l = e[d]; d < i && void 0 !== (r = s[d],
                n = bo(r)); )
                    l += n + e[++d],
                    c = !0;
                d !== i && a.push(r),
                o.push(l),
                d++
            }
            if (d === i && o.push(e[i]),
            c) {
                const t = o.join("$$lit$$");
                void 0 === (e = xo.get(t)) && (o.raw = o,
                xo.set(t, e = o)),
                s = a
            }
            return t(e, ...s)
        }
          , Po = (ko(Xr),
        ko(Kr));
        var Co = s(257)
          , Ao = s.n(Co);
        customElements.define("ug-weatherstation", class extends vo {
            static get properties() {
                return {
                    theme: {
                        type: String
                    },
                    strftimeLocales: {
                        type: Object
                    },
                    strftimeLocale: {
                        type: String
                    },
                    strftimeFormat: {
                        type: String
                    },
                    website: {
                        type: String
                    },
                    date: {
                        type: String
                    },
                    translation: {
                        type: Object
                    },
                    webservice: {
                        type: String
                    },
                    updateInterval: {
                        type: Number
                    },
                    timeout: {
                        attribute: !1
                    },
                    data: {
                        attribute: !1
                    }
                }
            }
            static get styles() {
                return yr`

        * {
            font-family: var(--ug-wc-font);
            color: var(--ug-wc-color);
            background-color: var(--ug-wc-backgroundcolor);
            stroke: var(--ug-wc-color);
            font-size: var(--ug-wc-font-size);
            line-height: var(--ug-wc-line-height);
        }


        svg {
            stroke: inherit;
        }
        a {
            color: var(--ug-wc-color);
            text-decoration: none;
        }

        .sr-only {
            border: 0;
            clip: rect(0,0,0,0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;

        }
        }

        .bt_weathericon {
            align-content: center;
        }
        .bt_weathericon svg {
            width: 4rem;
            height: 4rem;
        }

        .weather-info {
            flex-basis: content !important
        }

        .weather-icon {
            display: flex;
            align-items: center;
        }
        .weather-icon svg{
            width: 4rem;
            height: auto;
        }

        .theme-2018 {

        }

        .theme-2018 svg {
            height: 19px;
            width: auto;
            stroke: #000;
            position: relative;
            top: 4px;
        }
        .col-lg-6:nth-child(1) {
            padding-left: 0px;
        }

        :host([theme="2022"]) {
            width: 100%;
        }



        `
            }
            constructor() {
                super(),
                this.willYield = !0,
                this.theme = null,
                this.strftimeLocales = {
                    "de-AT": {
                        identifier: "de-AT",
                        days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                        shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                        months: ["Jänner", "Feber", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                        shortMonths: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                        AM: "AM",
                        PM: "PM",
                        am: "am",
                        pm: "pm",
                        formats: {
                            c: "%a %d %b %Y %X %Z",
                            D: "%d.%m.%Y",
                            F: "%Y-%m-%d",
                            R: "%H:%M",
                            r: "%I:%M:%S %p",
                            T: "%H:%M:%S",
                            v: "%e-%b-%Y",
                            X: "%T",
                            x: "%D"
                        }
                    }
                },
                this.strftimeLocale = "de-AT",
                this.strftimeFormat = "%d.%m.%Y",
                this.website = null,
                this.date = null,
                this.translation = {
                    clear: "Sonnig",
                    "mainly-clear": "Heiter",
                    "slightly-cloudy": "Leicht bewölkt",
                    "partly-cloudy": "Wolkig",
                    cloudy: "Bedeckt",
                    "mainly-cloudy": "Stark bewölkt",
                    rain: "Regen",
                    sleet: "Niederschlag",
                    snow: "Schnee",
                    night: "Nacht",
                    thunderstorm: "Gewitter"
                },
                this.webservice = null,
                this.updateInterval = 900,
                this.timeout = void 0,
                this.data = {
                    date: null,
                    website: null,
                    temp: null,
                    icon: null
                }
            }
            connectedCallback() {
                super.connectedCallback(),
                this.updateData()
            }
            attributeChangedCallback(t, e, s) {
                switch (super.attributeChangedCallback(t, e, s),
                t) {
                case "webservice":
                    this.updateData();
                    break;
                case "updateInterval":
                    this.scheduleUpdateData()
                }
            }
            scheduleUpdateData() {
                clearTimeout(this.timeout),
                this.timeout = setTimeout( () => {
                    this.updateData()
                }
                , 1e3 * this.updateInterval)
            }
            updateData() {
                this.scheduleUpdateData(),
                fetch(this.webservice).then(t => {
                    if (!t.ok)
                        throw new Error("invalid response");
                    t.json().then(t => {
                        this.data = t
                    }
                    )
                }
                ).catch(t => {
                    console.error(t)
                }
                )
            }
            renderDate() {
                let t = Ao().localize(this.strftimeLocales[this.strftimeLocale])
                  , e = new Date(this.date ? this.date : this.data.date);
                return isNaN(e) ? null : t(this.strftimeFormat, e)
            }
            renderLabel() {
                return this.translation[this.data.icon]
            }
            renderIcon() {
                var t = null;
                switch (this.data.icon) {
                case "clear":
                case "mainly-clear":
                    t = Po`
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 54.24 54.24'><g id='Gruppe_1047' data-name='Gruppe 1047' transform='translate(1 1)'><ellipse id='Ellipse_26' data-name='Ellipse 26' cx='15.672' cy='15.672' rx='15.672' ry='15.672' transform='translate(10.448 10.448)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_244' data-name='Linie 244' y1='3.483' transform='translate(26.12 0)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_245' data-name='Linie 245' y1='2.463' x2='2.463' transform='translate(42.126 7.65)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_246' data-name='Linie 246' x2='3.483' transform='translate(48.758 26.121)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_247' data-name='Linie 247' x2='2.463' y2='2.463' transform='translate(42.126 42.128)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_248' data-name='Linie 248' y2='3.483' transform='translate(26.12 48.758)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_249' data-name='Linie 249' x1='2.463' y2='2.463' transform='translate(7.65 42.128)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_250' data-name='Linie 250' x1='3.483' transform='translate(0 26.121)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_251' data-name='Linie 251' x1='2.463' y1='2.463' transform='translate(7.65 7.65)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/></g></svg>
                `;
                    break;
                case "slightly-cloudy":
                default:
                    t = Po`
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 54.26 43.79'><g id='Gruppe_1028' data-name='Gruppe 1028' transform='translate(1 0.999)'><line id='Linie_204' data-name='Linie 204' y1='6.965' transform='translate(17.414 0.001)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_205' data-name='Linie 205' x1='6.965' transform='translate(0 17.414)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_206' data-name='Linie 206' y1='4.925' x2='4.924' transform='translate(24.801 5.102)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_207' data-name='Linie 207' x1='4.925' y1='4.925' transform='translate(5.101 5.102)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15505' data-name='Pfad 15505' d='M293.482 70.185a10.448 10.448 0 1 1 17.762-11' transform='translate(-284.778 -47.004)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15506' data-name='Pfad 15506' d='M299.265 64.483a14.08 14.08 0 0 0 .109 1.741 14.08 14.08 0 0 1-.109-1.741 13.443 13.443 0 0 1 .262-2.605' transform='translate(-274.886 -36.621)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15507' data-name='Pfad 15507' d='M320.137 84.861a13.93 13.93 0 1 0-13.668-16.534 8.694 8.694 0 1 0-3.745 16.534Z' transform='translate(-281.827 -43.07)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/></g></svg>
                `;
                    break;
                case "partly-cloudy":
                case "mainly-cloudy":
                case "cloudy":
                    t = Po`
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.207 29.875'><g id='Gruppe_1015' data-name='Gruppe 1015' transform='translate(1.133 1.01)'><path id='Pfad_15411' data-name='Pfad 15411' d='M8.541 13.417a14.082 14.082 0 0 0 .109 1.741 14.082 14.082 0 0 1-.109-1.741A13.826 13.826 0 0 1 8.8 10.812' transform='translate(3.651 0.519)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15412' data-name='Pfad 15412' d='M29.413 33.8A13.931 13.931 0 1 0 15.744 17.26 8.7 8.7 0 1 0 12 33.8Z' transform='translate(-3.29 -5.931)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/></g></svg>
                `;
                    break;
                case "rain":
                    t = Po`
                <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 42.207 46.417'><g id='Gruppe_1016' data-name='Gruppe 1016' transform='translate(1.133 1.011)'><path id='Pfad_15413' data-name='Pfad 15413' d='M53.247 20.739a.871.871 0 0 1 .871.871' transform='translate(-51.503 21.927)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15414' data-name='Pfad 15414' d='M52.872 21.61a.871.871 0 0 1 .871-.871' transform='translate(-51.998 21.927)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15415' data-name='Pfad 15415' d='M53.743 21.985a.871.871 0 0 1-.871-.871' transform='translate(-51.998 22.422)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15416' data-name='Pfad 15416' d='M54.118 21.114a.871.871 0 0 1-.871.871' transform='translate(-51.503 22.422)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15417' data-name='Pfad 15417' d='M57.747 9.847a14.084 14.084 0 0 0 .109 1.741 14.084 14.084 0 0 1-.109-1.741 13.825 13.825 0 0 1 .262-2.605' transform='translate(-45.555 4.086)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15418' data-name='Pfad 15418' d='M78.619 30.224A13.93 13.93 0 1 0 64.95 13.691a8.694 8.694 0 1 0-3.745 16.534Z' transform='translate(-52.496 -2.363)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_177' data-name='Linie 177' x1='8.091' y2='8.091' transform='translate(2.359 34.828)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15419' data-name='Pfad 15419' d='M57.747 20.739a.871.871 0 0 1 .871.871' transform='translate(-45.555 21.927)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15420' data-name='Pfad 15420' d='M57.372 21.61a.871.871 0 0 1 .871-.871' transform='translate(-46.05 21.927)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15421' data-name='Pfad 15421' d='M58.243 21.985a.871.871 0 0 1-.871-.871' transform='translate(-46.05 22.422)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15422' data-name='Pfad 15422' d='M58.618 21.114a.871.871 0 0 1-.871.871' transform='translate(-45.555 22.422)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_178' data-name='Linie 178' x1='8.091' y2='8.091' transform='translate(12.807 34.828)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15423' data-name='Pfad 15423' d='M62.247 20.739a.871.871 0 0 1 .871.871' transform='translate(-39.607 21.927)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15424' data-name='Pfad 15424' d='M61.872 21.61a.871.871 0 0 1 .871-.871' transform='translate(-40.102 21.927)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15425' data-name='Pfad 15425' d='M62.743 21.985a.871.871 0 0 1-.871-.871' transform='translate(-40.102 22.422)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15426' data-name='Pfad 15426' d='M63.118 21.114a.871.871 0 0 1-.871.871' transform='translate(-39.607 22.422)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_179' data-name='Linie 179' x1='8.091' y2='8.091' transform='translate(23.256 34.828)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/></g></svg>
                `;
                    break;
                case "sleet":
                    t = Po`
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 54.282 54.24'><g id='Gruppe_1050' data-name='Gruppe 1050' transform='translate(1 1)'><line id='Linie_230' data-name='Linie 230' y1='6.965' transform='translate(17.413 0)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_231' data-name='Linie 231' x1='6.965' transform='translate(0 17.414)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_232' data-name='Linie 232' y1='4.925' x2='4.925' transform='translate(24.801 5.102)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_233' data-name='Linie 233' x1='4.925' y1='4.925' transform='translate(5.1 5.102)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15591' data-name='Pfad 15591' d='M53.482 163.96a10.448 10.448 0 1 1 17.762-11' transform='translate(-44.778 -140.78)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15592' data-name='Pfad 15592' d='M57.39 166.525a.871.871 0 0 1 .871.871' transform='translate(-37.365 -116.026)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15593' data-name='Pfad 15593' d='M57.015 167.4a.871.871 0 0 1 .871-.871' transform='translate(-37.861 -116.026)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15594' data-name='Pfad 15594' d='M57.886 167.771a.871.871 0 0 1-.871-.871' transform='translate(-37.861 -115.531)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15595' data-name='Pfad 15595' d='M58.261 166.9a.871.871 0 0 1-.871.871' transform='translate(-37.365 -115.531)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15596' data-name='Pfad 15596' d='M61.89 166.525a.871.871 0 0 1 .871.871' transform='translate(-31.417 -116.026)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15597' data-name='Pfad 15597' d='M61.515 167.4a.871.871 0 0 1 .871-.871' transform='translate(-31.913 -116.026)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15598' data-name='Pfad 15598' d='M62.386 167.771a.871.871 0 0 1-.871-.871' transform='translate(-31.913 -115.531)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15599' data-name='Pfad 15599' d='M62.761 166.9a.871.871 0 0 1-.871.871' transform='translate(-31.417 -115.531)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15600' data-name='Pfad 15600' d='M87.1 176.777a13.93 13.93 0 1 0-20.634-14.671 8.7 8.7 0 1 0-3.745 16.536' transform='translate(-41.828 -136.849)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15601' data-name='Pfad 15601' d='M59.265 158.258A14.082 14.082 0 0 0 59.374 160a14.082 14.082 0 0 1-.109-1.741 13.453 13.453 0 0 1 .262-2.605' transform='translate(-34.887 -130.397)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_234' data-name='Linie 234' x1='8.962' y2='8.962' transform='translate(20.64 41.793)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_235' data-name='Linie 235' x1='8.962' y2='8.962' transform='translate(31.088 41.793)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/></g></svg>
                `;
                    break;
                case "snow":
                    t = Po`
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.207 49.9'><g id='Gruppe_1023' data-name='Gruppe 1023' transform='translate(1.133 1.011)'><path id='Pfad_15455' data-name='Pfad 15455' d='M391.672 17.864a.871.871 0 0 1 .871.871' transform='translate(-382.963 17.836)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15456' data-name='Pfad 15456' d='M391.3 18.735a.871.871 0 0 1 .871-.871' transform='translate(-383.458 17.836)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15457' data-name='Pfad 15457' d='M392.168 19.11a.871.871 0 0 1-.871-.871' transform='translate(-383.458 18.332)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15458' data-name='Pfad 15458' d='M392.543 18.239a.871.871 0 0 1-.871.871' transform='translate(-382.963 18.332)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15459' data-name='Pfad 15459' d='M396.172 17.864a.871.871 0 0 1 .871.871' transform='translate(-377.015 17.836)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15460' data-name='Pfad 15460' d='M395.8 18.735a.871.871 0 0 1 .871-.871' transform='translate(-377.51 17.836)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15461' data-name='Pfad 15461' d='M396.668 19.11a.871.871 0 0 1-.871-.871' transform='translate(-377.51 18.332)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15462' data-name='Pfad 15462' d='M397.043 18.239a.871.871 0 0 1-.871.871' transform='translate(-377.015 18.332)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15463' data-name='Pfad 15463' d='M400.672 17.864a.871.871 0 0 1 .871.871' transform='translate(-371.066 17.836)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15464' data-name='Pfad 15464' d='M400.3 18.735a.871.871 0 0 1 .871-.871' transform='translate(-371.562 17.836)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15465' data-name='Pfad 15465' d='M401.168 19.11a.871.871 0 0 1-.871-.871' transform='translate(-371.562 18.332)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15466' data-name='Pfad 15466' d='M401.543 18.239a.871.871 0 0 1-.871.871' transform='translate(-371.066 18.332)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15467' data-name='Pfad 15467' d='M390.172 22.364a.871.871 0 0 1 .871.871' transform='translate(-384.945 23.784)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15468' data-name='Pfad 15468' d='M389.8 23.235a.871.871 0 0 1 .871-.871' transform='translate(-385.441 23.784)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15469' data-name='Pfad 15469' d='M390.668 23.61a.871.871 0 0 1-.871-.871' transform='translate(-385.441 24.28)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15470' data-name='Pfad 15470' d='M391.043 22.739a.871.871 0 0 1-.871.871' transform='translate(-384.945 24.28)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15471' data-name='Pfad 15471' d='M394.672 22.364a.871.871 0 0 1 .871.871' transform='translate(-378.997 23.784)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15472' data-name='Pfad 15472' d='M394.3 23.235a.871.871 0 0 1 .871-.871' transform='translate(-379.493 23.784)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15473' data-name='Pfad 15473' d='M395.168 23.61a.871.871 0 0 1-.871-.871' transform='translate(-379.493 24.28)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15474' data-name='Pfad 15474' d='M395.543 22.739a.871.871 0 0 1-.871.871' transform='translate(-378.997 24.28)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15475' data-name='Pfad 15475' d='M399.172 22.364a.871.871 0 0 1 .871.871' transform='translate(-373.049 23.784)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15476' data-name='Pfad 15476' d='M398.8 23.235a.871.871 0 0 1 .871-.871' transform='translate(-373.545 23.784)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15477' data-name='Pfad 15477' d='M399.668 23.61a.871.871 0 0 1-.871-.871' transform='translate(-373.545 24.28)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15478' data-name='Pfad 15478' d='M400.043 22.739a.871.871 0 0 1-.871.871' transform='translate(-373.049 24.28)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15479' data-name='Pfad 15479' d='M393.172 9.972a14.086 14.086 0 0 0 .109 1.741 14.086 14.086 0 0 1-.109-1.741 13.825 13.825 0 0 1 .262-2.605' transform='translate(-380.98 3.961)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15480' data-name='Pfad 15480' d='M414.044 30.349a13.93 13.93 0 1 0-13.668-16.534 8.694 8.694 0 1 0-3.745 16.534Z' transform='translate(-387.921 -2.488)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/></g></svg>
                `;
                    break;
                case "night":
                    t = Po`
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 47.28 49.016'><g id='Gruppe_1025' data-name='Gruppe 1025' transform='translate(1.023 1.001)'><path id='Pfad_15519' data-name='Pfad 15519' d='M469.067 80.4a22.642 22.642 0 0 1-21.651-29.252 22.628 22.628 0 1 0 31.112 27.165A22.492 22.492 0 0 1 469.067 80.4Z' transform='translate(-434.258 -47.319)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_208' data-name='Linie 208' x2='10.448' transform='translate(22.62 5.223)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_209' data-name='Linie 209' y2='10.448' transform='translate(27.844 -0.001)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_210' data-name='Linie 210' x2='6.965' transform='translate(38.292 15.671)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><line id='Linie_211' data-name='Linie 211' y2='6.965' transform='translate(41.775 12.189)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/></g></svg>
                `;
                    break;
                case "thunderstorm":
                    t = Po`
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.206 54.245'><g id='Gruppe_1031' data-name='Gruppe 1031' transform='translate(1.134 1.004)'><path id='Pfad_15496' data-name='Pfad 15496' d='M152.678 56.233a13.638 13.638 0 0 0 .1 1.741 14.089 14.089 0 0 1-.107-1.741 13.45 13.45 0 0 1 .262-2.605' transform='translate(-140.479 -42.301)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15497' data-name='Pfad 15497' d='M175.661 76.452a13.93 13.93 0 1 0-15.788-16.376 8.7 8.7 0 1 0-3.738 16.536h3.483' transform='translate(-147.419 -48.749)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Pfad_15498' data-name='Pfad 15498' d='M163.653 60.75 151.208 73.195a.871.871 0 0 0 .615 1.486h4.864V85.129L169.13 72.684a.871.871 0 0 0-.615-1.486h-4.862Z' transform='translate(-142.747 -32.887)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/></g></svg>
                `
                }
                return t
            }
            render2018() {
                return Xr`
            <div class="date theme-2018">
                <span id="jsonp_date">${this.renderDate()}</span><span id="jsonp_separator">, </span><span id="jsonp_temperature"><a href="${this.website ? this.website : this.data.website}">Graz, ${this.data.temp} <span class="unit">°C</span> ${this.renderIcon()}<span class="sr-only">, ${this.renderLabel()}</span></a></span>
            </div>
        `
            }
            render2022() {
                return Xr`
            <div class="footer_weather" part="row">
                <div class="weather-info" part="col col-lg-6 col-md-6 col-sm-8 col-8">
                    <slot name="content"></slot>
                    <span id="jsonp_date">${this.renderDate()}</span><span id="jsonp_separator">,</span><br>
                    <span id="jsonp_temperature">
                        <a href="${this.website ? this.website : this.data.website}">Graz, ${this.data.temp}\t<span class="unit">°C</span></a>
                    </span>
                </div>
                <div class="weather-icon" part="col col-lg-6 col-md-6 col-sm-4 col-4" class="bt_weathericon">
                    ${this.renderIcon()}
                </div>
            </div>
        `
            }
            render() {
                return Xr`
            ${"2018" === this.theme ? this.render2018() : ""}
            ${"2022" === this.theme ? this.render2022() : ""}
        `
            }
        }
        );
        const Eo = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
          , No = (t, e, s=null) => {
            for (; e !== s; ) {
                const s = e.nextSibling;
                t.removeChild(e),
                e = s
            }
        }
          , To = `{{lit-${String(Math.random()).slice(2)}}}`
          , Mo = `\x3c!--${To}--\x3e`
          , Uo = new RegExp(`${To}|${Mo}`)
          , $o = "$lit$";
        class Vo {
            constructor(t, e) {
                this.parts = [],
                this.element = e;
                const s = []
                  , i = []
                  , n = document.createTreeWalker(e.content, 133, null, !1);
                let r = 0
                  , o = -1
                  , a = 0;
                const {strings: l, values: {length: d}} = t;
                for (; a < d; ) {
                    const t = n.nextNode();
                    if (null !== t) {
                        if (o++,
                        1 === t.nodeType) {
                            if (t.hasAttributes()) {
                                const e = t.attributes
                                  , {length: s} = e;
                                let i = 0;
                                for (let t = 0; t < s; t++)
                                    Lo(e[t].name, $o) && i++;
                                for (; i-- > 0; ) {
                                    const e = l[a]
                                      , s = qo.exec(e)[2]
                                      , i = s.toLowerCase() + $o
                                      , n = t.getAttribute(i);
                                    t.removeAttribute(i);
                                    const r = n.split(Uo);
                                    this.parts.push({
                                        type: "attribute",
                                        index: o,
                                        name: s,
                                        strings: r
                                    }),
                                    a += r.length - 1
                                }
                            }
                            "TEMPLATE" === t.tagName && (i.push(t),
                            n.currentNode = t.content)
                        } else if (3 === t.nodeType) {
                            const e = t.data;
                            if (e.indexOf(To) >= 0) {
                                const i = t.parentNode
                                  , n = e.split(Uo)
                                  , r = n.length - 1;
                                for (let e = 0; e < r; e++) {
                                    let s, r = n[e];
                                    if ("" === r)
                                        s = Ro();
                                    else {
                                        const t = qo.exec(r);
                                        null !== t && Lo(t[2], $o) && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -5) + t[3]),
                                        s = document.createTextNode(r)
                                    }
                                    i.insertBefore(s, t),
                                    this.parts.push({
                                        type: "node",
                                        index: ++o
                                    })
                                }
                                "" === n[r] ? (i.insertBefore(Ro(), t),
                                s.push(t)) : t.data = n[r],
                                a += r
                            }
                        } else if (8 === t.nodeType)
                            if (t.data === To) {
                                const e = t.parentNode;
                                null !== t.previousSibling && o !== r || (o++,
                                e.insertBefore(Ro(), t)),
                                r = o,
                                this.parts.push({
                                    type: "node",
                                    index: o
                                }),
                                null === t.nextSibling ? t.data = "" : (s.push(t),
                                o--),
                                a++
                            } else {
                                let e = -1;
                                for (; -1 !== (e = t.data.indexOf(To, e + 1)); )
                                    this.parts.push({
                                        type: "node",
                                        index: -1
                                    }),
                                    a++
                            }
                    } else
                        n.currentNode = i.pop()
                }
                for (const t of s)
                    t.parentNode.removeChild(t)
            }
        }
        const Lo = (t, e) => {
            const s = t.length - e.length;
            return s >= 0 && t.slice(s) === e
        }
          , Oo = t => -1 !== t.index
          , Ro = () => document.createComment("")
          , qo = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        function jo(t, e) {
            const {element: {content: s}, parts: i} = t
              , n = document.createTreeWalker(s, 133, null, !1);
            let r = Io(i)
              , o = i[r]
              , a = -1
              , l = 0;
            const d = [];
            let c = null;
            for (; n.nextNode(); ) {
                a++;
                const t = n.currentNode;
                for (t.previousSibling === c && (c = null),
                e.has(t) && (d.push(t),
                null === c && (c = t)),
                null !== c && l++; void 0 !== o && o.index === a; )
                    o.index = null !== c ? -1 : o.index - l,
                    r = Io(i, r),
                    o = i[r]
            }
            d.forEach(t => t.parentNode.removeChild(t))
        }
        const zo = t => {
            let e = 11 === t.nodeType ? 0 : 1;
            const s = document.createTreeWalker(t, 133, null, !1);
            for (; s.nextNode(); )
                e++;
            return e
        }
          , Io = (t, e=-1) => {
            for (let s = e + 1; s < t.length; s++) {
                const e = t[s];
                if (Oo(e))
                    return s
            }
            return -1
        }
          , Ho = new WeakMap
          , Fo = t => "function" == typeof t && Ho.has(t)
          , Do = {}
          , Bo = {};
        class Wo {
            constructor(t, e, s) {
                this.__parts = [],
                this.template = t,
                this.processor = e,
                this.options = s
            }
            update(t) {
                let e = 0;
                for (const s of this.__parts)
                    void 0 !== s && s.setValue(t[e]),
                    e++;
                for (const t of this.__parts)
                    void 0 !== t && t.commit()
            }
            _clone() {
                const t = Eo ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                  , e = []
                  , s = this.template.parts
                  , i = document.createTreeWalker(t, 133, null, !1);
                let n, r = 0, o = 0, a = i.nextNode();
                for (; r < s.length; )
                    if (n = s[r],
                    Oo(n)) {
                        for (; o < n.index; )
                            o++,
                            "TEMPLATE" === a.nodeName && (e.push(a),
                            i.currentNode = a.content),
                            null === (a = i.nextNode()) && (i.currentNode = e.pop(),
                            a = i.nextNode());
                        if ("node" === n.type) {
                            const t = this.processor.handleTextExpression(this.options);
                            t.insertAfterNode(a.previousSibling),
                            this.__parts.push(t)
                        } else
                            this.__parts.push(...this.processor.handleAttributeExpressions(a, n.name, n.strings, this.options));
                        r++
                    } else
                        this.__parts.push(void 0),
                        r++;
                return Eo && (document.adoptNode(t),
                customElements.upgrade(t)),
                t
            }
        }
        const Jo = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: t => t
        })
          , Yo = ` ${To} `;
        class Zo {
            constructor(t, e, s, i) {
                this.strings = t,
                this.values = e,
                this.type = s,
                this.processor = i
            }
            getHTML() {
                const t = this.strings.length - 1;
                let e = ""
                  , s = !1;
                for (let i = 0; i < t; i++) {
                    const t = this.strings[i]
                      , n = t.lastIndexOf("\x3c!--");
                    s = (n > -1 || s) && -1 === t.indexOf("--\x3e", n + 1);
                    const r = qo.exec(t);
                    e += null === r ? t + (s ? Yo : Mo) : t.substr(0, r.index) + r[1] + r[2] + $o + r[3] + To
                }
                return e += this.strings[t],
                e
            }
            getTemplateElement() {
                const t = document.createElement("template");
                let e = this.getHTML();
                return void 0 !== Jo && (e = Jo.createHTML(e)),
                t.innerHTML = e,
                t
            }
        }
        const Go = t => null === t || !("object" == typeof t || "function" == typeof t)
          , Xo = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        class Ko {
            constructor(t, e, s) {
                this.dirty = !0,
                this.element = t,
                this.name = e,
                this.strings = s,
                this.parts = [];
                for (let t = 0; t < s.length - 1; t++)
                    this.parts[t] = this._createPart()
            }
            _createPart() {
                return new Qo(this)
            }
            _getValue() {
                const t = this.strings
                  , e = t.length - 1
                  , s = this.parts;
                if (1 === e && "" === t[0] && "" === t[1]) {
                    const t = s[0].value;
                    if ("symbol" == typeof t)
                        return String(t);
                    if ("string" == typeof t || !Xo(t))
                        return t
                }
                let i = "";
                for (let n = 0; n < e; n++) {
                    i += t[n];
                    const e = s[n];
                    if (void 0 !== e) {
                        const t = e.value;
                        if (Go(t) || !Xo(t))
                            i += "string" == typeof t ? t : String(t);
                        else
                            for (const e of t)
                                i += "string" == typeof e ? e : String(e)
                    }
                }
                return i += t[e],
                i
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class Qo {
            constructor(t) {
                this.value = void 0,
                this.committer = t
            }
            setValue(t) {
                t === Do || Go(t) && t === this.value || (this.value = t,
                Fo(t) || (this.committer.dirty = !0))
            }
            commit() {
                for (; Fo(this.value); ) {
                    const t = this.value;
                    this.value = Do,
                    t(this)
                }
                this.value !== Do && this.committer.commit()
            }
        }
        class ta {
            constructor(t) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.options = t
            }
            appendInto(t) {
                this.startNode = t.appendChild(Ro()),
                this.endNode = t.appendChild(Ro())
            }
            insertAfterNode(t) {
                this.startNode = t,
                this.endNode = t.nextSibling
            }
            appendIntoPart(t) {
                t.__insert(this.startNode = Ro()),
                t.__insert(this.endNode = Ro())
            }
            insertAfterPart(t) {
                t.__insert(this.startNode = Ro()),
                this.endNode = t.endNode,
                t.endNode = this.startNode
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                if (null === this.startNode.parentNode)
                    return;
                for (; Fo(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Do,
                    t(this)
                }
                const t = this.__pendingValue;
                t !== Do && (Go(t) ? t !== this.value && this.__commitText(t) : t instanceof Zo ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : Xo(t) ? this.__commitIterable(t) : t === Bo ? (this.value = Bo,
                this.clear()) : this.__commitText(t))
            }
            __insert(t) {
                this.endNode.parentNode.insertBefore(t, this.endNode)
            }
            __commitNode(t) {
                this.value !== t && (this.clear(),
                this.__insert(t),
                this.value = t)
            }
            __commitText(t) {
                const e = this.startNode.nextSibling
                  , s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = s : this.__commitNode(document.createTextNode(s)),
                this.value = t
            }
            __commitTemplateResult(t) {
                const e = this.options.templateFactory(t);
                if (this.value instanceof Wo && this.value.template === e)
                    this.value.update(t.values);
                else {
                    const s = new Wo(e,t.processor,this.options)
                      , i = s._clone();
                    s.update(t.values),
                    this.__commitNode(i),
                    this.value = s
                }
            }
            __commitIterable(t) {
                Array.isArray(this.value) || (this.value = [],
                this.clear());
                const e = this.value;
                let s, i = 0;
                for (const n of t)
                    s = e[i],
                    void 0 === s && (s = new ta(this.options),
                    e.push(s),
                    0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
                    s.setValue(n),
                    s.commit(),
                    i++;
                i < e.length && (e.length = i,
                this.clear(s && s.endNode))
            }
            clear(t=this.startNode) {
                No(this.startNode.parentNode, t.nextSibling, this.endNode)
            }
        }
        class ea {
            constructor(t, e, s) {
                if (this.value = void 0,
                this.__pendingValue = void 0,
                2 !== s.length || "" !== s[0] || "" !== s[1])
                    throw new Error("Boolean attributes can only contain a single expression");
                this.element = t,
                this.name = e,
                this.strings = s
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; Fo(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Do,
                    t(this)
                }
                if (this.__pendingValue === Do)
                    return;
                const t = !!this.__pendingValue;
                this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = t),
                this.__pendingValue = Do
            }
        }
        class sa extends Ko {
            constructor(t, e, s) {
                super(t, e, s),
                this.single = 2 === s.length && "" === s[0] && "" === s[1]
            }
            _createPart() {
                return new ia(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element[this.name] = this._getValue())
            }
        }
        class ia extends Qo {
        }
        let na = !1;
        ( () => {
            try {
                const t = {
                    get capture() {
                        return na = !0,
                        !1
                    }
                };
                window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t)
            } catch (t) {}
        }
        )();
        class ra {
            constructor(t, e, s) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.element = t,
                this.eventName = e,
                this.eventContext = s,
                this.__boundHandleEvent = t => this.handleEvent(t)
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; Fo(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Do,
                    t(this)
                }
                if (this.__pendingValue === Do)
                    return;
                const t = this.__pendingValue
                  , e = this.value
                  , s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
                  , i = null != t && (null == e || s);
                s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                i && (this.__options = oa(t),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                this.value = t,
                this.__pendingValue = Do
            }
            handleEvent(t) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
            }
        }
        const oa = t => t && (na ? {
            capture: t.capture,
            passive: t.passive,
            once: t.once
        } : t.capture);
        function aa(t) {
            let e = la.get(t.type);
            void 0 === e && (e = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            la.set(t.type, e));
            let s = e.stringsArray.get(t.strings);
            if (void 0 !== s)
                return s;
            const i = t.strings.join(To);
            return s = e.keyString.get(i),
            void 0 === s && (s = new Vo(t,t.getTemplateElement()),
            e.keyString.set(i, s)),
            e.stringsArray.set(t.strings, s),
            s
        }
        const la = new Map
          , da = new WeakMap
          , ca = new class {
            handleAttributeExpressions(t, e, s, i) {
                const n = e[0];
                return "." === n ? new sa(t,e.slice(1),s).parts : "@" === n ? [new ra(t,e.slice(1),i.eventContext)] : "?" === n ? [new ea(t,e.slice(1),s)] : new Ko(t,e,s).parts
            }
            handleTextExpression(t) {
                return new ta(t)
            }
        }
        ;
        "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        const ha = (t, ...e) => new Zo(t,e,"html",ca)
          , pa = (t, e) => `${t}--${e}`;
        let ua = !0;
        void 0 === window.ShadyCSS ? ua = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
        ua = !1);
        const ma = t => e => {
            const s = pa(e.type, t);
            let i = la.get(s);
            void 0 === i && (i = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            la.set(s, i));
            let n = i.stringsArray.get(e.strings);
            if (void 0 !== n)
                return n;
            const r = e.strings.join(To);
            if (n = i.keyString.get(r),
            void 0 === n) {
                const s = e.getTemplateElement();
                ua && window.ShadyCSS.prepareTemplateDom(s, t),
                n = new Vo(e,s),
                i.keyString.set(r, n)
            }
            return i.stringsArray.set(e.strings, n),
            n
        }
          , fa = ["html", "svg"]
          , ga = new Set;
        window.JSCompiler_renameProperty = (t, e) => t;
        const _a = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t)
                }
                return t
            }
        }
          , ya = (t, e) => e !== t && (e == e || t == t)
          , va = {
            attribute: !0,
            type: String,
            converter: _a,
            reflect: !1,
            hasChanged: ya
        }
          , wa = "finalized";
        class Sa extends HTMLElement {
            constructor() {
                super(),
                this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this._classProperties.forEach( (e, s) => {
                    const i = this._attributeNameForProperty(s, e);
                    void 0 !== i && (this._attributeToPropertyMap.set(i, s),
                    t.push(i))
                }
                ),
                t
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const t = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== t && t.forEach( (t, e) => this._classProperties.set(e, t))
                }
            }
            static createProperty(t, e=va) {
                if (this._ensureClassProperties(),
                this._classProperties.set(t, e),
                e.noAccessor || this.prototype.hasOwnProperty(t))
                    return;
                const s = "symbol" == typeof t ? Symbol() : `__${t}`
                  , i = this.getPropertyDescriptor(t, s, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i)
            }
            static getPropertyDescriptor(t, e, s) {
                return {
                    get() {
                        return this[e]
                    },
                    set(i) {
                        const n = this[t];
                        this[e] = i,
                        this.requestUpdateInternal(t, n, s)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this._classProperties && this._classProperties.get(t) || va
            }
            static finalize() {
                const t = Object.getPrototypeOf(this);
                if (t.hasOwnProperty(wa) || t.finalize(),
                this[wa] = !0,
                this._ensureClassProperties(),
                this._attributeToPropertyMap = new Map,
                this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
                    for (const s of e)
                        this.createProperty(s, t[s])
                }
            }
            static _attributeNameForProperty(t, e) {
                const s = e.attribute;
                return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
            }
            static _valueHasChanged(t, e, s=ya) {
                return s(t, e)
            }
            static _propertyValueFromAttribute(t, e) {
                const s = e.type
                  , i = e.converter || _a
                  , n = "function" == typeof i ? i : i.fromAttribute;
                return n ? n(t, s) : t
            }
            static _propertyValueToAttribute(t, e) {
                if (void 0 === e.reflect)
                    return;
                const s = e.type
                  , i = e.converter;
                return (i && i.toAttribute || _a.toAttribute)(t, s)
            }
            initialize() {
                this._updateState = 0,
                this._updatePromise = new Promise(t => this._enableUpdatingResolver = t),
                this._changedProperties = new Map,
                this._saveInstanceProperties(),
                this.requestUpdateInternal()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach( (t, e) => {
                    if (this.hasOwnProperty(e)) {
                        const t = this[e];
                        delete this[e],
                        this._instanceProperties || (this._instanceProperties = new Map),
                        this._instanceProperties.set(e, t)
                    }
                }
                )
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach( (t, e) => this[e] = t),
                this._instanceProperties = void 0
            }
            connectedCallback() {
                this.enableUpdating()
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
                this._enableUpdatingResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(t, e, s) {
                e !== s && this._attributeToProperty(t, s)
            }
            _propertyToAttribute(t, e, s=va) {
                const i = this.constructor
                  , n = i._attributeNameForProperty(t, s);
                if (void 0 !== n) {
                    const t = i._propertyValueToAttribute(e, s);
                    if (void 0 === t)
                        return;
                    this._updateState = 8 | this._updateState,
                    null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
                    this._updateState = -9 & this._updateState
                }
            }
            _attributeToProperty(t, e) {
                if (8 & this._updateState)
                    return;
                const s = this.constructor
                  , i = s._attributeToPropertyMap.get(t);
                if (void 0 !== i) {
                    const t = s.getPropertyOptions(i);
                    this._updateState = 16 | this._updateState,
                    this[i] = s._propertyValueFromAttribute(e, t),
                    this._updateState = -17 & this._updateState
                }
            }
            requestUpdateInternal(t, e, s) {
                let i = !0;
                if (void 0 !== t) {
                    const n = this.constructor;
                    s = s || n.getPropertyOptions(t),
                    n._valueHasChanged(this[t], e, s.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
                    !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
                    this._reflectingProperties.set(t, s))) : i = !1
                }
                !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
            }
            requestUpdate(t, e) {
                return this.requestUpdateInternal(t, e),
                this.updateComplete
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise
                } catch (t) {}
                const t = this.performUpdate();
                return null != t && await t,
                !this._hasRequestedUpdate
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState
            }
            get hasUpdated() {
                return 1 & this._updateState
            }
            performUpdate() {
                if (!this._hasRequestedUpdate)
                    return;
                this._instanceProperties && this._applyInstanceProperties();
                let t = !1;
                const e = this._changedProperties;
                try {
                    t = this.shouldUpdate(e),
                    t ? this.update(e) : this._markUpdated()
                } catch (e) {
                    throw t = !1,
                    this._markUpdated(),
                    e
                }
                t && (1 & this._updateState || (this._updateState = 1 | this._updateState,
                this.firstUpdated(e)),
                this.updated(e))
            }
            _markUpdated() {
                this._changedProperties = new Map,
                this._updateState = -5 & this._updateState
            }
            get updateComplete() {
                return this._getUpdateComplete()
            }
            _getUpdateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._updatePromise
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach( (t, e) => this._propertyToAttribute(e, this[e], t)),
                this._reflectingProperties = void 0),
                this._markUpdated()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        Sa[wa] = !0;
        const ba = Element.prototype;
        ba.msMatchesSelector || ba.webkitMatchesSelector;
        const xa = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , ka = Symbol();
        class Pa {
            constructor(t, e) {
                if (e !== ka)
                    throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (xa ? (this._styleSheet = new CSSStyleSheet,
                this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
                this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        const Ca = (t, ...e) => {
            const s = e.reduce( (e, s, i) => e + (t => {
                if (t instanceof Pa)
                    return t.cssText;
                if ("number" == typeof t)
                    return t;
                throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
            }
            )(s) + t[i + 1], t[0]);
            return new Pa(s,ka)
        }
        ;
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        const Aa = {};
        class Ea extends Sa {
            static getStyles() {
                return this.styles
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
                    return;
                const t = this.getStyles();
                if (Array.isArray(t)) {
                    const e = (t, s) => t.reduceRight( (t, s) => Array.isArray(s) ? e(s, t) : (t.add(s),
                    t), s)
                      , s = e(t, new Set)
                      , i = [];
                    s.forEach(t => i.unshift(t)),
                    this._styles = i
                } else
                    this._styles = void 0 === t ? [] : [t];
                this._styles = this._styles.map(t => {
                    if (t instanceof CSSStyleSheet && !xa) {
                        const e = Array.prototype.slice.call(t.cssRules).reduce( (t, e) => t + e.cssText, "");
                        return new Pa(String(e),ka)
                    }
                    return t
                }
                )
            }
            initialize() {
                super.initialize(),
                this.constructor._getUniqueStyles(),
                this.renderRoot = this.createRenderRoot(),
                window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions)
            }
            adoptStyles() {
                const t = this.constructor._styles;
                0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? xa ? this.renderRoot.adoptedStyleSheets = t.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
            }
            update(t) {
                const e = this.render();
                super.update(t),
                e !== Aa && this.constructor.render(e, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }),
                this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
                this.constructor._styles.forEach(t => {
                    const e = document.createElement("style");
                    e.textContent = t.cssText,
                    this.renderRoot.appendChild(e)
                }
                ))
            }
            render() {
                return Aa
            }
        }
        Ea.finalized = !0,
        Ea.render = (t, e, s) => {
            if (!s || "object" != typeof s || !s.scopeName)
                throw new Error("The `scopeName` option is required.");
            const i = s.scopeName
              , n = da.has(e)
              , r = ua && 11 === e.nodeType && !!e.host
              , o = r && !ga.has(i)
              , a = o ? document.createDocumentFragment() : e;
            if (( (t, e, s) => {
                let i = da.get(e);
                void 0 === i && (No(e, e.firstChild),
                da.set(e, i = new ta(Object.assign({
                    templateFactory: aa
                }, s))),
                i.appendInto(e)),
                i.setValue(t),
                i.commit()
            }
            )(t, a, Object.assign({
                templateFactory: ma(i)
            }, s)),
            o) {
                const t = da.get(a);
                da.delete(a);
                ( (t, e, s) => {
                    ga.add(t);
                    const i = s ? s.element : document.createElement("template")
                      , n = e.querySelectorAll("style")
                      , {length: r} = n;
                    if (0 === r)
                        return void window.ShadyCSS.prepareTemplateStyles(i, t);
                    const o = document.createElement("style");
                    for (let t = 0; t < r; t++) {
                        const e = n[t];
                        e.parentNode.removeChild(e),
                        o.textContent += e.textContent
                    }
                    (t => {
                        fa.forEach(e => {
                            const s = la.get(pa(e, t));
                            void 0 !== s && s.keyString.forEach(t => {
                                const {element: {content: e}} = t
                                  , s = new Set;
                                Array.from(e.querySelectorAll("style")).forEach(t => {
                                    s.add(t)
                                }
                                ),
                                jo(t, s)
                            }
                            )
                        }
                        )
                    }
                    )(t);
                    const a = i.content;
                    s ? function(t, e, s=null) {
                        const {element: {content: i}, parts: n} = t;
                        if (null == s)
                            return void i.appendChild(e);
                        const r = document.createTreeWalker(i, 133, null, !1);
                        let o = Io(n)
                          , a = 0
                          , l = -1;
                        for (; r.nextNode(); )
                            for (l++,
                            r.currentNode === s && (a = zo(e),
                            s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l; ) {
                                if (a > 0) {
                                    for (; -1 !== o; )
                                        n[o].index += a,
                                        o = Io(n, o);
                                    return
                                }
                                o = Io(n, o)
                            }
                    }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild),
                    window.ShadyCSS.prepareTemplateStyles(i, t);
                    const l = a.querySelector("style");
                    if (window.ShadyCSS.nativeShadow && null !== l)
                        e.insertBefore(l.cloneNode(!0), e.firstChild);
                    else if (s) {
                        a.insertBefore(o, a.firstChild);
                        const t = new Set;
                        t.add(o),
                        jo(s, t)
                    }
                }
                )(i, a, t.value instanceof Wo ? t.value.template : void 0),
                No(e, e.firstChild),
                e.appendChild(a),
                da.set(e, t)
            }
            !n && r && window.ShadyCSS.styleElement(e.host)
        }
        ,
        Ea.shadowRootOptions = {
            mode: "open"
        },
        customElements.define("ug-filter", class extends Ea {
            static get properties() {
                return {
                    source: {
                        type: String
                    },
                    page_size: {
                        type: String
                    },
                    filter_names: {
                        type: Array
                    },
                    items_at: {
                        type: String
                    },
                    categories_at: {
                        type: String
                    },
                    hidden_labels: {
                        type: String
                    },
                    item_template: {
                        type: String
                    },
                    sort: {
                        type: Array
                    },
                    theme: {
                        type: String
                    },
                    prevtext: {
                        type: String
                    },
                    nexttext: {
                        type: String
                    },
                    no_result_message: {
                        type: String
                    }
                }
            }
            static get styles() {
                return Ca`
            :host(.pagination) {
                display: block;
            }
            .unigraz-filter{
                position: relative;
            }

            .unigraz-filter #spinner {
                margin: auto;
                display: inline-block;
                width: 40px;
                height:40px;

            }

            .unigraz-filter #spinner.hidden {
                display: none;
            }

            .pagination li {
                position: relative;
            }

            .pagination .start+.middle,
            .pagination .middle+.end,
            .pagination .start+.end,
            .pagination .middle+.current,
            .pagination .current+.middle,
            .pagination .current+.end,
            .pagination .start+.current:not(.start) {
                margin-left: 30px;
                position:relative;
            }
            .pagination .start+.middle:before,
            .pagination .middle+.end:before,
            .pagination .start+.end:before,
            .pagination .middle+.current:before,
            .pagination .current+.middle:before,
            .pagination .current+.end:before,
            .pagination .start+.current:not(.start):before {
                content:'...';
                position: absolute;
                left: -22px;
                bottom: 0;
            }



            .theme-2022 #sorting {
                font-size: 24px;
                text-decoration: none;
                cursor: pointer;
             }

             .theme-2022 #sorting ~ ul {
                list-style: none;
                display:none;
             }

             .theme-2022 #sorting ~ ul > li {

             }

             .theme-2022 #sorting ~ ul a {
                text-decoration: none;
                color: #000;
             }

             .theme-2022 #sorting ~ ul a.active {
                font-weight: bold;
             }

             .theme-2022 #sorting.open ~ ul {
                display: block;
                position: absolute;
                background-color: #ffffff;
                padding: 10px;
                margin: 0;
                width: max-content;
                right: 0px;

             }

             .theme-2022 #sorting.open .dropdown-arrow svg {
                transform: rotateX(180deg);

             }

             .theme-2022 #result-header{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
             }

            .theme-2022 .sort-wrapper {
                position: relative;
                flex-grow: 2;
                text-align: end;
            }

            .theme-2022 .page-link, .theme-2022 .page-link {
                position: relative;
                display: block;
                padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);
                font-size: var(--bs-pagination-font-size);
                font-weight: var(--bs-pagination-fontweigt);
                color: var(--bs-pagination-active-color) ;
                opacity: 0.5;
                stroke: var(--bs-pagination-active-color) !important;
                text-decoration: none;
                background-color: var(--bs-pagination-bg) ;
                border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            }
            .theme-2022 .active>.page-link, .theme-2022 .page-link.active {
                z-index: 3;
                color: var(--bs-pagination-active-color) ;
                background-color: var(--bs-pagination-active-bg) ;
                border-color: var(--bs-pagination-active-border-color);
                font-weight: var(--bs-pagination-active-fontweigt);
                opacity: 1;
            }
            .theme-2022 .disabled>.page-link, .theme-2022 .page-link.disabled {
                color: var(--bs-pagination-disabled-color);
                pointer-events: none;
                background-color: var(--bs-pagination-disabled-bg);
                border-color: var(--bs-pagination-disabled-border-color);
                font-weight: var(--bs-pagination-disabled-fontweight);
            }
            .theme-2022 .page-item:first-child .page-link {
                border-top-left-radius: var(--bs-pagination-border-radius);
                border-bottom-left-radius: var(--bs-pagination-border-radius);
            }

            .theme-2022 .page-item:not(:first-child) .page-link {
                margin-left: calc(var(--bs-border-width)*-1);
            }

            .theme-2022 .page-item:last-child .page-link {
                border-top-right-radius: var(--bs-pagination-border-radius);
                border-bottom-right-radius: var(--bs-pagination-border-radius);
            }

            .theme-2022 .disabled>.page-link, .theme-2022 .page-link.disabled {
                color: var(--bs-pagination-disabled-color);
                pointer-events: none;
                background-color: var(--bs-pagination-disabled-bg);
                border-color: var(--bs-pagination-disabled-border-color);
                font-weight: var(--bs-pagination-disabled-fontweight);
            }

            .theme-2022 .page-link:hover {
                z-index: 2;
                color: var(--bs-pagination-hover-color);
                background-color: var(--bs-pagination-hover-bg);
                border-color: var(--bs-pagination-hover-border-color);
                font-weight: var(--bs-pagination-hover-fontweight);
                opacity: 1;
            }

            .theme-2022 .page-link:focus {
                z-index: 3;
                color: var(--bs-pagination-focus-color);
                background-color: var(--bs-pagination-focus-bg);
                outline: 0;
                box-shadow: var(--bs-pagination-focus-box-shadow);
                font-weight: var(--bs-pagination-focus-fontweight);
                opacity: 1;
            }

             .theme-2022 .pagination {
                display: flex;
                padding-left: 0;
                list-style: none;
                border-radius: 0;
                flex-wrap: wrap;
             }

            .theme-2018 #sorting {
                display: none;
            }
            .theme-2018 #sorting ~ ul {
                border-bottom: 7px solid #d9d9d9;
                display: flex;
                list-style: none;
                padding: 0;
                fex-direction: row;
                height: fit-content;
            }

            .theme-2018 #sorting ~ ul .sort-item {
                display:contents;
            }

            .theme-2018 #sorting ~ ul .sort-link {
                margin-bottom: -7px;
                background-color: transparent;
                border: 7px solid transparent;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                text-decoration: none;
                padding: 15px;
                color: #000;
            }

            .theme-2018 #sorting ~ ul .sort-link.active {
                color: #495057;
                background-color: #fff;
                border-color: #dee2e6 #dee2e6 #fff;
            }

            .theme-2018 .pagination {
                display: flex;
                padding-left: 0;
                list-style: none;
                border-radius: 0;
                flex-wrap: wrap;
            }

            .theme-2018 .pagination>li>a {
                background-image: linear-gradient(0deg,#fddc05,#fddc05);
                background-repeat: no-repeat;
                background-size: 0 100%;
                background-position: right 0 bottom 0;
                transition: background-size .4s ease,color .4s ease,fill .4s ease;
                position: relative;
                display: block;
                padding: .5rem .75rem;
                margin-left: -1px;
                line-height: 1.25;
                color: #000;
                background-color: transparent;
                border: 1px solid #ccc;
            }

            .theme-2018 .pagination>li>a:focus, .theme-2018 .pagination>li>a:hover, .theme-2018 .pagination>li.active>a {
                background-size: 100% 100%;
                background-position: left 0 bottom 0;
            }

        `
            }
            _styledSlots() {
                return "2022" == this.theme ? "\n            ug-filter.pagination {\n              display: block;\n            }\n            ug-filter .sr-only {\n                display: none;\n            }\n\n            ug-filter input[type=\"text\"] {\n                width: 100% !important;\n            }\n\n            ug-filter a {\n                text-decoration: none;\n            }\n            ug-filter a:hover {\n                text-decoration: none;\n                color: inherit;\n            }\n            ug-filter button[type=\"submit\"] {\n                right: 0;\n                position: absolute !important;\n                z-index: 100 !important;\n            }\n            ug-filter .filter-dropdown .dropdown-toggle {\n                font-size: 24px;\n            }\n\n            ug-filter .filter-dropdown .dropdown .dropdown-toggle:after {\n                border: none;\n                content:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20.707' height='11.061' viewBox='0 0 20.707 11.061'%3E%3Cpath id='Pfad_15763' data-name='Pfad 15763' d='M-11995.066-18976.328l10,10,10-10' transform='translate(11995.42 18976.682)' fill='none' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E\");\n                position: relative;\n                top: 4px;\n            }\n\n            ug-filter .filter-dropdown .dropdown .active.dropdown-toggle:after {\n                transform: rotate(180deg);\n\n            }\n            ug-filter .filter-dropdown .navbar-nav {\n                display: flex;\n                flex-direction: row;\n                flex-wrap: wrap;\n            }\n\n            ug-filter .dropdown:hover .dropdown-menu {\n                display: none;\n            }\n\n            ug-filter .dropdown:hover .dropdown-menu.show {\n                display: block;\n            }\n\n            ug-filter .dropdown-menu.show{\n                display: block;\n                position: absolute !important;\n                width: max-content;\n            }\n\n            ug-filter .media {\n                border-top: 1px solid #000;\n                padding: 30px 0;\n            }\n\n            ug-filter .media:last-child {\n                border-bottom: 1px solid #000;\n            }\n\n            ug-filter h3, ug-filter h4 {\n                font-weight: bold;\n                font-size: 24px !important;\n            }\n            ug-filter .label {\n                background-color: #E8E8E8;\n                margin-right: 5px;\n                padding: 5px;\n            }\n\n            ug-filter .ug-icon svg {\n                width: 24px;\n                display: inline-block;\n            }\n\n            @media (max-width: 768px){\n                ug-filter .filter-dropdown .navbar-nav {\n                    flex-direction: column;\n                }\n            }\n            " : "\n\n                ug-filter .label {\n                    background-color: #E8E8E8;\n                    margin-right: 5px;\n                    padding: 5px;\n                }\n            "
            }
            constructor() {
                super(),
                this.data = {
                    items: [],
                    filters: {},
                    filtergroups: {}
                },
                this.filteredList = [],
                this.page = 1
            }
            connectedCallback() {
                super.connectedCallback();
                const t = this.querySelector("form");
                t.addEventListener("submit", t => {
                    t.preventDefault(),
                    this._startSearch()
                }
                ),
                t.querySelectorAll(".dropdown-toggle").forEach(t => {
                    t.addEventListener("click", t => {
                        t.preventDefault();
                        let e = t.target.classList.contains("active");
                        document.querySelectorAll(".dropdown-toggle").forEach(t => {
                            t.classList.remove("active")
                        }
                        ),
                        document.querySelectorAll(".dropdown-menu").forEach(t => {
                            t.classList.remove("show")
                        }
                        ),
                        e || (t.target.classList.add("active"),
                        t.target.parentElement.querySelector(".dropdown-menu").classList.add("show"))
                    }
                    )
                }
                ),
                t.querySelectorAll('input[type="checkbox"]').forEach(t => {
                    t.addEventListener("change", t => {
                        t.preventDefault(),
                        this._startSearch()
                    }
                    )
                }
                ),
                t.querySelectorAll('input[type="text"]').forEach(t => {
                    t.addEventListener("keyup", t => {
                        this._startSearch()
                    }
                    )
                }
                ),
                t.querySelectorAll(".reset a").forEach(t => {
                    t.addEventListener("click", t => {
                        t.preventDefault(),
                        this._resetFilter()
                    }
                    )
                }
                );
                const e = this.querySelector('div[slot="result"] > .wrapper');
                var s;
                e && (e.innerHTML = ""),
                (s = this.source ? this.source : t.getAttribute("action")) && fetch(s, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }).then(t => t.json()).then(t => {
                    this._addData(t)
                }
                )
            }
            _collectFilterGroups() {
                for (const t in this.filter_names)
                    "fulltext" != t && this.querySelectorAll('input[name="' + this.filter_names[t] + '"]').forEach(e => {
                        e.hasAttribute("data-parent") && (this.data.filtergroups[t] || (this.data.filtergroups[t] = {}),
                        this.data.filtergroups[t][e.getAttribute("value")] = e.getAttribute("data-parent"))
                    }
                    )
            }
            _addData(t) {
                if (this.items_at ? this.data.items = t[this.items_at] : this.data.items = t,
                this.categories_at && (this.data.categories = t[this.categories_at]),
                this.filteredList = this.data.items,
                this.sort) {
                    let t = Object.keys(this.sort.options)[0]
                      , e = this.sort.options[t].order;
                    this._doSort(t, "asc" == e ? 1 : -1)
                }
                let e = !1
                  , s = !1
                  , i = this._getCookie("Filter")
                  , n = new URLSearchParams(window.location.search);
                for (r in this.filter_names)
                    n.has(this.filter_names[r]) && (s = !0);
                if (i && !s) {
                    let t = JSON.parse(i);
                    for (var r in t)
                        "fulltext" == r && t[r].length > 0 ? (this.querySelector('input[name="' + this.filter_names[r] + '"]').setAttribute("value", t[r]),
                        e = !0) : t[r].forEach(t => {
                            this.querySelector('input[name="' + this.filter_names[r] + '"][value="' + t + '"').setAttribute("checked", "checked"),
                            e = !0
                        }
                        )
                }
                s && n.forEach( (t, e) => {
                    Object.values(this.filter_names).indexOf(e) > -1 && (e == this.filter_names.fulltext && t.length > 0 ? (this.querySelector('input[name="' + e + '"]').setAttribute("value", t),
                    s = !0) : t.split(",").forEach(t => {
                        this.querySelector('input[name="' + e + '"][value="' + t + '"]').setAttribute("checked", "checked"),
                        s = !0
                    }
                    ))
                }
                ),
                this.getFilters(t),
                this._collectFilterGroups(),
                e || s ? this._startSearch() : (this._renderItems(),
                this.renderRoot.querySelector("#spinner").classList.add("hidden"),
                this.requestUpdate())
            }
            _setCookie(t, e) {
                let s = this._generateCookieName(t);
                document.cookie = s + "=" + e
            }
            _getCookie(t) {
                let e = this._generateCookieName(t);
                if (!document.cookie)
                    return "";
                let s = document.cookie.split("; ").find(t => t.startsWith(e + "="));
                return s ? s.split("=")[1] : ""
            }
            _generateCookieName(t) {
                return "ugFilter" + document.querySelector("body").getAttribute("id") + t
            }
            _startSearch() {
                this.renderRoot.querySelector("#spinner").classList.remove("hidden");
                const t = this.querySelector("form")
                  , e = new FormData(t);
                var s = {};
                if (this.filter_names) {
                    var i = 0;
                    for (var n in this.filter_names)
                        s[n] = e.getAll(this.filter_names[n]),
                        i += "fulltext" == n ? s[n][0].length : s[n].length;
                    this.filteredList = i > 0 ? this.data.items.filter(t => {
                        let e = [];
                        for (var i in s)
                            if (e[i] = !1,
                            s[i].length < 1)
                                e[i] = !0;
                            else if ("fulltext" == i) {
                                let n = JSON.stringify(t).toLowerCase()
                                  , r = !1
                                  , o = s[i][0].split(" ");
                                for (const t in o)
                                    if (r = n.includes(o[t].toLowerCase()),
                                    !r)
                                        break;
                                r && (e[i] = !0)
                            } else {
                                let r = {};
                                for (const e of s[i])
                                    r[this.data.filtergroups[i][e]] || (r[this.data.filtergroups[i][e]] = !1),
                                    t[i].includes(parseInt(e)) && (r[this.data.filtergroups[i][e]] = !0);
                                for (var n in e[i] = !0,
                                r)
                                    if (0 == r[n]) {
                                        e[i] = !1;
                                        break
                                    }
                            }
                        for (var i in e)
                            if (!1 === e[i])
                                return !1;
                        return !0
                    }
                    ) : this.data.items,
                    this._setCookie("Filter", JSON.stringify(s));
                    let t = [];
                    for (var r in s)
                        s[r].join(",") && t.push(this.filter_names[r] + "=" + s[r].join(","));
                    var o = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + t.join("&");
                    window.history.pushState({
                        path: o
                    }, "", o),
                    this._renderItems(),
                    this.requestUpdate(),
                    this.renderRoot.querySelector("#spinner").classList.add("hidden")
                }
                this.requestUpdate()
            }
            _resetFilter() {
                for (var t in this.filter_names)
                    "fulltext" == t ? this.querySelectorAll('input[name="' + this.filter_names[t] + '"]').forEach(t => {
                        t.value = ""
                    }
                    ) : this.querySelectorAll('input[name="' + this.filter_names[t] + '"]').forEach(t => {
                        t.checked = !1
                    }
                    );
                this._startSearch()
            }
            getFilters(t) {
                if (this.categories_at)
                    for (var e in t[this.categories_at])
                        for (var s in this.data.filters[e] = [],
                        t[this.categories_at][e]) {
                            let i = {
                                id: parseInt(s),
                                title: t[this.categories_at][e][s].title
                            };
                            this.data.filters[e].push(i)
                        }
                else if (this.filter_names)
                    for (var e in this.filter_names)
                        "fulltext" != e && (this.data.filters[e] = [],
                        this.querySelectorAll('input[name="' + this.filter_names[e] + '"]').forEach(t => {
                            let s = {
                                id: parseInt(t.value),
                                title: t.parentElement.querySelector(".title").innerText
                            };
                            this.data.filters[e].push(s)
                        }
                        ))
            }
            _sort(t) {
                t.preventDefault(),
                this.renderRoot.querySelectorAll(".sort-link").forEach(t => {
                    t.classList.remove("active")
                }
                ),
                t.target.classList.add("active");
                let e = t.target.getAttribute("data-sort").split("|");
                this._doSort(e[0], "asc" == e[1] ? 1 : -1),
                this.renderRoot.getElementById("sorting").classList.toggle("open")
            }
            _doSort(t, e) {
                this.renderRoot.querySelector("#spinner").classList.remove("hidden");
                let s = 0;
                this.filteredList.sort( (i, n) => {
                    let r = i[t]
                      , o = n[t];
                    return t in this.data.filters && (r = this.data.filters[t].find(e => e.id == i[t][0]),
                    o = this.data.filters[t].find(e => e.id == n[t][0]),
                    r = void 0 === r ? "zzz" : r.title,
                    o = void 0 === o ? "zzz" : o.title),
                    r.toLowerCase() < o.toLowerCase() && (s = -1 * e),
                    r.toLowerCase() > o.toLowerCase() && (s = 1 * e),
                    s
                }
                ),
                this.page = 1,
                this._renderItems(),
                this.requestUpdate(),
                this.renderRoot.querySelector("#spinner").classList.add("hidden")
            }
            _turnPage(t) {
                if (t.preventDefault(),
                t.target.getAttribute("data-page"))
                    this.page = parseInt(t.target.getAttribute("data-page"));
                else {
                    let e = t.target.closest("a[data-page]");
                    this.page = parseInt(e.getAttribute("data-page"))
                }
                this._renderItems(),
                this.requestUpdate()
            }
            _toggleSorting() {
                this.shadowRoot.querySelector("#sorting").classList.toggle("open")
            }
            render() {
                return this.style.position = "relative",
                ha`
            <div class="unigraz-filter theme-${this.theme}">
                <div class="filter-list">
                    <div class="filter">
                        <slot name="form"> </slot>
                    </div>
                    <div class="result">
                        <div id="result-header">
                            <ul class="pagination">
                                ${this._renderPager("top")}
                            </ul>
                            <div class="sort-wrapper">
                                <a id="sorting" >${this.sort.title} <span class="dropdown-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="20.707" height="11.061" viewBox="0 0 20.707 11.061">
                            <path id="Pfad_15763" data-name="Pfad 15763" d="M-11995.066-18976.328l10,10,10-10" transform="translate(11995.42 18976.682)" fill="none" stroke="#000" stroke-width="1"/>
                        </svg></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    ${this._renderSorting()}
                                </ul>
                            </div>
                        </div>
                        <div id="spinner">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><style>.spinner_ajPY{transform-origin:center;animation:spinner_AtaB .75s infinite linear}@keyframes spinner_AtaB{100%{transform:rotate(360deg)}}</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_ajPY"/></svg>
                        </div>
                        <slot name="result"> </slot>
                        <div class="result-footer">
                            <ul class="pagination">
                                ${this._renderPager("bottom")}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            `
            }
            _renderItems() {
                const t = this.querySelector("form");
                t.querySelectorAll(".dropdown").forEach(t => {
                    const e = t.querySelector(".count");
                    if (e) {
                        const s = t.querySelectorAll('input[type="checkbox"]:checked');
                        e.innerText = s.length
                    }
                }
                );
                const e = t.querySelector(".total-count");
                e && (e.innerText = this.filteredList.length);
                var s = parseInt(this.page_size) * (parseInt(this.page) - 1)
                  , i = s + parseInt(this.page_size);
                i > this.filteredList.length && (i = this.filteredList.length);
                let n = this.querySelector('div[slot="result"] > .wrapper');
                if (n.innerHTML = "",
                0 == this.filteredList.length && this.no_result_message) {
                    let t = document.createElement("div");
                    return t.innerText = this.no_result_message,
                    void n.append(t)
                }
                if (this.item_template)
                    var r = document.getElementById(this.item_template).content;
                else
                    r = !1;
                for (let t = s; t < i; t++) {
                    let e = this.filteredList[t]
                      , s = "";
                    if (r) {
                        s = r.cloneNode(!0);
                        for (let t in e)
                            switch (t) {
                            case "image":
                                s.querySelectorAll('img[src="image"]').forEach(s => {
                                    s.setAttribute("src", e[t])
                                }
                                );
                                break;
                            case "link":
                            case "href":
                            case "url":
                                s.querySelectorAll('a[href="link"]').forEach(s => {
                                    s.setAttribute("href", e[t])
                                }
                                );
                                break;
                            default:
                                let i = s.querySelector("." + t);
                                i && (i.innerText = e[t])
                            }
                        var o = s.querySelector(".labels");
                        o && this._renderCategories(e).forEach(t => {
                            o.innerHTML = o.innerHTML + t
                        }
                        )
                    } else
                        s = `\n                    <div class="media">\n                        <a href="${e.link}">\n                            <div class="media-body">\n                                <h3>${e.title}</h3>\n\n                                <p class="bodytext">${e.teaser}</p>\n\n                                <div class="labels">\n                                    ${this._renderCategories(e)}\n                                </div>                            </div>\n                        </a>\n                        <p class="sr-only"><a href="${e.link}">Weiterlesen</a></p>\n                    </div>\n                `;
                    n.append(s)
                }
            }
            _renderCategories(t) {
                let e = []
                  , s = "";
                this.hidden_labels && (s = this.hidden_labels.split(","));
                for (const i in this.data.filters)
                    s.includes(i) || t[i].forEach(t => {
                        let s = this.data.filters[i].find(e => e.id == t);
                        s && e.push(`<span class="label label-default">${s.title}</span>`)
                    }
                    );
                return e
            }
            _renderPager(t) {
                var e = Math.round(this.filteredList.length / this.page_size);
                e < 1 && (e = 1);
                var s = [];
                if ("2022" != this.theme && "top" == t)
                    return s;
                this.page > 1 && s.push(ha`
                    <li  part="page-item" class="page-item">
                        <a href="#" @click="${this._turnPage}" class="page-link pagerPrev" data-page="${this.page - 1}"></a>
                    </li>
                `),
                this.page > 2 && e > 3 && s.push(ha`
                    <li  part="page-item" class="page-item disabled">
                        <a href="#"  class="page-link" >...</a>
                    </li>
                `);
                for (let t = 1; t <= e; t++) {
                    let i = !1
                      , n = "";
                    e > 3 ? (t > this.page - 2 && t < this.page + 2 && (i = !0),
                    3 == t && this.page < t && (i = !0)) : i = !0,
                    i && s.push(ha`
                        <li  part="page-item" class="page-item ${t == this.page ? "active" : ""} ${n}">
                            <a href="#" @click="${this._turnPage}" class="page-link" data-page="${t}">${t}</a>
                        </li>
                    `)
                }
                return this.page < e - 1 && e > 3 && s.push(ha`
                    <li  part="page-item" class="page-item disabled">
                        <a href="#"  class="page-link" >...</a>
                    </li>
                `),
                this.page < e && s.push(ha`
                    <li  part="page-item" class="page-item">
                        <a href="#" @click="${this._turnPage}" class="page-link pagerNext" data-page="${this.page + 1}"></a>
                    </li>
                `),
                s
            }
            _renderPaginationNav(t, e) {
                t.startsWith("svg:") ? fetch(t.substring(4)).then(t => t.text()).then(t => {
                    this.shadowRoot.querySelectorAll(e).forEach(e => {
                        e.innerHTML = t
                    }
                    )
                }
                ) : this.shadowRoot.querySelectorAll(e).forEach(e => {
                    e.innerHTML = t
                }
                )
            }
            _renderSorting() {
                let t = [];
                if (this.sort)
                    for (let e in this.sort.options)
                        t.push(ha`
                <li class="sort-item" part="sort-item" >
                    <a class="sort-link ${e == Object.keys(this.sort.options)[0] ? "active" : ""} "  @click="${this._sort}" href="#" data-sort="${e}|${this.sort.options[e].order}" >${this.sort.options[e].title}</a>
                </li>
                `);
                return t
            }
            firstUpdated() {
                this.shadowRoot.getElementById("sorting").addEventListener("click", t => {
                    this._toggleSorting()
                }
                )
            }
            updated() {
                this._renderPaginationNav(this.prevtext, ".pagerPrev"),
                this._renderPaginationNav(this.nexttext, ".pagerNext"),
                this.shadowRoot.activeElement && this.shadowRoot.activeElement.getAttribute("data-page") && this.shadowRoot.activeElement.blur()
            }
        }
        );
        const Na = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
          , Ta = (t, e, s=null) => {
            for (; e !== s; ) {
                const s = e.nextSibling;
                t.removeChild(e),
                e = s
            }
        }
          , Ma = `{{lit-${String(Math.random()).slice(2)}}}`
          , Ua = `\x3c!--${Ma}--\x3e`
          , $a = new RegExp(`${Ma}|${Ua}`)
          , Va = "$lit$";
        class La {
            constructor(t, e) {
                this.parts = [],
                this.element = e;
                const s = []
                  , i = []
                  , n = document.createTreeWalker(e.content, 133, null, !1);
                let r = 0
                  , o = -1
                  , a = 0;
                const {strings: l, values: {length: d}} = t;
                for (; a < d; ) {
                    const t = n.nextNode();
                    if (null !== t) {
                        if (o++,
                        1 === t.nodeType) {
                            if (t.hasAttributes()) {
                                const e = t.attributes
                                  , {length: s} = e;
                                let i = 0;
                                for (let t = 0; t < s; t++)
                                    Oa(e[t].name, Va) && i++;
                                for (; i-- > 0; ) {
                                    const e = l[a]
                                      , s = ja.exec(e)[2]
                                      , i = s.toLowerCase() + Va
                                      , n = t.getAttribute(i);
                                    t.removeAttribute(i);
                                    const r = n.split($a);
                                    this.parts.push({
                                        type: "attribute",
                                        index: o,
                                        name: s,
                                        strings: r
                                    }),
                                    a += r.length - 1
                                }
                            }
                            "TEMPLATE" === t.tagName && (i.push(t),
                            n.currentNode = t.content)
                        } else if (3 === t.nodeType) {
                            const e = t.data;
                            if (e.indexOf(Ma) >= 0) {
                                const i = t.parentNode
                                  , n = e.split($a)
                                  , r = n.length - 1;
                                for (let e = 0; e < r; e++) {
                                    let s, r = n[e];
                                    if ("" === r)
                                        s = qa();
                                    else {
                                        const t = ja.exec(r);
                                        null !== t && Oa(t[2], Va) && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -5) + t[3]),
                                        s = document.createTextNode(r)
                                    }
                                    i.insertBefore(s, t),
                                    this.parts.push({
                                        type: "node",
                                        index: ++o
                                    })
                                }
                                "" === n[r] ? (i.insertBefore(qa(), t),
                                s.push(t)) : t.data = n[r],
                                a += r
                            }
                        } else if (8 === t.nodeType)
                            if (t.data === Ma) {
                                const e = t.parentNode;
                                null !== t.previousSibling && o !== r || (o++,
                                e.insertBefore(qa(), t)),
                                r = o,
                                this.parts.push({
                                    type: "node",
                                    index: o
                                }),
                                null === t.nextSibling ? t.data = "" : (s.push(t),
                                o--),
                                a++
                            } else {
                                let e = -1;
                                for (; -1 !== (e = t.data.indexOf(Ma, e + 1)); )
                                    this.parts.push({
                                        type: "node",
                                        index: -1
                                    }),
                                    a++
                            }
                    } else
                        n.currentNode = i.pop()
                }
                for (const t of s)
                    t.parentNode.removeChild(t)
            }
        }
        const Oa = (t, e) => {
            const s = t.length - e.length;
            return s >= 0 && t.slice(s) === e
        }
          , Ra = t => -1 !== t.index
          , qa = () => document.createComment("")
          , ja = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        function za(t, e) {
            const {element: {content: s}, parts: i} = t
              , n = document.createTreeWalker(s, 133, null, !1);
            let r = Ha(i)
              , o = i[r]
              , a = -1
              , l = 0;
            const d = [];
            let c = null;
            for (; n.nextNode(); ) {
                a++;
                const t = n.currentNode;
                for (t.previousSibling === c && (c = null),
                e.has(t) && (d.push(t),
                null === c && (c = t)),
                null !== c && l++; void 0 !== o && o.index === a; )
                    o.index = null !== c ? -1 : o.index - l,
                    r = Ha(i, r),
                    o = i[r]
            }
            d.forEach(t => t.parentNode.removeChild(t))
        }
        const Ia = t => {
            let e = 11 === t.nodeType ? 0 : 1;
            const s = document.createTreeWalker(t, 133, null, !1);
            for (; s.nextNode(); )
                e++;
            return e
        }
          , Ha = (t, e=-1) => {
            for (let s = e + 1; s < t.length; s++) {
                const e = t[s];
                if (Ra(e))
                    return s
            }
            return -1
        }
          , Fa = new WeakMap
          , Da = t => "function" == typeof t && Fa.has(t)
          , Ba = {}
          , Wa = {};
        class Ja {
            constructor(t, e, s) {
                this.__parts = [],
                this.template = t,
                this.processor = e,
                this.options = s
            }
            update(t) {
                let e = 0;
                for (const s of this.__parts)
                    void 0 !== s && s.setValue(t[e]),
                    e++;
                for (const t of this.__parts)
                    void 0 !== t && t.commit()
            }
            _clone() {
                const t = Na ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                  , e = []
                  , s = this.template.parts
                  , i = document.createTreeWalker(t, 133, null, !1);
                let n, r = 0, o = 0, a = i.nextNode();
                for (; r < s.length; )
                    if (n = s[r],
                    Ra(n)) {
                        for (; o < n.index; )
                            o++,
                            "TEMPLATE" === a.nodeName && (e.push(a),
                            i.currentNode = a.content),
                            null === (a = i.nextNode()) && (i.currentNode = e.pop(),
                            a = i.nextNode());
                        if ("node" === n.type) {
                            const t = this.processor.handleTextExpression(this.options);
                            t.insertAfterNode(a.previousSibling),
                            this.__parts.push(t)
                        } else
                            this.__parts.push(...this.processor.handleAttributeExpressions(a, n.name, n.strings, this.options));
                        r++
                    } else
                        this.__parts.push(void 0),
                        r++;
                return Na && (document.adoptNode(t),
                customElements.upgrade(t)),
                t
            }
        }
        const Ya = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: t => t
        })
          , Za = ` ${Ma} `;
        class Ga {
            constructor(t, e, s, i) {
                this.strings = t,
                this.values = e,
                this.type = s,
                this.processor = i
            }
            getHTML() {
                const t = this.strings.length - 1;
                let e = ""
                  , s = !1;
                for (let i = 0; i < t; i++) {
                    const t = this.strings[i]
                      , n = t.lastIndexOf("\x3c!--");
                    s = (n > -1 || s) && -1 === t.indexOf("--\x3e", n + 1);
                    const r = ja.exec(t);
                    e += null === r ? t + (s ? Za : Ua) : t.substr(0, r.index) + r[1] + r[2] + Va + r[3] + Ma
                }
                return e += this.strings[t],
                e
            }
            getTemplateElement() {
                const t = document.createElement("template");
                let e = this.getHTML();
                return void 0 !== Ya && (e = Ya.createHTML(e)),
                t.innerHTML = e,
                t
            }
        }
        const Xa = t => null === t || !("object" == typeof t || "function" == typeof t)
          , Ka = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        class Qa {
            constructor(t, e, s) {
                this.dirty = !0,
                this.element = t,
                this.name = e,
                this.strings = s,
                this.parts = [];
                for (let t = 0; t < s.length - 1; t++)
                    this.parts[t] = this._createPart()
            }
            _createPart() {
                return new tl(this)
            }
            _getValue() {
                const t = this.strings
                  , e = t.length - 1
                  , s = this.parts;
                if (1 === e && "" === t[0] && "" === t[1]) {
                    const t = s[0].value;
                    if ("symbol" == typeof t)
                        return String(t);
                    if ("string" == typeof t || !Ka(t))
                        return t
                }
                let i = "";
                for (let n = 0; n < e; n++) {
                    i += t[n];
                    const e = s[n];
                    if (void 0 !== e) {
                        const t = e.value;
                        if (Xa(t) || !Ka(t))
                            i += "string" == typeof t ? t : String(t);
                        else
                            for (const e of t)
                                i += "string" == typeof e ? e : String(e)
                    }
                }
                return i += t[e],
                i
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class tl {
            constructor(t) {
                this.value = void 0,
                this.committer = t
            }
            setValue(t) {
                t === Ba || Xa(t) && t === this.value || (this.value = t,
                Da(t) || (this.committer.dirty = !0))
            }
            commit() {
                for (; Da(this.value); ) {
                    const t = this.value;
                    this.value = Ba,
                    t(this)
                }
                this.value !== Ba && this.committer.commit()
            }
        }
        class el {
            constructor(t) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.options = t
            }
            appendInto(t) {
                this.startNode = t.appendChild(qa()),
                this.endNode = t.appendChild(qa())
            }
            insertAfterNode(t) {
                this.startNode = t,
                this.endNode = t.nextSibling
            }
            appendIntoPart(t) {
                t.__insert(this.startNode = qa()),
                t.__insert(this.endNode = qa())
            }
            insertAfterPart(t) {
                t.__insert(this.startNode = qa()),
                this.endNode = t.endNode,
                t.endNode = this.startNode
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                if (null === this.startNode.parentNode)
                    return;
                for (; Da(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Ba,
                    t(this)
                }
                const t = this.__pendingValue;
                t !== Ba && (Xa(t) ? t !== this.value && this.__commitText(t) : t instanceof Ga ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : Ka(t) ? this.__commitIterable(t) : t === Wa ? (this.value = Wa,
                this.clear()) : this.__commitText(t))
            }
            __insert(t) {
                this.endNode.parentNode.insertBefore(t, this.endNode)
            }
            __commitNode(t) {
                this.value !== t && (this.clear(),
                this.__insert(t),
                this.value = t)
            }
            __commitText(t) {
                const e = this.startNode.nextSibling
                  , s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = s : this.__commitNode(document.createTextNode(s)),
                this.value = t
            }
            __commitTemplateResult(t) {
                const e = this.options.templateFactory(t);
                if (this.value instanceof Ja && this.value.template === e)
                    this.value.update(t.values);
                else {
                    const s = new Ja(e,t.processor,this.options)
                      , i = s._clone();
                    s.update(t.values),
                    this.__commitNode(i),
                    this.value = s
                }
            }
            __commitIterable(t) {
                Array.isArray(this.value) || (this.value = [],
                this.clear());
                const e = this.value;
                let s, i = 0;
                for (const n of t)
                    s = e[i],
                    void 0 === s && (s = new el(this.options),
                    e.push(s),
                    0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
                    s.setValue(n),
                    s.commit(),
                    i++;
                i < e.length && (e.length = i,
                this.clear(s && s.endNode))
            }
            clear(t=this.startNode) {
                Ta(this.startNode.parentNode, t.nextSibling, this.endNode)
            }
        }
        class sl {
            constructor(t, e, s) {
                if (this.value = void 0,
                this.__pendingValue = void 0,
                2 !== s.length || "" !== s[0] || "" !== s[1])
                    throw new Error("Boolean attributes can only contain a single expression");
                this.element = t,
                this.name = e,
                this.strings = s
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; Da(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Ba,
                    t(this)
                }
                if (this.__pendingValue === Ba)
                    return;
                const t = !!this.__pendingValue;
                this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = t),
                this.__pendingValue = Ba
            }
        }
        class il extends Qa {
            constructor(t, e, s) {
                super(t, e, s),
                this.single = 2 === s.length && "" === s[0] && "" === s[1]
            }
            _createPart() {
                return new nl(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element[this.name] = this._getValue())
            }
        }
        class nl extends tl {
        }
        let rl = !1;
        ( () => {
            try {
                const t = {
                    get capture() {
                        return rl = !0,
                        !1
                    }
                };
                window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t)
            } catch (t) {}
        }
        )();
        class ol {
            constructor(t, e, s) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.element = t,
                this.eventName = e,
                this.eventContext = s,
                this.__boundHandleEvent = t => this.handleEvent(t)
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; Da(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Ba,
                    t(this)
                }
                if (this.__pendingValue === Ba)
                    return;
                const t = this.__pendingValue
                  , e = this.value
                  , s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
                  , i = null != t && (null == e || s);
                s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                i && (this.__options = al(t),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                this.value = t,
                this.__pendingValue = Ba
            }
            handleEvent(t) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
            }
        }
        const al = t => t && (rl ? {
            capture: t.capture,
            passive: t.passive,
            once: t.once
        } : t.capture);
        function ll(t) {
            let e = dl.get(t.type);
            void 0 === e && (e = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            dl.set(t.type, e));
            let s = e.stringsArray.get(t.strings);
            if (void 0 !== s)
                return s;
            const i = t.strings.join(Ma);
            return s = e.keyString.get(i),
            void 0 === s && (s = new La(t,t.getTemplateElement()),
            e.keyString.set(i, s)),
            e.stringsArray.set(t.strings, s),
            s
        }
        const dl = new Map
          , cl = new WeakMap
          , hl = new class {
            handleAttributeExpressions(t, e, s, i) {
                const n = e[0];
                return "." === n ? new il(t,e.slice(1),s).parts : "@" === n ? [new ol(t,e.slice(1),i.eventContext)] : "?" === n ? [new sl(t,e.slice(1),s)] : new Qa(t,e,s).parts
            }
            handleTextExpression(t) {
                return new el(t)
            }
        }
        ;
        "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        const pl = (t, ...e) => new Ga(t,e,"html",hl)
          , ul = (t, e) => `${t}--${e}`;
        let ml = !0;
        void 0 === window.ShadyCSS ? ml = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
        ml = !1);
        const fl = t => e => {
            const s = ul(e.type, t);
            let i = dl.get(s);
            void 0 === i && (i = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            dl.set(s, i));
            let n = i.stringsArray.get(e.strings);
            if (void 0 !== n)
                return n;
            const r = e.strings.join(Ma);
            if (n = i.keyString.get(r),
            void 0 === n) {
                const s = e.getTemplateElement();
                ml && window.ShadyCSS.prepareTemplateDom(s, t),
                n = new La(e,s),
                i.keyString.set(r, n)
            }
            return i.stringsArray.set(e.strings, n),
            n
        }
          , gl = ["html", "svg"]
          , _l = new Set;
        window.JSCompiler_renameProperty = (t, e) => t;
        const yl = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t)
                }
                return t
            }
        }
          , vl = (t, e) => e !== t && (e == e || t == t)
          , wl = {
            attribute: !0,
            type: String,
            converter: yl,
            reflect: !1,
            hasChanged: vl
        }
          , Sl = "finalized";
        class bl extends HTMLElement {
            constructor() {
                super(),
                this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this._classProperties.forEach( (e, s) => {
                    const i = this._attributeNameForProperty(s, e);
                    void 0 !== i && (this._attributeToPropertyMap.set(i, s),
                    t.push(i))
                }
                ),
                t
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const t = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== t && t.forEach( (t, e) => this._classProperties.set(e, t))
                }
            }
            static createProperty(t, e=wl) {
                if (this._ensureClassProperties(),
                this._classProperties.set(t, e),
                e.noAccessor || this.prototype.hasOwnProperty(t))
                    return;
                const s = "symbol" == typeof t ? Symbol() : `__${t}`
                  , i = this.getPropertyDescriptor(t, s, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i)
            }
            static getPropertyDescriptor(t, e, s) {
                return {
                    get() {
                        return this[e]
                    },
                    set(i) {
                        const n = this[t];
                        this[e] = i,
                        this.requestUpdateInternal(t, n, s)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this._classProperties && this._classProperties.get(t) || wl
            }
            static finalize() {
                const t = Object.getPrototypeOf(this);
                if (t.hasOwnProperty(Sl) || t.finalize(),
                this[Sl] = !0,
                this._ensureClassProperties(),
                this._attributeToPropertyMap = new Map,
                this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
                    for (const s of e)
                        this.createProperty(s, t[s])
                }
            }
            static _attributeNameForProperty(t, e) {
                const s = e.attribute;
                return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
            }
            static _valueHasChanged(t, e, s=vl) {
                return s(t, e)
            }
            static _propertyValueFromAttribute(t, e) {
                const s = e.type
                  , i = e.converter || yl
                  , n = "function" == typeof i ? i : i.fromAttribute;
                return n ? n(t, s) : t
            }
            static _propertyValueToAttribute(t, e) {
                if (void 0 === e.reflect)
                    return;
                const s = e.type
                  , i = e.converter;
                return (i && i.toAttribute || yl.toAttribute)(t, s)
            }
            initialize() {
                this._updateState = 0,
                this._updatePromise = new Promise(t => this._enableUpdatingResolver = t),
                this._changedProperties = new Map,
                this._saveInstanceProperties(),
                this.requestUpdateInternal()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach( (t, e) => {
                    if (this.hasOwnProperty(e)) {
                        const t = this[e];
                        delete this[e],
                        this._instanceProperties || (this._instanceProperties = new Map),
                        this._instanceProperties.set(e, t)
                    }
                }
                )
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach( (t, e) => this[e] = t),
                this._instanceProperties = void 0
            }
            connectedCallback() {
                this.enableUpdating()
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
                this._enableUpdatingResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(t, e, s) {
                e !== s && this._attributeToProperty(t, s)
            }
            _propertyToAttribute(t, e, s=wl) {
                const i = this.constructor
                  , n = i._attributeNameForProperty(t, s);
                if (void 0 !== n) {
                    const t = i._propertyValueToAttribute(e, s);
                    if (void 0 === t)
                        return;
                    this._updateState = 8 | this._updateState,
                    null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
                    this._updateState = -9 & this._updateState
                }
            }
            _attributeToProperty(t, e) {
                if (8 & this._updateState)
                    return;
                const s = this.constructor
                  , i = s._attributeToPropertyMap.get(t);
                if (void 0 !== i) {
                    const t = s.getPropertyOptions(i);
                    this._updateState = 16 | this._updateState,
                    this[i] = s._propertyValueFromAttribute(e, t),
                    this._updateState = -17 & this._updateState
                }
            }
            requestUpdateInternal(t, e, s) {
                let i = !0;
                if (void 0 !== t) {
                    const n = this.constructor;
                    s = s || n.getPropertyOptions(t),
                    n._valueHasChanged(this[t], e, s.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
                    !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
                    this._reflectingProperties.set(t, s))) : i = !1
                }
                !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
            }
            requestUpdate(t, e) {
                return this.requestUpdateInternal(t, e),
                this.updateComplete
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise
                } catch (t) {}
                const t = this.performUpdate();
                return null != t && await t,
                !this._hasRequestedUpdate
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState
            }
            get hasUpdated() {
                return 1 & this._updateState
            }
            performUpdate() {
                if (!this._hasRequestedUpdate)
                    return;
                this._instanceProperties && this._applyInstanceProperties();
                let t = !1;
                const e = this._changedProperties;
                try {
                    t = this.shouldUpdate(e),
                    t ? this.update(e) : this._markUpdated()
                } catch (e) {
                    throw t = !1,
                    this._markUpdated(),
                    e
                }
                t && (1 & this._updateState || (this._updateState = 1 | this._updateState,
                this.firstUpdated(e)),
                this.updated(e))
            }
            _markUpdated() {
                this._changedProperties = new Map,
                this._updateState = -5 & this._updateState
            }
            get updateComplete() {
                return this._getUpdateComplete()
            }
            _getUpdateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._updatePromise
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach( (t, e) => this._propertyToAttribute(e, this[e], t)),
                this._reflectingProperties = void 0),
                this._markUpdated()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        bl[Sl] = !0;
        const xl = Element.prototype;
        xl.msMatchesSelector || xl.webkitMatchesSelector;
        const kl = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , Pl = Symbol();
        class Cl {
            constructor(t, e) {
                if (e !== Pl)
                    throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (kl ? (this._styleSheet = new CSSStyleSheet,
                this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
                this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        const Al = {};
        class El extends bl {
            static getStyles() {
                return this.styles
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
                    return;
                const t = this.getStyles();
                if (Array.isArray(t)) {
                    const e = (t, s) => t.reduceRight( (t, s) => Array.isArray(s) ? e(s, t) : (t.add(s),
                    t), s)
                      , s = e(t, new Set)
                      , i = [];
                    s.forEach(t => i.unshift(t)),
                    this._styles = i
                } else
                    this._styles = void 0 === t ? [] : [t];
                this._styles = this._styles.map(t => {
                    if (t instanceof CSSStyleSheet && !kl) {
                        const e = Array.prototype.slice.call(t.cssRules).reduce( (t, e) => t + e.cssText, "");
                        return new Cl(String(e),Pl)
                    }
                    return t
                }
                )
            }
            initialize() {
                super.initialize(),
                this.constructor._getUniqueStyles(),
                this.renderRoot = this.createRenderRoot(),
                window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions)
            }
            adoptStyles() {
                const t = this.constructor._styles;
                0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? kl ? this.renderRoot.adoptedStyleSheets = t.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
            }
            update(t) {
                const e = this.render();
                super.update(t),
                e !== Al && this.constructor.render(e, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }),
                this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
                this.constructor._styles.forEach(t => {
                    const e = document.createElement("style");
                    e.textContent = t.cssText,
                    this.renderRoot.appendChild(e)
                }
                ))
            }
            render() {
                return Al
            }
        }
        El.finalized = !0,
        El.render = (t, e, s) => {
            if (!s || "object" != typeof s || !s.scopeName)
                throw new Error("The `scopeName` option is required.");
            const i = s.scopeName
              , n = cl.has(e)
              , r = ml && 11 === e.nodeType && !!e.host
              , o = r && !_l.has(i)
              , a = o ? document.createDocumentFragment() : e;
            if (( (t, e, s) => {
                let i = cl.get(e);
                void 0 === i && (Ta(e, e.firstChild),
                cl.set(e, i = new el(Object.assign({
                    templateFactory: ll
                }, s))),
                i.appendInto(e)),
                i.setValue(t),
                i.commit()
            }
            )(t, a, Object.assign({
                templateFactory: fl(i)
            }, s)),
            o) {
                const t = cl.get(a);
                cl.delete(a);
                ( (t, e, s) => {
                    _l.add(t);
                    const i = s ? s.element : document.createElement("template")
                      , n = e.querySelectorAll("style")
                      , {length: r} = n;
                    if (0 === r)
                        return void window.ShadyCSS.prepareTemplateStyles(i, t);
                    const o = document.createElement("style");
                    for (let t = 0; t < r; t++) {
                        const e = n[t];
                        e.parentNode.removeChild(e),
                        o.textContent += e.textContent
                    }
                    (t => {
                        gl.forEach(e => {
                            const s = dl.get(ul(e, t));
                            void 0 !== s && s.keyString.forEach(t => {
                                const {element: {content: e}} = t
                                  , s = new Set;
                                Array.from(e.querySelectorAll("style")).forEach(t => {
                                    s.add(t)
                                }
                                ),
                                za(t, s)
                            }
                            )
                        }
                        )
                    }
                    )(t);
                    const a = i.content;
                    s ? function(t, e, s=null) {
                        const {element: {content: i}, parts: n} = t;
                        if (null == s)
                            return void i.appendChild(e);
                        const r = document.createTreeWalker(i, 133, null, !1);
                        let o = Ha(n)
                          , a = 0
                          , l = -1;
                        for (; r.nextNode(); )
                            for (l++,
                            r.currentNode === s && (a = Ia(e),
                            s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l; ) {
                                if (a > 0) {
                                    for (; -1 !== o; )
                                        n[o].index += a,
                                        o = Ha(n, o);
                                    return
                                }
                                o = Ha(n, o)
                            }
                    }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild),
                    window.ShadyCSS.prepareTemplateStyles(i, t);
                    const l = a.querySelector("style");
                    if (window.ShadyCSS.nativeShadow && null !== l)
                        e.insertBefore(l.cloneNode(!0), e.firstChild);
                    else if (s) {
                        a.insertBefore(o, a.firstChild);
                        const t = new Set;
                        t.add(o),
                        za(s, t)
                    }
                }
                )(i, a, t.value instanceof Ja ? t.value.template : void 0),
                Ta(e, e.firstChild),
                e.appendChild(a),
                cl.set(e, t)
            }
            !n && r && window.ShadyCSS.styleElement(e.host)
        }
        ,
        El.shadowRootOptions = {
            mode: "open"
        };
        class Nl extends (st(El)) {
            constructor() {
                super()
            }
            connectedCallback() {
                super.connectedCallback()
            }
            render() {
                return this._renderFontSizer()
            }
            _keyHandler(t) {
                switch (t.keyCode) {
                case 13:
                    if (this.querySelector(".fontchange .dropdown-menu").classList.add("show"),
                    this.querySelector("#fontBtn").setAttribute("aria-expanded", "true"),
                    t.target.classList.contains("dropdown-item"))
                        break;
                    t.preventDefault(),
                    this.querySelector(".fontchange .dropdown-menu .smaller").focus();
                    break;
                case 32:
                case 40:
                    this.querySelector(".fontchange .dropdown-menu").classList.add("show"),
                    this.querySelector("#fontBtn").setAttribute("aria-expanded", "true"),
                    this.querySelector(".fontchange .dropdown-menu .smaller").focus(),
                    t.preventDefault();
                    break;
                case 38:
                    this.querySelector(".fontchange .dropdown-menu").classList.remove("show"),
                    this.querySelector("#fontBtn").setAttribute("aria-expanded", "false"),
                    this.focus(),
                    t.preventDefault();
                    break;
                case 39:
                    t.target.nextElementSibling && t.target.nextElementSibling.focus(),
                    t.preventDefault();
                    break;
                case 37:
                    t.target.previousElementSibling && t.target.previousElementSibling.focus(),
                    t.preventDefault()
                }
            }
            _getDomain() {
                var t = location.hostname.split(".").slice(-2).join(".");
                return t.length < 4 ? location.hostname : t
            }
            _setFontCookie(t) {
                const e = new Date;
                e.setTime(e.getTime() + 31536e6);
                let s = "expires=" + e.toUTCString();
                document.cookie = "accessibility-fs=" + t + ";" + s + ";domain=" + this._getDomain() + ";path=/"
            }
            _getFontCookie() {
                let t = decodeURIComponent(document.cookie).split(";");
                for (let e = 0; e < t.length; e++) {
                    let s = t[e];
                    for (; " " == s.charAt(0); )
                        s = s.substring(1);
                    if (0 == s.indexOf("accessibility-fs="))
                        return s.substring(17, s.length)
                }
                return ""
            }
            _initFontsizer() {
                if (this.querySelectorAll(".fontchange").forEach(function(t) {
                    t.classList.remove("active")
                }),
                this.querySelector(".fontchange .dropdown-menu").classList.remove("show"),
                this.querySelector("#fontBtn").setAttribute("aria-expanded", "false"),
                this._getFontCookie())
                    switch (this._getFontCookie()) {
                    case "fs-sm":
                        document.querySelector("html").classList.remove("large"),
                        document.querySelector("html").classList.add("small"),
                        document.querySelector("html").classList.remove("fs-lg"),
                        document.querySelector("html").classList.add("fs-sm");
                        break;
                    case "fs-lg":
                        document.querySelector("html").classList.remove("small"),
                        document.querySelector("html").classList.add("large"),
                        document.querySelector("html").classList.remove("fs-sm"),
                        document.querySelector("html").classList.add("fs-lg");
                        break;
                    default:
                        document.querySelector("html").classList.remove("small"),
                        document.querySelector("html").classList.remove("large"),
                        document.querySelector("html").classList.remove("fs-sm"),
                        document.querySelector("html").classList.remove("fs-lg")
                    }
                else
                    this._setFontCookie("fs-base")
            }
            _initFontsizerButtons() {
                this.querySelector(".dropdown-item.smaller").addEventListener("click", t => {
                    t.preventDefault(),
                    t.stopPropagation(),
                    this._setFontCookie("fs-sm"),
                    this._initFontsizer()
                }
                ),
                this.querySelector(".dropdown-item.normal").addEventListener("click", t => {
                    t.preventDefault(),
                    t.stopPropagation(),
                    this._setFontCookie("fs-base"),
                    this._initFontsizer()
                }
                ),
                this.querySelector(".dropdown-item.bigger").addEventListener("click", t => {
                    t.preventDefault(),
                    t.stopPropagation(),
                    this._setFontCookie("fs-lg"),
                    this._initFontsizer()
                }
                )
            }
            _renderFontSizer() {
                return pl`
            <style>

                .bt_topitem .bt_side_crumb {
                    position: relative;
                }

                .bt_topitem:hover .bt_side_crumb svg path,
                .bt_topitem .active .bt_side_crumb svg path {
                    fill: #fff;
                }

                .toptoggle {
                    position: relative;
                }

                .bt_topitem .dropdown-menu a.dropdown-item {
                    font-size: 14px;
                    padding-top: 1px;
                    padding-bottom: 1px;
                    display: inline;
                    color: #fff;
                    padding-left: 8px;
                    padding-right: 8px;
                    background-color: transparent;
                }

                .fontchange .dropdown-menu a.smaller {
                    font-size: 14px !important;
                }

                .fontchange .dropdown-menu a.smaller span {
                    position: absolute !important;
                    margin-top: -5px !important;
                }

                .fontchange .dropdown-menu a.normal {
                    font-size: 16px !important;
                }

                .fontchange .dropdown-menu a.bigger {
                    font-size: 18px !important;
                    padding-right: 15px;
                }

                .fontchange .dropdown-menu a.bigger span {
                    position: absolute!important;
                    margin-top: 0px !important;
                }

            </style>

            <div id="fontSizeButton" class="fontchange">
                <div class="bt_side_crumb">
                    <a href="#" data-bs-toggle="dropdown" id="fontBtn" class="dropdown-toggle toptoggle" tabindex="-1" title="Schriftgröße ändern" role="button" aria-haspopup="true" aria-expanded="false">
                        <svg aria-hidden="true" id="svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi4yMjciIGhlaWdodD0iMTcuOCIgdmlld0JveD0iMCAwIDI2LjIyNyAxNy44Ij48cGF0aCB" data-name="svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi4yMjciIGhlaWdodD0iMTcuOCIgdmlld0JveD0iMCAwIDI2LjIyNyAxNy44Ij48cGF0aCB" xmlns="http://www.w3.org/2000/svg" width="26.227" height="17.8" viewBox="0 0 26.227 17.8">
                            <path id="Pfad_402" data-name="Pfad 402" d="M6.934,0,0,17.8H3.813l1.469-4.043H12.4L13.95,17.8h3.908L10.733,0ZM6.387,10.757l2.4-6.6,2.453,6.6Z"/>
                            <path id="Pfad_403" data-name="Pfad 403" d="M20.881,4.45H18.032l-2.391,6.136,1.673,4.18h4.815L23.3,17.8h2.932Zm-3.258,8.068,1.8-4.955,1.839,4.952H17.62Z"/>
                        </svg>
                        <div aria-hidden="true" class="bt_downarrow"></div>
                    </a>

                    <div class="dropdown-menu rowshow" tabindex="-1" aria-labelledby="fontBtn" role="menu">
                        <a class="dropdown-item smaller" href="#" tabindex="1" title="Kleine Schrift"><div aria-hidden="true">A<span>-</span></div></a>
                        <a class="dropdown-item normal" href="#" tabindex="1" title="Normale Schrift"><div aria-hidden="true">A</div></a>
                        <a class="dropdown-item bigger" href="#" tabindex="1" title="Große Schrift"><div aria-hidden="true">A<span>+</span></div></a>
                    </div>
                </div>
            </div>
        `
            }
            firstUpdated() {
                return super.firstUpdated(),
                this._initFontsizer(),
                this._initFontsizerButtons(),
                this.querySelector(".fontchange").addEventListener("focusout", t => {
                    document.querySelector(".bt_topitem .fontchange").contains(t.relatedTarget) || this.querySelector(".fontchange .dropdown-menu").classList.remove("show")
                }
                ),
                this.addEventListener("keydown", t => {
                    this._keyHandler(t)
                }
                ),
                this._renderFontSizer()
            }
        }
        customElements.define("ug-fontsizer", Nl);
        const Tl = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
          , Ml = (t, e, s=null) => {
            for (; e !== s; ) {
                const s = e.nextSibling;
                t.removeChild(e),
                e = s
            }
        }
          , Ul = `{{lit-${String(Math.random()).slice(2)}}}`
          , $l = `\x3c!--${Ul}--\x3e`
          , Vl = new RegExp(`${Ul}|${$l}`)
          , Ll = "$lit$";
        class Ol {
            constructor(t, e) {
                this.parts = [],
                this.element = e;
                const s = []
                  , i = []
                  , n = document.createTreeWalker(e.content, 133, null, !1);
                let r = 0
                  , o = -1
                  , a = 0;
                const {strings: l, values: {length: d}} = t;
                for (; a < d; ) {
                    const t = n.nextNode();
                    if (null !== t) {
                        if (o++,
                        1 === t.nodeType) {
                            if (t.hasAttributes()) {
                                const e = t.attributes
                                  , {length: s} = e;
                                let i = 0;
                                for (let t = 0; t < s; t++)
                                    Rl(e[t].name, Ll) && i++;
                                for (; i-- > 0; ) {
                                    const e = l[a]
                                      , s = zl.exec(e)[2]
                                      , i = s.toLowerCase() + Ll
                                      , n = t.getAttribute(i);
                                    t.removeAttribute(i);
                                    const r = n.split(Vl);
                                    this.parts.push({
                                        type: "attribute",
                                        index: o,
                                        name: s,
                                        strings: r
                                    }),
                                    a += r.length - 1
                                }
                            }
                            "TEMPLATE" === t.tagName && (i.push(t),
                            n.currentNode = t.content)
                        } else if (3 === t.nodeType) {
                            const e = t.data;
                            if (e.indexOf(Ul) >= 0) {
                                const i = t.parentNode
                                  , n = e.split(Vl)
                                  , r = n.length - 1;
                                for (let e = 0; e < r; e++) {
                                    let s, r = n[e];
                                    if ("" === r)
                                        s = jl();
                                    else {
                                        const t = zl.exec(r);
                                        null !== t && Rl(t[2], Ll) && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -5) + t[3]),
                                        s = document.createTextNode(r)
                                    }
                                    i.insertBefore(s, t),
                                    this.parts.push({
                                        type: "node",
                                        index: ++o
                                    })
                                }
                                "" === n[r] ? (i.insertBefore(jl(), t),
                                s.push(t)) : t.data = n[r],
                                a += r
                            }
                        } else if (8 === t.nodeType)
                            if (t.data === Ul) {
                                const e = t.parentNode;
                                null !== t.previousSibling && o !== r || (o++,
                                e.insertBefore(jl(), t)),
                                r = o,
                                this.parts.push({
                                    type: "node",
                                    index: o
                                }),
                                null === t.nextSibling ? t.data = "" : (s.push(t),
                                o--),
                                a++
                            } else {
                                let e = -1;
                                for (; -1 !== (e = t.data.indexOf(Ul, e + 1)); )
                                    this.parts.push({
                                        type: "node",
                                        index: -1
                                    }),
                                    a++
                            }
                    } else
                        n.currentNode = i.pop()
                }
                for (const t of s)
                    t.parentNode.removeChild(t)
            }
        }
        const Rl = (t, e) => {
            const s = t.length - e.length;
            return s >= 0 && t.slice(s) === e
        }
          , ql = t => -1 !== t.index
          , jl = () => document.createComment("")
          , zl = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        function Il(t, e) {
            const {element: {content: s}, parts: i} = t
              , n = document.createTreeWalker(s, 133, null, !1);
            let r = Fl(i)
              , o = i[r]
              , a = -1
              , l = 0;
            const d = [];
            let c = null;
            for (; n.nextNode(); ) {
                a++;
                const t = n.currentNode;
                for (t.previousSibling === c && (c = null),
                e.has(t) && (d.push(t),
                null === c && (c = t)),
                null !== c && l++; void 0 !== o && o.index === a; )
                    o.index = null !== c ? -1 : o.index - l,
                    r = Fl(i, r),
                    o = i[r]
            }
            d.forEach(t => t.parentNode.removeChild(t))
        }
        const Hl = t => {
            let e = 11 === t.nodeType ? 0 : 1;
            const s = document.createTreeWalker(t, 133, null, !1);
            for (; s.nextNode(); )
                e++;
            return e
        }
          , Fl = (t, e=-1) => {
            for (let s = e + 1; s < t.length; s++) {
                const e = t[s];
                if (ql(e))
                    return s
            }
            return -1
        }
          , Dl = new WeakMap
          , Bl = t => "function" == typeof t && Dl.has(t)
          , Wl = {}
          , Jl = {};
        class Yl {
            constructor(t, e, s) {
                this.__parts = [],
                this.template = t,
                this.processor = e,
                this.options = s
            }
            update(t) {
                let e = 0;
                for (const s of this.__parts)
                    void 0 !== s && s.setValue(t[e]),
                    e++;
                for (const t of this.__parts)
                    void 0 !== t && t.commit()
            }
            _clone() {
                const t = Tl ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                  , e = []
                  , s = this.template.parts
                  , i = document.createTreeWalker(t, 133, null, !1);
                let n, r = 0, o = 0, a = i.nextNode();
                for (; r < s.length; )
                    if (n = s[r],
                    ql(n)) {
                        for (; o < n.index; )
                            o++,
                            "TEMPLATE" === a.nodeName && (e.push(a),
                            i.currentNode = a.content),
                            null === (a = i.nextNode()) && (i.currentNode = e.pop(),
                            a = i.nextNode());
                        if ("node" === n.type) {
                            const t = this.processor.handleTextExpression(this.options);
                            t.insertAfterNode(a.previousSibling),
                            this.__parts.push(t)
                        } else
                            this.__parts.push(...this.processor.handleAttributeExpressions(a, n.name, n.strings, this.options));
                        r++
                    } else
                        this.__parts.push(void 0),
                        r++;
                return Tl && (document.adoptNode(t),
                customElements.upgrade(t)),
                t
            }
        }
        const Zl = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: t => t
        })
          , Gl = ` ${Ul} `;
        class Xl {
            constructor(t, e, s, i) {
                this.strings = t,
                this.values = e,
                this.type = s,
                this.processor = i
            }
            getHTML() {
                const t = this.strings.length - 1;
                let e = ""
                  , s = !1;
                for (let i = 0; i < t; i++) {
                    const t = this.strings[i]
                      , n = t.lastIndexOf("\x3c!--");
                    s = (n > -1 || s) && -1 === t.indexOf("--\x3e", n + 1);
                    const r = zl.exec(t);
                    e += null === r ? t + (s ? Gl : $l) : t.substr(0, r.index) + r[1] + r[2] + Ll + r[3] + Ul
                }
                return e += this.strings[t],
                e
            }
            getTemplateElement() {
                const t = document.createElement("template");
                let e = this.getHTML();
                return void 0 !== Zl && (e = Zl.createHTML(e)),
                t.innerHTML = e,
                t
            }
        }
        const Kl = t => null === t || !("object" == typeof t || "function" == typeof t)
          , Ql = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        class td {
            constructor(t, e, s) {
                this.dirty = !0,
                this.element = t,
                this.name = e,
                this.strings = s,
                this.parts = [];
                for (let t = 0; t < s.length - 1; t++)
                    this.parts[t] = this._createPart()
            }
            _createPart() {
                return new ed(this)
            }
            _getValue() {
                const t = this.strings
                  , e = t.length - 1
                  , s = this.parts;
                if (1 === e && "" === t[0] && "" === t[1]) {
                    const t = s[0].value;
                    if ("symbol" == typeof t)
                        return String(t);
                    if ("string" == typeof t || !Ql(t))
                        return t
                }
                let i = "";
                for (let n = 0; n < e; n++) {
                    i += t[n];
                    const e = s[n];
                    if (void 0 !== e) {
                        const t = e.value;
                        if (Kl(t) || !Ql(t))
                            i += "string" == typeof t ? t : String(t);
                        else
                            for (const e of t)
                                i += "string" == typeof e ? e : String(e)
                    }
                }
                return i += t[e],
                i
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class ed {
            constructor(t) {
                this.value = void 0,
                this.committer = t
            }
            setValue(t) {
                t === Wl || Kl(t) && t === this.value || (this.value = t,
                Bl(t) || (this.committer.dirty = !0))
            }
            commit() {
                for (; Bl(this.value); ) {
                    const t = this.value;
                    this.value = Wl,
                    t(this)
                }
                this.value !== Wl && this.committer.commit()
            }
        }
        class sd {
            constructor(t) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.options = t
            }
            appendInto(t) {
                this.startNode = t.appendChild(jl()),
                this.endNode = t.appendChild(jl())
            }
            insertAfterNode(t) {
                this.startNode = t,
                this.endNode = t.nextSibling
            }
            appendIntoPart(t) {
                t.__insert(this.startNode = jl()),
                t.__insert(this.endNode = jl())
            }
            insertAfterPart(t) {
                t.__insert(this.startNode = jl()),
                this.endNode = t.endNode,
                t.endNode = this.startNode
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                if (null === this.startNode.parentNode)
                    return;
                for (; Bl(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Wl,
                    t(this)
                }
                const t = this.__pendingValue;
                t !== Wl && (Kl(t) ? t !== this.value && this.__commitText(t) : t instanceof Xl ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : Ql(t) ? this.__commitIterable(t) : t === Jl ? (this.value = Jl,
                this.clear()) : this.__commitText(t))
            }
            __insert(t) {
                this.endNode.parentNode.insertBefore(t, this.endNode)
            }
            __commitNode(t) {
                this.value !== t && (this.clear(),
                this.__insert(t),
                this.value = t)
            }
            __commitText(t) {
                const e = this.startNode.nextSibling
                  , s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = s : this.__commitNode(document.createTextNode(s)),
                this.value = t
            }
            __commitTemplateResult(t) {
                const e = this.options.templateFactory(t);
                if (this.value instanceof Yl && this.value.template === e)
                    this.value.update(t.values);
                else {
                    const s = new Yl(e,t.processor,this.options)
                      , i = s._clone();
                    s.update(t.values),
                    this.__commitNode(i),
                    this.value = s
                }
            }
            __commitIterable(t) {
                Array.isArray(this.value) || (this.value = [],
                this.clear());
                const e = this.value;
                let s, i = 0;
                for (const n of t)
                    s = e[i],
                    void 0 === s && (s = new sd(this.options),
                    e.push(s),
                    0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
                    s.setValue(n),
                    s.commit(),
                    i++;
                i < e.length && (e.length = i,
                this.clear(s && s.endNode))
            }
            clear(t=this.startNode) {
                Ml(this.startNode.parentNode, t.nextSibling, this.endNode)
            }
        }
        class id {
            constructor(t, e, s) {
                if (this.value = void 0,
                this.__pendingValue = void 0,
                2 !== s.length || "" !== s[0] || "" !== s[1])
                    throw new Error("Boolean attributes can only contain a single expression");
                this.element = t,
                this.name = e,
                this.strings = s
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; Bl(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Wl,
                    t(this)
                }
                if (this.__pendingValue === Wl)
                    return;
                const t = !!this.__pendingValue;
                this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = t),
                this.__pendingValue = Wl
            }
        }
        class nd extends td {
            constructor(t, e, s) {
                super(t, e, s),
                this.single = 2 === s.length && "" === s[0] && "" === s[1]
            }
            _createPart() {
                return new rd(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element[this.name] = this._getValue())
            }
        }
        class rd extends ed {
        }
        let od = !1;
        ( () => {
            try {
                const t = {
                    get capture() {
                        return od = !0,
                        !1
                    }
                };
                window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t)
            } catch (t) {}
        }
        )();
        class ad {
            constructor(t, e, s) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.element = t,
                this.eventName = e,
                this.eventContext = s,
                this.__boundHandleEvent = t => this.handleEvent(t)
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; Bl(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Wl,
                    t(this)
                }
                if (this.__pendingValue === Wl)
                    return;
                const t = this.__pendingValue
                  , e = this.value
                  , s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
                  , i = null != t && (null == e || s);
                s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                i && (this.__options = ld(t),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                this.value = t,
                this.__pendingValue = Wl
            }
            handleEvent(t) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
            }
        }
        const ld = t => t && (od ? {
            capture: t.capture,
            passive: t.passive,
            once: t.once
        } : t.capture);
        function dd(t) {
            let e = cd.get(t.type);
            void 0 === e && (e = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            cd.set(t.type, e));
            let s = e.stringsArray.get(t.strings);
            if (void 0 !== s)
                return s;
            const i = t.strings.join(Ul);
            return s = e.keyString.get(i),
            void 0 === s && (s = new Ol(t,t.getTemplateElement()),
            e.keyString.set(i, s)),
            e.stringsArray.set(t.strings, s),
            s
        }
        const cd = new Map
          , hd = new WeakMap
          , pd = new class {
            handleAttributeExpressions(t, e, s, i) {
                const n = e[0];
                return "." === n ? new nd(t,e.slice(1),s).parts : "@" === n ? [new ad(t,e.slice(1),i.eventContext)] : "?" === n ? [new id(t,e.slice(1),s)] : new td(t,e,s).parts
            }
            handleTextExpression(t) {
                return new sd(t)
            }
        }
        ;
        "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        const ud = (t, ...e) => new Xl(t,e,"html",pd)
          , md = (t, e) => `${t}--${e}`;
        let fd = !0;
        void 0 === window.ShadyCSS ? fd = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
        fd = !1);
        const gd = t => e => {
            const s = md(e.type, t);
            let i = cd.get(s);
            void 0 === i && (i = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            cd.set(s, i));
            let n = i.stringsArray.get(e.strings);
            if (void 0 !== n)
                return n;
            const r = e.strings.join(Ul);
            if (n = i.keyString.get(r),
            void 0 === n) {
                const s = e.getTemplateElement();
                fd && window.ShadyCSS.prepareTemplateDom(s, t),
                n = new Ol(e,s),
                i.keyString.set(r, n)
            }
            return i.stringsArray.set(e.strings, n),
            n
        }
          , _d = ["html", "svg"]
          , yd = new Set;
        window.JSCompiler_renameProperty = (t, e) => t;
        const vd = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t)
                }
                return t
            }
        }
          , wd = (t, e) => e !== t && (e == e || t == t)
          , Sd = {
            attribute: !0,
            type: String,
            converter: vd,
            reflect: !1,
            hasChanged: wd
        }
          , bd = "finalized";
        class xd extends HTMLElement {
            constructor() {
                super(),
                this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this._classProperties.forEach( (e, s) => {
                    const i = this._attributeNameForProperty(s, e);
                    void 0 !== i && (this._attributeToPropertyMap.set(i, s),
                    t.push(i))
                }
                ),
                t
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const t = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== t && t.forEach( (t, e) => this._classProperties.set(e, t))
                }
            }
            static createProperty(t, e=Sd) {
                if (this._ensureClassProperties(),
                this._classProperties.set(t, e),
                e.noAccessor || this.prototype.hasOwnProperty(t))
                    return;
                const s = "symbol" == typeof t ? Symbol() : `__${t}`
                  , i = this.getPropertyDescriptor(t, s, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i)
            }
            static getPropertyDescriptor(t, e, s) {
                return {
                    get() {
                        return this[e]
                    },
                    set(i) {
                        const n = this[t];
                        this[e] = i,
                        this.requestUpdateInternal(t, n, s)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this._classProperties && this._classProperties.get(t) || Sd
            }
            static finalize() {
                const t = Object.getPrototypeOf(this);
                if (t.hasOwnProperty(bd) || t.finalize(),
                this[bd] = !0,
                this._ensureClassProperties(),
                this._attributeToPropertyMap = new Map,
                this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
                    for (const s of e)
                        this.createProperty(s, t[s])
                }
            }
            static _attributeNameForProperty(t, e) {
                const s = e.attribute;
                return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
            }
            static _valueHasChanged(t, e, s=wd) {
                return s(t, e)
            }
            static _propertyValueFromAttribute(t, e) {
                const s = e.type
                  , i = e.converter || vd
                  , n = "function" == typeof i ? i : i.fromAttribute;
                return n ? n(t, s) : t
            }
            static _propertyValueToAttribute(t, e) {
                if (void 0 === e.reflect)
                    return;
                const s = e.type
                  , i = e.converter;
                return (i && i.toAttribute || vd.toAttribute)(t, s)
            }
            initialize() {
                this._updateState = 0,
                this._updatePromise = new Promise(t => this._enableUpdatingResolver = t),
                this._changedProperties = new Map,
                this._saveInstanceProperties(),
                this.requestUpdateInternal()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach( (t, e) => {
                    if (this.hasOwnProperty(e)) {
                        const t = this[e];
                        delete this[e],
                        this._instanceProperties || (this._instanceProperties = new Map),
                        this._instanceProperties.set(e, t)
                    }
                }
                )
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach( (t, e) => this[e] = t),
                this._instanceProperties = void 0
            }
            connectedCallback() {
                this.enableUpdating()
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
                this._enableUpdatingResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(t, e, s) {
                e !== s && this._attributeToProperty(t, s)
            }
            _propertyToAttribute(t, e, s=Sd) {
                const i = this.constructor
                  , n = i._attributeNameForProperty(t, s);
                if (void 0 !== n) {
                    const t = i._propertyValueToAttribute(e, s);
                    if (void 0 === t)
                        return;
                    this._updateState = 8 | this._updateState,
                    null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
                    this._updateState = -9 & this._updateState
                }
            }
            _attributeToProperty(t, e) {
                if (8 & this._updateState)
                    return;
                const s = this.constructor
                  , i = s._attributeToPropertyMap.get(t);
                if (void 0 !== i) {
                    const t = s.getPropertyOptions(i);
                    this._updateState = 16 | this._updateState,
                    this[i] = s._propertyValueFromAttribute(e, t),
                    this._updateState = -17 & this._updateState
                }
            }
            requestUpdateInternal(t, e, s) {
                let i = !0;
                if (void 0 !== t) {
                    const n = this.constructor;
                    s = s || n.getPropertyOptions(t),
                    n._valueHasChanged(this[t], e, s.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
                    !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
                    this._reflectingProperties.set(t, s))) : i = !1
                }
                !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
            }
            requestUpdate(t, e) {
                return this.requestUpdateInternal(t, e),
                this.updateComplete
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise
                } catch (t) {}
                const t = this.performUpdate();
                return null != t && await t,
                !this._hasRequestedUpdate
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState
            }
            get hasUpdated() {
                return 1 & this._updateState
            }
            performUpdate() {
                if (!this._hasRequestedUpdate)
                    return;
                this._instanceProperties && this._applyInstanceProperties();
                let t = !1;
                const e = this._changedProperties;
                try {
                    t = this.shouldUpdate(e),
                    t ? this.update(e) : this._markUpdated()
                } catch (e) {
                    throw t = !1,
                    this._markUpdated(),
                    e
                }
                t && (1 & this._updateState || (this._updateState = 1 | this._updateState,
                this.firstUpdated(e)),
                this.updated(e))
            }
            _markUpdated() {
                this._changedProperties = new Map,
                this._updateState = -5 & this._updateState
            }
            get updateComplete() {
                return this._getUpdateComplete()
            }
            _getUpdateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._updatePromise
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach( (t, e) => this._propertyToAttribute(e, this[e], t)),
                this._reflectingProperties = void 0),
                this._markUpdated()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        xd[bd] = !0;
        const kd = Element.prototype;
        kd.msMatchesSelector || kd.webkitMatchesSelector;
        const Pd = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , Cd = Symbol();
        class Ad {
            constructor(t, e) {
                if (e !== Cd)
                    throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (Pd ? (this._styleSheet = new CSSStyleSheet,
                this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
                this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        const Ed = {};
        class Nd extends xd {
            static getStyles() {
                return this.styles
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
                    return;
                const t = this.getStyles();
                if (Array.isArray(t)) {
                    const e = (t, s) => t.reduceRight( (t, s) => Array.isArray(s) ? e(s, t) : (t.add(s),
                    t), s)
                      , s = e(t, new Set)
                      , i = [];
                    s.forEach(t => i.unshift(t)),
                    this._styles = i
                } else
                    this._styles = void 0 === t ? [] : [t];
                this._styles = this._styles.map(t => {
                    if (t instanceof CSSStyleSheet && !Pd) {
                        const e = Array.prototype.slice.call(t.cssRules).reduce( (t, e) => t + e.cssText, "");
                        return new Ad(String(e),Cd)
                    }
                    return t
                }
                )
            }
            initialize() {
                super.initialize(),
                this.constructor._getUniqueStyles(),
                this.renderRoot = this.createRenderRoot(),
                window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions)
            }
            adoptStyles() {
                const t = this.constructor._styles;
                0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Pd ? this.renderRoot.adoptedStyleSheets = t.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
            }
            update(t) {
                const e = this.render();
                super.update(t),
                e !== Ed && this.constructor.render(e, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }),
                this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
                this.constructor._styles.forEach(t => {
                    const e = document.createElement("style");
                    e.textContent = t.cssText,
                    this.renderRoot.appendChild(e)
                }
                ))
            }
            render() {
                return Ed
            }
        }
        Nd.finalized = !0,
        Nd.render = (t, e, s) => {
            if (!s || "object" != typeof s || !s.scopeName)
                throw new Error("The `scopeName` option is required.");
            const i = s.scopeName
              , n = hd.has(e)
              , r = fd && 11 === e.nodeType && !!e.host
              , o = r && !yd.has(i)
              , a = o ? document.createDocumentFragment() : e;
            if (( (t, e, s) => {
                let i = hd.get(e);
                void 0 === i && (Ml(e, e.firstChild),
                hd.set(e, i = new sd(Object.assign({
                    templateFactory: dd
                }, s))),
                i.appendInto(e)),
                i.setValue(t),
                i.commit()
            }
            )(t, a, Object.assign({
                templateFactory: gd(i)
            }, s)),
            o) {
                const t = hd.get(a);
                hd.delete(a);
                ( (t, e, s) => {
                    yd.add(t);
                    const i = s ? s.element : document.createElement("template")
                      , n = e.querySelectorAll("style")
                      , {length: r} = n;
                    if (0 === r)
                        return void window.ShadyCSS.prepareTemplateStyles(i, t);
                    const o = document.createElement("style");
                    for (let t = 0; t < r; t++) {
                        const e = n[t];
                        e.parentNode.removeChild(e),
                        o.textContent += e.textContent
                    }
                    (t => {
                        _d.forEach(e => {
                            const s = cd.get(md(e, t));
                            void 0 !== s && s.keyString.forEach(t => {
                                const {element: {content: e}} = t
                                  , s = new Set;
                                Array.from(e.querySelectorAll("style")).forEach(t => {
                                    s.add(t)
                                }
                                ),
                                Il(t, s)
                            }
                            )
                        }
                        )
                    }
                    )(t);
                    const a = i.content;
                    s ? function(t, e, s=null) {
                        const {element: {content: i}, parts: n} = t;
                        if (null == s)
                            return void i.appendChild(e);
                        const r = document.createTreeWalker(i, 133, null, !1);
                        let o = Fl(n)
                          , a = 0
                          , l = -1;
                        for (; r.nextNode(); )
                            for (l++,
                            r.currentNode === s && (a = Hl(e),
                            s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l; ) {
                                if (a > 0) {
                                    for (; -1 !== o; )
                                        n[o].index += a,
                                        o = Fl(n, o);
                                    return
                                }
                                o = Fl(n, o)
                            }
                    }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild),
                    window.ShadyCSS.prepareTemplateStyles(i, t);
                    const l = a.querySelector("style");
                    if (window.ShadyCSS.nativeShadow && null !== l)
                        e.insertBefore(l.cloneNode(!0), e.firstChild);
                    else if (s) {
                        a.insertBefore(o, a.firstChild);
                        const t = new Set;
                        t.add(o),
                        Il(s, t)
                    }
                }
                )(i, a, t.value instanceof Yl ? t.value.template : void 0),
                Ml(e, e.firstChild),
                e.appendChild(a),
                hd.set(e, t)
            }
            !n && r && window.ShadyCSS.styleElement(e.host)
        }
        ,
        Nd.shadowRootOptions = {
            mode: "open"
        };
        class Td extends (st(Nd)) {
            constructor() {
                super()
            }
            connectedCallback() {
                super.connectedCallback()
            }
            render() {
                return this._renderColorChanger()
            }
            _keyHandler(t) {
                switch (t.keyCode) {
                case 13:
                    if (this.querySelector(".colorchange .dropdown-menu").classList.add("show"),
                    this.querySelector("#cchangeBtn").setAttribute("aria-expanded", "true"),
                    t.target.classList.contains("dropdown-item"))
                        break;
                    t.preventDefault(),
                    this.querySelector(".colorchange .dropdown-menu .clr_normal").focus();
                    break;
                case 32:
                case 40:
                    this.querySelector(".colorchange .dropdown-menu").classList.add("show"),
                    this.querySelector("#cchangeBtn").setAttribute("aria-expanded", "true"),
                    this.querySelector(".colorchange .dropdown-menu .clr_normal").focus(),
                    t.preventDefault();
                    break;
                case 38:
                    this.querySelector(".colorchange .dropdown-menu").classList.remove("show"),
                    this.querySelector("#cchangeBtn").setAttribute("aria-expanded", "false"),
                    this.focus(),
                    t.preventDefault();
                    break;
                case 39:
                    t.target.nextElementSibling && t.target.nextElementSibling.focus(),
                    t.preventDefault();
                    break;
                case 37:
                    t.target.previousElementSibling && t.target.previousElementSibling.focus(),
                    t.preventDefault()
                }
            }
            _getDomain() {
                var t = location.hostname.split(".").slice(-2).join(".");
                return t.length < 4 ? location.hostname : t
            }
            _setColorCookie(t) {
                const e = new Date;
                e.setTime(e.getTime() + 31536e6);
                let s = "expires=" + e.toUTCString();
                document.cookie = "accessibility-ct=" + t + ";" + s + ";domain=" + this._getDomain() + ";path=/"
            }
            _getColorCookie() {
                let t = decodeURIComponent(document.cookie).split(";");
                for (let e = 0; e < t.length; e++) {
                    let s = t[e];
                    for (; " " == s.charAt(0); )
                        s = s.substring(1);
                    if (0 == s.indexOf("accessibility-ct="))
                        return s.substring(17, s.length)
                }
                return ""
            }
            _initColorchange() {
                this.querySelector(".colorchange .dropdown-menu").classList.remove("show"),
                this.querySelectorAll(".colorchange").forEach(function(t) {
                    t.classList.remove("active")
                }),
                this.querySelector("#cchangeBtn").setAttribute("aria-expanded", "false"),
                this._getColorCookie() ? (document.querySelector("html").classList.remove("ct-default", "ct-blue-yellow", "ct-yellow-blue", "ct-black-yellow", "ct-yellow-black", "ct-black-white", "ct-white-black"),
                document.querySelector("html").classList.add(this._getColorCookie())) : this._setColorCookie("ct-default")
            }
            _initColorChangeButtons() {
                this.querySelector(".dropdown-item.clr_normal").addEventListener("click", t => {
                    t.preventDefault(),
                    t.stopPropagation(),
                    this._setColorCookie("ct-default"),
                    this._initColorchange()
                }
                ),
                this.querySelector(".dropdown-item.clr_blue_yellow").addEventListener("click", t => {
                    t.preventDefault(),
                    t.stopPropagation(),
                    this._setColorCookie("ct-blue-yellow"),
                    this._initColorchange()
                }
                ),
                this.querySelector(".dropdown-item.clr_yellow_blue").addEventListener("click", t => {
                    t.preventDefault(),
                    t.stopPropagation(),
                    this._setColorCookie("ct-yellow-blue"),
                    this._initColorchange()
                }
                ),
                this.querySelector(".dropdown-item.clr_black_yellow").addEventListener("click", t => {
                    t.preventDefault(),
                    t.stopPropagation(),
                    this._setColorCookie("ct-black-yellow"),
                    this._initColorchange()
                }
                ),
                this.querySelector(".dropdown-item.clr_yellow_black").addEventListener("click", t => {
                    t.preventDefault(),
                    t.stopPropagation(),
                    this._setColorCookie("ct-yellow-black"),
                    this._initColorchange()
                }
                ),
                this.querySelector(".dropdown-item.clr_black_white").addEventListener("click", t => {
                    t.preventDefault(),
                    t.stopPropagation(),
                    this._setColorCookie("ct-black-white"),
                    this._initColorchange()
                }
                ),
                this.querySelector(".dropdown-item.clr_white_black").addEventListener("click", t => {
                    t.preventDefault(),
                    t.stopPropagation(),
                    this._setColorCookie("ct-white-black"),
                    this._initColorchange()
                }
                )
            }
            _renderColorChanger() {
                return ud`
            <style>

                .bt_topitem .clr {
                    width: 30px;
                    height: 30px;
                    background: #fff;
                    border: 1px solid #fff;
                }

                .bt_topitem .clr.clr_normal {
                    background: #fff;
                }

                .bt_topitem .clr.clr_blue_yellow {
                    background: linear-gradient(135deg,#00f,#00f 49.999%,#ff0 50.001%,#ff0);
                }

                .bt_topitem .clr.clr_yellow_blue {
                    background: linear-gradient(-45deg,#00f,#00f 49.999%,#ff0 50.001%,#ff0);
                }

                .bt_topitem .clr.clr_black_yellow {
                    background: linear-gradient(135deg,#000,#000 49.999%,#ff0 50.001%,#ff0);
                }

                .bt_topitem .clr.clr_yellow_black {
                    background: linear-gradient(-45deg,#000,#000 49.999%,#ff0 50.001%,#ff0);
                }

                .bt_topitem .clr.clr_black_white {
                    background: linear-gradient(135deg,#000,#000 49.999%,#fff 50.001%,#fff);
                }

                .bt_topitem .clr.clr_white_black {
                    background: linear-gradient(-45deg,#000,#000 49.999%,#fff 50.001%,#fff);
                }
            </style>


            <div class="colorchange">
                <div class="bt_side_crumb">
                    <a href="#" data-bs-toggle="dropdown" id="cchangeBtn" class="dropdown-toggle toptoggle" tabindex="-1" title="Farbe ändern" role="button" aria-haspopup="true" aria-expanded="false">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="29.407" height="20" viewBox="0 0 29.407 20">
                            <g id="svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOS40MDcyMSIgaGVpZ2h0PSIyMC4wMDAxNiIgdmlld0JveD0iMCAwIDI5LjQwNzIxIDIwLjA" data-name="svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOS40MDcyMSIgaGVpZ2h0PSIyMC4wMDAxNiIgdmlld0JveD0iMCAwIDI5LjQwNzIxIDIwLjA" transform="translate(0 0)">
                                <path id="Pfad_396" data-name="Pfad 396" d="M28.514,5.834l-1.607.714a8.264,8.264,0,0,1,.717,3.393c0,.3-.06.536-.06.774l1.726.179a5.946,5.946,0,0,1,.117-.952,9.816,9.816,0,0,0-.893-4.108Z"/>
                                <path id="Pfad_397" data-name="Pfad 397" d="M25.42,4.405l1.25-1.186L26.551,3.1A10.338,10.338,0,0,0,22.444.476l-.537,1.667A7.866,7.866,0,0,1,25.3,4.286Z"/>
                                <path id="Pfad_398" data-name="Pfad 398" d="M25,15.95c-.238.183-.476.421-.714.6l1.072,1.369a4.8,4.8,0,0,0,.833-.719,9.529,9.529,0,0,0,2.261-3.215l-1.607-.714A8.3,8.3,0,0,1,25,15.95Z"/>
                                <path id="Pfad_399" data-name="Pfad 399" d="M19.291,18.157a6.282,6.282,0,0,1-1.488-.119l-.3,1.726a9.7,9.7,0,0,0,1.845.179,9.5,9.5,0,0,0,3.158-.536L21.97,17.74a8.383,8.383,0,0,1-2.679.417Z"/>
                                <path id="Pfad_400" data-name="Pfad 400" d="M12.026,3.393a9.65,9.65,0,0,0,0,13.156,6,6,0,0,0,2.8-1.726A6.609,6.609,0,0,0,16.848,10a6.844,6.844,0,0,0-2.024-4.882,7.6,7.6,0,0,0-2.8-1.726Z"/>
                                <path id="Pfad_401" data-name="Pfad 401" d="M20,9.92A9.936,9.936,0,0,0,16.4,2.3a8.492,8.492,0,0,1,2.892-.57V0a10.609,10.609,0,0,0-4.634,1.136A9.91,9.91,0,0,0,10,0,10.152,10.152,0,0,0,2.917,2.917,9.9,9.9,0,0,0,0,10q0,.04,0,.08A9.96,9.96,0,0,0,10,20a10.152,10.152,0,0,0,7.083-2.916A9.9,9.9,0,0,0,20,10Q20,9.96,20,9.92Zm-4.166,5.915A8.007,8.007,0,0,1,10,18.276,8.275,8.275,0,1,1,15.834,4.167l.082.082a8.193,8.193,0,0,1-.082,11.586Z"/>
                            </g>
                        </svg>
                        <div aria-hidden="true" class="bt_downarrow"></div>
                    </a>

                    <div class="dropdown-menu rowshow" aria-labelledby="cchangeBtn" tabindex="-1" role="menu">
                        <a class="dropdown-item clr_normal" href="#" tabindex="1" title="normaler Kontrast"><div class='clr clr_normal'></div></a>
                        <a class="dropdown-item clr_blue_yellow" href="#" tabindex="1" title="blau-gelb Kontrast"><div class='clr clr_blue_yellow'></div></a>
                        <a class="dropdown-item clr_yellow_blue" href="#" tabindex="1" title="gelb-blau Kontrast"><div class='clr clr_yellow_blue'></div></a>
                        <a class="dropdown-item clr_black_yellow" href="#" tabindex="1" title="schwarz-gelb Kontrast"><div class='clr clr_black_yellow'></div></a>
                        <a class="dropdown-item clr_yellow_black" href="#" tabindex="1" title="gelb-schwarz Kontrast"><div class='clr clr_yellow_black'></div></a>
                        <a class="dropdown-item clr_black_white" href="#" tabindex="1" title="schwarz-weiß Kontrast"><div class='clr clr_black_white'></div></a>
                        <a class="dropdown-item clr_white_black" href="#" tabindex="1" title="weiß-schwarz Kontrast"><div class='clr clr_white_black'></div></a>
                    </div>
                </div>
            </div>
        `
            }
            firstUpdated() {
                return super.firstUpdated(),
                this._initColorchange(),
                this._initColorChangeButtons(),
                document.querySelector(".bt_topitem .colorchange").addEventListener("focusout", t => {
                    this.querySelector(".colorchange").contains(t.relatedTarget) || document.querySelector(".bt_topitem .colorchange .dropdown-menu").classList.remove("show")
                }
                ),
                this.addEventListener("keydown", t => {
                    this._keyHandler(t)
                }
                ),
                this._renderColorChanger()
            }
        }
        customElements.define("ug-colorchanger", Td);
        const Md = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
          , Ud = (t, e, s=null) => {
            for (; e !== s; ) {
                const s = e.nextSibling;
                t.removeChild(e),
                e = s
            }
        }
          , $d = `{{lit-${String(Math.random()).slice(2)}}}`
          , Vd = `\x3c!--${$d}--\x3e`
          , Ld = new RegExp(`${$d}|${Vd}`)
          , Od = "$lit$";
        class Rd {
            constructor(t, e) {
                this.parts = [],
                this.element = e;
                const s = []
                  , i = []
                  , n = document.createTreeWalker(e.content, 133, null, !1);
                let r = 0
                  , o = -1
                  , a = 0;
                const {strings: l, values: {length: d}} = t;
                for (; a < d; ) {
                    const t = n.nextNode();
                    if (null !== t) {
                        if (o++,
                        1 === t.nodeType) {
                            if (t.hasAttributes()) {
                                const e = t.attributes
                                  , {length: s} = e;
                                let i = 0;
                                for (let t = 0; t < s; t++)
                                    qd(e[t].name, Od) && i++;
                                for (; i-- > 0; ) {
                                    const e = l[a]
                                      , s = Id.exec(e)[2]
                                      , i = s.toLowerCase() + Od
                                      , n = t.getAttribute(i);
                                    t.removeAttribute(i);
                                    const r = n.split(Ld);
                                    this.parts.push({
                                        type: "attribute",
                                        index: o,
                                        name: s,
                                        strings: r
                                    }),
                                    a += r.length - 1
                                }
                            }
                            "TEMPLATE" === t.tagName && (i.push(t),
                            n.currentNode = t.content)
                        } else if (3 === t.nodeType) {
                            const e = t.data;
                            if (e.indexOf($d) >= 0) {
                                const i = t.parentNode
                                  , n = e.split(Ld)
                                  , r = n.length - 1;
                                for (let e = 0; e < r; e++) {
                                    let s, r = n[e];
                                    if ("" === r)
                                        s = zd();
                                    else {
                                        const t = Id.exec(r);
                                        null !== t && qd(t[2], Od) && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -5) + t[3]),
                                        s = document.createTextNode(r)
                                    }
                                    i.insertBefore(s, t),
                                    this.parts.push({
                                        type: "node",
                                        index: ++o
                                    })
                                }
                                "" === n[r] ? (i.insertBefore(zd(), t),
                                s.push(t)) : t.data = n[r],
                                a += r
                            }
                        } else if (8 === t.nodeType)
                            if (t.data === $d) {
                                const e = t.parentNode;
                                null !== t.previousSibling && o !== r || (o++,
                                e.insertBefore(zd(), t)),
                                r = o,
                                this.parts.push({
                                    type: "node",
                                    index: o
                                }),
                                null === t.nextSibling ? t.data = "" : (s.push(t),
                                o--),
                                a++
                            } else {
                                let e = -1;
                                for (; -1 !== (e = t.data.indexOf($d, e + 1)); )
                                    this.parts.push({
                                        type: "node",
                                        index: -1
                                    }),
                                    a++
                            }
                    } else
                        n.currentNode = i.pop()
                }
                for (const t of s)
                    t.parentNode.removeChild(t)
            }
        }
        const qd = (t, e) => {
            const s = t.length - e.length;
            return s >= 0 && t.slice(s) === e
        }
          , jd = t => -1 !== t.index
          , zd = () => document.createComment("")
          , Id = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        function Hd(t, e) {
            const {element: {content: s}, parts: i} = t
              , n = document.createTreeWalker(s, 133, null, !1);
            let r = Dd(i)
              , o = i[r]
              , a = -1
              , l = 0;
            const d = [];
            let c = null;
            for (; n.nextNode(); ) {
                a++;
                const t = n.currentNode;
                for (t.previousSibling === c && (c = null),
                e.has(t) && (d.push(t),
                null === c && (c = t)),
                null !== c && l++; void 0 !== o && o.index === a; )
                    o.index = null !== c ? -1 : o.index - l,
                    r = Dd(i, r),
                    o = i[r]
            }
            d.forEach(t => t.parentNode.removeChild(t))
        }
        const Fd = t => {
            let e = 11 === t.nodeType ? 0 : 1;
            const s = document.createTreeWalker(t, 133, null, !1);
            for (; s.nextNode(); )
                e++;
            return e
        }
          , Dd = (t, e=-1) => {
            for (let s = e + 1; s < t.length; s++) {
                const e = t[s];
                if (jd(e))
                    return s
            }
            return -1
        }
          , Bd = new WeakMap
          , Wd = t => "function" == typeof t && Bd.has(t)
          , Jd = {}
          , Yd = {};
        class Zd {
            constructor(t, e, s) {
                this.__parts = [],
                this.template = t,
                this.processor = e,
                this.options = s
            }
            update(t) {
                let e = 0;
                for (const s of this.__parts)
                    void 0 !== s && s.setValue(t[e]),
                    e++;
                for (const t of this.__parts)
                    void 0 !== t && t.commit()
            }
            _clone() {
                const t = Md ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                  , e = []
                  , s = this.template.parts
                  , i = document.createTreeWalker(t, 133, null, !1);
                let n, r = 0, o = 0, a = i.nextNode();
                for (; r < s.length; )
                    if (n = s[r],
                    jd(n)) {
                        for (; o < n.index; )
                            o++,
                            "TEMPLATE" === a.nodeName && (e.push(a),
                            i.currentNode = a.content),
                            null === (a = i.nextNode()) && (i.currentNode = e.pop(),
                            a = i.nextNode());
                        if ("node" === n.type) {
                            const t = this.processor.handleTextExpression(this.options);
                            t.insertAfterNode(a.previousSibling),
                            this.__parts.push(t)
                        } else
                            this.__parts.push(...this.processor.handleAttributeExpressions(a, n.name, n.strings, this.options));
                        r++
                    } else
                        this.__parts.push(void 0),
                        r++;
                return Md && (document.adoptNode(t),
                customElements.upgrade(t)),
                t
            }
        }
        const Gd = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: t => t
        })
          , Xd = ` ${$d} `;
        class Kd {
            constructor(t, e, s, i) {
                this.strings = t,
                this.values = e,
                this.type = s,
                this.processor = i
            }
            getHTML() {
                const t = this.strings.length - 1;
                let e = ""
                  , s = !1;
                for (let i = 0; i < t; i++) {
                    const t = this.strings[i]
                      , n = t.lastIndexOf("\x3c!--");
                    s = (n > -1 || s) && -1 === t.indexOf("--\x3e", n + 1);
                    const r = Id.exec(t);
                    e += null === r ? t + (s ? Xd : Vd) : t.substr(0, r.index) + r[1] + r[2] + Od + r[3] + $d
                }
                return e += this.strings[t],
                e
            }
            getTemplateElement() {
                const t = document.createElement("template");
                let e = this.getHTML();
                return void 0 !== Gd && (e = Gd.createHTML(e)),
                t.innerHTML = e,
                t
            }
        }
        const Qd = t => null === t || !("object" == typeof t || "function" == typeof t)
          , tc = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        class ec {
            constructor(t, e, s) {
                this.dirty = !0,
                this.element = t,
                this.name = e,
                this.strings = s,
                this.parts = [];
                for (let t = 0; t < s.length - 1; t++)
                    this.parts[t] = this._createPart()
            }
            _createPart() {
                return new sc(this)
            }
            _getValue() {
                const t = this.strings
                  , e = t.length - 1
                  , s = this.parts;
                if (1 === e && "" === t[0] && "" === t[1]) {
                    const t = s[0].value;
                    if ("symbol" == typeof t)
                        return String(t);
                    if ("string" == typeof t || !tc(t))
                        return t
                }
                let i = "";
                for (let n = 0; n < e; n++) {
                    i += t[n];
                    const e = s[n];
                    if (void 0 !== e) {
                        const t = e.value;
                        if (Qd(t) || !tc(t))
                            i += "string" == typeof t ? t : String(t);
                        else
                            for (const e of t)
                                i += "string" == typeof e ? e : String(e)
                    }
                }
                return i += t[e],
                i
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class sc {
            constructor(t) {
                this.value = void 0,
                this.committer = t
            }
            setValue(t) {
                t === Jd || Qd(t) && t === this.value || (this.value = t,
                Wd(t) || (this.committer.dirty = !0))
            }
            commit() {
                for (; Wd(this.value); ) {
                    const t = this.value;
                    this.value = Jd,
                    t(this)
                }
                this.value !== Jd && this.committer.commit()
            }
        }
        class ic {
            constructor(t) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.options = t
            }
            appendInto(t) {
                this.startNode = t.appendChild(zd()),
                this.endNode = t.appendChild(zd())
            }
            insertAfterNode(t) {
                this.startNode = t,
                this.endNode = t.nextSibling
            }
            appendIntoPart(t) {
                t.__insert(this.startNode = zd()),
                t.__insert(this.endNode = zd())
            }
            insertAfterPart(t) {
                t.__insert(this.startNode = zd()),
                this.endNode = t.endNode,
                t.endNode = this.startNode
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                if (null === this.startNode.parentNode)
                    return;
                for (; Wd(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Jd,
                    t(this)
                }
                const t = this.__pendingValue;
                t !== Jd && (Qd(t) ? t !== this.value && this.__commitText(t) : t instanceof Kd ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : tc(t) ? this.__commitIterable(t) : t === Yd ? (this.value = Yd,
                this.clear()) : this.__commitText(t))
            }
            __insert(t) {
                this.endNode.parentNode.insertBefore(t, this.endNode)
            }
            __commitNode(t) {
                this.value !== t && (this.clear(),
                this.__insert(t),
                this.value = t)
            }
            __commitText(t) {
                const e = this.startNode.nextSibling
                  , s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = s : this.__commitNode(document.createTextNode(s)),
                this.value = t
            }
            __commitTemplateResult(t) {
                const e = this.options.templateFactory(t);
                if (this.value instanceof Zd && this.value.template === e)
                    this.value.update(t.values);
                else {
                    const s = new Zd(e,t.processor,this.options)
                      , i = s._clone();
                    s.update(t.values),
                    this.__commitNode(i),
                    this.value = s
                }
            }
            __commitIterable(t) {
                Array.isArray(this.value) || (this.value = [],
                this.clear());
                const e = this.value;
                let s, i = 0;
                for (const n of t)
                    s = e[i],
                    void 0 === s && (s = new ic(this.options),
                    e.push(s),
                    0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
                    s.setValue(n),
                    s.commit(),
                    i++;
                i < e.length && (e.length = i,
                this.clear(s && s.endNode))
            }
            clear(t=this.startNode) {
                Ud(this.startNode.parentNode, t.nextSibling, this.endNode)
            }
        }
        class nc {
            constructor(t, e, s) {
                if (this.value = void 0,
                this.__pendingValue = void 0,
                2 !== s.length || "" !== s[0] || "" !== s[1])
                    throw new Error("Boolean attributes can only contain a single expression");
                this.element = t,
                this.name = e,
                this.strings = s
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; Wd(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Jd,
                    t(this)
                }
                if (this.__pendingValue === Jd)
                    return;
                const t = !!this.__pendingValue;
                this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = t),
                this.__pendingValue = Jd
            }
        }
        class rc extends ec {
            constructor(t, e, s) {
                super(t, e, s),
                this.single = 2 === s.length && "" === s[0] && "" === s[1]
            }
            _createPart() {
                return new oc(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element[this.name] = this._getValue())
            }
        }
        class oc extends sc {
        }
        let ac = !1;
        ( () => {
            try {
                const t = {
                    get capture() {
                        return ac = !0,
                        !1
                    }
                };
                window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t)
            } catch (t) {}
        }
        )();
        class lc {
            constructor(t, e, s) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.element = t,
                this.eventName = e,
                this.eventContext = s,
                this.__boundHandleEvent = t => this.handleEvent(t)
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; Wd(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Jd,
                    t(this)
                }
                if (this.__pendingValue === Jd)
                    return;
                const t = this.__pendingValue
                  , e = this.value
                  , s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
                  , i = null != t && (null == e || s);
                s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                i && (this.__options = dc(t),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                this.value = t,
                this.__pendingValue = Jd
            }
            handleEvent(t) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
            }
        }
        const dc = t => t && (ac ? {
            capture: t.capture,
            passive: t.passive,
            once: t.once
        } : t.capture);
        function cc(t) {
            let e = hc.get(t.type);
            void 0 === e && (e = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            hc.set(t.type, e));
            let s = e.stringsArray.get(t.strings);
            if (void 0 !== s)
                return s;
            const i = t.strings.join($d);
            return s = e.keyString.get(i),
            void 0 === s && (s = new Rd(t,t.getTemplateElement()),
            e.keyString.set(i, s)),
            e.stringsArray.set(t.strings, s),
            s
        }
        const hc = new Map
          , pc = new WeakMap
          , uc = new class {
            handleAttributeExpressions(t, e, s, i) {
                const n = e[0];
                return "." === n ? new rc(t,e.slice(1),s).parts : "@" === n ? [new lc(t,e.slice(1),i.eventContext)] : "?" === n ? [new nc(t,e.slice(1),s)] : new ec(t,e,s).parts
            }
            handleTextExpression(t) {
                return new ic(t)
            }
        }
        ;
        "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        const mc = (t, ...e) => new Kd(t,e,"html",uc)
          , fc = (t, e) => `${t}--${e}`;
        let gc = !0;
        void 0 === window.ShadyCSS ? gc = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
        gc = !1);
        const _c = t => e => {
            const s = fc(e.type, t);
            let i = hc.get(s);
            void 0 === i && (i = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            hc.set(s, i));
            let n = i.stringsArray.get(e.strings);
            if (void 0 !== n)
                return n;
            const r = e.strings.join($d);
            if (n = i.keyString.get(r),
            void 0 === n) {
                const s = e.getTemplateElement();
                gc && window.ShadyCSS.prepareTemplateDom(s, t),
                n = new Rd(e,s),
                i.keyString.set(r, n)
            }
            return i.stringsArray.set(e.strings, n),
            n
        }
          , yc = ["html", "svg"]
          , vc = new Set;
        window.JSCompiler_renameProperty = (t, e) => t;
        const wc = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t)
                }
                return t
            }
        }
          , Sc = (t, e) => e !== t && (e == e || t == t)
          , bc = {
            attribute: !0,
            type: String,
            converter: wc,
            reflect: !1,
            hasChanged: Sc
        }
          , xc = "finalized";
        class kc extends HTMLElement {
            constructor() {
                super(),
                this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this._classProperties.forEach( (e, s) => {
                    const i = this._attributeNameForProperty(s, e);
                    void 0 !== i && (this._attributeToPropertyMap.set(i, s),
                    t.push(i))
                }
                ),
                t
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const t = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== t && t.forEach( (t, e) => this._classProperties.set(e, t))
                }
            }
            static createProperty(t, e=bc) {
                if (this._ensureClassProperties(),
                this._classProperties.set(t, e),
                e.noAccessor || this.prototype.hasOwnProperty(t))
                    return;
                const s = "symbol" == typeof t ? Symbol() : `__${t}`
                  , i = this.getPropertyDescriptor(t, s, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i)
            }
            static getPropertyDescriptor(t, e, s) {
                return {
                    get() {
                        return this[e]
                    },
                    set(i) {
                        const n = this[t];
                        this[e] = i,
                        this.requestUpdateInternal(t, n, s)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this._classProperties && this._classProperties.get(t) || bc
            }
            static finalize() {
                const t = Object.getPrototypeOf(this);
                if (t.hasOwnProperty(xc) || t.finalize(),
                this[xc] = !0,
                this._ensureClassProperties(),
                this._attributeToPropertyMap = new Map,
                this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
                    for (const s of e)
                        this.createProperty(s, t[s])
                }
            }
            static _attributeNameForProperty(t, e) {
                const s = e.attribute;
                return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
            }
            static _valueHasChanged(t, e, s=Sc) {
                return s(t, e)
            }
            static _propertyValueFromAttribute(t, e) {
                const s = e.type
                  , i = e.converter || wc
                  , n = "function" == typeof i ? i : i.fromAttribute;
                return n ? n(t, s) : t
            }
            static _propertyValueToAttribute(t, e) {
                if (void 0 === e.reflect)
                    return;
                const s = e.type
                  , i = e.converter;
                return (i && i.toAttribute || wc.toAttribute)(t, s)
            }
            initialize() {
                this._updateState = 0,
                this._updatePromise = new Promise(t => this._enableUpdatingResolver = t),
                this._changedProperties = new Map,
                this._saveInstanceProperties(),
                this.requestUpdateInternal()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach( (t, e) => {
                    if (this.hasOwnProperty(e)) {
                        const t = this[e];
                        delete this[e],
                        this._instanceProperties || (this._instanceProperties = new Map),
                        this._instanceProperties.set(e, t)
                    }
                }
                )
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach( (t, e) => this[e] = t),
                this._instanceProperties = void 0
            }
            connectedCallback() {
                this.enableUpdating()
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
                this._enableUpdatingResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(t, e, s) {
                e !== s && this._attributeToProperty(t, s)
            }
            _propertyToAttribute(t, e, s=bc) {
                const i = this.constructor
                  , n = i._attributeNameForProperty(t, s);
                if (void 0 !== n) {
                    const t = i._propertyValueToAttribute(e, s);
                    if (void 0 === t)
                        return;
                    this._updateState = 8 | this._updateState,
                    null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
                    this._updateState = -9 & this._updateState
                }
            }
            _attributeToProperty(t, e) {
                if (8 & this._updateState)
                    return;
                const s = this.constructor
                  , i = s._attributeToPropertyMap.get(t);
                if (void 0 !== i) {
                    const t = s.getPropertyOptions(i);
                    this._updateState = 16 | this._updateState,
                    this[i] = s._propertyValueFromAttribute(e, t),
                    this._updateState = -17 & this._updateState
                }
            }
            requestUpdateInternal(t, e, s) {
                let i = !0;
                if (void 0 !== t) {
                    const n = this.constructor;
                    s = s || n.getPropertyOptions(t),
                    n._valueHasChanged(this[t], e, s.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
                    !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
                    this._reflectingProperties.set(t, s))) : i = !1
                }
                !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
            }
            requestUpdate(t, e) {
                return this.requestUpdateInternal(t, e),
                this.updateComplete
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise
                } catch (t) {}
                const t = this.performUpdate();
                return null != t && await t,
                !this._hasRequestedUpdate
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState
            }
            get hasUpdated() {
                return 1 & this._updateState
            }
            performUpdate() {
                if (!this._hasRequestedUpdate)
                    return;
                this._instanceProperties && this._applyInstanceProperties();
                let t = !1;
                const e = this._changedProperties;
                try {
                    t = this.shouldUpdate(e),
                    t ? this.update(e) : this._markUpdated()
                } catch (e) {
                    throw t = !1,
                    this._markUpdated(),
                    e
                }
                t && (1 & this._updateState || (this._updateState = 1 | this._updateState,
                this.firstUpdated(e)),
                this.updated(e))
            }
            _markUpdated() {
                this._changedProperties = new Map,
                this._updateState = -5 & this._updateState
            }
            get updateComplete() {
                return this._getUpdateComplete()
            }
            _getUpdateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._updatePromise
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach( (t, e) => this._propertyToAttribute(e, this[e], t)),
                this._reflectingProperties = void 0),
                this._markUpdated()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        kc[xc] = !0;
        const Pc = Element.prototype;
        Pc.msMatchesSelector || Pc.webkitMatchesSelector;
        const Cc = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , Ac = Symbol();
        class Ec {
            constructor(t, e) {
                if (e !== Ac)
                    throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (Cc ? (this._styleSheet = new CSSStyleSheet,
                this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
                this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        const Nc = (t, ...e) => {
            const s = e.reduce( (e, s, i) => e + (t => {
                if (t instanceof Ec)
                    return t.cssText;
                if ("number" == typeof t)
                    return t;
                throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
            }
            )(s) + t[i + 1], t[0]);
            return new Ec(s,Ac)
        }
        ;
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        const Tc = {};
        class Mc extends kc {
            static getStyles() {
                return this.styles
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
                    return;
                const t = this.getStyles();
                if (Array.isArray(t)) {
                    const e = (t, s) => t.reduceRight( (t, s) => Array.isArray(s) ? e(s, t) : (t.add(s),
                    t), s)
                      , s = e(t, new Set)
                      , i = [];
                    s.forEach(t => i.unshift(t)),
                    this._styles = i
                } else
                    this._styles = void 0 === t ? [] : [t];
                this._styles = this._styles.map(t => {
                    if (t instanceof CSSStyleSheet && !Cc) {
                        const e = Array.prototype.slice.call(t.cssRules).reduce( (t, e) => t + e.cssText, "");
                        return new Ec(String(e),Ac)
                    }
                    return t
                }
                )
            }
            initialize() {
                super.initialize(),
                this.constructor._getUniqueStyles(),
                this.renderRoot = this.createRenderRoot(),
                window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions)
            }
            adoptStyles() {
                const t = this.constructor._styles;
                0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Cc ? this.renderRoot.adoptedStyleSheets = t.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
            }
            update(t) {
                const e = this.render();
                super.update(t),
                e !== Tc && this.constructor.render(e, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }),
                this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
                this.constructor._styles.forEach(t => {
                    const e = document.createElement("style");
                    e.textContent = t.cssText,
                    this.renderRoot.appendChild(e)
                }
                ))
            }
            render() {
                return Tc
            }
        }
        Mc.finalized = !0,
        Mc.render = (t, e, s) => {
            if (!s || "object" != typeof s || !s.scopeName)
                throw new Error("The `scopeName` option is required.");
            const i = s.scopeName
              , n = pc.has(e)
              , r = gc && 11 === e.nodeType && !!e.host
              , o = r && !vc.has(i)
              , a = o ? document.createDocumentFragment() : e;
            if (( (t, e, s) => {
                let i = pc.get(e);
                void 0 === i && (Ud(e, e.firstChild),
                pc.set(e, i = new ic(Object.assign({
                    templateFactory: cc
                }, s))),
                i.appendInto(e)),
                i.setValue(t),
                i.commit()
            }
            )(t, a, Object.assign({
                templateFactory: _c(i)
            }, s)),
            o) {
                const t = pc.get(a);
                pc.delete(a);
                ( (t, e, s) => {
                    vc.add(t);
                    const i = s ? s.element : document.createElement("template")
                      , n = e.querySelectorAll("style")
                      , {length: r} = n;
                    if (0 === r)
                        return void window.ShadyCSS.prepareTemplateStyles(i, t);
                    const o = document.createElement("style");
                    for (let t = 0; t < r; t++) {
                        const e = n[t];
                        e.parentNode.removeChild(e),
                        o.textContent += e.textContent
                    }
                    (t => {
                        yc.forEach(e => {
                            const s = hc.get(fc(e, t));
                            void 0 !== s && s.keyString.forEach(t => {
                                const {element: {content: e}} = t
                                  , s = new Set;
                                Array.from(e.querySelectorAll("style")).forEach(t => {
                                    s.add(t)
                                }
                                ),
                                Hd(t, s)
                            }
                            )
                        }
                        )
                    }
                    )(t);
                    const a = i.content;
                    s ? function(t, e, s=null) {
                        const {element: {content: i}, parts: n} = t;
                        if (null == s)
                            return void i.appendChild(e);
                        const r = document.createTreeWalker(i, 133, null, !1);
                        let o = Dd(n)
                          , a = 0
                          , l = -1;
                        for (; r.nextNode(); )
                            for (l++,
                            r.currentNode === s && (a = Fd(e),
                            s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l; ) {
                                if (a > 0) {
                                    for (; -1 !== o; )
                                        n[o].index += a,
                                        o = Dd(n, o);
                                    return
                                }
                                o = Dd(n, o)
                            }
                    }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild),
                    window.ShadyCSS.prepareTemplateStyles(i, t);
                    const l = a.querySelector("style");
                    if (window.ShadyCSS.nativeShadow && null !== l)
                        e.insertBefore(l.cloneNode(!0), e.firstChild);
                    else if (s) {
                        a.insertBefore(o, a.firstChild);
                        const t = new Set;
                        t.add(o),
                        Hd(s, t)
                    }
                }
                )(i, a, t.value instanceof Zd ? t.value.template : void 0),
                Ud(e, e.firstChild),
                e.appendChild(a),
                pc.set(e, t)
            }
            !n && r && window.ShadyCSS.styleElement(e.host)
        }
        ,
        Mc.shadowRootOptions = {
            mode: "open"
        },
        customElements.define("ug-columnswitch", class extends Mc {
            static get styles() {
                return Nc`
            ::slotted(a) {
                text-decoration: none;
                height: 60px;
                padding-left: 19px;
                padding-right: 28px;
                padding-top: 22px;
                display: inline-block;
            }
        `
            }
            static get properties() {
                return {
                    ontitle: {
                        type: String
                    },
                    offtitle: {
                        type: String
                    }
                }
            }
            constructor() {
                super()
            }
            connectedCallback() {
                super.connectedCallback(),
                this.onSwitch = document.createElement("a"),
                this.onSwitch.href = "#",
                this.onSwitch.title = this.ontitle,
                this.onSwitch.id = "accessibility-magnified-on",
                this.onSwitch.addEventListener("click", this._toggle.bind(this)),
                this.onSwitch.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M24,11.5a1,1,0,0,0-1-1H20.75a.25.25,0,0,1-.25-.25V9.5a1,1,0,0,0-1.707-.707l-2,2a1,1,0,0,0,0,1.414l2,2A1,1,0,0,0,20.5,13.5v-.75a.25.25,0,0,1,.25-.25H23A1,1,0,0,0,24,11.5Z"/><path d="M15,0a1,1,0,0,0-1,1V23a1,1,0,1,0,2,0V1A1,1,0,0,0,15,0Z"/><path d="M10.5,20.5h-9a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"/><path d="M10.5.5H1a1,1,0,0,0,0,2h9.5a1,1,0,0,0,0-2Z"/><path d="M10.5,5.5h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z"/><path d="M10.5,10.5H1a1,1,0,0,0,0,2h9.5a1,1,0,0,0,0-2Z"/><path d="M10.5,15.5h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z"/></svg>',
                this.offSwitch = document.createElement("a"),
                this.offSwitch.href = "#",
                this.offSwitch.title = this.offtitle,
                this.offSwitch.id = "accessibility-magnified-off",
                this.offSwitch.addEventListener("click", this._toggle.bind(this)),
                this.offSwitch.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M14,21H1a1,1,0,0,0,0,2H14a1,1,0,1,0,0-2Z"/><path d="M1,3H14a1,1,0,0,0,0-2H1A1,1,0,0,0,1,3Z"/><path d="M1,8H7A1,1,0,0,0,7,6H1A1,1,0,0,0,1,8Z"/><path d="M1,13H7a1,1,0,0,0,0-2H1a1,1,0,0,0,0,2Z"/><path d="M1,18H7a1,1,0,1,0,0-2H1a1,1,0,0,0,0,2Z"/><path d="M23.664,11.251l-4.5-4A1,1,0,0,0,17.5,8v2.75a.25.25,0,0,1-.25.25H11a1,1,0,0,0,0,2h6.25a.25.25,0,0,1,.25.25V16a1,1,0,0,0,.591.912A.978.978,0,0,0,18.5,17a1,1,0,0,0,.664-.253l4.5-4a1,1,0,0,0,0-1.494Z"/></svg>',
                this.append(this.onSwitch, this.offSwitch),
                this.updated()
            }
            disconnectedCallback() {
                super.disconnectedCallback(),
                this.onSwitch.remove(),
                this.offSwitch.remove()
            }
            render() {
                return mc`
            <slot ></slot>
        `
            }
            _getDomain() {
                var t = location.hostname.split(".").slice(-2).join(".");
                return t.length < 4 ? location.hostname : t
            }
            _deleteCookie() {
                document.cookie = "accessibility-mg=;expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=" + this._getDomain() + ";path=/",
                this._pageHasTable() && location.reload()
            }
            _setCookie() {
                const t = new Date;
                t.setTime(t.getTime() + 31536e6);
                let e = "expires=" + t.toUTCString();
                document.cookie = "accessibility-mg=1;" + e + ";domain=" + this._getDomain() + ";path=/",
                document.cookie = "accessibility-lyt=lyt-cols-1; " + e + ";domain=" + this._getDomain() + ";path=/",
                this._pageHasTable() && location.reload()
            }
            _getCookie() {
                let t = decodeURIComponent(document.cookie).split(";");
                for (let e = 0; e < t.length; e++) {
                    let s = t[e];
                    for (; " " == s.charAt(0); )
                        s = s.substring(1);
                    if (0 == s.indexOf("accessibility-mg="))
                        return s.substring(17, s.length)
                }
                return ""
            }
            _pageHasTable() {
                return document.querySelectorAll("ug-bootstraptable, table").length > 0
            }
            _init() {
                this._getCookie() && document.querySelector("html").classList.add("accesibility-magnified")
            }
            _toggle(t) {
                t.preventDefault(),
                this._getCookie() ? (document.querySelector("html").classList.remove("accessibility-magnified"),
                this._deleteCookie(),
                this.onSwitch.classList.remove("d-none"),
                this.offSwitch.classList.add("d-none"),
                setTimeout( () => {
                    window.dispatchEvent(new Event("resize"))
                }
                , 100)) : (document.querySelector("html").classList.add("accessibility-magnified"),
                this._setCookie(),
                this.onSwitch.classList.add("d-none"),
                this.offSwitch.classList.remove("d-none"),
                setTimeout( () => {
                    window.dispatchEvent(new Event("resize"))
                }
                , 100))
            }
            updated() {
                this._getCookie() ? (document.querySelector("html").classList.add("accessibility-magnified"),
                this.onSwitch.classList.add("d-none"),
                this.offSwitch.classList.remove("d-none"),
                setTimeout( () => {
                    window.dispatchEvent(new Event("resize"))
                }
                , 100)) : (document.querySelector("html").classList.remove("accessibility-magnified"),
                this.onSwitch.classList.remove("d-none"),
                this.offSwitch.classList.add("d-none"),
                setTimeout( () => {
                    window.dispatchEvent(new Event("resize"))
                }
                , 100))
            }
        }
        );
        const Uc = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
          , $c = (t, e, s=null) => {
            for (; e !== s; ) {
                const s = e.nextSibling;
                t.removeChild(e),
                e = s
            }
        }
          , Vc = `{{lit-${String(Math.random()).slice(2)}}}`
          , Lc = `\x3c!--${Vc}--\x3e`
          , Oc = new RegExp(`${Vc}|${Lc}`)
          , Rc = "$lit$";
        class qc {
            constructor(t, e) {
                this.parts = [],
                this.element = e;
                const s = []
                  , i = []
                  , n = document.createTreeWalker(e.content, 133, null, !1);
                let r = 0
                  , o = -1
                  , a = 0;
                const {strings: l, values: {length: d}} = t;
                for (; a < d; ) {
                    const t = n.nextNode();
                    if (null !== t) {
                        if (o++,
                        1 === t.nodeType) {
                            if (t.hasAttributes()) {
                                const e = t.attributes
                                  , {length: s} = e;
                                let i = 0;
                                for (let t = 0; t < s; t++)
                                    jc(e[t].name, Rc) && i++;
                                for (; i-- > 0; ) {
                                    const e = l[a]
                                      , s = Hc.exec(e)[2]
                                      , i = s.toLowerCase() + Rc
                                      , n = t.getAttribute(i);
                                    t.removeAttribute(i);
                                    const r = n.split(Oc);
                                    this.parts.push({
                                        type: "attribute",
                                        index: o,
                                        name: s,
                                        strings: r
                                    }),
                                    a += r.length - 1
                                }
                            }
                            "TEMPLATE" === t.tagName && (i.push(t),
                            n.currentNode = t.content)
                        } else if (3 === t.nodeType) {
                            const e = t.data;
                            if (e.indexOf(Vc) >= 0) {
                                const i = t.parentNode
                                  , n = e.split(Oc)
                                  , r = n.length - 1;
                                for (let e = 0; e < r; e++) {
                                    let s, r = n[e];
                                    if ("" === r)
                                        s = Ic();
                                    else {
                                        const t = Hc.exec(r);
                                        null !== t && jc(t[2], Rc) && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -5) + t[3]),
                                        s = document.createTextNode(r)
                                    }
                                    i.insertBefore(s, t),
                                    this.parts.push({
                                        type: "node",
                                        index: ++o
                                    })
                                }
                                "" === n[r] ? (i.insertBefore(Ic(), t),
                                s.push(t)) : t.data = n[r],
                                a += r
                            }
                        } else if (8 === t.nodeType)
                            if (t.data === Vc) {
                                const e = t.parentNode;
                                null !== t.previousSibling && o !== r || (o++,
                                e.insertBefore(Ic(), t)),
                                r = o,
                                this.parts.push({
                                    type: "node",
                                    index: o
                                }),
                                null === t.nextSibling ? t.data = "" : (s.push(t),
                                o--),
                                a++
                            } else {
                                let e = -1;
                                for (; -1 !== (e = t.data.indexOf(Vc, e + 1)); )
                                    this.parts.push({
                                        type: "node",
                                        index: -1
                                    }),
                                    a++
                            }
                    } else
                        n.currentNode = i.pop()
                }
                for (const t of s)
                    t.parentNode.removeChild(t)
            }
        }
        const jc = (t, e) => {
            const s = t.length - e.length;
            return s >= 0 && t.slice(s) === e
        }
          , zc = t => -1 !== t.index
          , Ic = () => document.createComment("")
          , Hc = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        function Fc(t, e) {
            const {element: {content: s}, parts: i} = t
              , n = document.createTreeWalker(s, 133, null, !1);
            let r = Bc(i)
              , o = i[r]
              , a = -1
              , l = 0;
            const d = [];
            let c = null;
            for (; n.nextNode(); ) {
                a++;
                const t = n.currentNode;
                for (t.previousSibling === c && (c = null),
                e.has(t) && (d.push(t),
                null === c && (c = t)),
                null !== c && l++; void 0 !== o && o.index === a; )
                    o.index = null !== c ? -1 : o.index - l,
                    r = Bc(i, r),
                    o = i[r]
            }
            d.forEach(t => t.parentNode.removeChild(t))
        }
        const Dc = t => {
            let e = 11 === t.nodeType ? 0 : 1;
            const s = document.createTreeWalker(t, 133, null, !1);
            for (; s.nextNode(); )
                e++;
            return e
        }
          , Bc = (t, e=-1) => {
            for (let s = e + 1; s < t.length; s++) {
                const e = t[s];
                if (zc(e))
                    return s
            }
            return -1
        }
          , Wc = new WeakMap
          , Jc = t => "function" == typeof t && Wc.has(t)
          , Yc = {}
          , Zc = {};
        class Gc {
            constructor(t, e, s) {
                this.__parts = [],
                this.template = t,
                this.processor = e,
                this.options = s
            }
            update(t) {
                let e = 0;
                for (const s of this.__parts)
                    void 0 !== s && s.setValue(t[e]),
                    e++;
                for (const t of this.__parts)
                    void 0 !== t && t.commit()
            }
            _clone() {
                const t = Uc ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                  , e = []
                  , s = this.template.parts
                  , i = document.createTreeWalker(t, 133, null, !1);
                let n, r = 0, o = 0, a = i.nextNode();
                for (; r < s.length; )
                    if (n = s[r],
                    zc(n)) {
                        for (; o < n.index; )
                            o++,
                            "TEMPLATE" === a.nodeName && (e.push(a),
                            i.currentNode = a.content),
                            null === (a = i.nextNode()) && (i.currentNode = e.pop(),
                            a = i.nextNode());
                        if ("node" === n.type) {
                            const t = this.processor.handleTextExpression(this.options);
                            t.insertAfterNode(a.previousSibling),
                            this.__parts.push(t)
                        } else
                            this.__parts.push(...this.processor.handleAttributeExpressions(a, n.name, n.strings, this.options));
                        r++
                    } else
                        this.__parts.push(void 0),
                        r++;
                return Uc && (document.adoptNode(t),
                customElements.upgrade(t)),
                t
            }
        }
        const Xc = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: t => t
        })
          , Kc = ` ${Vc} `;
        class Qc {
            constructor(t, e, s, i) {
                this.strings = t,
                this.values = e,
                this.type = s,
                this.processor = i
            }
            getHTML() {
                const t = this.strings.length - 1;
                let e = ""
                  , s = !1;
                for (let i = 0; i < t; i++) {
                    const t = this.strings[i]
                      , n = t.lastIndexOf("\x3c!--");
                    s = (n > -1 || s) && -1 === t.indexOf("--\x3e", n + 1);
                    const r = Hc.exec(t);
                    e += null === r ? t + (s ? Kc : Lc) : t.substr(0, r.index) + r[1] + r[2] + Rc + r[3] + Vc
                }
                return e += this.strings[t],
                e
            }
            getTemplateElement() {
                const t = document.createElement("template");
                let e = this.getHTML();
                return void 0 !== Xc && (e = Xc.createHTML(e)),
                t.innerHTML = e,
                t
            }
        }
        const th = t => null === t || !("object" == typeof t || "function" == typeof t)
          , eh = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        class sh {
            constructor(t, e, s) {
                this.dirty = !0,
                this.element = t,
                this.name = e,
                this.strings = s,
                this.parts = [];
                for (let t = 0; t < s.length - 1; t++)
                    this.parts[t] = this._createPart()
            }
            _createPart() {
                return new ih(this)
            }
            _getValue() {
                const t = this.strings
                  , e = t.length - 1
                  , s = this.parts;
                if (1 === e && "" === t[0] && "" === t[1]) {
                    const t = s[0].value;
                    if ("symbol" == typeof t)
                        return String(t);
                    if ("string" == typeof t || !eh(t))
                        return t
                }
                let i = "";
                for (let n = 0; n < e; n++) {
                    i += t[n];
                    const e = s[n];
                    if (void 0 !== e) {
                        const t = e.value;
                        if (th(t) || !eh(t))
                            i += "string" == typeof t ? t : String(t);
                        else
                            for (const e of t)
                                i += "string" == typeof e ? e : String(e)
                    }
                }
                return i += t[e],
                i
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class ih {
            constructor(t) {
                this.value = void 0,
                this.committer = t
            }
            setValue(t) {
                t === Yc || th(t) && t === this.value || (this.value = t,
                Jc(t) || (this.committer.dirty = !0))
            }
            commit() {
                for (; Jc(this.value); ) {
                    const t = this.value;
                    this.value = Yc,
                    t(this)
                }
                this.value !== Yc && this.committer.commit()
            }
        }
        class nh {
            constructor(t) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.options = t
            }
            appendInto(t) {
                this.startNode = t.appendChild(Ic()),
                this.endNode = t.appendChild(Ic())
            }
            insertAfterNode(t) {
                this.startNode = t,
                this.endNode = t.nextSibling
            }
            appendIntoPart(t) {
                t.__insert(this.startNode = Ic()),
                t.__insert(this.endNode = Ic())
            }
            insertAfterPart(t) {
                t.__insert(this.startNode = Ic()),
                this.endNode = t.endNode,
                t.endNode = this.startNode
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                if (null === this.startNode.parentNode)
                    return;
                for (; Jc(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Yc,
                    t(this)
                }
                const t = this.__pendingValue;
                t !== Yc && (th(t) ? t !== this.value && this.__commitText(t) : t instanceof Qc ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : eh(t) ? this.__commitIterable(t) : t === Zc ? (this.value = Zc,
                this.clear()) : this.__commitText(t))
            }
            __insert(t) {
                this.endNode.parentNode.insertBefore(t, this.endNode)
            }
            __commitNode(t) {
                this.value !== t && (this.clear(),
                this.__insert(t),
                this.value = t)
            }
            __commitText(t) {
                const e = this.startNode.nextSibling
                  , s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = s : this.__commitNode(document.createTextNode(s)),
                this.value = t
            }
            __commitTemplateResult(t) {
                const e = this.options.templateFactory(t);
                if (this.value instanceof Gc && this.value.template === e)
                    this.value.update(t.values);
                else {
                    const s = new Gc(e,t.processor,this.options)
                      , i = s._clone();
                    s.update(t.values),
                    this.__commitNode(i),
                    this.value = s
                }
            }
            __commitIterable(t) {
                Array.isArray(this.value) || (this.value = [],
                this.clear());
                const e = this.value;
                let s, i = 0;
                for (const n of t)
                    s = e[i],
                    void 0 === s && (s = new nh(this.options),
                    e.push(s),
                    0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
                    s.setValue(n),
                    s.commit(),
                    i++;
                i < e.length && (e.length = i,
                this.clear(s && s.endNode))
            }
            clear(t=this.startNode) {
                $c(this.startNode.parentNode, t.nextSibling, this.endNode)
            }
        }
        class rh {
            constructor(t, e, s) {
                if (this.value = void 0,
                this.__pendingValue = void 0,
                2 !== s.length || "" !== s[0] || "" !== s[1])
                    throw new Error("Boolean attributes can only contain a single expression");
                this.element = t,
                this.name = e,
                this.strings = s
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; Jc(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Yc,
                    t(this)
                }
                if (this.__pendingValue === Yc)
                    return;
                const t = !!this.__pendingValue;
                this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = t),
                this.__pendingValue = Yc
            }
        }
        class oh extends sh {
            constructor(t, e, s) {
                super(t, e, s),
                this.single = 2 === s.length && "" === s[0] && "" === s[1]
            }
            _createPart() {
                return new ah(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element[this.name] = this._getValue())
            }
        }
        class ah extends ih {
        }
        let lh = !1;
        ( () => {
            try {
                const t = {
                    get capture() {
                        return lh = !0,
                        !1
                    }
                };
                window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t)
            } catch (t) {}
        }
        )();
        class dh {
            constructor(t, e, s) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.element = t,
                this.eventName = e,
                this.eventContext = s,
                this.__boundHandleEvent = t => this.handleEvent(t)
            }
            setValue(t) {
                this.__pendingValue = t
            }
            commit() {
                for (; Jc(this.__pendingValue); ) {
                    const t = this.__pendingValue;
                    this.__pendingValue = Yc,
                    t(this)
                }
                if (this.__pendingValue === Yc)
                    return;
                const t = this.__pendingValue
                  , e = this.value
                  , s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
                  , i = null != t && (null == e || s);
                s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                i && (this.__options = ch(t),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                this.value = t,
                this.__pendingValue = Yc
            }
            handleEvent(t) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
            }
        }
        const ch = t => t && (lh ? {
            capture: t.capture,
            passive: t.passive,
            once: t.once
        } : t.capture);
        function hh(t) {
            let e = ph.get(t.type);
            void 0 === e && (e = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            ph.set(t.type, e));
            let s = e.stringsArray.get(t.strings);
            if (void 0 !== s)
                return s;
            const i = t.strings.join(Vc);
            return s = e.keyString.get(i),
            void 0 === s && (s = new qc(t,t.getTemplateElement()),
            e.keyString.set(i, s)),
            e.stringsArray.set(t.strings, s),
            s
        }
        const ph = new Map
          , uh = new WeakMap
          , mh = new class {
            handleAttributeExpressions(t, e, s, i) {
                const n = e[0];
                return "." === n ? new oh(t,e.slice(1),s).parts : "@" === n ? [new dh(t,e.slice(1),i.eventContext)] : "?" === n ? [new rh(t,e.slice(1),s)] : new sh(t,e,s).parts
            }
            handleTextExpression(t) {
                return new nh(t)
            }
        }
        ;
        "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        const fh = (t, ...e) => new Qc(t,e,"html",mh)
          , gh = (t, e) => `${t}--${e}`;
        let _h = !0;
        void 0 === window.ShadyCSS ? _h = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
        _h = !1);
        const yh = t => e => {
            const s = gh(e.type, t);
            let i = ph.get(s);
            void 0 === i && (i = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            ph.set(s, i));
            let n = i.stringsArray.get(e.strings);
            if (void 0 !== n)
                return n;
            const r = e.strings.join(Vc);
            if (n = i.keyString.get(r),
            void 0 === n) {
                const s = e.getTemplateElement();
                _h && window.ShadyCSS.prepareTemplateDom(s, t),
                n = new qc(e,s),
                i.keyString.set(r, n)
            }
            return i.stringsArray.set(e.strings, n),
            n
        }
          , vh = ["html", "svg"]
          , wh = new Set;
        window.JSCompiler_renameProperty = (t, e) => t;
        const Sh = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                switch (e) {
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t)
                }
                return t
            }
        }
          , bh = (t, e) => e !== t && (e == e || t == t)
          , xh = {
            attribute: !0,
            type: String,
            converter: Sh,
            reflect: !1,
            hasChanged: bh
        }
          , kh = "finalized";
        class Ph extends HTMLElement {
            constructor() {
                super(),
                this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this._classProperties.forEach( (e, s) => {
                    const i = this._attributeNameForProperty(s, e);
                    void 0 !== i && (this._attributeToPropertyMap.set(i, s),
                    t.push(i))
                }
                ),
                t
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const t = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== t && t.forEach( (t, e) => this._classProperties.set(e, t))
                }
            }
            static createProperty(t, e=xh) {
                if (this._ensureClassProperties(),
                this._classProperties.set(t, e),
                e.noAccessor || this.prototype.hasOwnProperty(t))
                    return;
                const s = "symbol" == typeof t ? Symbol() : `__${t}`
                  , i = this.getPropertyDescriptor(t, s, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i)
            }
            static getPropertyDescriptor(t, e, s) {
                return {
                    get() {
                        return this[e]
                    },
                    set(i) {
                        const n = this[t];
                        this[e] = i,
                        this.requestUpdateInternal(t, n, s)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this._classProperties && this._classProperties.get(t) || xh
            }
            static finalize() {
                const t = Object.getPrototypeOf(this);
                if (t.hasOwnProperty(kh) || t.finalize(),
                this[kh] = !0,
                this._ensureClassProperties(),
                this._attributeToPropertyMap = new Map,
                this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
                    for (const s of e)
                        this.createProperty(s, t[s])
                }
            }
            static _attributeNameForProperty(t, e) {
                const s = e.attribute;
                return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
            }
            static _valueHasChanged(t, e, s=bh) {
                return s(t, e)
            }
            static _propertyValueFromAttribute(t, e) {
                const s = e.type
                  , i = e.converter || Sh
                  , n = "function" == typeof i ? i : i.fromAttribute;
                return n ? n(t, s) : t
            }
            static _propertyValueToAttribute(t, e) {
                if (void 0 === e.reflect)
                    return;
                const s = e.type
                  , i = e.converter;
                return (i && i.toAttribute || Sh.toAttribute)(t, s)
            }
            initialize() {
                this._updateState = 0,
                this._updatePromise = new Promise(t => this._enableUpdatingResolver = t),
                this._changedProperties = new Map,
                this._saveInstanceProperties(),
                this.requestUpdateInternal()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach( (t, e) => {
                    if (this.hasOwnProperty(e)) {
                        const t = this[e];
                        delete this[e],
                        this._instanceProperties || (this._instanceProperties = new Map),
                        this._instanceProperties.set(e, t)
                    }
                }
                )
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach( (t, e) => this[e] = t),
                this._instanceProperties = void 0
            }
            connectedCallback() {
                this.enableUpdating()
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
                this._enableUpdatingResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(t, e, s) {
                e !== s && this._attributeToProperty(t, s)
            }
            _propertyToAttribute(t, e, s=xh) {
                const i = this.constructor
                  , n = i._attributeNameForProperty(t, s);
                if (void 0 !== n) {
                    const t = i._propertyValueToAttribute(e, s);
                    if (void 0 === t)
                        return;
                    this._updateState = 8 | this._updateState,
                    null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
                    this._updateState = -9 & this._updateState
                }
            }
            _attributeToProperty(t, e) {
                if (8 & this._updateState)
                    return;
                const s = this.constructor
                  , i = s._attributeToPropertyMap.get(t);
                if (void 0 !== i) {
                    const t = s.getPropertyOptions(i);
                    this._updateState = 16 | this._updateState,
                    this[i] = s._propertyValueFromAttribute(e, t),
                    this._updateState = -17 & this._updateState
                }
            }
            requestUpdateInternal(t, e, s) {
                let i = !0;
                if (void 0 !== t) {
                    const n = this.constructor;
                    s = s || n.getPropertyOptions(t),
                    n._valueHasChanged(this[t], e, s.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
                    !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
                    this._reflectingProperties.set(t, s))) : i = !1
                }
                !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
            }
            requestUpdate(t, e) {
                return this.requestUpdateInternal(t, e),
                this.updateComplete
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise
                } catch (t) {}
                const t = this.performUpdate();
                return null != t && await t,
                !this._hasRequestedUpdate
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState
            }
            get hasUpdated() {
                return 1 & this._updateState
            }
            performUpdate() {
                if (!this._hasRequestedUpdate)
                    return;
                this._instanceProperties && this._applyInstanceProperties();
                let t = !1;
                const e = this._changedProperties;
                try {
                    t = this.shouldUpdate(e),
                    t ? this.update(e) : this._markUpdated()
                } catch (e) {
                    throw t = !1,
                    this._markUpdated(),
                    e
                }
                t && (1 & this._updateState || (this._updateState = 1 | this._updateState,
                this.firstUpdated(e)),
                this.updated(e))
            }
            _markUpdated() {
                this._changedProperties = new Map,
                this._updateState = -5 & this._updateState
            }
            get updateComplete() {
                return this._getUpdateComplete()
            }
            _getUpdateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._updatePromise
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach( (t, e) => this._propertyToAttribute(e, this[e], t)),
                this._reflectingProperties = void 0),
                this._markUpdated()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        Ph[kh] = !0;
        const Ch = Element.prototype;
        Ch.msMatchesSelector || Ch.webkitMatchesSelector;
        const Ah = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , Eh = Symbol();
        class Nh {
            constructor(t, e) {
                if (e !== Eh)
                    throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (Ah ? (this._styleSheet = new CSSStyleSheet,
                this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
                this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        const Th = (t, ...e) => {
            const s = e.reduce( (e, s, i) => e + (t => {
                if (t instanceof Nh)
                    return t.cssText;
                if ("number" == typeof t)
                    return t;
                throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
            }
            )(s) + t[i + 1], t[0]);
            return new Nh(s,Eh)
        }
        ;
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        const Mh = {};
        class Uh extends Ph {
            static getStyles() {
                return this.styles
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
                    return;
                const t = this.getStyles();
                if (Array.isArray(t)) {
                    const e = (t, s) => t.reduceRight( (t, s) => Array.isArray(s) ? e(s, t) : (t.add(s),
                    t), s)
                      , s = e(t, new Set)
                      , i = [];
                    s.forEach(t => i.unshift(t)),
                    this._styles = i
                } else
                    this._styles = void 0 === t ? [] : [t];
                this._styles = this._styles.map(t => {
                    if (t instanceof CSSStyleSheet && !Ah) {
                        const e = Array.prototype.slice.call(t.cssRules).reduce( (t, e) => t + e.cssText, "");
                        return new Nh(String(e),Eh)
                    }
                    return t
                }
                )
            }
            initialize() {
                super.initialize(),
                this.constructor._getUniqueStyles(),
                this.renderRoot = this.createRenderRoot(),
                window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions)
            }
            adoptStyles() {
                const t = this.constructor._styles;
                0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Ah ? this.renderRoot.adoptedStyleSheets = t.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
            }
            update(t) {
                const e = this.render();
                super.update(t),
                e !== Mh && this.constructor.render(e, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }),
                this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
                this.constructor._styles.forEach(t => {
                    const e = document.createElement("style");
                    e.textContent = t.cssText,
                    this.renderRoot.appendChild(e)
                }
                ))
            }
            render() {
                return Mh
            }
        }
        Uh.finalized = !0,
        Uh.render = (t, e, s) => {
            if (!s || "object" != typeof s || !s.scopeName)
                throw new Error("The `scopeName` option is required.");
            const i = s.scopeName
              , n = uh.has(e)
              , r = _h && 11 === e.nodeType && !!e.host
              , o = r && !wh.has(i)
              , a = o ? document.createDocumentFragment() : e;
            if (( (t, e, s) => {
                let i = uh.get(e);
                void 0 === i && ($c(e, e.firstChild),
                uh.set(e, i = new nh(Object.assign({
                    templateFactory: hh
                }, s))),
                i.appendInto(e)),
                i.setValue(t),
                i.commit()
            }
            )(t, a, Object.assign({
                templateFactory: yh(i)
            }, s)),
            o) {
                const t = uh.get(a);
                uh.delete(a);
                ( (t, e, s) => {
                    wh.add(t);
                    const i = s ? s.element : document.createElement("template")
                      , n = e.querySelectorAll("style")
                      , {length: r} = n;
                    if (0 === r)
                        return void window.ShadyCSS.prepareTemplateStyles(i, t);
                    const o = document.createElement("style");
                    for (let t = 0; t < r; t++) {
                        const e = n[t];
                        e.parentNode.removeChild(e),
                        o.textContent += e.textContent
                    }
                    (t => {
                        vh.forEach(e => {
                            const s = ph.get(gh(e, t));
                            void 0 !== s && s.keyString.forEach(t => {
                                const {element: {content: e}} = t
                                  , s = new Set;
                                Array.from(e.querySelectorAll("style")).forEach(t => {
                                    s.add(t)
                                }
                                ),
                                Fc(t, s)
                            }
                            )
                        }
                        )
                    }
                    )(t);
                    const a = i.content;
                    s ? function(t, e, s=null) {
                        const {element: {content: i}, parts: n} = t;
                        if (null == s)
                            return void i.appendChild(e);
                        const r = document.createTreeWalker(i, 133, null, !1);
                        let o = Bc(n)
                          , a = 0
                          , l = -1;
                        for (; r.nextNode(); )
                            for (l++,
                            r.currentNode === s && (a = Dc(e),
                            s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l; ) {
                                if (a > 0) {
                                    for (; -1 !== o; )
                                        n[o].index += a,
                                        o = Bc(n, o);
                                    return
                                }
                                o = Bc(n, o)
                            }
                    }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild),
                    window.ShadyCSS.prepareTemplateStyles(i, t);
                    const l = a.querySelector("style");
                    if (window.ShadyCSS.nativeShadow && null !== l)
                        e.insertBefore(l.cloneNode(!0), e.firstChild);
                    else if (s) {
                        a.insertBefore(o, a.firstChild);
                        const t = new Set;
                        t.add(o),
                        Fc(s, t)
                    }
                }
                )(i, a, t.value instanceof Gc ? t.value.template : void 0),
                $c(e, e.firstChild),
                e.appendChild(a),
                uh.set(e, t)
            }
            !n && r && window.ShadyCSS.styleElement(e.host)
        }
        ,
        Uh.shadowRootOptions = {
            mode: "open"
        },
        customElements.define("ug-askbot", class extends Uh {
            static get properties() {
                return {
                    enabled: {
                        type: Boolean
                    },
                    identity: {
                        type: String
                    },
                    lang: {
                        type: String
                    },
                    intent: {
                        type: String
                    },
                    process: {
                        type: String
                    }
                }
            }
            static get styles() {
                return [Th`
                :host {
                    position: relative;
                    z-index: 999;
                }
            `]
            }
            constructor() {
                super()
            }
            connectedCallback() {
                if (super.connectedCallback(),
                this.enabled) {
                    const n = {
                        identityId: this.identity,
                        intent: this.intent,
                        proc: this.process,
                        lang: this.lang
                    };
                    var t = this.closest(".animate");
                    t && t.classList.remove("animate");
                    var e = document.createElement("div");
                    e.classList.add("ug-assistant"),
                    this.prepend(e);
                    var s = document.createElement("link");
                    s.rel = "stylesheet",
                    s.href = "https://ask.uni-graz.at/index.css";
                    var i = document.createElement("script");
                    i.src = "https://ask.uni-graz.at/index.js",
                    i.onload = function() {
                        if (!window.UGWidget)
                            throw new Error("Failed to load UG Widget.");
                        window.UGWidget.StartAssistant(n)
                    }
                    ,
                    e.after(s, i)
                }
            }
            render() {
                return fh`
            <slot></slot>
            `
            }
        }
        )
    }()
}();
