!(function(t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports.gradecam = e())
    : (t.gradecam = e())
})(this, function() {
  return (function(t) {
    function e(r) {
      if (n[r]) return n[r].exports
      var i = (n[r] = { i: r, l: !1, exports: {} })
      return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports
    }
    var n = {}
    return (
      (e.m = t),
      (e.c = n),
      (e.i = function(t) {
        return t
      }),
      (e.d = function(t, n, r) {
        e.o(t, n) ||
          Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
          })
      }),
      (e.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return e.d(n, 'a', n), n
      }),
      (e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (e.p = ''),
      e((e.s = 60))
    )
  })([
    function(t, e, n) {
      var r, i
      ;(function() {
        function n(t) {
          function e(e, n, r, i, o, s) {
            for (; o >= 0 && o < s; o += t) {
              var a = i ? i[o] : o
              r = n(r, e[a], a, e)
            }
            return r
          }
          return function(n, r, i, o) {
            r = S(r, o, 4)
            var s = !M(n) && _.keys(n),
              a = (s || n).length,
              c = t > 0 ? 0 : a - 1
            return (
              arguments.length < 3 && ((i = n[s ? s[c] : c]), (c += t)),
              e(n, r, i, s, c, a)
            )
          }
        }
        function o(t) {
          return function(e, n, r) {
            n = k(n, r)
            for (var i = E(e), o = t > 0 ? 0 : i - 1; o >= 0 && o < i; o += t)
              if (n(e[o], o, e)) return o
            return -1
          }
        }
        function s(t, e, n) {
          return function(r, i, o) {
            var s = 0,
              a = E(r)
            if ('number' == typeof o)
              t > 0
                ? (s = o >= 0 ? o : Math.max(o + a, s))
                : (a = o >= 0 ? Math.min(o + 1, a) : o + a + 1)
            else if (n && o && a) return (o = n(r, i)), r[o] === i ? o : -1
            if (i !== i)
              return (o = e(d.call(r, s, a), _.isNaN)), o >= 0 ? o + s : -1
            for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t)
              if (r[o] === i) return o
            return -1
          }
        }
        function a(t, e) {
          var n = T.length,
            r = t.constructor,
            i = (_.isFunction(r) && r.prototype) || p,
            o = 'constructor'
          for (_.has(t, o) && !_.contains(e, o) && e.push(o); n--; )
            (o = T[n]) in t && t[o] !== i[o] && !_.contains(e, o) && e.push(o)
        }
        var c = this,
          u = c._,
          l = Array.prototype,
          p = Object.prototype,
          f = Function.prototype,
          h = l.push,
          d = l.slice,
          A = p.toString,
          g = p.hasOwnProperty,
          m = Array.isArray,
          v = Object.keys,
          y = f.bind,
          b = Object.create,
          w = function() {},
          _ = function(t) {
            return t instanceof _
              ? t
              : this instanceof _
              ? void (this._wrapped = t)
              : new _(t)
          }
        void 0 !== t && t.exports && (e = t.exports = _),
          (e._ = _),
          (_.VERSION = '1.8.3')
        var S = function(t, e, n) {
            if (void 0 === e) return t
            switch (null == n ? 3 : n) {
              case 1:
                return function(n) {
                  return t.call(e, n)
                }
              case 2:
                return function(n, r) {
                  return t.call(e, n, r)
                }
              case 3:
                return function(n, r, i) {
                  return t.call(e, n, r, i)
                }
              case 4:
                return function(n, r, i, o) {
                  return t.call(e, n, r, i, o)
                }
            }
            return function() {
              return t.apply(e, arguments)
            }
          },
          k = function(t, e, n) {
            return null == t
              ? _.identity
              : _.isFunction(t)
              ? S(t, e, n)
              : _.isObject(t)
              ? _.matcher(t)
              : _.property(t)
          }
        _.iteratee = function(t, e) {
          return k(t, e, 1 / 0)
        }
        var x = function(t, e) {
            return function(n) {
              var r = arguments.length
              if (r < 2 || null == n) return n
              for (var i = 1; i < r; i++)
                for (
                  var o = arguments[i], s = t(o), a = s.length, c = 0;
                  c < a;
                  c++
                ) {
                  var u = s[c]
                  ;(e && void 0 !== n[u]) || (n[u] = o[u])
                }
              return n
            }
          },
          C = function(t) {
            if (!_.isObject(t)) return {}
            if (b) return b(t)
            w.prototype = t
            var e = new w()
            return (w.prototype = null), e
          },
          O = function(t) {
            return function(e) {
              return null == e ? void 0 : e[t]
            }
          },
          I = Math.pow(2, 53) - 1,
          E = O('length'),
          M = function(t) {
            var e = E(t)
            return 'number' == typeof e && e >= 0 && e <= I
          }
        ;(_.each = _.forEach = function(t, e, n) {
          e = S(e, n)
          var r, i
          if (M(t)) for (r = 0, i = t.length; r < i; r++) e(t[r], r, t)
          else {
            var o = _.keys(t)
            for (r = 0, i = o.length; r < i; r++) e(t[o[r]], o[r], t)
          }
          return t
        }),
          (_.map = _.collect = function(t, e, n) {
            e = k(e, n)
            for (
              var r = !M(t) && _.keys(t),
                i = (r || t).length,
                o = Array(i),
                s = 0;
              s < i;
              s++
            ) {
              var a = r ? r[s] : s
              o[s] = e(t[a], a, t)
            }
            return o
          }),
          (_.reduce = _.foldl = _.inject = n(1)),
          (_.reduceRight = _.foldr = n(-1)),
          (_.find = _.detect = function(t, e, n) {
            var r
            if (
              void 0 !==
                (r = M(t) ? _.findIndex(t, e, n) : _.findKey(t, e, n)) &&
              -1 !== r
            )
              return t[r]
          }),
          (_.filter = _.select = function(t, e, n) {
            var r = []
            return (
              (e = k(e, n)),
              _.each(t, function(t, n, i) {
                e(t, n, i) && r.push(t)
              }),
              r
            )
          }),
          (_.reject = function(t, e, n) {
            return _.filter(t, _.negate(k(e)), n)
          }),
          (_.every = _.all = function(t, e, n) {
            e = k(e, n)
            for (
              var r = !M(t) && _.keys(t), i = (r || t).length, o = 0;
              o < i;
              o++
            ) {
              var s = r ? r[o] : o
              if (!e(t[s], s, t)) return !1
            }
            return !0
          }),
          (_.some = _.any = function(t, e, n) {
            e = k(e, n)
            for (
              var r = !M(t) && _.keys(t), i = (r || t).length, o = 0;
              o < i;
              o++
            ) {
              var s = r ? r[o] : o
              if (e(t[s], s, t)) return !0
            }
            return !1
          }),
          (_.contains = _.includes = _.include = function(t, e, n, r) {
            return (
              M(t) || (t = _.values(t)),
              ('number' != typeof n || r) && (n = 0),
              _.indexOf(t, e, n) >= 0
            )
          }),
          (_.invoke = function(t, e) {
            var n = d.call(arguments, 2),
              r = _.isFunction(e)
            return _.map(t, function(t) {
              var i = r ? e : t[e]
              return null == i ? i : i.apply(t, n)
            })
          }),
          (_.pluck = function(t, e) {
            return _.map(t, _.property(e))
          }),
          (_.where = function(t, e) {
            return _.filter(t, _.matcher(e))
          }),
          (_.findWhere = function(t, e) {
            return _.find(t, _.matcher(e))
          }),
          (_.max = function(t, e, n) {
            var r,
              i,
              o = -1 / 0,
              s = -1 / 0
            if (null == e && null != t) {
              t = M(t) ? t : _.values(t)
              for (var a = 0, c = t.length; a < c; a++)
                (r = t[a]) > o && (o = r)
            } else
              (e = k(e, n)),
                _.each(t, function(t, n, r) {
                  ;((i = e(t, n, r)) > s || (i === -1 / 0 && o === -1 / 0)) &&
                    ((o = t), (s = i))
                })
            return o
          }),
          (_.min = function(t, e, n) {
            var r,
              i,
              o = 1 / 0,
              s = 1 / 0
            if (null == e && null != t) {
              t = M(t) ? t : _.values(t)
              for (var a = 0, c = t.length; a < c; a++)
                (r = t[a]) < o && (o = r)
            } else
              (e = k(e, n)),
                _.each(t, function(t, n, r) {
                  ;((i = e(t, n, r)) < s || (i === 1 / 0 && o === 1 / 0)) &&
                    ((o = t), (s = i))
                })
            return o
          }),
          (_.shuffle = function(t) {
            for (
              var e,
                n = M(t) ? t : _.values(t),
                r = n.length,
                i = Array(r),
                o = 0;
              o < r;
              o++
            )
              (e = _.random(0, o)), e !== o && (i[o] = i[e]), (i[e] = n[o])
            return i
          }),
          (_.sample = function(t, e, n) {
            return null == e || n
              ? (M(t) || (t = _.values(t)), t[_.random(t.length - 1)])
              : _.shuffle(t).slice(0, Math.max(0, e))
          }),
          (_.sortBy = function(t, e, n) {
            return (
              (e = k(e, n)),
              _.pluck(
                _.map(t, function(t, n, r) {
                  return { value: t, index: n, criteria: e(t, n, r) }
                }).sort(function(t, e) {
                  var n = t.criteria,
                    r = e.criteria
                  if (n !== r) {
                    if (n > r || void 0 === n) return 1
                    if (n < r || void 0 === r) return -1
                  }
                  return t.index - e.index
                }),
                'value'
              )
            )
          })
        var R = function(t) {
          return function(e, n, r) {
            var i = {}
            return (
              (n = k(n, r)),
              _.each(e, function(r, o) {
                var s = n(r, o, e)
                t(i, r, s)
              }),
              i
            )
          }
        }
        ;(_.groupBy = R(function(t, e, n) {
          _.has(t, n) ? t[n].push(e) : (t[n] = [e])
        })),
          (_.indexBy = R(function(t, e, n) {
            t[n] = e
          })),
          (_.countBy = R(function(t, e, n) {
            _.has(t, n) ? t[n]++ : (t[n] = 1)
          })),
          (_.toArray = function(t) {
            return t
              ? _.isArray(t)
                ? d.call(t)
                : M(t)
                ? _.map(t, _.identity)
                : _.values(t)
              : []
          }),
          (_.size = function(t) {
            return null == t ? 0 : M(t) ? t.length : _.keys(t).length
          }),
          (_.partition = function(t, e, n) {
            e = k(e, n)
            var r = [],
              i = []
            return (
              _.each(t, function(t, n, o) {
                ;(e(t, n, o) ? r : i).push(t)
              }),
              [r, i]
            )
          }),
          (_.first = _.head = _.take = function(t, e, n) {
            if (null != t)
              return null == e || n ? t[0] : _.initial(t, t.length - e)
          }),
          (_.initial = function(t, e, n) {
            return d.call(
              t,
              0,
              Math.max(0, t.length - (null == e || n ? 1 : e))
            )
          }),
          (_.last = function(t, e, n) {
            if (null != t)
              return null == e || n
                ? t[t.length - 1]
                : _.rest(t, Math.max(0, t.length - e))
          }),
          (_.rest = _.tail = _.drop = function(t, e, n) {
            return d.call(t, null == e || n ? 1 : e)
          }),
          (_.compact = function(t) {
            return _.filter(t, _.identity)
          })
        var D = function(t, e, n, r) {
          for (var i = [], o = 0, s = r || 0, a = E(t); s < a; s++) {
            var c = t[s]
            if (M(c) && (_.isArray(c) || _.isArguments(c))) {
              e || (c = D(c, e, n))
              var u = 0,
                l = c.length
              for (i.length += l; u < l; ) i[o++] = c[u++]
            } else n || (i[o++] = c)
          }
          return i
        }
        ;(_.flatten = function(t, e) {
          return D(t, e, !1)
        }),
          (_.without = function(t) {
            return _.difference(t, d.call(arguments, 1))
          }),
          (_.uniq = _.unique = function(t, e, n, r) {
            _.isBoolean(e) || ((r = n), (n = e), (e = !1)),
              null != n && (n = k(n, r))
            for (var i = [], o = [], s = 0, a = E(t); s < a; s++) {
              var c = t[s],
                u = n ? n(c, s, t) : c
              e
                ? ((s && o === u) || i.push(c), (o = u))
                : n
                ? _.contains(o, u) || (o.push(u), i.push(c))
                : _.contains(i, c) || i.push(c)
            }
            return i
          }),
          (_.union = function() {
            return _.uniq(D(arguments, !0, !0))
          }),
          (_.intersection = function(t) {
            for (
              var e = [], n = arguments.length, r = 0, i = E(t);
              r < i;
              r++
            ) {
              var o = t[r]
              if (!_.contains(e, o)) {
                for (var s = 1; s < n && _.contains(arguments[s], o); s++);
                s === n && e.push(o)
              }
            }
            return e
          }),
          (_.difference = function(t) {
            var e = D(arguments, !0, !0, 1)
            return _.filter(t, function(t) {
              return !_.contains(e, t)
            })
          }),
          (_.zip = function() {
            return _.unzip(arguments)
          }),
          (_.unzip = function(t) {
            for (
              var e = (t && _.max(t, E).length) || 0, n = Array(e), r = 0;
              r < e;
              r++
            )
              n[r] = _.pluck(t, r)
            return n
          }),
          (_.object = function(t, e) {
            for (var n = {}, r = 0, i = E(t); r < i; r++)
              e ? (n[t[r]] = e[r]) : (n[t[r][0]] = t[r][1])
            return n
          }),
          (_.findIndex = o(1)),
          (_.findLastIndex = o(-1)),
          (_.sortedIndex = function(t, e, n, r) {
            n = k(n, r, 1)
            for (var i = n(e), o = 0, s = E(t); o < s; ) {
              var a = Math.floor((o + s) / 2)
              n(t[a]) < i ? (o = a + 1) : (s = a)
            }
            return o
          }),
          (_.indexOf = s(1, _.findIndex, _.sortedIndex)),
          (_.lastIndexOf = s(-1, _.findLastIndex)),
          (_.range = function(t, e, n) {
            null == e && ((e = t || 0), (t = 0)), (n = n || 1)
            for (
              var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0;
              o < r;
              o++, t += n
            )
              i[o] = t
            return i
          })
        var B = function(t, e, n, r, i) {
          if (!(r instanceof e)) return t.apply(n, i)
          var o = C(t.prototype),
            s = t.apply(o, i)
          return _.isObject(s) ? s : o
        }
        ;(_.bind = function(t, e) {
          if (y && t.bind === y) return y.apply(t, d.call(arguments, 1))
          if (!_.isFunction(t))
            throw new TypeError('Bind must be called on a function')
          var n = d.call(arguments, 2),
            r = function() {
              return B(t, r, e, this, n.concat(d.call(arguments)))
            }
          return r
        }),
          (_.partial = function(t) {
            var e = d.call(arguments, 1),
              n = function() {
                for (var r = 0, i = e.length, o = Array(i), s = 0; s < i; s++)
                  o[s] = e[s] === _ ? arguments[r++] : e[s]
                for (; r < arguments.length; ) o.push(arguments[r++])
                return B(t, n, this, this, o)
              }
            return n
          }),
          (_.bindAll = function(t) {
            var e,
              n,
              r = arguments.length
            if (r <= 1) throw new Error('bindAll must be passed function names')
            for (e = 1; e < r; e++) (n = arguments[e]), (t[n] = _.bind(t[n], t))
            return t
          }),
          (_.memoize = function(t, e) {
            var n = function(r) {
              var i = n.cache,
                o = '' + (e ? e.apply(this, arguments) : r)
              return _.has(i, o) || (i[o] = t.apply(this, arguments)), i[o]
            }
            return (n.cache = {}), n
          }),
          (_.delay = function(t, e) {
            var n = d.call(arguments, 2)
            return setTimeout(function() {
              return t.apply(null, n)
            }, e)
          }),
          (_.defer = _.partial(_.delay, _, 1)),
          (_.throttle = function(t, e, n) {
            var r,
              i,
              o,
              s = null,
              a = 0
            n || (n = {})
            var c = function() {
              ;(a = !1 === n.leading ? 0 : _.now()),
                (s = null),
                (o = t.apply(r, i)),
                s || (r = i = null)
            }
            return function() {
              var u = _.now()
              a || !1 !== n.leading || (a = u)
              var l = e - (u - a)
              return (
                (r = this),
                (i = arguments),
                l <= 0 || l > e
                  ? (s && (clearTimeout(s), (s = null)),
                    (a = u),
                    (o = t.apply(r, i)),
                    s || (r = i = null))
                  : s || !1 === n.trailing || (s = setTimeout(c, l)),
                o
              )
            }
          }),
          (_.debounce = function(t, e, n) {
            var r,
              i,
              o,
              s,
              a,
              c = function() {
                var u = _.now() - s
                u < e && u >= 0
                  ? (r = setTimeout(c, e - u))
                  : ((r = null),
                    n || ((a = t.apply(o, i)), r || (o = i = null)))
              }
            return function() {
              ;(o = this), (i = arguments), (s = _.now())
              var u = n && !r
              return (
                r || (r = setTimeout(c, e)),
                u && ((a = t.apply(o, i)), (o = i = null)),
                a
              )
            }
          }),
          (_.wrap = function(t, e) {
            return _.partial(e, t)
          }),
          (_.negate = function(t) {
            return function() {
              return !t.apply(this, arguments)
            }
          }),
          (_.compose = function() {
            var t = arguments,
              e = t.length - 1
            return function() {
              for (var n = e, r = t[e].apply(this, arguments); n--; )
                r = t[n].call(this, r)
              return r
            }
          }),
          (_.after = function(t, e) {
            return function() {
              if (--t < 1) return e.apply(this, arguments)
            }
          }),
          (_.before = function(t, e) {
            var n
            return function() {
              return (
                --t > 0 && (n = e.apply(this, arguments)),
                t <= 1 && (e = null),
                n
              )
            }
          }),
          (_.once = _.partial(_.before, 2))
        var V = !{ toString: null }.propertyIsEnumerable('toString'),
          T = [
            'valueOf',
            'isPrototypeOf',
            'toString',
            'propertyIsEnumerable',
            'hasOwnProperty',
            'toLocaleString'
          ]
        ;(_.keys = function(t) {
          if (!_.isObject(t)) return []
          if (v) return v(t)
          var e = []
          for (var n in t) _.has(t, n) && e.push(n)
          return V && a(t, e), e
        }),
          (_.allKeys = function(t) {
            if (!_.isObject(t)) return []
            var e = []
            for (var n in t) e.push(n)
            return V && a(t, e), e
          }),
          (_.values = function(t) {
            for (
              var e = _.keys(t), n = e.length, r = Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = t[e[i]]
            return r
          }),
          (_.mapObject = function(t, e, n) {
            e = k(e, n)
            for (var r, i = _.keys(t), o = i.length, s = {}, a = 0; a < o; a++)
              (r = i[a]), (s[r] = e(t[r], r, t))
            return s
          }),
          (_.pairs = function(t) {
            for (
              var e = _.keys(t), n = e.length, r = Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = [e[i], t[e[i]]]
            return r
          }),
          (_.invert = function(t) {
            for (var e = {}, n = _.keys(t), r = 0, i = n.length; r < i; r++)
              e[t[n[r]]] = n[r]
            return e
          }),
          (_.functions = _.methods = function(t) {
            var e = []
            for (var n in t) _.isFunction(t[n]) && e.push(n)
            return e.sort()
          }),
          (_.extend = x(_.allKeys)),
          (_.extendOwn = _.assign = x(_.keys)),
          (_.findKey = function(t, e, n) {
            e = k(e, n)
            for (var r, i = _.keys(t), o = 0, s = i.length; o < s; o++)
              if (((r = i[o]), e(t[r], r, t))) return r
          }),
          (_.pick = function(t, e, n) {
            var r,
              i,
              o = {},
              s = t
            if (null == s) return o
            _.isFunction(e)
              ? ((i = _.allKeys(s)), (r = S(e, n)))
              : ((i = D(arguments, !1, !1, 1)),
                (r = function(t, e, n) {
                  return e in n
                }),
                (s = Object(s)))
            for (var a = 0, c = i.length; a < c; a++) {
              var u = i[a],
                l = s[u]
              r(l, u, s) && (o[u] = l)
            }
            return o
          }),
          (_.omit = function(t, e, n) {
            if (_.isFunction(e)) e = _.negate(e)
            else {
              var r = _.map(D(arguments, !1, !1, 1), String)
              e = function(t, e) {
                return !_.contains(r, e)
              }
            }
            return _.pick(t, e, n)
          }),
          (_.defaults = x(_.allKeys, !0)),
          (_.create = function(t, e) {
            var n = C(t)
            return e && _.extendOwn(n, e), n
          }),
          (_.clone = function(t) {
            return _.isObject(t)
              ? _.isArray(t)
                ? t.slice()
                : _.extend({}, t)
              : t
          }),
          (_.tap = function(t, e) {
            return e(t), t
          }),
          (_.isMatch = function(t, e) {
            var n = _.keys(e),
              r = n.length
            if (null == t) return !r
            for (var i = Object(t), o = 0; o < r; o++) {
              var s = n[o]
              if (e[s] !== i[s] || !(s in i)) return !1
            }
            return !0
          })
        var F = function(t, e, n, r) {
          if (t === e) return 0 !== t || 1 / t == 1 / e
          if (null == t || null == e) return t === e
          t instanceof _ && (t = t._wrapped), e instanceof _ && (e = e._wrapped)
          var i = A.call(t)
          if (i !== A.call(e)) return !1
          switch (i) {
            case '[object RegExp]':
            case '[object String]':
              return '' + t == '' + e
            case '[object Number]':
              return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e
            case '[object Date]':
            case '[object Boolean]':
              return +t == +e
          }
          var o = '[object Array]' === i
          if (!o) {
            if ('object' != typeof t || 'object' != typeof e) return !1
            var s = t.constructor,
              a = e.constructor
            if (
              s !== a &&
              !(
                _.isFunction(s) &&
                s instanceof s &&
                _.isFunction(a) &&
                a instanceof a
              ) &&
              'constructor' in t &&
              'constructor' in e
            )
              return !1
          }
          ;(n = n || []), (r = r || [])
          for (var c = n.length; c--; ) if (n[c] === t) return r[c] === e
          if ((n.push(t), r.push(e), o)) {
            if ((c = t.length) !== e.length) return !1
            for (; c--; ) if (!F(t[c], e[c], n, r)) return !1
          } else {
            var u,
              l = _.keys(t)
            if (((c = l.length), _.keys(e).length !== c)) return !1
            for (; c--; )
              if (((u = l[c]), !_.has(e, u) || !F(t[u], e[u], n, r))) return !1
          }
          return n.pop(), r.pop(), !0
        }
        ;(_.isEqual = function(t, e) {
          return F(t, e)
        }),
          (_.isEmpty = function(t) {
            return (
              null == t ||
              (M(t) && (_.isArray(t) || _.isString(t) || _.isArguments(t))
                ? 0 === t.length
                : 0 === _.keys(t).length)
            )
          }),
          (_.isElement = function(t) {
            return !(!t || 1 !== t.nodeType)
          }),
          (_.isArray =
            m ||
            function(t) {
              return '[object Array]' === A.call(t)
            }),
          (_.isObject = function(t) {
            var e = typeof t
            return 'function' === e || ('object' === e && !!t)
          }),
          _.each(
            [
              'Arguments',
              'Function',
              'String',
              'Number',
              'Date',
              'RegExp',
              'Error'
            ],
            function(t) {
              _['is' + t] = function(e) {
                return A.call(e) === '[object ' + t + ']'
              }
            }
          ),
          _.isArguments(arguments) ||
            (_.isArguments = function(t) {
              return _.has(t, 'callee')
            }),
          'function' != typeof /./ &&
            'object' != typeof Int8Array &&
            (_.isFunction = function(t) {
              return 'function' == typeof t || !1
            }),
          (_.isFinite = function(t) {
            return isFinite(t) && !isNaN(parseFloat(t))
          }),
          (_.isNaN = function(t) {
            return _.isNumber(t) && t !== +t
          }),
          (_.isBoolean = function(t) {
            return !0 === t || !1 === t || '[object Boolean]' === A.call(t)
          }),
          (_.isNull = function(t) {
            return null === t
          }),
          (_.isUndefined = function(t) {
            return void 0 === t
          }),
          (_.has = function(t, e) {
            return null != t && g.call(t, e)
          }),
          (_.noConflict = function() {
            return (c._ = u), this
          }),
          (_.identity = function(t) {
            return t
          }),
          (_.constant = function(t) {
            return function() {
              return t
            }
          }),
          (_.noop = function() {}),
          (_.property = O),
          (_.propertyOf = function(t) {
            return null == t
              ? function() {}
              : function(e) {
                  return t[e]
                }
          }),
          (_.matcher = _.matches = function(t) {
            return (
              (t = _.extendOwn({}, t)),
              function(e) {
                return _.isMatch(e, t)
              }
            )
          }),
          (_.times = function(t, e, n) {
            var r = Array(Math.max(0, t))
            e = S(e, n, 1)
            for (var i = 0; i < t; i++) r[i] = e(i)
            return r
          }),
          (_.random = function(t, e) {
            return (
              null == e && ((e = t), (t = 0)),
              t + Math.floor(Math.random() * (e - t + 1))
            )
          }),
          (_.now =
            Date.now ||
            function() {
              return new Date().getTime()
            })
        var N = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '`': '&#x60;'
          },
          j = _.invert(N),
          P = function(t) {
            var e = function(e) {
                return t[e]
              },
              n = '(?:' + _.keys(t).join('|') + ')',
              r = RegExp(n),
              i = RegExp(n, 'g')
            return function(t) {
              return (
                (t = null == t ? '' : '' + t), r.test(t) ? t.replace(i, e) : t
              )
            }
          }
        ;(_.escape = P(N)),
          (_.unescape = P(j)),
          (_.result = function(t, e, n) {
            var r = null == t ? void 0 : t[e]
            return void 0 === r && (r = n), _.isFunction(r) ? r.call(t) : r
          })
        var U = 0
        ;(_.uniqueId = function(t) {
          var e = ++U + ''
          return t ? t + e : e
        }),
          (_.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
          })
        var L = /(.)^/,
          G = {
            "'": "'",
            '\\': '\\',
            '\r': 'r',
            '\n': 'n',
            '\u2028': 'u2028',
            '\u2029': 'u2029'
          },
          Q = /\\|'|\r|\n|\u2028|\u2029/g,
          H = function(t) {
            return '\\' + G[t]
          }
        ;(_.template = function(t, e, n) {
          !e && n && (e = n), (e = _.defaults({}, e, _.templateSettings))
          var r = RegExp(
              [
                (e.escape || L).source,
                (e.interpolate || L).source,
                (e.evaluate || L).source
              ].join('|') + '|$',
              'g'
            ),
            i = 0,
            o = "__p+='"
          t.replace(r, function(e, n, r, s, a) {
            return (
              (o += t.slice(i, a).replace(Q, H)),
              (i = a + e.length),
              n
                ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : r
                ? (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                : s && (o += "';\n" + s + "\n__p+='"),
              e
            )
          }),
            (o += "';\n"),
            e.variable || (o = 'with(obj||{}){\n' + o + '}\n'),
            (o =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              o +
              'return __p;\n')
          try {
            var s = new Function(e.variable || 'obj', '_', o)
          } catch (t) {
            throw ((t.source = o), t)
          }
          var a = function(t) {
            return s.call(this, t, _)
          }
          return (
            (a.source = 'function(' + (e.variable || 'obj') + '){\n' + o + '}'),
            a
          )
        }),
          (_.chain = function(t) {
            var e = _(t)
            return (e._chain = !0), e
          })
        var q = function(t, e) {
          return t._chain ? _(e).chain() : e
        }
        ;(_.mixin = function(t) {
          _.each(_.functions(t), function(e) {
            var n = (_[e] = t[e])
            _.prototype[e] = function() {
              var t = [this._wrapped]
              return h.apply(t, arguments), q(this, n.apply(_, t))
            }
          })
        }),
          _.mixin(_),
          _.each(
            ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'],
            function(t) {
              var e = l[t]
              _.prototype[t] = function() {
                var n = this._wrapped
                return (
                  e.apply(n, arguments),
                  ('shift' !== t && 'splice' !== t) ||
                    0 !== n.length ||
                    delete n[0],
                  q(this, n)
                )
              }
            }
          ),
          _.each(['concat', 'join', 'slice'], function(t) {
            var e = l[t]
            _.prototype[t] = function() {
              return q(this, e.apply(this._wrapped, arguments))
            }
          }),
          (_.prototype.value = function() {
            return this._wrapped
          }),
          (_.prototype.valueOf = _.prototype.toJSON = _.prototype.value),
          (_.prototype.toString = function() {
            return '' + this._wrapped
          }),
          (r = []),
          void 0 !==
            (i = function() {
              return _
            }.apply(e, r)) && (t.exports = i)
      }.call(this))
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        return new Promise(function(e, n) {
          function r(o, s) {
            try {
              if (s && ('object' == typeof s || 'function' == typeof s)) {
                var a = s.then
                if ('function' == typeof a)
                  return void a.call(
                    s,
                    function(t) {
                      return r(o, t)
                    },
                    n
                  )
              }
              ;(t[o] = s), 0 == --i && e(t)
            } catch (t) {
              n(t)
            }
          }
          if (0 === t.length) return e([])
          for (var i = t.length, o = 0; o < t.length; o++) r(o, t[o])
        })
      }
      function i(t) {
        var e,
          n = new Promise(function(t, n) {
            e = { reject: n, resolve: t }
          })
        return (e.promise = n), arguments.length > 0 && e.resolve(t), e
      }
      function o(t) {
        return new Promise(function(e, n) {
          return n(t)
        })
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var s = n(16)
      'undefined' == typeof window || window.Promise || (window.Promise = s),
        (e.PromiseAll = r),
        (e.newDeferred = i),
        (e.rejected = o)
    },
    function(t, e, n) {
      'use strict'
      var r = n(0),
        i = (function() {
          function t() {
            if (!(this instanceof t)) return new t()
            ;(this.trace = r.bind(this._log, this, t.TRACE)),
              (this.debug = r.bind(this._log, this, t.DEBUG)),
              (this.info = r.bind(this._log, this, t.INFO)),
              (this.warn = r.bind(this._log, this, t.WARN)),
              (this.error = r.bind(this._log, this, t.ERROR)),
              (this.logLevel = t.ERROR)
          }
          return (
            (t.prototype.setLogLevel = function(t) {
              this.logLevel = t
            }),
            (t.prototype._log = function(t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]
              this.logLevel >= t &&
                (window.console && console.log(e),
                window.jash && window.jash.dump(e))
            }),
            (t.prototype.trace = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
            }),
            (t.prototype.debug = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
            }),
            (t.prototype.info = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
            }),
            (t.prototype.warn = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
            }),
            (t.prototype.error = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
            }),
            (t.get = function() {
              throw new Error('Not configured')
            }),
            (t.TRACE = 5),
            (t.DEBUG = 4),
            (t.INFO = 3),
            (t.WARN = 2),
            (t.ERROR = 1),
            t
          )
        })(),
        o = new i()
      ;(i.get = function() {
        return o
      }),
        (function(t) {
          var e = (function() {
            function e(e, n) {
              void 0 === e && (e = 'LogTimer'),
                void 0 === n && (n = t.INFO),
                (this.name = e),
                (this.level = n),
                (this.start = Date.now()),
                (this.count = 0)
            }
            return (
              (e.prototype.log = function(t, e) {
                o._log(this.level, this.name + ': ' + (e || '') + ' ' + t)
              }),
              (e.prototype.ping = function() {
                this.count++
              }),
              (e.prototype.reset = function(t) {
                ;(this.count = 0), (this.start = Date.now()), t && this.log(t)
              }),
              (e.prototype.getSeconds = function() {
                return (Date.now() - this.start) / 1e3
              }),
              (e.prototype.logNow = function(t) {
                var e = this.getSeconds() + ' seconds'
                if (this.count) {
                  e +=
                    ' @' + this.count / this.getSeconds() + ' calls per second'
                }
                this.log(e, t)
              }),
              e
            )
          })()
          t.LogTimer = e
        })(i || (i = {})),
        (t.exports = i)
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = (function() {
        function t() {
          this._callbacks = {}
        }
        return (
          (t.prototype.bind = function(t, e, n) {
            var r = this._callbacks
            return (r[t] || (r[t] = [])).push([e, n]), this
          }),
          (t.prototype.unbind = function(t, e) {
            var n = this._callbacks
            if (t) {
              if (n)
                if (e) {
                  var r = n[t]
                  if (!r) return this
                  for (var i = 0, o = r.length; i < o; i++)
                    if (r[i] && e === r[i][0]) {
                      r[i] = null
                      break
                    }
                } else n[t] = []
            } else this._callbacks = {}
            return this
          }),
          (t.prototype.trigger = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n]
            var r = this._callbacks,
              i = 2
            if (!r) return this
            for (; i--; ) {
              var o = i ? t : 'all',
                s = r[o]
              if (s)
                for (var a = 0, c = s.length; a < c; a++) {
                  var u = s[a]
                  u
                    ? ((e = i
                        ? Array.prototype.slice.call(arguments, 1)
                        : arguments),
                      u[0].apply(u[1] || this, e))
                    : (s.splice(a, 1), a--, c--)
                }
            }
            return this
          }),
          t
        )
      })()
      e.ClassTS = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(129)
      e.ScanBlocks = r
      var i = n(125)
      e.InterpretedScan = i
      var o = n(133)
      e.StructuredScan = o
      var s = n(10)
      e.FormDescription = s
      var a = n(51)
      e.FormMode = a
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        return i(this, void 0, void 0, function() {
          var e, n
          return o(this, function(i) {
            switch (i.label) {
              case 0:
                return i.trys.push([0, 2, , 3]), [4, s.detect()]
              case 1:
                return (e = i.sent()), (u.installed = e), [3, 3]
              case 2:
                return (
                  (n = i.sent()),
                  (u.installed = !!u.installed),
                  t && 'timeout' == n && r(t - 1),
                  [3, 3]
                )
              case 3:
                return [2]
            }
          })
        })
      }
      var i =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        s = n(53),
        a = n(1)
      n(16),
        (navigator.getUserMedia =
          navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia),
        (window.requestAnimationFrame =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame),
        !window.URL && window.webkitURL && (window.URL = window.webkitURL)
      var c =
          window.File &&
          window.FileReader &&
          window.FileList &&
          window.Blob &&
          window.URL &&
          window.URL.createObjectURL,
        u = {
          ext_installed: s.ext_installed,
          installed: void 0,
          waitForPlugin: s.watchForInstall,
          supported: s.supported
        },
        l = a.newDeferred(),
        p = {
          userMedia:
            !!navigator.getUserMedia ||
            (navigator.mediaDevices && !!navigator.mediaDevices.getUserMedia),
          webWorker: !!window.Worker,
          reqAnimFrame: !!window.requestAnimationFrame,
          fileSupport: !!c,
          plugin2: u,
          readyDfd: l.promise
        }
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        var f =
          navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia
        f &&
          (navigator.mediaDevices || (navigator.mediaDevices = {}),
          (navigator.mediaDevices.getUserMedia = function(t) {
            return new Promise(function(e, n) {
              return f.call(navigator, t, e, n)
            })
          }))
      }
      var h = null
      u.ext_installed
        ? ((h = r(3)),
          h
            .catch(function(t) {
              return (u.installed = !1)
            })
            .then(function() {
              return l.resolve()
            }))
        : l.resolve(),
        (t.exports = p)
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        return t.reduce(function(t, e) {
          return t.concat(e instanceof u.UnsubscriptionError ? e.errors : e)
        }, [])
      }
      var i = n(78),
        o = n(79),
        s = n(39),
        a = n(81),
        c = n(38),
        u = n(77),
        l = (function() {
          function t(t) {
            ;(this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              t && (this._unsubscribe = t)
          }
          return (
            (t.prototype.unsubscribe = function() {
              var t,
                e = !1
              if (!this.closed) {
                var n = this,
                  l = n._parent,
                  p = n._parents,
                  f = n._unsubscribe,
                  h = n._subscriptions
                ;(this.closed = !0),
                  (this._parent = null),
                  (this._parents = null),
                  (this._subscriptions = null)
                for (var d = -1, A = p ? p.length : 0; l; )
                  l.remove(this), (l = (++d < A && p[d]) || null)
                if (s.isFunction(f)) {
                  var g = a.tryCatch(f).call(this)
                  g === c.errorObject &&
                    ((e = !0),
                    (t =
                      t ||
                      (c.errorObject.e instanceof u.UnsubscriptionError
                        ? r(c.errorObject.e.errors)
                        : [c.errorObject.e])))
                }
                if (i.isArray(h))
                  for (d = -1, A = h.length; ++d < A; ) {
                    var m = h[d]
                    if (o.isObject(m)) {
                      var g = a.tryCatch(m.unsubscribe).call(m)
                      if (g === c.errorObject) {
                        ;(e = !0), (t = t || [])
                        var v = c.errorObject.e
                        v instanceof u.UnsubscriptionError
                          ? (t = t.concat(r(v.errors)))
                          : t.push(v)
                      }
                    }
                  }
                if (e) throw new u.UnsubscriptionError(t)
              }
            }),
            (t.prototype.add = function(e) {
              if (!e || e === t.EMPTY) return t.EMPTY
              if (e === this) return this
              var n = e
              switch (typeof e) {
                case 'function':
                  n = new t(e)
                case 'object':
                  if (n.closed || 'function' != typeof n.unsubscribe) return n
                  if (this.closed) return n.unsubscribe(), n
                  if ('function' != typeof n._addParent) {
                    var r = n
                    ;(n = new t()), (n._subscriptions = [r])
                  }
                  break
                default:
                  throw new Error(
                    'unrecognized teardown ' + e + ' added to Subscription.'
                  )
              }
              return (
                (this._subscriptions || (this._subscriptions = [])).push(n),
                n._addParent(this),
                n
              )
            }),
            (t.prototype.remove = function(t) {
              var e = this._subscriptions
              if (e) {
                var n = e.indexOf(t)
                ;-1 !== n && e.splice(n, 1)
              }
            }),
            (t.prototype._addParent = function(t) {
              var e = this,
                n = e._parent,
                r = e._parents
              n && n !== t
                ? r
                  ? -1 === r.indexOf(t) && r.push(t)
                  : (this._parents = [t])
                : (this._parent = t)
            }),
            (t.EMPTY = (function(t) {
              return (t.closed = !0), t
            })(new t())),
            t
          )
        })()
      e.Subscription = l
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        i = n(17),
        o = n(75),
        s = n(6),
        a = n(69),
        c = n(20),
        u = n(37),
        l = (function(t) {
          function e(e, n, r) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              void 0 === n && (n = Number.POSITIVE_INFINITY),
              t.call(this),
              (this.scheduler = r),
              (this._events = []),
              (this._bufferSize = e < 1 ? 1 : e),
              (this._windowTime = n < 1 ? 1 : n)
          }
          return (
            r(e, t),
            (e.prototype.next = function(e) {
              var n = this._getNow()
              this._events.push(new p(n, e)),
                this._trimBufferThenGetEvents(),
                t.prototype.next.call(this, e)
            }),
            (e.prototype._subscribe = function(t) {
              var e,
                n = this._trimBufferThenGetEvents(),
                r = this.scheduler
              if (this.closed) throw new c.ObjectUnsubscribedError()
              this.hasError
                ? (e = s.Subscription.EMPTY)
                : this.isStopped
                ? (e = s.Subscription.EMPTY)
                : (this.observers.push(t),
                  (e = new u.SubjectSubscription(this, t))),
                r && t.add((t = new a.ObserveOnSubscriber(t, r)))
              for (var i = n.length, o = 0; o < i && !t.closed; o++)
                t.next(n[o].value)
              return (
                this.hasError
                  ? t.error(this.thrownError)
                  : this.isStopped && t.complete(),
                e
              )
            }),
            (e.prototype._getNow = function() {
              return (this.scheduler || o.queue).now()
            }),
            (e.prototype._trimBufferThenGetEvents = function() {
              for (
                var t = this._getNow(),
                  e = this._bufferSize,
                  n = this._windowTime,
                  r = this._events,
                  i = r.length,
                  o = 0;
                o < i && !(t - r[o].time < n);

              )
                o++
              return (
                i > e && (o = Math.max(o, i - e)), o > 0 && r.splice(0, o), r
              )
            }),
            e
          )
        })(i.Subject)
      e.ReplaySubject = l
      var p = (function() {
        function t(t, e) {
          ;(this.time = t), (this.value = e)
        }
        return t
      })()
    },
    function(t, e, n) {
      'use strict'
      ;(function(t) {
        var n = 'undefined' != typeof window && window,
          r =
            'undefined' != typeof self &&
            'undefined' != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            self,
          i = void 0 !== t && t,
          o = n || i || r
        ;(e.root = o),
          (function() {
            if (!o)
              throw new Error(
                'RxJS could not find any global context (window, self, global)'
              )
          })()
      }.call(e, n(29)))
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        i = (function() {
          function t(e) {
            void 0 === e && (e = {}),
              (this.choices = this.choices || []),
              r.defaults(e, t.defaults)
            for (var n = r.keys(e), i = 0, o = n; i < o.length; i++) {
              var s = o[i]
              this[s] = e[s]
            }
          }
          return (
            Object.defineProperty(t.prototype, 'label', {
              get: function() {
                return this._label
              },
              set: function(t) {
                this._label = String(t)
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.defaults = { ignore: !1 }),
            t
          )
        })()
      e.ItemDescription = i
    },
    function(t, e, n) {
      'use strict'
      var r = n(117)
      t.exports = r.FormDescription
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        i = (function() {
          function t(t) {
            void 0 === t && (t = {})
            for (var e = r.keys(t), n = 0, i = e; n < i.length; n++) {
              var o = i[n]
              this[o] = t[o]
            }
          }
          return t
        })()
      e.Item = i
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }
          return function(e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })()
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = (function(t) {
        function e(e) {
          var n = this.constructor,
            r = t.call(this, 'The plugin is not installed') || this
          ;(r.status = e), (r.name = 'NeedsInstallError')
          var i = n.prototype
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(r, i)
              : (r.__proto__ = i),
            r
          )
        }
        return (
          r(e, t),
          (e.prototype.getStatus = function() {
            return this.status
          }),
          (e.prototype.toString = function() {
            return this.message
          }),
          e
        )
      })(Error)
      e.NeedsInstallError = i
      var o = (function(t) {
        function e(e) {
          var n = this.constructor,
            r = t.call(this, e) || this
          r.name = 'UnsupportedError'
          var i = n.prototype
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(r, i)
              : (r.__proto__ = i),
            r
          )
        }
        return r(e, t), e
      })(Error)
      e.UnsupportedError = o
      var s = (function(t) {
        function e(e) {
          var n = this.constructor,
            r = t.call(this, e) || this
          r.name = 'UnauthenticatedError'
          var i = n.prototype
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(r, i)
              : (r.__proto__ = i),
            r
          )
        }
        return r(e, t), e
      })(Error)
      e.UnauthenticatedError = s
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        window.requestAnimationFrame
          ? window.requestAnimationFrame(function(e) {
              4 == ++f ? ((f = 0), t(e)) : r(t)
            })
          : setTimeout(t, 1e3 / 15)
      }
      var i =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        s = n(7),
        a = n(0),
        c = n(2),
        u = n(3),
        l = n(1),
        p = n(21),
        f = 0,
        h = c.get(),
        d = (function() {
          function t(t, e, n, r) {
            var i = this
            ;(this.el = t),
              (this.video = this.el.getElementsByTagName('video')[0]),
              (this.image = this.el.getElementsByTagName('img')[0]),
              (this.activeInput = null),
              (this.triggeredLoop = !1),
              (this.evtBus = new u.ClassTS()),
              (this.stream = null),
              (this.connected = !1),
              (this.drawn = !1),
              (this.loopRunning = !1),
              (this.paused = !1),
              (this.camera = null),
              (this.rotate = p.CameraRotate.None),
              (this.cameraList = []),
              (this.cameraMap = {}),
              (this.p2Cameras = {}),
              (this.lastWidth = 0),
              (this.lastHeight = 0),
              (this.jpegDfd = null),
              (this.plugin2 = null),
              (this.currentCameraInfo = new s.ReplaySubject(1)),
              (this.fpsTimer = new c.LogTimer('Video FPS timer', c.INFO)),
              (this.bind = a.bind(this.evtBus.bind, this.evtBus)),
              (this.unbind = a.bind(this.evtBus.unbind, this.evtBus))
            var o = l.PromiseAll([e, n]).then(function(t) {
              var e = t[0],
                n = t[1]
              return (i.imageHandler = e), (i.blitter = n), !0
            })
            this._readyDfd = l.PromiseAll([r, o]).then(function(t) {
              var r = t[0]
              t[1]
              return (
                (i.plugin2 = r),
                r &&
                  r.setImageCallback(function(t) {
                    return i.imageDrawCallback(t)
                  }),
                l.PromiseAll([i._detectCameraList(), e, n])
              )
            })
          }
          return (
            (t.prototype._detectCameraList = function() {
              return i(this, void 0, void 0, function() {
                var t,
                  e,
                  n,
                  r,
                  i,
                  s,
                  a,
                  c,
                  u,
                  p,
                  f,
                  d,
                  A,
                  g,
                  m,
                  v,
                  y,
                  b,
                  w,
                  _,
                  S,
                  k,
                  x,
                  C,
                  A,
                  O,
                  I,
                  E,
                  M,
                  A,
                  R
                return o(this, function(o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (t = l.newDeferred()),
                        (e = this.plugin2),
                        (n = []),
                        (r = {}),
                        (i = {}),
                        (s = 1),
                        e ? [4, e.getCameraList()] : [3, 2]
                      )
                    case 1:
                      return (c = o.sent()), [3, 3]
                    case 2:
                      ;(c = '[]'), (o.label = 3)
                    case 3:
                      a = c
                      try {
                        u = a ? JSON.parse(a) : []
                      } catch (t) {
                        u = []
                      }
                      if (
                        !navigator.mediaDevices ||
                        !navigator.mediaDevices.enumerateDevices
                      )
                        return [3, 8]
                      o.label = 4
                    case 4:
                      return (
                        o.trys.push([4, 6, , 7]),
                        [4, navigator.mediaDevices.enumerateDevices()]
                      )
                    case 5:
                      p = o.sent()
                      try {
                        for (f = 0, d = p; f < d.length; f++)
                          (A = d[f]),
                            'videoinput' == A.kind &&
                              ((g = 'camera ' + s),
                              (m = A.label || g),
                              (r[m] = A.deviceId),
                              (r[g] = A.deviceId),
                              n.push(m),
                              s++)
                      } catch (t) {
                        h.error('Error processing mediaDevices list')
                      }
                      try {
                        ;(u || []).forEach(function(t) {
                          var e = 'GC: ' + t
                          ;(i[e] = t), n.push(e)
                        })
                      } catch (t) {
                        h.error("Couldn't process plugin2 camera list")
                      }
                      return (
                        (this.cameraList = n),
                        (this.cameraMap = r),
                        (this.p2Cameras = i),
                        [3, 7]
                      )
                    case 6:
                      return (
                        (v = o.sent()),
                        h.error('Error detecting camera list'),
                        (this.cameraList = ['Default Camera']),
                        (this.cameraMap['Default Camera'] = ''),
                        (this.p2Cameras = {}),
                        h.error(v.name + ': ' + v.message),
                        [3, 7]
                      )
                    case 7:
                      return t.resolve(n), [3, 14]
                    case 8:
                      if (
                        !window.MediaStreamTrack ||
                        !window.MediaStreamTrack.getSources
                      )
                        return [3, 13]
                      ;(y = l.newDeferred()),
                        window.MediaStreamTrack.getSources(function(t) {
                          y.resolve(t)
                        }),
                        (o.label = 9)
                    case 9:
                      return o.trys.push([9, 11, , 12]), [4, y.promise]
                    case 10:
                      for (b = o.sent(), w = 0, _ = b; w < _.length; w++)
                        (S = _[w]),
                          'video' == S.kind &&
                            ((k = 'camera ' + s),
                            'user' == S.facing
                              ? (k = 'Front Camera ' + s)
                              : 'environment' == S.facing &&
                                (k = 'Rear Camera ' + s),
                            (r[k] = S.id),
                            n.push(k),
                            s++)
                      try {
                        for (x = 0, C = u || []; x < C.length; x++)
                          (A = C[x]), (O = 'GC: ' + A), (i[O] = A), n.push(O)
                      } catch (t) {
                        h.error("Couldn't process plugin2 camera list")
                      }
                      return (
                        (this.cameraList = n), (this.cameraMap = r), [3, 12]
                      )
                    case 11:
                      return (
                        (I = o.sent()),
                        h.error('Could not process media sources:', I.message),
                        [3, 12]
                      )
                    case 12:
                      return t.resolve(n), [3, 14]
                    case 13:
                      for (
                        n = ['Default Camera'],
                          r['Default Camera'] = '',
                          E = 0,
                          M = u || [];
                        E < M.length;
                        E++
                      )
                        (A = M[E]), (R = 'GC: ' + A), (i[R] = A), n.push(R)
                      ;(this.cameraList = n),
                        (this.cameraMap = r),
                        (this.p2Cameras = i),
                        t.resolve(n),
                        (o.label = 14)
                    case 14:
                      return [2, t.promise]
                  }
                })
              })
            }),
            (t.prototype.drawLoop = function() {
              var t = this
              if (!this.connected || !this.activeInput)
                return void (this.loopRunning = !1)
              if (!this.paused) {
                this.loopRunning = !0
                var e = this.activeInput,
                  n = this.blitter,
                  i = this.fpsTimer,
                  o = e.videoWidth || e.naturalWidth,
                  s = e.videoHeight || e.naturalHeight
                if (o && s) {
                  var c = n.drawVideo(e, this.rotate)
                  if (
                    (this.updateVideoSize(c.w, c.h),
                    (this.drawn = !0),
                    this.imageHandler.readyForFrame())
                  ) {
                    this.fpsTimer.ping()
                    var u = n.getVideoPixels(),
                      l = n.isHighRes()
                    a.defer(function() {
                      t.imageHandler.processFrame(u, !1, l)
                    }),
                      this.jpegDfd &&
                        (this.jpegDfd.resolve(n.getJPEGImage()),
                        (this.jpegDfd = null))
                  }
                  n.drawRects(this.rotate)
                }
                i.getSeconds() > 10 && (i.logNow(), i.reset()),
                  this.triggeredLoop ||
                    r(function(e) {
                      return t.drawLoop()
                    })
              }
            }),
            (t.prototype.imageDrawCallback = function(t) {
              var e = this
              ;(this.image.src = t),
                this.triggeredLoop &&
                  r(function(t) {
                    return e.drawLoop()
                  })
            }),
            (t.prototype.updateVideoSize = function(t, e) {
              ;(this.lastWidth == t && this.lastHeight == e) ||
                (this.currentCameraInfo.next({
                  width: t,
                  height: e,
                  supportsHighRes: t * e > 48e4
                }),
                this.evtBus.trigger('videoSize', t, e)),
                (this.lastWidth = t),
                (this.lastHeight = e)
            }),
            (t.prototype.getCameraList = function() {
              return JSON.stringify(this.cameraList)
            }),
            (t.prototype.setRotate = function(t) {
              this.rotate = t
            }),
            (t.prototype.setHTML5Camera = function(t) {
              return i(this, void 0, void 0, function() {
                var e,
                  n,
                  i,
                  s,
                  a,
                  c,
                  u,
                  l,
                  p,
                  f = this
                return o(this, function(o) {
                  switch (o.label) {
                    case 0:
                      ;(this.camera = t),
                        (e = this.cameraMap),
                        (i = !0),
                        (n = i
                          ? {
                              audio: !1,
                              video: {
                                advanced: [
                                  {
                                    width: { min: 1600 },
                                    height: { min: 1200 }
                                  },
                                  {
                                    width: { min: 1920 },
                                    height: { min: 1080 }
                                  },
                                  {
                                    width: { min: 1280 },
                                    height: { min: 760 }
                                  },
                                  { width: { min: 800 }, height: { min: 600 } },
                                  { width: { min: 640 }, height: { min: 480 } }
                                ]
                              }
                            }
                          : { audio: !1, video: { width: 640, height: 480 } }),
                        t &&
                          '' !== e[t] &&
                          (n.video.deviceId = { exact: e[t] }),
                        (o.label = 1)
                    case 1:
                      return (
                        o.trys.push([1, 7, , 8]),
                        [4, navigator.mediaDevices.getUserMedia(n)]
                      )
                    case 2:
                      ;(s = o.sent()),
                        (a = this.video),
                        (this.stream = s),
                        (c = window.URL || window.webkitURL),
                        'srcObject' in a
                          ? (a.srcObject = s)
                          : (a.src = c ? c.createObjectURL(s) : s),
                        (o.label = 3)
                    case 3:
                      return o.trys.push([3, 5, , 6]), [4, a.play()]
                    case 4:
                      return o.sent(), [3, 6]
                    case 5:
                      return (
                        (u = o.sent()),
                        console.error('Camera display error', u),
                        [3, 6]
                      )
                    case 6:
                      return (
                        (this.activeInput = a),
                        (this.connected = !0),
                        (this.triggeredLoop = !1),
                        this.loopRunning ||
                          r(function() {
                            return f.drawLoop()
                          }),
                        [3, 8]
                      )
                    case 7:
                      return (
                        (l = o.sent()),
                        (p = t || 'your default camera'),
                        'ConstraintNotSatisfiedError' === l.name
                          ? alert(
                              "Your browser could not connect to '" +
                                p +
                                "': scanning with this device is not supported"
                            )
                          : 'PermissionDeniedError' === l.name
                          ? alert(
                              "The user has denied permission for connecting to '" +
                                p +
                                "'. To scan, refresh the page and allow camera access."
                            )
                          : 'NotAllowedError' === l.name
                          ? alert(
                              'The browser will not allow us to access ' +
                                p +
                                '. The error message reported is: ' +
                                l.name +
                                ' - ' +
                                l.message
                            )
                          : alert(
                              'Could not connect to ' +
                                p +
                                ': ' +
                                l.name +
                                ' - ' +
                                l.message
                            ),
                        [3, 8]
                      )
                    case 8:
                      return [2]
                  }
                })
              })
            }),
            (t.prototype.setPlugin2Camera = function(t) {
              ;(this.triggeredLoop = !0),
                (this.activeInput = this.image),
                (this.camera = t),
                (this.connected = !0),
                this.plugin2.setCamera(this.p2Cameras[t])
            }),
            (t.prototype.setCamera = function(t) {
              ;(null !== this.camera && this.camera == t) ||
                (this.stopCamera(),
                this.p2Cameras[t]
                  ? this.setPlugin2Camera(t)
                  : this.setHTML5Camera(t))
            }),
            (t.prototype.pause = function() {
              this.paused = !0
            }),
            (t.prototype.unpause = function() {
              this.paused = !1
            }),
            (t.prototype.stopCamera = function() {
              if (
                (this.plugin2 &&
                  this.plugin2.stopCamera &&
                  this.plugin2.stopCamera(),
                (this.video.src = ''),
                (this.image.src = ''),
                (this.activeInput = null),
                this.stream && this.stream.getTracks)
              )
                for (
                  var t = 0, e = this.stream.getTracks();
                  t < e.length;
                  t++
                ) {
                  var n = e[t]
                  n.stop()
                }
              else this.stream && this.stream.stop && this.stream.stop()
              this.blitter.clearVideo(),
                (this.connected = !1),
                (this.camera = null),
                (this.drawn = !1)
            }),
            (t.prototype.getJpegDfd = function() {
              return this.drawn
                ? (this.jpegDfd || (this.jpegDfd = l.newDeferred()),
                  this.jpegDfd.promise)
                : l.newDeferred(!1).promise
            }),
            (t.create = function(t, e, n, r) {
              return i(this, void 0, void 0, function() {
                var i
                return o(this, function(o) {
                  switch (o.label) {
                    case 0:
                      return (i = new this(t, e, n, r)), [4, i._readyDfd]
                    case 1:
                      return o.sent(), [2, i]
                  }
                })
              })
            }),
            t
          )
        })()
      !(function(t) {
        t.Rotate = p.CameraRotate
      })(d || (d = {})),
        (t.exports = d)
    },
    function(t, e, n) {
      'use strict'
      var r = {
          '0_sm': n(153).trim(),
          '1_sm': n(154).trim(),
          '2_sm': n(155).trim(),
          '3_sm': n(156).trim(),
          '4_sm': n(157).trim(),
          '5_sm': n(158).trim(),
          '6_sm': n(159).trim(),
          '7_sm': n(160).trim(),
          '8_sm': n(161).trim(),
          '9_sm': n(162).trim(),
          a_sm: n(163).trim(),
          b_sm: n(164).trim(),
          c_sm: n(168).trim(),
          d_sm: n(169).trim(),
          e_sm: n(170).trim(),
          f_sm: n(171).trim(),
          g_sm: n(173).trim(),
          h_sm: n(174).trim(),
          i_sm: n(175).trim(),
          j_sm: n(176).trim(),
          k_sm: n(177).trim(),
          l_sm: n(178).trim(),
          m_sm: n(179).trim(),
          n_sm: n(180).trim(),
          o_sm: n(181).trim(),
          p_sm: n(182).trim(),
          q_sm: n(184).trim(),
          r_sm: n(185).trim(),
          s_sm: n(186).trim(),
          t_sm: n(187).trim(),
          u_sm: n(188).trim(),
          v_sm: n(189).trim(),
          w_sm: n(190).trim(),
          x_sm: n(192).trim(),
          y_sm: n(193).trim(),
          z_sm: n(194).trim(),
          formlogo: n(172).trim(),
          blank_sm: n(166).trim(),
          bubbled_sm: n(167).trim(),
          bg: n(165).trim(),
          plane: n(183).trim(),
          watermark: n(191).trim()
        },
        i = r
      t.exports = i
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        var e = _[t]
        return e ? b[e] : null
      }
      function i(t) {
        var e = t.split('.')
        return 1 === e.length || ('' === e[0] && 2 === e.length)
          ? ''
          : e.pop().toLowerCase()
      }
      function o(t) {
        if (_[t]) {
          if (b[_[t]]) return y
          if (w[_[t]]) return w[_[t]].promise
          var e = c.newDeferred()
          return (
            (w[_[t]] = e),
            h.l([
              _[t],
              function() {
                w[_[t]] == e && delete w[_[t]], e.resolve()
              }
            ]),
            e.promise
          )
        }
        return y
      }
      var s =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        a =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        c = n(1),
        u = n(0),
        l = n(90),
        p = n(92),
        f = n(87),
        h = n(115),
        d = n(2),
        A = n(48),
        g = n(25),
        m = d.get(),
        v = c.newDeferred()
      v.resolve()
      var y = v.promise,
        b = { ImgReader: l, RawReader: p },
        w = {},
        _ = {
          raw: 'RawReader',
          jpg: 'ImgReader',
          jpeg: 'ImgReader',
          gif: 'ImgReader',
          png: 'ImgReader',
          svg: 'ImgReader',
          bmp: 'ImgReader'
        },
        S = (function() {
          function t(t) {
            ;(this.curObj = null),
              (this.error = null),
              m.info('Creating fileQueue to handle array: ', t),
              (this.files = u.toArray(t))
          }
          return (
            (t.prototype.next = function() {
              if (
                (this.error instanceof Error && (this.curObj = null),
                this.curObj &&
                  (this.curObj.next() ||
                    (this.curObj.destroy(), (this.curObj = null))),
                !this.files.length && !this.curObj)
              )
                return !1
              if (!this.curObj) {
                var t = this.files.shift(),
                  e = i(t.name),
                  n = r(e)
                n
                  ? ((this.curObj = new n(t)),
                    this.curObj.next(),
                    (this.error = null))
                  : (this.error = new Error(t.name))
              }
              return !!this.curObj || !!this.error
            }),
            (t.prototype.current = function() {
              return this.curObj
            }),
            t
          )
        })(),
        k = (function() {
          function t(t, e, n) {
            ;(this.fileArray = t),
              (this.displayFunc = e),
              (this.processFunc = n),
              (this.fileQ = new S(this.fileArray))
          }
          return (
            (t.prototype.next = function(t, e) {
              return s(this, void 0, void 0, function() {
                var n, r, i, o, s, u, l, p, h, d, v
                return a(this, function(a) {
                  switch (a.label) {
                    case 0:
                      return this.fileQ.next()
                        ? ((n = this.fileQ.current()),
                          (r = this.fileQ.error) instanceof Error
                            ? (m.warn('Could not process file: ', r.toString()),
                              t([
                                {
                                  error: !0,
                                  type: 'fileReader',
                                  msg: r.message
                                }
                              ]),
                              [3, 11])
                            : [3, 1])
                        : (m.info('Finished processing files'), [2, !1])
                    case 1:
                      ;(i = []),
                        (o = e ? [A.configurations[0]] : A.configurations),
                        (s = !0),
                        (u = 0),
                        (l = o),
                        (a.label = 2)
                    case 2:
                      if (!(u < l.length)) return [3, 10]
                      ;(p = l[u]), (a.label = 3)
                    case 3:
                      return (
                        a.trys.push([3, 8, , 9]),
                        0 !== p.size || n.supportsNativeRes
                          ? [3, 4]
                          : (m.warn(
                              'Could not process at native resolution for file: ',
                              n.toString()
                            ),
                            [3, 7])
                      )
                    case 4:
                      return [4, n.getData(p.size)]
                    case 5:
                      return (
                        (h = a.sent()),
                        f.detectBW(h) &&
                          i.push({
                            error: !0,
                            type: 'bw',
                            fileName: n.getName()
                          }),
                        g.darken(h.data.data, p.darkness),
                        m.info('Read file: ', n.getName()),
                        s && ((s = !1), this.displayFunc(h.obj)),
                        [4, c.PromiseAll([this.processFunc(h.data)])]
                      )
                    case 6:
                      ;(d = a.sent()[0]),
                        d
                          ? i.push(JSON.parse(d.replace(/'/g, '"')))
                          : (m.info(
                              'No output for ' + n.getName() + '; rejecting'
                            ),
                            i.push({
                              error: !0,
                              type: 'noOutput',
                              fileName: n.getName()
                            })),
                        (a.label = 7)
                    case 7:
                      return [3, 9]
                    case 8:
                      return (
                        (v = a.sent()),
                        m.info(
                          'Could not read file: ',
                          n.getName(),
                          'with error:',
                          v.toString()
                        ),
                        i.push({
                          error: !0,
                          type: 'readError',
                          fileName: n.getName(),
                          msg: v.toString()
                        }),
                        [3, 9]
                      )
                    case 9:
                      return u++, [3, 2]
                    case 10:
                      t(i), (a.label = 11)
                    case 11:
                      return [2, !0]
                  }
                })
              })
            }),
            (t.getSupportedTypes = function() {
              return u.keys(_)
            }),
            (t._registerFileReader = function(t, e) {
              b[t] = e
            }),
            (t.registerFileHandler = function(t, e) {
              u.each(t, function(t) {
                _[t] = e
              })
            }),
            (t.ensureFileLoaders = function(t) {
              var e = u.map(t, function(t) {
                  return i(t.name)
                }),
                n = u.map(e, function(t) {
                  return o(t)
                })
              return c.PromiseAll(n)
            }),
            t
          )
        })()
      t.exports = k
    },
    function(t, e, n) {
      ;(function(e) {
        !(function(n) {
          function r() {}
          function i(t, e) {
            return function() {
              t.apply(e, arguments)
            }
          }
          function o(t) {
            if ('object' != typeof this)
              throw new TypeError('Promises must be constructed via new')
            if ('function' != typeof t) throw new TypeError('not a function')
            ;(this._state = 0),
              (this._handled = !1),
              (this._value = void 0),
              (this._deferreds = []),
              p(t, this)
          }
          function s(t, e) {
            for (; 3 === t._state; ) t = t._value
            if (0 === t._state) return void t._deferreds.push(e)
            ;(t._handled = !0),
              o._immediateFn(function() {
                var n = 1 === t._state ? e.onFulfilled : e.onRejected
                if (null === n)
                  return void (1 === t._state ? a : c)(e.promise, t._value)
                var r
                try {
                  r = n(t._value)
                } catch (t) {
                  return void c(e.promise, t)
                }
                a(e.promise, r)
              })
          }
          function a(t, e) {
            try {
              if (e === t)
                throw new TypeError('A promise cannot be resolved with itself.')
              if (e && ('object' == typeof e || 'function' == typeof e)) {
                var n = e.then
                if (e instanceof o)
                  return (t._state = 3), (t._value = e), void u(t)
                if ('function' == typeof n) return void p(i(n, e), t)
              }
              ;(t._state = 1), (t._value = e), u(t)
            } catch (e) {
              c(t, e)
            }
          }
          function c(t, e) {
            ;(t._state = 2), (t._value = e), u(t)
          }
          function u(t) {
            2 === t._state &&
              0 === t._deferreds.length &&
              o._immediateFn(function() {
                t._handled || o._unhandledRejectionFn(t._value)
              })
            for (var e = 0, n = t._deferreds.length; e < n; e++)
              s(t, t._deferreds[e])
            t._deferreds = null
          }
          function l(t, e, n) {
            ;(this.onFulfilled = 'function' == typeof t ? t : null),
              (this.onRejected = 'function' == typeof e ? e : null),
              (this.promise = n)
          }
          function p(t, e) {
            var n = !1
            try {
              t(
                function(t) {
                  n || ((n = !0), a(e, t))
                },
                function(t) {
                  n || ((n = !0), c(e, t))
                }
              )
            } catch (t) {
              if (n) return
              ;(n = !0), c(e, t)
            }
          }
          var f = setTimeout
          ;(o.prototype.catch = function(t) {
            return this.then(null, t)
          }),
            (o.prototype.then = function(t, e) {
              var n = new this.constructor(r)
              return s(this, new l(t, e, n)), n
            }),
            (o.all = function(t) {
              var e = Array.prototype.slice.call(t)
              return new o(function(t, n) {
                function r(o, s) {
                  try {
                    if (s && ('object' == typeof s || 'function' == typeof s)) {
                      var a = s.then
                      if ('function' == typeof a)
                        return void a.call(
                          s,
                          function(t) {
                            r(o, t)
                          },
                          n
                        )
                    }
                    ;(e[o] = s), 0 == --i && t(e)
                  } catch (t) {
                    n(t)
                  }
                }
                if (0 === e.length) return t([])
                for (var i = e.length, o = 0; o < e.length; o++) r(o, e[o])
              })
            }),
            (o.resolve = function(t) {
              return t && 'object' == typeof t && t.constructor === o
                ? t
                : new o(function(e) {
                    e(t)
                  })
            }),
            (o.reject = function(t) {
              return new o(function(e, n) {
                n(t)
              })
            }),
            (o.race = function(t) {
              return new o(function(e, n) {
                for (var r = 0, i = t.length; r < i; r++) t[r].then(e, n)
              })
            }),
            (o._immediateFn =
              ('function' == typeof e &&
                function(t) {
                  e(t)
                }) ||
              function(t) {
                f(t, 0)
              }),
            (o._unhandledRejectionFn = function(t) {
              'undefined' != typeof console &&
                console &&
                console.warn('Possible Unhandled Promise Rejection:', t)
            }),
            (o._setImmediateFn = function(t) {
              o._immediateFn = t
            }),
            (o._setUnhandledRejectionFn = function(t) {
              o._unhandledRejectionFn = t
            }),
            void 0 !== t && t.exports
              ? (t.exports = o)
              : n.Promise || (n.Promise = o)
        })(this)
      }.call(e, n(83).setImmediate))
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        i = n(35),
        o = n(18),
        s = n(6),
        a = n(20),
        c = n(37),
        u = n(19),
        l = (function(t) {
          function e(e) {
            t.call(this, e), (this.destination = e)
          }
          return r(e, t), e
        })(o.Subscriber)
      e.SubjectSubscriber = l
      var p = (function(t) {
        function e() {
          t.call(this),
            (this.observers = []),
            (this.closed = !1),
            (this.isStopped = !1),
            (this.hasError = !1),
            (this.thrownError = null)
        }
        return (
          r(e, t),
          (e.prototype[u.rxSubscriber] = function() {
            return new l(this)
          }),
          (e.prototype.lift = function(t) {
            var e = new f(this, this)
            return (e.operator = t), e
          }),
          (e.prototype.next = function(t) {
            if (this.closed) throw new a.ObjectUnsubscribedError()
            if (!this.isStopped)
              for (
                var e = this.observers, n = e.length, r = e.slice(), i = 0;
                i < n;
                i++
              )
                r[i].next(t)
          }),
          (e.prototype.error = function(t) {
            if (this.closed) throw new a.ObjectUnsubscribedError()
            ;(this.hasError = !0), (this.thrownError = t), (this.isStopped = !0)
            for (
              var e = this.observers, n = e.length, r = e.slice(), i = 0;
              i < n;
              i++
            )
              r[i].error(t)
            this.observers.length = 0
          }),
          (e.prototype.complete = function() {
            if (this.closed) throw new a.ObjectUnsubscribedError()
            this.isStopped = !0
            for (
              var t = this.observers, e = t.length, n = t.slice(), r = 0;
              r < e;
              r++
            )
              n[r].complete()
            this.observers.length = 0
          }),
          (e.prototype.unsubscribe = function() {
            ;(this.isStopped = !0), (this.closed = !0), (this.observers = null)
          }),
          (e.prototype._trySubscribe = function(e) {
            if (this.closed) throw new a.ObjectUnsubscribedError()
            return t.prototype._trySubscribe.call(this, e)
          }),
          (e.prototype._subscribe = function(t) {
            if (this.closed) throw new a.ObjectUnsubscribedError()
            return this.hasError
              ? (t.error(this.thrownError), s.Subscription.EMPTY)
              : this.isStopped
              ? (t.complete(), s.Subscription.EMPTY)
              : (this.observers.push(t), new c.SubjectSubscription(this, t))
          }),
          (e.prototype.asObservable = function() {
            var t = new i.Observable()
            return (t.source = this), t
          }),
          (e.create = function(t, e) {
            return new f(t, e)
          }),
          e
        )
      })(i.Observable)
      e.Subject = p
      var f = (function(t) {
        function e(e, n) {
          t.call(this), (this.destination = e), (this.source = n)
        }
        return (
          r(e, t),
          (e.prototype.next = function(t) {
            var e = this.destination
            e && e.next && e.next(t)
          }),
          (e.prototype.error = function(t) {
            var e = this.destination
            e && e.error && this.destination.error(t)
          }),
          (e.prototype.complete = function() {
            var t = this.destination
            t && t.complete && this.destination.complete()
          }),
          (e.prototype._subscribe = function(t) {
            return this.source ? this.source.subscribe(t) : s.Subscription.EMPTY
          }),
          e
        )
      })(p)
      e.AnonymousSubject = f
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        i = n(39),
        o = n(6),
        s = n(36),
        a = n(19),
        c = (function(t) {
          function e(n, r, i) {
            switch (
              (t.call(this),
              (this.syncErrorValue = null),
              (this.syncErrorThrown = !1),
              (this.syncErrorThrowable = !1),
              (this.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                this.destination = s.empty
                break
              case 1:
                if (!n) {
                  this.destination = s.empty
                  break
                }
                if ('object' == typeof n) {
                  n instanceof e
                    ? ((this.destination = n), this.destination.add(this))
                    : ((this.syncErrorThrowable = !0),
                      (this.destination = new u(this, n)))
                  break
                }
              default:
                ;(this.syncErrorThrowable = !0),
                  (this.destination = new u(this, n, r, i))
            }
          }
          return (
            r(e, t),
            (e.prototype[a.rxSubscriber] = function() {
              return this
            }),
            (e.create = function(t, n, r) {
              var i = new e(t, n, r)
              return (i.syncErrorThrowable = !1), i
            }),
            (e.prototype.next = function(t) {
              this.isStopped || this._next(t)
            }),
            (e.prototype.error = function(t) {
              this.isStopped || ((this.isStopped = !0), this._error(t))
            }),
            (e.prototype.complete = function() {
              this.isStopped || ((this.isStopped = !0), this._complete())
            }),
            (e.prototype.unsubscribe = function() {
              this.closed ||
                ((this.isStopped = !0), t.prototype.unsubscribe.call(this))
            }),
            (e.prototype._next = function(t) {
              this.destination.next(t)
            }),
            (e.prototype._error = function(t) {
              this.destination.error(t), this.unsubscribe()
            }),
            (e.prototype._complete = function() {
              this.destination.complete(), this.unsubscribe()
            }),
            (e.prototype._unsubscribeAndRecycle = function() {
              var t = this,
                e = t._parent,
                n = t._parents
              return (
                (this._parent = null),
                (this._parents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parent = e),
                (this._parents = n),
                this
              )
            }),
            e
          )
        })(o.Subscription)
      e.Subscriber = c
      var u = (function(t) {
        function e(e, n, r, o) {
          t.call(this), (this._parentSubscriber = e)
          var a,
            c = this
          i.isFunction(n)
            ? (a = n)
            : n &&
              ((a = n.next),
              (r = n.error),
              (o = n.complete),
              n !== s.empty &&
                ((c = Object.create(n)),
                i.isFunction(c.unsubscribe) && this.add(c.unsubscribe.bind(c)),
                (c.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = c),
            (this._next = a),
            (this._error = r),
            (this._complete = o)
        }
        return (
          r(e, t),
          (e.prototype.next = function(t) {
            if (!this.isStopped && this._next) {
              var e = this._parentSubscriber
              e.syncErrorThrowable
                ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                : this.__tryOrUnsub(this._next, t)
            }
          }),
          (e.prototype.error = function(t) {
            if (!this.isStopped) {
              var e = this._parentSubscriber
              if (this._error)
                e.syncErrorThrowable
                  ? (this.__tryOrSetError(e, this._error, t),
                    this.unsubscribe())
                  : (this.__tryOrUnsub(this._error, t), this.unsubscribe())
              else {
                if (!e.syncErrorThrowable) throw (this.unsubscribe(), t)
                ;(e.syncErrorValue = t),
                  (e.syncErrorThrown = !0),
                  this.unsubscribe()
              }
            }
          }),
          (e.prototype.complete = function() {
            var t = this
            if (!this.isStopped) {
              var e = this._parentSubscriber
              if (this._complete) {
                var n = function() {
                  return t._complete.call(t._context)
                }
                e.syncErrorThrowable
                  ? (this.__tryOrSetError(e, n), this.unsubscribe())
                  : (this.__tryOrUnsub(n), this.unsubscribe())
              } else this.unsubscribe()
            }
          }),
          (e.prototype.__tryOrUnsub = function(t, e) {
            try {
              t.call(this._context, e)
            } catch (t) {
              throw (this.unsubscribe(), t)
            }
          }),
          (e.prototype.__tryOrSetError = function(t, e, n) {
            try {
              e.call(this._context, n)
            } catch (e) {
              return (t.syncErrorValue = e), (t.syncErrorThrown = !0), !0
            }
            return !1
          }),
          (e.prototype._unsubscribe = function() {
            var t = this._parentSubscriber
            ;(this._context = null),
              (this._parentSubscriber = null),
              t.unsubscribe()
          }),
          e
        )
      })(c)
    },
    function(t, e, n) {
      'use strict'
      var r = n(8),
        i = r.root.Symbol
      ;(e.rxSubscriber =
        'function' == typeof i && 'function' == typeof i.for
          ? i.for('rxSubscriber')
          : '@@rxSubscriber'),
        (e.$$rxSubscriber = e.rxSubscriber)
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        i = (function(t) {
          function e() {
            var e = t.call(this, 'object unsubscribed')
            ;(this.name = e.name = 'ObjectUnsubscribedError'),
              (this.stack = e.stack),
              (this.message = e.message)
          }
          return r(e, t), e
        })(Error)
      e.ObjectUnsubscribedError = i
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      !(function(t) {
        ;(t[(t.None = 0)] = 'None'),
          (t[(t.Left90 = 1)] = 'Left90'),
          (t[(t.Full180 = 2)] = 'Full180'),
          (t[(t.Right90 = 3)] = 'Right90')
      })(e.CameraRotate || (e.CameraRotate = {}))
    },
    function(t, e, n) {
      'use strict'
      function r(t, e) {
        var n = o.find(t, function(t) {
          return c[t]
        })
        if (n)
          return new Promise(function(t) {
            return t(c[n])
          })
        var r = JSON.stringify(t)
        if (l[r])
          return new Promise(function(t) {
            return t(l[r])
          })
        var i = e ? s.forms2 : s.forms,
          a = e
            ? o.map(t, function(t) {
                return String(t)
              })
            : o.map(t, function(t) {
                return Number(t)
              }),
          u = i.fetchFormData(a),
          p = u.then(
            function(e) {
              if (!e || 1 == e.empty)
                throw (o.each(t, function(t) {
                  c['' + t] = null
                }),
                new Error('Form Data Error: Form not recognized'))
              for (var n = 0, r = e.instances; n < r.length; n++) {
                var i = r[n]
                !(function(t) {
                  o.each(t.form_id, function(n, r) {
                    if (2 == e.desc_v) {
                      e.form_description
                      var i = void 0,
                        o = void 0,
                        s = void 0,
                        a = void 0,
                        u = void 0
                      if ('tabular' === e.type) {
                        var l = e.form_description.length || 1,
                          p = t.offsets.length || 1
                        u = r % l
                        var f = Math.floor(r / l) % p,
                          h = t.rows && t.rows.length
                        o = t.offsets[f]
                        ;(a =
                          (t.offsets.length - 1 > f ? t.offsets[f + 1] : h) -
                          o),
                          (s = e.form_description[u]),
                          (i = 0)
                        for (var d = 0; d < u; d++)
                          i += e.form_description[d].length
                      } else (i = t.offsets[r]), (s = e.form_description[r])
                      var A = {
                        desc_v: e.desc_v,
                        form_id: n,
                        page: r + 1,
                        pageCount: t.form_id.length,
                        startOffset: i,
                        rowCount: a,
                        rowOffset: o,
                        form_description: s,
                        instance_data: t.data && JSON.parse(t.data),
                        rows: t.rows,
                        batch_data: e.batch_data && JSON.parse(e.batch_data),
                        batch_form_description: e.form_description,
                        exam_version: t.exam_version,
                        type: e.type
                      }
                      c['' + n] = A
                    } else {
                      e.form_description
                      var A = {
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
                      }
                      !A.exam_version &&
                        A.batch_data &&
                        A.batch_data.exam_version &&
                        (A.exam_version = A.batch_data.exam_version.toString()),
                        (c['' + n] = A)
                    }
                  })
                })(i)
              }
              var s = o.find(t, function(t) {
                  return c[t]
                }),
                a = c[s]
              return (
                o.each(t, function(t) {
                  c['' + t] = a
                }),
                a
              )
            },
            function(t) {
              throw (delete l[r], t)
            }
          )
        return (l[r] = p), p
      }
      function i(t) {
        if (t.barcodes) return r([t.barcodes], !0)
        if (t.fc_blocks && 1 == t.fc_blocks.length) {
          var e = t.fc_blocks[0],
            n = a.decodeFC(e.intensities, c)
          return n && n.length
            ? r(n, !1)
            : u.rejected(
                new Error('Form Data Error: Could not read form code.')
              )
        }
        return u.newDeferred(null).promise
      }
      var o = n(0),
        s = n(31),
        a = n(95),
        c = n(43),
        u = n(1),
        l = {}
      t.exports = i
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        for (
          var e = i.clone(t).sort(function(t, e) {
              return t - e
            }),
            n = 0,
            r = 0,
            o = 0,
            s = 0,
            a = 0,
            c = 0,
            u = 0,
            l = e;
          u < l.length;
          u++
        ) {
          var p = l[u]
          ;(n += p), (r += p * p), (o += 1)
        }
        for (var f = 1 / 0, h = null, d = 0, A = e; d < A.length; d++) {
          var p = A[d]
          if (((n -= p), (r -= p * p), 0 !== (o -= 1))) {
            ;(s += p), (a += p * p), (c += 1)
            var g = r / o - (n * n) / (o * o),
              m = a / c - (s * s) / (c * c),
              v = (c * m + o * g) / (o + c)
            g < 0 && (g = 0),
              v < f &&
                ((f = v),
                (h = {
                  threshold: p,
                  threshold_unmarked_sigma: (p - s / c) / Math.sqrt(m),
                  marked_average: n / o,
                  marked_count: o,
                  marked_sigma: Math.sqrt(g),
                  unmarked_average: s / c,
                  unmarked_count: c,
                  unmarked_sigma: Math.sqrt(m)
                }))
          }
        }
        return h
      }
      var i = n(0)
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      var r = {},
        i = (function(t) {
          t = t.toLowerCase()
          var e =
              /(opr)[\/]([\w.]+)/.exec(t) ||
              /(chrome)[ \/]([\w.]+)/.exec(t) ||
              /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t) ||
              /(webkit)[ \/]([\w.]+)/.exec(t) ||
              /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) ||
              /(msie) ([\w.]+)/.exec(t) ||
              (t.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(t)) ||
              (t.indexOf('compatible') < 0 &&
                /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)) ||
              [],
            n =
              /(ipad)/.exec(t) ||
              /(iphone)/.exec(t) ||
              /(ipod)/.exec(t) ||
              /(android)/.exec(t) ||
              /(windows phone)/.exec(t) ||
              /(win)/.exec(t) ||
              /(mac)/.exec(t) ||
              /(linux)/.exec(t) ||
              /(cros)/i.exec(t) ||
              []
          return {
            browser: e[3] || e[1] || '',
            version: e[2] || '0',
            platform: n[0] || ''
          }
        })(window.navigator.userAgent)
      if (
        (i.browser &&
          ((r[i.browser] = !0),
          (r.version = i.version),
          (r.versionNumber = parseInt(i.version, 10))),
        i.platform && (r[i.platform] = !0),
        (r.android || r.ipad || r.iphone || r['windows phone']) &&
          (r.mobile = !0),
        (r.ipad || r.iphone || r.ipod) && (r.ios = !0),
        (r.cros || r.mac || r.linux || r.win) && (r.desktop = !0),
        (r.chrome || r.opr || r.safari) && (r.webkit = !0),
        r.rv)
      ) {
        ;(i.browser = 'msie'), (r.msie = !0)
      }
      if (r.opr) {
        ;(i.browser = 'opera'), (r.opera = !0)
      }
      if (r.safari && r.android) {
        ;(i.browser = 'android'), (r.android = !0)
      }
      void 0 !== window.external &&
        void 0 !== window.external.msActiveXFilteringEnabled &&
        window.external.msActiveXFilteringEnabled() &&
        (r.pluginsDisabled = !0)
      r.msie &&
      !(function() {
        var t = null,
          e = null
        try {
          new ActiveXObject('')
        } catch (e) {
          t = e.name
        }
        try {
          e = !!new ActiveXObject('htmlfile')
        } catch (t) {
          e = !1
        }
        return (e = 'ReferenceError' == t || 0 != e)
      })()
        ? (r.pluginsDisabled = !0)
        : r.chrome &&
          parseInt(
            window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1],
            10
          ) >= 42
        ? (r.pluginsDisabled = !0)
        : r.mozilla && r.versionNumber >= 52
        ? (r.versionNumber > 52 || window.navigator.plugins.length <= 1) &&
          (r.pluginsDisabled = !0)
        : r.safari &&
          parseFloat(
            window.navigator.appVersion.match(/Version\/([0-9\.]+)/)[1]
          ) >= 12 &&
          (r.pluginsDisabled = !0),
        (r.name = i.browser),
        (r.platform = i.platform),
        (t.exports = r)
    },
    function(t, e, n) {
      'use strict'
      function r(t, e, n, r) {
        return n + r * t
      }
      function i(t, e, n, r, i, a) {
        return a ? s(t, e, n, r, i) : o(t, e, n, r, i)
      }
      function o(t, e, n, i, o) {
        i < 0 && (i = 0),
          i >= e && (i = e - 1),
          o < 0 && (o = 0),
          o >= n && (o = n - 1)
        var s = r(e, n, i, o)
        return (s *= 4), (t[s] + t[s + 1] + t[s + 2]) / 3
      }
      function s(t, e, n, r, i) {
        return (
          (o(t, e, n, r, i) +
            o(t, e, n, r - 1, i) +
            o(t, e, n, r + 1, i) +
            o(t, e, n, r, i - 1) +
            o(t, e, n, r, i + 1)) /
          5
        )
      }
      function a(t, e, n, o) {
        for (var s = new Uint8Array(t.length / 4), a = 0; a < e; ++a)
          for (var c = 0; c < n; ++c) s[r(e, n, a, c)] = i(t, e, n, a, c, o)
        return s
      }
      function c(t, e) {
        return t > e ? (255 * (t - e)) / (255 - e) : 0
      }
      function u(t, e) {
        if (!e) return t
        for (var n = 0; n < t.length; n += 4)
          (t[n] = c(t[n], e)),
            (t[n + 1] = c(t[n + 1], e)),
            (t[n + 2] = c(t[n + 2], e))
        return t
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getIdx = r),
        (e.getPixel = i),
        (e.getGrayscalePixel = o),
        (e.getBlurredPixel = s),
        (e.getGrayscaleBuffer = a),
        (e.darken = u)
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        i = (function() {
          function t(e) {
            void 0 === e && (e = {}), r.defaults(e, t.defaults)
            for (var n = r.keys(e || {}), i = 0, o = n; i < o.length; i++) {
              var s = o[i]
              this[s] = e[s]
            }
          }
          return (t.defaults = { zone: 0 }), t
        })()
      e.BlockDescription = i
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        function e() {
          // MENCO HACK
          // auth 认证。 但是会在 console 持续输出 Failed to parse bad auth
          // 这个报错输出来自于 gcplugin_worker.js
          
          let e = "JSONPCallback_0('8%5DZ%5D%5D%5D%3BoN%3A60vzz1r%5BIn4uXQM%5CI91RVeKYyRPyL@3%3CRRsUx%3Fsz7%3F%3A7xD%5D%3CF0Pc5f%60dZAZ21ARdXwgL3%60%3DGJ6%5EHcDrY27%3F1rR2QXQkL%3DTV86pb%5DWd96TzIS%5BE4%5DYtvqA4');";
          r ||
              ((e = unescape(e)),
              t.setChallengeResponse(e),
              n.resolve(t),
              (r = !0)),
              -1 != l && (clearTimeout(l), (l = -1)),
              -1 != p && (clearTimeout(p), (p = -1))

          // o.fetch(g, m).then(function(e) {
          //   r ||
          //     ((e = unescape(e)),
          //     t.setChallengeResponse(e),
          //     n.resolve(t),
          //     (r = !0)),
          //     -1 != l && (clearTimeout(l), (l = -1)),
          //     -1 != p && (clearTimeout(p), (p = -1))
          // }),
            (l = ++f <= h ? setTimeout(e, 1e3) : -1)
        }
        var n = a.newDeferred(),
          r = !1,
          c = t.getChallenge(),
          u = document.URL,
          l = -1,
          p = -1,
          f = 0,
          h = 5,
          d = 'us',
          A = 'https://downloads.gradecam.com'
        window._GCREGION && (d = window._GCREGION),
          'asia' == d && (A = 'https://cdn-qnhd.menco.cn/assets/vendors/gradecam/gc')
        var g = A + '/auth/auth.js',
          m = { challenge: c, url: u }
        return (
          i.extend(m, s.getData()),
          s.setNum(s.SCAN_COUNT, 0),
          e(),
          setTimeout(function() {
            r || n.reject(new Error('Timed out'))
          }, 15e3),
          n.promise
        )
      }
      var i = n(0),
        o = n(114),
        s = n(49),
        a = n(1)
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      var r = n(0),
        i = n(4),
        o = (function() {
          function t(t) {
            ;(this.formMode = t), (this.lastFailure = '')
          }
          return (
            (t.prototype.findIDBlock = function(t) {
              var e = r.max(t.blocks, function(t) {
                return t.right - t.top
              })
              return e && 10 === e.rows ? e : null
            }),
            (t.prototype.createIDBlockDescription = function(t) {
              return new i.FormDescription.NumberBlockDescription({
                type: 'number',
                form_area: 'ids',
                choices: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                zone: 0,
                row: t.row,
                col: t.col,
                rows: t.rows,
                cols: t.cols,
                label: 'GradeCam ID'
              })
            }),
            (t.prototype.numberRange = function(t, e) {
              var n = r.range(t, t + e)
              return r.map(n, function(t) {
                return String(t)
              })
            }),
            (t.prototype.letterRange = function(t, e) {
              var n = [
                  'A',
                  'B',
                  'C',
                  'D',
                  'E',
                  'F',
                  'G',
                  'H',
                  'I',
                  'J',
                  'K',
                  'L',
                  'M',
                  'N',
                  'O',
                  'P',
                  'Q',
                  'R',
                  'S',
                  'T',
                  'U',
                  'V',
                  'W',
                  'X',
                  'Y',
                  'Z'
                ],
                i = r.indexOf(n, t)
              return r.map(r.range(i, i + e), function(t) {
                return n[t]
              })
            }),
            t
          )
        })()
      t.exports = o
    },
    function(t, e) {
      var n
      n = (function() {
        return this
      })()
      try {
        n = n || Function('return this')() || (0, eval)('this')
      } catch (t) {
        'object' == typeof window && (n = window)
      }
      t.exports = n
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        if (s) return s
        s = {}
        for (var e = 0, n = i; e < n.length; e++) {
          var r = n[e]
          s[r] = t[r].bind(t)
        }
        for (var a = 0, c = o; a < c.length; a++) {
          var u = c[a]
          s[u] = t[u]
        }
        return (
          (s.getSDK = function(e) {
            return 'internal' === e ? t : s
          }),
          s
        )
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = [
          '_addFormToCache',
          '_debugScan',
          '_debugScanById',
          '_setLogLevel',
          '_simulateScan',
          'bind',
          'clearTyperStrings',
          'enableHighRes',
          'getCameraList',
          'getElement',
          'getGCI',
          'getGciAsync',
          'getJpegAsync',
          'getJPEGImage',
          'getLastFormDescription',
          'getMode',
          'getOption',
          'getOptions',
          'getTyperAvailability',
          'getTyperOptions',
          'getTyperConfig',
          'getVersion',
          'initTyper',
          'isAtLeastVersion',
          'isInstalled',
          'requireSupport',
          'requireVersion',
          'scanFilesAsync',
          'setActive',
          'setDesiredVersion',
          'setLicensingInfo',
          'setMode',
          'setModuleOption',
          'setModuleOrder',
          'setOptions',
          'setReturnURL',
          'setShowMessages',
          'setTransparency',
          'setTyperStrings',
          'setValidateCallback',
          'startCamera',
          'stopCamera',
          'supports',
          'unbind'
        ],
        o = ['curCamera$', 'formcode$', 'scan$'],
        s = null
      e.getExposedPublicAPI = r
    },
    function(t, e, n) {
      'use strict'
      var r,
        i = 'undefined' == typeof window,
        o = i ? n(33).FormServer1Manager : n(100).Form1Manager,
        s = i ? n(33).FormServer2Manager : n(101).Form2Manager
      !(function(t) {
        ;(t.forms = new o()), (t.forms2 = new s())
      })(r || (r = {})),
        (t.exports = r)
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        if (
          ((t = c.once(t)),
          !a.hasGCMobile() &&
            document.readyState &&
            ('complete' == document.readyState ||
              'loaded' == document.readyState))
        )
          return void setTimeout(t, 0)
        if (a.hasGCMobile())
          window.gcmobilesdk
            ? setTimeout(t, 0)
            : (window.gcmobilesdk_loadCallback = t)
        else {
          if (document.addEventListener)
            document.addEventListener('DOMContentLoaded', t, !1)
          else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent))
            var e = setInterval(function() {
              ;/loaded|complete/i.test(document.readyState) &&
                (t(), clearInterval(e))
            }, 10)
          window.onload = t
        }
      }
      function i(t) {
        for (var e = t; e.parentNode; ) e = e.parentNode
        return e
      }
      function o(t) {
        return !!i(t).body
      }
      function s(t) {
        return document.getElementById(t)
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var a = n(50),
        c = n(0)
      ;(e.domLoaded = r),
        (e.findUltimateAncestor = i),
        (e.isInDOMTree = o),
        (e.$ = s)
    },
    function(t, e) {},
    function(t, e) {
      function n() {
        throw new Error('setTimeout has not been defined')
      }
      function r() {
        throw new Error('clearTimeout has not been defined')
      }
      function i(t) {
        if (l === setTimeout) return setTimeout(t, 0)
        if ((l === n || !l) && setTimeout)
          return (l = setTimeout), setTimeout(t, 0)
        try {
          return l(t, 0)
        } catch (e) {
          try {
            return l.call(null, t, 0)
          } catch (e) {
            return l.call(this, t, 0)
          }
        }
      }
      function o(t) {
        if (p === clearTimeout) return clearTimeout(t)
        if ((p === r || !p) && clearTimeout)
          return (p = clearTimeout), clearTimeout(t)
        try {
          return p(t)
        } catch (e) {
          try {
            return p.call(null, t)
          } catch (e) {
            return p.call(this, t)
          }
        }
      }
      function s() {
        A &&
          h &&
          ((A = !1), h.length ? (d = h.concat(d)) : (g = -1), d.length && a())
      }
      function a() {
        if (!A) {
          var t = i(s)
          A = !0
          for (var e = d.length; e; ) {
            for (h = d, d = []; ++g < e; ) h && h[g].run()
            ;(g = -1), (e = d.length)
          }
          ;(h = null), (A = !1), o(t)
        }
      }
      function c(t, e) {
        ;(this.fun = t), (this.array = e)
      }
      function u() {}
      var l,
        p,
        f = (t.exports = {})
      !(function() {
        try {
          l = 'function' == typeof setTimeout ? setTimeout : n
        } catch (t) {
          l = n
        }
        try {
          p = 'function' == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
          p = r
        }
      })()
      var h,
        d = [],
        A = !1,
        g = -1
      ;(f.nextTick = function(t) {
        var e = new Array(arguments.length - 1)
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        d.push(new c(t, e)), 1 !== d.length || A || i(a)
      }),
        (c.prototype.run = function() {
          this.fun.apply(null, this.array)
        }),
        (f.title = 'browser'),
        (f.browser = !0),
        (f.env = {}),
        (f.argv = []),
        (f.version = ''),
        (f.versions = {}),
        (f.on = u),
        (f.addListener = u),
        (f.once = u),
        (f.off = u),
        (f.removeListener = u),
        (f.removeAllListeners = u),
        (f.emit = u),
        (f.prependListener = u),
        (f.prependOnceListener = u),
        (f.listeners = function(t) {
          return []
        }),
        (f.binding = function(t) {
          throw new Error('process.binding is not supported')
        }),
        (f.cwd = function() {
          return '/'
        }),
        (f.chdir = function(t) {
          throw new Error('process.chdir is not supported')
        }),
        (f.umask = function() {
          return 0
        })
    },
    function(t, e, n) {
      'use strict'
      var r = n(8),
        i = n(80),
        o = n(76),
        s = (function() {
          function t(t) {
            ;(this._isScalar = !1), t && (this._subscribe = t)
          }
          return (
            (t.prototype.lift = function(e) {
              var n = new t()
              return (n.source = this), (n.operator = e), n
            }),
            (t.prototype.subscribe = function(t, e, n) {
              var r = this.operator,
                o = i.toSubscriber(t, e, n)
              if (
                (r
                  ? r.call(o, this.source)
                  : o.add(
                      this.source ? this._subscribe(o) : this._trySubscribe(o)
                    ),
                o.syncErrorThrowable &&
                  ((o.syncErrorThrowable = !1), o.syncErrorThrown))
              )
                throw o.syncErrorValue
              return o
            }),
            (t.prototype._trySubscribe = function(t) {
              try {
                return this._subscribe(t)
              } catch (e) {
                ;(t.syncErrorThrown = !0), (t.syncErrorValue = e), t.error(e)
              }
            }),
            (t.prototype.forEach = function(t, e) {
              var n = this
              if (
                (e ||
                  (r.root.Rx && r.root.Rx.config && r.root.Rx.config.Promise
                    ? (e = r.root.Rx.config.Promise)
                    : r.root.Promise && (e = r.root.Promise)),
                !e)
              )
                throw new Error('no Promise impl found')
              return new e(function(e, r) {
                var i
                i = n.subscribe(
                  function(e) {
                    if (i)
                      try {
                        t(e)
                      } catch (t) {
                        r(t), i.unsubscribe()
                      }
                    else t(e)
                  },
                  r,
                  e
                )
              })
            }),
            (t.prototype._subscribe = function(t) {
              return this.source.subscribe(t)
            }),
            (t.prototype[o.observable] = function() {
              return this
            }),
            (t.create = function(e) {
              return new t(e)
            }),
            t
          )
        })()
      e.Observable = s
    },
    function(t, e, n) {
      'use strict'
      e.empty = {
        closed: !0,
        next: function(t) {},
        error: function(t) {
          throw t
        },
        complete: function() {}
      }
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        i = n(6),
        o = (function(t) {
          function e(e, n) {
            t.call(this),
              (this.subject = e),
              (this.subscriber = n),
              (this.closed = !1)
          }
          return (
            r(e, t),
            (e.prototype.unsubscribe = function() {
              if (!this.closed) {
                this.closed = !0
                var t = this.subject,
                  e = t.observers
                if (
                  ((this.subject = null),
                  e && 0 !== e.length && !t.isStopped && !t.closed)
                ) {
                  var n = e.indexOf(this.subscriber)
                  ;-1 !== n && e.splice(n, 1)
                }
              }
            }),
            e
          )
        })(i.Subscription)
      e.SubjectSubscription = o
    },
    function(t, e, n) {
      'use strict'
      e.errorObject = { e: {} }
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        return 'function' == typeof t
      }
      e.isFunction = r
    },
    function(t, e, n) {
      'use strict'
      function r() {
        var t = this,
          e = b[t._pid],
          n = t.el
        if (
          ((_ = !_),
          _ &&
            n &&
            n.style &&
            (t.isVisible
              ? ((n.style.width = _ ? '99.999%' : '100%'),
                (n.style.height = '100%'))
              : (n.style.width = n.style.height = '1px')),
          !t.paused)
        )
          if (e.callQ.length) {
            var r = e.callQ.shift()
            r()
          } else {
            var i = t.plugin.getScan()
            if ('bad_auth' == i) return void (e.ivId = -1)
            if (e.doGetVidSize) {
              var o = t.plugin.getVideoSize()
              try {
                var s = JSON.parse(o)
                s[0] && s[1] && t.trigger('videoSize', s[0], s[1])
              } catch (t) {}
            }
            i &&
              f.defer(function() {
                t.trigger('scan', JSON.parse(i.replace(/'/g, '"')))
              })
          }
        t.active ? t.inhibitProcessing(0) : t.inhibitProcessing(9999),
          (e.ivId = setTimeout(e.poll, w))
      }
      function i(t, e) {
        b[t._pid].callQ.push(e)
      }
      function o(t, e, n) {
        var r = 0,
          o = 0,
          s = []
        return function(a) {
          function c() {
            if (!1 === a.next(u, !0)) return void (e && e(r, o, s))
          }
          var u = function(e) {
            if (
              f.every(e, function(t) {
                return t.error
              }) ||
              f.any(e, function(t) {
                return 'bw' == t.type
              })
            ) {
              var a = 'unknown',
                u = void 0,
                l = f.find(e, function(t) {
                  return 'readError' == t.type
                }),
                p = f.find(e, function(t) {
                  return 'fileReader' == t.type
                }),
                h = f.find(e, function(t) {
                  return 'file' == t.type
                }),
                d = f.find(e, function(t) {
                  return 'bw' == t.type
                }),
                A = f.find(e, function(t) {
                  return 'noOutput' == t.type
                })
              p
                ? ((a =
                    'File ' +
                    p.msg +
                    ' appears to have an unsupported format.'),
                  (u = p.msg))
                : h
                ? ((a =
                    'File ' +
                    h.fileName +
                    ' appears to be corrupted or have an unsupported format.'),
                  (u = h.fileName))
                : d
                ? ((a =
                    'File ' +
                    d.fileName +
                    ' appears to be scanned in black and white and cannot be accurately graded.'),
                  (a += 'Please rescan using grayscale or color.'),
                  (u = d.fileName))
                : A
                ? ((a =
                    'File ' +
                    A.fileName +
                    ' does not appear to have a GradeCam form in it.'),
                  (u = A.fileName))
                : l && (a = 'Could not read ' + l.fileName + ' -- ' + l.msg),
                o++,
                s.push(u),
                n && n(a)
            } else {
              var g = e && 1 === e.length && e[0],
                v = m.newDeferred()
              t.trigger('scan', g, {
                scansRequired: 1,
                scansMax: 1,
                scansToValidate: 1,
                successObj: v
              }),
                v.promise.then(
                  function() {
                    r++
                  },
                  function() {
                    o++,
                      s.push(''),
                      n && n('Could not read form in this image.')
                  }
                )
            }
            i(t, c)
          }
          c()
        }
      }
      function s(t, e, n) {
        function r(e) {
          return c(this, void 0, void 0, function() {
            function r() {
              return c(this, void 0, void 0, function() {
                var o, s
                return u(this, function(a) {
                  switch (a.label) {
                    case 0:
                      return (
                        a.trys.push([0, 2, , 3]),
                        [
                          4,
                          e.next(function(t) {
                            n(t, r)
                          })
                        ]
                      )
                    case 1:
                      return (o = a.sent()), [3, 3]
                    case 2:
                      return (
                        (s = a.sent()),
                        v.error('Uncaught filescanner error:', s),
                        n(s),
                        [3, 3]
                      )
                    case 3:
                      return o || (i && t.startCamera(), n(null, null)), [2]
                  }
                })
              })
            }
            var o
            return u(this, function(t) {
              switch (t.label) {
                case 0:
                  return (
                    t.trys.push([0, 2, , 3]),
                    e
                      ? [4, r()]
                      : (n(new Error('Could not create scanner')), [2])
                  )
                case 1:
                  return t.sent(), [3, 3]
                case 2:
                  return (
                    (o = t.sent()),
                    v.error('Error scanning files:', o),
                    n(o),
                    [3, 3]
                  )
                case 3:
                  return [2]
              }
            })
          })
        }
        var i = S
        t.stopCamera(), C && t.eventHost.trigger('cameraVisible', !0)
        var o = t.getFileScanner()
        if (!o)
          throw new Error('Your web browser does not support file scanning')
        if (e && !o.canUseFileArray())
          throw new Error(
            'Your web browser does not fully support drag and drop file scanning'
          )
        return e ? o.loadFromFileArray(r, e) : o.createFileScanner(r), !0
      }
      var a =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        c =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        u =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        l = n(3),
        p = n(21),
        f = n(0),
        h = n(41),
        d = n(94),
        A = n(7),
        g = n(2),
        m = n(1),
        v = g.get(),
        y = 0,
        b = {},
        w = 25,
        _ = !0,
        S = !1,
        k = '',
        x = p.CameraRotate.None,
        C = !1,
        O = (function(t) {
          function e(e, n) {
            var i = t.call(this) || this
            ;(i.plugin = null),
              (i.el = null),
              (i.isVisible = !1),
              (i.active = !0),
              (i.paused = !1),
              (i.videoWidth = 640),
              (i.videoHeight = 480),
              (i.typerScores = []),
              (i.eventHost = null),
              (i.currentCameraInfo = new A.ReplaySubject(1)),
              (i.plugin = e),
              (i.el = n)
            var o = e
            ;(C = !e.bind) && (o = i.eventHost = new l.ClassTS())
            var s = (i._pid = y++)
            return (
              (b[s] = { poll: f.bind(r, i), stop: !1, ivId: -1, callQ: [] }),
              (i.fileScanHost = d(e)),
              o.bind('scan', function(t) {
                f.defer(function() {
                  i.trigger('scan', JSON.parse(t.replace(/'/g, '"')))
                })
              }),
              o.bind('cameraVisible', function(t) {
                ;(i.isVisible = t), i.trigger('cameraVisible', t)
              }),
              o.bind('videoSize', function(t, e) {
                ;(i.videoWidth = t),
                  (i.videoHeight = e),
                  i.trigger('videoSize', t, e)
              }),
              C && o.trigger('cameraVisible', !0),
              i.plugin.currentCameraInfo &&
                i.plugin.currentCameraInfo.subscribe(i.currentCameraInfo),
              i
            )
          }
          return (
            a(e, t),
            (e.prototype.setTransparency = function() {}),
            (e.prototype.getCameraList = function() {
              return JSON.parse(this.plugin.getCameraList())
            }),
            (e.prototype.getVersionMajor = function() {
              return this.plugin.getVersionMajor()
            }),
            (e.prototype.getVersionMinor = function() {
              return this.plugin.getVersionMinor()
            }),
            (e.prototype.startCamera = function() {
              return (
                (S = !0),
                C && this.eventHost.trigger('cameraVisible', !0),
                this.plugin.setCamera(k, x)
              )
            }),
            (e.prototype.stopCamera = function() {
              return (
                (S = !1),
                C && this.eventHost.trigger('cameraVisible', !1),
                this.plugin.stopCamera()
              )
            }),
            (e.prototype.setCamera = function(t, e) {
              C && this.eventHost.trigger('cameraVisible', !0),
                (S && k == t && x == e) ||
                  ((S = !0),
                  this.supports('rotate')
                    ? (!0 === e
                        ? (e = p.CameraRotate.Full180)
                        : !1 === e && (e = p.CameraRotate.None),
                      this.plugin.setCamera(t, e))
                    : ((e = !0 === e || e == p.CameraRotate.Full180),
                      this.plugin.setCamera(t, e)),
                  (k = t),
                  (x = e))
            }),
            (e.prototype.initTyper = function(t, e, n, r) {
              this.plugin.supports('rkeyDelay')
                ? this.plugin.initTyper(t, e, n, r)
                : this.plugin.initTyper(t, Math.max(r, e), n)
            }),
            (e.prototype.setTyperStrings = function(t) {
              this.supports('setTyperStrings') &&
                this.plugin.setTyperStrings(t),
                (this.typerScores = t.slice(0))
            }),
            (e.prototype.clearTyperStrings = function() {
              this.supports('setTyperStrings') &&
                this.plugin.clearTyperStrings(),
                (this.typerScores = [])
            }),
            (e.prototype.inhibitProcessing = function(t) {
              this.plugin.inhibitProcessing(t)
            }),
            (e.prototype.getJPEGImage = function() {
              return this.plugin.getJPEGImage()
            }),
            (e.prototype.getCurrentImage = function() {
              return this.plugin.getCurrentImage()
            }),
            (e.prototype.getJpegAsync = function(t) {
              var e = this
              this.plugin.getJpegAsync
                ? this.plugin.getJpegAsync(t)
                : f.defer(function() {
                    t(e.plugin.getJPEGImage())
                  })
            }),
            (e.prototype.getGciAsync = function(t) {
              var e = this
              this.plugin.getGciAsync
                ? this.plugin.getGciAsync(t)
                : f.defer(function() {
                    t(e.plugin.getCurrentImage())
                  })
            }),
            (e.prototype.enableHighRes = function(t) {
              return !!this.plugin.enableHighRes && this.plugin.enableHighRes(t)
            }),
            (e.prototype._shutdown = function() {
              var t = b[this._pid]
              this.plugin.stopCamera(),
                this.unbind('scan'),
                clearInterval(t.ivId),
                (t.ivId = -1),
                (t.stop = !0)
            }),
            (e.prototype.startPolling = function() {
              var t = b[this._pid]
              ;-1 != t.ivId && clearTimeout(t.ivId),
                (t.doGetVidSize = this.supports('videoSize')),
                t.poll()
            }),
            (e.prototype.pause = function() {
              this.paused = !0
            }),
            (e.prototype.unpause = function() {
              this.paused = !1
            }),
            (e.prototype.setActive = function(t) {
              this.active = !!t
            }),
            (e.prototype.getFileScanner = function() {
              return this.fileScanHost
            }),
            (e.prototype.processImageFiles = function(t, e) {
              return (
                C && this.eventHost.trigger('cameraVisible', !0),
                this.fileScanHost.createDirectoryScanner(o(this, t, e))
              )
            }),
            (e.prototype.processImageFile = function(t, e) {
              return (
                C && this.eventHost.trigger('cameraVisible', !0),
                this.fileScanHost.createFileScanner(o(this, t, e))
              )
            }),
            (e.prototype.processImageFileArray = function(t, e, n) {
              return (
                C && this.eventHost.trigger('cameraVisible', !0),
                this.fileScanHost.loadFromFileArray(o(this, e, n))
              )
            }),
            (e.prototype.scanFilesAsync = function(t, e) {
              return s(this, t, e)
            }),
            (e.prototype.getVersion = function() {
              try {
                if (this.plugin.getVersion) return this.plugin.getVersion()
              } catch (t) {}
              return (
                this.getVersionMajor() + '.' + this.getVersionMinor() + '.0.0'
              )
            }),
            (e.prototype.isAtLeastVersion = function(t) {
              return !h.isLessThan(this.getVersion(), t)
            }),
            (e.prototype.displayObject = function(t) {
              return this.plugin.displayObject(t)
            }),
            (e.prototype.processDirect = function(t) {
              return this.plugin.processDirect(t)
            }),
            (e.prototype.getSpeedHandicap = function() {
              return 1
            }),
            (e.prototype.supports = function(t) {
              var e = this.plugin
              switch (t) {
                case 'versionString':
                  return this.isAtLeastVersion('1.7.0.0')
                case 'processImageFiles':
                  return this.isAtLeastVersion('1.5.0.0')
                case 'liveOptions':
                case 'stopCamera':
                  return this.isAtLeastVersion('1.7.0.0')
                case 'html5Files':
                  var n = this.getFileScanner()
                  return n && n.canUseFileArray()
                case 'flipCamera':
                  return !0
                default:
                  return !!e.supports && e.supports(t)
              }
            }),
            (e.prototype.getNeedsTransparency = function() {
              return !1
            }),
            e
          )
        })(l.ClassTS)
      t.exports = O
    },
    function(t, e, n) {
      'use strict'
      function r(t, e) {
        for (var n = t.split('.'); n.length < 4; ) n.push('0')
        for (var r = e.split('.'); r.length < 4; ) r.push('0')
        for (
          var o = i.map(n, function(t) {
              return parseInt(t, 10) || 0
            }),
            s = i.map(r, function(t) {
              return parseInt(t, 10) || 0
            }),
            a = 0;
          a < 4;
          ++a
        ) {
          if (o[a] < s[a]) return !0
          if (o[a] > s[a]) return !1
        }
        return !1
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(0)
      e.isLessThan = r
    },
    function(t, e, n) {
      'use strict'
      function r() {
        function t() {
          i.reject(new Error('Cancelled'))
        }
        function e(t) {
          r = this.files
        }
        function n(t) {
          t.stopPropagation(), t.preventDefault(), i.resolve(r || [])
        }
        var r,
          i = a.newDeferred(),
          s = document.createElement('div')
        s.innerHTML = c()
        var u = s.querySelector('input[type=file]')
        o.addEventListener('hide', t),
          u.addEventListener('change', e, !1),
          s.querySelector('button').addEventListener('click', n, !1),
          o.show(s)
        var l = function() {
          o.removeEventListener('hide', t), o.hide()
        }
        return i.promise.then(l, l), i.promise
      }
      var i = n(0),
        o = n(58),
        s = n(61),
        a = n(1),
        c = i.template(s)
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      var r = {}
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      function r() {
        return (
          c ||
          ((c = document.createElement('iframe')),
          (c.style.display = 'none'),
          (c.src = h.formServerComm),
          document.body.appendChild(c),
          (f = setTimeout(function() {
            alert(
              'Error communicating with GradeCam servers; form management will not work'
            ),
              p.reject()
          }, 5e3)),
          c)
        )
      }
      function i() {
        return d++
      }
      function o(t, e) {
        return e + ':' + JSON.stringify(t)
      }
      function s(t) {
        var e = t.indexOf(':')
        if (-1 == e) throw new Error('Malformed message')
        var n = t.substr(0, e)
        if (!A[n]) throw new Error('Orphan message received!')
        var r = t.substr(e + 1)
        try {
          return { dfd: A[n], error: !1, data: JSON.parse(r) }
        } catch (t) {
          return { dfd: A[n], error: !0, data: t }
        }
      }
      function a(t) {
        if (t.origin == h.formServerDomain) {
          if ('ready' == t.data) return clearTimeout(f), void p.resolve()
          var e,
            n = s(t.data)
          n.error
            ? (e = n.data)
            : 'failed' == n.data.status && (e = new Error(n.data.message)),
            e
              ? ((e.domain = h.formServerDomain), n.dfd.reject(e))
              : n.dfd.resolve(n.data.message)
        }
      }
      var c,
        u = n(99),
        l = n(1),
        p = l.newDeferred(),
        f = -1,
        h = null,
        d = 0,
        A = {}
      window.addEventListener
        ? addEventListener('message', a, !1)
        : attachEvent('onmessage', a)
      var g = !(XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()),
        m = (function() {
          function t() {
            this.useLegacyAPI = !1
            var t = 'prod'
            window._GCFORMSMODE
              ? (t = window._GCFORMSMODE)
              : window._GCREGION && (t = window._GCREGION),
              (h = u(t)),
              g &&
                document.body &&
                document.body.appendChild &&
                ((this.useLegacyAPI = !0), r())
          }
          return (
            (t.prototype.sendMessage = function(t, e, n, s, a) {
              var c = i(),
                u = a ? null : p
              return (
                (a = a || r()),
                l.PromiseAll([u]).then(function() {
                  var r = { command: t, data: e }
                  a.contentWindow.postMessage(o(r, c), h.formServerDomain)
                  var i = l.newDeferred()
                  return (
                    (A[c] = i),
                    n && i.promise.then(n),
                    s && i.promise.catch(s),
                    i.promise
                  )
                })
              )
            }),
            (t.prototype.printIframe = function(t) {
              window.gcmobilesdk
                ? this.sendMessage('getContent', null, null, null, t).then(
                    function(t) {
                      window.gcmobilesdk.command('printIframe', t.content)
                    }
                  )
                : t.contentWindow.postMessage('print', '*')
            }),
            (t.prototype.makeFormsRequest = function(t, e, n, r) {
              var i = h.formServerDomain + t,
                o = new XMLHttpRequest(),
                s = l.newDeferred()
              return (
                (o.onreadystatechange = function() {
                  if (4 == o.readyState && 200 == o.status)
                    try {
                      var t = JSON.parse(o.responseText)
                      s.resolve(t)
                    } catch (e) {
                      ;(e.domain = h.formServerDomain), s.reject(e)
                    }
                  else if (4 == o.readyState && 200 != o.status) {
                    var e = new Error('Server returned code ' + o.status)
                    ;(e.response = o.responseText),
                      (e.domain = h.formServerDomain)
                    try {
                      e = JSON.parse(e.response)
                    } catch (t) {}
                    s.reject(e)
                  }
                }),
                e
                  ? (o.open('POST', i, !0),
                    o.setRequestHeader('X-Requested-With', 'GCSDK'),
                    o.setRequestHeader('Content-type', 'application/json'),
                    o.send(JSON.stringify(e)))
                  : (o.open('GET', i, !0), o.send()),
                n && s.promise.then(n),
                r && s.promise.catch(r),
                s.promise
              )
            }),
            t
          )
        })()
      t.exports = m
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n]
        for (var r = 0, o = e; r < o.length; r++)
          for (var s = o[r], a = 0, c = i.keys(s); a < c.length; a++) {
            var u = c[a]
            if (!(u in t))
              if (i.isArray(s[u])) {
                var l = s[u]
                t[u] = l.slice(0)
              } else if (i.isObject(s[u])) {
                var l = i.clone(s[u])
                t[u] = l
              } else t[u] = s[u]
          }
      }
      var i = n(0)
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        for (
          var e,
            n,
            r,
            i,
            o,
            s = '',
            a =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            c = new Uint8Array(t),
            u = c.byteLength,
            l = u % 3,
            p = u - l,
            f = 0;
          f < p;
          f += 3
        )
          (o = (c[f] << 16) | (c[f + 1] << 8) | c[f + 2]),
            (e = (16515072 & o) >> 18),
            (n = (258048 & o) >> 12),
            (r = (4032 & o) >> 6),
            (i = 63 & o),
            (s += a[e] + a[n] + a[r] + a[i])
        return (
          1 == l
            ? ((o = c[p]),
              (e = (252 & o) >> 2),
              (n = (3 & o) << 4),
              (s += a[e] + a[n] + '=='))
            : 2 == l &&
              ((o = (c[p] << 8) | c[p + 1]),
              (e = (64512 & o) >> 10),
              (n = (1008 & o) >> 4),
              (r = (15 & o) << 2),
              (s += a[e] + a[n] + a[r] + '=')),
          s
        )
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.encode = r)
    },
    function(t, e, n) {
      'use strict'
      /*!
       * Cookie Monster - A javascript cookie library
       * v0.0.3
       * https://github.com/jgallen23/cookie-monster
       * copyright JGA 2011
       * MIT License
       */
      var r
      !(function(t) {
        function e(t, e, n, r) {
          var i = new Date(),
            o = '',
            s = typeof e,
            a = ''
          if (
            ((r = r || '/'),
            n &&
              (i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3),
              (o = '; expires=' + i.toUTCString())),
            'object' === s && 'undefined' != s)
          ) {
            if (!('JSON' in window))
              throw "Bummer, your browser doesn't support JSON parsing."
            a = JSON.stringify({ v: e })
          } else a = encodeURIComponent(e)
          document.cookie = t + '=' + a + o + '; path=' + r
        }
        function n(t) {
          for (
            var e = t + '=',
              n = document.cookie.split(';'),
              r = '',
              i = {},
              o = 0;
            o < n.length;
            o++
          ) {
            for (var s = n[o]; ' ' == s.charAt(0); )
              s = s.substring(1, s.length)
            if (0 === s.indexOf(e)) {
              if (
                ((r = s.substring(e.length, s.length)),
                '{' == r.substring(0, 1) && 'v' in (i = JSON.parse(r)))
              )
                return i.v
              if ('undefined' == r) return
              return decodeURIComponent(r)
            }
          }
          return null
        }
        function r(t) {
          e(t, '', -1)
        }
        ;(t.set = e), (t.get = n), (t.remove = r)
      })(r || (r = {})),
        (t.exports = r)
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = []
      e.configurations = r
      var i = function(t) {
        var e, n
        switch (t) {
          case 'fast':
            ;(e = [0, 48e4]), (n = [0])
            break
          case 'aggressive':
            ;(e = [0, 786432, 192e4, 3145728]), (n = [0, 50, 75, 100])
            break
          case 'high_res':
            ;(e = [0, 1228800, 192e4, 3145728]), (n = [0, 75])
            break
          case 'normal':
          default:
            ;(e = [0, 48e4, 192e4]), (n = [0, 75])
        }
        r.length = 0
        for (var i = 0, o = e; i < o.length; i++)
          for (var s = o[i], a = 0, c = n; a < c.length; a++) {
            var u = c[a]
            r.push({ size: s, darkness: u })
          }
      }
      ;(e.setMode = i), i('normal')
    },
    function(t, e, n) {
      'use strict'
      var r,
        i,
        o = n(47),
        s = n(0)
      window.localStorage
        ? ((r = function() {
            localStorage.setItem('sdkMeta', JSON.stringify(this.fields))
          }),
          (i = function() {
            return JSON.parse(localStorage.getItem('sdkMeta'))
          }))
        : ((r = function() {
            o.set('sdkMeta', JSON.stringify(this.fields), 365)
          }),
          (i = function() {
            return JSON.parse(o.get('sdkMeta'))
          }))
      var a = (function() {
          function t(t) {
            ;(this.fields = {}),
              (this.SCAN_COUNT = 'sc'),
              s.extend(this.fields, t || {}),
              (this.saveMeta = r),
              (this.loadMeta = i),
              (this.fields = this.loadMeta() || this.fields)
          }
          return (
            (t.prototype.saveMeta = function() {}),
            (t.prototype.loadMeta = function() {}),
            (t.prototype.getNum = function(t) {
              var e = this.fields[t] || '0'
              return parseInt(e, 10)
            }),
            (t.prototype.setNum = function(t, e) {
              this.fields[t] = '' + e
            }),
            (t.prototype.get = function(t) {
              return this.fields[t]
            }),
            (t.prototype.set = function(t, e) {
              this.fields[t] = e
            }),
            (t.prototype.increment = function(t) {
              this.setNum(t, this.getNum(t) + 1)
            }),
            (t.prototype.save = function() {
              this.saveMeta()
            }),
            (t.prototype.getData = function() {
              return this.fields
            }),
            t
          )
        })(),
        c = new a()
      t.exports = c
    },
    function(t, e, n) {
      'use strict'
      function r() {
        return (
          'undefined' != typeof window &&
          window.navigator &&
          window.navigator.userAgent &&
          /GradeCamMobile/.test(navigator.userAgent)
        )
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.hasGCMobile = r)
    },
    function(t, e, n) {
      'use strict'
      var r = n(0),
        i = n(122),
        o = (function() {
          function t() {}
          return (
            (t.prototype.new = function(e) {
              void 0 === e && (e = {}),
                r.defaults(e, t.defaults),
                this.update(e)
            }),
            (t.prototype.update = function(t) {
              for (var e = r.keys(t), n = 0, i = e; n < i.length; n++) {
                var o = i[n]
                this[o] = t[o]
              }
            }),
            (t.prototype.toJSON = function() {
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
            }),
            (t.defaults = {
              auto_length: !1,
              exam_versions: 0,
              exam_answer_multiplicities: 1,
              output_version: 0,
              numeric_allow_blanks: !1
            }),
            (t.FormTypeEnum = i),
            t
          )
        })()
      t.exports = o
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        var e = o.map(t, function(t, e) {
          return { value: e, intensity: t }
        })
        return o.max(e, function(t) {
          return t.intensity
        }).value
      }
      function i(t) {
        var e = o.flatten(t)
        if (!(e && e.length > 0)) return ''
        var n = l(e)
        return 0 === n.threshold
          ? ''
          : o
              .map(t, function(t) {
                return o.findIndex(t, function(t) {
                  return t > n.threshold
                })
              })
              .filter(function(t) {
                return t > -1
              })
              .join('')
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(0),
        s = n(11),
        a = n(131),
        c = n(132),
        u = n(130),
        l = n(23)
      ;(e.getMaxIndex = r), (e.calculateId = i)
      var p = (function() {
        function t(t) {
          void 0 === t && (t = {}), (this.items = [])
          for (var e = o.keys(t), n = 0, r = e; n < r.length; n++) {
            var i = r[n]
            this[i] = t[i]
          }
        }
        return (
          (t.prototype.getItemByLabel = function(t) {
            return o.find(this.items, function(e) {
              return e.label === t
            })
          }),
          (t.prototype.getItemsByType = function(t) {
            return o.select(this.items, function(e) {
              return e.type === t && !e.ignore
            })
          }),
          (t.prototype.getItemsByFormArea = function(t) {
            return o.select(this.items, function(e) {
              return e.form_area === t && !e.ignore
            })
          }),
          (t.prototype.getIntensityMethods = function() {
            var t = o.find(this.items, function(t) {
              return t.getIntensityMethods && !!t.getIntensityMethods()
            })
            return t
              ? t.getIntensityMethods()
              : t
              ? t.getIntensityMethods()
              : []
          }),
          (t.prototype.getFormIdentifier = function() {
            var t = ''
            o.each(this.getItemsByFormArea('ids'), function(e) {
              var n = i(e.intensities[0])
              t += n
            })
            var e = this.fc_data
            return (
              e && e.form_id && (t += e.form_id), t.length ? t : -Math.random()
            )
          }),
          (t.prototype.hasFormIdentifier = function() {
            return !!this.getFormIdentifier()
          }),
          (t.prototype.hasClips = function() {
            var t = this.getItemsByType('clip')
            return t && !!t.length
          }),
          (t.Item = s.Item),
          (t.NumberItem = a.NumberItem),
          (t.QuestionItem = c.QuestionItem),
          (t.ClipItem = u.ClipItem),
          t
        )
      })()
      e.StructuredScan = p
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        void 0 === t && (t = 500)
        var e = d.newDeferred()
        if (A) return e.resolve(A), e.promise
        var n = '_fwcb_' + Math.floor(1e8 * Math.random())
        window[n] = function(t) {
          ;(A = t.wyrmhole), clearTimeout(r), e.resolve(A)
        }
        var r = setTimeout(function() {
          e.reject(new Error('timeout'))
        }, t)
        return (
          window.postMessage({ firebreath: 'GradeCam', callback: n }, '*'),
          e.promise
        )
      }
      function i() {
        return u(this, void 0, void 0, function() {
          function t() {
            n && n.destroy()
          }
          var e, n, i, o
          return l(this, function(s) {
            switch (s.label) {
              case 0:
                return [4, r()]
              case 1:
                return (e = s.sent()), [4, e.create()]
              case 2:
                if (!(n = s.sent())) return [2, []]
                s.label = 3
              case 3:
                return s.trys.push([3, 5, , 6]), [4, n.listPlugins()]
              case 4:
                return (i = s.sent()), t(), [2, i]
              case 5:
                return (o = s.sent()), t(), [2, []]
              case 6:
                return [2]
            }
          })
        })
      }
      function o() {
        return u(this, void 0, void 0, function() {
          var t, e, n
          return l(this, function(r) {
            switch (r.label) {
              case 0:
                return r.trys.push([0, 2, , 3]), [4, i()]
              case 1:
                return (
                  (t = r.sent()),
                  (e = p.any(t, function(t) {
                    return p.any(t.mimetypes, function(t) {
                      return 'application/x-gcplugin2' == t
                    })
                  })),
                  [2, e]
                )
              case 2:
                throw ((n = r.sent()), y.error('Could not list plugins', n), n)
              case 3:
                return [2]
            }
          })
        })
      }
      function s(t) {
        function e() {
          return u(this, void 0, void 0, function() {
            var n, r
            return l(this, function(i) {
              switch (i.label) {
                case 0:
                  return i.trys.push([0, 2, , 3]), [4, o()]
                case 1:
                  return (n = i.sent()), n ? t(n) : setTimeout(e, 1e3), [3, 3]
                case 2:
                  return (
                    (r = i.sent()),
                    y.warn('Could not find plugin:', r),
                    setTimeout(e, 2e3),
                    [3, 3]
                  )
                case 3:
                  return [2]
              }
            })
          })
        }
        setTimeout(e, 1e3)
      }
      function a(t) {
        return (
          void 0 === t && (t = 500),
          u(this, void 0, void 0, function() {
            var e, n, i
            return l(this, function(o) {
              switch (o.label) {
                case 0:
                  return b
                    ? [2, b]
                    : ((e = window.FireWyrmJS), e ? [4, r(t)] : [3, 3])
                case 1:
                  return (
                    (n = o.sent()),
                    y.info(
                      'Detected plugin2 extension; attempting to connect to wyrmhole'
                    ),
                    [4, n.create(v)]
                  )
                case 2:
                  return (
                    (i = o.sent()),
                    y.info(
                      'Connected to wyrmhole and loaded plugin. Starting FireWyrmJS',
                      v
                    ),
                    (b = new e(i)),
                    [2, b]
                  )
                case 3:
                  throw new Error('Could not load fwjs')
              }
            })
          })
        )
      }
      function c() {
        return u(this, void 0, void 0, function() {
          var t, e
          return l(this, function(r) {
            switch (r.label) {
              case 0:
                return [4, a(w)]
              case 1:
                return (t = r.sent()), t ? [4, t.create(v, {})] : [3, 3]
              case 2:
                return (e = r.sent()), (n(5).plugin2.installed = !0), [2, e]
              case 3:
                return [2, null]
            }
          })
        })
      }
      var u =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        l =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        p = n(0),
        f = n(2),
        h = n(24),
        d = n(1),
        A = null,
        g = document.documentElement.className,
        m = -1 != g.indexOf('GCPlugin2'),
        v = 'application/x-gcplugin2',
        y = f.get(),
        b = null,
        w = 2e3
      !(function(t) {
        ;(t.detect = o),
          (t.ext_installed = m),
          (t.watchForInstall = s),
          (t.supported = h.chrome && (h.mac || h.win))
      })(c || (c = {})),
        h.mozilla &&
          h.versionNumber >= 50 &&
          (h.mac || h.win) &&
          (c.supported = !0),
        (t.exports = c)
    },
    function(t, e, n) {
      'use strict'
      function r(t, e) {
        return e
          ? ((e = c.extend(e, { zone: t.zone })),
            'questions' === e.type
              ? new a.FormDescription.QuestionBlockDescription(e)
              : 'number' === e.type
              ? new a.FormDescription.NumberBlockDescription(e)
              : null)
          : null
      }
      function i(t) {
        var e = t.exam_answer_multiplicities
        if (c.isObject(e) && !c.isArray(e)) {
          var n = e,
            r = []
          return (
            c.each(n, function(t, e) {
              c.each(t, function(t, n) {
                r[n] || (r[n] = {}), (r[n][e] = t)
              })
            }),
            function(t) {
              return r[t] || 1
            }
          )
        }
        return c.isArray(e)
          ? function(t) {
              return e[t]
            }
          : function(t) {
              return e || 1
            }
      }
      var o =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        s = n(28),
        a = n(4),
        c = n(0),
        u = n(22),
        l = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            o(e, t),
            (e.prototype._findBlocks = function(t) {
              var e = this.findIDBlock(t),
                n = c.without(t.blocks, e)
              if (!n.length) return null
              var r = c.min(n, function(t) {
                  return t.left + t.top
                }),
                i =
                  this.formMode.exam_versions <= 1 &&
                  1 == this.formMode.exam_length
              if (1 !== r.rows || i) {
                if (((r = null), this.formMode.exam_versions > 1)) return null
              } else if (
                ((n = c.without(n, r)),
                this.formMode.exam_versions > 1 &&
                  this.formMode.exam_versions < 4 &&
                  (this.formMode.exam_versions = 4),
                this.formMode.exam_versions !== r.cols &&
                  this.formMode.exam_versions > 1)
              )
                return null
              return 0 === n.length ? null : { id: e, version: r, answers: n }
            }),
            (e.prototype.getFormDescriptionNoFormCode = function(t) {
              var e = this,
                n = this._findBlocks(t)
              if (!n) return (this.lastFailure = 'invalidStructure'), null
              var r = new a.FormDescription({ blocks: [] }),
                o = r.blocks
              if (!n.id) return (this.lastFailure = 'invalidStructure'), null
              o.push(this.createIDBlockDescription(n.id))
              var s = i(this.formMode)
              if (n.version) {
                var u = new a.FormDescription.QuestionBlockDescription({
                  type: 'questions',
                  zone: 0,
                  row: n.version.row,
                  col: n.version.col,
                  rows: n.version.rows,
                  cols: n.version.cols,
                  form_area: 'version',
                  questions: [
                    new a.FormDescription.QuestionItemDescription({
                      label: 'Version',
                      choices: this.numberRange(1, n.version.cols),
                      multiplicity_min: 1,
                      multiplicity_max: 1
                    })
                  ]
                })
                this.formMode.exam_versions <= 1 && (u.ignore = !0), o.push(u)
              }
              var l = 1
              return (
                c.each(n.answers, function(t, n) {
                  for (
                    var r = new a.FormDescription.QuestionBlockDescription({
                        type: 'questions',
                        zone: 0,
                        row: t.row,
                        col: t.col,
                        rows: t.rows,
                        cols: t.cols,
                        form_area: 'main',
                        questions: []
                      }),
                      i = 0;
                    i < t.rows;
                    ++i
                  ) {
                    if (
                      l <= e.formMode.exam_length ||
                      -1 == e.formMode.exam_length
                    ) {
                      var c = s(l - 1),
                        u = new a.FormDescription.QuestionItemDescription({
                          label: 'Question ' + l,
                          choices: e.letterRange('A', t.cols),
                          multiplicity_min: 1,
                          multiplicity_max: c
                        })
                      r.questions.push(u)
                    }
                    l++
                  }
                  o.push(r)
                }),
                l - 1 < this.formMode.exam_length
                  ? ((this.lastFailure = 'examLength'), null)
                  : r
              )
            }),
            (e.prototype.getFormDescriptionFormCode = function(t, e) {
              var n = this,
                o = [],
                s = [],
                u = i(n.formMode),
                l = e.startOffset || 0,
                p = n.formMode.exam_length,
                f = -1 == p || n.formMode.auto_length,
                h = e && e.pageCount && e.pageCount > 1,
                d = []
              d =
                e.desc_v && e.desc_v >= 2
                  ? JSON.parse(JSON.stringify(e.form_description))
                  : [
                      {
                        type: 'rect',
                        zone: 0,
                        blocks: JSON.parse(
                          JSON.stringify(e.form_description.blocks)
                        )
                      }
                    ]
              var A
              if (
                (c.each(d, function(t) {
                  if ('rect' == t.type) {
                    var e = t.blocks
                    A ||
                      ((A = c.find(e, function(t) {
                        return 'version' == t.form_area
                      })) &&
                        ((A.questions[0].multiplicity_min = 1),
                        (A.questions[0].multiplicity_max = 1),
                        o.push(r(t, A)),
                        (e = c.without(e, A)))),
                      c.each(e, function(e) {
                        if ('questions' === e.type && 'main' == e.form_area) {
                          var i = []
                          c.each(e.questions, function(t) {
                            var e = u(l)
                            if (
                              ((t.multiplicity_min = 1),
                              (t.multiplicity_max = e),
                              n.formMode.ignore_formcode_choices)
                            )
                              for (var r = 0; r < t.choices.length; r++)
                                t.choices[
                                  r
                                ] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(r, r + 1)
                            ;(!t.choices.length || (l >= p && !f)) &&
                              (t.ignore = !0),
                              i.push(t),
                              l++
                          }),
                            (e.questions = i),
                            e.questions.length || (e.ignore = !0),
                            o.push(r(t, e))
                        } else 'number' === e.type && 'main' == e.form_area ? (l >= p && !f && (e.ignore = !0), o.push(r(t, e)), l++) : o.push(r(t, e))
                      })
                  } else
                    'clip' == t.type &&
                      (s.push(
                        new a.FormDescription.ClipItemDescription({
                          zone: t.zone,
                          label: t.label
                        })
                      ),
                      l++)
                }),
                !h && !f && l < n.formMode.exam_length)
              )
                return (n.lastFailure = 'examLength'), null
              var g = new a.FormDescription({
                blocks: o,
                clips: s,
                has_formcode: !0
              })
              return (g.oneTimeDescription = !0), g
            }),
            (e.prototype.getFormDescription = function(t) {
              var e = this
              return u(t).then(function(n) {
                return n
                  ? e.getFormDescriptionFormCode(t, n)
                  : e.getFormDescriptionNoFormCode(t)
              })
            }),
            e
          )
        })(s)
      t.exports = l
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        i =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        s = n(0),
        a = n(28),
        c = n(4),
        u = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            r(e, t),
            (e.prototype.getFormDescription = function(t) {
              return i(this, void 0, void 0, function() {
                var e, n, r, i
                return o(this, function(o) {
                  return (e = this.findIDBlock(t))
                    ? ((n = s.without(t.blocks, e)),
                      1 !== n.length
                        ? [2, null]
                        : ((r = n[0]),
                          3 != r.cols || 10 != r.rows
                            ? [2, null]
                            : ((i = new c.FormDescription({ blocks: [] })),
                              i.blocks.push(this.createIDBlockDescription(e)),
                              i.blocks.push(
                                new c.FormDescription.NumberBlockDescription({
                                  type: 'number',
                                  zone: 0,
                                  choices: [
                                    '0',
                                    '1',
                                    '2',
                                    '3',
                                    '4',
                                    '5',
                                    '6',
                                    '7',
                                    '8',
                                    '9'
                                  ],
                                  form_area: 'main',
                                  row: r.row,
                                  col: r.col,
                                  rows: r.rows,
                                  cols: r.cols,
                                  label: 'Score'
                                })
                              ),
                              [2, i])))
                    : [2, null]
                })
              })
            }),
            e
          )
        })(a)
      t.exports = u
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        return t.label && ' ' != t.label
      }
      function i(t, e) {
        var n = null,
          i = 1,
          o = e.row,
          s = e.col
        if ('questions' == t.type && 0 === t.questions.length) return []
        if ('number' === t.type) {
          return [
            new f.StructuredScan.NumberItem(
              p.extend({}, t, {
                type: 'number',
                form_area: t.form_area,
                block_row: o,
                block_col: s,
                intensities: e.getNumberIntensities(),
                fdid: 'zone' + e.zone + 'br' + o + 'bc' + s
              })
            )
          ]
        }
        if ('questions' === t.type) {
          var a = [],
            c = !1
          return (
            p.each(t.questions, function(u, l) {
              ;(c = !0), r(u) ? ((n = u.label), (i = 1)) : i++
              var h = new f.StructuredScan.QuestionItem(
                p.extend({}, u, {
                  type: 'question',
                  form_area: t.form_area,
                  block_row: o,
                  block_col: s,
                  row: l,
                  intensities: e.getRowIntensities(l),
                  label: r(u) ? u.label : n + '(line ' + i + ')',
                  fdid: 'zone' + e.zone + 'br' + o + 'bc' + s + 'r' + l
                })
              )
              a.push(h)
            }),
            !!c && a
          )
        }
        return !1
      }
      function o(t, e) {
        ;(t = p.sortBy(t, function(t) {
          return 1e3 * t.zone
        })),
          (e = p.sortBy(e, function(t) {
            return 1e3 * t.zone
          }))
        for (
          var n = [], r = 0, i = p.zip(t, e), o = 0, s = i;
          o < s.length;
          o++
        ) {
          var a = s[o],
            c = a[0],
            u = a[1]
          c &&
            u &&
            (n.push({
              desc: c,
              scan: u,
              type: 'clip',
              index: 1e3 * c.zone + r
            }),
            r++)
        }
        return p.all(n, function(t) {
          return t.desc.zone == t.scan.zone
        })
          ? t.length != n.length
            ? null
            : n
          : null
      }
      function s(t, e) {
        return new f.StructuredScan.ClipItem(
          p.extend({}, t, {
            image: e.image,
            type: 'clip',
            form_area: 'clip',
            fdid: 'zone' + t.zone,
            blur: e.blur,
            skew: e.skew,
            width: e.width,
            height: e.height
          })
        )
      }
      function a(t, e) {
        var n = [],
          r = p.clone(t),
          i = p.clone(e),
          o = p.filter(r, function(t) {
            return 'ids' == t.form_area
          })
        ;(r = p.difference(r, o)),
          (o = p.sortBy(o, function(t) {
            return -t.col
          }))
        for (var s = [], a = 0, c = o; a < c.length; a++) {
          var u = c[a]
          !(function(t) {
            var e = p.max(i, function(e) {
              return 0 !== e.row ? -1 : e.zone !== t.zone ? -1 : e.col
            })
            s.unshift({ desc: t, scan: e }), (i = p.without(i, e))
          })(u)
        }
        n = n.concat(s)
        var l = p.sortBy(r, function(t) {
            return 1e3 * t.zone + 100 * t.col + t.row
          }),
          f = p.sortBy(i, function(t) {
            return 1e3 * t.zone + 100 * t.col + t.row
          }),
          h = 0,
          d = p.zip(l, f)
        return (
          p.each(d, function(t) {
            var e = t[0],
              r = t[1]
            e &&
              r &&
              (n.push({
                desc: e,
                scan: r,
                type: 'block',
                index: 1e3 * e.zone + h
              }),
              h++)
          }),
          p.all(n, function(t) {
            return (
              t.desc.rows == t.scan.rows &&
              t.desc.cols == t.scan.cols &&
              t.desc.zone == t.scan.zone
            )
          })
            ? t.length != n.length
              ? null
              : n
            : null
        )
      }
      function c(t, e) {
        return u(this, void 0, void 0, function() {
          var n, r, c, u, g, m, v, y, b, w, _, S, k, x, C, O, I, E, M, R, D, B
          return l(this, function(l) {
            switch (l.label) {
              case 0:
                return t
                  ? [4, d.PromiseAll([t, A(e)])]
                  : [2, d.rejected(new Error('Invalid form description'))]
              case 1:
                if (
                  ((n = l.sent()),
                  (r = n[0]),
                  (c = n[1]),
                  (u = a(r.blocks, e.blocks)),
                  (g = o(r.clips, e.clips)),
                  e.clips && e.clips.length > 0 && !g)
                ) {
                  for (
                    m = e.clips.shift(), v = 0, y = e.blocks;
                    v < y.length;
                    v++
                  )
                    (b = y[v]), b.zone > m.zone && b.zone--
                  for (w = 0, _ = e.clips; w < _.length; w++)
                    (S = _[w]), S.zone > m.zone && S.zone--
                  ;(u = a(r.blocks, e.blocks)), (g = o(r.clips, e.clips))
                }
                if (!u || !g)
                  return [
                    2,
                    d.rejected(new Error('No matching blocks or clips'))
                  ]
                ;(k = p.sortBy(u.concat(g), function(t) {
                  return t.index
                })),
                  (x = new f.StructuredScan({
                    type: r.type,
                    fc_data: c,
                    structure_hash: e.hash()
                  })),
                  (C = x.items),
                  (O = 0),
                  (I = k),
                  (l.label = 2)
              case 2:
                if (!(O < I.length)) return [3, 5]
                if (((E = I[O]), E.desc.ignore)) return [3, 4]
                if ('clip' === E.type) C.push(s(E.desc, E.scan))
                else {
                  if (!1 === (M = i(E.desc, E.scan)))
                    return [
                      2,
                      d.rejected(new Error('Could not structure block'))
                    ]
                  for (R = 0, D = M; R < D.length; R++) (B = D[R]), C.push(B)
                }
                return [4, h.yieldAsync()]
              case 3:
                l.sent(), (l.label = 4)
              case 4:
                return O++, [3, 2]
              case 5:
                return [2, x]
            }
          })
        })
      }
      var u =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        l =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var p = n(0),
        f = n(4),
        h = n(112),
        d = n(1),
        A = n(22)
      ;(e.matchBlocks = a), (e.structure = c)
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        i =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        o = n(3),
        s = n(135),
        a = n(12),
        c = n(2),
        u = n(63),
        l = n(62),
        p = n(64),
        f = n(14),
        h = n(0),
        d = n(1),
        A = c.get(),
        g = 'us',
        m = 'https://downloads.gradecam.com'
      window._GCREGION && (g = window._GCREGION),
        'asia' == g && (m = 'https://cdn-qnhd.menco.cn/assets/vendors/gradecam/gc')
      var v = h.template(u),
        y = h.template(l),
        b = h.template(p),
        w = (function() {
          function t() {
            ;(this.loader = null),
              (this.evtObj = new o.ClassTS()),
              (this.instOpts = {
                downloadsUrl: m,
                reqFeatures: [],
                desiredVersion: 'current',
                minVersion: '1.0.0.0',
                params: []
              }),
              (this.returnUrl = window.location.href),
              (this.moduleOrder = null),
              (this.moduleOptions = {}),
              (this.bind = h.bind(this.evtObj.bind, this.evtObj)),
              (this.unbind = h.bind(this.evtObj.unbind, this.evtObj))
          }
          return (
            (t.prototype.makeInstallUrlFactory = function(t) {
              var e = this
              return function(n) {
                return t.makeInstallUrl(e.instOpts.desiredVersion, n)
              }
            }),
            (t.prototype.pluginNotInstalled = function(t, e) {
              var n = e.module,
                r = d.newDeferred(),
                i = function() {
                  n.cancelLoad(), r.resolve(!0)
                }
              if (
                ((window.__GC_TN_HelperFunc = i),
                window.external &&
                  void 0 !== window.external.msActiveXFilteringEnabled &&
                  window.external.msActiveXFilteringEnabled())
              )
                (t.innerHTML = y({ planeURI: f.plane })),
                  this.evtObj.trigger('install', { error: 'unsupported' }),
                  r.reject(new a.UnsupportedError('unsupported'))
              else {
                var o = this.makeInstallUrlFactory(n),
                  s = o(this.returnUrl),
                  c = n.doesInstallRequireRestart(),
                  u =
                    !(!e.fallbacks || !e.fallbacks.length) &&
                    '__GC_TN_HelperFunc'
                ;(t.innerHTML = v({
                  upgrade: !1,
                  url: s,
                  planeURI: f.plane,
                  canTryNext: u
                })),
                  this.evtObj.trigger('install', {
                    error: null,
                    url: s,
                    upgrade: !1,
                    makeUrl: o,
                    module: n.getName(),
                    requiresRestart: c,
                    nextCb: u ? i : null
                  }),
                  c ||
                    n.waitForInstall().then(function(t) {
                      'cancelled' != t && r.resolve(!1)
                    })
              }
              return r.promise
            }),
            (t.prototype.needsUpgrade = function(t, e) {
              var n = e.module,
                r = this.makeInstallUrlFactory(n),
                i = r(this.returnUrl)
              ;(t.innerHTML = v({
                upgrade: !0,
                url: i,
                planeURI: f.plane,
                canTryNext: !1
              })),
                this.evtObj.trigger('install', {
                  error: null,
                  url: i,
                  makeUrl: r,
                  upgrade: !0,
                  module: n.getName(),
                  requiresRestart: !0
                })
            }),
            (t.prototype.unsupported = function(t) {
              this.evtObj.trigger('install', { error: 'unsupported' }),
                (t.innerHTML = b({
                  url: 'http://support.gradecam.com',
                  planeURI: f.plane
                }))
            }),
            (t.prototype.requireFeatures = function(t) {
              this.instOpts.reqFeatures = t
            }),
            (t.prototype.requireMinVersion = function(t) {
              this.instOpts.minVersion = t
            }),
            (t.prototype.preferVersion = function(t) {
              this.instOpts.desiredVersion = t
            }),
            (t.prototype.setReturnURL = function(t) {
              this.returnUrl = t
            }),
            (t.prototype.setModuleOption = function(t, e, n) {
              ;(this.moduleOptions[t] = this.moduleOptions[t] || {}),
                (this.moduleOptions[t][e] = n),
                this.loader && this.loader.setModuleOption(t, e, n)
            }),
            (t.prototype.setDesiredVersion = function(t) {
              this.instOpts.minVersion = t
            }),
            (t.prototype.setModuleOrder = function(t) {
              ;(this.moduleOrder = t),
                A.debug('Plugin module order:', t),
                this.loader && this.loader.setModuleOrder(t)
            }),
            (t.prototype.doInstantiate = function(t, e, n) {
              return r(this, void 0, void 0, function() {
                var r, o, s, c, u, l
                return i(this, function(i) {
                  switch (i.label) {
                    case 0:
                      e
                        ? ((o = n || []),
                          o.unshift(e),
                          (r = this.loader.instantiateFromList(
                            o,
                            this.instOpts
                          )))
                        : (r = n
                            ? this.loader.instantiateFromList(n, this.instOpts)
                            : this.loader.instantiate(this.instOpts)),
                        (i.label = 1)
                    case 1:
                      return i.trys.push([1, 3, , 9]), [4, r]
                    case 2:
                      return (s = i.sent()), [2, s]
                    case 3:
                      return (c = i.sent()) instanceof a.NeedsInstallError
                        ? ((u = c.getStatus()),
                          'install' != u.installType
                            ? [3, 5]
                            : [4, this.pluginNotInstalled(t, u)])
                        : [3, 7]
                    case 4:
                      return (
                        (l = i.sent()),
                        l
                          ? [2, this.doInstantiate(t, null, u.fallbacks)]
                          : [2, this.doInstantiate(t, u.module, u.fallbacks)]
                      )
                    case 5:
                      throw (this.needsUpgrade(t, u), c)
                    case 6:
                      return [3, 8]
                    case 7:
                      if (c instanceof a.UnsupportedError)
                        throw (this.unsupported(t), c)
                      i.label = 8
                    case 8:
                      throw c
                    case 9:
                      return [2]
                  }
                })
              })
            }),
            (t.prototype.isInstalled = function() {
              return s.isInstalled(this.moduleOrder)
            }),
            (t.prototype.getTyperOptions = function(t, e) {
              return s.getTyperOptions(
                this.moduleOrder,
                t || this.instOpts.desiredVersion,
                e || this.returnUrl
              )
            }),
            (t.prototype.startInstall = function(t, e) {
              return r(this, void 0, void 0, function() {
                var n,
                  r,
                  o = this
                return i(this, function(i) {
                  switch (i.label) {
                    case 0:
                      h.extend(this.instOpts, e),
                        this.loader ||
                          ((this.loader = new s(t)),
                          this.moduleOrder &&
                            this.loader.setModuleOrder(this.moduleOrder),
                          h.each(this.moduleOptions, function(t, e) {
                            h.each(t, function(t, n) {
                              o.loader.setModuleOption(e, n, t)
                            })
                          })),
                        (i.label = 1)
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]), [4, this.doInstantiate(t)]
                      )
                    case 2:
                      return (n = i.sent()), [2, n]
                    case 3:
                      throw ((r = i.sent()),
                      A.error('Could not instantiate GradeCam Reader: ', r),
                      r)
                    case 4:
                      return [2]
                  }
                })
              })
            }),
            t
          )
        })(),
        _ = new w()
      t.exports = _
    },
    function(t, e, n) {
      'use strict'
      var r = n(14),
        i = (function() {
          var t = {
              close_label: 'Close',
              inherit_frames: !1,
              fade_in_speed: 300,
              fade_out_speed: 300,
              attribute_name: 'rel',
              tags_to_hide: ['select', 'embed'],
              default_width: 450,
              version_number: '2.2',
              build_number: '1612',
              is_opera: -1 != navigator.userAgent.indexOf('Opera/9'),
              is_ie: -1 != navigator.userAgent.indexOf('MSIE '),
              is_ie6: !1,
              is_firefox:
                'Netscape' == navigator.appName &&
                -1 != navigator.userAgent.indexOf('Gecko') &&
                -1 == navigator.userAgent.indexOf('Netscape'),
              is_mac: -1 != navigator.userAgent.indexOf('Macintosh'),
              base_url: '',
              setPath: function(e) {
                t.base_url = e
              },
              bind: function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                  e[n - 1] = arguments[n]
                for (var e = [], r = 1; r < arguments.length; r++)
                  e.push(arguments[r])
                return function(n) {
                  return t.apply(this, [n].concat(e))
                }
              },
              html: function(n, r) {
                if (void 0 === n) return o.content
                if ((void 0 === r && (r = {}), e.is_loaded)) {
                  t.clear(),
                    t.updateObject(o.wrapper.style, {
                      display: 'block',
                      visibility: 'hidden',
                      left: 0,
                      top: 0,
                      height: '',
                      width: ''
                    }),
                    'string' == typeof n
                      ? (o.content.innerHTML = n)
                      : o.content.appendChild(n),
                    t.getPageSize(),
                    void 0 === r.can_resize && (r.can_resize = !0),
                    void 0 === r.fade_in && (r.use_fade = !0),
                    r.fullscreen && ((r.width = '100%'), (r.height = '100%')),
                    (s.container = [
                      2 * o.wrapper.offsetLeft,
                      2 * o.wrapper.offsetTop
                    ]),
                    (s.wrapper = [
                      o.wrapper.offsetWidth - o.content.offsetWidth,
                      o.wrapper.offsetHeight - o.content.offsetHeight
                    ]),
                    (s.wrapper[1] += 4)
                  var i,
                    a = r.width || t.default_width
                  r.height
                    ? (i = r.height)
                    : ((o.content.style.height = '100%'),
                      (i = o.content.offsetHeight + 12),
                      (o.content.style.height = '')),
                    (e.dimensions = [a, i]),
                    (e.params = r),
                    t.reposition()
                  for (var c = 0; c < t.tags_to_hide.length; c++)
                    u(t.tags_to_hide[c], o.content)
                  o.wrapper.style.visibility = 'visible'
                }
              },
              clear: function() {
                for (o.loading.style.display = 'none'; o.content.firstChild; )
                  o.content.removeChild(o.content.firstChild)
              },
              show: function(n, r, i) {
                l(r, i, function() {
                  t.html(n, e.params)
                })
              },
              hide: function() {
                e.plugin && e.plugin.unload && e.plugin.unload(),
                  (e = {}),
                  t.clear()
                for (var n = 0; n < t.tags_to_hide.length; n++)
                  u(t.tags_to_hide[n])
                ;(o.loading.style.display = 'none'),
                  (o.wrapper.style.display = 'none'),
                  t.fade(
                    o.overlay,
                    t.getOpacity(null, o.overlay),
                    0,
                    t.fade_out_speed,
                    function() {
                      o.overlay.style.display = 'none'
                    }
                  ),
                  t.fireEvent('hide')
              },
              reposition: function() {
                if (e.is_loaded) {
                  if (
                    ('none' != o.loading.style.display && t.center(o.loading),
                    e.dimensions)
                  ) {
                    var n = t.getPageSize(),
                      r = e.dimensions[0],
                      i = e.dimensions[1]
                    if (
                      (-1 != i.toString().indexOf('%')
                        ? (o.wrapper.style.height =
                            (Math.max(
                              document.documentElement.clientHeight,
                              document.body.clientHeight,
                              n.height
                            ) -
                              s.container[0]) *
                              (parseInt(i, 10) / 100) +
                            'px')
                        : i
                        ? ((o.content.style.height = i + 'px'),
                          (o.wrapper.style.height =
                            o.content.offsetHeight + s.wrapper[1] + 'px'))
                        : (o.wrapper.style.height =
                            o.content.offsetHeight + s.wrapper[1] + 'px'),
                      -1 != r.toString().indexOf('%')
                        ? (o.wrapper.style.width =
                            (Math.max(
                              document.documentElement.clientWidth,
                              document.body.clientWidth,
                              n.width
                            ) -
                              s.container[1]) *
                              (parseInt(r, 10) / 100) +
                            'px')
                        : ((o.content.style.width = r + 'px'),
                          (o.wrapper.style.width =
                            o.content.offsetWidth + s.wrapper[0] + 'px')),
                      t.updateObject(o.content.style, {
                        width: '',
                        height: ''
                      }),
                      (r = parseInt(o.wrapper.style.width, 10)),
                      (i = parseInt(o.wrapper.style.height, 10)),
                      e.params.can_resize)
                    ) {
                      var a = n.width,
                        c = n.height
                      ;(a -= s.container[0]),
                        (c -= s.container[1]),
                        r > a && (e.params.constrain && (i *= a / r), (r = a)),
                        i > c && (e.params.constrain && (r *= c / i), (i = c)),
                        t.updateObject(o.wrapper.style, {
                          width: r + 'px',
                          height: i + 'px'
                        })
                    }
                    ;(o.content.style.height = i - s.wrapper[1] + 'px'),
                      e.dimensions != ['100%', '100%'] && t.center(o.wrapper)
                  }
                  o.overlay.style.height =
                    Math.max(
                      document.body.clientHeight,
                      document.documentElement.clientHeight
                    ) + 'px'
                }
              },
              updateObject: function(t, e) {
                for (var n in e) t[n] = e[n]
              },
              center: function(e) {
                var n = t.getPageSize(),
                  r = t.getScrollPos(),
                  i = t.getElementSize(e),
                  o = Math.round((n.width - i.width) / 2 + r.scrollX),
                  s = Math.round((n.height - i.height) / 2 + r.scrollY)
                e.offsetLeft && (o -= e.offsetLeft),
                  e.offsetTop && (s -= e.offsetTop),
                  e.style.left && (o += parseInt(e.style.left, 10)),
                  e.style.top && (s += parseInt(e.style.top, 10)),
                  (o -= 10),
                  t.updateObject(e.style, { top: s + 'px', left: o + 'px' })
              },
              getStyle: function(t, e) {
                return t.currentStyle
                  ? t.currentStyle[e]
                  : window.getComputedStyle
                  ? document.defaultView
                      .getComputedStyle(t, null)
                      .getPropertyValue(e)
                  : void 0
              },
              getScrollPos: function() {
                var t = document.documentElement
                return {
                  scrollX:
                    document.body.scrollLeft ||
                    window.pageXOffset ||
                    (t && t.scrollLeft),
                  scrollY:
                    document.body.scrollTop ||
                    window.pageYOffset ||
                    (t && t.scrollTop)
                }
              },
              getPageSize: function() {
                return {
                  width:
                    window.innerWidth ||
                    (document.documentElement &&
                      document.documentElement.clientWidth) ||
                    document.body.clientWidth,
                  height:
                    window.innerHeight ||
                    (document.documentElement &&
                      document.documentElement.clientHeight) ||
                    document.body.clientHeight
                }
              },
              getElementSize: function(t) {
                return {
                  width: t.offsetWidth || t.style.pixelWidth,
                  height: t.offsetHeight || t.style.pixelHeight
                }
              },
              fade: function(e, n, r, i, o) {
                if (
                  ((void 0 === n || n < 0) && (n = 0),
                  n > 100 && (n = 100),
                  (void 0 === r || r < 0) && (r = 0),
                  r > 100 && (r = 100),
                  void 0 === i && (i = 0),
                  e.fader && clearInterval(e.fader),
                  !i)
                )
                  return t.setOpacity(null, e, r), void (o && o())
                var s = r - n,
                  a = i,
                  c = a / 25,
                  u = s / c
                0 == u
                  ? (u = 1)
                  : u > 0
                  ? (u = Math.ceil(u))
                  : u < 0 && (u = Math.floor(u)),
                  (e.fader = setInterval(
                    t.bind(
                      function(e, n, r, i, o) {
                        var s = t.getOpacity(e, n) + r
                        t.setOpacity(e, n, s),
                          ((r < 0 && s <= i) || (r > 0 && s >= i)) &&
                            (t.setOpacity(e, n, i),
                            clearInterval(n.fader),
                            o && o())
                      },
                      e,
                      u,
                      r,
                      o
                    ),
                    25
                  ))
              },
              setOpacity: function(t, e, n) {
                ;(n = Math.round(n)),
                  (e.style.opacity = n / 100),
                  (e.style.filter = 'alpha(opacity=' + n + ')')
              },
              getOpacity: function(e, n) {
                return 100 * t.getStyle(n, 'opacity')
              },
              addEvent: function(t, e, n) {
                if (t.addEventListener) return t.addEventListener(e, n, !1), !0
                if (t.attachEvent) {
                  return t.attachEvent('on' + e, n)
                }
                return !1
              },
              addEventListener: function(t, e) {
                n[t] || (n[t] = []), n[t].push(e)
              },
              removeEventListener: function(t, e) {
                if (n[t]) {
                  var r = n[t].indexOf(e)
                  r > -1 && n[t].splice(r, 1)
                }
              },
              fireEvent: function(t) {
                if (n[t] && n[t].length)
                  for (var e = 0; e < n[t].length; e++) {
                    for (var r = [], i = 1; i < arguments.length; i++)
                      r.push(arguments[i])
                    if (!1 === n[t][e](r)) break
                  }
              },
              plugins: {
                list: [],
                register: function(e, n) {
                  void 0 === n && (n = !1),
                    n
                      ? t.plugins.list.push(e)
                      : (t.plugins.list = [e].concat(t.plugins.list))
                }
              }
            },
            e = {},
            n = {},
            o = {},
            s = {},
            a = function(e) {
              t.getPageSize(),
                (o.container = document.createElement('div')),
                (o.container.id = 'ibox'),
                (o.overlay = document.createElement('div')),
                (o.overlay.style.display = 'none'),
                t.setOpacity(null, o.overlay, 0),
                t.is_firefox
                  ? (o.overlay.style.backgroundImage = "url('" + r.bg + "')")
                  : (o.overlay.style.background = '#000000'),
                (o.overlay.id = 'ibox_overlay')
              var n = { position: 'absolute', top: 0, left: 0, width: '100%' }
              t.updateObject(o.overlay.style, n),
                o.container.appendChild(o.overlay),
                (o.loading = document.createElement('div')),
                (o.loading.id = 'ibox_loading'),
                (o.loading.innerHTML = 'Loading...'),
                (o.loading.style.display = 'none'),
                o.container.appendChild(o.loading),
                (o.wrapper = document.createElement('div')),
                (o.wrapper.id = 'ibox_wrapper'),
                t.updateObject(o.wrapper.style, {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'none'
                }),
                (o.content = document.createElement('div')),
                (o.content.id = 'ibox_content'),
                t.updateObject(o.content.style, { overflow: 'auto' }),
                o.wrapper.appendChild(o.content)
              var i = document.createElement('div')
              i.id = 'ibox_footer_wrapper'
              var s = document.createElement('a')
              return (
                (s.innerHTML = t.close_label),
                (s.href = 'javascript:void(0)'),
                i.appendChild(s),
                (o.footer = document.createElement('div')),
                (o.footer.id = 'ibox_footer'),
                (o.footer.innerHTML = '&nbsp;'),
                i.appendChild(o.footer),
                o.wrapper.appendChild(i),
                o.container.appendChild(o.wrapper),
                e.appendChild(o.container),
                t.updateObject(o.wrapper.style, { right: '', bottom: '' }),
                o.container
              )
            },
            c = function(e, n) {
              void 0 === n && (n = document.body)
              for (var r = n.getElementsByTagName(e), i = 0; i < r.length; i++)
                'hidden' != t.getStyle(r[i], 'visibility') &&
                  'none' != r[i].style.display &&
                  ((r[i].style.visibility = 'hidden'), (r[i].wasHidden = !0))
            },
            u = function(t, e) {
              void 0 === e && (e = document.body)
              for (var n = e.getElementsByTagName(t), r = 0; r < n.length; r++)
                n[r].wasHidden &&
                  ((n[r].style.visibility = 'visible'), (n[r].wasHidden = null))
            },
            l = function(n, r, i) {
              f || h(),
                void 0 === r && (r = {}),
                e.plugin && t.hide(),
                (e.is_loaded = !0),
                (e.params = r),
                (o.loading.style.display = 'block'),
                t.center(o.loading),
                t.reposition()
              for (var s = 0; s < t.tags_to_hide.length; s++)
                c(t.tags_to_hide[s])
              ;(o.footer.innerHTML = n || '&nbsp;'),
                (o.overlay.style.display = 'block')
              var a
              ;(a = t.is_firefox ? 100 : 70),
                t.fade(
                  o.overlay,
                  t.getOpacity(null, o.overlay),
                  a,
                  t.fade_in_speed,
                  i
                ),
                t.fireEvent('show')
            },
            p = function() {
              var t = document.getElementsByTagName('head')[0],
                e = document.createElement('div')
              ;(e.innerHTML =
                '<p>x</p><style type="text/css">#ibox_footer_wrapper {font-weight:bold;height:20px;line-height:20px;} #ibox_footer_wrapper a {text-decoration:none;background:#888;border:1px solid #666;line-height:16px;padding:0 5px;color:#333;font-weight:bold;font-family:Verdana, Arial, Helvetica, sans-serif;font-size:10px;} #ibox_footer_wrapper a:hover {background-color:#bbb;color:#111;} #ibox_footer_wrapper {font-size:12px;font-family:Verdana, Arial, Helvetica, sans-serif;color:#111;} #ibox_wrapper {border:1px solid #ccc;} #ibox_wrapper {background-color:#999;}#ibox_content {background-color:#eee;border:1px solid #666;} #ibox_loading {padding:50px; background:#000;color:#fff;font-size:16px;font-weight:bold;}</style>'),
                t.insertBefore(e.childNodes[1], t.firstChild),
                (e.innerHTML =
                  '<p>x</p><style type="text/css">#ibox {z-index:1000000;text-align:left;} #ibox_overlay {z-index:1000000;} #ibox_loading {position:absolute;z-index:1000001;} #ibox_wrapper {margin:30px;position:absolute;top:0;left:0;z-index:1000001;} #ibox_content {z-index:1000002;margin:27px 5px 5px 5px;padding:2px;} #ibox_content object {display:block;} #ibox_content .ibox_image {width:100%;height:100%;margin:0;padding:0;border:0;display:block;} #ibox_footer_wrapper a {float:right;display:block;outline:0;margin:0;padding:0;} #ibox_footer_wrapper {text-align:left;position:absolute;top:5px;right:5px;left:5px;white-space:nowrap;overflow:hidden;}</style>'),
                t.insertBefore(e.childNodes[1], t.firstChild)
            },
            f = !1,
            h = function() {
              if (!f) {
                ;(f = !0), p()
                for (
                  var e,
                    n = document.getElementsByTagName('script'),
                    r = 0,
                    i = null;
                  (i = n[r]);
                  r++
                )
                  if (
                    (e = i.getAttribute('src')) &&
                    ((e = e.split('?')[0]),
                    '/ibox.js' == e.substr(e.length - 8))
                  ) {
                    t.setPath(e.substr(0, e.length - 7))
                    break
                  }
                a(document.body), t.fireEvent('load')
              }
            }
          return (
            t.addEvent(window, 'keypress', function(t) {
              t.keyCode == (window.event ? 27 : t.DOM_VK_ESCAPE) && i.hide()
            }),
            t.addEvent(window, 'resize', t.reposition),
            t.addEvent(window, 'load', h),
            t.addEvent(window, 'scroll', t.reposition),
            t
          )
        })()
      t.exports = i
    },
    function(t, e, n) {
      'use strict'
      function r(t, e) {
        c(t.items).each(function(t) {
          t.validate = !1
        }),
          e(t.items)
      }
      var i =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        s = n(30),
        a = n(3),
        c = n(0),
        u = n(57),
        l = n(32),
        p = n(47),
        f = n(49),
        h = n(48),
        d = n(51),
        A = n(147),
        g = n(148),
        m = n(84),
        v = n(2),
        y = n(85),
        b = n(43),
        w = n(1),
        _ = n(21)
      n(16)
      var S = n(17),
        k = n(66),
        x = new v(),
        C = 0,
        O = n(14),
        I = n(13),
        E = function(t) {
          setTimeout(t, 0)
        },
        M = (function() {
          function t() {
            var t = this
            ;(this.evtObj = new a.ClassTS()),
              (this.controller = null),
              (this.el = null),
              (this.readyDfd = w.newDeferred()),
              (this.pid = C++),
              (this.cameraStarted = !1),
              (this.curCamera$ = new k.BehaviorSubject('')),
              (this.scan$ = new S.Subject()),
              (this.formcode$ = new S.Subject()),
              (this.scanCallback = null),
              (this.showMsg = !0),
              (this.mode = new d()),
              (this.instanceDfd = w.newDeferred()),
              (this.instanceOptions = {}),
              (this.requiredFeatures = []),
              (this.requiredVersion = '0.0.0.0'),
              (this.desiredVersion = 'current'),
              (this.returnURL = window.location.href),
              (this.validateCallback = r),
              (this.videoWidth = 640),
              (this.videoHeight = 480),
              (this.isFileScanning = !1),
              (this.useRotate = !1),
              (this.typerConfig = null),
              (this.scanManager = null),
              (this.statusReporter = null),
              (this.bind = c.bind(this.evtObj.bind, this.evtObj)),
              (this.unbind = c.bind(this.evtObj.unbind, this.evtObj)),
              (this._simulateScan = this.onRawScan)
            try {
              this.opts =
                JSON.parse(decodeURIComponent(p.get('gradecam_options'))) || {}
            } catch (t) {
              this.opts = {}
            }
            c.defaults(this.opts, {
              multiplicity_error_threshold_not_expected: 0.001,
              multiplicity_error_threshold_expected: 0.01,
              choice_error_threshold: 1e-5,
              sigma_threshold: 3,
              filescan_sigma_threshold: 5,
              rotate: 0
            }),
              u.bind('install', function(e) {
                t.evtObj.trigger('install', e)
              }),
              this.bind('scan', function() {
                f.increment(f.SCAN_COUNT), f.save()
              }),
              (this.scanManager = this.initScanManager())
            var e = (this.statusReporter = new g(this.scanManager))
            e.bind('problem', function(e) {
              t.showMsg && t.displayMessage(e.message),
                t.evtObj.trigger('scanIssue', e)
            }),
              e.bind('enableHighRes', function(e) {
                return t.enableHighRes(e)
              }),
              this.instanceDfd.promise.then(
                function(e) {
                  return t.initializeController(e)
                },
                function(t) {
                  return console.warn('Instantiation error:', t)
                }
              )
          }
          return (
            (t.prototype.processScanOutput = function(t) {
              return i(this, void 0, void 0, function() {
                var e
                return o(this, function(n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        t.getScanOutput(
                          this.mode.type,
                          this.mode.output_version || 0
                        )
                      ]
                    case 1:
                      return (e = n.sent()), [2, e]
                  }
                })
              })
            }),
            (t.prototype.initScanManager = function() {
              var t = this,
                e = new A(),
                n = this.opts
              return (
                e.setMultiplicityErrorThreshold(
                  n.multiplicity_error_threshold_expected,
                  n.multiplicity_error_threshold_not_expected
                ),
                e.setChoiceErrorThreshold(n.choice_error_threshold),
                e.setValidateCallback(m(this.validateCallback)),
                e.bind('pause', function() {
                  t.controller.pause()
                }),
                e.bind('unpause', function() {
                  t.controller.unpause()
                }),
                e.bind('scan', function(e) {
                  return i(t, void 0, void 0, function() {
                    var t,
                      n,
                      r = this
                    return o(this, function(i) {
                      switch (i.label) {
                        case 0:
                          return (
                            i.trys.push([0, 2, , 3]),
                            [4, this.processScanOutput(e)]
                          )
                        case 1:
                          return (t = i.sent()), [3, 3]
                        case 2:
                          throw (n = i.sent())
                        case 3:
                          return (
                            this.scanCallback &&
                              E(function() {
                                return r.scanCallback(t)
                              }),
                            E(function() {
                              r.evtObj.trigger('scan', t), r.scan$.next(t)
                            }),
                            this.displayMessage(),
                            [2]
                          )
                      }
                    })
                  })
                }),
                e.bind('formcode', function(e) {
                  E(function() {
                    t.evtObj.trigger('formcode', e), t.formcode$.next(e)
                  })
                }),
                e.bind('enableHighRes', function(e) {
                  return t.enableHighRes(e)
                }),
                e
              )
            }),
            (t.prototype.onRawScan = function(t, e) {
              return this.scanManager.processScan(t, e).catch(function(t) {})
            }),
            (t.prototype.callSetCamera = function() {
              if (((this.cameraStarted = !0), this.controller)) {
                var t = this.getOption('selected_camera') || '',
                  e = this.getOption('rotate'),
                  n = this.getOption('flip_image')
                !this.useRotate ||
                  (!0 !== n && !1 !== n) ||
                  ((e = n ? I.Rotate.Full180 : I.Rotate.None),
                  this.setOptions({ flip_image: void 0, rotate: e }, !1)),
                  this.useRotate && (e || e === _.CameraRotate.None)
                    ? this.controller.setCamera(t, e)
                    : this.controller.setCamera(t, n || !1),
                  this.curCamera$.next(t)
              }
            }),
            (t.prototype.initializeController = function(t) {
              var e = this,
                n = t.getNeedsTransparency(),
                r = (this.controller = t)
              ;(this.useRotate = this.controller.supports('rotate')),
                r.startPolling(),
                r.bind('scan', function(t) {
                  return e.onRawScan(t)
                }),
                r.bind('cameraVisible', function(t) {
                  n &&
                    (t ? e.hideWatermark(e.el) : e.showWatermark(e.el),
                    e.evtObj.trigger('cameraVisible', t))
                }),
                r.bind('videoSize', function(t, n) {
                  ;(e.videoWidth == t && e.videoHeight == n) ||
                    ((e.videoWidth = t),
                    (e.videoHeight = n),
                    e.evtObj.trigger('videoSize', t, n))
                }),
                this.cameraStarted && this.callSetCamera(),
                this.scanManager.setSpeedHandicap(r.getSpeedHandicap()),
                this.evtObj.trigger('pluginLoad', s.getExposedPublicAPI(this))
            }),
            (t.prototype.displayMessage = function(t, e) {
              var n = this,
                r = l.$('gcPluginMsgDiv')
              r && r.parentNode && r.parentNode.removeChild(r),
                t &&
                  ((r = document.createElement('div')),
                  r.setAttribute('id', 'gcPluginMsgDiv'),
                  r.setAttribute(
                    'style',
                    'position:absolute; bottom: 5%; left: 5%; width:86%; background-color: rgba(50,50,50,0.8); border-radius:5px; border: 1px solid black; padding: 2%; color: #fff; font-size: 14px;'
                  ),
                  (r.innerHTML = t),
                  this.el.appendChild(r),
                  setTimeout(function() {
                    try {
                      n.el.removeChild(r)
                    } catch (t) {}
                  }, e || 4e3))
            }),
            (t.prototype.findElementInDOM = function() {
              var t = this,
                e = w.newDeferred(),
                n = function() {
                  l.isInDOMTree(t.el) ? e.resolve(t.el) : setTimeout(n, 50)
                }
              return n(), e.promise
            }),
            (t.prototype.performStart = function(t) {
              u.requireFeatures(this.requiredFeatures),
                u.requireMinVersion(this.requiredVersion),
                u.preferVersion(this.desiredVersion),
                u.setReturnURL(this.returnURL),
                u.startInstall(this.el, this.instanceOptions).then(
                  function(e) {
                    t.resolve(e)
                  },
                  function(e) {
                    t.reject(e)
                  }
                )
            }),
            (t.prototype.showWatermark = function(t) {
              var e = 'width:100%; height:100%; position: relative;'
              ;(e +=
                'background-color: black; background-image: url(' +
                O.watermark +
                '); background-repeat: no-repeat; background-position: center;'),
                t.setAttribute('style', e)
            }),
            (t.prototype.hideWatermark = function(t) {
              var e = 'width:100%; height:100%; position: relative;'
              ;(e += 'background-color: transparent;'),
                t.setAttribute('style', e)
            }),
            (t.prototype.getElement = function(t) {
              var e = this
              if (!this.el) {
                t && (this.instanceOptions = t),
                  t && t.disable_camera
                    ? (this.cameraStarted = !1)
                    : (this.cameraStarted = !0)
                var n = (this.el = document.createElement('div'))
                ;(n.style.width = '100%'),
                  (n.style.height = '100%'),
                  n.setAttribute('id', 'gcplugin' + this.pid),
                  this.showWatermark(n),
                  this.readyDfd.promise.then(
                    function() {
                      return e.findElementInDOM().then(function(t) {
                        return e.performStart(e.instanceDfd)
                      })
                    },
                    function(t) {
                      console.warn('Start error:', t)
                    }
                  )
              }
              return this.el
            }),
            (t.prototype.initTyper = function(t, e, n, r) {
              return (
                void 0 === r && (r = 0),
                i(this, void 0, void 0, function() {
                  return o(this, function(i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (this.typerConfig = {
                            fkey: t,
                            delay: e,
                            rkey: n,
                            rkeyDelay: r || e
                          }),
                          [4, this.instanceDfd.promise]
                        )
                      case 1:
                        return (
                          i.sent(),
                          this.controller.initTyper(t, e, n, r || e),
                          [2]
                        )
                    }
                  })
                })
              )
            }),
            (t.prototype.setScanCallback = function(t) {
              this.scanCallback = t
            }),
            (t.prototype.setValidateCallback = function(t) {
              ;(this.validateCallback = t),
                this.scanManager.setValidateCallback(m(t))
            }),
            (t.prototype.processImageFile = function(t, e) {
              return (
                console &&
                  console.warn &&
                  console.warn(
                    'processImageFile is deprecated and may be removed in a future version of GCSDK.'
                  ),
                this.controller.processImageFile(t, e)
              )
            }),
            (t.prototype.processImageFiles = function(t, e) {
              return (
                console &&
                  console.warn &&
                  console.warn(
                    'processImageFiles is deprecated and may be removed in a future version of GCSDK.'
                  ),
                this.controller.processImageFiles(t, e)
              )
            }),
            (t.prototype.processImageFileArray = function(t, e, n) {
              return (
                console &&
                  console.warn &&
                  console.warn(
                    'processImageFileArray is deprecated and may be removed in a future version of GCSDK.'
                  ),
                this.controller.processImageFileArray(t, e, n)
              )
            }),
            (t.prototype.setFileScanning = function(t) {
              ;(this.isFileScanning = t),
                t
                  ? this.scanManager.setSigmaThreshold(
                      this.opts.filescan_sigma_threshold
                    )
                  : this.scanManager.setSigmaThreshold(
                      this.opts.sigma_threshold
                    )
            }),
            (t.prototype.scanFilesAsync = function(t, e) {
              return i(this, void 0, void 0, function() {
                var n,
                  r = this
                return o(this, function(s) {
                  return (
                    h.setMode(this.getOptions().file_process_mode || 'normal'),
                    (n = this.controller.scanFilesAsync(t, function(t, n) {
                      return i(r, void 0, void 0, function() {
                        var r,
                          s,
                          a,
                          u,
                          l,
                          p,
                          f,
                          h,
                          d,
                          A,
                          g,
                          m,
                          v,
                          y,
                          b,
                          w,
                          _,
                          S,
                          k = this
                        return o(this, function(C) {
                          switch (C.label) {
                            case 0:
                              return (
                                this.setFileScanning(!0),
                                n
                                  ? [3, 1]
                                  : (this.setFileScanning(!1),
                                    c.defer(e, null, null, n),
                                    [3, 15])
                              )
                            case 1:
                              return c.every(t, function(t) {
                                return t.error
                              }) ||
                                c.any(t, function(t) {
                                  return 'bw' == t.type
                                })
                                ? ((r = 'unknown'),
                                  (s = void 0),
                                  (a = c.find(t, function(t) {
                                    return 'readError' == t.type
                                  })),
                                  (u = c.find(t, function(t) {
                                    return 'fileReader' == t.type
                                  })),
                                  (l = c.find(t, function(t) {
                                    return 'file' == t.type
                                  })),
                                  (p = c.find(t, function(t) {
                                    return 'bw' == t.type
                                  })),
                                  (f = c.find(t, function(t) {
                                    return 'noOutput' == t.type
                                  })),
                                  u
                                    ? ((r =
                                        'File ' +
                                        u.msg +
                                        ' appears to have an unsupported format.'),
                                      (s = u.msg))
                                    : l
                                    ? ((r =
                                        'File ' +
                                        l.fileName +
                                        ' appears to be corrupted or have an unsupported format.'),
                                      (s = l.fileName))
                                    : p
                                    ? ((r =
                                        'File ' +
                                        p.fileName +
                                        ' appears to be scanned in black and white and cannot be accurately graded.'),
                                      (r +=
                                        'Please rescan using grayscale or color.'),
                                      (s = p.fileName))
                                    : f
                                    ? ((r =
                                        'File ' +
                                        f.fileName +
                                        ' does not appear to have a GradeCam form in it.'),
                                      (s = f.fileName))
                                    : a &&
                                      (r =
                                        'Could not read ' +
                                        a.fileName +
                                        ' -- ' +
                                        a.msg),
                                  c.defer(
                                    e,
                                    { message: r, fileName: s },
                                    null,
                                    n
                                  ),
                                  [3, 15])
                                : [3, 2]
                            case 2:
                              ;(h = c.filter(t, function(t) {
                                return !t.error
                              })),
                                (d = []),
                                (A = 0),
                                (g = h),
                                (C.label = 3)
                            case 3:
                              if (!(A < g.length)) return [3, 8]
                              ;(m = g[A]), (C.label = 4)
                            case 4:
                              return (
                                C.trys.push([4, 6, , 7]),
                                [
                                  4,
                                  this.scanManager.processScan(m, {
                                    scansRequired: 1,
                                    scansMax: 1,
                                    scansToValidate: 1,
                                    returnScan: !0,
                                    dontValidate: !0
                                  })
                                ]
                              )
                            case 5:
                              return (
                                (v = C.sent()),
                                v ? d.push(v) : d.push(null),
                                [3, 7]
                              )
                            case 6:
                              return (y = C.sent()), [3, 7]
                            case 7:
                              return A++, [3, 3]
                            case 8:
                              if (!d.length)
                                return (
                                  c.defer(
                                    e,
                                    {
                                      message:
                                        'No form could be read from this file',
                                      fileName: 'unknown'
                                    },
                                    null,
                                    n
                                  ),
                                  [2]
                                )
                              ;(b = c.filter(d, function(t) {
                                return t.fc_data
                              })),
                                b.length && (d = b),
                                (d = c.sortBy(d, function(t) {
                                  return t.getUnvalidatedItems().length
                                })),
                                (w = d.pop()),
                                (C.label = 9)
                            case 9:
                              return (
                                C.trys.push([9, 14, , 15]),
                                w.getUnvalidatedItems().length
                                  ? [
                                      4,
                                      this.scanManager.validateScan(w).then(
                                        function(t) {
                                          return i(
                                            k,
                                            void 0,
                                            void 0,
                                            function() {
                                              var r
                                              return o(this, function(i) {
                                                switch (i.label) {
                                                  case 0:
                                                    return [
                                                      4,
                                                      this.processScanOutput(t)
                                                    ]
                                                  case 1:
                                                    return (
                                                      (r = i.sent()),
                                                      c.defer(e, null, r, n),
                                                      [2]
                                                    )
                                                }
                                              })
                                            }
                                          )
                                        },
                                        function() {
                                          c.defer(n)
                                        }
                                      )
                                    ]
                                  : [3, 11]
                              )
                            case 10:
                              return C.sent(), [3, 13]
                            case 11:
                              return [4, this.processScanOutput(w)]
                            case 12:
                              ;(_ = C.sent()),
                                c.defer(e, null, _, n),
                                (C.label = 13)
                            case 13:
                              return [3, 15]
                            case 14:
                              return (
                                (S = C.sent()),
                                x.warn(
                                  'Error processing results: ',
                                  JSON.stringify(t)
                                ),
                                console && console.warn('error:', S),
                                c.defer(
                                  e,
                                  {
                                    message: S.toString(),
                                    fileName: 'Unknown'
                                  },
                                  null,
                                  n
                                ),
                                [3, 15]
                              )
                            case 15:
                              return [2]
                          }
                        })
                      })
                    })),
                    n ? [2, n] : (this.setFileScanning(!1), [2, !1])
                  )
                })
              })
            }),
            (t.prototype.setMode = function(t) {
              t.scan_mode && (t.type = t.scan_mode),
                this.mode.update(t),
                this.scanManager.setMode(this.mode)
            }),
            (t.prototype.getMode = function() {
              return this.mode.toJSON()
            }),
            (t.prototype.getLastFormDescription = function() {
              return this.scanManager.getLastFormDescription()
            }),
            (t.prototype.setOptions = function(t, e) {
              void 0 === e && (e = !0)
              var n = this.opts
              c.extend(n, t),
                p.set('gradecam_options', JSON.stringify(n), 3650),
                ((e && 'flip_image' in t) ||
                  'selected_camera' in t ||
                  'rotate' in t) &&
                  (this.el && this.supports('liveOptions')
                    ? this.callSetCamera()
                    : this.evtObj.trigger('needsRefresh')),
                e &&
                  c.any(c.keys(n), function(t) {
                    return -1 != t.indexOf('threshold')
                  }) &&
                  (this.scanManager.setMultiplicityErrorThreshold(
                    n.multiplicity_error_threshold_expected,
                    n.multiplicity_error_threshold_not_expected
                  ),
                  this.scanManager.setChoiceErrorThreshold(
                    n.choice_error_threshold
                  ),
                  this.scanManager.setSigmaThreshold(
                    this.isFileScanning
                      ? n.filescan_sigma_threshold
                      : n.sigma_threshold
                  ))
            }),
            (t.prototype.getOptions = function() {
              return JSON.parse(JSON.stringify(this.opts))
            }),
            (t.prototype.stopCamera = function() {
              if (
                ((this.cameraStarted = !1),
                this.controller && this.supports('stopCamera'))
              )
                return this.controller.stopCamera()
            }),
            (t.prototype.startCamera = function() {
              this.callSetCamera()
            }),
            (t.prototype.getCameraList = function() {
              return this.controller.getCameraList()
            }),
            (t.prototype.getOption = function(t) {
              return this.getOptions()[t]
            }),
            (t.prototype.setActive = function(t) {
              return this.controller.setActive(t)
            }),
            (t.prototype.enableHighRes = function(t) {
              return this.controller.enableHighRes(t || 5e3)
            }),
            (t.prototype.setModuleOrder = function(t) {
              return u.setModuleOrder(t)
            }),
            (t.prototype.setModuleOption = function(t, e, n) {
              return u.setModuleOption(t, e, n)
            }),
            (t.prototype.getVersion = function() {
              return this.controller ? this.controller.getVersion() : null
            }),
            (t.prototype.isAtLeastVersion = function(t) {
              return this.controller
                ? this.controller.isAtLeastVersion(t)
                : null
            }),
            (t.prototype.isInstalled = function() {
              return u.isInstalled()
            }),
            (t.prototype.getTyperConfig = function() {
              return this.typerConfig
            }),
            (t.prototype.getTyperOptions = function() {
              return u.getTyperOptions(this.desiredVersion, this.returnURL)
            }),
            (t.prototype.getTyperAvailability = function(t) {
              var e = u.getTyperOptions(this.desiredVersion, this.returnURL)
              return e.length
                ? c.findWhere(e, { installed: !0 })
                  ? 'installed'
                  : 'possible'
                : 'not supported'
            }),
            (t.prototype.setTyperStrings = function(t) {
              var e = this
              return this.controller
                ? this.controller.setTyperStrings(t)
                : (this.instanceDfd.promise.then(function() {
                    e.setTyperStrings(t)
                  }),
                  !0)
            }),
            (t.prototype.clearTyperStrings = function() {
              var t = this
              return this.controller
                ? this.controller.clearTyperStrings()
                : (this.instanceDfd.promise.then(function() {
                    t.clearTyperStrings()
                  }),
                  !0)
            }),
            (t.prototype.supports = function(t) {
              return this.controller.supports(t)
            }),
            (t.prototype.requireSupport = function(t) {
              this.requiredFeatures.push(t)
            }),
            (t.prototype.requireVersion = function(t) {
              this.requiredVersion = t
            }),
            (t.prototype.setDesiredVersion = function(t) {
              this.desiredVersion = t
            }),
            (t.prototype.setReturnURL = function(t) {
              this.returnURL = t
            }),
            (t.prototype.getJPEGImage = function() {
              return this.controller.getJPEGImage()
            }),
            (t.prototype.getGCI = function() {
              return this.controller.getCurrentImage()
            }),
            (t.prototype.getJpegAsync = function(t) {
              return this.controller.getJpegAsync(t)
            }),
            (t.prototype.getGciAsync = function(t) {
              return this.controller.getGciAsync(t)
            }),
            (t.prototype.setLicensingInfo = function(t) {
              for (
                var e = [
                    'licensee',
                    'cust_id',
                    'cust_state',
                    'cust_school',
                    'cust_district',
                    'cust_type',
                    'cust_studentcount',
                    'cust_free',
                    'cust_billMonth'
                  ],
                  n = 0,
                  r = e;
                n < r.length;
                n++
              ) {
                var i = r[n]
                t[i] && f.set(i, t[i])
              }
              f.save()
            }),
            (t.prototype.setTransparency = function() {
              this.controller && this.controller.setTransparency()
            }),
            (t.prototype.setShowMessages = function(t) {
              this.showMsg = t
            }),
            (t.prototype._setLogLevel = function(t) {
              v.get().setLogLevel(t)
            }),
            (t.prototype._debugScanById = function(t) {
              return i(this, void 0, void 0, function() {
                var e, n, r, i, s
                return o(this, function(o) {
                  switch (o.label) {
                    case 0:
                      return [4, y(t)]
                    case 1:
                      ;(e = o.sent()), (n = 0), (r = e), (o.label = 2)
                    case 2:
                      if (!(n < r.length)) return [3, 7]
                      ;(i = r[n]), (o.label = 3)
                    case 3:
                      return o.trys.push([3, 5, , 6]), [4, this.onRawScan(i)]
                    case 4:
                      return o.sent(), [3, 6]
                    case 5:
                      return (s = o.sent()), [3, 6]
                    case 6:
                      return n++, [3, 2]
                    case 7:
                      return [2]
                  }
                })
              })
            }),
            (t.prototype._debugScan = function(t) {
              return i(this, void 0, void 0, function() {
                var e, n, r, i
                return o(this, function(o) {
                  switch (o.label) {
                    case 0:
                      ;(e = 0), (n = t), (o.label = 1)
                    case 1:
                      if (!(e < n.length)) return [3, 6]
                      ;(r = n[e]), (o.label = 2)
                    case 2:
                      return o.trys.push([2, 4, , 5]), [4, this.onRawScan(r)]
                    case 3:
                      return o.sent(), [3, 5]
                    case 4:
                      return (i = o.sent()), [3, 5]
                    case 5:
                      return e++, [3, 1]
                    case 6:
                      return [2]
                  }
                })
              })
            }),
            (t.prototype._setReady = function() {
              this.readyDfd.resolve()
            }),
            (t.prototype._addFormToCache = function(t) {
              b[t.form_id] = t
            }),
            t
          )
        })()
      t.exports = M
    },
    function(t, e, n) {
      'use strict'
      /*!
       * GradeCam Plugin SDK
       * v6.3.2.0
       * http://www.gradecam.com
       * Copyright GradeCam, Inc 2014
       */
      var r =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        i =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        o = n(59),
        s = n(30),
        a = n(32),
        c = n(31),
        u = n(15),
        l = n(5),
        p = new o(),
        f = s.getExposedPublicAPI(p)
      window && (window.gradecam = f),
        f.bind('pluginLoad', function(t) {
          window.gradeCamOnPluginLoad && window.gradeCamOnPluginLoad(t)
        }),
        (f.forms = c.forms),
        (f.forms2 = c.forms2),
        (f._registerFileReader = function(t, e) {
          u._registerFileReader(t, e)
        }),
        (f.registerFileHandler = function(t, e) {
          u.registerFileHandler(t, e)
        })
      var h = 'us',
        d = 'https://downloads.gradecam.com'
      window._GCREGION && (h = window._GCREGION),
        'asia' == h && (d = 'https://cdn-qnhd.menco.cn/assets/vendors/gradecam/gc'),
        f.registerFileHandler(['pdf'], d + '/pdfloader/current/loader.js'),
        f.registerFileHandler(
          ['tif', 'tiff'],
          d + '/tiffloader/current/tiffloader.js'
        ),
        a.domLoaded(function() {
          return r(this, void 0, void 0, function() {
            var t
            return i(this, function(e) {
              switch (e.label) {
                case 0:
                  return e.trys.push([0, 2, , 3]), [4, l.readyDfd]
                case 1:
                  return e.sent(), [3, 3]
                case 2:
                  return (t = e.sent()), [3, 3]
                case 3:
                  return (
                    window.gradeCamOnAPILoad &&
                      setTimeout(function() {
                        window.gradeCamOnAPILoad(f)
                      }, 0),
                    p._setReady(),
                    [2]
                  )
              }
            })
          })
        }),
        (f.SDK_VERSION = '6.3.2.0'),
        (t.exports = f)
    },
    function(t, e) {
      t.exports =
        '<div id="gc_filescanner">\n\n<p><input type="file" id="files" name="gc_scan_files[]" multiple /></p>\n\n<p><button id="gc_scan_go">Scan now</button></p>\n\n</div>\n'
    },
    function(t, e) {
      t.exports =
        '<a href="http://support.gradecam.com/entries/21648913" style="position: relative; display: block; width: 100%; height: 100%; border: none; text-decoration: none; background-color: #babec1; ">\n    <div style="position: absolute; background: transparent url(\'<%= planeURI %>\') center top no-repeat; width: 120px; height: 60px; padding-top: 60px; top: 50%; left: 50%; margin: -60px 0 0 -60px; color: #fff; text-shadow: 0px 0px 2px #555; font-size: 16px; text-align: center;">\n        Please disable ActiveX Filtering.\n    </div>\n</a>\n'
    },
    function(t, e) {
      t.exports =
        '<div style="position: relative; width: 100%; height: 100%; border: none; text-decoration: none; background: #babec1; background: -moz-radial-gradient(center, ellipse cover,  #babec1 0%, #0d2535 100%); background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#babec1), color-stop(100%,#0d2535)); background: -webkit-radial-gradient(center, ellipse cover,  #babec1 0%,#0d2535 100%); background: -ms-radial-gradient(center, ellipse cover,  #babec1 0%,#0d2535 100%); background: radial-gradient(center, ellipse cover,  #babec1 0%,#0d2535 100%); ">\n    <div style="position: absolute; width: 120px; top: 50%; left: 50%; margin: -60px 0 0 -60px; text-align: center;">\n        <a href="<%= url %>" style="display: block; background: transparent url(\'<%= planeURI %>\') center top no-repeat; padding-top: 60px; color: #fff; text-shadow: 0px 0px 2px #555; font-size: 16px; text-decoration: none;">\n        <% if(upgrade) { %>\n            Upgrade the<br/>GradeCam Plugin\n        <% }else{ %>\n            Install the<br/>GradeCam Plugin\n        <% }%>\n        </a>\n<% if (canTryNext) { %>\n    -or-<br/>\n    <a href="javascript:<%= canTryNext %>();" style="color: #fff; text-decoration: none; text-shadow: 0px 0px 2px #555; font-size: 11px;">\n        Continue without\n    </a>\n<% } %>\n    </div>\n</div>\n'
    },
    function(t, e) {
      t.exports =
        '<div style="position: relative; width: 100%; height: 100%; border: none; text-decoration: none; background: #babec1; background: -moz-radial-gradient(center, ellipse cover,  #babec1 0%, #0d2535 100%); background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#babec1), color-stop(100%,#0d2535)); background: -webkit-radial-gradient(center, ellipse cover,  #babec1 0%,#0d2535 100%); background: -ms-radial-gradient(center, ellipse cover,  #babec1 0%,#0d2535 100%); background: radial-gradient(center, ellipse cover,  #babec1 0%,#0d2535 100%); ">\n    <div style="position: absolute; width: 120px; top: 50%; left: 50%; margin: -60px 0 0 -60px; text-align: center;">\n        <a href="<%= url %>" style="display: block; background: transparent url(\'<%= planeURI %>\') center top no-repeat; padding-top: 60px; color: #fff; text-shadow: 0px 0px 2px #555; font-size: 16px; text-decoration: none;">\n            GradeCam is not supported on your system\n        </a>\n    </div>\n</div>\n'
    },
    function(t, e) {
      t.exports =
        '<img style="visibility: hidden; position: absolute;" />\n<canvas style="width: 1px; height: 1px;"></canvas>\n<video autoplay="true" muted="true" playsinline="true" style="position: absolute; top: 50%; left: 50%; width: 1px; height: 1px; opacity: 0;"></video>\n<div style="visibility: hidden; position: absolute;"></div>\n'
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        i = n(17),
        o = n(20),
        s = (function(t) {
          function e(e) {
            t.call(this), (this._value = e)
          }
          return (
            r(e, t),
            Object.defineProperty(e.prototype, 'value', {
              get: function() {
                return this.getValue()
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype._subscribe = function(e) {
              var n = t.prototype._subscribe.call(this, e)
              return n && !n.closed && e.next(this._value), n
            }),
            (e.prototype.getValue = function() {
              if (this.hasError) throw this.thrownError
              if (this.closed) throw new o.ObjectUnsubscribedError()
              return this._value
            }),
            (e.prototype.next = function(e) {
              t.prototype.next.call(this, (this._value = e))
            }),
            e
          )
        })(i.Subject)
      e.BehaviorSubject = s
    },
    function(t, e, n) {
      'use strict'
      var r = n(35),
        i = (function() {
          function t(t, e, n) {
            ;(this.kind = t),
              (this.value = e),
              (this.error = n),
              (this.hasValue = 'N' === t)
          }
          return (
            (t.prototype.observe = function(t) {
              switch (this.kind) {
                case 'N':
                  return t.next && t.next(this.value)
                case 'E':
                  return t.error && t.error(this.error)
                case 'C':
                  return t.complete && t.complete()
              }
            }),
            (t.prototype.do = function(t, e, n) {
              switch (this.kind) {
                case 'N':
                  return t && t(this.value)
                case 'E':
                  return e && e(this.error)
                case 'C':
                  return n && n()
              }
            }),
            (t.prototype.accept = function(t, e, n) {
              return t && 'function' == typeof t.next
                ? this.observe(t)
                : this.do(t, e, n)
            }),
            (t.prototype.toObservable = function() {
              switch (this.kind) {
                case 'N':
                  return r.Observable.of(this.value)
                case 'E':
                  return r.Observable.throw(this.error)
                case 'C':
                  return r.Observable.empty()
              }
              throw new Error('unexpected notification kind value')
            }),
            (t.createNext = function(e) {
              return void 0 !== e ? new t('N', e) : t.undefinedValueNotification
            }),
            (t.createError = function(e) {
              return new t('E', void 0, e)
            }),
            (t.createComplete = function() {
              return t.completeNotification
            }),
            (t.completeNotification = new t('C')),
            (t.undefinedValueNotification = new t('N', void 0)),
            t
          )
        })()
      e.Notification = i
    },
    function(t, e, n) {
      'use strict'
      var r = (function() {
        function t(e, n) {
          void 0 === n && (n = t.now),
            (this.SchedulerAction = e),
            (this.now = n)
        }
        return (
          (t.prototype.schedule = function(t, e, n) {
            return (
              void 0 === e && (e = 0),
              new this.SchedulerAction(this, t).schedule(n, e)
            )
          }),
          (t.now = Date.now
            ? Date.now
            : function() {
                return +new Date()
              }),
          t
        )
      })()
      e.Scheduler = r
    },
    function(t, e, n) {
      'use strict'
      function r(t, e) {
        return void 0 === e && (e = 0), this.lift(new a(t, e))
      }
      var i =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        o = n(18),
        s = n(67)
      e.observeOn = r
      var a = (function() {
        function t(t, e) {
          void 0 === e && (e = 0), (this.scheduler = t), (this.delay = e)
        }
        return (
          (t.prototype.call = function(t, e) {
            return e.subscribe(new c(t, this.scheduler, this.delay))
          }),
          t
        )
      })()
      e.ObserveOnOperator = a
      var c = (function(t) {
        function e(e, n, r) {
          void 0 === r && (r = 0),
            t.call(this, e),
            (this.scheduler = n),
            (this.delay = r)
        }
        return (
          i(e, t),
          (e.dispatch = function(t) {
            var e = t.notification,
              n = t.destination
            e.observe(n), this.unsubscribe()
          }),
          (e.prototype.scheduleMessage = function(t) {
            this.add(
              this.scheduler.schedule(
                e.dispatch,
                this.delay,
                new u(t, this.destination)
              )
            )
          }),
          (e.prototype._next = function(t) {
            this.scheduleMessage(s.Notification.createNext(t))
          }),
          (e.prototype._error = function(t) {
            this.scheduleMessage(s.Notification.createError(t))
          }),
          (e.prototype._complete = function() {
            this.scheduleMessage(s.Notification.createComplete())
          }),
          e
        )
      })(o.Subscriber)
      e.ObserveOnSubscriber = c
      var u = (function() {
        function t(t, e) {
          ;(this.notification = t), (this.destination = e)
        }
        return t
      })()
      e.ObserveOnMessage = u
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        i = n(6),
        o = (function(t) {
          function e(e, n) {
            t.call(this)
          }
          return (
            r(e, t),
            (e.prototype.schedule = function(t, e) {
              return void 0 === e && (e = 0), this
            }),
            e
          )
        })(i.Subscription)
      e.Action = o
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        i = n(8),
        o = n(70),
        s = (function(t) {
          function e(e, n) {
            t.call(this, e, n),
              (this.scheduler = e),
              (this.work = n),
              (this.pending = !1)
          }
          return (
            r(e, t),
            (e.prototype.schedule = function(t, e) {
              if ((void 0 === e && (e = 0), this.closed)) return this
              ;(this.state = t), (this.pending = !0)
              var n = this.id,
                r = this.scheduler
              return (
                null != n && (this.id = this.recycleAsyncId(r, n, e)),
                (this.delay = e),
                (this.id = this.id || this.requestAsyncId(r, this.id, e)),
                this
              )
            }),
            (e.prototype.requestAsyncId = function(t, e, n) {
              return (
                void 0 === n && (n = 0),
                i.root.setInterval(t.flush.bind(t, this), n)
              )
            }),
            (e.prototype.recycleAsyncId = function(t, e, n) {
              return (
                void 0 === n && (n = 0),
                null !== n && this.delay === n && !1 === this.pending
                  ? e
                  : (i.root.clearInterval(e) && void 0) || void 0
              )
            }),
            (e.prototype.execute = function(t, e) {
              if (this.closed) return new Error('executing a cancelled action')
              this.pending = !1
              var n = this._execute(t, e)
              if (n) return n
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }),
            (e.prototype._execute = function(t, e) {
              var n = !1,
                r = void 0
              try {
                this.work(t)
              } catch (t) {
                ;(n = !0), (r = (!!t && t) || new Error(t))
              }
              if (n) return this.unsubscribe(), r
            }),
            (e.prototype._unsubscribe = function() {
              var t = this.id,
                e = this.scheduler,
                n = e.actions,
                r = n.indexOf(this)
              ;(this.work = null),
                (this.state = null),
                (this.pending = !1),
                (this.scheduler = null),
                -1 !== r && n.splice(r, 1),
                null != t && (this.id = this.recycleAsyncId(e, t, null)),
                (this.delay = null)
            }),
            e
          )
        })(o.Action)
      e.AsyncAction = s
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        i = n(68),
        o = (function(t) {
          function e() {
            t.apply(this, arguments),
              (this.actions = []),
              (this.active = !1),
              (this.scheduled = void 0)
          }
          return (
            r(e, t),
            (e.prototype.flush = function(t) {
              var e = this.actions
              if (this.active) return void e.push(t)
              var n
              this.active = !0
              do {
                if ((n = t.execute(t.state, t.delay))) break
              } while ((t = e.shift()))
              if (((this.active = !1), n)) {
                for (; (t = e.shift()); ) t.unsubscribe()
                throw n
              }
            }),
            e
          )
        })(i.Scheduler)
      e.AsyncScheduler = o
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        i = n(71),
        o = (function(t) {
          function e(e, n) {
            t.call(this, e, n), (this.scheduler = e), (this.work = n)
          }
          return (
            r(e, t),
            (e.prototype.schedule = function(e, n) {
              return (
                void 0 === n && (n = 0),
                n > 0
                  ? t.prototype.schedule.call(this, e, n)
                  : ((this.delay = n),
                    (this.state = e),
                    this.scheduler.flush(this),
                    this)
              )
            }),
            (e.prototype.execute = function(e, n) {
              return n > 0 || this.closed
                ? t.prototype.execute.call(this, e, n)
                : this._execute(e, n)
            }),
            (e.prototype.requestAsyncId = function(e, n, r) {
              return (
                void 0 === r && (r = 0),
                (null !== r && r > 0) || (null === r && this.delay > 0)
                  ? t.prototype.requestAsyncId.call(this, e, n, r)
                  : e.flush(this)
              )
            }),
            e
          )
        })(i.AsyncAction)
      e.QueueAction = o
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        i = n(72),
        o = (function(t) {
          function e() {
            t.apply(this, arguments)
          }
          return r(e, t), e
        })(i.AsyncScheduler)
      e.QueueScheduler = o
    },
    function(t, e, n) {
      'use strict'
      var r = n(73),
        i = n(74)
      e.queue = new i.QueueScheduler(r.QueueAction)
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        var e,
          n = t.Symbol
        return (
          'function' == typeof n
            ? n.observable
              ? (e = n.observable)
              : ((e = n('observable')), (n.observable = e))
            : (e = '@@observable'),
          e
        )
      }
      var i = n(8)
      ;(e.getSymbolObservable = r),
        (e.observable = r(i.root)),
        (e.$$observable = e.observable)
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          function(t, e) {
            function n() {
              this.constructor = t
            }
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())
          },
        i = (function(t) {
          function e(e) {
            t.call(this), (this.errors = e)
            var n = Error.call(
              this,
              e
                ? e.length +
                    ' errors occurred during unsubscription:\n  ' +
                    e
                      .map(function(t, e) {
                        return e + 1 + ') ' + t.toString()
                      })
                      .join('\n  ')
                : ''
            )
            ;(this.name = n.name = 'UnsubscriptionError'),
              (this.stack = n.stack),
              (this.message = n.message)
          }
          return r(e, t), e
        })(Error)
      e.UnsubscriptionError = i
    },
    function(t, e, n) {
      'use strict'
      e.isArray =
        Array.isArray ||
        function(t) {
          return t && 'number' == typeof t.length
        }
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        return null != t && 'object' == typeof t
      }
      e.isObject = r
    },
    function(t, e, n) {
      'use strict'
      function r(t, e, n) {
        if (t) {
          if (t instanceof i.Subscriber) return t
          if (t[o.rxSubscriber]) return t[o.rxSubscriber]()
        }
        return t || e || n
          ? new i.Subscriber(t, e, n)
          : new i.Subscriber(s.empty)
      }
      var i = n(18),
        o = n(19),
        s = n(36)
      e.toSubscriber = r
    },
    function(t, e, n) {
      'use strict'
      function r() {
        try {
          return o.apply(this, arguments)
        } catch (t) {
          return (s.errorObject.e = t), s.errorObject
        }
      }
      function i(t) {
        return (o = t), r
      }
      var o,
        s = n(38)
      e.tryCatch = i
    },
    function(t, e, n) {
      ;(function(t, e) {
        !(function(t, n) {
          'use strict'
          function r(t) {
            'function' != typeof t && (t = new Function('' + t))
            for (
              var e = new Array(arguments.length - 1), n = 0;
              n < e.length;
              n++
            )
              e[n] = arguments[n + 1]
            var r = { callback: t, args: e }
            return (u[c] = r), a(c), c++
          }
          function i(t) {
            delete u[t]
          }
          function o(t) {
            var e = t.callback,
              r = t.args
            switch (r.length) {
              case 0:
                e()
                break
              case 1:
                e(r[0])
                break
              case 2:
                e(r[0], r[1])
                break
              case 3:
                e(r[0], r[1], r[2])
                break
              default:
                e.apply(n, r)
            }
          }
          function s(t) {
            if (l) setTimeout(s, 0, t)
            else {
              var e = u[t]
              if (e) {
                l = !0
                try {
                  o(e)
                } finally {
                  i(t), (l = !1)
                }
              }
            }
          }
          if (!t.setImmediate) {
            var a,
              c = 1,
              u = {},
              l = !1,
              p = t.document,
              f = Object.getPrototypeOf && Object.getPrototypeOf(t)
            ;(f = f && f.setTimeout ? f : t),
              '[object process]' === {}.toString.call(t.process)
                ? (function() {
                    a = function(t) {
                      e.nextTick(function() {
                        s(t)
                      })
                    }
                  })()
                : (function() {
                    if (t.postMessage && !t.importScripts) {
                      var e = !0,
                        n = t.onmessage
                      return (
                        (t.onmessage = function() {
                          e = !1
                        }),
                        t.postMessage('', '*'),
                        (t.onmessage = n),
                        e
                      )
                    }
                  })()
                ? (function() {
                    var e = 'setImmediate$' + Math.random() + '$',
                      n = function(n) {
                        n.source === t &&
                          'string' == typeof n.data &&
                          0 === n.data.indexOf(e) &&
                          s(+n.data.slice(e.length))
                      }
                    t.addEventListener
                      ? t.addEventListener('message', n, !1)
                      : t.attachEvent('onmessage', n),
                      (a = function(n) {
                        t.postMessage(e + n, '*')
                      })
                  })()
                : t.MessageChannel
                ? (function() {
                    var t = new MessageChannel()
                    ;(t.port1.onmessage = function(t) {
                      s(t.data)
                    }),
                      (a = function(e) {
                        t.port2.postMessage(e)
                      })
                  })()
                : p && 'onreadystatechange' in p.createElement('script')
                ? (function() {
                    var t = p.documentElement
                    a = function(e) {
                      var n = p.createElement('script')
                      ;(n.onreadystatechange = function() {
                        s(e),
                          (n.onreadystatechange = null),
                          t.removeChild(n),
                          (n = null)
                      }),
                        t.appendChild(n)
                    }
                  })()
                : (function() {
                    a = function(t) {
                      setTimeout(s, 0, t)
                    }
                  })(),
              (f.setImmediate = r),
              (f.clearImmediate = i)
          }
        })('undefined' == typeof self ? (void 0 === t ? this : t) : self)
      }.call(e, n(29), n(34)))
    },
    function(t, e, n) {
      ;(function(t) {
        function r(t, e) {
          ;(this._id = t), (this._clearFn = e)
        }
        var i =
            (void 0 !== t && t) ||
            ('undefined' != typeof self && self) ||
            window,
          o = Function.prototype.apply
        ;(e.setTimeout = function() {
          return new r(o.call(setTimeout, i, arguments), clearTimeout)
        }),
          (e.setInterval = function() {
            return new r(o.call(setInterval, i, arguments), clearInterval)
          }),
          (e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
          }),
          (r.prototype.unref = r.prototype.ref = function() {}),
          (r.prototype.close = function() {
            this._clearFn.call(i, this._id)
          }),
          (e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = e)
          }),
          (e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1)
          }),
          (e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId)
            var e = t._idleTimeout
            e >= 0 &&
              (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
              }, e))
          }),
          n(82),
          (e.setImmediate =
            ('undefined' != typeof self && self.setImmediate) ||
            (void 0 !== t && t.setImmediate) ||
            (this && this.setImmediate)),
          (e.clearImmediate =
            ('undefined' != typeof self && self.clearImmediate) ||
            (void 0 !== t && t.clearImmediate) ||
            (this && this.clearImmediate))
      }.call(e, n(29)))
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        return function(e) {
          var n = i.newDeferred()
          return (
            t(e, function(t) {
              null === t ? n.reject(t) : n.resolve(t)
            }),
            n.promise
          )
        }
      }
      var i = n(1)
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        var e = o.newDeferred(),
          n = new XMLHttpRequest(),
          r = s + t + '/gcip'
        return (
          (n.onreadystatechange = function() {
            if (4 == n.readyState && 200 == n.status)
              try {
                var t = JSON.parse(n.responseText)
                e.resolve(t)
              } catch (t) {
                e.reject(t)
              }
            else
              4 == n.readyState &&
                200 != n.status &&
                e.reject(new a('Error making request', n))
          }),
          n.open('GET', r, !0),
          n.send(),
          e.promise
        )
      }
      var i =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        o = n(1),
        s = 'https://scansupport.gradecam.com/formdata/',
        a = (function(t) {
          function e(e, n) {
            var r = t.call(this, e) || this
            return (r.req = n), r
          }
          return i(e, t), e
        })(Error)
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        i = n(3),
        o = n(0),
        s = n(41),
        a = n(7),
        c = {},
        u = function(t) {
          var e = this
          this.paused ||
            o.defer(function() {
              return e.trigger('scan', t)
            })
        },
        l = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (
              (n.active = !0),
              (n.paused = !1),
              (n.currentCameraInfo = new a.ReplaySubject(1)),
              (c = { stop: !1, ivId: -1, callQ: [], div: e }),
              (gcmobilesdk.cameraVisibleCallback = function(t) {
                n.trigger('cameraVisible', t)
              }),
              (gcmobilesdk.updateDimensionCallback = function(t, e) {
                ;(n.videoWidth = t),
                  (n.videoHeight = e),
                  n.trigger('videoSize', t, e)
              }),
              gcmobilesdk.setGcipV2 && gcmobilesdk.setGcipV2(!0),
              (gcmobilesdk.currentCameraInfoCallback = function(t) {
                ;(n.maxVideoWidth = t.w),
                  (n.maxVideoHeight = t.h),
                  n.currentCameraInfo.next({
                    width: t.w,
                    height: t.h,
                    supportsHighRes: t.w * t.h > 48e4
                  })
              }),
              n
            )
          }
          return (
            r(e, t),
            (e.prototype.getCameraList = function() {
              return gcmobilesdk.cameraList
            }),
            (e.prototype.getVersionMajor = function() {
              return gcmobilesdk.version.split('.')[0]
            }),
            (e.prototype.getVersionMinor = function() {
              return gcmobilesdk.version.split('.')[1]
            }),
            (e.prototype.stopCamera = function() {
              return gcmobilesdk.hide()
            }),
            (e.prototype.setTransparency = function() {
              return gcmobilesdk.command('allowTransparency')
            }),
            (e.prototype.setCamera = function(t) {
              gcmobilesdk.command('setCamera', t), this.setActive(!0)
            }),
            (e.prototype.initTyper = function(t, e, n, r) {
              return !1
            }),
            (e.prototype.setTyperStrings = function(t) {
              return !1
            }),
            (e.prototype.clearTyperStrings = function() {
              return !1
            }),
            (e.prototype.inhibitProcessing = function(t) {
              return !1
            }),
            (e.prototype.getJPEGImage = function() {
              return !1
            }),
            (e.prototype.getCurrentImage = function() {
              return !1
            }),
            (e.prototype.getJpegAsync = function(t) {
              gcmobilesdk.getJpegImage ? gcmobilesdk.getJpegImage(t) : t(!1)
            }),
            (e.prototype.getGciAsync = function(t) {
              gcmobilesdk.getCurrentImage
                ? gcmobilesdk.getCurrentImage(t)
                : t(!1)
            }),
            (e.prototype.enableHighRes = function(t) {
              return (
                !!gcmobilesdk.setHighResFor &&
                (gcmobilesdk.setHighResFor(t), !0)
              )
            }),
            (e.prototype.startPolling = function() {
              var t = this
              gcmobilesdk.gcipCallback = function(e) {
                u.call(t, e)
              }
            }),
            (e.prototype.getFileScanner = function() {
              return null
            }),
            (e.prototype._shutdown = function() {
              this.unbind('scan'),
                clearInterval(c.ivId),
                (c.ivId = -1),
                (c.stop = !0)
            }),
            (e.prototype.pause = function() {
              this.paused = !0
            }),
            (e.prototype.unpause = function() {
              this.paused = !1
            }),
            (e.prototype.setActive = function(t) {
              ;(this.active = !!t),
                t
                  ? (gcmobilesdk.showOnDiv(c.div),
                    gcmobilesdk.command('startScanning'))
                  : gcmobilesdk.hide()
            }),
            (e.prototype.processImageFile = function(t, e) {
              return !1
            }),
            (e.prototype.processImageFiles = function(t, e) {
              return !1
            }),
            (e.prototype.processImageFileArray = function() {
              return !1
            }),
            (e.prototype.scanFilesAsync = function() {
              return !1
            }),
            (e.prototype.getVersion = function() {
              return gcmobilesdk.version
            }),
            (e.prototype.isAtLeastVersion = function(t) {
              return !s.isLessThan(this.getVersion(), t)
            }),
            (e.prototype.getSpeedHandicap = function() {
              return 1
            }),
            (e.prototype.supports = function(t) {
              switch (t) {
                case 'versionString':
                  return !0
                case 'liveOptions':
                case 'stopCamera':
                  return !0
                case 'flipCamera':
                  return !1
                default:
                  return !!gcmobilesdk.supports && gcmobilesdk.supports(t)
              }
            }),
            (e.prototype.getNeedsTransparency = function() {
              return !0
            }),
            e
          )
        })(i.ClassTS)
      t.exports = l
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        for (
          var e = 0, n = 0, r = t.data.data, i = 0;
          i < t.data.data.length;
          i += 4
        ) {
          var o = (r[i] + r[i + 1] + r[i + 2]) / 3
          o < 128 && (n += 1), o < 10 && (e += 1)
        }
        return e / n > 0.3
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.detectBW = r)
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        i =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        o = n(0),
        s = n(42),
        a = n(15),
        c = n(1),
        u = (function() {
          function t(t) {
            ;(this.plugin = t),
              (this.createDirectoryScanner = this.createHtml5Loader),
              (this.createFileScanner = this.createHtml5Loader)
          }
          return (
            (t.prototype.displayObject = function(t) {
              return this.plugin.displayDirectObj(t)
            }),
            (t.prototype.processDirectData = function(t) {
              return this.plugin.processDirectData(t)
            }),
            (t.prototype.createHtml5Loader = function(t, e) {
              return r(this, void 0, void 0, function() {
                var n,
                  r,
                  u,
                  l = this
                return i(this, function(i) {
                  switch (i.label) {
                    case 0:
                      if (!t) throw new Error('Missing callback')
                      ;(e = e && o.isArray(e) ? c.newDeferred(e).promise : s()),
                        (i.label = 1)
                    case 1:
                      return i.trys.push([1, 4, , 5]), [4, e]
                    case 2:
                      return (n = i.sent()), [4, a.ensureFileLoaders(n)]
                    case 3:
                      return (
                        i.sent(),
                        (r = new a(
                          n,
                          function(t) {
                            return l.displayObject(t)
                          },
                          function(t) {
                            return l.processDirectData(t)
                          }
                        )),
                        t(r),
                        [2, r]
                      )
                    case 4:
                      return (u = i.sent()), t && t(null), [2, null]
                    case 5:
                      return [2]
                  }
                })
              })
            }),
            (t.prototype.loadFromFileArray = function(t, e) {
              return this.createHtml5Loader(t, e)
            }),
            (t.prototype.canUseFileArray = function() {
              return !0
            }),
            t
          )
        })()
      t.exports = u
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        return (
          c.webWorker &&
          c.reqAnimFrame &&
          c.fileSupport &&
          t.supports &&
          t.supports('processBase64')
        )
      }
      var i =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        s = n(1),
        a = n(0),
        c = n(5),
        u = n(46),
        l = n(42),
        p = n(15),
        f = n(91),
        h = n(25),
        d = (function() {
          function t(t) {
            this.plugin = t
          }
          return (
            (t.prototype.displayObject = function(t) {}),
            (t.prototype.processDirectData = function(t) {
              var e = s.newDeferred(),
                n = t.data,
                r = t.width,
                i = t.height,
                o = h.getGrayscaleBuffer(n, r, i, !0),
                a = u.encode(o),
                c = this.plugin.processBase64(r, i, a)
              return (
                setTimeout(function() {
                  e.resolve(c)
                }, 0),
                e.promise
              )
            }),
            (t.prototype.createHtml5Loader = function(t, e) {
              return i(this, void 0, void 0, function() {
                var n,
                  r,
                  i,
                  c = this
                return o(this, function(o) {
                  switch (o.label) {
                    case 0:
                      ;(e = e && a.isArray(e) ? s.newDeferred(e).promise : l()),
                        (o.label = 1)
                    case 1:
                      return o.trys.push([1, 4, , 5]), [4, e]
                    case 2:
                      return (n = o.sent()), [4, p.ensureFileLoaders(n)]
                    case 3:
                      return (
                        o.sent(),
                        (r = new p(
                          n,
                          function(t) {
                            return c.displayObject(t)
                          },
                          function(t) {
                            return c.processDirectData(t)
                          }
                        )),
                        t && t(r),
                        [2, r]
                      )
                    case 4:
                      return (i = o.sent()), t && t(null), [2, null]
                    case 5:
                      return [2]
                  }
                })
              })
            }),
            (t.prototype.createDirectoryScanner = function(t) {
              return r(this.plugin)
                ? this.createHtml5Loader(t)
                : new f(this.plugin).createDirectoryScanner(t)
            }),
            (t.prototype.createFileScanner = function(t) {
              return r(this.plugin)
                ? this.createHtml5Loader(t)
                : new f(this.plugin).createFileScanner(t)
            }),
            (t.prototype.loadFromFileArray = function(t, e) {
              return !!r(this.plugin) && this.createHtml5Loader(t, e)
            }),
            (t.prototype.canUseFileArray = function() {
              return r(this.plugin)
            }),
            t
          )
        })()
      t.exports = d
    },
    function(t, e, n) {
      'use strict'
      function r() {
        var t = document.createElement('canvas')
        return !(!t.getContext || !t.getContext('2d'))
      }
      var i =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        s = n(93),
        a = (function() {
          function t(t) {
            ;(this.file = t),
              (this.canvas = document.createElement('canvas')),
              (this.atLocation = !1),
              (this.imgDfd = s.loadImageFromFile(this.file)),
              (this.supportsNativeRes = !0),
              (this.canvas.style.width = '1px'),
              (this.canvas.style.height = '1px'),
              (this.canvas.style.visibility = 'hidden'),
              document.body.appendChild(this.canvas)
          }
          return (
            (t.prototype.next = function() {
              return !this.atLocation && ((this.atLocation = !0), !0)
            }),
            (t.prototype.getName = function() {
              return this.file.name
            }),
            (t.prototype.getData = function(t) {
              return (
                void 0 === t && (t = -1),
                i(this, void 0, void 0, function() {
                  var e, n, r, i, s, a, c
                  return o(this, function(o) {
                    switch (o.label) {
                      case 0:
                        return [4, this.imgDfd]
                      case 1:
                        return (
                          (e = o.sent()),
                          (n = e.width),
                          (r = e.height),
                          (i = n * r),
                          (s = 48e4),
                          t > 0 ? (s = t) : 0 === t && (s = i),
                          (i > s || t) &&
                            ((a = Math.sqrt(s / i)), (n *= a), (r *= a)),
                          (this.canvas.width = n),
                          (this.canvas.height = r),
                          (c = this.canvas.getContext('2d')),
                          c.drawImage(e, 0, 0, n, r),
                          [2, { obj: e, data: c.getImageData(0, 0, n, r) }]
                        )
                    }
                  })
                })
              )
            }),
            (t.prototype.destroy = function() {
              document.body.removeChild(this.canvas)
            }),
            (t.isSupported = function() {
              return !!window.FileReader && r()
            }),
            t
          )
        })()
      t.exports = a
    },
    function(t, e, n) {
      'use strict'
      var r = n(1),
        i = (function() {
          function t(t) {
            this.pluginScanner = t
          }
          return (
            (t.prototype.next = function(t, e) {
              return this.pluginScanner.next(function(e, n) {
                t(
                  e
                    ? [JSON.parse(n.replace(/'/g, '"'))]
                    : [{ error: !0, type: 'file', fileName: n }]
                )
              })
            }),
            t
          )
        })(),
        o = (function() {
          function t(t) {
            this.plugin = t
          }
          return (
            (t.prototype.scanWrapper = function(t, e) {
              var n = r.newDeferred()
              return (
                this.plugin[t](function(t) {
                  if (!t) return n.resolve(null), e(null), null
                  var r = new i(t)
                  return e(r), n.resolve(r), r
                }),
                n.promise
              )
            }),
            (t.prototype.createFileScanner = function(t) {
              return this.scanWrapper('createFileScanner', t)
            }),
            (t.prototype.createDirectoryScanner = function(t) {
              return this.scanWrapper('createDirectoryScanner', t)
            }),
            t
          )
        })()
      t.exports = o
    },
    function(t, e, n) {
      'use strict'
      function r() {
        var t = document.createElement('canvas')
        return !(!t.getContext || !t.getContext('2d'))
      }
      var i =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        s = (function() {
          function t(t) {
            ;(this.file = t),
              (this.atLocation = !1),
              (this.canvas = document.createElement('canvas')),
              (this.canvas.style.width = '1px'),
              (this.canvas.style.height = '1px'),
              (this.canvas.style.visibility = 'hidden')
            var e = this.canvas.getContext('2d')
            ;(this.imgData = e.createImageData(t.width, t.height)),
              this.imgData.data.set(t.pixels)
          }
          return (
            (t.prototype.next = function() {
              return !this.atLocation && ((this.atLocation = !0), !0)
            }),
            (t.prototype.getName = function() {
              return this.file.name
            }),
            (t.prototype.getData = function(t) {
              return (
                void 0 === t && (t = -1),
                i(this, void 0, void 0, function() {
                  return o(this, function(t) {
                    return [2, { obj: this.canvas, data: this.imgData }]
                  })
                })
              )
            }),
            (t.prototype.destroy = function() {
              ;(this.imgData = null), (this.canvas = null)
            }),
            (t.isSupported = function() {
              return r()
            }),
            t
          )
        })()
      t.exports = s
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        var e = s.newDeferred()
        if (t.buffer) e.resolve(t.buffer.buffer || t.buffer)
        else {
          var n = new FileReader()
          ;(n.onload = function(t) {
            e.resolve(n.result)
          }),
            (n.onerror = function(t) {
              e.reject(t.error)
            }),
            n.readAsArrayBuffer(t)
        }
        return e.promise
      }
      function i(t) {
        var e = s.newDeferred()
        if (t.src) e.resolve(t.src)
        else {
          var n = new FileReader()
          ;(n.onload = function(t) {
            e.resolve(n.result)
          }),
            (n.onerror = function(t) {
              e.reject(t.error)
            }),
            n.readAsDataURL(t)
        }
        return e.promise
      }
      function o(t) {
        return i(t).then(function(t) {
          var e = s.newDeferred(),
            n = new Image()
          return (
            (n.onload = function() {
              e.resolve(n)
            }),
            (n.onerror = function(t) {
              e.reject(t.error)
            }),
            (n.src = t),
            e.promise
          )
        })
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var s = n(1)
      ;(e.readFileAsUint8 = r),
        (e.readFileAsDataURL = i),
        (e.loadImageFromFile = o)
    },
    function(t, e, n) {
      'use strict'
      var r = n(5),
        i = n(88),
        o = n(89),
        s = function(t) {
          return new o(t)
        }
      r.webWorker &&
        r.fileSupport &&
        (s = function(t) {
          return t.supports('directData') ? new i(t) : new o(t)
        }),
        (t.exports = s)
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        for (var e, n = 0, r = 0, i = 0, o = 0; o < t.length; o++)
          (e = t[o]), (n += e), (r += e * e), (i += 1)
        return (n /= i), (r /= i), Math.sqrt(r - n * n)
      }
      function i(t, e, n, r) {
        var i = []
        return (
          l.each(t, function(t) {
            t <= e
              ? i.push(0)
              : t <= n
              ? i.push(1)
              : t <= r
              ? i.push(2)
              : i.push(3)
          }),
          i
        )
      }
      function o(t, e, n, r) {
        var i = []
        return (
          l.each(t, function(t) {
            t <= e
              ? i.push(0)
              : t <= n
              ? i.push(1)
              : t <= r
              ? i.push(2)
              : i.push(3)
          }),
          p.checksum(i[0], i[1], i[2], i[3]) == i[4]
        )
      }
      function s(t, e) {
        var n = l.sortBy(t, function(t) {
          return t
        })
        n.push(10), n.unshift(-10)
        for (var r = 0, s = 0, a = [], c = 0; c < 6; c++)
          !(function(c) {
            for (var u = c; u < 6; u++)
              !(function(u) {
                for (var p = u; p < 6; p++)
                  !(function(p) {
                    if ((s++, !o(t, n[c], n[u], n[p]))) return 'continue'
                    r++
                    var f = [],
                      h = [],
                      d = [],
                      A = []
                    l.each(t, function(t) {
                      t <= n[c]
                        ? f.push(t)
                        : t <= n[u]
                        ? h.push(t)
                        : t <= n[p]
                        ? d.push(t)
                        : A.push(t)
                    }),
                      l.each(e, function(e) {
                        var r = 0.05,
                          o = Math.max(e.t1_min, n[c] - r),
                          s = Math.min(e.t1_max, n[c + 1] + r)
                        if (!(s <= o)) {
                          var l = Math.max(e.t2_min, n[u] - r),
                            g = Math.min(e.t2_max, n[u + 1] + r)
                          if (!(g <= l)) {
                            var m = Math.max(e.t3_min, n[p] - r),
                              v = Math.min(e.t3_max, n[p + 1] + r)
                            v <= m ||
                              a.push({
                                t1_min: o,
                                t1_max: s,
                                t2_min: l,
                                t2_max: g,
                                t3_min: m,
                                t3_max: v,
                                list0: e.list0.concat(f),
                                list1: e.list1.concat(h),
                                list2: e.list2.concat(d),
                                list3: e.list3.concat(A),
                                syms: e.syms + i(t, n[c], n[u], n[p]).join('')
                              })
                          }
                        }
                      })
                  })(p)
              })(u)
          })(c)
        return a
      }
      function a(t, e) {
        l.each(t, function(t) {
          ;(t.len0 = t.list0.length),
            (t.len1 = t.list1.length),
            (t.len2 = t.list2.length),
            (t.len3 = t.list3.length),
            (t.dev0 = r(t.list0)),
            (t.dev1 = r(t.list1)),
            (t.dev2 = r(t.list2)),
            (t.dev3 = r(t.list3)),
            (t.devTot =
              t.len0 * t.dev0 * t.dev0 +
              t.len1 * t.dev1 * t.dev1 +
              t.len2 * t.dev2 * t.dev2 +
              t.len3 * t.dev3 * t.dev3)
        })
      }
      function c(t, e, n) {
        var r = l.sortBy(t, function(t) {
            return t.len0 && t.len1 && t.len2 && t.len3 ? t.devTot : 1 / 0
          }),
          i = l.find(r, function(t) {
            return t.cache_hit
          })
        return i
          ? [i]
          : l.any(r.slice(0, 8), function(t) {
              return t.cache_veto
            })
          ? []
          : r.slice(0, 16)
      }
      function u(t, e) {
        if (((e && f) || (e = {}), 30 == t.length)) {
          for (
            var n = t.length / 5,
              r = [
                {
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
                  syms: ''
                }
              ],
              i = 0;
            i < n;
            i++
          )
            r = s(t.slice(5 * i, 5 * (i + 1)), r)
          l.each(r, function(t) {
            for (var n, r = 0, i = 0; i < t.syms.length; i++)
              i % 5 != 4 && ((r *= 4), (n = Number(t.syms[i])), (r += n))
            ;(r = '' + r),
              (t.value = r),
              (t.cache_hit = !!e[r]),
              (t.cache_veto = null === e[r])
          }),
            (r = l.filter(r, function(t) {
              return !t.cache_veto
            })),
            a(r, t)
          var o = c(r, t, e)
          if (o.length) return l.pluck(o, 'value')
        }
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var l = n(0),
        p = n(96),
        f = !0
      e.decodeFC = u
    },
    function(t, e, n) {
      'use strict'
      function r(t, e) {
        return c.map(t, function(t, n) {
          return t ^ e[n]
        })
      }
      function i(t) {
        for (var e = [], n = 0; n < t; n++) e.push(0)
        return e
      }
      function o(t, e, n) {
        return i(e)
          .concat(t)
          .concat(i(n))
      }
      function s(t, e, n) {
        for (; 0 === e[0]; ) e = e.slice(1)
        n = n ? n.slice(-(e.length - 1)) : i(e.length - 1)
        for (var s = t.concat(n), a = 0; a < t.length; a++)
          s[a] && (s = r(s, o(e, a, s.length - a - e.length)))
        return s.slice(-1 * n.length)
      }
      function a(t, e, n, r) {
        return 3 - ((t + e + n + r) % 4)
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var c = n(0)
      ;(e.xor = r), (e.zeros = i), (e.pad = o), (e.crc = s), (e.checksum = a)
      var u = {
        codeSymLen: 30,
        codeWordLen: 5,
        bitsPerWord: 8,
        getMaxBits: function() {
          return (this.codeSymLen / this.codeWordLen) * this.bitsPerWord
        }
      }
      e.conf = u
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        i = n(0),
        o = n(45),
        s = ['choices', 'label'],
        a = (function() {
          function t(e) {
            void 0 === e && (e = {}), (this.opts = e), o(this.opts, t._defaults)
          }
          return (
            (t.prototype.toJSON = function() {
              return this.opts
            }),
            (t._defaults = {}),
            t
          )
        })(),
        c = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return o(r.opts, e._defaults), r
          }
          return (
            r(e, t),
            (e.prototype.setChoices = function(t) {
              return (this.opts.choices = t.toUpperCase()), this
            }),
            (e.prototype.setLabel = function(t) {
              this.opts.section_label = t
            }),
            (e._defaults = { choices: '12345' }),
            e
          )
        })(a),
        u = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return o(r.opts, e._defaults), r
          }
          return (
            r(e, t),
            (e.prototype.setCount = function(t) {
              return (this.opts.count = t), this
            }),
            (e.prototype.setChoices = function(t) {
              return (this.opts.choices = t.toUpperCase()), this
            }),
            (e.prototype.setAltChoices = function(t) {
              return (this.opts.choices_alt = t.toUpperCase()), this
            }),
            (e.prototype.setCompact = function(t) {
              void 0 === t && (t = !0), !1 !== t && (this.opts.compact = !0)
            }),
            (e.prototype.setLabel = function(t) {
              return (this.opts.section_label = t), this
            }),
            (e.prototype.override = function(t, e, n) {
              this.opts.question_opts || (this.opts.question_opts = {})
              var r = String(t)
              if (
                (this.opts.question_opts[r] ||
                  (this.opts.question_opts[r] = {}),
                -1 == i.indexOf(s, e))
              )
                throw new Error(
                  'Invalid field type for overriding.  Supported fields are: ' +
                    s.join(', ')
                )
              return (this.opts.question_opts[r][e] = n), this
            }),
            (e.prototype.setStartNumber = function(t) {
              return (this.opts.start_num = t), this
            }),
            (e._defaults = { choices: 'ABCDE', question_opts: null }),
            e
          )
        })(a),
        l = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return o(r.opts, e._defaults), r
          }
          return (
            r(e, t),
            (e.prototype.setCount = function(t) {
              return (this.opts.count = t), this
            }),
            (e.prototype.setLabel = function(t) {
              return (this.opts.section_label = t), this
            }),
            (e.prototype.setWidth = function(t) {
              return (this.opts.width = t), this
            }),
            (e.prototype.setChoices = function(t) {
              return (this.opts.choices = t.toUpperCase()), this
            }),
            (e.prototype.override = function(t, e, n) {
              this.opts.question_opts || (this.opts.question_opts = {})
              var r = String(t)
              if (
                (this.opts.question_opts[r] ||
                  (this.opts.question_opts[r] = {}),
                -1 == i.indexOf(s, e))
              )
                throw new Error(
                  'Invalid field type for overriding.  Supported fields are: ' +
                    s.join(', ')
                )
              return (this.opts.question_opts[r][e] = n), this
            }),
            (e.prototype.setStartNumber = function(t) {
              return (this.opts.start_num = t), this
            }),
            (e._defaults = {
              type: 'shortanswer',
              question_opts: null,
              choices: 'CI'
            }),
            e
          )
        })(a),
        p = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return o(r.opts, e._defaults), r
          }
          return (
            r(e, t),
            (e.prototype.setChoices = function(t) {
              return (this.opts.choices = t), this
            }),
            (e.prototype.setLabel = function(t) {
              return (this.opts.label = t), this
            }),
            (e.prototype.setDigits = function(t) {
              return (this.opts.digits = t), this
            }),
            (e._defaults = {
              choices: '0123456789',
              digits: 3,
              label: '',
              type: 'numeric'
            }),
            e
          )
        })(a),
        f = (function() {
          function t(e) {
            void 0 === e && (e = {}),
              (this.instances = []),
              (this.data = null),
              (this.formSpec = e),
              o(this.formSpec, t._defaults)
          }
          return (
            (t.prototype.getInstances = function() {
              return this.instances
            }),
            (t.prototype.toJSON = function() {
              return this.formSpec
            }),
            (t.prototype.setFormCode = function(t) {
              void 0 === t && (t = !0), (this.formSpec.formCode = t)
            }),
            (t.prototype.addVersionSection = function(t, e) {
              var n = new c()
              return (
                t && n.setChoices(t),
                e && n.setLabel(e),
                (this.formSpec.version = n),
                n
              )
            }),
            (t.prototype.addMultipleChoiceSection = function(t, e, n) {
              var r = {},
                o = null
              i.isObject(t) ? ((r = t), (e = n = null)) : (o = t)
              var s = new u(r)
              return (
                o && s.setCount(o),
                e && s.setChoices(e),
                n && s.setAltChoices(n),
                this.formSpec.sections.push(s),
                s
              )
            }),
            (t.prototype.addShortAnswerSection = function(t, e) {
              var n = {},
                r = null
              i.isObject(t) ? (n = r) : (r = t)
              var o = new l(n)
              return (
                r && o.setCount(r),
                e && o.setWidth(e),
                this.formSpec.sections.push(o),
                o
              )
            }),
            (t.prototype._createNumericSection = function(t, e) {
              return new p(i.isObject(t) ? t : { label: t, digits: e })
            }),
            (t.prototype.addTopRightNumericSection = function(t, e) {
              var n = this._createNumericSection(t, e)
              return this.formSpec.sections_topright.push(n), n
            }),
            (t.prototype.addNumericSection = function(t, e) {
              var n = this._createNumericSection(t, e)
              return this.formSpec.sections.push(n), n
            }),
            (t.prototype.setFormData = function(t) {
              this.data = t
            }),
            (t.prototype.getFormData = function() {
              return this.data
            }),
            (t.prototype.addInstance = function(t) {
              if (!t)
                throw new Error(
                  'addInstance expects an object with one or more of: data, ids, top, bottom'
                )
              var e = { data: t.data, ids: t.ids }
              t.top && (e.top = t.top),
                t.bottom && (e.bottom = t.bottom),
                t.exam_version && (e.exam_version = t.exam_version),
                this.instances.push(e)
            }),
            (t.prototype.config = function(t, e) {
              this.formSpec.config[t] = e
            }),
            (t.prototype.setZoom = function(t) {
              if (t > 2 || t < 0.25)
                throw new Error(
                  'Zoom level should be a value between 0.25 and 2.0 where 1.0 is normal size'
                )
              this.config('zoom', t)
            }),
            (t._defaults = {
              sections_topright: [],
              sections: [],
              formCode: null,
              config: { zoom: 1 }
            }),
            t
          )
        })()
      !(function(t) {
        !(function(t) {
          ;(t.MultipleChoice = u), (t.Numeric = p), (t.ShortAnswer = l)
        })(t.Sections || (t.Sections = {}))
      })(f || (f = {})),
        (t.exports = f)
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        i = n(0),
        o = n(45),
        s = ['choices', 'label'],
        a = (function() {
          function t(e) {
            void 0 === e && (e = {}), (this.opts = e), o(this.opts, t._defaults)
          }
          return (
            (t.prototype.toJSON = function() {
              return this.opts
            }),
            (t._defaults = {}),
            t
          )
        })(),
        c = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return o(r.opts, e._defaults), r
          }
          return (
            r(e, t),
            (e.prototype.setChoices = function(t) {
              return (this.opts.choices = t.toUpperCase()), this
            }),
            (e.prototype.setLabel = function(t) {
              this.opts.section_label = t
            }),
            (e._defaults = { choices: '12345' }),
            e
          )
        })(a),
        u = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return o(r.opts, e._defaults), r
          }
          return (
            r(e, t),
            (e.prototype.setCount = function(t) {
              return (this.opts.count = t), this
            }),
            (e.prototype.setChoices = function(t) {
              return (this.opts.choices = t.toUpperCase()), this
            }),
            (e.prototype.setAltChoices = function(t) {
              return (this.opts.choices_alt = t.toUpperCase()), this
            }),
            (e.prototype.setCompact = function(t) {
              void 0 === t && (t = !0), !1 !== t && (this.opts.compact = !0)
            }),
            (e.prototype.setLabel = function(t) {
              return (this.opts.section_label = t), this
            }),
            (e.prototype.override = function(t, e, n) {
              this.opts.question_opts || (this.opts.question_opts = {})
              var r = String(t)
              if (
                (this.opts.question_opts[r] ||
                  (this.opts.question_opts[r] = {}),
                -1 == i.indexOf(s, e))
              )
                throw new Error(
                  'Invalid field type for overriding.  Supported fields are: ' +
                    s.join(', ')
                )
              return (this.opts.question_opts[r][e] = n), this
            }),
            (e.prototype.setStartNumber = function(t) {
              return (this.opts.start_num = t), this
            }),
            (e._defaults = { choices: 'ABCDE', question_opts: null }),
            e
          )
        })(a),
        l = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return o(r.opts, e._defaults), r
          }
          return (
            r(e, t),
            (e.prototype.setChoices = function(t) {
              return (this.opts.choices = t), this
            }),
            (e.prototype.setLabel = function(t) {
              return (this.opts.label = t), this
            }),
            (e.prototype.setDigits = function(t) {
              return (this.opts.digits = t), this
            }),
            (e._defaults = {
              choices: '0123456789',
              digits: 3,
              label: '',
              type: 'numeric'
            }),
            e
          )
        })(a),
        p = (function() {
          function t(e) {
            void 0 === e && (e = {}),
              (this.zoneSpec = {}),
              (this.zoneSpec = e),
              o(this.zoneSpec, t._defaults)
          }
          return (
            (t.prototype.toJSON = function() {
              return this.zoneSpec
            }),
            (t._defaults = {}),
            t
          )
        })(),
        f = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return o(r.zoneSpec, e._defaults), r
          }
          return (
            r(e, t),
            (e.prototype.setVersionSection = function(t, e) {
              var n = new c()
              return (
                t && n.setChoices(t),
                e && n.setLabel(e),
                (this.zoneSpec.version = n),
                n
              )
            }),
            (e.prototype.addMultipleChoiceSection = function(t, e, n) {
              var r = {},
                o = null
              i.isObject(t) ? ((r = t), (e = n = null)) : (o = t)
              var s = new u(r)
              return (
                o && s.setCount(o),
                e && s.setChoices(e),
                n && s.setAltChoices(n),
                this.zoneSpec.sections.push(s),
                s
              )
            }),
            (e.prototype._createNumericSection = function(t, e) {
              var n
              if (i.isObject(t)) {
                n = new l(t)
              } else n = new l({ label: t, digits: e })
              return n
            }),
            (e.prototype.addTopRightNumericSection = function(t, e) {
              var n =
                'string' == typeof t
                  ? this._createNumericSection(t, e)
                  : this._createNumericSection(t)
              return this.zoneSpec.sections_topright.push(n), n
            }),
            (e.prototype.addNumericSection = function(t, e) {
              var n =
                'string' == typeof t
                  ? this._createNumericSection(t, e)
                  : this._createNumericSection(t)
              return this.zoneSpec.sections.push(n), n
            }),
            (e._defaults = {
              type: 'rect',
              sections_topright: [],
              sections: []
            }),
            e
          )
        })(p),
        h = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return o(r.zoneSpec, e._defaults), r
          }
          return r(e, t), (e._defaults = { type: 'clip' }), e
        })(p),
        d = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return o(r.zoneSpec, e._defaults), r
          }
          return r(e, t), (e._defaults = { type: 'text' }), e
        })(p),
        A = (function() {
          function t(e) {
            void 0 === e && (e = {}),
              (this.instances = []),
              (this.data = null),
              (this.formSpec = e),
              o(this.formSpec, t._defaults)
          }
          return (
            (t.prototype.getInstances = function() {
              return this.instances
            }),
            (t.prototype.toJSON = function() {
              return this.formSpec
            }),
            (t.prototype.setFormCode = function(t) {
              this.formSpec.formCode = t
            }),
            (t.prototype.addRectZone = function(t) {
              void 0 === t && (t = {}), (t = t || {})
              var e = new f(t)
              return this.formSpec.zones.push(e), e
            }),
            (t.prototype.addTextZone = function(t) {
              void 0 === t && (t = {}), (t = t || {})
              var e = new d(t)
              return this.formSpec.zones.push(e), e
            }),
            (t.prototype.addClip = function(t) {
              void 0 === t && (t = {}), (t = t || {})
              var e = new h(t)
              return this.formSpec.zones.push(e), e
            }),
            (t.prototype.addColumns = function(t) {
              this.formSpec.columns || (this.formSpec.columns = []),
                Array.isArray(t) || (t = [t]),
                (e = this.formSpec.columns).push.apply(e, t)
              var e
            }),
            (t.prototype._getTopRightZone = function() {
              var t = this.formSpec.topRightZone
              return (
                t ||
                  (t = this.formSpec.topRightZone = new f({
                    type: 'topRight'
                  })),
                t
              )
            }),
            (t.prototype._getVersionZone = function() {
              var t = this.formSpec.versionZone
              return (
                t ||
                  (t = this.formSpec.versionZone = new f({ type: 'version' })),
                t
              )
            }),
            (t.prototype.setVersionSection = function(t, e) {
              return this._getVersionZone().setVersionSection(t, e)
            }),
            (t.prototype.addTopRightNumericSection = function(t, e) {
              return this._getTopRightZone().addTopRightNumericSection(t, e)
            }),
            (t.prototype.setFormData = function(t) {
              this.data = t
            }),
            (t.prototype.getFormData = function() {
              return this.data
            }),
            (t.prototype.addInstance = function(t) {
              if (!t)
                throw new Error(
                  'addInstance expects an object with one or more of: data, ids, top, bottom'
                )
              var e = {
                data: t.data,
                ids: t.ids,
                header: t.header,
                footer: t.footer
              }
              t.top && (e.top = t.top),
                t.bottom && (e.bottom = t.bottom),
                t.exam_version && (e.exam_version = t.exam_version),
                t.rows && (e.rows = t.rows),
                this.instances.push(e)
            }),
            (t.prototype.config = function(t, e) {
              this.formSpec.config[t] = e
            }),
            (t.prototype.setZoom = function(t) {
              if (t > 2 || t < 0.25)
                throw new Error(
                  'Zoom level should be a value between 0.25 and 2.0 where 1.0 is normal size'
                )
              this.config('zoom', t)
            }),
            (t._defaults = { zones: [], formCode: null, config: { zoom: 1 } }),
            t
          )
        })()
      t.exports = A
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        var e = 'https://forms.gradecam.com'
        return (
          'local' === t
            ? (e = 'http://localhost:3010')
            : 'asia' == t
            ? (e = 'https://gc-forms.menco.cn')
            : t && 'http' == t.substr(0, 4)
            ? (e = t)
            : t && 'dev' == t && (e = 'https://forms-dev.gradecam.com'),
          { formServerDomain: e, formServerComm: e + '/comm' }
        )
      }
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }
          return function(e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })()
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(0),
        o = n(97),
        s = n(44),
        a = (function(t) {
          function e() {
            var e = t.call(this) || this
            return (
              e.useLegacyAPI &&
                ((e.renderForm = e.renderForm_old),
                (e.testRenderForm = e.testRenderForm_old),
                (e.getStatus = e.getStatus_old),
                (e.fetchFormData = e.fetchFormData_old)),
              e
            )
          }
          return (
            r(e, t),
            (e.prototype.createBlankForm = function(t) {
              void 0 === t && (t = {})
              var e = !0
              !1 === t.form_code && (e = !1)
              var n = new o()
              return n.setFormCode(e), n
            }),
            (e.prototype.createScoreForm = function(t) {
              void 0 === t && (t = {})
              var e = t.id_digits,
                n = t.numeric_digits || 3,
                r = t.form_code || !1,
                i = this.createBlankForm()
              return (
                i.setFormCode(r),
                i.config('type', 'score'),
                i.addTopRightNumericSection('Score', n),
                i.addTopRightNumericSection('GradeCam ID', e),
                i
              )
            }),
            (e.prototype.createCreditForm = function(t) {
              void 0 === t && (t = {})
              var e = t.id_digits,
                n = t.form_code || !1,
                r = this.createBlankForm()
              return (
                r.setFormCode(n),
                r.config('type', 'score'),
                r.addTopRightNumericSection('GradeCam ID', e),
                r
              )
            }),
            (e.prototype.createExamForm = function(t) {
              void 0 === t && (t = {})
              var e = t.questions || 10,
                n = t.id_digits,
                r = t.form_code || !1
              t = t || {}
              var o = this.createBlankForm()
              o.setFormCode(r)
              var s = n ? o.addTopRightNumericSection('GradeCam ID', n) : null,
                a = o.addMultipleChoiceSection(e)
              return (
                t.choices && a.setChoices(t.choices),
                t.altChoices && a.setAltChoices(t.choices),
                (o.override = i.bind(a.override, a)),
                (o.setCount = i.bind(a.setCount, a)),
                (o.setChoices = i.bind(a.setChoices, a)),
                (o.setAltChoices = i.bind(a.setAltChoices, a)),
                (o.setLabel = i.bind(a.setLabel, a)),
                (o.setStartNumber = i.bind(a.setStartNumber, a)),
                (o.setCompact = i.bind(a.setCompact, a)),
                (o.setIDDigits = n ? i.bind(s.setDigits, s) : null),
                o
              )
            }),
            (e.prototype.renderForm = function(t, e, n) {
              var r = { formSpec: t, instances: t.getInstances() }
              t.getFormData() && (r.formData = t.getFormData())
              var i = this.makeFormsRequest('/form/render', r).then(function(
                t
              ) {
                var e = t.id,
                  n = {
                    id: e,
                    html: t.host + '/form/' + e + '.html',
                    pdf: t.host + '/form/' + e + '.pdf',
                    pdfPreview: t.host + '/formpdf/' + e + '.preview.pdf',
                    pdfDirect: t.host + '/formpdf/' + e + '.pdf',
                    instanceCount: t.count,
                    pageCount: t.pageCount
                  }
                return (
                  1 != t.count ||
                    ('pageCount' in t && 1 != t.pageCount) ||
                    ((n.png = t.host + '/form/' + e + '.png'),
                    (n.pngDirect = t.host + '/formpdf/' + e + '.png')),
                  n
                )
              })
              return e && i.then(e), n && i.catch(n), i
            }),
            (e.prototype.renderForm_old = function(t, e, n) {
              var r = { formSpec: t, instances: t.getInstances() }
              return (
                t.getFormData() && (r.formData = t.getFormData()),
                this.sendMessage('render', r, e, n)
              )
            }),
            (e.prototype.testRenderForm = function(t, e, n) {
              var r = { formSpec: t, instances: t.getInstances() }
              t.getFormData() && (r.formData = t.getFormData())
              var i = this.makeFormsRequest('/form/testRender', r).then(
                function(t) {
                  return (t = !(!t || !t.status || 'OK' != t.status))
                }
              )
              return e && i.then(e), n && i.catch(n), i
            }),
            (e.prototype.testRenderForm_old = function(t, e, n) {
              var r = { formSpec: t, instances: t.getInstances() }
              return (
                t.getFormData() && (r.formData = t.getFormData()),
                this.sendMessage('renderTest', r, e, n)
              )
            }),
            (e.prototype.getStatus = function(t, e, n, r) {
              var i = '/batch/' + t + '/status/' + e
              return this.makeFormsRequest(i, !1, n, r)
            }),
            (e.prototype.getStatus_old = function(t, e, n, r) {
              return this.sendMessage('status', { batch: t, type: e }, n, r)
            }),
            (e.prototype.fetchFormData = function(t, e, n) {
              return this.makeFormsRequest('/formv2/data/', t, e, n)
            }),
            (e.prototype.fetchFormData_old = function(t, e, n) {
              return this.sendMessage('fetchv2', { form_id_list: t }, e, n)
            }),
            e
          )
        })(s)
      e.Form1Manager = a
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }
          return function(e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })()
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(44),
        o = n(98),
        s = n(1),
        a = {
          render: '/form/render2',
          test_render: 'form2/testRender',
          status: '/batch2/',
          data: '/form/data2/'
        },
        c = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            r(e, t),
            (e.prototype.createBlankForm = function(t) {
              t || (t = {})
              var e = !0
              !1 === t.form_code && (e = !1)
              var n = new o()
              return n.setFormCode(e), n
            }),
            (e.prototype.renderForm = function(t, e, n) {
              var r = { formSpec: t, instances: t.getInstances() }
              t.getFormData() && (r.formData = t.getFormData())
              var i = this.makeFormsRequest(a.render, r).then(function(t) {
                var e = t.id,
                  n = {
                    id: e,
                    pdf: t.host + '/form2/' + e + '.pdf',
                    pdfDirect: t.host + '/form2/' + e + '.pdf',
                    pdfPreview: t.host + '/form2/' + e + '.preview.pdf',
                    pageCount: t.pageCount,
                    instanceCount: t.instanceCount
                  }
                return (
                  1 == t.pageCount &&
                    t.instanceCount < 2 &&
                    (n.png = t.host + '/form2/' + e + '.png'),
                  n
                )
              })
              return e && i.then(e), n && i.then(void 0, n), i
            }),
            (e.prototype.testRenderForm = function(t, e, n) {
              var r = { formSpec: t, instances: t.getInstances() }
              t.getFormData() && (r.formData = t.getFormData())
              var i = this.makeFormsRequest(a.test_render, r).then(function(t) {
                return (t = !(!t || !t.status || 'OK' != t.status))
              })
              return e && i.then(e), n && i.catch(n), i
            }),
            (e.prototype.getStatus = function(t, e, n, r) {
              var i = s.newDeferred()
              return (
                i.resolve({ state: 'complete', status_string: '' }),
                i.promise.then(n),
                i.promise
              )
            }),
            (e.prototype.fetchFormData = function(t, e, n) {
              return this.makeFormsRequest(a.data, t, e, n)
            }),
            e
          )
        })(i)
      e.Form2Manager = c
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        var e = []
        i.each(t, function(t) {
          var n = t.label.split(' ')
          if ('Question' === n[0]) {
            var r = Number(n[1]) - 1
            e[r] = t
          }
        }),
          i.each(e, function(t, n) {
            var r = Number(n)
            if (!t.ignore && 0 === t.value.length) {
              var i = r >= 1 ? e[r - 1] : null
              if (i && i.classifier_id === t.classifier_id) {
                if (i.P_blank < 0.001) {
                  var o = i.marked_sigma - t.marked_sigma
                  t.P_blank > 0.9
                    ? ((t.value = ''), (t.validate = !1))
                    : o > 3 && ((t.value = ''), (t.validate = !1))
                }
                0 === i.value.length &&
                  !1 === i.validate &&
                  t.P_blank > 0.9 &&
                  ((t.value = ''), (t.validate = !1))
              }
            }
          })
      }
      var i = n(0)
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      var r = 0,
        i = (function() {
          function t(t, e) {
            ;(this.unmarkedValidationInfo = e),
              (this.intensityList = t),
              (this.id = r++),
              this._classify()
          }
          return t
        })()
      t.exports = i
    },
    function(t, e, n) {
      'use strict'
      var r = n(107)
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      var r = n(108)
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      var r = n(111)
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      function r(t, e, n) {
        return (
          (1 / Math.sqrt(6.2832 * e * e)) *
          Math.exp((-(n - t) * (n - t)) / (2 * e * e))
        )
      }
      function i(t, e, n) {
        return 0.98 * r(t, e, n) + 0.02 * r(t, 2 * e, n)
      }
      function o(t, e, n) {
        return 0.99 * r(t, e, n) + 0.01 * r(t, 2 * e, n)
      }
      function s(t) {
        for (var e = 0, n = 0; n < t.length; n++) e += t[n]
        e /= t.length
        var r = c
            .sortBy(t, function(t) {
              return (t - e) * (t - e)
            })
            .slice(0, Math.floor(0.5 * t.length)),
          i = 0
        return (
          c.each(r, function(t) {
            i += (t - e) * (t - e)
          }),
          2.65 * Math.sqrt(i / r.length)
        )
      }
      var a =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        c = n(0),
        u = n(103),
        l = n(23),
        p = n(2),
        f = p.get(),
        h = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            a(e, t),
            (e.prototype._classify = function() {
              if (this.intensityList.length < 2)
                return void (this.otsu = {
                  marked_sigma: 1,
                  unmarked_sigma: 1,
                  marked_average: 1,
                  unmarked_average: 0
                })
              ;(this.otsu = l(this.intensityList)),
                (this.unfiltered_otsu = this.otsu)
              var t = this.filterLowIntensities(this.intensityList)
              t.length < 2 ||
                ((this.otsu = l(t)),
                this.otsu.marked_sigma < 2 * this.otsu.unmarked_sigma &&
                  (this.otsu.marked_sigma = 2 * this.otsu.unmarked_sigma),
                (t = this.filterExceptionalIntensities(t)),
                t.length < 2 ||
                  ((this.otsu = l(t)),
                  this.otsu.marked_sigma < 2 * this.otsu.unmarked_sigma &&
                    (this.otsu.marked_sigma = 2 * this.otsu.unmarked_sigma)))
            }),
            (e.prototype.filterLowIntensities = function(t) {
              var e =
                  (this.otsu.marked_average * this.otsu.unmarked_sigma +
                    this.otsu.unmarked_average * this.otsu.marked_sigma) /
                  (this.otsu.unmarked_sigma + this.otsu.marked_sigma),
                n = []
              c.each(t, function(t) {
                t < e && n.push(t)
              })
              var r = c.sortBy(n, function(t) {
                  return t
                })[Math.floor(n.length / 2)],
                i = r - s(n),
                o = 0,
                a = []
              return (
                c.each(t, function(t) {
                  t < i ? o++ : a.push(t)
                }),
                a
              )
            }),
            (e.prototype.filterExceptionalIntensities = function(t) {
              var e = this,
                n = [],
                r =
                  (this.otsu.marked_average * this.otsu.unmarked_sigma +
                    this.otsu.unmarked_average * this.otsu.marked_sigma) /
                  (this.otsu.unmarked_sigma + this.otsu.marked_sigma),
                i = [],
                o = []
              c.each(t, function(t) {
                t < r ? i.push(t) : o.push(t)
              })
              var a = o.length > 5 ? s(o) : this.otsu.marked_sigma,
                u = i.length > 5 ? s(i) : this.otsu.unmarked_sigma
              return (
                c.each(t, function(t) {
                  var r = Math.abs(t - e.otsu.marked_average) / a,
                    i = Math.abs(t - e.otsu.unmarked_average) / u
                  Math.min(r, i) <= 5 && n.push(t)
                }),
                n
              )
            }),
            (e.prototype.normalityTest = function(t) {
              function e(e) {
                var r = 0
                return (
                  c.each(t, function(t) {
                    r += Math.pow(t - n, e)
                  }),
                  (r /= t.length)
                )
              }
              var n =
                  c.reduce(
                    t,
                    function(t, e) {
                      return e + t
                    },
                    0
                  ) / t.length,
                r = e(2),
                i = e(3),
                o = e(4),
                s = i / Math.pow(r, 1.5),
                a = o / Math.pow(r, 2)
              console.log('Sqrt b1 = ' + s), console.log('b2 = ' + a)
              var u = t.length,
                l = s * Math.sqrt(((u + 1) * (u + 3)) / (6 * (u - 2))),
                p =
                  (3 * (u * u + 27 * u - 70) * (u + 1) * (u + 3)) /
                  ((u - 2) * (u + 5) * (u + 7) * (u + 9)),
                f = Math.sqrt(-1 + Math.sqrt(2 * (p - 1))),
                h = 1 / Math.log(f),
                d = Math.sqrt(2 / (f * f - 1)),
                A = l / d,
                g = h * Math.log(A + Math.sqrt(A * A + 1))
              console.log('Z(sqrtb1) = ' + g)
              var m = (3 * (u - 1)) / (u + 1),
                v =
                  (24 * u * (u - 2) * (u - 3)) /
                  ((u + 1) * (u + 1) * (u + 3) * (u + 5)),
                y = (a - m) / Math.sqrt(v),
                b =
                  ((6 * (u * u - 5 * u + 2)) / ((u + 7) * (u + 9))) *
                  Math.sqrt((6 * (u + 3) * (u + 5)) / (u * (u - 2) * (u - 3))),
                w = 6 + (8 / b) * (2 / b + Math.sqrt(1 + 4 / (b * b))),
                _ =
                  (1 -
                    2 / (9 * w) -
                    Math.pow(
                      (1 - 2 / w) / (1 + y * Math.sqrt(2 / (w - 4))),
                      1 / 3
                    )) /
                  Math.sqrt(2 / 9 / w)
              console.log('Z(b2) = ' + _)
              var S = g * g * _ * _
              console.log('Ksqr = ' + S + ' n = ' + u)
            }),
            (e.prototype.getProbabilityGivenMarked = function(t) {
              return t > this.otsu.marked_average
                ? 1e4
                : i(this.otsu.marked_average, this.otsu.marked_sigma, t)
            }),
            (e.prototype.getProbabilityGivenUnmarked = function(t) {
              return t < this.otsu.unmarked_average
                ? 1e4
                : o(this.otsu.unmarked_average, this.otsu.unmarked_sigma, t)
            }),
            (e.prototype.calcTransform = function() {
              ;(this.A =
                1 / (this.otsu.marked_average - this.otsu.unmarked_average)),
                (this.B = -1 * this.otsu.unmarked_average * this.A)
            }),
            (e.prototype.transform = function(t) {
              return this.A * t + this.B
            }),
            (e.prototype.getMarkedSignificance = function(t) {
              return (t - this.otsu.marked_average) / this.otsu.marked_sigma
            }),
            (e.prototype.getUnmarkedSignificance = function(t) {
              return (t - this.otsu.unmarked_average) / this.otsu.unmarked_sigma
            }),
            (e.prototype.validate = function(t) {
              t = t || 3
              var e = this.unfiltered_otsu,
                n = Math.sqrt(
                  e.marked_sigma * e.marked_sigma +
                    e.unmarked_sigma * e.unmarked_sigma
                ),
                r = (e.marked_average - e.unmarked_average) / n
              if (
                ((this.sigma = r),
                f.trace('Classifier: ' + this.id),
                f.trace('Sigma: ' + r),
                r < t)
              )
                return (
                  f.trace('Rejecting to low sigma:', r, this.intensityList), !1
                )
              if (this.unmarkedValidationInfo) {
                if (
                  (e.marked_average - this.unmarkedValidationInfo.average) /
                    this.unmarkedValidationInfo.sigma <
                  4
                )
                  return !1
              }
              return !0
            }),
            e
          )
        })(u)
      t.exports = h
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        if (1 === t.length) return t[0]
        var e = t[0],
          n = [],
          i = r(t.splice(1, t.length))
        return (
          p.each(e, function(t) {
            p.each(i, function(e) {
              n.push([t].concat(e))
            })
          }),
          n
        )
      }
      function i(t, e, n) {
        var r = 0
        return (
          p.each(p.range(e, n + 1), function(e) {
            r += d(t) / (d(e) * d(t - e))
          }),
          r
        )
      }
      function o(t, e, n) {
        return t.multiplicity <= n && t.multiplicity >= e
          ? 0.97 / A(t.state.length, e, n)
          : 0 === t.multiplicity
          ? 0.02
          : 0.01 / (g(t.state.length) - A(t.state.length, e, n) - 1)
      }
      function s(t, e) {
        var n = t.length,
          i = []
        if (n > 3) {
          var o = [],
            s = p.zip(t, e)
          p.each(s, function(t) {
            var e = t[0],
              n = t[1],
              r = e / (e + n)
            r < 0.5 && (r = 1 - r), o.push(r)
          })
          var a,
            c = p.sortBy(o, function(t) {
              return -t
            }),
            u = n - 5
          ;(a = u >= 0 ? c[u] : 1),
            p.each(o, function(n, r) {
              n >= a
                ? t[r] > e[r]
                  ? i.push([1])
                  : i.push([0])
                : i.push([1, 0])
            })
        } else
          p.each(t, function() {
            i.push([1, 0])
          })
        var l = r(i),
          f = []
        return (
          p.each(l, function(t) {
            f.push({ state: t })
          }),
          f
        )
      }
      function a(t) {
        p.each(t, function(t) {
          t.multiplicity = p.reduce(
            t.state,
            function(t, e) {
              return t + Number(e)
            },
            0
          )
        })
      }
      function c(t, e, n, r, i) {
        p.each(t, function(t) {
          var s = 1
          p.each(t.state, function(t, r) {
            s *= 1 === t ? e[r] : n[r]
          }),
            (t.P = s * o(t, r, i))
        })
      }
      function u(t) {
        var e = p.reduce(
            t,
            function(t, e) {
              return t + e.P
            },
            0
          ),
          n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        p.each(t, function(t) {
          n[t.multiplicity] += t.P
        }),
          p.each(t, function(t) {
            ;(t.P_state = t.P / e),
              (t.P_choice = t.P / n[t.multiplicity]),
              (t.P_multiplicity = n[t.multiplicity] / e)
          })
      }
      var l =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        p = n(0),
        f = n(109),
        h = [
          1,
          1,
          2,
          6,
          24,
          120,
          720,
          5040,
          40320,
          362880,
          3628800,
          39916800,
          479001600,
          6227020800,
          87178291200,
          1307674368e3,
          20922789888e3,
          355687428096e3,
          6402373705728e3,
          0x1b02b9306890000,
          243290200817664e4
        ],
        d = function(t) {
          return h[t]
        },
        A = p.memoize(i, function(t, e, n) {
          return String(1e4 * t + 100 * e + n)
        }),
        g = p.memoize(function(t) {
          return Math.pow(2, t)
        }),
        m = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            l(e, t),
            (e.prototype.interpretIntArray = function(t, e, n, r, i) {
              var o = [],
                l = []
              i > e.length && (i = e.length),
                p.each(e, function(e) {
                  var n = t.getProbabilityGivenMarked(e),
                    r = t.getProbabilityGivenUnmarked(e)
                  o.push(n), l.push(r)
                })
              var f = s(o, l)
              a(f),
                t.validate(this.sigma_threshold) || ((r = 0), (i = e.length)),
                c(f, o, l, r, i),
                u(f)
              var h = p.max(f, function(t) {
                  return t.P_state
                }),
                d = []
              p.each(h.state, function(t, e) {
                t && d.push(n[e])
              })
              var A = p.find(f, function(t) {
                  return 0 === t.multiplicity
                }),
                g = 0
              A && (g = A.P_multiplicity)
              var m,
                v = t.getMarkedSignificance(p.max(e)),
                y = 1 - h.P_choice,
                b = 1 - h.P_multiplicity,
                w = y > this.choice_error_threshold
              return (
                (m =
                  d.length >= r && d.length <= i
                    ? b > this.multiplicity_error_threshold_expected
                    : b > this.multiplicity_error_threshold_not_expected),
                {
                  values: d,
                  validate: w || m,
                  P_blank: g,
                  P_state: h.P_state,
                  P_choice: h.P_choice,
                  P_multiplicity: h.P_multiplicity,
                  marked_sigma: v
                }
              )
            }),
            e
          )
        })(f)
      t.exports = m
    },
    function(t, e, n) {
      'use strict'
      function r(t, e, n) {
        if (!t) return e
        if (!e) return t
        var r = {}
        return (
          s.each(t, function(t, n) {
            var i = e[n],
              o = t.validate_classifier ? 0 : t.P_state,
              s = i.validate_classifier ? 0 : i.P_state
            o > 0.3 && '' === t.value
              ? (r[n] = t)
              : s > 0.3 && '' === i.value
              ? (r[n] = i)
              : (r[n] = o > s ? t : i)
          }),
          r
        )
      }
      function i(t, e) {
        var n = 0,
          r = 0
        return (
          s.each(t, function(t) {
            r++,
              (0 != t.validate && 1 != t.bad_multiplicity) ||
                0 != t.validate_classifier ||
                n++
          }),
          n / r
        )
      }
      var o = n(4),
        s = n(0),
        a = n(102),
        c = n(23),
        u = (function() {
          function t(t) {
            ;(this.Classifier = t),
              (this.multiplicity_error_threshold_not_expected = 0.001),
              (this.multiplicity_error_threshold_expected = 0.01),
              (this.choice_error_threshold = 1e-5),
              (this.sigma_threshold = 3),
              (this.scanMode = null)
          }
          return (
            (t.prototype.setMode = function(t) {
              this.scanMode = t
            }),
            (t.prototype.setMultiplicityErrorThreshold = function(t, e) {
              ;(this.multiplicity_error_threshold_not_expected = e),
                (this.multiplicity_error_threshold_expected = t)
            }),
            (t.prototype.setChoiceErrorThreshold = function(t) {
              this.choice_error_threshold = t
            }),
            (t.prototype.setSigmaThreshold = function(t) {
              this.sigma_threshold = t
            }),
            (t.prototype.interpretScanUsingMethod = function(t, e, n, r, i, o) {
              var a = this,
                c = {},
                u = s.groupBy(t.items, n)
              return (
                s.each(u, function(t, n) {
                  var s = []
                  s = []
                  for (var u = 0, l = t; u < l.length; u++) {
                    var p = l[u],
                      f = p
                    s = s.concat(
                      f.getIntensityList ? f.getIntensityList(r) : []
                    )
                  }
                  for (var h = new e(s, i), d = 0, A = t; d < A.length; d++) {
                    var p = A[d],
                      g = a.interpretItem(h, p, r, o)
                    ;(g.classifier_id = h.id), (c[p.fdid] = g)
                  }
                }),
                c
              )
            }),
            (t.prototype.interpretScan = function(t) {
              var e = this,
                n = s.indexOf(t.getIntensityMethods(), 1) >= 0,
                u = function(t) {
                  return 'number' === t.type ? t.label : String(t.block_col)
                },
                l = function(t) {
                  return 'number' === t.type ? t.label : 'question'
                },
                p = t.getItemByLabel('Version'),
                f = null
              p && (f = p.getDarkestBubble()),
                t.fc_data &&
                  t.fc_data.exam_version &&
                  (f = t.fc_data.exam_version)
              var h = t.getItemsByType('number')
              h.length || (h = t.getItemsByType('question'))
              for (var d = [], A = [], g = 0, m = h; g < m.length; g++) {
                var v = m[g]
                ;(d = d.concat(v.getIntensityList(0))),
                  (A = A.concat(v.getIntensityList(1)))
              }
              var y,
                b,
                w = c(d),
                _ = c(A)
              w &&
                (y = { average: w.unmarked_average, sigma: w.unmarked_sigma }),
                _ &&
                  (b = n
                    ? { average: _.unmarked_average, sigma: _.unmarked_sigma }
                    : {})
              var S = this.interpretScanUsingMethod(
                t,
                this.Classifier,
                u,
                0,
                y,
                f
              )
              a(S)
              var k
              i(S) < 1 &&
                ((k = this.interpretScanUsingMethod(
                  t,
                  this.Classifier,
                  l,
                  0,
                  y,
                  f
                )),
                a(k))
              var x,
                C,
                O,
                I = r(S, k, f),
                E = i(I, f),
                M = 0
              E < 1 &&
                n &&
                ((x = this.interpretScanUsingMethod(
                  t,
                  this.Classifier,
                  u,
                  1,
                  b,
                  f
                )),
                a(x),
                i(x) < 1 &&
                  ((C = this.interpretScanUsingMethod(
                    t,
                    this.Classifier,
                    l,
                    1,
                    b,
                    f
                  )),
                  a(C)),
                (O = r(x, C)),
                (M = i(O)))
              var R = {},
                D = !1
              if (E > 0.4 && E > M) R = I
              else if (M > 0.4) R = O
              else {
                var B = this.interpretScanUsingMethod(
                  t,
                  this.Classifier,
                  l,
                  0,
                  {},
                  f
                )
                s.each(B, function(t) {
                  'GradeCam ID' != t.label && (t.validate = !0)
                }),
                  (R = B),
                  (D = !0)
              }
              var V = !1
              s.each(R, function(t) {
                'Version' == t.label &&
                  t.validate &&
                  -1 == e.multiplicity_error_threshold_not_expected &&
                  (V = !0)
              }),
                s.each(R, function(t) {
                  !0 === t.bad_multiplicity && (t.validate = !0)
                })
              for (var T = [], F = 0, N = t.items; F < N.length; F++) {
                var v = N[F]
                T.push(R[v.fdid])
              }
              return new o.InterpretedScan({
                fc_data: t.fc_data,
                type: t.type,
                items: T,
                bad_form: D,
                bad_form_version: V
              })
            }),
            (t.prototype.interpretItem = function(t, e, n, r) {
              switch (e.type) {
                case 'number':
                  return this.interpretNumberItem(t, e, n)
                case 'question':
                  return this.interpretQuestionItem(t, e, n, r)
                case 'clip':
                  return this.interpretClipItem(e)
                default:
                  throw 'Unknown Item Type'
              }
            }),
            (t.prototype.interpretQuestionItem = function(t, e, n, r) {
              var i,
                s = e.getIntensities(n)
              i = e.ignore
                ? {
                    values: [],
                    validate: !1,
                    P_state: 1,
                    P_blank: 1,
                    marked_sigma: 0
                  }
                : this.interpretIntArray(
                    t,
                    s,
                    e.choices,
                    e.getMultiplicityMin(r),
                    e.getMultiplicityMax(r)
                  )
              var a = !t.validate(this.sigma_threshold)
              a && (i.validate = !0)
              var c = new o.InterpretedScan.InterpretedItem({
                type: 'question',
                form_area: e.form_area,
                label: e.label,
                value: i.values.join(''),
                choices: e.choices,
                validate: i.validate,
                validate_classifier: a,
                P_state: i.P_state,
                P_blank: i.P_blank,
                marked_sigma: i.marked_sigma
              })
              if (
                -1 === this.multiplicity_error_threshold_not_expected &&
                !e.ignore
              ) {
                c.value.length !== e.getMultiplicityMax(r) &&
                  (c.bad_multiplicity = !0)
              }
              var u = {}
              return (
                i.debug && (u = i.debug), (u.intArray = s), (c.debug = u), c
              )
            }),
            (t.prototype.interpretNumberItem = function(t, e, n) {
              var r = e.getIntensities(n),
                i = '',
                a = !1,
                c = !1,
                u = this,
                l = !t.validate()
              return (
                s.each(r, function(n, r) {
                  var o = e.choices
                  e.choicesArr && e.choicesArr.length && (o = e.choicesArr[r])
                  var s = u.interpretIntArray(t, n, o, 0, 1)
                  ;(s.values = s.values.filter(function(t) {
                    return void 0 !== t
                  })),
                    s.values.length > 1
                      ? (a = !0)
                      : 0 == s.values.length
                      ? (i += ' ')
                      : (i += s.values[0]),
                    s.validate && (c = !0)
                }),
                (i = i.trim()),
                a && ((i = ''), (c = !0)),
                !this.scanMode.numeric_allow_blanks &&
                  i.indexOf(' ') > -1 &&
                  ((a = !0), (c = !0)),
                t.validate() || (c = !0),
                new o.InterpretedScan.InterpretedItem({
                  type: 'number',
                  choices: e.choices,
                  choicesArr: e.choicesArr,
                  form_area: e.form_area,
                  label: e.label,
                  value: i,
                  validate: c,
                  validate_classifier: l,
                  bad_multiplicity: a
                })
              )
            }),
            (t.prototype.interpretClipItem = function(t) {
              return new o.InterpretedScan.InterpretedItem({
                type: 'clip',
                choices: [],
                form_area: t.form_area,
                label: t.label,
                value: t.image,
                wantMoreCopies: t.wantMoreCopies,
                validate: !1,
                validate_classifier: !1,
                skew: t.skew
              })
            }),
            t
          )
        })()
      t.exports = u
    },
    function(t, e, n) {
      'use strict'
      var r = (function() {
        function t() {}
        return t
      })()
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        return t.blur / t.width || 1
      }
      function i(t) {
        for (
          var e = a.map(t[0], function() {
              return 0
            }),
            n = 0;
          n < t.length;
          n++
        )
          for (var r = 0; r < e.length; r++) e[r] += t[n][r]
        for (var r = 0; r < e.length; r++) e[r] = e[r] / t.length
        return e
      }
      function o(t) {
        for (
          var e = a.keys(t[0]).map(function(t) {
              return Number(t)
            }),
            n = [],
            r = 0,
            o = e;
          r < o.length;
          r++
        ) {
          var s = o[r]
          !(function(e) {
            var r = a.map(t, function(t) {
              return t[e]
            })
            n[e] = i(r)
          })(s)
        }
        return n
      }
      var s =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        a = n(0),
        c = n(110),
        u = n(4),
        l = 0,
        p = 0,
        f = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            s(e, t),
            (e.prototype.interpretScans = function(t, e, n) {
              if (!e.length) return null
              var s = e[0].structure_hash
              if (
                a.any(e, function(t) {
                  return t.structure_hash != s
                })
              )
                return null
              var c = a.pluck(e[0].items, 'fdid'),
                f = e[0].fc_data,
                h = a.reduce(
                  e,
                  function(t, e) {
                    return e ? t.concat(e.items) : t
                  },
                  []
                ),
                d = new u.StructuredScan({ type: e[0], items: [], fc_data: f })
              return (
                a.each(c, function(t) {
                  var e,
                    n = a.select(h, function(e) {
                      return e.fdid == t
                    }),
                    s = [],
                    c = n[0]
                  if ('number' === c.type) {
                    var f = new u.StructuredScan.NumberItem(c)
                    s = []
                    for (
                      var A = a.map(n, function(t) {
                          return t.intensities
                        }),
                        g = [],
                        m = 0;
                      m < A[0].length;
                      m++
                    )
                      !(function(t) {
                        ;(s = []),
                          (s = a.map(A, function(e) {
                            return e[t]
                          })),
                          g.push(o(s))
                      })(m)
                    ;(f.intensities = g), (e = f)
                  } else if ('clip' == c.type) {
                    var v = !1,
                      y = a.select(h, function(e) {
                        return e.fdid == t
                      }),
                      b = a.min(y, function(t) {
                        return r(t)
                      }),
                      w = r(b)
                    y.length >= 3 ? (v = !0) : p > 5 && w > 1.5 * l && (v = !0),
                      v && (l = l ? 0.9 * l + w * (1 - 0.9) : w),
                      p++ < 1 && (l = w)
                    var _ = b
                    ;(_.wantMoreCopies = !v),
                      (e = new u.StructuredScan.ClipItem(_))
                  } else {
                    var f = new u.StructuredScan.QuestionItem(c)
                    s = []
                    for (
                      var A = a.map(n, function(t) {
                          return t.intensities
                        }),
                        g = [],
                        m = 0;
                      m < A[0].length;
                      m++
                    )
                      !(function(t) {
                        ;(s = []),
                          (s = a.map(A, function(e) {
                            return e[t]
                          })),
                          g.push(i(s))
                      })(m)
                    ;(f.intensities = g), (e = f)
                  }
                  d.items.push(e)
                }),
                n.interpretScan(d)
              )
            }),
            e
          )
        })(c)
      t.exports = f
    },
    function(t, e, n) {
      'use strict'
      ;(function(t) {
        function n(t) {
          return new Promise(function(e, n) {
            try {
              return t()
            } catch (t) {
              console && (console.log('Error:', t), console.log(t.stack))
            }
          })
        }
        function r() {
          return new Promise(function(t) {
            return i(t)
          })
        }
        Object.defineProperty(e, '__esModule', { value: !0 })
        var i = function(t) {
          setTimeout(t, 0)
        }
        ;(e.executeAsync = i),
          void 0 !== t &&
            (e.executeAsync = i = function(e) {
              t.nextTick(e)
            }),
          (e.executeAsyncDfd = n),
          (e.yieldAsync = r)
      }.call(e, n(34)))
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        t = t.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
        var e = new RegExp('[\\?&]' + t + '=([^&#]*)'),
          n = e.exec(location.search)
        return null === n ? '' : decodeURIComponent(n[1].replace(/\+/g, ' '))
      }
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      var r,
        i = n(1)
      !(function(t) {
        function e(t) {
          var e = []
          for (var n in t)
            e.push(encodeURIComponent(n) + '=' + encodeURIComponent(t[n]))
          return e.join('&')
        }
        function n(n, o) {
          var s = i.newDeferred(),
            a = 'JSONPCallback_' + t.callbackCounter++
          ;(window[a] = r(s)), (o.callback = a)
          var c = document.createElement('SCRIPT')
          return (
            (c.src = n + '?' + e(o)),
            document.getElementsByTagName('HEAD')[0].appendChild(c),
            s.promise
          )
        }
        function r(t) {
          return function(e) {
            var n = null
            if ('string' == typeof e)
              try {
                n = JSON.parse(e)
              } catch (t) {
                n = e
              }
            else n = e
            t.resolve(n)
          }
        }
        ;(t.callbackCounter = 0),
          (t.serialize = e),
          (t.fetch = n),
          (t.evalJSONP = r)
      })(r || (r = {})),
        (t.exports = r)
    },
    function(module, exports, __webpack_require__) {
      'use strict'
      var nbl = {
        c: document,
        q: {},
        n: null,
        l: function(a) {
          var b,
            c,
            x,
            y,
            z,
            s,
            l,
            i = 0,
            j = 0,
            m = this
          if (
            ((m.h = m.c.head || m.c.body || m.c.documentElement || m.h),
            m.i ||
              ((m.s = m.f = 0),
              (m.i = setInterval(function() {
                ;(m.o < 0 || !m.s) &&
                  ((m.i = clearInterval(m.i)), m.s > 0 && m.f && m.f(m.q)),
                  m.o--
              }, (m.o = 50)))),
            a == m.n)
          )
            for (s = m.c.getElementsByTagName('script'); j < s.length; ) {
              if ((a = eval('(' + s[j].getAttribute('data-nbl') + ')')) && a) {
                m.h = s[j].parentNode
                break
              }
              j++
            }
          if (a && a.shift)
            for (; i < a.length; )
              (b = a[i]),
                (c = a[i + 1]),
                (x = 'function'),
                (y = typeof b),
                (z = typeof c),
                (l = z == x ? c : y == x ? b : m.n),
                'number' == y && (m.o = b / 50),
                'string' == y && m.a([b], l),
                b.shift && m.a([b.shift(), b], l),
                !m.f && l && (m.f = l),
                i++
        },
        a: function(t, e) {
          var n,
            r = this,
            i = t[0].replace(/.+\/|\.min\.js|\.js|\?.+|\W/gi, '')
          ;(n = r.q[i] = r.c.createElement('script')),
            n.setAttribute('src', t[0]),
            (n.onload = n.onreadystatechange = function() {
              var n = this
              ;(n.readyState && !/de|te/.test(n.readyState)) ||
                ((n.onload = n.onreadystatechange = r.n),
                (function() {
                  var n = r,
                    o = t[1]
                  ;(n.q[i] = !0), o && n.l(o), e && e(), n.s--
                })())
            }),
            r.s++,
            r.h.appendChild(n)
        }
      }
      module.exports = nbl
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }
          return function(e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })()
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(9),
        o = (function(t) {
          function e(e) {
            return void 0 === e && (e = {}), t.call(this, e) || this
          }
          return r(e, t), e
        })(i.ItemDescription)
      e.ClipItemDescription = o
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        i = n(120),
        o = n(118),
        s = n(26),
        a = n(116),
        c = n(119),
        u = n(121),
        l = n(9),
        p = (function() {
          function t(e) {
            void 0 === e && (e = {}),
              (this.blocks = []),
              (this.clips = []),
              r.defaults(e, t.defaults)
            var n = e.blocks,
              i = e.clips
            delete e.blocks, delete e.clips
            for (var o = r.keys(e), s = 0, a = o; s < a.length; s++) {
              var c = a[s]
              this[c] = e[c]
            }
            for (var u = 0, l = n || []; u < l.length; u++) {
              var p = l[u]
              this.blocks.push(t.loadBlock(p))
            }
            for (var f = 0, h = i || []; f < h.length; f++) {
              var d = h[f]
              this.clips.push(t.loadClip(d))
            }
          }
          return (
            (t.prototype.toObject = function() {
              return JSON.parse(JSON.stringify(this))
            }),
            (t.loadBlock = function(t) {
              switch (t.type) {
                case 'number':
                  return new o.NumberBlockDescription(t)
                case 'questions':
                  return new i.QuestionBlockDescription(t)
                default:
                  return null
              }
            }),
            (t.loadClip = function(e) {
              return new t.ClipItemDescription(e)
            }),
            (t.defaults = { has_formcode: !1 }),
            (t.QuestionBlockDescription = i.QuestionBlockDescription),
            (t.NumberBlockDescription = o.NumberBlockDescription),
            (t.BlockDescription = s.BlockDescription),
            (t.ClipItemDescription = a.ClipItemDescription),
            (t.NumberItemDescription = c.NumberItemDescription),
            (t.QuestionItemDescription = u.QuestionItemDescription),
            (t.ItemDescription = l.ItemDescription),
            t
          )
        })()
      e.FormDescription = p
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }
          return function(e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })()
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(26),
        o = (function(t) {
          function e(e) {
            void 0 === e && (e = {})
            var n = t.call(this, e) || this
            return (n.choices = n.choices || []), n
          }
          return (
            r(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function() {
                return this._label
              },
              set: function(t) {
                this._label = String(t)
              },
              enumerable: !0,
              configurable: !0
            }),
            e
          )
        })(i.BlockDescription)
      e.NumberBlockDescription = o
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }
          return function(e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })()
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(9),
        o = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return r(e, t), e
        })(i.ItemDescription)
      e.NumberItemDescription = o
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }
          return function(e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })()
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(26),
        o = (function(t) {
          function e(e) {
            var n = t.call(this, e) || this
            return (n.questions = n.questions || []), n
          }
          return r(e, t), e
        })(i.BlockDescription)
      e.QuestionBlockDescription = o
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }
          return function(e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })()
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(0),
        o = n(9),
        s = (function(t) {
          function e(n) {
            return (
              (n = n || {}), i.defaults(n, e.defaults), t.call(this, n) || this
            )
          }
          return (
            r(e, t),
            (e.prototype.getMultiplicityMin = function(t) {
              var e = this.multiplicity_min
              return 'object' == typeof e
                ? '' === t
                  ? i.max(e) === i.min(e)
                    ? i.max(e)
                    : null
                  : e[t || 0] || 1
                : e || 1
            }),
            (e.prototype.getMultiplicityMax = function(t) {
              var e = this.multiplicity_max
              return 'object' == typeof e
                ? '' === t
                  ? i.max(e) === i.min(e)
                    ? i.max(e)
                    : null
                  : e[t || 0] || 1
                : e || 1
            }),
            (e.defaults = { multiplicity_max: 1, multiplicity_min: 1 }),
            e
          )
        })(o.ItemDescription)
      e.QuestionItemDescription = s
    },
    function(t, e, n) {
      'use strict'
      var r = {
        type: String,
        enum: ['exam', 'answerkey', 'score', 'credit', 'custom', 'tabular']
      }
      t.exports = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        i = ['type', 'form_area', 'label', 'value', 'validate', 'choices'],
        o = (function() {
          function t(e) {
            void 0 === e && (e = {}),
              (this.choices = this.choices || []),
              (this.choicesArr = this.choicesArr || null),
              r.defaults(e, t.defaults)
            for (var n = r.keys(e), i = 0, o = n; i < o.length; i++) {
              var s = o[i]
              this[s] = e[s]
            }
          }
          return (
            Object.defineProperty(t.prototype, 'label', {
              get: function() {
                return this._label
              },
              set: function(t) {
                this._label = String(t)
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.toObject = function() {
              for (var t = {}, e = 0, n = i; e < n.length; e++) {
                var o = n[e]
                t[o] = r.clone(this[o])
              }
              return t
            }),
            (t.defaults = { bad_multiplicity: !1 }),
            t
          )
        })()
      e.InterpretedItem = o
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        return t.validate
      }
      function i(t) {
        return t.wantMoreCopies
      }
      function o(t) {
        return s(this, void 0, void 0, function() {
          return a(this, function(e) {
            return [
              2,
              new Promise(function(e, n) {
                var r = new Image()
                ;(r.onload = function() {
                  return e(r)
                }),
                  (r.src = t)
              })
            ]
          })
        })
      }
      var s =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        a =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var c = n(0),
        u = n(123),
        l = ['GradeCam ID', 'Version'],
        p = (function() {
          function t(e) {
            void 0 === e && (e = {}),
              (this.items = this.items || []),
              c.defaults(e, t.defaults)
            for (var n = c.keys(e), r = 0, i = n; r < i.length; r++) {
              var o = i[r]
              this[o] = e[o]
            }
          }
          return (
            (t.prototype.getItem = function(t) {
              return c.find(this.items, function(e) {
                return e.label === t
              })
            }),
            (t.prototype.needsValidation = function() {
              return c.any(this.items, r)
            }),
            (t.prototype.wantsMoreClipCopies = function() {
              return c.any(this.items, i)
            }),
            (t.prototype.getUnvalidatedItems = function() {
              return c.filter(this.items, r)
            }),
            (t.prototype.getAnswerItems = function() {
              return c.filter(this.items, function(t) {
                return c.indexOf(l, t.label) < 0
              })
            }),
            (t.prototype.getScanOutput = function(t, e) {
              return s(this, void 0, void 0, function() {
                var n,
                  r,
                  i,
                  s,
                  u,
                  l,
                  p,
                  f,
                  h,
                  d,
                  A,
                  g,
                  m,
                  v,
                  y,
                  b,
                  w,
                  _,
                  S,
                  k,
                  x,
                  C,
                  O,
                  I,
                  E,
                  x,
                  M,
                  R,
                  D,
                  B,
                  V,
                  T,
                  F,
                  N,
                  j,
                  P,
                  U,
                  L,
                  G,
                  Q,
                  H,
                  q,
                  f,
                  p,
                  z,
                  J,
                  A,
                  g,
                  m
                return a(this, function(a) {
                  switch (a.label) {
                    case 0:
                      if (this.needsValidation())
                        throw new Error('Not all answers were validated!')
                      if (
                        ((n = 0.15),
                        (r = 1 + 2 * n),
                        (i = []),
                        (s = null),
                        (l = this.fc_data),
                        1 != e)
                      )
                        return [3, 7]
                      for (
                        p = [], f = {}, h = 0, d = this.items;
                        h < d.length;
                        h++
                      )
                        switch (
                          ((A = d[h]), (g = A.form_area), (m = A.value), g)
                        ) {
                          case 'ids':
                            i.push(m)
                            break
                          case 'version':
                            s = m
                            break
                          case 'main':
                            'Score' === A.label && (u = m),
                              p.push({
                                value: m,
                                area: g,
                                choices: A.choices,
                                type: A.type
                              })
                            break
                          default:
                            p.push({ value: m, type: A.type })
                        }
                      if (
                        ((f.scan_type = t),
                        p.length && (f.answers = p),
                        1 == i.length && (f.gradecam_id = i[0]),
                        i.length && (f.ids = i),
                        u && (f.score = u),
                        s && (f.exam_version = s),
                        !l)
                      )
                        return [3, 6]
                      if (2 != l.desc_v || 'tabular' != l.type || !l.rows)
                        return [3, 5]
                      ;(f.columns = this.items),
                        delete f.answers,
                        (v = []),
                        (y = 0),
                        (b = f.columns),
                        (a.label = 1)
                    case 1:
                      return y < b.length
                        ? ((w = b[y]),
                          (_ = document.createElement('canvas')),
                          (S = _.getContext('2d')),
                          [4, o(w.value)])
                        : [3, 4]
                    case 2:
                      ;(k = a.sent()),
                        (_.width = k.width),
                        (_.height = k.height),
                        S.drawImage(k, 0, 0),
                        v.push(_),
                        (a.label = 3)
                    case 3:
                      return y++, [3, 1]
                    case 4:
                      for (
                        f.scan_type = 'tabular',
                          f.rows = [],
                          f.rowOffset = l.rowOffset,
                          x = 0;
                        x < l.form_description.length;
                        x++
                      )
                        f.columns[x].label = l.form_description[x].label
                      for (
                        C = document.createElement('canvas'),
                          O = C.getContext('2d'),
                          I = 0;
                        I < l.rowCount;
                        I++
                      ) {
                        for (
                          E = {
                            columns: [],
                            text: l.rows[l.rowOffset + I].text,
                            data: l.rows[l.rowOffset + I].data
                          },
                            x = 0;
                          x < v.length;
                          x++
                        )
                          (M = { type: 'clip' }),
                            (R = (v[x].height / r) * n),
                            (D = (v[x].height - 2 * R) / l.rowCount),
                            (B = n * D),
                            (V = l.rowCount),
                            (T = I / V),
                            (F = v[x].height - 2 * R),
                            (N = f.columns[x].skew),
                            (j = (2 * F * N) / (N + 1)),
                            (P = F - j),
                            (U = j * T + P * T * T),
                            (L =
                              j * (T + 1 / V) + P * (T + 1 / V) * (T + 1 / V)),
                            (G = v[x].width),
                            (Q = L - U + 2 * B),
                            (H = R + U),
                            (q = H - B),
                            (C.width = G),
                            (C.height = Q),
                            O.drawImage(v[x], 0, q, G, Q, 0, 0, G, Q),
                            (M.value = C.toDataURL()),
                            E.columns.push(M)
                        f.rows.push(E)
                      }
                      a.label = 5
                    case 5:
                      ;(f.data = {}),
                        c.extend(f.data, l.batch_data),
                        c.extend(f.data, l.instance_data),
                        (f.page = l.page),
                        (f.pageCount = l.pageCount),
                        (f.startOffset = l.startOffset),
                        (f.form_id = l.form_id),
                        l.exam_version && (f.exam_version = l.exam_version),
                        (a.label = 6)
                    case 6:
                      return [2, f]
                    case 7:
                      for (
                        f = {}, p = [], z = 0, J = this.items;
                        z < J.length;
                        z++
                      )
                        switch (
                          ((A = J[z]), (g = A.form_area), (m = A.value), g)
                        ) {
                          case 'ids':
                            i.push(m)
                            break
                          case 'version':
                            s = m
                            break
                          case 'main':
                            'Score' === A.label && (u = m), p.push(m)
                        }
                      return (
                        (f.scan_type = t),
                        p.length && (f.answers = p),
                        1 == i.length && (f.gradecam_id = i[0]),
                        i.length && (f.ids = i),
                        u && (f.score = u),
                        s && (f.exam_version = s),
                        l &&
                          (c.extend(f, l.batch_data),
                          c.extend(f, l.instance_data),
                          (f.data = {}),
                          c.extend(f.data, l.batch_data),
                          c.extend(f.data, l.instance_data),
                          (f.page = l.page),
                          (f.pageCount = l.pageCount),
                          (f.startOffset = l.startOffset),
                          l.exam_version && (f.exam_version = l.exam_version)),
                        [2, f]
                      )
                  }
                })
              })
            }),
            (t.InterpretedItem = u.InterpretedItem),
            (t.defaults = { bad_form: !1, bad_form_version: !1 }),
            t
          )
        })()
      e.InterpretedScan = p
    },
    function(t, e, n) {
      'use strict'
      var r = n(124)
      t.exports = r.InterpretedScan
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        i = (function() {
          function t(t) {
            ;(this.intensities = []), (this.intensities_alt1 = [])
            for (var e = 0, n = r.keys(t || {}); e < n.length; e++) {
              var i = n[e]
              this[i] = t[i]
            }
          }
          return (
            (t.prototype._getRowIntensitiesWith = function(t, e) {
              var n = this.cols * t,
                r = this[e]
              return r ? r.slice(n, n + this.cols) : null
            }),
            (t.prototype.getRowIntensities = function(t) {
              var e = this._getRowIntensitiesWith(t, 'intensities'),
                n = this._getRowIntensitiesWith(t, 'intensities_alt1'),
                r = []
              return e && r.push(e), n && r.push(n), r
            }),
            (t.prototype._getColIntensitiesWith = function(t, e) {
              var n = this[e]
              if (!n || !n.length) return null
              for (
                var r = n, i = this.rows, o = this.cols, s = [], a = 0;
                a < i;
                a++
              )
                s.push(r[t + a * o])
              return s
            }),
            (t.prototype.getColIntensities = function(t) {
              var e = this._getColIntensitiesWith(t, 'intensities'),
                n = this._getColIntensitiesWith(t, 'intensities_alt1'),
                r = []
              return e && r.push(e), n && r.push(n), r
            }),
            (t.prototype._getNumberIntensitiesWith = function(t) {
              for (var e = [], n = 0; n < this.cols; n++) {
                var r = this._getColIntensitiesWith(n, t)
                if (!r) return null
                e.push(r)
              }
              return e
            }),
            (t.prototype.getNumberIntensities = function() {
              var t = [],
                e = this._getNumberIntensitiesWith('intensities'),
                n = this._getNumberIntensitiesWith('intensities_alt1')
              return e && t.push(e), n && t.push(n), t
            }),
            (t.prototype.print = function() {
              console.dir({
                row: this.row,
                col: this.col,
                rows: this.rows,
                cols: this.cols
              })
            }),
            t
          )
        })()
      e.Block = i
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        i = (function() {
          function t(t) {
            for (var e = 0, n = r.keys(t || {}); e < n.length; e++) {
              var i = n[e]
              this[i] = t[i]
            }
          }
          return (
            (t.calcWidth = function(t) {
              var e = t.br.global_y - t.bl.global_y,
                n = t.br.global_x - t.bl.global_x
              return Math.sqrt(e * e + n * n)
            }),
            (t.calcHeight = function(t) {
              var e = t.tl.global_y - t.bl.global_y,
                n = t.tl.global_x - t.bl.global_x
              return Math.sqrt(e * e + n * n)
            }),
            (t.calcSkew = function(t, e) {
              if (2 != t.length) return 1
              var n = t[0].barcode.l.global_x - t[0].barcode.r.global_x,
                r = t[0].barcode.l.global_y - t[0].barcode.r.global_y,
                i = Math.sqrt(n * n + r * r),
                o = t[1].barcode.l.global_x - t[1].barcode.r.global_x,
                s = t[1].barcode.l.global_y - t[1].barcode.r.global_y
              return i / (Math.sqrt(o * o + s * s) + 1e-7)
            }),
            t
          )
        })()
      e.Clip = i
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        i = n(126),
        o = n(127),
        s = (function() {
          function t(t) {
            ;(this.blocks = []), (this.clips = []), (this.fc_blocks = [])
            for (var e = r.keys(t || {}), n = 0, i = e; n < i.length; n++) {
              var o = i[n]
              this[o] = t[o]
            }
          }
          return (
            (t.prototype.getBlock = function(t, e) {
              return r.find(this.blocks, function(n) {
                return n.row === t && n.col === e
              })
            }),
            (t.prototype.print = function() {
              for (var t = 0, e = this.blocks; t < e.length; t++) {
                e[t].print()
              }
            }),
            (t.prototype.hash = function() {
              return r.reduce(
                this.blocks,
                function(t, e) {
                  return t + 100 * e.row + 1e3 * e.col + e.rows + 10 * e.cols
                },
                0
              )
            }),
            (t.prototype.hasFormData = function() {
              return (
                !!this.barcodes ||
                !(!this.fc_blocks || 1 != this.fc_blocks.length)
              )
            }),
            (t.prototype._transformIntensitiesWith = function(t, e) {}),
            (t.prototype._normalizeIntensitiesWith = function(t, e) {
              this._transformIntensitiesWith(t, function() {
                return null
              })
            }),
            (t.prototype.normalizeIntensities = function(t) {
              this._normalizeIntensitiesWith('intensities', t)
            }),
            (t.loadV2 = function(e) {
              var n = new t({ blocks: [], clips: [] }),
                i = e.slice(),
                s = 0,
                a = r.filter(i, function(t) {
                  return 'barcode' == t.type
                }),
                c = r.filter(i, function(t) {
                  return 'barcode' != t.type && 'meta' != t.type
                })
              2 == a.length &&
                ((a = r.sortBy(a, function(t) {
                  return t.top
                })),
                (n.barcodes = a[0].barcode.barcode + a[1].barcode.barcode))
              for (var u = this; c.length > 0; )
                !(function() {
                  var t = r.min(c, function(t) {
                      return t.top
                    }),
                    e = r.filter(c, function(e) {
                      return e.top <= t.bottom && e.bottom >= t.top
                    })
                  ;(c = r.difference(c, e)),
                    (e = r.sortBy(e, function(t) {
                      return t.left
                    }))
                  for (var i = 0, l = e; i < l.length; i++) {
                    var p = l[i]
                    if ('rect' == p.type && p.gcip) u.loadRect(n, p.gcip, s)
                    else if ('clip' == p.type && p.image) {
                      var f = new o.Clip({
                        image: p.image,
                        zone: s,
                        blur: p.clip.blur,
                        width: o.Clip.calcWidth(p.clip),
                        height: o.Clip.calcHeight(p.clip),
                        skew: o.Clip.calcSkew(a, p.clip)
                      })
                      if (
                        2 == a.length &&
                        (p.top < a[0].top || p.top > a[1].top)
                      )
                        continue
                      n.clips.push(f)
                    }
                    s++
                  }
                })()
              return n
            }),
            (t.load = function(e) {
              var n = new t({ blocks: [] })
              return this.loadRect(n, e, 0), n
            }),
            (t.loadRect = function(t, e, n) {
              var o = []
              if (e.length) {
                r.each(e, function(t) {
                  o.push(new i.Block(t))
                })
                var s = r.max(o, function(t) {
                  return t.top
                })
                15 === s.cols && (t.fc_blocks.push(s), (o = r.without(o, s)))
                for (var a = 0; o.length > 0; ) {
                  var c = (function() {
                    var e = r.min(o, function(t) {
                      return t.left
                    })
                    if (e.left > e.right)
                      return (o = r.without(o, e)), { value: void 0 }
                    var i = (e.right - e.left) / e.cols,
                      s = e.left,
                      c = r.select(o, function(t) {
                        return t.left < s + 2 * i
                      })
                    ;(o = r.difference(o, c)),
                      (c = r.sortBy(c, function(t) {
                        return t.top
                      }))
                    for (var u = 0, l = 0, p = c; l < p.length; l++) {
                      var f = p[l]
                      ;(f.row = u),
                        (f.col = a),
                        (f.zone = n),
                        t.blocks.push(f),
                        u++
                    }
                    a++
                  })()
                  if ('object' == typeof c) return c.value
                }
                return a
              }
            }),
            (t.Block = i.Block),
            (t.Clip = o.Clip),
            t
          )
        })()
      e.ScanBlocks = s
    },
    function(t, e, n) {
      'use strict'
      var r = n(128)
      t.exports = r.ScanBlocks
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }
          return function(e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })()
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(0),
        o = n(11),
        s = n(10),
        a = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return (
              (r.choices = r.choices || []),
              i.defaults(r, e.defaults, s.ClipItemDescription.defaults),
              r
            )
          }
          return (
            r(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function() {
                return this._label
              },
              set: function(t) {
                this._label = String(t)
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.defaults = {}),
            e
          )
        })(o.Item)
      e.ClipItem = a
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }
          return function(e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })()
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(0),
        o = n(11),
        s = n(10),
        a = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return (
              (r.choices = r.choices || []),
              (r.choicesArr = r.choicesArr || null),
              i.defaults(r, e.defaults, s.NumberItemDescription.defaults),
              r
            )
          }
          return (
            r(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function() {
                return this._label
              },
              set: function(t) {
                this._label = String(t)
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.getIntensities = function(t) {
              return this.intensities[t || 0]
            }),
            (e.prototype.getIntensityList = function(t) {
              for (
                var e = [], n = 0, r = this.getIntensities(t);
                n < r.length;
                n++
              ) {
                var i = r[n]
                e = e.concat(i)
              }
              return e
            }),
            (e.prototype.getIntensityMethods = function() {
              return i.range(this.intensities.length)
            }),
            (e.defaults = {}),
            e
          )
        })(o.Item)
      e.NumberItem = a
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }
          return function(e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })()
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(0),
        o = n(52),
        s = n(11),
        a = n(10),
        c = (function(t) {
          function e(n) {
            void 0 === n && (n = {})
            var r = t.call(this, n) || this
            return (
              (r.choices = r.choices || []),
              (r.getMultiplicityMin =
                a.QuestionItemDescription.prototype.getMultiplicityMin),
              (r.getMultiplicityMax =
                a.QuestionItemDescription.prototype.getMultiplicityMax),
              i.defaults(r, e.defaults, a.QuestionItemDescription.defaults),
              r
            )
          }
          return (
            r(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function() {
                return this._label
              },
              set: function(t) {
                this._label = String(t)
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.getIntensities = function(t) {
              return this.intensities[t || 0]
            }),
            (e.prototype.getIntensityList = function(t) {
              return this.getIntensities(t)
            }),
            (e.prototype.getIntensityMethods = function() {
              return i.range(this.intensities.length)
            }),
            (e.prototype.getDarkestBubble = function() {
              var t = o.getMaxIndex(this.intensities[0])
              return this.choices[t]
            }),
            (e.defaults = {}),
            e
          )
        })(s.Item)
      e.QuestionItem = c
    },
    function(t, e, n) {
      'use strict'
      var r = n(52)
      t.exports = r.StructuredScan
    },
    function(t, e, n) {
      'use strict'
      function r() {
        return l.ios ? 'ios' : l.android ? 'android' : 'unknown/unsupported'
      }
      var i =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        s = n(0),
        a = n(86),
        c = n(27),
        u = n(12),
        l = n(24),
        p = (function() {
          function t() {
            ;(this.loadPref = null), (this.mobileUrls = {})
          }
          return (
            (t.prototype.getName = function() {
              return 'mobile'
            }),
            (t.prototype.isSupported = function() {
              var t = r()
              return this.isInstalled() || !!this.mobileUrls[t]
            }),
            (t.prototype.isInstalled = function() {
              return !!window.gcmobilesdk
            }),
            (t.prototype.getInstallURL = function() {
              var t = r()
              return this.mobileUrls[t]
            }),
            (t.prototype.makeInstallUrl = function() {
              var t = r()
              return this.mobileUrls[t]
            }),
            (t.prototype.setOption = function(t, e) {
              var n = this
              'url' == t &&
                s.each(e, function(t, e) {
                  n.mobileUrls[e] = t
                })
            }),
            (t.prototype.instantiate = function(t) {
              return i(this, void 0, void 0, function() {
                var e, n
                return o(this, function(r) {
                  switch (r.label) {
                    case 0:
                      ;(e = new a(t)), (r.label = 1)
                    case 1:
                      return (
                        r.trys.push([1, 3, , 4]), [4, c(window.gcmobilesdk)]
                      )
                    case 2:
                      return r.sent(), [2, e]
                    case 3:
                      throw ((n = r.sent()),
                      new u.UnauthenticatedError('Could not contact server'))
                    case 4:
                      return [2]
                  }
                })
              })
            }),
            (t.prototype.doesInstallRequireRestart = function() {
              return !0
            }),
            (t.prototype.waitForInstall = function() {
              throw new u.UnsupportedError('Unsupported')
            }),
            (t.prototype.supportsTyper = function() {
              return !1
            }),
            (t.prototype.isTyperInstalled = function() {
              return !1
            }),
            (t.prototype.cancelLoad = function() {}),
            t
          )
        })(),
        f = new p()
      t.exports = f
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        var e = s.filter(p, function(t) {
            return t.isSupported()
          }),
          n = s.indexBy(e, function(t) {
            return t.getName()
          })
        return s.map(t, function(t) {
          var e = t.split('-'),
            r = n[e[0]]
          return r && (r.loadPref = e[1]), r
        })
      }
      var i =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        s = n(0),
        a = n(134),
        c = n(137),
        u = n(136),
        l = n(12),
        p = [c, a, u],
        f = ['mobile-prompt', 'plugin-always', 'noplugin'],
        h = (function() {
          function t(t) {
            ;(this.el = t), (this.activeModuleList = []), this.setModuleOrder(f)
          }
          return (
            (t.prototype.setModuleOrder = function(t) {
              ;(this.activeModuleList = r(t)),
                (this.activeModuleList = s.filter(
                  this.activeModuleList,
                  function(t) {
                    return !!t
                  }
                ))
            }),
            (t.prototype.setModuleOption = function(t, e, n) {
              var r = s.find(this.activeModuleList, function(e) {
                return e.getName() == t
              })
              r && r.setOption && r.setOption(e, n)
            }),
            (t.prototype.instantiate = function(t) {
              var e = s.toArray(this.activeModuleList)
              return (
                (e = s.filter(e, function(e) {
                  if (e.supports) {
                    return s.all(t.reqFeatures, function(t) {
                      return e.supports(t)
                    })
                  }
                  return !0
                })),
                this.instantiateFromList(e, t)
              )
            }),
            (t.prototype.instantiateFromList = function(t, e) {
              return i(this, void 0, void 0, function() {
                function n(t, e) {
                  return (
                    (c.module = t),
                    'always' != t.loadPref && (c.fallbacks = e),
                    new l.NeedsInstallError(c)
                  )
                }
                var r,
                  a,
                  c,
                  u,
                  p,
                  f,
                  h,
                  d,
                  A,
                  g,
                  m,
                  v = this
                return o(this, function(y) {
                  for (
                    r = e.reqFeatures,
                      a = e.minVersion,
                      c = {
                        installType: 'install',
                        reason: 'not present',
                        module: null,
                        fallbacks: null
                      },
                      u = function(t) {
                        if (r && r.length) {
                          if (
                            !!s.any(r, function(e) {
                              return !t.supports(e)
                            })
                          )
                            return (
                              (c.installType = 'upgrade'),
                              (c.reason = 'features'),
                              !1
                            )
                        }
                        return (
                          !!t.isAtLeastVersion(a) ||
                          ((c.installType = 'upgrade'),
                          (c.reason = 'version'),
                          !1)
                        )
                      },
                      p = s.toArray(t),
                      f = null,
                      h = 0,
                      d = p;
                    h < d.length;
                    h++
                  )
                    (A = d[h]) &&
                      A.setDownloadsUrl &&
                      A.setDownloadsUrl(e.downloadsUrl)
                  return (
                    (g = function() {
                      return i(v, void 0, void 0, function() {
                        var r, i, a, h
                        return o(this, function(o) {
                          switch (o.label) {
                            case 0:
                              if (
                                ((r = p.shift()),
                                f || (f = r),
                                r || !t.forceInstall)
                              )
                                return [3, 1]
                              throw ((c.installType = 'unsupported'),
                              (c.reason = 'unsupported'),
                              new l.UnsupportedError(
                                'Not supported on this system'
                              ))
                            case 1:
                              return r || t.forceInstall
                                ? [3, 2]
                                : ((i = s.toArray(t)),
                                  (i.forceInstall = !0),
                                  [2, this.instantiateFromList(i, e)])
                            case 2:
                              if (!r.isInstalled()) return [3, 7]
                              o.label = 3
                            case 3:
                              return (
                                o.trys.push([3, 5, , 6]),
                                [4, r.instantiate(this.el, e, u)]
                              )
                            case 4:
                              return (a = o.sent()), [2, a]
                            case 5:
                              if (
                                ((h = o.sent()), r.loadPref || p.forceInstall)
                              )
                                throw n(r, p)
                              return [2, g()]
                            case 6:
                              return [3, 8]
                            case 7:
                              if (r.loadPref) throw n(r, p)
                              return [2, g()]
                            case 8:
                              return [2]
                          }
                        })
                      })
                    }),
                    (m = g()),
                    [2, m]
                  )
                })
              })
            }),
            (t.isInstalled = function(t) {
              t = t || f
              var e = r(t),
                n = !1,
                i = s.any(e, function(t) {
                  return (
                    !!t &&
                    ('always' != t.loadPref || t.isInstalled() || (n = !0),
                    t.isInstalled())
                  )
                })
              return !(n || !i)
            }),
            (t.getTyperOptions = function(t, e, n) {
              void 0 === t && (t = null), (t = t || f)
              for (var i = r(t), o = [], a = 0, c = i; a < c.length; a++) {
                var u = c[a]
                !(function(t) {
                  if (!t || !t.supportsTyper()) return 'continue'
                  var r = {
                    module: t.getName(),
                    installed: !!t.isTyperInstalled(),
                    url: t.makeInstallUrl(e, n),
                    makeUrl: function(n) {
                      return t.makeInstallUrl(e, n)
                    },
                    waitForInstall: s.bind(t.waitForInstall, t)
                  }
                  o.push(r)
                })(u)
              }
              return o
            }),
            t
          )
        })()
      t.exports = h
    },
    function(t, e, n) {
      'use strict'
      var r = n(141),
        i = n(40),
        o = n(5),
        s = n(1),
        a = (function() {
          function t() {
            this.loadPref = null
          }
          return (
            (t.prototype.getName = function() {
              return 'noplugin'
            }),
            (t.prototype.isSupported = function() {
              return o.userMedia && o.reqAnimFrame && o.webWorker
            }),
            (t.prototype.isInstalled = function() {
              return !0
            }),
            (t.prototype.makeInstallUrl = function(t, e) {
              var n = this.downloadsUrl
              if (t || e) {
                var r = []
                t && r.push('v=' + t),
                  e && r.push('url=' + encodeURIComponent(e)),
                  (n = n + '?' + r.join('&'))
              }
              return n
            }),
            (t.prototype.setDownloadsUrl = function(t) {
              this.downloadsUrl = t
            }),
            (t.prototype.cancelLoad = function() {}),
            (t.prototype.instantiate = function(t) {
              var e = r.create(t)
              return s.PromiseAll([e]).then(function(t) {
                var e = t[0],
                  n = e[0],
                  r = e[1]
                return new i(n, r)
              })
            }),
            (t.prototype.doesInstallRequireRestart = function() {
              return !0
            }),
            (t.prototype.waitForInstall = function() {
              var t = s.newDeferred()
              return (
                o.plugin2.waitForPlugin(function() {
                  return t.resolve(!0)
                }),
                t.promise
              )
            }),
            (t.prototype.supportsTyper = function() {
              return o.plugin2.supported
            }),
            (t.prototype.isTyperInstalled = function() {
              return !!o.plugin2.installed
            }),
            (t.prototype.supports = function(t) {
              return r.supports(t)
            }),
            t
          )
        })(),
        c = new a()
      t.exports = c
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        i =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        o = n(27),
        s = n(40),
        a = n(12),
        c = n(24),
        u = n(138),
        l = (function() {
          function t() {
            this.loadPref = null
          }
          return (
            (t.prototype.getName = function() {
              return 'plugin'
            }),
            (t.prototype.isSupported = function() {
              return (
                !(c.pluginsDisabled || c.mobile || c.cros) ||
                !!this.isInstalled()
              )
            }),
            (t.prototype.isInstalled = function() {
              return !!u.isPluginInstalled()
            }),
            (t.prototype.makeInstallUrl = function(t, e) {
              var n = this.downloadsUrl
              if (t || e) {
                var r = []
                t && r.push('v=' + t),
                  e && r.push('url=' + encodeURIComponent(e)),
                  (n = n + '?' + r.join('&'))
              }
              return n
            }),
            (t.prototype.setDownloadsUrl = function(t) {
              this.downloadsUrl = t
            }),
            (t.prototype.instantiate = function(t, e, n) {
              return r(this, void 0, void 0, function() {
                var e, r, c, l, p, f, h
                return i(this, function(i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (e = { gcip_v2: !0 }),
                        [4, u.injectPlugin(t, 'gcpluginid', e)]
                      )
                    case 1:
                      if (
                        ((r = i.sent()),
                        (c = r[0]),
                        (l = r[1]),
                        (p = new s(c, l)),
                        !(f = n(p)))
                      )
                        throw new Error('Invalid version')
                      i.label = 2
                    case 2:
                      return i.trys.push([2, 4, , 5]), [4, o(c)]
                    case 3:
                      return i.sent(), [2, p]
                    case 4:
                      throw ((h = i.sent()),
                      new a.UnauthenticatedError('Could not contact server'))
                    case 5:
                      return [2]
                  }
                })
              })
            }),
            (t.prototype.supportsTyper = function() {
              return !0
            }),
            (t.prototype.isTyperInstalled = function() {
              return !!this.isInstalled()
            }),
            (t.prototype.doesInstallRequireRestart = function() {
              return !1
            }),
            (t.prototype.cancelLoad = function() {
              u.cancelWait()
            }),
            (t.prototype.waitForInstall = function() {
              return u.waitForInstall()
            }),
            t
          )
        })(),
        p = new l()
      t.exports = p
    },
    function(t, e, n) {
      'use strict'
      function r() {
        var t = s.GCPlugin.activeXName,
          e = !1
        try {
          e = new ActiveXObject(t)
          var n = !1
          if (e)
            try {
              n = e.getVersionMajor()
            } catch (t) {
              n = !0
            }
          return n
        } catch (t) {}
        if (!navigator.plugins || !navigator.plugins.refresh) return !1
        navigator.plugins.refresh(!1)
        var r = s.GCPlugin.name
        if (void 0 !== navigator.plugins[r]) {
          var i = /([0-9.]+)\.dll/,
            o = navigator.plugins[r].filename,
            a = i.exec(o)
          return null === a || a[1]
        }
        return !1
      }
      var i = n(0),
        o = n(1),
        s = {
          GCPlugin: {
            name: 'GCPlugin',
            mimeType: 'application/x-gradecam',
            activeXName: 'GradeCam.GCPlugin',
            guid: 'c6bdb9cb-5921-5a0d-aced-d5f0ebcd92a1',
            installURL: { win: '_installer.msi' }
          }
        },
        a = 0,
        c = -1,
        u = null,
        l = (function() {
          function t() {
            ;(this.pollInterval = 500),
              (this.addListener = document.attachEvent
                ? function(t, e, n) {
                    t.attachEvent('on' + e, n)
                  }
                : function(t, e, n) {
                    t.addEventListener(e, n, !1)
                  })
          }
          return (
            (t.prototype.isPluginInstalled = function() {
              return window.gcmobilesdk ? 'mobile' : s.GCPlugin ? r() : null
            }),
            (t.prototype.cancelWait = function() {
              c > -1 && clearTimeout(c), (c = -1), u && u.resolve()
            }),
            (t.prototype.waitForInstall = function() {
              var t = this
              if (u) return u.promise
              u = o.newDeferred()
              var e = function() {
                t.isPluginInstalled()
                  ? ((c = -1), u.resolve(!!t.isPluginInstalled()))
                  : (c = setTimeout(function() {
                      e()
                    }, t.pollInterval))
              }
              return e(), u.promise
            }),
            (t.prototype.abortWait = function() {
              ;-1 != c && (clearInterval(c), (c = -1))
            }),
            (t.prototype.injectPlugin = function(t, e, n) {
              var r = o.newDeferred(),
                c = s.GCPlugin
              ;(n = n || {}), (n.onload = '__pluginCB' + a++)
              var u = i.once(function(t) {
                var n = document.getElementById(e)
                t || (t = n), r.resolve([t, n])
              })
              window.gradecamPluginInit = window[n.onload] = u
              var l =
                '<object id="' +
                e +
                '" type="' +
                c.mimeType +
                '" style="width: 1px; height: 1px;">'
              return (
                i(n).each(function(t, e) {
                  l += '<param name="' + e + '" value="' + n[e] + '" />'
                }),
                (l += '</object>'),
                (t.innerHTML = l),
                (t.style.backgroundColor = '#000000'),
                r.promise
              )
            }),
            (t.prototype.addListener = function(t, e, n) {}),
            t
          )
        })(),
        p = new l()
      t.exports = p
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        i =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        o = n(0),
        s = n(3),
        a = n(13),
        c = (function() {
          function t(t) {
            ;(this.canvas = t),
              (this.evtBus = new s.ClassTS()),
              (this.context = this.canvas.getContext('2d')),
              (this.yellowRects = []),
              (this.greenRects = []),
              (this.high_res = !1),
              (this.high_res_timeout = -1),
              (this.bind = o.bind(this.evtBus.bind, this.evtBus)),
              (this.unbind = o.bind(this.evtBus.unbind, this.evtBus)),
              this.clearVideo()
          }
          return (
            (t.prototype._drawRects = function(t, e, n, r) {
              void 0 === r && (r = a.Rotate.None)
              var i = this.canvas,
                s = this.context,
                c = i.width,
                u = i.height,
                l = function(t) {
                  return t * n
                },
                p = function(t) {
                  return t * n
                }
              o.each(t, function(t) {
                s.beginPath(),
                  (s.lineWidth = ((c * u) / 48e4) * 3),
                  (s.strokeStyle = e),
                  s.moveTo(l(t.tl.x), p(t.tl.y)),
                  s.lineTo(l(t.bl.x), p(t.bl.y)),
                  s.lineTo(l(t.br.x), p(t.br.y)),
                  'clip' != t.type &&
                    (s.lineTo(l(t.tr.x), p(t.tr.y)),
                    s.lineTo(l(t.tl.x), p(t.tl.y))),
                  s.stroke()
              })
            }),
            (t.prototype.enableHighRes = function(t) {
              var e = this
              return (
                (this.high_res = !0),
                this.high_res_timeout > 0 &&
                  clearTimeout(this.high_res_timeout),
                (this.high_res_timeout = setTimeout(function() {
                  return e.reset_high_res()
                }, t)),
                !0
              )
            }),
            (t.prototype.isHighRes = function() {
              return this.high_res
            }),
            (t.prototype.reset_high_res = function() {
              ;(this.high_res = !1), (this.high_res_timeout = -1)
            }),
            (t.prototype.calculateScaleFactor = function(t, e) {
              var n = Math.sqrt(48e4 / (t * e)),
                r = Math.sqrt(2073600 / (t * e)),
                i = n
              return (this.high_res || i > 1) && (i = 1), r < i && (i = r), i
            }),
            (t.prototype.setSuspectedRects = function(t) {
              this.yellowRects = t
            }),
            (t.prototype.setConfirmedRects = function(t) {
              this.greenRects = t
            }),
            (t.prototype.drawVideo = function(t, e) {
              void 0 === e && (e = a.Rotate.None)
              var n = this.context,
                r = this.canvas
              n.setTransform(1, 0, 0, 1, 0, 0)
              var i = t.videoWidth || t.naturalWidth,
                o = t.videoHeight || t.naturalHeight,
                s = this.calculateScaleFactor(i, o)
              ;(i = Math.floor(i * s)),
                (o = Math.floor(o * s)),
                (r.width = i),
                (r.height = o)
              var c = !1,
                u = Math.PI
              switch (e) {
                case a.Rotate.Left90:
                  ;(u *= -0.5), (c = !0)
                  break
                case a.Rotate.Right90:
                  ;(u *= 0.5), (c = !0)
                  break
                case a.Rotate.Full180:
                  u *= 1
                  break
                case a.Rotate.None:
                default:
                  u *= 0
              }
              return (
                c
                  ? ((r.height = i), (r.width = o), n.translate(o / 2, i / 2))
                  : n.translate(i / 2, o / 2),
                n.rotate(u),
                c
                  ? (n.drawImage(t, -i / 2, -o / 2, i, o),
                    n.rotate(-u),
                    n.translate(-o / 2, -i / 2))
                  : (n.drawImage(t, -i / 2, -o / 2, i, o),
                    n.rotate(-u),
                    n.translate(-i / 2, -o / 2)),
                this.evtBus.trigger('cameraVisible', !0),
                c ? { w: o, h: i } : { w: i, h: o }
              )
            }),
            (t.prototype.drawImage = function(t) {
              var e = this.context,
                n = this.canvas
              ;(n.width = t.width),
                (n.height = t.height),
                e.drawImage(t, 0, 0, t.width, t.height),
                this.evtBus.trigger('cameraVisible', !0)
            }),
            (t.prototype.drawRects = function(t) {
              this._drawRects(this.yellowRects, 'yellow', 4, t),
                this._drawRects(this.greenRects, 'green', 1, t)
            }),
            (t.prototype.clearRects = function() {
              ;(this.yellowRects = []), (this.greenRects = [])
            }),
            (t.prototype.clearVideo = function() {
              var t = this.context,
                e = this.canvas
              t.beginPath(),
                (t.fillStyle = 'black'),
                t.rect(0, 0, e.width, e.height),
                t.fill(),
                this.evtBus.trigger('cameraVisible', !1)
            }),
            (t.prototype.getVideoPixels = function() {
              return this.context.getImageData(
                0,
                0,
                this.canvas.width,
                this.canvas.height
              )
            }),
            (t.prototype.getJPEGImage = function() {
              var t = this.canvas.toDataURL('image/jpeg')
              return 5 != t.indexOf('image/jpeg')
                ? null
                : t.substr(t.indexOf(',') + 1)
            }),
            (t.create = function(e) {
              return r(this, void 0, void 0, function() {
                return i(this, function(n) {
                  return [2, new t(e)]
                })
              })
            }),
            t
          )
        })()
      t.exports = c
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        i =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        o = n(27),
        s = n(2),
        a = n(1),
        c = s.get(),
        u = 1,
        l = (function() {
          function t(t) {
            var e = this
            ;(this.id = u++),
              (this.name = 'GCIPWorker #' + this.id),
              (this.logTimer = new s.LogTimer(name, s.DEBUG)),
              (this.gcipTimer = new s.LogTimer(name + ' readImage', s.DEBUG)),
              (this.rectTimer = new s.LogTimer(name + ' findRects', s.DEBUG)),
              (this.initDfd = null),
              (this.worker = null),
              (this.readyDfd = null),
              (this.intervalId = -1),
              (this.supports = {}),
              (this.lastScanDfd = null),
              (this.lastRectDfd = null),
              (this.locked = !1),
              c.debug('Creating ' + name),
              (this.worker = t())
            var n = this.worker.getReadyDfd().then(function(t) {
              return e.initWorker(t)
            })
            this.readyDfd = n.then(function() {
              return (
                c.debug('Authenticating ' + e.name),
                o(e).then(function() {
                  return (
                    e.logTimer.logNow('Authenticated in'), e.logTimer.reset(), e
                  )
                })
              )
            })
          }
          return (
            (t.prototype.initWorker = function(t) {
              var e = this
              return (
                (this.initDfd = a.newDeferred()),
                (this.intervalId = setInterval(function() {
                  return t.postMessage({ fn: 'init', message: 'init' })
                }, 100)),
                t.setHandler(function(t) {
                  return e.messageHandler(t)
                }),
                this.initDfd.promise
              )
            }),
            (t.prototype.messageHandler = function(t) {
              switch (
                (c.trace(this.name + ' received message:', t), t.message)
              ) {
                case 'version':
                  clearInterval(this.intervalId),
                    (this.version = String(t.version)),
                    (this.challenge = String(t.challenge)),
                    (this.supports = t.supports || this.supports),
                    this.logTimer.logNow('loaded in'),
                    this.logTimer.reset(),
                    c.info('Finished loading GCIPWorker #' + this.id),
                    this.initDfd.resolve(this.worker)
                  break
                case 'challenge':
                  this.challenge = String(t.challenge)
                  break
                case 'gcip':
                  this.lastScanDfd &&
                    (this.gcipTimer.logNow('readImage returned in'),
                    t.error
                      ? (this.lastScanDfd.reject(new Error(t.error)),
                        (this.lastScanDfd = null))
                      : (this.lastScanDfd.resolve([
                          String(t.scan),
                          t.rects,
                          t.extra
                        ]),
                        (this.lastScanDfd = null)),
                    (this.locked = !1))
                  break
                case 'rect':
                  this.lastRectDfd &&
                    (this.rectTimer.logNow('findRects returned in'),
                    t.error
                      ? (this.lastRectDfd.reject(new Error(t.error)),
                        (this.lastRectDfd = null))
                      : (this.lastRectDfd.resolve(t.rects),
                        (this.lastRectDfd = null)),
                    (this.locked = !1))
              }
            }),
            (t.prototype.isIdle = function() {
              return !this.locked
            }),
            (t.prototype.lock = function() {
              this.locked = !0
            }),
            (t.prototype.readImage = function(t, e, n, o) {
              return r(this, void 0, void 0, function() {
                var r
                return i(this, function(i) {
                  switch (i.label) {
                    case 0:
                      return (
                        this.lastScanDfd &&
                          c.error('lastScanDfd already defined!'),
                        (r = this.lastScanDfd || a.newDeferred()),
                        r != this.lastScanDfd && (this.lastScanDfd = r),
                        [4, this.readyDfd]
                      )
                    case 1:
                      return (
                        i.sent(),
                        this.gcipTimer.reset('Beginning GCIP'),
                        this.worker.postMessage({
                          fn: 'readImage',
                          width: t,
                          height: e,
                          buf: n.buffer,
                          opts: o
                        }),
                        [2, r.promise]
                      )
                  }
                })
              })
            }),
            (t.prototype.getRects = function(t, e, n) {
              return r(this, void 0, void 0, function() {
                return i(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return (
                        this.lastRectDfd &&
                          c.error('lastRectDfd already defined!'),
                        (this.lastRectDfd =
                          this.lastRectDfd || a.newDeferred()),
                        [4, this.readyDfd]
                      )
                    case 1:
                      return (
                        r.sent(),
                        this.rectTimer.reset('Beginning findRects'),
                        this.worker.postMessage({
                          fn: 'getRects',
                          width: t,
                          height: e,
                          buf: n.buffer
                        }),
                        [2, this.lastRectDfd.promise]
                      )
                  }
                })
              })
            }),
            (t.prototype.getChallenge = function() {
              return this.challenge
            }),
            (t.prototype.setChallengeResponse = function(t) {
              this.worker.postMessage({
                fn: 'setChallengeResponse',
                response: t
              })
            }),
            (t.prototype.getReadyDfd = function() {
              return this.readyDfd
            }),
            (t.prototype.getVersion = function() {
              return this.version
            }),
            (t.prototype.getSupports = function() {
              return this.supports
            }),
            t
          )
        })()
      t.exports = l
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        i =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        o = n(7),
        s = n(3),
        a = n(0),
        c = n(139),
        u = n(13),
        l = n(142),
        p = n(2),
        f = n(53),
        h = n(1),
        d = n(13),
        A = n(65),
        g = p.get(),
        m = 1,
        v = 2,
        y = {},
        b = [
          'typer',
          'typerArrows',
          'typerStrings',
          'setTyperStrings',
          'elmoCallback',
          'rkeyDelay'
        ],
        w = a.template(A),
        _ = (function() {
          function t(t) {
            var e = this
            ;(this.el = t),
              (this.cameraController = null),
              (this.bitBlitter = null),
              (this.imageHandler = null),
              (this.evtBus = new s.ClassTS()),
              (this.version = ''),
              (this.workerSupports = {}),
              (this.scanOptions = { gcip_v2: !0 }),
              (this.plugin2 = null),
              (this.p2Deferred = h.newDeferred()),
              (this.startupTimer = new p.LogTimer(
                'NoPlugin Startup Timer',
                p.INFO
              )),
              (this.currentCameraInfo = new o.ReplaySubject(1)),
              (this.bind = a.bind(this.evtBus.bind, this.evtBus)),
              (this.unbind = a.bind(this.evtBus.unbind, this.evtBus)),
              (this.el.innerHTML = w()),
              (this.canvas = this.el.querySelector('canvas')),
              (this.naclParent = t.querySelector('div'))
            var n = l.create(this.naclParent, m, v),
              r = c.create(this.canvas),
              i = u.create(t, n, r, this.p2Deferred.promise)
            this.loadedDfd = h.PromiseAll([n, r, i]).then(function(t) {
              var n = t[0],
                r = t[1],
                i = t[2]
              return (
                (e.imageHandler = n),
                (e.bitBlitter = r),
                (e.cameraController = i),
                e.initCameraController(i),
                e.initBitBlitter(r),
                e.initImageHandler(n, r),
                (e.version = n.getWorkerVersion()),
                (e.workerSupports = n.getWorkerSupports()),
                g.info('NoPlugin Version: ' + e.version),
                e.startupTimer.logNow(),
                (e.startupTimer = null),
                e
              )
            })
          }
          return (
            (t.prototype.getLoadedDfd = function() {
              return this.loadedDfd
            }),
            (t.prototype.initCameraController = function(t) {
              var e = this.evtBus
              t.bind('videoSize', function(t, n) {
                e.trigger('videoSize', t, n)
              }),
                t.currentCameraInfo.subscribe(this.currentCameraInfo)
            }),
            (t.prototype.initBitBlitter = function(t) {
              var e = this.evtBus
              t.bind('cameraVisible', function(t) {
                e.trigger('cameraVisible', t)
              })
            }),
            (t.prototype.initImageHandler = function(t, e) {
              var n = this.evtBus
              t.setOptions(this.scanOptions),
                t.bind('scan', function(t) {
                  g.trace('GCIP scan received: ', t), n.trigger('scan', t)
                }),
                t.bind('suspectedRects', function(t) {
                  g.trace('suspectedRects: ', t), e.setSuspectedRects(t)
                }),
                t.bind('confirmedRects', function(t) {
                  g.trace('confirmedRects: ', t), e.setConfirmedRects(t)
                }),
                t.bind('debugImages', function(t) {
                  n.trigger('debugImages', t)
                }),
                t.bind('processingTime', function(t) {
                  n.trigger('processingTime', t)
                })
            }),
            (t.prototype._setDebugOutputContainer = function(t) {
              return this.imageHandler.setDebugOutputContainer(t)
            }),
            (t.prototype.inhibitProcessing = function(t) {
              return this.imageHandler.inhibitProcessing(t)
            }),
            (t.prototype.initTyper = function(t, e, n, r) {
              if ((void 0 === r && (r = 0), !this.plugin2)) return !1
              this.supports('rkeyDelay')
                ? this.plugin2.initTyper(t, e, n, r)
                : this.plugin2.initTyper(t, Math.max(e, r), n)
            }),
            (t.prototype.setTyperStrings = function(t) {
              if (!this.plugin2 || !this.supports('setTyperStrings')) return !1
              g.info('Setting typer strings to:', t),
                this.plugin2.setTyperStrings(t)
            }),
            (t.prototype.clearTyperStrings = function() {
              if (!this.plugin2 || !this.supports('setTyperStrings')) return !1
              g.info('Clearing typer strings'), this.plugin2.clearTyperStrings()
            }),
            (t.prototype.getCameraList = function() {
              return this.cameraController.getCameraList()
            }),
            (t.prototype.setCamera = function(t, e) {
              !0 === e && (e = d.Rotate.Full180),
                !1 === e && (e = d.Rotate.None),
                this.cameraController.setRotate(e),
                this.cameraController.setCamera(t)
            }),
            (t.prototype.stopCamera = function() {
              return this.cameraController.stopCamera()
            }),
            (t.prototype.enableHighRes = function(t) {
              return this.bitBlitter.enableHighRes(t)
            }),
            (t.prototype.pauseCamera = function() {
              this.cameraController.pause()
            }),
            (t.prototype.unpauseCamera = function() {
              this.cameraController.unpause()
            }),
            (t.prototype.displayDirectObj = function(t) {
              this.bitBlitter.drawImage(t)
            }),
            (t.prototype.processDirectData = function(t) {
              return r(this, void 0, void 0, function() {
                var e, n
                return i(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return (
                        this.pauseCamera(),
                        [4, this.imageHandler.whenReadyForFrame()]
                      )
                    case 1:
                      r.sent(), (r.label = 2)
                    case 2:
                      return (
                        r.trys.push([2, 4, , 5]),
                        [4, this.imageHandler.processFrame(t, !0, !0)]
                      )
                    case 3:
                      return (e = r.sent()), [3, 5]
                    case 4:
                      return (
                        (n = r.sent()),
                        g.error('Error processing frame: ', n),
                        [3, 5]
                      )
                    case 5:
                      return this.unpauseCamera(), [2, e]
                  }
                })
              })
            }),
            (t.prototype.getVersion = function() {
              return this.version
            }),
            (t.prototype.getVersionMajor = function() {
              return this.version.split('.')[0]
            }),
            (t.prototype.getVersionMinor = function() {
              return this.version.split('.')[1]
            }),
            (t.prototype.getCurrentImage = function() {
              return !1
            }),
            (t.prototype.getJPEGImage = function() {
              return !1
            }),
            (t.prototype.getGciAsync = function(t) {
              return r(this, void 0, void 0, function() {
                var e, n, r, o
                return i(this, function(i) {
                  switch (i.label) {
                    case 0:
                      return (
                        i.trys.push([0, 2, , 3]),
                        [
                          4,
                          h.PromiseAll([
                            this.imageHandler.getGciData(),
                            this.cameraController.getJpegDfd()
                          ])
                        ]
                      )
                    case 1:
                      return (
                        (e = i.sent()),
                        (n = e[0]),
                        (r = e[1]),
                        t(n && r ? [n.width, n.height, r, n.data] : !1),
                        [3, 3]
                      )
                    case 2:
                      return (
                        (o = i.sent()),
                        g.error('Error getting GCI:', o),
                        t(!1),
                        [3, 3]
                      )
                    case 3:
                      return [2]
                  }
                })
              })
            }),
            (t.prototype.getJpegAsync = function(t) {
              this.cameraController.getJpegDfd().then(
                function(e) {
                  t(e)
                },
                function() {
                  t(!1)
                }
              )
            }),
            (t.prototype.setPlugin2 = function(t) {
              return r(this, void 0, void 0, function() {
                var e,
                  n,
                  o,
                  s,
                  a,
                  c,
                  u,
                  l = this
                return i(this, function(p) {
                  switch (p.label) {
                    case 0:
                      return (
                        p.trys.push([0, 6, , 7]),
                        t
                          ? (g.info('Plugin2 loaded', t),
                            (this.plugin2 = t),
                            'featureMap' in t ? [4, t.featureMap] : [3, 2])
                          : (g.info('No plugin2 found'),
                            this.p2Deferred.resolve(null),
                            [2, this.p2Deferred.promise])
                      )
                    case 1:
                      for (e = p.sent(), n = 0, o = b; n < o.length; n++)
                        (s = o[n]), (y[s] = !!e[s])
                      return [3, 5]
                    case 2:
                      return [4, t.supports]
                    case 3:
                      return (
                        (a = p.sent()),
                        (c = b.map(function(t) {
                          return r(l, void 0, void 0, function() {
                            var e
                            return i(this, function(n) {
                              switch (n.label) {
                                case 0:
                                  return [4, a(t)]
                                case 1:
                                  return (e = n.sent()), (y[t] = e), [2, e]
                              }
                            })
                          })
                        })),
                        [4, h.PromiseAll(c)]
                      )
                    case 4:
                      p.sent(), (p.label = 5)
                    case 5:
                      return (
                        this.supports('elmoCallback')
                          ? this.p2Deferred.resolve(t)
                          : this.p2Deferred.resolve(null),
                        [3, 7]
                      )
                    case 6:
                      return (
                        (u = p.sent()),
                        g.error('Failed to check supported features'),
                        this.p2Deferred.resolve(null),
                        [3, 7]
                      )
                    case 7:
                      return [2, this.p2Deferred.promise]
                  }
                })
              })
            }),
            (t.prototype.setOption = function(t, e) {
              ;(this.scanOptions[t] = e),
                this.imageHandler.setOptions(this.scanOptions)
            }),
            (t.prototype.getScan = function() {
              return !1
            }),
            (t.prototype.setTransparency = function(t) {}),
            (t.prototype.supports = function(e) {
              return 'typer' == e
                ? !!this.plugin2
                : this.workerSupports[e] || y[e] || t.supports(e)
            }),
            (t.prototype.getElement = function() {
              return this.canvas
            }),
            (t.supports = function(t) {
              switch (t) {
                case 'elmo':
                  return !1
                case 'imageExport':
                case 'multiTiff':
                case 'fileScan':
                  return !0
                case 'typerArrows':
                  return !1
                case 'directData':
                case 'highRes':
                case 'rotate':
                  return !0
                default:
                  return !1
              }
            }),
            (t.create = function(e) {
              return r(this, void 0, void 0, function() {
                var n, r, o
                return i(this, function(i) {
                  switch (i.label) {
                    case 0:
                      g.info('Creating NoPlugin'),
                        (n = new t(e)),
                        (r = null),
                        (i.label = 1)
                    case 1:
                      return i.trys.push([1, 3, , 4]), [4, f()]
                    case 2:
                      return (r = i.sent()), n.setPlugin2(r), [3, 4]
                    case 3:
                      return (
                        (o = i.sent()),
                        g.info('Plugin2 not loaded'),
                        n.setPlugin2(null),
                        [3, 4]
                      )
                    case 4:
                      return [4, n.getLoadedDfd()]
                    case 5:
                      return i.sent(), [2, [n, n.getElement()]]
                  }
                })
              })
            }),
            t
          )
        })()
      t.exports = _
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        var e = 1
        return (
          c.each(g, function(n) {
            t > n.threshold && (e = n.throttleTo)
          }),
          1 / e
        )
      }
      var i,
        o =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        s =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        a = n(3),
        c = n(0),
        u = n(145),
        l = n(46),
        p = n(2),
        f = n(146),
        h = n(25),
        d = n(1),
        A = p.get()
      !(function(t) {
        ;(t.Rect = 'rect'), (t.GCIP = 'gcip'), (t.GCIPLock = 'gcip_lock')
      })(i || (i = {}))
      var g = [
          { threshold: 0, throttleTo: 30 },
          { threshold: 5, throttleTo: 5 },
          { threshold: 15, throttleTo: 4 }
        ],
        m = (function() {
          function t(t, e, n) {
            ;(this.naclParent = t),
              (this.gcipWorkerCount = e),
              (this.rectWorkerCount = n),
              (this.timerSinceLastScan = new p.LogTimer(
                'TimeSinceLastScan',
                999
              )),
              (this.timerSinceLastGCIP = new p.LogTimer(
                'TimeSinceLastGCIP',
                999
              )),
              (this.timerSinceLastRect = new p.LogTimer(
                'TimeSinceLastRect',
                999
              )),
              (this.profileScanTimer = new p.LogTimer(
                'profileScanTimer',
                p.INFO
              )),
              (this.profileGCIPTimer = new p.LogTimer(
                'profileGCIPTimer',
                p.INFO
              )),
              (this.profileRectTimer = new p.LogTimer(
                'profileRectTimer',
                p.INFO
              )),
              (this.seqFailCount = 0),
              (this.currentImage = null),
              (this.currentIsOneOff = !1),
              (this.inhibit = !1),
              (this.inhibitCallbackId = -1),
              (this.scanOpts = {}),
              (this.gcipWorkers = []),
              (this.rectWorkers = []),
              (this.version = null),
              (this.supports = {}),
              (this.state = i.Rect),
              (this.evtBus = new a.ClassTS()),
              (this.outputContainer = null),
              (this._readyDfd = this._initWorkers()),
              (this.bind = c.bind(this.evtBus.bind, this.evtBus)),
              (this.unbind = c.bind(this.evtBus.unbind, this.evtBus))
          }
          return (
            (t.prototype._initWorkers = function() {
              return o(this, void 0, void 0, function() {
                var t,
                  e,
                  n,
                  r,
                  i,
                  o = this
                return s(this, function(s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (t = this.gcipWorkers),
                        (e = this.rectWorkers),
                        (n = function(t, e, n) {
                          for (var r = 0; r < n; ++r) {
                            var i = u.createWorker(o.naclParent)
                            t.push(i), e.push(i.getReadyDfd())
                          }
                        }),
                        (r = []),
                        n(t, r, this.gcipWorkerCount || 1),
                        n(e, r, this.rectWorkerCount || 1),
                        [4, r[0]]
                      )
                    case 1:
                      return (
                        (i = s.sent()),
                        (this.version = i.getVersion()),
                        (this.supports = i.getSupports()),
                        [4, d.PromiseAll(r)]
                      )
                    case 2:
                      return s.sent(), [2, this]
                  }
                })
              })
            }),
            (t.prototype.setDebugOutputContainer = function(t) {
              this.outputContainer = t
            }),
            (t.prototype.getGCIPWorker = function() {
              return c.find(this.gcipWorkers, function(t) {
                return t.isIdle()
              })
            }),
            (t.prototype.getRectWorker = function() {
              return this.timerSinceLastRect.getSeconds() <
                r(this.timerSinceLastScan.getSeconds())
                ? null
                : this.timerSinceLastRect.getSeconds() < 1 / 1.5
                ? null
                : c.find(this.rectWorkers, function(t) {
                    return t.isIdle()
                  })
            }),
            (t.prototype.inhibitProcessing = function(t) {
              var e = this
              void 0 === t && (t = 500),
                -1 != this.inhibitCallbackId &&
                  clearTimeout(this.inhibitCallbackId),
                (this.inhibit = t > 0),
                0 !== t &&
                  (this.inhibitCallbackId = setTimeout(function() {
                    e.inhibit = !1
                  }, t))
            }),
            (t.prototype.setOptions = function(t) {
              this.scanOpts = t || {}
            }),
            (t.prototype.readyForFrame = function() {
              var t = this.state
              if (this.inhibit) return !1
              if (t == i.GCIP || t == i.GCIPLock) return !!this.getGCIPWorker()
              if (t == i.Rect) return !!this.getRectWorker()
              throw new Error('ImageHandler in invalid state!')
            }),
            (t.prototype.whenReadyForFrame = function() {
              var t = this,
                e = d.newDeferred(),
                n = function() {
                  t.readyForFrame() ? e.resolve(!0) : setTimeout(n, 5)
                }
              return (
                this.readyForFrame() ? e.resolve(!0) : setTimeout(n, 5),
                e.promise
              )
            }),
            (t.prototype.logAndReset = function(t, e) {
              t.getSeconds() > e && (t.logNow(), t.reset())
            }),
            (t.prototype.getState = function() {
              return this.state
            }),
            (t.prototype.setState = function(t) {
              t != this.state &&
                ((this.state = t),
                A.debug('ImageHandler state is ' + this.state))
            }),
            (t.prototype.processFrame = function(t, e, n) {
              return o(this, void 0, void 0, function() {
                var r, o, a, c, u, l, g, m, v, y, b, w, _, S, b, k, x
                return s(this, function(s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (r = d.newDeferred()),
                        ((o = this.evtBus),
                        (this.currentImage = t),
                        (this.currentIsOneOff = e),
                        (u = t.data),
                        (l = t.width),
                        (g = t.height),
                        (m = this.getState()),
                        e || m == i.GCIP || m == i.GCIPLock
                          ? (a = this.getGCIPWorker())
                          : 'rect' == m && (c = this.getRectWorker()),
                        (v = new p.LogTimer('Convert to grayscale', p.DEBUG)),
                        (y = h.getGrayscaleBuffer(u, l, g, !!e)),
                        v.logNow(),
                        (v = null),
                        c)
                          ? (this.timerSinceLastRect.reset(),
                            c.lock(),
                            [4, c.getRects(l, g, y)])
                          : [3, 2]
                      )
                    case 1:
                      return (
                        (b = s.sent()),
                        this.profileRectTimer.ping(),
                        b.length
                          ? (o.trigger('suspectedRects', b),
                            this.setState(i.GCIP))
                          : m != i.GCIPLock && this.setState(i.GCIPLock),
                        [3, 4]
                      )
                    case 2:
                      return a
                        ? (A.trace('Running GCIP'),
                          a.lock(),
                          this.timerSinceLastGCIP.reset(),
                          (w = new Date().getTime()),
                          [4, a.readImage(l, g, y, this.scanOpts)])
                        : [3, 4]
                    case 3:
                      if (
                        ((_ = s.sent()),
                        (S = _[0]),
                        (b = _[1]),
                        (k = _[2]),
                        this.profileGCIPTimer.ping(),
                        o.trigger('processingTime', new Date().getTime() - w),
                        this.outputContainer &&
                          (S || e) &&
                          f.importImageBuffer(l, g, y, this.outputContainer),
                        k &&
                          k.debugImages &&
                          o.trigger('debugImages', k.debugImages),
                        S)
                      ) {
                        A.debug(
                          'Found possible scan, locking w/ ' + l + 'x' + g
                        ),
                          this.setState(i.GCIPLock),
                          o.trigger('confirmedRects', b),
                          o.trigger('suspectedRects', []),
                          (this.seqFailCount = 0)
                        try {
                          ;(x = JSON.parse(S)),
                            x &&
                              x.length &&
                              x[0].type &&
                              (x.unshift({ type: 'meta', higher_avail: !n }),
                              (S = JSON.stringify(x)))
                        } catch (t) {}
                        e || o.trigger('scan', S),
                          this.timerSinceLastScan.reset(),
                          this.profileScanTimer.ping(),
                          r.resolve(S)
                      } else r.resolve(''), m == i.GCIPLock ? ++this.seqFailCount >= 3 && (this.setState(i.Rect), o.trigger('confirmedRects', [])) : (this.setState(i.Rect), o.trigger('confirmedRects', []))
                      s.label = 4
                    case 4:
                      return (
                        this.logAndReset(this.profileScanTimer, 10),
                        this.logAndReset(this.profileGCIPTimer, 10),
                        this.logAndReset(this.profileRectTimer, 10),
                        [2, r.promise]
                      )
                  }
                })
              })
            }),
            (t.prototype.getGciData = function() {
              var t = this.currentImage
              if (!t) return null
              var e = t.data,
                n = new Uint32Array(2)
              ;(n[0] = t.width), (n[1] = t.height)
              var r = new Uint8Array(e.length / 4 + 8)
              r.set(new Uint8Array(n.buffer), 0)
              for (
                var i = h.getGrayscaleBuffer(
                    e,
                    t.width,
                    t.height,
                    !!this.currentIsOneOff
                  ),
                  o = 0;
                o < i.length;
                ++o
              )
                r[o + 8] = i[o]
              return { width: t.width, height: t.height, data: l.encode(r) }
            }),
            (t.prototype.getWorkerVersion = function() {
              return this.version
            }),
            (t.prototype.getWorkerSupports = function() {
              return this.supports
            }),
            (t.create = function(t, e, n) {
              return o(this, void 0, void 0, function() {
                var r
                return s(this, function(i) {
                  switch (i.label) {
                    case 0:
                      return (r = new this(t, e, n)), [4, r._readyDfd]
                    case 1:
                      return i.sent(), [2, r]
                  }
                })
              })
            }),
            t
          )
        })()
      t.exports = m
    },
    function(t, e, n) {
      'use strict'
      function r(t, e) {
        return new l(t, e)
      }
      var i =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        s = n(2),
        a = n(1),
        c = s.get(),
        u = 1,
        l = (function() {
          function t(t, e) {
            var n = this
            ;(this.el = t),
              (this.msgHandler = null),
              (this.readyDfd = null),
              (this.id = u++)
            var r = a.newDeferred()
            ;(this.readyDfd = r.promise),
              (t.innerHTML =
                '<embed width=0 height=0 src="' +
                e +
                '/GciPNacl.nmf" type="application/x-pnacl" />'),
              (this.pnaclPlugin = this.el.getElementsByTagName('embed')[0]),
              t.addEventListener(
                'load',
                function() {
                  c.info('Finished loading NaCL worker #' + n.id), r.resolve(n)
                },
                !0
              ),
              t.addEventListener(
                'message',
                function(t) {
                  n.msgHandler && n.msgHandler(t.data)
                },
                !0
              ),
              t.addEventListener(
                'crash',
                function(t) {
                  c.error('Pnacl plugin ' + n.id + ' crashed!', t), r.reject(t)
                },
                !0
              )
          }
          return (
            (t.prototype.setHandler = function(t) {
              this.msgHandler = t
            }),
            (t.prototype.getReadyDfd = function() {
              return this.readyDfd
            }),
            (t.prototype.postMessage = function(t) {
              return i(this, void 0, void 0, function() {
                return o(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.readyDfd]
                    case 1:
                      return e.sent(), this.pnaclPlugin.postMessage(t), [2]
                  }
                })
              })
            }),
            t
          )
        })()
      !(function(t) {
        function e() {
          return (
            void 0 !== navigator.mimeTypes['application/x-pnacl'] &&
            navigator.mimeTypes['application/x-pnacl'].enabledPlugin &&
            !window.gcNoPnacl
          )
        }
        t.isSupported = e
      })(r || (r = {})),
        (t.exports = r)
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        if (c) return c.promise
        c = a.newDeferred()
        var e = new XMLHttpRequest()
        return (
          (e.onreadystatechange = function() {
            if (4 == e.readyState && 200 == e.status) {
              var t = new Blob([e.responseText], { type: 'text/javascript' })
              c.resolve(window.URL.createObjectURL(t))
            }
          }),
          e.open('GET', t + u, !0),
          e.send(),
          c.promise
        )
      }
      function i(t) {
        return new l(t)
      }
      var o =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        s =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        a = n(1),
        c = null,
        u = 'gcplugin_worker.js',
        l = (function() {
          function t(t) {
            var e = this
            ;(this.url = t),
              (this.msgHandler = null),
              (this.workerURLDfd = r(this.url)),
              (this.readyDfd = this.workerURLDfd.then(function(t) {
                var n = new Worker(t)
                return (
                  n.postMessage({ url: e.url }),
                  n.addEventListener('message', function(t) {
                    e.msgHandler && e.msgHandler(t.data)
                  }),
                  n
                )
              }))
          }
          return (
            (t.prototype.setHandler = function(t) {
              this.msgHandler = t
            }),
            (t.prototype.getReadyDfd = function() {
              var t = this
              return this.readyDfd.then(function() {
                return t
              })
            }),
            (t.prototype.postMessage = function(t) {
              return o(this, void 0, void 0, function() {
                var e
                return s(this, function(n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.readyDfd]
                    case 1:
                      return (e = n.sent()), e.postMessage(t), [2]
                  }
                })
              })
            }),
            t
          )
        })()
      t.exports = i
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        if (v || !s.isSupported())
          return l.info('Using native JS'), new o(i.bind(a, null, g))
        l.info('Using pnacl')
        var e = document.createElement('div')
        return t.appendChild(e), new o(i.bind(s, null, e, g))
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(0),
        o = n(140),
        s = n(143),
        a = n(144),
        c = n(2),
        u = n(113),
        l = c.get(),
        p = window._GCREGION || 'us',
        f = u('nopluginVer') || window._GCNOPLUGINVER || 'current',
        h = 'https://downloads.gradecam.com/noplugin/' + f + '/',
        d = 'https://cdn-qnhd.menco.cn/assets/vendors/gradecam/gc/noplugin/' + f + '/',
        A = 'asia' === p ? d : h,
        g = A,
        m = u('nopluginOverride') || window._GCNOPLUGINURL
      m && (g = m)
      var v = (function() {
        try {
          if (
            'object' == typeof WebAssembly &&
            'function' == typeof WebAssembly.instantiate
          ) {
            var t = new WebAssembly.Module(
              Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
            )
            if (t instanceof WebAssembly.Module)
              return new WebAssembly.Instance(t) instanceof WebAssembly.Instance
          }
        } catch (t) {}
        return !1
      })()
      e.createWorker = r
    },
    function(t, e, n) {
      'use strict'
      function r(t, e, n, r) {
        var i = document.createElement('canvas')
        ;(i.width = t), (i.height = e), r.appendChild(i)
        for (
          var o = i.getContext('2d'), s = o.createImageData(t, e), a = 0;
          a < n.length;
          ++a
        ) {
          var c = 4 * a
          ;(s.data[c] = n[a]),
            (s.data[c + 1] = n[a]),
            (s.data[c + 2] = n[a]),
            (s.data[c + 3] = 255)
        }
        o.putImageData(s, 0, 0),
          (i.style.width = '320px'),
          (i.style.height = '240px')
      }
      function i(t, e) {
        var n = new Uint32Array(2)
        return n.set(t.subarray(0, 7), 0), r(n[0], n[1], t.subarray(8), e)
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.importImageBuffer = r),
        (e.importImageGCI = i)
    },
    function(t, e, n) {
      'use strict'
      function r(t, e, n, r) {
        var i = E[t._pid],
          o = i.structQ,
          s = e.hash()
        if ((o.push(s), o.length > n && o.shift(), s == i.lockedStruct))
          return !0
        if (o.length < r) return !1
        var a = function(t, e) {
          return e == s ? t + 1 : t
        }
        return h.reduce(i.structQ, a, 0) >= r && ((i.lockedStruct = s), !0)
      }
      function i(t) {
        E[t._pid].formCodeTimer = new Date().getTime()
      }
      function o(t) {
        return (new Date().getTime() - E[t._pid].formCodeTimer) / 1e3
      }
      function s(t) {
        E[t._pid].timer = new Date().getTime()
      }
      function a(t) {
        return (new Date().getTime() - E[t._pid].timer) / 1e3
      }
      function c(t, e, n, r) {
        n.resolve(e),
          r.returnScan || t.trigger('scan', e),
          (E[t._pid].fired = !0)
      }
      var u =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        l =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        p =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        f = n(3),
        h = n(0),
        d = n(4),
        A = n(2),
        g = n(56),
        m = n(50),
        v = n(104),
        y = n(105),
        b = n(106),
        w = n(152),
        _ = n(22),
        S = n(1),
        k = 7,
        x = 10,
        C = 3,
        O = 5,
        I = 15,
        E = {},
        M = 0,
        R = A.get()
      m.hasGCMobile() && (I = 10)
      var D = (function(t) {
        function e() {
          var e = t.call(this) || this
          e._pid = M++
          var n = e._pid
          return (
            (E[n] = {
              mode: new d.FormMode(),
              lockedStruct: null,
              structQ: [],
              scanQ: [],
              config: null,
              paused: !1,
              lastFormCodeFormId: null,
              fired: !1,
              validate: null,
              merger: new b(),
              interpreter: new y(v),
              mult_error_thresh_e: 0.01,
              mult_error_thresh_ne: 0.001,
              choice_error_thresh: 1e-5,
              sigma_thresh: 3,
              sqReq: k,
              sqMax: x,
              vTime: C,
              cTime: O,
              vScans: I
            }),
            e
          )
        }
        return (
          u(e, t),
          (e.prototype.enableHighRes = function() {
            this.trigger('enableHighRes', 15e3)
          }),
          (e.prototype.setSpeedHandicap = function(t) {
            var e = E[this._pid]
            ;(e.sqReq = Math.floor(k * t)),
              (e.sqMax = Math.floor(x * t)),
              (e.vScans = Math.floor(I * t))
          }),
          (e.prototype.isPaused = function() {
            return E[this._pid].paused
          }),
          (e.prototype.pause = function() {
            ;(E[this._pid].paused = !0), this.trigger('pause')
          }),
          (e.prototype.unpause = function() {
            ;(E[this._pid].paused = !1), this.trigger('unpause')
          }),
          (e.prototype.validateScan = function(t) {
            var e = {},
              n = E[this._pid],
              r = h.map(t.getUnvalidatedItems(), function(t, n) {
                var r = t.toObject()
                return (e[n] = t), r
              }),
              i = t.getItem('GradeCam ID'),
              o = ''
            return (
              i && !i.validate && (o = i.value),
              n
                .validate({
                  items: r,
                  bad_form: t.bad_form,
                  bad_form_version: t.bad_form_version,
                  gradecam_id: o,
                  mode: n.mode.toJSON(),
                  formcode_data: t.fc_data
                })
                .then(function(n) {
                  if (!n) throw new Error('Form was not validated')
                  return (
                    h.each(n, function(t, n) {
                      var r = e[n]
                      ;(r.value = t.value), (r.validate = t.validate)
                    }),
                    t
                  )
                })
            )
          }),
          (e.prototype.fireFormCodeEvent = function(t, e) {
            return l(this, void 0, void 0, function() {
              var n, r, i
              return p(this, function(o) {
                switch (o.label) {
                  case 0:
                    ;(n = E[this._pid]), (o.label = 1)
                  case 1:
                    return o.trys.push([1, 3, , 4]), [4, _(t)]
                  case 2:
                    return (
                      (r = o.sent()),
                      r &&
                        r.form_id != n.lastFormCodeFormId &&
                        (this.trigger('formcode', r),
                        (n.lastFormCodeFormId = r.form_id)),
                      2 == r.desc_v &&
                      h.some(r.form_description, function(t) {
                        return 'clip' === t.type
                      }) &&
                      (R.info(
                        'Form description contains clips, triggering highRes'
                      ),
                      this.enableHighRes(),
                      e && e.higher_avail)
                        ? [2, !1]
                        : [3, 4]
                    )
                  case 3:
                    return (i = o.sent()), [2, !1]
                  case 4:
                    return [2, !0]
                }
              })
            })
          }),
          (e.prototype.processScan = function(t, e) {
            return l(this, void 0, void 0, function() {
              var n,
                u,
                l,
                f,
                A,
                m,
                y,
                b,
                w,
                _,
                k,
                x,
                C,
                O,
                I,
                M = this
              return p(this, function(p) {
                switch (p.label) {
                  case 0:
                    if (
                      ((e = e || {}),
                      (n = S.newDeferred()),
                      (u = E[this._pid]),
                      e.returnScan && this.reset(),
                      !u.config)
                    )
                      return (
                        this.trigger('processScanResult', 'config'),
                        n.reject(new Error('Not configured')),
                        [2, n.promise]
                      )
                    p.label = 1
                  case 1:
                    return (
                      p.trys.push([1, 5, , 6]),
                      u.formDesc ? [4, u.formDesc] : [3, 3]
                    )
                  case 2:
                    return (m = p.sent()), [3, 4]
                  case 3:
                    ;(m = null), (p.label = 4)
                  case 4:
                    return (A = m), [3, 6]
                  case 5:
                    return (y = p.sent()), (A = u.formDesc = null), [3, 6]
                  case 6:
                    if (
                      (A &&
                        A.oneTimeDescription &&
                        ((u.formDesc = null), (A = null)),
                      (f = u.scanQ),
                      h.defaults(e, {
                        scansRequired: u.sqReq,
                        scansMax: u.sqMax,
                        scansToValidate: u.vScans
                      }),
                      this.isPaused())
                    )
                      return (
                        e.successObj && e.successObj.reject(),
                        n.reject(
                          new Error('Tried to process scan while paused')
                        ),
                        this.trigger('processScanResult', 'paused'),
                        [2, n.promise]
                      )
                    if (((b = null), t && t.length && t[0].type)) {
                      if (
                        ((t = t),
                        'meta' == t[0].type && (b = t.shift()),
                        (w = b && b.higher_avail),
                        (l = d.ScanBlocks.loadV2(t)),
                        l.clips.length && w)
                      )
                        return (
                          this.trigger('processScanResult', 'needHighRes'),
                          R.info(
                            'Scan output contains clips, triggering highRes'
                          ),
                          this.enableHighRes(),
                          n.reject(new Error('Need high res image')),
                          [2, n.promise]
                        )
                    } else l = d.ScanBlocks.load(t)
                    if ((l.normalizeIntensities(v), (_ = l.hasFormData())))
                      i(this), this.fireFormCodeEvent(l, b)
                    else if (e.scansRequired > 1 && o(this) < 15)
                      return (
                        e.successObj && e.successObj.reject(),
                        this.trigger('processScanResult', 'paused'),
                        n.reject(new Error('Scaning is paused')),
                        [2, n.promise]
                      )
                    if (u.formDesc) return [3, 10]
                    if (!_ && !r(this, l, e.scansMax, e.scansRequired))
                      return (
                        e.successObj && e.successObj.reject(),
                        n.reject(new Error('Could not verify form structure')),
                        this.trigger('processScanResult', 'structure'),
                        [2, n.promise]
                      )
                    if (
                      ((u.formDesc = u.config.getFormDescription(l)),
                      !u.formDesc || !u.formDesc.then)
                    )
                      return [3, 10]
                    p.label = 7
                  case 7:
                    return p.trys.push([7, 9, , 10]), [4, u.formDesc]
                  case 8:
                    return (A = p.sent()), [3, 10]
                  case 9:
                    return (k = p.sent()), (A = null), [3, 10]
                  case 10:
                    ;(u.lastFormDesc = A),
                      (x = g.structure(u.formDesc, l)),
                      this.pause(),
                      (p.label = 11)
                  case 11:
                    return p.trys.push([11, 13, , 14]), [4, x]
                  case 12:
                    return (
                      (C = p.sent()),
                      ((u.scanQ.length &&
                        f[0].hasFormIdentifier() &&
                        f[0].getFormIdentifier() == C.getFormIdentifier()) ||
                        ((u.scanQ = f = []), s(this), (u.fired = !1)),
                      u.fired)
                        ? (this.unpause(),
                          e.successObj && e.successObj.resolve(),
                          n.reject(new Error('Duplicate form')),
                          this.trigger('processScanResult', 'alreadyProcessed'),
                          [2, n.promise])
                        : (f.push(C),
                          (O = u.merger.interpretScans(
                            A,
                            u.scanQ,
                            u.interpreter
                          ))
                            ? (O.wantsMoreClipCopies() &&
                              a(this) < u.cTime &&
                              e.scansRequired > 1
                                ? (this.trigger(
                                    'processScanResult',
                                    'wantMoreCopies'
                                  ),
                                  R.info(
                                    'Scan output contains clips, more copies of the clips requested'
                                  ),
                                  this.unpause(),
                                  n.reject(new Error('Needs more clip copies')))
                                : !O.needsValidation() || e.dontValidate
                                ? (this.trigger('processScanResult', 'success'),
                                  c(this, O, n, e),
                                  e.successObj && e.successObj.resolve(),
                                  f.length &&
                                    !f[0].hasFormIdentifier() &&
                                    (u.scanQ = []),
                                  this.unpause())
                                : a(this) >= u.vTime ||
                                  f.length >= e.scansToValidate ||
                                  (f.length && !u.scanQ[0].hasFormIdentifier())
                                ? (this.trigger(
                                    'processScanResult',
                                    'validating'
                                  ),
                                  this.validateScan(O)
                                    .then(
                                      function(t) {
                                        e.successObj && e.successObj.resolve(),
                                          f.length &&
                                            !f[0].hasFormIdentifier() &&
                                            (u.scanQ = []),
                                          c(M, t, n, e)
                                      },
                                      function() {
                                        e.successObj && e.successObj.reject(),
                                          n.reject(
                                            new Error('Could not validate form')
                                          ),
                                          (u.scanQ = []),
                                          (u.fired = !1)
                                      }
                                    )
                                    .then(
                                      function() {
                                        return M.unpause()
                                      },
                                      function() {
                                        return M.unpause()
                                      }
                                    ))
                                : (h.defer(function() {
                                    M.trigger(
                                      'processScanResult',
                                      'moreScans',
                                      M
                                    )
                                  }),
                                  this.unpause(),
                                  n.reject(new Error('Needs more scans'))),
                              [3, 14])
                            : (this.reset(),
                              h.defer(function() {
                                M.trigger('processScanResult', 'moreScans', M)
                              }),
                              this.unpause(),
                              n.reject(new Error('Need more scans')),
                              [2, n.promise]))
                    )
                  case 13:
                    return (
                      (I = p.sent()),
                      this.unpause(),
                      I && I.domain
                        ? h.defer(function() {
                            M.trigger('processScanResult', 'networkError', {
                              domain: I.domain,
                              error: I
                            })
                          })
                        : A
                        ? this.trigger('processScanResult', 'structure')
                        : h.defer(function() {
                            'examLength' == u.config.lastFailure
                              ? M.trigger('processScanResult', 'examLength')
                              : M.trigger('processScanResult', 'structure')
                          }),
                      r(this, l, e.scansMax, e.scansRequired) &&
                        (u.formDesc = null),
                      e.successObj && e.successObj.reject(),
                      n.reject(new Error('Could not scan form')),
                      [3, 14]
                    )
                  case 14:
                    return [2, n.promise]
                }
              })
            })
          }),
          (e.prototype.reset = function() {
            var t = E[this._pid]
            ;(t.scanQ = []),
              (t.formDesc = null),
              (t.fired = !1),
              (t.lastFormCodeFormId = null)
          }),
          (e.prototype.setMode = function(t) {
            var e = E[this._pid]
            this.reset(),
              (e.mode = t),
              (e.config = w.createFromMode(t)),
              e.interpreter.setMode(t)
          }),
          (e.prototype.getLastFormDescription = function() {
            var t = E[this._pid]
            return t.lastFormDesc ? t.lastFormDesc.toObject() : null
          }),
          (e.prototype.setLockThreshold = function(t, e) {
            var n = E[this._pid]
            ;(n.sqReq = t), (n.sqMax = e)
          }),
          (e.prototype.setValidateTime = function(t) {
            E[this._pid].vTime = t
          }),
          (e.prototype.setValidateCallback = function(t) {
            E[this._pid].validate = t
          }),
          (e.prototype.setMultiplicityErrorThreshold = function(t, e) {
            var n = E[this._pid]
            ;(n.mult_error_thresh_e = t),
              (n.mult_error_thresh_ne = e),
              n.interpreter.setMultiplicityErrorThreshold(t, e)
          }),
          (e.prototype.setChoiceErrorThreshold = function(t) {
            var e = E[this._pid]
            ;(e.choice_error_thresh = t),
              e.interpreter.setChoiceErrorThreshold(t)
          }),
          (e.prototype.setSigmaThreshold = function(t) {
            var e = E[this._pid]
            ;(e.sigma_thresh = t), e.interpreter.setSigmaThreshold(t)
          }),
          (e.prototype.setMerger = function(t) {
            E[this._pid].merger = t
          }),
          (e.prototype.setInterpreter = function(t) {
            var e = E[this._pid]
            ;(e.interpreter = t),
              t.setMultiplicityErrorThreshold(
                e.mult_error_thresh_e,
                e.mult_error_thresh_ne
              ),
              t.setChoiceErrorThreshold(e.choice_error_thresh),
              t.setSigmaThreshold(e.sigma_thresh)
          }),
          (e.prototype.resetLastScan = function() {
            var t = E[this._pid]
            ;(t.fired = !1), (t.scanQ = [])
          }),
          e
        )
      })(f.ClassTS)
      t.exports = D
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        return t ? new Date().valueOf() - t.valueOf() : 1 / 0
      }
      var i =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        o = n(0),
        s = n(3),
        a = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (
              (n.scanManager = e),
              (n.lastResult = null),
              (n.lastSuccess = null),
              (n.queue = []),
              n.scanManager.bind('processScanResult', n.onProcessScanResult, n),
              (n.intervalId = setInterval(function() {
                r(n.lastResult) > 5e3 && n.reset()
              }, 1e3)),
              n
            )
          }
          return (
            i(e, t),
            (e.prototype.shutdown = function() {
              clearInterval(this.intervalId)
            }),
            (e.prototype.reset = function() {
              this.queue = []
            }),
            (e.prototype.reportProblem = function(t, e, n) {
              this.reset(),
                this.trigger('problem', { type: t, message: e, data: n })
            }),
            (e.prototype.onProcessScanResult = function(t, e) {
              ;(this.lastResult = new Date()),
                'success' == t &&
                  ((this.queue = []), (this.lastSuccess = new Date()))
              var n = []
              o.each(this.queue, function(t) {
                r(t.time) < 6e4 && n.push(t)
              }),
                (this.queue = n),
                this.queue.push({ result: t, time: new Date() })
              var i
              switch (t) {
                case 'paused':
                case 'config':
                  break
                case 'examLength':
                  o.filter(this.queue, function(t) {
                    return 'examLength' == t.result
                  }).length > 3 &&
                    ((i =
                      'This form does not appear to be long enough for the exam length.'),
                    this.reportProblem('examLength', i))
                  break
                case 'alreadyProcessed':
                  r(this.lastSuccess) > 5e3 &&
                    ((i =
                      'You have already scanned this form.  GradeCam will not scan the same form two times in a row.'),
                    this.reportProblem('duplicateId', i))
                  break
                case 'needHighRes':
                  r(this.lastSuccess) > 8e3 &&
                    ((i =
                      'GradeCam is having difficulty getting high resolution images from the camera. Clips may not work.'),
                    this.reportProblem('cannotHighRes', i))
                  break
                case 'structure':
                  var s = o.filter(this.queue, function(t) {
                    return 'structure' == t.result
                  })
                  new Date() - s[0].time > 6e3 &&
                    s.length > 10 &&
                    s.length / this.queue.length > 0.7 &&
                    ((i =
                      'GradeCam is having difficulty reading this form.  Check the form position, lighting, camera focus, and camera zoom.'),
                    this.reportProblem('badStructure', i),
                    this.trigger('enableHighRes', 3e3))
                  break
                case 'networkError':
                  this.reportProblem(
                    'networkError',
                    'Could not reach ' +
                      e.domain +
                      '; check your internet connection and firewall settings.',
                    e
                  ),
                    console && console.error && console.error(e.error)
              }
            }),
            e
          )
        })(s.ClassTS)
      t.exports = a
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        i =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        s = n(54),
        a = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (
              (e.parentGetFormDescription = s.prototype.getFormDescription), e
            )
          }
          return (
            r(e, t),
            (e.prototype.getFormDescription = function(t) {
              return i(this, void 0, void 0, function() {
                var e, n, r, i
                return o(this, function(o) {
                  switch (o.label) {
                    case 0:
                      return [4, this.parentGetFormDescription(t)]
                    case 1:
                      if (!(e = o.sent())) return [2, null]
                      for (n = 0, r = e.blocks; n < r.length; n++)
                        (i = r[n]), 'ids' === i.form_area && (i.ignore = !0)
                      return [2, e]
                  }
                })
              })
            }),
            e
          )
        })(s)
      t.exports = a
    },
    function(t, e, n) {
      'use strict'
      var r =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        i =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        s = n(0),
        a = n(55),
        c = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (
              (e.parentGetFormDescription = a.prototype.getFormDescription), e
            )
          }
          return (
            r(e, t),
            (e.prototype.getFormDescription = function(t) {
              return i(this, void 0, void 0, function() {
                var e, n
                return o(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.parentGetFormDescription(t)]
                    case 1:
                      return (e = r.sent())
                        ? ((n = s.filter(e.blocks, function(t) {
                            return 'Score' === t.label
                          })),
                          1 !== n.length
                            ? [2, null]
                            : ((n[0].ignore = !0), [2, e]))
                        : [2, null]
                  }
                })
              })
            }),
            e
          )
        })(a)
      t.exports = c
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        return t
          ? 'questions' === t.type
            ? new u.FormDescription.QuestionBlockDescription(t)
            : 'number' === t.type
            ? new u.FormDescription.NumberBlockDescription(t)
            : null
          : null
      }
      function i(t, e) {
        return !!l.matchBlocks(e.blocks, t.blocks)
      }
      var o =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }
            return function(e, n) {
              function r() {
                this.constructor = e
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()))
            }
          })(),
        s =
          (this && this.__awaiter) ||
          function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
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
                t.done
                  ? i(t.value)
                  : new n(function(e) {
                      e(t.value)
                    }).then(s, a)
              }
              c((r = r.apply(t, e || [])).next())
            })
          },
        a =
          (this && this.__generator) ||
          function(t, e) {
            function n(t) {
              return function(e) {
                return r([t, e])
              }
            }
            function r(n) {
              if (i) throw new TypeError('Generator is already executing.')
              for (; c; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s = o[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) &&
                      !(s = s.call(o, n[1])).done)
                  )
                    return s
                  switch (((o = 0), s && (n = [0, s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n
                      break
                    case 4:
                      return c.label++, { value: n[1], done: !1 }
                    case 5:
                      c.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = c.ops.pop()), c.trys.pop()
                      continue
                    default:
                      if (
                        ((s = c.trys),
                        !(s = s.length > 0 && s[s.length - 1]) &&
                          (6 === n[0] || 2 === n[0]))
                      ) {
                        c = 0
                        continue
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        c.label = n[1]
                        break
                      }
                      if (6 === n[0] && c.label < s[1]) {
                        ;(c.label = s[1]), (s = n)
                        break
                      }
                      if (s && c.label < s[2]) {
                        ;(c.label = s[2]), c.ops.push(n)
                        break
                      }
                      s[2] && c.ops.pop(), c.trys.pop()
                      continue
                  }
                  n = e.call(t, c)
                } catch (t) {
                  ;(n = [6, t]), (o = 0)
                } finally {
                  i = s = 0
                }
              if (5 & n[0]) throw n[1]
              return { value: n[0] ? n[1] : void 0, done: !0 }
            }
            var i,
              o,
              s,
              a,
              c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1]
                  return s[1]
                },
                trys: [],
                ops: []
              }
            return (
              (a = { next: n(0), throw: n(1), return: n(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this
                }),
              a
            )
          },
        c = n(28),
        u = n(4),
        l = n(56),
        p = n(0),
        f = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            o(e, t),
            (e.prototype.getFormDescription = function(t) {
              return s(this, void 0, void 0, function() {
                var e, n, o
                return a(this, function(s) {
                  return (
                    (e = this.formMode.custom_form_description),
                    p.isArray(e)
                      ? ((n = p.map(e, function(t) {
                          return new u.FormDescription({
                            blocks: p.map(t.blocks, r)
                          })
                        })),
                        [
                          2,
                          p.find(n, function(e) {
                            return i(t, e)
                          })
                        ])
                      : ((o = new u.FormDescription({
                          blocks: p.map(e.blocks, r)
                        })),
                        i(t, o) ? [2, o] : [2, null])
                  )
                })
              })
            }),
            e
          )
        })(c)
      t.exports = f
    },
    function(t, e, n) {
      'use strict'
      function r(t) {
        switch (t.type) {
          case 'exam':
            return new o(t)
          case 'answerkey':
            return new i(t)
          case 'score':
            return new s(t)
          case 'credit':
            return new a(t)
          case 'custom':
            return new c(t)
          default:
            throw 'Unimplemented form type'
        }
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(149),
        o = n(54),
        s = n(55),
        a = n(150),
        c = n(151)
      e.createFromMode = r
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAolBMVEVHcEwZGRkEBAQCAgIDAwMGBgZnZ2cAAAACAgIBAQEKCgoYGBgQEBAVFRUCAgIJCQkGBgYPDw8UFBQEBAQMDAwDAwMBAQEkJCQeHh4NDQ0FBQUAAAD///+RkZLz9PSurq97e3zr6+tnaGnExMW+vr62trf5+vpaWltNTU0TExSkpKWLi4szMzPj4+Tb29w7OzyEhISYmJpxcXMhISKWl5jV1dUePHOQAAAAGnRSTlMAMtvAlW0E+unykB4+D85aYp6Ko3uepkZT0JDSMJUAAAEjSURBVChTbVLpeoJADAwgcqn16vUNt5xClWr7/q/W7C6Xfp1fmQzJZEOIBqxcG87hY0mPWG4N2wLD2RzXc2G1wQR7OwmmSNRV3HTlXYSLuVAHiS9QRC2z174Vh9cvf0CRMjeluc5C4c9wAyyPlRdupTqFl1BJrbIygEDy7BbEuYxOPKBHmoNafpqUiR+myu8K7GlvoZIsEpXns4w7QCf2jyX7jkRH1TjnGYhHbCQLhMdJxRlnyQa6/2t2QKl8fiafgIejd55NvjNJw3G2CtjRktccqebx8J4Ll2hyn3e1nHEHXPLGO1jbg9MAdoFGanFIn4T+Dy04bLM+/1syM4ZrEBLaOMryphKhMZ2C6czuAC7N4Lm6pdL2QaNHeMdPB5bujvk/Ct40vbbR1voAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEVHcEwICAghISEGBgYCAgICAgIXFxcQEBAAAAADAwMHBwcMDAwBAQEDAwMVFRUGBgYJCQkNDQ0DAwMbGxsDAwMeHh4mJiYAAAD///+srK2CgoOzs7NMTEyUlJbp6ena2tstLS01NjdZWVq8vL2ampz8/PwNDQ0kJSW+vr+NjY1oaGj19fVzdHRBQUHLy8ugoKLR0dHKystfcdtvAAAAF3RSTlMAfRXF/Oo1T/fdmI3yoSvPaHK2HKcMeDIudIEAAAELSURBVBgZXcEFYsJQEEDBjSsubyMQCC61+1+uIT/Q0Bl58a2IcB7If8HUcwE3HVm29Awd/nhjeQlC4Fjml7w+0YilEwDHfK0Ph2IDDKQ1S2FT6dPhCozlYQqntfbcIZyJiA98a+tw09YWEhGJ4arGqtDWD0S2LCKo9OGcb3dqbHEtCVI22vrc5YUaOYxkGVJr5ytTo4BUEperdvaZGmcIZelSa2efqVFAKkHKVjv7TI0LRGJHuGs1VpkaJSQic8jVyHbaqly8oUgAx7W+KWEgjRF8aN8KGErDB8qbvqyARFoT4FSoUdWAIx2LxuaenYtLScNZyFPg0RNLj21FLi1v4Ms7e+KkhFHsS+cX9yksI9iulGYAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAArlBMVEVHcEwJCQkHBwcVFRUVFRUGBgYICAgBAQEBAQEeHh4XFxcICAgDAwMBAQEDAwMBAQEPDw8DAwMFBQXb29sDAwMDAwMVFRUICAgFBQUBAQElJSUAAAD///+LjI36+vouLi9kZGXZ2dp8fH1ERUWbm5z+/v6FhYasrK1zc3RRUVHr7OzV1dW0tLXDw8QJCQmUlJW9vb5dXV7t7e7LzMwRERLh4eLw8fFqa22fn6EfHyCch/qBAAAAG3RSTlMAzZJSN72F/fUTIlno66Llgt11A5fYdl9kr2BKWG3nAAABL0lEQVQYGV3BiWKaQBRA0acCM7jG7Ml9LIK44Zqt7f//WGeUWJpz5CqIJthx705+GIQjAxjbuY2lJejwz/BJrgYG+FgXyeL0B6crjR6wX2zUS5cZcC9nfQvZTBtVmgPP4oWQfWlLDjYWkQD2M/XS2Ua9KoNIRMawUu99dSjm6u1gGks8xXyq83b6VP21Uy/DPErPkqlXz1X191y9AkK5MZz0W5W/q1MtYShdw0obdT7XsyNYiQy5XhzynV4sYSSvllLPkkOljQV0pD9hv1HnWOhVibkReYFEne0qSZJFrU5tmPRFevDxpqpVlTqVOiXci8jdA5TaloDpixMA61SvEiCSs1sg2+pFvQZCaUQ4WbE8bpMSJ4zl22BES1da4ujB4JnhOJD/xY8di512A2n8BRLCNCssYm2yAAAAAElFTkSuQmCC'
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAn1BMVEVHcEwAAAABAQEEBAQKCgoODg4LCwsBAQEAAAADAwMVFRUpKSkDAwMHBwcMDAxEREQVFRUWFhYJCQkNDQ0EBAQfHx8cHBwAAAD///98fX7r6+uJiov09PS9vb40NDSampv7+/sNDQ1bW1uztLVOTk+Cg4Pg4OCTk5TOzs8oKClERESpqqpra2zGxscaGhva2tpfYGFxcXPR0dFvb3GgoaFnF5xyAAAAF3RSTlMA9fvMi1t66v3eKxKhu7YHGjlEYZJQajpxMggAAAEqSURBVBgZXcGHdptQEEDBBVFlFVziu4+OenNN/v/bwkoyh2RGBo9BjDf7Jf8L57EPJN4kepCRxwmDJA5lEPpAt3HFdvVOL5C7EOiKXE17PgKBXE19qHf6o1wBoZgJ1KWOfEL8ICJP0O3UlB+5mvYIkYjMwKmpvvauUVNBupQspcu1l69y1d8HNUf8Zwk9ajV5papFpeYLFvLic9GbdrcuSjV/IJV5gtObcv/pWjVriGWWcNFB0ag5QyqvPic11ZuqHrZqHMxlGtOV2nu7tKpurabGj0Tm0Khp3N41ag6QZiIhvJdq8o9cr07wIiLLFDY6tgU/k94TsGp1UACRXEVAXenN9wZYyF1Ar3bnal2c6C2W8uM5ZiSQkSxIfUwSz6byryyaeHhpMJW7v8IsLSNYs/lZAAAAAElFTkSuQmCC'
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAsVBMVEVHcEwGBgYBAQEICAgLCwsPDw8CAgIAAAAEBAQAAAACAgIICAgREREbGxsVFRUQEBA4ODgEBAQZGRkGBgYFBQUBAQEBAQEZGRlDQ0MBAQEbGxsXFxcXFxcAAAD///9/f4CampuIiIn39/dWV1jj4+T7+/s/Pz80NDTt7e6+vr7z8/N3eHkRERGxsbFNTU1hYmMjIyTp6epubnAcHByhoqKQkJHIyMmoqKnNzc7U1dXY2NknHyvLAAAAHXRSTlMA0qyEjHXr/fry5WFMGy9VDdo9Zpu9yCcH3Wq4rCsAZDQAAAEqSURBVBgZXcGJYppAFEDRB4ID7mZP2vuGLS6IS8zW9v8/rMxIjek5cnYV9UlvRvK/4W3fGDDpXTyTC1cBXwZTObs2QLOzuS1fafWkMwSa95U6xdsB6Ik3MbCo9J+6BKbiBLAs9EIJ/ZmIjKCp9KR+1lZxgFhEQsj1pCpX6mwheJD7Ac1KvcLuX9Q7kEzlKWGhJ9k6r9Q7wk8JDUf1PnK1lXoZBHJnsOrUm0LtSr1PeJTQsFHHZn9+H9e1OhnMJU7YqfOZZdk+r9TZwA+Z9GkK7Wxq9ZYkTyK38Kad9xd1PmA+ExnCa6HfLCASkYcBlHrJQjKW1gjYP+uZBWLxesByrSe/dkAonYjW0m7X23xBK5Sz65QvpicXxtGjwTGDm4l8N46DlHQe3UvnL9s/N1hwZHMaAAAAAElFTkSuQmCC'
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAArlBMVEVHcEwDAwNEREQLCwsFBQUXFxcCAgIBAQECAgIAAAAXFxcEBAQaGhoBAQEHBwcPDw8GBgYSEhIdHR0CAgICAgICAgIQEBANDQ0VFRUAAAD////29vbb29x6e3y0tLWdnZ78/fzj4+NdXV+Xl5ilpqcODg6KioqSk5RLTEzv8PCFhYZnZ2i+vr43Nzhyc3Tg4OAmJicxMTGAgIFVVVXFxsbp6ekbGxzP0NE+Pj7Mzc2SCQk9AAAAGHRSTlMA5AdbmTbK/u38Qdkg9mehcoMRqo+5jtZvH155AAABNElEQVQYGV3BB3aCUBRAwYcCH1QsKebcRxGxoFiTaMr+Nxa+sSUzcuUN/Kg9bMl/zecgNMaEgd9vyJ2Wz43TlKuuAWaLbZW+f1B7krMuMKuOasXTPeDKiQdsdnoRF0BXrDZsYr2zgqgjIk2YjbUWJ0myy7X2Ck8i8gxztcp0Uo5yrR3A6YgXMFuqlS71YoMZyCBkoVZcaaxnFbxI25CqNS4mVfqtJxlEAszVGk+WmhRjtdaABIY3vRpN1cogFDekUOvzqKrTkVolONKK+Mi1Nt2qxqtErQX0pOFDprW8fCvTTK2dIfBE+rDP1VomsZ68w6OIPASw0nsjwJNaE9jqzQRw5cQFNgf9lRSA35BfPWpfVbZelwsD+A9y0Y84Mwbchtx0XCfEMsGjJ391hu0Q4/Q8OfsBiawxhvjN+GEAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAnFBMVEVHcEwWFhYICAgCAgIEBAQICAgaGhoDAwMBAQESEhIODg4CAgIGBgYBAQEREREFBQUvLy8BAQEuLi4MDAwDAwMlJSUnJycAAAD////39/d8fX7Hx8fe3t6FhYa0tLRWVlbp6emTk5RmZmdhYmN2dng1NTXt7e4fHyCcnZ3T09S/v7+7u7wqKyuhoaJERET7+/ttbW8SEhKoqKhMTE1AaAzBAAAAF3RSTlMALIXpx5QY/fFKda3W3j1fDvUFp5l8dEOaiJkAAAEtSURBVBgZXcEHQttAFEXRb6uM5G5Icp+63DuQZP97i0aAcTjH7gajMJlGqX2XjgMHuCQcLezBIORLMLe7dAm4l22VNwc6kX1IHbi8lJf9uQKR9eIEDid9yjbA3LwxHFo9WMMyNrMBUMjLyky9HQzNLIK1vMt2tT3LK2Aa22ICJ3XKdaZ2ncnb4UaWJlzlrWpJ2au8CkL75Wjk5cWtOmbq1ZDY0LGWt30r2jp/lXeGpf10NPI2N0n5SV4NiaVLdvLyWlJVyFvBxOIprlWneJPazV7eX4jMxlDJu+WrbSGvdAQDsxR+7+Xty0y9Bp6tM4EXPToCA+vMgCbT3RGIrDcCrhe9KzdA+GTvhnR2VX2+rBoHhAv7NA948OPJvsTDqaMXjGf2v3g4cRA8z+zDPyozLRV5WPNrAAAAAElFTkSuQmCC'
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAnFBMVEVHcEwCAgINDQ0PDw8ICAgEBAQBAQEBAQECAgIZGRkRERErKysUFBQDAwMBAQEPDw8EBAQICAggICCUlJQWFhYNDQ0MDAwAAAD///9xcXNcXF2UlJWIiInu7u7V1dX29vYnJyexsrKkpKYJCQl8fH27vLwyMzPi4uL8/Pzc3NxCQkO/v79NTk7k5OX+/v6CgoMYGBhTU1NoaGnl5eXn+TpTAAAAF3RSTlMAw1CCi9v1/OclXQ068a9wkp8VA0S+0O+NuqkAAAEdSURBVBgZXcGHQqNQFEXRQygP0ou6Ly29q7H9/78NAZKJrqW7ZORF4fhJf3WGsQPcwBv19CDx+C/u6q4TAZtzWmy/PqkEanWAzfbdrhbrJRColkSwnFvrssiArq6eYVnagwwGU0l9cHMzu/wcDof30syOS/AlTSC1yvHjO02z1Co7CHuahnCym+3crva4kToRe7tZr622hWf5jswalzI9Wm0NscaO1Fr5yho7iBQ4vq2xSBfWWEGsbsTZGq+FtQp4URKzKa1WrKx1xvnSEHKrFXNrnCBOpA58lvbLG0wkzUJ4s0c5kKjyBGRHu8uBQDUf2O+sccoAT62Ayv5j9brLvzaA19NNd8CD8Ux3s2kQOmrxsK/fEj90uHjSV+sf9tItRh00e9IAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAq1BMVEVHcEwEBAQDAwMCAgIYGBgLCwsGBgYNDQ0CAgIBAQEaGhoAAAADAwMoKCgCAgICAgIQEBAVFRUqKioEBAQCAgIeHh4CAgIKCgoAAAAXFxcAAAD///98fH319fXa2tqen5++vr7w8PCIiIn8/PwMDAxISEh0dHU5OTqPkJGBgoOnqKjFxcZsbW5WVlcqKyu0tbZlZmfo6Oivr7GTk5RUVFQaGhrT09QjIyOUlJT33TJYAAAAGnRSTlMAkODqIYe4VP34M/3EC9fjemIGafFCpaDLxr6/SJEAAAEzSURBVBgZXcEHYtpQFEXBJ1Cl455z1RC9N5fsf2XhKxiTzNhNa/CW9IJn+18UNhMgfuo8du1Oq8OPRmQ3UQJMprMqff/gIrCrCJgsj3Ky4gsIrOYnsMv1bbQFInM6sBvpzhaaXTN7hkkuZ5RncsZfMDCzF5jJOaXn5VrOHnpd8xvER13km7GyzUjOjmRoUcJczjqVtDnKmUFoXsxBznhxXleFagXthoVtUjnjxXKVrlTbQ9Ne22zknBaS0rWcFfRtmDCVU5WSVoWcJfwyv8kk00U5k7LDp5w58cAshEJOkZ7Tk5xP6PtmQ/jI5IzyTLUpeGb20IB33asg9u0iAg5j3SyAwGoBMC/1V74FQrvyuJhX+7L8PY2BsGvfHp+449kd32vE1JovLfuXH/Ri2v3Xll39AaqMMxSlfLC5AAAAAElFTkSuQmCC'
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAq1BMVEVHcEwREREBAQEJCQkKCgoHBwcCAgIAAAADAwMMDAwfHx85OTkJCQkVFRUYGBgDAwMDAwMODg4KCgoEBAQCAgJeXl4WFhYCAgIkJCQAAAD///+IiIns7O1mZmgcHB3z8/NPUFDc3N34+PiBgYKVlZYMDAy4ubk9Pj52d3h6enylpqa9vb4xMTKam5zh4eKQkJL7+/tJSUnHx8esrK3R0dKxsbNubnBdXV6enp54suHdAAAAGHRSTlMAZvh8jLvL/NtTIQyYMDXmsHKl4+kFRe0D+AfOAAABM0lEQVQYGV3BB3ajQBBAwQYBA8qS0/tNDsrR2fc/2TKsbLNbJT8mg8ANvUf5X+TfGwzmyXdG0jMN+BVG8sMxwOp5G++KjNZAbiJgFSdq5acMGEhnYuBY6rekACKxAjjm2lPAbCQij7A6q5WXuVpVBgsRmUOt1vvusl2r9QrBgwxnrBJtlWmleVqqleFG4rhs1Ho9qWpzUiuFpSwNH2qtL6pa12o1EEpgqNXKPw7JIY3V2kMoc8NWO0kTvx9itb4glIWhUKu6qmqzV2sLvkyfyCptndOrntNErSOuI+LDXq397rJ7U+sFwpGIA1mlVlJetbMBT0RGM/jUvhrcobQiINVfMTCQjgdsXvSvtwKYy82Y1iZeH9bNMy3/Qb4tXHo86RmO7wyd++VE/jX0QoO5G0/l5g/6vDGgA7kI9wAAAABJRU5ErkJggg=='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAnFBMVEVHcEwEBAQODg4ZGRkBAQEGBgYGBgYBAQEBAQENDQ0GBgYYGBgJCQkDAwMUFBQwMDAREREBAQELCwsDAwMeHh4AAAD///+BgYLQ0NELCwuSk5OKiou9vb16ens0NDX8/P1UVVWdnp/19vbn5+hGRkj5+fonJydnZ2nZ2dpLS0ytra7j4+SysrO4ubleXl5xcXLu7+/Cw8MpKSkdHR5iZUULAAAAFXRSTlMAknMX9r3Q7vyDTzGd4SYOW9c9qksl2Pc+AAABKklEQVQYGV3Bh2KaYBiG0U8BAbdJnpch4t4z7f3fW+HXWNpz7G301W7FY8/+99Gf+FEU+YPPrjUNA/7qfNhbN6RSLu63MqPStpculftBtfM0A2Jzhj7sUv1YH4Gx1Trw66GGBYSemXUhO8g5z1Xb7iA2swASOevNVU4BA896IdlDznKZ6Kkkii2O2MhZ3ZWkchLo2ARmcq65iqmcC/gGTOUkZ+m+Uu0bsBAS1dbH2SzZFKpdIbJ+xE21ZZ6m6WWmWg4D+/L5PZe02j9U2R9UOULfrAMnSd9T1U5LSeeMsGfWht1c2uppK2kBn2Y2CuGmphzoWWUM7Od6y4GWOS2gLPSULoDAXlpUytmpuEw3VIKR/WiHNLSswYsnEbVo0O/Zv7x2EPphJx7ayx9I4yr7pHSeAgAAAABJRU5ErkJggg=='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAApVBMVEVHcEwBAQECAgIEBAQlJSUCAgIDAwMUFBQBAQEBAQEYGBgTExMHBwcEBAQICAgICAgSEhIGBgYhISEBAQEdHR0/Pz8eHh4TExMXFxcAAAD////39/e8vL1UVFWNjY95eXrX19fc3N1paWsVFRWxsrJMTU3Q0NDAwcJcXF1hYWJwcHHp6emhoqMICAknKCnJycotLS6Xl5iFhYbv7+9AQEGnp6g5Ojr8iO5qAAAAGXRSTlMA9o+iD+PSMPzudkbEeFOAj9sXq28KWcMgce+g2QAAATlJREFUGBldwQdi2kAQQNERqKzorsmfVaUjqh079z9aRgRjJe/J3ctw0Ju+/pT/Jb04dc4F0dNEuh77fIuHcpdEmEve7D6OmLHcJAGwPWtrXyyAqVyFESwy/bJfARNp9WFRa0cOaSgiCbBRVV9XVeXV+BNMRaQHWzXnVVk2242aDB5CeYlhrSYrVLXeeTUX3ECGKSdtZYWa+S81JYzk2ZFra1NW1br41NYSUpk5dto652XZ5AdtZRDIwLHVVlaoqp9v1GSQymvAb21lhZrDQU0BD/IYcdyryd699/VurWYFM5EneFezzptmPl+qqY+kicgQFns13uhVDn0xMXxo1xuQiEmA3OvdG9CTqwFwWupfVQ6M5GaMuZSf2bJYOWAUypdJREdPOsJx7Gi5qJ/Iv8LnH2mQxrNEbv4AhMYw4x/UuzcAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlPM0jRW/QAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAkFBMVEVHcEwLCwsCAgIXFxcFBQUXFxcDAwMBAQECAgIAAAAEBAQFBQUJCQkBAQEHBwc8PDwCAgIsLCwPDw8FBQUTExMVFRUfHx8XFxcAAAD///+Hh4dZWVo1NTUODg5LTExpaWn7+/u8vLz09PSysrPExMV5enqbm5vj4+Pd3d4mJieUlJU8PDyjo6To6OgdHR4aGhrzzaWYAAAAGHRSTlMAW7FBmTbk/u382c909mcFxw+hj4ckHI3KZMAWAAAA8ElEQVQYGV3BB2KCUBRFwQsCHxDsmvMAe9eU/e8udoUZvYRZO0+HLTV5fpw455K4l/X1odXmLfL00nHAdLYttuUfF0M9dIBp8WNXq+8jEOgmBKqDPa1KoKOrFKqFfZhDPpHkwXRvNRUMJflQWN0GoonCmOnKGircSKOEmTUV0Fbq2FrTGnIBhTVtAMWOwpqWkChIKK3pBJFaOb8La5jBQN02rK1u74hDKYPjwmpK8CX1Y5jbpx0Q6sIDN7e3HRDoJgB33tjdoQR6Xd0NuDgX6+XyNHNAr6+nLOfJQdDV2ziIEq5c7IeqG3+lCS4ahHr4B0EdLNo5h3IEAAAAAElFTkSuQmCC'
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAARVBMVEVHcEwZGRkBAQECAgIICAgGBgZnZ2cCAgIHBwcAAAAWFhYGBgYCAgIYGBgVFRUDAwMGBgYGBgYJCQkUFBQMDAweHh4AAABdNO1sAAAAFnRSTlMAMvTAnG0E65H6QNngHg+kzWJaintTwpRzYAAAAI1JREFUGBl1wQUWgzAURcGbEMVrb/9LLYca8jvDV1uy/PRI7KVLk6sWfr6PbLSdfvKFr6i9wFvUUWDV6iyySJ3O6gBcZSlAI0s/4LJMN25Vpo5etor+IctWCbL1tF6mQJplyQ6iLBMwZhkci6vOCquioybxErTXjHxEr43CxlD6qlWeHHvDffaqXXG8PQFy7ycWQVerrAAAAABJRU5ErkJggg=='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAqFBMVEVHcEwBAQE2NjYBAQECAgIKCgoMDAwBAQENDQ0DAwMCAgIXFxcBAQEREREZGRkODg4ZGRkWFhYfHx8FBQUKCgoQEBADAwMBAQEAAAD///+Jiovj5OT4+Pjb29tkZGW0tLVeXmCWlpf+/v7IyMmPj5DU1NRsbG5WVlerq6zw8PB3d3mkpaa7u7xNTU4cHB2/v8ARERFGRkdzc3UrKyt8fH7s7Ow9Pj4vLy9B5GTYAAAAGHRSTlMA5wz1lryI/XT71zbqUB6AXyoTqdFC4vGIw/wOAAABNElEQVQYGV3BBWLCABAEwIsLEry7cYK7Vf7/s14ohbQz8mSOfTvqdeW/lh2+BZ5nTYYdaeoO8TIay1PLgLqtluVnAOXLQ8sCkC9YS+IzgEjuBm3geGLFH8kF8DpSGwLHjA0HoG2KSAvAjKqarU8pVXoEfBGxgZwqK9+n72VGVQChKWYIZCTTck9yttpQ3RD0pGPhi2q/ZW2XUF0BR6IAJdV0zZcdYIjt4UoVF3zZA5a4HnKq6Y615INkVQBt6QX4pJotWcsXVDEwkq6B84ZktZxWTOOYtQs8V8QB5lSba75dziuqzIPRFekA5w1ryeKDdwfAFhUCBzbNAa8vagxglfJpDsCVOx/AreCPxQqAIw8R1Nd2fSriC5Rjyq+egQZXGgZRGKDmTey+/DXwnbb1NnL78vANaacwIF6Sl5kAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAArlBMVEVHcEwMDAwBAQEDAwMeHh4BAQEBAQEBAQECAgICAgIJCQkXFxcEBAQEBAQLCwsQEBAMDAwDAwM9PT0JCQkREREKCgoWFhYfHx8VFRUjIyMAAAD///++vr+JiYr4+Pjz9PRvb3DW1tbi4uMeHh9EREVZWVqtra51dXf8/PzQ0NFsbG1jZGbc3NxQUFG8vLyDg4R7e3yPj5HIyMgQEBGenp8uLi86Ojs0NDXHx8ebm5yqxCvnAAAAGnRSTlMAbeutGPWY+/7hhybTfzhIx7gJTUBcfVqzexggntcAAAE+SURBVBgZXcGJQoJAFAXQBwIzuGuLdS8wyKa4t9f//1gzZmqdI2fT0WN0Pwvkv2HUD5VWYdy5kWtBBxfjoZzd+rDe6rx+1wC0Jye3CsCqpVPsXwB4chT4QPnJX0UFYCTOBCgLXiwrIJ6KyBDQLclsM5/PDS1TAp6IREBO63N7WCzWT7QaoD+VIIYuaO2eSJr8lVaJcCazEB90kpSWWWckV8CDdBXWdJKUzmJD8hWIZaJxoJOkdBYtyQbwJdLI6SQpnbwg2QCxeAoVnSSltVkvSe6BsfR8vBhau32Wmec6ofUOdS8yAb5otXW+WuUJrRaIA5E7oDS0MmMyHlVAJFYMbHktBVRPrBGg64xnKYCBHA0AvO34o90C6MhJF9bHoUmatILVkbM7Hxe6K1eCQV/BUXHUk78Cb+yHfr/bk5NvpqYyZUl1zagAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAApVBMVEVHcEwBAQEVFRUICAggICAKCgoJCQkBAQICAgIODg4GBwcXFxcICAgBAQETExMuLi4KCgoVFRUGBgYBAQEGBgYEBAQBAQEEBAQICAgAAAAbGxsAAAD////39/fW1taVlZdubm94eHmjo6RXV1j6+/s0NDWysrPv7++AgIBiYmMjIyPMzM08PT2tra4YGBl3d3ff399AQUGFhYbn5+e+vr6dnZ1ISEk16CT3AAAAG3RSTlMA9CKDGEPL/eBm/FGl7jULtXjZrIzB7JZ0koHGlhbqAAABKklEQVQYGV3BiWLBQBRA0RcSk8ROdbuPbBI7bdH//7TOKKE9R2r99vDtve3Lf72XkWeM8cJOII8aA+4mPakFXayySFelAUwkVwFWOlPnYxkDkVw0PFhv9OZjCwTiTGC90Lv5J4R9EQnAzFR1MXOOqrrYQyQiHTiolRdZlqWVWjm0RPyQ+KhWUunNfI/Xlihmq05SaW0FHekYUnXOycyaq5NgRtIyLNXJiyw7ZAt1cghlYDiok1RaO8NIhoZCnWSntQwG0ntmP1UryafWXJ2SOBKZQK7WrkjTdJWotYHQF4lgPVVreqHWFp5EpB9CoY+WEPtitYGV3n0Br3LRBMqT/tp8A2O5esIql7tT9fWJNZZa1OUubsoDvzmKcUz40pC//OHk2eu2mg25+gHX+zMpWs/MjgAAAABJRU5ErkJggg=='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAk1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////4+Pj+/v719faTk5SMjI3KysorKytycnNCQkJhYWLOzs8XFxfX19eAgIBOTk5YWFjs7Oze3t5ra2ysrKy2trbCwsO7u7ugoKEMDAyXS/wiAAAAFXRSTlMAFgqR2Ydx5/sz9rlGzfGffGElU6jH19H6AAABIElEQVQYGV3BB3bCMBBAwXUvdMj7i2XjQm8p9z9dJIIdkhkZ+OM4mq88+S8LJtM0TfPwbSyvvBm/JpkMsgSrPnanGieWpywHTht1LocvIJYHL4Hdh/YuLTAW5w12e/1VtJD4IpIB76paXDbWtlA1O4hFJIBOrXVXlWX5WajqDUJf/BD2aplGBzXpQlY5tTqmKbTXwEiilJM65vq+3W7O6nxCIkHKVZ11V5VltVXnDlOJUjp1TKODGySyyGnVMY3R3gEmskz4OqtlrkZ7LUQiIyjVMoe1Pu0hWYqsYHdWq9DeEWZihXDUVxWwFGsMnNY6qIBIHuZAfdcf+yMwkqcIqz7cPu5VizXypbdIeBHIC28epjwks0z+8uLJNJ+GQSZP35zgK4C9S+7KAAAAAElFTkSuQmCC'
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAAUCAMAAAC9FTMqAAACMVBMVEVHcEyLi4vj4+NjY2N0dHRcXFxwcHB2dnZycnKTk5P09PSioqL///9+fn6jo6P29vaJiYltbW3Z2dmfn5/BwcH39/dWVlbJycn///+EhITCwsJubm739/fGxsbNzc2Ojo7e3t5iYmL////v7+/t7e35+fn+/v60tLT///////+/v7/BwcHZ2dn///8JCQmTk5O2trbl5eXY2Nj////v7+99fX3v7+/MzMzR0dHX19eIiIje3t7Dw8Ompqbw8PDT09Pk5OTw8PCKiop5eXnFxcXIyMjV1dWvr6/S0tKbm5uZmZl+fn7U1NT7+/v+/v7W1tYPDw+Tk5Obm5vOzs6Li4vX19e9vb20tLSurq60tLSYmJipqam5ubno6OjR0dGysrKenp6zs7P///+mpqaamprp6end3d16enqxsbFeXl47Ozvr6+twcHDExMS9vb2fn5/5+fnFxcWnp6f///+lpaXY2Nienp53d3eLi4tHR0dOTk5BQUGAgIC8vLy2trbDw8OFhYWBgYHZ2dnJycmgoKDLy8vT09OxsbGXl5evr6/X19fFxcWUlJRycnKIiIi5ubmLi4upqanPz8/Hx8ehoaGOjo6RkZGysrKkpKSfn5/KysqdnZ2rq6v///99fX2tra3w8PCTk5Ozs7NjY2Pm5uaamprf39++vr5paWmnp6fBwcEoKCh2dna1tbXd3d35+flvb29VVVVHR0deXl7r6+tcXFxRUVEaGhozMzN4eHgAAAC6OHIwAAAAfHRSTlMAIf0aWwcqLwOt/hFZJggIp0ISLeepEu9lnzI10tf2rYUmT+tjF5odST/Q9vR6R8Z9m0M3IHRy4OjOjdqu1L74rN69hell3DjAkuJl7Ya0qSjV2dQ2/aLD7UShkuI3y+Cs7lLAwOb6mtTYvoZPg4XjwlTpJeRrz+fwyc3DFOIWQAAABVZJREFUSMe1lldX21gQgK+xjSkmQEINvYSQACEQCEmo6b1veu9le29HsiQso+omy5aRcRe2ZGOaKdlft5JNcvYlJ/vCPN2ZM3O/OVN0BUBOBq82VTVdPV0Etl12nsNlOxsULUd3bzdq71Ga3dzY3EwtJ3o/wYrMXdXVrTs+FzLQVd36H/1nc19f+57/wTqHx1IbMV8AWVlRzuzM27obFQ9qrS39TMhuhSePfNL2dBVwEDT96vIXe/CjTU6llrk4ZiFSdurbnK09zsdiH8SRz7H2RJekm5+UxgSPBoOol75S/gXWGI2mVjwL0HwcWltWbmq5DXWgMQ9Gw7/kWeX76uqGwJC57lC+vd3mPjrtaQLlh8yH1Do0zgQlDsM4Ig1NlJd31+0r3wrqVquq6t07P6JKRxLplSCHbNLhwOr6wqTasd0D8JoQf3Hx7K6ch/k4FbJN9RXQ0K0fVFrfK7fPIbPi4+7GW9St4+2dOOrJ9Dx92lMQwqGrxyk602hWK9OYoamOuuea3nH4Y5traXY5EseW/fL62jJkuwdA6yWnff4YAJe7rlRXV19xI6sr9NwCuxqLRQqed1nSq8kY+0Eoweyrq0nEtijz1J02ANpelFSNZBgUQf3z7eYCP4qiDJWRVF2iLm8NfBXGp8RMPLD2z8o6i9Fn1WFR0FBTESijrIREkBjC+izZ2SRicQtJZtHGBiEcDwXJuJ11WZg0Ou+BJwu1m2rejMUjES6jOIlwWLJDGY5gJK+SoXlvfDA/NndsXGrdI61srC+lothDtUVNDmdgDICyXtHptDMCAuNvXxNO/Nk45kLU8cSbX75122fIIDyHOZHpLGE5ulWjKYfXzf1GKTzHOTlqvNkmMfjk+DQXoce+yjkcdOGOjc1YMra2Ibvl26pl/6xoHVWLMqvgsxG/JGUMZQrjq9UZ77sZIUJeagBlEBGVvWEKsXO1zR7faB7V2SsHmiuLhjE5RArUsLGymfRkLhoNr12+M6fzw/HEb5tFl1fX0hAlB9QSgge1kJOrLgeG8720nSatk0V7aTGgJn9PEWWJPFMEHuFeiBQVhsFLmqpIHs81v3U+LvjVrdtRq7EsOjVpUp7UgdIjLvnId/l07j3zcJglmqDcgiuHb7hvY/jE6OFfHzvsYtZFNJeW0iGnMtU5RfNwFIEmDo+GUJxz8hIWhqF5Ny/ZBgYHB3CChhFlorO1VwyQfmUX2LHf5Wk2qdMnyCMHt8p8WySssOIQGGk8vwr6u7h9yRsK8CxDYwTSowMvcfSD1RUSgyEKSYukd0mYxYk0v2Bl7bjb4uSjFsXH8xbKj8iwY4FRPRMaS7ZaVNYpj3AqzxqaoEIuwokgTs+MraMzZ6skFX+QZRHZcuFhJN2zCzSEEgybTC4tSbiDYJNBYbqinxaDySUpceGkgxPsXt4pc6Gf8IAXQey8K0BAGksQe0xAd0r0V+VYjzri2cWsbZqexcJzi9n41zlY4YkZMhqNBt7on0CwQx2iyhvwgmqIKtdP+Gai0VA9KDoRVS1wfxswfA9BMAxBNxr0/Q4IghwORUnAKuuuojgagA5WlIXz6qW6B5lsuKRkcXFxTpNwtir/sQCVJ1sqhk0AHCsurlfbDIwXW4o1MQBDRXF9pebyTUVxhUFbHP3J4uv9LcNG9Xkw1GtOLS3FFTpgVGMr9KBGNdUbNNb58NxcyTxmc7ttGfU4V1W41UW9qbBGDS4zmUxGTTcWmjTRa4e2vEuhqTC/ozWVBkNDTe4tynvlgrZiNVOhXmMdc7ihP9799ff793+++13Apy+Ubd9LWXPgwIFruZSAUX9NPW/bj8C/RMEeHm4BjAEAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAqFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADHx8cAAAAAAABaWloAAAAAAAD///+Hh4i7u7tgYGH6+vp9fX7r6+uPj5DR0dEaGhqjo6Ty8vLc3NyamppDQ0N2dndqamo1NTVUVFXIyMm1tbbAwMGsrKwtLS3f3+BNTU4ODg6wsLHh4eHW1tbfz7USAAAAGXRSTlMA2rYuhRfu+fbkCUbJn5F3O2FsV/qsH/QGW5RVeAAAATxJREFUGBldwQdi2gAQRcEVqCB6sZ28LwnRe3VJ7n+zLIQAzozd1RudsDOI7H/VdhAnLmg17Fn0ykOzanfdFHfeFbszLunZTTeB5MdLrVaTFuUn0LerKIZpXruQW2yBhl1UYPpLD8MVpHUz6wJ7uWE+O4zkRlPom1kLNnKTYnxYFke5GTR/WhTAQtK8mEga7d7lpiQDGyRs5U6ZLl5+y23g1dpQyGW5HpYQWAXWctlemqyz9UHuBKm1YCM3zqXhaD4by80gtX7CSi4vdVGO5UpoWjXmcy5pWHxJOn4s5bbQMavAUm60WY/L7DiTNIH0zawH07kuFvt3aShpBW0zq6ew07MMeDPXAIqh7jIgtKsQOOf6a/IBVOwmxG3LU/6VrXCVuv3Ti3kS2pMoDBKu0lbVvos6zTiJg3bVbv4As3AwwL1sigwAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAk1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////Z2dnv7+/8/Px3d3h+fn9xcXIzMzP39/eioqO4uLlmZmfj4+MgICBgYGGampvAwMAVFRU9PT2Li4tWVlbOzs7JyclKSkqvr6/p6en+/v7E7EWPAAAAFXRSTlMAQx2KqfHc/GUx0+eY9cN9CU+6dxaudFWIAAABIUlEQVQYGQXBiW7TQBQAwHm7jrOpLNdJoBL8/8chUWjI6cTHMgPAEMd83H8DEIBdXqdE+2xvFQiQ0h6A5/SADPHWo+83/TrTrGlGINqe7u03RJ5wGQlSHvT5BBDtyPUhMQz6egJQo7AMksiUq9z9hK4YDwfvo6zZ2V6IeqlYJ67bkWdKW1oAwPOg7lObHK+wLhAwLsqlmWt5gm0LMcOGNrW8gE2ttWYwMzflJsDzBjOAtLAHKUMFD7rmtXqVEQAQzpEeO38DKniHj1HtkhdNYV0XOP3AzPIZhunN908A2LycpzUbu+T+PlcAmxebu0A+UHYn4CN+8TUT0O1Q1uNYpvoHXzMClGUA4Fz+QQApcvRwbmJ5gAzUuk/j3XWZ0n0G/gN2eHc65HyvFgAAAABJRU5ErkJggg=='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAh1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////V1dV1dXcmJiZnZ2eIiIgwMDB9fX1VVVX19fX7+/sHBwfAwMBBQUHk5OTp6enJycmtra0RERE4ODiXl5caGhqwsLCmV0fdAAAAFXRSTlMAlkqI1yNa8f34b7/iej7No68YDS/3h8ObAAAA/klEQVQokWWS2XKDMAxFRYDYZs3S47ATkmZr+//f1wdMFrgvntGRrjyjKzJpv0r9dLWTuTIvUEZrFWyyj3q45aX46wVWCqDsqq4BMOsnAKgO1lprD8UAOBQaKK920qEBPRrGUF7sS30DgfMaRif73Y/PffTbQuu6C9dRQywSJgyXGenvqEwiw9nOiO3Ak1hTLEgNuSRQL8gPBJLr5wdmxNd0C1LBVjLF73FOSsxaJIfbtNiREwR7kQhKNzTNNuCLyF5BZd9VgNmJiKz5RC0QjWfwgMfJ1a9nYDOdzgN4tLfTX33mHYhE6i0HJv2IiJ9oAHTihbNY7dJcKRX4z/o/sOMnxcnipa4AAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAilBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAADQ0NB9fX3k5OQhISF4eHmqqqrAwMCKiotUVFQJCQnU1NSUlJT6+vq2trY0NDT29vZCQkJLS0tmZmZsbG5fX18qKipGRkbsbf2ZAAAAFXRSTlMA9fsTyf6V74E01qJyH+KwTEgIVV3/Ekn0AAABE0lEQVQYGV3BB0KDQBRAwU9dID363y493X7/6wmboOiM/Njvlln2tJL/8rQwYRgG68VW5lYbfsW5/NgZBp/9R39ltJSHLYM3q6PSHYBMvFUAVauT8gV4klEMVakzr2AiEdnC4ah3t1IHtwoyEdlArQ+21tEF1pHkhkOpD9ap90mSSRbyohPr1HNQSJFQ68Q69RoIhIROJ9ap1wJiEpxOrFPvAqEsEnodtY3qsVbvBGvZBVRnHdh31aZT7xUWso+h0VFXd++ljsoDJhdZQnXW0dGe1ethIyKRgQ+dOwG5DJ6BN/11AlLxUuDa6t2xB+K93KUMrq5pL90XgziSydIwk8rMKitCRsl6kctfURabwBRpLg/fqdcoX6PGfrEAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAk1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///97e311dXZhYWLq6urV1dXOzs6goKFqamvIyMmDg4MjIyPg4OBCQkL5+fn19fUNDQ3AwME7OzuqqqpLS0sZGRnv7++Pj5C2trZWVlYvLy97d+WrAAAAFXRSTlMA9uzSsYJ2/OIgUQyUQjhlWcSbE7gWPu/1AAABKUlEQVQYGV3Bh2KiUBRF0YsCD6xp+yBV7Jr+/1+XBxrizFo2eH6Iwtkytf8tnpLAORck4YPdS0P+jOc2mI/wvvNVvjvixXYzd0BTqlN8vAGR9dIRbNb6VbwCE+uE8LbVnS8YTc1sAawlbQ+S3ktJ+w3EZvYEubzVWiqaSt4njKf2nEApL6tUNJV6G9zSJgHf6mTlIat0tYJHixxf6rSnvNZNDYnNHI06bX5qtrr6hMAiR65OdlKV79W7wMiWAWd1skqqM/VaGFuacCzkZWtJq1qdMy4yC6GV91FKOqy2kkpIUrMJHAsN9pJ2MDNvDDvda8Gl5i2A13cNWiCyXgxsLrpa74DQbmK8TVNf6uyMF9pgkvDHRXZnGo8DOi6Zpfav6fIlGSWPcWo3PyY3KVvHAo/1AAAAAElFTkSuQmCC'
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAjVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAADf3+D5+flvb3B2dnh8fH0jIyOsrKz7+/vo6Ojy8vJGRkZmZmc0NDSenp51dXY9PT0TExPLy8sEBAQMDAxXV1fQ0NCIiIiRkZHExMTY2NjtvySzAAAAE3RSTlMA6KSPeLUk/N/2P3FXC2IaSNHCiwd1nQAAARVJREFUGBldwQdCAjEUQMG/NVnaAv+FbdJRwHb/45kgRnRGonqSFdmslP9Gqa2MMZUtJvKoLPi1GEk0r/D212Z3uuCN5W6O13xqsH57BnK5KSvoX/THegvMJVhCv9YHW0imIjKC86uqrpzebXoYi0gKjXqu0R8DLKZSW85OPXfUqKeayaxir4FrNWqgkMyw08C1Gh3ASmE4auBajQZIJDXsNHCtRgewMjZsNXCtRi0spUy4bNRzzcp70mCPGYsU8K7eetd13XFQ7wVsLTKB540Gq0C9E2TiWdjqow5MLd4IuG406oBcbnKgH/TbxwlI5S4Hzn1zGA7dHi+VaJJwc8arcnkwzRcVgbFZKX9NZ4VNkmVey90X41wlPbvvqJUAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAmVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////n5+d1dXbAwMCRkZJxcXHy8vMpKSn6+vrs7OydnZ7Pz9CIiImAgIEJCQkYGBg/Pz/Z2dkzMzSXl5ihoaJsbG1XV1iwsLBhYWHj4+NNTU06Ojurq6yNjY6zs7O1tbWwQVaJAAAAEnRSTlMAptt4H+RK/PVqvwyHzjtdtJFAaEYzAAABO0lEQVQoU12Sx5ajAAwERTLJabpIA9jgHCft/3/cHlgb79Sx66l1kMwe+Ivp8i327Tdzx43CMIwCZ/Jf7icamc1HMYkk6XCrbruNJMVPIUn5HoB7txmVH0n1mgf3naRhWSLVLSPNTgrSoWuzh/vQ9r5uaLdDnyPlwPHQAhw/WzhJMzM/0CYDVpcvoMnPGTRbRROLQ+0AjqseKMo+A26SY06oM0BZfK+hX/cZUEquzUL1g1l3tDl5Bqwk15ahKoDyD2eup8EcJde8UB8A5Q9l0d0HU0lLm0favgPfV/aXDs4ZUCuMzRJpBZwKqAroWigkNzVbaBh64SBNzSwNNGx6UkmR/zjCpRlFPp7Bk1Rf/+XFpyTncbqpJNXV6uuUH/QqzBbByx9Enr2QerNIkhS609+PlcZJEASJ98z/Au5ZJoZn0mUgAAAAAElFTkSuQmCC'
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAnFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+4uLn4+PiJiYtzc3Pf399ra2t7e3zt7e0JCQnq6uo5OTktLS0YGBhWVleQkJGCgoLAwMAlJSVeXl6ZmZmhoaHV1da1tbXy8vJEREVjY2TLy8yurq76MA2IAAAAFnRSTlMA8RhS+MLX/eRnyygKeF45mohHjaiypbKwwQAAATNJREFUKFNdktmagjAMhQsCLSDuHkAWUcR9nXn/d5ukUpE5F/na/E3SNBXCyB7Nl3M/FP81WyhHSumoxaDnD110CsYdGDjs2Z6z17aihfQ/gHZVmces/MCsRSFF1LfYKN8SeicMCKzjTikhb0hgRqk40y3VEXRmswNGRJbAgX1NyXZ1J3MBXKqiUOlcZZEwYZPuYM1EJPHU6cu8WLckboCJcCUyTbL0WBqyon6FAlZvsokPSUuokCcCidKQxyvda7JnMpVoDImT/UWTAliIsYWd7qTY8OHnkdcnONQQPfNVV+W7P84/ZJP3I/jASQd1qoGI3mBIt2t6gKpYthnCOe0BM4YpLet76z/yECZmdHMeaZ1df69ZjW8gxMj6+geWL75kR57+C3C8qS36GvquUsqNPv4/U6Ir4YaYUR4AAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAilBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+MjIyvr7B1dXVgYGEsLCzDw8N9fX319fWEhIXo6OlRUVHZ2doUFBRCQkK4uLnv7+/R0dFtbW6kpKXh4eH6+vqdnZ2YmJnHGFCYAAAAFXRSTlMA9RhV4uv+iPu3MNZdC0bLon0nlmqAp4BSAAABK0lEQVQYGV3BBWIiARBFwQZGcXt/HHfI/a+3PSwhJFX21h3G6WI5t7/G06CTRFESpEP7NE/5MRjbW6+Dq8qiPOxxM3vp4YqdWptsD8T21E+gOuvbZgsMrTWB6qQPW+h0zawH7ORW+SPfyN0riM0shbXcufw6Xi+5XA1B1/oh+5OkU7mTtCp3chVRbHHCQS7P1Dqu5RoY2CCikFvXam0ucjl0DMjkmrNap4tcDVgY0chlR7VuhdwREltEbOXqRq3Hl1wGgY077O9yxVVSXZ7kDjA1m8BVbrUusqa4ye0g7JstYb9Sa3O+6WkLUzMbhbDVpwzom+sB5V1vayC2pxiocv1XH4DUXmJcdXnk1+aAS0f2bRjyI4ntQ3c2SGglwWJuv42WaRAGk1nXXv4B31gqN9Fk5jEAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAilBMVEVHcEwAAAAAAAAAAAAAAAADAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////m5ueAgIA6Ojry8vNaWltqamtwcHKcnJ2Ojo7r6+vT09T8/Px1dXW+vr+5ubojIyPh4eEXFxekpKUuLi7JycorKytOTk4haQ+eAAAAFXRSTlMAFL/X8vyC4f1rSCFRX8o3kKGuqAfvUeDlAAABJUlEQVQYGV3BB3ajQBBAwSYMA0LZ/j1klFCy9/7X20EPs1pXySzP9jZMNvLb4sOaNE1NHGaf8iYPmaRglzJbxoApm+L8546XyGQBmOKmo6q7Alt5yWO4HvVHVQMrGYVwPeibGuJARDbAUVVPX8MwHNU7fUMiIjto1DvU3aNre/UGiAIJLNzUc616zVG9JyaTZcxTR65Vr7iod4a1JCm1jlxbVdWlqdR7gJVtSqOjQ10URe90NEAsSUqtI9fqSScPsLIylDpyrc4KWEtuMU491+isJE1E9lCod+j1xxfYQGQB5qb/KWEr3hrKk745g8nF26RQOp2dgUxeVsC9q/TlUgIfMsnw7nXf9c0TbyezRcQ/cSZvPrMwZmSiJJdflrvIRvsskMlfYDsolyN+NMYAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAA4CAMAAABQdv/vAAAAS1BMVEUAAAAAAAAAAAAAAAAAAABHcEwAAAAAAAAAAAAAAAAEBAT7+/ve3t709PSzs7Pr6+v39/fOzs6BgYGjo6NXV1fGxsbl5eXw8PD////JDHFKAAAAGHRSTlMEFR4kEAAMAQgbLOyMyFut1nY/Sy5ln7qmbeXdAAAEZ0lEQVRYw53YiXKbMBAGYINQMOgWh/X+T9pd3eKK020nk47x1/WvA+EXxRr/WK9jvbHSP/CCb9HXdb3bSu6LfvXuR/InV5LH13+BpcnoDcOQ4RTEX8z6EydwGDr4g38DnNi7pO4LvUB2VYWeE/sn8qd87EhOqTwc243qIfu7GsoHH5LZx2rcMaHVG4Y8Aid2qMhoklgAW76ldrNavcGPwm11FUpKLfzj3ObbTaxvpLuoK+/Q6DxLyXfBHJSGdyQ2tnqM/77wgl7KjXMlAhdLr4XFBDzaxH9pL97ai8VE+J35n3qdahaa9WrOv6EX2XYFEudcSgkfHwJQjim5M4Fq37LYbDMAEstw/qn6UmjFDxRDXTljapu5NgtcsZLAvgvL3V1p6E3a0HlKKQ69Yh8zz0bAD+bYEtTIhgysB1qQCb4tffSmKnk0V6M1t/PMlYQoBKqkP0Y7dNAuvGLxk/uC6Egzfn1fqVLpfZlnqzw6K+ckaZpNIzbBS8xfE6oM3aks12qDaI1Q1l8LLRm/yqpZ67PFEcN4eUJncuOuRnzMCsHumq/hYtOqFYtuv2iYPbaGT+imAOuJ5UwbEq+UjZqazSlMPeEwoLzulhxNi/1qp2R4GS5cmFOY61Rvi0270IaIDRPSprtuOEjwywLTn9tqg0G1P6hjNRe8Sww0bPKQBdeaD/NmL4XTppq6xILa+wBqdXyd3BW2N5W7JWTbNZpTQJVMsyzMXu0+pdWsjj6Gd70tQMMO0/JrmEN3mCeWYWy37aoAFbaX1OpPuemGHA4uTDVltx2Wjp9LCTXr1K6Mo5rvuWOON+Xg3bAlc5nGBbYUsU2lIgv/77VKU76tuzu2rTldmKVqSWu4cmFOLFNXD1Y8dVBazgmVSxYnCIlr2CqmLOnPbFKHs0pf43g1H5jDmU5wM2F8jfO3ZXEjuFNpOtq1yw06SZsIs2W5VexknlRgi/suy804ib3ijqeXswuLDSbLTa6Rrd3U7hL3MuVggZnD/Q3PGcyJrP6cVM/SOobQLnHCs0zP8yI+9rjraJha3XQxs2qWHtvtiXCedbtPmPHWxUnQdfdqZGndrmd3J/1WGu4XVvskklqG60ZNLC3tBpb7cLlLW7pxOt3cMFj1rF6xA7LSh8t1ugPgchYyrVmdg71WM0sP4cIEwvu0ChngkUWxCPMm2Eu1Yb2bxgzOlPOsMYl1hzmKk9d4eGWOt8M1fsGmcOF+BRMBaMD8BMON8IOHEie652Brlh5Y2MRwIsDnZ7Ishg0aZvZXtWXHKtzNuWV30KqOrYZTGOy8/Hf1xJZwIUJ/cl0T2pzQn9ULNkyxCVaSP94tJN6uH9Qn9jjFbFSrTuunoPohlP7CjvUpGtoVS0bb56r3s3rNhkeJlS9TMeuns/Z5mf7ONm77KJuf7KuvDe7UmqXNzSfDOcv2q4hH9cTmw8jP0A5Q4b5QG7Zqt32sPpvp2w36LTu+DvBtow9qy1bu6y7Lqij9kqXj4cuQ1635qNJ/uth6/uC5H5UAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9tbW7u7u5xcXKgoKGTk5T6+vr29vaHh4eampsNDQ0rKytlZWfY2Ni3t7exsbLj4+MeHh5BQUF3d3fCwsPy8vOBgYJQUFA1NTXQ0NDn5+fJycmsrK1dXV7b29sysnriAAAAEnRSTlMAndWuv90K+U5s5SfuF2OEejfA2rlIAAABNUlEQVQYGV3Bh5aiABBFwUZBgnHuA0RFMceJ//9z23hcxzNV9tRPu1E4ebO/km4WA/EgHPXsRT/kV5TYUxIDy0O+KK9L3MQeEmB52alV1HtgbHf9GFZr/VdcgcRaIawKvbjCoGdmCbCWm22r6bvcbA8TM+vCUW7XVKdNWcltodOzYQY7ufwkV27kVsQjG8Xc5N6Paq1zuRxCC6CRm07VmuVnSTVEFsJRrv7SXVlI+oLMAmjktpVa53wmaQqZpTEHuV0jaT3fLOSOEFo/Y1nI1Ze5Pr+bs9yKODXrwkKtablYXMqtpBNEQ7MElh9qzX8+NP+UdIOxuQ4cZnqRQzw09wYcCj3lQGp3KbCv57rb3IDAHlLc/ruqq3yFC+wpifg1SO1FLw0HtOLOeGh/JEEn6nRHPXv4B4dkJl7l72HVAAAAAElFTkSuQmCC'
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAjVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAACVlZZ9fX9paWrt7e0NDQ25ubr09PSDg4SgoKBLS0sdHR3c3Nxzc3TU1NXl5eUwMDD7+/vMzM1DQ0MqKipiYmOOjo+srK1QUFIZXtdwAAAAFXRSTlMATFhh1un9+LN43S/KbQsFqZcVJkBPVh6KAAABLklEQVQoU11S15LDIAwkLoC7k5yFW4xLEqfe/3/eSXCOPdkHBmlHu5KAsQXHRIYyiNg3dtIXnHPhSzfb5qMYVni7lXAEJpp71U19Q1zwISjfXQpCrYaVijjAdSwW1D1SVhA9rqdiA6T8lLpCKaoYW4SRPKFggowE6CguS63V803XN0CcsaMPTW2YM5k8SXceQDgsEXA36uWNzso4VgA5yzlUlmkvl1Epc1c4L/M4lCbqqq6bfm2TGiBkksNUfHz0piYQ0K8+N1uPPpJF2JuRmIg52/oHCNfMYySU6fo149miWGr2aQda8bA7zUL4n2gBuogDbfQHd9uvVTMS4NpnCPA66NkS7RWj/fJ0RMHwfGlVPWBL4EuEm3/gu2yDNImFSQsvOLAvOLkXetJNl/gP+vUpXOzNllAAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAilBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+IiIny8vJKSkrn5+d7e3z7+/uPj5CdnZ0XFxcNDQ1ubm+VlZYjIyOnp6hnZ2ft7e1fX1+zs7MyMjL29vbe3t7AwMCX/fOkAAAAFnRSTlMAVPVj08jrdvzgXAiLNhAusaNESLe4LWr6bQAAASxJREFUGBldwQd2wjAQQMEFbEumk/LXvdvU3P96kQghvMzI087s4w+zk/9m+8harI0+lvJqE/IneJOnhQXarEu6rMUx8rAA2iRX71g1gJG7jYXLTX/lGfAmXgCXq77IIF6JyAzaXJ3j2I+pOmkDCxH5hESdfBq/6ilXp4ZQZBfRpupUZ1Xte3XKhvm7GEumXjWqanpT7wQHCS2FevmUfOX6I4FQYkj0rjwnXZGqV0MsoaXQp75Qr4JA1pZMvSRX1Wun3gQH2UQ0V3X6olStE/UG5jOREGp1yqpLiiJV5wzBSmQBTare8ZarVw5gRGQVQ6avThBtxXkHslR/lSdgKXcGGMZS784XYC0PBmc4VXU1DThreZrF/ImW8mJrwjnePDBb+Wd2COJgv1zJwzekDSs9d6d42gAAAABJRU5ErkJggg=='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAk1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAADn5+dubnC3t7dNTU0zMzOKiovw8PD29vadnZ2AgIC+vr8MDAzHx8gWFhajo6R3d3dfX19qamvY2Nj8/Pzk5ORAQEAfHx+UlJRCQkIiIiKZGu2CAAAAFXRSTlMAVK+VwmqI/uP3N3ruDNzWHihjRaIlxojPAAABEklEQVQokW2S23aCUAxEAwIHBEGr2S0Xi6Di3fb/v64PcgqtzlNWJskkKyNisfDd1Iun8h+OG0bGGJN4/mycn3oMCJ2BeDNAez1WXbEDCH4JoN1cVFV1XX8Dk34UUJ7U4vMA+CIikkH5qSMcIJqLiAPtRVW3eb5t8uasquVjngeVqmpe74t7vT+r6hbCuUwT2nU/prNBiQkkMBRW4OO9DzaQSmronpgcIqGX+cM0gISGzeueySudCkJZJuzsnUfLXGEi4kFtS/utT5AsRHzY2Tt6fMFKRGYhg5K9xixERJZAMerqhg/FwG3fr9GUgGtfFwPcDlV9P5aMCREnHPkgiscWmfle9EhnwfzJV6sszdzBUz/5ISkmKEGK2QAAAABJRU5ErkJggg=='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAhFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9sbG3X19f+/v7w8PB6ens6Ojro6Oh0dHSZmZkhISH09PSnp6ctLS1dXV14eHn7+/vQ0NATExPf39+6urqCgoJSUlKKiotuhspXAAAAE3RSTlMAZ72CSh+l+/Lj2XQSyjZaigeSZLqJsgAAASBJREFUKFNlktmSgkAQBBsEBhDXIwvkVLyv//+/fVBXZPNtOqNmIqrH7E3oRak//bExQZQ4By72veVwHvp8SIJBIAao81t7PwNM/gRAdZEkld0GWLyuimFz0pvyDszNzMyHTaMBe4gzM/sBTtK6OEpSsZWOu+dTEeSS1nkpSW0h6QppZlkKl4+pCkna4aY2j9lpbA4ws4ljPzbrHhJbOfJ/mSvEtvjOHApJ6iGxuaOWJOUXScobSbrBzMIEGknqq6PUHyRJNUzMIrhJkrr2UVWlJJ0gCc0COD/LKYtXSTWszMxmUB81oAUX2qu4uvkSTJ9r8IBzt33OrzUQvVfnAWz2j67LdwyFWZAO/kE8tQFLz48BcOkktBFBlKap72Xv8y+4miXg87zQ7AAAAABJRU5ErkJggg=='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAnFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAABtbW11dXadnZ3v7+/i4uMrKysICAjZ2dn39/fp6ekeHh5BQUGGhoeVlZb9/f3S0tPExMV7e3yqqqs1NTWurq4SEhJUVFVOTk62trZhYWGPj49xAUEyAAAAFnRSTlMA3YLDt+b9Z/lRJ5x01Bio8A03RgfZVco/5gAAASxJREFUGBldwYlaqlAYhtEfZdg42/B8L6CgOOZQWfd/bwe2Zp7WsrteMn4NB0/2VzqOXBzHLgqTF3vQ6/IrSO0udUC1zjb55zuNjt2kQHWYqzXbroCOeT0H5UI/Zp9Aaq0ulDM9+IDJ1MyeoVpI2i/VmM+l5QoGZjaGXI3NUY38TdIFhlMbRVRzNfa5pDrbqVHiEkscJ7V2WS0dt2plEFo/5kve9ijle7UKCCyMyeUtctWZvDNE1o/JdJXPzoW8AiJLHGtdFefNQl4OXetFVLW8+cdBVyVuYBbCRleHi7w3CEZmKbzX+s8JOtYYwnqnBxm4kTWegHWtH7sMSMxLgFWxlHc5AX27GdBYfX0X26yk0be754Bfk8QevCTdCS037Izsj3Q8DF7DZGo3/wA+RSzCfq9M8AAAAABJRU5ErkJggg=='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+AgIGJiYr5+fkuLi5ra2z+/v7z8/MMDAzl5ebKystycnOTk5OgoKBLS0usrKzV1da3t7hkZGTt7e2/v7+YmJkfHx9DQ0Pc3NwWFhaECqcCAAAAF3RSTlMATFfocf562vmz0S8LZgXH8WGpmBUmQGBhCEUAAAFDSURBVBgZXcEHcsJAEATAVTyJDA4zp5yjCf7/53xQGKvcLS8fbqhCdy3/WaETeJ4XOOFxJwvrPf4oS17sAEBxTXXdFTB8ebIBFLrk3dx8A/DlYR0AyY2/5g6AJXd7IMm50AHORkQsoLhxiElWMZkNWX4BXBEJAU3WFVkmFVlOMXtgtZMPB8VM9mdyTFtyjMjsgsAWN8CV5KDJqNIZo5HkBJzk5CElGdd5rKlL1iXJBlCy8qBp6GGI2I55TaMFlIQeahp934+szl8NyewMKHEDdDRuUVQyj6IvGikQytpBkZPMppRk1OU0EgRHkRBoaJxbkqOmMQJqI2ID3zOXsgTwRWSngCuXUuDwLsYngG7mr2wCsJUHF8CljfkwJgDe5MmHcZmatkkTGG/yYin8OWxlYbPdH3AXrPx3+cc+rZQKjxt5+gFx+y6oPZ69RgAAAABJRU5ErkJggg=='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABOCAMAAADhC0M2AAABHVBMVEVHcEz6+vrOTzvYYDP4mCr6nTbicS72kR33lCLdaDDqih3TVze9NUfneSr////y8vK3K03Sz83egxvxjCDKSD7DPEOZmJjSfBqwH0/rgSTp3tXi2tb5pETGQkGkm5bEZwTy8vLLdRnj4+PfdSbl2tXDaCC4tbK4NGGTD0XRehaxWAHAQFj4+PjRbySuIl7q6urqubSgGEyzNHG7QXLafB75wYPdcQK3ZBLzggj9/f3r1MfCwsL+/v7Ibh7Yo4i3kmbQXFGrOWSKP1ixsbG+VC2yQTWmLT3Pz8/o6Onm5ub5rVfS0tLZ2dm4ViumNzbBhUW3s7Xn5+fMhkbGUWfDWoripmKQE0bOe6PaiS74o0HX19e/diL6vXefIE+wbCLRjpFBAAAAX3RSTlMAZmZmZmZmZmZmZmZmZmZmZgNmZmZmCWZmZgwjZmYVZlxmZWYTZh9mZjpmZiZmZj8sZmZlZjhmZmZHGkVARyQ0ZmYaLmZmZkhUSFcwVkdHRz82UGZcPUdEWltOXUZGWl3SNVEAAAY4SURBVFjD7Zh7W+JGFMYzLqyIOiGi0U0QAgbYAgIChluKIG0BoVUU6rX7/T9Gz5mZQFCk6LL/bH2f3TULmfnNuc6MkvSTSfnn74n+murPqX516fIS/o7PGuE3UkZfT74ynfzB9TvXb1xxoShqH/7sRyOgx8uG8gZIPps94XIhpoRjoRLXDqrEQI9n2vL+KhYK2QNUILAF2js8PNxdW9vc3Pz06dMG6Ai1vf0F5He0s4Oc8tnS1uRbRUYJIGQPGLsuxmfQNicEudZRQeAAJvVt6eCMgJIMMAZCkLHm2MEZU4hPCDmAKafOloRoxVaxmFwK4vN5hIAT9JfeQJFuCw6FuWsRBHzl8aIQ49/5L4p67ihs3haLabclm/MhlYrv/uLi3uvxeEOI4ZRFcdEKXycKpNPprWnY50K+VIJPeZa1Zv4p5AmFBCX1baGTTrJOHZ4c8PR9DQIYyxq76sI89Xo5ZT++0GFmqzCpwwPHWfMhRyWrVJsdrYccSrmsLjIFKLwODwILIcC4e1He5j1SPD7/fmSBKYpZKAhKYCHk6DgSndNCTAw+UIJWVFlY7IVCMptFRPr1mBwdxyOJecN1zDHMZquxKPZXrVYhiUqz9JoL+Xx0nLp8JUEnWliG+iiLDksGbm7Se6xIZhgbjBEvm9+5a9UajUa+kR8Vk1nRiJ16FA0SInK9oh1ykmmsufBmzyDbR1FXIYx/ma/GUhC9VRANn/cWgHBLwFupadhD67BlvVA0crnc3jV6HVKedqcLD3SSF1oWgnuXE5VnkLIbEvKu+59rZ39ZCO5dSdHveeRfgXjWn8u/PMQsJJGytZU+fAZJzUJ8bgnI0ltXrQgUrMpms7k2E/izGYhbjOKPLg+RtNskjwlQNkWdQOeKp65dEN5JHHkQAoFvvKFazDzTqAj1v8tsAVPi5dSkbfBZhXxAxL0eIOH3VGYxubV1KCgQlElc86cu5S+8XrbTRx7fUf56q5jmpmwIU+auVAN/+Vjcx+9pMqPkTfpQQLDVp8pzdgzFu47eC0KZJN7VNZM3N801AYHuFU99e0FR7isefi6K3L2vX+bTQGluYkhg+y0hJfx8961gxeAR7025NUvBctkQJ2GkzByvldMKZ4Ah1jsNkRSpdr3bbIIlIXbqwttC6vEswThK7fQOznniSFyyzO/bznTn4MOO13gpuQbdWVYluO4cu63xd29mtRA7KjIMmBONWJa14/fDDYJ3FL+1im1T50dFH7+UoKC5OzUf9Ft3irQKCnhMYGBW5xq0WgYk6wWjeJzOztoWy96KNV4RA/PVyzHPtpKKP7/K237tycuuJNPNBBCVsSatVEoNriQecceCDbhSuT81pdVLyz85+6L34lRXpB8lzYQKrZk/DvChD33oQx/60P9BNV3nv9zTmebcqEzX5/wlMUJJ6Al1ekIXv6Odbs3Od7ohEzlWh/8q8EAIiV05g9p18dQjMqjOhhjwDC+xi1VbxrFtMWn3XCxp4Mx91REMSnLtPpHPGSSTyfQNuS3eMWLi7RwdwudkwD6kGRSet4aUDNtDKvO3TCLWpNIBx7bljvhARjcoOEYhBjOATyZJCeoYlSMK+/eKWeL4IkwNnD4szncDEuMeVYncwS/6VObj+7TPEeguEmOfiR+wZiJMycnmxDJD1lSQgtBzV9zClMh1ASExsCVDqfggR4Cege9hPFgSPg+He4KfoPWE8ICAsB9dEoP4xGqIcyfHgIZ73BSVVvvkoU+MPnFB9GoV16wYMJ4Q+YF71ADndbkpAtJD13ZpFdQ1EaK6DalLKl+5SqrSFaVE1WhHxJ0vuwOLgMDnbJsaTkS6ekZYxSEq8yPERGTTkLZdhpB6JiMzU1TShQmpCVNwiMJzKSHcBY8PJCwiIhNKKTMlh2vWBuzVqZMgaTCR2wkeEXybmaKyzNGkCUQyKenWBwTH88BrNIYrbdMuZirPqB7tdR5k7mGD9EAdk6f/oN6NsXSAJAcZMcgFDS3hzug4B+geuK+Lq1Fk5qk6QaBBucMNjEMOXoE48pLDZ5kXYw3HPiRwuofptHMgUi1n53T2ZOdYCG3MatsWjq9i+tl21e5z6hCeq1Wb30wSMBZxCZvPoOIUij0UyWBnfqb2+y+g3yqAE1I4qAAAAABJRU5ErkJggg=='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAABnZ2nz8/P5+fn8/PyPj5CIiIgXFxcNDQ1GRkZwcHGAgIFQUFGxsbKdnZ2+vr/Ly8wzMzTc3N3R0dLm5uapqaleXl4oKCgiIiLj4+OTk5Tr6+s8QHzRAAAAFXRSTlMAs31c6uDT/HIxCcz0Y1PEo49CEkg2MUurAAABLklEQVQYGV3Bh3aiABRF0QdItabcA9LtGlvm/39uEI1xZW97iiPHd6LY/po4gzAkDAeOZ6/iIb+Cd3sah0DdtGXb1HQiexgDdfmlm39FBUTWi0PY7fXjqwHe7SaAXaYXDfiJmU2gvkraziXlW0lZBWMzc6BU57uQVBTqrGFqFg+oM92kBx3SXJ15xejT3JBGvX2apXv1TjCzaUiru9VypbsShuZDqbvDbqu7Nfg2DFmol6WbNFOvgMDckKV65VHHhXopzCweUWXqbFpJ7UY3F0YTsymsJc0XV0nXxVzSCoLEbAxVJuW6y6X8DJGZJT4s9eoEgw/rfALLTD/mJ8Czngtcjrl6qzPwZg8unUtarL/TM503e5r4/Bp49iKJhiNuRkP3w/7wZoEfOF5iD/8BaJ4p2z525skAAAAASUVORK5CYII='
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAmVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAADx8fGKiop5eXrm5uZMTExeXl4yMjI/Pz+BgYHs7OympqYMDAxtbW7Kysv29vbU1NSzs7PBwcEWFhadnZ1nZ2n6+vpycnMfHx+SkpLb29shISF8pnJoAAAAFnRSTlMArGnbOCRR/uP4foruuV+bCsjVk3IWSJQdvQAAARxJREFUGBldwQdiogAURdFPB7smeRcUBHtLnf0vbmgxJufYXeA63njg21+hEydRbTR2Z/bAn/MjDu1uEgG7cl+951dqQ+tNgF21UiO9/QOm1vIjWH/pW1oArjUWsD7qQQHJi5lNYLeS3g5qnDaS1vBkZmPIVFtuJZ2KVNIF4sD8EbtUtbTYSK8HNdZEQxtG5GqdK20ztSrwzItYqrPc7o9qnSExIFNnVR7UuQAWRyzVe9+oc4bEniJy9fYrdTKIzR9xParzulKnhKnZHG7qZBu1TjAKzFy4pvqlhKmZzWLI9aiCKLBaCOSp7pbAwFoD4GP7ptalBBzrDah9FJ+3z/2ammN3YcyP5NkezJ7nCY1kMQzsj9BZeN7YfbHefxhsKw5NeNpbAAAAAElFTkSuQmCC'
    },
    function(t, e) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9/f4D09PTj4+M2Njbu7u6wsLApKSmgoKBcXF0ICAioqKlubm95eXq6urrV1dVzc3SIiIn4+PjExMRGRkgYGBhVVVVoaGjW1tbPz9ATExOUlJSRkZHl0oiLAAAAE3RSTlMAS42BXcAZ++LzKZ/MaXE+DdSsUeDgSwAAARlJREFUGBldwQeWgkAQQMEmzmDW91tACea86f6X2wEx7FbJU28U2UEwlv+8mTUGTBINJ/KmF/FiQ3nyEqA+rw+b6wXHl44H1PNMG2lZAL60egkUH/qQVkAojQiKhb6pIIlFZAz1TlWzpbM9HVW1gEBE+rBXJytXq+XhnKrqFuxEYguZPqw/tVFgRhIm5PqwKbW1gUgCQ6Wd1V7vSrDiw03vdlWqd1tIxDdU2kqrnXZWYCU05NraLPVhDgOJLXWmTrlOF442ckwgMoO5OvO7haqewMYiHtSZ/pGDL84A8qO+2YOJxekZyDN9WgMjaYXA13eqrW0O9KUzxLlcD+XPrcDpy9N4yksylHdhlNAw0yCWf7z+wE5n4UQ6vyV/J7p+LNriAAAAAElFTkSuQmCC'
    }
  ])
})
