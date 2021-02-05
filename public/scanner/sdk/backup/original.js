! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.gradecam = e() : t.gradecam = e()
}(window, function() {
    return function(t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var i in t) n.d(r, i, function(e) {
                    return t[e]
                }.bind(null, i));
            return r
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 59)
    }([function(t, e, n) {
        var r;
        (function() {
            var n = this,
                i = n._,
                o = Array.prototype,
                s = Object.prototype,
                a = Function.prototype,
                c = o.push,
                u = o.slice,
                l = s.toString,
                p = s.hasOwnProperty,
                f = Array.isArray,
                h = Object.keys,
                d = a.bind,
                A = Object.create,
                g = function() {},
                m = function(t) {
                    return t instanceof m ? t : this instanceof m ? void(this._wrapped = t) : new m(t)
                };
            t.exports && (e = t.exports = m), e._ = m, m.VERSION = "1.8.3";
            var y = function(t, e, n) {
                    if (void 0 === e) return t;
                    switch (null == n ? 3 : n) {
                        case 1:
                            return function(n) {
                                return t.call(e, n)
                            };
                        case 2:
                            return function(n, r) {
                                return t.call(e, n, r)
                            };
                        case 3:
                            return function(n, r, i) {
                                return t.call(e, n, r, i)
                            };
                        case 4:
                            return function(n, r, i, o) {
                                return t.call(e, n, r, i, o)
                            }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                },
                v = function(t, e, n) {
                    return null == t ? m.identity : m.isFunction(t) ? y(t, e, n) : m.isObject(t) ? m.matcher(t) : m.property(t)
                };
            m.iteratee = function(t, e) {
                return v(t, e, 1 / 0)
            };
            var b = function(t, e) {
                    return function(n) {
                        var r = arguments.length;
                        if (r < 2 || null == n) return n;
                        for (var i = 1; i < r; i++)
                            for (var o = arguments[i], s = t(o), a = s.length, c = 0; c < a; c++) {
                                var u = s[c];
                                e && void 0 !== n[u] || (n[u] = o[u])
                            }
                        return n
                    }
                },
                w = function(t) {
                    if (!m.isObject(t)) return {};
                    if (A) return A(t);
                    g.prototype = t;
                    var e = new g;
                    return g.prototype = null, e
                },
                _ = function(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                },
                S = Math.pow(2, 53) - 1,
                x = _("length"),
                k = function(t) {
                    var e = x(t);
                    return "number" == typeof e && e >= 0 && e <= S
                };

            function C(t) {
                return function(e, n, r, i) {
                    n = y(n, i, 4);
                    var o = !k(e) && m.keys(e),
                        s = (o || e).length,
                        a = t > 0 ? 0 : s - 1;
                    return arguments.length < 3 && (r = e[o ? o[a] : a], a += t),
                        function(e, n, r, i, o, s) {
                            for (; o >= 0 && o < s; o += t) {
                                var a = i ? i[o] : o;
                                r = n(r, e[a], a, e)
                            }
                            return r
                        }(e, n, r, o, a, s)
                }
            }
            m.each = m.forEach = function(t, e, n) {
                var r, i;
                if (e = y(e, n), k(t))
                    for (r = 0, i = t.length; r < i; r++) e(t[r], r, t);
                else {
                    var o = m.keys(t);
                    for (r = 0, i = o.length; r < i; r++) e(t[o[r]], o[r], t)
                }
                return t
            }, m.map = m.collect = function(t, e, n) {
                e = v(e, n);
                for (var r = !k(t) && m.keys(t), i = (r || t).length, o = Array(i), s = 0; s < i; s++) {
                    var a = r ? r[s] : s;
                    o[s] = e(t[a], a, t)
                }
                return o
            }, m.reduce = m.foldl = m.inject = C(1), m.reduceRight = m.foldr = C(-1), m.find = m.detect = function(t, e, n) {
                var r;
                if (void 0 !== (r = k(t) ? m.findIndex(t, e, n) : m.findKey(t, e, n)) && -1 !== r) return t[r]
            }, m.filter = m.select = function(t, e, n) {
                var r = [];
                return e = v(e, n), m.each(t, function(t, n, i) {
                    e(t, n, i) && r.push(t)
                }), r
            }, m.reject = function(t, e, n) {
                return m.filter(t, m.negate(v(e)), n)
            }, m.every = m.all = function(t, e, n) {
                e = v(e, n);
                for (var r = !k(t) && m.keys(t), i = (r || t).length, o = 0; o < i; o++) {
                    var s = r ? r[o] : o;
                    if (!e(t[s], s, t)) return !1
                }
                return !0
            }, m.some = m.any = function(t, e, n) {
                e = v(e, n);
                for (var r = !k(t) && m.keys(t), i = (r || t).length, o = 0; o < i; o++) {
                    var s = r ? r[o] : o;
                    if (e(t[s], s, t)) return !0
                }
                return !1
            }, m.contains = m.includes = m.include = function(t, e, n, r) {
                return k(t) || (t = m.values(t)), ("number" != typeof n || r) && (n = 0), m.indexOf(t, e, n) >= 0
            }, m.invoke = function(t, e) {
                var n = u.call(arguments, 2),
                    r = m.isFunction(e);
                return m.map(t, function(t) {
                    var i = r ? e : t[e];
                    return null == i ? i : i.apply(t, n)
                })
            }, m.pluck = function(t, e) {
                return m.map(t, m.property(e))
            }, m.where = function(t, e) {
                return m.filter(t, m.matcher(e))
            }, m.findWhere = function(t, e) {
                return m.find(t, m.matcher(e))
            }, m.max = function(t, e, n) {
                var r, i, o = -1 / 0,
                    s = -1 / 0;
                if (null == e && null != t)
                    for (var a = 0, c = (t = k(t) ? t : m.values(t)).length; a < c; a++)(r = t[a]) > o && (o = r);
                else e = v(e, n), m.each(t, function(t, n, r) {
                    ((i = e(t, n, r)) > s || i === -1 / 0 && o === -1 / 0) && (o = t, s = i)
                });
                return o
            }, m.min = function(t, e, n) {
                var r, i, o = 1 / 0,
                    s = 1 / 0;
                if (null == e && null != t)
                    for (var a = 0, c = (t = k(t) ? t : m.values(t)).length; a < c; a++)(r = t[a]) < o && (o = r);
                else e = v(e, n), m.each(t, function(t, n, r) {
                    ((i = e(t, n, r)) < s || i === 1 / 0 && o === 1 / 0) && (o = t, s = i)
                });
                return o
            }, m.shuffle = function(t) {
                for (var e, n = k(t) ? t : m.values(t), r = n.length, i = Array(r), o = 0; o < r; o++)(e = m.random(0, o)) !== o && (i[o] = i[e]), i[e] = n[o];
                return i
            }, m.sample = function(t, e, n) {
                return null == e || n ? (k(t) || (t = m.values(t)), t[m.random(t.length - 1)]) : m.shuffle(t).slice(0, Math.max(0, e))
            }, m.sortBy = function(t, e, n) {
                return e = v(e, n), m.pluck(m.map(t, function(t, n, r) {
                    return {
                        value: t,
                        index: n,
                        criteria: e(t, n, r)
                    }
                }).sort(function(t, e) {
                    var n = t.criteria,
                        r = e.criteria;
                    if (n !== r) {
                        if (n > r || void 0 === n) return 1;
                        if (n < r || void 0 === r) return -1
                    }
                    return t.index - e.index
                }), "value")
            };
            var I = function(t) {
                return function(e, n, r) {
                    var i = {};
                    return n = v(n, r), m.each(e, function(r, o) {
                        var s = n(r, o, e);
                        t(i, r, s)
                    }), i
                }
            };
            m.groupBy = I(function(t, e, n) {
                m.has(t, n) ? t[n].push(e) : t[n] = [e]
            }), m.indexBy = I(function(t, e, n) {
                t[n] = e
            }), m.countBy = I(function(t, e, n) {
                m.has(t, n) ? t[n]++ : t[n] = 1
            }), m.toArray = function(t) {
                return t ? m.isArray(t) ? u.call(t) : k(t) ? m.map(t, m.identity) : m.values(t) : []
            }, m.size = function(t) {
                return null == t ? 0 : k(t) ? t.length : m.keys(t).length
            }, m.partition = function(t, e, n) {
                e = v(e, n);
                var r = [],
                    i = [];
                return m.each(t, function(t, n, o) {
                    (e(t, n, o) ? r : i).push(t)
                }), [r, i]
            }, m.first = m.head = m.take = function(t, e, n) {
                if (null != t) return null == e || n ? t[0] : m.initial(t, t.length - e)
            }, m.initial = function(t, e, n) {
                return u.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
            }, m.last = function(t, e, n) {
                if (null != t) return null == e || n ? t[t.length - 1] : m.rest(t, Math.max(0, t.length - e))
            }, m.rest = m.tail = m.drop = function(t, e, n) {
                return u.call(t, null == e || n ? 1 : e)
            }, m.compact = function(t) {
                return m.filter(t, m.identity)
            };
            var E = function(t, e, n, r) {
                for (var i = [], o = 0, s = r || 0, a = x(t); s < a; s++) {
                    var c = t[s];
                    if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                        e || (c = E(c, e, n));
                        var u = 0,
                            l = c.length;
                        for (i.length += l; u < l;) i[o++] = c[u++]
                    } else n || (i[o++] = c)
                }
                return i
            };

            function O(t) {
                return function(e, n, r) {
                    n = v(n, r);
                    for (var i = x(e), o = t > 0 ? 0 : i - 1; o >= 0 && o < i; o += t)
                        if (n(e[o], o, e)) return o;
                    return -1
                }
            }

            function M(t, e, n) {
                return function(r, i, o) {
                    var s = 0,
                        a = x(r);
                    if ("number" == typeof o) t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
                    else if (n && o && a) return r[o = n(r, i)] === i ? o : -1;
                    if (i != i) return (o = e(u.call(r, s, a), m.isNaN)) >= 0 ? o + s : -1;
                    for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t)
                        if (r[o] === i) return o;
                    return -1
                }
            }
            m.flatten = function(t, e) {
                return E(t, e, !1)
            }, m.without = function(t) {
                return m.difference(t, u.call(arguments, 1))
            }, m.uniq = m.unique = function(t, e, n, r) {
                m.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = v(n, r));
                for (var i = [], o = [], s = 0, a = x(t); s < a; s++) {
                    var c = t[s],
                        u = n ? n(c, s, t) : c;
                    e ? (s && o === u || i.push(c), o = u) : n ? m.contains(o, u) || (o.push(u), i.push(c)) : m.contains(i, c) || i.push(c)
                }
                return i
            }, m.union = function() {
                return m.uniq(E(arguments, !0, !0))
            }, m.intersection = function(t) {
                for (var e = [], n = arguments.length, r = 0, i = x(t); r < i; r++) {
                    var o = t[r];
                    if (!m.contains(e, o)) {
                        for (var s = 1; s < n && m.contains(arguments[s], o); s++);
                        s === n && e.push(o)
                    }
                }
                return e
            }, m.difference = function(t) {
                var e = E(arguments, !0, !0, 1);
                return m.filter(t, function(t) {
                    return !m.contains(e, t)
                })
            }, m.zip = function() {
                return m.unzip(arguments)
            }, m.unzip = function(t) {
                for (var e = t && m.max(t, x).length || 0, n = Array(e), r = 0; r < e; r++) n[r] = m.pluck(t, r);
                return n
            }, m.object = function(t, e) {
                for (var n = {}, r = 0, i = x(t); r < i; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
                return n
            }, m.findIndex = O(1), m.findLastIndex = O(-1), m.sortedIndex = function(t, e, n, r) {
                for (var i = (n = v(n, r, 1))(e), o = 0, s = x(t); o < s;) {
                    var a = Math.floor((o + s) / 2);
                    n(t[a]) < i ? o = a + 1 : s = a
                }
                return o
            }, m.indexOf = M(1, m.findIndex, m.sortedIndex), m.lastIndexOf = M(-1, m.findLastIndex), m.range = function(t, e, n) {
                null == e && (e = t || 0, t = 0), n = n || 1;
                for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0; o < r; o++, t += n) i[o] = t;
                return i
            };
            var R = function(t, e, n, r, i) {
                if (!(r instanceof e)) return t.apply(n, i);
                var o = w(t.prototype),
                    s = t.apply(o, i);
                return m.isObject(s) ? s : o
            };
            m.bind = function(t, e) {
                if (d && t.bind === d) return d.apply(t, u.call(arguments, 1));
                if (!m.isFunction(t)) throw new TypeError("Bind must be called on a function");
                var n = u.call(arguments, 2),
                    r = function() {
                        return R(t, r, e, this, n.concat(u.call(arguments)))
                    };
                return r
            }, m.partial = function(t) {
                var e = u.call(arguments, 1),
                    n = function() {
                        for (var r = 0, i = e.length, o = Array(i), s = 0; s < i; s++) o[s] = e[s] === m ? arguments[r++] : e[s];
                        for (; r < arguments.length;) o.push(arguments[r++]);
                        return R(t, n, this, this, o)
                    };
                return n
            }, m.bindAll = function(t) {
                var e, n, r = arguments.length;
                if (r <= 1) throw new Error("bindAll must be passed function names");
                for (e = 1; e < r; e++) t[n = arguments[e]] = m.bind(t[n], t);
                return t
            }, m.memoize = function(t, e) {
                var n = function(r) {
                    var i = n.cache,
                        o = "" + (e ? e.apply(this, arguments) : r);
                    return m.has(i, o) || (i[o] = t.apply(this, arguments)), i[o]
                };
                return n.cache = {}, n
            }, m.delay = function(t, e) {
                var n = u.call(arguments, 2);
                return setTimeout(function() {
                    return t.apply(null, n)
                }, e)
            }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(t, e, n) {
                var r, i, o, s = null,
                    a = 0;
                n || (n = {});
                var c = function() {
                    a = !1 === n.leading ? 0 : m.now(), s = null, o = t.apply(r, i), s || (r = i = null)
                };
                return function() {
                    var u = m.now();
                    a || !1 !== n.leading || (a = u);
                    var l = e - (u - a);
                    return r = this, i = arguments, l <= 0 || l > e ? (s && (clearTimeout(s), s = null), a = u, o = t.apply(r, i), s || (r = i = null)) : s || !1 === n.trailing || (s = setTimeout(c, l)), o
                }
            }, m.debounce = function(t, e, n) {
                var r, i, o, s, a, c = function() {
                    var u = m.now() - s;
                    u < e && u >= 0 ? r = setTimeout(c, e - u) : (r = null, n || (a = t.apply(o, i), r || (o = i = null)))
                };
                return function() {
                    o = this, i = arguments, s = m.now();
                    var u = n && !r;
                    return r || (r = setTimeout(c, e)), u && (a = t.apply(o, i), o = i = null), a
                }
            }, m.wrap = function(t, e) {
                return m.partial(e, t)
            }, m.negate = function(t) {
                return function() {
                    return !t.apply(this, arguments)
                }
            }, m.compose = function() {
                var t = arguments,
                    e = t.length - 1;
                return function() {
                    for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
                    return r
                }
            }, m.after = function(t, e) {
                return function() {
                    if (--t < 1) return e.apply(this, arguments)
                }
            }, m.before = function(t, e) {
                var n;
                return function() {
                    return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
                }
            }, m.once = m.partial(m.before, 2);
            var D = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                B = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

            function T(t, e) {
                var n = B.length,
                    r = t.constructor,
                    i = m.isFunction(r) && r.prototype || s,
                    o = "constructor";
                for (m.has(t, o) && !m.contains(e, o) && e.push(o); n--;)(o = B[n]) in t && t[o] !== i[o] && !m.contains(e, o) && e.push(o)
            }
            m.keys = function(t) {
                if (!m.isObject(t)) return [];
                if (h) return h(t);
                var e = [];
                for (var n in t) m.has(t, n) && e.push(n);
                return D && T(t, e), e
            }, m.allKeys = function(t) {
                if (!m.isObject(t)) return [];
                var e = [];
                for (var n in t) e.push(n);
                return D && T(t, e), e
            }, m.values = function(t) {
                for (var e = m.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];
                return r
            }, m.mapObject = function(t, e, n) {
                e = v(e, n);
                for (var r, i = m.keys(t), o = i.length, s = {}, a = 0; a < o; a++) s[r = i[a]] = e(t[r], r, t);
                return s
            }, m.pairs = function(t) {
                for (var e = m.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = [e[i], t[e[i]]];
                return r
            }, m.invert = function(t) {
                for (var e = {}, n = m.keys(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];
                return e
            }, m.functions = m.methods = function(t) {
                var e = [];
                for (var n in t) m.isFunction(t[n]) && e.push(n);
                return e.sort()
            }, m.extend = b(m.allKeys), m.extendOwn = m.assign = b(m.keys), m.findKey = function(t, e, n) {
                e = v(e, n);
                for (var r, i = m.keys(t), o = 0, s = i.length; o < s; o++)
                    if (e(t[r = i[o]], r, t)) return r
            }, m.pick = function(t, e, n) {
                var r, i, o = {},
                    s = t;
                if (null == s) return o;
                m.isFunction(e) ? (i = m.allKeys(s), r = y(e, n)) : (i = E(arguments, !1, !1, 1), r = function(t, e, n) {
                    return e in n
                }, s = Object(s));
                for (var a = 0, c = i.length; a < c; a++) {
                    var u = i[a],
                        l = s[u];
                    r(l, u, s) && (o[u] = l)
                }
                return o
            }, m.omit = function(t, e, n) {
                if (m.isFunction(e)) e = m.negate(e);
                else {
                    var r = m.map(E(arguments, !1, !1, 1), String);
                    e = function(t, e) {
                        return !m.contains(r, e)
                    }
                }
                return m.pick(t, e, n)
            }, m.defaults = b(m.allKeys, !0), m.create = function(t, e) {
                var n = w(t);
                return e && m.extendOwn(n, e), n
            }, m.clone = function(t) {
                return m.isObject(t) ? m.isArray(t) ? t.slice() : m.extend({}, t) : t
            }, m.tap = function(t, e) {
                return e(t), t
            }, m.isMatch = function(t, e) {
                var n = m.keys(e),
                    r = n.length;
                if (null == t) return !r;
                for (var i = Object(t), o = 0; o < r; o++) {
                    var s = n[o];
                    if (e[s] !== i[s] || !(s in i)) return !1
                }
                return !0
            };
            var F = function(t, e, n, r) {
                if (t === e) return 0 !== t || 1 / t == 1 / e;
                if (null == t || null == e) return t === e;
                t instanceof m && (t = t._wrapped), e instanceof m && (e = e._wrapped);
                var i = l.call(t);
                if (i !== l.call(e)) return !1;
                switch (i) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + e;
                    case "[object Number]":
                        return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +t == +e
                }
                var o = "[object Array]" === i;
                if (!o) {
                    if ("object" != typeof t || "object" != typeof e) return !1;
                    var s = t.constructor,
                        a = e.constructor;
                    if (s !== a && !(m.isFunction(s) && s instanceof s && m.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1
                }
                r = r || [];
                for (var c = (n = n || []).length; c--;)
                    if (n[c] === t) return r[c] === e;
                if (n.push(t), r.push(e), o) {
                    if ((c = t.length) !== e.length) return !1;
                    for (; c--;)
                        if (!F(t[c], e[c], n, r)) return !1
                } else {
                    var u, p = m.keys(t);
                    if (c = p.length, m.keys(e).length !== c) return !1;
                    for (; c--;)
                        if (u = p[c], !m.has(e, u) || !F(t[u], e[u], n, r)) return !1
                }
                return n.pop(), r.pop(), !0
            };
            m.isEqual = function(t, e) {
                return F(t, e)
            }, m.isEmpty = function(t) {
                return null == t || (k(t) && (m.isArray(t) || m.isString(t) || m.isArguments(t)) ? 0 === t.length : 0 === m.keys(t).length)
            }, m.isElement = function(t) {
                return !(!t || 1 !== t.nodeType)
            }, m.isArray = f || function(t) {
                return "[object Array]" === l.call(t)
            }, m.isObject = function(t) {
                var e = typeof t;
                return "function" === e || "object" === e && !!t
            }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
                m["is" + t] = function(e) {
                    return l.call(e) === "[object " + t + "]"
                }
            }), m.isArguments(arguments) || (m.isArguments = function(t) {
                return m.has(t, "callee")
            }), "object" != typeof Int8Array && (m.isFunction = function(t) {
                return "function" == typeof t || !1
            }), m.isFinite = function(t) {
                return isFinite(t) && !isNaN(parseFloat(t))
            }, m.isNaN = function(t) {
                return m.isNumber(t) && t !== +t
            }, m.isBoolean = function(t) {
                return !0 === t || !1 === t || "[object Boolean]" === l.call(t)
            }, m.isNull = function(t) {
                return null === t
            }, m.isUndefined = function(t) {
                return void 0 === t
            }, m.has = function(t, e) {
                return null != t && p.call(t, e)
            }, m.noConflict = function() {
                return n._ = i, this
            }, m.identity = function(t) {
                return t
            }, m.constant = function(t) {
                return function() {
                    return t
                }
            }, m.noop = function() {}, m.property = _, m.propertyOf = function(t) {
                return null == t ? function() {} : function(e) {
                    return t[e]
                }
            }, m.matcher = m.matches = function(t) {
                return t = m.extendOwn({}, t),
                    function(e) {
                        return m.isMatch(e, t)
                    }
            }, m.times = function(t, e, n) {
                var r = Array(Math.max(0, t));
                e = y(e, n, 1);
                for (var i = 0; i < t; i++) r[i] = e(i);
                return r
            }, m.random = function(t, e) {
                return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
            }, m.now = Date.now || function() {
                return (new Date).getTime()
            };
            var V = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                j = m.invert(V),
                N = function(t) {
                    var e = function(e) {
                            return t[e]
                        },
                        n = "(?:" + m.keys(t).join("|") + ")",
                        r = RegExp(n),
                        i = RegExp(n, "g");
                    return function(t) {
                        return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t
                    }
                };
            m.escape = N(V), m.unescape = N(j), m.result = function(t, e, n) {
                var r = null == t ? void 0 : t[e];
                return void 0 === r && (r = n), m.isFunction(r) ? r.call(t) : r
            };
            var P = 0;
            m.uniqueId = function(t) {
                var e = ++P + "";
                return t ? t + e : e
            }, m.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var U = /(.)^/,
                L = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                G = /\\|'|\r|\n|\u2028|\u2029/g,
                q = function(t) {
                    return "\\" + L[t]
                };
            m.template = function(t, e, n) {
                !e && n && (e = n), e = m.defaults({}, e, m.templateSettings);
                var r = RegExp([(e.escape || U).source, (e.interpolate || U).source, (e.evaluate || U).source].join("|") + "|$", "g"),
                    i = 0,
                    o = "__p+='";
                t.replace(r, function(e, n, r, s, a) {
                    return o += t.slice(i, a).replace(G, q), i = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e
                }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    var s = new Function(e.variable || "obj", "_", o)
                } catch (t) {
                    throw t.source = o, t
                }
                var a = function(t) {
                        return s.call(this, t, m)
                    },
                    c = e.variable || "obj";
                return a.source = "function(" + c + "){\n" + o + "}", a
            }, m.chain = function(t) {
                var e = m(t);
                return e._chain = !0, e
            };
            var Q = function(t, e) {
                return t._chain ? m(e).chain() : e
            };
            m.mixin = function(t) {
                m.each(m.functions(t), function(e) {
                    var n = m[e] = t[e];
                    m.prototype[e] = function() {
                        var t = [this._wrapped];
                        return c.apply(t, arguments), Q(this, n.apply(m, t))
                    }
                })
            }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
                var e = o[t];
                m.prototype[t] = function() {
                    var n = this._wrapped;
                    return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], Q(this, n)
                }
            }), m.each(["concat", "join", "slice"], function(t) {
                var e = o[t];
                m.prototype[t] = function() {
                    return Q(this, e.apply(this._wrapped, arguments))
                }
            }), m.prototype.value = function() {
                return this._wrapped
            }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
                return "" + this._wrapped
            }, void 0 === (r = function() {
                return m
            }.apply(e, [])) || (t.exports = r)
        }).call(this)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(22);
        "undefined" == typeof window || window.Promise || (window.Promise = r), e.PromiseAll = function(t) {
            return new Promise(function(e, n) {
                if (0 === t.length) return e([]);
                var r = t.length;

                function i(o, s) {
                    try {
                        if (s && ("object" == typeof s || "function" == typeof s)) {
                            var a = s.then;
                            if ("function" == typeof a) return void a.call(s, function(t) {
                                return i(o, t)
                            }, n)
                        }
                        t[o] = s, 0 == --r && e(t)
                    } catch (t) {
                        n(t)
                    }
                }
                for (var o = 0; o < t.length; o++) i(o, t[o])
            })
        }, e.newDeferred = function(t) {
            var e, n = new Promise(function(t, n) {
                e = {
                    reject: n,
                    resolve: t
                }
            });
            return e.promise = n, arguments.length > 0 && e.resolve(t), e
        }, e.rejected = function(t) {
            return new Promise(function(e, n) {
                return n(t)
            })
        }, e.race = function(t) {
            return new Promise(function(e, n) {
                for (var r = 0; r < t.length; r += 1) Promise.resolve(t[r]).then(e, n)
            })
        }, e.later = function(t, e) {
            return new Promise(function(n) {
                setTimeout(n, e, t)
            })
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            i = function() {
                function t() {
                    if (!(this instanceof t)) return new t;
                    this.trace = r.bind(this._log, this, t.TRACE), this.debug = r.bind(this._log, this, t.DEBUG), this.info = r.bind(this._log, this, t.INFO), this.warn = r.bind(this._log, this, t.WARN), this.error = r.bind(this._log, this, t.ERROR), this.logLevel = t.ERROR
                }
                return t.prototype.setLogLevel = function(t) {
                    this.logLevel = t
                }, t.prototype._log = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    this.logLevel >= t && window.console && console.log(e)
                }, t.prototype.trace = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
                }, t.prototype.debug = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
                }, t.prototype.info = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
                }, t.prototype.warn = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
                }, t.prototype.error = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
                }, t.get = function() {
                    throw new Error("Not configured")
                }, t.TRACE = 5, t.DEBUG = 4, t.INFO = 3, t.WARN = 2, t.ERROR = 1, t
            }(),
            o = new i;
        i.get = function() {
                return o
            },
            function(t) {
                var e = function() {
                    function e(e, n) {
                        void 0 === e && (e = "LogTimer"), void 0 === n && (n = t.INFO), this.name = e, this.level = n, this.start = Date.now(), this.count = 0
                    }
                    return e.prototype.log = function(t, e) {
                        o._log(this.level, this.name + ": " + (e || "") + " " + t)
                    }, e.prototype.ping = function() {
                        this.count++
                    }, e.prototype.reset = function(t) {
                        this.count = 0, this.start = Date.now(), t && this.log(t)
                    }, e.prototype.getSeconds = function() {
                        return (Date.now() - this.start) / 1e3
                    }, e.prototype.logNow = function(t) {
                        var e = this.getSeconds() + " seconds";
                        this.count && (e += " @" + this.count / this.getSeconds() + " calls per second");
                        this.log(e, t)
                    }, e
                }();
                t.LogTimer = e
            }(i || (i = {})), t.exports = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {
                this._callbacks = {}
            }
            return t.prototype.bind = function(t, e, n) {
                var r = this._callbacks;
                return (r[t] || (r[t] = [])).push([e, n]), this
            }, t.prototype.unbind = function(t, e) {
                var n = this._callbacks;
                if (t) {
                    if (n)
                        if (e) {
                            var r = n[t];
                            if (!r) return this;
                            for (var i = 0, o = r.length; i < o; i++)
                                if (r[i] && e === r[i][0]) {
                                    r[i] = null;
                                    break
                                }
                        } else n[t] = []
                } else this._callbacks = {};
                return this
            }, t.prototype.trigger = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r = this._callbacks,
                    i = 2;
                if (!r) return this;
                for (; i--;) {
                    var o = r[i ? t : "all"];
                    if (o)
                        for (var s = 0, a = o.length; s < a; s++) {
                            var c = o[s];
                            c ? (e = i ? Array.prototype.slice.call(arguments, 1) : arguments, c[0].apply(c[1] || this, e)) : (o.splice(s, 1), s--, a--)
                        }
                }
                return this
            }, t
        }();
        e.ClassTS = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(151);
        e.ScanBlocks = r;
        var i = n(155);
        e.InterpretedScan = i;
        var o = n(163);
        e.StructuredScan = o;
        var s = n(12);
        e.FormDescription = s;
        var a = n(48);
        e.FormMode = a
    }, function(t, e, n) {
        "use strict";
        var r = n(65),
            i = n(66),
            o = n(35),
            s = n(67),
            a = n(36),
            c = n(68),
            u = function() {
                function t(t) {
                    this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t)
                }
                var e;
                return t.prototype.unsubscribe = function() {
                    var t, e = !1;
                    if (!this.closed) {
                        var n = this._parent,
                            u = this._parents,
                            p = this._unsubscribe,
                            f = this._subscriptions;
                        this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                        for (var h = -1, d = u ? u.length : 0; n;) n.remove(this), n = ++h < d && u[h] || null;
                        if (o.isFunction(p)) s.tryCatch(p).call(this) === a.errorObject && (e = !0, t = t || (a.errorObject.e instanceof c.UnsubscriptionError ? l(a.errorObject.e.errors) : [a.errorObject.e]));
                        if (r.isArray(f))
                            for (h = -1, d = f.length; ++h < d;) {
                                var A = f[h];
                                if (i.isObject(A))
                                    if (s.tryCatch(A.unsubscribe).call(A) === a.errorObject) {
                                        e = !0, t = t || [];
                                        var g = a.errorObject.e;
                                        g instanceof c.UnsubscriptionError ? t = t.concat(l(g.errors)) : t.push(g)
                                    }
                            }
                        if (e) throw new c.UnsubscriptionError(t)
                    }
                }, t.prototype.add = function(e) {
                    if (!e || e === t.EMPTY) return t.EMPTY;
                    if (e === this) return this;
                    var n = e;
                    switch (typeof e) {
                        case "function":
                            n = new t(e);
                        case "object":
                            if (n.closed || "function" != typeof n.unsubscribe) return n;
                            if (this.closed) return n.unsubscribe(), n;
                            if ("function" != typeof n._addParent) {
                                var r = n;
                                (n = new t)._subscriptions = [r]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + e + " added to Subscription.")
                    }
                    return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n
                }, t.prototype.remove = function(t) {
                    var e = this._subscriptions;
                    if (e) {
                        var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                    }
                }, t.prototype._addParent = function(t) {
                    var e = this._parent,
                        n = this._parents;
                    e && e !== t ? n ? -1 === n.indexOf(t) && n.push(t) : this._parents = [t] : this._parent = t
                }, t.EMPTY = ((e = new t).closed = !0, e), t
            }();

        function l(t) {
            return t.reduce(function(t, e) {
                return t.concat(e instanceof c.UnsubscriptionError ? e.errors : e)
            }, [])
        }
        e.Subscription = u
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(43),
            s = n(1);
        n(22), navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame, !window.URL && window.webkitURL && (window.URL = window.webkitURL);
        var a = window.File && window.FileReader && window.FileList && window.Blob && window.URL && window.URL.createObjectURL,
            c = {
                ext_installed: o.ext_installed,
                installed: void 0,
                waitForPlugin: o.watchForInstall,
                supported: o.supported
            },
            u = s.newDeferred(),
            l = {
                userMedia: !!navigator.getUserMedia || navigator.mediaDevices && !!navigator.mediaDevices.getUserMedia,
                webWorker: !!window.Worker,
                reqAnimFrame: !!window.requestAnimationFrame,
                fileSupport: !!a,
                plugin2: c,
                readyDfd: u.promise
            };
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            var p = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            p && (navigator.mediaDevices || (navigator.mediaDevices = {}), navigator.mediaDevices.getUserMedia = function(t) {
                return new Promise(function(e, n) {
                    return p.call(navigator, t, e, n)
                })
            })
        }
        c.ext_installed ? function t(e) {
            return r(this, void 0, void 0, function() {
                var n, r;
                return i(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, o.detect()];
                        case 1:
                            return n = i.sent(), c.installed = n, [3, 3];
                        case 2:
                            return r = i.sent(), c.installed = !!c.installed, e && "timeout" == r && t(e - 1), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }(3).catch(function(t) {
            return c.installed = !1
        }).then(function() {
            return u.resolve()
        }) : u.resolve(), t.exports = l
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = n(16),
            o = n(70),
            s = n(5),
            a = n(77),
            c = n(20),
            u = n(38),
            l = function(t) {
                function e(e, n, r) {
                    void 0 === e && (e = Number.POSITIVE_INFINITY), void 0 === n && (n = Number.POSITIVE_INFINITY), t.call(this), this.scheduler = r, this._events = [], this._bufferSize = e < 1 ? 1 : e, this._windowTime = n < 1 ? 1 : n
                }
                return r(e, t), e.prototype.next = function(e) {
                    var n = this._getNow();
                    this._events.push(new p(n, e)), this._trimBufferThenGetEvents(), t.prototype.next.call(this, e)
                }, e.prototype._subscribe = function(t) {
                    var e, n = this._trimBufferThenGetEvents(),
                        r = this.scheduler;
                    if (this.closed) throw new c.ObjectUnsubscribedError;
                    this.hasError ? e = s.Subscription.EMPTY : this.isStopped ? e = s.Subscription.EMPTY : (this.observers.push(t), e = new u.SubjectSubscription(this, t)), r && t.add(t = new a.ObserveOnSubscriber(t, r));
                    for (var i = n.length, o = 0; o < i && !t.closed; o++) t.next(n[o].value);
                    return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(), e
                }, e.prototype._getNow = function() {
                    return (this.scheduler || o.queue).now()
                }, e.prototype._trimBufferThenGetEvents = function() {
                    for (var t = this._getNow(), e = this._bufferSize, n = this._windowTime, r = this._events, i = r.length, o = 0; o < i && !(t - r[o].time < n);) o++;
                    return i > e && (o = Math.max(o, i - e)), o > 0 && r.splice(0, o), r
                }, e
            }(i.Subject);
        e.ReplaySubject = l;
        var p = function() {
            return function(t, e) {
                this.time = t, this.value = e
            }
        }()
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            var n = "undefined" != typeof window && window,
                r = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                i = n || void 0 !== t && t || r;
            e.root = i,
                function() {
                    if (!i) throw new Error("RxJS could not find any global context (window, self, global)")
                }()
        }).call(this, n(17))
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function(t) {
            function e(e) {
                var n = this.constructor,
                    r = t.call(this, "The plugin is not installed") || this;
                r.status = e, r.name = "NeedsInstallError";
                var i = n.prototype;
                return Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i, r
            }
            return i(e, t), e.prototype.getStatus = function() {
                return this.status
            }, e.prototype.toString = function() {
                return this.message
            }, e
        }(Error);
        e.NeedsInstallError = o;
        var s = function(t) {
            function e(e) {
                var n = this.constructor,
                    r = t.call(this, e) || this;
                r.name = "UnsupportedError";
                var i = n.prototype;
                return Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i, r
            }
            return i(e, t), e
        }(Error);
        e.UnsupportedError = s;
        var a = function(t) {
            function e(e) {
                var n = this.constructor,
                    r = t.call(this, e) || this;
                r.name = "UnauthenticatedError";
                var i = n.prototype;
                return Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i, r
            }
            return i(e, t), e
        }(Error);
        e.UnauthenticatedError = a
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(7),
            s = n(0),
            a = n(2),
            c = n(3),
            u = n(1),
            l = n(24),
            p = 0;

        function f(t) {
            window.requestAnimationFrame ? window.requestAnimationFrame(function(e) {
                4 == ++p ? (p = 0, t(e)) : f(t)
            }) : setTimeout(t, 1e3 / 15)
        }
        var h = a.get(),
            d = function() {
                function t(t, e, n, r) {
                    var i = this;
                    this.el = t, this.video = this.el.getElementsByTagName("video")[0], this.image = this.el.getElementsByTagName("img")[0], this.activeInput = null, this.triggeredLoop = !1, this.evtBus = new c.ClassTS, this.stream = null, this.connected = !1, this.drawn = !1, this.loopRunning = !1, this.paused = !1, this.camera = null, this.rotate = l.CameraRotate.None, this.cameraList = [], this.cameraMap = {}, this.p2Cameras = {}, this.lastWidth = 0, this.lastHeight = 0, this.jpegDfd = null, this.plugin2 = null, this.currentCameraInfo = new o.ReplaySubject(1), this.fpsTimer = new a.LogTimer("Video FPS timer", a.INFO), this.bind = s.bind(this.evtBus.bind, this.evtBus), this.unbind = s.bind(this.evtBus.unbind, this.evtBus);
                    var p = u.PromiseAll([e, n]).then(function(t) {
                        var e = t[0],
                            n = t[1];
                        return i.imageHandler = e, i.blitter = n, !0
                    });
                    this._readyDfd = u.PromiseAll([r, p]).then(function(t) {
                        var r = t[0];
                        t[1];
                        return i.plugin2 = r, r && r.setImageCallback(function(t) {
                            return i.imageDrawCallback(t)
                        }), u.PromiseAll([i._detectCameraList(), e, n])
                    })
                }
                return t.prototype._detectCameraList = function() {
                    return r(this, void 0, void 0, function() {
                        var t, e, n, r, o, s, a, c, l, p, f, d, A, g, m, y, v, b, w, _, S, x, k, C, I, E, O, M, R, D, B;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = u.newDeferred(), e = this.plugin2, n = [], r = {}, o = {}, s = 1, e ? [4, e.getCameraList()] : [3, 2];
                                case 1:
                                    return c = i.sent(), [3, 3];
                                case 2:
                                    c = "[]", i.label = 3;
                                case 3:
                                    a = c;
                                    try {
                                        l = a ? JSON.parse(a) : []
                                    } catch (t) {
                                        l = []
                                    }
                                    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return [3, 8];
                                    i.label = 4;
                                case 4:
                                    return i.trys.push([4, 6, , 7]), [4, navigator.mediaDevices.enumerateDevices()];
                                case 5:
                                    p = i.sent();
                                    try {
                                        for (p = p.filter(function(t) {
                                                return "videoinput" == t.kind
                                            }), f = 0, d = 0, A = p; d < A.length; d++) D = A[d], g = "camera " + s, m = D.label || {
                                            index: f
                                        }, y = D.label || g, r[y] = m, r[g] = m, n.push(y), s++, f++
                                    } catch (t) {
                                        h.error("Error processing mediaDevices list")
                                    }
                                    try {
                                        (l || []).forEach(function(t) {
                                            var e = "GC: " + t;
                                            o[e] = t, n.push(e)
                                        })
                                    } catch (t) {
                                        h.error("Couldn't process plugin2 camera list")
                                    }
                                    return this.cameraList = n, this.cameraMap = r, this.p2Cameras = o, [3, 7];
                                case 6:
                                    return v = i.sent(), h.error("Error detecting camera list"), this.cameraList = ["Default Camera"], this.cameraMap["Default Camera"] = "", this.p2Cameras = {}, h.error(v.name + ": " + v.message), [3, 7];
                                case 7:
                                    return t.resolve(n), [3, 14];
                                case 8:
                                    if (!window.MediaStreamTrack || !window.MediaStreamTrack.getSources) return [3, 13];
                                    b = u.newDeferred(), window.MediaStreamTrack.getSources(function(t) {
                                        b.resolve(t)
                                    }), i.label = 9;
                                case 9:
                                    return i.trys.push([9, 11, , 12]), [4, b.promise];
                                case 10:
                                    for (w = i.sent(), _ = 0, S = w; _ < S.length; _++) "video" == (x = S[_]).kind && (k = "camera " + s, "user" == x.facing ? k = "Front Camera " + s : "environment" == x.facing && (k = "Rear Camera " + s), r[k] = x.id, n.push(k), s++);
                                    try {
                                        for (C = 0, I = l || []; C < I.length; C++) D = I[C], o[E = "GC: " + D] = D, n.push(E)
                                    } catch (t) {
                                        h.error("Couldn't process plugin2 camera list")
                                    }
                                    return this.cameraList = n, this.cameraMap = r, [3, 12];
                                case 11:
                                    return O = i.sent(), h.error("Could not process media sources:", O.message), [3, 12];
                                case 12:
                                    return t.resolve(n), [3, 14];
                                case 13:
                                    for (n = ["Default Camera"], r["Default Camera"] = "", M = 0, R = l || []; M < R.length; M++) D = R[M], o[B = "GC: " + D] = D, n.push(B);
                                    this.cameraList = n, this.cameraMap = r, this.p2Cameras = o, t.resolve(n), i.label = 14;
                                case 14:
                                    return [2, t.promise]
                            }
                        })
                    })
                }, t.prototype.drawLoop = function() {
                    var t = this;
                    if (this.connected && this.activeInput) {
                        if (!this.paused) {
                            this.loopRunning = !0;
                            var e = this.activeInput,
                                n = this.blitter,
                                r = this.fpsTimer,
                                i = e.videoWidth || e.naturalWidth,
                                o = e.videoHeight || e.naturalHeight;
                            if (i && o) {
                                var a = n.drawVideo(e, this.rotate);
                                if (this.updateVideoSize(a.w, a.h), this.drawn = !0, this.imageHandler.readyForFrame()) {
                                    this.fpsTimer.ping();
                                    var c = n.getVideoPixels(),
                                        u = n.isHighRes();
                                    s.defer(function() {
                                        t.imageHandler.processFrame(c, !1, u)
                                    }), this.jpegDfd && (this.jpegDfd.resolve(n.getJPEGImage()), this.jpegDfd = null)
                                }
                                n.drawRects(this.rotate)
                            }
                            r.getSeconds() > 10 && (r.logNow(), r.reset()), this.triggeredLoop || f(function(e) {
                                return t.drawLoop()
                            })
                        }
                    } else this.loopRunning = !1
                }, t.prototype.imageDrawCallback = function(t) {
                    var e = this;
                    this.image.src = t, this.triggeredLoop && f(function(t) {
                        return e.drawLoop()
                    })
                }, t.prototype.updateVideoSize = function(t, e) {
                    this.lastWidth == t && this.lastHeight == e || (this.currentCameraInfo.next({
                        width: t,
                        height: e,
                        supportsHighRes: t * e > 48e4
                    }), this.evtBus.trigger("videoSize", t, e)), this.lastWidth = t, this.lastHeight = e
                }, t.prototype.getCameraList = function() {
                    return JSON.stringify(this.cameraList)
                }, t.prototype.setRotate = function(t) {
                    this.rotate = t
                }, t.prototype.setHTML5Camera = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, n, r, o, s, a, c, u, l, p, h, d, A = this;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.camera = t, e = this.cameraMap, !0, n = {
                                        audio: !1,
                                        video: {
                                            facingMode: "environment",
                                            advanced: [{
                                                width: {
                                                    min: 1600
                                                },
                                                height: {
                                                    min: 1200
                                                }
                                            }, {
                                                width: {
                                                    min: 1920
                                                },
                                                height: {
                                                    min: 1080
                                                }
                                            }, {
                                                width: {
                                                    min: 1280
                                                },
                                                height: {
                                                    min: 760
                                                }
                                            }, {
                                                width: {
                                                    min: 800
                                                },
                                                height: {
                                                    min: 600
                                                }
                                            }, {
                                                width: {
                                                    min: 640
                                                },
                                                height: {
                                                    min: 480
                                                }
                                            }]
                                        }
                                    }, t && "" !== e[t] ? (r = e[t], o = "string" == typeof r ? r : null, r && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? [4, navigator.mediaDevices.enumerateDevices()] : [3, 2]) : [3, 3];
                                case 1:
                                    if (s = (s = i.sent()).filter(function(t) {
                                            return "videoinput" == t.kind
                                        }), a = void 0, !(a = "string" == typeof r ? s.filter(function(t) {
                                            return t.label == r
                                        })[0] : s[r.index])) return alert("Could not connect to " + t + ". No device found."), [2];
                                    o = a.deviceId, i.label = 2;
                                case 2:
                                    n.video.deviceId = {
                                        exact: o
                                    }, i.label = 3;
                                case 3:
                                    return i.trys.push([3, 9, , 10]), [4, navigator.mediaDevices.getUserMedia(n)];
                                case 4:
                                    c = i.sent(), u = this.video, this.stream = c, l = window.URL || window.webkitURL, "srcObject" in u ? u.srcObject = c : u.src = l ? l.createObjectURL(c) : c, i.label = 5;
                                case 5:
                                    return i.trys.push([5, 7, , 8]), [4, u.play()];
                                case 6:
                                    return i.sent(), [3, 8];
                                case 7:
                                    return p = i.sent(), console.error("Camera display error", p), [3, 8];
                                case 8:
                                    return this.activeInput = u, this.connected = !0, this.triggeredLoop = !1, this.loopRunning || f(function() {
                                        return A.drawLoop()
                                    }), [3, 10];
                                case 9:
                                    return h = i.sent(), d = t || "your default camera", "ConstraintNotSatisfiedError" === h.name ? alert("Your browser could not connect to '" + d + "': scanning with this device is not supported") : "PermissionDeniedError" === h.name ? alert("The user has denied permission for connecting to '" + d + "'. To scan, refresh the page and allow camera access.") : "NotAllowedError" === h.name ? alert("The browser will not allow us to access " + d + ". The error message reported is: " + h.name + " - " + h.message) : alert("Could not connect to " + d + ": " + h.name + " - " + h.message), [3, 10];
                                case 10:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.setPlugin2Camera = function(t) {
                    this.triggeredLoop = !0, this.activeInput = this.image, this.camera = t, this.connected = !0, this.plugin2.setCamera(this.p2Cameras[t])
                }, t.prototype.setCamera = function(t) {
                    null !== this.camera && this.camera == t || (this.stopCamera(), this.p2Cameras[t] ? this.setPlugin2Camera(t) : this.setHTML5Camera(t))
                }, t.prototype.pause = function() {
                    this.paused = !0
                }, t.prototype.unpause = function() {
                    this.paused = !1
                }, t.prototype.stopCamera = function() {
                    if (this.plugin2 && this.plugin2.stopCamera && this.plugin2.stopCamera(), this.video.src = "", this.image.src = "", this.activeInput = null, this.stream && this.stream.getTracks)
                        for (var t = 0, e = this.stream.getTracks(); t < e.length; t++) {
                            e[t].stop()
                        } else this.stream && this.stream.stop && this.stream.stop();
                    this.blitter.clearVideo(), this.connected = !1, this.camera = null, this.drawn = !1
                }, t.prototype.getJpegDfd = function() {
                    return this.drawn ? (this.jpegDfd || (this.jpegDfd = u.newDeferred()), this.jpegDfd.promise) : u.newDeferred(!1).promise
                }, t.create = function(t, e, n, o) {
                    return r(this, void 0, void 0, function() {
                        var r;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, (r = new this(t, e, n, o))._readyDfd];
                                case 1:
                                    return i.sent(), [2, r]
                            }
                        })
                    })
                }, t
            }();
        ! function(t) {
            t.Rotate = l.CameraRotate
        }(d || (d = {})), t.exports = d
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = function() {
                return function(t) {
                    void 0 === t && (t = {});
                    for (var e = 0, n = r.keys(t); e < n.length; e++) {
                        var i = n[e];
                        this[i] = t[i]
                    }
                }
            }();
        e.Item = i
    }, function(t, e, n) {
        "use strict";
        var r = n(165);
        t.exports = r.FormDescription
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = function() {
                function t(e) {
                    void 0 === e && (e = {}), this.choices = this.choices || [], r.defaults(e, t.defaults);
                    for (var n = 0, i = r.keys(e); n < i.length; n++) {
                        var o = i[n];
                        this[o] = e[o]
                    }
                }
                return Object.defineProperty(t.prototype, "label", {
                    get: function() {
                        return this._label
                    },
                    set: function(t) {
                        this._label = String(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.defaults = {
                    ignore: !1
                }, t
            }();
        e.ItemDescription = i
    }, function(t, e, n) {
        "use strict";
        var r = {
            "0_sm": n(85).trim(),
            "1_sm": n(86).trim(),
            "2_sm": n(87).trim(),
            "3_sm": n(88).trim(),
            "4_sm": n(89).trim(),
            "5_sm": n(90).trim(),
            "6_sm": n(91).trim(),
            "7_sm": n(92).trim(),
            "8_sm": n(93).trim(),
            "9_sm": n(94).trim(),
            a_sm: n(95).trim(),
            b_sm: n(96).trim(),
            c_sm: n(97).trim(),
            d_sm: n(98).trim(),
            e_sm: n(99).trim(),
            f_sm: n(100).trim(),
            g_sm: n(101).trim(),
            h_sm: n(102).trim(),
            i_sm: n(103).trim(),
            j_sm: n(104).trim(),
            k_sm: n(105).trim(),
            l_sm: n(106).trim(),
            m_sm: n(107).trim(),
            n_sm: n(108).trim(),
            o_sm: n(109).trim(),
            p_sm: n(110).trim(),
            q_sm: n(111).trim(),
            r_sm: n(112).trim(),
            s_sm: n(113).trim(),
            t_sm: n(114).trim(),
            u_sm: n(115).trim(),
            v_sm: n(116).trim(),
            w_sm: n(117).trim(),
            x_sm: n(118).trim(),
            y_sm: n(119).trim(),
            z_sm: n(120).trim(),
            formlogo: n(121).trim(),
            blank_sm: n(122).trim(),
            bubbled_sm: n(123).trim(),
            bg: n(124).trim(),
            plane: n(125).trim(),
            watermark: n(126).trim()
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0);
        e.isLessThan = function(t, e) {
            for (var n = t.split("."); n.length < 4;) n.push("0");
            for (var i = e.split("."); i.length < 4;) i.push("0");
            for (var o = r.map(n, function(t) {
                    return parseInt(t, 10) || 0
                }), s = r.map(i, function(t) {
                    return parseInt(t, 10) || 0
                }), a = 0; a < 4; ++a) {
                if (o[a] < s[a]) return !0;
                if (o[a] > s[a]) return !1
            }
            return !1
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = n(34),
            o = n(18),
            s = n(5),
            a = n(20),
            c = n(38),
            u = n(19),
            l = function(t) {
                function e(e) {
                    t.call(this, e), this.destination = e
                }
                return r(e, t), e
            }(o.Subscriber);
        e.SubjectSubscriber = l;
        var p = function(t) {
            function e() {
                t.call(this), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
            }
            return r(e, t), e.prototype[u.rxSubscriber] = function() {
                return new l(this)
            }, e.prototype.lift = function(t) {
                var e = new f(this, this);
                return e.operator = t, e
            }, e.prototype.next = function(t) {
                if (this.closed) throw new a.ObjectUnsubscribedError;
                if (!this.isStopped)
                    for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++) r[i].next(t)
            }, e.prototype.error = function(t) {
                if (this.closed) throw new a.ObjectUnsubscribedError;
                this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++) r[i].error(t);
                this.observers.length = 0
            }, e.prototype.complete = function() {
                if (this.closed) throw new a.ObjectUnsubscribedError;
                this.isStopped = !0;
                for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                this.observers.length = 0
            }, e.prototype.unsubscribe = function() {
                this.isStopped = !0, this.closed = !0, this.observers = null
            }, e.prototype._trySubscribe = function(e) {
                if (this.closed) throw new a.ObjectUnsubscribedError;
                return t.prototype._trySubscribe.call(this, e)
            }, e.prototype._subscribe = function(t) {
                if (this.closed) throw new a.ObjectUnsubscribedError;
                return this.hasError ? (t.error(this.thrownError), s.Subscription.EMPTY) : this.isStopped ? (t.complete(), s.Subscription.EMPTY) : (this.observers.push(t), new c.SubjectSubscription(this, t))
            }, e.prototype.asObservable = function() {
                var t = new i.Observable;
                return t.source = this, t
            }, e.create = function(t, e) {
                return new f(t, e)
            }, e
        }(i.Observable);
        e.Subject = p;
        var f = function(t) {
            function e(e, n) {
                t.call(this), this.destination = e, this.source = n
            }
            return r(e, t), e.prototype.next = function(t) {
                var e = this.destination;
                e && e.next && e.next(t)
            }, e.prototype.error = function(t) {
                var e = this.destination;
                e && e.error && this.destination.error(t)
            }, e.prototype.complete = function() {
                var t = this.destination;
                t && t.complete && this.destination.complete()
            }, e.prototype._subscribe = function(t) {
                return this.source ? this.source.subscribe(t) : s.Subscription.EMPTY
            }, e
        }(p);
        e.AnonymousSubject = f
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = n(35),
            o = n(5),
            s = n(37),
            a = n(19),
            c = function(t) {
                function e(n, r, i) {
                    switch (t.call(this), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                        case 0:
                            this.destination = s.empty;
                            break;
                        case 1:
                            if (!n) {
                                this.destination = s.empty;
                                break
                            }
                            if ("object" == typeof n) {
                                n instanceof e ? (this.destination = n, this.destination.add(this)) : (this.syncErrorThrowable = !0, this.destination = new u(this, n));
                                break
                            }
                            default:
                                this.syncErrorThrowable = !0, this.destination = new u(this, n, r, i)
                    }
                }
                return r(e, t), e.prototype[a.rxSubscriber] = function() {
                    return this
                }, e.create = function(t, n, r) {
                    var i = new e(t, n, r);
                    return i.syncErrorThrowable = !1, i
                }, e.prototype.next = function(t) {
                    this.isStopped || this._next(t)
                }, e.prototype.error = function(t) {
                    this.isStopped || (this.isStopped = !0, this._error(t))
                }, e.prototype.complete = function() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }, e.prototype.unsubscribe = function() {
                    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                }, e.prototype._next = function(t) {
                    this.destination.next(t)
                }, e.prototype._error = function(t) {
                    this.destination.error(t), this.unsubscribe()
                }, e.prototype._complete = function() {
                    this.destination.complete(), this.unsubscribe()
                }, e.prototype._unsubscribeAndRecycle = function() {
                    var t = this._parent,
                        e = this._parents;
                    return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this
                }, e
            }(o.Subscription);
        e.Subscriber = c;
        var u = function(t) {
            function e(e, n, r, o) {
                var a;
                t.call(this), this._parentSubscriber = e;
                var c = this;
                i.isFunction(n) ? a = n : n && (a = n.next, r = n.error, o = n.complete, n !== s.empty && (c = Object.create(n), i.isFunction(c.unsubscribe) && this.add(c.unsubscribe.bind(c)), c.unsubscribe = this.unsubscribe.bind(this))), this._context = c, this._next = a, this._error = r, this._complete = o
            }
            return r(e, t), e.prototype.next = function(t) {
                if (!this.isStopped && this._next) {
                    var e = this._parentSubscriber;
                    e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
            }, e.prototype.error = function(t) {
                if (!this.isStopped) {
                    var e = this._parentSubscriber;
                    if (this._error) e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                    else {
                        if (!e.syncErrorThrowable) throw this.unsubscribe(), t;
                        e.syncErrorValue = t, e.syncErrorThrown = !0, this.unsubscribe()
                    }
                }
            }, e.prototype.complete = function() {
                var t = this;
                if (!this.isStopped) {
                    var e = this._parentSubscriber;
                    if (this._complete) {
                        var n = function() {
                            return t._complete.call(t._context)
                        };
                        e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                    } else this.unsubscribe()
                }
            }, e.prototype.__tryOrUnsub = function(t, e) {
                try {
                    t.call(this._context, e)
                } catch (t) {
                    throw this.unsubscribe(), t
                }
            }, e.prototype.__tryOrSetError = function(t, e, n) {
                try {
                    e.call(this._context, n)
                } catch (e) {
                    return t.syncErrorValue = e, t.syncErrorThrown = !0, !0
                }
                return !1
            }, e.prototype._unsubscribe = function() {
                var t = this._parentSubscriber;
                this._context = null, this._parentSubscriber = null, t.unsubscribe()
            }, e
        }(c)
    }, function(t, e, n) {
        "use strict";
        var r = n(8).root.Symbol;
        e.rxSubscriber = "function" == typeof r && "function" == typeof r.for ? r.for("rxSubscriber") : "@@rxSubscriber", e.$$rxSubscriber = e.rxSubscriber
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = function(t) {
                function e() {
                    var e = t.call(this, "object unsubscribed");
                    this.name = e.name = "ObjectUnsubscribedError", this.stack = e.stack, this.message = e.message
                }
                return r(e, t), e
            }(Error);
        e.ObjectUnsubscribedError = i
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            i = n(79),
            o = n(40),
            s = n(1);
        t.exports = function(t) {
            var e = s.newDeferred(),
                n = !1,
                a = t.getChallenge(),
                c = document.URL,
                u = -1,
                l = -1,
                p = 0,
                f = 5,
                h = "us",
                d = "https://downloads.gradecam.com";
            window._GCREGION && (h = window._GCREGION), "asia" == h && (d = "https://downloads.gradecam.com");
            var A = d + "/auth/auth.js",
                g = {
                    challenge: a,
                    url: c
                };
            return r.extend(g, o.getData()), o.setNum(o.SCAN_COUNT, 0),
                function r() {
                    // HACK
                    let r = "JSONPCallback_0('8%5DZ%5D%5D%5D%3BoN%3A60vzz1r%5BIn4uXQM%5CI91RVeKYyRPyL@3%3CRRsUx%3Fsz7%3F%3A7xD%5D%3CF0Pc5f%60dZAZ21ARdXwgL3%60%3DGJ6%5EHcDrY27%3F1rR2QXQkL%3DTV86pb%5DWd96TzIS%5BE4%5DYtvqA4');";
         
                    n || (r = unescape(r), t.setChallengeResponse(r), e.resolve(t), n = !0), -1 != u && (clearTimeout(u), u = -1), -1 != l && (clearTimeout(l), l = -1)

                    // i.fetch(A, g).then(function(r) {
                    //     n || (r = unescape(r), t.setChallengeResponse(r), e.resolve(t), n = !0), -1 != u && (clearTimeout(u), u = -1), -1 != l && (clearTimeout(l), l = -1)
                    // })
                    
                    u = ++p <= f ? setTimeout(r, 1e3) : -1
                }(), setTimeout(function() {
                    n || e.reject(new Error("Timed out"))
                }, 15e3), e.promise
        }
    }, function(t, e, n) {
        (function(e) {
            ! function(n) {
                var r = setTimeout;

                function i() {}

                function o(t) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], p(t, this)
                }

                function s(t, e) {
                    for (; 3 === t._state;) t = t._value;
                    0 !== t._state ? (t._handled = !0, o._immediateFn(function() {
                        var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                        if (null !== n) {
                            var r;
                            try {
                                r = n(t._value)
                            } catch (t) {
                                return void c(e.promise, t)
                            }
                            a(e.promise, r)
                        } else(1 === t._state ? a : c)(e.promise, t._value)
                    })) : t._deferreds.push(e)
                }

                function a(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof o) return t._state = 3, t._value = e, void u(t);
                            if ("function" == typeof n) return void p((r = n, i = e, function() {
                                r.apply(i, arguments)
                            }), t)
                        }
                        t._state = 1, t._value = e, u(t)
                    } catch (e) {
                        c(t, e)
                    }
                    var r, i
                }

                function c(t, e) {
                    t._state = 2, t._value = e, u(t)
                }

                function u(t) {
                    2 === t._state && 0 === t._deferreds.length && o._immediateFn(function() {
                        t._handled || o._unhandledRejectionFn(t._value)
                    });
                    for (var e = 0, n = t._deferreds.length; e < n; e++) s(t, t._deferreds[e]);
                    t._deferreds = null
                }

                function l(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
                }

                function p(t, e) {
                    var n = !1;
                    try {
                        t(function(t) {
                            n || (n = !0, a(e, t))
                        }, function(t) {
                            n || (n = !0, c(e, t))
                        })
                    } catch (t) {
                        if (n) return;
                        n = !0, c(e, t)
                    }
                }
                o.prototype.catch = function(t) {
                    return this.then(null, t)
                }, o.prototype.then = function(t, e) {
                    var n = new this.constructor(i);
                    return s(this, new l(t, e, n)), n
                }, o.all = function(t) {
                    var e = Array.prototype.slice.call(t);
                    return new o(function(t, n) {
                        if (0 === e.length) return t([]);
                        var r = e.length;

                        function i(o, s) {
                            try {
                                if (s && ("object" == typeof s || "function" == typeof s)) {
                                    var a = s.then;
                                    if ("function" == typeof a) return void a.call(s, function(t) {
                                        i(o, t)
                                    }, n)
                                }
                                e[o] = s, 0 == --r && t(e)
                            } catch (t) {
                                n(t)
                            }
                        }
                        for (var o = 0; o < e.length; o++) i(o, e[o])
                    })
                }, o.resolve = function(t) {
                    return t && "object" == typeof t && t.constructor === o ? t : new o(function(e) {
                        e(t)
                    })
                }, o.reject = function(t) {
                    return new o(function(e, n) {
                        n(t)
                    })
                }, o.race = function(t) {
                    return new o(function(e, n) {
                        for (var r = 0, i = t.length; r < i; r++) t[r].then(e, n)
                    })
                }, o._immediateFn = "function" == typeof e && function(t) {
                    e(t)
                } || function(t) {
                    r(t, 0)
                }, o._unhandledRejectionFn = function(t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                }, o._setImmediateFn = function(t) {
                    o._immediateFn = t
                }, o._setUnhandledRejectionFn = function(t) {
                    o._unhandledRejectionFn = t
                }, t.exports ? t.exports = o : n.Promise || (n.Promise = o)
            }(this)
        }).call(this, n(80).setImmediate)
    }, function(t, e, n) {
        "use strict";
        var r = {},
            i = function(t) {
                t = t.toLowerCase();
                var e = /(edge)[ \/]([\w.]+)/.exec(t) || /(opr)[\/]([\w.]+)/.exec(t) || /(chrome)[ \/]([\w.]+)/.exec(t) || /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [],
                    n = /(ipad)/.exec(t) || /(iphone)/.exec(t) || /(ipod)/.exec(t) || /(android)/.exec(t) || /(windows phone)/.exec(t) || /(win)/.exec(t) || /(mac)/.exec(t) || /(linux)/.exec(t) || /(cros)/i.exec(t) || [];
                return {
                    browser: e[3] || e[1] || "",
                    version: e[2] || "0",
                    platform: n[0] || ""
                }
            }(window.navigator.userAgent);
        if (i.browser && (r[i.browser] = !0, r.version = i.version, r.versionNumber = parseInt(i.version, 10)), i.platform && (r[i.platform] = !0), (r.android || r.ipad || r.iphone || r["windows phone"]) && (r.mobile = !0), (r.ipad || r.iphone || r.ipod) && (r.ios = !0), (r.cros || r.mac || r.linux || r.win) && (r.desktop = !0), (r.chrome || r.opr || r.safari) && (r.webkit = !0), r.rv) {
            i.browser = "msie", r.msie = !0
        }
        if (r.opr) {
            i.browser = "opera", r.opera = !0
        }
        if (r.safari && r.android) {
            i.browser = "android", r.android = !0
        }
        void 0 !== window.external && void 0 !== window.external.msActiveXFilteringEnabled && window.external.msActiveXFilteringEnabled() && (r.pluginsDisabled = !0);
        r.msie && ! function() {
            var t = null,
                e = null;
            try {
                new ActiveXObject("")
            } catch (e) {
                t = e.name
            }
            try {
                e = !!new ActiveXObject("htmlfile")
            } catch (t) {
                e = !1
            }
            return e = "ReferenceError" == t || 0 != e
        }() ? r.pluginsDisabled = !0 : r.chrome && parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) >= 42 ? r.pluginsDisabled = !0 : r.mozilla && r.versionNumber >= 52 ? (r.versionNumber > 52 || window.navigator.plugins.length <= 1) && (r.pluginsDisabled = !0) : r.safari && parseFloat(window.navigator.appVersion.match(/Version\/([0-9\.]+)/)[1]) >= 12 && (r.pluginsDisabled = !0), r.name = i.browser, r.platform = i.platform, t.exports = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t[t.None = 0] = "None", t[t.Left90 = 1] = "Left90", t[t.Full180 = 2] = "Full180", t[t.Right90 = 3] = "Right90"
            }(e.CameraRotate || (e.CameraRotate = {}))
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(1),
            s = n(0),
            a = n(128),
            c = n(130),
            u = n(131),
            l = n(132),
            p = n(2),
            f = n(45),
            h = n(26),
            d = p.get(),
            A = o.newDeferred();
        A.resolve();
        var g = A.promise,
            m = {
                ImgReader: a,
                RawReader: c
            },
            y = {},
            v = {
                raw: "RawReader",
                jpg: "ImgReader",
                jpeg: "ImgReader",
                gif: "ImgReader",
                png: "ImgReader",
                svg: "ImgReader",
                bmp: "ImgReader"
            };

        function b(t) {
            var e = t.split(".");
            return 1 === e.length || "" === e[0] && 2 === e.length ? "" : e.pop().toLowerCase()
        }
        var w = function() {
                function t(t) {
                    this.curObj = null, this.error = null, d.info("Creating fileQueue to handle array: ", t), this.files = s.toArray(t)
                }
                return t.prototype.next = function() {
                    if (this.error instanceof Error && (this.curObj = null), this.curObj && (this.curObj.next() || (this.curObj.destroy(), this.curObj = null)), !this.files.length && !this.curObj) return !1;
                    if (!this.curObj) {
                        var t = this.files.shift(),
                            e = b(t.name),
                            n = (r = v[e]) ? m[r] : null;
                        n ? (this.curObj = new n(t), this.curObj.next(), this.error = null) : this.error = new Error(t.name)
                    }
                    var r;
                    return !!this.curObj || !!this.error
                }, t.prototype.current = function() {
                    return this.curObj
                }, t
            }(),
            _ = function() {
                function t(t, e, n) {
                    this.fileArray = t, this.displayFunc = e, this.processFunc = n, this.fileQ = new w(this.fileArray)
                }
                return t.prototype.next = function(t, e) {
                    return r(this, void 0, void 0, function() {
                        var n, r, s, a, c, l, p, A, g, m, y;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.fileQ.next() ? (n = this.fileQ.current(), (r = this.fileQ.error) instanceof Error ? (d.warn("Could not process file: ", r.toString()), t([{
                                        error: !0,
                                        type: "fileReader",
                                        msg: r.message
                                    }]), [3, 11]) : [3, 1]) : (d.info("Finished processing files"), [2, !1]);
                                case 1:
                                    s = [], a = e ? [f.configurations[0]] : f.configurations, c = !0, l = 0, p = a, i.label = 2;
                                case 2:
                                    if (!(l < p.length)) return [3, 10];
                                    A = p[l], i.label = 3;
                                case 3:
                                    return i.trys.push([3, 8, , 9]), 0 !== A.size || n.supportsNativeRes ? [3, 4] : (d.warn("Could not process at native resolution for file: ", n.toString()), [3, 7]);
                                case 4:
                                    return [4, n.getData(A.size)];
                                case 5:
                                    return g = i.sent(), u.detectBW(g) && s.push({
                                        error: !0,
                                        type: "bw",
                                        fileName: n.getName()
                                    }), h.darken(g.data.data, A.darkness), d.info("Read file: ", n.getName()), c && (c = !1, this.displayFunc(g.obj)), [4, o.PromiseAll([this.processFunc(g.data)])];
                                case 6:
                                    (m = i.sent()[0]) ? s.push(JSON.parse(m.replace(/'/g, '"'))): (d.info("No output for " + n.getName() + "; rejecting"), s.push({
                                        error: !0,
                                        type: "noOutput",
                                        fileName: n.getName()
                                    })), i.label = 7;
                                case 7:
                                    return [3, 9];
                                case 8:
                                    return y = i.sent(), d.info("Could not read file: ", n.getName(), "with error:", y.toString()), s.push({
                                        error: !0,
                                        type: "readError",
                                        fileName: n.getName(),
                                        msg: y.toString()
                                    }), [3, 9];
                                case 9:
                                    return l++, [3, 2];
                                case 10:
                                    t(s), i.label = 11;
                                case 11:
                                    return [2, !0]
                            }
                        })
                    })
                }, t.getSupportedTypes = function() {
                    return s.keys(v)
                }, t._registerFileReader = function(t, e) {
                    m[t] = e
                }, t.registerFileHandler = function(t, e) {
                    s.each(t, function(t) {
                        v[t] = e
                    })
                }, t.ensureFileLoaders = function(t) {
                    var e = s.map(t, function(t) {
                            return b(t.name)
                        }),
                        n = s.map(e, function(t) {
                            return function(t) {
                                if (v[t]) {
                                    if (m[v[t]]) return g;
                                    if (y[v[t]]) return y[v[t]].promise;
                                    var e = o.newDeferred();
                                    return y[v[t]] = e, l.l([v[t], function() {
                                        y[v[t]] == e && delete y[v[t]], e.resolve()
                                    }]), e.promise
                                }
                                return g
                            }(t)
                        });
                    return o.PromiseAll(n)
                }, t
            }();
        t.exports = _
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return n + r * t
        }

        function i(t, e, n, r, i, a) {
            return a ? s(t, e, n, r, i) : o(t, e, n, r, i)
        }

        function o(t, e, n, i, o) {
            i < 0 && (i = 0), i >= e && (i = e - 1), o < 0 && (o = 0), o >= n && (o = n - 1);
            var s = r(e, 0, i, o);
            return (t[s *= 4] + t[s + 1] + t[s + 2]) / 3
        }

        function s(t, e, n, r, i) {
            return (o(t, e, n, r, i) + o(t, e, n, r - 1, i) + o(t, e, n, r + 1, i) + o(t, e, n, r, i - 1) + o(t, e, n, r, i + 1)) / 5
        }

        function a(t, e) {
            return t > e ? 255 * (t - e) / (255 - e) : 0
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getIdx = r, e.getPixel = i, e.getGrayscalePixel = o, e.getBlurredPixel = s, e.getGrayscaleBuffer = function(t, e, n, o) {
            for (var s = new Uint8Array(t.length / 4), a = 0; a < e; ++a)
                for (var c = 0; c < n; ++c) s[r(e, 0, a, c)] = i(t, e, n, a, c, o);
            return s
        }, e.darken = function(t, e) {
            if (!e) return t;
            for (var n = 0; n < t.length; n += 4) t[n] = a(t[n], e), t[n + 1] = a(t[n + 1], e), t[n + 2] = a(t[n + 2], e);
            return t
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(47),
            i = n(0);

        function o(t) {
            for (var e = t; e.parentNode;) e = e.parentNode;
            return e
        }
        e.domLoaded = function(t) {
            var e;
            if (t = i.once(t), r.hasGCMobile() || !document.readyState || "complete" != (e = document.readyState) && "interactive" != e && "loaded" != e)
                /*@cc_on
                        @if (@_win32 || @_win64)
                        document.write('<script id="ieScriptLoad" defer src="//:"><\/script>');
                        document.getElementById('ieScriptLoad').onreadystatechange = function() {
                        if (this.readyState == 'complete') {
                        callback();
                        }
                        };
                        return;
                        @end @*/
                if (r.hasGCMobile()) window.gcmobilesdk ? setTimeout(t, 0) : window.gcmobilesdk_loadCallback = t;
                else {
                    if (document.addEventListener) document.addEventListener("DOMContentLoaded", t, !1);
                    else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) var n = setInterval(function() {
                        /loaded|complete/i.test(document.readyState) && (t(), clearInterval(n))
                    }, 10);
                    var o = t;
                    if (window.onload) {
                        var s = window.onload;
                        o = function() {
                            s.apply(this, arguments), t.apply(this, arguments)
                        }
                    }
                    window.onload = o
                }
            else setTimeout(t, 0)
        }, e.findUltimateAncestor = o, e.isInDOMTree = function(t) {
            return !!o(t).body
        }, e.$ = function(t) {
            return document.getElementById(t)
        }
    }, function(t, e, n) {
        "use strict";
        var r, i = "undefined" == typeof window,
            o = i ? n(49).FormServer1Manager : n(158).Form1Manager,
            s = i ? n(49).FormServer2Manager : n(161).Form2Manager;
        ! function(t) {
            t.forms = new o, t.forms2 = new s
        }(r || (r = {})), t.exports = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = function() {
                function t(e) {
                    void 0 === e && (e = {}), r.defaults(e, t.defaults);
                    for (var n = 0, i = r.keys(e || {}); n < i.length; n++) {
                        var o = i[n];
                        this[o] = e[o]
                    }
                }
                return t.defaults = {
                    zone: 0
                }, t
            }();
        e.BlockDescription = i
    }, function(t, e, n) {
        "use strict";
        var r = n(0);
        t.exports = function(t) {
            for (var e = r.clone(t).sort(function(t, e) {
                    return t - e
                }), n = 0, i = 0, o = 0, s = 0, a = 0, c = 0, u = 0, l = e; u < l.length; u++) n += A = l[u], i += A * A, o += 1;
            for (var p = 1 / 0, f = null, h = 0, d = e; h < d.length; h++) {
                var A;
                if (n -= A = d[h], i -= A * A, 0 != (o -= 1)) {
                    var g = i / o - n * n / (o * o),
                        m = (a += A * A) / (c += 1) - (s += A) * s / (c * c),
                        y = (c * m + o * g) / (o + c);
                    g < 0 && (g = 0), y < p && (p = y, f = {
                        threshold: A,
                        threshold_unmarked_sigma: (A - s / c) / Math.sqrt(m),
                        marked_average: n / o,
                        marked_count: o,
                        marked_sigma: Math.sqrt(g),
                        unmarked_average: s / c,
                        unmarked_count: c,
                        unmarked_sigma: Math.sqrt(m)
                    })
                }
            }
            return f
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            i = n(28),
            o = n(175),
            s = n(54),
            a = n(1),
            c = {};

        function u(t, e) {
            var n = r.find(t, function(t) {
                return s[t]
            });
            if (n) return new Promise(function(t) {
                return t(s[n])
            });
            var o = JSON.stringify(t);
            if (c[o]) return new Promise(function(t) {
                return t(c[o])
            });
            var a = e ? i.forms2 : i.forms,
                u = e ? r.map(t, function(t) {
                    return String(t)
                }) : r.map(t, function(t) {
                    return Number(t)
                }),
                l = a.fetchFormData(u).then(function(e) {
                    if (!e || 1 == e.empty) throw r.each(t, function(t) {
                        s["" + t] = null
                    }), new Error("Form Data Error: Form not recognized");
                    for (var n = function(t) {
                            r.each(t.form_id, function(n, r) {
                                if (2 == e.desc_v) {
                                    e.form_description;
                                    var i = void 0,
                                        o = void 0,
                                        a = void 0,
                                        c = void 0,
                                        u = void 0;
                                    if ("tabular" === e.type) {
                                        var l = e.form_description.length || 1,
                                            p = t.offsets.length || 1;
                                        u = r % l;
                                        var f = Math.floor(r / l) % p,
                                            h = t.rows && t.rows.length;
                                        o = t.offsets[f], c = (t.offsets.length - 1 > f ? t.offsets[f + 1] : h) - o, a = e.form_description[u], i = 0;
                                        for (var d = 0; d < u; d++) i += e.form_description[d].length
                                    } else i = t.offsets[r], a = e.form_description[r];
                                    var A = {
                                        desc_v: e.desc_v,
                                        form_id: n,
                                        page: r + 1,
                                        pageCount: t.form_id.length,
                                        startOffset: i,
                                        rowCount: c,
                                        rowOffset: o,
                                        form_description: a,
                                        instance_data: t.data && JSON.parse(t.data),
                                        rows: t.rows,
                                        batch_data: e.batch_data && JSON.parse(e.batch_data),
                                        batch_form_description: e.form_description,
                                        exam_version: t.exam_version,
                                        type: e.type
                                    };
                                    s["" + n] = A
                                } else {
                                    e.form_description, !(A = {
                                        desc_v: e.desc_v,
                                        form_id: n,
                                        page: r + 1,
                                        pageCount: t.form_id.length,
                                        startOffset: t.offsets[r],
                                        form_description: e.form_description[r],
                                        instance_data: t.data && JSON.parse(t.data),
                                        batch_data: e.batch_data && JSON.parse(e.batch_data),
                                        batch_form_description: e.form_description,
                                        exam_version: t.exam_version
                                    }).exam_version && A.batch_data && A.batch_data.exam_version && (A.exam_version = A.batch_data.exam_version.toString()), s["" + n] = A
                                }
                            })
                        }, i = 0, o = e.instances; i < o.length; i++) {
                        n(o[i])
                    }
                    var a = r.find(t, function(t) {
                            return s[t]
                        }),
                        c = s[a];
                    return r.each(t, function(t) {
                        s["" + t] = c
                    }), c
                }, function(t) {
                    throw delete c[o], t
                });
            return c[o] = l, l
        }
        t.exports = function(t) {
            if (t.barcodes) return u([t.barcodes], !0);
            if (t.fc_blocks && 1 == t.fc_blocks.length) {
                var e = t.fc_blocks[0],
                    n = o.decodeFC(e.intensities, s);
                return n && n.length ? u(n, !1) : a.rejected(new Error("Form Data Error: Could not read form code."))
            }
            return a.newDeferred(null).promise
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            i = n(4),
            o = function() {
                function t(t) {
                    this.formMode = t, this.lastFailure = ""
                }
                return t.prototype.findIDBlock = function(t) {
                    var e = r.max(t.blocks, function(t) {
                        return t.right - t.top
                    });
                    return e && 10 === e.rows ? e : null
                }, t.prototype.createIDBlockDescription = function(t) {
                    return new i.FormDescription.NumberBlockDescription({
                        type: "number",
                        form_area: "ids",
                        choices: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                        zone: 0,
                        row: t.row,
                        col: t.col,
                        rows: t.rows,
                        cols: t.cols,
                        label: "GradeCam ID"
                    })
                }, t.prototype.numberRange = function(t, e) {
                    var n = r.range(t, t + e);
                    return r.map(n, function(t) {
                        return String(t)
                    })
                }, t.prototype.letterRange = function(t, e) {
                    var n = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                        i = r.indexOf(n, t);
                    return r.map(r.range(i, i + e), function(t) {
                        return n[t]
                    })
                }, t
            }();
        t.exports = o
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = ["_addFormToCache", "_debugScan", "_debugScanById", "_setLogLevel", "_simulateScan", "bind", "clearTyperStrings", "enableHighRes", "getCameraList", "getElement", "getGCI", "getGciAsync", "getJpegAsync", "getJPEGImage", "getLastFormDescription", "getMode", "getOption", "getOptions", "getTyperAvailability", "getTyperOptions", "getTyperConfig", "getExtensionVersion", "getVersion", "initTyper", "isAtLeastVersion", "isInstalled", "requireSupport", "requireVersion", "scanFilesAsync", "setActive", "setDesiredVersion", "setLicensingInfo", "setMode", "setModuleOption", "setModuleOrder", "setOptions", "setReturnURL", "setShowMessages", "setTransparency", "setTyperStrings", "setWebTyperId", "getWebTyperLink", "copyTyperToClipboard", "setValidateCallback", "startCamera", "stopCamera", "supports", "unbind"],
            i = ["curCamera$", "formcode$", "scan$"],
            o = null;
        e.getExposedPublicAPI = function(t) {
            if (o) return o;
            o = {};
            for (var e = 0, n = r; e < n.length; e++) {
                var s = n[e];
                o[s] = t[s].bind(t)
            }
            for (var a = 0, c = i; a < c.length; a++) {
                var u = c[a];
                o[u] = t[u]
            }
            return o.getSDK = function(e) {
                return "internal" === e ? t : o
            }, o
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(8),
            i = n(64),
            o = n(69),
            s = function() {
                function t(t) {
                    this._isScalar = !1, t && (this._subscribe = t)
                }
                return t.prototype.lift = function(e) {
                    var n = new t;
                    return n.source = this, n.operator = e, n
                }, t.prototype.subscribe = function(t, e, n) {
                    var r = this.operator,
                        o = i.toSubscriber(t, e, n);
                    if (r ? r.call(o, this.source) : o.add(this.source ? this._subscribe(o) : this._trySubscribe(o)), o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
                    return o
                }, t.prototype._trySubscribe = function(t) {
                    try {
                        return this._subscribe(t)
                    } catch (e) {
                        t.syncErrorThrown = !0, t.syncErrorValue = e, t.error(e)
                    }
                }, t.prototype.forEach = function(t, e) {
                    var n = this;
                    if (e || (r.root.Rx && r.root.Rx.config && r.root.Rx.config.Promise ? e = r.root.Rx.config.Promise : r.root.Promise && (e = r.root.Promise)), !e) throw new Error("no Promise impl found");
                    return new e(function(e, r) {
                        var i;
                        i = n.subscribe(function(e) {
                            if (i) try {
                                t(e)
                            } catch (t) {
                                r(t), i.unsubscribe()
                            } else t(e)
                        }, r, e)
                    })
                }, t.prototype._subscribe = function(t) {
                    return this.source.subscribe(t)
                }, t.prototype[o.observable] = function() {
                    return this
                }, t.create = function(e) {
                    return new t(e)
                }, t
            }();
        e.Observable = s
    }, function(t, e, n) {
        "use strict";
        e.isFunction = function(t) {
            return "function" == typeof t
        }
    }, function(t, e, n) {
        "use strict";
        e.errorObject = {
            e: {}
        }
    }, function(t, e, n) {
        "use strict";
        e.empty = {
            closed: !0,
            next: function(t) {},
            error: function(t) {
                throw t
            },
            complete: function() {}
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = function(t) {
                function e(e, n) {
                    t.call(this), this.subject = e, this.subscriber = n, this.closed = !1
                }
                return r(e, t), e.prototype.unsubscribe = function() {
                    if (!this.closed) {
                        this.closed = !0;
                        var t = this.subject,
                            e = t.observers;
                        if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                            var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
                        }
                    }
                }, e
            }(n(5).Subscription);
        e.SubjectSubscription = i
    }, function(t, e) {
        var n, r, i = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                n = o
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (t) {
                r = s
            }
        }();
        var c, u = [],
            l = !1,
            p = -1;

        function f() {
            l && c && (l = !1, c.length ? u = c.concat(u) : p = -1, u.length && h())
        }

        function h() {
            if (!l) {
                var t = a(f);
                l = !0;
                for (var e = u.length; e;) {
                    for (c = u, u = []; ++p < e;) c && c[p].run();
                    p = -1, e = u.length
                }
                c = null, l = !1,
                    function(t) {
                        if (r === clearTimeout) return clearTimeout(t);
                        if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                        try {
                            r(t)
                        } catch (e) {
                            try {
                                return r.call(null, t)
                            } catch (e) {
                                return r.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function d(t, e) {
            this.fun = t, this.array = e
        }

        function A() {}
        i.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            u.push(new d(t, e)), 1 !== u.length || l || a(h)
        }, d.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = A, i.addListener = A, i.once = A, i.off = A, i.removeListener = A, i.removeAllListeners = A, i.emit = A, i.prependListener = A, i.prependOnceListener = A, i.listeners = function(t) {
            return []
        }, i.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    }, function(t, e, n) {
        "use strict";
        var r, i, o = n(41),
            s = n(0);
        window.localStorage ? (r = function() {
            localStorage.setItem("sdkMeta", JSON.stringify(this.fields))
        }, i = function() {
            return JSON.parse(localStorage.getItem("sdkMeta"))
        }) : (r = function() {
            o.set("sdkMeta", JSON.stringify(this.fields), 365)
        }, i = function() {
            return JSON.parse(o.get("sdkMeta"))
        });
        var a = new(function() {
            function t(t) {
                this.fields = {}, this.SCAN_COUNT = "sc", s.extend(this.fields, t || {}), this.saveMeta = r, this.loadMeta = i, this.fields = this.loadMeta() || this.fields
            }
            return t.prototype.saveMeta = function() {}, t.prototype.loadMeta = function() {}, t.prototype.getNum = function(t) {
                var e = this.fields[t] || "0";
                return parseInt(e, 10)
            }, t.prototype.setNum = function(t, e) {
                this.fields[t] = "" + e
            }, t.prototype.get = function(t) {
                return this.fields[t]
            }, t.prototype.set = function(t, e) {
                this.fields[t] = e
            }, t.prototype.increment = function(t) {
                this.setNum(t, this.getNum(t) + 1)
            }, t.prototype.save = function() {
                this.saveMeta()
            }, t.prototype.getData = function() {
                return this.fields
            }, t
        }());
        t.exports = a
    }, function(t, e, n) {
        "use strict";
        /*!
         * Cookie Monster - A javascript cookie library
         * v0.0.3
         * https://github.com/jgallen23/cookie-monster
         * copyright JGA 2011
         * MIT License
         */
        var r;
        ! function(t) {
            function e(t, e, n, r) {
                var i = new Date,
                    o = "",
                    s = typeof e,
                    a = "";
                if (r = r || "/", n && (i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), o = "; expires=" + i.toUTCString()), "object" === s && "undefined" != s) {
                    if (!("JSON" in window)) throw "Bummer, your browser doesn't support JSON parsing.";
                    a = JSON.stringify({
                        v: e
                    })
                } else a = encodeURIComponent(e);
                document.cookie = t + "=" + a + o + "; path=" + r
            }
            t.set = e, t.get = function(t) {
                for (var e = t + "=", n = document.cookie.split(";"), r = "", i = {}, o = 0; o < n.length; o++) {
                    for (var s = n[o];
                        " " == s.charAt(0);) s = s.substring(1, s.length);
                    if (0 === s.indexOf(e)) {
                        if ("{" == (r = s.substring(e.length, s.length)).substring(0, 1) && "v" in (i = JSON.parse(r))) return i.v;
                        if ("undefined" == r) return;
                        return decodeURIComponent(r)
                    }
                }
                return null
            }, t.remove = function(t) {
                e(t, "", -1)
            }
        }(r || (r = {})), t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            a = n(3),
            c = n(24),
            u = n(0),
            l = n(15),
            p = n(83),
            f = n(7),
            h = n(2),
            d = n(1),
            A = h.get(),
            g = 0,
            m = {},
            y = 25,
            v = !0;

        function b() {
            var t = this,
                e = m[t._pid],
                n = t.el;
            if ((v = !v) && n && n.style && (t.isVisible ? (n.style.width = v ? "99.999%" : "100%", n.style.height = "100%") : n.style.width = n.style.height = "1px"), !t.paused)
                if (e.callQ.length) {
                    e.callQ.shift()()
                } else {
                    var r = t.plugin.getScan();
                    if ("bad_auth" == r) return void(e.ivId = -1);
                    if (e.doGetVidSize) {
                        var i = t.plugin.getVideoSize();
                        try {
                            var o = JSON.parse(i);
                            o[0] && o[1] && t.trigger("videoSize", o[0], o[1])
                        } catch (t) {}
                    }
                    r && u.defer(function() {
                        t.trigger("scan", JSON.parse(r.replace(/'/g, '"')))
                    })
                } t.active ? t.inhibitProcessing(0) : t.inhibitProcessing(9999), e.ivId = setTimeout(e.poll, y)
        }

        function w(t, e, n) {
            var r = 0,
                i = 0,
                o = [];
            return function(s) {
                var a = function(e) {
                    if (u.every(e, function(t) {
                            return t.error
                        }) || u.any(e, function(t) {
                            return "bw" == t.type
                        })) {
                        var s = "unknown",
                            a = void 0,
                            l = u.find(e, function(t) {
                                return "readError" == t.type
                            }),
                            p = u.find(e, function(t) {
                                return "fileReader" == t.type
                            }),
                            f = u.find(e, function(t) {
                                return "file" == t.type
                            }),
                            h = u.find(e, function(t) {
                                return "bw" == t.type
                            }),
                            A = u.find(e, function(t) {
                                return "noOutput" == t.type
                            });
                        p ? (s = "File " + p.msg + " appears to have an unsupported format.", a = p.msg) : f ? (s = "File " + f.fileName + " appears to be corrupted or have an unsupported format.", a = f.fileName) : h ? (s = "File " + h.fileName + " appears to be scanned in black and white and cannot be accurately graded.", s += "Please rescan using grayscale or color.", a = h.fileName) : A ? (s = "File " + A.fileName + " does not appear to have a GradeCam form in it.", a = A.fileName) : l && (s = "Could not read " + l.fileName + " -- " + l.msg), i++, o.push(a), n && n(s)
                    } else {
                        var g = e && 1 === e.length && e[0],
                            y = d.newDeferred();
                        t.trigger("scan", g, {
                            scansRequired: 1,
                            scansMax: 1,
                            scansToValidate: 1,
                            successObj: y
                        }), y.promise.then(function() {
                            r++
                        }, function() {
                            i++, o.push(""), n && n("Could not read form in this image.")
                        })
                    }
                    var v;
                    v = c, m[t._pid].callQ.push(v)
                };

                function c() {
                    !1 !== s.next(a, !0) || e && e(r, i, o)
                }
                c()
            }
        }
        var _ = !1,
            S = "",
            x = c.CameraRotate.None,
            k = !1,
            C = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    r.plugin = null, r.el = null, r.isVisible = !1, r.active = !0, r.paused = !1, r.videoWidth = 640, r.videoHeight = 480, r.typerScores = [], r.eventHost = null, r.currentCameraInfo = new f.ReplaySubject(1), r.plugin = e, r.el = n;
                    var i = e;
                    (k = !e.bind) && (i = r.eventHost = new a.ClassTS);
                    var o = r._pid = g++;
                    return m[o] = {
                        poll: u.bind(b, r),
                        stop: !1,
                        ivId: -1,
                        callQ: []
                    }, r.fileScanHost = p(e), i.bind("scan", function(t) {
                        u.defer(function() {
                            r.trigger("scan", JSON.parse(t.replace(/'/g, '"')))
                        })
                    }), i.bind("cameraVisible", function(t) {
                        r.isVisible = t, r.trigger("cameraVisible", t)
                    }), i.bind("videoSize", function(t, e) {
                        r.videoWidth = t, r.videoHeight = e, r.trigger("videoSize", t, e)
                    }), k && i.trigger("cameraVisible", !0), r.plugin.currentCameraInfo && r.plugin.currentCameraInfo.subscribe(r.currentCameraInfo), r
                }
                return i(e, t), e.prototype.setTransparency = function() {}, e.prototype.getCameraList = function() {
                    return JSON.parse(this.plugin.getCameraList())
                }, e.prototype.getVersionMajor = function() {
                    return this.plugin.getVersionMajor()
                }, e.prototype.getVersionMinor = function() {
                    return this.plugin.getVersionMinor()
                }, e.prototype.startCamera = function() {
                    return _ = !0, k && this.eventHost.trigger("cameraVisible", !0), this.plugin.setCamera(S, x)
                }, e.prototype.stopCamera = function() {
                    return _ = !1, k && this.eventHost.trigger("cameraVisible", !1), this.plugin.stopCamera()
                }, e.prototype.setCamera = function(t, e) {
                    k && this.eventHost.trigger("cameraVisible", !0), _ && S == t && x == e || (_ = !0, this.supports("rotate") ? (!0 === e ? e = c.CameraRotate.Full180 : !1 === e && (e = c.CameraRotate.None), this.plugin.setCamera(t, e)) : (e = !0 === e || e == c.CameraRotate.Full180, this.plugin.setCamera(t, e)), S = t, x = e)
                }, e.prototype.initTyper = function(t, e, n, r) {
                    this.plugin.supports("rkeyDelay") ? this.plugin.initTyper(t, e, n, r) : this.plugin.initTyper(t, Math.max(r, e), n)
                }, e.prototype.setTyperStrings = function(t) {
                    this.supports("setTyperStrings") && this.plugin.setTyperStrings(t), this.typerScores = t.slice(0)
                }, e.prototype.clearTyperStrings = function() {
                    this.supports("setTyperStrings") && this.plugin.clearTyperStrings(), this.typerScores = []
                }, e.prototype.inhibitProcessing = function(t) {
                    this.plugin.inhibitProcessing(t)
                }, e.prototype.getJPEGImage = function() {
                    return this.plugin.getJPEGImage()
                }, e.prototype.getCurrentImage = function() {
                    return this.plugin.getCurrentImage()
                }, e.prototype.getJpegAsync = function(t) {
                    var e = this;
                    this.plugin.getJpegAsync ? this.plugin.getJpegAsync(t) : u.defer(function() {
                        t(e.plugin.getJPEGImage())
                    })
                }, e.prototype.getGciAsync = function(t) {
                    var e = this;
                    this.plugin.getGciAsync ? this.plugin.getGciAsync(t) : u.defer(function() {
                        t(e.plugin.getCurrentImage())
                    })
                }, e.prototype.enableHighRes = function(t) {
                    return !!this.plugin.enableHighRes && this.plugin.enableHighRes(t)
                }, e.prototype._shutdown = function() {
                    var t = m[this._pid];
                    this.plugin.stopCamera(), this.unbind("scan"), clearInterval(t.ivId), t.ivId = -1, t.stop = !0
                }, e.prototype.startPolling = function() {
                    var t = m[this._pid]; - 1 != t.ivId && clearTimeout(t.ivId), t.doGetVidSize = this.supports("videoSize"), t.poll()
                }, e.prototype.pause = function() {
                    this.paused = !0
                }, e.prototype.unpause = function() {
                    this.paused = !1
                }, e.prototype.setActive = function(t) {
                    this.active = !!t
                }, e.prototype.getFileScanner = function() {
                    return this.fileScanHost
                }, e.prototype.processImageFiles = function(t, e) {
                    return k && this.eventHost.trigger("cameraVisible", !0), this.fileScanHost.createDirectoryScanner(w(this, t, e))
                }, e.prototype.processImageFile = function(t, e) {
                    return k && this.eventHost.trigger("cameraVisible", !0), this.fileScanHost.createFileScanner(w(this, t, e))
                }, e.prototype.processImageFileArray = function(t, e, n) {
                    return k && this.eventHost.trigger("cameraVisible", !0), this.fileScanHost.loadFromFileArray(w(this, e, n))
                }, e.prototype.scanFilesAsync = function(t, e) {
                    return function(t, e, n) {
                        var r = _;
                        t.stopCamera(), k && t.eventHost.trigger("cameraVisible", !0);
                        var i = t.getFileScanner();
                        if (!i) throw new Error("Your web browser does not support file scanning");
                        if (e && !i.canUseFileArray()) throw new Error("Your web browser does not fully support drag and drop file scanning");

                        function a(e) {
                            return o(this, void 0, void 0, function() {
                                function i() {
                                    return o(this, void 0, void 0, function() {
                                        var o, a;
                                        return s(this, function(s) {
                                            switch (s.label) {
                                                case 0:
                                                    return s.trys.push([0, 2, , 3]), [4, e.next(function(t) {
                                                        n(t, i)
                                                    })];
                                                case 1:
                                                    return o = s.sent(), [3, 3];
                                                case 2:
                                                    return a = s.sent(), A.error("Uncaught filescanner error:", a), n(a), [3, 3];
                                                case 3:
                                                    return o || (r && t.startCamera(), n(null, null)), [2]
                                            }
                                        })
                                    })
                                }
                                var a;
                                return s(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), e ? [4, i()] : (n(new Error("Could not create scanner")), [2]);
                                        case 1:
                                            return t.sent(), [3, 3];
                                        case 2:
                                            return a = t.sent(), A.error("Error scanning files:", a), n(a), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                        return e ? i.loadFromFileArray(a, e) : i.createFileScanner(a), !0
                    }(this, t, e)
                }, e.prototype.getVersion = function() {
                    try {
                        if (this.plugin.getVersion) return this.plugin.getVersion()
                    } catch (t) {}
                    return this.getVersionMajor() + "." + this.getVersionMinor() + ".0.0"
                }, e.prototype.isAtLeastVersion = function(t) {
                    return !l.isLessThan(this.getVersion(), t)
                }, e.prototype.displayObject = function(t) {
                    return this.plugin.displayObject(t)
                }, e.prototype.processDirect = function(t) {
                    return this.plugin.processDirect(t)
                }, e.prototype.getSpeedHandicap = function() {
                    return 1
                }, e.prototype.supports = function(t) {
                    var e = this.plugin;
                    switch (t) {
                        case "versionString":
                            return this.isAtLeastVersion("1.7.0.0");
                        case "processImageFiles":
                            return this.isAtLeastVersion("1.5.0.0");
                        case "liveOptions":
                        case "stopCamera":
                            return this.isAtLeastVersion("1.7.0.0");
                        case "html5Files":
                            var n = this.getFileScanner();
                            return n && n.canUseFileArray();
                        case "flipCamera":
                            return !0;
                        default:
                            return !!e.supports && e.supports(t)
                    }
                }, e.prototype.getNeedsTransparency = function() {
                    return !1
                }, e
            }(a.ClassTS);
        t.exports = C
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(0),
            s = n(2),
            a = n(23),
            c = n(1),
            u = null,
            l = -1 != document.documentElement.className.indexOf("GCPlugin2"),
            p = "application/x-gcplugin2",
            f = s.get(),
            h = null,
            d = 2e3;

        function A(t) {
            void 0 === t && (t = d);
            var e = c.newDeferred();
            if (u) return e.resolve(u), e.promise;
            var n = "_fwcb_" + Math.floor(1e8 * Math.random());
            window[n] = function(t) {
                u = t.wyrmhole, clearTimeout(r), e.resolve(u)
            };
            var r = setTimeout(function() {
                e.reject(new Error("timeout"))
            }, t);
            return window.postMessage({
                firebreath: "GradeCam",
                callback: n
            }, "*"), e.promise
        }

        function g() {
            return r(this, void 0, void 0, function() {
                function t() {
                    e && e.destroy()
                }
                var e, n;
                return i(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, A()];
                        case 1:
                            return [4, r.sent().create()];
                        case 2:
                            if (!(e = r.sent())) return [2, []];
                            r.label = 3;
                        case 3:
                            return r.trys.push([3, 5, , 6]), [4, e.listPlugins()];
                        case 4:
                            return n = r.sent(), t(), [2, n];
                        case 5:
                            return r.sent(), t(), [2, []];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function m() {
            return r(this, void 0, void 0, function() {
                var t, e;
                return i(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]), [4, g()];
                        case 1:
                            return t = n.sent(), [2, o.any(t, function(t) {
                                return o.any(t.mimetypes, function(t) {
                                    return "application/x-gcplugin2" == t
                                })
                            })];
                        case 2:
                            throw e = n.sent(), f.error("Could not query plugin; gradebook transfer may not work", e), e;
                        case 3:
                            return [2]
                    }
                })
            })
        }

        function y(t) {
            setTimeout(function e() {
                return r(this, void 0, void 0, function() {
                    var n, r;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, m()];
                            case 1:
                                return (n = i.sent()) ? t(n) : setTimeout(e, 1e3), [3, 3];
                            case 2:
                                return r = i.sent(), f.warn("Could not find plugin:", r), setTimeout(e, 2e3), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, 1e3)
        }

        function v(t) {
            return void 0 === t && (t = d), r(this, void 0, void 0, function() {
                var e, n, r;
                return i(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return h ? [2, h] : (e = window.FireWyrmJS) ? [4, A(t)] : [3, 3];
                        case 1:
                            return n = i.sent(), f.info("Detected plugin2 extension; attempting to connect to wyrmhole"), [4, n.create(p)];
                        case 2:
                            return r = i.sent(), f.info("Connected to wyrmhole and loaded plugin. Starting FireWyrmJS", p), [2, h = new e(r)];
                        case 3:
                            throw new Error("Could not load fwjs")
                    }
                })
            })
        }
        var b = 2 * d;

        function w() {
            return r(this, void 0, void 0, function() {
                var t, e;
                return i(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, v(b)];
                        case 1:
                            return (t = r.sent()) ? [4, t.create(p, {})] : [3, 3];
                        case 2:
                            return e = r.sent(), n(6).plugin2.installed = !0, [2, e];
                        case 3:
                            return [2, null]
                    }
                })
            })
        }! function(t) {
            t.detect = m, t.ext_installed = l, t.watchForInstall = y, t.supported = a.chrome && (a.mac || a.win)
        }(w || (w = {})), a.mozilla && a.versionNumber >= 50 && (a.mac || a.win) && (w.supported = !0), t.exports = w
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            i = n(58),
            o = n(127),
            s = n(1),
            a = r.template(o);
        t.exports = function() {
            var t, e = s.newDeferred(),
                n = document.createElement("div");
            n.innerHTML = a();
            var r = n.querySelector("input[type=file]");

            function o() {
                e.reject(new Error("Cancelled"))
            }
            i.addEventListener("hide", o), r.addEventListener("change", function(e) {
                t = this.files
            }, !1), n.querySelector("button").addEventListener("click", function(n) {
                n.stopPropagation(), n.preventDefault(), e.resolve(t || [])
            }, !1), i.show(n);
            var c = function() {
                i.removeEventListener("hide", o), i.hide()
            };
            return e.promise.then(c, c), e.promise
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = [];
        e.configurations = r;
        var i = function(t) {
            var e, n;
            switch (t) {
                case "legacy_fast":
                    e = [48e4], n = [0];
                    break;
                case "legacy_aggressive":
                    e = [48e4, 1024e3, 192e4], n = [0, 50, 75, 100];
                    break;
                case "legacy_normal":
                    e = [48e4, 192e4], n = [0, 75];
                    break;
                case "fast":
                    e = [0, 48e4], n = [0];
                    break;
                case "aggressive":
                    e = [0, 786432, 192e4, 3145728], n = [0, 50, 75, 100];
                    break;
                case "high_res":
                    e = [0, 1228800, 192e4, 3145728], n = [0, 75];
                    break;
                case "normal":
                default:
                    e = [0, 48e4, 192e4], n = [0, 75]
            }
            r.length = 0;
            for (var i = 0, o = e; i < o.length; i++)
                for (var s = o[i], a = 0, c = n; a < c.length; a++) {
                    var u = c[a];
                    r.push({
                        size: s,
                        darkness: u
                    })
                }
        };
        e.setMode = i, i("normal")
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.encode = function(t) {
            for (var e, n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = new Uint8Array(t), o = i.byteLength, s = o % 3, a = o - s, c = 0; c < a; c += 3) n += r[(16515072 & (e = i[c] << 16 | i[c + 1] << 8 | i[c + 2])) >> 18] + r[(258048 & e) >> 12] + r[(4032 & e) >> 6] + r[63 & e];
            return 1 == s ? n += r[(252 & (e = i[a])) >> 2] + r[(3 & e) << 4] + "==" : 2 == s && (n += r[(64512 & (e = i[a] << 8 | i[a + 1])) >> 10] + r[(1008 & e) >> 4] + r[(15 & e) << 2] + "="), n
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.hasGCMobile = function() {
            return "undefined" != typeof window && window.navigator && window.navigator.userAgent && /GradeCamMobile/.test(navigator.userAgent)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            i = n(150),
            o = function() {
                function t() {}
                return t.prototype.new = function(e) {
                    void 0 === e && (e = {}), r.defaults(e, t.defaults), this.update(e)
                }, t.prototype.update = function(t) {
                    for (var e = 0, n = r.keys(t); e < n.length; e++) {
                        var i = n[e];
                        this[i] = t[i]
                    }
                }, t.prototype.toJSON = function() {
                    return {
                        type: this.type,
                        exam_length: this.exam_length,
                        auto_length: this.auto_length,
                        exam_versions: this.exam_versions,
                        exam_answer_multiplicities: this.exam_answer_multiplicities,
                        custom_form_description: this.custom_form_description,
                        ignore_formcode_choices: this.ignore_formcode_choices,
                        output_version: this.output_version,
                        numeric_allow_blanks: this.numeric_allow_blanks
                    }
                }, t.defaults = {
                    auto_length: !1,
                    exam_versions: 0,
                    exam_answer_multiplicities: 1,
                    output_version: 0,
                    numeric_allow_blanks: !1
                }, t.FormTypeEnum = i, t
            }();
        t.exports = o
    }, function(t, e) {}, function(t, e, n) {
        "use strict";
        var r = n(0);
        t.exports = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            for (var i = 0, o = e; i < o.length; i++)
                for (var s = o[i], a = 0, c = r.keys(s); a < c.length; a++) {
                    var u = c[a];
                    if (!(u in t))
                        if (r.isArray(s[u])) {
                            var l = s[u];
                            t[u] = l.slice(0)
                        } else r.isObject(s[u]) ? (l = r.clone(s[u]), t[u] = l) : t[u] = s[u]
                }
        }
    }, function(t, e, n) {
        "use strict";
        var r, i = n(160),
            o = n(1),
            s = o.newDeferred(),
            a = -1,
            c = null;

        function u() {
            return r || ((r = document.createElement("iframe")).style.display = "none", r.src = c.formServerComm, document.body.appendChild(r), a = setTimeout(function() {
                alert("Error communicating with GradeCam servers; form management will not work"), s.reject()
            }, 5e3), r)
        }
        var l = 0,
            p = {};

        function f(t) {
            if (t.origin == c.formServerDomain) {
                if ("ready" == t.data) return clearTimeout(a), void s.resolve();
                var e, n = function(t) {
                    var e = t.indexOf(":");
                    if (-1 == e) throw new Error("Malformed message");
                    var n = t.substr(0, e);
                    if (!p[n]) throw new Error("Orphan message received!");
                    var r = t.substr(e + 1);
                    try {
                        return {
                            dfd: p[n],
                            error: !1,
                            data: JSON.parse(r)
                        }
                    } catch (t) {
                        return {
                            dfd: p[n],
                            error: !0,
                            data: t
                        }
                    }
                }(t.data);
                n.error ? e = n.data : "failed" == n.data.status && (e = new Error(n.data.message)), e ? (e.domain = c.formServerDomain, n.dfd.reject(e)) : n.dfd.resolve(n.data.message)
            }
        }
        window.addEventListener ? addEventListener("message", f, !1) : attachEvent("onmessage", f);
        var h = !(XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
            d = function() {
                function t() {
                    this.useLegacyAPI = !1;
                    var t = "prod";
                    window._GCFORMSMODE ? t = window._GCFORMSMODE : window._GCREGION && (t = window._GCREGION), c = i(t), h && document.body && document.body.appendChild && (this.useLegacyAPI = !0, u())
                }
                return t.prototype.sendMessage = function(t, e, n, r, i) {
                    var a = l++,
                        f = i ? null : s;
                    return i = i || u(), o.PromiseAll([f]).then(function() {
                        var s = {
                            command: t,
                            data: e
                        };
                        i.contentWindow.postMessage(function(t, e) {
                            return e + ":" + JSON.stringify(t)
                        }(s, a), c.formServerDomain);
                        var u = o.newDeferred();
                        return p[a] = u, n && u.promise.then(n), r && u.promise.catch(r), u.promise
                    })
                }, t.prototype.printIframe = function(t) {
                    window.gcmobilesdk ? this.sendMessage("getContent", null, null, null, t).then(function(t) {
                        window.gcmobilesdk.command("printIframe", t.content)
                    }) : t.contentWindow.postMessage("print", "*")
                }, t.prototype.makeFormsRequest = function(t, e, n, r) {
                    var i = c.formServerDomain + t,
                        s = new XMLHttpRequest,
                        a = o.newDeferred();
                    return s.onreadystatechange = function() {
                        if (4 == s.readyState && 200 == s.status) try {
                            var t = JSON.parse(s.responseText);
                            a.resolve(t)
                        } catch (e) {
                            e.domain = c.formServerDomain, a.reject(e)
                        } else if (4 == s.readyState && 200 != s.status) {
                            var e = new Error("Server returned code " + s.status);
                            e.response = s.responseText, e.domain = c.formServerDomain;
                            try {
                                e = JSON.parse(e.response)
                            } catch (t) {}
                            a.reject(e)
                        }
                    }, e ? (s.open("POST", i, !0), s.setRequestHeader("X-Requested-With", "GCSDK"), s.setRequestHeader("Content-type", "application/json"), s.send(JSON.stringify(e))) : (s.open("GET", i, !0), s.send()), n && a.promise.then(n), r && a.promise.catch(r), a.promise
                }, t
            }();
        t.exports = d
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = n(11),
            o = n(164),
            s = n(171),
            a = n(172),
            c = n(30);

        function u(t) {
            var e = r.flatten(t);
            if (!(e && e.length > 0)) return "";
            var n = c(e);
            return 0 === n.threshold ? "" : r.map(t, function(t) {
                return r.findIndex(t, function(t) {
                    return t > n.threshold
                })
            }).filter(function(t) {
                return t > -1
            }).join("")
        }
        e.getMaxIndex = function(t) {
            var e = r.map(t, function(t, e) {
                return {
                    value: e,
                    intensity: t
                }
            });
            return r.max(e, function(t) {
                return t.intensity
            }).value
        }, e.calculateId = u;
        var l = function() {
            function t(t) {
                void 0 === t && (t = {}), this.items = [];
                for (var e = 0, n = r.keys(t); e < n.length; e++) {
                    var i = n[e];
                    this[i] = t[i]
                }
            }
            return t.prototype.getItemByLabel = function(t) {
                return r.find(this.items, function(e) {
                    return e.label === t
                })
            }, t.prototype.getItemsByType = function(t) {
                return r.select(this.items, function(e) {
                    return e.type === t && !e.ignore
                })
            }, t.prototype.getItemsByFormArea = function(t) {
                return r.select(this.items, function(e) {
                    return e.form_area === t && !e.ignore
                })
            }, t.prototype.getIntensityMethods = function() {
                var t = r.find(this.items, function(t) {
                    return t.getIntensityMethods && !!t.getIntensityMethods()
                });
                return t ? t.getIntensityMethods() : t ? t.getIntensityMethods() : []
            }, t.prototype.getFormIdentifier = function() {
                var t = "";
                r.each(this.getItemsByFormArea("ids"), function(e) {
                    var n = u(e.intensities[0]);
                    t += n
                });
                var e = this.fc_data;
                return e && e.form_id && (t += e.form_id), t.length ? t : -Math.random()
            }, t.prototype.hasFormIdentifier = function() {
                return !!this.getFormIdentifier()
            }, t.prototype.hasClips = function() {
                var t = this.getItemsByType("clip");
                return t && !!t.length
            }, t.Item = i.Item, t.NumberItem = o.NumberItem, t.QuestionItem = s.QuestionItem, t.ClipItem = a.ClipItem, t
        }();
        e.StructuredScan = l
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0),
            s = n(4),
            a = n(174),
            c = n(1),
            u = n(31);

        function l(t) {
            return t.label && " " != t.label
        }

        function p(t, e) {
            t = o.sortBy(t, function(t) {
                return 1e3 * t.zone
            }), e = o.sortBy(e, function(t) {
                return 1e3 * t.zone
            });
            for (var n = [], r = 0, i = 0, s = o.zip(t, e); i < s.length; i++) {
                var a = s[i],
                    c = a[0],
                    u = a[1];
                c && u && (n.push({
                    desc: c,
                    scan: u,
                    type: "clip",
                    index: 1e3 * c.zone + r
                }), r++)
            }
            return o.all(n, function(t) {
                return t.desc.zone == t.scan.zone
            }) ? t.length != n.length ? null : n : null
        }

        function f(t, e) {
            var n = [],
                r = o.clone(t),
                i = o.clone(e),
                s = o.filter(r, function(t) {
                    return "ids" == t.form_area
                });
            r = o.difference(r, s), s = o.sortBy(s, function(t) {
                return -t.col
            });
            for (var a = [], c = function(t) {
                    var e = o.max(i, function(e) {
                        return 0 !== e.row ? -1 : e.zone !== t.zone ? -1 : e.col
                    });
                    a.unshift({
                        desc: t,
                        scan: e
                    }), i = o.without(i, e)
                }, u = 0, l = s; u < l.length; u++) {
                c(l[u])
            }
            n = n.concat(a);
            var p = o.sortBy(r, function(t) {
                    return 1e3 * t.zone + 100 * t.col + t.row
                }),
                f = o.sortBy(i, function(t) {
                    return 1e3 * t.zone + 100 * t.col + t.row
                }),
                h = 0,
                d = o.zip(p, f);
            return o.each(d, function(t) {
                var e = t[0],
                    r = t[1];
                e && r && (n.push({
                    desc: e,
                    scan: r,
                    type: "block",
                    index: 1e3 * e.zone + h
                }), h++)
            }), o.all(n, function(t) {
                return t.desc.rows == t.scan.rows && t.desc.cols == t.scan.cols && t.desc.zone == t.scan.zone
            }) ? t.length != n.length ? null : n : null
        }
        e.matchBlocks = f, e.structure = function(t, e) {
            return r(this, void 0, void 0, function() {
                var n, r, h, d, A, g, m, y, v, b, w, _, S, x, k, C, I, E, O, M, R, D;
                return i(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return t ? [4, c.PromiseAll([t, u(e)])] : [2, c.rejected(new Error("Invalid form description"))];
                        case 1:
                            if (n = i.sent(), r = n[0], h = n[1], d = f(r.blocks, e.blocks), A = p(r.clips, e.clips), e.clips && e.clips.length > 0 && !A) {
                                for (g = e.clips.shift(), m = 0, y = e.blocks; m < y.length; m++)(v = y[m]).zone > g.zone && v.zone--;
                                for (b = 0, w = e.clips; b < w.length; b++)(_ = w[b]).zone > g.zone && _.zone--;
                                d = f(r.blocks, e.blocks), A = p(r.clips, e.clips)
                            }
                            if (!d || !A) return [2, c.rejected(new Error("No matching blocks or clips"))];
                            S = o.sortBy(d.concat(A), function(t) {
                                return t.index
                            }), x = new s.StructuredScan({
                                type: r.type,
                                fc_data: h,
                                structure_hash: e.hash()
                            }), k = x.items, C = 0, I = S, i.label = 2;
                        case 2:
                            if (!(C < I.length)) return [3, 5];
                            if ((E = I[C]).desc.ignore) return [3, 4];
                            if ("clip" === E.type) k.push(function(t, e) {
                                return new s.StructuredScan.ClipItem(o.extend({}, t, {
                                    image: e.image,
                                    type: "clip",
                                    form_area: "clip",
                                    fdid: "zone" + t.zone,
                                    blur: e.blur,
                                    skew: e.skew,
                                    width: e.width,
                                    height: e.height
                                }))
                            }(E.desc, E.scan));
                            else {
                                if (!1 === (O = function(t, e) {
                                        var n = null,
                                            r = 1,
                                            i = e.row,
                                            a = e.col;
                                        if ("questions" == t.type && 0 === t.questions.length) return [];
                                        if ("number" === t.type) return [new s.StructuredScan.NumberItem(o.extend({}, t, {
                                            type: "number",
                                            form_area: t.form_area,
                                            block_row: i,
                                            block_col: a,
                                            intensities: e.getNumberIntensities(),
                                            fdid: "zone" + e.zone + "br" + i + "bc" + a
                                        }))];
                                        if ("questions" === t.type) {
                                            var c = [],
                                                u = !1;
                                            return o.each(t.questions, function(p, f) {
                                                u = !0, l(p) ? (n = p.label, r = 1) : r++;
                                                var h = new s.StructuredScan.QuestionItem(o.extend({}, p, {
                                                    type: "question",
                                                    form_area: t.form_area,
                                                    block_row: i,
                                                    block_col: a,
                                                    row: f,
                                                    intensities: e.getRowIntensities(f),
                                                    label: l(p) ? p.label : n + "(line " + r + ")",
                                                    fdid: "zone" + e.zone + "br" + i + "bc" + a + "r" + f
                                                }));
                                                c.push(h)
                                            }), !!u && c
                                        }
                                        return !1
                                    }(E.desc, E.scan))) return [2, c.rejected(new Error("Could not structure block"))];
                                for (M = 0, R = O; M < R.length; M++) D = R[M], k.push(D)
                            }
                            return [4, a.yieldAsync()];
                        case 3:
                            i.sent(), i.label = 4;
                        case 4:
                            return C++, [3, 2];
                        case 5:
                            return [2, x]
                    }
                })
            })
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = {}
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = n(32),
            s = n(4),
            a = n(0),
            c = n(31);

        function u(t, e) {
            return e ? "questions" === (e = a.extend(e, {
                zone: t.zone
            })).type ? new s.FormDescription.QuestionBlockDescription(e) : "number" === e.type ? new s.FormDescription.NumberBlockDescription(e) : null : null
        }

        function l(t) {
            var e = t.exam_answer_multiplicities;
            if (a.isObject(e) && !a.isArray(e)) {
                var n = e,
                    r = [];
                return a.each(n, function(t, e) {
                        a.each(t, function(t, n) {
                            r[n] || (r[n] = {}), r[n][e] = t
                        })
                    }),
                    function(t) {
                        return r[t] || 1
                    }
            }
            return a.isArray(e) ? function(t) {
                return e[t]
            } : function(t) {
                return e || 1
            }
        }
        var p = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype._findBlocks = function(t) {
                var e = this.findIDBlock(t),
                    n = a.without(t.blocks, e);
                if (!n.length) return null;
                var r = a.min(n, function(t) {
                        return t.left + t.top
                    }),
                    i = this.formMode.exam_versions <= 1 && 1 == this.formMode.exam_length;
                if (1 !== r.rows || i) {
                    if (r = null, this.formMode.exam_versions > 1) return null
                } else if (n = a.without(n, r), this.formMode.exam_versions > 1 && this.formMode.exam_versions < 4 && (this.formMode.exam_versions = 4), this.formMode.exam_versions !== r.cols && this.formMode.exam_versions > 1) return null;
                return 0 === n.length ? null : {
                    id: e,
                    version: r,
                    answers: n
                }
            }, e.prototype.getFormDescriptionNoFormCode = function(t) {
                var e = this,
                    n = this._findBlocks(t);
                if (!n) return this.lastFailure = "invalidStructure", null;
                var r = new s.FormDescription({
                        blocks: []
                    }),
                    i = r.blocks;
                if (!n.id) return this.lastFailure = "invalidStructure", null;
                i.push(this.createIDBlockDescription(n.id));
                var o = l(this.formMode);
                if (n.version) {
                    var c = new s.FormDescription.QuestionBlockDescription({
                        type: "questions",
                        zone: 0,
                        row: n.version.row,
                        col: n.version.col,
                        rows: n.version.rows,
                        cols: n.version.cols,
                        form_area: "version",
                        questions: [new s.FormDescription.QuestionItemDescription({
                            label: "Version",
                            choices: this.numberRange(1, n.version.cols),
                            multiplicity_min: 1,
                            multiplicity_max: 1
                        })]
                    });
                    this.formMode.exam_versions <= 1 && (c.ignore = !0), i.push(c)
                }
                var u = 1;
                return a.each(n.answers, function(t, n) {
                    for (var r = new s.FormDescription.QuestionBlockDescription({
                            type: "questions",
                            zone: 0,
                            row: t.row,
                            col: t.col,
                            rows: t.rows,
                            cols: t.cols,
                            form_area: "main",
                            questions: []
                        }), a = 0; a < t.rows; ++a) {
                        if (u <= e.formMode.exam_length || -1 == e.formMode.exam_length) {
                            var c = o(u - 1),
                                l = new s.FormDescription.QuestionItemDescription({
                                    label: "Question " + u,
                                    choices: e.letterRange("A", t.cols),
                                    multiplicity_min: 1,
                                    multiplicity_max: c
                                });
                            r.questions.push(l)
                        }
                        u++
                    }
                    i.push(r)
                }), u - 1 < this.formMode.exam_length ? (this.lastFailure = "examLength", null) : r
            }, e.prototype.getFormDescriptionFormCode = function(t, e) {
                var n, r = this,
                    i = [],
                    o = [],
                    c = l(r.formMode),
                    p = e.startOffset || 0,
                    f = r.formMode.exam_length,
                    h = -1 == f || r.formMode.auto_length,
                    d = e && e.pageCount && e.pageCount > 1,
                    A = [];
                if (A = e.desc_v && e.desc_v >= 2 ? JSON.parse(JSON.stringify(e.form_description)) : [{
                        type: "rect",
                        zone: 0,
                        blocks: JSON.parse(JSON.stringify(e.form_description.blocks))
                    }], a.each(A, function(t) {
                        if ("rect" == t.type) {
                            var e = t.blocks;
                            n || (n = a.find(e, function(t) {
                                return "version" == t.form_area
                            })) && (n.questions[0].multiplicity_min = 1, n.questions[0].multiplicity_max = 1, i.push(u(t, n)), e = a.without(e, n)), a.each(e, function(e) {
                                if ("questions" === e.type && "main" == e.form_area) {
                                    var n = [];
                                    a.each(e.questions, function(t) {
                                        var e = c(p);
                                        if (t.multiplicity_min = 1, t.multiplicity_max = e, r.formMode.ignore_formcode_choices)
                                            for (var i = 0; i < t.choices.length; i++) t.choices[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(i, i + 1);
                                        (!t.choices.length || p >= f && !h) && (t.ignore = !0), n.push(t), p++
                                    }), e.questions = n, e.questions.length || (e.ignore = !0), i.push(u(t, e))
                                } else "number" === e.type && "main" == e.form_area ? (p >= f && !h && (e.ignore = !0), i.push(u(t, e)), p++) : i.push(u(t, e))
                            })
                        } else "clip" == t.type && (o.push(new s.FormDescription.ClipItemDescription({
                            zone: t.zone,
                            label: t.label
                        })), p++)
                    }), !d && !h && p < r.formMode.exam_length) return r.lastFailure = "examLength", null;
                var g = new s.FormDescription({
                    blocks: i,
                    clips: o,
                    has_formcode: !0
                });
                return g.oneTimeDescription = !0, g
            }, e.prototype.getFormDescription = function(t) {
                var e = this;
                return c(t).then(function(n) {
                    return n ? e.getFormDescriptionFormCode(t, n) : e.getFormDescriptionNoFormCode(t)
                })
            }, e
        }(o);
        t.exports = p
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            a = n(0),
            c = n(32),
            u = n(4),
            l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.getFormDescription = function(t) {
                    return o(this, void 0, void 0, function() {
                        var e, n, r, i;
                        return s(this, function(o) {
                            return (e = this.findIDBlock(t)) ? 1 !== (n = a.without(t.blocks, e)).length ? [2, null] : 3 != (r = n[0]).cols || 10 != r.rows ? [2, null] : ((i = new u.FormDescription({
                                blocks: []
                            })).blocks.push(this.createIDBlockDescription(e)), i.blocks.push(new u.FormDescription.NumberBlockDescription({
                                type: "number",
                                zone: 0,
                                choices: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                                form_area: "main",
                                row: r.row,
                                col: r.col,
                                rows: r.rows,
                                cols: r.cols,
                                label: "Score"
                            })), [2, i]) : [2, null]
                        })
                    })
                }, e
            }(c);
        t.exports = l
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(3),
            s = n(61),
            a = n(9),
            c = n(2),
            u = n(147),
            l = n(148),
            p = n(149),
            f = n(14),
            h = n(0),
            d = n(1),
            A = c.get(),
            g = "us",
            m = "https://downloads.gradecam.com";
        window._GCREGION && (g = window._GCREGION), "asia" == g && (m = "https://cdn-qnhd.menco.cn/assets/vendors/gradecam/gc");
        var y = h.template(u),
            v = h.template(l),
            b = h.template(p),
            w = new(function() {
                function t() {
                    this.loader = null, this.evtObj = new o.ClassTS, this.instOpts = {
                        downloadsUrl: m,
                        reqFeatures: [],
                        desiredVersion: "6.5.1.3",
                        minVersion: "6.5.1.3",
                        params: []
                    }, this.returnUrl = window.location.href, this.moduleOrder = null, this.moduleOptions = {}, this.bind = h.bind(this.evtObj.bind, this.evtObj), this.unbind = h.bind(this.evtObj.unbind, this.evtObj)
                }
                return t.prototype.makeInstallUrlFactory = function(t) {
                    var e = this;
                    return function(n) {
                        return t.makeInstallUrl(e.instOpts.desiredVersion, n)
                    }
                }, t.prototype.pluginNotInstalled = function(t, e) {
                    var n = e.module,
                        r = d.newDeferred(),
                        i = function() {
                            n.cancelLoad(), r.resolve(!0)
                        };
                    if (window.__GC_TN_HelperFunc = i, window.external && void 0 !== window.external.msActiveXFilteringEnabled && window.external.msActiveXFilteringEnabled()) t.innerHTML = v({
                        planeURI: f.plane
                    }), this.evtObj.trigger("install", {
                        error: "unsupported"
                    }), r.reject(new a.UnsupportedError("unsupported"));
                    else {
                        var o = this.makeInstallUrlFactory(n),
                            s = o(this.returnUrl),
                            c = n.doesInstallRequireRestart(),
                            u = !(!e.fallbacks || !e.fallbacks.length) && "__GC_TN_HelperFunc";
                        t.innerHTML = y({
                            upgrade: !1,
                            url: s,
                            planeURI: f.plane,
                            canTryNext: u
                        }), this.evtObj.trigger("install", {
                            error: null,
                            url: s,
                            upgrade: !1,
                            makeUrl: o,
                            module: n.getName(),
                            requiresRestart: c,
                            nextCb: u ? i : null
                        }), c || n.waitForInstall().then(function(t) {
                            "cancelled" != t && r.resolve(!1)
                        })
                    }
                    return r.promise
                }, t.prototype.needsUpgrade = function(t, e) {
                    var n = e.module,
                        r = this.makeInstallUrlFactory(n),
                        i = r(this.returnUrl);
                    t.innerHTML = y({
                        upgrade: !0,
                        url: i,
                        planeURI: f.plane,
                        canTryNext: !1
                    }), this.evtObj.trigger("install", {
                        error: null,
                        url: i,
                        makeUrl: r,
                        upgrade: !0,
                        module: n.getName(),
                        requiresRestart: !0
                    })
                }, t.prototype.unsupported = function(t) {
                    this.evtObj.trigger("install", {
                        error: "unsupported"
                    }), t.innerHTML = b({
                        url: "http://support.gradecam.com",
                        planeURI: f.plane
                    })
                }, t.prototype.requireFeatures = function(t) {
                    this.instOpts.reqFeatures = t
                }, t.prototype.requireMinVersion = function(t) {
                    this.instOpts.minVersion = t
                }, t.prototype.preferVersion = function(t) {
                    this.instOpts.desiredVersion = t
                }, t.prototype.setReturnURL = function(t) {
                    this.returnUrl = t
                }, t.prototype.setModuleOption = function(t, e, n) {
                    this.moduleOptions[t] = this.moduleOptions[t] || {}, this.moduleOptions[t][e] = n, this.loader && this.loader.setModuleOption(t, e, n)
                }, t.prototype.setDesiredVersion = function(t) {
                    this.instOpts.minVersion = t
                }, t.prototype.setModuleOrder = function(t) {
                    this.moduleOrder = t, A.debug("Plugin module order:", t), this.loader && this.loader.setModuleOrder(t)
                }, t.prototype.doInstantiate = function(t, e, n) {
                    return r(this, void 0, void 0, function() {
                        var r, o, s, c;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e ? ((o = n || []).unshift(e), r = this.loader.instantiateFromList(o, this.instOpts)) : r = n ? this.loader.instantiateFromList(n, this.instOpts) : this.loader.instantiate(this.instOpts), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 9]), [4, r];
                                case 2:
                                    return [2, i.sent()];
                                case 3:
                                    return (s = i.sent()) instanceof a.NeedsInstallError ? "install" != (c = s.getStatus()).installType ? [3, 5] : [4, this.pluginNotInstalled(t, c)] : [3, 7];
                                case 4:
                                    return i.sent() ? [2, this.doInstantiate(t, null, c.fallbacks)] : [2, this.doInstantiate(t, c.module, c.fallbacks)];
                                case 5:
                                    throw this.needsUpgrade(t, c), s;
                                case 6:
                                    return [3, 8];
                                case 7:
                                    if (s instanceof a.UnsupportedError) throw this.unsupported(t), s;
                                    i.label = 8;
                                case 8:
                                    throw s;
                                case 9:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.isInstalled = function() {
                    return s.isInstalled(this.moduleOrder)
                }, t.prototype.getTyperOptions = function(t, e) {
                    return s.getTyperOptions(this.moduleOrder, t || this.instOpts.desiredVersion, e || this.returnUrl)
                }, t.prototype.startInstall = function(t, e) {
                    return r(this, void 0, void 0, function() {
                        var n, r = this;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    h.extend(this.instOpts, e), this.loader || (this.loader = new s(t), this.moduleOrder && this.loader.setModuleOrder(this.moduleOrder), h.each(this.moduleOptions, function(t, e) {
                                        h.each(t, function(t, n) {
                                            r.loader.setModuleOption(e, n, t)
                                        })
                                    })), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, this.doInstantiate(t)];
                                case 2:
                                    return [2, i.sent()];
                                case 3:
                                    throw n = i.sent(), A.error("Could not instantiate GradeCam Reader: ", n), n;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t
            }());
        t.exports = w
    }, function(t, e, n) {
        "use strict";
        var r, i, o, s, a, c, u, l, p, f, h, d = n(14),
            A = (r = {
                close_label: "Close",
                inherit_frames: !1,
                fade_in_speed: 300,
                fade_out_speed: 300,
                attribute_name: "rel",
                tags_to_hide: ["select", "embed"],
                default_width: 450,
                version_number: "2.2",
                build_number: "1612",
                is_opera: -1 != navigator.userAgent.indexOf("Opera/9"),
                is_ie: -1 != navigator.userAgent.indexOf("MSIE "),
                is_ie6: !1 /*@cc_on || @_jscript_version < 5.7 @*/ ,
                is_firefox: "Netscape" == navigator.appName && -1 != navigator.userAgent.indexOf("Gecko") && -1 == navigator.userAgent.indexOf("Netscape"),
                is_mac: -1 != navigator.userAgent.indexOf("Macintosh"),
                base_url: "",
                setPath: function(t) {
                    r.base_url = t
                },
                bind: function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    e = [];
                    for (var r = 1; r < arguments.length; r++) e.push(arguments[r]);
                    return function(n) {
                        return t.apply(this, [n].concat(e))
                    }
                },
                html: function(t, e) {
                    if (void 0 === t) return s.content;
                    if (void 0 === e && (e = {}), i.is_loaded) {
                        r.clear(), r.updateObject(s.wrapper.style, {
                            display: "block",
                            visibility: "hidden",
                            left: 0,
                            top: 0,
                            height: "",
                            width: ""
                        }), "string" == typeof t ? s.content.innerHTML = t : s.content.appendChild(t), r.getPageSize(), void 0 === e.can_resize && (e.can_resize = !0), void 0 === e.fade_in && (e.use_fade = !0), e.fullscreen && (e.width = "100%", e.height = "100%"), a.container = [2 * s.wrapper.offsetLeft, 2 * s.wrapper.offsetTop], a.wrapper = [s.wrapper.offsetWidth - s.content.offsetWidth, s.wrapper.offsetHeight - s.content.offsetHeight], a.wrapper[1] += 4;
                        var n, o = e.width || r.default_width;
                        e.height ? n = e.height : (s.content.style.height = "100%", n = s.content.offsetHeight + 12, s.content.style.height = ""), i.dimensions = [o, n], i.params = e, r.reposition();
                        for (var c = 0; c < r.tags_to_hide.length; c++) l(r.tags_to_hide[c], s.content);
                        s.wrapper.style.visibility = "visible"
                    }
                },
                clear: function() {
                    for (s.loading.style.display = "none"; s.content.firstChild;) s.content.removeChild(s.content.firstChild)
                },
                show: function(t, e, n) {
                    p(e, n, function() {
                        r.html(t, i.params)
                    })
                },
                hide: function() {
                    i.plugin && i.plugin.unload && i.plugin.unload(), i = {}, r.clear();
                    for (var t = 0; t < r.tags_to_hide.length; t++) l(r.tags_to_hide[t]);
                    s.loading.style.display = "none", s.wrapper.style.display = "none", r.fade(s.overlay, r.getOpacity(null, s.overlay), 0, r.fade_out_speed, function() {
                        s.overlay.style.display = "none"
                    }), r.fireEvent("hide")
                },
                reposition: function() {
                    if (i.is_loaded) {
                        if ("none" != s.loading.style.display && r.center(s.loading), i.dimensions) {
                            var t = r.getPageSize(),
                                e = i.dimensions[0],
                                n = i.dimensions[1];
                            if (-1 != n.toString().indexOf("%") ? s.wrapper.style.height = (Math.max(document.documentElement.clientHeight, document.body.clientHeight, t.height) - a.container[0]) * (parseInt(n, 10) / 100) + "px" : n ? (s.content.style.height = n + "px", s.wrapper.style.height = s.content.offsetHeight + a.wrapper[1] + "px") : s.wrapper.style.height = s.content.offsetHeight + a.wrapper[1] + "px", -1 != e.toString().indexOf("%") ? s.wrapper.style.width = (Math.max(document.documentElement.clientWidth, document.body.clientWidth, t.width) - a.container[1]) * (parseInt(e, 10) / 100) + "px" : (s.content.style.width = e + "px", s.wrapper.style.width = s.content.offsetWidth + a.wrapper[0] + "px"), r.updateObject(s.content.style, {
                                    width: "",
                                    height: ""
                                }), e = parseInt(s.wrapper.style.width, 10), n = parseInt(s.wrapper.style.height, 10), i.params.can_resize) {
                                var o = t.width,
                                    c = t.height;
                                o -= a.container[0], c -= a.container[1], e > o && (i.params.constrain && (n *= o / e), e = o), n > c && (i.params.constrain && (e *= c / n), n = c), r.updateObject(s.wrapper.style, {
                                    width: e + "px",
                                    height: n + "px"
                                })
                            }
                            s.content.style.height = n - a.wrapper[1] + "px", i.dimensions != ["100%", "100%"] && r.center(s.wrapper)
                        }
                        s.overlay.style.height = Math.max(document.body.clientHeight, document.documentElement.clientHeight) + "px"
                    }
                },
                updateObject: function(t, e) {
                    for (var n in e) t[n] = e[n]
                },
                center: function(t) {
                    var e = r.getPageSize(),
                        n = r.getScrollPos(),
                        i = r.getElementSize(t),
                        o = Math.round((e.width - i.width) / 2 + n.scrollX),
                        s = Math.round((e.height - i.height) / 2 + n.scrollY);
                    t.offsetLeft && (o -= t.offsetLeft), t.offsetTop && (s -= t.offsetTop), t.style.left && (o += parseInt(t.style.left, 10)), t.style.top && (s += parseInt(t.style.top, 10)), o -= 10, r.updateObject(t.style, {
                        top: s + "px",
                        left: o + "px"
                    })
                },
                getStyle: function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : window.getComputedStyle ? document.defaultView.getComputedStyle(t, null).getPropertyValue(e) : void 0
                },
                getScrollPos: function() {
                    var t = document.documentElement;
                    return {
                        scrollX: document.body.scrollLeft || window.pageXOffset || t && t.scrollLeft,
                        scrollY: document.body.scrollTop || window.pageYOffset || t && t.scrollTop
                    }
                },
                getPageSize: function() {
                    return {
                        width: window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body.clientWidth,
                        height: window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body.clientHeight
                    }
                },
                getElementSize: function(t) {
                    return {
                        width: t.offsetWidth || t.style.pixelWidth,
                        height: t.offsetHeight || t.style.pixelHeight
                    }
                },
                fade: function(t, e, n, i, o) {
                    if ((void 0 === e || e < 0) && (e = 0), e > 100 && (e = 100), (void 0 === n || n < 0) && (n = 0), n > 100 && (n = 100), void 0 === i && (i = 0), t.fader && clearInterval(t.fader), !i) return r.setOpacity(null, t, n), void(o && o());
                    var s = (n - e) / (i / 25);
                    0 == s ? s = 1 : s > 0 ? s = Math.ceil(s) : s < 0 && (s = Math.floor(s)), t.fader = setInterval(r.bind(function(t, e, n, i, o) {
                        var s = r.getOpacity(t, e) + n;
                        r.setOpacity(t, e, s), (n < 0 && s <= i || n > 0 && s >= i) && (r.setOpacity(t, e, i), clearInterval(e.fader), o && o())
                    }, t, s, n, o), 25)
                },
                setOpacity: function(t, e, n) {
                    n = Math.round(n), e.style.opacity = n / 100, e.style.filter = "alpha(opacity=" + n + ")"
                },
                getOpacity: function(t, e) {
                    return 100 * r.getStyle(e, "opacity")
                },
                addEvent: function(t, e, n) {
                    return t.addEventListener ? (t.addEventListener(e, n, !1), !0) : !!t.attachEvent && t.attachEvent("on" + e, n)
                },
                addEventListener: function(t, e) {
                    o[t] || (o[t] = []), o[t].push(e)
                },
                removeEventListener: function(t, e) {
                    if (o[t]) {
                        var n = o[t].indexOf(e);
                        n > -1 && o[t].splice(n, 1)
                    }
                },
                fireEvent: function(t) {
                    if (o[t] && o[t].length)
                        for (var e = 0; e < o[t].length; e++) {
                            for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
                            if (!1 === o[t][e](n)) break
                        }
                },
                plugins: {
                    list: [],
                    register: function(t, e) {
                        void 0 === e && (e = !1), e ? r.plugins.list.push(t) : r.plugins.list = [t].concat(r.plugins.list)
                    }
                }
            }, i = {}, o = {}, s = {}, a = {}, c = function(t) {
                r.getPageSize(), s.container = document.createElement("div"), s.container.id = "ibox", s.overlay = document.createElement("div"), s.overlay.style.display = "none", r.setOpacity(null, s.overlay, 0), r.is_firefox ? s.overlay.style.backgroundImage = "url('" + d.bg + "')" : s.overlay.style.background = "#000000", s.overlay.id = "ibox_overlay", r.updateObject(s.overlay.style, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%"
                }), s.container.appendChild(s.overlay), s.loading = document.createElement("div"), s.loading.id = "ibox_loading", s.loading.innerHTML = "Loading...", s.loading.style.display = "none", s.container.appendChild(s.loading), s.wrapper = document.createElement("div"), s.wrapper.id = "ibox_wrapper", r.updateObject(s.wrapper.style, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "none"
                }), s.content = document.createElement("div"), s.content.id = "ibox_content", r.updateObject(s.content.style, {
                    overflow: "auto"
                }), s.wrapper.appendChild(s.content);
                var e = document.createElement("div");
                e.id = "ibox_footer_wrapper";
                var n = document.createElement("a");
                return n.innerHTML = r.close_label, n.href = "javascript:void(0)", e.appendChild(n), s.footer = document.createElement("div"), s.footer.id = "ibox_footer", s.footer.innerHTML = "&nbsp;", e.appendChild(s.footer), s.wrapper.appendChild(e), s.container.appendChild(s.wrapper), t.appendChild(s.container), r.updateObject(s.wrapper.style, {
                    right: "",
                    bottom: ""
                }), s.container
            }, u = function(t, e) {
                void 0 === e && (e = document.body);
                for (var n = e.getElementsByTagName(t), i = 0; i < n.length; i++) "hidden" != r.getStyle(n[i], "visibility") && "none" != n[i].style.display && (n[i].style.visibility = "hidden", n[i].wasHidden = !0)
            }, l = function(t, e) {
                void 0 === e && (e = document.body);
                for (var n = e.getElementsByTagName(t), r = 0; r < n.length; r++) n[r].wasHidden && (n[r].style.visibility = "visible", n[r].wasHidden = null)
            }, p = function(t, e, n) {
                f || h(), void 0 === e && (e = {}), i.plugin && r.hide(), i.is_loaded = !0, i.params = e, s.loading.style.display = "block", r.center(s.loading), r.reposition();
                for (var o = 0; o < r.tags_to_hide.length; o++) u(r.tags_to_hide[o]);
                var a;
                s.footer.innerHTML = t || "&nbsp;", s.overlay.style.display = "block", a = r.is_firefox ? 100 : 70, r.fade(s.overlay, r.getOpacity(null, s.overlay), a, r.fade_in_speed, n), r.fireEvent("show")
            }, f = !1, h = function() {
                if (!f) {
                    var t, e;
                    f = !0, t = document.getElementsByTagName("head")[0], (e = document.createElement("div")).innerHTML = '<p>x</p><style type="text/css">#ibox_footer_wrapper {font-weight:bold;height:20px;line-height:20px;} #ibox_footer_wrapper a {text-decoration:none;background:#888;border:1px solid #666;line-height:16px;padding:0 5px;color:#333;font-weight:bold;font-family:Verdana, Arial, Helvetica, sans-serif;font-size:10px;} #ibox_footer_wrapper a:hover {background-color:#bbb;color:#111;} #ibox_footer_wrapper {font-size:12px;font-family:Verdana, Arial, Helvetica, sans-serif;color:#111;} #ibox_wrapper {border:1px solid #ccc;} #ibox_wrapper {background-color:#999;}#ibox_content {background-color:#eee;border:1px solid #666;} #ibox_loading {padding:50px; background:#000;color:#fff;font-size:16px;font-weight:bold;}</style>', t.insertBefore(e.childNodes[1], t.firstChild), e.innerHTML = '<p>x</p><style type="text/css">#ibox {z-index:1000000;text-align:left;} #ibox_overlay {z-index:1000000;} #ibox_loading {position:absolute;z-index:1000001;} #ibox_wrapper {margin:30px;position:absolute;top:0;left:0;z-index:1000001;} #ibox_content {z-index:1000002;margin:27px 5px 5px 5px;padding:2px;} #ibox_content object {display:block;} #ibox_content .ibox_image {width:100%;height:100%;margin:0;padding:0;border:0;display:block;} #ibox_footer_wrapper a {float:right;display:block;outline:0;margin:0;padding:0;} #ibox_footer_wrapper {text-align:left;position:absolute;top:5px;right:5px;left:5px;white-space:nowrap;overflow:hidden;}</style>', t.insertBefore(e.childNodes[1], t.firstChild);
                    for (var n, i = document.getElementsByTagName("script"), o = 0, s = null; s = i[o]; o++)
                        if ((n = s.getAttribute("src")) && "/ibox.js" == (n = n.split("?")[0]).substr(n.length - 8)) {
                            r.setPath(n.substr(0, n.length - 7));
                            break
                        } c(document.body), r.fireEvent("load")
                }
            }, r.addEvent(window, "keypress", function(t) {
                t.keyCode == (window.event ? 27 : t.DOM_VK_ESCAPE) && A.hide()
            }), r.addEvent(window, "resize", r.reposition), r.addEvent(window, "load", h), r.addEvent(window, "scroll", r.reposition), r);
        t.exports = A
    }, function(t, e, n) {
        "use strict";
        /*!
         * GradeCam Plugin SDK
         * v6.5.1.3
         * http://www.gradecam.com
         * Copyright GradeCam, Inc 2014
         */
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(60),
            s = n(33),
            a = n(27),
            c = n(28),
            u = n(25),
            l = n(6),
            p = new o,
            f = s.getExposedPublicAPI(p);
        window && (window.gradecam = f), f.bind("pluginLoad", function(t) {
            window.gradeCamOnPluginLoad && window.gradeCamOnPluginLoad(t)
        }), f.forms = c.forms, f.forms2 = c.forms2, f._registerFileReader = function(t, e) {
            u._registerFileReader(t, e)
        }, f.registerFileHandler = function(t, e) {
            u.registerFileHandler(t, e)
        };
        var h = "us",
            d = "https://downloads.gradecam.com";
        window._GCREGION && (h = window._GCREGION), "asia" == h && (d = "https://cdn-qnhd.menco.cn/assets/vendors/gradecam/gc"), f.registerFileHandler(["pdf"], d + "/pdfloader/current/loader.js"), f.registerFileHandler(["tif", "tiff"], d + "/tiffloader/current/tiffloader.js"), a.domLoaded(function() {
            return r(this, void 0, void 0, function() {
                return i(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return t.trys.push([0, 2, , 3]), [4, l.readyDfd];
                        case 1:
                            return t.sent(), [3, 3];
                        case 2:
                            return t.sent(), [3, 3];
                        case 3:
                            return window.gradeCamOnAPILoad && setTimeout(function() {
                                window.gradeCamOnAPILoad(f)
                            }, 0), p._setReady(), [2]
                    }
                })
            })
        }), f.SDK_VERSION = "6.5.1.3", t.exports = f
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(33),
            s = n(3),
            a = n(0),
            c = n(57),
            u = n(27),
            l = n(41),
            p = n(40),
            f = n(45),
            h = n(48),
            d = n(4),
            A = n(173),
            g = n(191),
            m = n(192),
            y = n(2),
            v = n(193),
            b = n(54),
            w = n(1),
            _ = n(194),
            S = n(27),
            x = n(15),
            k = n(195),
            C = n(24);
        n(22);
        var I = n(16),
            E = n(196),
            O = new y,
            M = 0,
            R = n(14),
            D = n(10),
            B = null,
            T = 2e3;

        function F(t) {
            t && t.data && "GCSDK" == t.data.target && t.data.resp && (B = t.data.resp, window.removeEventListener("message", F))
        }

        function V() {
            document.documentElement.className.indexOf("GCPlugin2") > -1 && (window.addEventListener("message", F), setTimeout(function() {
                null === B && (B = !1, window.removeEventListener("message", F))
            }, T), window.postMessage({
                req: "version",
                target: "GCPlugin2"
            }, "*"))
        }

        function j(t, e) {
            a(t.items).each(function(t) {
                t.validate = !1
            }), e(t.items)
        }
        S.domLoaded(function() {
            return setTimeout(V, 200)
        });
        var N = function(t) {
                setTimeout(t, 0)
            },
            P = function() {
                function t() {
                    var t = this;
                    this.evtObj = new s.ClassTS, this.controller = null, this.el = null, this.readyDfd = w.newDeferred(), this.pid = M++, this.cameraStarted = !1, this.webTyperId = null, this.curCamera$ = new E.BehaviorSubject(""), this.scan$ = new I.Subject, this.formcode$ = new I.Subject, this.scanCallback = null, this.showMsg = !0, this.mode = new h, this.instanceDfd = w.newDeferred(), this.instanceOptions = {}, this.requiredFeatures = [], this.requiredVersion = "0.0.0.0", this.desiredVersion = "current", this.returnURL = window.location.href, this.validateCallback = j, this.videoWidth = 640, this.videoHeight = 480, this.isFileScanning = !1, this.useRotate = !1, this.typerConfig = null, this.scanManager = null, this.statusReporter = null, this.bind = a.bind(this.evtObj.bind, this.evtObj), this.unbind = a.bind(this.evtObj.unbind, this.evtObj), this._simulateScan = this.onRawScan;
                    try {
                        this.opts = JSON.parse(decodeURIComponent(l.get("gradecam_options"))) || {}
                    } catch (t) {
                        this.opts = {}
                    }
                    a.defaults(this.opts, {
                        multiplicity_error_threshold_not_expected: .001,
                        multiplicity_error_threshold_expected: .01,
                        choice_error_threshold: 1e-5,
                        sigma_threshold: 3,
                        filescan_sigma_threshold: 5,
                        rotate: 0
                    }), c.bind("install", function(e) {
                        t.evtObj.trigger("install", e)
                    }), this.bind("scan", function() {
                        p.increment(p.SCAN_COUNT), p.save()
                    }), this.scanManager = this.initScanManager();
                    var e = this.statusReporter = new g(this.scanManager);
                    e.bind("problem", function(e) {
                        t.showMsg && t.displayMessage(e.message), t.evtObj.trigger("scanIssue", e)
                    }), e.bind("enableHighRes", function(e) {
                        return t.enableHighRes(e)
                    }), this.instanceDfd.promise.then(function(e) {
                        return t.initializeController(e)
                    }, function(t) {
                        return console.warn("Instantiation error:", t)
                    })
                }
                return t.prototype.processScanOutput = function(t) {
                    return r(this, void 0, void 0, function() {
                        return i(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, t.getScanOutput(this.mode.type, this.mode.output_version || 0)];
                                case 1:
                                    return [2, e.sent()]
                            }
                        })
                    })
                }, t.prototype.initScanManager = function() {
                    var t = this,
                        e = new A,
                        n = this.opts;
                    return e.setMultiplicityErrorThreshold(n.multiplicity_error_threshold_expected, n.multiplicity_error_threshold_not_expected), e.setChoiceErrorThreshold(n.choice_error_threshold), e.setValidateCallback(m(this.validateCallback)), e.bind("pause", function() {
                        t.controller.pause()
                    }), e.bind("unpause", function() {
                        t.controller.unpause()
                    }), e.bind("scan", function(e) {
                        return r(t, void 0, void 0, function() {
                            var t, n = this;
                            return i(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.processScanOutput(e)];
                                    case 1:
                                        return t = r.sent(), [3, 3];
                                    case 2:
                                        throw r.sent();
                                    case 3:
                                        return this.scanCallback && N(function() {
                                            return n.scanCallback(t)
                                        }), N(function() {
                                            n.evtObj.trigger("scan", t), n.scan$.next(t)
                                        }), this.displayMessage(), [2]
                                }
                            })
                        })
                    }), e.bind("formcode", function(e) {
                        N(function() {
                            t.evtObj.trigger("formcode", e), t.formcode$.next(e)
                        })
                    }), e.bind("enableHighRes", function(e) {
                        return t.enableHighRes(e)
                    }), e
                }, t.prototype.onRawScan = function(t, e) {
                    return this.scanManager.processScan(t, e).catch(function(t) {})
                }, t.prototype.callSetCamera = function() {
                    if (this.cameraStarted = !0, this.controller) {
                        var t = this.getOption("selected_camera") || "",
                            e = this.getOption("rotate"),
                            n = this.getOption("flip_image");
                        !this.useRotate || !0 !== n && !1 !== n || (e = n ? D.Rotate.Full180 : D.Rotate.None, this.setOptions({
                            flip_image: void 0,
                            rotate: e
                        }, !1)), this.useRotate && (e || e === C.CameraRotate.None) ? this.controller.setCamera(t, e) : this.controller.setCamera(t, n || !1), this.curCamera$.next(t)
                    }
                }, t.prototype.initializeController = function(t) {
                    var e = this,
                        n = t.getNeedsTransparency(),
                        r = this.controller = t;
                    this.useRotate = this.controller.supports("rotate"), r.startPolling(), r.bind("scan", function(t) {
                        return e.onRawScan(t)
                    }), r.bind("cameraVisible", function(t) {
                        n && (t ? e.hideWatermark(e.el) : e.showWatermark(e.el), e.evtObj.trigger("cameraVisible", t))
                    }), r.bind("videoSize", function(t, n) {
                        e.videoWidth == t && e.videoHeight == n || (e.videoWidth = t, e.videoHeight = n, e.evtObj.trigger("videoSize", t, n))
                    }), this.cameraStarted && this.callSetCamera(), this.scanManager.setSpeedHandicap(r.getSpeedHandicap()), this.evtObj.trigger("pluginLoad", o.getExposedPublicAPI(this))
                }, t.prototype.displayMessage = function(t, e) {
                    var n = this,
                        r = u.$("gcPluginMsgDiv");
                    r && r.parentNode && r.parentNode.removeChild(r), t && ((r = document.createElement("div")).setAttribute("id", "gcPluginMsgDiv"), r.setAttribute("style", "position:absolute; bottom: 5%; left: 5%; width:86%; background-color: rgba(50,50,50,0.8); border-radius:5px; border: 1px solid black; padding: 2%; color: #fff; font-size: 14px;"), r.innerHTML = t, this.el.appendChild(r), setTimeout(function() {
                        try {
                            n.el.removeChild(r)
                        } catch (t) {}
                    }, e || 4e3))
                }, t.prototype.findElementInDOM = function() {
                    var t = this,
                        e = w.newDeferred(),
                        n = function() {
                            u.isInDOMTree(t.el) ? e.resolve(t.el) : setTimeout(n, 50)
                        };
                    return n(), e.promise
                }, t.prototype.performStart = function(t) {
                    c.requireFeatures(this.requiredFeatures), c.requireMinVersion(this.requiredVersion), c.preferVersion(this.desiredVersion), c.setReturnURL(this.returnURL), c.startInstall(this.el, this.instanceOptions).then(function(e) {
                        t.resolve(e)
                    }, function(e) {
                        t.reject(e)
                    })
                }, t.prototype.showWatermark = function(t) {
                    var e = "width:100%; height:100%; position: relative;";
                    e += "background-color: black; background-image: url(" + R.watermark + "); background-repeat: no-repeat; background-position: center;", t.setAttribute("style", e)
                }, t.prototype.hideWatermark = function(t) {
                    t.setAttribute("style", "width:100%; height:100%; position: relative;background-color: transparent;")
                }, t.prototype.getElement = function(t) {
                    var e = this;
                    if (!this.el) {
                        t && (this.instanceOptions = t), t && t.disable_camera ? this.cameraStarted = !1 : this.cameraStarted = !0;
                        var n = this.el = document.createElement("div");
                        n.style.width = "100%", n.style.height = "100%", n.setAttribute("id", "gcplugin" + this.pid), this.showWatermark(n), this.readyDfd.promise.then(function() {
                            return e.findElementInDOM().then(function(t) {
                                return e.performStart(e.instanceDfd)
                            })
                        }, function(t) {
                            console.warn("Start error:", t)
                        })
                    }
                    return this.el
                }, t.prototype.initTyper = function(t, e, n, o) {
                    return void 0 === o && (o = 0), r(this, void 0, void 0, function() {
                        return i(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return this.typerConfig = {
                                        fkey: t,
                                        delay: e,
                                        rkey: n,
                                        rkeyDelay: o || e
                                    }, [4, this.instanceDfd.promise];
                                case 1:
                                    return r.sent(), this.controller.initTyper(t, e, n, o || e), [2]
                            }
                        })
                    })
                }, t.prototype.setScanCallback = function(t) {
                    this.scanCallback = t
                }, t.prototype.setValidateCallback = function(t, e) {
                    void 0 === e && (e = !1), this.validateCallback = t, this.scanManager.setValidateCallback(m(t), e)
                }, t.prototype.processImageFile = function(t, e) {
                    return console && console.warn && console.warn("processImageFile is deprecated and may be removed in a future version of GCSDK."), this.controller.processImageFile(t, e)
                }, t.prototype.processImageFiles = function(t, e) {
                    return console && console.warn && console.warn("processImageFiles is deprecated and may be removed in a future version of GCSDK."), this.controller.processImageFiles(t, e)
                }, t.prototype.processImageFileArray = function(t, e, n) {
                    return console && console.warn && console.warn("processImageFileArray is deprecated and may be removed in a future version of GCSDK."), this.controller.processImageFileArray(t, e, n)
                }, t.prototype.setFileScanning = function(t) {
                    this.isFileScanning = t, t ? this.scanManager.setSigmaThreshold(this.opts.filescan_sigma_threshold) : this.scanManager.setSigmaThreshold(this.opts.sigma_threshold)
                }, t.prototype.scanFilesAsync = function(t, e) {
                    return r(this, void 0, void 0, function() {
                        var n, o = this;
                        return i(this, function(s) {
                            return f.setMode(this.getOptions().file_process_mode || "normal"), (n = this.controller.scanFilesAsync(t, function(t, n) {
                                return r(o, void 0, void 0, function() {
                                    var o, s, c, u, l, p, f, h, d, A, g, m, y, v, b, w, _, S = this;
                                    return i(this, function(x) {
                                        switch (x.label) {
                                            case 0:
                                                return this.setFileScanning(!0), n ? [3, 1] : (this.setFileScanning(!1), a.defer(e, null, null, n), [3, 15]);
                                            case 1:
                                                return a.every(t, function(t) {
                                                    return t.error
                                                }) || a.any(t, function(t) {
                                                    return "bw" == t.type
                                                }) ? (o = "unknown", s = void 0, c = a.find(t, function(t) {
                                                    return "readError" == t.type
                                                }), u = a.find(t, function(t) {
                                                    return "fileReader" == t.type
                                                }), l = a.find(t, function(t) {
                                                    return "file" == t.type
                                                }), p = a.find(t, function(t) {
                                                    return "bw" == t.type
                                                }), f = a.find(t, function(t) {
                                                    return "noOutput" == t.type
                                                }), u ? (o = "File " + u.msg + " appears to have an unsupported format.", s = u.msg) : l ? (o = "File " + l.fileName + " appears to be corrupted or have an unsupported format.", s = l.fileName) : p ? (o = "File " + p.fileName + " appears to be scanned in black and white and cannot be accurately graded.", o += "Please rescan using grayscale or color.", s = p.fileName) : f ? (o = "File " + f.fileName + " does not appear to have a GradeCam form in it.", s = f.fileName) : c && (o = "Could not read " + c.fileName + " -- " + c.msg), a.defer(e, {
                                                    message: o,
                                                    fileName: s
                                                }, null, n), [3, 15]) : [3, 2];
                                            case 2:
                                                h = a.filter(t, function(t) {
                                                    return !t.error
                                                }), d = [], A = 0, g = h, x.label = 3;
                                            case 3:
                                                if (!(A < g.length)) return [3, 8];
                                                m = g[A], x.label = 4;
                                            case 4:
                                                return x.trys.push([4, 6, , 7]), [4, this.scanManager.processScan(m, {
                                                    scansRequired: 1,
                                                    scansMax: 1,
                                                    scansToValidate: 1,
                                                    returnScan: !0,
                                                    dontValidate: !0
                                                })];
                                            case 5:
                                                return (y = x.sent()) ? d.push(y) : d.push(null), [3, 7];
                                            case 6:
                                                return x.sent(), [3, 7];
                                            case 7:
                                                return A++, [3, 3];
                                            case 8:
                                                if (!d.length) return a.defer(e, {
                                                    message: "No form could be read from this file",
                                                    fileName: "unknown"
                                                }, null, n), [2];
                                                (v = a.filter(d, function(t) {
                                                    return t.fc_data
                                                })).length && (d = v), d = a.sortBy(d, function(t) {
                                                    return t.getUnvalidatedItems().length
                                                }), b = d.pop(), x.label = 9;
                                            case 9:
                                                return x.trys.push([9, 14, , 15]), b.getUnvalidatedItems().length ? [4, this.scanManager.validateScan(b).then(function(t) {
                                                    return r(S, void 0, void 0, function() {
                                                        var r;
                                                        return i(this, function(i) {
                                                            switch (i.label) {
                                                                case 0:
                                                                    return [4, this.processScanOutput(t)];
                                                                case 1:
                                                                    return r = i.sent(), a.defer(e, null, r, n), [2]
                                                            }
                                                        })
                                                    })
                                                }, function() {
                                                    a.defer(n)
                                                })] : [3, 11];
                                            case 10:
                                                return x.sent(), [3, 13];
                                            case 11:
                                                return [4, this.processScanOutput(b)];
                                            case 12:
                                                w = x.sent(), a.defer(e, null, w, n), x.label = 13;
                                            case 13:
                                                return [3, 15];
                                            case 14:
                                                return _ = x.sent(), O.warn("Error processing results: ", JSON.stringify(t)), console && console.warn("error:", _), a.defer(e, {
                                                    message: _.toString(),
                                                    fileName: "Unknown"
                                                }, null, n), [3, 15];
                                            case 15:
                                                return [2]
                                        }
                                    })
                                })
                            })) ? [2, n] : (this.setFileScanning(!1), [2, !1])
                        })
                    })
                }, t.prototype.setMode = function(t) {
                    t.scan_mode && (t.type = t.scan_mode), this.mode.update(t), this.scanManager.setMode(this.mode)
                }, t.prototype.getMode = function() {
                    return this.mode.toJSON()
                }, t.prototype.getLastFormDescription = function() {
                    return this.scanManager.getLastFormDescription()
                }, t.prototype.setOptions = function(t, e) {
                    void 0 === e && (e = !0);
                    var n = this.opts;
                    a.extend(n, t), l.set("gradecam_options", JSON.stringify(n), 3650), (e && "flip_image" in t || "selected_camera" in t || "rotate" in t) && (this.el && this.supports("liveOptions") ? this.callSetCamera() : this.evtObj.trigger("needsRefresh")), e && a.any(a.keys(n), function(t) {
                        return -1 != t.indexOf("threshold")
                    }) && (this.scanManager.setMultiplicityErrorThreshold(n.multiplicity_error_threshold_expected, n.multiplicity_error_threshold_not_expected), this.scanManager.setChoiceErrorThreshold(n.choice_error_threshold), this.scanManager.setSigmaThreshold(this.isFileScanning ? n.filescan_sigma_threshold : n.sigma_threshold)), e && n.dsTimeout && (d.InterpretedScan.DeepSplitTimeout = n.dsTimeout)
                }, t.prototype.getOptions = function() {
                    return JSON.parse(JSON.stringify(this.opts))
                }, t.prototype.stopCamera = function() {
                    if (this.cameraStarted = !1, this.controller && this.supports("stopCamera")) return this.controller.stopCamera()
                }, t.prototype.startCamera = function() {
                    this.callSetCamera()
                }, t.prototype.getCameraList = function() {
                    return this.controller.getCameraList()
                }, t.prototype.getOption = function(t) {
                    return this.getOptions()[t]
                }, t.prototype.setActive = function(t) {
                    return this.controller.setActive(t)
                }, t.prototype.enableHighRes = function(t) {
                    return this.controller.enableHighRes(t || 5e3)
                }, t.prototype.setModuleOrder = function(t) {
                    return c.setModuleOrder(t)
                }, t.prototype.setModuleOption = function(t, e, n) {
                    return c.setModuleOption(t, e, n)
                }, t.prototype.getVersion = function() {
                    return this.controller ? this.controller.getVersion() : null
                }, t.prototype.getExtensionVersion = function() {
                    return B
                }, t.prototype.isAtLeastVersion = function(t) {
                    return this.controller ? this.controller.isAtLeastVersion(t) : null
                }, t.prototype.isInstalled = function() {
                    return c.isInstalled()
                }, t.prototype.getTyperConfig = function() {
                    return this.typerConfig
                }, t.prototype.getTyperOptions = function() {
                    return c.getTyperOptions(this.desiredVersion, this.returnURL)
                }, t.prototype.getTyperAvailability = function(t) {
                    var e = c.getTyperOptions(this.desiredVersion, this.returnURL);
                    return e.length ? a.findWhere(e, {
                        installed: !0
                    }) ? "installed" : "possible" : "not supported"
                }, t.prototype.setWebTyperId = function(t) {
                    this.webTyperId = t
                }, t.prototype.getWebTyperLink = function(t, e) {
                    if (!(t = t || this.webTyperId)) throw new Error("No typer ID specified");
                    return "javascript:(function(g,id){if(g._GCRequestGrades){g._GCRequestGrades(id)}else{var jsCode=document.createElement('script');jsCode.setAttribute('src','" + (e = e || {
                        scriptUrl: "https://downloads.gradecam.com/webtyper/current/typer.js"
                    }).scriptUrl + "');document.body.appendChild(jsCode);g._GCGradeXferReq=id}})(this,'" + t + "');"
                }, t.prototype.copyTyperToClipboard = function() {
                    if (!this.webTyperId) throw new Error("call setWebTyperId first");
                    return _.copyToClipboard("_GCPasteScores_:" + this.webTyperId)
                }, t.prototype.setTyperStrings = function(t) {
                    var e = this;
                    if (this.webTyperId) {
                        var n = {
                            charDelay: this.typerConfig.delay || 50,
                            entryDelay: this.typerConfig.rkeyDelay || 50,
                            rKey: this.typerConfig.rkey || "\t"
                        };
                        k.setWebTyperScores(this.webTyperId, t, n).then(function() {}, function(t) {
                            return console.warn("Error setting web typer: ", t)
                        })
                    }
                    return this.controller ? this.controller.setTyperStrings(t) : (this.instanceDfd.promise.then(function() {
                        e.setTyperStrings(t)
                    }), !0)
                }, t.prototype.clearTyperStrings = function() {
                    var t = this;
                    return this.controller ? this.controller.clearTyperStrings() : (this.instanceDfd.promise.then(function() {
                        t.clearTyperStrings()
                    }), !0)
                }, t.prototype.supports = function(t) {
                    switch (t) {
                        case "typer_copy":
                            return !!B && !x.isLessThan(B, "2.1.0.0");
                        case "webtyper":
                            return !0;
                        default:
                            return this.controller && this.controller.supports(t)
                    }
                }, t.prototype.requireSupport = function(t) {
                    this.requiredFeatures.push(t)
                }, t.prototype.requireVersion = function(t) {
                    this.requiredVersion = t
                }, t.prototype.setDesiredVersion = function(t) {
                    this.desiredVersion = t
                }, t.prototype.setReturnURL = function(t) {
                    this.returnURL = t
                }, t.prototype.getJPEGImage = function() {
                    return this.controller.getJPEGImage()
                }, t.prototype.getGCI = function() {
                    return this.controller.getCurrentImage()
                }, t.prototype.getJpegAsync = function(t) {
                    return this.controller.getJpegAsync(t)
                }, t.prototype.getGciAsync = function(t) {
                    return this.controller.getGciAsync(t)
                }, t.prototype.setLicensingInfo = function(t) {
                    for (var e = 0, n = ["licensee", "cust_id", "cust_state", "cust_school", "cust_district", "cust_type", "cust_studentcount", "cust_free", "cust_billMonth"]; e < n.length; e++) {
                        var r = n[e];
                        t[r] && p.set(r, t[r])
                    }
                    p.save()
                }, t.prototype.setTransparency = function() {
                    this.controller && this.controller.setTransparency()
                }, t.prototype.setShowMessages = function(t) {
                    this.showMsg = t
                }, t.prototype._setLogLevel = function(t) {
                    y.get().setLogLevel(t)
                }, t.prototype._debugScanById = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, n, r, o;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, v(t)];
                                case 1:
                                    e = i.sent(), n = 0, r = e, i.label = 2;
                                case 2:
                                    if (!(n < r.length)) return [3, 7];
                                    o = r[n], i.label = 3;
                                case 3:
                                    return i.trys.push([3, 5, , 6]), [4, this.onRawScan(o)];
                                case 4:
                                    return i.sent(), [3, 6];
                                case 5:
                                    return i.sent(), [3, 6];
                                case 6:
                                    return n++, [3, 2];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype._debugScan = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, n, r;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = 0, n = t, i.label = 1;
                                case 1:
                                    if (!(e < n.length)) return [3, 6];
                                    r = n[e], i.label = 2;
                                case 2:
                                    return i.trys.push([2, 4, , 5]), [4, this.onRawScan(r)];
                                case 3:
                                    return i.sent(), [3, 5];
                                case 4:
                                    return i.sent(), [3, 5];
                                case 5:
                                    return e++, [3, 1];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype._setReady = function() {
                    this.readyDfd.resolve()
                }, t.prototype._addFormToCache = function(t) {
                    b[t.form_id] = t
                }, t
            }();
        t.exports = P
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(0),
            s = n(62),
            a = n(82),
            c = n(136),
            u = n(9),
            l = [a, s, c],
            p = ["mobile-prompt", "plugin-always", "noplugin"];

        function f(t) {
            var e = o.filter(l, function(t) {
                    return t.isSupported()
                }),
                n = o.indexBy(e, function(t) {
                    return t.getName()
                });
            return o.map(t, function(t) {
                var e = t.split("-"),
                    r = n[e[0]];
                return r && (r.loadPref = e[1]), r
            })
        }
        var h = function() {
            function t(t) {
                this.el = t, this.activeModuleList = [], this.setModuleOrder(p)
            }
            return t.prototype.setModuleOrder = function(t) {
                this.activeModuleList = f(t), this.activeModuleList = o.filter(this.activeModuleList, function(t) {
                    return !!t
                })
            }, t.prototype.setModuleOption = function(t, e, n) {
                var r = o.find(this.activeModuleList, function(e) {
                    return e.getName() == t
                });
                r && r.setOption && r.setOption(e, n)
            }, t.prototype.instantiate = function(t) {
                var e = o.toArray(this.activeModuleList);
                return e = o.filter(e, function(e) {
                    return !e.supports || o.all(t.reqFeatures, function(t) {
                        return e.supports(t)
                    })
                }), this.instantiateFromList(e, t)
            }, t.prototype.instantiateFromList = function(t, e) {
                return r(this, void 0, void 0, function() {
                    var n, s, a, c, l, p, f, h, d, A, g = this;

                    function m(t, e) {
                        return a.module = t, "always" != t.loadPref && (a.fallbacks = e), new u.NeedsInstallError(a)
                    }
                    return i(this, function(y) {
                        for (n = e.reqFeatures, s = e.minVersion, a = {
                                installType: "install",
                                reason: "not present",
                                module: null,
                                fallbacks: null
                            }, c = function(t) {
                                if (n && n.length && !!o.any(n, function(e) {
                                        return !t.supports(e)
                                    })) return a.installType = "upgrade", a.reason = "features", !1;
                                return !!t.isAtLeastVersion(s) || (a.installType = "upgrade", a.reason = "version", !1)
                            }, l = o.toArray(t), p = null, f = 0, h = l; f < h.length; f++)(d = h[f]) && d.setDownloadsUrl && d.setDownloadsUrl(e.downloadsUrl);
                        return [2, (A = function() {
                            return r(g, void 0, void 0, function() {
                                var n, r;
                                return i(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (n = l.shift(), p || (p = n), n || !t.forceInstall) return [3, 1];
                                            throw a.installType = "unsupported", a.reason = "unsupported", new u.UnsupportedError("Not supported on this system");
                                        case 1:
                                            return n || t.forceInstall ? [3, 2] : ((r = o.toArray(t)).forceInstall = !0, [2, this.instantiateFromList(r, e)]);
                                        case 2:
                                            if (!n.isInstalled()) return [3, 7];
                                            i.label = 3;
                                        case 3:
                                            return i.trys.push([3, 5, , 6]), [4, n.instantiate(this.el, e, c)];
                                        case 4:
                                            return [2, i.sent()];
                                        case 5:
                                            if (i.sent(), n.loadPref || l.forceInstall) throw m(n, l);
                                            return [2, A()];
                                        case 6:
                                            return [3, 8];
                                        case 7:
                                            if (n.loadPref) throw m(n, l);
                                            return [2, A()];
                                        case 8:
                                            return [2]
                                    }
                                })
                            })
                        })()]
                    })
                })
            }, t.isInstalled = function(t) {
                var e = f(t = t || p),
                    n = !1,
                    r = o.any(e, function(t) {
                        return !!t && ("always" != t.loadPref || t.isInstalled() || (n = !0), t.isInstalled())
                    });
                return !(n || !r)
            }, t.getTyperOptions = function(t, e, n) {
                void 0 === t && (t = null);
                for (var r = f(t = t || p), i = [], s = function(t) {
                        if (!t || !t.supportsTyper()) return "continue";
                        var r = {
                            module: t.getName(),
                            installed: !!t.isTyperInstalled(),
                            url: t.makeInstallUrl(e, n),
                            makeUrl: function(n) {
                                return t.makeInstallUrl(e, n)
                            },
                            waitForInstall: o.bind(t.waitForInstall, t)
                        };
                        i.push(r)
                    }, a = 0, c = r; a < c.length; a++) {
                    s(c[a])
                }
                return i
            }, t
        }();
        t.exports = h
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(0),
            s = n(63),
            a = n(21),
            c = n(9),
            u = n(23);

        function l() {
            return u.ios ? "ios" : u.android ? "android" : "unknown/unsupported"
        }
        var p = new(function() {
            function t() {
                this.loadPref = null, this.mobileUrls = {}
            }
            return t.prototype.getName = function() {
                return "mobile"
            }, t.prototype.isSupported = function() {
                var t = l();
                return this.isInstalled() || !!this.mobileUrls[t]
            }, t.prototype.isInstalled = function() {
                return !!window.gcmobilesdk
            }, t.prototype.getInstallURL = function() {
                var t = l();
                return this.mobileUrls[t]
            }, t.prototype.makeInstallUrl = function() {
                var t = l();
                return this.mobileUrls[t]
            }, t.prototype.setOption = function(t, e) {
                var n = this;
                "url" == t && o.each(e, function(t, e) {
                    n.mobileUrls[e] = t
                })
            }, t.prototype.instantiate = function(t) {
                return r(this, void 0, void 0, function() {
                    var e;
                    return i(this, function(n) {
                        switch (n.label) {
                            case 0:
                                e = new s(t), n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, a(window.gcmobilesdk)];
                            case 2:
                                return n.sent(), [2, e];
                            case 3:
                                throw n.sent(), new c.UnauthenticatedError("Could not contact server");
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype.doesInstallRequireRestart = function() {
                return !0
            }, t.prototype.waitForInstall = function() {
                throw new c.UnsupportedError("Unsupported")
            }, t.prototype.supportsTyper = function() {
                return !1
            }, t.prototype.isTyperInstalled = function() {
                return !1
            }, t.prototype.cancelLoad = function() {}, t
        }());
        t.exports = p
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = n(3),
            s = n(0),
            a = n(15),
            c = n(7),
            u = {},
            l = function(t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n.active = !0, n.paused = !1, n.currentCameraInfo = new c.ReplaySubject(1), u = {
                        stop: !1,
                        ivId: -1,
                        callQ: [],
                        div: e
                    }, gcmobilesdk.cameraVisibleCallback = function(t) {
                        n.trigger("cameraVisible", t)
                    }, gcmobilesdk.updateDimensionCallback = function(t, e) {
                        n.videoWidth = t, n.videoHeight = e, n.trigger("videoSize", t, e)
                    }, gcmobilesdk.setGcipV2 && gcmobilesdk.setGcipV2(!0), gcmobilesdk.currentCameraInfoCallback = function(t) {
                        n.maxVideoWidth = t.w, n.maxVideoHeight = t.h, n.currentCameraInfo.next({
                            width: t.w,
                            height: t.h,
                            supportsHighRes: t.w * t.h > 48e4
                        })
                    }, n
                }
                return i(e, t), e.prototype.getCameraList = function() {
                    return gcmobilesdk.cameraList
                }, e.prototype.getVersionMajor = function() {
                    return gcmobilesdk.version.split(".")[0]
                }, e.prototype.getVersionMinor = function() {
                    return gcmobilesdk.version.split(".")[1]
                }, e.prototype.stopCamera = function() {
                    return gcmobilesdk.hide()
                }, e.prototype.setTransparency = function() {
                    return gcmobilesdk.command("allowTransparency")
                }, e.prototype.setCamera = function(t) {
                    gcmobilesdk.command("setCamera", t), this.setActive(!0)
                }, e.prototype.initTyper = function(t, e, n, r) {
                    return !1
                }, e.prototype.setTyperStrings = function(t) {
                    return !1
                }, e.prototype.clearTyperStrings = function() {
                    return !1
                }, e.prototype.inhibitProcessing = function(t) {
                    return !1
                }, e.prototype.getJPEGImage = function() {
                    return !1
                }, e.prototype.getCurrentImage = function() {
                    return !1
                }, e.prototype.getJpegAsync = function(t) {
                    gcmobilesdk.getJpegImage ? gcmobilesdk.getJpegImage(t) : t(!1)
                }, e.prototype.getGciAsync = function(t) {
                    gcmobilesdk.getCurrentImage ? gcmobilesdk.getCurrentImage(t) : t(!1)
                }, e.prototype.enableHighRes = function(t) {
                    return !!gcmobilesdk.setHighResFor && (gcmobilesdk.setHighResFor(t), !0)
                }, e.prototype.startPolling = function() {
                    var t = this;
                    gcmobilesdk.gcipCallback = function(e) {
                        (function(t) {
                            var e = this;
                            this.paused || s.defer(function() {
                                return e.trigger("scan", t)
                            })
                        }).call(t, e)
                    }
                }, e.prototype.getFileScanner = function() {
                    return null
                }, e.prototype._shutdown = function() {
                    this.unbind("scan"), clearInterval(u.ivId), u.ivId = -1, u.stop = !0
                }, e.prototype.pause = function() {
                    this.paused = !0
                }, e.prototype.unpause = function() {
                    this.paused = !1
                }, e.prototype.setActive = function(t) {
                    this.active = !!t, t ? (gcmobilesdk.showOnDiv(u.div), gcmobilesdk.command("startScanning")) : gcmobilesdk.hide()
                }, e.prototype.processImageFile = function(t, e) {
                    return !1
                }, e.prototype.processImageFiles = function(t, e) {
                    return !1
                }, e.prototype.processImageFileArray = function() {
                    return !1
                }, e.prototype.scanFilesAsync = function() {
                    return !1
                }, e.prototype.getVersion = function() {
                    return gcmobilesdk.version
                }, e.prototype.isAtLeastVersion = function(t) {
                    return !a.isLessThan(this.getVersion(), t)
                }, e.prototype.getSpeedHandicap = function() {
                    return 1
                }, e.prototype.supports = function(t) {
                    switch (t) {
                        case "versionString":
                            return !0;
                        case "liveOptions":
                        case "stopCamera":
                            return !0;
                        case "flipCamera":
                            return !1;
                        default:
                            return !!gcmobilesdk.supports && gcmobilesdk.supports(t)
                    }
                }, e.prototype.getNeedsTransparency = function() {
                    return !0
                }, e
            }(o.ClassTS);
        t.exports = l
    }, function(t, e, n) {
        "use strict";
        var r = n(18),
            i = n(19),
            o = n(37);
        e.toSubscriber = function(t, e, n) {
            if (t) {
                if (t instanceof r.Subscriber) return t;
                if (t[i.rxSubscriber]) return t[i.rxSubscriber]()
            }
            return t || e || n ? new r.Subscriber(t, e, n) : new r.Subscriber(o.empty)
        }
    }, function(t, e, n) {
        "use strict";
        e.isArray = Array.isArray || function(t) {
            return t && "number" == typeof t.length
        }
    }, function(t, e, n) {
        "use strict";
        e.isObject = function(t) {
            return null != t && "object" == typeof t
        }
    }, function(t, e, n) {
        "use strict";
        var r, i = n(36);

        function o() {
            try {
                return r.apply(this, arguments)
            } catch (t) {
                return i.errorObject.e = t, i.errorObject
            }
        }
        e.tryCatch = function(t) {
            return r = t, o
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = function(t) {
                function e(e) {
                    t.call(this), this.errors = e;
                    var n = Error.call(this, e ? e.length + " errors occurred during unsubscription:\n  " + e.map(function(t, e) {
                        return e + 1 + ") " + t.toString()
                    }).join("\n  ") : "");
                    this.name = n.name = "UnsubscriptionError", this.stack = n.stack, this.message = n.message
                }
                return r(e, t), e
            }(Error);
        e.UnsubscriptionError = i
    }, function(t, e, n) {
        "use strict";
        var r = n(8);

        function i(t) {
            var e, n = t.Symbol;
            return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
        }
        e.getSymbolObservable = i, e.observable = i(r.root), e.$$observable = e.observable
    }, function(t, e, n) {
        "use strict";
        var r = n(71),
            i = n(74);
        e.queue = new i.QueueScheduler(r.QueueAction)
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = function(t) {
                function e(e, n) {
                    t.call(this, e, n), this.scheduler = e, this.work = n
                }
                return r(e, t), e.prototype.schedule = function(e, n) {
                    return void 0 === n && (n = 0), n > 0 ? t.prototype.schedule.call(this, e, n) : (this.delay = n, this.state = e, this.scheduler.flush(this), this)
                }, e.prototype.execute = function(e, n) {
                    return n > 0 || this.closed ? t.prototype.execute.call(this, e, n) : this._execute(e, n)
                }, e.prototype.requestAsyncId = function(e, n, r) {
                    return void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : e.flush(this)
                }, e
            }(n(72).AsyncAction);
        e.QueueAction = i
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = n(8),
            o = function(t) {
                function e(e, n) {
                    t.call(this, e, n), this.scheduler = e, this.work = n, this.pending = !1
                }
                return r(e, t), e.prototype.schedule = function(t, e) {
                    if (void 0 === e && (e = 0), this.closed) return this;
                    this.state = t, this.pending = !0;
                    var n = this.id,
                        r = this.scheduler;
                    return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
                }, e.prototype.requestAsyncId = function(t, e, n) {
                    return void 0 === n && (n = 0), i.root.setInterval(t.flush.bind(t, this), n)
                }, e.prototype.recycleAsyncId = function(t, e, n) {
                    if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return e;
                    i.root.clearInterval(e)
                }, e.prototype.execute = function(t, e) {
                    if (this.closed) return new Error("executing a cancelled action");
                    this.pending = !1;
                    var n = this._execute(t, e);
                    if (n) return n;
                    !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                }, e.prototype._execute = function(t, e) {
                    var n = !1,
                        r = void 0;
                    try {
                        this.work(t)
                    } catch (t) {
                        n = !0, r = !!t && t || new Error(t)
                    }
                    if (n) return this.unsubscribe(), r
                }, e.prototype._unsubscribe = function() {
                    var t = this.id,
                        e = this.scheduler,
                        n = e.actions,
                        r = n.indexOf(this);
                    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
                }, e
            }(n(73).Action);
        e.AsyncAction = o
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = function(t) {
                function e(e, n) {
                    t.call(this)
                }
                return r(e, t), e.prototype.schedule = function(t, e) {
                    return void 0 === e && (e = 0), this
                }, e
            }(n(5).Subscription);
        e.Action = i
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return r(e, t), e
            }(n(75).AsyncScheduler);
        e.QueueScheduler = i
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = function(t) {
                function e() {
                    t.apply(this, arguments), this.actions = [], this.active = !1, this.scheduled = void 0
                }
                return r(e, t), e.prototype.flush = function(t) {
                    var e = this.actions;
                    if (this.active) e.push(t);
                    else {
                        var n;
                        this.active = !0;
                        do {
                            if (n = t.execute(t.state, t.delay)) break
                        } while (t = e.shift());
                        if (this.active = !1, n) {
                            for (; t = e.shift();) t.unsubscribe();
                            throw n
                        }
                    }
                }, e
            }(n(76).Scheduler);
        e.AsyncScheduler = i
    }, function(t, e, n) {
        "use strict";
        var r = function() {
            function t(e, n) {
                void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n
            }
            return t.prototype.schedule = function(t, e, n) {
                return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
            }, t.now = Date.now ? Date.now : function() {
                return +new Date
            }, t
        }();
        e.Scheduler = r
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = n(18),
            o = n(78);
        e.observeOn = function(t, e) {
            return void 0 === e && (e = 0), this.lift(new s(t, e))
        };
        var s = function() {
            function t(t, e) {
                void 0 === e && (e = 0), this.scheduler = t, this.delay = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new a(t, this.scheduler, this.delay))
            }, t
        }();
        e.ObserveOnOperator = s;
        var a = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = 0), t.call(this, e), this.scheduler = n, this.delay = r
            }
            return r(e, t), e.dispatch = function(t) {
                var e = t.notification,
                    n = t.destination;
                e.observe(n), this.unsubscribe()
            }, e.prototype.scheduleMessage = function(t) {
                this.add(this.scheduler.schedule(e.dispatch, this.delay, new c(t, this.destination)))
            }, e.prototype._next = function(t) {
                this.scheduleMessage(o.Notification.createNext(t))
            }, e.prototype._error = function(t) {
                this.scheduleMessage(o.Notification.createError(t))
            }, e.prototype._complete = function() {
                this.scheduleMessage(o.Notification.createComplete())
            }, e
        }(i.Subscriber);
        e.ObserveOnSubscriber = a;
        var c = function() {
            return function(t, e) {
                this.notification = t, this.destination = e
            }
        }();
        e.ObserveOnMessage = c
    }, function(t, e, n) {
        "use strict";
        var r = n(34),
            i = function() {
                function t(t, e, n) {
                    this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t
                }
                return t.prototype.observe = function(t) {
                    switch (this.kind) {
                        case "N":
                            return t.next && t.next(this.value);
                        case "E":
                            return t.error && t.error(this.error);
                        case "C":
                            return t.complete && t.complete()
                    }
                }, t.prototype.do = function(t, e, n) {
                    switch (this.kind) {
                        case "N":
                            return t && t(this.value);
                        case "E":
                            return e && e(this.error);
                        case "C":
                            return n && n()
                    }
                }, t.prototype.accept = function(t, e, n) {
                    return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
                }, t.prototype.toObservable = function() {
                    switch (this.kind) {
                        case "N":
                            return r.Observable.of(this.value);
                        case "E":
                            return r.Observable.throw(this.error);
                        case "C":
                            return r.Observable.empty()
                    }
                    throw new Error("unexpected notification kind value")
                }, t.createNext = function(e) {
                    return void 0 !== e ? new t("N", e) : t.undefinedValueNotification
                }, t.createError = function(e) {
                    return new t("E", void 0, e)
                }, t.createComplete = function() {
                    return t.completeNotification
                }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
            }();
        e.Notification = i
    }, function(t, e, n) {
        "use strict";
        var r, i = n(1);
        ! function(t) {
            function e(t) {
                var e = [];
                for (var n in t) e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                return e.join("&")
            }

            function n(t) {
                return function(e) {
                    var n = null;
                    if ("string" == typeof e) try {
                        n = JSON.parse(e)
                    } catch (t) {
                        n = e
                    } else n = e;
                    t.resolve(n)
                }
            }
            t.callbackCounter = 0, t.serialize = e, t.fetch = function(r, o) {
                var s = i.newDeferred(),
                    a = "JSONPCallback_" + t.callbackCounter++;
                window[a] = n(s), o.callback = a;
                var c = document.createElement("SCRIPT");
                return c.src = r + "?" + e(o), document.getElementsByTagName("HEAD")[0].appendChild(c), s.promise
            }, t.evalJSONP = n
        }(r || (r = {})), t.exports = r
    }, function(t, e, n) {
        (function(t) {
            var r = void 0 !== t && t || "undefined" != typeof self && self || window,
                i = Function.prototype.apply;

            function o(t, e) {
                this._id = t, this._clearFn = e
            }
            e.setTimeout = function() {
                return new o(i.call(setTimeout, r, arguments), clearTimeout)
            }, e.setInterval = function() {
                return new o(i.call(setInterval, r, arguments), clearInterval)
            }, e.clearTimeout = e.clearInterval = function(t) {
                t && t.close()
            }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
                this._clearFn.call(r, this._id)
            }, e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
            }, e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
            }, e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout()
                }, e))
            }, n(81), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
        }).call(this, n(17))
    }, function(t, e, n) {
        (function(t, e) {
            ! function(t, n) {
                "use strict";
                if (!t.setImmediate) {
                    var r, i, o, s, a, c = 1,
                        u = {},
                        l = !1,
                        p = t.document,
                        f = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    f = f && f.setTimeout ? f : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) {
                        e.nextTick(function() {
                            d(t)
                        })
                    } : ! function() {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0,
                                n = t.onmessage;
                            return t.onmessage = function() {
                                e = !1
                            }, t.postMessage("", "*"), t.onmessage = n, e
                        }
                    }() ? t.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(t) {
                        d(t.data)
                    }, r = function(t) {
                        o.port2.postMessage(t)
                    }) : p && "onreadystatechange" in p.createElement("script") ? (i = p.documentElement, r = function(t) {
                        var e = p.createElement("script");
                        e.onreadystatechange = function() {
                            d(t), e.onreadystatechange = null, i.removeChild(e), e = null
                        }, i.appendChild(e)
                    }) : r = function(t) {
                        setTimeout(d, 0, t)
                    } : (s = "setImmediate$" + Math.random() + "$", a = function(e) {
                        e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(s) && d(+e.data.slice(s.length))
                    }, t.addEventListener ? t.addEventListener("message", a, !1) : t.attachEvent("onmessage", a), r = function(e) {
                        t.postMessage(s + e, "*")
                    }), f.setImmediate = function(t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                        var i = {
                            callback: t,
                            args: e
                        };
                        return u[c] = i, r(c), c++
                    }, f.clearImmediate = h
                }

                function h(t) {
                    delete u[t]
                }

                function d(t) {
                    if (l) setTimeout(d, 0, t);
                    else {
                        var e = u[t];
                        if (e) {
                            l = !0;
                            try {
                                ! function(t) {
                                    var e = t.callback,
                                        r = t.args;
                                    switch (r.length) {
                                        case 0:
                                            e();
                                            break;
                                        case 1:
                                            e(r[0]);
                                            break;
                                        case 2:
                                            e(r[0], r[1]);
                                            break;
                                        case 3:
                                            e(r[0], r[1], r[2]);
                                            break;
                                        default:
                                            e.apply(n, r)
                                    }
                                }(e)
                            } finally {
                                h(t), l = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(this, n(17), n(39))
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(21),
            s = n(42),
            a = n(9),
            c = n(23),
            u = n(135),
            l = new(function() {
                function t() {
                    this.loadPref = null
                }
                return t.prototype.getName = function() {
                    return "plugin"
                }, t.prototype.isSupported = function() {
                    return !(c.pluginsDisabled || c.mobile || c.cros) || !!this.isInstalled()
                }, t.prototype.isInstalled = function() {
                    return !!u.isPluginInstalled()
                }, t.prototype.makeInstallUrl = function(t, e) {
                    var n = this.downloadsUrl;
                    if (t || e) {
                        var r = [];
                        t && r.push("v=" + t), e && r.push("url=" + encodeURIComponent(e)), n = n + "?" + r.join("&")
                    }
                    return n
                }, t.prototype.setDownloadsUrl = function(t) {
                    this.downloadsUrl = t
                }, t.prototype.instantiate = function(t, e, n) {
                    return r(this, void 0, void 0, function() {
                        var e, r, c, l, p;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return e = {
                                        gcip_v2: !0
                                    }, [4, u.injectPlugin(t, "gcpluginid", e)];
                                case 1:
                                    if (r = i.sent(), c = r[0], l = r[1], p = new s(c, l), !n(p)) throw new Error("Invalid version");
                                    i.label = 2;
                                case 2:
                                    return i.trys.push([2, 4, , 5]), [4, o(c)];
                                case 3:
                                    return i.sent(), [2, p];
                                case 4:
                                    throw i.sent(), new a.UnauthenticatedError("Could not contact server");
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.supportsTyper = function() {
                    return !0
                }, t.prototype.isTyperInstalled = function() {
                    return !!this.isInstalled()
                }, t.prototype.doesInstallRequireRestart = function() {
                    return !1
                }, t.prototype.cancelLoad = function() {
                    u.cancelWait()
                }, t.prototype.waitForInstall = function() {
                    return u.waitForInstall()
                }, t
            }());
        t.exports = l
    }, function(t, e, n) {
        "use strict";
        var r = n(6),
            i = n(84),
            o = n(133),
            s = function(t) {
                return new o(t)
            };
        r.webWorker && r.fileSupport && (s = function(t) {
            return t.supports("directData") ? new i(t) : new o(t)
        }), t.exports = s
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(0),
            s = n(44),
            a = n(25),
            c = n(1),
            u = function() {
                function t(t) {
                    this.plugin = t, this.createDirectoryScanner = this.createHtml5Loader, this.createFileScanner = this.createHtml5Loader
                }
                return t.prototype.displayObject = function(t) {
                    return this.plugin.displayDirectObj(t)
                }, t.prototype.processDirectData = function(t) {
                    return this.plugin.processDirectData(t)
                }, t.prototype.createHtml5Loader = function(t, e) {
                    return r(this, void 0, void 0, function() {
                        var n, r, u = this;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!t) throw new Error("Missing callback");
                                    e = e && o.isArray(e) ? c.newDeferred(e).promise : s(), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, , 5]), [4, e];
                                case 2:
                                    return n = i.sent(), [4, a.ensureFileLoaders(n)];
                                case 3:
                                    return i.sent(), r = new a(n, function(t) {
                                        return u.displayObject(t)
                                    }, function(t) {
                                        return u.processDirectData(t)
                                    }), t(r), [2, r];
                                case 4:
                                    return i.sent(), t && t(null), [2, null];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.loadFromFileArray = function(t, e) {
                    return this.createHtml5Loader(t, e)
                }, t.prototype.canUseFileArray = function() {
                    return !0
                }, t
            }();
        t.exports = u
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAqFBMVEVHcEwXFxcHBwcDAwNcXFwCAgIKCgoBAQECAgIBAQEGBgYCAgIZGRkFBQUEBAQWFhYaGhoHBwcGBgYTExMGBgYCAgIZGRkVFRUgICAAAAD///+RkpP09PSurq9oaGq9vb62trf5+voTExQ3NzikpKV3eHrq6urCwsPi4uKLi4tOTk5+fn+Pj5DY2NleXl+YmJru7+9CQkJVVlYhISKFhYWWl5gsLCzJycqv97uxAAAAGXRSTlMAQF6iBMCb/ev12eAea5MPMI5yhs2xNpdTi+vdtAAAASxJREFUGBlVwYd22gAQRcEFBJLo7Ti5T53eXZP8/59Fi5s8Y19as4i48zuwn4J2NwqBMF7OJ9bQ6vMtatuXEbXV6Xx8u71S69mHEbC6PMlV2V+gY3ct4PmgT1UOzK0W9GFdqSGHeGhmbVjt5NJrqrs1jM2sC4ncfptsC7l/MBjaQ8QqVW132ynND3JrWNgi5CSXJZI2G7k36NsAznKPmaTiIldCbMBRLikl7Y9ye8AiOMs9ZpKKi1wJofVCXuSyP5I2G7kEBtaKWVWq7fInpflB7gQ9C5aQye23ybaUO4REU7M5vFZy6TXV3Qk6ZjaJ4KamBJharQ3k+pYAY7sbA+tC764vQDewdz1q63NWlMdnat2JfRrFNMysYTgbhLgw6jzYT8PFMibu/5rah/8tLjIEiYDlRQAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAApVBMVEVHcEwQEBALCwsHBwcVFRUlJSUCAgICAgIBAQEBAQEEBAQEBAQYGBgGBgYJCQkREREBAQECAgIJCQkNDQ0EBAQJCQkDAwMgICAMDAwmJiaTk5MAAAD///+wsLC9vb5MTEyEhIWUlJacnJ76+vstLS01NjcNDQ3n5+gkJSXNzc22trbY2NmNjY1kZGVYWFitra6rq6tsbG19fX3w8PBBQUHe3t94eXkyfwV4AAAAG3RSTlMAU5B7NBbr//P52qEmz5lJ4MFocrbJpwyGeAfzDZQpAAABFklEQVQYGV3Bh2KCQBBAwUWBA3sveSuggr2b5P8/LcoRg5mRF3fSIRw5H/KPM/BDgzFBs+pJiTvkj9+TFycEVvHtkBw3PLSk0AZWyVqflrMUqEuuEUC611/LK9CTpwFs7lpyhdATERfMVnPLpeYyqIhIC45qzWea20LHk3ENs9enKMkitTJMVdoBqea20W2nVgJNmYactLA4qzUDXyaGoxYWZ7UiCGQactLC4qzWDgJxAjItLM5qHaAmXgezVmt+USvGVERGkKh1iTT3ZfAbIm1YrfVNDHV5aMKnls3BNOTBBeK7vsyBiuT6wGam1v4EdKVQ5SH9vkS7Q2yA7lh+OT4lFSnxqrWQJ+PXXXnn9YcBYa3lSuEHU7wy4A3zBlYAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAolBMVEVHcEwHBwcDAwMICAgfHx8JCQkBAQEBAQEBAQEBAQEWFhYZGRkICAgKCgoDAwMDAwMYGBgEBAQWFhYSEhIODg4VFRUGBgYWFhYCAgIkJCQAAAD///9jY2TX19f6+vqMjI1GRkZ8fH0wMTEnJyidnZ6VlZa+vr5zc3RWVlfGxsfr7OyEhYWrq6zt7e6JiYkRERK1trYJCQnh4eKwsLLw8fHNzc4NYEBHAAAAGnRSTlMAvdtaE4X76PX+UiKSdKKXNssxPc6EZHqvYDWWykgAAAEmSURBVBgZXcGHYpswFEDRBwYkeWUn7X1ieo84cdL+/68VYZvSniO9+9Rg52P53ygymcM5+zBLZOD+gb/MSHqjDPio6tPBL2hN5Wrs4Hzaa1AcF8CddCYWmlxvCg+8ShDB4pcOeLCJiDw5zrkGRb7XTgOpiMxho8Fus6qXGqwhTiSJcV/aet9+qfqdBg3ZTMaWRoN8parLpQY1RPKS4bXnf2twBCPTjI1e5X6pnTVYSTO8Xqz8Ti++wchPS6Wd00pvDvAsE8N5r611rb0K9yLyA0ptfW/Ksjzk2sodZiIyho93DYqWBhXcSSuGSodKcBNpPQHbQnslkEpnBiw+9SLfApFcpbSa+rj+LCsHRIncjAwDUxlI0jgjcGb+KP9K3p4tNp4+ytUf90kxNJV+dd0AAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAolBMVEVHcEwEBAQAAAAUFBQBAQELCwsDAwQAAAALCwsODg4FBQUKCgoEBAQbGxsCAgITExMtLS0JCQljY2MVFRUODg4FBQUeHh4AAAD///98fX7r6+uJiov09PS9vb6ampv7+/sxMTERERIlJSaztLWCg4NOTk/g4OBaWluTk5TOzs9ERESpqqpdXV3Gxsfa2tpsbG5xcXNkZGU6OjrR0dFvb3GgoaEVaawYAAAAF3RSTlMA3PUp53r8/YtbzLahGO5ID70FOWGSavqVABgAAAEsSURBVBgZXcEHlptAEEDBJg2grA3+PQShHDfbvv/VTEtaHusq6TxmMeFoKv/L5xOXQhoOkpn0PA7opHEundwBq50vt4c1rUzucmBVFmqayxrI5CpysNzrt+oFyMUMYFlpzwtMZiIyBbdXU70Vapo1JCIyAq+m/jj6hZoagpmMY1yhreJQqP45qVnjniQP+VJT1Kpa1mo+YCjPjk+9afabslLzFwKZp3i9qY6fvlGzgVhGKe/aKRdqLhDLL8dZTf2qqqetGg9ziWJWlbZe3xtVv1HzhUtEhrBQs/BHv1BzgmAsksOqUlO8FXp1hmcReQhgp31bcJG0psCh0U4JJHKVAMtab37vgKHcZbSW/lJvyjOt4YN8e5rQk0nPOAscJo1Hkfw0TgYhYZBFcvcP0HUtEWyi/mkAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAtFBMVEVHcEwZGRkCAgIMDAwHBwc5OTkAAAALCwsCAgICAgICAgIJCQkSEhIcHBwQEBAFBQUXFxcGBgYFBQUQEBACAgIBAQEBAQEbGxsCAgIWFhYXFxcYGBgAAAD///+AgYGampv39/dWV1jj4+T7+/uJiYp7e30/Pz/t7e40NDS+vr7z8/Nyc3QSEhOxsbFNTU1hYmMjIyTp6eocHByhoqKQkJEMDAzIyMmoqKnNzc7Y2NnU1dVqamsgoizKAAAAHHRSTlMALq5y0gvyivrr5WFMG1XaPWabgb3I3WqkI7isIqRHDgAAASNJREFUGBldwQdim1AURcEriabubic5j2ZQQdU9Zf/7CnwRBXtGZxfhkOBqoq/GN8OIWnA78NVx4fHfaKazS2rbfVzE2TO1UK0xsH1dWiN9OQKhnB6wyO2fKgNmaniwSq0jg6EvaQJvuZ1Uj1ZLjzCQ1IfYTvJsaY0deL6+jXhbmpPGhydzjkQz3Ucs7CRZF7k5f+CHHmBjznthZW5OAp5uIbZGVaYWL835gDv1YWONMvn1e7OurJHAXIOIvTU+kiQ5FLk1NvBdvSHb1FplZc6K6F66gRdrvT5Z4x3mvjSG59Q+WUAoyR9BZl0lRFPVJsDh0c5iYCAnBFZrO/m5B/pqhdRW8W69KxbU+jq7DOi4Vsc0vItwRlc9fTa99gKCedhT6y/p4jZ27eQlXwAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAsVBMVEVHcEwLCwseHh4EBAQDAwMBAQEPDw8BAQECAgIFBQUGBgYHBwcDAwMrKysFBQUVFRUCAgIVFRUFBQUDAwMXFxciIiIhISEDAwMKCgoREREAAAD////29vbi4uLb29x6e3ydnZ78/fxdXV+Xl5g1NTUODg6KioqSk5RLTEzx8fGFhYZnZ2i1tba8vLykpKbq6+vExMVyc3QmJieAgIGrrKwhISJVVVU8PDwbGxzP0NHMzc2YcBtHAAAAGnRSTlMAWzTZ5PY4/e2Zz2fHD4+JqqN0uSRIHJ9ufGSIXogAAAEvSURBVBgZXcGJdppQGEbR3wEuOGZuez4GRQ2Kc5KVpH3/ByvXqiHd267av3pBZ/Ro/2vdRw5w0eDn0BrCHl+6LbvqO2CxPFb5+ye1kZ31gUW1l5fsXoDYTkJgnuoiKYC+eR2YJ2pYQ/BkZi1YpKolWZalU9XmMDKze3iWV+azcjJV7QDdJ2tHLFby8pUu5rixjR1LeUmllc4q6FkHcnlpMavyPzrZQGDAs7x0tlJWpPIOgEXwqqvJTt4WnMWOQt7vvaS3ibwSuvYY8DlVbXeUknUmbwm3Zj14U21avpb5Rl7qiNpmd/AylbfPEp28w42ZDSNYq2kChFZrAUd9mQGxncTAx0H/ZAUwsLMf1D6qzXZbLh0wGNrFXUBDbA0PcdfhuegmtO8exh2H696GdvYXzeQzkNO7cYEAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAnFBMVEVHcEwEBAQWFhYJCQkSEhICAgIaGhoBAQEBAQEICAgCAgIGBgYBAQEbGxsRERENDQ0vLy84ODgFBQUMDAwGBgYAAAD///9jZGT5+fnp6el/f4C0tLQHBwfe3t6Tk5R6enz19fUpKSmHh4jJyclSUlI1NTXt7e4ZGRmcnZ3FxcbT09S/v790dXa7u7xYWFhra21ERESioqOoqKifn6Gf4yNHAAAAFXRSTlMAyCyFSuoY8/uVrdbecj12DgVcp747Cp6eAAABLklEQVQYGV3Bh0LaYBiG0Q/IZKt93mwS9gZt7//emj8q0p5jD/1JLxzHnv3PG/oREIW92dye9H/xw3+1By8EyvfLKr/tacX2xQPKupLT/F4CsXWCEJYnfUsTYGLOEPaZniQQBmbWB9ZymqpRZwsDM4shkXOtF5eznCOMA5uP4KRWdW+UJY2cLdHMvJClnEUhqUnl5NCzScRGTr7+szqk6hQQ2iAikVPfj1lRp3LOENok4iYn+ZBUn+QUEJoXspWTF5JWazkLGFkwpszUOt6lLNnJ2UBsNoSVnI98cTnKqUr8vpkH+52cXZWqc4M3a43gXc8OQN9aU2CT6uEAxNaZAcurPlUJ0HuxTwNa27w4XxebEujN7durz5P4xX4Eg3FExx9O7V/BYBSB/za1L38B110rDuRvcLUAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAolBMVEVHcEwaGhoPDw8CAgIODg4CAgIoKCgBAQEBAQEICAgREREZGRkLCwsPDw8VFRUBAQECAgIPDw8FBQUJCQkCAgKNjY0XFxcDAwMMDAwAAAD///9ycnNcXF2UlJXu7u59fX7V1dX29vYnJyf8/PyxsrKkpKYJCQm7vLwyMzOJiYri4uKen6Dl5eWFhobc3NxCQkNqamu/v7/JycpNTk4YGBhTU1MRvL1jAAAAGXRSTlMAH4LEUOYP/PSLXSu/tjrrr3CSn90DRNrUAy0+0wAAARxJREFUGBldwYlSgmAYhtEXBH5Qx7Wy52NxX8etqe7/1kJAs87RQ2fYiiejN/0XDEIHuH5rGOlJp8WvsK2HIAY2l/Q0/f6ilKgRAJvp0W7m6wWQqOLFsJjZ3TwD2rrpwqKwJxnEkaQeuJmVjofD4ViY2XIBvqQxXK20nF7TNEuttIVJpOgFznY3ndnNDjdUELOzu/XaKlPoyndk1ijSpVXWEGrkSK2Rr6y2hViJ42q1eTq32gr6asdcrPaxt8Ye3uWFbAqrnFbWuOB8aQC5VfYzq50h9KQAvgr74xPGkl4n8GnPcqCj0huQLe0hBxJVfGC3tdo5A7pqJJR2p9XHNv/eAK1Id+0+T0av+uUlL45Kf9DTX57/7nDhuKfGD/r4MKxxCfy2AAAAAElFTkSuQmCC"
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAqFBMVEVHcEwBAQEeHh4JCQkqKioDAwMFBQUBAQECAgICAgIREREMDAwBAQEWFhYEBAQICAgZGRkQEBAJCQkFBQUDAwMdHR0BAQEXFxcCAgIhISEfHx8AAAD///+RkZN8fH319fXa2trw8PCIiImen5/8/PynqKi4uLkpKSkMDAzAwcE5OTpmZ2iwsLGBgoNubnBUVFUcHBx1dXdGRkfo6OjGxsdWVlfT09RNTU1PE3MOAAAAG3RSTlMA+h1QCrmQ/uHrjFr2NMSkKHqFadlCz7+dXWzdzQtzAAABNElEQVQYGV3BB2KbUBBAwUUCfbC63JK8paPei5373ywskWWSGXkYTt8GL0+v8r9uEHmuFo2efWkZjvgWduWh7wGry7lIjidqM7nrOljtr2rS8gTMpDEZwDLTL/kH0BczgmWuLR8Q+SLyCqtMTZ6laqolTEVkDGc1uyTe39Qs4M2XToi7ai07VJoecjVLvL78HLBRc0tUdXtVc4B36Tm2aqo4XhelNkoIJXAkaqp4P0/m2thBJD8cBzW7WFWTm5o5hPLL46KmWKvqvFSzh3eZRKxSrS3Oqun2U80GNxUJoFRTJnGyU/PpCDsifTilavIs1cYFeiLih3DUtgLcRGpdYFvpQwzMpDEDNmv9KzsCgdz1qG2KxXoR/3ZA4MuX5wEtPWnp9EKHcdF4KP/qPL14uHA8lLs/A1U0Nc44LBcAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAqFBMVEVHcEwKCgoCAgI3NzcMDAwDAwMCAgIBAQEZGRkDAwMBAQESEhIFBQUNDQ0KCgoGBgYPDw8DAwMKCgocHBwlJSUSEhIDAwMeHh4YGBgvLy8AAAD////d3d6IiIlmZmhPT08cHB3z8/P4+PiBgYLt7u69vb6VlZYMDAy2t7ibnJ12d3h6enylpqY8PD0xMTKtra7p6emQkJL7+/vHx8fR0dJERERubnBdXV7p9CTFAAAAGnRSTlMAfOsITrLL/DLm9mjZWpiMct6lOySMwB+6E4RgZHkAAAEySURBVBgZXcGHgppQEEDRUcGHvWxL7tAR7HVL/v/PwhDjkpwjD0GnPxy/PMn/Jn7XAa77OupJy1OfbwtPHiYOWH/uon2SUuvI3QRYRxc12TYFOtIIHJxC/WuVAJ6YPpwybUlg0BMRD9ahmizM1OQpzEXEh0LNZn/dbdScod+TtwHri9bCONcsDtWkDD0ZDflUc96qarVVE8NSlo4vNZurqhaFmgrG0ncUarKv8lLGkZoDLMR37LSxqqJzGanZwljmjkRNflPV6qBmBz8k6JLmWgvjm17ilZoTbiTyCgc1h/11/6HmHRY/RUaQ5mpW4U0bR5iJSG8Av7StAPcmNQ+I9VsEdKQxA47v+sdHAvhyN6V2jDZlWSXUfHmYD2mZScvzdOBodJeB/Ov5Zexwi2kgd78BKmAzW/UpRV4AAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAqFBMVEVHcEwBAQEbGxsTExMMDAwREREbGxsBAQEBAQEHBwcEBAQJCQkQEBADAwMtLS0SEhIBAQEXFxcEBAQDAwMFBQUCAgIEBAQFBQUGBgYSEhIAAAD///+7u7xISEqBgYLk5OXQ0NElJSX4+PmSk5OKiot7e3z8/P0JCQlUVVVycnNnZ2nr7OzZ2dqtra6ysrOfn6FeXl42Njfy8/MwMDHDxMXBwcETExOYmZoQ9xHVAAAAGnRSTlMA9SgzToMX7vzQk5124Q5b10W1qoTCvo1nx/UgnSoAAAErSURBVBgZXcEHYtpQFEXBJxAqdJe0c9VF79gp+99ZpA/GSmbsYeqPh4NZYP/rj+ZeFEXe5MW3rt4zn+Ine/BDGu+b7eW6pjG2O5/G9qBWvvgNDMzpeVAW+pCnwMxaMZR7dWwgDMzMh/VBTr5Sqyrh1cyeIZOTp4mcBCaB9ULWeznnc6abd6KBDSJSOdVWWSEng9jmsJST1EoWck7gGbCQk+XS9k2tX4CFkKm1T5fLLE3USiCyUcRFrT91URSnpVo1TOzJo1xJqnZvauwOaqQwMovhKOnnQq3jWVK+JuybjaFcSZVuKkkbeDGzaQgXddVA3xozYLfSQw0MzRkC10Q3xQb4YndDGtflMTktUhpfp/bhe0jHN+sIXucRrWgy6tu/gvGP0AvjQc/u/gLv6zKDbjWVcgAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAq1BMVEVHcEwEBASRkZEEBAQEBAQCAgIREREBAQEsLCwBAQELCwsBAQEZGRkXFxcEBAQTExMODg4ICAgGBgYcHBwaGhohISEgICAXFxcAAAAAAAD///+Li41dXl/09PRWVle8vL34+Phub3DX19d4eHnc3N1QUFEVFRXp6enQ0NDAwcKlpaZmZmhISEixsbK+vr4ICAmSk5QnKCnJycotLS6cnJ35+vqBgYK2trc7OzxwW0ihAAAAGXRSTlMA0gF5peMz9A78xO0rcI9Gh1PbGmR6WZWSeox5WAAAAUFJREFUGBldwYdW4lAUQNEbSEgeocrS8dz0Ru/Y/v/LfEFFnL3lJhg/Pk+eZvK/3sjxjTG+5047cmfm8ssZy03Pw7qkRfxxwOrKt54PxGdtLaI50JWrwIN5pj8WDTCVlgvzWu+kEAYiMgBWqprXZVnmar2eYCIiI4jVOjdVVcQrtTJ4CCRwYKlWFqlqHSdqXTBDGYectJVFam0Std6gL0NDo61VVZbL41pbOwhlYtho69xUVZGutbUHXx4NsbaySFXzYqXWO/jy5POhrX2k1vpFrSM8yMzjsFAre3vN8zpeqrWFfyIuRGot06IoNju16gPhQGQM84VaeZIkepWCKyIdB7Z67wUYiNUDmkRvjsBIrobAaadfyhTod+RLF+tSrffv0dYA/UB+TD3ujDryK+g6hpbx3J78FQz7oR86k4F8+wThDzIdRxwbwgAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAApVBMVEVHcEwMDAweHh4MDAwBAQEWFhYMDAwCAgIDAwM2NjYSEhIODg4CAgICAgIUFBQFBQUKCgoNDQ0SEhICAgIbGxsDAwMAAAAUFBQEBAQCAgIAAAD///+JioteX2Hj5OT5+fkZGRnb29t2dni0tLVtbW8sLC2WlpfIyMmPj5Dx8fHU1NRWVldlZWarq6ykpaa7u7xNTU6/v8B8fH7s7OxHR0hBQkI7Ozsh1OBOAAAAGnRSTlMAiCO+9TR25/0MUID6lBap0cxC1Vyb7WnZskGcKOYAAAEvSURBVBgZXcGHdoJQFATACwIPFMuxpOzSi72m/f+n5T5jlGRG7qJpMBzMXfnPH868OAw9M+5L12iMh8lU7nwD1e6a9CuECuTG9wDst7SypAAQyNXIAMWFv7IPAH2xxkBRsuMMmEhEfAArWqvDJafKCyAQkSGwpyrTt+VbWlLVwCyS6AUoSebpieRqt6FqET9L30NLdapoHTOqCujJIEZKtTzw4QgYGYZoqJKaDyfAEyfEnmp5pJW9U9XAk8xjfFKtGlrplioBJuIahBuqZknmSULrE6Ej8gqsqTbVvmrWtErAuCJzoNjQyrbvvDoDC1EvwJldawCuqCmAXc67NQBHrgIAbc0f2x2AntwMoNrqcKmTD6heJL/mBh2OdIwGsxhWaBa+/BU994z3NHFcufkGBTcyXB3RhMoAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAqFBMVEVHcEwVFRUREREODg4HBwcbGxsBAQEBAQEBAQEHBwcBAQECAgIJCQkDAwMEBARfX18GBgYMDAwODg4lJSUBAQE4ODgCAgIfHx8AAAD///+9vb7z9PSJiYpvb3D5+fnR0dF4eHkeHh9EREVZWVrj4+Pd3d1sbG1jZGbX19dQUFGdnZ6qqqsvMDA4ODmPj5H8/PzIyMiFhYYQEBEGBgZ+foDHx8eysrOys7SAb3MpAAAAGHRSTlMAWUUysB3+/OuC9uPA35IEzXNrFJ0M1n7bOT8LAAABQklEQVQYGV3BB0LDMBAEwHOTbKcXYFfudnohdP7/M6QQEmBGru78h+GDF8l/wfA+1Uqng9CX36IQN+NArvwY1qEruuMrADWVC18DWFV0Fs8vACZyFsVA884fixaAL04INAvenFqgdyciAaAqkuVys9lktLIGmIrIHChovW/rulg/0toD45HMBnhd0jKPJLNiR6tB6omX4kjH5LSydUlyBYQy1FjTMTmdeklyBzWQvsIbHZPTqSuSn0Asc4WCjsnpFAuSe6AnU42WjslpLdcnkm9AX4IYLxkt81yW2VNnaB2hJyJ9YEer6orVqjC0KoVeJOIBTUbyVGZZybMWGIrIaABs+VsO6EgsH1BdyascQCJnCYCD4bdqCyCUiwTWod6bj7yFFY7khxcDUPimE7kZzZJ7DUf35oH8NZv04zQeJ5FcfAF19y8mvhmbMAAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAolBMVEVHcEwBAQEBAQEUFBQgICAHBwcODg4BAQESEhICAgIVFRUICAgKCgoICAgLCwsCAgIzMzMCAgIHBwcZGRkSEhIBAQEFBQUODg4AAAD////W1tb29veVlZf5+flubm94eHlsbG2jo6RXV1iysrPv7+8ICAmAgIA7OzxiYmMzMzMjIyNDQ0TMzM2tra4YGBl3d3ff39+FhYb9/f3n5+e+vr6dnZ23eBu6AAAAGHRSTlMA7vR5GLFk+0zcIoPHpTzjC5WMM2zKvdbCto4fAAABKklEQVQYGV3Bh1bCQBBA0UndhN7UN5ByktCrov7/r7mrGNB7pTVKgnGQhPLfYJz6BuOn/UQedSLuelNpJR7Wri62mxVgYrlJsIq5Oq/rFTCTbx0f9kf99boBBuI8w36pd/kB0pGIDGA1V9Xl3HlX1eUZYhHpw0Wtqi7LsmjUquBJJByyelcra/TX9YyfSGzYqJM12tpCX/pQqPOZza1cnQxe5AnW6lR1WV7KpToVpBLBRZ2s0dYnpBIYanWyk7ZKiGTqcc7Vyqp8sVjk6uwwM5EeVGqd6qIotplaR0hDkRj2uapeF06u1gYmIjIaQq2P1mBCsRJge9XWGxDIty6w+9AfxwMQyc0Ea7c+fTRvB6xIWrHHnenKg7CbGhwzHHfkrzDoeb7X63bk5gvGMS+LIa16MAAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAk1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////4+Pj+/v719faTk5SMjI3KysorKytycnNCQkJhYWLOzs8XFxfX19eAgIBOTk5YWFjs7Oze3t5ra2ysrKy2trbCwsOgoKG7u7sMDAwaJC1DAAAAFnRSTlMAFgqR2Ydx5/sz9rlGzfGffGElU8Oo0am66AAAASBJREFUGBldwQd2wjAQQMF1L3R4+Ytl40JvKfc/XSSCHZIZGfjjOJqvPPkvCybTNE3z8G0sr7wZvyaZDLIEqz52pxonlqcsB04bdS6HLyCWBy+B3af2Li0wFucNdnv9VbSQ+CKSAe+qWlw21rZQNTuIRSSATq11V5Vl+VGo6g1CX/wQ9mqZRgc16UJWObU6pim018BIopSTOub6vt1uzup8QCJBylWddVeVZbVV5w5TiVI6dUyjgxsksshp1TGN0d4BJrJM+DqrZa5Gey1EIiMo1TKHtT7tIVmKrGB3VqvQ3hFmYoVw1FcVsBRrDJzWOqiASB7mQH3XH/sjMJKnCKs+3D7vVYs18qW3SHgRyAtvHqY8JLNM/vLiyTSfhkEmT9+ghSuCqYlQQQAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAArlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbW1vJyckAAAAAAAAAAAD////6+vrs7OxfX2CGhoe6ursaGhq/v8B+fn+jo6SQkJHIyMjc3NyKiou0tLSamppDQ0Otra1nZ2h4eHk1NTVUVFXz8/PV1dXg4ODQ0NEtLS1xcXJNTU4ODg4U6zUvAAAAG3RSTlMA2rYJhRfu/PbkRskpkZ/2dzthbFczrPT1BhzlcXKdAAABQElEQVQYGV3Bh2KCUBAEwAOBJ/aesksHe+/+/4/lSIyazMhDpdZxOgNX/hs2Lc8Y07ZaNXnljvBUH8pD14c676LdGcr05K5rAPP2Xq1WyWl+A9CXb64HpFm1RDXdAqhJyQbSI5+CJeBXRKQLYEIVJMU8pApToC8iLWBNdYjG80WUURVA/UNcC5iS3EcnkuHuSJWiPZBBG1uqVczS5EC1BkbSNIio4oRPC8AS22BDFU/I0ya+zKlWgC8tgzXVOCGDMCxmVAXgS99gSZXkLOVjqhyoS8PDbU8yWK9IZtcF1RamI2IDC6rwshnns6wgeQL8T5EekO5Zmk6OZEByCTRFpOIDO76KAdMQVQMQBXyIATjyzQFwTvjjdAVgy50Dtd2ssvlsCWVX5FfPwwtHXriOZVAyfqshf7mdutf2rGZD7r4AJVY0T2kTXmgAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAk1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////Z2dnv7+/8/Px3d3h+fn9xcXIzMzP39/eioqO4uLlmZmfj4+MgICBgYGGampv+/v7AwMAVFRU9PT2Li4tWVlbOzs7JyclKSkqvr6/p6elIrOb2AAAAFXRSTlMAQx2KqfHc/GUx0+eY9cN9CU+6dxaudFWIAAABIElEQVQYGQXBiY7aMBQAwHl2CGEbQTik/f+vq1RthcrpkMOdAWCIcz4fLwACsMvrlGjH9lmBACkdARinN2SIrz32h+awzDRrmhGIdk//6w9EnnAvBCkP9s0VINrC4y0xDPb1CqBGxzJIIrN7yP0Afaeczw5F1uxsb0QtFevEvS2MKW1pAQDjWT2mNrk8YF0goMy6ezPXroBtCzFDS5taPsCm1lozmJib7inA+IQZQFo4gZShgjd981l9ugIACLdI752/ARUM8F3UPvnQdKzrAtcDZpafrB834+lFBbWwubstNSt98jzMFcDmw+YlkE90X1fgO35znQnod+jWS+mm+oPrjADdMgBw6/5BACly7OHWxPIGGaj1mMrLY5nSawb+A/2jexNUVr7SAAAAAElFTkSuQmCC"
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAjVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////V1dV1dXcmJiZnZ2eIiIgwMDB9fX1YWFhVVVX19fX7+/sHBwfAwMBBQUHe3t/k5OTp6enJycmtra0RERE4ODiXl5caGhqwsLDBhVq1AAAAFXRSTlMAl0qI1yNa8f34b7/iej7Np68YDS9nYF4dAAABAElEQVQokWWS2XKDMAxFRYDYZm2gx2HLQCHTbG3///P6gMlC7otndKQrz+iKLCo3qZ9uClkr8wJltFaBl73Uwx0PxZ8PsFEAdd/0HYDZ3gFAs7fWWruvRsCh0EB9tov2HejZMIb6ZB8aOgic1zg72e9hfq6z3w4OrrtyHS3EImHCeFqR4YrKJDIc7YrYHjyJNdUbaSGXBNo38gOB5Pr+gRXxNf0baWAnmeL3a01qzFYkh8uy2JEJglIkgtoNLbMd+CJSKmjssyowhYjIlld0AKL5DB5wm1z9fAQ+ltN5ALfDZfprjzwDkUg95cCkLxHxEw2ATrxwFasizZVSgX+v/wPKiCfpt4/OtAAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAilBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAADQ0NB9fX3k5OQhISF4eHmqqqrAwMCKiotUVFQJCQnU1NSUlJT6+vq2trY0NDT29vZCQkJLS0tmZmZsbG5fX18qKipGRkbsbf2ZAAAAFXRSTlMA9fsTyf6V74E01qJyH+KwTAhIVV0UnJwJAAABE0lEQVQYGV3BB0KDQBRAwU9dID363y493X7/6wmboOiM/Njtl1n2tJL/8rQwYRgG68VW5lYbfsW5/NgbBp/9R39ltJSHLYM3q6PSHYBMvFUAVauT8gV4klEMVakzr2AiEdnC4ah3t1IHtwoyEdlArQ+21tEF1pHkhkOpD9ap90mSSRbyohPr1HNQSJFQ68Q69RoIhIROJ9ap1wJiEpxOrFPvAqEsEnodtY3qsVbvBGvZB1RnHdh31aZT7xUWsouh0VFXd++ljsoDJhdZQnXW0dGe1ethIyKRgQ+dOwG5DJ6BN/11AlLxUuDa6t2xB+Kd3KUMrq5pL90XgziSydIwk8rMKitCRsl6kctfURabwBRpLg/fq7woX9Rh/I8AAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAk1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///97e311dXZhYWLq6urV1dXOzs6goKFqamvIyMmDg4MjIyPg4OBCQkL5+fn19fUNDQ3AwME7OzuqqqoZGRlLS0vv7++Pj5C2trZWVlYvLy9VkNEVAAAAFXRSTlMA9uzSsYJ2/OIgUQyUQjhlWcSbE7gWPu/1AAABKUlEQVQYGV3Bh2KiUBRF0YsCD6xp+yBV7Jr+/1+XBxrizFo2eH6Iwtkytf8tnpLAORck4YPdS0P+jOc2mI/wvvNVvjvixXYzd0BTqlN8vAKR9dIRbNb6VbwBE+uE8LrVnS8YTc1sAawlbQ+S3ktJ+w3EZvYEubzVWiqaSt4njKf2nEApL6tUNJV6G9zSJgHf6mTlIat0tYJHixxf6rSnvNZNDYnNHI06bX5qtrr6hMAiR65OdlKV79W7wMiWAWd1skqqM/VaGFuacCzkZWtJq1qdMy4yC6GV91FKOqy2kkpIUrMJHAsN9pJ2MDNvDDvda8Gl5i2At3cNWiCyXgxsLrpa74DQbmK8TVNf6uyMF9pgkvDHRXZnGo8DOi6Zpfav6fIlGSWPcWo3PyTJKVvzOTq/AAAAAElFTkSuQmCC"
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAh1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////5+fnf3+B2dnhubm98fH0jIyOrq6tGRkadnZ00NDTu7u7n5+fNzc09PT1hYWETExP09PQMDAxRUVGNjY3ExMTY2NjowJYCAAAAFXRSTlMAeD8L3iR0+ue1GplIp/NW0cKNZ11VJrPrAAABDklEQVQYGV3BCWKCMBRAwY8CAdyX9w0BxF1re//zNbGa2s5IVK2X5WiVyX+DUTo1YIpyJu+ykl/zgUTjKd7u7M6nG14uT2M896XB4X4BEnnIptAe9eWwBcYSLKA96JstFEMRGQBHVb1afbq2kIvIBJx61ulLB/OhVClY9WytUYtZy9qw08DWGjkoZWQ4a2BrjXpIpYRaA1tr1EEhI3Aa2FqjHgpZGbYa2FqjBhaSFdz26lm3CTTYYXKREu7q7V3TNHWn3hHSSmQGl70Gm0C9EyzFS2Gr7xowlXgD4OOqUQPk8pADbac/Pk/ARJ4SvNb1Xd/s8CYSzQp+mUTeDJO5ITDpMpO/hqsyLYpFUsnTN0EAKHGmFYy+AAAAAElFTkSuQmCC"
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAmVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////n5+d1dXbAwMCRkZJxcXHy8vMpKSn6+vrs7OydnZ7Pz9CIiImAgIEJCQkYGBg/Pz/Z2dkzMzSXl5ihoaJsbG1XV1iwsLBhYWHj4+NNTU06Ojurq6yNjY6zs7O1tbWwQVaJAAAAEnRSTlMAptt4H+RK/PVqvwyHzjtdtJFAaEYzAAABO0lEQVQoU12Sx5ajAAwERTLJabpIA9jgHCft/3/cHlgb79Sx66l1kMwe+Ivp8i327Tdzx43CMIwCZ/Jf7icamc1HMYkk6XCrbruNJMVPIUn5HoB7txmVH0n1mgf3naRhWSLVLSPNTgrSoWuzh/vQ9r5uaLdDnyPlwPHQAhw/WzhJMzM/0CYDVpcvoMnPGTRbRROLQ+0AjqseKMo+A26SY06oM0BZfK+hX/cZUEquzUL1g1l3tDl5Bqwk15ahKoDyD2eup8EcJde8UB8A5Q9l0d0HU0lLm0favgPfV/aXDs4ZUCuMzRJpBZwKqAroWigkNzVbaBh64SBNzSwNNGx6UkmR/zjCpRlFPp7Bk1Rf/+XFpyTncbqpJNXV6uuUH/QqzBbByx9Enr2QerNIkhS609+PlcZJEASJ98z/Au5ZJoZn0mUgAAAAAElFTkSuQmCC"
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAnFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+4uLn4+PiJiYtzc3Pf399ra2t7e3zt7e0JCQnq6uo5OTktLS0YGBhWVleQkJGCgoLAwMAlJSVeXl6ZmZmhoaHV1da1tbXy8vJEREVjY2TLy8yurq76MA2IAAAAFnRSTlMA8RhS+MLX/eRnKMsKeF45mohHjaiyJG6kfwAAATNJREFUKFNdktmagjAMhQsCLSDuHkAWUcR9nXn/d5ukUpE5F/na/E3SNBXCyB7Nl3M/EP81WyhHSumoxaDnD1x0CscdGDjs2Z6z17aihfQ/gHZVmces/MCsRQFF1LfYKN8SeicMCazjTikhb0hgRqk40y3VEXRmswNGRJbAgX1NyXZ1J3MBXKqiUOlcZZEwYZPuYM1EJPHU6cu8WLckboCJcCUyTbL0WBqyon6FAlZvsokPSUuokCdCidKQxyvda7JnMpVoDImT/UWTAliIsYWd7qTY8OHnkdcnONQQPfNVV+W7P84/ZJP3I/jASQd1qoGI3mBIt2t6gKpYthnCOe0BM4YpLet76z/yECZmdHMeaZ1df69ZjW8gxMj6+geWL75kR57+C3C8qS36GvquUsqNPv4/Uewr4T1BJbIAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAilBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+MjIyvr7B1dXVgYGEsLCx9fX319fWEhIW7u7vFxcXo6OlRUVHZ2doUFBRCQkLv7+/R0dFtbW6kpKXh4eH6+vqdnZ2YmJnsiTROAAAAFXRSTlMA9RhV4uv+iPu3MNZdC0bLon0nlmqAp4BSAAABK0lEQVQYGV3BB2LiABAEwQUUyalHEUTO/v/3bsVhjF1lb91hnC6Wc/trPA06SRQlQTq0T/OUH4OxvfU6uKosyuMBN7OXHq7Yq7XNDkBsT/0EqrO+bXfA0FoTqE76sINO18x6wF5ulT/yrdy9gtjMUljLncuv5nrJ5RoIutYPOZwkncq9pFW5l6uIYosTjnJ5plazlqthYIOIQm69UWt7kcuhY0AmV5/VOl3kNoCFEbVc1qh1K+QaSGwRsZNrarUeX3IZBDbucLjLFVdJm/Ikd4Sp2QSucqt1kdXFTW4PYd9sCYeVWtvzTU87mJrZKISdPmVA31wPKO96WwOxPcVAleu/zRFI7SXGVZdHfq2PuHRk34YhP5LYPnRng4RWEizm9ttomQZhMJl17eUf6N0qP+7vqokAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAjVBMVEVHcEwAAAAAAAAAAAAAAAADAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////m5ueAgIDy8vNqamtwcHI4ODicnJ2Ojo5cXFzr6+vT09T8/Px1dXW+vr+5ubojIyPh4eFTU1QXFxekpKUuLi7Jyco/Pz8rKyshpQhyAAAAFXRSTlMAFL/X8vyC4f1rSCFRX8o3kKGzqQfitOGHAAABJUlEQVQYGV3Bh1aDQBBA0aEsJaQa3yydNFLV//88lxzE6L0yydJt7Ecr+W+2jU2SJCb003d5kfmMEojnMpmHgPks8+P1hhPJaAaY/KKDojkDa3nKQjjv9UdxBRYy8OG80xcdhJ6IrIC9qh4++r7fq3P4gkhENlCqs7s296Zq1ekh8MSL4aKOrdQp9+o8MKnMQx46sJU6+UmdIywlSuh0YKuiKE5loc4dYlknlDrYdXmet1YHPYQSJXQ6sJUedHSHWBaGWge20kkOS8lijFXHljqpSSKRLeTq7Fr98QGxJzIDc9E/aliLs4T6oC+OYDJxVgl8Wp0cgVSeFsCtKfTpVANbGaU4t65t2vKBs5HJLOBXmMqL99QPGZggyuSf+SaIg7fUk9E3u/Mo2/uFw7EAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9tbW7u7u5xcXKgoKGTk5T6+vr29vaHh4eampsNDQ0rKytlZWfY2Ni3t7exsbLj4+MeHh5BQUF3d3fCwsPy8vOBgYJQUFA1NTXQ0NDn5+fJycmsrK1dXV7b29sysnriAAAAEnRSTlMAndWuv90K+U5s5SfuF2OEejfA2rlIAAABNUlEQVQYGV3Bh5aiABBFwUZBgnHuA0RFMceJ//9z23hcxzNV9tRPu1E4ebO/km4WA/EgHPXsRT/kV5TYUxIDy0O+KK9L3MQeEmB52alV1HtgbHf9GFZr/VdcgcRaIawKvbjCoGdmCbCWm22r6bvcbA8TM+vCUW7XVKdNWcltodOzYQY7ufwkV27kVsQjG8Xc5N6Paq1zuRxCC6CRm07VmuVnSTVEFsJRrv7SXVlI+oLMAmjktpVa53wmaQqZpTEHuV0jaT3fLOSOEFo/Y1nI1Ze5Pr+bs9yKODXrwkKtablYXMqtpBNEQ7MElh9qzX8+NP+UdIOxuQ4cZnqRQzw09wYcCj3lQGp3KbCv57rb3IDAHlLc/ruqq3yFC+wpifg1SO1FLw0HtOLOeGh/JEEn6nRHPXv4B4dkJl7l72HVAAAAAElFTkSuQmCC"
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAjVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAACVlZZ9fX9paWrt7e0NDQ25ubr09PSDg4SgoKBLS0sdHR3c3Nxzc3TU1NXl5eUwMDD7+/vMzM1DQ0MqKipiYmOOjo+srK1QUFIZXtdwAAAAFXRSTlMATFhh1un9+LN43S/KbQsFqZcVJkBPVh6KAAABLklEQVQoU11S15LDIAwkLoC7k5yFW4xLEqfe/3/eSXCOPdkHBmlHu5KAsQXHRIYyiNg3dtIXnHPhSzfb5qMYVni7lXAEJpp71U19Q1zwISjfXQpCrYaVijjAdSwW1D1SVhA9rqdiA6T8lLpCKaoYW4SRPKFggowE6CguS63V803XN0CcsaMPTW2YM5k8SXceQDgsEXA36uWNzso4VgA5yzlUlmkvl1Epc1c4L/M4lCbqqq6bfm2TGiBkksNUfHz0piYQ0K8+N1uPPpJF2JuRmIg52/oHCNfMYySU6fo149miWGr2aQda8bA7zUL4n2gBuogDbfQHd9uvVTMS4NpnCPA66NkS7RWj/fJ0RMHwfGlVPWBL4EuEm3/gu2yDNImFSQsvOLAvOLkXetJNl/gP+vUpXOzNllAAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAilBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+IiIny8vJKSkrn5+d7e3z7+/uPj5CdnZ1nZ2gXFxcNDQ2VlZYjIyOnp6jt7e1fX1+zs7Nvb3AyMjL29vZZWVne3t7AwMAWuZvBAAAAFXRSTlMAVXzr08hz/GHg9Qg2kxC4LqlESLJuEcgFAAABLUlEQVQYGV3BB3biQBBAwRYKI5Gx/XuUM/Hh+19vZ1iMea6Sl33yle2SvfwVfIXGYEy4S+XdOuZX9CEvqQGG4mIvxYCTyFMKDLZU79j0QCIPawPXu/4oC+BDvAiuN31TQLYSkQCGUp3jPM65OnkPqYjswKpTdvN325XqtBCL7EOGXJ3mrKrjqE7ds/yUhaFQr5lVNb+rd4KNxIZKvbKz36X+ZyGSDKw+1Gd7qXL1WsgkNlT6MlbqNRDJwlCoZ0tVvXXqdXCQdUh/U2esatXWqjexDERiaNWpm4utqlydM0QrkRT6XL3jvVSvniARkVUGhb47QbgV5xMocv1Rn4BAHhbANNf6cL4CG3la4Eynpm26CWcjL0HGrzCVN9skXuIto8VW/ggOURYd0pU8/QOKzimFgTldlAAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAmVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAC5ubmenp/n5+dubnBNTU0zMzPw8PD29vaLi4sMDAzDw8QWFhZ3d3dfX1+EhIRqamt8fHzY2Nj8/Pytra3Ly8vk5ORAQEAfHx+UlJRCQkIiIiL9AKkjAAAAFnRSTlMAVK+QZoHC/uP3N+7c1goeKHBFmKIRskSVyQAAARVJREFUGBldwQdCwlAURcGbkEpH9J10Qhe77n9xBn5EdEZX84U/jsKh/vP8JI07oyiY6sYw4lfi6SqIgfXb8bCrtnQG6gXA+vBqZ03+BSx1MQTqk/1Y7YFAZxOoV3ZjD+lMkgfrVzN7ybJNlm2ezKyGgaQIWutkeV595M9PZraBZKbhiHVjTtmYUxMPFMZU1isLcw4w1jhmZ72yMOcZUgGt9crCnA2gJObRemVhTgapBjGV9crCnBYS3Y3Yrsw5Fua8wVKKIDenbeziBKO5FMC2sT8+4V7SNIHKbj1CPFfnDqgau9oBoS5C4D1f2UVWA756IZ33fZt/HGs6vq68hF/pQjemiyjlLJ2EM/3j3U/GEz94UO8bu1Aqnw91rSQAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAhFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9sbG3X19f+/v7w8PB6ens6Ojro6Oh0dHSZmZkhISH09PSnp6ctLS1dXV14eHn7+/vQ0NATExPf39+6urqCgoJSUlKKiotuhspXAAAAE3RSTlMAZ72CSh+l+/Lj2XQSyjZaigeSZLqJsgAAASBJREFUKFNlktmSgkAQBBsEBhDXIwvkVLyv//+/fVBXZPNtOqNmIqrH7E3oRak//bExQZQ4By72veVwHvp8SIJBIAao81t7PwNM/gRAdZEkld0GWLyuimFz0pvyDszNzMyHTaMBe4gzM/sBTtK6OEpSsZWOu+dTEeSS1nkpSW0h6QppZlkKl4+pCkna4aY2j9lpbA4ws4ljPzbrHhJbOfJ/mSvEtvjOHApJ6iGxuaOWJOUXScobSbrBzMIEGknqq6PUHyRJNUzMIrhJkrr2UVWlJJ0gCc0COD/LKYtXSTWszMxmUB81oAUX2qu4uvkSTJ9r8IBzt33OrzUQvVfnAWz2j67LdwyFWZAO/kE8tQFLz48BcOkktBFBlKap72Xv8y+4miXg87zQ7AAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAnFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAABtbW11dXadnZ3v7+/i4uMICAgrKyvZ2dn39/fp6ekeHh5BQUGGhoeVlZb9/f3S0tPExMV7e3yqqqs1NTWurq4SEhJUVFVOTk62trZhYWGPj49mQr3HAAAAF3RSTlMA3YLDt+b9Z/lRJ5x0VtQYqPANNwdG2Xk5q1QAAAEsSURBVBgZXcGJWqpQGIbRH2XYqI9Tw/cCCopjDpV1//d2YGvmaS276yXj13DwZH+l48jFceyiMHm2B70uv4LU7lIHlOtsk3++0+jYTQqUh7las+0K6JjXc1At9GP2CaTW6kI104MPmEzN7AXKhaT9Uo35XFquYGBmY8jV2BzVyN8kXWA4tVFEOVdjn0uqs50aFS6xxHFSa5fV0nGrVgah9WO+5G2PUr5Xq4DAwphc3iJXnck7Q2T9mExX2excyCsgssSx1lVx3izk5dC1XkRZy5t/HHRV4QZmIWx0dbjIe4NgZJbCe63/nKBjjSGsd3qQgRtZ4wlY1/qxy4DEvARYFUt5lxPQt5sBjdXXd7HNKhp9u3sJ+DVJ7MFz0p3QcsPOyP5Ix8PgNUymdvMPVwgs2zPD/wUAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAACAgIGJiYq4uLj5+fkuLi5ra2z+/v7z8/MMDAzl5eZycnOTk5OgoKBLS0usrKzV1dZkZGTMzMzt7e2YmJkfHx9DQ0Pc3NwWFhbDw8S4iKZCAAAAF3RSTlMATFfocf562vmz0S8LZgXH8WGpmBUmQGBhCEUAAAFDSURBVBgZXcEHcsJAEATAVTyJDA4zp5wjwf7/53xQGKvcLS8fbqhCdy3/WaETeJ4XOOFxJwvrPf8oS17sgGR5zXTdlTR8ebJJlrrC3dx8kfTlYR2Q6Q2/5o6kJXd7Mi2w0JHORkQssrxhSABMCZAPeXEhXREJSQ3UE1ClE1CNCXpytZMPh+UM9GcgzlogjoD8wsAWN+AVwKCBaNI5ohjASJ7k5DEDkNRFoqEr1BWAhlSy8qhh6GGI0MZFDaMllYQeaxh938eYzt8NgPxMKnEDdjBuUVShiKJvGBkZytphWQDIxwxA1BUwUgZHkZBsYJxbALGGEZNqI2KTXzOW8pT0RWSnyCuWMvLwLsYnyW7Gr3wkuZUHl+SlTfAQpyTf5MmncRmbtslSGm/yYin+OWxlYbPdH3gXrPx3+cc+rZQKjxt5+gEo7S5YXxJtRAAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAk1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////x8fH6+vpsbG2Hh4dmZmfk5OQXFxcNDQ2Ojo4jIyP29vYyMjJQUFGxsbKSkpOdnZ3Ly8zc3N3R0dJ+foCpqalFRUVeXl7AwMFISEh0dHS7u7z928jWAAAAFHRSTlMAdewJMcn34F7TU36xu22jj0ISSGhTD2kAAAEiSURBVBgZXcEHdoIAFEXBTwdryn10wd5T9r+6ABrjyYw9+LNJNHF8+280iUIgdKexPfMD/iSv9hDTWVzy4utzQcexuxhYFJV6aVMDjg18YHXQr+oCvFovgdVSTy4QeWY2gkUlaZ9JyvaS0hpmZjaFQp1tI6nZqrODwMx3WaTq5UcdS/WymvDdHPjU4JCn5UGDK8wtgC/dbNYb3TQQWASFbo6rvW52EFkAJw2W+UeZatBAYmNYa1CcdS40KGFuvku9VOcjl5R/q9cSjsymsJOUnSpJ1WkpaQOJZxZDnepZ1oJjZl4Eaz27gvtmnXdgnepXdgViG4yB9pxpsFkBL3Y3ptOW2922bOm82MMo4o8b2xNvFoT0wmT8Zv/E8yRKJrFndz9sjCi9asAnQQAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAmVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAADx8fGKiop5eXrm5uZMTExeXl4yMjI/Pz+BgYHs7OympqYMDAxtbW7Kysv29vbU1NSzs7PBwcEWFhadnZ1nZ2n6+vpycnMfHx+SkpLb29shISF8pnJoAAAAFnRSTlMArGnbOCRR/uP4foruuV+bCsjVk3IWSJQdvQAAARxJREFUGBldwQdiogAURdFPB7smeRcUBHtLnf0vbmgxJufYXeA63njg21+hEydRbTR2Z/bAn/MjDu1uEgG7cl+951dqQ+tNgF21UiO9/QOm1vIjWH/pW1oArjUWsD7qQQHJi5lNYLeS3g5qnDaS1vBkZmPIVFtuJZ2KVNIF4sD8EbtUtbTYSK8HNdZEQxtG5GqdK20ztSrwzItYqrPc7o9qnSExIFNnVR7UuQAWRyzVe9+oc4bEniJy9fYrdTKIzR9xParzulKnhKnZHG7qZBu1TjAKzFy4pvqlhKmZzWLI9aiCKLBaCOSp7pbAwFoD4GP7ptalBBzrDah9FJ+3z/2ammN3YcyP5NkezJ7nCY1kMQzsj9BZeN7YfbHefxhsKw5NeNpbAAAAAElFTkSuQmCC"
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9/f4D09PTj4+M2Njbu7u6wsLApKSmgoKBcXF0ICAioqKlubm+6urp5eXrV1dVzc3SIiIn4+PjExMRGRkgYGBhVVVVoaGjW1tbPz9ATExOUlJSRkZHghxEWAAAAE3RSTlMAS42BXcAZ++LzKZ/MaXE+DdSsUeDgSwAAARlJREFUGBldwQeWgkAQQMEmzmDW91tACea86f6X2wEx7FbJU28U2UEwlv+8mTUGTBINJ/KmF/FiQ3nyEqA+rw/b6wXHl44H1PNMG2lZAL60egkUH/qQVkAojQiKhb6pIIlFZAz1TlWzpbM5HVW1gEBE+rBXJytXq+XhnKrqBuxEYguZPqw/tVFgRhIm5PqwLbW1hUgCQ6Wd1V7vSrDiw03vdlWqdxtIxDdU2kqrnXZWYCU05NraLvVhDgOJLXWmTrlOF442ckwgMoO5OvO7haqewMYiHtSZ/pGDL84A8qO+2YOJxekZyDN9WgMjaYXA13eqrU0O9KUzxLlcD+XPrcDpy9N4yksylHdhlNAw0yCWf7z+wE5n4UQ6vyaRJ7pSeHwHAAAAAElFTkSuQmCC"
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAAUCAMAAAC9FTMqAAACN1BMVEVHcEz///9XV1ddXV1VVVVRUVG7u7tiYmJ+fn5xcXHV1dViYmK6urqMjIxaWlr29vZ+fn5oaGiysrK9vb36+vr///9vb293d3ejo6NcXFz7+/v29vb5+fn9/f3h4eF2dnZ7e3u2traAgIBYWFhfX1+JiYn////k5OTNzc2srKz8/PzHx8f////r6+vAwMCmpqYxMTHV1dXFxcXy8vLMzMy0tLTy8vLAwMDFxcW1tbW5ubnX19dzc3NfX19qamqysrKTk5P29vahoaFkZGRjY2OxsbHf39+Kioq8vLy8vLyIiIiampqEhITHx8e3t7fn5+eKioq1tbX7+/tjY2PJycnMzMzf39+MjIzd3d3Pz8+Dg4OKiorPz89tbW3h4eFZWVlYWFjs7OycnJyEhISTk5Ps7Ozv7++Xl5f///+bm5v9/f2ioqKtra3r6+sSEhILCwsJCQlJSUlxcXH4+Pje3t7////w8PD////r6+vg4OACAgJ2dnYAAABhYWGampq6urqJiYmMjIy4uLihoaF9fX1vb2++vr6lpaWenp6zs7NycnJ1dXVcXFzPz8+AgICGhoZpaWmrq6t4eHh7e3uDg4POzs6WlpaTk5NHR0eoqKjMzMy8vLyxsbG2trb///8/Pz+Pj4/BwcGvr6+Xl5dsbGzFxcVZWVmtra1lZWXS0tKQkJDZ2dkaGhpgYGDv7++ioqKkpKRNTU3r6+vIyMg0NDTe3t5UVFRRUVH5+fkODg7m5uYgICAoKCjqzxhMAAAAuXRSTlMATBpdKgURLqwC/goGLhIJIyfn7xdloaw+Ij3Sq1v9proyyEE3rFVlzNme9nrf9X3EhEg22h4j1uWrztqNL3H31P7af1SMmkzjZZL64sPucxnbhpXsqfDFrvLa3vdfiDNE6+2h5+fAkkTBuO67uyxORdjBwqRvp5HvrTvwIOf//////////////////////////////////////////////////////////////////////////////qf9dNQAAAVjSURBVEjHtZXnW9tmEMBfsA3Y7A0hjACBMFNGQoAwM54ssvfee7bpbmVJlmx5ypKNh2ThvW2MsQ0B8sdVsilPv6TtF+7Te6e7+726050AyMrwtYmqsWunS8CuS8ECa9XoQjA3um+3UYcOcLqtja2vMWfw7g6spPnnn/YOfetFD33u3Tv0D/1wc39/Xs3/YC2wydhGUgHh6bRjtCBny2tyuIxIdcE3QvZ5aOjIjlbTex2lKPnA5f/swXDKGos50UyYM8c0zIkcKkMnk3HyyLdYNYk189iO0hSkfaGQz8S9Lv93lHQcNcbSSIKKtlA2p2dMKpTkF2MSCXMrT8uyLuV7amsPg5qu2pFc7rzmfjSOTPD25j189iYiRMoX9XKDLvi8vDyvdk/JdpBQ1fKXtS93blxwKhhPh1D8K7fqtTkTKb5j+06qbJHMjemG0qxH8wADpW72X+eoxR94Wv91t8Ju1cEH8poYhhnI63YbEdnM/v0zUYilrg0waLipS2iCjGMe1XYJ+rMf/25zNRpwYhm9E7Y4bU7K3wDA0FWtJnoUgMu9e3l57cdtaW4pobMlk1i0q5eL29aTunhkTq+x2dZw/xcrzbwSAyB+NVc1JjMYfUY4mtcVhX0+o4EJk7xOMpe336tqkY7BsozXtpF2BhY5nrXg8EGXpKCSQQxmMxT26RTqTXYNV7tda4YvKZ0x6GahENSi0Vk4LO6Lulb6xEKmsivjLRiGyhxa8+oyqaHCcoPBbHLIONqUGZFm+/U2hW45XWR6wxmIKfQ9fHEv2bXQWwAqb8FarcYQwVXKeZlZy76Z1Xt9/OepHGyf92sIIqRa0mtx+aZZfWC7RjftJr/8BuOgUVSLMrODKdKg7JtlUQwd78w6HPQq7bGt5FrStmH1W8Z5ywRLIpN8UVg1y2IwSYaPVzowRXWF5Ikbc2HE1U5QSRkSVtMyg2vQ6j5EMZlDNd+yQoMd0umwFSJczLTkoZtAZPckIplFMXo6V8R5JMUanTabjmKsZ/kSghfVlBbtLQGiM7c4DUcgfdJDHAnxl2/wwBaSGJWCEbeJIkiPwaBcvlRF0OwFIdFQNBNB+KkrruZZEa4CgB7C2tcIiq9aLEdyswQa3iCoXp0IMv6IN4t/8CSF0cHJC90Ldg3c4jUPXryIQlrH5+5fOVqVwIPvLkxCRrdcS5P6VVUw6qbJ1Mnh4ZNKM7eCO951378LeyFEXQpKJiyuwSlwsdplPXUwN2DSE7ABUXnsLoyczY1C/mOlJmCCIDqAcXozfr4C3GB9ccQLkSGIweMwZApEWNasoxOITuP2q7V0Qq1W0LSaQXDrij2BeSHYUwqKe6wIx7POI5Ft1uHnDGQxaHFcixCpR91ZWwfhQIwBHW5Rn+vB4jOl4AHkwXTr64EA6bYbdOuhiLy+jYNDawEyeO6KXe7SmGitFT37VAmZcFxDe71mSmC54BmBBcNVWdbIs5bNuc2UnGP1q0tfNjP3szBxG0EoFIqzVxrngyo7P9MP76gSioRCob79vYJ/AtUBSVuCt6y0NwLRHYpSqSjqdmd+u52iKLvd4fCoeNZjh9reCSpUDkfiDJ+04oVsc3V5eW5ubkmQ1c2q3LIAHcfqW6enADhaVFSXz+vFotYiQe4B/lDXIbgcb93fKpIINT/W1t7edqyYb4ioTnCqry+qzwcSIbYRlPGmuuMC68zq0tJydNHvdqfC/HGpSry9J/OnxPw6lFZOTRUWC4biwsIp/synEBc25nzEhWJJ9lDWIRJ1ZpenVCx4TWWDtmMlvEUsXLfiqN1N/f7pO0E+/WlVys9V7t6fMv/jh9/+yO1zSf77jx/eS3eL9BdyayYbT99g4gAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAjVBMVEVHcEwBAQEPDw8LCwsDAwMAAAAGBgYBAQECAgIFBQUeHh4HBwc0NDQrKysPDw8FBQUDAwMVFRUJCQkCAgIEBAQDAwMXFxciIiIhISEKCgoAAAD///+Hh4c3Nzj19fW6uroODg5LTEydnZ5paWnf399cXV3ExMV5enomJifm5+f8/PywsLGUlJVVVVUbGxw+w7yZAAAAGnRSTlMA9jhbyvzZ/+2ZNGcFD6GP44l3quW5JEgcbjMUo5QAAADzSURBVBgZXcEHYoIAEEXBDwIL9hJL3oLYu97/eIldmdFLvR8FSWesqtowjc0sTqPflj6EkfHyU9NLw4DZfJtvzxfAOnpoALN871fTxQ7IdBMaFCt/mq6Bhq4SKKb+YQnBRFINZnv/dCigI2kIuX/bQHeiesps6hUF1lMvZu5VOSRKjK1XHSEQkHvVBlBq5F5VQqwsZu1VJ+hqHHA5eMUca6sZwdG/rYy0LvVhd/AvZxhIaqWw9E8LsFD/amBLf1sAmW4ysGLjd6s1EDV11wasyMuyPM0NiFp66gdg3BiWNfU2yroxV5YOQn0b9ZKYuNsO9fAHpxIvXsxN79oAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAASFBMVEVHcEwGBgZcXFwHBwcAAAAFBQUICAgBAQEICAgCAgIXFxcQEBAZGRkCAgIWFhYaGhoCAgIGBgYZGRkEBAQCAgIDAwMgICAAAAC8+MrtAAAAF3RSTlMAbQRe/Nqc9ZHtQIIewQ8w5s02o6a8U+iK3AcAAACPSURBVBgZdcEHEoMwEATBkVAk47T//6kzBebczaotVfl88+z55lqDpJCXbmSjjVqF2rBy2kt8OP1KvLQ6cjz4qKPcA40sBRhkmXtOVaaOLsgUibJl9A+zbIEUZJpps0wJv8hSJ3CyXICxyjDx0Oio8FL0a/C8Je0NI18ua6Ow0ZcY9BTm84m9vluyciwTH3fSaih8BSUvUQAAAABJRU5ErkJggg=="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlPM0jRW/QAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAA4CAMAAABQdv/vAAAATlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgbMzMy0tLT09PTr6+v9/f3h4eH4+PiBgYGioqJYWFj6+vra2trm5ubx8fH///9nT1u1AAAAGXRSTlMAGSInBR0OAgkULXJayK3ykdY/Sy7kg5+6c7kmWwAABEBJREFUWMOd2IlyozAMAFAwpWnwbWOI//9HV/JtoClZddrJTLJvhSzLgWG4H49jfF1FeOcm8E78qVHcj6xTgpn7xihww/4FnKMVcyQ4s/eg01Un7Jkiwehm9K50ILP4HIsc3KgeKnUirsREjhjzDL/jWN2ingsVqxV+zlHNuURyAxvVa/O36EySA1yjWGGj2lWqLsEl2KNTDGK3l/c0pjtU9Xk/UkFJRBfGtp1LD6GfHRvRsY83JJiMUaUE587X0OuY2Kp25Z8v9HG0wdqr5Xh87UKyoFb2J7Jd/VvZsg2zkjklkJRSjDG8/oUJLwXbHUd17tisklgs+MMwILFX0RwXamMsXlD64LRuTgq6bJpa+MRK5jHU9iuz35v/LTQHzoy5pI1qhXzRZaEc/jgvLTmxTxOAHnRcUZuLMdfCB3WlWm9mWZRgy7JwUCdSalCLoDy+Y/DKQzCWS3wMRJnQu50WIwK6CO/Z1CTb1BbekmxaYoT+RpdcoGbTgsIHKBcmfBoqSKv6gxOssDOWV0W0sOd8V8pfdCXE7lqtMQeaVWTTYGw6wWroHvM2XSr0tmK+TkO+S7g4BmqYCDXZR90O2GCb9HLDD09X6YKpDOarvWBlFljpxVF94OYt6UIaPCQ8NSxJ146LBC8stL8yuXGv1Mx2G4JCwrRhUTX05YI5M+41bXbjZFDtRm08eR8p3eKuMN5E49JdJxNRwdrmJav2r9DY9bx5FLZzJ0KLyxRkt5lUWid3k3YaiS6oYRAc1Uc5HZp8CbSaMHSHrRN6KRSCOkfXsNvKdovq2J5hSX0Ml26Ye1qxXIhVSU7TRMsu/F8cxstYytqpl+7uIbV8mBCjpAizocAxW+gJ+6ta3doP1vMphxFSGFLn75wHWVRzAU7qlet8RVUub043ZouD4K16rAOwwhsc/Yvy0uRtnPJNtaV/q60btxv1OMwmnHjaRncu+eILOA3En+rBxX+lpjhI6Qs33WE6jLC5eDw836rJrUMH1gxZp5fF8pc5ujq01t/qULZbrAL3gfV7GNNO9W7fBO/UoUyHwO6ehVEazpTJaEcbt1+u9+rQVoGocFBsPg916jXLYxKn1m01VSGxzHPsL51YhtuZs5gvj19fukn4q1rSDSw0EJ7TIqg43LVwCId9UArbLtdwhyVQvmXRWIl1hx61JEx4gFfpt/slOK4ZnFfQCPilRfqXieuFE9671LF31dS6qbgwxLAR4PolK5tsxoSleX6ipnQTC01kdw+Mxr2QB8JzVW77UO2rACXE5ZdrvC3ov+t+31yuU4vBTsII3wPTIdjdVPzcTrbthXE2Ve3Q/i70jtputBHT5bZmer61vat2Y2xcN5vWqTUPd/h31JxuvvF5tolePTa4qQ7tofbsl70RP1WH001l/wDiaN5V20P4uEBn87ba37D3V37xiOW2Wh8vXK7P/6LD1cOQx8fqP8AmfYXFCXZ/AAAAAElFTkSuQmCC"
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABOCAMAAADhC0M2AAABHVBMVEVHcEz4mCrdaTDSVjjiciz5nTXYXzT4lCH2kR7+/v69M0jMTT339/fqgCbIRD/DPEO0Jk3eghzxjCDUfRrGxcPsjB3meS36pELW1dPr6+vt4tfy8vKto5jmiB3BZQXh3t3LaiPLdxvj08v19fW4MFixWAK0NG/RehZ8fHzXdCP+/v7s7OyUDka8Q3LLvMC7trL4wYK+aBufG0iwJF+rF1S9PWDs29OFfHrRbgT2hw3GnovrvbDERVO+VS3mdgPAlGGsOWTR0dHe3t6yQTTGcCCXGkfGxsaQQVz5+fn6rFTs7Ozl5eXb29u7WyqnLj2qPjXWY0bGYYzNWl7BlqvBhkbT09O5ubmyYhT3uXK8dyzWkD3xljv5rFfZhy26ciD1nG3lAAAAX3RSTlMAZmZmZmZmZmZmZmZlZmZmZmZmZgNmZmYJZg9cGGZmJGZmFShmZmY6CGZCQmZlLyA4ZmZmZmYeEGZmJylmZmY3ZkRlZkhHOxpOVzlRTEdmR2ZYZj9HWkxlRVlQXmBbXiLgK0sAAAZSSURBVFjD7Zj9W9pIEMdBTWU1rRXCSxJeA3pASgCRyNsF8HqoQK8F37X2//8zbmZ3E4IgB5b+cH38Po+KkN3Pzs7Mziwez28m6W+3vjr68vWLo8+Orq7gp91uRFekjD4df0IdHR39Q/UX059M5XI5SZVC1WqBQK1Wi8fvrxrSCpBmpXJ8dPQMwQk4+btkMpfMoQKBfaZAIAWcH+3I8vtVODysHB8ffwTt7Ozs7e19+LC7u7u5ufkOtLGxsQUKhd6DYrFYEBWLASgVj8fbS1tjdAqHlcoMY4IIMYSfyYfyB2OIObhf2jkjoGQyNsRlxzTjPSNsM/n8DNNYEqIUOoVCNfMfEGqJzwsSBPhFMUhpL2vL5SFQ3Nv1kiVe3CuggBAT3E+VF9sSObN1ol0WqtXMjNtnLKnXvY8XF9/BknAYMUiJHyzyi3L4ydHHarXFETOhZUNiVv2uqdCRzbswYhjl4MfCTTpiaUjzEO3YWQSxrJLiWmFJECglFigvdIvWgQQ5YplIHfIiJLS1X9s3p7JLMr/blPhtdmHs0jSkebgQksvVnpSZNVKKdzsYiC805RCSvUIhO4sgW7lacs4RooRZMNetlLQw2ZFSyaBehmzlkvHivOEJAYMMSNbCML7sAAYI1SoPrzkQZFy9EKC2Fh+V5qiC51YmMx633BHM04RCkuUD7SerltZoNJqN5ghOSffxRTkICW0l4/drqpCXHfvAdzAcArs1iZ72H/O11DkpJTAGjh1b2GFPtytXPpi4XYC8mFXqJac9p4xehtxOTqcLYTu2P6OlIbR2zYMky7cnE0hY8AWfC5L+apXatQSEHvdTWgGiHXagdEFWtlqt3WmfRKcg28+EkKVLl1lgSdlqjcfTkLYLEva6xSCp5SGeyIhV+r3x+BtPRzi5APLZDRHc8nJIY5XMbFKNCtUW+AVtwVPl9sBxCh7ujraBiLUeoiu6cmJKl51CZsehwLHi+NUouWR85zW49pojwezYpmxwU+auVIH9WtHvU5lZLbRaHBJC19/OqRiS4ENDoDN6xW6hb6qFcWuXQ0I5aHzuZyiRi7qX9UW11x2gklEdQ4iBaBtMKc9WqzzW7Rav1njlqWxAtgAj9I02K9jE3brba6kEPRhNEjDk6dVnvznaRUtCj7Qjon3vj3aUciSt9GjV7ZY4UPuZkmZCNWvSlsTnZ+01XEoeHq4enizL8vsYAwwp/XQxM8O0VWRdPFx+QJYVC/qxvYd8DMashzWUzITA2it6KcFagjchm+GPWU/SGiBgi8CNgUntexD9D7DWw1oYkDQXAmvit9nUzj3IV7fu1sTAeBUYZrqU1K1gc413fcm8E7wCHvKTQlKv1++UNX+nYN6F6U2OgpDwWNI86xdcfbD4IkS4KJmS51cpommNqKZEPL9ckudNb3rTm970pt9VUjFhsi/3ElRzbjMavs8vjSZ7KmKPLWafl8vspG7anyVUURTlLkwhwQuRiPKlc3e44aN1IuMzdIgqyvgQ/a7FwBGnBp/q/IwvaWDP3euyv0VC+kaPyAySBqmyfaFRT/nTOumneyq5pm8SfCiNlvRxbJfI7ClN5GuKkGv2jiF3+Rsibo+EYyRRpetmkyFf7tkQ3IGueEktsQ2NEhW3MMoblwE5ZTsaEWVKSdjjDWIwRMSBeMgpN4SI3BRd1BzLVDGCkhB95vJblBD5hkOIfC150sSG6ATo8K8IqwBI9Cwa1cUeN6RX5C91WXP+nBMZHWQCTnYHx4BEh/IJ251BjwwNovbELl8j7JZ5fk4hKvgXeEMWHTjHgJnCLRnICkLOURo+kHUb0gUTbhgk7+nBPNkIYZAEYbGEi5BEout5otoeuU6kdRZqDJIVZbqJ9rx90nAb0kunReoVsAQcSDSYgkEkVTRwHSKsivlkSKK2RwiImqKL6LUBfXTi+CyhgWwUmUfwcWoKhUiKx4F4FJjn5lrE8RJdaYSc4nY1ySABkdonN9Rzg+FQZDuskuFQH3YVug3i9c21TMOBBnZClc84hGaqDfEoOqxgUJyEcA93EPxzwj1zghBYp2qwlEP7xNMiSzt4PYzimofcMzcTyMQSuJH383qCRYFOH8yjVfk8+zSdx/DLg9LMzf08Fbv8FPv5PuKKeTZDNt/HsX2e+vn0ci26JP0fmvp/AR3+LcMXzPmIAAAAAElFTkSuQmCC"
    }, function(t, e) {
        t.exports = '<div id="gc_filescanner">\n\n<p><input type="file" id="files" name="gc_scan_files[]" multiple /></p>\n\n<p><button id="gc_scan_go">Scan now</button></p>\n\n</div>\n'
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(129),
            s = function() {
                function t(t) {
                    this.file = t, this.canvas = document.createElement("canvas"), this.atLocation = !1, this.imgDfd = o.loadImageFromFile(this.file), this.supportsNativeRes = !0, this.canvas.style.width = "1px", this.canvas.style.height = "1px", this.canvas.style.visibility = "hidden", document.body.appendChild(this.canvas)
                }
                return t.prototype.next = function() {
                    return !this.atLocation && (this.atLocation = !0, !0)
                }, t.prototype.getName = function() {
                    return this.file.name
                }, t.prototype.getData = function(t) {
                    return void 0 === t && (t = -1), r(this, void 0, void 0, function() {
                        var e, n, r, o, s, a, c;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.imgDfd];
                                case 1:
                                    return e = i.sent(), n = e.width, r = e.height, o = n * r, s = 48e4, t > 0 ? s = t : 0 === t && (s = o), (o > s || t) && (a = Math.sqrt(s / o), n *= a, r *= a), this.canvas.width = n, this.canvas.height = r, (c = this.canvas.getContext("2d")).drawImage(e, 0, 0, n, r), [2, {
                                        obj: e,
                                        data: c.getImageData(0, 0, n, r)
                                    }]
                            }
                        })
                    })
                }, t.prototype.destroy = function() {
                    document.body.removeChild(this.canvas)
                }, t.isSupported = function() {
                    return !(!window.FileReader || (t = document.createElement("canvas"), !t.getContext || !t.getContext("2d")));
                    var t
                }, t
            }();
        t.exports = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(1);

        function i(t) {
            var e = r.newDeferred();
            if (t.src) e.resolve(t.src);
            else {
                var n = new FileReader;
                n.onload = function(t) {
                    e.resolve(n.result)
                }, n.onerror = function(t) {
                    e.reject(t.error)
                }, n.readAsDataURL(t)
            }
            return e.promise
        }
        e.readFileAsUint8 = function(t) {
            var e = r.newDeferred();
            if (t.buffer) e.resolve(t.buffer.buffer || t.buffer);
            else {
                var n = new FileReader;
                n.onload = function(t) {
                    e.resolve(n.result)
                }, n.onerror = function(t) {
                    e.reject(t.error)
                }, n.readAsArrayBuffer(t)
            }
            return e.promise
        }, e.readFileAsDataURL = i, e.loadImageFromFile = function(t) {
            return i(t).then(function(t) {
                var e = r.newDeferred(),
                    n = new Image;
                return n.onload = function() {
                    e.resolve(n)
                }, n.onerror = function(t) {
                    e.reject(t.error)
                }, n.src = t, e.promise
            })
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = function() {
                function t(t) {
                    this.file = t, this.atLocation = !1, this.canvas = document.createElement("canvas"), this.canvas.style.width = "1px", this.canvas.style.height = "1px", this.canvas.style.visibility = "hidden";
                    var e = this.canvas.getContext("2d");
                    this.imgData = e.createImageData(t.width, t.height), this.imgData.data.set(t.pixels)
                }
                return t.prototype.next = function() {
                    return !this.atLocation && (this.atLocation = !0, !0)
                }, t.prototype.getName = function() {
                    return this.file.name
                }, t.prototype.getData = function(t) {
                    return void 0 === t && (t = -1), r(this, void 0, void 0, function() {
                        return i(this, function(t) {
                            return [2, {
                                obj: this.canvas,
                                data: this.imgData
                            }]
                        })
                    })
                }, t.prototype.destroy = function() {
                    this.imgData = null, this.canvas = null
                }, t.isSupported = function() {
                    return !(!(t = document.createElement("canvas")).getContext || !t.getContext("2d"));
                    var t
                }, t
            }();
        t.exports = o
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.detectBW = function(t) {
            for (var e = 0, n = 0, r = t.data.data, i = 0; i < t.data.data.length; i += 4) {
                var o = (r[i] + r[i + 1] + r[i + 2]) / 3;
                o < 128 && (n += 1), o < 10 && (e += 1)
            }
            return e / n > .3
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var nbl = {
            c: document,
            q: {},
            n: null,
            l: function(a) {
                var b, c, x, y, z, s, l, i = 0,
                    j = 0,
                    m = this;
                if (m.h = m.c.head || m.c.body || m.c.documentElement || m.h, m.i || (m.s = m.f = 0, m.i = setInterval(function() {
                        (m.o < 0 || !m.s) && (m.i = clearInterval(m.i), m.s > 0 && m.f && m.f(m.q)), m.o--
                    }, m.o = 50)), a == m.n)
                    for (s = m.c.getElementsByTagName("script"); j < s.length;) {
                        if ((a = eval("(" + s[j].getAttribute("data-nbl") + ")")) && a) {
                            m.h = s[j].parentNode;
                            break
                        }
                        j++
                    }
                if (a && a.shift)
                    for (; i < a.length;) b = a[i], c = a[i + 1], x = "function", y = typeof b, z = typeof c, l = z == x ? c : y == x ? b : m.n, "number" == y && (m.o = b / 50), "string" == y && m.a([b], l), b.shift && m.a([b.shift(), b], l), !m.f && l && (m.f = l), i++
            },
            a: function(t, e) {
                var n, r = this,
                    i = t[0].replace(/.+\/|\.min\.js|\.js|\?.+|\W/gi, "");
                (n = r.q[i] = r.c.createElement("script")).setAttribute("src", t[0]), n.onload = n.onreadystatechange = function() {
                    var n = this;
                    n.readyState && !/de|te/.test(n.readyState) || (n.onload = n.onreadystatechange = r.n, function() {
                        var n = r,
                            o = t[1];
                        n.q[i] = !0, o && n.l(o), e && e(), n.s--
                    }())
                }, r.s++, r.h.appendChild(n)
            }
        };
        module.exports = nbl
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(1),
            s = n(0),
            a = n(6),
            c = n(46),
            u = n(44),
            l = n(25),
            p = n(134),
            f = n(26);

        function h(t) {
            return a.webWorker && a.reqAnimFrame && a.fileSupport && t.supports && t.supports("processBase64")
        }
        var d = function() {
            function t(t) {
                this.plugin = t
            }
            return t.prototype.displayObject = function(t) {}, t.prototype.processDirectData = function(t) {
                var e = o.newDeferred(),
                    n = t.data,
                    r = t.width,
                    i = t.height,
                    s = f.getGrayscaleBuffer(n, r, i, !0),
                    a = c.encode(s),
                    u = this.plugin.processBase64(r, i, a);
                return setTimeout(function() {
                    e.resolve(u)
                }, 0), e.promise
            }, t.prototype.createHtml5Loader = function(t, e) {
                return r(this, void 0, void 0, function() {
                    var n, r, a = this;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                e = e && s.isArray(e) ? o.newDeferred(e).promise : u(), i.label = 1;
                            case 1:
                                return i.trys.push([1, 4, , 5]), [4, e];
                            case 2:
                                return n = i.sent(), [4, l.ensureFileLoaders(n)];
                            case 3:
                                return i.sent(), r = new l(n, function(t) {
                                    return a.displayObject(t)
                                }, function(t) {
                                    return a.processDirectData(t)
                                }), t && t(r), [2, r];
                            case 4:
                                return i.sent(), t && t(null), [2, null];
                            case 5:
                                return [2]
                        }
                    })
                })
            }, t.prototype.createDirectoryScanner = function(t) {
                return h(this.plugin) ? this.createHtml5Loader(t) : new p(this.plugin).createDirectoryScanner(t)
            }, t.prototype.createFileScanner = function(t) {
                return h(this.plugin) ? this.createHtml5Loader(t) : new p(this.plugin).createFileScanner(t)
            }, t.prototype.loadFromFileArray = function(t, e) {
                return !!h(this.plugin) && this.createHtml5Loader(t, e)
            }, t.prototype.canUseFileArray = function() {
                return h(this.plugin)
            }, t
        }();
        t.exports = d
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            i = function() {
                function t(t) {
                    this.pluginScanner = t
                }
                return t.prototype.next = function(t, e) {
                    return this.pluginScanner.next(function(e, n) {
                        t(e ? [JSON.parse(n.replace(/'/g, '"'))] : [{
                            error: !0,
                            type: "file",
                            fileName: n
                        }])
                    })
                }, t
            }(),
            o = function() {
                function t(t) {
                    this.plugin = t
                }
                return t.prototype.scanWrapper = function(t, e) {
                    var n = r.newDeferred();
                    return this.plugin[t](function(t) {
                        if (!t) return n.resolve(null), e(null), null;
                        var r = new i(t);
                        return e(r), n.resolve(r), r
                    }), n.promise
                }, t.prototype.createFileScanner = function(t) {
                    return this.scanWrapper("createFileScanner", t)
                }, t.prototype.createDirectoryScanner = function(t) {
                    return this.scanWrapper("createDirectoryScanner", t)
                }, t
            }();
        t.exports = o
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            i = n(1),
            o = {
                GCPlugin: {
                    name: "GCPlugin",
                    mimeType: "application/x-gradecam",
                    activeXName: "GradeCam.GCPlugin",
                    guid: "c6bdb9cb-5921-5a0d-aced-d5f0ebcd92a1",
                    installURL: {
                        win: "_installer.msi"
                    }
                }
            },
            s = 0;
        var a = -1,
            c = null,
            u = new(function() {
                function t() {
                    this.pollInterval = 500, this.addListener = document.attachEvent ? function(t, e, n) {
                        t.attachEvent("on" + e, n)
                    } : function(t, e, n) {
                        t.addEventListener(e, n, !1)
                    }
                }
                return t.prototype.isPluginInstalled = function() {
                    return window.gcmobilesdk ? "mobile" : o.GCPlugin ? function() {
                        var t = o.GCPlugin.activeXName,
                            e = !1;
                        try {
                            e = new ActiveXObject(t);
                            var n = !1;
                            if (e) try {
                                n = e.getVersionMajor()
                            } catch (t) {
                                n = !0
                            }
                            return n
                        } catch (t) {}
                        if (!navigator.plugins || !navigator.plugins.refresh) return !1;
                        navigator.plugins.refresh(!1);
                        var r = o.GCPlugin.name;
                        if (void 0 !== navigator.plugins[r]) {
                            var i = navigator.plugins[r].filename,
                                s = /([0-9.]+)\.dll/.exec(i);
                            return null === s || s[1]
                        }
                        return !1
                    }() : null
                }, t.prototype.cancelWait = function() {
                    a > -1 && clearTimeout(a), a = -1, c && c.resolve()
                }, t.prototype.waitForInstall = function() {
                    var t = this;
                    if (c) return c.promise;
                    c = i.newDeferred();
                    var e = function() {
                        t.isPluginInstalled() ? (a = -1, c.resolve(!!t.isPluginInstalled())) : a = setTimeout(function() {
                            e()
                        }, t.pollInterval)
                    };
                    return e(), c.promise
                }, t.prototype.abortWait = function() {
                    -1 != a && (clearInterval(a), a = -1)
                }, t.prototype.injectPlugin = function(t, e, n) {
                    var a = i.newDeferred(),
                        c = o.GCPlugin;
                    (n = n || {}).onload = "__pluginCB" + s++;
                    var u = r.once(function(t) {
                        var n = document.getElementById(e);
                        t || (t = n), a.resolve([t, n])
                    });
                    window.gradecamPluginInit = window[n.onload] = u;
                    var l = '<object id="' + e + '" type="' + c.mimeType + '" style="width: 1px; height: 1px;">';
                    return r(n).each(function(t, e) {
                        l += '<param name="' + e + '" value="' + n[e] + '" />'
                    }), l += "</object>", t.innerHTML = l, t.style.backgroundColor = "#000000", a.promise
                }, t.prototype.addListener = function(t, e, n) {}, t
            }());
        t.exports = u
    }, function(t, e, n) {
        "use strict";
        var r = n(137),
            i = n(42),
            o = n(6),
            s = n(1),
            a = new(function() {
                function t() {
                    this.loadPref = null
                }
                return t.prototype.getName = function() {
                    return "noplugin"
                }, t.prototype.isSupported = function() {
                    return o.userMedia && o.reqAnimFrame && o.webWorker
                }, t.prototype.isInstalled = function() {
                    return !0
                }, t.prototype.makeInstallUrl = function(t, e) {
                    var n = this.downloadsUrl;
                    if (t || e) {
                        var r = [];
                        t && r.push("v=" + t), e && r.push("url=" + encodeURIComponent(e)), n = n + "?" + r.join("&")
                    }
                    return n
                }, t.prototype.setDownloadsUrl = function(t) {
                    this.downloadsUrl = t
                }, t.prototype.cancelLoad = function() {}, t.prototype.instantiate = function(t) {
                    var e = r.create(t);
                    return s.PromiseAll([e]).then(function(t) {
                        var e = t[0],
                            n = e[0],
                            r = e[1];
                        return new i(n, r)
                    })
                }, t.prototype.doesInstallRequireRestart = function() {
                    return !0
                }, t.prototype.waitForInstall = function() {
                    var t = s.newDeferred();
                    return o.plugin2.waitForPlugin(function() {
                        return t.resolve(!0)
                    }), t.promise
                }, t.prototype.supportsTyper = function() {
                    return o.plugin2.supported
                }, t.prototype.isTyperInstalled = function() {
                    return !!o.plugin2.installed
                }, t.prototype.supports = function(t) {
                    return r.supports(t)
                }, t
            }());
        t.exports = a
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(7),
            s = n(3),
            a = n(0),
            c = n(138),
            u = n(10),
            l = n(139),
            p = n(2),
            f = n(43),
            h = n(1),
            d = n(10),
            A = n(146),
            g = p.get(),
            m = 1,
            y = 2,
            v = {},
            b = ["typer", "typerArrows", "typerStrings", "setTyperStrings", "elmoCallback", "rkeyDelay"],
            w = a.template(A),
            _ = function() {
                function t(t) {
                    var e = this;
                    this.el = t, this.cameraController = null, this.bitBlitter = null, this.imageHandler = null, this.evtBus = new s.ClassTS, this.version = "", this.workerSupports = {}, this.scanOptions = {
                        gcip_v2: !0
                    }, this.plugin2 = null, this.p2Deferred = h.newDeferred(), this.startupTimer = new p.LogTimer("NoPlugin Startup Timer", p.INFO), this.currentCameraInfo = new o.ReplaySubject(1), this.bind = a.bind(this.evtBus.bind, this.evtBus), this.unbind = a.bind(this.evtBus.unbind, this.evtBus), this.el.innerHTML = w(), this.canvas = this.el.querySelector("canvas"), this.naclParent = t.querySelector("div");
                    var n = l.create(this.naclParent, m, y),
                        r = c.create(this.canvas),
                        i = u.create(t, n, r, this.p2Deferred.promise);
                    this.loadedDfd = h.PromiseAll([n, r, i]).then(function(t) {
                        var n = t[0],
                            r = t[1],
                            i = t[2];
                        return e.imageHandler = n, e.bitBlitter = r, e.cameraController = i, e.initCameraController(i), e.initBitBlitter(r), e.initImageHandler(n, r), e.version = n.getWorkerVersion(), e.workerSupports = n.getWorkerSupports(), g.info("NoPlugin Version: " + e.version), e.startupTimer.logNow(), e.startupTimer = null, e
                    })
                }
                return t.prototype.getLoadedDfd = function() {
                    return this.loadedDfd
                }, t.prototype.initCameraController = function(t) {
                    var e = this.evtBus;
                    t.bind("videoSize", function(t, n) {
                        e.trigger("videoSize", t, n)
                    }), t.currentCameraInfo.subscribe(this.currentCameraInfo)
                }, t.prototype.initBitBlitter = function(t) {
                    var e = this.evtBus;
                    t.bind("cameraVisible", function(t) {
                        e.trigger("cameraVisible", t)
                    })
                }, t.prototype.initImageHandler = function(t, e) {
                    var n = this.evtBus;
                    t.setOptions(this.scanOptions), t.bind("scan", function(t) {
                        g.trace("GCIP scan received: ", t), n.trigger("scan", t)
                    }), t.bind("suspectedRects", function(t) {
                        g.trace("suspectedRects: ", t), e.setSuspectedRects(t)
                    }), t.bind("confirmedRects", function(t) {
                        g.trace("confirmedRects: ", t), e.setConfirmedRects(t)
                    }), t.bind("debugImages", function(t) {
                        n.trigger("debugImages", t)
                    }), t.bind("processingTime", function(t) {
                        n.trigger("processingTime", t)
                    })
                }, t.prototype._setDebugOutputContainer = function(t) {
                    return this.imageHandler.setDebugOutputContainer(t)
                }, t.prototype.inhibitProcessing = function(t) {
                    return this.imageHandler.inhibitProcessing(t)
                }, t.prototype.initTyper = function(t, e, n, r) {
                    if (void 0 === r && (r = 0), !this.plugin2) return !1;
                    this.supports("rkeyDelay") ? this.plugin2.initTyper(t, e, n, r) : this.plugin2.initTyper(t, Math.max(e, r), n)
                }, t.prototype.setTyperStrings = function(t) {
                    if (!this.plugin2 || !this.supports("setTyperStrings")) return !1;
                    g.info("Setting typer strings to:", t), this.plugin2.setTyperStrings(t)
                }, t.prototype.clearTyperStrings = function() {
                    if (!this.plugin2 || !this.supports("setTyperStrings")) return !1;
                    g.info("Clearing typer strings"), this.plugin2.clearTyperStrings()
                }, t.prototype.getCameraList = function() {
                    return this.cameraController.getCameraList()
                }, t.prototype.setCamera = function(t, e) {
                    !0 === e && (e = d.Rotate.Full180), !1 === e && (e = d.Rotate.None), this.cameraController.setRotate(e), this.cameraController.setCamera(t)
                }, t.prototype.stopCamera = function() {
                    return this.cameraController.stopCamera()
                }, t.prototype.enableHighRes = function(t) {
                    return this.bitBlitter.enableHighRes(t)
                }, t.prototype.pauseCamera = function() {
                    this.cameraController.pause()
                }, t.prototype.unpauseCamera = function() {
                    this.cameraController.unpause()
                }, t.prototype.displayDirectObj = function(t) {
                    this.bitBlitter.drawImage(t)
                }, t.prototype.processDirectData = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, n;
                        return i(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return this.pauseCamera(), [4, this.imageHandler.whenReadyForFrame()];
                                case 1:
                                    r.sent(), r.label = 2;
                                case 2:
                                    return r.trys.push([2, 4, , 5]), [4, this.imageHandler.processFrame(t, !0, !0)];
                                case 3:
                                    return e = r.sent(), [3, 5];
                                case 4:
                                    return n = r.sent(), g.error("Error processing frame: ", n), [3, 5];
                                case 5:
                                    return this.unpauseCamera(), [2, e]
                            }
                        })
                    })
                }, t.prototype.getVersion = function() {
                    return this.version
                }, t.prototype.getVersionMajor = function() {
                    return this.version.split(".")[0]
                }, t.prototype.getVersionMinor = function() {
                    return this.version.split(".")[1]
                }, t.prototype.getCurrentImage = function() {
                    return !1
                }, t.prototype.getJPEGImage = function() {
                    return !1
                }, t.prototype.getGciAsync = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, n, r, o;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, h.PromiseAll([this.imageHandler.getGciData(), this.cameraController.getJpegDfd()])];
                                case 1:
                                    return e = i.sent(), n = e[0], r = e[1], t(!(!n || !r) && [n.width, n.height, r, n.data]), [3, 3];
                                case 2:
                                    return o = i.sent(), g.error("Error getting GCI:", o), t(!1), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.getJpegAsync = function(t) {
                    this.cameraController.getJpegDfd().then(function(e) {
                        t(e)
                    }, function() {
                        t(!1)
                    })
                }, t.prototype.setPlugin2 = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, n, o, s, a, c, u = this;
                        return i(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return l.trys.push([0, 6, , 7]), t ? (g.info("Plugin2 loaded", t), this.plugin2 = t, "featureMap" in t ? [4, t.featureMap] : [3, 2]) : (g.info("No plugin2 found"), this.p2Deferred.resolve(null), [2, this.p2Deferred.promise]);
                                case 1:
                                    for (e = l.sent(), n = 0, o = b; n < o.length; n++) s = o[n], v[s] = !!e[s];
                                    return [3, 5];
                                case 2:
                                    return [4, t.supports];
                                case 3:
                                    return a = l.sent(), c = b.map(function(t) {
                                        return r(u, void 0, void 0, function() {
                                            var e;
                                            return i(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, a(t)];
                                                    case 1:
                                                        return e = n.sent(), v[t] = e, [2, e]
                                                }
                                            })
                                        })
                                    }), [4, h.PromiseAll(c)];
                                case 4:
                                    l.sent(), l.label = 5;
                                case 5:
                                    return this.supports("elmoCallback") ? this.p2Deferred.resolve(t) : this.p2Deferred.resolve(null), [3, 7];
                                case 6:
                                    return l.sent(), g.error("Failed to check supported features"), this.p2Deferred.resolve(null), [3, 7];
                                case 7:
                                    return [2, this.p2Deferred.promise]
                            }
                        })
                    })
                }, t.prototype.setOption = function(t, e) {
                    this.scanOptions[t] = e, this.imageHandler.setOptions(this.scanOptions)
                }, t.prototype.getScan = function() {
                    return !1
                }, t.prototype.setTransparency = function(t) {}, t.prototype.supports = function(e) {
                    return "typer" == e ? !!this.plugin2 : this.workerSupports[e] || v[e] || t.supports(e)
                }, t.prototype.getElement = function() {
                    return this.canvas
                }, t.supports = function(t) {
                    switch (t) {
                        case "elmo":
                            return !1;
                        case "imageExport":
                        case "multiTiff":
                        case "fileScan":
                            return !0;
                        case "typerArrows":
                            return !1;
                        case "directData":
                        case "highRes":
                        case "rotate":
                            return !0;
                        default:
                            return !1
                    }
                }, t.create = function(e) {
                    return r(this, void 0, void 0, function() {
                        var n, r;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    g.info("Creating NoPlugin"), n = new t(e), r = null, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, f()];
                                case 2:
                                    return r = i.sent(), n.setPlugin2(r), [3, 4];
                                case 3:
                                    return i.sent(), g.info("Plugin2 not loaded"), n.setPlugin2(null), [3, 4];
                                case 4:
                                    return [4, n.getLoadedDfd()];
                                case 5:
                                    return i.sent(), [2, [n, n.getElement()]]
                            }
                        })
                    })
                }, t
            }();
        t.exports = _
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(0),
            s = n(3),
            a = n(10),
            c = function() {
                function t(t) {
                    this.canvas = t, this.evtBus = new s.ClassTS, this.context = this.canvas.getContext("2d"), this.yellowRects = [], this.greenRects = [], this.high_res = !1, this.high_res_timeout = -1, this.bind = o.bind(this.evtBus.bind, this.evtBus), this.unbind = o.bind(this.evtBus.unbind, this.evtBus), this.clearVideo()
                }
                return t.prototype._drawRects = function(t, e, n, r) {
                    void 0 === r && (r = a.Rotate.None);
                    var i = this.canvas,
                        s = this.context,
                        c = i.width,
                        u = i.height,
                        l = function(t) {
                            return t * n
                        },
                        p = function(t) {
                            return t * n
                        };
                    o.each(t, function(t) {
                        s.beginPath(), s.lineWidth = c * u / 48e4 * 3, s.strokeStyle = e, s.moveTo(l(t.tl.x), p(t.tl.y)), s.lineTo(l(t.bl.x), p(t.bl.y)), s.lineTo(l(t.br.x), p(t.br.y)), "clip" != t.type && (s.lineTo(l(t.tr.x), p(t.tr.y)), s.lineTo(l(t.tl.x), p(t.tl.y))), s.stroke()
                    })
                }, t.prototype.enableHighRes = function(t) {
                    var e = this;
                    return this.high_res = !0, this.high_res_timeout > 0 && clearTimeout(this.high_res_timeout), this.high_res_timeout = setTimeout(function() {
                        return e.reset_high_res()
                    }, t), !0
                }, t.prototype.isHighRes = function() {
                    return this.high_res
                }, t.prototype.reset_high_res = function() {
                    this.high_res = !1, this.high_res_timeout = -1
                }, t.prototype.calculateScaleFactor = function(t, e) {
                    var n = Math.sqrt(48e4 / (t * e)),
                        r = Math.sqrt(2073600 / (t * e)),
                        i = n;
                    return (this.high_res || i > 1) && (i = 1), r < i && (i = r), i
                }, t.prototype.setSuspectedRects = function(t) {
                    this.yellowRects = t
                }, t.prototype.setConfirmedRects = function(t) {
                    this.greenRects = t
                }, t.prototype.drawVideo = function(t, e) {
                    void 0 === e && (e = a.Rotate.None);
                    var n = this.context,
                        r = this.canvas;
                    n.setTransform(1, 0, 0, 1, 0, 0);
                    var i = t.videoWidth || t.naturalWidth,
                        o = t.videoHeight || t.naturalHeight,
                        s = this.calculateScaleFactor(i, o);
                    i = Math.floor(i * s), o = Math.floor(o * s), r.width = i, r.height = o;
                    var c = !1,
                        u = Math.PI;
                    switch (e) {
                        case a.Rotate.Left90:
                            u *= -.5, c = !0;
                            break;
                        case a.Rotate.Right90:
                            u *= .5, c = !0;
                            break;
                        case a.Rotate.Full180:
                            u *= 1;
                            break;
                        case a.Rotate.None:
                        default:
                            u *= 0
                    }
                    return c ? (r.height = i, r.width = o, n.translate(o / 2, i / 2)) : n.translate(i / 2, o / 2), n.rotate(u), c ? (n.drawImage(t, -i / 2, -o / 2, i, o), n.rotate(-u), n.translate(-o / 2, -i / 2)) : (n.drawImage(t, -i / 2, -o / 2, i, o), n.rotate(-u), n.translate(-i / 2, -o / 2)), this.evtBus.trigger("cameraVisible", !0), c ? {
                        w: o,
                        h: i
                    } : {
                        w: i,
                        h: o
                    }
                }, t.prototype.drawImage = function(t) {
                    var e = this.context,
                        n = this.canvas;
                    n.width = t.width, n.height = t.height, e.drawImage(t, 0, 0, t.width, t.height), this.evtBus.trigger("cameraVisible", !0)
                }, t.prototype.drawRects = function(t) {
                    this._drawRects(this.yellowRects, "yellow", 4, t), this._drawRects(this.greenRects, "green", 1, t)
                }, t.prototype.clearRects = function() {
                    this.yellowRects = [], this.greenRects = []
                }, t.prototype.clearVideo = function() {
                    var t = this.context,
                        e = this.canvas;
                    t.beginPath(), t.fillStyle = "black", t.rect(0, 0, e.width, e.height), t.fill(), this.evtBus.trigger("cameraVisible", !1)
                }, t.prototype.getVideoPixels = function() {
                    return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
                }, t.prototype.getJPEGImage = function() {
                    var t = this.canvas.toDataURL("image/jpeg");
                    return 5 != t.indexOf("image/jpeg") ? null : t.substr(t.indexOf(",") + 1)
                }, t.create = function(e) {
                    return r(this, void 0, void 0, function() {
                        return i(this, function(n) {
                            return [2, new t(e)]
                        })
                    })
                }, t
            }();
        t.exports = c
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            o = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            s = n(3),
            a = n(0),
            c = n(140),
            u = n(46),
            l = n(2),
            p = n(145),
            f = n(26),
            h = n(1),
            d = l.get();
        ! function(t) {
            t.Rect = "rect", t.GCIP = "gcip", t.GCIPLock = "gcip_lock"
        }(r || (r = {}));
        var A = [{
            threshold: 0,
            throttleTo: 30
        }, {
            threshold: 5,
            throttleTo: 5
        }, {
            threshold: 15,
            throttleTo: 4
        }];
        var g = function() {
            function t(t, e, n) {
                this.naclParent = t, this.gcipWorkerCount = e, this.rectWorkerCount = n, this.timerSinceLastScan = new l.LogTimer("TimeSinceLastScan", 999), this.timerSinceLastGCIP = new l.LogTimer("TimeSinceLastGCIP", 999), this.timerSinceLastRect = new l.LogTimer("TimeSinceLastRect", 999), this.profileScanTimer = new l.LogTimer("profileScanTimer", l.INFO), this.profileGCIPTimer = new l.LogTimer("profileGCIPTimer", l.INFO), this.profileRectTimer = new l.LogTimer("profileRectTimer", l.INFO), this.seqFailCount = 0, this.currentImage = null, this.currentIsOneOff = !1, this.inhibit = !1, this.inhibitCallbackId = -1, this.scanOpts = {}, this.gcipWorkers = [], this.rectWorkers = [], this.version = null, this.supports = {}, this.state = r.Rect, this.evtBus = new s.ClassTS, this.outputContainer = null, this._readyDfd = this._initWorkers(), this.bind = a.bind(this.evtBus.bind, this.evtBus), this.unbind = a.bind(this.evtBus.unbind, this.evtBus)
            }
            return t.prototype._initWorkers = function() {
                return i(this, void 0, void 0, function() {
                    var t, e, n, r, i, s = this;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return t = this.gcipWorkers, e = this.rectWorkers, (n = function(t, e, n) {
                                    for (var r = 0; r < n; ++r) {
                                        var i = c.createWorker(s.naclParent);
                                        t.push(i), e.push(i.getReadyDfd())
                                    }
                                })(t, r = [], this.gcipWorkerCount || 1), n(e, r, this.rectWorkerCount || 1), [4, r[0]];
                            case 1:
                                return i = o.sent(), this.version = i.getVersion(), this.supports = i.getSupports(), [4, h.PromiseAll(r)];
                            case 2:
                                return o.sent(), [2, this]
                        }
                    })
                })
            }, t.prototype.setDebugOutputContainer = function(t) {
                this.outputContainer = t
            }, t.prototype.getGCIPWorker = function() {
                return a.find(this.gcipWorkers, function(t) {
                    return t.isIdle()
                })
            }, t.prototype.getRectWorker = function() {
                return this.timerSinceLastRect.getSeconds() < (t = this.timerSinceLastScan.getSeconds(), e = 1, a.each(A, function(n) {
                    t > n.threshold && (e = n.throttleTo)
                }), 1 / e) ? null : this.timerSinceLastRect.getSeconds() < 1 / 1.5 ? null : a.find(this.rectWorkers, function(t) {
                    return t.isIdle()
                });
                var t, e
            }, t.prototype.inhibitProcessing = function(t) {
                var e = this;
                void 0 === t && (t = 500), -1 != this.inhibitCallbackId && clearTimeout(this.inhibitCallbackId), this.inhibit = t > 0, 0 !== t && (this.inhibitCallbackId = setTimeout(function() {
                    e.inhibit = !1
                }, t))
            }, t.prototype.setOptions = function(t) {
                this.scanOpts = t || {}
            }, t.prototype.readyForFrame = function() {
                var t = this.state;
                if (this.inhibit) return !1;
                if (t == r.GCIP || t == r.GCIPLock) return !!this.getGCIPWorker();
                if (t == r.Rect) return !!this.getRectWorker();
                throw new Error("ImageHandler in invalid state!")
            }, t.prototype.whenReadyForFrame = function() {
                var t = this,
                    e = h.newDeferred(),
                    n = function() {
                        t.readyForFrame() ? e.resolve(!0) : setTimeout(n, 5)
                    };
                return this.readyForFrame() ? e.resolve(!0) : setTimeout(n, 5), e.promise
            }, t.prototype.logAndReset = function(t, e) {
                t.getSeconds() > e && (t.logNow(), t.reset())
            }, t.prototype.getState = function() {
                return this.state
            }, t.prototype.setState = function(t) {
                t != this.state && (this.state = t, d.debug("ImageHandler state is " + this.state))
            }, t.prototype.processFrame = function(t, e, n) {
                return i(this, void 0, void 0, function() {
                    var i, s, a, c, u, A, g, m, y, v, b, w, _, S, x, k;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return i = h.newDeferred(), s = this.evtBus, this.currentImage = t, this.currentIsOneOff = e, u = t.data, A = t.width, g = t.height, m = this.getState(), e || m == r.GCIP || m == r.GCIPLock ? a = this.getGCIPWorker() : "rect" == m && (c = this.getRectWorker()), y = new l.LogTimer("Convert to grayscale", l.DEBUG), v = f.getGrayscaleBuffer(u, A, g, !!e), y.logNow(), y = null, c ? (this.timerSinceLastRect.reset(), c.lock(), [4, c.getRects(A, g, v)]) : [3, 2];
                            case 1:
                                return S = o.sent(), this.profileRectTimer.ping(), S.length ? (s.trigger("suspectedRects", S), this.setState(r.GCIP)) : m != r.GCIPLock && this.setState(r.GCIPLock), [3, 4];
                            case 2:
                                return a ? (d.trace("Running GCIP"), a.lock(), this.timerSinceLastGCIP.reset(), b = (new Date).getTime(), [4, a.readImage(A, g, v, this.scanOpts)]) : [3, 4];
                            case 3:
                                if (w = o.sent(), _ = w[0], S = w[1], x = w[2], this.profileGCIPTimer.ping(), s.trigger("processingTime", (new Date).getTime() - b), this.outputContainer && (_ || e) && p.importImageBuffer(A, g, v, this.outputContainer), x && x.debugImages && s.trigger("debugImages", x.debugImages), _) {
                                    d.debug("Found possible scan, locking w/ " + A + "x" + g), this.setState(r.GCIPLock), s.trigger("confirmedRects", S), s.trigger("suspectedRects", []), this.seqFailCount = 0;
                                    try {
                                        (k = JSON.parse(_)) && k.length && k[0].type && (k.unshift({
                                            type: "meta",
                                            higher_avail: !n
                                        }), _ = JSON.stringify(k))
                                    } catch (t) {}
                                    e || s.trigger("scan", _), this.timerSinceLastScan.reset(), this.profileScanTimer.ping(), i.resolve(_)
                                } else i.resolve(""), m == r.GCIPLock ? (this.seqFailCount++, this.seqFailCount >= 3 && (this.setState(r.Rect), s.trigger("confirmedRects", []))) : (this.setState(r.Rect), s.trigger("confirmedRects", []));
                                o.label = 4;
                            case 4:
                                return this.logAndReset(this.profileScanTimer, 10), this.logAndReset(this.profileGCIPTimer, 10), this.logAndReset(this.profileRectTimer, 10), [2, i.promise]
                        }
                    })
                })
            }, t.prototype.getGciData = function() {
                var t = this.currentImage;
                if (!t) return null;
                var e = t.data,
                    n = new Uint32Array(2);
                n[0] = t.width, n[1] = t.height;
                var r = new Uint8Array(e.length / 4 + 8);
                r.set(new Uint8Array(n.buffer), 0);
                for (var i = f.getGrayscaleBuffer(e, t.width, t.height, !!this.currentIsOneOff), o = 0; o < i.length; ++o) r[o + 8] = i[o];
                return {
                    width: t.width,
                    height: t.height,
                    data: u.encode(r)
                }
            }, t.prototype.getWorkerVersion = function() {
                return this.version
            }, t.prototype.getWorkerSupports = function() {
                return this.supports
            }, t.create = function(t, e, n) {
                return i(this, void 0, void 0, function() {
                    var r;
                    return o(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, (r = new this(t, e, n))._readyDfd];
                            case 1:
                                return i.sent(), [2, r]
                        }
                    })
                })
            }, t
        }();
        t.exports = g
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = n(141),
            o = n(142),
            s = n(143),
            a = n(2),
            c = n(144),
            u = a.get(),
            l = window._GCREGION || "us",
            p = c("nopluginVer") || window._GCNOPLUGINVER || "current",
            f = "asia" === l ? "https://cdn-qnhd.menco.cn/assets/vendors/gradecam/gc/noplugin/" + p + "/" : "https://downloads.gradecam.com/noplugin/" + p + "/",
            h = f,
            d = c("nopluginOverride") || window._GCNOPLUGINURL;
        d && (h = d);
        var A = function() {
            try {
                if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
                    var t = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                    if (t instanceof WebAssembly.Module) return new WebAssembly.Instance(t) instanceof WebAssembly.Instance
                }
            } catch (t) {}
            return !1
        }();
        e.createWorker = function(t) {
            if (A || !o.isSupported()) return u.info("Using native JS"), new i(r.bind(s, null, h));
            u.info("Using pnacl");
            var e = document.createElement("div");
            return t.appendChild(e), new i(r.bind(o, null, e, h))
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(21),
            s = n(2),
            a = n(1),
            c = s.get(),
            u = 1,
            l = function() {
                function t(t) {
                    var e = this;
                    this.id = u++, this.name = "GCIPWorker #" + this.id, this.logTimer = new s.LogTimer(name, s.DEBUG), this.gcipTimer = new s.LogTimer(name + " readImage", s.DEBUG), this.rectTimer = new s.LogTimer(name + " findRects", s.DEBUG), this.initDfd = null, this.worker = null, this.readyDfd = null, this.intervalId = -1, this.supports = {}, this.lastScanDfd = null, this.lastRectDfd = null, this.locked = !1, c.debug("Creating " + name), this.worker = t();
                    var n = this.worker.getReadyDfd().then(function(t) {
                        return e.initWorker(t)
                    });
                    this.readyDfd = n.then(function() {
                        return c.debug("Authenticating " + e.name), o(e).then(function() {
                            return e.logTimer.logNow("Authenticated in"), e.logTimer.reset(), e
                        })
                    })
                }
                return t.prototype.initWorker = function(t) {
                    var e = this;
                    return this.initDfd = a.newDeferred(), this.intervalId = setInterval(function() {
                        return t.postMessage({
                            fn: "init",
                            message: "init"
                        })
                    }, 100), t.setHandler(function(t) {
                        return e.messageHandler(t)
                    }), this.initDfd.promise
                }, t.prototype.messageHandler = function(t) {
                    switch (c.trace(this.name + " received message:", t), t.message) {
                        case "version":
                            clearInterval(this.intervalId), this.version = String(t.version), this.challenge = String(t.challenge), this.supports = t.supports || this.supports, this.logTimer.logNow("loaded in"), this.logTimer.reset(), c.info("Finished loading GCIPWorker #" + this.id), this.initDfd.resolve(this.worker);
                            break;
                        case "challenge":
                            this.challenge = String(t.challenge);
                            break;
                        case "gcip":
                            this.lastScanDfd && (this.gcipTimer.logNow("readImage returned in"), t.error ? (this.lastScanDfd.reject(new Error(t.error)), this.lastScanDfd = null) : (this.lastScanDfd.resolve([String(t.scan), t.rects, t.extra]), this.lastScanDfd = null), this.locked = !1);
                            break;
                        case "rect":
                            this.lastRectDfd && (this.rectTimer.logNow("findRects returned in"), t.error ? (this.lastRectDfd.reject(new Error(t.error)), this.lastRectDfd = null) : (this.lastRectDfd.resolve(t.rects), this.lastRectDfd = null), this.locked = !1)
                    }
                }, t.prototype.isIdle = function() {
                    return !this.locked
                }, t.prototype.lock = function() {
                    this.locked = !0
                }, t.prototype.readImage = function(t, e, n, o) {
                    return r(this, void 0, void 0, function() {
                        var r;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.lastScanDfd && c.error("lastScanDfd already defined!"), (r = this.lastScanDfd || a.newDeferred()) != this.lastScanDfd && (this.lastScanDfd = r), [4, this.readyDfd];
                                case 1:
                                    return i.sent(), this.gcipTimer.reset("Beginning GCIP"), this.worker.postMessage({
                                        fn: "readImage",
                                        width: t,
                                        height: e,
                                        buf: n.buffer,
                                        opts: o
                                    }), [2, r.promise]
                            }
                        })
                    })
                }, t.prototype.getRects = function(t, e, n) {
                    return r(this, void 0, void 0, function() {
                        return i(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return this.lastRectDfd && c.error("lastRectDfd already defined!"), this.lastRectDfd = this.lastRectDfd || a.newDeferred(), [4, this.readyDfd];
                                case 1:
                                    return r.sent(), this.rectTimer.reset("Beginning findRects"), this.worker.postMessage({
                                        fn: "getRects",
                                        width: t,
                                        height: e,
                                        buf: n.buffer
                                    }), [2, this.lastRectDfd.promise]
                            }
                        })
                    })
                }, t.prototype.getChallenge = function() {
                    return this.challenge
                }, t.prototype.setChallengeResponse = function(t) {
                    this.worker.postMessage({
                        fn: "setChallengeResponse",
                        response: t
                    })
                }, t.prototype.getReadyDfd = function() {
                    return this.readyDfd
                }, t.prototype.getVersion = function() {
                    return this.version
                }, t.prototype.getSupports = function() {
                    return this.supports
                }, t
            }();
        t.exports = l
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(2),
            s = n(1),
            a = o.get(),
            c = 1,
            u = function() {
                function t(t, e) {
                    var n = this;
                    this.el = t, this.msgHandler = null, this.readyDfd = null, this.id = c++;
                    var r = s.newDeferred();
                    this.readyDfd = r.promise, t.innerHTML = '<embed width=0 height=0 src="' + e + '/GciPNacl.nmf" type="application/x-pnacl" />', this.pnaclPlugin = this.el.getElementsByTagName("embed")[0], t.addEventListener("load", function() {
                        a.info("Finished loading NaCL worker #" + n.id), r.resolve(n)
                    }, !0), t.addEventListener("message", function(t) {
                        n.msgHandler && n.msgHandler(t.data)
                    }, !0), t.addEventListener("crash", function(t) {
                        a.error("Pnacl plugin " + n.id + " crashed!", t), r.reject(t)
                    }, !0)
                }
                return t.prototype.setHandler = function(t) {
                    this.msgHandler = t
                }, t.prototype.getReadyDfd = function() {
                    return this.readyDfd
                }, t.prototype.postMessage = function(t) {
                    return r(this, void 0, void 0, function() {
                        return i(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.readyDfd];
                                case 1:
                                    return e.sent(), this.pnaclPlugin.postMessage(t), [2]
                            }
                        })
                    })
                }, t
            }();

        function l(t, e) {
            return new u(t, e)
        }! function(t) {
            t.isSupported = function() {
                return void 0 !== navigator.mimeTypes["application/x-pnacl"] && navigator.mimeTypes["application/x-pnacl"].enabledPlugin && !window.gcNoPnacl
            }
        }(l || (l = {})), t.exports = l
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = n(1),
            s = null,
            a = "gcplugin_worker.js";
        var c = function() {
            function t(t) {
                var e = this;
                this.url = t, this.msgHandler = null, this.workerURLDfd = function(t) {
                    if (s) return s.promise;
                    s = o.newDeferred();
                    var e = new XMLHttpRequest;
                    return e.onreadystatechange = function() {
                        if (4 == e.readyState && 200 == e.status) {
                            var t = new Blob([e.responseText], {
                                type: "text/javascript"
                            });
                            s.resolve(window.URL.createObjectURL(t))
                        }
                    }, e.open("GET", t + a, !0), e.send(), s.promise
                }(this.url), this.readyDfd = this.workerURLDfd.then(function(t) {
                    var n = new Worker(t);
                    return n.postMessage({
                        url: e.url
                    }), n.addEventListener("message", function(t) {
                        e.msgHandler && e.msgHandler(t.data)
                    }), n
                })
            }
            return t.prototype.setHandler = function(t) {
                this.msgHandler = t
            }, t.prototype.getReadyDfd = function() {
                var t = this;
                return this.readyDfd.then(function() {
                    return t
                })
            }, t.prototype.postMessage = function(t) {
                return r(this, void 0, void 0, function() {
                    return i(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.readyDfd];
                            case 1:
                                return e.sent().postMessage(t), [2]
                        }
                    })
                })
            }, t
        }();
        t.exports = function(t) {
            return new c(t)
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search);
            return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
        }
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            var i = document.createElement("canvas");
            i.width = t, i.height = e, r.appendChild(i);
            for (var o = i.getContext("2d"), s = o.createImageData(t, e), a = 0; a < n.length; ++a) {
                var c = 4 * a;
                s.data[c] = n[a], s.data[c + 1] = n[a], s.data[c + 2] = n[a], s.data[c + 3] = 255
            }
            o.putImageData(s, 0, 0), i.style.width = "320px", i.style.height = "240px"
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.importImageBuffer = r, e.importImageGCI = function(t, e) {
            var n = new Uint32Array(2);
            return n.set(t.subarray(0, 7), 0), r(n[0], n[1], t.subarray(8), e)
        }
    }, function(t, e) {
        t.exports = '<img style="visibility: hidden; position: absolute;" />\n<canvas style="width: 1px; height: 1px;"></canvas>\n<video autoplay="true" muted="true" playsinline="true" style="position: absolute; top: 50%; left: 50%; width: 1px; height: 1px; opacity: 0;"></video>\n<div style="visibility: hidden; position: absolute;"></div>\n'
    }, function(t, e) {
        t.exports = '<div style="position: relative; width: 100%; height: 100%; border: none; text-decoration: none; background: #babec1; background: -moz-radial-gradient(center, ellipse cover,  #babec1 0%, #0d2535 100%); background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#babec1), color-stop(100%,#0d2535)); background: -webkit-radial-gradient(center, ellipse cover,  #babec1 0%,#0d2535 100%); background: -ms-radial-gradient(center, ellipse cover,  #babec1 0%,#0d2535 100%); background: radial-gradient(center, ellipse cover,  #babec1 0%,#0d2535 100%); ">\n    <div style="position: absolute; width: 120px; top: 50%; left: 50%; margin: -60px 0 0 -60px; text-align: center;">\n        <a href="<%= url %>" style="display: block; background: transparent url(\'<%= planeURI %>\') center top no-repeat; padding-top: 60px; color: #fff; text-shadow: 0px 0px 2px #555; font-size: 16px; text-decoration: none;">\n        <% if(upgrade) { %>\n            Upgrade the<br/>GradeCam Plugin\n        <% }else{ %>\n            Install the<br/>GradeCam Plugin\n        <% }%>\n        </a>\n<% if (canTryNext) { %>\n    -or-<br/>\n    <a href="javascript:<%= canTryNext %>();" style="color: #fff; text-decoration: none; text-shadow: 0px 0px 2px #555; font-size: 11px;">\n        Continue without\n    </a>\n<% } %>\n    </div>\n</div>\n'
    }, function(t, e) {
        t.exports = '<a href="http://support.gradecam.com/entries/21648913" style="position: relative; display: block; width: 100%; height: 100%; border: none; text-decoration: none; background-color: #babec1; ">\n    <div style="position: absolute; background: transparent url(\'<%= planeURI %>\') center top no-repeat; width: 120px; height: 60px; padding-top: 60px; top: 50%; left: 50%; margin: -60px 0 0 -60px; color: #fff; text-shadow: 0px 0px 2px #555; font-size: 16px; text-align: center;">\n        Please disable ActiveX Filtering.\n    </div>\n</a>\n'
    }, function(t, e) {
        t.exports = '<div style="position: relative; width: 100%; height: 100%; border: none; text-decoration: none; background: #babec1; background: -moz-radial-gradient(center, ellipse cover,  #babec1 0%, #0d2535 100%); background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#babec1), color-stop(100%,#0d2535)); background: -webkit-radial-gradient(center, ellipse cover,  #babec1 0%,#0d2535 100%); background: -ms-radial-gradient(center, ellipse cover,  #babec1 0%,#0d2535 100%); background: radial-gradient(center, ellipse cover,  #babec1 0%,#0d2535 100%); ">\n    <div style="position: absolute; width: 120px; top: 50%; left: 50%; margin: -60px 0 0 -60px; text-align: center;">\n        <a href="<%= url %>" style="display: block; background: transparent url(\'<%= planeURI %>\') center top no-repeat; padding-top: 60px; color: #fff; text-shadow: 0px 0px 2px #555; font-size: 16px; text-decoration: none;">\n            GradeCam is not supported on your system\n        </a>\n    </div>\n</div>\n'
    }, function(t, e, n) {
        "use strict";
        var r = {
            type: String,
            enum: ["exam", "answerkey", "score", "credit", "custom", "tabular"]
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(152);
        t.exports = r.ScanBlocks
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = n(153),
            o = n(154),
            s = function() {
                function t(t) {
                    this.blocks = [], this.clips = [], this.fc_blocks = [];
                    for (var e = 0, n = r.keys(t || {}); e < n.length; e++) {
                        var i = n[e];
                        this[i] = t[i]
                    }
                }
                return t.prototype.getBlock = function(t, e) {
                    return r.find(this.blocks, function(n) {
                        return n.row === t && n.col === e
                    })
                }, t.prototype.print = function() {
                    for (var t = 0, e = this.blocks; t < e.length; t++) {
                        e[t].print()
                    }
                }, t.prototype.hash = function() {
                    return r.reduce(this.blocks, function(t, e) {
                        return t + 100 * e.row + 1e3 * e.col + e.rows + 10 * e.cols
                    }, 0)
                }, t.prototype.hasFormData = function() {
                    return !!this.barcodes || !(!this.fc_blocks || 1 != this.fc_blocks.length)
                }, t.prototype._transformIntensitiesWith = function(t, e) {}, t.prototype._normalizeIntensitiesWith = function(t, e) {
                    this._transformIntensitiesWith(t, function() {
                        return null
                    })
                }, t.prototype.normalizeIntensities = function(t) {
                    this._normalizeIntensitiesWith("intensities", t)
                }, t.loadV2 = function(e) {
                    var n = new t({
                            blocks: [],
                            clips: []
                        }),
                        i = e.slice(),
                        s = 0,
                        a = r.filter(i, function(t) {
                            return "barcode" == t.type
                        }),
                        c = r.filter(i, function(t) {
                            return "barcode" != t.type && "meta" != t.type
                        });
                    2 == a.length && (a = r.sortBy(a, function(t) {
                        return t.top
                    }), n.barcodes = a[0].barcode.barcode + a[1].barcode.barcode);
                    for (var u = function() {
                            var t = r.min(c, function(t) {
                                    return t.top
                                }),
                                e = r.filter(c, function(e) {
                                    return e.top <= t.bottom && e.bottom >= t.top
                                });
                            c = r.difference(c, e);
                            for (var i = 0, u = e = r.sortBy(e, function(t) {
                                    return t.left
                                }); i < u.length; i++) {
                                var p = u[i];
                                if ("rect" == p.type && p.gcip) l.loadRect(n, p.gcip, s);
                                else if ("clip" == p.type && p.image) {
                                    var f = new o.Clip({
                                        image: p.image,
                                        zone: s,
                                        blur: p.clip.blur,
                                        width: o.Clip.calcWidth(p.clip),
                                        height: o.Clip.calcHeight(p.clip),
                                        skew: o.Clip.calcSkew(a, p.clip)
                                    });
                                    if (2 == a.length && (p.top < a[0].top || p.top > a[1].top)) continue;
                                    n.clips.push(f)
                                }
                                s++
                            }
                        }, l = this; c.length > 0;) u();
                    return n
                }, t.load = function(e) {
                    var n = new t({
                        blocks: []
                    });
                    return this.loadRect(n, e, 0), n
                }, t.loadRect = function(t, e, n) {
                    var o = [];
                    if (e.length) {
                        r.each(e, function(t) {
                            o.push(new i.Block(t))
                        });
                        var s = r.max(o, function(t) {
                            return t.top
                        });
                        15 === s.cols && (t.fc_blocks.push(s), o = r.without(o, s));
                        for (var a = 0, c = function() {
                                var e = r.min(o, function(t) {
                                    return t.left
                                });
                                if (e.left > e.right) return o = r.without(o, e), {
                                    value: void 0
                                };
                                var i = (e.right - e.left) / e.cols,
                                    s = e.left,
                                    c = r.select(o, function(t) {
                                        return t.left < s + 2 * i
                                    });
                                o = r.difference(o, c);
                                for (var u = 0, l = 0, p = c = r.sortBy(c, function(t) {
                                        return t.top
                                    }); l < p.length; l++) {
                                    var f = p[l];
                                    f.row = u, f.col = a, f.zone = n, t.blocks.push(f), u++
                                }
                                a++
                            }; o.length > 0;) {
                            var u = c();
                            if ("object" == typeof u) return u.value
                        }
                        return a
                    }
                }, t.Block = i.Block, t.Clip = o.Clip, t
            }();
        e.ScanBlocks = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = function() {
                function t(t) {
                    this.intensities = [], this.intensities_alt1 = [];
                    for (var e = 0, n = r.keys(t || {}); e < n.length; e++) {
                        var i = n[e];
                        this[i] = t[i]
                    }
                }
                return t.prototype._getRowIntensitiesWith = function(t, e) {
                    var n = this.cols * t,
                        r = this[e];
                    return r ? r.slice(n, n + this.cols) : null
                }, t.prototype.getRowIntensities = function(t) {
                    var e = this._getRowIntensitiesWith(t, "intensities"),
                        n = this._getRowIntensitiesWith(t, "intensities_alt1"),
                        r = [];
                    return e && r.push(e), n && r.push(n), r
                }, t.prototype._getColIntensitiesWith = function(t, e) {
                    var n = this[e];
                    if (!n || !n.length) return null;
                    for (var r = n, i = this.rows, o = this.cols, s = [], a = 0; a < i; a++) s.push(r[t + a * o]);
                    return s
                }, t.prototype.getColIntensities = function(t) {
                    var e = this._getColIntensitiesWith(t, "intensities"),
                        n = this._getColIntensitiesWith(t, "intensities_alt1"),
                        r = [];
                    return e && r.push(e), n && r.push(n), r
                }, t.prototype._getNumberIntensitiesWith = function(t) {
                    for (var e = [], n = 0; n < this.cols; n++) {
                        var r = this._getColIntensitiesWith(n, t);
                        if (!r) return null;
                        e.push(r)
                    }
                    return e
                }, t.prototype.getNumberIntensities = function() {
                    var t = [],
                        e = this._getNumberIntensitiesWith("intensities"),
                        n = this._getNumberIntensitiesWith("intensities_alt1");
                    return e && t.push(e), n && t.push(n), t
                }, t.prototype.print = function() {
                    console.dir({
                        row: this.row,
                        col: this.col,
                        rows: this.rows,
                        cols: this.cols
                    })
                }, t
            }();
        e.Block = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = function() {
                function t(t) {
                    for (var e = 0, n = r.keys(t || {}); e < n.length; e++) {
                        var i = n[e];
                        this[i] = t[i]
                    }
                }
                return t.calcWidth = function(t) {
                    var e = t.br.global_y - t.bl.global_y,
                        n = t.br.global_x - t.bl.global_x;
                    return Math.sqrt(e * e + n * n)
                }, t.calcHeight = function(t) {
                    var e = t.tl.global_y - t.bl.global_y,
                        n = t.tl.global_x - t.bl.global_x;
                    return Math.sqrt(e * e + n * n)
                }, t.calcSkew = function(t, e) {
                    if (2 != t.length) return 1;
                    var n = t[0].barcode.l.global_x - t[0].barcode.r.global_x,
                        r = t[0].barcode.l.global_y - t[0].barcode.r.global_y,
                        i = Math.sqrt(n * n + r * r),
                        o = t[1].barcode.l.global_x - t[1].barcode.r.global_x,
                        s = t[1].barcode.l.global_y - t[1].barcode.r.global_y;
                    return i / (Math.sqrt(o * o + s * s) + 1e-7)
                }, t
            }();
        e.Clip = i
    }, function(t, e, n) {
        "use strict";
        var r = n(156);
        t.exports = r.InterpretedScan
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0),
            s = n(157),
            a = n(28),
            c = n(1),
            u = ["GradeCam ID", "Version"];

        function l(t) {
            return t.validate
        }

        function p(t) {
            return t.wantMoreCopies
        }

        function f(t) {
            return r(this, void 0, void 0, function() {
                return i(this, function(e) {
                    return [2, new Promise(function(e, n) {
                        var r = new Image;
                        r.onload = function() {
                            return e(r)
                        }, r.src = t
                    })]
                })
            })
        }
        var h = function() {
            function t(e) {
                void 0 === e && (e = {}), this.items = [], o.defaults(e, t.defaults);
                for (var n = 0, r = o.keys(e); n < r.length; n++) {
                    var i = r[n];
                    this[i] = e[i]
                }
            }
            return t.prototype.getItem = function(t) {
                return o.find(this.items, function(e) {
                    return e.label === t
                })
            }, t.prototype.needsValidation = function() {
                return o.any(this.items, l)
            }, t.prototype.wantsMoreClipCopies = function() {
                return o.any(this.items, p)
            }, t.prototype.getUnvalidatedItems = function() {
                return o.filter(this.items, l)
            }, t.prototype.getAnswerItems = function() {
                return o.filter(this.items, function(t) {
                    return o.indexOf(u, t.label) < 0
                })
            }, t.prototype.getScanOutput = function(e, n) {
                return r(this, void 0, void 0, function() {
                    var s, u, l, p, h, d, A, g, m, y, v, b, w, _, S, x, k, C, I, E, O, M, R, D, B, T, F, V, j, N, P, U, L, G, q, Q;
                    return i(this, function(H) {
                        switch (H.label) {
                            case 0:
                                if (this.needsValidation()) throw new Error("Not all answers were validated!");
                                if (u = 1 + 2 * (s = .15), l = [], p = null, d = this.fc_data, 1 != n) return [3, 9];
                                for (P = [], A = {}, g = 0, m = this.items; g < m.length; g++) switch (G = m[g], q = G.form_area, Q = G.value, q) {
                                    case "ids":
                                        l.push(Q);
                                        break;
                                    case "version":
                                        p = Q;
                                        break;
                                    case "main":
                                        "Score" === G.label && (h = Q), y = {
                                            value: Q,
                                            area: q,
                                            choices: G.choices,
                                            type: G.type
                                        }, G.choicesArr && G.choicesArr.length > 0 && (y.choicesArr = G.choicesArr), P.push(y);
                                        break;
                                    default:
                                        P.push({
                                            value: Q,
                                            type: G.type
                                        })
                                }
                                if (A.scan_type = e, P.length && (A.answers = P), 1 == l.length && (A.gradecam_id = l[0]), l.length && (A.ids = l), h && (A.score = h), p && (A.exam_version = p), !d) return [3, 8];
                                if (2 != d.desc_v || "tabular" != d.type || !d.rows) return [3, 7];
                                A.columns = this.items, delete A.answers, v = [], b = [], w = [], _ = !1, S = document.createElement("canvas"), x = S.getContext("2d"), k = 0, C = A.columns, H.label = 1;
                            case 1:
                                return k < C.length ? (I = C[k], E = document.createElement("canvas"), O = E.getContext("2d"), [4, f(I.value)]) : [3, 4];
                            case 2:
                                M = H.sent(), E.width = M.width, E.height = M.height, O.drawImage(M, 0, 0), v.push(E), R = E.height / u * s, S.width = E.width, S.height = E.height - 2 * R, x.drawImage(M, 0, R, S.width, S.height, 0, 0, S.width, S.height), D = S.toDataURL("image/jpeg"), 2 === (B = D.split(",")).length && (B[0].indexOf("jpeg") >= 0 || B[0].indexOf("jpg") >= 0) ? (b.push({
                                    image: {
                                        b64: B[1]
                                    },
                                    nsplits: d.rowCount - 1
                                }), w.push(S.height)) : _ = !0, H.label = 3;
                            case 3:
                                return k++, [3, 1];
                            case 4:
                                for (A.scan_type = "tabular", A.rows = [], A.rowOffset = d.rowOffset, T = 0; T < d.form_description.length; T++) A.columns[T].label = d.form_description[T].label;
                                return F = function() {
                                    return r(this, void 0, void 0, function() {
                                        var t, e, n, r, o, c, l, p, f, h, A, g, m, y, _;
                                        return i(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    if (2 != d.desc_v) throw new Error("Invalid value");
                                                    return t = [], [4, a.forms2.makeFormsRequest("/split/v1", {
                                                        instances: b
                                                    })];
                                                case 1:
                                                    for (e = i.sent(), n = [], r = function(t) {
                                                            var r = v[t].height / u * s,
                                                                i = v[t].height,
                                                                o = e[t].splits.slice(0, d.rowCount - 1).sort(function(t, e) {
                                                                    return t - e
                                                                });
                                                            (o = o.map(function(e) {
                                                                return e * w[t] + r
                                                            })).unshift(r), o.push(i - r), n.push(o)
                                                        }, o = 0; o < e.length; o++) r(o);
                                                    for (c = 0; c < d.rowCount; c++) {
                                                        for (l = {
                                                                columns: [],
                                                                text: d.rows[d.rowOffset + c].text,
                                                                data: d.rows[d.rowOffset + c].data
                                                            }, p = 0; p < v.length; p++) f = {
                                                            type: "clip"
                                                        }, h = n[p][c + 1] - n[p][c], A = s * h, g = v[p].width, m = h + 2 * A, y = n[p][c], _ = y - A, S.width = g, S.height = m, x.drawImage(v[p], 0, _, g, m, 0, 0, g, m), f.value = S.toDataURL("image/jpeg"), l.columns.push(f);
                                                        t.push(l)
                                                    }
                                                    return [2, t]
                                            }
                                        })
                                    })
                                }, V = function() {
                                    if (2 != d.desc_v) throw new Error("Invalid value");
                                    for (var t = [], e = 0; e < d.rowCount; e++) {
                                        for (var n = {
                                                columns: [],
                                                text: d.rows[d.rowOffset + e].text,
                                                data: d.rows[d.rowOffset + e].data
                                            }, r = 0; r < v.length; r++) {
                                            var i = {
                                                    type: "clip"
                                                },
                                                o = v[r].height / u * s,
                                                a = (v[r].height - 2 * o) / d.rowCount,
                                                c = s * a,
                                                l = d.rowCount,
                                                p = e / l,
                                                f = v[r].height - 2 * o,
                                                h = A.columns[r].skew,
                                                g = 2 * f * h / (h + 1),
                                                m = f - g,
                                                y = g * p + m * p * p,
                                                b = g * (p + 1 / l) + m * (p + 1 / l) * (p + 1 / l),
                                                w = v[r].width,
                                                _ = b - y + 2 * c,
                                                k = o + y - c;
                                            S.width = w, S.height = _, x.drawImage(v[r], 0, k, w, _, 0, 0, w, _), i.value = S.toDataURL("image/jpeg"), n.columns.push(i)
                                        }
                                        t.push(n)
                                    }
                                    return t
                                }, _ ? [3, 6] : (j = A, [4, c.race([F(), c.later(null, t.DeepSplitTimeout)]).catch(function(t) {
                                    return V()
                                })]);
                            case 5:
                                return j.rows = H.sent(), A.rows || (A.rows = V()), [3, 7];
                            case 6:
                                A.rows = V(), H.label = 7;
                            case 7:
                                A.data = {}, o.extend(A.data, d.batch_data), o.extend(A.data, d.instance_data), A.page = d.page, A.pageCount = d.pageCount, A.startOffset = d.startOffset, A.form_id = d.form_id, d.exam_version && (A.exam_version = d.exam_version), H.label = 8;
                            case 8:
                                return [2, A];
                            case 9:
                                for (N = {}, P = [], U = 0, L = this.items; U < L.length; U++) switch (G = L[U], q = G.form_area, Q = G.value, q) {
                                    case "ids":
                                        l.push(Q);
                                        break;
                                    case "version":
                                        p = Q;
                                        break;
                                    case "main":
                                        "Score" === G.label && (h = Q), P.push(Q)
                                }
                                return N.scan_type = e, P.length && (N.answers = P), 1 == l.length && (N.gradecam_id = l[0]), l.length && (N.ids = l), h && (N.score = h), p && (N.exam_version = p), d && (o.extend(N, d.batch_data), o.extend(N, d.instance_data), N.data = {}, o.extend(N.data, d.batch_data), o.extend(N.data, d.instance_data), N.page = d.page, N.pageCount = d.pageCount, N.startOffset = d.startOffset, d.exam_version && (N.exam_version = d.exam_version)), [2, N]
                        }
                    })
                })
            }, t.DeepSplitTimeout = 5e3, t.InterpretedItem = s.InterpretedItem, t.defaults = {
                bad_form: !1,
                bad_form_version: !1
            }, t
        }();
        e.InterpretedScan = h
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = ["type", "form_area", "label", "value", "validate", "choices"],
            o = i.concat(["validate_classifier", "bad_multiplicity", "debug", "marked_sigma", "skew", "P_blank", "P_state"]),
            s = function() {
                function t(e) {
                    void 0 === e && (e = {}), this.choices = [], this.choicesArr = null, r.defaults(e, t.defaults);
                    for (var n = 0, i = r.keys(e); n < i.length; n++) {
                        var o = i[n];
                        this[o] = e[o]
                    }
                }
                return Object.defineProperty(t.prototype, "label", {
                    get: function() {
                        return this._label
                    },
                    set: function(t) {
                        this._label = String(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.toObject = function(t) {
                    void 0 === t && (t = !1);
                    for (var e = {}, n = 0, s = t ? o : i; n < s.length; n++) {
                        var a = s[n];
                        e[a] = r.clone(this[a])
                    }
                    return e
                }, t.defaults = {
                    bad_multiplicity: !1
                }, t
            }();
        e.InterpretedItem = s
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0),
            s = n(159),
            a = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.useLegacyAPI && (e.renderForm = e.renderForm_old, e.testRenderForm = e.testRenderForm_old, e.getStatus = e.getStatus_old, e.fetchFormData = e.fetchFormData_old), e
                }
                return i(e, t), e.prototype.createBlankForm = function(t) {
                    void 0 === t && (t = {});
                    var e = !0;
                    !1 === t.form_code && (e = !1);
                    var n = new s;
                    return n.setFormCode(e), n
                }, e.prototype.createScoreForm = function(t) {
                    void 0 === t && (t = {});
                    var e = t.id_digits,
                        n = t.numeric_digits || 3,
                        r = t.form_code || !1,
                        i = this.createBlankForm();
                    return i.setFormCode(r), i.config("type", "score"), i.addTopRightNumericSection("Score", n), i.addTopRightNumericSection("GradeCam ID", e), i
                }, e.prototype.createCreditForm = function(t) {
                    void 0 === t && (t = {});
                    var e = t.id_digits,
                        n = t.form_code || !1,
                        r = this.createBlankForm();
                    return r.setFormCode(n), r.config("type", "score"), r.addTopRightNumericSection("GradeCam ID", e), r
                }, e.prototype.createExamForm = function(t) {
                    void 0 === t && (t = {});
                    var e = t.questions || 10,
                        n = t.id_digits,
                        r = t.form_code || !1;
                    t = t || {};
                    var i = this.createBlankForm();
                    i.setFormCode(r);
                    var s = n ? i.addTopRightNumericSection("GradeCam ID", n) : null,
                        a = i.addMultipleChoiceSection(e);
                    return t.choices && a.setChoices(t.choices), t.altChoices && a.setAltChoices(t.choices), i.override = o.bind(a.override, a), i.setCount = o.bind(a.setCount, a), i.setChoices = o.bind(a.setChoices, a), i.setAltChoices = o.bind(a.setAltChoices, a), i.setLabel = o.bind(a.setLabel, a), i.setStartNumber = o.bind(a.setStartNumber, a), i.setCompact = o.bind(a.setCompact, a), i.setIDDigits = n ? o.bind(s.setDigits, s) : null, i
                }, e.prototype.renderForm = function(t, e, n) {
                    var r = {
                        formSpec: t,
                        instances: t.getInstances()
                    };
                    t.getFormData() && (r.formData = t.getFormData());
                    var i = this.makeFormsRequest("/form/render", r).then(function(t) {
                        var e = t.id,
                            n = {
                                id: e,
                                html: t.host + "/form/" + e + ".html",
                                pdf: t.host + "/form/" + e + ".pdf",
                                pdfPreview: t.host + "/formpdf/" + e + ".preview.pdf",
                                pdfDirect: t.host + "/formpdf/" + e + ".pdf",
                                instanceCount: t.count,
                                pageCount: t.pageCount
                            };
                        return 1 != t.count || "pageCount" in t && 1 != t.pageCount || (n.png = t.host + "/form/" + e + ".png", n.pngDirect = t.host + "/formpdf/" + e + ".png"), n
                    });
                    return e && i.then(e), n && i.catch(n), i
                }, e.prototype.renderForm_old = function(t, e, n) {
                    var r = {
                        formSpec: t,
                        instances: t.getInstances()
                    };
                    return t.getFormData() && (r.formData = t.getFormData()), this.sendMessage("render", r, e, n)
                }, e.prototype.testRenderForm = function(t, e, n) {
                    var r = {
                        formSpec: t,
                        instances: t.getInstances()
                    };
                    t.getFormData() && (r.formData = t.getFormData());
                    var i = this.makeFormsRequest("/form/testRender", r).then(function(t) {
                        return t = !(!t || !t.status || "OK" != t.status)
                    });
                    return e && i.then(e), n && i.catch(n), i
                }, e.prototype.testRenderForm_old = function(t, e, n) {
                    var r = {
                        formSpec: t,
                        instances: t.getInstances()
                    };
                    return t.getFormData() && (r.formData = t.getFormData()), this.sendMessage("renderTest", r, e, n)
                }, e.prototype.getStatus = function(t, e, n, r) {
                    var i = "/batch/" + t + "/status/" + e;
                    return this.makeFormsRequest(i, !1, n, r)
                }, e.prototype.getStatus_old = function(t, e, n, r) {
                    return this.sendMessage("status", {
                        batch: t,
                        type: e
                    }, n, r)
                }, e.prototype.fetchFormData = function(t, e, n) {
                    return this.makeFormsRequest("/formv2/data/", t, e, n)
                }, e.prototype.fetchFormData_old = function(t, e, n) {
                    return this.sendMessage("fetchv2", {
                        form_id_list: t
                    }, e, n)
                }, e
            }(n(51));
        e.Form1Manager = a
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = n(0),
            s = n(50),
            a = ["choices", "label"],
            c = function() {
                function t(e) {
                    void 0 === e && (e = {}), this.opts = e, s(this.opts, t._defaults)
                }
                return t.prototype.toJSON = function() {
                    return this.opts
                }, t._defaults = {}, t
            }(),
            u = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return s(r.opts, e._defaults), r
                }
                return i(e, t), e.prototype.setChoices = function(t) {
                    return this.opts.choices = t.toUpperCase(), this
                }, e.prototype.setLabel = function(t) {
                    this.opts.section_label = t
                }, e._defaults = {
                    choices: "12345"
                }, e
            }(c),
            l = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return s(r.opts, e._defaults), r
                }
                return i(e, t), e.prototype.setCount = function(t) {
                    return this.opts.count = t, this
                }, e.prototype.setChoices = function(t) {
                    return this.opts.choices = t.toUpperCase(), this
                }, e.prototype.setAltChoices = function(t) {
                    return this.opts.choices_alt = t.toUpperCase(), this
                }, e.prototype.setCompact = function(t) {
                    void 0 === t && (t = !0), !1 !== t && (this.opts.compact = !0)
                }, e.prototype.setLabel = function(t) {
                    return this.opts.section_label = t, this
                }, e.prototype.override = function(t, e, n) {
                    this.opts.question_opts || (this.opts.question_opts = {});
                    var r = String(t);
                    if (this.opts.question_opts[r] || (this.opts.question_opts[r] = {}), -1 == o.indexOf(a, e)) throw new Error("Invalid field type for overriding.  Supported fields are: " + a.join(", "));
                    return this.opts.question_opts[r][e] = n, this
                }, e.prototype.setStartNumber = function(t) {
                    return this.opts.start_num = t, this
                }, e._defaults = {
                    choices: "ABCDE",
                    question_opts: null
                }, e
            }(c),
            p = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return s(r.opts, e._defaults), r
                }
                return i(e, t), e.prototype.setCount = function(t) {
                    return this.opts.count = t, this
                }, e.prototype.setLabel = function(t) {
                    return this.opts.section_label = t, this
                }, e.prototype.setWidth = function(t) {
                    return this.opts.width = t, this
                }, e.prototype.setChoices = function(t) {
                    return this.opts.choices = t.toUpperCase(), this
                }, e.prototype.override = function(t, e, n) {
                    this.opts.question_opts || (this.opts.question_opts = {});
                    var r = String(t);
                    if (this.opts.question_opts[r] || (this.opts.question_opts[r] = {}), -1 == o.indexOf(a, e)) throw new Error("Invalid field type for overriding.  Supported fields are: " + a.join(", "));
                    return this.opts.question_opts[r][e] = n, this
                }, e.prototype.setStartNumber = function(t) {
                    return this.opts.start_num = t, this
                }, e._defaults = {
                    type: "shortanswer",
                    question_opts: null,
                    choices: "CI"
                }, e
            }(c),
            f = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return s(r.opts, e._defaults), r
                }
                return i(e, t), e.prototype.setChoices = function(t) {
                    return this.opts.choices = t, this
                }, e.prototype.setLabel = function(t) {
                    return this.opts.label = t, this
                }, e.prototype.setDigits = function(t) {
                    return this.opts.digits = t, this
                }, e._defaults = {
                    choices: "0123456789",
                    digits: 3,
                    label: "",
                    type: "numeric"
                }, e
            }(c),
            h = function() {
                function t(e) {
                    void 0 === e && (e = {}), this.instances = [], this.data = null, this.formSpec = e, s(this.formSpec, t._defaults)
                }
                return t.prototype.getInstances = function() {
                    return this.instances
                }, t.prototype.toJSON = function() {
                    return this.formSpec
                }, t.prototype.setFormCode = function(t) {
                    void 0 === t && (t = !0), this.formSpec.formCode = t
                }, t.prototype.addVersionSection = function(t, e) {
                    var n = new u;
                    return t && n.setChoices(t), e && n.setLabel(e), this.formSpec.version = n, n
                }, t.prototype.addMultipleChoiceSection = function(t, e, n) {
                    var r = {},
                        i = null;
                    o.isObject(t) ? (r = t, e = n = null) : i = t;
                    var s = new l(r);
                    return i && s.setCount(i), e && s.setChoices(e), n && s.setAltChoices(n), this.formSpec.sections.push(s), s
                }, t.prototype.addShortAnswerSection = function(t, e) {
                    var n = {},
                        r = null;
                    o.isObject(t) ? n = r : r = t;
                    var i = new p(n);
                    return r && i.setCount(r), e && i.setWidth(e), this.formSpec.sections.push(i), i
                }, t.prototype._createNumericSection = function(t, e) {
                    return o.isObject(t) ? new f(t) : new f({
                        label: t,
                        digits: e
                    })
                }, t.prototype.addTopRightNumericSection = function(t, e) {
                    var n = this._createNumericSection(t, e);
                    return this.formSpec.sections_topright.push(n), n
                }, t.prototype.addNumericSection = function(t, e) {
                    var n = this._createNumericSection(t, e);
                    return this.formSpec.sections.push(n), n
                }, t.prototype.setFormData = function(t) {
                    this.data = t
                }, t.prototype.getFormData = function() {
                    return this.data
                }, t.prototype.addInstance = function(t) {
                    if (!t) throw new Error("addInstance expects an object with one or more of: data, ids, top, bottom");
                    var e = {
                        data: t.data,
                        ids: t.ids
                    };
                    t.top && (e.top = t.top), t.bottom && (e.bottom = t.bottom), t.exam_version && (e.exam_version = t.exam_version), this.instances.push(e)
                }, t.prototype.config = function(t, e) {
                    this.formSpec.config[t] = e
                }, t.prototype.setZoom = function(t) {
                    if (t > 2 || t < .25) throw new Error("Zoom level should be a value between 0.25 and 2.0 where 1.0 is normal size");
                    this.config("zoom", t)
                }, t._defaults = {
                    sections_topright: [],
                    sections: [],
                    formCode: null,
                    config: {
                        zoom: 1
                    }
                }, t
            }();
        ! function(t) {
            ! function(t) {
                t.MultipleChoice = l, t.Numeric = f, t.ShortAnswer = p
            }(t.Sections || (t.Sections = {}))
        }(h || (h = {})), t.exports = h
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e = "https://forms.gradecam.com";
            return "local" === t ? e = "http://localhost:3010" : "asia" == t ? e = "https://gc-forms.menco.cn" : t && "http" == t.substr(0, 4) ? e = t : t && "dev" == t && (e = "https://forms-dev.gradecam.com"), {
                formServerDomain: e,
                formServerComm: e + "/comm"
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(51),
            s = n(162),
            a = n(1),
            c = "/form/render2",
            u = "form2/testRender",
            l = "/form/data2/",
            p = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.createBlankForm = function(t) {
                    t || (t = {});
                    var e = !0;
                    !1 === t.form_code && (e = !1);
                    var n = new s;
                    return n.setFormCode(e), n
                }, e.prototype.renderForm = function(t, e, n) {
                    var r = {
                        formSpec: t,
                        instances: t.getInstances()
                    };
                    t.getFormData() && (r.formData = t.getFormData());
                    var i = this.makeFormsRequest(c, r).then(function(t) {
                        var e = t.id,
                            n = {
                                id: e,
                                pdf: t.host + "/form2/" + e + ".pdf",
                                pdfDirect: t.host + "/form2/" + e + ".pdf",
                                pdfPreview: t.host + "/form2/" + e + ".preview.pdf",
                                pageCount: t.pageCount,
                                instanceCount: t.instanceCount
                            };
                        return 1 == t.pageCount && t.instanceCount < 2 && (n.png = t.host + "/form2/" + e + ".png"), n
                    });
                    return e && i.then(e), n && i.then(void 0, n), i
                }, e.prototype.testRenderForm = function(t, e, n) {
                    var r = {
                        formSpec: t,
                        instances: t.getInstances()
                    };
                    t.getFormData() && (r.formData = t.getFormData());
                    var i = this.makeFormsRequest(u, r).then(function(t) {
                        return t = !(!t || !t.status || "OK" != t.status)
                    });
                    return e && i.then(e), n && i.catch(n), i
                }, e.prototype.getStatus = function(t, e, n, r) {
                    var i = a.newDeferred();
                    return i.resolve({
                        state: "complete",
                        status_string: ""
                    }), i.promise.then(n), i.promise
                }, e.prototype.fetchFormData = function(t, e, n) {
                    return this.makeFormsRequest(l, t, e, n)
                }, e
            }(o);
        e.Form2Manager = p
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = n(0),
            s = n(50),
            a = ["choices", "label"],
            c = function() {
                function t(e) {
                    void 0 === e && (e = {}), this.opts = e, s(this.opts, t._defaults)
                }
                return t.prototype.toJSON = function() {
                    return this.opts
                }, t._defaults = {}, t
            }(),
            u = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return s(r.opts, e._defaults), r
                }
                return i(e, t), e.prototype.setChoices = function(t) {
                    return this.opts.choices = t.toUpperCase(), this
                }, e.prototype.setLabel = function(t) {
                    this.opts.section_label = t
                }, e._defaults = {
                    choices: "12345"
                }, e
            }(c),
            l = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return s(r.opts, e._defaults), r
                }
                return i(e, t), e.prototype.setCount = function(t) {
                    return this.opts.count = t, this
                }, e.prototype.setChoices = function(t) {
                    return this.opts.choices = t.toUpperCase(), this
                }, e.prototype.setAltChoices = function(t) {
                    return this.opts.choices_alt = t.toUpperCase(), this
                }, e.prototype.setCompact = function(t) {
                    void 0 === t && (t = !0), !1 !== t && (this.opts.compact = !0)
                }, e.prototype.setLabel = function(t) {
                    return this.opts.section_label = t, this
                }, e.prototype.override = function(t, e, n) {
                    this.opts.question_opts || (this.opts.question_opts = {});
                    var r = String(t);
                    if (this.opts.question_opts[r] || (this.opts.question_opts[r] = {}), -1 == o.indexOf(a, e)) throw new Error("Invalid field type for overriding.  Supported fields are: " + a.join(", "));
                    return this.opts.question_opts[r][e] = n, this
                }, e.prototype.setStartNumber = function(t) {
                    return this.opts.start_num = t, this
                }, e._defaults = {
                    choices: "ABCDE",
                    question_opts: null
                }, e
            }(c),
            p = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return s(r.opts, e._defaults), r
                }
                return i(e, t), e.prototype.setChoices = function(t) {
                    return this.opts.choices = t, this
                }, e.prototype.setLabel = function(t) {
                    return this.opts.label = t, this
                }, e.prototype.setDigits = function(t) {
                    return this.opts.digits = t, this
                }, e._defaults = {
                    choices: "0123456789",
                    digits: 3,
                    label: "",
                    type: "numeric"
                }, e
            }(c),
            f = function() {
                function t(e) {
                    void 0 === e && (e = {}), this.zoneSpec = {}, this.zoneSpec = e, s(this.zoneSpec, t._defaults)
                }
                return t.prototype.toJSON = function() {
                    return this.zoneSpec
                }, t._defaults = {}, t
            }(),
            h = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return s(r.zoneSpec, e._defaults), r
                }
                return i(e, t), e.prototype.setVersionSection = function(t, e) {
                    var n = new u;
                    return t && n.setChoices(t), e && n.setLabel(e), this.zoneSpec.version = n, n
                }, e.prototype.addMultipleChoiceSection = function(t, e, n) {
                    var r = {},
                        i = null;
                    o.isObject(t) ? (r = t, e = n = null) : i = t;
                    var s = new l(r);
                    return i && s.setCount(i), e && s.setChoices(e), n && s.setAltChoices(n), this.zoneSpec.sections.push(s), s
                }, e.prototype._createNumericSection = function(t, e) {
                    var n;
                    o.isObject(t) ? n = new p(t) : n = new p({
                        label: t,
                        digits: e
                    });
                    return n
                }, e.prototype.addTopRightNumericSection = function(t, e) {
                    var n = "string" == typeof t ? this._createNumericSection(t, e) : this._createNumericSection(t);
                    return this.zoneSpec.sections_topright.push(n), n
                }, e.prototype.addNumericSection = function(t, e) {
                    var n = "string" == typeof t ? this._createNumericSection(t, e) : this._createNumericSection(t);
                    return this.zoneSpec.sections.push(n), n
                }, e._defaults = {
                    type: "rect",
                    sections_topright: [],
                    sections: []
                }, e
            }(f),
            d = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return s(r.zoneSpec, e._defaults), r
                }
                return i(e, t), e._defaults = {
                    type: "clip"
                }, e
            }(f),
            A = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return s(r.zoneSpec, e._defaults), r
                }
                return i(e, t), e._defaults = {
                    type: "text"
                }, e
            }(f),
            g = function() {
                function t(e) {
                    void 0 === e && (e = {}), this.instances = [], this.data = null, this.formSpec = e, s(this.formSpec, t._defaults)
                }
                return t.prototype.getInstances = function() {
                    return this.instances
                }, t.prototype.toJSON = function() {
                    return this.formSpec
                }, t.prototype.setFormCode = function(t) {
                    this.formSpec.formCode = t
                }, t.prototype.addRectZone = function(t) {
                    void 0 === t && (t = {});
                    var e = new h(t = t || {});
                    return this.formSpec.zones.push(e), e
                }, t.prototype.addTextZone = function(t) {
                    void 0 === t && (t = {});
                    var e = new A(t = t || {});
                    return this.formSpec.zones.push(e), e
                }, t.prototype.addClip = function(t) {
                    void 0 === t && (t = {});
                    var e = new d(t = t || {});
                    return this.formSpec.zones.push(e), e
                }, t.prototype.addColumns = function(t) {
                    var e;
                    this.formSpec.columns || (this.formSpec.columns = []), Array.isArray(t) || (t = [t]), (e = this.formSpec.columns).push.apply(e, t)
                }, t.prototype._getTopRightZone = function() {
                    var t = this.formSpec.topRightZone;
                    return t || (t = this.formSpec.topRightZone = new h({
                        type: "topRight"
                    })), t
                }, t.prototype._getVersionZone = function() {
                    var t = this.formSpec.versionZone;
                    return t || (t = this.formSpec.versionZone = new h({
                        type: "version"
                    })), t
                }, t.prototype.setVersionSection = function(t, e) {
                    return this._getVersionZone().setVersionSection(t, e)
                }, t.prototype.addTopRightNumericSection = function(t, e) {
                    return this._getTopRightZone().addTopRightNumericSection(t, e)
                }, t.prototype.setFormData = function(t) {
                    this.data = t
                }, t.prototype.getFormData = function() {
                    return this.data
                }, t.prototype.addInstance = function(t) {
                    if (!t) throw new Error("addInstance expects an object with one or more of: data, ids, top, bottom");
                    var e = {
                        data: t.data,
                        ids: t.ids,
                        header: t.header,
                        footer: t.footer
                    };
                    t.top && (e.top = t.top), t.bottom && (e.bottom = t.bottom), t.exam_version && (e.exam_version = t.exam_version), t.rows && (e.rows = t.rows), this.instances.push(e)
                }, t.prototype.config = function(t, e) {
                    this.formSpec.config[t] = e
                }, t.prototype.setZoom = function(t) {
                    if (t > 2 || t < .25) throw new Error("Zoom level should be a value between 0.25 and 2.0 where 1.0 is normal size");
                    this.config("zoom", t)
                }, t._defaults = {
                    zones: [],
                    formCode: null,
                    config: {
                        zoom: 1
                    }
                }, t
            }();
        t.exports = g
    }, function(t, e, n) {
        "use strict";
        var r = n(52);
        t.exports = r.StructuredScan
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0),
            s = n(11),
            a = n(12),
            c = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return r.choices = r.choices || [], r.choicesArr = r.choicesArr || null, o.defaults(r, e.defaults, a.NumberItemDescription.defaults), r
                }
                return i(e, t), Object.defineProperty(e.prototype, "label", {
                    get: function() {
                        return this._label
                    },
                    set: function(t) {
                        this._label = String(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getIntensities = function(t) {
                    return this.intensities[t || 0]
                }, e.prototype.getIntensityList = function(t) {
                    for (var e = [], n = 0, r = this.getIntensities(t); n < r.length; n++) {
                        var i = r[n];
                        e = e.concat(i)
                    }
                    return e
                }, e.prototype.getIntensityMethods = function() {
                    return o.range(this.intensities.length)
                }, e.defaults = {}, e
            }(s.Item);
        e.NumberItem = c
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = n(166),
            o = n(167),
            s = n(29),
            a = n(168),
            c = n(169),
            u = n(170),
            l = n(13),
            p = function() {
                function t(e) {
                    void 0 === e && (e = {}), this.blocks = [], this.clips = [], r.defaults(e, t.defaults);
                    var n = e.blocks,
                        i = e.clips;
                    delete e.blocks, delete e.clips;
                    for (var o = 0, s = r.keys(e); o < s.length; o++) {
                        var a = s[o];
                        this[a] = e[a]
                    }
                    for (var c = 0, u = n || []; c < u.length; c++) {
                        var l = u[c];
                        this.blocks.push(t.loadBlock(l))
                    }
                    for (var p = 0, f = i || []; p < f.length; p++) {
                        var h = f[p];
                        this.clips.push(t.loadClip(h))
                    }
                }
                return t.prototype.toObject = function() {
                    return JSON.parse(JSON.stringify(this))
                }, t.loadBlock = function(t) {
                    switch (t.type) {
                        case "number":
                            return new o.NumberBlockDescription(t);
                        case "questions":
                            return new i.QuestionBlockDescription(t);
                        default:
                            return null
                    }
                }, t.loadClip = function(e) {
                    return new t.ClipItemDescription(e)
                }, t.defaults = {
                    has_formcode: !1
                }, t.QuestionBlockDescription = i.QuestionBlockDescription, t.NumberBlockDescription = o.NumberBlockDescription, t.BlockDescription = s.BlockDescription, t.ClipItemDescription = a.ClipItemDescription, t.NumberItemDescription = c.NumberItemDescription, t.QuestionItemDescription = u.QuestionItemDescription, t.ItemDescription = l.ItemDescription, t
            }();
        e.FormDescription = p
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.questions = n.questions || [], n
            }
            return i(e, t), e
        }(n(29).BlockDescription);
        e.QuestionBlockDescription = o
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function(t) {
            function e(e) {
                void 0 === e && (e = {});
                var n = t.call(this, e) || this;
                return n.choices = n.choices || [], n
            }
            return i(e, t), Object.defineProperty(e.prototype, "label", {
                get: function() {
                    return this._label
                },
                set: function(t) {
                    this._label = String(t)
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(n(29).BlockDescription);
        e.NumberBlockDescription = o
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function(t) {
            function e(e) {
                return void 0 === e && (e = {}), t.call(this, e) || this
            }
            return i(e, t), e
        }(n(13).ItemDescription);
        e.ClipItemDescription = o
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e
        }(n(13).ItemDescription);
        e.NumberItemDescription = o
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0),
            s = function(t) {
                function e(n) {
                    return n = n || {}, o.defaults(n, e.defaults), t.call(this, n) || this
                }
                return i(e, t), e.prototype.getMultiplicityMin = function(t) {
                    var e = this.multiplicity_min;
                    return "object" == typeof e ? "" === t ? o.max(e) === o.min(e) ? o.max(e) : null : e[t || 0] || 1 : e || 1
                }, e.prototype.getMultiplicityMax = function(t) {
                    var e = this.multiplicity_max;
                    return "object" == typeof e ? "" === t ? o.max(e) === o.min(e) ? o.max(e) : null : e[t || 0] || 1 : e || 1
                }, e.defaults = {
                    multiplicity_max: 1,
                    multiplicity_min: 1
                }, e
            }(n(13).ItemDescription);
        e.QuestionItemDescription = s
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0),
            s = n(52),
            a = n(11),
            c = n(12),
            u = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return r.choices = r.choices || [], r.getMultiplicityMin = c.QuestionItemDescription.prototype.getMultiplicityMin, r.getMultiplicityMax = c.QuestionItemDescription.prototype.getMultiplicityMax, o.defaults(r, e.defaults, c.QuestionItemDescription.defaults), r
                }
                return i(e, t), Object.defineProperty(e.prototype, "label", {
                    get: function() {
                        return this._label
                    },
                    set: function(t) {
                        this._label = String(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getIntensities = function(t) {
                    return this.intensities[t || 0]
                }, e.prototype.getIntensityList = function(t) {
                    return this.getIntensities(t)
                }, e.prototype.getIntensityMethods = function() {
                    return o.range(this.intensities.length)
                }, e.prototype.getDarkestBubble = function() {
                    var t = s.getMaxIndex(this.intensities[0]);
                    return this.choices[t]
                }, e.defaults = {}, e
            }(a.Item);
        e.QuestionItem = u
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0),
            s = n(11),
            a = n(12),
            c = function(t) {
                function e(n) {
                    void 0 === n && (n = {});
                    var r = t.call(this, n) || this;
                    return r.choices = r.choices || [], o.defaults(r, e.defaults, a.ClipItemDescription.defaults), r
                }
                return i(e, t), Object.defineProperty(e.prototype, "label", {
                    get: function() {
                        return this._label
                    },
                    set: function(t) {
                        this._label = String(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.defaults = {}, e
            }(s.Item);
        e.ClipItem = c
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            a = n(3),
            c = n(0),
            u = n(4),
            l = n(2),
            p = n(53),
            f = n(47),
            h = n(177),
            d = n(180),
            A = n(184),
            g = n(187),
            m = n(31),
            y = n(1),
            v = 7,
            b = 10,
            w = 3,
            _ = 5,
            S = 15,
            x = {},
            k = 0,
            C = l.get();

        function I(t, e, n, r) {
            var i = x[t._pid],
                o = i.structQ,
                s = e.hash();
            if (o.push(s), o.length > n && o.shift(), s == i.lockedStruct) return !0;
            if (o.length < r) return !1;
            return c.reduce(i.structQ, function(t, e) {
                return e == s ? t + 1 : t
            }, 0) >= r && (i.lockedStruct = s, !0)
        }

        function E(t) {
            return ((new Date).getTime() - x[t._pid].timer) / 1e3
        }

        function O(t, e, n, r) {
            n.resolve(e), r.returnScan || t.trigger("scan", e), x[t._pid].fired = !0
        }
        f.hasGCMobile() && (S = 10);
        var M = function(t) {
            function e() {
                var e = t.call(this) || this;
                e._pid = k++;
                var n = e._pid;
                return x[n] = {
                    mode: new u.FormMode,
                    lockedStruct: null,
                    structQ: [],
                    scanQ: [],
                    config: null,
                    paused: !1,
                    lastFormCodeFormId: null,
                    fired: !1,
                    validate: null,
                    merger: new A,
                    interpreter: new d(h),
                    mult_error_thresh_e: .01,
                    mult_error_thresh_ne: .001,
                    choice_error_thresh: 1e-5,
                    sigma_thresh: 3,
                    sqReq: v,
                    sqMax: b,
                    vTime: w,
                    cTime: _,
                    vScans: S
                }, e
            }
            return i(e, t), e.prototype.enableHighRes = function() {
                this.trigger("enableHighRes", 15e3)
            }, e.prototype.setSpeedHandicap = function(t) {
                var e = x[this._pid];
                e.sqReq = Math.floor(v * t), e.sqMax = Math.floor(b * t), e.vScans = Math.floor(S * t)
            }, e.prototype.isPaused = function() {
                return x[this._pid].paused
            }, e.prototype.pause = function() {
                x[this._pid].paused = !0, this.trigger("pause")
            }, e.prototype.unpause = function() {
                x[this._pid].paused = !1, this.trigger("unpause")
            }, e.prototype.validateScan = function(t) {
                var e = {},
                    n = x[this._pid],
                    r = c.map(t.getUnvalidatedItems(), function(t, r) {
                        var i = t.toObject(n.validateDebug);
                        return e[r] = t, i
                    }),
                    i = t.getItem("GradeCam ID"),
                    o = "";
                return i && !i.validate && (o = i.value), n.validate({
                    items: r,
                    bad_form: t.bad_form,
                    bad_form_version: t.bad_form_version,
                    gradecam_id: o,
                    mode: n.mode.toJSON(),
                    formcode_data: t.fc_data
                }).then(function(n) {
                    if (!n) throw new Error("Form was not validated");
                    return c.each(n, function(t, n) {
                        var r = e[n];
                        r.value = t.value, r.validate = t.validate
                    }), t
                })
            }, e.prototype.fireFormCodeEvent = function(t, e) {
                return o(this, void 0, void 0, function() {
                    var n, r;
                    return s(this, function(i) {
                        switch (i.label) {
                            case 0:
                                n = x[this._pid], i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, m(t)];
                            case 2:
                                return (r = i.sent()) && r.form_id != n.lastFormCodeFormId && (this.trigger("formcode", r), n.lastFormCodeFormId = r.form_id), 2 == r.desc_v && c.some(r.form_description, function(t) {
                                    return "clip" === t.type
                                }) && (C.info("Form description contains clips, triggering highRes"), this.enableHighRes(), e && e.higher_avail) ? [2, !1] : [3, 4];
                            case 3:
                                return i.sent(), [2, !1];
                            case 4:
                                return [2, !0]
                        }
                    })
                })
            }, e.prototype.processScan = function(t, e) {
                return o(this, void 0, void 0, function() {
                    var n, r, i, o, a, l, f, d, A, g, m, v, b, w = this;
                    return s(this, function(s) {
                        switch (s.label) {
                            case 0:
                                if (e = e || {}, n = y.newDeferred(), r = x[this._pid], e.returnScan && this.reset(), !r.config) return this.trigger("processScanResult", "config"), n.reject(new Error("Not configured")), [2, n.promise];
                                s.label = 1;
                            case 1:
                                return s.trys.push([1, 5, , 6]), r.formDesc ? [4, r.formDesc] : [3, 3];
                            case 2:
                                return l = s.sent(), [3, 4];
                            case 3:
                                l = null, s.label = 4;
                            case 4:
                                return a = l, [3, 6];
                            case 5:
                                return s.sent(), a = r.formDesc = null, [3, 6];
                            case 6:
                                if (a && a.oneTimeDescription && (r.formDesc = null, a = null), o = r.scanQ, c.defaults(e, {
                                        scansRequired: r.sqReq,
                                        scansMax: r.sqMax,
                                        scansToValidate: r.vScans
                                    }), this.isPaused()) return e.successObj && e.successObj.reject(), n.reject(new Error("Tried to process scan while paused")), this.trigger("processScanResult", "paused"), [2, n.promise];
                                if (f = null, t && t.length && t[0].type) {
                                    if ("meta" == (t = t)[0].type && (f = t.shift()), d = f && f.higher_avail, (i = u.ScanBlocks.loadV2(t)).clips.length && d) return this.trigger("processScanResult", "needHighRes"), C.info("Scan output contains clips, triggering highRes"), this.enableHighRes(), n.reject(new Error("Need high res image")), [2, n.promise]
                                } else i = u.ScanBlocks.load(t);
                                if (i.normalizeIntensities(h), A = i.hasFormData()) x[this._pid].formCodeTimer = (new Date).getTime(), this.fireFormCodeEvent(i, f);
                                else if (e.scansRequired > 1 && function(t) {
                                        return ((new Date).getTime() - x[t._pid].formCodeTimer) / 1e3
                                    }(this) < 15) return e.successObj && e.successObj.reject(), this.trigger("processScanResult", "paused"), n.reject(new Error("Scaning is paused")), [2, n.promise];
                                if (r.formDesc) return [3, 10];
                                if (!A && !I(this, i, e.scansMax, e.scansRequired)) return e.successObj && e.successObj.reject(), n.reject(new Error("Could not verify form structure")), this.trigger("processScanResult", "structure"), [2, n.promise];
                                if (r.formDesc = r.config.getFormDescription(i), !r.formDesc || !r.formDesc.then) return [3, 10];
                                s.label = 7;
                            case 7:
                                return s.trys.push([7, 9, , 10]), [4, r.formDesc];
                            case 8:
                                return a = s.sent(), [3, 10];
                            case 9:
                                return s.sent(), a = null, [3, 10];
                            case 10:
                                r.lastFormDesc = a, g = p.structure(r.formDesc, i), this.pause(), s.label = 11;
                            case 11:
                                return s.trys.push([11, 13, , 14]), [4, g];
                            case 12:
                                return m = s.sent(), r.scanQ.length && o[0].hasFormIdentifier() && o[0].getFormIdentifier() == m.getFormIdentifier() || (r.scanQ = o = [], function(t) {
                                    x[t._pid].timer = (new Date).getTime()
                                }(this), r.fired = !1), r.fired ? (this.unpause(), e.successObj && e.successObj.resolve(), n.reject(new Error("Duplicate form")), this.trigger("processScanResult", "alreadyProcessed"), [2, n.promise]) : (o.push(m), (v = r.merger.interpretScans(a, r.scanQ, r.interpreter)) ? (v.wantsMoreClipCopies() && E(this) < r.cTime && e.scansRequired > 1 ? (this.trigger("processScanResult", "wantMoreCopies"), C.info("Scan output contains clips, more copies of the clips requested"), this.unpause(), n.reject(new Error("Needs more clip copies"))) : !v.needsValidation() || e.dontValidate ? (this.trigger("processScanResult", "success"), O(this, v, n, e), e.successObj && e.successObj.resolve(), o.length && !o[0].hasFormIdentifier() && (r.scanQ = []), this.unpause()) : E(this) >= r.vTime || o.length >= e.scansToValidate || o.length && !r.scanQ[0].hasFormIdentifier() ? (this.trigger("processScanResult", "validating"), this.validateScan(v).then(function(t) {
                                    e.successObj && e.successObj.resolve(), o.length && !o[0].hasFormIdentifier() && (r.scanQ = []), O(w, t, n, e)
                                }, function() {
                                    e.successObj && e.successObj.reject(), n.reject(new Error("Could not validate form")), r.scanQ = [], r.fired = !1
                                }).then(function() {
                                    return w.unpause()
                                }, function() {
                                    return w.unpause()
                                })) : (c.defer(function() {
                                    w.trigger("processScanResult", "moreScans", w)
                                }), this.unpause(), n.reject(new Error("Needs more scans"))), [3, 14]) : (this.reset(), c.defer(function() {
                                    w.trigger("processScanResult", "moreScans", w)
                                }), this.unpause(), n.reject(new Error("Need more scans")), [2, n.promise]));
                            case 13:
                                return b = s.sent(), this.unpause(), b && b.domain ? c.defer(function() {
                                    w.trigger("processScanResult", "networkError", {
                                        domain: b.domain,
                                        error: b
                                    })
                                }) : a ? this.trigger("processScanResult", "structure") : c.defer(function() {
                                    "examLength" == r.config.lastFailure ? w.trigger("processScanResult", "examLength") : w.trigger("processScanResult", "structure")
                                }), I(this, i, e.scansMax, e.scansRequired) && (r.formDesc = null), e.successObj && e.successObj.reject(), n.reject(new Error("Could not scan form")), [3, 14];
                            case 14:
                                return [2, n.promise]
                        }
                    })
                })
            }, e.prototype.reset = function() {
                var t = x[this._pid];
                t.scanQ = [], t.formDesc = null, t.fired = !1, t.lastFormCodeFormId = null
            }, e.prototype.setMode = function(t) {
                var e = x[this._pid];
                this.reset(), e.mode = t, e.config = g.createFromMode(t), e.interpreter.setMode(t)
            }, e.prototype.getLastFormDescription = function() {
                var t = x[this._pid];
                return t.lastFormDesc ? t.lastFormDesc.toObject() : null
            }, e.prototype.setLockThreshold = function(t, e) {
                var n = x[this._pid];
                n.sqReq = t, n.sqMax = e
            }, e.prototype.setValidateTime = function(t) {
                x[this._pid].vTime = t
            }, e.prototype.setValidateCallback = function(t, e) {
                void 0 === e && (e = !1), x[this._pid].validate = t, x[this._pid].validateDebug = e
            }, e.prototype.setMultiplicityErrorThreshold = function(t, e) {
                var n = x[this._pid];
                n.mult_error_thresh_e = t, n.mult_error_thresh_ne = e, n.interpreter.setMultiplicityErrorThreshold(t, e)
            }, e.prototype.setChoiceErrorThreshold = function(t) {
                var e = x[this._pid];
                e.choice_error_thresh = t, e.interpreter.setChoiceErrorThreshold(t)
            }, e.prototype.setSigmaThreshold = function(t) {
                var e = x[this._pid];
                e.sigma_thresh = t, e.interpreter.setSigmaThreshold(t)
            }, e.prototype.setMerger = function(t) {
                x[this._pid].merger = t
            }, e.prototype.setInterpreter = function(t) {
                var e = x[this._pid];
                e.interpreter = t, t.setMultiplicityErrorThreshold(e.mult_error_thresh_e, e.mult_error_thresh_ne), t.setChoiceErrorThreshold(e.choice_error_thresh), t.setSigmaThreshold(e.sigma_thresh)
            }, e.prototype.resetLastScan = function() {
                var t = x[this._pid];
                t.fired = !1, t.scanQ = []
            }, e
        }(a.ClassTS);
        t.exports = M
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(t) {
                setTimeout(t, 0)
            };
            e.executeAsync = n, void 0 !== t && (e.executeAsync = n = function(e) {
                t.nextTick(e)
            }), e.executeAsyncDfd = function(t) {
                return new Promise(function(e, n) {
                    try {
                        return t()
                    } catch (t) {
                        console && (console.log("Error:", t), console.log(t.stack))
                    }
                })
            }, e.yieldAsync = function() {
                return new Promise(function(t) {
                    return n(t)
                })
            }
        }).call(this, n(39))
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = n(176),
            o = !0;

        function s(t) {
            for (var e, n = 0, r = 0, i = 0, o = 0; o < t.length; o++) n += e = t[o], r += e * e, i += 1;
            return n /= i, r /= i, Math.sqrt(r - n * n)
        }

        function a(t, e, n, i) {
            var o = [];
            return r.each(t, function(t) {
                t <= e ? o.push(0) : t <= n ? o.push(1) : t <= i ? o.push(2) : o.push(3)
            }), o
        }

        function c(t, e) {
            var n = r.sortBy(t, function(t) {
                return t
            });
            n.push(10), n.unshift(-10);
            for (var o = [], s = function(s) {
                    for (var c = function(c) {
                            for (var u = function(u) {
                                    if (0, ! function(t, e, n, o) {
                                            var s = [];
                                            return r.each(t, function(t) {
                                                t <= e ? s.push(0) : t <= n ? s.push(1) : t <= o ? s.push(2) : s.push(3)
                                            }), i.checksum(s[0], s[1], s[2], s[3]) == s[4]
                                        }(t, n[s], n[c], n[u])) return "continue";
                                    0;
                                    var l = [],
                                        p = [],
                                        f = [],
                                        h = [];
                                    r.each(t, function(t) {
                                        t <= n[s] ? l.push(t) : t <= n[c] ? p.push(t) : t <= n[u] ? f.push(t) : h.push(t)
                                    }), r.each(e, function(e) {
                                        var r = .05,
                                            i = Math.max(e.t1_min, n[s] - r),
                                            d = Math.min(e.t1_max, n[s + 1] + r);
                                        if (!(d <= i)) {
                                            var A = Math.max(e.t2_min, n[c] - r),
                                                g = Math.min(e.t2_max, n[c + 1] + r);
                                            if (!(g <= A)) {
                                                var m = Math.max(e.t3_min, n[u] - r),
                                                    y = Math.min(e.t3_max, n[u + 1] + r);
                                                y <= m || o.push({
                                                    t1_min: i,
                                                    t1_max: d,
                                                    t2_min: A,
                                                    t2_max: g,
                                                    t3_min: m,
                                                    t3_max: y,
                                                    list0: e.list0.concat(l),
                                                    list1: e.list1.concat(p),
                                                    list2: e.list2.concat(f),
                                                    list3: e.list3.concat(h),
                                                    syms: e.syms + a(t, n[s], n[c], n[u]).join("")
                                                })
                                            }
                                        }
                                    })
                                }, l = c; l < 6; l++) u(l)
                        }, u = s; u < 6; u++) c(u)
                }, c = 0; c < 6; c++) s(c);
            return o
        }
        e.decodeFC = function(t, e) {
            if (e && o || (e = {}), 30 == t.length) {
                for (var n, i = t.length / 5, a = [{
                        t1_min: 0,
                        t1_max: 1,
                        t2_min: 0,
                        t2_max: 1,
                        t3_min: 0,
                        t3_max: 1,
                        list0: [],
                        list1: [],
                        list2: [],
                        list3: [],
                        syms: ""
                    }], u = 0; u < i; u++) a = c(t.slice(5 * u, 5 * (u + 1)), a);
                r.each(a, function(t) {
                    for (var n = 0, r = 0; r < t.syms.length; r++) r % 5 != 4 && (n *= 4, n += Number(t.syms[r]));
                    n = "" + n, t.value = n, t.cache_hit = !!e[n], t.cache_veto = null === e[n]
                }), a = r.filter(a, function(t) {
                    return !t.cache_veto
                }), n = a, r.each(n, function(t) {
                    t.len0 = t.list0.length, t.len1 = t.list1.length, t.len2 = t.list2.length, t.len3 = t.list3.length, t.dev0 = s(t.list0), t.dev1 = s(t.list1), t.dev2 = s(t.list2), t.dev3 = s(t.list3), t.devTot = t.len0 * t.dev0 * t.dev0 + t.len1 * t.dev1 * t.dev1 + t.len2 * t.dev2 * t.dev2 + t.len3 * t.dev3 * t.dev3
                });
                var l = function(t, e, n) {
                    var i = r.sortBy(t, function(t) {
                            return t.len0 && t.len1 && t.len2 && t.len3 ? t.devTot : 1 / 0
                        }),
                        o = r.find(i, function(t) {
                            return t.cache_hit
                        });
                    return o ? [o] : r.any(i.slice(0, 8), function(t) {
                        return t.cache_veto
                    }) ? [] : i.slice(0, 16)
                }(a);
                if (l.length) return r.pluck(l, "value")
            }
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0);

        function i(t, e) {
            return r.map(t, function(t, n) {
                return t ^ e[n]
            })
        }

        function o(t) {
            for (var e = [], n = 0; n < t; n++) e.push(0);
            return e
        }

        function s(t, e, n) {
            return o(e).concat(t).concat(o(n))
        }
        e.xor = i, e.zeros = o, e.pad = s, e.crc = function(t, e, n) {
            for (; 0 === e[0];) e = e.slice(1);
            n = n ? n.slice(-(e.length - 1)) : o(e.length - 1);
            for (var r = t.concat(n), a = 0; a < t.length; a++) r[a] && (r = i(r, s(e, a, r.length - a - e.length)));
            return r.slice(-1 * n.length)
        }, e.checksum = function(t, e, n, r) {
            return 3 - (t + e + n + r) % 4
        };
        e.conf = {
            codeSymLen: 30,
            codeWordLen: 5,
            bitsPerWord: 8,
            getMaxBits: function() {
                return this.codeSymLen / this.codeWordLen * this.bitsPerWord
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(178);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = n(0),
            s = n(179),
            a = n(30),
            c = n(2).get();

        function u(t, e, n) {
            return 1 / Math.sqrt(6.2832 * e * e) * Math.exp(-(n - t) * (n - t) / (2 * e * e))
        }

        function l(t) {
            for (var e = 0, n = 0; n < t.length; n++) e += t[n];
            e /= t.length;
            var r = o.sortBy(t, function(t) {
                    return (t - e) * (t - e)
                }).slice(0, Math.floor(.5 * t.length)),
                i = 0;
            return o.each(r, function(t) {
                i += (t - e) * (t - e)
            }), 2.65 * Math.sqrt(i / r.length)
        }
        var p = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype._classify = function() {
                if (this.intensityList.length < 2) this.otsu = {
                    marked_sigma: 1,
                    unmarked_sigma: 1,
                    marked_average: 1,
                    unmarked_average: 0
                };
                else {
                    this.otsu = a(this.intensityList), this.unfiltered_otsu = this.otsu;
                    var t = this.filterLowIntensities(this.intensityList);
                    t.length < 2 || (this.otsu = a(t), this.otsu.marked_sigma < 2 * this.otsu.unmarked_sigma && (this.otsu.marked_sigma = 2 * this.otsu.unmarked_sigma), (t = this.filterExceptionalIntensities(t)).length < 2 || (this.otsu = a(t), this.otsu.marked_sigma < 2 * this.otsu.unmarked_sigma && (this.otsu.marked_sigma = 2 * this.otsu.unmarked_sigma)))
                }
            }, e.prototype.filterLowIntensities = function(t) {
                var e = (this.otsu.marked_average * this.otsu.unmarked_sigma + this.otsu.unmarked_average * this.otsu.marked_sigma) / (this.otsu.unmarked_sigma + this.otsu.marked_sigma),
                    n = [];
                o.each(t, function(t) {
                    t < e && n.push(t)
                });
                var r = o.sortBy(n, function(t) {
                        return t
                    })[Math.floor(n.length / 2)] - l(n),
                    i = [];
                return o.each(t, function(t) {
                    t < r ? 0 : i.push(t)
                }), i
            }, e.prototype.filterExceptionalIntensities = function(t) {
                var e = this,
                    n = [],
                    r = (this.otsu.marked_average * this.otsu.unmarked_sigma + this.otsu.unmarked_average * this.otsu.marked_sigma) / (this.otsu.unmarked_sigma + this.otsu.marked_sigma),
                    i = [],
                    s = [];
                o.each(t, function(t) {
                    t < r ? i.push(t) : s.push(t)
                });
                var a = s.length > 5 ? l(s) : this.otsu.marked_sigma,
                    c = i.length > 5 ? l(i) : this.otsu.unmarked_sigma;
                return o.each(t, function(t) {
                    var r = Math.abs(t - e.otsu.marked_average) / a,
                        i = Math.abs(t - e.otsu.unmarked_average) / c;
                    Math.min(r, i) <= 5 && n.push(t)
                }), n
            }, e.prototype.normalityTest = function(t) {
                var e = o.reduce(t, function(t, e) {
                    return e + t
                }, 0) / t.length;

                function n(n) {
                    var r = 0;
                    return o.each(t, function(t) {
                        r += Math.pow(t - e, n)
                    }), r /= t.length
                }
                var r = n(2),
                    i = n(3),
                    s = n(4),
                    a = i / Math.pow(r, 1.5),
                    c = s / Math.pow(r, 2);
                console.log("Sqrt b1 = " + a), console.log("b2 = " + c);
                var u = t.length,
                    l = a * Math.sqrt((u + 1) * (u + 3) / (6 * (u - 2))),
                    p = 3 * (u * u + 27 * u - 70) * (u + 1) * (u + 3) / ((u - 2) * (u + 5) * (u + 7) * (u + 9)),
                    f = Math.sqrt(-1 + Math.sqrt(2 * (p - 1))),
                    h = 1 / Math.log(f),
                    d = l / Math.sqrt(2 / (f * f - 1)),
                    A = h * Math.log(d + Math.sqrt(d * d + 1));
                console.log("Z(sqrtb1) = " + A);
                var g = 24 * u * (u - 2) * (u - 3) / ((u + 1) * (u + 1) * (u + 3) * (u + 5)),
                    m = (c - 3 * (u - 1) / (u + 1)) / Math.sqrt(g),
                    y = 6 * (u * u - 5 * u + 2) / ((u + 7) * (u + 9)) * Math.sqrt(6 * (u + 3) * (u + 5) / (u * (u - 2) * (u - 3))),
                    v = 6 + 8 / y * (2 / y + Math.sqrt(1 + 4 / (y * y))),
                    b = (1 - 2 / (9 * v) - Math.pow((1 - 2 / v) / (1 + m * Math.sqrt(2 / (v - 4))), 1 / 3)) / Math.sqrt(2 / 9 / v);
                console.log("Z(b2) = " + b);
                var w = A * A * b * b;
                console.log("Ksqr = " + w + " n = " + u)
            }, e.prototype.getProbabilityGivenMarked = function(t) {
                return t > this.otsu.marked_average ? 1e4 : (e = this.otsu.marked_average, n = this.otsu.marked_sigma, .98 * u(e, n, r = t) + .02 * u(e, 2 * n, r));
                var e, n, r
            }, e.prototype.getProbabilityGivenUnmarked = function(t) {
                return t < this.otsu.unmarked_average ? 1e4 : (e = this.otsu.unmarked_average, n = this.otsu.unmarked_sigma, .99 * u(e, n, r = t) + .01 * u(e, 2 * n, r));
                var e, n, r
            }, e.prototype.calcTransform = function() {
                this.A = 1 / (this.otsu.marked_average - this.otsu.unmarked_average), this.B = -1 * this.otsu.unmarked_average * this.A
            }, e.prototype.transform = function(t) {
                return this.A * t + this.B
            }, e.prototype.getMarkedSignificance = function(t) {
                return (t - this.otsu.marked_average) / this.otsu.marked_sigma
            }, e.prototype.getUnmarkedSignificance = function(t) {
                return (t - this.otsu.unmarked_average) / this.otsu.unmarked_sigma
            }, e.prototype.validate = function(t) {
                t = t || 3;
                var e = this.unfiltered_otsu,
                    n = Math.sqrt(e.marked_sigma * e.marked_sigma + e.unmarked_sigma * e.unmarked_sigma),
                    r = (e.marked_average - e.unmarked_average) / n;
                if (this.sigma = r, c.trace("Classifier: " + this.id), c.trace("Sigma: " + r), r < t) return c.trace("Rejecting to low sigma:", r, this.intensityList), !1;
                if (this.unmarkedValidationInfo && (e.marked_average - this.unmarkedValidationInfo.average) / this.unmarkedValidationInfo.sigma < 4) return !1;
                return !0
            }, e
        }(s);
        t.exports = p
    }, function(t, e, n) {
        "use strict";
        var r = 0,
            i = function() {
                return function(t, e) {
                    this.unmarkedValidationInfo = e, this.intensityList = t, this.id = r++, this._classify()
                }
            }();
        t.exports = i
    }, function(t, e, n) {
        "use strict";
        var r = n(181);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = n(0),
            s = n(182);
        var a = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368e3, 20922789888e3, 355687428096e3, 6402373705728e3, 0x1b02b9306890000, 243290200817664e4],
            c = function(t) {
                return a[t]
            };
        var u = o.memoize(function(t, e, n) {
                var r = 0;
                return o.each(o.range(e, n + 1), function(e) {
                    r += c(t) / (c(e) * c(t - e))
                }), r
            }, function(t, e, n) {
                return String(1e4 * t + 100 * e + n)
            }),
            l = o.memoize(function(t) {
                return Math.pow(2, t)
            });

        function p(t, e) {
            var n = t.length,
                r = [];
            if (n > 3) {
                var i = [],
                    s = o.zip(t, e);
                o.each(s, function(t) {
                    var e = t[0],
                        n = e / (e + t[1]);
                    n < .5 && (n = 1 - n), i.push(n)
                });
                var a, c = o.sortBy(i, function(t) {
                        return -t
                    }),
                    u = n - 5;
                a = u >= 0 ? c[u] : 1, o.each(i, function(n, i) {
                    n >= a ? t[i] > e[i] ? r.push([1]) : r.push([0]) : r.push([1, 0])
                })
            } else o.each(t, function() {
                r.push([1, 0])
            });
            var l = function t(e) {
                    if (1 === e.length) return e[0];
                    var n = e[0],
                        r = [],
                        i = t(e.splice(1, e.length));
                    return o.each(n, function(t) {
                        o.each(i, function(e) {
                            r.push([t].concat(e))
                        })
                    }), r
                }(r),
                p = [];
            return o.each(l, function(t) {
                p.push({
                    state: t
                })
            }), p
        }

        function f(t, e, n, r, i) {
            o.each(t, function(t) {
                var s = 1;
                o.each(t.state, function(t, r) {
                    s *= 1 === t ? e[r] : n[r]
                }), t.P = s * function(t, e, n) {
                    return t.multiplicity <= n && t.multiplicity >= e ? .97 / u(t.state.length, e, n) : 0 === t.multiplicity ? .02 : .01 / (l(t.state.length) - u(t.state.length, Math.max(e, 1), n) - 1)
                }(t, r, i)
            })
        }
        var h = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.interpretIntArray = function(t, e, n, r, i) {
                var s = [],
                    a = [];
                i > e.length && (i = e.length), o.each(e, function(e) {
                    var n = t.getProbabilityGivenMarked(e),
                        r = t.getProbabilityGivenUnmarked(e);
                    s.push(n), a.push(r)
                });
                var c = p(s, a);
                ! function(t) {
                    o.each(t, function(t) {
                        t.multiplicity = o.reduce(t.state, function(t, e) {
                            return t + Number(e)
                        }, 0)
                    })
                }(c), t.validate(this.sigma_threshold) || (r = 0, i = e.length), f(c, s, a, r, i),
                    function(t) {
                        var e = o.reduce(t, function(t, e) {
                                return t + e.P
                            }, 0),
                            n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        o.each(t, function(t) {
                            n[t.multiplicity] += t.P
                        }), o.each(t, function(t) {
                            t.P_state = t.P / e, t.P_choice = t.P / n[t.multiplicity], t.P_multiplicity = n[t.multiplicity] / e
                        })
                    }(c);
                var u = o.max(c, function(t) {
                        return t.P_state
                    }),
                    l = [];
                o.each(u.state, function(t, e) {
                    t && l.push(n[e])
                });
                var h = o.find(c, function(t) {
                        return 0 === t.multiplicity
                    }),
                    d = 0;
                h && (d = h.P_multiplicity);
                var A, g = t.getMarkedSignificance(o.max(e)),
                    m = 1 - u.P_choice,
                    y = 1 - u.P_multiplicity,
                    v = m > this.choice_error_threshold;
                return A = l.length >= r && l.length <= i ? y > this.multiplicity_error_threshold_expected : y > this.multiplicity_error_threshold_not_expected, {
                    values: l,
                    validate: v || A,
                    P_blank: d,
                    P_state: u.P_state,
                    P_choice: u.P_choice,
                    P_multiplicity: u.P_multiplicity,
                    marked_sigma: g
                }
            }, e
        }(s);
        t.exports = h
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            i = n(0),
            o = n(183),
            s = n(30);

        function a(t, e, n) {
            if (!t) return e;
            if (!e) return t;
            var r = {};
            return i.each(t, function(t, n) {
                var i = e[n],
                    o = t.validate_classifier ? 0 : t.P_state,
                    s = i.validate_classifier ? 0 : i.P_state;
                o > .3 && "" === t.value ? r[n] = t : s > .3 && "" === i.value ? r[n] = i : r[n] = o > s ? t : i
            }), r
        }

        function c(t, e) {
            var n = 0,
                r = 0;
            return i.each(t, function(t) {
                r++, 0 != t.validate && 1 != t.bad_multiplicity || 0 != t.validate_classifier || n++
            }), n / r
        }
        var u = function() {
            function t(t) {
                this.Classifier = t, this.multiplicity_error_threshold_not_expected = .001, this.multiplicity_error_threshold_expected = .01, this.choice_error_threshold = 1e-5, this.sigma_threshold = 3, this.scanMode = null
            }
            return t.prototype.setMode = function(t) {
                this.scanMode = t
            }, t.prototype.setMultiplicityErrorThreshold = function(t, e) {
                this.multiplicity_error_threshold_not_expected = e, this.multiplicity_error_threshold_expected = t
            }, t.prototype.setChoiceErrorThreshold = function(t) {
                this.choice_error_threshold = t
            }, t.prototype.setSigmaThreshold = function(t) {
                this.sigma_threshold = t
            }, t.prototype.interpretScanUsingMethod = function(t, e, n, r, o, s) {
                var a = this,
                    c = {},
                    u = i.groupBy(t.items, n);
                return i.each(u, function(t, n) {
                    var i = [];
                    i = [];
                    for (var u = 0, l = t; u < l.length; u++) {
                        var p = A = l[u];
                        i = i.concat(p.getIntensityList ? p.getIntensityList(r) : [])
                    }
                    for (var f = new e(i, o), h = 0, d = t; h < d.length; h++) {
                        var A = d[h],
                            g = a.interpretItem(f, A, r, s);
                        g.classifier_id = f.id, c[A.fdid] = g
                    }
                }), c
            }, t.prototype.interpretScan = function(t) {
                var e = this,
                    n = i.indexOf(t.getIntensityMethods(), 1) >= 0,
                    u = function(t) {
                        return "number" === t.type ? t.label : String(t.block_col)
                    },
                    l = function(t) {
                        return "number" === t.type ? t.label : "question"
                    },
                    p = t.getItemByLabel("Version"),
                    f = null;
                p && (f = p.getDarkestBubble()), t.fc_data && t.fc_data.exam_version ? f = t.fc_data.exam_version : t.fc_data && t.fc_data.batch_data && t.fc_data.batch_data.exam_version && (f = t.fc_data.batch_data.exam_version);
                var h = t.getItemsByType("number");
                h.length || (h = t.getItemsByType("question"));
                for (var d = [], A = [], g = 0, m = h; g < m.length; g++) {
                    var y = m[g];
                    d = d.concat(y.getIntensityList(0)), A = A.concat(y.getIntensityList(1))
                }
                var v, b, w = s(d),
                    _ = s(A);
                w && (v = {
                    average: w.unmarked_average,
                    sigma: w.unmarked_sigma
                }), _ && (b = n ? {
                    average: _.unmarked_average,
                    sigma: _.unmarked_sigma
                } : {});
                var S, x = this.interpretScanUsingMethod(t, this.Classifier, u, 0, v, f);
                o(x), c(x) < 1 && (S = this.interpretScanUsingMethod(t, this.Classifier, l, 0, v, f), o(S));
                var k, C, I, E = a(x, S),
                    O = c(E),
                    M = 0;
                O < 1 && n && (k = this.interpretScanUsingMethod(t, this.Classifier, u, 1, b, f), o(k), c(k) < 1 && (C = this.interpretScanUsingMethod(t, this.Classifier, l, 1, b, f), o(C)), M = c(I = a(k, C)));
                var R = {},
                    D = !1;
                if (O > .4 && O > M) R = E;
                else if (M > .4) R = I;
                else {
                    var B = this.interpretScanUsingMethod(t, this.Classifier, l, 0, {}, f);
                    i.each(B, function(t) {
                        "GradeCam ID" != t.label && (t.validate = !0)
                    }), R = B, D = !0
                }
                var T = !1;
                i.each(R, function(t) {
                    "Version" == t.label && t.validate && -1 == e.multiplicity_error_threshold_not_expected && (T = !0)
                }), i.each(R, function(t) {
                    !0 === t.bad_multiplicity && (t.validate = !0)
                });
                for (var F = [], V = 0, j = t.items; V < j.length; V++) {
                    y = j[V];
                    F.push(R[y.fdid])
                }
                return new r.InterpretedScan({
                    fc_data: t.fc_data,
                    type: t.type,
                    items: F,
                    bad_form: D,
                    bad_form_version: T
                })
            }, t.prototype.interpretItem = function(t, e, n, r) {
                switch (e.type) {
                    case "number":
                        return this.interpretNumberItem(t, e, n);
                    case "question":
                        return this.interpretQuestionItem(t, e, n, r);
                    case "clip":
                        return this.interpretClipItem(e);
                    default:
                        throw "Unknown Item Type"
                }
            }, t.prototype.interpretQuestionItem = function(t, e, n, i) {
                var o, s = e.getIntensities(n);
                o = e.ignore ? {
                    values: [],
                    validate: !1,
                    P_state: 1,
                    P_blank: 1,
                    marked_sigma: 0
                } : this.interpretIntArray(t, s, e.choices, e.getMultiplicityMin(i), e.getMultiplicityMax(i));
                var a = !t.validate(this.sigma_threshold);
                a && (o.validate = !0);
                var c = new r.InterpretedScan.InterpretedItem({
                    type: "question",
                    form_area: e.form_area,
                    label: e.label,
                    value: o.values.join(""),
                    choices: e.choices,
                    validate: o.validate,
                    validate_classifier: a,
                    P_state: o.P_state,
                    P_blank: o.P_blank,
                    marked_sigma: o.marked_sigma
                }); - 1 !== this.multiplicity_error_threshold_not_expected || e.ignore || c.value.length !== e.getMultiplicityMax(i) && (c.bad_multiplicity = !0);
                var u = {};
                return o.debug && (u = o.debug), u.intArray = s, c.debug = u, c
            }, t.prototype.interpretNumberItem = function(t, e, n) {
                var o = e.getIntensities(n),
                    s = "",
                    a = !1,
                    c = !1,
                    u = this,
                    l = !t.validate();
                return i.each(o, function(n, r) {
                    var i = e.choices;
                    e.choicesArr && e.choicesArr.length && (i = e.choicesArr[r]);
                    var o = u.interpretIntArray(t, n, i, 0, 1);
                    o.values = o.values.filter(function(t) {
                        return void 0 !== t
                    }), o.values.length > 1 ? a = !0 : 0 == o.values.length ? s += " " : s += o.values[0], o.validate && (c = !0)
                }), s = s.trim(), a && (s = "", c = !0), !this.scanMode.numeric_allow_blanks && s.indexOf(" ") > -1 && (a = !0, c = !0), t.validate() || (c = !0), new r.InterpretedScan.InterpretedItem({
                    type: "number",
                    choices: e.choices,
                    choicesArr: e.choicesArr,
                    form_area: e.form_area,
                    label: e.label,
                    value: s,
                    validate: c,
                    validate_classifier: l,
                    bad_multiplicity: a
                })
            }, t.prototype.interpretClipItem = function(t) {
                return new r.InterpretedScan.InterpretedItem({
                    type: "clip",
                    choices: [],
                    form_area: t.form_area,
                    label: t.label,
                    value: t.image,
                    wantMoreCopies: t.wantMoreCopies,
                    validate: !1,
                    validate_classifier: !1,
                    skew: t.skew
                })
            }, t
        }();
        t.exports = u
    }, function(t, e, n) {
        "use strict";
        var r = n(0);
        t.exports = function(t) {
            var e = [];
            r.each(t, function(t) {
                var n = t.label.split(" ");
                if ("Question" === n[0]) {
                    var r = Number(n[1]) - 1;
                    e[r] = t
                }
            }), r.each(e, function(t, n) {
                var r = Number(n);
                if (!t.ignore && 0 === t.value.length) {
                    var i = r >= 1 ? e[r - 1] : null;
                    if (i && i.classifier_id === t.classifier_id) {
                        if (i.P_blank < .001) {
                            var o = i.marked_sigma - t.marked_sigma;
                            t.P_blank > .9 ? (t.value = "", t.validate = !1) : o > 3 && (t.value = "", t.validate = !1)
                        }
                        0 === i.value.length && !1 === i.validate && t.P_blank > .9 && (t.value = "", t.validate = !1)
                    }
                }
            })
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(185);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = n(0),
            s = n(186),
            a = n(4),
            c = 0,
            u = 0;

        function l(t) {
            return t.blur / t.width || 1
        }

        function p(t) {
            for (var e = o.map(t[0], function() {
                    return 0
                }), n = 0; n < t.length; n++)
                for (var r = 0; r < e.length; r++) e[r] += t[n][r];
            for (r = 0; r < e.length; r++) e[r] = e[r] / t.length;
            return e
        }
        var f = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.interpretScans = function(t, e, n) {
                if (!e.length) return null;
                var r = e[0].structure_hash;
                if (o.any(e, function(t) {
                        return t.structure_hash != r
                    })) return null;
                var i = o.pluck(e[0].items, "fdid"),
                    s = e[0].fc_data,
                    f = o.reduce(e, function(t, e) {
                        return e ? t.concat(e.items) : t
                    }, []),
                    h = new a.StructuredScan({
                        type: e[0],
                        items: [],
                        fc_data: s
                    });
                return o.each(i, function(t) {
                    var e, n = o.select(f, function(e) {
                            return e.fdid == t
                        }),
                        r = [],
                        i = n[0];
                    if ("number" === i.type) {
                        var s = new a.StructuredScan.NumberItem(i);
                        r = [];
                        for (var d = o.map(n, function(t) {
                                return t.intensities
                            }), A = [], g = function(t) {
                                r = [], r = o.map(d, function(e) {
                                    return e[t]
                                }), A.push(function(t) {
                                    for (var e = o.keys(t[0]).map(function(t) {
                                            return Number(t)
                                        }), n = [], r = function(e) {
                                            var r = o.map(t, function(t) {
                                                return t[e]
                                            });
                                            n[e] = p(r)
                                        }, i = 0, s = e; i < s.length; i++) r(s[i]);
                                    return n
                                }(r))
                            }, m = 0; m < d[0].length; m++) g(m);
                        s.intensities = A, e = s
                    } else if ("clip" == i.type) {
                        var y = !1,
                            v = o.select(f, function(e) {
                                return e.fdid == t
                            }),
                            b = o.min(v, function(t) {
                                return l(t)
                            }),
                            w = l(b);
                        v.length >= 3 ? y = !0 : u > 5 && w > 1.5 * c && (y = !0), y && (c = c ? .9 * c + w * (1 - .9) : w), u++ < 1 && (c = w);
                        var _ = b;
                        _.wantMoreCopies = !y, e = new a.StructuredScan.ClipItem(_)
                    } else {
                        s = new a.StructuredScan.QuestionItem(i);
                        r = [];
                        d = o.map(n, function(t) {
                            return t.intensities
                        }), A = [];
                        var S = function(t) {
                            r = [], r = o.map(d, function(e) {
                                return e[t]
                            }), A.push(p(r))
                        };
                        for (m = 0; m < d[0].length; m++) S(m);
                        s.intensities = A, e = s
                    }
                    h.items.push(e)
                }), n.interpretScan(h)
            }, e
        }(s);
        t.exports = f
    }, function(t, e, n) {
        "use strict";
        var r = function() {
            return function() {}
        }();
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(188),
            i = n(55),
            o = n(56),
            s = n(189),
            a = n(190);
        e.createFromMode = function(t) {
            switch (t.type) {
                case "exam":
                    return new i(t);
                case "answerkey":
                    return new r(t);
                case "score":
                    return new o(t);
                case "credit":
                    return new s(t);
                case "custom":
                    return new a(t);
                default:
                    throw "Unimplemented form type"
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            a = n(55),
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.parentGetFormDescription = a.prototype.getFormDescription, e
                }
                return i(e, t), e.prototype.getFormDescription = function(t) {
                    return o(this, void 0, void 0, function() {
                        var e, n, r, i;
                        return s(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.parentGetFormDescription(t)];
                                case 1:
                                    if (!(e = o.sent())) return [2, null];
                                    for (n = 0, r = e.blocks; n < r.length; n++) "ids" === (i = r[n]).form_area && (i.ignore = !0);
                                    return [2, e]
                            }
                        })
                    })
                }, e
            }(a);
        t.exports = c
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            a = n(0),
            c = n(56),
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.parentGetFormDescription = c.prototype.getFormDescription, e
                }
                return i(e, t), e.prototype.getFormDescription = function(t) {
                    return o(this, void 0, void 0, function() {
                        var e, n;
                        return s(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.parentGetFormDescription(t)];
                                case 1:
                                    return (e = r.sent()) ? 1 !== (n = a.filter(e.blocks, function(t) {
                                        return "Score" === t.label
                                    })).length ? [2, null] : (n[0].ignore = !0, [2, e]) : [2, null]
                            }
                        })
                    })
                }, e
            }(c);
        t.exports = u
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            a = n(32),
            c = n(4),
            u = n(53),
            l = n(0);

        function p(t) {
            return t ? "questions" === t.type ? new c.FormDescription.QuestionBlockDescription(t) : "number" === t.type ? new c.FormDescription.NumberBlockDescription(t) : null : null
        }

        function f(t, e) {
            return !!u.matchBlocks(e.blocks, t.blocks)
        }
        var h = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.getFormDescription = function(t) {
                return o(this, void 0, void 0, function() {
                    var e, n, r;
                    return s(this, function(i) {
                        return e = this.formMode.custom_form_description, l.isArray(e) ? (n = l.map(e, function(t) {
                            return new c.FormDescription({
                                blocks: l.map(t.blocks, p)
                            })
                        }), [2, l.find(n, function(e) {
                            return f(t, e)
                        })]) : (r = new c.FormDescription({
                            blocks: l.map(e.blocks, p)
                        }), f(t, r) ? [2, r] : [2, null])
                    })
                })
            }, e
        }(a);
        t.exports = h
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = n(0);

        function s(t) {
            return t ? (new Date).valueOf() - t.valueOf() : 1 / 0
        }
        var a = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n.scanManager = e, n.lastResult = null, n.lastSuccess = null, n.queue = [], n.scanManager.bind("processScanResult", n.onProcessScanResult, n), n.intervalId = setInterval(function() {
                    s(n.lastResult) > 5e3 && n.reset()
                }, 1e3), n
            }
            return i(e, t), e.prototype.shutdown = function() {
                clearInterval(this.intervalId)
            }, e.prototype.reset = function() {
                this.queue = []
            }, e.prototype.reportProblem = function(t, e, n) {
                this.reset(), this.trigger("problem", {
                    type: t,
                    message: e,
                    data: n
                })
            }, e.prototype.onProcessScanResult = function(t, e) {
                this.lastResult = new Date, "success" == t && (this.queue = [], this.lastSuccess = new Date);
                var n, r = [];
                switch (o.each(this.queue, function(t) {
                    s(t.time) < 6e4 && r.push(t)
                }), this.queue = r, this.queue.push({
                    result: t,
                    time: new Date
                }), t) {
                    case "paused":
                    case "config":
                        break;
                    case "examLength":
                        o.filter(this.queue, function(t) {
                            return "examLength" == t.result
                        }).length > 3 && (n = "This form does not appear to be long enough for the exam length.", this.reportProblem("examLength", n));
                        break;
                    case "alreadyProcessed":
                        s(this.lastSuccess) > 5e3 && (n = "You have already scanned this form.  GradeCam will not scan the same form two times in a row.", this.reportProblem("duplicateId", n));
                        break;
                    case "needHighRes":
                        s(this.lastSuccess) > 8e3 && (n = "GradeCam is having difficulty getting high resolution images from the camera. Clips may not work.", this.reportProblem("cannotHighRes", n));
                        break;
                    case "structure":
                        var i = o.filter(this.queue, function(t) {
                            return "structure" == t.result
                        });
                        new Date - i[0].time > 6e3 && i.length > 10 && i.length / this.queue.length > .7 && (n = "GradeCam is having difficulty reading this form.  Check the form position, lighting, camera focus, and camera zoom.", this.reportProblem("badStructure", n), this.trigger("enableHighRes", 3e3));
                        break;
                    case "networkError":
                        this.reportProblem("networkError", "Could not reach " + e.domain + "; check your internet connection and firewall settings.", e), console && console.error && console.error(e.error)
                }
            }, e
        }(n(3).ClassTS);
        t.exports = a
    }, function(t, e, n) {
        "use strict";
        var r = n(1);
        t.exports = function(t) {
            return function(e) {
                var n = r.newDeferred();
                return t(e, function(t) {
                    null === t ? n.reject(t) : n.resolve(t)
                }), n.promise
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
            o = n(1),
            s = "https://scansupport.gradecam.com/formdata/",
            a = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.req = n, r
                }
                return i(e, t), e
            }(Error);
        t.exports = function(t) {
            var e = o.newDeferred(),
                n = new XMLHttpRequest,
                r = s + t + "/gcip";
            return n.onreadystatechange = function() {
                if (4 == n.readyState && 200 == n.status) try {
                    var t = JSON.parse(n.responseText);
                    e.resolve(t)
                } catch (t) {
                    e.reject(t)
                } else 4 == n.readyState && 200 != n.status && e.reject(new a("Error making request", n))
            }, n.open("GET", r, !0), n.send(), e.promise
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.copyToClipboard = function(t) {
            var e = document.activeElement,
                n = document.createElement("textarea");
            document.body.appendChild(n), n.value = t, n.select();
            var r = !1;
            try {
                r = document.execCommand("copy")
            } catch (t) {}
            return n.remove(), e && "function" == typeof e.focus && e.focus(), r
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(1),
            s = "https://downloads.gradecam.com/grades";

        function a(t, e) {
            return r(this, void 0, void 0, function() {
                var n, r, s;
                return i(this, function(i) {
                    return n = t, r = new XMLHttpRequest, s = o.newDeferred(), r.onreadystatechange = function() {
                        if (4 == r.readyState && 200 == r.status) try {
                            var t = JSON.parse(r.responseText);
                            s.resolve(t)
                        } catch (e) {
                            s.reject(e)
                        } else if (4 == r.readyState && 200 != r.status) {
                            var e = new Error("Server returned code " + r.status);
                            e.response = r.responseText;
                            try {
                                e = JSON.parse(e.response)
                            } catch (t) {}
                            s.reject(e)
                        }
                    }, e ? (r.open("PUT", n, !0), r.setRequestHeader("X-Requested-With", "GCSDK"), r.setRequestHeader("Content-type", "application/json"), r.send(JSON.stringify(e))) : (r.open("GET", n, !0), r.send()), [2, s.promise]
                })
            })
        }
        e.setWebTyperScores = function(t, e, n) {
            return r(this, void 0, void 0, function() {
                var r;
                return i(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, a(s + "/" + encodeURIComponent(t), {
                                scores: e,
                                config: n
                            })];
                        case 1:
                            return [2, (r = i.sent()) && r.success]
                    }
                })
            })
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            },
            i = n(16),
            o = n(20),
            s = function(t) {
                function e(e) {
                    t.call(this), this._value = e
                }
                return r(e, t), Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        return this.getValue()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype._subscribe = function(e) {
                    var n = t.prototype._subscribe.call(this, e);
                    return n && !n.closed && e.next(this._value), n
                }, e.prototype.getValue = function() {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new o.ObjectUnsubscribedError;
                    return this._value
                }, e.prototype.next = function(e) {
                    t.prototype.next.call(this, this._value = e)
                }, e
            }(i.Subject);
        e.BehaviorSubject = s
    }])
});
//# sourceMappingURL=gcsdk_noui.js.map