!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=51)}([,function(e,r,t){e.exports=t(8)},function(e,r,t){var n,o,s;o=[e],void 0===(s="function"==typeof(n=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",t="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",n=e=>{const n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getBrowserInfo:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(n).length)throw new Error("api-metadata.json has not been included in browser-polyfill");const o=(r,t)=>(...n)=>{e.runtime.lastError?r.reject(e.runtime.lastError):t.singleCallbackArg||n.length<=1&&!1!==t.singleCallbackArg?r.resolve(n[0]):r.resolve(n)},s=e=>1==e?"argument":"arguments",a=(e,r,t)=>new Proxy(r,{apply:(r,n,o)=>t.call(n,e,...o)});let i=Function.call.bind(Object.prototype.hasOwnProperty);const c=(e,r={},t={})=>{let n=Object.create(null),u={has:(r,t)=>t in e||t in n,get(u,l,g){if(l in n)return n[l];if(!(l in e))return;let m=e[l];if("function"==typeof m)if("function"==typeof r[l])m=a(e,e[l],r[l]);else if(i(t,l)){let r=((e,r)=>(function(t,...n){if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${s(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${s(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise((s,a)=>{if(r.fallbackToNoCallback)try{t[e](...n,o({resolve:s,reject:a},r))}catch(o){console.warn(`${e} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",o),t[e](...n),r.fallbackToNoCallback=!1,r.noCallback=!0,s()}else r.noCallback?(t[e](...n),s()):t[e](...n,o({resolve:s,reject:a},r))})}))(l,t[l]);m=a(e,e[l],r)}else m=m.bind(e);else{if("object"!=typeof m||null===m||!i(r,l)&&!i(t,l))return Object.defineProperty(n,l,{configurable:!0,enumerable:!0,get:()=>e[l],set(r){e[l]=r}}),m;m=c(m,r[l],t[l])}return n[l]=m,m},set:(r,t,o,s)=>(t in n?n[t]=o:e[t]=o,!0),defineProperty:(e,r,t)=>Reflect.defineProperty(n,r,t),deleteProperty:(e,r)=>Reflect.deleteProperty(n,r)},l=Object.create(e);return new Proxy(l,u)},u=e=>({addListener(r,t,...n){r.addListener(e.get(t),...n)},hasListener:(r,t)=>r.hasListener(e.get(t)),removeListener(r,t){r.removeListener(e.get(t))}});let l=!1;const g=new class extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}(e=>"function"!=typeof e?e:function(r,n,o){let s,a,i=!1,c=new Promise(e=>{s=function(r){l||(console.warn(t,(new Error).stack),l=!0),i=!0,e(r)}});try{a=e(r,n,s)}catch(e){a=Promise.reject(e)}const u=!0!==a&&(e=>e&&"object"==typeof e&&"function"==typeof e.then)(a);if(!0!==a&&!u&&!i)return!1;const g=e=>{e.then(e=>{o(e)},e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",o({__mozWebExtensionPolyfillReject__:!0,message:r})}).catch(e=>{console.error("Failed to send onMessage rejected reply",e)})};return g(u?a:c),!0}),m=({reject:t,resolve:n},o)=>{e.runtime.lastError?e.runtime.lastError.message===r?n():t(e.runtime.lastError):o&&o.__mozWebExtensionPolyfillReject__?t(new Error(o.message)):n(o)},f=(e,r,t,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${s(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${s(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise((e,r)=>{const o=m.bind(null,{resolve:e,reject:r});n.push(o),t.sendMessage(...n)})},p={runtime:{onMessage:u(g),onMessageExternal:u(g),sendMessage:f.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:f.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},h={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{networkPredictionEnabled:h,webRTCIPHandlingPolicy:h},services:{passwordSavingEnabled:h},websites:{hyperlinkAuditingEnabled:h,referrersEnabled:h}},c(e,p,n)};e.exports=n(chrome)}else e.exports=browser})?n.apply(r,o):n)||(e.exports=s)},function(e,r){function t(e,r,t,n,o,s,a){try{var i=e[s](a),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,s){var a=e.apply(r,n);function i(e){t(a,o,s,i,c,"next",e)}function c(e){t(a,o,s,i,c,"throw",e)}i(void 0)}))}}},,,,function(e,r,t){"use strict";var n=t(36),o=t(54),s=Object.prototype.toString;function a(e){return"[object Array]"===s.call(e)}function i(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===s.call(e)}function u(e,r){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var t=0,n=e.length;t<n;t++)r.call(null,e[t],t,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:c,isStream:function(e){return i(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var r={};function t(t,n){"object"==typeof r[n]&&"object"==typeof t?r[n]=e(r[n],t):r[n]=t}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],t);return r},deepMerge:function e(){var r={};function t(t,n){"object"==typeof r[n]&&"object"==typeof t?r[n]=e(r[n],t):r[n]="object"==typeof t?e({},t):t}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],t);return r},extend:function(e,r,t){return u(r,(function(r,o){e[o]=t&&"function"==typeof r?n(r,t):r})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,r,t){var n=function(e){"use strict";var r,t=Object.prototype,n=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function c(e,r,t,n){var o=r&&r.prototype instanceof h?r:h,s=Object.create(o.prototype),a=new L(n||[]);return s._invoke=function(e,r,t){var n=l;return function(o,s){if(n===m)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw s;return j()}for(t.method=o,t.arg=s;;){var a=t.delegate;if(a){var i=k(a,t);if(i){if(i===p)continue;return i}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(n===l)throw n=f,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n=m;var c=u(e,r,t);if("normal"===c.type){if(n=t.done?f:g,c.arg===p)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(n=f,t.method="throw",t.arg=c.arg)}}}(e,t,a),s}function u(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l="suspendedStart",g="suspendedYield",m="executing",f="completed",p={};function h(){}function d(){}function A(){}var x={};x[s]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(P([])));v&&v!==t&&n.call(v,s)&&(x=v);var b=A.prototype=h.prototype=Object.create(x);function w(e){["next","throw","return"].forEach((function(r){e[r]=function(e){return this._invoke(r,e)}}))}function E(e){var r;this._invoke=function(t,o){function s(){return new Promise((function(r,s){!function r(t,o,s,a){var i=u(e[t],e,o);if("throw"!==i.type){var c=i.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(e){r("next",e,s,a)}),(function(e){r("throw",e,s,a)})):Promise.resolve(l).then((function(e){c.value=e,s(c)}),(function(e){return r("throw",e,s,a)}))}a(i.arg)}(t,o,r,s)}))}return r=r?r.then(s,s):s()}}function k(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,k(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var s=o.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,p):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function T(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function C(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:r,done:!0}}return d.prototype=b.constructor=A,A.constructor=d,A[i]=d.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,A):(e.__proto__=A,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(E.prototype),E.prototype[a]=function(){return this},e.AsyncIterator=E,e.async=function(r,t,n,o){var s=new E(c(r,t,n,o));return e.isGeneratorFunction(t)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},w(b),b[i]="Generator",b[s]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var r=[];for(var t in e)r.push(t);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return i.type="throw",i.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,r){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var s=o;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=r&&r<=s.finallyLoc&&(s=null);var a=s?s.completion:{};return a.type=e,a.arg=r,s?(this.method="next",this.next=s.finallyLoc,p):this.complete(a)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),p},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),C(t),p}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var o=n.arg;C(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),p}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,r,t){"use strict";e.exports=function(e,r){return function(){for(var t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];return e.apply(r,t)}}},function(e,r,t){"use strict";var n=t(7);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,r,t){if(!r)return e;var s;if(t)s=t(r);else if(n.isURLSearchParams(r))s=r.toString();else{var a=[];n.forEach(r,(function(e,r){null!=e&&(n.isArray(e)?r+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(r)+"="+o(e))})))})),s=a.join("&")}if(s){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},function(e,r,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,r,t){"use strict";(function(r){var n=t(7),o=t(60),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,r){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}var i,c={adapter:(void 0!==r&&"[object process]"===Object.prototype.toString.call(r)?i=t(40):"undefined"!=typeof XMLHttpRequest&&(i=t(40)),i),transformRequest:[function(e,r){return o(r,"Accept"),o(r,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(r,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(s)})),e.exports=c}).call(this,t(59))},function(e,r,t){"use strict";var n=t(7),o=t(61),s=t(37),a=t(63),i=t(64),c=t(41);e.exports=function(e){return new Promise((function(r,u){var l=e.data,g=e.headers;n.isFormData(l)&&delete g["Content-Type"];var m=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",p=e.auth.password||"";g.Authorization="Basic "+btoa(f+":"+p)}if(m.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,m.onreadystatechange=function(){if(m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in m?a(m.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:t,config:e,request:m};o(r,u,n),m=null}},m.onabort=function(){m&&(u(c("Request aborted",e,"ECONNABORTED",m)),m=null)},m.onerror=function(){u(c("Network Error",e,null,m)),m=null},m.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",m)),m=null},n.isStandardBrowserEnv()){var h=t(65),d=(e.withCredentials||i(e.url))&&e.xsrfCookieName?h.read(e.xsrfCookieName):void 0;d&&(g[e.xsrfHeaderName]=d)}if("setRequestHeader"in m&&n.forEach(g,(function(e,r){void 0===l&&"content-type"===r.toLowerCase()?delete g[r]:m.setRequestHeader(r,e)})),e.withCredentials&&(m.withCredentials=!0),e.responseType)try{m.responseType=e.responseType}catch(r){if("json"!==e.responseType)throw r}"function"==typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){m&&(m.abort(),u(e),m=null)})),void 0===l&&(l=null),m.send(l)}))}},function(e,r,t){"use strict";var n=t(62);e.exports=function(e,r,t,o,s){var a=new Error(e);return n(a,r,t,o,s)}},function(e,r,t){"use strict";var n=t(7);e.exports=function(e,r){r=r||{};var t={};return n.forEach(["url","method","params","data"],(function(e){void 0!==r[e]&&(t[e]=r[e])})),n.forEach(["headers","auth","proxy"],(function(o){n.isObject(r[o])?t[o]=n.deepMerge(e[o],r[o]):void 0!==r[o]?t[o]=r[o]:n.isObject(e[o])?t[o]=n.deepMerge(e[o]):void 0!==e[o]&&(t[o]=e[o])})),n.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(n){void 0!==r[n]?t[n]=r[n]:void 0!==e[n]&&(t[n]=e[n])})),t}},function(e,r,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,r,t){e.exports=t(53)},,,,,,,function(e,r,t){e.exports=t(52)},function(e,r,t){"use strict";t.r(r);var n=t(1),o=t.n(n),s=t(3),a=t.n(s),i=t(44),c=t.n(i),u=t(2),l=t.n(u);const g=function(){var e=a()(o.a.mark((function e(r,t,n){var s,a,i,u,g,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="https://kutt.it",e.prev=1,e.next=4,l.a.storage.local.get(["host","userOptions"]);case 4:a=e.sent,i=a.host,(u=a.userOptions).hasOwnProperty("devMode")&&u.devMode&&(s=i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),s="https://kutt.it";case 13:return e.prev=13,e.next=16,c()({method:"POST",timeout:2e4,url:`${s}/api/url/submit`,headers:{"X-API-Key":r},data:{target:t,password:n}});case 16:return g=e.sent,m=g.data.shortUrl,e.abrupt("return",m);case 21:if(e.prev=21,e.t1=e.catch(13),"ECONNABORTED"!==e.t1.code){e.next=25;break}return e.abrupt("return",504);case 25:if(!e.t1.response){e.next=27;break}return e.abrupt("return",e.t1.response.status);case 27:case"end":return e.stop()}}),e,null,[[1,10],[13,21]])})));return function(r,t,n){return e.apply(this,arguments)}}();l.a.runtime.onMessage.addListener(function(){var e=a()(o.a.mark((function e(r,t,n){var s,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("start"!==r.msg){e.next=2;break}return e.abrupt("return",g(r.API_key,r.pageUrl,r.password));case 2:if("store"!==r.msg){e.next=11;break}return s=r.curURLCollection,a=r.curURLPair,i=s.filter(e=>e.longUrl!==a.longUrl),i.length>=15&&i.shift(),i.push(a),e.next=11,l.a.storage.local.set({URL_array:i});case 11:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}())},function(e,r,t){"use strict";var n=t(7),o=t(36),s=t(55),a=t(42);function i(e){var r=new s(e),t=o(s.prototype.request,r);return n.extend(t,s.prototype,r),n.extend(t,r),t}var c=i(t(39));c.Axios=s,c.create=function(e){return i(a(c.defaults,e))},c.Cancel=t(43),c.CancelToken=t(68),c.isCancel=t(38),c.all=function(e){return Promise.all(e)},c.spread=t(69),e.exports=c,e.exports.default=c},function(e,r){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,r,t){"use strict";var n=t(7),o=t(37),s=t(56),a=t(57),i=t(42);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var r=[a,void 0],t=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){r.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){r.push(e.fulfilled,e.rejected)}));r.length;)t=t.then(r.shift(),r.shift());return t},c.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(r,t){return this.request(n.merge(t||{},{method:e,url:r}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(r,t,o){return this.request(n.merge(o||{},{method:e,url:r,data:t}))}})),e.exports=c},function(e,r,t){"use strict";var n=t(7);function o(){this.handlers=[]}o.prototype.use=function(e,r){return this.handlers.push({fulfilled:e,rejected:r}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(r){null!==r&&e(r)}))},e.exports=o},function(e,r,t){"use strict";var n=t(7),o=t(58),s=t(38),a=t(39),i=t(66),c=t(67);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!i(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],(function(r){delete e.headers[r]})),(e.adapter||a.adapter)(e).then((function(r){return u(e),r.data=o(r.data,r.headers,e.transformResponse),r}),(function(r){return s(r)||(u(e),r&&r.response&&(r.response.data=o(r.response.data,r.response.headers,e.transformResponse))),Promise.reject(r)}))}},function(e,r,t){"use strict";var n=t(7);e.exports=function(e,r,t){return n.forEach(t,(function(t){e=t(e,r)})),e}},function(e,r){var t,n,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c,u=[],l=!1,g=-1;function m(){l&&c&&(l=!1,c.length?u=c.concat(u):g=-1,u.length&&f())}function f(){if(!l){var e=i(m);l=!0;for(var r=u.length;r;){for(c=u,u=[];++g<r;)c&&c[g].run();g=-1,r=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function p(e,r){this.fun=e,this.array=r}function h(){}o.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];u.push(new p(e,r)),1!==u.length||l||i(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,r,t){"use strict";var n=t(7);e.exports=function(e,r){n.forEach(e,(function(t,n){n!==r&&n.toUpperCase()===r.toUpperCase()&&(e[r]=t,delete e[n])}))}},function(e,r,t){"use strict";var n=t(41);e.exports=function(e,r,t){var o=t.config.validateStatus;!o||o(t.status)?e(t):r(n("Request failed with status code "+t.status,t.config,null,t.request,t))}},function(e,r,t){"use strict";e.exports=function(e,r,t,n,o){return e.config=r,t&&(e.code=t),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,r,t){"use strict";var n=t(7),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var r,t,s,a={};return e?(n.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),r=n.trim(e.substr(0,s)).toLowerCase(),t=n.trim(e.substr(s+1)),r){if(a[r]&&o.indexOf(r)>=0)return;a[r]="set-cookie"===r?(a[r]?a[r]:[]).concat([t]):a[r]?a[r]+", "+t:t}})),a):a}},function(e,r,t){"use strict";var n=t(7);e.exports=n.isStandardBrowserEnv()?function(){var e,r=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function o(e){var n=e;return r&&(t.setAttribute("href",n),n=t.href),t.setAttribute("href",n),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return e=o(window.location.href),function(r){var t=n.isString(r)?o(r):r;return t.protocol===e.protocol&&t.host===e.host}}():function(){return!0}},function(e,r,t){"use strict";var n=t(7);e.exports=n.isStandardBrowserEnv()?{write:function(e,r,t,o,s,a){var i=[];i.push(e+"="+encodeURIComponent(r)),n.isNumber(t)&&i.push("expires="+new Date(t).toGMTString()),n.isString(o)&&i.push("path="+o),n.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var r=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,r,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,r,t){"use strict";e.exports=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e}},function(e,r,t){"use strict";var n=t(43);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var r;this.promise=new Promise((function(e){r=e}));var t=this;e((function(e){t.reason||(t.reason=new n(e),r(t.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(r){e=r})),cancel:e}},e.exports=o},function(e,r,t){"use strict";e.exports=function(e){return function(r){return e.apply(null,r)}}}]);