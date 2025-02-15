!(function (e, n, t) {
    function r(e, n) {
      return typeof e === n;
    }
  
    function o() {
      var e, n, t, o, a, s, i;
      for (var c in x)
        if (x.hasOwnProperty(c)) {
          if (
            ((e = []),
            (n = x[c]),
            n.name &&
              (e.push(n.name.toLowerCase()),
              n.options && n.options.aliases && n.options.aliases.length))
          )
            for (t = 0; t < n.options.aliases.length; t++)
              e.push(n.options.aliases[t].toLowerCase());
          for (o = r(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)
            (s = e[a]),
              (i = s.split(".")),
              1 === i.length
                ? (Modernizr[i[0]] = o)
                : (!Modernizr[i[0]] ||
                    Modernizr[i[0]] instanceof Boolean ||
                    (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])),
                  (Modernizr[i[0]][i[1]] = o)),
              h.push((o ? "" : "no-") + i.join("-"));
        }
    }
  
    function a(e) {
      var n = w.className,
        t = Modernizr._config.classPrefix || "";
      if ((b && (n = n.baseVal), Modernizr._config.enableJSClass)) {
        var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
        n = n.replace(r, "$1" + t + "js$2");
      }
      Modernizr._config.enableClasses &&
        ((n += " " + t + e.join(" " + t)),
        b ? (w.className.baseVal = n) : (w.className = n));
    }
  
    function s() {
      return "function" != typeof n.createElement
        ? n.createElement(arguments[0])
        : b
        ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
        : n.createElement.apply(n, arguments);
    }
  
    function i(e) {
      return e
        .replace(/([a-z])-([a-z])/g, function (e, n, t) {
          return n + t.toUpperCase();
        })
        .replace(/^-/, "");
    }
  
    function c() {
      var e = n.body;
      return e || ((e = s(b ? "svg" : "body")), (e.fake = !0)), e;
    }
  
    function l(e, t, r, o) {
      var a,
        i,
        l,
        d,
        f = "modernizr",
        u = s("div"),
        p = c();
      if (parseInt(r, 10))
        for (; r--; )
          (l = s("div")), (l.id = o ? o[r] : f + (r + 1)), u.appendChild(l);
      return (
        (a = s("style")),
        (a.type = "text/css"),
        (a.id = "s" + f),
        (p.fake ? p : u).appendChild(a),
        p.appendChild(u),
        a.styleSheet
          ? (a.styleSheet.cssText = e)
          : a.appendChild(n.createTextNode(e)),
        (u.id = f),
        p.fake &&
          ((p.style.background = ""),
          (p.style.overflow = "hidden"),
          (d = w.style.overflow),
          (w.style.overflow = "hidden"),
          w.appendChild(p)),
        (i = t(u, e)),
        p.fake
          ? (p.parentNode.removeChild(p), (w.style.overflow = d), w.offsetHeight)
          : u.parentNode.removeChild(u),
        !!i
      );
    }
  
    function d(e, n) {
      return !!~("" + e).indexOf(n);
    }
  
    function f(e, n) {
      return function () {
        return e.apply(n, arguments);
      };
    }
  
    function u(e, n, t) {
      var o;
      for (var a in e)
        if (e[a] in n)
          return t === !1
            ? e[a]
            : ((o = n[e[a]]), r(o, "function") ? f(o, t || n) : o);
      return !1;
    }
  
    function p(e) {
      return e
        .replace(/([A-Z])/g, function (e, n) {
          return "-" + n.toLowerCase();
        })
        .replace(/^ms-/, "-ms-");
    }
  
    function m(n, r) {
      var o = n.length;
      if ("CSS" in e && "supports" in e.CSS) {
        for (; o--; ) if (e.CSS.supports(p(n[o]), r)) return !0;
        return !1;
      }
      if ("CSSSupportsRule" in e) {
        for (var a = []; o--; ) a.push("(" + p(n[o]) + ":" + r + ")");
        return (
          (a = a.join(" or ")),
          l(
            "@supports (" + a + ") { #modernizr { position: absolute; } }",
            function (e) {
              return "absolute" == getComputedStyle(e, null).position;
            }
          )
        );
      }
      return t;
    }
  
    function v(e, n, o, a) {
      function c() {
        f && (delete j.style, delete j.modElem);
      }
      if (((a = r(a, "undefined") ? !1 : a), !r(o, "undefined"))) {
        var l = m(e, o);
        if (!r(l, "undefined")) return l;
      }
      for (
        var f, u, p, v, g, y = ["modernizr", "tspan", "samp"];
        !j.style && y.length;
  
      )
        (f = !0), (j.modElem = s(y.shift())), (j.style = j.modElem.style);
      for (p = e.length, u = 0; p > u; u++)
        if (
          ((v = e[u]),
          (g = j.style[v]),
          d(v, "-") && (v = i(v)),
          j.style[v] !== t)
        ) {
          if (a || r(o, "undefined")) return c(), "pfx" == n ? v : !0;
          try {
            j.style[v] = o;
          } catch (h) {}
          if (j.style[v] != g) return c(), "pfx" == n ? v : !0;
        }
      return c(), !1;
    }
  
    function g(e, n, t, o, a) {
      var s = e.charAt(0).toUpperCase() + e.slice(1),
        i = (e + " " + z.join(s + " ") + s).split(" ");
      return r(n, "string") || r(n, "undefined")
        ? v(i, n, o, a)
        : ((i = (e + " " + $.join(s + " ") + s).split(" ")), u(i, n, t));
    }
  
    function y(e, n, r) {
      return g(e, t, t, n, r);
    }
    var h = [],
      x = [],
      T = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0,
        },
        _q: [],
        on: function (e, n) {
          var t = this;
          setTimeout(function () {
            n(t[e]);
          }, 0);
        },
        addTest: function (e, n, t) {
          x.push({
            name: e,
            fn: n,
            options: t,
          });
        },
        addAsyncTest: function (e) {
          x.push({
            name: null,
            fn: e,
          });
        },
      },
      Modernizr = function () {};
    (Modernizr.prototype = T),
      (Modernizr = new Modernizr()),
      Modernizr.addTest(
        "svg",
        !!n.createElementNS &&
          !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
      );
    var w = n.documentElement,
      b = "svg" === w.nodeName.toLowerCase();
    Modernizr.addTest("audio", function () {
      var e = s("audio"),
        n = !1;
      try {
        (n = !!e.canPlayType) &&
          ((n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, "")),
          (n.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, "")),
          (n.opus =
            e.canPlayType('audio/ogg; codecs="opus"') ||
            e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")),
          (n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
          (n.m4a = (
            e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")
          ).replace(/^no$/, "")));
      } catch (t) {}
      return n;
    }),
      Modernizr.addTest("canvas", function () {
        var e = s("canvas");
        return !(!e.getContext || !e.getContext("2d"));
      }),
      Modernizr.addTest("cssremunit", function () {
        var e = s("a").style;
        try {
          e.fontSize = "3rem";
        } catch (n) {}
        return /rem/.test(e.fontSize);
      });
    var C = T._config.usePrefixes
      ? " -webkit- -moz- -o- -ms- ".split(" ")
      : ["", ""];
    (T._prefixes = C),
      Modernizr.addTest("csscalc", function () {
        var e = "width:",
          n = "calc(10px);",
          t = s("a");
        return (t.style.cssText = e + C.join(n + e)), !!t.style.length;
      }),
      Modernizr.addTest("cssgradients", function () {
        for (
          var e,
            n = "background-image:",
            t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            r = "",
            o = 0,
            a = C.length - 1;
          a > o;
          o++
        )
          (e = 0 === o ? "to " : ""),
            (r += n + C[o] + "linear-gradient(" + e + "left top, #9f9, white);");
        Modernizr._config.usePrefixes && (r += n + "-webkit-" + t);
        var i = s("a"),
          c = i.style;
        return (c.cssText = r), ("" + c.backgroundImage).indexOf("gradient") > -1;
      });
    var S = "CSS" in e && "supports" in e.CSS,
      P = "supportsCSS" in e;
    Modernizr.addTest("supports", S || P);
    var _ = (T.testStyles = l);
    Modernizr.addTest("touchevents", function () {
      var t;
      if ("ontouchstart" in e || (e.DocumentTouch && n instanceof DocumentTouch))
        t = !0;
      else {
        var r = [
          "@media (",
          C.join("touch-enabled),("),
          "heartz",
          ")",
          "{#modernizr{top:9px;position:absolute}}",
        ].join("");
        _(r, function (e) {
          t = 9 === e.offsetTop;
        });
      }
      return t;
    });
    var E = "Moz O ms Webkit",
      z = T._config.usePrefixes ? E.split(" ") : [];
    T._cssomPrefixes = z;
    var k = function (n) {
      var r,
        o = C.length,
        a = e.CSSRule;
      if ("undefined" == typeof a) return t;
      if (!n) return !1;
      if (
        ((n = n.replace(/^@/, "")),
        (r = n.replace(/-/g, "_").toUpperCase() + "_RULE"),
        r in a)
      )
        return "@" + n;
      for (var s = 0; o > s; s++) {
        var i = C[s],
          c = i.toUpperCase() + "_" + r;
        if (c in a) return "@-" + i.toLowerCase() + "-" + n;
      }
      return !1;
    };
    T.atRule = k;
    var $ = T._config.usePrefixes ? E.toLowerCase().split(" ") : [];
    T._domPrefixes = $;
    var N = {
      elem: s("modernizr"),
    };
    Modernizr._q.push(function () {
      delete N.elem;
    });
    var j = {
      style: N.elem.style,
    };
    Modernizr._q.unshift(function () {
      delete j.style;
    }),
      Modernizr.addTest("video", function () {
        var e = s("video"),
          n = !1;
        try {
          (n = !!e.canPlayType) &&
            ((n = new Boolean(n)),
            (n.ogg = e
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, "")),
            (n.h264 = e
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, "")),
            (n.webm = e
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, "")),
            (n.vp9 = e
              .canPlayType('video/webm; codecs="vp9"')
              .replace(/^no$/, "")),
            (n.hls = e
              .canPlayType('application/x-mpegURL; codecs="avc1.42E01E"')
              .replace(/^no$/, "")));
        } catch (t) {}
        return n;
      }),
      (T.testAllProps = g),
      (T.testAllProps = y),
      Modernizr.addTest("cssanimations", y("animationName", "a", !0)),
      Modernizr.addTest("cssfilters", function () {
        if (Modernizr.supports) return y("filter", "blur(2px)");
        var e = s("a");
        return (
          (e.style.cssText = C.join("filter:blur(2px); ")),
          !!e.style.length && (n.documentMode === t || n.documentMode > 9)
        );
      }),
      Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)),
      Modernizr.addTest("flexboxlegacy", y("boxDirection", "reverse", !0)),
      Modernizr.addTest("flexboxtweener", y("flexAlign", "end", !0)),
      Modernizr.addTest("flexwrap", y("flexWrap", "wrap", !0)),
      Modernizr.addTest("csstransforms", function () {
        return (
          -1 === navigator.userAgent.indexOf("Android 2.") &&
          y("transform", "scale(1)", !0)
        );
      }),
      Modernizr.addTest("csstransforms3d", function () {
        var e = !!y("perspective", "1px", !0),
          n = Modernizr._config.usePrefixes;
        if (e && (!n || "webkitPerspective" in w.style)) {
          var t,
            r = "#modernizr{width:0;height:0}";
          Modernizr.supports
            ? (t = "@supports (perspective: 1px)")
            : ((t = "@media (transform-3d)"),
              n && (t += ",(-webkit-transform-3d)")),
            (t +=
              "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),
            _(r + t, function (n) {
              e = 7 === n.offsetWidth && 18 === n.offsetHeight;
            });
        }
        return e;
      }),
      Modernizr.addTest("csstransitions", y("transition", "all", !0));
    var A = (T.prefixed = function (e, n, t) {
      return 0 === e.indexOf("@")
        ? k(e)
        : (-1 != e.indexOf("-") && (e = i(e)), n ? g(e, n, t) : g(e, "pfx"));
    });
    Modernizr.addTest("backgroundblendmode", A("backgroundBlendMode", "text")),
      o(),
      a(h),
      delete T.addTest,
      delete T.addAsyncTest;
    for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]();
    e.Modernizr = Modernizr;
  })(window, document);
  (function () {
    var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X = [].slice,
      Y = {}.hasOwnProperty,
      Z = function (a, b) {
        function c() {
          this.constructor = a;
        }
        for (var d in b) Y.call(b, d) && (a[d] = b[d]);
        return (
          (c.prototype = b.prototype),
          (a.prototype = new c()),
          (a.__super__ = b.prototype),
          a
        );
      },
      $ =
        [].indexOf ||
        function (a) {
          for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a) return b;
          return -1;
        };
    for (
      u = {
        catchupTime: 100,
        initialRate: 0.03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {
          checkInterval: 100,
          selectors: ["body"],
        },
        eventLag: {
          minSamples: 10,
          sampleCount: 3,
          lagThreshold: 3,
        },
        ajax: {
          trackMethods: ["GET"],
          trackWebSockets: !0,
          ignoreURLs: [],
        },
      },
        C = function () {
          var a;
          return null !=
            (a =
              "undefined" != typeof performance &&
              null !== performance &&
              "function" == typeof performance.now
                ? performance.now()
                : void 0)
            ? a
            : +new Date();
        },
        E =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame,
        t = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
        null == E &&
          ((E = function (a) {
            return setTimeout(a, 50);
          }),
          (t = function (a) {
            return clearTimeout(a);
          })),
        G = function (a) {
          var b, c;
          return (
            (b = C()),
            (c = function () {
              var d;
              return (
                (d = C() - b),
                d >= 33
                  ? ((b = C()),
                    a(d, function () {
                      return E(c);
                    }))
                  : setTimeout(c, 33 - d)
              );
            })()
          );
        },
        F = function () {
          var a, b, c;
          return (
            (c = arguments[0]),
            (b = arguments[1]),
            (a = 3 <= arguments.length ? X.call(arguments, 2) : []),
            "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
          );
        },
        v = function () {
          var a, b, c, d, e, f, g;
          for (
            b = arguments[0],
              d = 2 <= arguments.length ? X.call(arguments, 1) : [],
              f = 0,
              g = d.length;
            g > f;
            f++
          )
            if ((c = d[f]))
              for (a in c)
                Y.call(c, a) &&
                  ((e = c[a]),
                  null != b[a] &&
                  "object" == typeof b[a] &&
                  null != e &&
                  "object" == typeof e
                    ? v(b[a], e)
                    : (b[a] = e));
          return b;
        },
        q = function (a) {
          var b, c, d, e, f;
          for (c = b = 0, e = 0, f = a.length; f > e; e++)
            (d = a[e]), (c += Math.abs(d)), b++;
          return c / b;
        },
        x = function (a, b) {
          var c, d, e;
          if (
            (null == a && (a = "options"),
            null == b && (b = !0),
            (e = document.querySelector("[data-pace-" + a + "]")))
          ) {
            if (((c = e.getAttribute("data-pace-" + a)), !b)) return c;
            try {
              return JSON.parse(c);
            } catch (f) {
              return (
                (d = f),
                "undefined" != typeof console && null !== console
                  ? console.error("Error parsing inline pace options", d)
                  : void 0
              );
            }
          }
        },
        g = (function () {
          function a() {}
          return (
            (a.prototype.on = function (a, b, c, d) {
              var e;
              return (
                null == d && (d = !1),
                null == this.bindings && (this.bindings = {}),
                null == (e = this.bindings)[a] && (e[a] = []),
                this.bindings[a].push({
                  handler: b,
                  ctx: c,
                  once: d,
                })
              );
            }),
            (a.prototype.once = function (a, b, c) {
              return this.on(a, b, c, !0);
            }),
            (a.prototype.off = function (a, b) {
              var c, d, e;
              if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                if (null == b) return delete this.bindings[a];
                for (c = 0, e = []; c < this.bindings[a].length; )
                  e.push(
                    this.bindings[a][c].handler === b
                      ? this.bindings[a].splice(c, 1)
                      : c++
                  );
                return e;
              }
            }),
            (a.prototype.trigger = function () {
              var a, b, c, d, e, f, g, h, i;
              if (
                ((c = arguments[0]),
                (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
                null != (g = this.bindings) ? g[c] : void 0)
              ) {
                for (e = 0, i = []; e < this.bindings[c].length; )
                  (h = this.bindings[c][e]),
                    (d = h.handler),
                    (b = h.ctx),
                    (f = h.once),
                    d.apply(null != b ? b : this, a),
                    i.push(f ? this.bindings[c].splice(e, 1) : e++);
                return i;
              }
            }),
            a
          );
        })(),
        j = window.Pace || {},
        window.Pace = j,
        v(j, g.prototype),
        D = j.options = v({}, u, window.paceOptions, x()),
        U = ["ajax", "document", "eventLag", "elements"],
        Q = 0,
        S = U.length;
      S > Q;
      Q++
    )
      (K = U[Q]), D[K] === !0 && (D[K] = u[K]);
    (i = (function (a) {
      function b() {
        return (V = b.__super__.constructor.apply(this, arguments));
      }
      return Z(b, a), b;
    })(Error)),
      (b = (function () {
        function a() {
          this.progress = 0;
        }
        return (
          (a.prototype.getElement = function () {
            var a;
            if (null == this.el) {
              if (((a = document.querySelector(D.target)), !a)) throw new i();
              (this.el = document.createElement("div")),
                (this.el.className = "pace pace-active"),
                (document.body.className = document.body.className.replace(
                  /pace-done/g,
                  ""
                )),
                (document.body.className += " pace-running"),
                (this.el.innerHTML =
                  '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>'),
                null != a.firstChild
                  ? a.insertBefore(this.el, a.firstChild)
                  : a.appendChild(this.el);
            }
            return this.el;
          }),
          (a.prototype.finish = function () {
            var a;
            return (
              (a = this.getElement()),
              (a.className = a.className.replace("pace-active", "")),
              (a.className += " pace-inactive"),
              (document.body.className = document.body.className.replace(
                "pace-running",
                ""
              )),
              (document.body.className += " pace-done")
            );
          }),
          (a.prototype.update = function (a) {
            return (this.progress = a), this.render();
          }),
          (a.prototype.destroy = function () {
            try {
              this.getElement().parentNode.removeChild(this.getElement());
            } catch (a) {
              i = a;
            }
            return (this.el = void 0);
          }),
          (a.prototype.render = function () {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target)) return !1;
            for (
              a = this.getElement(),
                d = "translate3d(" + this.progress + "%, 0, 0)",
                g = ["webkitTransform", "msTransform", "transform"],
                e = 0,
                f = g.length;
              f > e;
              e++
            )
              (b = g[e]), (a.children[0].style[b] = d);
            return (
              (!this.lastRenderedProgress ||
                this.lastRenderedProgress | (0 !== this.progress) | 0) &&
                (a.children[0].setAttribute(
                  "data-progress-text",
                  "" + (0 | this.progress) + "%"
                ),
                this.progress >= 100
                  ? (c = "99")
                  : ((c = this.progress < 10 ? "0" : ""),
                    (c += 0 | this.progress)),
                a.children[0].setAttribute("data-progress", "" + c)),
              (this.lastRenderedProgress = this.progress)
            );
          }),
          (a.prototype.done = function () {
            return this.progress >= 100;
          }),
          a
        );
      })()),
      (h = (function () {
        function a() {
          this.bindings = {};
        }
        return (
          (a.prototype.trigger = function (a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
              for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++)
                (c = f[d]), g.push(c.call(this, b));
              return g;
            }
          }),
          (a.prototype.on = function (a, b) {
            var c;
            return (
              null == (c = this.bindings)[a] && (c[a] = []),
              this.bindings[a].push(b)
            );
          }),
          a
        );
      })()),
      (P = window.XMLHttpRequest),
      (O = window.XDomainRequest),
      (N = window.WebSocket),
      (w = function (a, b) {
        var c, d, e, f;
        f = [];
        for (d in b.prototype)
          try {
            (e = b.prototype[d]),
              f.push(
                null == a[d] && "function" != typeof e ? (a[d] = e) : void 0
              );
          } catch (g) {
            c = g;
          }
        return f;
      }),
      (A = []),
      (j.ignore = function () {
        var a, b, c;
        return (
          (b = arguments[0]),
          (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
          A.unshift("ignore"),
          (c = b.apply(null, a)),
          A.shift(),
          c
        );
      }),
      (j.track = function () {
        var a, b, c;
        return (
          (b = arguments[0]),
          (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
          A.unshift("track"),
          (c = b.apply(null, a)),
          A.shift(),
          c
        );
      }),
      (J = function (a) {
        var b;
        if ((null == a && (a = "GET"), "track" === A[0])) return "force";
        if (!A.length && D.ajax) {
          if ("socket" === a && D.ajax.trackWebSockets) return !0;
          if (((b = a.toUpperCase()), $.call(D.ajax.trackMethods, b) >= 0))
            return !0;
        }
        return !1;
      }),
      (k = (function (a) {
        function b() {
          var a,
            c = this;
          b.__super__.constructor.apply(this, arguments),
            (a = function (a) {
              var b;
              return (
                (b = a.open),
                (a.open = function (d, e) {
                  return (
                    J(d) &&
                      c.trigger("request", {
                        type: d,
                        url: e,
                        request: a,
                      }),
                    b.apply(a, arguments)
                  );
                })
              );
            }),
            (window.XMLHttpRequest = function (b) {
              var c;
              return (c = new P(b)), a(c), c;
            });
          try {
            w(window.XMLHttpRequest, P);
          } catch (d) {}
          if (null != O) {
            window.XDomainRequest = function () {
              var b;
              return (b = new O()), a(b), b;
            };
            try {
              w(window.XDomainRequest, O);
            } catch (d) {}
          }
          if (null != N && D.ajax.trackWebSockets) {
            window.WebSocket = function (a, b) {
              var d;
              return (
                (d = null != b ? new N(a, b) : new N(a)),
                J("socket") &&
                  c.trigger("request", {
                    type: "socket",
                    url: a,
                    protocols: b,
                    request: d,
                  }),
                d
              );
            };
            try {
              w(window.WebSocket, N);
            } catch (d) {}
          }
        }
        return Z(b, a), b;
      })(h)),
      (R = null),
      (y = function () {
        return null == R && (R = new k()), R;
      }),
      (I = function (a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
          if (((b = e[c]), "string" == typeof b)) {
            if (-1 !== a.indexOf(b)) return !0;
          } else if (b.test(a)) return !0;
        return !1;
      }),
      y().on("request", function (b) {
        var c, d, e, f, g;
        return (
          (f = b.type),
          (e = b.request),
          (g = b.url),
          I(g)
            ? void 0
            : j.running || (D.restartOnRequestAfter === !1 && "force" !== J(f))
            ? void 0
            : ((d = arguments),
              (c = D.restartOnRequestAfter || 0),
              "boolean" == typeof c && (c = 0),
              setTimeout(function () {
                var b, c, g, h, i, k;
                if (
                  (b =
                    "socket" === f
                      ? e.readyState < 2
                      : 0 < (h = e.readyState) && 4 > h)
                ) {
                  for (
                    j.restart(), i = j.sources, k = [], c = 0, g = i.length;
                    g > c;
                    c++
                  ) {
                    if (((K = i[c]), K instanceof a)) {
                      K.watch.apply(K, d);
                      break;
                    }
                    k.push(void 0);
                  }
                  return k;
                }
              }, c))
        );
      }),
      (a = (function () {
        function a() {
          var a = this;
          (this.elements = []),
            y().on("request", function () {
              return a.watch.apply(a, arguments);
            });
        }
        return (
          (a.prototype.watch = function (a) {
            var b, c, d, e;
            return (
              (d = a.type),
              (b = a.request),
              (e = a.url),
              I(e)
                ? void 0
                : ((c = "socket" === d ? new n(b) : new o(b)),
                  this.elements.push(c))
            );
          }),
          a
        );
      })()),
      (o = (function () {
        function a(a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            h = this;
          if (((this.progress = 0), null != window.ProgressEvent))
            for (
              c = null,
                a.addEventListener(
                  "progress",
                  function (a) {
                    return (h.progress = a.lengthComputable
                      ? (100 * a.loaded) / a.total
                      : h.progress + (100 - h.progress) / 2);
                  },
                  !1
                ),
                g = ["load", "abort", "timeout", "error"],
                d = 0,
                e = g.length;
              e > d;
              d++
            )
              (b = g[d]),
                a.addEventListener(
                  b,
                  function () {
                    return (h.progress = 100);
                  },
                  !1
                );
          else
            (f = a.onreadystatechange),
              (a.onreadystatechange = function () {
                var b;
                return (
                  0 === (b = a.readyState) || 4 === b
                    ? (h.progress = 100)
                    : 3 === a.readyState && (h.progress = 50),
                  "function" == typeof f ? f.apply(null, arguments) : void 0
                );
              });
        }
        return a;
      })()),
      (n = (function () {
        function a(a) {
          var b,
            c,
            d,
            e,
            f = this;
          for (
            this.progress = 0, e = ["error", "open"], c = 0, d = e.length;
            d > c;
            c++
          )
            (b = e[c]),
              a.addEventListener(
                b,
                function () {
                  return (f.progress = 100);
                },
                !1
              );
        }
        return a;
      })()),
      (d = (function () {
        function a(a) {
          var b, c, d, f;
          for (
            null == a && (a = {}),
              this.elements = [],
              null == a.selectors && (a.selectors = []),
              f = a.selectors,
              c = 0,
              d = f.length;
            d > c;
            c++
          )
            (b = f[c]), this.elements.push(new e(b));
        }
        return a;
      })()),
      (e = (function () {
        function a(a) {
          (this.selector = a), (this.progress = 0), this.check();
        }
        return (
          (a.prototype.check = function () {
            var a = this;
            return document.querySelector(this.selector)
              ? this.done()
              : setTimeout(function () {
                  return a.check();
                }, D.elements.checkInterval);
          }),
          (a.prototype.done = function () {
            return (this.progress = 100);
          }),
          a
        );
      })()),
      (c = (function () {
        function a() {
          var a,
            b,
            c = this;
          (this.progress =
            null != (b = this.states[document.readyState]) ? b : 100),
            (a = document.onreadystatechange),
            (document.onreadystatechange = function () {
              return (
                null != c.states[document.readyState] &&
                  (c.progress = c.states[document.readyState]),
                "function" == typeof a ? a.apply(null, arguments) : void 0
              );
            });
        }
        return (
          (a.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100,
          }),
          a
        );
      })()),
      (f = (function () {
        function a() {
          var a,
            b,
            c,
            d,
            e,
            f = this;
          (this.progress = 0),
            (a = 0),
            (e = []),
            (d = 0),
            (c = C()),
            (b = setInterval(function () {
              var g;
              return (
                (g = C() - c - 50),
                (c = C()),
                e.push(g),
                e.length > D.eventLag.sampleCount && e.shift(),
                (a = q(e)),
                ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold
                  ? ((f.progress = 100), clearInterval(b))
                  : (f.progress = 100 * (3 / (a + 3)))
              );
            }, 50));
        }
        return a;
      })()),
      (m = (function () {
        function a(a) {
          (this.source = a),
            (this.last = this.sinceLastUpdate = 0),
            (this.rate = D.initialRate),
            (this.catchup = 0),
            (this.progress = this.lastProgress = 0),
            null != this.source && (this.progress = F(this.source, "progress"));
        }
        return (
          (a.prototype.tick = function (a, b) {
            var c;
            return (
              null == b && (b = F(this.source, "progress")),
              b >= 100 && (this.done = !0),
              b === this.last
                ? (this.sinceLastUpdate += a)
                : (this.sinceLastUpdate &&
                    (this.rate = (b - this.last) / this.sinceLastUpdate),
                  (this.catchup = (b - this.progress) / D.catchupTime),
                  (this.sinceLastUpdate = 0),
                  (this.last = b)),
              b > this.progress && (this.progress += this.catchup * a),
              (c = 1 - Math.pow(this.progress / 100, D.easeFactor)),
              (this.progress += c * this.rate * a),
              (this.progress = Math.min(
                this.lastProgress + D.maxProgressPerFrame,
                this.progress
              )),
              (this.progress = Math.max(0, this.progress)),
              (this.progress = Math.min(100, this.progress)),
              (this.lastProgress = this.progress),
              this.progress
            );
          }),
          a
        );
      })()),
      (L = null),
      (H = null),
      (r = null),
      (M = null),
      (p = null),
      (s = null),
      (j.running = !1),
      (z = function () {
        return D.restartOnPushState ? j.restart() : void 0;
      }),
      null != window.history.pushState &&
        ((T = window.history.pushState),
        (window.history.pushState = function () {
          return z(), T.apply(window.history, arguments);
        })),
      null != window.history.replaceState &&
        ((W = window.history.replaceState),
        (window.history.replaceState = function () {
          return z(), W.apply(window.history, arguments);
        })),
      (l = {
        ajax: a,
        elements: d,
        document: c,
        eventLag: f,
      }),
      (B = function () {
        var a, c, d, e, f, g, h, i;
        for (
          j.sources = L = [],
            g = ["ajax", "elements", "document", "eventLag"],
            c = 0,
            e = g.length;
          e > c;
          c++
        )
          (a = g[c]), D[a] !== !1 && L.push(new l[a](D[a]));
        for (
          i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length;
          f > d;
          d++
        )
          (K = i[d]), L.push(new K(D));
        return (j.bar = r = new b()), (H = []), (M = new m());
      })(),
      (j.stop = function () {
        return (
          j.trigger("stop"),
          (j.running = !1),
          r.destroy(),
          (s = !0),
          null != p && ("function" == typeof t && t(p), (p = null)),
          B()
        );
      }),
      (j.restart = function () {
        return j.trigger("restart"), j.stop(), j.start();
      }),
      (j.go = function () {
        var a;
        return (
          (j.running = !0),
          r.render(),
          (a = C()),
          (s = !1),
          (p = G(function (b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (
              l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length;
              u > q;
              i = ++q
            )
              for (
                K = L[i],
                  o = null != H[i] ? H[i] : (H[i] = []),
                  h = null != (w = K.elements) ? w : [K],
                  k = t = 0,
                  v = h.length;
                v > t;
                k = ++t
              )
                (g = h[k]),
                  (n = null != o[k] ? o[k] : (o[k] = new m(g))),
                  (f &= n.done),
                  n.done || (e++, (p += n.tick(b)));
            return (
              (d = p / e),
              r.update(M.tick(b, d)),
              r.done() || f || s
                ? (r.update(100),
                  j.trigger("done"),
                  setTimeout(function () {
                    return r.finish(), (j.running = !1), j.trigger("hide");
                  }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0))))
                : c()
            );
          }))
        );
      }),
      (j.start = function (a) {
        v(D, a), (j.running = !0);
        try {
          r.render();
        } catch (b) {
          i = b;
        }
        return document.querySelector(".pace")
          ? (j.trigger("start"), j.go())
          : setTimeout(j.start, 50);
      }),
      "function" == typeof define && define.amd
        ? define(function () {
            return j;
          })
        : "object" == typeof exports
        ? (module.exports = j)
        : D.startOnPageLoad && j.start();
  }.call(this));
  !(function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = a.document
          ? b(a, !0)
          : function (a) {
              if (!a.document)
                throw new Error("jQuery requires a window with a document");
              return b(a);
            })
      : b(a);
  })("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};
  
    function p(a, b) {
      b = b || d;
      var c = b.createElement("script");
      (c.text = a), b.head.appendChild(c).parentNode.removeChild(c);
    }
    var q = "3.2.1",
      r = function (a, b) {
        return new r.fn.init(a, b);
      },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function (a, b) {
        return b.toUpperCase();
      };
    (r.fn = r.prototype =
      {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function () {
          return f.call(this);
        },
        get: function (a) {
          return null == a
            ? f.call(this)
            : a < 0
            ? this[a + this.length]
            : this[a];
        },
        pushStack: function (a) {
          var b = r.merge(this.constructor(), a);
          return (b.prevObject = this), b;
        },
        each: function (a) {
          return r.each(this, a);
        },
        map: function (a) {
          return this.pushStack(
            r.map(this, function (b, c) {
              return a.call(b, c, b);
            })
          );
        },
        slice: function () {
          return this.pushStack(f.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (a) {
          var b = this.length,
            c = +a + (a < 0 ? b : 0);
          return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: h,
        sort: c.sort,
        splice: c.splice,
      }),
      (r.extend = r.fn.extend =
        function () {
          var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
          for (
            "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
              "object" == typeof g || r.isFunction(g) || (g = {}),
              h === i && ((g = this), h--);
            h < i;
            h++
          )
            if (null != (a = arguments[h]))
              for (b in a)
                (c = g[b]),
                  (d = a[b]),
                  g !== d &&
                    (j && d && (r.isPlainObject(d) || (e = Array.isArray(d)))
                      ? (e
                          ? ((e = !1), (f = c && Array.isArray(c) ? c : []))
                          : (f = c && r.isPlainObject(c) ? c : {}),
                        (g[b] = r.extend(j, f, d)))
                      : void 0 !== d && (g[b] = d));
          return g;
        }),
      r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
          throw new Error(a);
        },
        noop: function () {},
        isFunction: function (a) {
          return "function" === r.type(a);
        },
        isWindow: function (a) {
          return null != a && a === a.window;
        },
        isNumeric: function (a) {
          var b = r.type(a);
          return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        },
        isPlainObject: function (a) {
          var b, c;
          return (
            !(!a || "[object Object]" !== k.call(a)) &&
            (!(b = e(a)) ||
              ((c = l.call(b, "constructor") && b.constructor),
              "function" == typeof c && m.call(c) === n))
          );
        },
        isEmptyObject: function (a) {
          var b;
          for (b in a) return !1;
          return !0;
        },
        type: function (a) {
          return null == a
            ? a + ""
            : "object" == typeof a || "function" == typeof a
            ? j[k.call(a)] || "object"
            : typeof a;
        },
        globalEval: function (a) {
          p(a);
        },
        camelCase: function (a) {
          return a.replace(t, "ms-").replace(u, v);
        },
        each: function (a, b) {
          var c,
            d = 0;
          if (w(a)) {
            for (c = a.length; d < c; d++)
              if (b.call(a[d], d, a[d]) === !1) break;
          } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
          return a;
        },
        trim: function (a) {
          return null == a ? "" : (a + "").replace(s, "");
        },
        makeArray: function (a, b) {
          var c = b || [];
          return (
            null != a &&
              (w(Object(a))
                ? r.merge(c, "string" == typeof a ? [a] : a)
                : h.call(c, a)),
            c
          );
        },
        inArray: function (a, b, c) {
          return null == b ? -1 : i.call(b, a, c);
        },
        merge: function (a, b) {
          for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
          return (a.length = e), a;
        },
        grep: function (a, b, c) {
          for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
            (d = !b(a[f], f)), d !== h && e.push(a[f]);
          return e;
        },
        map: function (a, b, c) {
          var d,
            e,
            f = 0,
            h = [];
          if (w(a))
            for (d = a.length; f < d; f++)
              (e = b(a[f], f, c)), null != e && h.push(e);
          else for (f in a) (e = b(a[f], f, c)), null != e && h.push(e);
          return g.apply([], h);
        },
        guid: 1,
        proxy: function (a, b) {
          var c, d, e;
          if (
            ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
            r.isFunction(a))
          )
            return (
              (d = f.call(arguments, 2)),
              (e = function () {
                return a.apply(b || this, d.concat(f.call(arguments)));
              }),
              (e.guid = a.guid = a.guid || r.guid++),
              e
            );
        },
        now: Date.now,
        support: o,
      }),
      "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
      r.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (a, b) {
          j["[object " + b + "]"] = b.toLowerCase();
        }
      );
  
    function w(a) {
      var b = !!a && "length" in a && a.length,
        c = r.type(a);
      return (
        "function" !== c &&
        !r.isWindow(a) &&
        ("array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a))
      );
    }
    var x = (function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function (a, b) {
          return a === b && (l = !0), 0;
        },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function (a, b) {
          for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
          return -1;
        },
        J =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M =
          "\\[" +
          K +
          "*(" +
          L +
          ")(?:" +
          K +
          "*([*^$|!~]?=)" +
          K +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          L +
          "))|)" +
          K +
          "*\\]",
        N =
          ":(" +
          L +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          M +
          ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = {
          ID: new RegExp("^#(" + L + ")"),
          CLASS: new RegExp("^\\.(" + L + ")"),
          TAG: new RegExp("^(" + L + "|[*])"),
          ATTR: new RegExp("^" + M),
          PSEUDO: new RegExp("^" + N),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              K +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              K +
              "*(?:([+-]|)" +
              K +
              "*(\\d+)|))" +
              K +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + J + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              K +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              K +
              "*((?:-\\d)?\\d*)" +
              K +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function (a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c
            ? b
            : d < 0
            ? String.fromCharCode(d + 65536)
            : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
        },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function (a, b) {
          return b
            ? "\0" === a
              ? "ï¿½"
              : a.slice(0, -1) +
                "\\" +
                a.charCodeAt(a.length - 1).toString(16) +
                " "
            : "\\" + a;
        },
        da = function () {
          m();
        },
        ea = ta(
          function (a) {
            return a.disabled === !0 && ("form" in a || "label" in a);
          },
          {
            dir: "parentNode",
            next: "legend",
          }
        );
      try {
        G.apply((D = H.call(v.childNodes)), v.childNodes),
          D[v.childNodes.length].nodeType;
      } catch (fa) {
        G = {
          apply: D.length
            ? function (a, b) {
                F.apply(a, H.call(b));
              }
            : function (a, b) {
                var c = a.length,
                  d = 0;
                while ((a[c++] = b[d++]));
                a.length = c - 1;
              },
        };
      }
  
      function ga(a, b, d, e) {
        var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;
        if (
          ((d = d || []),
          "string" != typeof a || !a || (1 !== w && 9 !== w && 11 !== w))
        )
          return d;
        if (
          !e &&
          ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
        ) {
          if (11 !== w && (l = Z.exec(a)))
            if ((f = l[1])) {
              if (9 === w) {
                if (!(j = b.getElementById(f))) return d;
                if (j.id === f) return d.push(j), d;
              } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
                return d.push(j), d;
            } else {
              if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
              if (
                (f = l[3]) &&
                c.getElementsByClassName &&
                b.getElementsByClassName
              )
                return G.apply(d, b.getElementsByClassName(f)), d;
            }
          if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
            if (1 !== w) (s = b), (r = a);
            else if ("object" !== b.nodeName.toLowerCase()) {
              (k = b.getAttribute("id"))
                ? (k = k.replace(ba, ca))
                : b.setAttribute("id", (k = u)),
                (o = g(a)),
                (h = o.length);
              while (h--) o[h] = "#" + k + " " + sa(o[h]);
              (r = o.join(",")), (s = ($.test(a) && qa(b.parentNode)) || b);
            }
            if (r)
              try {
                return G.apply(d, s.querySelectorAll(r)), d;
              } catch (x) {
              } finally {
                k === u && b.removeAttribute("id");
              }
          }
        }
        return i(a.replace(P, "$1"), b, d, e);
      }
  
      function ha() {
        var a = [];
  
        function b(c, e) {
          return (
            a.push(c + " ") > d.cacheLength && delete b[a.shift()],
            (b[c + " "] = e)
          );
        }
        return b;
      }
  
      function ia(a) {
        return (a[u] = !0), a;
      }
  
      function ja(a) {
        var b = n.createElement("fieldset");
        try {
          return !!a(b);
        } catch (c) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b), (b = null);
        }
      }
  
      function ka(a, b) {
        var c = a.split("|"),
          e = c.length;
        while (e--) d.attrHandle[c[e]] = b;
      }
  
      function la(a, b) {
        var c = b && a,
          d =
            c &&
            1 === a.nodeType &&
            1 === b.nodeType &&
            a.sourceIndex - b.sourceIndex;
        if (d) return d;
        if (c) while ((c = c.nextSibling)) if (c === b) return -1;
        return a ? 1 : -1;
      }
  
      function ma(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a;
        };
      }
  
      function na(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a;
        };
      }
  
      function oa(a) {
        return function (b) {
          return "form" in b
            ? b.parentNode && b.disabled === !1
              ? "label" in b
                ? "label" in b.parentNode
                  ? b.parentNode.disabled === a
                  : b.disabled === a
                : b.isDisabled === a || (b.isDisabled !== !a && ea(b) === a)
              : b.disabled === a
            : "label" in b && b.disabled === a;
        };
      }
  
      function pa(a) {
        return ia(function (b) {
          return (
            (b = +b),
            ia(function (c, d) {
              var e,
                f = a([], c.length, b),
                g = f.length;
              while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
            })
          );
        });
      }
  
      function qa(a) {
        return a && "undefined" != typeof a.getElementsByTagName && a;
      }
      (c = ga.support = {}),
        (f = ga.isXML =
          function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName;
          }),
        (m = ga.setDocument =
          function (a) {
            var b,
              e,
              g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement
              ? ((n = g),
                (o = n.documentElement),
                (p = !f(n)),
                v !== n &&
                  (e = n.defaultView) &&
                  e.top !== e &&
                  (e.addEventListener
                    ? e.addEventListener("unload", da, !1)
                    : e.attachEvent && e.attachEvent("onunload", da)),
                (c.attributes = ja(function (a) {
                  return (a.className = "i"), !a.getAttribute("className");
                })),
                (c.getElementsByTagName = ja(function (a) {
                  return (
                    a.appendChild(n.createComment("")),
                    !a.getElementsByTagName("*").length
                  );
                })),
                (c.getElementsByClassName = Y.test(n.getElementsByClassName)),
                (c.getById = ja(function (a) {
                  return (
                    (o.appendChild(a).id = u),
                    !n.getElementsByName || !n.getElementsByName(u).length
                  );
                })),
                c.getById
                  ? ((d.filter.ID = function (a) {
                      var b = a.replace(_, aa);
                      return function (a) {
                        return a.getAttribute("id") === b;
                      };
                    }),
                    (d.find.ID = function (a, b) {
                      if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : [];
                      }
                    }))
                  : ((d.filter.ID = function (a) {
                      var b = a.replace(_, aa);
                      return function (a) {
                        var c =
                          "undefined" != typeof a.getAttributeNode &&
                          a.getAttributeNode("id");
                        return c && c.value === b;
                      };
                    }),
                    (d.find.ID = function (a, b) {
                      if ("undefined" != typeof b.getElementById && p) {
                        var c,
                          d,
                          e,
                          f = b.getElementById(a);
                        if (f) {
                          if (
                            ((c = f.getAttributeNode("id")), c && c.value === a)
                          )
                            return [f];
                          (e = b.getElementsByName(a)), (d = 0);
                          while ((f = e[d++]))
                            if (
                              ((c = f.getAttributeNode("id")), c && c.value === a)
                            )
                              return [f];
                        }
                        return [];
                      }
                    })),
                (d.find.TAG = c.getElementsByTagName
                  ? function (a, b) {
                      return "undefined" != typeof b.getElementsByTagName
                        ? b.getElementsByTagName(a)
                        : c.qsa
                        ? b.querySelectorAll(a)
                        : void 0;
                    }
                  : function (a, b) {
                      var c,
                        d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                      if ("*" === a) {
                        while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                        return d;
                      }
                      return f;
                    }),
                (d.find.CLASS =
                  c.getElementsByClassName &&
                  function (a, b) {
                    if ("undefined" != typeof b.getElementsByClassName && p)
                      return b.getElementsByClassName(a);
                  }),
                (r = []),
                (q = []),
                (c.qsa = Y.test(n.querySelectorAll)) &&
                  (ja(function (a) {
                    (o.appendChild(a).innerHTML =
                      "<a id='" +
                      u +
                      "'></a><select id='" +
                      u +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      a.querySelectorAll("[msallowcapture^='']").length &&
                        q.push("[*^$]=" + K + "*(?:''|\"\")"),
                      a.querySelectorAll("[selected]").length ||
                        q.push("\\[" + K + "*(?:value|" + J + ")"),
                      a.querySelectorAll("[id~=" + u + "-]").length ||
                        q.push("~="),
                      a.querySelectorAll(":checked").length || q.push(":checked"),
                      a.querySelectorAll("a#" + u + "+*").length ||
                        q.push(".#.+[+~]");
                  }),
                  ja(function (a) {
                    a.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden"),
                      a.appendChild(b).setAttribute("name", "D"),
                      a.querySelectorAll("[name=d]").length &&
                        q.push("name" + K + "*[*^$|!~]?="),
                      2 !== a.querySelectorAll(":enabled").length &&
                        q.push(":enabled", ":disabled"),
                      (o.appendChild(a).disabled = !0),
                      2 !== a.querySelectorAll(":disabled").length &&
                        q.push(":enabled", ":disabled"),
                      a.querySelectorAll("*,:x"),
                      q.push(",.*:");
                  })),
                (c.matchesSelector = Y.test(
                  (s =
                    o.matches ||
                    o.webkitMatchesSelector ||
                    o.mozMatchesSelector ||
                    o.oMatchesSelector ||
                    o.msMatchesSelector)
                )) &&
                  ja(function (a) {
                    (c.disconnectedMatch = s.call(a, "*")),
                      s.call(a, "[s!='']:x"),
                      r.push("!=", N);
                  }),
                (q = q.length && new RegExp(q.join("|"))),
                (r = r.length && new RegExp(r.join("|"))),
                (b = Y.test(o.compareDocumentPosition)),
                (t =
                  b || Y.test(o.contains)
                    ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a,
                          d = b && b.parentNode;
                        return (
                          a === d ||
                          !(
                            !d ||
                            1 !== d.nodeType ||
                            !(c.contains
                              ? c.contains(d)
                              : a.compareDocumentPosition &&
                                16 & a.compareDocumentPosition(d))
                          )
                        );
                      }
                    : function (a, b) {
                        if (b) while ((b = b.parentNode)) if (b === a) return !0;
                        return !1;
                      }),
                (B = b
                  ? function (a, b) {
                      if (a === b) return (l = !0), 0;
                      var d =
                        !a.compareDocumentPosition - !b.compareDocumentPosition;
                      return d
                        ? d
                        : ((d =
                            (a.ownerDocument || a) === (b.ownerDocument || b)
                              ? a.compareDocumentPosition(b)
                              : 1),
                          1 & d ||
                          (!c.sortDetached && b.compareDocumentPosition(a) === d)
                            ? a === n || (a.ownerDocument === v && t(v, a))
                              ? -1
                              : b === n || (b.ownerDocument === v && t(v, b))
                              ? 1
                              : k
                              ? I(k, a) - I(k, b)
                              : 0
                            : 4 & d
                            ? -1
                            : 1);
                    }
                  : function (a, b) {
                      if (a === b) return (l = !0), 0;
                      var c,
                        d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        g = [a],
                        h = [b];
                      if (!e || !f)
                        return a === n
                          ? -1
                          : b === n
                          ? 1
                          : e
                          ? -1
                          : f
                          ? 1
                          : k
                          ? I(k, a) - I(k, b)
                          : 0;
                      if (e === f) return la(a, b);
                      c = a;
                      while ((c = c.parentNode)) g.unshift(c);
                      c = b;
                      while ((c = c.parentNode)) h.unshift(c);
                      while (g[d] === h[d]) d++;
                      return d
                        ? la(g[d], h[d])
                        : g[d] === v
                        ? -1
                        : h[d] === v
                        ? 1
                        : 0;
                    }),
                n)
              : n;
          }),
        (ga.matches = function (a, b) {
          return ga(a, null, null, b);
        }),
        (ga.matchesSelector = function (a, b) {
          if (
            ((a.ownerDocument || a) !== n && m(a),
            (b = b.replace(S, "='$1']")),
            c.matchesSelector &&
              p &&
              !A[b + " "] &&
              (!r || !r.test(b)) &&
              (!q || !q.test(b)))
          )
            try {
              var d = s.call(a, b);
              if (
                d ||
                c.disconnectedMatch ||
                (a.document && 11 !== a.document.nodeType)
              )
                return d;
            } catch (e) {}
          return ga(b, n, null, [a]).length > 0;
        }),
        (ga.contains = function (a, b) {
          return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }),
        (ga.attr = function (a, b) {
          (a.ownerDocument || a) !== n && m(a);
          var e = d.attrHandle[b.toLowerCase()],
            f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
          return void 0 !== f
            ? f
            : c.attributes || !p
            ? a.getAttribute(b)
            : (f = a.getAttributeNode(b)) && f.specified
            ? f.value
            : null;
        }),
        (ga.escape = function (a) {
          return (a + "").replace(ba, ca);
        }),
        (ga.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }),
        (ga.uniqueSort = function (a) {
          var b,
            d = [],
            e = 0,
            f = 0;
          if (
            ((l = !c.detectDuplicates),
            (k = !c.sortStable && a.slice(0)),
            a.sort(B),
            l)
          ) {
            while ((b = a[f++])) b === a[f] && (e = d.push(f));
            while (e--) a.splice(d[e], 1);
          }
          return (k = null), a;
        }),
        (e = ga.getText =
          function (a) {
            var b,
              c = "",
              d = 0,
              f = a.nodeType;
            if (f) {
              if (1 === f || 9 === f || 11 === f) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
              } else if (3 === f || 4 === f) return a.nodeValue;
            } else while ((b = a[d++])) c += e(b);
            return c;
          }),
        (d = ga.selectors =
          {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
              ">": {
                dir: "parentNode",
                first: !0,
              },
              " ": {
                dir: "parentNode",
              },
              "+": {
                dir: "previousSibling",
                first: !0,
              },
              "~": {
                dir: "previousSibling",
              },
            },
            preFilter: {
              ATTR: function (a) {
                return (
                  (a[1] = a[1].replace(_, aa)),
                  (a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa)),
                  "~=" === a[2] && (a[3] = " " + a[3] + " "),
                  a.slice(0, 4)
                );
              },
              CHILD: function (a) {
                return (
                  (a[1] = a[1].toLowerCase()),
                  "nth" === a[1].slice(0, 3)
                    ? (a[3] || ga.error(a[0]),
                      (a[4] = +(a[4]
                        ? a[5] + (a[6] || 1)
                        : 2 * ("even" === a[3] || "odd" === a[3]))),
                      (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                    : a[3] && ga.error(a[0]),
                  a
                );
              },
              PSEUDO: function (a) {
                var b,
                  c = !a[6] && a[2];
                return V.CHILD.test(a[0])
                  ? null
                  : (a[3]
                      ? (a[2] = a[4] || a[5] || "")
                      : c &&
                        T.test(c) &&
                        (b = g(c, !0)) &&
                        (b = c.indexOf(")", c.length - b) - c.length) &&
                        ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                    a.slice(0, 3));
              },
            },
            filter: {
              TAG: function (a) {
                var b = a.replace(_, aa).toLowerCase();
                return "*" === a
                  ? function () {
                      return !0;
                    }
                  : function (a) {
                      return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
              },
              CLASS: function (a) {
                var b = y[a + " "];
                return (
                  b ||
                  ((b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) &&
                    y(a, function (a) {
                      return b.test(
                        ("string" == typeof a.className && a.className) ||
                          ("undefined" != typeof a.getAttribute &&
                            a.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (a, b, c) {
                return function (d) {
                  var e = ga.attr(d, a);
                  return null == e
                    ? "!=" === b
                    : !b ||
                        ((e += ""),
                        "=" === b
                          ? e === c
                          : "!=" === b
                          ? e !== c
                          : "^=" === b
                          ? c && 0 === e.indexOf(c)
                          : "*=" === b
                          ? c && e.indexOf(c) > -1
                          : "$=" === b
                          ? c && e.slice(-c.length) === c
                          : "~=" === b
                          ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1
                          : "|=" === b &&
                            (e === c || e.slice(0, c.length + 1) === c + "-"));
                };
              },
              CHILD: function (a, b, c, d, e) {
                var f = "nth" !== a.slice(0, 3),
                  g = "last" !== a.slice(-4),
                  h = "of-type" === b;
                return 1 === d && 0 === e
                  ? function (a) {
                      return !!a.parentNode;
                    }
                  : function (b, c, i) {
                      var j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p = f !== g ? "nextSibling" : "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h,
                        t = !1;
                      if (q) {
                        if (f) {
                          while (p) {
                            m = b;
                            while ((m = m[p]))
                              if (
                                h
                                  ? m.nodeName.toLowerCase() === r
                                  : 1 === m.nodeType
                              )
                                return !1;
                            o = p = "only" === a && !o && "nextSibling";
                          }
                          return !0;
                        }
                        if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                          (m = q),
                            (l = m[u] || (m[u] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (j = k[a] || []),
                            (n = j[0] === w && j[1]),
                            (t = n && j[2]),
                            (m = n && q.childNodes[n]);
                          while (
                            (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                          )
                            if (1 === m.nodeType && ++t && m === b) {
                              k[a] = [w, n, t];
                              break;
                            }
                        } else if (
                          (s &&
                            ((m = b),
                            (l = m[u] || (m[u] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (j = k[a] || []),
                            (n = j[0] === w && j[1]),
                            (t = n)),
                          t === !1)
                        )
                          while (
                            (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                          )
                            if (
                              (h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType) &&
                              ++t &&
                              (s &&
                                ((l = m[u] || (m[u] = {})),
                                (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                                (k[a] = [w, t])),
                              m === b)
                            )
                              break;
                        return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                      }
                    };
              },
              PSEUDO: function (a, b) {
                var c,
                  e =
                    d.pseudos[a] ||
                    d.setFilters[a.toLowerCase()] ||
                    ga.error("unsupported pseudo: " + a);
                return e[u]
                  ? e(b)
                  : e.length > 1
                  ? ((c = [a, a, "", b]),
                    d.setFilters.hasOwnProperty(a.toLowerCase())
                      ? ia(function (a, c) {
                          var d,
                            f = e(a, b),
                            g = f.length;
                          while (g--) (d = I(a, f[g])), (a[d] = !(c[d] = f[g]));
                        })
                      : function (a) {
                          return e(a, 0, c);
                        })
                  : e;
              },
            },
            pseudos: {
              not: ia(function (a) {
                var b = [],
                  c = [],
                  d = h(a.replace(P, "$1"));
                return d[u]
                  ? ia(function (a, b, c, e) {
                      var f,
                        g = d(a, null, e, []),
                        h = a.length;
                      while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    })
                  : function (a, e, f) {
                      return (
                        (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                      );
                    };
              }),
              has: ia(function (a) {
                return function (b) {
                  return ga(a, b).length > 0;
                };
              }),
              contains: ia(function (a) {
                return (
                  (a = a.replace(_, aa)),
                  function (b) {
                    return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                  }
                );
              }),
              lang: ia(function (a) {
                return (
                  U.test(a || "") || ga.error("unsupported lang: " + a),
                  (a = a.replace(_, aa).toLowerCase()),
                  function (b) {
                    var c;
                    do {
                      if (
                        (c = p
                          ? b.lang
                          : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                      )
                        return (
                          (c = c.toLowerCase()),
                          c === a || 0 === c.indexOf(a + "-")
                        );
                    } while ((b = b.parentNode) && 1 === b.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (b) {
                var c = a.location && a.location.hash;
                return c && c.slice(1) === b.id;
              },
              root: function (a) {
                return a === o;
              },
              focus: function (a) {
                return (
                  a === n.activeElement &&
                  (!n.hasFocus || n.hasFocus()) &&
                  !!(a.type || a.href || ~a.tabIndex)
                );
              },
              enabled: oa(!1),
              disabled: oa(!0),
              checked: function (a) {
                var b = a.nodeName.toLowerCase();
                return (
                  ("input" === b && !!a.checked) ||
                  ("option" === b && !!a.selected)
                );
              },
              selected: function (a) {
                return (
                  a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                );
              },
              empty: function (a) {
                for (a = a.firstChild; a; a = a.nextSibling)
                  if (a.nodeType < 6) return !1;
                return !0;
              },
              parent: function (a) {
                return !d.pseudos.empty(a);
              },
              header: function (a) {
                return X.test(a.nodeName);
              },
              input: function (a) {
                return W.test(a.nodeName);
              },
              button: function (a) {
                var b = a.nodeName.toLowerCase();
                return ("input" === b && "button" === a.type) || "button" === b;
              },
              text: function (a) {
                var b;
                return (
                  "input" === a.nodeName.toLowerCase() &&
                  "text" === a.type &&
                  (null == (b = a.getAttribute("type")) ||
                    "text" === b.toLowerCase())
                );
              },
              first: pa(function () {
                return [0];
              }),
              last: pa(function (a, b) {
                return [b - 1];
              }),
              eq: pa(function (a, b, c) {
                return [c < 0 ? c + b : c];
              }),
              even: pa(function (a, b) {
                for (var c = 0; c < b; c += 2) a.push(c);
                return a;
              }),
              odd: pa(function (a, b) {
                for (var c = 1; c < b; c += 2) a.push(c);
                return a;
              }),
              lt: pa(function (a, b, c) {
                for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
                return a;
              }),
              gt: pa(function (a, b, c) {
                for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
                return a;
              }),
            },
          }),
        (d.pseudos.nth = d.pseudos.eq);
      for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0,
      })
        d.pseudos[b] = ma(b);
      for (b in {
        submit: !0,
        reset: !0,
      })
        d.pseudos[b] = na(b);
  
      function ra() {}
      (ra.prototype = d.filters = d.pseudos),
        (d.setFilters = new ra()),
        (g = ga.tokenize =
          function (a, b) {
            var c,
              e,
              f,
              g,
              h,
              i,
              j,
              k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            (h = a), (i = []), (j = d.preFilter);
            while (h) {
              (c && !(e = Q.exec(h))) ||
                (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
                (c = !1),
                (e = R.exec(h)) &&
                  ((c = e.shift()),
                  f.push({
                    value: c,
                    type: e[0].replace(P, " "),
                  }),
                  (h = h.slice(c.length)));
              for (g in d.filter)
                !(e = V[g].exec(h)) ||
                  (j[g] && !(e = j[g](e))) ||
                  ((c = e.shift()),
                  f.push({
                    value: c,
                    type: g,
                    matches: e,
                  }),
                  (h = h.slice(c.length)));
              if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
          });
  
      function sa(a) {
        for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
        return d;
      }
  
      function ta(a, b, c) {
        var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;
        return b.first
          ? function (b, c, e) {
              while ((b = b[d])) if (1 === b.nodeType || g) return a(b, c, e);
              return !1;
            }
          : function (b, c, i) {
              var j,
                k,
                l,
                m = [w, h];
              if (i) {
                while ((b = b[d]))
                  if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
              } else
                while ((b = b[d]))
                  if (1 === b.nodeType || g)
                    if (
                      ((l = b[u] || (b[u] = {})),
                      (k = l[b.uniqueID] || (l[b.uniqueID] = {})),
                      e && e === b.nodeName.toLowerCase())
                    )
                      b = b[d] || b;
                    else {
                      if ((j = k[f]) && j[0] === w && j[1] === h)
                        return (m[2] = j[2]);
                      if (((k[f] = m), (m[2] = a(b, c, i)))) return !0;
                    }
              return !1;
            };
      }
  
      function ua(a) {
        return a.length > 1
          ? function (b, c, d) {
              var e = a.length;
              while (e--) if (!a[e](b, c, d)) return !1;
              return !0;
            }
          : a[0];
      }
  
      function va(a, b, c) {
        for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
        return c;
      }
  
      function wa(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
          (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
        return g;
      }
  
      function xa(a, b, c, d, e, f) {
        return (
          d && !d[u] && (d = xa(d)),
          e && !e[u] && (e = xa(e, f)),
          ia(function (f, g, h, i) {
            var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              p = f || va(b || "*", h.nodeType ? [h] : h, []),
              q = !a || (!f && b) ? p : wa(p, m, a, h, i),
              r = c ? (e || (f ? a : o || d) ? [] : g) : q;
            if ((c && c(q, r, h, i), d)) {
              (j = wa(r, n)), d(j, [], h, i), (k = j.length);
              while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
            }
            if (f) {
              if (e || a) {
                if (e) {
                  (j = []), (k = r.length);
                  while (k--) (l = r[k]) && j.push((q[k] = l));
                  e(null, (r = []), j, i);
                }
                k = r.length;
                while (k--)
                  (l = r[k]) &&
                    (j = e ? I(f, l) : m[k]) > -1 &&
                    (f[j] = !(g[j] = l));
              }
            } else (r = wa(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r);
          })
        );
      }
  
      function ya(a) {
        for (
          var b,
            c,
            e,
            f = a.length,
            g = d.relative[a[0].type],
            h = g || d.relative[" "],
            i = g ? 1 : 0,
            k = ta(
              function (a) {
                return a === b;
              },
              h,
              !0
            ),
            l = ta(
              function (a) {
                return I(b, a) > -1;
              },
              h,
              !0
            ),
            m = [
              function (a, c, d) {
                var e =
                  (!g && (d || c !== j)) ||
                  ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return (b = null), e;
              },
            ];
          i < f;
          i++
        )
          if ((c = d.relative[a[i].type])) m = [ta(ua(m), c)];
          else {
            if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
              for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
              return xa(
                i > 1 && ua(m),
                i > 1 &&
                  sa(
                    a.slice(0, i - 1).concat({
                      value: " " === a[i - 2].type ? "*" : "",
                    })
                  ).replace(P, "$1"),
                c,
                i < e && ya(a.slice(i, e)),
                e < f && ya((a = a.slice(e))),
                e < f && sa(a)
              );
            }
            m.push(c);
          }
        return ua(m);
      }
  
      function za(a, b) {
        var c = b.length > 0,
          e = a.length > 0,
          f = function (f, g, h, i, k) {
            var l,
              o,
              q,
              r = 0,
              s = "0",
              t = f && [],
              u = [],
              v = j,
              x = f || (e && d.find.TAG("*", k)),
              y = (w += null == v ? 1 : Math.random() || 0.1),
              z = x.length;
            for (
              k && (j = g === n || g || k);
              s !== z && null != (l = x[s]);
              s++
            ) {
              if (e && l) {
                (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
                while ((q = a[o++]))
                  if (q(l, g || n, h)) {
                    i.push(l);
                    break;
                  }
                k && (w = y);
              }
              c && ((l = !q && l) && r--, f && t.push(l));
            }
            if (((r += s), c && s !== r)) {
              o = 0;
              while ((q = b[o++])) q(t, u, g, h);
              if (f) {
                if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
                u = wa(u);
              }
              G.apply(i, u),
                k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
            }
            return k && ((w = y), (j = v)), t;
          };
        return c ? ia(f) : f;
      }
      return (
        (h = ga.compile =
          function (a, b) {
            var c,
              d = [],
              e = [],
              f = A[a + " "];
            if (!f) {
              b || (b = g(a)), (c = b.length);
              while (c--) (f = ya(b[c])), f[u] ? d.push(f) : e.push(f);
              (f = A(a, za(e, d))), (f.selector = a);
            }
            return f;
          }),
        (i = ga.select =
          function (a, b, c, e) {
            var f,
              i,
              j,
              k,
              l,
              m = "function" == typeof a && a,
              n = !e && g((a = m.selector || a));
            if (((c = c || []), 1 === n.length)) {
              if (
                ((i = n[0] = n[0].slice(0)),
                i.length > 2 &&
                  "ID" === (j = i[0]).type &&
                  9 === b.nodeType &&
                  p &&
                  d.relative[i[1].type])
              ) {
                if (
                  ((b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0]), !b)
                )
                  return c;
                m && (b = b.parentNode), (a = a.slice(i.shift().value.length));
              }
              f = V.needsContext.test(a) ? 0 : i.length;
              while (f--) {
                if (((j = i[f]), d.relative[(k = j.type)])) break;
                if (
                  (l = d.find[k]) &&
                  (e = l(
                    j.matches[0].replace(_, aa),
                    ($.test(i[0].type) && qa(b.parentNode)) || b
                  ))
                ) {
                  if ((i.splice(f, 1), (a = e.length && sa(i)), !a))
                    return G.apply(c, e), c;
                  break;
                }
              }
            }
            return (
              (m || h(a, n))(
                e,
                b,
                !p,
                c,
                !b || ($.test(a) && qa(b.parentNode)) || b
              ),
              c
            );
          }),
        (c.sortStable = u.split("").sort(B).join("") === u),
        (c.detectDuplicates = !!l),
        m(),
        (c.sortDetached = ja(function (a) {
          return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
        })),
        ja(function (a) {
          return (
            (a.innerHTML = "<a href='#'></a>"),
            "#" === a.firstChild.getAttribute("href")
          );
        }) ||
          ka("type|href|height|width", function (a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
          }),
        (c.attributes &&
          ja(function (a) {
            return (
              (a.innerHTML = "<input/>"),
              a.firstChild.setAttribute("value", ""),
              "" === a.firstChild.getAttribute("value")
            );
          })) ||
          ka("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
          }),
        ja(function (a) {
          return null == a.getAttribute("disabled");
        }) ||
          ka(J, function (a, b, c) {
            var d;
            if (!c)
              return a[b] === !0
                ? b.toLowerCase()
                : (d = a.getAttributeNode(b)) && d.specified
                ? d.value
                : null;
          }),
        ga
      );
    })(a);
    (r.find = x),
      (r.expr = x.selectors),
      (r.expr[":"] = r.expr.pseudos),
      (r.uniqueSort = r.unique = x.uniqueSort),
      (r.text = x.getText),
      (r.isXMLDoc = x.isXML),
      (r.contains = x.contains),
      (r.escapeSelector = x.escape);
    var y = function (a, b, c) {
        var d = [],
          e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
          if (1 === a.nodeType) {
            if (e && r(a).is(c)) break;
            d.push(a);
          }
        return d;
      },
      z = function (a, b) {
        for (var c = []; a; a = a.nextSibling)
          1 === a.nodeType && a !== b && c.push(a);
        return c;
      },
      A = r.expr.match.needsContext;
  
    function B(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      D = /^.[^:#\[\.,]*$/;
  
    function E(a, b, c) {
      return r.isFunction(b)
        ? r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c;
          })
        : b.nodeType
        ? r.grep(a, function (a) {
            return (a === b) !== c;
          })
        : "string" != typeof b
        ? r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c;
          })
        : D.test(b)
        ? r.filter(b, a, c)
        : ((b = r.filter(b, a)),
          r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType;
          }));
    }
    (r.filter = function (a, b, c) {
      var d = b[0];
      return (
        c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType
          ? r.find.matchesSelector(d, a)
            ? [d]
            : []
          : r.find.matches(
              a,
              r.grep(b, function (a) {
                return 1 === a.nodeType;
              })
            )
      );
    }),
      r.fn.extend({
        find: function (a) {
          var b,
            c,
            d = this.length,
            e = this;
          if ("string" != typeof a)
            return this.pushStack(
              r(a).filter(function () {
                for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
              })
            );
          for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
          return d > 1 ? r.uniqueSort(c) : c;
        },
        filter: function (a) {
          return this.pushStack(E(this, a || [], !1));
        },
        not: function (a) {
          return this.pushStack(E(this, a || [], !0));
        },
        is: function (a) {
          return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1)
            .length;
        },
      });
    var F,
      G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      H = (r.fn.init = function (a, b, c) {
        var e, f;
        if (!a) return this;
        if (((c = c || F), "string" == typeof a)) {
          if (
            ((e =
              "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
                ? [null, a, null]
                : G.exec(a)),
            !e || (!e[1] && b))
          )
            return !b || b.jquery
              ? (b || c).find(a)
              : this.constructor(b).find(a);
          if (e[1]) {
            if (
              ((b = b instanceof r ? b[0] : b),
              r.merge(
                this,
                r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
              ),
              C.test(e[1]) && r.isPlainObject(b))
            )
              for (e in b)
                r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
            return this;
          }
          return (
            (f = d.getElementById(e[2])),
            f && ((this[0] = f), (this.length = 1)),
            this
          );
        }
        return a.nodeType
          ? ((this[0] = a), (this.length = 1), this)
          : r.isFunction(a)
          ? void 0 !== c.ready
            ? c.ready(a)
            : a(r)
          : r.makeArray(a, this);
      });
    (H.prototype = r.fn), (F = r(d));
    var I = /^(?:parents|prev(?:Until|All))/,
      J = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0,
      };
    r.fn.extend({
      has: function (a) {
        var b = r(a, this),
          c = b.length;
        return this.filter(function () {
          for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
        });
      },
      closest: function (a, b) {
        var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);
        if (!A.test(a))
          for (; d < e; d++)
            for (c = this[d]; c && c !== b; c = c.parentNode)
              if (
                c.nodeType < 11 &&
                (g
                  ? g.index(c) > -1
                  : 1 === c.nodeType && r.find.matchesSelector(c, a))
              ) {
                f.push(c);
                break;
              }
        return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? i.call(r(a), this[0])
            : i.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
      },
      addBack: function (a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
      },
    });
  
    function K(a, b) {
      while ((a = a[b]) && 1 !== a.nodeType);
      return a;
    }
    r.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
          return y(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return y(a, "parentNode", c);
        },
        next: function (a) {
          return K(a, "nextSibling");
        },
        prev: function (a) {
          return K(a, "previousSibling");
        },
        nextAll: function (a) {
          return y(a, "nextSibling");
        },
        prevAll: function (a) {
          return y(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return y(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return y(a, "previousSibling", c);
        },
        siblings: function (a) {
          return z((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return z(a.firstChild);
        },
        contents: function (a) {
          return B(a, "iframe")
            ? a.contentDocument
            : (B(a, "template") && (a = a.content || a),
              r.merge([], a.childNodes));
        },
      },
      function (a, b) {
        r.fn[a] = function (c, d) {
          var e = r.map(this, b, c);
          return (
            "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = r.filter(d, e)),
            this.length > 1 &&
              (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()),
            this.pushStack(e)
          );
        };
      }
    );
    var L = /[^\x20\t\r\n\f]+/g;
  
    function M(a) {
      var b = {};
      return (
        r.each(a.match(L) || [], function (a, c) {
          b[c] = !0;
        }),
        b
      );
    }
    r.Callbacks = function (a) {
      a = "string" == typeof a ? M(a) : r.extend({}, a);
      var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function () {
          for (e = e || a.once, d = b = !0; g.length; h = -1) {
            c = g.shift();
            while (++h < f.length)
              f[h].apply(c[0], c[1]) === !1 &&
                a.stopOnFalse &&
                ((h = f.length), (c = !1));
          }
          a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
        },
        j = {
          add: function () {
            return (
              f &&
                (c && !b && ((h = f.length - 1), g.push(c)),
                (function d(b) {
                  r.each(b, function (b, c) {
                    r.isFunction(c)
                      ? (a.unique && j.has(c)) || f.push(c)
                      : c && c.length && "string" !== r.type(c) && d(c);
                  });
                })(arguments),
                c && !b && i()),
              this
            );
          },
          remove: function () {
            return (
              r.each(arguments, function (a, b) {
                var c;
                while ((c = r.inArray(b, f, c)) > -1)
                  f.splice(c, 1), c <= h && h--;
              }),
              this
            );
          },
          has: function (a) {
            return a ? r.inArray(a, f) > -1 : f.length > 0;
          },
          empty: function () {
            return f && (f = []), this;
          },
          disable: function () {
            return (e = g = []), (f = c = ""), this;
          },
          disabled: function () {
            return !f;
          },
          lock: function () {
            return (e = g = []), c || b || (f = c = ""), this;
          },
          locked: function () {
            return !!e;
          },
          fireWith: function (a, c) {
            return (
              e ||
                ((c = c || []),
                (c = [a, c.slice ? c.slice() : c]),
                g.push(c),
                b || i()),
              this
            );
          },
          fire: function () {
            return j.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!d;
          },
        };
      return j;
    };
  
    function N(a) {
      return a;
    }
  
    function O(a) {
      throw a;
    }
  
    function P(a, b, c, d) {
      var e;
      try {
        a && r.isFunction((e = a.promise))
          ? e.call(a).done(b).fail(c)
          : a && r.isFunction((e = a.then))
          ? e.call(a, b, c)
          : b.apply(void 0, [a].slice(d));
      } catch (a) {
        c.apply(void 0, [a]);
      }
    }
    r.extend({
      Deferred: function (b) {
        var c = [
            [
              "notify",
              "progress",
              r.Callbacks("memory"),
              r.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              r.Callbacks("once memory"),
              r.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              r.Callbacks("once memory"),
              r.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          d = "pending",
          e = {
            state: function () {
              return d;
            },
            always: function () {
              return f.done(arguments).fail(arguments), this;
            },
            catch: function (a) {
              return e.then(null, a);
            },
            pipe: function () {
              var a = arguments;
              return r
                .Deferred(function (b) {
                  r.each(c, function (c, d) {
                    var e = r.isFunction(a[d[4]]) && a[d[4]];
                    f[d[1]](function () {
                      var a = e && e.apply(this, arguments);
                      a && r.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(b.notify)
                            .done(b.resolve)
                            .fail(b.reject)
                        : b[d[0] + "With"](this, e ? [a] : arguments);
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            then: function (b, d, e) {
              var f = 0;
  
              function g(b, c, d, e) {
                return function () {
                  var h = this,
                    i = arguments,
                    j = function () {
                      var a, j;
                      if (!(b < f)) {
                        if (((a = d.apply(h, i)), a === c.promise()))
                          throw new TypeError("Thenable self-resolution");
                        (j =
                          a &&
                          ("object" == typeof a || "function" == typeof a) &&
                          a.then),
                          r.isFunction(j)
                            ? e
                              ? j.call(a, g(f, c, N, e), g(f, c, O, e))
                              : (f++,
                                j.call(
                                  a,
                                  g(f, c, N, e),
                                  g(f, c, O, e),
                                  g(f, c, N, c.notifyWith)
                                ))
                            : (d !== N && ((h = void 0), (i = [a])),
                              (e || c.resolveWith)(h, i));
                      }
                    },
                    k = e
                      ? j
                      : function () {
                          try {
                            j();
                          } catch (a) {
                            r.Deferred.exceptionHook &&
                              r.Deferred.exceptionHook(a, k.stackTrace),
                              b + 1 >= f &&
                                (d !== O && ((h = void 0), (i = [a])),
                                c.rejectWith(h, i));
                          }
                        };
                  b
                    ? k()
                    : (r.Deferred.getStackHook &&
                        (k.stackTrace = r.Deferred.getStackHook()),
                      a.setTimeout(k));
                };
              }
              return r
                .Deferred(function (a) {
                  c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)),
                    c[1][3].add(g(0, a, r.isFunction(b) ? b : N)),
                    c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? r.extend(a, e) : e;
            },
          },
          f = {};
        return (
          r.each(c, function (a, b) {
            var g = b[2],
              h = b[5];
            (e[b[1]] = g.add),
              h &&
                g.add(
                  function () {
                    d = h;
                  },
                  c[3 - a][2].disable,
                  c[0][2].lock
                ),
              g.add(b[3].fire),
              (f[b[0]] = function () {
                return (
                  f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                );
              }),
              (f[b[0] + "With"] = g.fireWith);
          }),
          e.promise(f),
          b && b.call(f, f),
          f
        );
      },
      when: function (a) {
        var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function (a) {
            return function (c) {
              (d[a] = this),
                (e[a] = arguments.length > 1 ? f.call(arguments) : c),
                --b || g.resolveWith(d, e);
            };
          };
        if (
          b <= 1 &&
          (P(a, g.done(h(c)).resolve, g.reject, !b),
          "pending" === g.state() || r.isFunction(e[c] && e[c].then))
        )
          return g.then();
        while (c--) P(e[c], h(c), g.reject);
        return g.promise();
      },
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (r.Deferred.exceptionHook = function (b, c) {
      a.console &&
        a.console.warn &&
        b &&
        Q.test(b.name) &&
        a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    }),
      (r.readyException = function (b) {
        a.setTimeout(function () {
          throw b;
        });
      });
    var R = r.Deferred();
    (r.fn.ready = function (a) {
      return (
        R.then(a)["catch"](function (a) {
          r.readyException(a);
        }),
        this
      );
    }),
      r.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (a) {
          (a === !0 ? --r.readyWait : r.isReady) ||
            ((r.isReady = !0),
            (a !== !0 && --r.readyWait > 0) || R.resolveWith(d, [r]));
        },
      }),
      (r.ready.then = R.then);
  
    function S() {
      d.removeEventListener("DOMContentLoaded", S),
        a.removeEventListener("load", S),
        r.ready();
    }
    "complete" === d.readyState ||
    ("loading" !== d.readyState && !d.documentElement.doScroll)
      ? a.setTimeout(r.ready)
      : (d.addEventListener("DOMContentLoaded", S),
        a.addEventListener("load", S));
    var T = function (a, b, c, d, e, f, g) {
        var h = 0,
          i = a.length,
          j = null == c;
        if ("object" === r.type(c)) {
          e = !0;
          for (h in c) T(a, b, h, c[h], !0, f, g);
        } else if (
          void 0 !== d &&
          ((e = !0),
          r.isFunction(d) || (g = !0),
          j &&
            (g
              ? (b.call(a, d), (b = null))
              : ((j = b),
                (b = function (a, b, c) {
                  return j.call(r(a), c);
                }))),
          b)
        )
          for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
      },
      U = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
      };
  
    function V() {
      this.expando = r.expando + V.uid++;
    }
    (V.uid = 1),
      (V.prototype = {
        cache: function (a) {
          var b = a[this.expando];
          return (
            b ||
              ((b = {}),
              U(a) &&
                (a.nodeType
                  ? (a[this.expando] = b)
                  : Object.defineProperty(a, this.expando, {
                      value: b,
                      configurable: !0,
                    }))),
            b
          );
        },
        set: function (a, b, c) {
          var d,
            e = this.cache(a);
          if ("string" == typeof b) e[r.camelCase(b)] = c;
          else for (d in b) e[r.camelCase(d)] = b[d];
          return e;
        },
        get: function (a, b) {
          return void 0 === b
            ? this.cache(a)
            : a[this.expando] && a[this.expando][r.camelCase(b)];
        },
        access: function (a, b, c) {
          return void 0 === b || (b && "string" == typeof b && void 0 === c)
            ? this.get(a, b)
            : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function (a, b) {
          var c,
            d = a[this.expando];
          if (void 0 !== d) {
            if (void 0 !== b) {
              Array.isArray(b)
                ? (b = b.map(r.camelCase))
                : ((b = r.camelCase(b)), (b = b in d ? [b] : b.match(L) || [])),
                (c = b.length);
              while (c--) delete d[b[c]];
            }
            (void 0 === b || r.isEmptyObject(d)) &&
              (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
          }
        },
        hasData: function (a) {
          var b = a[this.expando];
          return void 0 !== b && !r.isEmptyObject(b);
        },
      });
    var W = new V(),
      X = new V(),
      Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;
  
    function $(a) {
      return (
        "true" === a ||
        ("false" !== a &&
          ("null" === a
            ? null
            : a === +a + ""
            ? +a
            : Y.test(a)
            ? JSON.parse(a)
            : a))
      );
    }
  
    function _(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType)
        if (
          ((d = "data-" + b.replace(Z, "-$&").toLowerCase()),
          (c = a.getAttribute(d)),
          "string" == typeof c)
        ) {
          try {
            c = $(c);
          } catch (e) {}
          X.set(a, b, c);
        } else c = void 0;
      return c;
    }
    r.extend({
      hasData: function (a) {
        return X.hasData(a) || W.hasData(a);
      },
      data: function (a, b, c) {
        return X.access(a, b, c);
      },
      removeData: function (a, b) {
        X.remove(a, b);
      },
      _data: function (a, b, c) {
        return W.access(a, b, c);
      },
      _removeData: function (a, b) {
        W.remove(a, b);
      },
    }),
      r.fn.extend({
        data: function (a, b) {
          var c,
            d,
            e,
            f = this[0],
            g = f && f.attributes;
          if (void 0 === a) {
            if (
              this.length &&
              ((e = X.get(f)), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))
            ) {
              c = g.length;
              while (c--)
                g[c] &&
                  ((d = g[c].name),
                  0 === d.indexOf("data-") &&
                    ((d = r.camelCase(d.slice(5))), _(f, d, e[d])));
              W.set(f, "hasDataAttrs", !0);
            }
            return e;
          }
          return "object" == typeof a
            ? this.each(function () {
                X.set(this, a);
              })
            : T(
                this,
                function (b) {
                  var c;
                  if (f && void 0 === b) {
                    if (((c = X.get(f, a)), void 0 !== c)) return c;
                    if (((c = _(f, a)), void 0 !== c)) return c;
                  } else
                    this.each(function () {
                      X.set(this, a, b);
                    });
                },
                null,
                b,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (a) {
          return this.each(function () {
            X.remove(this, a);
          });
        },
      }),
      r.extend({
        queue: function (a, b, c) {
          var d;
          if (a)
            return (
              (b = (b || "fx") + "queue"),
              (d = W.get(a, b)),
              c &&
                (!d || Array.isArray(c)
                  ? (d = W.access(a, b, r.makeArray(c)))
                  : d.push(c)),
              d || []
            );
        },
        dequeue: function (a, b) {
          b = b || "fx";
          var c = r.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = r._queueHooks(a, b),
            g = function () {
              r.dequeue(a, b);
            };
          "inprogress" === e && ((e = c.shift()), d--),
            e &&
              ("fx" === b && c.unshift("inprogress"),
              delete f.stop,
              e.call(a, g, f)),
            !d && f && f.empty.fire();
        },
        _queueHooks: function (a, b) {
          var c = b + "queueHooks";
          return (
            W.get(a, c) ||
            W.access(a, c, {
              empty: r.Callbacks("once memory").add(function () {
                W.remove(a, [b + "queue", c]);
              }),
            })
          );
        },
      }),
      r.fn.extend({
        queue: function (a, b) {
          var c = 2;
          return (
            "string" != typeof a && ((b = a), (a = "fx"), c--),
            arguments.length < c
              ? r.queue(this[0], a)
              : void 0 === b
              ? this
              : this.each(function () {
                  var c = r.queue(this, a, b);
                  r._queueHooks(this, a),
                    "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
                })
          );
        },
        dequeue: function (a) {
          return this.each(function () {
            r.dequeue(this, a);
          });
        },
        clearQueue: function (a) {
          return this.queue(a || "fx", []);
        },
        promise: function (a, b) {
          var c,
            d = 1,
            e = r.Deferred(),
            f = this,
            g = this.length,
            h = function () {
              --d || e.resolveWith(f, [f]);
            };
          "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
          while (g--)
            (c = W.get(f[g], a + "queueHooks")),
              c && c.empty && (d++, c.empty.add(h));
          return h(), e.promise(b);
        },
      });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
      ca = ["Top", "Right", "Bottom", "Left"],
      da = function (a, b) {
        return (
          (a = b || a),
          "none" === a.style.display ||
            ("" === a.style.display &&
              r.contains(a.ownerDocument, a) &&
              "none" === r.css(a, "display"))
        );
      },
      ea = function (a, b, c, d) {
        var e,
          f,
          g = {};
        for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
      };
  
    function fa(a, b, c, d) {
      var e,
        f = 1,
        g = 20,
        h = d
          ? function () {
              return d.cur();
            }
          : function () {
              return r.css(a, b, "");
            },
        i = h(),
        j = (c && c[3]) || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || ("px" !== j && +i)) && ba.exec(r.css(a, b));
      if (k && k[3] !== j) {
        (j = j || k[3]), (c = c || []), (k = +i || 1);
        do {
          (f = f || ".5"), (k /= f), r.style(a, b, k + j);
        } while (f !== (f = h() / i) && 1 !== f && --g);
      }
      return (
        c &&
          ((k = +k || +i || 0),
          (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
          d && ((d.unit = j), (d.start = k), (d.end = e))),
        e
      );
    }
    var ga = {};
  
    function ha(a) {
      var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = ga[d];
      return e
        ? e
        : ((b = c.body.appendChild(c.createElement(d))),
          (e = r.css(b, "display")),
          b.parentNode.removeChild(b),
          "none" === e && (e = "block"),
          (ga[d] = e),
          e);
    }
  
    function ia(a, b) {
      for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
        (d = a[f]),
          d.style &&
            ((c = d.style.display),
            b
              ? ("none" === c &&
                  ((e[f] = W.get(d, "display") || null),
                  e[f] || (d.style.display = "")),
                "" === d.style.display && da(d) && (e[f] = ha(d)))
              : "none" !== c && ((e[f] = "none"), W.set(d, "display", c)));
      for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
      return a;
    }
    r.fn.extend({
      show: function () {
        return ia(this, !0);
      },
      hide: function () {
        return ia(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              da(this) ? r(this).show() : r(this).hide();
            });
      },
    });
    var ja = /^(?:checkbox|radio)$/i,
      ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      la = /^$|\/(?:java|ecma)script/i,
      ma = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (ma.optgroup = ma.option),
      (ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead),
      (ma.th = ma.td);
  
    function na(a, b) {
      var c;
      return (
        (c =
          "undefined" != typeof a.getElementsByTagName
            ? a.getElementsByTagName(b || "*")
            : "undefined" != typeof a.querySelectorAll
            ? a.querySelectorAll(b || "*")
            : []),
        void 0 === b || (b && B(a, b)) ? r.merge([a], c) : c
      );
    }
  
    function oa(a, b) {
      for (var c = 0, d = a.length; c < d; c++)
        W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
    var pa = /<|&#?\w+;/;
  
    function qa(a, b, c, d, e) {
      for (
        var f,
          g,
          h,
          i,
          j,
          k,
          l = b.createDocumentFragment(),
          m = [],
          n = 0,
          o = a.length;
        n < o;
        n++
      )
        if (((f = a[n]), f || 0 === f))
          if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
          else if (pa.test(f)) {
            (g = g || l.appendChild(b.createElement("div"))),
              (h = (ka.exec(f) || ["", ""])[1].toLowerCase()),
              (i = ma[h] || ma._default),
              (g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2]),
              (k = i[0]);
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
          } else m.push(b.createTextNode(f));
      (l.textContent = ""), (n = 0);
      while ((f = m[n++]))
        if (d && r.inArray(f, d) > -1) e && e.push(f);
        else if (
          ((j = r.contains(f.ownerDocument, f)),
          (g = na(l.appendChild(f), "script")),
          j && oa(g),
          c)
        ) {
          k = 0;
          while ((f = g[k++])) la.test(f.type || "") && c.push(f);
        }
      return l;
    }
    !(function () {
      var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");
      c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        (o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.innerHTML = "<textarea>x</textarea>"),
        (o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
    })();
    var ra = d.documentElement,
      sa = /^key/,
      ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ua = /^([^.]*)(?:\.(.+)|)/;
  
    function va() {
      return !0;
    }
  
    function wa() {
      return !1;
    }
  
    function xa() {
      try {
        return d.activeElement;
      } catch (a) {}
    }
  
    function ya(a, b, c, d, e, f) {
      var g, h;
      if ("object" == typeof b) {
        "string" != typeof c && ((d = d || c), (c = void 0));
        for (h in b) ya(a, h, c, d, b[h], f);
        return a;
      }
      if (
        (null == d && null == e
          ? ((e = c), (d = c = void 0))
          : null == e &&
            ("string" == typeof c
              ? ((e = d), (d = void 0))
              : ((e = d), (d = c), (c = void 0))),
        e === !1)
      )
        e = wa;
      else if (!e) return a;
      return (
        1 === f &&
          ((g = e),
          (e = function (a) {
            return r().off(a), g.apply(this, arguments);
          }),
          (e.guid = g.guid || (g.guid = r.guid++))),
        a.each(function () {
          r.event.add(this, b, e, d, c);
        })
      );
    }
    (r.event = {
      global: {},
      add: function (a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.get(a);
        if (q) {
          c.handler && ((f = c), (c = f.handler), (e = f.selector)),
            e && r.find.matchesSelector(ra, e),
            c.guid || (c.guid = r.guid++),
            (i = q.events) || (i = q.events = {}),
            (g = q.handle) ||
              (g = q.handle =
                function (b) {
                  return "undefined" != typeof r && r.event.triggered !== b.type
                    ? r.event.dispatch.apply(a, arguments)
                    : void 0;
                }),
            (b = (b || "").match(L) || [""]),
            (j = b.length);
          while (j--)
            (h = ua.exec(b[j]) || []),
              (n = p = h[1]),
              (o = (h[2] || "").split(".").sort()),
              n &&
                ((l = r.event.special[n] || {}),
                (n = (e ? l.delegateType : l.bindType) || n),
                (l = r.event.special[n] || {}),
                (k = r.extend(
                  {
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join("."),
                  },
                  f
                )),
                (m = i[n]) ||
                  ((m = i[n] = []),
                  (m.delegateCount = 0),
                  (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                    (a.addEventListener && a.addEventListener(n, g))),
                l.add &&
                  (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
                e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                (r.event.global[n] = !0));
        }
      },
      remove: function (a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.hasData(a) && W.get(a);
        if (q && (i = q.events)) {
          (b = (b || "").match(L) || [""]), (j = b.length);
          while (j--)
            if (
              ((h = ua.exec(b[j]) || []),
              (n = p = h[1]),
              (o = (h[2] || "").split(".").sort()),
              n)
            ) {
              (l = r.event.special[n] || {}),
                (n = (d ? l.delegateType : l.bindType) || n),
                (m = i[n] || []),
                (h =
                  h[2] &&
                  new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                (g = f = m.length);
              while (f--)
                (k = m[f]),
                  (!e && p !== k.origType) ||
                    (c && c.guid !== k.guid) ||
                    (h && !h.test(k.namespace)) ||
                    (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                    (m.splice(f, 1),
                    k.selector && m.delegateCount--,
                    l.remove && l.remove.call(a, k));
              g &&
                !m.length &&
                ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                  r.removeEvent(a, n, q.handle),
                delete i[n]);
            } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
          r.isEmptyObject(i) && W.remove(a, "handle events");
        }
      },
      dispatch: function (a) {
        var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (W.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};
        for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
        if (
          ((b.delegateTarget = this),
          !k.preDispatch || k.preDispatch.call(this, b) !== !1)
        ) {
          (h = r.event.handlers.call(this, b, j)), (c = 0);
          while ((f = h[c++]) && !b.isPropagationStopped()) {
            (b.currentTarget = f.elem), (d = 0);
            while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
              (b.rnamespace && !b.rnamespace.test(g.namespace)) ||
                ((b.handleObj = g),
                (b.data = g.data),
                (e = (
                  (r.event.special[g.origType] || {}).handle || g.handler
                ).apply(f.elem, i)),
                void 0 !== e &&
                  (b.result = e) === !1 &&
                  (b.preventDefault(), b.stopPropagation()));
          }
          return k.postDispatch && k.postDispatch.call(this, b), b.result;
        }
      },
      handlers: function (a, b) {
        var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;
        if (i && j.nodeType && !("click" === a.type && a.button >= 1))
          for (; j !== this; j = j.parentNode || this)
            if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
              for (f = [], g = {}, c = 0; c < i; c++)
                (d = b[c]),
                  (e = d.selector + " "),
                  void 0 === g[e] &&
                    (g[e] = d.needsContext
                      ? r(e, this).index(j) > -1
                      : r.find(e, this, null, [j]).length),
                  g[e] && f.push(d);
              f.length &&
                h.push({
                  elem: j,
                  handlers: f,
                });
            }
        return (
          (j = this),
          i < b.length &&
            h.push({
              elem: j,
              handlers: b.slice(i),
            }),
          h
        );
      },
      addProp: function (a, b) {
        Object.defineProperty(r.Event.prototype, a, {
          enumerable: !0,
          configurable: !0,
          get: r.isFunction(b)
            ? function () {
                if (this.originalEvent) return b(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[a];
              },
          set: function (b) {
            Object.defineProperty(this, a, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: b,
            });
          },
        });
      },
      fix: function (a) {
        return a[r.expando] ? a : new r.Event(a);
      },
      special: {
        load: {
          noBubble: !0,
        },
        focus: {
          trigger: function () {
            if (this !== xa() && this.focus) return this.focus(), !1;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === xa() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if ("checkbox" === this.type && this.click && B(this, "input"))
              return this.click(), !1;
          },
          _default: function (a) {
            return B(a.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (a) {
            void 0 !== a.result &&
              a.originalEvent &&
              (a.originalEvent.returnValue = a.result);
          },
        },
      },
    }),
      (r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
      }),
      (r.Event = function (a, b) {
        return this instanceof r.Event
          ? (a && a.type
              ? ((this.originalEvent = a),
                (this.type = a.type),
                (this.isDefaultPrevented =
                  a.defaultPrevented ||
                  (void 0 === a.defaultPrevented && a.returnValue === !1)
                    ? va
                    : wa),
                (this.target =
                  a.target && 3 === a.target.nodeType
                    ? a.target.parentNode
                    : a.target),
                (this.currentTarget = a.currentTarget),
                (this.relatedTarget = a.relatedTarget))
              : (this.type = a),
            b && r.extend(this, b),
            (this.timeStamp = (a && a.timeStamp) || r.now()),
            void (this[r.expando] = !0))
          : new r.Event(a, b);
      }),
      (r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: wa,
        isPropagationStopped: wa,
        isImmediatePropagationStopped: wa,
        isSimulated: !1,
        preventDefault: function () {
          var a = this.originalEvent;
          (this.isDefaultPrevented = va),
            a && !this.isSimulated && a.preventDefault();
        },
        stopPropagation: function () {
          var a = this.originalEvent;
          (this.isPropagationStopped = va),
            a && !this.isSimulated && a.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var a = this.originalEvent;
          (this.isImmediatePropagationStopped = va),
            a && !this.isSimulated && a.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      r.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (a) {
            var b = a.button;
            return null == a.which && sa.test(a.type)
              ? null != a.charCode
                ? a.charCode
                : a.keyCode
              : !a.which && void 0 !== b && ta.test(a.type)
              ? 1 & b
                ? 1
                : 2 & b
                ? 3
                : 4 & b
                ? 2
                : 0
              : a.which;
          },
        },
        r.event.addProp
      ),
      r.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (a, b) {
          r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
              var c,
                d = this,
                e = a.relatedTarget,
                f = a.handleObj;
              return (
                (e && (e === d || r.contains(d, e))) ||
                  ((a.type = f.origType),
                  (c = f.handler.apply(this, arguments)),
                  (a.type = b)),
                c
              );
            },
          };
        }
      ),
      r.fn.extend({
        on: function (a, b, c, d) {
          return ya(this, a, b, c, d);
        },
        one: function (a, b, c, d) {
          return ya(this, a, b, c, d, 1);
        },
        off: function (a, b, c) {
          var d, e;
          if (a && a.preventDefault && a.handleObj)
            return (
              (d = a.handleObj),
              r(a.delegateTarget).off(
                d.namespace ? d.origType + "." + d.namespace : d.origType,
                d.selector,
                d.handler
              ),
              this
            );
          if ("object" == typeof a) {
            for (e in a) this.off(e, b, a[e]);
            return this;
          }
          return (
            (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
            c === !1 && (c = wa),
            this.each(function () {
              r.event.remove(this, a, c, b);
            })
          );
        },
      });
    var za =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Aa = /<script|<style|<link/i,
      Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ca = /^true\/(.*)/,
      Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  
    function Ea(a, b) {
      return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr")
        ? r(">tbody", a)[0] || a
        : a;
    }
  
    function Fa(a) {
      return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
    }
  
    function Ga(a) {
      var b = Ca.exec(a.type);
      return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }
  
    function Ha(a, b) {
      var c, d, e, f, g, h, i, j;
      if (1 === b.nodeType) {
        if (
          W.hasData(a) &&
          ((f = W.access(a)), (g = W.set(b, f)), (j = f.events))
        ) {
          delete g.handle, (g.events = {});
          for (e in j)
            for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
        }
        X.hasData(a) && ((h = X.access(a)), (i = r.extend({}, h)), X.set(b, i));
      }
    }
  
    function Ia(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && ja.test(a.type)
        ? (b.checked = a.checked)
        : ("input" !== c && "textarea" !== c) ||
          (b.defaultValue = a.defaultValue);
    }
  
    function Ja(a, b, c, d) {
      b = g.apply([], b);
      var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);
      if (s || (m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)))
        return a.each(function (e) {
          var f = a.eq(e);
          s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
        });
      if (
        m &&
        ((e = qa(b, a[0].ownerDocument, !1, a, d)),
        (f = e.firstChild),
        1 === e.childNodes.length && (e = f),
        f || d)
      ) {
        for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)
          (j = e),
            l !== n &&
              ((j = r.clone(j, !0, !0)), i && r.merge(h, na(j, "script"))),
            c.call(a[l], j, l);
        if (i)
          for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++)
            (j = h[l]),
              la.test(j.type || "") &&
                !W.access(j, "globalEval") &&
                r.contains(k, j) &&
                (j.src
                  ? r._evalUrl && r._evalUrl(j.src)
                  : p(j.textContent.replace(Da, ""), k));
      }
      return a;
    }
  
    function Ka(a, b, c) {
      for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
        c || 1 !== d.nodeType || r.cleanData(na(d)),
          d.parentNode &&
            (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")),
            d.parentNode.removeChild(d));
      return a;
    }
    r.extend({
      htmlPrefilter: function (a) {
        return a.replace(za, "<$1></$2>");
      },
      clone: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);
        if (
          !(
            o.noCloneChecked ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            r.isXMLDoc(a)
          )
        )
          for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)
            Ia(f[d], g[d]);
        if (b)
          if (c)
            for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++)
              Ha(f[d], g[d]);
          else Ha(a, h);
        return (
          (g = na(h, "script")), g.length > 0 && oa(g, !i && na(a, "script")), h
        );
      },
      cleanData: function (a) {
        for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
          if (U(c)) {
            if ((b = c[W.expando])) {
              if (b.events)
                for (d in b.events)
                  e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
              c[W.expando] = void 0;
            }
            c[X.expando] && (c[X.expando] = void 0);
          }
      },
    }),
      r.fn.extend({
        detach: function (a) {
          return Ka(this, a, !0);
        },
        remove: function (a) {
          return Ka(this, a);
        },
        text: function (a) {
          return T(
            this,
            function (a) {
              return void 0 === a
                ? r.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = a);
                  });
            },
            null,
            a,
            arguments.length
          );
        },
        append: function () {
          return Ja(this, arguments, function (a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var b = Ea(this, a);
              b.appendChild(a);
            }
          });
        },
        prepend: function () {
          return Ja(this, arguments, function (a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var b = Ea(this, a);
              b.insertBefore(a, b.firstChild);
            }
          });
        },
        before: function () {
          return Ja(this, arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this);
          });
        },
        after: function () {
          return Ja(this, arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
          });
        },
        empty: function () {
          for (var a, b = 0; null != (a = this[b]); b++)
            1 === a.nodeType && (r.cleanData(na(a, !1)), (a.textContent = ""));
          return this;
        },
        clone: function (a, b) {
          return (
            (a = null != a && a),
            (b = null == b ? a : b),
            this.map(function () {
              return r.clone(this, a, b);
            })
          );
        },
        html: function (a) {
          return T(
            this,
            function (a) {
              var b = this[0] || {},
                c = 0,
                d = this.length;
              if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
              if (
                "string" == typeof a &&
                !Aa.test(a) &&
                !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]
              ) {
                a = r.htmlPrefilter(a);
                try {
                  for (; c < d; c++)
                    (b = this[c] || {}),
                      1 === b.nodeType &&
                        (r.cleanData(na(b, !1)), (b.innerHTML = a));
                  b = 0;
                } catch (e) {}
              }
              b && this.empty().append(a);
            },
            null,
            a,
            arguments.length
          );
        },
        replaceWith: function () {
          var a = [];
          return Ja(
            this,
            arguments,
            function (b) {
              var c = this.parentNode;
              r.inArray(this, a) < 0 &&
                (r.cleanData(na(this)), c && c.replaceChild(b, this));
            },
            a
          );
        },
      }),
      r.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (a, b) {
          r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
              (c = g === f ? this : this.clone(!0)),
                r(e[g])[b](c),
                h.apply(d, c.get());
            return this.pushStack(d);
          };
        }
      );
    var La = /^margin/,
      Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
      Na = function (b) {
        var c = b.ownerDocument.defaultView;
        return (c && c.opener) || (c = a), c.getComputedStyle(b);
      };
    !(function () {
      function b() {
        if (i) {
          (i.style.cssText =
            "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
            (i.innerHTML = ""),
            ra.appendChild(h);
          var b = a.getComputedStyle(i);
          (c = "1%" !== b.top),
            (g = "2px" === b.marginLeft),
            (e = "4px" === b.width),
            (i.style.marginRight = "50%"),
            (f = "4px" === b.marginRight),
            ra.removeChild(h),
            (i = null);
        }
      }
      var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");
      i.style &&
        ((i.style.backgroundClip = "content-box"),
        (i.cloneNode(!0).style.backgroundClip = ""),
        (o.clearCloneStyle = "content-box" === i.style.backgroundClip),
        (h.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        h.appendChild(i),
        r.extend(o, {
          pixelPosition: function () {
            return b(), c;
          },
          boxSizingReliable: function () {
            return b(), e;
          },
          pixelMarginRight: function () {
            return b(), f;
          },
          reliableMarginLeft: function () {
            return b(), g;
          },
        }));
    })();
  
    function Oa(a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.style;
      return (
        (c = c || Na(a)),
        c &&
          ((g = c.getPropertyValue(b) || c[b]),
          "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
          !o.pixelMarginRight() &&
            Ma.test(g) &&
            La.test(b) &&
            ((d = h.width),
            (e = h.minWidth),
            (f = h.maxWidth),
            (h.minWidth = h.maxWidth = h.width = g),
            (g = c.width),
            (h.width = d),
            (h.minWidth = e),
            (h.maxWidth = f))),
        void 0 !== g ? g + "" : g
      );
    }
  
    function Pa(a, b) {
      return {
        get: function () {
          return a()
            ? void delete this.get
            : (this.get = b).apply(this, arguments);
        },
      };
    }
    var Qa = /^(none|table(?!-c[ea]).+)/,
      Ra = /^--/,
      Sa = {
        position: "absolute",
        visibility: "hidden",
        display: "block",
      },
      Ta = {
        letterSpacing: "0",
        fontWeight: "400",
      },
      Ua = ["Webkit", "Moz", "ms"],
      Va = d.createElement("div").style;
  
    function Wa(a) {
      if (a in Va) return a;
      var b = a[0].toUpperCase() + a.slice(1),
        c = Ua.length;
      while (c--) if (((a = Ua[c] + b), a in Va)) return a;
    }
  
    function Xa(a) {
      var b = r.cssProps[a];
      return b || (b = r.cssProps[a] = Wa(a) || a), b;
    }
  
    function Ya(a, b, c) {
      var d = ba.exec(b);
      return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
  
    function Za(a, b, c, d, e) {
      var f,
        g = 0;
      for (
        f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        f < 4;
        f += 2
      )
        "margin" === c && (g += r.css(a, c + ca[f], !0, e)),
          d
            ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)),
              "margin" !== c &&
                (g -= r.css(a, "border" + ca[f] + "Width", !0, e)))
            : ((g += r.css(a, "padding" + ca[f], !0, e)),
              "padding" !== c &&
                (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
      return g;
    }
  
    function $a(a, b, c) {
      var d,
        e = Na(a),
        f = Oa(a, b, e),
        g = "border-box" === r.css(a, "boxSizing", !1, e);
      return Ma.test(f)
        ? f
        : ((d = g && (o.boxSizingReliable() || f === a.style[b])),
          "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]),
          (f = parseFloat(f) || 0),
          f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
    }
    r.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = Oa(a, "opacity");
              return "" === c ? "1" : c;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {
        float: "cssFloat",
      },
      style: function (a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e,
            f,
            g,
            h = r.camelCase(b),
            i = Ra.test(b),
            j = a.style;
          return (
            i || (b = Xa(h)),
            (g = r.cssHooks[b] || r.cssHooks[h]),
            void 0 === c
              ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                ? e
                : j[b]
              : ((f = typeof c),
                "string" === f &&
                  (e = ba.exec(c)) &&
                  e[1] &&
                  ((c = fa(a, b, e)), (f = "number")),
                null != c &&
                  c === c &&
                  ("number" === f &&
                    (c += (e && e[3]) || (r.cssNumber[h] ? "" : "px")),
                  o.clearCloneStyle ||
                    "" !== c ||
                    0 !== b.indexOf("background") ||
                    (j[b] = "inherit"),
                  (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                    (i ? j.setProperty(b, c) : (j[b] = c))),
                void 0)
          );
        }
      },
      css: function (a, b, c, d) {
        var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b);
        return (
          i || (b = Xa(h)),
          (g = r.cssHooks[b] || r.cssHooks[h]),
          g && "get" in g && (e = g.get(a, !0, c)),
          void 0 === e && (e = Oa(a, b, d)),
          "normal" === e && b in Ta && (e = Ta[b]),
          "" === c || c
            ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
            : e
        );
      },
    }),
      r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = {
          get: function (a, c, d) {
            if (c)
              return !Qa.test(r.css(a, "display")) ||
                (a.getClientRects().length && a.getBoundingClientRect().width)
                ? $a(a, b, d)
                : ea(a, Sa, function () {
                    return $a(a, b, d);
                  });
          },
          set: function (a, c, d) {
            var e,
              f = d && Na(a),
              g =
                d &&
                Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
            return (
              g &&
                (e = ba.exec(c)) &&
                "px" !== (e[3] || "px") &&
                ((a.style[b] = c), (c = r.css(a, b))),
              Ya(a, c, g)
            );
          },
        };
      }),
      (r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
        if (b)
          return (
            (parseFloat(Oa(a, "marginLeft")) ||
              a.getBoundingClientRect().left -
                ea(
                  a,
                  {
                    marginLeft: 0,
                  },
                  function () {
                    return a.getBoundingClientRect().left;
                  }
                )) + "px"
          );
      })),
      r.each(
        {
          margin: "",
          padding: "",
          border: "Width",
        },
        function (a, b) {
          (r.cssHooks[a + b] = {
            expand: function (c) {
              for (
                var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
                d < 4;
                d++
              )
                e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
              return e;
            },
          }),
            La.test(a) || (r.cssHooks[a + b].set = Ya);
        }
      ),
      r.fn.extend({
        css: function (a, b) {
          return T(
            this,
            function (a, b, c) {
              var d,
                e,
                f = {},
                g = 0;
              if (Array.isArray(b)) {
                for (d = Na(a), e = b.length; g < e; g++)
                  f[b[g]] = r.css(a, b[g], !1, d);
                return f;
              }
              return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
            },
            a,
            b,
            arguments.length > 1
          );
        },
      });
  
    function _a(a, b, c, d, e) {
      return new _a.prototype.init(a, b, c, d, e);
    }
    (r.Tween = _a),
      (_a.prototype = {
        constructor: _a,
        init: function (a, b, c, d, e, f) {
          (this.elem = a),
            (this.prop = c),
            (this.easing = e || r.easing._default),
            (this.options = b),
            (this.start = this.now = this.cur()),
            (this.end = d),
            (this.unit = f || (r.cssNumber[c] ? "" : "px"));
        },
        cur: function () {
          var a = _a.propHooks[this.prop];
          return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
        },
        run: function (a) {
          var b,
            c = _a.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = b =
                  r.easing[this.easing](
                    a,
                    this.options.duration * a,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = b = a),
            (this.now = (this.end - this.start) * b + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : _a.propHooks._default.set(this),
            this
          );
        },
      }),
      (_a.prototype.init.prototype = _a.prototype),
      (_a.propHooks = {
        _default: {
          get: function (a) {
            var b;
            return 1 !== a.elem.nodeType ||
              (null != a.elem[a.prop] && null == a.elem.style[a.prop])
              ? a.elem[a.prop]
              : ((b = r.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
          },
          set: function (a) {
            r.fx.step[a.prop]
              ? r.fx.step[a.prop](a)
              : 1 !== a.elem.nodeType ||
                (null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop])
              ? (a.elem[a.prop] = a.now)
              : r.style(a.elem, a.prop, a.now + a.unit);
          },
        },
      }),
      (_a.propHooks.scrollTop = _a.propHooks.scrollLeft =
        {
          set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
          },
        }),
      (r.easing = {
        linear: function (a) {
          return a;
        },
        swing: function (a) {
          return 0.5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (r.fx = _a.prototype.init),
      (r.fx.step = {});
    var ab,
      bb,
      cb = /^(?:toggle|show|hide)$/,
      db = /queueHooks$/;
  
    function eb() {
      bb &&
        (d.hidden === !1 && a.requestAnimationFrame
          ? a.requestAnimationFrame(eb)
          : a.setTimeout(eb, r.fx.interval),
        r.fx.tick());
    }
  
    function fb() {
      return (
        a.setTimeout(function () {
          ab = void 0;
        }),
        (ab = r.now())
      );
    }
  
    function gb(a, b) {
      var c,
        d = 0,
        e = {
          height: a,
        };
      for (b = b ? 1 : 0; d < 4; d += 2 - b)
        (c = ca[d]), (e["margin" + c] = e["padding" + c] = a);
      return b && (e.opacity = e.width = a), e;
    }
  
    function hb(a, b, c) {
      for (
        var d,
          e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]),
          f = 0,
          g = e.length;
        f < g;
        f++
      )
        if ((d = e[f].call(c, b, a))) return d;
    }
  
    function ib(a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && da(a),
        q = W.get(a, "fxshow");
      c.queue ||
        ((g = r._queueHooks(a, "fx")),
        null == g.unqueued &&
          ((g.unqueued = 0),
          (h = g.empty.fire),
          (g.empty.fire = function () {
            g.unqueued || h();
          })),
        g.unqueued++,
        m.always(function () {
          m.always(function () {
            g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
          });
        }));
      for (d in b)
        if (((e = b[d]), cb.test(e))) {
          if (
            (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
          ) {
            if ("show" !== e || !q || void 0 === q[d]) continue;
            p = !0;
          }
          n[d] = (q && q[d]) || r.style(a, d);
        }
      if (((i = !r.isEmptyObject(b)), i || !r.isEmptyObject(n))) {
        l &&
          1 === a.nodeType &&
          ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
          (j = q && q.display),
          null == j && (j = W.get(a, "display")),
          (k = r.css(a, "display")),
          "none" === k &&
            (j
              ? (k = j)
              : (ia([a], !0),
                (j = a.style.display || j),
                (k = r.css(a, "display")),
                ia([a]))),
          ("inline" === k || ("inline-block" === k && null != j)) &&
            "none" === r.css(a, "float") &&
            (i ||
              (m.done(function () {
                o.display = j;
              }),
              null == j && ((k = o.display), (j = "none" === k ? "" : k))),
            (o.display = "inline-block"))),
          c.overflow &&
            ((o.overflow = "hidden"),
            m.always(function () {
              (o.overflow = c.overflow[0]),
                (o.overflowX = c.overflow[1]),
                (o.overflowY = c.overflow[2]);
            })),
          (i = !1);
        for (d in n)
          i ||
            (q
              ? "hidden" in q && (p = q.hidden)
              : (q = W.access(a, "fxshow", {
                  display: j,
                })),
            f && (q.hidden = !p),
            p && ia([a], !0),
            m.done(function () {
              p || ia([a]), W.remove(a, "fxshow");
              for (d in n) r.style(a, d, n[d]);
            })),
            (i = hb(p ? q[d] : 0, d, m)),
            d in q || ((q[d] = i.start), p && ((i.end = i.start), (i.start = 0)));
      }
    }
  
    function jb(a, b) {
      var c, d, e, f, g;
      for (c in a)
        if (
          ((d = r.camelCase(c)),
          (e = b[d]),
          (f = a[c]),
          Array.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
          c !== d && ((a[d] = f), delete a[c]),
          (g = r.cssHooks[d]),
          g && "expand" in g)
        ) {
          (f = g.expand(f)), delete a[d];
          for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
        } else b[d] = e;
    }
  
    function kb(a, b, c) {
      var d,
        e,
        f = 0,
        g = kb.prefilters.length,
        h = r.Deferred().always(function () {
          delete i.elem;
        }),
        i = function () {
          if (e) return !1;
          for (
            var b = ab || fb(),
              c = Math.max(0, j.startTime + j.duration - b),
              d = c / j.duration || 0,
              f = 1 - d,
              g = 0,
              i = j.tweens.length;
            g < i;
            g++
          )
            j.tweens[g].run(f);
          return (
            h.notifyWith(a, [j, f, c]),
            f < 1 && i
              ? c
              : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
          );
        },
        j = h.promise({
          elem: a,
          props: r.extend({}, b),
          opts: r.extend(
            !0,
            {
              specialEasing: {},
              easing: r.easing._default,
            },
            c
          ),
          originalProperties: b,
          originalOptions: c,
          startTime: ab || fb(),
          duration: c.duration,
          tweens: [],
          createTween: function (b, c) {
            var d = r.Tween(
              a,
              j.opts,
              b,
              c,
              j.opts.specialEasing[b] || j.opts.easing
            );
            return j.tweens.push(d), d;
          },
          stop: function (b) {
            var c = 0,
              d = b ? j.tweens.length : 0;
            if (e) return this;
            for (e = !0; c < d; c++) j.tweens[c].run(1);
            return (
              b
                ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
                : h.rejectWith(a, [j, b]),
              this
            );
          },
        }),
        k = j.props;
      for (jb(k, j.opts.specialEasing); f < g; f++)
        if ((d = kb.prefilters[f].call(j, a, k, j.opts)))
          return (
            r.isFunction(d.stop) &&
              (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
            d
          );
      return (
        r.map(k, hb, j),
        r.isFunction(j.opts.start) && j.opts.start.call(a, j),
        j
          .progress(j.opts.progress)
          .done(j.opts.done, j.opts.complete)
          .fail(j.opts.fail)
          .always(j.opts.always),
        r.fx.timer(
          r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue,
          })
        ),
        j
      );
    }
    (r.Animation = r.extend(kb, {
      tweeners: {
        "*": [
          function (a, b) {
            var c = this.createTween(a, b);
            return fa(c.elem, a, ba.exec(b), c), c;
          },
        ],
      },
      tweener: function (a, b) {
        r.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(L));
        for (var c, d = 0, e = a.length; d < e; d++)
          (c = a[d]),
            (kb.tweeners[c] = kb.tweeners[c] || []),
            kb.tweeners[c].unshift(b);
      },
      prefilters: [ib],
      prefilter: function (a, b) {
        b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
      },
    })),
      (r.speed = function (a, b, c) {
        var d =
          a && "object" == typeof a
            ? r.extend({}, a)
            : {
                complete: c || (!c && b) || (r.isFunction(a) && a),
                duration: a,
                easing: (c && b) || (b && !r.isFunction(b) && b),
              };
        return (
          r.fx.off
            ? (d.duration = 0)
            : "number" != typeof d.duration &&
              (d.duration in r.fx.speeds
                ? (d.duration = r.fx.speeds[d.duration])
                : (d.duration = r.fx.speeds._default)),
          (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
          (d.old = d.complete),
          (d.complete = function () {
            r.isFunction(d.old) && d.old.call(this),
              d.queue && r.dequeue(this, d.queue);
          }),
          d
        );
      }),
      r.fn.extend({
        fadeTo: function (a, b, c, d) {
          return this.filter(da).css("opacity", 0).show().end().animate(
            {
              opacity: b,
            },
            a,
            c,
            d
          );
        },
        animate: function (a, b, c, d) {
          var e = r.isEmptyObject(a),
            f = r.speed(b, c, d),
            g = function () {
              var b = kb(this, r.extend({}, a), f);
              (e || W.get(this, "finish")) && b.stop(!0);
            };
          return (
            (g.finish = g),
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
          );
        },
        stop: function (a, b, c) {
          var d = function (a) {
            var b = a.stop;
            delete a.stop, b(c);
          };
          return (
            "string" != typeof a && ((c = b), (b = a), (a = void 0)),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function () {
              var b = !0,
                e = null != a && a + "queueHooks",
                f = r.timers,
                g = W.get(this);
              if (e) g[e] && g[e].stop && d(g[e]);
              else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
              for (e = f.length; e--; )
                f[e].elem !== this ||
                  (null != a && f[e].queue !== a) ||
                  (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
              (!b && c) || r.dequeue(this, a);
            })
          );
        },
        finish: function (a) {
          return (
            a !== !1 && (a = a || "fx"),
            this.each(function () {
              var b,
                c = W.get(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = r.timers,
                g = d ? d.length : 0;
              for (
                c.finish = !0,
                  r.queue(this, a, []),
                  e && e.stop && e.stop.call(this, !0),
                  b = f.length;
                b--;
  
              )
                f[b].elem === this &&
                  f[b].queue === a &&
                  (f[b].anim.stop(!0), f.splice(b, 1));
              for (b = 0; b < g; b++)
                d[b] && d[b].finish && d[b].finish.call(this);
              delete c.finish;
            })
          );
        },
      }),
      r.each(["toggle", "show", "hide"], function (a, b) {
        var c = r.fn[b];
        r.fn[b] = function (a, d, e) {
          return null == a || "boolean" == typeof a
            ? c.apply(this, arguments)
            : this.animate(gb(b, !0), a, d, e);
        };
      }),
      r.each(
        {
          slideDown: gb("show"),
          slideUp: gb("hide"),
          slideToggle: gb("toggle"),
          fadeIn: {
            opacity: "show",
          },
          fadeOut: {
            opacity: "hide",
          },
          fadeToggle: {
            opacity: "toggle",
          },
        },
        function (a, b) {
          r.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
          };
        }
      ),
      (r.timers = []),
      (r.fx.tick = function () {
        var a,
          b = 0,
          c = r.timers;
        for (ab = r.now(); b < c.length; b++)
          (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
        c.length || r.fx.stop(), (ab = void 0);
      }),
      (r.fx.timer = function (a) {
        r.timers.push(a), r.fx.start();
      }),
      (r.fx.interval = 13),
      (r.fx.start = function () {
        bb || ((bb = !0), eb());
      }),
      (r.fx.stop = function () {
        bb = null;
      }),
      (r.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400,
      }),
      (r.fn.delay = function (b, c) {
        return (
          (b = r.fx ? r.fx.speeds[b] || b : b),
          (c = c || "fx"),
          this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
              a.clearTimeout(e);
            };
          })
        );
      }),
      (function () {
        var a = d.createElement("input"),
          b = d.createElement("select"),
          c = b.appendChild(d.createElement("option"));
        (a.type = "checkbox"),
          (o.checkOn = "" !== a.value),
          (o.optSelected = c.selected),
          (a = d.createElement("input")),
          (a.value = "t"),
          (a.type = "radio"),
          (o.radioValue = "t" === a.value);
      })();
    var lb,
      mb = r.expr.attrHandle;
    r.fn.extend({
      attr: function (a, b) {
        return T(this, r.attr, a, b, arguments.length > 1);
      },
      removeAttr: function (a) {
        return this.each(function () {
          r.removeAttr(this, a);
        });
      },
    }),
      r.extend({
        attr: function (a, b, c) {
          var d,
            e,
            f = a.nodeType;
          if (3 !== f && 8 !== f && 2 !== f)
            return "undefined" == typeof a.getAttribute
              ? r.prop(a, b, c)
              : ((1 === f && r.isXMLDoc(a)) ||
                  (e =
                    r.attrHooks[b.toLowerCase()] ||
                    (r.expr.match.bool.test(b) ? lb : void 0)),
                void 0 !== c
                  ? null === c
                    ? void r.removeAttr(a, b)
                    : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                    ? d
                    : (a.setAttribute(b, c + ""), c)
                  : e && "get" in e && null !== (d = e.get(a, b))
                  ? d
                  : ((d = r.find.attr(a, b)), null == d ? void 0 : d));
        },
        attrHooks: {
          type: {
            set: function (a, b) {
              if (!o.radioValue && "radio" === b && B(a, "input")) {
                var c = a.value;
                return a.setAttribute("type", b), c && (a.value = c), b;
              }
            },
          },
        },
        removeAttr: function (a, b) {
          var c,
            d = 0,
            e = b && b.match(L);
          if (e && 1 === a.nodeType) while ((c = e[d++])) a.removeAttribute(c);
        },
      }),
      (lb = {
        set: function (a, b, c) {
          return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
        },
      }),
      r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = mb[b] || r.find.attr;
        mb[b] = function (a, b, d) {
          var e,
            f,
            g = b.toLowerCase();
          return (
            d ||
              ((f = mb[g]),
              (mb[g] = e),
              (e = null != c(a, b, d) ? g : null),
              (mb[g] = f)),
            e
          );
        };
      });
    var nb = /^(?:input|select|textarea|button)$/i,
      ob = /^(?:a|area)$/i;
    r.fn.extend({
      prop: function (a, b) {
        return T(this, r.prop, a, b, arguments.length > 1);
      },
      removeProp: function (a) {
        return this.each(function () {
          delete this[r.propFix[a] || a];
        });
      },
    }),
      r.extend({
        prop: function (a, b, c) {
          var d,
            e,
            f = a.nodeType;
          if (3 !== f && 8 !== f && 2 !== f)
            return (
              (1 === f && r.isXMLDoc(a)) ||
                ((b = r.propFix[b] || b), (e = r.propHooks[b])),
              void 0 !== c
                ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a[b] = c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : a[b]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (a) {
              var b = r.find.attr(a, "tabindex");
              return b
                ? parseInt(b, 10)
                : nb.test(a.nodeName) || (ob.test(a.nodeName) && a.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: {
          for: "htmlFor",
          class: "className",
        },
      }),
      o.optSelected ||
        (r.propHooks.selected = {
          get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
          },
          set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
          },
        }),
      r.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          r.propFix[this.toLowerCase()] = this;
        }
      );
  
    function pb(a) {
      var b = a.match(L) || [];
      return b.join(" ");
    }
  
    function qb(a) {
      return (a.getAttribute && a.getAttribute("class")) || "";
    }
    r.fn.extend({
      addClass: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
        if (r.isFunction(a))
          return this.each(function (b) {
            r(this).addClass(a.call(this, b, qb(this)));
          });
        if ("string" == typeof a && a) {
          b = a.match(L) || [];
          while ((c = this[i++]))
            if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
              g = 0;
              while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
              (h = pb(d)), e !== h && c.setAttribute("class", h);
            }
        }
        return this;
      },
      removeClass: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
        if (r.isFunction(a))
          return this.each(function (b) {
            r(this).removeClass(a.call(this, b, qb(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof a && a) {
          b = a.match(L) || [];
          while ((c = this[i++]))
            if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
              g = 0;
              while ((f = b[g++]))
                while (d.indexOf(" " + f + " ") > -1)
                  d = d.replace(" " + f + " ", " ");
              (h = pb(d)), e !== h && c.setAttribute("class", h);
            }
        }
        return this;
      },
      toggleClass: function (a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c
          ? b
            ? this.addClass(a)
            : this.removeClass(a)
          : r.isFunction(a)
          ? this.each(function (c) {
              r(this).toggleClass(a.call(this, c, qb(this), b), b);
            })
          : this.each(function () {
              var b, d, e, f;
              if ("string" === c) {
                (d = 0), (e = r(this)), (f = a.match(L) || []);
                while ((b = f[d++]))
                  e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
              } else (void 0 !== a && "boolean" !== c) || ((b = qb(this)), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
            });
      },
      hasClass: function (a) {
        var b,
          c,
          d = 0;
        b = " " + a + " ";
        while ((c = this[d++]))
          if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)
            return !0;
        return !1;
      },
    });
    var rb = /\r/g;
    r.fn.extend({
      val: function (a) {
        var b,
          c,
          d,
          e = this[0];
        {
          if (arguments.length)
            return (
              (d = r.isFunction(a)),
              this.each(function (c) {
                var e;
                1 === this.nodeType &&
                  ((e = d ? a.call(this, c, r(this).val()) : a),
                  null == e
                    ? (e = "")
                    : "number" == typeof e
                    ? (e += "")
                    : Array.isArray(e) &&
                      (e = r.map(e, function (a) {
                        return null == a ? "" : a + "";
                      })),
                  (b =
                    r.valHooks[this.type] ||
                    r.valHooks[this.nodeName.toLowerCase()]),
                  (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                    (this.value = e));
              })
            );
          if (e)
            return (
              (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()]),
              b && "get" in b && void 0 !== (c = b.get(e, "value"))
                ? c
                : ((c = e.value),
                  "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            );
        }
      },
    }),
      r.extend({
        valHooks: {
          option: {
            get: function (a) {
              var b = r.find.attr(a, "value");
              return null != b ? b : pb(r.text(a));
            },
          },
          select: {
            get: function (a) {
              var b,
                c,
                d,
                e = a.options,
                f = a.selectedIndex,
                g = "select-one" === a.type,
                h = g ? null : [],
                i = g ? f + 1 : e.length;
              for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                if (
                  ((c = e[d]),
                  (c.selected || d === f) &&
                    !c.disabled &&
                    (!c.parentNode.disabled || !B(c.parentNode, "optgroup")))
                ) {
                  if (((b = r(c).val()), g)) return b;
                  h.push(b);
                }
              return h;
            },
            set: function (a, b) {
              var c,
                d,
                e = a.options,
                f = r.makeArray(b),
                g = e.length;
              while (g--)
                (d = e[g]),
                  (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) &&
                    (c = !0);
              return c || (a.selectedIndex = -1), f;
            },
          },
        },
      }),
      r.each(["radio", "checkbox"], function () {
        (r.valHooks[this] = {
          set: function (a, b) {
            if (Array.isArray(b))
              return (a.checked = r.inArray(r(a).val(), b) > -1);
          },
        }),
          o.checkOn ||
            (r.valHooks[this].get = function (a) {
              return null === a.getAttribute("value") ? "on" : a.value;
            });
      });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
      trigger: function (b, c, e, f) {
        var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];
        if (
          ((h = i = e = e || d),
          3 !== e.nodeType &&
            8 !== e.nodeType &&
            !sb.test(p + r.event.triggered) &&
            (p.indexOf(".") > -1 &&
              ((q = p.split(".")), (p = q.shift()), q.sort()),
            (k = p.indexOf(":") < 0 && "on" + p),
            (b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b)),
            (b.isTrigger = f ? 2 : 3),
            (b.namespace = q.join(".")),
            (b.rnamespace = b.namespace
              ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (b.result = void 0),
            b.target || (b.target = e),
            (c = null == c ? [b] : r.makeArray(c, [b])),
            (n = r.event.special[p] || {}),
            f || !n.trigger || n.trigger.apply(e, c) !== !1))
        ) {
          if (!f && !n.noBubble && !r.isWindow(e)) {
            for (
              j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode);
              h;
              h = h.parentNode
            )
              o.push(h), (i = h);
            i === (e.ownerDocument || d) &&
              o.push(i.defaultView || i.parentWindow || a);
          }
          g = 0;
          while ((h = o[g++]) && !b.isPropagationStopped())
            (b.type = g > 1 ? j : n.bindType || p),
              (m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle")),
              m && m.apply(h, c),
              (m = k && h[k]),
              m &&
                m.apply &&
                U(h) &&
                ((b.result = m.apply(h, c)),
                b.result === !1 && b.preventDefault());
          return (
            (b.type = p),
            f ||
              b.isDefaultPrevented() ||
              (n._default && n._default.apply(o.pop(), c) !== !1) ||
              !U(e) ||
              (k &&
                r.isFunction(e[p]) &&
                !r.isWindow(e) &&
                ((i = e[k]),
                i && (e[k] = null),
                (r.event.triggered = p),
                e[p](),
                (r.event.triggered = void 0),
                i && (e[k] = i))),
            b.result
          );
        }
      },
      simulate: function (a, b, c) {
        var d = r.extend(new r.Event(), c, {
          type: a,
          isSimulated: !0,
        });
        r.event.trigger(d, null, b);
      },
    }),
      r.fn.extend({
        trigger: function (a, b) {
          return this.each(function () {
            r.event.trigger(a, b, this);
          });
        },
        triggerHandler: function (a, b) {
          var c = this[0];
          if (c) return r.event.trigger(a, b, c, !0);
        },
      }),
      r.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (a, b) {
          r.fn[b] = function (a, c) {
            return arguments.length > 0
              ? this.on(b, null, a, c)
              : this.trigger(b);
          };
        }
      ),
      r.fn.extend({
        hover: function (a, b) {
          return this.mouseenter(a).mouseleave(b || a);
        },
      }),
      (o.focusin = "onfocusin" in a),
      o.focusin ||
        r.each(
          {
            focus: "focusin",
            blur: "focusout",
          },
          function (a, b) {
            var c = function (a) {
              r.event.simulate(b, a.target, r.event.fix(a));
            };
            r.event.special[b] = {
              setup: function () {
                var d = this.ownerDocument || this,
                  e = W.access(d, b);
                e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
              },
              teardown: function () {
                var d = this.ownerDocument || this,
                  e = W.access(d, b) - 1;
                e
                  ? W.access(d, b, e)
                  : (d.removeEventListener(a, c, !0), W.remove(d, b));
              },
            };
          }
        );
    var tb = a.location,
      ub = r.now(),
      vb = /\?/;
    r.parseXML = function (b) {
      var c;
      if (!b || "string" != typeof b) return null;
      try {
        c = new a.DOMParser().parseFromString(b, "text/xml");
      } catch (d) {
        c = void 0;
      }
      return (
        (c && !c.getElementsByTagName("parsererror").length) ||
          r.error("Invalid XML: " + b),
        c
      );
    };
    var wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;
  
    function Ab(a, b, c, d) {
      var e;
      if (Array.isArray(b))
        r.each(b, function (b, e) {
          c || wb.test(a)
            ? d(a, e)
            : Ab(
                a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
                e,
                c,
                d
              );
        });
      else if (c || "object" !== r.type(b)) d(a, b);
      else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
    }
    (r.param = function (a, b) {
      var c,
        d = [],
        e = function (a, b) {
          var c = r.isFunction(b) ? b() : b;
          d[d.length] =
            encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };
      if (Array.isArray(a) || (a.jquery && !r.isPlainObject(a)))
        r.each(a, function () {
          e(this.name, this.value);
        });
      else for (c in a) Ab(c, a[c], b, e);
      return d.join("&");
    }),
      r.fn.extend({
        serialize: function () {
          return r.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var a = r.prop(this, "elements");
            return a ? r.makeArray(a) : this;
          })
            .filter(function () {
              var a = this.type;
              return (
                this.name &&
                !r(this).is(":disabled") &&
                zb.test(this.nodeName) &&
                !yb.test(a) &&
                (this.checked || !ja.test(a))
              );
            })
            .map(function (a, b) {
              var c = r(this).val();
              return null == c
                ? null
                : Array.isArray(c)
                ? r.map(c, function (a) {
                    return {
                      name: b.name,
                      value: a.replace(xb, "\r\n"),
                    };
                  })
                : {
                    name: b.name,
                    value: c.replace(xb, "\r\n"),
                  };
            })
            .get();
        },
      });
    var Bb = /%20/g,
      Cb = /#.*$/,
      Db = /([?&])_=[^&]*/,
      Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Gb = /^(?:GET|HEAD)$/,
      Hb = /^\/\//,
      Ib = {},
      Jb = {},
      Kb = "*/".concat("*"),
      Lb = d.createElement("a");
    Lb.href = tb.href;
  
    function Mb(a) {
      return function (b, c) {
        "string" != typeof b && ((c = b), (b = "*"));
        var d,
          e = 0,
          f = b.toLowerCase().match(L) || [];
        if (r.isFunction(c))
          while ((d = f[e++]))
            "+" === d[0]
              ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
              : (a[d] = a[d] || []).push(c);
      };
    }
  
    function Nb(a, b, c, d) {
      var e = {},
        f = a === Jb;
  
      function g(h) {
        var i;
        return (
          (e[h] = !0),
          r.each(a[h] || [], function (a, h) {
            var j = h(b, c, d);
            return "string" != typeof j || f || e[j]
              ? f
                ? !(i = j)
                : void 0
              : (b.dataTypes.unshift(j), g(j), !1);
          }),
          i
        );
      }
      return g(b.dataTypes[0]) || (!e["*"] && g("*"));
    }
  
    function Ob(a, b) {
      var c,
        d,
        e = r.ajaxSettings.flatOptions || {};
      for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && r.extend(!0, a, d), a;
    }
  
    function Pb(a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;
      while ("*" === i[0])
        i.shift(),
          void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
      if (d)
        for (e in h)
          if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
          }
      if (i[0] in c) f = i[0];
      else {
        for (e in c) {
          if (!i[0] || a.converters[e + " " + i[0]]) {
            f = e;
            break;
          }
          g || (g = e);
        }
        f = f || g;
      }
      if (f) return f !== i[0] && i.unshift(f), c[f];
    }
  
    function Qb(a, b, c, d) {
      var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
      if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      f = k.shift();
      while (f)
        if (
          (a.responseFields[f] && (c[a.responseFields[f]] = b),
          !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
          (i = f),
          (f = k.shift()))
        )
          if ("*" === f) f = i;
          else if ("*" !== i && i !== f) {
            if (((g = j[i + " " + f] || j["* " + f]), !g))
              for (e in j)
                if (
                  ((h = e.split(" ")),
                  h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
                ) {
                  g === !0
                    ? (g = j[e])
                    : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                  break;
                }
            if (g !== !0)
              if (g && a["throws"]) b = g(b);
              else
                try {
                  b = g(b);
                } catch (l) {
                  return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f,
                  };
                }
          }
      return {
        state: "success",
        data: b,
      };
    }
    r.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: tb.href,
        type: "GET",
        isLocal: Fb.test(tb.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Kb,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": r.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (a, b) {
        return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
      },
      ajaxPrefilter: Mb(Ib),
      ajaxTransport: Mb(Jb),
      ajax: function (b, c) {
        "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = {
            readyState: 0,
            getResponseHeader: function (a) {
              var b;
              if (k) {
                if (!h) {
                  h = {};
                  while ((b = Eb.exec(g))) h[b[1].toLowerCase()] = b[2];
                }
                b = h[a.toLowerCase()];
              }
              return null == b ? null : b;
            },
            getAllResponseHeaders: function () {
              return k ? g : null;
            },
            setRequestHeader: function (a, b) {
              return (
                null == k &&
                  ((a = w[a.toLowerCase()] = w[a.toLowerCase()] || a),
                  (v[a] = b)),
                this
              );
            },
            overrideMimeType: function (a) {
              return null == k && (o.mimeType = a), this;
            },
            statusCode: function (a) {
              var b;
              if (a)
                if (k) y.always(a[y.status]);
                else for (b in a) u[b] = [u[b], a[b]];
              return this;
            },
            abort: function (a) {
              var b = a || x;
              return e && e.abort(b), A(0, b), this;
            },
          };
        if (
          (s.promise(y),
          (o.url = ((b || o.url || tb.href) + "").replace(
            Hb,
            tb.protocol + "//"
          )),
          (o.type = c.method || c.type || o.method || o.type),
          (o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""]),
          null == o.crossDomain)
        ) {
          j = d.createElement("a");
          try {
            (j.href = o.url),
              (j.href = j.href),
              (o.crossDomain =
                Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host);
          } catch (z) {
            o.crossDomain = !0;
          }
        }
        if (
          (o.data &&
            o.processData &&
            "string" != typeof o.data &&
            (o.data = r.param(o.data, o.traditional)),
          Nb(Ib, o, c, y),
          k)
        )
          return y;
        (l = r.event && o.global),
          l && 0 === r.active++ && r.event.trigger("ajaxStart"),
          (o.type = o.type.toUpperCase()),
          (o.hasContent = !Gb.test(o.type)),
          (f = o.url.replace(Cb, "")),
          o.hasContent
            ? o.data &&
              o.processData &&
              0 ===
                (o.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (o.data = o.data.replace(Bb, "+"))
            : ((n = o.url.slice(f.length)),
              o.data && ((f += (vb.test(f) ? "&" : "?") + o.data), delete o.data),
              o.cache === !1 &&
                ((f = f.replace(Db, "$1")),
                (n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n)),
              (o.url = f + n)),
          o.ifModified &&
            (r.lastModified[f] &&
              y.setRequestHeader("If-Modified-Since", r.lastModified[f]),
            r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
          ((o.data && o.hasContent && o.contentType !== !1) || c.contentType) &&
            y.setRequestHeader("Content-Type", o.contentType),
          y.setRequestHeader(
            "Accept",
            o.dataTypes[0] && o.accepts[o.dataTypes[0]]
              ? o.accepts[o.dataTypes[0]] +
                  ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "")
              : o.accepts["*"]
          );
        for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
        if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
          return y.abort();
        if (
          ((x = "abort"),
          t.add(o.complete),
          y.done(o.success),
          y.fail(o.error),
          (e = Nb(Jb, o, c, y)))
        ) {
          if (((y.readyState = 1), l && q.trigger("ajaxSend", [y, o]), k))
            return y;
          o.async &&
            o.timeout > 0 &&
            (i = a.setTimeout(function () {
              y.abort("timeout");
            }, o.timeout));
          try {
            (k = !1), e.send(v, A);
          } catch (z) {
            if (k) throw z;
            A(-1, z);
          }
        } else A(-1, "No Transport");
  
        function A(b, c, d, h) {
          var j,
            m,
            n,
            v,
            w,
            x = c;
          k ||
            ((k = !0),
            i && a.clearTimeout(i),
            (e = void 0),
            (g = h || ""),
            (y.readyState = b > 0 ? 4 : 0),
            (j = (b >= 200 && b < 300) || 304 === b),
            d && (v = Pb(o, y, d)),
            (v = Qb(o, v, y, j)),
            j
              ? (o.ifModified &&
                  ((w = y.getResponseHeader("Last-Modified")),
                  w && (r.lastModified[f] = w),
                  (w = y.getResponseHeader("etag")),
                  w && (r.etag[f] = w)),
                204 === b || "HEAD" === o.type
                  ? (x = "nocontent")
                  : 304 === b
                  ? (x = "notmodified")
                  : ((x = v.state), (m = v.data), (n = v.error), (j = !n)))
              : ((n = x), (!b && x) || ((x = "error"), b < 0 && (b = 0))),
            (y.status = b),
            (y.statusText = (c || x) + ""),
            j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
            y.statusCode(u),
            (u = void 0),
            l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
            t.fireWith(p, [y, x]),
            l &&
              (q.trigger("ajaxComplete", [y, o]),
              --r.active || r.event.trigger("ajaxStop")));
        }
        return y;
      },
      getJSON: function (a, b, c) {
        return r.get(a, b, c, "json");
      },
      getScript: function (a, b) {
        return r.get(a, void 0, b, "script");
      },
    }),
      r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
          return (
            r.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
            r.ajax(
              r.extend(
                {
                  url: a,
                  type: b,
                  dataType: e,
                  data: c,
                  success: d,
                },
                r.isPlainObject(a) && a
              )
            )
          );
        };
      }),
      (r._evalUrl = function (a) {
        return r.ajax({
          url: a,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      r.fn.extend({
        wrapAll: function (a) {
          var b;
          return (
            this[0] &&
              (r.isFunction(a) && (a = a.call(this[0])),
              (b = r(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (a) {
          return r.isFunction(a)
            ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b));
              })
            : this.each(function () {
                var b = r(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              });
        },
        wrap: function (a) {
          var b = r.isFunction(a);
          return this.each(function (c) {
            r(this).wrapAll(b ? a.call(this, c) : a);
          });
        },
        unwrap: function (a) {
          return (
            this.parent(a)
              .not("body")
              .each(function () {
                r(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a);
      }),
      (r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
      }),
      (r.ajaxSettings.xhr = function () {
        try {
          return new a.XMLHttpRequest();
        } catch (b) {}
      });
    var Rb = {
        0: 200,
        1223: 204,
      },
      Sb = r.ajaxSettings.xhr();
    (o.cors = !!Sb && "withCredentials" in Sb),
      (o.ajax = Sb = !!Sb),
      r.ajaxTransport(function (b) {
        var c, d;
        if (o.cors || (Sb && !b.crossDomain))
          return {
            send: function (e, f) {
              var g,
                h = b.xhr();
              if (
                (h.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
              )
                for (g in b.xhrFields) h[g] = b.xhrFields[g];
              b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
                b.crossDomain ||
                  e["X-Requested-With"] ||
                  (e["X-Requested-With"] = "XMLHttpRequest");
              for (g in e) h.setRequestHeader(g, e[g]);
              (c = function (a) {
                return function () {
                  c &&
                    ((c =
                      d =
                      h.onload =
                      h.onerror =
                      h.onabort =
                      h.onreadystatechange =
                        null),
                    "abort" === a
                      ? h.abort()
                      : "error" === a
                      ? "number" != typeof h.status
                        ? f(0, "error")
                        : f(h.status, h.statusText)
                      : f(
                          Rb[h.status] || h.status,
                          h.statusText,
                          "text" !== (h.responseType || "text") ||
                            "string" != typeof h.responseText
                            ? {
                                binary: h.response,
                              }
                            : {
                                text: h.responseText,
                              },
                          h.getAllResponseHeaders()
                        ));
                };
              }),
                (h.onload = c()),
                (d = h.onerror = c("error")),
                void 0 !== h.onabort
                  ? (h.onabort = d)
                  : (h.onreadystatechange = function () {
                      4 === h.readyState &&
                        a.setTimeout(function () {
                          c && d();
                        });
                    }),
                (c = c("abort"));
              try {
                h.send((b.hasContent && b.data) || null);
              } catch (i) {
                if (c) throw i;
              }
            },
            abort: function () {
              c && c();
            },
          };
      }),
      r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1);
      }),
      r.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: {
          script: /\b(?:java|ecma)script\b/,
        },
        converters: {
          "text script": function (a) {
            return r.globalEval(a), a;
          },
        },
      }),
      r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
      }),
      r.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
          var b, c;
          return {
            send: function (e, f) {
              (b = r("<script>")
                .prop({
                  charset: a.scriptCharset,
                  src: a.url,
                })
                .on(
                  "load error",
                  (c = function (a) {
                    b.remove(),
                      (c = null),
                      a && f("error" === a.type ? 404 : 200, a.type);
                  })
                )),
                d.head.appendChild(b[0]);
            },
            abort: function () {
              c && c();
            },
          };
        }
      });
    var Tb = [],
      Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var a = Tb.pop() || r.expando + "_" + ub++;
        return (this[a] = !0), a;
      },
    }),
      r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
          f,
          g,
          h =
            b.jsonp !== !1 &&
            (Ub.test(b.url)
              ? "url"
              : "string" == typeof b.data &&
                0 ===
                  (b.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Ub.test(b.data) &&
                "data");
        if (h || "jsonp" === b.dataTypes[0])
          return (
            (e = b.jsonpCallback =
              r.isFunction(b.jsonpCallback)
                ? b.jsonpCallback()
                : b.jsonpCallback),
            h
              ? (b[h] = b[h].replace(Ub, "$1" + e))
              : b.jsonp !== !1 &&
                (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            (b.converters["script json"] = function () {
              return g || r.error(e + " was not called"), g[0];
            }),
            (b.dataTypes[0] = "json"),
            (f = a[e]),
            (a[e] = function () {
              g = arguments;
            }),
            d.always(function () {
              void 0 === f ? r(a).removeProp(e) : (a[e] = f),
                b[e] && ((b.jsonpCallback = c.jsonpCallback), Tb.push(e)),
                g && r.isFunction(f) && f(g[0]),
                (g = f = void 0);
            }),
            "script"
          );
      }),
      (o.createHTMLDocument = (function () {
        var a = d.implementation.createHTMLDocument("").body;
        return (
          (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length
        );
      })()),
      (r.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && ((c = b), (b = !1));
        var e, f, g;
        return (
          b ||
            (o.createHTMLDocument
              ? ((b = d.implementation.createHTMLDocument("")),
                (e = b.createElement("base")),
                (e.href = d.location.href),
                b.head.appendChild(e))
              : (b = d)),
          (f = C.exec(a)),
          (g = !c && []),
          f
            ? [b.createElement(f[1])]
            : ((f = qa([a], b, g)),
              g && g.length && r(g).remove(),
              r.merge([], f.childNodes))
        );
      }),
      (r.fn.load = function (a, b, c) {
        var d,
          e,
          f,
          g = this,
          h = a.indexOf(" ");
        return (
          h > -1 && ((d = pb(a.slice(h))), (a = a.slice(0, h))),
          r.isFunction(b)
            ? ((c = b), (b = void 0))
            : b && "object" == typeof b && (e = "POST"),
          g.length > 0 &&
            r
              .ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b,
              })
              .done(function (a) {
                (f = arguments),
                  g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
              })
              .always(
                c &&
                  function (a, b) {
                    g.each(function () {
                      c.apply(this, f || [a.responseText, b, a]);
                    });
                  }
              ),
          this
        );
      }),
      r.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (a, b) {
          r.fn[b] = function (a) {
            return this.on(b, a);
          };
        }
      ),
      (r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
          return a === b.elem;
        }).length;
      }),
      (r.offset = {
        setOffset: function (a, b, c) {
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = r.css(a, "position"),
            l = r(a),
            m = {};
          "static" === k && (a.style.position = "relative"),
            (h = l.offset()),
            (f = r.css(a, "top")),
            (i = r.css(a, "left")),
            (j =
              ("absolute" === k || "fixed" === k) &&
              (f + i).indexOf("auto") > -1),
            j
              ? ((d = l.position()), (g = d.top), (e = d.left))
              : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
            r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using" in b ? b.using.call(a, m) : l.css(m);
        },
      }),
      r.fn.extend({
        offset: function (a) {
          if (arguments.length)
            return void 0 === a
              ? this
              : this.each(function (b) {
                  r.offset.setOffset(this, a, b);
                });
          var b,
            c,
            d,
            e,
            f = this[0];
          if (f)
            return f.getClientRects().length
              ? ((d = f.getBoundingClientRect()),
                (b = f.ownerDocument),
                (c = b.documentElement),
                (e = b.defaultView),
                {
                  top: d.top + e.pageYOffset - c.clientTop,
                  left: d.left + e.pageXOffset - c.clientLeft,
                })
              : {
                  top: 0,
                  left: 0,
                };
        },
        position: function () {
          if (this[0]) {
            var a,
              b,
              c = this[0],
              d = {
                top: 0,
                left: 0,
              };
            return (
              "fixed" === r.css(c, "position")
                ? (b = c.getBoundingClientRect())
                : ((a = this.offsetParent()),
                  (b = this.offset()),
                  B(a[0], "html") || (d = a.offset()),
                  (d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0),
                  })),
              {
                top: b.top - d.top - r.css(c, "marginTop", !0),
                left: b.left - d.left - r.css(c, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            var a = this.offsetParent;
            while (a && "static" === r.css(a, "position")) a = a.offsetParent;
            return a || ra;
          });
        },
      }),
      r.each(
        {
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset",
        },
        function (a, b) {
          var c = "pageYOffset" === b;
          r.fn[a] = function (d) {
            return T(
              this,
              function (a, d, e) {
                var f;
                return (
                  r.isWindow(a)
                    ? (f = a)
                    : 9 === a.nodeType && (f = a.defaultView),
                  void 0 === e
                    ? f
                      ? f[b]
                      : a[d]
                    : void (f
                        ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                        : (a[d] = e))
                );
              },
              a,
              d,
              arguments.length
            );
          };
        }
      ),
      r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
          if (c)
            return (c = Oa(a, b)), Ma.test(c) ? r(a).position()[b] + "px" : c;
        });
      }),
      r.each(
        {
          Height: "height",
          Width: "width",
        },
        function (a, b) {
          r.each(
            {
              padding: "inner" + a,
              content: b,
              "": "outer" + a,
            },
            function (c, d) {
              r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                  h = c || (e === !0 || f === !0 ? "margin" : "border");
                return T(
                  this,
                  function (b, c, e) {
                    var f;
                    return r.isWindow(b)
                      ? 0 === d.indexOf("outer")
                        ? b["inner" + a]
                        : b.document.documentElement["client" + a]
                      : 9 === b.nodeType
                      ? ((f = b.documentElement),
                        Math.max(
                          b.body["scroll" + a],
                          f["scroll" + a],
                          b.body["offset" + a],
                          f["offset" + a],
                          f["client" + a]
                        ))
                      : void 0 === e
                      ? r.css(b, c, h)
                      : r.style(b, c, e, h);
                  },
                  b,
                  g ? e : void 0,
                  g
                );
              };
            }
          );
        }
      ),
      r.fn.extend({
        bind: function (a, b, c) {
          return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
          return this.off(a, null, b);
        },
        delegate: function (a, b, c, d) {
          return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
          return 1 === arguments.length
            ? this.off(a, "**")
            : this.off(b, a || "**", c);
        },
      }),
      (r.holdReady = function (a) {
        a ? r.readyWait++ : r.ready(!0);
      }),
      (r.isArray = Array.isArray),
      (r.parseJSON = JSON.parse),
      (r.nodeName = B),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return r;
        });
    var Vb = a.jQuery,
      Wb = a.$;
    return (
      (r.noConflict = function (b) {
        return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
      }),
      b || (a.jQuery = a.$ = r),
      r
    );
  });
  !(function (a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : "object" == typeof module && module.exports
      ? (module.exports = a(require("jquery")))
      : a(jQuery);
  })(function (a) {
    a.extend(a.fn, {
      validate: function (b) {
        if (!this.length)
          return void (
            b &&
            b.debug &&
            window.console &&
            console.warn("Nothing selected, can't validate, returning nothing.")
          );
        var c = a.data(this[0], "validator");
        return c
          ? c
          : (this.attr("novalidate", "novalidate"),
            (c = new a.validator(b, this[0])),
            a.data(this[0], "validator", c),
            c.settings.onsubmit &&
              (this.on("click.validate", ":submit", function (b) {
                (c.submitButton = b.currentTarget),
                  a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                  void 0 !== a(this).attr("formnovalidate") &&
                    (c.cancelSubmit = !0);
              }),
              this.on("submit.validate", function (b) {
                function d() {
                  var d, e;
                  return (
                    c.submitButton &&
                      (c.settings.submitHandler || c.formSubmitted) &&
                      (d = a("<input type='hidden'/>")
                        .attr("name", c.submitButton.name)
                        .val(a(c.submitButton).val())
                        .appendTo(c.currentForm)),
                    !c.settings.submitHandler ||
                      ((e = c.settings.submitHandler.call(c, c.currentForm, b)),
                      d && d.remove(),
                      void 0 !== e && e)
                  );
                }
                return (
                  c.settings.debug && b.preventDefault(),
                  c.cancelSubmit
                    ? ((c.cancelSubmit = !1), d())
                    : c.form()
                    ? c.pendingRequest
                      ? ((c.formSubmitted = !0), !1)
                      : d()
                    : (c.focusInvalid(), !1)
                );
              })),
            c);
      },
      valid: function () {
        var b, c, d;
        return (
          a(this[0]).is("form")
            ? (b = this.validate().form())
            : ((d = []),
              (b = !0),
              (c = a(this[0].form).validate()),
              this.each(function () {
                (b = c.element(this) && b), b || (d = d.concat(c.errorList));
              }),
              (c.errorList = d)),
          b
        );
      },
      rules: function (b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j = this[0];
        if (
          null != j &&
          (!j.form &&
            j.hasAttribute("contenteditable") &&
            ((j.form = this.closest("form")[0]), (j.name = this.attr("name"))),
          null != j.form)
        ) {
          if (b)
            switch (
              ((d = a.data(j.form, "validator").settings),
              (e = d.rules),
              (f = a.validator.staticRules(j)),
              b)
            ) {
              case "add":
                a.extend(f, a.validator.normalizeRule(c)),
                  delete f.messages,
                  (e[j.name] = f),
                  c.messages &&
                    (d.messages[j.name] = a.extend(
                      d.messages[j.name],
                      c.messages
                    ));
                break;
              case "remove":
                return c
                  ? ((i = {}),
                    a.each(c.split(/\s/), function (a, b) {
                      (i[b] = f[b]), delete f[b];
                    }),
                    i)
                  : (delete e[j.name], f);
            }
          return (
            (g = a.validator.normalizeRules(
              a.extend(
                {},
                a.validator.classRules(j),
                a.validator.attributeRules(j),
                a.validator.dataRules(j),
                a.validator.staticRules(j)
              ),
              j
            )),
            g.required &&
              ((h = g.required),
              delete g.required,
              (g = a.extend(
                {
                  required: h,
                },
                g
              ))),
            g.remote &&
              ((h = g.remote),
              delete g.remote,
              (g = a.extend(g, {
                remote: h,
              }))),
            g
          );
        }
      },
    }),
      a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function (b) {
          return !a.trim("" + a(b).val());
        },
        filled: function (b) {
          var c = a(b).val();
          return null !== c && !!a.trim("" + c);
        },
        unchecked: function (b) {
          return !a(b).prop("checked");
        },
      }),
      (a.validator = function (b, c) {
        (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
          (this.currentForm = c),
          this.init();
      }),
      (a.validator.format = function (b, c) {
        return 1 === arguments.length
          ? function () {
              var c = a.makeArray(arguments);
              return c.unshift(b), a.validator.format.apply(this, c);
            }
          : void 0 === c
          ? b
          : (arguments.length > 2 &&
              c.constructor !== Array &&
              (c = a.makeArray(arguments).slice(1)),
            c.constructor !== Array && (c = [c]),
            a.each(c, function (a, c) {
              b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c;
              });
            }),
            b);
      }),
      a.extend(a.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: "error",
          pendingClass: "pending",
          validClass: "valid",
          errorElement: "label",
          focusCleanup: !1,
          focusInvalid: !0,
          errorContainer: a([]),
          errorLabelContainer: a([]),
          onsubmit: !0,
          ignore: ":hidden",
          ignoreTitle: !1,
          onfocusin: function (a) {
            (this.lastActive = a),
              this.settings.focusCleanup &&
                (this.settings.unhighlight &&
                  this.settings.unhighlight.call(
                    this,
                    a,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.hideThese(this.errorsFor(a)));
          },
          onfocusout: function (a) {
            this.checkable(a) ||
              (!(a.name in this.submitted) && this.optional(a)) ||
              this.element(a);
          },
          onkeyup: function (b, c) {
            var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
            (9 === c.which && "" === this.elementValue(b)) ||
              a.inArray(c.keyCode, d) !== -1 ||
              ((b.name in this.submitted || b.name in this.invalid) &&
                this.element(b));
          },
          onclick: function (a) {
            a.name in this.submitted
              ? this.element(a)
              : a.parentNode.name in this.submitted && this.element(a.parentNode);
          },
          highlight: function (b, c, d) {
            "radio" === b.type
              ? this.findByName(b.name).addClass(c).removeClass(d)
              : a(b).addClass(c).removeClass(d);
          },
          unhighlight: function (b, c, d) {
            "radio" === b.type
              ? this.findByName(b.name).removeClass(c).addClass(d)
              : a(b).removeClass(c).addClass(d);
          },
        },
        setDefaults: function (b) {
          a.extend(a.validator.defaults, b);
        },
        messages: {
          required: "This field is required.",
          remote: "Please fix this field.",
          email: "Please enter a valid email address.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: a.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: a.validator.format("Please enter at least {0} characters."),
          rangelength: a.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: a.validator.format("Please enter a value between {0} and {1}."),
          max: a.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: a.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: a.validator.format("Please enter a multiple of {0}."),
        },
        autoCreateRanges: !1,
        prototype: {
          init: function () {
            function b(b) {
              !this.form &&
                this.hasAttribute("contenteditable") &&
                ((this.form = a(this).closest("form")[0]),
                (this.name = a(this).attr("name")));
              var c = a.data(this.form, "validator"),
                d = "on" + b.type.replace(/^validate/, ""),
                e = c.settings;
              e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
            }
            (this.labelContainer = a(this.settings.errorLabelContainer)),
              (this.errorContext =
                (this.labelContainer.length && this.labelContainer) ||
                a(this.currentForm)),
              (this.containers = a(this.settings.errorContainer).add(
                this.settings.errorLabelContainer
              )),
              (this.submitted = {}),
              (this.valueCache = {}),
              (this.pendingRequest = 0),
              (this.pending = {}),
              (this.invalid = {}),
              this.reset();
            var c,
              d = (this.groups = {});
            a.each(this.settings.groups, function (b, c) {
              "string" == typeof c && (c = c.split(/\s/)),
                a.each(c, function (a, c) {
                  d[c] = b;
                });
            }),
              (c = this.settings.rules),
              a.each(c, function (b, d) {
                c[b] = a.validator.normalizeRule(d);
              }),
              a(this.currentForm)
                .on(
                  "focusin.validate focusout.validate keyup.validate",
                  ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                  b
                )
                .on(
                  "click.validate",
                  "select, option, [type='radio'], [type='checkbox']",
                  b
                ),
              this.settings.invalidHandler &&
                a(this.currentForm).on(
                  "invalid-form.validate",
                  this.settings.invalidHandler
                );
          },
          form: function () {
            return (
              this.checkForm(),
              a.extend(this.submitted, this.errorMap),
              (this.invalid = a.extend({}, this.errorMap)),
              this.valid() ||
                a(this.currentForm).triggerHandler("invalid-form", [this]),
              this.showErrors(),
              this.valid()
            );
          },
          checkForm: function () {
            this.prepareForm();
            for (
              var a = 0, b = (this.currentElements = this.elements());
              b[a];
              a++
            )
              this.check(b[a]);
            return this.valid();
          },
          element: function (b) {
            var c,
              d,
              e = this.clean(b),
              f = this.validationTargetFor(e),
              g = this,
              h = !0;
            return (
              void 0 === f
                ? delete this.invalid[e.name]
                : (this.prepareElement(f),
                  (this.currentElements = a(f)),
                  (d = this.groups[f.name]),
                  d &&
                    a.each(this.groups, function (a, b) {
                      b === d &&
                        a !== f.name &&
                        ((e = g.validationTargetFor(g.clean(g.findByName(a)))),
                        e &&
                          e.name in g.invalid &&
                          (g.currentElements.push(e), (h = g.check(e) && h)));
                    }),
                  (c = this.check(f) !== !1),
                  (h = h && c),
                  c ? (this.invalid[f.name] = !1) : (this.invalid[f.name] = !0),
                  this.numberOfInvalids() ||
                    (this.toHide = this.toHide.add(this.containers)),
                  this.showErrors(),
                  a(b).attr("aria-invalid", !c)),
              h
            );
          },
          showErrors: function (b) {
            if (b) {
              var c = this;
              a.extend(this.errorMap, b),
                (this.errorList = a.map(this.errorMap, function (a, b) {
                  return {
                    message: a,
                    element: c.findByName(b)[0],
                  };
                })),
                (this.successList = a.grep(this.successList, function (a) {
                  return !(a.name in b);
                }));
            }
            this.settings.showErrors
              ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
              : this.defaultShowErrors();
          },
          resetForm: function () {
            a.fn.resetForm && a(this.currentForm).resetForm(),
              (this.invalid = {}),
              (this.submitted = {}),
              this.prepareForm(),
              this.hideErrors();
            var b = this.elements()
              .removeData("previousValue")
              .removeAttr("aria-invalid");
            this.resetElements(b);
          },
          resetElements: function (a) {
            var b;
            if (this.settings.unhighlight)
              for (b = 0; a[b]; b++)
                this.settings.unhighlight.call(
                  this,
                  a[b],
                  this.settings.errorClass,
                  ""
                ),
                  this.findByName(a[b].name).removeClass(
                    this.settings.validClass
                  );
            else
              a.removeClass(this.settings.errorClass).removeClass(
                this.settings.validClass
              );
          },
          numberOfInvalids: function () {
            return this.objectLength(this.invalid);
          },
          objectLength: function (a) {
            var b,
              c = 0;
            for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
            return c;
          },
          hideErrors: function () {
            this.hideThese(this.toHide);
          },
          hideThese: function (a) {
            a.not(this.containers).text(""), this.addWrapper(a).hide();
          },
          valid: function () {
            return 0 === this.size();
          },
          size: function () {
            return this.errorList.length;
          },
          focusInvalid: function () {
            if (this.settings.focusInvalid)
              try {
                a(
                  this.findLastActive() ||
                    (this.errorList.length && this.errorList[0].element) ||
                    []
                )
                  .filter(":visible")
                  .focus()
                  .trigger("focusin");
              } catch (b) {}
          },
          findLastActive: function () {
            var b = this.lastActive;
            return (
              b &&
              1 ===
                a.grep(this.errorList, function (a) {
                  return a.element.name === b.name;
                }).length &&
              b
            );
          },
          elements: function () {
            var b = this,
              c = {};
            return a(this.currentForm)
              .find("input, select, textarea, [contenteditable]")
              .not(":submit, :reset, :image, :disabled")
              .not(this.settings.ignore)
              .filter(function () {
                var d = this.name || a(this).attr("name");
                return (
                  !d &&
                    b.settings.debug &&
                    window.console &&
                    console.error("%o has no name assigned", this),
                  this.hasAttribute("contenteditable") &&
                    ((this.form = a(this).closest("form")[0]), (this.name = d)),
                  !(d in c || !b.objectLength(a(this).rules())) &&
                    ((c[d] = !0), !0)
                );
              });
          },
          clean: function (b) {
            return a(b)[0];
          },
          errors: function () {
            var b = this.settings.errorClass.split(" ").join(".");
            return a(this.settings.errorElement + "." + b, this.errorContext);
          },
          resetInternals: function () {
            (this.successList = []),
              (this.errorList = []),
              (this.errorMap = {}),
              (this.toShow = a([])),
              (this.toHide = a([]));
          },
          reset: function () {
            this.resetInternals(), (this.currentElements = a([]));
          },
          prepareForm: function () {
            this.reset(), (this.toHide = this.errors().add(this.containers));
          },
          prepareElement: function (a) {
            this.reset(), (this.toHide = this.errorsFor(a));
          },
          elementValue: function (b) {
            var c,
              d,
              e = a(b),
              f = b.type;
            return "radio" === f || "checkbox" === f
              ? this.findByName(b.name).filter(":checked").val()
              : "number" === f && "undefined" != typeof b.validity
              ? b.validity.badInput
                ? "NaN"
                : e.val()
              : ((c = b.hasAttribute("contenteditable") ? e.text() : e.val()),
                "file" === f
                  ? "C:\\fakepath\\" === c.substr(0, 12)
                    ? c.substr(12)
                    : ((d = c.lastIndexOf("/")),
                      d >= 0
                        ? c.substr(d + 1)
                        : ((d = c.lastIndexOf("\\")),
                          d >= 0 ? c.substr(d + 1) : c))
                  : "string" == typeof c
                  ? c.replace(/\r/g, "")
                  : c);
          },
          check: function (b) {
            b = this.validationTargetFor(this.clean(b));
            var c,
              d,
              e,
              f,
              g = a(b).rules(),
              h = a.map(g, function (a, b) {
                return b;
              }).length,
              i = !1,
              j = this.elementValue(b);
            if (
              ("function" == typeof g.normalizer
                ? (f = g.normalizer)
                : "function" == typeof this.settings.normalizer &&
                  (f = this.settings.normalizer),
              f)
            ) {
              if (((j = f.call(b, j)), "string" != typeof j))
                throw new TypeError(
                  "The normalizer should return a string value."
                );
              delete g.normalizer;
            }
            for (d in g) {
              e = {
                method: d,
                parameters: g[d],
              };
              try {
                if (
                  ((c = a.validator.methods[d].call(this, j, b, e.parameters)),
                  "dependency-mismatch" === c && 1 === h)
                ) {
                  i = !0;
                  continue;
                }
                if (((i = !1), "pending" === c))
                  return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                if (!c) return this.formatAndAdd(b, e), !1;
              } catch (k) {
                throw (
                  (this.settings.debug &&
                    window.console &&
                    console.log(
                      "Exception occurred when checking element " +
                        b.id +
                        ", check the '" +
                        e.method +
                        "' method.",
                      k
                    ),
                  k instanceof TypeError &&
                    (k.message +=
                      ".  Exception occurred when checking element " +
                      b.id +
                      ", check the '" +
                      e.method +
                      "' method."),
                  k)
                );
              }
            }
            if (!i) return this.objectLength(g) && this.successList.push(b), !0;
          },
          customDataMessage: function (b, c) {
            return (
              a(b).data(
                "msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
              ) || a(b).data("msg")
            );
          },
          customMessage: function (a, b) {
            var c = this.settings.messages[a];
            return c && (c.constructor === String ? c : c[b]);
          },
          findDefined: function () {
            for (var a = 0; a < arguments.length; a++)
              if (void 0 !== arguments[a]) return arguments[a];
          },
          defaultMessage: function (b, c) {
            "string" == typeof c &&
              (c = {
                method: c,
              });
            var d = this.findDefined(
                this.customMessage(b.name, c.method),
                this.customDataMessage(b, c.method),
                (!this.settings.ignoreTitle && b.title) || void 0,
                a.validator.messages[c.method],
                "<strong>Warning: No message defined for " + b.name + "</strong>"
              ),
              e = /\$?\{(\d+)\}/g;
            return (
              "function" == typeof d
                ? (d = d.call(this, c.parameters, b))
                : e.test(d) &&
                  (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
              d
            );
          },
          formatAndAdd: function (a, b) {
            var c = this.defaultMessage(a, b);
            this.errorList.push({
              message: c,
              element: a,
              method: b.method,
            }),
              (this.errorMap[a.name] = c),
              (this.submitted[a.name] = c);
          },
          addWrapper: function (a) {
            return (
              this.settings.wrapper &&
                (a = a.add(a.parent(this.settings.wrapper))),
              a
            );
          },
          defaultShowErrors: function () {
            var a, b, c;
            for (a = 0; this.errorList[a]; a++)
              (c = this.errorList[a]),
                this.settings.highlight &&
                  this.settings.highlight.call(
                    this,
                    c.element,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.showLabel(c.element, c.message);
            if (
              (this.errorList.length &&
                (this.toShow = this.toShow.add(this.containers)),
              this.settings.success)
            )
              for (a = 0; this.successList[a]; a++)
                this.showLabel(this.successList[a]);
            if (this.settings.unhighlight)
              for (a = 0, b = this.validElements(); b[a]; a++)
                this.settings.unhighlight.call(
                  this,
                  b[a],
                  this.settings.errorClass,
                  this.settings.validClass
                );
            (this.toHide = this.toHide.not(this.toShow)),
              this.hideErrors(),
              this.addWrapper(this.toShow).show();
          },
          validElements: function () {
            return this.currentElements.not(this.invalidElements());
          },
          invalidElements: function () {
            return a(this.errorList).map(function () {
              return this.element;
            });
          },
          showLabel: function (b, c) {
            var d,
              e,
              f,
              g,
              h = this.errorsFor(b),
              i = this.idOrName(b),
              j = a(b).attr("aria-describedby");
            h.length
              ? (h
                  .removeClass(this.settings.validClass)
                  .addClass(this.settings.errorClass),
                h.html(c))
              : ((h = a("<" + this.settings.errorElement + ">")
                  .attr("id", i + "-error")
                  .addClass(this.settings.errorClass)
                  .html(c || "")),
                (d = h),
                this.settings.wrapper &&
                  (d = h
                    .hide()
                    .show()
                    .wrap("<" + this.settings.wrapper + "/>")
                    .parent()),
                this.labelContainer.length
                  ? this.labelContainer.append(d)
                  : this.settings.errorPlacement
                  ? this.settings.errorPlacement.call(this, d, a(b))
                  : d.insertAfter(b),
                h.is("label")
                  ? h.attr("for", i)
                  : 0 ===
                      h.parents("label[for='" + this.escapeCssMeta(i) + "']")
                        .length &&
                    ((f = h.attr("id")),
                    j
                      ? j.match(
                          new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")
                        ) || (j += " " + f)
                      : (j = f),
                    a(b).attr("aria-describedby", j),
                    (e = this.groups[b.name]),
                    e &&
                      ((g = this),
                      a.each(g.groups, function (b, c) {
                        c === e &&
                          a(
                            "[name='" + g.escapeCssMeta(b) + "']",
                            g.currentForm
                          ).attr("aria-describedby", h.attr("id"));
                      })))),
              !c &&
                this.settings.success &&
                (h.text(""),
                "string" == typeof this.settings.success
                  ? h.addClass(this.settings.success)
                  : this.settings.success(h, b)),
              (this.toShow = this.toShow.add(h));
          },
          errorsFor: function (b) {
            var c = this.escapeCssMeta(this.idOrName(b)),
              d = a(b).attr("aria-describedby"),
              e = "label[for='" + c + "'], label[for='" + c + "'] *";
            return (
              d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
              this.errors().filter(e)
            );
          },
          escapeCssMeta: function (a) {
            return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
          },
          idOrName: function (a) {
            return (
              this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            );
          },
          validationTargetFor: function (b) {
            return (
              this.checkable(b) && (b = this.findByName(b.name)),
              a(b).not(this.settings.ignore)[0]
            );
          },
          checkable: function (a) {
            return /radio|checkbox/i.test(a.type);
          },
          findByName: function (b) {
            return a(this.currentForm).find(
              "[name='" + this.escapeCssMeta(b) + "']"
            );
          },
          getLength: function (b, c) {
            switch (c.nodeName.toLowerCase()) {
              case "select":
                return a("option:selected", c).length;
              case "input":
                if (this.checkable(c))
                  return this.findByName(c.name).filter(":checked").length;
            }
            return b.length;
          },
          depend: function (a, b) {
            return (
              !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            );
          },
          dependTypes: {
            boolean: function (a) {
              return a;
            },
            string: function (b, c) {
              return !!a(b, c.form).length;
            },
            function: function (a, b) {
              return a(b);
            },
          },
          optional: function (b) {
            var c = this.elementValue(b);
            return (
              !a.validator.methods.required.call(this, c, b) &&
              "dependency-mismatch"
            );
          },
          startRequest: function (b) {
            this.pending[b.name] ||
              (this.pendingRequest++,
              a(b).addClass(this.settings.pendingClass),
              (this.pending[b.name] = !0));
          },
          stopRequest: function (b, c) {
            this.pendingRequest--,
              this.pendingRequest < 0 && (this.pendingRequest = 0),
              delete this.pending[b.name],
              a(b).removeClass(this.settings.pendingClass),
              c && 0 === this.pendingRequest && this.formSubmitted && this.form()
                ? (a(this.currentForm).submit(),
                  this.submitButton &&
                    a(
                      "input:hidden[name='" + this.submitButton.name + "']",
                      this.currentForm
                    ).remove(),
                  (this.formSubmitted = !1))
                : !c &&
                  0 === this.pendingRequest &&
                  this.formSubmitted &&
                  (a(this.currentForm).triggerHandler("invalid-form", [this]),
                  (this.formSubmitted = !1));
          },
          previousValue: function (b, c) {
            return (
              (c = ("string" == typeof c && c) || "remote"),
              a.data(b, "previousValue") ||
                a.data(b, "previousValue", {
                  old: null,
                  valid: !0,
                  message: this.defaultMessage(b, {
                    method: c,
                  }),
                })
            );
          },
          destroy: function () {
            this.resetForm(),
              a(this.currentForm)
                .off(".validate")
                .removeData("validator")
                .find(".validate-equalTo-blur")
                .off(".validate-equalTo")
                .removeClass("validate-equalTo-blur");
          },
        },
        classRuleSettings: {
          required: {
            required: !0,
          },
          email: {
            email: !0,
          },
          url: {
            url: !0,
          },
          date: {
            date: !0,
          },
          dateISO: {
            dateISO: !0,
          },
          number: {
            number: !0,
          },
          digits: {
            digits: !0,
          },
          creditcard: {
            creditcard: !0,
          },
        },
        addClassRules: function (b, c) {
          b.constructor === String
            ? (this.classRuleSettings[b] = c)
            : a.extend(this.classRuleSettings, b);
        },
        classRules: function (b) {
          var c = {},
            d = a(b).attr("class");
          return (
            d &&
              a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings &&
                  a.extend(c, a.validator.classRuleSettings[this]);
              }),
            c
          );
        },
        normalizeAttributeRule: function (a, b, c, d) {
          /min|max|step/.test(c) &&
            (null === b || /number|range|text/.test(b)) &&
            ((d = Number(d)), isNaN(d) && (d = void 0)),
            d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
        },
        attributeRules: function (b) {
          var c,
            d,
            e = {},
            f = a(b),
            g = b.getAttribute("type");
          for (c in a.validator.methods)
            "required" === c
              ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
              : (d = f.attr(c)),
              this.normalizeAttributeRule(e, g, c, d);
          return (
            e.maxlength &&
              /-1|2147483647|524288/.test(e.maxlength) &&
              delete e.maxlength,
            e
          );
        },
        dataRules: function (b) {
          var c,
            d,
            e = {},
            f = a(b),
            g = b.getAttribute("type");
          for (c in a.validator.methods)
            (d = f.data(
              "rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
            )),
              this.normalizeAttributeRule(e, g, c, d);
          return e;
        },
        staticRules: function (b) {
          var c = {},
            d = a.data(b.form, "validator");
          return (
            d.settings.rules &&
              (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
            c
          );
        },
        normalizeRules: function (b, c) {
          return (
            a.each(b, function (d, e) {
              if (e === !1) return void delete b[d];
              if (e.param || e.depends) {
                var f = !0;
                switch (typeof e.depends) {
                  case "string":
                    f = !!a(e.depends, c.form).length;
                    break;
                  case "function":
                    f = e.depends.call(c, c);
                }
                f
                  ? (b[d] = void 0 === e.param || e.param)
                  : (a.data(c.form, "validator").resetElements(a(c)),
                    delete b[d]);
              }
            }),
            a.each(b, function (d, e) {
              b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
            }),
            a.each(["minlength", "maxlength"], function () {
              b[this] && (b[this] = Number(b[this]));
            }),
            a.each(["rangelength", "range"], function () {
              var c;
              b[this] &&
                (a.isArray(b[this])
                  ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                  : "string" == typeof b[this] &&
                    ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                    (b[this] = [Number(c[0]), Number(c[1])])));
            }),
            a.validator.autoCreateRanges &&
              (null != b.min &&
                null != b.max &&
                ((b.range = [b.min, b.max]), delete b.min, delete b.max),
              null != b.minlength &&
                null != b.maxlength &&
                ((b.rangelength = [b.minlength, b.maxlength]),
                delete b.minlength,
                delete b.maxlength)),
            b
          );
        },
        normalizeRule: function (b) {
          if ("string" == typeof b) {
            var c = {};
            a.each(b.split(/\s/), function () {
              c[this] = !0;
            }),
              (b = c);
          }
          return b;
        },
        addMethod: function (b, c, d) {
          (a.validator.methods[b] = c),
            (a.validator.messages[b] =
              void 0 !== d ? d : a.validator.messages[b]),
            c.length < 3 &&
              a.validator.addClassRules(b, a.validator.normalizeRule(b));
        },
        methods: {
          required: function (b, c, d) {
            if (!this.depend(d, c)) return "dependency-mismatch";
            if ("select" === c.nodeName.toLowerCase()) {
              var e = a(c).val();
              return e && e.length > 0;
            }
            return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
          },
          email: function (a, b) {
            return (
              this.optional(b) ||
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                a
              )
            );
          },
          url: function (a, b) {
            return (
              this.optional(b) ||
              /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
                a
              )
            );
          },
          date: function (a, b) {
            return (
              this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            );
          },
          dateISO: function (a, b) {
            return (
              this.optional(b) ||
              /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                a
              )
            );
          },
          number: function (a, b) {
            return (
              this.optional(b) ||
              /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            );
          },
          digits: function (a, b) {
            return this.optional(b) || /^\d+$/.test(a);
          },
          minlength: function (b, c, d) {
            var e = a.isArray(b) ? b.length : this.getLength(b, c);
            return this.optional(c) || e >= d;
          },
          maxlength: function (b, c, d) {
            var e = a.isArray(b) ? b.length : this.getLength(b, c);
            return this.optional(c) || e <= d;
          },
          rangelength: function (b, c, d) {
            var e = a.isArray(b) ? b.length : this.getLength(b, c);
            return this.optional(c) || (e >= d[0] && e <= d[1]);
          },
          min: function (a, b, c) {
            return this.optional(b) || a >= c;
          },
          max: function (a, b, c) {
            return this.optional(b) || a <= c;
          },
          range: function (a, b, c) {
            return this.optional(b) || (a >= c[0] && a <= c[1]);
          },
          step: function (b, c, d) {
            var e,
              f = a(c).attr("type"),
              g = "Step attribute on input type " + f + " is not supported.",
              h = ["text", "number", "range"],
              i = new RegExp("\\b" + f + "\\b"),
              j = f && !i.test(h.join()),
              k = function (a) {
                var b = ("" + a).match(/(?:\.(\d+))?$/);
                return b && b[1] ? b[1].length : 0;
              },
              l = function (a) {
                return Math.round(a * Math.pow(10, e));
              },
              m = !0;
            if (j) throw new Error(g);
            return (
              (e = k(d)),
              (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
              this.optional(c) || m
            );
          },
          equalTo: function (b, c, d) {
            var e = a(d);
            return (
              this.settings.onfocusout &&
                e.not(".validate-equalTo-blur").length &&
                e
                  .addClass("validate-equalTo-blur")
                  .on("blur.validate-equalTo", function () {
                    a(c).valid();
                  }),
              b === e.val()
            );
          },
          remote: function (b, c, d, e) {
            if (this.optional(c)) return "dependency-mismatch";
            e = ("string" == typeof e && e) || "remote";
            var f,
              g,
              h,
              i = this.previousValue(c, e);
            return (
              this.settings.messages[c.name] ||
                (this.settings.messages[c.name] = {}),
              (i.originalMessage =
                i.originalMessage || this.settings.messages[c.name][e]),
              (this.settings.messages[c.name][e] = i.message),
              (d =
                ("string" == typeof d && {
                  url: d,
                }) ||
                d),
              (h = a.param(
                a.extend(
                  {
                    data: b,
                  },
                  d.data
                )
              )),
              i.old === h
                ? i.valid
                : ((i.old = h),
                  (f = this),
                  this.startRequest(c),
                  (g = {}),
                  (g[c.name] = b),
                  a.ajax(
                    a.extend(
                      !0,
                      {
                        mode: "abort",
                        port: "validate" + c.name,
                        dataType: "json",
                        data: g,
                        context: f.currentForm,
                        success: function (a) {
                          var d,
                            g,
                            h,
                            j = a === !0 || "true" === a;
                          (f.settings.messages[c.name][e] = i.originalMessage),
                            j
                              ? ((h = f.formSubmitted),
                                f.resetInternals(),
                                (f.toHide = f.errorsFor(c)),
                                (f.formSubmitted = h),
                                f.successList.push(c),
                                (f.invalid[c.name] = !1),
                                f.showErrors())
                              : ((d = {}),
                                (g =
                                  a ||
                                  f.defaultMessage(c, {
                                    method: e,
                                    parameters: b,
                                  })),
                                (d[c.name] = i.message = g),
                                (f.invalid[c.name] = !0),
                                f.showErrors(d)),
                            (i.valid = j),
                            f.stopRequest(c, j);
                        },
                      },
                      d
                    )
                  ),
                  "pending")
            );
          },
        },
      });
    var b,
      c = {};
    return (
      a.ajaxPrefilter
        ? a.ajaxPrefilter(function (a, b, d) {
            var e = a.port;
            "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
          })
        : ((b = a.ajax),
          (a.ajax = function (d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode,
              f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" === e
              ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f])
              : b.apply(this, arguments);
          })),
      a
    );
  });
  !(function (a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : a(
          "object" == typeof module && module.exports ? require("jquery") : jQuery
        );
  })(function (a) {
    function b(b) {
      var c = {},
        d = /^jQuery\d+$/;
      return (
        a.each(b.attributes, function (a, b) {
          b.specified && !d.test(b.name) && (c[b.name] = b.value);
        }),
        c
      );
    }
  
    function c(b, c) {
      var d = this,
        f = a(d);
      if (d.value == f.attr("placeholder") && f.hasClass(m.customClass))
        if (f.data("placeholder-password")) {
          if (
            ((f = f
              .hide()
              .nextAll('input[type="password"]:first')
              .show()
              .attr("id", f.removeAttr("id").data("placeholder-id"))),
            b === !0)
          )
            return (f[0].value = c);
          f.focus();
        } else
          (d.value = ""), f.removeClass(m.customClass), d == e() && d.select();
    }
  
    function d() {
      var d,
        e = this,
        f = a(e),
        g = this.id;
      if ("" === e.value) {
        if ("password" === e.type) {
          if (!f.data("placeholder-textinput")) {
            try {
              d = f.clone().prop({
                type: "text",
              });
            } catch (h) {
              d = a("<input>").attr(
                a.extend(b(this), {
                  type: "text",
                })
              );
            }
            d
              .removeAttr("name")
              .data({
                "placeholder-password": f,
                "placeholder-id": g,
              })
              .bind("focus.placeholder", c),
              f
                .data({
                  "placeholder-textinput": d,
                  "placeholder-id": g,
                })
                .before(d);
          }
          f = f
            .removeAttr("id")
            .hide()
            .prevAll('input[type="text"]:first')
            .attr("id", g)
            .show();
        }
        f.addClass(m.customClass), (f[0].value = f.attr("placeholder"));
      } else f.removeClass(m.customClass);
    }
  
    function e() {
      try {
        return document.activeElement;
      } catch (a) {}
    }
    var f,
      g,
      h =
        "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
      i = "placeholder" in document.createElement("input") && !h,
      j = "placeholder" in document.createElement("textarea") && !h,
      k = a.valHooks,
      l = a.propHooks;
    if (i && j)
      (g = a.fn.placeholder =
        function () {
          return this;
        }),
        (g.input = g.textarea = !0);
    else {
      var m = {};
      (g = a.fn.placeholder =
        function (b) {
          var e = {
            customClass: "placeholder",
          };
          m = a.extend({}, e, b);
          var f = this;
          return (
            f
              .filter((i ? "textarea" : ":input") + "[placeholder]")
              .not("." + m.customClass)
              .bind({
                "focus.placeholder": c,
                "blur.placeholder": d,
              })
              .data("placeholder-enabled", !0)
              .trigger("blur.placeholder"),
            f
          );
        }),
        (g.input = i),
        (g.textarea = j),
        (f = {
          get: function (b) {
            var c = a(b),
              d = c.data("placeholder-password");
            return d
              ? d[0].value
              : c.data("placeholder-enabled") && c.hasClass(m.customClass)
              ? ""
              : b.value;
          },
          set: function (b, f) {
            var g = a(b),
              h = g.data("placeholder-password");
            return h
              ? (h[0].value = f)
              : g.data("placeholder-enabled")
              ? ("" === f
                  ? ((b.value = f), b != e() && d.call(b))
                  : g.hasClass(m.customClass)
                  ? c.call(b, !0, f) || (b.value = f)
                  : (b.value = f),
                g)
              : (b.value = f);
          },
        }),
        i || ((k.input = f), (l.value = f)),
        j || ((k.textarea = f), (l.value = f)),
        a(function () {
          a(document).delegate("form", "submit.placeholder", function () {
            var b = a("." + m.customClass, this).each(c);
            setTimeout(function () {
              b.each(d);
            }, 10);
          });
        }),
        a(window).bind("beforeunload.placeholder", function () {
          a("." + m.customClass).each(function () {
            this.value = "";
          });
        });
    }
  });
  !(function () {
    "use strict";
  
    function t(o) {
      if (!o) throw new Error("No options passed to Waypoint constructor");
      if (!o.element)
        throw new Error("No element option passed to Waypoint constructor");
      if (!o.handler)
        throw new Error("No handler option passed to Waypoint constructor");
      (this.key = "waypoint-" + e),
        (this.options = t.Adapter.extend({}, t.defaults, o)),
        (this.element = this.options.element),
        (this.adapter = new t.Adapter(this.element)),
        (this.callback = o.handler),
        (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
        (this.enabled = this.options.enabled),
        (this.triggerPoint = null),
        (this.group = t.Group.findOrCreate({
          name: this.options.group,
          axis: this.axis,
        })),
        (this.context = t.Context.findOrCreateByElement(this.options.context)),
        t.offsetAliases[this.options.offset] &&
          (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        (i[this.key] = this),
        (e += 1);
    }
    var e = 0,
      i = {};
    (t.prototype.queueTrigger = function (t) {
      this.group.queueTrigger(this, t);
    }),
      (t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t);
      }),
      (t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key];
      }),
      (t.prototype.disable = function () {
        return (this.enabled = !1), this;
      }),
      (t.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this;
      }),
      (t.prototype.next = function () {
        return this.group.next(this);
      }),
      (t.prototype.previous = function () {
        return this.group.previous(this);
      }),
      (t.invokeAll = function (t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]();
      }),
      (t.destroyAll = function () {
        t.invokeAll("destroy");
      }),
      (t.disableAll = function () {
        t.invokeAll("disable");
      }),
      (t.enableAll = function () {
        t.invokeAll("enable");
      }),
      (t.refreshAll = function () {
        t.Context.refreshAll();
      }),
      (t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
      }),
      (t.viewportWidth = function () {
        return document.documentElement.clientWidth;
      }),
      (t.adapters = []),
      (t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0,
      }),
      (t.offsetAliases = {
        "bottom-in-view": function () {
          return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function () {
          return this.context.innerWidth() - this.adapter.outerWidth();
        },
      }),
      (window.Waypoint = t);
  })(),
    (function () {
      "use strict";
  
      function t(t) {
        window.setTimeout(t, 1e3 / 60);
      }
  
      function e(t) {
        (this.element = t),
          (this.Adapter = n.Adapter),
          (this.adapter = new this.Adapter(t)),
          (this.key = "waypoint-context-" + i),
          (this.didScroll = !1),
          (this.didResize = !1),
          (this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop(),
          }),
          (this.waypoints = {
            vertical: {},
            horizontal: {},
          }),
          (t.waypointContextKey = this.key),
          (o[t.waypointContextKey] = this),
          (i += 1),
          this.createThrottledScrollHandler(),
          this.createThrottledResizeHandler();
      }
      var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
      (e.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        (this.waypoints[e][t.key] = t), this.refresh();
      }),
        (e.prototype.checkEmpty = function () {
          var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
          t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
        }),
        (e.prototype.createThrottledResizeHandler = function () {
          function t() {
            e.handleResize(), (e.didResize = !1);
          }
          var e = this;
          this.adapter.on("resize.waypoints", function () {
            e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
          });
        }),
        (e.prototype.createThrottledScrollHandler = function () {
          function t() {
            e.handleScroll(), (e.didScroll = !1);
          }
          var e = this;
          this.adapter.on("scroll.waypoints", function () {
            (!e.didScroll || n.isTouch) &&
              ((e.didScroll = !0), n.requestAnimationFrame(t));
          });
        }),
        (e.prototype.handleResize = function () {
          n.Context.refreshAll();
        }),
        (e.prototype.handleScroll = function () {
          var t = {},
            e = {
              horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
              },
              vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
              },
            };
          for (var i in e) {
            var o = e[i],
              n = o.newScroll > o.oldScroll,
              r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
              var a = this.waypoints[i][s],
                l = o.oldScroll < a.triggerPoint,
                h = o.newScroll >= a.triggerPoint,
                p = l && h,
                u = !l && !h;
              (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
            }
          }
          for (var c in t) t[c].flushTriggers();
          this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll,
          };
        }),
        (e.prototype.innerHeight = function () {
          return this.element == this.element.window
            ? n.viewportHeight()
            : this.adapter.innerHeight();
        }),
        (e.prototype.remove = function (t) {
          delete this.waypoints[t.axis][t.key], this.checkEmpty();
        }),
        (e.prototype.innerWidth = function () {
          return this.element == this.element.window
            ? n.viewportWidth()
            : this.adapter.innerWidth();
        }),
        (e.prototype.destroy = function () {
          var t = [];
          for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
          for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
        }),
        (e.prototype.refresh = function () {
          var t,
            e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
          this.handleScroll(),
            (t = {
              horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left",
              },
              vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top",
              },
            });
          for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
              var l,
                h,
                p,
                u,
                c,
                d = this.waypoints[r][a],
                f = d.options.offset,
                w = d.triggerPoint,
                y = 0,
                g = null == w;
              d.element !== d.element.window &&
                (y = d.adapter.offset()[s.offsetProp]),
                "function" == typeof f
                  ? (f = f.apply(d))
                  : "string" == typeof f &&
                    ((f = parseFloat(f)),
                    d.options.offset.indexOf("%") > -1 &&
                      (f = Math.ceil((s.contextDimension * f) / 100))),
                (l = s.contextScroll - s.contextOffset),
                (d.triggerPoint = y + l - f),
                (h = w < s.oldScroll),
                (p = d.triggerPoint >= s.oldScroll),
                (u = h && p),
                (c = !h && !p),
                !g && u
                  ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                  : !g && c
                  ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                  : g &&
                    s.oldScroll >= d.triggerPoint &&
                    (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
            }
          }
          return (
            n.requestAnimationFrame(function () {
              for (var t in o) o[t].flushTriggers();
            }),
            this
          );
        }),
        (e.findOrCreateByElement = function (t) {
          return e.findByElement(t) || new e(t);
        }),
        (e.refreshAll = function () {
          for (var t in o) o[t].refresh();
        }),
        (e.findByElement = function (t) {
          return o[t.waypointContextKey];
        }),
        (window.onload = function () {
          r && r(), e.refreshAll();
        }),
        (n.requestAnimationFrame = function (e) {
          var i =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            t;
          i.call(window, e);
        }),
        (n.Context = e);
    })(),
    (function () {
      "use strict";
  
      function t(t, e) {
        return t.triggerPoint - e.triggerPoint;
      }
  
      function e(t, e) {
        return e.triggerPoint - t.triggerPoint;
      }
  
      function i(t) {
        (this.name = t.name),
          (this.axis = t.axis),
          (this.id = this.name + "-" + this.axis),
          (this.waypoints = []),
          this.clearTriggerQueues(),
          (o[this.axis][this.name] = this);
      }
      var o = {
          vertical: {},
          horizontal: {},
        },
        n = window.Waypoint;
      (i.prototype.add = function (t) {
        this.waypoints.push(t);
      }),
        (i.prototype.clearTriggerQueues = function () {
          this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: [],
          };
        }),
        (i.prototype.flushTriggers = function () {
          for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
              n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
              var a = o[r];
              (a.options.continuous || r === o.length - 1) && a.trigger([i]);
            }
          }
          this.clearTriggerQueues();
        }),
        (i.prototype.next = function (e) {
          this.waypoints.sort(t);
          var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
          return o ? null : this.waypoints[i + 1];
        }),
        (i.prototype.previous = function (e) {
          this.waypoints.sort(t);
          var i = n.Adapter.inArray(e, this.waypoints);
          return i ? this.waypoints[i - 1] : null;
        }),
        (i.prototype.queueTrigger = function (t, e) {
          this.triggerQueues[e].push(t);
        }),
        (i.prototype.remove = function (t) {
          var e = n.Adapter.inArray(t, this.waypoints);
          e > -1 && this.waypoints.splice(e, 1);
        }),
        (i.prototype.first = function () {
          return this.waypoints[0];
        }),
        (i.prototype.last = function () {
          return this.waypoints[this.waypoints.length - 1];
        }),
        (i.findOrCreate = function (t) {
          return o[t.axis][t.name] || new i(t);
        }),
        (n.Group = i);
    })(),
    (function () {
      "use strict";
  
      function t(t) {
        this.$element = e(t);
      }
      var e = window.jQuery,
        i = window.Waypoint;
      e.each(
        [
          "innerHeight",
          "innerWidth",
          "off",
          "offset",
          "on",
          "outerHeight",
          "outerWidth",
          "scrollLeft",
          "scrollTop",
        ],
        function (e, i) {
          t.prototype[i] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t);
          };
        }
      ),
        e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
          t[o] = e[o];
        }),
        i.adapters.push({
          name: "jquery",
          Adapter: t,
        }),
        (i.Adapter = t);
    })(),
    (function () {
      "use strict";
  
      function t(t) {
        return function () {
          var i = [],
            o = arguments[0];
          return (
            t.isFunction(arguments[0]) &&
              ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
            this.each(function () {
              var n = t.extend({}, o, {
                element: this,
              });
              "string" == typeof n.context &&
                (n.context = t(this).closest(n.context)[0]),
                i.push(new e(n));
            }),
            i
          );
        };
      }
      var e = window.Waypoint;
      window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
        window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
    })();
  !(function (t, i, e, s) {
    function o(i, e) {
      var h = this;
      "object" == typeof e &&
        (delete e.refresh, delete e.render, t.extend(this, e)),
        (this.$element = t(i)),
        !this.imageSrc &&
          this.$element.is("img") &&
          (this.imageSrc = this.$element.attr("src"));
      var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
      if (
        (r.length < 1 && r.push("center"),
        1 == r.length && r.push(r[0]),
        ("top" == r[0] ||
          "bottom" == r[0] ||
          "left" == r[1] ||
          "right" == r[1]) &&
          (r = [r[1], r[0]]),
        this.positionX != s && (r[0] = this.positionX.toLowerCase()),
        this.positionY != s && (r[1] = this.positionY.toLowerCase()),
        (h.positionX = r[0]),
        (h.positionY = r[1]),
        "left" != this.positionX &&
          "right" != this.positionX &&
          (this.positionX = isNaN(parseInt(this.positionX))
            ? "center"
            : parseInt(this.positionX)),
        "top" != this.positionY &&
          "bottom" != this.positionY &&
          (this.positionY = isNaN(parseInt(this.positionY))
            ? "center"
            : parseInt(this.positionY)),
        (this.position =
          this.positionX +
          (isNaN(this.positionX) ? "" : "px") +
          " " +
          this.positionY +
          (isNaN(this.positionY) ? "" : "px")),
        navigator.userAgent.match(/(iPod|iPhone|iPad)/))
      )
        return (
          this.imageSrc &&
            this.iosFix &&
            !this.$element.is("img") &&
            this.$element.css({
              backgroundImage: "url(" + this.imageSrc + ")",
              backgroundSize: "cover",
              backgroundPosition: this.position,
            }),
          this
        );
      if (navigator.userAgent.match(/(Android)/))
        return (
          this.imageSrc &&
            this.androidFix &&
            !this.$element.is("img") &&
            this.$element.css({
              backgroundImage: "url(" + this.imageSrc + ")",
              backgroundSize: "cover",
              backgroundPosition: this.position,
            }),
          this
        );
      this.$mirror = t("<div />").prependTo("body");
      var a = this.$element.find(">.parallax-slider"),
        n = !1;
      0 == a.length
        ? (this.$slider = t("<img />").prependTo(this.$mirror))
        : ((this.$slider = a.prependTo(this.$mirror)), (n = !0)),
        this.$mirror.addClass("parallax-mirror").css({
          visibility: "hidden",
          zIndex: this.zIndex,
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden",
        }),
        this.$slider.addClass("parallax-slider").one("load", function () {
          (h.naturalHeight && h.naturalWidth) ||
            ((h.naturalHeight = this.naturalHeight || this.height || 1),
            (h.naturalWidth = this.naturalWidth || this.width || 1)),
            (h.aspectRatio = h.naturalWidth / h.naturalHeight),
            o.isSetup || o.setup(),
            o.sliders.push(h),
            (o.isFresh = !1),
            o.requestRender();
        }),
        n || (this.$slider[0].src = this.imageSrc),
        ((this.naturalHeight && this.naturalWidth) ||
          this.$slider[0].complete ||
          a.length > 0) &&
          this.$slider.trigger("load");
    }
  
    function h(s) {
      return this.each(function () {
        var h = t(this),
          r = "object" == typeof s && s;
        this == i || this == e || h.is("body")
          ? o.configure(r)
          : h.data("px.parallax")
          ? "object" == typeof s && t.extend(h.data("px.parallax"), r)
          : ((r = t.extend({}, h.data(), r)),
            h.data("px.parallax", new o(this, r))),
          "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
      });
    }
    !(function () {
      for (
        var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0;
        s < e.length && !i.requestAnimationFrame;
        ++s
      )
        (i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"]),
          (i.cancelAnimationFrame =
            i[e[s] + "CancelAnimationFrame"] ||
            i[e[s] + "CancelRequestAnimationFrame"]);
      i.requestAnimationFrame ||
        (i.requestAnimationFrame = function (e) {
          var s = new Date().getTime(),
            o = Math.max(0, 16 - (s - t)),
            h = i.setTimeout(function () {
              e(s + o);
            }, o);
          return (t = s + o), h;
        }),
        i.cancelAnimationFrame ||
          (i.cancelAnimationFrame = function (t) {
            clearTimeout(t);
          });
    })(),
      t.extend(o.prototype, {
        speed: 0.2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        refresh: function () {
          (this.boxWidth = this.$element.outerWidth()),
            (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
            (this.boxOffsetTop = this.$element.offset().top - this.bleed),
            (this.boxOffsetLeft = this.$element.offset().left),
            (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
          var t = o.winHeight,
            i = o.docHeight,
            e = Math.min(this.boxOffsetTop, i - t),
            s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
            h = (this.boxHeight + (e - s) * (1 - this.speed)) | 0,
            r = ((this.boxOffsetTop - e) * (1 - this.speed)) | 0;
          if (h * this.aspectRatio >= this.boxWidth) {
            (this.imageWidth = (h * this.aspectRatio) | 0),
              (this.imageHeight = h),
              (this.offsetBaseTop = r);
            var a = this.imageWidth - this.boxWidth;
            this.offsetLeft =
              "left" == this.positionX
                ? 0
                : "right" == this.positionX
                ? -a
                : isNaN(this.positionX)
                ? (-a / 2) | 0
                : Math.max(this.positionX, -a);
          } else {
            (this.imageWidth = this.boxWidth),
              (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
              (this.offsetLeft = 0);
            var a = this.imageHeight - h;
            this.offsetBaseTop =
              "top" == this.positionY
                ? r
                : "bottom" == this.positionY
                ? r - a
                : isNaN(this.positionY)
                ? (r - a / 2) | 0
                : r + Math.max(this.positionY, -a);
          }
        },
        render: function () {
          var t = o.scrollTop,
            i = o.scrollLeft,
            e = this.overScrollFix ? o.overScroll : 0,
            s = t + o.winHeight;
          this.boxOffsetBottom > t && this.boxOffsetTop <= s
            ? ((this.visibility = "visible"),
              (this.mirrorTop = this.boxOffsetTop - t),
              (this.mirrorLeft = this.boxOffsetLeft - i),
              (this.offsetTop =
                this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
            : (this.visibility = "hidden"),
            this.$mirror.css({
              transform: "translate3d(0px, 0px, 0px)",
              visibility: this.visibility,
              top: this.mirrorTop - e,
              left: this.mirrorLeft,
              height: this.boxHeight,
              width: this.boxWidth,
            }),
            this.$slider.css({
              transform: "translate3d(0px, 0px, 0px)",
              position: "absolute",
              top: this.offsetTop,
              left: this.offsetLeft,
              height: this.imageHeight,
              width: this.imageWidth,
              maxWidth: "none",
            });
        },
      }),
      t.extend(o, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function () {
          if (!this.isReady) {
            var s = t(e),
              h = t(i),
              r = function () {
                (o.winHeight = h.height()),
                  (o.winWidth = h.width()),
                  (o.docHeight = s.height()),
                  (o.docWidth = s.width());
              },
              a = function () {
                var t = h.scrollTop(),
                  i = o.docHeight - o.winHeight,
                  e = o.docWidth - o.winWidth;
                (o.scrollTop = Math.max(0, Math.min(i, t))),
                  (o.scrollLeft = Math.max(0, Math.min(e, h.scrollLeft()))),
                  (o.overScroll = Math.max(t - i, Math.min(t, 0)));
              };
            h
              .on("resize.px.parallax load.px.parallax", function () {
                r(), (o.isFresh = !1), o.requestRender();
              })
              .on("scroll.px.parallax load.px.parallax", function () {
                a(), o.requestRender();
              }),
              r(),
              a(),
              (this.isReady = !0);
          }
        },
        configure: function (i) {
          "object" == typeof i &&
            (delete i.refresh, delete i.render, t.extend(this.prototype, i));
        },
        refresh: function () {
          t.each(this.sliders, function () {
            this.refresh();
          }),
            (this.isFresh = !0);
        },
        render: function () {
          this.isFresh || this.refresh(),
            t.each(this.sliders, function () {
              this.render();
            });
        },
        requestRender: function () {
          var t = this;
          this.isBusy ||
            ((this.isBusy = !0),
            i.requestAnimationFrame(function () {
              t.render(), (t.isBusy = !1);
            }));
        },
        destroy: function (e) {
          var s,
            h = t(e).data("px.parallax");
          for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)
            this.sliders[s] == h && this.sliders.splice(s, 1);
          t(e).data("px.parallax", !1),
            0 === this.sliders.length &&
              (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),
              (this.isReady = !1),
              (o.isSetup = !1));
        },
      });
    var r = t.fn.parallax;
    (t.fn.parallax = h),
      (t.fn.parallax.Constructor = o),
      (t.fn.parallax.noConflict = function () {
        return (t.fn.parallax = r), this;
      }),
      t(function () {
        t('[data-parallax="scroll"]').parallax();
      });
  })(jQuery, window, document);
  !(function (t, e) {
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
  })(window, function (t, e) {
    "use strict";
  
    function i(i, r, a) {
      function h(t, e, n) {
        var o,
          r = "$()." + i + '("' + e + '")';
        return (
          t.each(function (t, h) {
            var u = a.data(h, i);
            if (!u)
              return void s(
                i + " not initialized. Cannot call methods, i.e. " + r
              );
            var d = u[e];
            if (!d || "_" == e.charAt(0))
              return void s(r + " is not a valid method");
            var l = d.apply(u, n);
            o = void 0 === o ? l : o;
          }),
          void 0 !== o ? o : t
        );
      }
  
      function u(t, e) {
        t.each(function (t, n) {
          var o = a.data(n, i);
          o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
        });
      }
      (a = a || e || t.jQuery),
        a &&
          (r.prototype.option ||
            (r.prototype.option = function (t) {
              a.isPlainObject(t) &&
                (this.options = a.extend(!0, this.options, t));
            }),
          (a.fn[i] = function (t) {
            if ("string" == typeof t) {
              var e = o.call(arguments, 1);
              return h(this, t, e);
            }
            return u(this, t), this;
          }),
          n(a));
    }
  
    function n(t) {
      !t || (t && t.bridget) || (t.bridget = i);
    }
    var o = Array.prototype.slice,
      r = t.console,
      s =
        "undefined" == typeof r
          ? function () {}
          : function (t) {
              r.error(t);
            };
    return n(e || t.jQuery), i;
  }),
    (function (t, e) {
      "function" == typeof define && define.amd
        ? define("ev-emitter/ev-emitter", e)
        : "object" == typeof module && module.exports
        ? (module.exports = e())
        : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
      function t() {}
      var e = t.prototype;
      return (
        (e.on = function (t, e) {
          if (t && e) {
            var i = (this._events = this._events || {}),
              n = (i[t] = i[t] || []);
            return -1 == n.indexOf(e) && n.push(e), this;
          }
        }),
        (e.once = function (t, e) {
          if (t && e) {
            this.on(t, e);
            var i = (this._onceEvents = this._onceEvents || {}),
              n = (i[t] = i[t] || {});
            return (n[e] = !0), this;
          }
        }),
        (e.off = function (t, e) {
          var i = this._events && this._events[t];
          if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this;
          }
        }),
        (e.emitEvent = function (t, e) {
          var i = this._events && this._events[t];
          if (i && i.length) {
            var n = 0,
              o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o; ) {
              var s = r && r[o];
              s && (this.off(t, o), delete r[o]),
                o.apply(this, e),
                (n += s ? 0 : 1),
                (o = i[n]);
            }
            return this;
          }
        }),
        t
      );
    }),
    (function (t, e) {
      "use strict";
      "function" == typeof define && define.amd
        ? define("get-size/get-size", [], function () {
            return e();
          })
        : "object" == typeof module && module.exports
        ? (module.exports = e())
        : (t.getSize = e());
    })(window, function () {
      "use strict";
  
      function t(t) {
        var e = parseFloat(t),
          i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e;
      }
  
      function e() {}
  
      function i() {
        for (
          var t = {
              width: 0,
              height: 0,
              innerWidth: 0,
              innerHeight: 0,
              outerWidth: 0,
              outerHeight: 0,
            },
            e = 0;
          u > e;
          e++
        ) {
          var i = h[e];
          t[i] = 0;
        }
        return t;
      }
  
      function n(t) {
        var e = getComputedStyle(t);
        return (
          e ||
            a(
              "Style returned " +
                e +
                ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
            ),
          e
        );
      }
  
      function o() {
        if (!d) {
          d = !0;
          var e = document.createElement("div");
          (e.style.width = "200px"),
            (e.style.padding = "1px 2px 3px 4px"),
            (e.style.borderStyle = "solid"),
            (e.style.borderWidth = "1px 2px 3px 4px"),
            (e.style.boxSizing = "border-box");
          var i = document.body || document.documentElement;
          i.appendChild(e);
          var o = n(e);
          (r.isBoxSizeOuter = s = 200 == t(o.width)), i.removeChild(e);
        }
      }
  
      function r(e) {
        if (
          (o(),
          "string" == typeof e && (e = document.querySelector(e)),
          e && "object" == typeof e && e.nodeType)
        ) {
          var r = n(e);
          if ("none" == r.display) return i();
          var a = {};
          (a.width = e.offsetWidth), (a.height = e.offsetHeight);
          for (
            var d = (a.isBorderBox = "border-box" == r.boxSizing), l = 0;
            u > l;
            l++
          ) {
            var c = h[l],
              f = r[c],
              m = parseFloat(f);
            a[c] = isNaN(m) ? 0 : m;
          }
          var p = a.paddingLeft + a.paddingRight,
            g = a.paddingTop + a.paddingBottom,
            y = a.marginLeft + a.marginRight,
            v = a.marginTop + a.marginBottom,
            _ = a.borderLeftWidth + a.borderRightWidth,
            z = a.borderTopWidth + a.borderBottomWidth,
            E = d && s,
            b = t(r.width);
          b !== !1 && (a.width = b + (E ? 0 : p + _));
          var x = t(r.height);
          return (
            x !== !1 && (a.height = x + (E ? 0 : g + z)),
            (a.innerWidth = a.width - (p + _)),
            (a.innerHeight = a.height - (g + z)),
            (a.outerWidth = a.width + y),
            (a.outerHeight = a.height + v),
            a
          );
        }
      }
      var s,
        a =
          "undefined" == typeof console
            ? e
            : function (t) {
                console.error(t);
              },
        h = [
          "paddingLeft",
          "paddingRight",
          "paddingTop",
          "paddingBottom",
          "marginLeft",
          "marginRight",
          "marginTop",
          "marginBottom",
          "borderLeftWidth",
          "borderRightWidth",
          "borderTopWidth",
          "borderBottomWidth",
        ],
        u = h.length,
        d = !1;
      return r;
    }),
    (function (t, e) {
      "use strict";
      "function" == typeof define && define.amd
        ? define("desandro-matches-selector/matches-selector", e)
        : "object" == typeof module && module.exports
        ? (module.exports = e())
        : (t.matchesSelector = e());
    })(window, function () {
      "use strict";
      var t = (function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
          var n = e[i],
            o = n + "MatchesSelector";
          if (t[o]) return o;
        }
      })();
      return function (e, i) {
        return e[t](i);
      };
    }),
    (function (t, e) {
      "function" == typeof define && define.amd
        ? define(
            "fizzy-ui-utils/utils",
            ["desandro-matches-selector/matches-selector"],
            function (i) {
              return e(t, i);
            }
          )
        : "object" == typeof module && module.exports
        ? (module.exports = e(t, require("desandro-matches-selector")))
        : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
      var i = {};
      (i.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      }),
        (i.modulo = function (t, e) {
          return ((t % e) + e) % e;
        }),
        (i.makeArray = function (t) {
          var e = [];
          if (Array.isArray(t)) e = t;
          else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
          else e.push(t);
          return e;
        }),
        (i.removeFrom = function (t, e) {
          var i = t.indexOf(e);
          -1 != i && t.splice(i, 1);
        }),
        (i.getParent = function (t, i) {
          for (; t != document.body; )
            if (((t = t.parentNode), e(t, i))) return t;
        }),
        (i.getQueryElement = function (t) {
          return "string" == typeof t ? document.querySelector(t) : t;
        }),
        (i.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (i.filterFindElements = function (t, n) {
          t = i.makeArray(t);
          var o = [];
          return (
            t.forEach(function (t) {
              if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                  o.push(i[r]);
              }
            }),
            o
          );
        }),
        (i.debounceMethod = function (t, e, i) {
          var n = t.prototype[e],
            o = e + "Timeout";
          t.prototype[e] = function () {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
              r = this;
            this[o] = setTimeout(function () {
              n.apply(r, e), delete r[o];
            }, i || 100);
          };
        }),
        (i.docReady = function (t) {
          var e = document.readyState;
          "complete" == e || "interactive" == e
            ? setTimeout(t)
            : document.addEventListener("DOMContentLoaded", t);
        }),
        (i.toDashed = function (t) {
          return t
            .replace(/(.)([A-Z])/g, function (t, e, i) {
              return e + "-" + i;
            })
            .toLowerCase();
        });
      var n = t.console;
      return (
        (i.htmlInit = function (e, o) {
          i.docReady(function () {
            var r = i.toDashed(o),
              s = "data-" + r,
              a = document.querySelectorAll("[" + s + "]"),
              h = document.querySelectorAll(".js-" + r),
              u = i.makeArray(a).concat(i.makeArray(h)),
              d = s + "-options",
              l = t.jQuery;
            u.forEach(function (t) {
              var i,
                r = t.getAttribute(s) || t.getAttribute(d);
              try {
                i = r && JSON.parse(r);
              } catch (a) {
                return void (
                  n &&
                  n.error("Error parsing " + s + " on " + t.className + ": " + a)
                );
              }
              var h = new e(t, i);
              l && l.data(t, o, h);
            });
          });
        }),
        i
      );
    }),
    (function (t, e) {
      "function" == typeof define && define.amd
        ? define(
            "outlayer/item",
            ["ev-emitter/ev-emitter", "get-size/get-size"],
            e
          )
        : "object" == typeof module && module.exports
        ? (module.exports = e(require("ev-emitter"), require("get-size")))
        : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
      "use strict";
  
      function i(t) {
        for (var e in t) return !1;
        return (e = null), !0;
      }
  
      function n(t, e) {
        t &&
          ((this.element = t),
          (this.layout = e),
          (this.position = {
            x: 0,
            y: 0,
          }),
          this._create());
      }
  
      function o(t) {
        return t.replace(/([A-Z])/g, function (t) {
          return "-" + t.toLowerCase();
        });
      }
      var r = document.documentElement.style,
        s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        h = {
          WebkitTransition: "webkitTransitionEnd",
          transition: "transitionend",
        }[s],
        u = {
          transform: a,
          transition: s,
          transitionDuration: s + "Duration",
          transitionProperty: s + "Property",
          transitionDelay: s + "Delay",
        },
        d = (n.prototype = Object.create(t.prototype));
      (d.constructor = n),
        (d._create = function () {
          (this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {},
          }),
            this.css({
              position: "absolute",
            });
        }),
        (d.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (d.getSize = function () {
          this.size = e(this.element);
        }),
        (d.css = function (t) {
          var e = this.element.style;
          for (var i in t) {
            var n = u[i] || i;
            e[n] = t[i];
          }
        }),
        (d.getPosition = function () {
          var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            r = this.layout.size,
            s =
              -1 != n.indexOf("%")
                ? (parseFloat(n) / 100) * r.width
                : parseInt(n, 10),
            a =
              -1 != o.indexOf("%")
                ? (parseFloat(o) / 100) * r.height
                : parseInt(o, 10);
          (s = isNaN(s) ? 0 : s),
            (a = isNaN(a) ? 0 : a),
            (s -= e ? r.paddingLeft : r.paddingRight),
            (a -= i ? r.paddingTop : r.paddingBottom),
            (this.position.x = s),
            (this.position.y = a);
        }),
        (d.layoutPosition = function () {
          var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            s = i ? "right" : "left",
            a = this.position.x + t[o];
          (e[r] = this.getXValue(a)), (e[s] = "");
          var h = n ? "paddingTop" : "paddingBottom",
            u = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            l = this.position.y + t[h];
          (e[u] = this.getYValue(l)),
            (e[d] = ""),
            this.css(e),
            this.emitEvent("layout", [this]);
        }),
        (d.getXValue = function (t) {
          var e = this.layout._getOption("horizontal");
          return this.layout.options.percentPosition && !e
            ? (t / this.layout.size.width) * 100 + "%"
            : t + "px";
        }),
        (d.getYValue = function (t) {
          var e = this.layout._getOption("horizontal");
          return this.layout.options.percentPosition && e
            ? (t / this.layout.size.height) * 100 + "%"
            : t + "px";
        }),
        (d._transitionTo = function (t, e) {
          this.getPosition();
          var i = this.position.x,
            n = this.position.y,
            o = parseInt(t, 10),
            r = parseInt(e, 10),
            s = o === this.position.x && r === this.position.y;
          if ((this.setPosition(t, e), s && !this.isTransitioning))
            return void this.layoutPosition();
          var a = t - i,
            h = e - n,
            u = {};
          (u.transform = this.getTranslate(a, h)),
            this.transition({
              to: u,
              onTransitionEnd: {
                transform: this.layoutPosition,
              },
              isCleaning: !0,
            });
        }),
        (d.getTranslate = function (t, e) {
          var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
          return (
            (t = i ? t : -t),
            (e = n ? e : -e),
            "translate3d(" + t + "px, " + e + "px, 0)"
          );
        }),
        (d.goTo = function (t, e) {
          this.setPosition(t, e), this.layoutPosition();
        }),
        (d.moveTo = d._transitionTo),
        (d.setPosition = function (t, e) {
          (this.position.x = parseInt(t, 10)),
            (this.position.y = parseInt(e, 10));
        }),
        (d._nonTransition = function (t) {
          this.css(t.to), t.isCleaning && this._removeStyles(t.to);
          for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
        }),
        (d.transition = function (t) {
          if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        });
      var l = "opacity," + o(a);
      (d.enableTransition = function () {
        if (!this.isTransitioning) {
          var t = this.layout.options.transitionDuration;
          (t = "number" == typeof t ? t + "ms" : t),
            this.css({
              transitionProperty: l,
              transitionDuration: t,
              transitionDelay: this.staggerDelay || 0,
            }),
            this.element.addEventListener(h, this, !1);
        }
      }),
        (d.onwebkitTransitionEnd = function (t) {
          this.ontransitionend(t);
        }),
        (d.onotransitionend = function (t) {
          this.ontransitionend(t);
        });
      var c = {
        "-webkit-transform": "transform",
      };
      (d.ontransitionend = function (t) {
        if (t.target === this.element) {
          var e = this._transn,
            n = c[t.propertyName] || t.propertyName;
          if (
            (delete e.ingProperties[n],
            i(e.ingProperties) && this.disableTransition(),
            n in e.clean &&
              ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
            n in e.onEnd)
          ) {
            var o = e.onEnd[n];
            o.call(this), delete e.onEnd[n];
          }
          this.emitEvent("transitionEnd", [this]);
        }
      }),
        (d.disableTransition = function () {
          this.removeTransitionStyles(),
            this.element.removeEventListener(h, this, !1),
            (this.isTransitioning = !1);
        }),
        (d._removeStyles = function (t) {
          var e = {};
          for (var i in t) e[i] = "";
          this.css(e);
        });
      var f = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: "",
      };
      return (
        (d.removeTransitionStyles = function () {
          this.css(f);
        }),
        (d.stagger = function (t) {
          (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
        }),
        (d.removeElem = function () {
          this.element.parentNode.removeChild(this.element),
            this.css({
              display: "",
            }),
            this.emitEvent("remove", [this]);
        }),
        (d.remove = function () {
          return s && parseFloat(this.layout.options.transitionDuration)
            ? (this.once("transitionEnd", function () {
                this.removeElem();
              }),
              void this.hide())
            : void this.removeElem();
        }),
        (d.reveal = function () {
          delete this.isHidden,
            this.css({
              display: "",
            });
          var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
          (e[i] = this.onRevealTransitionEnd),
            this.transition({
              from: t.hiddenStyle,
              to: t.visibleStyle,
              isCleaning: !0,
              onTransitionEnd: e,
            });
        }),
        (d.onRevealTransitionEnd = function () {
          this.isHidden || this.emitEvent("reveal");
        }),
        (d.getHideRevealTransitionEndProperty = function (t) {
          var e = this.layout.options[t];
          if (e.opacity) return "opacity";
          for (var i in e) return i;
        }),
        (d.hide = function () {
          (this.isHidden = !0),
            this.css({
              display: "",
            });
          var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
          (e[i] = this.onHideTransitionEnd),
            this.transition({
              from: t.visibleStyle,
              to: t.hiddenStyle,
              isCleaning: !0,
              onTransitionEnd: e,
            });
        }),
        (d.onHideTransitionEnd = function () {
          this.isHidden &&
            (this.css({
              display: "none",
            }),
            this.emitEvent("hide"));
        }),
        (d.destroy = function () {
          this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: "",
          });
        }),
        n
      );
    }),
    (function (t, e) {
      "use strict";
      "function" == typeof define && define.amd
        ? define(
            "outlayer/outlayer",
            [
              "ev-emitter/ev-emitter",
              "get-size/get-size",
              "fizzy-ui-utils/utils",
              "./item",
            ],
            function (i, n, o, r) {
              return e(t, i, n, o, r);
            }
          )
        : "object" == typeof module && module.exports
        ? (module.exports = e(
            t,
            require("ev-emitter"),
            require("get-size"),
            require("fizzy-ui-utils"),
            require("./item")
          ))
        : (t.Outlayer = e(
            t,
            t.EvEmitter,
            t.getSize,
            t.fizzyUIUtils,
            t.Outlayer.Item
          ));
    })(window, function (t, e, i, n, o) {
      "use strict";
  
      function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i)
          return void (
            h &&
            h.error(
              "Bad element for " + this.constructor.namespace + ": " + (i || t)
            )
          );
        (this.element = i),
          u && (this.$element = u(this.element)),
          (this.options = n.extend({}, this.constructor.defaults)),
          this.option(e);
        var o = ++l;
        (this.element.outlayerGUID = o), (c[o] = this), this._create();
        var r = this._getOption("initLayout");
        r && this.layout();
      }
  
      function s(t) {
        function e() {
          t.apply(this, arguments);
        }
        return (
          (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          e
        );
      }
  
      function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
          i = e && e[1],
          n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o;
      }
      var h = t.console,
        u = t.jQuery,
        d = function () {},
        l = 0,
        c = {};
      (r.namespace = "outlayer"),
        (r.Item = o),
        (r.defaults = {
          containerStyle: {
            position: "relative",
          },
          initLayout: !0,
          originLeft: !0,
          originTop: !0,
          resize: !0,
          resizeContainer: !0,
          transitionDuration: "0.4s",
          hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)",
          },
          visibleStyle: {
            opacity: 1,
            transform: "scale(1)",
          },
        });
      var f = r.prototype;
      n.extend(f, e.prototype),
        (f.option = function (t) {
          n.extend(this.options, t);
        }),
        (f._getOption = function (t) {
          var e = this.constructor.compatOptions[t];
          return e && void 0 !== this.options[e]
            ? this.options[e]
            : this.options[t];
        }),
        (r.compatOptions = {
          initLayout: "isInitLayout",
          horizontal: "isHorizontal",
          layoutInstant: "isLayoutInstant",
          originLeft: "isOriginLeft",
          originTop: "isOriginTop",
          resize: "isResizeBound",
          resizeContainer: "isResizingContainer",
        }),
        (f._create = function () {
          this.reloadItems(),
            (this.stamps = []),
            this.stamp(this.options.stamp),
            n.extend(this.element.style, this.options.containerStyle);
          var t = this._getOption("resize");
          t && this.bindResize();
        }),
        (f.reloadItems = function () {
          this.items = this._itemize(this.element.children);
        }),
        (f._itemize = function (t) {
          for (
            var e = this._filterFindItemElements(t),
              i = this.constructor.Item,
              n = [],
              o = 0;
            o < e.length;
            o++
          ) {
            var r = e[o],
              s = new i(r, this);
            n.push(s);
          }
          return n;
        }),
        (f._filterFindItemElements = function (t) {
          return n.filterFindElements(t, this.options.itemSelector);
        }),
        (f.getItemElements = function () {
          return this.items.map(function (t) {
            return t.element;
          });
        }),
        (f.layout = function () {
          this._resetLayout(), this._manageStamps();
          var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
          this.layoutItems(this.items, e), (this._isLayoutInited = !0);
        }),
        (f._init = f.layout),
        (f._resetLayout = function () {
          this.getSize();
        }),
        (f.getSize = function () {
          this.size = i(this.element);
        }),
        (f._getMeasurement = function (t, e) {
          var n,
            o = this.options[t];
          o
            ? ("string" == typeof o
                ? (n = this.element.querySelector(o))
                : o instanceof HTMLElement && (n = o),
              (this[t] = n ? i(n)[e] : o))
            : (this[t] = 0);
        }),
        (f.layoutItems = function (t, e) {
          (t = this._getItemsForLayout(t)),
            this._layoutItems(t, e),
            this._postLayout();
        }),
        (f._getItemsForLayout = function (t) {
          return t.filter(function (t) {
            return !t.isIgnored;
          });
        }),
        (f._layoutItems = function (t, e) {
          if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
            var i = [];
            t.forEach(function (t) {
              var n = this._getItemLayoutPosition(t);
              (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
            }, this),
              this._processLayoutQueue(i);
          }
        }),
        (f._getItemLayoutPosition = function () {
          return {
            x: 0,
            y: 0,
          };
        }),
        (f._processLayoutQueue = function (t) {
          this.updateStagger(),
            t.forEach(function (t, e) {
              this._positionItem(t.item, t.x, t.y, t.isInstant, e);
            }, this);
        }),
        (f.updateStagger = function () {
          var t = this.options.stagger;
          return null === t || void 0 === t
            ? void (this.stagger = 0)
            : ((this.stagger = a(t)), this.stagger);
        }),
        (f._positionItem = function (t, e, i, n, o) {
          n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
        }),
        (f._postLayout = function () {
          this.resizeContainer();
        }),
        (f.resizeContainer = function () {
          var t = this._getOption("resizeContainer");
          if (t) {
            var e = this._getContainerSize();
            e &&
              (this._setContainerMeasure(e.width, !0),
              this._setContainerMeasure(e.height, !1));
          }
        }),
        (f._getContainerSize = d),
        (f._setContainerMeasure = function (t, e) {
          if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox &&
              (t += e
                ? i.paddingLeft +
                  i.paddingRight +
                  i.borderLeftWidth +
                  i.borderRightWidth
                : i.paddingBottom +
                  i.paddingTop +
                  i.borderTopWidth +
                  i.borderBottomWidth),
              (t = Math.max(t, 0)),
              (this.element.style[e ? "width" : "height"] = t + "px");
          }
        }),
        (f._emitCompleteOnItems = function (t, e) {
          function i() {
            o.dispatchEvent(t + "Complete", null, [e]);
          }
  
          function n() {
            s++, s == r && i();
          }
          var o = this,
            r = e.length;
          if (!e || !r) return void i();
          var s = 0;
          e.forEach(function (e) {
            e.once(t, n);
          });
        }),
        (f.dispatchEvent = function (t, e, i) {
          var n = e ? [e].concat(i) : i;
          if ((this.emitEvent(t, n), u))
            if (((this.$element = this.$element || u(this.element)), e)) {
              var o = u.Event(e);
              (o.type = t), this.$element.trigger(o, i);
            } else this.$element.trigger(t, i);
        }),
        (f.ignore = function (t) {
          var e = this.getItem(t);
          e && (e.isIgnored = !0);
        }),
        (f.unignore = function (t) {
          var e = this.getItem(t);
          e && delete e.isIgnored;
        }),
        (f.stamp = function (t) {
          (t = this._find(t)),
            t &&
              ((this.stamps = this.stamps.concat(t)),
              t.forEach(this.ignore, this));
        }),
        (f.unstamp = function (t) {
          (t = this._find(t)),
            t &&
              t.forEach(function (t) {
                n.removeFrom(this.stamps, t), this.unignore(t);
              }, this);
        }),
        (f._find = function (t) {
          return t
            ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
              (t = n.makeArray(t)))
            : void 0;
        }),
        (f._manageStamps = function () {
          this.stamps &&
            this.stamps.length &&
            (this._getBoundingRect(),
            this.stamps.forEach(this._manageStamp, this));
        }),
        (f._getBoundingRect = function () {
          var t = this.element.getBoundingClientRect(),
            e = this.size;
          this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
          };
        }),
        (f._manageStamp = d),
        (f._getElementOffset = function (t) {
          var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            r = {
              left: e.left - n.left - o.marginLeft,
              top: e.top - n.top - o.marginTop,
              right: n.right - e.right - o.marginRight,
              bottom: n.bottom - e.bottom - o.marginBottom,
            };
          return r;
        }),
        (f.handleEvent = n.handleEvent),
        (f.bindResize = function () {
          t.addEventListener("resize", this), (this.isResizeBound = !0);
        }),
        (f.unbindResize = function () {
          t.removeEventListener("resize", this), (this.isResizeBound = !1);
        }),
        (f.onresize = function () {
          this.resize();
        }),
        n.debounceMethod(r, "onresize", 100),
        (f.resize = function () {
          this.isResizeBound && this.needsResizeLayout() && this.layout();
        }),
        (f.needsResizeLayout = function () {
          var t = i(this.element),
            e = this.size && t;
          return e && t.innerWidth !== this.size.innerWidth;
        }),
        (f.addItems = function (t) {
          var e = this._itemize(t);
          return e.length && (this.items = this.items.concat(e)), e;
        }),
        (f.appended = function (t) {
          var e = this.addItems(t);
          e.length && (this.layoutItems(e, !0), this.reveal(e));
        }),
        (f.prepended = function (t) {
          var e = this._itemize(t);
          if (e.length) {
            var i = this.items.slice(0);
            (this.items = e.concat(i)),
              this._resetLayout(),
              this._manageStamps(),
              this.layoutItems(e, !0),
              this.reveal(e),
              this.layoutItems(i);
          }
        }),
        (f.reveal = function (t) {
          if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
              t.stagger(i * e), t.reveal();
            });
          }
        }),
        (f.hide = function (t) {
          if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
              t.stagger(i * e), t.hide();
            });
          }
        }),
        (f.revealItemElements = function (t) {
          var e = this.getItems(t);
          this.reveal(e);
        }),
        (f.hideItemElements = function (t) {
          var e = this.getItems(t);
          this.hide(e);
        }),
        (f.getItem = function (t) {
          for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i;
          }
        }),
        (f.getItems = function (t) {
          t = n.makeArray(t);
          var e = [];
          return (
            t.forEach(function (t) {
              var i = this.getItem(t);
              i && e.push(i);
            }, this),
            e
          );
        }),
        (f.remove = function (t) {
          var e = this.getItems(t);
          this._emitCompleteOnItems("remove", e),
            e &&
              e.length &&
              e.forEach(function (t) {
                t.remove(), n.removeFrom(this.items, t);
              }, this);
        }),
        (f.destroy = function () {
          var t = this.element.style;
          (t.height = ""),
            (t.position = ""),
            (t.width = ""),
            this.items.forEach(function (t) {
              t.destroy();
            }),
            this.unbindResize();
          var e = this.element.outlayerGUID;
          delete c[e],
            delete this.element.outlayerGUID,
            u && u.removeData(this.element, this.constructor.namespace);
        }),
        (r.data = function (t) {
          t = n.getQueryElement(t);
          var e = t && t.outlayerGUID;
          return e && c[e];
        }),
        (r.create = function (t, e) {
          var i = s(r);
          return (
            (i.defaults = n.extend({}, r.defaults)),
            n.extend(i.defaults, e),
            (i.compatOptions = n.extend({}, r.compatOptions)),
            (i.namespace = t),
            (i.data = r.data),
            (i.Item = s(o)),
            n.htmlInit(i, t),
            u && u.bridget && u.bridget(t, i),
            i
          );
        });
      var m = {
        ms: 1,
        s: 1e3,
      };
      return (r.Item = o), r;
    }),
    (function (t, e) {
      "function" == typeof define && define.amd
        ? define(["outlayer/outlayer", "get-size/get-size"], e)
        : "object" == typeof module && module.exports
        ? (module.exports = e(require("outlayer"), require("get-size")))
        : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, e) {
      var i = t.create("masonry");
      i.compatOptions.fitWidth = "isFitWidth";
      var n = i.prototype;
      return (
        (n._resetLayout = function () {
          this.getSize(),
            this._getMeasurement("columnWidth", "outerWidth"),
            this._getMeasurement("gutter", "outerWidth"),
            this.measureColumns(),
            (this.colYs = []);
          for (var t = 0; t < this.cols; t++) this.colYs.push(0);
          (this.maxY = 0), (this.horizontalColIndex = 0);
        }),
        (n.measureColumns = function () {
          if ((this.getContainerWidth(), !this.columnWidth)) {
            var t = this.items[0],
              i = t && t.element;
            this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
          }
          var n = (this.columnWidth += this.gutter),
            o = this.containerWidth + this.gutter,
            r = o / n,
            s = n - (o % n),
            a = s && 1 > s ? "round" : "floor";
          (r = Math[a](r)), (this.cols = Math.max(r, 1));
        }),
        (n.getContainerWidth = function () {
          var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);
          this.containerWidth = n && n.innerWidth;
        }),
        (n._getItemLayoutPosition = function (t) {
          t.getSize();
          var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
          n = Math.min(n, this.cols);
          for (
            var o = this.options.horizontalOrder
                ? "_getHorizontalColPosition"
                : "_getTopColPosition",
              r = this[o](n, t),
              s = {
                x: this.columnWidth * r.col,
                y: r.y,
              },
              a = r.y + t.size.outerHeight,
              h = n + r.col,
              u = r.col;
            h > u;
            u++
          )
            this.colYs[u] = a;
          return s;
        }),
        (n._getTopColPosition = function (t) {
          var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
          return {
            col: e.indexOf(i),
            y: i,
          };
        }),
        (n._getTopColGroup = function (t) {
          if (2 > t) return this.colYs;
          for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
            e[n] = this._getColGroupY(n, t);
          return e;
        }),
        (n._getColGroupY = function (t, e) {
          if (2 > e) return this.colYs[t];
          var i = this.colYs.slice(t, t + e);
          return Math.max.apply(Math, i);
        }),
        (n._getHorizontalColPosition = function (t, e) {
          var i = this.horizontalColIndex % this.cols,
            n = t > 1 && i + t > this.cols;
          i = n ? 0 : i;
          var o = e.size.outerWidth && e.size.outerHeight;
          return (
            (this.horizontalColIndex = o ? i + t : this.horizontalColIndex),
            {
              col: i,
              y: this._getColGroupY(i, t),
            }
          );
        }),
        (n._manageStamp = function (t) {
          var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            r = o ? n.left : n.right,
            s = r + i.outerWidth,
            a = Math.floor(r / this.columnWidth);
          a = Math.max(0, a);
          var h = Math.floor(s / this.columnWidth);
          (h -= s % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
          for (
            var u = this._getOption("originTop"),
              d = (u ? n.top : n.bottom) + i.outerHeight,
              l = a;
            h >= l;
            l++
          )
            this.colYs[l] = Math.max(d, this.colYs[l]);
        }),
        (n._getContainerSize = function () {
          this.maxY = Math.max.apply(Math, this.colYs);
          var t = {
            height: this.maxY,
          };
          return (
            this._getOption("fitWidth") &&
              (t.width = this._getContainerFitWidth()),
            t
          );
        }),
        (n._getContainerFitWidth = function () {
          for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
          return (this.cols - t) * this.columnWidth - this.gutter;
        }),
        (n.needsResizeLayout = function () {
          var t = this.containerWidth;
          return this.getContainerWidth(), t != this.containerWidth;
        }),
        i
      );
    });
  (function () {
    "use strict";
  
    function e() {}
  
    function t(e, t) {
      for (var n = e.length; n--; ) if (e[n].listener === t) return n;
      return -1;
    }
  
    function n(e) {
      return function () {
        return this[e].apply(this, arguments);
      };
    }
    var i = e.prototype,
      r = this,
      s = r.EventEmitter;
    (i.getListeners = function (e) {
      var t,
        n,
        i = this._getEvents();
      if ("object" == typeof e) {
        t = {};
        for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
      } else t = i[e] || (i[e] = []);
      return t;
    }),
      (i.flattenListeners = function (e) {
        var t,
          n = [];
        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
        return n;
      }),
      (i.getListenersAsObject = function (e) {
        var t,
          n = this.getListeners(e);
        return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
      }),
      (i.addListener = function (e, n) {
        var i,
          r = this.getListenersAsObject(e),
          s = "object" == typeof n;
        for (i in r)
          r.hasOwnProperty(i) &&
            -1 === t(r[i], n) &&
            r[i].push(
              s
                ? n
                : {
                    listener: n,
                    once: !1,
                  }
            );
        return this;
      }),
      (i.on = n("addListener")),
      (i.addOnceListener = function (e, t) {
        return this.addListener(e, {
          listener: t,
          once: !0,
        });
      }),
      (i.once = n("addOnceListener")),
      (i.defineEvent = function (e) {
        return this.getListeners(e), this;
      }),
      (i.defineEvents = function (e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this;
      }),
      (i.removeListener = function (e, n) {
        var i,
          r,
          s = this.getListenersAsObject(e);
        for (r in s)
          s.hasOwnProperty(r) &&
            ((i = t(s[r], n)), -1 !== i && s[r].splice(i, 1));
        return this;
      }),
      (i.off = n("removeListener")),
      (i.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t);
      }),
      (i.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t);
      }),
      (i.manipulateListeners = function (e, t, n) {
        var i,
          r,
          s = e ? this.removeListener : this.addListener,
          o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
          for (i = n.length; i--; ) s.call(this, t, n[i]);
        else
          for (i in t)
            t.hasOwnProperty(i) &&
              (r = t[i]) &&
              ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
        return this;
      }),
      (i.removeEvent = function (e) {
        var t,
          n = typeof e,
          i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
          for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this;
      }),
      (i.removeAllListeners = n("removeEvent")),
      (i.emitEvent = function (e, t) {
        var n,
          i,
          r,
          s,
          o = this.getListenersAsObject(e);
        for (r in o)
          if (o.hasOwnProperty(r))
            for (i = o[r].length; i--; )
              (n = o[r][i]),
                n.once === !0 && this.removeListener(e, n.listener),
                (s = n.listener.apply(this, t || [])),
                s === this._getOnceReturnValue() &&
                  this.removeListener(e, n.listener);
        return this;
      }),
      (i.trigger = n("emitEvent")),
      (i.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t);
      }),
      (i.setOnceReturnValue = function (e) {
        return (this._onceReturnValue = e), this;
      }),
      (i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }),
      (i._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (e.noConflict = function () {
        return (r.EventEmitter = s), e;
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return e;
          })
        : "object" == typeof module && module.exports
        ? (module.exports = e)
        : (this.EventEmitter = e);
  }.call(this),
    (function (e) {
      function t(t) {
        var n = e.event;
        return (n.target = n.target || n.srcElement || t), n;
      }
      var n = document.documentElement,
        i = function () {};
      n.addEventListener
        ? (i = function (e, t, n) {
            e.addEventListener(t, n, !1);
          })
        : n.attachEvent &&
          (i = function (e, n, i) {
            (e[n + i] = i.handleEvent
              ? function () {
                  var n = t(e);
                  i.handleEvent.call(i, n);
                }
              : function () {
                  var n = t(e);
                  i.call(e, n);
                }),
              e.attachEvent("on" + n, e[n + i]);
          });
      var r = function () {};
      n.removeEventListener
        ? (r = function (e, t, n) {
            e.removeEventListener(t, n, !1);
          })
        : n.detachEvent &&
          (r = function (e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
              delete e[t + n];
            } catch (i) {
              e[t + n] = void 0;
            }
          });
      var s = {
        bind: i,
        unbind: r,
      };
      "function" == typeof define && define.amd
        ? define("eventie/eventie", s)
        : (e.eventie = s);
    })(this),
    (function (e, t) {
      "use strict";
      "function" == typeof define && define.amd
        ? define(
            ["eventEmitter/EventEmitter", "eventie/eventie"],
            function (n, i) {
              return t(e, n, i);
            }
          )
        : "object" == typeof module && module.exports
        ? (module.exports = t(
            e,
            require("wolfy87-eventemitter"),
            require("eventie")
          ))
        : (e.imagesLoaded = t(e, e.EventEmitter, e.eventie));
    })(window, function (e, t, n) {
      function i(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
  
      function r(e) {
        return "[object Array]" == f.call(e);
      }
  
      function s(e) {
        var t = [];
        if (r(e)) t = e;
        else if ("number" == typeof e.length)
          for (var n = 0; n < e.length; n++) t.push(e[n]);
        else t.push(e);
        return t;
      }
  
      function o(e, t, n) {
        if (!(this instanceof o)) return new o(e, t, n);
        "string" == typeof e && (e = document.querySelectorAll(e)),
          (this.elements = s(e)),
          (this.options = i({}, this.options)),
          "function" == typeof t ? (n = t) : i(this.options, t),
          n && this.on("always", n),
          this.getImages(),
          u && (this.jqDeferred = new u.Deferred());
        var r = this;
        setTimeout(function () {
          r.check();
        });
      }
  
      function h(e) {
        this.img = e;
      }
  
      function a(e, t) {
        (this.url = e), (this.element = t), (this.img = new Image());
      }
      var u = e.jQuery,
        c = e.console,
        f = Object.prototype.toString;
      (o.prototype = new t()),
        (o.prototype.options = {}),
        (o.prototype.getImages = function () {
          this.images = [];
          for (var e = 0; e < this.elements.length; e++) {
            var t = this.elements[e];
            this.addElementImages(t);
          }
        }),
        (o.prototype.addElementImages = function (e) {
          "IMG" == e.nodeName && this.addImage(e),
            this.options.background === !0 && this.addElementBackgroundImages(e);
          var t = e.nodeType;
          if (t && d[t]) {
            for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
              var r = n[i];
              this.addImage(r);
            }
            if ("string" == typeof this.options.background) {
              var s = e.querySelectorAll(this.options.background);
              for (i = 0; i < s.length; i++) {
                var o = s[i];
                this.addElementBackgroundImages(o);
              }
            }
          }
        });
      var d = {
        1: !0,
        9: !0,
        11: !0,
      };
      o.prototype.addElementBackgroundImages = function (e) {
        for (
          var t = m(e),
            n = /url\(['"]*([^'"\)]+)['"]*\)/gi,
            i = n.exec(t.backgroundImage);
          null !== i;
  
        ) {
          var r = i && i[1];
          r && this.addBackground(r, e), (i = n.exec(t.backgroundImage));
        }
      };
      var m =
        e.getComputedStyle ||
        function (e) {
          return e.currentStyle;
        };
      return (
        (o.prototype.addImage = function (e) {
          var t = new h(e);
          this.images.push(t);
        }),
        (o.prototype.addBackground = function (e, t) {
          var n = new a(e, t);
          this.images.push(n);
        }),
        (o.prototype.check = function () {
          function e(e, n, i) {
            setTimeout(function () {
              t.progress(e, n, i);
            });
          }
          var t = this;
          if (
            ((this.progressedCount = 0),
            (this.hasAnyBroken = !1),
            !this.images.length)
          )
            return void this.complete();
          for (var n = 0; n < this.images.length; n++) {
            var i = this.images[n];
            i.once("progress", e), i.check();
          }
        }),
        (o.prototype.progress = function (e, t, n) {
          this.progressedCount++,
            (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
            this.emit("progress", this, e, t),
            this.jqDeferred &&
              this.jqDeferred.notify &&
              this.jqDeferred.notify(this, e),
            this.progressedCount == this.images.length && this.complete(),
            this.options.debug && c && c.log("progress: " + n, e, t);
        }),
        (o.prototype.complete = function () {
          var e = this.hasAnyBroken ? "fail" : "done";
          if (
            ((this.isComplete = !0),
            this.emit(e, this),
            this.emit("always", this),
            this.jqDeferred)
          ) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this);
          }
        }),
        (h.prototype = new t()),
        (h.prototype.check = function () {
          var e = this.getIsImageComplete();
          return e
            ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
            : ((this.proxyImage = new Image()),
              n.bind(this.proxyImage, "load", this),
              n.bind(this.proxyImage, "error", this),
              n.bind(this.img, "load", this),
              n.bind(this.img, "error", this),
              void (this.proxyImage.src = this.img.src));
        }),
        (h.prototype.getIsImageComplete = function () {
          return this.img.complete && void 0 !== this.img.naturalWidth;
        }),
        (h.prototype.confirm = function (e, t) {
          (this.isLoaded = e), this.emit("progress", this, this.img, t);
        }),
        (h.prototype.handleEvent = function (e) {
          var t = "on" + e.type;
          this[t] && this[t](e);
        }),
        (h.prototype.onload = function () {
          this.confirm(!0, "onload"), this.unbindEvents();
        }),
        (h.prototype.onerror = function () {
          this.confirm(!1, "onerror"), this.unbindEvents();
        }),
        (h.prototype.unbindEvents = function () {
          n.unbind(this.proxyImage, "load", this),
            n.unbind(this.proxyImage, "error", this),
            n.unbind(this.img, "load", this),
            n.unbind(this.img, "error", this);
        }),
        (a.prototype = new h()),
        (a.prototype.check = function () {
          n.bind(this.img, "load", this),
            n.bind(this.img, "error", this),
            (this.img.src = this.url);
          var e = this.getIsImageComplete();
          e &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
        }),
        (a.prototype.unbindEvents = function () {
          n.unbind(this.img, "load", this), n.unbind(this.img, "error", this);
        }),
        (a.prototype.confirm = function (e, t) {
          (this.isLoaded = e), this.emit("progress", this, this.element, t);
        }),
        (o.makeJQueryPlugin = function (t) {
          (t = t || e.jQuery),
            t &&
              ((u = t),
              (u.fn.imagesLoaded = function (e, t) {
                var n = new o(this, e, t);
                return n.jqDeferred.promise(u(this));
              }));
        }),
        o.makeJQueryPlugin(),
        o
      );
    }));
  !(function (a) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : "undefined" != typeof exports
      ? (module.exports = a(require("jquery")))
      : a(jQuery);
  })(function (a) {
    "use strict";
    var b = window.Slick || {};
    (b = (function () {
      function c(c, d) {
        var f,
          e = this;
        (e.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: a(c),
          appendDots: a(c),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
          nextArrow:
            '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (b, c) {
            return a(
              '<button type="button" data-role="none" role="button" tabindex="0" />'
            ).text(c + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (e.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          a.extend(e, e.initials),
          (e.activeBreakpoint = null),
          (e.animType = null),
          (e.animProp = null),
          (e.breakpoints = []),
          (e.breakpointSettings = []),
          (e.cssTransitions = !1),
          (e.focussed = !1),
          (e.interrupted = !1),
          (e.hidden = "hidden"),
          (e.paused = !0),
          (e.positionProp = null),
          (e.respondTo = null),
          (e.rowCount = 1),
          (e.shouldClick = !0),
          (e.$slider = a(c)),
          (e.$slidesCache = null),
          (e.transformType = null),
          (e.transitionType = null),
          (e.visibilityChange = "visibilitychange"),
          (e.windowWidth = 0),
          (e.windowTimer = null),
          (f = a(c).data("slick") || {}),
          (e.options = a.extend({}, e.defaults, d, f)),
          (e.currentSlide = e.options.initialSlide),
          (e.originalSettings = e.options),
          "undefined" != typeof document.mozHidden
            ? ((e.hidden = "mozHidden"),
              (e.visibilityChange = "mozvisibilitychange"))
            : "undefined" != typeof document.webkitHidden &&
              ((e.hidden = "webkitHidden"),
              (e.visibilityChange = "webkitvisibilitychange")),
          (e.autoPlay = a.proxy(e.autoPlay, e)),
          (e.autoPlayClear = a.proxy(e.autoPlayClear, e)),
          (e.autoPlayIterator = a.proxy(e.autoPlayIterator, e)),
          (e.changeSlide = a.proxy(e.changeSlide, e)),
          (e.clickHandler = a.proxy(e.clickHandler, e)),
          (e.selectHandler = a.proxy(e.selectHandler, e)),
          (e.setPosition = a.proxy(e.setPosition, e)),
          (e.swipeHandler = a.proxy(e.swipeHandler, e)),
          (e.dragHandler = a.proxy(e.dragHandler, e)),
          (e.keyHandler = a.proxy(e.keyHandler, e)),
          (e.instanceUid = b++),
          (e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          e.registerBreakpoints(),
          e.init(!0);
      }
      var b = 0;
      return c;
    })()),
      (b.prototype.activateADA = function () {
        var a = this;
        a.$slideTrack
          .find(".slick-active")
          .attr({
            "aria-hidden": "false",
          })
          .find("a, input, button, select")
          .attr({
            tabindex: "0",
          });
      }),
      (b.prototype.addSlide = b.prototype.slickAdd =
        function (b, c, d) {
          var e = this;
          if ("boolean" == typeof c) (d = c), (c = null);
          else if (0 > c || c >= e.slideCount) return !1;
          e.unload(),
            "number" == typeof c
              ? 0 === c && 0 === e.$slides.length
                ? a(b).appendTo(e.$slideTrack)
                : d
                ? a(b).insertBefore(e.$slides.eq(c))
                : a(b).insertAfter(e.$slides.eq(c))
              : d === !0
              ? a(b).prependTo(e.$slideTrack)
              : a(b).appendTo(e.$slideTrack),
            (e.$slides = e.$slideTrack.children(this.options.slide)),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slideTrack.append(e.$slides),
            e.$slides.each(function (b, c) {
              a(c).attr("data-slick-index", b);
            }),
            (e.$slidesCache = e.$slides),
            e.reinit();
        }),
      (b.prototype.animateHeight = function () {
        var a = this;
        if (
          1 === a.options.slidesToShow &&
          a.options.adaptiveHeight === !0 &&
          a.options.vertical === !1
        ) {
          var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
          a.$list.animate(
            {
              height: b,
            },
            a.options.speed
          );
        }
      }),
      (b.prototype.animateSlide = function (b, c) {
        var d = {},
          e = this;
        e.animateHeight(),
          e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
          e.transformsEnabled === !1
            ? e.options.vertical === !1
              ? e.$slideTrack.animate(
                  {
                    left: b,
                  },
                  e.options.speed,
                  e.options.easing,
                  c
                )
              : e.$slideTrack.animate(
                  {
                    top: b,
                  },
                  e.options.speed,
                  e.options.easing,
                  c
                )
            : e.cssTransitions === !1
            ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
              a({
                animStart: e.currentLeft,
              }).animate(
                {
                  animStart: b,
                },
                {
                  duration: e.options.speed,
                  easing: e.options.easing,
                  step: function (a) {
                    (a = Math.ceil(a)),
                      e.options.vertical === !1
                        ? ((d[e.animType] = "translate(" + a + "px, 0px)"),
                          e.$slideTrack.css(d))
                        : ((d[e.animType] = "translate(0px," + a + "px)"),
                          e.$slideTrack.css(d));
                  },
                  complete: function () {
                    c && c.call();
                  },
                }
              ))
            : (e.applyTransition(),
              (b = Math.ceil(b)),
              e.options.vertical === !1
                ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)")
                : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
              e.$slideTrack.css(d),
              c &&
                setTimeout(function () {
                  e.disableTransition(), c.call();
                }, e.options.speed));
      }),
      (b.prototype.getNavTarget = function () {
        var b = this,
          c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c;
      }),
      (b.prototype.asNavFor = function (b) {
        var c = this,
          d = c.getNavTarget();
        null !== d &&
          "object" == typeof d &&
          d.each(function () {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0);
          });
      }),
      (b.prototype.applyTransition = function (a) {
        var b = this,
          c = {};
        b.options.fade === !1
          ? (c[b.transitionType] =
              b.transformType + " " + b.options.speed + "ms " + b.options.cssEase)
          : (c[b.transitionType] =
              "opacity " + b.options.speed + "ms " + b.options.cssEase),
          b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
      }),
      (b.prototype.autoPlay = function () {
        var a = this;
        a.autoPlayClear(),
          a.slideCount > a.options.slidesToShow &&
            (a.autoPlayTimer = setInterval(
              a.autoPlayIterator,
              a.options.autoplaySpeed
            ));
      }),
      (b.prototype.autoPlayClear = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer);
      }),
      (b.prototype.autoPlayIterator = function () {
        var a = this,
          b = a.currentSlide + a.options.slidesToScroll;
        a.paused ||
          a.interrupted ||
          a.focussed ||
          (a.options.infinite === !1 &&
            (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1
              ? (a.direction = 0)
              : 0 === a.direction &&
                ((b = a.currentSlide - a.options.slidesToScroll),
                a.currentSlide - 1 === 0 && (a.direction = 1))),
          a.slideHandler(b));
      }),
      (b.prototype.buildArrows = function () {
        var b = this;
        b.options.arrows === !0 &&
          ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
          (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
          b.slideCount > b.options.slidesToShow
            ? (b.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              b.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              b.htmlExpr.test(b.options.prevArrow) &&
                b.$prevArrow.prependTo(b.options.appendArrows),
              b.htmlExpr.test(b.options.nextArrow) &&
                b.$nextArrow.appendTo(b.options.appendArrows),
              b.options.infinite !== !0 &&
                b.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1",
              }));
      }),
      (b.prototype.buildDots = function () {
        var c,
          d,
          b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
          for (
            b.$slider.addClass("slick-dotted"),
              d = a("<ul />").addClass(b.options.dotsClass),
              c = 0;
            c <= b.getDotCount();
            c += 1
          )
            d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
          (b.$dots = d.appendTo(b.options.appendDots)),
            b.$dots
              .find("li")
              .first()
              .addClass("slick-active")
              .attr("aria-hidden", "false");
        }
      }),
      (b.prototype.buildOut = function () {
        var b = this;
        (b.$slides = b.$slider
          .children(b.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (b.slideCount = b.$slides.length),
          b.$slides.each(function (b, c) {
            a(c)
              .attr("data-slick-index", b)
              .data("originalStyling", a(c).attr("style") || "");
          }),
          b.$slider.addClass("slick-slider"),
          (b.$slideTrack =
            0 === b.slideCount
              ? a('<div class="slick-track"/>').appendTo(b.$slider)
              : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (b.$list = b.$slideTrack
            .wrap('<div aria-live="polite" class="slick-list"/>')
            .parent()),
          b.$slideTrack.css("opacity", 0),
          (b.options.centerMode === !0 || b.options.swipeToSlide === !0) &&
            (b.options.slidesToScroll = 1),
          a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
          b.setupInfinite(),
          b.buildArrows(),
          b.buildDots(),
          b.updateDots(),
          b.setSlideClasses(
            "number" == typeof b.currentSlide ? b.currentSlide : 0
          ),
          b.options.draggable === !0 && b.$list.addClass("draggable");
      }),
      (b.prototype.buildRows = function () {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          a = this;
        if (
          ((e = document.createDocumentFragment()),
          (g = a.$slider.children()),
          a.options.rows > 1)
        ) {
          for (
            h = a.options.slidesPerRow * a.options.rows,
              f = Math.ceil(g.length / h),
              b = 0;
            f > b;
            b++
          ) {
            var i = document.createElement("div");
            for (c = 0; c < a.options.rows; c++) {
              var j = document.createElement("div");
              for (d = 0; d < a.options.slidesPerRow; d++) {
                var k = b * h + (c * a.options.slidesPerRow + d);
                g.get(k) && j.appendChild(g.get(k));
              }
              i.appendChild(j);
            }
            e.appendChild(i);
          }
          a.$slider.empty().append(e),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (b.prototype.checkResponsive = function (b, c) {
        var e,
          f,
          g,
          d = this,
          h = !1,
          i = d.$slider.width(),
          j = window.innerWidth || a(window).width();
        if (
          ("window" === d.respondTo
            ? (g = j)
            : "slider" === d.respondTo
            ? (g = i)
            : "min" === d.respondTo && (g = Math.min(j, i)),
          d.options.responsive &&
            d.options.responsive.length &&
            null !== d.options.responsive)
        ) {
          f = null;
          for (e in d.breakpoints)
            d.breakpoints.hasOwnProperty(e) &&
              (d.originalSettings.mobileFirst === !1
                ? g < d.breakpoints[e] && (f = d.breakpoints[e])
                : g > d.breakpoints[e] && (f = d.breakpoints[e]));
          null !== f
            ? null !== d.activeBreakpoint
              ? (f !== d.activeBreakpoint || c) &&
                ((d.activeBreakpoint = f),
                "unslick" === d.breakpointSettings[f]
                  ? d.unslick(f)
                  : ((d.options = a.extend(
                      {},
                      d.originalSettings,
                      d.breakpointSettings[f]
                    )),
                    b === !0 && (d.currentSlide = d.options.initialSlide),
                    d.refresh(b)),
                (h = f))
              : ((d.activeBreakpoint = f),
                "unslick" === d.breakpointSettings[f]
                  ? d.unslick(f)
                  : ((d.options = a.extend(
                      {},
                      d.originalSettings,
                      d.breakpointSettings[f]
                    )),
                    b === !0 && (d.currentSlide = d.options.initialSlide),
                    d.refresh(b)),
                (h = f))
            : null !== d.activeBreakpoint &&
              ((d.activeBreakpoint = null),
              (d.options = d.originalSettings),
              b === !0 && (d.currentSlide = d.options.initialSlide),
              d.refresh(b),
              (h = f)),
            b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
        }
      }),
      (b.prototype.changeSlide = function (b, c) {
        var f,
          g,
          h,
          d = this,
          e = a(b.currentTarget);
        switch (
          (e.is("a") && b.preventDefault(),
          e.is("li") || (e = e.closest("li")),
          (h = d.slideCount % d.options.slidesToScroll !== 0),
          (f = h
            ? 0
            : (d.slideCount - d.currentSlide) % d.options.slidesToScroll),
          b.data.message)
        ) {
          case "previous":
            (g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f),
              d.slideCount > d.options.slidesToShow &&
                d.slideHandler(d.currentSlide - g, !1, c);
            break;
          case "next":
            (g = 0 === f ? d.options.slidesToScroll : f),
              d.slideCount > d.options.slidesToShow &&
                d.slideHandler(d.currentSlide + g, !1, c);
            break;
          case "index":
            var i =
              0 === b.data.index
                ? 0
                : b.data.index || e.index() * d.options.slidesToScroll;
            d.slideHandler(d.checkNavigable(i), !1, c),
              e.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (b.prototype.checkNavigable = function (a) {
        var c,
          d,
          b = this;
        if (((c = b.getNavigableIndexes()), (d = 0), a > c[c.length - 1]))
          a = c[c.length - 1];
        else
          for (var e in c) {
            if (a < c[e]) {
              a = d;
              break;
            }
            d = c[e];
          }
        return a;
      }),
      (b.prototype.cleanUpEvents = function () {
        var b = this;
        b.options.dots &&
          null !== b.$dots &&
          a("li", b.$dots)
            .off("click.slick", b.changeSlide)
            .off("mouseenter.slick", a.proxy(b.interrupt, b, !0))
            .off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
          b.$slider.off("focus.slick blur.slick"),
          b.options.arrows === !0 &&
            b.slideCount > b.options.slidesToShow &&
            (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
            b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
          b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
          b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
          b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
          b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
          b.$list.off("click.slick", b.clickHandler),
          a(document).off(b.visibilityChange, b.visibility),
          b.cleanUpSlideEvents(),
          b.options.accessibility === !0 &&
            b.$list.off("keydown.slick", b.keyHandler),
          b.options.focusOnSelect === !0 &&
            a(b.$slideTrack).children().off("click.slick", b.selectHandler),
          a(window).off(
            "orientationchange.slick.slick-" + b.instanceUid,
            b.orientationChange
          ),
          a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
          a("[draggable!=true]", b.$slideTrack).off(
            "dragstart",
            b.preventDefault
          ),
          a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
          a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
      }),
      (b.prototype.cleanUpSlideEvents = function () {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
          b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
      }),
      (b.prototype.cleanUpRows = function () {
        var b,
          a = this;
        a.options.rows > 1 &&
          ((b = a.$slides.children().children()),
          b.removeAttr("style"),
          a.$slider.empty().append(b));
      }),
      (b.prototype.clickHandler = function (a) {
        var b = this;
        b.shouldClick === !1 &&
          (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
      }),
      (b.prototype.destroy = function (b) {
        var c = this;
        c.autoPlayClear(),
          (c.touchObject = {}),
          c.cleanUpEvents(),
          a(".slick-cloned", c.$slider).detach(),
          c.$dots && c.$dots.remove(),
          c.$prevArrow &&
            c.$prevArrow.length &&
            (c.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
          c.$nextArrow &&
            c.$nextArrow.length &&
            (c.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
          c.$slides &&
            (c.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                a(this).attr("style", a(this).data("originalStyling"));
              }),
            c.$slideTrack.children(this.options.slide).detach(),
            c.$slideTrack.detach(),
            c.$list.detach(),
            c.$slider.append(c.$slides)),
          c.cleanUpRows(),
          c.$slider.removeClass("slick-slider"),
          c.$slider.removeClass("slick-initialized"),
          c.$slider.removeClass("slick-dotted"),
          (c.unslicked = !0),
          b || c.$slider.trigger("destroy", [c]);
      }),
      (b.prototype.disableTransition = function (a) {
        var b = this,
          c = {};
        (c[b.transitionType] = ""),
          b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
      }),
      (b.prototype.fadeSlide = function (a, b) {
        var c = this;
        c.cssTransitions === !1
          ? (c.$slides.eq(a).css({
              zIndex: c.options.zIndex,
            }),
            c.$slides.eq(a).animate(
              {
                opacity: 1,
              },
              c.options.speed,
              c.options.easing,
              b
            ))
          : (c.applyTransition(a),
            c.$slides.eq(a).css({
              opacity: 1,
              zIndex: c.options.zIndex,
            }),
            b &&
              setTimeout(function () {
                c.disableTransition(a), b.call();
              }, c.options.speed));
      }),
      (b.prototype.fadeSlideOut = function (a) {
        var b = this;
        b.cssTransitions === !1
          ? b.$slides.eq(a).animate(
              {
                opacity: 0,
                zIndex: b.options.zIndex - 2,
              },
              b.options.speed,
              b.options.easing
            )
          : (b.applyTransition(a),
            b.$slides.eq(a).css({
              opacity: 0,
              zIndex: b.options.zIndex - 2,
            }));
      }),
      (b.prototype.filterSlides = b.prototype.slickFilter =
        function (a) {
          var b = this;
          null !== a &&
            ((b.$slidesCache = b.$slides),
            b.unload(),
            b.$slideTrack.children(this.options.slide).detach(),
            b.$slidesCache.filter(a).appendTo(b.$slideTrack),
            b.reinit());
        }),
      (b.prototype.focusHandler = function () {
        var b = this;
        b.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function () {
              b.options.pauseOnFocus &&
                ((b.focussed = d.is(":focus")), b.autoPlay());
            }, 0);
          });
      }),
      (b.prototype.getCurrent = b.prototype.slickCurrentSlide =
        function () {
          var a = this;
          return a.currentSlide;
        }),
      (b.prototype.getDotCount = function () {
        var a = this,
          b = 0,
          c = 0,
          d = 0;
        if (a.options.infinite === !0)
          for (; b < a.slideCount; )
            ++d,
              (b = c + a.options.slidesToScroll),
              (c +=
                a.options.slidesToScroll <= a.options.slidesToShow
                  ? a.options.slidesToScroll
                  : a.options.slidesToShow);
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
          for (; b < a.slideCount; )
            ++d,
              (b = c + a.options.slidesToScroll),
              (c +=
                a.options.slidesToScroll <= a.options.slidesToShow
                  ? a.options.slidesToScroll
                  : a.options.slidesToShow);
        else
          d =
            1 +
            Math.ceil(
              (a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll
            );
        return d - 1;
      }),
      (b.prototype.getLeft = function (a) {
        var c,
          d,
          f,
          b = this,
          e = 0;
        return (
          (b.slideOffset = 0),
          (d = b.$slides.first().outerHeight(!0)),
          b.options.infinite === !0
            ? (b.slideCount > b.options.slidesToShow &&
                ((b.slideOffset = b.slideWidth * b.options.slidesToShow * -1),
                (e = d * b.options.slidesToShow * -1)),
              b.slideCount % b.options.slidesToScroll !== 0 &&
                a + b.options.slidesToScroll > b.slideCount &&
                b.slideCount > b.options.slidesToShow &&
                (a > b.slideCount
                  ? ((b.slideOffset =
                      (b.options.slidesToShow - (a - b.slideCount)) *
                      b.slideWidth *
                      -1),
                    (e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1))
                  : ((b.slideOffset =
                      (b.slideCount % b.options.slidesToScroll) *
                      b.slideWidth *
                      -1),
                    (e = (b.slideCount % b.options.slidesToScroll) * d * -1))))
            : a + b.options.slidesToShow > b.slideCount &&
              ((b.slideOffset =
                (a + b.options.slidesToShow - b.slideCount) * b.slideWidth),
              (e = (a + b.options.slidesToShow - b.slideCount) * d)),
          b.slideCount <= b.options.slidesToShow &&
            ((b.slideOffset = 0), (e = 0)),
          b.options.centerMode === !0 && b.options.infinite === !0
            ? (b.slideOffset +=
                b.slideWidth * Math.floor(b.options.slidesToShow / 2) -
                b.slideWidth)
            : b.options.centerMode === !0 &&
              ((b.slideOffset = 0),
              (b.slideOffset +=
                b.slideWidth * Math.floor(b.options.slidesToShow / 2))),
          (c =
            b.options.vertical === !1
              ? a * b.slideWidth * -1 + b.slideOffset
              : a * d * -1 + e),
          b.options.variableWidth === !0 &&
            ((f =
              b.slideCount <= b.options.slidesToShow || b.options.infinite === !1
                ? b.$slideTrack.children(".slick-slide").eq(a)
                : b.$slideTrack
                    .children(".slick-slide")
                    .eq(a + b.options.slidesToShow)),
            (c =
              b.options.rtl === !0
                ? f[0]
                  ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                  : 0
                : f[0]
                ? -1 * f[0].offsetLeft
                : 0),
            b.options.centerMode === !0 &&
              ((f =
                b.slideCount <= b.options.slidesToShow ||
                b.options.infinite === !1
                  ? b.$slideTrack.children(".slick-slide").eq(a)
                  : b.$slideTrack
                      .children(".slick-slide")
                      .eq(a + b.options.slidesToShow + 1)),
              (c =
                b.options.rtl === !0
                  ? f[0]
                    ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                    : 0
                  : f[0]
                  ? -1 * f[0].offsetLeft
                  : 0),
              (c += (b.$list.width() - f.outerWidth()) / 2))),
          c
        );
      }),
      (b.prototype.getOption = b.prototype.slickGetOption =
        function (a) {
          var b = this;
          return b.options[a];
        }),
      (b.prototype.getNavigableIndexes = function () {
        var e,
          a = this,
          b = 0,
          c = 0,
          d = [];
        for (
          a.options.infinite === !1
            ? (e = a.slideCount)
            : ((b = -1 * a.options.slidesToScroll),
              (c = -1 * a.options.slidesToScroll),
              (e = 2 * a.slideCount));
          e > b;
  
        )
          d.push(b),
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
        return d;
      }),
      (b.prototype.getSlick = function () {
        return this;
      }),
      (b.prototype.getSlideCount = function () {
        var c,
          d,
          e,
          b = this;
        return (
          (e =
            b.options.centerMode === !0
              ? b.slideWidth * Math.floor(b.options.slidesToShow / 2)
              : 0),
          b.options.swipeToSlide === !0
            ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
                return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft
                  ? ((d = f), !1)
                  : void 0;
              }),
              (c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1))
            : b.options.slidesToScroll
        );
      }),
      (b.prototype.goTo = b.prototype.slickGoTo =
        function (a, b) {
          var c = this;
          c.changeSlide(
            {
              data: {
                message: "index",
                index: parseInt(a),
              },
            },
            b
          );
        }),
      (b.prototype.init = function (b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") ||
          (a(c.$slider).addClass("slick-initialized"),
          c.buildRows(),
          c.buildOut(),
          c.setProps(),
          c.startLoad(),
          c.loadSlider(),
          c.initializeEvents(),
          c.updateArrows(),
          c.updateDots(),
          c.checkResponsive(!0),
          c.focusHandler()),
          b && c.$slider.trigger("init", [c]),
          c.options.accessibility === !0 && c.initADA(),
          c.options.autoplay && ((c.paused = !1), c.autoPlay());
      }),
      (b.prototype.initADA = function () {
        var b = this;
        b.$slides
          .add(b.$slideTrack.find(".slick-cloned"))
          .attr({
            "aria-hidden": "true",
            tabindex: "-1",
          })
          .find("a, input, button, select")
          .attr({
            tabindex: "-1",
          }),
          b.$slideTrack.attr("role", "listbox"),
          b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
            a(this).attr({
              role: "option",
              "aria-describedby": "slick-slide" + b.instanceUid + c,
            });
          }),
          null !== b.$dots &&
            b.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (c) {
                a(this).attr({
                  role: "presentation",
                  "aria-selected": "false",
                  "aria-controls": "navigation" + b.instanceUid + c,
                  id: "slick-slide" + b.instanceUid + c,
                });
              })
              .first()
              .attr("aria-selected", "true")
              .end()
              .find("button")
              .attr("role", "button")
              .end()
              .closest("div")
              .attr("role", "toolbar"),
          b.activateADA();
      }),
      (b.prototype.initArrowEvents = function () {
        var a = this;
        a.options.arrows === !0 &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow.off("click.slick").on(
            "click.slick",
            {
              message: "previous",
            },
            a.changeSlide
          ),
          a.$nextArrow.off("click.slick").on(
            "click.slick",
            {
              message: "next",
            },
            a.changeSlide
          ));
      }),
      (b.prototype.initDotEvents = function () {
        var b = this;
        b.options.dots === !0 &&
          b.slideCount > b.options.slidesToShow &&
          a("li", b.$dots).on(
            "click.slick",
            {
              message: "index",
            },
            b.changeSlide
          ),
          b.options.dots === !0 &&
            b.options.pauseOnDotsHover === !0 &&
            a("li", b.$dots)
              .on("mouseenter.slick", a.proxy(b.interrupt, b, !0))
              .on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
      }),
      (b.prototype.initSlideEvents = function () {
        var b = this;
        b.options.pauseOnHover &&
          (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
          b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
      }),
      (b.prototype.initializeEvents = function () {
        var b = this;
        b.initArrowEvents(),
          b.initDotEvents(),
          b.initSlideEvents(),
          b.$list.on(
            "touchstart.slick mousedown.slick",
            {
              action: "start",
            },
            b.swipeHandler
          ),
          b.$list.on(
            "touchmove.slick mousemove.slick",
            {
              action: "move",
            },
            b.swipeHandler
          ),
          b.$list.on(
            "touchend.slick mouseup.slick",
            {
              action: "end",
            },
            b.swipeHandler
          ),
          b.$list.on(
            "touchcancel.slick mouseleave.slick",
            {
              action: "end",
            },
            b.swipeHandler
          ),
          b.$list.on("click.slick", b.clickHandler),
          a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
          b.options.accessibility === !0 &&
            b.$list.on("keydown.slick", b.keyHandler),
          b.options.focusOnSelect === !0 &&
            a(b.$slideTrack).children().on("click.slick", b.selectHandler),
          a(window).on(
            "orientationchange.slick.slick-" + b.instanceUid,
            a.proxy(b.orientationChange, b)
          ),
          a(window).on(
            "resize.slick.slick-" + b.instanceUid,
            a.proxy(b.resize, b)
          ),
          a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
          a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
          a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
      }),
      (b.prototype.initUI = function () {
        var a = this;
        a.options.arrows === !0 &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow.show(), a.$nextArrow.show()),
          a.options.dots === !0 &&
            a.slideCount > a.options.slidesToShow &&
            a.$dots.show();
      }),
      (b.prototype.keyHandler = function (a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === a.keyCode && b.options.accessibility === !0
            ? b.changeSlide({
                data: {
                  message: b.options.rtl === !0 ? "next" : "previous",
                },
              })
            : 39 === a.keyCode &&
              b.options.accessibility === !0 &&
              b.changeSlide({
                data: {
                  message: b.options.rtl === !0 ? "previous" : "next",
                },
              }));
      }),
      (b.prototype.lazyLoad = function () {
        function g(c) {
          a("img[data-lazy]", c).each(function () {
            var c = a(this),
              d = a(this).attr("data-lazy"),
              e = document.createElement("img");
            (e.onload = function () {
              c.animate(
                {
                  opacity: 0,
                },
                100,
                function () {
                  c.attr("src", d).animate(
                    {
                      opacity: 1,
                    },
                    200,
                    function () {
                      c.removeAttr("data-lazy").removeClass("slick-loading");
                    }
                  ),
                    b.$slider.trigger("lazyLoaded", [b, c, d]);
                }
              );
            }),
              (e.onerror = function () {
                c
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  b.$slider.trigger("lazyLoadError", [b, c, d]);
              }),
              (e.src = d);
          });
        }
        var c,
          d,
          e,
          f,
          b = this;
        b.options.centerMode === !0
          ? b.options.infinite === !0
            ? ((e = b.currentSlide + (b.options.slidesToShow / 2 + 1)),
              (f = e + b.options.slidesToShow + 2))
            : ((e = Math.max(
                0,
                b.currentSlide - (b.options.slidesToShow / 2 + 1)
              )),
              (f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide))
          : ((e = b.options.infinite
              ? b.options.slidesToShow + b.currentSlide
              : b.currentSlide),
            (f = Math.ceil(e + b.options.slidesToShow)),
            b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)),
          (c = b.$slider.find(".slick-slide").slice(e, f)),
          g(c),
          b.slideCount <= b.options.slidesToShow
            ? ((d = b.$slider.find(".slick-slide")), g(d))
            : b.currentSlide >= b.slideCount - b.options.slidesToShow
            ? ((d = b.$slider
                .find(".slick-cloned")
                .slice(0, b.options.slidesToShow)),
              g(d))
            : 0 === b.currentSlide &&
              ((d = b.$slider
                .find(".slick-cloned")
                .slice(-1 * b.options.slidesToShow)),
              g(d));
      }),
      (b.prototype.loadSlider = function () {
        var a = this;
        a.setPosition(),
          a.$slideTrack.css({
            opacity: 1,
          }),
          a.$slider.removeClass("slick-loading"),
          a.initUI(),
          "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
      }),
      (b.prototype.next = b.prototype.slickNext =
        function () {
          var a = this;
          a.changeSlide({
            data: {
              message: "next",
            },
          });
        }),
      (b.prototype.orientationChange = function () {
        var a = this;
        a.checkResponsive(), a.setPosition();
      }),
      (b.prototype.pause = b.prototype.slickPause =
        function () {
          var a = this;
          a.autoPlayClear(), (a.paused = !0);
        }),
      (b.prototype.play = b.prototype.slickPlay =
        function () {
          var a = this;
          a.autoPlay(),
            (a.options.autoplay = !0),
            (a.paused = !1),
            (a.focussed = !1),
            (a.interrupted = !1);
        }),
      (b.prototype.postSlide = function (a) {
        var b = this;
        b.unslicked ||
          (b.$slider.trigger("afterChange", [b, a]),
          (b.animating = !1),
          b.setPosition(),
          (b.swipeLeft = null),
          b.options.autoplay && b.autoPlay(),
          b.options.accessibility === !0 && b.initADA());
      }),
      (b.prototype.prev = b.prototype.slickPrev =
        function () {
          var a = this;
          a.changeSlide({
            data: {
              message: "previous",
            },
          });
        }),
      (b.prototype.preventDefault = function (a) {
        a.preventDefault();
      }),
      (b.prototype.progressiveLazyLoad = function (b) {
        b = b || 1;
        var e,
          f,
          g,
          c = this,
          d = a("img[data-lazy]", c.$slider);
        d.length
          ? ((e = d.first()),
            (f = e.attr("data-lazy")),
            (g = document.createElement("img")),
            (g.onload = function () {
              e
                .attr("src", f)
                .removeAttr("data-lazy")
                .removeClass("slick-loading"),
                c.options.adaptiveHeight === !0 && c.setPosition(),
                c.$slider.trigger("lazyLoaded", [c, e, f]),
                c.progressiveLazyLoad();
            }),
            (g.onerror = function () {
              3 > b
                ? setTimeout(function () {
                    c.progressiveLazyLoad(b + 1);
                  }, 500)
                : (e
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  c.$slider.trigger("lazyLoadError", [c, e, f]),
                  c.progressiveLazyLoad());
            }),
            (g.src = f))
          : c.$slider.trigger("allImagesLoaded", [c]);
      }),
      (b.prototype.refresh = function (b) {
        var d,
          e,
          c = this;
        (e = c.slideCount - c.options.slidesToShow),
          !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
          c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
          (d = c.currentSlide),
          c.destroy(!0),
          a.extend(c, c.initials, {
            currentSlide: d,
          }),
          c.init(),
          b ||
            c.changeSlide(
              {
                data: {
                  message: "index",
                  index: d,
                },
              },
              !1
            );
      }),
      (b.prototype.registerBreakpoints = function () {
        var c,
          d,
          e,
          b = this,
          f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
          b.respondTo = b.options.respondTo || "window";
          for (c in f)
            if (
              ((e = b.breakpoints.length - 1),
              (d = f[c].breakpoint),
              f.hasOwnProperty(c))
            ) {
              for (; e >= 0; )
                b.breakpoints[e] &&
                  b.breakpoints[e] === d &&
                  b.breakpoints.splice(e, 1),
                  e--;
              b.breakpoints.push(d), (b.breakpointSettings[d] = f[c].settings);
            }
          b.breakpoints.sort(function (a, c) {
            return b.options.mobileFirst ? a - c : c - a;
          });
        }
      }),
      (b.prototype.reinit = function () {
        var b = this;
        (b.$slides = b.$slideTrack
          .children(b.options.slide)
          .addClass("slick-slide")),
          (b.slideCount = b.$slides.length),
          b.currentSlide >= b.slideCount &&
            0 !== b.currentSlide &&
            (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
          b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
          b.registerBreakpoints(),
          b.setProps(),
          b.setupInfinite(),
          b.buildArrows(),
          b.updateArrows(),
          b.initArrowEvents(),
          b.buildDots(),
          b.updateDots(),
          b.initDotEvents(),
          b.cleanUpSlideEvents(),
          b.initSlideEvents(),
          b.checkResponsive(!1, !0),
          b.options.focusOnSelect === !0 &&
            a(b.$slideTrack).children().on("click.slick", b.selectHandler),
          b.setSlideClasses(
            "number" == typeof b.currentSlide ? b.currentSlide : 0
          ),
          b.setPosition(),
          b.focusHandler(),
          (b.paused = !b.options.autoplay),
          b.autoPlay(),
          b.$slider.trigger("reInit", [b]);
      }),
      (b.prototype.resize = function () {
        var b = this;
        a(window).width() !== b.windowWidth &&
          (clearTimeout(b.windowDelay),
          (b.windowDelay = window.setTimeout(function () {
            (b.windowWidth = a(window).width()),
              b.checkResponsive(),
              b.unslicked || b.setPosition();
          }, 50)));
      }),
      (b.prototype.removeSlide = b.prototype.slickRemove =
        function (a, b, c) {
          var d = this;
          return (
            "boolean" == typeof a
              ? ((b = a), (a = b === !0 ? 0 : d.slideCount - 1))
              : (a = b === !0 ? --a : a),
            d.slideCount < 1 || 0 > a || a > d.slideCount - 1
              ? !1
              : (d.unload(),
                c === !0
                  ? d.$slideTrack.children().remove()
                  : d.$slideTrack.children(this.options.slide).eq(a).remove(),
                (d.$slides = d.$slideTrack.children(this.options.slide)),
                d.$slideTrack.children(this.options.slide).detach(),
                d.$slideTrack.append(d.$slides),
                (d.$slidesCache = d.$slides),
                void d.reinit())
          );
        }),
      (b.prototype.setCSS = function (a) {
        var d,
          e,
          b = this,
          c = {};
        b.options.rtl === !0 && (a = -a),
          (d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
          (e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
          (c[b.positionProp] = a),
          b.transformsEnabled === !1
            ? b.$slideTrack.css(c)
            : ((c = {}),
              b.cssTransitions === !1
                ? ((c[b.animType] = "translate(" + d + ", " + e + ")"),
                  b.$slideTrack.css(c))
                : ((c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)"),
                  b.$slideTrack.css(c)));
      }),
      (b.prototype.setDimensions = function () {
        var a = this;
        a.options.vertical === !1
          ? a.options.centerMode === !0 &&
            a.$list.css({
              padding: "0px " + a.options.centerPadding,
            })
          : (a.$list.height(
              a.$slides.first().outerHeight(!0) * a.options.slidesToShow
            ),
            a.options.centerMode === !0 &&
              a.$list.css({
                padding: a.options.centerPadding + " 0px",
              })),
          (a.listWidth = a.$list.width()),
          (a.listHeight = a.$list.height()),
          a.options.vertical === !1 && a.options.variableWidth === !1
            ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)),
              a.$slideTrack.width(
                Math.ceil(
                  a.slideWidth * a.$slideTrack.children(".slick-slide").length
                )
              ))
            : a.options.variableWidth === !0
            ? a.$slideTrack.width(5e3 * a.slideCount)
            : ((a.slideWidth = Math.ceil(a.listWidth)),
              a.$slideTrack.height(
                Math.ceil(
                  a.$slides.first().outerHeight(!0) *
                    a.$slideTrack.children(".slick-slide").length
                )
              ));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 &&
          a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
      }),
      (b.prototype.setFade = function () {
        var c,
          b = this;
        b.$slides.each(function (d, e) {
          (c = b.slideWidth * d * -1),
            b.options.rtl === !0
              ? a(e).css({
                  position: "relative",
                  right: c,
                  top: 0,
                  zIndex: b.options.zIndex - 2,
                  opacity: 0,
                })
              : a(e).css({
                  position: "relative",
                  left: c,
                  top: 0,
                  zIndex: b.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1,
          });
      }),
      (b.prototype.setHeight = function () {
        var a = this;
        if (
          1 === a.options.slidesToShow &&
          a.options.adaptiveHeight === !0 &&
          a.options.vertical === !1
        ) {
          var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
          a.$list.css("height", b);
        }
      }),
      (b.prototype.setOption = b.prototype.slickSetOption =
        function () {
          var c,
            d,
            e,
            f,
            h,
            b = this,
            g = !1;
          if (
            ("object" === a.type(arguments[0])
              ? ((e = arguments[0]), (g = arguments[1]), (h = "multiple"))
              : "string" === a.type(arguments[0]) &&
                ((e = arguments[0]),
                (f = arguments[1]),
                (g = arguments[2]),
                "responsive" === arguments[0] && "array" === a.type(arguments[1])
                  ? (h = "responsive")
                  : "undefined" != typeof arguments[1] && (h = "single")),
            "single" === h)
          )
            b.options[e] = f;
          else if ("multiple" === h)
            a.each(e, function (a, c) {
              b.options[a] = c;
            });
          else if ("responsive" === h)
            for (d in f)
              if ("array" !== a.type(b.options.responsive))
                b.options.responsive = [f[d]];
              else {
                for (c = b.options.responsive.length - 1; c >= 0; )
                  b.options.responsive[c].breakpoint === f[d].breakpoint &&
                    b.options.responsive.splice(c, 1),
                    c--;
                b.options.responsive.push(f[d]);
              }
          g && (b.unload(), b.reinit());
        }),
      (b.prototype.setPosition = function () {
        var a = this;
        a.setDimensions(),
          a.setHeight(),
          a.options.fade === !1
            ? a.setCSS(a.getLeft(a.currentSlide))
            : a.setFade(),
          a.$slider.trigger("setPosition", [a]);
      }),
      (b.prototype.setProps = function () {
        var a = this,
          b = document.body.style;
        (a.positionProp = a.options.vertical === !0 ? "top" : "left"),
          "top" === a.positionProp
            ? a.$slider.addClass("slick-vertical")
            : a.$slider.removeClass("slick-vertical"),
          (void 0 !== b.WebkitTransition ||
            void 0 !== b.MozTransition ||
            void 0 !== b.msTransition) &&
            a.options.useCSS === !0 &&
            (a.cssTransitions = !0),
          a.options.fade &&
            ("number" == typeof a.options.zIndex
              ? a.options.zIndex < 3 && (a.options.zIndex = 3)
              : (a.options.zIndex = a.defaults.zIndex)),
          void 0 !== b.OTransform &&
            ((a.animType = "OTransform"),
            (a.transformType = "-o-transform"),
            (a.transitionType = "OTransition"),
            void 0 === b.perspectiveProperty &&
              void 0 === b.webkitPerspective &&
              (a.animType = !1)),
          void 0 !== b.MozTransform &&
            ((a.animType = "MozTransform"),
            (a.transformType = "-moz-transform"),
            (a.transitionType = "MozTransition"),
            void 0 === b.perspectiveProperty &&
              void 0 === b.MozPerspective &&
              (a.animType = !1)),
          void 0 !== b.webkitTransform &&
            ((a.animType = "webkitTransform"),
            (a.transformType = "-webkit-transform"),
            (a.transitionType = "webkitTransition"),
            void 0 === b.perspectiveProperty &&
              void 0 === b.webkitPerspective &&
              (a.animType = !1)),
          void 0 !== b.msTransform &&
            ((a.animType = "msTransform"),
            (a.transformType = "-ms-transform"),
            (a.transitionType = "msTransition"),
            void 0 === b.msTransform && (a.animType = !1)),
          void 0 !== b.transform &&
            a.animType !== !1 &&
            ((a.animType = "transform"),
            (a.transformType = "transform"),
            (a.transitionType = "transition")),
          (a.transformsEnabled =
            a.options.useTransform && null !== a.animType && a.animType !== !1);
      }),
      (b.prototype.setSlideClasses = function (a) {
        var c,
          d,
          e,
          f,
          b = this;
        (d = b.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
          b.$slides.eq(a).addClass("slick-current"),
          b.options.centerMode === !0
            ? ((c = Math.floor(b.options.slidesToShow / 2)),
              b.options.infinite === !0 &&
                (a >= c && a <= b.slideCount - 1 - c
                  ? b.$slides
                      .slice(a - c, a + c + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((e = b.options.slidesToShow + a),
                    d
                      .slice(e - c + 1, e + c + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === a
                  ? d
                      .eq(d.length - 1 - b.options.slidesToShow)
                      .addClass("slick-center")
                  : a === b.slideCount - 1 &&
                    d.eq(b.options.slidesToShow).addClass("slick-center")),
              b.$slides.eq(a).addClass("slick-center"))
            : a >= 0 && a <= b.slideCount - b.options.slidesToShow
            ? b.$slides
                .slice(a, a + b.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : d.length <= b.options.slidesToShow
            ? d.addClass("slick-active").attr("aria-hidden", "false")
            : ((f = b.slideCount % b.options.slidesToShow),
              (e = b.options.infinite === !0 ? b.options.slidesToShow + a : a),
              b.options.slidesToShow == b.options.slidesToScroll &&
              b.slideCount - a < b.options.slidesToShow
                ? d
                    .slice(e - (b.options.slidesToShow - f), e + f)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : d
                    .slice(e, e + b.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
          "ondemand" === b.options.lazyLoad && b.lazyLoad();
      }),
      (b.prototype.setupInfinite = function () {
        var c,
          d,
          e,
          b = this;
        if (
          (b.options.fade === !0 && (b.options.centerMode = !1),
          b.options.infinite === !0 &&
            b.options.fade === !1 &&
            ((d = null), b.slideCount > b.options.slidesToShow))
        ) {
          for (
            e =
              b.options.centerMode === !0
                ? b.options.slidesToShow + 1
                : b.options.slidesToShow,
              c = b.slideCount;
            c > b.slideCount - e;
            c -= 1
          )
            (d = c - 1),
              a(b.$slides[d])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", d - b.slideCount)
                .prependTo(b.$slideTrack)
                .addClass("slick-cloned");
          for (c = 0; e > c; c += 1)
            (d = c),
              a(b.$slides[d])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", d + b.slideCount)
                .appendTo(b.$slideTrack)
                .addClass("slick-cloned");
          b.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              a(this).attr("id", "");
            });
        }
      }),
      (b.prototype.interrupt = function (a) {
        var b = this;
        a || b.autoPlay(), (b.interrupted = a);
      }),
      (b.prototype.selectHandler = function (b) {
        var c = this,
          d = a(b.target).is(".slick-slide")
            ? a(b.target)
            : a(b.target).parents(".slick-slide"),
          e = parseInt(d.attr("data-slick-index"));
        return (
          e || (e = 0),
          c.slideCount <= c.options.slidesToShow
            ? (c.setSlideClasses(e), void c.asNavFor(e))
            : void c.slideHandler(e)
        );
      }),
      (b.prototype.slideHandler = function (a, b, c) {
        var d,
          e,
          f,
          g,
          j,
          h = null,
          i = this;
        return (
          (b = b || !1),
          (i.animating === !0 && i.options.waitForAnimate === !0) ||
          (i.options.fade === !0 && i.currentSlide === a) ||
          i.slideCount <= i.options.slidesToShow
            ? void 0
            : (b === !1 && i.asNavFor(a),
              (d = a),
              (h = i.getLeft(d)),
              (g = i.getLeft(i.currentSlide)),
              (i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft),
              i.options.infinite === !1 &&
              i.options.centerMode === !1 &&
              (0 > a || a > i.getDotCount() * i.options.slidesToScroll)
                ? void (
                    i.options.fade === !1 &&
                    ((d = i.currentSlide),
                    c !== !0
                      ? i.animateSlide(g, function () {
                          i.postSlide(d);
                        })
                      : i.postSlide(d))
                  )
                : i.options.infinite === !1 &&
                  i.options.centerMode === !0 &&
                  (0 > a || a > i.slideCount - i.options.slidesToScroll)
                ? void (
                    i.options.fade === !1 &&
                    ((d = i.currentSlide),
                    c !== !0
                      ? i.animateSlide(g, function () {
                          i.postSlide(d);
                        })
                      : i.postSlide(d))
                  )
                : (i.options.autoplay && clearInterval(i.autoPlayTimer),
                  (e =
                    0 > d
                      ? i.slideCount % i.options.slidesToScroll !== 0
                        ? i.slideCount - (i.slideCount % i.options.slidesToScroll)
                        : i.slideCount + d
                      : d >= i.slideCount
                      ? i.slideCount % i.options.slidesToScroll !== 0
                        ? 0
                        : d - i.slideCount
                      : d),
                  (i.animating = !0),
                  i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
                  (f = i.currentSlide),
                  (i.currentSlide = e),
                  i.setSlideClasses(i.currentSlide),
                  i.options.asNavFor &&
                    ((j = i.getNavTarget()),
                    (j = j.slick("getSlick")),
                    j.slideCount <= j.options.slidesToShow &&
                      j.setSlideClasses(i.currentSlide)),
                  i.updateDots(),
                  i.updateArrows(),
                  i.options.fade === !0
                    ? (c !== !0
                        ? (i.fadeSlideOut(f),
                          i.fadeSlide(e, function () {
                            i.postSlide(e);
                          }))
                        : i.postSlide(e),
                      void i.animateHeight())
                    : void (c !== !0
                        ? i.animateSlide(h, function () {
                            i.postSlide(e);
                          })
                        : i.postSlide(e))))
        );
      }),
      (b.prototype.startLoad = function () {
        var a = this;
        a.options.arrows === !0 &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow.hide(), a.$nextArrow.hide()),
          a.options.dots === !0 &&
            a.slideCount > a.options.slidesToShow &&
            a.$dots.hide(),
          a.$slider.addClass("slick-loading");
      }),
      (b.prototype.swipeDirection = function () {
        var a,
          b,
          c,
          d,
          e = this;
        return (
          (a = e.touchObject.startX - e.touchObject.curX),
          (b = e.touchObject.startY - e.touchObject.curY),
          (c = Math.atan2(b, a)),
          (d = Math.round((180 * c) / Math.PI)),
          0 > d && (d = 360 - Math.abs(d)),
          45 >= d && d >= 0
            ? e.options.rtl === !1
              ? "left"
              : "right"
            : 360 >= d && d >= 315
            ? e.options.rtl === !1
              ? "left"
              : "right"
            : d >= 135 && 225 >= d
            ? e.options.rtl === !1
              ? "right"
              : "left"
            : e.options.verticalSwiping === !0
            ? d >= 35 && 135 >= d
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (b.prototype.swipeEnd = function (a) {
        var c,
          d,
          b = this;
        if (
          ((b.dragging = !1),
          (b.interrupted = !1),
          (b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0),
          void 0 === b.touchObject.curX)
        )
          return !1;
        if (
          (b.touchObject.edgeHit === !0 &&
            b.$slider.trigger("edge", [b, b.swipeDirection()]),
          b.touchObject.swipeLength >= b.touchObject.minSwipe)
        ) {
          switch ((d = b.swipeDirection())) {
            case "left":
            case "down":
              (c = b.options.swipeToSlide
                ? b.checkNavigable(b.currentSlide + b.getSlideCount())
                : b.currentSlide + b.getSlideCount()),
                (b.currentDirection = 0);
              break;
            case "right":
            case "up":
              (c = b.options.swipeToSlide
                ? b.checkNavigable(b.currentSlide - b.getSlideCount())
                : b.currentSlide - b.getSlideCount()),
                (b.currentDirection = 1);
          }
          "vertical" != d &&
            (b.slideHandler(c),
            (b.touchObject = {}),
            b.$slider.trigger("swipe", [b, d]));
        } else
          b.touchObject.startX !== b.touchObject.curX &&
            (b.slideHandler(b.currentSlide), (b.touchObject = {}));
      }),
      (b.prototype.swipeHandler = function (a) {
        var b = this;
        if (
          !(
            b.options.swipe === !1 ||
            ("ontouchend" in document && b.options.swipe === !1) ||
            (b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))
          )
        )
          switch (
            ((b.touchObject.fingerCount =
              a.originalEvent && void 0 !== a.originalEvent.touches
                ? a.originalEvent.touches.length
                : 1),
            (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
            b.options.verticalSwiping === !0 &&
              (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
            a.data.action)
          ) {
            case "start":
              b.swipeStart(a);
              break;
            case "move":
              b.swipeMove(a);
              break;
            case "end":
              b.swipeEnd(a);
          }
      }),
      (b.prototype.swipeMove = function (a) {
        var d,
          e,
          f,
          g,
          h,
          b = this;
        return (
          (h = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
          !b.dragging || (h && 1 !== h.length)
            ? !1
            : ((d = b.getLeft(b.currentSlide)),
              (b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX),
              (b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY),
              (b.touchObject.swipeLength = Math.round(
                Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))
              )),
              b.options.verticalSwiping === !0 &&
                (b.touchObject.swipeLength = Math.round(
                  Math.sqrt(
                    Math.pow(b.touchObject.curY - b.touchObject.startY, 2)
                  )
                )),
              (e = b.swipeDirection()),
              "vertical" !== e
                ? (void 0 !== a.originalEvent &&
                    b.touchObject.swipeLength > 4 &&
                    a.preventDefault(),
                  (g =
                    (b.options.rtl === !1 ? 1 : -1) *
                    (b.touchObject.curX > b.touchObject.startX ? 1 : -1)),
                  b.options.verticalSwiping === !0 &&
                    (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
                  (f = b.touchObject.swipeLength),
                  (b.touchObject.edgeHit = !1),
                  b.options.infinite === !1 &&
                    ((0 === b.currentSlide && "right" === e) ||
                      (b.currentSlide >= b.getDotCount() && "left" === e)) &&
                    ((f = b.touchObject.swipeLength * b.options.edgeFriction),
                    (b.touchObject.edgeHit = !0)),
                  b.options.vertical === !1
                    ? (b.swipeLeft = d + f * g)
                    : (b.swipeLeft =
                        d + f * (b.$list.height() / b.listWidth) * g),
                  b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
                  b.options.fade === !0 || b.options.touchMove === !1
                    ? !1
                    : b.animating === !0
                    ? ((b.swipeLeft = null), !1)
                    : void b.setCSS(b.swipeLeft))
                : void 0)
        );
      }),
      (b.prototype.swipeStart = function (a) {
        var c,
          b = this;
        return (
          (b.interrupted = !0),
          1 !== b.touchObject.fingerCount ||
          b.slideCount <= b.options.slidesToShow
            ? ((b.touchObject = {}), !1)
            : (void 0 !== a.originalEvent &&
                void 0 !== a.originalEvent.touches &&
                (c = a.originalEvent.touches[0]),
              (b.touchObject.startX = b.touchObject.curX =
                void 0 !== c ? c.pageX : a.clientX),
              (b.touchObject.startY = b.touchObject.curY =
                void 0 !== c ? c.pageY : a.clientY),
              void (b.dragging = !0))
        );
      }),
      (b.prototype.unfilterSlides = b.prototype.slickUnfilter =
        function () {
          var a = this;
          null !== a.$slidesCache &&
            (a.unload(),
            a.$slideTrack.children(this.options.slide).detach(),
            a.$slidesCache.appendTo(a.$slideTrack),
            a.reinit());
        }),
      (b.prototype.unload = function () {
        var b = this;
        a(".slick-cloned", b.$slider).remove(),
          b.$dots && b.$dots.remove(),
          b.$prevArrow &&
            b.htmlExpr.test(b.options.prevArrow) &&
            b.$prevArrow.remove(),
          b.$nextArrow &&
            b.htmlExpr.test(b.options.nextArrow) &&
            b.$nextArrow.remove(),
          b.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (b.prototype.unslick = function (a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy();
      }),
      (b.prototype.updateArrows = function () {
        var b,
          a = this;
        (b = Math.floor(a.options.slidesToShow / 2)),
          a.options.arrows === !0 &&
            a.slideCount > a.options.slidesToShow &&
            !a.options.infinite &&
            (a.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            a.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === a.currentSlide
              ? (a.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : a.currentSlide >= a.slideCount - a.options.slidesToShow &&
                a.options.centerMode === !1
              ? (a.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : a.currentSlide >= a.slideCount - 1 &&
                a.options.centerMode === !0 &&
                (a.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (b.prototype.updateDots = function () {
        var a = this;
        null !== a.$dots &&
          (a.$dots
            .find("li")
            .removeClass("slick-active")
            .attr("aria-hidden", "true"),
          a.$dots
            .find("li")
            .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
            .addClass("slick-active")
            .attr("aria-hidden", "false"));
      }),
      (b.prototype.visibility = function () {
        var a = this;
        a.options.autoplay &&
          (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1));
      }),
      (a.fn.slick = function () {
        var f,
          g,
          a = this,
          c = arguments[0],
          d = Array.prototype.slice.call(arguments, 1),
          e = a.length;
        for (f = 0; e > f; f++)
          if (
            ("object" == typeof c || "undefined" == typeof c
              ? (a[f].slick = new b(a[f], c))
              : (g = a[f].slick[c].apply(a[f].slick, d)),
            "undefined" != typeof g)
          )
            return g;
        return a;
      });
  });
  !(function (a, b) {
    "function" == typeof define && define.amd
      ? define(b)
      : "object" == typeof exports
      ? (module.exports = b())
      : (a.PhotoSwipe = b());
  })(this, function () {
    "use strict";
    var a = function (a, b, c, d) {
      var e = {
        features: null,
        bind: function (a, b, c, d) {
          var e = (d ? "remove" : "add") + "EventListener";
          b = b.split(" ");
          for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1);
        },
        isArray: function (a) {
          return a instanceof Array;
        },
        createEl: function (a, b) {
          var c = document.createElement(b || "div");
          return a && (c.className = a), c;
        },
        getScrollY: function () {
          var a = window.pageYOffset;
          return void 0 !== a ? a : document.documentElement.scrollTop;
        },
        unbind: function (a, b, c) {
          e.bind(a, b, c, !0);
        },
        removeClass: function (a, b) {
          var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
          a.className = a.className
            .replace(c, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "");
        },
        addClass: function (a, b) {
          e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b);
        },
        hasClass: function (a, b) {
          return (
            a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
          );
        },
        getChildByClass: function (a, b) {
          for (var c = a.firstChild; c; ) {
            if (e.hasClass(c, b)) return c;
            c = c.nextSibling;
          }
        },
        arraySearch: function (a, b, c) {
          for (var d = a.length; d--; ) if (a[d][c] === b) return d;
          return -1;
        },
        extend: function (a, b, c) {
          for (var d in b)
            if (b.hasOwnProperty(d)) {
              if (c && a.hasOwnProperty(d)) continue;
              a[d] = b[d];
            }
        },
        easing: {
          sine: {
            out: function (a) {
              return Math.sin(a * (Math.PI / 2));
            },
            inOut: function (a) {
              return -(Math.cos(Math.PI * a) - 1) / 2;
            },
          },
          cubic: {
            out: function (a) {
              return --a * a * a + 1;
            },
          },
        },
        detectFeatures: function () {
          if (e.features) return e.features;
          var a = e.createEl(),
            b = a.style,
            c = "",
            d = {};
          if (
            ((d.oldIE = document.all && !document.addEventListener),
            (d.touch = "ontouchstart" in window),
            window.requestAnimationFrame &&
              ((d.raf = window.requestAnimationFrame),
              (d.caf = window.cancelAnimationFrame)),
            (d.pointerEvent =
              navigator.pointerEnabled || navigator.msPointerEnabled),
            !d.pointerEvent)
          ) {
            var f = navigator.userAgent;
            if (/iP(hone|od)/.test(navigator.platform)) {
              var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              g &&
                g.length > 0 &&
                ((g = parseInt(g[1], 10)),
                g >= 1 && g < 8 && (d.isOldIOSPhone = !0));
            }
            var h = f.match(/Android\s([0-9\.]*)/),
              i = h ? h[1] : 0;
            (i = parseFloat(i)),
              i >= 1 &&
                (i < 4.4 && (d.isOldAndroid = !0), (d.androidVersion = i)),
              (d.isMobileOpera = /opera mini|opera mobi/i.test(f));
          }
          for (
            var j,
              k,
              l = ["transform", "perspective", "animationName"],
              m = ["", "webkit", "Moz", "ms", "O"],
              n = 0;
            n < 4;
            n++
          ) {
            c = m[n];
            for (var o = 0; o < 3; o++)
              (j = l[o]),
                (k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j)),
                !d[j] && k in b && (d[j] = k);
            c &&
              !d.raf &&
              ((c = c.toLowerCase()),
              (d.raf = window[c + "RequestAnimationFrame"]),
              d.raf &&
                (d.caf =
                  window[c + "CancelAnimationFrame"] ||
                  window[c + "CancelRequestAnimationFrame"]));
          }
          if (!d.raf) {
            var p = 0;
            (d.raf = function (a) {
              var b = new Date().getTime(),
                c = Math.max(0, 16 - (b - p)),
                d = window.setTimeout(function () {
                  a(b + c);
                }, c);
              return (p = b + c), d;
            }),
              (d.caf = function (a) {
                clearTimeout(a);
              });
          }
          return (
            (d.svg =
              !!document.createElementNS &&
              !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
                .createSVGRect),
            (e.features = d),
            d
          );
        },
      };
      e.detectFeatures(),
        e.features.oldIE &&
          (e.bind = function (a, b, c, d) {
            b = b.split(" ");
            for (
              var e,
                f = (d ? "detach" : "attach") + "Event",
                g = function () {
                  c.handleEvent.call(c);
                },
                h = 0;
              h < b.length;
              h++
            )
              if ((e = b[h]))
                if ("object" == typeof c && c.handleEvent) {
                  if (d) {
                    if (!c["oldIE" + e]) return !1;
                  } else c["oldIE" + e] = g;
                  a[f]("on" + e, c["oldIE" + e]);
                } else a[f]("on" + e, c);
          });
      var f = this,
        g = 25,
        h = 3,
        i = {
          allowPanToNext: !0,
          spacing: 0.12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: 0.75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: 0.35,
          panEndFriction: 0.35,
          isClickableElement: function (a) {
            return "A" === a.tagName;
          },
          getDoubleTapZoom: function (a, b) {
            return a ? 1 : b.initialZoomLevel < 0.7 ? 1 : 1.33;
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: "fit",
        };
      e.extend(i, d);
      var j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N,
        O,
        P,
        Q,
        R,
        S,
        T,
        U,
        V,
        W,
        X,
        Y,
        Z,
        $,
        _,
        aa,
        ba,
        ca,
        da,
        ea,
        fa,
        ga,
        ha,
        ia,
        ja,
        ka,
        la,
        ma = function () {
          return {
            x: 0,
            y: 0,
          };
        },
        na = ma(),
        oa = ma(),
        pa = ma(),
        qa = {},
        ra = 0,
        sa = {},
        ta = ma(),
        ua = 0,
        va = !0,
        wa = [],
        xa = {},
        ya = !1,
        za = function (a, b) {
          e.extend(f, b.publicMethods), wa.push(a);
        },
        Aa = function (a) {
          var b = ac();
          return a > b - 1 ? a - b : a < 0 ? b + a : a;
        },
        Ba = {},
        Ca = function (a, b) {
          return Ba[a] || (Ba[a] = []), Ba[a].push(b);
        },
        Da = function (a) {
          var b = Ba[a];
          if (b) {
            var c = Array.prototype.slice.call(arguments);
            c.shift();
            for (var d = 0; d < b.length; d++) b[d].apply(f, c);
          }
        },
        Ea = function () {
          return new Date().getTime();
        },
        Fa = function (a) {
          (ja = a), (f.bg.style.opacity = a * i.bgOpacity);
        },
        Ga = function (a, b, c, d, e) {
          (!ya || (e && e !== f.currItem)) &&
            (d /= e ? e.fitRatio : f.currItem.fitRatio),
            (a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")");
        },
        Ha = function (a) {
          ea &&
            (a &&
              (s > f.currItem.fitRatio
                ? ya || (mc(f.currItem, !1, !0), (ya = !0))
                : ya && (mc(f.currItem), (ya = !1))),
            Ga(ea, pa.x, pa.y, s));
        },
        Ia = function (a) {
          a.container &&
            Ga(
              a.container.style,
              a.initialPosition.x,
              a.initialPosition.y,
              a.initialZoomLevel,
              a
            );
        },
        Ja = function (a, b) {
          b[E] = u + a + "px, 0px" + v;
        },
        Ka = function (a, b) {
          if (!i.loop && b) {
            var c = m + (ta.x * ra - a) / ta.x,
              d = Math.round(a - tb.x);
            ((c < 0 && d > 0) || (c >= ac() - 1 && d < 0)) &&
              (a = tb.x + d * i.mainScrollEndFriction);
          }
          (tb.x = a), Ja(a, n);
        },
        La = function (a, b) {
          var c = ub[a] - sa[a];
          return oa[a] + na[a] + c - c * (b / t);
        },
        Ma = function (a, b) {
          (a.x = b.x), (a.y = b.y), b.id && (a.id = b.id);
        },
        Na = function (a) {
          (a.x = Math.round(a.x)), (a.y = Math.round(a.y));
        },
        Oa = null,
        Pa = function () {
          Oa &&
            (e.unbind(document, "mousemove", Pa),
            e.addClass(a, "pswp--has_mouse"),
            (i.mouseUsed = !0),
            Da("mouseUsed")),
            (Oa = setTimeout(function () {
              Oa = null;
            }, 100));
        },
        Qa = function () {
          e.bind(document, "keydown", f),
            N.transform && e.bind(f.scrollWrap, "click", f),
            i.mouseUsed || e.bind(document, "mousemove", Pa),
            e.bind(window, "resize scroll orientationchange", f),
            Da("bindEvents");
        },
        Ra = function () {
          e.unbind(window, "resize scroll orientationchange", f),
            e.unbind(window, "scroll", r.scroll),
            e.unbind(document, "keydown", f),
            e.unbind(document, "mousemove", Pa),
            N.transform && e.unbind(f.scrollWrap, "click", f),
            V && e.unbind(window, p, f),
            clearTimeout(O),
            Da("unbindEvents");
        },
        Sa = function (a, b) {
          var c = ic(f.currItem, qa, a);
          return b && (da = c), c;
        },
        Ta = function (a) {
          return a || (a = f.currItem), a.initialZoomLevel;
        },
        Ua = function (a) {
          return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1;
        },
        Va = function (a, b, c, d) {
          return d === f.currItem.initialZoomLevel
            ? ((c[a] = f.currItem.initialPosition[a]), !0)
            : ((c[a] = La(a, d)),
              c[a] > b.min[a]
                ? ((c[a] = b.min[a]), !0)
                : c[a] < b.max[a] && ((c[a] = b.max[a]), !0));
        },
        Wa = function () {
          if (E) {
            var b = N.perspective && !G;
            return (
              (u = "translate" + (b ? "3d(" : "(")),
              void (v = N.perspective ? ", 0px)" : ")")
            );
          }
          (E = "left"),
            e.addClass(a, "pswp--ie"),
            (Ja = function (a, b) {
              b.left = a + "px";
            }),
            (Ia = function (a) {
              var b = a.fitRatio > 1 ? 1 : a.fitRatio,
                c = a.container.style,
                d = b * a.w,
                e = b * a.h;
              (c.width = d + "px"),
                (c.height = e + "px"),
                (c.left = a.initialPosition.x + "px"),
                (c.top = a.initialPosition.y + "px");
            }),
            (Ha = function () {
              if (ea) {
                var a = ea,
                  b = f.currItem,
                  c = b.fitRatio > 1 ? 1 : b.fitRatio,
                  d = c * b.w,
                  e = c * b.h;
                (a.width = d + "px"),
                  (a.height = e + "px"),
                  (a.left = pa.x + "px"),
                  (a.top = pa.y + "px");
              }
            });
        },
        Xa = function (a) {
          var b = "";
          i.escKey && 27 === a.keyCode
            ? (b = "close")
            : i.arrowKeys &&
              (37 === a.keyCode
                ? (b = "prev")
                : 39 === a.keyCode && (b = "next")),
            b &&
              (a.ctrlKey ||
                a.altKey ||
                a.shiftKey ||
                a.metaKey ||
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
                f[b]()));
        },
        Ya = function (a) {
          a && (Y || X || fa || T) && (a.preventDefault(), a.stopPropagation());
        },
        Za = function () {
          f.setScrollOffset(0, e.getScrollY());
        },
        $a = {},
        _a = 0,
        ab = function (a) {
          $a[a] && ($a[a].raf && I($a[a].raf), _a--, delete $a[a]);
        },
        bb = function (a) {
          $a[a] && ab(a), $a[a] || (_a++, ($a[a] = {}));
        },
        cb = function () {
          for (var a in $a) $a.hasOwnProperty(a) && ab(a);
        },
        db = function (a, b, c, d, e, f, g) {
          var h,
            i = Ea();
          bb(a);
          var j = function () {
            if ($a[a]) {
              if (((h = Ea() - i), h >= d)) return ab(a), f(c), void (g && g());
              f((c - b) * e(h / d) + b), ($a[a].raf = H(j));
            }
          };
          j();
        },
        eb = {
          shout: Da,
          listen: Ca,
          viewportSize: qa,
          options: i,
          isMainScrollAnimating: function () {
            return fa;
          },
          getZoomLevel: function () {
            return s;
          },
          getCurrentIndex: function () {
            return m;
          },
          isDragging: function () {
            return V;
          },
          isZooming: function () {
            return aa;
          },
          setScrollOffset: function (a, b) {
            (sa.x = a), (M = sa.y = b), Da("updateScrollOffset", sa);
          },
          applyZoomPan: function (a, b, c, d) {
            (pa.x = b), (pa.y = c), (s = a), Ha(d);
          },
          init: function () {
            if (!j && !k) {
              var c;
              (f.framework = e),
                (f.template = a),
                (f.bg = e.getChildByClass(a, "pswp__bg")),
                (J = a.className),
                (j = !0),
                (N = e.detectFeatures()),
                (H = N.raf),
                (I = N.caf),
                (E = N.transform),
                (L = N.oldIE),
                (f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap")),
                (f.container = e.getChildByClass(
                  f.scrollWrap,
                  "pswp__container"
                )),
                (n = f.container.style),
                (f.itemHolders = y =
                  [
                    {
                      el: f.container.children[0],
                      wrap: 0,
                      index: -1,
                    },
                    {
                      el: f.container.children[1],
                      wrap: 0,
                      index: -1,
                    },
                    {
                      el: f.container.children[2],
                      wrap: 0,
                      index: -1,
                    },
                  ]),
                (y[0].el.style.display = y[2].el.style.display = "none"),
                Wa(),
                (r = {
                  resize: f.updateSize,
                  orientationchange: function () {
                    clearTimeout(O),
                      (O = setTimeout(function () {
                        qa.x !== f.scrollWrap.clientWidth && f.updateSize();
                      }, 500));
                  },
                  scroll: Za,
                  keydown: Xa,
                  click: Ya,
                });
              var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
              for (
                (N.animationName && N.transform && !d) ||
                  (i.showAnimationDuration = i.hideAnimationDuration = 0),
                  c = 0;
                c < wa.length;
                c++
              )
                f["init" + wa[c]]();
              if (b) {
                var g = (f.ui = new b(f, e));
                g.init();
              }
              Da("firstUpdate"),
                (m = m || i.index || 0),
                (isNaN(m) || m < 0 || m >= ac()) && (m = 0),
                (f.currItem = _b(m)),
                (N.isOldIOSPhone || N.isOldAndroid) && (va = !1),
                a.setAttribute("aria-hidden", "false"),
                i.modal &&
                  (va
                    ? (a.style.position = "fixed")
                    : ((a.style.position = "absolute"),
                      (a.style.top = e.getScrollY() + "px"))),
                void 0 === M && (Da("initialLayout"), (M = K = e.getScrollY()));
              var l = "pswp--open ";
              for (
                i.mainClass && (l += i.mainClass + " "),
                  i.showHideOpacity && (l += "pswp--animate_opacity "),
                  l += G ? "pswp--touch" : "pswp--notouch",
                  l += N.animationName ? " pswp--css_animation" : "",
                  l += N.svg ? " pswp--svg" : "",
                  e.addClass(a, l),
                  f.updateSize(),
                  o = -1,
                  ua = null,
                  c = 0;
                c < h;
                c++
              )
                Ja((c + o) * ta.x, y[c].el.style);
              L || e.bind(f.scrollWrap, q, f),
                Ca("initialZoomInEnd", function () {
                  f.setContent(y[0], m - 1),
                    f.setContent(y[2], m + 1),
                    (y[0].el.style.display = y[2].el.style.display = "block"),
                    i.focus && a.focus(),
                    Qa();
                }),
                f.setContent(y[1], m),
                f.updateCurrItem(),
                Da("afterInit"),
                va ||
                  (w = setInterval(function () {
                    _a ||
                      V ||
                      aa ||
                      s !== f.currItem.initialZoomLevel ||
                      f.updateSize();
                  }, 1e3)),
                e.addClass(a, "pswp--visible");
            }
          },
          close: function () {
            j &&
              ((j = !1),
              (k = !0),
              Da("close"),
              Ra(),
              cc(f.currItem, null, !0, f.destroy));
          },
          destroy: function () {
            Da("destroy"),
              Xb && clearTimeout(Xb),
              a.setAttribute("aria-hidden", "true"),
              (a.className = J),
              w && clearInterval(w),
              e.unbind(f.scrollWrap, q, f),
              e.unbind(window, "scroll", f),
              zb(),
              cb(),
              (Ba = null);
          },
          panTo: function (a, b, c) {
            c ||
              (a > da.min.x ? (a = da.min.x) : a < da.max.x && (a = da.max.x),
              b > da.min.y ? (b = da.min.y) : b < da.max.y && (b = da.max.y)),
              (pa.x = a),
              (pa.y = b),
              Ha();
          },
          handleEvent: function (a) {
            (a = a || window.event), r[a.type] && r[a.type](a);
          },
          goTo: function (a) {
            a = Aa(a);
            var b = a - m;
            (ua = b),
              (m = a),
              (f.currItem = _b(m)),
              (ra -= b),
              Ka(ta.x * ra),
              cb(),
              (fa = !1),
              f.updateCurrItem();
          },
          next: function () {
            f.goTo(m + 1);
          },
          prev: function () {
            f.goTo(m - 1);
          },
          updateCurrZoomItem: function (a) {
            if ((a && Da("beforeChange", 0), y[1].el.children.length)) {
              var b = y[1].el.children[0];
              ea = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null;
            } else ea = null;
            (da = f.currItem.bounds),
              (t = s = f.currItem.initialZoomLevel),
              (pa.x = da.center.x),
              (pa.y = da.center.y),
              a && Da("afterChange");
          },
          invalidateCurrItems: function () {
            x = !0;
            for (var a = 0; a < h; a++) y[a].item && (y[a].item.needsUpdate = !0);
          },
          updateCurrItem: function (a) {
            if (0 !== ua) {
              var b,
                c = Math.abs(ua);
              if (!(a && c < 2)) {
                (f.currItem = _b(m)),
                  (ya = !1),
                  Da("beforeChange", ua),
                  c >= h && ((o += ua + (ua > 0 ? -h : h)), (c = h));
                for (var d = 0; d < c; d++)
                  ua > 0
                    ? ((b = y.shift()),
                      (y[h - 1] = b),
                      o++,
                      Ja((o + 2) * ta.x, b.el.style),
                      f.setContent(b, m - c + d + 1 + 1))
                    : ((b = y.pop()),
                      y.unshift(b),
                      o--,
                      Ja(o * ta.x, b.el.style),
                      f.setContent(b, m + c - d - 1 - 1));
                if (ea && 1 === Math.abs(ua)) {
                  var e = _b(z);
                  e.initialZoomLevel !== s && (ic(e, qa), mc(e), Ia(e));
                }
                (ua = 0), f.updateCurrZoomItem(), (z = m), Da("afterChange");
              }
            }
          },
          updateSize: function (b) {
            if (!va && i.modal) {
              var c = e.getScrollY();
              if (
                (M !== c && ((a.style.top = c + "px"), (M = c)),
                !b && xa.x === window.innerWidth && xa.y === window.innerHeight)
              )
                return;
              (xa.x = window.innerWidth),
                (xa.y = window.innerHeight),
                (a.style.height = xa.y + "px");
            }
            if (
              ((qa.x = f.scrollWrap.clientWidth),
              (qa.y = f.scrollWrap.clientHeight),
              Za(),
              (ta.x = qa.x + Math.round(qa.x * i.spacing)),
              (ta.y = qa.y),
              Ka(ta.x * ra),
              Da("beforeResize"),
              void 0 !== o)
            ) {
              for (var d, g, j, k = 0; k < h; k++)
                (d = y[k]),
                  Ja((k + o) * ta.x, d.el.style),
                  (j = m + k - 1),
                  i.loop && ac() > 2 && (j = Aa(j)),
                  (g = _b(j)),
                  g && (x || g.needsUpdate || !g.bounds)
                    ? (f.cleanSlide(g),
                      f.setContent(d, j),
                      1 === k && ((f.currItem = g), f.updateCurrZoomItem(!0)),
                      (g.needsUpdate = !1))
                    : d.index === -1 && j >= 0 && f.setContent(d, j),
                  g && g.container && (ic(g, qa), mc(g), Ia(g));
              x = !1;
            }
            (t = s = f.currItem.initialZoomLevel),
              (da = f.currItem.bounds),
              da && ((pa.x = da.center.x), (pa.y = da.center.y), Ha(!0)),
              Da("resize");
          },
          zoomTo: function (a, b, c, d, f) {
            b &&
              ((t = s),
              (ub.x = Math.abs(b.x) - pa.x),
              (ub.y = Math.abs(b.y) - pa.y),
              Ma(oa, pa));
            var g = Sa(a, !1),
              h = {};
            Va("x", g, h, a), Va("y", g, h, a);
            var i = s,
              j = {
                x: pa.x,
                y: pa.y,
              };
            Na(h);
            var k = function (b) {
              1 === b
                ? ((s = a), (pa.x = h.x), (pa.y = h.y))
                : ((s = (a - i) * b + i),
                  (pa.x = (h.x - j.x) * b + j.x),
                  (pa.y = (h.y - j.y) * b + j.y)),
                f && f(b),
                Ha(1 === b);
            };
            c ? db("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1);
          },
        },
        fb = 30,
        gb = 10,
        hb = {},
        ib = {},
        jb = {},
        kb = {},
        lb = {},
        mb = [],
        nb = {},
        ob = [],
        pb = {},
        qb = 0,
        rb = ma(),
        sb = 0,
        tb = ma(),
        ub = ma(),
        vb = ma(),
        wb = function (a, b) {
          return a.x === b.x && a.y === b.y;
        },
        xb = function (a, b) {
          return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g;
        },
        yb = function (a, b) {
          return (
            (pb.x = Math.abs(a.x - b.x)),
            (pb.y = Math.abs(a.y - b.y)),
            Math.sqrt(pb.x * pb.x + pb.y * pb.y)
          );
        },
        zb = function () {
          Z && (I(Z), (Z = null));
        },
        Ab = function () {
          V && ((Z = H(Ab)), Qb());
        },
        Bb = function () {
          return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel);
        },
        Cb = function (a, b) {
          return (
            !(!a || a === document) &&
            !(
              a.getAttribute("class") &&
              a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1
            ) &&
            (b(a) ? a : Cb(a.parentNode, b))
          );
        },
        Db = {},
        Eb = function (a, b) {
          return (
            (Db.prevent = !Cb(a.target, i.isClickableElement)),
            Da("preventDragEvent", a, b, Db),
            Db.prevent
          );
        },
        Fb = function (a, b) {
          return (b.x = a.pageX), (b.y = a.pageY), (b.id = a.identifier), b;
        },
        Gb = function (a, b, c) {
          (c.x = 0.5 * (a.x + b.x)), (c.y = 0.5 * (a.y + b.y));
        },
        Hb = function (a, b, c) {
          if (a - Q > 50) {
            var d = ob.length > 2 ? ob.shift() : {};
            (d.x = b), (d.y = c), ob.push(d), (Q = a);
          }
        },
        Ib = function () {
          var a = pa.y - f.currItem.initialPosition.y;
          return 1 - Math.abs(a / (qa.y / 2));
        },
        Jb = {},
        Kb = {},
        Lb = [],
        Mb = function (a) {
          for (; Lb.length > 0; ) Lb.pop();
          return (
            F
              ? ((la = 0),
                mb.forEach(function (a) {
                  0 === la ? (Lb[0] = a) : 1 === la && (Lb[1] = a), la++;
                }))
              : a.type.indexOf("touch") > -1
              ? a.touches &&
                a.touches.length > 0 &&
                ((Lb[0] = Fb(a.touches[0], Jb)),
                a.touches.length > 1 && (Lb[1] = Fb(a.touches[1], Kb)))
              : ((Jb.x = a.pageX), (Jb.y = a.pageY), (Jb.id = ""), (Lb[0] = Jb)),
            Lb
          );
        },
        Nb = function (a, b) {
          var c,
            d,
            e,
            g,
            h = 0,
            j = pa[a] + b[a],
            k = b[a] > 0,
            l = tb.x + b.x,
            m = tb.x - nb.x;
          return (
            (c = j > da.min[a] || j < da.max[a] ? i.panEndFriction : 1),
            (j = pa[a] + b[a] * c),
            (!i.allowPanToNext && s !== f.currItem.initialZoomLevel) ||
            (ea
              ? "h" !== ga ||
                "x" !== a ||
                X ||
                (k
                  ? (j > da.min[a] &&
                      ((c = i.panEndFriction),
                      (h = da.min[a] - j),
                      (d = da.min[a] - oa[a])),
                    (d <= 0 || m < 0) && ac() > 1
                      ? ((g = l), m < 0 && l > nb.x && (g = nb.x))
                      : da.min.x !== da.max.x && (e = j))
                  : (j < da.max[a] &&
                      ((c = i.panEndFriction),
                      (h = j - da.max[a]),
                      (d = oa[a] - da.max[a])),
                    (d <= 0 || m > 0) && ac() > 1
                      ? ((g = l), m > 0 && l < nb.x && (g = nb.x))
                      : da.min.x !== da.max.x && (e = j)))
              : (g = l),
            "x" !== a)
              ? void (fa || $ || (s > f.currItem.fitRatio && (pa[a] += b[a] * c)))
              : (void 0 !== g && (Ka(g, !0), ($ = g !== nb.x)),
                da.min.x !== da.max.x &&
                  (void 0 !== e ? (pa.x = e) : $ || (pa.x += b.x * c)),
                void 0 !== g)
          );
        },
        Ob = function (a) {
          if (!("mousedown" === a.type && a.button > 0)) {
            if ($b) return void a.preventDefault();
            if (!U || "mousedown" !== a.type) {
              if ((Eb(a, !0) && a.preventDefault(), Da("pointerDown"), F)) {
                var b = e.arraySearch(mb, a.pointerId, "id");
                b < 0 && (b = mb.length),
                  (mb[b] = {
                    x: a.pageX,
                    y: a.pageY,
                    id: a.pointerId,
                  });
              }
              var c = Mb(a),
                d = c.length;
              (_ = null),
                cb(),
                (V && 1 !== d) ||
                  ((V = ha = !0),
                  e.bind(window, p, f),
                  (S = ka = ia = T = $ = Y = W = X = !1),
                  (ga = null),
                  Da("firstTouchStart", c),
                  Ma(oa, pa),
                  (na.x = na.y = 0),
                  Ma(kb, c[0]),
                  Ma(lb, kb),
                  (nb.x = ta.x * ra),
                  (ob = [
                    {
                      x: kb.x,
                      y: kb.y,
                    },
                  ]),
                  (Q = P = Ea()),
                  Sa(s, !0),
                  zb(),
                  Ab()),
                !aa &&
                  d > 1 &&
                  !fa &&
                  !$ &&
                  ((t = s),
                  (X = !1),
                  (aa = W = !0),
                  (na.y = na.x = 0),
                  Ma(oa, pa),
                  Ma(hb, c[0]),
                  Ma(ib, c[1]),
                  Gb(hb, ib, vb),
                  (ub.x = Math.abs(vb.x) - pa.x),
                  (ub.y = Math.abs(vb.y) - pa.y),
                  (ba = ca = yb(hb, ib)));
            }
          }
        },
        Pb = function (a) {
          if ((a.preventDefault(), F)) {
            var b = e.arraySearch(mb, a.pointerId, "id");
            if (b > -1) {
              var c = mb[b];
              (c.x = a.pageX), (c.y = a.pageY);
            }
          }
          if (V) {
            var d = Mb(a);
            if (ga || Y || aa) _ = d;
            else if (tb.x !== ta.x * ra) ga = "h";
            else {
              var f = Math.abs(d[0].x - kb.x) - Math.abs(d[0].y - kb.y);
              Math.abs(f) >= gb && ((ga = f > 0 ? "h" : "v"), (_ = d));
            }
          }
        },
        Qb = function () {
          if (_) {
            var a = _.length;
            if (0 !== a)
              if (
                (Ma(hb, _[0]),
                (jb.x = hb.x - kb.x),
                (jb.y = hb.y - kb.y),
                aa && a > 1)
              ) {
                if (
                  ((kb.x = hb.x), (kb.y = hb.y), !jb.x && !jb.y && wb(_[1], ib))
                )
                  return;
                Ma(ib, _[1]), X || ((X = !0), Da("zoomGestureStarted"));
                var b = yb(hb, ib),
                  c = Vb(b);
                c >
                  f.currItem.initialZoomLevel +
                    f.currItem.initialZoomLevel / 15 && (ka = !0);
                var d = 1,
                  e = Ta(),
                  g = Ua();
                if (c < e)
                  if (i.pinchToClose && !ka && t <= f.currItem.initialZoomLevel) {
                    var h = e - c,
                      j = 1 - h / (e / 1.2);
                    Fa(j), Da("onPinchClose", j), (ia = !0);
                  } else
                    (d = (e - c) / e), d > 1 && (d = 1), (c = e - d * (e / 3));
                else
                  c > g &&
                    ((d = (c - g) / (6 * e)), d > 1 && (d = 1), (c = g + d * e));
                d < 0 && (d = 0),
                  (ba = b),
                  Gb(hb, ib, rb),
                  (na.x += rb.x - vb.x),
                  (na.y += rb.y - vb.y),
                  Ma(vb, rb),
                  (pa.x = La("x", c)),
                  (pa.y = La("y", c)),
                  (S = c > s),
                  (s = c),
                  Ha();
              } else {
                if (!ga) return;
                if (
                  (ha &&
                    ((ha = !1),
                    Math.abs(jb.x) >= gb && (jb.x -= _[0].x - lb.x),
                    Math.abs(jb.y) >= gb && (jb.y -= _[0].y - lb.y)),
                  (kb.x = hb.x),
                  (kb.y = hb.y),
                  0 === jb.x && 0 === jb.y)
                )
                  return;
                if ("v" === ga && i.closeOnVerticalDrag && !Bb()) {
                  (na.y += jb.y), (pa.y += jb.y);
                  var k = Ib();
                  return (T = !0), Da("onVerticalDrag", k), Fa(k), void Ha();
                }
                Hb(Ea(), hb.x, hb.y), (Y = !0), (da = f.currItem.bounds);
                var l = Nb("x", jb);
                l || (Nb("y", jb), Na(pa), Ha());
              }
          }
        },
        Rb = function (a) {
          if (N.isOldAndroid) {
            if (U && "mouseup" === a.type) return;
            a.type.indexOf("touch") > -1 &&
              (clearTimeout(U),
              (U = setTimeout(function () {
                U = 0;
              }, 600)));
          }
          Da("pointerUp"), Eb(a, !1) && a.preventDefault();
          var b;
          if (F) {
            var c = e.arraySearch(mb, a.pointerId, "id");
            if (c > -1)
              if (((b = mb.splice(c, 1)[0]), navigator.pointerEnabled))
                b.type = a.pointerType || "mouse";
              else {
                var d = {
                  4: "mouse",
                  2: "touch",
                  3: "pen",
                };
                (b.type = d[a.pointerType]),
                  b.type || (b.type = a.pointerType || "mouse");
              }
          }
          var g,
            h = Mb(a),
            j = h.length;
          if (("mouseup" === a.type && (j = 0), 2 === j)) return (_ = null), !0;
          1 === j && Ma(lb, h[0]),
            0 !== j ||
              ga ||
              fa ||
              (b ||
                ("mouseup" === a.type
                  ? (b = {
                      x: a.pageX,
                      y: a.pageY,
                      type: "mouse",
                    })
                  : a.changedTouches &&
                    a.changedTouches[0] &&
                    (b = {
                      x: a.changedTouches[0].pageX,
                      y: a.changedTouches[0].pageY,
                      type: "touch",
                    })),
              Da("touchRelease", a, b));
          var k = -1;
          if (
            (0 === j &&
              ((V = !1),
              e.unbind(window, p, f),
              zb(),
              aa ? (k = 0) : sb !== -1 && (k = Ea() - sb)),
            (sb = 1 === j ? Ea() : -1),
            (g = k !== -1 && k < 150 ? "zoom" : "swipe"),
            aa &&
              j < 2 &&
              ((aa = !1),
              1 === j && (g = "zoomPointerUp"),
              Da("zoomGestureEnded")),
            (_ = null),
            Y || X || fa || T)
          )
            if ((cb(), R || (R = Sb()), R.calculateSwipeSpeed("x"), T)) {
              var l = Ib();
              if (l < i.verticalDragRange) f.close();
              else {
                var m = pa.y,
                  n = ja;
                db("verticalDrag", 0, 1, 300, e.easing.cubic.out, function (a) {
                  (pa.y = (f.currItem.initialPosition.y - m) * a + m),
                    Fa((1 - n) * a + n),
                    Ha();
                }),
                  Da("onVerticalDrag", 1);
              }
            } else {
              if (($ || fa) && 0 === j) {
                var o = Ub(g, R);
                if (o) return;
                g = "zoomPointerUp";
              }
              if (!fa)
                return "swipe" !== g
                  ? void Wb()
                  : void (!$ && s > f.currItem.fitRatio && Tb(R));
            }
        },
        Sb = function () {
          var a,
            b,
            c = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function (d) {
                ob.length > 1
                  ? ((a = Ea() - Q + 50), (b = ob[ob.length - 2][d]))
                  : ((a = Ea() - P), (b = lb[d])),
                  (c.lastFlickOffset[d] = kb[d] - b),
                  (c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d])),
                  c.lastFlickDist[d] > 20
                    ? (c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a)
                    : (c.lastFlickSpeed[d] = 0),
                  Math.abs(c.lastFlickSpeed[d]) < 0.1 &&
                    (c.lastFlickSpeed[d] = 0),
                  (c.slowDownRatio[d] = 0.95),
                  (c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d]),
                  (c.speedDecelerationRatio[d] = 1);
              },
              calculateOverBoundsAnimOffset: function (a, b) {
                c.backAnimStarted[a] ||
                  (pa[a] > da.min[a]
                    ? (c.backAnimDestination[a] = da.min[a])
                    : pa[a] < da.max[a] && (c.backAnimDestination[a] = da.max[a]),
                  void 0 !== c.backAnimDestination[a] &&
                    ((c.slowDownRatio[a] = 0.7),
                    (c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a]),
                    c.speedDecelerationRatioAbs[a] < 0.05 &&
                      ((c.lastFlickSpeed[a] = 0),
                      (c.backAnimStarted[a] = !0),
                      db(
                        "bounceZoomPan" + a,
                        pa[a],
                        c.backAnimDestination[a],
                        b || 300,
                        e.easing.sine.out,
                        function (b) {
                          (pa[a] = b), Ha();
                        }
                      ))));
              },
              calculateAnimOffset: function (a) {
                c.backAnimStarted[a] ||
                  ((c.speedDecelerationRatio[a] =
                    c.speedDecelerationRatio[a] *
                    (c.slowDownRatio[a] +
                      c.slowDownRatioReverse[a] -
                      (c.slowDownRatioReverse[a] * c.timeDiff) / 10)),
                  (c.speedDecelerationRatioAbs[a] = Math.abs(
                    c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]
                  )),
                  (c.distanceOffset[a] =
                    c.lastFlickSpeed[a] *
                    c.speedDecelerationRatio[a] *
                    c.timeDiff),
                  (pa[a] += c.distanceOffset[a]));
              },
              panAnimLoop: function () {
                if (
                  $a.zoomPan &&
                  (($a.zoomPan.raf = H(c.panAnimLoop)),
                  (c.now = Ea()),
                  (c.timeDiff = c.now - c.lastNow),
                  (c.lastNow = c.now),
                  c.calculateAnimOffset("x"),
                  c.calculateAnimOffset("y"),
                  Ha(),
                  c.calculateOverBoundsAnimOffset("x"),
                  c.calculateOverBoundsAnimOffset("y"),
                  c.speedDecelerationRatioAbs.x < 0.05 &&
                    c.speedDecelerationRatioAbs.y < 0.05)
                )
                  return (
                    (pa.x = Math.round(pa.x)),
                    (pa.y = Math.round(pa.y)),
                    Ha(),
                    void ab("zoomPan")
                  );
              },
            };
          return c;
        },
        Tb = function (a) {
          return (
            a.calculateSwipeSpeed("y"),
            (da = f.currItem.bounds),
            (a.backAnimDestination = {}),
            (a.backAnimStarted = {}),
            Math.abs(a.lastFlickSpeed.x) <= 0.05 &&
            Math.abs(a.lastFlickSpeed.y) <= 0.05
              ? ((a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y =
                  0),
                a.calculateOverBoundsAnimOffset("x"),
                a.calculateOverBoundsAnimOffset("y"),
                !0)
              : (bb("zoomPan"), (a.lastNow = Ea()), void a.panAnimLoop())
          );
        },
        Ub = function (a, b) {
          var c;
          fa || (qb = m);
          var d;
          if ("swipe" === a) {
            var g = kb.x - lb.x,
              h = b.lastFlickDist.x < 10;
            g > fb && (h || b.lastFlickOffset.x > 20)
              ? (d = -1)
              : g < -fb && (h || b.lastFlickOffset.x < -20) && (d = 1);
          }
          var j;
          d &&
            ((m += d),
            m < 0
              ? ((m = i.loop ? ac() - 1 : 0), (j = !0))
              : m >= ac() && ((m = i.loop ? 0 : ac() - 1), (j = !0)),
            (j && !i.loop) || ((ua += d), (ra -= d), (c = !0)));
          var k,
            l = ta.x * ra,
            n = Math.abs(l - tb.x);
          return (
            c || l > tb.x == b.lastFlickSpeed.x > 0
              ? ((k =
                  Math.abs(b.lastFlickSpeed.x) > 0
                    ? n / Math.abs(b.lastFlickSpeed.x)
                    : 333),
                (k = Math.min(k, 400)),
                (k = Math.max(k, 250)))
              : (k = 333),
            qb === m && (c = !1),
            (fa = !0),
            Da("mainScrollAnimStart"),
            db("mainScroll", tb.x, l, k, e.easing.cubic.out, Ka, function () {
              cb(),
                (fa = !1),
                (qb = -1),
                (c || qb !== m) && f.updateCurrItem(),
                Da("mainScrollAnimComplete");
            }),
            c && f.updateCurrItem(!0),
            c
          );
        },
        Vb = function (a) {
          return (1 / ca) * a * t;
        },
        Wb = function () {
          var a = s,
            b = Ta(),
            c = Ua();
          s < b ? (a = b) : s > c && (a = c);
          var d,
            g = 1,
            h = ja;
          return ia && !S && !ka && s < b
            ? (f.close(), !0)
            : (ia &&
                (d = function (a) {
                  Fa((g - h) * a + h);
                }),
              f.zoomTo(a, 0, 200, e.easing.cubic.out, d),
              !0);
        };
      za("Gestures", {
        publicMethods: {
          initGestures: function () {
            var a = function (a, b, c, d, e) {
              (A = a + b), (B = a + c), (C = a + d), (D = e ? a + e : "");
            };
            (F = N.pointerEvent),
              F && N.touch && (N.touch = !1),
              F
                ? navigator.pointerEnabled
                  ? a("pointer", "down", "move", "up", "cancel")
                  : a("MSPointer", "Down", "Move", "Up", "Cancel")
                : N.touch
                ? (a("touch", "start", "move", "end", "cancel"), (G = !0))
                : a("mouse", "down", "move", "up"),
              (p = B + " " + C + " " + D),
              (q = A),
              F &&
                !G &&
                (G =
                  navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
              (f.likelyTouchDevice = G),
              (r[A] = Ob),
              (r[B] = Pb),
              (r[C] = Rb),
              D && (r[D] = r[C]),
              N.touch &&
                ((q += " mousedown"),
                (p += " mousemove mouseup"),
                (r.mousedown = r[A]),
                (r.mousemove = r[B]),
                (r.mouseup = r[C])),
              G || (i.allowPanToNext = !1);
          },
        },
      });
      var Xb,
        Yb,
        Zb,
        $b,
        _b,
        ac,
        bc,
        cc = function (b, c, d, g) {
          Xb && clearTimeout(Xb), ($b = !0), (Zb = !0);
          var h;
          b.initialLayout
            ? ((h = b.initialLayout), (b.initialLayout = null))
            : (h = i.getThumbBoundsFn && i.getThumbBoundsFn(m));
          var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
            k = function () {
              ab("initialZoom"),
                d
                  ? (f.template.removeAttribute("style"),
                    f.bg.removeAttribute("style"))
                  : (Fa(1),
                    c && (c.style.display = "block"),
                    e.addClass(a, "pswp--animated-in"),
                    Da("initialZoom" + (d ? "OutEnd" : "InEnd"))),
                g && g(),
                ($b = !1);
            };
          if (!j || !h || void 0 === h.x)
            return (
              Da("initialZoom" + (d ? "Out" : "In")),
              (s = b.initialZoomLevel),
              Ma(pa, b.initialPosition),
              Ha(),
              (a.style.opacity = d ? 0 : 1),
              Fa(1),
              void (j
                ? setTimeout(function () {
                    k();
                  }, j)
                : k())
            );
          var n = function () {
            var c = l,
              g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
            b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"),
              d ||
                ((s = h.w / b.w),
                (pa.x = h.x),
                (pa.y = h.y - K),
                (f[g ? "template" : "bg"].style.opacity = 0.001),
                Ha()),
              bb("initialZoom"),
              d && !c && e.removeClass(a, "pswp--animated-in"),
              g &&
                (d
                  ? e[(c ? "remove" : "add") + "Class"](
                      a,
                      "pswp--animate_opacity"
                    )
                  : setTimeout(function () {
                      e.addClass(a, "pswp--animate_opacity");
                    }, 30)),
              (Xb = setTimeout(
                function () {
                  if ((Da("initialZoom" + (d ? "Out" : "In")), d)) {
                    var f = h.w / b.w,
                      i = {
                        x: pa.x,
                        y: pa.y,
                      },
                      l = s,
                      m = ja,
                      n = function (b) {
                        1 === b
                          ? ((s = f), (pa.x = h.x), (pa.y = h.y - M))
                          : ((s = (f - l) * b + l),
                            (pa.x = (h.x - i.x) * b + i.x),
                            (pa.y = (h.y - M - i.y) * b + i.y)),
                          Ha(),
                          g ? (a.style.opacity = 1 - b) : Fa(m - b * m);
                      };
                    c
                      ? db("initialZoom", 0, 1, j, e.easing.cubic.out, n, k)
                      : (n(1), (Xb = setTimeout(k, j + 20)));
                  } else
                    (s = b.initialZoomLevel),
                      Ma(pa, b.initialPosition),
                      Ha(),
                      Fa(1),
                      g ? (a.style.opacity = 1) : Fa(1),
                      (Xb = setTimeout(k, j + 20));
                },
                d ? 25 : 90
              ));
          };
          n();
        },
        dc = {},
        ec = [],
        fc = {
          index: 0,
          errorMsg:
            '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function () {
            return Yb.length;
          },
        },
        gc = function () {
          return {
            center: {
              x: 0,
              y: 0,
            },
            max: {
              x: 0,
              y: 0,
            },
            min: {
              x: 0,
              y: 0,
            },
          };
        },
        hc = function (a, b, c) {
          var d = a.bounds;
          (d.center.x = Math.round((dc.x - b) / 2)),
            (d.center.y = Math.round((dc.y - c) / 2) + a.vGap.top),
            (d.max.x = b > dc.x ? Math.round(dc.x - b) : d.center.x),
            (d.max.y = c > dc.y ? Math.round(dc.y - c) + a.vGap.top : d.center.y),
            (d.min.x = b > dc.x ? 0 : d.center.x),
            (d.min.y = c > dc.y ? a.vGap.top : d.center.y);
        },
        ic = function (a, b, c) {
          if (a.src && !a.loadError) {
            var d = !c;
            if (
              (d &&
                (a.vGap ||
                  (a.vGap = {
                    top: 0,
                    bottom: 0,
                  }),
                Da("parseVerticalMargin", a)),
              (dc.x = b.x),
              (dc.y = b.y - a.vGap.top - a.vGap.bottom),
              d)
            ) {
              var e = dc.x / a.w,
                f = dc.y / a.h;
              a.fitRatio = e < f ? e : f;
              var g = i.scaleMode;
              "orig" === g ? (c = 1) : "fit" === g && (c = a.fitRatio),
                c > 1 && (c = 1),
                (a.initialZoomLevel = c),
                a.bounds || (a.bounds = gc());
            }
            if (!c) return;
            return (
              hc(a, a.w * c, a.h * c),
              d &&
                c === a.initialZoomLevel &&
                (a.initialPosition = a.bounds.center),
              a.bounds
            );
          }
          return (
            (a.w = a.h = 0),
            (a.initialZoomLevel = a.fitRatio = 1),
            (a.bounds = gc()),
            (a.initialPosition = a.bounds.center),
            a.bounds
          );
        },
        jc = function (a, b, c, d, e, g) {
          b.loadError ||
            (d &&
              ((b.imageAppended = !0),
              mc(b, d, b === f.currItem && ya),
              c.appendChild(d),
              g &&
                setTimeout(function () {
                  b &&
                    b.loaded &&
                    b.placeholder &&
                    ((b.placeholder.style.display = "none"),
                    (b.placeholder = null));
                }, 500)));
        },
        kc = function (a) {
          (a.loading = !0), (a.loaded = !1);
          var b = (a.img = e.createEl("pswp__img", "img")),
            c = function () {
              (a.loading = !1),
                (a.loaded = !0),
                a.loadComplete ? a.loadComplete(a) : (a.img = null),
                (b.onload = b.onerror = null),
                (b = null);
            };
          return (
            (b.onload = c),
            (b.onerror = function () {
              (a.loadError = !0), c();
            }),
            (b.src = a.src),
            b
          );
        },
        lc = function (a, b) {
          if (a.src && a.loadError && a.container)
            return (
              b && (a.container.innerHTML = ""),
              (a.container.innerHTML = i.errorMsg.replace("%url%", a.src)),
              !0
            );
        },
        mc = function (a, b, c) {
          if (a.src) {
            b || (b = a.container.lastChild);
            var d = c ? a.w : Math.round(a.w * a.fitRatio),
              e = c ? a.h : Math.round(a.h * a.fitRatio);
            a.placeholder &&
              !a.loaded &&
              ((a.placeholder.style.width = d + "px"),
              (a.placeholder.style.height = e + "px")),
              (b.style.width = d + "px"),
              (b.style.height = e + "px");
          }
        },
        nc = function () {
          if (ec.length) {
            for (var a, b = 0; b < ec.length; b++)
              (a = ec[b]),
                a.holder.index === a.index &&
                  jc(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
            ec = [];
          }
        };
      za("Controller", {
        publicMethods: {
          lazyLoadItem: function (a) {
            a = Aa(a);
            var b = _b(a);
            b &&
              ((!b.loaded && !b.loading) || x) &&
              (Da("gettingData", a, b), b.src && kc(b));
          },
          initController: function () {
            e.extend(i, fc, !0),
              (f.items = Yb = c),
              (_b = f.getItemAt),
              (ac = i.getNumItemsFn),
              (bc = i.loop),
              ac() < 3 && (i.loop = !1),
              Ca("beforeChange", function (a) {
                var b,
                  c = i.preload,
                  d = null === a || a >= 0,
                  e = Math.min(c[0], ac()),
                  g = Math.min(c[1], ac());
                for (b = 1; b <= (d ? g : e); b++) f.lazyLoadItem(m + b);
                for (b = 1; b <= (d ? e : g); b++) f.lazyLoadItem(m - b);
              }),
              Ca("initialLayout", function () {
                f.currItem.initialLayout =
                  i.getThumbBoundsFn && i.getThumbBoundsFn(m);
              }),
              Ca("mainScrollAnimComplete", nc),
              Ca("initialZoomInEnd", nc),
              Ca("destroy", function () {
                for (var a, b = 0; b < Yb.length; b++)
                  (a = Yb[b]),
                    a.container && (a.container = null),
                    a.placeholder && (a.placeholder = null),
                    a.img && (a.img = null),
                    a.preloader && (a.preloader = null),
                    a.loadError && (a.loaded = a.loadError = !1);
                ec = null;
              });
          },
          getItemAt: function (a) {
            return a >= 0 && void 0 !== Yb[a] && Yb[a];
          },
          allowProgressiveImg: function () {
            return (
              i.forceProgressiveLoading ||
              !G ||
              i.mouseUsed ||
              screen.width > 1200
            );
          },
          setContent: function (a, b) {
            i.loop && (b = Aa(b));
            var c = f.getItemAt(a.index);
            c && (c.container = null);
            var d,
              g = f.getItemAt(b);
            if (!g) return void (a.el.innerHTML = "");
            Da("gettingData", b, g), (a.index = b), (a.item = g);
            var h = (g.container = e.createEl("pswp__zoom-wrap"));
            if (
              (!g.src &&
                g.html &&
                (g.html.tagName ? h.appendChild(g.html) : (h.innerHTML = g.html)),
              lc(g),
              ic(g, qa),
              !g.src || g.loadError || g.loaded)
            )
              g.src &&
                !g.loadError &&
                ((d = e.createEl("pswp__img", "img")),
                (d.style.opacity = 1),
                (d.src = g.src),
                mc(g, d),
                jc(b, g, h, d, !0));
            else {
              if (
                ((g.loadComplete = function (c) {
                  if (j) {
                    if (a && a.index === b) {
                      if (lc(c, !0))
                        return (
                          (c.loadComplete = c.img = null),
                          ic(c, qa),
                          Ia(c),
                          void (a.index === m && f.updateCurrZoomItem())
                        );
                      c.imageAppended
                        ? !$b &&
                          c.placeholder &&
                          ((c.placeholder.style.display = "none"),
                          (c.placeholder = null))
                        : N.transform && (fa || $b)
                        ? ec.push({
                            item: c,
                            baseDiv: h,
                            img: c.img,
                            index: b,
                            holder: a,
                            clearPlaceholder: !0,
                          })
                        : jc(b, c, h, c.img, fa || $b, !0);
                    }
                    (c.loadComplete = null),
                      (c.img = null),
                      Da("imageLoadComplete", b, c);
                  }
                }),
                e.features.transform)
              ) {
                var k = "pswp__img pswp__img--placeholder";
                k += g.msrc ? "" : " pswp__img--placeholder--blank";
                var l = e.createEl(k, g.msrc ? "img" : "");
                g.msrc && (l.src = g.msrc),
                  mc(g, l),
                  h.appendChild(l),
                  (g.placeholder = l);
              }
              g.loading || kc(g),
                f.allowProgressiveImg() &&
                  (!Zb && N.transform
                    ? ec.push({
                        item: g,
                        baseDiv: h,
                        img: g.img,
                        index: b,
                        holder: a,
                      })
                    : jc(b, g, h, g.img, !0, !0));
            }
            Zb || b !== m ? Ia(g) : ((ea = h.style), cc(g, d || g.img)),
              (a.el.innerHTML = ""),
              a.el.appendChild(h);
          },
          cleanSlide: function (a) {
            a.img && (a.img.onload = a.img.onerror = null),
              (a.loaded = a.loading = a.img = a.imageAppended = !1);
          },
        },
      });
      var oc,
        pc = {},
        qc = function (a, b, c) {
          var d = document.createEvent("CustomEvent"),
            e = {
              origEvent: a,
              target: a.target,
              releasePoint: b,
              pointerType: c || "touch",
            };
          d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d);
        };
      za("Tap", {
        publicMethods: {
          initTap: function () {
            Ca("firstTouchStart", f.onTapStart),
              Ca("touchRelease", f.onTapRelease),
              Ca("destroy", function () {
                (pc = {}), (oc = null);
              });
          },
          onTapStart: function (a) {
            a.length > 1 && (clearTimeout(oc), (oc = null));
          },
          onTapRelease: function (a, b) {
            if (b && !Y && !W && !_a) {
              var c = b;
              if (oc && (clearTimeout(oc), (oc = null), xb(c, pc)))
                return void Da("doubleTap", c);
              if ("mouse" === b.type) return void qc(a, b, "mouse");
              var d = a.target.tagName.toUpperCase();
              if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap"))
                return void qc(a, b);
              Ma(pc, c),
                (oc = setTimeout(function () {
                  qc(a, b), (oc = null);
                }, 300));
            }
          },
        },
      });
      var rc;
      za("DesktopZoom", {
        publicMethods: {
          initDesktopZoom: function () {
            L ||
              (G
                ? Ca("mouseUsed", function () {
                    f.setupDesktopZoom();
                  })
                : f.setupDesktopZoom(!0));
          },
          setupDesktopZoom: function (b) {
            rc = {};
            var c = "wheel mousewheel DOMMouseScroll";
            Ca("bindEvents", function () {
              e.bind(a, c, f.handleMouseWheel);
            }),
              Ca("unbindEvents", function () {
                rc && e.unbind(a, c, f.handleMouseWheel);
              }),
              (f.mouseZoomedIn = !1);
            var d,
              g = function () {
                f.mouseZoomedIn &&
                  (e.removeClass(a, "pswp--zoomed-in"), (f.mouseZoomedIn = !1)),
                  s < 1
                    ? e.addClass(a, "pswp--zoom-allowed")
                    : e.removeClass(a, "pswp--zoom-allowed"),
                  h();
              },
              h = function () {
                d && (e.removeClass(a, "pswp--dragging"), (d = !1));
              };
            Ca("resize", g),
              Ca("afterChange", g),
              Ca("pointerDown", function () {
                f.mouseZoomedIn && ((d = !0), e.addClass(a, "pswp--dragging"));
              }),
              Ca("pointerUp", h),
              b || g();
          },
          handleMouseWheel: function (a) {
            if (s <= f.currItem.fitRatio)
              return (
                i.modal &&
                  (!i.closeOnScroll || _a || V
                    ? a.preventDefault()
                    : E && Math.abs(a.deltaY) > 2 && ((l = !0), f.close())),
                !0
              );
            if ((a.stopPropagation(), (rc.x = 0), "deltaX" in a))
              1 === a.deltaMode
                ? ((rc.x = 18 * a.deltaX), (rc.y = 18 * a.deltaY))
                : ((rc.x = a.deltaX), (rc.y = a.deltaY));
            else if ("wheelDelta" in a)
              a.wheelDeltaX && (rc.x = -0.16 * a.wheelDeltaX),
                a.wheelDeltaY
                  ? (rc.y = -0.16 * a.wheelDeltaY)
                  : (rc.y = -0.16 * a.wheelDelta);
            else {
              if (!("detail" in a)) return;
              rc.y = a.detail;
            }
            Sa(s, !0);
            var b = pa.x - rc.x,
              c = pa.y - rc.y;
            (i.modal ||
              (b <= da.min.x &&
                b >= da.max.x &&
                c <= da.min.y &&
                c >= da.max.y)) &&
              a.preventDefault(),
              f.panTo(b, c);
          },
          toggleDesktopZoom: function (b) {
            b = b || {
              x: qa.x / 2 + sa.x,
              y: qa.y / 2 + sa.y,
            };
            var c = i.getDoubleTapZoom(!0, f.currItem),
              d = s === c;
            (f.mouseZoomedIn = !d),
              f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333),
              e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in");
          },
        },
      });
      var sc,
        tc,
        uc,
        vc,
        wc,
        xc,
        yc,
        zc,
        Ac,
        Bc,
        Cc,
        Dc,
        Ec = {
          history: !0,
          galleryUID: 1,
        },
        Fc = function () {
          return Cc.hash.substring(1);
        },
        Gc = function () {
          sc && clearTimeout(sc), uc && clearTimeout(uc);
        },
        Hc = function () {
          var a = Fc(),
            b = {};
          if (a.length < 5) return b;
          var c,
            d = a.split("&");
          for (c = 0; c < d.length; c++)
            if (d[c]) {
              var e = d[c].split("=");
              e.length < 2 || (b[e[0]] = e[1]);
            }
          if (i.galleryPIDs) {
            var f = b.pid;
            for (b.pid = 0, c = 0; c < Yb.length; c++)
              if (Yb[c].pid === f) {
                b.pid = c;
                break;
              }
          } else b.pid = parseInt(b.pid, 10) - 1;
          return b.pid < 0 && (b.pid = 0), b;
        },
        Ic = function () {
          if ((uc && clearTimeout(uc), _a || V))
            return void (uc = setTimeout(Ic, 500));
          vc ? clearTimeout(tc) : (vc = !0);
          var a = m + 1,
            b = _b(m);
          b.hasOwnProperty("pid") && (a = b.pid);
          var c = yc + "&gid=" + i.galleryUID + "&pid=" + a;
          zc || (Cc.hash.indexOf(c) === -1 && (Bc = !0));
          var d = Cc.href.split("#")[0] + "#" + c;
          Dc
            ? "#" + c !== window.location.hash &&
              history[zc ? "replaceState" : "pushState"]("", document.title, d)
            : zc
            ? Cc.replace(d)
            : (Cc.hash = c),
            (zc = !0),
            (tc = setTimeout(function () {
              vc = !1;
            }, 60));
        };
      za("History", {
        publicMethods: {
          initHistory: function () {
            if ((e.extend(i, Ec, !0), i.history)) {
              (Cc = window.location),
                (Bc = !1),
                (Ac = !1),
                (zc = !1),
                (yc = Fc()),
                (Dc = "pushState" in history),
                yc.indexOf("gid=") > -1 &&
                  ((yc = yc.split("&gid=")[0]), (yc = yc.split("?gid=")[0])),
                Ca("afterChange", f.updateURL),
                Ca("unbindEvents", function () {
                  e.unbind(window, "hashchange", f.onHashChange);
                });
              var a = function () {
                (xc = !0),
                  Ac ||
                    (Bc
                      ? history.back()
                      : yc
                      ? (Cc.hash = yc)
                      : Dc
                      ? history.pushState(
                          "",
                          document.title,
                          Cc.pathname + Cc.search
                        )
                      : (Cc.hash = "")),
                  Gc();
              };
              Ca("unbindEvents", function () {
                l && a();
              }),
                Ca("destroy", function () {
                  xc || a();
                }),
                Ca("firstUpdate", function () {
                  m = Hc().pid;
                });
              var b = yc.indexOf("pid=");
              b > -1 &&
                ((yc = yc.substring(0, b)),
                "&" === yc.slice(-1) && (yc = yc.slice(0, -1))),
                setTimeout(function () {
                  j && e.bind(window, "hashchange", f.onHashChange);
                }, 40);
            }
          },
          onHashChange: function () {
            return Fc() === yc
              ? ((Ac = !0), void f.close())
              : void (vc || ((wc = !0), f.goTo(Hc().pid), (wc = !1)));
          },
          updateURL: function () {
            Gc(), wc || (zc ? (sc = setTimeout(Ic, 800)) : Ic());
          },
        },
      }),
        e.extend(f, eb);
    };
    return a;
  });
  !(function (a, b) {
    "function" == typeof define && define.amd
      ? define(b)
      : "object" == typeof exports
      ? (module.exports = b())
      : (a.PhotoSwipeUI_Default = b());
  })(this, function () {
    "use strict";
    var a = function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v = this,
        w = !1,
        x = !0,
        y = !0,
        z = {
          barsSize: {
            top: 44,
            bottom: "auto",
          },
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function (a, b) {
            return a.title
              ? ((b.children[0].innerHTML = a.title), !0)
              : ((b.children[0].innerHTML = ""), !1);
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [
            {
              id: "facebook",
              label: "Share on Facebook",
              url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
            },
            {
              id: "twitter",
              label: "Tweet",
              url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
            },
            {
              id: "pinterest",
              label: "Pin it",
              url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
            },
            {
              id: "download",
              label: "Download image",
              url: "{{raw_image_url}}",
              download: !0,
            },
          ],
          getImageURLForShare: function () {
            return a.currItem.src || "";
          },
          getPageURLForShare: function () {
            return window.location.href;
          },
          getTextForShare: function () {
            return a.currItem.title || "";
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200,
        },
        A = function (a) {
          if (r) return !0;
          (a = a || window.event), q.timeToIdle && q.mouseUsed && !k && K();
          for (
            var c,
              d,
              e = a.target || a.srcElement,
              f = e.getAttribute("class") || "",
              g = 0;
            g < S.length;
            g++
          )
            (c = S[g]),
              c.onTap &&
                f.indexOf("pswp__" + c.name) > -1 &&
                (c.onTap(), (d = !0));
          if (d) {
            a.stopPropagation && a.stopPropagation(), (r = !0);
            var h = b.features.isOldAndroid ? 600 : 30;
            s = setTimeout(function () {
              r = !1;
            }, h);
          }
        },
        B = function () {
          return (
            !a.likelyTouchDevice ||
            q.mouseUsed ||
            screen.width > q.fitControlsWidth
          );
        },
        C = function (a, c, d) {
          b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c);
        },
        D = function () {
          var a = 1 === q.getNumItemsFn();
          a !== p && (C(d, "ui--one-slide", a), (p = a));
        },
        E = function () {
          C(i, "share-modal--hidden", y);
        },
        F = function () {
          return (
            (y = !y),
            y
              ? (b.removeClass(i, "pswp__share-modal--fade-in"),
                setTimeout(function () {
                  y && E();
                }, 300))
              : (E(),
                setTimeout(function () {
                  y || b.addClass(i, "pswp__share-modal--fade-in");
                }, 30)),
            y || H(),
            !1
          );
        },
        G = function (b) {
          b = b || window.event;
          var c = b.target || b.srcElement;
          return (
            a.shout("shareLinkClick", b, c),
            !!c.href &&
              (!!c.hasAttribute("download") ||
                (window.open(
                  c.href,
                  "pswp_share",
                  "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
                    (window.screen ? Math.round(screen.width / 2 - 275) : 100)
                ),
                y || F(),
                !1))
          );
        },
        H = function () {
          for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++)
            (a = q.shareButtons[g]),
              (c = q.getImageURLForShare(a)),
              (d = q.getPageURLForShare(a)),
              (e = q.getTextForShare(a)),
              (b = a.url
                .replace("{{url}}", encodeURIComponent(d))
                .replace("{{image_url}}", encodeURIComponent(c))
                .replace("{{raw_image_url}}", c)
                .replace("{{text}}", encodeURIComponent(e))),
              (f +=
                '<a href="' +
                b +
                '" target="_blank" class="pswp__share--' +
                a.id +
                '"' +
                (a.download ? "download" : "") +
                ">" +
                a.label +
                "</a>"),
              q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
          (i.children[0].innerHTML = f), (i.children[0].onclick = G);
        },
        I = function (a) {
          for (var c = 0; c < q.closeElClasses.length; c++)
            if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0;
        },
        J = 0,
        K = function () {
          clearTimeout(u), (J = 0), k && v.setIdle(!1);
        },
        L = function (a) {
          a = a ? a : window.event;
          var b = a.relatedTarget || a.toElement;
          (b && "HTML" !== b.nodeName) ||
            (clearTimeout(u),
            (u = setTimeout(function () {
              v.setIdle(!0);
            }, q.timeToIdleOutside)));
        },
        M = function () {
          q.fullscreenEl &&
            !b.features.isOldAndroid &&
            (c || (c = v.getFullscreenAPI()),
            c
              ? (b.bind(document, c.eventK, v.updateFullscreen),
                v.updateFullscreen(),
                b.addClass(a.template, "pswp--supports-fs"))
              : b.removeClass(a.template, "pswp--supports-fs"));
        },
        N = function () {
          q.preloaderEl &&
            (O(!0),
            l("beforeChange", function () {
              clearTimeout(o),
                (o = setTimeout(function () {
                  a.currItem && a.currItem.loading
                    ? (!a.allowProgressiveImg() ||
                        (a.currItem.img && !a.currItem.img.naturalWidth)) &&
                      O(!1)
                    : O(!0);
                }, q.loadingIndicatorDelay));
            }),
            l("imageLoadComplete", function (b, c) {
              a.currItem === c && O(!0);
            }));
        },
        O = function (a) {
          n !== a && (C(m, "preloader--active", !a), (n = a));
        },
        P = function (a) {
          var c = a.vGap;
          if (B()) {
            var g = q.barsSize;
            if (q.captionEl && "auto" === g.bottom)
              if (
                (f ||
                  ((f = b.createEl("pswp__caption pswp__caption--fake")),
                  f.appendChild(b.createEl("pswp__caption__center")),
                  d.insertBefore(f, e),
                  b.addClass(d, "pswp__ui--fit")),
                q.addCaptionHTMLFn(a, f, !0))
              ) {
                var h = f.clientHeight;
                c.bottom = parseInt(h, 10) || 44;
              } else c.bottom = g.top;
            else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
            c.top = g.top;
          } else c.top = c.bottom = 0;
        },
        Q = function () {
          q.timeToIdle &&
            l("mouseUsed", function () {
              b.bind(document, "mousemove", K),
                b.bind(document, "mouseout", L),
                (t = setInterval(function () {
                  J++, 2 === J && v.setIdle(!0);
                }, q.timeToIdle / 2));
            });
        },
        R = function () {
          l("onVerticalDrag", function (a) {
            x && a < 0.95
              ? v.hideControls()
              : !x && a >= 0.95 && v.showControls();
          });
          var a;
          l("onPinchClose", function (b) {
            x && b < 0.9
              ? (v.hideControls(), (a = !0))
              : a && !x && b > 0.9 && v.showControls();
          }),
            l("zoomGestureEnded", function () {
              (a = !1), a && !x && v.showControls();
            });
        },
        S = [
          {
            name: "caption",
            option: "captionEl",
            onInit: function (a) {
              e = a;
            },
          },
          {
            name: "share-modal",
            option: "shareEl",
            onInit: function (a) {
              i = a;
            },
            onTap: function () {
              F();
            },
          },
          {
            name: "button--share",
            option: "shareEl",
            onInit: function (a) {
              h = a;
            },
            onTap: function () {
              F();
            },
          },
          {
            name: "button--zoom",
            option: "zoomEl",
            onTap: a.toggleDesktopZoom,
          },
          {
            name: "counter",
            option: "counterEl",
            onInit: function (a) {
              g = a;
            },
          },
          {
            name: "button--close",
            option: "closeEl",
            onTap: a.close,
          },
          {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: a.prev,
          },
          {
            name: "button--arrow--right",
            option: "arrowEl",
            onTap: a.next,
          },
          {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
              c.isFullscreen() ? c.exit() : c.enter();
            },
          },
          {
            name: "preloader",
            option: "preloaderEl",
            onInit: function (a) {
              m = a;
            },
          },
        ],
        T = function () {
          var a,
            c,
            e,
            f = function (d) {
              if (d)
                for (var f = d.length, g = 0; g < f; g++) {
                  (a = d[g]), (c = a.className);
                  for (var h = 0; h < S.length; h++)
                    (e = S[h]),
                      c.indexOf("pswp__" + e.name) > -1 &&
                        (q[e.option]
                          ? (b.removeClass(a, "pswp__element--disabled"),
                            e.onInit && e.onInit(a))
                          : b.addClass(a, "pswp__element--disabled"));
                }
            };
          f(d.children);
          var g = b.getChildByClass(d, "pswp__top-bar");
          g && f(g.children);
        };
      (v.init = function () {
        b.extend(a.options, z, !0),
          (q = a.options),
          (d = b.getChildByClass(a.scrollWrap, "pswp__ui")),
          (l = a.listen),
          R(),
          l("beforeChange", v.update),
          l("doubleTap", function (b) {
            var c = a.currItem.initialZoomLevel;
            a.getZoomLevel() !== c
              ? a.zoomTo(c, b, 333)
              : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333);
          }),
          l("preventDragEvent", function (a, b, c) {
            var d = a.target || a.srcElement;
            d &&
              d.getAttribute("class") &&
              a.type.indexOf("mouse") > -1 &&
              (d.getAttribute("class").indexOf("__caption") > 0 ||
                /(SMALL|STRONG|EM)/i.test(d.tagName)) &&
              (c.prevent = !1);
          }),
          l("bindEvents", function () {
            b.bind(d, "pswpTap click", A),
              b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap),
              a.likelyTouchDevice ||
                b.bind(a.scrollWrap, "mouseover", v.onMouseOver);
          }),
          l("unbindEvents", function () {
            y || F(),
              t && clearInterval(t),
              b.unbind(document, "mouseout", L),
              b.unbind(document, "mousemove", K),
              b.unbind(d, "pswpTap click", A),
              b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap),
              b.unbind(a.scrollWrap, "mouseover", v.onMouseOver),
              c &&
                (b.unbind(document, c.eventK, v.updateFullscreen),
                c.isFullscreen() && ((q.hideAnimationDuration = 0), c.exit()),
                (c = null));
          }),
          l("destroy", function () {
            q.captionEl &&
              (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")),
              i && (i.children[0].onclick = null),
              b.removeClass(d, "pswp__ui--over-close"),
              b.addClass(d, "pswp__ui--hidden"),
              v.setIdle(!1);
          }),
          q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"),
          l("initialZoomIn", function () {
            q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden");
          }),
          l("initialZoomOut", function () {
            b.addClass(d, "pswp__ui--hidden");
          }),
          l("parseVerticalMargin", P),
          T(),
          q.shareEl && h && i && (y = !0),
          D(),
          Q(),
          M(),
          N();
      }),
        (v.setIdle = function (a) {
          (k = a), C(d, "ui--idle", a);
        }),
        (v.update = function () {
          x && a.currItem
            ? (v.updateIndexIndicator(),
              q.captionEl &&
                (q.addCaptionHTMLFn(a.currItem, e),
                C(e, "caption--empty", !a.currItem.title)),
              (w = !0))
            : (w = !1),
            y || F(),
            D();
        }),
        (v.updateFullscreen = function (d) {
          d &&
            setTimeout(function () {
              a.setScrollOffset(0, b.getScrollY());
            }, 50),
            b[(c.isFullscreen() ? "add" : "remove") + "Class"](
              a.template,
              "pswp--fs"
            );
        }),
        (v.updateIndexIndicator = function () {
          q.counterEl &&
            (g.innerHTML =
              a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn());
        }),
        (v.onGlobalTap = function (c) {
          c = c || window.event;
          var d = c.target || c.srcElement;
          if (!r)
            if (c.detail && "mouse" === c.detail.pointerType) {
              if (I(d)) return void a.close();
              b.hasClass(d, "pswp__img") &&
                (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio
                  ? q.clickToCloseNonZoomable && a.close()
                  : a.toggleDesktopZoom(c.detail.releasePoint));
            } else if (
              (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()),
              q.tapToClose && (b.hasClass(d, "pswp__img") || I(d)))
            )
              return void a.close();
        }),
        (v.onMouseOver = function (a) {
          a = a || window.event;
          var b = a.target || a.srcElement;
          C(d, "ui--over-close", I(b));
        }),
        (v.hideControls = function () {
          b.addClass(d, "pswp__ui--hidden"), (x = !1);
        }),
        (v.showControls = function () {
          (x = !0), w || v.update(), b.removeClass(d, "pswp__ui--hidden");
        }),
        (v.supportsFullscreen = function () {
          var a = document;
          return !!(
            a.exitFullscreen ||
            a.mozCancelFullScreen ||
            a.webkitExitFullscreen ||
            a.msExitFullscreen
          );
        }),
        (v.getFullscreenAPI = function () {
          var b,
            c = document.documentElement,
            d = "fullscreenchange";
          return (
            c.requestFullscreen
              ? (b = {
                  enterK: "requestFullscreen",
                  exitK: "exitFullscreen",
                  elementK: "fullscreenElement",
                  eventK: d,
                })
              : c.mozRequestFullScreen
              ? (b = {
                  enterK: "mozRequestFullScreen",
                  exitK: "mozCancelFullScreen",
                  elementK: "mozFullScreenElement",
                  eventK: "moz" + d,
                })
              : c.webkitRequestFullscreen
              ? (b = {
                  enterK: "webkitRequestFullscreen",
                  exitK: "webkitExitFullscreen",
                  elementK: "webkitFullscreenElement",
                  eventK: "webkit" + d,
                })
              : c.msRequestFullscreen &&
                (b = {
                  enterK: "msRequestFullscreen",
                  exitK: "msExitFullscreen",
                  elementK: "msFullscreenElement",
                  eventK: "MSFullscreenChange",
                }),
            b &&
              ((b.enter = function () {
                return (
                  (j = q.closeOnScroll),
                  (q.closeOnScroll = !1),
                  "webkitRequestFullscreen" !== this.enterK
                    ? a.template[this.enterK]()
                    : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                );
              }),
              (b.exit = function () {
                return (q.closeOnScroll = j), document[this.exitK]();
              }),
              (b.isFullscreen = function () {
                return document[this.elementK];
              })),
            b
          );
        });
    };
    return a;
  });
  !(function () {
    var q = null;
    window.PR_SHOULD_USE_CONTINUATION = !0;
    (function () {
      function S(a) {
        function d(e) {
          var b = e.charCodeAt(0);
          if (b !== 92) return b;
          var a = e.charAt(1);
          return (b = r[a])
            ? b
            : "0" <= a && a <= "7"
            ? parseInt(e.substring(1), 8)
            : a === "u" || a === "x"
            ? parseInt(e.substring(2), 16)
            : e.charCodeAt(1);
        }
  
        function g(e) {
          if (e < 32) return (e < 16 ? "\\x0" : "\\x") + e.toString(16);
          e = String.fromCharCode(e);
          return e === "\\" || e === "-" || e === "]" || e === "^" ? "\\" + e : e;
        }
  
        function b(e) {
          var b = e
              .substring(1, e.length - 1)
              .match(
                /\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g
              ),
            e = [],
            a = b[0] === "^",
            c = ["["];
          a && c.push("^");
          for (var a = a ? 1 : 0, f = b.length; a < f; ++a) {
            var h = b[a];
            if (/\\[bdsw]/i.test(h)) c.push(h);
            else {
              var h = d(h),
                l;
              a + 2 < f && "-" === b[a + 1]
                ? ((l = d(b[a + 2])), (a += 2))
                : (l = h);
              e.push([h, l]);
              l < 65 ||
                h > 122 ||
                (l < 65 ||
                  h > 90 ||
                  e.push([Math.max(65, h) | 32, Math.min(l, 90) | 32]),
                l < 97 ||
                  h > 122 ||
                  e.push([Math.max(97, h) & -33, Math.min(l, 122) & -33]));
            }
          }
          e.sort(function (e, a) {
            return e[0] - a[0] || a[1] - e[1];
          });
          b = [];
          f = [];
          for (a = 0; a < e.length; ++a)
            (h = e[a]),
              h[0] <= f[1] + 1 ? (f[1] = Math.max(f[1], h[1])) : b.push((f = h));
          for (a = 0; a < b.length; ++a)
            (h = b[a]),
              c.push(g(h[0])),
              h[1] > h[0] && (h[1] + 1 > h[0] && c.push("-"), c.push(g(h[1])));
          c.push("]");
          return c.join("");
        }
  
        function s(e) {
          for (
            var a = e.source.match(
                /\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g
              ),
              c = a.length,
              d = [],
              f = 0,
              h = 0;
            f < c;
            ++f
          ) {
            var l = a[f];
            l === "("
              ? ++h
              : "\\" === l.charAt(0) &&
                (l = +l.substring(1)) &&
                (l <= h ? (d[l] = -1) : (a[f] = g(l)));
          }
          for (f = 1; f < d.length; ++f) -1 === d[f] && (d[f] = ++x);
          for (h = f = 0; f < c; ++f)
            (l = a[f]),
              l === "("
                ? (++h, d[h] || (a[f] = "(?:"))
                : "\\" === l.charAt(0) &&
                  (l = +l.substring(1)) &&
                  l <= h &&
                  (a[f] = "\\" + d[l]);
          for (f = 0; f < c; ++f) "^" === a[f] && "^" !== a[f + 1] && (a[f] = "");
          if (e.ignoreCase && m)
            for (f = 0; f < c; ++f)
              (l = a[f]),
                (e = l.charAt(0)),
                l.length >= 2 && e === "["
                  ? (a[f] = b(l))
                  : e !== "\\" &&
                    (a[f] = l.replace(/[A-Za-z]/g, function (a) {
                      a = a.charCodeAt(0);
                      return "[" + String.fromCharCode(a & -33, a | 32) + "]";
                    }));
          return a.join("");
        }
        for (var x = 0, m = !1, j = !1, k = 0, c = a.length; k < c; ++k) {
          var i = a[k];
          if (i.ignoreCase) j = !0;
          else if (
            /[a-z]/i.test(
              i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, "")
            )
          ) {
            m = !0;
            j = !1;
            break;
          }
        }
        for (
          var r = {
              b: 8,
              t: 9,
              n: 10,
              v: 11,
              f: 12,
              r: 13,
            },
            n = [],
            k = 0,
            c = a.length;
          k < c;
          ++k
        ) {
          i = a[k];
          if (i.global || i.multiline) throw Error("" + i);
          n.push("(?:" + s(i) + ")");
        }
        return RegExp(n.join("|"), j ? "gi" : "g");
      }
  
      function T(a, d) {
        function g(a) {
          var c = a.nodeType;
          if (c == 1) {
            if (!b.test(a.className)) {
              for (c = a.firstChild; c; c = c.nextSibling) g(c);
              c = a.nodeName.toLowerCase();
              if ("br" === c || "li" === c)
                (s[j] = "\n"), (m[j << 1] = x++), (m[(j++ << 1) | 1] = a);
            }
          } else if (c == 3 || c == 4)
            (c = a.nodeValue),
              c.length &&
                ((c = d
                  ? c.replace(/\r\n?/g, "\n")
                  : c.replace(/[\t\n\r ]+/g, " ")),
                (s[j] = c),
                (m[j << 1] = x),
                (x += c.length),
                (m[(j++ << 1) | 1] = a));
        }
        var b = /(?:^|\s)nocode(?:\s|$)/,
          s = [],
          x = 0,
          m = [],
          j = 0;
        g(a);
        return {
          a: s.join("").replace(/\n$/, ""),
          d: m,
        };
      }
  
      function H(a, d, g, b) {
        d &&
          ((a = {
            a: d,
            e: a,
          }),
          g(a),
          b.push.apply(b, a.g));
      }
  
      function U(a) {
        for (var d = void 0, g = a.firstChild; g; g = g.nextSibling)
          var b = g.nodeType,
            d =
              b === 1 ? (d ? a : g) : b === 3 ? (V.test(g.nodeValue) ? a : d) : d;
        return d === a ? void 0 : d;
      }
  
      function C(a, d) {
        function g(a) {
          for (
            var j = a.e,
              k = [j, "pln"],
              c = 0,
              i = a.a.match(s) || [],
              r = {},
              n = 0,
              e = i.length;
            n < e;
            ++n
          ) {
            var z = i[n],
              w = r[z],
              t = void 0,
              f;
            if (typeof w === "string") f = !1;
            else {
              var h = b[z.charAt(0)];
              if (h) (t = z.match(h[1])), (w = h[0]);
              else {
                for (f = 0; f < x; ++f)
                  if (((h = d[f]), (t = z.match(h[1])))) {
                    w = h[0];
                    break;
                  }
                t || (w = "pln");
              }
              if (
                (f = w.length >= 5 && "lang-" === w.substring(0, 5)) &&
                !(t && typeof t[1] === "string")
              )
                (f = !1), (w = "src");
              f || (r[z] = w);
            }
            h = c;
            c += z.length;
            if (f) {
              f = t[1];
              var l = z.indexOf(f),
                B = l + f.length;
              t[2] && ((B = z.length - t[2].length), (l = B - f.length));
              w = w.substring(5);
              H(j + h, z.substring(0, l), g, k);
              H(j + h + l, f, I(w, f), k);
              H(j + h + B, z.substring(B), g, k);
            } else k.push(j + h, w);
          }
          a.g = k;
        }
        var b = {},
          s;
        (function () {
          for (
            var g = a.concat(d), j = [], k = {}, c = 0, i = g.length;
            c < i;
            ++c
          ) {
            var r = g[c],
              n = r[3];
            if (n) for (var e = n.length; --e >= 0; ) b[n.charAt(e)] = r;
            r = r[1];
            n = "" + r;
            k.hasOwnProperty(n) || (j.push(r), (k[n] = q));
          }
          j.push(/[\S\s]/);
          s = S(j);
        })();
        var x = d.length;
        return g;
      }
  
      function v(a) {
        var d = [],
          g = [];
        a.tripleQuotedStrings
          ? d.push([
              "str",
              /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,
              q,
              "'\"",
            ])
          : a.multiLineStrings
          ? d.push([
              "str",
              /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
              q,
              "'\"`",
            ])
          : d.push([
              "str",
              /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,
              q,
              "\"'",
            ]);
        a.verbatimStrings && g.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
        var b = a.hashComments;
        b &&
          (a.cStyleComments
            ? (b > 1
                ? d.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"])
                : d.push([
                    "com",
                    /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,
                    q,
                    "#",
                  ]),
              g.push([
                "str",
                /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,
                q,
              ]))
            : d.push(["com", /^#[^\n\r]*/, q, "#"]));
        a.cStyleComments &&
          (g.push(["com", /^\/\/[^\n\r]*/, q]),
          g.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q]));
        if ((b = a.regexLiterals)) {
          var s = (b = b > 1 ? "" : "\n\r") ? "." : "[\\S\\s]";
          g.push([
            "lang-regex",
            RegExp(
              "^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" +
                ("/(?=[^/*" +
                  b +
                  "])(?:[^/\\x5B\\x5C" +
                  b +
                  "]|\\x5C" +
                  s +
                  "|\\x5B(?:[^\\x5C\\x5D" +
                  b +
                  "]|\\x5C" +
                  s +
                  ")*(?:\\x5D|$))+/") +
                ")"
            ),
          ]);
        }
        (b = a.types) && g.push(["typ", b]);
        b = ("" + a.keywords).replace(/^ | $/g, "");
        b.length &&
          g.push(["kwd", RegExp("^(?:" + b.replace(/[\s,]+/g, "|") + ")\\b"), q]);
        d.push(["pln", /^\s+/, q, " \r\n\tÂ "]);
        b = "^.[^\\s\\w.$@'\"`/\\\\]*";
        a.regexLiterals && (b += "(?!s*/)");
        g.push(
          ["lit", /^@[$_a-z][\w$@]*/i, q],
          ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q],
          ["pln", /^[$_a-z][\w$@]*/i, q],
          [
            "lit",
            /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,
            q,
            "0123456789",
          ],
          ["pln", /^\\[\S\s]?/, q],
          ["pun", RegExp(b), q]
        );
        return C(d, g);
      }
  
      function J(a, d, g) {
        function b(a) {
          var c = a.nodeType;
          if (c == 1 && !x.test(a.className))
            if ("br" === a.nodeName)
              s(a), a.parentNode && a.parentNode.removeChild(a);
            else for (a = a.firstChild; a; a = a.nextSibling) b(a);
          else if ((c == 3 || c == 4) && g) {
            var d = a.nodeValue,
              i = d.match(m);
            if (i)
              (c = d.substring(0, i.index)),
                (a.nodeValue = c),
                (d = d.substring(i.index + i[0].length)) &&
                  a.parentNode.insertBefore(j.createTextNode(d), a.nextSibling),
                s(a),
                c || a.parentNode.removeChild(a);
          }
        }
  
        function s(a) {
          function b(a, c) {
            var d = c ? a.cloneNode(!1) : a,
              e = a.parentNode;
            if (e) {
              var e = b(e, 1),
                g = a.nextSibling;
              e.appendChild(d);
              for (var i = g; i; i = g) (g = i.nextSibling), e.appendChild(i);
            }
            return d;
          }
          for (; !a.nextSibling; ) if (((a = a.parentNode), !a)) return;
          for (
            var a = b(a.nextSibling, 0), d;
            (d = a.parentNode) && d.nodeType === 1;
  
          )
            a = d;
          c.push(a);
        }
        for (
          var x = /(?:^|\s)nocode(?:\s|$)/,
            m = /\r\n?|\n/,
            j = a.ownerDocument,
            k = j.createElement("li");
          a.firstChild;
  
        )
          k.appendChild(a.firstChild);
        for (var c = [k], i = 0; i < c.length; ++i) b(c[i]);
        d === (d | 0) && c[0].setAttribute("value", d);
        var r = j.createElement("ol");
        r.className = "linenums";
        for (
          var d = Math.max(0, (d - 1) | 0) || 0, i = 0, n = c.length;
          i < n;
          ++i
        )
          (k = c[i]),
            (k.className = "L" + ((i + d) % 10)),
            k.firstChild || k.appendChild(j.createTextNode("Â ")),
            r.appendChild(k);
        a.appendChild(r);
      }
  
      function p(a, d) {
        for (var g = d.length; --g >= 0; ) {
          var b = d[g];
          F.hasOwnProperty(b)
            ? D.console && console.warn("cannot override language handler %s", b)
            : (F[b] = a);
        }
      }
  
      function I(a, d) {
        if (!a || !F.hasOwnProperty(a))
          a = /^\s*</.test(d) ? "default-markup" : "default-code";
        return F[a];
      }
  
      function K(a) {
        var d = a.h;
        try {
          var g = T(a.c, a.i),
            b = g.a;
          a.a = b;
          a.d = g.d;
          a.e = 0;
          I(d, b)(a);
          var s = /\bMSIE\s(\d+)/.exec(navigator.userAgent),
            s = s && +s[1] <= 8,
            d = /\n/g,
            x = a.a,
            m = x.length,
            g = 0,
            j = a.d,
            k = j.length,
            b = 0,
            c = a.g,
            i = c.length,
            r = 0;
          c[i] = m;
          var n, e;
          for (e = n = 0; e < i; )
            c[e] !== c[e + 2] ? ((c[n++] = c[e++]), (c[n++] = c[e++])) : (e += 2);
          i = n;
          for (e = n = 0; e < i; ) {
            for (
              var p = c[e], w = c[e + 1], t = e + 2;
              t + 2 <= i && c[t + 1] === w;
  
            )
              t += 2;
            c[n++] = p;
            c[n++] = w;
            e = t;
          }
          c.length = n;
          var f = a.c,
            h;
          if (f) (h = f.style.display), (f.style.display = "none");
          try {
            for (; b < k; ) {
              var l = j[b + 2] || m,
                B = c[r + 2] || m,
                t = Math.min(l, B),
                A = j[b + 1],
                G;
              if (A.nodeType !== 1 && (G = x.substring(g, t))) {
                s && (G = G.replace(d, "\r"));
                A.nodeValue = G;
                var L = A.ownerDocument,
                  o = L.createElement("span");
                o.className = c[r + 1];
                var v = A.parentNode;
                v.replaceChild(o, A);
                o.appendChild(A);
                g < l &&
                  ((j[b + 1] = A = L.createTextNode(x.substring(t, l))),
                  v.insertBefore(A, o.nextSibling));
              }
              g = t;
              g >= l && (b += 2);
              g >= B && (r += 2);
            }
          } finally {
            if (f) f.style.display = h;
          }
        } catch (u) {
          D.console && console.log((u && u.stack) || u);
        }
      }
      var D = window,
        y = ["break,continue,do,else,for,if,return,while"],
        E = [
          [
            y,
            "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile",
          ],
          "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof",
        ],
        M = [
          E,
          "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where",
        ],
        N = [
          E,
          "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient",
        ],
        O = [
          N,
          "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where",
        ],
        E = [
          E,
          "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN",
        ],
        P = [
          y,
          "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None",
        ],
        Q = [
          y,
          "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END",
        ],
        W = [
          y,
          "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use",
        ],
        y = [y, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
        R =
          /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
        V = /\S/,
        X = v({
          keywords: [
            M,
            O,
            E,
            "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
            P,
            Q,
            y,
          ],
          hashComments: !0,
          cStyleComments: !0,
          multiLineStrings: !0,
          regexLiterals: !0,
        }),
        F = {};
      p(X, ["default-code"]);
      p(
        C(
          [],
          [
            ["pln", /^[^<?]+/],
            ["dec", /^<!\w[^>]*(?:>|$)/],
            ["com", /^<\!--[\S\s]*?(?:--\>|$)/],
            ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/],
            ["lang-", /^<%([\S\s]+?)(?:%>|$)/],
            ["pun", /^(?:<[%?]|[%?]>)/],
            ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],
            ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],
            ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],
            ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i],
          ]
        ),
        ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]
      );
      p(
        C(
          [
            ["pln", /^\s+/, q, " \t\r\n"],
            ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"],
          ],
          [
            ["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],
            ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
            ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],
            ["pun", /^[/<->]+/],
            ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i],
            ["lang-js", /^on\w+\s*=\s*'([^']+)'/i],
            ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i],
            ["lang-css", /^style\s*=\s*"([^"]+)"/i],
            ["lang-css", /^style\s*=\s*'([^']+)'/i],
            ["lang-css", /^style\s*=\s*([^\s"'>]+)/i],
          ]
        ),
        ["in.tag"]
      );
      p(C([], [["atv", /^[\S\s]+/]]), ["uq.val"]);
      p(
        v({
          keywords: M,
          hashComments: !0,
          cStyleComments: !0,
          types: R,
        }),
        ["c", "cc", "cpp", "cxx", "cyc", "m"]
      );
      p(
        v({
          keywords: "null,true,false",
        }),
        ["json"]
      );
      p(
        v({
          keywords: O,
          hashComments: !0,
          cStyleComments: !0,
          verbatimStrings: !0,
          types: R,
        }),
        ["cs"]
      );
      p(
        v({
          keywords: N,
          cStyleComments: !0,
        }),
        ["java"]
      );
      p(
        v({
          keywords: y,
          hashComments: !0,
          multiLineStrings: !0,
        }),
        ["bash", "bsh", "csh", "sh"]
      );
      p(
        v({
          keywords: P,
          hashComments: !0,
          multiLineStrings: !0,
          tripleQuotedStrings: !0,
        }),
        ["cv", "py", "python"]
      );
      p(
        v({
          keywords:
            "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
          hashComments: !0,
          multiLineStrings: !0,
          regexLiterals: 2,
        }),
        ["perl", "pl", "pm"]
      );
      p(
        v({
          keywords: Q,
          hashComments: !0,
          multiLineStrings: !0,
          regexLiterals: !0,
        }),
        ["rb", "ruby"]
      );
      p(
        v({
          keywords: E,
          cStyleComments: !0,
          regexLiterals: !0,
        }),
        ["javascript", "js"]
      );
      p(
        v({
          keywords:
            "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
          hashComments: 3,
          cStyleComments: !0,
          multilineStrings: !0,
          tripleQuotedStrings: !0,
          regexLiterals: !0,
        }),
        ["coffee"]
      );
      p(
        v({
          keywords: W,
          cStyleComments: !0,
          multilineStrings: !0,
        }),
        ["rc", "rs", "rust"]
      );
      p(C([], [["str", /^[\S\s]+/]]), ["regex"]);
      var Y = (D.PR = {
        createSimpleLexer: C,
        registerLangHandler: p,
        sourceDecorator: v,
        PR_ATTRIB_NAME: "atn",
        PR_ATTRIB_VALUE: "atv",
        PR_COMMENT: "com",
        PR_DECLARATION: "dec",
        PR_KEYWORD: "kwd",
        PR_LITERAL: "lit",
        PR_NOCODE: "nocode",
        PR_PLAIN: "pln",
        PR_PUNCTUATION: "pun",
        PR_SOURCE: "src",
        PR_STRING: "str",
        PR_TAG: "tag",
        PR_TYPE: "typ",
        prettyPrintOne: (D.prettyPrintOne = function (a, d, g) {
          var b = document.createElement("div");
          b.innerHTML = "<pre>" + a + "</pre>";
          b = b.firstChild;
          g && J(b, g, !0);
          K({
            h: d,
            j: g,
            c: b,
            i: 1,
          });
          return b.innerHTML;
        }),
        prettyPrint: (D.prettyPrint = function (a, d) {
          function g() {
            for (
              var b = D.PR_SHOULD_USE_CONTINUATION ? c.now() + 250 : Infinity;
              i < p.length && c.now() < b;
              i++
            ) {
              for (var d = p[i], j = h, k = d; (k = k.previousSibling); ) {
                var m = k.nodeType,
                  o = (m === 7 || m === 8) && k.nodeValue;
                if (
                  o
                    ? !/^\??prettify\b/.test(o)
                    : m !== 3 || /\S/.test(k.nodeValue)
                )
                  break;
                if (o) {
                  j = {};
                  o.replace(/\b(\w+)=([\w%+\-.:]+)/g, function (a, b, c) {
                    j[b] = c;
                  });
                  break;
                }
              }
              k = d.className;
              if ((j !== h || e.test(k)) && !v.test(k)) {
                m = !1;
                for (o = d.parentNode; o; o = o.parentNode)
                  if (f.test(o.tagName) && o.className && e.test(o.className)) {
                    m = !0;
                    break;
                  }
                if (!m) {
                  d.className += " prettyprinted";
                  m = j.lang;
                  if (!m) {
                    var m = k.match(n),
                      y;
                    if (!m && (y = U(d)) && t.test(y.tagName))
                      m = y.className.match(n);
                    m && (m = m[1]);
                  }
                  if (w.test(d.tagName)) o = 1;
                  else
                    var o = d.currentStyle,
                      u = s.defaultView,
                      o =
                        (o = o
                          ? o.whiteSpace
                          : u && u.getComputedStyle
                          ? u
                              .getComputedStyle(d, q)
                              .getPropertyValue("white-space")
                          : 0) && "pre" === o.substring(0, 3);
                  u = j.linenums;
                  if (!(u = u === "true" || +u))
                    u = (u = k.match(/\blinenums\b(?::(\d+))?/))
                      ? u[1] && u[1].length
                        ? +u[1]
                        : !0
                      : !1;
                  u && J(d, u, o);
                  r = {
                    h: m,
                    c: d,
                    j: u,
                    i: o,
                  };
                  K(r);
                }
              }
            }
            i < p.length ? setTimeout(g, 250) : "function" === typeof a && a();
          }
          for (
            var b = d || document.body,
              s = b.ownerDocument || document,
              b = [
                b.getElementsByTagName("pre"),
                b.getElementsByTagName("code"),
                b.getElementsByTagName("xmp"),
              ],
              p = [],
              m = 0;
            m < b.length;
            ++m
          )
            for (var j = 0, k = b[m].length; j < k; ++j) p.push(b[m][j]);
          var b = q,
            c = Date;
          c.now ||
            (c = {
              now: function () {
                return +new Date();
              },
            });
          var i = 0,
            r,
            n = /\blang(?:uage)?-([\w.]+)(?!\S)/,
            e = /\bprettyprint\b/,
            v = /\bprettyprinted\b/,
            w = /pre|xmp/i,
            t = /^code$/i,
            f = /^(?:pre|code|xmp)$/i,
            h = {};
          g();
        }),
      });
      typeof define === "function" &&
        define.amd &&
        define("google-code-prettify", [], function () {
          return Y;
        });
    })();
  })();
  (function ($) {
    "use strict";
    var cfg = {
        scrollDuration: 800,
        mailChimpURL: "",
      },
      $WIN = $(window);
    var doc = document.documentElement;
    doc.setAttribute("data-useragent", navigator.userAgent);
    var ssPreloader = function () {
      $("html").addClass("ss-preload");
      $WIN.on("load", function () {
        $("#loader").fadeOut("slow", function () {
          $("#preloader").delay(300).fadeOut("slow");
        });
        $("html").removeClass("ss-preload");
        $("html").addClass("ss-loaded");
      });
    };
    var ssPrettyPrint = function () {
      $("pre").addClass("prettyprint");
      $(document).ready(function () {
        prettyPrint();
      });
    };
    var ssMoveHeader = function () {
      var hero = $(".page-hero"),
        hdr = $("header"),
        triggerHeight = hero.outerHeight() - 170;
      $WIN.on("scroll", function () {
        var loc = $WIN.scrollTop();
        if (loc > triggerHeight) {
          hdr.addClass("sticky");
        } else {
          hdr.removeClass("sticky");
        }
        if (loc > triggerHeight + 20) {
          hdr.addClass("offset");
        } else {
          hdr.removeClass("offset");
        }
        if (loc > triggerHeight + 150) {
          hdr.addClass("scrolling");
        } else {
          hdr.removeClass("scrolling");
        }
      });
    };
    var ssMobileMenu = function () {
      var toggleButton = $(".header-menu-toggle"),
        nav = $(".header-nav-wrap");
      toggleButton.on("click", function (event) {
        event.preventDefault();
        toggleButton.toggleClass("is-clicked");
        nav.slideToggle();
      });
      if (toggleButton.is(":visible")) nav.addClass("mobile");
      $WIN.on("resize", function () {
        if (toggleButton.is(":visible")) nav.addClass("mobile");
        else nav.removeClass("mobile");
      });
      nav.find("a").on("click", function () {
        if (nav.hasClass("mobile")) {
          toggleButton.toggleClass("is-clicked");
          nav.slideToggle();
        }
      });
    };
    var ssMasonryFolio = function () {
      var containerBricks = $(".masonry");
      containerBricks.imagesLoaded(function () {
        containerBricks.masonry({
          itemSelector: ".masonry__brick",
          resize: true,
        });
      });
    };
    var ssPhotoswipe = function () {
      var items = [],
        $pswp = $(".pswp")[0],
        $folioItems = $(".item-folio");
      $folioItems.each(function (i) {
        var $folio = $(this),
          $thumbLink = $folio.find(".thumb-link"),
          $title = $folio.find(".item-folio__title"),
          $caption = $folio.find(".item-folio__caption"),
          $titleText = "<h4>" + $.trim($title.html()) + "</h4>",
          $captionText = $.trim($caption.html()),
          $href = $thumbLink.attr("href"),
          $size = $thumbLink.data("size").split("x"),
          $width = $size[0],
          $height = $size[1];
        var item = {
          src: $href,
          w: $width,
          h: $height,
        };
        if ($caption.length > 0) {
          item.title = $.trim($titleText + $captionText);
        }
        items.push(item);
      });
      $folioItems.each(function (i) {
        $(this).on("click", function (e) {
          e.preventDefault();
          var options = {
            index: i,
            showHideOpacity: true,
          };
          var lightBox = new PhotoSwipe(
            $pswp,
            PhotoSwipeUI_Default,
            items,
            options
          );
          lightBox.init();
        });
      });
    };
    var ssSlickSlider = function () {
      $(".testimonials__slider").slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:
          "<div class='slick-prev'><i class='im im-arrow-left' aria-hidden='true'></i></div>",
        nextArrow:
          "<div class='slick-next'><i class='im im-arrow-right' aria-hidden='true'></i></div>",
        pauseOnFocus: false,
        autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    };
    var ssWaypoints = function () {
      var sections = $(".target-section"),
        navigation_links = $(".header-nav li a");
      sections.waypoint({
        handler: function (direction) {
          var active_section;
          active_section = $("section#" + this.element.id);
          if (direction === "up")
            active_section = active_section.prevAll(".target-section").first();
          var active_link = $(
            '.header-nav li a[href="#' + active_section.attr("id") + '"]'
          );
          navigation_links.parent().removeClass("current");
          active_link.parent().addClass("current");
        },
        offset: "25%",
      });
    };
    var ssStatCount = function () {
      var statSection = $(".s-stats"),
        stats = $(".stats__count");
      statSection.waypoint({
        handler: function (direction) {
          if (direction === "down") {
            stats.each(function () {
              var $this = $(this);
              $({
                Counter: 0,
              }).animate(
                {
                  Counter: $this.text(),
                },
                {
                  duration: 4e3,
                  easing: "swing",
                  step: function (curValue) {
                    $this.text(Math.ceil(curValue));
                  },
                }
              );
            });
          }
          this.destroy();
        },
        offset: "90%",
      });
    };
    var ssSmoothScroll = function () {
      $(".smoothscroll").on("click", function (e) {
        var target = this.hash,
          $target = $(target);
        e.preventDefault();
        e.stopPropagation();
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top,
            },
            cfg.scrollDuration,
            "swing",
            function () {
              window.location.hash = target;
            }
          );
      });
    };
    var ssPlaceholder = function () {
      $("input, textarea, select").placeholder();
    };
    var ssAlertBoxes = function () {
      $(".alert-box").on("click", ".alert-box__close", function () {
        $(this).parent().fadeOut(500);
      });
    };
    var ssBackToTop = function () {
      var pxShow = 500,
        fadeInTime = 400,
        fadeOutTime = 400,
        scrollSpeed = 300,
        goTopButton = $(".go-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() >= pxShow) {
          goTopButton.fadeIn(fadeInTime);
        } else {
          goTopButton.fadeOut(fadeOutTime);
        }
      });
    };
    (function ssInit() {
      ssPreloader();
      ssPrettyPrint();
      ssMoveHeader();
      ssMobileMenu();
      ssMasonryFolio();
      ssPhotoswipe();
      ssSlickSlider();
      ssWaypoints();
      ssStatCount();
      ssSmoothScroll();
      ssPlaceholder();
      ssAlertBoxes();
      ssContactForm();
      ssBackToTop();
    })();
  })(jQuery);
