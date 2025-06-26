"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=v(function(m,s){
var u=require('@stdlib/math-base-assert-is-nanf/dist'),n=require('@stdlib/constants-float32-sign-mask/dist'),a=require('@stdlib/number-float32-base-to-word/dist'),q=require('@stdlib/math-base-special-abs/dist');function f(r){return r&n?~r+1:(r|n)>>>0}function c(r,e){var i,t;return u(r)||u(e)?NaN:(i=a(r),t=a(e),i=f(i),t=f(t),q(i-t))}s.exports=c
});var p=o();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
