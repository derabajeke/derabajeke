/**
  * Klass.js - copyright @dedfat
  * version 1.0
  * https://github.com/ded/klass
  * Follow our software http://twitter.com/dedfat :)
  * MIT License
  */
!function(e,t){function n(e,t){function n(){}n[a]=this[a];var i=this,s=new n,o=f(e),u=o?e:this,l=o?{}:e,c=function(){this.initialize?this.initialize.apply(this,arguments):(t||o&&i.apply(this,arguments),u.apply(this,arguments))};return c.methods=function(e){return r(s,e,i),c[a]=s,this},c.methods.call(c,l).prototype.constructor=c,c.extend=arguments.callee,c[a].implement=c.statics=function(e,t){return e=typeof e=="string"?function(){var n={};return n[e]=t,n}():e,r(this,e,i),this},c}function r(e,t,n){for(var r in t)t.hasOwnProperty(r)&&(e[r]=f(t[r])&&f(n[a][r])&&o.test(t[r])?i(r,t[r],n):t[r])}function i(e,t,n){return function(){var r=this.supr;this.supr=n[a][e];var i=t.apply(this,arguments);return this.supr=r,i}}function s(e){return n.call(f(e)?e:u,e,1)}var o=/xyz/.test(function(){xyz})?/\bsupr\b/:/.*/,u=function(){},a="prototype",f=function(e){return typeof e===t};if(typeof module!="undefined"&&module.exports)module.exports=s;else{var l=e.klass;s.noConflict=function(){return e.klass=l,this},e.klass=s}}(this,"function");