(self["webpackChunkflightticketreservation"]=self["webpackChunkflightticketreservation"]||[]).push([[998],{4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return y},L:function(){return l},LL:function(){return A},P0:function(){return m},Pz:function(){return v},Sg:function(){return w},ZR:function(){return R},aH:function(){return _},b$:function(){return T},eu:function(){return I},hl:function(){return S},m9:function(){return z},ne:function(){return U},pd:function(){return j},q4:function(){return g},ru:function(){return x},tV:function(){return c},uI:function(){return E},vZ:function(){return P},w1:function(){return C},xO:function(){return M},xb:function(){return L},z$:function(){return b},zd:function(){return F}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(1023&l))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,l=a?t[r+2]:0,c=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,a=s?n[t.charAt(r)]:0;++r;const l=r<t.length,c=l?n[t.charAt(r)]:64;++r;const u=r<t.length,h=u?n[t.charAt(r)]:64;if(++r,null==e||null==a||null==c||null==h)throw new o;const d=e<<2|a>>4;if(i.push(d),64!==c){const t=a<<4&240|c>>2;if(i.push(t),64!==h){const t=c<<6&192|h;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=i(t);return s.encodeByteArray(e,!0)},l=function(t){return a(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>u().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/flight_seat_reservation/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},f=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||d()||f()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},_=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},v=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[l(JSON.stringify(n)),l(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function x(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function T(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const t=b();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function S(){try{return"object"===typeof indexedDB}catch(t){return!1}}function I(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k="FirebaseError";class R extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=k,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?O(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new R(i,o,n);return a}}function O(t,e){return t.replace(D,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function P(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(N(n)&&N(s)){if(!P(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function N(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function F(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function j(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,e){const n=new V(t,e);return n.subscribe.bind(n)}class V{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=B(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=q),void 0===i.error&&(i.error=q),void 0===i.complete&&(i.complete=q);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function B(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(t){return t&&t._delegate?t._delegate:t}},6980:function(t,e,n){"use strict";n.r(e),n.d(e,{afterMain:function(){return E},afterRead:function(){return y},afterWrite:function(){return C},applyStyles:function(){return P},arrow:function(){return ot},auto:function(){return a},basePlacements:function(){return l},beforeMain:function(){return w},beforeRead:function(){return _},beforeWrite:function(){return x},bottom:function(){return r},clippingParents:function(){return h},computeStyles:function(){return dt},createPopper:function(){return ce},createPopperBase:function(){return ae},createPopperLite:function(){return he},detectOverflow:function(){return Lt},end:function(){return u},eventListeners:function(){return gt},flip:function(){return Ft},hide:function(){return Bt},left:function(){return o},main:function(){return b},modifierPhases:function(){return S},offset:function(){return Gt},placements:function(){return m},popper:function(){return f},popperGenerator:function(){return oe},popperOffsets:function(){return Ht},preventOverflow:function(){return Kt},read:function(){return v},reference:function(){return p},right:function(){return s},start:function(){return c},top:function(){return i},variationPlacements:function(){return g},viewport:function(){return d},write:function(){return T}});var i="top",r="bottom",s="right",o="left",a="auto",l=[i,r,s,o],c="start",u="end",h="clippingParents",d="viewport",f="popper",p="reference",g=l.reduce((function(t,e){return t.concat([e+"-"+c,e+"-"+u])}),[]),m=[].concat(l,[a]).reduce((function(t,e){return t.concat([e,e+"-"+c,e+"-"+u])}),[]),_="beforeRead",v="read",y="afterRead",w="beforeMain",b="main",E="afterMain",x="beforeWrite",T="write",C="afterWrite",S=[_,v,y,w,b,E,x,T,C];function I(t){return t?(t.nodeName||"").toLowerCase():null}function k(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function R(t){var e=k(t).Element;return t instanceof e||t instanceof Element}function A(t){var e=k(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function O(t){if("undefined"===typeof ShadowRoot)return!1;var e=k(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function D(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},r=e.elements[t];A(r)&&I(r)&&(Object.assign(r.style,n),Object.keys(i).forEach((function(t){var e=i[t];!1===e?r.removeAttribute(t):r.setAttribute(t,!0===e?"":e)})))}))}function L(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var i=e.elements[t],r=e.attributes[t]||{},s=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]),o=s.reduce((function(t,e){return t[e]="",t}),{});A(i)&&I(i)&&(Object.assign(i.style,o),Object.keys(r).forEach((function(t){i.removeAttribute(t)})))}))}}var P={name:"applyStyles",enabled:!0,phase:"write",fn:D,effect:L,requires:["computeStyles"]};function N(t){return t.split("-")[0]}var M=Math.max,F=Math.min,j=Math.round;function U(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function V(){return!/^((?!chrome|android).)*safari/i.test(U())}function B(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var i=t.getBoundingClientRect(),r=1,s=1;e&&A(t)&&(r=t.offsetWidth>0&&j(i.width)/t.offsetWidth||1,s=t.offsetHeight>0&&j(i.height)/t.offsetHeight||1);var o=R(t)?k(t):window,a=o.visualViewport,l=!V()&&n,c=(i.left+(l&&a?a.offsetLeft:0))/r,u=(i.top+(l&&a?a.offsetTop:0))/s,h=i.width/r,d=i.height/s;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c,x:c,y:u}}function q(t){var e=B(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function z(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&O(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function G(t){return k(t).getComputedStyle(t)}function W(t){return["table","td","th"].indexOf(I(t))>=0}function H(t){return((R(t)?t.ownerDocument:t.document)||window.document).documentElement}function $(t){return"html"===I(t)?t:t.assignedSlot||t.parentNode||(O(t)?t.host:null)||H(t)}function Z(t){return A(t)&&"fixed"!==G(t).position?t.offsetParent:null}function K(t){var e=/firefox/i.test(U()),n=/Trident/i.test(U());if(n&&A(t)){var i=G(t);if("fixed"===i.position)return null}var r=$(t);O(r)&&(r=r.host);while(A(r)&&["html","body"].indexOf(I(r))<0){var s=G(r);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||e&&"filter"===s.willChange||e&&s.filter&&"none"!==s.filter)return r;r=r.parentNode}return null}function X(t){var e=k(t),n=Z(t);while(n&&W(n)&&"static"===G(n).position)n=Z(n);return n&&("html"===I(n)||"body"===I(n)&&"static"===G(n).position)?e:n||K(t)||e}function Y(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function J(t,e,n){return M(t,F(e,n))}function Q(t,e,n){var i=J(t,e,n);return i>n?n:i}function tt(){return{top:0,right:0,bottom:0,left:0}}function et(t){return Object.assign({},tt(),t)}function nt(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var it=function(t,e){return t="function"===typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,et("number"!==typeof t?t:nt(t,l))};function rt(t){var e,n=t.state,a=t.name,l=t.options,c=n.elements.arrow,u=n.modifiersData.popperOffsets,h=N(n.placement),d=Y(h),f=[o,s].indexOf(h)>=0,p=f?"height":"width";if(c&&u){var g=it(l.padding,n),m=q(c),_="y"===d?i:o,v="y"===d?r:s,y=n.rects.reference[p]+n.rects.reference[d]-u[d]-n.rects.popper[p],w=u[d]-n.rects.reference[d],b=X(c),E=b?"y"===d?b.clientHeight||0:b.clientWidth||0:0,x=y/2-w/2,T=g[_],C=E-m[p]-g[v],S=E/2-m[p]/2+x,I=J(T,S,C),k=d;n.modifiersData[a]=(e={},e[k]=I,e.centerOffset=I-S,e)}}function st(t){var e=t.state,n=t.options,i=n.element,r=void 0===i?"[data-popper-arrow]":i;null!=r&&("string"!==typeof r||(r=e.elements.popper.querySelector(r),r))&&z(e.elements.popper,r)&&(e.elements.arrow=r)}var ot={name:"arrow",enabled:!0,phase:"main",fn:rt,effect:st,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function at(t){return t.split("-")[1]}var lt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ct(t,e){var n=t.x,i=t.y,r=e.devicePixelRatio||1;return{x:j(n*r)/r||0,y:j(i*r)/r||0}}function ut(t){var e,n=t.popper,a=t.popperRect,l=t.placement,c=t.variation,h=t.offsets,d=t.position,f=t.gpuAcceleration,p=t.adaptive,g=t.roundOffsets,m=t.isFixed,_=h.x,v=void 0===_?0:_,y=h.y,w=void 0===y?0:y,b="function"===typeof g?g({x:v,y:w}):{x:v,y:w};v=b.x,w=b.y;var E=h.hasOwnProperty("x"),x=h.hasOwnProperty("y"),T=o,C=i,S=window;if(p){var I=X(n),R="clientHeight",A="clientWidth";if(I===k(n)&&(I=H(n),"static"!==G(I).position&&"absolute"===d&&(R="scrollHeight",A="scrollWidth")),l===i||(l===o||l===s)&&c===u){C=r;var O=m&&I===S&&S.visualViewport?S.visualViewport.height:I[R];w-=O-a.height,w*=f?1:-1}if(l===o||(l===i||l===r)&&c===u){T=s;var D=m&&I===S&&S.visualViewport?S.visualViewport.width:I[A];v-=D-a.width,v*=f?1:-1}}var L,P=Object.assign({position:d},p&&lt),N=!0===g?ct({x:v,y:w},k(n)):{x:v,y:w};return v=N.x,w=N.y,f?Object.assign({},P,(L={},L[C]=x?"0":"",L[T]=E?"0":"",L.transform=(S.devicePixelRatio||1)<=1?"translate("+v+"px, "+w+"px)":"translate3d("+v+"px, "+w+"px, 0)",L)):Object.assign({},P,(e={},e[C]=x?w+"px":"",e[T]=E?v+"px":"",e.transform="",e))}function ht(t){var e=t.state,n=t.options,i=n.gpuAcceleration,r=void 0===i||i,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,l=void 0===a||a,c={placement:N(e.placement),variation:at(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,ut(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,ut(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var dt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ht,data:{}},ft={passive:!0};function pt(t){var e=t.state,n=t.instance,i=t.options,r=i.scroll,s=void 0===r||r,o=i.resize,a=void 0===o||o,l=k(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach((function(t){t.addEventListener("scroll",n.update,ft)})),a&&l.addEventListener("resize",n.update,ft),function(){s&&c.forEach((function(t){t.removeEventListener("scroll",n.update,ft)})),a&&l.removeEventListener("resize",n.update,ft)}}var gt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:pt,data:{}},mt={left:"right",right:"left",bottom:"top",top:"bottom"};function _t(t){return t.replace(/left|right|bottom|top/g,(function(t){return mt[t]}))}var vt={start:"end",end:"start"};function yt(t){return t.replace(/start|end/g,(function(t){return vt[t]}))}function wt(t){var e=k(t),n=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:n,scrollTop:i}}function bt(t){return B(H(t)).left+wt(t).scrollLeft}function Et(t,e){var n=k(t),i=H(t),r=n.visualViewport,s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;var c=V();(c||!c&&"fixed"===e)&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a+bt(t),y:l}}function xt(t){var e,n=H(t),i=wt(t),r=null==(e=t.ownerDocument)?void 0:e.body,s=M(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=M(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+bt(t),l=-i.scrollTop;return"rtl"===G(r||n).direction&&(a+=M(n.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function Tt(t){var e=G(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Ct(t){return["html","body","#document"].indexOf(I(t))>=0?t.ownerDocument.body:A(t)&&Tt(t)?t:Ct($(t))}function St(t,e){var n;void 0===e&&(e=[]);var i=Ct(t),r=i===(null==(n=t.ownerDocument)?void 0:n.body),s=k(i),o=r?[s].concat(s.visualViewport||[],Tt(i)?i:[]):i,a=e.concat(o);return r?a:a.concat(St($(o)))}function It(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function kt(t,e){var n=B(t,!1,"fixed"===e);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Rt(t,e,n){return e===d?It(Et(t,n)):R(e)?kt(e,n):It(xt(H(t)))}function At(t){var e=St($(t)),n=["absolute","fixed"].indexOf(G(t).position)>=0,i=n&&A(t)?X(t):t;return R(i)?e.filter((function(t){return R(t)&&z(t,i)&&"body"!==I(t)})):[]}function Ot(t,e,n,i){var r="clippingParents"===e?At(t):[].concat(e),s=[].concat(r,[n]),o=s[0],a=s.reduce((function(e,n){var r=Rt(t,n,i);return e.top=M(r.top,e.top),e.right=F(r.right,e.right),e.bottom=F(r.bottom,e.bottom),e.left=M(r.left,e.left),e}),Rt(t,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Dt(t){var e,n=t.reference,a=t.element,l=t.placement,h=l?N(l):null,d=l?at(l):null,f=n.x+n.width/2-a.width/2,p=n.y+n.height/2-a.height/2;switch(h){case i:e={x:f,y:n.y-a.height};break;case r:e={x:f,y:n.y+n.height};break;case s:e={x:n.x+n.width,y:p};break;case o:e={x:n.x-a.width,y:p};break;default:e={x:n.x,y:n.y}}var g=h?Y(h):null;if(null!=g){var m="y"===g?"height":"width";switch(d){case c:e[g]=e[g]-(n[m]/2-a[m]/2);break;case u:e[g]=e[g]+(n[m]/2-a[m]/2);break;default:}}return e}function Lt(t,e){void 0===e&&(e={});var n=e,o=n.placement,a=void 0===o?t.placement:o,c=n.strategy,u=void 0===c?t.strategy:c,g=n.boundary,m=void 0===g?h:g,_=n.rootBoundary,v=void 0===_?d:_,y=n.elementContext,w=void 0===y?f:y,b=n.altBoundary,E=void 0!==b&&b,x=n.padding,T=void 0===x?0:x,C=et("number"!==typeof T?T:nt(T,l)),S=w===f?p:f,I=t.rects.popper,k=t.elements[E?S:w],A=Ot(R(k)?k:k.contextElement||H(t.elements.popper),m,v,u),O=B(t.elements.reference),D=Dt({reference:O,element:I,strategy:"absolute",placement:a}),L=It(Object.assign({},I,D)),P=w===f?L:O,N={top:A.top-P.top+C.top,bottom:P.bottom-A.bottom+C.bottom,left:A.left-P.left+C.left,right:P.right-A.right+C.right},M=t.modifiersData.offset;if(w===f&&M){var F=M[a];Object.keys(N).forEach((function(t){var e=[s,r].indexOf(t)>=0?1:-1,n=[i,r].indexOf(t)>=0?"y":"x";N[t]+=F[n]*e}))}return N}function Pt(t,e){void 0===e&&(e={});var n=e,i=n.placement,r=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?m:c,h=at(i),d=h?a?g:g.filter((function(t){return at(t)===h})):l,f=d.filter((function(t){return u.indexOf(t)>=0}));0===f.length&&(f=d);var p=f.reduce((function(e,n){return e[n]=Lt(t,{placement:n,boundary:r,rootBoundary:s,padding:o})[N(n)],e}),{});return Object.keys(p).sort((function(t,e){return p[t]-p[e]}))}function Nt(t){if(N(t)===a)return[];var e=_t(t);return[yt(t),e,yt(e)]}function Mt(t){var e=t.state,n=t.options,l=t.name;if(!e.modifiersData[l]._skip){for(var u=n.mainAxis,h=void 0===u||u,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,g=n.padding,m=n.boundary,_=n.rootBoundary,v=n.altBoundary,y=n.flipVariations,w=void 0===y||y,b=n.allowedAutoPlacements,E=e.options.placement,x=N(E),T=x===E,C=p||(T||!w?[_t(E)]:Nt(E)),S=[E].concat(C).reduce((function(t,n){return t.concat(N(n)===a?Pt(e,{placement:n,boundary:m,rootBoundary:_,padding:g,flipVariations:w,allowedAutoPlacements:b}):n)}),[]),I=e.rects.reference,k=e.rects.popper,R=new Map,A=!0,O=S[0],D=0;D<S.length;D++){var L=S[D],P=N(L),M=at(L)===c,F=[i,r].indexOf(P)>=0,j=F?"width":"height",U=Lt(e,{placement:L,boundary:m,rootBoundary:_,altBoundary:v,padding:g}),V=F?M?s:o:M?r:i;I[j]>k[j]&&(V=_t(V));var B=_t(V),q=[];if(h&&q.push(U[P]<=0),f&&q.push(U[V]<=0,U[B]<=0),q.every((function(t){return t}))){O=L,A=!1;break}R.set(L,q)}if(A)for(var z=w?3:1,G=function(t){var e=S.find((function(e){var n=R.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return O=e,"break"},W=z;W>0;W--){var H=G(W);if("break"===H)break}e.placement!==O&&(e.modifiersData[l]._skip=!0,e.placement=O,e.reset=!0)}}var Ft={name:"flip",enabled:!0,phase:"main",fn:Mt,requiresIfExists:["offset"],data:{_skip:!1}};function jt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Ut(t){return[i,s,r,o].some((function(e){return t[e]>=0}))}function Vt(t){var e=t.state,n=t.name,i=e.rects.reference,r=e.rects.popper,s=e.modifiersData.preventOverflow,o=Lt(e,{elementContext:"reference"}),a=Lt(e,{altBoundary:!0}),l=jt(o,i),c=jt(a,r,s),u=Ut(l),h=Ut(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var Bt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Vt};function qt(t,e,n){var r=N(t),a=[o,i].indexOf(r)>=0?-1:1,l="function"===typeof n?n(Object.assign({},e,{placement:t})):n,c=l[0],u=l[1];return c=c||0,u=(u||0)*a,[o,s].indexOf(r)>=0?{x:u,y:c}:{x:c,y:u}}function zt(t){var e=t.state,n=t.options,i=t.name,r=n.offset,s=void 0===r?[0,0]:r,o=m.reduce((function(t,n){return t[n]=qt(n,e.rects,s),t}),{}),a=o[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[i]=o}var Gt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:zt};function Wt(t){var e=t.state,n=t.name;e.modifiersData[n]=Dt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Ht={name:"popperOffsets",enabled:!0,phase:"read",fn:Wt,data:{}};function $t(t){return"x"===t?"y":"x"}function Zt(t){var e=t.state,n=t.options,a=t.name,l=n.mainAxis,u=void 0===l||l,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,g=n.altBoundary,m=n.padding,_=n.tether,v=void 0===_||_,y=n.tetherOffset,w=void 0===y?0:y,b=Lt(e,{boundary:f,rootBoundary:p,padding:m,altBoundary:g}),E=N(e.placement),x=at(e.placement),T=!x,C=Y(E),S=$t(C),I=e.modifiersData.popperOffsets,k=e.rects.reference,R=e.rects.popper,A="function"===typeof w?w(Object.assign({},e.rects,{placement:e.placement})):w,O="number"===typeof A?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,L={x:0,y:0};if(I){if(u){var P,j="y"===C?i:o,U="y"===C?r:s,V="y"===C?"height":"width",B=I[C],z=B+b[j],G=B-b[U],W=v?-R[V]/2:0,H=x===c?k[V]:R[V],$=x===c?-R[V]:-k[V],Z=e.elements.arrow,K=v&&Z?q(Z):{width:0,height:0},et=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:tt(),nt=et[j],it=et[U],rt=J(0,k[V],K[V]),st=T?k[V]/2-W-rt-nt-O.mainAxis:H-rt-nt-O.mainAxis,ot=T?-k[V]/2+W+rt+it+O.mainAxis:$+rt+it+O.mainAxis,lt=e.elements.arrow&&X(e.elements.arrow),ct=lt?"y"===C?lt.clientTop||0:lt.clientLeft||0:0,ut=null!=(P=null==D?void 0:D[C])?P:0,ht=B+st-ut-ct,dt=B+ot-ut,ft=J(v?F(z,ht):z,B,v?M(G,dt):G);I[C]=ft,L[C]=ft-B}if(d){var pt,gt="x"===C?i:o,mt="x"===C?r:s,_t=I[S],vt="y"===S?"height":"width",yt=_t+b[gt],wt=_t-b[mt],bt=-1!==[i,o].indexOf(E),Et=null!=(pt=null==D?void 0:D[S])?pt:0,xt=bt?yt:_t-k[vt]-R[vt]-Et+O.altAxis,Tt=bt?_t+k[vt]+R[vt]-Et-O.altAxis:wt,Ct=v&&bt?Q(xt,_t,Tt):J(v?xt:yt,_t,v?Tt:wt);I[S]=Ct,L[S]=Ct-_t}e.modifiersData[a]=L}}var Kt={name:"preventOverflow",enabled:!0,phase:"main",fn:Zt,requiresIfExists:["offset"]};function Xt(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Yt(t){return t!==k(t)&&A(t)?Xt(t):wt(t)}function Jt(t){var e=t.getBoundingClientRect(),n=j(e.width)/t.offsetWidth||1,i=j(e.height)/t.offsetHeight||1;return 1!==n||1!==i}function Qt(t,e,n){void 0===n&&(n=!1);var i=A(e),r=A(e)&&Jt(e),s=H(e),o=B(t,r,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!n)&&(("body"!==I(e)||Tt(s))&&(a=Yt(e)),A(e)?(l=B(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=bt(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function te(t){var e=new Map,n=new Set,i=[];function r(t){n.add(t.name);var s=[].concat(t.requires||[],t.requiresIfExists||[]);s.forEach((function(t){if(!n.has(t)){var i=e.get(t);i&&r(i)}})),i.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||r(t)})),i}function ee(t){var e=te(t);return S.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}function ne(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}function ie(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}var re={placement:"bottom",modifiers:[],strategy:"absolute"};function se(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function oe(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,i=void 0===n?[]:n,r=e.defaultOptions,s=void 0===r?re:r;return function(t,e,n){void 0===n&&(n=s);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},re,s),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},o=[],a=!1,l={state:r,setOptions:function(n){var o="function"===typeof n?n(r.options):n;u(),r.options=Object.assign({},s,r.options,o),r.scrollParents={reference:R(t)?St(t):t.contextElement?St(t.contextElement):[],popper:St(e)};var a=ee(ie([].concat(i,r.options.modifiers)));return r.orderedModifiers=a.filter((function(t){return t.enabled})),c(),l.update()},forceUpdate:function(){if(!a){var t=r.elements,e=t.reference,n=t.popper;if(se(e,n)){r.rects={reference:Qt(e,X(n),"fixed"===r.options.strategy),popper:q(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(t){return r.modifiersData[t.name]=Object.assign({},t.data)}));for(var i=0;i<r.orderedModifiers.length;i++)if(!0!==r.reset){var s=r.orderedModifiers[i],o=s.fn,c=s.options,u=void 0===c?{}:c,h=s.name;"function"===typeof o&&(r=o({state:r,options:u,name:h,instance:l})||r)}else r.reset=!1,i=-1}}},update:ne((function(){return new Promise((function(t){l.forceUpdate(),t(r)}))})),destroy:function(){u(),a=!0}};if(!se(t,e))return l;function c(){r.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,i=void 0===n?{}:n,s=t.effect;if("function"===typeof s){var a=s({state:r,name:e,instance:l,options:i}),c=function(){};o.push(a||c)}}))}function u(){o.forEach((function(t){return t()})),o=[]}return l.setOptions(n).then((function(t){!a&&n.onFirstUpdate&&n.onFirstUpdate(t)})),l}}var ae=oe(),le=[gt,Ht,dt,P,Gt,Ft,Kt,ot,Bt],ce=oe({defaultModifiers:le}),ue=[gt,Ht,dt,P],he=oe({defaultModifiers:ue})},2262:function(t,e,n){"use strict";n.d(e,{$y:function(){return Mt},B:function(){return o},BK:function(){return ne},Bj:function(){return s},EB:function(){return c},Fl:function(){return ae},IU:function(){return Ut},Jd:function(){return k},OT:function(){return Dt},PG:function(){return Nt},SU:function(){return Yt},Um:function(){return Ot},Vh:function(){return re},WL:function(){return Qt},X$:function(){return D},X3:function(){return jt},XI:function(){return $t},Xl:function(){return Vt},YS:function(){return Lt},ZM:function(){return ee},cE:function(){return T},dq:function(){return Wt},iH:function(){return Ht},j:function(){return A},lk:function(){return R},nZ:function(){return l},oR:function(){return Xt},qj:function(){return At},qq:function(){return E},sT:function(){return C},yT:function(){return Ft}});var i=n(3577);let r;class s{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=r,!t&&r&&(this.index=(r.scopes||(r.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=r;try{return r=this,t()}finally{r=e}}else 0}on(){r=this}off(){r=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function o(t){return new s(t)}function a(t,e=r){e&&e.active&&e.effects.push(t)}function l(){return r}function c(t){r&&r.cleanups.push(t)}const u=t=>{const e=new Set(t);return e.w=0,e.n=0,e},h=t=>(t.w&_)>0,d=t=>(t.n&_)>0,f=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=_},p=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];h(r)&&!d(r)?r.delete(t):e[n++]=r,r.w&=~_,r.n&=~_}e.length=n}},g=new WeakMap;let m=0,_=1;const v=30;let y;const w=Symbol(""),b=Symbol("");class E{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=y,e=S;while(t){if(t===this)return;t=t.parent}try{return this.parent=y,y=this,S=!0,_=1<<++m,m<=v?f(this):x(this),this.fn()}finally{m<=v&&p(this),_=1<<--m,y=this.parent,S=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(x(this),this.onStop&&this.onStop(),this.active=!1)}}function x(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function T(t,e){t.effect&&(t=t.effect.fn);const n=new E(t);e&&((0,i.l7)(n,e),e.scope&&a(n,e.scope)),e&&e.lazy||n.run();const r=n.run.bind(n);return r.effect=n,r}function C(t){t.effect.stop()}let S=!0;const I=[];function k(){I.push(S),S=!1}function R(){const t=I.pop();S=void 0===t||t}function A(t,e,n){if(S&&y){let e=g.get(t);e||g.set(t,e=new Map);let i=e.get(n);i||e.set(n,i=u());const r=void 0;O(i,r)}}function O(t,e){let n=!1;m<=v?d(t)||(t.n|=_,n=!h(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function D(t,e,n,r,s,o){const a=g.get(t);if(!a)return;let l=[];if("clear"===e)l=[...a.values()];else if("length"===n&&(0,i.kJ)(t)){const t=Number(r);a.forEach(((e,n)=>{("length"===n||n>=t)&&l.push(e)}))}else switch(void 0!==n&&l.push(a.get(n)),e){case"add":(0,i.kJ)(t)?(0,i.S0)(n)&&l.push(a.get("length")):(l.push(a.get(w)),(0,i._N)(t)&&l.push(a.get(b)));break;case"delete":(0,i.kJ)(t)||(l.push(a.get(w)),(0,i._N)(t)&&l.push(a.get(b)));break;case"set":(0,i._N)(t)&&l.push(a.get(w));break}if(1===l.length)l[0]&&L(l[0]);else{const t=[];for(const e of l)e&&t.push(...e);L(u(t))}}function L(t,e){const n=(0,i.kJ)(t)?t:[...t];for(const i of n)i.computed&&P(i,e);for(const i of n)i.computed||P(i,e)}function P(t,e){(t!==y||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function N(t,e){var n;return null===(n=g.get(t))||void 0===n?void 0:n.get(e)}const M=(0,i.fY)("__proto__,__v_isRef,__isVue"),F=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(i.yk)),j=W(),U=W(!1,!0),V=W(!0),B=W(!0,!0),q=z();function z(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Ut(this);for(let e=0,r=this.length;e<r;e++)A(n,"get",e+"");const i=n[e](...t);return-1===i||!1===i?n[e](...t.map(Ut)):i}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){k();const n=Ut(this)[e].apply(this,t);return R(),n}})),t}function G(t){const e=Ut(this);return A(e,"has",t),e.hasOwnProperty(t)}function W(t=!1,e=!1){return function(n,r,s){if("__v_isReactive"===r)return!t;if("__v_isReadonly"===r)return t;if("__v_isShallow"===r)return e;if("__v_raw"===r&&s===(t?e?It:St:e?Ct:Tt).get(n))return n;const o=(0,i.kJ)(n);if(!t){if(o&&(0,i.RI)(q,r))return Reflect.get(q,r,s);if("hasOwnProperty"===r)return G}const a=Reflect.get(n,r,s);return((0,i.yk)(r)?F.has(r):M(r))?a:(t||A(n,"get",r),e?a:Wt(a)?o&&(0,i.S0)(r)?a:a.value:(0,i.Kn)(a)?t?Dt(a):At(a):a)}}const H=Z(),$=Z(!0);function Z(t=!1){return function(e,n,r,s){let o=e[n];if(Mt(o)&&Wt(o)&&!Wt(r))return!1;if(!t&&(Ft(r)||Mt(r)||(o=Ut(o),r=Ut(r)),!(0,i.kJ)(e)&&Wt(o)&&!Wt(r)))return o.value=r,!0;const a=(0,i.kJ)(e)&&(0,i.S0)(n)?Number(n)<e.length:(0,i.RI)(e,n),l=Reflect.set(e,n,r,s);return e===Ut(s)&&(a?(0,i.aU)(r,o)&&D(e,"set",n,r,o):D(e,"add",n,r)),l}}function K(t,e){const n=(0,i.RI)(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&D(t,"delete",e,void 0,r),s}function X(t,e){const n=Reflect.has(t,e);return(0,i.yk)(e)&&F.has(e)||A(t,"has",e),n}function Y(t){return A(t,"iterate",(0,i.kJ)(t)?"length":w),Reflect.ownKeys(t)}const J={get:j,set:H,deleteProperty:K,has:X,ownKeys:Y},Q={get:V,set(t,e){return!0},deleteProperty(t,e){return!0}},tt=(0,i.l7)({},J,{get:U,set:$}),et=(0,i.l7)({},Q,{get:B}),nt=t=>t,it=t=>Reflect.getPrototypeOf(t);function rt(t,e,n=!1,i=!1){t=t["__v_raw"];const r=Ut(t),s=Ut(e);n||(e!==s&&A(r,"get",e),A(r,"get",s));const{has:o}=it(r),a=i?nt:n?qt:Bt;return o.call(r,e)?a(t.get(e)):o.call(r,s)?a(t.get(s)):void(t!==r&&t.get(e))}function st(t,e=!1){const n=this["__v_raw"],i=Ut(n),r=Ut(t);return e||(t!==r&&A(i,"has",t),A(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ot(t,e=!1){return t=t["__v_raw"],!e&&A(Ut(t),"iterate",w),Reflect.get(t,"size",t)}function at(t){t=Ut(t);const e=Ut(this),n=it(e),i=n.has.call(e,t);return i||(e.add(t),D(e,"add",t,t)),this}function lt(t,e){e=Ut(e);const n=Ut(this),{has:r,get:s}=it(n);let o=r.call(n,t);o||(t=Ut(t),o=r.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,i.aU)(e,a)&&D(n,"set",t,e,a):D(n,"add",t,e),this}function ct(t){const e=Ut(this),{has:n,get:i}=it(e);let r=n.call(e,t);r||(t=Ut(t),r=n.call(e,t));const s=i?i.call(e,t):void 0,o=e.delete(t);return r&&D(e,"delete",t,void 0,s),o}function ut(){const t=Ut(this),e=0!==t.size,n=void 0,i=t.clear();return e&&D(t,"clear",void 0,void 0,n),i}function ht(t,e){return function(n,i){const r=this,s=r["__v_raw"],o=Ut(s),a=e?nt:t?qt:Bt;return!t&&A(o,"iterate",w),s.forEach(((t,e)=>n.call(i,a(t),a(e),r)))}}function dt(t,e,n){return function(...r){const s=this["__v_raw"],o=Ut(s),a=(0,i._N)(o),l="entries"===t||t===Symbol.iterator&&a,c="keys"===t&&a,u=s[t](...r),h=n?nt:e?qt:Bt;return!e&&A(o,"iterate",c?b:w),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:l?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function ft(t){return function(...e){return"delete"!==t&&this}}function pt(){const t={get(t){return rt(this,t)},get size(){return ot(this)},has:st,add:at,set:lt,delete:ct,clear:ut,forEach:ht(!1,!1)},e={get(t){return rt(this,t,!1,!0)},get size(){return ot(this)},has:st,add:at,set:lt,delete:ct,clear:ut,forEach:ht(!1,!0)},n={get(t){return rt(this,t,!0)},get size(){return ot(this,!0)},has(t){return st.call(this,t,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:ht(!0,!1)},i={get(t){return rt(this,t,!0,!0)},get size(){return ot(this,!0)},has(t){return st.call(this,t,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:ht(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach((r=>{t[r]=dt(r,!1,!1),n[r]=dt(r,!0,!1),e[r]=dt(r,!1,!0),i[r]=dt(r,!0,!0)})),[t,n,e,i]}const[gt,mt,_t,vt]=pt();function yt(t,e){const n=e?t?vt:_t:t?mt:gt;return(e,r,s)=>"__v_isReactive"===r?!t:"__v_isReadonly"===r?t:"__v_raw"===r?e:Reflect.get((0,i.RI)(n,r)&&r in e?n:e,r,s)}const wt={get:yt(!1,!1)},bt={get:yt(!1,!0)},Et={get:yt(!0,!1)},xt={get:yt(!0,!0)};const Tt=new WeakMap,Ct=new WeakMap,St=new WeakMap,It=new WeakMap;function kt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:kt((0,i.W7)(t))}function At(t){return Mt(t)?t:Pt(t,!1,J,wt,Tt)}function Ot(t){return Pt(t,!1,tt,bt,Ct)}function Dt(t){return Pt(t,!0,Q,Et,St)}function Lt(t){return Pt(t,!0,et,xt,It)}function Pt(t,e,n,r,s){if(!(0,i.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=Rt(t);if(0===a)return t;const l=new Proxy(t,2===a?r:n);return s.set(t,l),l}function Nt(t){return Mt(t)?Nt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Mt(t){return!(!t||!t["__v_isReadonly"])}function Ft(t){return!(!t||!t["__v_isShallow"])}function jt(t){return Nt(t)||Mt(t)}function Ut(t){const e=t&&t["__v_raw"];return e?Ut(e):t}function Vt(t){return(0,i.Nj)(t,"__v_skip",!0),t}const Bt=t=>(0,i.Kn)(t)?At(t):t,qt=t=>(0,i.Kn)(t)?Dt(t):t;function zt(t){S&&y&&(t=Ut(t),O(t.dep||(t.dep=u())))}function Gt(t,e){t=Ut(t);const n=t.dep;n&&L(n)}function Wt(t){return!(!t||!0!==t.__v_isRef)}function Ht(t){return Zt(t,!1)}function $t(t){return Zt(t,!0)}function Zt(t,e){return Wt(t)?t:new Kt(t,e)}class Kt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Ut(t),this._value=e?t:Bt(t)}get value(){return zt(this),this._value}set value(t){const e=this.__v_isShallow||Ft(t)||Mt(t);t=e?t:Ut(t),(0,i.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Bt(t),Gt(this,t))}}function Xt(t){Gt(t,void 0)}function Yt(t){return Wt(t)?t.value:t}const Jt={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Wt(r)&&!Wt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Qt(t){return Nt(t)?t:new Proxy(t,Jt)}class te{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:e,set:n}=t((()=>zt(this)),(()=>Gt(this)));this._get=e,this._set=n}get value(){return this._get()}set value(t){this._set(t)}}function ee(t){return new te(t)}function ne(t){const e=(0,i.kJ)(t)?new Array(t.length):{};for(const n in t)e[n]=re(t,n);return e}class ie{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return N(Ut(this._object),this._key)}}function re(t,e,n){const i=t[e];return Wt(i)?i:new ie(t,e,n)}var se;class oe{constructor(t,e,n,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[se]=!1,this._dirty=!0,this.effect=new E(t,(()=>{this._dirty||(this._dirty=!0,Gt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const t=Ut(this);return zt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ae(t,e,n=!1){let r,s;const o=(0,i.mf)(t);o?(r=t,s=i.dG):(r=t.get,s=t.set);const a=new oe(r,s,o||!s,n);return a}se="__v_isReadonly"},6252:function(t,e,n){"use strict";n.d(e,{$d:function(){return l},$y:function(){return i.$y},Ah:function(){return Jt},B:function(){return i.B},BK:function(){return i.BK},Bj:function(){return i.Bj},Bz:function(){return ki},C3:function(){return Bn},C_:function(){return r.C_},Cn:function(){return q},EB:function(){return i.EB},Eo:function(){return hn},F4:function(){return Zn},FN:function(){return li},Fl:function(){return Si},G:function(){return Wi},HX:function(){return z},HY:function(){return Cn},Ho:function(){return Kn},IU:function(){return i.IU},JJ:function(){return ut},Jd:function(){return Yt},KU:function(){return a},Ko:function(){return fe},LL:function(){return ce},MW:function(){return Ii},MX:function(){return Bi},Mr:function(){return Vi},Nv:function(){return pe},OT:function(){return i.OT},Ob:function(){return Ft},P$:function(){return Tt},PG:function(){return i.PG},Q2:function(){return ue},Q6:function(){return At},RC:function(){return Lt},Rh:function(){return ft},Rr:function(){return Oi},S3:function(){return c},SU:function(){return i.SU},U2:function(){return St},Uc:function(){return ji},Uk:function(){return Xn},Um:function(){return i.Um},Us:function(){return un},Vh:function(){return i.Vh},WI:function(){return ge},WL:function(){return i.WL},WY:function(){return Ri},Wm:function(){return Hn},Wu:function(){return o},X3:function(){return i.X3},XI:function(){return i.XI},Xl:function(){return i.Xl},Xn:function(){return Kt},Y1:function(){return vi},Y3:function(){return w},Y8:function(){return bt},YP:function(){return mt},YS:function(){return i.YS},Yq:function(){return te},ZK:function(){return s},ZM:function(){return i.ZM},Zq:function(){return Ui},_:function(){return Wn},_A:function(){return r._A},aZ:function(){return Ot},b9:function(){return Ai},bT:function(){return ee},bv:function(){return Zt},cE:function(){return i.cE},d1:function(){return ne},dD:function(){return B},dG:function(){return ni},dl:function(){return Ut},dq:function(){return i.dq},ec:function(){return P},eq:function(){return Hi},f3:function(){return ht},h:function(){return Fi},hR:function(){return r.hR},i8:function(){return zi},iD:function(){return Fn},iH:function(){return i.iH},ic:function(){return Xt},j4:function(){return jn},j5:function(){return r.j5},kC:function(){return r.kC},kq:function(){return Jn},l1:function(){return Di},lA:function(){return Un},lR:function(){return xn},m0:function(){return dt},mW:function(){return O},mv:function(){return Mi},mx:function(){return _e},n4:function(){return tt},nK:function(){return Rt},nQ:function(){return qi},nZ:function(){return i.nZ},oR:function(){return i.oR},of:function(){return yi},p1:function(){return Ni},qG:function(){return kn},qZ:function(){return Nn},qb:function(){return C},qj:function(){return i.qj},qq:function(){return i.qq},ry:function(){return $i},sT:function(){return i.sT},se:function(){return Vt},sv:function(){return In},uE:function(){return Yn},u_:function(){return Pi},up:function(){return ae},vl:function(){return Qt},vs:function(){return r.vs},w5:function(){return G},wF:function(){return $t},wg:function(){return On},wy:function(){return ie},xv:function(){return Sn},yT:function(){return i.yT},yX:function(){return pt},zw:function(){return r.zw}});var i=n(2262),r=n(3577);function s(t,...e){}function o(t,e){}function a(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){c(s,e,n)}return r}function l(t,e,n,i){if((0,r.mf)(t)){const s=a(t,e,n,i);return s&&(0,r.tI)(s)&&s.catch((t=>{c(t,e,n)})),s}const s=[];for(let r=0;r<t.length;r++)s.push(l(t[r],e,n,i));return s}function c(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const r=e.proxy,s=n;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,r,s))return;i=i.parent}const o=e.appContext.config.errorHandler;if(o)return void a(o,null,10,[t,r,s])}u(t,n,r,i)}function u(t,e,n,i=!0){console.error(t)}let h=!1,d=!1;const f=[];let p=0;const g=[];let m=null,_=0;const v=Promise.resolve();let y=null;function w(t){const e=y||v;return t?e.then(this?t.bind(this):t):e}function b(t){let e=p+1,n=f.length;while(e<n){const i=e+n>>>1,r=k(f[i]);r<t?e=i+1:n=i}return e}function E(t){f.length&&f.includes(t,h&&t.allowRecurse?p+1:p)||(null==t.id?f.push(t):f.splice(b(t.id),0,t),x())}function x(){h||d||(d=!0,y=v.then(A))}function T(t){const e=f.indexOf(t);e>p&&f.splice(e,1)}function C(t){(0,r.kJ)(t)?g.push(...t):m&&m.includes(t,t.allowRecurse?_+1:_)||g.push(t),x()}function S(t,e=(h?p+1:0)){for(0;e<f.length;e++){const t=f[e];t&&t.pre&&(f.splice(e,1),e--,t())}}function I(t){if(g.length){const t=[...new Set(g)];if(g.length=0,m)return void m.push(...t);for(m=t,m.sort(((t,e)=>k(t)-k(e))),_=0;_<m.length;_++)m[_]();m=null,_=0}}const k=t=>null==t.id?1/0:t.id,R=(t,e)=>{const n=k(t)-k(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function A(t){d=!1,h=!0,f.sort(R);r.dG;try{for(p=0;p<f.length;p++){const t=f[p];t&&!1!==t.active&&a(t,null,14)}}finally{p=0,f.length=0,I(t),h=!1,y=null,(f.length||g.length)&&A(t)}}new Set;new Map;let O,D=[],L=!1;function P(t,e){var n,i;if(O=t,O)O.enabled=!0,D.forEach((({event:t,args:e})=>O.emit(t,...e))),D=[];else if("undefined"!==typeof window&&window.HTMLElement&&!(null===(i=null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||void 0===i?void 0:i.includes("jsdom"))){const t=e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[];t.push((t=>{P(t,e)})),setTimeout((()=>{O||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,L=!0,D=[])}),3e3)}else L=!0,D=[]}function N(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||r.kT;let s=n;const o=e.startsWith("update:"),a=o&&e.slice(7);if(a&&a in i){const t=`${"modelValue"===a?"model":a}Modifiers`,{number:e,trim:o}=i[t]||r.kT;o&&(s=n.map((t=>(0,r.HD)(t)?t.trim():t))),e&&(s=n.map(r.h5))}let c;let u=i[c=(0,r.hR)(e)]||i[c=(0,r.hR)((0,r._A)(e))];!u&&o&&(u=i[c=(0,r.hR)((0,r.rs)(e))]),u&&l(u,t,6,s);const h=i[c+"Once"];if(h){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,l(h,t,6,s)}}function M(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(void 0!==s)return s;const o=t.emits;let a={},l=!1;if(!(0,r.mf)(t)){const i=t=>{const n=M(t,e,!0);n&&(l=!0,(0,r.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return o||l?((0,r.kJ)(o)?o.forEach((t=>a[t]=null)):(0,r.l7)(a,o),(0,r.Kn)(t)&&i.set(t,a),a):((0,r.Kn)(t)&&i.set(t,null),null)}function F(t,e){return!(!t||!(0,r.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,r.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,r.RI)(t,(0,r.rs)(e))||(0,r.RI)(t,e))}let j=null,U=null;function V(t){const e=j;return j=t,U=t&&t.type.__scopeId||null,e}function B(t){U=t}function q(){U=null}const z=t=>G;function G(t,e=j,n){if(!e)return t;if(t._n)return t;const i=(...n)=>{i._d&&Nn(-1);const r=V(e);let s;try{s=t(...n)}finally{V(r),i._d&&Nn(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function W(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[a],slots:l,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:_}=t;let v,y;const w=V(t);try{if(4&n.shapeFlag){const t=s||i;v=Qn(d.call(t,t,f,o,g,p,m)),y=u}else{const t=e;0,v=Qn(t.length>1?t(o,{attrs:u,slots:l,emit:h}):t(o,null)),y=e.props?u:$(u)}}catch(E){Rn.length=0,c(E,t,1),v=Hn(In)}let b=v;if(y&&!1!==_){const t=Object.keys(y),{shapeFlag:e}=b;t.length&&7&e&&(a&&t.some(r.tR)&&(y=Z(y,a)),b=Kn(b,y))}return n.dirs&&(b=Kn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,V(w),v}function H(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(!Un(i))return;if(i.type!==In||"v-if"===i.children){if(e)return;e=i}}return e}const $=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,r.F7)(n))&&((e||(e={}))[n]=t[n]);return e},Z=(t,e)=>{const n={};for(const i in t)(0,r.tR)(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function K(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&l>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||X(i,o,c):!!o);if(1024&l)return!0;if(16&l)return i?X(i,o,c):!!o;if(8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==i[n]&&!F(c,n))return!0}}return!1}function X(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!F(n,s))return!0}return!1}function Y({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const J=t=>t.__isSuspense,Q={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){null==t?nt(e,n,i,r,s,o,a,l,c):it(t,e,n,i,r,o,a,l,c)},hydrate:st,create:rt,normalize:ot},tt=Q;function et(t,e){const n=t.props&&t.props[e];(0,r.mf)(n)&&n()}function nt(t,e,n,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),d=t.suspense=rt(t,r,i,e,h,n,s,o,a,l);c(null,d.pendingBranch=t.ssContent,h,null,i,d,s,o),d.deps>0?(et(t,"onPending"),et(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),ct(d,t.ssFallback)):d.resolve()}function it(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,f=e.ssFallback,{activeBranch:p,pendingBranch:g,isInFallback:m,isHydrating:_}=h;if(g)h.pendingBranch=d,Vn(d,g)?(l(g,d,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0?h.resolve():m&&(l(p,f,n,i,r,null,s,o,a),ct(h,f))):(h.pendingId++,_?(h.isHydrating=!1,h.activeBranch=g):c(g,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),m?(l(null,d,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0?h.resolve():(l(p,f,n,i,r,null,s,o,a),ct(h,f))):p&&Vn(d,p)?(l(p,d,n,i,r,h,s,o,a),h.resolve(!0)):(l(null,d,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0&&h.resolve()));else if(p&&Vn(d,p))l(p,d,n,i,r,h,s,o,a),ct(h,d);else if(et(e,"onPending"),h.pendingBranch=d,h.pendingId++,l(null,d,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:t,pendingId:e}=h;t>0?setTimeout((()=>{h.pendingId===e&&h.fallback(f)}),t):0===t&&h.fallback(f)}}function rt(t,e,n,i,s,o,a,l,u,h,d=!1){const{p:f,m:p,um:g,n:m,o:{parentNode:_,remove:v}}=h,y=t.props?(0,r.He)(t.props.timeout):void 0;const w={vnode:t,parent:e,parentComponent:n,isSVG:a,container:i,hiddenContainer:s,anchor:o,deps:0,pendingId:0,timeout:"number"===typeof y?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:d,isUnmounted:!1,effects:[],resolve(t=!1){const{vnode:e,activeBranch:n,pendingBranch:i,pendingId:r,effects:s,parentComponent:o,container:a}=w;if(w.isHydrating)w.isHydrating=!1;else if(!t){const t=n&&i.transition&&"out-in"===i.transition.mode;t&&(n.transition.afterLeave=()=>{r===w.pendingId&&p(i,a,e,0)});let{anchor:e}=w;n&&(e=m(n),g(n,o,w,!0)),t||p(i,a,e,0)}ct(w,i),w.pendingBranch=null,w.isInFallback=!1;let l=w.parent,c=!1;while(l){if(l.pendingBranch){l.effects.push(...s),c=!0;break}l=l.parent}c||C(s),w.effects=[],et(e,"onResolve")},fallback(t){if(!w.pendingBranch)return;const{vnode:e,activeBranch:n,parentComponent:i,container:r,isSVG:s}=w;et(e,"onFallback");const o=m(n),a=()=>{w.isInFallback&&(f(null,t,r,o,i,null,s,l,u),ct(w,t))},c=t.transition&&"out-in"===t.transition.mode;c&&(n.transition.afterLeave=a),w.isInFallback=!0,g(n,i,null,!0),c||a()},move(t,e,n){w.activeBranch&&p(w.activeBranch,t,e,n),w.container=t},next(){return w.activeBranch&&m(w.activeBranch)},registerDep(t,e){const n=!!w.pendingBranch;n&&w.deps++;const i=t.vnode.el;t.asyncDep.catch((e=>{c(e,t,0)})).then((r=>{if(t.isUnmounted||w.isUnmounted||w.pendingId!==t.suspenseId)return;t.asyncResolved=!0;const{vnode:s}=t;_i(t,r,!1),i&&(s.el=i);const o=!i&&t.subTree.el;e(t,s,_(i||t.subTree.el),i?null:m(t.subTree),w,a,u),o&&v(o),Y(t,s.el),n&&0===--w.deps&&w.resolve()}))},unmount(t,e){w.isUnmounted=!0,w.activeBranch&&g(w.activeBranch,n,t,e),w.pendingBranch&&g(w.pendingBranch,n,t,e)}};return w}function st(t,e,n,i,r,s,o,a,l){const c=e.suspense=rt(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return 0===c.deps&&c.resolve(),u}function ot(t){const{shapeFlag:e,children:n}=t,i=32&e;t.ssContent=at(i?n.default:n),t.ssFallback=i?at(n.fallback):Hn(In)}function at(t){let e;if((0,r.mf)(t)){const n=Pn&&t._c;n&&(t._d=!1,On()),t=t(),n&&(t._d=!0,e=An,Dn())}if((0,r.kJ)(t)){const e=H(t);0,t=e}return t=Qn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter((e=>e!==t))),t}function lt(t,e){e&&e.pendingBranch?(0,r.kJ)(t)?e.effects.push(...t):e.effects.push(t):C(t)}function ct(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t,r=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=r,Y(i,r))}function ut(t,e){if(ai){let n=ai.provides;const i=ai.parent&&ai.parent.provides;i===n&&(n=ai.provides=Object.create(i)),n[t]=e}else 0}function ht(t,e,n=!1){const i=ai||j;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,r.mf)(e)?e.call(i.proxy):e}else 0}function dt(t,e){return _t(t,null,e)}function ft(t,e){return _t(t,null,{flush:"post"})}function pt(t,e){return _t(t,null,{flush:"sync"})}const gt={};function mt(t,e,n){return _t(t,e,n)}function _t(t,e,{immediate:n,deep:s,flush:o,onTrack:c,onTrigger:u}=r.kT){const h=(0,i.nZ)()===(null===ai||void 0===ai?void 0:ai.scope)?ai:null;let d,f,p=!1,g=!1;if((0,i.dq)(t)?(d=()=>t.value,p=(0,i.yT)(t)):(0,i.PG)(t)?(d=()=>t,s=!0):(0,r.kJ)(t)?(g=!0,p=t.some((t=>(0,i.PG)(t)||(0,i.yT)(t))),d=()=>t.map((t=>(0,i.dq)(t)?t.value:(0,i.PG)(t)?wt(t):(0,r.mf)(t)?a(t,h,2):void 0))):d=(0,r.mf)(t)?e?()=>a(t,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),l(t,h,3,[_])}:r.dG,e&&s){const t=d;d=()=>wt(t())}let m,_=t=>{f=b.onStop=()=>{a(t,h,4)}};if(pi){if(_=r.dG,e?n&&l(e,h,3,[d(),g?[]:void 0,_]):d(),"sync"!==o)return r.dG;{const t=Ui();m=t.__watcherHandles||(t.__watcherHandles=[])}}let v=g?new Array(t.length).fill(gt):gt;const y=()=>{if(b.active)if(e){const t=b.run();(s||p||(g?t.some(((t,e)=>(0,r.aU)(t,v[e]))):(0,r.aU)(t,v)))&&(f&&f(),l(e,h,3,[t,v===gt?void 0:g&&v[0]===gt?[]:v,_]),v=t)}else b.run()};let w;y.allowRecurse=!!e,"sync"===o?w=y:"post"===o?w=()=>cn(y,h&&h.suspense):(y.pre=!0,h&&(y.id=h.uid),w=()=>E(y));const b=new i.qq(d,w);e?n?y():v=b.run():"post"===o?cn(b.run.bind(b),h&&h.suspense):b.run();const x=()=>{b.stop(),h&&h.scope&&(0,r.Od)(h.scope.effects,b)};return m&&m.push(x),x}function vt(t,e,n){const i=this.proxy,s=(0,r.HD)(t)?t.includes(".")?yt(i,t):()=>i[t]:t.bind(i,i);let o;(0,r.mf)(e)?o=e:(o=e.handler,n=e);const a=ai;ci(this);const l=_t(s,o.bind(i),n);return a?ci(a):ui(),l}function yt(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function wt(t,e){if(!(0,r.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,i.dq)(t))wt(t.value,e);else if((0,r.kJ)(t))for(let n=0;n<t.length;n++)wt(t[n],e);else if((0,r.DM)(t)||(0,r._N)(t))t.forEach((t=>{wt(t,e)}));else if((0,r.PO)(t))for(const n in t)wt(t[n],e);return t}function bt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zt((()=>{t.isMounted=!0})),Yt((()=>{t.isUnmounting=!0})),t}const Et=[Function,Array],xt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Et,onEnter:Et,onAfterEnter:Et,onEnterCancelled:Et,onBeforeLeave:Et,onLeave:Et,onAfterLeave:Et,onLeaveCancelled:Et,onBeforeAppear:Et,onAppear:Et,onAfterAppear:Et,onAppearCancelled:Et},setup(t,{slots:e}){const n=li(),r=bt();let s;return()=>{const o=e.default&&At(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==In){0,a=e,t=!0;break}}const l=(0,i.IU)(t),{mode:c}=l;if(r.isLeaving)return It(a);const u=kt(a);if(!u)return It(a);const h=St(u,l,r,n);Rt(u,h);const d=n.subTree,f=d&&kt(d);let p=!1;const{getTransitionKey:g}=u.type;if(g){const t=g();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(f&&f.type!==In&&(!Vn(u,f)||p)){const t=St(f,l,r,n);if(Rt(f,t),"out-in"===c)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,!1!==n.update.active&&n.update()},It(a);"in-out"===c&&u.type!==In&&(t.delayLeave=(t,e,n)=>{const i=Ct(r,f);i[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},Tt=xt;function Ct(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function St(t,e,n,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:w}=e,b=String(t.key),E=Ct(n,t),x=(t,e)=>{t&&l(t,i,9,e)},T=(t,e)=>{const n=e[1];x(t,e),(0,r.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},C={mode:o,persisted:a,beforeEnter(e){let i=c;if(!n.isMounted){if(!s)return;i=_||c}e._leaveCb&&e._leaveCb(!0);const r=E[b];r&&Vn(t,r)&&r.el._leaveCb&&r.el._leaveCb(),x(i,[e])},enter(t){let e=u,i=h,r=d;if(!n.isMounted){if(!s)return;e=v||u,i=y||h,r=w||d}let o=!1;const a=t._enterCb=e=>{o||(o=!0,x(e?r:i,[t]),C.delayedLeave&&C.delayedLeave(),t._enterCb=void 0)};e?T(e,[t,a]):a()},leave(e,i){const r=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return i();x(f,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,i(),x(n?m:g,[e]),e._leaveCb=void 0,E[r]===t&&delete E[r])};E[r]=t,p?T(p,[e,o]):o()},clone(t){return St(t,e,n,i)}};return C}function It(t){if(Nt(t))return t=Kn(t),t.children=null,t}function kt(t){return Nt(t)?t.children?t.children[0]:void 0:t}function Rt(t,e){6&t.shapeFlag&&t.component?Rt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function At(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Cn?(128&o.patchFlag&&r++,i=i.concat(At(o.children,e,a))):(e||o.type!==In)&&i.push(null!=a?Kn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Ot(t){return(0,r.mf)(t)?{setup:t,name:t.name}:t}const Dt=t=>!!t.type.__asyncLoader;function Lt(t){(0,r.mf)(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:o=200,timeout:a,suspensible:l=!0,onError:u}=t;let h,d=null,f=0;const p=()=>(f++,d=null,g()),g=()=>{let t;return d||(t=d=e().catch((t=>{if(t=t instanceof Error?t:new Error(String(t)),u)return new Promise(((e,n)=>{const i=()=>e(p()),r=()=>n(t);u(t,i,r,f+1)}));throw t})).then((e=>t!==d&&d?d:(e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),h=e,e))))};return Ot({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return h},setup(){const t=ai;if(h)return()=>Pt(h,t);const e=e=>{d=null,c(e,t,13,!s)};if(l&&t.suspense||pi)return g().then((e=>()=>Pt(e,t))).catch((t=>(e(t),()=>s?Hn(s,{error:t}):null)));const r=(0,i.iH)(!1),u=(0,i.iH)(),f=(0,i.iH)(!!o);return o&&setTimeout((()=>{f.value=!1}),o),null!=a&&setTimeout((()=>{if(!r.value&&!u.value){const t=new Error(`Async component timed out after ${a}ms.`);e(t),u.value=t}}),a),g().then((()=>{r.value=!0,t.parent&&Nt(t.parent.vnode)&&E(t.parent.update)})).catch((t=>{e(t),u.value=t})),()=>r.value&&h?Pt(h,t):u.value&&s?Hn(s,{error:u.value}):n&&!f.value?Hn(n):void 0}})}function Pt(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=Hn(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Nt=t=>t.type.__isKeepAlive,Mt={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=li(),i=n.ctx;if(!i.renderer)return()=>{const t=e.default&&e.default();return t&&1===t.length?t[0]:t};const s=new Map,o=new Set;let a=null;const l=n.suspense,{renderer:{p:c,m:u,um:h,o:{createElement:d}}}=i,f=d("div");function p(t){zt(t),h(t,n,l,!0)}function g(t){s.forEach(((e,n)=>{const i=Ti(e.type);!i||t&&t(i)||m(n)}))}function m(t){const e=s.get(t);a&&Vn(e,a)?a&&zt(a):p(e),s.delete(t),o.delete(t)}i.activate=(t,e,n,i,s)=>{const o=t.component;u(t,e,n,0,l),c(o.vnode,t,e,n,o,l,i,t.slotScopeIds,s),cn((()=>{o.isDeactivated=!1,o.a&&(0,r.ir)(o.a);const e=t.props&&t.props.onVnodeMounted;e&&ii(e,o.parent,t)}),l)},i.deactivate=t=>{const e=t.component;u(t,f,null,1,l),cn((()=>{e.da&&(0,r.ir)(e.da);const n=t.props&&t.props.onVnodeUnmounted;n&&ii(n,e.parent,t),e.isDeactivated=!0}),l)},mt((()=>[t.include,t.exclude]),(([t,e])=>{t&&g((e=>jt(t,e))),e&&g((t=>!jt(e,t)))}),{flush:"post",deep:!0});let _=null;const v=()=>{null!=_&&s.set(_,Gt(n.subTree))};return Zt(v),Xt(v),Yt((()=>{s.forEach((t=>{const{subTree:e,suspense:i}=n,r=Gt(e);if(t.type!==r.type||t.key!==r.key)p(t);else{zt(r);const t=r.component.da;t&&cn(t,i)}}))})),()=>{if(_=null,!e.default)return null;const n=e.default(),i=n[0];if(n.length>1)return a=null,n;if(!Un(i)||!(4&i.shapeFlag)&&!(128&i.shapeFlag))return a=null,i;let r=Gt(i);const l=r.type,c=Ti(Dt(r)?r.type.__asyncResolved||{}:l),{include:u,exclude:h,max:d}=t;if(u&&(!c||!jt(u,c))||h&&c&&jt(h,c))return a=r,i;const f=null==r.key?l:r.key,p=s.get(f);return r.el&&(r=Kn(r),128&i.shapeFlag&&(i.ssContent=r)),_=f,p?(r.el=p.el,r.component=p.component,r.transition&&Rt(r,r.transition),r.shapeFlag|=512,o.delete(f),o.add(f)):(o.add(f),d&&o.size>parseInt(d,10)&&m(o.values().next().value)),r.shapeFlag|=256,a=r,J(i.type)?i:r}}},Ft=Mt;function jt(t,e){return(0,r.kJ)(t)?t.some((t=>jt(t,e))):(0,r.HD)(t)?t.split(",").includes(e):!!(0,r.Kj)(t)&&t.test(e)}function Ut(t,e){Bt(t,"a",e)}function Vt(t,e){Bt(t,"da",e)}function Bt(t,e,n=ai){const i=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Wt(e,i,n),n){let t=n.parent;while(t&&t.parent)Nt(t.parent.vnode)&&qt(i,e,n,t),t=t.parent}}function qt(t,e,n,i){const s=Wt(e,t,i,!0);Jt((()=>{(0,r.Od)(i[e],s)}),n)}function zt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Gt(t){return 128&t.shapeFlag?t.ssContent:t}function Wt(t,e,n=ai,r=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;(0,i.Jd)(),ci(n);const s=l(e,n,t,r);return ui(),(0,i.lk)(),s});return r?s.unshift(o):s.push(o),o}}const Ht=t=>(e,n=ai)=>(!pi||"sp"===t)&&Wt(t,((...t)=>e(...t)),n),$t=Ht("bm"),Zt=Ht("m"),Kt=Ht("bu"),Xt=Ht("u"),Yt=Ht("bum"),Jt=Ht("um"),Qt=Ht("sp"),te=Ht("rtg"),ee=Ht("rtc");function ne(t,e=ai){Wt("ec",t,e)}function ie(t,e){const n=j;if(null===n)return t;const i=xi(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,l=r.kT]=e[o];t&&((0,r.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&wt(n),s.push({dir:t,instance:i,value:n,oldValue:void 0,arg:a,modifiers:l}))}return t}function re(t,e,n,r){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let u=c.dir[r];u&&((0,i.Jd)(),l(u,n,8,[t.el,c,t,e]),(0,i.lk)())}}const se="components",oe="directives";function ae(t,e){return he(se,t,!0,e)||t}const le=Symbol();function ce(t){return(0,r.HD)(t)?he(se,t,!1)||t:t||le}function ue(t){return he(oe,t)}function he(t,e,n=!0,i=!1){const s=j||ai;if(s){const n=s.type;if(t===se){const t=Ti(n,!1);if(t&&(t===e||t===(0,r._A)(e)||t===(0,r.kC)((0,r._A)(e))))return n}const o=de(s[t]||n[t],e)||de(s.appContext[t],e);return!o&&i?n:o}}function de(t,e){return t&&(t[e]||t[(0,r._A)(e)]||t[(0,r.kC)((0,r._A)(e))])}function fe(t,e,n,i){let s;const o=n&&n[i];if((0,r.kJ)(t)||(0,r.HD)(t)){s=new Array(t.length);for(let n=0,i=t.length;n<i;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,r.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];s[i]=e(t[r],r,i,o&&o[i])}}else s=[];return n&&(n[i]=s),s}function pe(t,e){for(let n=0;n<e.length;n++){const i=e[n];if((0,r.kJ)(i))for(let e=0;e<i.length;e++)t[i[e].name]=i[e].fn;else i&&(t[i.name]=i.key?(...t)=>{const e=i.fn(...t);return e&&(e.key=i.key),e}:i.fn)}return t}function ge(t,e,n={},i,r){if(j.isCE||j.parent&&Dt(j.parent)&&j.parent.isCE)return"default"!==e&&(n.name=e),Hn("slot",n,i&&i());let s=t[e];s&&s._c&&(s._d=!1),On();const o=s&&me(s(n)),a=jn(Cn,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&1===t._?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function me(t){return t.some((t=>!Un(t)||t.type!==In&&!(t.type===Cn&&!me(t.children))))?t:null}function _e(t,e){const n={};for(const i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:(0,r.hR)(i)]=t[i];return n}const ve=t=>t?hi(t)?xi(t)||t.proxy:ve(t.parent):null,ye=(0,r.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ve(t.parent),$root:t=>ve(t.root),$emit:t=>t.emit,$options:t=>ke(t),$forceUpdate:t=>t.f||(t.f=()=>E(t.update)),$nextTick:t=>t.n||(t.n=w.bind(t.proxy)),$watch:t=>vt.bind(t)}),we=(t,e)=>t!==r.kT&&!t.__isScriptSetup&&(0,r.RI)(t,e),be={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:c,appContext:u}=t;let h;if("$"!==e[0]){const i=l[e];if(void 0!==i)switch(i){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(we(s,e))return l[e]=1,s[e];if(o!==r.kT&&(0,r.RI)(o,e))return l[e]=2,o[e];if((h=t.propsOptions[0])&&(0,r.RI)(h,e))return l[e]=3,a[e];if(n!==r.kT&&(0,r.RI)(n,e))return l[e]=4,n[e];xe&&(l[e]=0)}}const d=ye[e];let f,p;return d?("$attrs"===e&&(0,i.j)(t,"get",e),d(t)):(f=c.__cssModules)&&(f=f[e])?f:n!==r.kT&&(0,r.RI)(n,e)?(l[e]=4,n[e]):(p=u.config.globalProperties,(0,r.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;return we(s,e)?(s[e]=n,!0):i!==r.kT&&(0,r.RI)(i,e)?(i[e]=n,!0):!(0,r.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let l;return!!n[a]||t!==r.kT&&(0,r.RI)(t,a)||we(e,a)||(l=o[0])&&(0,r.RI)(l,a)||(0,r.RI)(i,a)||(0,r.RI)(ye,a)||(0,r.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,r.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};const Ee=(0,r.l7)({},be,{get(t,e){if(e!==Symbol.unscopables)return be.get(t,e,t)},has(t,e){const n="_"!==e[0]&&!(0,r.e1)(e);return n}});let xe=!0;function Te(t){const e=ke(t),n=t.proxy,s=t.ctx;xe=!1,e.beforeCreate&&Se(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:_,deactivated:v,beforeDestroy:y,beforeUnmount:w,destroyed:b,unmounted:E,render:x,renderTracked:T,renderTriggered:C,errorCaptured:S,serverPrefetch:I,expose:k,inheritAttrs:R,components:A,directives:O,filters:D}=e,L=null;if(h&&Ce(h,s,L,t.appContext.config.unwrapInjectedRef),l)for(const i in l){const t=l[i];(0,r.mf)(t)&&(s[i]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,r.Kn)(e)&&(t.data=(0,i.qj)(e))}if(xe=!0,a)for(const i in a){const t=a[i],e=(0,r.mf)(t)?t.bind(n,n):(0,r.mf)(t.get)?t.get.bind(n,n):r.dG;0;const o=!(0,r.mf)(t)&&(0,r.mf)(t.set)?t.set.bind(n):r.dG,l=Si({get:e,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:t=>l.value=t})}if(c)for(const i in c)Ie(c[i],s,n,i);if(u){const t=(0,r.mf)(u)?u.call(n):u;Reflect.ownKeys(t).forEach((e=>{ut(e,t[e])}))}function P(t,e){(0,r.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Se(d,t,"c"),P($t,f),P(Zt,p),P(Kt,g),P(Xt,m),P(Ut,_),P(Vt,v),P(ne,S),P(ee,T),P(te,C),P(Yt,w),P(Jt,E),P(Qt,I),(0,r.kJ)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});x&&t.render===r.dG&&(t.render=x),null!=R&&(t.inheritAttrs=R),A&&(t.components=A),O&&(t.directives=O)}function Ce(t,e,n=r.dG,s=!1){(0,r.kJ)(t)&&(t=Le(t));for(const o in t){const n=t[o];let a;a=(0,r.Kn)(n)?"default"in n?ht(n.from||o,n.default,!0):ht(n.from||o):ht(n),(0,i.dq)(a)&&s?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Se(t,e,n){l((0,r.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Ie(t,e,n,i){const s=i.includes(".")?yt(n,i):()=>n[i];if((0,r.HD)(t)){const n=e[t];(0,r.mf)(n)&&mt(s,n)}else if((0,r.mf)(t))mt(s,t.bind(n));else if((0,r.Kn)(t))if((0,r.kJ)(t))t.forEach((t=>Ie(t,e,n,i)));else{const i=(0,r.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,r.mf)(i)&&mt(s,i,t)}else 0}function ke(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,l=o.get(e);let c;return l?c=l:s.length||n||i?(c={},s.length&&s.forEach((t=>Re(c,t,a,!0))),Re(c,e,a)):c=e,(0,r.Kn)(e)&&o.set(e,c),c}function Re(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Re(t,s,n,!0),r&&r.forEach((e=>Re(t,e,n,!0)));for(const o in e)if(i&&"expose"===o);else{const i=Ae[o]||n&&n[o];t[o]=i?i(t[o],e[o]):e[o]}return t}const Ae={data:Oe,props:Ne,emits:Ne,methods:Ne,computed:Ne,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Ne,directives:Ne,watch:Me,provide:Oe,inject:De};function Oe(t,e){return e?t?function(){return(0,r.l7)((0,r.mf)(t)?t.call(this,this):t,(0,r.mf)(e)?e.call(this,this):e)}:e:t}function De(t,e){return Ne(Le(t),Le(e))}function Le(t){if((0,r.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Ne(t,e){return t?(0,r.l7)((0,r.l7)(Object.create(null),t),e):e}function Me(t,e){if(!t)return e;if(!e)return t;const n=(0,r.l7)(Object.create(null),t);for(const i in e)n[i]=Pe(t[i],e[i]);return n}function Fe(t,e,n,s=!1){const o={},a={};(0,r.Nj)(a,qn,1),t.propsDefaults=Object.create(null),Ue(t,e,o,a);for(const i in t.propsOptions[0])i in o||(o[i]=void 0);n?t.props=s?o:(0,i.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function je(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=t,c=(0,i.IU)(o),[u]=t.propsOptions;let h=!1;if(!(s||l>0)||16&l){let i;Ue(t,e,o,a)&&(h=!0);for(const s in c)e&&((0,r.RI)(e,s)||(i=(0,r.rs)(s))!==s&&(0,r.RI)(e,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=Ve(u,c,s,void 0,t,!0)):delete o[s]);if(a!==c)for(const t in a)e&&(0,r.RI)(e,t)||(delete a[t],h=!0)}else if(8&l){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(F(t.emitsOptions,s))continue;const l=e[s];if(u)if((0,r.RI)(a,s))l!==a[s]&&(a[s]=l,h=!0);else{const e=(0,r._A)(s);o[e]=Ve(u,c,e,l,t,!1)}else l!==a[s]&&(a[s]=l,h=!0)}}h&&(0,i.X$)(t,"set","$attrs")}function Ue(t,e,n,s){const[o,a]=t.propsOptions;let l,c=!1;if(e)for(let i in e){if((0,r.Gg)(i))continue;const u=e[i];let h;o&&(0,r.RI)(o,h=(0,r._A)(i))?a&&a.includes(h)?(l||(l={}))[h]=u:n[h]=u:F(t.emitsOptions,i)||i in s&&u===s[i]||(s[i]=u,c=!0)}if(a){const e=(0,i.IU)(n),s=l||r.kT;for(let i=0;i<a.length;i++){const l=a[i];n[l]=Ve(o,e,l,s[l],t,!(0,r.RI)(s,l))}}return c}function Ve(t,e,n,i,s,o){const a=t[n];if(null!=a){const t=(0,r.RI)(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&(0,r.mf)(t)){const{propsDefaults:r}=s;n in r?i=r[n]:(ci(s),i=r[n]=t.call(null,e),ui())}else i=t}a[0]&&(o&&!t?i=!1:!a[1]||""!==i&&i!==(0,r.rs)(n)||(i=!0))}return i}function Be(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},l=[];let c=!1;if(!(0,r.mf)(t)){const i=t=>{c=!0;const[n,i]=Be(t,e,!0);(0,r.l7)(a,n),i&&l.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!o&&!c)return(0,r.Kn)(t)&&i.set(t,r.Z6),r.Z6;if((0,r.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,r._A)(o[h]);qe(t)&&(a[t]=r.kT)}else if(o){0;for(const t in o){const e=(0,r._A)(t);if(qe(e)){const n=o[t],i=a[e]=(0,r.kJ)(n)||(0,r.mf)(n)?{type:n}:Object.assign({},n);if(i){const t=We(Boolean,i.type),n=We(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||(0,r.RI)(i,"default"))&&l.push(e)}}}}const u=[a,l];return(0,r.Kn)(t)&&i.set(t,u),u}function qe(t){return"$"!==t[0]}function ze(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===t?"null":""}function Ge(t,e){return ze(t)===ze(e)}function We(t,e){return(0,r.kJ)(e)?e.findIndex((e=>Ge(e,t))):(0,r.mf)(e)&&Ge(e,t)?0:-1}const He=t=>"_"===t[0]||"$stable"===t,$e=t=>(0,r.kJ)(t)?t.map(Qn):[Qn(t)],Ze=(t,e,n)=>{if(e._n)return e;const i=G(((...t)=>$e(e(...t))),n);return i._c=!1,i},Ke=(t,e,n)=>{const i=t._ctx;for(const s in t){if(He(s))continue;const n=t[s];if((0,r.mf)(n))e[s]=Ze(s,n,i);else if(null!=n){0;const t=$e(n);e[s]=()=>t}}},Xe=(t,e)=>{const n=$e(e);t.slots.default=()=>n},Ye=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,i.IU)(e),(0,r.Nj)(e,"_",n)):Ke(e,t.slots={})}else t.slots={},e&&Xe(t,e);(0,r.Nj)(t.slots,qn,1)},Je=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=r.kT;if(32&i.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,r.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,Ke(e,s)),a=e}else e&&(Xe(t,e),a={default:1});if(o)for(const r in s)He(r)||r in a||delete s[r]};function Qe(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tn=0;function en(t,e){return function(n,i=null){(0,r.mf)(n)||(n=Object.assign({},n)),null==i||(0,r.Kn)(i)||(i=null);const s=Qe(),o=new Set;let a=!1;const l=s.app={_uid:tn++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:zi,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,r.mf)(t.install)?(o.add(t),t.install(l,...e)):(0,r.mf)(t)&&(o.add(t),t(l,...e))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,e){return e?(s.components[t]=e,l):s.components[t]},directive(t,e){return e?(s.directives[t]=e,l):s.directives[t]},mount(r,o,c){if(!a){0;const u=Hn(n,i);return u.appContext=s,o&&e?e(u,r):t(u,r,c),a=!0,l._container=r,r.__vue_app__=l,xi(u.component)||u.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(t,e){return s.provides[t]=e,l}};return l}}function nn(t,e,n,s,o=!1){if((0,r.kJ)(t))return void t.forEach(((t,i)=>nn(t,e&&((0,r.kJ)(e)?e[i]:e),n,s,o)));if(Dt(s)&&!o)return;const l=4&s.shapeFlag?xi(s.component)||s.component.proxy:s.el,c=o?null:l,{i:u,r:h}=t;const d=e&&e.r,f=u.refs===r.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,r.HD)(d)?(f[d]=null,(0,r.RI)(p,d)&&(p[d]=null)):(0,i.dq)(d)&&(d.value=null)),(0,r.mf)(h))a(h,u,12,[c,f]);else{const e=(0,r.HD)(h),s=(0,i.dq)(h);if(e||s){const i=()=>{if(t.f){const n=e?(0,r.RI)(p,h)?p[h]:f[h]:h.value;o?(0,r.kJ)(n)&&(0,r.Od)(n,l):(0,r.kJ)(n)?n.includes(l)||n.push(l):e?(f[h]=[l],(0,r.RI)(p,h)&&(p[h]=f[h])):(h.value=[l],t.k&&(f[t.k]=h.value))}else e?(f[h]=c,(0,r.RI)(p,h)&&(p[h]=c)):s&&(h.value=c,t.k&&(f[t.k]=c))};c?(i.id=-1,cn(i,n)):i()}else 0}}let rn=!1;const sn=t=>/svg/.test(t.namespaceURI)&&"foreignObject"!==t.tagName,on=t=>8===t.nodeType;function an(t){const{mt:e,p:n,o:{patchProp:i,createText:s,nextSibling:o,parentNode:a,remove:l,insert:c,createComment:u}}=t,h=(t,e)=>{if(!e.hasChildNodes())return n(null,t,e),I(),void(e._vnode=t);rn=!1,d(e.firstChild,t,null,null,null),I(),e._vnode=t,rn&&console.error("Hydration completed but contains mismatches.")},d=(n,i,r,l,u,h=!1)=>{const v=on(n)&&"["===n.data,y=()=>m(n,i,r,l,u,v),{type:w,ref:b,shapeFlag:E,patchFlag:x}=i;let T=n.nodeType;i.el=n,-2===x&&(h=!1,i.dynamicChildren=null);let C=null;switch(w){case Sn:3!==T?""===i.children?(c(i.el=s(""),a(n),n),C=n):C=y():(n.data!==i.children&&(rn=!0,n.data=i.children),C=o(n));break;case In:C=8!==T||v?y():o(n);break;case kn:if(v&&(n=o(n),T=n.nodeType),1===T||3===T){C=n;const t=!i.children.length;for(let e=0;e<i.staticCount;e++)t&&(i.children+=1===C.nodeType?C.outerHTML:C.data),e===i.staticCount-1&&(i.anchor=C),C=o(C);return v?o(C):C}y();break;case Cn:C=v?g(n,i,r,l,u,h):y();break;default:if(1&E)C=1!==T||i.type.toLowerCase()!==n.tagName.toLowerCase()?y():f(n,i,r,l,u,h);else if(6&E){i.slotScopeIds=u;const t=a(n);if(e(i,t,null,r,l,sn(t),h),C=v?_(n):o(n),C&&on(C)&&"teleport end"===C.data&&(C=o(C)),Dt(i)){let e;v?(e=Hn(Cn),e.anchor=C?C.previousSibling:t.lastChild):e=3===n.nodeType?Xn(""):Hn("div"),e.el=n,i.component.subTree=e}}else 64&E?C=8!==T?y():i.type.hydrate(n,i,r,l,u,h,t,p):128&E&&(C=i.type.hydrate(n,i,r,l,sn(a(n)),u,h,t,d))}return null!=b&&nn(b,null,l,i),C},f=(t,e,n,s,o,a)=>{a=a||!!e.dynamicChildren;const{type:c,props:u,patchFlag:h,shapeFlag:d,dirs:f}=e,g="input"===c&&f||"option"===c;if(g||-1!==h){if(f&&re(e,null,n,"created"),u)if(g||!a||48&h)for(const e in u)(g&&e.endsWith("value")||(0,r.F7)(e)&&!(0,r.Gg)(e))&&i(t,e,null,u[e],!1,void 0,n);else u.onClick&&i(t,"onClick",null,u.onClick,!1,void 0,n);let c;if((c=u&&u.onVnodeBeforeMount)&&ii(c,n,e),f&&re(e,null,n,"beforeMount"),((c=u&&u.onVnodeMounted)||f)&&lt((()=>{c&&ii(c,n,e),f&&re(e,null,n,"mounted")}),s),16&d&&(!u||!u.innerHTML&&!u.textContent)){let i=p(t.firstChild,e,t,n,s,o,a);while(i){rn=!0;const t=i;i=i.nextSibling,l(t)}}else 8&d&&t.textContent!==e.children&&(rn=!0,t.textContent=e.children)}return t.nextSibling},p=(t,e,i,r,s,o,a)=>{a=a||!!e.dynamicChildren;const l=e.children,c=l.length;for(let u=0;u<c;u++){const e=a?l[u]:l[u]=Qn(l[u]);if(t)t=d(t,e,r,s,o,a);else{if(e.type===Sn&&!e.children)continue;rn=!0,n(null,e,i,null,r,s,sn(i),o)}}return t},g=(t,e,n,i,r,s)=>{const{slotScopeIds:l}=e;l&&(r=r?r.concat(l):l);const h=a(t),d=p(o(t),e,h,n,i,r,s);return d&&on(d)&&"]"===d.data?o(e.anchor=d):(rn=!0,c(e.anchor=u("]"),h,d),d)},m=(t,e,i,r,s,c)=>{if(rn=!0,e.el=null,c){const e=_(t);while(1){const n=o(t);if(!n||n===e)break;l(n)}}const u=o(t),h=a(t);return l(t),n(null,e,h,u,i,r,sn(h),s),u},_=t=>{let e=0;while(t)if(t=o(t),t&&on(t)&&("["===t.data&&e++,"]"===t.data)){if(0===e)return o(t);e--}return t};return[h,d]}function ln(){}const cn=lt;function un(t){return dn(t)}function hn(t){return dn(t,an)}function dn(t,e){ln();const n=(0,r.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=r.dG,insertStaticContent:m}=t,_=(t,e,n,i=null,r=null,s=null,o=!1,a=null,l=!!e.dynamicChildren)=>{if(t===e)return;t&&!Vn(t,e)&&(i=J(t),G(t,r,s,!0),t=null),-2===e.patchFlag&&(l=!1,e.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=e;switch(c){case Sn:v(t,e,n,i);break;case In:y(t,e,n,i);break;case kn:null==t&&w(e,n,i,o);break;case Cn:P(t,e,n,i,r,s,o,a,l);break;default:1&h?C(t,e,n,i,r,s,o,a,l):6&h?N(t,e,n,i,r,s,o,a,l):(64&h||128&h)&&c.process(t,e,n,i,r,s,o,a,l,tt)}null!=u&&r&&nn(u,t&&t.ref,s,e||t,!e)},v=(t,e,n,i)=>{if(null==t)s(e.el=c(e.children),n,i);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},y=(t,e,n,i)=>{null==t?s(e.el=u(e.children||""),n,i):e.el=t.el},w=(t,e,n,i)=>{[t.el,t.anchor]=m(t.children,e,n,i,t.el,t.anchor)},b=({el:t,anchor:e},n,i)=>{let r;while(t&&t!==e)r=p(t),s(t,n,i),t=r;s(e,n,i)},x=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},C=(t,e,n,i,r,s,o,a,l)=>{o=o||"svg"===e.type,null==t?k(e,n,i,r,s,o,a,l):O(t,e,r,s,o,a,l)},k=(t,e,n,i,o,c,u,h)=>{let f,p;const{type:g,props:m,shapeFlag:_,transition:v,dirs:y}=t;if(f=t.el=l(t.type,c,m&&m.is,m),8&_?d(f,t.children):16&_&&A(t.children,f,null,i,o,c&&"foreignObject"!==g,u,h),y&&re(t,null,i,"created"),R(f,t,t.scopeId,u,i),m){for(const e in m)"value"===e||(0,r.Gg)(e)||a(f,e,null,m[e],c,t.children,i,o,X);"value"in m&&a(f,"value",null,m.value),(p=m.onVnodeBeforeMount)&&ii(p,i,t)}y&&re(t,null,i,"beforeMount");const w=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;w&&v.beforeEnter(f),s(f,e,n),((p=m&&m.onVnodeMounted)||w||y)&&cn((()=>{p&&ii(p,i,t),w&&v.enter(f),y&&re(t,null,i,"mounted")}),o)},R=(t,e,n,i,r)=>{if(n&&g(t,n),i)for(let s=0;s<i.length;s++)g(t,i[s]);if(r){let n=r.subTree;if(e===n){const e=r.vnode;R(t,e,e.scopeId,e.slotScopeIds,r.parent)}}},A=(t,e,n,i,r,s,o,a,l=0)=>{for(let c=l;c<t.length;c++){const l=t[c]=a?ti(t[c]):Qn(t[c]);_(null,l,e,n,i,r,s,o,a)}},O=(t,e,n,i,s,o,l)=>{const c=e.el=t.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=e;u|=16&t.patchFlag;const p=t.props||r.kT,g=e.props||r.kT;let m;n&&fn(n,!1),(m=g.onVnodeBeforeUpdate)&&ii(m,n,e,t),f&&re(e,t,n,"beforeUpdate"),n&&fn(n,!0);const _=s&&"foreignObject"!==e.type;if(h?D(t.dynamicChildren,h,c,n,i,_,o):l||V(t,e,c,null,n,i,_,o,!1),u>0){if(16&u)L(c,e,p,g,n,i,s);else if(2&u&&p.class!==g.class&&a(c,"class",null,g.class,s),4&u&&a(c,"style",p.style,g.style,s),8&u){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const o=r[e],l=p[o],u=g[o];u===l&&"value"!==o||a(c,o,l,u,s,t.children,n,i,X)}}1&u&&t.children!==e.children&&d(c,e.children)}else l||null!=h||L(c,e,p,g,n,i,s);((m=g.onVnodeUpdated)||f)&&cn((()=>{m&&ii(m,n,e,t),f&&re(e,t,n,"updated")}),i)},D=(t,e,n,i,r,s,o)=>{for(let a=0;a<e.length;a++){const l=t[a],c=e[a],u=l.el&&(l.type===Cn||!Vn(l,c)||70&l.shapeFlag)?f(l.el):n;_(l,c,u,null,i,r,s,o,!0)}},L=(t,e,n,i,s,o,l)=>{if(n!==i){if(n!==r.kT)for(const c in n)(0,r.Gg)(c)||c in i||a(t,c,n[c],null,l,e.children,s,o,X);for(const c in i){if((0,r.Gg)(c))continue;const u=i[c],h=n[c];u!==h&&"value"!==c&&a(t,c,h,u,l,e.children,s,o,X)}"value"in i&&a(t,"value",n.value,i.value)}},P=(t,e,n,i,r,o,a,l,u)=>{const h=e.el=t?t.el:c(""),d=e.anchor=t?t.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(l=l?l.concat(g):g),null==t?(s(h,n,i),s(d,n,i),A(e.children,n,d,r,o,a,l,u)):f>0&&64&f&&p&&t.dynamicChildren?(D(t.dynamicChildren,p,n,r,o,a,l),(null!=e.key||r&&e===r.subTree)&&pn(t,e,!0)):V(t,e,n,d,r,o,a,l,u)},N=(t,e,n,i,r,s,o,a,l)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?r.ctx.activate(e,n,i,o,l):M(e,n,i,r,s,o,l):F(t,e,l)},M=(t,e,n,i,r,s,o)=>{const a=t.component=oi(t,i,r);if(Nt(t)&&(a.ctx.renderer=tt),gi(a),a.asyncDep){if(r&&r.registerDep(a,j),!t.el){const t=a.subTree=Hn(In);y(null,t,e,n)}}else j(a,t,e,n,r,s,o)},F=(t,e,n)=>{const i=e.component=t.component;if(K(t,e,n)){if(i.asyncDep&&!i.asyncResolved)return void U(i,e,n);i.next=e,T(i.update),i.update()}else e.el=t.el,i.vnode=e},j=(t,e,n,s,o,a,l)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:i,u:s,parent:c,vnode:u}=t,h=n;0,fn(t,!1),n?(n.el=u.el,U(t,n,l)):n=u,i&&(0,r.ir)(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&ii(e,c,n,u),fn(t,!0);const d=W(t);0;const p=t.subTree;t.subTree=d,_(p,d,f(p.el),J(p),t,o,a),n.el=d.el,null===h&&Y(t,d.el),s&&cn(s,o),(e=n.props&&n.props.onVnodeUpdated)&&cn((()=>ii(e,c,n,u)),o)}else{let i;const{el:l,props:c}=e,{bm:u,m:h,parent:d}=t,f=Dt(e);if(fn(t,!1),u&&(0,r.ir)(u),!f&&(i=c&&c.onVnodeBeforeMount)&&ii(i,d,e),fn(t,!0),l&&nt){const n=()=>{t.subTree=W(t),nt(l,t.subTree,t,o,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const i=t.subTree=W(t);0,_(null,i,n,s,t,o,a),e.el=i.el}if(h&&cn(h,o),!f&&(i=c&&c.onVnodeMounted)){const t=e;cn((()=>ii(i,d,t)),o)}(256&e.shapeFlag||d&&Dt(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&cn(t.a,o),t.isMounted=!0,e=n=s=null}},u=t.effect=new i.qq(c,(()=>E(h)),t.scope),h=t.update=()=>u.run();h.id=t.uid,fn(t,!0),h()},U=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,je(t,e.props,r,n),Je(t,e.children,n),(0,i.Jd)(),S(),(0,i.lk)()},V=(t,e,n,i,r,s,o,a,l=!1)=>{const c=t&&t.children,u=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void q(c,h,n,i,r,s,o,a,l);if(256&f)return void B(c,h,n,i,r,s,o,a,l)}8&p?(16&u&&X(c,r,s),h!==c&&d(n,h)):16&u?16&p?q(c,h,n,i,r,s,o,a,l):X(c,r,s,!0):(8&u&&d(n,""),16&p&&A(h,n,i,r,s,o,a,l))},B=(t,e,n,i,s,o,a,l,c)=>{t=t||r.Z6,e=e||r.Z6;const u=t.length,h=e.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const i=e[f]=c?ti(e[f]):Qn(e[f]);_(t[f],i,n,null,s,o,a,l,c)}u>h?X(t,s,o,!0,!1,d):A(e,n,i,s,o,a,l,c,d)},q=(t,e,n,i,s,o,a,l,c)=>{let u=0;const h=e.length;let d=t.length-1,f=h-1;while(u<=d&&u<=f){const i=t[u],r=e[u]=c?ti(e[u]):Qn(e[u]);if(!Vn(i,r))break;_(i,r,n,null,s,o,a,l,c),u++}while(u<=d&&u<=f){const i=t[d],r=e[f]=c?ti(e[f]):Qn(e[f]);if(!Vn(i,r))break;_(i,r,n,null,s,o,a,l,c),d--,f--}if(u>d){if(u<=f){const t=f+1,r=t<h?e[t].el:i;while(u<=f)_(null,e[u]=c?ti(e[u]):Qn(e[u]),n,r,s,o,a,l,c),u++}}else if(u>f)while(u<=d)G(t[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const t=e[u]=c?ti(e[u]):Qn(e[u]);null!=t.key&&m.set(t.key,u)}let v,y=0;const w=f-g+1;let b=!1,E=0;const x=new Array(w);for(u=0;u<w;u++)x[u]=0;for(u=p;u<=d;u++){const i=t[u];if(y>=w){G(i,s,o,!0);continue}let r;if(null!=i.key)r=m.get(i.key);else for(v=g;v<=f;v++)if(0===x[v-g]&&Vn(i,e[v])){r=v;break}void 0===r?G(i,s,o,!0):(x[r-g]=u+1,r>=E?E=r:b=!0,_(i,e[r],n,null,s,o,a,l,c),y++)}const T=b?gn(x):r.Z6;for(v=T.length-1,u=w-1;u>=0;u--){const t=g+u,r=e[t],d=t+1<h?e[t+1].el:i;0===x[u]?_(null,r,n,d,s,o,a,l,c):b&&(v<0||u!==T[v]?z(r,n,d,2):v--)}}},z=(t,e,n,i,r=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=t;if(6&u)return void z(t.component.subTree,e,n,i);if(128&u)return void t.suspense.move(e,n,i);if(64&u)return void a.move(t,e,n,tt);if(a===Cn){s(o,e,n);for(let t=0;t<c.length;t++)z(c[t],e,n,i);return void s(t.anchor,e,n)}if(a===kn)return void b(t,e,n);const h=2!==i&&1&u&&l;if(h)if(0===i)l.beforeEnter(o),s(o,e,n),cn((()=>l.enter(o)),r);else{const{leave:t,delayLeave:i,afterLeave:r}=l,a=()=>s(o,e,n),c=()=>{t(o,(()=>{a(),r&&r()}))};i?i(o,a,c):c()}else s(o,e,n)},G=(t,e,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=t;if(null!=a&&nn(a,null,n,t,!0),256&u)return void e.ctx.deactivate(t);const f=1&u&&d,p=!Dt(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&ii(g,e,t),6&u)Z(t.component,n,i);else{if(128&u)return void t.suspense.unmount(n,i);f&&re(t,null,e,"beforeUnmount"),64&u?t.type.remove(t,e,n,r,tt,i):c&&(s!==Cn||h>0&&64&h)?X(c,e,n,!1,!0):(s===Cn&&384&h||!r&&16&u)&&X(l,e,n),i&&H(t)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&cn((()=>{g&&ii(g,e,t),f&&re(t,null,e,"unmounted")}),n)},H=t=>{const{type:e,el:n,anchor:i,transition:r}=t;if(e===Cn)return void $(n,i);if(e===kn)return void x(t);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&t.shapeFlag&&r&&!r.persisted){const{leave:e,delayLeave:i}=r,o=()=>e(n,s);i?i(t.el,s,o):o()}else s()},$=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Z=(t,e,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:l}=t;i&&(0,r.ir)(i),s.stop(),o&&(o.active=!1,G(a,t,e,n)),l&&cn(l,e),cn((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(t,e,n,i=!1,r=!1,s=0)=>{for(let o=s;o<t.length;o++)G(t[o],e,n,i,r)},J=t=>6&t.shapeFlag?J(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),Q=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):_(e._vnode||null,t,e,null,null,null,n),S(),I(),e._vnode=t},tt={p:_,um:G,m:z,r:H,mt:M,mc:A,pc:V,pbc:D,n:J,o:t};let et,nt;return e&&([et,nt]=e(tt)),{render:Q,hydrate:et,createApp:en(Q,et)}}function fn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pn(t,e,n=!1){const i=t.children,s=e.children;if((0,r.kJ)(i)&&(0,r.kJ)(s))for(let r=0;r<i.length;r++){const t=i[r];let e=s[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[r]=ti(s[r]),e.el=t.el),n||pn(t,e)),e.type===Sn&&(e.el=t.el)}}function gn(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const l=t[i];if(0!==l){if(r=n[n.length-1],t[r]<l){e[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const mn=t=>t.__isTeleport,_n=t=>t&&(t.disabled||""===t.disabled),vn=t=>"undefined"!==typeof SVGElement&&t instanceof SVGElement,yn=(t,e)=>{const n=t&&t.to;if((0,r.HD)(n)){if(e){const t=e(n);return t}return null}return n},wn={__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:g,createComment:m}}=c,_=_n(e.props);let{shapeFlag:v,children:y,dynamicChildren:w}=e;if(null==t){const t=e.el=g(""),c=e.anchor=g("");f(t,n,i),f(c,n,i);const h=e.target=yn(e.props,p),d=e.targetAnchor=g("");h&&(f(d,h),o=o||vn(h));const m=(t,e)=>{16&v&&u(y,t,e,r,s,o,a,l)};_?m(n,c):h&&m(h,d)}else{e.el=t.el;const i=e.anchor=t.anchor,u=e.target=t.target,f=e.targetAnchor=t.targetAnchor,g=_n(t.props),m=g?n:u,v=g?i:f;if(o=o||vn(u),w?(d(t.dynamicChildren,w,m,r,s,o,a),pn(t,e,!0)):l||h(t,e,m,v,r,s,o,a,!1),_)g||bn(e,n,i,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const t=e.target=yn(e.props,p);t&&bn(e,t,null,c,0)}else g&&bn(e,u,f,c,1)}Tn(e)},remove(t,e,n,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&s(u),(o||!_n(d))&&(s(c),16&a))for(let f=0;f<l.length;f++){const t=l[f];r(t,e,n,!0,!!t.dynamicChildren)}},move:bn,hydrate:En};function bn(t,e,n,{o:{insert:i},m:r},s=2){0===s&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=2===s;if(h&&i(o,e,n),(!h||_n(u))&&16&l)for(let d=0;d<c.length;d++)r(c[d],e,n,2);h&&i(a,e,n)}function En(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=yn(e.props,l);if(u){const l=u._lpa||u.firstChild;if(16&e.shapeFlag)if(_n(e.props))e.anchor=c(o(t),e,a(t),n,i,r,s),e.targetAnchor=l;else{e.anchor=o(t);let a=l;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){e.targetAnchor=a,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(l,e,u,n,i,r,s)}Tn(e)}return e.anchor&&o(e.anchor)}const xn=wn;function Tn(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;while(n!==t.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Cn=Symbol(void 0),Sn=Symbol(void 0),In=Symbol(void 0),kn=Symbol(void 0),Rn=[];let An=null;function On(t=!1){Rn.push(An=t?null:[])}function Dn(){Rn.pop(),An=Rn[Rn.length-1]||null}let Ln,Pn=1;function Nn(t){Pn+=t}function Mn(t){return t.dynamicChildren=Pn>0?An||r.Z6:null,Dn(),Pn>0&&An&&An.push(t),t}function Fn(t,e,n,i,r,s){return Mn(Wn(t,e,n,i,r,s,!0))}function jn(t,e,n,i,r){return Mn(Hn(t,e,n,i,r,!0))}function Un(t){return!!t&&!0===t.__v_isVNode}function Vn(t,e){return t.type===e.type&&t.key===e.key}function Bn(t){Ln=t}const qn="__vInternal",zn=({key:t})=>null!=t?t:null,Gn=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,r.HD)(t)||(0,i.dq)(t)||(0,r.mf)(t)?{i:j,r:t,k:e,f:!!n}:t:null;function Wn(t,e=null,n=null,i=0,s=null,o=(t===Cn?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zn(e),ref:e&&Gn(e),scopeId:U,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:j};return l?(ei(c,n),128&o&&t.normalize(c)):n&&(c.shapeFlag|=(0,r.HD)(n)?8:16),Pn>0&&!a&&An&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&An.push(c),c}const Hn=$n;function $n(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==le||(t=In),Un(t)){const i=Kn(t,e,!0);return n&&ei(i,n),Pn>0&&!a&&An&&(6&i.shapeFlag?An[An.indexOf(t)]=i:An.push(i)),i.patchFlag|=-2,i}if(Ci(t)&&(t=t.__vccOpts),e){e=Zn(e);let{class:t,style:n}=e;t&&!(0,r.HD)(t)&&(e.class=(0,r.C_)(t)),(0,r.Kn)(n)&&((0,i.X3)(n)&&!(0,r.kJ)(n)&&(n=(0,r.l7)({},n)),e.style=(0,r.j5)(n))}const l=(0,r.HD)(t)?1:J(t)?128:mn(t)?64:(0,r.Kn)(t)?4:(0,r.mf)(t)?2:0;return Wn(t,e,n,s,o,l,a,!0)}function Zn(t){return t?(0,i.X3)(t)||qn in t?(0,r.l7)({},t):t:null}function Kn(t,e,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=t,l=e?ni(i||{},e):i,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&zn(l),ref:e&&e.ref?n&&s?(0,r.kJ)(s)?s.concat(Gn(e)):[s,Gn(e)]:Gn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Cn?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kn(t.ssContent),ssFallback:t.ssFallback&&Kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c}function Xn(t=" ",e=0){return Hn(Sn,null,t,e)}function Yn(t,e){const n=Hn(kn,null,t);return n.staticCount=e,n}function Jn(t="",e=!1){return e?(On(),jn(In,null,t)):Hn(In,null,t)}function Qn(t){return null==t||"boolean"===typeof t?Hn(In):(0,r.kJ)(t)?Hn(Cn,null,t.slice()):"object"===typeof t?ti(t):Hn(Sn,null,String(t))}function ti(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:Kn(t)}function ei(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if((0,r.kJ)(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),ei(t,n()),n._c&&(n._d=!0)))}{n=32;const i=e._;i||qn in e?3===i&&j&&(1===j.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=j}}else(0,r.mf)(e)?(e={default:e,_ctx:j},n=32):(e=String(e),64&i?(n=16,e=[Xn(e)]):n=8);t.children=e,t.shapeFlag|=n}function ni(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=(0,r.C_)([e.class,i.class]));else if("style"===t)e.style=(0,r.j5)([e.style,i.style]);else if((0,r.F7)(t)){const n=e[t],s=i[t];!s||n===s||(0,r.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=i[t])}return e}function ii(t,e,n,i=null){l(t,e,7,[n,i])}const ri=Qe();let si=0;function oi(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||ri,a={uid:si++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Be(s,o),emitsOptions:M(s,o),emit:null,emitted:null,propsDefaults:r.kT,inheritAttrs:s.inheritAttrs,ctx:r.kT,data:r.kT,props:r.kT,attrs:r.kT,slots:r.kT,refs:r.kT,setupState:r.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=N.bind(null,a),t.ce&&t.ce(a),a}let ai=null;const li=()=>ai||j,ci=t=>{ai=t,t.scope.on()},ui=()=>{ai&&ai.scope.off(),ai=null};function hi(t){return 4&t.vnode.shapeFlag}let di,fi,pi=!1;function gi(t,e=!1){pi=e;const{props:n,children:i}=t.vnode,r=hi(t);Fe(t,n,r,e),Ye(t,i);const s=r?mi(t,e):void 0;return pi=!1,s}function mi(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,i.Xl)(new Proxy(t.ctx,be));const{setup:s}=n;if(s){const n=t.setupContext=s.length>1?Ei(t):null;ci(t),(0,i.Jd)();const o=a(s,t,0,[t.props,n]);if((0,i.lk)(),ui(),(0,r.tI)(o)){if(o.then(ui,ui),e)return o.then((n=>{_i(t,n,e)})).catch((e=>{c(e,t,0)}));t.asyncDep=o}else _i(t,o,e)}else wi(t,e)}function _i(t,e,n){(0,r.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,r.Kn)(e)&&(t.setupState=(0,i.WL)(e)),wi(t,n)}function vi(t){di=t,fi=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,Ee))}}const yi=()=>!di;function wi(t,e,n){const s=t.type;if(!t.render){if(!e&&di&&!s.render){const e=s.template||ke(t).template;if(e){0;const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,r.l7)((0,r.l7)({isCustomElement:n,delimiters:o},i),a);s.render=di(e,l)}}t.render=s.render||r.dG,fi&&fi(t)}ci(t),(0,i.Jd)(),Te(t),(0,i.lk)(),ui()}function bi(t){return new Proxy(t.attrs,{get(e,n){return(0,i.j)(t,"get","$attrs"),e[n]}})}function Ei(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=bi(t))},slots:t.slots,emit:t.emit,expose:e}}function xi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,i.WL)((0,i.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in ye?ye[n](t):void 0},has(t,e){return e in t||e in ye}}))}function Ti(t,e=!0){return(0,r.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Ci(t){return(0,r.mf)(t)&&"__vccOpts"in t}const Si=(t,e)=>(0,i.Fl)(t,e,pi);function Ii(){return null}function ki(){return null}function Ri(t){0}function Ai(t,e){return null}function Oi(){return Li().slots}function Di(){return Li().attrs}function Li(){const t=li();return t.setupContext||(t.setupContext=Ei(t))}function Pi(t,e){const n=(0,r.kJ)(t)?t.reduce(((t,e)=>(t[e]={},t)),{}):t;for(const i in e){const t=n[i];t?(0,r.kJ)(t)||(0,r.mf)(t)?n[i]={type:t,default:e[i]}:t.default=e[i]:null===t&&(n[i]={default:e[i]})}return n}function Ni(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function Mi(t){const e=li();let n=t();return ui(),(0,r.tI)(n)&&(n=n.catch((t=>{throw ci(e),t}))),[n,()=>ci(e)]}function Fi(t,e,n){const i=arguments.length;return 2===i?(0,r.Kn)(e)&&!(0,r.kJ)(e)?Un(e)?Hn(t,null,[e]):Hn(t,e):Hn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Un(n)&&(n=[n]),Hn(t,e,n))}const ji=Symbol(""),Ui=()=>{{const t=ht(ji);return t}};function Vi(){return void 0}function Bi(t,e,n,i){const r=n[i];if(r&&qi(r,t))return r;const s=e();return s.memo=t.slice(),n[i]=s}function qi(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if((0,r.aU)(n[i],e[i]))return!1;return Pn>0&&An&&An.push(t),!0}const zi="3.2.47",Gi={createComponentInstance:oi,setupComponent:gi,renderComponentRoot:W,setCurrentRenderingInstance:V,isVNode:Un,normalizeVNode:Qn},Wi=Gi,Hi=null,$i=null},9963:function(t,e,n){"use strict";n.d(e,{$d:function(){return r.$d},$y:function(){return r.$y},Ah:function(){return P},B:function(){return r.B},BK:function(){return r.BK},Bj:function(){return r.Bj},Bz:function(){return r.Bz},C3:function(){return r.C3},C_:function(){return r.C_},Cn:function(){return r.Cn},D2:function(){return Lt},EB:function(){return r.EB},Eo:function(){return r.Eo},F4:function(){return r.F4},F8:function(){return Pt},FN:function(){return r.FN},Fl:function(){return r.Fl},G:function(){return r.G},G2:function(){return wt},HX:function(){return r.HX},HY:function(){return r.HY},Ho:function(){return r.Ho},IU:function(){return r.IU},JJ:function(){return r.JJ},Jd:function(){return r.Jd},KU:function(){return r.KU},Ko:function(){return r.Ko},LL:function(){return r.LL},MW:function(){return L},MX:function(){return r.MX},Mr:function(){return r.Mr},Nd:function(){return Zt},Nv:function(){return r.Nv},OT:function(){return r.OT},Ob:function(){return r.Ob},P$:function(){return r.P$},PG:function(){return r.PG},Q2:function(){return r.Q2},Q6:function(){return r.Q6},RC:function(){return r.RC},Rh:function(){return r.Rh},Rr:function(){return r.Rr},S3:function(){return r.S3},SK:function(){return r.Ah},SU:function(){return r.SU},U2:function(){return r.U2},Uc:function(){return r.Uc},Uk:function(){return r.Uk},Um:function(){return r.Um},Us:function(){return r.Us},Vh:function(){return r.Vh},W3:function(){return ct},WI:function(){return r.WI},WL:function(){return r.WL},WY:function(){return r.WY},Wm:function(){return r.Wm},Wu:function(){return r.Wu},X3:function(){return r.X3},XI:function(){return r.XI},Xl:function(){return r.Xl},Xn:function(){return r.Xn},Y1:function(){return r.Y1},Y3:function(){return r.Y3},Y8:function(){return r.Y8},YP:function(){return r.YP},YS:function(){return r.YS},YZ:function(){return Ct},Yq:function(){return r.Yq},ZB:function(){return zt},ZK:function(){return r.ZK},ZM:function(){return r.ZM},Zq:function(){return r.Zq},_:function(){return r._},_A:function(){return r._A},a2:function(){return M},aZ:function(){return r.aZ},b9:function(){return r.b9},bM:function(){return bt},bT:function(){return r.bT},bv:function(){return r.bv},cE:function(){return r.cE},d1:function(){return r.d1},dD:function(){return r.dD},dG:function(){return r.dG},dl:function(){return r.dl},dq:function(){return r.dq},e8:function(){return vt},ec:function(){return r.ec},eq:function(){return r.eq},f3:function(){return r.f3},fb:function(){return F},h:function(){return r.h},hR:function(){return r.hR},i8:function(){return r.i8},iD:function(){return r.iD},iH:function(){return r.iH},iM:function(){return Ot},ic:function(){return r.ic},j4:function(){return r.j4},j5:function(){return r.j5},kC:function(){return r.kC},kq:function(){return r.kq},l1:function(){return r.l1},lA:function(){return r.lA},lR:function(){return r.lR},m0:function(){return r.m0},mW:function(){return r.mW},mv:function(){return r.mv},mx:function(){return r.mx},n4:function(){return r.n4},nK:function(){return r.nK},nQ:function(){return r.nQ},nZ:function(){return r.nZ},nr:function(){return _t},oR:function(){return r.oR},of:function(){return r.of},p1:function(){return r.p1},qG:function(){return r.qG},qZ:function(){return r.qZ},qb:function(){return r.qb},qj:function(){return r.qj},qq:function(){return r.qq},ri:function(){return Gt},ry:function(){return r.ry},sT:function(){return r.sT},sY:function(){return qt},se:function(){return r.se},sj:function(){return j},sv:function(){return r.sv},uE:function(){return r.uE},uT:function(){return z},u_:function(){return r.u_},up:function(){return r.up},vl:function(){return r.vl},vr:function(){return Wt},vs:function(){return r.vs},w5:function(){return r.w5},wF:function(){return r.wF},wg:function(){return r.wg},wy:function(){return r.wy},xv:function(){return r.xv},yT:function(){return r.yT},yX:function(){return r.yX},yb:function(){return r.MW},zw:function(){return r.zw}});var i=n(3577),r=n(6252),s=n(2262);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,l=a&&a.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?a.createElementNS(o,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(e.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{l.innerHTML=i?`<svg>${t}</svg>`:t;const r=l.content;if(i){const t=r.firstChild;while(t.firstChild)r.appendChild(t.firstChild);r.removeChild(t)}e.insertBefore(r,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h(t,e,n){const r=t.style,s=(0,i.HD)(n);if(n&&!s){if(e&&!(0,i.HD)(e))for(const t in e)null==n[t]&&f(r,t,"");for(const t in n)f(r,t,n[t])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const d=/\s*!important$/;function f(t,e,n){if((0,i.kJ)(n))n.forEach((n=>f(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=m(t,e);d.test(n)?t.setProperty((0,i.rs)(r),n.replace(d,""),"important"):t[r]=n}}const p=["Webkit","Moz","ms"],g={};function m(t,e){const n=g[e];if(n)return n;let r=(0,i._A)(e);if("filter"!==r&&r in t)return g[e]=r;r=(0,i.kC)(r);for(let i=0;i<p.length;i++){const n=p[i]+r;if(n in t)return g[e]=n}return e}const _="http://www.w3.org/1999/xlink";function v(t,e,n,r,s){if(r&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(_,e.slice(6,e.length)):t.setAttributeNS(_,e,n);else{const r=(0,i.Pq)(e);null==n||r&&!(0,i.yA)(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function y(t,e,n,r,s,o,a){if("innerHTML"===e||"textContent"===e)return r&&a(r,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const i=null==n?"":n;return t.value===i&&"OPTION"!==t.tagName||(t.value=i),void(null==n&&t.removeAttribute(e))}let l=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{t[e]=n}catch(c){0}l&&t.removeAttribute(e)}function w(t,e,n,i){t.addEventListener(e,n,i)}function b(t,e,n,i){t.removeEventListener(e,n,i)}function E(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[n,a]=T(e);if(i){const o=s[e]=k(i,r);w(t,n,o,a)}else o&&(b(t,n,o,a),s[e]=void 0)}}const x=/(?:Once|Passive|Capture)$/;function T(t){let e;if(x.test(t)){let n;e={};while(n=t.match(x))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.rs)(t.slice(2));return[n,e]}let C=0;const S=Promise.resolve(),I=()=>C||(S.then((()=>C=0)),C=Date.now());function k(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.$d)(R(t,n.value),e,5,[t])};return n.value=t,n.attached=I(),n}function R(t,e){if((0,i.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const A=/^on[a-z]/,O=(t,e,n,r,s=!1,o,a,l,c)=>{"class"===e?u(t,r,s):"style"===e?h(t,n,r):(0,i.F7)(e)?(0,i.tR)(e)||E(t,e,n,r,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):D(t,e,r,s))?y(t,e,r,o,a,l,c):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),v(t,e,r,s))};function D(t,e,n,r){return r?"innerHTML"===e||"textContent"===e||!!(e in t&&A.test(e)&&(0,i.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!A.test(e)||!(0,i.HD)(n))&&e in t))))}function L(t,e){const n=(0,r.aZ)(t);class i extends M{constructor(t){super(n,t,e)}}return i.def=n,i}const P=t=>L(t,zt),N="undefined"!==typeof HTMLElement?HTMLElement:class{};class M extends N{constructor(t,e={},n){super(),this._def=t,this._props=e,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,(0,r.Y3)((()=>{this._connected||(qt(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);new MutationObserver((t=>{for(const e of t)this._setAttr(e.attributeName)})).observe(this,{attributes:!0});const t=(t,e=!1)=>{const{props:n,styles:r}=t;let s;if(n&&!(0,i.kJ)(n))for(const o in n){const t=n[o];(t===Number||t&&t.type===Number)&&(o in this._props&&(this._props[o]=(0,i.He)(this._props[o])),(s||(s=Object.create(null)))[(0,i._A)(o)]=!0)}this._numberProps=s,e&&this._resolveProps(t),this._applyStyles(r),this._update()},e=this._def.__asyncLoader;e?e().then((e=>t(e,!0))):t(this._def)}_resolveProps(t){const{props:e}=t,n=(0,i.kJ)(e)?e:Object.keys(e||{});for(const i of Object.keys(this))"_"!==i[0]&&n.includes(i)&&this._setProp(i,this[i],!0,!1);for(const r of n.map(i._A))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(t){this._setProp(r,t)}})}_setAttr(t){let e=this.getAttribute(t);const n=(0,i._A)(t);this._numberProps&&this._numberProps[n]&&(e=(0,i.He)(e)),this._setProp(n,e,!1)}_getProp(t){return this._props[t]}_setProp(t,e,n=!0,r=!0){e!==this._props[t]&&(this._props[t]=e,r&&this._instance&&this._update(),n&&(!0===e?this.setAttribute((0,i.rs)(t),""):"string"===typeof e||"number"===typeof e?this.setAttribute((0,i.rs)(t),e+""):e||this.removeAttribute((0,i.rs)(t))))}_update(){qt(this._createVNode(),this.shadowRoot)}_createVNode(){const t=(0,r.Wm)(this._def,(0,i.l7)({},this._props));return this._instance||(t.ce=t=>{this._instance=t,t.isCE=!0;const e=(t,e)=>{this.dispatchEvent(new CustomEvent(t,{detail:e}))};t.emit=(t,...n)=>{e(t,n),(0,i.rs)(t)!==t&&e((0,i.rs)(t),n)};let n=this;while(n=n&&(n.parentNode||n.host))if(n instanceof M){t.parent=n._instance,t.provides=n._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach((t=>{const e=document.createElement("style");e.textContent=t,this.shadowRoot.appendChild(e)}))}}function F(t="$style"){{const e=(0,r.FN)();if(!e)return i.kT;const n=e.type.__cssModules;if(!n)return i.kT;const s=n[t];return s||i.kT}}function j(t){const e=(0,r.FN)();if(!e)return;const n=e.ut=(n=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach((t=>V(t,n)))},i=()=>{const i=t(e.proxy);U(e.subTree,i),n(i)};(0,r.Rh)(i),(0,r.bv)((()=>{const t=new MutationObserver(i);t.observe(e.subTree.el.parentNode,{childList:!0}),(0,r.Ah)((()=>t.disconnect()))}))}function U(t,e){if(128&t.shapeFlag){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{U(n.activeBranch,e)}))}while(t.component)t=t.component.subTree;if(1&t.shapeFlag&&t.el)V(t.el,e);else if(t.type===r.HY)t.children.forEach((t=>U(t,e)));else if(t.type===r.qG){let{el:n,anchor:i}=t;while(n){if(V(n,e),n===i)break;n=n.nextSibling}}}function V(t,e){if(1===t.nodeType){const n=t.style;for(const t in e)n.setProperty(`--${t}`,e[t])}}const B="transition",q="animation",z=(t,{slots:e})=>(0,r.h)(r.P$,Z(t),e);z.displayName="Transition";const G={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},W=z.props=(0,i.l7)({},r.P$.props,G),H=(t,e=[])=>{(0,i.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},$=t=>!!t&&((0,i.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function Z(t){const e={};for(const i in t)i in G||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=K(s),m=g&&g[0],_=g&&g[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:w,onLeave:b,onLeaveCancelled:E,onBeforeAppear:x=v,onAppear:T=y,onAppearCancelled:C=w}=e,S=(t,e,n)=>{J(t,e?h:l),J(t,e?u:a),n&&n()},I=(t,e)=>{t._isLeaving=!1,J(t,d),J(t,p),J(t,f),e&&e()},k=t=>(e,n)=>{const i=t?T:y,s=()=>S(e,t,n);H(i,[e,s]),Q((()=>{J(e,t?c:o),Y(e,t?h:l),$(i)||et(e,r,m,s)}))};return(0,i.l7)(e,{onBeforeEnter(t){H(v,[t]),Y(t,o),Y(t,a)},onBeforeAppear(t){H(x,[t]),Y(t,c),Y(t,u)},onEnter:k(!1),onAppear:k(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>I(t,e);Y(t,d),st(),Y(t,f),Q((()=>{t._isLeaving&&(J(t,d),Y(t,p),$(b)||et(t,r,_,n))})),H(b,[t,n])},onEnterCancelled(t){S(t,!1),H(w,[t])},onAppearCancelled(t){S(t,!0),H(C,[t])},onLeaveCancelled(t){I(t),H(E,[t])}})}function K(t){if(null==t)return null;if((0,i.Kn)(t))return[X(t.enter),X(t.leave)];{const e=X(t);return[e,e]}}function X(t){const e=(0,i.He)(t);return e}function Y(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function J(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Q(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let tt=0;function et(t,e,n,i){const r=t._endId=++tt,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=nt(t,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),s()},d=e=>{e.target===t&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),t.addEventListener(c,d)}function nt(t,e){const n=window.getComputedStyle(t),i=t=>(n[t]||"").split(", "),r=i(`${B}Delay`),s=i(`${B}Duration`),o=it(r,s),a=i(`${q}Delay`),l=i(`${q}Duration`),c=it(a,l);let u=null,h=0,d=0;e===B?o>0&&(u=B,h=o,d=s.length):e===q?c>0&&(u=q,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?B:q:null,d=u?u===B?s.length:l.length:0);const f=u===B&&/\b(transform|all)(,|$)/.test(i(`${B}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function it(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>rt(e)+rt(t[n]))))}function rt(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function st(){return document.body.offsetHeight}const ot=new WeakMap,at=new WeakMap,lt={name:"TransitionGroup",props:(0,i.l7)({},W,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,r.FN)(),i=(0,r.Y8)();let o,a;return(0,r.ic)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!ft(o[0].el,n.vnode.el,e))return;o.forEach(ut),o.forEach(ht);const i=o.filter(dt);st(),i.forEach((t=>{const n=t.el,i=n.style;Y(n,e),i.transform=i.webkitTransform=i.transitionDuration="";const r=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,J(n,e))};n.addEventListener("transitionend",r)}))})),()=>{const l=(0,s.IU)(t),c=Z(l);let u=l.tag||r.HY;o=a,a=e.default?(0,r.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,r.nK)(e,(0,r.U2)(e,c,i,n))}if(o)for(let t=0;t<o.length;t++){const e=o[t];(0,r.nK)(e,(0,r.U2)(e,c,i,n)),ot.set(e,e.el.getBoundingClientRect())}return(0,r.Wm)(u,null,a)}}};lt.props;const ct=lt;function ut(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function ht(t){at.set(t,t.el.getBoundingClientRect())}function dt(t){const e=ot.get(t),n=at.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${i}px,${r}px)`,e.transitionDuration="0s",t}}function ft(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach((t=>{t.split(/\s+/).forEach((t=>t&&i.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&i.classList.add(t))),i.style.display="none";const r=1===e.nodeType?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=nt(i);return r.removeChild(i),s}const pt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(e)?t=>(0,i.ir)(e,t):e};function gt(t){t.target.composing=!0}function mt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _t={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=pt(s);const o=r||s.props&&"number"===s.props.type;w(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),o&&(r=(0,i.h5)(r)),t._assign(r)})),n&&w(t,"change",(()=>{t.value=t.value.trim()})),e||(w(t,"compositionstart",gt),w(t,"compositionend",mt),w(t,"change",mt))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},o){if(t._assign=pt(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(r&&t.value.trim()===e)return;if((s||"number"===t.type)&&(0,i.h5)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}},vt={deep:!0,created(t,e,n){t._assign=pt(n),w(t,"change",(()=>{const e=t._modelValue,n=xt(t),r=t.checked,s=t._assign;if((0,i.kJ)(e)){const t=(0,i.hq)(e,n),o=-1!==t;if(r&&!o)s(e.concat(n));else if(!r&&o){const n=[...e];n.splice(t,1),s(n)}}else if((0,i.DM)(e)){const t=new Set(e);r?t.add(n):t.delete(n),s(t)}else s(Tt(t,r))}))},mounted:yt,beforeUpdate(t,e,n){t._assign=pt(n),yt(t,e,n)}};function yt(t,{value:e,oldValue:n},r){t._modelValue=e,(0,i.kJ)(e)?t.checked=(0,i.hq)(e,r.props.value)>-1:(0,i.DM)(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=(0,i.WV)(e,Tt(t,!0)))}const wt={created(t,{value:e},n){t.checked=(0,i.WV)(e,n.props.value),t._assign=pt(n),w(t,"change",(()=>{t._assign(xt(t))}))},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=pt(r),e!==n&&(t.checked=(0,i.WV)(e,r.props.value))}},bt={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=(0,i.DM)(e);w(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,i.h5)(xt(t)):xt(t)));t._assign(t.multiple?s?new Set(e):e:e[0])})),t._assign=pt(r)},mounted(t,{value:e}){Et(t,e)},beforeUpdate(t,e,n){t._assign=pt(n)},updated(t,{value:e}){Et(t,e)}};function Et(t,e){const n=t.multiple;if(!n||(0,i.kJ)(e)||(0,i.DM)(e)){for(let r=0,s=t.options.length;r<s;r++){const s=t.options[r],o=xt(s);if(n)(0,i.kJ)(e)?s.selected=(0,i.hq)(e,o)>-1:s.selected=e.has(o);else if((0,i.WV)(xt(s),e))return void(t.selectedIndex!==r&&(t.selectedIndex=r))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function xt(t){return"_value"in t?t._value:t.value}function Tt(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ct={created(t,e,n){It(t,e,n,null,"created")},mounted(t,e,n){It(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){It(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){It(t,e,n,i,"updated")}};function St(t,e){switch(t){case"SELECT":return bt;case"TEXTAREA":return _t;default:switch(e){case"checkbox":return vt;case"radio":return wt;default:return _t}}}function It(t,e,n,i,r){const s=St(t.tagName,n.props&&n.props.type),o=s[r];o&&o(t,e,n,i)}function kt(){_t.getSSRProps=({value:t})=>({value:t}),wt.getSSRProps=({value:t},e)=>{if(e.props&&(0,i.WV)(e.props.value,t))return{checked:!0}},vt.getSSRProps=({value:t},e)=>{if((0,i.kJ)(t)){if(e.props&&(0,i.hq)(t,e.props.value)>-1)return{checked:!0}}else if((0,i.DM)(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},Ct.getSSRProps=(t,e)=>{if("string"!==typeof e.type)return;const n=St(e.type.toUpperCase(),e.props&&e.props.type);return n.getSSRProps?n.getSSRProps(t,e):void 0}}const Rt=["ctrl","shift","alt","meta"],At={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Rt.some((n=>t[`${n}Key`]&&!e.includes(n)))},Ot=(t,e)=>(n,...i)=>{for(let t=0;t<e.length;t++){const i=At[e[t]];if(i&&i(n,e))return}return t(n,...i)},Dt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Lt=(t,e)=>n=>{if(!("key"in n))return;const r=(0,i.rs)(n.key);return e.some((t=>t===r||Dt[t]===r))?t(n):void 0},Pt={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):Nt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!==!n&&(i?e?(i.beforeEnter(t),Nt(t,!0),i.enter(t)):i.leave(t,(()=>{Nt(t,!1)})):Nt(t,e))},beforeUnmount(t,{value:e}){Nt(t,e)}};function Nt(t,e){t.style.display=e?t._vod:"none"}function Mt(){Pt.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Ft=(0,i.l7)({patchProp:O},c);let jt,Ut=!1;function Vt(){return jt||(jt=(0,r.Us)(Ft))}function Bt(){return jt=Ut?jt:(0,r.Eo)(Ft),Ut=!0,jt}const qt=(...t)=>{Vt().render(...t)},zt=(...t)=>{Bt().hydrate(...t)},Gt=(...t)=>{const e=Vt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=Ht(t);if(!r)return;const s=e._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},Wt=(...t)=>{const e=Bt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const e=Ht(t);if(e)return n(e,!0,e instanceof SVGElement)},e};function Ht(t){if((0,i.HD)(t)){const e=document.querySelector(t);return e}return t}let $t=!1;const Zt=()=>{$t||($t=!0,kt(),Mt())}},3577:function(t,e,n){"use strict";function i(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return h},DM:function(){return P},E9:function(){return at},F7:function(){return S},Gg:function(){return $},HD:function(){return j},He:function(){return st},Kj:function(){return M},Kn:function(){return V},NO:function(){return T},Nj:function(){return it},Od:function(){return R},PO:function(){return W},Pq:function(){return p},RI:function(){return O},S0:function(){return H},W7:function(){return G},WV:function(){return _},Z6:function(){return E},_A:function(){return X},_N:function(){return L},aU:function(){return et},dG:function(){return x},e1:function(){return s},fY:function(){return i},h5:function(){return rt},hR:function(){return tt},hq:function(){return v},ir:function(){return nt},j5:function(){return o},kC:function(){return Q},kJ:function(){return D},kT:function(){return b},l7:function(){return k},mf:function(){return F},rs:function(){return J},tI:function(){return B},tR:function(){return I},vs:function(){return d},yA:function(){return g},yk:function(){return U},zw:function(){return y}});const r="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=i(r);function o(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=j(i)?u(i):o(i);if(r)for(const t in r)e[t]=r[t]}return e}return j(t)||V(t)?t:void 0}const a=/;(?![^(]*\))/g,l=/:([^]+)/,c=/\/\*.*?\*\//gs;function u(t){const e={};return t.replace(c,"").split(a).forEach((t=>{if(t){const n=t.split(l);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function h(t){let e="";if(j(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const i=h(t[n]);i&&(e+=i+" ")}else if(V(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function d(t){if(!t)return null;let{class:e,style:n}=t;return e&&!j(e)&&(t.class=h(e)),n&&(t.style=o(n)),t}const f="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",p=i(f);function g(t){return!!t||""===t}function m(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=_(t[i],e[i]);return n}function _(t,e){if(t===e)return!0;let n=N(t),i=N(e);if(n||i)return!(!n||!i)&&t.getTime()===e.getTime();if(n=U(t),i=U(e),n||i)return t===e;if(n=D(t),i=D(e),n||i)return!(!n||!i)&&m(t,e);if(n=V(t),i=V(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const n in t){const i=t.hasOwnProperty(n),r=e.hasOwnProperty(n);if(i&&!r||!i&&r||!_(t[n],e[n]))return!1}}return String(t)===String(e)}function v(t,e){return t.findIndex((t=>_(t,e)))}const y=t=>j(t)?t:null==t?"":D(t)||V(t)&&(t.toString===q||!F(t.toString))?JSON.stringify(t,w,2):String(t),w=(t,e)=>e&&e.__v_isRef?w(t,e.value):L(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:P(e)?{[`Set(${e.size})`]:[...e.values()]}:!V(e)||D(e)||W(e)?e:String(e),b={},E=[],x=()=>{},T=()=>!1,C=/^on[^a-z]/,S=t=>C.test(t),I=t=>t.startsWith("onUpdate:"),k=Object.assign,R=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},A=Object.prototype.hasOwnProperty,O=(t,e)=>A.call(t,e),D=Array.isArray,L=t=>"[object Map]"===z(t),P=t=>"[object Set]"===z(t),N=t=>"[object Date]"===z(t),M=t=>"[object RegExp]"===z(t),F=t=>"function"===typeof t,j=t=>"string"===typeof t,U=t=>"symbol"===typeof t,V=t=>null!==t&&"object"===typeof t,B=t=>V(t)&&F(t.then)&&F(t.catch),q=Object.prototype.toString,z=t=>q.call(t),G=t=>z(t).slice(8,-1),W=t=>"[object Object]"===z(t),H=t=>j(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,$=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Z=t=>{const e=Object.create(null);return n=>{const i=e[n];return i||(e[n]=t(n))}},K=/-(\w)/g,X=Z((t=>t.replace(K,((t,e)=>e?e.toUpperCase():"")))),Y=/\B([A-Z])/g,J=Z((t=>t.replace(Y,"-$1").toLowerCase())),Q=Z((t=>t.charAt(0).toUpperCase()+t.slice(1))),tt=Z((t=>t?`on${Q(t)}`:"")),et=(t,e)=>!Object.is(t,e),nt=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},it=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},rt=t=>{const e=parseFloat(t);return isNaN(e)?t:e},st=t=>{const e=j(t)?Number(t):NaN;return isNaN(e)?t:e};let ot;const at=()=>ot||(ot="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},3734:function(t,e,n){
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(n(6980))})(0,(function(t){"use strict";function e(t){if(t&&t.__esModule)return t;const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t)for(const n in t)if("default"!==n){const i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>t[n]})}return e.default=t,Object.freeze(e)}const n=e(t),i=1e6,r=1e3,s="transitionend",o=t=>null===t||void 0===t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),a=t=>{do{t+=Math.floor(Math.random()*i)}while(document.getElementById(t));return t},l=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},c=t=>{const e=l(t);return e&&document.querySelector(e)?e:null},u=t=>{const e=l(t);return e?document.querySelector(e):null},h=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const i=Number.parseFloat(e),s=Number.parseFloat(n);return i||s?(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*r):0},d=t=>{t.dispatchEvent(new Event(s))},f=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),p=t=>f(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,g=t=>{if(!f(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const e=t.closest("summary");if(e&&e.parentNode!==n)return!1;if(null===e)return!1}return e},m=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),_=t=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?_(t.parentNode):null},v=()=>{},y=t=>{t.offsetHeight},w=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,b=[],E=t=>{"loading"===document.readyState?(b.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of b)t()})),b.push(t)):t()},x=()=>"rtl"===document.documentElement.dir,T=t=>{E((()=>{const e=w();if(e){const n=t.NAME,i=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=i,t.jQueryInterface)}}))},C=t=>{"function"===typeof t&&t()},S=(t,e,n=!0)=>{if(!n)return void C(t);const i=5,r=h(e)+i;let o=!1;const a=({target:n})=>{n===e&&(o=!0,e.removeEventListener(s,a),C(t))};e.addEventListener(s,a),setTimeout((()=>{o||d(e)}),r)},I=(t,e,n,i)=>{const r=t.length;let s=t.indexOf(e);return-1===s?!n&&i?t[r-1]:t[0]:(s+=n?1:-1,i&&(s=(s+r)%r),t[Math.max(0,Math.min(s,r-1))])},k=/[^.]*(?=\..*)\.|.*/,R=/\..*/,A=/::\d+$/,O={};let D=1;const L={mouseenter:"mouseover",mouseleave:"mouseout"},P=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function N(t,e){return e&&`${e}::${D++}`||t.uidEvent||D++}function M(t){const e=N(t);return t.uidEvent=e,O[e]=O[e]||{},O[e]}function F(t,e){return function n(i){return H(i,{delegateTarget:t}),n.oneOff&&W.off(t,i.type,e),e.apply(t,[i])}}function j(t,e,n){return function i(r){const s=t.querySelectorAll(e);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return H(r,{delegateTarget:o}),i.oneOff&&W.off(t,r.type,e,n),n.apply(o,[r])}}function U(t,e,n=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===n))}function V(t,e,n){const i="string"===typeof e,r=i?n:e||n;let s=G(t);return P.has(s)||(s=t),[i,r,s]}function B(t,e,n,i,r){if("string"!==typeof e||!t)return;let[s,o,a]=V(e,n,i);if(e in L){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};o=t(o)}const l=M(t),c=l[a]||(l[a]={}),u=U(c,o,s?n:null);if(u)return void(u.oneOff=u.oneOff&&r);const h=N(o,e.replace(k,"")),d=s?j(t,n,o):F(t,o);d.delegationSelector=s?n:null,d.callable=o,d.oneOff=r,d.uidEvent=h,c[h]=d,t.addEventListener(a,d,s)}function q(t,e,n,i,r){const s=U(e[n],i,r);s&&(t.removeEventListener(n,s,Boolean(r)),delete e[n][s.uidEvent])}function z(t,e,n,i){const r=e[n]||{};for(const s of Object.keys(r))if(s.includes(i)){const i=r[s];q(t,e,n,i.callable,i.delegationSelector)}}function G(t){return t=t.replace(R,""),L[t]||t}const W={on(t,e,n,i){B(t,e,n,i,!1)},one(t,e,n,i){B(t,e,n,i,!0)},off(t,e,n,i){if("string"!==typeof e||!t)return;const[r,s,o]=V(e,n,i),a=o!==e,l=M(t),c=l[o]||{},u=e.startsWith(".");if("undefined"===typeof s){if(u)for(const n of Object.keys(l))z(t,l,n,e.slice(1));for(const n of Object.keys(c)){const i=n.replace(A,"");if(!a||e.includes(i)){const e=c[n];q(t,l,o,e.callable,e.delegationSelector)}}}else{if(!Object.keys(c).length)return;q(t,l,o,s,r?n:null)}},trigger(t,e,n){if("string"!==typeof e||!t)return null;const i=w(),r=G(e),s=e!==r;let o=null,a=!0,l=!0,c=!1;s&&i&&(o=i.Event(e,n),i(t).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());let u=new Event(e,{bubbles:a,cancelable:!0});return u=H(u,n),c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function H(t,e){for(const[i,r]of Object.entries(e||{}))try{t[i]=r}catch(n){Object.defineProperty(t,i,{configurable:!0,get(){return r}})}return t}const $=new Map,Z={set(t,e,n){$.has(t)||$.set(t,new Map);const i=$.get(t);i.has(e)||0===i.size?i.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get(t,e){return $.has(t)&&$.get(t).get(e)||null},remove(t,e){if(!$.has(t))return;const n=$.get(t);n.delete(e),0===n.size&&$.delete(t)}};function K(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!==typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function X(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const Y={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${X(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${X(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const i of n){let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),e[n]=K(t.dataset[i])}return e},getDataAttribute(t,e){return K(t.getAttribute(`data-bs-${X(e)}`))}};class J{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const n=f(e)?Y.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"===typeof n?n:{},...f(e)?Y.getDataAttributes(e):{},..."object"===typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const n of Object.keys(e)){const i=e[n],r=t[n],s=f(r)?"element":o(r);if(!new RegExp(i).test(s))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${s}" but expected type "${i}".`)}}}const Q="5.2.3";class tt extends J{constructor(t,e){super(),t=p(t),t&&(this._element=t,this._config=this._getConfig(e),Z.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Z.remove(this._element,this.constructor.DATA_KEY),W.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,n=!0){S(t,e,n)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Z.get(p(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"===typeof e?e:null)}static get VERSION(){return Q}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const et=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,i=t.NAME;W.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),m(this))return;const r=u(this)||this.closest(`.${i}`),s=t.getOrCreateInstance(r);s[e]()}))},nt="alert",it="bs.alert",rt=`.${it}`,st=`close${rt}`,ot=`closed${rt}`,at="fade",lt="show";class ct extends tt{static get NAME(){return nt}close(){const t=W.trigger(this._element,st);if(t.defaultPrevented)return;this._element.classList.remove(lt);const e=this._element.classList.contains(at);this._queueCallback((()=>this._destroyElement()),this._element,e)}_destroyElement(){this._element.remove(),W.trigger(this._element,ot),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=ct.getOrCreateInstance(this);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}et(ct,"close"),T(ct);const ut="button",ht="bs.button",dt=`.${ht}`,ft=".data-api",pt="active",gt='[data-bs-toggle="button"]',mt=`click${dt}${ft}`;class _t extends tt{static get NAME(){return ut}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(pt))}static jQueryInterface(t){return this.each((function(){const e=_t.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}W.on(document,mt,gt,(t=>{t.preventDefault();const e=t.target.closest(gt),n=_t.getOrCreateInstance(e);n.toggle()})),T(_t);const vt={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter((t=>t.matches(e)))},parents(t,e){const n=[];let i=t.parentNode.closest(e);while(i)n.push(i),i=i.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;while(n){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;while(n){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!m(t)&&g(t)))}},yt="swipe",wt=".bs.swipe",bt=`touchstart${wt}`,Et=`touchmove${wt}`,xt=`touchend${wt}`,Tt=`pointerdown${wt}`,Ct=`pointerup${wt}`,St="touch",It="pen",kt="pointer-event",Rt=40,At={endCallback:null,leftCallback:null,rightCallback:null},Ot={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Dt extends J{constructor(t,e){super(),this._element=t,t&&Dt.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return At}static get DefaultType(){return Ot}static get NAME(){return yt}dispose(){W.off(this._element,wt)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),C(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Rt)return;const e=t/this._deltaX;this._deltaX=0,e&&C(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(W.on(this._element,Tt,(t=>this._start(t))),W.on(this._element,Ct,(t=>this._end(t))),this._element.classList.add(kt)):(W.on(this._element,bt,(t=>this._start(t))),W.on(this._element,Et,(t=>this._move(t))),W.on(this._element,xt,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===It||t.pointerType===St)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Lt="carousel",Pt="bs.carousel",Nt=`.${Pt}`,Mt=".data-api",Ft="ArrowLeft",jt="ArrowRight",Ut=500,Vt="next",Bt="prev",qt="left",zt="right",Gt=`slide${Nt}`,Wt=`slid${Nt}`,Ht=`keydown${Nt}`,$t=`mouseenter${Nt}`,Zt=`mouseleave${Nt}`,Kt=`dragstart${Nt}`,Xt=`load${Nt}${Mt}`,Yt=`click${Nt}${Mt}`,Jt="carousel",Qt="active",te="slide",ee="carousel-item-end",ne="carousel-item-start",ie="carousel-item-next",re="carousel-item-prev",se=".active",oe=".carousel-item",ae=se+oe,le=".carousel-item img",ce=".carousel-indicators",ue="[data-bs-slide], [data-bs-slide-to]",he='[data-bs-ride="carousel"]',de={[Ft]:zt,[jt]:qt},fe={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},pe={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ge extends tt{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=vt.findOne(ce,this._element),this._addEventListeners(),this._config.ride===Jt&&this.cycle()}static get Default(){return fe}static get DefaultType(){return pe}static get NAME(){return Lt}next(){this._slide(Vt)}nextWhenVisible(){!document.hidden&&g(this._element)&&this.next()}prev(){this._slide(Bt)}pause(){this._isSliding&&d(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?W.one(this._element,Wt,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void W.one(this._element,Wt,(()=>this.to(t)));const n=this._getItemIndex(this._getActive());if(n===t)return;const i=t>n?Vt:Bt;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&W.on(this._element,Ht,(t=>this._keydown(t))),"hover"===this._config.pause&&(W.on(this._element,$t,(()=>this.pause())),W.on(this._element,Zt,(()=>this._maybeEnableCycle()))),this._config.touch&&Dt.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of vt.find(le,this._element))W.on(n,Kt,(t=>t.preventDefault()));const t=()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),Ut+this._config.interval))},e={leftCallback:()=>this._slide(this._directionToOrder(qt)),rightCallback:()=>this._slide(this._directionToOrder(zt)),endCallback:t};this._swipeHelper=new Dt(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=de[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=vt.findOne(se,this._indicatorsElement);e.classList.remove(Qt),e.removeAttribute("aria-current");const n=vt.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);n&&(n.classList.add(Qt),n.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const n=this._getActive(),i=t===Vt,r=e||I(this._getItems(),n,i,this._config.wrap);if(r===n)return;const s=this._getItemIndex(r),o=e=>W.trigger(this._element,e,{relatedTarget:r,direction:this._orderToDirection(t),from:this._getItemIndex(n),to:s}),a=o(Gt);if(a.defaultPrevented)return;if(!n||!r)return;const l=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=r;const c=i?ne:ee,u=i?ie:re;r.classList.add(u),y(r),n.classList.add(c),r.classList.add(c);const h=()=>{r.classList.remove(c,u),r.classList.add(Qt),n.classList.remove(Qt,u,c),this._isSliding=!1,o(Wt)};this._queueCallback(h,n,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains(te)}_getActive(){return vt.findOne(ae,this._element)}_getItems(){return vt.find(oe,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return x()?t===qt?Bt:Vt:t===qt?Vt:Bt}_orderToDirection(t){return x()?t===Bt?qt:zt:t===Bt?zt:qt}static jQueryInterface(t){return this.each((function(){const e=ge.getOrCreateInstance(this,t);if("number"!==typeof t){if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}W.on(document,Yt,ue,(function(t){const e=u(this);if(!e||!e.classList.contains(Jt))return;t.preventDefault();const n=ge.getOrCreateInstance(e),i=this.getAttribute("data-bs-slide-to");return i?(n.to(i),void n._maybeEnableCycle()):"next"===Y.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),W.on(window,Xt,(()=>{const t=vt.find(he);for(const e of t)ge.getOrCreateInstance(e)})),T(ge);const me="collapse",_e="bs.collapse",ve=`.${_e}`,ye=".data-api",we=`show${ve}`,be=`shown${ve}`,Ee=`hide${ve}`,xe=`hidden${ve}`,Te=`click${ve}${ye}`,Ce="show",Se="collapse",Ie="collapsing",ke="collapsed",Re=`:scope .${Se} .${Se}`,Ae="collapse-horizontal",Oe="width",De="height",Le=".collapse.show, .collapse.collapsing",Pe='[data-bs-toggle="collapse"]',Ne={parent:null,toggle:!0},Me={parent:"(null|element)",toggle:"boolean"};class Fe extends tt{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=vt.find(Pe);for(const i of n){const t=c(i),e=vt.find(t).filter((t=>t===this._element));null!==t&&e.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ne}static get DefaultType(){return Me}static get NAME(){return me}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(Le).filter((t=>t!==this._element)).map((t=>Fe.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;const e=W.trigger(this._element,we);if(e.defaultPrevented)return;for(const o of t)o.hide();const n=this._getDimension();this._element.classList.remove(Se),this._element.classList.add(Ie),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Ie),this._element.classList.add(Se,Ce),this._element.style[n]="",W.trigger(this._element,be)},r=n[0].toUpperCase()+n.slice(1),s=`scroll${r}`;this._queueCallback(i,this._element,!0),this._element.style[n]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const t=W.trigger(this._element,Ee);if(t.defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,y(this._element),this._element.classList.add(Ie),this._element.classList.remove(Se,Ce);for(const i of this._triggerArray){const t=u(i);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(Ie),this._element.classList.add(Se),W.trigger(this._element,xe)};this._element.style[e]="",this._queueCallback(n,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Ce)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=p(t.parent),t}_getDimension(){return this._element.classList.contains(Ae)?Oe:De}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Pe);for(const e of t){const t=u(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=vt.find(Re,this._config.parent);return vt.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const n of t)n.classList.toggle(ke,!e),n.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"===typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const n=Fe.getOrCreateInstance(this,e);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}))}}W.on(document,Te,Pe,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=c(this),n=vt.find(e);for(const i of n)Fe.getOrCreateInstance(i,{toggle:!1}).toggle()})),T(Fe);const je="dropdown",Ue="bs.dropdown",Ve=`.${Ue}`,Be=".data-api",qe="Escape",ze="Tab",Ge="ArrowUp",We="ArrowDown",He=2,$e=`hide${Ve}`,Ze=`hidden${Ve}`,Ke=`show${Ve}`,Xe=`shown${Ve}`,Ye=`click${Ve}${Be}`,Je=`keydown${Ve}${Be}`,Qe=`keyup${Ve}${Be}`,tn="show",en="dropup",nn="dropend",rn="dropstart",sn="dropup-center",on="dropdown-center",an='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ln=`${an}.${tn}`,cn=".dropdown-menu",un=".navbar",hn=".navbar-nav",dn=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",fn=x()?"top-end":"top-start",pn=x()?"top-start":"top-end",gn=x()?"bottom-end":"bottom-start",mn=x()?"bottom-start":"bottom-end",_n=x()?"left-start":"right-start",vn=x()?"right-start":"left-start",yn="top",wn="bottom",bn={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},En={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class xn extends tt{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=vt.next(this._element,cn)[0]||vt.prev(this._element,cn)[0]||vt.findOne(cn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return bn}static get DefaultType(){return En}static get NAME(){return je}toggle(){return this._isShown()?this.hide():this.show()}show(){if(m(this._element)||this._isShown())return;const t={relatedTarget:this._element},e=W.trigger(this._element,Ke,t);if(!e.defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(hn))for(const t of[].concat(...document.body.children))W.on(t,"mouseover",v);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(tn),this._element.classList.add(tn),W.trigger(this._element,Xe,t)}}hide(){if(m(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){const e=W.trigger(this._element,$e,t);if(!e.defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))W.off(t,"mouseover",v);this._popper&&this._popper.destroy(),this._menu.classList.remove(tn),this._element.classList.remove(tn),this._element.setAttribute("aria-expanded","false"),Y.removeDataAttribute(this._menu,"popper"),W.trigger(this._element,Ze,t)}}_getConfig(t){if(t=super._getConfig(t),"object"===typeof t.reference&&!f(t.reference)&&"function"!==typeof t.reference.getBoundingClientRect)throw new TypeError(`${je.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if("undefined"===typeof n)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:f(this._config.reference)?t=p(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=n.createPopper(t,this._menu,e)}_isShown(){return this._menu.classList.contains(tn)}_getPlacement(){const t=this._parent;if(t.classList.contains(nn))return _n;if(t.classList.contains(rn))return vn;if(t.classList.contains(sn))return yn;if(t.classList.contains(on))return wn;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains(en)?e?pn:fn:e?mn:gn}_detectNavbar(){return null!==this._element.closest(un)}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"===typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(Y.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const n=vt.find(dn,this._menu).filter((t=>g(t)));n.length&&I(n,e,t===We,!n.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=xn.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(t.button===He||"keyup"===t.type&&t.key!==ze)return;const e=vt.find(ln);for(const n of e){const e=xn.getInstance(n);if(!e||!1===e._config.autoClose)continue;const i=t.composedPath(),r=i.includes(e._menu);if(i.includes(e._element)||"inside"===e._config.autoClose&&!r||"outside"===e._config.autoClose&&r)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&t.key===ze||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const s={relatedTarget:e._element};"click"===t.type&&(s.clickEvent=t),e._completeHide(s)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),n=t.key===qe,i=[Ge,We].includes(t.key);if(!i&&!n)return;if(e&&!n)return;t.preventDefault();const r=this.matches(an)?this:vt.prev(this,an)[0]||vt.next(this,an)[0]||vt.findOne(an,t.delegateTarget.parentNode),s=xn.getOrCreateInstance(r);if(i)return t.stopPropagation(),s.show(),void s._selectMenuItem(t);s._isShown()&&(t.stopPropagation(),s.hide(),r.focus())}}W.on(document,Je,an,xn.dataApiKeydownHandler),W.on(document,Je,cn,xn.dataApiKeydownHandler),W.on(document,Ye,xn.clearMenus),W.on(document,Qe,xn.clearMenus),W.on(document,Ye,an,(function(t){t.preventDefault(),xn.getOrCreateInstance(this).toggle()})),T(xn);const Tn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Cn=".sticky-top",Sn="padding-right",In="margin-right";class kn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Sn,(e=>e+t)),this._setElementAttributes(Tn,Sn,(e=>e+t)),this._setElementAttributes(Cn,In,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Sn),this._resetElementAttributes(Tn,Sn),this._resetElementAttributes(Cn,In)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const i=this.getWidth(),r=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+i)return;this._saveInitialAttribute(t,e);const r=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${n(Number.parseFloat(r))}px`)};this._applyManipulationCallback(t,r)}_saveInitialAttribute(t,e){const n=t.style.getPropertyValue(e);n&&Y.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=t=>{const n=Y.getDataAttribute(t,e);null!==n?(Y.removeDataAttribute(t,e),t.style.setProperty(e,n)):t.style.removeProperty(e)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){if(f(t))e(t);else for(const n of vt.find(t,this._element))e(n)}}const Rn="backdrop",An="fade",On="show",Dn=`mousedown.bs.${Rn}`,Ln={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Pn={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Nn extends J{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ln}static get DefaultType(){return Pn}static get NAME(){return Rn}show(t){if(!this._config.isVisible)return void C(t);this._append();const e=this._getElement();this._config.isAnimated&&y(e),e.classList.add(On),this._emulateAnimation((()=>{C(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(On),this._emulateAnimation((()=>{this.dispose(),C(t)}))):C(t)}dispose(){this._isAppended&&(W.off(this._element,Dn),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(An),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=p(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),W.on(t,Dn,(()=>{C(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){S(t,this._getElement(),this._config.isAnimated)}}const Mn="focustrap",Fn="bs.focustrap",jn=`.${Fn}`,Un=`focusin${jn}`,Vn=`keydown.tab${jn}`,Bn="Tab",qn="forward",zn="backward",Gn={autofocus:!0,trapElement:null},Wn={autofocus:"boolean",trapElement:"element"};class Hn extends J{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Gn}static get DefaultType(){return Wn}static get NAME(){return Mn}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),W.off(document,jn),W.on(document,Un,(t=>this._handleFocusin(t))),W.on(document,Vn,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,W.off(document,jn))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const n=vt.focusableChildren(e);0===n.length?e.focus():this._lastTabNavDirection===zn?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){t.key===Bn&&(this._lastTabNavDirection=t.shiftKey?zn:qn)}}const $n="modal",Zn="bs.modal",Kn=`.${Zn}`,Xn=".data-api",Yn="Escape",Jn=`hide${Kn}`,Qn=`hidePrevented${Kn}`,ti=`hidden${Kn}`,ei=`show${Kn}`,ni=`shown${Kn}`,ii=`resize${Kn}`,ri=`click.dismiss${Kn}`,si=`mousedown.dismiss${Kn}`,oi=`keydown.dismiss${Kn}`,ai=`click${Kn}${Xn}`,li="modal-open",ci="fade",ui="show",hi="modal-static",di=".modal.show",fi=".modal-dialog",pi=".modal-body",gi='[data-bs-toggle="modal"]',mi={backdrop:!0,focus:!0,keyboard:!0},_i={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class vi extends tt{constructor(t,e){super(t,e),this._dialog=vt.findOne(fi,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new kn,this._addEventListeners()}static get Default(){return mi}static get DefaultType(){return _i}static get NAME(){return $n}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=W.trigger(this._element,ei,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(li),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=W.trigger(this._element,Jn);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ui),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])W.off(t,Kn);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Nn({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Hn({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=vt.findOne(pi,this._dialog);e&&(e.scrollTop=0),y(this._element),this._element.classList.add(ui);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,W.trigger(this._element,ni,{relatedTarget:t})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){W.on(this._element,oi,(t=>{if(t.key===Yn)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),W.on(window,ii,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),W.on(this._element,si,(t=>{W.one(this._element,ri,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(li),this._resetAdjustments(),this._scrollBar.reset(),W.trigger(this._element,ti)}))}_isAnimated(){return this._element.classList.contains(ci)}_triggerBackdropTransition(){const t=W.trigger(this._element,Qn);if(t.defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;"hidden"===n||this._element.classList.contains(hi)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(hi),this._queueCallback((()=>{this._element.classList.remove(hi),this._queueCallback((()=>{this._element.style.overflowY=n}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;if(n&&!t){const t=x()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!n&&t){const t=x()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const n=vi.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t](e)}}))}}W.on(document,ai,gi,(function(t){const e=u(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),W.one(e,ei,(t=>{t.defaultPrevented||W.one(e,ti,(()=>{g(this)&&this.focus()}))}));const n=vt.findOne(di);n&&vi.getInstance(n).hide();const i=vi.getOrCreateInstance(e);i.toggle(this)})),et(vi),T(vi);const yi="offcanvas",wi="bs.offcanvas",bi=`.${wi}`,Ei=".data-api",xi=`load${bi}${Ei}`,Ti="Escape",Ci="show",Si="showing",Ii="hiding",ki="offcanvas-backdrop",Ri=".offcanvas.show",Ai=`show${bi}`,Oi=`shown${bi}`,Di=`hide${bi}`,Li=`hidePrevented${bi}`,Pi=`hidden${bi}`,Ni=`resize${bi}`,Mi=`click${bi}${Ei}`,Fi=`keydown.dismiss${bi}`,ji='[data-bs-toggle="offcanvas"]',Ui={backdrop:!0,keyboard:!0,scroll:!1},Vi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Bi extends tt{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ui}static get DefaultType(){return Vi}static get NAME(){return yi}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=W.trigger(this._element,Ai,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new kn).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Si);const n=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ci),this._element.classList.remove(Si),W.trigger(this._element,Oi,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const t=W.trigger(this._element,Di);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ii),this._backdrop.hide();const e=()=>{this._element.classList.remove(Ci,Ii),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new kn).reset(),W.trigger(this._element,Pi)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{"static"!==this._config.backdrop?this.hide():W.trigger(this._element,Li)},e=Boolean(this._config.backdrop);return new Nn({className:ki,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Hn({trapElement:this._element})}_addEventListeners(){W.on(this._element,Fi,(t=>{t.key===Ti&&(this._config.keyboard?this.hide():W.trigger(this._element,Li))}))}static jQueryInterface(t){return this.each((function(){const e=Bi.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}W.on(document,Mi,ji,(function(t){const e=u(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),m(this))return;W.one(e,Pi,(()=>{g(this)&&this.focus()}));const n=vt.findOne(Ri);n&&n!==e&&Bi.getInstance(n).hide();const i=Bi.getOrCreateInstance(e);i.toggle(this)})),W.on(window,xi,(()=>{for(const t of vt.find(Ri))Bi.getOrCreateInstance(t).show()})),W.on(window,Ni,(()=>{for(const t of vt.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&Bi.getOrCreateInstance(t).hide()})),et(Bi),T(Bi);const qi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),zi=/^aria-[\w-]*$/i,Gi=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Wi=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Hi=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?!qi.has(n)||Boolean(Gi.test(t.nodeValue)||Wi.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(n)))},$i={"*":["class","dir","id","lang","role",zi],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Zi(t,e,n){if(!t.length)return t;if(n&&"function"===typeof n)return n(t);const i=new window.DOMParser,r=i.parseFromString(t,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(const o of s){const t=o.nodeName.toLowerCase();if(!Object.keys(e).includes(t)){o.remove();continue}const n=[].concat(...o.attributes),i=[].concat(e["*"]||[],e[t]||[]);for(const e of n)Hi(e,i)||o.removeAttribute(e.nodeName)}return r.body.innerHTML}const Ki="TemplateFactory",Xi={allowList:$i,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Yi={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ji={entry:"(string|element|function|null)",selector:"(string|element)"};class Qi extends J{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Xi}static get DefaultType(){return Yi}static get NAME(){return Ki}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(t,r,i);const e=t.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&e.classList.add(...n.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,n]of Object.entries(t))super._typeCheckConfig({selector:e,entry:n},Ji)}_setContent(t,e,n){const i=vt.findOne(n,t);i&&(e=this._resolvePossibleFunction(e),e?f(e)?this._putElementInTemplate(p(e),i):this._config.html?i.innerHTML=this._maybeSanitize(e):i.textContent=e:i.remove())}_maybeSanitize(t){return this._config.sanitize?Zi(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return"function"===typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const tr="tooltip",er=new Set(["sanitize","allowList","sanitizeFn"]),nr="fade",ir="modal",rr="show",sr=".tooltip-inner",or=`.${ir}`,ar="hide.bs.modal",lr="hover",cr="focus",ur="click",hr="manual",dr="hide",fr="hidden",pr="show",gr="shown",mr="inserted",_r="click",vr="focusin",yr="focusout",wr="mouseenter",br="mouseleave",Er={AUTO:"auto",TOP:"top",RIGHT:x()?"left":"right",BOTTOM:"bottom",LEFT:x()?"right":"left"},xr={allowList:$i,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Tr={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Cr extends tt{constructor(t,e){if("undefined"===typeof n)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return xr}static get DefaultType(){return Tr}static get NAME(){return tr}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),W.off(this._element.closest(or),ar,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=W.trigger(this._element,this.constructor.eventName(pr)),e=_(this._element),n=(e||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!n)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),W.trigger(this._element,this.constructor.eventName(mr))),this._popper=this._createPopper(i),i.classList.add(rr),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))W.on(o,"mouseover",v);const s=()=>{W.trigger(this._element,this.constructor.eventName(gr)),!1===this._isHovered&&this._leave(),this._isHovered=!1};this._queueCallback(s,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const t=W.trigger(this._element,this.constructor.eventName(dr));if(t.defaultPrevented)return;const e=this._getTipElement();if(e.classList.remove(rr),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))W.off(i,"mouseover",v);this._activeTrigger[ur]=!1,this._activeTrigger[cr]=!1,this._activeTrigger[lr]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),W.trigger(this._element,this.constructor.eventName(fr)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(nr,rr),e.classList.add(`bs-${this.constructor.NAME}-auto`);const n=a(this.constructor.NAME).toString();return e.setAttribute("id",n),this._isAnimated()&&e.classList.add(nr),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Qi({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[sr]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(nr)}_isShown(){return this.tip&&this.tip.classList.contains(rr)}_createPopper(t){const e="function"===typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,i=Er[e.toUpperCase()];return n.createPopper(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"===typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"===typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)W.on(this._element,this.constructor.eventName(_r),this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e.toggle()}));else if(e!==hr){const t=e===lr?this.constructor.eventName(wr):this.constructor.eventName(vr),n=e===lr?this.constructor.eventName(br):this.constructor.eventName(yr);W.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?cr:lr]=!0,e._enter()})),W.on(this._element,n,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?cr:lr]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},W.on(this._element.closest(or),ar,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Y.getDataAttributes(this._element);for(const n of Object.keys(e))er.has(n)&&delete e[n];return t={...e,..."object"===typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:p(t.container),"number"===typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"===typeof t.title&&(t.title=t.title.toString()),"number"===typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=Cr.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}T(Cr);const Sr="popover",Ir=".popover-header",kr=".popover-body",Rr={...Cr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ar={...Cr.DefaultType,content:"(null|string|element|function)"};class Or extends Cr{static get Default(){return Rr}static get DefaultType(){return Ar}static get NAME(){return Sr}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Ir]:this._getTitle(),[kr]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=Or.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}T(Or);const Dr="scrollspy",Lr="bs.scrollspy",Pr=`.${Lr}`,Nr=".data-api",Mr=`activate${Pr}`,Fr=`click${Pr}`,jr=`load${Pr}${Nr}`,Ur="dropdown-item",Vr="active",Br='[data-bs-spy="scroll"]',qr="[href]",zr=".nav, .list-group",Gr=".nav-link",Wr=".nav-item",Hr=".list-group-item",$r=`${Gr}, ${Wr} > ${Gr}, ${Hr}`,Zr=".dropdown",Kr=".dropdown-toggle",Xr={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Yr={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Jr extends tt{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Xr}static get DefaultType(){return Yr}static get NAME(){return Dr}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=p(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"===typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(W.off(this._config.target,Fr),W.on(this._config.target,Fr,qr,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const n=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:i,behavior:"smooth"});n.scrollTop=i}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),n=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const s of t){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(s));continue}const t=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&t){if(n(s),!i)return}else r||t||n(s)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=vt.find(qr,this._config.target);for(const e of t){if(!e.hash||m(e))continue;const t=vt.findOne(e.hash,this._element);g(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Vr),this._activateParents(t),W.trigger(this._element,Mr,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Ur))vt.findOne(Kr,t.closest(Zr)).classList.add(Vr);else for(const e of vt.parents(t,zr))for(const t of vt.prev(e,$r))t.classList.add(Vr)}_clearActiveClass(t){t.classList.remove(Vr);const e=vt.find(`${qr}.${Vr}`,t);for(const n of e)n.classList.remove(Vr)}static jQueryInterface(t){return this.each((function(){const e=Jr.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}W.on(window,jr,(()=>{for(const t of vt.find(Br))Jr.getOrCreateInstance(t)})),T(Jr);const Qr="tab",ts="bs.tab",es=`.${ts}`,ns=`hide${es}`,is=`hidden${es}`,rs=`show${es}`,ss=`shown${es}`,os=`click${es}`,as=`keydown${es}`,ls=`load${es}`,cs="ArrowLeft",us="ArrowRight",hs="ArrowUp",ds="ArrowDown",fs="active",ps="fade",gs="show",ms="dropdown",_s=".dropdown-toggle",vs=".dropdown-menu",ys=":not(.dropdown-toggle)",ws='.list-group, .nav, [role="tablist"]',bs=".nav-item, .list-group-item",Es=`.nav-link${ys}, .list-group-item${ys}, [role="tab"]${ys}`,xs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ts=`${Es}, ${xs}`,Cs=`.${fs}[data-bs-toggle="tab"], .${fs}[data-bs-toggle="pill"], .${fs}[data-bs-toggle="list"]`;class Ss extends tt{constructor(t){super(t),this._parent=this._element.closest(ws),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),W.on(this._element,as,(t=>this._keydown(t))))}static get NAME(){return Qr}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),n=e?W.trigger(e,ns,{relatedTarget:t}):null,i=W.trigger(t,rs,{relatedTarget:e});i.defaultPrevented||n&&n.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(fs),this._activate(u(t));const n=()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),W.trigger(t,ss,{relatedTarget:e})):t.classList.add(gs)};this._queueCallback(n,t,t.classList.contains(ps))}_deactivate(t,e){if(!t)return;t.classList.remove(fs),t.blur(),this._deactivate(u(t));const n=()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),W.trigger(t,is,{relatedTarget:e})):t.classList.remove(gs)};this._queueCallback(n,t,t.classList.contains(ps))}_keydown(t){if(![cs,us,hs,ds].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[us,ds].includes(t.key),n=I(this._getChildren().filter((t=>!m(t))),t.target,e,!0);n&&(n.focus({preventScroll:!0}),Ss.getOrCreateInstance(n).show())}_getChildren(){return vt.find(Ts,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const n of e)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),n=this._getOuterElement(t);t.setAttribute("aria-selected",e),n!==t&&this._setAttributeIfNotExists(n,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=u(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const n=this._getOuterElement(t);if(!n.classList.contains(ms))return;const i=(t,i)=>{const r=vt.findOne(t,n);r&&r.classList.toggle(i,e)};i(_s,fs),i(vs,gs),n.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,n){t.hasAttribute(e)||t.setAttribute(e,n)}_elemIsActive(t){return t.classList.contains(fs)}_getInnerElement(t){return t.matches(Ts)?t:vt.findOne(Ts,t)}_getOuterElement(t){return t.closest(bs)||t}static jQueryInterface(t){return this.each((function(){const e=Ss.getOrCreateInstance(this);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}W.on(document,os,xs,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),m(this)||Ss.getOrCreateInstance(this).show()})),W.on(window,ls,(()=>{for(const t of vt.find(Cs))Ss.getOrCreateInstance(t)})),T(Ss);const Is="toast",ks="bs.toast",Rs=`.${ks}`,As=`mouseover${Rs}`,Os=`mouseout${Rs}`,Ds=`focusin${Rs}`,Ls=`focusout${Rs}`,Ps=`hide${Rs}`,Ns=`hidden${Rs}`,Ms=`show${Rs}`,Fs=`shown${Rs}`,js="fade",Us="hide",Vs="show",Bs="showing",qs={animation:"boolean",autohide:"boolean",delay:"number"},zs={animation:!0,autohide:!0,delay:5e3};class Gs extends tt{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return zs}static get DefaultType(){return qs}static get NAME(){return Is}show(){const t=W.trigger(this._element,Ms);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(js);const e=()=>{this._element.classList.remove(Bs),W.trigger(this._element,Fs),this._maybeScheduleHide()};this._element.classList.remove(Us),y(this._element),this._element.classList.add(Vs,Bs),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=W.trigger(this._element,Ps);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(Us),this._element.classList.remove(Bs,Vs),W.trigger(this._element,Ns)};this._element.classList.add(Bs),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Vs),super.dispose()}isShown(){return this._element.classList.contains(Vs)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){W.on(this._element,As,(t=>this._onInteraction(t,!0))),W.on(this._element,Os,(t=>this._onInteraction(t,!1))),W.on(this._element,Ds,(t=>this._onInteraction(t,!0))),W.on(this._element,Ls,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Gs.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}et(Gs),T(Gs);const Ws={Alert:ct,Button:_t,Carousel:ge,Collapse:Fe,Dropdown:xn,Modal:vi,Offcanvas:Bi,Popover:Or,ScrollSpy:Jr,Tab:Ss,Toast:Gs,Tooltip:Cr};return Ws}))},9662:function(t,e,n){var i=n(614),r=n(6330),s=TypeError;t.exports=function(t){if(i(t))return t;throw s(r(t)+" is not a function")}},9670:function(t,e,n){var i=n(111),r=String,s=TypeError;t.exports=function(t){if(i(t))return t;throw s(r(t)+" is not an object")}},1318:function(t,e,n){var i=n(5656),r=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,l=i(e),c=s(l),u=r(o,c);if(t&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},3658:function(t,e,n){"use strict";var i=n(9781),r=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(r(t)&&!o(t,"length").writable)throw s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var i=n(1702),r=i({}.toString),s=i("".slice);t.exports=function(t){return s(r(t),8,-1)}},9920:function(t,e,n){var i=n(2597),r=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=r(e),l=o.f,c=s.f,u=0;u<a.length;u++){var h=a[u];i(t,h)||n&&i(n,h)||l(t,h,c(e,h))}}},8880:function(t,e,n){var i=n(9781),r=n(3070),s=n(9114);t.exports=i?function(t,e,n){return r.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var i=n(614),r=n(3070),s=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:e;if(i(n)&&s(n,c,a),a.global)l?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(l=!0):delete t[e]}catch(u){}l?t[e]=n:r.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var i=n(7854),r=Object.defineProperty;t.exports=function(t,e){try{r(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},9781:function(t,e,n){var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var i=n(7854),r=n(111),s=i.document,o=r(s)&&r(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var i,r,s=n(7854),o=n(8113),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),t.exports=r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var i=n(7854),r=n(1236).f,s=n(8880),o=n(8052),a=n(3072),l=n(9920),c=n(4705);t.exports=function(t,e){var n,u,h,d,f,p,g=t.target,m=t.global,_=t.stat;if(u=m?i:_?i[g]||a(g,{}):(i[g]||{}).prototype,u)for(h in e){if(f=e[h],t.dontCallGetSet?(p=r(u,h),d=p&&p.value):d=u[h],n=c(m?h:g+(_?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var i=n(7293);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var i=n(4374),r=Function.prototype.call;t.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(t,e,n){var i=n(9781),r=n(2597),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),l=a&&"something"===function(){}.name,c=a&&(!i||i&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1702:function(t,e,n){var i=n(4374),r=Function.prototype,s=r.call,o=i&&r.bind.bind(s,s);t.exports=i?o:function(t){return function(){return s.apply(t,arguments)}}},5005:function(t,e,n){var i=n(7854),r=n(614),s=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(i[t]):i[t]&&i[t][e]}},8173:function(t,e,n){var i=n(9662),r=n(8554);t.exports=function(t,e){var n=t[e];return r(n)?void 0:i(n)}},7854:function(t,e,n){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var i=n(1702),r=n(7908),s=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(r(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var i=n(9781),r=n(7293),s=n(317);t.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var i=n(1702),r=n(7293),s=n(4326),o=Object,a=i("".split);t.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):o(t)}:o},2788:function(t,e,n){var i=n(1702),r=n(614),s=n(5465),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},9909:function(t,e,n){var i,r,s,o=n(4811),a=n(7854),l=n(111),c=n(8880),u=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,_=function(t){return s(t)?r(t):i(t,{})},v=function(t){return function(e){var n;if(!l(e)||(n=r(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var y=h.state||(h.state=new m);y.get=y.get,y.has=y.has,y.set=y.set,i=function(t,e){if(y.has(t))throw g(p);return e.facade=t,y.set(t,e),e},r=function(t){return y.get(t)||{}},s=function(t){return y.has(t)}}else{var w=d("state");f[w]=!0,i=function(t,e){if(u(t,w))throw g(p);return e.facade=t,c(t,w,e),e},r=function(t){return u(t,w)?t[w]:{}},s=function(t){return u(t,w)}}t.exports={set:i,get:r,has:s,enforce:_,getterFor:v}},3157:function(t,e,n){var i=n(4326);t.exports=Array.isArray||function(t){return"Array"==i(t)}},614:function(t,e,n){var i=n(4154),r=i.all;t.exports=i.IS_HTMLDDA?function(t){return"function"==typeof t||t===r}:function(t){return"function"==typeof t}},4705:function(t,e,n){var i=n(7293),r=n(614),s=/#|\.prototype\./,o=function(t,e){var n=l[a(t)];return n==u||n!=c&&(r(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var i=n(614),r=n(4154),s=r.all;t.exports=r.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:i(t)||t===s}:function(t){return"object"==typeof t?null!==t:i(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var i=n(5005),r=n(614),s=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return r(e)&&s(e.prototype,a(t))}},6244:function(t,e,n){var i=n(7466);t.exports=function(t){return i(t.length)}},6339:function(t,e,n){var i=n(1702),r=n(7293),s=n(614),o=n(2597),a=n(9781),l=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,g=i("".slice),m=i("".replace),_=i([].join),v=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),y=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===g(f(e),0,7)&&(e="["+m(f(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||l&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(r){}var i=h(t);return o(i,"source")||(i.source=_(y,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return s(this)&&d(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var i=+t;return(i>0?n:e)(i)}},3070:function(t,e,n){var i=n(9781),r=n(4664),s=n(3353),o=n(9670),a=n(4948),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=i?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var i=u(t,e);i&&i[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:h in n?n[h]:i[h],writable:!1})}return c(t,e,n)}:c:function(t,e,n){if(o(t),e=a(e),o(n),r)try{return c(t,e,n)}catch(i){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var i=n(9781),r=n(6916),s=n(5296),o=n(9114),a=n(5656),l=n(4948),c=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=a(t),e=l(e),u)try{return h(t,e)}catch(n){}if(c(t,e))return o(!r(s.f,t,e),t[e])}},8006:function(t,e,n){var i=n(6324),r=n(748),s=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var i=n(1702);t.exports=i({}.isPrototypeOf)},6324:function(t,e,n){var i=n(1702),r=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),l=i([].push);t.exports=function(t,e){var n,i=s(t),c=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&l(u,n);while(e.length>c)r(i,n=e[c++])&&(~o(u,n)||l(u,n));return u}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);e.f=r?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var i=n(6916),r=n(614),s=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&r(n=t.toString)&&!s(a=i(n,t)))return a;if(r(n=t.valueOf)&&!s(a=i(n,t)))return a;if("string"!==e&&r(n=t.toString)&&!s(a=i(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var i=n(5005),r=n(1702),s=n(8006),o=n(5181),a=n(9670),l=r([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?l(e,n(t)):e}},4488:function(t,e,n){var i=n(8554),r=TypeError;t.exports=function(t){if(i(t))throw r("Can't call method on "+t);return t}},6200:function(t,e,n){var i=n(2309),r=n(9711),s=i("keys");t.exports=function(t){return s[t]||(s[t]=r(t))}},5465:function(t,e,n){var i=n(7854),r=n(3072),s="__core-js_shared__",o=i[s]||r(s,{});t.exports=o},2309:function(t,e,n){var i=n(1913),r=n(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.0",mode:i?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var i=n(7392),r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},1400:function(t,e,n){var i=n(9303),r=Math.max,s=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):s(n,e)}},5656:function(t,e,n){var i=n(8361),r=n(4488);t.exports=function(t){return i(r(t))}},9303:function(t,e,n){var i=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:i(e)}},7466:function(t,e,n){var i=n(9303),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},7908:function(t,e,n){var i=n(4488),r=Object;t.exports=function(t){return r(i(t))}},7593:function(t,e,n){var i=n(6916),r=n(111),s=n(2190),o=n(8173),a=n(2140),l=n(5112),c=TypeError,u=l("toPrimitive");t.exports=function(t,e){if(!r(t)||s(t))return t;var n,l=o(t,u);if(l){if(void 0===e&&(e="default"),n=i(l,t,e),!r(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var i=n(7593),r=n(2190);t.exports=function(t){var e=i(t,"string");return r(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var i=n(1702),r=0,s=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+s,36)}},3307:function(t,e,n){var i=n(6293);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var i=n(9781),r=n(7293);t.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var i=n(7854),r=n(614),s=i.WeakMap;t.exports=r(s)&&/native code/.test(String(s))},5112:function(t,e,n){var i=n(7854),r=n(2309),s=n(2597),o=n(9711),a=n(6293),l=n(3307),c=i.Symbol,u=r("wks"),h=l?c["for"]||c:c&&c.withoutSetter||o;t.exports=function(t){return s(u,t)||(u[t]=a&&s(c,t)?c[t]:h("Symbol."+t)),u[t]}},7658:function(t,e,n){"use strict";var i=n(2109),r=n(7908),s=n(6244),o=n(3658),a=n(7207),l=n(7293),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=c||!u();i({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=r(this),n=s(e),i=arguments.length;a(n+i);for(var l=0;l<i;l++)e[n]=arguments[l],n++;return o(e,n),n}})},9755:function(t,e){var n,i;
/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */(function(e,n){"use strict";"object"===typeof t.exports?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return n(t)}:n(e)})("undefined"!==typeof window?window:this,(function(r,s){"use strict";var o=[],a=Object.getPrototypeOf,l=o.slice,c=o.flat?function(t){return o.flat.call(t)}:function(t){return o.concat.apply([],t)},u=o.push,h=o.indexOf,d={},f=d.toString,p=d.hasOwnProperty,g=p.toString,m=g.call(Object),_={},v=function(t){return"function"===typeof t&&"number"!==typeof t.nodeType&&"function"!==typeof t.item},y=function(t){return null!=t&&t===t.window},w=r.document,b={type:!0,src:!0,nonce:!0,noModule:!0};function E(t,e,n){n=n||w;var i,r,s=n.createElement("script");if(s.text=t,e)for(i in b)r=e[i]||e.getAttribute&&e.getAttribute(i),r&&s.setAttribute(i,r);n.head.appendChild(s).parentNode.removeChild(s)}function x(t){return null==t?t+"":"object"===typeof t||"function"===typeof t?d[f.call(t)]||"object":typeof t}var T="3.6.4",C=function(t,e){return new C.fn.init(t,e)};function S(t){var e=!!t&&"length"in t&&t.length,n=x(t);return!v(t)&&!y(t)&&("array"===n||0===e||"number"===typeof e&&e>0&&e-1 in t)}C.fn=C.prototype={jquery:T,constructor:C,length:0,toArray:function(){return l.call(this)},get:function(t){return null==t?l.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=C.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return C.each(this,t)},map:function(t){return this.pushStack(C.map(this,(function(e,n){return t.call(e,n,e)})))},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(C.grep(this,(function(t,e){return(e+1)%2})))},odd:function(){return this.pushStack(C.grep(this,(function(t,e){return e%2})))},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:o.sort,splice:o.splice},C.extend=C.fn.extend=function(){var t,e,n,i,r,s,o=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"===typeof o&&(c=o,o=arguments[a]||{},a++),"object"===typeof o||v(o)||(o={}),a===l&&(o=this,a--);a<l;a++)if(null!=(t=arguments[a]))for(e in t)i=t[e],"__proto__"!==e&&o!==i&&(c&&i&&(C.isPlainObject(i)||(r=Array.isArray(i)))?(n=o[e],s=r&&!Array.isArray(n)?[]:r||C.isPlainObject(n)?n:{},r=!1,o[e]=C.extend(c,s,i)):void 0!==i&&(o[e]=i));return o},C.extend({expando:"jQuery"+(T+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==f.call(t))&&(e=a(t),!e||(n=p.call(e,"constructor")&&e.constructor,"function"===typeof n&&g.call(n)===m))},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t,e,n){E(t,{nonce:e&&e.nonce},n)},each:function(t,e){var n,i=0;if(S(t)){for(n=t.length;i<n;i++)if(!1===e.call(t[i],i,t[i]))break}else for(i in t)if(!1===e.call(t[i],i,t[i]))break;return t},makeArray:function(t,e){var n=e||[];return null!=t&&(S(Object(t))?C.merge(n,"string"===typeof t?[t]:t):u.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:h.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,r=t.length;i<n;i++)t[r++]=e[i];return t.length=r,t},grep:function(t,e,n){for(var i,r=[],s=0,o=t.length,a=!n;s<o;s++)i=!e(t[s],s),i!==a&&r.push(t[s]);return r},map:function(t,e,n){var i,r,s=0,o=[];if(S(t))for(i=t.length;s<i;s++)r=e(t[s],s,n),null!=r&&o.push(r);else for(s in t)r=e(t[s],s,n),null!=r&&o.push(r);return c(o)},guid:1,support:_}),"function"===typeof Symbol&&(C.fn[Symbol.iterator]=o[Symbol.iterator]),C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(t,e){d["[object "+e+"]"]=e.toLowerCase()}));var I=
/*!
 * Sizzle CSS Selector Engine v2.3.10
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2023-02-14
 */
function(t){var e,n,i,r,s,o,a,l,c,u,h,d,f,p,g,m,_,v,y,w="sizzle"+1*new Date,b=t.document,E=0,x=0,T=lt(),C=lt(),S=lt(),I=lt(),k=function(t,e){return t===e&&(h=!0),0},R={}.hasOwnProperty,A=[],O=A.pop,D=A.push,L=A.push,P=A.slice,N=function(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\\x20\\t\\r\\n\\f]",j="(?:\\\\[\\da-fA-F]{1,6}"+F+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",U="\\["+F+"*("+j+")(?:"+F+"*([*^$|!~]?=)"+F+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+j+"))|)"+F+"*\\]",V=":("+j+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+U+")*)|.*)\\)|)",B=new RegExp(F+"+","g"),q=new RegExp("^"+F+"+|((?:^|[^\\\\])(?:\\\\.)*)"+F+"+$","g"),z=new RegExp("^"+F+"*,"+F+"*"),G=new RegExp("^"+F+"*([>+~]|"+F+")"+F+"*"),W=new RegExp(F+"|>"),H=new RegExp(V),$=new RegExp("^"+j+"$"),Z={ID:new RegExp("^#("+j+")"),CLASS:new RegExp("^\\.("+j+")"),TAG:new RegExp("^("+j+"|[*])"),ATTR:new RegExp("^"+U),PSEUDO:new RegExp("^"+V),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+F+"*(even|odd|(([+-]|)(\\d*)n|)"+F+"*(?:([+-]|)"+F+"*(\\d+)|))"+F+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+F+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+F+"*((?:-\\d)?\\d*)"+F+"*\\)|)(?=[^-]|$)","i")},K=/HTML$/i,X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Q=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tt=/[+~]/,et=new RegExp("\\\\[\\da-fA-F]{1,6}"+F+"?|\\\\([^\\r\\n\\f])","g"),nt=function(t,e){var n="0x"+t.slice(1)-65536;return e||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},it=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,rt=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},st=function(){d()},ot=wt((function(t){return!0===t.disabled&&"fieldset"===t.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{L.apply(A=P.call(b.childNodes),b.childNodes),A[b.childNodes.length].nodeType}catch(It){L={apply:A.length?function(t,e){D.apply(t,P.call(e))}:function(t,e){var n=t.length,i=0;while(t[n++]=e[i++]);t.length=n-1}}}function at(t,e,i,r){var s,a,c,u,h,p,_,v=e&&e.ownerDocument,b=e?e.nodeType:9;if(i=i||[],"string"!==typeof t||!t||1!==b&&9!==b&&11!==b)return i;if(!r&&(d(e),e=e||f,g)){if(11!==b&&(h=Q.exec(t)))if(s=h[1]){if(9===b){if(!(c=e.getElementById(s)))return i;if(c.id===s)return i.push(c),i}else if(v&&(c=v.getElementById(s))&&y(e,c)&&c.id===s)return i.push(c),i}else{if(h[2])return L.apply(i,e.getElementsByTagName(t)),i;if((s=h[3])&&n.getElementsByClassName&&e.getElementsByClassName)return L.apply(i,e.getElementsByClassName(s)),i}if(n.qsa&&!I[t+" "]&&(!m||!m.test(t))&&(1!==b||"object"!==e.nodeName.toLowerCase())){if(_=t,v=e,1===b&&(W.test(t)||G.test(t))){v=tt.test(t)&&_t(e.parentNode)||e,v===e&&n.scope||((u=e.getAttribute("id"))?u=u.replace(it,rt):e.setAttribute("id",u=w)),p=o(t),a=p.length;while(a--)p[a]=(u?"#"+u:":scope")+" "+yt(p[a]);_=p.join(",")}try{return L.apply(i,v.querySelectorAll(_)),i}catch(E){I(t,!0)}finally{u===w&&e.removeAttribute("id")}}}return l(t.replace(q,"$1"),e,i,r)}function lt(){var t=[];function e(n,r){return t.push(n+" ")>i.cacheLength&&delete e[t.shift()],e[n+" "]=r}return e}function ct(t){return t[w]=!0,t}function ut(t){var e=f.createElement("fieldset");try{return!!t(e)}catch(It){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function ht(t,e){var n=t.split("|"),r=n.length;while(r--)i.attrHandle[n[r]]=e}function dt(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(i)return i;if(n)while(n=n.nextSibling)if(n===e)return-1;return t?1:-1}function ft(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function pt(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function gt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ot(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function mt(t){return ct((function(e){return e=+e,ct((function(n,i){var r,s=t([],n.length,e),o=s.length;while(o--)n[r=s[o]]&&(n[r]=!(i[r]=n[r]))}))}))}function _t(t){return t&&"undefined"!==typeof t.getElementsByTagName&&t}for(e in n=at.support={},s=at.isXML=function(t){var e=t&&t.namespaceURI,n=t&&(t.ownerDocument||t).documentElement;return!K.test(e||n&&n.nodeName||"HTML")},d=at.setDocument=function(t){var e,r,o=t?t.ownerDocument||t:b;return o!=f&&9===o.nodeType&&o.documentElement?(f=o,p=f.documentElement,g=!s(f),b!=f&&(r=f.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",st,!1):r.attachEvent&&r.attachEvent("onunload",st)),n.scope=ut((function(t){return p.appendChild(t).appendChild(f.createElement("div")),"undefined"!==typeof t.querySelectorAll&&!t.querySelectorAll(":scope fieldset div").length})),n.cssHas=ut((function(){try{return f.querySelector(":has(*,:jqfake)"),!1}catch(It){return!0}})),n.attributes=ut((function(t){return t.className="i",!t.getAttribute("className")})),n.getElementsByTagName=ut((function(t){return t.appendChild(f.createComment("")),!t.getElementsByTagName("*").length})),n.getElementsByClassName=J.test(f.getElementsByClassName),n.getById=ut((function(t){return p.appendChild(t).id=w,!f.getElementsByName||!f.getElementsByName(w).length})),n.getById?(i.filter["ID"]=function(t){var e=t.replace(et,nt);return function(t){return t.getAttribute("id")===e}},i.find["ID"]=function(t,e){if("undefined"!==typeof e.getElementById&&g){var n=e.getElementById(t);return n?[n]:[]}}):(i.filter["ID"]=function(t){var e=t.replace(et,nt);return function(t){var n="undefined"!==typeof t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},i.find["ID"]=function(t,e){if("undefined"!==typeof e.getElementById&&g){var n,i,r,s=e.getElementById(t);if(s){if(n=s.getAttributeNode("id"),n&&n.value===t)return[s];r=e.getElementsByName(t),i=0;while(s=r[i++])if(n=s.getAttributeNode("id"),n&&n.value===t)return[s]}return[]}}),i.find["TAG"]=n.getElementsByTagName?function(t,e){return"undefined"!==typeof e.getElementsByTagName?e.getElementsByTagName(t):n.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],r=0,s=e.getElementsByTagName(t);if("*"===t){while(n=s[r++])1===n.nodeType&&i.push(n);return i}return s},i.find["CLASS"]=n.getElementsByClassName&&function(t,e){if("undefined"!==typeof e.getElementsByClassName&&g)return e.getElementsByClassName(t)},_=[],m=[],(n.qsa=J.test(f.querySelectorAll))&&(ut((function(t){var e;p.appendChild(t).innerHTML="<a id='"+w+"'></a><select id='"+w+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+F+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||m.push("\\["+F+"*(?:value|"+M+")"),t.querySelectorAll("[id~="+w+"-]").length||m.push("~="),e=f.createElement("input"),e.setAttribute("name",""),t.appendChild(e),t.querySelectorAll("[name='']").length||m.push("\\["+F+"*name"+F+"*="+F+"*(?:''|\"\")"),t.querySelectorAll(":checked").length||m.push(":checked"),t.querySelectorAll("a#"+w+"+*").length||m.push(".#.+[+~]"),t.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),ut((function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=f.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&m.push("name"+F+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),p.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=J.test(v=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&ut((function(t){n.disconnectedMatch=v.call(t,"*"),v.call(t,"[s!='']:x"),_.push("!=",V)})),n.cssHas||m.push(":has"),m=m.length&&new RegExp(m.join("|")),_=_.length&&new RegExp(_.join("|")),e=J.test(p.compareDocumentPosition),y=e||J.test(p.contains)?function(t,e){var n=9===t.nodeType&&t.documentElement||t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)while(e=e.parentNode)if(e===t)return!0;return!1},k=e?function(t,e){if(t===e)return h=!0,0;var i=!t.compareDocumentPosition-!e.compareDocumentPosition;return i||(i=(t.ownerDocument||t)==(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&i||!n.sortDetached&&e.compareDocumentPosition(t)===i?t==f||t.ownerDocument==b&&y(b,t)?-1:e==f||e.ownerDocument==b&&y(b,e)?1:u?N(u,t)-N(u,e):0:4&i?-1:1)}:function(t,e){if(t===e)return h=!0,0;var n,i=0,r=t.parentNode,s=e.parentNode,o=[t],a=[e];if(!r||!s)return t==f?-1:e==f?1:r?-1:s?1:u?N(u,t)-N(u,e):0;if(r===s)return dt(t,e);n=t;while(n=n.parentNode)o.unshift(n);n=e;while(n=n.parentNode)a.unshift(n);while(o[i]===a[i])i++;return i?dt(o[i],a[i]):o[i]==b?-1:a[i]==b?1:0},f):f},at.matches=function(t,e){return at(t,null,null,e)},at.matchesSelector=function(t,e){if(d(t),n.matchesSelector&&g&&!I[e+" "]&&(!_||!_.test(e))&&(!m||!m.test(e)))try{var i=v.call(t,e);if(i||n.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(It){I(e,!0)}return at(e,f,null,[t]).length>0},at.contains=function(t,e){return(t.ownerDocument||t)!=f&&d(t),y(t,e)},at.attr=function(t,e){(t.ownerDocument||t)!=f&&d(t);var r=i.attrHandle[e.toLowerCase()],s=r&&R.call(i.attrHandle,e.toLowerCase())?r(t,e,!g):void 0;return void 0!==s?s:n.attributes||!g?t.getAttribute(e):(s=t.getAttributeNode(e))&&s.specified?s.value:null},at.escape=function(t){return(t+"").replace(it,rt)},at.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},at.uniqueSort=function(t){var e,i=[],r=0,s=0;if(h=!n.detectDuplicates,u=!n.sortStable&&t.slice(0),t.sort(k),h){while(e=t[s++])e===t[s]&&(r=i.push(s));while(r--)t.splice(i[r],1)}return u=null,t},r=at.getText=function(t){var e,n="",i=0,s=t.nodeType;if(s){if(1===s||9===s||11===s){if("string"===typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=r(t)}else if(3===s||4===s)return t.nodeValue}else while(e=t[i++])n+=r(e);return n},i=at.selectors={cacheLength:50,createPseudo:ct,match:Z,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(et,nt),t[3]=(t[3]||t[4]||t[5]||"").replace(et,nt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||at.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&at.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return Z["CHILD"].test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&H.test(n)&&(e=o(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(et,nt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=T[t+" "];return e||(e=new RegExp("(^|"+F+")"+t+"("+F+"|$)"))&&T(t,(function(t){return e.test("string"===typeof t.className&&t.className||"undefined"!==typeof t.getAttribute&&t.getAttribute("class")||"")}))},ATTR:function(t,e,n){return function(i){var r=at.attr(i,t);return null==r?"!="===e:!e||(r+="","="===e?r===n:"!="===e?r!==n:"^="===e?n&&0===r.indexOf(n):"*="===e?n&&r.indexOf(n)>-1:"$="===e?n&&r.slice(-n.length)===n:"~="===e?(" "+r.replace(B," ")+" ").indexOf(n)>-1:"|="===e&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,n,i,r){var s="nth"!==t.slice(0,3),o="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===r?function(t){return!!t.parentNode}:function(e,n,l){var c,u,h,d,f,p,g=s!==o?"nextSibling":"previousSibling",m=e.parentNode,_=a&&e.nodeName.toLowerCase(),v=!l&&!a,y=!1;if(m){if(s){while(g){d=e;while(d=d[g])if(a?d.nodeName.toLowerCase()===_:1===d.nodeType)return!1;p=g="only"===t&&!p&&"nextSibling"}return!0}if(p=[o?m.firstChild:m.lastChild],o&&v){d=m,h=d[w]||(d[w]={}),u=h[d.uniqueID]||(h[d.uniqueID]={}),c=u[t]||[],f=c[0]===E&&c[1],y=f&&c[2],d=f&&m.childNodes[f];while(d=++f&&d&&d[g]||(y=f=0)||p.pop())if(1===d.nodeType&&++y&&d===e){u[t]=[E,f,y];break}}else if(v&&(d=e,h=d[w]||(d[w]={}),u=h[d.uniqueID]||(h[d.uniqueID]={}),c=u[t]||[],f=c[0]===E&&c[1],y=f),!1===y)while(d=++f&&d&&d[g]||(y=f=0)||p.pop())if((a?d.nodeName.toLowerCase()===_:1===d.nodeType)&&++y&&(v&&(h=d[w]||(d[w]={}),u=h[d.uniqueID]||(h[d.uniqueID]={}),u[t]=[E,y]),d===e))break;return y-=r,y===i||y%i===0&&y/i>=0}}},PSEUDO:function(t,e){var n,r=i.pseudos[t]||i.setFilters[t.toLowerCase()]||at.error("unsupported pseudo: "+t);return r[w]?r(e):r.length>1?(n=[t,t,"",e],i.setFilters.hasOwnProperty(t.toLowerCase())?ct((function(t,n){var i,s=r(t,e),o=s.length;while(o--)i=N(t,s[o]),t[i]=!(n[i]=s[o])})):function(t){return r(t,0,n)}):r}},pseudos:{not:ct((function(t){var e=[],n=[],i=a(t.replace(q,"$1"));return i[w]?ct((function(t,e,n,r){var s,o=i(t,null,r,[]),a=t.length;while(a--)(s=o[a])&&(t[a]=!(e[a]=s))})):function(t,r,s){return e[0]=t,i(e,null,s,n),e[0]=null,!n.pop()}})),has:ct((function(t){return function(e){return at(t,e).length>0}})),contains:ct((function(t){return t=t.replace(et,nt),function(e){return(e.textContent||r(e)).indexOf(t)>-1}})),lang:ct((function(t){return $.test(t||"")||at.error("unsupported lang: "+t),t=t.replace(et,nt).toLowerCase(),function(e){var n;do{if(n=g?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}})),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===p},focus:function(t){return t===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:gt(!1),disabled:gt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!i.pseudos["empty"](t)},header:function(t){return Y.test(t.nodeName)},input:function(t){return X.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:mt((function(){return[0]})),last:mt((function(t,e){return[e-1]})),eq:mt((function(t,e,n){return[n<0?n+e:n]})),even:mt((function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t})),odd:mt((function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t})),lt:mt((function(t,e,n){for(var i=n<0?n+e:n>e?e:n;--i>=0;)t.push(i);return t})),gt:mt((function(t,e,n){for(var i=n<0?n+e:n;++i<e;)t.push(i);return t}))}},i.pseudos["nth"]=i.pseudos["eq"],{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[e]=ft(e);for(e in{submit:!0,reset:!0})i.pseudos[e]=pt(e);function vt(){}function yt(t){for(var e=0,n=t.length,i="";e<n;e++)i+=t[e].value;return i}function wt(t,e,n){var i=e.dir,r=e.next,s=r||i,o=n&&"parentNode"===s,a=x++;return e.first?function(e,n,r){while(e=e[i])if(1===e.nodeType||o)return t(e,n,r);return!1}:function(e,n,l){var c,u,h,d=[E,a];if(l){while(e=e[i])if((1===e.nodeType||o)&&t(e,n,l))return!0}else while(e=e[i])if(1===e.nodeType||o)if(h=e[w]||(e[w]={}),u=h[e.uniqueID]||(h[e.uniqueID]={}),r&&r===e.nodeName.toLowerCase())e=e[i]||e;else{if((c=u[s])&&c[0]===E&&c[1]===a)return d[2]=c[2];if(u[s]=d,d[2]=t(e,n,l))return!0}return!1}}function bt(t){return t.length>1?function(e,n,i){var r=t.length;while(r--)if(!t[r](e,n,i))return!1;return!0}:t[0]}function Et(t,e,n){for(var i=0,r=e.length;i<r;i++)at(t,e[i],n);return n}function xt(t,e,n,i,r){for(var s,o=[],a=0,l=t.length,c=null!=e;a<l;a++)(s=t[a])&&(n&&!n(s,i,r)||(o.push(s),c&&e.push(a)));return o}function Tt(t,e,n,i,r,s){return i&&!i[w]&&(i=Tt(i)),r&&!r[w]&&(r=Tt(r,s)),ct((function(s,o,a,l){var c,u,h,d=[],f=[],p=o.length,g=s||Et(e||"*",a.nodeType?[a]:a,[]),m=!t||!s&&e?g:xt(g,d,t,a,l),_=n?r||(s?t:p||i)?[]:o:m;if(n&&n(m,_,a,l),i){c=xt(_,f),i(c,[],a,l),u=c.length;while(u--)(h=c[u])&&(_[f[u]]=!(m[f[u]]=h))}if(s){if(r||t){if(r){c=[],u=_.length;while(u--)(h=_[u])&&c.push(m[u]=h);r(null,_=[],c,l)}u=_.length;while(u--)(h=_[u])&&(c=r?N(s,h):d[u])>-1&&(s[c]=!(o[c]=h))}}else _=xt(_===o?_.splice(p,_.length):_),r?r(null,o,_,l):L.apply(o,_)}))}function Ct(t){for(var e,n,r,s=t.length,o=i.relative[t[0].type],a=o||i.relative[" "],l=o?1:0,u=wt((function(t){return t===e}),a,!0),h=wt((function(t){return N(e,t)>-1}),a,!0),d=[function(t,n,i){var r=!o&&(i||n!==c)||((e=n).nodeType?u(t,n,i):h(t,n,i));return e=null,r}];l<s;l++)if(n=i.relative[t[l].type])d=[wt(bt(d),n)];else{if(n=i.filter[t[l].type].apply(null,t[l].matches),n[w]){for(r=++l;r<s;r++)if(i.relative[t[r].type])break;return Tt(l>1&&bt(d),l>1&&yt(t.slice(0,l-1).concat({value:" "===t[l-2].type?"*":""})).replace(q,"$1"),n,l<r&&Ct(t.slice(l,r)),r<s&&Ct(t=t.slice(r)),r<s&&yt(t))}d.push(n)}return bt(d)}function St(t,e){var n=e.length>0,r=t.length>0,s=function(s,o,a,l,u){var h,p,m,_=0,v="0",y=s&&[],w=[],b=c,x=s||r&&i.find["TAG"]("*",u),T=E+=null==b?1:Math.random()||.1,C=x.length;for(u&&(c=o==f||o||u);v!==C&&null!=(h=x[v]);v++){if(r&&h){p=0,o||h.ownerDocument==f||(d(h),a=!g);while(m=t[p++])if(m(h,o||f,a)){l.push(h);break}u&&(E=T)}n&&((h=!m&&h)&&_--,s&&y.push(h))}if(_+=v,n&&v!==_){p=0;while(m=e[p++])m(y,w,o,a);if(s){if(_>0)while(v--)y[v]||w[v]||(w[v]=O.call(l));w=xt(w)}L.apply(l,w),u&&!s&&w.length>0&&_+e.length>1&&at.uniqueSort(l)}return u&&(E=T,c=b),y};return n?ct(s):s}return vt.prototype=i.filters=i.pseudos,i.setFilters=new vt,o=at.tokenize=function(t,e){var n,r,s,o,a,l,c,u=C[t+" "];if(u)return e?0:u.slice(0);a=t,l=[],c=i.preFilter;while(a){for(o in n&&!(r=z.exec(a))||(r&&(a=a.slice(r[0].length)||a),l.push(s=[])),n=!1,(r=G.exec(a))&&(n=r.shift(),s.push({value:n,type:r[0].replace(q," ")}),a=a.slice(n.length)),i.filter)!(r=Z[o].exec(a))||c[o]&&!(r=c[o](r))||(n=r.shift(),s.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return e?a.length:a?at.error(t):C(t,l).slice(0)},a=at.compile=function(t,e){var n,i=[],r=[],s=S[t+" "];if(!s){e||(e=o(t)),n=e.length;while(n--)s=Ct(e[n]),s[w]?i.push(s):r.push(s);s=S(t,St(r,i)),s.selector=t}return s},l=at.select=function(t,e,n,r){var s,l,c,u,h,d="function"===typeof t&&t,f=!r&&o(t=d.selector||t);if(n=n||[],1===f.length){if(l=f[0]=f[0].slice(0),l.length>2&&"ID"===(c=l[0]).type&&9===e.nodeType&&g&&i.relative[l[1].type]){if(e=(i.find["ID"](c.matches[0].replace(et,nt),e)||[])[0],!e)return n;d&&(e=e.parentNode),t=t.slice(l.shift().value.length)}s=Z["needsContext"].test(t)?0:l.length;while(s--){if(c=l[s],i.relative[u=c.type])break;if((h=i.find[u])&&(r=h(c.matches[0].replace(et,nt),tt.test(l[0].type)&&_t(e.parentNode)||e))){if(l.splice(s,1),t=r.length&&yt(l),!t)return L.apply(n,r),n;break}}}return(d||a(t,f))(r,e,!g,n,!e||tt.test(t)&&_t(e.parentNode)||e),n},n.sortStable=w.split("").sort(k).join("")===w,n.detectDuplicates=!!h,d(),n.sortDetached=ut((function(t){return 1&t.compareDocumentPosition(f.createElement("fieldset"))})),ut((function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")}))||ht("type|href|height|width",(function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)})),n.attributes&&ut((function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")}))||ht("value",(function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue})),ut((function(t){return null==t.getAttribute("disabled")}))||ht(M,(function(t,e,n){var i;if(!n)return!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null})),at}(r);C.find=I,C.expr=I.selectors,C.expr[":"]=C.expr.pseudos,C.uniqueSort=C.unique=I.uniqueSort,C.text=I.getText,C.isXMLDoc=I.isXML,C.contains=I.contains,C.escapeSelector=I.escape;var k=function(t,e,n){var i=[],r=void 0!==n;while((t=t[e])&&9!==t.nodeType)if(1===t.nodeType){if(r&&C(t).is(n))break;i.push(t)}return i},R=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},A=C.expr.match.needsContext;function O(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(t,e,n){return v(e)?C.grep(t,(function(t,i){return!!e.call(t,i,t)!==n})):e.nodeType?C.grep(t,(function(t){return t===e!==n})):"string"!==typeof e?C.grep(t,(function(t){return h.call(e,t)>-1!==n})):C.filter(e,t,n)}C.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?C.find.matchesSelector(i,t)?[i]:[]:C.find.matches(t,C.grep(e,(function(t){return 1===t.nodeType})))},C.fn.extend({find:function(t){var e,n,i=this.length,r=this;if("string"!==typeof t)return this.pushStack(C(t).filter((function(){for(e=0;e<i;e++)if(C.contains(r[e],this))return!0})));for(n=this.pushStack([]),e=0;e<i;e++)C.find(t,r[e],n);return i>1?C.uniqueSort(n):n},filter:function(t){return this.pushStack(L(this,t||[],!1))},not:function(t){return this.pushStack(L(this,t||[],!0))},is:function(t){return!!L(this,"string"===typeof t&&A.test(t)?C(t):t||[],!1).length}});var P,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,M=C.fn.init=function(t,e,n){var i,r;if(!t)return this;if(n=n||P,"string"===typeof t){if(i="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:N.exec(t),!i||!i[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(i[1]){if(e=e instanceof C?e[0]:e,C.merge(this,C.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:w,!0)),D.test(i[1])&&C.isPlainObject(e))for(i in e)v(this[i])?this[i](e[i]):this.attr(i,e[i]);return this}return r=w.getElementById(i[2]),r&&(this[0]=r,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):v(t)?void 0!==n.ready?n.ready(t):t(C):C.makeArray(t,this)};M.prototype=C.fn,P=C(w);var F=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function U(t,e){while((t=t[e])&&1!==t.nodeType);return t}C.fn.extend({has:function(t){var e=C(t,this),n=e.length;return this.filter((function(){for(var t=0;t<n;t++)if(C.contains(this,e[t]))return!0}))},closest:function(t,e){var n,i=0,r=this.length,s=[],o="string"!==typeof t&&C(t);if(!A.test(t))for(;i<r;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&C.find.matchesSelector(n,t))){s.push(n);break}return this.pushStack(s.length>1?C.uniqueSort(s):s)},index:function(t){return t?"string"===typeof t?h.call(C(t),this[0]):h.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(C.uniqueSort(C.merge(this.get(),C(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),C.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return k(t,"parentNode")},parentsUntil:function(t,e,n){return k(t,"parentNode",n)},next:function(t){return U(t,"nextSibling")},prev:function(t){return U(t,"previousSibling")},nextAll:function(t){return k(t,"nextSibling")},prevAll:function(t){return k(t,"previousSibling")},nextUntil:function(t,e,n){return k(t,"nextSibling",n)},prevUntil:function(t,e,n){return k(t,"previousSibling",n)},siblings:function(t){return R((t.parentNode||{}).firstChild,t)},children:function(t){return R(t.firstChild)},contents:function(t){return null!=t.contentDocument&&a(t.contentDocument)?t.contentDocument:(O(t,"template")&&(t=t.content||t),C.merge([],t.childNodes))}},(function(t,e){C.fn[t]=function(n,i){var r=C.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"===typeof i&&(r=C.filter(i,r)),this.length>1&&(j[t]||C.uniqueSort(r),F.test(t)&&r.reverse()),this.pushStack(r)}}));var V=/[^\x20\t\r\n\f]+/g;function B(t){var e={};return C.each(t.match(V)||[],(function(t,n){e[n]=!0})),e}function q(t){return t}function z(t){throw t}function G(t,e,n,i){var r;try{t&&v(r=t.promise)?r.call(t).done(e).fail(n):t&&v(r=t.then)?r.call(t,e,n):e.apply(void 0,[t].slice(i))}catch(t){n.apply(void 0,[t])}}C.Callbacks=function(t){t="string"===typeof t?B(t):C.extend({},t);var e,n,i,r,s=[],o=[],a=-1,l=function(){for(r=r||t.once,i=e=!0;o.length;a=-1){n=o.shift();while(++a<s.length)!1===s[a].apply(n[0],n[1])&&t.stopOnFalse&&(a=s.length,n=!1)}t.memory||(n=!1),e=!1,r&&(s=n?[]:"")},c={add:function(){return s&&(n&&!e&&(a=s.length-1,o.push(n)),function e(n){C.each(n,(function(n,i){v(i)?t.unique&&c.has(i)||s.push(i):i&&i.length&&"string"!==x(i)&&e(i)}))}(arguments),n&&!e&&l()),this},remove:function(){return C.each(arguments,(function(t,e){var n;while((n=C.inArray(e,s,n))>-1)s.splice(n,1),n<=a&&a--})),this},has:function(t){return t?C.inArray(t,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return r=o=[],s=n="",this},disabled:function(){return!s},lock:function(){return r=o=[],n||e||(s=n=""),this},locked:function(){return!!r},fireWith:function(t,n){return r||(n=n||[],n=[t,n.slice?n.slice():n],o.push(n),e||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},C.extend({Deferred:function(t){var e=[["notify","progress",C.Callbacks("memory"),C.Callbacks("memory"),2],["resolve","done",C.Callbacks("once memory"),C.Callbacks("once memory"),0,"resolved"],["reject","fail",C.Callbacks("once memory"),C.Callbacks("once memory"),1,"rejected"]],n="pending",i={state:function(){return n},always:function(){return s.done(arguments).fail(arguments),this},catch:function(t){return i.then(null,t)},pipe:function(){var t=arguments;return C.Deferred((function(n){C.each(e,(function(e,i){var r=v(t[i[4]])&&t[i[4]];s[i[1]]((function(){var t=r&&r.apply(this,arguments);t&&v(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,r?[t]:arguments)}))})),t=null})).promise()},then:function(t,n,i){var s=0;function o(t,e,n,i){return function(){var a=this,l=arguments,c=function(){var r,c;if(!(t<s)){if(r=n.apply(a,l),r===e.promise())throw new TypeError("Thenable self-resolution");c=r&&("object"===typeof r||"function"===typeof r)&&r.then,v(c)?i?c.call(r,o(s,e,q,i),o(s,e,z,i)):(s++,c.call(r,o(s,e,q,i),o(s,e,z,i),o(s,e,q,e.notifyWith))):(n!==q&&(a=void 0,l=[r]),(i||e.resolveWith)(a,l))}},u=i?c:function(){try{c()}catch(i){C.Deferred.exceptionHook&&C.Deferred.exceptionHook(i,u.stackTrace),t+1>=s&&(n!==z&&(a=void 0,l=[i]),e.rejectWith(a,l))}};t?u():(C.Deferred.getStackHook&&(u.stackTrace=C.Deferred.getStackHook()),r.setTimeout(u))}}return C.Deferred((function(r){e[0][3].add(o(0,r,v(i)?i:q,r.notifyWith)),e[1][3].add(o(0,r,v(t)?t:q)),e[2][3].add(o(0,r,v(n)?n:z))})).promise()},promise:function(t){return null!=t?C.extend(t,i):i}},s={};return C.each(e,(function(t,r){var o=r[2],a=r[5];i[r[1]]=o.add,a&&o.add((function(){n=a}),e[3-t][2].disable,e[3-t][3].disable,e[0][2].lock,e[0][3].lock),o.add(r[3].fire),s[r[0]]=function(){return s[r[0]+"With"](this===s?void 0:this,arguments),this},s[r[0]+"With"]=o.fireWith})),i.promise(s),t&&t.call(s,s),s},when:function(t){var e=arguments.length,n=e,i=Array(n),r=l.call(arguments),s=C.Deferred(),o=function(t){return function(n){i[t]=this,r[t]=arguments.length>1?l.call(arguments):n,--e||s.resolveWith(i,r)}};if(e<=1&&(G(t,s.done(o(n)).resolve,s.reject,!e),"pending"===s.state()||v(r[n]&&r[n].then)))return s.then();while(n--)G(r[n],o(n),s.reject);return s.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;C.Deferred.exceptionHook=function(t,e){r.console&&r.console.warn&&t&&W.test(t.name)&&r.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},C.readyException=function(t){r.setTimeout((function(){throw t}))};var H=C.Deferred();function $(){w.removeEventListener("DOMContentLoaded",$),r.removeEventListener("load",$),C.ready()}C.fn.ready=function(t){return H.then(t).catch((function(t){C.readyException(t)})),this},C.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--C.readyWait:C.isReady)||(C.isReady=!0,!0!==t&&--C.readyWait>0||H.resolveWith(w,[C]))}}),C.ready.then=H.then,"complete"===w.readyState||"loading"!==w.readyState&&!w.documentElement.doScroll?r.setTimeout(C.ready):(w.addEventListener("DOMContentLoaded",$),r.addEventListener("load",$));var Z=function(t,e,n,i,r,s,o){var a=0,l=t.length,c=null==n;if("object"===x(n))for(a in r=!0,n)Z(t,e,a,n[a],!0,s,o);else if(void 0!==i&&(r=!0,v(i)||(o=!0),c&&(o?(e.call(t,i),e=null):(c=e,e=function(t,e,n){return c.call(C(t),n)})),e))for(;a<l;a++)e(t[a],n,o?i:i.call(t[a],a,e(t[a],n)));return r?t:c?e.call(t):l?e(t[0],n):s},K=/^-ms-/,X=/-([a-z])/g;function Y(t,e){return e.toUpperCase()}function J(t){return t.replace(K,"ms-").replace(X,Y)}var Q=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function tt(){this.expando=C.expando+tt.uid++}tt.uid=1,tt.prototype={cache:function(t){var e=t[this.expando];return e||(e={},Q(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var i,r=this.cache(t);if("string"===typeof e)r[J(e)]=n;else for(i in e)r[J(i)]=e[i];return r},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][J(e)]},access:function(t,e,n){return void 0===e||e&&"string"===typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i=t[this.expando];if(void 0!==i){if(void 0!==e){Array.isArray(e)?e=e.map(J):(e=J(e),e=e in i?[e]:e.match(V)||[]),n=e.length;while(n--)delete i[e[n]]}(void 0===e||C.isEmptyObject(i))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!C.isEmptyObject(e)}};var et=new tt,nt=new tt,it=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rt=/[A-Z]/g;function st(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:it.test(t)?JSON.parse(t):t)}function ot(t,e,n){var i;if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(rt,"-$&").toLowerCase(),n=t.getAttribute(i),"string"===typeof n){try{n=st(n)}catch(r){}nt.set(t,e,n)}else n=void 0;return n}C.extend({hasData:function(t){return nt.hasData(t)||et.hasData(t)},data:function(t,e,n){return nt.access(t,e,n)},removeData:function(t,e){nt.remove(t,e)},_data:function(t,e,n){return et.access(t,e,n)},_removeData:function(t,e){et.remove(t,e)}}),C.fn.extend({data:function(t,e){var n,i,r,s=this[0],o=s&&s.attributes;if(void 0===t){if(this.length&&(r=nt.get(s),1===s.nodeType&&!et.get(s,"hasDataAttrs"))){n=o.length;while(n--)o[n]&&(i=o[n].name,0===i.indexOf("data-")&&(i=J(i.slice(5)),ot(s,i,r[i])));et.set(s,"hasDataAttrs",!0)}return r}return"object"===typeof t?this.each((function(){nt.set(this,t)})):Z(this,(function(e){var n;if(s&&void 0===e)return n=nt.get(s,t),void 0!==n?n:(n=ot(s,t),void 0!==n?n:void 0);this.each((function(){nt.set(this,t,e)}))}),null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each((function(){nt.remove(this,t)}))}}),C.extend({queue:function(t,e,n){var i;if(t)return e=(e||"fx")+"queue",i=et.get(t,e),n&&(!i||Array.isArray(n)?i=et.access(t,e,C.makeArray(n)):i.push(n)),i||[]},dequeue:function(t,e){e=e||"fx";var n=C.queue(t,e),i=n.length,r=n.shift(),s=C._queueHooks(t,e),o=function(){C.dequeue(t,e)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===e&&n.unshift("inprogress"),delete s.stop,r.call(t,o,s)),!i&&s&&s.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return et.get(t,n)||et.access(t,n,{empty:C.Callbacks("once memory").add((function(){et.remove(t,[e+"queue",n])}))})}}),C.fn.extend({queue:function(t,e){var n=2;return"string"!==typeof t&&(e=t,t="fx",n--),arguments.length<n?C.queue(this[0],t):void 0===e?this:this.each((function(){var n=C.queue(this,t,e);C._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&C.dequeue(this,t)}))},dequeue:function(t){return this.each((function(){C.dequeue(this,t)}))},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,r=C.Deferred(),s=this,o=this.length,a=function(){--i||r.resolveWith(s,[s])};"string"!==typeof t&&(e=t,t=void 0),t=t||"fx";while(o--)n=et.get(s[o],t+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(e)}});var at=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,lt=new RegExp("^(?:([+-])=|)("+at+")([a-z%]*)$","i"),ct=["Top","Right","Bottom","Left"],ut=w.documentElement,ht=function(t){return C.contains(t.ownerDocument,t)},dt={composed:!0};ut.getRootNode&&(ht=function(t){return C.contains(t.ownerDocument,t)||t.getRootNode(dt)===t.ownerDocument});var ft=function(t,e){return t=e||t,"none"===t.style.display||""===t.style.display&&ht(t)&&"none"===C.css(t,"display")};function pt(t,e,n,i){var r,s,o=20,a=i?function(){return i.cur()}:function(){return C.css(t,e,"")},l=a(),c=n&&n[3]||(C.cssNumber[e]?"":"px"),u=t.nodeType&&(C.cssNumber[e]||"px"!==c&&+l)&&lt.exec(C.css(t,e));if(u&&u[3]!==c){l/=2,c=c||u[3],u=+l||1;while(o--)C.style(t,e,u+c),(1-s)*(1-(s=a()/l||.5))<=0&&(o=0),u/=s;u*=2,C.style(t,e,u+c),n=n||[]}return n&&(u=+u||+l||0,r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=r)),r}var gt={};function mt(t){var e,n=t.ownerDocument,i=t.nodeName,r=gt[i];return r||(e=n.body.appendChild(n.createElement(i)),r=C.css(e,"display"),e.parentNode.removeChild(e),"none"===r&&(r="block"),gt[i]=r,r)}function _t(t,e){for(var n,i,r=[],s=0,o=t.length;s<o;s++)i=t[s],i.style&&(n=i.style.display,e?("none"===n&&(r[s]=et.get(i,"display")||null,r[s]||(i.style.display="")),""===i.style.display&&ft(i)&&(r[s]=mt(i))):"none"!==n&&(r[s]="none",et.set(i,"display",n)));for(s=0;s<o;s++)null!=r[s]&&(t[s].style.display=r[s]);return t}C.fn.extend({show:function(){return _t(this,!0)},hide:function(){return _t(this)},toggle:function(t){return"boolean"===typeof t?t?this.show():this.hide():this.each((function(){ft(this)?C(this).show():C(this).hide()}))}});var vt=/^(?:checkbox|radio)$/i,yt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,wt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var t=w.createDocumentFragment(),e=t.appendChild(w.createElement("div")),n=w.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),_.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",_.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,e.innerHTML="<option></option>",_.option=!!e.lastChild})();var bt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Et(t,e){var n;return n="undefined"!==typeof t.getElementsByTagName?t.getElementsByTagName(e||"*"):"undefined"!==typeof t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&O(t,e)?C.merge([t],n):n}function xt(t,e){for(var n=0,i=t.length;n<i;n++)et.set(t[n],"globalEval",!e||et.get(e[n],"globalEval"))}bt.tbody=bt.tfoot=bt.colgroup=bt.caption=bt.thead,bt.th=bt.td,_.option||(bt.optgroup=bt.option=[1,"<select multiple='multiple'>","</select>"]);var Tt=/<|&#?\w+;/;function Ct(t,e,n,i,r){for(var s,o,a,l,c,u,h=e.createDocumentFragment(),d=[],f=0,p=t.length;f<p;f++)if(s=t[f],s||0===s)if("object"===x(s))C.merge(d,s.nodeType?[s]:s);else if(Tt.test(s)){o=o||h.appendChild(e.createElement("div")),a=(yt.exec(s)||["",""])[1].toLowerCase(),l=bt[a]||bt._default,o.innerHTML=l[1]+C.htmlPrefilter(s)+l[2],u=l[0];while(u--)o=o.lastChild;C.merge(d,o.childNodes),o=h.firstChild,o.textContent=""}else d.push(e.createTextNode(s));h.textContent="",f=0;while(s=d[f++])if(i&&C.inArray(s,i)>-1)r&&r.push(s);else if(c=ht(s),o=Et(h.appendChild(s),"script"),c&&xt(o),n){u=0;while(s=o[u++])wt.test(s.type||"")&&n.push(s)}return h}var St=/^([^.]*)(?:\.(.+)|)/;function It(){return!0}function kt(){return!1}function Rt(t,e){return t===At()===("focus"===e)}function At(){try{return w.activeElement}catch(t){}}function Ot(t,e,n,i,r,s){var o,a;if("object"===typeof e){for(a in"string"!==typeof n&&(i=i||n,n=void 0),e)Ot(t,a,n,i,e[a],s);return t}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"===typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=kt;else if(!r)return t;return 1===s&&(o=r,r=function(t){return C().off(t),o.apply(this,arguments)},r.guid=o.guid||(o.guid=C.guid++)),t.each((function(){C.event.add(this,e,r,i,n)}))}function Dt(t,e,n){n?(et.set(t,e,!1),C.event.add(t,e,{namespace:!1,handler:function(t){var i,r,s=et.get(this,e);if(1&t.isTrigger&&this[e]){if(s.length)(C.event.special[e]||{}).delegateType&&t.stopPropagation();else if(s=l.call(arguments),et.set(this,e,s),i=n(this,e),this[e](),r=et.get(this,e),s!==r||i?et.set(this,e,!1):r={},s!==r)return t.stopImmediatePropagation(),t.preventDefault(),r&&r.value}else s.length&&(et.set(this,e,{value:C.event.trigger(C.extend(s[0],C.Event.prototype),s.slice(1),this)}),t.stopImmediatePropagation())}})):void 0===et.get(t,e)&&C.event.add(t,e,It)}C.event={global:{},add:function(t,e,n,i,r){var s,o,a,l,c,u,h,d,f,p,g,m=et.get(t);if(Q(t)){n.handler&&(s=n,n=s.handler,r=s.selector),r&&C.find.matchesSelector(ut,r),n.guid||(n.guid=C.guid++),(l=m.events)||(l=m.events=Object.create(null)),(o=m.handle)||(o=m.handle=function(e){return"undefined"!==typeof C&&C.event.triggered!==e.type?C.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(V)||[""],c=e.length;while(c--)a=St.exec(e[c])||[],f=g=a[1],p=(a[2]||"").split(".").sort(),f&&(h=C.event.special[f]||{},f=(r?h.delegateType:h.bindType)||f,h=C.event.special[f]||{},u=C.extend({type:f,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&C.expr.match.needsContext.test(r),namespace:p.join(".")},s),(d=l[f])||(d=l[f]=[],d.delegateCount=0,h.setup&&!1!==h.setup.call(t,i,p,o)||t.addEventListener&&t.addEventListener(f,o)),h.add&&(h.add.call(t,u),u.handler.guid||(u.handler.guid=n.guid)),r?d.splice(d.delegateCount++,0,u):d.push(u),C.event.global[f]=!0)}},remove:function(t,e,n,i,r){var s,o,a,l,c,u,h,d,f,p,g,m=et.hasData(t)&&et.get(t);if(m&&(l=m.events)){e=(e||"").match(V)||[""],c=e.length;while(c--)if(a=St.exec(e[c])||[],f=g=a[1],p=(a[2]||"").split(".").sort(),f){h=C.event.special[f]||{},f=(i?h.delegateType:h.bindType)||f,d=l[f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=d.length;while(s--)u=d[s],!r&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(d.splice(s,1),u.selector&&d.delegateCount--,h.remove&&h.remove.call(t,u));o&&!d.length&&(h.teardown&&!1!==h.teardown.call(t,p,m.handle)||C.removeEvent(t,f,m.handle),delete l[f])}else for(f in l)C.event.remove(t,f+e[c],n,i,!0);C.isEmptyObject(l)&&et.remove(t,"handle events")}},dispatch:function(t){var e,n,i,r,s,o,a=new Array(arguments.length),l=C.event.fix(t),c=(et.get(this,"events")||Object.create(null))[l.type]||[],u=C.event.special[l.type]||{};for(a[0]=l,e=1;e<arguments.length;e++)a[e]=arguments[e];if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){o=C.event.handlers.call(this,l,c),e=0;while((r=o[e++])&&!l.isPropagationStopped()){l.currentTarget=r.elem,n=0;while((s=r.handlers[n++])&&!l.isImmediatePropagationStopped())l.rnamespace&&!1!==s.namespace&&!l.rnamespace.test(s.namespace)||(l.handleObj=s,l.data=s.data,i=((C.event.special[s.origType]||{}).handle||s.handler).apply(r.elem,a),void 0!==i&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()))}return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(t,e){var n,i,r,s,o,a=[],l=e.delegateCount,c=t.target;if(l&&c.nodeType&&!("click"===t.type&&t.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(s=[],o={},n=0;n<l;n++)i=e[n],r=i.selector+" ",void 0===o[r]&&(o[r]=i.needsContext?C(r,this).index(c)>-1:C.find(r,this,null,[c]).length),o[r]&&s.push(i);s.length&&a.push({elem:c,handlers:s})}return c=this,l<e.length&&a.push({elem:c,handlers:e.slice(l)}),a},addProp:function(t,e){Object.defineProperty(C.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[C.expando]?t:new C.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var e=this||t;return vt.test(e.type)&&e.click&&O(e,"input")&&Dt(e,"click",It),!1},trigger:function(t){var e=this||t;return vt.test(e.type)&&e.click&&O(e,"input")&&Dt(e,"click"),!0},_default:function(t){var e=t.target;return vt.test(e.type)&&e.click&&O(e,"input")&&et.get(e,"click")||O(e,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},C.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},C.Event=function(t,e){if(!(this instanceof C.Event))return new C.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?It:kt,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&C.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[C.expando]=!0},C.Event.prototype={constructor:C.Event,isDefaultPrevented:kt,isPropagationStopped:kt,isImmediatePropagationStopped:kt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=It,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=It,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=It,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},C.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},C.event.addProp),C.each({focus:"focusin",blur:"focusout"},(function(t,e){C.event.special[t]={setup:function(){return Dt(this,t,Rt),!1},trigger:function(){return Dt(this,t),!0},_default:function(e){return et.get(e.target,t)},delegateType:e}})),C.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(t,e){C.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,r=t.relatedTarget,s=t.handleObj;return r&&(r===i||C.contains(i,r))||(t.type=s.origType,n=s.handler.apply(this,arguments),t.type=e),n}}})),C.fn.extend({on:function(t,e,n,i){return Ot(this,t,e,n,i)},one:function(t,e,n,i){return Ot(this,t,e,n,i,1)},off:function(t,e,n){var i,r;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,C(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"===typeof t){for(r in t)this.off(r,e,t[r]);return this}return!1!==e&&"function"!==typeof e||(n=e,e=void 0),!1===n&&(n=kt),this.each((function(){C.event.remove(this,t,n,e)}))}});var Lt=/<script|<style|<link/i,Pt=/checked\s*(?:[^=]|=\s*.checked.)/i,Nt=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Mt(t,e){return O(t,"table")&&O(11!==e.nodeType?e:e.firstChild,"tr")&&C(t).children("tbody")[0]||t}function Ft(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function jt(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Ut(t,e){var n,i,r,s,o,a,l;if(1===e.nodeType){if(et.hasData(t)&&(s=et.get(t),l=s.events,l))for(r in et.remove(e,"handle events"),l)for(n=0,i=l[r].length;n<i;n++)C.event.add(e,r,l[r][n]);nt.hasData(t)&&(o=nt.access(t),a=C.extend({},o),nt.set(e,a))}}function Vt(t,e){var n=e.nodeName.toLowerCase();"input"===n&&vt.test(t.type)?e.checked=t.checked:"input"!==n&&"textarea"!==n||(e.defaultValue=t.defaultValue)}function Bt(t,e,n,i){e=c(e);var r,s,o,a,l,u,h=0,d=t.length,f=d-1,p=e[0],g=v(p);if(g||d>1&&"string"===typeof p&&!_.checkClone&&Pt.test(p))return t.each((function(r){var s=t.eq(r);g&&(e[0]=p.call(this,r,s.html())),Bt(s,e,n,i)}));if(d&&(r=Ct(e,t[0].ownerDocument,!1,t,i),s=r.firstChild,1===r.childNodes.length&&(r=s),s||i)){for(o=C.map(Et(r,"script"),Ft),a=o.length;h<d;h++)l=r,h!==f&&(l=C.clone(l,!0,!0),a&&C.merge(o,Et(l,"script"))),n.call(t[h],l,h);if(a)for(u=o[o.length-1].ownerDocument,C.map(o,jt),h=0;h<a;h++)l=o[h],wt.test(l.type||"")&&!et.access(l,"globalEval")&&C.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?C._evalUrl&&!l.noModule&&C._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},u):E(l.textContent.replace(Nt,""),l,u))}return t}function qt(t,e,n){for(var i,r=e?C.filter(e,t):t,s=0;null!=(i=r[s]);s++)n||1!==i.nodeType||C.cleanData(Et(i)),i.parentNode&&(n&&ht(i)&&xt(Et(i,"script")),i.parentNode.removeChild(i));return t}C.extend({htmlPrefilter:function(t){return t},clone:function(t,e,n){var i,r,s,o,a=t.cloneNode(!0),l=ht(t);if(!_.noCloneChecked&&(1===t.nodeType||11===t.nodeType)&&!C.isXMLDoc(t))for(o=Et(a),s=Et(t),i=0,r=s.length;i<r;i++)Vt(s[i],o[i]);if(e)if(n)for(s=s||Et(t),o=o||Et(a),i=0,r=s.length;i<r;i++)Ut(s[i],o[i]);else Ut(t,a);return o=Et(a,"script"),o.length>0&&xt(o,!l&&Et(t,"script")),a},cleanData:function(t){for(var e,n,i,r=C.event.special,s=0;void 0!==(n=t[s]);s++)if(Q(n)){if(e=n[et.expando]){if(e.events)for(i in e.events)r[i]?C.event.remove(n,i):C.removeEvent(n,i,e.handle);n[et.expando]=void 0}n[nt.expando]&&(n[nt.expando]=void 0)}}}),C.fn.extend({detach:function(t){return qt(this,t,!0)},remove:function(t){return qt(this,t)},text:function(t){return Z(this,(function(t){return void 0===t?C.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)}))}),null,t,arguments.length)},append:function(){return Bt(this,arguments,(function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Mt(this,t);e.appendChild(t)}}))},prepend:function(){return Bt(this,arguments,(function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Mt(this,t);e.insertBefore(t,e.firstChild)}}))},before:function(){return Bt(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this)}))},after:function(){return Bt(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)}))},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(C.cleanData(Et(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map((function(){return C.clone(this,t,e)}))},html:function(t){return Z(this,(function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"===typeof t&&!Lt.test(t)&&!bt[(yt.exec(t)||["",""])[1].toLowerCase()]){t=C.htmlPrefilter(t);try{for(;n<i;n++)e=this[n]||{},1===e.nodeType&&(C.cleanData(Et(e,!1)),e.innerHTML=t);e=0}catch(r){}}e&&this.empty().append(t)}),null,t,arguments.length)},replaceWith:function(){var t=[];return Bt(this,arguments,(function(e){var n=this.parentNode;C.inArray(this,t)<0&&(C.cleanData(Et(this)),n&&n.replaceChild(e,this))}),t)}}),C.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(t,e){C.fn[t]=function(t){for(var n,i=[],r=C(t),s=r.length-1,o=0;o<=s;o++)n=o===s?this:this.clone(!0),C(r[o])[e](n),u.apply(i,n.get());return this.pushStack(i)}}));var zt=new RegExp("^("+at+")(?!px)[a-z%]+$","i"),Gt=/^--/,Wt=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=r),e.getComputedStyle(t)},Ht=function(t,e,n){var i,r,s={};for(r in e)s[r]=t.style[r],t.style[r]=e[r];for(r in i=n.call(t),e)t.style[r]=s[r];return i},$t=new RegExp(ct.join("|"),"i"),Zt="[\\x20\\t\\r\\n\\f]",Kt=new RegExp("^"+Zt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Zt+"+$","g");function Xt(t,e,n){var i,r,s,o,a=Gt.test(e),l=t.style;return n=n||Wt(t),n&&(o=n.getPropertyValue(e)||n[e],a&&o&&(o=o.replace(Kt,"$1")||void 0),""!==o||ht(t)||(o=C.style(t,e)),!_.pixelBoxStyles()&&zt.test(o)&&$t.test(e)&&(i=l.width,r=l.minWidth,s=l.maxWidth,l.minWidth=l.maxWidth=l.width=o,o=n.width,l.width=i,l.minWidth=r,l.maxWidth=s)),void 0!==o?o+"":o}function Yt(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}(function(){function t(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ut.appendChild(c).appendChild(u);var t=r.getComputedStyle(u);n="1%"!==t.top,l=12===e(t.marginLeft),u.style.right="60%",o=36===e(t.right),i=36===e(t.width),u.style.position="absolute",s=12===e(u.offsetWidth/3),ut.removeChild(c),u=null}}function e(t){return Math.round(parseFloat(t))}var n,i,s,o,a,l,c=w.createElement("div"),u=w.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",_.clearCloneStyle="content-box"===u.style.backgroundClip,C.extend(_,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),o},pixelPosition:function(){return t(),n},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),s},reliableTrDimensions:function(){var t,e,n,i;return null==a&&(t=w.createElement("table"),e=w.createElement("tr"),n=w.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",e.style.cssText="border:1px solid",e.style.height="1px",n.style.height="9px",n.style.display="block",ut.appendChild(t).appendChild(e).appendChild(n),i=r.getComputedStyle(e),a=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===e.offsetHeight,ut.removeChild(t)),a}}))})();var Jt=["Webkit","Moz","ms"],Qt=w.createElement("div").style,te={};function ee(t){var e=t[0].toUpperCase()+t.slice(1),n=Jt.length;while(n--)if(t=Jt[n]+e,t in Qt)return t}function ne(t){var e=C.cssProps[t]||te[t];return e||(t in Qt?t:te[t]=ee(t)||t)}var ie=/^(none|table(?!-c[ea]).+)/,re={position:"absolute",visibility:"hidden",display:"block"},se={letterSpacing:"0",fontWeight:"400"};function oe(t,e,n){var i=lt.exec(e);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):e}function ae(t,e,n,i,r,s){var o="width"===e?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;o<4;o+=2)"margin"===n&&(l+=C.css(t,n+ct[o],!0,r)),i?("content"===n&&(l-=C.css(t,"padding"+ct[o],!0,r)),"margin"!==n&&(l-=C.css(t,"border"+ct[o]+"Width",!0,r))):(l+=C.css(t,"padding"+ct[o],!0,r),"padding"!==n?l+=C.css(t,"border"+ct[o]+"Width",!0,r):a+=C.css(t,"border"+ct[o]+"Width",!0,r));return!i&&s>=0&&(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-s-l-a-.5))||0),l}function le(t,e,n){var i=Wt(t),r=!_.boxSizingReliable()||n,s=r&&"border-box"===C.css(t,"boxSizing",!1,i),o=s,a=Xt(t,e,i),l="offset"+e[0].toUpperCase()+e.slice(1);if(zt.test(a)){if(!n)return a;a="auto"}return(!_.boxSizingReliable()&&s||!_.reliableTrDimensions()&&O(t,"tr")||"auto"===a||!parseFloat(a)&&"inline"===C.css(t,"display",!1,i))&&t.getClientRects().length&&(s="border-box"===C.css(t,"boxSizing",!1,i),o=l in t,o&&(a=t[l])),a=parseFloat(a)||0,a+ae(t,e,n||(s?"border":"content"),o,i,a)+"px"}function ce(t,e,n,i,r){return new ce.prototype.init(t,e,n,i,r)}C.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=Xt(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var r,s,o,a=J(e),l=Gt.test(e),c=t.style;if(l||(e=ne(a)),o=C.cssHooks[e]||C.cssHooks[a],void 0===n)return o&&"get"in o&&void 0!==(r=o.get(t,!1,i))?r:c[e];s=typeof n,"string"===s&&(r=lt.exec(n))&&r[1]&&(n=pt(t,e,r),s="number"),null!=n&&n===n&&("number"!==s||l||(n+=r&&r[3]||(C.cssNumber[a]?"":"px")),_.clearCloneStyle||""!==n||0!==e.indexOf("background")||(c[e]="inherit"),o&&"set"in o&&void 0===(n=o.set(t,n,i))||(l?c.setProperty(e,n):c[e]=n))}},css:function(t,e,n,i){var r,s,o,a=J(e),l=Gt.test(e);return l||(e=ne(a)),o=C.cssHooks[e]||C.cssHooks[a],o&&"get"in o&&(r=o.get(t,!0,n)),void 0===r&&(r=Xt(t,e,i)),"normal"===r&&e in se&&(r=se[e]),""===n||n?(s=parseFloat(r),!0===n||isFinite(s)?s||0:r):r}}),C.each(["height","width"],(function(t,e){C.cssHooks[e]={get:function(t,n,i){if(n)return!ie.test(C.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?le(t,e,i):Ht(t,re,(function(){return le(t,e,i)}))},set:function(t,n,i){var r,s=Wt(t),o=!_.scrollboxSize()&&"absolute"===s.position,a=o||i,l=a&&"border-box"===C.css(t,"boxSizing",!1,s),c=i?ae(t,e,i,l,s):0;return l&&o&&(c-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(s[e])-ae(t,e,"border",!1,s)-.5)),c&&(r=lt.exec(n))&&"px"!==(r[3]||"px")&&(t.style[e]=n,n=C.css(t,e)),oe(t,n,c)}}})),C.cssHooks.marginLeft=Yt(_.reliableMarginLeft,(function(t,e){if(e)return(parseFloat(Xt(t,"marginLeft"))||t.getBoundingClientRect().left-Ht(t,{marginLeft:0},(function(){return t.getBoundingClientRect().left})))+"px"})),C.each({margin:"",padding:"",border:"Width"},(function(t,e){C.cssHooks[t+e]={expand:function(n){for(var i=0,r={},s="string"===typeof n?n.split(" "):[n];i<4;i++)r[t+ct[i]+e]=s[i]||s[i-2]||s[0];return r}},"margin"!==t&&(C.cssHooks[t+e].set=oe)})),C.fn.extend({css:function(t,e){return Z(this,(function(t,e,n){var i,r,s={},o=0;if(Array.isArray(e)){for(i=Wt(t),r=e.length;o<r;o++)s[e[o]]=C.css(t,e[o],!1,i);return s}return void 0!==n?C.style(t,e,n):C.css(t,e)}),t,e,arguments.length>1)}}),C.Tween=ce,ce.prototype={constructor:ce,init:function(t,e,n,i,r,s){this.elem=t,this.prop=n,this.easing=r||C.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=s||(C.cssNumber[n]?"":"px")},cur:function(){var t=ce.propHooks[this.prop];return t&&t.get?t.get(this):ce.propHooks._default.get(this)},run:function(t){var e,n=ce.propHooks[this.prop];return this.options.duration?this.pos=e=C.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ce.propHooks._default.set(this),this}},ce.prototype.init.prototype=ce.prototype,ce.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=C.css(t.elem,t.prop,""),e&&"auto"!==e?e:0)},set:function(t){C.fx.step[t.prop]?C.fx.step[t.prop](t):1!==t.elem.nodeType||!C.cssHooks[t.prop]&&null==t.elem.style[ne(t.prop)]?t.elem[t.prop]=t.now:C.style(t.elem,t.prop,t.now+t.unit)}}},ce.propHooks.scrollTop=ce.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},C.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},C.fx=ce.prototype.init,C.fx.step={};var ue,he,de=/^(?:toggle|show|hide)$/,fe=/queueHooks$/;function pe(){he&&(!1===w.hidden&&r.requestAnimationFrame?r.requestAnimationFrame(pe):r.setTimeout(pe,C.fx.interval),C.fx.tick())}function ge(){return r.setTimeout((function(){ue=void 0})),ue=Date.now()}function me(t,e){var n,i=0,r={height:t};for(e=e?1:0;i<4;i+=2-e)n=ct[i],r["margin"+n]=r["padding"+n]=t;return e&&(r.opacity=r.width=t),r}function _e(t,e,n){for(var i,r=(we.tweeners[e]||[]).concat(we.tweeners["*"]),s=0,o=r.length;s<o;s++)if(i=r[s].call(n,e,t))return i}function ve(t,e,n){var i,r,s,o,a,l,c,u,h="width"in e||"height"in e,d=this,f={},p=t.style,g=t.nodeType&&ft(t),m=et.get(t,"fxshow");for(i in n.queue||(o=C._queueHooks(t,"fx"),null==o.unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,d.always((function(){d.always((function(){o.unqueued--,C.queue(t,"fx").length||o.empty.fire()}))}))),e)if(r=e[i],de.test(r)){if(delete e[i],s=s||"toggle"===r,r===(g?"hide":"show")){if("show"!==r||!m||void 0===m[i])continue;g=!0}f[i]=m&&m[i]||C.style(t,i)}if(l=!C.isEmptyObject(e),l||!C.isEmptyObject(f))for(i in h&&1===t.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],c=m&&m.display,null==c&&(c=et.get(t,"display")),u=C.css(t,"display"),"none"===u&&(c?u=c:(_t([t],!0),c=t.style.display||c,u=C.css(t,"display"),_t([t]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===C.css(t,"float")&&(l||(d.done((function(){p.display=c})),null==c&&(u=p.display,c="none"===u?"":u)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always((function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}))),l=!1,f)l||(m?"hidden"in m&&(g=m.hidden):m=et.access(t,"fxshow",{display:c}),s&&(m.hidden=!g),g&&_t([t],!0),d.done((function(){for(i in g||_t([t]),et.remove(t,"fxshow"),f)C.style(t,i,f[i])}))),l=_e(g?m[i]:0,i,d),i in m||(m[i]=l.start,g&&(l.end=l.start,l.start=0))}function ye(t,e){var n,i,r,s,o;for(n in t)if(i=J(n),r=e[i],s=t[n],Array.isArray(s)&&(r=s[1],s=t[n]=s[0]),n!==i&&(t[i]=s,delete t[n]),o=C.cssHooks[i],o&&"expand"in o)for(n in s=o.expand(s),delete t[i],s)n in t||(t[n]=s[n],e[n]=r);else e[i]=r}function we(t,e,n){var i,r,s=0,o=we.prefilters.length,a=C.Deferred().always((function(){delete l.elem})),l=function(){if(r)return!1;for(var e=ue||ge(),n=Math.max(0,c.startTime+c.duration-e),i=n/c.duration||0,s=1-i,o=0,l=c.tweens.length;o<l;o++)c.tweens[o].run(s);return a.notifyWith(t,[c,s,n]),s<1&&l?n:(l||a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c]),!1)},c=a.promise({elem:t,props:C.extend({},e),opts:C.extend(!0,{specialEasing:{},easing:C.easing._default},n),originalProperties:e,originalOptions:n,startTime:ue||ge(),duration:n.duration,tweens:[],createTween:function(e,n){var i=C.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(i),i},stop:function(e){var n=0,i=e?c.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)c.tweens[n].run(1);return e?(a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c,e])):a.rejectWith(t,[c,e]),this}}),u=c.props;for(ye(u,c.opts.specialEasing);s<o;s++)if(i=we.prefilters[s].call(c,t,u,c.opts),i)return v(i.stop)&&(C._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return C.map(u,_e,c),v(c.opts.start)&&c.opts.start.call(t,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),C.fx.timer(C.extend(l,{elem:t,anim:c,queue:c.opts.queue})),c}C.Animation=C.extend(we,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return pt(n.elem,t,lt.exec(e),n),n}]},tweener:function(t,e){v(t)?(e=t,t=["*"]):t=t.match(V);for(var n,i=0,r=t.length;i<r;i++)n=t[i],we.tweeners[n]=we.tweeners[n]||[],we.tweeners[n].unshift(e)},prefilters:[ve],prefilter:function(t,e){e?we.prefilters.unshift(t):we.prefilters.push(t)}}),C.speed=function(t,e,n){var i=t&&"object"===typeof t?C.extend({},t):{complete:n||!n&&e||v(t)&&t,duration:t,easing:n&&e||e&&!v(e)&&e};return C.fx.off?i.duration=0:"number"!==typeof i.duration&&(i.duration in C.fx.speeds?i.duration=C.fx.speeds[i.duration]:i.duration=C.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){v(i.old)&&i.old.call(this),i.queue&&C.dequeue(this,i.queue)},i},C.fn.extend({fadeTo:function(t,e,n,i){return this.filter(ft).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var r=C.isEmptyObject(t),s=C.speed(e,n,i),o=function(){var e=we(this,C.extend({},t),s);(r||et.get(this,"finish"))&&e.stop(!0)};return o.finish=o,r||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!==typeof t&&(n=e,e=t,t=void 0),e&&this.queue(t||"fx",[]),this.each((function(){var e=!0,r=null!=t&&t+"queueHooks",s=C.timers,o=et.get(this);if(r)o[r]&&o[r].stop&&i(o[r]);else for(r in o)o[r]&&o[r].stop&&fe.test(r)&&i(o[r]);for(r=s.length;r--;)s[r].elem!==this||null!=t&&s[r].queue!==t||(s[r].anim.stop(n),e=!1,s.splice(r,1));!e&&n||C.dequeue(this,t)}))},finish:function(t){return!1!==t&&(t=t||"fx"),this.each((function(){var e,n=et.get(this),i=n[t+"queue"],r=n[t+"queueHooks"],s=C.timers,o=i?i.length:0;for(n.finish=!0,C.queue(this,t,[]),r&&r.stop&&r.stop.call(this,!0),e=s.length;e--;)s[e].elem===this&&s[e].queue===t&&(s[e].anim.stop(!0),s.splice(e,1));for(e=0;e<o;e++)i[e]&&i[e].finish&&i[e].finish.call(this);delete n.finish}))}}),C.each(["toggle","show","hide"],(function(t,e){var n=C.fn[e];C.fn[e]=function(t,i,r){return null==t||"boolean"===typeof t?n.apply(this,arguments):this.animate(me(e,!0),t,i,r)}})),C.each({slideDown:me("show"),slideUp:me("hide"),slideToggle:me("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(t,e){C.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}})),C.timers=[],C.fx.tick=function(){var t,e=0,n=C.timers;for(ue=Date.now();e<n.length;e++)t=n[e],t()||n[e]!==t||n.splice(e--,1);n.length||C.fx.stop(),ue=void 0},C.fx.timer=function(t){C.timers.push(t),C.fx.start()},C.fx.interval=13,C.fx.start=function(){he||(he=!0,pe())},C.fx.stop=function(){he=null},C.fx.speeds={slow:600,fast:200,_default:400},C.fn.delay=function(t,e){return t=C.fx&&C.fx.speeds[t]||t,e=e||"fx",this.queue(e,(function(e,n){var i=r.setTimeout(e,t);n.stop=function(){r.clearTimeout(i)}}))},function(){var t=w.createElement("input"),e=w.createElement("select"),n=e.appendChild(w.createElement("option"));t.type="checkbox",_.checkOn=""!==t.value,_.optSelected=n.selected,t=w.createElement("input"),t.value="t",t.type="radio",_.radioValue="t"===t.value}();var be,Ee=C.expr.attrHandle;C.fn.extend({attr:function(t,e){return Z(this,C.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each((function(){C.removeAttr(this,t)}))}}),C.extend({attr:function(t,e,n){var i,r,s=t.nodeType;if(3!==s&&8!==s&&2!==s)return"undefined"===typeof t.getAttribute?C.prop(t,e,n):(1===s&&C.isXMLDoc(t)||(r=C.attrHooks[e.toLowerCase()]||(C.expr.match.bool.test(e)?be:void 0)),void 0!==n?null===n?void C.removeAttr(t,e):r&&"set"in r&&void 0!==(i=r.set(t,n,e))?i:(t.setAttribute(e,n+""),n):r&&"get"in r&&null!==(i=r.get(t,e))?i:(i=C.find.attr(t,e),null==i?void 0:i))},attrHooks:{type:{set:function(t,e){if(!_.radioValue&&"radio"===e&&O(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i=0,r=e&&e.match(V);if(r&&1===t.nodeType)while(n=r[i++])t.removeAttribute(n)}}),be={set:function(t,e,n){return!1===e?C.removeAttr(t,n):t.setAttribute(n,n),n}},C.each(C.expr.match.bool.source.match(/\w+/g),(function(t,e){var n=Ee[e]||C.find.attr;Ee[e]=function(t,e,i){var r,s,o=e.toLowerCase();return i||(s=Ee[o],Ee[o]=r,r=null!=n(t,e,i)?o:null,Ee[o]=s),r}}));var xe=/^(?:input|select|textarea|button)$/i,Te=/^(?:a|area)$/i;function Ce(t){var e=t.match(V)||[];return e.join(" ")}function Se(t){return t.getAttribute&&t.getAttribute("class")||""}function Ie(t){return Array.isArray(t)?t:"string"===typeof t&&t.match(V)||[]}C.fn.extend({prop:function(t,e){return Z(this,C.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each((function(){delete this[C.propFix[t]||t]}))}}),C.extend({prop:function(t,e,n){var i,r,s=t.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&C.isXMLDoc(t)||(e=C.propFix[e]||e,r=C.propHooks[e]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(t,n,e))?i:t[e]=n:r&&"get"in r&&null!==(i=r.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){var e=C.find.attr(t,"tabindex");return e?parseInt(e,10):xe.test(t.nodeName)||Te.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),_.optSelected||(C.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){C.propFix[this.toLowerCase()]=this})),C.fn.extend({addClass:function(t){var e,n,i,r,s,o;return v(t)?this.each((function(e){C(this).addClass(t.call(this,e,Se(this)))})):(e=Ie(t),e.length?this.each((function(){if(i=Se(this),n=1===this.nodeType&&" "+Ce(i)+" ",n){for(s=0;s<e.length;s++)r=e[s],n.indexOf(" "+r+" ")<0&&(n+=r+" ");o=Ce(n),i!==o&&this.setAttribute("class",o)}})):this)},removeClass:function(t){var e,n,i,r,s,o;return v(t)?this.each((function(e){C(this).removeClass(t.call(this,e,Se(this)))})):arguments.length?(e=Ie(t),e.length?this.each((function(){if(i=Se(this),n=1===this.nodeType&&" "+Ce(i)+" ",n){for(s=0;s<e.length;s++){r=e[s];while(n.indexOf(" "+r+" ")>-1)n=n.replace(" "+r+" "," ")}o=Ce(n),i!==o&&this.setAttribute("class",o)}})):this):this.attr("class","")},toggleClass:function(t,e){var n,i,r,s,o=typeof t,a="string"===o||Array.isArray(t);return v(t)?this.each((function(n){C(this).toggleClass(t.call(this,n,Se(this),e),e)})):"boolean"===typeof e&&a?e?this.addClass(t):this.removeClass(t):(n=Ie(t),this.each((function(){if(a)for(s=C(this),r=0;r<n.length;r++)i=n[r],s.hasClass(i)?s.removeClass(i):s.addClass(i);else void 0!==t&&"boolean"!==o||(i=Se(this),i&&et.set(this,"__className__",i),this.setAttribute&&this.setAttribute("class",i||!1===t?"":et.get(this,"__className__")||""))})))},hasClass:function(t){var e,n,i=0;e=" "+t+" ";while(n=this[i++])if(1===n.nodeType&&(" "+Ce(Se(n))+" ").indexOf(e)>-1)return!0;return!1}});var ke=/\r/g;C.fn.extend({val:function(t){var e,n,i,r=this[0];return arguments.length?(i=v(t),this.each((function(n){var r;1===this.nodeType&&(r=i?t.call(this,n,C(this).val()):t,null==r?r="":"number"===typeof r?r+="":Array.isArray(r)&&(r=C.map(r,(function(t){return null==t?"":t+""}))),e=C.valHooks[this.type]||C.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,r,"value")||(this.value=r))}))):r?(e=C.valHooks[r.type]||C.valHooks[r.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(r,"value"))?n:(n=r.value,"string"===typeof n?n.replace(ke,""):null==n?"":n)):void 0}}),C.extend({valHooks:{option:{get:function(t){var e=C.find.attr(t,"value");return null!=e?e:Ce(C.text(t))}},select:{get:function(t){var e,n,i,r=t.options,s=t.selectedIndex,o="select-one"===t.type,a=o?null:[],l=o?s+1:r.length;for(i=s<0?l:o?s:0;i<l;i++)if(n=r[i],(n.selected||i===s)&&!n.disabled&&(!n.parentNode.disabled||!O(n.parentNode,"optgroup"))){if(e=C(n).val(),o)return e;a.push(e)}return a},set:function(t,e){var n,i,r=t.options,s=C.makeArray(e),o=r.length;while(o--)i=r[o],(i.selected=C.inArray(C.valHooks.option.get(i),s)>-1)&&(n=!0);return n||(t.selectedIndex=-1),s}}}}),C.each(["radio","checkbox"],(function(){C.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=C.inArray(C(t).val(),e)>-1}},_.checkOn||(C.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})})),_.focusin="onfocusin"in r;var Re=/^(?:focusinfocus|focusoutblur)$/,Ae=function(t){t.stopPropagation()};C.extend(C.event,{trigger:function(t,e,n,i){var s,o,a,l,c,u,h,d,f=[n||w],g=p.call(t,"type")?t.type:t,m=p.call(t,"namespace")?t.namespace.split("."):[];if(o=d=a=n=n||w,3!==n.nodeType&&8!==n.nodeType&&!Re.test(g+C.event.triggered)&&(g.indexOf(".")>-1&&(m=g.split("."),g=m.shift(),m.sort()),c=g.indexOf(":")<0&&"on"+g,t=t[C.expando]?t:new C.Event(g,"object"===typeof t&&t),t.isTrigger=i?2:3,t.namespace=m.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=n),e=null==e?[t]:C.makeArray(e,[t]),h=C.event.special[g]||{},i||!h.trigger||!1!==h.trigger.apply(n,e))){if(!i&&!h.noBubble&&!y(n)){for(l=h.delegateType||g,Re.test(l+g)||(o=o.parentNode);o;o=o.parentNode)f.push(o),a=o;a===(n.ownerDocument||w)&&f.push(a.defaultView||a.parentWindow||r)}s=0;while((o=f[s++])&&!t.isPropagationStopped())d=o,t.type=s>1?l:h.bindType||g,u=(et.get(o,"events")||Object.create(null))[t.type]&&et.get(o,"handle"),u&&u.apply(o,e),u=c&&o[c],u&&u.apply&&Q(o)&&(t.result=u.apply(o,e),!1===t.result&&t.preventDefault());return t.type=g,i||t.isDefaultPrevented()||h._default&&!1!==h._default.apply(f.pop(),e)||!Q(n)||c&&v(n[g])&&!y(n)&&(a=n[c],a&&(n[c]=null),C.event.triggered=g,t.isPropagationStopped()&&d.addEventListener(g,Ae),n[g](),t.isPropagationStopped()&&d.removeEventListener(g,Ae),C.event.triggered=void 0,a&&(n[c]=a)),t.result}},simulate:function(t,e,n){var i=C.extend(new C.Event,n,{type:t,isSimulated:!0});C.event.trigger(i,null,e)}}),C.fn.extend({trigger:function(t,e){return this.each((function(){C.event.trigger(t,e,this)}))},triggerHandler:function(t,e){var n=this[0];if(n)return C.event.trigger(t,e,n,!0)}}),_.focusin||C.each({focus:"focusin",blur:"focusout"},(function(t,e){var n=function(t){C.event.simulate(e,t.target,C.event.fix(t))};C.event.special[e]={setup:function(){var i=this.ownerDocument||this.document||this,r=et.access(i,e);r||i.addEventListener(t,n,!0),et.access(i,e,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,r=et.access(i,e)-1;r?et.access(i,e,r):(i.removeEventListener(t,n,!0),et.remove(i,e))}}}));var Oe=r.location,De={guid:Date.now()},Le=/\?/;C.parseXML=function(t){var e,n;if(!t||"string"!==typeof t)return null;try{e=(new r.DOMParser).parseFromString(t,"text/xml")}catch(i){}return n=e&&e.getElementsByTagName("parsererror")[0],e&&!n||C.error("Invalid XML: "+(n?C.map(n.childNodes,(function(t){return t.textContent})).join("\n"):t)),e};var Pe=/\[\]$/,Ne=/\r?\n/g,Me=/^(?:submit|button|image|reset|file)$/i,Fe=/^(?:input|select|textarea|keygen)/i;function je(t,e,n,i){var r;if(Array.isArray(e))C.each(e,(function(e,r){n||Pe.test(t)?i(t,r):je(t+"["+("object"===typeof r&&null!=r?e:"")+"]",r,n,i)}));else if(n||"object"!==x(e))i(t,e);else for(r in e)je(t+"["+r+"]",e[r],n,i)}C.param=function(t,e){var n,i=[],r=function(t,e){var n=v(e)?e():e;i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(null==t)return"";if(Array.isArray(t)||t.jquery&&!C.isPlainObject(t))C.each(t,(function(){r(this.name,this.value)}));else for(n in t)je(n,t[n],e,r);return i.join("&")},C.fn.extend({serialize:function(){return C.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var t=C.prop(this,"elements");return t?C.makeArray(t):this})).filter((function(){var t=this.type;return this.name&&!C(this).is(":disabled")&&Fe.test(this.nodeName)&&!Me.test(t)&&(this.checked||!vt.test(t))})).map((function(t,e){var n=C(this).val();return null==n?null:Array.isArray(n)?C.map(n,(function(t){return{name:e.name,value:t.replace(Ne,"\r\n")}})):{name:e.name,value:n.replace(Ne,"\r\n")}})).get()}});var Ue=/%20/g,Ve=/#.*$/,Be=/([?&])_=[^&]*/,qe=/^(.*?):[ \t]*([^\r\n]*)$/gm,ze=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ge=/^(?:GET|HEAD)$/,We=/^\/\//,He={},$e={},Ze="*/".concat("*"),Ke=w.createElement("a");function Xe(t){return function(e,n){"string"!==typeof e&&(n=e,e="*");var i,r=0,s=e.toLowerCase().match(V)||[];if(v(n))while(i=s[r++])"+"===i[0]?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function Ye(t,e,n,i){var r={},s=t===$e;function o(a){var l;return r[a]=!0,C.each(t[a]||[],(function(t,a){var c=a(e,n,i);return"string"!==typeof c||s||r[c]?s?!(l=c):void 0:(e.dataTypes.unshift(c),o(c),!1)})),l}return o(e.dataTypes[0])||!r["*"]&&o("*")}function Je(t,e){var n,i,r=C.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((r[n]?t:i||(i={}))[n]=e[n]);return i&&C.extend(!0,t,i),t}function Qe(t,e,n){var i,r,s,o,a=t.contents,l=t.dataTypes;while("*"===l[0])l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}if(l[0]in n)s=l[0];else{for(r in n){if(!l[0]||t.converters[r+" "+l[0]]){s=r;break}o||(o=r)}s=s||o}if(s)return s!==l[0]&&l.unshift(s),n[s]}function tn(t,e,n,i){var r,s,o,a,l,c={},u=t.dataTypes.slice();if(u[1])for(o in t.converters)c[o.toLowerCase()]=t.converters[o];s=u.shift();while(s)if(t.responseFields[s]&&(n[t.responseFields[s]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=s,s=u.shift(),s)if("*"===s)s=l;else if("*"!==l&&l!==s){if(o=c[l+" "+s]||c["* "+s],!o)for(r in c)if(a=r.split(" "),a[1]===s&&(o=c[l+" "+a[0]]||c["* "+a[0]],o)){!0===o?o=c[r]:!0!==c[r]&&(s=a[0],u.unshift(a[1]));break}if(!0!==o)if(o&&t.throws)e=o(e);else try{e=o(e)}catch(h){return{state:"parsererror",error:o?h:"No conversion from "+l+" to "+s}}}return{state:"success",data:e}}Ke.href=Oe.href,C.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Oe.href,type:"GET",isLocal:ze.test(Oe.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ze,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":C.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?Je(Je(t,C.ajaxSettings),e):Je(C.ajaxSettings,t)},ajaxPrefilter:Xe(He),ajaxTransport:Xe($e),ajax:function(t,e){"object"===typeof t&&(e=t,t=void 0),e=e||{};var n,i,s,o,a,l,c,u,h,d,f=C.ajaxSetup({},e),p=f.context||f,g=f.context&&(p.nodeType||p.jquery)?C(p):C.event,m=C.Deferred(),_=C.Callbacks("once memory"),v=f.statusCode||{},y={},b={},E="canceled",x={readyState:0,getResponseHeader:function(t){var e;if(c){if(!o){o={};while(e=qe.exec(s))o[e[1].toLowerCase()+" "]=(o[e[1].toLowerCase()+" "]||[]).concat(e[2])}e=o[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},getAllResponseHeaders:function(){return c?s:null},setRequestHeader:function(t,e){return null==c&&(t=b[t.toLowerCase()]=b[t.toLowerCase()]||t,y[t]=e),this},overrideMimeType:function(t){return null==c&&(f.mimeType=t),this},statusCode:function(t){var e;if(t)if(c)x.always(t[x.status]);else for(e in t)v[e]=[v[e],t[e]];return this},abort:function(t){var e=t||E;return n&&n.abort(e),T(0,e),this}};if(m.promise(x),f.url=((t||f.url||Oe.href)+"").replace(We,Oe.protocol+"//"),f.type=e.method||e.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(V)||[""],null==f.crossDomain){l=w.createElement("a");try{l.href=f.url,l.href=l.href,f.crossDomain=Ke.protocol+"//"+Ke.host!==l.protocol+"//"+l.host}catch(S){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!==typeof f.data&&(f.data=C.param(f.data,f.traditional)),Ye(He,f,e,x),c)return x;for(h in u=C.event&&f.global,u&&0===C.active++&&C.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Ge.test(f.type),i=f.url.replace(Ve,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Ue,"+")):(d=f.url.slice(i.length),f.data&&(f.processData||"string"===typeof f.data)&&(i+=(Le.test(i)?"&":"?")+f.data,delete f.data),!1===f.cache&&(i=i.replace(Be,"$1"),d=(Le.test(i)?"&":"?")+"_="+De.guid+++d),f.url=i+d),f.ifModified&&(C.lastModified[i]&&x.setRequestHeader("If-Modified-Since",C.lastModified[i]),C.etag[i]&&x.setRequestHeader("If-None-Match",C.etag[i])),(f.data&&f.hasContent&&!1!==f.contentType||e.contentType)&&x.setRequestHeader("Content-Type",f.contentType),x.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Ze+"; q=0.01":""):f.accepts["*"]),f.headers)x.setRequestHeader(h,f.headers[h]);if(f.beforeSend&&(!1===f.beforeSend.call(p,x,f)||c))return x.abort();if(E="abort",_.add(f.complete),x.done(f.success),x.fail(f.error),n=Ye($e,f,e,x),n){if(x.readyState=1,u&&g.trigger("ajaxSend",[x,f]),c)return x;f.async&&f.timeout>0&&(a=r.setTimeout((function(){x.abort("timeout")}),f.timeout));try{c=!1,n.send(y,T)}catch(S){if(c)throw S;T(-1,S)}}else T(-1,"No Transport");function T(t,e,o,l){var h,d,y,w,b,E=e;c||(c=!0,a&&r.clearTimeout(a),n=void 0,s=l||"",x.readyState=t>0?4:0,h=t>=200&&t<300||304===t,o&&(w=Qe(f,x,o)),!h&&C.inArray("script",f.dataTypes)>-1&&C.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),w=tn(f,w,x,h),h?(f.ifModified&&(b=x.getResponseHeader("Last-Modified"),b&&(C.lastModified[i]=b),b=x.getResponseHeader("etag"),b&&(C.etag[i]=b)),204===t||"HEAD"===f.type?E="nocontent":304===t?E="notmodified":(E=w.state,d=w.data,y=w.error,h=!y)):(y=E,!t&&E||(E="error",t<0&&(t=0))),x.status=t,x.statusText=(e||E)+"",h?m.resolveWith(p,[d,E,x]):m.rejectWith(p,[x,E,y]),x.statusCode(v),v=void 0,u&&g.trigger(h?"ajaxSuccess":"ajaxError",[x,f,h?d:y]),_.fireWith(p,[x,E]),u&&(g.trigger("ajaxComplete",[x,f]),--C.active||C.event.trigger("ajaxStop")))}return x},getJSON:function(t,e,n){return C.get(t,e,n,"json")},getScript:function(t,e){return C.get(t,void 0,e,"script")}}),C.each(["get","post"],(function(t,e){C[e]=function(t,n,i,r){return v(n)&&(r=r||i,i=n,n=void 0),C.ajax(C.extend({url:t,type:e,dataType:r,data:n,success:i},C.isPlainObject(t)&&t))}})),C.ajaxPrefilter((function(t){var e;for(e in t.headers)"content-type"===e.toLowerCase()&&(t.contentType=t.headers[e]||"")})),C._evalUrl=function(t,e,n){return C.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(t){C.globalEval(t,e,n)}})},C.fn.extend({wrapAll:function(t){var e;return this[0]&&(v(t)&&(t=t.call(this[0])),e=C(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map((function(){var t=this;while(t.firstElementChild)t=t.firstElementChild;return t})).append(this)),this},wrapInner:function(t){return v(t)?this.each((function(e){C(this).wrapInner(t.call(this,e))})):this.each((function(){var e=C(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)}))},wrap:function(t){var e=v(t);return this.each((function(n){C(this).wrapAll(e?t.call(this,n):t)}))},unwrap:function(t){return this.parent(t).not("body").each((function(){C(this).replaceWith(this.childNodes)})),this}}),C.expr.pseudos.hidden=function(t){return!C.expr.pseudos.visible(t)},C.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},C.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch(t){}};var en={0:200,1223:204},nn=C.ajaxSettings.xhr();_.cors=!!nn&&"withCredentials"in nn,_.ajax=nn=!!nn,C.ajaxTransport((function(t){var e,n;if(_.cors||nn&&!t.crossDomain)return{send:function(i,s){var o,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(o,i[o]);e=function(t){return function(){e&&(e=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!==typeof a.status?s(0,"error"):s(a.status,a.statusText):s(en[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!==typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=e(),n=a.onerror=a.ontimeout=e("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){4===a.readyState&&r.setTimeout((function(){e&&n()}))},e=e("abort");try{a.send(t.hasContent&&t.data||null)}catch(l){if(e)throw l}},abort:function(){e&&e()}}})),C.ajaxPrefilter((function(t){t.crossDomain&&(t.contents.script=!1)})),C.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return C.globalEval(t),t}}}),C.ajaxPrefilter("script",(function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")})),C.ajaxTransport("script",(function(t){var e,n;if(t.crossDomain||t.scriptAttrs)return{send:function(i,r){e=C("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&r("error"===t.type?404:200,t.type)}),w.head.appendChild(e[0])},abort:function(){n&&n()}}}));var rn=[],sn=/(=)\?(?=&|$)|\?\?/;C.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=rn.pop()||C.expando+"_"+De.guid++;return this[t]=!0,t}}),C.ajaxPrefilter("json jsonp",(function(t,e,n){var i,s,o,a=!1!==t.jsonp&&(sn.test(t.url)?"url":"string"===typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&sn.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=v(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(sn,"$1"+i):!1!==t.jsonp&&(t.url+=(Le.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return o||C.error(i+" was not called"),o[0]},t.dataTypes[0]="json",s=r[i],r[i]=function(){o=arguments},n.always((function(){void 0===s?C(r).removeProp(i):r[i]=s,t[i]&&(t.jsonpCallback=e.jsonpCallback,rn.push(i)),o&&v(s)&&s(o[0]),o=s=void 0})),"script"})),_.createHTMLDocument=function(){var t=w.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",2===t.childNodes.length}(),C.parseHTML=function(t,e,n){return"string"!==typeof t?[]:("boolean"===typeof e&&(n=e,e=!1),e||(_.createHTMLDocument?(e=w.implementation.createHTMLDocument(""),i=e.createElement("base"),i.href=w.location.href,e.head.appendChild(i)):e=w),r=D.exec(t),s=!n&&[],r?[e.createElement(r[1])]:(r=Ct([t],e,s),s&&s.length&&C(s).remove(),C.merge([],r.childNodes)));var i,r,s},C.fn.load=function(t,e,n){var i,r,s,o=this,a=t.indexOf(" ");return a>-1&&(i=Ce(t.slice(a)),t=t.slice(0,a)),v(e)?(n=e,e=void 0):e&&"object"===typeof e&&(r="POST"),o.length>0&&C.ajax({url:t,type:r||"GET",dataType:"html",data:e}).done((function(t){s=arguments,o.html(i?C("<div>").append(C.parseHTML(t)).find(i):t)})).always(n&&function(t,e){o.each((function(){n.apply(this,s||[t.responseText,e,t])}))}),this},C.expr.pseudos.animated=function(t){return C.grep(C.timers,(function(e){return t===e.elem})).length},C.offset={setOffset:function(t,e,n){var i,r,s,o,a,l,c,u=C.css(t,"position"),h=C(t),d={};"static"===u&&(t.style.position="relative"),a=h.offset(),s=C.css(t,"top"),l=C.css(t,"left"),c=("absolute"===u||"fixed"===u)&&(s+l).indexOf("auto")>-1,c?(i=h.position(),o=i.top,r=i.left):(o=parseFloat(s)||0,r=parseFloat(l)||0),v(e)&&(e=e.call(t,n,C.extend({},a))),null!=e.top&&(d.top=e.top-a.top+o),null!=e.left&&(d.left=e.left-a.left+r),"using"in e?e.using.call(t,d):h.css(d)}},C.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each((function(e){C.offset.setOffset(this,t,e)}));var e,n,i=this[0];return i?i.getClientRects().length?(e=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,n,i=this[0],r={top:0,left:0};if("fixed"===C.css(i,"position"))e=i.getBoundingClientRect();else{e=this.offset(),n=i.ownerDocument,t=i.offsetParent||n.documentElement;while(t&&(t===n.body||t===n.documentElement)&&"static"===C.css(t,"position"))t=t.parentNode;t&&t!==i&&1===t.nodeType&&(r=C(t).offset(),r.top+=C.css(t,"borderTopWidth",!0),r.left+=C.css(t,"borderLeftWidth",!0))}return{top:e.top-r.top-C.css(i,"marginTop",!0),left:e.left-r.left-C.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){var t=this.offsetParent;while(t&&"static"===C.css(t,"position"))t=t.offsetParent;return t||ut}))}}),C.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(t,e){var n="pageYOffset"===e;C.fn[t]=function(i){return Z(this,(function(t,i,r){var s;if(y(t)?s=t:9===t.nodeType&&(s=t.defaultView),void 0===r)return s?s[e]:t[i];s?s.scrollTo(n?s.pageXOffset:r,n?r:s.pageYOffset):t[i]=r}),t,i,arguments.length)}})),C.each(["top","left"],(function(t,e){C.cssHooks[e]=Yt(_.pixelPosition,(function(t,n){if(n)return n=Xt(t,e),zt.test(n)?C(t).position()[e]+"px":n}))})),C.each({Height:"height",Width:"width"},(function(t,e){C.each({padding:"inner"+t,content:e,"":"outer"+t},(function(n,i){C.fn[i]=function(r,s){var o=arguments.length&&(n||"boolean"!==typeof r),a=n||(!0===r||!0===s?"margin":"border");return Z(this,(function(e,n,r){var s;return y(e)?0===i.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(s=e.documentElement,Math.max(e.body["scroll"+t],s["scroll"+t],e.body["offset"+t],s["offset"+t],s["client"+t])):void 0===r?C.css(e,n,a):C.style(e,n,r,a)}),e,o?r:void 0,o)}}))})),C.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(t,e){C.fn[e]=function(t){return this.on(e,t)}})),C.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)},hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(t,e){C.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}));var on=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;C.proxy=function(t,e){var n,i,r;if("string"===typeof e&&(n=t[e],e=t,t=n),v(t))return i=l.call(arguments,2),r=function(){return t.apply(e||this,i.concat(l.call(arguments)))},r.guid=t.guid=t.guid||C.guid++,r},C.holdReady=function(t){t?C.readyWait++:C.ready(!0)},C.isArray=Array.isArray,C.parseJSON=JSON.parse,C.nodeName=O,C.isFunction=v,C.isWindow=y,C.camelCase=J,C.type=x,C.now=Date.now,C.isNumeric=function(t){var e=C.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},C.trim=function(t){return null==t?"":(t+"").replace(on,"$1")},n=[],i=function(){return C}.apply(e,n),void 0===i||(t.exports=i);var an=r.jQuery,ln=r.$;return C.noConflict=function(t){return r.$===C&&(r.$=ln),t&&r.jQuery===C&&(r.jQuery=an),C},"undefined"===typeof s&&(r.jQuery=r.$=C),C}))},1827:function(){},2582:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";function t(t,i,r,s,o){!function t(n,i,r,s,o){for(;s>r;){if(s-r>600){var a=s-r+1,l=i-r+1,c=Math.log(a),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(a-u)/a)*(l-a/2<0?-1:1),d=Math.max(r,Math.floor(i-l*u/a+h)),f=Math.min(s,Math.floor(i+(a-l)*u/a+h));t(n,i,d,f,o)}var p=n[i],g=r,m=s;for(e(n,r,i),o(n[s],p)>0&&e(n,r,s);g<m;){for(e(n,g,m),g++,m--;o(n[g],p)<0;)g++;for(;o(n[m],p)>0;)m--}0===o(n[r],p)?e(n,r,m):e(n,++m,s),m<=i&&(r=m+1),i<=m&&(s=m-1)}}(t,i,r||0,s||t.length-1,o||n)}function e(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function n(t,e){return t<e?-1:t>e?1:0}var i=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function r(t,e,n){if(!n)return e.indexOf(t);for(var i=0;i<e.length;i++)if(n(t,e[i]))return i;return-1}function s(t,e){o(t,0,t.children.length,e,t)}function o(t,e,n,i,r){r||(r=p(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var s=e;s<n;s++){var o=t.children[s];a(r,t.leaf?i(o):o)}return r}function a(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function l(t,e){return t.minX-e.minX}function c(t,e){return t.minY-e.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function h(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function f(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function p(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function g(e,n,i,r,s){for(var o=[n,i];o.length;)if(!((i=o.pop())-(n=o.pop())<=r)){var a=n+Math.ceil((i-n)/r/2)*r;t(e,a,n,i,s),o.push(n,a,a,i)}}return i.prototype.all=function(){return this._all(this.data,[])},i.prototype.search=function(t){var e=this.data,n=[];if(!f(t,e))return n;for(var i=this.toBBox,r=[];e;){for(var s=0;s<e.children.length;s++){var o=e.children[s],a=e.leaf?i(o):o;f(t,a)&&(e.leaf?n.push(o):d(t,a)?this._all(o,n):r.push(o))}e=r.pop()}return n},i.prototype.collides=function(t){var e=this.data;if(!f(t,e))return!1;for(var n=[];e;){for(var i=0;i<e.children.length;i++){var r=e.children[i],s=e.leaf?this.toBBox(r):r;if(f(t,s)){if(e.leaf||d(t,s))return!0;n.push(r)}}e=n.pop()}return!1},i.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0;e<t.length;e++)this.insert(t[e]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var i=this.data;this.data=n,n=i}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},i.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},i.prototype.clear=function(){return this.data=p([]),this},i.prototype.remove=function(t,e){if(!t)return this;for(var n,i,s,o=this.data,a=this.toBBox(t),l=[],c=[];o||l.length;){if(o||(o=l.pop(),i=l[l.length-1],n=c.pop(),s=!0),o.leaf){var u=r(t,o.children,e);if(-1!==u)return o.children.splice(u,1),l.push(o),this._condense(l),this}s||o.leaf||!d(o,a)?i?(n++,o=i.children[n],s=!1):o=null:(l.push(o),c.push(n),n=0,i=o,o=o.children[0])}return this},i.prototype.toBBox=function(t){return t},i.prototype.compareMinX=function(t,e){return t.minX-e.minX},i.prototype.compareMinY=function(t,e){return t.minY-e.minY},i.prototype.toJSON=function(){return this.data},i.prototype.fromJSON=function(t){return this.data=t,this},i.prototype._all=function(t,e){for(var n=[];t;)t.leaf?e.push.apply(e,t.children):n.push.apply(n,t.children),t=n.pop();return e},i.prototype._build=function(t,e,n,i){var r,o=n-e+1,a=this._maxEntries;if(o<=a)return s(r=p(t.slice(e,n+1)),this.toBBox),r;i||(i=Math.ceil(Math.log(o)/Math.log(a)),a=Math.ceil(o/Math.pow(a,i-1))),(r=p([])).leaf=!1,r.height=i;var l=Math.ceil(o/a),c=l*Math.ceil(Math.sqrt(a));g(t,e,n,c,this.compareMinX);for(var u=e;u<=n;u+=c){var h=Math.min(u+c-1,n);g(t,u,h,l,this.compareMinY);for(var d=u;d<=h;d+=l){var f=Math.min(d+l-1,h);r.children.push(this._build(t,d,f,i-1))}}return s(r,this.toBBox),r},i.prototype._chooseSubtree=function(t,e,n,i){for(;i.push(e),!e.leaf&&i.length-1!==n;){for(var r=1/0,s=1/0,o=void 0,a=0;a<e.children.length;a++){var l=e.children[a],c=u(l),h=(d=t,f=l,(Math.max(f.maxX,d.maxX)-Math.min(f.minX,d.minX))*(Math.max(f.maxY,d.maxY)-Math.min(f.minY,d.minY))-c);h<s?(s=h,r=c<r?c:r,o=l):h===s&&c<r&&(r=c,o=l)}e=o||e.children[0]}var d,f;return e},i.prototype._insert=function(t,e,n){var i=n?t:this.toBBox(t),r=[],s=this._chooseSubtree(i,this.data,e,r);for(s.children.push(t),a(s,i);e>=0&&r[e].children.length>this._maxEntries;)this._split(r,e),e--;this._adjustParentBBoxes(i,r,e)},i.prototype._split=function(t,e){var n=t[e],i=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,i);var o=this._chooseSplitIndex(n,r,i),a=p(n.children.splice(o,n.children.length-o));a.height=n.height,a.leaf=n.leaf,s(n,this.toBBox),s(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(n,a)},i.prototype._splitRoot=function(t,e){this.data=p([t,e]),this.data.height=t.height+1,this.data.leaf=!1,s(this.data,this.toBBox)},i.prototype._chooseSplitIndex=function(t,e,n){for(var i,r,s,a,l,c,h,d=1/0,f=1/0,p=e;p<=n-e;p++){var g=o(t,0,p,this.toBBox),m=o(t,p,n,this.toBBox),_=(r=g,s=m,a=void 0,l=void 0,c=void 0,h=void 0,a=Math.max(r.minX,s.minX),l=Math.max(r.minY,s.minY),c=Math.min(r.maxX,s.maxX),h=Math.min(r.maxY,s.maxY),Math.max(0,c-a)*Math.max(0,h-l)),v=u(g)+u(m);_<d?(d=_,i=p,f=v<f?v:f):_===d&&v<f&&(f=v,i=p)}return i||n-e},i.prototype._chooseSplitAxis=function(t,e,n){var i=t.leaf?this.compareMinX:l,r=t.leaf?this.compareMinY:c;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,r)&&t.children.sort(i)},i.prototype._allDistMargin=function(t,e,n,i){t.children.sort(i);for(var r=this.toBBox,s=o(t,0,e,r),l=o(t,n-e,n,r),c=h(s)+h(l),u=e;u<n-e;u++){var d=t.children[u];a(s,t.leaf?r(d):d),c+=h(s)}for(var f=n-e-1;f>=e;f--){var p=t.children[f];a(l,t.leaf?r(p):p),c+=h(l)}return c},i.prototype._adjustParentBBoxes=function(t,e,n){for(var i=n;i>=0;i--)a(e[i],t)},i.prototype._condense=function(t){for(var e=t.length-1,n=void 0;e>=0;e--)0===t[e].children.length?e>0?(n=t[e-1].children).splice(n.indexOf(t[e]),1):this.clear():s(t[e],this.toBBox)},i}))},5205:function(t,e,n){"use strict";n.d(e,{z:function(){return s}});var i,r=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var s=function(t){var n=[],i=arguments.length-1;while(i-- >0)n[i]=arguments[i+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&i.then((function(){r()?(l(t,s,n),navigator.serviceWorker.ready.then((function(t){s("ready",t)})).catch((function(t){return o(s,t)}))):(a(t,s,n),navigator.serviceWorker.ready.then((function(t){s("ready",t)})).catch((function(t){return o(s,t)})))}))}function o(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return o(e,t)}))}function l(t,e,n){fetch(t).then((function(i){404===i.status?(e("error",new Error("Service worker not found at "+t)),c()):-1===i.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+i.headers.get("content-type"))),c()):a(t,e,n)})).catch((function(t){return o(e,t)}))}function c(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return o(emit,t)}))}"undefined"!==typeof window&&(i="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},3744:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n}},3907:function(t,e,n){"use strict";n.d(e,{MT:function(){return et},oR:function(){return _}});var i=n(6252),r=n(2262);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,l="devtools-plugin:setup",c="plugin:settings:set";let u,h;function d(){var t;return void 0!==u||("undefined"!==typeof window&&window.performance?(u=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(u=!0,h=n.g.perf_hooks.performance):u=!1),u}function f(){return d()?h.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},n);try{const t=localStorage.getItem(i),e=JSON.parse(t);Object.assign(r,e)}catch(s){}this.fallbacks={getSettings(){return r},setSettings(t){try{localStorage.setItem(i,JSON.stringify(t))}catch(s){}r=t},now(){return f()}},e&&e.on(c,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function g(t,e){const n=t,i=o(),r=s(),c=a&&n.enableEarlyProxy;if(!r||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const t=c?new p(n,r):null,s=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else r.emit(l,t,e)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var m="store";function _(t){return void 0===t&&(t=null),(0,i.f3)(null!==t?t:m)}function v(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function y(t){return null!==t&&"object"===typeof t}function w(t){return t&&"function"===typeof t.then}function b(t,e){return function(){return t(e)}}function E(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function x(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;C(t,n,[],t._modules.root,!0),T(t,n,e)}function T(t,e,n){var s=t._state,o=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,l={},c={},u=(0,r.B)(!0);u.run((function(){v(a,(function(e,n){l[n]=b(e,t),c[n]=(0,i.Fl)((function(){return l[n]()})),Object.defineProperty(t.getters,n,{get:function(){return c[n].value},enumerable:!0})}))})),t._state=(0,r.qj)({data:e}),t._scope=u,t.strict&&O(t),s&&n&&t._withCommit((function(){s.data=null})),o&&o.stop()}function C(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=D(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit((function(){a[l]=i.state}))}var c=i.context=S(t,o,n);i.forEachMutation((function(e,n){var i=o+n;k(t,i,e,c)})),i.forEachAction((function(e,n){var i=e.root?n:o+n,r=e.handler||e;R(t,i,r,c)})),i.forEachGetter((function(e,n){var i=o+n;A(t,i,e,c)})),i.forEachChild((function(i,s){C(t,e,n.concat(s),i,r)}))}function S(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var s=L(n,i,r),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=e+l),t.dispatch(l,o)},commit:i?t.commit:function(n,i,r){var s=L(n,i,r),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=e+l),t.commit(l,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return I(t,e)}},state:{get:function(){return D(t.state,n)}}}),r}function I(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function k(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){n.call(t,i.state,e)}))}function R(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return w(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function A(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function O(t){(0,i.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function D(t,e){return e.reduce((function(t,e){return t[e]}),t)}function L(t,e,n){return y(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var P="vuex bindings",N="vuex:mutations",M="vuex:actions",F="vuex",j=0;function U(t,e){g({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[P]},(function(n){n.addTimelineLayer({id:N,label:"Vuex Mutations",color:V}),n.addTimelineLayer({id:M,label:"Vuex Actions",color:V}),n.addInspector({id:F,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===F)if(n.filter){var i=[];H(i,e._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[W(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===F){var i=n.nodeId;I(e,i),n.state=$(K(e._modules,i),"root"===i?e.getters:e._makeLocalGettersCache,i)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===F){var i=n.nodeId,r=n.path;"root"!==i&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit((function(){n.set(e._state.data,r,n.state.value)}))}})),e.subscribe((function(t,e){var i={};t.payload&&(i.payload=t.payload),i.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(F),n.sendInspectorState(F),n.addTimelineEvent({layerId:N,event:{time:Date.now(),title:t.type,data:i}})})),e.subscribeAction({before:function(t,e){var i={};t.payload&&(i.payload=t.payload),t._id=j++,t._time=Date.now(),i.state=e,n.addTimelineEvent({layerId:M,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:i}})},after:function(t,e){var i={},r=Date.now()-t._time;i.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},t.payload&&(i.payload=t.payload),i.state=e,n.addTimelineEvent({layerId:M,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:i}})}})}))}var V=8702998,B=6710886,q=16777215,z={label:"namespaced",textColor:q,backgroundColor:B};function G(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function W(t,e){return{id:e||"root",label:G(e),tags:t.namespaced?[z]:[],children:Object.keys(t._children).map((function(n){return W(t._children[n],e+n+"/")}))}}function H(t,e,n,i){i.includes(n)&&t.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[z]:[]}),Object.keys(e._children).forEach((function(r){H(t,e._children[r],n,i+r+"/")}))}function $(t,e,n){e="root"===n?e:e[n];var i=Object.keys(e),r={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(i.length){var s=Z(e);r.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?G(t):t,editable:!1,value:X((function(){return s[t]}))}}))}return r}function Z(t){var e={};return Object.keys(t).forEach((function(n){var i=n.split("/");if(i.length>1){var r=e,s=i.pop();i.forEach((function(t){r[t]||(r[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),r=r[t]._custom.value})),r[s]=X((function(){return t[n]}))}else e[n]=X((function(){return t[n]}))})),e}function K(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,i,r){var s=t[i];if(!s)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?s:s._children}),"root"===e?t:t.root._children)}function X(t){try{return t()}catch(e){return e}}var Y=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},J={namespaced:{configurable:!0}};J.namespaced.get=function(){return!!this._rawModule.namespaced},Y.prototype.addChild=function(t,e){this._children[t]=e},Y.prototype.removeChild=function(t){delete this._children[t]},Y.prototype.getChild=function(t){return this._children[t]},Y.prototype.hasChild=function(t){return t in this._children},Y.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},Y.prototype.forEachChild=function(t){v(this._children,t)},Y.prototype.forEachGetter=function(t){this._rawModule.getters&&v(this._rawModule.getters,t)},Y.prototype.forEachAction=function(t){this._rawModule.actions&&v(this._rawModule.actions,t)},Y.prototype.forEachMutation=function(t){this._rawModule.mutations&&v(this._rawModule.mutations,t)},Object.defineProperties(Y.prototype,J);var Q=function(t){this.register([],t,!1)};function tt(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;tt(t.concat(i),e.getChild(i),n.modules[i])}}Q.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},Q.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},Q.prototype.update=function(t){tt([],this.root,t)},Q.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new Y(e,n);if(0===t.length)this.root=r;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],r)}e.modules&&v(e.modules,(function(e,r){i.register(t.concat(r),e,n)}))},Q.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],i=e.getChild(n);i&&i.runtime&&e.removeChild(n)},Q.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function et(t){return new nt(t)}var nt=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Q(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var s=this,o=this,a=o.dispatch,l=o.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return l.call(s,t,e,n)},this.strict=i;var c=this._modules.root.state;C(this,c,[],this._modules.root),T(this,c),n.forEach((function(t){return t(e)}))},it={state:{configurable:!0}};nt.prototype.install=function(t,e){t.provide(e||m,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&U(t,this)},it.state.get=function(){return this._state.data},it.state.set=function(t){0},nt.prototype.commit=function(t,e,n){var i=this,r=L(t,e,n),s=r.type,o=r.payload,a=(r.options,{type:s,payload:o}),l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,i.state)})))},nt.prototype.dispatch=function(t,e){var n=this,i=L(t,e),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(c){0}var l=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){l.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(c){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(c){0}e(t)}))}))}},nt.prototype.subscribe=function(t,e){return E(t,this._subscribers,e)},nt.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return E(n,this._actionSubscribers,e)},nt.prototype.watch=function(t,e,n){var r=this;return(0,i.YP)((function(){return t(r.state,r.getters)}),e,Object.assign({},n))},nt.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},nt.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),C(this,this.state,t,this._modules.get(t),n.preserveState),T(this,this.state)},nt.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=D(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),x(this)},nt.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},nt.prototype.hotUpdate=function(t){this._modules.update(t),x(this,!0)},nt.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(nt.prototype,it);ot((function(t,e){var n={};return rt(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=at(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0})),n})),ot((function(t,e){var n={};return rt(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var s=at(this.$store,"mapMutations",t);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),ot((function(t,e){var n={};return rt(e).forEach((function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||at(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0})),n})),ot((function(t,e){var n={};return rt(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var s=at(this.$store,"mapActions",t);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n}));function rt(t){return st(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function st(t){return Array.isArray(t)||y(t)}function ot(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function at(t,e,n){var i=t._modulesNamespaceMap[n];return i}},7456:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return ut},Mq:function(){return _t},ZF:function(){return mt},KN:function(){return vt}});var i=n(8463),r=n(3333),s=n(4444);const o=(t,e)=>e.some((e=>t instanceof e));let a,l;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(E(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function _(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function y(t){v=t(v)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(x(this),e),E(h.get(this))}:function(...e){return E(t.apply(x(this),e))}:function(e,...n){const i=t.call(x(this),e,...n);return f.set(i,e.sort?e.sort():[e]),E(i)}}function b(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&_(t),o(t,c())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const x=t=>g.get(t);function T(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(E(o.result),t.oldVersion,t.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],I=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=S.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!C.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return I.set(e,s),s}y((t=>({...t,get:(e,n,i)=>k(e,n)||t.get(e,n,i),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(A(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function A(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const O="@firebase/app",D="0.9.7",L=new r.Yd("@firebase/app"),P="@firebase/app-compat",N="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",j="@firebase/app-check",U="@firebase/auth",V="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",z="@firebase/functions",G="@firebase/functions-compat",W="@firebase/installations",H="@firebase/installations-compat",$="@firebase/messaging",Z="@firebase/messaging-compat",K="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Q="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",it="firebase",rt="9.19.1",st="[DEFAULT]",ot={[O]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[N]:"fire-analytics-compat",[j]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[V]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[z]:"fire-fn",[G]:"fire-fn-compat",[W]:"fire-iid",[H]:"fire-iid-compat",[$]:"fire-fcm",[Z]:"fire-fcm-compat",[K]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Q]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[it]:"fire-js-all"},at=new Map,lt=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(n){L.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(lt.has(e))return L.debug(`There were multiple attempts to register component ${e}.`),!1;lt.set(e,t);for(const n of at.values())ct(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new s.LL("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=rt;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=r.name;if("string"!==typeof o||!o)throw ft.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ft.create("no-options");const a=at.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(r,a.config))return a;throw ft.create("duplicate-app",{appName:o})}const l=new i.H0(o);for(const i of lt.values())l.addComponent(i);const c=new pt(n,r,l);return at.set(o,c),c}function _t(t=st){const e=at.get(t);if(!e&&t===st)return mt();if(!e)throw ft.create("no-app",{appName:t});return e}function vt(t,e,n){var r;let s=null!==(r=ot[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void L.warn(t.join(" "))}ut(new i.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt="firebase-heartbeat-database",wt=1,bt="firebase-heartbeat-store";let Et=null;function xt(){return Et||(Et=T(yt,wt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bt)}}}).catch((t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function Tt(t){try{const e=await xt();return e.transaction(bt).objectStore(bt).get(St(t))}catch(e){if(e instanceof s.ZR)L.warn(e.message);else{const t=ft.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});L.warn(t.message)}}}async function Ct(t,e){try{const n=await xt(),i=n.transaction(bt,"readwrite"),r=i.objectStore(bt);return await r.put(e,St(t)),i.done}catch(n){if(n instanceof s.ZR)L.warn(n.message);else{const t=ft.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});L.warn(t.message)}}}function St(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=1024,kt=2592e6;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=At();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=At(),{heartbeatsToSend:e,unsentEntries:n}=Ot(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function At(){const t=new Date;return t.toISOString().substring(0,10)}function Ot(t,e=It){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Lt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Lt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Tt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ct(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ct(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Lt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){ut(new i.wA("platform-logger",(t=>new R(t)),"PRIVATE")),ut(new i.wA("heartbeat",(t=>new Rt(t)),"PRIVATE")),vt(O,D,t),vt(O,D,"esm2017"),vt("fire-js","")}Pt("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return c},wA:function(){return r}});var i=n(4444);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(l(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function l(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return c},in:function(){return r}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}},3977:function(t,e,n){"use strict";n.d(e,{ZF:function(){return i.ZF}});var i=n(7456),r="firebase",s="9.19.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(r,s,"app")},1024:function(t,e,n){"use strict";n.d(e,{hJ:function(){return ne},Xb:function(){return pe},v0:function(){return Ri},e5:function(){return ge},rh:function(){return wn},w7:function(){return ve}});var i=n(4444),r=n(7456),s=n(3333);function o(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;var a=n(8463);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new i.LL("auth","Firebase",l()),h=new s.Yd("@firebase/auth");function d(t,...e){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${r.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw _(t,...e)}function p(t,...e){return _(t,...e)}function g(t,e,n){const r=Object.assign(Object.assign({},c()),{[e]:n}),s=new i.LL("auth","Firebase",r);return s.create(e,{appName:t.name})}function m(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&f(t,"argument-error"),g(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return u.create(t,...e)}function v(t,e,...n){if(!t)throw _(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function w(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function E(t){w(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){const n=(0,r.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const s=n.initialize({options:e});return s}function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(E);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function S(){return"http:"===I()||"https:"===I()}function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function M(t,e,n,r,s={}){return F(t,s,(async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),D.fetch()(U(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))}))}async function F(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},L),e);try{const e=new V(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw B(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw B(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw B(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);f(t,a)}}catch(s){if(s instanceof i.ZR)throw s;f(t,"network-request-failed",{message:String(s)})}}async function j(t,e,n,i,r={}){const s=await M(t,e,n,i,r);return"mfaPendingCredential"in s&&f(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?O(t.config,r):`${t.config.apiScheme}://${r}`}class V{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),P.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=p(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t,e){return M(t,"POST","/v1/accounts:delete",e)}async function z(t,e){return M(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e=!1){const n=(0,i.m9)(t),r=await n.getIdToken(e),s=$(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:G(H(s.auth_time)),issuedAtTime:G(H(s.iat)),expirationTime:G(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function H(t){return 1e3*Number(t)}function $(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.tV)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Z(t){const e=$(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i.ZR&&X(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,i=await t.getIdToken(),r=await K(t,z(n,{idToken:i}));v(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?nt(s.providerUserInfo):[],a=et(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new J(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function tt(t){const e=(0,i.m9)(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function et(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function nt(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(t,e){const n=await F(t,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=U(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",D.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):Z(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await it(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new rt;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(v("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(v("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ot{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new J(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return W(this,t)}reload(){return tt(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ot(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,q(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=e.createdAt)&&void 0!==l?l:void 0,_=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:x}=e;v(y&&x,t,"internal-error");const T=rt.fromJSON(this.name,x);v("string"===typeof y,t,"internal-error"),st(u,t.name),st(h,t.name),v("boolean"===typeof w,t,"internal-error"),v("boolean"===typeof b,t,"internal-error"),st(d,t.name),st(f,t.name),st(p,t.name),st(g,t.name),st(m,t.name),st(_,t.name);const C=new ot({uid:y,auth:t,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:_});return E&&Array.isArray(E)&&(C.providerData=E.map((t=>Object.assign({},t)))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(t,e,n=!1){const i=new rt;i.updateFromServerResponse(e);const r=new ot({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Q(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}at.type="NONE";const lt=at;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ct(this.userKey,i.apiKey,r),this.fullPersistenceKey=ct("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ot._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(E(lt),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||E(lt);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(s);if(e){const n=ot._fromJSON(t,e);c!==r&&(o=n),r=c;break}}catch(l){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(l){}}))),new ut(r,t,n)):new ut(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_t(e))return"Blackberry";if(vt(e))return"Webos";if(ft(e))return"Safari";if((e.includes("chrome/")||pt(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function dt(t=(0,i.z$)()){return/firefox\//i.test(t)}function ft(t=(0,i.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pt(t=(0,i.z$)()){return/crios\//i.test(t)}function gt(t=(0,i.z$)()){return/iemobile/i.test(t)}function mt(t=(0,i.z$)()){return/android/i.test(t)}function _t(t=(0,i.z$)()){return/blackberry/i.test(t)}function vt(t=(0,i.z$)()){return/webos/i.test(t)}function yt(t=(0,i.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wt(t=(0,i.z$)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return(0,i.w1)()&&10===document.documentMode}function Et(t=(0,i.z$)()){return yt(t)||mt(t)||vt(t)||_t(t)||/windows phone/i.test(t)||gt(t)}function xt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e=[]){let n;switch(t){case"Browser":n=ht((0,i.z$)());break;case"Worker":n=`${ht((0,i.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{const i=t(e);n(i)}catch(r){i(r)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kt(this),this.idTokenSubscription=new kt(this),this.beforeStateQueue=new Ct(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=E(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,i.m9)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(E(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&E(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[E(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function It(t){return(0,i.m9)(t)}class kt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.ne)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Rt(t,e,n){const i=It(t);v(i._canInitEmulator,i,"emulator-config-failed"),v(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=At(e),{host:o,port:a}=Ot(e),l=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Lt()}function At(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ot(t){const e=At(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:Dt(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Dt(e)}}}function Dt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Lt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(t,e){return M(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mt(t,e){return j(t,"POST","/v1/accounts:signInWithPassword",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ft(t,e){return j(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}async function jt(t,e){return j(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Pt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Ut(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Ut(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Mt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ft(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Nt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(t,e){return j(t,"POST","/v1/accounts:signInWithIdp",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="http://localhost";class qt extends Pt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new qt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=o(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new qt(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return Vt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Vt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Vt(t,e)}buildRequest(){const t={requestUri:Bt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(t,e){return M(t,"POST","/v1/accounts:sendVerificationCode",N(t,e))}async function Gt(t,e){return j(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e))}async function Wt(t,e){const n=await j(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e));if(n.temporaryProof)throw B(t,"account-exists-with-different-credential",n);return n}const Ht={["USER_NOT_FOUND"]:"user-not-found"};async function $t(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return j(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,n),Ht)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Pt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Zt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Zt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Gt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Wt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return $t(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new Zt({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xt(t){const e=(0,i.zd)((0,i.pd)(t))["link"],n=e?(0,i.zd)((0,i.pd)(e))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(t))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||e||t}class Yt{constructor(t){var e,n,r,s,o,a;const l=(0,i.zd)((0,i.pd)(t)),c=null!==(e=l["apiKey"])&&void 0!==e?e:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=Kt(null!==(r=l["mode"])&&void 0!==r?r:null);v(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Xt(t);try{return new Yt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(){this.providerId=Jt.PROVIDER_ID}static credential(t,e){return Ut._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Yt.parseLink(e);return v(n,"argument-error"),Ut._fromEmailAndCode(t,n.code,n.tenantId)}}Jt.PROVIDER_ID="password",Jt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Jt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends Qt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends te{constructor(){super("facebook.com")}static credential(t){return qt._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ee.credentialFromTaggedObject(t)}static credentialFromError(t){return ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ee.credential(t.oauthAccessToken)}catch(e){return null}}}ee.FACEBOOK_SIGN_IN_METHOD="facebook.com",ee.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne extends te{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return qt._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ne.credentialFromTaggedObject(t)}static credentialFromError(t){return ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ne.credential(e,n)}catch(i){return null}}}ne.GOOGLE_SIGN_IN_METHOD="google.com",ne.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie extends te{constructor(){super("github.com")}static credential(t){return qt._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ie.credentialFromTaggedObject(t)}static credentialFromError(t){return ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ie.credential(t.oauthAccessToken)}catch(e){return null}}}ie.GITHUB_SIGN_IN_METHOD="github.com",ie.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re extends te{constructor(){super("twitter.com")}static credential(t,e){return qt._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return re.credentialFromTaggedObject(t)}static credentialFromError(t){return re.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return re.credential(e,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function se(t,e){return j(t,"POST","/v1/accounts:signUp",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re.TWITTER_SIGN_IN_METHOD="twitter.com",re.PROVIDER_ID="twitter.com";class oe{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await ot._fromIdTokenResponse(t,n,i),s=ae(n),o=new oe({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=ae(n);return new oe({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function ae(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le extends i.ZR{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,le.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new le(t,e,n,i)}}function ce(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw le._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(t,e,n=!1){const i=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oe._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function he(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await K(t,ce(i,r,e,t),n);v(s.idToken,i,"internal-error");const o=$(s.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(t.uid===a,i,"user-mismatch"),oe._forOperation(t,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function de(t,e,n=!1){const i="signIn",r=await ce(t,i,e),s=await oe._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function fe(t,e){return de(It(t),e)}async function pe(t,e,n){const i=It(t),r=await se(i,{returnSecureToken:!0,email:e,password:n}),s=await oe._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function ge(t,e,n){return fe((0,i.m9)(t),Jt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t,e,n,r){return(0,i.m9)(t).onIdTokenChanged(e,n,r)}function _e(t,e,n){return(0,i.m9)(t).beforeAuthStateChanged(e,n)}function ve(t){return(0,i.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ye(t,e){return M(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}function we(t,e){return M(t,"POST","/v2/accounts/mfaEnrollment:finalize",N(t,e))}function be(t,e){return M(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}function Ee(t,e){return M(t,"POST","/v2/accounts/mfaEnrollment:finalize",N(t,e))}new WeakMap;const xe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(xe,"1"),this.storage.removeItem(xe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){const t=(0,i.z$)();return ft(t)||yt(t)}const Se=1e3,Ie=10;class ke extends Te{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ce()&&xt(),this.fallbackToPolling=Et(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);bt()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Ie):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Se)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ke.type="LOCAL";const Re=ke;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Te{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ae.type="SESSION";const Oe=Ae;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Le(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await De(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pe(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.receivers=[];class Ne{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=Pe("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return window}function Fe(t){Me().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return"undefined"!==typeof Me()["WorkerGlobalScope"]&&"function"===typeof Me()["importScripts"]}async function Ue(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ve(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Be(){return je()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="firebaseLocalStorageDb",ze=1,Ge="firebaseLocalStorage",We="fbase_key";class He{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function $e(t,e){return t.transaction([Ge],e?"readwrite":"readonly").objectStore(Ge)}function Ze(){const t=indexedDB.deleteDatabase(qe);return new He(t).toPromise()}function Ke(){const t=indexedDB.open(qe,ze);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Ge,{keyPath:We})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Ge)?e(n):(n.close(),await Ze(),e(await Ke()))}))}))}async function Xe(t,e,n){const i=$e(t,!0).put({[We]:e,value:n});return new He(i).toPromise()}async function Ye(t,e){const n=$e(t,!1).get(e),i=await new He(n).toPromise();return void 0===i?null:i.value}function Je(t,e){const n=$e(t,!0).delete(e);return new He(n).toPromise()}const Qe=800,tn=3;class en{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ke()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>tn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return je()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Le._getInstance(Be()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ue(),!this.activeServiceWorker)return;this.sender=new Ne(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ve()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ke();return await Xe(t,xe,"1"),await Je(t,xe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xe(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Ye(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Je(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=$e(t,!1).getAll();return new He(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Qe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}en.type="LOCAL";const nn=en;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,e){return M(t,"POST","/v2/accounts/mfaSignIn:start",N(t,e))}function sn(t,e){return M(t,"POST","/v2/accounts/mfaSignIn:finalize",N(t,e))}function on(t,e){return M(t,"POST","/v2/accounts/mfaSignIn:finalize",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function ln(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",an().appendChild(i)}))}function cn(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
cn("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const un="recaptcha";async function hn(t,e,n){var i;const r=await n.verify();try{let s;if(v("string"===typeof r,t,"argument-error"),v(n.type===un,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await ye(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await rn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await zt(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn{constructor(t){this.providerId=dn.PROVIDER_ID,this.auth=It(t)}verifyPhoneNumber(t,e){return hn(this.auth,t,(0,i.m9)(e))}static credential(t,e){return Zt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return dn.credentialFromTaggedObject(e)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Zt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(t,e){return e?E(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn.PROVIDER_ID="phone",dn.PHONE_SIGN_IN_METHOD="phone";class pn extends Pt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Vt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Vt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function gn(t){return de(t.auth,new pn(t),t.bypassAuthState)}function mn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),he(n,new pn(t),t.bypassAuthState)}async function _n(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ue(n,new pn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return gn;case"linkViaPopup":case"linkViaRedirect":return _n;case"reauthViaPopup":case"reauthViaRedirect":return mn;default:f(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new A(2e3,1e4);async function wn(t,e,n){const i=It(t);m(t,e,Qt);const r=fn(i,n),s=new bn(i,"signInViaPopup",e,r);return s.executeNotNull()}class bn extends vn{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Pe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,yn.get())};t()}}bn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const En="pendingRedirect",xn=new Map;class Tn extends vn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=xn.get(this.auth._key());if(!t){try{const e=await Cn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}xn.set(this.auth._key(),t)}return this.bypassAuthState||xn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Cn(t,e){const n=kn(e),i=In(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function Sn(t,e){xn.set(t._key(),e)}function In(t){return E(t._redirectPersistence)}function kn(t){return ct(En,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(t,e,n=!1){const i=It(t),r=fn(i,e),s=new Tn(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const An=6e5;class On{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Pn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Ln(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=An&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dn(t))}saveEventToCache(t){this.cachedEventUids.add(Dn(t)),this.lastProcessedEventTime=Date.now()}}function Dn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Ln({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Pn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ln(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(t,e={}){return M(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fn=/^https?/;async function jn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Nn(t);for(const i of e)try{if(Un(i))return}catch(n){}f(t,"unauthorized-domain")}function Un(t){const e=C(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Fn.test(n))return!1;if(Mn.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new A(3e4,6e4);function Bn(){const t=Me().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function qn(t){return new Promise(((e,n)=>{var i,r,s;function o(){Bn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bn(),n(p(t,"network-request-failed"))},timeout:Vn.get()})}if(null===(r=null===(i=Me().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Me().gapi)||void 0===s?void 0:s.load)){const e=cn("iframefcb");return Me()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},ln(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw zn=null,t}))}let zn=null;function Gn(t){return zn=zn||qn(t),zn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new A(5e3,15e3),Hn="__/auth/iframe",$n="emulator/auth/iframe",Zn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?O(e,$n):`https://${t.config.authDomain}/${Hn}`,s={apiKey:e.apiKey,appName:t.name,v:r.Jn},o=Kn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.xO)(s).slice(1)}`}async function Yn(t){const e=await Gn(t),n=Me().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Xn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zn,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=p(t,"network-request-failed"),s=Me().setTimeout((()=>{i(r)}),Wn.get());function o(){Me().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qn=500,ti=600,ei="_blank",ni="http://localhost";class ii{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function ri(t,e,n,r=Qn,s=ti){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Jn),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.z$)().toLowerCase();n&&(l=pt(u)?ei:n),dt(u)&&(e=e||ni,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(wt(u)&&"_self"!==l)return si(e||"",l),new ii(null);const d=window.open(e||"",l,h);v(d,t,"popup-blocked");try{d.focus()}catch(f){}return new ii(d)}function si(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="__/auth/handler",ai="emulator/auth/handler";function li(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r.Jn,eventId:o};if(e instanceof Qt){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",(0,i.xb)(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))l[t]=e}if(e instanceof te){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(l.scopes=t.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const i of Object.keys(c))void 0===c[i]&&delete c[i];return`${ci(t)}?${(0,i.xO)(c).slice(1)}`}function ci({config:t}){return t.emulator?O(t,ai):`https://${t.authDomain}/${oi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="webStorageSupport";class hi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oe,this._completeRedirectFn=Rn,this._overrideRedirectResult=Sn}async _openPopup(t,e,n,i){var r;w(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=li(t,e,n,C(),i);return ri(t,s,Pe())}async _openRedirect(t,e,n,i){return await this._originValidation(t),Fe(li(t,e,n,C(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Yn(t),n=new On(t);return e.register("authEvent",(e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(ui,{type:ui},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[ui];void 0!==r&&e(!!r),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=jn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Et()||ft()||yt()}}const di=hi;class fi{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class pi extends fi{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new pi(t)}_finalizeEnroll(t,e,n){return we(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return sn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class gi{constructor(){}static assertion(t){return pi._fromCredential(t)}}gi.FACTOR_ID="phone";class mi{static assertionForEnrollment(t,e){return _i._fromSecret(t,e)}static assertionForSignIn(t,e){return _i._fromEnrollmentId(t,e)}static async generateSecret(t){const e=t;v("undefined"!==typeof e.auth,"internal-error");const n=await be(e.auth,{idToken:e.credential,totpEnrollmentInfo:{}});return vi._fromStartTotpMfaEnrollmentResponse(n,e.auth)}}mi.FACTOR_ID="totp";class _i extends fi{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new _i(e,void 0,t)}static _fromEnrollmentId(t,e){return new _i(e,t)}async _finalizeEnroll(t,e,n){return v("undefined"!==typeof this.secret,t,"argument-error"),Ee(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){v(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return on(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class vi{constructor(t,e,n,i,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(t,e){return new vi(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let i=!1;return(yi(t)||yi(e))&&(i=!0),i&&(yi(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),yi(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function yi(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var wi="@firebase/auth",bi="0.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ei{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ti(t){(0,r.Xd)(new a.wA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((e,i)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tt(t)},a=new St(e,i,r);return T(a,n),a})(i,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,r.Xd)(new a.wA("auth-internal",(t=>{const e=It(t.getProvider("auth").getImmediate());return(t=>new Ei(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(wi,bi,xi(t)),(0,r.KN)(wi,bi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=300,Si=(0,i.Pz)("authIdTokenMaxAge")||Ci;let Ii=null;const ki=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Si)return;const r=null===n||void 0===n?void 0:n.token;Ii!==r&&(Ii=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ri(t=(0,r.Mq)()){const e=(0,r.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=x(t,{popupRedirectResolver:di,persistence:[nn,Re,Oe]}),s=(0,i.Pz)("authTokenSyncURL");if(s){const t=ki(s);_e(n,t,(()=>t(n.currentUser))),me(n,(e=>t(e)))}const o=(0,i.q4)("auth");return o&&Rt(n,`http://${o}`),n}Ti("Browser")},3247:function(t,e,n){"use strict";n.d(e,{ET:function(){return Sh},vr:function(){return Rh},hJ:function(){return Ou},JU:function(){return Du},QT:function(){return bh},PL:function(){return xh},ad:function(){return Nu},pl:function(){return Th},r7:function(){return Ch}});var i,r=n(7456),s=n(8463),o=n(3333),a=n(4444),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},c={},u=u||{},h=l||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++_)}var m="closure_uid_"+(1e9*Math.random()>>>0),_=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:y,w.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function x(){this.s=this.s,this.o=this.o}var T=0;x.prototype.s=!1,x.prototype.na=function(){this.s||(this.s=!0,this.M(),0==T)||g(this)},x.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function I(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,i=e.length||0;t.length=n+i;for(let r=0;r<i;r++)t[n+r]=e[r]}else t.push(e)}}function k(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function A(t){return/^[\s\xa0]*$/.test(t)}var O=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function D(t,e){return t<e?-1:t>e?1:0}function L(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function P(t){return-1!=L().indexOf(t)}function N(t){return N[" "](t),t}function M(t){var e=K;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}N[" "]=d;var F,j=P("Opera"),U=P("Trident")||P("MSIE"),V=P("Edge"),B=V||U,q=P("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),z=-1!=L().toLowerCase().indexOf("webkit")&&!P("Edge");function G(){var t=h.document;return t?t.documentMode:void 0}t:{var W="",H=function(){var t=L();return q?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):z?/WebKit\/(\S+)/.exec(t):j?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(H&&(W=H?H[1]:""),U){var $=G();if(null!=$&&$>parseFloat(W)){F=String($);break t}}F=W}var Z,K={};function X(){return M((function(){let t=0;const e=O(String(F)).split("."),n=O("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=D(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==r[2].length,0==s[2].length)||D(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&U){var Y=G();Z=Y||(parseInt(F,10)||void 0)}else Z=void 0;var J=Z;function Q(t,e){if(k.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q){t:{try{N(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Q.X.h.call(this)}}E(Q,k);var tt={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function it(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++nt,this.ba=this.ea=!1}function rt(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function st(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ot(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lt(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ct(t){this.src=t,this.g={},this.h=0}function ut(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=C(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(rt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ht(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}ct.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ht(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new it(e,this.src,s,!!i,r),e.ea=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),ft={};function pt(t,e,n,i,r){if(i&&i.once)return _t(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pt(t,e[s],n,i,r);return null}return n=Tt(n),t&&t[et]?t.N(e,n,p(i)?!!i.capture:!!i,r):gt(t,e,n,!1,i,r)}function gt(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=p(r)?!!r.capture:!!r,a=Et(t);if(a||(t[dt]=a=new ct(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=mt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)R||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(wt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function mt(){function t(n){return e.call(t.src,t.listener,n)}const e=bt;return t}function _t(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)_t(t,e[s],n,i,r);return null}return n=Tt(n),t&&t[et]?t.O(e,n,p(i)?!!i.capture:!!i,r):gt(t,e,n,!0,i,r)}function vt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)vt(t,e[s],n,i,r);else i=p(i)?!!i.capture:!!i,n=Tt(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ht(s,n,i,r),-1<n&&(rt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Et(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ht(e,n,i,r)),(n=-1<t?e[t]:null)&&yt(n))}function yt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[et])ut(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(wt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Et(e))?(ut(n,t),0==n.h&&(n.src=null,e[dt]=null)):rt(t)}}}function wt(t){return t in ft?ft[t]:ft[t]="on"+t}function bt(t,e){if(t.ba)t=!0;else{e=new Q(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&yt(t),t=n.call(i,e)}return t}function Et(t){return t=t[dt],t instanceof ct?t:null}var xt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tt(t){return"function"===typeof t?t:(t[xt]||(t[xt]=function(e){return t.handleEvent(e)}),t[xt])}function Ct(){x.call(this),this.i=new ct(this),this.P=this,this.I=null}function St(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new k(e,t);else if(e instanceof k)e.target=e.target||t;else{var r=e;e=new k(i,t),lt(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=It(o,i,!0,e)&&r}if(o=e.g=t,r=It(o,i,!0,e)&&r,r=It(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=It(o,i,!1,e)&&r}function It(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ut(t.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}E(Ct,x),Ct.prototype[et]=!0,Ct.prototype.removeEventListener=function(t,e,n,i){vt(this,t,e,n,i)},Ct.prototype.M=function(){if(Ct.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)rt(n[i]);delete e.g[t],e.h--}}this.I=null},Ct.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Ct.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var kt=h.JSON.stringify;function Rt(){var t=jt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class At{constructor(){this.h=this.g=null}add(t,e){const n=Dt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Ot,Dt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Lt),(t=>t.reset()));class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pt(t){h.setTimeout((()=>{throw t}),0)}function Nt(t,e){Ot||Mt(),Ft||(Ot(),Ft=!0),jt.add(t,e)}function Mt(){var t=h.Promise.resolve(void 0);Ot=function(){t.then(Ut)}}var Ft=!1,jt=new At;function Ut(){for(var t;t=Rt();){try{t.h.call(t.g)}catch(n){Pt(n)}var e=Dt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function Vt(t,e){Ct.call(this),this.h=t||1,this.g=e||h,this.j=w(this.lb,this),this.l=Date.now()}function Bt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function qt(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function zt(t){t.g=qt((()=>{t.g=null,t.i&&(t.i=!1,zt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(Vt,Ct),i=Vt.prototype,i.ca=!1,i.R=null,i.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),St(this,"tick"),this.ca&&(Bt(this),this.start()))}},i.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Vt.X.M.call(this),Bt(this),delete this.g};class Gt extends x{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wt(t){x.call(this),this.h=t,this.g={}}E(Wt,x);var Ht=[];function $t(t,e,n,i){Array.isArray(n)||(n&&(Ht[0]=n.toString()),n=Ht);for(var r=0;r<n.length;r++){var s=pt(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Zt(t){st(t.g,(function(t,e){this.g.hasOwnProperty(e)&&yt(t)}),t),t.g={}}function Kt(){this.g=!0}function Xt(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Yt(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Jt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+te(t,n)+(i?" "+i:"")}))}function Qt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function te(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return kt(n)}catch(a){return e}}Wt.prototype.M=function(){Wt.X.M.call(this),Zt(this)},Wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Kt.prototype.Aa=function(){this.g=!1},Kt.prototype.info=function(){};var ee={},ne=null;function ie(){return ne=ne||new Ct}function re(t){k.call(this,ee.Pa,t)}function se(t){const e=ie();St(e,new re(e))}function oe(t,e){k.call(this,ee.STAT_EVENT,t),this.stat=e}function ae(t){const e=ie();St(e,new oe(e,t))}function le(t,e){k.call(this,ee.Qa,t),this.size=e}function ce(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ee.Pa="serverreachability",E(re,k),ee.STAT_EVENT="statevent",E(oe,k),ee.Qa="timingevent",E(le,k);var ue={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},he={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function de(){}function fe(t){return t.h||(t.h=t.i())}function pe(){}de.prototype.h=null;var ge,me={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function _e(){k.call(this,"d")}function ve(){k.call(this,"c")}function ye(){}function we(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Wt(this),this.O=Ee,t=B?125:void 0,this.T=new Vt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new be}function be(){this.i=null,this.g="",this.h=!1}E(_e,k),E(ve,k),E(ye,de),ye.prototype.g=function(){return new XMLHttpRequest},ye.prototype.i=function(){return{}},ge=new ye;var Ee=45e3,xe={},Te={};function Ce(t,e,n){t.K=1,t.v=$e(qe(e)),t.s=n,t.P=!0,Se(t,null)}function Se(t,e){t.F=Date.now(),Ae(t),t.A=qe(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),an(n.i,"t",i),t.C=0,n=t.l.H,t.h=new be,t.g=hi(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Gt(w(t.La,t,t.g),t.N)),$t(t.S,t.g,"readystatechange",t.ib),e=t.H?ot(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),se(),Xt(t.j,t.u,t.A,t.m,t.U,t.s)}function Ie(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function ke(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=Re(t,n),i==Te){4==e&&(t.o=4,ae(14),r=!1),Jt(t.j,t.m,null,"[Incomplete Response]");break}if(i==xe){t.o=4,ae(15),Jt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Jt(t.j,t.m,i,null),Ne(t,i)}Ie(t)&&i!=Te&&i!=xe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ae(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ii(e),e.K=!0,ae(11))):(Jt(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),Le(t))}function Re(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Te:(n=Number(e.substring(n,i)),isNaN(n)?xe:(i+=1,i+n>e.length?Te:(e=e.substr(i,n),t.C=i+n,e)))}function Ae(t){t.V=Date.now()+t.O,Oe(t,t.O)}function Oe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ce(w(t.gb,t),e)}function De(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||oi(t.l,t)}function Pe(t){De(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.T),Zt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ne(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||gn(n.h,t)))if(!t.J&&gn(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(c){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;si(n),Zn(n)}ni(n),ae(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=ce(w(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(c){}n.ja=void 0}}else li(n,11)}else if((t.J||n.g==t)&&si(n),!A(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(mn(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,He(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=ui(i,i.H?i.ka:null,i.V),o.J){_n(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(De(a),Ae(a)),i.g=o}else ei(i);0<n.i.length&&Xn(n)}else"stop"!=c[0]&&"close"!=c[0]||li(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?li(n,7):$n(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}se(4)}catch(c){}}function Me(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Fe(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function je(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Fe(t),i=Me(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}i=we.prototype,i.setTimeout=function(t){this.O=t},i.ib=function(t){t=t.target;const e=this.L;e&&3==Bn(t)?e.l():this.La(t)},i.La=function(t){try{if(t==this.g)t:{const u=Bn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(3!=u||B||this.g&&(this.h.h||this.g.fa()||qn(this.g)))){this.I||4!=u||7==e||se(8==e||0>=d?3:2),De(this);var n=this.g.aa();this.Y=n;e:if(Ie(this)){var i=qn(this.g);t="";var r=i.length,s=4==Bn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pe(this),Le(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Yt(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,ae(12),Pe(this),Le(this);break t}Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ne(this,n)}this.P?(ke(this,u,o),B&&this.i&&3==u&&($t(this.S,this.T,"tick",this.hb),this.T.start())):(Jt(this.j,this.m,o,null),Ne(this,o)),4==u&&Pe(this),this.i&&!this.I&&(4==u?oi(this.l,this):(this.i=!1,Ae(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),Pe(this),Le(this)}}}catch(u){}},i.hb=function(){if(this.g){var t=Bn(this.g),e=this.g.fa();this.C<e.length&&(De(this),ke(this,t,e),this.i&&4!=t&&Ae(this))}},i.cancel=function(){this.I=!0,Pe(this)},i.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Qt(this.j,this.A),2!=this.K&&(se(),ae(17)),Pe(this),this.o=2,Le(this)):Oe(this,this.V-t)};var Ue=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ve(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Be(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Be){this.h=void 0!==e?e:t.h,ze(this,t.j),this.s=t.s,this.g=t.g,Ge(this,t.m),this.l=t.l,e=t.i;var n=new nn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),We(this,n),this.o=t.o}else t&&(n=String(t).match(Ue))?(this.h=!!e,ze(this,n[1]||"",!0),this.s=Ze(n[2]||""),this.g=Ze(n[3]||"",!0),Ge(this,n[4]),this.l=Ze(n[5]||"",!0),We(this,n[6]||"",!0),this.o=Ze(n[7]||"")):(this.h=!!e,this.i=new nn(null,this.h))}function qe(t){return new Be(t)}function ze(t,e,n){t.j=n?Ze(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ge(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function We(t,e,n){e instanceof nn?(t.i=e,cn(t.i,t.h)):(n||(e=Ke(e,tn)),t.i=new nn(e,t.h))}function He(t,e,n){t.i.set(e,n)}function $e(t){return He(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ze(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ke(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Be.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ke(e,Ye,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ke(e,Ye,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ke(n,"/"==n.charAt(0)?Qe:Je,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ke(n,en)),t.join("")};var Ye=/[#\/\?@]/g,Je=/[#\?:]/g,Qe=/[#\?]/g,tn=/[#\?@]/g,en=/#/g;function nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&Ve(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function sn(t,e){rn(t),e=ln(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function on(t,e){return rn(t),e=ln(t,e),t.g.has(e)}function an(t,e,n){sn(t,e),0<n.length&&(t.i=null,t.g.set(ln(t,e),S(n)),t.h+=n.length)}function ln(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cn(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(sn(this,e),an(this,n,t))}),t)),t.j=e}i=nn.prototype,i.add=function(t,e){rn(this),this.i=null,t=ln(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){rn(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},i.oa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},i.W=function(t){rn(this);let e=[];if("string"===typeof t)on(this,t)&&(e=e.concat(this.g.get(ln(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return rn(this),this.i=null,t=ln(this,t),on(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};var un=class{constructor(t,e){this.h=t,this.g=e}};function hn(t){this.l=t||dn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function gn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function mn(t,e){t.g?t.g.add(e):t.h=e}function _n(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function vn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function yn(){}function wn(){this.g=new yn}function bn(t,e,n){const i=n||"";try{je(t,(function(t,n){let r=t;p(t)&&(r=kt(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function En(t,e){const n=new Kt;if(h.Image){const i=new Image;i.onload=b(xn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=b(xn,n,i,"TestLoadImage: error",!1,e),i.onabort=b(xn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=b(xn,n,i,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function xn(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(s){}}function Tn(t){this.l=t.ac||null,this.j=t.jb||!1}function Cn(t,e){Ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=vn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},yn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},yn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(Tn,de),Tn.prototype.g=function(){return new Cn(this.l,this.j)},Tn.prototype.i=function(t){return function(){return t}}({}),E(Cn,Ct);var Sn=0;function In(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function kn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rn(t)}function Rn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=Cn.prototype,i.open=function(t,e){if(this.readyState!=Sn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,kn(this)),this.readyState=Sn},i.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;In(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},i.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?kn(this):Rn(this),3==this.readyState&&In(this)}},i.Va=function(t){this.g&&(this.response=this.responseText=t,kn(this))},i.Ua=function(t){this.g&&(this.response=t,kn(this))},i.ga=function(){this.g&&kn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var An=h.JSON.parse;function On(t){Ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dn,this.K=this.L=!1}E(On,Ct);var Dn="",Ln=/^https?$/i,Pn=["POST","PUT"];function Nn(t){return U&&X()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Mn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fn(t),Un(t)}function Fn(t){t.D||(t.D=!0,St(t,"complete"),St(t,"error"))}function jn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Bn(t)||2!=t.aa()))if(t.v&&4==Bn(t))qt(t.Ha,0,t);else if(St(t,"readystatechange"),4==Bn(t)){t.h=!1;try{const l=t.aa();t:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===l){var r=String(t.H).match(Ue)[1]||null;if(!r&&h.self&&h.self.location){var s=h.self.location.protocol;r=s.substr(0,s.length-1)}i=!Ln.test(r?r.toLowerCase():"")}n=i}if(n)St(t,"complete"),St(t,"success");else{t.m=6;try{var o=2<Bn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Fn(t)}}finally{Un(t)}}}function Un(t,e){if(t.g){Vn(t);const i=t.g,r=t.C[0]?d:null;t.g=null,t.C=null,e||St(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function Vn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Bn(t){return t.g?t.g.readyState:0}function qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Dn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(ki){return null}}function zn(t){let e="";return st(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Gn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=zn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):He(t,e,n))}function Wn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hn(t){this.Ca=0,this.i=[],this.j=new Kt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Wn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Wn("baseRetryDelayMs",5e3,t),this.bb=Wn("retryDelaySeedMs",1e4,t),this.$a=Wn("forwardChannelMaxRetries",2,t),this.ta=Wn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(t&&t.concurrentRequestLimit),this.Fa=new wn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function $n(t){if(Kn(t),3==t.G){var e=t.U++,n=qe(t.F);He(n,"SID",t.I),He(n,"RID",e),He(n,"TYPE","terminate"),Qn(t,n),e=new we(t,t.j,e,void 0),e.K=2,e.v=$e(qe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=hi(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ae(e)}ci(t)}function Zn(t){t.g&&(ii(t),t.g.cancel(),t.g=null)}function Kn(t){Zn(t),t.u&&(h.clearTimeout(t.u),t.u=null),si(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Xn(t){fn(t.h)||t.m||(t.m=!0,Nt(t.Ja,t),t.C=0)}function Yn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=ce(w(t.Ja,t,e),ai(t,t.C)),t.C++,!0))}function Jn(t,e){var n;n=e?e.m:t.U++;const i=qe(t.F);He(i,"SID",t.I),He(i,"RID",n),He(i,"AID",t.T),Qn(t,i),t.o&&t.s&&Gn(i,t.o,t.s),n=new we(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ti(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),mn(t.h,n),Ce(n,i,e)}function Qn(t,e){t.ia&&st(t.ia,(function(t,n){He(e,n,t)})),t.l&&je({},(function(t,n){He(e,n,t)}))}function ti(t,e,n){n=Math.min(t.i.length,n);var i=t.l?w(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{bn(a,t,"req"+n+"_")}catch(ji){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function ei(t){t.g||t.u||(t.Z=1,Nt(t.Ia,t),t.A=0)}function ni(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=ce(w(t.Ia,t),ai(t,t.A)),t.A++,!0)}function ii(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ri(t){t.g=new we(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=qe(t.sa);He(e,"RID","rpc"),He(e,"SID",t.I),He(e,"CI",t.L?"0":"1"),He(e,"AID",t.T),He(e,"TYPE","xmlhttp"),Qn(t,e),t.o&&t.s&&Gn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=$e(qe(e)),n.s=null,n.P=!0,Se(n,t)}function si(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function oi(t,e){var n=null;if(t.g==e){si(t),ii(t),t.g=null;var i=2}else{if(!gn(t.h,e))return;n=e.D,_n(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=ie(),St(i,new le(i,n)),Xn(t)}else ei(t);else if(r=e.o,3==r||0==r&&0<t.pa||!(1==i&&Yn(t,e)||2==i&&ni(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:li(t,5);break;case 4:li(t,10);break;case 3:li(t,6);break;default:li(t,2)}}function ai(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function li(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=w(t.kb,t);n||(n=new Be("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||ze(n,"https"),$e(n)),En(n.toString(),i)}else ae(2);t.G=0,t.l&&t.l.va(e),ci(t),Kn(t)}function ci(t){if(t.G=0,t.la=[],t.l){const e=vn(t.h);0==e.length&&0==t.i.length||(I(t.la,e),I(t.la,t.i),t.h.i.length=0,S(t.i),t.i.length=0),t.l.ua()}}function ui(t,e,n){var i=n instanceof Be?qe(n):new Be(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),Ge(i,i.m);else{var r=h.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Be(null,void 0);i&&ze(s,i),e&&(s.g=e),r&&Ge(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&He(i,n,e),He(i,"VER",t.ma),Qn(t,i),i}function hi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new On(new Tn({jb:!0})):new On(t.ra),e.Ka(t.H),e}function di(){}function fi(){if(U&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function pi(t,e){Ct.call(this),this.g=new Hn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _i(this)}function gi(t){_e.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function mi(){ve.call(this),this.status=1}function _i(t){this.g=t}i=On.prototype,i.Ka=function(t){this.L=t},i.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?fe(this.u):fe(ge),this.g.onreadystatechange=w(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Mn(this,s)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=h.FormData&&t instanceof h.FormData,!(0<=C(Pn,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vn(this),0<this.B&&((this.K=Nn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.qa,this)):this.A=qt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Mn(this,s)}},i.qa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,St(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,St(this,"complete"),St(this,"abort"),Un(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Un(this,!0)),On.X.M.call(this)},i.Ha=function(){this.s||(this.F||this.v||this.l?jn(this):this.fb())},i.fb=function(){jn(this)},i.aa=function(){try{return 2<Bn(this)?this.g.status:-1}catch(t){return-1}},i.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),An(e)}},i.Ea=function(){return this.m},i.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Hn.prototype,i.ma=8,i.G=1,i.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new we(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=ot(s),lt(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ti(this,r,e),n=qe(this.F),He(n,"RID",t),He(n,"CVER",22),this.D&&He(n,"X-HTTP-Session-Id",this.D),Qn(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(zn(s)))+"&"+e:this.o&&Gn(n,this.o,s)),mn(this.h,r),this.Ya&&He(n,"TYPE","init"),this.O?(He(n,"$req",e),He(n,"SID","null"),r.Z=!0,Ce(r,n,null)):Ce(r,n,e),this.G=2}}else 3==this.G&&(t?Jn(this,t):0==this.i.length||fn(this.h)||Jn(this))},i.Ia=function(){if(this.u=null,ri(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ce(w(this.eb,this),t)}},i.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ae(10),Zn(this),ri(this))},i.cb=function(){null!=this.v&&(this.v=null,Zn(this),ni(this),ae(19))},i.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))},i=di.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Ra=function(){},fi.prototype.g=function(t,e){return new pi(t,e)},E(pi,Ct),pi.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ae(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ui(t,null,t.V),Xn(t)},pi.prototype.close=function(){$n(this.g)},pi.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=kt(t),t=n);e.i.push(new un(e.ab++,t)),3==e.G&&Xn(e)},pi.prototype.M=function(){this.g.l=null,delete this.j,$n(this.g),delete this.g,pi.X.M.call(this)},E(gi,_e),E(mi,ve),E(_i,di),_i.prototype.xa=function(){St(this.g,"a")},_i.prototype.wa=function(t){St(this.g,new gi(t))},_i.prototype.va=function(t){St(this.g,new mi)},_i.prototype.ua=function(){St(this.g,"b")},fi.prototype.createWebChannel=fi.prototype.g,pi.prototype.send=pi.prototype.u,pi.prototype.open=pi.prototype.m,pi.prototype.close=pi.prototype.close,ue.NO_ERROR=0,ue.TIMEOUT=8,ue.HTTP_ERROR=6,he.COMPLETE="complete",pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",Ct.prototype.listen=Ct.prototype.N,On.prototype.listenOnce=On.prototype.O,On.prototype.getLastError=On.prototype.Oa,On.prototype.getLastErrorCode=On.prototype.Ea,On.prototype.getStatus=On.prototype.aa,On.prototype.getResponseJson=On.prototype.Sa,On.prototype.getResponseText=On.prototype.fa,On.prototype.send=On.prototype.da,On.prototype.setWithCredentials=On.prototype.Ka;var vi=c.createWebChannelTransport=function(){return new fi},yi=c.getStatEventTarget=function(){return ie()},wi=c.ErrorCode=ue,bi=c.EventType=he,Ei=c.Event=ee,xi=c.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ti=c.FetchXmlHttpFactory=Tn,Ci=c.WebChannel=pe,Si=c.XhrIo=On;const Ii="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ki.UNAUTHENTICATED=new ki(null),ki.GOOGLE_CREDENTIALS=new ki("google-credentials-uid"),ki.FIRST_PARTY=new ki("first-party-uid"),ki.MOCK_USER=new ki("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ri="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new o.Yd("@firebase/firestore");function Oi(){return Ai.logLevel}function Di(t,...e){if(Ai.logLevel<=o["in"].DEBUG){const n=e.map(Ni);Ai.debug(`Firestore (${Ri}): ${t}`,...n)}}function Li(t,...e){if(Ai.logLevel<=o["in"].ERROR){const n=e.map(Ni);Ai.error(`Firestore (${Ri}): ${t}`,...n)}}function Pi(t,...e){if(Ai.logLevel<=o["in"].WARN){const n=e.map(Ni);Ai.warn(`Firestore (${Ri}): ${t}`,...n)}}function Ni(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t="Unexpected state"){const e=`FIRESTORE (${Ri}) INTERNAL ASSERTION FAILED: `+t;throw Li(e),new Error(e)}function Fi(t,e){t||Mi()}function ji(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Vi extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ki.UNAUTHENTICATED)))}shutdown(){}}class Gi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Wi{constructor(t){this.t=t,this.currentUser=ki.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Bi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Bi,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Di("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Di("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Bi)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Di("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Fi("string"==typeof e.accessToken),new qi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Fi(null===t||"string"==typeof t),new ki(t)}}class Hi{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=ki.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class $i{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Hi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ki.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ki{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&Di("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,Di("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Di("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?i(t):Di("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Fi("string"==typeof t.token),this.T=t.token,new Zi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Xi(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Ji(t,e){return t<e?-1:t>e?1:0}function Qi(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Vi(Ui.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Vi(Ui.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Vi(Ui.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Vi(Ui.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tr.fromMillis(Date.now())}static fromDate(t){return tr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new tr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ji(this.nanoseconds,t.nanoseconds):Ji(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this.timestamp=t}static fromTimestamp(t){return new er(t)}static min(){return new er(new tr(0,0))}static max(){return new er(new tr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Mi(),void 0===n?n=t.length-e:n>t.length-e&&Mi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===nr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof nr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ir extends nr{construct(t,e,n){return new ir(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Vi(Ui.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ir(e)}static emptyPath(){return new ir([])}}const rr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sr extends nr{construct(t,e,n){return new sr(t,e,n)}static isValidIdentifier(t){return rr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new sr(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Vi(Ui.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Vi(Ui.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Vi(Ui.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Vi(Ui.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new sr(e)}static emptyPath(){return new sr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t){this.path=t}static fromPath(t){return new or(ir.fromString(t))}static fromName(t){return new or(ir.fromString(t).popFirst(5))}static empty(){return new or(ir.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ir.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ir.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new or(new ir(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}ar.UNKNOWN_ID=-1;function lr(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=er.fromTimestamp(1e9===i?new tr(n+1,0):new tr(n,i));return new ur(r,or.empty(),e)}function cr(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ur(er.min(),or.empty(),-1)}static max(){return new ur(er.max(),or.empty(),-1)}}function hr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=or.comparator(t.documentKey,e.documentKey),0!==n?n:Ji(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t){if(t.code!==Ui.FAILED_PRECONDITION||t.message!==dr)throw t;Di("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Mi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new gr(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof gr?e:gr.resolve(e)}catch(t){return gr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):gr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):gr.reject(e)}static resolve(t){return new gr(((e,n)=>{e(t)}))}static reject(t){return new gr(((e,n)=>{n(t)}))}static waitFor(t){return new gr(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=gr.resolve(!1);for(const n of t)e=e.next((t=>t?gr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new gr(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;e(t[l]).next((t=>{s[l]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new gr(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function vr(t){return null==t}function yr(t){return 0===t&&1/t==-1/0}function wr(t){return"number"==typeof t&&Number.isInteger(t)&&!yr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_r.ct=-1;const br=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Er=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],xr=Er;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.comparator=t,this.root=e||Rr.EMPTY}insert(t,e){return new Ir(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Rr.BLACK,null,null))}remove(t){return new Ir(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Rr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new kr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new kr(this.root,t,this.comparator,!1)}getReverseIterator(){return new kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new kr(this.root,t,this.comparator,!0)}}class kr{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Rr{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Rr.RED,this.left=null!=i?i:Rr.EMPTY,this.right=null!=r?r:Rr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Rr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Rr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Rr.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Rr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Rr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mi();if(this.right.isRed())throw Mi();const t=this.left.check();if(t!==this.right.check())throw Mi();return t+(this.isRed()?0:1)}}Rr.EMPTY=null,Rr.RED=!0,Rr.BLACK=!1,Rr.EMPTY=new class{constructor(){this.size=0}get key(){throw Mi()}get value(){throw Mi()}get color(){throw Mi()}get left(){throw Mi()}get right(){throw Mi()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Rr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{constructor(t){this.comparator=t,this.data=new Ir(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Or(this.data.getIterator())}getIteratorFrom(t){return new Or(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ar))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ar(this.comparator);return e.data=t,e}}class Or{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dr{constructor(t){this.fields=t,t.sort(sr.comparator)}static empty(){return new Dr([])}unionWith(t){let e=new Ar(sr.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Dr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Qi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Lr("Invalid base64 string: "+t):t}}(t);return new Pr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Pr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ji(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pr.EMPTY_BYTE_STRING=new Pr("");const Nr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mr(t){if(Fi(!!t),"string"==typeof t){let e=0;const n=Nr.exec(t);if(Fi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Fr(t.seconds),nanos:Fr(t.nanos)}}function Fr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function jr(t){return"string"==typeof t?Pr.fromBase64String(t):Pr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Vr(t){const e=t.mapValue.fields.__previous_value__;return Ur(e)?Vr(e):e}function Br(t){const e=Mr(t.mapValue.fields.__local_write_time__.timestampValue);return new tr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class zr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new zr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof zr&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ur(t)?4:rs(t)?9007199254740991:10:Mi()}function Hr(t,e){if(t===e)return!0;const n=Wr(t);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Br(t).isEqual(Br(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Mr(t.timestampValue),i=Mr(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return jr(t.bytesValue).isEqual(jr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Fr(t.geoPointValue.latitude)===Fr(e.geoPointValue.latitude)&&Fr(t.geoPointValue.longitude)===Fr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Fr(t.integerValue)===Fr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Fr(t.doubleValue),i=Fr(e.doubleValue);return n===i?yr(n)===yr(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Qi(t.arrayValue.values||[],e.arrayValue.values||[],Hr);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Tr(n)!==Tr(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Hr(n[r],i[r])))return!1;return!0}(t,e);default:return Mi()}}function $r(t,e){return void 0!==(t.values||[]).find((t=>Hr(t,e)))}function Zr(t,e){if(t===e)return 0;const n=Wr(t),i=Wr(e);if(n!==i)return Ji(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ji(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Fr(t.integerValue||t.doubleValue),i=Fr(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Kr(t.timestampValue,e.timestampValue);case 4:return Kr(Br(t),Br(e));case 5:return Ji(t.stringValue,e.stringValue);case 6:return function(t,e){const n=jr(t),i=jr(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=Ji(n[r],i[r]);if(0!==t)return t}return Ji(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ji(Fr(t.latitude),Fr(e.latitude));return 0!==n?n:Ji(Fr(t.longitude),Fr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=Zr(n[r],i[r]);if(t)return t}return Ji(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Gr.mapValue&&e===Gr.mapValue)return 0;if(t===Gr.mapValue)return 1;if(e===Gr.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=Ji(i[o],s[o]);if(0!==t)return t;const e=Zr(n[i[o]],r[s[o]]);if(0!==e)return e}return Ji(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Mi()}}function Kr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ji(t,e);const n=Mr(t),i=Mr(e),r=Ji(n.seconds,i.seconds);return 0!==r?r:Ji(n.nanos,i.nanos)}function Xr(t){return Yr(t)}function Yr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Mr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?jr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,or.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Yr(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Yr(t.fields[r])}`;return n+"}"}(t.mapValue):Mi();var e,n}function Jr(t){return!!t&&"integerValue"in t}function Qr(t){return!!t&&"arrayValue"in t}function ts(t){return!!t&&"nullValue"in t}function es(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ns(t){return!!t&&"mapValue"in t}function is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=is(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=is(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rs(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ss{constructor(t){this.value=t}static empty(){return new ss({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ns(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=is(e)}setAll(t){let e=sr.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=is(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());ns(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Hr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ns(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Cr(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new ss(is(this.value))}}function os(t){const e=[];return Cr(t.fields,((t,n)=>{const i=new sr([t]);if(ns(n)){const t=os(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Dr(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class as{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new as(t,0,er.min(),er.min(),er.min(),ss.empty(),0)}static newFoundDocument(t,e,n,i){return new as(t,1,e,er.min(),n,i,0)}static newNoDocument(t,e){return new as(t,2,e,er.min(),er.min(),ss.empty(),0)}static newUnknownDocument(t,e){return new as(t,3,e,er.min(),er.min(),ss.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(er.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ss.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ss.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=er.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof as&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new as(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e){this.position=t,this.inclusive=e}}function cs(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?or.comparator(or.fromName(o.referenceValue),n.key):Zr(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function us(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t,e="asc"){this.field=t,this.dir=e}}function ds(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{}class ps extends fs{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Es(t,e,n):"array-contains"===e?new Ss(t,n):"in"===e?new Is(t,n):"not-in"===e?new ks(t,n):"array-contains-any"===e?new Rs(t,n):new ps(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new xs(t,n):new Ts(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Zr(e,this.value)):null!==e&&Wr(this.value)===Wr(e)&&this.matchesComparison(Zr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Mi()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class gs extends fs{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new gs(t,e)}matches(t){return ms(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function ms(t){return"and"===t.op}function _s(t){return vs(t)&&ms(t)}function vs(t){for(const e of t.filters)if(e instanceof gs)return!1;return!0}function ys(t){if(t instanceof ps)return t.field.canonicalString()+t.op.toString()+Xr(t.value);if(_s(t))return t.filters.map((t=>ys(t))).join(",");{const e=t.filters.map((t=>ys(t))).join(",");return`${t.op}(${e})`}}function ws(t,e){return t instanceof ps?function(t,e){return e instanceof ps&&t.op===e.op&&t.field.isEqual(e.field)&&Hr(t.value,e.value)}(t,e):t instanceof gs?function(t,e){return e instanceof gs&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&ws(n,e.filters[i])),!0)}(t,e):void Mi()}function bs(t){return t instanceof ps?function(t){return`${t.field.canonicalString()} ${t.op} ${Xr(t.value)}`}(t):t instanceof gs?function(t){return t.op.toString()+" {"+t.getFilters().map(bs).join(" ,")+"}"}(t):"Filter"}class Es extends ps{constructor(t,e,n){super(t,e,n),this.key=or.fromName(n.referenceValue)}matches(t){const e=or.comparator(t.key,this.key);return this.matchesComparison(e)}}class xs extends ps{constructor(t,e){super(t,"in",e),this.keys=Cs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ts extends ps{constructor(t,e){super(t,"not-in",e),this.keys=Cs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Cs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>or.fromName(t.referenceValue)))}class Ss extends ps{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qr(e)&&$r(e.arrayValue,this.value)}}class Is extends ps{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&$r(this.value.arrayValue,e)}}class ks extends ps{constructor(t,e){super(t,"not-in",e)}matches(t){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!$r(this.value.arrayValue,e)}}class Rs extends ps{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>$r(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ft=null}}function Os(t,e=null,n=[],i=[],r=null,s=null,o=null){return new As(t,e,n,i,r,s,o)}function Ds(t){const e=ji(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ys(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),vr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Xr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Xr(t))).join(",")),e.ft=t}return e.ft}function Ls(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ds(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ws(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!us(t.startAt,e.startAt)&&us(t.endAt,e.endAt)}function Ps(t){return or.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Ms(t,e,n,i,r,s,o,a){return new Ns(t,e,n,i,r,s,o,a)}function Fs(t){return new Ns(t)}function js(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Us(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vs(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Bs(t){return null!==t.collectionGroup}function qs(t){const e=ji(t);if(null===e.dt){e.dt=[];const t=Vs(e),n=Us(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new hs(t)),e.dt.push(new hs(sr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new hs(sr.keyField(),t))}}}return e.dt}function zs(t){const e=ji(t);if(!e.wt)if("F"===e.limitType)e.wt=Os(e.path,e.collectionGroup,qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of qs(e)){const e="desc"===r.dir?"asc":"desc";t.push(new hs(r.field,e))}const n=e.endAt?new ls(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ls(e.startAt.position,e.startAt.inclusive):null;e.wt=Os(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.wt}function Gs(t,e,n){return new Ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ws(t,e){return Ls(zs(t),zs(e))&&t.limitType===e.limitType}function Hs(t){return`${Ds(zs(t))}|lt:${t.limitType}`}function $s(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>bs(t))).join(", ")}]`),vr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Xr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Xr(t))).join(",")),`Target(${e})`}(zs(t))}; limitType=${t.limitType})`}function Zs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):or.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of qs(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=cs(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,qs(t),e))&&!(t.endAt&&!function(t,e,n){const i=cs(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,qs(t),e))}(t,e)}function Ks(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xs(t){return(e,n)=>{let i=!1;for(const r of qs(t)){const t=Ys(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Ys(t,e,n){const i=t.field.isKeyField()?or.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Zr(i,r):Mi()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Mi()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Cr(this.inner,((e,n)=>{for(const[i,r]of n)t(i,r)}))}isEmpty(){return Sr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new Ir(or.comparator);function to(){return Qs}const eo=new Ir(or.comparator);function no(...t){let e=eo;for(const n of t)e=e.insert(n.key,n);return e}function io(t){let e=eo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ro(){return oo()}function so(){return oo()}function oo(){return new Js((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ao=new Ir(or.comparator),lo=new Ar(or.comparator);function co(...t){let e=lo;for(const n of t)e=e.add(n);return e}const uo=new Ar(Ji);function ho(){return uo}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yr(e)?"-0":e}}function po(t){return{integerValue:""+t}}function go(t,e){return wr(e)?po(e):fo(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this._=void 0}}function _o(t,e,n){return t instanceof wo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof bo?Eo(t,e):t instanceof xo?To(t,e):function(t,e){const n=yo(t,e),i=So(n)+So(t._t);return Jr(n)&&Jr(t._t)?po(i):fo(t.serializer,i)}(t,e)}function vo(t,e,n){return t instanceof bo?Eo(t,e):t instanceof xo?To(t,e):n}function yo(t,e){return t instanceof Co?Jr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class wo extends mo{}class bo extends mo{constructor(t){super(),this.elements=t}}function Eo(t,e){const n=Io(e);for(const i of t.elements)n.some((t=>Hr(t,i)))||n.push(i);return{arrayValue:{values:n}}}class xo extends mo{constructor(t){super(),this.elements=t}}function To(t,e){let n=Io(e);for(const i of t.elements)n=n.filter((t=>!Hr(t,i)));return{arrayValue:{values:n}}}class Co extends mo{constructor(t,e){super(),this.serializer=t,this._t=e}}function So(t){return Fr(t.integerValue||t.doubleValue)}function Io(t){return Qr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,e){this.field=t,this.transform=e}}function Ro(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof bo&&e instanceof bo||t instanceof xo&&e instanceof xo?Qi(t.elements,e.elements,Hr):t instanceof Co&&e instanceof Co?Hr(t._t,e._t):t instanceof wo&&e instanceof wo}(t.transform,e.transform)}class Ao{constructor(t,e){this.version=t,this.transformResults=e}}class Oo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Oo}static exists(t){return new Oo(void 0,t)}static updateTime(t){return new Oo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Do(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Lo{}function Po(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Go(t.key,Oo.none()):new Uo(t.key,t.data,Oo.none());{const n=t.data,i=ss.empty();let r=new Ar(sr.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new Vo(t.key,i,new Dr(r.toArray()),Oo.none())}}function No(t,e,n){t instanceof Uo?function(t,e,n){const i=t.value.clone(),r=qo(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Vo?function(t,e,n){if(!Do(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=qo(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Bo(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Mo(t,e,n,i){return t instanceof Uo?function(t,e,n,i){if(!Do(t.precondition,e))return n;const r=t.value.clone(),s=zo(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof Vo?function(t,e,n,i){if(!Do(t.precondition,e))return n;const r=zo(t.fieldTransforms,i,e),s=e.data;return s.setAll(Bo(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Do(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Fo(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=yo(i.transform,t||null);null!=r&&(null===n&&(n=ss.empty()),n.set(i.field,r))}return n||null}function jo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Qi(t,e,((t,e)=>Ro(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uo extends Lo{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vo extends Lo{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Bo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function qo(t,e,n){const i=new Map;Fi(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,vo(o,a,n[r]))}return i}function zo(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,_o(t,s,e))}return i}class Go extends Lo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wo extends Lo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&No(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Mo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Mo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=so();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=Po(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(er.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),co())}isEqual(t){return this.batchId===t.batchId&&Qi(this.mutations,t.mutations,((t,e)=>jo(t,e)))&&Qi(this.baseMutations,t.baseMutations,((t,e)=>jo(t,e)))}}class $o{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Fi(t.mutations.length===n.length);let i=ao;const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new $o(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xo,Yo;function Jo(t){switch(t){default:return Mi();case Ui.CANCELLED:case Ui.UNKNOWN:case Ui.DEADLINE_EXCEEDED:case Ui.RESOURCE_EXHAUSTED:case Ui.INTERNAL:case Ui.UNAVAILABLE:case Ui.UNAUTHENTICATED:return!1;case Ui.INVALID_ARGUMENT:case Ui.NOT_FOUND:case Ui.ALREADY_EXISTS:case Ui.PERMISSION_DENIED:case Ui.FAILED_PRECONDITION:case Ui.ABORTED:case Ui.OUT_OF_RANGE:case Ui.UNIMPLEMENTED:case Ui.DATA_LOSS:return!0}}function Qo(t){if(void 0===t)return Li("GRPC error has no .code"),Ui.UNKNOWN;switch(t){case Xo.OK:return Ui.OK;case Xo.CANCELLED:return Ui.CANCELLED;case Xo.UNKNOWN:return Ui.UNKNOWN;case Xo.DEADLINE_EXCEEDED:return Ui.DEADLINE_EXCEEDED;case Xo.RESOURCE_EXHAUSTED:return Ui.RESOURCE_EXHAUSTED;case Xo.INTERNAL:return Ui.INTERNAL;case Xo.UNAVAILABLE:return Ui.UNAVAILABLE;case Xo.UNAUTHENTICATED:return Ui.UNAUTHENTICATED;case Xo.INVALID_ARGUMENT:return Ui.INVALID_ARGUMENT;case Xo.NOT_FOUND:return Ui.NOT_FOUND;case Xo.ALREADY_EXISTS:return Ui.ALREADY_EXISTS;case Xo.PERMISSION_DENIED:return Ui.PERMISSION_DENIED;case Xo.FAILED_PRECONDITION:return Ui.FAILED_PRECONDITION;case Xo.ABORTED:return Ui.ABORTED;case Xo.OUT_OF_RANGE:return Ui.OUT_OF_RANGE;case Xo.UNIMPLEMENTED:return Ui.UNIMPLEMENTED;case Xo.DATA_LOSS:return Ui.DATA_LOSS;default:return Mi()}}(Yo=Xo||(Xo={}))[Yo.OK=0]="OK",Yo[Yo.CANCELLED=1]="CANCELLED",Yo[Yo.UNKNOWN=2]="UNKNOWN",Yo[Yo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Yo[Yo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Yo[Yo.NOT_FOUND=5]="NOT_FOUND",Yo[Yo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Yo[Yo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Yo[Yo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Yo[Yo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Yo[Yo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Yo[Yo.ABORTED=10]="ABORTED",Yo[Yo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Yo[Yo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Yo[Yo.INTERNAL=13]="INTERNAL",Yo[Yo.UNAVAILABLE=14]="UNAVAILABLE",Yo[Yo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ta{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ea}static getOrCreateInstance(){return null===ea&&(ea=new ta),ea}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let ea=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,ia.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new na(er.min(),i,ho(),to(),co())}}class ia{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ia(n,e,co(),co(),co())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,e,n,i){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=i}}class sa{constructor(t,e){this.targetId=t,this.Et=e}}class oa{constructor(t,e,n=Pr.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class aa{constructor(){this.At=0,this.Rt=ua(),this.vt=Pr.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=co(),e=co(),n=co();return this.Rt.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Mi()}})),new ia(this.vt,this.bt,t,e,n)}xt(){this.Pt=!1,this.Rt=ua()}Nt(t,e){this.Pt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class la{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=to(),this.qt=ca(),this.Ut=new Ar(Ji)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}zt(t){this.forEachTarget(t,(e=>{const n=this.jt(e);switch(t.state){case 0:this.Wt(e)&&n.Dt(t.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(e);break;case 3:this.Wt(e)&&(n.Mt(),n.Dt(t.resumeToken));break;case 4:this.Wt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:Mi()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.Wt(n)&&e(n)}))}Jt(t){var e;const n=t.targetId,i=t.Et.count,r=this.Yt(n);if(r){const s=r.target;if(Ps(s))if(0===i){const t=new or(s.path);this.Qt(n,t,as.newNoDocument(t,er.min()))}else Fi(1===i);else{const r=this.Zt(n);r!==i&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(e=ta.instance)||void 0===e||e.notifyOnExistenceFilterMismatch({localCacheCount:r,existenceFilterCount:t.Et.count}))}}}Xt(t){const e=new Map;this.Bt.forEach(((n,i)=>{const r=this.Yt(i);if(r){if(n.current&&Ps(r.target)){const e=new or(r.target.path);null!==this.Lt.get(e)||this.te(i,e)||this.Qt(i,e,as.newNoDocument(e,t))}n.St&&(e.set(i,n.Ct()),n.xt())}}));let n=co();this.qt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const i=new na(t,e,this.Ut,this.Lt,n);return this.Lt=to(),this.qt=ca(),this.Ut=new Ar(Ji),i}Gt(t,e){if(!this.Wt(t))return;const n=this.te(t,e.key)?2:0;this.jt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.Wt(t))return;const i=this.jt(t);this.te(t,e)?i.Nt(e,1):i.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Zt(t){const e=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let e=this.Bt.get(t);return e||(e=new aa,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new Ar(Ji),this.qt=this.qt.insert(t,e)),e}Wt(t){const e=null!==this.Yt(t);return e||Di("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new aa),this.Ft.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.Ft.getRemoteKeysForTarget(t).has(e)}}function ca(){return new Ir(or.comparator)}function ua(){return new Ir(or.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),da=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),fa=(()=>{const t={and:"AND",or:"OR"};return t})();class pa{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ma(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _a(t,e){return ga(t,e.toTimestamp())}function va(t){return Fi(!!t),er.fromTimestamp(function(t){const e=Mr(t);return new tr(e.seconds,e.nanos)}(t))}function ya(t,e){return function(t){return new ir(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function wa(t){const e=ir.fromString(t);return Fi(za(e)),e}function ba(t,e){return ya(t.databaseId,e.path)}function Ea(t,e){const n=wa(e);if(n.get(1)!==t.databaseId.projectId)throw new Vi(Ui.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Vi(Ui.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new or(Sa(n))}function xa(t,e){return ya(t.databaseId,e)}function Ta(t){const e=wa(t);return 4===e.length?ir.emptyPath():Sa(e)}function Ca(t){return new ir(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sa(t){return Fi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ia(t,e,n){return{name:ba(t,e),fields:n.value.mapValue.fields}}function ka(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Mi()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(Fi(void 0===e||"string"==typeof e),Pr.fromBase64String(e||"")):(Fi(void 0===e||e instanceof Uint8Array),Pr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Ui.UNKNOWN:Qo(t.code);return new Vi(e,t.message||"")}(o);n=new oa(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Ea(t,i.document.name),s=va(i.document.updateTime),o=i.document.createTime?va(i.document.createTime):er.min(),a=new ss({mapValue:{fields:i.document.fields}}),l=as.newFoundDocument(r,s,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new ra(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Ea(t,i.document),s=i.readTime?va(i.readTime):er.min(),o=as.newNoDocument(r,s),a=i.removedTargetIds||[];n=new ra([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Ea(t,i.document),s=i.removedTargetIds||[];n=new ra([],s,r,null)}else{if(!("filter"in e))return Mi();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new Ko(i),s=t.targetId;n=new sa(s,r)}}return n}function Ra(t,e){let n;if(e instanceof Uo)n={update:Ia(t,e.key,e.value)};else if(e instanceof Go)n={delete:ba(t,e.key)};else if(e instanceof Vo)n={update:Ia(t,e.key,e.data),updateMask:qa(e.fieldMask)};else{if(!(e instanceof Wo))return Mi();n={verify:ba(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof wo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof bo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof xo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Co)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Mi()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:_a(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Mi()}(t,e.precondition)),n}function Aa(t,e){return t&&t.length>0?(Fi(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?va(t.updateTime):va(e);return n.isEqual(er.min())&&(n=va(e)),new Ao(n,t.transformResults||[])}(t,e)))):[]}function Oa(t,e){return{documents:[xa(t,e.path)]}}function Da(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=xa(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xa(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0!==t.length)return Ba(gs.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ua(t.field),direction:Ma(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.useProto3Json||vr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function La(t){let e=Ta(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Fi(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Na(t);return e instanceof gs&&_s(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new hs(Va(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,vr(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new ls(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new ls(n,e)}(n.endAt)),Ms(e,r,o,s,a,"F",l,c)}function Pa(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mi()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Na(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Va(t.unaryFilter.field);return ps.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Va(t.unaryFilter.field);return ps.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Va(t.unaryFilter.field);return ps.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Va(t.unaryFilter.field);return ps.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Mi()}}(t):void 0!==t.fieldFilter?function(t){return ps.create(Va(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mi()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return gs.create(t.compositeFilter.filters.map((t=>Na(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Mi()}}(t.compositeFilter.op))}(t):Mi()}function Ma(t){return ha[t]}function Fa(t){return da[t]}function ja(t){return fa[t]}function Ua(t){return{fieldPath:t.canonicalString()}}function Va(t){return sr.fromServerFormat(t.fieldPath)}function Ba(t){return t instanceof ps?function(t){if("=="===t.op){if(es(t.value))return{unaryFilter:{field:Ua(t.field),op:"IS_NAN"}};if(ts(t.value))return{unaryFilter:{field:Ua(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(es(t.value))return{unaryFilter:{field:Ua(t.field),op:"IS_NOT_NAN"}};if(ts(t.value))return{unaryFilter:{field:Ua(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ua(t.field),op:Fa(t.op),value:t.value}}}(t):t instanceof gs?function(t){const e=t.getFilters().map((t=>Ba(t)));return 1===e.length?e[0]:{compositeFilter:{op:ja(t.op),filters:e}}}(t):Mi()}function qa(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function za(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,e,n,i,r=er.min(),s=er.min(),o=Pr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Ga(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ga(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ga(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t){this.se=t}}function Ha(t){const e=La({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Gs(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $a{constructor(){}oe(t,e){this.ue(t,e),e.ce()}ue(t,e){if("nullValue"in t)this.ae(e,5);else if("booleanValue"in t)this.ae(e,10),e.he(t.booleanValue?1:0);else if("integerValue"in t)this.ae(e,15),e.he(Fr(t.integerValue));else if("doubleValue"in t){const n=Fr(t.doubleValue);isNaN(n)?this.ae(e,13):(this.ae(e,15),yr(n)?e.he(0):e.he(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ae(e,20),"string"==typeof n?e.le(n):(e.le(`${n.seconds||""}`),e.he(n.nanos||0))}else if("stringValue"in t)this.fe(t.stringValue,e),this.de(e);else if("bytesValue"in t)this.ae(e,30),e.we(jr(t.bytesValue)),this.de(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ae(e,45),e.he(n.latitude||0),e.he(n.longitude||0)}else"mapValue"in t?rs(t)?this.ae(e,Number.MAX_SAFE_INTEGER):(this.me(t.mapValue,e),this.de(e)):"arrayValue"in t?(this.ge(t.arrayValue,e),this.de(e)):Mi()}fe(t,e){this.ae(e,25),this.ye(t,e)}ye(t,e){e.le(t)}me(t,e){const n=t.fields||{};this.ae(e,55);for(const i of Object.keys(n))this.fe(i,e),this.ue(n[i],e)}ge(t,e){const n=t.values||[];this.ae(e,50);for(const i of n)this.ue(i,e)}_e(t,e){this.ae(e,37),or.fromName(t).path.forEach((t=>{this.ae(e,60),this.ye(t,e)}))}ae(t,e){t.he(e)}de(t){t.he(2)}}$a.pe=new $a;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Za{constructor(){this.He=new Ka}addToCollectionParentIndex(t,e){return this.He.add(e),gr.resolve()}getCollectionParents(t,e){return gr.resolve(this.He.getEntries(e))}addFieldIndex(t,e){return gr.resolve()}deleteFieldIndex(t,e){return gr.resolve()}getDocumentsMatchingTarget(t,e){return gr.resolve(null)}getIndexType(t,e){return gr.resolve(0)}getFieldIndexes(t,e){return gr.resolve([])}getNextCollectionGroupToUpdate(t){return gr.resolve(null)}getMinOffset(t,e){return gr.resolve(ur.min())}getMinOffsetFromCollectionGroup(t,e){return gr.resolve(ur.min())}updateCollectionGroup(t,e,n){return gr.resolve()}updateIndexEntries(t,e){return gr.resolve()}}class Ka{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Ar(ir.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Ar(ir.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Xa{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Xa(t,Xa.DEFAULT_COLLECTION_PERCENTILE,Xa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xa.DEFAULT_COLLECTION_PERCENTILE=10,Xa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xa.DEFAULT=new Xa(41943040,Xa.DEFAULT_COLLECTION_PERCENTILE,Xa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xa.DISABLED=new Xa(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new Ya(0)}static bn(){return new Ya(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(){this.changes=new Js((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,as.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?gr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Mo(n.mutation,t,Dr.empty(),tr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,co()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=co()){const i=ro();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=no();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ro();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,co())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=to();const s=oo(),o=oo();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Vo)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Mo(o.mutation,e,o.mutation.getFieldMask(),tr.now())):s.set(e.key,Dr.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Qa(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=oo();let i=new Ir(((t,e)=>t-e)),r=co();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Dr.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||co()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=so();l.forEach((t=>{if(!r.has(t)){const i=Po(e.get(t),n.get(t));null!==i&&c.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return gr.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return or.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Bs(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):gr.resolve(ro());let o=-1,a=r;return s.next((e=>gr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?gr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,co()))).next((t=>({batchId:o,changes:io(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new or(e)).next((t=>{let e=no();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let r=no();return this.indexManager.getCollectionParents(t,i).next((s=>gr.forEach(s,(s=>{const o=function(t,e){return new Ns(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,as.newInvalidDocument(i)))}));let n=no();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Mo(s.mutation,r,Dr.empty(),tr.now()),Zs(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return gr.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:va(n.createTime)}),gr.resolve()}getNamedQuery(t,e){return gr.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Ha(t.bundledQuery),readTime:va(t.readTime)}}(e)),gr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.overlays=new Ir(or.comparator),this.ts=new Map}getOverlay(t,e){return gr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ro();return gr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.re(t,e,i)})),gr.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.ts.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.ts.delete(n)),gr.resolve()}getOverlaysForCollection(t,e,n){const i=ro(),r=e.length+1,s=new or(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return gr.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Ir(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=ro(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ro(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return gr.resolve(o)}re(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.ts.get(i.largestBatchId).delete(n.key);this.ts.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Zo(e,n));let r=this.ts.get(e);void 0===r&&(r=co(),this.ts.set(e,r)),this.ts.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.es=new Ar(rl.ns),this.ss=new Ar(rl.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,e){const n=new rl(t,e);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.us(new rl(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}hs(t){const e=new or(new ir([])),n=new rl(e,t),i=new rl(e,t+1),r=[];return this.ss.forEachInRange([n,i],(t=>{this.us(t),r.push(t.key)})),r}ls(){this.es.forEach((t=>this.us(t)))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const e=new or(new ir([])),n=new rl(e,t),i=new rl(e,t+1);let r=co();return this.ss.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new rl(t,0),n=this.es.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class rl{constructor(t,e){this.key=t,this.ds=e}static ns(t,e){return or.comparator(t.key,e.key)||Ji(t.ds,e.ds)}static rs(t,e){return Ji(t.ds,e.ds)||or.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this._s=new Ar(rl.ns)}checkEmpty(t){return gr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Ho(r,e,n,i);this.mutationQueue.push(s);for(const o of i)this._s=this._s.add(new rl(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return gr.resolve(s)}lookupMutationBatch(t,e){return gr.resolve(this.gs(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ys(n),r=i<0?0:i;return gr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return gr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return gr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rl(e,0),i=new rl(e,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([n,i],(t=>{const e=this.gs(t.ds);r.push(e)})),gr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ar(Ji);return e.forEach((t=>{const e=new rl(t,0),i=new rl(t,Number.POSITIVE_INFINITY);this._s.forEachInRange([e,i],(t=>{n=n.add(t.ds)}))})),gr.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;or.isDocumentKey(r)||(r=r.child(""));const s=new rl(new or(r),0);let o=new Ar(Ji);return this._s.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ds)),!0)}),s),gr.resolve(this.ps(o))}ps(t){const e=[];return t.forEach((t=>{const n=this.gs(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Fi(0===this.Is(e.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return gr.forEach(e.mutations,(i=>{const r=new rl(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this._s=n}))}En(t){}containsKey(t,e){const n=new rl(e,0),i=this._s.firstAfterOrEqual(n);return gr.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,gr.resolve()}Is(t,e){return this.ys(t)}ys(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}gs(t){const e=this.ys(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t){this.Ts=t,this.docs=new Ir(or.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Ts(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return gr.resolve(n?n.document.mutableCopy():as.newInvalidDocument(e))}getEntries(t,e){let n=to();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():as.newInvalidDocument(t))})),gr.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=to();const s=e.path,o=new or(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||hr(cr(o),n)<=0||(i.has(o.key)||Zs(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return gr.resolve(r)}getAllFromCollectionGroup(t,e,n,i){Mi()}Es(t,e){return gr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new al(this)}getSize(t){return gr.resolve(this.size)}}class al extends Ja{constructor(t){super(),this.Jn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Jn.addEntry(t,i)):this.Jn.removeEntry(n)})),gr.waitFor(e)}getFromCache(t,e){return this.Jn.getEntry(t,e)}getAllFromCache(t,e){return this.Jn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t){this.persistence=t,this.As=new Js((t=>Ds(t)),Ls),this.lastRemoteSnapshotVersion=er.min(),this.highestTargetId=0,this.Rs=0,this.vs=new il,this.targetCount=0,this.bs=Ya.vn()}forEachTarget(t,e){return this.As.forEach(((t,n)=>e(n))),gr.resolve()}getLastRemoteSnapshotVersion(t){return gr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return gr.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),gr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Rs&&(this.Rs=e),gr.resolve()}Sn(t){this.As.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Ya(e),this.highestTargetId=e),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,e){return this.Sn(e),this.targetCount+=1,gr.resolve()}updateTargetData(t,e){return this.Sn(e),gr.resolve()}removeTargetData(t,e){return this.As.delete(e.target),this.vs.hs(e.targetId),this.targetCount-=1,gr.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.As.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.As.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),gr.waitFor(r).next((()=>i))}getTargetCount(t){return gr.resolve(this.targetCount)}getTargetData(t,e){const n=this.As.get(e)||null;return gr.resolve(n)}addMatchingKeys(t,e,n){return this.vs.os(e,n),gr.resolve()}removeMatchingKeys(t,e,n){this.vs.cs(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),gr.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.vs.hs(e),gr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.vs.fs(e);return gr.resolve(n)}containsKey(t,e){return gr.resolve(this.vs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e){this.Ps={},this.overlays={},this.Vs=new _r(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new ll(this),this.indexManager=new Za,this.remoteDocumentCache=function(t){return new ol(t)}((t=>this.referenceDelegate.Cs(t))),this.serializer=new Wa(e),this.xs=new el(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new nl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ps[t.toKey()];return n||(n=new sl(e,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,e,n){Di("MemoryPersistence","Starting transaction:",t);const i=new ul(this.Vs.next());return this.referenceDelegate.Ns(),n(i).next((t=>this.referenceDelegate.ks(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Os(t,e){return gr.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class ul extends fr{constructor(t){super(),this.currentSequenceNumber=t}}class hl{constructor(t){this.persistence=t,this.$s=new il,this.Ms=null}static Fs(t){return new hl(t)}get Bs(){if(this.Ms)return this.Ms;throw Mi()}addReference(t,e,n){return this.$s.addReference(n,e),this.Bs.delete(n.toString()),gr.resolve()}removeReference(t,e,n){return this.$s.removeReference(n,e),this.Bs.add(n.toString()),gr.resolve()}markPotentiallyOrphaned(t,e){return this.Bs.add(e.toString()),gr.resolve()}removeTarget(t,e){this.$s.hs(e.targetId).forEach((t=>this.Bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ns(){this.Ms=new Set}ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gr.forEach(this.Bs,(n=>{const i=or.fromPath(n);return this.Ls(t,i).next((t=>{t||e.removeEntry(i,er.min())}))})).next((()=>(this.Ms=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ls(t,e).next((t=>{t?this.Bs.delete(e.toString()):this.Bs.add(e.toString())}))}Cs(t){return 0}Ls(t,e){return gr.or([()=>gr.resolve(this.$s.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dl{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Vi=n,this.Si=i}static Di(t,e){let n=co(),i=co();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new dl(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.Ci=!1}initialize(t,e){this.xi=t,this.indexManager=e,this.Ci=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ni(t,e).next((r=>r||this.ki(t,e,i,n))).next((n=>n||this.Oi(t,e)))}Ni(t,e){if(js(e))return gr.resolve(null);let n=zs(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=Gs(e,null,"F"),n=zs(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=co(...i);return this.xi.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.$i(e,i);return this.Mi(e,s,r,n.readTime)?this.Ni(t,Gs(e,null,"F")):this.Fi(t,s,e,n)}))))})))))}ki(t,e,n,i){return js(e)||i.isEqual(er.min())?this.Oi(t,e):this.xi.getDocuments(t,n).next((r=>{const s=this.$i(e,r);return this.Mi(e,s,n,i)?this.Oi(t,e):(Oi()<=o["in"].DEBUG&&Di("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$s(e)),this.Fi(t,s,e,lr(i,-1)))}))}$i(t,e){let n=new Ar(Xs(t));return e.forEach(((e,i)=>{Zs(t,i)&&(n=n.add(i))})),n}Mi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(t,e){return Oi()<=o["in"].DEBUG&&Di("QueryEngine","Using full collection scan to execute query:",$s(e)),this.xi.getDocumentsMatchingQuery(t,e,ur.min())}Fi(t,e,n,i){return this.xi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e,n,i){this.persistence=t,this.Bi=e,this.serializer=i,this.Li=new Ir(Ji),this.qi=new Js((t=>Ds(t)),Ls),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(n)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tl(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Li)))}}function gl(t,e,n,i){return new pl(t,e,n,i)}async function ml(t,e){const n=ji(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=co();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Qi:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function _l(t,e){const n=ji(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=gr.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Fi(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=co();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}function vl(t){const e=ji(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ds.getLastRemoteSnapshotVersion(t)))}function yl(t,e){const n=ji(t),i=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const o=[];e.targetChanges.forEach(((s,a)=>{const l=r.get(a);if(!l)return;o.push(n.Ds.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(t,s.addedDocuments,a))));let c=l.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?c=c.withResumeToken(Pr.EMPTY_BYTE_STRING,er.min()).withLastLimboFreeSnapshotVersion(er.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,i)),r=r.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,s)&&o.push(n.Ds.updateTargetData(t,c))}));let a=to(),l=co();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(wl(t,s,e.documentUpdates).next((t=>{a=t.zi,l=t.ji}))),!i.isEqual(er.min())){const e=n.Ds.getLastRemoteSnapshotVersion(t).next((e=>n.Ds.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return gr.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,l))).next((()=>a))})).then((t=>(n.Li=r,t)))}function wl(t,e,n){let i=co(),r=co();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=to();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(er.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):Di("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{zi:i,ji:r}}))}function bl(t,e){const n=ji(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function El(t,e){const n=ji(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Ds.getTargetData(t,e).next((r=>r?(i=r,gr.resolve(i)):n.Ds.allocateTargetId(t).next((r=>(i=new Ga(e,r,0,t.currentSequenceNumber),n.Ds.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.Li.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function xl(t,e,n){const i=ji(t),r=i.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!mr(t))throw t;Di("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Li=i.Li.remove(e),i.qi.delete(r.target)}function Tl(t,e,n){const i=ji(t);let r=er.min(),s=co();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=ji(t),r=i.qi.get(n);return void 0!==r?gr.resolve(i.Li.get(r)):i.Ds.getTargetData(e,n)}(i,t,zs(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.Bi.getDocumentsMatchingQuery(t,e,n?r:er.min(),n?s:co()))).next((t=>(Cl(i,Ks(e),t),{documents:t,Wi:s})))))}function Cl(t,e,n){let i=t.Ui.get(e)||er.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Ui.set(e,i)}class Sl{constructor(){this.activeTargetIds=ho()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Il{constructor(){this.Br=new Sl,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,e,n){this.Lr[t]=e}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Sl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Di("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){Di("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al=null;function Ol(){return null===Al?Al=268435456+Math.round(2147483648*Math.random()):Al++,"0x"+Al.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Dl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="WebChannelConnection";class Nl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.ro=e+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,e,n,i,r){const s=Ol(),o=this.ao(t,e);Di("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this.ho(a,i,r),this.lo(t,o,a,n).then((e=>(Di("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Pi("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}fo(t,e,n,i,r,s){return this.co(t,e,n,i,r)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ri,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=Dl[t];return`${this.ro}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,i){const r=Ol();return new Promise(((s,o)=>{const a=new Si;a.setWithCredentials(!0),a.listenOnce(bi.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case wi.NO_ERROR:const e=a.getResponseJson();Di(Pl,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case wi.TIMEOUT:Di(Pl,`RPC '${t}' ${r} timed out`),o(new Vi(Ui.DEADLINE_EXCEEDED,"Request time out"));break;case wi.HTTP_ERROR:const n=a.getStatus();if(Di(Pl,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ui).indexOf(e)>=0?e:Ui.UNKNOWN}(e.status);o(new Vi(t,e.message))}else o(new Vi(Ui.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Vi(Ui.UNAVAILABLE,"Connection failed."));break;default:Mi()}}finally{Di(Pl,`RPC '${t}' ${r} completed.`)}}));const l=JSON.stringify(i);Di(Pl,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",l,n,15)}))}wo(t,e,n){const i=Ol(),r=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=vi(),o=yi(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ti({})),this.ho(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const l=r.join("");Di(Pl,`Creating RPC '${t}' stream ${i}: ${l}`,a);const c=s.createWebChannel(l,a);let u=!1,h=!1;const d=new Ll({Wr:e=>{h?Di(Pl,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(u||(Di(Pl,`Opening RPC '${t}' stream ${i} transport.`),c.open(),u=!0),Di(Pl,`RPC '${t}' stream ${i} sending:`,e),c.send(e))},Hr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,Ci.EventType.OPEN,(()=>{h||Di(Pl,`RPC '${t}' stream ${i} transport opened.`)})),f(c,Ci.EventType.CLOSE,(()=>{h||(h=!0,Di(Pl,`RPC '${t}' stream ${i} transport closed`),d.so())})),f(c,Ci.EventType.ERROR,(e=>{h||(h=!0,Pi(Pl,`RPC '${t}' stream ${i} transport errored:`,e),d.so(new Vi(Ui.UNAVAILABLE,"The operation could not be completed")))})),f(c,Ci.EventType.MESSAGE,(e=>{var n;if(!h){const r=e.data[0];Fi(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Di(Pl,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=Xo[t];if(void 0!==e)return Qo(e)}(e),r=o.message;void 0===n&&(n=Ui.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),h=!0,d.so(new Vi(n,r)),c.close()}else Di(Pl,`RPC '${t}' stream ${i} received:`,r),d.io(r)}})),f(o,Ei.STAT_EVENT,(e=>{e.stat===xi.PROXY?Di(Pl,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===xi.NOPROXY&&Di(Pl,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t){return new pa(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Ws=t,this.timerId=e,this._o=n,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),i=Math.max(0,e-n);i>0&&Di("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,e,n,i,r,s,o,a){this.Ws=t,this.bo=n,this.Po=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new jl(t,e)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,e){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==t?this.Co.reset():e&&e.code===Ui.RESOURCE_EXHAUSTED?(Li(e.toString()),Li("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):e&&e.code===Ui.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.Ko(t,n)}),(e=>{t((()=>{const t=new Vi(Ui.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Go(t)}))}))}Ko(t,e){const n=this.Uo(this.Vo);this.stream=this.Qo(t,e),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((t=>{n((()=>this.Go(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(t){return Di("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Ws.enqueueAndForget((()=>this.Vo===t?e():(Di("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Vl extends Ul{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r}Qo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Co.reset();const e=ka(this.serializer,t),n=function(t){if(!("targetChange"in t))return er.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?er.min():e.readTime?va(e.readTime):er.min()}(t);return this.listener.zo(e,n)}jo(t){const e={};e.database=Ca(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;return n=Ps(i)?{documents:Oa(t,i)}:{query:Da(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ma(t,e.resumeToken):e.snapshotVersion.compareTo(er.min())>0&&(n.readTime=ga(t,e.snapshotVersion.toTimestamp())),n}(this.serializer,t);const n=Pa(this.serializer,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=Ca(this.serializer),e.removeTarget=t,this.Fo(e)}}class Bl extends Ul{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Fi(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const e=Aa(t.writeResults,t.commitTime),n=va(t.commitTime);return this.listener.Zo(n,e)}return Fi(!t.writeResults||0===t.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=Ca(this.serializer),this.Fo(t)}Yo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ra(this.serializer,t)))};this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new Vi(Ui.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.co(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ui.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vi(Ui.UNKNOWN,t.toString())}))}fo(t,e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.fo(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ui.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vi(Ui.UNKNOWN,t.toString())}))}terminate(){this.eu=!0}}class zl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,"Online"===t&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Li(e),this.ru=!1):Di("OnlineStateTracker",e)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr((t=>{n.enqueueAndForget((async()=>{Ql(this)&&(Di("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ji(t);e.du.add(4),await Hl(e),e.mu.set("Unknown"),e.du.delete(4),await Wl(e)}(this))}))})),this.mu=new zl(n,i)}}async function Wl(t){if(Ql(t))for(const e of t.wu)await e(!0)}async function Hl(t){for(const e of t.wu)await e(!1)}function $l(t,e){const n=ji(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Jl(n)?Yl(n):_c(n).No()&&Kl(n,e))}function Zl(t,e){const n=ji(t),i=_c(n);n.fu.delete(e),i.No()&&Xl(n,e),0===n.fu.size&&(i.No()?i.$o():Ql(n)&&n.mu.set("Unknown"))}function Kl(t,e){t.gu.Ot(e.targetId),_c(t).jo(e)}function Xl(t,e){t.gu.Ot(e),_c(t).Wo(e)}function Yl(t){t.gu=new la({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),_c(t).start(),t.mu.ou()}function Jl(t){return Ql(t)&&!_c(t).xo()&&t.fu.size>0}function Ql(t){return 0===ji(t).du.size}function tc(t){t.gu=void 0}async function ec(t){t.fu.forEach(((e,n)=>{Kl(t,e)}))}async function nc(t,e){tc(t),Jl(t)?(t.mu.au(e),Yl(t)):t.mu.set("Unknown")}async function ic(t,e,n){if(t.mu.set("Online"),e instanceof oa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.fu.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.fu.delete(i),t.gu.removeTarget(i))}(t,e)}catch(n){Di("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await rc(t,n)}else if(e instanceof ra?t.gu.Kt(e):e instanceof sa?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(er.min()))try{const e=await vl(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.gu.Xt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.fu.get(i);r&&t.fu.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.fu.get(e);if(!n)return;t.fu.set(e,n.withResumeToken(Pr.EMPTY_BYTE_STRING,n.snapshotVersion)),Xl(t,e);const i=new Ga(n.target,e,1,n.sequenceNumber);Kl(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Di("RemoteStore","Failed to raise snapshot:",e),await rc(t,e)}}async function rc(t,e,n){if(!mr(e))throw e;t.du.add(1),await Hl(t),t.mu.set("Offline"),n||(n=()=>vl(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Di("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Wl(t)}))}function sc(t,e){return e().catch((n=>rc(t,n,e)))}async function oc(t){const e=ji(t),n=vc(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;ac(e);)try{const t=await bl(e.localStore,i);if(null===t){0===e.lu.length&&n.$o();break}i=t.batchId,lc(e,t)}catch(t){await rc(e,t)}cc(e)&&uc(e)}function ac(t){return Ql(t)&&t.lu.length<10}function lc(t,e){t.lu.push(e);const n=vc(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function cc(t){return Ql(t)&&!vc(t).xo()&&t.lu.length>0}function uc(t){vc(t).start()}async function hc(t){vc(t).tu()}async function dc(t){const e=vc(t);for(const n of t.lu)e.Yo(n.mutations)}async function fc(t,e,n){const i=t.lu.shift(),r=$o.from(i,e,n);await sc(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await oc(t)}async function pc(t,e){e&&vc(t).Jo&&await async function(t,e){if(n=e.code,Jo(n)&&n!==Ui.ABORTED){const n=t.lu.shift();vc(t).Oo(),await sc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await oc(t)}var n}(t,e),cc(t)&&uc(t)}async function gc(t,e){const n=ji(t);n.asyncQueue.verifyOperationInProgress(),Di("RemoteStore","RemoteStore received new credentials");const i=Ql(n);n.du.add(3),await Hl(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Wl(n)}async function mc(t,e){const n=ji(t);e?(n.du.delete(2),await Wl(n)):e||(n.du.add(2),await Hl(n),n.mu.set("Unknown"))}function _c(t){return t.yu||(t.yu=function(t,e,n){const i=ji(t);return i.nu(),new Vl(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Jr:ec.bind(null,t),Zr:nc.bind(null,t),zo:ic.bind(null,t)}),t.wu.push((async e=>{e?(t.yu.Oo(),Jl(t)?Yl(t):t.mu.set("Unknown")):(await t.yu.stop(),tc(t))}))),t.yu}function vc(t){return t.pu||(t.pu=function(t,e,n){const i=ji(t);return i.nu(),new Bl(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Jr:hc.bind(null,t),Zr:pc.bind(null,t),Xo:dc.bind(null,t),Zo:fc.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),await oc(t)):(await t.pu.stop(),t.lu.length>0&&(Di("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))}))),t.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yc{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new yc(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Vi(Ui.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wc(t,e){if(Li("AsyncQueue",`${e}: ${t}`),mr(t))return new Vi(Ui.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||or.comparator(e.key,n.key):(t,e)=>or.comparator(t.key,e.key),this.keyedMap=no(),this.sortedSet=new Ir(this.comparator)}static emptySet(t){return new bc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof bc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new bc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.Iu=new Ir(or.comparator)}track(t){const e=t.doc.key,n=this.Iu.get(e);n?0!==t.type&&3===n.type?this.Iu=this.Iu.insert(e,t):3===t.type&&1!==n.type?this.Iu=this.Iu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Iu=this.Iu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Iu=this.Iu.remove(e):1===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):Mi():this.Iu=this.Iu.insert(e,t)}Tu(){const t=[];return this.Iu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class xc{constructor(t,e,n,i,r,s,o,a,l){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(t,e,n,i,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new xc(t,e,bc.emptySet(e),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ws(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.Eu=void 0,this.listeners=[]}}class Cc{constructor(){this.queries=new Js((t=>Hs(t)),Ws),this.onlineState="Unknown",this.Au=new Set}}async function Sc(t,e){const n=ji(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Tc),r)try{s.Eu=await n.onListen(i)}catch(t){const n=wc(t,`Initialization of query '${$s(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Ac(n)}async function Ic(t,e){const n=ji(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function kc(t,e){const n=ji(t);let i=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.vu(r)&&(i=!0);e.Eu=r}}i&&Ac(n)}function Rc(t,e,n){const i=ji(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Ac(t){t.Au.forEach((t=>{t.next()}))}class Oc{constructor(t,e,n){this.query=t,this.bu=e,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new xc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),e=!0):this.Du(t,this.onlineState)&&(this.Cu(t),e=!0),this.Vu=t,e}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let e=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),e=!0),e}Du(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.xu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Su(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Cu(t){t=xc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dc{constructor(t){this.key=t}}class Lc{constructor(t){this.key=t}}class Pc{constructor(t,e){this.query=t,this.Lu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=co(),this.mutatedKeys=co(),this.Ku=Xs(t),this.Gu=new bc(this.Ku)}get Qu(){return this.Lu}zu(t,e){const n=e?e.ju:new Ec,i=e?e.Gu:this.Gu;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const c=i.get(t),u=Zs(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Wu(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ku(u,a)>0||l&&this.Ku(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Gu:s,ju:n,Mi:o,mutatedKeys:r}}Wu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const r=t.ju.Tu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mi()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const s=e?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==r.length||a?{snapshot:new xc(this.query,t.Gu,i,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Ec,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=co(),this.Gu.forEach((t=>{this.Zu(t.key)&&(this.Uu=this.Uu.add(t.key))}));const e=[];return t.forEach((t=>{this.Uu.has(t)||e.push(new Lc(t))})),this.Uu.forEach((n=>{t.has(n)||e.push(new Dc(n))})),e}Xu(t){this.Lu=t.Wi,this.Uu=co();const e=this.zu(t.documents);return this.applyChanges(e,!0)}tc(){return xc.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Nc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Mc{constructor(t){this.key=t,this.ec=!1}}class Fc{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new Js((t=>Hs(t)),Ws),this.ic=new Map,this.rc=new Set,this.oc=new Ir(or.comparator),this.uc=new Map,this.cc=new il,this.ac={},this.hc=new Map,this.lc=Ya.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function jc(t,e){const n=iu(t);let i,r;const s=n.sc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const t=await El(n.localStore,zs(e));n.isPrimaryClient&&$l(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Uc(n,e,i,"current"===s,t.resumeToken)}return r}async function Uc(t,e,n,i,r){t.dc=(e,n,i)=>async function(t,e,n,i){let r=e.view.zu(n);r.Mi&&(r=await Tl(t.localStore,e.query,!1).then((({documents:t})=>e.view.zu(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Yc(t,e.targetId,o.Yu),o.snapshot}(t,e,n,i);const s=await Tl(t.localStore,e,!0),o=new Pc(e,s.Wi),a=o.zu(s.documents),l=ia.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,r),c=o.applyChanges(a,t.isPrimaryClient,l);Yc(t,n,c.Yu);const u=new Nc(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function Vc(t,e){const n=ji(t),i=n.sc.get(e),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter((t=>!Ws(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await xl(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Zl(n.remoteStore,i.targetId),Kc(n,i.targetId)})).catch(pr)):(Kc(n,i.targetId),await xl(n.localStore,i.targetId,!0))}async function Bc(t,e,n){const i=ru(t);try{const t=await function(t,e){const n=ji(t),i=tr.now(),r=e.reduce(((t,e)=>t.add(e.key)),co());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=to(),l=co();return n.Ki.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=Fo(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Vo(t.key,e,os(e.value.mapValue),Oo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:io(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.ac[t.currentUser.toKey()];i||(i=new Ir(Ji)),i=i.insert(e,n),t.ac[t.currentUser.toKey()]=i}(i,t.batchId,n),await tu(i,t.changes),await oc(i.remoteStore)}catch(t){const e=wc(t,"Failed to persist write");n.reject(e)}}async function qc(t,e){const n=ji(t);try{const t=await yl(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.uc.get(e);i&&(Fi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.ec=!0:t.modifiedDocuments.size>0?Fi(i.ec):t.removedDocuments.size>0&&(Fi(i.ec),i.ec=!1))})),await tu(n,t,e)}catch(t){await pr(t)}}function zc(t,e,n){const i=ji(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.sc.forEach(((n,i)=>{const r=i.view.Ru(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=ji(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.Ru(e)&&(i=!0)})),i&&Ac(n)}(i.eventManager,e),t.length&&i.nc.zo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Gc(t,e,n){const i=ji(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.uc.get(e),s=r&&r.key;if(s){let t=new Ir(or.comparator);t=t.insert(s,as.newNoDocument(s,er.min()));const n=co().add(s),r=new na(er.min(),new Map,new Ar(Ji),t,n);await qc(i,r),i.oc=i.oc.remove(s),i.uc.delete(e),Qc(i)}else await xl(i.localStore,e,!1).then((()=>Kc(i,e,n))).catch(pr)}async function Wc(t,e){const n=ji(t),i=e.batch.batchId;try{const t=await _l(n.localStore,e);Zc(n,i,null),$c(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await tu(n,t)}catch(t){await pr(t)}}async function Hc(t,e,n){const i=ji(t);try{const t=await function(t,e){const n=ji(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Fi(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Zc(i,e,n),$c(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await tu(i,t)}catch(n){await pr(n)}}function $c(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function Zc(t,e,n){const i=ji(t);let r=i.ac[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.ac[i.currentUser.toKey()]=r}}function Kc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach((e=>{t.cc.containsKey(e)||Xc(t,e)}))}function Xc(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(Zl(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Qc(t))}function Yc(t,e,n){for(const i of n)i instanceof Dc?(t.cc.addReference(i.key,e),Jc(t,i)):i instanceof Lc?(Di("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||Xc(t,i.key)):Mi()}function Jc(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(Di("SyncEngine","New document in limbo: "+n),t.rc.add(i),Qc(t))}function Qc(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new or(ir.fromString(e)),i=t.lc.next();t.uc.set(i,new Mc(n)),t.oc=t.oc.insert(n,i),$l(t.remoteStore,new Ga(zs(Fs(n.path)),i,2,_r.ct))}}async function tu(t,e,n){const i=ji(t),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach(((t,a)=>{o.push(i.dc(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=dl.Di(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.nc.zo(r),await async function(t,e){const n=ji(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>gr.forEach(e,(e=>gr.forEach(e.Vi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>gr.forEach(e.Si,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!mr(t))throw t;Di("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.Li.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.Li=n.Li.insert(t,r)}}}(i.localStore,s))}async function eu(t,e){const n=ji(t);if(!n.currentUser.isEqual(e)){Di("SyncEngine","User change. New user:",e.toKey());const t=await ml(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new Vi(Ui.CANCELLED,e))}))})),t.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await tu(n,t.Qi)}}function nu(t,e){const n=ji(t),i=n.uc.get(e);if(i&&i.ec)return co().add(i.key);{let t=co();const i=n.ic.get(e);if(!i)return t;for(const e of i){const i=n.sc.get(e);t=t.unionWith(i.view.Qu)}return t}}function iu(t){const e=ji(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gc.bind(null,e),e.nc.zo=kc.bind(null,e.eventManager),e.nc.wc=Rc.bind(null,e.eventManager),e}function ru(t){const e=ji(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hc.bind(null,e),e}class su{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Fl(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return gl(this.persistence,new fl,t.initialUser,this.serializer)}createPersistence(t){return new cl(hl.Fs,this.serializer)}createSharedClientState(t){return new Il}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ou{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>zc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=eu.bind(null,this.syncEngine),await mc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Cc}createDatastore(t){const e=Fl(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Nl(i));var i;return function(t,e,n,i){return new ql(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>zc(this.syncEngine,t,0),s=Rl.D()?new Rl:new kl,new Gl(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Fc(t,e,n,i,r,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ji(t);Di("RemoteStore","RemoteStore shutting down."),e.du.add(5),await Hl(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class au{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):Li("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lu{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=ki.UNAUTHENTICATED,this.clientId=Yi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Di("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Di("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Vi(Ui.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=wc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function cu(t,e){t.asyncQueue.verifyOperationInProgress(),Di("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await ml(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function uu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await du(t);Di("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>gc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>gc(e.remoteStore,n))),t._onlineComponents=e}function hu(t){return"FirebaseError"===t.name?t.code===Ui.FAILED_PRECONDITION||t.code===Ui.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function du(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Di("FirestoreClient","Using user provided OfflineComponentProvider");try{await cu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hu(n))throw n;Pi("Error using user provided cache. Falling back to memory cache: "+n),await cu(t,new su)}}else Di("FirestoreClient","Using default OfflineComponentProvider"),await cu(t,new su);return t._offlineComponents}async function fu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Di("FirestoreClient","Using user provided OnlineComponentProvider"),await uu(t,t._uninitializedComponentsProvider._online)):(Di("FirestoreClient","Using default OnlineComponentProvider"),await uu(t,new ou))),t._onlineComponents}function pu(t){return fu(t).then((t=>t.syncEngine))}async function gu(t){const e=await fu(t),n=e.eventManager;return n.onListen=jc.bind(null,e.syncEngine),n.onUnlisten=Vc.bind(null,e.syncEngine),n}function mu(t,e,n={}){const i=new Bi;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new au({next:s=>{e.enqueueAndForget((()=>Ic(t,o)));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new Vi(Ui.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new Vi(Ui.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:t=>r.reject(t)}),o=new Oc(Fs(n.path),s,{includeMetadataChanges:!0,xu:!0});return Sc(t,o)}(await gu(t),t.asyncQueue,e,n,i))),i.promise}function _u(t,e,n={}){const i=new Bi;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new au({next:n=>{e.enqueueAndForget((()=>Ic(t,o))),n.fromCache&&"server"===i.source?r.reject(new Vi(Ui.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Oc(n,s,{includeMetadataChanges:!0,xu:!0});return Sc(t,o)}(await gu(t),t.asyncQueue,e,n,i))),i.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e,n){if(!n)throw new Vi(Ui.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wu(t,e,n,i){if(!0===e&&!0===i)throw new Vi(Ui.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bu(t){if(!or.isDocumentKey(t))throw new Vi(Ui.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Eu(t){if(or.isDocumentKey(t))throw new Vi(Ui.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Mi()}function Tu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Vi(Ui.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xu(t);throw new Vi(Ui.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Vi(Ui.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Vi(Ui.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,wu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Vi(Ui.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Vi(Ui.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new zi;switch(t.type){case"firstParty":return new $i(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Vi(Ui.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=vu.get(t);e&&(Di("ComponentProvider","Removing Datastore"),vu.delete(t),e.terminate())}(this),Promise.resolve()}}function Iu(t,e,n,i={}){var r;const s=(t=Tu(t,Su))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&Pi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=ki.MOCK_USER;else{e=(0,a.Sg)(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Vi(Ui.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ki(s)}t._authCredentials=new Gi(new qi(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Au(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ku(this.firestore,t,this._key)}}class Ru{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ru(this.firestore,t,this._query)}}class Au extends Ru{constructor(t,e,n){super(t,e,Fs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ku(this.firestore,null,new or(t))}withConverter(t){return new Au(this.firestore,t,this._path)}}function Ou(t,e,...n){if(t=(0,a.m9)(t),yu("collection","path",e),t instanceof Su){const i=ir.fromString(e,...n);return Eu(i),new Au(t,null,i)}{if(!(t instanceof ku||t instanceof Au))throw new Vi(Ui.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ir.fromString(e,...n));return Eu(i),new Au(t.firestore,null,i)}}function Du(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Yi.A()),yu("doc","path",e),t instanceof Su){const i=ir.fromString(e,...n);return bu(i),new ku(t,null,new or(i))}{if(!(t instanceof ku||t instanceof Au))throw new Vi(Ui.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ir.fromString(e,...n));return bu(i),new ku(t.firestore,t instanceof Au?t.converter:null,new or(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new jl(this,"async_queue_retry"),this.qc=()=>{const t=Ml();t&&Di("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const t=Ml();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const e=Ml();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise((()=>{}));const e=new Bi;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.kc.push(t),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(E){if(!mr(E))throw E;Di("AsyncQueue","Operation failed with retryable error: "+E)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(t){const e=this.Nc.then((()=>(this.Fc=!0,t().catch((t=>{this.Mc=t,this.Fc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Li("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Fc=!1,t))))));return this.Nc=e,e}enqueueAfterDelay(t,e,n){this.Uc(),this.Lc.indexOf(t)>-1&&(e=0);const i=yc.createAndSchedule(this,t,e,n,(t=>this.Qc(t)));return this.$c.push(i),i}Uc(){this.Mc&&Mi()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Nc,await t}while(t!==this.Nc)}jc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Wc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Hc(t){this.Lc.push(t)}Qc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Pu extends Su{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Lu,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fu(this),this._firestoreClient.terminate()}}function Nu(t,e){const n="object"==typeof t?t:(0,r.Mq)(),i="string"==typeof t?t:e||"(default)",s=(0,r.qX)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const t=(0,a.P0)("firestore");t&&Iu(s,...t)}return s}function Mu(t){return t._firestoreClient||Fu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fu(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new qr(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new lu(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ju{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ju(Pr.fromBase64String(t))}catch(t){throw new Vi(Ui.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ju(Pr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Vi(Ui.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vu{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Vi(Ui.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Vi(Ui.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ji(this._lat,t._lat)||Ji(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=/^__.*__$/;class zu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Vo(t,this.data,this.fieldMask,e,this.fieldTransforms):new Uo(t,this.data,e,this.fieldTransforms)}}class Gu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Vo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Wu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mi()}}class Hu{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new Hu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Zc({path:n,ta:!1});return i.ea(t),i}na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Zc({path:n,ta:!1});return i.Jc(),i}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return lh(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(0===t.length)throw this.ia("Document fields must not be empty");if(Wu(this.Yc)&&qu.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class $u{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Fl(t)}ua(t,e,n,i=!1){return new Hu({Yc:t,methodName:e,oa:n,path:sr.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zu(t){const e=t._freezeSettings(),n=Fl(t._databaseId);return new $u(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ku(t,e,n,i,r,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,r);rh("Data must be an object, but it was:",o,i);const a=nh(i,o);let l,c;if(s.merge)l=new Dr(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=sh(e,i,n);if(!o.contains(r))throw new Vi(Ui.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);ch(t,r)||t.push(r)}l=new Dr(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new zu(new ss(a),l,c)}class Xu extends Vu{_toFieldTransform(t){if(2!==t.Yc)throw 1===t.Yc?t.ia(`${this._methodName}() can only appear at the top level of your update data`):t.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Xu}}function Yu(t,e,n){return new Hu({Yc:3,oa:e.settings.oa,methodName:t._methodName,ta:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ju extends Vu{constructor(t,e){super(t),this.ca=e}_toFieldTransform(t){const e=Yu(this,t,!0),n=this.ca.map((t=>eh(t,e))),i=new bo(n);return new ko(t.path,i)}isEqual(t){return this===t}}function Qu(t,e,n,i){const r=t.ua(1,e,n);rh("Data must be an object, but it was:",r,i);const s=[],o=ss.empty();Cr(i,((t,i)=>{const l=ah(e,t,n);i=(0,a.m9)(i);const c=r.na(l);if(i instanceof Xu)s.push(l);else{const t=eh(i,c);null!=t&&(s.push(l),o.set(l,t))}}));const l=new Dr(s);return new Gu(o,l,r.fieldTransforms)}function th(t,e,n,i,r,s){const o=t.ua(1,e,n),l=[sh(e,i,n)],c=[r];if(s.length%2!=0)throw new Vi(Ui.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)l.push(sh(e,s[a])),c.push(s[a+1]);const u=[],h=ss.empty();for(let f=l.length-1;f>=0;--f)if(!ch(u,l[f])){const t=l[f];let e=c[f];e=(0,a.m9)(e);const n=o.na(t);if(e instanceof Xu)u.push(t);else{const i=eh(e,n);null!=i&&(u.push(t),h.set(t,i))}}const d=new Dr(u);return new Gu(h,d,o.fieldTransforms)}function eh(t,e){if(ih(t=(0,a.m9)(t)))return rh("Unsupported field value:",e,t),nh(t,e);if(t instanceof Vu)return function(t,e){if(!Wu(e.Yc))throw e.ia(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ia(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&4!==e.Yc)throw e.ia("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=eh(r,e.sa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return go(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=tr.fromDate(t);return{timestampValue:ga(e.serializer,n)}}if(t instanceof tr){const n=new tr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ga(e.serializer,n)}}if(t instanceof Bu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ju)return{bytesValue:ma(e.serializer,t._byteString)};if(t instanceof ku){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ya(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ia(`Unsupported field value: ${xu(t)}`)}(t,e)}function nh(t,e){const n={};return Sr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,((t,i)=>{const r=eh(i,e.Xc(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function ih(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof tr||t instanceof Bu||t instanceof ju||t instanceof ku||t instanceof Vu)}function rh(t,e,n){if(!ih(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=xu(n);throw"an object"===i?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function sh(t,e,n){if((e=(0,a.m9)(e))instanceof Uu)return e._internalPath;if("string"==typeof e)return ah(t,e);throw lh("Field path arguments must be of type string or ",t,!1,void 0,n)}const oh=new RegExp("[~\\*/\\[\\]]");function ah(t,e,n){if(e.search(oh)>=0)throw lh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uu(...e.split("."))._internalPath}catch(i){throw lh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lh(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new Vi(Ui.INVALID_ARGUMENT,a+t+l)}function ch(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ku(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new hh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(dh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class hh extends uh{data(){return super.data()}}function dh(t,e){return"string"==typeof e?ah(t,e):e instanceof Uu?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Vi(Ui.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ph{convertValue(t,e="none"){switch(Wr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Fr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(jr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Mi()}}convertObject(t,e){const n={};return Cr(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Bu(Fr(t.latitude),Fr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Vr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Br(t));default:return null}}convertTimestamp(t){const e=Mr(t);return new tr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ir.fromString(t);Fi(za(n));const i=new zr(n.get(1),n.get(3)),r=new or(n.popFirst(5));return i.isEqual(e)||Li(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _h extends uh{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new vh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(dh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class vh extends _h{data(t={}){return super.data(t)}}class yh{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new mh(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new vh(this._firestore,this._userDataWriter,n.key,n,new mh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Vi(Ui.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new vh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new mh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new vh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new mh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:wh(e.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function wh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bh(t){t=Tu(t,ku);const e=Tu(t.firestore,Pu);return mu(Mu(e),t._key).then((n=>kh(e,t,n)))}class Eh extends ph{constructor(t){super(),this.firestore=t}convertBytes(t){return new ju(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ku(this.firestore,null,e)}}function xh(t){t=Tu(t,Ru);const e=Tu(t.firestore,Pu),n=Mu(e),i=new Eh(e);return fh(t._query),_u(n,t._query).then((n=>new yh(e,i,t,n)))}function Th(t,e,n){t=Tu(t,ku);const i=Tu(t.firestore,Pu),r=gh(t.converter,e,n);return Ih(i,[Ku(Zu(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Oo.none())])}function Ch(t,e,n,...i){t=Tu(t,ku);const r=Tu(t.firestore,Pu),s=Zu(r);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof Uu?th(s,"updateDoc",t._key,e,n,i):Qu(s,"updateDoc",t._key,e),Ih(r,[o.toMutation(t._key,Oo.exists(!0))])}function Sh(t,e){const n=Tu(t.firestore,Pu),i=Du(t),r=gh(t.converter,e);return Ih(n,[Ku(Zu(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,Oo.exists(!1))]).then((()=>i))}function Ih(t,e){return function(t,e){const n=new Bi;return t.asyncQueue.enqueueAndForget((async()=>Bc(await pu(t),e,n))),n.promise}(Mu(t),e)}function kh(t,e,n){const i=n.docs.get(e._key),r=new Eh(t);return new _h(t,r,e._key,i,new mh(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(...t){return new Ju("arrayUnion",t)}!function(t,e=!0){!function(t){Ri=t}(r.Jn),(0,r.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new Pu(new Wi(t.getProvider("auth-internal")),new Ki(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Vi(Ui.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zr(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Ii,"3.10.0",t),(0,r.KN)(Ii,"3.10.0","esm2017")}()},6650:function(t,e,n){"use strict";n.d(e,{Jt:function(){return At},cF:function(){return Dt},iH:function(){return Ot}});var i=n(7456),r=n(4444),s=n(8463);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",l=12e4,c=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u extends r.ZR{constructor(t,e,n=0){super(f(t),`Firebase Storage: ${e} (${f(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return f(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,d;function f(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new u(h.UNKNOWN,t)}function g(t){return new u(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function m(t){return new u(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new u(h.UNAUTHENTICATED,t)}function v(){return new u(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function y(t){return new u(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function w(){return new u(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function b(){return new u(h.CANCELED,"User canceled the upload/download.")}function E(t){return new u(h.INVALID_URL,"Invalid URL '"+t+"'.")}function x(t){return new u(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function T(){return new u(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function C(){return new u(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function S(t){return new u(h.INVALID_ARGUMENT,t)}function I(){return new u(h.APP_DELETED,"The Firebase app was deleted.")}function k(t){return new u(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function R(t){throw new u(h.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class A{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=A.makeFromUrl(t,e)}catch(i){return new A(t,"")}if(""===n.path)return n;throw x(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",_=new RegExp(`^https?://${g}/${i}/${m}`,"i"),v={bucket:1,path:2},y=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:_,indices:v,postModify:c}];for(let o=0;o<y.length;o++){const e=y[o],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let r=i[e.indices.path];r||(r=""),n=new A(t,r),e.postModify(n);break}}if(null==n)throw E(t);return n}}class O{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...t){c||(c=!0,e.apply(null,t))}function h(e){r=setTimeout((()=>{r=null,t(f,l())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(c)return void d();if(t)return d(),void u.call(null,t,...e);const n=l()||o;if(n)return d(),void u.call(null,t,...e);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let p=!1;function g(t){p||(p=!0,d(),c||(null!==r?(t||(a=2),clearTimeout(r),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function L(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return void 0!==t}function N(t){return"object"===typeof t&&!Array.isArray(t)}function M(t){return"string"===typeof t||t instanceof String}function F(t,e,n,i){if(i<e)throw S(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw S(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function U(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(t,e){const n=t>=500&&t<600,i=[408,429],r=-1!==i.indexOf(t),s=-1!==e.indexOf(t);return n||r||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(d||(d={}));class B{constructor(t,e,n,i,r,s,o,a,l,c,u,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new q(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===d.NO_ERROR,r=n.getStatus();if(!e||V(r,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===d.ABORT;return void t(!1,new q(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new q(s,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());P(t)?n(t):n()}catch(s){i(s)}else if(null!==r){const t=p();t.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,t)):i(t)}else if(e.canceled){const t=this.appDelete_?I():b();i(t)}else{const t=w();i(t)}};this.canceled_?e(!1,new q(!1,null,!0)):this.backoffId_=D(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&L(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class q{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function z(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function G(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function W(t,e){e&&(t["X-Firebase-GMPID"]=e)}function H(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function $(t,e,n,i,r,s,o=!0){const a=U(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return W(c,e),z(c,n),G(c,s),H(c,i),new B(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(t){let e;try{e=JSON.parse(t)}catch(n){return null}return N(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function X(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function Y(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e){return e}class Q{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||J}}let tt=null;function et(t){return!M(t)||t.length<2?t:Y(t)}function nt(){if(tt)return tt;const t=[];function e(t,e){return et(e)}t.push(new Q("bucket")),t.push(new Q("generation")),t.push(new Q("metageneration")),t.push(new Q("name","fullPath",!0));const n=new Q("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const r=new Q("size");return r.xform=i,t.push(r),t.push(new Q("timeCreated")),t.push(new Q("updated")),t.push(new Q("md5Hash",null,!0)),t.push(new Q("cacheControl",null,!0)),t.push(new Q("contentDisposition",null,!0)),t.push(new Q("contentEncoding",null,!0)),t.push(new Q("contentLanguage",null,!0)),t.push(new Q("contentType",null,!0)),t.push(new Q("metadata","customMetadata",!0)),tt=t,tt}function it(t,e){function n(){const n=t["bucket"],i=t["fullPath"],r=new A(n,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function rt(t,e,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const t=n[s];i[t.local]=t.xform(i,e[t.server])}return it(i,t),i}function st(t,e,n){const i=Z(e);if(null===i)return null;const r=i;return rt(t,r,n)}function ot(t,e,n,i){const r=Z(e);if(null===r)return null;if(!M(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),l=a.map((e=>{const r=t["bucket"],s=t["fullPath"],a="/b/"+o(r)+"/o/"+o(s),l=j(a,n,i),c=U({alt:"media",token:e});return l+c}));return l[0]}class at{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){if(!t)throw p()}function ct(t,e){function n(n,i){const r=st(t,i,e);return lt(null!==r),ot(r,i,t.host,t._protocol)}return n}function ut(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():_():402===e.getStatus()?m(t.bucket):403===e.getStatus()?y(t.path):n,i.status=e.getStatus(),i.serverResponse=n.serverResponse,i}return e}function ht(t){const e=ut(t);function n(n,i){let r=e(n,i);return 404===n.getStatus()&&(r=g(t.path)),r.serverResponse=i.serverResponse,r}return n}function dt(t,e,n){const i=e.fullServerUrl(),r=j(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new at(r,s,ct(t,n),o);return a.errorHandler=ht(e),a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ft=null;class pt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=d.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=d.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=d.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw R("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw R("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw R("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class gt extends pt{initXhr(){this.xhr_.responseType="text"}}function mt(){return ft?ft():new gt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(t,e){this._service=t,this._location=e instanceof A?e:A.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new _t(t,e)}get root(){const t=new A(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y(this._location.path)}get storage(){return this._service}get parent(){const t=K(this._location.path);if(null===t)return null;const e=new A(this._location.bucket,t);return new _t(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw k(t)}}function vt(t){t._throwIfRoot("getDownloadURL");const e=dt(t.storage,t._location,nt());return t.storage.makeRequestWithTokens(e,mt).then((t=>{if(null===t)throw C();return t}))}function yt(t,e){const n=X(t._location.path,e),i=new A(t._location.bucket,n);return new _t(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){return/^[A-Za-z]+:\/\//.test(t)}function bt(t,e){return new _t(t,e)}function Et(t,e){if(t instanceof St){const n=t;if(null==n._bucket)throw T();const i=new _t(n,n._bucket);return null!=e?Et(i,e):i}return void 0!==e?yt(t,e):t}function xt(t,e){if(e&&wt(e)){if(t instanceof St)return bt(t,e);throw S("To use ref(service, url), the first argument must be a Storage instance.")}return Et(t,e)}function Tt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:A.makeFromBucketSpec(n,t)}function Ct(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=i;s&&(t._overrideAuthToken="string"===typeof s?s:(0,r.Sg)(s,t.app.options.projectId))}class St{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=c,this._requests=new Set,this._bucket=null!=i?A.makeFromBucketSpec(i,this._host):Tt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=A.makeFromBucketSpec(this._url,t):this._bucket=Tt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new _t(this,t)}_makeRequest(t,e,n,i,r=!0){if(this._deleted)return new O(I());{const s=$(t,this._appId,n,i,e,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const It="@firebase/storage",kt="0.11.2",Rt="storage";function At(t){return t=(0,r.m9)(t),vt(t)}function Ot(t,e){return t=(0,r.m9)(t),xt(t,e)}function Dt(t=(0,i.Mq)(),e){t=(0,r.m9)(t);const n=(0,i.qX)(t,Rt),s=n.getImmediate({identifier:e}),o=(0,r.P0)("storage");return o&&Lt(s,...o),s}function Lt(t,e,n,i={}){Ct(t,e,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function l(t,e){const n={};for(const i in e){const r=e[i];n[i]=u(r)?r.map(t):t(r)}return n}const c=()=>{},u=Array.isArray;const h=/\/$/,d=t=>t.replace(h,"");function f(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=b(null!=i?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function g(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function m(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&_(e.matched[i],n.matched[r])&&v(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!y(t[n],e[n]))return!1;return!0}function y(t,e){return u(t)?w(t,e):u(e)?w(e,t):t===e}function w(t,e){return u(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function b(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r,s,o=n.length-1;for(r=0;r<i.length;r++)if(s=i[r],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var E,x;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(x||(x={}));function T(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),d(t)}const C=/^[^#]+#/;function S(t,e){return t.replace(C,"#")+e}function I(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const k=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(t){let e;if("el"in t){const n=t.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=I(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function A(t,e){const n=history.state?history.state.position-e:-1;return n+t}const O=new Map;function D(t,e){O.set(t,e)}function L(t){const e=O.get(t);return O.delete(t),e}let P=()=>location.protocol+"//"+location.host;function N(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let e=r.includes(t.slice(s))?t.slice(s).length:1,n=r.slice(e);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,t);return o+i+r}function M(t,e,n,i){let r=[],s=[],o=null;const l=({state:s})=>{const a=N(t,location),l=n.value,c=e.value;let u=0;if(s){if(n.value=a,e.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else i(a);r.forEach((t=>{t(n.value,l,{delta:u,type:E.pop,direction:u?u>0?x.forward:x.back:x.unknown})}))};function c(){o=n.value}function u(t){r.push(t);const e=()=>{const e=r.indexOf(t);e>-1&&r.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:k()}),"")}function d(){for(const t of s)t();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h),{pauseListeners:c,listen:u,destroy:d}}function F(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?k():null}}function j(t){const{history:e,location:n}=window,i={value:N(t,n)},r={value:e.state};function s(i,s,o){const a=t.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+i:P()+t+i;try{e[o?"replaceState":"pushState"](s,"",l),r.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}function o(t,n){const o=a({},e.state,F(r.value.back,t,r.value.forward,!0),n,{position:r.value.position});s(t,o,!0),i.value=t}function l(t,n){const o=a({},r.value,e.state,{forward:t,scroll:k()});s(o.current,o,!0);const l=a({},F(i.value,t,null),{position:o.position+1},n);s(t,l,!1),i.value=t}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:l,replace:o}}function U(t){t=T(t);const e=j(t),n=M(t,e.state,e.location,e.replace);function i(t,e=!0){e||n.pauseListeners(),history.go(t)}const r=a({location:"",base:t,go:i,createHref:S.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function V(t){return"string"===typeof t||t&&"object"===typeof t}function B(t){return"string"===typeof t||"symbol"===typeof t}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var G;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(G||(G={}));function W(t,e){return a(new Error,{type:t,[z]:!0},e)}function H(t,e){return t instanceof Error&&z in t&&(null==e||!!(t.type&e))}const $="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function X(t,e){const n=a({},Z,e),i=[];let r=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(r+="/");for(let e=0;e<a.length;e++){const i=a[e];let o=40+(n.sensitive?.25:0);if(0===i.type)e||(r+="/"),r+=i.value.replace(K,"\\$&"),o+=40;else if(1===i.type){const{value:t,repeatable:n,optional:l,regexp:c}=i;s.push({name:t,repeatable:n,optional:l});const u=c||$;if(u!==$){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;e||(d=l&&a.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),r+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}t.push(o)}i.push(t)}if(n.strict&&n.end){const t=i.length-1;i[t][i[t].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(t){const e=t.match(o),n={};if(!e)return null;for(let i=1;i<e.length;i++){const t=e[i]||"",r=s[i-1];n[r.name]=t&&r.repeatable?t.split("/"):t}return n}function c(e){let n="",i=!1;for(const r of t){i&&n.endsWith("/")||(n+="/"),i=!1;for(const t of r)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,l=s in e?e[s]:"";if(u(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=u(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=c}}return n||"/"}return{re:o,score:i,keys:s,parse:l,stringify:c}}function Y(t,e){let n=0;while(n<t.length&&n<e.length){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function J(t,e){let n=0;const i=t.score,r=e.score;while(n<i.length&&n<r.length){const t=Y(i[n],r[n]);if(t)return t;n++}if(1===Math.abs(r.length-i.length)){if(Q(i))return 1;if(Q(r))return-1}return r.length-i.length}function Q(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${c}": ${t}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),c="")}function d(){c+=a}while(l<t.length)if(a=t[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:et.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:e("Unknown state");break}else i=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function it(t,e,n){const i=X(nt(t.path),n);const r=a(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf===!e.record.aliasOf&&e.children.push(r),r}function rt(t,e){const n=[],i=new Map;function r(t){return i.get(t)}function s(t,n,i){const r=!i,l=ot(t);l.aliasOf=i&&i.record;const h=ut(e,t),d=[l];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(a({},l,{components:i?i.record.components:l.components,path:t,aliasOf:i?i.record:l}))}let f,p;for(const e of d){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,i="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&i+a)}if(f=it(e,n,h),i?i.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),r&&t.name&&!lt(f)&&o(t.name)),l.children){const t=l.children;for(let e=0;e<t.length;e++)s(t[e],f,i&&i.children[e])}i=i||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&u(f)}return p?()=>{o(p)}:c}function o(t){if(B(t)){const e=i.get(t);e&&(i.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&i.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function l(){return n}function u(t){let e=0;while(e<n.length&&J(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ht(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!lt(t)&&i.set(t.record.name,t)}function h(t,e){let r,s,o,l={};if("name"in t&&t.name){if(r=i.get(t.name),!r)throw W(1,{location:t});0,o=r.record.name,l=a(st(e.params,r.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&st(t.params,r.keys.map((t=>t.name)))),s=r.stringify(l)}else if("path"in t)s=t.path,r=n.find((t=>t.re.test(s))),r&&(l=r.parse(s),o=r.record.name);else{if(r=e.name?i.get(e.name):n.find((t=>t.re.test(e.path))),!r)throw W(1,{location:t,currentLocation:e});o=r.record.name,l=a({},e.params,t.params),s=r.stringify(l)}const c=[];let u=r;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:l,matched:c,meta:ct(c)}}return e=ut({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:l,getRecordMatcher:r}}function st(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function ot(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]="boolean"===typeof n?n:n[i];return e}function lt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ct(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function ut(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function ht(t,e){return e.children.some((e=>e===t||ht(t,e)))}const dt=/#/g,ft=/&/g,pt=/\//g,gt=/=/g,mt=/\?/g,_t=/\+/g,vt=/%5B/g,yt=/%5D/g,wt=/%5E/g,bt=/%60/g,Et=/%7B/g,xt=/%7C/g,Tt=/%7D/g,Ct=/%20/g;function St(t){return encodeURI(""+t).replace(xt,"|").replace(vt,"[").replace(yt,"]")}function It(t){return St(t).replace(Et,"{").replace(Tt,"}").replace(wt,"^")}function kt(t){return St(t).replace(_t,"%2B").replace(Ct,"+").replace(dt,"%23").replace(ft,"%26").replace(bt,"`").replace(Et,"{").replace(Tt,"}").replace(wt,"^")}function Rt(t){return kt(t).replace(gt,"%3D")}function At(t){return St(t).replace(dt,"%23").replace(mt,"%3F")}function Ot(t){return null==t?"":At(t).replace(pt,"%2F")}function Dt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Lt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],i=(n?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const t=i[r].replace(_t," "),n=t.indexOf("="),s=Dt(n<0?t:t.slice(0,n)),o=n<0?null:Dt(t.slice(n+1));if(s in e){let t=e[s];u(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Pt(t){let e="";for(let n in t){const i=t[n];if(n=Rt(n),null==i){void 0!==i&&(e+=(e.length?"&":"")+n);continue}const r=u(i)?i.map((t=>t&&kt(t))):[i&&kt(i)];r.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Nt(t){const e={};for(const n in t){const i=t[n];void 0!==i&&(e[n]=u(i)?i.map((t=>null==t?null:""+t)):null==i?i:""+i)}return e}const Mt=Symbol(""),Ft=Symbol(""),jt=Symbol(""),Ut=Symbol(""),Vt=Symbol("");function Bt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((o,a)=>{const l=t=>{!1===t?a(W(4,{from:n,to:e})):t instanceof Error?a(t):V(t)?a(W(2,{from:e,to:t})):(s&&i.enterCallbacks[r]===s&&"function"===typeof t&&s.push(t),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch((t=>a(t)))}))}function zt(t,e,n,i){const r=[];for(const s of t){0;for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Gt(a)){const o=a.__vccOpts||a,l=o[e];l&&r.push(qt(l,n,i,s,t))}else{let l=a();0,r.push((()=>l.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=o(r)?r.default:r;s.components[t]=a;const l=a.__vccOpts||a,c=l[e];return c&&qt(c,n,i,s,t)()}))))}}}return r}function Gt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Wt(t){const e=(0,i.f3)(jt),n=(0,i.f3)(Ut),s=(0,i.Fl)((()=>e.resolve((0,r.SU)(t.to)))),o=(0,i.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,i=t[e-1],r=n.matched;if(!i||!r.length)return-1;const o=r.findIndex(_.bind(null,i));if(o>-1)return o;const a=Xt(t[e-2]);return e>1&&Xt(i)===a&&r[r.length-1].path!==a?r.findIndex(_.bind(null,t[e-2])):o})),a=(0,i.Fl)((()=>o.value>-1&&Kt(n.params,s.value.params))),l=(0,i.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function u(n={}){return Zt(n)?e[(0,r.SU)(t.replace)?"replace":"push"]((0,r.SU)(t.to)).catch(c):Promise.resolve()}return{route:s,href:(0,i.Fl)((()=>s.value.href)),isActive:a,isExactActive:l,navigate:u}}const Ht=(0,i.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wt,setup(t,{slots:e}){const n=(0,r.qj)(Wt(t)),{options:s}=(0,i.f3)(jt),o=(0,i.Fl)((()=>({[Yt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=e.default&&e.default(n);return t.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),$t=Ht;function Zt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kt(t,e){for(const n in e){const i=e[n],r=t[n];if("string"===typeof i){if(i!==r)return!1}else if(!u(r)||r.length!==i.length||i.some(((t,e)=>t!==r[e])))return!1}return!0}function Xt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>null!=t?t:null!=e?e:n,Jt=(0,i.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,i.f3)(Vt),o=(0,i.Fl)((()=>t.route||s.value)),l=(0,i.f3)(Ft,0),c=(0,i.Fl)((()=>{let t=(0,r.SU)(l);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),u=(0,i.Fl)((()=>o.value.matched[c.value]));(0,i.JJ)(Ft,(0,i.Fl)((()=>c.value+1))),(0,i.JJ)(Mt,u),(0,i.JJ)(Vt,o);const h=(0,r.iH)();return(0,i.YP)((()=>[h.value,u.value,t.name]),(([t,e,n],[i,r,s])=>{e&&(e.instances[n]=t,r&&r!==e&&t&&t===i&&(e.leaveGuards.size||(e.leaveGuards=r.leaveGuards),e.updateGuards.size||(e.updateGuards=r.updateGuards))),!t||!e||r&&_(e,r)&&i||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const r=o.value,s=t.name,l=u.value,c=l&&l.components[s];if(!c)return Qt(n.default,{Component:c,route:r});const d=l.props[s],f=d?!0===d?r.params:"function"===typeof d?d(r):d:null,p=t=>{t.component.isUnmounted&&(l.instances[s]=null)},g=(0,i.h)(c,a({},f,e,{onVnodeUnmounted:p,ref:h}));return Qt(n.default,{Component:g,route:r})||g}}});function Qt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Jt;function ee(t){const e=rt(t.routes,t),n=t.parseQuery||Lt,o=t.stringifyQuery||Pt,h=t.history;const d=Bt(),g=Bt(),_=Bt(),v=(0,r.XI)(q);let y=q;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=l.bind(null,(t=>""+t)),b=l.bind(null,Ot),x=l.bind(null,Dt);function T(t,n){let i,r;return B(t)?(i=e.getRecordMatcher(t),r=n):r=t,e.addRoute(r,i)}function C(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function S(){return e.getRoutes().map((t=>t.record))}function I(t){return!!e.getRecordMatcher(t)}function O(t,i){if(i=a({},i||v.value),"string"===typeof t){const r=f(n,t,i.path),s=e.resolve({path:r.path},i),o=h.createHref(r.fullPath);return a(r,s,{params:x(s.params),hash:Dt(r.hash),redirectedFrom:void 0,href:o})}let r;if("path"in t)r=a({},t,{path:f(n,t.path,i.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];r=a({},t,{params:b(t.params)}),i.params=b(i.params)}const s=e.resolve(r,i),l=t.hash||"";s.params=w(x(s.params));const c=p(o,a({},t,{hash:It(l),path:s.path})),u=h.createHref(c);return a({fullPath:c,hash:l,query:o===Pt?Nt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:u})}function P(t){return"string"===typeof t?f(n,t,v.value.path):a({},t)}function N(t,e){if(y!==t)return W(8,{from:e,to:t})}function M(t){return U(t)}function F(t){return M(a(P(t),{replace:!0}))}function j(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let i="function"===typeof n?n(t):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=P(i):{path:i},i.params={}),a({query:t.query,hash:t.hash,params:"path"in i?{}:t.params},i)}}function U(t,e){const n=y=O(t),i=v.value,r=t.state,s=t.force,l=!0===t.replace,c=j(n);if(c)return U(a(P(c),{state:"object"===typeof c?a({},r,c.state):r,force:s,replace:l}),e||n);const u=n;let h;return u.redirectedFrom=e,!s&&m(o,i,n)&&(h=W(16,{to:u,from:i}),nt(i,i,!0,!1)),(h?Promise.resolve(h):z(u,i)).catch((t=>H(t)?H(t,2)?t:et(t):Q(t,u,i))).then((t=>{if(t){if(H(t,2))return U(a({replace:l},P(t.to),{state:"object"===typeof t.to?a({},r,t.to.state):r,force:s}),e||u)}else t=$(u,i,!0,l,r);return G(u,i,t),t}))}function V(t,e){const n=N(t,e);return n?Promise.reject(n):Promise.resolve()}function z(t,e){let n;const[i,r,s]=ie(t,e);n=zt(i.reverse(),"beforeRouteLeave",t,e);for(const a of i)a.leaveGuards.forEach((i=>{n.push(qt(i,t,e))}));const o=V.bind(null,t,e);return n.push(o),ne(n).then((()=>{n=[];for(const i of d.list())n.push(qt(i,t,e));return n.push(o),ne(n)})).then((()=>{n=zt(r,"beforeRouteUpdate",t,e);for(const i of r)i.updateGuards.forEach((i=>{n.push(qt(i,t,e))}));return n.push(o),ne(n)})).then((()=>{n=[];for(const i of t.matched)if(i.beforeEnter&&!e.matched.includes(i))if(u(i.beforeEnter))for(const r of i.beforeEnter)n.push(qt(r,t,e));else n.push(qt(i.beforeEnter,t,e));return n.push(o),ne(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=zt(s,"beforeRouteEnter",t,e),n.push(o),ne(n)))).then((()=>{n=[];for(const i of g.list())n.push(qt(i,t,e));return n.push(o),ne(n)})).catch((t=>H(t,8)?t:Promise.reject(t)))}function G(t,e,n){for(const i of _.list())i(t,e,n)}function $(t,e,n,i,r){const o=N(t,e);if(o)return o;const l=e===q,c=s?history.state:{};n&&(i||l?h.replace(t.fullPath,a({scroll:l&&c&&c.scroll},r)):h.push(t.fullPath,r)),v.value=t,nt(t,e,n,l),et()}let Z;function K(){Z||(Z=h.listen(((t,e,n)=>{if(!at.listening)return;const i=O(t),r=j(i);if(r)return void U(a(r,{replace:!0}),i).catch(c);y=i;const o=v.value;s&&D(A(o.fullPath,n.delta),k()),z(i,o).catch((t=>H(t,12)?t:H(t,2)?(U(t.to,i).then((t=>{H(t,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(c),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Q(t,i,o)))).then((t=>{t=t||$(i,o,!1),t&&(n.delta&&!H(t,8)?h.go(-n.delta,!1):n.type===E.pop&&H(t,20)&&h.go(-1,!1)),G(i,o,t)})).catch(c)})))}let X,Y=Bt(),J=Bt();function Q(t,e,n){et(t);const i=J.list();return i.length?i.forEach((i=>i(t,e,n))):console.error(t),Promise.reject(t)}function tt(){return X&&v.value!==q?Promise.resolve():new Promise(((t,e)=>{Y.add([t,e])}))}function et(t){return X||(X=!t,K(),Y.list().forEach((([e,n])=>t?n(t):e())),Y.reset()),t}function nt(e,n,r,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const l=!r&&L(A(e.fullPath,0))||(o||!r)&&history.state&&history.state.scroll||null;return(0,i.Y3)().then((()=>a(e,n,l))).then((t=>t&&R(t))).catch((t=>Q(t,e,n)))}const it=t=>h.go(t);let st;const ot=new Set,at={currentRoute:v,listening:!0,addRoute:T,removeRoute:C,hasRoute:I,getRoutes:S,resolve:O,options:t,push:M,replace:F,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:d.add,beforeResolve:g.add,afterEach:_.add,onError:J.add,isReady:tt,install(t){const e=this;t.component("RouterLink",$t),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.SU)(v)}),s&&!st&&v.value===q&&(st=!0,M(h.location).catch((t=>{0})));const n={};for(const r in q)n[r]=(0,i.Fl)((()=>v.value[r]));t.provide(jt,e),t.provide(Ut,(0,r.qj)(n)),t.provide(Vt,v);const o=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(y=q,Z&&Z(),Z=null,v.value=q,st=!1,X=!1),o()}}};return at}function ne(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function ie(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>_(t,s)))?i.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>_(t,a)))||r.push(a))}return[n,i,r]}}}]);
//# sourceMappingURL=chunk-vendors.ffdb0eab.js.map