/*! For license information please see Main_Home_2022.js.LICENSE.txt */
!(function () {
  var e = {
      255: function () {
        var e = "";
        function t() {
          (document.querySelector("header").addEventListener("keydown", (t) => {
            e = t.key;
          }),
            document
              .querySelectorAll(".mainmenu .nav-item")
              .forEach(function (t) {
                t.addEventListener("focusin", (t) => {
                  window.setTimeout(function () {
                    "Tab" == e &&
                      t.target.parentElement.querySelectorAll(".hassub")
                        .length &&
                      (document
                        .querySelector(".main")
                        .classList.remove("overlay"),
                      t.target.parentElement
                        .querySelector(".nav-link.hassub")
                        .classList.add("pullactive"),
                      t.target.parentElement
                        .querySelector(".nav-link.hassub")
                        .parentElement.querySelector(".bt_menubox")
                        .classList.add("active"));
                  }, 30);
                });
              }),
            document
              .querySelectorAll(".mainmenu .nav-item")
              .forEach(function (t) {
                t.addEventListener("focusout", (t) => {
                  window.setTimeout(function () {
                    "Tab" == e &&
                      (t.target.parentElement.parentElement.parentElement.contains(
                        t.relatedTarget,
                      ) ||
                        (document
                          .querySelectorAll(".mainmenu .nav-link.hassub")
                          .forEach(function (e) {
                            e.classList.remove("pullactive");
                          }),
                        document
                          .querySelectorAll(".bt_menubox")
                          .forEach(function (e) {
                            e.classList.remove("active");
                          }),
                        document
                          .querySelector(".main")
                          .classList.remove("overlay")));
                  }, 30);
                });
              }),
            document
              .querySelector(".bt_topitem.languagechange")
              .addEventListener("focusout", (e) => {
                document
                  .querySelector(".bt_topitem.languagechange")
                  .contains(e.relatedTarget) ||
                  document
                    .querySelector(".bt_topitem.languagechange .dropdown-menu")
                    .classList.remove("show");
              }),
            document
              .querySelector(".bt_topitem.languagechange")
              .addEventListener("keydown", (e) => {
                switch (e.keyCode) {
                  case 13:
                    (document
                      .querySelector(
                        ".bt_topitem.languagechange .dropdown-menu",
                      )
                      .classList.add("show"),
                      document
                        .querySelector(
                          ".bt_topitem.languagechange .dropdown-menu .dropdown-item:first-child",
                        )
                        .focus(),
                      e.target.classList.contains("dropdown-item") ||
                        e.preventDefault());
                    break;
                  case 32:
                  case 40:
                    (document
                      .querySelector(
                        ".bt_topitem.languagechange .dropdown-menu",
                      )
                      .classList.add("show"),
                      document
                        .querySelector(
                          ".bt_topitem.languagechange .dropdown-menu .dropdown-item:first-child",
                        )
                        .focus(),
                      e.preventDefault());
                    break;
                  case 38:
                    (document
                      .querySelector(
                        ".bt_topitem.languagechange .dropdown-menu",
                      )
                      .classList.remove("show"),
                      document
                        .querySelector(".bt_topitem.languagechange")
                        .focus(),
                      e.preventDefault());
                    break;
                  case 39:
                    (e.target.nextElementSibling &&
                      e.target.nextElementSibling.focus(),
                      e.preventDefault());
                    break;
                  case 37:
                    (e.target.previousElementSibling &&
                      e.target.previousElementSibling.focus(),
                      e.preventDefault());
                }
              }),
            document.querySelector("#sl-content") ||
              (document.querySelector("[accesskey='1']") &&
                document.querySelector("[accesskey='1']").parentNode.remove()),
            document.querySelector("#sl-breadcrumb") ||
              (document.querySelector("[accesskey='2']") &&
                document.querySelector("[accesskey='2']").parentNode.remove()),
            document.querySelector("#sl-mainnav") ||
              (document.querySelector("[accesskey='3']") &&
                document.querySelector("[accesskey='3']").parentNode.remove()),
            document.querySelector("#sl-subnav") ||
              (document.querySelector("[accesskey='4']") &&
                document.querySelector("[accesskey='4']").parentNode.remove()),
            document.querySelector("#sl-info") ||
              (document.querySelector("[accesskey='5']") &&
                document.querySelector("[accesskey='5']").parentNode.remove()),
            document.querySelector("#sl-settings") ||
              (document.querySelector("[accesskey='8']") &&
                document.querySelector("[accesskey='8']").parentNode.remove()),
            document.querySelector("#sl-search") ||
              (document.querySelector("[accesskey='9']") &&
                document.querySelector("[accesskey='9']").parentNode.remove()),
            window.addEventListener("hashchange", (e) => {
              if ("#sl-info" == document.location.hash) {
                const e =
                  document
                    .querySelector(".searchpadding")
                    .getBoundingClientRect().bottom + window.pageYOffset;
                window.scrollTo({ top: e, behavior: "smooth" });
              }
              "#sl-mainnav" == document.location.hash &&
                document.body.classList.remove("down");
            }),
            document.querySelector(".content") &&
              document
                .querySelector(".content")
                .addEventListener("keydown", (e) => {
                  "Tab" === e.key &&
                    setTimeout(() => {
                      var e = 0;
                      document
                        .querySelector("footer")
                        .contains(document.activeElement) &&
                        ((e = document.querySelector(".searchpadding")
                          ? document
                              .querySelector(".searchpadding")
                              .getBoundingClientRect().bottom +
                            window.pageYOffset
                          : document
                              .querySelector(".contentoverlay")
                              .getBoundingClientRect().bottom +
                            window.pageYOffset),
                        window.scrollTo({ top: e, behavior: "smooth" }));
                    }, 10);
                }),
            document
              .querySelectorAll(".closeHomeMenAccessibles")
              .forEach((e) => {
                e.addEventListener("click", (e) => {
                  (e.preventDefault(),
                    e.stopPropagation(),
                    document
                      .querySelector("body")
                      .classList.toggle("menactive"),
                    document.querySelector("#breadcrumb") &&
                      document
                        .querySelector("#breadcrumb")
                        .classList.toggle("hidden"),
                    document
                      .querySelector(".burgermenu")
                      .classList.toggle("checked"),
                    document
                      .querySelector(".mainmenu")
                      .classList.toggle("checked"),
                    document
                      .querySelector("body")
                      .classList.contains("menactive")
                      ? document.querySelector(".main").classList.add("overlay")
                      : document
                          .querySelector(".main")
                          .classList.remove("overlay"));
                });
              }),
            document.querySelectorAll(".closeMenAccessibles").forEach((e) => {
              e.addEventListener("click", (e) => {
                (e.preventDefault(),
                  e.stopPropagation(),
                  document
                    .querySelectorAll(".mainmenu .nav-link.hassub")
                    .forEach(function (e) {
                      e.classList.remove("pullactive");
                    }),
                  document
                    .querySelectorAll(".bt_menubox")
                    .forEach(function (e) {
                      e.classList.remove("active");
                    }),
                  document.querySelector(".main").classList.remove("overlay"));
              });
            }));
        }
        document.addEventListener("DOMContentLoaded", function (e) {
          t();
        });
      },
      421: function () {
        var e,
          t = Array(),
          i = !1;
        function n() {
          var e = 0;
          (document
            .querySelectorAll(".inlinemenu_wrap ul li")
            .forEach(function (t) {
              e += t.offsetWidth;
            }),
            document.querySelector(".inlinemenu_wrap") &&
              (document.querySelector(".inlinemenu_wrap").offsetWidth >= e
                ? (document
                    .querySelector(".inlinemenu_right")
                    .classList.add("hidden"),
                  document
                    .querySelector(".inlinemenu_left")
                    .classList.add("hidden"))
                : ((i = !0),
                  document
                    .querySelector(".inlinemenu_right")
                    .classList.remove("hidden"),
                  document
                    .querySelector(".inlinemenu_left")
                    .classList.remove("hidden"))));
        }
        document.addEventListener("DOMContentLoaded", function (s) {
          var o;
          (n(),
            (t = Array()),
            document.querySelector(".inlinemenu_right") &&
              document
                .querySelector(".inlinemenu_right")
                .addEventListener("click", function (e) {
                  var i = 0;
                  document
                    .querySelectorAll(".inlinemenu_wrap ul li")
                    .forEach(function (e) {
                      0 == i &&
                        (function (e) {
                          const t = e.getBoundingClientRect();
                          return (
                            t.top >= 0 &&
                            t.left >= 0 &&
                            t.bottom <=
                              (window.innerHeight ||
                                document.documentElement.clientHeight) &&
                            t.right <=
                              (window.innerWidth ||
                                document.documentElement.clientWidth)
                          );
                        })(e) &&
                        (i = e.offsetWidth - 2);
                    });
                  var n = document.querySelector(
                    ".inlinemenu_wrap ul",
                  ).scrollLeft;
                  ((document.querySelector(".inlinemenu_wrap ul").scrollLeft +=
                    i),
                    n != t[t.length - 1] && t.push(n));
                }),
            document.querySelector(".inlinemenu_left") &&
              document
                .querySelector(".inlinemenu_left")
                .addEventListener("click", function (e) {
                  var i = t.pop();
                  null !== i &&
                    (document.querySelector(".inlinemenu_wrap ul").scrollLeft =
                      i);
                }),
            (o = !1),
            i &&
              document
                .querySelectorAll(".inlinemenu_wrap ul li")
                .forEach(function (e) {
                  if (!o)
                    if (e.classList.contains("active")) o = !0;
                    else {
                      cwn = e.offsetWidth - 2;
                      var i = document.querySelector(
                        ".inlinemenu_wrap ul",
                      ).scrollLeft;
                      ((document.querySelector(
                        ".inlinemenu_wrap ul",
                      ).scrollLeft += cwn),
                        t.push(i));
                    }
                }),
            addEventListener("resize", (t) => {
              (clearTimeout(e), (e = setTimeout(n, 500)));
            }));
        });
      },
      507: function () {
        document.addEventListener("DOMContentLoaded", function (e) {
          (!(function () {
            if (document.querySelector(".sidebarmenu")) {
              const e = document.querySelector(".sidebarmenu").cloneNode(!0);
              document.querySelector(".headersidebar") &&
                document.querySelector(".headersidebar").appendChild(e);
            }
          })(),
            document
              .querySelectorAll(".contentsidebar .sidebarmenu li a")
              .forEach(function (e) {
                (e.addEventListener("mouseenter", (e) => {
                  (document
                    .querySelector(".contentsidebar .sidebarmenu")
                    .classList.toggle("sideactive"),
                    e.target.parentElement.classList.add("overed"));
                }),
                  e.addEventListener("mouseleave", (e) => {
                    (document
                      .querySelector(".contentsidebar .sidebarmenu")
                      .classList.toggle("sideactive"),
                      e.target.parentElement.classList.remove("overed"));
                  }));
              }),
            document
              .querySelectorAll(".headersidebar .sidebarmenu li a")
              .forEach(function (e) {
                (e.addEventListener("mouseenter", (e) => {
                  (document
                    .querySelector(".headersidebar .sidebarmenu")
                    .classList.toggle("sideactive"),
                    e.target.parentElement.classList.add("overed"));
                }),
                  e.addEventListener("mouseleave", (e) => {
                    (document
                      .querySelector(".headersidebar .sidebarmenu")
                      .classList.toggle("sideactive"),
                      e.target.parentElement.classList.remove("overed"));
                  }));
              }),
            document.querySelector(".headersidebar")
              ? (document
                  .querySelector(".contentsidebar")
                  .classList.add("hidden"),
                window.addEventListener(
                  "scroll",
                  (e) => {
                    var t = !1;
                    ((t =
                      document
                        .querySelector(".headersidebar")
                        .getBoundingClientRect().top +
                        document.querySelector(".headersidebar").offsetHeight <
                      100),
                      document
                        .querySelector(".stickybox")
                        .getBoundingClientRect().top +
                        document.querySelector(".headersidebar").offsetHeight <
                        window.innerHeight &&
                        !t &&
                        (t = !0),
                      document.querySelector("body").getBoundingClientRect()
                        .top > -50 && (t = !1),
                      t
                        ? (document
                            .querySelector(".contentsidebar")
                            .classList.remove("hidden"),
                          document
                            .querySelector(".headersidebar")
                            .classList.add("hidden"))
                        : (document
                            .querySelector(".contentsidebar")
                            .classList.add("hidden"),
                          document
                            .querySelector(".headersidebar")
                            .classList.remove("hidden")));
                  },
                  !1,
                ))
              : document.querySelector(".contentsidebar") &&
                document
                  .querySelector(".contentsidebar")
                  .classList.remove("hidden"));
        });
      },
      816: function (e) {
        e.exports = (function () {
          "use strict";
          function e(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function t(e, t) {
            for (var i = 0; i < t.length; i++) {
              var s = t[i];
              ((s.enumerable = s.enumerable || !1),
                (s.configurable = !0),
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, n(s.key), s));
            }
          }
          function i(e, i, n) {
            return (
              i && t(e.prototype, i),
              n && t(e, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              e
            );
          }
          function n(e) {
            var t = (function (e) {
              if ("object" != typeof e || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var i = t.call(e, "string");
                if ("object" != typeof i) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == typeof t ? t : t + "";
          }
          function s(e) {
            return (s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          var o = Date.now();
          function r() {
            var e = {},
              t = !0,
              i = 0,
              n = arguments.length;
            "[object Boolean]" ===
              Object.prototype.toString.call(arguments[0]) &&
              ((t = arguments[0]), i++);
            for (
              var s = function (i) {
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) &&
                    (t &&
                    "[object Object]" === Object.prototype.toString.call(i[n])
                      ? (e[n] = r(!0, e[n], i[n]))
                      : (e[n] = i[n]));
              };
              i < n;
              i++
            )
              s(arguments[i]);
            return e;
          }
          function a(e, t) {
            if (
              ((A(e) || e === window || e === document) && (e = [e]),
              C(e) || k(e) || (e = [e]),
              0 != q(e))
            )
              if (C(e) && !k(e))
                for (
                  var i = e.length, n = 0;
                  n < i && !1 !== t.call(e[n], e[n], n, e);
                  n++
                );
              else if (k(e))
                for (var s in e)
                  if (O(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
          }
          function l(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              n = (e[o] = e[o] || []),
              s = { all: n, evt: null, found: null };
            return (
              t &&
                i &&
                q(n) > 0 &&
                a(n, function (e, n) {
                  if (e.eventName == t && e.fn.toString() == i.toString())
                    return ((s.found = !0), (s.evt = n), !1);
                }),
              s
            );
          }
          function c(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = t.onElement,
              n = t.withCallback,
              s = t.avoidDuplicate,
              o = void 0 === s || s,
              r = t.once,
              c = void 0 !== r && r,
              d = t.useCapture,
              u = void 0 !== d && d,
              h = arguments.length > 2 ? arguments[2] : void 0,
              f = i || [];
            function g(e) {
              (x(n) && n.call(h, e, this), c && g.destroy());
            }
            return (
              E(f) && (f = document.querySelectorAll(f)),
              (g.destroy = function () {
                a(f, function (t) {
                  var i = l(t, e, g);
                  (i.found && i.all.splice(i.evt, 1),
                    t.removeEventListener && t.removeEventListener(e, g, u));
                });
              }),
              a(f, function (t) {
                var i = l(t, e, g);
                ((t.addEventListener && o && !i.found) || !o) &&
                  (t.addEventListener(e, g, u),
                  i.all.push({ eventName: e, fn: g }));
              }),
              g
            );
          }
          function d(e, t) {
            a(t.split(" "), function (t) {
              return e.classList.add(t);
            });
          }
          function u(e, t) {
            a(t.split(" "), function (t) {
              return e.classList.remove(t);
            });
          }
          function h(e, t) {
            return e.classList.contains(t);
          }
          function f(e, t) {
            for (; e !== document.body; ) {
              if (!(e = e.parentElement)) return !1;
              if (
                "function" == typeof e.matches
                  ? e.matches(t)
                  : e.msMatchesSelector(t)
              )
                return e;
            }
          }
          function g(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!e || "" === t) return !1;
            if ("none" === t) return (x(i) && i(), !1);
            var n = (function () {
                var e,
                  t = document.createElement("fakeelement"),
                  i = {
                    animation: "animationend",
                    OAnimation: "oAnimationEnd",
                    MozAnimation: "animationend",
                    WebkitAnimation: "webkitAnimationEnd",
                  };
                for (e in i) if (void 0 !== t.style[e]) return i[e];
              })(),
              s = t.split(" ");
            (a(s, function (t) {
              d(e, "g" + t);
            }),
              c(n, {
                onElement: e,
                avoidDuplicate: !1,
                once: !0,
                withCallback: function (e, t) {
                  (a(s, function (e) {
                    u(t, "g" + e);
                  }),
                    x(i) && i());
                },
              }));
          }
          function p(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            if ("" === t)
              return (
                (e.style.webkitTransform = ""),
                (e.style.MozTransform = ""),
                (e.style.msTransform = ""),
                (e.style.OTransform = ""),
                (e.style.transform = ""),
                !1
              );
            ((e.style.webkitTransform = t),
              (e.style.MozTransform = t),
              (e.style.msTransform = t),
              (e.style.OTransform = t),
              (e.style.transform = t));
          }
          function m(e) {
            e.style.display = "block";
          }
          function v(e) {
            e.style.display = "none";
          }
          function y(e) {
            var t = document.createDocumentFragment(),
              i = document.createElement("div");
            for (i.innerHTML = e; i.firstChild; ) t.appendChild(i.firstChild);
            return t;
          }
          function b() {
            return {
              width:
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
              height:
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
            };
          }
          function _(e, t, i, n) {
            if (e()) t();
            else {
              var s;
              i || (i = 100);
              var o = setInterval(function () {
                e() && (clearInterval(o), s && clearTimeout(s), t());
              }, i);
              n &&
                (s = setTimeout(function () {
                  clearInterval(o);
                }, n));
            }
          }
          function w(e, t, i) {
            if (L(e)) console.error("Inject assets error");
            else if ((x(t) && ((i = t), (t = !1)), E(t) && t in window))
              x(i) && i();
            else {
              var n;
              if (-1 !== e.indexOf(".css")) {
                if (
                  (n = document.querySelectorAll('link[href="' + e + '"]')) &&
                  n.length > 0
                )
                  return void (x(i) && i());
                var s = document.getElementsByTagName("head")[0],
                  o = s.querySelectorAll('link[rel="stylesheet"]'),
                  r = document.createElement("link");
                return (
                  (r.rel = "stylesheet"),
                  (r.type = "text/css"),
                  (r.href = e),
                  (r.media = "all"),
                  o ? s.insertBefore(r, o[0]) : s.appendChild(r),
                  void (x(i) && i())
                );
              }
              if (
                (n = document.querySelectorAll('script[src="' + e + '"]')) &&
                n.length > 0
              ) {
                if (x(i)) {
                  if (E(t))
                    return (
                      _(
                        function () {
                          return void 0 !== window[t];
                        },
                        function () {
                          i();
                        },
                      ),
                      !1
                    );
                  i();
                }
              } else {
                var a = document.createElement("script");
                ((a.type = "text/javascript"),
                  (a.src = e),
                  (a.onload = function () {
                    if (x(i)) {
                      if (E(t))
                        return (
                          _(
                            function () {
                              return void 0 !== window[t];
                            },
                            function () {
                              i();
                            },
                          ),
                          !1
                        );
                      i();
                    }
                  }),
                  document.body.appendChild(a));
              }
            }
          }
          function S() {
            return (
              "navigator" in window &&
              window.navigator.userAgent.match(
                /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i,
              )
            );
          }
          function x(e) {
            return "function" == typeof e;
          }
          function E(e) {
            return "string" == typeof e;
          }
          function A(e) {
            return !(!e || !e.nodeType || 1 != e.nodeType);
          }
          function T(e) {
            return Array.isArray(e);
          }
          function C(e) {
            return e && e.length && isFinite(e.length);
          }
          function k(e) {
            return "object" === s(e) && null != e && !x(e) && !T(e);
          }
          function L(e) {
            return null == e;
          }
          function O(e, t) {
            return null !== e && hasOwnProperty.call(e, t);
          }
          function q(e) {
            if (k(e)) {
              if (e.keys) return e.keys().length;
              var t = 0;
              for (var i in e) O(e, i) && t++;
              return t;
            }
            return e.length;
          }
          function I(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
          }
          function D() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : -1,
              t = document.querySelectorAll(
                ".gbtn[data-taborder]:not(.disabled)",
              );
            if (!t.length) return !1;
            if (1 == t.length) return t[0];
            "string" == typeof e && (e = parseInt(e));
            var i = [];
            a(t, function (e) {
              i.push(e.getAttribute("data-taborder"));
            });
            var n = Math.max.apply(
                Math,
                i.map(function (e) {
                  return parseInt(e);
                }),
              ),
              s = e < 0 ? 1 : e + 1;
            s > n && (s = "1");
            var o = i.filter(function (e) {
                return e >= parseInt(s);
              }),
              r = o.sort()[0];
            return document.querySelector(
              '.gbtn[data-taborder="'.concat(r, '"]'),
            );
          }
          var P = i(
              function t(i, n) {
                var s = this,
                  o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null;
                if (
                  (e(this, t),
                  (this.img = i),
                  (this.slide = n),
                  (this.onclose = o),
                  this.img.setZoomEvents)
                )
                  return !1;
                ((this.active = !1),
                  (this.zoomedIn = !1),
                  (this.dragging = !1),
                  (this.currentX = null),
                  (this.currentY = null),
                  (this.initialX = null),
                  (this.initialY = null),
                  (this.xOffset = 0),
                  (this.yOffset = 0),
                  this.img.addEventListener(
                    "mousedown",
                    function (e) {
                      return s.dragStart(e);
                    },
                    !1,
                  ),
                  this.img.addEventListener(
                    "mouseup",
                    function (e) {
                      return s.dragEnd(e);
                    },
                    !1,
                  ),
                  this.img.addEventListener(
                    "mousemove",
                    function (e) {
                      return s.drag(e);
                    },
                    !1,
                  ),
                  this.img.addEventListener(
                    "click",
                    function (e) {
                      return s.slide.classList.contains("dragging-nav")
                        ? (s.zoomOut(), !1)
                        : s.zoomedIn
                          ? void (s.zoomedIn && !s.dragging && s.zoomOut())
                          : s.zoomIn();
                    },
                    !1,
                  ),
                  (this.img.setZoomEvents = !0));
              },
              [
                {
                  key: "zoomIn",
                  value: function () {
                    var e = this.widowWidth();
                    if (!(this.zoomedIn || e <= 768)) {
                      var t = this.img;
                      if (
                        (t.setAttribute("data-style", t.getAttribute("style")),
                        (t.style.maxWidth = t.naturalWidth + "px"),
                        (t.style.maxHeight = t.naturalHeight + "px"),
                        t.naturalWidth > e)
                      ) {
                        var i = e / 2 - t.naturalWidth / 2;
                        this.setTranslate(this.img.parentNode, i, 0);
                      }
                      (this.slide.classList.add("zoomed"),
                        (this.zoomedIn = !0));
                    }
                  },
                },
                {
                  key: "zoomOut",
                  value: function () {
                    (this.img.parentNode.setAttribute("style", ""),
                      this.img.setAttribute(
                        "style",
                        this.img.getAttribute("data-style"),
                      ),
                      this.slide.classList.remove("zoomed"),
                      (this.zoomedIn = !1),
                      (this.currentX = null),
                      (this.currentY = null),
                      (this.initialX = null),
                      (this.initialY = null),
                      (this.xOffset = 0),
                      (this.yOffset = 0),
                      this.onclose &&
                        "function" == typeof this.onclose &&
                        this.onclose());
                  },
                },
                {
                  key: "dragStart",
                  value: function (e) {
                    (e.preventDefault(),
                      this.zoomedIn
                        ? ("touchstart" === e.type
                            ? ((this.initialX =
                                e.touches[0].clientX - this.xOffset),
                              (this.initialY =
                                e.touches[0].clientY - this.yOffset))
                            : ((this.initialX = e.clientX - this.xOffset),
                              (this.initialY = e.clientY - this.yOffset)),
                          e.target === this.img &&
                            ((this.active = !0),
                            this.img.classList.add("dragging")))
                        : (this.active = !1));
                  },
                },
                {
                  key: "dragEnd",
                  value: function (e) {
                    var t = this;
                    (e.preventDefault(),
                      (this.initialX = this.currentX),
                      (this.initialY = this.currentY),
                      (this.active = !1),
                      setTimeout(function () {
                        ((t.dragging = !1),
                          (t.img.isDragging = !1),
                          t.img.classList.remove("dragging"));
                      }, 100));
                  },
                },
                {
                  key: "drag",
                  value: function (e) {
                    this.active &&
                      (e.preventDefault(),
                      "touchmove" === e.type
                        ? ((this.currentX =
                            e.touches[0].clientX - this.initialX),
                          (this.currentY =
                            e.touches[0].clientY - this.initialY))
                        : ((this.currentX = e.clientX - this.initialX),
                          (this.currentY = e.clientY - this.initialY)),
                      (this.xOffset = this.currentX),
                      (this.yOffset = this.currentY),
                      (this.img.isDragging = !0),
                      (this.dragging = !0),
                      this.setTranslate(
                        this.img,
                        this.currentX,
                        this.currentY,
                      ));
                  },
                },
                {
                  key: "onMove",
                  value: function (e) {
                    if (this.zoomedIn) {
                      var t = e.clientX - this.img.naturalWidth / 2,
                        i = e.clientY - this.img.naturalHeight / 2;
                      this.setTranslate(this.img, t, i);
                    }
                  },
                },
                {
                  key: "setTranslate",
                  value: function (e, t, i) {
                    e.style.transform =
                      "translate3d(" + t + "px, " + i + "px, 0)";
                  },
                },
                {
                  key: "widowWidth",
                  value: function () {
                    return (
                      window.innerWidth ||
                      document.documentElement.clientWidth ||
                      document.body.clientWidth
                    );
                  },
                },
              ],
            ),
            N = i(
              function t() {
                var i = this,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                e(this, t);
                var s = n.dragEl,
                  o = n.toleranceX,
                  r = void 0 === o ? 40 : o,
                  a = n.toleranceY,
                  l = void 0 === a ? 65 : a,
                  c = n.slide,
                  d = void 0 === c ? null : c,
                  u = n.instance,
                  h = void 0 === u ? null : u;
                ((this.el = s),
                  (this.active = !1),
                  (this.dragging = !1),
                  (this.currentX = null),
                  (this.currentY = null),
                  (this.initialX = null),
                  (this.initialY = null),
                  (this.xOffset = 0),
                  (this.yOffset = 0),
                  (this.direction = null),
                  (this.lastDirection = null),
                  (this.toleranceX = r),
                  (this.toleranceY = l),
                  (this.toleranceReached = !1),
                  (this.dragContainer = this.el),
                  (this.slide = d),
                  (this.instance = h),
                  this.el.addEventListener(
                    "mousedown",
                    function (e) {
                      return i.dragStart(e);
                    },
                    !1,
                  ),
                  this.el.addEventListener(
                    "mouseup",
                    function (e) {
                      return i.dragEnd(e);
                    },
                    !1,
                  ),
                  this.el.addEventListener(
                    "mousemove",
                    function (e) {
                      return i.drag(e);
                    },
                    !1,
                  ));
              },
              [
                {
                  key: "dragStart",
                  value: function (e) {
                    if (this.slide.classList.contains("zoomed"))
                      this.active = !1;
                    else {
                      "touchstart" === e.type
                        ? ((this.initialX =
                            e.touches[0].clientX - this.xOffset),
                          (this.initialY = e.touches[0].clientY - this.yOffset))
                        : ((this.initialX = e.clientX - this.xOffset),
                          (this.initialY = e.clientY - this.yOffset));
                      var t = e.target.nodeName.toLowerCase();
                      e.target.classList.contains("nodrag") ||
                      f(e.target, ".nodrag") ||
                      -1 !==
                        ["input", "select", "textarea", "button", "a"].indexOf(
                          t,
                        )
                        ? (this.active = !1)
                        : (e.preventDefault(),
                          (e.target === this.el ||
                            ("img" !== t && f(e.target, ".gslide-inline"))) &&
                            ((this.active = !0),
                            this.el.classList.add("dragging"),
                            (this.dragContainer = f(
                              e.target,
                              ".ginner-container",
                            ))));
                    }
                  },
                },
                {
                  key: "dragEnd",
                  value: function (e) {
                    var t = this;
                    (e && e.preventDefault(),
                      (this.initialX = 0),
                      (this.initialY = 0),
                      (this.currentX = null),
                      (this.currentY = null),
                      (this.initialX = null),
                      (this.initialY = null),
                      (this.xOffset = 0),
                      (this.yOffset = 0),
                      (this.active = !1),
                      this.doSlideChange &&
                        ((this.instance.preventOutsideClick = !0),
                        "right" == this.doSlideChange &&
                          this.instance.prevSlide(),
                        "left" == this.doSlideChange &&
                          this.instance.nextSlide()),
                      this.doSlideClose && this.instance.close(),
                      this.toleranceReached ||
                        this.setTranslate(this.dragContainer, 0, 0, !0),
                      setTimeout(function () {
                        ((t.instance.preventOutsideClick = !1),
                          (t.toleranceReached = !1),
                          (t.lastDirection = null),
                          (t.dragging = !1),
                          (t.el.isDragging = !1),
                          t.el.classList.remove("dragging"),
                          t.slide.classList.remove("dragging-nav"),
                          (t.dragContainer.style.transform = ""),
                          (t.dragContainer.style.transition = ""));
                      }, 100));
                  },
                },
                {
                  key: "drag",
                  value: function (e) {
                    if (this.active) {
                      (e.preventDefault(),
                        this.slide.classList.add("dragging-nav"),
                        "touchmove" === e.type
                          ? ((this.currentX =
                              e.touches[0].clientX - this.initialX),
                            (this.currentY =
                              e.touches[0].clientY - this.initialY))
                          : ((this.currentX = e.clientX - this.initialX),
                            (this.currentY = e.clientY - this.initialY)),
                        (this.xOffset = this.currentX),
                        (this.yOffset = this.currentY),
                        (this.el.isDragging = !0),
                        (this.dragging = !0),
                        (this.doSlideChange = !1),
                        (this.doSlideClose = !1));
                      var t = Math.abs(this.currentX),
                        i = Math.abs(this.currentY);
                      if (
                        t > 0 &&
                        t >= Math.abs(this.currentY) &&
                        (!this.lastDirection || "x" == this.lastDirection)
                      ) {
                        ((this.yOffset = 0),
                          (this.lastDirection = "x"),
                          this.setTranslate(
                            this.dragContainer,
                            this.currentX,
                            0,
                          ));
                        var n = this.shouldChange();
                        if (
                          (!this.instance.settings.dragAutoSnap &&
                            n &&
                            (this.doSlideChange = n),
                          this.instance.settings.dragAutoSnap && n)
                        )
                          return (
                            (this.instance.preventOutsideClick = !0),
                            (this.toleranceReached = !0),
                            (this.active = !1),
                            (this.instance.preventOutsideClick = !0),
                            this.dragEnd(null),
                            "right" == n && this.instance.prevSlide(),
                            void ("left" == n && this.instance.nextSlide())
                          );
                      }
                      if (
                        this.toleranceY > 0 &&
                        i > 0 &&
                        i >= t &&
                        (!this.lastDirection || "y" == this.lastDirection)
                      ) {
                        ((this.xOffset = 0),
                          (this.lastDirection = "y"),
                          this.setTranslate(
                            this.dragContainer,
                            0,
                            this.currentY,
                          ));
                        var s = this.shouldClose();
                        return (
                          !this.instance.settings.dragAutoSnap &&
                            s &&
                            (this.doSlideClose = !0),
                          void (
                            this.instance.settings.dragAutoSnap &&
                            s &&
                            this.instance.close()
                          )
                        );
                      }
                    }
                  },
                },
                {
                  key: "shouldChange",
                  value: function () {
                    var e = !1;
                    if (Math.abs(this.currentX) >= this.toleranceX) {
                      var t = this.currentX > 0 ? "right" : "left";
                      (("left" == t &&
                        this.slide !== this.slide.parentNode.lastChild) ||
                        ("right" == t &&
                          this.slide !== this.slide.parentNode.firstChild)) &&
                        (e = t);
                    }
                    return e;
                  },
                },
                {
                  key: "shouldClose",
                  value: function () {
                    var e = !1;
                    return (
                      Math.abs(this.currentY) >= this.toleranceY && (e = !0),
                      e
                    );
                  },
                },
                {
                  key: "setTranslate",
                  value: function (e, t, i) {
                    var n =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    ((e.style.transition = n ? "all .2s ease" : ""),
                      (e.style.transform = "translate3d("
                        .concat(t, "px, ")
                        .concat(i, "px, 0)")));
                  },
                },
              ],
            );
          function M(e, t, i, n) {
            var s = this,
              o = e.querySelector(".ginner-container"),
              r = "gvideo" + i,
              a = e.querySelector(".gslide-media"),
              l = this.getAllPlayers();
            (d(o, "gvideo-container"),
              a.insertBefore(
                y('<div class="gvideo-wrapper"></div>'),
                a.firstChild,
              ));
            var c = e.querySelector(".gvideo-wrapper");
            w(this.settings.plyr.css, "Plyr");
            var u = t.href,
              h = null == t ? void 0 : t.videoProvider,
              f = !1;
            ((a.style.maxWidth = t.width),
              w(this.settings.plyr.js, "Plyr", function () {
                if (
                  (!h && u.match(/vimeo\.com\/([0-9]*)/) && (h = "vimeo"),
                  !h &&
                    (u.match(
                      /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/,
                    ) ||
                      u.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
                      u.match(
                        /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/,
                      ) ||
                      u.match(
                        /(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/,
                      )) &&
                    (h = "youtube"),
                  "local" === h || !h)
                ) {
                  h = "local";
                  var o = '<video id="' + r + '" ';
                  ((o += 'style="background:#000; max-width: '.concat(
                    t.width,
                    ';" ',
                  )),
                    (o += 'preload="metadata" '),
                    (o += 'x-webkit-airplay="allow" '),
                    (o += "playsinline "),
                    (o += "controls "),
                    (o += 'class="gvideo-local">'),
                    (o += '<source src="'.concat(u, '">')),
                    (f = y((o += "</video>"))));
                }
                var a =
                  f ||
                  y(
                    '<div id="'
                      .concat(r, '" data-plyr-provider="')
                      .concat(h, '" data-plyr-embed-id="')
                      .concat(u, '"></div>'),
                  );
                (d(c, "".concat(h, "-video gvideo")),
                  c.appendChild(a),
                  c.setAttribute("data-id", r),
                  c.setAttribute("data-index", i));
                var g = O(s.settings.plyr, "config")
                    ? s.settings.plyr.config
                    : {},
                  p = new Plyr("#" + r, g);
                (p.on("ready", function (e) {
                  ((l[r] = e.detail.plyr), x(n) && n());
                }),
                  _(
                    function () {
                      return (
                        e.querySelector("iframe") &&
                        "true" == e.querySelector("iframe").dataset.ready
                      );
                    },
                    function () {
                      s.resize(e);
                    },
                  ),
                  p.on("enterfullscreen", $),
                  p.on("exitfullscreen", $));
              }));
          }
          function $(e) {
            var t = f(e.target, ".gslide-media");
            ("enterfullscreen" === e.type && d(t, "fullscreen"),
              "exitfullscreen" === e.type && u(t, "fullscreen"));
          }
          function j(e, t, i, n) {
            var s,
              o = this,
              r = e.querySelector(".gslide-media"),
              a = !(!O(t, "href") || !t.href) && t.href.split("#").pop().trim(),
              l = !(!O(t, "content") || !t.content) && t.content;
            if (
              l &&
              (E(l) &&
                (s = y('<div class="ginlined-content">'.concat(l, "</div>"))),
              A(l))
            ) {
              "none" == l.style.display && (l.style.display = "block");
              var u = document.createElement("div");
              ((u.className = "ginlined-content"), u.appendChild(l), (s = u));
            }
            if (a) {
              var h = document.getElementById(a);
              if (!h) return !1;
              var f = h.cloneNode(!0);
              ((f.style.height = t.height),
                (f.style.maxWidth = t.width),
                d(f, "ginlined-content"),
                (s = f));
            }
            if (!s)
              return (
                console.error("Unable to append inline slide content", t),
                !1
              );
            ((r.style.height = t.height),
              (r.style.width = t.width),
              r.appendChild(s),
              (this.events["inlineclose" + a] = c("click", {
                onElement: r.querySelectorAll(".gtrigger-close"),
                withCallback: function (e) {
                  (e.preventDefault(), o.close());
                },
              })),
              x(n) && n());
          }
          function z(e, t, i, n) {
            var s = e.querySelector(".gslide-media"),
              o = (function (e) {
                var t = e.url,
                  i = e.allow,
                  n = e.callback,
                  s = e.appendTo,
                  o = document.createElement("iframe");
                return (
                  (o.className = "vimeo-video gvideo"),
                  (o.src = t),
                  (o.style.width = "100%"),
                  (o.style.height = "100%"),
                  i && o.setAttribute("allow", i),
                  (o.onload = function () {
                    ((o.onload = null), d(o, "node-ready"), x(n) && n());
                  }),
                  s && s.appendChild(o),
                  o
                );
              })({ url: t.href, callback: n });
            ((s.parentNode.style.maxWidth = t.width),
              (s.parentNode.style.height = t.height),
              s.appendChild(o));
          }
          var H = i(
              function t() {
                var i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (e(this, t),
                  (this.defaults = {
                    href: "",
                    sizes: "",
                    srcset: "",
                    title: "",
                    type: "",
                    videoProvider: "",
                    description: "",
                    alt: "",
                    descPosition: "bottom",
                    effect: "",
                    width: "",
                    height: "",
                    content: !1,
                    zoomable: !0,
                    draggable: !0,
                  }),
                  k(i) && (this.defaults = r(this.defaults, i)));
              },
              [
                {
                  key: "sourceType",
                  value: function (e) {
                    var t = e;
                    return null !==
                      (e = e.toLowerCase()).match(
                        /\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/,
                      )
                      ? "image"
                      : e.match(
                            /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/,
                          ) ||
                          e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
                          e.match(
                            /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/,
                          ) ||
                          e.match(
                            /(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/,
                          ) ||
                          e.match(/vimeo\.com\/([0-9]*)/) ||
                          null !== e.match(/\.(mp4|ogg|webm|mov)/)
                        ? "video"
                        : null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)
                          ? "audio"
                          : e.indexOf("#") > -1 &&
                              "" !== t.split("#").pop().trim()
                            ? "inline"
                            : e.indexOf("goajax=true") > -1
                              ? "ajax"
                              : "external";
                  },
                },
                {
                  key: "parseConfig",
                  value: function (e, t) {
                    var i = this,
                      n = r({ descPosition: t.descPosition }, this.defaults);
                    if (k(e) && !A(e)) {
                      O(e, "type") ||
                        (O(e, "content") && e.content
                          ? (e.type = "inline")
                          : O(e, "href") && (e.type = this.sourceType(e.href)));
                      var s = r(n, e);
                      return (this.setSize(s, t), s);
                    }
                    var o = "",
                      l = e.getAttribute("data-glightbox"),
                      c = e.nodeName.toLowerCase();
                    if (
                      ("a" === c && (o = e.href),
                      "img" === c && ((o = e.src), (n.alt = e.alt)),
                      (n.href = o),
                      a(n, function (s, o) {
                        O(t, o) && "width" !== o && (n[o] = t[o]);
                        var r = e.dataset[o];
                        L(r) || (n[o] = i.sanitizeValue(r));
                      }),
                      n.content && (n.type = "inline"),
                      !n.type && o && (n.type = this.sourceType(o)),
                      L(l))
                    ) {
                      if (!n.title && "a" == c) {
                        var d = e.title;
                        L(d) || "" === d || (n.title = d);
                      }
                      if (!n.title && "img" == c) {
                        var u = e.alt;
                        L(u) || "" === u || (n.title = u);
                      }
                    } else {
                      var h = [];
                      (a(n, function (e, t) {
                        h.push(";\\s?" + t);
                      }),
                        (h = h.join("\\s?:|")),
                        "" !== l.trim() &&
                          a(n, function (e, t) {
                            var s = l,
                              o = new RegExp(
                                "s?" + t + "s?:s?(.*?)(" + h + "s?:|$)",
                              ),
                              r = s.match(o);
                            if (r && r.length && r[1]) {
                              var a = r[1].trim().replace(/;\s*$/, "");
                              n[t] = i.sanitizeValue(a);
                            }
                          }));
                    }
                    if (
                      n.description &&
                      "." === n.description.substring(0, 1)
                    ) {
                      var f;
                      try {
                        f = document.querySelector(n.description).innerHTML;
                      } catch (e) {
                        if (!(e instanceof DOMException)) throw e;
                      }
                      f && (n.description = f);
                    }
                    if (!n.description) {
                      var g = e.querySelector(".glightbox-desc");
                      g && (n.description = g.innerHTML);
                    }
                    return (this.setSize(n, t, e), (this.slideConfig = n), n);
                  },
                },
                {
                  key: "setSize",
                  value: function (e, t) {
                    var i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      n =
                        "video" == e.type
                          ? this.checkSize(t.videosWidth)
                          : this.checkSize(t.width),
                      s = this.checkSize(t.height);
                    return (
                      (e.width =
                        O(e, "width") && "" !== e.width
                          ? this.checkSize(e.width)
                          : n),
                      (e.height =
                        O(e, "height") && "" !== e.height
                          ? this.checkSize(e.height)
                          : s),
                      i &&
                        "image" == e.type &&
                        ((e._hasCustomWidth = !!i.dataset.width),
                        (e._hasCustomHeight = !!i.dataset.height)),
                      e
                    );
                  },
                },
                {
                  key: "checkSize",
                  value: function (e) {
                    return I(e) ? "".concat(e, "px") : e;
                  },
                },
                {
                  key: "sanitizeValue",
                  value: function (e) {
                    return "true" !== e && "false" !== e ? e : "true" === e;
                  },
                },
              ],
            ),
            W = i(
              function t(i, n, s) {
                (e(this, t),
                  (this.element = i),
                  (this.instance = n),
                  (this.index = s));
              },
              [
                {
                  key: "setContent",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      i =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                    if (h(t, "loaded")) return !1;
                    var n = this.instance.settings,
                      s = this.slideConfig,
                      o = S();
                    x(n.beforeSlideLoad) &&
                      n.beforeSlideLoad({
                        index: this.index,
                        slide: t,
                        player: !1,
                      });
                    var r = s.type,
                      a = s.descPosition,
                      l = t.querySelector(".gslide-media"),
                      c = t.querySelector(".gslide-title"),
                      u = t.querySelector(".gslide-desc"),
                      f = t.querySelector(".gdesc-inner"),
                      g = i,
                      p = "gSlideTitle_" + this.index,
                      m = "gSlideDesc_" + this.index;
                    if (
                      (x(n.afterSlideLoad) &&
                        (g = function () {
                          (x(i) && i(),
                            n.afterSlideLoad({
                              index: e.index,
                              slide: t,
                              player: e.instance.getSlidePlayerInstance(
                                e.index,
                              ),
                            }));
                        }),
                      "" == s.title && "" == s.description
                        ? f && f.parentNode.parentNode.removeChild(f.parentNode)
                        : (c && "" !== s.title
                            ? ((c.id = p), (c.innerHTML = s.title))
                            : c.parentNode.removeChild(c),
                          u && "" !== s.description
                            ? ((u.id = m),
                              o && n.moreLength > 0
                                ? ((s.smallDescription = this.slideShortDesc(
                                    s.description,
                                    n.moreLength,
                                    n.moreText,
                                  )),
                                  (u.innerHTML = s.smallDescription),
                                  this.descriptionEvents(u, s))
                                : (u.innerHTML = s.description))
                            : u.parentNode.removeChild(u),
                          d(l.parentNode, "desc-".concat(a)),
                          d(f.parentNode, "description-".concat(a))),
                      d(l, "gslide-".concat(r)),
                      d(t, "loaded"),
                      "video" !== r)
                    ) {
                      if ("external" !== r)
                        return "inline" === r
                          ? (j.apply(this.instance, [t, s, this.index, g]),
                            void (
                              s.draggable &&
                              new N({
                                dragEl: t.querySelector(".gslide-inline"),
                                toleranceX: n.dragToleranceX,
                                toleranceY: n.dragToleranceY,
                                slide: t,
                                instance: this.instance,
                              })
                            ))
                          : void ("image" !== r
                              ? x(g) && g()
                              : (function (e, t, i, n) {
                                  var s = e.querySelector(".gslide-media"),
                                    o = new Image(),
                                    r = "gSlideTitle_" + i,
                                    a = "gSlideDesc_" + i;
                                  (o.addEventListener(
                                    "load",
                                    function () {
                                      x(n) && n();
                                    },
                                    !1,
                                  ),
                                    (o.src = t.href),
                                    "" != t.sizes &&
                                      "" != t.srcset &&
                                      ((o.sizes = t.sizes),
                                      (o.srcset = t.srcset)),
                                    (o.alt = ""),
                                    L(t.alt) || "" === t.alt || (o.alt = t.alt),
                                    "" !== t.title &&
                                      o.setAttribute("aria-labelledby", r),
                                    "" !== t.description &&
                                      o.setAttribute("aria-describedby", a),
                                    t.hasOwnProperty("_hasCustomWidth") &&
                                      t._hasCustomWidth &&
                                      (o.style.width = t.width),
                                    t.hasOwnProperty("_hasCustomHeight") &&
                                      t._hasCustomHeight &&
                                      (o.style.height = t.height),
                                    s.insertBefore(o, s.firstChild));
                                })(t, s, this.index, function () {
                                  var i = t.querySelector("img");
                                  (s.draggable &&
                                    new N({
                                      dragEl: i,
                                      toleranceX: n.dragToleranceX,
                                      toleranceY: n.dragToleranceY,
                                      slide: t,
                                      instance: e.instance,
                                    }),
                                    s.zoomable &&
                                      i.naturalWidth > i.offsetWidth &&
                                      (d(i, "zoomable"),
                                      new P(i, t, function () {
                                        e.instance.resize();
                                      })),
                                    x(g) && g());
                                }));
                      z.apply(this, [t, s, this.index, g]);
                    } else M.apply(this.instance, [t, s, this.index, g]);
                  },
                },
                {
                  key: "slideShortDesc",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 50,
                      i =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      n = document.createElement("div");
                    n.innerHTML = e;
                    var s = i;
                    if ((e = n.innerText.trim()).length <= t) return e;
                    var o = e.substr(0, t - 1);
                    return s
                      ? ((n = null),
                        o + '... <a href="#" class="desc-more">' + i + "</a>")
                      : o;
                  },
                },
                {
                  key: "descriptionEvents",
                  value: function (e, t) {
                    var i = this,
                      n = e.querySelector(".desc-more");
                    if (!n) return !1;
                    c("click", {
                      onElement: n,
                      withCallback: function (e, n) {
                        e.preventDefault();
                        var s = document.body,
                          o = f(n, ".gslide-desc");
                        if (!o) return !1;
                        ((o.innerHTML = t.description), d(s, "gdesc-open"));
                        var r = c("click", {
                          onElement: [s, f(o, ".gslide-description")],
                          withCallback: function (e, n) {
                            "a" !== e.target.nodeName.toLowerCase() &&
                              (u(s, "gdesc-open"),
                              d(s, "gdesc-closed"),
                              (o.innerHTML = t.smallDescription),
                              i.descriptionEvents(o, t),
                              setTimeout(function () {
                                u(s, "gdesc-closed");
                              }, 400),
                              r.destroy());
                          },
                        });
                      },
                    });
                  },
                },
                {
                  key: "create",
                  value: function () {
                    return y(this.instance.settings.slideHTML);
                  },
                },
                {
                  key: "getConfig",
                  value: function () {
                    A(this.element) ||
                      this.element.hasOwnProperty("draggable") ||
                      (this.element.draggable =
                        this.instance.settings.draggable);
                    var e = new H(this.instance.settings.slideExtraAttributes);
                    return (
                      (this.slideConfig = e.parseConfig(
                        this.element,
                        this.instance.settings,
                      )),
                      this.slideConfig
                    );
                  },
                },
              ],
            );
          function B(e) {
            return Math.sqrt(e.x * e.x + e.y * e.y);
          }
          var Y = i(
            function t(i) {
              (e(this, t), (this.handlers = []), (this.el = i));
            },
            [
              {
                key: "add",
                value: function (e) {
                  this.handlers.push(e);
                },
              },
              {
                key: "del",
                value: function (e) {
                  e || (this.handlers = []);
                  for (var t = this.handlers.length; t >= 0; t--)
                    this.handlers[t] === e && this.handlers.splice(t, 1);
                },
              },
              {
                key: "dispatch",
                value: function () {
                  for (var e = 0, t = this.handlers.length; e < t; e++) {
                    var i = this.handlers[e];
                    "function" == typeof i && i.apply(this.el, arguments);
                  }
                },
              },
            ],
          );
          function X(e, t) {
            var i = new Y(e);
            return (i.add(t), i);
          }
          var F = i(
            function t(i, n) {
              (e(this, t),
                (this.element =
                  "string" == typeof i ? document.querySelector(i) : i),
                (this.start = this.start.bind(this)),
                (this.move = this.move.bind(this)),
                (this.end = this.end.bind(this)),
                (this.cancel = this.cancel.bind(this)),
                this.element.addEventListener("touchstart", this.start, !1),
                this.element.addEventListener("touchmove", this.move, !1),
                this.element.addEventListener("touchend", this.end, !1),
                this.element.addEventListener("touchcancel", this.cancel, !1),
                (this.preV = { x: null, y: null }),
                (this.pinchStartLen = null),
                (this.zoom = 1),
                (this.isDoubleTap = !1));
              var s = function () {};
              ((this.rotate = X(this.element, n.rotate || s)),
                (this.touchStart = X(this.element, n.touchStart || s)),
                (this.multipointStart = X(
                  this.element,
                  n.multipointStart || s,
                )),
                (this.multipointEnd = X(this.element, n.multipointEnd || s)),
                (this.pinch = X(this.element, n.pinch || s)),
                (this.swipe = X(this.element, n.swipe || s)),
                (this.tap = X(this.element, n.tap || s)),
                (this.doubleTap = X(this.element, n.doubleTap || s)),
                (this.longTap = X(this.element, n.longTap || s)),
                (this.singleTap = X(this.element, n.singleTap || s)),
                (this.pressMove = X(this.element, n.pressMove || s)),
                (this.twoFingerPressMove = X(
                  this.element,
                  n.twoFingerPressMove || s,
                )),
                (this.touchMove = X(this.element, n.touchMove || s)),
                (this.touchEnd = X(this.element, n.touchEnd || s)),
                (this.touchCancel = X(this.element, n.touchCancel || s)),
                (this.translateContainer = this.element),
                (this._cancelAllHandler = this.cancelAll.bind(this)),
                window.addEventListener("scroll", this._cancelAllHandler),
                (this.delta = null),
                (this.last = null),
                (this.now = null),
                (this.tapTimeout = null),
                (this.singleTapTimeout = null),
                (this.longTapTimeout = null),
                (this.swipeTimeout = null),
                (this.x1 = this.x2 = this.y1 = this.y2 = null),
                (this.preTapPosition = { x: null, y: null }));
            },
            [
              {
                key: "start",
                value: function (e) {
                  if (e.touches)
                    if (
                      e.target &&
                      e.target.nodeName &&
                      ["a", "button", "input"].indexOf(
                        e.target.nodeName.toLowerCase(),
                      ) >= 0
                    )
                      console.log(
                        "ignore drag for this touched element",
                        e.target.nodeName.toLowerCase(),
                      );
                    else {
                      ((this.now = Date.now()),
                        (this.x1 = e.touches[0].pageX),
                        (this.y1 = e.touches[0].pageY),
                        (this.delta = this.now - (this.last || this.now)),
                        this.touchStart.dispatch(e, this.element),
                        null !== this.preTapPosition.x &&
                          ((this.isDoubleTap =
                            this.delta > 0 &&
                            this.delta <= 250 &&
                            Math.abs(this.preTapPosition.x - this.x1) < 30 &&
                            Math.abs(this.preTapPosition.y - this.y1) < 30),
                          this.isDoubleTap &&
                            clearTimeout(this.singleTapTimeout)),
                        (this.preTapPosition.x = this.x1),
                        (this.preTapPosition.y = this.y1),
                        (this.last = this.now));
                      var t = this.preV;
                      if (e.touches.length > 1) {
                        (this._cancelLongTap(), this._cancelSingleTap());
                        var i = {
                          x: e.touches[1].pageX - this.x1,
                          y: e.touches[1].pageY - this.y1,
                        };
                        ((t.x = i.x),
                          (t.y = i.y),
                          (this.pinchStartLen = B(t)),
                          this.multipointStart.dispatch(e, this.element));
                      }
                      ((this._preventTap = !1),
                        (this.longTapTimeout = setTimeout(
                          function () {
                            (this.longTap.dispatch(e, this.element),
                              (this._preventTap = !0));
                          }.bind(this),
                          750,
                        )));
                    }
                },
              },
              {
                key: "move",
                value: function (e) {
                  if (e.touches) {
                    var t = this.preV,
                      i = e.touches.length,
                      n = e.touches[0].pageX,
                      s = e.touches[0].pageY;
                    if (((this.isDoubleTap = !1), i > 1)) {
                      var o = e.touches[1].pageX,
                        r = e.touches[1].pageY,
                        a = {
                          x: e.touches[1].pageX - n,
                          y: e.touches[1].pageY - s,
                        };
                      (null !== t.x &&
                        (this.pinchStartLen > 0 &&
                          ((e.zoom = B(a) / this.pinchStartLen),
                          this.pinch.dispatch(e, this.element)),
                        (e.angle = (function (e, t) {
                          var i = (function (e, t) {
                            var i = B(e) * B(t);
                            if (0 === i) return 0;
                            var n =
                              (function (e, t) {
                                return e.x * t.x + e.y * t.y;
                              })(e, t) / i;
                            return (n > 1 && (n = 1), Math.acos(n));
                          })(e, t);
                          return (
                            (function (e, t) {
                              return e.x * t.y - t.x * e.y;
                            })(e, t) > 0 && (i *= -1),
                            (180 * i) / Math.PI
                          );
                        })(a, t)),
                        this.rotate.dispatch(e, this.element)),
                        (t.x = a.x),
                        (t.y = a.y),
                        null !== this.x2 && null !== this.sx2
                          ? ((e.deltaX = (n - this.x2 + o - this.sx2) / 2),
                            (e.deltaY = (s - this.y2 + r - this.sy2) / 2))
                          : ((e.deltaX = 0), (e.deltaY = 0)),
                        this.twoFingerPressMove.dispatch(e, this.element),
                        (this.sx2 = o),
                        (this.sy2 = r));
                    } else {
                      if (null !== this.x2) {
                        ((e.deltaX = n - this.x2), (e.deltaY = s - this.y2));
                        var l = Math.abs(this.x1 - this.x2),
                          c = Math.abs(this.y1 - this.y2);
                        (l > 10 || c > 10) && (this._preventTap = !0);
                      } else ((e.deltaX = 0), (e.deltaY = 0));
                      this.pressMove.dispatch(e, this.element);
                    }
                    (this.touchMove.dispatch(e, this.element),
                      this._cancelLongTap(),
                      (this.x2 = n),
                      (this.y2 = s),
                      i > 1 && e.preventDefault());
                  }
                },
              },
              {
                key: "end",
                value: function (e) {
                  if (e.changedTouches) {
                    this._cancelLongTap();
                    var t = this;
                    (e.touches.length < 2 &&
                      (this.multipointEnd.dispatch(e, this.element),
                      (this.sx2 = this.sy2 = null)),
                      (this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
                      (this.y2 && Math.abs(this.y1 - this.y2) > 30)
                        ? ((e.direction = this._swipeDirection(
                            this.x1,
                            this.x2,
                            this.y1,
                            this.y2,
                          )),
                          (this.swipeTimeout = setTimeout(function () {
                            t.swipe.dispatch(e, t.element);
                          }, 0)))
                        : ((this.tapTimeout = setTimeout(function () {
                            (t._preventTap || t.tap.dispatch(e, t.element),
                              t.isDoubleTap &&
                                (t.doubleTap.dispatch(e, t.element),
                                (t.isDoubleTap = !1)));
                          }, 0)),
                          t.isDoubleTap ||
                            (t.singleTapTimeout = setTimeout(function () {
                              t.singleTap.dispatch(e, t.element);
                            }, 250))),
                      this.touchEnd.dispatch(e, this.element),
                      (this.preV.x = 0),
                      (this.preV.y = 0),
                      (this.zoom = 1),
                      (this.pinchStartLen = null),
                      (this.x1 = this.x2 = this.y1 = this.y2 = null));
                  }
                },
              },
              {
                key: "cancelAll",
                value: function () {
                  ((this._preventTap = !0),
                    clearTimeout(this.singleTapTimeout),
                    clearTimeout(this.tapTimeout),
                    clearTimeout(this.longTapTimeout),
                    clearTimeout(this.swipeTimeout));
                },
              },
              {
                key: "cancel",
                value: function (e) {
                  (this.cancelAll(),
                    this.touchCancel.dispatch(e, this.element));
                },
              },
              {
                key: "_cancelLongTap",
                value: function () {
                  clearTimeout(this.longTapTimeout);
                },
              },
              {
                key: "_cancelSingleTap",
                value: function () {
                  clearTimeout(this.singleTapTimeout);
                },
              },
              {
                key: "_swipeDirection",
                value: function (e, t, i, n) {
                  return Math.abs(e - t) >= Math.abs(i - n)
                    ? e - t > 0
                      ? "Left"
                      : "Right"
                    : i - n > 0
                      ? "Up"
                      : "Down";
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  this[e] && this[e].add(t);
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  this[e] && this[e].del(t);
                },
              },
              {
                key: "destroy",
                value: function () {
                  return (
                    this.singleTapTimeout &&
                      clearTimeout(this.singleTapTimeout),
                    this.tapTimeout && clearTimeout(this.tapTimeout),
                    this.longTapTimeout && clearTimeout(this.longTapTimeout),
                    this.swipeTimeout && clearTimeout(this.swipeTimeout),
                    this.element.removeEventListener("touchstart", this.start),
                    this.element.removeEventListener("touchmove", this.move),
                    this.element.removeEventListener("touchend", this.end),
                    this.element.removeEventListener(
                      "touchcancel",
                      this.cancel,
                    ),
                    this.rotate.del(),
                    this.touchStart.del(),
                    this.multipointStart.del(),
                    this.multipointEnd.del(),
                    this.pinch.del(),
                    this.swipe.del(),
                    this.tap.del(),
                    this.doubleTap.del(),
                    this.longTap.del(),
                    this.singleTap.del(),
                    this.pressMove.del(),
                    this.twoFingerPressMove.del(),
                    this.touchMove.del(),
                    this.touchEnd.del(),
                    this.touchCancel.del(),
                    (this.preV =
                      this.pinchStartLen =
                      this.zoom =
                      this.isDoubleTap =
                      this.delta =
                      this.last =
                      this.now =
                      this.tapTimeout =
                      this.singleTapTimeout =
                      this.longTapTimeout =
                      this.swipeTimeout =
                      this.x1 =
                      this.x2 =
                      this.y1 =
                      this.y2 =
                      this.preTapPosition =
                      this.rotate =
                      this.touchStart =
                      this.multipointStart =
                      this.multipointEnd =
                      this.pinch =
                      this.swipe =
                      this.tap =
                      this.doubleTap =
                      this.longTap =
                      this.singleTap =
                      this.pressMove =
                      this.touchMove =
                      this.touchEnd =
                      this.touchCancel =
                      this.twoFingerPressMove =
                        null),
                    window.removeEventListener(
                      "scroll",
                      this._cancelAllHandler,
                    ),
                    null
                  );
                },
              },
            ],
          );
          function R(e) {
            var t = (function () {
                var e,
                  t = document.createElement("fakeelement"),
                  i = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd",
                  };
                for (e in i) if (void 0 !== t.style[e]) return i[e];
              })(),
              i =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
              n = h(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
              s = f(n, ".ginner-container"),
              o = e.querySelector(".gslide-description");
            (i > 769 && (n = s),
              d(n, "greset"),
              p(n, "translate3d(0, 0, 0)"),
              c(t, {
                onElement: n,
                once: !0,
                withCallback: function (e, t) {
                  u(n, "greset");
                },
              }),
              (n.style.opacity = ""),
              o && (o.style.opacity = ""));
          }
          var V = S(),
            U =
              null !== S() ||
              void 0 !== document.createTouch ||
              "ontouchstart" in window ||
              "onmsgesturechange" in window ||
              navigator.msMaxTouchPoints,
            K = document.getElementsByTagName("html")[0],
            Q = {
              selector: ".glightbox",
              elements: null,
              skin: "clean",
              theme: "clean",
              closeButton: !0,
              startAt: null,
              autoplayVideos: !0,
              autofocusVideos: !0,
              descPosition: "bottom",
              width: "900px",
              height: "506px",
              videosWidth: "960px",
              beforeSlideChange: null,
              afterSlideChange: null,
              beforeSlideLoad: null,
              afterSlideLoad: null,
              slideInserted: null,
              slideRemoved: null,
              slideExtraAttributes: null,
              onOpen: null,
              onClose: null,
              loop: !1,
              zoomable: !0,
              draggable: !0,
              dragAutoSnap: !1,
              dragToleranceX: 40,
              dragToleranceY: 65,
              preload: !0,
              oneSlidePerOpen: !1,
              touchNavigation: !0,
              touchFollowAxis: !0,
              keyboardNavigation: !0,
              closeOnOutsideClick: !0,
              plugins: !1,
              plyr: {
                css: "https://cdn.plyr.io/3.6.12/plyr.css",
                js: "https://cdn.plyr.io/3.6.12/plyr.js",
                config: {
                  ratio: "16:9",
                  fullscreen: { enabled: !0, iosNative: !0 },
                  youtube: {
                    noCookie: !0,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                  },
                  vimeo: {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    transparent: !1,
                  },
                },
              },
              openEffect: "zoom",
              closeEffect: "zoom",
              slideEffect: "slide",
              moreText: "See more",
              moreLength: 60,
              cssEfects: {
                fade: { in: "fadeIn", out: "fadeOut" },
                zoom: { in: "zoomIn", out: "zoomOut" },
                slide: { in: "slideInRight", out: "slideOutLeft" },
                slideBack: { in: "slideInLeft", out: "slideOutRight" },
                none: { in: "none", out: "none" },
              },
              svg: {
                close:
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>',
              },
              slideHTML:
                '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
              lightboxHTML:
                '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>',
            },
            G = i(
              function t() {
                var i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (e(this, t),
                  (this.customOptions = i),
                  (this.settings = r(Q, i)),
                  (this.effectsClasses = this.getAnimationClasses()),
                  (this.videoPlayers = {}),
                  (this.apiEvents = []),
                  (this.fullElementsList = !1));
              },
              [
                {
                  key: "init",
                  value: function () {
                    var e = this,
                      t = this.getSelector();
                    (t &&
                      (this.baseEvents = c("click", {
                        onElement: t,
                        withCallback: function (t, i) {
                          (t.preventDefault(), e.open(i));
                        },
                      })),
                      (this.elements = this.getElements()));
                  },
                },
                {
                  key: "open",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                    if (0 === this.elements.length) return !1;
                    ((this.activeSlide = null),
                      (this.prevActiveSlideIndex = null),
                      (this.prevActiveSlide = null));
                    var i = I(t) ? t : this.settings.startAt;
                    if (A(e)) {
                      var n = e.getAttribute("data-gallery");
                      (n &&
                        ((this.fullElementsList = this.elements),
                        (this.elements = this.getGalleryElements(
                          this.elements,
                          n,
                        ))),
                        L(i) && (i = this.getElementIndex(e)) < 0 && (i = 0));
                    }
                    (I(i) || (i = 0),
                      this.build(),
                      g(
                        this.overlay,
                        "none" === this.settings.openEffect
                          ? "none"
                          : this.settings.cssEfects.fade.in,
                      ));
                    var s = document.body,
                      o =
                        window.innerWidth -
                        document.documentElement.clientWidth;
                    if (o > 0) {
                      var r = document.createElement("style");
                      ((r.type = "text/css"),
                        (r.className = "gcss-styles"),
                        (r.innerText =
                          ".gscrollbar-fixer {margin-right: ".concat(o, "px}")),
                        document.head.appendChild(r),
                        d(s, "gscrollbar-fixer"));
                    }
                    (d(s, "glightbox-open"),
                      d(K, "glightbox-open"),
                      V &&
                        (d(document.body, "glightbox-mobile"),
                        (this.settings.slideEffect = "slide")),
                      this.showSlide(i, !0),
                      1 === this.elements.length
                        ? (d(this.prevButton, "glightbox-button-hidden"),
                          d(this.nextButton, "glightbox-button-hidden"))
                        : (u(this.prevButton, "glightbox-button-hidden"),
                          u(this.nextButton, "glightbox-button-hidden")),
                      (this.lightboxOpen = !0),
                      this.trigger("open"),
                      x(this.settings.onOpen) && this.settings.onOpen(),
                      U &&
                        this.settings.touchNavigation &&
                        (function (e) {
                          if (e.events.hasOwnProperty("touch")) return !1;
                          var t,
                            i,
                            n,
                            s = b(),
                            o = s.width,
                            r = s.height,
                            a = !1,
                            l = null,
                            c = null,
                            g = null,
                            m = !1,
                            v = 1,
                            y = 1,
                            _ = !1,
                            w = !1,
                            S = null,
                            x = null,
                            E = null,
                            A = null,
                            T = 0,
                            C = 0,
                            k = !1,
                            L = !1,
                            O = {},
                            q = {},
                            I = 0,
                            D = 0,
                            P = document.getElementById("glightbox-slider"),
                            N = document.querySelector(".goverlay"),
                            M = new F(P, {
                              touchStart: function (t) {
                                if (
                                  ((a = !0),
                                  (h(
                                    t.targetTouches[0].target,
                                    "ginner-container",
                                  ) ||
                                    f(
                                      t.targetTouches[0].target,
                                      ".gslide-desc",
                                    ) ||
                                    "a" ==
                                      t.targetTouches[0].target.nodeName.toLowerCase()) &&
                                    (a = !1),
                                  f(
                                    t.targetTouches[0].target,
                                    ".gslide-inline",
                                  ) &&
                                    !h(
                                      t.targetTouches[0].target.parentNode,
                                      "gslide-inline",
                                    ) &&
                                    (a = !1),
                                  a)
                                ) {
                                  if (
                                    ((q = t.targetTouches[0]),
                                    (O.pageX = t.targetTouches[0].pageX),
                                    (O.pageY = t.targetTouches[0].pageY),
                                    (I = t.targetTouches[0].clientX),
                                    (D = t.targetTouches[0].clientY),
                                    (l = e.activeSlide),
                                    (c = l.querySelector(".gslide-media")),
                                    (n = l.querySelector(".gslide-inline")),
                                    (g = null),
                                    h(c, "gslide-image") &&
                                      (g = c.querySelector("img")),
                                    (window.innerWidth ||
                                      document.documentElement.clientWidth ||
                                      document.body.clientWidth) > 769 &&
                                      (c =
                                        l.querySelector(".ginner-container")),
                                    u(N, "greset"),
                                    t.pageX > 20 &&
                                      t.pageX < window.innerWidth - 20)
                                  )
                                    return;
                                  t.preventDefault();
                                }
                              },
                              touchMove: function (s) {
                                if (a && ((q = s.targetTouches[0]), !_ && !w)) {
                                  if (n && n.offsetHeight > r) {
                                    var l = O.pageX - q.pageX;
                                    if (Math.abs(l) <= 13) return !1;
                                  }
                                  m = !0;
                                  var d,
                                    u = s.targetTouches[0].clientX,
                                    h = s.targetTouches[0].clientY,
                                    f = I - u,
                                    v = D - h;
                                  if (
                                    (Math.abs(f) > Math.abs(v)
                                      ? ((k = !1), (L = !0))
                                      : ((L = !1), (k = !0)),
                                    (t = q.pageX - O.pageX),
                                    (T = (100 * t) / o),
                                    (i = q.pageY - O.pageY),
                                    (C = (100 * i) / r),
                                    k &&
                                      g &&
                                      ((d = 1 - Math.abs(i) / r),
                                      (N.style.opacity = d),
                                      e.settings.touchFollowAxis && (T = 0)),
                                    L &&
                                      ((d = 1 - Math.abs(t) / o),
                                      (c.style.opacity = d),
                                      e.settings.touchFollowAxis && (C = 0)),
                                    !g)
                                  )
                                    return p(
                                      c,
                                      "translate3d(".concat(T, "%, 0, 0)"),
                                    );
                                  p(
                                    c,
                                    "translate3d("
                                      .concat(T, "%, ")
                                      .concat(C, "%, 0)"),
                                  );
                                }
                              },
                              touchEnd: function () {
                                if (a) {
                                  if (((m = !1), w || _))
                                    return ((E = S), void (A = x));
                                  var t = Math.abs(parseInt(C)),
                                    i = Math.abs(parseInt(T));
                                  if (!(t > 29 && g))
                                    return t < 29 && i < 25
                                      ? (d(N, "greset"),
                                        (N.style.opacity = 1),
                                        R(c))
                                      : void 0;
                                  e.close();
                                }
                              },
                              multipointEnd: function () {
                                setTimeout(function () {
                                  _ = !1;
                                }, 50);
                              },
                              multipointStart: function () {
                                ((_ = !0), (v = y || 1));
                              },
                              pinch: function (e) {
                                if (!g || m) return !1;
                                ((_ = !0), (g.scaleX = g.scaleY = v * e.zoom));
                                var t = v * e.zoom;
                                if (((w = !0), t <= 1))
                                  return (
                                    (w = !1),
                                    (t = 1),
                                    (A = null),
                                    (E = null),
                                    (S = null),
                                    (x = null),
                                    void g.setAttribute("style", "")
                                  );
                                (t > 4.5 && (t = 4.5),
                                  (g.style.transform = "scale3d("
                                    .concat(t, ", ")
                                    .concat(t, ", 1)")),
                                  (y = t));
                              },
                              pressMove: function (e) {
                                if (w && !_) {
                                  var t = q.pageX - O.pageX,
                                    i = q.pageY - O.pageY;
                                  (E && (t += E),
                                    A && (i += A),
                                    (S = t),
                                    (x = i));
                                  var n = "translate3d("
                                    .concat(t, "px, ")
                                    .concat(i, "px, 0)");
                                  (y &&
                                    (n += " scale3d("
                                      .concat(y, ", ")
                                      .concat(y, ", 1)")),
                                    p(g, n));
                                }
                              },
                              swipe: function (t) {
                                if (!w)
                                  if (_) _ = !1;
                                  else {
                                    if ("Left" == t.direction) {
                                      if (e.index == e.elements.length - 1)
                                        return R(c);
                                      e.nextSlide();
                                    }
                                    if ("Right" == t.direction) {
                                      if (0 == e.index) return R(c);
                                      e.prevSlide();
                                    }
                                  }
                              },
                            });
                          e.events.touch = M;
                        })(this),
                      this.settings.keyboardNavigation &&
                        (function (e) {
                          if (e.events.hasOwnProperty("keyboard")) return !1;
                          e.events.keyboard = c("keydown", {
                            onElement: window,
                            withCallback: function (t, i) {
                              var n = (t = t || window.event).keyCode;
                              if (9 == n) {
                                var s = document.querySelector(".gbtn.focused");
                                if (!s) {
                                  var o =
                                    !(
                                      !document.activeElement ||
                                      !document.activeElement.nodeName
                                    ) &&
                                    document.activeElement.nodeName.toLocaleLowerCase();
                                  if (
                                    "input" == o ||
                                    "textarea" == o ||
                                    "button" == o
                                  )
                                    return;
                                }
                                t.preventDefault();
                                var r = document.querySelectorAll(
                                  ".gbtn[data-taborder]",
                                );
                                if (!r || r.length <= 0) return;
                                if (!s) {
                                  var a = D();
                                  return void (
                                    a && (a.focus(), d(a, "focused"))
                                  );
                                }
                                var l = D(s.getAttribute("data-taborder"));
                                (u(s, "focused"),
                                  l && (l.focus(), d(l, "focused")));
                              }
                              (39 == n && e.nextSlide(),
                                37 == n && e.prevSlide(),
                                27 == n && e.close());
                            },
                          });
                        })(this));
                  },
                },
                {
                  key: "openAt",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                    this.open(null, e);
                  },
                },
                {
                  key: "showSlide",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      i =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                    (m(this.loader), (this.index = parseInt(t)));
                    var n = this.slidesContainer.querySelector(".current");
                    (n && u(n, "current"), this.slideAnimateOut());
                    var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                    if (h(s, "loaded"))
                      (this.slideAnimateIn(s, i), v(this.loader));
                    else {
                      m(this.loader);
                      var o = this.elements[t],
                        r = {
                          index: this.index,
                          slide: s,
                          slideNode: s,
                          slideConfig: o.slideConfig,
                          slideIndex: this.index,
                          trigger: o.node,
                          player: null,
                        };
                      (this.trigger("slide_before_load", r),
                        o.instance.setContent(s, function () {
                          (v(e.loader),
                            e.resize(),
                            e.slideAnimateIn(s, i),
                            e.trigger("slide_after_load", r));
                        }));
                    }
                    ((this.slideDescription = s.querySelector(
                      ".gslide-description",
                    )),
                      (this.slideDescriptionContained =
                        this.slideDescription &&
                        h(this.slideDescription.parentNode, "gslide-media")),
                      this.settings.preload &&
                        (this.preloadSlide(t + 1), this.preloadSlide(t - 1)),
                      this.updateNavigationClasses(),
                      (this.activeSlide = s));
                  },
                },
                {
                  key: "preloadSlide",
                  value: function (e) {
                    var t = this;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    if (L(this.elements[e])) return !1;
                    var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                    if (h(i, "loaded")) return !1;
                    var n = this.elements[e],
                      s = n.type,
                      o = {
                        index: e,
                        slide: i,
                        slideNode: i,
                        slideConfig: n.slideConfig,
                        slideIndex: e,
                        trigger: n.node,
                        player: null,
                      };
                    (this.trigger("slide_before_load", o),
                      "video" === s || "external" === s
                        ? setTimeout(function () {
                            n.instance.setContent(i, function () {
                              t.trigger("slide_after_load", o);
                            });
                          }, 200)
                        : n.instance.setContent(i, function () {
                            t.trigger("slide_after_load", o);
                          }));
                  },
                },
                {
                  key: "prevSlide",
                  value: function () {
                    this.goToSlide(this.index - 1);
                  },
                },
                {
                  key: "nextSlide",
                  value: function () {
                    this.goToSlide(this.index + 1);
                  },
                },
                {
                  key: "goToSlide",
                  value: function () {
                    var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    if (
                      ((this.prevActiveSlide = this.activeSlide),
                      (this.prevActiveSlideIndex = this.index),
                      !this.loop() && (e < 0 || e > this.elements.length - 1))
                    )
                      return !1;
                    (e < 0
                      ? (e = this.elements.length - 1)
                      : e >= this.elements.length && (e = 0),
                      this.showSlide(e));
                  },
                },
                {
                  key: "insertSlide",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : -1;
                    t < 0 && (t = this.elements.length);
                    var i = new W(e, this, t),
                      n = i.getConfig(),
                      s = r({}, n),
                      o = i.create(),
                      a = this.elements.length - 1;
                    ((s.index = t),
                      (s.node = !1),
                      (s.instance = i),
                      (s.slideConfig = n),
                      this.elements.splice(t, 0, s));
                    var l = null,
                      c = null;
                    if (this.slidesContainer) {
                      if (t > a) this.slidesContainer.appendChild(o);
                      else {
                        var d =
                          this.slidesContainer.querySelectorAll(".gslide")[t];
                        this.slidesContainer.insertBefore(o, d);
                      }
                      (((this.settings.preload && 0 == this.index && 0 == t) ||
                        this.index - 1 == t ||
                        this.index + 1 == t) &&
                        this.preloadSlide(t),
                        0 === this.index && 0 === t && (this.index = 1),
                        this.updateNavigationClasses(),
                        (l =
                          this.slidesContainer.querySelectorAll(".gslide")[t]),
                        (c = this.getSlidePlayerInstance(t)),
                        (s.slideNode = l));
                    }
                    (this.trigger("slide_inserted", {
                      index: t,
                      slide: l,
                      slideNode: l,
                      slideConfig: n,
                      slideIndex: t,
                      trigger: null,
                      player: c,
                    }),
                      x(this.settings.slideInserted) &&
                        this.settings.slideInserted({
                          index: t,
                          slide: l,
                          player: c,
                        }));
                  },
                },
                {
                  key: "removeSlide",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : -1;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    var t =
                      this.slidesContainer &&
                      this.slidesContainer.querySelectorAll(".gslide")[e];
                    (t &&
                      (this.getActiveSlideIndex() == e &&
                        (e == this.elements.length - 1
                          ? this.prevSlide()
                          : this.nextSlide()),
                      t.parentNode.removeChild(t)),
                      this.elements.splice(e, 1),
                      this.trigger("slide_removed", e),
                      x(this.settings.slideRemoved) &&
                        this.settings.slideRemoved(e));
                  },
                },
                {
                  key: "slideAnimateIn",
                  value: function (e, t) {
                    var i = this,
                      n = e.querySelector(".gslide-media"),
                      s = e.querySelector(".gslide-description"),
                      o = {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlide,
                        slideConfig: L(this.prevActiveSlideIndex)
                          ? null
                          : this.elements[this.prevActiveSlideIndex]
                              .slideConfig,
                        trigger: L(this.prevActiveSlideIndex)
                          ? null
                          : this.elements[this.prevActiveSlideIndex].node,
                        player: this.getSlidePlayerInstance(
                          this.prevActiveSlideIndex,
                        ),
                      },
                      r = {
                        index: this.index,
                        slide: this.activeSlide,
                        slideNode: this.activeSlide,
                        slideConfig: this.elements[this.index].slideConfig,
                        slideIndex: this.index,
                        trigger: this.elements[this.index].node,
                        player: this.getSlidePlayerInstance(this.index),
                      };
                    if (
                      (n.offsetWidth > 0 && s && (v(s), (s.style.display = "")),
                      u(e, this.effectsClasses),
                      t)
                    )
                      g(
                        e,
                        this.settings.cssEfects[this.settings.openEffect].in,
                        function () {
                          (i.settings.autoplayVideos && i.slidePlayerPlay(e),
                            i.trigger("slide_changed", { prev: o, current: r }),
                            x(i.settings.afterSlideChange) &&
                              i.settings.afterSlideChange.apply(i, [o, r]));
                        },
                      );
                    else {
                      var a = this.settings.slideEffect,
                        l = "none" !== a ? this.settings.cssEfects[a].in : a;
                      (this.prevActiveSlideIndex > this.index &&
                        "slide" == this.settings.slideEffect &&
                        (l = this.settings.cssEfects.slideBack.in),
                        g(e, l, function () {
                          (i.settings.autoplayVideos && i.slidePlayerPlay(e),
                            i.trigger("slide_changed", { prev: o, current: r }),
                            x(i.settings.afterSlideChange) &&
                              i.settings.afterSlideChange.apply(i, [o, r]));
                        }));
                    }
                    (setTimeout(function () {
                      i.resize(e);
                    }, 100),
                      d(e, "current"));
                  },
                },
                {
                  key: "slideAnimateOut",
                  value: function () {
                    if (!this.prevActiveSlide) return !1;
                    var e = this.prevActiveSlide;
                    (u(e, this.effectsClasses), d(e, "prev"));
                    var t = this.settings.slideEffect,
                      i = "none" !== t ? this.settings.cssEfects[t].out : t;
                    (this.slidePlayerPause(e),
                      this.trigger("slide_before_change", {
                        prev: {
                          index: this.prevActiveSlideIndex,
                          slide: this.prevActiveSlide,
                          slideNode: this.prevActiveSlide,
                          slideIndex: this.prevActiveSlideIndex,
                          slideConfig: L(this.prevActiveSlideIndex)
                            ? null
                            : this.elements[this.prevActiveSlideIndex]
                                .slideConfig,
                          trigger: L(this.prevActiveSlideIndex)
                            ? null
                            : this.elements[this.prevActiveSlideIndex].node,
                          player: this.getSlidePlayerInstance(
                            this.prevActiveSlideIndex,
                          ),
                        },
                        current: {
                          index: this.index,
                          slide: this.activeSlide,
                          slideNode: this.activeSlide,
                          slideIndex: this.index,
                          slideConfig: this.elements[this.index].slideConfig,
                          trigger: this.elements[this.index].node,
                          player: this.getSlidePlayerInstance(this.index),
                        },
                      }),
                      x(this.settings.beforeSlideChange) &&
                        this.settings.beforeSlideChange.apply(this, [
                          {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            player: this.getSlidePlayerInstance(
                              this.prevActiveSlideIndex,
                            ),
                          },
                          {
                            index: this.index,
                            slide: this.activeSlide,
                            player: this.getSlidePlayerInstance(this.index),
                          },
                        ]),
                      this.prevActiveSlideIndex > this.index &&
                        "slide" == this.settings.slideEffect &&
                        (i = this.settings.cssEfects.slideBack.out),
                      g(e, i, function () {
                        var t = e.querySelector(".ginner-container"),
                          i = e.querySelector(".gslide-media"),
                          n = e.querySelector(".gslide-description");
                        ((t.style.transform = ""),
                          (i.style.transform = ""),
                          u(i, "greset"),
                          (i.style.opacity = ""),
                          n && (n.style.opacity = ""),
                          u(e, "prev"));
                      }));
                  },
                },
                {
                  key: "getAllPlayers",
                  value: function () {
                    return this.videoPlayers;
                  },
                },
                {
                  key: "getSlidePlayerInstance",
                  value: function (e) {
                    var t = "gvideo" + e,
                      i = this.getAllPlayers();
                    return !(!O(i, t) || !i[t]) && i[t];
                  },
                },
                {
                  key: "stopSlideVideo",
                  value: function (e) {
                    if (A(e)) {
                      var t = e.querySelector(".gvideo-wrapper");
                      t && (e = t.getAttribute("data-index"));
                    }
                    console.log(
                      "stopSlideVideo is deprecated, use slidePlayerPause",
                    );
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause();
                  },
                },
                {
                  key: "slidePlayerPause",
                  value: function (e) {
                    if (A(e)) {
                      var t = e.querySelector(".gvideo-wrapper");
                      t && (e = t.getAttribute("data-index"));
                    }
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause();
                  },
                },
                {
                  key: "playSlideVideo",
                  value: function (e) {
                    if (A(e)) {
                      var t = e.querySelector(".gvideo-wrapper");
                      t && (e = t.getAttribute("data-index"));
                    }
                    console.log(
                      "playSlideVideo is deprecated, use slidePlayerPlay",
                    );
                    var i = this.getSlidePlayerInstance(e);
                    i && !i.playing && i.play();
                  },
                },
                {
                  key: "slidePlayerPlay",
                  value: function (e) {
                    var t;
                    if (
                      !V ||
                      (null !== (t = this.settings.plyr.config) &&
                        void 0 !== t &&
                        t.muted)
                    ) {
                      if (A(e)) {
                        var i = e.querySelector(".gvideo-wrapper");
                        i && (e = i.getAttribute("data-index"));
                      }
                      var n = this.getSlidePlayerInstance(e);
                      n &&
                        !n.playing &&
                        (n.play(),
                        this.settings.autofocusVideos &&
                          n.elements.container.focus());
                    }
                  },
                },
                {
                  key: "setElements",
                  value: function (e) {
                    var t = this;
                    this.settings.elements = !1;
                    var i = [];
                    (e &&
                      e.length &&
                      a(e, function (e, n) {
                        var s = new W(e, t, n),
                          o = s.getConfig(),
                          a = r({}, o);
                        ((a.slideConfig = o),
                          (a.instance = s),
                          (a.index = n),
                          i.push(a));
                      }),
                      (this.elements = i),
                      this.lightboxOpen &&
                        ((this.slidesContainer.innerHTML = ""),
                        this.elements.length &&
                          (a(this.elements, function () {
                            var e = y(t.settings.slideHTML);
                            t.slidesContainer.appendChild(e);
                          }),
                          this.showSlide(0, !0))));
                  },
                },
                {
                  key: "getElementIndex",
                  value: function (e) {
                    var t = !1;
                    return (
                      a(this.elements, function (i, n) {
                        if (O(i, "node") && i.node == e) return ((t = n), !0);
                      }),
                      t
                    );
                  },
                },
                {
                  key: "getElements",
                  value: function () {
                    var e = this,
                      t = [];
                    ((this.elements = this.elements ? this.elements : []),
                      !L(this.settings.elements) &&
                        T(this.settings.elements) &&
                        this.settings.elements.length &&
                        a(this.settings.elements, function (i, n) {
                          var s = new W(i, e, n),
                            o = s.getConfig(),
                            a = r({}, o);
                          ((a.node = !1),
                            (a.index = n),
                            (a.instance = s),
                            (a.slideConfig = o),
                            t.push(a));
                        }));
                    var i = !1;
                    return (
                      this.getSelector() &&
                        (i = document.querySelectorAll(this.getSelector())),
                      i
                        ? (a(i, function (i, n) {
                            var s = new W(i, e, n),
                              o = s.getConfig(),
                              a = r({}, o);
                            ((a.node = i),
                              (a.index = n),
                              (a.instance = s),
                              (a.slideConfig = o),
                              (a.gallery = i.getAttribute("data-gallery")),
                              t.push(a));
                          }),
                          t)
                        : t
                    );
                  },
                },
                {
                  key: "getGalleryElements",
                  value: function (e, t) {
                    return e.filter(function (e) {
                      return e.gallery == t;
                    });
                  },
                },
                {
                  key: "getSelector",
                  value: function () {
                    return (
                      !this.settings.elements &&
                      (this.settings.selector &&
                      "data-" == this.settings.selector.substring(0, 5)
                        ? "*[".concat(this.settings.selector, "]")
                        : this.settings.selector)
                    );
                  },
                },
                {
                  key: "getActiveSlide",
                  value: function () {
                    return this.slidesContainer.querySelectorAll(".gslide")[
                      this.index
                    ];
                  },
                },
                {
                  key: "getActiveSlideIndex",
                  value: function () {
                    return this.index;
                  },
                },
                {
                  key: "getAnimationClasses",
                  value: function () {
                    var e = [];
                    for (var t in this.settings.cssEfects)
                      if (this.settings.cssEfects.hasOwnProperty(t)) {
                        var i = this.settings.cssEfects[t];
                        (e.push("g".concat(i.in)), e.push("g".concat(i.out)));
                      }
                    return e.join(" ");
                  },
                },
                {
                  key: "build",
                  value: function () {
                    var e = this;
                    if (this.built) return !1;
                    var t = document.body.childNodes,
                      i = [];
                    a(t, function (e) {
                      e.parentNode == document.body &&
                        "#" !== e.nodeName.charAt(0) &&
                        e.hasAttribute &&
                        !e.hasAttribute("aria-hidden") &&
                        (i.push(e), e.setAttribute("aria-hidden", "true"));
                    });
                    var n = O(this.settings.svg, "next")
                        ? this.settings.svg.next
                        : "",
                      s = O(this.settings.svg, "prev")
                        ? this.settings.svg.prev
                        : "",
                      o = O(this.settings.svg, "close")
                        ? this.settings.svg.close
                        : "",
                      r = this.settings.lightboxHTML;
                    ((r = y(
                      (r = (r = (r = r.replace(/{nextSVG}/g, n)).replace(
                        /{prevSVG}/g,
                        s,
                      )).replace(/{closeSVG}/g, o)),
                    )),
                      document.body.appendChild(r));
                    var l = document.getElementById("glightbox-body");
                    this.modal = l;
                    var u = l.querySelector(".gclose");
                    ((this.prevButton = l.querySelector(".gprev")),
                      (this.nextButton = l.querySelector(".gnext")),
                      (this.overlay = l.querySelector(".goverlay")),
                      (this.loader = l.querySelector(".gloader")),
                      (this.slidesContainer =
                        document.getElementById("glightbox-slider")),
                      (this.bodyHiddenChildElms = i),
                      (this.events = {}),
                      d(this.modal, "glightbox-" + this.settings.skin),
                      this.settings.closeButton &&
                        u &&
                        (this.events.close = c("click", {
                          onElement: u,
                          withCallback: function (t, i) {
                            (t.preventDefault(), e.close());
                          },
                        })),
                      u &&
                        !this.settings.closeButton &&
                        u.parentNode.removeChild(u),
                      this.nextButton &&
                        (this.events.next = c("click", {
                          onElement: this.nextButton,
                          withCallback: function (t, i) {
                            (t.preventDefault(), e.nextSlide());
                          },
                        })),
                      this.prevButton &&
                        (this.events.prev = c("click", {
                          onElement: this.prevButton,
                          withCallback: function (t, i) {
                            (t.preventDefault(), e.prevSlide());
                          },
                        })),
                      this.settings.closeOnOutsideClick &&
                        (this.events.outClose = c("click", {
                          onElement: l,
                          withCallback: function (t, i) {
                            e.preventOutsideClick ||
                              h(document.body, "glightbox-mobile") ||
                              f(t.target, ".ginner-container") ||
                              f(t.target, ".gbtn") ||
                              h(t.target, "gnext") ||
                              h(t.target, "gprev") ||
                              e.close();
                          },
                        })),
                      a(this.elements, function (t, i) {
                        (e.slidesContainer.appendChild(t.instance.create()),
                          (t.slideNode =
                            e.slidesContainer.querySelectorAll(".gslide")[i]));
                      }),
                      U && d(document.body, "glightbox-touch"),
                      (this.events.resize = c("resize", {
                        onElement: window,
                        withCallback: function () {
                          e.resize();
                        },
                      })),
                      (this.built = !0));
                  },
                },
                {
                  key: "resize",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    if ((e = e || this.activeSlide) && !h(e, "zoomed")) {
                      var t = b(),
                        i = e.querySelector(".gvideo-wrapper"),
                        n = e.querySelector(".gslide-image"),
                        s = this.slideDescription,
                        o = t.width,
                        r = t.height;
                      if (
                        (o <= 768
                          ? d(document.body, "glightbox-mobile")
                          : u(document.body, "glightbox-mobile"),
                        i || n)
                      ) {
                        var a = !1;
                        if (
                          (s &&
                            (h(s, "description-bottom") ||
                              h(s, "description-top")) &&
                            !h(s, "gabsolute") &&
                            (a = !0),
                          n)
                        )
                          if (o <= 768) n.querySelector("img");
                          else if (a) {
                            var l,
                              c,
                              f = s.offsetHeight,
                              g = n.querySelector("img"),
                              p =
                                null === (l = this.elements[this.index]) ||
                                void 0 === l
                                  ? void 0
                                  : l.node,
                              m = "100vh";
                            (p &&
                              (m =
                                null !== (c = p.getAttribute("data-height")) &&
                                void 0 !== c
                                  ? c
                                  : m),
                              g.setAttribute(
                                "style",
                                "max-height: calc("
                                  .concat(m, " - ")
                                  .concat(f, "px)"),
                              ),
                              s.setAttribute(
                                "style",
                                "max-width: ".concat(g.offsetWidth, "px;"),
                              ));
                          }
                        if (i) {
                          var v = O(this.settings.plyr.config, "ratio")
                            ? this.settings.plyr.config.ratio
                            : "";
                          if (!v) {
                            var y = i.clientWidth,
                              _ = i.clientHeight,
                              w = y / _;
                            v = "".concat(y / w, ":").concat(_ / w);
                          }
                          var S = v.split(":"),
                            x = this.settings.videosWidth,
                            E = this.settings.videosWidth,
                            A =
                              (E =
                                I(x) || -1 !== x.indexOf("px")
                                  ? parseInt(x)
                                  : -1 !== x.indexOf("vw")
                                    ? (o * parseInt(x)) / 100
                                    : -1 !== x.indexOf("vh")
                                      ? (r * parseInt(x)) / 100
                                      : -1 !== x.indexOf("%")
                                        ? (o * parseInt(x)) / 100
                                        : parseInt(i.clientWidth)) /
                              (parseInt(S[0]) / parseInt(S[1]));
                          if (
                            ((A = Math.floor(A)),
                            a && (r -= s.offsetHeight),
                            E > o || A > r || (r < A && o > E))
                          ) {
                            var T = i.offsetWidth,
                              C = i.offsetHeight,
                              k = r / C,
                              L = { width: T * k, height: C * k };
                            (i.parentNode.setAttribute(
                              "style",
                              "max-width: ".concat(L.width, "px"),
                            ),
                              a &&
                                s.setAttribute(
                                  "style",
                                  "max-width: ".concat(L.width, "px;"),
                                ));
                          } else
                            ((i.parentNode.style.maxWidth = "".concat(x)),
                              a &&
                                s.setAttribute(
                                  "style",
                                  "max-width: ".concat(x, ";"),
                                ));
                        }
                      }
                    }
                  },
                },
                {
                  key: "reload",
                  value: function () {
                    this.init();
                  },
                },
                {
                  key: "updateNavigationClasses",
                  value: function () {
                    var e = this.loop();
                    (u(this.nextButton, "disabled"),
                      u(this.prevButton, "disabled"),
                      0 == this.index && this.elements.length - 1 == 0
                        ? (d(this.prevButton, "disabled"),
                          d(this.nextButton, "disabled"))
                        : 0 !== this.index || e
                          ? this.index !== this.elements.length - 1 ||
                            e ||
                            d(this.nextButton, "disabled")
                          : d(this.prevButton, "disabled"));
                  },
                },
                {
                  key: "loop",
                  value: function () {
                    var e = O(this.settings, "loopAtEnd")
                      ? this.settings.loopAtEnd
                      : null;
                    return O(this.settings, "loop") ? this.settings.loop : e;
                  },
                },
                {
                  key: "close",
                  value: function () {
                    var e = this;
                    if (!this.lightboxOpen) {
                      if (this.events) {
                        for (var t in this.events)
                          this.events.hasOwnProperty(t) &&
                            this.events[t].destroy();
                        this.events = null;
                      }
                      return !1;
                    }
                    if (this.closing) return !1;
                    ((this.closing = !0),
                      this.slidePlayerPause(this.activeSlide),
                      this.fullElementsList &&
                        (this.elements = this.fullElementsList),
                      this.bodyHiddenChildElms.length &&
                        a(this.bodyHiddenChildElms, function (e) {
                          e.removeAttribute("aria-hidden");
                        }),
                      d(this.modal, "glightbox-closing"),
                      g(
                        this.overlay,
                        "none" == this.settings.openEffect
                          ? "none"
                          : this.settings.cssEfects.fade.out,
                      ),
                      g(
                        this.activeSlide,
                        this.settings.cssEfects[this.settings.closeEffect].out,
                        function () {
                          if (
                            ((e.activeSlide = null),
                            (e.prevActiveSlideIndex = null),
                            (e.prevActiveSlide = null),
                            (e.built = !1),
                            e.events)
                          ) {
                            for (var t in e.events)
                              e.events.hasOwnProperty(t) &&
                                e.events[t].destroy();
                            e.events = null;
                          }
                          var i = document.body;
                          (u(K, "glightbox-open"),
                            u(
                              i,
                              "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer",
                            ),
                            e.modal.parentNode.removeChild(e.modal),
                            e.trigger("close"),
                            x(e.settings.onClose) && e.settings.onClose());
                          var n = document.querySelector(".gcss-styles");
                          (n && n.parentNode.removeChild(n),
                            (e.lightboxOpen = !1),
                            (e.closing = null));
                        },
                      ));
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    (this.close(),
                      this.clearAllEvents(),
                      this.baseEvents && this.baseEvents.destroy());
                  },
                },
                {
                  key: "on",
                  value: function (e, t) {
                    var i =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    if (!e || !x(t))
                      throw new TypeError(
                        "Event name and callback must be defined",
                      );
                    this.apiEvents.push({ evt: e, once: i, callback: t });
                  },
                },
                {
                  key: "once",
                  value: function (e, t) {
                    this.on(e, t, !0);
                  },
                },
                {
                  key: "trigger",
                  value: function (e) {
                    var t = this,
                      i =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      n = [];
                    (a(this.apiEvents, function (t, s) {
                      var o = t.evt,
                        r = t.once,
                        a = t.callback;
                      o == e && (a(i), r && n.push(s));
                    }),
                      n.length &&
                        a(n, function (e) {
                          return t.apiEvents.splice(e, 1);
                        }));
                  },
                },
                {
                  key: "clearAllEvents",
                  value: function () {
                    this.apiEvents.splice(0, this.apiEvents.length);
                  },
                },
                {
                  key: "version",
                  value: function () {
                    return "3.3.1";
                  },
                },
              ],
            );
          return function () {
            var e = new G(
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            );
            return (e.init(), e);
          };
        })();
      },
    },
    t = {};
  function i(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var o = (t[n] = { exports: {} });
    return (e[n].call(o.exports, o, o.exports, i), o.exports);
  }
  ((i.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return (i.d(t, { a: t }), t);
  }),
    (i.d = function (e, t) {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.r = function (e) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (function () {
      "use strict";
      var e = {};
      (i.r(e),
        i.d(e, {
          afterMain: function () {
            return S;
          },
          afterRead: function () {
            return b;
          },
          afterWrite: function () {
            return A;
          },
          applyStyles: function () {
            return I;
          },
          arrow: function () {
            return Z;
          },
          auto: function () {
            return a;
          },
          basePlacements: function () {
            return l;
          },
          beforeMain: function () {
            return _;
          },
          beforeRead: function () {
            return v;
          },
          beforeWrite: function () {
            return x;
          },
          bottom: function () {
            return s;
          },
          clippingParents: function () {
            return u;
          },
          computeStyles: function () {
            return ie;
          },
          createPopper: function () {
            return qe;
          },
          createPopperBase: function () {
            return Oe;
          },
          createPopperLite: function () {
            return Ie;
          },
          detectOverflow: function () {
            return ve;
          },
          end: function () {
            return d;
          },
          eventListeners: function () {
            return se;
          },
          flip: function () {
            return ye;
          },
          hide: function () {
            return we;
          },
          left: function () {
            return r;
          },
          main: function () {
            return w;
          },
          modifierPhases: function () {
            return T;
          },
          offset: function () {
            return Se;
          },
          placements: function () {
            return m;
          },
          popper: function () {
            return f;
          },
          popperGenerator: function () {
            return Le;
          },
          popperOffsets: function () {
            return xe;
          },
          preventOverflow: function () {
            return Ee;
          },
          read: function () {
            return y;
          },
          reference: function () {
            return g;
          },
          right: function () {
            return o;
          },
          start: function () {
            return c;
          },
          top: function () {
            return n;
          },
          variationPlacements: function () {
            return p;
          },
          viewport: function () {
            return h;
          },
          write: function () {
            return E;
          },
        }));
      var t = {};
      (i.r(t),
        i.d(t, {
          Alert: function () {
            return Ct;
          },
          Button: function () {
            return Lt;
          },
          Carousel: function () {
            return ci;
          },
          Collapse: function () {
            return xi;
          },
          Dropdown: function () {
            return Ui;
          },
          Modal: function () {
            return On;
          },
          Offcanvas: function () {
            return Un;
          },
          Popover: function () {
            return _s;
          },
          ScrollSpy: function () {
            return qs;
          },
          Tab: function () {
            return eo;
          },
          Toast: function () {
            return mo;
          },
          Tooltip: function () {
            return ps;
          },
        }));
      var n = "top",
        s = "bottom",
        o = "right",
        r = "left",
        a = "auto",
        l = [n, s, o, r],
        c = "start",
        d = "end",
        u = "clippingParents",
        h = "viewport",
        f = "popper",
        g = "reference",
        p = l.reduce(function (e, t) {
          return e.concat([t + "-" + c, t + "-" + d]);
        }, []),
        m = [].concat(l, [a]).reduce(function (e, t) {
          return e.concat([t, t + "-" + c, t + "-" + d]);
        }, []),
        v = "beforeRead",
        y = "read",
        b = "afterRead",
        _ = "beforeMain",
        w = "main",
        S = "afterMain",
        x = "beforeWrite",
        E = "write",
        A = "afterWrite",
        T = [v, y, b, _, w, S, x, E, A];
      function C(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function k(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function L(e) {
        return e instanceof k(e).Element || e instanceof Element;
      }
      function O(e) {
        return e instanceof k(e).HTMLElement || e instanceof HTMLElement;
      }
      function q(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof k(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var I = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var i = t.styles[e] || {},
              n = t.attributes[e] || {},
              s = t.elements[e];
            O(s) &&
              C(s) &&
              (Object.assign(s.style, i),
              Object.keys(n).forEach(function (e) {
                var t = n[e];
                !1 === t
                  ? s.removeAttribute(e)
                  : s.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            i = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, i.popper),
            (t.styles = i),
            t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var n = t.elements[e],
                  s = t.attributes[e] || {},
                  o = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : i[e],
                  ).reduce(function (e, t) {
                    return ((e[t] = ""), e);
                  }, {});
                O(n) &&
                  C(n) &&
                  (Object.assign(n.style, o),
                  Object.keys(s).forEach(function (e) {
                    n.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      function D(e) {
        return e.split("-")[0];
      }
      var P = Math.max,
        N = Math.min,
        M = Math.round;
      function $() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function j() {
        return !/^((?!chrome|android).)*safari/i.test($());
      }
      function z(e, t, i) {
        (void 0 === t && (t = !1), void 0 === i && (i = !1));
        var n = e.getBoundingClientRect(),
          s = 1,
          o = 1;
        t &&
          O(e) &&
          ((s = (e.offsetWidth > 0 && M(n.width) / e.offsetWidth) || 1),
          (o = (e.offsetHeight > 0 && M(n.height) / e.offsetHeight) || 1));
        var r = (L(e) ? k(e) : window).visualViewport,
          a = !j() && i,
          l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
          c = (n.top + (a && r ? r.offsetTop : 0)) / o,
          d = n.width / s,
          u = n.height / o;
        return {
          width: d,
          height: u,
          top: c,
          right: l + d,
          bottom: c + u,
          left: l,
          x: l,
          y: c,
        };
      }
      function H(e) {
        var t = z(e),
          i = e.offsetWidth,
          n = e.offsetHeight;
        return (
          Math.abs(t.width - i) <= 1 && (i = t.width),
          Math.abs(t.height - n) <= 1 && (n = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: i, height: n }
        );
      }
      function W(e, t) {
        var i = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (i && q(i)) {
          var n = t;
          do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function B(e) {
        return k(e).getComputedStyle(e);
      }
      function Y(e) {
        return ["table", "td", "th"].indexOf(C(e)) >= 0;
      }
      function X(e) {
        return ((L(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function F(e) {
        return "html" === C(e)
          ? e
          : e.assignedSlot || e.parentNode || (q(e) ? e.host : null) || X(e);
      }
      function R(e) {
        return O(e) && "fixed" !== B(e).position ? e.offsetParent : null;
      }
      function V(e) {
        for (var t = k(e), i = R(e); i && Y(i) && "static" === B(i).position; )
          i = R(i);
        return i &&
          ("html" === C(i) || ("body" === C(i) && "static" === B(i).position))
          ? t
          : i ||
              (function (e) {
                var t = /firefox/i.test($());
                if (/Trident/i.test($()) && O(e) && "fixed" === B(e).position)
                  return null;
                var i = F(e);
                for (
                  q(i) && (i = i.host);
                  O(i) && ["html", "body"].indexOf(C(i)) < 0;
                ) {
                  var n = B(i);
                  if (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    "paint" === n.contain ||
                    -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                    (t && "filter" === n.willChange) ||
                    (t && n.filter && "none" !== n.filter)
                  )
                    return i;
                  i = i.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function U(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function K(e, t, i) {
        return P(e, N(t, i));
      }
      function Q(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function G(e, t) {
        return t.reduce(function (t, i) {
          return ((t[i] = e), t);
        }, {});
      }
      var Z = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            i = e.state,
            a = e.name,
            c = e.options,
            d = i.elements.arrow,
            u = i.modifiersData.popperOffsets,
            h = D(i.placement),
            f = U(h),
            g = [r, o].indexOf(h) >= 0 ? "height" : "width";
          if (d && u) {
            var p = (function (e, t) {
                return Q(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            }),
                          )
                        : e)
                    ? e
                    : G(e, l),
                );
              })(c.padding, i),
              m = H(d),
              v = "y" === f ? n : r,
              y = "y" === f ? s : o,
              b =
                i.rects.reference[g] +
                i.rects.reference[f] -
                u[f] -
                i.rects.popper[g],
              _ = u[f] - i.rects.reference[f],
              w = V(d),
              S = w
                ? "y" === f
                  ? w.clientHeight || 0
                  : w.clientWidth || 0
                : 0,
              x = b / 2 - _ / 2,
              E = p[v],
              A = S - m[g] - p[y],
              T = S / 2 - m[g] / 2 + x,
              C = K(E, T, A),
              k = f;
            i.modifiersData[a] =
              (((t = {})[k] = C), (t.centerOffset = C - T), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            i = e.options.element,
            n = void 0 === i ? "[data-popper-arrow]" : i;
          null != n &&
            ("string" != typeof n ||
              (n = t.elements.popper.querySelector(n))) &&
            W(t.elements.popper, n) &&
            (t.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function J(e) {
        return e.split("-")[1];
      }
      var ee = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function te(e) {
        var t,
          i = e.popper,
          a = e.popperRect,
          l = e.placement,
          c = e.variation,
          u = e.offsets,
          h = e.position,
          f = e.gpuAcceleration,
          g = e.adaptive,
          p = e.roundOffsets,
          m = e.isFixed,
          v = u.x,
          y = void 0 === v ? 0 : v,
          b = u.y,
          _ = void 0 === b ? 0 : b,
          w = "function" == typeof p ? p({ x: y, y: _ }) : { x: y, y: _ };
        ((y = w.x), (_ = w.y));
        var S = u.hasOwnProperty("x"),
          x = u.hasOwnProperty("y"),
          E = r,
          A = n,
          T = window;
        if (g) {
          var C = V(i),
            L = "clientHeight",
            O = "clientWidth";
          (C === k(i) &&
            "static" !== B((C = X(i))).position &&
            "absolute" === h &&
            ((L = "scrollHeight"), (O = "scrollWidth")),
            (l === n || ((l === r || l === o) && c === d)) &&
              ((A = s),
              (_ -=
                (m && C === T && T.visualViewport
                  ? T.visualViewport.height
                  : C[L]) - a.height),
              (_ *= f ? 1 : -1)),
            (l !== r && ((l !== n && l !== s) || c !== d)) ||
              ((E = o),
              (y -=
                (m && C === T && T.visualViewport
                  ? T.visualViewport.width
                  : C[O]) - a.width),
              (y *= f ? 1 : -1)));
        }
        var q,
          I = Object.assign({ position: h }, g && ee),
          D =
            !0 === p
              ? (function (e, t) {
                  var i = e.x,
                    n = e.y,
                    s = t.devicePixelRatio || 1;
                  return { x: M(i * s) / s || 0, y: M(n * s) / s || 0 };
                })({ x: y, y: _ }, k(i))
              : { x: y, y: _ };
        return (
          (y = D.x),
          (_ = D.y),
          f
            ? Object.assign(
                {},
                I,
                (((q = {})[A] = x ? "0" : ""),
                (q[E] = S ? "0" : ""),
                (q.transform =
                  (T.devicePixelRatio || 1) <= 1
                    ? "translate(" + y + "px, " + _ + "px)"
                    : "translate3d(" + y + "px, " + _ + "px, 0)"),
                q),
              )
            : Object.assign(
                {},
                I,
                (((t = {})[A] = x ? _ + "px" : ""),
                (t[E] = S ? y + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      var ie = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              i = e.options,
              n = i.gpuAcceleration,
              s = void 0 === n || n,
              o = i.adaptive,
              r = void 0 === o || o,
              a = i.roundOffsets,
              l = void 0 === a || a,
              c = {
                placement: D(t.placement),
                variation: J(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === t.options.strategy,
              };
            (null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                te(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: r,
                    roundOffsets: l,
                  }),
                ),
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  te(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: l,
                    }),
                  ),
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              })));
          },
          data: {},
        },
        ne = { passive: !0 },
        se = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (e) {
            var t = e.state,
              i = e.instance,
              n = e.options,
              s = n.scroll,
              o = void 0 === s || s,
              r = n.resize,
              a = void 0 === r || r,
              l = k(t.elements.popper),
              c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return (
              o &&
                c.forEach(function (e) {
                  e.addEventListener("scroll", i.update, ne);
                }),
              a && l.addEventListener("resize", i.update, ne),
              function () {
                (o &&
                  c.forEach(function (e) {
                    e.removeEventListener("scroll", i.update, ne);
                  }),
                  a && l.removeEventListener("resize", i.update, ne));
              }
            );
          },
          data: {},
        },
        oe = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function re(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return oe[e];
        });
      }
      var ae = { start: "end", end: "start" };
      function le(e) {
        return e.replace(/start|end/g, function (e) {
          return ae[e];
        });
      }
      function ce(e) {
        var t = k(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function de(e) {
        return z(X(e)).left + ce(e).scrollLeft;
      }
      function ue(e) {
        var t = B(e),
          i = t.overflow,
          n = t.overflowX,
          s = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
      }
      function he(e) {
        return ["html", "body", "#document"].indexOf(C(e)) >= 0
          ? e.ownerDocument.body
          : O(e) && ue(e)
            ? e
            : he(F(e));
      }
      function fe(e, t) {
        var i;
        void 0 === t && (t = []);
        var n = he(e),
          s = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
          o = k(n),
          r = s ? [o].concat(o.visualViewport || [], ue(n) ? n : []) : n,
          a = t.concat(r);
        return s ? a : a.concat(fe(F(r)));
      }
      function ge(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function pe(e, t, i) {
        return t === h
          ? ge(
              (function (e, t) {
                var i = k(e),
                  n = X(e),
                  s = i.visualViewport,
                  o = n.clientWidth,
                  r = n.clientHeight,
                  a = 0,
                  l = 0;
                if (s) {
                  ((o = s.width), (r = s.height));
                  var c = j();
                  (c || (!c && "fixed" === t)) &&
                    ((a = s.offsetLeft), (l = s.offsetTop));
                }
                return { width: o, height: r, x: a + de(e), y: l };
              })(e, i),
            )
          : L(t)
            ? (function (e, t) {
                var i = z(e, !1, "fixed" === t);
                return (
                  (i.top = i.top + e.clientTop),
                  (i.left = i.left + e.clientLeft),
                  (i.bottom = i.top + e.clientHeight),
                  (i.right = i.left + e.clientWidth),
                  (i.width = e.clientWidth),
                  (i.height = e.clientHeight),
                  (i.x = i.left),
                  (i.y = i.top),
                  i
                );
              })(t, i)
            : ge(
                (function (e) {
                  var t,
                    i = X(e),
                    n = ce(e),
                    s = null == (t = e.ownerDocument) ? void 0 : t.body,
                    o = P(
                      i.scrollWidth,
                      i.clientWidth,
                      s ? s.scrollWidth : 0,
                      s ? s.clientWidth : 0,
                    ),
                    r = P(
                      i.scrollHeight,
                      i.clientHeight,
                      s ? s.scrollHeight : 0,
                      s ? s.clientHeight : 0,
                    ),
                    a = -n.scrollLeft + de(e),
                    l = -n.scrollTop;
                  return (
                    "rtl" === B(s || i).direction &&
                      (a += P(i.clientWidth, s ? s.clientWidth : 0) - o),
                    { width: o, height: r, x: a, y: l }
                  );
                })(X(e)),
              );
      }
      function me(e) {
        var t,
          i = e.reference,
          a = e.element,
          l = e.placement,
          u = l ? D(l) : null,
          h = l ? J(l) : null,
          f = i.x + i.width / 2 - a.width / 2,
          g = i.y + i.height / 2 - a.height / 2;
        switch (u) {
          case n:
            t = { x: f, y: i.y - a.height };
            break;
          case s:
            t = { x: f, y: i.y + i.height };
            break;
          case o:
            t = { x: i.x + i.width, y: g };
            break;
          case r:
            t = { x: i.x - a.width, y: g };
            break;
          default:
            t = { x: i.x, y: i.y };
        }
        var p = u ? U(u) : null;
        if (null != p) {
          var m = "y" === p ? "height" : "width";
          switch (h) {
            case c:
              t[p] = t[p] - (i[m] / 2 - a[m] / 2);
              break;
            case d:
              t[p] = t[p] + (i[m] / 2 - a[m] / 2);
          }
        }
        return t;
      }
      function ve(e, t) {
        void 0 === t && (t = {});
        var i = t,
          r = i.placement,
          a = void 0 === r ? e.placement : r,
          c = i.strategy,
          d = void 0 === c ? e.strategy : c,
          p = i.boundary,
          m = void 0 === p ? u : p,
          v = i.rootBoundary,
          y = void 0 === v ? h : v,
          b = i.elementContext,
          _ = void 0 === b ? f : b,
          w = i.altBoundary,
          S = void 0 !== w && w,
          x = i.padding,
          E = void 0 === x ? 0 : x,
          A = Q("number" != typeof E ? E : G(E, l)),
          T = _ === f ? g : f,
          k = e.rects.popper,
          q = e.elements[S ? T : _],
          I = (function (e, t, i, n) {
            var s =
                "clippingParents" === t
                  ? (function (e) {
                      var t = fe(F(e)),
                        i =
                          ["absolute", "fixed"].indexOf(B(e).position) >= 0 &&
                          O(e)
                            ? V(e)
                            : e;
                      return L(i)
                        ? t.filter(function (e) {
                            return L(e) && W(e, i) && "body" !== C(e);
                          })
                        : [];
                    })(e)
                  : [].concat(t),
              o = [].concat(s, [i]),
              r = o[0],
              a = o.reduce(
                function (t, i) {
                  var s = pe(e, i, n);
                  return (
                    (t.top = P(s.top, t.top)),
                    (t.right = N(s.right, t.right)),
                    (t.bottom = N(s.bottom, t.bottom)),
                    (t.left = P(s.left, t.left)),
                    t
                  );
                },
                pe(e, r, n),
              );
            return (
              (a.width = a.right - a.left),
              (a.height = a.bottom - a.top),
              (a.x = a.left),
              (a.y = a.top),
              a
            );
          })(L(q) ? q : q.contextElement || X(e.elements.popper), m, y, d),
          D = z(e.elements.reference),
          M = me({
            reference: D,
            element: k,
            strategy: "absolute",
            placement: a,
          }),
          $ = ge(Object.assign({}, k, M)),
          j = _ === f ? $ : D,
          H = {
            top: I.top - j.top + A.top,
            bottom: j.bottom - I.bottom + A.bottom,
            left: I.left - j.left + A.left,
            right: j.right - I.right + A.right,
          },
          Y = e.modifiersData.offset;
        if (_ === f && Y) {
          var R = Y[a];
          Object.keys(H).forEach(function (e) {
            var t = [o, s].indexOf(e) >= 0 ? 1 : -1,
              i = [n, s].indexOf(e) >= 0 ? "y" : "x";
            H[e] += R[i] * t;
          });
        }
        return H;
      }
      var ye = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            i = e.options,
            d = e.name;
          if (!t.modifiersData[d]._skip) {
            for (
              var u = i.mainAxis,
                h = void 0 === u || u,
                f = i.altAxis,
                g = void 0 === f || f,
                v = i.fallbackPlacements,
                y = i.padding,
                b = i.boundary,
                _ = i.rootBoundary,
                w = i.altBoundary,
                S = i.flipVariations,
                x = void 0 === S || S,
                E = i.allowedAutoPlacements,
                A = t.options.placement,
                T = D(A),
                C =
                  v ||
                  (T !== A && x
                    ? (function (e) {
                        if (D(e) === a) return [];
                        var t = re(e);
                        return [le(e), t, le(t)];
                      })(A)
                    : [re(A)]),
                k = [A].concat(C).reduce(function (e, i) {
                  return e.concat(
                    D(i) === a
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var i = t,
                            n = i.placement,
                            s = i.boundary,
                            o = i.rootBoundary,
                            r = i.padding,
                            a = i.flipVariations,
                            c = i.allowedAutoPlacements,
                            d = void 0 === c ? m : c,
                            u = J(n),
                            h = u
                              ? a
                                ? p
                                : p.filter(function (e) {
                                    return J(e) === u;
                                  })
                              : l,
                            f = h.filter(function (e) {
                              return d.indexOf(e) >= 0;
                            });
                          0 === f.length && (f = h);
                          var g = f.reduce(function (t, i) {
                            return (
                              (t[i] = ve(e, {
                                placement: i,
                                boundary: s,
                                rootBoundary: o,
                                padding: r,
                              })[D(i)]),
                              t
                            );
                          }, {});
                          return Object.keys(g).sort(function (e, t) {
                            return g[e] - g[t];
                          });
                        })(t, {
                          placement: i,
                          boundary: b,
                          rootBoundary: _,
                          padding: y,
                          flipVariations: x,
                          allowedAutoPlacements: E,
                        })
                      : i,
                  );
                }, []),
                L = t.rects.reference,
                O = t.rects.popper,
                q = new Map(),
                I = !0,
                P = k[0],
                N = 0;
              N < k.length;
              N++
            ) {
              var M = k[N],
                $ = D(M),
                j = J(M) === c,
                z = [n, s].indexOf($) >= 0,
                H = z ? "width" : "height",
                W = ve(t, {
                  placement: M,
                  boundary: b,
                  rootBoundary: _,
                  altBoundary: w,
                  padding: y,
                }),
                B = z ? (j ? o : r) : j ? s : n;
              L[H] > O[H] && (B = re(B));
              var Y = re(B),
                X = [];
              if (
                (h && X.push(W[$] <= 0),
                g && X.push(W[B] <= 0, W[Y] <= 0),
                X.every(function (e) {
                  return e;
                }))
              ) {
                ((P = M), (I = !1));
                break;
              }
              q.set(M, X);
            }
            if (I)
              for (
                var F = function (e) {
                    var t = k.find(function (t) {
                      var i = q.get(t);
                      if (i)
                        return i.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return ((P = t), "break");
                  },
                  R = x ? 3 : 1;
                R > 0 && "break" !== F(R);
                R--
              );
            t.placement !== P &&
              ((t.modifiersData[d]._skip = !0),
              (t.placement = P),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function be(e, t, i) {
        return (
          void 0 === i && (i = { x: 0, y: 0 }),
          {
            top: e.top - t.height - i.y,
            right: e.right - t.width + i.x,
            bottom: e.bottom - t.height + i.y,
            left: e.left - t.width - i.x,
          }
        );
      }
      function _e(e) {
        return [n, o, s, r].some(function (t) {
          return e[t] >= 0;
        });
      }
      var we = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function (e) {
            var t = e.state,
              i = e.name,
              n = t.rects.reference,
              s = t.rects.popper,
              o = t.modifiersData.preventOverflow,
              r = ve(t, { elementContext: "reference" }),
              a = ve(t, { altBoundary: !0 }),
              l = be(r, n),
              c = be(a, s, o),
              d = _e(l),
              u = _e(c);
            ((t.modifiersData[i] = {
              referenceClippingOffsets: l,
              popperEscapeOffsets: c,
              isReferenceHidden: d,
              hasPopperEscaped: u,
            }),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": d,
                "data-popper-escaped": u,
              })));
          },
        },
        Se = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (e) {
            var t = e.state,
              i = e.options,
              s = e.name,
              a = i.offset,
              l = void 0 === a ? [0, 0] : a,
              c = m.reduce(function (e, i) {
                return (
                  (e[i] = (function (e, t, i) {
                    var s = D(e),
                      a = [r, n].indexOf(s) >= 0 ? -1 : 1,
                      l =
                        "function" == typeof i
                          ? i(Object.assign({}, t, { placement: e }))
                          : i,
                      c = l[0],
                      d = l[1];
                    return (
                      (c = c || 0),
                      (d = (d || 0) * a),
                      [r, o].indexOf(s) >= 0 ? { x: d, y: c } : { x: c, y: d }
                    );
                  })(i, t.rects, l)),
                  e
                );
              }, {}),
              d = c[t.placement],
              u = d.x,
              h = d.y;
            (null != t.modifiersData.popperOffsets &&
              ((t.modifiersData.popperOffsets.x += u),
              (t.modifiersData.popperOffsets.y += h)),
              (t.modifiersData[s] = c));
          },
        },
        xe = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (e) {
            var t = e.state,
              i = e.name;
            t.modifiersData[i] = me({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement,
            });
          },
          data: {},
        },
        Ee = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t = e.state,
              i = e.options,
              a = e.name,
              l = i.mainAxis,
              d = void 0 === l || l,
              u = i.altAxis,
              h = void 0 !== u && u,
              f = i.boundary,
              g = i.rootBoundary,
              p = i.altBoundary,
              m = i.padding,
              v = i.tether,
              y = void 0 === v || v,
              b = i.tetherOffset,
              _ = void 0 === b ? 0 : b,
              w = ve(t, {
                boundary: f,
                rootBoundary: g,
                padding: m,
                altBoundary: p,
              }),
              S = D(t.placement),
              x = J(t.placement),
              E = !x,
              A = U(S),
              T = "x" === A ? "y" : "x",
              C = t.modifiersData.popperOffsets,
              k = t.rects.reference,
              L = t.rects.popper,
              O =
                "function" == typeof _
                  ? _(Object.assign({}, t.rects, { placement: t.placement }))
                  : _,
              q =
                "number" == typeof O
                  ? { mainAxis: O, altAxis: O }
                  : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
              I = t.modifiersData.offset
                ? t.modifiersData.offset[t.placement]
                : null,
              M = { x: 0, y: 0 };
            if (C) {
              if (d) {
                var $,
                  j = "y" === A ? n : r,
                  z = "y" === A ? s : o,
                  W = "y" === A ? "height" : "width",
                  B = C[A],
                  Y = B + w[j],
                  X = B - w[z],
                  F = y ? -L[W] / 2 : 0,
                  R = x === c ? k[W] : L[W],
                  Q = x === c ? -L[W] : -k[W],
                  G = t.elements.arrow,
                  Z = y && G ? H(G) : { width: 0, height: 0 },
                  ee = t.modifiersData["arrow#persistent"]
                    ? t.modifiersData["arrow#persistent"].padding
                    : { top: 0, right: 0, bottom: 0, left: 0 },
                  te = ee[j],
                  ie = ee[z],
                  ne = K(0, k[W], Z[W]),
                  se = E
                    ? k[W] / 2 - F - ne - te - q.mainAxis
                    : R - ne - te - q.mainAxis,
                  oe = E
                    ? -k[W] / 2 + F + ne + ie + q.mainAxis
                    : Q + ne + ie + q.mainAxis,
                  re = t.elements.arrow && V(t.elements.arrow),
                  ae = re
                    ? "y" === A
                      ? re.clientTop || 0
                      : re.clientLeft || 0
                    : 0,
                  le = null != ($ = null == I ? void 0 : I[A]) ? $ : 0,
                  ce = B + oe - le,
                  de = K(y ? N(Y, B + se - le - ae) : Y, B, y ? P(X, ce) : X);
                ((C[A] = de), (M[A] = de - B));
              }
              if (h) {
                var ue,
                  he = "x" === A ? n : r,
                  fe = "x" === A ? s : o,
                  ge = C[T],
                  pe = "y" === T ? "height" : "width",
                  me = ge + w[he],
                  ye = ge - w[fe],
                  be = -1 !== [n, r].indexOf(S),
                  _e = null != (ue = null == I ? void 0 : I[T]) ? ue : 0,
                  we = be ? me : ge - k[pe] - L[pe] - _e + q.altAxis,
                  Se = be ? ge + k[pe] + L[pe] - _e - q.altAxis : ye,
                  xe =
                    y && be
                      ? (function (e, t, i) {
                          var n = K(e, t, i);
                          return n > i ? i : n;
                        })(we, ge, Se)
                      : K(y ? we : me, ge, y ? Se : ye);
                ((C[T] = xe), (M[T] = xe - ge));
              }
              t.modifiersData[a] = M;
            }
          },
          requiresIfExists: ["offset"],
        };
      function Ae(e, t, i) {
        void 0 === i && (i = !1);
        var n,
          s,
          o = O(t),
          r =
            O(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                i = M(t.width) / e.offsetWidth || 1,
                n = M(t.height) / e.offsetHeight || 1;
              return 1 !== i || 1 !== n;
            })(t),
          a = X(t),
          l = z(e, r, i),
          c = { scrollLeft: 0, scrollTop: 0 },
          d = { x: 0, y: 0 };
        return (
          (o || (!o && !i)) &&
            (("body" !== C(t) || ue(a)) &&
              (c =
                (n = t) !== k(n) && O(n)
                  ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
                  : ce(n)),
            O(t)
              ? (((d = z(t, !0)).x += t.clientLeft), (d.y += t.clientTop))
              : a && (d.x = de(a))),
          {
            x: l.left + c.scrollLeft - d.x,
            y: l.top + c.scrollTop - d.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function Te(e) {
        var t = new Map(),
          i = new Set(),
          n = [];
        function s(e) {
          (i.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!i.has(e)) {
                  var n = t.get(e);
                  n && s(n);
                }
              }),
            n.push(e));
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            i.has(e.name) || s(e);
          }),
          n
        );
      }
      var Ce = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function ke() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function Le(e) {
        void 0 === e && (e = {});
        var t = e,
          i = t.defaultModifiers,
          n = void 0 === i ? [] : i,
          s = t.defaultOptions,
          o = void 0 === s ? Ce : s;
        return function (e, t, i) {
          void 0 === i && (i = o);
          var s,
            r,
            a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Ce, o),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            d = {
              state: a,
              setOptions: function (i) {
                var s = "function" == typeof i ? i(a.options) : i;
                (u(),
                  (a.options = Object.assign({}, o, a.options, s)),
                  (a.scrollParents = {
                    reference: L(e)
                      ? fe(e)
                      : e.contextElement
                        ? fe(e.contextElement)
                        : [],
                    popper: fe(t),
                  }));
                var r,
                  c,
                  h = (function (e) {
                    var t = Te(e);
                    return T.reduce(function (e, i) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === i;
                        }),
                      );
                    }, []);
                  })(
                    ((r = [].concat(n, a.options.modifiers)),
                    (c = r.reduce(function (e, t) {
                      var i = e[t.name];
                      return (
                        (e[t.name] = i
                          ? Object.assign({}, i, t, {
                              options: Object.assign({}, i.options, t.options),
                              data: Object.assign({}, i.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {})),
                    Object.keys(c).map(function (e) {
                      return c[e];
                    })),
                  );
                return (
                  (a.orderedModifiers = h.filter(function (e) {
                    return e.enabled;
                  })),
                  a.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      i = e.options,
                      n = void 0 === i ? {} : i,
                      s = e.effect;
                    if ("function" == typeof s) {
                      var o = s({ state: a, name: t, instance: d, options: n });
                      l.push(o || function () {});
                    }
                  }),
                  d.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = a.elements,
                    t = e.reference,
                    i = e.popper;
                  if (ke(t, i)) {
                    ((a.rects = {
                      reference: Ae(t, V(i), "fixed" === a.options.strategy),
                      popper: H(i),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      }));
                    for (var n = 0; n < a.orderedModifiers.length; n++)
                      if (!0 !== a.reset) {
                        var s = a.orderedModifiers[n],
                          o = s.fn,
                          r = s.options,
                          l = void 0 === r ? {} : r,
                          u = s.name;
                        "function" == typeof o &&
                          (a =
                            o({ state: a, options: l, name: u, instance: d }) ||
                            a);
                      } else ((a.reset = !1), (n = -1));
                  }
                }
              },
              update:
                ((s = function () {
                  return new Promise(function (e) {
                    (d.forceUpdate(), e(a));
                  });
                }),
                function () {
                  return (
                    r ||
                      (r = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          ((r = void 0), e(s()));
                        });
                      })),
                    r
                  );
                }),
              destroy: function () {
                (u(), (c = !0));
              },
            };
          if (!ke(e, t)) return d;
          function u() {
            (l.forEach(function (e) {
              return e();
            }),
              (l = []));
          }
          return (
            d.setOptions(i).then(function (e) {
              !c && i.onFirstUpdate && i.onFirstUpdate(e);
            }),
            d
          );
        };
      }
      var Oe = Le(),
        qe = Le({ defaultModifiers: [se, xe, ie, I, Se, ye, Ee, Z, we] }),
        Ie = Le({ defaultModifiers: [se, xe, ie, I] });
      const De = new Map(),
        Pe = {
          set(e, t, i) {
            De.has(e) || De.set(e, new Map());
            const n = De.get(e);
            n.has(t) || 0 === n.size
              ? n.set(t, i)
              : console.error(
                  `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`,
                );
          },
          get(e, t) {
            return (De.has(e) && De.get(e).get(t)) || null;
          },
          remove(e, t) {
            if (!De.has(e)) return;
            const i = De.get(e);
            (i.delete(t), 0 === i.size && De.delete(e));
          },
        },
        Ne = "transitionend",
        Me = (e) => (
          e &&
            window.CSS &&
            window.CSS.escape &&
            (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)),
          e
        ),
        $e = (e) =>
          null == e
            ? `${e}`
            : Object.prototype.toString
                .call(e)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase(),
        je = (e) => {
          e.dispatchEvent(new Event(Ne));
        },
        ze = (e) =>
          !(!e || "object" != typeof e) &&
          (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        He = (e) =>
          ze(e)
            ? e.jquery
              ? e[0]
              : e
            : "string" == typeof e && e.length > 0
              ? document.querySelector(Me(e))
              : null,
        We = (e) => {
          if (!ze(e) || 0 === e.getClientRects().length) return !1;
          const t =
              "visible" === getComputedStyle(e).getPropertyValue("visibility"),
            i = e.closest("details:not([open])");
          if (!i) return t;
          if (i !== e) {
            const t = e.closest("summary");
            if (t && t.parentNode !== i) return !1;
            if (null === t) return !1;
          }
          return t;
        },
        Be = (e) =>
          !e ||
          e.nodeType !== Node.ELEMENT_NODE ||
          !!e.classList.contains("disabled") ||
          (void 0 !== e.disabled
            ? e.disabled
            : e.hasAttribute("disabled") &&
              "false" !== e.getAttribute("disabled")),
        Ye = (e) => {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof e.getRootNode) {
            const t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null;
          }
          return e instanceof ShadowRoot
            ? e
            : e.parentNode
              ? Ye(e.parentNode)
              : null;
        },
        Xe = () => {},
        Fe = (e) => {
          e.offsetHeight;
        },
        Re = () =>
          window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
            ? window.jQuery
            : null,
        Ve = [],
        Ue = () => "rtl" === document.documentElement.dir,
        Ke = (e) => {
          var t;
          ((t = () => {
            const t = Re();
            if (t) {
              const i = e.NAME,
                n = t.fn[i];
              ((t.fn[i] = e.jQueryInterface),
                (t.fn[i].Constructor = e),
                (t.fn[i].noConflict = () => (
                  (t.fn[i] = n),
                  e.jQueryInterface
                )));
            }
          }),
            "loading" === document.readyState
              ? (Ve.length ||
                  document.addEventListener("DOMContentLoaded", () => {
                    for (const e of Ve) e();
                  }),
                Ve.push(t))
              : t());
        },
        Qe = (e, t = [], i = e) => ("function" == typeof e ? e.call(...t) : i),
        Ge = (e, t, i = !0) => {
          if (!i) return void Qe(e);
          const n =
            ((e) => {
              if (!e) return 0;
              let { transitionDuration: t, transitionDelay: i } =
                window.getComputedStyle(e);
              const n = Number.parseFloat(t),
                s = Number.parseFloat(i);
              return n || s
                ? ((t = t.split(",")[0]),
                  (i = i.split(",")[0]),
                  1e3 * (Number.parseFloat(t) + Number.parseFloat(i)))
                : 0;
            })(t) + 5;
          let s = !1;
          const o = ({ target: i }) => {
            i === t && ((s = !0), t.removeEventListener(Ne, o), Qe(e));
          };
          (t.addEventListener(Ne, o),
            setTimeout(() => {
              s || je(t);
            }, n));
        },
        Ze = (e, t, i, n) => {
          const s = e.length;
          let o = e.indexOf(t);
          return -1 === o
            ? !i && n
              ? e[s - 1]
              : e[0]
            : ((o += i ? 1 : -1),
              n && (o = (o + s) % s),
              e[Math.max(0, Math.min(o, s - 1))]);
        },
        Je = /[^.]*(?=\..*)\.|.*/,
        et = /\..*/,
        tt = /::\d+$/,
        it = {};
      let nt = 1;
      const st = { mouseenter: "mouseover", mouseleave: "mouseout" },
        ot = new Set([
          "click",
          "dblclick",
          "mouseup",
          "mousedown",
          "contextmenu",
          "mousewheel",
          "DOMMouseScroll",
          "mouseover",
          "mouseout",
          "mousemove",
          "selectstart",
          "selectend",
          "keydown",
          "keypress",
          "keyup",
          "orientationchange",
          "touchstart",
          "touchmove",
          "touchend",
          "touchcancel",
          "pointerdown",
          "pointermove",
          "pointerup",
          "pointerleave",
          "pointercancel",
          "gesturestart",
          "gesturechange",
          "gestureend",
          "focus",
          "blur",
          "change",
          "reset",
          "select",
          "submit",
          "focusin",
          "focusout",
          "load",
          "unload",
          "beforeunload",
          "resize",
          "move",
          "DOMContentLoaded",
          "readystatechange",
          "error",
          "abort",
          "scroll",
        ]);
      function rt(e, t) {
        return (t && `${t}::${nt++}`) || e.uidEvent || nt++;
      }
      function at(e) {
        const t = rt(e);
        return ((e.uidEvent = t), (it[t] = it[t] || {}), it[t]);
      }
      function lt(e, t, i = null) {
        return Object.values(e).find(
          (e) => e.callable === t && e.delegationSelector === i,
        );
      }
      function ct(e, t, i) {
        const n = "string" == typeof t,
          s = n ? i : t || i;
        let o = ft(e);
        return (ot.has(o) || (o = e), [n, s, o]);
      }
      function dt(e, t, i, n, s) {
        if ("string" != typeof t || !e) return;
        let [o, r, a] = ct(t, i, n);
        if (t in st) {
          const e = (e) =>
            function (t) {
              if (
                !t.relatedTarget ||
                (t.relatedTarget !== t.delegateTarget &&
                  !t.delegateTarget.contains(t.relatedTarget))
              )
                return e.call(this, t);
            };
          r = e(r);
        }
        const l = at(e),
          c = l[a] || (l[a] = {}),
          d = lt(c, r, o ? i : null);
        if (d) return void (d.oneOff = d.oneOff && s);
        const u = rt(r, t.replace(Je, "")),
          h = o
            ? (function (e, t, i) {
                return function n(s) {
                  const o = e.querySelectorAll(t);
                  for (let { target: r } = s; r && r !== this; r = r.parentNode)
                    for (const a of o)
                      if (a === r)
                        return (
                          pt(s, { delegateTarget: r }),
                          n.oneOff && gt.off(e, s.type, t, i),
                          i.apply(r, [s])
                        );
                };
              })(e, i, r)
            : (function (e, t) {
                return function i(n) {
                  return (
                    pt(n, { delegateTarget: e }),
                    i.oneOff && gt.off(e, n.type, t),
                    t.apply(e, [n])
                  );
                };
              })(e, r);
        ((h.delegationSelector = o ? i : null),
          (h.callable = r),
          (h.oneOff = s),
          (h.uidEvent = u),
          (c[u] = h),
          e.addEventListener(a, h, o));
      }
      function ut(e, t, i, n, s) {
        const o = lt(t[i], n, s);
        o && (e.removeEventListener(i, o, Boolean(s)), delete t[i][o.uidEvent]);
      }
      function ht(e, t, i, n) {
        const s = t[i] || {};
        for (const [o, r] of Object.entries(s))
          o.includes(n) && ut(e, t, i, r.callable, r.delegationSelector);
      }
      function ft(e) {
        return ((e = e.replace(et, "")), st[e] || e);
      }
      const gt = {
        on(e, t, i, n) {
          dt(e, t, i, n, !1);
        },
        one(e, t, i, n) {
          dt(e, t, i, n, !0);
        },
        off(e, t, i, n) {
          if ("string" != typeof t || !e) return;
          const [s, o, r] = ct(t, i, n),
            a = r !== t,
            l = at(e),
            c = l[r] || {},
            d = t.startsWith(".");
          if (void 0 === o) {
            if (d) for (const i of Object.keys(l)) ht(e, l, i, t.slice(1));
            for (const [i, n] of Object.entries(c)) {
              const s = i.replace(tt, "");
              (a && !t.includes(s)) ||
                ut(e, l, r, n.callable, n.delegationSelector);
            }
          } else {
            if (!Object.keys(c).length) return;
            ut(e, l, r, o, s ? i : null);
          }
        },
        trigger(e, t, i) {
          if ("string" != typeof t || !e) return null;
          const n = Re();
          let s = null,
            o = !0,
            r = !0,
            a = !1;
          t !== ft(t) &&
            n &&
            ((s = n.Event(t, i)),
            n(e).trigger(s),
            (o = !s.isPropagationStopped()),
            (r = !s.isImmediatePropagationStopped()),
            (a = s.isDefaultPrevented()));
          const l = pt(new Event(t, { bubbles: o, cancelable: !0 }), i);
          return (
            a && l.preventDefault(),
            r && e.dispatchEvent(l),
            l.defaultPrevented && s && s.preventDefault(),
            l
          );
        },
      };
      function pt(e, t = {}) {
        for (const [i, n] of Object.entries(t))
          try {
            e[i] = n;
          } catch (t) {
            Object.defineProperty(e, i, {
              configurable: !0,
              get() {
                return n;
              },
            });
          }
        return e;
      }
      function mt(e) {
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        if (e === Number(e).toString()) return Number(e);
        if ("" === e || "null" === e) return null;
        if ("string" != typeof e) return e;
        try {
          return JSON.parse(decodeURIComponent(e));
        } catch (t) {
          return e;
        }
      }
      function vt(e) {
        return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
      }
      const yt = {
        setDataAttribute(e, t, i) {
          e.setAttribute(`data-bs-${vt(t)}`, i);
        },
        removeDataAttribute(e, t) {
          e.removeAttribute(`data-bs-${vt(t)}`);
        },
        getDataAttributes(e) {
          if (!e) return {};
          const t = {},
            i = Object.keys(e.dataset).filter(
              (e) => e.startsWith("bs") && !e.startsWith("bsConfig"),
            );
          for (const n of i) {
            let i = n.replace(/^bs/, "");
            ((i = i.charAt(0).toLowerCase() + i.slice(1)),
              (t[i] = mt(e.dataset[n])));
          }
          return t;
        },
        getDataAttribute(e, t) {
          return mt(e.getAttribute(`data-bs-${vt(t)}`));
        },
      };
      class bt {
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error(
            'You have to implement the static method "NAME", for each component!',
          );
        }
        _getConfig(e) {
          return (
            (e = this._mergeConfigObj(e)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
          );
        }
        _configAfterMerge(e) {
          return e;
        }
        _mergeConfigObj(e, t) {
          const i = ze(t) ? yt.getDataAttribute(t, "config") : {};
          return {
            ...this.constructor.Default,
            ...("object" == typeof i ? i : {}),
            ...(ze(t) ? yt.getDataAttributes(t) : {}),
            ...("object" == typeof e ? e : {}),
          };
        }
        _typeCheckConfig(e, t = this.constructor.DefaultType) {
          for (const [i, n] of Object.entries(t)) {
            const t = e[i],
              s = ze(t) ? "element" : $e(t);
            if (!new RegExp(n).test(s))
              throw new TypeError(
                `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${n}".`,
              );
          }
        }
      }
      class _t extends bt {
        constructor(e, t) {
          (super(),
            (e = He(e)) &&
              ((this._element = e),
              (this._config = this._getConfig(t)),
              Pe.set(this._element, this.constructor.DATA_KEY, this)));
        }
        dispose() {
          (Pe.remove(this._element, this.constructor.DATA_KEY),
            gt.off(this._element, this.constructor.EVENT_KEY));
          for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
        }
        _queueCallback(e, t, i = !0) {
          Ge(e, t, i);
        }
        _getConfig(e) {
          return (
            (e = this._mergeConfigObj(e, this._element)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
          );
        }
        static getInstance(e) {
          return Pe.get(He(e), this.DATA_KEY);
        }
        static getOrCreateInstance(e, t = {}) {
          return (
            this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
          );
        }
        static get VERSION() {
          return "5.3.7";
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(e) {
          return `${e}${this.EVENT_KEY}`;
        }
      }
      const wt = (e) => {
          let t = e.getAttribute("data-bs-target");
          if (!t || "#" === t) {
            let i = e.getAttribute("href");
            if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
            (i.includes("#") &&
              !i.startsWith("#") &&
              (i = `#${i.split("#")[1]}`),
              (t = i && "#" !== i ? i.trim() : null));
          }
          return t
            ? t
                .split(",")
                .map((e) => Me(e))
                .join(",")
            : null;
        },
        St = {
          find(e, t = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(t, e));
          },
          findOne(e, t = document.documentElement) {
            return Element.prototype.querySelector.call(t, e);
          },
          children(e, t) {
            return [].concat(...e.children).filter((e) => e.matches(t));
          },
          parents(e, t) {
            const i = [];
            let n = e.parentNode.closest(t);
            for (; n; ) (i.push(n), (n = n.parentNode.closest(t)));
            return i;
          },
          prev(e, t) {
            let i = e.previousElementSibling;
            for (; i; ) {
              if (i.matches(t)) return [i];
              i = i.previousElementSibling;
            }
            return [];
          },
          next(e, t) {
            let i = e.nextElementSibling;
            for (; i; ) {
              if (i.matches(t)) return [i];
              i = i.nextElementSibling;
            }
            return [];
          },
          focusableChildren(e) {
            const t = [
              "a",
              "button",
              "input",
              "textarea",
              "select",
              "details",
              "[tabindex]",
              '[contenteditable="true"]',
            ]
              .map((e) => `${e}:not([tabindex^="-"])`)
              .join(",");
            return this.find(t, e).filter((e) => !Be(e) && We(e));
          },
          getSelectorFromElement(e) {
            const t = wt(e);
            return t && St.findOne(t) ? t : null;
          },
          getElementFromSelector(e) {
            const t = wt(e);
            return t ? St.findOne(t) : null;
          },
          getMultipleElementsFromSelector(e) {
            const t = wt(e);
            return t ? St.find(t) : [];
          },
        },
        xt = (e, t = "hide") => {
          const i = `click.dismiss${e.EVENT_KEY}`,
            n = e.NAME;
          gt.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
            if (
              (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
              Be(this))
            )
              return;
            const s = St.getElementFromSelector(this) || this.closest(`.${n}`);
            e.getOrCreateInstance(s)[t]();
          });
        },
        Et = ".bs.alert",
        At = `close${Et}`,
        Tt = `closed${Et}`;
      class Ct extends _t {
        static get NAME() {
          return "alert";
        }
        close() {
          if (gt.trigger(this._element, At).defaultPrevented) return;
          this._element.classList.remove("show");
          const e = this._element.classList.contains("fade");
          this._queueCallback(() => this._destroyElement(), this._element, e);
        }
        _destroyElement() {
          (this._element.remove(),
            gt.trigger(this._element, Tt),
            this.dispose());
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Ct.getOrCreateInstance(this);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      (xt(Ct, "close"), Ke(Ct));
      const kt = '[data-bs-toggle="button"]';
      class Lt extends _t {
        static get NAME() {
          return "button";
        }
        toggle() {
          this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle("active"),
          );
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Lt.getOrCreateInstance(this);
            "toggle" === e && t[e]();
          });
        }
      }
      (gt.on(document, "click.bs.button.data-api", kt, (e) => {
        e.preventDefault();
        const t = e.target.closest(kt);
        Lt.getOrCreateInstance(t).toggle();
      }),
        Ke(Lt));
      const Ot = ".bs.swipe",
        qt = `touchstart${Ot}`,
        It = `touchmove${Ot}`,
        Dt = `touchend${Ot}`,
        Pt = `pointerdown${Ot}`,
        Nt = `pointerup${Ot}`,
        Mt = { endCallback: null, leftCallback: null, rightCallback: null },
        $t = {
          endCallback: "(function|null)",
          leftCallback: "(function|null)",
          rightCallback: "(function|null)",
        };
      class jt extends bt {
        constructor(e, t) {
          (super(),
            (this._element = e),
            e &&
              jt.isSupported() &&
              ((this._config = this._getConfig(t)),
              (this._deltaX = 0),
              (this._supportPointerEvents = Boolean(window.PointerEvent)),
              this._initEvents()));
        }
        static get Default() {
          return Mt;
        }
        static get DefaultType() {
          return $t;
        }
        static get NAME() {
          return "swipe";
        }
        dispose() {
          gt.off(this._element, Ot);
        }
        _start(e) {
          this._supportPointerEvents
            ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
            : (this._deltaX = e.touches[0].clientX);
        }
        _end(e) {
          (this._eventIsPointerPenTouch(e) &&
            (this._deltaX = e.clientX - this._deltaX),
            this._handleSwipe(),
            Qe(this._config.endCallback));
        }
        _move(e) {
          this._deltaX =
            e.touches && e.touches.length > 1
              ? 0
              : e.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
          const e = Math.abs(this._deltaX);
          if (e <= 40) return;
          const t = e / this._deltaX;
          ((this._deltaX = 0),
            t &&
              Qe(
                t > 0 ? this._config.rightCallback : this._config.leftCallback,
              ));
        }
        _initEvents() {
          this._supportPointerEvents
            ? (gt.on(this._element, Pt, (e) => this._start(e)),
              gt.on(this._element, Nt, (e) => this._end(e)),
              this._element.classList.add("pointer-event"))
            : (gt.on(this._element, qt, (e) => this._start(e)),
              gt.on(this._element, It, (e) => this._move(e)),
              gt.on(this._element, Dt, (e) => this._end(e)));
        }
        _eventIsPointerPenTouch(e) {
          return (
            this._supportPointerEvents &&
            ("pen" === e.pointerType || "touch" === e.pointerType)
          );
        }
        static isSupported() {
          return (
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0
          );
        }
      }
      const zt = ".bs.carousel",
        Ht = ".data-api",
        Wt = "ArrowLeft",
        Bt = "ArrowRight",
        Yt = "next",
        Xt = "prev",
        Ft = "left",
        Rt = "right",
        Vt = `slide${zt}`,
        Ut = `slid${zt}`,
        Kt = `keydown${zt}`,
        Qt = `mouseenter${zt}`,
        Gt = `mouseleave${zt}`,
        Zt = `dragstart${zt}`,
        Jt = `load${zt}${Ht}`,
        ei = `click${zt}${Ht}`,
        ti = "carousel",
        ii = "active",
        ni = ".active",
        si = ".carousel-item",
        oi = ni + si,
        ri = { [Wt]: Rt, [Bt]: Ft },
        ai = {
          interval: 5e3,
          keyboard: !0,
          pause: "hover",
          ride: !1,
          touch: !0,
          wrap: !0,
        },
        li = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          pause: "(string|boolean)",
          ride: "(boolean|string)",
          touch: "boolean",
          wrap: "boolean",
        };
      class ci extends _t {
        constructor(e, t) {
          (super(e, t),
            (this._interval = null),
            (this._activeElement = null),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._swipeHelper = null),
            (this._indicatorsElement = St.findOne(
              ".carousel-indicators",
              this._element,
            )),
            this._addEventListeners(),
            this._config.ride === ti && this.cycle());
        }
        static get Default() {
          return ai;
        }
        static get DefaultType() {
          return li;
        }
        static get NAME() {
          return "carousel";
        }
        next() {
          this._slide(Yt);
        }
        nextWhenVisible() {
          !document.hidden && We(this._element) && this.next();
        }
        prev() {
          this._slide(Xt);
        }
        pause() {
          (this._isSliding && je(this._element), this._clearInterval());
        }
        cycle() {
          (this._clearInterval(),
            this._updateInterval(),
            (this._interval = setInterval(
              () => this.nextWhenVisible(),
              this._config.interval,
            )));
        }
        _maybeEnableCycle() {
          this._config.ride &&
            (this._isSliding
              ? gt.one(this._element, Ut, () => this.cycle())
              : this.cycle());
        }
        to(e) {
          const t = this._getItems();
          if (e > t.length - 1 || e < 0) return;
          if (this._isSliding)
            return void gt.one(this._element, Ut, () => this.to(e));
          const i = this._getItemIndex(this._getActive());
          if (i === e) return;
          const n = e > i ? Yt : Xt;
          this._slide(n, t[e]);
        }
        dispose() {
          (this._swipeHelper && this._swipeHelper.dispose(), super.dispose());
        }
        _configAfterMerge(e) {
          return ((e.defaultInterval = e.interval), e);
        }
        _addEventListeners() {
          (this._config.keyboard &&
            gt.on(this._element, Kt, (e) => this._keydown(e)),
            "hover" === this._config.pause &&
              (gt.on(this._element, Qt, () => this.pause()),
              gt.on(this._element, Gt, () => this._maybeEnableCycle())),
            this._config.touch &&
              jt.isSupported() &&
              this._addTouchEventListeners());
        }
        _addTouchEventListeners() {
          for (const e of St.find(".carousel-item img", this._element))
            gt.on(e, Zt, (e) => e.preventDefault());
          const e = {
            leftCallback: () => this._slide(this._directionToOrder(Ft)),
            rightCallback: () => this._slide(this._directionToOrder(Rt)),
            endCallback: () => {
              "hover" === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  () => this._maybeEnableCycle(),
                  500 + this._config.interval,
                )));
            },
          };
          this._swipeHelper = new jt(this._element, e);
        }
        _keydown(e) {
          if (/input|textarea/i.test(e.target.tagName)) return;
          const t = ri[e.key];
          t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
        }
        _getItemIndex(e) {
          return this._getItems().indexOf(e);
        }
        _setActiveIndicatorElement(e) {
          if (!this._indicatorsElement) return;
          const t = St.findOne(ni, this._indicatorsElement);
          (t.classList.remove(ii), t.removeAttribute("aria-current"));
          const i = St.findOne(
            `[data-bs-slide-to="${e}"]`,
            this._indicatorsElement,
          );
          i && (i.classList.add(ii), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
          const e = this._activeElement || this._getActive();
          if (!e) return;
          const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
          this._config.interval = t || this._config.defaultInterval;
        }
        _slide(e, t = null) {
          if (this._isSliding) return;
          const i = this._getActive(),
            n = e === Yt,
            s = t || Ze(this._getItems(), i, n, this._config.wrap);
          if (s === i) return;
          const o = this._getItemIndex(s),
            r = (t) =>
              gt.trigger(this._element, t, {
                relatedTarget: s,
                direction: this._orderToDirection(e),
                from: this._getItemIndex(i),
                to: o,
              });
          if (r(Vt).defaultPrevented) return;
          if (!i || !s) return;
          const a = Boolean(this._interval);
          (this.pause(),
            (this._isSliding = !0),
            this._setActiveIndicatorElement(o),
            (this._activeElement = s));
          const l = n ? "carousel-item-start" : "carousel-item-end",
            c = n ? "carousel-item-next" : "carousel-item-prev";
          (s.classList.add(c),
            Fe(s),
            i.classList.add(l),
            s.classList.add(l),
            this._queueCallback(
              () => {
                (s.classList.remove(l, c),
                  s.classList.add(ii),
                  i.classList.remove(ii, c, l),
                  (this._isSliding = !1),
                  r(Ut));
              },
              i,
              this._isAnimated(),
            ),
            a && this.cycle());
        }
        _isAnimated() {
          return this._element.classList.contains("slide");
        }
        _getActive() {
          return St.findOne(oi, this._element);
        }
        _getItems() {
          return St.find(si, this._element);
        }
        _clearInterval() {
          this._interval &&
            (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(e) {
          return Ue() ? (e === Ft ? Xt : Yt) : e === Ft ? Yt : Xt;
        }
        _orderToDirection(e) {
          return Ue() ? (e === Xt ? Ft : Rt) : e === Xt ? Rt : Ft;
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = ci.getOrCreateInstance(this, e);
            if ("number" != typeof e) {
              if ("string" == typeof e) {
                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                  throw new TypeError(`No method named "${e}"`);
                t[e]();
              }
            } else t.to(e);
          });
        }
      }
      (gt.on(document, ei, "[data-bs-slide], [data-bs-slide-to]", function (e) {
        const t = St.getElementFromSelector(this);
        if (!t || !t.classList.contains(ti)) return;
        e.preventDefault();
        const i = ci.getOrCreateInstance(t),
          n = this.getAttribute("data-bs-slide-to");
        return n
          ? (i.to(n), void i._maybeEnableCycle())
          : "next" === yt.getDataAttribute(this, "slide")
            ? (i.next(), void i._maybeEnableCycle())
            : (i.prev(), void i._maybeEnableCycle());
      }),
        gt.on(window, Jt, () => {
          const e = St.find('[data-bs-ride="carousel"]');
          for (const t of e) ci.getOrCreateInstance(t);
        }),
        Ke(ci));
      const di = ".bs.collapse",
        ui = `show${di}`,
        hi = `shown${di}`,
        fi = `hide${di}`,
        gi = `hidden${di}`,
        pi = `click${di}.data-api`,
        mi = "show",
        vi = "collapse",
        yi = "collapsing",
        bi = `:scope .${vi} .${vi}`,
        _i = '[data-bs-toggle="collapse"]',
        wi = { parent: null, toggle: !0 },
        Si = { parent: "(null|element)", toggle: "boolean" };
      class xi extends _t {
        constructor(e, t) {
          (super(e, t),
            (this._isTransitioning = !1),
            (this._triggerArray = []));
          const i = St.find(_i);
          for (const e of i) {
            const t = St.getSelectorFromElement(e),
              i = St.find(t).filter((e) => e === this._element);
            null !== t && i.length && this._triggerArray.push(e);
          }
          (this._initializeChildren(),
            this._config.parent ||
              this._addAriaAndCollapsedClass(
                this._triggerArray,
                this._isShown(),
              ),
            this._config.toggle && this.toggle());
        }
        static get Default() {
          return wi;
        }
        static get DefaultType() {
          return Si;
        }
        static get NAME() {
          return "collapse";
        }
        toggle() {
          this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._isShown()) return;
          let e = [];
          if (
            (this._config.parent &&
              (e = this._getFirstLevelChildren(
                ".collapse.show, .collapse.collapsing",
              )
                .filter((e) => e !== this._element)
                .map((e) => xi.getOrCreateInstance(e, { toggle: !1 }))),
            e.length && e[0]._isTransitioning)
          )
            return;
          if (gt.trigger(this._element, ui).defaultPrevented) return;
          for (const t of e) t.hide();
          const t = this._getDimension();
          (this._element.classList.remove(vi),
            this._element.classList.add(yi),
            (this._element.style[t] = 0),
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            (this._isTransitioning = !0));
          const i = `scroll${t[0].toUpperCase() + t.slice(1)}`;
          (this._queueCallback(
            () => {
              ((this._isTransitioning = !1),
                this._element.classList.remove(yi),
                this._element.classList.add(vi, mi),
                (this._element.style[t] = ""),
                gt.trigger(this._element, hi));
            },
            this._element,
            !0,
          ),
            (this._element.style[t] = `${this._element[i]}px`));
        }
        hide() {
          if (this._isTransitioning || !this._isShown()) return;
          if (gt.trigger(this._element, fi).defaultPrevented) return;
          const e = this._getDimension();
          ((this._element.style[e] =
            `${this._element.getBoundingClientRect()[e]}px`),
            Fe(this._element),
            this._element.classList.add(yi),
            this._element.classList.remove(vi, mi));
          for (const e of this._triggerArray) {
            const t = St.getElementFromSelector(e);
            t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
          }
          ((this._isTransitioning = !0),
            (this._element.style[e] = ""),
            this._queueCallback(
              () => {
                ((this._isTransitioning = !1),
                  this._element.classList.remove(yi),
                  this._element.classList.add(vi),
                  gt.trigger(this._element, gi));
              },
              this._element,
              !0,
            ));
        }
        _isShown(e = this._element) {
          return e.classList.contains(mi);
        }
        _configAfterMerge(e) {
          return ((e.toggle = Boolean(e.toggle)), (e.parent = He(e.parent)), e);
        }
        _getDimension() {
          return this._element.classList.contains("collapse-horizontal")
            ? "width"
            : "height";
        }
        _initializeChildren() {
          if (!this._config.parent) return;
          const e = this._getFirstLevelChildren(_i);
          for (const t of e) {
            const e = St.getElementFromSelector(t);
            e && this._addAriaAndCollapsedClass([t], this._isShown(e));
          }
        }
        _getFirstLevelChildren(e) {
          const t = St.find(bi, this._config.parent);
          return St.find(e, this._config.parent).filter((e) => !t.includes(e));
        }
        _addAriaAndCollapsedClass(e, t) {
          if (e.length)
            for (const i of e)
              (i.classList.toggle("collapsed", !t),
                i.setAttribute("aria-expanded", t));
        }
        static jQueryInterface(e) {
          const t = {};
          return (
            "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
            this.each(function () {
              const i = xi.getOrCreateInstance(this, t);
              if ("string" == typeof e) {
                if (void 0 === i[e])
                  throw new TypeError(`No method named "${e}"`);
                i[e]();
              }
            })
          );
        }
      }
      (gt.on(document, pi, _i, function (e) {
        ("A" === e.target.tagName ||
          (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
          e.preventDefault();
        for (const e of St.getMultipleElementsFromSelector(this))
          xi.getOrCreateInstance(e, { toggle: !1 }).toggle();
      }),
        Ke(xi));
      const Ei = "dropdown",
        Ai = ".bs.dropdown",
        Ti = ".data-api",
        Ci = "ArrowUp",
        ki = "ArrowDown",
        Li = `hide${Ai}`,
        Oi = `hidden${Ai}`,
        qi = `show${Ai}`,
        Ii = `shown${Ai}`,
        Di = `click${Ai}${Ti}`,
        Pi = `keydown${Ai}${Ti}`,
        Ni = `keyup${Ai}${Ti}`,
        Mi = "show",
        $i = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        ji = `${$i}.${Mi}`,
        zi = ".dropdown-menu",
        Hi = Ue() ? "top-end" : "top-start",
        Wi = Ue() ? "top-start" : "top-end",
        Bi = Ue() ? "bottom-end" : "bottom-start",
        Yi = Ue() ? "bottom-start" : "bottom-end",
        Xi = Ue() ? "left-start" : "right-start",
        Fi = Ue() ? "right-start" : "left-start",
        Ri = {
          autoClose: !0,
          boundary: "clippingParents",
          display: "dynamic",
          offset: [0, 2],
          popperConfig: null,
          reference: "toggle",
        },
        Vi = {
          autoClose: "(boolean|string)",
          boundary: "(string|element)",
          display: "string",
          offset: "(array|string|function)",
          popperConfig: "(null|object|function)",
          reference: "(string|element|object)",
        };
      class Ui extends _t {
        constructor(e, t) {
          (super(e, t),
            (this._popper = null),
            (this._parent = this._element.parentNode),
            (this._menu =
              St.next(this._element, zi)[0] ||
              St.prev(this._element, zi)[0] ||
              St.findOne(zi, this._parent)),
            (this._inNavbar = this._detectNavbar()));
        }
        static get Default() {
          return Ri;
        }
        static get DefaultType() {
          return Vi;
        }
        static get NAME() {
          return Ei;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (Be(this._element) || this._isShown()) return;
          const e = { relatedTarget: this._element };
          if (!gt.trigger(this._element, qi, e).defaultPrevented) {
            if (
              (this._createPopper(),
              "ontouchstart" in document.documentElement &&
                !this._parent.closest(".navbar-nav"))
            )
              for (const e of [].concat(...document.body.children))
                gt.on(e, "mouseover", Xe);
            (this._element.focus(),
              this._element.setAttribute("aria-expanded", !0),
              this._menu.classList.add(Mi),
              this._element.classList.add(Mi),
              gt.trigger(this._element, Ii, e));
          }
        }
        hide() {
          if (Be(this._element) || !this._isShown()) return;
          const e = { relatedTarget: this._element };
          this._completeHide(e);
        }
        dispose() {
          (this._popper && this._popper.destroy(), super.dispose());
        }
        update() {
          ((this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update());
        }
        _completeHide(e) {
          if (!gt.trigger(this._element, Li, e).defaultPrevented) {
            if ("ontouchstart" in document.documentElement)
              for (const e of [].concat(...document.body.children))
                gt.off(e, "mouseover", Xe);
            (this._popper && this._popper.destroy(),
              this._menu.classList.remove(Mi),
              this._element.classList.remove(Mi),
              this._element.setAttribute("aria-expanded", "false"),
              yt.removeDataAttribute(this._menu, "popper"),
              gt.trigger(this._element, Oi, e),
              this._element.focus());
          }
        }
        _getConfig(e) {
          if (
            "object" == typeof (e = super._getConfig(e)).reference &&
            !ze(e.reference) &&
            "function" != typeof e.reference.getBoundingClientRect
          )
            throw new TypeError(
              `${Ei.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
            );
          return e;
        }
        _createPopper() {
          let e = this._element;
          "parent" === this._config.reference
            ? (e = this._parent)
            : ze(this._config.reference)
              ? (e = He(this._config.reference))
              : "object" == typeof this._config.reference &&
                (e = this._config.reference);
          const t = this._getPopperConfig();
          this._popper = qe(e, this._menu, t);
        }
        _isShown() {
          return this._menu.classList.contains(Mi);
        }
        _getPlacement() {
          const e = this._parent;
          if (e.classList.contains("dropend")) return Xi;
          if (e.classList.contains("dropstart")) return Fi;
          if (e.classList.contains("dropup-center")) return "top";
          if (e.classList.contains("dropdown-center")) return "bottom";
          const t =
            "end" ===
            getComputedStyle(this._menu)
              .getPropertyValue("--bs-position")
              .trim();
          return e.classList.contains("dropup") ? (t ? Wi : Hi) : t ? Yi : Bi;
        }
        _detectNavbar() {
          return null !== this._element.closest(".navbar");
        }
        _getOffset() {
          const { offset: e } = this._config;
          return "string" == typeof e
            ? e.split(",").map((e) => Number.parseInt(e, 10))
            : "function" == typeof e
              ? (t) => e(t, this._element)
              : e;
        }
        _getPopperConfig() {
          const e = {
            placement: this._getPlacement(),
            modifiers: [
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              { name: "offset", options: { offset: this._getOffset() } },
            ],
          };
          return (
            (this._inNavbar || "static" === this._config.display) &&
              (yt.setDataAttribute(this._menu, "popper", "static"),
              (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
            { ...e, ...Qe(this._config.popperConfig, [void 0, e]) }
          );
        }
        _selectMenuItem({ key: e, target: t }) {
          const i = St.find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu,
          ).filter((e) => We(e));
          i.length && Ze(i, t, e === ki, !i.includes(t)).focus();
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Ui.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
        static clearMenus(e) {
          if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)) return;
          const t = St.find(ji);
          for (const i of t) {
            const t = Ui.getInstance(i);
            if (!t || !1 === t._config.autoClose) continue;
            const n = e.composedPath(),
              s = n.includes(t._menu);
            if (
              n.includes(t._element) ||
              ("inside" === t._config.autoClose && !s) ||
              ("outside" === t._config.autoClose && s)
            )
              continue;
            if (
              t._menu.contains(e.target) &&
              (("keyup" === e.type && "Tab" === e.key) ||
                /input|select|option|textarea|form/i.test(e.target.tagName))
            )
              continue;
            const o = { relatedTarget: t._element };
            ("click" === e.type && (o.clickEvent = e), t._completeHide(o));
          }
        }
        static dataApiKeydownHandler(e) {
          const t = /input|textarea/i.test(e.target.tagName),
            i = "Escape" === e.key,
            n = [Ci, ki].includes(e.key);
          if (!n && !i) return;
          if (t && !i) return;
          e.preventDefault();
          const s = this.matches($i)
              ? this
              : St.prev(this, $i)[0] ||
                St.next(this, $i)[0] ||
                St.findOne($i, e.delegateTarget.parentNode),
            o = Ui.getOrCreateInstance(s);
          if (n)
            return (e.stopPropagation(), o.show(), void o._selectMenuItem(e));
          o._isShown() && (e.stopPropagation(), o.hide(), s.focus());
        }
      }
      (gt.on(document, Pi, $i, Ui.dataApiKeydownHandler),
        gt.on(document, Pi, zi, Ui.dataApiKeydownHandler),
        gt.on(document, Di, Ui.clearMenus),
        gt.on(document, Ni, Ui.clearMenus),
        gt.on(document, Di, $i, function (e) {
          (e.preventDefault(), Ui.getOrCreateInstance(this).toggle());
        }),
        Ke(Ui));
      const Ki = "backdrop",
        Qi = "show",
        Gi = `mousedown.bs.${Ki}`,
        Zi = {
          className: "modal-backdrop",
          clickCallback: null,
          isAnimated: !1,
          isVisible: !0,
          rootElement: "body",
        },
        Ji = {
          className: "string",
          clickCallback: "(function|null)",
          isAnimated: "boolean",
          isVisible: "boolean",
          rootElement: "(element|string)",
        };
      class en extends bt {
        constructor(e) {
          (super(),
            (this._config = this._getConfig(e)),
            (this._isAppended = !1),
            (this._element = null));
        }
        static get Default() {
          return Zi;
        }
        static get DefaultType() {
          return Ji;
        }
        static get NAME() {
          return Ki;
        }
        show(e) {
          if (!this._config.isVisible) return void Qe(e);
          this._append();
          const t = this._getElement();
          (this._config.isAnimated && Fe(t),
            t.classList.add(Qi),
            this._emulateAnimation(() => {
              Qe(e);
            }));
        }
        hide(e) {
          this._config.isVisible
            ? (this._getElement().classList.remove(Qi),
              this._emulateAnimation(() => {
                (this.dispose(), Qe(e));
              }))
            : Qe(e);
        }
        dispose() {
          this._isAppended &&
            (gt.off(this._element, Gi),
            this._element.remove(),
            (this._isAppended = !1));
        }
        _getElement() {
          if (!this._element) {
            const e = document.createElement("div");
            ((e.className = this._config.className),
              this._config.isAnimated && e.classList.add("fade"),
              (this._element = e));
          }
          return this._element;
        }
        _configAfterMerge(e) {
          return ((e.rootElement = He(e.rootElement)), e);
        }
        _append() {
          if (this._isAppended) return;
          const e = this._getElement();
          (this._config.rootElement.append(e),
            gt.on(e, Gi, () => {
              Qe(this._config.clickCallback);
            }),
            (this._isAppended = !0));
        }
        _emulateAnimation(e) {
          Ge(e, this._getElement(), this._config.isAnimated);
        }
      }
      const tn = ".bs.focustrap",
        nn = `focusin${tn}`,
        sn = `keydown.tab${tn}`,
        on = "backward",
        rn = { autofocus: !0, trapElement: null },
        an = { autofocus: "boolean", trapElement: "element" };
      class ln extends bt {
        constructor(e) {
          (super(),
            (this._config = this._getConfig(e)),
            (this._isActive = !1),
            (this._lastTabNavDirection = null));
        }
        static get Default() {
          return rn;
        }
        static get DefaultType() {
          return an;
        }
        static get NAME() {
          return "focustrap";
        }
        activate() {
          this._isActive ||
            (this._config.autofocus && this._config.trapElement.focus(),
            gt.off(document, tn),
            gt.on(document, nn, (e) => this._handleFocusin(e)),
            gt.on(document, sn, (e) => this._handleKeydown(e)),
            (this._isActive = !0));
        }
        deactivate() {
          this._isActive && ((this._isActive = !1), gt.off(document, tn));
        }
        _handleFocusin(e) {
          const { trapElement: t } = this._config;
          if (e.target === document || e.target === t || t.contains(e.target))
            return;
          const i = St.focusableChildren(t);
          0 === i.length
            ? t.focus()
            : this._lastTabNavDirection === on
              ? i[i.length - 1].focus()
              : i[0].focus();
        }
        _handleKeydown(e) {
          "Tab" === e.key &&
            (this._lastTabNavDirection = e.shiftKey ? on : "forward");
        }
      }
      const cn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        dn = ".sticky-top",
        un = "padding-right",
        hn = "margin-right";
      class fn {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          const e = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - e);
        }
        hide() {
          const e = this.getWidth();
          (this._disableOverFlow(),
            this._setElementAttributes(this._element, un, (t) => t + e),
            this._setElementAttributes(cn, un, (t) => t + e),
            this._setElementAttributes(dn, hn, (t) => t - e));
        }
        reset() {
          (this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, un),
            this._resetElementAttributes(cn, un),
            this._resetElementAttributes(dn, hn));
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        _disableOverFlow() {
          (this._saveInitialAttribute(this._element, "overflow"),
            (this._element.style.overflow = "hidden"));
        }
        _setElementAttributes(e, t, i) {
          const n = this.getWidth();
          this._applyManipulationCallback(e, (e) => {
            if (e !== this._element && window.innerWidth > e.clientWidth + n)
              return;
            this._saveInitialAttribute(e, t);
            const s = window.getComputedStyle(e).getPropertyValue(t);
            e.style.setProperty(t, `${i(Number.parseFloat(s))}px`);
          });
        }
        _saveInitialAttribute(e, t) {
          const i = e.style.getPropertyValue(t);
          i && yt.setDataAttribute(e, t, i);
        }
        _resetElementAttributes(e, t) {
          this._applyManipulationCallback(e, (e) => {
            const i = yt.getDataAttribute(e, t);
            null !== i
              ? (yt.removeDataAttribute(e, t), e.style.setProperty(t, i))
              : e.style.removeProperty(t);
          });
        }
        _applyManipulationCallback(e, t) {
          if (ze(e)) t(e);
          else for (const i of St.find(e, this._element)) t(i);
        }
      }
      const gn = ".bs.modal",
        pn = `hide${gn}`,
        mn = `hidePrevented${gn}`,
        vn = `hidden${gn}`,
        yn = `show${gn}`,
        bn = `shown${gn}`,
        _n = `resize${gn}`,
        wn = `click.dismiss${gn}`,
        Sn = `mousedown.dismiss${gn}`,
        xn = `keydown.dismiss${gn}`,
        En = `click${gn}.data-api`,
        An = "modal-open",
        Tn = "show",
        Cn = "modal-static",
        kn = { backdrop: !0, focus: !0, keyboard: !0 },
        Ln = {
          backdrop: "(boolean|string)",
          focus: "boolean",
          keyboard: "boolean",
        };
      class On extends _t {
        constructor(e, t) {
          (super(e, t),
            (this._dialog = St.findOne(".modal-dialog", this._element)),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            (this._isShown = !1),
            (this._isTransitioning = !1),
            (this._scrollBar = new fn()),
            this._addEventListeners());
        }
        static get Default() {
          return kn;
        }
        static get DefaultType() {
          return Ln;
        }
        static get NAME() {
          return "modal";
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          this._isShown ||
            this._isTransitioning ||
            gt.trigger(this._element, yn, { relatedTarget: e })
              .defaultPrevented ||
            ((this._isShown = !0),
            (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(An),
            this._adjustDialog(),
            this._backdrop.show(() => this._showElement(e)));
        }
        hide() {
          this._isShown &&
            !this._isTransitioning &&
            (gt.trigger(this._element, pn).defaultPrevented ||
              ((this._isShown = !1),
              (this._isTransitioning = !0),
              this._focustrap.deactivate(),
              this._element.classList.remove(Tn),
              this._queueCallback(
                () => this._hideModal(),
                this._element,
                this._isAnimated(),
              )));
        }
        dispose() {
          (gt.off(window, gn),
            gt.off(this._dialog, gn),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose());
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new en({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated(),
          });
        }
        _initializeFocusTrap() {
          return new ln({ trapElement: this._element });
        }
        _showElement(e) {
          (document.body.contains(this._element) ||
            document.body.append(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            (this._element.scrollTop = 0));
          const t = St.findOne(".modal-body", this._dialog);
          (t && (t.scrollTop = 0),
            Fe(this._element),
            this._element.classList.add(Tn),
            this._queueCallback(
              () => {
                (this._config.focus && this._focustrap.activate(),
                  (this._isTransitioning = !1),
                  gt.trigger(this._element, bn, { relatedTarget: e }));
              },
              this._dialog,
              this._isAnimated(),
            ));
        }
        _addEventListeners() {
          (gt.on(this._element, xn, (e) => {
            "Escape" === e.key &&
              (this._config.keyboard
                ? this.hide()
                : this._triggerBackdropTransition());
          }),
            gt.on(window, _n, () => {
              this._isShown && !this._isTransitioning && this._adjustDialog();
            }),
            gt.on(this._element, Sn, (e) => {
              gt.one(this._element, wn, (t) => {
                this._element === e.target &&
                  this._element === t.target &&
                  ("static" !== this._config.backdrop
                    ? this._config.backdrop && this.hide()
                    : this._triggerBackdropTransition());
              });
            }));
        }
        _hideModal() {
          ((this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._backdrop.hide(() => {
              (document.body.classList.remove(An),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                gt.trigger(this._element, vn));
            }));
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          if (gt.trigger(this._element, mn).defaultPrevented) return;
          const e =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            t = this._element.style.overflowY;
          "hidden" === t ||
            this._element.classList.contains(Cn) ||
            (e || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(Cn),
            this._queueCallback(() => {
              (this._element.classList.remove(Cn),
                this._queueCallback(() => {
                  this._element.style.overflowY = t;
                }, this._dialog));
            }, this._dialog),
            this._element.focus());
        }
        _adjustDialog() {
          const e =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            t = this._scrollBar.getWidth(),
            i = t > 0;
          if (i && !e) {
            const e = Ue() ? "paddingLeft" : "paddingRight";
            this._element.style[e] = `${t}px`;
          }
          if (!i && e) {
            const e = Ue() ? "paddingRight" : "paddingLeft";
            this._element.style[e] = `${t}px`;
          }
        }
        _resetAdjustments() {
          ((this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = ""));
        }
        static jQueryInterface(e, t) {
          return this.each(function () {
            const i = On.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === i[e])
                throw new TypeError(`No method named "${e}"`);
              i[e](t);
            }
          });
        }
      }
      (gt.on(document, En, '[data-bs-toggle="modal"]', function (e) {
        const t = St.getElementFromSelector(this);
        (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          gt.one(t, yn, (e) => {
            e.defaultPrevented ||
              gt.one(t, vn, () => {
                We(this) && this.focus();
              });
          }));
        const i = St.findOne(".modal.show");
        (i && On.getInstance(i).hide(), On.getOrCreateInstance(t).toggle(this));
      }),
        xt(On),
        Ke(On));
      const qn = ".bs.offcanvas",
        In = ".data-api",
        Dn = `load${qn}${In}`,
        Pn = "show",
        Nn = "showing",
        Mn = "hiding",
        $n = ".offcanvas.show",
        jn = `show${qn}`,
        zn = `shown${qn}`,
        Hn = `hide${qn}`,
        Wn = `hidePrevented${qn}`,
        Bn = `hidden${qn}`,
        Yn = `resize${qn}`,
        Xn = `click${qn}${In}`,
        Fn = `keydown.dismiss${qn}`,
        Rn = { backdrop: !0, keyboard: !0, scroll: !1 },
        Vn = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          scroll: "boolean",
        };
      class Un extends _t {
        constructor(e, t) {
          (super(e, t),
            (this._isShown = !1),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            this._addEventListeners());
        }
        static get Default() {
          return Rn;
        }
        static get DefaultType() {
          return Vn;
        }
        static get NAME() {
          return "offcanvas";
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          this._isShown ||
            gt.trigger(this._element, jn, { relatedTarget: e })
              .defaultPrevented ||
            ((this._isShown = !0),
            this._backdrop.show(),
            this._config.scroll || new fn().hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(Nn),
            this._queueCallback(
              () => {
                ((this._config.scroll && !this._config.backdrop) ||
                  this._focustrap.activate(),
                  this._element.classList.add(Pn),
                  this._element.classList.remove(Nn),
                  gt.trigger(this._element, zn, { relatedTarget: e }));
              },
              this._element,
              !0,
            ));
        }
        hide() {
          this._isShown &&
            (gt.trigger(this._element, Hn).defaultPrevented ||
              (this._focustrap.deactivate(),
              this._element.blur(),
              (this._isShown = !1),
              this._element.classList.add(Mn),
              this._backdrop.hide(),
              this._queueCallback(
                () => {
                  (this._element.classList.remove(Pn, Mn),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    this._config.scroll || new fn().reset(),
                    gt.trigger(this._element, Bn));
                },
                this._element,
                !0,
              )));
        }
        dispose() {
          (this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose());
        }
        _initializeBackDrop() {
          const e = Boolean(this._config.backdrop);
          return new en({
            className: "offcanvas-backdrop",
            isVisible: e,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: e
              ? () => {
                  "static" !== this._config.backdrop
                    ? this.hide()
                    : gt.trigger(this._element, Wn);
                }
              : null,
          });
        }
        _initializeFocusTrap() {
          return new ln({ trapElement: this._element });
        }
        _addEventListeners() {
          gt.on(this._element, Fn, (e) => {
            "Escape" === e.key &&
              (this._config.keyboard
                ? this.hide()
                : gt.trigger(this._element, Wn));
          });
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Un.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      (gt.on(document, Xn, '[data-bs-toggle="offcanvas"]', function (e) {
        const t = St.getElementFromSelector(this);
        if (
          (["A", "AREA"].includes(this.tagName) && e.preventDefault(), Be(this))
        )
          return;
        gt.one(t, Bn, () => {
          We(this) && this.focus();
        });
        const i = St.findOne($n);
        (i && i !== t && Un.getInstance(i).hide(),
          Un.getOrCreateInstance(t).toggle(this));
      }),
        gt.on(window, Dn, () => {
          for (const e of St.find($n)) Un.getOrCreateInstance(e).show();
        }),
        gt.on(window, Yn, () => {
          for (const e of St.find(
            "[aria-modal][class*=show][class*=offcanvas-]",
          ))
            "fixed" !== getComputedStyle(e).position &&
              Un.getOrCreateInstance(e).hide();
        }),
        xt(Un),
        Ke(Un));
      const Kn = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          dd: [],
          div: [],
          dl: [],
          dt: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        Qn = new Set([
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ]),
        Gn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Zn = (e, t) => {
          const i = e.nodeName.toLowerCase();
          return t.includes(i)
            ? !Qn.has(i) || Boolean(Gn.test(e.nodeValue))
            : t.filter((e) => e instanceof RegExp).some((e) => e.test(i));
        },
        Jn = {
          allowList: Kn,
          content: {},
          extraClass: "",
          html: !1,
          sanitize: !0,
          sanitizeFn: null,
          template: "<div></div>",
        },
        es = {
          allowList: "object",
          content: "object",
          extraClass: "(string|function)",
          html: "boolean",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          template: "string",
        },
        ts = {
          entry: "(string|element|function|null)",
          selector: "(string|element)",
        };
      class is extends bt {
        constructor(e) {
          (super(), (this._config = this._getConfig(e)));
        }
        static get Default() {
          return Jn;
        }
        static get DefaultType() {
          return es;
        }
        static get NAME() {
          return "TemplateFactory";
        }
        getContent() {
          return Object.values(this._config.content)
            .map((e) => this._resolvePossibleFunction(e))
            .filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(e) {
          return (
            this._checkContent(e),
            (this._config.content = { ...this._config.content, ...e }),
            this
          );
        }
        toHtml() {
          const e = document.createElement("div");
          e.innerHTML = this._maybeSanitize(this._config.template);
          for (const [t, i] of Object.entries(this._config.content))
            this._setContent(e, i, t);
          const t = e.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);
          return (i && t.classList.add(...i.split(" ")), t);
        }
        _typeCheckConfig(e) {
          (super._typeCheckConfig(e), this._checkContent(e.content));
        }
        _checkContent(e) {
          for (const [t, i] of Object.entries(e))
            super._typeCheckConfig({ selector: t, entry: i }, ts);
        }
        _setContent(e, t, i) {
          const n = St.findOne(i, e);
          n &&
            ((t = this._resolvePossibleFunction(t))
              ? ze(t)
                ? this._putElementInTemplate(He(t), n)
                : this._config.html
                  ? (n.innerHTML = this._maybeSanitize(t))
                  : (n.textContent = t)
              : n.remove());
        }
        _maybeSanitize(e) {
          return this._config.sanitize
            ? (function (e, t, i) {
                if (!e.length) return e;
                if (i && "function" == typeof i) return i(e);
                const n = new window.DOMParser().parseFromString(
                    e,
                    "text/html",
                  ),
                  s = [].concat(...n.body.querySelectorAll("*"));
                for (const e of s) {
                  const i = e.nodeName.toLowerCase();
                  if (!Object.keys(t).includes(i)) {
                    e.remove();
                    continue;
                  }
                  const n = [].concat(...e.attributes),
                    s = [].concat(t["*"] || [], t[i] || []);
                  for (const t of n) Zn(t, s) || e.removeAttribute(t.nodeName);
                }
                return n.body.innerHTML;
              })(e, this._config.allowList, this._config.sanitizeFn)
            : e;
        }
        _resolvePossibleFunction(e) {
          return Qe(e, [void 0, this]);
        }
        _putElementInTemplate(e, t) {
          if (this._config.html) return ((t.innerHTML = ""), void t.append(e));
          t.textContent = e.textContent;
        }
      }
      const ns = new Set(["sanitize", "allowList", "sanitizeFn"]),
        ss = "fade",
        os = "show",
        rs = ".tooltip-inner",
        as = ".modal",
        ls = "hide.bs.modal",
        cs = "hover",
        ds = "focus",
        us = "click",
        hs = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: Ue() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: Ue() ? "right" : "left",
        },
        fs = {
          allowList: Kn,
          animation: !0,
          boundary: "clippingParents",
          container: !1,
          customClass: "",
          delay: 0,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          html: !1,
          offset: [0, 6],
          placement: "top",
          popperConfig: null,
          sanitize: !0,
          sanitizeFn: null,
          selector: !1,
          template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          title: "",
          trigger: "hover focus",
        },
        gs = {
          allowList: "object",
          animation: "boolean",
          boundary: "(string|element)",
          container: "(string|element|boolean)",
          customClass: "(string|function)",
          delay: "(number|object)",
          fallbackPlacements: "array",
          html: "boolean",
          offset: "(array|string|function)",
          placement: "(string|function)",
          popperConfig: "(null|object|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          selector: "(string|boolean)",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
        };
      class ps extends _t {
        constructor(e, t) {
          (super(e, t),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._isHovered = null),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this._templateFactory = null),
            (this._newContent = null),
            (this.tip = null),
            this._setListeners(),
            this._config.selector || this._fixTitle());
        }
        static get Default() {
          return fs;
        }
        static get DefaultType() {
          return gs;
        }
        static get NAME() {
          return "tooltip";
        }
        enable() {
          this._isEnabled = !0;
        }
        disable() {
          this._isEnabled = !1;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          this._isEnabled && (this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
          (clearTimeout(this._timeout),
            gt.off(this._element.closest(as), ls, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") &&
              this._element.setAttribute(
                "title",
                this._element.getAttribute("data-bs-original-title"),
              ),
            this._disposePopper(),
            super.dispose());
        }
        show() {
          if ("none" === this._element.style.display)
            throw new Error("Please use show on visible elements");
          if (!this._isWithContent() || !this._isEnabled) return;
          const e = gt.trigger(
              this._element,
              this.constructor.eventName("show"),
            ),
            t = (
              Ye(this._element) || this._element.ownerDocument.documentElement
            ).contains(this._element);
          if (e.defaultPrevented || !t) return;
          this._disposePopper();
          const i = this._getTipElement();
          this._element.setAttribute("aria-describedby", i.getAttribute("id"));
          const { container: n } = this._config;
          if (
            (this._element.ownerDocument.documentElement.contains(this.tip) ||
              (n.append(i),
              gt.trigger(
                this._element,
                this.constructor.eventName("inserted"),
              )),
            (this._popper = this._createPopper(i)),
            i.classList.add(os),
            "ontouchstart" in document.documentElement)
          )
            for (const e of [].concat(...document.body.children))
              gt.on(e, "mouseover", Xe);
          this._queueCallback(
            () => {
              (gt.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                (this._isHovered = !1));
            },
            this.tip,
            this._isAnimated(),
          );
        }
        hide() {
          if (
            this._isShown() &&
            !gt.trigger(this._element, this.constructor.eventName("hide"))
              .defaultPrevented
          ) {
            if (
              (this._getTipElement().classList.remove(os),
              "ontouchstart" in document.documentElement)
            )
              for (const e of [].concat(...document.body.children))
                gt.off(e, "mouseover", Xe);
            ((this._activeTrigger[us] = !1),
              (this._activeTrigger[ds] = !1),
              (this._activeTrigger[cs] = !1),
              (this._isHovered = null),
              this._queueCallback(
                () => {
                  this._isWithActiveTrigger() ||
                    (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute("aria-describedby"),
                    gt.trigger(
                      this._element,
                      this.constructor.eventName("hidden"),
                    ));
                },
                this.tip,
                this._isAnimated(),
              ));
          }
        }
        update() {
          this._popper && this._popper.update();
        }
        _isWithContent() {
          return Boolean(this._getTitle());
        }
        _getTipElement() {
          return (
            this.tip ||
              (this.tip = this._createTipElement(
                this._newContent || this._getContentForTemplate(),
              )),
            this.tip
          );
        }
        _createTipElement(e) {
          const t = this._getTemplateFactory(e).toHtml();
          if (!t) return null;
          (t.classList.remove(ss, os),
            t.classList.add(`bs-${this.constructor.NAME}-auto`));
          const i = ((e) => {
            do {
              e += Math.floor(1e6 * Math.random());
            } while (document.getElementById(e));
            return e;
          })(this.constructor.NAME).toString();
          return (
            t.setAttribute("id", i),
            this._isAnimated() && t.classList.add(ss),
            t
          );
        }
        setContent(e) {
          ((this._newContent = e),
            this._isShown() && (this._disposePopper(), this.show()));
        }
        _getTemplateFactory(e) {
          return (
            this._templateFactory
              ? this._templateFactory.changeContent(e)
              : (this._templateFactory = new is({
                  ...this._config,
                  content: e,
                  extraClass: this._resolvePossibleFunction(
                    this._config.customClass,
                  ),
                })),
            this._templateFactory
          );
        }
        _getContentForTemplate() {
          return { [rs]: this._getTitle() };
        }
        _getTitle() {
          return (
            this._resolvePossibleFunction(this._config.title) ||
            this._element.getAttribute("data-bs-original-title")
          );
        }
        _initializeOnDelegatedTarget(e) {
          return this.constructor.getOrCreateInstance(
            e.delegateTarget,
            this._getDelegateConfig(),
          );
        }
        _isAnimated() {
          return (
            this._config.animation ||
            (this.tip && this.tip.classList.contains(ss))
          );
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(os);
        }
        _createPopper(e) {
          const t = Qe(this._config.placement, [this, e, this._element]),
            i = hs[t.toUpperCase()];
          return qe(this._element, e, this._getPopperConfig(i));
        }
        _getOffset() {
          const { offset: e } = this._config;
          return "string" == typeof e
            ? e.split(",").map((e) => Number.parseInt(e, 10))
            : "function" == typeof e
              ? (t) => e(t, this._element)
              : e;
        }
        _resolvePossibleFunction(e) {
          return Qe(e, [this._element, this._element]);
        }
        _getPopperConfig(e) {
          const t = {
            placement: e,
            modifiers: [
              {
                name: "flip",
                options: {
                  fallbackPlacements: this._config.fallbackPlacements,
                },
              },
              { name: "offset", options: { offset: this._getOffset() } },
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              {
                name: "arrow",
                options: { element: `.${this.constructor.NAME}-arrow` },
              },
              {
                name: "preSetPlacement",
                enabled: !0,
                phase: "beforeMain",
                fn: (e) => {
                  this._getTipElement().setAttribute(
                    "data-popper-placement",
                    e.state.placement,
                  );
                },
              },
            ],
          };
          return { ...t, ...Qe(this._config.popperConfig, [void 0, t]) };
        }
        _setListeners() {
          const e = this._config.trigger.split(" ");
          for (const t of e)
            if ("click" === t)
              gt.on(
                this._element,
                this.constructor.eventName("click"),
                this._config.selector,
                (e) => {
                  const t = this._initializeOnDelegatedTarget(e);
                  ((t._activeTrigger[us] = !(
                    t._isShown() && t._activeTrigger[us]
                  )),
                    t.toggle());
                },
              );
            else if ("manual" !== t) {
              const e =
                  t === cs
                    ? this.constructor.eventName("mouseenter")
                    : this.constructor.eventName("focusin"),
                i =
                  t === cs
                    ? this.constructor.eventName("mouseleave")
                    : this.constructor.eventName("focusout");
              (gt.on(this._element, e, this._config.selector, (e) => {
                const t = this._initializeOnDelegatedTarget(e);
                ((t._activeTrigger["focusin" === e.type ? ds : cs] = !0),
                  t._enter());
              }),
                gt.on(this._element, i, this._config.selector, (e) => {
                  const t = this._initializeOnDelegatedTarget(e);
                  ((t._activeTrigger["focusout" === e.type ? ds : cs] =
                    t._element.contains(e.relatedTarget)),
                    t._leave());
                }));
            }
          ((this._hideModalHandler = () => {
            this._element && this.hide();
          }),
            gt.on(this._element.closest(as), ls, this._hideModalHandler));
        }
        _fixTitle() {
          const e = this._element.getAttribute("title");
          e &&
            (this._element.getAttribute("aria-label") ||
              this._element.textContent.trim() ||
              this._element.setAttribute("aria-label", e),
            this._element.setAttribute("data-bs-original-title", e),
            this._element.removeAttribute("title"));
        }
        _enter() {
          this._isShown() || this._isHovered
            ? (this._isHovered = !0)
            : ((this._isHovered = !0),
              this._setTimeout(() => {
                this._isHovered && this.show();
              }, this._config.delay.show));
        }
        _leave() {
          this._isWithActiveTrigger() ||
            ((this._isHovered = !1),
            this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(e, t) {
          (clearTimeout(this._timeout), (this._timeout = setTimeout(e, t)));
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(e) {
          const t = yt.getDataAttributes(this._element);
          for (const e of Object.keys(t)) ns.has(e) && delete t[e];
          return (
            (e = { ...t, ...("object" == typeof e && e ? e : {}) }),
            (e = this._mergeConfigObj(e)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
          );
        }
        _configAfterMerge(e) {
          return (
            (e.container =
              !1 === e.container ? document.body : He(e.container)),
            "number" == typeof e.delay &&
              (e.delay = { show: e.delay, hide: e.delay }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            e
          );
        }
        _getDelegateConfig() {
          const e = {};
          for (const [t, i] of Object.entries(this._config))
            this.constructor.Default[t] !== i && (e[t] = i);
          return ((e.selector = !1), (e.trigger = "manual"), e);
        }
        _disposePopper() {
          (this._popper && (this._popper.destroy(), (this._popper = null)),
            this.tip && (this.tip.remove(), (this.tip = null)));
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = ps.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      Ke(ps);
      const ms = ".popover-header",
        vs = ".popover-body",
        ys = {
          ...ps.Default,
          content: "",
          offset: [0, 8],
          placement: "right",
          template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          trigger: "click",
        },
        bs = { ...ps.DefaultType, content: "(null|string|element|function)" };
      class _s extends ps {
        static get Default() {
          return ys;
        }
        static get DefaultType() {
          return bs;
        }
        static get NAME() {
          return "popover";
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return { [ms]: this._getTitle(), [vs]: this._getContent() };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = _s.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      Ke(_s);
      const ws = ".bs.scrollspy",
        Ss = `activate${ws}`,
        xs = `click${ws}`,
        Es = `load${ws}.data-api`,
        As = "active",
        Ts = "[href]",
        Cs = ".nav-link",
        ks = `${Cs}, .nav-item > ${Cs}, .list-group-item`,
        Ls = {
          offset: null,
          rootMargin: "0px 0px -25%",
          smoothScroll: !1,
          target: null,
          threshold: [0.1, 0.5, 1],
        },
        Os = {
          offset: "(number|null)",
          rootMargin: "string",
          smoothScroll: "boolean",
          target: "element",
          threshold: "array",
        };
      class qs extends _t {
        constructor(e, t) {
          (super(e, t),
            (this._targetLinks = new Map()),
            (this._observableSections = new Map()),
            (this._rootElement =
              "visible" === getComputedStyle(this._element).overflowY
                ? null
                : this._element),
            (this._activeTarget = null),
            (this._observer = null),
            (this._previousScrollData = {
              visibleEntryTop: 0,
              parentScrollTop: 0,
            }),
            this.refresh());
        }
        static get Default() {
          return Ls;
        }
        static get DefaultType() {
          return Os;
        }
        static get NAME() {
          return "scrollspy";
        }
        refresh() {
          (this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer
              ? this._observer.disconnect()
              : (this._observer = this._getNewObserver()));
          for (const e of this._observableSections.values())
            this._observer.observe(e);
        }
        dispose() {
          (this._observer.disconnect(), super.dispose());
        }
        _configAfterMerge(e) {
          return (
            (e.target = He(e.target) || document.body),
            (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
            "string" == typeof e.threshold &&
              (e.threshold = e.threshold
                .split(",")
                .map((e) => Number.parseFloat(e))),
            e
          );
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll &&
            (gt.off(this._config.target, xs),
            gt.on(this._config.target, xs, Ts, (e) => {
              const t = this._observableSections.get(e.target.hash);
              if (t) {
                e.preventDefault();
                const i = this._rootElement || window,
                  n = t.offsetTop - this._element.offsetTop;
                if (i.scrollTo)
                  return void i.scrollTo({ top: n, behavior: "smooth" });
                i.scrollTop = n;
              }
            }));
        }
        _getNewObserver() {
          const e = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin,
          };
          return new IntersectionObserver((e) => this._observerCallback(e), e);
        }
        _observerCallback(e) {
          const t = (e) => this._targetLinks.get(`#${e.target.id}`),
            i = (e) => {
              ((this._previousScrollData.visibleEntryTop = e.target.offsetTop),
                this._process(t(e)));
            },
            n = (this._rootElement || document.documentElement).scrollTop,
            s = n >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = n;
          for (const o of e) {
            if (!o.isIntersecting) {
              ((this._activeTarget = null), this._clearActiveClass(t(o)));
              continue;
            }
            const e =
              o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (s && e) {
              if ((i(o), !n)) return;
            } else s || e || i(o);
          }
        }
        _initializeTargetsAndObservables() {
          ((this._targetLinks = new Map()),
            (this._observableSections = new Map()));
          const e = St.find(Ts, this._config.target);
          for (const t of e) {
            if (!t.hash || Be(t)) continue;
            const e = St.findOne(decodeURI(t.hash), this._element);
            We(e) &&
              (this._targetLinks.set(decodeURI(t.hash), t),
              this._observableSections.set(t.hash, e));
          }
        }
        _process(e) {
          this._activeTarget !== e &&
            (this._clearActiveClass(this._config.target),
            (this._activeTarget = e),
            e.classList.add(As),
            this._activateParents(e),
            gt.trigger(this._element, Ss, { relatedTarget: e }));
        }
        _activateParents(e) {
          if (e.classList.contains("dropdown-item"))
            St.findOne(
              ".dropdown-toggle",
              e.closest(".dropdown"),
            ).classList.add(As);
          else
            for (const t of St.parents(e, ".nav, .list-group"))
              for (const e of St.prev(t, ks)) e.classList.add(As);
        }
        _clearActiveClass(e) {
          e.classList.remove(As);
          const t = St.find(`${Ts}.${As}`, e);
          for (const e of t) e.classList.remove(As);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = qs.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      (gt.on(window, Es, () => {
        for (const e of St.find('[data-bs-spy="scroll"]'))
          qs.getOrCreateInstance(e);
      }),
        Ke(qs));
      const Is = ".bs.tab",
        Ds = `hide${Is}`,
        Ps = `hidden${Is}`,
        Ns = `show${Is}`,
        Ms = `shown${Is}`,
        $s = `click${Is}`,
        js = `keydown${Is}`,
        zs = `load${Is}`,
        Hs = "ArrowLeft",
        Ws = "ArrowRight",
        Bs = "ArrowUp",
        Ys = "ArrowDown",
        Xs = "Home",
        Fs = "End",
        Rs = "active",
        Vs = "fade",
        Us = "show",
        Ks = ".dropdown-toggle",
        Qs = `:not(${Ks})`,
        Gs =
          '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Zs = `.nav-link${Qs}, .list-group-item${Qs}, [role="tab"]${Qs}, ${Gs}`,
        Js = `.${Rs}[data-bs-toggle="tab"], .${Rs}[data-bs-toggle="pill"], .${Rs}[data-bs-toggle="list"]`;
      class eo extends _t {
        constructor(e) {
          (super(e),
            (this._parent = this._element.closest(
              '.list-group, .nav, [role="tablist"]',
            )),
            this._parent &&
              (this._setInitialAttributes(this._parent, this._getChildren()),
              gt.on(this._element, js, (e) => this._keydown(e))));
        }
        static get NAME() {
          return "tab";
        }
        show() {
          const e = this._element;
          if (this._elemIsActive(e)) return;
          const t = this._getActiveElem(),
            i = t ? gt.trigger(t, Ds, { relatedTarget: e }) : null;
          gt.trigger(e, Ns, { relatedTarget: t }).defaultPrevented ||
            (i && i.defaultPrevented) ||
            (this._deactivate(t, e), this._activate(e, t));
        }
        _activate(e, t) {
          e &&
            (e.classList.add(Rs),
            this._activate(St.getElementFromSelector(e)),
            this._queueCallback(
              () => {
                "tab" === e.getAttribute("role")
                  ? (e.removeAttribute("tabindex"),
                    e.setAttribute("aria-selected", !0),
                    this._toggleDropDown(e, !0),
                    gt.trigger(e, Ms, { relatedTarget: t }))
                  : e.classList.add(Us);
              },
              e,
              e.classList.contains(Vs),
            ));
        }
        _deactivate(e, t) {
          e &&
            (e.classList.remove(Rs),
            e.blur(),
            this._deactivate(St.getElementFromSelector(e)),
            this._queueCallback(
              () => {
                "tab" === e.getAttribute("role")
                  ? (e.setAttribute("aria-selected", !1),
                    e.setAttribute("tabindex", "-1"),
                    this._toggleDropDown(e, !1),
                    gt.trigger(e, Ps, { relatedTarget: t }))
                  : e.classList.remove(Us);
              },
              e,
              e.classList.contains(Vs),
            ));
        }
        _keydown(e) {
          if (![Hs, Ws, Bs, Ys, Xs, Fs].includes(e.key)) return;
          (e.stopPropagation(), e.preventDefault());
          const t = this._getChildren().filter((e) => !Be(e));
          let i;
          if ([Xs, Fs].includes(e.key)) i = t[e.key === Xs ? 0 : t.length - 1];
          else {
            const n = [Ws, Ys].includes(e.key);
            i = Ze(t, e.target, n, !0);
          }
          i &&
            (i.focus({ preventScroll: !0 }), eo.getOrCreateInstance(i).show());
        }
        _getChildren() {
          return St.find(Zs, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((e) => this._elemIsActive(e)) || null;
        }
        _setInitialAttributes(e, t) {
          this._setAttributeIfNotExists(e, "role", "tablist");
          for (const e of t) this._setInitialAttributesOnChild(e);
        }
        _setInitialAttributesOnChild(e) {
          e = this._getInnerElement(e);
          const t = this._elemIsActive(e),
            i = this._getOuterElement(e);
          (e.setAttribute("aria-selected", t),
            i !== e && this._setAttributeIfNotExists(i, "role", "presentation"),
            t || e.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(e, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(e));
        }
        _setInitialAttributesOnTargetPanel(e) {
          const t = St.getElementFromSelector(e);
          t &&
            (this._setAttributeIfNotExists(t, "role", "tabpanel"),
            e.id &&
              this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
        }
        _toggleDropDown(e, t) {
          const i = this._getOuterElement(e);
          if (!i.classList.contains("dropdown")) return;
          const n = (e, n) => {
            const s = St.findOne(e, i);
            s && s.classList.toggle(n, t);
          };
          (n(Ks, Rs),
            n(".dropdown-menu", Us),
            i.setAttribute("aria-expanded", t));
        }
        _setAttributeIfNotExists(e, t, i) {
          e.hasAttribute(t) || e.setAttribute(t, i);
        }
        _elemIsActive(e) {
          return e.classList.contains(Rs);
        }
        _getInnerElement(e) {
          return e.matches(Zs) ? e : St.findOne(Zs, e);
        }
        _getOuterElement(e) {
          return e.closest(".nav-item, .list-group-item") || e;
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = eo.getOrCreateInstance(this);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      (gt.on(document, $s, Gs, function (e) {
        (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          Be(this) || eo.getOrCreateInstance(this).show());
      }),
        gt.on(window, zs, () => {
          for (const e of St.find(Js)) eo.getOrCreateInstance(e);
        }),
        Ke(eo));
      const to = ".bs.toast",
        io = `mouseover${to}`,
        no = `mouseout${to}`,
        so = `focusin${to}`,
        oo = `focusout${to}`,
        ro = `hide${to}`,
        ao = `hidden${to}`,
        lo = `show${to}`,
        co = `shown${to}`,
        uo = "hide",
        ho = "show",
        fo = "showing",
        go = { animation: "boolean", autohide: "boolean", delay: "number" },
        po = { animation: !0, autohide: !0, delay: 5e3 };
      class mo extends _t {
        constructor(e, t) {
          (super(e, t),
            (this._timeout = null),
            (this._hasMouseInteraction = !1),
            (this._hasKeyboardInteraction = !1),
            this._setListeners());
        }
        static get Default() {
          return po;
        }
        static get DefaultType() {
          return go;
        }
        static get NAME() {
          return "toast";
        }
        show() {
          gt.trigger(this._element, lo).defaultPrevented ||
            (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(uo),
            Fe(this._element),
            this._element.classList.add(ho, fo),
            this._queueCallback(
              () => {
                (this._element.classList.remove(fo),
                  gt.trigger(this._element, co),
                  this._maybeScheduleHide());
              },
              this._element,
              this._config.animation,
            ));
        }
        hide() {
          this.isShown() &&
            (gt.trigger(this._element, ro).defaultPrevented ||
              (this._element.classList.add(fo),
              this._queueCallback(
                () => {
                  (this._element.classList.add(uo),
                    this._element.classList.remove(fo, ho),
                    gt.trigger(this._element, ao));
                },
                this._element,
                this._config.animation,
              )));
        }
        dispose() {
          (this._clearTimeout(),
            this.isShown() && this._element.classList.remove(ho),
            super.dispose());
        }
        isShown() {
          return this._element.classList.contains(ho);
        }
        _maybeScheduleHide() {
          this._config.autohide &&
            (this._hasMouseInteraction ||
              this._hasKeyboardInteraction ||
              (this._timeout = setTimeout(() => {
                this.hide();
              }, this._config.delay)));
        }
        _onInteraction(e, t) {
          switch (e.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = t;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = t;
          }
          if (t) return void this._clearTimeout();
          const i = e.relatedTarget;
          this._element === i ||
            this._element.contains(i) ||
            this._maybeScheduleHide();
        }
        _setListeners() {
          (gt.on(this._element, io, (e) => this._onInteraction(e, !0)),
            gt.on(this._element, no, (e) => this._onInteraction(e, !1)),
            gt.on(this._element, so, (e) => this._onInteraction(e, !0)),
            gt.on(this._element, oo, (e) => this._onInteraction(e, !1)));
        }
        _clearTimeout() {
          (clearTimeout(this._timeout), (this._timeout = null));
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = mo.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      (xt(mo), Ke(mo), i(507), i(421));
      var vo = i(816),
        yo = i.n(vo);
      (document.addEventListener("DOMContentLoaded", function (e) {
        yo()({ touchNavigation: !0, loop: !0, selector: ".lightbox" });
      }),
        i(255),
        (window.bootstrap = t));
      var bo = !1;
      let _o;
      function wo() {
        var e = window.pageYOffset;
        document.querySelectorAll(".animationReady").forEach(function (t) {
          var i = t.getBoundingClientRect().top + e;
          if (e + window.innerHeight >= i) {
            (t.classList.remove("animationReady"),
              t.classList.add("animate__animated"));
            for (var n = 0; n < t.classList.length; n++)
              if (t.classList[n].indexOf("--") > 0) {
                let e = t.classList[n];
                ((e = e.replace("--", "__")),
                  t.classList.remove(t.classList[n]),
                  t.classList.add(e));
              }
          }
        });
      }
      function So() {
        if (window.location.hash && "/" != window.location.hash.charAt(1))
          try {
            let e = null;
            ((e = document.querySelector(window.location.hash)),
              !e &&
                window.location.hash.match(/.+[\d]{4,9}$/gi) &&
                (e = document.querySelector(
                  '[id$="' + window.location.hash.replace(/[^\d]/gi, "") + '"]',
                )),
              e &&
                e.classList.contains("accordion-collapse") &&
                (e.classList.contains("show")
                  ? setTimeout(() => {
                      var t = 0;
                      document.querySelector("#header-breadcrumb-wrapper") &&
                        (t += document.querySelector(
                          "#header-breadcrumb-wrapper",
                        ).offsetHeight);
                      var i =
                        e.parentElement.getBoundingClientRect().top +
                        document.documentElement.scrollTop -
                        t;
                      (window.scrollTo({ top: i, behavior: "smooth" }),
                        document.querySelector("body").classList.add("down"));
                    }, 600)
                  : window.bootstrap.Collapse.getOrCreateInstance(e).show()));
          } catch (e) {
            console.log(e);
          }
      }
      function xo() {
        if (document.querySelector(".stickyitem.first")) {
          bo = !1;
          const e = document.querySelector(".stickyitem.first"),
            t =
              parseInt(
                getComputedStyle(
                  document.querySelector(".stickyitem.first"),
                ).top.replace("px", ""),
              ) + 25;
          ((_o = new IntersectionObserver(
            ([e]) =>
              (function (e) {
                bo
                  ? e.target.classList.remove("notpinned")
                  : e.intersectionRatio < 0.9
                    ? e.target.classList.add("notpinned")
                    : e.intersectionRatio > 0.9 && (bo = !0);
              })(e),
            { threshold: [0.9], rootMargin: "-" + t + "px 0px 0px 0px" },
          )),
            _o.observe(e));
        }
      }
      var Eo;
      document.addEventListener("DOMContentLoaded", function (e) {
        var t, i;
        (document.querySelectorAll(".animate").forEach(function (e) {
          e.classList.add("animationReady");
        }),
          wo(),
          (function () {
            const e = document.querySelectorAll("a.oembed");
            window.UniGrazOembed &&
              e.forEach((e) => {
                window.UniGrazOembed(
                  [e],
                  "https://oembed.uni-graz.at/oembed/",
                  function (e) {
                    if (null !== e.provider_name) {
                      switch (e.provider_name.toLowerCase()) {
                        case "vimeo":
                        case "unitube":
                        case "youtube":
                          e.html =
                            '<div class="ratio ratio-16x9">' +
                            e.html +
                            "</div>";
                      }
                      return e;
                    }
                    return "";
                  },
                );
              });
          })(),
          So(),
          (async function () {
            document.querySelectorAll('[loading="lazy"]').forEach((e) => {
              e.removeAttribute("loading");
            });
          })(),
          document.querySelectorAll(".sr-only").forEach((e) => {
            e.tabIndex = -1;
          }),
          document.querySelectorAll(".skip").forEach((e) => {
            e.tabIndex = -1;
          }),
          document.querySelectorAll(".sr-only-focusable").forEach((e) => {
            e.tabIndex = -1;
          }),
          document.querySelectorAll(".unilogo a object").forEach((e) => {
            e.tabIndex = -1;
          }),
          document.querySelectorAll(".mat-focus-indicator").forEach((e) => {
            e.tabIndex = -1;
          }),
          document.querySelectorAll("#mat-input-0").forEach((e) => {
            e.tabIndex = -1;
          }),
          document.querySelector("#breadcrumb") &&
            document.querySelector("body").classList.add("breaded"),
          xo(),
          document
            .querySelectorAll(".news-single .contentelement")
            .forEach(function (e) {
              (e.classList.contains("ug_2022_textmedia") ||
                e.classList.contains("ug_2022_image")) &&
                e.parentElement.classList.add("uncoled");
            }),
          document.querySelectorAll(".newsalert").length > 1 &&
            document.querySelectorAll(".newsalert").forEach(function (e, t) {
              t >= 1 && e.remove();
            }),
          document.querySelectorAll(".newspage .bt_newsdet article").length &&
            document.querySelectorAll(".newsalert").forEach(function (e) {
              e.remove();
            }),
          document.querySelectorAll(".newspage .hyperlinkbox_linkitem")
            .length &&
            document.querySelectorAll(".newsalert").forEach(function (e) {
              e.remove();
            }),
          document.querySelectorAll(".newsalert").length > 1 &&
            document.querySelectorAll(".newsalert").forEach(function (e, t) {
              t >= 1 && e.remove();
            }),
          document.querySelectorAll(".eventscontent .eventitem").length &&
            document.querySelectorAll(".newsalert").forEach(function (e) {
              e.remove();
            }),
          (t = window.location.search),
          (i = !!document.querySelector(".eventscontent.eventcontentdetails")),
          t.includes("month") &&
            !i &&
            document.querySelector(
              ".eventitemlistbox .col-md-12 a:first-of-type",
            ) &&
            document
              .querySelector(".eventitemlistbox .col-md-12 a:first-of-type")
              .focus(),
          window.addEventListener("hashchange", (e) => {
            setTimeout(So, 450);
          }),
          document.querySelectorAll("a").forEach((e) => {
            if (e.href)
              try {
                let t = new URL(e.href);
                t.pathname == window.location.pathname &&
                  t.hash.length > 1 &&
                  e.addEventListener("click", () => {
                    So();
                  });
              } catch (e) {
                console.log(e);
              }
          }),
          document.addEventListener("scroll", function () {
            wo();
          }),
          window.addEventListener("resize", function (e) {
            if ((wo(), document.querySelector(".stickyitem.first"))) {
              const e = document.querySelector(".stickyitem.first");
              (_o.unobserve(e), _o.disconnect());
            }
            (clearTimeout(Eo), (Eo = setTimeout(xo, 200)));
          }));
      });
    })());
})();
