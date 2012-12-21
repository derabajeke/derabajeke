/*! jQuery v1.8.3 jquery.com | jquery.org/license */

(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
/*
 * CirclePlayer for the jPlayer Plugin (jQuery)
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2012 Happyworm Ltd
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * Version: 1.0.1 (jPlayer 2.1.0+)
 * Date: 30th May 2011
 *
 * Author: Mark J Panaghiston @thepag
 *
 * CirclePlayer prototype developed by:
 * Mark Boas @maboa
 * Silvia Benvenuti @aulentina
 * Jussi Kalliokoski @quinirill
 *
 * Inspired by :
 * Neway @imneway http://imneway.net/ http://forrst.com/posts/Untitled-CPt
 * and
 * Liam McKay @liammckay http://dribbble.com/shots/50882-Purple-Play-Pause
 *
 * Standing on the shoulders of :
 * John Resig @jresig
 * Mark Panaghiston @thepag
 * Louis-Rémi Babé @Louis_Remi
 */



var CirclePlayer = function(jPlayerSelector, media, options) {
	var	self = this,

		defaults = {
			// solution: "flash, html", // For testing Flash with CSS3
			supplied: "m4a, oga",
			// Android 2.3 corrupts media element if preload:"none" is used.
			// preload: "none", // No point preloading metadata since no times are displayed. It helps keep the buffer state correct too.
			cssSelectorAncestor: "#cp_container_1",
			cssSelector: {
				play: ".cp-play",
				pause: ".cp-pause"
			}
		},

		cssSelector = {
			bufferHolder: ".cp-buffer-holder",
			buffer1: ".cp-buffer-1",
			buffer2: ".cp-buffer-2",
			progressHolder: ".cp-progress-holder",
			progress1: ".cp-progress-1",
			progress2: ".cp-progress-2",
			circleControl: ".cp-circle-control"
		};

	this.cssClass = {
		gt50: "cp-gt50",
		fallback: "cp-fallback"
	};

	this.spritePitch = 104;
	this.spriteRatio = 0.24; // Number of steps / 100

	this.player = $(jPlayerSelector);
	this.media = $.extend({}, media);
	this.options = $.extend(true, {}, defaults, options); // Deep copy

	this.cssTransforms = Modernizr.csstransforms;
	this.audio = {};
	this.dragging = false; // Indicates if the progressbar is being 'dragged'.

	this.eventNamespace = ".CirclePlayer"; // So the events can easily be removed in destroy.

	this.jq = {};
	$.each(cssSelector, function(entity, cssSel) {
		self.jq[entity] = $(self.options.cssSelectorAncestor + " " + cssSel);
	});

	this._initSolution();
	this._initPlayer();
};

CirclePlayer.prototype = {
	_createHtml: function() {
	},
	_initPlayer: function() {
		var self = this;
		this.player.jPlayer(this.options);

		this.player.bind($.jPlayer.event.ready + this.eventNamespace, function(event) {
			if(event.jPlayer.html.used && event.jPlayer.html.audio.available) {
				self.audio = $(this).data("jPlayer").htmlElement.audio;
			}
			$(this).jPlayer("setMedia", self.media);
			self._initCircleControl();
		});

		this.player.bind($.jPlayer.event.play + this.eventNamespace, function(event) {
			$(this).jPlayer("pauseOthers");
		});

		// This event fired as play time increments
		this.player.bind($.jPlayer.event.timeupdate + this.eventNamespace, function(event) {
			if (!self.dragging) {
				self._timeupdate(event.jPlayer.status.currentPercentAbsolute);
			}
		});

		// This event fired as buffered time increments
		this.player.bind($.jPlayer.event.progress + this.eventNamespace, function(event) {
			var percent = 0;
			if((typeof self.audio.buffered === "object") && (self.audio.buffered.length > 0)) {
				if(self.audio.duration > 0) {
					var bufferTime = 0;
					for(var i = 0; i < self.audio.buffered.length; i++) {
						bufferTime += self.audio.buffered.end(i) - self.audio.buffered.start(i);
						// console.log(i + " | start = " + self.audio.buffered.start(i) + " | end = " + self.audio.buffered.end(i) + " | bufferTime = " + bufferTime + " | duration = " + self.audio.duration);
					}
					percent = 100 * bufferTime / self.audio.duration;
				} // else the Metadata has not been read yet.
				// console.log("percent = " + percent);
			} else { // Fallback if buffered not supported
				// percent = event.jPlayer.status.seekPercent;
				percent = 0; // Cleans up the inital conditions on all browsers, since seekPercent defaults to 100 when object is undefined.
			}
			self._progress(percent); // Problem here at initial condition. Due to the Opera clause above of buffered.length > 0 above... Removing it means Opera's white buffer ring never shows like with polyfill.
			// Firefox 4 does not always give the final progress event when buffered = 100%
		});

		this.player.bind($.jPlayer.event.ended + this.eventNamespace, function(event) {
			self._resetSolution();
		});
	},
	_initSolution: function() {
		if (this.cssTransforms) {
			this.jq.progressHolder.show();
			this.jq.bufferHolder.show();
		}
		else {
			this.jq.progressHolder.addClass(this.cssClass.gt50).show();
			this.jq.progress1.addClass(this.cssClass.fallback);
			this.jq.progress2.hide();
			this.jq.bufferHolder.hide();
		}
		this._resetSolution();
	},
	_resetSolution: function() {
		if (this.cssTransforms) {
			this.jq.progressHolder.removeClass(this.cssClass.gt50);
			this.jq.progress1.css({'transform': 'rotate(0deg)'});
			this.jq.progress2.css({'transform': 'rotate(0deg)'}).hide();
		}
		else {
			this.jq.progress1.css('background-position', '0 ' + this.spritePitch + 'px');
		}
	},
	_initCircleControl: function() {
		var self = this;
		this.jq.circleControl.grab({
			onstart: function(){
				self.dragging = true;
			}, onmove: function(event){
				var pc = self._getArcPercent(event.position.x, event.position.y);
				self.player.jPlayer("playHead", pc).jPlayer("play");
				self._timeupdate(pc);
			}, onfinish: function(event){
				self.dragging = false;
				var pc = self._getArcPercent(event.position.x, event.position.y);
				self.player.jPlayer("playHead", pc).jPlayer("play");
			}
		});
	},
	_timeupdate: function(percent) {
		var degs = percent * 3.6+"deg";

		var spriteOffset = (Math.floor((Math.round(percent))*this.spriteRatio)-1)*-this.spritePitch;

		if (percent <= 50) {
			if (this.cssTransforms) {
				this.jq.progressHolder.removeClass(this.cssClass.gt50);
				this.jq.progress1.css({'transform': 'rotate(' + degs + ')'});
				this.jq.progress2.hide();
			} else { // fall back
				this.jq.progress1.css('background-position', '0 '+spriteOffset+'px');
			}
		} else if (percent <= 100) {
			if (this.cssTransforms) {
				this.jq.progressHolder.addClass(this.cssClass.gt50);
				this.jq.progress1.css({'transform': 'rotate(180deg)'});
				this.jq.progress2.css({'transform': 'rotate(' + degs + ')'});
				this.jq.progress2.show();
			} else { // fall back
				this.jq.progress1.css('background-position', '0 '+spriteOffset+'px');
			}
		}
	},
	_progress: function(percent) {
		var degs = percent * 3.6+"deg";

		if (this.cssTransforms) {
			if (percent <= 50) {
				this.jq.bufferHolder.removeClass(this.cssClass.gt50);
				this.jq.buffer1.css({'transform': 'rotate(' + degs + ')'});
				this.jq.buffer2.hide();
			} else if (percent <= 100) {
				this.jq.bufferHolder.addClass(this.cssClass.gt50);
				this.jq.buffer1.css({'transform': 'rotate(180deg)'});
				this.jq.buffer2.show();
				this.jq.buffer2.css({'transform': 'rotate(' + degs + ')'});
			}
		}
	},
	_getArcPercent: function(pageX, pageY) {
		var	offset	= this.jq.circleControl.offset(),
			x	= pageX - offset.left - this.jq.circleControl.width()/2,
			y	= pageY - offset.top - this.jq.circleControl.height()/2,
			theta	= Math.atan2(y,x);

		if (theta > -1 * Math.PI && theta < -0.5 * Math.PI) {
			theta = 2 * Math.PI + theta;
		}

		// theta is now value between -0.5PI and 1.5PI
		// ready to be normalized and applied

		return (theta + Math.PI / 2) / 2 * Math.PI * 10;
	},
	setMedia: function(media) {
		this.media = $.extend({}, media);
		this.player.jPlayer("setMedia", this.media);
	},
	play: function(time) {
		this.player.jPlayer("play", time);
	},
	pause: function(time) {
		this.player.jPlayer("pause", time);
	},
	destroy: function() {
		this.player.unbind(this.eventNamespace);
		this.player.jPlayer("destroy");
	}
};
// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function (window) {
	
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
	if (!Function.prototype.bind ) {

		Function.prototype.bind = function( obj ) {
			var slice = [].slice,
					args = slice.call(arguments, 1), 
					self = this, 
					nop = function () {}, 
					bound = function () {
						return self.apply( this instanceof nop ? this : ( obj || {} ), 
																args.concat( slice.call(arguments) ) );
					};

			nop.prototype = self.prototype;

			bound.prototype = new nop();

			return bound;
		};
	}

	

	if (typeof window.Code === "undefined") {
		window.Code = {};
	}
	
	
	
	window.Code.Util = {
		
		
		/*
		 * Function: registerNamespace
		 */			
		registerNamespace: function () {
			var 
				args = arguments, obj = null, i, j, ns, nsParts, root, argsLen, nsPartsLens;
			for (i=0, argsLen=args.length; i<argsLen; i++) {
				ns = args[i];
				nsParts = ns.split(".");
				root = nsParts[0];
				if (typeof window[root] === "undefined"){
					window[root] = {};
				}
				obj = window[root];
				//eval('if (typeof ' + root + ' == "undefined"){' + root + ' = {};} obj = ' + root + ';');
				for (j=1, nsPartsLens=nsParts.length; j<nsPartsLens; ++j) {
					obj[nsParts[j]] = obj[nsParts[j]] || {};
					obj = obj[nsParts[j]];
				}
			}
		},
		
		
		
		/*
		 * Function: coalesce
		 * Takes any number of arguments and returns the first non Null / Undefined argument.
		 */
		coalesce: function () {
			var i, j;
			for (i=0, j=arguments.length; i<j; i++) {
				if (!this.isNothing(arguments[i])) {
					return arguments[i];
				}
			}
			return null;
		},
		
		
		
		/*
		 * Function: extend
		 */
		extend: function(destination, source, overwriteProperties){
			var prop;
			if (this.isNothing(overwriteProperties)){
				overwriteProperties = true;
			}
			if (destination && source && this.isObject(source)){
				for(prop in source){
					if (this.objectHasProperty(source, prop)) {
						if (overwriteProperties){
							destination[prop] = source[prop];
						}
						else{
							if(typeof destination[prop] === "undefined"){ 
								destination[prop] = source[prop]; 
							}
						}
					}
				}
			}
		},
		
		
		
		/*
		 * Function: clone
		 */
		clone: function(obj) {
			var retval = {};
			this.extend(retval, obj);
			return retval;
		},
		
		
		
		/*
		 * Function: isObject
		 */
		isObject: function(obj){
			return obj instanceof Object;
		},
		
		
		
		/*
		 * Function: isFunction
		 */
		isFunction: function(obj){
			return ({}).toString.call(obj) === "[object Function]";
		},
		
		
		
		/*
		 * Function: isArray
		 */
		isArray: function(obj){
			return obj instanceof Array;
		},
		
		
		/*
		 * Function: isLikeArray
		 */
		isLikeArray: function(obj) { 
			return typeof obj.length === 'number';
		},
		
		
		
		/*
		 * Function: isNumber
		 */
		isNumber: function(obj){
			return typeof obj === "number";
		},
		
		
		
		/*
		 * Function: isString
		 */
		isString: function(obj){
			return typeof obj === "string";
		},
	
		
		/*
		 * Function: isNothing
		 */
		isNothing: function (obj) {
		
			if (typeof obj === "undefined" || obj === null) {
				return true;
			}	
			return false;
			
		},
		
		
		
		/*
		 * Function: swapArrayElements
		 */
		swapArrayElements: function(arr, i, j){
			
			var temp = arr[i]; 
			arr[i] = arr[j];
			arr[j] = temp;
		
		},
		
		
		
		/*
		 * Function: trim
		 */
		trim: function(val) {
			return val.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		},
		
		
		
		/*
		 * Function: toCamelCase
		 */
		toCamelCase: function(val){
			return val.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
		},
		
		
		
		/*
		 * Function: toDashedCase
		 */
		toDashedCase: function(val){
			return val.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
		},
		
		
		
		/*
		 * Function: indexOf
		 */
		arrayIndexOf: function(obj, array, prop){
			
			var i, j, retval, arrayItem;
			
			retval = -1;
			
			for (i=0, j=array.length; i<j; i++){
				
				arrayItem = array[i];
				
				if (!this.isNothing(prop)){
					if (this.objectHasProperty(arrayItem, prop)) {
						if (arrayItem[prop] === obj){
							retval = i;
							break;
						}
					}
				}
				else{
					if (arrayItem === obj){
						retval = i;
						break;
					}
				}
				
			}
			
			return retval;
			
		},
		
		
		
		/*
		 * Function: objectHasProperty
		 */
		objectHasProperty: function(obj, propName){
			
			if (obj.hasOwnProperty){
				return obj.hasOwnProperty(propName);
			}
			else{
				return ('undefined' !== typeof obj[propName]);
			}
			
		}
		
		
	};
	
}(window));
// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, Util) {
	
	Util.Browser = {
	
		ua: null,
		version: null,
		safari: null,
		webkit: null,
		opera: null,
		msie: null,
		chrome: null,
		mozilla: null,
		
		android: null,
		blackberry: null,
		iPad: null,
		iPhone: null,
		iPod: null,
		iOS: null,
		
		is3dSupported: null,
		isCSSTransformSupported: null,
		isTouchSupported: null,
		isGestureSupported: null,
		
		
		_detect: function(){
			
			this.ua = window.navigator.userAgent;
			this.version = (this.ua.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || []);
			this.safari = (/Safari/gi).test(window.navigator.appVersion);
			this.webkit = /webkit/i.test(this.ua);
			this.opera = /opera/i.test(this.ua);
			this.msie = /msie/i.test(this.ua) && !this.opera;
			this.chrome = /Chrome/i.test(this.ua);
			this.firefox = /Firefox/i.test(this.ua);
			this.fennec = /Fennec/i.test(this.ua);
			this.mozilla = /mozilla/i.test(this.ua) && !/(compatible|webkit)/.test(this.ua);
			this.android = /android/i.test(this.ua);
			this.blackberry = /blackberry/i.test(this.ua);
			this.iOS = (/iphone|ipod|ipad/gi).test(window.navigator.platform);
			this.iPad = (/ipad/gi).test(window.navigator.platform);
			this.iPhone = (/iphone/gi).test(window.navigator.platform);
			this.iPod = (/ipod/gi).test(window.navigator.platform);
			
			var testEl = document.createElement('div');
			this.is3dSupported = !Util.isNothing(testEl.style.WebkitPerspective);	
			this.isCSSTransformSupported = ( !Util.isNothing(testEl.style.WebkitTransform) || !Util.isNothing(testEl.style.MozTransform) || !Util.isNothing(testEl.style.transformProperty) );
			this.isTouchSupported = this.isEventSupported('touchstart');
			this.isGestureSupported = this.isEventSupported('gesturestart');
			
		},
		
			
		_eventTagNames: {
			'select':'input',
			'change':'input',
			'submit':'form',
			'reset':'form',
			'error':'img',
			'load':'img',
			'abort':'img'
		},
				
				
		/*
		 * Function: isEventSupported
		 * http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
		 */
		isEventSupported: function(eventName) {
			var 
				el = document.createElement(this._eventTagNames[eventName] || 'div'),
				isSupported;
			eventName = 'on' + eventName;
			isSupported = Util.objectHasProperty(el, eventName);
			if (!isSupported) {
				el.setAttribute(eventName, 'return;');
				isSupported = typeof el[eventName] === 'function';
			}
			el = null;
			return isSupported;
		},
		
		
		isLandscape: function(){
			return (Util.DOM.windowWidth() > Util.DOM.windowHeight());
		}
  };
	
	Util.Browser._detect();
	
}
(
	window,
	window.Code.Util
))
;
// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function (window, Util) {
	
	Util.extend(Util, {
		
		Events: {
			
			
			/*
			 * Function: add
			 * Add an event handler
			 */
			add: function(obj, type, handler){
				
				this._checkHandlersProperty(obj);
				
				if (type === 'mousewheel'){
					type = this._normaliseMouseWheelType();
				}
				
				if (typeof obj.__eventHandlers[type] === 'undefined'){
					obj.__eventHandlers[type] = [];
				}
				obj.__eventHandlers[type].push(handler);
				
				// DOM element 
				if (this._isBrowserObject(obj)){
					obj.addEventListener(type, handler, false);
				}
				
			},
			
			
			
			/*
			 * Function: remove
			 * Removes a handler or all handlers associated with a type
			 */
			remove: function(obj, type, handler){
				
				this._checkHandlersProperty(obj);
				
				if (type === 'mousewheel'){
					type = this._normaliseMouseWheelType();
				}
				
				if (obj.__eventHandlers[type] instanceof Array){
					
					var
						i, j,
						handlers = obj.__eventHandlers[type];
					
					// Removing all handlers for a type
					if (Util.isNothing(handler)){
						
						if (this._isBrowserObject(obj)){
							for (i=0, j=handlers.length; i<j; i++){
								obj.removeEventListener(type, handlers[i], false);
							}
						}
						
						obj.__eventHandlers[type] = [];
						return;
					}
					
					// Removing a specific handler
					for (i=0, j=handlers.length; i<j; i++){
						if (handlers[i] === handler){
							handlers.splice(i, 1);
							break;
						}
					}
					
					// DOM element 
					if (this._isBrowserObject(obj)){
						obj.removeEventListener(type, handler, false);
						return;
					}
				
				}
			
			},
			
			
			/*
			 * Function: fire
			 * Fire an event
			 */
			fire: function(obj, type){
				
				var 
					i, j,
					event,
					listeners,
					listener,
					args = Array.prototype.slice.call(arguments).splice(2),
					isNative;
				
				
				if (type === 'mousewheel'){
					type = this._normaliseMouseWheelType();
				}
				
				
				// DOM element 
				if (this._isBrowserObject(obj)){
				
					if (typeof type !== "string"){
						throw 'type must be a string for DOM elements';
					}
					
					isNative = this._NATIVE_EVENTS[type];
					event = document.createEvent(isNative ? "HTMLEvents" : "UIEvents"); 
					event[isNative ? 'initEvent' : 'initUIEvent'](type, true, true, window, 1);
					
					// Fire an event on an element that has no extra arguments
					if (args.length < 1){
						obj.dispatchEvent(event);
						return;
					}
				
				}
				
				this._checkHandlersProperty(obj);
				
				if (typeof type === "string"){
					event = { type: type };
				}
				else{
					event = type;
				}
				if (!event.target){
					event.target = obj;
				}

				if (!event.type){ 
					throw new Error("Event object missing 'type' property.");
				}

				if (obj.__eventHandlers[event.type] instanceof Array){
					listeners = obj.__eventHandlers[event.type];
					args.unshift(event);
					for (i=0, j=listeners.length; i<j; i++){
						listener = listeners[i];
						if (!Util.isNothing(listener)){
							listener.apply(obj, args);
						}
					}
				}
				
			},
			
			
			/*
			 * Function: getMousePosition
			 */
			getMousePosition: function(event){
				
				var retval = {
					x: 0,
					y: 0
				};
				
				if (event.pageX) {
					retval.x = event.pageX;
				}
				else if (event.clientX) {
					retval.x = event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
				}
			
				if (event.pageY) {
					retval.y = event.pageY;
				}
				else if (event.clientY) {
					retval.y = event.clientY + ( document.documentElement.scrollTop || document.body.scrollTop);
				}
				
				return retval;
			},
			
			
			/*
			 * Function: getTouchEvent
			 */
			getTouchEvent: function(event){
				
				return event;
			
			},
			
			
			
			/*
			 * Function: getWheelDelta
			 */
			getWheelDelta: function(event){
				
				var delta = 0;
				
				if (!Util.isNothing(event.wheelDelta)){
					delta = event.wheelDelta / 120;
				}
				else if (!Util.isNothing(event.detail)){
					delta = -event.detail / 3;
				}
				
				return delta;
				
			},
			
			
			/*
			 * Function: domReady
			 */
			domReady: function(handler){
				
				document.addEventListener('DOMContentLoaded', handler, false);
			
			},
			
			
			_checkHandlersProperty: function(obj){
				
				if (Util.isNothing(obj.__eventHandlers)){
					Util.extend(obj, {
						__eventHandlers: { }
					});
				}
			
			},
			
			
			_isBrowserObject: function(obj){
				if (obj === window || obj === window.document){
					return true;
				}
				return this._isElement(obj) || this._isNode(obj);
			},
			
			
			_isElement: function(obj){
				return (
					typeof window.HTMLElement === "object" ? obj instanceof window.HTMLElement : //DOM2
					typeof obj === "object" && obj.nodeType === 1 && typeof obj.nodeName==="string"
				);
			},
			
			
			
			_isNode: function(obj){
				return (
					typeof window.Node === "object" ? obj instanceof window.Node : 
					typeof obj === "object" && typeof obj.nodeType === "number" && typeof obj.nodeName==="string"
				);
			},
			
			
			
			_normaliseMouseWheelType: function(){
				
				if (Util.Browser.isEventSupported('mousewheel')){
					return 'mousewheel';
				}
				return 'DOMMouseScroll';
				
			},
			
			
			
			_NATIVE_EVENTS: { 
				click: 1, dblclick: 1, mouseup: 1, mousedown: 1, contextmenu: 1, //mouse buttons
				mousewheel: 1, DOMMouseScroll: 1, //mouse wheel
				mouseover: 1, mouseout: 1, mousemove: 1, selectstart: 1, selectend: 1, //mouse movement
				keydown: 1, keypress: 1, keyup: 1, //keyboard
				orientationchange: 1, // mobile
				touchstart: 1, touchmove: 1, touchend: 1, touchcancel: 1, // touch
				gesturestart: 1, gesturechange: 1, gestureend: 1, // gesture
				focus: 1, blur: 1, change: 1, reset: 1, select: 1, submit: 1, //form elements
				load: 1, unload: 1, beforeunload: 1, resize: 1, move: 1, DOMContentLoaded: 1, readystatechange: 1, //window
				error: 1, abort: 1, scroll: 1 
			}
			
		}
	
		
	});
	
	
}
(
	window,
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function (window, Util) {
	
	Util.extend(Util, {
		
		DOM: {
			
			
			
			/*
			 * Function: setData
			 */
			setData: function(el, key, value){
			
				if (Util.isLikeArray(el)){
					var i, len;
					for (i=0, len=el.length; i<len; i++){
						Util.DOM._setData(el[i], key, value);
					}
				}
				else{
					Util.DOM._setData(el, key, value);
				}
			
			},
			_setData: function(el, key, value){
			
				Util.DOM.setAttribute(el, 'data-' + key, value);
			
			},
			
			
			
			/*
			 * Function: getData
			 */
			getData: function(el, key, defaultValue){
				
				return Util.DOM.getAttribute(el, 'data-' + key, defaultValue);
				
			},
			
			
			
			/*
			 * Function: removeData
			 */
			removeData: function(el, key){
				
				if (Util.isLikeArray(el)){
					var i, len;
					for (i=0, len=el.length; i<len; i++){
						Util.DOM._removeData(el[i], key);
					}
				}
				else{
					Util.DOM._removeData(el, key);
				}
				
			},
			_removeData: function(el, key){
				
				Util.DOM.removeAttribute(el, 'data-' + key);
				
			},
			
			
			
			/*
			 * Function: isChildOf
			 */
			isChildOf: function(childEl, parentEl)
			{
				if (parentEl === childEl){ 
					return false; 
				}
				while (childEl && childEl !== parentEl)
				{ 
					childEl = childEl.parentNode; 
				}

				return childEl === parentEl;
			},
			
	
		
			/*
			 * Function: find
			 */
			find: function(selectors, contextEl){
				if (Util.isNothing(contextEl)){
					contextEl = window.document;
				}
				var 
					els = contextEl.querySelectorAll(selectors),
					retval = [],
					i, j;
				
				for (i=0, j=els.length; i<j; i++){
					retval.push(els[i]);
				}
				return retval;
			},
			
			
					
			/*
			 * Function: createElement
			 */
			createElement: function(type, attributes, content){
				
				var 
					attribute,
					retval = document.createElement(type);
					
				for(attribute in attributes) {
					if(Util.objectHasProperty(attributes, attribute)){
						retval.setAttribute(attribute, attributes[attribute]);
					}
				}
    
				retval.innerHTML = content || '';
				
				return retval;
				
			},
			
			
			/*
			 * Function: appendChild
			 */
			appendChild: function(childEl, parentEl){
				
				parentEl.appendChild(childEl);
				
			},
			
			
			/*
			 * Function: insertBefore
			 */
			insertBefore: function(newEl, refEl, parentEl){
				
				parentEl.insertBefore(newEl, refEl);
				
			},
			
			
			/*
			 * Function: appendText
			 */
			appendText: function(text, parentEl){
				
				Util.DOM.appendChild(document.createTextNode(text), parentEl);
				
			},
			
			
			/*
			 * Function: appendToBody
			 */
			appendToBody: function(childEl){
				
				this.appendChild(childEl, document.body);
				
			},
			
			
			/*
			 * Function: removeChild
			 */
			removeChild: function(childEl, parentEl){
			
				parentEl.removeChild(childEl);
				
			},
			
			
			
			/*
			 * Function: removeChildren
			 */
			removeChildren: function(parentEl){
				
				if (parentEl.hasChildNodes()){
					
					while (parentEl.childNodes.length >= 1){
						parentEl.removeChild(parentEl.childNodes[parentEl.childNodes.length -1]);
					}
					
				}
			
			},
			
			
			
			/*
			 * Function: hasAttribute
			 */
			hasAttribute: function(el, attributeName){
				
				return !Util.isNothing(el.getAttribute(attributeName));
			
			},
			
			
			
			/*
			 * Function: getAttribute
			 */
			getAttribute: function(el, attributeName, defaultValue){
				
				var retval = el.getAttribute(attributeName);
				if (Util.isNothing(retval) && !Util.isNothing(defaultValue)){
					retval = defaultValue;
				}
				return retval;
			
			},
			
			
			
			/*
			 * Function: el, attributeName
			 */
			setAttribute: function(el, attributeName, value){
				
				if (Util.isLikeArray(el)){
					var i, len;
					for (i=0, len=el.length; i<len; i++){
						Util.DOM._setAttribute(el[i], attributeName, value);
					}
				}
				else{
					Util.DOM._setAttribute(el, attributeName, value);
				}
				
			},
			_setAttribute: function(el, attributeName, value){
				
				el.setAttribute(attributeName, value);
				
			},
			
			
			
			/*
			 * Function: removeAttribute
			 */
			removeAttribute: function(el, attributeName){
				
				if (Util.isLikeArray(el)){
					var i, len;
					for (i=0, len=el.length; i<len; i++){
						Util.DOM._removeAttribute(el[i], attributeName);
					}
				}
				else{
					Util.DOM._removeAttribute(el, attributeName);
				}
			
			},
			_removeAttribute: function(el, attributeName){
				
				if (this.hasAttribute(el, attributeName)){
				
					el.removeAttribute(attributeName);
					
				}
				
			},
			
			
			
			/*
			 * Function: addClass
			 */
			addClass: function(el, className){
				
				if (Util.isLikeArray(el)){
					var i, len;
					for (i=0, len=el.length; i<len; i++){
						Util.DOM._addClass(el[i], className);
					}
				}
				else{
					Util.DOM._addClass(el, className);
				} 
				
			},
			_addClass: function(el, className){
				var 
					currentClassValue = Util.DOM.getAttribute(el, 'class', ''),
					re = new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)');
				
				if ( ! re.test(currentClassValue) ){
					if (currentClassValue !== ''){
						currentClassValue = currentClassValue + ' ';
					}
					currentClassValue = currentClassValue + className;
					Util.DOM.setAttribute(el, 'class', currentClassValue);
				}
			},
			
			
			
			/*
			 * Function: removeClass
			 */
			removeClass: function(el, className){
				
				if (Util.isLikeArray(el)){
					var i, len;
					for (i=0, len=el.length; i<len; i++){
						Util.DOM._removeClass(el[i], className);
					}
				}
				else{
					Util.DOM._removeClass(el, className);
				}
				
			},
			_removeClass: function(el, className){
				
				var 
					currentClassValue = Util.DOM.getAttribute(el, 'class', ''),
					classes = Util.trim(currentClassValue).split(' '),
					newClassVal = '',
					i, j;
				
				for (i=0, j=classes.length; i<j; i++){
					if (classes[i] !== className){
						if (newClassVal !== ''){
							newClassVal += ' ';
						}
						newClassVal += classes[i];
					}
				}
				
				if (newClassVal === ''){
					Util.DOM.removeAttribute(el, 'class');
				}
				else{
					Util.DOM.setAttribute(el, 'class', newClassVal);
				}
				
			},
			
			
			
			/*
			 * Function: hasClass
			 */
			hasClass: function(el, className){
				
				var re = new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)');
        return re.test(Util.DOM.getAttribute(el, 'class', ''));
				
			},
			
			
			
			/*
			 * Function: setStyle
			 */
			setStyle: function(el, style, value){
				
				if (Util.isLikeArray(el)){
					var i, len;
					for (i=0, len=el.length; i<len; i++){
						Util.DOM._setStyle(el[i], style, value);
					}
				}
				else{
					Util.DOM._setStyle(el, style, value);
				}
				
			},
			_setStyle: function(el, style, value){
				
				var prop, val;
				
				if (Util.isObject(style)) {
					for(prop in style) {
						if(Util.objectHasProperty(style, prop)){
							
							if (prop === 'width'){
								Util.DOM.width(el, style[prop]);
							}
							else if (prop === 'height'){
								Util.DOM.height(el, style[prop]);
							}
							else{
								el.style[prop] = style[prop];
							}
						
						}
					}
				}
				else {
					el.style[style] = value;
				}
			},
			
			
			
			/*
			 * Function: getStyle
			 */
			getStyle: function(el, styleName){
				
				var retval = window.getComputedStyle(el,'').getPropertyValue(styleName);
				if (retval === ''){
					retval = el.style[styleName];
				}
				return retval;
				
			},
			
			
			
			/*
			 * Function: hide
			 */
			hide: function(el){
				
				if (Util.isLikeArray(el)){
					var i, len;
					for (i=0, len=el.length; i<len; i++){
						Util.DOM._hide(el[i]);
					}
				}
				else{
					Util.DOM._hide(el);
				}
				
			},
			_hide: function(el){
				
				// Store the current display value if we use show
				Util.DOM.setData(el, 'ccl-disp', Util.DOM.getStyle(el, 'display'));
				Util.DOM.setStyle(el, 'display', 'none');
				
			},
			
			
			
			/*
			 * Function: show
			 */
			show: function(el){
				
				if (Util.isLikeArray(el)){
					var i, len;
					for (i=0, len=el.length; i<len; i++){
						Util.DOM._show(el[i]);
					}
				}
				else{
					Util.DOM._show(el);
				}
				
			},
			_show: function(el){
				
				if (Util.DOM.getStyle(el, 'display') === 'none'){
					var oldDisplayValue = Util.DOM.getData(el, 'ccl-disp', 'block');
					if (oldDisplayValue === 'none' || oldDisplayValue === ''){
						oldDisplayValue = 'block';
					}
					Util.DOM.setStyle(el, 'display', oldDisplayValue);
				}
				
			},
			
			
			
			/*
			 * Function: width 
			 * Content width, excludes padding
			 */
			width: function(el, value){
				
				if (!Util.isNothing(value)){
					if (Util.isNumber(value)){
						value = value + 'px';
					}
					el.style.width = value;
				}
				
				return this._getDimension(el, 'width');
				
			},
			
			
			
			/*
			 * Function: outerWidth
			 */
			outerWidth: function(el){
				
				var retval = Util.DOM.width(el);
				
				retval += parseInt(Util.DOM.getStyle(el, 'padding-left'), 10) + parseInt(Util.DOM.getStyle(el, 'padding-right'), 10); 
				retval += parseInt(Util.DOM.getStyle(el, 'margin-left'), 10) + parseInt(Util.DOM.getStyle(el, 'margin-right'), 10); 
				retval += parseInt(Util.DOM.getStyle(el, 'border-left-width'), 10) + parseInt(Util.DOM.getStyle(el, 'border-right-width'), 10); 
				return retval;
			
			},
			
			
			
			/*
			 * Function: height 
			 * Content height, excludes padding
			 */
			height: function(el, value){
				
				if (!Util.isNothing(value)){
					if (Util.isNumber(value)){
						value = value + 'px';
					}
					el.style.height = value;
				}
				
				return this._getDimension(el, 'height');
				
			},
			
			
			
			/*
			 * Function: _getDimension
			 */
			_getDimension: function(el, dimension){
				
				var 
					retval = window.parseInt(window.getComputedStyle(el,'').getPropertyValue(dimension)),
					styleBackup;
				
				if (isNaN(retval)){
					
					// If this is the case, chances are the element is not displayed and we can't get
					// the width and height. This temporarily shows and hides to get the value
					styleBackup = { 
						display: el.style.display,
						left: el.style.left
					};
					
					el.style.display = 'block';
					el.style.left = '-1000000px';
					
					retval = window.parseInt(window.getComputedStyle(el,'').getPropertyValue(dimension));
					
					el.style.display = styleBackup.display;
					el.style.left = styleBackup.left;
				}
				return retval;
				
			},
			
			
			
			/*
			 * Function: outerHeight
			 */
			outerHeight: function(el){
				
				var retval = Util.DOM.height(el);
				
				retval += parseInt(Util.DOM.getStyle(el, 'padding-top'), 10) + parseInt(Util.DOM.getStyle(el, 'padding-bottom'), 10); 
				retval += parseInt(Util.DOM.getStyle(el, 'margin-top'), 10) + parseInt(Util.DOM.getStyle(el, 'margin-bottom'), 10); 
				retval += parseInt(Util.DOM.getStyle(el, 'border-top-width'), 10) + parseInt(Util.DOM.getStyle(el, 'border-bottom-width'), 10); 
								
				return retval;
			
			},
			
			
			
			/*
			 * Function: documentWidth
			 */
			documentWidth: function(){
				
				return Util.DOM.width(document.documentElement);
				
			},


			
			/*
			 * Function: documentHeight
			 */
			documentHeight: function(){
				
				return Util.DOM.height(document.documentElement);
				
			},
			
			
			
			/*
			 * Function: documentOuterWidth
			 */
			documentOuterWidth: function(){
				
				return Util.DOM.width(document.documentElement);
				
			},

			
			
			/*
			 * Function: documentOuterHeight
			 */
			documentOuterHeight: function(){
				
				return Util.DOM.outerHeight(document.documentElement);
				
			},
			
			
			
			/*
			 * Function: bodyWidth
			 */
			bodyWidth: function(){
				
				return Util.DOM.width(document.body);
			
			},
			
			
			
			/*
			 * Function: bodyHeight
			 */
			bodyHeight: function(){
				
				return Util.DOM.height(document.body);
			
			},
			
			
			
			/*
			 * Function: bodyOuterWidth
			 */
			bodyOuterWidth: function(){
				
				return Util.DOM.outerWidth(document.body);
			
			},
			
			
			
			/*
			 * Function: bodyOuterHeight
			 */
			bodyOuterHeight: function(){
				
				return Util.DOM.outerHeight(document.body);
			
			},
			
			
			
			/*
			 * Function: windowWidth
			 */
			windowWidth: function(){
			
				return window.innerWidth;
			
			},
			
			
			
			/*
			 * Function: windowHeight
			 */
			windowHeight: function(){
			
				return window.innerHeight;
			
			},
			
			
			
			/*
			 * Function: windowScrollLeft
			 */
			windowScrollLeft: function(){
			
				return window.pageXOffset;
			
			},
			
			
			
			/*
			 * Function: windowScrollTop
			 */
			windowScrollTop: function(){
			
				return window.pageYOffset;
			
			}
			
		}
	
		
	});
	
	
}
(
	window,
	window.Code.Util
));
// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function (window, Util) {
	
	Util.extend(Util, {
		
		Animation: {
				
			_applyTransitionDelay: 50,
			
			_transitionEndLabel: (window.document.documentElement.style.webkitTransition !== undefined) ? "webkitTransitionEnd" : "transitionend",
			
			_transitionEndHandler: null,
			
			_transitionPrefix: (window.document.documentElement.style.webkitTransition !== undefined) ? "webkitTransition" : (window.document.documentElement.style.MozTransition !== undefined) ? "MozTransition" : "transition",
			
			_transformLabel: (window.document.documentElement.style.webkitTransform !== undefined) ? "webkitTransform" : (window.document.documentElement.style.MozTransition !== undefined) ? "MozTransform" : "transform",
						
			
			/*
			 * Function: _getTransitionEndHandler
			 */
			_getTransitionEndHandler: function(){
			
				if (Util.isNothing(this._transitionEndHandler)){
					this._transitionEndHandler = this._onTransitionEnd.bind(this);
				}
				
				return this._transitionEndHandler;
			
			},
			
			
			
			/*
			 * Function: stop
			 */
			stop: function(el){
				
				if (Util.Browser.isCSSTransformSupported){
					var 
						property = el.style[this._transitionPrefix + 'Property'],
						callbackLabel = (property !== '') ? 'ccl' + property + 'callback' : 'cclallcallback',
						style = {};
					
					Util.Events.remove(el, this._transitionEndLabel, this._getTransitionEndHandler());
					if (Util.isNothing(el.callbackLabel)){
						delete el.callbackLabel;
					}
					
					style[this._transitionPrefix + 'Property'] = '';
					style[this._transitionPrefix + 'Duration'] = '';
					style[this._transitionPrefix + 'TimingFunction'] = '';
					style[this._transitionPrefix + 'Delay'] = '';
					style[this._transformLabel] = '';
					
					Util.DOM.setStyle(el, style);
				}
				else if (!Util.isNothing(window.jQuery)){
				
					window.jQuery(el).stop(true, true);
				
				}
				
			
			},
			
			
			
			/*
			 * Function: fadeIn
			 */
			fadeIn: function(el, speed, callback, timingFunction, opacity){
				
				opacity = Util.coalesce(opacity, 1);
				if (opacity <= 0){
					opacity = 1;
				}
				
				if (speed <= 0){
					Util.DOM.setStyle(el, 'opacity', opacity);
					if (!Util.isNothing(callback)){
						callback(el);
						return;
					}
				}
				
				var currentOpacity = Util.DOM.getStyle(el, 'opacity');
				
				if (currentOpacity >= 1){
					Util.DOM.setStyle(el, 'opacity', 0);
				}
				
				if (Util.Browser.isCSSTransformSupported){
					this._applyTransition(el, 'opacity', opacity, speed, callback, timingFunction);
				}
				else if (!Util.isNothing(window.jQuery)){
					window.jQuery(el).fadeTo(speed, opacity, callback);
				}
				
			},
			
			
			
			/*
			 * Function: fadeTo
			 */
			fadeTo: function(el, opacity, speed, callback, timingFunction){
				this.fadeIn(el, speed, callback, timingFunction, opacity);
			},
			
			
			
			/*
			 * Function: fadeOut
			 */
			fadeOut: function(el, speed, callback, timingFunction){
				
				if (speed <= 0){
					Util.DOM.setStyle(el, 'opacity', 0);
					if (!Util.isNothing(callback)){
						callback(el);
						return;
					}
				}
				
				if (Util.Browser.isCSSTransformSupported){
				
					this._applyTransition(el, 'opacity', 0, speed, callback, timingFunction);
					
				}
				else{
				
					window.jQuery(el).fadeTo(speed, 0, callback);
				
				}
				
			},
			
			
			
			/*
			 * Function: slideBy
			 */
			slideBy: function(el, x, y, speed, callback, timingFunction){
			
				var style = {};
				
				x = Util.coalesce(x, 0);
				y = Util.coalesce(y, 0);
				timingFunction = Util.coalesce(timingFunction, 'ease-out');
				
				style[this._transitionPrefix + 'Property'] = 'all';
				style[this._transitionPrefix + 'Delay'] = '0';
				
				if (speed === 0){
					style[this._transitionPrefix + 'Duration'] = '';
					style[this._transitionPrefix + 'TimingFunction'] = '';
				}
				else{
					style[this._transitionPrefix + 'Duration'] = speed + 'ms';
					style[this._transitionPrefix + 'TimingFunction'] = Util.coalesce(timingFunction, 'ease-out');
					
					Util.Events.add(el, this._transitionEndLabel, this._getTransitionEndHandler());
					
				}
				
				style[this._transformLabel] = (Util.Browser.is3dSupported) ? 'translate3d(' + x + 'px, ' + y + 'px, 0px)' : 'translate(' + x + 'px, ' + y + 'px)';
				
				if (!Util.isNothing(callback)){
					el.cclallcallback = callback;
				}
				
				Util.DOM.setStyle(el, style);
				
				if (speed === 0){
					window.setTimeout(function(){
						this._leaveTransforms(el);
					}.bind(this), this._applyTransitionDelay);
				}
				
			},
			
			
			
			/*
			 * Function: 
			 */
			resetTranslate: function(el){
				
				var style = {};
				style[this._transformLabel] = style[this._transformLabel] = (Util.Browser.is3dSupported) ? 'translate3d(0px, 0px, 0px)' : 'translate(0px, 0px)';
				Util.DOM.setStyle(el, style);
			
			},
			
			
			
			/*
			 * Function: _applyTransition
			 */
			_applyTransition: function(el, property, val, speed, callback, timingFunction){
					
				var style = {};
				
				timingFunction = Util.coalesce(timingFunction, 'ease-in');
				
				style[this._transitionPrefix + 'Property'] = property;
				style[this._transitionPrefix + 'Duration'] = speed + 'ms';
				style[this._transitionPrefix + 'TimingFunction'] = timingFunction;
				style[this._transitionPrefix + 'Delay'] = '0';
				
				Util.Events.add(el, this._transitionEndLabel, this._getTransitionEndHandler());
				
				Util.DOM.setStyle(el, style);
				
				if (!Util.isNothing(callback)){
					el['ccl' + property + 'callback'] = callback;
				}
				
				window.setTimeout(function(){
					Util.DOM.setStyle(el, property, val);
				}, this._applyTransitionDelay);	
				
			},
			
			
			
			/*
			 * Function: _onTransitionEnd
			 */
			_onTransitionEnd: function(e){
				
				Util.Events.remove(e.currentTarget, this._transitionEndLabel, this._getTransitionEndHandler());
				this._leaveTransforms(e.currentTarget);
			
			},
			
			
			
			/*
			 * Function: _leaveTransforms
			 */
			_leaveTransforms: function(el){
				
				var 
						property = el.style[this._transitionPrefix + 'Property'],
						callbackLabel = (property !== '') ? 'ccl' + property + 'callback' : 'cclallcallback',
						callback,
						transform = Util.coalesce(el.style.webkitTransform, el.style.MozTransform, el.style.transform),
						transformMatch, 
						transformExploded,
						domX = window.parseInt(Util.DOM.getStyle(el, 'left'), 0),
						domY = window.parseInt(Util.DOM.getStyle(el, 'top'), 0),
						transformedX,
						transformedY,
						style = {};
					
				if (transform !== ''){
					if (Util.Browser.is3dSupported){
						transformMatch = transform.match( /translate3d\((.*?)\)/ );
					}
					else{
						transformMatch = transform.match( /translate\((.*?)\)/ );
					}
					if (!Util.isNothing(transformMatch)){
						transformExploded = transformMatch[1].split(', ');
						transformedX = window.parseInt(transformExploded[0], 0);
						transformedY = window.parseInt(transformExploded[1], 0);
					}
				}
				
				style[this._transitionPrefix + 'Property'] = '';
				style[this._transitionPrefix + 'Duration'] = '';
				style[this._transitionPrefix + 'TimingFunction'] = '';
				style[this._transitionPrefix + 'Delay'] = '';
				
				Util.DOM.setStyle(el, style);
				
				window.setTimeout(function(){
					
					if(!Util.isNothing(transformExploded)){
						
						style = {};
						style[this._transformLabel] = '';
						style.left = (domX + transformedX) + 'px';
						style.top = (domY + transformedY) + 'px';
						
						Util.DOM.setStyle(el, style);
						
					}
					
					if (!Util.isNothing(el[callbackLabel])){
						callback = el[callbackLabel];
						delete el[callbackLabel];
						callback(el);
					}
					
				}.bind(this), this._applyTransitionDelay);
				
			}
			
			
		}
		
		
	});
	
	
}
(
	window,
	window.Code.Util
));
// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.Util.TouchElement');
	
	
	Util.TouchElement.EventTypes = {
	
		onTouch: 'CodeUtilTouchElementOnTouch'
	
	};
	
	
	Util.TouchElement.ActionTypes = {
		
		touchStart: 'touchStart',
		touchMove: 'touchMove',
		touchEnd: 'touchEnd',
		touchMoveEnd: 'touchMoveEnd',
		tap: 'tap',
		doubleTap: 'doubleTap',
		swipeLeft: 'swipeLeft',
		swipeRight: 'swipeRight',
		swipeUp: 'swipeUp',
		swipeDown: 'swipeDown',
		gestureStart: 'gestureStart',
		gestureChange: 'gestureChange',
		gestureEnd: 'gestureEnd'
	
	};
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.Util.TouchElement');
	
	
	Util.TouchElement.TouchElementClass = klass({
		
		el: null,
		
		captureSettings: null,
		
		touchStartPoint: null,
		touchEndPoint: null,
		touchStartTime: null,
		doubleTapTimeout: null,
		
		touchStartHandler: null,
		touchMoveHandler: null,
		touchEndHandler: null,
		
		mouseDownHandler: null,
		mouseMoveHandler: null,
		mouseUpHandler: null,
		mouseOutHandler: null,
		
		gestureStartHandler: null,
		gestureChangeHandler: null,
		gestureEndHandler: null,
		
		swipeThreshold: null,
		swipeTimeThreshold: null,
		doubleTapSpeed: null,
		
		
		
		/*
		 * Function: dispose
		 */
		dispose: function(){
		
			var prop;
			
			this.removeEventHandlers();
			
			for (prop in this) {
				if (Util.objectHasProperty(this, prop)) {
					this[prop] = null;
				}
			}
		
		},
		
		
		
		/*
		 * Function: initialize
		 */
		initialize: function(el, captureSettings){
			
			this.el = el;
			
			this.captureSettings = {
				swipe: false,
				move: false,
				gesture: false,
				doubleTap: false,
				preventDefaultTouchEvents: true
			};
			
			Util.extend(this.captureSettings, captureSettings);
			
			this.swipeThreshold = 50;
			this.swipeTimeThreshold = 250;
			this.doubleTapSpeed = 250;
			
			this.touchStartPoint = { x: 0, y: 0 };
			this.touchEndPoint = { x: 0, y: 0 };
			
		},
		
		
		
		/*
		 * Function: addEventHandlers
		 */
		addEventHandlers: function(){
		
			if (Util.isNothing(this.touchStartHandler)){
				this.touchStartHandler = this.onTouchStart.bind(this);
				this.touchMoveHandler = this.onTouchMove.bind(this);
				this.touchEndHandler = this.onTouchEnd.bind(this);
				this.mouseDownHandler = this.onMouseDown.bind(this);
				this.mouseMoveHandler = this.onMouseMove.bind(this);
				this.mouseUpHandler = this.onMouseUp.bind(this);
				this.mouseOutHandler = this.onMouseOut.bind(this);
				this.gestureStartHandler = this.onGestureStart.bind(this);
				this.gestureChangeHandler = this.onGestureChange.bind(this);
				this.gestureEndHandler = this.onGestureEnd.bind(this);
			}
			
			Util.Events.add(this.el, 'touchstart', this.touchStartHandler);
			if (this.captureSettings.move){
				Util.Events.add(this.el, 'touchmove', this.touchMoveHandler);
			}
			Util.Events.add(this.el, 'touchend', this.touchEndHandler);
			
			Util.Events.add(this.el, 'mousedown', this.mouseDownHandler);
			
			if (Util.Browser.isGestureSupported && this.captureSettings.gesture){
				Util.Events.add(this.el, 'gesturestart', this.gestureStartHandler);
				Util.Events.add(this.el, 'gesturechange', this.gestureChangeHandler);
				Util.Events.add(this.el, 'gestureend', this.gestureEndHandler);
			}
			
		},
		
		
		
		/*
		 * Function: removeEventHandlers
		 */
		removeEventHandlers: function(){
			
			Util.Events.remove(this.el, 'touchstart', this.touchStartHandler);
			if (this.captureSettings.move){
				Util.Events.remove(this.el, 'touchmove', this.touchMoveHandler);
			}
			Util.Events.remove(this.el, 'touchend', this.touchEndHandler);
			Util.Events.remove(this.el, 'mousedown', this.mouseDownHandler);
			
			if (Util.Browser.isGestureSupported && this.captureSettings.gesture){
				Util.Events.remove(this.el, 'gesturestart', this.gestureStartHandler);
				Util.Events.remove(this.el, 'gesturechange', this.gestureChangeHandler);
				Util.Events.remove(this.el, 'gestureend', this.gestureEndHandler);
			}
			
		},
		
		
		
		/*
		 * Function: getTouchPoint
		 */
		getTouchPoint: function(touches){
			
			return {
				x: touches[0].pageX,
				y: touches[0].pageY
			};
			
		},
		
		
		
		/*
		 * Function: fireTouchEvent
		 */
		fireTouchEvent: function(e){
			
			var 
				action,
				distX = 0,
				distY = 0,
				dist = 0,
				self,
				endTime,
				diffTime;

			distX = this.touchEndPoint.x - this.touchStartPoint.x;
			distY = this.touchEndPoint.y - this.touchStartPoint.y;
			dist = Math.sqrt( (distX * distX) + (distY * distY) );
			
			if (this.captureSettings.swipe){
				endTime = new Date();
				diffTime = endTime - this.touchStartTime;
				
				// See if there was a swipe gesture
				if (diffTime <= this.swipeTimeThreshold){
					
					if (window.Math.abs(distX) >= this.swipeThreshold){
					
						Util.Events.fire(this, { 
							type: Util.TouchElement.EventTypes.onTouch, 
							target: this, 
							point: this.touchEndPoint,
							action: (distX < 0) ? Util.TouchElement.ActionTypes.swipeLeft : Util.TouchElement.ActionTypes.swipeRight,
							targetEl: e.target,
							currentTargetEl: e.currentTarget
						});
						return;
						
					}
					
					
					if (window.Math.abs(distY) >= this.swipeThreshold){
						
						Util.Events.fire(this, { 
							type: Util.TouchElement.EventTypes.onTouch, 
							target: this, 
							point: this.touchEndPoint,
							action: (distY < 0) ? Util.TouchElement.ActionTypes.swipeUp : Util.TouchElement.ActionTypes.swipeDown,
							targetEl: e.target,
							currentTargetEl: e.currentTarget
						});
						return;
					
					}
					
				}
			}
			
			
			if (dist > 1){
			
				Util.Events.fire(this, { 
					type: Util.TouchElement.EventTypes.onTouch, 
					target: this, 
					action: Util.TouchElement.ActionTypes.touchMoveEnd,
					point: this.touchEndPoint,
					targetEl: e.target,
					currentTargetEl: e.currentTarget
				});
				return;
			}
			
			
			if (!this.captureSettings.doubleTap){
				
				Util.Events.fire(this, { 
					type: Util.TouchElement.EventTypes.onTouch, 
					target: this, 
					point: this.touchEndPoint,
					action: Util.TouchElement.ActionTypes.tap,
					targetEl: e.target,
					currentTargetEl: e.currentTarget
				});
				return;
				
			}
			
			if (Util.isNothing(this.doubleTapTimeout)){
				
				this.doubleTapTimeout = window.setTimeout(function(){
					
					this.doubleTapTimeout = null;
					
					Util.Events.fire(this, { 
						type: Util.TouchElement.EventTypes.onTouch, 
						target: this, 
						point: this.touchEndPoint,
						action: Util.TouchElement.ActionTypes.tap,
						targetEl: e.target,
						currentTargetEl: e.currentTarget
					});
					
				}.bind(this), this.doubleTapSpeed);
				
				return;
				
			}
			else{
				
				window.clearTimeout(this.doubleTapTimeout);
				this.doubleTapTimeout = null;
			
				Util.Events.fire(this, { 
					type: Util.TouchElement.EventTypes.onTouch, 
					target: this, 
					point: this.touchEndPoint,
					action: Util.TouchElement.ActionTypes.doubleTap,
					targetEl: e.target,
					currentTargetEl: e.currentTarget
				});
				
			}
			
		},
		
		
		
		/*
		 * Function: onTouchStart
		 */
		onTouchStart: function(e){
			
			if (this.captureSettings.preventDefaultTouchEvents){
				e.preventDefault();
			}
			
			// No longer need mouse events
			Util.Events.remove(this.el, 'mousedown', this.mouseDownHandler);
			
			var 
				touchEvent = Util.Events.getTouchEvent(e),
				touches = touchEvent.touches;
			
			if (touches.length > 1 && this.captureSettings.gesture){
				this.isGesture = true;
				return;
			}
			
			this.touchStartTime = new Date();
			this.isGesture = false;
			this.touchStartPoint = this.getTouchPoint(touches);
			
			Util.Events.fire(this, { 
				type: Util.TouchElement.EventTypes.onTouch, 
				target: this, 
				action: Util.TouchElement.ActionTypes.touchStart,
				point: this.touchStartPoint,
				targetEl: e.target,
				currentTargetEl: e.currentTarget
			});
			
			
		},
		
		
		
		/*
		 * Function: onTouchMove
		 */
		onTouchMove: function(e){
			
			if (this.captureSettings.preventDefaultTouchEvents){
				e.preventDefault();
			}
			
			if (this.isGesture && this.captureSettings.gesture){
				return;
			}
			
			var 
				touchEvent = Util.Events.getTouchEvent(e),
				touches = touchEvent.touches;
			
			Util.Events.fire(this, { 
				type: Util.TouchElement.EventTypes.onTouch, 
				target: this, 
				action: Util.TouchElement.ActionTypes.touchMove,
				point: this.getTouchPoint(touches),
				targetEl: e.target,
				currentTargetEl: e.currentTarget
			});
			
		},
		
		
		
		/*
		 * Function: onTouchEnd
		 */
		onTouchEnd: function(e){
			
			if (this.isGesture && this.captureSettings.gesture){
				return;
			}
			
			if (this.captureSettings.preventDefaultTouchEvents){
				e.preventDefault();
			}
			
			// http://backtothecode.blogspot.com/2009/10/javascript-touch-and-gesture-events.html
			// iOS removed the current touch from e.touches on "touchend"
			// Need to look into e.changedTouches
			
			var 
				touchEvent = Util.Events.getTouchEvent(e),
				touches = (!Util.isNothing(touchEvent.changedTouches)) ? touchEvent.changedTouches : touchEvent.touches;
			
			this.touchEndPoint = this.getTouchPoint(touches);
			
			Util.Events.fire(this, { 
				type: Util.TouchElement.EventTypes.onTouch, 
				target: this, 
				action: Util.TouchElement.ActionTypes.touchEnd,
				point: this.touchEndPoint,
				targetEl: e.target,
				currentTargetEl: e.currentTarget
			});
				
			this.fireTouchEvent(e);
			
		},
		
		
		
		/*
		 * Function: onMouseDown
		 */
		onMouseDown: function(e){
			
			e.preventDefault();
			
			// No longer need touch events
			Util.Events.remove(this.el, 'touchstart', this.mouseDownHandler);
			Util.Events.remove(this.el, 'touchmove', this.touchMoveHandler);
			Util.Events.remove(this.el, 'touchend', this.touchEndHandler);
			
			// Add move/up/out
			if (this.captureSettings.move){
				Util.Events.add(this.el, 'mousemove', this.mouseMoveHandler);
			}
			Util.Events.add(this.el, 'mouseup', this.mouseUpHandler);
			Util.Events.add(this.el, 'mouseout', this.mouseOutHandler);
			
			this.touchStartTime = new Date();
			this.isGesture = false;
			this.touchStartPoint = Util.Events.getMousePosition(e);
			
			Util.Events.fire(this, { 
				type: Util.TouchElement.EventTypes.onTouch, 
				target: this, 
				action: Util.TouchElement.ActionTypes.touchStart,
				point: this.touchStartPoint,
				targetEl: e.target,
				currentTargetEl: e.currentTarget
			});
			
		},
		
		
		
		/*
		 * Function: onMouseMove
		 */
		onMouseMove: function(e){
			
			e.preventDefault();
			
			Util.Events.fire(this, { 
				type: Util.TouchElement.EventTypes.onTouch, 
				target: this, 
				action: Util.TouchElement.ActionTypes.touchMove,
				point: Util.Events.getMousePosition(e),
				targetEl: e.target,
				currentTargetEl: e.currentTarget
			});
			
		},
		
		
		
		/*
		 * Function: onMouseUp
		 */
		onMouseUp: function(e){
			
			e.preventDefault();
			
			if (this.captureSettings.move){
				Util.Events.remove(this.el, 'mousemove', this.mouseMoveHandler);
			}
			Util.Events.remove(this.el, 'mouseup', this.mouseUpHandler);
			Util.Events.remove(this.el, 'mouseout', this.mouseOutHandler);
			
			this.touchEndPoint = Util.Events.getMousePosition(e);
			
			Util.Events.fire(this, { 
				type: Util.TouchElement.EventTypes.onTouch, 
				target: this, 
				action: Util.TouchElement.ActionTypes.touchEnd,
				point: this.touchEndPoint,
				targetEl: e.target,
				currentTargetEl: e.currentTarget
			});
			
			this.fireTouchEvent(e);
		
		},
		
		
		
		/*
		 * Function: onMouseOut
		 */
		onMouseOut: function(e){
			
			/*
			 * http://blog.stchur.com/2007/03/15/mouseenter-and-mouseleave-events-for-firefox-and-other-non-ie-browsers/
			 */
			var relTarget = e.relatedTarget;
			if (this.el === relTarget || Util.DOM.isChildOf(relTarget, this.el)){ 
				return;
			}
			
			e.preventDefault();
			
			if (this.captureSettings.move){
				Util.Events.remove(this.el, 'mousemove', this.mouseMoveHandler);
			}
			Util.Events.remove(this.el, 'mouseup', this.mouseUpHandler);
			Util.Events.remove(this.el, 'mouseout', this.mouseOutHandler);
			
			this.touchEndPoint = Util.Events.getMousePosition(e);
			
			Util.Events.fire(this, { 
				type: Util.TouchElement.EventTypes.onTouch, 
				target: this, 
				action: Util.TouchElement.ActionTypes.touchEnd,
				point: this.touchEndPoint,
				targetEl: e.target,
				currentTargetEl: e.currentTarget
			});
			
			this.fireTouchEvent(e);
			
		},
		
		
		
		/*
		 * Function: onGestureStart
		 */
		onGestureStart: function(e){
		
			e.preventDefault();
			
			var touchEvent = Util.Events.getTouchEvent(e);
			
			Util.Events.fire(this, { 
				type: Util.TouchElement.EventTypes.onTouch, 
				target: this, 
				action: Util.TouchElement.ActionTypes.gestureStart,
				scale: touchEvent.scale,
				rotation: touchEvent.rotation,
				targetEl: e.target,
				currentTargetEl: e.currentTarget
			});
		
		},
		
		
		
		/*
		 * Function: onGestureChange
		 */
		onGestureChange: function(e){
		
			e.preventDefault();
			
			var touchEvent = Util.Events.getTouchEvent(e);
			
			Util.Events.fire(this, { 
				type: Util.TouchElement.EventTypes.onTouch, 
				target: this, 
				action: Util.TouchElement.ActionTypes.gestureChange,
				scale: touchEvent.scale,
				rotation: touchEvent.rotation,
				targetEl: e.target,
				currentTargetEl: e.currentTarget
			});
			
		},
		
		
		
		/*
		 * Function: onGestureEnd
		 */
		onGestureEnd: function(e){
		
			e.preventDefault();
			
			var touchEvent = Util.Events.getTouchEvent(e);
			
			Util.Events.fire(this, { 
				type: Util.TouchElement.EventTypes.onTouch, 
				target: this, 
				action: Util.TouchElement.ActionTypes.gestureEnd,
				scale: touchEvent.scale,
				rotation: touchEvent.rotation,
				targetEl: e.target,
				currentTargetEl: e.currentTarget
			});
			
		}
		
		
		
	});
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.Image');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	
	PhotoSwipe.Image.EventTypes = {
		
		onLoad: 'onLoad',
		onError: 'onError'
		
	};
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.Image');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	
	PhotoSwipe.Image.ImageClass = klass({
		
		
		
		refObj: null,
		imageEl: null,
		src: null,
		caption: null,
		metaData: null,
		imageLoadHandler: null,
		imageErrorHandler: null,
		
		
		
		/*
		 * Function: dispose
		 */
		dispose: function(){
		
			var prop, i;
			
			this.shrinkImage();
			
			for (prop in this) {
				if (Util.objectHasProperty(this, prop)) {
					this[prop] = null;
				}
			}
		
		},
		
		
		
		/*
		 * Function: initialize
		 */
		initialize: function(refObj, src, caption, metaData){
			
			this.refObj = refObj;
			// This is needed. Webkit resolves the src
			// value which means we can't compare against it in the load function
			this.originalSrc = src;
			this.src = src;
			this.caption = caption;
			this.metaData = metaData;
			
			this.imageEl = new window.Image();
			
			this.imageLoadHandler = this.onImageLoad.bind(this);
			this.imageErrorHandler = this.onImageError.bind(this);
			
		},
		
		
		
		/*
		 * Function: load
		 */
		load: function(){
			
			this.imageEl.originalSrc = Util.coalesce(this.imageEl.originalSrc, '');
			
			if (this.imageEl.originalSrc === this.src){
				
				if (this.imageEl.isError){
					Util.Events.fire(this, {
						type: PhotoSwipe.Image.EventTypes.onError,
						target: this
					});
				}
				else{
					Util.Events.fire(this, {
						type: PhotoSwipe.Image.EventTypes.onLoad,
						target: this
					});
				}
				return;
			}
			
			this.imageEl.isError = false;
			this.imageEl.isLoading = true;
			this.imageEl.naturalWidth = null;
			this.imageEl.naturalHeight = null;
			this.imageEl.isLandscape = false;
			this.imageEl.onload = this.imageLoadHandler;
			this.imageEl.onerror = this.imageErrorHandler;
			this.imageEl.onabort = this.imageErrorHandler;
			this.imageEl.originalSrc = this.src;
			this.imageEl.src = this.src;
			
		},
		
		
		
		/*
		 * Function: shrinkImage
		 */
		shrinkImage: function(){
		
			if (Util.isNothing(this.imageEl)){
				return;
			}
			
			if (this.imageEl.src.indexOf(this.src) > -1){
				this.imageEl.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
				if (!Util.isNothing(this.imageEl.parentNode)){
					Util.DOM.removeChild(this.imageEl, this.imageEl.parentNode);
				}
			}
		
		},
		
		
		
		/*
		 * Function: onImageLoad
		 */
		onImageLoad: function(e){
			
			this.imageEl.onload = null;
			this.imageEl.naturalWidth = Util.coalesce(this.imageEl.naturalWidth, this.imageEl.width);
			this.imageEl.naturalHeight = Util.coalesce(this.imageEl.naturalHeight, this.imageEl.height);
			this.imageEl.isLandscape = (this.imageEl.naturalWidth > this.imageEl.naturalHeight);
			this.imageEl.isLoading = false;
			
			Util.Events.fire(this, {
				type: PhotoSwipe.Image.EventTypes.onLoad,
				target: this
			});
			
		},
		
		
		
		/*
		 * Function: onImageError
		 */
		onImageError: function(e){
		
			this.imageEl.onload = null;
			this.imageEl.onerror = null;
			this.imageEl.onabort = null;
			this.imageEl.isLoading = false;
			this.imageEl.isError = true;
			
			Util.Events.fire(this, {
				type: PhotoSwipe.Image.EventTypes.onError,
				target: this
			});
			
		}
		
		
		
	});
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.Cache');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	
	PhotoSwipe.Cache.Mode = {
		
		normal: 'normal',
		aggressive: 'aggressive'
		
	};
	
	
	
	PhotoSwipe.Cache.Functions = {
		
		/*
		 * Function: getImageSource
		 * Default method for returning an image's source
		 */
		getImageSource: function(el){
			return el.href;
		},
	
	
	
		/*
		 * Function: getImageCaption
		 * Default method for returning an image's caption
		 * Assumes the el is an anchor and the first child is the
		 * image. The returned value is the "alt" attribute of the
		 * image.
		 */
		getImageCaption: function(el){
			
			if (el.nodeName === "IMG"){
				return Util.DOM.getAttribute(el, 'alt'); 
			}
			var i, j, childEl;
			for (i=0, j=el.childNodes.length; i<j; i++){
				childEl = el.childNodes[i];
				if (el.childNodes[i].nodeName === 'IMG'){
					return Util.DOM.getAttribute(childEl, 'alt'); 
				}
			}
			
		},
	
	
	
		/*
		 * Function: getImageMetaData
		 * Can be used if you wish to store additional meta
		 * data against the full size image
		 */
		getImageMetaData: function(el){
			
			return  {};
			
		}
		
	};
	
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.Cache');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	
	PhotoSwipe.Cache.CacheClass = klass({
		
		
		
		images: null,
		settings: null,
		
		
		
		/*
		 * Function: dispose
		 */
		dispose: function(){
		
			var prop, i, j;
			
			if (!Util.isNothing(this.images)){
				for (i=0, j=this.images.length; i<j; i++){
					this.images[i].dispose();
				}
				this.images.length = 0;
			}
			
			for (prop in this) {
				if (Util.objectHasProperty(this, prop)) {
					this[prop] = null;
				}
			}
		
		},
		
		
		
		/*
		 * Function: initialize
		 */
		initialize: function(images, options){
			
			var i, j, cacheImage, image, src, caption, metaData;
			
			this.settings = options;
			
			this.images = [];
			
			for (i=0, j=images.length; i<j; i++){
				
				image = images[i];
				src = this.settings.getImageSource(image);
				caption = this.settings.getImageCaption(image);
				metaData = this.settings.getImageMetaData(image);
				
				this.images.push(new PhotoSwipe.Image.ImageClass(image, src, caption, metaData));
				
			}
			
			
		},
		
		
		
		/*
		 * Function: getImages
		 */
		getImages: function(indexes){
		
			var i, j, retval = [], cacheImage;
			
			for (i=0, j=indexes.length; i<j; i++){
				cacheImage = this.images[indexes[i]];
				if (this.settings.cacheMode === PhotoSwipe.Cache.Mode.aggressive){
					cacheImage.cacheDoNotShrink = true;
				}
				retval.push(cacheImage);
			}
			
			if (this.settings.cacheMode === PhotoSwipe.Cache.Mode.aggressive){
				for (i=0, j=this.images.length; i<j; i++){
					cacheImage = this.images[i];
					if (!Util.objectHasProperty(cacheImage, 'cacheDoNotShrink')){
						cacheImage.shrinkImage();
					}
					else{
						delete cacheImage.cacheDoNotShrink;
					}
				}
			}
			
			return retval;
			
		}
		
		
	});
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util,
	window.Code.PhotoSwipe.Image
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.DocumentOverlay');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	
	PhotoSwipe.DocumentOverlay.CssClasses = {
		documentOverlay: 'ps-document-overlay'
	};
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.DocumentOverlay');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	
	PhotoSwipe.DocumentOverlay.DocumentOverlayClass = klass({
		
		
		
		el: null,
		settings: null,
		initialBodyHeight: null,
		
		
		
		/*
		 * Function: dispose
		 */
		dispose: function(){
		
			var prop;
			
			Util.Animation.stop(this.el);
			Util.DOM.removeChild(this.el, this.el.parentNode);
			
			for (prop in this) {
				if (Util.objectHasProperty(this, prop)) {
					this[prop] = null;
				}
			}
		
		},
		
		
		
		/*
		 * Function: initialize
		 */
		initialize: function(options){
			
			this.settings = options;
			
			this.el = Util.DOM.createElement(
				'div', 
				{ 
					'class': PhotoSwipe.DocumentOverlay.CssClasses.documentOverlay
				}, 
				''
			);
			Util.DOM.setStyle(this.el, {
				display: 'block',
				position: 'absolute',
				left: 0,
				top: 0,
				zIndex: this.settings.zIndex
			});
		
			Util.DOM.hide(this.el);
			if (this.settings.target === window){
				Util.DOM.appendToBody(this.el);
			}
			else{
				Util.DOM.appendChild(this.el, this.settings.target);
			}
			
			Util.Animation.resetTranslate(this.el);
			
			// Store this value incase the body dimensions change to zero!
			// I've seen it happen! :D
			this.initialBodyHeight = Util.DOM.bodyOuterHeight();
			
			
		},
		
		
		
		/*
		 * Function: resetPosition
		 */
		resetPosition: function(){
			
			var width, height, top;
			
			if (this.settings.target === window){
				
				width = Util.DOM.windowWidth();
				height = Util.DOM.bodyOuterHeight() * 2; // This covers extra height added by photoswipe
				top = (this.settings.jQueryMobile) ? Util.DOM.windowScrollTop() + 'px' : '0px';
				
				if (height < 1){
					height = this.initialBodyHeight;
				}

				if (Util.DOM.windowHeight() > height){
					height = Util.DOM.windowHeight();
				}
				
			}
			else{
				
				width = Util.DOM.width(this.settings.target);
				height = Util.DOM.height(this.settings.target);
				top = '0px';
				
			}
			
			Util.DOM.setStyle(this.el, {
				width: width,
				height: height,
				top: top
			});
		
		},
		
		
		
		/*
		 * Function: fadeIn
		 */
		fadeIn: function(speed, callback){
		
			this.resetPosition();
			
			Util.DOM.setStyle(this.el, 'opacity', 0);
			Util.DOM.show(this.el);
			
			Util.Animation.fadeIn(this.el, speed, callback);
		
		}
		
		
	});
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.Carousel');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	
	PhotoSwipe.Carousel.EventTypes = {
	
		onSlideByEnd: 'PhotoSwipeCarouselOnSlideByEnd',
		onSlideshowStart: 'PhotoSwipeCarouselOnSlideshowStart',
		onSlideshowStop: 'PhotoSwipeCarouselOnSlideshowStop'
		
	};
	
	
	
	PhotoSwipe.Carousel.CssClasses = {
		carousel: 'ps-carousel',
		content: 'ps-carousel-content',
		item: 'ps-carousel-item',
		itemLoading: 'ps-carousel-item-loading',
		itemError: 'ps-carousel-item-error'
	};
	
	
	
	PhotoSwipe.Carousel.SlideByAction = {
		previous: 'previous',
		current: 'current',
		next: 'next'
	};
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.Carousel');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	PhotoSwipe.Carousel.CarouselClass = klass({
		
		
		
		el: null,
		contentEl: null,
		settings: null,
		cache: null,
		slideByEndHandler: null,
		currentCacheIndex: null,
		isSliding: null,
		isSlideshowActive: null,
		lastSlideByAction: null,
		touchStartPoint: null,
		touchStartPosition: null,
		imageLoadHandler: null,
		imageErrorHandler: null,
		slideshowTimeout: null,
		
		
		
		/*
		 * Function: dispose
		 */
		dispose: function(){
		
			var prop, i, j;
			
			for (i=0, j=this.cache.images.length; i<j; i++){
				Util.Events.remove(this.cache.images[i], PhotoSwipe.Image.EventTypes.onLoad, this.imageLoadHandler);
				Util.Events.remove(this.cache.images[i], PhotoSwipe.Image.EventTypes.onError, this.imageErrorHandler);
			}
			
			this.stopSlideshow();
			Util.Animation.stop(this.el);
			Util.DOM.removeChild(this.el, this.el.parentNode);
			
			for (prop in this) {
				if (Util.objectHasProperty(this, prop)) {
					this[prop] = null;
				}
			}
		
		},
		
		
		
		/*
		 * Function: initialize
		 */
		initialize: function(cache, options){
			
			//this.supr(true);
			
			var i, totalItems, itemEl;
			
			this.cache = cache;
			this.settings = options;
			this.slideByEndHandler = this.onSlideByEnd.bind(this);
			this.imageLoadHandler = this.onImageLoad.bind(this);
			this.imageErrorHandler = this.onImageError.bind(this);
			this.currentCacheIndex = 0;
			this.isSliding = false;
			this.isSlideshowActive = false;
			
			// No looping if < 3 images
			if (this.cache.images.length < 3){
				this.settings.loop = false;
			}
			
			// Main container 
			this.el = Util.DOM.createElement(
				'div', 
				{ 
					'class': PhotoSwipe.Carousel.CssClasses.carousel
				}, 
				''
			);
			Util.DOM.setStyle(this.el, {
				display: 'block',
				position: 'absolute',
				left: 0,
				top: 0,
				overflow: 'hidden',
				zIndex: this.settings.zIndex
			});
			Util.DOM.hide(this.el);
			
			
			// Content
			this.contentEl = Util.DOM.createElement(
				'div', 
				{ 
					'class': PhotoSwipe.Carousel.CssClasses.content
				}, 
				''
			);
			Util.DOM.setStyle(this.contentEl, {
				display: 'block',
				position: 'absolute',
				left: 0,
				top: 0
			});
			
			Util.DOM.appendChild(this.contentEl, this.el);
			
			
			// Items
			totalItems = (cache.images.length < 3) ? cache.images.length : 3;
			
			for (i=0; i<totalItems; i++){
				
				itemEl = Util.DOM.createElement(
					'div', 
					{ 
						'class': PhotoSwipe.Carousel.CssClasses.item + 
						' ' + PhotoSwipe.Carousel.CssClasses.item + '-'+ i
					}, 
					''
				);
				Util.DOM.setAttribute(itemEl, 'style', 'float: left;');
				Util.DOM.setStyle(itemEl, {
					display: 'block',
					position: 'relative',
					left: 0,
					top: 0,
					overflow: 'hidden'
				});
				
				if (this.settings.margin > 0){
					Util.DOM.setStyle(itemEl, {
						marginRight: this.settings.margin + 'px'
					});
				}
				
				Util.DOM.appendChild(itemEl, this.contentEl);
				
			}
			
			
			if (this.settings.target === window){
				Util.DOM.appendToBody(this.el);
			}
			else{
				Util.DOM.appendChild(this.el, this.settings.target);
			}
			
		},
		
		
		
		
		/*
		 * Function: resetPosition
		 */
		resetPosition: function(){
			
			var width, height, top, itemWidth, itemEls, contentWidth, i, j, itemEl, imageEl;
			
			if (this.settings.target === window){
				width = Util.DOM.windowWidth();
				height = Util.DOM.windowHeight();
				top = Util.DOM.windowScrollTop()  + 'px';
			}
			else{
				width = Util.DOM.width(this.settings.target);
				height = Util.DOM.height(this.settings.target);
				top = '0px';
			}
			
			itemWidth = (this.settings.margin > 0) ? width + this.settings.margin : width;
			itemEls = Util.DOM.find('.' + PhotoSwipe.Carousel.CssClasses.item, this.contentEl);
			contentWidth = itemWidth * itemEls.length;
			
			
			// Set the height and width to fill the document
			Util.DOM.setStyle(this.el, {
				top: top,
				width: width,
				height: height
			});
			
			
			// Set the height and width of the content el
			Util.DOM.setStyle(this.contentEl, {
				width: contentWidth,
				height: height
			});
			
			
			// Set the height and width of item elements
			for (i=0, j=itemEls.length; i<j; i++){
				
				itemEl = itemEls[i];
				Util.DOM.setStyle(itemEl, {
					width: width,
					height: height
				});
				
				// If an item has an image then resize that
				imageEl = Util.DOM.find('img', itemEl)[0];
				if (!Util.isNothing(imageEl)){
					this.resetImagePosition(imageEl);
				}
				
			}
			
			this.setContentLeftPosition();
			
			
		},
		
		
		
		/*
		 * Function: resetImagePosition
		 */
		resetImagePosition: function(imageEl){
			
			if (Util.isNothing(imageEl)){
				return;
			}
			
			var 
				src = Util.DOM.getAttribute(imageEl, 'src'),
				scale, 
				newWidth, 
				newHeight, 
				newTop, 
				newLeft,
				maxWidth = Util.DOM.width(this.el),
				maxHeight = Util.DOM.height(this.el);
			
			if (this.settings.imageScaleMethod === 'fitNoUpscale'){
				
				newWidth = imageEl.naturalWidth;
				newHeight =imageEl.naturalHeight;
				
				if (newWidth > maxWidth){
					scale = maxWidth / newWidth;
					newWidth = Math.round(newWidth * scale);
					newHeight = Math.round(newHeight * scale);
				}
				
				if (newHeight > maxHeight){
					scale = maxHeight / newHeight;
					newHeight = Math.round(newHeight * scale);
					newWidth = Math.round(newWidth * scale);
				}
				
			}
			else{
				
				if (imageEl.isLandscape) {
					// Ensure the width fits the screen
					scale = maxWidth / imageEl.naturalWidth;
				}
				else {
					// Ensure the height fits the screen
					scale = maxHeight / imageEl.naturalHeight;
				}
				
				newWidth = Math.round(imageEl.naturalWidth * scale);
				newHeight = Math.round(imageEl.naturalHeight * scale);
				
				if (this.settings.imageScaleMethod === 'zoom'){
					
					scale = 1;
					if (newHeight < maxHeight){
						scale = maxHeight /newHeight;	
					}
					else if (newWidth < maxWidth){
						scale = maxWidth /newWidth;	
					}
					
					if (scale !== 1) {
						newWidth = Math.round(newWidth * scale);
						newHeight = Math.round(newHeight * scale);
					}
					
				}
				else if (this.settings.imageScaleMethod === 'fit') {
					// Rescale again to ensure full image fits into the viewport
					scale = 1;
					if (newWidth > maxWidth) {
						scale = maxWidth / newWidth;
					}
					else if (newHeight > maxHeight) {
						scale = maxHeight / newHeight;
					}
					if (scale !== 1) {
						newWidth = Math.round(newWidth * scale);
						newHeight = Math.round(newHeight * scale);
					}
				}
			
			}
			
			newTop = Math.round( ((maxHeight - newHeight) / 2) ) + 'px';
			newLeft = Math.round( ((maxWidth - newWidth) / 2) ) + 'px';
			
			Util.DOM.setStyle(imageEl, {
				position: 'absolute',
				width: newWidth,
				height: newHeight,
				top: newTop,
				left: newLeft,
				display: 'block'
			});
		
		},
		
		
		
		/*
		 * Function: setContentLeftPosition
		 */
		setContentLeftPosition: function(){
		
			var width, itemEls, left;
			if (this.settings.target === window){
				width = Util.DOM.windowWidth();
			}
			else{
				width = Util.DOM.width(this.settings.target);
			}
			
			itemEls = this.getItemEls();
			left = 0;
				
			if (this.settings.loop){
				left = (width + this.settings.margin) * -1;
			}
			else{
				
				if (this.currentCacheIndex === this.cache.images.length-1){
					left = ((itemEls.length-1) * (width + this.settings.margin)) * -1;
				}
				else if (this.currentCacheIndex > 0){
					left = (width + this.settings.margin) * -1;
				}
				
			}
			
			Util.DOM.setStyle(this.contentEl, {
				left: left + 'px'
			});
			
		},
		
		
		
		/*
		 * Function: 
		 */
		show: function(index){
			
			this.currentCacheIndex = index;
			this.resetPosition();
			this.setImages(false);
			Util.DOM.show(this.el);
			
			Util.Animation.resetTranslate(this.contentEl);
			var 
				itemEls = this.getItemEls(),
				i, j;
			for (i=0, j=itemEls.length; i<j; i++){
				Util.Animation.resetTranslate(itemEls[i]);
			}
			
			Util.Events.fire(this, {
				type: PhotoSwipe.Carousel.EventTypes.onSlideByEnd,
				target: this,
				action: PhotoSwipe.Carousel.SlideByAction.current,
				cacheIndex: this.currentCacheIndex
			});
			
		},
		
		
		
		/*
		 * Function: setImages
		 */
		setImages: function(ignoreCurrent){
			
			var 
				cacheImages,
				itemEls = this.getItemEls(),
				nextCacheIndex = this.currentCacheIndex + 1,
				previousCacheIndex = this.currentCacheIndex - 1;
			
			if (this.settings.loop){
				
				if (nextCacheIndex > this.cache.images.length-1){
					nextCacheIndex = 0;
				}
				if (previousCacheIndex < 0){
					previousCacheIndex = this.cache.images.length-1;
				}
				
				cacheImages = this.cache.getImages([
					previousCacheIndex,
					this.currentCacheIndex,
					nextCacheIndex
				]);
				
				if (!ignoreCurrent){
					// Current
					this.addCacheImageToItemEl(cacheImages[1], itemEls[1]);
				}
				// Next
				this.addCacheImageToItemEl(cacheImages[2], itemEls[2]);
				// Previous
				this.addCacheImageToItemEl(cacheImages[0], itemEls[0]);
				
			}
			else{
			
				if (itemEls.length === 1){
					if (!ignoreCurrent){
						// Current
						cacheImages = this.cache.getImages([
							this.currentCacheIndex
						]);
						this.addCacheImageToItemEl(cacheImages[0], itemEls[0]);
					}
				}
				else if (itemEls.length === 2){
					
					if (this.currentCacheIndex === 0){
						cacheImages = this.cache.getImages([
							this.currentCacheIndex,
							this.currentCacheIndex + 1
						]);
						if (!ignoreCurrent){
							this.addCacheImageToItemEl(cacheImages[0], itemEls[0]);
						}
						this.addCacheImageToItemEl(cacheImages[1], itemEls[1]);
					}
					else{
						cacheImages = this.cache.getImages([
							this.currentCacheIndex - 1,
							this.currentCacheIndex
						]);
						if (!ignoreCurrent){
							this.addCacheImageToItemEl(cacheImages[1], itemEls[1]);
						}
						this.addCacheImageToItemEl(cacheImages[0], itemEls[0]);
					}
					
				}
				else{
					
					if (this.currentCacheIndex === 0){
						cacheImages = this.cache.getImages([
							this.currentCacheIndex,
							this.currentCacheIndex + 1,
							this.currentCacheIndex + 2
						]);
						if (!ignoreCurrent){
							this.addCacheImageToItemEl(cacheImages[0], itemEls[0]);
						}
						this.addCacheImageToItemEl(cacheImages[1], itemEls[1]);
						this.addCacheImageToItemEl(cacheImages[2], itemEls[2]);
					}
					else if (this.currentCacheIndex === this.cache.images.length-1){
						cacheImages = this.cache.getImages([
							this.currentCacheIndex - 2,
							this.currentCacheIndex - 1,
							this.currentCacheIndex
						]);
						if (!ignoreCurrent){
							// Current
							this.addCacheImageToItemEl(cacheImages[2], itemEls[2]);
						}
						this.addCacheImageToItemEl(cacheImages[1], itemEls[1]);
						this.addCacheImageToItemEl(cacheImages[0], itemEls[0]);
					}
					else{
						cacheImages = this.cache.getImages([
							this.currentCacheIndex - 1,
							this.currentCacheIndex,
							this.currentCacheIndex + 1
						]);
						
						if (!ignoreCurrent){
							// Current
							this.addCacheImageToItemEl(cacheImages[1], itemEls[1]);
						}
						// Next
						this.addCacheImageToItemEl(cacheImages[2], itemEls[2]);
						// Previous
						this.addCacheImageToItemEl(cacheImages[0], itemEls[0]);
					}
					
				}
			
			}
		
		},
		
		
		
		/*
		 * Function: addCacheImageToItemEl
		 */
		addCacheImageToItemEl: function(cacheImage, itemEl){
			
			Util.DOM.removeClass(itemEl, PhotoSwipe.Carousel.CssClasses.itemError);
			Util.DOM.addClass(itemEl, PhotoSwipe.Carousel.CssClasses.itemLoading);
			
			Util.DOM.removeChildren(itemEl);
			
			Util.DOM.setStyle(cacheImage.imageEl, {
				display: 'none'
			});
			Util.DOM.appendChild(cacheImage.imageEl, itemEl);
			
			Util.Animation.resetTranslate(cacheImage.imageEl);
			
			Util.Events.add(cacheImage, PhotoSwipe.Image.EventTypes.onLoad, this.imageLoadHandler);
			Util.Events.add(cacheImage, PhotoSwipe.Image.EventTypes.onError, this.imageErrorHandler);
			
			cacheImage.load();
			
		},
		
		
		
		/*
		 * Function: slideCarousel
		 */
		slideCarousel: function(point, action, speed){
			
			if (this.isSliding){
				return;
			}
			
			var width, diffX, slideBy;
			
			if (this.settings.target === window){
				width = Util.DOM.windowWidth() + this.settings.margin;
			}
			else{
				width = Util.DOM.width(this.settings.target) + this.settings.margin;
			}
			
			speed = Util.coalesce(speed, this.settings.slideSpeed);
			
			if (window.Math.abs(diffX) < 1){
				return;
			}
			
			
			switch (action){
				
				case Util.TouchElement.ActionTypes.swipeLeft:
					
					slideBy = width * -1;
					break;
					
				case Util.TouchElement.ActionTypes.swipeRight:
				
					slideBy = width;
					break;
				
				default:
					
					diffX = point.x - this.touchStartPoint.x;
					
					if (window.Math.abs(diffX) > width / 2){
						slideBy = (diffX > 0) ? width : width * -1;
					}
					else{
						slideBy = 0;
					}
					break;
			
			}
			
			if (slideBy < 0){
				this.lastSlideByAction = PhotoSwipe.Carousel.SlideByAction.next;
			}
			else if (slideBy > 0){
				this.lastSlideByAction = PhotoSwipe.Carousel.SlideByAction.previous;
			}
			else{
				this.lastSlideByAction = PhotoSwipe.Carousel.SlideByAction.current;
			}
			
			// Check for non-looping carousels
			// If we are at the start or end, spring back to the current item element
			if (!this.settings.loop){
				if ( (this.lastSlideByAction === PhotoSwipe.Carousel.SlideByAction.previous && this.currentCacheIndex === 0 ) || (this.lastSlideByAction === PhotoSwipe.Carousel.SlideByAction.next && this.currentCacheIndex === this.cache.images.length-1) ){
					slideBy = 0;
					this.lastSlideByAction = PhotoSwipe.Carousel.SlideByAction.current;
				}
			}
			
			this.isSliding = true;
			this.doSlideCarousel(slideBy, speed);
			
		},
		
		
		
		/*
		 * Function: 
		 */
		moveCarousel: function(point){
			
			if (this.isSliding){
				return;
			}
			
			if (!this.settings.enableDrag){
				return;
			}
			
			this.doMoveCarousel(point.x - this.touchStartPoint.x);
			
		},
		
		
		
		/*
		 * Function: getItemEls
		 */
		getItemEls: function(){
		
			return Util.DOM.find('.' + PhotoSwipe.Carousel.CssClasses.item, this.contentEl);
		
		},
		
		
		
		/*
		 * Function: previous
		 */
		previous: function(){
			
			this.stopSlideshow();
			this.slideCarousel({x:0, y:0}, Util.TouchElement.ActionTypes.swipeRight, this.settings.nextPreviousSlideSpeed);
		
		},
		
		
		
		/*
		 * Function: next
		 */
		next: function(){
			
			this.stopSlideshow();
			this.slideCarousel({x:0, y:0}, Util.TouchElement.ActionTypes.swipeLeft, this.settings.nextPreviousSlideSpeed);
		
		},
		
		
		
		/*
		 * Function: slideshowNext
		 */
		slideshowNext: function(){
		
			this.slideCarousel({x:0, y:0}, Util.TouchElement.ActionTypes.swipeLeft);
		
		},
		
		
		
		
		/*
		 * Function: startSlideshow
		 */
		startSlideshow: function(){
			
			this.stopSlideshow();
			
			this.isSlideshowActive = true;
			
			this.slideshowTimeout = window.setTimeout(this.slideshowNext.bind(this), this.settings.slideshowDelay);
			
			Util.Events.fire(this, {
				type: PhotoSwipe.Carousel.EventTypes.onSlideshowStart,
				target: this
			});
			
		},
		
		
		
		/*
		 * Function: stopSlideshow
		 */
		stopSlideshow: function(){
			
			if (!Util.isNothing(this.slideshowTimeout)){
			
				window.clearTimeout(this.slideshowTimeout);
				this.slideshowTimeout = null;
				this.isSlideshowActive = false;
				
				Util.Events.fire(this, {
					type: PhotoSwipe.Carousel.EventTypes.onSlideshowStop,
					target: this
				});
			
			}
			
		},
		
		
		
		/*
		 * Function: onSlideByEnd
		 */
		onSlideByEnd: function(e){
			
			if (Util.isNothing(this.isSliding)){
				return;
			}
			
			var itemEls = this.getItemEls();
			
			this.isSliding = false;
			
			if (this.lastSlideByAction === PhotoSwipe.Carousel.SlideByAction.next){
				this.currentCacheIndex = this.currentCacheIndex + 1;
			}
			else if (this.lastSlideByAction === PhotoSwipe.Carousel.SlideByAction.previous){
				this.currentCacheIndex = this.currentCacheIndex - 1;
			}
			
			if (this.settings.loop){
				
				if (this.lastSlideByAction === PhotoSwipe.Carousel.SlideByAction.next){
					// Move first to the last
					Util.DOM.appendChild(itemEls[0], this.contentEl);
				}
				else if (this.lastSlideByAction === PhotoSwipe.Carousel.SlideByAction.previous){
					// Move the last to the first
					Util.DOM.insertBefore(itemEls[itemEls.length-1], itemEls[0], this.contentEl);
				}
				
				if (this.currentCacheIndex < 0){
					this.currentCacheIndex = this.cache.images.length - 1;
				}
				else if (this.currentCacheIndex === this.cache.images.length){
					this.currentCacheIndex = 0;
				}
				
			}
			else{
				
				if (this.cache.images.length > 3){
					
					if (this.currentCacheIndex > 1 && this.currentCacheIndex < this.cache.images.length-2){
						if (this.lastSlideByAction === PhotoSwipe.Carousel.SlideByAction.next){
							// Move first to the last
							Util.DOM.appendChild(itemEls[0], this.contentEl);
						}
						else if (this.lastSlideByAction === PhotoSwipe.Carousel.SlideByAction.previous){
							// Move the last to the first
							Util.DOM.insertBefore(itemEls[itemEls.length-1], itemEls[0], this.contentEl);
						}
					}
					else if (this.currentCacheIndex === 1){
						if (this.lastSlideByAction === PhotoSwipe.Carousel.SlideByAction.previous){
							// Move the last to the first
							Util.DOM.insertBefore(itemEls[itemEls.length-1], itemEls[0], this.contentEl);
						}
					}
					else if (this.currentCacheIndex === this.cache.images.length-2){
						if (this.lastSlideByAction === PhotoSwipe.Carousel.SlideByAction.next){
							// Move first to the last
							Util.DOM.appendChild(itemEls[0], this.contentEl);
						}
					}
				
				}
				
				
			}
			
			if (this.lastSlideByAction !== PhotoSwipe.Carousel.SlideByAction.current){
				this.setContentLeftPosition();
				this.setImages(true);
			}
			
			
			Util.Events.fire(this, {
				type: PhotoSwipe.Carousel.EventTypes.onSlideByEnd,
				target: this,
				action: this.lastSlideByAction,
				cacheIndex: this.currentCacheIndex
			});
			
			
			if (this.isSlideshowActive){
				
				if (this.lastSlideByAction !== PhotoSwipe.Carousel.SlideByAction.current){
					this.startSlideshow();
				}
				else{
					this.stopSlideshow();
				}
			
			}
			
			
		},
		
		
		
		/*
		 * Function: onTouch
		 */
		onTouch: function(action, point){
			
			this.stopSlideshow();
			
			switch(action){
				
				case Util.TouchElement.ActionTypes.touchStart:
					this.touchStartPoint = point;
					this.touchStartPosition = {
						x: window.parseInt(Util.DOM.getStyle(this.contentEl, 'left'), 0),
						y: window.parseInt(Util.DOM.getStyle(this.contentEl, 'top'), 0)
					};
					break;
				
				case Util.TouchElement.ActionTypes.touchMove:
					this.moveCarousel(point);
					break;
					
				case Util.TouchElement.ActionTypes.touchMoveEnd:
				case Util.TouchElement.ActionTypes.swipeLeft:
				case Util.TouchElement.ActionTypes.swipeRight:
					this.slideCarousel(point, action);
					break;
					
				case Util.TouchElement.ActionTypes.tap:
					break;
					
				case Util.TouchElement.ActionTypes.doubleTap:
					break;
				
				
			}
			
		},
		
		
		
		/*
		 * Function: onImageLoad
		 */
		onImageLoad: function(e){
			
			var cacheImage = e.target;
			
			if (!Util.isNothing(cacheImage.imageEl.parentNode)){
				Util.DOM.removeClass(cacheImage.imageEl.parentNode, PhotoSwipe.Carousel.CssClasses.itemLoading);
				this.resetImagePosition(cacheImage.imageEl);
			}
			
			Util.Events.remove(cacheImage, PhotoSwipe.Image.EventTypes.onLoad, this.imageLoadHandler);
			Util.Events.remove(cacheImage, PhotoSwipe.Image.EventTypes.onError, this.imageErrorHandler);
			
		},
		
		
		
		/*
		 * Function: onImageError
		 */
		onImageError: function(e){
			
			var cacheImage = e.target;
			
			if (!Util.isNothing(cacheImage.imageEl.parentNode)){
				Util.DOM.removeClass(cacheImage.imageEl.parentNode, PhotoSwipe.Carousel.CssClasses.itemLoading);
				Util.DOM.addClass(cacheImage.imageEl.parentNode, PhotoSwipe.Carousel.CssClasses.itemError);
			}
			
			Util.Events.remove(cacheImage, PhotoSwipe.Image.EventTypes.onLoad, this.imageLoadHandler);
			Util.Events.remove(cacheImage, PhotoSwipe.Image.EventTypes.onError, this.imageErrorHandler);
			
		}
		
		
		
	});
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util, TouchElement){
	
	
	Util.registerNamespace('Code.PhotoSwipe.Carousel');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	PhotoSwipe.Carousel.CarouselClass = PhotoSwipe.Carousel.CarouselClass.extend({
	
		
		/*
		 * Function: getStartingPos
		 */
		getStartingPos: function(){
			
			var startingPos = this.touchStartPosition;
			
			if (Util.isNothing(startingPos)){
				startingPos = {
					x: window.parseInt(Util.DOM.getStyle(this.contentEl, 'left'), 0),
					y: window.parseInt(Util.DOM.getStyle(this.contentEl, 'top'), 0)
				};
			}
			
			return startingPos;
		
		},
		
		
		
		/*
		 * Function: doMoveCarousel
		 */
		doMoveCarousel: function(xVal){
			
			var style;
			
			if (Util.Browser.isCSSTransformSupported){
				
				style = {};
				
				style[Util.Animation._transitionPrefix + 'Property'] = 'all';
				style[Util.Animation._transitionPrefix + 'Duration'] = '';
				style[Util.Animation._transitionPrefix + 'TimingFunction'] = '';
				style[Util.Animation._transitionPrefix + 'Delay'] = '0';
				style[Util.Animation._transformLabel] = (Util.Browser.is3dSupported) ? 'translate3d(' + xVal + 'px, 0px, 0px)' : 'translate(' + xVal + 'px, 0px)';
				
				Util.DOM.setStyle(this.contentEl, style);
			
			}
			else if (!Util.isNothing(window.jQuery)){
				
				
				window.jQuery(this.contentEl).stop().css('left', this.getStartingPos().x + xVal + 'px');
				
			}
			
		},
		
		
		
		/*
		 * Function: doSlideCarousel
		 */
		doSlideCarousel: function(xVal, speed){
			
			var animateProps, transform;
			
			if (speed <= 0){
				
				this.slideByEndHandler();
				return;
				
			}
			
			
			if (Util.Browser.isCSSTransformSupported){
				
				transform = Util.coalesce(this.contentEl.style.webkitTransform, this.contentEl.style.MozTransform, this.contentEl.style.transform, '');
				if (transform.indexOf('translate3d(' + xVal) === 0){
					this.slideByEndHandler();
					return;
				}
				else if (transform.indexOf('translate(' + xVal) === 0){
					this.slideByEndHandler();
					return;
				}
				
				Util.Animation.slideBy(this.contentEl, xVal, 0, speed, this.slideByEndHandler, this.settings.slideTimingFunction);
				
			}
			else if (!Util.isNothing(window.jQuery)){
				
				animateProps = {
					left: this.getStartingPos().x + xVal + 'px'
				};
		
				if (this.settings.animationTimingFunction === 'ease-out'){
					this.settings.animationTimingFunction = 'easeOutQuad';
				}
				
				if ( Util.isNothing(window.jQuery.easing[this.settings.animationTimingFunction]) ){
					this.settings.animationTimingFunction = 'linear';
				}
			
				window.jQuery(this.contentEl).animate(
					animateProps, 
					this.settings.slideSpeed, 
					this.settings.animationTimingFunction,
					this.slideByEndHandler
				);
			
			}
			
			
		}
	
	});
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util,
	window.Code.PhotoSwipe.TouchElement
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.Toolbar');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	PhotoSwipe.Toolbar.CssClasses = {
		toolbar: 'ps-toolbar',
		toolbarContent: 'ps-toolbar-content',
		toolbarTop: 'ps-toolbar-top',
		caption: 'ps-caption',
		captionBottom: 'ps-caption-bottom',
		captionContent: 'ps-caption-content',
		close: 'ps-toolbar-close',
		play: 'ps-toolbar-play',
		previous: 'ps-toolbar-previous',
		previousDisabled: 'ps-toolbar-previous-disabled',
		next: 'ps-toolbar-next',
		nextDisabled: 'ps-toolbar-next-disabled'
	};
	
	
	
	PhotoSwipe.Toolbar.ToolbarAction = {
		close: 'close',
		play: 'play',
		next: 'next',
		previous: 'previous',
		none: 'none'
	};
	
	
	
	PhotoSwipe.Toolbar.EventTypes = {
		onTap: 'PhotoSwipeToolbarOnClick',
		onBeforeShow: 'PhotoSwipeToolbarOnBeforeShow',
		onShow: 'PhotoSwipeToolbarOnShow',
		onBeforeHide: 'PhotoSwipeToolbarOnBeforeHide',
		onHide: 'PhotoSwipeToolbarOnHide'
	};
	
	
	
	PhotoSwipe.Toolbar.getToolbar = function(){
		
		return '<div class="' + PhotoSwipe.Toolbar.CssClasses.close + '"><div class="' + PhotoSwipe.Toolbar.CssClasses.toolbarContent + '"></div></div><div class="' + PhotoSwipe.Toolbar.CssClasses.play + '"><div class="' + PhotoSwipe.Toolbar.CssClasses.toolbarContent + '"></div></div><div class="' + PhotoSwipe.Toolbar.CssClasses.previous + '"><div class="' + PhotoSwipe.Toolbar.CssClasses.toolbarContent + '"></div></div><div class="' + PhotoSwipe.Toolbar.CssClasses.next + '"><div class="' + PhotoSwipe.Toolbar.CssClasses.toolbarContent + '"></div></div>';
		
	};
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.Toolbar');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	PhotoSwipe.Toolbar.ToolbarClass = klass({
		
		
		
		toolbarEl: null,
		closeEl: null,
		playEl: null,
		previousEl: null,
		nextEl: null,
		captionEl: null,
		captionContentEl: null,
		currentCaption: null,
		settings: null,
		cache: null,
		timeout: null,
		isVisible: null,
		fadeOutHandler: null,
		touchStartHandler: null,
		touchMoveHandler: null,
		clickHandler: null,
		
		
		
		/*
		 * Function: dispose
		 */
		dispose: function(){
		
			var prop;
			
			this.clearTimeout();
			
			this.removeEventHandlers();
			
			Util.Animation.stop(this.toolbarEl);
			Util.Animation.stop(this.captionEl);
			
			Util.DOM.removeChild(this.toolbarEl, this.toolbarEl.parentNode);
			Util.DOM.removeChild(this.captionEl, this.captionEl.parentNode);
			
			for (prop in this) {
				if (Util.objectHasProperty(this, prop)) {
					this[prop] = null;
				}
			}
			
		},
		
		
		
		/*
		 * Function: initialize
		 */
		initialize: function(cache, options){
			
			var cssClass;
			
			this.settings = options;
			this.cache = cache;
			this.isVisible = false;
			
			this.fadeOutHandler = this.onFadeOut.bind(this);
			this.touchStartHandler = this.onTouchStart.bind(this);
			this.touchMoveHandler = this.onTouchMove.bind(this);
			this.clickHandler = this.onClick.bind(this);
			
			
			cssClass = PhotoSwipe.Toolbar.CssClasses.toolbar;
			if (this.settings.captionAndToolbarFlipPosition){
				cssClass = cssClass + ' ' + PhotoSwipe.Toolbar.CssClasses.toolbarTop;
			}
			
			
			// Toolbar
			this.toolbarEl = Util.DOM.createElement(
				'div', 
				{ 
					'class': cssClass
				},
				this.settings.getToolbar()
			);
		
			
			Util.DOM.setStyle(this.toolbarEl, {
				left: 0,
				position: 'absolute',
				overflow: 'hidden',
				zIndex: this.settings.zIndex
			});
			
			if (this.settings.target === window){
				Util.DOM.appendToBody(this.toolbarEl);
			}
			else{
				Util.DOM.appendChild(this.toolbarEl, this.settings.target);
			}
			Util.DOM.hide(this.toolbarEl);
			
			this.closeEl = Util.DOM.find('.' + PhotoSwipe.Toolbar.CssClasses.close, this.toolbarEl)[0];
			if (this.settings.preventHide && !Util.isNothing(this.closeEl)){
				Util.DOM.hide(this.closeEl);
			}
			
			this.playEl = Util.DOM.find('.' + PhotoSwipe.Toolbar.CssClasses.play, this.toolbarEl)[0];
			if (this.settings.preventSlideshow && !Util.isNothing(this.playEl)){
				Util.DOM.hide(this.playEl);
			}
			
			this.nextEl = Util.DOM.find('.' + PhotoSwipe.Toolbar.CssClasses.next, this.toolbarEl)[0];
			this.previousEl = Util.DOM.find('.' + PhotoSwipe.Toolbar.CssClasses.previous, this.toolbarEl)[0];
			
			
			// Caption
			cssClass = PhotoSwipe.Toolbar.CssClasses.caption;
			if (this.settings.captionAndToolbarFlipPosition){
				cssClass = cssClass + ' ' + PhotoSwipe.Toolbar.CssClasses.captionBottom;
			}
			
			this.captionEl = Util.DOM.createElement(
				'div', 
				{ 
					'class': cssClass
				}, 
				''
			);
			Util.DOM.setStyle(this.captionEl, {
				left: 0,
				position: 'absolute',
				overflow: 'hidden',
				zIndex: this.settings.zIndex
			});
			
			if (this.settings.target === window){
				Util.DOM.appendToBody(this.captionEl);
			}
			else{
				Util.DOM.appendChild(this.captionEl, this.settings.target);
			}
			Util.DOM.hide(this.captionEl);
			
			this.captionContentEl = Util.DOM.createElement(
				'div', 
				{
					'class': PhotoSwipe.Toolbar.CssClasses.captionContent
				}, 
				''
			);
			Util.DOM.appendChild(this.captionContentEl, this.captionEl);
			
			this.addEventHandlers();
			
		},
		
		
		
		/*
		 * Function: resetPosition
		 */
		resetPosition: function(){
		
			var width, toolbarTop, captionTop;
			
			if (this.settings.target === window){
				if (this.settings.captionAndToolbarFlipPosition){
					toolbarTop = Util.DOM.windowScrollTop();
					captionTop = (Util.DOM.windowScrollTop() + Util.DOM.windowHeight()) - Util.DOM.height(this.captionEl);
				}
				else {
					toolbarTop = (Util.DOM.windowScrollTop() + Util.DOM.windowHeight()) - Util.DOM.height(this.toolbarEl);
					captionTop = Util.DOM.windowScrollTop();
				}	
				width = Util.DOM.windowWidth();
			}
			else{
				if (this.settings.captionAndToolbarFlipPosition){
					toolbarTop = '0';
					captionTop = Util.DOM.height(this.settings.target) - Util.DOM.height(this.captionEl);
				}
				else{
					toolbarTop = Util.DOM.height(this.settings.target) - Util.DOM.height(this.toolbarEl);
					captionTop = 0;
				}
				width = Util.DOM.width(this.settings.target);
			}
			
			Util.DOM.setStyle(this.toolbarEl, {
				top: toolbarTop + 'px',
				width: width
			});
		
			Util.DOM.setStyle(this.captionEl, {
				top: captionTop + 'px',
				width: width
			});
		},
		
		
		
		/*
		 * Function: toggleVisibility
		 */
		toggleVisibility: function(index){
		
			if (this.isVisible){
				this.fadeOut();
			}
			else{
				this.show(index);
			}
		
		},
		
		
		
		/*
		 * Function: show
		 */
		show: function(index){
			
			Util.Animation.stop(this.toolbarEl);
			Util.Animation.stop(this.captionEl);
			
			this.resetPosition();
			this.setToolbarStatus(index);
			
			Util.Events.fire(this, { 
				type: PhotoSwipe.Toolbar.EventTypes.onBeforeShow, 
				target: this 
			});
			
			this.showToolbar();
			this.setCaption(index);
			this.showCaption();
			
			this.isVisible = true;
			
			this.setTimeout();
			
			Util.Events.fire(this, { 
				type: PhotoSwipe.Toolbar.EventTypes.onShow, 
				target: this 
			});
			
		},
		
		
		
		/*
		 * Function: setTimeout
		 */
		setTimeout: function(){
			
			if (this.settings.captionAndToolbarAutoHideDelay > 0){
				// Set a timeout to hide the toolbar
				this.clearTimeout();
				this.timeout = window.setTimeout(this.fadeOut.bind(this), this.settings.captionAndToolbarAutoHideDelay);
			}
		
		},
		
		
		
		/*
		 * Function: clearTimeout
		 */
		clearTimeout: function(){
			
			if (!Util.isNothing(this.timeout)){
				window.clearTimeout(this.timeout);
				this.timeout = null;
			}
			
		},
		
		
		
		/*
		 * Function: fadeOut
		 */
		fadeOut: function(){
		
			this.clearTimeout();
			
			Util.Events.fire(this, { 
				type: PhotoSwipe.Toolbar.EventTypes.onBeforeHide, 
				target: this 
			});
			
			Util.Animation.fadeOut(this.toolbarEl, this.settings.fadeOutSpeed);
			Util.Animation.fadeOut(this.captionEl, this.settings.fadeOutSpeed, this.fadeOutHandler);
			
			this.isVisible = false;
		
		},
		
		
		
		/*
		 * Function: addEventHandlers
		 */
		addEventHandlers: function(){
		
			if (Util.Browser.isTouchSupported){
				if (!Util.Browser.blackberry){
					// Had an issue with touchstart, animation and Blackberry. BB will default to click
					Util.Events.add(this.toolbarEl, 'touchstart', this.touchStartHandler);
				}
				Util.Events.add(this.toolbarEl, 'touchmove', this.touchMoveHandler);
				Util.Events.add(this.captionEl, 'touchmove', this.touchMoveHandler);
			}
			Util.Events.add(this.toolbarEl, 'click', this.clickHandler);
		
		},
		
		
		
		/*
		 * Function: removeEventHandlers
		 */
		removeEventHandlers: function(){
		
			if (Util.Browser.isTouchSupported){
				if (!Util.Browser.blackberry){
					// Had an issue with touchstart, animation and Blackberry. BB will default to click
					Util.Events.remove(this.toolbarEl, 'touchstart', this.touchStartHandler);
				}
				Util.Events.remove(this.toolbarEl, 'touchmove', this.touchMoveHandler);
				Util.Events.remove(this.captionEl, 'touchmove', this.touchMoveHandler);
			}
			Util.Events.remove(this.toolbarEl, 'click', this.clickHandler);
		
		},
		
		
		
		/*
		 * Function: handleTap
		 */
		handleTap: function(e){
			
			this.clearTimeout();
			
			var action;
			
			if (e.target === this.nextEl || Util.DOM.isChildOf(e.target, this.nextEl)){
				action = PhotoSwipe.Toolbar.ToolbarAction.next;
			}
			else if (e.target === this.previousEl || Util.DOM.isChildOf(e.target, this.previousEl)){
				action = PhotoSwipe.Toolbar.ToolbarAction.previous;
			}
			else if (e.target === this.closeEl || Util.DOM.isChildOf(e.target, this.closeEl)){
				action = PhotoSwipe.Toolbar.ToolbarAction.close;
			}
			else if (e.target === this.playEl || Util.DOM.isChildOf(e.target, this.playEl)){
				action = PhotoSwipe.Toolbar.ToolbarAction.play;
			}
			
			this.setTimeout();
			
			if (Util.isNothing(action)){
				action = PhotoSwipe.Toolbar.ToolbarAction.none;
			}
			
			Util.Events.fire(this, { 
				type: PhotoSwipe.Toolbar.EventTypes.onTap, 
				target: this, 
				action: action,
				tapTarget: e.target
			});
			
		},
		
		
		
		/*
		 * Function: setCaption
		 */ 
		setCaption: function(index){
		
			Util.DOM.removeChildren(this.captionContentEl);
			
			this.currentCaption = Util.coalesce(this.cache.images[index].caption, '\u00A0');
			
			if (Util.isObject(this.currentCaption)){
				Util.DOM.appendChild(this.currentCaption, this.captionContentEl);
			}
			else{
				if (this.currentCaption === ''){
					this.currentCaption = '\u00A0';
				}
				Util.DOM.appendText(this.currentCaption, this.captionContentEl);
			}
			
			this.currentCaption = (this.currentCaption === '\u00A0') ? '' : this.currentCaption;
			this.resetPosition();
			
		},
		
		
		
		/*
		 * Function: showToolbar
		 */
		showToolbar: function(){
		
			Util.DOM.setStyle(this.toolbarEl, {
				opacity: this.settings.captionAndToolbarOpacity
			});
			Util.DOM.show(this.toolbarEl);
			
		},
		
		
		
		/*
		 * Function: showCaption
		 */
		showCaption: function(){
			
			if (this.currentCaption === '' || this.captionContentEl.childNodes.length < 1){
				// Empty caption
				if (!this.settings.captionAndToolbarShowEmptyCaptions){
					Util.DOM.hide(this.captionEl);
					return;
				}
			}
			Util.DOM.setStyle(this.captionEl, {
				opacity: this.settings.captionAndToolbarOpacity
			});
			Util.DOM.show(this.captionEl);
		
		},
		
		
		
		/*
		 * Function: setToolbarStatus
		 */
		setToolbarStatus: function(index){
			
			if (this.settings.loop){
				return;
			}
			
			Util.DOM.removeClass(this.previousEl, PhotoSwipe.Toolbar.CssClasses.previousDisabled);
			Util.DOM.removeClass(this.nextEl, PhotoSwipe.Toolbar.CssClasses.nextDisabled);
			
			if (index > 0 && index < this.cache.images.length-1){
				return;
			}
			
			if (index === 0){
				if (!Util.isNothing(this.previousEl)){
					Util.DOM.addClass(this.previousEl, PhotoSwipe.Toolbar.CssClasses.previousDisabled);
				}
			}
			
			if (index === this.cache.images.length-1){
				if (!Util.isNothing(this.nextEl)){
					Util.DOM.addClass(this.nextEl, PhotoSwipe.Toolbar.CssClasses.nextDisabled);
				}
			}
			
		},
		
		
		
		/*
		 * Function: onFadeOut
		 */
		onFadeOut: function(){
		
			Util.DOM.hide(this.toolbarEl);
			Util.DOM.hide(this.captionEl);
			
			Util.Events.fire(this, { 
				type: PhotoSwipe.Toolbar.EventTypes.onHide, 
				target: this 
			});
			
		},
		
		
		
		/*
		 * Function: onTouchStart
		 */
		onTouchStart: function(e){
			
			e.preventDefault();
			Util.Events.remove(this.toolbarEl, 'click', this.clickHandler);
			this.handleTap(e);
			
		},
		
		
		
		/*
		 * Function: onTouchMove
		 */
		onTouchMove: function(e){
		
			e.preventDefault();
		
		},
		
		
		
		/*
		 * Function: onClick
		 */
		onClick: function(e){
			
			e.preventDefault();
			this.handleTap(e);
			
		}
		
		
	});
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.UILayer');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	PhotoSwipe.UILayer.CssClasses = {
		uiLayer: 'ps-uilayer'
	};
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.UILayer');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	PhotoSwipe.UILayer.UILayerClass = Util.TouchElement.TouchElementClass.extend({
		
		
		
		el: null,
		settings: null,
		
		
		
		/*
		 * Function: dispose
		 */
		dispose: function(){
		
			var prop;
			
			this.removeEventHandlers();
			
			Util.DOM.removeChild(this.el, this.el.parentNode);
			
			for (prop in this) {
				if (Util.objectHasProperty(this, prop)) {
					this[prop] = null;
				}
			}
		
		},
		
		
		
		/*
		 * Function: initialize
		 */
		initialize: function(options){
			
			this.settings = options;
			
			// Main container 
			this.el = Util.DOM.createElement(
				'div', 
				{ 
					'class': PhotoSwipe.UILayer.CssClasses.uiLayer
				}, 
				''
			);
			Util.DOM.setStyle(this.el, {
				display: 'block',
				position: 'absolute',
				left: 0,
				top: 0,
				overflow: 'hidden',
				zIndex: this.settings.zIndex,
				opacity: 0
			});
			Util.DOM.hide(this.el);
			
			if (this.settings.target === window){
				Util.DOM.appendToBody(this.el);
			}
			else{
				Util.DOM.appendChild(this.el, this.settings.target);
			}
			
			this.supr(this.el, {
				swipe: true,
				move: true,
				gesture: Util.Browser.iOS,
				doubleTap: true,
				preventDefaultTouchEvents: this.settings.preventDefaultTouchEvents
			});
			
		},
		
		
		
		/*
		 * Function: resetPosition
		 */
		resetPosition: function(){
			
			// Set the height and width to fill the document
			if (this.settings.target === window){
				Util.DOM.setStyle(this.el, {
					top: Util.DOM.windowScrollTop()  + 'px',
					width: Util.DOM.windowWidth(),
					height: Util.DOM.windowHeight()
				});	
			}
			else{
				Util.DOM.setStyle(this.el, {
					top: '0px',
					width: Util.DOM.width(this.settings.target),
					height: Util.DOM.height(this.settings.target)
				});
			}
			
		},
		
		
		
		/*
		 * Function: show
		 */
		show: function(){
			
			this.resetPosition();
			Util.DOM.show(this.el);
			this.addEventHandlers();
			
		},
		
		
		
		/*
		 * Function: addEventHandlers
		 */
		addEventHandlers: function(){
			
			this.supr();
			
		},
		
		
		
		/*
		 * Function: removeEventHandlers
		 */
		removeEventHandlers: function(){
		
			this.supr();
		
		}
		
		
	});
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.ZoomPanRotate');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	PhotoSwipe.ZoomPanRotate.CssClasses = {
		zoomPanRotate: 'ps-zoom-pan-rotate'
	};
	
	
	PhotoSwipe.ZoomPanRotate.EventTypes = {
	
		onTransform: 'PhotoSwipeZoomPanRotateOnTransform'
	
	};
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe.ZoomPanRotate');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	PhotoSwipe.ZoomPanRotate.ZoomPanRotateClass = klass({
	
		el: null,
		settings: null,
		containerEl: null,
		imageEl: null,
		transformSettings: null,
		panStartingPoint: null,
		transformEl: null,
		
		
		
		/*
		 * Function: dispose
		 */
		dispose: function(){
		
			var prop;
			
			Util.DOM.removeChild(this.el, this.el.parentNode);
			
			for (prop in this) {
				if (Util.objectHasProperty(this, prop)) {
					this[prop] = null;
				}
			}
		
		},
		
		
		
		/*
		 * Function: initialize
		 */
		initialize: function(options, cacheImage, uiLayer){
			
			var parentEl, width, height, top;
			
			this.settings = options;
			
			if (this.settings.target === window){
				parentEl = document.body;
				width = Util.DOM.windowWidth();
				height = Util.DOM.windowHeight();
				top = Util.DOM.windowScrollTop() + 'px';
			}
			else{
				parentEl = this.settings.target;
				width = Util.DOM.width(parentEl);
				height = Util.DOM.height(parentEl);
				top = '0px';
			}
			
			this.imageEl = cacheImage.imageEl.cloneNode(false);
			Util.DOM.setStyle(this.imageEl, {
				
				zIndex: 1
				
			});
			
			this.transformSettings = {
				
				startingScale: 1.0,
				scale: 1.0,
				startingRotation: 0,
				rotation: 0,
				startingTranslateX: 0,
				startingTranslateY: 0,
				translateX: 0,
				translateY: 0
			
			};
			
			
			this.el = Util.DOM.createElement(
				'div', 
				{ 
					'class': PhotoSwipe.ZoomPanRotate.CssClasses.zoomPanRotate
				}, 
				''
			);
			Util.DOM.setStyle(this.el, {
				left: 0,
				top: top,
				position: 'absolute',
				width: width,
				height: height,
				zIndex: this.settings.zIndex,
				display: 'block'
			});
			
			Util.DOM.insertBefore(this.el, uiLayer.el, parentEl);
			
			if (Util.Browser.iOS){
				this.containerEl = Util.DOM.createElement('div','','');
				Util.DOM.setStyle(this.containerEl, {
					left: 0,
					top: 0,
					width: width,
					height: height,
					position: 'absolute',
					zIndex: 1
				});
				Util.DOM.appendChild(this.imageEl, this.containerEl);
				Util.DOM.appendChild(this.containerEl, this.el);
				Util.Animation.resetTranslate(this.containerEl);
				Util.Animation.resetTranslate(this.imageEl);
				this.transformEl = this.containerEl;
			}
			else{
				Util.DOM.appendChild(this.imageEl, this.el);
				this.transformEl = this.imageEl;
			}
			
		},
		
		
		
		/*
		 * Function: setStartingTranslateFromCurrentTransform
		 */
		setStartingTranslateFromCurrentTransform: function(){
			
			var 
				transformValue = Util.coalesce(this.transformEl.style.webkitTransform, this.transformEl.style.MozTransform, this.transformEl.style.transform),
				transformExploded;
			
			if (!Util.isNothing(transformValue)){
				
				transformExploded = transformValue.match( /translate\((.*?)\)/ );
				
				if (!Util.isNothing(transformExploded)){
				
					transformExploded = transformExploded[1].split(', ');
					this.transformSettings.startingTranslateX = window.parseInt(transformExploded[0], 10);
					this.transformSettings.startingTranslateY = window.parseInt(transformExploded[1], 10);
				
				}
			
			}
			
		},
		
		
		
		/*
		 * Function: getScale
		 */
		getScale: function(scaleValue){
			
			var scale = this.transformSettings.startingScale * scaleValue;
			
			if (this.settings.minUserZoom !== 0 && scale < this.settings.minUserZoom){
				scale = this.settings.minUserZoom;
			}
			else if (this.settings.maxUserZoom !== 0 && scale > this.settings.maxUserZoom){
				scale = this.settings.maxUserZoom;
			}
			
			return scale;
			
		},
		
		
		
		/*
		 * Function: setStartingScaleAndRotation
		 */
		setStartingScaleAndRotation: function(scaleValue, rotationValue){
			
			this.transformSettings.startingScale = this.getScale(scaleValue);
			
			this.transformSettings.startingRotation = 
				(this.transformSettings.startingRotation + rotationValue) % 360;
				
		},
		
		
		
		/*
		 * Function: zoomRotate
		 */
		zoomRotate: function(scaleValue, rotationValue){
			
			this.transformSettings.scale = this.getScale(scaleValue);
			
			this.transformSettings.rotation = 
				this.transformSettings.startingRotation + rotationValue;
			
			this.applyTransform();
			
		},
		
		
		
		/*
		 * Function: panStart
		 */
		panStart: function(point){
			
			this.setStartingTranslateFromCurrentTransform();
			
			this.panStartingPoint = {
				x: point.x,
				y: point.y
			};
			
		},
		
		
		
		/*
		 * Function: pan
		 */
		pan: function(point){ 
			
			var 
				dx = point.x - this.panStartingPoint.x,
				dy = point.y - this.panStartingPoint.y,
				dxScaleAdjust = dx / this.transformSettings.scale ,
        dyScaleAdjust = dy / this.transformSettings.scale;
			
			this.transformSettings.translateX = 
				this.transformSettings.startingTranslateX + dxScaleAdjust;

			this.transformSettings.translateY = 
				this.transformSettings.startingTranslateY + dyScaleAdjust;

			this.applyTransform();
			
		},
		
		
		
		/*
		 * Function: zoomAndPanToPoint
		 */
		zoomAndPanToPoint: function(scaleValue, point){
			
			
			if (this.settings.target === window){
				
				this.panStart({
					x: Util.DOM.windowWidth() / 2,
					y: Util.DOM.windowHeight() / 2
				});
				
				var 
					dx = point.x - this.panStartingPoint.x,
					dy = point.y - this.panStartingPoint.y,
					dxScaleAdjust = dx / this.transformSettings.scale,
					dyScaleAdjust = dy / this.transformSettings.scale;
					
				this.transformSettings.translateX = 
					(this.transformSettings.startingTranslateX + dxScaleAdjust) * -1;
				
				this.transformSettings.translateY = 
					(this.transformSettings.startingTranslateY + dyScaleAdjust) * -1;
					
			}
			
			
			this.setStartingScaleAndRotation(scaleValue, 0);
			this.transformSettings.scale = this.transformSettings.startingScale;
			
			this.transformSettings.rotation = 0;
			
			this.applyTransform();
			
		},
		
		
		
		/*
		 * Function: applyTransform
		 */
		applyTransform: function(){
			
			var 
				rotationDegs = this.transformSettings.rotation % 360,
				translateX = window.parseInt(this.transformSettings.translateX, 10),
				translateY = window.parseInt(this.transformSettings.translateY, 10),
				transform = 'scale(' + this.transformSettings.scale + ') rotate(' + rotationDegs + 'deg) translate(' + translateX + 'px, ' + translateY + 'px)';
			
			Util.DOM.setStyle(this.transformEl, {
				webkitTransform: transform,
				MozTransform: transform,
				msTransform: transform,
				transform: transform
			});
			
			Util.Events.fire(this, {
				target: this,
				type: PhotoSwipe.ZoomPanRotate.EventTypes.onTransform,
				scale: this.transformSettings.scale,
				rotation: this.transformSettings.rotation,
				rotationDegs: rotationDegs,
				translateX: translateX,
				translateY: translateY
			});
			
		}
	
	});
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, Util){
	
	
	Util.registerNamespace('Code.PhotoSwipe');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	
	PhotoSwipe.CssClasses = {
		buildingBody: 'ps-building',
		activeBody: 'ps-active'
	};
	
	
	
	PhotoSwipe.EventTypes = {
	
		onBeforeShow: 'PhotoSwipeOnBeforeShow',
		onShow: 'PhotoSwipeOnShow',
		onBeforeHide: 'PhotoSwipeOnBeforeHide',
		onHide: 'PhotoSwipeOnHide',
		onDisplayImage: 'PhotoSwipeOnDisplayImage',
		onResetPosition: 'PhotoSwipeOnResetPosition',
		onSlideshowStart: 'PhotoSwipeOnSlideshowStart',
		onSlideshowStop: 'PhotoSwipeOnSlideshowStop',
		onTouch: 'PhotoSwipeOnTouch',
		onBeforeCaptionAndToolbarShow: 'PhotoSwipeOnBeforeCaptionAndToolbarShow',
		onCaptionAndToolbarShow: 'PhotoSwipeOnCaptionAndToolbarShow',
		onBeforeCaptionAndToolbarHide: 'PhotoSwipeOnBeforeCaptionAndToolbarHide',
		onCaptionAndToolbarHide: 'PhotoSwipeOnCaptionAndToolbarHide',
		onToolbarTap: 'PhotoSwipeOnToolbarTap',
		onBeforeZoomPanRotateShow: 'PhotoSwipeOnBeforeZoomPanRotateShow',
		onZoomPanRotateShow: 'PhotoSwipeOnZoomPanRotateShow',
		onBeforeZoomPanRotateHide: 'PhotoSwipeOnBeforeZoomPanRotateHide',
		onZoomPanRotateHide: 'PhotoSwipeOnZoomPanRotateHide',
		onZoomPanRotateTransform: 'PhotoSwipeOnZoomPanRotateTransform'
	
	};
	
	
	
	PhotoSwipe.instances = [];
	PhotoSwipe.activeInstances = [];
	
	
	
	/*
	 * Function: Code.PhotoSwipe.setActivateInstance
	 */
	PhotoSwipe.setActivateInstance = function(instance){
		
		// Can only have one instance per target (i.e. window or div)
		var index = Util.arrayIndexOf(instance.settings.target, PhotoSwipe.activeInstances, 'target');
		if (index > -1){
			throw 'Code.PhotoSwipe.activateInstance: Unable to active instance as another instance is already active for this target';
		}
		PhotoSwipe.activeInstances.push({
			target: instance.settings.target,
			instance: instance
		});
			
	};
	
	
	
	/*
	 * Function: Code.PhotoSwipe.unsetActivateInstance
	 */
	PhotoSwipe.unsetActivateInstance = function(instance){
		
		var index = Util.arrayIndexOf(instance, PhotoSwipe.activeInstances, 'instance');
		PhotoSwipe.activeInstances.splice(index, 1);
		
	};
	
	
	
	/*
	 * Function: Code.PhotoSwipe.attach
	 */
	PhotoSwipe.attach = function(images, options, id){
		
		var i, j, instance, image;
		
		instance = PhotoSwipe.createInstance(images, options, id);
		
		// Add click event handlers if applicable
		for (i=0, j=images.length; i<j; i++){
			
			image = images[i];
			if (!Util.isNothing(image.nodeType)){
				if (image.nodeType === 1){
					// DOM element
					image.__photoSwipeClickHandler = PhotoSwipe.onTriggerElementClick.bind(instance);
					Util.Events.remove(image, 'click', image.__photoSwipeClickHandler);
					Util.Events.add(image, 'click', image.__photoSwipeClickHandler);
				}
			}
			
		}
		
		return instance;
		
	};
	
	
	
	/*
	 * jQuery plugin
	 */
	if (window.jQuery){
		
		window.jQuery.fn.photoSwipe = function(options, id){
		
			return PhotoSwipe.attach(this, options, id);
			
		};
		
		
	}
	
	
	
	/*
	 * Function: Code.PhotoSwipe.detatch
	 */
	PhotoSwipe.detatch = function(instance){
	
		var i, j, image;
		
		// Remove click event handlers if applicable
		for (i=0, j=instance.originalImages.length; i<j; i++){
			
			image = instance.originalImages[i];
			if (!Util.isNothing(image.nodeType)){
				if (image.nodeType === 1){
					// DOM element
					Util.Events.remove(image, 'click', image.__photoSwipeClickHandler);
					delete image.__photoSwipeClickHandler;
				}
			}
			
		}
		
		PhotoSwipe.disposeInstance(instance);
	
	};
	
	
	
	/*
	 * Function: Code.PhotoSwipe.createInstance
	 */
	PhotoSwipe.createInstance = function(images, options, id){
		
		var i, instance, image;
		
		if (Util.isNothing(images)){
			throw 'Code.PhotoSwipe.attach: No images passed.';
		}
		
		if (!Util.isLikeArray(images)){
			throw 'Code.PhotoSwipe.createInstance: Images must be an array of elements or image urls.';
		}
		
		if (images.length < 1){
			throw 'Code.PhotoSwipe.createInstance: No images to passed.';
		}
		
		options = Util.coalesce(options, { });
		
		instance = PhotoSwipe.getInstance(id);
		
		if (Util.isNothing(instance)){
			instance = new PhotoSwipe.PhotoSwipeClass(images, options, id);
			PhotoSwipe.instances.push(instance);
		}
		else{
			throw 'Code.PhotoSwipe.createInstance: Instance with id "' + id +' already exists."';
		}
		
		return instance;
	
	};
	
	
	
	/*
	 * Function: Code.PhotoSwipe.disposeInstance
	 */
	PhotoSwipe.disposeInstance = function(instance){
		
		var instanceIndex = PhotoSwipe.getInstanceIndex(instance);
		
		if (instanceIndex < 0){
			throw 'Code.PhotoSwipe.disposeInstance: Unable to find instance to dispose.';
		}
		
		instance.dispose();
		PhotoSwipe.instances.splice(instanceIndex, 1);
		instance = null;
	
	};
	
	
	
	/*
	 * Function: onTriggerElementClick
	 */
	PhotoSwipe.onTriggerElementClick = function(e){
	
		e.preventDefault();
		
		var instance = this;
		instance.show(e.currentTarget);
	
	};
	
	
	
	/*
	 * Function: Code.PhotoSwipe.getInstance
	 */
	PhotoSwipe.getInstance = function(id){
		
		var i, j, instance;
		
		for (i=0, j=PhotoSwipe.instances.length; i<j; i++){
			
			instance = PhotoSwipe.instances[i];
			if (instance.id === id){
				return instance;
			}
			
		}
		
		return null;
		
	};
	
	
	
	/*
	 * Function: Code.PhotoSwipe.getInstanceIndex
	 */
	PhotoSwipe.getInstanceIndex = function(instance){
		
		var i, j, instanceIndex = -1;
		
		for (i=0, j=PhotoSwipe.instances.length; i<j; i++){
		
			if (PhotoSwipe.instances[i] === instance){
				instanceIndex = i;
				break;
			}
		
		}
		
		return instanceIndex;
		
	};
	
	
	
}
(
	window, 
	window.Code.Util
));// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5

(function(window, klass, Util, Cache, DocumentOverlay, Carousel, Toolbar, UILayer, ZoomPanRotate){
	
	
	Util.registerNamespace('Code.PhotoSwipe');
	var PhotoSwipe = window.Code.PhotoSwipe;
	
	
	PhotoSwipe.PhotoSwipeClass = klass({
		
		
		
		id: null,
		settings: null,
		isBackEventSupported: null,
		backButtonClicked: null,
		currentIndex: null,
		originalImages: null,
		mouseWheelStartTime: null,
		windowDimensions: null,
		
		
		
		// Components
		cache: null,
		documentOverlay: null,
		carousel: null,
		uiLayer: null,
		toolbar: null,
		zoomPanRotate: null,
		
		
		
		// Handlers
		windowOrientationChangeHandler: null,
		windowScrollHandler: null,
		windowHashChangeHandler: null,
		keyDownHandler: null,
		windowOrientationEventName: null,
		uiLayerTouchHandler: null,
		carouselSlideByEndHandler: null,
		carouselSlideshowStartHandler: null,
		carouselSlideshowStopHandler: null,
		toolbarTapHandler: null,
		toolbarBeforeShowHandler: null,
		toolbarShowHandler: null,
		toolbarBeforeHideHandler: null,
		toolbarHideHandler: null,
		mouseWheelHandler: null,
		zoomPanRotateTransformHandler: null,
		
		
		_isResettingPosition: null,
		_uiWebViewResetPositionTimeout: null,
				
		
		/*
		 * Function: dispose
		 */
		dispose: function(){
		
			var prop;
			
			Util.Events.remove(this, PhotoSwipe.EventTypes.onBeforeShow);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onShow);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onBeforeHide);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onHide);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onDisplayImage);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onResetPosition);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onSlideshowStart);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onSlideshowStop);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onTouch);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onBeforeCaptionAndToolbarShow);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onCaptionAndToolbarShow);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onBeforeCaptionAndToolbarHide);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onCaptionAndToolbarHide);
			Util.Events.remove(this, PhotoSwipe.EventTypes.onZoomPanRotateTransform);
			
			
			this.removeEventHandlers();
			
			if (!Util.isNothing(this.documentOverlay)){
				this.documentOverlay.dispose();
			}
			
			if (!Util.isNothing(this.carousel)){
				this.carousel.dispose();
			}
			
			if (!Util.isNothing(this.uiLayer)){
				this.uiLayer.dispose();
			}
			
			if (!Util.isNothing(this.toolbar)){
				this.toolbar.dispose();
			}
			
			this.destroyZoomPanRotate();
			
			if (!Util.isNothing(this.cache)){
				this.cache.dispose();
			}
			
			for (prop in this) {
				if (Util.objectHasProperty(this, prop)) {
					this[prop] = null;
				}
			}
		
		},
		
		
		
		/*
		 * Function: initialize
		 */
		initialize: function(images, options, id){
			
			var targetPosition;
			
			if (Util.isNothing(id)){
				this.id = 'PhotoSwipe' + new Date().getTime().toString();
			}
			else{
				this.id = id;
			}
			
			this.originalImages = images;
			
			if (Util.Browser.android && !Util.Browser.firefox){
				if (window.navigator.userAgent.match(/Android (\d+.\d+)/).toString().replace(/^.*\,/, '') >= 2.1){
					this.isBackEventSupported = true;
				}
			}
			
			if (!this.isBackEventSupported){
				this.isBackEventSupported = Util.objectHasProperty(window, 'onhashchange');
			}
			
			this.settings = {
				
				// General
				fadeInSpeed: 250,
				fadeOutSpeed: 250,
				preventHide: false,
				preventSlideshow: false,
				zIndex: 1000,
				backButtonHideEnabled: true,
				enableKeyboard: true,
				enableMouseWheel: true,
				mouseWheelSpeed: 350,
				autoStartSlideshow: false,
				jQueryMobile: ( !Util.isNothing(window.jQuery) && !Util.isNothing(window.jQuery.mobile) ),
				jQueryMobileDialogHash: '&ui-state=dialog',
				enableUIWebViewRepositionTimeout: false,
				uiWebViewResetPositionDelay: 500,
				target: window,
				preventDefaultTouchEvents: true,
				
				
				// Carousel
				loop: true,
				slideSpeed: 250,
				nextPreviousSlideSpeed: 0,
				enableDrag: true,
				swipeThreshold: 50,
				swipeTimeThreshold: 250,
				slideTimingFunction: 'ease-out',
				slideshowDelay: 3000,
				doubleTapSpeed: 250,
				margin: 20,
				imageScaleMethod: 'fit', // Either "fit", "fitNoUpscale" or "zoom",
				
				
				// Toolbar
				captionAndToolbarHide: false,
				captionAndToolbarFlipPosition: false,
				captionAndToolbarAutoHideDelay: 5000,
				captionAndToolbarOpacity: 0.8,
				captionAndToolbarShowEmptyCaptions: true,
				getToolbar: PhotoSwipe.Toolbar.getToolbar,
				
				
				// ZoomPanRotate
				allowUserZoom: true, 
				allowRotationOnUserZoom: false,
				maxUserZoom: 5.0,
				minUserZoom: 0.5,
				doubleTapZoomLevel: 2.5,
				
				
				// Cache
				getImageSource: PhotoSwipe.Cache.Functions.getImageSource,
				getImageCaption: PhotoSwipe.Cache.Functions.getImageCaption,
				getImageMetaData: PhotoSwipe.Cache.Functions.getImageMetaData,
				cacheMode: PhotoSwipe.Cache.Mode.normal
				
			};
			
			Util.extend(this.settings, options);
			
			if (this.settings.target !== window){
				targetPosition = Util.DOM.getStyle(this.settings.target, 'position');
				if (targetPosition !== 'relative' || targetPosition !== 'absolute'){
					Util.DOM.setStyle(this.settings.target, 'position', 'relative');
				}
			}
			
			if (this.settings.target !== window){
				this.isBackEventSupported = false;
				this.settings.backButtonHideEnabled = false;
			}
			else{
				if (this.settings.preventHide){
					this.settings.backButtonHideEnabled = false;
				}
			}
			
			this.cache = new Cache.CacheClass(images, this.settings);
			
		},
		
		
		
		/*
		 * Function: show
		 */
		show: function(obj){
			
			var i, j;
			
			this._isResettingPosition = false;
			this.backButtonClicked = false;
			
			// Work out what the starting index is
			if (Util.isNumber(obj)){
				this.currentIndex = obj;
			}
			else{
				
				this.currentIndex = -1;
				for (i=0, j=this.originalImages.length; i<j; i++){
					if (this.originalImages[i] === obj){
						this.currentIndex = i;
						break;
					}
				}
				
			}
			
			if (this.currentIndex < 0 || this.currentIndex > this.originalImages.length-1){
				throw "Code.PhotoSwipe.PhotoSwipeClass.show: Starting index out of range";
			}
			
			// Store a reference to the current window dimensions
			// Use this later to double check that a window has actually
			// been resized.
			this.isAlreadyGettingPage = this.getWindowDimensions();
			
			// Set this instance to be the active instance
			PhotoSwipe.setActivateInstance(this);
			
			this.windowDimensions = this.getWindowDimensions();
			
			// Create components
			if (this.settings.target === window){
				Util.DOM.addClass(window.document.body, PhotoSwipe.CssClasses.buildingBody);
			}
			else{
				Util.DOM.addClass(this.settings.target, PhotoSwipe.CssClasses.buildingBody);
			}
			this.createComponents();
			
			Util.Events.fire(this, {
				type: PhotoSwipe.EventTypes.onBeforeShow,
				target: this
			});
			
			// Fade in the document overlay
			this.documentOverlay.fadeIn(this.settings.fadeInSpeed, this.onDocumentOverlayFadeIn.bind(this));
			
		},
		
		
		
		/*
		 * Function: getWindowDimensions
		 */
		getWindowDimensions: function(){
		
			return {
				width: Util.DOM.windowWidth(),
				height: Util.DOM.windowHeight()
			};
		
		},
		
		
		
		/*
		 * Function: createComponents
		 */
		createComponents: function(){
		
			this.documentOverlay = new DocumentOverlay.DocumentOverlayClass(this.settings);
			this.carousel = new Carousel.CarouselClass(this.cache, this.settings);
			this.uiLayer = new UILayer.UILayerClass(this.settings);
			if (!this.settings.captionAndToolbarHide){
				this.toolbar = new Toolbar.ToolbarClass(this.cache, this.settings);
			}
			
		},
		
		
		
		/*
		 * Function: resetPosition
		 */
		resetPosition: function(){
			
			if (this._isResettingPosition){
				return;
			}
			
			var newWindowDimensions = this.getWindowDimensions();
			if (!Util.isNothing(this.windowDimensions)){
				if (newWindowDimensions.width === this.windowDimensions.width && newWindowDimensions.height === this.windowDimensions.height){
					// This was added as a fudge for iOS
					return;
				}
			}
			
			this._isResettingPosition = true;
			
			this.windowDimensions = newWindowDimensions;
			
			this.destroyZoomPanRotate();
			
			this.documentOverlay.resetPosition();
			this.carousel.resetPosition();
			
			if (!Util.isNothing(this.toolbar)){
				this.toolbar.resetPosition();
			}
			
			this.uiLayer.resetPosition();
			
			this._isResettingPosition = false;
			
			Util.Events.fire(this, {
				type: PhotoSwipe.EventTypes.onResetPosition,
				target: this
			});
			
		},
		
		
		
		/*
		 * Function: addEventHandler
		 */
		addEventHandler: function(type, handler){
			
			Util.Events.add(this, type, handler);
		
		},
		
		
		
		/*
		 * Function: addEventHandlers
		 */
		addEventHandlers: function(){
			
			if (Util.isNothing(this.windowOrientationChangeHandler)){
			
				this.windowOrientationChangeHandler = this.onWindowOrientationChange.bind(this);
				this.windowScrollHandler = this.onWindowScroll.bind(this);
				this.keyDownHandler = this.onKeyDown.bind(this);
				this.windowHashChangeHandler = this.onWindowHashChange.bind(this);
				this.uiLayerTouchHandler = this.onUILayerTouch.bind(this);
				this.carouselSlideByEndHandler = this.onCarouselSlideByEnd.bind(this);
				this.carouselSlideshowStartHandler = this.onCarouselSlideshowStart.bind(this);
				this.carouselSlideshowStopHandler = this.onCarouselSlideshowStop.bind(this);
				this.toolbarTapHandler = this.onToolbarTap.bind(this);
				this.toolbarBeforeShowHandler = this.onToolbarBeforeShow.bind(this);
				this.toolbarShowHandler = this.onToolbarShow.bind(this);
				this.toolbarBeforeHideHandler = this.onToolbarBeforeHide.bind(this);
				this.toolbarHideHandler = this.onToolbarHide.bind(this);
				this.mouseWheelHandler = this.onMouseWheel.bind(this);
				this.zoomPanRotateTransformHandler = this.onZoomPanRotateTransform.bind(this);
				
			}
			
			// Set window handlers
			if (Util.Browser.android){
				// For some reason, resize was more stable than orientationchange in Android
				this.orientationEventName = 'resize';
			}
			else if (Util.Browser.iOS && (!Util.Browser.safari)){
				Util.Events.add(window.document.body, 'orientationchange', this.windowOrientationChangeHandler);
			}
			else{
				var supportsOrientationChange = !Util.isNothing(window.onorientationchange);
				this.orientationEventName = supportsOrientationChange ? 'orientationchange' : 'resize';
			}
			
			if (!Util.isNothing(this.orientationEventName)){
				Util.Events.add(window, this.orientationEventName, this.windowOrientationChangeHandler);
			}
			if (this.settings.target === window){
				Util.Events.add(window, 'scroll', this.windowScrollHandler);
			}
			
			if (this.settings.enableKeyboard){
				Util.Events.add(window.document, 'keydown', this.keyDownHandler);
			}
			
			
			if (this.isBackEventSupported && this.settings.backButtonHideEnabled){
					
				this.windowHashChangeHandler = this.onWindowHashChange.bind(this);
				
				if (this.settings.jQueryMobile){
					window.location.hash = this.settings.jQueryMobileDialogHash;
				}
				else{
					this.currentHistoryHashValue = 'PhotoSwipe' + new Date().getTime().toString();
					window.location.hash = this.currentHistoryHashValue;
				}
								
				Util.Events.add(window, 'hashchange', this.windowHashChangeHandler);
			
			}
			
			if (this.settings.enableMouseWheel){
				Util.Events.add(window, 'mousewheel', this.mouseWheelHandler);
			}
			
			Util.Events.add(this.uiLayer, Util.TouchElement.EventTypes.onTouch, this.uiLayerTouchHandler);
			Util.Events.add(this.carousel, Carousel.EventTypes.onSlideByEnd, this.carouselSlideByEndHandler);
			Util.Events.add(this.carousel, Carousel.EventTypes.onSlideshowStart, this.carouselSlideshowStartHandler);
			Util.Events.add(this.carousel, Carousel.EventTypes.onSlideshowStop, this.carouselSlideshowStopHandler);
			
			if (!Util.isNothing(this.toolbar)){
				Util.Events.add(this.toolbar, Toolbar.EventTypes.onTap, this.toolbarTapHandler);
				Util.Events.add(this.toolbar, Toolbar.EventTypes.onBeforeShow, this.toolbarBeforeShowHandler);
				Util.Events.add(this.toolbar, Toolbar.EventTypes.onShow, this.toolbarShowHandler);
				Util.Events.add(this.toolbar, Toolbar.EventTypes.onBeforeHide, this.toolbarBeforeHideHandler);
				Util.Events.add(this.toolbar, Toolbar.EventTypes.onHide, this.toolbarHideHandler);
			}
		
		},
		
		
		
		/*
		 * Function: removeEventHandlers
		 */
		removeEventHandlers: function(){
			
			if (Util.Browser.iOS && (!Util.Browser.safari)){
				Util.Events.remove(window.document.body, 'orientationchange', this.windowOrientationChangeHandler);
			}
			
			if (!Util.isNothing(this.orientationEventName)){
				Util.Events.remove(window, this.orientationEventName, this.windowOrientationChangeHandler);
			}
			
			Util.Events.remove(window, 'scroll', this.windowScrollHandler);
			
			if (this.settings.enableKeyboard){
				Util.Events.remove(window.document, 'keydown', this.keyDownHandler);
			}
			
			if (this.isBackEventSupported && this.settings.backButtonHideEnabled){
				Util.Events.remove(window, 'hashchange', this.windowHashChangeHandler);
			}
			
			if (this.settings.enableMouseWheel){
				Util.Events.remove(window, 'mousewheel', this.mouseWheelHandler);
			}
			
			if (!Util.isNothing(this.uiLayer)){
				Util.Events.remove(this.uiLayer, Util.TouchElement.EventTypes.onTouch, this.uiLayerTouchHandler);
			}
			
			if (!Util.isNothing(this.toolbar)){
				Util.Events.remove(this.carousel, Carousel.EventTypes.onSlideByEnd, this.carouselSlideByEndHandler);
				Util.Events.remove(this.carousel, Carousel.EventTypes.onSlideshowStart, this.carouselSlideshowStartHandler);
				Util.Events.remove(this.carousel, Carousel.EventTypes.onSlideshowStop, this.carouselSlideshowStopHandler);
			}
			
			if (!Util.isNothing(this.toolbar)){
				Util.Events.remove(this.toolbar, Toolbar.EventTypes.onTap, this.toolbarTapHandler);
				Util.Events.remove(this.toolbar, Toolbar.EventTypes.onBeforeShow, this.toolbarBeforeShowHandler);
				Util.Events.remove(this.toolbar, Toolbar.EventTypes.onShow, this.toolbarShowHandler);
				Util.Events.remove(this.toolbar, Toolbar.EventTypes.onBeforeHide, this.toolbarBeforeHideHandler);
				Util.Events.remove(this.toolbar, Toolbar.EventTypes.onHide, this.toolbarHideHandler);
			}
			
		},
		
		
		
		
		/*
		 * Function: hide
		 */
		hide: function(){
			
			if (this.settings.preventHide){
				return;
			}
			
			if (Util.isNothing(this.documentOverlay)){
				throw "Code.PhotoSwipe.PhotoSwipeClass.hide: PhotoSwipe instance is already hidden";
			}
			
			if (!Util.isNothing(this.hiding)){
				return;
			}
			
			this.clearUIWebViewResetPositionTimeout();
			
			this.destroyZoomPanRotate();
			
			this.removeEventHandlers();
			
			Util.Events.fire(this, {
				type: PhotoSwipe.EventTypes.onBeforeHide,
				target: this
			});
			
			this.uiLayer.dispose();
			this.uiLayer = null;
			
			if (!Util.isNothing(this.toolbar)){
				this.toolbar.dispose();
				this.toolbar = null;
			}
			
			this.carousel.dispose();
			this.carousel = null;
			
			Util.DOM.removeClass(window.document.body, PhotoSwipe.CssClasses.activeBody);
			
			this.documentOverlay.dispose();
			this.documentOverlay = null;
			
			this._isResettingPosition = false;
			
			// Deactive this instance
			PhotoSwipe.unsetActivateInstance(this);
		
			Util.Events.fire(this, {
				type: PhotoSwipe.EventTypes.onHide,
				target: this
			});
			
			this.goBackInHistory();
			
		},
		
		
		
		/*
		 * Function: goBackInHistory
		 */
		goBackInHistory: function(){
			
			if (this.isBackEventSupported && this.settings.backButtonHideEnabled){
				if ( !this.backButtonClicked ){
					window.history.back();
				}
			}
			
		},
		
		
		
		/*
		 * Function: play
		 */
		play: function(){
			
			if (this.isZoomActive()){
				return;
			}
			
			if (!this.settings.preventSlideshow){
				if (!Util.isNothing(this.carousel)){
					if (!Util.isNothing(this.toolbar) && this.toolbar.isVisible){
						this.toolbar.fadeOut();
					}
					this.carousel.startSlideshow();
				}
			}
			
		},
		
		
		
		/*
		 * Function: stop
		 */
		stop: function(){
			
			if (this.isZoomActive()){
				return;
			}
			
			if (!Util.isNothing(this.carousel)){
				this.carousel.stopSlideshow();
			}
		
		},
		
		
		
		/*
		 * Function: previous
		 */
		previous: function(){
			
			if (this.isZoomActive()){
				return;
			}
			
			if (!Util.isNothing(this.carousel)){
				this.carousel.previous();
			}
		
		},
		
		
		
		/*
		 * Function: next
		 */
		next: function(){
			
			if (this.isZoomActive()){
				return;
			}
			
			if (!Util.isNothing(this.carousel)){
				this.carousel.next();
			}
			
		},
		
		
		
		/*
		 * Function: toggleToolbar
		 */
		toggleToolbar: function(){
			
			if (this.isZoomActive()){
				return;
			}
			
			if (!Util.isNothing(this.toolbar)){
				this.toolbar.toggleVisibility(this.currentIndex);
			}
			
		},
		
		
		
		/*
		 * Function: fadeOutToolbarIfVisible
		 */
		fadeOutToolbarIfVisible: function(){
		
			if (!Util.isNothing(this.toolbar) && this.toolbar.isVisible && this.settings.captionAndToolbarAutoHideDelay > 0){
				this.toolbar.fadeOut();
			}
		
		},
		
		
		
		/*
		 * Function: createZoomPanRotate
		 */
		createZoomPanRotate: function(){
			
			this.stop();
			
			if (this.canUserZoom() && !this.isZoomActive()){
				
				Util.Events.fire(this, PhotoSwipe.EventTypes.onBeforeZoomPanRotateShow);
				
				this.zoomPanRotate = new ZoomPanRotate.ZoomPanRotateClass(
					this.settings, 
					this.cache.images[this.currentIndex],
					this.uiLayer
				);
				
				// If we don't override this in the event of false
				// you will be unable to pan around a zoomed image effectively
				this.uiLayer.captureSettings.preventDefaultTouchEvents = true;
				
				Util.Events.add(this.zoomPanRotate, PhotoSwipe.ZoomPanRotate.EventTypes.onTransform, this.zoomPanRotateTransformHandler);
				
				Util.Events.fire(this, PhotoSwipe.EventTypes.onZoomPanRotateShow);
				
				if (!Util.isNothing(this.toolbar) && this.toolbar.isVisible){
					this.toolbar.fadeOut();
				}
				
			}
		
		},
		
		
		
		/*
		 * Function: destroyZoomPanRotate
		 */
		destroyZoomPanRotate: function(){
			
			if (!Util.isNothing(this.zoomPanRotate)){
				
				Util.Events.fire(this, PhotoSwipe.EventTypes.onBeforeZoomPanRotateHide);
			
				Util.Events.remove(this.zoomPanRotate, PhotoSwipe.ZoomPanRotate.EventTypes.onTransform, this.zoomPanRotateTransformHandler);
				this.zoomPanRotate.dispose();
				this.zoomPanRotate = null;
				
				// Set the preventDefaultTouchEvents back to it was
				this.uiLayer.captureSettings.preventDefaultTouchEvents = this.settings.preventDefaultTouchEvents;
				
				Util.Events.fire(this, PhotoSwipe.EventTypes.onZoomPanRotateHide);
				
			}
		
		},
		
		
		
		/*
		 * Function: canUserZoom
		 */
		canUserZoom: function(){
			
			var testEl, cacheImage;
			
			if (Util.Browser.msie){
				testEl = document.createElement('div');
				if (Util.isNothing(testEl.style.msTransform)){
					return false;
				}
			}
			else if (!Util.Browser.isCSSTransformSupported){
				return false;
			}
			
			if (!this.settings.allowUserZoom){
				return false;
			}
			
			
			if (this.carousel.isSliding){
				return false;
			}
			
			cacheImage = this.cache.images[this.currentIndex];
			
			if (Util.isNothing(cacheImage)){
				return false;
			}
			
			if (cacheImage.isLoading){
				return false;
			}
			
			return true;
			
		},
		
		
		
		/*
		 * Function: isZoomActive
		 */
		isZoomActive: function(){
		
			return (!Util.isNothing(this.zoomPanRotate));
		
		},
		
		
		
		/*
		 * Function: getCurrentImage
		 */
		getCurrentImage: function(){
		
			return this.cache.images[this.currentIndex];
		
		},
		
		
		
		/*
		 * Function: onDocumentOverlayFadeIn
		 */
		onDocumentOverlayFadeIn: function(e){
			
			window.setTimeout(function(){
				
				var el = (this.settings.target === window) ? window.document.body : this.settings.target;
				
				Util.DOM.removeClass(el, PhotoSwipe.CssClasses.buildingBody);
				Util.DOM.addClass(el, PhotoSwipe.CssClasses.activeBody);
				
				this.addEventHandlers();
				
				this.carousel.show(this.currentIndex);
				
				this.uiLayer.show();
				
				if (this.settings.autoStartSlideshow){
					this.play();
				}
				else if (!Util.isNothing(this.toolbar)){
					this.toolbar.show(this.currentIndex);
				}
				
				Util.Events.fire(this, {
					type: PhotoSwipe.EventTypes.onShow,
					target: this
				});
			
				this.setUIWebViewResetPositionTimeout();
				
			}.bind(this), 250);
			
			
		},
		
		
		
		/*
		 * Function: setUIWebViewResetPositionTimeout
		 */
		setUIWebViewResetPositionTimeout: function(){
			
			if (!this.settings.enableUIWebViewRepositionTimeout){
				return;
			}
			
			if (!(Util.Browser.iOS && (!Util.Browser.safari))){
				return;
			}
			
			if (!Util.isNothing(this._uiWebViewResetPositionTimeout)){
				window.clearTimeout(this._uiWebViewResetPositionTimeout);
			}
			this._uiWebViewResetPositionTimeout = window.setTimeout(function(){
				
				this.resetPosition();
				
				this.setUIWebViewResetPositionTimeout();
				
			}.bind(this), this.settings.uiWebViewResetPositionDelay);
			
		},
		
		
		
		/*
		 * Function: clearUIWebViewResetPositionTimeout
		 */
		clearUIWebViewResetPositionTimeout: function(){
			if (!Util.isNothing(this._uiWebViewResetPositionTimeout)){
				window.clearTimeout(this._uiWebViewResetPositionTimeout);
			}
		},
		
		
		
		/*
		 * Function: onWindowScroll
		 */
		onWindowScroll: function(e){
			
			this.resetPosition();
		
		},
		
		
		
		/*
		 * Function: onWindowOrientationChange
		 */
		onWindowOrientationChange: function(e){
			
			this.resetPosition();
			
		},
		
		
		
		/*
		 * Function: onWindowHashChange
		 */
		onWindowHashChange: function(e){
			
			var compareHash = '#' + 
				((this.settings.jQueryMobile) ? this.settings.jQueryMobileDialogHash : this.currentHistoryHashValue);
			
			if (window.location.hash !== compareHash){
				this.backButtonClicked = true;
				this.hide();
			}
		
		},
		
		
		
		/*
		 * Function: onKeyDown
		 */
		onKeyDown: function(e){
			
			if (e.keyCode === 37) { // Left
				e.preventDefault();
				this.previous();
			}
			else if (e.keyCode === 39) { // Right
				e.preventDefault();
				this.next();
			}
			else if (e.keyCode === 38 || e.keyCode === 40) { // Up and down
				e.preventDefault();
			}
			else if (e.keyCode === 27) { // Escape
				e.preventDefault();
				this.hide();
			}
			else if (e.keyCode === 32) { // Spacebar
				if (!this.settings.hideToolbar){
					this.toggleToolbar();
				}
				else{
					this.hide();
				}
				e.preventDefault();
			}
			else if (e.keyCode === 13) { // Enter
				e.preventDefault();
				this.play();
			}
			
		},
		
		
		
		/*
		 * Function: onUILayerTouch
		 */
		onUILayerTouch: function(e){
			
			if (this.isZoomActive()){
				
				switch (e.action){
					
					case Util.TouchElement.ActionTypes.gestureChange:
						this.zoomPanRotate.zoomRotate(e.scale, (this.settings.allowRotationOnUserZoom) ? e.rotation : 0);
						break;
					
					case Util.TouchElement.ActionTypes.gestureEnd:
						this.zoomPanRotate.setStartingScaleAndRotation(e.scale, (this.settings.allowRotationOnUserZoom) ? e.rotation : 0);
						break;
						
					case Util.TouchElement.ActionTypes.touchStart:
						this.zoomPanRotate.panStart(e.point);
						break;
					
					case Util.TouchElement.ActionTypes.touchMove:
						this.zoomPanRotate.pan(e.point);
						break;
						
					case Util.TouchElement.ActionTypes.doubleTap:
						this.destroyZoomPanRotate();
						this.toggleToolbar();
						break;
					
					case Util.TouchElement.ActionTypes.swipeLeft:
						this.destroyZoomPanRotate();
						this.next();
						this.toggleToolbar();
						break;
						
					case Util.TouchElement.ActionTypes.swipeRight:
						this.destroyZoomPanRotate();
						this.previous();
						this.toggleToolbar();
						break;
				}
			
			}
			else{
				
				switch (e.action){
					
					case Util.TouchElement.ActionTypes.touchMove:
					case Util.TouchElement.ActionTypes.swipeLeft:
					case Util.TouchElement.ActionTypes.swipeRight:
						
						// Hide the toolbar if need be 
						this.fadeOutToolbarIfVisible();
						
						// Pass the touch onto the carousel
						this.carousel.onTouch(e.action, e.point);
						break;
					
					case Util.TouchElement.ActionTypes.touchStart:
					case Util.TouchElement.ActionTypes.touchMoveEnd:
					
						// Pass the touch onto the carousel
						this.carousel.onTouch(e.action, e.point);
						break;
						
					case Util.TouchElement.ActionTypes.tap:
						this.toggleToolbar();
						break;
						
					case Util.TouchElement.ActionTypes.doubleTap:
						
						// Take into consideration the window scroll
						if (this.settings.target === window){
							e.point.x -= Util.DOM.windowScrollLeft();
							e.point.y -= Util.DOM.windowScrollTop();
						}
						
						// Just make sure that if the user clicks out of the image
						// that the image does not pan out of view!
						var 
							cacheImageEl = this.cache.images[this.currentIndex].imageEl,
						
							imageTop = window.parseInt(Util.DOM.getStyle(cacheImageEl, 'top'), 10),
							imageLeft = window.parseInt(Util.DOM.getStyle(cacheImageEl, 'left'), 10),
							imageRight = imageLeft + Util.DOM.width(cacheImageEl),
							imageBottom = imageTop + Util.DOM.height(cacheImageEl);
						
						if (e.point.x < imageLeft){
							e.point.x = imageLeft;
						}
						else if (e.point.x > imageRight){
							e.point.x = imageRight;
						}
						
						if (e.point.y < imageTop){
							e.point.y = imageTop;
						}
						else if (e.point.y > imageBottom){
							e.point.y = imageBottom;
						}
						
						this.createZoomPanRotate();
						if (this.isZoomActive()){
							this.zoomPanRotate.zoomAndPanToPoint(this.settings.doubleTapZoomLevel, e.point);
						}
						
						break;
					
					case Util.TouchElement.ActionTypes.gestureStart:
						this.createZoomPanRotate();
						break;
				}
				
				
			}
			
			Util.Events.fire(this, {
				type: PhotoSwipe.EventTypes.onTouch,
				target: this,
				point: e.point, 
				action: e.action
			});
			
		},
		
		
		
		/*
		 * Function: onCarouselSlideByEnd
		 */
		onCarouselSlideByEnd: function(e){
			
			this.currentIndex = e.cacheIndex;
			
			if (!Util.isNothing(this.toolbar)){
				this.toolbar.setCaption(this.currentIndex);
				this.toolbar.setToolbarStatus(this.currentIndex);
			}
			
			Util.Events.fire(this, {
				type: PhotoSwipe.EventTypes.onDisplayImage,
				target: this,
				action: e.action,
				index: e.cacheIndex
			});
		
		},
		
		
		
		/*
		 * Function: onToolbarTap
		 */
		onToolbarTap: function(e){
		
			switch(e.action){
				
				case Toolbar.ToolbarAction.next:
					this.next();
					break;
				
				case Toolbar.ToolbarAction.previous:
					this.previous();
					break;
					
				case Toolbar.ToolbarAction.close:
					this.hide();
					break;
				
				case Toolbar.ToolbarAction.play:
					this.play();
					break;
					
			}
			
			Util.Events.fire(this, { 
				type: PhotoSwipe.EventTypes.onToolbarTap, 
				target: this,
				toolbarAction: e.action,
				tapTarget: e.tapTarget
			});
			
		},
		
		
		
		/*
		 * Function: onMouseWheel
		 */
		onMouseWheel: function(e){
			
			var 
				delta = Util.Events.getWheelDelta(e),
				dt = e.timeStamp - (this.mouseWheelStartTime || 0);
			
			if (dt < this.settings.mouseWheelSpeed) {
				return;
			}
			
			this.mouseWheelStartTime = e.timeStamp;
			
			if (this.settings.invertMouseWheel){
				delta = delta * -1;
			}
			
			if (delta < 0){
				this.next();
			}
			else if (delta > 0){
				this.previous();
			}
			
		},
		
		
		
		/*
		 * Function: onCarouselSlideshowStart
		 */
		onCarouselSlideshowStart: function(e){
		
			Util.Events.fire(this, {
				type: PhotoSwipe.EventTypes.onSlideshowStart,
				target: this
			});
		
		},
		
		
		
		/*
		 * Function: onCarouselSlideshowStop
		 */
		onCarouselSlideshowStop: function(e){
		
			Util.Events.fire(this, {
				type: PhotoSwipe.EventTypes.onSlideshowStop,
				target: this
			});
		
		},
		
		
		
		/*
		 * Function: onToolbarBeforeShow
		 */
		onToolbarBeforeShow: function(e){
		
			Util.Events.fire(this, {
				type: PhotoSwipe.EventTypes.onBeforeCaptionAndToolbarShow,
				target: this
			});
		
		},
		
		
		
		/*
		 * Function: onToolbarShow
		 */
		onToolbarShow: function(e){
		
			Util.Events.fire(this, {
				type: PhotoSwipe.EventTypes.onCaptionAndToolbarShow,
				target: this
			});
		
		},
		
		
		
		/*
		 * Function: onToolbarBeforeHide
		 */
		onToolbarBeforeHide: function(e){
		
			Util.Events.fire(this, {
				type: PhotoSwipe.EventTypes.onBeforeCaptionAndToolbarHide,
				target: this
			});
		
		},
		
		
		
		/*
		 * Function: onToolbarHide
		 */
		onToolbarHide: function(e){
		
			Util.Events.fire(this, {
				type: PhotoSwipe.EventTypes.onCaptionAndToolbarHide,
				target: this
			});
		
		},
		
		
		
		/*
		 * Function: onZoomPanRotateTransform
		 */
		onZoomPanRotateTransform: function(e){
			
			Util.Events.fire(this, {
				target: this,
				type: PhotoSwipe.EventTypes.onZoomPanRotateTransform,
				scale: e.scale,
				rotation: e.rotation,
				rotationDegs: e.rotationDegs,
				translateX: e.translateX,
				translateY: e.translateY
			});
			
		}
		
		
	});
	
	
	
}
(
	window, 
	window.klass, 
	window.Code.Util,
	window.Code.PhotoSwipe.Cache,
	window.Code.PhotoSwipe.DocumentOverlay,
	window.Code.PhotoSwipe.Carousel,
	window.Code.PhotoSwipe.Toolbar,
	window.Code.PhotoSwipe.UILayer,
	window.Code.PhotoSwipe.ZoomPanRotate
));
// PhotoSwipe - http://www.photoswipe.com/
// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5
(function(e){if(!Function.prototype.bind)Function.prototype.bind=function(c){var a=[].slice,b=a.call(arguments,1),d=this,f=function(){},g=function(){return d.apply(this instanceof f?this:c||{},b.concat(a.call(arguments)))};f.prototype=d.prototype;g.prototype=new f;return g};if(typeof e.Code==="undefined")e.Code={};e.Code.Util={registerNamespace:function(){var c=arguments,a=null,b,d,f,g,h;b=0;for(g=c.length;b<g;b++){f=c[b];f=f.split(".");a=f[0];typeof e[a]==="undefined"&&(e[a]={});a=e[a];d=1;for(h=
f.length;d<h;++d)a[f[d]]=a[f[d]]||{},a=a[f[d]]}},coalesce:function(){var c,a;c=0;for(a=arguments.length;c<a;c++)if(!this.isNothing(arguments[c]))return arguments[c];return null},extend:function(c,a,b){var d;this.isNothing(b)&&(b=!0);if(c&&a&&this.isObject(a))for(d in a)this.objectHasProperty(a,d)&&(b?c[d]=a[d]:typeof c[d]==="undefined"&&(c[d]=a[d]))},clone:function(c){var a={};this.extend(a,c);return a},isObject:function(c){return c instanceof Object},isFunction:function(c){return{}.toString.call(c)===
"[object Function]"},isArray:function(c){return c instanceof Array},isLikeArray:function(c){return typeof c.length==="number"},isNumber:function(c){return typeof c==="number"},isString:function(c){return typeof c==="string"},isNothing:function(c){if(typeof c==="undefined"||c===null)return!0;return!1},swapArrayElements:function(c,a,b){var d=c[a];c[a]=c[b];c[b]=d},trim:function(c){return c.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},toCamelCase:function(c){return c.replace(/(\-[a-z])/g,function(a){return a.toUpperCase().replace("-",
"")})},toDashedCase:function(c){return c.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})},arrayIndexOf:function(c,a,b){var d,f,g,e;g=-1;d=0;for(f=a.length;d<f;d++)if(e=a[d],this.isNothing(b)){if(e===c){g=d;break}}else if(this.objectHasProperty(e,b)&&e[b]===c){g=d;break}return g},objectHasProperty:function(c,a){return c.hasOwnProperty?c.hasOwnProperty(a):"undefined"!==typeof c[a]}}})(window);
(function(e,c){c.Browser={ua:null,version:null,safari:null,webkit:null,opera:null,msie:null,chrome:null,mozilla:null,android:null,blackberry:null,iPad:null,iPhone:null,iPod:null,iOS:null,is3dSupported:null,isCSSTransformSupported:null,isTouchSupported:null,isGestureSupported:null,_detect:function(){this.ua=e.navigator.userAgent;this.version=this.ua.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[];this.safari=/Safari/gi.test(e.navigator.appVersion);this.webkit=/webkit/i.test(this.ua);this.opera=/opera/i.test(this.ua);
this.msie=/msie/i.test(this.ua)&&!this.opera;this.chrome=/Chrome/i.test(this.ua);this.firefox=/Firefox/i.test(this.ua);this.fennec=/Fennec/i.test(this.ua);this.mozilla=/mozilla/i.test(this.ua)&&!/(compatible|webkit)/.test(this.ua);this.android=/android/i.test(this.ua);this.blackberry=/blackberry/i.test(this.ua);this.iOS=/iphone|ipod|ipad/gi.test(e.navigator.platform);this.iPad=/ipad/gi.test(e.navigator.platform);this.iPhone=/iphone/gi.test(e.navigator.platform);this.iPod=/ipod/gi.test(e.navigator.platform);
var a=document.createElement("div");this.is3dSupported=!c.isNothing(a.style.WebkitPerspective);this.isCSSTransformSupported=!c.isNothing(a.style.WebkitTransform)||!c.isNothing(a.style.MozTransform)||!c.isNothing(a.style.transformProperty);this.isTouchSupported=this.isEventSupported("touchstart");this.isGestureSupported=this.isEventSupported("gesturestart")},_eventTagNames:{select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},isEventSupported:function(a){var b=
document.createElement(this._eventTagNames[a]||"div"),d,a="on"+a;d=c.objectHasProperty(b,a);d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function");return d},isLandscape:function(){return c.DOM.windowWidth()>c.DOM.windowHeight()}};c.Browser._detect()})(window,window.Code.Util);
(function(e,c){c.extend(c,{Events:{add:function(a,b,d){this._checkHandlersProperty(a);b==="mousewheel"&&(b=this._normaliseMouseWheelType());typeof a.__eventHandlers[b]==="undefined"&&(a.__eventHandlers[b]=[]);a.__eventHandlers[b].push(d);this._isBrowserObject(a)&&a.addEventListener(b,d,!1)},remove:function(a,b,d){this._checkHandlersProperty(a);b==="mousewheel"&&(b=this._normaliseMouseWheelType());if(a.__eventHandlers[b]instanceof Array){var f,g,e=a.__eventHandlers[b];if(c.isNothing(d)){if(this._isBrowserObject(a)){f=
0;for(g=e.length;f<g;f++)a.removeEventListener(b,e[f],!1)}a.__eventHandlers[b]=[]}else{f=0;for(g=e.length;f<g;f++)if(e[f]===d){e.splice(f,1);break}this._isBrowserObject(a)&&a.removeEventListener(b,d,!1)}}},fire:function(a,b){var d,f,g,h,j=Array.prototype.slice.call(arguments).splice(2);b==="mousewheel"&&(b=this._normaliseMouseWheelType());if(this._isBrowserObject(a)){if(typeof b!=="string")throw"type must be a string for DOM elements";g=this._NATIVE_EVENTS[b];d=document.createEvent(g?"HTMLEvents":
"UIEvents");d[g?"initEvent":"initUIEvent"](b,!0,!0,e,1);if(j.length<1){a.dispatchEvent(d);return}}this._checkHandlersProperty(a);d=typeof b==="string"?{type:b}:b;if(!d.target)d.target=a;if(!d.type)throw Error("Event object missing 'type' property.");if(a.__eventHandlers[d.type]instanceof Array){g=a.__eventHandlers[d.type];j.unshift(d);d=0;for(f=g.length;d<f;d++)h=g[d],c.isNothing(h)||h.apply(a,j)}},getMousePosition:function(a){var b={x:0,y:0};if(a.pageX)b.x=a.pageX;else if(a.clientX)b.x=a.clientX+
(document.documentElement.scrollLeft||document.body.scrollLeft);if(a.pageY)b.y=a.pageY;else if(a.clientY)b.y=a.clientY+(document.documentElement.scrollTop||document.body.scrollTop);return b},getTouchEvent:function(a){return a},getWheelDelta:function(a){var b=0;c.isNothing(a.wheelDelta)?c.isNothing(a.detail)||(b=-a.detail/3):b=a.wheelDelta/120;return b},domReady:function(a){document.addEventListener("DOMContentLoaded",a,!1)},_checkHandlersProperty:function(a){c.isNothing(a.__eventHandlers)&&c.extend(a,
{__eventHandlers:{}})},_isBrowserObject:function(a){if(a===e||a===e.document)return!0;return this._isElement(a)||this._isNode(a)},_isElement:function(a){return typeof e.HTMLElement==="object"?a instanceof e.HTMLElement:typeof a==="object"&&a.nodeType===1&&typeof a.nodeName==="string"},_isNode:function(a){return typeof e.Node==="object"?a instanceof e.Node:typeof a==="object"&&typeof a.nodeType==="number"&&typeof a.nodeName==="string"},_normaliseMouseWheelType:function(){if(c.Browser.isEventSupported("mousewheel"))return"mousewheel";
return"DOMMouseScroll"},_NATIVE_EVENTS:{click:1,dblclick:1,mouseup:1,mousedown:1,contextmenu:1,mousewheel:1,DOMMouseScroll:1,mouseover:1,mouseout:1,mousemove:1,selectstart:1,selectend:1,keydown:1,keypress:1,keyup:1,orientationchange:1,touchstart:1,touchmove:1,touchend:1,touchcancel:1,gesturestart:1,gesturechange:1,gestureend:1,focus:1,blur:1,change:1,reset:1,select:1,submit:1,load:1,unload:1,beforeunload:1,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1}}})})(window,
window.Code.Util);
(function(e,c){c.extend(c,{DOM:{setData:function(a,b,d){if(c.isLikeArray(a)){var f,g;f=0;for(g=a.length;f<g;f++)c.DOM._setData(a[f],b,d)}else c.DOM._setData(a,b,d)},_setData:function(a,b,d){c.DOM.setAttribute(a,"data-"+b,d)},getData:function(a,b,d){return c.DOM.getAttribute(a,"data-"+b,d)},removeData:function(a,b){if(c.isLikeArray(a)){var d,f;d=0;for(f=a.length;d<f;d++)c.DOM._removeData(a[d],b)}else c.DOM._removeData(a,b)},_removeData:function(a,b){c.DOM.removeAttribute(a,"data-"+b)},isChildOf:function(a,
b){if(b===a)return!1;for(;a&&a!==b;)a=a.parentNode;return a===b},find:function(a,b){if(c.isNothing(b))b=e.document;var d=b.querySelectorAll(a),f=[],g,h;g=0;for(h=d.length;g<h;g++)f.push(d[g]);return f},createElement:function(a,b,d){var f,a=document.createElement(a);for(f in b)c.objectHasProperty(b,f)&&a.setAttribute(f,b[f]);a.innerHTML=d||"";return a},appendChild:function(a,b){b.appendChild(a)},insertBefore:function(a,b,d){d.insertBefore(a,b)},appendText:function(a,b){c.DOM.appendChild(document.createTextNode(a),
b)},appendToBody:function(a){this.appendChild(a,document.body)},removeChild:function(a,b){b.removeChild(a)},removeChildren:function(a){if(a.hasChildNodes())for(;a.childNodes.length>=1;)a.removeChild(a.childNodes[a.childNodes.length-1])},hasAttribute:function(a,b){return!c.isNothing(a.getAttribute(b))},getAttribute:function(a,b,d){a=a.getAttribute(b);c.isNothing(a)&&!c.isNothing(d)&&(a=d);return a},setAttribute:function(a,b,d){if(c.isLikeArray(a)){var f,g;f=0;for(g=a.length;f<g;f++)c.DOM._setAttribute(a[f],
b,d)}else c.DOM._setAttribute(a,b,d)},_setAttribute:function(a,b,d){a.setAttribute(b,d)},removeAttribute:function(a,b){if(c.isLikeArray(a)){var d,f;d=0;for(f=a.length;d<f;d++)c.DOM._removeAttribute(a[d],b)}else c.DOM._removeAttribute(a,b)},_removeAttribute:function(a,b){this.hasAttribute(a,b)&&a.removeAttribute(b)},addClass:function(a,b){if(c.isLikeArray(a)){var d,f;d=0;for(f=a.length;d<f;d++)c.DOM._addClass(a[d],b)}else c.DOM._addClass(a,b)},_addClass:function(a,b){var d=c.DOM.getAttribute(a,"class",
"");RegExp("(?:^|\\s+)"+b+"(?:\\s+|$)").test(d)||(d!==""&&(d+=" "),d+=b,c.DOM.setAttribute(a,"class",d))},removeClass:function(a,b){if(c.isLikeArray(a)){var d,f;d=0;for(f=a.length;d<f;d++)c.DOM._removeClass(a[d],b)}else c.DOM._removeClass(a,b)},_removeClass:function(a,b){var d=c.DOM.getAttribute(a,"class",""),d=c.trim(d).split(" "),f="",g,e;g=0;for(e=d.length;g<e;g++)d[g]!==b&&(f!==""&&(f+=" "),f+=d[g]);f===""?c.DOM.removeAttribute(a,"class"):c.DOM.setAttribute(a,"class",f)},hasClass:function(a,b){return RegExp("(?:^|\\s+)"+
b+"(?:\\s+|$)").test(c.DOM.getAttribute(a,"class",""))},setStyle:function(a,b,d){if(c.isLikeArray(a)){var f,g;f=0;for(g=a.length;f<g;f++)c.DOM._setStyle(a[f],b,d)}else c.DOM._setStyle(a,b,d)},_setStyle:function(a,b,d){var f;if(c.isObject(b))for(f in b)c.objectHasProperty(b,f)&&(f==="width"?c.DOM.width(a,b[f]):f==="height"?c.DOM.height(a,b[f]):a.style[f]=b[f]);else a.style[b]=d},getStyle:function(a,b){var d=e.getComputedStyle(a,"").getPropertyValue(b);d===""&&(d=a.style[b]);return d},hide:function(a){if(c.isLikeArray(a)){var b,
d;b=0;for(d=a.length;b<d;b++)c.DOM._hide(a[b])}else c.DOM._hide(a)},_hide:function(a){c.DOM.setData(a,"ccl-disp",c.DOM.getStyle(a,"display"));c.DOM.setStyle(a,"display","none")},show:function(a){if(c.isLikeArray(a)){var b,d;b=0;for(d=a.length;b<d;b++)c.DOM._show(a[b])}else c.DOM._show(a)},_show:function(a){if(c.DOM.getStyle(a,"display")==="none"){var b=c.DOM.getData(a,"ccl-disp","block");if(b==="none"||b==="")b="block";c.DOM.setStyle(a,"display",b)}},width:function(a,b){if(!c.isNothing(b))c.isNumber(b)&&
(b+="px"),a.style.width=b;return this._getDimension(a,"width")},outerWidth:function(a){var b=c.DOM.width(a);b+=parseInt(c.DOM.getStyle(a,"padding-left"),10)+parseInt(c.DOM.getStyle(a,"padding-right"),10);b+=parseInt(c.DOM.getStyle(a,"margin-left"),10)+parseInt(c.DOM.getStyle(a,"margin-right"),10);b+=parseInt(c.DOM.getStyle(a,"border-left-width"),10)+parseInt(c.DOM.getStyle(a,"border-right-width"),10);return b},height:function(a,b){if(!c.isNothing(b))c.isNumber(b)&&(b+="px"),a.style.height=b;return this._getDimension(a,
"height")},_getDimension:function(a,b){var d=e.parseInt(e.getComputedStyle(a,"").getPropertyValue(b)),f;if(isNaN(d))f={display:a.style.display,left:a.style.left},a.style.display="block",a.style.left="-1000000px",d=e.parseInt(e.getComputedStyle(a,"").getPropertyValue(b)),a.style.display=f.display,a.style.left=f.left;return d},outerHeight:function(a){var b=c.DOM.height(a);b+=parseInt(c.DOM.getStyle(a,"padding-top"),10)+parseInt(c.DOM.getStyle(a,"padding-bottom"),10);b+=parseInt(c.DOM.getStyle(a,"margin-top"),
10)+parseInt(c.DOM.getStyle(a,"margin-bottom"),10);b+=parseInt(c.DOM.getStyle(a,"border-top-width"),10)+parseInt(c.DOM.getStyle(a,"border-bottom-width"),10);return b},documentWidth:function(){return c.DOM.width(document.documentElement)},documentHeight:function(){return c.DOM.height(document.documentElement)},documentOuterWidth:function(){return c.DOM.width(document.documentElement)},documentOuterHeight:function(){return c.DOM.outerHeight(document.documentElement)},bodyWidth:function(){return c.DOM.width(document.body)},
bodyHeight:function(){return c.DOM.height(document.body)},bodyOuterWidth:function(){return c.DOM.outerWidth(document.body)},bodyOuterHeight:function(){return c.DOM.outerHeight(document.body)},windowWidth:function(){return e.innerWidth},windowHeight:function(){return e.innerHeight},windowScrollLeft:function(){return e.pageXOffset},windowScrollTop:function(){return e.pageYOffset}}})})(window,window.Code.Util);
(function(e,c){c.extend(c,{Animation:{_applyTransitionDelay:50,_transitionEndLabel:e.document.documentElement.style.webkitTransition!==void 0?"webkitTransitionEnd":"transitionend",_transitionEndHandler:null,_transitionPrefix:e.document.documentElement.style.webkitTransition!==void 0?"webkitTransition":e.document.documentElement.style.MozTransition!==void 0?"MozTransition":"transition",_transformLabel:e.document.documentElement.style.webkitTransform!==void 0?"webkitTransform":e.document.documentElement.style.MozTransition!==
void 0?"MozTransform":"transform",_getTransitionEndHandler:function(){if(c.isNothing(this._transitionEndHandler))this._transitionEndHandler=this._onTransitionEnd.bind(this);return this._transitionEndHandler},stop:function(a){if(c.Browser.isCSSTransformSupported){var b={};c.Events.remove(a,this._transitionEndLabel,this._getTransitionEndHandler());c.isNothing(a.callbackLabel)&&delete a.callbackLabel;b[this._transitionPrefix+"Property"]="";b[this._transitionPrefix+"Duration"]="";b[this._transitionPrefix+
"TimingFunction"]="";b[this._transitionPrefix+"Delay"]="";b[this._transformLabel]="";c.DOM.setStyle(a,b)}else c.isNothing(e.jQuery)||e.jQuery(a).stop(!0,!0)},fadeIn:function(a,b,d,f,g){g=c.coalesce(g,1);g<=0&&(g=1);if(b<=0&&(c.DOM.setStyle(a,"opacity",g),!c.isNothing(d))){d(a);return}c.DOM.getStyle(a,"opacity")>=1&&c.DOM.setStyle(a,"opacity",0);c.Browser.isCSSTransformSupported?this._applyTransition(a,"opacity",g,b,d,f):c.isNothing(e.jQuery)||e.jQuery(a).fadeTo(b,g,d)},fadeTo:function(a,b,d,f,c){this.fadeIn(a,
d,f,c,b)},fadeOut:function(a,b,d,f){if(b<=0&&(c.DOM.setStyle(a,"opacity",0),!c.isNothing(d))){d(a);return}c.Browser.isCSSTransformSupported?this._applyTransition(a,"opacity",0,b,d,f):e.jQuery(a).fadeTo(b,0,d)},slideBy:function(a,b,d,f,g,h){var j={},b=c.coalesce(b,0),d=c.coalesce(d,0),h=c.coalesce(h,"ease-out");j[this._transitionPrefix+"Property"]="all";j[this._transitionPrefix+"Delay"]="0";f===0?(j[this._transitionPrefix+"Duration"]="",j[this._transitionPrefix+"TimingFunction"]=""):(j[this._transitionPrefix+
"Duration"]=f+"ms",j[this._transitionPrefix+"TimingFunction"]=c.coalesce(h,"ease-out"),c.Events.add(a,this._transitionEndLabel,this._getTransitionEndHandler()));j[this._transformLabel]=c.Browser.is3dSupported?"translate3d("+b+"px, "+d+"px, 0px)":"translate("+b+"px, "+d+"px)";if(!c.isNothing(g))a.cclallcallback=g;c.DOM.setStyle(a,j);f===0&&e.setTimeout(function(){this._leaveTransforms(a)}.bind(this),this._applyTransitionDelay)},resetTranslate:function(a){var b={};b[this._transformLabel]=b[this._transformLabel]=
c.Browser.is3dSupported?"translate3d(0px, 0px, 0px)":"translate(0px, 0px)";c.DOM.setStyle(a,b)},_applyTransition:function(a,b,d,f,g,h){var j={},h=c.coalesce(h,"ease-in");j[this._transitionPrefix+"Property"]=b;j[this._transitionPrefix+"Duration"]=f+"ms";j[this._transitionPrefix+"TimingFunction"]=h;j[this._transitionPrefix+"Delay"]="0";c.Events.add(a,this._transitionEndLabel,this._getTransitionEndHandler());c.DOM.setStyle(a,j);c.isNothing(g)||(a["ccl"+b+"callback"]=g);e.setTimeout(function(){c.DOM.setStyle(a,
b,d)},this._applyTransitionDelay)},_onTransitionEnd:function(a){c.Events.remove(a.currentTarget,this._transitionEndLabel,this._getTransitionEndHandler());this._leaveTransforms(a.currentTarget)},_leaveTransforms:function(a){var b=a.style[this._transitionPrefix+"Property"],d=b!==""?"ccl"+b+"callback":"cclallcallback",f,b=c.coalesce(a.style.webkitTransform,a.style.MozTransform,a.style.transform),g,h=e.parseInt(c.DOM.getStyle(a,"left"),0),j=e.parseInt(c.DOM.getStyle(a,"top"),0),i,l,k={};b!==""&&(b=c.Browser.is3dSupported?
b.match(/translate3d\((.*?)\)/):b.match(/translate\((.*?)\)/),c.isNothing(b)||(g=b[1].split(", "),i=e.parseInt(g[0],0),l=e.parseInt(g[1],0)));k[this._transitionPrefix+"Property"]="";k[this._transitionPrefix+"Duration"]="";k[this._transitionPrefix+"TimingFunction"]="";k[this._transitionPrefix+"Delay"]="";c.DOM.setStyle(a,k);e.setTimeout(function(){if(!c.isNothing(g))k={},k[this._transformLabel]="",k.left=h+i+"px",k.top=j+l+"px",c.DOM.setStyle(a,k);c.isNothing(a[d])||(f=a[d],delete a[d],f(a))}.bind(this),
this._applyTransitionDelay)}}})})(window,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.Util.TouchElement");a.TouchElement.EventTypes={onTouch:"CodeUtilTouchElementOnTouch"};a.TouchElement.ActionTypes={touchStart:"touchStart",touchMove:"touchMove",touchEnd:"touchEnd",touchMoveEnd:"touchMoveEnd",tap:"tap",doubleTap:"doubleTap",swipeLeft:"swipeLeft",swipeRight:"swipeRight",swipeUp:"swipeUp",swipeDown:"swipeDown",gestureStart:"gestureStart",gestureChange:"gestureChange",gestureEnd:"gestureEnd"}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.Util.TouchElement");a.TouchElement.TouchElementClass=c({el:null,captureSettings:null,touchStartPoint:null,touchEndPoint:null,touchStartTime:null,doubleTapTimeout:null,touchStartHandler:null,touchMoveHandler:null,touchEndHandler:null,mouseDownHandler:null,mouseMoveHandler:null,mouseUpHandler:null,mouseOutHandler:null,gestureStartHandler:null,gestureChangeHandler:null,gestureEndHandler:null,swipeThreshold:null,swipeTimeThreshold:null,doubleTapSpeed:null,dispose:function(){var b;
this.removeEventHandlers();for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(b,d){this.el=b;this.captureSettings={swipe:!1,move:!1,gesture:!1,doubleTap:!1,preventDefaultTouchEvents:!0};a.extend(this.captureSettings,d);this.swipeThreshold=50;this.doubleTapSpeed=this.swipeTimeThreshold=250;this.touchStartPoint={x:0,y:0};this.touchEndPoint={x:0,y:0}},addEventHandlers:function(){if(a.isNothing(this.touchStartHandler))this.touchStartHandler=this.onTouchStart.bind(this),this.touchMoveHandler=
this.onTouchMove.bind(this),this.touchEndHandler=this.onTouchEnd.bind(this),this.mouseDownHandler=this.onMouseDown.bind(this),this.mouseMoveHandler=this.onMouseMove.bind(this),this.mouseUpHandler=this.onMouseUp.bind(this),this.mouseOutHandler=this.onMouseOut.bind(this),this.gestureStartHandler=this.onGestureStart.bind(this),this.gestureChangeHandler=this.onGestureChange.bind(this),this.gestureEndHandler=this.onGestureEnd.bind(this);a.Events.add(this.el,"touchstart",this.touchStartHandler);this.captureSettings.move&&
a.Events.add(this.el,"touchmove",this.touchMoveHandler);a.Events.add(this.el,"touchend",this.touchEndHandler);a.Events.add(this.el,"mousedown",this.mouseDownHandler);a.Browser.isGestureSupported&&this.captureSettings.gesture&&(a.Events.add(this.el,"gesturestart",this.gestureStartHandler),a.Events.add(this.el,"gesturechange",this.gestureChangeHandler),a.Events.add(this.el,"gestureend",this.gestureEndHandler))},removeEventHandlers:function(){a.Events.remove(this.el,"touchstart",this.touchStartHandler);
this.captureSettings.move&&a.Events.remove(this.el,"touchmove",this.touchMoveHandler);a.Events.remove(this.el,"touchend",this.touchEndHandler);a.Events.remove(this.el,"mousedown",this.mouseDownHandler);a.Browser.isGestureSupported&&this.captureSettings.gesture&&(a.Events.remove(this.el,"gesturestart",this.gestureStartHandler),a.Events.remove(this.el,"gesturechange",this.gestureChangeHandler),a.Events.remove(this.el,"gestureend",this.gestureEndHandler))},getTouchPoint:function(a){return{x:a[0].pageX,
y:a[0].pageY}},fireTouchEvent:function(b){var d=0,f=0,c=0,h,d=this.touchEndPoint.x-this.touchStartPoint.x,f=this.touchEndPoint.y-this.touchStartPoint.y,c=Math.sqrt(d*d+f*f);if(this.captureSettings.swipe&&(h=new Date,h-=this.touchStartTime,h<=this.swipeTimeThreshold)){if(e.Math.abs(d)>=this.swipeThreshold){a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:d<0?a.TouchElement.ActionTypes.swipeLeft:a.TouchElement.ActionTypes.swipeRight,targetEl:b.target,
currentTargetEl:b.currentTarget});return}if(e.Math.abs(f)>=this.swipeThreshold){a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:f<0?a.TouchElement.ActionTypes.swipeUp:a.TouchElement.ActionTypes.swipeDown,targetEl:b.target,currentTargetEl:b.currentTarget});return}}c>1?a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchMoveEnd,point:this.touchEndPoint,targetEl:b.target,currentTargetEl:b.currentTarget}):
this.captureSettings.doubleTap?a.isNothing(this.doubleTapTimeout)?this.doubleTapTimeout=e.setTimeout(function(){this.doubleTapTimeout=null;a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:a.TouchElement.ActionTypes.tap,targetEl:b.target,currentTargetEl:b.currentTarget})}.bind(this),this.doubleTapSpeed):(e.clearTimeout(this.doubleTapTimeout),this.doubleTapTimeout=null,a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,
action:a.TouchElement.ActionTypes.doubleTap,targetEl:b.target,currentTargetEl:b.currentTarget})):a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:a.TouchElement.ActionTypes.tap,targetEl:b.target,currentTargetEl:b.currentTarget})},onTouchStart:function(b){this.captureSettings.preventDefaultTouchEvents&&b.preventDefault();a.Events.remove(this.el,"mousedown",this.mouseDownHandler);var d=a.Events.getTouchEvent(b).touches;d.length>1&&this.captureSettings.gesture?
this.isGesture=!0:(this.touchStartTime=new Date,this.isGesture=!1,this.touchStartPoint=this.getTouchPoint(d),a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchStart,point:this.touchStartPoint,targetEl:b.target,currentTargetEl:b.currentTarget}))},onTouchMove:function(b){this.captureSettings.preventDefaultTouchEvents&&b.preventDefault();if(!this.isGesture||!this.captureSettings.gesture){var d=a.Events.getTouchEvent(b).touches;a.Events.fire(this,
{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchMove,point:this.getTouchPoint(d),targetEl:b.target,currentTargetEl:b.currentTarget})}},onTouchEnd:function(b){if(!this.isGesture||!this.captureSettings.gesture){this.captureSettings.preventDefaultTouchEvents&&b.preventDefault();var d=a.Events.getTouchEvent(b);this.touchEndPoint=this.getTouchPoint(!a.isNothing(d.changedTouches)?d.changedTouches:d.touches);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,
target:this,action:a.TouchElement.ActionTypes.touchEnd,point:this.touchEndPoint,targetEl:b.target,currentTargetEl:b.currentTarget});this.fireTouchEvent(b)}},onMouseDown:function(b){b.preventDefault();a.Events.remove(this.el,"touchstart",this.mouseDownHandler);a.Events.remove(this.el,"touchmove",this.touchMoveHandler);a.Events.remove(this.el,"touchend",this.touchEndHandler);this.captureSettings.move&&a.Events.add(this.el,"mousemove",this.mouseMoveHandler);a.Events.add(this.el,"mouseup",this.mouseUpHandler);
a.Events.add(this.el,"mouseout",this.mouseOutHandler);this.touchStartTime=new Date;this.isGesture=!1;this.touchStartPoint=a.Events.getMousePosition(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchStart,point:this.touchStartPoint,targetEl:b.target,currentTargetEl:b.currentTarget})},onMouseMove:function(b){b.preventDefault();a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchMove,
point:a.Events.getMousePosition(b),targetEl:b.target,currentTargetEl:b.currentTarget})},onMouseUp:function(b){b.preventDefault();this.captureSettings.move&&a.Events.remove(this.el,"mousemove",this.mouseMoveHandler);a.Events.remove(this.el,"mouseup",this.mouseUpHandler);a.Events.remove(this.el,"mouseout",this.mouseOutHandler);this.touchEndPoint=a.Events.getMousePosition(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchEnd,point:this.touchEndPoint,
targetEl:b.target,currentTargetEl:b.currentTarget});this.fireTouchEvent(b)},onMouseOut:function(b){var d=b.relatedTarget;if(!(this.el===d||a.DOM.isChildOf(d,this.el)))b.preventDefault(),this.captureSettings.move&&a.Events.remove(this.el,"mousemove",this.mouseMoveHandler),a.Events.remove(this.el,"mouseup",this.mouseUpHandler),a.Events.remove(this.el,"mouseout",this.mouseOutHandler),this.touchEndPoint=a.Events.getMousePosition(b),a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,
action:a.TouchElement.ActionTypes.touchEnd,point:this.touchEndPoint,targetEl:b.target,currentTargetEl:b.currentTarget}),this.fireTouchEvent(b)},onGestureStart:function(b){b.preventDefault();var d=a.Events.getTouchEvent(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.gestureStart,scale:d.scale,rotation:d.rotation,targetEl:b.target,currentTargetEl:b.currentTarget})},onGestureChange:function(b){b.preventDefault();var d=a.Events.getTouchEvent(b);
a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.gestureChange,scale:d.scale,rotation:d.rotation,targetEl:b.target,currentTargetEl:b.currentTarget})},onGestureEnd:function(b){b.preventDefault();var d=a.Events.getTouchEvent(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.gestureEnd,scale:d.scale,rotation:d.rotation,targetEl:b.target,currentTargetEl:b.currentTarget})}})})(window,window.klass,
window.Code.Util);(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Image");e.Code.PhotoSwipe.Image.EventTypes={onLoad:"onLoad",onError:"onError"}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Image");var b=e.Code.PhotoSwipe;b.Image.ImageClass=c({refObj:null,imageEl:null,src:null,caption:null,metaData:null,imageLoadHandler:null,imageErrorHandler:null,dispose:function(){var d;this.shrinkImage();for(d in this)a.objectHasProperty(this,d)&&(this[d]=null)},initialize:function(a,b,c,h){this.refObj=a;this.src=this.originalSrc=b;this.caption=c;this.metaData=h;this.imageEl=new e.Image;this.imageLoadHandler=this.onImageLoad.bind(this);this.imageErrorHandler=
this.onImageError.bind(this)},load:function(){this.imageEl.originalSrc=a.coalesce(this.imageEl.originalSrc,"");this.imageEl.originalSrc===this.src?this.imageEl.isError?a.Events.fire(this,{type:b.Image.EventTypes.onError,target:this}):a.Events.fire(this,{type:b.Image.EventTypes.onLoad,target:this}):(this.imageEl.isError=!1,this.imageEl.isLoading=!0,this.imageEl.naturalWidth=null,this.imageEl.naturalHeight=null,this.imageEl.isLandscape=!1,this.imageEl.onload=this.imageLoadHandler,this.imageEl.onerror=
this.imageErrorHandler,this.imageEl.onabort=this.imageErrorHandler,this.imageEl.originalSrc=this.src,this.imageEl.src=this.src)},shrinkImage:function(){if(!a.isNothing(this.imageEl)&&this.imageEl.src.indexOf(this.src)>-1)this.imageEl.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",a.isNothing(this.imageEl.parentNode)||a.DOM.removeChild(this.imageEl,this.imageEl.parentNode)},onImageLoad:function(){this.imageEl.onload=null;this.imageEl.naturalWidth=a.coalesce(this.imageEl.naturalWidth,
this.imageEl.width);this.imageEl.naturalHeight=a.coalesce(this.imageEl.naturalHeight,this.imageEl.height);this.imageEl.isLandscape=this.imageEl.naturalWidth>this.imageEl.naturalHeight;this.imageEl.isLoading=!1;a.Events.fire(this,{type:b.Image.EventTypes.onLoad,target:this})},onImageError:function(){this.imageEl.onload=null;this.imageEl.onerror=null;this.imageEl.onabort=null;this.imageEl.isLoading=!1;this.imageEl.isError=!0;a.Events.fire(this,{type:b.Image.EventTypes.onError,target:this})}})})(window,
window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Cache");e=e.Code.PhotoSwipe;e.Cache.Mode={normal:"normal",aggressive:"aggressive"};e.Cache.Functions={getImageSource:function(a){return a.href},getImageCaption:function(b){if(b.nodeName==="IMG")return a.DOM.getAttribute(b,"alt");var d,f,c;d=0;for(f=b.childNodes.length;d<f;d++)if(c=b.childNodes[d],b.childNodes[d].nodeName==="IMG")return a.DOM.getAttribute(c,"alt")},getImageMetaData:function(){return{}}}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Cache");var b=e.Code.PhotoSwipe;b.Cache.CacheClass=c({images:null,settings:null,dispose:function(){var b,f,c;if(!a.isNothing(this.images)){f=0;for(c=this.images.length;f<c;f++)this.images[f].dispose();this.images.length=0}for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(a,f){var c,e,j,i,l,k;this.settings=f;this.images=[];c=0;for(e=a.length;c<e;c++)j=a[c],i=this.settings.getImageSource(j),l=this.settings.getImageCaption(j),
k=this.settings.getImageMetaData(j),this.images.push(new b.Image.ImageClass(j,i,l,k))},getImages:function(d){var f,c,e=[],j;f=0;for(c=d.length;f<c;f++){j=this.images[d[f]];if(this.settings.cacheMode===b.Cache.Mode.aggressive)j.cacheDoNotShrink=!0;e.push(j)}if(this.settings.cacheMode===b.Cache.Mode.aggressive){f=0;for(c=this.images.length;f<c;f++)j=this.images[f],a.objectHasProperty(j,"cacheDoNotShrink")?delete j.cacheDoNotShrink:j.shrinkImage()}return e}})})(window,window.klass,window.Code.Util,window.Code.PhotoSwipe.Image);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.DocumentOverlay");e.Code.PhotoSwipe.DocumentOverlay.CssClasses={documentOverlay:"ps-document-overlay"}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.DocumentOverlay");var b=e.Code.PhotoSwipe;b.DocumentOverlay.DocumentOverlayClass=c({el:null,settings:null,initialBodyHeight:null,dispose:function(){var b;a.Animation.stop(this.el);a.DOM.removeChild(this.el,this.el.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(d){this.settings=d;this.el=a.DOM.createElement("div",{"class":b.DocumentOverlay.CssClasses.documentOverlay},"");a.DOM.setStyle(this.el,{display:"block",
position:"absolute",left:0,top:0,zIndex:this.settings.zIndex});a.DOM.hide(this.el);this.settings.target===e?a.DOM.appendToBody(this.el):a.DOM.appendChild(this.el,this.settings.target);a.Animation.resetTranslate(this.el);this.initialBodyHeight=a.DOM.bodyOuterHeight()},resetPosition:function(){var b,f,c;if(this.settings.target===e){b=a.DOM.windowWidth();f=a.DOM.bodyOuterHeight()*2;c=this.settings.jQueryMobile?a.DOM.windowScrollTop()+"px":"0px";if(f<1)f=this.initialBodyHeight;a.DOM.windowHeight()>f&&
(f=a.DOM.windowHeight())}else b=a.DOM.width(this.settings.target),f=a.DOM.height(this.settings.target),c="0px";a.DOM.setStyle(this.el,{width:b,height:f,top:c})},fadeIn:function(b,f){this.resetPosition();a.DOM.setStyle(this.el,"opacity",0);a.DOM.show(this.el);a.Animation.fadeIn(this.el,b,f)}})})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Carousel");e=e.Code.PhotoSwipe;e.Carousel.EventTypes={onSlideByEnd:"PhotoSwipeCarouselOnSlideByEnd",onSlideshowStart:"PhotoSwipeCarouselOnSlideshowStart",onSlideshowStop:"PhotoSwipeCarouselOnSlideshowStop"};e.Carousel.CssClasses={carousel:"ps-carousel",content:"ps-carousel-content",item:"ps-carousel-item",itemLoading:"ps-carousel-item-loading",itemError:"ps-carousel-item-error"};e.Carousel.SlideByAction={previous:"previous",current:"current",next:"next"}})(window,
window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Carousel");var b=e.Code.PhotoSwipe;b.Carousel.CarouselClass=c({el:null,contentEl:null,settings:null,cache:null,slideByEndHandler:null,currentCacheIndex:null,isSliding:null,isSlideshowActive:null,lastSlideByAction:null,touchStartPoint:null,touchStartPosition:null,imageLoadHandler:null,imageErrorHandler:null,slideshowTimeout:null,dispose:function(){var d,f,c;f=0;for(c=this.cache.images.length;f<c;f++)a.Events.remove(this.cache.images[f],b.Image.EventTypes.onLoad,
this.imageLoadHandler),a.Events.remove(this.cache.images[f],b.Image.EventTypes.onError,this.imageErrorHandler);this.stopSlideshow();a.Animation.stop(this.el);a.DOM.removeChild(this.el,this.el.parentNode);for(d in this)a.objectHasProperty(this,d)&&(this[d]=null)},initialize:function(d,f){var c,h,j;this.cache=d;this.settings=f;this.slideByEndHandler=this.onSlideByEnd.bind(this);this.imageLoadHandler=this.onImageLoad.bind(this);this.imageErrorHandler=this.onImageError.bind(this);this.currentCacheIndex=
0;this.isSlideshowActive=this.isSliding=!1;if(this.cache.images.length<3)this.settings.loop=!1;this.el=a.DOM.createElement("div",{"class":b.Carousel.CssClasses.carousel},"");a.DOM.setStyle(this.el,{display:"block",position:"absolute",left:0,top:0,overflow:"hidden",zIndex:this.settings.zIndex});a.DOM.hide(this.el);this.contentEl=a.DOM.createElement("div",{"class":b.Carousel.CssClasses.content},"");a.DOM.setStyle(this.contentEl,{display:"block",position:"absolute",left:0,top:0});a.DOM.appendChild(this.contentEl,
this.el);h=d.images.length<3?d.images.length:3;for(c=0;c<h;c++)j=a.DOM.createElement("div",{"class":b.Carousel.CssClasses.item+" "+b.Carousel.CssClasses.item+"-"+c},""),a.DOM.setAttribute(j,"style","float: left;"),a.DOM.setStyle(j,{display:"block",position:"relative",left:0,top:0,overflow:"hidden"}),this.settings.margin>0&&a.DOM.setStyle(j,{marginRight:this.settings.margin+"px"}),a.DOM.appendChild(j,this.contentEl);this.settings.target===e?a.DOM.appendToBody(this.el):a.DOM.appendChild(this.el,this.settings.target)},
resetPosition:function(){var d,f,c,h,j,i;this.settings.target===e?(d=a.DOM.windowWidth(),f=a.DOM.windowHeight(),c=a.DOM.windowScrollTop()+"px"):(d=a.DOM.width(this.settings.target),f=a.DOM.height(this.settings.target),c="0px");h=this.settings.margin>0?d+this.settings.margin:d;j=a.DOM.find("."+b.Carousel.CssClasses.item,this.contentEl);h*=j.length;a.DOM.setStyle(this.el,{top:c,width:d,height:f});a.DOM.setStyle(this.contentEl,{width:h,height:f});c=0;for(h=j.length;c<h;c++)i=j[c],a.DOM.setStyle(i,{width:d,
height:f}),i=a.DOM.find("img",i)[0],a.isNothing(i)||this.resetImagePosition(i);this.setContentLeftPosition()},resetImagePosition:function(b){if(!a.isNothing(b)){a.DOM.getAttribute(b,"src");var c,e,h,j=a.DOM.width(this.el),i=a.DOM.height(this.el);this.settings.imageScaleMethod==="fitNoUpscale"?(e=b.naturalWidth,h=b.naturalHeight,e>j&&(c=j/e,e=Math.round(e*c),h=Math.round(h*c)),h>i&&(c=i/h,h=Math.round(h*c),e=Math.round(e*c))):(c=b.isLandscape?j/b.naturalWidth:i/b.naturalHeight,e=Math.round(b.naturalWidth*
c),h=Math.round(b.naturalHeight*c),this.settings.imageScaleMethod==="zoom"?(c=1,h<i?c=i/h:e<j&&(c=j/e),c!==1&&(e=Math.round(e*c),h=Math.round(h*c))):this.settings.imageScaleMethod==="fit"&&(c=1,e>j?c=j/e:h>i&&(c=i/h),c!==1&&(e=Math.round(e*c),h=Math.round(h*c))));a.DOM.setStyle(b,{position:"absolute",width:e,height:h,top:Math.round((i-h)/2)+"px",left:Math.round((j-e)/2)+"px",display:"block"})}},setContentLeftPosition:function(){var b,c,g;b=this.settings.target===e?a.DOM.windowWidth():a.DOM.width(this.settings.target);
c=this.getItemEls();g=0;this.settings.loop?g=(b+this.settings.margin)*-1:this.currentCacheIndex===this.cache.images.length-1?g=(c.length-1)*(b+this.settings.margin)*-1:this.currentCacheIndex>0&&(g=(b+this.settings.margin)*-1);a.DOM.setStyle(this.contentEl,{left:g+"px"})},show:function(d){this.currentCacheIndex=d;this.resetPosition();this.setImages(!1);a.DOM.show(this.el);a.Animation.resetTranslate(this.contentEl);var d=this.getItemEls(),c,e;c=0;for(e=d.length;c<e;c++)a.Animation.resetTranslate(d[c]);
a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideByEnd,target:this,action:b.Carousel.SlideByAction.current,cacheIndex:this.currentCacheIndex})},setImages:function(a){var b,c=this.getItemEls();b=this.currentCacheIndex+1;var e=this.currentCacheIndex-1;this.settings.loop?(b>this.cache.images.length-1&&(b=0),e<0&&(e=this.cache.images.length-1),b=this.cache.getImages([e,this.currentCacheIndex,b]),a||this.addCacheImageToItemEl(b[1],c[1]),this.addCacheImageToItemEl(b[2],c[2]),this.addCacheImageToItemEl(b[0],
c[0])):c.length===1?a||(b=this.cache.getImages([this.currentCacheIndex]),this.addCacheImageToItemEl(b[0],c[0])):c.length===2?this.currentCacheIndex===0?(b=this.cache.getImages([this.currentCacheIndex,this.currentCacheIndex+1]),a||this.addCacheImageToItemEl(b[0],c[0]),this.addCacheImageToItemEl(b[1],c[1])):(b=this.cache.getImages([this.currentCacheIndex-1,this.currentCacheIndex]),a||this.addCacheImageToItemEl(b[1],c[1]),this.addCacheImageToItemEl(b[0],c[0])):this.currentCacheIndex===0?(b=this.cache.getImages([this.currentCacheIndex,
this.currentCacheIndex+1,this.currentCacheIndex+2]),a||this.addCacheImageToItemEl(b[0],c[0]),this.addCacheImageToItemEl(b[1],c[1]),this.addCacheImageToItemEl(b[2],c[2])):(this.currentCacheIndex===this.cache.images.length-1?(b=this.cache.getImages([this.currentCacheIndex-2,this.currentCacheIndex-1,this.currentCacheIndex]),a||this.addCacheImageToItemEl(b[2],c[2]),this.addCacheImageToItemEl(b[1],c[1])):(b=this.cache.getImages([this.currentCacheIndex-1,this.currentCacheIndex,this.currentCacheIndex+1]),
a||this.addCacheImageToItemEl(b[1],c[1]),this.addCacheImageToItemEl(b[2],c[2])),this.addCacheImageToItemEl(b[0],c[0]))},addCacheImageToItemEl:function(d,c){a.DOM.removeClass(c,b.Carousel.CssClasses.itemError);a.DOM.addClass(c,b.Carousel.CssClasses.itemLoading);a.DOM.removeChildren(c);a.DOM.setStyle(d.imageEl,{display:"none"});a.DOM.appendChild(d.imageEl,c);a.Animation.resetTranslate(d.imageEl);a.Events.add(d,b.Image.EventTypes.onLoad,this.imageLoadHandler);a.Events.add(d,b.Image.EventTypes.onError,
this.imageErrorHandler);d.load()},slideCarousel:function(d,c,g){if(!this.isSliding){var h,j;h=this.settings.target===e?a.DOM.windowWidth()+this.settings.margin:a.DOM.width(this.settings.target)+this.settings.margin;g=a.coalesce(g,this.settings.slideSpeed);if(!(e.Math.abs(j)<1)){switch(c){case a.TouchElement.ActionTypes.swipeLeft:d=h*-1;break;case a.TouchElement.ActionTypes.swipeRight:d=h;break;default:j=d.x-this.touchStartPoint.x,d=e.Math.abs(j)>h/2?j>0?h:h*-1:0}this.lastSlideByAction=d<0?b.Carousel.SlideByAction.next:
d>0?b.Carousel.SlideByAction.previous:b.Carousel.SlideByAction.current;if(!this.settings.loop&&(this.lastSlideByAction===b.Carousel.SlideByAction.previous&&this.currentCacheIndex===0||this.lastSlideByAction===b.Carousel.SlideByAction.next&&this.currentCacheIndex===this.cache.images.length-1))d=0,this.lastSlideByAction=b.Carousel.SlideByAction.current;this.isSliding=!0;this.doSlideCarousel(d,g)}}},moveCarousel:function(a){this.isSliding||this.settings.enableDrag&&this.doMoveCarousel(a.x-this.touchStartPoint.x)},
getItemEls:function(){return a.DOM.find("."+b.Carousel.CssClasses.item,this.contentEl)},previous:function(){this.stopSlideshow();this.slideCarousel({x:0,y:0},a.TouchElement.ActionTypes.swipeRight,this.settings.nextPreviousSlideSpeed)},next:function(){this.stopSlideshow();this.slideCarousel({x:0,y:0},a.TouchElement.ActionTypes.swipeLeft,this.settings.nextPreviousSlideSpeed)},slideshowNext:function(){this.slideCarousel({x:0,y:0},a.TouchElement.ActionTypes.swipeLeft)},startSlideshow:function(){this.stopSlideshow();
this.isSlideshowActive=!0;this.slideshowTimeout=e.setTimeout(this.slideshowNext.bind(this),this.settings.slideshowDelay);a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideshowStart,target:this})},stopSlideshow:function(){if(!a.isNothing(this.slideshowTimeout))e.clearTimeout(this.slideshowTimeout),this.slideshowTimeout=null,this.isSlideshowActive=!1,a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideshowStop,target:this})},onSlideByEnd:function(){if(!a.isNothing(this.isSliding)){var d=this.getItemEls();
this.isSliding=!1;this.lastSlideByAction===b.Carousel.SlideByAction.next?this.currentCacheIndex+=1:this.lastSlideByAction===b.Carousel.SlideByAction.previous&&(this.currentCacheIndex-=1);if(this.settings.loop)if(this.lastSlideByAction===b.Carousel.SlideByAction.next?a.DOM.appendChild(d[0],this.contentEl):this.lastSlideByAction===b.Carousel.SlideByAction.previous&&a.DOM.insertBefore(d[d.length-1],d[0],this.contentEl),this.currentCacheIndex<0)this.currentCacheIndex=this.cache.images.length-1;else{if(this.currentCacheIndex===
this.cache.images.length)this.currentCacheIndex=0}else this.cache.images.length>3&&(this.currentCacheIndex>1&&this.currentCacheIndex<this.cache.images.length-2?this.lastSlideByAction===b.Carousel.SlideByAction.next?a.DOM.appendChild(d[0],this.contentEl):this.lastSlideByAction===b.Carousel.SlideByAction.previous&&a.DOM.insertBefore(d[d.length-1],d[0],this.contentEl):this.currentCacheIndex===1?this.lastSlideByAction===b.Carousel.SlideByAction.previous&&a.DOM.insertBefore(d[d.length-1],d[0],this.contentEl):
this.currentCacheIndex===this.cache.images.length-2&&this.lastSlideByAction===b.Carousel.SlideByAction.next&&a.DOM.appendChild(d[0],this.contentEl));this.lastSlideByAction!==b.Carousel.SlideByAction.current&&(this.setContentLeftPosition(),this.setImages(!0));a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideByEnd,target:this,action:this.lastSlideByAction,cacheIndex:this.currentCacheIndex});this.isSlideshowActive&&(this.lastSlideByAction!==b.Carousel.SlideByAction.current?this.startSlideshow():
this.stopSlideshow())}},onTouch:function(b,c){this.stopSlideshow();switch(b){case a.TouchElement.ActionTypes.touchStart:this.touchStartPoint=c;this.touchStartPosition={x:e.parseInt(a.DOM.getStyle(this.contentEl,"left"),0),y:e.parseInt(a.DOM.getStyle(this.contentEl,"top"),0)};break;case a.TouchElement.ActionTypes.touchMove:this.moveCarousel(c);break;case a.TouchElement.ActionTypes.touchMoveEnd:case a.TouchElement.ActionTypes.swipeLeft:case a.TouchElement.ActionTypes.swipeRight:this.slideCarousel(c,
b)}},onImageLoad:function(d){d=d.target;a.isNothing(d.imageEl.parentNode)||(a.DOM.removeClass(d.imageEl.parentNode,b.Carousel.CssClasses.itemLoading),this.resetImagePosition(d.imageEl));a.Events.remove(d,b.Image.EventTypes.onLoad,this.imageLoadHandler);a.Events.remove(d,b.Image.EventTypes.onError,this.imageErrorHandler)},onImageError:function(d){d=d.target;a.isNothing(d.imageEl.parentNode)||(a.DOM.removeClass(d.imageEl.parentNode,b.Carousel.CssClasses.itemLoading),a.DOM.addClass(d.imageEl.parentNode,
b.Carousel.CssClasses.itemError));a.Events.remove(d,b.Image.EventTypes.onLoad,this.imageLoadHandler);a.Events.remove(d,b.Image.EventTypes.onError,this.imageErrorHandler)}})})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Carousel");c=e.Code.PhotoSwipe;c.Carousel.CarouselClass=c.Carousel.CarouselClass.extend({getStartingPos:function(){var b=this.touchStartPosition;a.isNothing(b)&&(b={x:e.parseInt(a.DOM.getStyle(this.contentEl,"left"),0),y:e.parseInt(a.DOM.getStyle(this.contentEl,"top"),0)});return b},doMoveCarousel:function(b){var d;a.Browser.isCSSTransformSupported?(d={},d[a.Animation._transitionPrefix+"Property"]="all",d[a.Animation._transitionPrefix+"Duration"]=
"",d[a.Animation._transitionPrefix+"TimingFunction"]="",d[a.Animation._transitionPrefix+"Delay"]="0",d[a.Animation._transformLabel]=a.Browser.is3dSupported?"translate3d("+b+"px, 0px, 0px)":"translate("+b+"px, 0px)",a.DOM.setStyle(this.contentEl,d)):a.isNothing(e.jQuery)||e.jQuery(this.contentEl).stop().css("left",this.getStartingPos().x+b+"px")},doSlideCarousel:function(b,d){var c;if(d<=0)this.slideByEndHandler();else if(a.Browser.isCSSTransformSupported)c=a.coalesce(this.contentEl.style.webkitTransform,
this.contentEl.style.MozTransform,this.contentEl.style.transform,""),c.indexOf("translate3d("+b)===0?this.slideByEndHandler():c.indexOf("translate("+b)===0?this.slideByEndHandler():a.Animation.slideBy(this.contentEl,b,0,d,this.slideByEndHandler,this.settings.slideTimingFunction);else if(!a.isNothing(e.jQuery)){c={left:this.getStartingPos().x+b+"px"};if(this.settings.animationTimingFunction==="ease-out")this.settings.animationTimingFunction="easeOutQuad";if(a.isNothing(e.jQuery.easing[this.settings.animationTimingFunction]))this.settings.animationTimingFunction=
"linear";e.jQuery(this.contentEl).animate(c,this.settings.slideSpeed,this.settings.animationTimingFunction,this.slideByEndHandler)}}})})(window,window.klass,window.Code.Util,window.Code.PhotoSwipe.TouchElement);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Toolbar");var b=e.Code.PhotoSwipe;b.Toolbar.CssClasses={toolbar:"ps-toolbar",toolbarContent:"ps-toolbar-content",toolbarTop:"ps-toolbar-top",caption:"ps-caption",captionBottom:"ps-caption-bottom",captionContent:"ps-caption-content",close:"ps-toolbar-close",play:"ps-toolbar-play",previous:"ps-toolbar-previous",previousDisabled:"ps-toolbar-previous-disabled",next:"ps-toolbar-next",nextDisabled:"ps-toolbar-next-disabled"};b.Toolbar.ToolbarAction=
{close:"close",play:"play",next:"next",previous:"previous",none:"none"};b.Toolbar.EventTypes={onTap:"PhotoSwipeToolbarOnClick",onBeforeShow:"PhotoSwipeToolbarOnBeforeShow",onShow:"PhotoSwipeToolbarOnShow",onBeforeHide:"PhotoSwipeToolbarOnBeforeHide",onHide:"PhotoSwipeToolbarOnHide"};b.Toolbar.getToolbar=function(){return'<div class="'+b.Toolbar.CssClasses.close+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+'"></div></div><div class="'+b.Toolbar.CssClasses.play+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+
'"></div></div><div class="'+b.Toolbar.CssClasses.previous+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+'"></div></div><div class="'+b.Toolbar.CssClasses.next+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+'"></div></div>'}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Toolbar");var b=e.Code.PhotoSwipe;b.Toolbar.ToolbarClass=c({toolbarEl:null,closeEl:null,playEl:null,previousEl:null,nextEl:null,captionEl:null,captionContentEl:null,currentCaption:null,settings:null,cache:null,timeout:null,isVisible:null,fadeOutHandler:null,touchStartHandler:null,touchMoveHandler:null,clickHandler:null,dispose:function(){var b;this.clearTimeout();this.removeEventHandlers();a.Animation.stop(this.toolbarEl);a.Animation.stop(this.captionEl);
a.DOM.removeChild(this.toolbarEl,this.toolbarEl.parentNode);a.DOM.removeChild(this.captionEl,this.captionEl.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(d,c){var g;this.settings=c;this.cache=d;this.isVisible=!1;this.fadeOutHandler=this.onFadeOut.bind(this);this.touchStartHandler=this.onTouchStart.bind(this);this.touchMoveHandler=this.onTouchMove.bind(this);this.clickHandler=this.onClick.bind(this);g=b.Toolbar.CssClasses.toolbar;this.settings.captionAndToolbarFlipPosition&&
(g=g+" "+b.Toolbar.CssClasses.toolbarTop);this.toolbarEl=a.DOM.createElement("div",{"class":g},this.settings.getToolbar());a.DOM.setStyle(this.toolbarEl,{left:0,position:"absolute",overflow:"hidden",zIndex:this.settings.zIndex});this.settings.target===e?a.DOM.appendToBody(this.toolbarEl):a.DOM.appendChild(this.toolbarEl,this.settings.target);a.DOM.hide(this.toolbarEl);this.closeEl=a.DOM.find("."+b.Toolbar.CssClasses.close,this.toolbarEl)[0];this.settings.preventHide&&!a.isNothing(this.closeEl)&&a.DOM.hide(this.closeEl);
this.playEl=a.DOM.find("."+b.Toolbar.CssClasses.play,this.toolbarEl)[0];this.settings.preventSlideshow&&!a.isNothing(this.playEl)&&a.DOM.hide(this.playEl);this.nextEl=a.DOM.find("."+b.Toolbar.CssClasses.next,this.toolbarEl)[0];this.previousEl=a.DOM.find("."+b.Toolbar.CssClasses.previous,this.toolbarEl)[0];g=b.Toolbar.CssClasses.caption;this.settings.captionAndToolbarFlipPosition&&(g=g+" "+b.Toolbar.CssClasses.captionBottom);this.captionEl=a.DOM.createElement("div",{"class":g},"");a.DOM.setStyle(this.captionEl,
{left:0,position:"absolute",overflow:"hidden",zIndex:this.settings.zIndex});this.settings.target===e?a.DOM.appendToBody(this.captionEl):a.DOM.appendChild(this.captionEl,this.settings.target);a.DOM.hide(this.captionEl);this.captionContentEl=a.DOM.createElement("div",{"class":b.Toolbar.CssClasses.captionContent},"");a.DOM.appendChild(this.captionContentEl,this.captionEl);this.addEventHandlers()},resetPosition:function(){var b,c,g;this.settings.target===e?(this.settings.captionAndToolbarFlipPosition?
(c=a.DOM.windowScrollTop(),g=a.DOM.windowScrollTop()+a.DOM.windowHeight()-a.DOM.height(this.captionEl)):(c=a.DOM.windowScrollTop()+a.DOM.windowHeight()-a.DOM.height(this.toolbarEl),g=a.DOM.windowScrollTop()),b=a.DOM.windowWidth()):(this.settings.captionAndToolbarFlipPosition?(c="0",g=a.DOM.height(this.settings.target)-a.DOM.height(this.captionEl)):(c=a.DOM.height(this.settings.target)-a.DOM.height(this.toolbarEl),g=0),b=a.DOM.width(this.settings.target));a.DOM.setStyle(this.toolbarEl,{top:c+"px",
width:b});a.DOM.setStyle(this.captionEl,{top:g+"px",width:b})},toggleVisibility:function(a){this.isVisible?this.fadeOut():this.show(a)},show:function(d){a.Animation.stop(this.toolbarEl);a.Animation.stop(this.captionEl);this.resetPosition();this.setToolbarStatus(d);a.Events.fire(this,{type:b.Toolbar.EventTypes.onBeforeShow,target:this});this.showToolbar();this.setCaption(d);this.showCaption();this.isVisible=!0;this.setTimeout();a.Events.fire(this,{type:b.Toolbar.EventTypes.onShow,target:this})},setTimeout:function(){if(this.settings.captionAndToolbarAutoHideDelay>
0)this.clearTimeout(),this.timeout=e.setTimeout(this.fadeOut.bind(this),this.settings.captionAndToolbarAutoHideDelay)},clearTimeout:function(){if(!a.isNothing(this.timeout))e.clearTimeout(this.timeout),this.timeout=null},fadeOut:function(){this.clearTimeout();a.Events.fire(this,{type:b.Toolbar.EventTypes.onBeforeHide,target:this});a.Animation.fadeOut(this.toolbarEl,this.settings.fadeOutSpeed);a.Animation.fadeOut(this.captionEl,this.settings.fadeOutSpeed,this.fadeOutHandler);this.isVisible=!1},addEventHandlers:function(){a.Browser.isTouchSupported&&
(a.Browser.blackberry||a.Events.add(this.toolbarEl,"touchstart",this.touchStartHandler),a.Events.add(this.toolbarEl,"touchmove",this.touchMoveHandler),a.Events.add(this.captionEl,"touchmove",this.touchMoveHandler));a.Events.add(this.toolbarEl,"click",this.clickHandler)},removeEventHandlers:function(){a.Browser.isTouchSupported&&(a.Browser.blackberry||a.Events.remove(this.toolbarEl,"touchstart",this.touchStartHandler),a.Events.remove(this.toolbarEl,"touchmove",this.touchMoveHandler),a.Events.remove(this.captionEl,
"touchmove",this.touchMoveHandler));a.Events.remove(this.toolbarEl,"click",this.clickHandler)},handleTap:function(d){this.clearTimeout();var c;if(d.target===this.nextEl||a.DOM.isChildOf(d.target,this.nextEl))c=b.Toolbar.ToolbarAction.next;else if(d.target===this.previousEl||a.DOM.isChildOf(d.target,this.previousEl))c=b.Toolbar.ToolbarAction.previous;else if(d.target===this.closeEl||a.DOM.isChildOf(d.target,this.closeEl))c=b.Toolbar.ToolbarAction.close;else if(d.target===this.playEl||a.DOM.isChildOf(d.target,
this.playEl))c=b.Toolbar.ToolbarAction.play;this.setTimeout();if(a.isNothing(c))c=b.Toolbar.ToolbarAction.none;a.Events.fire(this,{type:b.Toolbar.EventTypes.onTap,target:this,action:c,tapTarget:d.target})},setCaption:function(b){a.DOM.removeChildren(this.captionContentEl);this.currentCaption=a.coalesce(this.cache.images[b].caption,"\u00a0");if(a.isObject(this.currentCaption))a.DOM.appendChild(this.currentCaption,this.captionContentEl);else{if(this.currentCaption==="")this.currentCaption="\u00a0";
a.DOM.appendText(this.currentCaption,this.captionContentEl)}this.currentCaption=this.currentCaption==="\u00a0"?"":this.currentCaption;this.resetPosition()},showToolbar:function(){a.DOM.setStyle(this.toolbarEl,{opacity:this.settings.captionAndToolbarOpacity});a.DOM.show(this.toolbarEl)},showCaption:function(){(this.currentCaption===""||this.captionContentEl.childNodes.length<1)&&!this.settings.captionAndToolbarShowEmptyCaptions?a.DOM.hide(this.captionEl):(a.DOM.setStyle(this.captionEl,{opacity:this.settings.captionAndToolbarOpacity}),
a.DOM.show(this.captionEl))},setToolbarStatus:function(d){this.settings.loop||(a.DOM.removeClass(this.previousEl,b.Toolbar.CssClasses.previousDisabled),a.DOM.removeClass(this.nextEl,b.Toolbar.CssClasses.nextDisabled),d>0&&d<this.cache.images.length-1||(d===0&&(a.isNothing(this.previousEl)||a.DOM.addClass(this.previousEl,b.Toolbar.CssClasses.previousDisabled)),d===this.cache.images.length-1&&(a.isNothing(this.nextEl)||a.DOM.addClass(this.nextEl,b.Toolbar.CssClasses.nextDisabled))))},onFadeOut:function(){a.DOM.hide(this.toolbarEl);
a.DOM.hide(this.captionEl);a.Events.fire(this,{type:b.Toolbar.EventTypes.onHide,target:this})},onTouchStart:function(b){b.preventDefault();a.Events.remove(this.toolbarEl,"click",this.clickHandler);this.handleTap(b)},onTouchMove:function(a){a.preventDefault()},onClick:function(a){a.preventDefault();this.handleTap(a)}})})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.UILayer");e.Code.PhotoSwipe.UILayer.CssClasses={uiLayer:"ps-uilayer"}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.UILayer");var b=e.Code.PhotoSwipe;b.UILayer.UILayerClass=a.TouchElement.TouchElementClass.extend({el:null,settings:null,dispose:function(){var b;this.removeEventHandlers();a.DOM.removeChild(this.el,this.el.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(d){this.settings=d;this.el=a.DOM.createElement("div",{"class":b.UILayer.CssClasses.uiLayer},"");a.DOM.setStyle(this.el,{display:"block",position:"absolute",
left:0,top:0,overflow:"hidden",zIndex:this.settings.zIndex,opacity:0});a.DOM.hide(this.el);this.settings.target===e?a.DOM.appendToBody(this.el):a.DOM.appendChild(this.el,this.settings.target);this.supr(this.el,{swipe:!0,move:!0,gesture:a.Browser.iOS,doubleTap:!0,preventDefaultTouchEvents:this.settings.preventDefaultTouchEvents})},resetPosition:function(){this.settings.target===e?a.DOM.setStyle(this.el,{top:a.DOM.windowScrollTop()+"px",width:a.DOM.windowWidth(),height:a.DOM.windowHeight()}):a.DOM.setStyle(this.el,
{top:"0px",width:a.DOM.width(this.settings.target),height:a.DOM.height(this.settings.target)})},show:function(){this.resetPosition();a.DOM.show(this.el);this.addEventHandlers()},addEventHandlers:function(){this.supr()},removeEventHandlers:function(){this.supr()}})})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.ZoomPanRotate");e=e.Code.PhotoSwipe;e.ZoomPanRotate.CssClasses={zoomPanRotate:"ps-zoom-pan-rotate"};e.ZoomPanRotate.EventTypes={onTransform:"PhotoSwipeZoomPanRotateOnTransform"}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.ZoomPanRotate");var b=e.Code.PhotoSwipe;b.ZoomPanRotate.ZoomPanRotateClass=c({el:null,settings:null,containerEl:null,imageEl:null,transformSettings:null,panStartingPoint:null,transformEl:null,dispose:function(){var b;a.DOM.removeChild(this.el,this.el.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(c,f,g){var h,j,i;this.settings=c;this.settings.target===e?(c=document.body,h=a.DOM.windowWidth(),j=a.DOM.windowHeight(),
i=a.DOM.windowScrollTop()+"px"):(c=this.settings.target,h=a.DOM.width(c),j=a.DOM.height(c),i="0px");this.imageEl=f.imageEl.cloneNode(!1);a.DOM.setStyle(this.imageEl,{zIndex:1});this.transformSettings={startingScale:1,scale:1,startingRotation:0,rotation:0,startingTranslateX:0,startingTranslateY:0,translateX:0,translateY:0};this.el=a.DOM.createElement("div",{"class":b.ZoomPanRotate.CssClasses.zoomPanRotate},"");a.DOM.setStyle(this.el,{left:0,top:i,position:"absolute",width:h,height:j,zIndex:this.settings.zIndex,
display:"block"});a.DOM.insertBefore(this.el,g.el,c);a.Browser.iOS?(this.containerEl=a.DOM.createElement("div","",""),a.DOM.setStyle(this.containerEl,{left:0,top:0,width:h,height:j,position:"absolute",zIndex:1}),a.DOM.appendChild(this.imageEl,this.containerEl),a.DOM.appendChild(this.containerEl,this.el),a.Animation.resetTranslate(this.containerEl),a.Animation.resetTranslate(this.imageEl),this.transformEl=this.containerEl):(a.DOM.appendChild(this.imageEl,this.el),this.transformEl=this.imageEl)},setStartingTranslateFromCurrentTransform:function(){var b=
a.coalesce(this.transformEl.style.webkitTransform,this.transformEl.style.MozTransform,this.transformEl.style.transform);if(!a.isNothing(b)&&(b=b.match(/translate\((.*?)\)/),!a.isNothing(b)))b=b[1].split(", "),this.transformSettings.startingTranslateX=e.parseInt(b[0],10),this.transformSettings.startingTranslateY=e.parseInt(b[1],10)},getScale:function(a){a*=this.transformSettings.startingScale;if(this.settings.minUserZoom!==0&&a<this.settings.minUserZoom)a=this.settings.minUserZoom;else if(this.settings.maxUserZoom!==
0&&a>this.settings.maxUserZoom)a=this.settings.maxUserZoom;return a},setStartingScaleAndRotation:function(a,b){this.transformSettings.startingScale=this.getScale(a);this.transformSettings.startingRotation=(this.transformSettings.startingRotation+b)%360},zoomRotate:function(a,b){this.transformSettings.scale=this.getScale(a);this.transformSettings.rotation=this.transformSettings.startingRotation+b;this.applyTransform()},panStart:function(a){this.setStartingTranslateFromCurrentTransform();this.panStartingPoint=
{x:a.x,y:a.y}},pan:function(a){var b=(a.y-this.panStartingPoint.y)/this.transformSettings.scale;this.transformSettings.translateX=this.transformSettings.startingTranslateX+(a.x-this.panStartingPoint.x)/this.transformSettings.scale;this.transformSettings.translateY=this.transformSettings.startingTranslateY+b;this.applyTransform()},zoomAndPanToPoint:function(b,c){if(this.settings.target===e){this.panStart({x:a.DOM.windowWidth()/2,y:a.DOM.windowHeight()/2});var g=(c.y-this.panStartingPoint.y)/this.transformSettings.scale;
this.transformSettings.translateX=(this.transformSettings.startingTranslateX+(c.x-this.panStartingPoint.x)/this.transformSettings.scale)*-1;this.transformSettings.translateY=(this.transformSettings.startingTranslateY+g)*-1}this.setStartingScaleAndRotation(b,0);this.transformSettings.scale=this.transformSettings.startingScale;this.transformSettings.rotation=0;this.applyTransform()},applyTransform:function(){var c=this.transformSettings.rotation%360,f=e.parseInt(this.transformSettings.translateX,10),
g=e.parseInt(this.transformSettings.translateY,10),h="scale("+this.transformSettings.scale+") rotate("+c+"deg) translate("+f+"px, "+g+"px)";a.DOM.setStyle(this.transformEl,{webkitTransform:h,MozTransform:h,msTransform:h,transform:h});a.Events.fire(this,{target:this,type:b.ZoomPanRotate.EventTypes.onTransform,scale:this.transformSettings.scale,rotation:this.transformSettings.rotation,rotationDegs:c,translateX:f,translateY:g})}})})(window,window.klass,window.Code.Util);
(function(e,c){c.registerNamespace("Code.PhotoSwipe");var a=e.Code.PhotoSwipe;a.CssClasses={buildingBody:"ps-building",activeBody:"ps-active"};a.EventTypes={onBeforeShow:"PhotoSwipeOnBeforeShow",onShow:"PhotoSwipeOnShow",onBeforeHide:"PhotoSwipeOnBeforeHide",onHide:"PhotoSwipeOnHide",onDisplayImage:"PhotoSwipeOnDisplayImage",onResetPosition:"PhotoSwipeOnResetPosition",onSlideshowStart:"PhotoSwipeOnSlideshowStart",onSlideshowStop:"PhotoSwipeOnSlideshowStop",onTouch:"PhotoSwipeOnTouch",onBeforeCaptionAndToolbarShow:"PhotoSwipeOnBeforeCaptionAndToolbarShow",
onCaptionAndToolbarShow:"PhotoSwipeOnCaptionAndToolbarShow",onBeforeCaptionAndToolbarHide:"PhotoSwipeOnBeforeCaptionAndToolbarHide",onCaptionAndToolbarHide:"PhotoSwipeOnCaptionAndToolbarHide",onToolbarTap:"PhotoSwipeOnToolbarTap",onBeforeZoomPanRotateShow:"PhotoSwipeOnBeforeZoomPanRotateShow",onZoomPanRotateShow:"PhotoSwipeOnZoomPanRotateShow",onBeforeZoomPanRotateHide:"PhotoSwipeOnBeforeZoomPanRotateHide",onZoomPanRotateHide:"PhotoSwipeOnZoomPanRotateHide",onZoomPanRotateTransform:"PhotoSwipeOnZoomPanRotateTransform"};
a.instances=[];a.activeInstances=[];a.setActivateInstance=function(b){if(c.arrayIndexOf(b.settings.target,a.activeInstances,"target")>-1)throw"Code.PhotoSwipe.activateInstance: Unable to active instance as another instance is already active for this target";a.activeInstances.push({target:b.settings.target,instance:b})};a.unsetActivateInstance=function(b){b=c.arrayIndexOf(b,a.activeInstances,"instance");a.activeInstances.splice(b,1)};a.attach=function(b,d,e){var g,h;g=a.createInstance(b,d,e);d=0;for(e=
b.length;d<e;d++)if(h=b[d],!c.isNothing(h.nodeType)&&h.nodeType===1)h.__photoSwipeClickHandler=a.onTriggerElementClick.bind(g),c.Events.remove(h,"click",h.__photoSwipeClickHandler),c.Events.add(h,"click",h.__photoSwipeClickHandler);return g};if(e.jQuery)e.jQuery.fn.photoSwipe=function(b,c){return a.attach(this,b,c)};a.detatch=function(b){var d,e,g;d=0;for(e=b.originalImages.length;d<e;d++)g=b.originalImages[d],!c.isNothing(g.nodeType)&&g.nodeType===1&&(c.Events.remove(g,"click",g.__photoSwipeClickHandler),
delete g.__photoSwipeClickHandler);a.disposeInstance(b)};a.createInstance=function(b,d,e){var g;if(c.isNothing(b))throw"Code.PhotoSwipe.attach: No images passed.";if(!c.isLikeArray(b))throw"Code.PhotoSwipe.createInstance: Images must be an array of elements or image urls.";if(b.length<1)throw"Code.PhotoSwipe.createInstance: No images to passed.";d=c.coalesce(d,{});g=a.getInstance(e);if(c.isNothing(g))g=new a.PhotoSwipeClass(b,d,e),a.instances.push(g);else throw'Code.PhotoSwipe.createInstance: Instance with id "'+
e+' already exists."';return g};a.disposeInstance=function(b){var c=a.getInstanceIndex(b);if(c<0)throw"Code.PhotoSwipe.disposeInstance: Unable to find instance to dispose.";b.dispose();a.instances.splice(c,1)};a.onTriggerElementClick=function(a){a.preventDefault();this.show(a.currentTarget)};a.getInstance=function(b){var c,e,g;c=0;for(e=a.instances.length;c<e;c++)if(g=a.instances[c],g.id===b)return g;return null};a.getInstanceIndex=function(b){var c,e,g=-1;c=0;for(e=a.instances.length;c<e;c++)if(a.instances[c]===
b){g=c;break}return g}})(window,window.Code.Util);
(function(e,c,a,b,d,f,g,h,j){a.registerNamespace("Code.PhotoSwipe");var i=e.Code.PhotoSwipe;i.PhotoSwipeClass=c({id:null,settings:null,isBackEventSupported:null,backButtonClicked:null,currentIndex:null,originalImages:null,mouseWheelStartTime:null,windowDimensions:null,cache:null,documentOverlay:null,carousel:null,uiLayer:null,toolbar:null,zoomPanRotate:null,windowOrientationChangeHandler:null,windowScrollHandler:null,windowHashChangeHandler:null,keyDownHandler:null,windowOrientationEventName:null,
uiLayerTouchHandler:null,carouselSlideByEndHandler:null,carouselSlideshowStartHandler:null,carouselSlideshowStopHandler:null,toolbarTapHandler:null,toolbarBeforeShowHandler:null,toolbarShowHandler:null,toolbarBeforeHideHandler:null,toolbarHideHandler:null,mouseWheelHandler:null,zoomPanRotateTransformHandler:null,_isResettingPosition:null,_uiWebViewResetPositionTimeout:null,dispose:function(){var b;a.Events.remove(this,i.EventTypes.onBeforeShow);a.Events.remove(this,i.EventTypes.onShow);a.Events.remove(this,
i.EventTypes.onBeforeHide);a.Events.remove(this,i.EventTypes.onHide);a.Events.remove(this,i.EventTypes.onDisplayImage);a.Events.remove(this,i.EventTypes.onResetPosition);a.Events.remove(this,i.EventTypes.onSlideshowStart);a.Events.remove(this,i.EventTypes.onSlideshowStop);a.Events.remove(this,i.EventTypes.onTouch);a.Events.remove(this,i.EventTypes.onBeforeCaptionAndToolbarShow);a.Events.remove(this,i.EventTypes.onCaptionAndToolbarShow);a.Events.remove(this,i.EventTypes.onBeforeCaptionAndToolbarHide);
a.Events.remove(this,i.EventTypes.onCaptionAndToolbarHide);a.Events.remove(this,i.EventTypes.onZoomPanRotateTransform);this.removeEventHandlers();a.isNothing(this.documentOverlay)||this.documentOverlay.dispose();a.isNothing(this.carousel)||this.carousel.dispose();a.isNothing(this.uiLayer)||this.uiLayer.dispose();a.isNothing(this.toolbar)||this.toolbar.dispose();this.destroyZoomPanRotate();a.isNothing(this.cache)||this.cache.dispose();for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(c,
d,f){this.id=a.isNothing(f)?"PhotoSwipe"+(new Date).getTime().toString():f;this.originalImages=c;if(a.Browser.android&&!a.Browser.firefox&&e.navigator.userAgent.match(/Android (\d+.\d+)/).toString().replace(/^.*\,/,"")>=2.1)this.isBackEventSupported=!0;if(!this.isBackEventSupported)this.isBackEventSupported=a.objectHasProperty(e,"onhashchange");this.settings={fadeInSpeed:250,fadeOutSpeed:250,preventHide:!1,preventSlideshow:!1,zIndex:1E3,backButtonHideEnabled:!0,enableKeyboard:!0,enableMouseWheel:!0,
mouseWheelSpeed:350,autoStartSlideshow:!1,jQueryMobile:!a.isNothing(e.jQuery)&&!a.isNothing(e.jQuery.mobile),jQueryMobileDialogHash:"&ui-state=dialog",enableUIWebViewRepositionTimeout:!1,uiWebViewResetPositionDelay:500,target:e,preventDefaultTouchEvents:!0,loop:!0,slideSpeed:250,nextPreviousSlideSpeed:0,enableDrag:!0,swipeThreshold:50,swipeTimeThreshold:250,slideTimingFunction:"ease-out",slideshowDelay:3E3,doubleTapSpeed:250,margin:20,imageScaleMethod:"fit",captionAndToolbarHide:!1,captionAndToolbarFlipPosition:!1,
captionAndToolbarAutoHideDelay:5E3,captionAndToolbarOpacity:0.8,captionAndToolbarShowEmptyCaptions:!0,getToolbar:i.Toolbar.getToolbar,allowUserZoom:!0,allowRotationOnUserZoom:!1,maxUserZoom:5,minUserZoom:0.5,doubleTapZoomLevel:2.5,getImageSource:i.Cache.Functions.getImageSource,getImageCaption:i.Cache.Functions.getImageCaption,getImageMetaData:i.Cache.Functions.getImageMetaData,cacheMode:i.Cache.Mode.normal};a.extend(this.settings,d);this.settings.target!==e&&(d=a.DOM.getStyle(this.settings.target,
"position"),(d!=="relative"||d!=="absolute")&&a.DOM.setStyle(this.settings.target,"position","relative"));if(this.settings.target!==e)this.isBackEventSupported=!1,this.settings.backButtonHideEnabled=!1;else if(this.settings.preventHide)this.settings.backButtonHideEnabled=!1;this.cache=new b.CacheClass(c,this.settings)},show:function(b){var c,d;this.backButtonClicked=this._isResettingPosition=!1;if(a.isNumber(b))this.currentIndex=b;else{this.currentIndex=-1;c=0;for(d=this.originalImages.length;c<d;c++)if(this.originalImages[c]===
b){this.currentIndex=c;break}}if(this.currentIndex<0||this.currentIndex>this.originalImages.length-1)throw"Code.PhotoSwipe.PhotoSwipeClass.show: Starting index out of range";this.isAlreadyGettingPage=this.getWindowDimensions();i.setActivateInstance(this);this.windowDimensions=this.getWindowDimensions();this.settings.target===e?a.DOM.addClass(e.document.body,i.CssClasses.buildingBody):a.DOM.addClass(this.settings.target,i.CssClasses.buildingBody);this.createComponents();a.Events.fire(this,{type:i.EventTypes.onBeforeShow,
target:this});this.documentOverlay.fadeIn(this.settings.fadeInSpeed,this.onDocumentOverlayFadeIn.bind(this))},getWindowDimensions:function(){return{width:a.DOM.windowWidth(),height:a.DOM.windowHeight()}},createComponents:function(){this.documentOverlay=new d.DocumentOverlayClass(this.settings);this.carousel=new f.CarouselClass(this.cache,this.settings);this.uiLayer=new h.UILayerClass(this.settings);if(!this.settings.captionAndToolbarHide)this.toolbar=new g.ToolbarClass(this.cache,this.settings)},
resetPosition:function(){if(!this._isResettingPosition){var b=this.getWindowDimensions();if(a.isNothing(this.windowDimensions)||!(b.width===this.windowDimensions.width&&b.height===this.windowDimensions.height))this._isResettingPosition=!0,this.windowDimensions=b,this.destroyZoomPanRotate(),this.documentOverlay.resetPosition(),this.carousel.resetPosition(),a.isNothing(this.toolbar)||this.toolbar.resetPosition(),this.uiLayer.resetPosition(),this._isResettingPosition=!1,a.Events.fire(this,{type:i.EventTypes.onResetPosition,
target:this})}},addEventHandler:function(b,c){a.Events.add(this,b,c)},addEventHandlers:function(){if(a.isNothing(this.windowOrientationChangeHandler))this.windowOrientationChangeHandler=this.onWindowOrientationChange.bind(this),this.windowScrollHandler=this.onWindowScroll.bind(this),this.keyDownHandler=this.onKeyDown.bind(this),this.windowHashChangeHandler=this.onWindowHashChange.bind(this),this.uiLayerTouchHandler=this.onUILayerTouch.bind(this),this.carouselSlideByEndHandler=this.onCarouselSlideByEnd.bind(this),
this.carouselSlideshowStartHandler=this.onCarouselSlideshowStart.bind(this),this.carouselSlideshowStopHandler=this.onCarouselSlideshowStop.bind(this),this.toolbarTapHandler=this.onToolbarTap.bind(this),this.toolbarBeforeShowHandler=this.onToolbarBeforeShow.bind(this),this.toolbarShowHandler=this.onToolbarShow.bind(this),this.toolbarBeforeHideHandler=this.onToolbarBeforeHide.bind(this),this.toolbarHideHandler=this.onToolbarHide.bind(this),this.mouseWheelHandler=this.onMouseWheel.bind(this),this.zoomPanRotateTransformHandler=
this.onZoomPanRotateTransform.bind(this);a.Browser.android?this.orientationEventName="resize":a.Browser.iOS&&!a.Browser.safari?a.Events.add(e.document.body,"orientationchange",this.windowOrientationChangeHandler):this.orientationEventName=!a.isNothing(e.onorientationchange)?"orientationchange":"resize";a.isNothing(this.orientationEventName)||a.Events.add(e,this.orientationEventName,this.windowOrientationChangeHandler);this.settings.target===e&&a.Events.add(e,"scroll",this.windowScrollHandler);this.settings.enableKeyboard&&
a.Events.add(e.document,"keydown",this.keyDownHandler);if(this.isBackEventSupported&&this.settings.backButtonHideEnabled)this.windowHashChangeHandler=this.onWindowHashChange.bind(this),this.settings.jQueryMobile?e.location.hash=this.settings.jQueryMobileDialogHash:(this.currentHistoryHashValue="PhotoSwipe"+(new Date).getTime().toString(),e.location.hash=this.currentHistoryHashValue),a.Events.add(e,"hashchange",this.windowHashChangeHandler);this.settings.enableMouseWheel&&a.Events.add(e,"mousewheel",
this.mouseWheelHandler);a.Events.add(this.uiLayer,a.TouchElement.EventTypes.onTouch,this.uiLayerTouchHandler);a.Events.add(this.carousel,f.EventTypes.onSlideByEnd,this.carouselSlideByEndHandler);a.Events.add(this.carousel,f.EventTypes.onSlideshowStart,this.carouselSlideshowStartHandler);a.Events.add(this.carousel,f.EventTypes.onSlideshowStop,this.carouselSlideshowStopHandler);a.isNothing(this.toolbar)||(a.Events.add(this.toolbar,g.EventTypes.onTap,this.toolbarTapHandler),a.Events.add(this.toolbar,
g.EventTypes.onBeforeShow,this.toolbarBeforeShowHandler),a.Events.add(this.toolbar,g.EventTypes.onShow,this.toolbarShowHandler),a.Events.add(this.toolbar,g.EventTypes.onBeforeHide,this.toolbarBeforeHideHandler),a.Events.add(this.toolbar,g.EventTypes.onHide,this.toolbarHideHandler))},removeEventHandlers:function(){a.Browser.iOS&&!a.Browser.safari&&a.Events.remove(e.document.body,"orientationchange",this.windowOrientationChangeHandler);a.isNothing(this.orientationEventName)||a.Events.remove(e,this.orientationEventName,
this.windowOrientationChangeHandler);a.Events.remove(e,"scroll",this.windowScrollHandler);this.settings.enableKeyboard&&a.Events.remove(e.document,"keydown",this.keyDownHandler);this.isBackEventSupported&&this.settings.backButtonHideEnabled&&a.Events.remove(e,"hashchange",this.windowHashChangeHandler);this.settings.enableMouseWheel&&a.Events.remove(e,"mousewheel",this.mouseWheelHandler);a.isNothing(this.uiLayer)||a.Events.remove(this.uiLayer,a.TouchElement.EventTypes.onTouch,this.uiLayerTouchHandler);
a.isNothing(this.toolbar)||(a.Events.remove(this.carousel,f.EventTypes.onSlideByEnd,this.carouselSlideByEndHandler),a.Events.remove(this.carousel,f.EventTypes.onSlideshowStart,this.carouselSlideshowStartHandler),a.Events.remove(this.carousel,f.EventTypes.onSlideshowStop,this.carouselSlideshowStopHandler));a.isNothing(this.toolbar)||(a.Events.remove(this.toolbar,g.EventTypes.onTap,this.toolbarTapHandler),a.Events.remove(this.toolbar,g.EventTypes.onBeforeShow,this.toolbarBeforeShowHandler),a.Events.remove(this.toolbar,
g.EventTypes.onShow,this.toolbarShowHandler),a.Events.remove(this.toolbar,g.EventTypes.onBeforeHide,this.toolbarBeforeHideHandler),a.Events.remove(this.toolbar,g.EventTypes.onHide,this.toolbarHideHandler))},hide:function(){if(!this.settings.preventHide){if(a.isNothing(this.documentOverlay))throw"Code.PhotoSwipe.PhotoSwipeClass.hide: PhotoSwipe instance is already hidden";if(a.isNothing(this.hiding)){this.clearUIWebViewResetPositionTimeout();this.destroyZoomPanRotate();this.removeEventHandlers();a.Events.fire(this,
{type:i.EventTypes.onBeforeHide,target:this});this.uiLayer.dispose();this.uiLayer=null;if(!a.isNothing(this.toolbar))this.toolbar.dispose(),this.toolbar=null;this.carousel.dispose();this.carousel=null;a.DOM.removeClass(e.document.body,i.CssClasses.activeBody);this.documentOverlay.dispose();this.documentOverlay=null;this._isResettingPosition=!1;i.unsetActivateInstance(this);a.Events.fire(this,{type:i.EventTypes.onHide,target:this});this.goBackInHistory()}}},goBackInHistory:function(){this.isBackEventSupported&&
this.settings.backButtonHideEnabled&&(this.backButtonClicked||e.history.back())},play:function(){!this.isZoomActive()&&!this.settings.preventSlideshow&&!a.isNothing(this.carousel)&&(!a.isNothing(this.toolbar)&&this.toolbar.isVisible&&this.toolbar.fadeOut(),this.carousel.startSlideshow())},stop:function(){this.isZoomActive()||a.isNothing(this.carousel)||this.carousel.stopSlideshow()},previous:function(){this.isZoomActive()||a.isNothing(this.carousel)||this.carousel.previous()},next:function(){this.isZoomActive()||
a.isNothing(this.carousel)||this.carousel.next()},toggleToolbar:function(){this.isZoomActive()||a.isNothing(this.toolbar)||this.toolbar.toggleVisibility(this.currentIndex)},fadeOutToolbarIfVisible:function(){!a.isNothing(this.toolbar)&&this.toolbar.isVisible&&this.settings.captionAndToolbarAutoHideDelay>0&&this.toolbar.fadeOut()},createZoomPanRotate:function(){this.stop();if(this.canUserZoom()&&!this.isZoomActive())a.Events.fire(this,i.EventTypes.onBeforeZoomPanRotateShow),this.zoomPanRotate=new j.ZoomPanRotateClass(this.settings,
this.cache.images[this.currentIndex],this.uiLayer),this.uiLayer.captureSettings.preventDefaultTouchEvents=!0,a.Events.add(this.zoomPanRotate,i.ZoomPanRotate.EventTypes.onTransform,this.zoomPanRotateTransformHandler),a.Events.fire(this,i.EventTypes.onZoomPanRotateShow),!a.isNothing(this.toolbar)&&this.toolbar.isVisible&&this.toolbar.fadeOut()},destroyZoomPanRotate:function(){if(!a.isNothing(this.zoomPanRotate))a.Events.fire(this,i.EventTypes.onBeforeZoomPanRotateHide),a.Events.remove(this.zoomPanRotate,
i.ZoomPanRotate.EventTypes.onTransform,this.zoomPanRotateTransformHandler),this.zoomPanRotate.dispose(),this.zoomPanRotate=null,this.uiLayer.captureSettings.preventDefaultTouchEvents=this.settings.preventDefaultTouchEvents,a.Events.fire(this,i.EventTypes.onZoomPanRotateHide)},canUserZoom:function(){var b;if(a.Browser.msie){if(b=document.createElement("div"),a.isNothing(b.style.msTransform))return!1}else if(!a.Browser.isCSSTransformSupported)return!1;if(!this.settings.allowUserZoom)return!1;if(this.carousel.isSliding)return!1;
b=this.cache.images[this.currentIndex];if(a.isNothing(b))return!1;if(b.isLoading)return!1;return!0},isZoomActive:function(){return!a.isNothing(this.zoomPanRotate)},getCurrentImage:function(){return this.cache.images[this.currentIndex]},onDocumentOverlayFadeIn:function(){e.setTimeout(function(){var b=this.settings.target===e?e.document.body:this.settings.target;a.DOM.removeClass(b,i.CssClasses.buildingBody);a.DOM.addClass(b,i.CssClasses.activeBody);this.addEventHandlers();this.carousel.show(this.currentIndex);
this.uiLayer.show();this.settings.autoStartSlideshow?this.play():a.isNothing(this.toolbar)||this.toolbar.show(this.currentIndex);a.Events.fire(this,{type:i.EventTypes.onShow,target:this});this.setUIWebViewResetPositionTimeout()}.bind(this),250)},setUIWebViewResetPositionTimeout:function(){if(this.settings.enableUIWebViewRepositionTimeout&&a.Browser.iOS&&!a.Browser.safari)a.isNothing(this._uiWebViewResetPositionTimeout)||e.clearTimeout(this._uiWebViewResetPositionTimeout),this._uiWebViewResetPositionTimeout=
e.setTimeout(function(){this.resetPosition();this.setUIWebViewResetPositionTimeout()}.bind(this),this.settings.uiWebViewResetPositionDelay)},clearUIWebViewResetPositionTimeout:function(){a.isNothing(this._uiWebViewResetPositionTimeout)||e.clearTimeout(this._uiWebViewResetPositionTimeout)},onWindowScroll:function(){this.resetPosition()},onWindowOrientationChange:function(){this.resetPosition()},onWindowHashChange:function(){if(e.location.hash!=="#"+(this.settings.jQueryMobile?this.settings.jQueryMobileDialogHash:
this.currentHistoryHashValue))this.backButtonClicked=!0,this.hide()},onKeyDown:function(a){a.keyCode===37?(a.preventDefault(),this.previous()):a.keyCode===39?(a.preventDefault(),this.next()):a.keyCode===38||a.keyCode===40?a.preventDefault():a.keyCode===27?(a.preventDefault(),this.hide()):a.keyCode===32?(this.settings.hideToolbar?this.hide():this.toggleToolbar(),a.preventDefault()):a.keyCode===13&&(a.preventDefault(),this.play())},onUILayerTouch:function(b){if(this.isZoomActive())switch(b.action){case a.TouchElement.ActionTypes.gestureChange:this.zoomPanRotate.zoomRotate(b.scale,
this.settings.allowRotationOnUserZoom?b.rotation:0);break;case a.TouchElement.ActionTypes.gestureEnd:this.zoomPanRotate.setStartingScaleAndRotation(b.scale,this.settings.allowRotationOnUserZoom?b.rotation:0);break;case a.TouchElement.ActionTypes.touchStart:this.zoomPanRotate.panStart(b.point);break;case a.TouchElement.ActionTypes.touchMove:this.zoomPanRotate.pan(b.point);break;case a.TouchElement.ActionTypes.doubleTap:this.destroyZoomPanRotate();this.toggleToolbar();break;case a.TouchElement.ActionTypes.swipeLeft:this.destroyZoomPanRotate();
this.next();this.toggleToolbar();break;case a.TouchElement.ActionTypes.swipeRight:this.destroyZoomPanRotate(),this.previous(),this.toggleToolbar()}else switch(b.action){case a.TouchElement.ActionTypes.touchMove:case a.TouchElement.ActionTypes.swipeLeft:case a.TouchElement.ActionTypes.swipeRight:this.fadeOutToolbarIfVisible();this.carousel.onTouch(b.action,b.point);break;case a.TouchElement.ActionTypes.touchStart:case a.TouchElement.ActionTypes.touchMoveEnd:this.carousel.onTouch(b.action,b.point);
break;case a.TouchElement.ActionTypes.tap:this.toggleToolbar();break;case a.TouchElement.ActionTypes.doubleTap:this.settings.target===e&&(b.point.x-=a.DOM.windowScrollLeft(),b.point.y-=a.DOM.windowScrollTop());var c=this.cache.images[this.currentIndex].imageEl,d=e.parseInt(a.DOM.getStyle(c,"top"),10),f=e.parseInt(a.DOM.getStyle(c,"left"),10),g=f+a.DOM.width(c),c=d+a.DOM.height(c);if(b.point.x<f)b.point.x=f;else if(b.point.x>g)b.point.x=g;if(b.point.y<d)b.point.y=d;else if(b.point.y>c)b.point.y=c;
this.createZoomPanRotate();this.isZoomActive()&&this.zoomPanRotate.zoomAndPanToPoint(this.settings.doubleTapZoomLevel,b.point);break;case a.TouchElement.ActionTypes.gestureStart:this.createZoomPanRotate()}a.Events.fire(this,{type:i.EventTypes.onTouch,target:this,point:b.point,action:b.action})},onCarouselSlideByEnd:function(b){this.currentIndex=b.cacheIndex;a.isNothing(this.toolbar)||(this.toolbar.setCaption(this.currentIndex),this.toolbar.setToolbarStatus(this.currentIndex));a.Events.fire(this,{type:i.EventTypes.onDisplayImage,
target:this,action:b.action,index:b.cacheIndex})},onToolbarTap:function(b){switch(b.action){case g.ToolbarAction.next:this.next();break;case g.ToolbarAction.previous:this.previous();break;case g.ToolbarAction.close:this.hide();break;case g.ToolbarAction.play:this.play()}a.Events.fire(this,{type:i.EventTypes.onToolbarTap,target:this,toolbarAction:b.action,tapTarget:b.tapTarget})},onMouseWheel:function(b){var c=a.Events.getWheelDelta(b);if(!(b.timeStamp-(this.mouseWheelStartTime||0)<this.settings.mouseWheelSpeed))this.mouseWheelStartTime=
b.timeStamp,this.settings.invertMouseWheel&&(c*=-1),c<0?this.next():c>0&&this.previous()},onCarouselSlideshowStart:function(){a.Events.fire(this,{type:i.EventTypes.onSlideshowStart,target:this})},onCarouselSlideshowStop:function(){a.Events.fire(this,{type:i.EventTypes.onSlideshowStop,target:this})},onToolbarBeforeShow:function(){a.Events.fire(this,{type:i.EventTypes.onBeforeCaptionAndToolbarShow,target:this})},onToolbarShow:function(){a.Events.fire(this,{type:i.EventTypes.onCaptionAndToolbarShow,
target:this})},onToolbarBeforeHide:function(){a.Events.fire(this,{type:i.EventTypes.onBeforeCaptionAndToolbarHide,target:this})},onToolbarHide:function(){a.Events.fire(this,{type:i.EventTypes.onCaptionAndToolbarHide,target:this})},onZoomPanRotateTransform:function(b){a.Events.fire(this,{target:this,type:i.EventTypes.onZoomPanRotateTransform,scale:b.scale,rotation:b.rotation,rotationDegs:b.rotationDegs,translateX:b.translateX,translateY:b.translateY})}})})(window,window.klass,window.Code.Util,window.Code.PhotoSwipe.Cache,
window.Code.PhotoSwipe.DocumentOverlay,window.Code.PhotoSwipe.Carousel,window.Code.PhotoSwipe.Toolbar,window.Code.PhotoSwipe.UILayer,window.Code.PhotoSwipe.ZoomPanRotate);
// PhotoSwipe - http://www.photoswipe.com/
// Copyright (c) 2012 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.5
(function(e){if(!Function.prototype.bind)Function.prototype.bind=function(d){var a=[].slice,b=a.call(arguments,1),c=this,g=function(){},f=function(){return c.apply(this instanceof g?this:d||{},b.concat(a.call(arguments)))};g.prototype=c.prototype;f.prototype=new g;return f};if(typeof e.Code==="undefined")e.Code={};e.Code.Util={registerNamespace:function(){var d=arguments,a=null,b,c,g,f,i;b=0;for(f=d.length;b<f;b++){g=d[b];g=g.split(".");a=g[0];typeof e[a]==="undefined"&&(e[a]={});a=e[a];c=1;for(i=
g.length;c<i;++c)a[g[c]]=a[g[c]]||{},a=a[g[c]]}},coalesce:function(){var d,a;d=0;for(a=arguments.length;d<a;d++)if(!this.isNothing(arguments[d]))return arguments[d];return null},extend:function(d,a,b){var c;this.isNothing(b)&&(b=!0);if(d&&a&&this.isObject(a))for(c in a)this.objectHasProperty(a,c)&&(b?d[c]=a[c]:typeof d[c]==="undefined"&&(d[c]=a[c]))},clone:function(d){var a={};this.extend(a,d);return a},isObject:function(d){return d instanceof Object},isFunction:function(d){return{}.toString.call(d)===
"[object Function]"},isArray:function(d){return d instanceof Array},isLikeArray:function(d){return typeof d.length==="number"},isNumber:function(d){return typeof d==="number"},isString:function(d){return typeof d==="string"},isNothing:function(d){if(typeof d==="undefined"||d===null)return!0;return!1},swapArrayElements:function(d,a,b){var c=d[a];d[a]=d[b];d[b]=c},trim:function(d){return d.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},toCamelCase:function(d){return d.replace(/(\-[a-z])/g,function(a){return a.toUpperCase().replace("-",
"")})},toDashedCase:function(d){return d.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})},arrayIndexOf:function(d,a,b){var c,g,f,e;f=-1;c=0;for(g=a.length;c<g;c++)if(e=a[c],this.isNothing(b)){if(e===d){f=c;break}}else if(this.objectHasProperty(e,b)&&e[b]===d){f=c;break}return f},objectHasProperty:function(d,a){return d.hasOwnProperty?d.hasOwnProperty(a):"undefined"!==typeof d[a]}}})(window);
(function(e,d){d.Browser={ua:null,version:null,safari:null,webkit:null,opera:null,msie:null,chrome:null,mozilla:null,android:null,blackberry:null,iPad:null,iPhone:null,iPod:null,iOS:null,is3dSupported:null,isCSSTransformSupported:null,isTouchSupported:null,isGestureSupported:null,_detect:function(){this.ua=e.navigator.userAgent;this.version=this.ua.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[];this.safari=/Safari/gi.test(e.navigator.appVersion);this.webkit=/webkit/i.test(this.ua);this.opera=/opera/i.test(this.ua);
this.msie=/msie/i.test(this.ua)&&!this.opera;this.chrome=/Chrome/i.test(this.ua);this.firefox=/Firefox/i.test(this.ua);this.fennec=/Fennec/i.test(this.ua);this.mozilla=/mozilla/i.test(this.ua)&&!/(compatible|webkit)/.test(this.ua);this.android=/android/i.test(this.ua);this.blackberry=/blackberry/i.test(this.ua);this.iOS=/iphone|ipod|ipad/gi.test(e.navigator.platform);this.iPad=/ipad/gi.test(e.navigator.platform);this.iPhone=/iphone/gi.test(e.navigator.platform);this.iPod=/ipod/gi.test(e.navigator.platform);
var a=document.createElement("div");this.is3dSupported=!d.isNothing(a.style.WebkitPerspective);this.isCSSTransformSupported=!d.isNothing(a.style.WebkitTransform)||!d.isNothing(a.style.MozTransform)||!d.isNothing(a.style.transformProperty);this.isTouchSupported=this.isEventSupported("touchstart");this.isGestureSupported=this.isEventSupported("gesturestart")},_eventTagNames:{select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},isEventSupported:function(a){var b=
document.createElement(this._eventTagNames[a]||"div"),c,a="on"+a;c=d.objectHasProperty(b,a);c||(b.setAttribute(a,"return;"),c=typeof b[a]==="function");return c},isLandscape:function(){return d.DOM.windowWidth()>d.DOM.windowHeight()}};d.Browser._detect()})(window,window.Code.Util);
(function(e,d,a){a.extend(a,{Events:{add:function(a,c,g){d(a).bind(c,g)},remove:function(a,c,g){d(a).unbind(c,g)},fire:function(a,c){var g,f=Array.prototype.slice.call(arguments).splice(2);g=typeof c==="string"?{type:c}:c;d(a).trigger(d.Event(g.type,g),f)},getMousePosition:function(a){return{x:a.pageX,y:a.pageY}},getTouchEvent:function(a){return a.originalEvent},getWheelDelta:function(b){var c=0;a.isNothing(b.wheelDelta)?a.isNothing(b.detail)||(c=-b.detail/3):c=b.wheelDelta/120;return c},domReady:function(a){d(document).ready(a)}}})})(window,
window.jQuery,window.Code.Util);
(function(e,d,a){a.extend(a,{DOM:{setData:function(b,c,g){if(a.isLikeArray(b)){var f,d;f=0;for(d=b.length;f<d;f++)a.DOM._setData(b[f],c,g)}else a.DOM._setData(b,c,g)},_setData:function(b,c,g){a.DOM.setAttribute(b,"data-"+c,g)},getData:function(b,c,g){return a.DOM.getAttribute(b,"data-"+c,g)},removeData:function(b,c){if(a.isLikeArray(b)){var g,f;g=0;for(f=b.length;g<f;g++)a.DOM._removeData(b[g],c)}else a.DOM._removeData(b,c)},_removeData:function(b,c){a.DOM.removeAttribute(b,"data-"+c)},isChildOf:function(a,
c){if(c===a)return!1;for(;a&&a!==c;)a=a.parentNode;return a===c},find:function(b,c){if(a.isNothing(c))c=e.document;var g=d(b,c),f=[],i,j;i=0;for(j=g.length;i<j;i++)f.push(g[i]);return f},createElement:function(a,c,g){a=d("<"+a+"></"+a+">");a.attr(c);a.append(g);return a[0]},appendChild:function(a,c){d(c).append(a)},insertBefore:function(a,c){d(a).insertBefore(c)},appendText:function(a,c){d(c).text(a)},appendToBody:function(a){d("body").append(a)},removeChild:function(a){d(a).empty().remove()},removeChildren:function(a){d(a).empty()},
hasAttribute:function(b,c){return!a.isNothing(d(b).attr(c))},getAttribute:function(b,c,g){b=d(b).attr(c);a.isNothing(b)&&!a.isNothing(g)&&(b=g);return b},setAttribute:function(b,c,g){if(a.isLikeArray(b)){var f,d;f=0;for(d=b.length;f<d;f++)a.DOM._setAttribute(b[f],c,g)}else a.DOM._setAttribute(b,c,g)},_setAttribute:function(a,c,g){d(a).attr(c,g)},removeAttribute:function(b,c){if(a.isLikeArray(b)){var g,f;g=0;for(f=b.length;g<f;g++)a.DOM._removeAttribute(b[g],c)}else a.DOM._removeAttribute(b,c)},_removeAttribute:function(a,
c){d(a).removeAttr(c)},addClass:function(b,c){if(a.isLikeArray(b)){var g,f;g=0;for(f=b.length;g<f;g++)a.DOM._addClass(b[g],c)}else a.DOM._addClass(b,c)},_addClass:function(a,c){d(a).addClass(c)},removeClass:function(b,c){if(a.isLikeArray(b)){var g,f;g=0;for(f=b.length;g<f;g++)a.DOM._removeClass(b[g],c)}else a.DOM._removeClass(b,c)},_removeClass:function(a,c){d(a).removeClass(c)},hasClass:function(a,c){d(a).hasClass(c)},setStyle:function(b,c,g){if(a.isLikeArray(b)){var f,d;f=0;for(d=b.length;f<d;f++)a.DOM._setStyle(b[f],
c,g)}else a.DOM._setStyle(b,c,g)},_setStyle:function(b,c,g){var f;if(a.isObject(c))for(f in c)a.objectHasProperty(c,f)&&(f==="width"?a.DOM.width(b,c[f]):f==="height"?a.DOM.height(b,c[f]):d(b).css(f,c[f]));else d(b).css(c,g)},getStyle:function(a,c){return d(a).css(c)},hide:function(b){if(a.isLikeArray(b)){var c,g;c=0;for(g=b.length;c<g;c++)a.DOM._hide(b[c])}else a.DOM._hide(b)},_hide:function(a){d(a).hide()},show:function(b){if(a.isLikeArray(b)){var c,g;c=0;for(g=b.length;c<g;c++)a.DOM._show(b[c])}else a.DOM._show(b)},
_show:function(a){d(a).show()},width:function(b,c){a.isNothing(c)||d(b).width(c);return d(b).width()},outerWidth:function(a){return d(a).outerWidth()},height:function(b,c){a.isNothing(c)||d(b).height(c);return d(b).height()},outerHeight:function(a){return d(a).outerHeight()},documentWidth:function(){return d(document.documentElement).width()},documentHeight:function(){return d(document.documentElement).height()},documentOuterWidth:function(){return a.DOM.width(document.documentElement)},documentOuterHeight:function(){return a.DOM.outerHeight(document.documentElement)},
bodyWidth:function(){return d(document.body).width()},bodyHeight:function(){return d(document.body).height()},bodyOuterWidth:function(){return a.DOM.outerWidth(document.body)},bodyOuterHeight:function(){return a.DOM.outerHeight(document.body)},windowWidth:function(){if(!e.innerWidth)return d(e).width();return e.innerWidth},windowHeight:function(){if(!e.innerHeight)return d(e).height();return e.innerHeight},windowScrollLeft:function(){if(!e.pageXOffset)return d(e).scrollLeft();return e.pageXOffset},
windowScrollTop:function(){if(!e.pageYOffset)return d(e).scrollTop();return e.pageYOffset}}})})(window,window.jQuery,window.Code.Util);
(function(e,d){d.extend(d,{Animation:{_applyTransitionDelay:50,_transitionEndLabel:e.document.documentElement.style.webkitTransition!==void 0?"webkitTransitionEnd":"transitionend",_transitionEndHandler:null,_transitionPrefix:e.document.documentElement.style.webkitTransition!==void 0?"webkitTransition":e.document.documentElement.style.MozTransition!==void 0?"MozTransition":"transition",_transformLabel:e.document.documentElement.style.webkitTransform!==void 0?"webkitTransform":e.document.documentElement.style.MozTransition!==
void 0?"MozTransform":"transform",_getTransitionEndHandler:function(){if(d.isNothing(this._transitionEndHandler))this._transitionEndHandler=this._onTransitionEnd.bind(this);return this._transitionEndHandler},stop:function(a){if(d.Browser.isCSSTransformSupported){var b={};d.Events.remove(a,this._transitionEndLabel,this._getTransitionEndHandler());d.isNothing(a.callbackLabel)&&delete a.callbackLabel;b[this._transitionPrefix+"Property"]="";b[this._transitionPrefix+"Duration"]="";b[this._transitionPrefix+
"TimingFunction"]="";b[this._transitionPrefix+"Delay"]="";b[this._transformLabel]="";d.DOM.setStyle(a,b)}else d.isNothing(e.jQuery)||e.jQuery(a).stop(!0,!0)},fadeIn:function(a,b,c,g,f){f=d.coalesce(f,1);f<=0&&(f=1);if(b<=0&&(d.DOM.setStyle(a,"opacity",f),!d.isNothing(c))){c(a);return}d.DOM.getStyle(a,"opacity")>=1&&d.DOM.setStyle(a,"opacity",0);d.Browser.isCSSTransformSupported?this._applyTransition(a,"opacity",f,b,c,g):d.isNothing(e.jQuery)||e.jQuery(a).fadeTo(b,f,c)},fadeTo:function(a,b,c,g,f){this.fadeIn(a,
c,g,f,b)},fadeOut:function(a,b,c,g){if(b<=0&&(d.DOM.setStyle(a,"opacity",0),!d.isNothing(c))){c(a);return}d.Browser.isCSSTransformSupported?this._applyTransition(a,"opacity",0,b,c,g):e.jQuery(a).fadeTo(b,0,c)},slideBy:function(a,b,c,g,f,i){var j={},b=d.coalesce(b,0),c=d.coalesce(c,0),i=d.coalesce(i,"ease-out");j[this._transitionPrefix+"Property"]="all";j[this._transitionPrefix+"Delay"]="0";g===0?(j[this._transitionPrefix+"Duration"]="",j[this._transitionPrefix+"TimingFunction"]=""):(j[this._transitionPrefix+
"Duration"]=g+"ms",j[this._transitionPrefix+"TimingFunction"]=d.coalesce(i,"ease-out"),d.Events.add(a,this._transitionEndLabel,this._getTransitionEndHandler()));j[this._transformLabel]=d.Browser.is3dSupported?"translate3d("+b+"px, "+c+"px, 0px)":"translate("+b+"px, "+c+"px)";if(!d.isNothing(f))a.cclallcallback=f;d.DOM.setStyle(a,j);g===0&&e.setTimeout(function(){this._leaveTransforms(a)}.bind(this),this._applyTransitionDelay)},resetTranslate:function(a){var b={};b[this._transformLabel]=b[this._transformLabel]=
d.Browser.is3dSupported?"translate3d(0px, 0px, 0px)":"translate(0px, 0px)";d.DOM.setStyle(a,b)},_applyTransition:function(a,b,c,g,f,i){var j={},i=d.coalesce(i,"ease-in");j[this._transitionPrefix+"Property"]=b;j[this._transitionPrefix+"Duration"]=g+"ms";j[this._transitionPrefix+"TimingFunction"]=i;j[this._transitionPrefix+"Delay"]="0";d.Events.add(a,this._transitionEndLabel,this._getTransitionEndHandler());d.DOM.setStyle(a,j);d.isNothing(f)||(a["ccl"+b+"callback"]=f);e.setTimeout(function(){d.DOM.setStyle(a,
b,c)},this._applyTransitionDelay)},_onTransitionEnd:function(a){d.Events.remove(a.currentTarget,this._transitionEndLabel,this._getTransitionEndHandler());this._leaveTransforms(a.currentTarget)},_leaveTransforms:function(a){var b=a.style[this._transitionPrefix+"Property"],c=b!==""?"ccl"+b+"callback":"cclallcallback",g,b=d.coalesce(a.style.webkitTransform,a.style.MozTransform,a.style.transform),f,i=e.parseInt(d.DOM.getStyle(a,"left"),0),j=e.parseInt(d.DOM.getStyle(a,"top"),0),h,l,k={};b!==""&&(b=d.Browser.is3dSupported?
b.match(/translate3d\((.*?)\)/):b.match(/translate\((.*?)\)/),d.isNothing(b)||(f=b[1].split(", "),h=e.parseInt(f[0],0),l=e.parseInt(f[1],0)));k[this._transitionPrefix+"Property"]="";k[this._transitionPrefix+"Duration"]="";k[this._transitionPrefix+"TimingFunction"]="";k[this._transitionPrefix+"Delay"]="";d.DOM.setStyle(a,k);e.setTimeout(function(){if(!d.isNothing(f))k={},k[this._transformLabel]="",k.left=i+h+"px",k.top=j+l+"px",d.DOM.setStyle(a,k);d.isNothing(a[c])||(g=a[c],delete a[c],g(a))}.bind(this),
this._applyTransitionDelay)}}})})(window,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.Util.TouchElement");a.TouchElement.EventTypes={onTouch:"CodeUtilTouchElementOnTouch"};a.TouchElement.ActionTypes={touchStart:"touchStart",touchMove:"touchMove",touchEnd:"touchEnd",touchMoveEnd:"touchMoveEnd",tap:"tap",doubleTap:"doubleTap",swipeLeft:"swipeLeft",swipeRight:"swipeRight",swipeUp:"swipeUp",swipeDown:"swipeDown",gestureStart:"gestureStart",gestureChange:"gestureChange",gestureEnd:"gestureEnd"}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.Util.TouchElement");a.TouchElement.TouchElementClass=d({el:null,captureSettings:null,touchStartPoint:null,touchEndPoint:null,touchStartTime:null,doubleTapTimeout:null,touchStartHandler:null,touchMoveHandler:null,touchEndHandler:null,mouseDownHandler:null,mouseMoveHandler:null,mouseUpHandler:null,mouseOutHandler:null,gestureStartHandler:null,gestureChangeHandler:null,gestureEndHandler:null,swipeThreshold:null,swipeTimeThreshold:null,doubleTapSpeed:null,dispose:function(){var b;
this.removeEventHandlers();for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(b,c){this.el=b;this.captureSettings={swipe:!1,move:!1,gesture:!1,doubleTap:!1,preventDefaultTouchEvents:!0};a.extend(this.captureSettings,c);this.swipeThreshold=50;this.doubleTapSpeed=this.swipeTimeThreshold=250;this.touchStartPoint={x:0,y:0};this.touchEndPoint={x:0,y:0}},addEventHandlers:function(){if(a.isNothing(this.touchStartHandler))this.touchStartHandler=this.onTouchStart.bind(this),this.touchMoveHandler=
this.onTouchMove.bind(this),this.touchEndHandler=this.onTouchEnd.bind(this),this.mouseDownHandler=this.onMouseDown.bind(this),this.mouseMoveHandler=this.onMouseMove.bind(this),this.mouseUpHandler=this.onMouseUp.bind(this),this.mouseOutHandler=this.onMouseOut.bind(this),this.gestureStartHandler=this.onGestureStart.bind(this),this.gestureChangeHandler=this.onGestureChange.bind(this),this.gestureEndHandler=this.onGestureEnd.bind(this);a.Events.add(this.el,"touchstart",this.touchStartHandler);this.captureSettings.move&&
a.Events.add(this.el,"touchmove",this.touchMoveHandler);a.Events.add(this.el,"touchend",this.touchEndHandler);a.Events.add(this.el,"mousedown",this.mouseDownHandler);a.Browser.isGestureSupported&&this.captureSettings.gesture&&(a.Events.add(this.el,"gesturestart",this.gestureStartHandler),a.Events.add(this.el,"gesturechange",this.gestureChangeHandler),a.Events.add(this.el,"gestureend",this.gestureEndHandler))},removeEventHandlers:function(){a.Events.remove(this.el,"touchstart",this.touchStartHandler);
this.captureSettings.move&&a.Events.remove(this.el,"touchmove",this.touchMoveHandler);a.Events.remove(this.el,"touchend",this.touchEndHandler);a.Events.remove(this.el,"mousedown",this.mouseDownHandler);a.Browser.isGestureSupported&&this.captureSettings.gesture&&(a.Events.remove(this.el,"gesturestart",this.gestureStartHandler),a.Events.remove(this.el,"gesturechange",this.gestureChangeHandler),a.Events.remove(this.el,"gestureend",this.gestureEndHandler))},getTouchPoint:function(a){return{x:a[0].pageX,
y:a[0].pageY}},fireTouchEvent:function(b){var c=0,g=0,f=0,d,c=this.touchEndPoint.x-this.touchStartPoint.x,g=this.touchEndPoint.y-this.touchStartPoint.y,f=Math.sqrt(c*c+g*g);if(this.captureSettings.swipe&&(d=new Date,d-=this.touchStartTime,d<=this.swipeTimeThreshold)){if(e.Math.abs(c)>=this.swipeThreshold){a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:c<0?a.TouchElement.ActionTypes.swipeLeft:a.TouchElement.ActionTypes.swipeRight,targetEl:b.target,
currentTargetEl:b.currentTarget});return}if(e.Math.abs(g)>=this.swipeThreshold){a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:g<0?a.TouchElement.ActionTypes.swipeUp:a.TouchElement.ActionTypes.swipeDown,targetEl:b.target,currentTargetEl:b.currentTarget});return}}f>1?a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchMoveEnd,point:this.touchEndPoint,targetEl:b.target,currentTargetEl:b.currentTarget}):
this.captureSettings.doubleTap?a.isNothing(this.doubleTapTimeout)?this.doubleTapTimeout=e.setTimeout(function(){this.doubleTapTimeout=null;a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:a.TouchElement.ActionTypes.tap,targetEl:b.target,currentTargetEl:b.currentTarget})}.bind(this),this.doubleTapSpeed):(e.clearTimeout(this.doubleTapTimeout),this.doubleTapTimeout=null,a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,
action:a.TouchElement.ActionTypes.doubleTap,targetEl:b.target,currentTargetEl:b.currentTarget})):a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:a.TouchElement.ActionTypes.tap,targetEl:b.target,currentTargetEl:b.currentTarget})},onTouchStart:function(b){this.captureSettings.preventDefaultTouchEvents&&b.preventDefault();a.Events.remove(this.el,"mousedown",this.mouseDownHandler);var c=a.Events.getTouchEvent(b).touches;c.length>1&&this.captureSettings.gesture?
this.isGesture=!0:(this.touchStartTime=new Date,this.isGesture=!1,this.touchStartPoint=this.getTouchPoint(c),a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchStart,point:this.touchStartPoint,targetEl:b.target,currentTargetEl:b.currentTarget}))},onTouchMove:function(b){this.captureSettings.preventDefaultTouchEvents&&b.preventDefault();if(!this.isGesture||!this.captureSettings.gesture){var c=a.Events.getTouchEvent(b).touches;a.Events.fire(this,
{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchMove,point:this.getTouchPoint(c),targetEl:b.target,currentTargetEl:b.currentTarget})}},onTouchEnd:function(b){if(!this.isGesture||!this.captureSettings.gesture){this.captureSettings.preventDefaultTouchEvents&&b.preventDefault();var c=a.Events.getTouchEvent(b);this.touchEndPoint=this.getTouchPoint(!a.isNothing(c.changedTouches)?c.changedTouches:c.touches);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,
target:this,action:a.TouchElement.ActionTypes.touchEnd,point:this.touchEndPoint,targetEl:b.target,currentTargetEl:b.currentTarget});this.fireTouchEvent(b)}},onMouseDown:function(b){b.preventDefault();a.Events.remove(this.el,"touchstart",this.mouseDownHandler);a.Events.remove(this.el,"touchmove",this.touchMoveHandler);a.Events.remove(this.el,"touchend",this.touchEndHandler);this.captureSettings.move&&a.Events.add(this.el,"mousemove",this.mouseMoveHandler);a.Events.add(this.el,"mouseup",this.mouseUpHandler);
a.Events.add(this.el,"mouseout",this.mouseOutHandler);this.touchStartTime=new Date;this.isGesture=!1;this.touchStartPoint=a.Events.getMousePosition(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchStart,point:this.touchStartPoint,targetEl:b.target,currentTargetEl:b.currentTarget})},onMouseMove:function(b){b.preventDefault();a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchMove,
point:a.Events.getMousePosition(b),targetEl:b.target,currentTargetEl:b.currentTarget})},onMouseUp:function(b){b.preventDefault();this.captureSettings.move&&a.Events.remove(this.el,"mousemove",this.mouseMoveHandler);a.Events.remove(this.el,"mouseup",this.mouseUpHandler);a.Events.remove(this.el,"mouseout",this.mouseOutHandler);this.touchEndPoint=a.Events.getMousePosition(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchEnd,point:this.touchEndPoint,
targetEl:b.target,currentTargetEl:b.currentTarget});this.fireTouchEvent(b)},onMouseOut:function(b){var c=b.relatedTarget;if(!(this.el===c||a.DOM.isChildOf(c,this.el)))b.preventDefault(),this.captureSettings.move&&a.Events.remove(this.el,"mousemove",this.mouseMoveHandler),a.Events.remove(this.el,"mouseup",this.mouseUpHandler),a.Events.remove(this.el,"mouseout",this.mouseOutHandler),this.touchEndPoint=a.Events.getMousePosition(b),a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,
action:a.TouchElement.ActionTypes.touchEnd,point:this.touchEndPoint,targetEl:b.target,currentTargetEl:b.currentTarget}),this.fireTouchEvent(b)},onGestureStart:function(b){b.preventDefault();var c=a.Events.getTouchEvent(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.gestureStart,scale:c.scale,rotation:c.rotation,targetEl:b.target,currentTargetEl:b.currentTarget})},onGestureChange:function(b){b.preventDefault();var c=a.Events.getTouchEvent(b);
a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.gestureChange,scale:c.scale,rotation:c.rotation,targetEl:b.target,currentTargetEl:b.currentTarget})},onGestureEnd:function(b){b.preventDefault();var c=a.Events.getTouchEvent(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.gestureEnd,scale:c.scale,rotation:c.rotation,targetEl:b.target,currentTargetEl:b.currentTarget})}})})(window,window.klass,
window.Code.Util);(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Image");e.Code.PhotoSwipe.Image.EventTypes={onLoad:"onLoad",onError:"onError"}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Image");var b=e.Code.PhotoSwipe;b.Image.ImageClass=d({refObj:null,imageEl:null,src:null,caption:null,metaData:null,imageLoadHandler:null,imageErrorHandler:null,dispose:function(){var c;this.shrinkImage();for(c in this)a.objectHasProperty(this,c)&&(this[c]=null)},initialize:function(a,b,f,d){this.refObj=a;this.src=this.originalSrc=b;this.caption=f;this.metaData=d;this.imageEl=new e.Image;this.imageLoadHandler=this.onImageLoad.bind(this);this.imageErrorHandler=
this.onImageError.bind(this)},load:function(){this.imageEl.originalSrc=a.coalesce(this.imageEl.originalSrc,"");this.imageEl.originalSrc===this.src?this.imageEl.isError?a.Events.fire(this,{type:b.Image.EventTypes.onError,target:this}):a.Events.fire(this,{type:b.Image.EventTypes.onLoad,target:this}):(this.imageEl.isError=!1,this.imageEl.isLoading=!0,this.imageEl.naturalWidth=null,this.imageEl.naturalHeight=null,this.imageEl.isLandscape=!1,this.imageEl.onload=this.imageLoadHandler,this.imageEl.onerror=
this.imageErrorHandler,this.imageEl.onabort=this.imageErrorHandler,this.imageEl.originalSrc=this.src,this.imageEl.src=this.src)},shrinkImage:function(){if(!a.isNothing(this.imageEl)&&this.imageEl.src.indexOf(this.src)>-1)this.imageEl.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",a.isNothing(this.imageEl.parentNode)||a.DOM.removeChild(this.imageEl,this.imageEl.parentNode)},onImageLoad:function(){this.imageEl.onload=null;this.imageEl.naturalWidth=a.coalesce(this.imageEl.naturalWidth,
this.imageEl.width);this.imageEl.naturalHeight=a.coalesce(this.imageEl.naturalHeight,this.imageEl.height);this.imageEl.isLandscape=this.imageEl.naturalWidth>this.imageEl.naturalHeight;this.imageEl.isLoading=!1;a.Events.fire(this,{type:b.Image.EventTypes.onLoad,target:this})},onImageError:function(){this.imageEl.onload=null;this.imageEl.onerror=null;this.imageEl.onabort=null;this.imageEl.isLoading=!1;this.imageEl.isError=!0;a.Events.fire(this,{type:b.Image.EventTypes.onError,target:this})}})})(window,
window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Cache");e=e.Code.PhotoSwipe;e.Cache.Mode={normal:"normal",aggressive:"aggressive"};e.Cache.Functions={getImageSource:function(a){return a.href},getImageCaption:function(b){if(b.nodeName==="IMG")return a.DOM.getAttribute(b,"alt");var c,g,f;c=0;for(g=b.childNodes.length;c<g;c++)if(f=b.childNodes[c],b.childNodes[c].nodeName==="IMG")return a.DOM.getAttribute(f,"alt")},getImageMetaData:function(){return{}}}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Cache");var b=e.Code.PhotoSwipe;b.Cache.CacheClass=d({images:null,settings:null,dispose:function(){var c,b,f;if(!a.isNothing(this.images)){b=0;for(f=this.images.length;b<f;b++)this.images[b].dispose();this.images.length=0}for(c in this)a.objectHasProperty(this,c)&&(this[c]=null)},initialize:function(a,g){var f,d,e,h,l,k;this.settings=g;this.images=[];f=0;for(d=a.length;f<d;f++)e=a[f],h=this.settings.getImageSource(e),l=this.settings.getImageCaption(e),
k=this.settings.getImageMetaData(e),this.images.push(new b.Image.ImageClass(e,h,l,k))},getImages:function(c){var g,f,d=[],e;g=0;for(f=c.length;g<f;g++){e=this.images[c[g]];if(this.settings.cacheMode===b.Cache.Mode.aggressive)e.cacheDoNotShrink=!0;d.push(e)}if(this.settings.cacheMode===b.Cache.Mode.aggressive){g=0;for(f=this.images.length;g<f;g++)e=this.images[g],a.objectHasProperty(e,"cacheDoNotShrink")?delete e.cacheDoNotShrink:e.shrinkImage()}return d}})})(window,window.klass,window.Code.Util,window.Code.PhotoSwipe.Image);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.DocumentOverlay");e.Code.PhotoSwipe.DocumentOverlay.CssClasses={documentOverlay:"ps-document-overlay"}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.DocumentOverlay");var b=e.Code.PhotoSwipe;b.DocumentOverlay.DocumentOverlayClass=d({el:null,settings:null,initialBodyHeight:null,dispose:function(){var c;a.Animation.stop(this.el);a.DOM.removeChild(this.el,this.el.parentNode);for(c in this)a.objectHasProperty(this,c)&&(this[c]=null)},initialize:function(c){this.settings=c;this.el=a.DOM.createElement("div",{"class":b.DocumentOverlay.CssClasses.documentOverlay},"");a.DOM.setStyle(this.el,{display:"block",
position:"absolute",left:0,top:0,zIndex:this.settings.zIndex});a.DOM.hide(this.el);this.settings.target===e?a.DOM.appendToBody(this.el):a.DOM.appendChild(this.el,this.settings.target);a.Animation.resetTranslate(this.el);this.initialBodyHeight=a.DOM.bodyOuterHeight()},resetPosition:function(){var c,b,f;if(this.settings.target===e){c=a.DOM.windowWidth();b=a.DOM.bodyOuterHeight()*2;f=this.settings.jQueryMobile?a.DOM.windowScrollTop()+"px":"0px";if(b<1)b=this.initialBodyHeight;a.DOM.windowHeight()>b&&
(b=a.DOM.windowHeight())}else c=a.DOM.width(this.settings.target),b=a.DOM.height(this.settings.target),f="0px";a.DOM.setStyle(this.el,{width:c,height:b,top:f})},fadeIn:function(c,b){this.resetPosition();a.DOM.setStyle(this.el,"opacity",0);a.DOM.show(this.el);a.Animation.fadeIn(this.el,c,b)}})})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Carousel");e=e.Code.PhotoSwipe;e.Carousel.EventTypes={onSlideByEnd:"PhotoSwipeCarouselOnSlideByEnd",onSlideshowStart:"PhotoSwipeCarouselOnSlideshowStart",onSlideshowStop:"PhotoSwipeCarouselOnSlideshowStop"};e.Carousel.CssClasses={carousel:"ps-carousel",content:"ps-carousel-content",item:"ps-carousel-item",itemLoading:"ps-carousel-item-loading",itemError:"ps-carousel-item-error"};e.Carousel.SlideByAction={previous:"previous",current:"current",next:"next"}})(window,
window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Carousel");var b=e.Code.PhotoSwipe;b.Carousel.CarouselClass=d({el:null,contentEl:null,settings:null,cache:null,slideByEndHandler:null,currentCacheIndex:null,isSliding:null,isSlideshowActive:null,lastSlideByAction:null,touchStartPoint:null,touchStartPosition:null,imageLoadHandler:null,imageErrorHandler:null,slideshowTimeout:null,dispose:function(){var c,g,f;g=0;for(f=this.cache.images.length;g<f;g++)a.Events.remove(this.cache.images[g],b.Image.EventTypes.onLoad,
this.imageLoadHandler),a.Events.remove(this.cache.images[g],b.Image.EventTypes.onError,this.imageErrorHandler);this.stopSlideshow();a.Animation.stop(this.el);a.DOM.removeChild(this.el,this.el.parentNode);for(c in this)a.objectHasProperty(this,c)&&(this[c]=null)},initialize:function(c,g){var f,d,j;this.cache=c;this.settings=g;this.slideByEndHandler=this.onSlideByEnd.bind(this);this.imageLoadHandler=this.onImageLoad.bind(this);this.imageErrorHandler=this.onImageError.bind(this);this.currentCacheIndex=
0;this.isSlideshowActive=this.isSliding=!1;if(this.cache.images.length<3)this.settings.loop=!1;this.el=a.DOM.createElement("div",{"class":b.Carousel.CssClasses.carousel},"");a.DOM.setStyle(this.el,{display:"block",position:"absolute",left:0,top:0,overflow:"hidden",zIndex:this.settings.zIndex});a.DOM.hide(this.el);this.contentEl=a.DOM.createElement("div",{"class":b.Carousel.CssClasses.content},"");a.DOM.setStyle(this.contentEl,{display:"block",position:"absolute",left:0,top:0});a.DOM.appendChild(this.contentEl,
this.el);d=c.images.length<3?c.images.length:3;for(f=0;f<d;f++)j=a.DOM.createElement("div",{"class":b.Carousel.CssClasses.item+" "+b.Carousel.CssClasses.item+"-"+f},""),a.DOM.setAttribute(j,"style","float: left;"),a.DOM.setStyle(j,{display:"block",position:"relative",left:0,top:0,overflow:"hidden"}),this.settings.margin>0&&a.DOM.setStyle(j,{marginRight:this.settings.margin+"px"}),a.DOM.appendChild(j,this.contentEl);this.settings.target===e?a.DOM.appendToBody(this.el):a.DOM.appendChild(this.el,this.settings.target)},
resetPosition:function(){var c,g,f,d,j,h;this.settings.target===e?(c=a.DOM.windowWidth(),g=a.DOM.windowHeight(),f=a.DOM.windowScrollTop()+"px"):(c=a.DOM.width(this.settings.target),g=a.DOM.height(this.settings.target),f="0px");d=this.settings.margin>0?c+this.settings.margin:c;j=a.DOM.find("."+b.Carousel.CssClasses.item,this.contentEl);d*=j.length;a.DOM.setStyle(this.el,{top:f,width:c,height:g});a.DOM.setStyle(this.contentEl,{width:d,height:g});f=0;for(d=j.length;f<d;f++)h=j[f],a.DOM.setStyle(h,{width:c,
height:g}),h=a.DOM.find("img",h)[0],a.isNothing(h)||this.resetImagePosition(h);this.setContentLeftPosition()},resetImagePosition:function(c){if(!a.isNothing(c)){a.DOM.getAttribute(c,"src");var b,f,d,e=a.DOM.width(this.el),h=a.DOM.height(this.el);this.settings.imageScaleMethod==="fitNoUpscale"?(f=c.naturalWidth,d=c.naturalHeight,f>e&&(b=e/f,f=Math.round(f*b),d=Math.round(d*b)),d>h&&(b=h/d,d=Math.round(d*b),f=Math.round(f*b))):(b=c.isLandscape?e/c.naturalWidth:h/c.naturalHeight,f=Math.round(c.naturalWidth*
b),d=Math.round(c.naturalHeight*b),this.settings.imageScaleMethod==="zoom"?(b=1,d<h?b=h/d:f<e&&(b=e/f),b!==1&&(f=Math.round(f*b),d=Math.round(d*b))):this.settings.imageScaleMethod==="fit"&&(b=1,f>e?b=e/f:d>h&&(b=h/d),b!==1&&(f=Math.round(f*b),d=Math.round(d*b))));a.DOM.setStyle(c,{position:"absolute",width:f,height:d,top:Math.round((h-d)/2)+"px",left:Math.round((e-f)/2)+"px",display:"block"})}},setContentLeftPosition:function(){var c,b,d;c=this.settings.target===e?a.DOM.windowWidth():a.DOM.width(this.settings.target);
b=this.getItemEls();d=0;this.settings.loop?d=(c+this.settings.margin)*-1:this.currentCacheIndex===this.cache.images.length-1?d=(b.length-1)*(c+this.settings.margin)*-1:this.currentCacheIndex>0&&(d=(c+this.settings.margin)*-1);a.DOM.setStyle(this.contentEl,{left:d+"px"})},show:function(c){this.currentCacheIndex=c;this.resetPosition();this.setImages(!1);a.DOM.show(this.el);a.Animation.resetTranslate(this.contentEl);var c=this.getItemEls(),d,f;d=0;for(f=c.length;d<f;d++)a.Animation.resetTranslate(c[d]);
a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideByEnd,target:this,action:b.Carousel.SlideByAction.current,cacheIndex:this.currentCacheIndex})},setImages:function(a){var b,d=this.getItemEls();b=this.currentCacheIndex+1;var e=this.currentCacheIndex-1;this.settings.loop?(b>this.cache.images.length-1&&(b=0),e<0&&(e=this.cache.images.length-1),b=this.cache.getImages([e,this.currentCacheIndex,b]),a||this.addCacheImageToItemEl(b[1],d[1]),this.addCacheImageToItemEl(b[2],d[2]),this.addCacheImageToItemEl(b[0],
d[0])):d.length===1?a||(b=this.cache.getImages([this.currentCacheIndex]),this.addCacheImageToItemEl(b[0],d[0])):d.length===2?this.currentCacheIndex===0?(b=this.cache.getImages([this.currentCacheIndex,this.currentCacheIndex+1]),a||this.addCacheImageToItemEl(b[0],d[0]),this.addCacheImageToItemEl(b[1],d[1])):(b=this.cache.getImages([this.currentCacheIndex-1,this.currentCacheIndex]),a||this.addCacheImageToItemEl(b[1],d[1]),this.addCacheImageToItemEl(b[0],d[0])):this.currentCacheIndex===0?(b=this.cache.getImages([this.currentCacheIndex,
this.currentCacheIndex+1,this.currentCacheIndex+2]),a||this.addCacheImageToItemEl(b[0],d[0]),this.addCacheImageToItemEl(b[1],d[1]),this.addCacheImageToItemEl(b[2],d[2])):(this.currentCacheIndex===this.cache.images.length-1?(b=this.cache.getImages([this.currentCacheIndex-2,this.currentCacheIndex-1,this.currentCacheIndex]),a||this.addCacheImageToItemEl(b[2],d[2]),this.addCacheImageToItemEl(b[1],d[1])):(b=this.cache.getImages([this.currentCacheIndex-1,this.currentCacheIndex,this.currentCacheIndex+1]),
a||this.addCacheImageToItemEl(b[1],d[1]),this.addCacheImageToItemEl(b[2],d[2])),this.addCacheImageToItemEl(b[0],d[0]))},addCacheImageToItemEl:function(c,d){a.DOM.removeClass(d,b.Carousel.CssClasses.itemError);a.DOM.addClass(d,b.Carousel.CssClasses.itemLoading);a.DOM.removeChildren(d);a.DOM.setStyle(c.imageEl,{display:"none"});a.DOM.appendChild(c.imageEl,d);a.Animation.resetTranslate(c.imageEl);a.Events.add(c,b.Image.EventTypes.onLoad,this.imageLoadHandler);a.Events.add(c,b.Image.EventTypes.onError,
this.imageErrorHandler);c.load()},slideCarousel:function(c,d,f){if(!this.isSliding){var i,j;i=this.settings.target===e?a.DOM.windowWidth()+this.settings.margin:a.DOM.width(this.settings.target)+this.settings.margin;f=a.coalesce(f,this.settings.slideSpeed);if(!(e.Math.abs(j)<1)){switch(d){case a.TouchElement.ActionTypes.swipeLeft:c=i*-1;break;case a.TouchElement.ActionTypes.swipeRight:c=i;break;default:j=c.x-this.touchStartPoint.x,c=e.Math.abs(j)>i/2?j>0?i:i*-1:0}this.lastSlideByAction=c<0?b.Carousel.SlideByAction.next:
c>0?b.Carousel.SlideByAction.previous:b.Carousel.SlideByAction.current;if(!this.settings.loop&&(this.lastSlideByAction===b.Carousel.SlideByAction.previous&&this.currentCacheIndex===0||this.lastSlideByAction===b.Carousel.SlideByAction.next&&this.currentCacheIndex===this.cache.images.length-1))c=0,this.lastSlideByAction=b.Carousel.SlideByAction.current;this.isSliding=!0;this.doSlideCarousel(c,f)}}},moveCarousel:function(a){this.isSliding||this.settings.enableDrag&&this.doMoveCarousel(a.x-this.touchStartPoint.x)},
getItemEls:function(){return a.DOM.find("."+b.Carousel.CssClasses.item,this.contentEl)},previous:function(){this.stopSlideshow();this.slideCarousel({x:0,y:0},a.TouchElement.ActionTypes.swipeRight,this.settings.nextPreviousSlideSpeed)},next:function(){this.stopSlideshow();this.slideCarousel({x:0,y:0},a.TouchElement.ActionTypes.swipeLeft,this.settings.nextPreviousSlideSpeed)},slideshowNext:function(){this.slideCarousel({x:0,y:0},a.TouchElement.ActionTypes.swipeLeft)},startSlideshow:function(){this.stopSlideshow();
this.isSlideshowActive=!0;this.slideshowTimeout=e.setTimeout(this.slideshowNext.bind(this),this.settings.slideshowDelay);a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideshowStart,target:this})},stopSlideshow:function(){if(!a.isNothing(this.slideshowTimeout))e.clearTimeout(this.slideshowTimeout),this.slideshowTimeout=null,this.isSlideshowActive=!1,a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideshowStop,target:this})},onSlideByEnd:function(){if(!a.isNothing(this.isSliding)){var c=this.getItemEls();
this.isSliding=!1;this.lastSlideByAction===b.Carousel.SlideByAction.next?this.currentCacheIndex+=1:this.lastSlideByAction===b.Carousel.SlideByAction.previous&&(this.currentCacheIndex-=1);if(this.settings.loop)if(this.lastSlideByAction===b.Carousel.SlideByAction.next?a.DOM.appendChild(c[0],this.contentEl):this.lastSlideByAction===b.Carousel.SlideByAction.previous&&a.DOM.insertBefore(c[c.length-1],c[0],this.contentEl),this.currentCacheIndex<0)this.currentCacheIndex=this.cache.images.length-1;else{if(this.currentCacheIndex===
this.cache.images.length)this.currentCacheIndex=0}else this.cache.images.length>3&&(this.currentCacheIndex>1&&this.currentCacheIndex<this.cache.images.length-2?this.lastSlideByAction===b.Carousel.SlideByAction.next?a.DOM.appendChild(c[0],this.contentEl):this.lastSlideByAction===b.Carousel.SlideByAction.previous&&a.DOM.insertBefore(c[c.length-1],c[0],this.contentEl):this.currentCacheIndex===1?this.lastSlideByAction===b.Carousel.SlideByAction.previous&&a.DOM.insertBefore(c[c.length-1],c[0],this.contentEl):
this.currentCacheIndex===this.cache.images.length-2&&this.lastSlideByAction===b.Carousel.SlideByAction.next&&a.DOM.appendChild(c[0],this.contentEl));this.lastSlideByAction!==b.Carousel.SlideByAction.current&&(this.setContentLeftPosition(),this.setImages(!0));a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideByEnd,target:this,action:this.lastSlideByAction,cacheIndex:this.currentCacheIndex});this.isSlideshowActive&&(this.lastSlideByAction!==b.Carousel.SlideByAction.current?this.startSlideshow():
this.stopSlideshow())}},onTouch:function(b,d){this.stopSlideshow();switch(b){case a.TouchElement.ActionTypes.touchStart:this.touchStartPoint=d;this.touchStartPosition={x:e.parseInt(a.DOM.getStyle(this.contentEl,"left"),0),y:e.parseInt(a.DOM.getStyle(this.contentEl,"top"),0)};break;case a.TouchElement.ActionTypes.touchMove:this.moveCarousel(d);break;case a.TouchElement.ActionTypes.touchMoveEnd:case a.TouchElement.ActionTypes.swipeLeft:case a.TouchElement.ActionTypes.swipeRight:this.slideCarousel(d,
b)}},onImageLoad:function(c){c=c.target;a.isNothing(c.imageEl.parentNode)||(a.DOM.removeClass(c.imageEl.parentNode,b.Carousel.CssClasses.itemLoading),this.resetImagePosition(c.imageEl));a.Events.remove(c,b.Image.EventTypes.onLoad,this.imageLoadHandler);a.Events.remove(c,b.Image.EventTypes.onError,this.imageErrorHandler)},onImageError:function(c){c=c.target;a.isNothing(c.imageEl.parentNode)||(a.DOM.removeClass(c.imageEl.parentNode,b.Carousel.CssClasses.itemLoading),a.DOM.addClass(c.imageEl.parentNode,
b.Carousel.CssClasses.itemError));a.Events.remove(c,b.Image.EventTypes.onLoad,this.imageLoadHandler);a.Events.remove(c,b.Image.EventTypes.onError,this.imageErrorHandler)}})})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Carousel");d=e.Code.PhotoSwipe;d.Carousel.CarouselClass=d.Carousel.CarouselClass.extend({getStartingPos:function(){var b=this.touchStartPosition;a.isNothing(b)&&(b={x:e.parseInt(a.DOM.getStyle(this.contentEl,"left"),0),y:e.parseInt(a.DOM.getStyle(this.contentEl,"top"),0)});return b},doMoveCarousel:function(b){var c;a.Browser.isCSSTransformSupported?(c={},c[a.Animation._transitionPrefix+"Property"]="all",c[a.Animation._transitionPrefix+"Duration"]=
"",c[a.Animation._transitionPrefix+"TimingFunction"]="",c[a.Animation._transitionPrefix+"Delay"]="0",c[a.Animation._transformLabel]=a.Browser.is3dSupported?"translate3d("+b+"px, 0px, 0px)":"translate("+b+"px, 0px)",a.DOM.setStyle(this.contentEl,c)):a.isNothing(e.jQuery)||e.jQuery(this.contentEl).stop().css("left",this.getStartingPos().x+b+"px")},doSlideCarousel:function(b,c){var d;if(c<=0)this.slideByEndHandler();else if(a.Browser.isCSSTransformSupported)d=a.coalesce(this.contentEl.style.webkitTransform,
this.contentEl.style.MozTransform,this.contentEl.style.transform,""),d.indexOf("translate3d("+b)===0?this.slideByEndHandler():d.indexOf("translate("+b)===0?this.slideByEndHandler():a.Animation.slideBy(this.contentEl,b,0,c,this.slideByEndHandler,this.settings.slideTimingFunction);else if(!a.isNothing(e.jQuery)){d={left:this.getStartingPos().x+b+"px"};if(this.settings.animationTimingFunction==="ease-out")this.settings.animationTimingFunction="easeOutQuad";if(a.isNothing(e.jQuery.easing[this.settings.animationTimingFunction]))this.settings.animationTimingFunction=
"linear";e.jQuery(this.contentEl).animate(d,this.settings.slideSpeed,this.settings.animationTimingFunction,this.slideByEndHandler)}}})})(window,window.klass,window.Code.Util,window.Code.PhotoSwipe.TouchElement);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Toolbar");var b=e.Code.PhotoSwipe;b.Toolbar.CssClasses={toolbar:"ps-toolbar",toolbarContent:"ps-toolbar-content",toolbarTop:"ps-toolbar-top",caption:"ps-caption",captionBottom:"ps-caption-bottom",captionContent:"ps-caption-content",close:"ps-toolbar-close",play:"ps-toolbar-play",previous:"ps-toolbar-previous",previousDisabled:"ps-toolbar-previous-disabled",next:"ps-toolbar-next",nextDisabled:"ps-toolbar-next-disabled"};b.Toolbar.ToolbarAction=
{close:"close",play:"play",next:"next",previous:"previous",none:"none"};b.Toolbar.EventTypes={onTap:"PhotoSwipeToolbarOnClick",onBeforeShow:"PhotoSwipeToolbarOnBeforeShow",onShow:"PhotoSwipeToolbarOnShow",onBeforeHide:"PhotoSwipeToolbarOnBeforeHide",onHide:"PhotoSwipeToolbarOnHide"};b.Toolbar.getToolbar=function(){return'<div class="'+b.Toolbar.CssClasses.close+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+'"></div></div><div class="'+b.Toolbar.CssClasses.play+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+
'"></div></div><div class="'+b.Toolbar.CssClasses.previous+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+'"></div></div><div class="'+b.Toolbar.CssClasses.next+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+'"></div></div>'}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Toolbar");var b=e.Code.PhotoSwipe;b.Toolbar.ToolbarClass=d({toolbarEl:null,closeEl:null,playEl:null,previousEl:null,nextEl:null,captionEl:null,captionContentEl:null,currentCaption:null,settings:null,cache:null,timeout:null,isVisible:null,fadeOutHandler:null,touchStartHandler:null,touchMoveHandler:null,clickHandler:null,dispose:function(){var b;this.clearTimeout();this.removeEventHandlers();a.Animation.stop(this.toolbarEl);a.Animation.stop(this.captionEl);
a.DOM.removeChild(this.toolbarEl,this.toolbarEl.parentNode);a.DOM.removeChild(this.captionEl,this.captionEl.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(c,d){var f;this.settings=d;this.cache=c;this.isVisible=!1;this.fadeOutHandler=this.onFadeOut.bind(this);this.touchStartHandler=this.onTouchStart.bind(this);this.touchMoveHandler=this.onTouchMove.bind(this);this.clickHandler=this.onClick.bind(this);f=b.Toolbar.CssClasses.toolbar;this.settings.captionAndToolbarFlipPosition&&
(f=f+" "+b.Toolbar.CssClasses.toolbarTop);this.toolbarEl=a.DOM.createElement("div",{"class":f},this.settings.getToolbar());a.DOM.setStyle(this.toolbarEl,{left:0,position:"absolute",overflow:"hidden",zIndex:this.settings.zIndex});this.settings.target===e?a.DOM.appendToBody(this.toolbarEl):a.DOM.appendChild(this.toolbarEl,this.settings.target);a.DOM.hide(this.toolbarEl);this.closeEl=a.DOM.find("."+b.Toolbar.CssClasses.close,this.toolbarEl)[0];this.settings.preventHide&&!a.isNothing(this.closeEl)&&a.DOM.hide(this.closeEl);
this.playEl=a.DOM.find("."+b.Toolbar.CssClasses.play,this.toolbarEl)[0];this.settings.preventSlideshow&&!a.isNothing(this.playEl)&&a.DOM.hide(this.playEl);this.nextEl=a.DOM.find("."+b.Toolbar.CssClasses.next,this.toolbarEl)[0];this.previousEl=a.DOM.find("."+b.Toolbar.CssClasses.previous,this.toolbarEl)[0];f=b.Toolbar.CssClasses.caption;this.settings.captionAndToolbarFlipPosition&&(f=f+" "+b.Toolbar.CssClasses.captionBottom);this.captionEl=a.DOM.createElement("div",{"class":f},"");a.DOM.setStyle(this.captionEl,
{left:0,position:"absolute",overflow:"hidden",zIndex:this.settings.zIndex});this.settings.target===e?a.DOM.appendToBody(this.captionEl):a.DOM.appendChild(this.captionEl,this.settings.target);a.DOM.hide(this.captionEl);this.captionContentEl=a.DOM.createElement("div",{"class":b.Toolbar.CssClasses.captionContent},"");a.DOM.appendChild(this.captionContentEl,this.captionEl);this.addEventHandlers()},resetPosition:function(){var b,d,f;this.settings.target===e?(this.settings.captionAndToolbarFlipPosition?
(d=a.DOM.windowScrollTop(),f=a.DOM.windowScrollTop()+a.DOM.windowHeight()-a.DOM.height(this.captionEl)):(d=a.DOM.windowScrollTop()+a.DOM.windowHeight()-a.DOM.height(this.toolbarEl),f=a.DOM.windowScrollTop()),b=a.DOM.windowWidth()):(this.settings.captionAndToolbarFlipPosition?(d="0",f=a.DOM.height(this.settings.target)-a.DOM.height(this.captionEl)):(d=a.DOM.height(this.settings.target)-a.DOM.height(this.toolbarEl),f=0),b=a.DOM.width(this.settings.target));a.DOM.setStyle(this.toolbarEl,{top:d+"px",
width:b});a.DOM.setStyle(this.captionEl,{top:f+"px",width:b})},toggleVisibility:function(a){this.isVisible?this.fadeOut():this.show(a)},show:function(c){a.Animation.stop(this.toolbarEl);a.Animation.stop(this.captionEl);this.resetPosition();this.setToolbarStatus(c);a.Events.fire(this,{type:b.Toolbar.EventTypes.onBeforeShow,target:this});this.showToolbar();this.setCaption(c);this.showCaption();this.isVisible=!0;this.setTimeout();a.Events.fire(this,{type:b.Toolbar.EventTypes.onShow,target:this})},setTimeout:function(){if(this.settings.captionAndToolbarAutoHideDelay>
0)this.clearTimeout(),this.timeout=e.setTimeout(this.fadeOut.bind(this),this.settings.captionAndToolbarAutoHideDelay)},clearTimeout:function(){if(!a.isNothing(this.timeout))e.clearTimeout(this.timeout),this.timeout=null},fadeOut:function(){this.clearTimeout();a.Events.fire(this,{type:b.Toolbar.EventTypes.onBeforeHide,target:this});a.Animation.fadeOut(this.toolbarEl,this.settings.fadeOutSpeed);a.Animation.fadeOut(this.captionEl,this.settings.fadeOutSpeed,this.fadeOutHandler);this.isVisible=!1},addEventHandlers:function(){a.Browser.isTouchSupported&&
(a.Browser.blackberry||a.Events.add(this.toolbarEl,"touchstart",this.touchStartHandler),a.Events.add(this.toolbarEl,"touchmove",this.touchMoveHandler),a.Events.add(this.captionEl,"touchmove",this.touchMoveHandler));a.Events.add(this.toolbarEl,"click",this.clickHandler)},removeEventHandlers:function(){a.Browser.isTouchSupported&&(a.Browser.blackberry||a.Events.remove(this.toolbarEl,"touchstart",this.touchStartHandler),a.Events.remove(this.toolbarEl,"touchmove",this.touchMoveHandler),a.Events.remove(this.captionEl,
"touchmove",this.touchMoveHandler));a.Events.remove(this.toolbarEl,"click",this.clickHandler)},handleTap:function(c){this.clearTimeout();var d;if(c.target===this.nextEl||a.DOM.isChildOf(c.target,this.nextEl))d=b.Toolbar.ToolbarAction.next;else if(c.target===this.previousEl||a.DOM.isChildOf(c.target,this.previousEl))d=b.Toolbar.ToolbarAction.previous;else if(c.target===this.closeEl||a.DOM.isChildOf(c.target,this.closeEl))d=b.Toolbar.ToolbarAction.close;else if(c.target===this.playEl||a.DOM.isChildOf(c.target,
this.playEl))d=b.Toolbar.ToolbarAction.play;this.setTimeout();if(a.isNothing(d))d=b.Toolbar.ToolbarAction.none;a.Events.fire(this,{type:b.Toolbar.EventTypes.onTap,target:this,action:d,tapTarget:c.target})},setCaption:function(b){a.DOM.removeChildren(this.captionContentEl);this.currentCaption=a.coalesce(this.cache.images[b].caption,"\u00a0");if(a.isObject(this.currentCaption))a.DOM.appendChild(this.currentCaption,this.captionContentEl);else{if(this.currentCaption==="")this.currentCaption="\u00a0";
a.DOM.appendText(this.currentCaption,this.captionContentEl)}this.currentCaption=this.currentCaption==="\u00a0"?"":this.currentCaption;this.resetPosition()},showToolbar:function(){a.DOM.setStyle(this.toolbarEl,{opacity:this.settings.captionAndToolbarOpacity});a.DOM.show(this.toolbarEl)},showCaption:function(){(this.currentCaption===""||this.captionContentEl.childNodes.length<1)&&!this.settings.captionAndToolbarShowEmptyCaptions?a.DOM.hide(this.captionEl):(a.DOM.setStyle(this.captionEl,{opacity:this.settings.captionAndToolbarOpacity}),
a.DOM.show(this.captionEl))},setToolbarStatus:function(c){this.settings.loop||(a.DOM.removeClass(this.previousEl,b.Toolbar.CssClasses.previousDisabled),a.DOM.removeClass(this.nextEl,b.Toolbar.CssClasses.nextDisabled),c>0&&c<this.cache.images.length-1||(c===0&&(a.isNothing(this.previousEl)||a.DOM.addClass(this.previousEl,b.Toolbar.CssClasses.previousDisabled)),c===this.cache.images.length-1&&(a.isNothing(this.nextEl)||a.DOM.addClass(this.nextEl,b.Toolbar.CssClasses.nextDisabled))))},onFadeOut:function(){a.DOM.hide(this.toolbarEl);
a.DOM.hide(this.captionEl);a.Events.fire(this,{type:b.Toolbar.EventTypes.onHide,target:this})},onTouchStart:function(b){b.preventDefault();a.Events.remove(this.toolbarEl,"click",this.clickHandler);this.handleTap(b)},onTouchMove:function(a){a.preventDefault()},onClick:function(a){a.preventDefault();this.handleTap(a)}})})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.UILayer");e.Code.PhotoSwipe.UILayer.CssClasses={uiLayer:"ps-uilayer"}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.UILayer");var b=e.Code.PhotoSwipe;b.UILayer.UILayerClass=a.TouchElement.TouchElementClass.extend({el:null,settings:null,dispose:function(){var b;this.removeEventHandlers();a.DOM.removeChild(this.el,this.el.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(c){this.settings=c;this.el=a.DOM.createElement("div",{"class":b.UILayer.CssClasses.uiLayer},"");a.DOM.setStyle(this.el,{display:"block",position:"absolute",
left:0,top:0,overflow:"hidden",zIndex:this.settings.zIndex,opacity:0});a.DOM.hide(this.el);this.settings.target===e?a.DOM.appendToBody(this.el):a.DOM.appendChild(this.el,this.settings.target);this.supr(this.el,{swipe:!0,move:!0,gesture:a.Browser.iOS,doubleTap:!0,preventDefaultTouchEvents:this.settings.preventDefaultTouchEvents})},resetPosition:function(){this.settings.target===e?a.DOM.setStyle(this.el,{top:a.DOM.windowScrollTop()+"px",width:a.DOM.windowWidth(),height:a.DOM.windowHeight()}):a.DOM.setStyle(this.el,
{top:"0px",width:a.DOM.width(this.settings.target),height:a.DOM.height(this.settings.target)})},show:function(){this.resetPosition();a.DOM.show(this.el);this.addEventHandlers()},addEventHandlers:function(){this.supr()},removeEventHandlers:function(){this.supr()}})})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.ZoomPanRotate");e=e.Code.PhotoSwipe;e.ZoomPanRotate.CssClasses={zoomPanRotate:"ps-zoom-pan-rotate"};e.ZoomPanRotate.EventTypes={onTransform:"PhotoSwipeZoomPanRotateOnTransform"}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.ZoomPanRotate");var b=e.Code.PhotoSwipe;b.ZoomPanRotate.ZoomPanRotateClass=d({el:null,settings:null,containerEl:null,imageEl:null,transformSettings:null,panStartingPoint:null,transformEl:null,dispose:function(){var b;a.DOM.removeChild(this.el,this.el.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(c,d,f){var i,j,h;this.settings=c;this.settings.target===e?(c=document.body,i=a.DOM.windowWidth(),j=a.DOM.windowHeight(),
h=a.DOM.windowScrollTop()+"px"):(c=this.settings.target,i=a.DOM.width(c),j=a.DOM.height(c),h="0px");this.imageEl=d.imageEl.cloneNode(!1);a.DOM.setStyle(this.imageEl,{zIndex:1});this.transformSettings={startingScale:1,scale:1,startingRotation:0,rotation:0,startingTranslateX:0,startingTranslateY:0,translateX:0,translateY:0};this.el=a.DOM.createElement("div",{"class":b.ZoomPanRotate.CssClasses.zoomPanRotate},"");a.DOM.setStyle(this.el,{left:0,top:h,position:"absolute",width:i,height:j,zIndex:this.settings.zIndex,
display:"block"});a.DOM.insertBefore(this.el,f.el,c);a.Browser.iOS?(this.containerEl=a.DOM.createElement("div","",""),a.DOM.setStyle(this.containerEl,{left:0,top:0,width:i,height:j,position:"absolute",zIndex:1}),a.DOM.appendChild(this.imageEl,this.containerEl),a.DOM.appendChild(this.containerEl,this.el),a.Animation.resetTranslate(this.containerEl),a.Animation.resetTranslate(this.imageEl),this.transformEl=this.containerEl):(a.DOM.appendChild(this.imageEl,this.el),this.transformEl=this.imageEl)},setStartingTranslateFromCurrentTransform:function(){var b=
a.coalesce(this.transformEl.style.webkitTransform,this.transformEl.style.MozTransform,this.transformEl.style.transform);if(!a.isNothing(b)&&(b=b.match(/translate\((.*?)\)/),!a.isNothing(b)))b=b[1].split(", "),this.transformSettings.startingTranslateX=e.parseInt(b[0],10),this.transformSettings.startingTranslateY=e.parseInt(b[1],10)},getScale:function(a){a*=this.transformSettings.startingScale;if(this.settings.minUserZoom!==0&&a<this.settings.minUserZoom)a=this.settings.minUserZoom;else if(this.settings.maxUserZoom!==
0&&a>this.settings.maxUserZoom)a=this.settings.maxUserZoom;return a},setStartingScaleAndRotation:function(a,b){this.transformSettings.startingScale=this.getScale(a);this.transformSettings.startingRotation=(this.transformSettings.startingRotation+b)%360},zoomRotate:function(a,b){this.transformSettings.scale=this.getScale(a);this.transformSettings.rotation=this.transformSettings.startingRotation+b;this.applyTransform()},panStart:function(a){this.setStartingTranslateFromCurrentTransform();this.panStartingPoint=
{x:a.x,y:a.y}},pan:function(a){var b=(a.y-this.panStartingPoint.y)/this.transformSettings.scale;this.transformSettings.translateX=this.transformSettings.startingTranslateX+(a.x-this.panStartingPoint.x)/this.transformSettings.scale;this.transformSettings.translateY=this.transformSettings.startingTranslateY+b;this.applyTransform()},zoomAndPanToPoint:function(b,d){if(this.settings.target===e){this.panStart({x:a.DOM.windowWidth()/2,y:a.DOM.windowHeight()/2});var f=(d.y-this.panStartingPoint.y)/this.transformSettings.scale;
this.transformSettings.translateX=(this.transformSettings.startingTranslateX+(d.x-this.panStartingPoint.x)/this.transformSettings.scale)*-1;this.transformSettings.translateY=(this.transformSettings.startingTranslateY+f)*-1}this.setStartingScaleAndRotation(b,0);this.transformSettings.scale=this.transformSettings.startingScale;this.transformSettings.rotation=0;this.applyTransform()},applyTransform:function(){var c=this.transformSettings.rotation%360,d=e.parseInt(this.transformSettings.translateX,10),
f=e.parseInt(this.transformSettings.translateY,10),i="scale("+this.transformSettings.scale+") rotate("+c+"deg) translate("+d+"px, "+f+"px)";a.DOM.setStyle(this.transformEl,{webkitTransform:i,MozTransform:i,msTransform:i,transform:i});a.Events.fire(this,{target:this,type:b.ZoomPanRotate.EventTypes.onTransform,scale:this.transformSettings.scale,rotation:this.transformSettings.rotation,rotationDegs:c,translateX:d,translateY:f})}})})(window,window.klass,window.Code.Util);
(function(e,d){d.registerNamespace("Code.PhotoSwipe");var a=e.Code.PhotoSwipe;a.CssClasses={buildingBody:"ps-building",activeBody:"ps-active"};a.EventTypes={onBeforeShow:"PhotoSwipeOnBeforeShow",onShow:"PhotoSwipeOnShow",onBeforeHide:"PhotoSwipeOnBeforeHide",onHide:"PhotoSwipeOnHide",onDisplayImage:"PhotoSwipeOnDisplayImage",onResetPosition:"PhotoSwipeOnResetPosition",onSlideshowStart:"PhotoSwipeOnSlideshowStart",onSlideshowStop:"PhotoSwipeOnSlideshowStop",onTouch:"PhotoSwipeOnTouch",onBeforeCaptionAndToolbarShow:"PhotoSwipeOnBeforeCaptionAndToolbarShow",
onCaptionAndToolbarShow:"PhotoSwipeOnCaptionAndToolbarShow",onBeforeCaptionAndToolbarHide:"PhotoSwipeOnBeforeCaptionAndToolbarHide",onCaptionAndToolbarHide:"PhotoSwipeOnCaptionAndToolbarHide",onToolbarTap:"PhotoSwipeOnToolbarTap",onBeforeZoomPanRotateShow:"PhotoSwipeOnBeforeZoomPanRotateShow",onZoomPanRotateShow:"PhotoSwipeOnZoomPanRotateShow",onBeforeZoomPanRotateHide:"PhotoSwipeOnBeforeZoomPanRotateHide",onZoomPanRotateHide:"PhotoSwipeOnZoomPanRotateHide",onZoomPanRotateTransform:"PhotoSwipeOnZoomPanRotateTransform"};
a.instances=[];a.activeInstances=[];a.setActivateInstance=function(b){if(d.arrayIndexOf(b.settings.target,a.activeInstances,"target")>-1)throw"Code.PhotoSwipe.activateInstance: Unable to active instance as another instance is already active for this target";a.activeInstances.push({target:b.settings.target,instance:b})};a.unsetActivateInstance=function(b){b=d.arrayIndexOf(b,a.activeInstances,"instance");a.activeInstances.splice(b,1)};a.attach=function(b,c,e){var f,i;f=a.createInstance(b,c,e);c=0;for(e=
b.length;c<e;c++)if(i=b[c],!d.isNothing(i.nodeType)&&i.nodeType===1)i.__photoSwipeClickHandler=a.onTriggerElementClick.bind(f),d.Events.remove(i,"click",i.__photoSwipeClickHandler),d.Events.add(i,"click",i.__photoSwipeClickHandler);return f};if(e.jQuery)e.jQuery.fn.photoSwipe=function(b,c){return a.attach(this,b,c)};a.detatch=function(b){var c,e,f;c=0;for(e=b.originalImages.length;c<e;c++)f=b.originalImages[c],!d.isNothing(f.nodeType)&&f.nodeType===1&&(d.Events.remove(f,"click",f.__photoSwipeClickHandler),
delete f.__photoSwipeClickHandler);a.disposeInstance(b)};a.createInstance=function(b,c,e){var f;if(d.isNothing(b))throw"Code.PhotoSwipe.attach: No images passed.";if(!d.isLikeArray(b))throw"Code.PhotoSwipe.createInstance: Images must be an array of elements or image urls.";if(b.length<1)throw"Code.PhotoSwipe.createInstance: No images to passed.";c=d.coalesce(c,{});f=a.getInstance(e);if(d.isNothing(f))f=new a.PhotoSwipeClass(b,c,e),a.instances.push(f);else throw'Code.PhotoSwipe.createInstance: Instance with id "'+
e+' already exists."';return f};a.disposeInstance=function(b){var c=a.getInstanceIndex(b);if(c<0)throw"Code.PhotoSwipe.disposeInstance: Unable to find instance to dispose.";b.dispose();a.instances.splice(c,1)};a.onTriggerElementClick=function(a){a.preventDefault();this.show(a.currentTarget)};a.getInstance=function(b){var c,d,e;c=0;for(d=a.instances.length;c<d;c++)if(e=a.instances[c],e.id===b)return e;return null};a.getInstanceIndex=function(b){var c,d,e=-1;c=0;for(d=a.instances.length;c<d;c++)if(a.instances[c]===
b){e=c;break}return e}})(window,window.Code.Util);
(function(e,d,a,b,c,g,f,i,j){a.registerNamespace("Code.PhotoSwipe");var h=e.Code.PhotoSwipe;h.PhotoSwipeClass=d({id:null,settings:null,isBackEventSupported:null,backButtonClicked:null,currentIndex:null,originalImages:null,mouseWheelStartTime:null,windowDimensions:null,cache:null,documentOverlay:null,carousel:null,uiLayer:null,toolbar:null,zoomPanRotate:null,windowOrientationChangeHandler:null,windowScrollHandler:null,windowHashChangeHandler:null,keyDownHandler:null,windowOrientationEventName:null,
uiLayerTouchHandler:null,carouselSlideByEndHandler:null,carouselSlideshowStartHandler:null,carouselSlideshowStopHandler:null,toolbarTapHandler:null,toolbarBeforeShowHandler:null,toolbarShowHandler:null,toolbarBeforeHideHandler:null,toolbarHideHandler:null,mouseWheelHandler:null,zoomPanRotateTransformHandler:null,_isResettingPosition:null,_uiWebViewResetPositionTimeout:null,dispose:function(){var b;a.Events.remove(this,h.EventTypes.onBeforeShow);a.Events.remove(this,h.EventTypes.onShow);a.Events.remove(this,
h.EventTypes.onBeforeHide);a.Events.remove(this,h.EventTypes.onHide);a.Events.remove(this,h.EventTypes.onDisplayImage);a.Events.remove(this,h.EventTypes.onResetPosition);a.Events.remove(this,h.EventTypes.onSlideshowStart);a.Events.remove(this,h.EventTypes.onSlideshowStop);a.Events.remove(this,h.EventTypes.onTouch);a.Events.remove(this,h.EventTypes.onBeforeCaptionAndToolbarShow);a.Events.remove(this,h.EventTypes.onCaptionAndToolbarShow);a.Events.remove(this,h.EventTypes.onBeforeCaptionAndToolbarHide);
a.Events.remove(this,h.EventTypes.onCaptionAndToolbarHide);a.Events.remove(this,h.EventTypes.onZoomPanRotateTransform);this.removeEventHandlers();a.isNothing(this.documentOverlay)||this.documentOverlay.dispose();a.isNothing(this.carousel)||this.carousel.dispose();a.isNothing(this.uiLayer)||this.uiLayer.dispose();a.isNothing(this.toolbar)||this.toolbar.dispose();this.destroyZoomPanRotate();a.isNothing(this.cache)||this.cache.dispose();for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(c,
d,f){this.id=a.isNothing(f)?"PhotoSwipe"+(new Date).getTime().toString():f;this.originalImages=c;if(a.Browser.android&&!a.Browser.firefox&&e.navigator.userAgent.match(/Android (\d+.\d+)/).toString().replace(/^.*\,/,"")>=2.1)this.isBackEventSupported=!0;if(!this.isBackEventSupported)this.isBackEventSupported=a.objectHasProperty(e,"onhashchange");this.settings={fadeInSpeed:250,fadeOutSpeed:250,preventHide:!1,preventSlideshow:!1,zIndex:1E3,backButtonHideEnabled:!0,enableKeyboard:!0,enableMouseWheel:!0,
mouseWheelSpeed:350,autoStartSlideshow:!1,jQueryMobile:!a.isNothing(e.jQuery)&&!a.isNothing(e.jQuery.mobile),jQueryMobileDialogHash:"&ui-state=dialog",enableUIWebViewRepositionTimeout:!1,uiWebViewResetPositionDelay:500,target:e,preventDefaultTouchEvents:!0,loop:!0,slideSpeed:250,nextPreviousSlideSpeed:0,enableDrag:!0,swipeThreshold:50,swipeTimeThreshold:250,slideTimingFunction:"ease-out",slideshowDelay:3E3,doubleTapSpeed:250,margin:20,imageScaleMethod:"fit",captionAndToolbarHide:!1,captionAndToolbarFlipPosition:!1,
captionAndToolbarAutoHideDelay:5E3,captionAndToolbarOpacity:0.8,captionAndToolbarShowEmptyCaptions:!0,getToolbar:h.Toolbar.getToolbar,allowUserZoom:!0,allowRotationOnUserZoom:!1,maxUserZoom:5,minUserZoom:0.5,doubleTapZoomLevel:2.5,getImageSource:h.Cache.Functions.getImageSource,getImageCaption:h.Cache.Functions.getImageCaption,getImageMetaData:h.Cache.Functions.getImageMetaData,cacheMode:h.Cache.Mode.normal};a.extend(this.settings,d);this.settings.target!==e&&(d=a.DOM.getStyle(this.settings.target,
"position"),(d!=="relative"||d!=="absolute")&&a.DOM.setStyle(this.settings.target,"position","relative"));if(this.settings.target!==e)this.isBackEventSupported=!1,this.settings.backButtonHideEnabled=!1;else if(this.settings.preventHide)this.settings.backButtonHideEnabled=!1;this.cache=new b.CacheClass(c,this.settings)},show:function(b){var c,d;this.backButtonClicked=this._isResettingPosition=!1;if(a.isNumber(b))this.currentIndex=b;else{this.currentIndex=-1;c=0;for(d=this.originalImages.length;c<d;c++)if(this.originalImages[c]===
b){this.currentIndex=c;break}}if(this.currentIndex<0||this.currentIndex>this.originalImages.length-1)throw"Code.PhotoSwipe.PhotoSwipeClass.show: Starting index out of range";this.isAlreadyGettingPage=this.getWindowDimensions();h.setActivateInstance(this);this.windowDimensions=this.getWindowDimensions();this.settings.target===e?a.DOM.addClass(e.document.body,h.CssClasses.buildingBody):a.DOM.addClass(this.settings.target,h.CssClasses.buildingBody);this.createComponents();a.Events.fire(this,{type:h.EventTypes.onBeforeShow,
target:this});this.documentOverlay.fadeIn(this.settings.fadeInSpeed,this.onDocumentOverlayFadeIn.bind(this))},getWindowDimensions:function(){return{width:a.DOM.windowWidth(),height:a.DOM.windowHeight()}},createComponents:function(){this.documentOverlay=new c.DocumentOverlayClass(this.settings);this.carousel=new g.CarouselClass(this.cache,this.settings);this.uiLayer=new i.UILayerClass(this.settings);if(!this.settings.captionAndToolbarHide)this.toolbar=new f.ToolbarClass(this.cache,this.settings)},
resetPosition:function(){if(!this._isResettingPosition){var b=this.getWindowDimensions();if(a.isNothing(this.windowDimensions)||!(b.width===this.windowDimensions.width&&b.height===this.windowDimensions.height))this._isResettingPosition=!0,this.windowDimensions=b,this.destroyZoomPanRotate(),this.documentOverlay.resetPosition(),this.carousel.resetPosition(),a.isNothing(this.toolbar)||this.toolbar.resetPosition(),this.uiLayer.resetPosition(),this._isResettingPosition=!1,a.Events.fire(this,{type:h.EventTypes.onResetPosition,
target:this})}},addEventHandler:function(b,c){a.Events.add(this,b,c)},addEventHandlers:function(){if(a.isNothing(this.windowOrientationChangeHandler))this.windowOrientationChangeHandler=this.onWindowOrientationChange.bind(this),this.windowScrollHandler=this.onWindowScroll.bind(this),this.keyDownHandler=this.onKeyDown.bind(this),this.windowHashChangeHandler=this.onWindowHashChange.bind(this),this.uiLayerTouchHandler=this.onUILayerTouch.bind(this),this.carouselSlideByEndHandler=this.onCarouselSlideByEnd.bind(this),
this.carouselSlideshowStartHandler=this.onCarouselSlideshowStart.bind(this),this.carouselSlideshowStopHandler=this.onCarouselSlideshowStop.bind(this),this.toolbarTapHandler=this.onToolbarTap.bind(this),this.toolbarBeforeShowHandler=this.onToolbarBeforeShow.bind(this),this.toolbarShowHandler=this.onToolbarShow.bind(this),this.toolbarBeforeHideHandler=this.onToolbarBeforeHide.bind(this),this.toolbarHideHandler=this.onToolbarHide.bind(this),this.mouseWheelHandler=this.onMouseWheel.bind(this),this.zoomPanRotateTransformHandler=
this.onZoomPanRotateTransform.bind(this);a.Browser.android?this.orientationEventName="resize":a.Browser.iOS&&!a.Browser.safari?a.Events.add(e.document.body,"orientationchange",this.windowOrientationChangeHandler):this.orientationEventName=!a.isNothing(e.onorientationchange)?"orientationchange":"resize";a.isNothing(this.orientationEventName)||a.Events.add(e,this.orientationEventName,this.windowOrientationChangeHandler);this.settings.target===e&&a.Events.add(e,"scroll",this.windowScrollHandler);this.settings.enableKeyboard&&
a.Events.add(e.document,"keydown",this.keyDownHandler);if(this.isBackEventSupported&&this.settings.backButtonHideEnabled)this.windowHashChangeHandler=this.onWindowHashChange.bind(this),this.settings.jQueryMobile?e.location.hash=this.settings.jQueryMobileDialogHash:(this.currentHistoryHashValue="PhotoSwipe"+(new Date).getTime().toString(),e.location.hash=this.currentHistoryHashValue),a.Events.add(e,"hashchange",this.windowHashChangeHandler);this.settings.enableMouseWheel&&a.Events.add(e,"mousewheel",
this.mouseWheelHandler);a.Events.add(this.uiLayer,a.TouchElement.EventTypes.onTouch,this.uiLayerTouchHandler);a.Events.add(this.carousel,g.EventTypes.onSlideByEnd,this.carouselSlideByEndHandler);a.Events.add(this.carousel,g.EventTypes.onSlideshowStart,this.carouselSlideshowStartHandler);a.Events.add(this.carousel,g.EventTypes.onSlideshowStop,this.carouselSlideshowStopHandler);a.isNothing(this.toolbar)||(a.Events.add(this.toolbar,f.EventTypes.onTap,this.toolbarTapHandler),a.Events.add(this.toolbar,
f.EventTypes.onBeforeShow,this.toolbarBeforeShowHandler),a.Events.add(this.toolbar,f.EventTypes.onShow,this.toolbarShowHandler),a.Events.add(this.toolbar,f.EventTypes.onBeforeHide,this.toolbarBeforeHideHandler),a.Events.add(this.toolbar,f.EventTypes.onHide,this.toolbarHideHandler))},removeEventHandlers:function(){a.Browser.iOS&&!a.Browser.safari&&a.Events.remove(e.document.body,"orientationchange",this.windowOrientationChangeHandler);a.isNothing(this.orientationEventName)||a.Events.remove(e,this.orientationEventName,
this.windowOrientationChangeHandler);a.Events.remove(e,"scroll",this.windowScrollHandler);this.settings.enableKeyboard&&a.Events.remove(e.document,"keydown",this.keyDownHandler);this.isBackEventSupported&&this.settings.backButtonHideEnabled&&a.Events.remove(e,"hashchange",this.windowHashChangeHandler);this.settings.enableMouseWheel&&a.Events.remove(e,"mousewheel",this.mouseWheelHandler);a.isNothing(this.uiLayer)||a.Events.remove(this.uiLayer,a.TouchElement.EventTypes.onTouch,this.uiLayerTouchHandler);
a.isNothing(this.toolbar)||(a.Events.remove(this.carousel,g.EventTypes.onSlideByEnd,this.carouselSlideByEndHandler),a.Events.remove(this.carousel,g.EventTypes.onSlideshowStart,this.carouselSlideshowStartHandler),a.Events.remove(this.carousel,g.EventTypes.onSlideshowStop,this.carouselSlideshowStopHandler));a.isNothing(this.toolbar)||(a.Events.remove(this.toolbar,f.EventTypes.onTap,this.toolbarTapHandler),a.Events.remove(this.toolbar,f.EventTypes.onBeforeShow,this.toolbarBeforeShowHandler),a.Events.remove(this.toolbar,
f.EventTypes.onShow,this.toolbarShowHandler),a.Events.remove(this.toolbar,f.EventTypes.onBeforeHide,this.toolbarBeforeHideHandler),a.Events.remove(this.toolbar,f.EventTypes.onHide,this.toolbarHideHandler))},hide:function(){if(!this.settings.preventHide){if(a.isNothing(this.documentOverlay))throw"Code.PhotoSwipe.PhotoSwipeClass.hide: PhotoSwipe instance is already hidden";if(a.isNothing(this.hiding)){this.clearUIWebViewResetPositionTimeout();this.destroyZoomPanRotate();this.removeEventHandlers();a.Events.fire(this,
{type:h.EventTypes.onBeforeHide,target:this});this.uiLayer.dispose();this.uiLayer=null;if(!a.isNothing(this.toolbar))this.toolbar.dispose(),this.toolbar=null;this.carousel.dispose();this.carousel=null;a.DOM.removeClass(e.document.body,h.CssClasses.activeBody);this.documentOverlay.dispose();this.documentOverlay=null;this._isResettingPosition=!1;h.unsetActivateInstance(this);a.Events.fire(this,{type:h.EventTypes.onHide,target:this});this.goBackInHistory()}}},goBackInHistory:function(){this.isBackEventSupported&&
this.settings.backButtonHideEnabled&&(this.backButtonClicked||e.history.back())},play:function(){!this.isZoomActive()&&!this.settings.preventSlideshow&&!a.isNothing(this.carousel)&&(!a.isNothing(this.toolbar)&&this.toolbar.isVisible&&this.toolbar.fadeOut(),this.carousel.startSlideshow())},stop:function(){this.isZoomActive()||a.isNothing(this.carousel)||this.carousel.stopSlideshow()},previous:function(){this.isZoomActive()||a.isNothing(this.carousel)||this.carousel.previous()},next:function(){this.isZoomActive()||
a.isNothing(this.carousel)||this.carousel.next()},toggleToolbar:function(){this.isZoomActive()||a.isNothing(this.toolbar)||this.toolbar.toggleVisibility(this.currentIndex)},fadeOutToolbarIfVisible:function(){!a.isNothing(this.toolbar)&&this.toolbar.isVisible&&this.settings.captionAndToolbarAutoHideDelay>0&&this.toolbar.fadeOut()},createZoomPanRotate:function(){this.stop();if(this.canUserZoom()&&!this.isZoomActive())a.Events.fire(this,h.EventTypes.onBeforeZoomPanRotateShow),this.zoomPanRotate=new j.ZoomPanRotateClass(this.settings,
this.cache.images[this.currentIndex],this.uiLayer),this.uiLayer.captureSettings.preventDefaultTouchEvents=!0,a.Events.add(this.zoomPanRotate,h.ZoomPanRotate.EventTypes.onTransform,this.zoomPanRotateTransformHandler),a.Events.fire(this,h.EventTypes.onZoomPanRotateShow),!a.isNothing(this.toolbar)&&this.toolbar.isVisible&&this.toolbar.fadeOut()},destroyZoomPanRotate:function(){if(!a.isNothing(this.zoomPanRotate))a.Events.fire(this,h.EventTypes.onBeforeZoomPanRotateHide),a.Events.remove(this.zoomPanRotate,
h.ZoomPanRotate.EventTypes.onTransform,this.zoomPanRotateTransformHandler),this.zoomPanRotate.dispose(),this.zoomPanRotate=null,this.uiLayer.captureSettings.preventDefaultTouchEvents=this.settings.preventDefaultTouchEvents,a.Events.fire(this,h.EventTypes.onZoomPanRotateHide)},canUserZoom:function(){var b;if(a.Browser.msie){if(b=document.createElement("div"),a.isNothing(b.style.msTransform))return!1}else if(!a.Browser.isCSSTransformSupported)return!1;if(!this.settings.allowUserZoom)return!1;if(this.carousel.isSliding)return!1;
b=this.cache.images[this.currentIndex];if(a.isNothing(b))return!1;if(b.isLoading)return!1;return!0},isZoomActive:function(){return!a.isNothing(this.zoomPanRotate)},getCurrentImage:function(){return this.cache.images[this.currentIndex]},onDocumentOverlayFadeIn:function(){e.setTimeout(function(){var b=this.settings.target===e?e.document.body:this.settings.target;a.DOM.removeClass(b,h.CssClasses.buildingBody);a.DOM.addClass(b,h.CssClasses.activeBody);this.addEventHandlers();this.carousel.show(this.currentIndex);
this.uiLayer.show();this.settings.autoStartSlideshow?this.play():a.isNothing(this.toolbar)||this.toolbar.show(this.currentIndex);a.Events.fire(this,{type:h.EventTypes.onShow,target:this});this.setUIWebViewResetPositionTimeout()}.bind(this),250)},setUIWebViewResetPositionTimeout:function(){if(this.settings.enableUIWebViewRepositionTimeout&&a.Browser.iOS&&!a.Browser.safari)a.isNothing(this._uiWebViewResetPositionTimeout)||e.clearTimeout(this._uiWebViewResetPositionTimeout),this._uiWebViewResetPositionTimeout=
e.setTimeout(function(){this.resetPosition();this.setUIWebViewResetPositionTimeout()}.bind(this),this.settings.uiWebViewResetPositionDelay)},clearUIWebViewResetPositionTimeout:function(){a.isNothing(this._uiWebViewResetPositionTimeout)||e.clearTimeout(this._uiWebViewResetPositionTimeout)},onWindowScroll:function(){this.resetPosition()},onWindowOrientationChange:function(){this.resetPosition()},onWindowHashChange:function(){if(e.location.hash!=="#"+(this.settings.jQueryMobile?this.settings.jQueryMobileDialogHash:
this.currentHistoryHashValue))this.backButtonClicked=!0,this.hide()},onKeyDown:function(a){a.keyCode===37?(a.preventDefault(),this.previous()):a.keyCode===39?(a.preventDefault(),this.next()):a.keyCode===38||a.keyCode===40?a.preventDefault():a.keyCode===27?(a.preventDefault(),this.hide()):a.keyCode===32?(this.settings.hideToolbar?this.hide():this.toggleToolbar(),a.preventDefault()):a.keyCode===13&&(a.preventDefault(),this.play())},onUILayerTouch:function(b){if(this.isZoomActive())switch(b.action){case a.TouchElement.ActionTypes.gestureChange:this.zoomPanRotate.zoomRotate(b.scale,
this.settings.allowRotationOnUserZoom?b.rotation:0);break;case a.TouchElement.ActionTypes.gestureEnd:this.zoomPanRotate.setStartingScaleAndRotation(b.scale,this.settings.allowRotationOnUserZoom?b.rotation:0);break;case a.TouchElement.ActionTypes.touchStart:this.zoomPanRotate.panStart(b.point);break;case a.TouchElement.ActionTypes.touchMove:this.zoomPanRotate.pan(b.point);break;case a.TouchElement.ActionTypes.doubleTap:this.destroyZoomPanRotate();this.toggleToolbar();break;case a.TouchElement.ActionTypes.swipeLeft:this.destroyZoomPanRotate();
this.next();this.toggleToolbar();break;case a.TouchElement.ActionTypes.swipeRight:this.destroyZoomPanRotate(),this.previous(),this.toggleToolbar()}else switch(b.action){case a.TouchElement.ActionTypes.touchMove:case a.TouchElement.ActionTypes.swipeLeft:case a.TouchElement.ActionTypes.swipeRight:this.fadeOutToolbarIfVisible();this.carousel.onTouch(b.action,b.point);break;case a.TouchElement.ActionTypes.touchStart:case a.TouchElement.ActionTypes.touchMoveEnd:this.carousel.onTouch(b.action,b.point);
break;case a.TouchElement.ActionTypes.tap:this.toggleToolbar();break;case a.TouchElement.ActionTypes.doubleTap:this.settings.target===e&&(b.point.x-=a.DOM.windowScrollLeft(),b.point.y-=a.DOM.windowScrollTop());var c=this.cache.images[this.currentIndex].imageEl,d=e.parseInt(a.DOM.getStyle(c,"top"),10),f=e.parseInt(a.DOM.getStyle(c,"left"),10),g=f+a.DOM.width(c),c=d+a.DOM.height(c);if(b.point.x<f)b.point.x=f;else if(b.point.x>g)b.point.x=g;if(b.point.y<d)b.point.y=d;else if(b.point.y>c)b.point.y=c;
this.createZoomPanRotate();this.isZoomActive()&&this.zoomPanRotate.zoomAndPanToPoint(this.settings.doubleTapZoomLevel,b.point);break;case a.TouchElement.ActionTypes.gestureStart:this.createZoomPanRotate()}a.Events.fire(this,{type:h.EventTypes.onTouch,target:this,point:b.point,action:b.action})},onCarouselSlideByEnd:function(b){this.currentIndex=b.cacheIndex;a.isNothing(this.toolbar)||(this.toolbar.setCaption(this.currentIndex),this.toolbar.setToolbarStatus(this.currentIndex));a.Events.fire(this,{type:h.EventTypes.onDisplayImage,
target:this,action:b.action,index:b.cacheIndex})},onToolbarTap:function(b){switch(b.action){case f.ToolbarAction.next:this.next();break;case f.ToolbarAction.previous:this.previous();break;case f.ToolbarAction.close:this.hide();break;case f.ToolbarAction.play:this.play()}a.Events.fire(this,{type:h.EventTypes.onToolbarTap,target:this,toolbarAction:b.action,tapTarget:b.tapTarget})},onMouseWheel:function(b){var c=a.Events.getWheelDelta(b);if(!(b.timeStamp-(this.mouseWheelStartTime||0)<this.settings.mouseWheelSpeed))this.mouseWheelStartTime=
b.timeStamp,this.settings.invertMouseWheel&&(c*=-1),c<0?this.next():c>0&&this.previous()},onCarouselSlideshowStart:function(){a.Events.fire(this,{type:h.EventTypes.onSlideshowStart,target:this})},onCarouselSlideshowStop:function(){a.Events.fire(this,{type:h.EventTypes.onSlideshowStop,target:this})},onToolbarBeforeShow:function(){a.Events.fire(this,{type:h.EventTypes.onBeforeCaptionAndToolbarShow,target:this})},onToolbarShow:function(){a.Events.fire(this,{type:h.EventTypes.onCaptionAndToolbarShow,
target:this})},onToolbarBeforeHide:function(){a.Events.fire(this,{type:h.EventTypes.onBeforeCaptionAndToolbarHide,target:this})},onToolbarHide:function(){a.Events.fire(this,{type:h.EventTypes.onCaptionAndToolbarHide,target:this})},onZoomPanRotateTransform:function(b){a.Events.fire(this,{target:this,type:h.EventTypes.onZoomPanRotateTransform,scale:b.scale,rotation:b.rotation,rotationDegs:b.rotationDegs,translateX:b.translateX,translateY:b.translateY})}})})(window,window.klass,window.Code.Util,window.Code.PhotoSwipe.Cache,
window.Code.PhotoSwipe.DocumentOverlay,window.Code.PhotoSwipe.Carousel,window.Code.PhotoSwipe.Toolbar,window.Code.PhotoSwipe.UILayer,window.Code.PhotoSwipe.ZoomPanRotate);
(function(){var g=void 0,h=!0,j=null,l=!1,aa=encodeURIComponent,ba=Infinity,ca=setTimeout,n=Math,da=decodeURIComponent;function ea(a,b){return a.name=b}
var p="push",fa="test",ia="slice",q="replace",ja="load",ka="floor",la="charAt",ma="value",r="indexOf",na="match",oa="port",pa="createElement",qa="path",s="name",v="host",w="toString",x="length",y="prototype",ra="clientWidth",z="split",sa="stopPropagation",ta="scope",A="location",ua="search",B="protocol",va="clientHeight",wa="href",C="substring",xa="apply",ya="navigator",D="join",E="toLowerCase",F;function za(a,b){switch(b){case 0:return""+a;case 1:return 1*a;case 2:return!!a;case 3:return 1E3*a}return a}function Aa(a){return"function"==typeof a}function Ba(a){return a!=g&&-1<(a.constructor+"")[r]("String")}function G(a,b){return g==a||"-"==a&&!b||""==a}function Ca(a){if(!a||""==a)return"";for(;a&&-1<" \n\r\t"[r](a[la](0));)a=a[C](1);for(;a&&-1<" \n\r\t"[r](a[la](a[x]-1));)a=a[C](0,a[x]-1);return a}function Da(){return n.round(2147483647*n.random())}function Ea(){}
function H(a,b){if(aa instanceof Function)return b?encodeURI(a):aa(a);I(68);return escape(a)}function J(a){a=a[z]("+")[D](" ");if(da instanceof Function)try{return da(a)}catch(b){I(17)}else I(68);return unescape(a)}var Fa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ga=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)};
function Ha(a,b){if(a){var c=K[pa]("script");c.type="text/javascript";c.async=h;c.src=a;c.id=b;var d=K.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d);return c}}function L(a){return a&&0<a[x]?a[0]:""}function Ia(a){var b=a?a[x]:0;return 0<b?a[b-1]:""}var Ja=function(){this.prefix="ga.";this.R={}};Ja[y].set=function(a,b){this.R[this.prefix+a]=b};Ja[y].get=function(a){return this.R[this.prefix+a]};Ja[y].contains=function(a){return this.get(a)!==g};function Ka(a){0==a[r]("www.")&&(a=a[C](4));return a[E]()}function La(a,b){var c,d={url:a,protocol:"http",host:"",path:"",d:new Ja,anchor:""};if(!a)return d;c=a[r]("://");0<=c&&(d.protocol=a[C](0,c),a=a[C](c+3));c=a[ua]("/|\\?|#");if(0<=c)d.host=a[C](0,c)[E](),a=a[C](c);else return d.host=a[E](),d;c=a[r]("#");0<=c&&(d.anchor=a[C](c+1),a=a[C](0,c));c=a[r]("?");0<=c&&(Ma(d.d,a[C](c+1)),a=a[C](0,c));d.anchor&&b&&Ma(d.d,d.anchor);a&&"/"==a[la](0)&&(a=a[C](1));d.path=a;return d}
function Oa(a,b){function c(a){var b=(a.hostname||"")[z](":")[0][E](),c=(a[B]||"")[E](),c=1*a[oa]||("http:"==c?80:"https:"==c?443:"");a=a.pathname||"";0==a[r]("/")||(a="/"+a);return[b,""+c,a]}var d=b||K[pa]("a");d.href=K[A][wa];var e=(d[B]||"")[E](),f=c(d),k=d[ua]||"",m=e+"//"+f[0]+(f[1]?":"+f[1]:"");0==a[r]("//")?a=e+a:0==a[r]("/")?a=m+a:!a||0==a[r]("?")?a=m+f[2]+(a||k):0>a[z]("/")[0][r](":")&&(a=m+f[2][C](0,f[2].lastIndexOf("/"))+"/"+a);d.href=a;e=c(d);return{protocol:(d[B]||"")[E](),host:e[0],
port:e[1],path:e[2],Oa:d[ua]||"",url:a||""}}function Ma(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b)[p](c)}for(var d=Ca(b)[z]("&"),e=0;e<d[x];e++)if(d[e]){var f=d[e][r]("=");0>f?c(d[e],"1"):c(d[e][C](0,f),d[e][C](f+1))}}function Pa(a,b){if(G(a)||"["==a[la](0)&&"]"==a[la](a[x]-1))return"-";var c=K.domain;return a[r](c+(b&&"/"!=b?b:""))==(0==a[r]("http://")?7:0==a[r]("https://")?8:0)?"0":a};var Qa=0;function Ra(a,b,c){!(1<=Qa)&&!(1<=100*n.random())&&(a=["utmt=error","utmerr="+a,"utmwv=5.3.8","utmn="+Da(),"utmsp=1"],b&&a[p]("api="+b),c&&a[p]("msg="+H(c[C](0,100))),M.w&&a[p]("aip=1"),Sa(a[D]("&")),Qa++)};var Ta=0,Ua={};function N(a){return Va("x"+Ta++,a)}function Va(a,b){Ua[a]=!!b;return a}
var Wa=N(),Xa=Va("anonymizeIp"),Ya=N(),$a=N(),ab=N(),bb=N(),O=N(),P=N(),cb=N(),db=N(),eb=N(),fb=N(),gb=N(),hb=N(),ib=N(),jb=N(),kb=N(),lb=N(),nb=N(),ob=N(),pb=N(),qb=N(),rb=N(),sb=N(),tb=N(),ub=N(),vb=N(),wb=N(),xb=N(),yb=N(),zb=N(),Ab=N(),Bb=N(),Cb=N(),Db=N(),Eb=N(),Fb=N(h),Gb=Va("currencyCode"),Hb=Va("page"),Ib=Va("title"),Jb=N(),Kb=N(),Lb=N(),Mb=N(),Nb=N(),Ob=N(),Pb=N(),Qb=N(),Rb=N(),Q=N(h),Sb=N(h),Tb=N(h),Ub=N(h),Vb=N(h),Wb=N(h),Zb=N(h),$b=N(h),ac=N(h),bc=N(h),cc=N(h),R=N(h),dc=N(h),ec=N(h),fc=
N(h),gc=N(h),hc=N(h),ic=N(h),jc=N(h),S=N(h),kc=N(h),lc=N(h),mc=N(h),nc=N(h),oc=N(h),pc=N(h),qc=N(h),rc=Va("campaignParams"),sc=N(),tc=Va("hitCallback"),uc=N();N();var vc=N(),wc=N(),xc=N(),yc=N(),zc=N(),Ac=N(),Bc=N(),Cc=N(),Dc=N(),Ec=N(),Fc=N(),Gc=N(),Hc=N(),Ic=N();N();var Mc=N(),Nc=N(),Oc=N();function Pc(a){var b=this.plugins_;if(b)return b.get(a)}var T=function(a,b,c,d){a[b]=function(){try{return d!=g&&I(d),c[xa](this,arguments)}catch(a){throw Ra("exc",b,a&&a[s]),a;}}},Qc=function(a,b,c,d){U[y][a]=function(){try{return I(c),za(this.a.get(b),d)}catch(e){throw Ra("exc",a,e&&e[s]),e;}}},V=function(a,b,c,d,e){U[y][a]=function(f){try{I(c),e==g?this.a.set(b,za(f,d)):this.a.set(b,e)}catch(k){throw Ra("exc",a,k&&k[s]),k;}}};var Rc=RegExp(/(^|\.)doubleclick\.net$/i),Sc=function(a,b){return Rc[fa](K[A].hostname)?h:"/"!==b?l:(0==a[r]("www.google.")||0==a[r](".google.")||0==a[r]("google."))&&!(-1<a[r]("google.org"))?h:l},Tc=function(a){var b=a.get(bb),c=a.c(P,"/");Sc(b,c)&&a[sa]()};var Zc=function(){var a={},b={},c=new Uc;this.g=function(a,b){c.add(a,b)};var d=new Uc;this.e=function(a,b){d.add(a,b)};var e=l,f=l,k=h;this.T=function(){e=h};this.j=function(a){this[ja]();this.set(sc,a,h);a=new Vc(this);e=l;d.execute(this);e=h;b={};this.n();a.Ja()};this.load=function(){e&&(e=l,this.Ka(),Wc(this),f||(f=h,c.execute(this),Xc(this),Wc(this)),e=h)};this.n=function(){if(e)if(f)e=l,Xc(this),e=h;else this[ja]()};this.get=function(c){Ua[c]&&this[ja]();return b[c]!==g?b[c]:a[c]};this.set=
function(c,d,e){Ua[c]&&this[ja]();e?b[c]=d:a[c]=d;Ua[c]&&this.n()};this.z=function(b){a[b]=this.b(b,0)+1};this.b=function(a,b){var c=this.get(a);return c==g||""===c?b:1*c};this.c=function(a,b){var c=this.get(a);return c==g?b:c+""};this.Ka=function(){if(k){var b=this.c(bb,""),c=this.c(P,"/");Sc(b,c)||(a[O]=a[hb]&&""!=b?Yc(b):1,k=l)}}};Zc[y].stopPropagation=function(){throw"aborted";};
var Vc=function(a){var b=this;this.q=0;var c=a.get(tc);this.Ua=function(){0<b.q&&c&&(b.q--,b.q||c())};this.Ja=function(){!b.q&&c&&ca(c,10)};a.set(uc,b,h)};function $c(a,b){b=b||[];for(var c=0;c<b[x];c++){var d=b[c];if(""+a==d||0==d[r](a+"."))return d}return"-"}
var bd=function(a,b,c){c=c?"":a.c(O,"1");b=b[z](".");if(6!==b[x]||ad(b[0],c))return l;c=1*b[1];var d=1*b[2],e=1*b[3],f=1*b[4];b=1*b[5];if(!(0<=c&&0<d&&0<e&&0<f&&0<=b))return l;a.set(Q,c);a.set(Vb,d);a.set(Wb,e);a.set(Zb,f);a.set($b,b);return h},cd=function(a){var b=a.get(Q),c=a.get(Vb),d=a.get(Wb),e=a.get(Zb),f=a.b($b,1);return[a.b(O,1),b!=g?b:"-",c||"-",d||"-",e||"-",f][D](".")},dd=function(a){return[a.b(O,1),a.b(cc,0),a.b(R,1),a.b(dc,0)][D](".")},ed=function(a,b,c){c=c?"":a.c(O,"1");var d=b[z](".");
if(4!==d[x]||ad(d[0],c))d=j;a.set(cc,d?1*d[1]:0);a.set(R,d?1*d[2]:10);a.set(dc,d?1*d[3]:a.get(ab));return d!=j||!ad(b,c)},fd=function(a,b){var c=H(a.c(Tb,"")),d=[],e=a.get(Fb);if(!b&&e){for(var f=0;f<e[x];f++){var k=e[f];k&&1==k[ta]&&d[p](f+"="+H(k[s])+"="+H(k[ma])+"=1")}0<d[x]&&(c+="|"+d[D]("^"))}return c?a.b(O,1)+"."+c:j},gd=function(a,b,c){c=c?"":a.c(O,"1");b=b[z](".");if(2>b[x]||ad(b[0],c))return l;b=b[ia](1)[D](".")[z]("|");0<b[x]&&a.set(Tb,J(b[0]));if(1>=b[x])return h;b=b[1][z](-1==b[1][r](",")?
"^":",");for(c=0;c<b[x];c++){var d=b[c][z]("=");if(4==d[x]){var e={};ea(e,J(d[1]));e.value=J(d[2]);e.scope=1;a.get(Fb)[d[0]]=e}}return h},hd=function(a){var b;b=function(b,e){if(!G(a.get(b))){var f=a.c(b,""),f=f[z](" ")[D]("%20"),f=f[z]("+")[D]("%20");c[p](e+"="+f)}};var c=[];b(ic,"utmcid");b(nc,"utmcsr");b(S,"utmgclid");b(kc,"utmgclsrc");b(lc,"utmdclid");b(mc,"utmdsid");b(jc,"utmccn");b(oc,"utmcmd");b(pc,"utmctr");b(qc,"utmcct");return(b=c[D]("|"))?[a.b(O,1),a.b(ec,0),a.b(fc,1),a.b(gc,1),b][D]("."):
""},id=function(a,b,c){c=c?"":a.c(O,"1");b=b[z](".");if(5>b[x]||ad(b[0],c))return a.set(ec,g),a.set(fc,g),a.set(gc,g),a.set(ic,g),a.set(jc,g),a.set(nc,g),a.set(oc,g),a.set(pc,g),a.set(qc,g),a.set(S,g),a.set(kc,g),a.set(lc,g),a.set(mc,g),l;a.set(ec,1*b[1]);a.set(fc,1*b[2]);a.set(gc,1*b[3]);var d=b[ia](4)[D](".");b=function(a){return(a=d[na](a+"=(.*?)(?:\\|utm|$)"))&&2==a[x]?a[1]:g};c=function(b,c){c?(c=e?J(c):c[z]("%20")[D](" "),a.set(b,c)):a.set(b,g)};-1==d[r]("=")&&(d=J(d));var e="2"==b("utmcvr");
c(ic,b("utmcid"));c(jc,b("utmccn"));c(nc,b("utmcsr"));c(oc,b("utmcmd"));c(pc,b("utmctr"));c(qc,b("utmcct"));c(S,b("utmgclid"));c(kc,b("utmgclsrc"));c(lc,b("utmdclid"));c(mc,b("utmdsid"));return h},ad=function(a,b){return b?a!=b:!/^\d+$/[fa](a)};var Uc=function(){this.filters=[]};Uc[y].add=function(a,b){this.filters[p]({name:a,s:b})};Uc[y].execute=function(a){try{for(var b=0;b<this.filters[x];b++)this.filters[b].s.call(W,a)}catch(c){}};function jd(a){100!=a.get(vb)&&a.get(Q)%1E4>=100*a.get(vb)&&a[sa]()}function kd(a){ld(a.get(Wa))&&a[sa]()}function md(a){"file:"==K[A][B]&&a[sa]()}function nd(a){a.get(Ib)||a.set(Ib,K.title,h);a.get(Hb)||a.set(Hb,K[A].pathname+K[A][ua],h)};var od=new function(){var a=[];this.set=function(b){a[b]=h};this.Xa=function(){for(var b=[],c=0;c<a[x];c++)a[c]&&(b[n[ka](c/6)]=b[n[ka](c/6)]^1<<c%6);for(c=0;c<b[x];c++)b[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[la](b[c]||0);return b[D]("")+"~"}};function I(a){od.set(a)};var W=window,K=document,ld=function(a){var b=W._gaUserPrefs;return b&&b.ioo&&b.ioo()||!!a&&W["ga-disable-"+a]===h},pd=function(a){var b=[],c=K.cookie[z](";");a=RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c[x];d++){var e=c[d][na](a);e&&b[p](e[1])}return b},X=function(a,b,c,d,e,f){e=ld(e)?l:Sc(d,c)?l:h;if(e){if(b&&0<=W[ya].userAgent[r]("Firefox")){b=b[q](/\n|\r/g," ");e=0;for(var k=b[x];e<k;++e){var m=b.charCodeAt(e)&255;if(10==m||13==m)b=b[C](0,e)+"?"+b[C](e+1)}}b&&2E3<b[x]&&(b=b[C](0,2E3),I(69));
a=a+"="+b+"; path="+c+"; ";f&&(a+="expires="+(new Date((new Date).getTime()+f)).toGMTString()+"; ");d&&(a+="domain="+d+";");K.cookie=a}};var qd,rd,sd=function(){if(!qd){var a={},b=W[ya],c=W.screen;a.Q=c?c.width+"x"+c.height:"-";a.P=c?c.colorDepth+"-bit":"-";a.language=(b&&(b.language||b.browserLanguage)||"-")[E]();a.javaEnabled=b&&b.javaEnabled()?1:0;a.characterSet=K.characterSet||K.charset||"-";try{var d=K.documentElement,e=K.body,f=e&&e[ra]&&e[va],b=[];d&&(d[ra]&&d[va])&&("CSS1Compat"===K.compatMode||!f)?b=[d[ra],d[va]]:f&&(b=[e[ra],e[va]]);a.Wa=b[D]("x")}catch(k){I(135)}qd=a}},td=function(){sd();for(var a=qd,b=W[ya],a=b.appName+
b.version+a.language+b.platform+b.userAgent+a.javaEnabled+a.Q+a.P+(K.cookie?K.cookie:"")+(K.referrer?K.referrer:""),b=a[x],c=W.history[x];0<c;)a+=c--^b++;return Yc(a)},ud=function(a){sd();var b=qd;a.set(Lb,b.Q);a.set(Mb,b.P);a.set(Pb,b.language);a.set(Qb,b.characterSet);a.set(Nb,b.javaEnabled);a.set(Rb,b.Wa);if(a.get(ib)&&a.get(jb)){if(!(b=rd)){var c,d,e;d="ShockwaveFlash";if((b=(b=W[ya])?b.plugins:g)&&0<b[x])for(c=0;c<b[x]&&!e;c++)d=b[c],-1<d[s][r]("Shockwave Flash")&&(e=d.description[z]("Shockwave Flash ")[1]);
else{d=d+"."+d;try{c=new ActiveXObject(d+".7"),e=c.GetVariable("$version")}catch(f){}if(!e)try{c=new ActiveXObject(d+".6"),e="WIN 6,0,21,0",c.AllowScriptAccess="always",e=c.GetVariable("$version")}catch(k){}if(!e)try{c=new ActiveXObject(d),e=c.GetVariable("$version")}catch(m){}e&&(e=e[z](" ")[1][z](","),e=e[0]+"."+e[1]+" r"+e[2])}b=e?e:"-"}rd=b;a.set(Ob,rd)}else a.set(Ob,"-")};var vd=function(a){if(Aa(a))this.s=a;else{var b=a[0],c=b.lastIndexOf(":"),d=b.lastIndexOf(".");this.h=this.i=this.l="";-1==c&&-1==d?this.h=b:-1==c&&-1!=d?(this.i=b[C](0,d),this.h=b[C](d+1)):-1!=c&&-1==d?(this.l=b[C](0,c),this.h=b[C](c+1)):c>d?(this.i=b[C](0,d),this.l=b[C](d+1,c),this.h=b[C](c+1)):(this.i=b[C](0,d),this.h=b[C](d+1));this.k=a[ia](1);this.Ma=!this.l&&"_require"==this.h;this.J=!this.i&&!this.l&&"_provide"==this.h}},Y=function(){T(Y[y],"push",Y[y][p],5);T(Y[y],"_getPlugin",Pc,121);T(Y[y],
"_createAsyncTracker",Y[y].Sa,33);T(Y[y],"_getAsyncTracker",Y[y].Ta,34);this.I=new Ja;this.p=[]};F=Y[y];F.Na=function(a,b,c){var d=this.I.get(a);if(!Aa(d))return l;b.plugins_=b.plugins_||new Ja;b.plugins_.set(a,new d(b,c||{}));return h};F.push=function(a){var b=Z.Va[xa](this,arguments),b=Z.p.concat(b);for(Z.p=[];0<b[x]&&!Z.O(b[0])&&!(b.shift(),0<Z.p[x]););Z.p=Z.p.concat(b);return 0};F.Va=function(a){for(var b=[],c=0;c<arguments[x];c++)try{var d=new vd(arguments[c]);d.J?this.O(d):b[p](d)}catch(e){}return b};
F.O=function(a){try{if(a.s)a.s[xa](W);else if(a.J)this.I.set(a.k[0],a.k[1]);else{var b="_gat"==a.i?M:"_gaq"==a.i?Z:M.u(a.i);if(a.Ma){if(!this.Na(a.k[0],b,a.k[2])){if(!a.Pa){var c=Oa(""+a.k[1]);var d=c[B],e=K[A][B];var f;if(f="https:"==d||d==e?h:"http:"!=d?l:"http:"==e){var k;a:{var m=Oa(K[A][wa]);if(!(c.Oa||0<=c.url[r]("?")||0<=c[qa][r]("://")||c[v]==m[v]&&c[oa]==m[oa]))for(var t="http:"==c[B]?80:443,u=M.S,b=0;b<u[x];b++)if(c[v]==u[b][0]&&(c[oa]||t)==(u[b][1]||t)&&0==c[qa][r](u[b][2])){k=h;break a}k=
l}f=k&&!ld()}f&&(a.Pa=Ha(c.url))}return h}}else a.l&&(b=b.plugins_.get(a.l)),b[a.h][xa](b,a.k)}}catch(Za){}};F.Sa=function(a,b){return M.r(a,b||"")};F.Ta=function(a){return M.u(a)};var yd=function(){function a(a,b,c,d){g==f[a]&&(f[a]={});g==f[a][b]&&(f[a][b]=[]);f[a][b][c]=d}function b(a,b,c){if(g!=f[a]&&g!=f[a][b])return f[a][b][c]}function c(a,b){if(g!=f[a]&&g!=f[a][b]){f[a][b]=g;var c=h,d;for(d=0;d<k[x];d++)if(g!=f[a][k[d]]){c=l;break}c&&(f[a]=g)}}function d(a){var b="",c=l,d,e;for(d=0;d<k[x];d++)if(e=a[k[d]],g!=e){c&&(b+=k[d]);for(var c=[],f=g,ha=g,ha=0;ha<e[x];ha++)if(g!=e[ha]){f="";ha!=mb&&g==e[ha-1]&&(f+=ha[w]()+Za);for(var Cd=e[ha],Jc="",Yb=g,Kc=g,Lc=g,Yb=0;Yb<Cd[x];Yb++)Kc=
Cd[la](Yb),Lc=Na[Kc],Jc+=g!=Lc?Lc:Kc;f+=Jc;c[p](f)}b+=m+c[D](u)+t;c=l}else c=h;return b}var e=this,f=[],k=["k","v"],m="(",t=")",u="*",Za="!",Na={"'":"'0"};Na[t]="'1";Na[u]="'2";Na[Za]="'3";var mb=1;e.Ra=function(a){return g!=f[a]};e.A=function(){for(var a="",b=0;b<f[x];b++)g!=f[b]&&(a+=b[w]()+d(f[b]));return a};e.Qa=function(a){if(a==g)return e.A();for(var b=a.A(),c=0;c<f[x];c++)g!=f[c]&&!a.Ra(c)&&(b+=c[w]()+d(f[c]));return b};e.f=function(b,c,d){if(!wd(d))return l;a(b,"k",c,d);return h};e.o=function(b,
c,d){if(!xd(d))return l;a(b,"v",c,d[w]());return h};e.getKey=function(a,c){return b(a,"k",c)};e.N=function(a,c){return b(a,"v",c)};e.L=function(a){c(a,"k")};e.M=function(a){c(a,"v")};T(e,"_setKey",e.f,89);T(e,"_setValue",e.o,90);T(e,"_getKey",e.getKey,87);T(e,"_getValue",e.N,88);T(e,"_clearKey",e.L,85);T(e,"_clearValue",e.M,86)};function wd(a){return"string"==typeof a}function xd(a){return"number"!=typeof a&&(g==Number||!(a instanceof Number))||n.round(a)!=a||NaN==a||a==ba?l:h};var zd=function(a){var b=W.gaGlobal;a&&!b&&(W.gaGlobal=b={});return b},Ad=function(){var a=zd(h).hid;a==j&&(a=Da(),zd(h).hid=a);return a},Dd=function(a){a.set(Kb,Ad());var b=zd();if(b&&b.dh==a.get(O)){var c=b.sid;c&&("0"==c&&I(112),a.set(Zb,c),a.get(Sb)&&a.set(Wb,c));b=b.vid;a.get(Sb)&&b&&(b=b[z]("."),1*b[1]||I(112),a.set(Q,1*b[0]),a.set(Vb,1*b[1]))}};var Ed,Fd=function(a,b,c){var d=a.c(bb,""),e=a.c(P,"/"),f=a.b(cb,0);a=a.c(Wa,"");X(b,c,e,d,a,f)},Xc=function(a){var b=a.c(bb,"");a.b(O,1);var c=a.c(P,"/"),d=a.c(Wa,"");X("__utma",cd(a),c,b,d,a.get(cb));X("__utmb",dd(a),c,b,d,a.get(db));X("__utmc",""+a.b(O,1),c,b,d);var e=hd(a,h);e?X("__utmz",e,c,b,d,a.get(eb)):X("__utmz","",c,b,"",-1);(e=fd(a,l))?X("__utmv",e,c,b,d,a.get(cb)):X("__utmv","",c,b,"",-1)},Wc=function(a){var b=a.b(O,1);if(!bd(a,$c(b,pd("__utma"))))return a.set(Ub,h),l;var c=!ed(a,$c(b,
pd("__utmb")));a.set(bc,c);id(a,$c(b,pd("__utmz")));gd(a,$c(b,pd("__utmv")));Ed=!c;return h},Gd=function(a){!Ed&&!(0<pd("__utmb")[x])&&(X("__utmd","1",a.c(P,"/"),a.c(bb,""),a.c(Wa,""),1E4),0==pd("__utmd")[x]&&a[sa]())};var Jd=function(a){a.get(Q)==g?Hd(a):a.get(Ub)&&!a.get(Mc)?Hd(a):a.get(bc)&&Id(a)},Kd=function(a){a.get(hc)&&!a.get(ac)&&(Id(a),a.set(fc,a.get($b)))},Hd=function(a){var b=a.get(ab);a.set(Sb,h);a.set(Q,Da()^td(a)&2147483647);a.set(Tb,"");a.set(Vb,b);a.set(Wb,b);a.set(Zb,b);a.set($b,1);a.set(ac,h);a.set(cc,0);a.set(R,10);a.set(dc,b);a.set(Fb,[]);a.set(Ub,l);a.set(bc,l)},Id=function(a){a.set(Wb,a.get(Zb));a.set(Zb,a.get(ab));a.z($b);a.set(ac,h);a.set(cc,0);a.set(R,10);a.set(dc,a.get(ab));a.set(bc,l)};var Ld="daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q netscape:query cnn:query about:terms mamma:q voila:rdata virgilio:qs live:q baidu:wd alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT wp:szukaj onet:qt yam:k kvasir:q ozu:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q search.centrum.cz:q".split(" "),Sd=function(a){if(a.get(kb)&&
!a.get(Mc)){for(var b=!G(a.get(ic))||!G(a.get(nc))||!G(a.get(S))||!G(a.get(lc)),c={},d=0;d<Md[x];d++){var e=Md[d];c[e]=a.get(e)}(d=a.get(rc))?(I(149),e=new Ja,Ma(e,d),d=e):d=La(K[A][wa],a.get(gb)).d;if(!("1"==Ia(d.get(a.get(ub)))&&b)){var f=d,k=function(b,c){c=c||"-";var d=Ia(f.get(a.get(b)));return d&&"-"!=d?J(d):c},d=Ia(f.get(a.get(nb)))||"-",e=Ia(f.get(a.get(qb)))||"-",m=Ia(f.get(a.get(pb)))||"-",t=Ia(f.get("gclsrc"))||"-",u=Ia(f.get("dclid"))||"-",Za=k(ob,"(not set)"),Na=k(rb,"(not set)"),mb=
k(sb),k=k(tb);if(G(d)&&G(m)&&G(u)&&G(e))d=l;else{var Xb=!G(m)&&!G(t),Xb=G(e)&&(!G(u)||Xb),Bd=G(mb);if(Xb||Bd){var ga=Nd(a),ga=La(ga,h);if((ga=Od(a,ga))&&!G(ga[1]&&!ga[2]))Xb&&(e=ga[0]),Bd&&(mb=ga[1])}Pd(a,d,e,m,t,u,Za,Na,mb,k);d=h}d=d||Qd(a);!d&&(!b&&a.get(ac))&&(Pd(a,g,"(direct)",g,g,g,"(direct)","(none)",g,g),d=h);if(d&&(a.set(hc,Rd(a,c)),b="(direct)"==a.get(nc)&&"(direct)"==a.get(jc)&&"(none)"==a.get(oc),a.get(hc)||a.get(ac)&&!b))a.set(ec,a.get(ab)),a.set(fc,a.get($b)),a.z(gc)}}},Qd=function(a){var b=
Nd(a),c=La(b,h);if(!(b!=g&&b!=j&&""!=b&&"0"!=b&&"-"!=b&&0<=b[r]("://"))||c&&-1<c[v][r]("google")&&c.d.contains("q")&&"cse"==c[qa])return l;if((b=Od(a,c))&&!b[2])return Pd(a,g,b[0],g,g,g,"(organic)","organic",b[1],g),h;if(b||!a.get(ac))return l;a:{for(var b=a.get(Bb),d=Ka(c[v]),e=0;e<b[x];++e)if(-1<d[r](b[e])){a=l;break a}Pd(a,g,d,g,g,g,"(referral)","referral",g,"/"+c[qa]);a=h}return a},Od=function(a,b){for(var c=a.get(zb),d=0;d<c[x];++d){var e=c[d][z](":");if(-1<b[v][r](e[0][E]())){var f=b.d.get(e[1]);
if(f&&(f=L(f),!f&&-1<b[v][r]("google.")&&(f="(not provided)"),!e[3]||-1<b.url[r](e[3]))){a:{for(var c=f,d=a.get(Ab),c=J(c)[E](),k=0;k<d[x];++k)if(c==d[k]){c=h;break a}c=l}return[e[2]||e[0],f,c]}}}return j},Pd=function(a,b,c,d,e,f,k,m,t,u){a.set(ic,b);a.set(nc,c);a.set(S,d);a.set(kc,e);a.set(lc,f);a.set(jc,k);a.set(oc,m);a.set(pc,t);a.set(qc,u)},Md=[jc,ic,S,lc,nc,oc,pc,qc],Rd=function(a,b){function c(a){a=(""+a)[z]("+")[D]("%20");return a=a[z](" ")[D]("%20")}function d(c){var d=""+(a.get(c)||"");c=
""+(b[c]||"");return 0<d[x]&&d==c}if(d(S)||d(lc))return I(131),l;for(var e=0;e<Md[x];e++){var f=Md[e],k=b[f]||"-",f=a.get(f)||"-";if(c(k)!=c(f))return h}return l},Td=RegExp(/^https:\/\/(www\.)?google(\.com?)?(\.[a-z]{2}t?)?\/?$/i),Nd=function(a){a=Pa(a.get(Jb),a.get(P));try{if(Td[fa](a))return I(136),a+"?q="}catch(b){I(145)}return a};var Ud,Vd,Wd=function(a){Ud=a.c(S,"");Vd=a.c(kc,"")},Xd=function(a){var b=a.c(S,""),c=a.c(kc,"");b!=Ud&&(-1<c[r]("ds")?a.set(mc,g):!G(Ud)&&-1<Vd[r]("ds")&&a.set(mc,Ud))};var Zd=function(a){Yd(a,K[A][wa])?(a.set(Mc,h),I(12)):a.set(Mc,l)},Yd=function(a,b){if(!a.get(fb))return l;var c=La(b,a.get(gb)),d=L(c.d.get("__utma")),e=L(c.d.get("__utmb")),f=L(c.d.get("__utmc")),k=L(c.d.get("__utmx")),m=L(c.d.get("__utmz")),t=L(c.d.get("__utmv")),c=L(c.d.get("__utmk"));if(Yc(""+d+e+f+k+m+t)!=c){d=J(d);e=J(e);f=J(f);k=J(k);f=$d(d+e+f+k,m,t,c);if(!f)return l;m=f[0];t=f[1]}if(!bd(a,d,h))return l;ed(a,e,h);id(a,m,h);gd(a,t,h);ae(a,k,h);return h},ce=function(a,b,c){var d;d=cd(a)||"-";
var e=dd(a)||"-",f=""+a.b(O,1)||"-",k=be(a)||"-",m=hd(a,l)||"-";a=fd(a,l)||"-";var t=Yc(""+d+e+f+k+m+a),u=[];u[p]("__utma="+d);u[p]("__utmb="+e);u[p]("__utmc="+f);u[p]("__utmx="+k);u[p]("__utmz="+m);u[p]("__utmv="+a);u[p]("__utmk="+t);d=u[D]("&");if(!d)return b;e=b[r]("#");if(c)return 0>e?b+"#"+d:b+"&"+d;c="";f=b[r]("?");0<e&&(c=b[C](e),b=b[C](0,e));return 0>f?b+"?"+d+c:b+"&"+d+c},$d=function(a,b,c,d){for(var e=0;3>e;e++){for(var f=0;3>f;f++){if(d==Yc(a+b+c))return I(127),[b,c];var k=b[q](/ /g,"%20"),
m=c[q](/ /g,"%20");if(d==Yc(a+k+m))return I(128),[k,m];k=k[q](/\+/g,"%20");m=m[q](/\+/g,"%20");if(d==Yc(a+k+m))return I(129),[k,m];try{var t=b[na]("utmctr=(.*?)(?:\\|utm|$)");if(t&&2==t[x]&&(k=b[q](t[1],H(J(t[1]))),d==Yc(a+k+c)))return I(139),[k,c]}catch(u){}b=J(b)}c=J(c)}};var de="|",fe=function(a,b,c,d,e,f,k,m,t){var u=ee(a,b);u||(u={},a.get(Cb)[p](u));u.id_=b;u.affiliation_=c;u.total_=d;u.tax_=e;u.shipping_=f;u.city_=k;u.state_=m;u.country_=t;u.items_=u.items_||[];return u},ge=function(a,b,c,d,e,f,k){a=ee(a,b)||fe(a,b,"",0,0,0,"","","");var m;a:{if(a&&a.items_){m=a.items_;for(var t=0;t<m[x];t++)if(m[t].sku_==c){m=m[t];break a}}m=j}t=m||{};t.transId_=b;t.sku_=c;t.name_=d;t.category_=e;t.price_=f;t.quantity_=k;m||a.items_[p](t);return t},ee=function(a,b){for(var c=
a.get(Cb),d=0;d<c[x];d++)if(c[d].id_==b)return c[d];return j};var he,ie=function(a){if(!he){var b;b=K[A].hash;var c=W[s],d=/^#?gaso=([^&]*)/;if(c=(b=(b=b&&b[na](d)||c&&c[na](d))?b[1]:L(pd("GASO")))&&b[na](/^(?:[|!]([-0-9a-z.]{1,40})[|!])?([-.\w]{10,1200})$/i))Fd(a,"GASO",""+b),M._gasoDomain=a.get(bb),M._gasoCPath=a.get(P),a=c[1],Ha("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+Da(),"_gasojs");he=h}};var ae=function(a,b,c){c&&(b=J(b));c=a.b(O,1);b=b[z](".");!(2>b[x])&&/^\d+$/[fa](b[0])&&(b[0]=""+c,Fd(a,"__utmx",b[D](".")))},be=function(a,b){var c=$c(a.get(O),pd("__utmx"));"-"==c&&(c="");return b?H(c):c};var ke=function(a,b){var c=n.min(a.b(Dc,0),100);if(a.b(Q,0)%100>=c)return l;a:{if(c=(c=W.performance||W.webkitPerformance)&&c.timing){var d=c.navigationStart;if(0==d)I(133);else{c=[c.loadEventStart-d,c.domainLookupEnd-c.domainLookupStart,c.connectEnd-c.connectStart,c.responseStart-c.requestStart,c.responseEnd-c.responseStart,c.fetchStart-d,c.domInteractive-d,c.domContentLoadedEventStart-d];break a}}c=g}c||(W.top!=W?c=g:(d=(c=W.external)&&c.onloadT,c&&!c.isValidLoadTime&&(d=g),2147483648<d&&(d=g),
0<d&&c.setPageReadyTime(),c=d==g?g:[d]));if(c==g)return l;d=c[0];if(d==g||d==ba||isNaN(d))return l;if(0<d){a:{for(d=1;d<c[x];d++)if(isNaN(c[d])||c[d]==ba||0>c[d]){d=l;break a}d=h}d?b(je(c)):b(je(c[ia](0,1)))}else Fa(W,"load",function(){ke(a,b)},l);return h},me=function(a,b,c,d){var e=new yd;e.f(14,90,b[C](0,64));e.f(14,91,a[C](0,64));e.f(14,92,""+le(c));d!=g&&e.f(14,93,d[C](0,64));e.o(14,90,c);return e},le=function(a){return isNaN(a)||0>a?0:5E3>a?10*n[ka](a/10):5E4>a?100*n[ka](a/100):41E5>a?1E3*n[ka](a/
1E3):41E5},je=function(a){for(var b=new yd,c=0;c<a[x];c++)b.f(14,c+1,""+le(a[c])),b.o(14,c+1,a[c]);return b};var U=function(a,b,c){function d(a){return function(b){if((b=b.get(Nc)[a])&&b[x])for(var c={type:a,target:e,stopPropagation:function(){throw"aborted";}},d=0;d<b[x];d++)b[d].call(e,c)}}var e=this;this.a=new Zc;this.get=function(a){return this.a.get(a)};this.set=function(a,b,c){this.a.set(a,b,c)};this.set(Wa,b||"UA-XXXXX-X");this.set($a,a||"");this.set(Ya,c||"");this.set(ab,n.round((new Date).getTime()/1E3));this.set(P,"/");this.set(cb,63072E6);this.set(eb,15768E6);this.set(db,18E5);this.set(fb,l);
this.set(yb,50);this.set(gb,l);this.set(hb,h);this.set(ib,h);this.set(jb,h);this.set(kb,h);this.set(lb,h);this.set(ob,"utm_campaign");this.set(nb,"utm_id");this.set(pb,"gclid");this.set(qb,"utm_source");this.set(rb,"utm_medium");this.set(sb,"utm_term");this.set(tb,"utm_content");this.set(ub,"utm_nooverride");this.set(vb,100);this.set(Dc,1);this.set(Ec,l);this.set(wb,"/__utm.gif");this.set(xb,1);this.set(Cb,[]);this.set(Fb,[]);this.set(zb,Ld[ia](0));this.set(Ab,[]);this.set(Bb,[]);this.B("auto");this.set(Jb,
K.referrer);a=this.a;try{var f=La(K[A][wa],l),k=da(Ia(f.d.get("utm_referrer")))||"";k&&a.set(Jb,k);var m=W.gaData&&W.gaData.expId;m||(m=da(L(f.d.get("utm_expid")))||"");m&&a.set(Oc,""+m)}catch(t){I(146)}this.set(Nc,{hit:[],load:[]});this.a.g("0",Zd);this.a.g("1",Wd);this.a.g("2",Jd);this.a.g("3",Sd);this.a.g("4",Xd);this.a.g("5",Kd);this.a.g("6",d("load"));this.a.g("7",ie);this.a.e("A",kd);this.a.e("B",md);this.a.e("C",Jd);this.a.e("D",jd);this.a.e("E",Tc);this.a.e("F",ne);this.a.e("G",Gd);this.a.e("H",
nd);this.a.e("I",ud);this.a.e("J",Dd);this.a.e("K",d("hit"));this.a.e("L",oe);this.a.e("M",pe);0===this.get(ab)&&I(111);this.a.T();this.H=g};F=U[y];F.m=function(){var a=this.get(Db);a||(a=new yd,this.set(Db,a));return a};F.La=function(a){for(var b in a){var c=a[b];a.hasOwnProperty(b)&&this.set(b,c,h)}};F.K=function(a){if(this.get(Ec))return l;var b=this,c=ke(this.a,function(c){b.set(Hb,a,h);b.t(c)});this.set(Ec,c);return c};
F.Fa=function(a){a&&Ba(a)?(I(13),this.set(Hb,a,h)):"object"===typeof a&&a!==j&&this.La(a);this.H=a=this.get(Hb);this.a.j("page");this.K(a)};F.F=function(a,b,c,d,e){if(""==a||(!wd(a)||""==b||!wd(b))||c!=g&&!wd(c)||d!=g&&!xd(d))return l;this.set(wc,a,h);this.set(xc,b,h);this.set(yc,c,h);this.set(zc,d,h);this.set(vc,!!e,h);this.a.j("event");return h};
F.Ha=function(a,b,c,d,e){var f=this.a.b(Dc,0);1*e===e&&(f=e);if(this.a.b(Q,0)%100>=f)return l;c=1*(""+c);if(""==a||(!wd(a)||""==b||!wd(b)||!xd(c)||isNaN(c)||0>c||0>f||100<f)||d!=g&&(""==d||!wd(d)))return l;this.t(me(a,b,c,d));return h};F.Ga=function(a,b,c,d){if(!a||!b)return l;this.set(Ac,a,h);this.set(Bc,b,h);this.set(Cc,c||K[A][wa],h);d&&this.set(Hb,d,h);this.a.j("social");return h};F.Ea=function(){this.set(Dc,10);this.K(this.H)};F.Ia=function(){this.a.j("trans")};
F.t=function(a){this.set(Eb,a,h);this.a.j("event")};F.ia=function(a){this.v();var b=this;return{_trackEvent:function(c,d,e){I(91);b.F(a,c,d,e)}}};F.ma=function(a){return this.get(a)};F.xa=function(a,b){if(a)if(Ba(a))this.set(a,b);else if("object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c])};F.addEventListener=function(a,b){var c=this.get(Nc)[a];c&&c[p](b)};F.removeEventListener=function(a,b){for(var c=this.get(Nc)[a],d=0;c&&d<c[x];d++)if(c[d]==b){c.splice(d,1);break}};F.qa=function(){return"5.3.8"};
F.B=function(a){this.get(hb);a="auto"==a?Ka(K.domain):!a||"-"==a||"none"==a?"":a[E]();this.set(bb,a)};F.va=function(a){this.set(hb,!!a)};F.na=function(a,b){return ce(this.a,a,b)};F.link=function(a,b){if(this.a.get(fb)&&a){var c=ce(this.a,a,b);K[A].href=c}};F.ua=function(a,b){this.a.get(fb)&&(a&&a.action)&&(a.action=ce(this.a,a.action,b))};
F.za=function(){this.v();var a=this.a,b=K.getElementById?K.getElementById("utmtrans"):K.utmform&&K.utmform.utmtrans?K.utmform.utmtrans:j;if(b&&b[ma]){a.set(Cb,[]);for(var b=b[ma][z]("UTM:"),c=0;c<b[x];c++){b[c]=Ca(b[c]);for(var d=b[c][z](de),e=0;e<d[x];e++)d[e]=Ca(d[e]);"T"==d[0]?fe(a,d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8]):"I"==d[0]&&ge(a,d[1],d[2],d[3],d[4],d[5],d[6])}}};F.$=function(a,b,c,d,e,f,k,m){return fe(this.a,a,b,c,d,e,f,k,m)};F.Y=function(a,b,c,d,e,f){return ge(this.a,a,b,c,d,e,f)};
F.Aa=function(a){de=a||"|"};F.ea=function(){this.set(Cb,[])};F.wa=function(a,b,c,d){var e=this.a;if(0>=a||a>e.get(yb))a=l;else if(!b||!c||128<b[x]+c[x])a=l;else{1!=d&&2!=d&&(d=3);var f={};ea(f,b);f.value=c;f.scope=d;e.get(Fb)[a]=f;a=h}a&&this.a.n();return a};F.ka=function(a){this.a.get(Fb)[a]=g;this.a.n()};F.ra=function(a){return(a=this.a.get(Fb)[a])&&1==a[ta]?a[ma]:g};F.Ca=function(a,b,c){this.m().f(a,b,c)};F.Da=function(a,b,c){this.m().o(a,b,c)};F.sa=function(a,b){return this.m().getKey(a,b)};
F.ta=function(a,b){return this.m().N(a,b)};F.fa=function(a){this.m().L(a)};F.ga=function(a){this.m().M(a)};F.ja=function(){return new yd};F.W=function(a){a&&this.get(Ab)[p](a[E]())};F.ba=function(){this.set(Ab,[])};F.X=function(a){a&&this.get(Bb)[p](a[E]())};F.ca=function(){this.set(Bb,[])};F.Z=function(a,b,c,d,e){if(a&&b){a=[a,b[E]()][D](":");if(d||e)a=[a,d,e][D](":");d=this.get(zb);d.splice(c?0:d[x],0,a)}};F.da=function(){this.set(zb,[])};
F.ha=function(a){this.a[ja]();var b=this.get(P),c=be(this.a);this.set(P,a);this.a.n();ae(this.a,c);this.set(P,b)};F.ya=function(a,b){if(0<a&&5>=a&&Ba(b)&&""!=b){var c=this.get(Fc)||[];c[a]=b;this.set(Fc,c)}};F.V=function(a){a=""+a;if(a[na](/^[A-Za-z0-9]{1,5}$/)){var b=this.get(Ic)||[];b[p](a);this.set(Ic,b)}};F.v=function(){this.a[ja]()};F.Ba=function(a){a&&""!=a&&(this.set(Tb,a),this.a.j("var"))};var ne=function(a){"trans"!==a.get(sc)&&500<=a.b(cc,0)&&a[sa]();if("event"===a.get(sc)){var b=(new Date).getTime(),c=a.b(dc,0),d=a.b(Zb,0),c=n[ka](1*((b-(c!=d?c:1E3*c))/1E3));0<c&&(a.set(dc,b),a.set(R,n.min(10,a.b(R,0)+c)));0>=a.b(R,0)&&a[sa]()}},pe=function(a){"event"===a.get(sc)&&a.set(R,n.max(0,a.b(R,10)-1))};var qe=function(){var a=[];this.add=function(b,c,d){d&&(c=H(""+c));a[p](b+"="+c)};this.toString=function(){return a[D]("&")}},re=function(a,b){(b||2!=a.get(xb))&&a.z(cc)},se=function(a,b){b.add("utmwv","5.3.8");b.add("utms",a.get(cc));b.add("utmn",Da());var c=K[A].hostname;G(c)||b.add("utmhn",c,h);c=a.get(vb);100!=c&&b.add("utmsp",c,h)},te=function(a,b){b.add("utmac",Ca(a.get(Wa)));a.get(Oc)&&b.add("utmxkey",a.get(Oc),h);a.get(vc)&&b.add("utmni",1);var c=a.get(Ic);c&&0<c[x]&&b.add("utmdid",c[D]("."));
var c=function(a,b){b&&d[p](a+"="+b+";")},d=[];c("__utma",cd(a));c("__utmz",hd(a,l));c("__utmv",fd(a,h));c("__utmx",be(a));b.add("utmcc",d[D]("+"),h);a.get(Xa)!==l&&(a.get(Xa)||M.w)&&b.add("aip",1);b.add("utmu",od.Xa())},ue=function(a,b){for(var c=a.get(Fc)||[],d=[],e=1;e<c[x];e++)c[e]&&d[p](e+":"+H(c[e][q](/%/g,"%25")[q](/:/g,"%3A")[q](/,/g,"%2C")));d[x]&&b.add("utmpg",d[D](","))},ve=function(a,b){a.get(ib)&&(b.add("utmcs",a.get(Qb),h),b.add("utmsr",a.get(Lb)),a.get(Rb)&&b.add("utmvp",a.get(Rb)),
b.add("utmsc",a.get(Mb)),b.add("utmul",a.get(Pb)),b.add("utmje",a.get(Nb)),b.add("utmfl",a.get(Ob),h))},we=function(a,b){a.get(lb)&&a.get(Ib)&&b.add("utmdt",a.get(Ib),h);b.add("utmhid",a.get(Kb));b.add("utmr",Pa(a.get(Jb),a.get(P)),h);b.add("utmp",H(a.get(Hb),h),h)},xe=function(a,b){for(var c=a.get(Db),d=a.get(Eb),e=a.get(Fb)||[],f=0;f<e[x];f++){var k=e[f];k&&(c||(c=new yd),c.f(8,f,k[s]),c.f(9,f,k[ma]),3!=k[ta]&&c.f(11,f,""+k[ta]))}!G(a.get(wc))&&!G(a.get(xc),h)&&(c||(c=new yd),c.f(5,1,a.get(wc)),
c.f(5,2,a.get(xc)),e=a.get(yc),e!=g&&c.f(5,3,e),e=a.get(zc),e!=g&&c.o(5,1,e));c?b.add("utme",c.Qa(d),h):d&&b.add("utme",d.A(),h)},ye=function(a,b,c){var d=new qe;re(a,c);se(a,d);d.add("utmt","tran");d.add("utmtid",b.id_,h);d.add("utmtst",b.affiliation_,h);d.add("utmtto",b.total_,h);d.add("utmttx",b.tax_,h);d.add("utmtsp",b.shipping_,h);d.add("utmtci",b.city_,h);d.add("utmtrg",b.state_,h);d.add("utmtco",b.country_,h);xe(a,d);ve(a,d);we(a,d);(b=a.get(Gb))&&d.add("utmcu",b,h);c||(ue(a,d),te(a,d));return d[w]()},
ze=function(a,b,c){var d=new qe;re(a,c);se(a,d);d.add("utmt","item");d.add("utmtid",b.transId_,h);d.add("utmipc",b.sku_,h);d.add("utmipn",b.name_,h);d.add("utmiva",b.category_,h);d.add("utmipr",b.price_,h);d.add("utmiqt",b.quantity_,h);xe(a,d);ve(a,d);we(a,d);(b=a.get(Gb))&&d.add("utmcu",b,h);c||(ue(a,d),te(a,d));return d[w]()},Ae=function(a,b){var c=a.get(sc);if("page"==c)c=new qe,re(a,b),se(a,c),xe(a,c),ve(a,c),we(a,c),b||(ue(a,c),te(a,c)),c=[c[w]()];else if("event"==c)c=new qe,re(a,b),se(a,c),
c.add("utmt","event"),xe(a,c),ve(a,c),we(a,c),b||(ue(a,c),te(a,c)),c=[c[w]()];else if("var"==c)c=new qe,re(a,b),se(a,c),c.add("utmt","var"),!b&&te(a,c),c=[c[w]()];else if("trans"==c)for(var c=[],d=a.get(Cb),e=0;e<d[x];++e){c[p](ye(a,d[e],b));for(var f=d[e].items_,k=0;k<f[x];++k)c[p](ze(a,f[k],b))}else"social"==c?b?c=[]:(c=new qe,re(a,b),se(a,c),c.add("utmt","social"),c.add("utmsn",a.get(Ac),h),c.add("utmsa",a.get(Bc),h),c.add("utmsid",a.get(Cc),h),xe(a,c),ve(a,c),we(a,c),ue(a,c),te(a,c),c=[c[w]()]):
"feedback"==c?b?c=[]:(c=new qe,re(a,b),se(a,c),c.add("utmt","feedback"),c.add("utmfbid",a.get(Gc),h),c.add("utmfbpr",a.get(Hc),h),xe(a,c),ve(a,c),we(a,c),ue(a,c),te(a,c),c=[c[w]()]):c=[];return c},oe=function(a){var b,c=a.get(xb),d=a.get(uc),e=d&&d.Ua,f=0;if(0==c||2==c){var k=a.get(wb)+"?";b=Ae(a,h);for(var m=0,t=b[x];m<t;m++)Sa(b[m],e,k,h),f++}if(1==c||2==c){b=Ae(a);m=0;for(t=b[x];m<t;m++)try{Sa(b[m],e),f++}catch(u){u&&Ra(u[s],g,u.message)}}d&&(d.q=f)};var Be=function(){return"https:"==K[A][B]||M.G?"https://ssl.google-analytics.com":"http://www.google-analytics.com"},Ce=function(a){ea(this,"len");this.message=a+"-8192"},De=function(a){ea(this,"ff2post");this.message=a+"-2036"},Sa=function(a,b,c,d){b=b||Ea;if(d||2036>=a[x]){var e=b;b=c||Be()+"/__utm.gif?";var f=new Image(1,1);f.src=b+a;f.onload=function(){f.onload=j;f.onerror=j;e()};f.onerror=function(){f.onload=j;f.onerror=j;e()}}else if(8192>=a[x]){var k=b;if(0<=W[ya].userAgent[r]("Firefox")&&
![].reduce)throw new De(a[x]);var m;b=Be()+"/p/__utm.gif";if(c=W.XDomainRequest)m=new c,m.open("POST",b);else if(c=W.XMLHttpRequest)c=new c,"withCredentials"in c&&(m=c,m.open("POST",b,h),m.setRequestHeader("Content-Type","text/plain"));m?(m.onreadystatechange=function(){4==m.readyState&&(k(),m=j)},m.send(a),b=h):b=g;b||Ee(a,k)}else throw new Ce(a[x]);},Ee=function(a,b){if(K.body){a=aa(a);try{var c=K[pa]('<iframe name="'+a+'"></iframe>')}catch(d){c=K[pa]("iframe"),ea(c,a)}c.height="0";c.width="0";
c.style.display="none";c.style.visibility="hidden";var e=K[A],e=Be()+"/u/post_iframe.html#"+aa(e[B]+"//"+e[v]+"/favicon.ico"),f=function(){c.src="";c.parentNode&&c.parentNode.removeChild(c)};Fa(W,"beforeunload",f);var k=l,m=0,t=function(){if(!k){try{if(9<m||c.contentWindow[A][v]==K[A][v]){k=h;f();Ga(W,"beforeunload",f);b();return}}catch(a){}m++;ca(t,200)}};Fa(c,"load",t);K.body.appendChild(c);c.src=e}else ca(function(){Ee(a,b)},100)};var $=function(){this.G=this.w=l;this.C={};this.D=[];this.U=0;this.S=[["www.google-analytics.com","","/plugins/"]];this._gasoCPath=this._gasoDomain=g;var a=function(a,c,d){T($[y],a,c,d)};a("_createTracker",$[y].r,55);a("_getTracker",$[y].oa,0);a("_getTrackerByName",$[y].u,51);a("_getTrackers",$[y].pa,130);a("_anonymizeIp",$[y].aa,16);a("_forceSSL",$[y].la,125);a("_getPlugin",Pc,120);a=function(a,c,d){T(U[y],a,c,d)};Qc("_getName",$a,58);Qc("_getAccount",Wa,64);Qc("_visitCode",Q,54);Qc("_getClientInfo",
ib,53,1);Qc("_getDetectTitle",lb,56,1);Qc("_getDetectFlash",jb,65,1);Qc("_getLocalGifPath",wb,57);Qc("_getServiceMode",xb,59);V("_setClientInfo",ib,66,2);V("_setAccount",Wa,3);V("_setNamespace",Ya,48);V("_setAllowLinker",fb,11,2);V("_setDetectFlash",jb,61,2);V("_setDetectTitle",lb,62,2);V("_setLocalGifPath",wb,46,0);V("_setLocalServerMode",xb,92,g,0);V("_setRemoteServerMode",xb,63,g,1);V("_setLocalRemoteServerMode",xb,47,g,2);V("_setSampleRate",vb,45,1);V("_setCampaignTrack",kb,36,2);V("_setAllowAnchor",
gb,7,2);V("_setCampNameKey",ob,41);V("_setCampContentKey",tb,38);V("_setCampIdKey",nb,39);V("_setCampMediumKey",rb,40);V("_setCampNOKey",ub,42);V("_setCampSourceKey",qb,43);V("_setCampTermKey",sb,44);V("_setCampCIdKey",pb,37);V("_setCookiePath",P,9,0);V("_setMaxCustomVariables",yb,0,1);V("_setVisitorCookieTimeout",cb,28,1);V("_setSessionCookieTimeout",db,26,1);V("_setCampaignCookieTimeout",eb,29,1);V("_setReferrerOverride",Jb,49);V("_setSiteSpeedSampleRate",Dc,132);a("_trackPageview",U[y].Fa,1);a("_trackEvent",
U[y].F,4);a("_trackPageLoadTime",U[y].Ea,100);a("_trackSocial",U[y].Ga,104);a("_trackTrans",U[y].Ia,18);a("_sendXEvent",U[y].t,78);a("_createEventTracker",U[y].ia,74);a("_getVersion",U[y].qa,60);a("_setDomainName",U[y].B,6);a("_setAllowHash",U[y].va,8);a("_getLinkerUrl",U[y].na,52);a("_link",U[y].link,101);a("_linkByPost",U[y].ua,102);a("_setTrans",U[y].za,20);a("_addTrans",U[y].$,21);a("_addItem",U[y].Y,19);a("_clearTrans",U[y].ea,105);a("_setTransactionDelim",U[y].Aa,82);a("_setCustomVar",U[y].wa,
10);a("_deleteCustomVar",U[y].ka,35);a("_getVisitorCustomVar",U[y].ra,50);a("_setXKey",U[y].Ca,83);a("_setXValue",U[y].Da,84);a("_getXKey",U[y].sa,76);a("_getXValue",U[y].ta,77);a("_clearXKey",U[y].fa,72);a("_clearXValue",U[y].ga,73);a("_createXObj",U[y].ja,75);a("_addIgnoredOrganic",U[y].W,15);a("_clearIgnoredOrganic",U[y].ba,97);a("_addIgnoredRef",U[y].X,31);a("_clearIgnoredRef",U[y].ca,32);a("_addOrganic",U[y].Z,14);a("_clearOrganic",U[y].da,70);a("_cookiePathCopy",U[y].ha,30);a("_get",U[y].ma,
106);a("_set",U[y].xa,107);a("_addEventListener",U[y].addEventListener,108);a("_removeEventListener",U[y].removeEventListener,109);a("_addDevId",U[y].V);a("_getPlugin",Pc,122);a("_setPageGroup",U[y].ya,126);a("_trackTiming",U[y].Ha,124);a("_initData",U[y].v,2);a("_setVar",U[y].Ba,22);V("_setSessionTimeout",db,27,3);V("_setCookieTimeout",eb,25,3);V("_setCookiePersistence",cb,24,1);a("_setAutoTrackOutbound",Ea,79);a("_setTrackOutboundSubdomains",Ea,81);a("_setHrefExamineLimit",Ea,80)};F=$[y];
F.oa=function(a,b){return this.r(a,g,b)};F.r=function(a,b,c){b&&I(23);c&&I(67);b==g&&(b="~"+M.U++);a=new U(b,a,c);M.C[b]=a;M.D[p](a);return a};F.u=function(a){a=a||"";return M.C[a]||M.r(g,a)};F.pa=function(){return M.D[ia](0)};F.aa=function(){this.w=h};F.la=function(){this.G=h};var Fe=function(a){if("prerender"==K.webkitVisibilityState)return l;a();return h};var M=new $;var Ge=W._gat;Ge&&Aa(Ge._getTracker)?M=Ge:W._gat=M;var Z=new Y;var He=function(){var a=W._gaq,b=l;if(a&&Aa(a[p])&&(b="[object Array]"==Object[y][w].call(Object(a)),!b)){Z=a;return}W._gaq=Z;b&&Z[p][xa](Z,a)};if(!Fe(He)){I(123);var Ie=l,Je=function(){!Ie&&Fe(He)&&(Ie=h,Ga(K,"webkitvisibilitychange",Je))};Fa(K,"webkitvisibilitychange",Je)};function Yc(a){var b=1,c=0,d;if(a){b=0;for(d=a[x]-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c>>21:b}return b};})();
$( function() {
    var pictures = [],
        $pointer = $( '#pointer' ),
        $thumbnails = $( '#thumbnails' ),
        $title = $( '#title' ),
        $pause = $( '#pause' ),
        $flash = $( '#flash' ),
        $volume = $( '#volume' );

    // Buzz audio library

    buzz.defaults.formats = [ 'ogg', 'mp3' ];

    var trafficSound = new buzz.sound( 'sounds/waheguru'),
        clickSound = new buzz.sound( 'sounds/click' ),
        focusSound = new buzz.sound( 'sounds/focus' ),
        rewindSound = new buzz.sound( 'sounds/rewind' ),
        cameraSounds = new buzz.group( clickSound, focusSound, rewindSound );

    if ( !buzz.isSupported() ) {
        $volume.hide();    
    }
    
    trafficSound.loop().play().fadeIn( 5000 );

    // jScrollPane

    $thumbnails.find( 'ul' ).width( function() {
        var totalWidth = 0;
        $( this ).find( 'li' ).each( function() {
            totalWidth += $( this ).outerWidth( true );
        });
        return totalWidth;
    });

    $thumbnails.jScrollPane();

    var jScrollPaneApi = $thumbnails.data( 'jsp' );

    $( window ).bind( 'resize', function() {
        jScrollPaneApi.reinitialise();
    });

    // Vegas Background

    $thumbnails.find( 'a' ).each( function() {
        pictures.push({
            src: $( this ).attr( 'href' ),    
            title: $( this ).find( 'img' ).attr( 'title' ),
            valign: $( this ).find( 'img' ).data( 'valign' )
        });
    })

    $.vegas( 'slideshow', { 
        backgrounds: pictures,
        delay: 4000
     })( 'overlay' );
    
    $( 'body' ).bind( 'vegasload', function( e, img ) {
        var src = $( img ).attr( 'src' ),
            idx = $( 'a[href="' + src + '"]' ).parent( 'li' ).index();

        focusSound.play();
    
        $title.fadeOut( function() {
            $( this ).find( 'h1' ).text( pictures[ idx ].title );
            $( this ).fadeIn();
        });

        $flash.show().fadeOut( 1000 );

        var pointerPosition = $thumbnails.find( 'li' ).eq( idx ).position().left;
            
        $pointer.animate({
            left: pointerPosition
        }, 500, 'easeInOutBack' );

        if ( ( pointerPosition > $thumbnails.width() || pointerPosition < jScrollPaneApi.getContentPositionX() ) && !$thumbnails.is( ':hover' ) ) {
            jScrollPaneApi.scrollToX( pointerPosition, true );
        }

        $pointer.click( function() {
            $thumbnails.find( 'a' ).eq( idx ).click()
        });
    });

    // Volume button

    $volume.click( function() {
        if ( $( this ).hasClass( 'all' ) ) {
            cameraSounds.unmute();
            trafficSound.mute();
        
            $( this ).removeClass( 'all' ).addClass( 'some' );
        } else if ( $( this ).hasClass( 'some' ) ) {
            cameraSounds.mute();
            trafficSound.mute();
        
            $( this ).removeClass( 'some' ).addClass( 'none' );
        } else {
            cameraSounds.unmute();
            trafficSound.unmute();
        
            $( this ).removeClass( 'none' ).addClass( 'all' );
        }
        return false;
    });

    // Photograph

    $thumbnails.find( 'a' ).click( function() {
        $pause.show();
        $pointer.hide();
    
        $volume.animate( { top: '20px' });
        $thumbnails.animate( { top: '-90px' });
        $title.animate( { bottom: '-90px' });    

        var idx = $( this ).parent( 'li' ).index();
        $.vegas( 'slideshow', { step: idx } )( 'pause' );

        rewindSound.play();
    
        return false;
    });

    $pause.click( function() {
        $pause.hide();
        $pointer.show();
    
        $volume.animate( { top:'100px' });
        $title.animate( { bottom:'0px' });
        $thumbnails.animate( { top:'0px' });

        $.vegas( 'slideshow' );

        clickSound.play();

        return false;
    });
});
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
;
/*
 * Playlist Object for the jPlayer Plugin
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2011 Happyworm Ltd
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * Author: Mark J Panaghiston
 * Version: 2.1.0 (jPlayer 2.1.0)
 * Date: 1st September 2011
 */


(function(b,f){jPlayerPlaylist=function(a,c,d){var e=this;this.current=0;this.removing=this.shuffled=this.loop=!1;this.cssSelector=b.extend({},this._cssSelector,a);this.options=b.extend(!0,{},this._options,d);this.playlist=[];this.original=[];this._initPlaylist(c);this.cssSelector.title=this.cssSelector.cssSelectorAncestor+" .jp-title";this.cssSelector.playlist=this.cssSelector.cssSelectorAncestor+" .jp-playlist";this.cssSelector.next=this.cssSelector.cssSelectorAncestor+" .jp-next";this.cssSelector.previous=
this.cssSelector.cssSelectorAncestor+" .jp-previous";this.cssSelector.shuffle=this.cssSelector.cssSelectorAncestor+" .jp-shuffle";this.cssSelector.shuffleOff=this.cssSelector.cssSelectorAncestor+" .jp-shuffle-off";this.options.cssSelectorAncestor=this.cssSelector.cssSelectorAncestor;this.options.repeat=function(a){e.loop=a.jPlayer.options.loop};b(this.cssSelector.jPlayer).bind(b.jPlayer.event.ready,function(){e._init()});b(this.cssSelector.jPlayer).bind(b.jPlayer.event.ended,function(){e.next()});
b(this.cssSelector.jPlayer).bind(b.jPlayer.event.play,function(){b(this).jPlayer("pauseOthers")});b(this.cssSelector.jPlayer).bind(b.jPlayer.event.resize,function(a){a.jPlayer.options.fullScreen?b(e.cssSelector.title).show():b(e.cssSelector.title).hide()});b(this.cssSelector.previous).click(function(){e.previous();b(this).blur();return!1});b(this.cssSelector.next).click(function(){e.next();b(this).blur();return!1});b(this.cssSelector.shuffle).click(function(){e.shuffle(!0);return!1});b(this.cssSelector.shuffleOff).click(function(){e.shuffle(!1);
return!1}).hide();this.options.fullScreen||b(this.cssSelector.title).hide();b(this.cssSelector.playlist+" ul").empty();this._createItemHandlers();b(this.cssSelector.jPlayer).jPlayer(this.options)};jPlayerPlaylist.prototype={_cssSelector:{jPlayer:"#jquery_jplayer_1",cssSelectorAncestor:"#jp_container_1"},_options:{playlistOptions:{autoPlay:!1,loopOnPrevious:!1,shuffleOnLoop:!0,enableRemoveControls:!1,displayTime:"slow",addTime:"fast",removeTime:"fast",shuffleTime:"slow",itemClass:"jp-playlist-item",
freeGroupClass:"jp-free-media",freeItemClass:"jp-playlist-item-free",removeItemClass:"jp-playlist-item-remove"}},option:function(a,b){if(b===f)return this.options.playlistOptions[a];this.options.playlistOptions[a]=b;switch(a){case "enableRemoveControls":this._updateControls();break;case "itemClass":case "freeGroupClass":case "freeItemClass":case "removeItemClass":this._refresh(!0),this._createItemHandlers()}return this},_init:function(){var a=this;this._refresh(function(){a.options.playlistOptions.autoPlay?
a.play(a.current):a.select(a.current)})},_initPlaylist:function(a){this.current=0;this.removing=this.shuffled=!1;this.original=b.extend(!0,[],a);this._originalPlaylist()},_originalPlaylist:function(){var a=this;this.playlist=[];b.each(this.original,function(b){a.playlist[b]=a.original[b]})},_refresh:function(a){var c=this;if(a&&!b.isFunction(a))b(this.cssSelector.playlist+" ul").empty(),b.each(this.playlist,function(a){b(c.cssSelector.playlist+" ul").append(c._createListItem(c.playlist[a]))}),this._updateControls();
else{var d=b(this.cssSelector.playlist+" ul").children().length?this.options.playlistOptions.displayTime:0;b(this.cssSelector.playlist+" ul").slideUp(d,function(){var d=b(this);b(this).empty();b.each(c.playlist,function(a){d.append(c._createListItem(c.playlist[a]))});c._updateControls();b.isFunction(a)&&a();c.playlist.length?b(this).slideDown(c.options.playlistOptions.displayTime):b(this).show()})}},_createListItem:function(a){var c=this,d="<li><div>";d+="<a href='javascript:;' class='"+this.options.playlistOptions.removeItemClass+
"'>&times;</a>";if(a.free){var e=!0;d+="<span class='"+this.options.playlistOptions.freeGroupClass+"'>(";b.each(a,function(a,f){b.jPlayer.prototype.format[a]&&(e?e=!1:d+=" | ",d+="<a class='"+c.options.playlistOptions.freeItemClass+"' href='"+f+"' tabindex='1'>"+a+"</a>")});d+=")</span>"}d+="<a href='javascript:;' class='"+this.options.playlistOptions.itemClass+"' tabindex='1'>"+a.title+(a.artist?" <span class='jp-artist'>by "+a.artist+"</span>":"")+"</a>";d+="</div></li>";return d},_createItemHandlers:function(){var a=
this;b(this.cssSelector.playlist+" a."+this.options.playlistOptions.itemClass).die("click").live("click",function(){var c=b(this).parent().parent().index();a.current!==c?a.play(c):b(a.cssSelector.jPlayer).jPlayer("play");b(this).blur();return!1});b(a.cssSelector.playlist+" a."+this.options.playlistOptions.freeItemClass).die("click").live("click",function(){b(this).parent().parent().find("."+a.options.playlistOptions.itemClass).click();b(this).blur();return!1});b(a.cssSelector.playlist+" a."+this.options.playlistOptions.removeItemClass).die("click").live("click",
function(){var c=b(this).parent().parent().index();a.remove(c);b(this).blur();return!1})},_updateControls:function(){this.options.playlistOptions.enableRemoveControls?b(this.cssSelector.playlist+" ."+this.options.playlistOptions.removeItemClass).show():b(this.cssSelector.playlist+" ."+this.options.playlistOptions.removeItemClass).hide();this.shuffled?(b(this.cssSelector.shuffleOff).show(),b(this.cssSelector.shuffle).hide()):(b(this.cssSelector.shuffleOff).hide(),b(this.cssSelector.shuffle).show())},
_highlight:function(a){this.playlist.length&&a!==f&&(b(this.cssSelector.playlist+" .jp-playlist-current").removeClass("jp-playlist-current"),b(this.cssSelector.playlist+" li:nth-child("+(a+1)+")").addClass("jp-playlist-current").find(".jp-playlist-item").addClass("jp-playlist-current"),b(this.cssSelector.title+" li").html(this.playlist[a].title+(this.playlist[a].artist?" <span class='jp-artist'>by "+this.playlist[a].artist+"</span>":"")))},setPlaylist:function(a){this._initPlaylist(a);this._init()},
add:function(a,c){b(this.cssSelector.playlist+" ul").append(this._createListItem(a)).find("li:last-child").hide().slideDown(this.options.playlistOptions.addTime);this._updateControls();this.original.push(a);this.playlist.push(a);c?this.play(this.playlist.length-1):this.original.length===1&&this.select(0)},remove:function(a){var c=this;if(a===f)return this._initPlaylist([]),this._refresh(function(){b(c.cssSelector.jPlayer).jPlayer("clearMedia")}),!0;else if(this.removing)return!1;else{a=a<0?c.original.length+
a:a;if(0<=a&&a<this.playlist.length)this.removing=!0,b(this.cssSelector.playlist+" li:nth-child("+(a+1)+")").slideUp(this.options.playlistOptions.removeTime,function(){b(this).remove();if(c.shuffled){var d=c.playlist[a];b.each(c.original,function(a){if(c.original[a]===d)return c.original.splice(a,1),!1})}else c.original.splice(a,1);c.playlist.splice(a,1);c.original.length?a===c.current?(c.current=a<c.original.length?c.current:c.original.length-1,c.select(c.current)):a<c.current&&c.current--:(b(c.cssSelector.jPlayer).jPlayer("clearMedia"),
c.current=0,c.shuffled=!1,c._updateControls());c.removing=!1});return!0}},select:function(a){a=a<0?this.original.length+a:a;0<=a&&a<this.playlist.length?(this.current=a,this._highlight(a),b(this.cssSelector.jPlayer).jPlayer("setMedia",this.playlist[this.current])):this.current=0},play:function(a){a=a<0?this.original.length+a:a;0<=a&&a<this.playlist.length?this.playlist.length&&(this.select(a),b(this.cssSelector.jPlayer).jPlayer("play")):a===f&&b(this.cssSelector.jPlayer).jPlayer("play")},pause:function(){b(this.cssSelector.jPlayer).jPlayer("pause")},
next:function(){var a=this.current+1<this.playlist.length?this.current+1:0;this.loop?a===0&&this.shuffled&&this.options.playlistOptions.shuffleOnLoop&&this.playlist.length>1?this.shuffle(!0,!0):this.play(a):a>0&&this.play(a)},previous:function(){var a=this.current-1>=0?this.current-1:this.playlist.length-1;(this.loop&&this.options.playlistOptions.loopOnPrevious||a<this.playlist.length-1)&&this.play(a)},shuffle:function(a,c){var d=this;a===f&&(a=!this.shuffled);(a||a!==this.shuffled)&&b(this.cssSelector.playlist+
" ul").slideUp(this.options.playlistOptions.shuffleTime,function(){(d.shuffled=a)?d.playlist.sort(function(){return 0.5-Math.random()}):d._originalPlaylist();d._refresh(!0);c||!b(d.cssSelector.jPlayer).data("jPlayer").status.paused?d.play(0):d.select(0);b(this).slideDown(d.options.playlistOptions.shuffleTime)})}}})(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;
/*
jQuery grab 
https://github.com/jussi-kalliokoski/jQuery.grab
Ported from Jin.js::gestures   
https://github.com/jussi-kalliokoski/jin.js/
Created by Jussi Kalliokoski
Licensed under MIT License. 

Includes fix for IE
*/



(function($){
	var	extend		= $.extend,
		mousedown	= 'mousedown',
		mousemove	= 'mousemove',
		mouseup		= 'mouseup',
		touchstart	= 'touchstart',
		touchmove	= 'touchmove',
		touchend	= 'touchend',
		touchcancel	= 'touchcancel';

	function unbind(elem, type, func){
		if (type.substr(0,5) !== 'touch'){ // A temporary fix for IE8 data passing problem in Jin.
			return $(elem).unbind(type, func);
		}
		var fnc, i;
		for (i=0; i<bind._binds.length; i++){
			if (bind._binds[i].elem === elem && bind._binds[i].type === type && bind._binds[i].func === func){
				if (document.addEventListener){
					elem.removeEventListener(type, bind._binds[i].fnc, false);
				} else {
					elem.detachEvent('on'+type, bind._binds[i].fnc);
				}
				bind._binds.splice(i--, 1);
			}
		}
	}

	function bind(elem, type, func, pass){
		if (type.substr(0,5) !== 'touch'){ // A temporary fix for IE8 data passing problem in Jin.
			return $(elem).bind(type, pass, func);
		}
		var fnc, i;
		if (bind[type]){
			return bind[type].bind(elem, type, func, pass);
		}
		fnc = function(e){
			if (!e){ // Fix some ie bugs...
				e = window.event;
			}
			if (!e.stopPropagation){
				e.stopPropagation = function(){ this.cancelBubble = true; };
			}
			e.data = pass;
			func.call(elem, e);
		};
		if (document.addEventListener){
			elem.addEventListener(type, fnc, false);
		} else {
			elem.attachEvent('on' + type, fnc);
		}
		bind._binds.push({elem: elem, type: type, func: func, fnc: fnc});
	}

	function grab(elem, options)
	{
		var data = {
			move: {x: 0, y: 0},
			offset: {x: 0, y: 0},
			position: {x: 0, y: 0},
			start: {x: 0, y: 0},
			affects: document.documentElement,
			stopPropagation: false,
			preventDefault: true,
			touch: true // Implementation unfinished, and doesn't support multitouch
		};
		extend(data, options);
		data.element = elem;
		bind(elem, mousedown, mouseDown, data);
		if (data.touch){
			bind(elem, touchstart, touchStart, data);
		}
	}
	function ungrab(elem){
		unbind(elem, mousedown, mousedown);
	}
	function mouseDown(e){
		e.data.position.x = e.pageX;
		e.data.position.y = e.pageY;
		e.data.start.x = e.pageX;
		e.data.start.y = e.pageY;
		e.data.event = e;
		if (e.data.onstart && e.data.onstart.call(e.data.element, e.data)){
			return;
		}
		if (e.preventDefault && e.data.preventDefault){
			e.preventDefault();
		}
		if (e.stopPropagation && e.data.stopPropagation){
			e.stopPropagation();
		}
		bind(e.data.affects, mousemove, mouseMove, e.data);
		bind(e.data.affects, mouseup, mouseUp, e.data);
	}
	function mouseMove(e){
		if (e.preventDefault && e.data.preventDefault){
			e.preventDefault();
		}
		if (e.stopPropagation && e.data.preventDefault){
			e.stopPropagation();
		}
		e.data.move.x = e.pageX - e.data.position.x;
		e.data.move.y = e.pageY - e.data.position.y;
		e.data.position.x = e.pageX;
		e.data.position.y = e.pageY;
		e.data.offset.x = e.pageX - e.data.start.x;
		e.data.offset.y = e.pageY - e.data.start.y;
		e.data.event = e;
		if (e.data.onmove){
			e.data.onmove.call(e.data.element, e.data);
		}
	}
	function mouseUp(e){
		if (e.preventDefault && e.data.preventDefault){
			e.preventDefault();
		}
		if (e.stopPropagation && e.data.stopPropagation){
			e.stopPropagation();
		}
		unbind(e.data.affects, mousemove, mouseMove);
		unbind(e.data.affects, mouseup, mouseUp);
		e.data.event = e;
		if (e.data.onfinish){
			e.data.onfinish.call(e.data.element, e.data);
		}
	}
	function touchStart(e){
		e.data.position.x = e.touches[0].pageX;
		e.data.position.y = e.touches[0].pageY;
		e.data.start.x = e.touches[0].pageX;
		e.data.start.y = e.touches[0].pageY;
		e.data.event = e;
		if (e.data.onstart && e.data.onstart.call(e.data.element, e.data)){
			return;
		}
		if (e.preventDefault && e.data.preventDefault){
			e.preventDefault();
		}
		if (e.stopPropagation && e.data.stopPropagation){
			e.stopPropagation();
		}
		bind(e.data.affects, touchmove, touchMove, e.data);
		bind(e.data.affects, touchend, touchEnd, e.data);
	}
	function touchMove(e){
		if (e.preventDefault && e.data.preventDefault){
			e.preventDefault();
		}
		if (e.stopPropagation && e.data.stopPropagation){
			e.stopPropagation();
		}
		e.data.move.x = e.touches[0].pageX - e.data.position.x;
		e.data.move.y = e.touches[0].pageY - e.data.position.y;
		e.data.position.x = e.touches[0].pageX;
		e.data.position.y = e.touches[0].pageY;
		e.data.offset.x = e.touches[0].pageX - e.data.start.x;
		e.data.offset.y = e.touches[0].pageY - e.data.start.y;
		e.data.event = e;
		if (e.data.onmove){
			e.data.onmove.call(e.data.elem, e.data);
		}
	}
	function touchEnd(e){
		if (e.preventDefault && e.data.preventDefault){
			e.preventDefault();
		}
		if (e.stopPropagation && e.data.stopPropagation){
			e.stopPropagation();
		}
		unbind(e.data.affects, touchmove, touchMove);
		unbind(e.data.affects, touchend, touchEnd);
		e.data.event = e;
		if (e.data.onfinish){
			e.data.onfinish.call(e.data.element, e.data);
		}
	}

	bind._binds = [];

	$.fn.grab = function(a, b){
		return this.each(function(){
			return grab(this, a, b);
		});
	};
	$.fn.ungrab = function(a){
		return this.each(function(){
			return ungrab(this, a);
		});
	};
})(jQuery);
/*
 * jPlayerInspector Plugin for jPlayer (2.0.0+) Plugin for jQuery JavaScript Library
 * http://www.happyworm.com/jquery/jplayer
 *
 * Copyright (c) 2009 - 2011 Happyworm Ltd
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * Author: Mark J Panaghiston
 * Version: 1.0.3
 * Date: 7th August 2011
 *
 * For use with jPlayer Version: 2.0.29
 *
 * Note: Declare inspector instances after jPlayer instances. ie., Otherwise the jPlayer instance is nonsense.
 */


(function($, undefined) {
	$.jPlayerInspector = {};
	$.jPlayerInspector.i = 0;
	$.jPlayerInspector.defaults = {
		jPlayer: undefined, // The jQuery selector of the jPlayer instance to inspect.
		idPrefix: "jplayer_inspector_",
		visible: false
	};
	
	var methods = {
		init: function(options) {
			var self = this;
			var $this = $(this);
			
			var config = $.extend({}, $.jPlayerInspector.defaults, options);
			$(this).data("jPlayerInspector", config);

			config.id = $(this).attr("id");
			config.jPlayerId = config.jPlayer.attr("id");

			config.windowId = config.idPrefix + "window_" + $.jPlayerInspector.i;
			config.statusId = config.idPrefix + "status_" + $.jPlayerInspector.i;
			config.configId = config.idPrefix + "config_" + $.jPlayerInspector.i;
			config.toggleId = config.idPrefix + "toggle_" + $.jPlayerInspector.i;
			config.eventResetId = config.idPrefix + "event_reset_" + $.jPlayerInspector.i;
			config.updateId = config.idPrefix + "update_" + $.jPlayerInspector.i;
			config.eventWindowId = config.idPrefix + "event_window_" + $.jPlayerInspector.i;
			
			config.eventId = {};
			config.eventJq = {};
			config.eventTimeout = {};
			config.eventOccurrence = {};
			
			$.each($.jPlayer.event, function(eventName,eventType) {
				config.eventId[eventType] = config.idPrefix + "event_" + eventName + "_" + $.jPlayerInspector.i;
				config.eventOccurrence[eventType] = 0;
			});
			
			var structure = 
				'<p><a href="#" id="' + config.toggleId + '">' + (config.visible ? "Hide" : "Show") + '</a> jPlayer Inspector</p>' 
				+ '<div id="' + config.windowId + '">'
					+ '<div id="' + config.statusId + '"></div>'
					+ '<div id="' + config.eventWindowId + '" style="padding:5px 5px 0 5px;background-color:#eee;border:1px dotted #000;">'
						+ '<p style="margin:0 0 10px 0;"><strong>jPlayer events that have occurred over the past 1 second:</strong>'
						+ '<br />(Backgrounds: <span style="padding:0 5px;background-color:#eee;border:1px dotted #000;">Never occurred</span> <span style="padding:0 5px;background-color:#fff;border:1px dotted #000;">Occurred before</span> <span style="padding:0 5px;background-color:#9f9;border:1px dotted #000;">Occurred</span> <span style="padding:0 5px;background-color:#ff9;border:1px dotted #000;">Multiple occurrences</span> <a href="#" id="' + config.eventResetId + '">reset</a>)</p>';
			
			// MJP: Would use the next 3 lines for ease, but the events are just slapped on the page.
			// $.each($.jPlayer.event, function(eventName,eventType) {
			// 	structure += '<div id="' + config.eventId[eventType] + '" style="float:left;">' + eventName + '</div>';
			// });
			
			var eventStyle = "float:left;margin:0 5px 5px 0;padding:0 5px;border:1px dotted #000;";
			// MJP: Doing it longhand so order and layout easier to control.
			structure +=
						'<div id="' + config.eventId[$.jPlayer.event.ready] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.flashreset] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.resize] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.repeat] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.click] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.error] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.warning] + '" style="' + eventStyle + '"></div>'

						+ '<div id="' + config.eventId[$.jPlayer.event.loadstart] + '" style="clear:left;' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.progress] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.timeupdate] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.volumechange] + '" style="' + eventStyle + '"></div>'

						+ '<div id="' + config.eventId[$.jPlayer.event.play] + '" style="clear:left;' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.pause] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.waiting] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.playing] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.seeking] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.seeked] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.ended] + '" style="' + eventStyle + '"></div>'

						+ '<div id="' + config.eventId[$.jPlayer.event.loadeddata] + '" style="clear:left;' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.loadedmetadata] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.canplay] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.canplaythrough] + '" style="' + eventStyle + '"></div>'

						+ '<div id="' + config.eventId[$.jPlayer.event.suspend] + '" style="clear:left;' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.abort] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.emptied] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.stalled] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.ratechange] + '" style="' + eventStyle + '"></div>'
						+ '<div id="' + config.eventId[$.jPlayer.event.durationchange] + '" style="' + eventStyle + '"></div>'

						+ '<div style="clear:both"></div>';

			// MJP: Would like a check here in case we missed an event.

			// MJP: Check fails, since it is not on the page yet.
/*			$.each($.jPlayer.event, function(eventName,eventType) {
				if($("#" + config.eventId[eventType])[0] === undefined) {
					structure += '<div id="' + config.eventId[eventType] + '" style="clear:left;' + eventStyle + '">' + eventName + '</div>';
				}
			});
*/
			structure +=
					'</div>'
					+ '<p><a href="#" id="' + config.updateId + '">Update</a> jPlayer Inspector</p>'
					+ '<div id="' + config.configId + '"></div>'
				+ '</div>';
			$(this).html(structure);
			
			config.windowJq = $("#" + config.windowId);
			config.statusJq = $("#" + config.statusId);
			config.configJq = $("#" + config.configId);
			config.toggleJq = $("#" + config.toggleId);
			config.eventResetJq = $("#" + config.eventResetId);
			config.updateJq = $("#" + config.updateId);

			$.each($.jPlayer.event, function(eventName,eventType) {
				config.eventJq[eventType] = $("#" + config.eventId[eventType]);
				config.eventJq[eventType].text(eventName + " (" + config.eventOccurrence[eventType] + ")"); // Sets the text to the event name and (0);
				
				config.jPlayer.bind(eventType + ".jPlayerInspector", function(e) {
					config.eventOccurrence[e.type]++;
					if(config.eventOccurrence[e.type] > 1) {
						config.eventJq[e.type].css("background-color","#ff9");
					} else {
						config.eventJq[e.type].css("background-color","#9f9");
					}
					config.eventJq[e.type].text(eventName + " (" + config.eventOccurrence[e.type] + ")");
					// The timer to handle the color
					clearTimeout(config.eventTimeout[e.type]);
					config.eventTimeout[e.type] = setTimeout(function() {
						config.eventJq[e.type].css("background-color","#fff");
					}, 1000);
					// The timer to handle the occurences.
					setTimeout(function() {
						config.eventOccurrence[e.type]--;
						config.eventJq[e.type].text(eventName + " (" + config.eventOccurrence[e.type] + ")");
					}, 1000);
					if(config.visible) { // Update the status, if inspector open.
						$this.jPlayerInspector("updateStatus");
					}
				});
			});

			config.jPlayer.bind($.jPlayer.event.ready + ".jPlayerInspector", function(e) {
				$this.jPlayerInspector("updateConfig");
			});

			config.toggleJq.click(function() {
				if(config.visible) {
					$(this).text("Show");
					config.windowJq.hide();
					config.statusJq.empty();
					config.configJq.empty();
				} else {
					$(this).text("Hide");
					config.windowJq.show();
					config.updateJq.click();
				}
				config.visible = !config.visible;
				$(this).blur();
				return false;
			});

			config.eventResetJq.click(function() {
				$.each($.jPlayer.event, function(eventName,eventType) {
					config.eventJq[eventType].css("background-color","#eee");
				});
				$(this).blur();
				return false;
			});

			config.updateJq.click(function() {
				$this.jPlayerInspector("updateStatus");
				$this.jPlayerInspector("updateConfig");
				return false;
			});

			if(!config.visible) {
				config.windowJq.hide();
			} else {
				// config.updateJq.click();
			}
			
			$.jPlayerInspector.i++;

			return this;
		},
		destroy: function() {
			$(this).data("jPlayerInspector") && $(this).data("jPlayerInspector").jPlayer.unbind(".jPlayerInspector");
			$(this).empty();
		},
		updateConfig: function() { // This displays information about jPlayer's configuration in inspector
		
			var jPlayerInfo = "<p>This jPlayer instance is running in your browser where:<br />"

			for(i = 0; i < $(this).data("jPlayerInspector").jPlayer.data("jPlayer").solutions.length; i++) {
				var solution = $(this).data("jPlayerInspector").jPlayer.data("jPlayer").solutions[i];
				jPlayerInfo += "&nbsp;jPlayer's <strong>" + solution + "</strong> solution is";				
				if($(this).data("jPlayerInspector").jPlayer.data("jPlayer")[solution].used) {
					jPlayerInfo += " being <strong>used</strong> and will support:<strong>";
					for(format in $(this).data("jPlayerInspector").jPlayer.data("jPlayer")[solution].support) {
						if($(this).data("jPlayerInspector").jPlayer.data("jPlayer")[solution].support[format]) {
							jPlayerInfo += " " + format;
						}
					}
					jPlayerInfo += "</strong><br />";
				} else {
					jPlayerInfo += " <strong>not required</strong><br />";
				}
			}
			jPlayerInfo += "</p>";

			if($(this).data("jPlayerInspector").jPlayer.data("jPlayer").html.active) {
				if($(this).data("jPlayerInspector").jPlayer.data("jPlayer").flash.active) {
					jPlayerInfo += "<strong>Problem with jPlayer since both HTML5 and Flash are active.</strong>";
				} else {
					jPlayerInfo += "The <strong>HTML5 is active</strong>.";
				}
			} else {
				if($(this).data("jPlayerInspector").jPlayer.data("jPlayer").flash.active) {
					jPlayerInfo += "The <strong>Flash is active</strong>.";
				} else {
					jPlayerInfo += "No solution is currently active. jPlayer needs a setMedia().";
				}
			}
			jPlayerInfo += "</p>";

			var formatType = $(this).data("jPlayerInspector").jPlayer.data("jPlayer").status.formatType;
			jPlayerInfo += "<p><code>status.formatType = '" + formatType + "'</code><br />";
			if(formatType) {
				jPlayerInfo += "<code>Browser canPlay('" + $.jPlayer.prototype.format[formatType].codec + "')</code>";
			} else {
				jPlayerInfo += "</p>";
			}
			
			jPlayerInfo += "<p><code>status.src = '" + $(this).data("jPlayerInspector").jPlayer.data("jPlayer").status.src + "'</code></p>";

			jPlayerInfo += "<p><code>status.media = {<br />";
			for(prop in $(this).data("jPlayerInspector").jPlayer.data("jPlayer").status.media) {
				jPlayerInfo += "&nbsp;" + prop + ": " + $(this).data("jPlayerInspector").jPlayer.data("jPlayer").status.media[prop] + "<br />"; // Some are strings
			}
			jPlayerInfo += "};</code></p>"

			+ "<p>Raw browser test for HTML5 support. Should equal a function if HTML5 is available.<br />";
			if($(this).data("jPlayerInspector").jPlayer.data("jPlayer").html.audio.available) {
				jPlayerInfo += "<code>htmlElement.audio.canPlayType = " + (typeof $(this).data("jPlayerInspector").jPlayer.data("jPlayer").htmlElement.audio.canPlayType) +"</code><br />"
			}
			if($(this).data("jPlayerInspector").jPlayer.data("jPlayer").html.video.available) {
				jPlayerInfo += "<code>htmlElement.video.canPlayType = " + (typeof $(this).data("jPlayerInspector").jPlayer.data("jPlayer").htmlElement.video.canPlayType) +"</code>";
			}
			jPlayerInfo += "</p>";

			jPlayerInfo += "<p>This instance is using the constructor options:<br />"
			+ "<code>$('#" + $(this).data("jPlayerInspector").jPlayer.data("jPlayer").internal.self.id + "').jPlayer({<br />"

			+ "&nbsp;swfPath: '" + $(this).data("jPlayerInspector").jPlayer.jPlayer("option", "swfPath") + "',<br />"

			+ "&nbsp;solution: '" + $(this).data("jPlayerInspector").jPlayer.jPlayer("option", "solution") + "',<br />"

			+ "&nbsp;supplied: '" + $(this).data("jPlayerInspector").jPlayer.jPlayer("option", "supplied") + "',<br />"

			+ "&nbsp;preload: '" + $(this).data("jPlayerInspector").jPlayer.jPlayer("option", "preload") + "',<br />"
			
			+ "&nbsp;volume: " + $(this).data("jPlayerInspector").jPlayer.jPlayer("option", "volume") + ",<br />"
			
			+ "&nbsp;muted: " + $(this).data("jPlayerInspector").jPlayer.jPlayer("option", "muted") + ",<br />"

			+ "&nbsp;backgroundColor: '" + $(this).data("jPlayerInspector").jPlayer.jPlayer("option", "backgroundColor") + "',<br />"

			+ "&nbsp;cssSelectorAncestor: '" + $(this).data("jPlayerInspector").jPlayer.jPlayer("option", "cssSelectorAncestor") + "',<br />"

			+ "&nbsp;cssSelector: {";

			var cssSelector = $(this).data("jPlayerInspector").jPlayer.jPlayer("option", "cssSelector");
			for(prop in cssSelector) {
				
				// jPlayerInfo += "<br />&nbsp;&nbsp;" + prop + ": '" + cssSelector[prop] + "'," // This works too of course, but want to use option method for deep keys.
				jPlayerInfo += "<br />&nbsp;&nbsp;" + prop + ": '" + $(this).data("jPlayerInspector").jPlayer.jPlayer("option", "cssSelector." + prop) + "',"
			}

			jPlayerInfo = jPlayerInfo.slice(0, -1); // Because the sloppy comma was bugging me.

			jPlayerInfo += "<br />&nbsp;},<br />"

			+ "&nbsp;errorAlerts: " + $(this).data("jPlayerInspector").jPlayer.jPlayer("option", "errorAlerts") + ",<br />"
			
			+ "&nbsp;warningAlerts: " + $(this).data("jPlayerInspector").jPlayer.jPlayer("option", "warningAlerts") + "<br />"

			+ "});</code></p>";
			$(this).data("jPlayerInspector").configJq.html(jPlayerInfo);
			return this;
		},
		updateStatus: function() { // This displays information about jPlayer's status in the inspector
			$(this).data("jPlayerInspector").statusJq.html(
				"<p>jPlayer is " +
				($(this).data("jPlayerInspector").jPlayer.data("jPlayer").status.paused ? "paused" : "playing") +
				" at time: " + Math.floor($(this).data("jPlayerInspector").jPlayer.data("jPlayer").status.currentTime*10)/10 + "s." +
				" (d: " + Math.floor($(this).data("jPlayerInspector").jPlayer.data("jPlayer").status.duration*10)/10 + "s" +
				", sp: " + Math.floor($(this).data("jPlayerInspector").jPlayer.data("jPlayer").status.seekPercent) + "%" +
				", cpr: " + Math.floor($(this).data("jPlayerInspector").jPlayer.data("jPlayer").status.currentPercentRelative) + "%" +
				", cpa: " + Math.floor($(this).data("jPlayerInspector").jPlayer.data("jPlayer").status.currentPercentAbsolute) + "%)</p>"
			);
			return this;
		}
	};
	$.fn.jPlayerInspector = function( method ) {
		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.jPlayerInspector' );
		}    
	};
})(jQuery);
/*
 * jPlayer Plugin for jQuery JavaScript Library
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2012 Happyworm Ltd
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * Author: Mark J Panaghiston
 * Version: 2.2.0
 * Date: 13th September 2012
 */


(function(b,f){b.fn.jPlayer=function(a){var c="string"===typeof a,d=Array.prototype.slice.call(arguments,1),e=this,a=!c&&d.length?b.extend.apply(null,[!0,a].concat(d)):a;if(c&&"_"===a.charAt(0))return e;c?this.each(function(){var c=b.data(this,"jPlayer"),h=c&&b.isFunction(c[a])?c[a].apply(c,d):c;if(h!==c&&h!==f)return e=h,!1}):this.each(function(){var c=b.data(this,"jPlayer");c?c.option(a||{}):b.data(this,"jPlayer",new b.jPlayer(a,this))});return e};b.jPlayer=function(a,c){if(arguments.length){this.element=
b(c);this.options=b.extend(!0,{},this.options,a);var d=this;this.element.bind("remove.jPlayer",function(){d.destroy()});this._init()}};b.jPlayer.emulateMethods="load play pause";b.jPlayer.emulateStatus="src readyState networkState currentTime duration paused ended playbackRate";b.jPlayer.emulateOptions="muted volume";b.jPlayer.reservedEvent="ready flashreset resize repeat error warning";b.jPlayer.event={ready:"jPlayer_ready",flashreset:"jPlayer_flashreset",resize:"jPlayer_resize",repeat:"jPlayer_repeat",
click:"jPlayer_click",error:"jPlayer_error",warning:"jPlayer_warning",loadstart:"jPlayer_loadstart",progress:"jPlayer_progress",suspend:"jPlayer_suspend",abort:"jPlayer_abort",emptied:"jPlayer_emptied",stalled:"jPlayer_stalled",play:"jPlayer_play",pause:"jPlayer_pause",loadedmetadata:"jPlayer_loadedmetadata",loadeddata:"jPlayer_loadeddata",waiting:"jPlayer_waiting",playing:"jPlayer_playing",canplay:"jPlayer_canplay",canplaythrough:"jPlayer_canplaythrough",seeking:"jPlayer_seeking",seeked:"jPlayer_seeked",
timeupdate:"jPlayer_timeupdate",ended:"jPlayer_ended",ratechange:"jPlayer_ratechange",durationchange:"jPlayer_durationchange",volumechange:"jPlayer_volumechange"};b.jPlayer.htmlEvent="loadstart abort emptied stalled loadedmetadata loadeddata canplay canplaythrough ratechange".split(" ");b.jPlayer.pause=function(){b.each(b.jPlayer.prototype.instances,function(a,c){c.data("jPlayer").status.srcSet&&c.jPlayer("pause")})};b.jPlayer.timeFormat={showHour:!1,showMin:!0,showSec:!0,padHour:!1,padMin:!0,padSec:!0,
sepHour:":",sepMin:":",sepSec:""};b.jPlayer.convertTime=function(a){var c=new Date(1E3*a),d=c.getUTCHours(),a=c.getUTCMinutes(),c=c.getUTCSeconds(),d=b.jPlayer.timeFormat.padHour&&10>d?"0"+d:d,a=b.jPlayer.timeFormat.padMin&&10>a?"0"+a:a,c=b.jPlayer.timeFormat.padSec&&10>c?"0"+c:c;return(b.jPlayer.timeFormat.showHour?d+b.jPlayer.timeFormat.sepHour:"")+(b.jPlayer.timeFormat.showMin?a+b.jPlayer.timeFormat.sepMin:"")+(b.jPlayer.timeFormat.showSec?c+b.jPlayer.timeFormat.sepSec:"")};b.jPlayer.uaBrowser=
function(a){var a=a.toLowerCase(),c=/(opera)(?:.*version)?[ \/]([\w.]+)/,b=/(msie) ([\w.]+)/,e=/(mozilla)(?:.*? rv:([\w.]+))?/,a=/(webkit)[ \/]([\w.]+)/.exec(a)||c.exec(a)||b.exec(a)||0>a.indexOf("compatible")&&e.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}};b.jPlayer.uaPlatform=function(a){var b=a.toLowerCase(),d=/(android)/,e=/(mobile)/,a=/(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(b)||[],b=/(ipad|playbook)/.exec(b)||!e.exec(b)&&d.exec(b)||[];a[1]&&(a[1]=a[1].replace(/\s/g,
"_"));return{platform:a[1]||"",tablet:b[1]||""}};b.jPlayer.browser={};b.jPlayer.platform={};var i=b.jPlayer.uaBrowser(navigator.userAgent);i.browser&&(b.jPlayer.browser[i.browser]=!0,b.jPlayer.browser.version=i.version);i=b.jPlayer.uaPlatform(navigator.userAgent);i.platform&&(b.jPlayer.platform[i.platform]=!0,b.jPlayer.platform.mobile=!i.tablet,b.jPlayer.platform.tablet=!!i.tablet);b.jPlayer.prototype={count:0,version:{script:"2.2.0",needFlash:"2.2.0",flash:"unknown"},options:{swfPath:"js",solution:"html, flash",
supplied:"mp3",preload:"metadata",volume:0.8,muted:!1,wmode:"opaque",backgroundColor:"#000000",cssSelectorAncestor:"#jp_container_1",cssSelector:{videoPlay:".jp-video-play",play:".jp-play",pause:".jp-pause",stop:".jp-stop",seekBar:".jp-seek-bar",playBar:".jp-play-bar",mute:".jp-mute",unmute:".jp-unmute",volumeBar:".jp-volume-bar",volumeBarValue:".jp-volume-bar-value",volumeMax:".jp-volume-max",currentTime:".jp-current-time",duration:".jp-duration",fullScreen:".jp-full-screen",restoreScreen:".jp-restore-screen",
repeat:".jp-repeat",repeatOff:".jp-repeat-off",gui:".jp-gui",noSolution:".jp-no-solution"},fullScreen:!1,autohide:{restored:!1,full:!0,fadeIn:200,fadeOut:600,hold:1E3},loop:!1,repeat:function(a){a.jPlayer.options.loop?b(this).unbind(".jPlayerRepeat").bind(b.jPlayer.event.ended+".jPlayer.jPlayerRepeat",function(){b(this).jPlayer("play")}):b(this).unbind(".jPlayerRepeat")},nativeVideoControls:{},noFullScreen:{msie:/msie [0-6]/,ipad:/ipad.*?os [0-4]/,iphone:/iphone/,ipod:/ipod/,android_pad:/android [0-3](?!.*?mobile)/,
android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,webos:/webos/},noVolume:{ipad:/ipad/,iphone:/iphone/,ipod:/ipod/,android_pad:/android(?!.*?mobile)/,android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,webos:/webos/,playbook:/playbook/},verticalVolume:!1,idPrefix:"jp",noConflict:"jQuery",emulateHtml:!1,errorAlerts:!1,warningAlerts:!1},optionsAudio:{size:{width:"0px",height:"0px",cssClass:""},sizeFull:{width:"0px",height:"0px",cssClass:""}},
optionsVideo:{size:{width:"480px",height:"270px",cssClass:"jp-video-270p"},sizeFull:{width:"100%",height:"100%",cssClass:"jp-video-full"}},instances:{},status:{src:"",media:{},paused:!0,format:{},formatType:"",waitForPlay:!0,waitForLoad:!0,srcSet:!1,video:!1,seekPercent:0,currentPercentRelative:0,currentPercentAbsolute:0,currentTime:0,duration:0,readyState:0,networkState:0,playbackRate:1,ended:0},internal:{ready:!1},solution:{html:!0,flash:!0},format:{mp3:{codec:'audio/mpeg; codecs="mp3"',flashCanPlay:!0,
media:"audio"},m4a:{codec:'audio/mp4; codecs="mp4a.40.2"',flashCanPlay:!0,media:"audio"},oga:{codec:'audio/ogg; codecs="vorbis"',flashCanPlay:!1,media:"audio"},wav:{codec:'audio/wav; codecs="1"',flashCanPlay:!1,media:"audio"},webma:{codec:'audio/webm; codecs="vorbis"',flashCanPlay:!1,media:"audio"},fla:{codec:"audio/x-flv",flashCanPlay:!0,media:"audio"},rtmpa:{codec:'audio/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"audio"},m4v:{codec:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!0,media:"video"},
ogv:{codec:'video/ogg; codecs="theora, vorbis"',flashCanPlay:!1,media:"video"},webmv:{codec:'video/webm; codecs="vorbis, vp8"',flashCanPlay:!1,media:"video"},flv:{codec:"video/x-flv",flashCanPlay:!0,media:"video"},rtmpv:{codec:'video/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"video"}},_init:function(){var a=this;this.element.empty();this.status=b.extend({},this.status);this.internal=b.extend({},this.internal);this.internal.domNode=this.element.get(0);this.formats=[];this.solutions=[];this.require=
{};this.htmlElement={};this.html={};this.html.audio={};this.html.video={};this.flash={};this.css={};this.css.cs={};this.css.jq={};this.ancestorJq=[];this.options.volume=this._limitValue(this.options.volume,0,1);b.each(this.options.supplied.toLowerCase().split(","),function(c,d){var e=d.replace(/^\s+|\s+$/g,"");if(a.format[e]){var f=false;b.each(a.formats,function(a,b){if(e===b){f=true;return false}});f||a.formats.push(e)}});b.each(this.options.solution.toLowerCase().split(","),function(c,d){var e=
d.replace(/^\s+|\s+$/g,"");if(a.solution[e]){var f=false;b.each(a.solutions,function(a,b){if(e===b){f=true;return false}});f||a.solutions.push(e)}});this.internal.instance="jp_"+this.count;this.instances[this.internal.instance]=this.element;this.element.attr("id")||this.element.attr("id",this.options.idPrefix+"_jplayer_"+this.count);this.internal.self=b.extend({},{id:this.element.attr("id"),jq:this.element});this.internal.audio=b.extend({},{id:this.options.idPrefix+"_audio_"+this.count,jq:f});this.internal.video=
b.extend({},{id:this.options.idPrefix+"_video_"+this.count,jq:f});this.internal.flash=b.extend({},{id:this.options.idPrefix+"_flash_"+this.count,jq:f,swf:this.options.swfPath+(this.options.swfPath.toLowerCase().slice(-4)!==".swf"?(this.options.swfPath&&this.options.swfPath.slice(-1)!=="/"?"/":"")+"Jplayer.swf":"")});this.internal.poster=b.extend({},{id:this.options.idPrefix+"_poster_"+this.count,jq:f});b.each(b.jPlayer.event,function(b,c){if(a.options[b]!==f){a.element.bind(c+".jPlayer",a.options[b]);
a.options[b]=f}});this.require.audio=false;this.require.video=false;b.each(this.formats,function(b,c){a.require[a.format[c].media]=true});this.options=this.require.video?b.extend(true,{},this.optionsVideo,this.options):b.extend(true,{},this.optionsAudio,this.options);this._setSize();this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls);this.status.noFullScreen=this._uaBlocklist(this.options.noFullScreen);this.status.noVolume=this._uaBlocklist(this.options.noVolume);this._restrictNativeVideoControls();
this.htmlElement.poster=document.createElement("img");this.htmlElement.poster.id=this.internal.poster.id;this.htmlElement.poster.onload=function(){(!a.status.video||a.status.waitForPlay)&&a.internal.poster.jq.show()};this.element.append(this.htmlElement.poster);this.internal.poster.jq=b("#"+this.internal.poster.id);this.internal.poster.jq.css({width:this.status.width,height:this.status.height});this.internal.poster.jq.hide();this.internal.poster.jq.bind("click.jPlayer",function(){a._trigger(b.jPlayer.event.click)});
this.html.audio.available=false;if(this.require.audio){this.htmlElement.audio=document.createElement("audio");this.htmlElement.audio.id=this.internal.audio.id;this.html.audio.available=!!this.htmlElement.audio.canPlayType&&this._testCanPlayType(this.htmlElement.audio)}this.html.video.available=false;if(this.require.video){this.htmlElement.video=document.createElement("video");this.htmlElement.video.id=this.internal.video.id;this.html.video.available=!!this.htmlElement.video.canPlayType&&this._testCanPlayType(this.htmlElement.video)}this.flash.available=
this._checkForFlash(10);this.html.canPlay={};this.flash.canPlay={};b.each(this.formats,function(b,c){a.html.canPlay[c]=a.html[a.format[c].media].available&&""!==a.htmlElement[a.format[c].media].canPlayType(a.format[c].codec);a.flash.canPlay[c]=a.format[c].flashCanPlay&&a.flash.available});this.html.desired=false;this.flash.desired=false;b.each(this.solutions,function(c,d){if(c===0)a[d].desired=true;else{var e=false,f=false;b.each(a.formats,function(b,c){a[a.solutions[0]].canPlay[c]&&(a.format[c].media===
"video"?f=true:e=true)});a[d].desired=a.require.audio&&!e||a.require.video&&!f}});this.html.support={};this.flash.support={};b.each(this.formats,function(b,c){a.html.support[c]=a.html.canPlay[c]&&a.html.desired;a.flash.support[c]=a.flash.canPlay[c]&&a.flash.desired});this.html.used=false;this.flash.used=false;b.each(this.solutions,function(c,d){b.each(a.formats,function(b,c){if(a[d].support[c]){a[d].used=true;return false}})});this._resetActive();this._resetGate();this._cssSelectorAncestor(this.options.cssSelectorAncestor);
if(!this.html.used&&!this.flash.used){this._error({type:b.jPlayer.error.NO_SOLUTION,context:"{solution:'"+this.options.solution+"', supplied:'"+this.options.supplied+"'}",message:b.jPlayer.errorMsg.NO_SOLUTION,hint:b.jPlayer.errorHint.NO_SOLUTION});this.css.jq.noSolution.length&&this.css.jq.noSolution.show()}else this.css.jq.noSolution.length&&this.css.jq.noSolution.hide();if(this.flash.used){var c,d="jQuery="+encodeURI(this.options.noConflict)+"&id="+encodeURI(this.internal.self.id)+"&vol="+this.options.volume+
"&muted="+this.options.muted;if(b.jPlayer.browser.msie&&Number(b.jPlayer.browser.version)<=8){d=['<param name="movie" value="'+this.internal.flash.swf+'" />','<param name="FlashVars" value="'+d+'" />','<param name="allowScriptAccess" value="always" />','<param name="bgcolor" value="'+this.options.backgroundColor+'" />','<param name="wmode" value="'+this.options.wmode+'" />'];c=document.createElement('<object id="'+this.internal.flash.id+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0"></object>');
for(var e=0;e<d.length;e++)c.appendChild(document.createElement(d[e]))}else{e=function(a,b,c){var d=document.createElement("param");d.setAttribute("name",b);d.setAttribute("value",c);a.appendChild(d)};c=document.createElement("object");c.setAttribute("id",this.internal.flash.id);c.setAttribute("data",this.internal.flash.swf);c.setAttribute("type","application/x-shockwave-flash");c.setAttribute("width","1");c.setAttribute("height","1");e(c,"flashvars",d);e(c,"allowscriptaccess","always");e(c,"bgcolor",
this.options.backgroundColor);e(c,"wmode",this.options.wmode)}this.element.append(c);this.internal.flash.jq=b(c)}if(this.html.used){if(this.html.audio.available){this._addHtmlEventListeners(this.htmlElement.audio,this.html.audio);this.element.append(this.htmlElement.audio);this.internal.audio.jq=b("#"+this.internal.audio.id)}if(this.html.video.available){this._addHtmlEventListeners(this.htmlElement.video,this.html.video);this.element.append(this.htmlElement.video);this.internal.video.jq=b("#"+this.internal.video.id);
this.status.nativeVideoControls?this.internal.video.jq.css({width:this.status.width,height:this.status.height}):this.internal.video.jq.css({width:"0px",height:"0px"});this.internal.video.jq.bind("click.jPlayer",function(){a._trigger(b.jPlayer.event.click)})}}this.options.emulateHtml&&this._emulateHtmlBridge();this.html.used&&!this.flash.used&&setTimeout(function(){a.internal.ready=true;a.version.flash="n/a";a._trigger(b.jPlayer.event.repeat);a._trigger(b.jPlayer.event.ready)},100);this._updateNativeVideoControls();
this._updateInterface();this._updateButtons(false);this._updateAutohide();this._updateVolume(this.options.volume);this._updateMute(this.options.muted);this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide();b.jPlayer.prototype.count++},destroy:function(){this.clearMedia();this._removeUiClass();this.css.jq.currentTime.length&&this.css.jq.currentTime.text("");this.css.jq.duration.length&&this.css.jq.duration.text("");b.each(this.css.jq,function(a,b){b.length&&b.unbind(".jPlayer")});this.internal.poster.jq.unbind(".jPlayer");
this.internal.video.jq&&this.internal.video.jq.unbind(".jPlayer");this.options.emulateHtml&&this._destroyHtmlBridge();this.element.removeData("jPlayer");this.element.unbind(".jPlayer");this.element.empty();delete this.instances[this.internal.instance]},enable:function(){},disable:function(){},_testCanPlayType:function(a){try{a.canPlayType(this.format.mp3.codec);return true}catch(b){return false}},_uaBlocklist:function(a){var c=navigator.userAgent.toLowerCase(),d=false;b.each(a,function(a,b){if(b&&
b.test(c)){d=true;return false}});return d},_restrictNativeVideoControls:function(){if(this.require.audio&&this.status.nativeVideoControls){this.status.nativeVideoControls=false;this.status.noFullScreen=true}},_updateNativeVideoControls:function(){if(this.html.video.available&&this.html.used){this.htmlElement.video.controls=this.status.nativeVideoControls;this._updateAutohide();if(this.status.nativeVideoControls&&this.require.video){this.internal.poster.jq.hide();this.internal.video.jq.css({width:this.status.width,
height:this.status.height})}else if(this.status.waitForPlay&&this.status.video){this.internal.poster.jq.show();this.internal.video.jq.css({width:"0px",height:"0px"})}}},_addHtmlEventListeners:function(a,c){var d=this;a.preload=this.options.preload;a.muted=this.options.muted;a.volume=this.options.volume;a.addEventListener("progress",function(){if(c.gate){d._getHtmlStatus(a);d._updateInterface();d._trigger(b.jPlayer.event.progress)}},false);a.addEventListener("timeupdate",function(){if(c.gate){d._getHtmlStatus(a);
d._updateInterface();d._trigger(b.jPlayer.event.timeupdate)}},false);a.addEventListener("durationchange",function(){if(c.gate){d._getHtmlStatus(a);d._updateInterface();d._trigger(b.jPlayer.event.durationchange)}},false);a.addEventListener("play",function(){if(c.gate){d._updateButtons(true);d._html_checkWaitForPlay();d._trigger(b.jPlayer.event.play)}},false);a.addEventListener("playing",function(){if(c.gate){d._updateButtons(true);d._seeked();d._trigger(b.jPlayer.event.playing)}},false);a.addEventListener("pause",
function(){if(c.gate){d._updateButtons(false);d._trigger(b.jPlayer.event.pause)}},false);a.addEventListener("waiting",function(){if(c.gate){d._seeking();d._trigger(b.jPlayer.event.waiting)}},false);a.addEventListener("seeking",function(){if(c.gate){d._seeking();d._trigger(b.jPlayer.event.seeking)}},false);a.addEventListener("seeked",function(){if(c.gate){d._seeked();d._trigger(b.jPlayer.event.seeked)}},false);a.addEventListener("volumechange",function(){if(c.gate){d.options.volume=a.volume;d.options.muted=
a.muted;d._updateMute();d._updateVolume();d._trigger(b.jPlayer.event.volumechange)}},false);a.addEventListener("suspend",function(){if(c.gate){d._seeked();d._trigger(b.jPlayer.event.suspend)}},false);a.addEventListener("ended",function(){if(c.gate){if(!b.jPlayer.browser.webkit)d.htmlElement.media.currentTime=0;d.htmlElement.media.pause();d._updateButtons(false);d._getHtmlStatus(a,true);d._updateInterface();d._trigger(b.jPlayer.event.ended)}},false);a.addEventListener("error",function(){if(c.gate){d._updateButtons(false);
d._seeked();if(d.status.srcSet){clearTimeout(d.internal.htmlDlyCmdId);d.status.waitForLoad=true;d.status.waitForPlay=true;d.status.video&&!d.status.nativeVideoControls&&d.internal.video.jq.css({width:"0px",height:"0px"});d._validString(d.status.media.poster)&&!d.status.nativeVideoControls&&d.internal.poster.jq.show();d.css.jq.videoPlay.length&&d.css.jq.videoPlay.show();d._error({type:b.jPlayer.error.URL,context:d.status.src,message:b.jPlayer.errorMsg.URL,hint:b.jPlayer.errorHint.URL})}}},false);b.each(b.jPlayer.htmlEvent,
function(e,g){a.addEventListener(this,function(){c.gate&&d._trigger(b.jPlayer.event[g])},false)})},_getHtmlStatus:function(a,b){var d=0,e=0,g=0,f=0;if(isFinite(a.duration))this.status.duration=a.duration;d=a.currentTime;e=this.status.duration>0?100*d/this.status.duration:0;if(typeof a.seekable==="object"&&a.seekable.length>0){g=this.status.duration>0?100*a.seekable.end(a.seekable.length-1)/this.status.duration:100;f=this.status.duration>0?100*a.currentTime/a.seekable.end(a.seekable.length-1):0}else{g=
100;f=e}if(b)e=f=d=0;this.status.seekPercent=g;this.status.currentPercentRelative=f;this.status.currentPercentAbsolute=e;this.status.currentTime=d;this.status.readyState=a.readyState;this.status.networkState=a.networkState;this.status.playbackRate=a.playbackRate;this.status.ended=a.ended},_resetStatus:function(){this.status=b.extend({},this.status,b.jPlayer.prototype.status)},_trigger:function(a,c,d){a=b.Event(a);a.jPlayer={};a.jPlayer.version=b.extend({},this.version);a.jPlayer.options=b.extend(true,
{},this.options);a.jPlayer.status=b.extend(true,{},this.status);a.jPlayer.html=b.extend(true,{},this.html);a.jPlayer.flash=b.extend(true,{},this.flash);if(c)a.jPlayer.error=b.extend({},c);if(d)a.jPlayer.warning=b.extend({},d);this.element.trigger(a)},jPlayerFlashEvent:function(a,c){if(a===b.jPlayer.event.ready)if(this.internal.ready){if(this.flash.gate){if(this.status.srcSet){var d=this.status.currentTime,e=this.status.paused;this.setMedia(this.status.media);d>0&&(e?this.pause(d):this.play(d))}this._trigger(b.jPlayer.event.flashreset)}}else{this.internal.ready=
true;this.internal.flash.jq.css({width:"0px",height:"0px"});this.version.flash=c.version;this.version.needFlash!==this.version.flash&&this._error({type:b.jPlayer.error.VERSION,context:this.version.flash,message:b.jPlayer.errorMsg.VERSION+this.version.flash,hint:b.jPlayer.errorHint.VERSION});this._trigger(b.jPlayer.event.repeat);this._trigger(a)}if(this.flash.gate)switch(a){case b.jPlayer.event.progress:this._getFlashStatus(c);this._updateInterface();this._trigger(a);break;case b.jPlayer.event.timeupdate:this._getFlashStatus(c);
this._updateInterface();this._trigger(a);break;case b.jPlayer.event.play:this._seeked();this._updateButtons(true);this._trigger(a);break;case b.jPlayer.event.pause:this._updateButtons(false);this._trigger(a);break;case b.jPlayer.event.ended:this._updateButtons(false);this._trigger(a);break;case b.jPlayer.event.click:this._trigger(a);break;case b.jPlayer.event.error:this.status.waitForLoad=true;this.status.waitForPlay=true;this.status.video&&this.internal.flash.jq.css({width:"0px",height:"0px"});this._validString(this.status.media.poster)&&
this.internal.poster.jq.show();this.css.jq.videoPlay.length&&this.status.video&&this.css.jq.videoPlay.show();this.status.video?this._flash_setVideo(this.status.media):this._flash_setAudio(this.status.media);this._updateButtons(false);this._error({type:b.jPlayer.error.URL,context:c.src,message:b.jPlayer.errorMsg.URL,hint:b.jPlayer.errorHint.URL});break;case b.jPlayer.event.seeking:this._seeking();this._trigger(a);break;case b.jPlayer.event.seeked:this._seeked();this._trigger(a);break;case b.jPlayer.event.ready:break;
default:this._trigger(a)}return false},_getFlashStatus:function(a){this.status.seekPercent=a.seekPercent;this.status.currentPercentRelative=a.currentPercentRelative;this.status.currentPercentAbsolute=a.currentPercentAbsolute;this.status.currentTime=a.currentTime;this.status.duration=a.duration;this.status.readyState=4;this.status.networkState=0;this.status.playbackRate=1;this.status.ended=false},_updateButtons:function(a){if(a!==f){this.status.paused=!a;if(this.css.jq.play.length&&this.css.jq.pause.length)if(a){this.css.jq.play.hide();
this.css.jq.pause.show()}else{this.css.jq.play.show();this.css.jq.pause.hide()}}if(this.css.jq.restoreScreen.length&&this.css.jq.fullScreen.length)if(this.status.noFullScreen){this.css.jq.fullScreen.hide();this.css.jq.restoreScreen.hide()}else if(this.options.fullScreen){this.css.jq.fullScreen.hide();this.css.jq.restoreScreen.show()}else{this.css.jq.fullScreen.show();this.css.jq.restoreScreen.hide()}if(this.css.jq.repeat.length&&this.css.jq.repeatOff.length)if(this.options.loop){this.css.jq.repeat.hide();
this.css.jq.repeatOff.show()}else{this.css.jq.repeat.show();this.css.jq.repeatOff.hide()}},_updateInterface:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.width(this.status.seekPercent+"%");this.css.jq.playBar.length&&this.css.jq.playBar.width(this.status.currentPercentRelative+"%");this.css.jq.currentTime.length&&this.css.jq.currentTime.text(b.jPlayer.convertTime(this.status.currentTime));this.css.jq.duration.length&&this.css.jq.duration.text(b.jPlayer.convertTime(this.status.duration))},
_seeking:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.addClass("jp-seeking-bg")},_seeked:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.removeClass("jp-seeking-bg")},_resetGate:function(){this.html.audio.gate=false;this.html.video.gate=false;this.flash.gate=false},_resetActive:function(){this.html.active=false;this.flash.active=false},setMedia:function(a){var c=this,d=false,e=this.status.media.poster!==a.poster;this._resetMedia();this._resetGate();this._resetActive();b.each(this.formats,
function(e,f){var i=c.format[f].media==="video";b.each(c.solutions,function(b,e){if(c[e].support[f]&&c._validString(a[f])){var g=e==="html";if(i){if(g){c.html.video.gate=true;c._html_setVideo(a);c.html.active=true}else{c.flash.gate=true;c._flash_setVideo(a);c.flash.active=true}c.css.jq.videoPlay.length&&c.css.jq.videoPlay.show();c.status.video=true}else{if(g){c.html.audio.gate=true;c._html_setAudio(a);c.html.active=true}else{c.flash.gate=true;c._flash_setAudio(a);c.flash.active=true}c.css.jq.videoPlay.length&&
c.css.jq.videoPlay.hide();c.status.video=false}d=true;return false}});if(d)return false});if(d){if((!this.status.nativeVideoControls||!this.html.video.gate)&&this._validString(a.poster))e?this.htmlElement.poster.src=a.poster:this.internal.poster.jq.show();this.status.srcSet=true;this.status.media=b.extend({},a);this._updateButtons(false);this._updateInterface()}else this._error({type:b.jPlayer.error.NO_SUPPORT,context:"{supplied:'"+this.options.supplied+"'}",message:b.jPlayer.errorMsg.NO_SUPPORT,
hint:b.jPlayer.errorHint.NO_SUPPORT})},_resetMedia:function(){this._resetStatus();this._updateButtons(false);this._updateInterface();this._seeked();this.internal.poster.jq.hide();clearTimeout(this.internal.htmlDlyCmdId);this.html.active?this._html_resetMedia():this.flash.active&&this._flash_resetMedia()},clearMedia:function(){this._resetMedia();this.html.active?this._html_clearMedia():this.flash.active&&this._flash_clearMedia();this._resetGate();this._resetActive()},load:function(){this.status.srcSet?
this.html.active?this._html_load():this.flash.active&&this._flash_load():this._urlNotSetError("load")},play:function(a){a=typeof a==="number"?a:NaN;this.status.srcSet?this.html.active?this._html_play(a):this.flash.active&&this._flash_play(a):this._urlNotSetError("play")},videoPlay:function(){this.play()},pause:function(a){a=typeof a==="number"?a:NaN;this.status.srcSet?this.html.active?this._html_pause(a):this.flash.active&&this._flash_pause(a):this._urlNotSetError("pause")},pauseOthers:function(){var a=
this;b.each(this.instances,function(b,d){a.element!==d&&d.data("jPlayer").status.srcSet&&d.jPlayer("pause")})},stop:function(){this.status.srcSet?this.html.active?this._html_pause(0):this.flash.active&&this._flash_pause(0):this._urlNotSetError("stop")},playHead:function(a){a=this._limitValue(a,0,100);this.status.srcSet?this.html.active?this._html_playHead(a):this.flash.active&&this._flash_playHead(a):this._urlNotSetError("playHead")},_muted:function(a){this.options.muted=a;this.html.used&&this._html_mute(a);
this.flash.used&&this._flash_mute(a);if(!this.html.video.gate&&!this.html.audio.gate){this._updateMute(a);this._updateVolume(this.options.volume);this._trigger(b.jPlayer.event.volumechange)}},mute:function(a){a=a===f?true:!!a;this._muted(a)},unmute:function(a){a=a===f?true:!!a;this._muted(!a)},_updateMute:function(a){if(a===f)a=this.options.muted;if(this.css.jq.mute.length&&this.css.jq.unmute.length)if(this.status.noVolume){this.css.jq.mute.hide();this.css.jq.unmute.hide()}else if(a){this.css.jq.mute.hide();
this.css.jq.unmute.show()}else{this.css.jq.mute.show();this.css.jq.unmute.hide()}},volume:function(a){a=this._limitValue(a,0,1);this.options.volume=a;this.html.used&&this._html_volume(a);this.flash.used&&this._flash_volume(a);if(!this.html.video.gate&&!this.html.audio.gate){this._updateVolume(a);this._trigger(b.jPlayer.event.volumechange)}},volumeBar:function(a){if(this.css.jq.volumeBar.length){var b=this.css.jq.volumeBar.offset(),d=a.pageX-b.left,e=this.css.jq.volumeBar.width(),a=this.css.jq.volumeBar.height()-
a.pageY+b.top,b=this.css.jq.volumeBar.height();this.options.verticalVolume?this.volume(a/b):this.volume(d/e)}this.options.muted&&this._muted(false)},volumeBarValue:function(a){this.volumeBar(a)},_updateVolume:function(a){if(a===f)a=this.options.volume;a=this.options.muted?0:a;if(this.status.noVolume){this.css.jq.volumeBar.length&&this.css.jq.volumeBar.hide();this.css.jq.volumeBarValue.length&&this.css.jq.volumeBarValue.hide();this.css.jq.volumeMax.length&&this.css.jq.volumeMax.hide()}else{this.css.jq.volumeBar.length&&
this.css.jq.volumeBar.show();if(this.css.jq.volumeBarValue.length){this.css.jq.volumeBarValue.show();this.css.jq.volumeBarValue[this.options.verticalVolume?"height":"width"](a*100+"%")}this.css.jq.volumeMax.length&&this.css.jq.volumeMax.show()}},volumeMax:function(){this.volume(1);this.options.muted&&this._muted(false)},_cssSelectorAncestor:function(a){var c=this;this.options.cssSelectorAncestor=a;this._removeUiClass();this.ancestorJq=a?b(a):[];a&&this.ancestorJq.length!==1&&this._warning({type:b.jPlayer.warning.CSS_SELECTOR_COUNT,
context:a,message:b.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.ancestorJq.length+" found for cssSelectorAncestor.",hint:b.jPlayer.warningHint.CSS_SELECTOR_COUNT});this._addUiClass();b.each(this.options.cssSelector,function(a,b){c._cssSelector(a,b)})},_cssSelector:function(a,c){var d=this;if(typeof c==="string")if(b.jPlayer.prototype.options.cssSelector[a]){this.css.jq[a]&&this.css.jq[a].length&&this.css.jq[a].unbind(".jPlayer");this.options.cssSelector[a]=c;this.css.cs[a]=this.options.cssSelectorAncestor+
" "+c;this.css.jq[a]=c?b(this.css.cs[a]):[];this.css.jq[a].length&&this.css.jq[a].bind("click.jPlayer",function(c){d[a](c);b(this).blur();return false});c&&this.css.jq[a].length!==1&&this._warning({type:b.jPlayer.warning.CSS_SELECTOR_COUNT,context:this.css.cs[a],message:b.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.css.jq[a].length+" found for "+a+" method.",hint:b.jPlayer.warningHint.CSS_SELECTOR_COUNT})}else this._warning({type:b.jPlayer.warning.CSS_SELECTOR_METHOD,context:a,message:b.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
hint:b.jPlayer.warningHint.CSS_SELECTOR_METHOD});else this._warning({type:b.jPlayer.warning.CSS_SELECTOR_STRING,context:c,message:b.jPlayer.warningMsg.CSS_SELECTOR_STRING,hint:b.jPlayer.warningHint.CSS_SELECTOR_STRING})},seekBar:function(a){if(this.css.jq.seekBar){var b=this.css.jq.seekBar.offset(),a=a.pageX-b.left,b=this.css.jq.seekBar.width();this.playHead(100*a/b)}},playBar:function(a){this.seekBar(a)},repeat:function(){this._loop(true)},repeatOff:function(){this._loop(false)},_loop:function(a){if(this.options.loop!==
a){this.options.loop=a;this._updateButtons();this._trigger(b.jPlayer.event.repeat)}},currentTime:function(){},duration:function(){},gui:function(){},noSolution:function(){},option:function(a,c){var d=a;if(arguments.length===0)return b.extend(true,{},this.options);if(typeof a==="string"){var e=a.split(".");if(c===f){for(var d=b.extend(true,{},this.options),g=0;g<e.length;g++)if(d[e[g]]!==f)d=d[e[g]];else{this._warning({type:b.jPlayer.warning.OPTION_KEY,context:a,message:b.jPlayer.warningMsg.OPTION_KEY,
hint:b.jPlayer.warningHint.OPTION_KEY});return f}return d}for(var g=d={},h=0;h<e.length;h++)if(h<e.length-1){g[e[h]]={};g=g[e[h]]}else g[e[h]]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,c){var d=this;switch(a){case "volume":this.volume(c);break;case "muted":this._muted(c);break;case "cssSelectorAncestor":this._cssSelectorAncestor(c);break;case "cssSelector":b.each(c,function(a,b){d._cssSelector(a,
b)});break;case "fullScreen":if(this.options[a]!==c){this._removeUiClass();this.options[a]=c;this._refreshSize()}break;case "size":!this.options.fullScreen&&this.options[a].cssClass!==c.cssClass&&this._removeUiClass();this.options[a]=b.extend({},this.options[a],c);this._refreshSize();break;case "sizeFull":this.options.fullScreen&&this.options[a].cssClass!==c.cssClass&&this._removeUiClass();this.options[a]=b.extend({},this.options[a],c);this._refreshSize();break;case "autohide":this.options[a]=b.extend({},
this.options[a],c);this._updateAutohide();break;case "loop":this._loop(c);break;case "nativeVideoControls":this.options[a]=b.extend({},this.options[a],c);this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls);this._restrictNativeVideoControls();this._updateNativeVideoControls();break;case "noFullScreen":this.options[a]=b.extend({},this.options[a],c);this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls);this.status.noFullScreen=this._uaBlocklist(this.options.noFullScreen);
this._restrictNativeVideoControls();this._updateButtons();break;case "noVolume":this.options[a]=b.extend({},this.options[a],c);this.status.noVolume=this._uaBlocklist(this.options.noVolume);this._updateVolume();this._updateMute();break;case "emulateHtml":if(this.options[a]!==c)(this.options[a]=c)?this._emulateHtmlBridge():this._destroyHtmlBridge()}return this},_refreshSize:function(){this._setSize();this._addUiClass();this._updateSize();this._updateButtons();this._updateAutohide();this._trigger(b.jPlayer.event.resize)},
_setSize:function(){if(this.options.fullScreen){this.status.width=this.options.sizeFull.width;this.status.height=this.options.sizeFull.height;this.status.cssClass=this.options.sizeFull.cssClass}else{this.status.width=this.options.size.width;this.status.height=this.options.size.height;this.status.cssClass=this.options.size.cssClass}this.element.css({width:this.status.width,height:this.status.height})},_addUiClass:function(){this.ancestorJq.length&&this.ancestorJq.addClass(this.status.cssClass)},_removeUiClass:function(){this.ancestorJq.length&&
this.ancestorJq.removeClass(this.status.cssClass)},_updateSize:function(){this.internal.poster.jq.css({width:this.status.width,height:this.status.height});!this.status.waitForPlay&&this.html.active&&this.status.video||this.html.video.available&&this.html.used&&this.status.nativeVideoControls?this.internal.video.jq.css({width:this.status.width,height:this.status.height}):!this.status.waitForPlay&&(this.flash.active&&this.status.video)&&this.internal.flash.jq.css({width:this.status.width,height:this.status.height})},
_updateAutohide:function(){var a=this,b=function(){a.css.jq.gui.fadeIn(a.options.autohide.fadeIn,function(){clearTimeout(a.internal.autohideId);a.internal.autohideId=setTimeout(function(){a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)},a.options.autohide.hold)})};if(this.css.jq.gui.length){this.css.jq.gui.stop(true,true);clearTimeout(this.internal.autohideId);this.element.unbind(".jPlayerAutohide");this.css.jq.gui.unbind(".jPlayerAutohide");if(this.status.nativeVideoControls)this.css.jq.gui.hide();
else if(this.options.fullScreen&&this.options.autohide.full||!this.options.fullScreen&&this.options.autohide.restored){this.element.bind("mousemove.jPlayer.jPlayerAutohide",b);this.css.jq.gui.bind("mousemove.jPlayer.jPlayerAutohide",b);this.css.jq.gui.hide()}else this.css.jq.gui.show()}},fullScreen:function(){this._setOption("fullScreen",true)},restoreScreen:function(){this._setOption("fullScreen",false)},_html_initMedia:function(){this.htmlElement.media.src=this.status.src;this.options.preload!==
"none"&&this._html_load();this._trigger(b.jPlayer.event.timeupdate)},_html_setAudio:function(a){var c=this;b.each(this.formats,function(b,e){if(c.html.support[e]&&a[e]){c.status.src=a[e];c.status.format[e]=true;c.status.formatType=e;return false}});this.htmlElement.media=this.htmlElement.audio;this._html_initMedia()},_html_setVideo:function(a){var c=this;b.each(this.formats,function(b,e){if(c.html.support[e]&&a[e]){c.status.src=a[e];c.status.format[e]=true;c.status.formatType=e;return false}});if(this.status.nativeVideoControls)this.htmlElement.video.poster=
this._validString(a.poster)?a.poster:"";this.htmlElement.media=this.htmlElement.video;this._html_initMedia()},_html_resetMedia:function(){if(this.htmlElement.media){this.htmlElement.media.id===this.internal.video.id&&!this.status.nativeVideoControls&&this.internal.video.jq.css({width:"0px",height:"0px"});this.htmlElement.media.pause()}},_html_clearMedia:function(){if(this.htmlElement.media){this.htmlElement.media.src="";this.htmlElement.media.load()}},_html_load:function(){if(this.status.waitForLoad){this.status.waitForLoad=
false;this.htmlElement.media.load()}clearTimeout(this.internal.htmlDlyCmdId)},_html_play:function(a){var b=this;this._html_load();this.htmlElement.media.play();if(!isNaN(a))try{this.htmlElement.media.currentTime=a}catch(d){this.internal.htmlDlyCmdId=setTimeout(function(){b.play(a)},100);return}this._html_checkWaitForPlay()},_html_pause:function(a){var b=this;a>0?this._html_load():clearTimeout(this.internal.htmlDlyCmdId);this.htmlElement.media.pause();if(!isNaN(a))try{this.htmlElement.media.currentTime=
a}catch(d){this.internal.htmlDlyCmdId=setTimeout(function(){b.pause(a)},100);return}a>0&&this._html_checkWaitForPlay()},_html_playHead:function(a){var b=this;this._html_load();try{if(typeof this.htmlElement.media.seekable==="object"&&this.htmlElement.media.seekable.length>0)this.htmlElement.media.currentTime=a*this.htmlElement.media.seekable.end(this.htmlElement.media.seekable.length-1)/100;else if(this.htmlElement.media.duration>0&&!isNaN(this.htmlElement.media.duration))this.htmlElement.media.currentTime=
a*this.htmlElement.media.duration/100;else throw"e";}catch(d){this.internal.htmlDlyCmdId=setTimeout(function(){b.playHead(a)},100);return}this.status.waitForLoad||this._html_checkWaitForPlay()},_html_checkWaitForPlay:function(){if(this.status.waitForPlay){this.status.waitForPlay=false;this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide();if(this.status.video){this.internal.poster.jq.hide();this.internal.video.jq.css({width:this.status.width,height:this.status.height})}}},_html_volume:function(a){if(this.html.audio.available)this.htmlElement.audio.volume=
a;if(this.html.video.available)this.htmlElement.video.volume=a},_html_mute:function(a){if(this.html.audio.available)this.htmlElement.audio.muted=a;if(this.html.video.available)this.htmlElement.video.muted=a},_flash_setAudio:function(a){var c=this;try{b.each(this.formats,function(b,d){if(c.flash.support[d]&&a[d]){switch(d){case "m4a":case "fla":c._getMovie().fl_setAudio_m4a(a[d]);break;case "mp3":c._getMovie().fl_setAudio_mp3(a[d]);break;case "rtmpa":c._getMovie().fl_setAudio_rtmp(a[d])}c.status.src=
a[d];c.status.format[d]=true;c.status.formatType=d;return false}});if(this.options.preload==="auto"){this._flash_load();this.status.waitForLoad=false}}catch(d){this._flashError(d)}},_flash_setVideo:function(a){var c=this;try{b.each(this.formats,function(b,d){if(c.flash.support[d]&&a[d]){switch(d){case "m4v":case "flv":c._getMovie().fl_setVideo_m4v(a[d]);break;case "rtmpv":c._getMovie().fl_setVideo_rtmp(a[d])}c.status.src=a[d];c.status.format[d]=true;c.status.formatType=d;return false}});if(this.options.preload===
"auto"){this._flash_load();this.status.waitForLoad=false}}catch(d){this._flashError(d)}},_flash_resetMedia:function(){this.internal.flash.jq.css({width:"0px",height:"0px"});this._flash_pause(NaN)},_flash_clearMedia:function(){try{this._getMovie().fl_clearMedia()}catch(a){this._flashError(a)}},_flash_load:function(){try{this._getMovie().fl_load()}catch(a){this._flashError(a)}this.status.waitForLoad=false},_flash_play:function(a){try{this._getMovie().fl_play(a)}catch(b){this._flashError(b)}this.status.waitForLoad=
false;this._flash_checkWaitForPlay()},_flash_pause:function(a){try{this._getMovie().fl_pause(a)}catch(b){this._flashError(b)}if(a>0){this.status.waitForLoad=false;this._flash_checkWaitForPlay()}},_flash_playHead:function(a){try{this._getMovie().fl_play_head(a)}catch(b){this._flashError(b)}this.status.waitForLoad||this._flash_checkWaitForPlay()},_flash_checkWaitForPlay:function(){if(this.status.waitForPlay){this.status.waitForPlay=false;this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide();if(this.status.video){this.internal.poster.jq.hide();
this.internal.flash.jq.css({width:this.status.width,height:this.status.height})}}},_flash_volume:function(a){try{this._getMovie().fl_volume(a)}catch(b){this._flashError(b)}},_flash_mute:function(a){try{this._getMovie().fl_mute(a)}catch(b){this._flashError(b)}},_getMovie:function(){return document[this.internal.flash.id]},_checkForFlash:function(a){var b=false,d;if(window.ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+a);b=true}catch(e){}else if(navigator.plugins&&navigator.mimeTypes.length>
0)(d=navigator.plugins["Shockwave Flash"])&&navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/,"$1")>=a&&(b=true);return b},_validString:function(a){return a&&typeof a==="string"},_limitValue:function(a,b,d){return a<b?b:a>d?d:a},_urlNotSetError:function(a){this._error({type:b.jPlayer.error.URL_NOT_SET,context:a,message:b.jPlayer.errorMsg.URL_NOT_SET,hint:b.jPlayer.errorHint.URL_NOT_SET})},_flashError:function(a){var c;c=this.internal.ready?"FLASH_DISABLED":"FLASH";this._error({type:b.jPlayer.error[c],
context:this.internal.flash.swf,message:b.jPlayer.errorMsg[c]+a.message,hint:b.jPlayer.errorHint[c]});this.internal.flash.jq.css({width:"1px",height:"1px"})},_error:function(a){this._trigger(b.jPlayer.event.error,a);this.options.errorAlerts&&this._alert("Error!"+(a.message?"\n\n"+a.message:"")+(a.hint?"\n\n"+a.hint:"")+"\n\nContext: "+a.context)},_warning:function(a){this._trigger(b.jPlayer.event.warning,f,a);this.options.warningAlerts&&this._alert("Warning!"+(a.message?"\n\n"+a.message:"")+(a.hint?
"\n\n"+a.hint:"")+"\n\nContext: "+a.context)},_alert:function(a){alert("jPlayer "+this.version.script+" : id='"+this.internal.self.id+"' : "+a)},_emulateHtmlBridge:function(){var a=this;b.each(b.jPlayer.emulateMethods.split(/\s+/g),function(b,d){a.internal.domNode[d]=function(b){a[d](b)}});b.each(b.jPlayer.event,function(c,d){var e=true;b.each(b.jPlayer.reservedEvent.split(/\s+/g),function(a,b){if(b===c)return e=false});e&&a.element.bind(d+".jPlayer.jPlayerHtml",function(){a._emulateHtmlUpdate();
var b=document.createEvent("Event");b.initEvent(c,false,true);a.internal.domNode.dispatchEvent(b)})})},_emulateHtmlUpdate:function(){var a=this;b.each(b.jPlayer.emulateStatus.split(/\s+/g),function(b,d){a.internal.domNode[d]=a.status[d]});b.each(b.jPlayer.emulateOptions.split(/\s+/g),function(b,d){a.internal.domNode[d]=a.options[d]})},_destroyHtmlBridge:function(){var a=this;this.element.unbind(".jPlayerHtml");b.each((b.jPlayer.emulateMethods+" "+b.jPlayer.emulateStatus+" "+b.jPlayer.emulateOptions).split(/\s+/g),
function(b,d){delete a.internal.domNode[d]})}};b.jPlayer.error={FLASH:"e_flash",FLASH_DISABLED:"e_flash_disabled",NO_SOLUTION:"e_no_solution",NO_SUPPORT:"e_no_support",URL:"e_url",URL_NOT_SET:"e_url_not_set",VERSION:"e_version"};b.jPlayer.errorMsg={FLASH:"jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",FLASH_DISABLED:"jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",NO_SOLUTION:"No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
NO_SUPPORT:"It is not possible to play any media format provided in setMedia() on this browser using your current options.",URL:"Media URL could not be loaded.",URL_NOT_SET:"Attempt to issue media playback commands, while no media url is set.",VERSION:"jPlayer "+b.jPlayer.prototype.version.script+" needs Jplayer.swf version "+b.jPlayer.prototype.version.needFlash+" but found "};b.jPlayer.errorHint={FLASH:"Check your swfPath option and that Jplayer.swf is there.",FLASH_DISABLED:"Check that you have not display:none; the jPlayer entity or any ancestor.",
NO_SOLUTION:"Review the jPlayer options: support and supplied.",NO_SUPPORT:"Video or audio formats defined in the supplied option are missing.",URL:"Check media URL is valid.",URL_NOT_SET:"Use setMedia() to set the media URL.",VERSION:"Update jPlayer files."};b.jPlayer.warning={CSS_SELECTOR_COUNT:"e_css_selector_count",CSS_SELECTOR_METHOD:"e_css_selector_method",CSS_SELECTOR_STRING:"e_css_selector_string",OPTION_KEY:"e_option_key"};b.jPlayer.warningMsg={CSS_SELECTOR_COUNT:"The number of css selectors found did not equal one: ",
CSS_SELECTOR_METHOD:"The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",CSS_SELECTOR_STRING:"The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",OPTION_KEY:"The option requested in jPlayer('option') is undefined."};b.jPlayer.warningHint={CSS_SELECTOR_COUNT:"Check your css selector and the ancestor.",CSS_SELECTOR_METHOD:"Check your method name.",CSS_SELECTOR_STRING:"Check your css selector is a string.",OPTION_KEY:"Check your option name."}})(jQuery);
/*!
 * tn3 v1.3.0.52
 * http://tn3gallery.com/
 *
 * License
 * http://tn3gallery.com/license
 *
 * Date: 07 Sep, 2012 12:33:07 +0300
 */

(function(f){function c(h){var i=h.skinDir+"/"+h.skin,l=j[i];if(l)l.loaded?a.call(this,h,l.html):l.queue.push({c:this,s:h});else{j[i]={loaded:false,queue:[{c:this,s:h}]};f.ajax({url:i+".html",dataType:"text",success:function(m){var p=j[i];p.loaded=true;p.html=m;for(m=0;m<p.queue.length;m++)a.call(p.queue[m].c,p.queue[m].s,p.html)},dataFilter:function(m){return m=m.substring(m.indexOf("<body>")+6,m.lastIndexOf("</body>"))},error:function(){if(h.error){var m=f.Event("tn3_error");m.description="tn3 skin load error";
h.error(m)}}})}return this}function a(h,i){this.each(function(){for(var l=f(this),m,p,q=i.indexOf("<img src=");q!=-1;){q+=10;p=i.indexOf('"',q);m=h.skinDir+"/"+i.substring(q,p);i=i.substr(0,q)+m+i.substr(p);q=i.indexOf("<img src=",q)}l.append(i);l.data("tn3").init(l,h.fullOnly)})}function d(h){var i=[],l=h.children(".tn3.album"),m,p;if(l.length>0)l.each(function(q){m=f(this);i[q]={title:m.find(":header").html()};f.extend(i[q],e(m));if(p=b(m)){i[q].imgs=p;if(!i[q].thumb)i[q].thumb=i[q].imgs[0].thumb}});
else if(p=b(h))i[0]={imgs:p};return i}function b(h){var i=[],l,m;l=h.children("ol,ul").children("li");if(l.length>0)l.each(function(p){m=f(this);$firsta=m.find("a:not(.tn3 > a)").filter(":first");i[p]={title:m.find(":header").filter(":first").html()};if($firsta.length>0){i[p].img=$firsta.attr("href");i[p].thumb=$firsta.find("img").attr("src")}else i[p].img=m.find("img").filter(":first").attr("src");f.extend(i[p],e(m))});else{l=h.find("img");l.each(function(p){m=f(this);$at=m.parent("a");i[p]=$at.length==
0?{title:m.attr("title"),img:m.attr("src")}:{title:m.attr("title"),img:$at.attr("href"),thumb:m.attr("src")}})}if(i.length==0)return null;return i}function e(h){var i={};h=h.children(".tn3");var l;f.each(h,function(){l=f(this);i[l.attr("class").substr(4)]=l.html()});return i}function g(h){f('a[href^="#tn3-'+h+'"]').click(function(i){var l=n[h];i=f(i.currentTarget).attr("href");i=i.substr(i.indexOf("-",5)+1);i=i.split("-");switch(i[0]){case "next":l.cAlbum!=null&&l.show("next",i[1]=="fs");break;case "prev":l.cAlbum!=
null&&l.show("prev",i[1]=="fs");break;default:l.cAlbum!=parseInt(i[0])?l.showAlbum(parseInt(i[0]),parseInt(i[1]),i[2]=="fs"):l.show(parseInt(i[1]),i[2]=="fs")}})}function k(){if(n.length==0){var h=f(".tn3gallery");h.length>0&&h.tn3({})}}if(/1\.(0|1|2|3|4)\.(0|1)/.test(f.fn.jquery)||/^1.1/.test(f.fn.jquery)||/^1.2/.test(f.fn.jquery)||/^1.3/.test(f.fn.jquery))alert("tn3gallery requires jQuery v1.4.2 or later!  You are using v"+f.fn.jquery);else{var j={},n=[];f.fn.tn3=function(h){f.each(["skin","startWithAlbums",
"external"],function(l,m){var p=m.split(".");if(p.length>1&&h[p[0]])delete h[p[0]][p[1]];else delete h[m]});h=f.extend(true,{},f.fn.tn3.config,h);if(h.skin!=null)if(typeof h.skin=="object"){h.skinDir+="/"+h.skin[0];if(h.cssID==null)h.cssID=h.skin[0];h.skin=h.skin[1]}else h.skinDir+="/"+h.skin;else{h.skin="tn3";h.skinDir+="/tn3";var i=true}if(h.cssID==null)h.cssID=h.skin==null?"tn3":h.skin;this.each(function(){var l=f(this);h.fullOnly?l.hide():l.css("visibility","hidden");var m=h.data?h.data:d(l);
m=n.push(new f.fn.tn3.Gallery(m,h))-1;l.data("tn3",n[m]);for(var p=0;p<f.fn.tn3.plugins.length;p++)f.fn.tn3.plugins[p].init(l,h);l.empty();g(m)});i?a.call(this,h,h.skinDefault):c.call(this,h);return this};f.fn.tn3.plugins=[];f.fn.tn3.plugIn=function(h,i){f.fn.tn3.plugins.push({id:h,init:i})};f.fn.tn3.version="1.3.0.52";f.fn.tn3.config={data:null,skin:null,skinDir:"skins",skinDefault:'<div class="tn3-gallery"><div class="tn3-image"><div class="tn3-text-bg"><div class="tn3-image-title"></div><div class="tn3-image-description"></div></div><div class="tn3-next tn3_v tn3_o"></div><div class="tn3-prev tn3_v tn3_o"></div><div class="tn3-preloader tn3_h tn3_v"><img src="preload.gif"/></div><div class="tn3-timer"></div></div><div class="tn3-controls-bg tn3_rh"><div class="tn3-sep1"></div><div class="tn3-sep2"></div><div class="tn3-sep3"></div></div><div class="tn3-thumbs"></div><div class="tn3-fullscreen"></div><div class="tn3-show-albums"></div><div class="tn3-next-page"></div><div class="tn3-prev-page"></div><div class="tn3-play"></div><div class="tn3-count"></div><div class="tn3-albums"><div class="tn3-inalbums"><div class="tn3-album"></div></div><div class="tn3-albums-next"></div><div class="tn3-albums-prev"></div><div class="tn3-albums-close"></div></div></div>',
cssID:null};f.fn.tn3.translations={};f.fn.tn3.translate=function(h,i){if(i)f.fn.tn3.translations[h]=i;else{var l=f.fn.tn3.translations[h];return l?l:h}};f(function(){setTimeout(k,1)})}})(jQuery);
(function(f){f.fn.tn3utils=U={};U.shuffle=function(c){var a,d,b=c.length;if(b)for(;--b;){d=Math.floor(Math.random()*(b+1));a=c[d];c[d]=c[b];c[b]=a}};f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,d,b,e){return f.easing[f.easing.def](c,a,d,b,e)},linear:function(c,a,d,b,e){return b*a/e+d},easeInQuad:function(c,a,d,b,e){return b*(a/=e)*a+d},easeOutQuad:function(c,a,d,b,e){return-b*(a/=e)*(a-2)+d},easeInOutQuad:function(c,a,d,b,e){if((a/=e/2)<1)return b/2*a*a+d;return-b/2*(--a*(a-2)-1)+d},easeInCubic:function(c,
a,d,b,e){return b*(a/=e)*a*a+d},easeOutCubic:function(c,a,d,b,e){return b*((a=a/e-1)*a*a+1)+d},easeInOutCubic:function(c,a,d,b,e){if((a/=e/2)<1)return b/2*a*a*a+d;return b/2*((a-=2)*a*a+2)+d},easeInQuart:function(c,a,d,b,e){return b*(a/=e)*a*a*a+d},easeOutQuart:function(c,a,d,b,e){return-b*((a=a/e-1)*a*a*a-1)+d},easeInOutQuart:function(c,a,d,b,e){if((a/=e/2)<1)return b/2*a*a*a*a+d;return-b/2*((a-=2)*a*a*a-2)+d},easeInQuint:function(c,a,d,b,e){return b*(a/=e)*a*a*a*a+d},easeOutQuint:function(c,a,d,
b,e){return b*((a=a/e-1)*a*a*a*a+1)+d},easeInOutQuint:function(c,a,d,b,e){if((a/=e/2)<1)return b/2*a*a*a*a*a+d;return b/2*((a-=2)*a*a*a*a+2)+d},easeInSine:function(c,a,d,b,e){return-b*Math.cos(a/e*(Math.PI/2))+b+d},easeOutSine:function(c,a,d,b,e){return b*Math.sin(a/e*(Math.PI/2))+d},easeInOutSine:function(c,a,d,b,e){return-b/2*(Math.cos(Math.PI*a/e)-1)+d},easeInExpo:function(c,a,d,b,e){return a==0?d:b*Math.pow(2,10*(a/e-1))+d},easeOutExpo:function(c,a,d,b,e){return a==e?d+b:b*(-Math.pow(2,-10*a/
e)+1)+d},easeInOutExpo:function(c,a,d,b,e){if(a==0)return d;if(a==e)return d+b;if((a/=e/2)<1)return b/2*Math.pow(2,10*(a-1))+d;return b/2*(-Math.pow(2,-10*--a)+2)+d},easeInCirc:function(c,a,d,b,e){return-b*(Math.sqrt(1-(a/=e)*a)-1)+d},easeOutCirc:function(c,a,d,b,e){return b*Math.sqrt(1-(a=a/e-1)*a)+d},easeInOutCirc:function(c,a,d,b,e){if((a/=e/2)<1)return-b/2*(Math.sqrt(1-a*a)-1)+d;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+d},easeInElastic:function(c,a,d,b,e){c=1.70158;var g=0,k=b;if(a==0)return d;if((a/=
e)==1)return d+b;g||(g=e*0.3);if(k<Math.abs(b)){k=b;c=g/4}else c=g/(2*Math.PI)*Math.asin(b/k);return-(k*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+d},easeOutElastic:function(c,a,d,b,e){c=1.70158;var g=0,k=b;if(a==0)return d;if((a/=e)==1)return d+b;g||(g=e*0.3);if(k<Math.abs(b)){k=b;c=g/4}else c=g/(2*Math.PI)*Math.asin(b/k);return k*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+b+d},easeInOutElastic:function(c,a,d,b,e){c=1.70158;var g=0,k=b;if(a==0)return d;if((a/=e/2)==2)return d+b;g||
(g=e*0.3*1.5);if(k<Math.abs(b)){k=b;c=g/4}else c=g/(2*Math.PI)*Math.asin(b/k);if(a<1)return-0.5*k*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+d;return k*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+b+d},easeInBack:function(c,a,d,b,e,g){if(g==undefined)g=1.70158;return b*(a/=e)*a*((g+1)*a-g)+d},easeOutBack:function(c,a,d,b,e,g){if(g==undefined)g=1.70158;return b*((a=a/e-1)*a*((g+1)*a+g)+1)+d},easeInOutBack:function(c,a,d,b,e,g){if(g==undefined)g=1.70158;if((a/=e/2)<1)return b/2*
a*a*(((g*=1.525)+1)*a-g)+d;return b/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+d},easeInBounce:function(c,a,d,b,e){return b-f.easing.easeOutBounce(c,e-a,0,b,e)+d},easeOutBounce:function(c,a,d,b,e){return(a/=e)<1/2.75?b*7.5625*a*a+d:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+d:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+d:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+d},easeInOutBounce:function(c,a,d,b,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,b,e)*0.5+d;return f.easing.easeOutBounce(c,a*2-e,0,b,e)*0.5+b*
0.5+d}})})(jQuery);
(function(f){f.fn.tn3.Gallery=function(c,a){this.data=c;this.config=f.extend(true,{},f.fn.tn3.Gallery.config,a);this.initialized=false;this.t=f.fn.tn3.translate;this.loader=new f.fn.tn3.External(a.external,this)};f.fn.tn3.Gallery.config={cssID:"tn3",active:[],inactive:[],iniAlbum:0,iniImage:0,imageClick:"next",startWithAlbums:false,autoplay:false,delay:7E3,timerMode:"bar",timerSteps:300,timerStepChar:"&#8226;",isFullScreen:false,fullOnly:false,width:null,height:null,mouseWheel:true,keyNavigation:"fullscreen",
timerOverStop:true,responsive:false,image:{},thumbnailer:{}};f.fn.tn3.Gallery.prototype={config:null,$c:null,$tn3:null,data:null,thumbnailer:null,imager:null,cAlbum:null,timer:null,items:null,initialized:null,n:null,albums:null,loader:null,fso:null,timerSize:null,special:null,areHidden:false,$inImage:null,isPlaying:false,cparent:null,init:function(c,a){this.$c=c;if(!(this.loader.reqs>0||this.data.length==0||a)){this.trigger("init_start");this.config.fullOnly&&this.$c.show();this.$c.css("visibility",
"visible");this.$tn3=this.$c.find("."+this.config.cssID+"-gallery");var d=this.config.initValues={width:this.$tn3.width(),height:this.$tn3.height()};this.$tn3.css("float","left");d.wDif=this.$tn3.outerWidth(true)-d.width;d.hDif=this.$tn3.outerHeight(true)-d.height;this.replaceMenu("tn3gallery.com","http://tn3gallery.com");var b=this;this.timer=new f.fn.tn3.Timer(this.$c,this.config.delay,this.config.timerSteps);this.$c.bind("timer_end",function(){b.show("next")});this.special={rv:[],rh:[],v:[],h:[],
vi:[],hi:[],o:[]};this.parseLayout();this.center();f.each(this.items,function(e,g){switch(e){case "next":g.click(function(j){b.show("next");j.stopPropagation()});g.attr("title",b.t("Next Image"));break;case "prev":g.click(function(j){b.show("prev");j.stopPropagation()});g.attr("title",b.t("Previous Image"));break;case "next-page":g.click(function(){b.items.thumbs&&b.thumbnailer.next(true)});g.attr("title",b.t("Next Page"));break;case "prev-page":g.click(function(){b.items.thumbs&&b.thumbnailer.prev(true)});
g.attr("title",b.t("Previous Page"));break;case "thumbs":b.config.thumbnailer.cssID=b.config.cssID;b.config.thumbnailer.initValues={width:g.width(),height:g.height()};b.config.thumbnailer.initValues.vertical=g.width()<=g.height();g.bind("tn_click",function(j){b.show(j.n)}).bind("tn_over",function(){b.timer.pause(true)}).bind("tn_out",function(){b.timer.pause(false)}).bind("tn_error",function(j){b.trigger("error",j)});break;case "image":b.config.image.cssID=b.config.cssID;b.config.image.initValues=
{width:g.width(),height:g.height()};g.bind("img_click",function(j){switch(b.config.imageClick){case "next":b.show("next");break;case "fullscreen":b.fullscreen();break;case "url":if(j=b.data[b.cAlbum].imgs[j.n].url)window.location=j}}).bind("img_load_start",function(){b.items.preloader&&b.items.preloader.show()}).bind("img_load_end",function(j){b.n=j.n;b.items.thumbs&&b.thumbnailer.thumbClick(j.n);b.items.preloader&&b.items.preloader.hide();b.items.timer&&b.items.timer.hide();b.$inImage&&b.$inImage.hide()}).bind("img_transition",
function(j){b.setTextValues(false,"image");b.$inImage&&b.imager.cached[j.n].isImage&&b.$inImage.fadeIn(300);b.items.count&&b.items.count.text(b.n+1+"/"+b.data[b.cAlbum].imgs.length);b.isPlaying&&b.timer.start();b.special.o.length>0&&b.hideElements()}).bind("img_enter",function(){b.items.timer&&b.config.timerOverStop&&b.timer.pause(true);b.special.o.length>0&&b.showElements(300)}).bind("img_leave",function(){b.items.timer&&b.config.timerOverStop&&b.timer.pause(false);b.special.o.length>0&&b.hideElements(300)}).bind("img_resize",
function(j){if(b.$inImage){b.$inImage.width(j.w).height(j.h).css("left",j.left).css("top",j.top);b.center();b.imager.bindMouseEvents(b.$inImage)}}).bind("img_error",function(j){b.trigger("error",j)});break;case "preloader":g.hide();break;case "timer":var k=g.width()>g.height()?"width":"height";b.$c.bind("timer_tick",function(j){if(b.config.timerMode=="char"){for(var n=b.config.timerStepChar;--j.tick;)n+=b.config.timerStepChar;b.items.timer.html(n)}else b.items.timer[k](b.timerSize/j.totalTicks*j.tick);
b.trigger(j.type,j)}).bind("timer_start",function(j){b.timerSize=b.$inImage[k]();b.items.timer.fadeIn(300);b.trigger(j.type,j)}).bind("timer_end timer_stop",function(j){b.items.timer.hide();b.trigger(j.type,j)});g.hide();break;case "play":g.click(function(j){var n={id:"play",execute:true};b.trigger("control",n);if(b.isPlaying){if(n.execute){b.timer.stop();g.removeClass(b.config.cssID+"-play-active");g.attr("title",b.t("Start Slideshow"))}b.isPlaying=false}else{if(n.execute){b.timer.start();g.addClass(b.config.cssID+
"-play-active");g.attr("title",b.t("Stop Slideshow"))}b.isPlaying=true}j.stopPropagation()});g.attr("title",b.t("Start Slideshow"));b.config.autoplay&&g.click();break;case "albums":b.albums=new f.fn.tn3.Albums(b.data,g,b.config.cssID);g.hide();g.bind("albums_binit",function(j){b.trigger(j.type,j)}).bind("albums_click",function(j){b.showAlbum(j.n);b.trigger(j.type,j)}).bind("albums_init",function(j){b.timer.pause(true);b.trigger(j.type,j)}).bind("albums_error",function(j){b.trigger("error",j)}).bind("albums_close",
function(){b.timer.pause(false)});break;case "albums-next":b.albums&&b.albums.setControl("next",g);g.attr("title",b.t("Next Album Page"));break;case "albums-prev":b.albums&&b.albums.setControl("prev",g);g.attr("title",b.t("Previous Album Page"));break;case "albums-close":b.albums&&b.albums.setControl("close",g);g.attr("title",b.t("Close"));break;case "show-albums":g.click(function(j){b.items.albums&&b.albums.show(0,b.cAlbum,false,true);j.stopPropagation()});g.attr("title",b.t("Album List"));break;
case "fullscreen":g.click(function(j){var n={id:"fullscreen",execute:true};b.trigger("control",n);n.execute&&b.fullscreen();j.stopPropagation()});g.attr("title",b.t("Maximize"))}});if(this.config.width!==null||this.config.height!==null){if(this.config.width==null)this.config.width=this.config.initValues.width;if(this.config.height==null)this.config.height=this.config.initValues.height;this.resize(this.config.width,this.config.height)}d=Math.min(this.config.iniAlbum,this.data.length-1);this.config.responsive!==
false&&this.initResponsive(this.config.responsive);this.initialized=true;this.config.startWithAlbums&&this.data.length>1&&this.items.albums?this.albums.show():this.showAlbum(d,this.config.iniImage);this.config.isFullScreen&&this.onFullResize(f(window).width(),f(window).height());this.trigger("init")}},parseLayout:function(){var c=this.items={},a=this.config,d=a.active,b=a.inactive,e=a.cssID.length+1,g=this,k,j;this.$c.find("div[class^='"+a.cssID+"-']").each(function(){k=f(this);j=k.attr("class").split(" ")[0].substr(e);
if(f.inArray(j,b)!=-1)k.remove();else if(d.length==0||f.inArray(j,d)!=-1)c[j]=k;else j!="gallery"&&k.remove();if(k.parent().hasClass(a.cssID+"-image")){if(!g.$inImage){g.$inImage=f('<div class="tn3-in-image"></div>');k.parent().append(g.$inImage);if(f.browser.msie){var h=f("<div />");h.css("background-color","#fff").css("opacity",0).css("width","100%").css("height","100%");h.appendTo(g.$inImage)}g.$inImage.css("position","absolute").width(c.image.width()).height(c.image.height())}k.appendTo(g.$inImage)}this.className.indexOf("tn3_")!=
-1&&g.addSpecial(j,this.className)});$cm=this.$c;f.each(["albums","album","album-next","album-prev","show-albums","timer"],function(h,i){delete c[i];$cm.find("."+a.cssID+"-"+i).remove()});var n=f('<div title="Powered by TN3 Gallery"></div>');n.css("position","absolute").css("background-image","url('"+this.config.skinDir+"/tn3.png')").css("background-position","-258px -7px").css("bottom","14px").css("right","53px").css("cursor","pointer").width(40).height(18);n.appendTo(this.$c.find("."+a.cssID+"-gallery"));
n.click(function(){window.location="http://tn3gallery.com"}).hover(function(){f(this).css("background-position","-258px -45px")},function(){f(this).css("background-position","-258px -7px")})},addSpecial:function(c,a){for(var d=a.split(" "),b,e=0;e<d.length;e++){b=d[e].split("_");if(b[0]=="tn3"){this.special[b[1]].push(c);if(b[1]=="rh"||b[1]=="rv")this.config.initValues[c]={w:this.items[c].width(),h:this.items[c].height()}}}},initHover:function(c,a){var d=this;c.hover(function(){c.addClass(d.config.cssID+
"-"+a+"-over")},function(){c.removeClass(d.config.cssID+"-"+a+"-over")})},setTextValues:function(c,a){var d,b,e,g=a+"-";for(e in this.items)if(e.indexOf(g)==0){d=e.substr(g.length);if(d!="info"&&d!="prev"&&d!="next"){b=a=="image"?this.data[this.cAlbum].imgs[this.n]:this.data[this.cAlbum];if(!b||b[d]==undefined){b={};b[d]=""}else b[d]=f.trim(b[d]);d={field:d,text:b[d],data:b};this.trigger("set_text",d);if(c||d.text==undefined||d.text.length==0){this.items[e].html("");this.items[e].hide()}else{this.items[e].html(d.text);
this.items[e].show()}}}},show:function(c,a){this.timer.stop();this.imager&&this.imager.show(c);a&&this.fullscreen()},setAlbumData:function(c,a){if(a)this.trigger("error",{description:a});else{for(var d=0,b=c.length;d<b;d++)this.data.push(c[d]);this.$c&&this.init(this.$c,this.config.fullOnly)}},setImageData:function(c,a,d){if(d)this.trigger("error",{description:d});else{this.items.preloader&&this.items.preloader.hide();c={data:c};this.trigger("image_data",c);this.data[a].imgs=c.data;if(this.cAlbum==
a)this.rebuild(c.data,a==0?this.config.iniImage:0)}},showAlbum:function(c,a,d){if(this.initialized){if(c>this.data.length)return;this.timer.stop();this.cAlbum=c;this.albums&&this.albums.hide();if(this.data[this.cAlbum].imgs===undefined)if(this.loader){this.loader.getImages(this.data[this.cAlbum].adata,this.cAlbum);this.items.preloader&&this.items.preloader.show()}else this.trigger("error",{description:"Wrong album id"});else this.rebuild(this.data[this.cAlbum].imgs,a)}else{this.config.iniAlbum=c;
this.config.iniImage=a;this.init(this.$c,false)}d&&this.fullscreen()},rebuild:function(c,a){if(this.items.thumbs)if(this.thumbnailer)this.thumbnailer.rebuild(c);else this.thumbnailer=new f.fn.tn3.Thumbnailer(this.items.thumbs,c,this.config.thumbnailer);if(this.items.image)if(this.imager)this.imager.rebuild(c);else this.imager=new f.fn.tn3.Imager(this.items.image,c,this.config.image);this.setTextValues(true,"image");this.setTextValues(false,"album");this.show(a==null?0:a);this.trigger("rebuild",{album:this.cAlbum})},
showElements:function(c){if(this.areHidden){var a=this,d;f.each(this.special.o,function(b,e){d=a.items[e];d.show();if(c&&f.support.opacity){d.stop(true);d.css("opacity",0);d.animate({opacity:1},{duration:c,queue:false})}});this.areHidden=false}},hideElements:function(c){if(!this.areHidden){var a=this,d;f.each(this.special.o,function(b,e){d=a.items[e];if(c&&f.support.opacity){d.stop(true);d.animate({opacity:0},{duration:c,complete:function(){d.hide()},queue:false})}else d.hide()});this.areHidden=true}},
setData:function(c){if(this.items.thumbs)this.thumbnailer.data=c;if(this.items.imager)this.imager.data=c},fullscreen:function(){if(this.config.isFullScreen){f(window).unbind("resize",this.onFullResize);f.tn3unblock();if(this.config.responsive!==false)this.initResponsive(this.config.responsive);else this.config.width!==null||this.config.height!==null?this.resize(this.config.width,this.config.height):this.resize(this.config.initValues.width,this.config.initValues.height);if(this.items.fullscreen){this.items.fullscreen.removeClass(this.config.cssID+
"-fullscreen-active");this.items.fullscreen.attr("title",this.t("Maximize"))}this.config.fullOnly&&this.$c.hide();this.config.isFullScreen=false;this.trigger("fullscreen",{fullscreen:false});this.config.keyNavigation=="fullscreen"&&f(document).unbind("keyup",this.listenKeys)}else{f.tn3block({message:this.$tn3,cssID:this.config.cssID});f(window).bind("resize",f.proxy(this.onFullResize,this));this.config.fullOnly&&this.$c.show();this.config.isFullScreen=true;if(this.items.fullscreen){this.items.fullscreen.addClass(this.config.cssID+
"-fullscreen-active");this.items.fullscreen.attr("title",this.t("Minimize"))}this.onFullResize();this.trigger("fullscreen",{fullscreen:true})}},listenKeys:function(c){if(c.keyCode==70)this.items.fullscreen.click();else if(this.items.albums&&this.albums.enabled){var a=0;switch(c.keyCode){case 27:this.albums.hide();break;case 39:a="r";break;case 37:a="l";break;case 38:a="u";break;case 40:a="d";break;case 32:a="p"}a&&this.albums.select(a)}else switch(c.keyCode){case 27:this.config.isFullScreen&&this.fullscreen();
break;case 39:this.show("next");break;case 37:this.show("prev");break;case 38:this.items.albums&&this.albums.show(0,this.cAlbum,false,true);break;case 32:this.items.play.click()}},onFullResize:function(){var c=f(window),a=c.width();c=c.height();a-=this.config.initValues.wDif;c-=this.config.initValues.hDif;this.resize(a,c)},resize:function(c,a){this.$tn3.width(c).height(a);var d=c-this.config.initValues.width,b=a-this.config.initValues.height,e,g,k=this;if(this.items.image){e=this.config.image.initValues.width+
d;g=this.config.image.initValues.height+b;if(this.imager)this.imager.setSize(e,g);else{this.items.image.width(e).height(g);this.$inImage.width(e).height(g)}}if(this.items.thumbs){e=this.config.thumbnailer.initValues.width+d;g=this.config.thumbnailer.initValues.height+b;if(this.thumbnailer)this.thumbnailer.setSize(e,g);else this.config.thumbnailer.initValues.vertical?this.items.thumbs.height(g):this.items.thumbs.width(e)}if(this.items.albums){e=this.albums.initValues.width+d;g=this.albums.initValues.height+
b;this.albums.changeSize(d,b)}f.each(this.special.rh,function(j,n){k.items[n].width(k.config.initValues[n].w+d)});f.each(this.special.rv,function(j,n){k.items[n].height(k.config.initValues[n].h+b)});this.center()},center:function(){var c,a=this,d=a.items.image.position();f.each(this.special.v,function(b,e){c=a.items[e];c.css("top",(c.parent().height()-c.height())/2)});f.each(this.special.h,function(b,e){c=a.items[e];c.css("left",(c.parent().width()-c.width())/2)});f.each(this.special.vi,function(b,
e){c=a.items[e];c.css("top",d.top+(a.items.image.height()-c.height())/2)});f.each(this.special.hi,function(b,e){c=a.items[e];c.css("left",d.left+(a.items.image.width()-c.width())/2)})},trigger:function(c,a){var d=f.Event("tn3_"+c),b;for(b in a)d[b]=a[b];if(a&&a.type!=undefined)d.type="tn3_"+c;d.source=this;this.$c.trigger(d);this.config[c]&&this.config[c].call(this,d);for(b in a)a[b]=d[b]},initMouseWheel:function(){var c=this,a=function(d){c.show((d.originalEvent.detail?-d.originalEvent.detail:d.originalEvent.wheelDelta)>
0?"prev":"next");d.preventDefault()};this.$tn3.bind("mousewheel",a);this.$tn3.bind("DOMMouseScroll",a)},initResponsive:function(c){var a;if(typeof c=="number"){var d=f(window);a=function(){var j=d.width(),n=d.height();this.resize(j*c/100,n*c/100)}}else if(f.isFunction(c))a=c;else if(c!==false){var b=this.$c.parent(),e=(this.config.width==null?this.config.initValues.width:this.config.width)/(this.config.height==null?this.config.initValues.height:this.config.height),g=b.width(),k=b.height();a=c=="enabled"?
function(){g=b.width();k=b.height();this.resize(g,k)}:c=="height"?function(){k=b.height();g=k*e;this.resize(g,k)}:function(){g=b.width();k=g/e;this.resize(g,k)}}f(window).bind("resize",f.proxy(a,this));f.proxy(a,this)()},replaceMenu:function(c,a){var d='<div style="position:absolute;background-color:#fff;color: #000;padding:0px 4px 0px 4px;z-index:1010;font-family:sans-serif;font-size:12px;">&copy; <a href="'+a+'">'+c+"</a></div>";this.$tn3.bind("contextmenu",function(b){b.preventDefault()}).bind("mousedown",
function(b){if(b.which==3){var e=f(d);f("body").append(e);e.css("left",b.pageX).css("top",b.pageY);e.find("a").mouseup(function(g){window.location=a;e.unbind(g)});f("body").mouseup(function(g){e.remove();f("body").unbind(g)})}})}}})(jQuery);
(function(f){f.fn.tn3.Imager=function(c,a,d){this.$c=c;this.data=a;d.crop=false;this.config=f.extend(true,{},f.fn.tn3.Imager.config,d);this.init()};f.fn.tn3.Imager.config={transitions:null,defaultTransition:{type:"slide"},random:false,cssID:"tn3",maxZoom:1.4,crop:false,clickEvent:"click",idleDelay:3E3,stretch:true,dif:0};f.fn.tn3.Imager.prototype={config:null,$c:false,data:false,cached:null,active:-1,$active:false,$buffer:false,isInTransition:false,ts:null,cDim:null,qid:null,currentlyLoading:null,
side:null,$ic:null,$binder:null,infoID:null,lastEnter:false,mouseCoor:{x:0,y:0},mouseIsOver:false,init:function(){this.$c.css("overflow","hidden");this.$c.css("position","relative");this.bindMouseEvents(this.$c);this.cached=[];this.ts=new f.fn.tn3.Transitions(this.config.transitions,this.config.defaultTransition,this.config.random,this,"onTransitionEnd")},bindMouseEvents:function(c){this.unbindMouseEvents();var a=this;c.hover(function(){a.mouseIsOver=true;a.enterLeave("enter");a.startIdle();f(document).mousemove(f.proxy(a.onMouseMove,
a))},function(){a.mouseIsOver=false;a.enterLeave("leave");a.stopIdle();f(document).unbind("mousemove",a.onMouseMove)});c[this.config.clickEvent](function(d){a.active==-1||a.isInTransition||d.target.tagName.toUpperCase()!="A"&&a.trigger("click",{n:a.active})});this.$binder=c},unbindMouseEvents:function(){this.$binder&&this.$binder.unbind("mouseenter mouseleave "+this.config.clickEvent);f(document).unbind("mousemove",this.onMouseMove);this.stopIdle()},startIdle:function(){this.stopIdle();var c=this;
if(this.config.idleDelay>0)this.infoID=setTimeout(function(){c.enterLeave("leave");c.stopIdle()},this.config.idleDelay)},onMouseMove:function(c){this.mouseCoor={x:c.pageX,y:c.pageY};if(!this.isInTransition){this.infoID||this.enterLeave("enter");this.startIdle()}},stopIdle:function(){clearTimeout(this.infoID);this.infoID=null},enterLeave:function(c){this.lastEnter!=c&&this.trigger(c);this.lastEnter=c},show:function(c){if(this.isInTransition)this.qid=c;else{this.qid=null;if(c=="next"){c=this.active+
1<this.data.length?this.active+1:0;this.side="left"}else if(c=="prev"){c=this.active>0?this.active-1:this.data.length-1;this.side="right"}else this.side=this.active>c?"right":"left";if(this.data[c]){this.trigger("load_start",{n:c});this.$buffer=f('<div class="'+this.config.cssID+'-image-in" style="position:absolute;overflow:hidden;"></div>');this.$c.prepend(this.$buffer);if(this.cached[this.currentlyLoading]!=undefined)this.cached[this.currentlyLoading].init=false;if(this.cached[c]!=undefined)if(this.cached[c].status==
"loaded")this.initImage(c);else{this.cached[c].init=true;this.currentlyLoading=c}else this.startLoading(c,true)}}},startLoading:function(c,a){this.cached[c]={isImage:true,status:"loading",init:a};this.currentlyLoading=c;if(this.data[c].content!=undefined){this.cached[c].isImage=false;this.onCacheLoad(f(this.data[c].content),c)}else this.cached[c].loader=new f.fn.tn3.ImageLoader(this.data[c].img,this,this.onCacheLoad,[c])},onCacheLoad:function(c,a,d){this.cached[a].status="loaded";this.cached[a].$content=
c;d&&this.trigger("error",{description:d,n:a});this.cached[a].init&&this.initImage(a)},initImage:function(c){var a=this.cached[c].$content;this.currentlyLoading=null;this.active=c;if(!this.cDim)this.cDim={w:this.$c.width(),h:this.$c.height()};this.$buffer.width(this.cDim.w).height(this.cDim.h);var d=f('<div class="'+this.config.cssID+'-full-image" style="position:absolute"></div>');a.appendTo(d);this.$buffer.append(d);this.$buffer.data("ic",d);this.$buffer.data("img",a);this.resize(this.$buffer);
this.trigger("load_end",{n:c,content:a,isImage:this.cached[c].isImage});if(this.$active!=false){this.isInTransition=true;this.unbindMouseEvents();if(this.mouseIsOver)f(document).mousemove(f.proxy(this.onMouseMove,this));else this.mouseCoor={x:0,y:0};this.lastEnter="leave";this.ts.start(this.$active,this.$buffer,this.side)}else{this.$active=this.$buffer;this.trigger("transition",{n:this.active})}this.cached[c+1]==undefined&&this.data[c+1]!=undefined&&this.startLoading(c+1,false)},setSize:function(c,
a){this.isInTransition&&this.ts.stop(this.$active,this.$buffer,this.ts.config);this.$c.width(c).height(a);this.cDim={w:this.$c.width(),h:this.$c.height()};if(this.$active){this.$active.width(c).height(a);this.resize(this.$active)}},resize:function(c){if(c.data("img")==undefined)this.trigger("resize",{w:this.cDim.w,h:this.cDim.h,left:0,top:0});else this.cached[this.active].isImage?this.resizeImage(c):this.resizeContent(c)},resizeImage:function(c){$img=c.data("img");$ic=c.data("ic");$img.width("auto").height("auto");
c.data("scaled",false);var a=$img.width(),d=$img.height(),b=0,e=0,g={w:a,h:d,left:0,top:0};$img.attr("width",a).attr("height",d);if($img.get(0).tagName.toUpperCase()=="IMG"&&(a!=this.cDim.w||d!=this.cDim.h)){b=this.cDim.w/a;e=this.cDim.h/d;b=this.config.crop?Math.max(b,e):Math.min(b,e);b=Math.min(this.config.maxZoom,b);a=g.w=Math.round(a*b)-this.config.dif;d=g.h=Math.round(d*b)-this.config.dif;if(this.cDim.w>=a)b=g.left=(this.cDim.w-a)/2;else{b=-(a-this.cDim.w)*0.5;g.w=this.cDim.w}if(this.cDim.h>
d)e=g.top=(this.cDim.h-d)/2;else{e=-(d-this.cDim.h)*0.5;g.h=this.cDim.h}$img.width(a).height(d);$img.attr("width",a).attr("height",d);$ic.width(a).height(d);c.data("scaled",true)}$ic.css("left",b).css("top",e);this.bindMouseEvents($ic);this.trigger("resize",g)},resizeContent:function(c){$ic=c.data("ic");$img=c.data("img");c.data("scaled",false);var a=$img.width(),d=$img.height(),b={w:a,h:d,left:0,top:0};if(this.config.stretch){$ic.width(this.cDim.w).height(this.cDim.h);$img.width(this.cDim.w).height(this.cDim.h);
c.data("scaled",true)}else{b.left=(this.cDim.w-a)*0.5;b.top=(this.cDim.h-d)*0.5;$ic.css("left",b.left).css("top",b.top)}this.bindMouseEvents($ic);this.trigger("resize",b)},onTransitionEnd:function(){this.$active.remove();this.$active=this.$buffer;this.isInTransition=false;this.trigger("transition",{n:this.active});this.bindMouseEvents(this.$binder);var c=this.$binder.offset();this.mouseIsOver=false;if(this.mouseCoor.x>=c.left&&this.mouseCoor.x<=c.left+this.$binder.width())if(this.mouseCoor.y>=c.top&&
this.mouseCoor.y<=c.top+this.$binder.height()){this.lastEnter="leave";this.enterLeave("enter");this.startIdle();this.mouseIsOver=true;f(document).mousemove(f.proxy(this.onMouseMove,this))}this.qid!=null&&this.show(this.qid)},trigger:function(c,a){var d=f.Event("img_"+c),b;for(b in a)d[b]=a[b];d.source=this;this.$c.trigger(d);this.config[c]&&this.config[c].call(this,d)},destroy:function(){this.isInTransition&&this.ts.stop(this.$active,this.$buffer);this.$active&&this.$active.remove();this.$buffer.remove()},
rebuild:function(c){this.quid=null;this.isInTransition&&this.ts.stop(this.$active,this.$buffer);this.$buffer&&this.$buffer.remove();this.cached=[];this.data=c;this.loader&&this.loader.cancel()}}})(jQuery);
(function(f){f.fn.tn3.Thumbnailer=function(c,a,d){this.$c=c;this.data=a;this.config=f.extend({},f.fn.tn3.Thumbnailer.config,d);f(window).resize(f.proxy(this.onWinResize,this));this.init()};f.fn.tn3.Thumbnailer.config={overMove:true,buffer:20,speed:8,slowdown:50,shaderColor:"#000000",shaderOpacity:0.5,shaderDuration:300,shaderOut:300,useTitle:false,seqLoad:true,align:1,mode:"thumbs",cssID:"tn3"};f.fn.tn3.Thumbnailer.prototype={config:null,$c:null,$oc:null,$ul:null,data:null,active:-1,listSize:0,containerSize:0,
containerPadding:0,noBufSize:0,containerOffset:0,mcoor:"mouseX",edge:"left",size:"width",outerSize:"outerWidth",mouseX:0,mouseY:0,intID:false,pos:0,difference:0,cnt:1,thumbCount:-1,initialized:false,clickWhenReady:-1,loaders:null,lis:null,isVertical:null,marginDif:0,nloaded:0,firstToLoad:0,init:function(){this.$c.css("position","absolute").css("cursor","progress");this.lis=[];this.loaders=[];this.initialized=false;this.$oc=f("<div />");this.$ul=f("<ul />");this.$oc.appendTo(this.$c);this.$oc.css("position",
"absolute").css("overflow","hidden").width(this.$c.width()).height(this.$c.height());this.$ul.appendTo(this.$oc);this.$ul.css("position","relative").css("margin","0px").css("padding","0px").css("border-width","0px").css("width","12000px").css("list-style","none");if(this.isVertical==null){this.isVertical=this.$c.width()<this.$c.height();if(this.isVertical=false){this.mcoor="mouseY";this.edge="top";this.size="height";this.outerSize="outerHeight"}else{this.mcoor="mouseX";this.edge="left";this.size=
"width";this.outerSize="outerWidth"}this.containerSize=this.$oc[this.size]();this.noBufSize=this.containerSize-2*this.config.buffer;this.containerOffset=this.$oc.offset()[this.edge];this.containerPadding=parseInt(this.$c.css("padding-"+this.edge))}this.listSize=0;if(navigator.userAgent.indexOf("MSIE")!=-1)this.config.seqLoad=false;this.data.length>0&&this.loadNextThumb()},loadNextThumb:function(){this.thumbCount++;var c=f("<li></li>");this.$ul.append(c);if(this.config.mode=="thumbs"){var a=this.data[this.thumbCount].thumb;
if(a){this.loaders.push(new f.fn.tn3.ImageLoader(a,this,this.onLoadThumb,[c,this.thumbCount]));!this.config.seqLoad&&this.thumbCount<this.data.length-1&&this.loadNextThumb();return}else this.config.mode="bullets"}this.config.mode=="numbers"&&c.text(this.thumbCount+1);this.onLoadThumb(null,c,this.thumbCount)},onLoadThumb:function(c,a,d,b){this.lis[d]={li:a};a.addClass(this.config.cssID+"-thumb");a.css("float",this.isVertical?"none":"left");if(c){var e=this.lis[d].thumb=f(c);a.append(e);this.lis[d].pos=
a.position()[this.edge]}this.config.useTitle&&a.attr("title",this.data[d].title.replace(/\&amp;/g,"&"));if(this.config.mode=="thumbs"){this.lis[d].shade=f("<div/>");a.prepend(this.lis[d].shade);this.lis[d].shade.css("background-color",this.config.shaderColor).css("width",e.width()).css("height",e.height()).css("position","absolute")}this.initThumb(d);a.css("opacity",0);a.animate({opacity:1},1E3);this.listSize+=a[this.outerSize](true);if(!this.initialized){this.firstToLoad=d;this.initialized=true;
this.initMouse(true)}b&&this.trigger("error",{description:b,n:d});this.trigger("thumbLoad",{n:d});this.nloaded++;if(this.nloaded<this.data.length){if(this.config.seqLoad||this.config.mode!="thumbs")this.loadNextThumb()}else{if(c)this.loaders=null;if(!this.config.seqLoad)for(c=0;c<this.lis.length;c++)this.lis[c].pos=this.lis[c].li.position()[this.edge];this.thumbsLoaded()}if(this.clickWhenReady==d){this.clickWhenReady=-1;this.thumbClick(d)}},initThumb:function(c){var a=this.lis[c];if(a.li){a.li.removeClass().addClass(this.config.cssID+
"-thumb");if(a.shade){a.shade.stop();a.shade.css("opacity",this.config.shaderOpacity)}var d=this;a.li.click(function(){d.thumbClick(c);d.trigger("click",{n:c});return false});this.config.mode!="thumbs"&&a.li.hover(function(){d.mouseOver(c)},function(){d.mouseOver(-1)})}},lastOver:-1,mouseOver:function(c){if(c!=this.lastOver){if(this.lastOver!=-1&&this.lastOver!=this.active){a=this.lis[this.lastOver];a.li.removeClass(this.config.cssID+"-thumb-over");if(a.shade){a.shade.stop();a.shade.animate({opacity:this.config.shaderOpacity},
{duration:this.config.shaderOut,easing:"easeOutCubic",queue:false})}this.trigger("thumbOut",{n:c})}this.lastOver=c;if(!(c==-1||c==this.active)){var a=this.lis[c];a.li.addClass(this.config.cssID+"-thumb-over");if(a.shade){a.shade.stop();a.shade.animate({opacity:0},{duration:this.config.shaderDuration,easing:"easeOutCubic",queue:false})}this.trigger("thumbOver",{n:c})}}},next:function(c){if(c)this.listSize>this.containerSize&&this.move(this.$ul.position()[this.edge]-this.containerSize);else{c=this.active+
1;if(this.active==-1||this.active+1==this.data.length)c=0;this.thumbClick(c)}},prev:function(c){if(c)this.listSize>this.containerSize&&this.move(this.$ul.position()[this.edge]+this.containerSize);else{c=this.active-1;if(this.active==-1||this.active==0)c=this.data.length-1;this.thumbClick(c)}},move:function(c){var a={};a[this.edge]=Math.min(0,Math.max(c,-(this.listSize-this.containerSize)));this.$ul.stop();this.$ul.animate(a,300)},thumbClick:function(c){if(this.active==-1){if(this.thumbCount<=c||this.lis.length<=
c||this.lis[c]==null){this.clickWhenReady=c;return}}else if(c==this.active)return;else this.initThumb(this.active);if(c=="next")c=this.active+1<this.data.length?this.active+1:0;else if(c=="prev")c=this.active>0?this.active-1:this.data.length-1;var a=this.lis[c];a.li.addClass(this.config.cssID+"-thumb-selected").unbind("click mouseenter mouseleave");a.shade&&a.shade.animate({opacity:0},this.config.shaderDuration);this.active=c;this.centerActive()},centerActive:function(c){if(this.active!=-1){var a=
this.lis[this.active].li,d=this.$ul.position()[this.edge]+a.position()[this.edge],b=a[this.outerSize]()/2;if(d+b>this.containerSize||d+b<0){a=10-a.position()[this.edge]+this.containerSize/2-b;a=Math.min(0,a);a=Math.max(a,-this.listSize+this.containerSize);d={};d[this.edge]=a;c?this.$ul.css(d):this.$ul.animate(d,200)}}},thumbsLoaded:function(){this.$c.css("cursor","auto");this.$ul.css("width",this.listSize+"px");this.centerList();this.trigger("load")},centerList:function(c){if(this.listSize<this.containerSize){var a=
{};a[this.edge]=this.config.align?this.config.align==1?(this.containerSize-this.listSize)/2:this.containerSize-this.listSize:0;c||this.config.mode!="thumbs"?this.$ul.css(a):this.$ul.animate(a,300)}else{this.centerActive(c);if(this.$ul.position()[this.edge]>0)this.$ul.css(this.edge,0);else this.$ul.position()[this.edge]+this.listSize<this.containerSize&&this.$ul.css(this.edge,-(this.listSize-this.containerSize))}},initMouse:function(c){if(this.config.mode=="thumbs"){c=c?"bind":"unbind";this.$oc[c]("mouseenter",
f.proxy(this.mouseenter,this));this.$oc[c]("mouseleave",f.proxy(this.mouseleave,this))}},mouseenter:function(){this.trigger("over");clearInterval(this.intID);var c=this;this.$ul.stop();this.$c.mousemove(this.mcoor=="mouseX"?function(a){c.mouseX=a.pageX-c.containerOffset}:function(a){c.mouseY=a.pageY-c.containerOffset});this.marginDif=parseInt(this.lis[this.firstToLoad].li.css("margin-"+this.edge));if(isNaN(this.marginDif))this.marginDif=0;c.intID=this.listSize>this.containerSize&&this.config.overMove?
setInterval(function(){c.slide.call(c)},10):setInterval(function(){c.mouseTrack.call(c)},10)},mouseleave:function(){this.trigger("out");this.$c.unbind("mousemove");clearInterval(this.intID);var c=this;this.intID=setInterval(function(){c.slideOut.call(c)},10);this.mouseOver(-1)},slide:function(){this.cnt=1;var c=this[this.mcoor];if(c<=this.config.buffer)this.pos=0;else if(c>=this.containerSize-this.config.buffer)this.pos=this.containerSize-this.listSize-1;else{var a=this.containerSize*(c-this.config.buffer);
a/=this.noBufSize;this.pos=a*(1-this.listSize/this.containerSize)}for(a=this.lis.length-1;a>-1;a--){var d=c-this.prevdx;if(d>=this.lis[a].pos&&d<this.lis[a].pos+this.lis[a].li.width()){this.mouseOver(a);break}}c=this.prevdx-this.marginDif;this.difference=c-this.pos;c=Math.round(c-this.difference/this.config.speed);if(this.prevdx!=c){this.$ul.css(this.edge,c);this.prevdx=c}},prevdx:0,mouseTrack:function(){for(var c=this[this.mcoor],a=this.lis.length-1;a>-1;a--){var d=c-this.$ul.position()[this.edge];
if(d>=this.lis[a].pos&&d<this.lis[a].pos+this.lis[a].li.width()){this.mouseOver(a);break}}},slideOut:function(){if(this.config.slowdown!=0&&this.difference!=0){var c=this.$ul.position()[this.edge];this.difference=c-this.pos;this.$ul.css(this.edge,c-this.difference/(this.config.speed*this.cnt));this.cnt*=1+4/this.config.slowdown;if(this.cnt>=40){this.difference=0;this.cnt=1}}else{clearInterval(this.intID);this.intID=null}},trigger:function(c,a){var d=f.Event("tn_"+c),b;for(b in a)d[b]=a[b];d.source=
this;this.$c.trigger(d);this.config[c]&&this.config[c].call(this,d)},destroy:function(){clearInterval(this.intID);this.$c.empty()},rebuild:function(c){clearInterval(this.intID);this.$c.empty();this.data=c;this.active=this.thumbCount=-1;this.nloaded=0;this.initMouse(false);this.loaders!==null&&f.each(this.loaders,function(a,d){d.cancel()});this.init()},setSize:function(c,a){if(this.config.mode=="thumbs"){this.isVertical?this.$c.height(a):this.$c.width(c);this.$oc.width(this.$c.width()).height(this.$c.height());
this.containerSize=this.$oc[this.size]();this.noBufSize=this.containerSize-2*this.config.buffer;this.containerOffset=this.$oc.offset()[this.edge];this.initMouse(true);this.loaders===null&&this.centerList(true)}},onWinResize:function(){this.containerOffset=this.$oc.offset()[this.edge]}}})(jQuery);
(function(f){f.fn.tn3.altLink=null;f.fn.tn3.ImageLoader=function(c,a,d,b){this.$img=f(new Image);b.unshift(this.$img);this.altLink=f.fn.tn3.altLink;a={url:c,context:a,callback:d,args:b};this.$img.bind("load",a,this.load);this.$img.bind("error",a,f.proxy(this.error,this));this.$img.attr("src",c)};f.fn.tn3.ImageLoader.prototype={$img:null,altLink:null,load:function(c){c.data.callback.apply(c.data.context,c.data.args);c.data.args[0].unbind("load").unbind("error")},error:function(c){if(this.altLink){this.altLink=
null;this.$img.attr("src",f.fn.tn3.altLink+c.data.url)}else{c.data.args.push("image loading error: "+c.data.url);c.data.callback.apply(c.data.context,c.data.args);this.$img.unbind("load").unbind("error")}},cancel:function(){this.$img.unbind("load").unbind("error")}}})(jQuery);
(function(f){f.fn.tn3.Timer=function(c,a,d){this.$target=c;this.duration=a;this.tickint=d};f.fn.tn3.Timer.prototype={$target:null,duration:null,id:null,runs:false,counter:null,countDuration:null,tickid:null,ticks:null,tickint:500,start:function(){if(!this.runs){this.runs=true;this.startCount(this.duration);this.trigger("timer_start")}},startCount:function(c){this.clean();this.countDuration=c;this.counter=+new Date;var a=this;this.id=setTimeout(function(){a.clean.call(a);a.runs=false;a.trigger.call(a,
"timer_end")},c);var d=this.duration/this.tickint;this.ticks=Math.round(c/d);this.tickid=setInterval(function(){a.ticks=Math.ceil((c-new Date+a.counter)/d);a.ticks>0&&a.trigger.call(a,"timer_tick",{tick:a.ticks,totalTicks:a.tickint})},d);this.trigger("timer_tick",{tick:this.ticks,totalTicks:this.tickint})},stop:function(){this.clean();this.runs=false;this.trigger("timer_stop")},clean:function(){clearTimeout(this.id);this.id=null;clearInterval(this.tickid);this.elapsed=this.tickid=null},elapsed:null,
pause:function(c){if(this.runs){if(c){this.clean();var a=this.duration/this.tickint;this.elapsed=Math.floor((+new Date-this.counter)/a)*a}else{if(this.elapsed==null)return;this.startCount(this.countDuration-this.elapsed);this.elapsed=null}this.trigger("timer_pause",{pause:c})}},trigger:function(c,a){var d=f.Event(c),b;for(b in a)d[b]=a[b];this.$target.trigger(d)}}})(jQuery);
(function(f){var c=f.fn.tn3.Transitions=function(d,b,e,g,k){this.ts=d;this.def=f.extend(true,{},this[b.type+"Config"],b);if(!d)this.ts=[this.def];for(var j in this.ts)this.ts[j]=f.extend(true,{},this[this.ts[j].type+"Config"],this.ts[j]);this.random=e;this.end=f.proxy(g,k)},a=c.prototype={ts:null,def:{type:"slide"},random:false,gs:[],end:null,ct:null,counter:-1,setTransition:function(){if(this.ts.length==1)this.ct=this.ts[0];else{this.counter++;if(this.counter==this.ts.length)this.counter=0;this.random&&
this.counter==0&&f.fn.tn3utils.shuffle(this.ts);this.ct=this.ts[this.counter]}},start:function(d,b,e){this.setTransition();if(this[this.ct.type+"Condition"]!==undefined&&!this[this.ct.type+"Condition"](d,b,this.ct))this.ct=this.def;this[this.ct.type](d,b,this.ct,e)},stop:function(d,b){this[this.ct.type+"Stop"](d,b,this.ct)},makeGrid:function(d,b,e){var g=d.width(),k=Math.round(g/b);g=g-k*b;var j=d.height(),n=Math.round(j/e);j=j-n*e;var h,i,l,m,p,q=0,r=0,t="url("+d.find("img").attr("src")+") no-repeat scroll -";
for(h=0;h<b;h++){this.gs[h]=[];m=g>h?k+1:k;for(i=0;i<e;i++){l=d.append("<div></div>").find(":last");p=j>i?n+1:n;l.width(m).height(p).css("background",t+q+"px -"+r+"px").css("left",q).css("top",r).css("position","absolute");this.gs[h].push(l);r+=p}q+=m;r=0}d.find("img").remove()},stopGrid:function(){for(var d=0;d<this.gs.length;d++)for(var b=0;b<this.gs[d].length;b++){this.gs[d][b].clearQueue();this.gs[d][b].remove()}this.gs=[]},flatSort:function(d){for(var b=[],e=0;e<this.gs.length;e++)for(var g=
0;g<this.gs[e].length;g++)b.push(this.gs[e][g]);d&&b.reverse();return b},randomSort:function(){var d=this.flatSort();f.fn.tn3utils.shuffle(d);return d},diagonalSort:function(d,b){for(var e=[],g=d>0?this.gs.length-1:0,k=b>0?0:this.gs[0].length-1;this.gs[g];){e.push(this.addDiagonal([],g,k,d,b));g-=d}g+=d;for(k+=b;this.gs[g][k];){e.push(this.addDiagonal([],g,k,d,b));k+=b}return e},addDiagonal:function(d,b,e,g,k){d.push(this.gs[b][e]);return this.gs[b+g]&&this.gs[b+g][e+k]?this.addDiagonal(d,b+g,e+k,
g,k):d},circleSort:function(d){var b=[],e=this.gs.length,g=this.gs[0].length,k=[Math.floor(e/2),Math.floor(g/2)];e=e*g;g=[[1,0],[0,1],[-1,0],[0,-1]];var j=0,n=0,h;for(b.push(this.gs[k[0]][k[1]]);b.length<e;){for(h=0;h<=j;h++)this.addGridPiece(b,k,g[n]);if(n==g.length-1)n=0;else n++;j+=0.5}d&&b.reverse();return b},addGridPiece:function(d,b,e){b[0]+=e[0];b[1]+=e[1];this.gs[b[0]]&&this.gs[b[0]][b[1]]&&d.push(this.gs[b[0]][b[1]])},getSlidePositions:function(d,b){var e={dir:b};switch(b){case "left":e.pos=
d.outerWidth(true);break;case "right":e.pos=-d.outerWidth(true);e.dir="left";break;case "top":e.pos=-d.outerHeight(true);break;case "bottom":e.pos=d.outerHeight(true);e.dir="top"}return e},animateGrid:function(d,b,e,g,k,j,n){var h={duration:g,easing:e,complete:function(){f(this).remove()}};for(e=0;e<d.length;e++){g=f.easing[k](0,e,0,j,d.length);if(e==d.length-1){var i=this;h.complete=function(){f(this).remove();n.call(i)}}if(f.isArray(d[e]))for(var l in d[e])d[e][l].delay(g).animate(b[e],h);else d[e].delay(g).animate(b[e],
h)}},getValueArray:function(d,b,e){var g=[],k=f.isArray(b),j=f.isArray(e),n;for(n=0;n<d;n++){o={};o[k?b[n%b.length]:b]=j?e[n%e.length]:e;g.push(o)}return g}};c.defined=[];c.define=function(d){for(var b in d)switch(b){case "type":c.defined.push(d.type);break;case "config":a[d.type+"Config"]=d.config;break;case "f":a[d.type]=d.f;break;case "stop":a[d.type+"Stop"]=d.stop;break;case "condition":a[d.type+"Condition"]=d.condition;break;default:a[b]=d[b]}};c.define({type:"none",config:{},f:function(){this.end()},
stop:function(){this.end()}});c.define({type:"fade",config:{duration:300,easing:"easeInQuad"},f:function(d,b,e){var g=this;d.animate({opacity:0},e.duration,e.easing,function(){g.end()})},stop:function(d){d.stop();this.end()}});c.define({type:"slide",config:{duration:300,direction:"auto",easing:"easeInOutCirc"},f:function(d,b,e,g){g=this.getSlidePositions(b,e.direction=="auto"?g:e.direction);var k={},j={};b.css(g.dir,g.pos);k[g.dir]=0;b.animate(k,e.duration,e.easing,this.end);j[g.dir]=-g.pos;d.animate(j,
e.duration,e.easing)},stop:function(d,b){b.stop();d.stop();d.css("left",0).css("top",0);b.css("left",0).css("top",0);this.end()}});c.define({type:"blinds",config:{duration:240,easing:"easeInQuad",direction:"vertical",parts:12,partDuration:100,partEasing:"easeInQuad",method:"fade",partDirection:"auto",cross:true},f:function(d,b,e,g){e.direction=="horizontal"?this.makeGrid(d,1,e.parts):this.makeGrid(d,e.parts,1);g=e.partDirection=="auto"?g:e.partDirection;d=this.flatSort(g=="left"||g=="top");var k;
switch(e.method){case "fade":k=this.getValueArray(d.length,"opacity",0);break;case "scale":k=this.getValueArray(d.length,g=="left"?"width":"height","1px");break;case "slide":b=this.getSlidePositions(b,g);k=this.getValueArray(d.length,b.dir,e.cross?[b.pos,-b.pos]:b.pos)}this.animateGrid(d,k,e.partEasing,e.partDuration,e.easing,e.duration,this.blindsStop)},stop:function(){this.stopGrid();this.end()},condition:function(d,b){return!d.data("scaled")||!b.data("scaled")}});c.define({type:"grid",config:{duration:260,
easing:"easeInQuad",gridX:7,gridY:5,sort:"diagonal",sortReverse:false,diagonalStart:"bl",method:"fade",partDuration:300,partEasing:"easeOutSine",partDirection:"left"},f:function(d,b,e,g){this.makeGrid(d,e.gridX,e.gridY);d=e.partDirection=="auto"?g:e.partDirection;var k,j;if(e.sort=="diagonal")switch(e.diagonalStart){case "tr":k=this.diagonalSort(1,1);break;case "tl":k=this.diagonalSort(-1,1);break;case "br":k=this.diagonalSort(1,-1);break;case "bl":k=this.diagonalSort(-1,-1)}else k=this[e.sort+"Sort"](e.sortReverse);
switch(e.method){case "fade":j=this.getValueArray(k.length,"opacity",0);break;case "scale":j=this.getValueArray(k.length,d=="left"?"width":"height","1px")}this.animateGrid(k,j,e.partEasing,e.partDuration,e.easing,e.duration,this.gridStop)},stop:function(){this.stopGrid();this.end()},condition:function(d,b){return!d.data("scaled")||!b.data("scaled")}})})(jQuery);
(function(f){function c(h){var i=h&&h.message!==undefined?h.message:undefined;h=f.extend({},f.tn3block.defaults,h||{});i=i===undefined?h.message:i;n&&a({});var l=h.baseZ,m=f.browser.msie||h.forceIframe?f('<iframe class="blockUI" style="z-index:'+l++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+h.iframeSrc+'"></iframe>'):f('<div class="blockUI" style="display:none"></div>'),p=f('<div class="blockUI '+h.cssID+'-overlay" style="z-index:'+
l++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');l=f('<div class="blockUI '+h.blockMsgClass+' blockPage" style="z-index:'+l+';display:none;position:fixed"></div>');l.css("left","0px").css("top","0px");if(!h.applyPlatformOpacityRules||!(f.browser.mozilla&&/Linux/.test(navigator.platform)))p.css(h.overlayCSS);p.css("position","fixed");if(f.browser.msie||h.forceIframe)m.css("opacity",0);var q=[m,p,l],r=f("body");f.each(q,function(){this.appendTo(r)});q=
k&&(!f.boxModel||f("object,embed",null).length>0);if(j||q){h.allowBodyStretch&&f.boxModel&&f("html,body").css("height","100%");f.each([m,p,l],function(t,u){var s=u[0].style;s.position="absolute";if(t<2){s.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight)- (jQuery.boxModel?0:"+h.quirksmodeOffsetHack+') + "px"');s.setExpression("width",'jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')}else if(h.centerY){s.setExpression("top",
'(document.documentElement.clientHeight || document.body.clientHeight) / 2- (this.offsetHeight / 2)+ (blah = document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop)+ "px"');s.marginTop=0}else h.centerY||s.setExpression("top",'(document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"')})}if(i){i.data("blockUI.parent",i.parent());l.append(i);if(i.jquery||i.nodeType)f(i).show()}if((f.browser.msie||h.forceIframe)&&
h.showOverlay)m.show();h.showOverlay&&p.show();i&&l.show();h.onBlock&&h.onBlock();b(1,h);n=i}function a(h){h=f.extend({},f.tn3block.defaults,h||{});b(0,h);var i=f("body").children().filter(".blockUI").add("body > .blockUI");d(i,h)}function d(h,i){h.each(function(){this.parentNode&&this.parentNode.removeChild(this)});n.data("blockUI.parent").append(n);n=null;typeof i.onUnblock=="function"&&i.onUnblock.call(i.con)}function b(h,i){if(h||n)!i.bindEvents||h&&!i.showOverlay||(h?f(document).bind("mousedown mouseup keydown keypress",
i,e):f(document).unbind("mousedown mouseup keydown keypress",e))}function e(h){var i=h.data;if(f(h.target).parents("div."+i.blockMsgClass).length>0)return true;return f(h.target).parents().children().filter("div.blockUI").length==0}var g=document.documentMode||0,k=f.browser.msie&&(f.browser.version<8&&!g||g<8),j=f.browser.msie&&/MSIE 6.0/.test(navigator.userAgent)&&!g;f.tn3block=function(h){c(h)};f.tn3unblock=function(h){a(h)};var n=undefined;f.tn3block.defaults={message:"<h1>Please wait...</h1>",
overlayCSS:{},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:false,baseZ:1E3,allowBodyStretch:true,bindEvents:true,showOverlay:true,applyPlatformOpacityRules:true,onBlock:null,onUnblock:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",cssID:"tn3"}})(jQuery);
(function(f){(f.fn.tn3.External=function(c,a){if(c){this.context=a;this.reqs=c.length;for(var d=0;d<c.length;d++)new f.fn.tn3.External[c[d].origin](c[d],this)}}).prototype={context:null,reqs:0,getImages:function(c,a){c.origin.getImages(c,a)},setAlbumData:function(c,a){this.reqs--;this.context.setAlbumData.call(this.context,c,a)},setImageData:function(c,a,d){this.context.setImageData.call(this.context,c,a,d)},getAlbumData:function(c){return this.context.data[c]}}})(jQuery);
/*
 * transform: A jQuery cssHooks adding cross-browser 2d transform capabilities to $.fn.css() and $.fn.animate()
 *
 * limitations:
 * - requires jQuery 1.4.3+
 * - Should you use the *translate* property, then your elements need to be absolutely positionned in a relatively positionned wrapper **or it will fail in IE678**.
 * - transformOrigin is not accessible
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery.transform.js
 *
 * Copyright 2011 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 *
 */

(function( $, window, document, Math, undefined ) {

/*
 * Feature tests and global variables
 */
var div = document.createElement("div"),
	divStyle = div.style,
	suffix = "Transform",
	testProperties = [
		"O" + suffix,
		"ms" + suffix,
		"Webkit" + suffix,
		"Moz" + suffix
	],
	i = testProperties.length,
	supportProperty,
	supportMatrixFilter,
	supportFloat32Array = "Float32Array" in window,
	propertyHook,
	propertyGet,
	rMatrix = /Matrix([^)]*)/,
	rAffine = /^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/,
	_transform = "transform",
	_transformOrigin = "transformOrigin",
	_translate = "translate",
	_rotate = "rotate",
	_scale = "scale",
	_skew = "skew",
	_matrix = "matrix";

// test different vendor prefixes of these properties
while ( i-- ) {
	if ( testProperties[i] in divStyle ) {
		$.support[_transform] = supportProperty = testProperties[i];
		$.support[_transformOrigin] = supportProperty + "Origin";
		continue;
	}
}
// IE678 alternative
if ( !supportProperty ) {
	$.support.matrixFilter = supportMatrixFilter = divStyle.filter === "";
}

// px isn't the default unit of these properties
$.cssNumber[_transform] = $.cssNumber[_transformOrigin] = true;

/*
 * fn.css() hooks
 */
if ( supportProperty && supportProperty != _transform ) {
	// Modern browsers can use jQuery.cssProps as a basic hook
	$.cssProps[_transform] = supportProperty;
	$.cssProps[_transformOrigin] = supportProperty + "Origin";

	// Firefox needs a complete hook because it stuffs matrix with "px"
	if ( supportProperty == "Moz" + suffix ) {
		propertyHook = {
			get: function( elem, computed ) {
				return (computed ?
					// remove "px" from the computed matrix
					$.css( elem, supportProperty ).split("px").join(""):
					elem.style[supportProperty]
				);
			},
			set: function( elem, value ) {
				// add "px" to matrices
				elem.style[supportProperty] = /matrix\([^)p]*\)/.test(value) ?
					value.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/, _matrix+"$1$2px,$3px"):
					value;
			}
		};
	/* Fix two jQuery bugs still present in 1.5.1
	 * - rupper is incompatible with IE9, see http://jqbug.com/8346
	 * - jQuery.css is not really jQuery.cssProps aware, see http://jqbug.com/8402
	 */
	} else if ( /^1\.[0-5](?:\.|$)/.test($.fn.jquery) ) {
		propertyHook = {
			get: function( elem, computed ) {
				return (computed ?
					$.css( elem, supportProperty.replace(/^ms/, "Ms") ):
					elem.style[supportProperty]
				);
			}
		};
	}
	/* TODO: leverage hardware acceleration of 3d transform in Webkit only
	else if ( supportProperty == "Webkit" + suffix && support3dTransform ) {
		propertyHook = {
			set: function( elem, value ) {
				elem.style[supportProperty] = 
					value.replace();
			}
		}
	}*/

} else if ( supportMatrixFilter ) {
	propertyHook = {
		get: function( elem, computed, asArray ) {
			var elemStyle = ( computed && elem.currentStyle ? elem.currentStyle : elem.style ),
				matrix, data;

			if ( elemStyle && rMatrix.test( elemStyle.filter ) ) {
				matrix = RegExp.$1.split(",");
				matrix = [
					matrix[0].split("=")[1],
					matrix[2].split("=")[1],
					matrix[1].split("=")[1],
					matrix[3].split("=")[1]
				];
			} else {
				matrix = [1,0,0,1];
			}

			if ( ! $.cssHooks[_transformOrigin] ) {
				matrix[4] = elemStyle ? parseInt(elemStyle.left, 10) || 0 : 0;
				matrix[5] = elemStyle ? parseInt(elemStyle.top, 10) || 0 : 0;

			} else {
				data = $._data( elem, "transformTranslate", undefined );
				matrix[4] = data ? data[0] : 0;
				matrix[5] = data ? data[1] : 0;
			}

			return asArray ? matrix : _matrix+"(" + matrix + ")";
		},
		set: function( elem, value, animate ) {
			var elemStyle = elem.style,
				currentStyle,
				Matrix,
				filter,
				centerOrigin;

			if ( !animate ) {
				elemStyle.zoom = 1;
			}

			value = matrix(value);

			// rotate, scale and skew
			Matrix = [
				"Matrix("+
					"M11="+value[0],
					"M12="+value[2],
					"M21="+value[1],
					"M22="+value[3],
					"SizingMethod='auto expand'"
			].join();
			filter = ( currentStyle = elem.currentStyle ) && currentStyle.filter || elemStyle.filter || "";

			elemStyle.filter = rMatrix.test(filter) ?
				filter.replace(rMatrix, Matrix) :
				filter + " progid:DXImageTransform.Microsoft." + Matrix + ")";

			if ( ! $.cssHooks[_transformOrigin] ) {

				// center the transform origin, from pbakaus's Transformie http://github.com/pbakaus/transformie
				if ( (centerOrigin = $.transform.centerOrigin) ) {
					elemStyle[centerOrigin == "margin" ? "marginLeft" : "left"] = -(elem.offsetWidth/2) + (elem.clientWidth/2) + "px";
					elemStyle[centerOrigin == "margin" ? "marginTop" : "top"] = -(elem.offsetHeight/2) + (elem.clientHeight/2) + "px";
				}

				// translate
				// We assume that the elements are absolute positionned inside a relative positionned wrapper
				elemStyle.left = value[4] + "px";
				elemStyle.top = value[5] + "px";

			} else {
				$.cssHooks[_transformOrigin].set( elem, value );
			}
		}
	};
}
// populate jQuery.cssHooks with the appropriate hook if necessary
if ( propertyHook ) {
	$.cssHooks[_transform] = propertyHook;
}
// we need a unique setter for the animation logic
propertyGet = propertyHook && propertyHook.get || $.css;

/*
 * fn.animate() hooks
 */
$.fx.step.transform = function( fx ) {
	var elem = fx.elem,
		start = fx.start,
		end = fx.end,
		pos = fx.pos,
		transform = "",
		precision = 1E5,
		i, startVal, endVal, unit;

	// fx.end and fx.start need to be converted to interpolation lists
	if ( !start || typeof start === "string" ) {

		// the following block can be commented out with jQuery 1.5.1+, see #7912
		if ( !start ) {
			start = propertyGet( elem, supportProperty );
		}

		// force layout only once per animation
		if ( supportMatrixFilter ) {
			elem.style.zoom = 1;
		}

		// replace "+=" in relative animations (-= is meaningless with transforms)
		end = end.split("+=").join(start);

		// parse both transform to generate interpolation list of same length
		$.extend( fx, interpolationList( start, end ) );
		start = fx.start;
		end = fx.end;
	}

	i = start.length;

	// interpolate functions of the list one by one
	while ( i-- ) {
		startVal = start[i];
		endVal = end[i];
		unit = +false;

		switch ( startVal[0] ) {

			case _translate:
				unit = "px";
			case _scale:
				unit || ( unit = "");

				transform = startVal[0] + "(" +
					Math.round( (startVal[1][0] + (endVal[1][0] - startVal[1][0]) * pos) * precision ) / precision + unit +","+
					Math.round( (startVal[1][1] + (endVal[1][1] - startVal[1][1]) * pos) * precision ) / precision + unit + ")"+
					transform;
				break;

			case _skew + "X":
			case _skew + "Y":
			case _rotate:
				transform = startVal[0] + "(" +
					Math.round( (startVal[1] + (endVal[1] - startVal[1]) * pos) * precision ) / precision +"rad)"+
					transform;
				break;
		}
	}

	fx.origin && ( transform = fx.origin + transform );

	propertyHook && propertyHook.set ?
		propertyHook.set( elem, transform, +true ):
		elem.style[supportProperty] = transform;
};

/*
 * Utility functions
 */

// turns a transform string into its "matrix(A,B,C,D,X,Y)" form (as an array, though)
function matrix( transform ) {
	transform = transform.split(")");
	var
			trim = $.trim
		, i = -1
		// last element of the array is an empty string, get rid of it
		, l = transform.length -1
		, split, prop, val
		, prev = supportFloat32Array ? new Float32Array(6) : []
		, curr = supportFloat32Array ? new Float32Array(6) : []
		, rslt = supportFloat32Array ? new Float32Array(6) : [1,0,0,1,0,0]
		;

	prev[0] = prev[3] = rslt[0] = rslt[3] = 1;
	prev[1] = prev[2] = prev[4] = prev[5] = 0;

	// Loop through the transform properties, parse and multiply them
	while ( ++i < l ) {
		split = transform[i].split("(");
		prop = trim(split[0]);
		val = split[1];
		curr[0] = curr[3] = 1;
		curr[1] = curr[2] = curr[4] = curr[5] = 0;

		switch (prop) {
			case _translate+"X":
				curr[4] = parseInt(val, 10);
				break;

			case _translate+"Y":
				curr[5] = parseInt(val, 10);
				break;

			case _translate:
				val = val.split(",");
				curr[4] = parseInt(val[0], 10);
				curr[5] = parseInt(val[1] || 0, 10);
				break;

			case _rotate:
				val = toRadian(val);
				curr[0] = Math.cos(val);
				curr[1] = Math.sin(val);
				curr[2] = -Math.sin(val);
				curr[3] = Math.cos(val);
				break;

			case _scale+"X":
				curr[0] = +val;
				break;

			case _scale+"Y":
				curr[3] = val;
				break;

			case _scale:
				val = val.split(",");
				curr[0] = val[0];
				curr[3] = val.length>1 ? val[1] : val[0];
				break;

			case _skew+"X":
				curr[2] = Math.tan(toRadian(val));
				break;

			case _skew+"Y":
				curr[1] = Math.tan(toRadian(val));
				break;

			case _matrix:
				val = val.split(",");
				curr[0] = val[0];
				curr[1] = val[1];
				curr[2] = val[2];
				curr[3] = val[3];
				curr[4] = parseInt(val[4], 10);
				curr[5] = parseInt(val[5], 10);
				break;
		}

		// Matrix product (array in column-major order)
		rslt[0] = prev[0] * curr[0] + prev[2] * curr[1];
		rslt[1] = prev[1] * curr[0] + prev[3] * curr[1];
		rslt[2] = prev[0] * curr[2] + prev[2] * curr[3];
		rslt[3] = prev[1] * curr[2] + prev[3] * curr[3];
		rslt[4] = prev[0] * curr[4] + prev[2] * curr[5] + prev[4];
		rslt[5] = prev[1] * curr[4] + prev[3] * curr[5] + prev[5];

		prev = [rslt[0],rslt[1],rslt[2],rslt[3],rslt[4],rslt[5]];
	}
	return rslt;
}

// turns a matrix into its rotate, scale and skew components
// algorithm from http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp
function unmatrix(matrix) {
	var
			scaleX
		, scaleY
		, skew
		, A = matrix[0]
		, B = matrix[1]
		, C = matrix[2]
		, D = matrix[3]
		;

	// Make sure matrix is not singular
	if ( A * D - B * C ) {
		// step (3)
		scaleX = Math.sqrt( A * A + B * B );
		A /= scaleX;
		B /= scaleX;
		// step (4)
		skew = A * C + B * D;
		C -= A * skew;
		D -= B * skew;
		// step (5)
		scaleY = Math.sqrt( C * C + D * D );
		C /= scaleY;
		D /= scaleY;
		skew /= scaleY;
		// step (6)
		if ( A * D < B * C ) {
			A = -A;
			B = -B;
			skew = -skew;
			scaleX = -scaleX;
		}

	// matrix is singular and cannot be interpolated
	} else {
		// In this case the elem shouldn't be rendered, hence scale == 0
		scaleX = scaleY = skew = 0;
	}

	// The recomposition order is very important
	// see http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp#l971
	return [
		[_translate, [+matrix[4], +matrix[5]]],
		[_rotate, Math.atan2(B, A)],
		[_skew + "X", Math.atan(skew)],
		[_scale, [scaleX, scaleY]]
	];
}

// build the list of transform functions to interpolate
// use the algorithm described at http://dev.w3.org/csswg/css3-2d-transforms/#animation
function interpolationList( start, end ) {
	var list = {
			start: [],
			end: []
		},
		i = -1, l,
		currStart, currEnd, currType;

	// get rid of affine transform matrix
	( start == "none" || isAffine( start ) ) && ( start = "" );
	( end == "none" || isAffine( end ) ) && ( end = "" );

	// if end starts with the current computed style, this is a relative animation
	// store computed style as the origin, remove it from start and end
	if ( start && end && !end.indexOf("matrix") && toArray( start ).join() == toArray( end.split(")")[0] ).join() ) {
		list.origin = start;
		start = "";
		end = end.slice( end.indexOf(")") +1 );
	}

	if ( !start && !end ) { return; }

	// start or end are affine, or list of transform functions are identical
	// => functions will be interpolated individually
	if ( !start || !end || functionList(start) == functionList(end) ) {

		start && ( start = start.split(")") ) && ( l = start.length );
		end && ( end = end.split(")") ) && ( l = end.length );

		while ( ++i < l-1 ) {
			start[i] && ( currStart = start[i].split("(") );
			end[i] && ( currEnd = end[i].split("(") );
			currType = $.trim( ( currStart || currEnd )[0] );

			append( list.start, parseFunction( currType, currStart ? currStart[1] : 0 ) );
			append( list.end, parseFunction( currType, currEnd ? currEnd[1] : 0 ) );
		}

	// otherwise, functions will be composed to a single matrix
	} else {
		list.start = unmatrix(matrix(start));
		list.end = unmatrix(matrix(end))
	}

	return list;
}

function parseFunction( type, value ) {
	var
		// default value is 1 for scale, 0 otherwise
		defaultValue = +(!type.indexOf(_scale)),
		scaleX,
		// remove X/Y from scaleX/Y & translateX/Y, not from skew
		cat = type.replace( /e[XY]/, "e" );

	switch ( type ) {
		case _translate+"Y":
		case _scale+"Y":

			value = [
				defaultValue,
				value ?
					parseFloat( value ):
					defaultValue
			];
			break;

		case _translate+"X":
		case _translate:
		case _scale+"X":
			scaleX = 1;
		case _scale:

			value = value ?
				( value = value.split(",") ) &&	[
					parseFloat( value[0] ),
					parseFloat( value.length>1 ? value[1] : type == _scale ? scaleX || value[0] : defaultValue+"" )
				]:
				[defaultValue, defaultValue];
			break;

		case _skew+"X":
		case _skew+"Y":
		case _rotate:
			value = value ? toRadian( value ) : 0;
			break;

		case _matrix:
			return unmatrix( value ? toArray(value) : [1,0,0,1,0,0] );
			break;
	}

	return [[ cat, value ]];
}

function isAffine( matrix ) {
	return rAffine.test(matrix);
}

function functionList( transform ) {
	return transform.replace(/(?:\([^)]*\))|\s/g, "");
}

function append( arr1, arr2, value ) {
	while ( value = arr2.shift() ) {
		arr1.push( value );
	}
}

// converts an angle string in any unit to a radian Float
function toRadian(value) {
	return ~value.indexOf("deg") ?
		parseInt(value,10) * (Math.PI * 2 / 360):
		~value.indexOf("grad") ?
			parseInt(value,10) * (Math.PI/200):
			parseFloat(value);
}

// Converts "matrix(A,B,C,D,X,Y)" to [A,B,C,D,X,Y]
function toArray(matrix) {
	// remove the unit of X and Y for Firefox
	matrix = /([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(matrix);
	return [matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6]];
}

$.transform = {
	centerOrigin: "margin"
};

})( jQuery, window, document, Math );
/**
  * Klass.js - copyright @dedfat
  * version 1.0
  * https://github.com/ded/klass
  * Follow our software http://twitter.com/dedfat :)
  * MIT License
  */

!function(a,b){function j(a,b){function c(){}c[e]=this[e];var d=this,g=new c,h=f(a),j=h?a:this,k=h?{}:a,l=function(){this.initialize?this.initialize.apply(this,arguments):(b||h&&d.apply(this,arguments),j.apply(this,arguments))};l.methods=function(a){i(g,a,d),l[e]=g;return this},l.methods.call(l,k).prototype.constructor=l,l.extend=arguments.callee,l[e].implement=l.statics=function(a,b){a=typeof a=="string"?function(){var c={};c[a]=b;return c}():a,i(this,a,d);return this};return l}function i(a,b,d){for(var g in b)b.hasOwnProperty(g)&&(a[g]=f(b[g])&&f(d[e][g])&&c.test(b[g])?h(g,b[g],d):b[g])}function h(a,b,c){return function(){var d=this.supr;this.supr=c[e][a];var f=b.apply(this,arguments);this.supr=d;return f}}function g(a){return j.call(f(a)?a:d,a,1)}var c=/xyz/.test(function(){xyz})?/\bsupr\b/:/.*/,d=function(){},e="prototype",f=function(a){return typeof a===b};if(typeof module!="undefined"&&module.exports)module.exports=g;else{var k=a.klass;g.noConflict=function(){a.klass=k;return this},a.klass=g}}(this,"function")
;
/*jslint browser: true, continue: true, eqeq: true, plusplus: true, vars: true, white: true */

var FlattrLoader=function(){"use strict";var a={instance:!1,queryString:!1,validParams:["mode","https","uid","category","button","language","html5-key-prefix","popout","revsharekey"],validButtonParams:["uid","owner","category","button","language","hidden","tags","title","url","description","revsharekey","popout"],options:{},POPOUT_WIDTH:401,POPOUT_HEIGHT:230,TIMEOUT:1500,createIframe:function(b){var c=b.button=="compact",d=document.createElement("iframe");return d.setAttribute("src",(this.getParam("https")==1?"https":"http")+"://"+this.getParam("domain","api.flattr.com")+"/button/view/?"+this.encodeData(b)),d.setAttribute("class","FlattrButton"),d.setAttribute("width",c==1?110:55),d.setAttribute("height",c==1?20:62),d.setAttribute("frameBorder",0),d.setAttribute("scrolling","no"),d.setAttribute("border",0),d.setAttribute("marginHeight",0),d.setAttribute("marginWidth",0),d.setAttribute("allowTransparency","true"),d.data=b,b.popout!=0&&(d.onmouseover=function(){this.popoutIframe===undefined&&(a.removeAllOpenPopoutIframes(),a.showPopoutForButton(this),this.popoutIframe.onmouseover=function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=undefined)},this.popoutIframe.onmouseout=function(){this.parentNode&&(this.timeout=setTimeout(function(){d.popoutIframe&&a.removePopoutForButton(d)},a.TIMEOUT))})},d.onmouseout=function(){this.popoutIframe&&(this.popoutIframe.timeout=setTimeout(function(){d.popoutIframe&&a.removePopoutForButton(d)},a.TIMEOUT))}),d},getAbsolutePositionForElement:function(a){var b={x:0,y:0};if(a.offsetParent)do b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;while(a);return b},showPopoutForButton:function(a){var b,c="s",d="e",e=window.innerWidth!==undefined?window.innerWidth:document.documentElement.clientWidth,f=window.innerHeight!==undefined?window.innerHeight:document.documentElement.clientHeight,g=this.getAbsolutePositionForElement(a);g.x>e/2&&(d="w"),g.y+Number(a.height)+this.POPOUT_HEIGHT>f&&(c="n"),b=c+d,a.data.dir=b,a.popoutIframe=this.createPopoutIframe(a.data),d==="w"?a.popoutIframe.style.left=Number(g.x)-Number(this.POPOUT_WIDTH)+Number(a.width)+"px":d==="e"&&(a.popoutIframe.style.left=g.x+"px"),c==="n"?a.popoutIframe.style.top=Number(g.y)-Number(this.POPOUT_HEIGHT)+"px":c==="s"&&(a.popoutIframe.style.top=Number(g.y)+Number(a.height)+"px"),document.querySelector("body").appendChild(a.popoutIframe)},createPopoutIframe:function(a){var b=document.createElement("iframe");return b.setAttribute("src",(this.getParam("https")==1?"https":"http")+"://"+this.getParam("domain","api.flattr.com")+"/button/popout/?"+this.encodeData(a)),b.setAttribute("frameBorder",0),b.setAttribute("allowTransparency","true"),b.setAttribute("style","position: absolute; display:block; z-index: 9999;"),b.setAttribute("width",this.POPOUT_WIDTH),b.setAttribute("height",this.POPOUT_HEIGHT),b},removePopoutForButton:function(a){a.popoutIframe.timeout&&clearTimeout(a.popoutIframe.timeout),a.popoutIframe.parentNode.removeChild(a.popoutIframe),a.popoutIframe=undefined},removeAllOpenPopoutIframes:function(){var a=document.querySelectorAll("iframe.FlattrButton"),b,c;for(b=0;b<a.length;b+=1)c=a[b],c.popoutIframe&&this.removePopoutForButton(c)},reshowAllOpenPopoutIframes:function(){var a=document.querySelectorAll("iframe.FlattrButton"),b,c;for(b=0;b<a.length;b+=1)c=a[b],c.popoutIframe&&(this.removePopoutForButton(c),this.showPopoutForButton(c))},encodeData:function(a){var b,c,d="";for(b in a)a.hasOwnProperty(b)&&(c=a[b],b=="description"&&(c=this.stripTags(c,"<br>"),c.length>1e3&&(c=c.substring(0,1e3))),c=c.replace(/^\s+|\s+$/g,"").replace(/\s{2,}|\t+/g," "),d+=b+"="+encodeURIComponent(c)+"&");return d},getParam:function(a,b){return typeof this.options[a]!="undefined"?this.options[a]:b},init:function(){var b,c,d,e,f,g,h,i,j,k,l,m,n=document.getElementsByTagName("script");try{for(b=n.length-1;b>=0;b--){c=n[b];if(!c.hasAttribute("src"))continue;d=c.src,e=new RegExp("^(http(?:s?))://(api\\.(?:.*\\.?)flattr\\.(?:com|dev))","i"),f=d.match(e);if(f){this.options.domain=f[2].toString(),this.options.https=f[1].toString()=="https"?1:0,g=d.indexOf("?");if(g){h=d.substring(++g),i=h.split("&");for(k=0;k<i.length;k++)j=i[k].split("="),this.validParam(j[0],this.validParams)&&(this.options[j[0]]=j[1])}this.instance=c;break}}}catch(o){}window.addEventListener!==undefined?(l=window.addEventListener,m="message"):(l=window.attachEvent,m="onmessage"),l(m,function(b){var c;try{c=JSON.parse(b.data)}catch(d){c={}}c.flattr_button_event==="popout_close_button_clicked"?a.removeAllOpenPopoutIframes():c.flattr_button_event==="click_successful"&&a.reshowAllOpenPopoutIframes()},!1);switch(this.getParam("mode","manual")){case"direct":this.render();break;case"auto":case"automatic":var p=this;this.domReady(function(){p.setup()});break;case"manual":default:}return this},loadButton:function(a){var b,c,d,e,f,g={},h=null;for(b in this.options)this.options.hasOwnProperty(b)&&this.validParam(b,this.validButtonParams)&&(g[b]=this.options[b]);a.href&&(g.url=a.href),a.getAttribute("title")&&(g.title=a.getAttribute("title")),a.getAttribute("lang")&&(g.language=a.getAttribute("lang")),a.innerHTML&&(g.description=a.innerHTML);if((h=a.getAttribute("rev"))!==null&&h.substring(0,6)=="flattr"||(h=a.getAttribute("rel"))!==null&&h.substring(0,6)=="flattr"){h=h.substring(7).split(";");for(c=0;c<h.length;c++)d=h[c].split(":"),e=d.shift(),this.validParam(e,this.validButtonParams)&&(g[e]=d.join(":"))}else for(f in this.validButtonParams)this.validButtonParams.hasOwnProperty(f)&&(h=a.getAttribute(this.getParam("html5-key-prefix","data-flattr")+"-"+this.validButtonParams[f]))!==null&&(g[this.validButtonParams[f]]=h);this.replaceWith(a,this.createIframe(g))},render:function(a,b,c){var d,e={};for(d in this.options)this.options.hasOwnProperty(d)&&this.validParam(d,this.validButtonParams)&&(e[d]=this.options[d]);try{if(a)for(d in a)a.hasOwnProperty(d)&&this.validParam(d,this.validButtonParams)&&(e[d]=a[d]);else window.flattr_uid&&(e.uid=window.flattr_uid),window.flattr_url&&(e.url=window.flattr_url),window.flattr_btn&&(e.button=window.flattr_btn),window.flattr_hide&&(e.hidden=window.flattr_hide==1?1:0),window.flattr_cat&&(e.category=window.flattr_cat),window.flattr_tag&&(e.tags=window.flattr_tag),window.flattr_lng&&(e.language=window.flattr_lng),window.flattr_tle&&(e.title=window.flattr_tle),window.flattr_dsc&&(e.description=window.flattr_dsc);var f=this.createIframe(e);if(b){typeof b=="string"&&(b=document.getElementById(b));switch(c){case"before":b.parentNode.insertBefore(f,b);break;case"replace":this.replaceWith(b,f);break;case"append":default:b.appendChild(f)}}else this.getParam("mode","manual")=="direct"&&this.replaceWith(this.instance,this.createIframe(e))}catch(g){}},replaceWith:function(a,b){if(typeof b=="string")if(typeof document.documentElement.outerHTML!="undefined")a.outerHTML=b;else{var c=document.createRange();c.selectNode(a),b=c.createContextualFragment(b),a.parentNode.replaceChild(b,a)}var d=a.parentNode;d.replaceChild(b,a)},setup:function(){var a,b,c;if(document.querySelectorAll)try{c=document.querySelectorAll("a.FlattrButton")}catch(d){}if(c==undefined){c=[],a=document.getElementsByTagName("a");for(b=a.length-1;b>=0;b--)/FlattrButton/.test(a[b].className)&&(c[c.length]=a[b])}for(b=c.length-1;b>=0;b--)this.loadButton(c[b])},stripTags:function(a,b){var c="",d=!1,e=[],f=[],g="",h=0,i="",j="",k=function(a,b,c){return c.split(a).join(b)};b&&(f=b.match(/([a-zA-Z0-9]+)/gi)),a+="",e=a.match(/(<\/?[\S][^>]*>)/gi);for(c in e)if(e.hasOwnProperty(c)){if(isNaN(c))continue;j=e[c].toString(),d=!1;for(i in f)if(f.hasOwnProperty(i)){g=f[i],h=-1,h!=0&&(h=j.toLowerCase().indexOf("<"+g+">")),h!=0&&(h=j.toLowerCase().indexOf("<"+g+" ")),h!=0&&(h=j.toLowerCase().indexOf("</"+g));if(h==0){d=!0;break}}d||(a=k(j,"",a))}return a},validParam:function(a,b){var c;for(c=0;c<b.length;c++)if(b[c]==a)return!0;return!1}};return a}();!function(a,b){function c(a){m=1;while(a=d.shift())a()}var d=[],e,f,g=!1,h=b.documentElement,i=h.doScroll,j="DOMContentLoaded",k="addEventListener",l="onreadystatechange",m=/^loade|c/.test(b.readyState);b[k]&&b[k](j,f=function(){b.removeEventListener(j,f,g),c()},g),i&&b.attachEvent(l,e=function(){/^c/.test(b.readyState)&&(b.detachEvent(l,e),c())}),a.domReady=i?function(b){self!=top?m?b():d.push(b):function(){try{h.doScroll("left")}catch(c){return setTimeout(function(){a.domReady(b)},50)}b()}()}:function(a){m?a():d.push(a)}}(FlattrLoader,document),FlattrLoader.init()
;
/* Modernizr custom build of 1.7pre: csstransforms */

window.Modernizr=function(a,b,c){function G(){}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7pre",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document)
;
// prettify.js
var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function m(a){var f=a.charCodeAt(0);if(f!==92)return f;var b=a.charAt(1);return(f=r[b])?f:"0"<=b&&b<="7"?parseInt(a.substring(1),8):b==="u"||b==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=
[],b=[],o=f[0]==="^",c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);d<65||j>122||(d<65||j>90||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),d<97||j>122||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,f){return a[0]-f[0]||f[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=0;c<
f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++t);for(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===void 0&&(f[c]="(?:")):"\\"===j.charAt(0)&&
(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),j.length>=2&&a==="["?f[c]=h(j):a!=="\\"&&(f[c]=j.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var t=0,s=!1,l=!1,p=0,d=a.length;p<d;++p){var g=a[p];if(g.ignoreCase)l=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0;l=!1;break}}for(var r=
{b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.length;p<d;++p){g=a[p];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[s]="\n",t[s<<1]=y++,t[s++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=p?g.replace(/\r\n?/g,"\n"):g.replace(/[\t\n\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.length,
t[s++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,t=[],s=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:t}}function B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,"pln"],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n<z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===
"string")c=!1;else{var i=h[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<t;++c)if(i=m[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=b.length>=5&&"lang-"===b.substring(0,5))&&!(o&&typeof o[1]==="string"))c=!1,b="src";c||(r[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),k=j+c.length;o[2]&&(k=f.length-o[2].length,j=k-c.length);b=b.substring(5);B(l+i,f.substring(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.substring(k),e,p)}else p.push(l+i,b)}a.e=p}var h={},y;(function(){for(var e=a.concat(m),
l=[],p={},d=0,g=e.length;d<g;++d){var r=e[d],n=r[3];if(n)for(var k=n.length;--k>=0;)h[n.charAt(k)]=r;r=r[1];n=""+r;p.hasOwnProperty(n)||(l.push(r),p[n]=q)}l.push(/[\S\s]/);y=L(l)})();var t=m.length;return e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?m.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):m.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&e.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var h=a.hashComments;h&&(a.cStyleComments?(h>1?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):m.push(["com",/^#[^\n\r]*/,
q,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\n\r]*/,q]),e.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));a.regexLiterals&&e.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,
"");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]);m.push(["pln",/^\s+/,q," \r\n\t\xa0"]);e.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);return x(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),
a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(t);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}
for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&e.nodeType===1;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,t=/\r\n?|\n/,s=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=s.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);for(l=s.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",
m);var r=s.createElement("OL");r.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,z=d.length;g<z;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(s.createTextNode("\xa0")),r.appendChild(l);a.appendChild(r)}function k(a,m){for(var e=m.length;--e>=0;){var h=m[e];A.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*</.test(m)?"default-markup":"default-code";return A[a]}function E(a){var m=
a.g;try{var e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,t=a.a,s=t.length,e=0,l=a.c,p=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=s;var r,n;for(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;for(n=r=0;n<g;){for(var z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}for(d.length=r;h<p;){var o=l[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=l[h+1],j;if(i.nodeType!==1&&(j=t.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=
j;var u=i.ownerDocument,v=u.createElement("SPAN");v.className=d[a+1];var x=i.parentNode;x.replaceChild(v,i);v.appendChild(i);e<o&&(l[h+1]=i=u.createTextNode(t.substring(b,o)),x.insertBefore(i,v.nextSibling))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}catch(w){"console"in window&&console.log(w&&w.stack?w.stack:w)}}var v=["break,continue,do,else,for,if,return,while"],w=[[v,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w=[w,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
J=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],v=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,N=/\S/,O=u({keywords:[F,H,w,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
I,J,v],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),A={};k(O,["default-code"]);k(x([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
["default-markup","htm","html","mxml","xhtml","xml","xsl"]);k(x([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);k(x([],[["atv",/^[\S\s]+/]]),["uq.val"]);k(u({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({keywords:"null,true,false"}),["json"]);k(u({keywords:H,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:K}),["cs"]);k(u({keywords:G,cStyleComments:!0}),["java"]);k(u({keywords:v,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);k(u({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
["cv","py"]);k(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);k(u({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);k(u({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]);k(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);k(x([],[["str",/^[\S\s]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&D(h,e);E({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;p<h.length&&l.now()<e;p++){var n=h[p],k=n.className;if(k.indexOf("prettyprint")>=0){var k=k.match(g),f,b;if(b=
!k){b=n;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=i===1?o?b:c:i===3?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=!1;for(o=n.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){b=!0;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.length?setTimeout(m,
250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var t=0,s=e[k].length;t<s;++t)h.push(e[k][t]);var e=q,l=Date;l.now||(l={now:function(){return+new Date}});var p=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();

// lang-css.js
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\f\r ]+/,null," \t\r\n"]],[["str",/^"(?:[^\n\f\r"\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*"/,null],["str",/^'(?:[^\n\f\r'\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*'/,null],["lang-css-str",/^url\(([^"')]*)\)/i],["kwd",/^(?:url|rgb|!important|@import|@page|@media|@charset|inherit)(?=[^\w-]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*)\s*:/i],["com",/^\/\*[^*]*\*+(?:[^*/][^*]*\*+)*\//],["com",
/^(?:<\!--|--\>)/],["lit",/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],["lit",/^#[\da-f]{3,6}/i],["pln",/^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i],["pun",/^[^\s\w"']+/]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[["kwd",/^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i]]),["css-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[["str",/^[^"')]+/]]),["css-str"]);
$(document).ready(function() {

	function changeTheme(theme){
		
		window.location.search = "?theme=" + theme;
	}

	$("#themeswitcher").change(function() {
		changeTheme($(this).val());
	});
});
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//


;
