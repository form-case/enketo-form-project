var g = Object.create;
var e = Object.defineProperty;
var h = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var j = Object.getPrototypeOf
  , k = Object.prototype.hasOwnProperty;
var l = (a, b, c) => b in a ? e(a, b, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: c
}) : a[b] = c;
var n = (a => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(a,{
    get: (b, c) => (typeof require < "u" ? require : b)[c]
}) : a)(function(a) {
    if (typeof require < "u")
        return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + a + '" is not supported')
});
var o = (a, b) => () => (b || a((b = {
    exports: {}
}).exports, b),
b.exports);
var m = (a, b, c, f) => {
    if (b && typeof b == "object" || typeof b == "function")
        for (let d of i(b))
            !k.call(a, d) && d !== c && e(a, d, {
                get: () => b[d],
                enumerable: !(f = h(b, d)) || f.enumerable
            });
    return a
}
;
var p = (a, b, c) => (c = a != null ? g(j(a)) : {},
m(b || !a || !a.__esModule ? e(c, "default", {
    value: a,
    enumerable: !0
}) : c, a));
var q = (a, b, c) => (l(a, typeof b != "symbol" ? b + "" : b, c),
c);
export {n as a, o as b, p as c, q as d};
//# sourceMappingURL=chunk-3RPRB7E5.js.map
