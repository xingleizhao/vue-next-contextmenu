!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=8)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n(0)},function(e,t,n){"use strict";n(1)},function(e,t,n){"use strict";n(2)},function(e,t,n){"use strict";n(3)},function(e,t,n){"use strict";function o(e,t){const n=Object.create(null),o=e.split(",");for(let e=0;e<o.length;e++)n[o[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.r(t),n.d(t,"ContextMenu",(function(){return Jn})),n.d(t,"ContextMenuItem",(function(){return Yn})),n.d(t,"ContextMenuSub",(function(){return eo})),n.d(t,"ContextMenuGroup",(function(){return ro}));const r=o("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl");const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",i=o(s);function l(e){if(_(e)){const t={};for(let n=0;n<e.length;n++){const o=l(e[n]);if(o)for(const e in o)t[e]=o[e]}return t}if(S(e))return e}function c(e){let t="";if(C(e))t=e;else if(_(e))for(let n=0;n<e.length;n++)t+=c(e[n])+" ";else if(S(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const a={},u=[],f=()=>{},d=()=>!1,p=/^on[^a-z]/,v=e=>p.test(e),m=(e,t)=>{for(const n in t)e[n]=t[n];return e},h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},g=Object.prototype.hasOwnProperty,y=(e,t)=>g.call(e,t),_=Array.isArray,b=e=>"function"==typeof e,C=e=>"string"==typeof e,x=e=>"symbol"==typeof e,S=e=>null!==e&&"object"==typeof e,w=e=>S(e)&&b(e.then)&&b(e.catch),E=Object.prototype.toString,M=e=>E.call(e),L=e=>M(e).slice(8,-1),k=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},O=/-(\w)/g,N=k(e=>e.replace(O,(e,t)=>t?t.toUpperCase():"")),R=/\B([A-Z])/g,T=k(e=>e.replace(R,"-$1").toLowerCase()),F=k(e=>e.charAt(0).toUpperCase()+e.slice(1)),j=(e,t)=>e!==t&&(e==e||t==t),$=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},P=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},A=new WeakMap,I=[];let B;const U=Symbol(""),W=Symbol("");function z(e,t=a){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(...o){if(!n.active)return t.scheduler?void 0:e(...o);if(!I.includes(n)){H(n);try{return K.push(q),q=!0,I.push(n),B=n,e(...o)}finally{I.pop(),J(),B=I[I.length-1]}}};return n.id=D++,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}function V(e){e.active&&(H(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let D=0;function H(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let q=!0;const K=[];function G(){K.push(q),q=!1}function J(){const e=K.pop();q=void 0===e||e}function X(e,t,n){if(!q||void 0===B)return;let o=A.get(e);o||A.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=new Set),r.has(B)||(r.add(B),B.deps.push(r))}function Y(e,t,n,o,r,s){const i=A.get(e);if(!i)return;const l=new Set,c=new Set,a=e=>{e&&e.forEach(e=>{e===B&&q||(e.options.computed?c.add(e):l.add(e))})};if("clear"===t)i.forEach(a);else if("length"===n&&_(e))i.forEach((e,t)=>{("length"===t||t>=o)&&a(e)});else{void 0!==n&&a(i.get(n));const o="add"===t||"delete"===t&&!_(e);(o||"set"===t&&e instanceof Map)&&a(i.get(_(e)?"length":U)),o&&e instanceof Map&&a(i.get(W))}const u=e=>{e.options.scheduler?e.options.scheduler(e):e()};c.forEach(u),l.forEach(u)}const Z=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(x)),Q=re(),ee=re(!1,!0),te=re(!0),ne=re(!0,!0),oe={};function re(e=!1,t=!1){return function(n,o,r){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_raw"===o)return n;const s=_(n);if(s&&y(oe,o))return Reflect.get(oe,o,r);const i=Reflect.get(n,o,r);return x(o)&&Z.has(o)?i:t?(!e&&X(n,0,o),i):$e(i)?s?(!e&&X(n,0,o),i):i.value:(!e&&X(n,0,o),S(i)?e?Oe(i):ke(i):i)}}["includes","indexOf","lastIndexOf"].forEach(e=>{oe[e]=function(...t){const n=Fe(this);for(let e=0,t=this.length;e<t;e++)X(n,0,e+"");const o=n[e](...t);return-1===o||!1===o?n[e](...t.map(Fe)):o}});const se=le(),ie=le(!0);function le(e=!1){return function(t,n,o,r){const s=t[n];if(!e&&(o=Fe(o),!_(t)&&$e(s)&&!$e(o)))return s.value=o,!0;const i=y(t,n),l=Reflect.set(t,n,o,r);return t===Fe(r)&&(i?j(o,s)&&Y(t,"set",n,o):Y(t,"add",n,o)),l}}function ce(e,t){const n=Reflect.has(e,t);return X(e,0,t),n}function ae(e){return X(e,0,U),Reflect.ownKeys(e)}const ue={get:Q,set:se,deleteProperty:function(e,t){const n=y(e,t),o=(e[t],Reflect.deleteProperty(e,t));return o&&n&&Y(e,"delete",t,void 0),o},has:ce,ownKeys:ae},fe={get:te,has:ce,ownKeys:ae,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},de=e=>S(e)?ke(e):e,pe=e=>S(e)?Oe(e):e,ve=e=>Reflect.getPrototypeOf(e);function me(e,t,n){e=Fe(e);const o=Fe(t);t!==o&&X(e,0,t),X(e,0,o);const{has:r,get:s}=ve(e);return r.call(e,t)?n(s.call(e,t)):r.call(e,o)?n(s.call(e,o)):void 0}function he(e){const t=Fe(this),n=Fe(e);e!==n&&X(t,0,e),X(t,0,n);const o=ve(t).has;return o.call(t,e)||o.call(t,n)}function ge(e){return X(e=Fe(e),0,U),Reflect.get(ve(e),"size",e)}function ye(e){return function(t,n){const o=this,r=Fe(o),s=e?pe:de;return!e&&X(r,0,U),ve(r).forEach.call(r,(function(e,n){return t.call(o,s(e),s(n),o)}),n)}}function _e(e,t){return function(...n){const o=Fe(this),r=o instanceof Map,s="entries"===e||e===Symbol.iterator&&r,i="keys"===e&&r,l=ve(o)[e].apply(o,n),c=t?pe:de;return!t&&X(o,0,i?W:U),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[c(e[0]),c(e[1])]:c(e),done:t}},[Symbol.iterator](){return this}}}}function be(e){return function(...t){return"delete"!==e&&this}}const Ce={get(e){return me(this,e,de)},get size(){return ge(this)},has:he,add:function(e){e=Fe(e);const t=Fe(this),n=ve(t),o=n.has.call(t,e),r=n.add.call(t,e);return o||Y(t,"add",e,e),r},set:function(e,t){t=Fe(t);const n=Fe(this),{has:o,get:r,set:s}=ve(n);let i=o.call(n,e);i||(e=Fe(e),i=o.call(n,e));const l=r.call(n,e),c=s.call(n,e,t);return i?j(t,l)&&Y(n,"set",e,t):Y(n,"add",e,t),c},delete:function(e){const t=Fe(this),{has:n,get:o,delete:r}=ve(t);let s=n.call(t,e);s||(e=Fe(e),s=n.call(t,e)),o&&o.call(t,e);const i=r.call(t,e);return s&&Y(t,"delete",e,void 0),i},clear:function(){const e=Fe(this),t=0!==e.size,n=ve(e).clear.call(e);return t&&Y(e,"clear",void 0,void 0),n},forEach:ye(!1)},xe={get(e){return me(this,e,pe)},get size(){return ge(this)},has:he,add:be("add"),set:be("set"),delete:be("delete"),clear:be("clear"),forEach:ye(!0)};function Se(e){const t=e?xe:Ce;return(n,o,r)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?n:Reflect.get(y(t,o)&&o in n?t:n,o,r)}["keys","values","entries",Symbol.iterator].forEach(e=>{Ce[e]=_e(e,!1),xe[e]=_e(e,!0)});const we={get:Se(!1)},Ee={get:Se(!0)};const Me=new Set([Set,Map,WeakMap,WeakSet]),Le=o("Object,Array,Map,Set,WeakMap,WeakSet");function ke(e){return e&&e.__v_isReadonly?e:Ne(e,!1,ue,we)}function Oe(e){return Ne(e,!0,fe,Ee)}function Ne(e,t,n,o){if(!S(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;let r=t?e.__v_readonly:e.__v_reactive;if(void 0!==r)return r;if((s=e).__v_skip||!Le(L(s))||Object.isFrozen(s))return e;var s;const i=Me.has(e.constructor)?o:n;return r=new Proxy(e,i),P(e,t?"__v_readonly":"__v_reactive",r),r}function Re(e){return!(!e||!e.__v_isReadonly)}function Te(e){return function e(t){return Re(t)?e(t.__v_raw):!(!t||!t.__v_isReactive)}(e)||Re(e)}function Fe(e){return e&&Fe(e.__v_raw)||e}const je=e=>S(e)?ke(e):e;function $e(e){return!!e&&!0===e.__v_isRef}function Pe(e){return Ae(e)}function Ae(e,t=!1){if($e(e))return e;let n=t?e:je(e);const o={__v_isRef:!0,get value(){return X(o,0,"value"),n},set value(r){j(Fe(r),e)&&(e=r,n=t?r:je(r),Y(o,"set","value",void 0))}};return o}function Ie(e,t,n,o){let r;try{r=o?e(...o):e()}catch(e){Ue(e,t,n)}return r}function Be(e,t,n,o){if(b(e)){const r=Ie(e,t,n,o);return r&&w(r)&&r.catch(e=>{Ue(e,t,n)}),r}const r=[];for(let s=0;s<e.length;s++)r.push(Be(e[s],t,n,o));return r}function Ue(e,t,n){t&&t.vnode;if(t){let o=t.parent;const r=t.proxy,s=n;for(;o;){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(t[n](e,r,s))return;o=o.parent}const i=t.appContext.config.errorHandler;if(i)return void Ie(i,null,10,[e,r,s])}!function(e,t,n){throw e}(e)}const We=[],ze=[],Ve=Promise.resolve();let De=!1,He=!1;function qe(e){return e?Ve.then(e):Ve}function Ke(e){We.includes(e)||(We.push(e),Je())}function Ge(e){_(e)?ze.push(...e):ze.push(e),Je()}function Je(){De||He||(He=!0,qe(Ze))}function Xe(e){if(ze.length){const e=[...new Set(ze)];ze.length=0;for(let t=0;t<e.length;t++)e[t]()}}const Ye=e=>null==e.id?1/0:e.id;function Ze(e){let t;for(He=!1,De=!0,We.sort((e,t)=>Ye(e)-Ye(t));void 0!==(t=We.shift());)null!==t&&Ie(t,null,14);Xe(),De=!1,(We.length||ze.length)&&Ze(e)}let Qe=null;function et(e,t){t&&!t.isResolved?_(e)?t.effects.push(...e):t.effects.push(e):Ge(e)}let tt=null;const nt=Symbol();const ot=Symbol(void 0),rt=Symbol(void 0),st=Symbol(void 0),it=(Symbol(void 0),[]);let lt=null;function ct(e=!1){it.push(lt=e?null:[])}let at=1;function ut(e,t,n,o,r){const s=mt(e,t,n,o,r,!0);return s.dynamicChildren=lt||u,it.pop(),lt=it[it.length-1]||null,lt&&lt.push(s),s}function ft(e){return!!e&&!0===e.__v_isVNode}function dt(e,t){return e.type===t.type&&e.key===t.key}const pt=({key:e})=>null!=e?e:null,vt=({ref:e})=>null!=e?_(e)?e:[Qe,e]:null,mt=ht;function ht(e,t=null,n=null,o=0,r=null,s=!1){if(e&&e!==nt||(e=st),b(e)&&"__vccOpts"in e&&(e=e.__vccOpts),t){(Te(t)||"__vInternal"in t)&&(t=m({},t));let{class:e,style:n}=t;e&&!C(e)&&(t.class=c(e)),S(n)&&(Te(n)&&!_(n)&&(n=m({},n)),t.style=l(n))}const i=C(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:S(e)?4:b(e)?2:0;const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&pt(t),ref:t&&vt(t),scopeId:tt,children:null,component:null,suspense:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return function e(t,n){let o=0;const{shapeFlag:r}=t;if(null==n)n=null;else if(_(n))o=16;else if("object"==typeof n){if((1&r||64&r)&&n.default)return void e(t,n.default());o=32,n._||"__vInternal"in n||(n._ctx=Qe)}else b(n)?(n={default:n,_ctx:Qe},o=32):(n=String(n),64&r?(o=16,n=[yt(n)]):o=8);t.children=n,t.shapeFlag|=o}(a,n),at>0&&!s&&lt&&32!==o&&(o>0||128&i||64&i||4&i||2&i)&&lt.push(a),a}function gt(e,t){const n=t?e.props?function(...e){const t={};m(t,e[0]);for(let n=1;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=c([t.class,o.class]));else if("style"===e)t.style=l([t.style,o.style]);else if(bt.test(e)){const n=t[e],r=o[e];n!==r&&(t[e]=n?[].concat(n,o[e]):r)}else t[e]=o[e]}return t}(e.props,t):m({},t):e.props;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:n,key:n&&pt(n),ref:n&&vt(n),scopeId:e.scopeId,children:e.children,target:e.target,targetAnchor:e.targetAnchor,shapeFlag:e.shapeFlag,patchFlag:t?e.dynamicChildren?16|e.patchFlag:-2:e.patchFlag,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,el:e.el,anchor:e.anchor}}function yt(e=" ",t=0){return mt(rt,null,e,t)}function _t(e="",t=!1){return t?(ct(),ut(st,null,e)):mt(st,null,e)}const bt=/^on|^vnode/;function Ct(e){if(!e)return u;if(e._n)return e._n;const t={},n=[];if(_(e))for(let n=0;n<e.length;n++){0;const o=N(e[n]);Et(o)&&(t[o]=a)}else{0;for(const o in e){const r=N(o);if(Et(r)){const s=e[o],i=t[r]=_(s)||b(s)?{type:s}:s;if(i){const e=wt(Boolean,i.type),t=wt(String,i.type);i[0]=e>-1,i[1]=t<0||e<t,(e>-1||y(i,"default"))&&n.push(r)}}}}const o=[t,n];return P(e,"_n",o),o}function xt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function St(e,t){return xt(e)===xt(t)}function wt(e,t){if(_(t)){for(let n=0,o=t.length;n<o;n++)if(St(t[n],e))return n}else if(b(t))return St(t,e)?0:-1;return-1}function Et(e){return"$"!==e[0]}function Mt(e,t){if(null===Qe)return e;const n=Qe.proxy,o=e.dirs||(e.dirs=[]);for(let e=0;e<t.length;e++){let[r,s,i,l=a]=t[e];b(r)&&(r={mounted:r,updated:r}),o.push({dir:r,instance:n,value:s,oldValue:void 0,arg:i,modifiers:l})}return e}function Lt(){return{config:{isNativeTag:d,devtools:!0,performance:!1,globalProperties:{},optionMergeStrategies:{},isCustomElement:d,errorHandler:void 0,warnHandler:void 0},mixins:[],components:{},directives:{},provides:Object.create(null)}}new Map;const kt=et;function Ot(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wt(()=>{e.isMounted=!0}),Vt(()=>{e.isUnmounting=!0}),e}const Nt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Function,onEnter:Function,onAfterEnter:Function,onEnterCancelled:Function,onBeforeLeave:Function,onLeave:Function,onAfterLeave:Function,onLeaveCancelled:Function},setup(e,{slots:t}){const n=nn(),o=Ot();return()=>{const r=t.default&&t.default();if(!r||!r.length)return;const s=Fe(e),{mode:i}=s;const l=r[0];if(o.isLeaving)return Ft(l);const c=jt(l);if(!c)return Ft(l);const a=c.transition=Tt(c,s,o,n),u=n.subTree,f=u&&jt(u);if(f&&f.type!==st&&!dt(c,f)){const e=f.transition,t=Tt(f,s,o,n);if($t(f,t),"out-in"===i)return o.isLeaving=!0,t.afterLeave=()=>{o.isLeaving=!1,n.update()},Ft(l);"in-out"===i&&(delete e.delayedLeave,t.delayLeave=(e,t,n)=>{Rt(o,f)[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete a.delayedLeave},a.delayedLeave=n})}return l}}};function Rt(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function Tt(e,{appear:t,persisted:n=!1,onBeforeEnter:o,onEnter:r,onAfterEnter:s,onEnterCancelled:i,onBeforeLeave:l,onLeave:c,onAfterLeave:a,onLeaveCancelled:u},f,d){const p=String(e.key),v=Rt(f,e),m=(e,t)=>{e&&Be(e,d,9,t)},h={persisted:n,beforeEnter(n){if(!t&&!f.isMounted)return;n._leaveCb&&n._leaveCb(!0);const r=v[p];r&&dt(e,r)&&r.el._leaveCb&&r.el._leaveCb(),m(o,[n])},enter(e){if(!t&&!f.isMounted)return;let n=!1;const o=e._enterCb=t=>{n||(n=!0,m(t?i:s,[e]),h.delayedLeave&&h.delayedLeave(),e._enterCb=void 0)};r?r(e,o):o()},leave(t,n){const o=String(e.key);if(t._enterCb&&t._enterCb(!0),f.isUnmounting)return n();m(l,[t]);let r=!1;const s=t._leaveCb=s=>{r||(r=!0,n(),m(s?u:a,[t]),t._leaveCb=void 0,v[o]===e&&delete v[o])};v[o]=e,c?c(t,s):s()}};return h}function Ft(e){if(Pt(e))return(e=gt(e)).children=null,e}function jt(e){return Pt(e)?e.children?e.children[0]:void 0:e}function $t(e,t){6&e.shapeFlag&&e.component?$t(e.component.subTree,t):e.transition=t}const Pt=e=>e.type.__isKeepAlive;RegExp,RegExp;function At(e){return e.displayName||e.name}function It(e,t){return _(e)?e.some(e=>It(e,t)):C(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function Bt(e,t,n=tn,o=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;G(),on(n);const r=Be(t,n,e,o);return on(null),J(),r});o?r.unshift(s):r.push(s)}else 0}const Ut=e=>(t,n=tn)=>!rn&&Bt(e,t,n),Wt=(Ut("bm"),Ut("m")),zt=(Ut("bu"),Ut("u")),Vt=Ut("bum"),Dt=Ut("um"),Ht=(Ut("rtg"),Ut("rtc"),e=>e());const qt={};function Kt(e,t,n){return Gt(e,t,n)}function Gt(e,t,{immediate:n,deep:o,flush:r,onTrack:s,onTrigger:i}=a){const l=tn;let c,u;if(c=_(e)?()=>e.map(e=>$e(e)?e.value:Ie(e,l,2)):$e(e)?()=>e.value:t?()=>Ie(e,l,2):()=>{if(!l||!l.isUnmounted)return u&&u(),Ie(e,l,3,[f])},t&&o){const e=c;c=()=>function e(t,n=new Set){if(!S(t)||n.has(t))return t;if(n.add(t),_(t))for(let o=0;o<t.length;o++)e(t[o],n);else if(t instanceof Map)t.forEach((o,r)=>{e(t.get(r),n)});else if(t instanceof Set)t.forEach(t=>{e(t,n)});else for(const o in t)e(t[o],n);return t}(e())}const f=e=>{u=m.options.onStop=()=>{Ie(e,l,4)}};let d=_(e)?[]:qt;const p=t?()=>{if(l&&l.isUnmounted)return;const e=m();(o||j(e,d))&&(u&&u(),Be(t,l,3,[e,d===qt?void 0:d,f]),d=e)}:void 0;let v;v="sync"===r?Ht:"pre"===r?e=>{!l||l.isMounted?Ke(e):e()}:e=>kt(e,l&&l.suspense);const m=z(c,{lazy:!0,computed:!0,onTrack:s,onTrigger:i,scheduler:p?()=>v(p):v});return sn(m),p?n?p():d=m():m(),()=>{V(m),l&&h(l.effects,m)}}function Jt(e,t,n){const o=this.proxy,r=Kt(C(e)?()=>o[e]:e.bind(o),t.bind(o),n);return Vt(r,this),r}function Xt(e,t){if(tn){let n=tn.provides;const o=tn.parent&&tn.parent.provides;o===n&&(n=tn.provides=Object.create(o)),n[e]=t}else 0}function Yt(e,t){const n=tn||Qe;if(n){const o=n.provides;if(e in o)return o[e];if(arguments.length>1)return t}else 0}function Zt(e,t,n){const o=n.appContext.config.optionMergeStrategies;for(const r in t){const s=o&&o[r];s?e[r]=s(e[r],t[r],n.proxy,r):y(e,r)||(e[r]=t[r])}}const Qt={$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>e.parent&&e.parent.proxy,$root:e=>e.root&&e.root.proxy,$emit:e=>e.emit,$options:e=>function(e){const t=e.type,{__merged:n,mixins:o,extends:r}=t;if(n)return n;const s=e.appContext.mixins;if(!s.length&&!o&&!r)return t;const i={};return s.forEach(t=>Zt(i,t,e)),r&&Zt(i,r,e),o&&o.forEach(t=>Zt(i,t,e)),Zt(i,t,e),t.__merged=i}(e),$forceUpdate:e=>()=>Ke(e.update),$nextTick:()=>qe,$watch:e=>Jt.bind(e)},en={get({_:e},t){const{ctx:n,setupState:o,data:r,props:s,accessCache:i,type:l,appContext:c}=e;if("__v_skip"===t)return!0;if("$"!==t[0]){const e=i[t];if(void 0!==e)switch(e){case 0:return o[t];case 1:return r[t];case 3:return n[t];case 2:return s[t]}else{if(o!==a&&y(o,t))return i[t]=0,o[t];if(r!==a&&y(r,t))return i[t]=1,r[t];if(l.props&&y(Ct(l.props)[0],t))return i[t]=2,s[t];if(n!==a&&y(n,t))return i[t]=3,n[t];i[t]=4}}const u=Qt[t];let f,d;return u?u(e):(f=l.__cssModules)&&(f=f[t])?f:n!==a&&y(n,t)?(i[t]=3,n[t]):(d=c.config.globalProperties,y(d,t)?d[t]:void 0)},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;if(r!==a&&y(r,t))r[t]=n;else if(o!==a&&y(o,t))o[t]=n;else if(t in e.props)return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has:({_:{data:e,setupState:t,accessCache:n,ctx:o,type:r,appContext:s}},i)=>void 0!==n[i]||e!==a&&y(e,i)||t!==a&&y(t,i)||r.props&&y(Ct(r.props)[0],i)||y(o,i)||y(Qt,i)||y(s.config.globalProperties,i)};Lt();let tn=null;const nn=()=>tn||Qe,on=e=>{tn=e};let rn=!1;function sn(e){tn&&(tn.effects||(tn.effects=[])).push(e)}function ln(e){const t=function(e){let t,n;b(e)?(t=e,n=f):(t=e.get,n=e.set);let o,r,s=!0;const i=z(t,{lazy:!0,computed:!0,scheduler:()=>{s||(s=!0,Y(r,"set","value"))}});return r={__v_isRef:!0,effect:i,get value(){return s&&(o=i(),s=!1),X(r,0,"value"),o},set value(e){n(e)}},r}(e);return sn(t.effect),t}Symbol("");function cn(e,t,n={},o){let r=e[t];return ct(),ut(ot,{key:n.key},r?r(n):o?o():[],e._?64:-2)}const an=e=>null==e?"":_(e)||(e=>"[object Object]"===M(e))(e)&&e.toString===E?JSON.stringify(e,null,2):String(e),un=N,fn="http://www.w3.org/2000/svg",dn="undefined"!=typeof document?document:null;let pn,vn;const mn={insert:(e,t,n)=>{n?t.insertBefore(e,n):t.appendChild(e)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n)=>t?dn.createElementNS(fn,e):dn.createElement(e,n?{is:n}:void 0),createText:e=>dn.createTextNode(e),createComment:e=>dn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode:e=>e.cloneNode(!0),insertStaticContent(e,t,n,o){const r=o?vn||(vn=dn.createElementNS(fn,"svg")):pn||(pn=dn.createElement("div"));r.innerHTML=e;const s=r.children[0];return mn.insert(s,t,n),s}};const hn=/\s*!important$/;function gn(e,t,n){if(t.startsWith("--"))e.setProperty(t,n);else{const o=function(e,t){const n=_n[t];if(n)return n;let o=un(t);if("filter"!==o&&o in e)return _n[t]=o;F(o);for(let n=0;n<yn.length;n++){const r=yn[n]+o;if(r in e)return _n[t]=r}return t}(e,t);hn.test(n)?e.setProperty(T(o),n.replace(hn,""),"important"):e[o]=n}}const yn=["Webkit","Moz","ms"],_n={};const bn="http://www.w3.org/1999/xlink";let Cn=Date.now;"undefined"!=typeof document&&Cn()>document.createEvent("Event").timeStamp&&(Cn=()=>performance.now());let xn=0;const Sn=Promise.resolve(),wn=()=>{xn=0},En=()=>xn||(Sn.then(wn),xn=Cn());function Mn(e,t,n,o){e.addEventListener(t,n,o)}function Ln(e,t,n,o){e.removeEventListener(t,n,o)}function kn(e,t){const n=e=>{e.timeStamp>=n.lastUpdated-1&&Be(function(e,t){if(_(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}(e,n.value),t,5,[e])};return n.value=e,e.invoker=n,n.lastUpdated=En(),n}const On=/^on[a-z]/,Nn=((e,{slots:t})=>function(e,t,n){return 2===arguments.length?S(t)&&!_(t)?ft(t)?mt(e,null,[t]):mt(e,t):mt(e,null,t):(ft(n)&&(n=[n]),mt(e,t,n))}(Nt,Rn(e),t)).props={...Nt.props,name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};function Rn({name:e="v",type:t,css:n=!0,duration:o,enterFromClass:r=e+"-enter-from",enterActiveClass:s=e+"-enter-active",enterToClass:i=e+"-enter-to",appearFromClass:l=r,appearActiveClass:c=s,appearToClass:a=i,leaveFromClass:u=e+"-leave-from",leaveActiveClass:f=e+"-leave-active",leaveToClass:d=e+"-leave-to",...p}){if(!n)return p;const v=nn(),m=function(e){if(null==e)return null;if(S(e))return[Tn(e.enter),Tn(e.leave)];{const t=Tn(e);return[t,t]}}(o),h=m&&m[0],g=m&&m[1],{appear:y,onBeforeEnter:_,onEnter:b,onLeave:C}=p;y&&!nn().isMounted&&(r=l,s=c,i=a);const x=(e,t)=>{jn(e,i),jn(e,s),t&&t()},w=(e,t)=>{jn(e,d),jn(e,f),t&&t()};function E(e,t){Be(e,v,9,t)}return{...p,onBeforeEnter(e){_&&_(e),Fn(e,s),Fn(e,r)},onEnter(e,n){$n(()=>{const o=()=>x(e,n);b&&E(b,[e,o]),jn(e,r),Fn(e,i),b&&b.length>1||(h?setTimeout(o,h):Pn(e,t,o))})},onLeave(e,n){Fn(e,f),Fn(e,u),$n(()=>{const o=()=>w(e,n);C&&E(C,[e,o]),jn(e,u),Fn(e,d),C&&C.length>1||(g?setTimeout(o,g):Pn(e,t,o))})},onEnterCancelled:x,onLeaveCancelled:w}}function Tn(e){return Number(e||0)}function Fn(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function jn(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function $n(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}function Pn(e,t,n){const{type:o,timeout:r,propCount:s}=An(e,t);if(!o)return n();const i=o+"end";let l=0;const c=()=>{e.removeEventListener(i,a),n()},a=t=>{t.target===e&&++l>=s&&c()};setTimeout(()=>{l<s&&c()},r+1),e.addEventListener(i,a)}function An(e,t){const n=window.getComputedStyle(e),o=e=>(n[e]||"").split(", "),r=o("transitionDelay"),s=o("transitionDuration"),i=In(r,s),l=o("animationDelay"),c=o("animationDuration"),a=In(l,c);let u=null,f=0,d=0;return"transition"===t?i>0&&(u="transition",f=i,d=s.length):"animation"===t?a>0&&(u="animation",f=a,d=c.length):(f=Math.max(i,a),u=f>0?i>a?"transition":"animation":null,d=u?"transition"===u?s.length:c.length:0),{type:u,timeout:f,propCount:d,hasTransform:"transition"===u&&/\b(transform|all)(,|$)/.test(n.transitionProperty)}}function In(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>Bn(t)+Bn(e[n])))}function Bn(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}const Un=new WeakMap,Wn=new WeakMap,zn={props:{...Nn,tag:String,moveClass:String},setup(e,{slots:t}){const n=nn(),o=Ot();let r,s,i=null;return zt(()=>{if(!r.length)return;const t=e.moveClass||(e.name||"v")+"-move";if(i=null===i?i=function(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach(e=>{e.split(/\s+/).forEach(e=>e&&o.classList.remove(e))});n.split(/\s+/).forEach(e=>e&&o.classList.add(e)),o.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(o);const{hasTransform:s}=An(o);return r.removeChild(o),s}(r[0].el,n.vnode.el,t):i,!i)return;r.forEach(Vn),r.forEach(Dn);const o=r.filter(Hn);document.body.offsetHeight,o.forEach(e=>{const n=e.el,o=n.style;Fn(n,t),o.transform=o.webkitTransform=o.transitionDuration="";const r=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,jn(n,t))};n.addEventListener("transitionend",r)})}),()=>{const i=function e(t){return t&&e(t.__v_raw)||t}(e),l=Rn(i),c=i.tag||ot;r=s,s=function e(t){let n=[];for(let o=0;o<t.length;o++){const r=t[o];r.type===ot?n=n.concat(e(r.children)):n.push(r)}return n}(t.default?t.default():[]);for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&$t(t,Tt(t,l,o,n))}if(r)for(let e=0;e<r.length;e++){const t=r[e];$t(t,Tt(t,l,o,n)),Un.set(t,t.el.getBoundingClientRect())}return mt(c,null,s)}}};delete zn.props.mode;function Vn(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Dn(e){Wn.set(e,e.el.getBoundingClientRect())}function Hn(e){const t=Un.get(e),n=Wn.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${o}px,${r}px)`,t.transitionDuration="0s",e}}const qn={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Kn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),Kn(e,!0),o.enter(e)):o.leave(e,()=>{Kn(e,!1)}):Kn(e,t))},beforeUnmount(e){Kn(e,!0)}};function Kn(e,t){e.style.display=t?e._vod:"none"}var Gn={props:{width:String,height:String},name:"ContextMenu",setup(){Xt("instance",nn());const e=Pe(null),t=ke({isVisible:!1}),n=n=>{n.preventDefault();const{value:r}=e,{pageX:s,pageY:i}=n;t.isVisible=!0,qe(()=>{const{left:e,top:t}=o(s,i);r.style.top=t+5+"px",r.style.left=e+5+"px"})},o=(t,n)=>{const{value:o}=e,r={top:n,left:t},{innerWidth:s,innerHeight:i}=window,{clientWidth:l,clientHeight:c}=o;return n+c>i&&(r.top-=c),t+l>s&&(r.left-=l),r.top<0&&(r.top=c<i?(i-c)/2:0),r.left<0&&(r.left=l<s?(s-l)/2:0),r},r=t=>{const{target:n}=t,{value:o}=e;o.contains(n)||s()},s=()=>{t.isVisible=!1};return Wt(()=>{}),Dt(()=>{document.removeEventListener("contextmenu",n),document.addEventListener("mousedown",r,!1)}),{state:t,contextmenu:e,hideMenu:s,registerHandlers:e=>{e.el.addEventListener("contextmenu",n),document.addEventListener("mousedown",r,!1)}}}};n(4);Gn.render=function(e,t){return ct(),ut("div",null,[Mt(mt("ul",{class:"next-context-menu",style:{height:e.height+"px",width:e.width+"px"},ref:"contextmenu"},[cn(e.$slots,"default")],4),[[qn,e.state.isVisible]])])};var Jn=Gn;var Xn={name:"ContextMenuItem",props:{disabled:Boolean,hideMenu:{type:Boolean,default:!0}},setup(e){const t=Yt("instance"),n=ke({"context-menu-item-disabled":ln(()=>e.disabled)});return{rootInstance:t,itemClass:n,handleClickItem:n=>{e.hideMenu&&t.ctx.hideMenu()}}}};n(5);Xn.render=function(e,t){return ct(),ut("li",{class:["context-menu-item",e.itemClass],onClick:t[1]||(t[1]=t=>e.handleClickItem(t))},[cn(e.$slots,"default")],2)};var Yn=Xn;const Zn=mt("div",{class:"menu-sub-label"},[mt("span",null,"子菜单"),mt("i",{class:"fa fa-angle-right"})],-1);var Qn={name:"ContextMenuSub",setup(){const e=Pe(null),t=Pe(!1),n=ke({name:[]}),o=t=>{const n=[],{target:o}=t,{innerWidth:r,innerHeight:s}=window,{clientWidth:i,clientHeight:l}=e.value,c=o.getBoundingClientRect();return c.bottom+l>s?n.push("bottom"):n.push("top"),c.right+i>r?n.push("left"):n.push("right"),n},r=ln(()=>n.name);return{contextmenuSub:e,hover:t,handleMouseEnter:e=>{console.log(e),t.value=!0,qe(()=>{n.name=o(e)})},handleMouseLeave:e=>{t.value=!1},dynamicClass:n,getClassName:r,setDynamicClass:o}}};n(6);Qn.render=function(e,t){return ct(),ut("li",{class:"context-menu-item context-menu-sub",onMouseenter:t[1]||(t[1]=t=>e.handleMouseEnter(t)),onMouseleave:t[2]||(t[2]=t=>e.handleMouseLeave(t))},[Zn,Mt(mt("ul",{class:["next-context-menu",e.getClassName],ref:"contextmenuSub"},[cn(e.$slots,"default")],2),[[qn,e.hover]])],32)};var eo=Qn;const to={class:"context-menu-group"},no={key:0,class:"context-menu-group-name"};var oo={name:"ContextMenuGroup",props:{name:{type:String,required:!0}}};n(7);oo.render=function(e,t){return ct(),ut("ul",to,[e.name?(ct(),ut("span",no,an(e.name),1)):_t("v-if",!0),cn(e.$slots,"default")])};var ro=oo;t.default={useDirective:e=>{e.directive("contextmenu",(e,t,n)=>{n.dirs[0].instance.contextmenu.registerHandlers({el:e,vnode:n})})}}}])}));
//# sourceMappingURL=index.js.map