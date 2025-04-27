import we, { useRef as cr, useReducer as dr } from "react";
var U = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function vr() {
  if (Te) return I;
  Te = 1;
  var S = we, m = Symbol.for("react.element"), D = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, w = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(E, c, d) {
    var s, g = {}, b = null, W = null;
    d !== void 0 && (b = "" + d), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (W = c.ref);
    for (s in c) R.call(c, s) && !C.hasOwnProperty(s) && (g[s] = c[s]);
    if (E && E.defaultProps) for (s in c = E.defaultProps, c) g[s] === void 0 && (g[s] = c[s]);
    return { $$typeof: m, type: E, key: b, ref: W, props: g, _owner: w.current };
  }
  return I.Fragment = D, I.jsx = T, I.jsxs = T, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function pr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var S = we, m = Symbol.for("react.element"), D = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), E = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), H = Symbol.iterator, Ce = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = H && e[H] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var P = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ke = !1, De = !1, Ae = !1, Fe = !1, Ie = !1, Z;
    Z = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === C || Ie || e === w || e === d || e === s || Fe || e === W || ke || De || Ae || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === g || e.$$typeof === T || e.$$typeof === E || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case D:
          return "Portal";
        case C:
          return "Profiler";
        case w:
          return "StrictMode";
        case d:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return Q(r) + ".Consumer";
          case T:
            var t = e;
            return Q(t._context) + ".Provider";
          case c:
            return We(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : _(e.type) || "Memo";
          case b: {
            var i = e, u = i._payload, o = i._init;
            try {
              return _(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, A = 0, ee, re, te, ne, ae, oe, ie;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function Ye() {
      {
        if (A === 0) {
          ee = console.log, re = console.info, te = console.warn, ne = console.error, ae = console.group, oe = console.groupCollapsed, ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Le() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: ee
            }),
            info: x({}, e, {
              value: re
            }),
            warn: x({}, e, {
              value: te
            }),
            error: x({}, e, {
              value: ne
            }),
            group: x({}, e, {
              value: ae
            }),
            groupCollapsed: x({}, e, {
              value: oe
            }),
            groupEnd: x({}, e, {
              value: ie
            })
          });
        }
        A < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = P.ReactCurrentDispatcher, J;
    function Y(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var q = !1, L;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ve();
    }
    function se(e, r) {
      if (!e || q)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = N.current, N.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (h) {
              n = h;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), p = n.stack.split(`
`), l = a.length - 1, f = p.length - 1; l >= 1 && f >= 0 && a[l] !== p[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (a[l] !== p[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || a[l] !== p[f]) {
                    var y = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, y), y;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        q = !1, N.current = u, Le(), Error.prepareStackTrace = i;
      }
      var k = e ? e.displayName || e.name : "", O = k ? Y(k) : "";
      return typeof e == "function" && L.set(e, O), O;
    }
    function Me(e, r, t) {
      return se(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Ue(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case d:
          return Y("Suspense");
        case s:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Me(e.render);
          case g:
            return V(e.type, r, t);
          case b: {
            var n = e, i = n._payload, u = n._init;
            try {
              return V(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, le = {}, fe = P.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Ne(e, r, t, n, i) {
      {
        var u = Function.call.bind(F);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (M(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in le) && (le[a.message] = !0, M(i), v("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Je = Array.isArray;
    function B(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function de(e) {
      if (Be(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), ce(e);
    }
    var ve = P.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, ge;
    function ze(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && ve.current;
    }
    function He(e, r) {
      {
        var t = function() {
          pe || (pe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ge || (ge = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, i) {
      {
        var u, o = {}, a = null, p = null;
        t !== void 0 && (de(t), a = "" + t), Ge(r) && (de(r.key), a = "" + r.key), ze(r) && (p = r.ref, Xe(r, i));
        for (u in r)
          F.call(r, u) && !Ke.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            o[u] === void 0 && (o[u] = l[u]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(o, f), p && Ze(o, f);
        }
        return Qe(e, a, p, i, n, ve.current, o);
      }
    }
    var K = P.ReactCurrentOwner, he = P.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function ye() {
      {
        if (K.current) {
          var e = _(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var Re = {};
    function tr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + _(e._owner.type) + "."), j(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (B(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            G(n) && be(n, r);
          }
        else if (G(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Pe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              G(o.value) && be(o.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = _(r);
          Ne(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var i = _(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    var _e = {};
    function me(e, r, t, n, i, u) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = rr();
          p ? a += p : a += ye();
          var l;
          e === null ? l = "null" : B(e) ? l = "array" : e !== void 0 && e.$$typeof === m ? (l = "<" + (_(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var f = er(e, r, t, i, u);
        if (f == null)
          return f;
        if (o) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (B(y)) {
                for (var k = 0; k < y.length; k++)
                  Ee(y[k], e);
                Object.freeze && Object.freeze(y);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(y, e);
        }
        if (F.call(r, "key")) {
          var O = _(e), h = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), X = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_e[O + X]) {
            var lr = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, X, O, lr, O), _e[O + X] = !0;
          }
        }
        return e === R ? ar(f) : nr(f), f;
      }
    }
    function or(e, r, t) {
      return me(e, r, t, !0);
    }
    function ir(e, r, t) {
      return me(e, r, t, !1);
    }
    var ur = ir, sr = or;
    $.Fragment = R, $.jsx = ur, $.jsxs = sr;
  }()), $;
}
var Oe;
function gr() {
  return Oe || (Oe = 1, process.env.NODE_ENV === "production" ? U.exports = vr() : U.exports = pr()), U.exports;
}
var Se = gr();
const yr = ({ numberOfInputFields: S = 4, inputBoxStyle: m, onchange: D }) => {
  const R = Array.from({ length: S }, () => ({
    value: "",
    ref: cr(null)
  })), w = (d, s) => {
    var g;
    switch (s.type) {
      case "onchange": {
        const b = [...d];
        return b[s.payload.index].value = s.payload.value, s.payload.value && s.payload.index < S - 1 && ((g = d[s.payload.index + 1].ref.current) == null || g.focus()), b;
      }
      default:
        return d;
    }
  };
  console.log("initialState", R[0], R[0].value === "");
  const [C, T] = dr(w, R), E = {
    width: "50px",
    height: "50px",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    textAlign: "center",
    fontSize: "24px",
    color: "black",
    boxShadow: "0 0 3px #00f, 0 0 3px #00f, 0 0 3px #00f",
    animation: "glow 1.5s infinite alternate",
    outline: "none"
  }, c = (d, s) => {
    T({ type: "onchange", payload: { value: d.target.value, index: s } }), D(d, s);
  };
  return /* @__PURE__ */ Se.jsx("div", { children: C.map((d, s) => /* @__PURE__ */ Se.jsx(
    "input",
    {
      ref: d.ref,
      maxLength: 1,
      style: { ...E, ...m },
      type: "text",
      value: d.value,
      onChange: (g) => c(g, s)
    },
    s
  )) });
};
export {
  yr as OtpInput
};
