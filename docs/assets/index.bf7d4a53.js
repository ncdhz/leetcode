var $8=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var kte=$8((Jt,er)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function _h(n,e){const t=Object.create(null),r=n.split(",");for(let a=0;a<r.length;a++)t[r[a]]=!0;return e?a=>!!t[a.toLowerCase()]:a=>!!t[a]}const B8="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",V8=_h(B8);function Aw(n){return!!n||n===""}function rd(n){if(yn(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],a=vt(r)?H8(r):rd(r);if(a)for(const i in a)e[i]=a[i]}return e}else{if(vt(n))return n;if(dt(n))return n}}const K8=/;(?![^(]*\))/g,z8=/:(.+)/;function H8(n){const e={};return n.split(K8).forEach(t=>{if(t){const r=t.split(z8);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Wl(n){let e="";if(vt(n))e=n;else if(yn(n))for(let t=0;t<n.length;t++){const r=Wl(n[t]);r&&(e+=r+" ")}else if(dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const mo=n=>vt(n)?n:n==null?"":yn(n)||dt(n)&&(n.toString===Lw||!_n(n.toString))?JSON.stringify(n,Fw,2):String(n),Fw=(n,e)=>e&&e.__v_isRef?Fw(n,e.value):bo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,a])=>(t[`${r} =>`]=a,t),{})}:jw(e)?{[`Set(${e.size})`]:[...e.values()]}:dt(e)&&!yn(e)&&!Rw(e)?String(e):e,Bn={},yo=[],Pr=()=>{},W8=()=>!1,U8=/^on[^a-z]/,ad=n=>U8.test(n),kh=n=>n.startsWith("onUpdate:"),wt=Object.assign,Ph=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},q8=Object.prototype.hasOwnProperty,En=(n,e)=>q8.call(n,e),yn=Array.isArray,bo=n=>id(n)==="[object Map]",jw=n=>id(n)==="[object Set]",_n=n=>typeof n=="function",vt=n=>typeof n=="string",Oh=n=>typeof n=="symbol",dt=n=>n!==null&&typeof n=="object",Dw=n=>dt(n)&&_n(n.then)&&_n(n.catch),Lw=Object.prototype.toString,id=n=>Lw.call(n),Y8=n=>id(n).slice(8,-1),Rw=n=>id(n)==="[object Object]",Th=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ks=_h(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),od=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},G8=/-(\w)/g,Kt=od(n=>n.replace(G8,(e,t)=>t?t.toUpperCase():"")),X8=/\B([A-Z])/g,Ko=od(n=>n.replace(X8,"-$1").toLowerCase()),ld=od(n=>n.charAt(0).toUpperCase()+n.slice(1)),_f=od(n=>n?`on${ld(n)}`:""),Ul=(n,e)=>!Object.is(n,e),kf=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},dc=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},$w=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let T1;const Z8=()=>T1||(T1=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Vr;class Q8{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Vr&&(this.parent=Vr,this.index=(Vr.scopes||(Vr.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Vr;try{return Vr=this,e()}finally{Vr=t}}}on(){Vr=this}off(){Vr=this.parent}stop(e){if(this.active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function J8(n,e=Vr){e&&e.active&&e.effects.push(n)}const Nh=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Bw=n=>(n.w&Za)>0,Vw=n=>(n.n&Za)>0,eO=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Za},nO=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const a=e[r];Bw(a)&&!Vw(a)?a.delete(n):e[t++]=a,a.w&=~Za,a.n&=~Za}e.length=t}},Vv=new WeakMap;let gl=0,Za=1;const Kv=30;let wr;const Ti=Symbol(""),zv=Symbol("");class Ih{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,J8(this,r)}run(){if(!this.active)return this.fn();let e=wr,t=Ua;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wr,wr=this,Ua=!0,Za=1<<++gl,gl<=Kv?eO(this):N1(this),this.fn()}finally{gl<=Kv&&nO(this),Za=1<<--gl,wr=this.parent,Ua=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wr===this?this.deferStop=!0:this.active&&(N1(this),this.onStop&&this.onStop(),this.active=!1)}}function N1(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Ua=!0;const Kw=[];function zo(){Kw.push(Ua),Ua=!1}function Ho(){const n=Kw.pop();Ua=n===void 0?!0:n}function tr(n,e,t){if(Ua&&wr){let r=Vv.get(n);r||Vv.set(n,r=new Map);let a=r.get(t);a||r.set(t,a=Nh()),zw(a)}}function zw(n,e){let t=!1;gl<=Kv?Vw(n)||(n.n|=Za,t=!Bw(n)):t=!n.has(wr),t&&(n.add(wr),wr.deps.push(n))}function xa(n,e,t,r,a,i){const o=Vv.get(n);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(t==="length"&&yn(n))o.forEach((u,s)=>{(s==="length"||s>=r)&&l.push(u)});else switch(t!==void 0&&l.push(o.get(t)),e){case"add":yn(n)?Th(t)&&l.push(o.get("length")):(l.push(o.get(Ti)),bo(n)&&l.push(o.get(zv)));break;case"delete":yn(n)||(l.push(o.get(Ti)),bo(n)&&l.push(o.get(zv)));break;case"set":bo(n)&&l.push(o.get(Ti));break}if(l.length===1)l[0]&&Hv(l[0]);else{const u=[];for(const s of l)s&&u.push(...s);Hv(Nh(u))}}function Hv(n,e){const t=yn(n)?n:[...n];for(const r of t)r.computed&&I1(r);for(const r of t)r.computed||I1(r)}function I1(n,e){(n!==wr||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const tO=_h("__proto__,__v_isRef,__isVue"),Hw=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Oh)),rO=Eh(),aO=Eh(!1,!0),iO=Eh(!0),E1=oO();function oO(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=an(this);for(let i=0,o=this.length;i<o;i++)tr(r,"get",i+"");const a=r[e](...t);return a===-1||a===!1?r[e](...t.map(an)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){zo();const r=an(this)[e].apply(this,t);return Ho(),r}}),n}function Eh(n=!1,e=!1){return function(r,a,i){if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return e;if(a==="__v_raw"&&i===(n?e?wO:Gw:e?Yw:qw).get(r))return r;const o=yn(r);if(!n&&o&&En(E1,a))return Reflect.get(E1,a,i);const l=Reflect.get(r,a,i);return(Oh(a)?Hw.has(a):tO(a))||(n||tr(r,"get",a),e)?l:Ct(l)?o&&Th(a)?l:l.value:dt(l)?n?Xw(l):kn(l):l}}const lO=Ww(),uO=Ww(!0);function Ww(n=!1){return function(t,r,a,i){let o=t[r];if(ql(o)&&Ct(o)&&!Ct(a))return!1;if(!n&&!ql(a)&&(Wv(a)||(a=an(a),o=an(o)),!yn(t)&&Ct(o)&&!Ct(a)))return o.value=a,!0;const l=yn(t)&&Th(r)?Number(r)<t.length:En(t,r),u=Reflect.set(t,r,a,i);return t===an(i)&&(l?Ul(a,o)&&xa(t,"set",r,a):xa(t,"add",r,a)),u}}function sO(n,e){const t=En(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&xa(n,"delete",e,void 0),r}function cO(n,e){const t=Reflect.has(n,e);return(!Oh(e)||!Hw.has(e))&&tr(n,"has",e),t}function dO(n){return tr(n,"iterate",yn(n)?"length":Ti),Reflect.ownKeys(n)}const Uw={get:rO,set:lO,deleteProperty:sO,has:cO,ownKeys:dO},fO={get:iO,set(n,e){return!0},deleteProperty(n,e){return!0}},vO=wt({},Uw,{get:aO,set:uO}),Mh=n=>n,ud=n=>Reflect.getPrototypeOf(n);function Vu(n,e,t=!1,r=!1){n=n.__v_raw;const a=an(n),i=an(e);t||(e!==i&&tr(a,"get",e),tr(a,"get",i));const{has:o}=ud(a),l=r?Mh:t?jh:Yl;if(o.call(a,e))return l(n.get(e));if(o.call(a,i))return l(n.get(i));n!==a&&n.get(e)}function Ku(n,e=!1){const t=this.__v_raw,r=an(t),a=an(n);return e||(n!==a&&tr(r,"has",n),tr(r,"has",a)),n===a?t.has(n):t.has(n)||t.has(a)}function zu(n,e=!1){return n=n.__v_raw,!e&&tr(an(n),"iterate",Ti),Reflect.get(n,"size",n)}function M1(n){n=an(n);const e=an(this);return ud(e).has.call(e,n)||(e.add(n),xa(e,"add",n,n)),this}function A1(n,e){e=an(e);const t=an(this),{has:r,get:a}=ud(t);let i=r.call(t,n);i||(n=an(n),i=r.call(t,n));const o=a.call(t,n);return t.set(n,e),i?Ul(e,o)&&xa(t,"set",n,e):xa(t,"add",n,e),this}function F1(n){const e=an(this),{has:t,get:r}=ud(e);let a=t.call(e,n);a||(n=an(n),a=t.call(e,n)),r&&r.call(e,n);const i=e.delete(n);return a&&xa(e,"delete",n,void 0),i}function j1(){const n=an(this),e=n.size!==0,t=n.clear();return e&&xa(n,"clear",void 0,void 0),t}function Hu(n,e){return function(r,a){const i=this,o=i.__v_raw,l=an(o),u=e?Mh:n?jh:Yl;return!n&&tr(l,"iterate",Ti),o.forEach((s,c)=>r.call(a,u(s),u(c),i))}}function Wu(n,e,t){return function(...r){const a=this.__v_raw,i=an(a),o=bo(i),l=n==="entries"||n===Symbol.iterator&&o,u=n==="keys"&&o,s=a[n](...r),c=t?Mh:e?jh:Yl;return!e&&tr(i,"iterate",u?zv:Ti),{next(){const{value:d,done:f}=s.next();return f?{value:d,done:f}:{value:l?[c(d[0]),c(d[1])]:c(d),done:f}},[Symbol.iterator](){return this}}}}function Ia(n){return function(...e){return n==="delete"?!1:this}}function pO(){const n={get(i){return Vu(this,i)},get size(){return zu(this)},has:Ku,add:M1,set:A1,delete:F1,clear:j1,forEach:Hu(!1,!1)},e={get(i){return Vu(this,i,!1,!0)},get size(){return zu(this)},has:Ku,add:M1,set:A1,delete:F1,clear:j1,forEach:Hu(!1,!0)},t={get(i){return Vu(this,i,!0)},get size(){return zu(this,!0)},has(i){return Ku.call(this,i,!0)},add:Ia("add"),set:Ia("set"),delete:Ia("delete"),clear:Ia("clear"),forEach:Hu(!0,!1)},r={get(i){return Vu(this,i,!0,!0)},get size(){return zu(this,!0)},has(i){return Ku.call(this,i,!0)},add:Ia("add"),set:Ia("set"),delete:Ia("delete"),clear:Ia("clear"),forEach:Hu(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Wu(i,!1,!1),t[i]=Wu(i,!0,!1),e[i]=Wu(i,!1,!0),r[i]=Wu(i,!0,!0)}),[n,t,e,r]}const[hO,gO,mO,yO]=pO();function Ah(n,e){const t=e?n?yO:mO:n?gO:hO;return(r,a,i)=>a==="__v_isReactive"?!n:a==="__v_isReadonly"?n:a==="__v_raw"?r:Reflect.get(En(t,a)&&a in r?t:r,a,i)}const bO={get:Ah(!1,!1)},CO={get:Ah(!1,!0)},xO={get:Ah(!0,!1)},qw=new WeakMap,Yw=new WeakMap,Gw=new WeakMap,wO=new WeakMap;function SO(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _O(n){return n.__v_skip||!Object.isExtensible(n)?0:SO(Y8(n))}function kn(n){return ql(n)?n:Fh(n,!1,Uw,bO,qw)}function kO(n){return Fh(n,!1,vO,CO,Yw)}function Xw(n){return Fh(n,!0,fO,xO,Gw)}function Fh(n,e,t,r,a){if(!dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=a.get(n);if(i)return i;const o=_O(n);if(o===0)return n;const l=new Proxy(n,o===2?r:t);return a.set(n,l),l}function Co(n){return ql(n)?Co(n.__v_raw):!!(n&&n.__v_isReactive)}function ql(n){return!!(n&&n.__v_isReadonly)}function Wv(n){return!!(n&&n.__v_isShallow)}function Zw(n){return Co(n)||ql(n)}function an(n){const e=n&&n.__v_raw;return e?an(e):n}function Qw(n){return dc(n,"__v_skip",!0),n}const Yl=n=>dt(n)?kn(n):n,jh=n=>dt(n)?Xw(n):n;function Jw(n){Ua&&wr&&(n=an(n),zw(n.dep||(n.dep=Nh())))}function eS(n,e){n=an(n),n.dep&&Hv(n.dep)}function Ct(n){return!!(n&&n.__v_isRef===!0)}function q(n){return nS(n,!1)}function cn(n){return nS(n,!0)}function nS(n,e){return Ct(n)?n:new PO(n,e)}class PO{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:an(e),this._value=t?e:Yl(e)}get value(){return Jw(this),this._value}set value(e){e=this.__v_isShallow?e:an(e),Ul(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Yl(e),eS(this))}}function Xe(n){return Ct(n)?n.value:n}const OO={get:(n,e,t)=>Xe(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const a=n[e];return Ct(a)&&!Ct(t)?(a.value=t,!0):Reflect.set(n,e,t,r)}};function tS(n){return Co(n)?n:new Proxy(n,OO)}function Ni(n){const e=yn(n)?new Array(n.length):{};for(const t in n)e[t]=We(n,t);return e}class TO{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function We(n,e,t){const r=n[e];return Ct(r)?r:new TO(n,e,t)}class NO{constructor(e,t,r,a){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ih(e,()=>{this._dirty||(this._dirty=!0,eS(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=an(this);return Jw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function IO(n,e,t=!1){let r,a;const i=_n(n);return i?(r=n,a=Pr):(r=n.get,a=n.set),new NO(r,a,i||!a,t)}function qa(n,e,t,r){let a;try{a=r?n(...r):n()}catch(i){sd(i,e,t)}return a}function vr(n,e,t,r){if(_n(n)){const i=qa(n,e,t,r);return i&&Dw(i)&&i.catch(o=>{sd(o,e,t)}),i}const a=[];for(let i=0;i<n.length;i++)a.push(vr(n[i],e,t,r));return a}function sd(n,e,t,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=t;for(;i;){const s=i.ec;if(s){for(let c=0;c<s.length;c++)if(s[c](n,o,l)===!1)return}i=i.parent}const u=e.appContext.config.errorHandler;if(u){qa(u,null,10,[n,o,l]);return}}EO(n,t,a,r)}function EO(n,e,t,r=!0){console.error(n)}let fc=!1,Uv=!1;const Zt=[];let ha=0;const Pl=[];let ml=null,io=0;const Ol=[];let Fa=null,oo=0;const rS=Promise.resolve();let Dh=null,qv=null;function dn(n){const e=Dh||rS;return n?e.then(this?n.bind(this):n):e}function MO(n){let e=ha+1,t=Zt.length;for(;e<t;){const r=e+t>>>1;Gl(Zt[r])<n?e=r+1:t=r}return e}function aS(n){(!Zt.length||!Zt.includes(n,fc&&n.allowRecurse?ha+1:ha))&&n!==qv&&(n.id==null?Zt.push(n):Zt.splice(MO(n.id),0,n),iS())}function iS(){!fc&&!Uv&&(Uv=!0,Dh=rS.then(uS))}function AO(n){const e=Zt.indexOf(n);e>ha&&Zt.splice(e,1)}function oS(n,e,t,r){yn(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?r+1:r))&&t.push(n),iS()}function FO(n){oS(n,ml,Pl,io)}function jO(n){oS(n,Fa,Ol,oo)}function cd(n,e=null){if(Pl.length){for(qv=e,ml=[...new Set(Pl)],Pl.length=0,io=0;io<ml.length;io++)ml[io]();ml=null,io=0,qv=null,cd(n,e)}}function lS(n){if(cd(),Ol.length){const e=[...new Set(Ol)];if(Ol.length=0,Fa){Fa.push(...e);return}for(Fa=e,Fa.sort((t,r)=>Gl(t)-Gl(r)),oo=0;oo<Fa.length;oo++)Fa[oo]();Fa=null,oo=0}}const Gl=n=>n.id==null?1/0:n.id;function uS(n){Uv=!1,fc=!0,cd(n),Zt.sort((t,r)=>Gl(t)-Gl(r));const e=Pr;try{for(ha=0;ha<Zt.length;ha++){const t=Zt[ha];t&&t.active!==!1&&qa(t,null,14)}}finally{ha=0,Zt.length=0,lS(),fc=!1,Dh=null,(Zt.length||Pl.length||Ol.length)&&uS(n)}}function DO(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Bn;let a=t;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=r[c]||Bn;f&&(a=t.map(p=>p.trim())),d&&(a=t.map($w))}let l,u=r[l=_f(e)]||r[l=_f(Kt(e))];!u&&i&&(u=r[l=_f(Ko(e))]),u&&vr(u,n,6,a);const s=r[l+"Once"];if(s){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,vr(s,n,6,a)}}function sS(n,e,t=!1){const r=e.emitsCache,a=r.get(n);if(a!==void 0)return a;const i=n.emits;let o={},l=!1;if(!_n(n)){const u=s=>{const c=sS(s,e,!0);c&&(l=!0,wt(o,c))};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!l?(r.set(n,null),null):(yn(i)?i.forEach(u=>o[u]=null):wt(o,i),r.set(n,o),o)}function dd(n,e){return!n||!ad(e)?!1:(e=e.slice(2).replace(/Once$/,""),En(n,e[0].toLowerCase()+e.slice(1))||En(n,Ko(e))||En(n,e))}let Ot=null,cS=null;function vc(n){const e=Ot;return Ot=n,cS=n&&n.type.__scopeId||null,e}function Tn(n,e=Ot,t){if(!e||n._n)return n;const r=(...a)=>{r._d&&q1(-1);const i=vc(e),o=n(...a);return vc(i),r._d&&q1(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Pf(n){const{type:e,vnode:t,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:l,attrs:u,emit:s,render:c,renderCache:d,data:f,setupState:p,ctx:g,inheritAttrs:y}=n;let h,m;const b=vc(n);try{if(t.shapeFlag&4){const x=a||r;h=Ur(c.call(x,x,d,i,p,f,g)),m=u}else{const x=e;h=Ur(x.length>1?x(i,{attrs:u,slots:l,emit:s}):x(i,null)),m=e.props?u:LO(u)}}catch(x){Il.length=0,sd(x,n,1),h=v(nr)}let C=h;if(m&&y!==!1){const x=Object.keys(m),{shapeFlag:S}=C;x.length&&S&7&&(o&&x.some(kh)&&(m=RO(m,o)),C=Pt(C,m))}return t.dirs&&(C=Pt(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),h=C,vc(b),h}const LO=n=>{let e;for(const t in n)(t==="class"||t==="style"||ad(t))&&((e||(e={}))[t]=n[t]);return e},RO=(n,e)=>{const t={};for(const r in n)(!kh(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function $O(n,e,t){const{props:r,children:a,component:i}=n,{props:o,children:l,patchFlag:u}=e,s=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return r?D1(r,o,s):!!o;if(u&8){const c=e.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(o[f]!==r[f]&&!dd(s,f))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?D1(r,o,s):!0:!!o;return!1}function D1(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==n[i]&&!dd(t,i))return!0}return!1}function BO({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const VO=n=>n.__isSuspense;function KO(n,e){e&&e.pendingBranch?yn(n)?e.effects.push(...n):e.effects.push(n):jO(n)}function ln(n,e){if(bt){let t=bt.provides;const r=bt.parent&&bt.parent.provides;r===t&&(t=bt.provides=Object.create(r)),t[n]=e}}function on(n,e,t=!1){const r=bt||Ot;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&n in a)return a[n];if(arguments.length>1)return t&&_n(e)?e.call(r.proxy):e}}function Ze(n,e){return Lh(n,null,e)}const L1={};function Pe(n,e,t){return Lh(n,e,t)}function Lh(n,e,{immediate:t,deep:r,flush:a,onTrack:i,onTrigger:o}=Bn){const l=bt;let u,s=!1,c=!1;if(Ct(n)?(u=()=>n.value,s=Wv(n)):Co(n)?(u=()=>n,r=!0):yn(n)?(c=!0,s=n.some(m=>Co(m)||Wv(m)),u=()=>n.map(m=>{if(Ct(m))return m.value;if(Co(m))return ki(m);if(_n(m))return qa(m,l,2)})):_n(n)?e?u=()=>qa(n,l,2):u=()=>{if(!(l&&l.isUnmounted))return d&&d(),vr(n,l,3,[f])}:u=Pr,e&&r){const m=u;u=()=>ki(m())}let d,f=m=>{d=h.onStop=()=>{qa(m,l,4)}};if(Jl)return f=Pr,e?t&&vr(e,l,3,[u(),c?[]:void 0,f]):u(),Pr;let p=c?[]:L1;const g=()=>{if(!!h.active)if(e){const m=h.run();(r||s||(c?m.some((b,C)=>Ul(b,p[C])):Ul(m,p)))&&(d&&d(),vr(e,l,3,[m,p===L1?void 0:p,f]),p=m)}else h.run()};g.allowRecurse=!!e;let y;a==="sync"?y=g:a==="post"?y=()=>Bt(g,l&&l.suspense):y=()=>FO(g);const h=new Ih(u,y);return e?t?g():p=h.run():a==="post"?Bt(h.run.bind(h),l&&l.suspense):h.run(),()=>{h.stop(),l&&l.scope&&Ph(l.scope.effects,h)}}function zO(n,e,t){const r=this.proxy,a=vt(n)?n.includes(".")?dS(r,n):()=>r[n]:n.bind(r,r);let i;_n(e)?i=e:(i=e.handler,t=e);const o=bt;Eo(this);const l=Lh(a,i.bind(r),t);return o?Eo(o):Ii(),l}function dS(n,e){const t=e.split(".");return()=>{let r=n;for(let a=0;a<t.length&&r;a++)r=r[t[a]];return r}}function ki(n,e){if(!dt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ct(n))ki(n.value,e);else if(yn(n))for(let t=0;t<n.length;t++)ki(n[t],e);else if(jw(n)||bo(n))n.forEach(t=>{ki(t,e)});else if(Rw(n))for(const t in n)ki(n[t],e);return n}function fS(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ye(()=>{n.isMounted=!0}),fn(()=>{n.isUnmounting=!0}),n}const lr=[Function,Array],HO={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lr,onEnter:lr,onAfterEnter:lr,onEnterCancelled:lr,onBeforeLeave:lr,onLeave:lr,onAfterLeave:lr,onLeaveCancelled:lr,onBeforeAppear:lr,onAppear:lr,onAfterAppear:lr,onAppearCancelled:lr},setup(n,{slots:e}){const t=Jn(),r=fS();let a;return()=>{const i=e.default&&Rh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==nr){o=y;break}}const l=an(n),{mode:u}=l;if(r.isLeaving)return Of(o);const s=R1(o);if(!s)return Of(o);const c=Xl(s,l,r,t);Zl(s,c);const d=t.subTree,f=d&&R1(d);let p=!1;const{getTransitionKey:g}=s.type;if(g){const y=g();a===void 0?a=y:y!==a&&(a=y,p=!0)}if(f&&f.type!==nr&&(!yi(s,f)||p)){const y=Xl(f,l,r,t);if(Zl(f,y),u==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,t.update()},Of(o);u==="in-out"&&s.type!==nr&&(y.delayLeave=(h,m,b)=>{const C=pS(r,f);C[String(f.key)]=f,h._leaveCb=()=>{m(),h._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=b})}return o}}},vS=HO;function pS(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function Xl(n,e,t,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:s,onEnterCancelled:c,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:y,onAppear:h,onAfterAppear:m,onAppearCancelled:b}=e,C=String(n.key),x=pS(t,n),S=(P,k)=>{P&&vr(P,r,9,k)},w=(P,k)=>{const I=k[1];S(P,k),yn(P)?P.every(F=>F.length<=1)&&I():P.length<=1&&I()},_={mode:i,persisted:o,beforeEnter(P){let k=l;if(!t.isMounted)if(a)k=y||l;else return;P._leaveCb&&P._leaveCb(!0);const I=x[C];I&&yi(n,I)&&I.el._leaveCb&&I.el._leaveCb(),S(k,[P])},enter(P){let k=u,I=s,F=c;if(!t.isMounted)if(a)k=h||u,I=m||s,F=b||c;else return;let M=!1;const T=P._enterCb=N=>{M||(M=!0,N?S(F,[P]):S(I,[P]),_.delayedLeave&&_.delayedLeave(),P._enterCb=void 0)};k?w(k,[P,T]):T()},leave(P,k){const I=String(n.key);if(P._enterCb&&P._enterCb(!0),t.isUnmounting)return k();S(d,[P]);let F=!1;const M=P._leaveCb=T=>{F||(F=!0,k(),T?S(g,[P]):S(p,[P]),P._leaveCb=void 0,x[I]===n&&delete x[I])};x[I]=n,f?w(f,[P,M]):M()},clone(P){return Xl(P,e,t,r)}};return _}function Of(n){if(fd(n))return n=Pt(n),n.children=null,n}function R1(n){return fd(n)?n.children?n.children[0]:void 0:n}function Zl(n,e){n.shapeFlag&6&&n.component?Zl(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Rh(n,e=!1,t){let r=[],a=0;for(let i=0;i<n.length;i++){let o=n[i];const l=t==null?o.key:String(t)+String(o.key!=null?o.key:i);o.type===qe?(o.patchFlag&128&&a++,r=r.concat(Rh(o.children,e,l))):(e||o.type!==nr)&&r.push(l!=null?Pt(o,{key:l}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ae(n){return _n(n)?{setup:n,name:n.name}:n}const Tl=n=>!!n.type.__asyncLoader,fd=n=>n.type.__isKeepAlive;function vd(n,e){gS(n,"a",e)}function hS(n,e){gS(n,"da",e)}function gS(n,e,t=bt){const r=n.__wdc||(n.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return n()});if(pd(e,r,t),t){let a=t.parent;for(;a&&a.parent;)fd(a.parent.vnode)&&WO(r,e,t,a),a=a.parent}}function WO(n,e,t,r){const a=pd(e,n,r,!0);Dt(()=>{Ph(r[e],a)},t)}function pd(n,e,t=bt,r=!1){if(t){const a=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;zo(),Eo(t);const l=vr(e,t,n,o);return Ii(),Ho(),l});return r?a.unshift(i):a.push(i),i}}const _a=n=>(e,t=bt)=>(!Jl||n==="sp")&&pd(n,e,t),hd=_a("bm"),Ye=_a("m"),gd=_a("bu"),Nt=_a("u"),fn=_a("bum"),Dt=_a("um"),UO=_a("sp"),qO=_a("rtg"),YO=_a("rtc");function GO(n,e=bt){pd("ec",n,e)}function St(n,e){const t=Ot;if(t===null)return n;const r=bd(t)||t.proxy,a=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[o,l,u,s=Bn]=e[i];_n(o)&&(o={mounted:o,updated:o}),o.deep&&ki(l),a.push({dir:o,instance:r,value:l,oldValue:void 0,arg:u,modifiers:s})}return n}function oi(n,e,t,r){const a=n.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const l=a[o];i&&(l.oldValue=i[o].value);let u=l.dir[r];u&&(zo(),vr(u,t,8,[n.el,l,n,e]),Ho())}}const mS="components",XO="directives";function $n(n,e){return yS(mS,n,!0,e)||n}const ZO=Symbol();function QO(n){return yS(XO,n)}function yS(n,e,t=!0,r=!1){const a=Ot||bt;if(a){const i=a.type;if(n===mS){const l=TT(i,!1);if(l&&(l===e||l===Kt(e)||l===ld(Kt(e))))return i}const o=$1(a[n]||i[n],e)||$1(a.appContext[n],e);return!o&&r?i:o}}function $1(n,e){return n&&(n[e]||n[Kt(e)]||n[ld(Kt(e))])}function pc(n,e,t,r){let a;const i=t&&t[r];if(yn(n)||vt(n)){a=new Array(n.length);for(let o=0,l=n.length;o<l;o++)a[o]=e(n[o],o,void 0,i&&i[o])}else if(typeof n=="number"){a=new Array(n);for(let o=0;o<n;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(dt(n))if(n[Symbol.iterator])a=Array.from(n,(o,l)=>e(o,l,void 0,i&&i[l]));else{const o=Object.keys(n);a=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const s=o[l];a[l]=e(n[s],s,l,i&&i[l])}}else a=[];return t&&(t[r]=a),a}function md(n,e,t={},r,a){if(Ot.isCE||Ot.parent&&Tl(Ot.parent)&&Ot.parent.isCE)return v("slot",e==="default"?null:{name:e},r&&r());let i=n[e];i&&i._c&&(i._d=!1),Sn();const o=i&&bS(i(t)),l=An(qe,{key:t.key||`_${e}`},o||(r?r():[]),o&&n._===1?64:-2);return!a&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function bS(n){return n.some(e=>xt(e)?!(e.type===nr||e.type===qe&&!bS(e.children)):!0)?n:null}const Yv=n=>n?IS(n)?bd(n)||n.proxy:Yv(n.parent):null,hc=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yv(n.parent),$root:n=>Yv(n.root),$emit:n=>n.emit,$options:n=>xS(n),$forceUpdate:n=>n.f||(n.f=()=>aS(n.update)),$nextTick:n=>n.n||(n.n=dn.bind(n.proxy)),$watch:n=>zO.bind(n)}),JO={get({_:n},e){const{ctx:t,setupState:r,data:a,props:i,accessCache:o,type:l,appContext:u}=n;let s;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return a[e];case 4:return t[e];case 3:return i[e]}else{if(r!==Bn&&En(r,e))return o[e]=1,r[e];if(a!==Bn&&En(a,e))return o[e]=2,a[e];if((s=n.propsOptions[0])&&En(s,e))return o[e]=3,i[e];if(t!==Bn&&En(t,e))return o[e]=4,t[e];Gv&&(o[e]=0)}}const c=hc[e];let d,f;if(c)return e==="$attrs"&&tr(n,"get",e),c(n);if((d=l.__cssModules)&&(d=d[e]))return d;if(t!==Bn&&En(t,e))return o[e]=4,t[e];if(f=u.config.globalProperties,En(f,e))return f[e]},set({_:n},e,t){const{data:r,setupState:a,ctx:i}=n;return a!==Bn&&En(a,e)?(a[e]=t,!0):r!==Bn&&En(r,e)?(r[e]=t,!0):En(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:a,propsOptions:i}},o){let l;return!!t[o]||n!==Bn&&En(n,o)||e!==Bn&&En(e,o)||(l=i[0])&&En(l,o)||En(r,o)||En(hc,o)||En(a.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:En(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Gv=!0;function eT(n){const e=xS(n),t=n.proxy,r=n.ctx;Gv=!1,e.beforeCreate&&B1(e.beforeCreate,n,"bc");const{data:a,computed:i,methods:o,watch:l,provide:u,inject:s,created:c,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:y,deactivated:h,beforeDestroy:m,beforeUnmount:b,destroyed:C,unmounted:x,render:S,renderTracked:w,renderTriggered:_,errorCaptured:P,serverPrefetch:k,expose:I,inheritAttrs:F,components:M,directives:T,filters:N}=e;if(s&&nT(s,r,null,n.appContext.config.unwrapInjectedRef),o)for(const A in o){const E=o[A];_n(E)&&(r[A]=E.bind(t))}if(a){const A=a.call(t,t);dt(A)&&(n.data=kn(A))}if(Gv=!0,i)for(const A in i){const E=i[A],L=_n(E)?E.bind(t,t):_n(E.get)?E.get.bind(t,t):Pr,B=!_n(E)&&_n(E.set)?E.set.bind(t):Pr,K=R({get:L,set:B});Object.defineProperty(r,A,{enumerable:!0,configurable:!0,get:()=>K.value,set:H=>K.value=H})}if(l)for(const A in l)CS(l[A],r,t,A);if(u){const A=_n(u)?u.call(t):u;Reflect.ownKeys(A).forEach(E=>{ln(E,A[E])})}c&&B1(c,n,"c");function $(A,E){yn(E)?E.forEach(L=>A(L.bind(t))):E&&A(E.bind(t))}if($(hd,d),$(Ye,f),$(gd,p),$(Nt,g),$(vd,y),$(hS,h),$(GO,P),$(YO,w),$(qO,_),$(fn,b),$(Dt,x),$(UO,k),yn(I))if(I.length){const A=n.exposed||(n.exposed={});I.forEach(E=>{Object.defineProperty(A,E,{get:()=>t[E],set:L=>t[E]=L})})}else n.exposed||(n.exposed={});S&&n.render===Pr&&(n.render=S),F!=null&&(n.inheritAttrs=F),M&&(n.components=M),T&&(n.directives=T)}function nT(n,e,t=Pr,r=!1){yn(n)&&(n=Xv(n));for(const a in n){const i=n[a];let o;dt(i)?"default"in i?o=on(i.from||a,i.default,!0):o=on(i.from||a):o=on(i),Ct(o)&&r?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[a]=o}}function B1(n,e,t){vr(yn(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function CS(n,e,t,r){const a=r.includes(".")?dS(t,r):()=>t[r];if(vt(n)){const i=e[n];_n(i)&&Pe(a,i)}else if(_n(n))Pe(a,n.bind(t));else if(dt(n))if(yn(n))n.forEach(i=>CS(i,e,t,r));else{const i=_n(n.handler)?n.handler.bind(t):e[n.handler];_n(i)&&Pe(a,i,n)}}function xS(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,l=i.get(e);let u;return l?u=l:!a.length&&!t&&!r?u=e:(u={},a.length&&a.forEach(s=>gc(u,s,o,!0)),gc(u,e,o)),i.set(e,u),u}function gc(n,e,t,r=!1){const{mixins:a,extends:i}=e;i&&gc(n,i,t,!0),a&&a.forEach(o=>gc(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const l=tT[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const tT={data:V1,props:hi,emits:hi,methods:hi,computed:hi,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:hi,directives:hi,watch:aT,provide:V1,inject:rT};function V1(n,e){return e?n?function(){return wt(_n(n)?n.call(this,this):n,_n(e)?e.call(this,this):e)}:e:n}function rT(n,e){return hi(Xv(n),Xv(e))}function Xv(n){if(yn(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Et(n,e){return n?[...new Set([].concat(n,e))]:e}function hi(n,e){return n?wt(wt(Object.create(null),n),e):e}function aT(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const r in e)t[r]=Et(n[r],e[r]);return t}function iT(n,e,t,r=!1){const a={},i={};dc(i,yd,1),n.propsDefaults=Object.create(null),wS(n,e,a,i);for(const o in n.propsOptions[0])o in a||(a[o]=void 0);t?n.props=r?a:kO(a):n.type.props?n.props=a:n.props=i,n.attrs=i}function oT(n,e,t,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=n,l=an(a),[u]=n.propsOptions;let s=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(dd(n.emitsOptions,f))continue;const p=e[f];if(u)if(En(i,f))p!==i[f]&&(i[f]=p,s=!0);else{const g=Kt(f);a[g]=Zv(u,l,g,p,n,!1)}else p!==i[f]&&(i[f]=p,s=!0)}}}else{wS(n,e,a,i)&&(s=!0);let c;for(const d in l)(!e||!En(e,d)&&((c=Ko(d))===d||!En(e,c)))&&(u?t&&(t[d]!==void 0||t[c]!==void 0)&&(a[d]=Zv(u,l,d,void 0,n,!0)):delete a[d]);if(i!==l)for(const d in i)(!e||!En(e,d)&&!0)&&(delete i[d],s=!0)}s&&xa(n,"set","$attrs")}function wS(n,e,t,r){const[a,i]=n.propsOptions;let o=!1,l;if(e)for(let u in e){if(ks(u))continue;const s=e[u];let c;a&&En(a,c=Kt(u))?!i||!i.includes(c)?t[c]=s:(l||(l={}))[c]=s:dd(n.emitsOptions,u)||(!(u in r)||s!==r[u])&&(r[u]=s,o=!0)}if(i){const u=an(t),s=l||Bn;for(let c=0;c<i.length;c++){const d=i[c];t[d]=Zv(a,u,d,s[d],n,!En(s,d))}}return o}function Zv(n,e,t,r,a,i){const o=n[t];if(o!=null){const l=En(o,"default");if(l&&r===void 0){const u=o.default;if(o.type!==Function&&_n(u)){const{propsDefaults:s}=a;t in s?r=s[t]:(Eo(a),r=s[t]=u.call(null,e),Ii())}else r=u}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Ko(t))&&(r=!0))}return r}function SS(n,e,t=!1){const r=e.propsCache,a=r.get(n);if(a)return a;const i=n.props,o={},l=[];let u=!1;if(!_n(n)){const c=d=>{u=!0;const[f,p]=SS(d,e,!0);wt(o,f),p&&l.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!i&&!u)return r.set(n,yo),yo;if(yn(i))for(let c=0;c<i.length;c++){const d=Kt(i[c]);K1(d)&&(o[d]=Bn)}else if(i)for(const c in i){const d=Kt(c);if(K1(d)){const f=i[c],p=o[d]=yn(f)||_n(f)?{type:f}:f;if(p){const g=W1(Boolean,p.type),y=W1(String,p.type);p[0]=g>-1,p[1]=y<0||g<y,(g>-1||En(p,"default"))&&l.push(d)}}}const s=[o,l];return r.set(n,s),s}function K1(n){return n[0]!=="$"}function z1(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function H1(n,e){return z1(n)===z1(e)}function W1(n,e){return yn(e)?e.findIndex(t=>H1(t,n)):_n(e)&&H1(e,n)?0:-1}const _S=n=>n[0]==="_"||n==="$stable",$h=n=>yn(n)?n.map(Ur):[Ur(n)],lT=(n,e,t)=>{if(e._n)return e;const r=Tn((...a)=>$h(e(...a)),t);return r._c=!1,r},kS=(n,e,t)=>{const r=n._ctx;for(const a in n){if(_S(a))continue;const i=n[a];if(_n(i))e[a]=lT(a,i,r);else if(i!=null){const o=$h(i);e[a]=()=>o}}},PS=(n,e)=>{const t=$h(e);n.slots.default=()=>t},uT=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=an(e),dc(e,"_",t)):kS(e,n.slots={})}else n.slots={},e&&PS(n,e);dc(n.slots,yd,1)},sT=(n,e,t)=>{const{vnode:r,slots:a}=n;let i=!0,o=Bn;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:(wt(a,e),!t&&l===1&&delete a._):(i=!e.$stable,kS(e,a)),o=e}else e&&(PS(n,e),o={default:1});if(i)for(const l in a)!_S(l)&&!(l in o)&&delete a[l]};function OS(){return{app:null,config:{isNativeTag:W8,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cT=0;function dT(n,e){return function(r,a=null){_n(r)||(r=Object.assign({},r)),a!=null&&!dt(a)&&(a=null);const i=OS(),o=new Set;let l=!1;const u=i.app={_uid:cT++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:MT,get config(){return i.config},set config(s){},use(s,...c){return o.has(s)||(s&&_n(s.install)?(o.add(s),s.install(u,...c)):_n(s)&&(o.add(s),s(u,...c))),u},mixin(s){return i.mixins.includes(s)||i.mixins.push(s),u},component(s,c){return c?(i.components[s]=c,u):i.components[s]},directive(s,c){return c?(i.directives[s]=c,u):i.directives[s]},mount(s,c,d){if(!l){const f=v(r,a);return f.appContext=i,c&&e?e(f,s):n(f,s,d),l=!0,u._container=s,s.__vue_app__=u,bd(f.component)||f.component.proxy}},unmount(){l&&(n(null,u._container),delete u._container.__vue_app__)},provide(s,c){return i.provides[s]=c,u}};return u}}function Qv(n,e,t,r,a=!1){if(yn(n)){n.forEach((f,p)=>Qv(f,e&&(yn(e)?e[p]:e),t,r,a));return}if(Tl(r)&&!a)return;const i=r.shapeFlag&4?bd(r.component)||r.component.proxy:r.el,o=a?null:i,{i:l,r:u}=n,s=e&&e.r,c=l.refs===Bn?l.refs={}:l.refs,d=l.setupState;if(s!=null&&s!==u&&(vt(s)?(c[s]=null,En(d,s)&&(d[s]=null)):Ct(s)&&(s.value=null)),_n(u))qa(u,l,12,[o,c]);else{const f=vt(u),p=Ct(u);if(f||p){const g=()=>{if(n.f){const y=f?c[u]:u.value;a?yn(y)&&Ph(y,i):yn(y)?y.includes(i)||y.push(i):f?(c[u]=[i],En(d,u)&&(d[u]=c[u])):(u.value=[i],n.k&&(c[n.k]=u.value))}else f?(c[u]=o,En(d,u)&&(d[u]=o)):p&&(u.value=o,n.k&&(c[n.k]=o))};o?(g.id=-1,Bt(g,t)):g()}}}const Bt=KO;function fT(n){return vT(n)}function vT(n,e){const t=Z8();t.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:l,createComment:u,setText:s,setElementText:c,parentNode:d,nextSibling:f,setScopeId:p=Pr,cloneNode:g,insertStaticContent:y}=n,h=(V,X,ee,ue=null,ie=null,ge=null,fe=!1,re=null,le=!!X.dynamicChildren)=>{if(V===X)return;V&&!yi(V,X)&&(ue=J(V),Z(V,ie,ge,!0),V=null),X.patchFlag===-2&&(le=!1,X.dynamicChildren=null);const{type:te,ref:he,shapeFlag:ye}=X;switch(te){case Ki:m(V,X,ee,ue);break;case nr:b(V,X,ee,ue);break;case Tf:V==null&&C(X,ee,ue,fe);break;case qe:T(V,X,ee,ue,ie,ge,fe,re,le);break;default:ye&1?w(V,X,ee,ue,ie,ge,fe,re,le):ye&6?N(V,X,ee,ue,ie,ge,fe,re,le):(ye&64||ye&128)&&te.process(V,X,ee,ue,ie,ge,fe,re,le,oe)}he!=null&&ie&&Qv(he,V&&V.ref,ge,X||V,!X)},m=(V,X,ee,ue)=>{if(V==null)r(X.el=l(X.children),ee,ue);else{const ie=X.el=V.el;X.children!==V.children&&s(ie,X.children)}},b=(V,X,ee,ue)=>{V==null?r(X.el=u(X.children||""),ee,ue):X.el=V.el},C=(V,X,ee,ue)=>{[V.el,V.anchor]=y(V.children,X,ee,ue,V.el,V.anchor)},x=({el:V,anchor:X},ee,ue)=>{let ie;for(;V&&V!==X;)ie=f(V),r(V,ee,ue),V=ie;r(X,ee,ue)},S=({el:V,anchor:X})=>{let ee;for(;V&&V!==X;)ee=f(V),a(V),V=ee;a(X)},w=(V,X,ee,ue,ie,ge,fe,re,le)=>{fe=fe||X.type==="svg",V==null?_(X,ee,ue,ie,ge,fe,re,le):I(V,X,ie,ge,fe,re,le)},_=(V,X,ee,ue,ie,ge,fe,re)=>{let le,te;const{type:he,props:ye,shapeFlag:_e,transition:Me,patchFlag:De,dirs:we}=V;if(V.el&&g!==void 0&&De===-1)le=V.el=g(V.el);else{if(le=V.el=o(V.type,ge,ye&&ye.is,ye),_e&8?c(le,V.children):_e&16&&k(V.children,le,null,ue,ie,ge&&he!=="foreignObject",fe,re),we&&oi(V,null,ue,"created"),ye){for(const Se in ye)Se!=="value"&&!ks(Se)&&i(le,Se,null,ye[Se],ge,V.children,ue,ie,z);"value"in ye&&i(le,"value",null,ye.value),(te=ye.onVnodeBeforeMount)&&Br(te,ue,V)}P(le,V,V.scopeId,fe,ue)}we&&oi(V,null,ue,"beforeMount");const be=(!ie||ie&&!ie.pendingBranch)&&Me&&!Me.persisted;be&&Me.beforeEnter(le),r(le,X,ee),((te=ye&&ye.onVnodeMounted)||be||we)&&Bt(()=>{te&&Br(te,ue,V),be&&Me.enter(le),we&&oi(V,null,ue,"mounted")},ie)},P=(V,X,ee,ue,ie)=>{if(ee&&p(V,ee),ue)for(let ge=0;ge<ue.length;ge++)p(V,ue[ge]);if(ie){let ge=ie.subTree;if(X===ge){const fe=ie.vnode;P(V,fe,fe.scopeId,fe.slotScopeIds,ie.parent)}}},k=(V,X,ee,ue,ie,ge,fe,re,le=0)=>{for(let te=le;te<V.length;te++){const he=V[te]=re?La(V[te]):Ur(V[te]);h(null,he,X,ee,ue,ie,ge,fe,re)}},I=(V,X,ee,ue,ie,ge,fe)=>{const re=X.el=V.el;let{patchFlag:le,dynamicChildren:te,dirs:he}=X;le|=V.patchFlag&16;const ye=V.props||Bn,_e=X.props||Bn;let Me;ee&&li(ee,!1),(Me=_e.onVnodeBeforeUpdate)&&Br(Me,ee,X,V),he&&oi(X,V,ee,"beforeUpdate"),ee&&li(ee,!0);const De=ie&&X.type!=="foreignObject";if(te?F(V.dynamicChildren,te,re,ee,ue,De,ge):fe||L(V,X,re,null,ee,ue,De,ge,!1),le>0){if(le&16)M(re,X,ye,_e,ee,ue,ie);else if(le&2&&ye.class!==_e.class&&i(re,"class",null,_e.class,ie),le&4&&i(re,"style",ye.style,_e.style,ie),le&8){const we=X.dynamicProps;for(let be=0;be<we.length;be++){const Se=we[be],Fe=ye[Se],je=_e[Se];(je!==Fe||Se==="value")&&i(re,Se,Fe,je,ie,V.children,ee,ue,z)}}le&1&&V.children!==X.children&&c(re,X.children)}else!fe&&te==null&&M(re,X,ye,_e,ee,ue,ie);((Me=_e.onVnodeUpdated)||he)&&Bt(()=>{Me&&Br(Me,ee,X,V),he&&oi(X,V,ee,"updated")},ue)},F=(V,X,ee,ue,ie,ge,fe)=>{for(let re=0;re<X.length;re++){const le=V[re],te=X[re],he=le.el&&(le.type===qe||!yi(le,te)||le.shapeFlag&70)?d(le.el):ee;h(le,te,he,null,ue,ie,ge,fe,!0)}},M=(V,X,ee,ue,ie,ge,fe)=>{if(ee!==ue){for(const re in ue){if(ks(re))continue;const le=ue[re],te=ee[re];le!==te&&re!=="value"&&i(V,re,te,le,fe,X.children,ie,ge,z)}if(ee!==Bn)for(const re in ee)!ks(re)&&!(re in ue)&&i(V,re,ee[re],null,fe,X.children,ie,ge,z);"value"in ue&&i(V,"value",ee.value,ue.value)}},T=(V,X,ee,ue,ie,ge,fe,re,le)=>{const te=X.el=V?V.el:l(""),he=X.anchor=V?V.anchor:l("");let{patchFlag:ye,dynamicChildren:_e,slotScopeIds:Me}=X;Me&&(re=re?re.concat(Me):Me),V==null?(r(te,ee,ue),r(he,ee,ue),k(X.children,ee,he,ie,ge,fe,re,le)):ye>0&&ye&64&&_e&&V.dynamicChildren?(F(V.dynamicChildren,_e,ee,ie,ge,fe,re),(X.key!=null||ie&&X===ie.subTree)&&Bh(V,X,!0)):L(V,X,ee,he,ie,ge,fe,re,le)},N=(V,X,ee,ue,ie,ge,fe,re,le)=>{X.slotScopeIds=re,V==null?X.shapeFlag&512?ie.ctx.activate(X,ee,ue,fe,le):j(X,ee,ue,ie,ge,fe,le):$(V,X,le)},j=(V,X,ee,ue,ie,ge,fe)=>{const re=V.component=_T(V,ue,ie);if(fd(V)&&(re.ctx.renderer=oe),kT(re),re.asyncDep){if(ie&&ie.registerDep(re,A),!V.el){const le=re.subTree=v(nr);b(null,le,X,ee)}return}A(re,V,X,ee,ie,ge,fe)},$=(V,X,ee)=>{const ue=X.component=V.component;if($O(V,X,ee))if(ue.asyncDep&&!ue.asyncResolved){E(ue,X,ee);return}else ue.next=X,AO(ue.update),ue.update();else X.el=V.el,ue.vnode=X},A=(V,X,ee,ue,ie,ge,fe)=>{const re=()=>{if(V.isMounted){let{next:he,bu:ye,u:_e,parent:Me,vnode:De}=V,we=he,be;li(V,!1),he?(he.el=De.el,E(V,he,fe)):he=De,ye&&kf(ye),(be=he.props&&he.props.onVnodeBeforeUpdate)&&Br(be,Me,he,De),li(V,!0);const Se=Pf(V),Fe=V.subTree;V.subTree=Se,h(Fe,Se,d(Fe.el),J(Fe),V,ie,ge),he.el=Se.el,we===null&&BO(V,Se.el),_e&&Bt(_e,ie),(be=he.props&&he.props.onVnodeUpdated)&&Bt(()=>Br(be,Me,he,De),ie)}else{let he;const{el:ye,props:_e}=X,{bm:Me,m:De,parent:we}=V,be=Tl(X);if(li(V,!1),Me&&kf(Me),!be&&(he=_e&&_e.onVnodeBeforeMount)&&Br(he,we,X),li(V,!0),ye&&se){const Se=()=>{V.subTree=Pf(V),se(ye,V.subTree,V,ie,null)};be?X.type.__asyncLoader().then(()=>!V.isUnmounted&&Se()):Se()}else{const Se=V.subTree=Pf(V);h(null,Se,ee,ue,V,ie,ge),X.el=Se.el}if(De&&Bt(De,ie),!be&&(he=_e&&_e.onVnodeMounted)){const Se=X;Bt(()=>Br(he,we,Se),ie)}(X.shapeFlag&256||we&&Tl(we.vnode)&&we.vnode.shapeFlag&256)&&V.a&&Bt(V.a,ie),V.isMounted=!0,X=ee=ue=null}},le=V.effect=new Ih(re,()=>aS(te),V.scope),te=V.update=()=>le.run();te.id=V.uid,li(V,!0),te()},E=(V,X,ee)=>{X.component=V;const ue=V.vnode.props;V.vnode=X,V.next=null,oT(V,X.props,ue,ee),sT(V,X.children,ee),zo(),cd(void 0,V.update),Ho()},L=(V,X,ee,ue,ie,ge,fe,re,le=!1)=>{const te=V&&V.children,he=V?V.shapeFlag:0,ye=X.children,{patchFlag:_e,shapeFlag:Me}=X;if(_e>0){if(_e&128){K(te,ye,ee,ue,ie,ge,fe,re,le);return}else if(_e&256){B(te,ye,ee,ue,ie,ge,fe,re,le);return}}Me&8?(he&16&&z(te,ie,ge),ye!==te&&c(ee,ye)):he&16?Me&16?K(te,ye,ee,ue,ie,ge,fe,re,le):z(te,ie,ge,!0):(he&8&&c(ee,""),Me&16&&k(ye,ee,ue,ie,ge,fe,re,le))},B=(V,X,ee,ue,ie,ge,fe,re,le)=>{V=V||yo,X=X||yo;const te=V.length,he=X.length,ye=Math.min(te,he);let _e;for(_e=0;_e<ye;_e++){const Me=X[_e]=le?La(X[_e]):Ur(X[_e]);h(V[_e],Me,ee,null,ie,ge,fe,re,le)}te>he?z(V,ie,ge,!0,!1,ye):k(X,ee,ue,ie,ge,fe,re,le,ye)},K=(V,X,ee,ue,ie,ge,fe,re,le)=>{let te=0;const he=X.length;let ye=V.length-1,_e=he-1;for(;te<=ye&&te<=_e;){const Me=V[te],De=X[te]=le?La(X[te]):Ur(X[te]);if(yi(Me,De))h(Me,De,ee,null,ie,ge,fe,re,le);else break;te++}for(;te<=ye&&te<=_e;){const Me=V[ye],De=X[_e]=le?La(X[_e]):Ur(X[_e]);if(yi(Me,De))h(Me,De,ee,null,ie,ge,fe,re,le);else break;ye--,_e--}if(te>ye){if(te<=_e){const Me=_e+1,De=Me<he?X[Me].el:ue;for(;te<=_e;)h(null,X[te]=le?La(X[te]):Ur(X[te]),ee,De,ie,ge,fe,re,le),te++}}else if(te>_e)for(;te<=ye;)Z(V[te],ie,ge,!0),te++;else{const Me=te,De=te,we=new Map;for(te=De;te<=_e;te++){const me=X[te]=le?La(X[te]):Ur(X[te]);me.key!=null&&we.set(me.key,te)}let be,Se=0;const Fe=_e-De+1;let je=!1,ke=0;const Ce=new Array(Fe);for(te=0;te<Fe;te++)Ce[te]=0;for(te=Me;te<=ye;te++){const me=V[te];if(Se>=Fe){Z(me,ie,ge,!0);continue}let Oe;if(me.key!=null)Oe=we.get(me.key);else for(be=De;be<=_e;be++)if(Ce[be-De]===0&&yi(me,X[be])){Oe=be;break}Oe===void 0?Z(me,ie,ge,!0):(Ce[Oe-De]=te+1,Oe>=ke?ke=Oe:je=!0,h(me,X[Oe],ee,null,ie,ge,fe,re,le),Se++)}const ve=je?pT(Ce):yo;for(be=ve.length-1,te=Fe-1;te>=0;te--){const me=De+te,Oe=X[me],Ie=me+1<he?X[me+1].el:ue;Ce[te]===0?h(null,Oe,ee,Ie,ie,ge,fe,re,le):je&&(be<0||te!==ve[be]?H(Oe,ee,Ie,2):be--)}}},H=(V,X,ee,ue,ie=null)=>{const{el:ge,type:fe,transition:re,children:le,shapeFlag:te}=V;if(te&6){H(V.component.subTree,X,ee,ue);return}if(te&128){V.suspense.move(X,ee,ue);return}if(te&64){fe.move(V,X,ee,oe);return}if(fe===qe){r(ge,X,ee);for(let ye=0;ye<le.length;ye++)H(le[ye],X,ee,ue);r(V.anchor,X,ee);return}if(fe===Tf){x(V,X,ee);return}if(ue!==2&&te&1&&re)if(ue===0)re.beforeEnter(ge),r(ge,X,ee),Bt(()=>re.enter(ge),ie);else{const{leave:ye,delayLeave:_e,afterLeave:Me}=re,De=()=>r(ge,X,ee),we=()=>{ye(ge,()=>{De(),Me&&Me()})};_e?_e(ge,De,we):we()}else r(ge,X,ee)},Z=(V,X,ee,ue=!1,ie=!1)=>{const{type:ge,props:fe,ref:re,children:le,dynamicChildren:te,shapeFlag:he,patchFlag:ye,dirs:_e}=V;if(re!=null&&Qv(re,null,ee,V,!0),he&256){X.ctx.deactivate(V);return}const Me=he&1&&_e,De=!Tl(V);let we;if(De&&(we=fe&&fe.onVnodeBeforeUnmount)&&Br(we,X,V),he&6)Q(V.component,ee,ue);else{if(he&128){V.suspense.unmount(ee,ue);return}Me&&oi(V,null,X,"beforeUnmount"),he&64?V.type.remove(V,X,ee,ie,oe,ue):te&&(ge!==qe||ye>0&&ye&64)?z(te,X,ee,!1,!0):(ge===qe&&ye&384||!ie&&he&16)&&z(le,X,ee),ue&&Y(V)}(De&&(we=fe&&fe.onVnodeUnmounted)||Me)&&Bt(()=>{we&&Br(we,X,V),Me&&oi(V,null,X,"unmounted")},ee)},Y=V=>{const{type:X,el:ee,anchor:ue,transition:ie}=V;if(X===qe){G(ee,ue);return}if(X===Tf){S(V);return}const ge=()=>{a(ee),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(V.shapeFlag&1&&ie&&!ie.persisted){const{leave:fe,delayLeave:re}=ie,le=()=>fe(ee,ge);re?re(V.el,ge,le):le()}else ge()},G=(V,X)=>{let ee;for(;V!==X;)ee=f(V),a(V),V=ee;a(X)},Q=(V,X,ee)=>{const{bum:ue,scope:ie,update:ge,subTree:fe,um:re}=V;ue&&kf(ue),ie.stop(),ge&&(ge.active=!1,Z(fe,V,X,ee)),re&&Bt(re,X),Bt(()=>{V.isUnmounted=!0},X),X&&X.pendingBranch&&!X.isUnmounted&&V.asyncDep&&!V.asyncResolved&&V.suspenseId===X.pendingId&&(X.deps--,X.deps===0&&X.resolve())},z=(V,X,ee,ue=!1,ie=!1,ge=0)=>{for(let fe=ge;fe<V.length;fe++)Z(V[fe],X,ee,ue,ie)},J=V=>V.shapeFlag&6?J(V.component.subTree):V.shapeFlag&128?V.suspense.next():f(V.anchor||V.el),ne=(V,X,ee)=>{V==null?X._vnode&&Z(X._vnode,null,null,!0):h(X._vnode||null,V,X,null,null,null,ee),lS(),X._vnode=V},oe={p:h,um:Z,m:H,r:Y,mt:j,mc:k,pc:L,pbc:F,n:J,o:n};let ce,se;return e&&([ce,se]=e(oe)),{render:ne,hydrate:ce,createApp:dT(ne,ce)}}function li({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Bh(n,e,t=!1){const r=n.children,a=e.children;if(yn(r)&&yn(a))for(let i=0;i<r.length;i++){const o=r[i];let l=a[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[i]=La(a[i]),l.el=o.el),t||Bh(o,l))}}function pT(n){const e=n.slice(),t=[0];let r,a,i,o,l;const u=n.length;for(r=0;r<u;r++){const s=n[r];if(s!==0){if(a=t[t.length-1],n[a]<s){e[r]=a,t.push(r);continue}for(i=0,o=t.length-1;i<o;)l=i+o>>1,n[t[l]]<s?i=l+1:o=l;s<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}const hT=n=>n.__isTeleport,Nl=n=>n&&(n.disabled||n.disabled===""),U1=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Jv=(n,e)=>{const t=n&&n.to;return vt(t)?e?e(t):null:t},gT={__isTeleport:!0,process(n,e,t,r,a,i,o,l,u,s){const{mc:c,pc:d,pbc:f,o:{insert:p,querySelector:g,createText:y,createComment:h}}=s,m=Nl(e.props);let{shapeFlag:b,children:C,dynamicChildren:x}=e;if(n==null){const S=e.el=y(""),w=e.anchor=y("");p(S,t,r),p(w,t,r);const _=e.target=Jv(e.props,g),P=e.targetAnchor=y("");_&&(p(P,_),o=o||U1(_));const k=(I,F)=>{b&16&&c(C,I,F,a,i,o,l,u)};m?k(t,w):_&&k(_,P)}else{e.el=n.el;const S=e.anchor=n.anchor,w=e.target=n.target,_=e.targetAnchor=n.targetAnchor,P=Nl(n.props),k=P?t:w,I=P?S:_;if(o=o||U1(w),x?(f(n.dynamicChildren,x,k,a,i,o,l),Bh(n,e,!0)):u||d(n,e,k,I,a,i,o,l,!1),m)P||Uu(e,t,S,s,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const F=e.target=Jv(e.props,g);F&&Uu(e,F,null,s,0)}else P&&Uu(e,w,_,s,1)}},remove(n,e,t,r,{um:a,o:{remove:i}},o){const{shapeFlag:l,children:u,anchor:s,targetAnchor:c,target:d,props:f}=n;if(d&&i(c),(o||!Nl(f))&&(i(s),l&16))for(let p=0;p<u.length;p++){const g=u[p];a(g,e,t,!0,!!g.dynamicChildren)}},move:Uu,hydrate:mT};function Uu(n,e,t,{o:{insert:r},m:a},i=2){i===0&&r(n.targetAnchor,e,t);const{el:o,anchor:l,shapeFlag:u,children:s,props:c}=n,d=i===2;if(d&&r(o,e,t),(!d||Nl(c))&&u&16)for(let f=0;f<s.length;f++)a(s[f],e,t,2);d&&r(l,e,t)}function mT(n,e,t,r,a,i,{o:{nextSibling:o,parentNode:l,querySelector:u}},s){const c=e.target=Jv(e.props,u);if(c){const d=c._lpa||c.firstChild;if(e.shapeFlag&16)if(Nl(e.props))e.anchor=s(o(n),e,l(n),t,r,a,i),e.targetAnchor=d;else{e.anchor=o(n);let f=d;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,c._lpa=e.targetAnchor&&o(e.targetAnchor);break}s(d,e,c,t,r,a,i)}}return e.anchor&&o(e.anchor)}const Vh=gT,qe=Symbol(void 0),Ki=Symbol(void 0),nr=Symbol(void 0),Tf=Symbol(void 0),Il=[];let _r=null;function Sn(n=!1){Il.push(_r=n?null:[])}function yT(){Il.pop(),_r=Il[Il.length-1]||null}let Ql=1;function q1(n){Ql+=n}function TS(n){return n.dynamicChildren=Ql>0?_r||yo:null,yT(),Ql>0&&_r&&_r.push(n),n}function Va(n,e,t,r,a,i){return TS(Qa(n,e,t,r,a,i,!0))}function An(n,e,t,r,a){return TS(v(n,e,t,r,a,!0))}function xt(n){return n?n.__v_isVNode===!0:!1}function yi(n,e){return n.type===e.type&&n.key===e.key}const yd="__vInternal",NS=({key:n})=>n!=null?n:null,Ps=({ref:n,ref_key:e,ref_for:t})=>n!=null?vt(n)||Ct(n)||_n(n)?{i:Ot,r:n,k:e,f:!!t}:n:null;function Qa(n,e=null,t=null,r=0,a=null,i=n===qe?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&NS(e),ref:e&&Ps(e),scopeId:cS,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return l?(Kh(u,t),i&128&&n.normalize(u)):t&&(u.shapeFlag|=vt(t)?8:16),Ql>0&&!o&&_r&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&_r.push(u),u}const v=bT;function bT(n,e=null,t=null,r=0,a=null,i=!1){if((!n||n===ZO)&&(n=nr),xt(n)){const l=Pt(n,e,!0);return t&&Kh(l,t),Ql>0&&!i&&_r&&(l.shapeFlag&6?_r[_r.indexOf(n)]=l:_r.push(l)),l.patchFlag|=-2,l}if(NT(n)&&(n=n.__vccOpts),e){e=CT(e);let{class:l,style:u}=e;l&&!vt(l)&&(e.class=Wl(l)),dt(u)&&(Zw(u)&&!yn(u)&&(u=wt({},u)),e.style=rd(u))}const o=vt(n)?1:VO(n)?128:hT(n)?64:dt(n)?4:_n(n)?2:0;return Qa(n,e,t,r,a,o,i,!0)}function CT(n){return n?Zw(n)||yd in n?wt({},n):n:null}function Pt(n,e,t=!1){const{props:r,ref:a,patchFlag:i,children:o}=n,l=e?xT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&NS(l),ref:e&&e.ref?t&&a?yn(a)?a.concat(Ps(e)):[a,Ps(e)]:Ps(e):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==qe?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Pt(n.ssContent),ssFallback:n.ssFallback&&Pt(n.ssFallback),el:n.el,anchor:n.anchor}}function tt(n=" ",e=0){return v(Ki,null,n,e)}function mt(n="",e=!1){return e?(Sn(),An(nr,null,n)):v(nr,null,n)}function Ur(n){return n==null||typeof n=="boolean"?v(nr):yn(n)?v(qe,null,n.slice()):typeof n=="object"?La(n):v(Ki,null,String(n))}function La(n){return n.el===null||n.memo?n:Pt(n)}function Kh(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(yn(e))t=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),Kh(n,a()),a._c&&(a._d=!0));return}else{t=32;const a=e._;!a&&!(yd in e)?e._ctx=Ot:a===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else _n(e)?(e={default:e,_ctx:Ot},t=32):(e=String(e),r&64?(t=16,e=[tt(e)]):t=8);n.children=e,n.shapeFlag|=t}function xT(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=Wl([e.class,r.class]));else if(a==="style")e.style=rd([e.style,r.style]);else if(ad(a)){const i=e[a],o=r[a];o&&i!==o&&!(yn(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function Br(n,e,t,r=null){vr(n,e,7,[t,r])}const wT=OS();let ST=0;function _T(n,e,t){const r=n.type,a=(e?e.appContext:n.appContext)||wT,i={uid:ST++,vnode:n,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Q8(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:SS(r,a),emitsOptions:sS(r,a),emit:null,emitted:null,propsDefaults:Bn,inheritAttrs:r.inheritAttrs,ctx:Bn,data:Bn,props:Bn,attrs:Bn,slots:Bn,refs:Bn,setupState:Bn,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=DO.bind(null,i),n.ce&&n.ce(i),i}let bt=null;const Jn=()=>bt||Ot,Eo=n=>{bt=n,n.scope.on()},Ii=()=>{bt&&bt.scope.off(),bt=null};function IS(n){return n.vnode.shapeFlag&4}let Jl=!1;function kT(n,e=!1){Jl=e;const{props:t,children:r}=n.vnode,a=IS(n);iT(n,t,a,e),uT(n,r);const i=a?PT(n,e):void 0;return Jl=!1,i}function PT(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Qw(new Proxy(n.ctx,JO));const{setup:r}=t;if(r){const a=n.setupContext=r.length>1?MS(n):null;Eo(n),zo();const i=qa(r,n,0,[n.props,a]);if(Ho(),Ii(),Dw(i)){if(i.then(Ii,Ii),e)return i.then(o=>{Y1(n,o,e)}).catch(o=>{sd(o,n,0)});n.asyncDep=i}else Y1(n,i,e)}else ES(n,e)}function Y1(n,e,t){_n(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:dt(e)&&(n.setupState=tS(e)),ES(n,t)}let G1;function ES(n,e,t){const r=n.type;if(!n.render){if(!e&&G1&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=n.appContext.config,{delimiters:l,compilerOptions:u}=r,s=wt(wt({isCustomElement:i,delimiters:l},o),u);r.render=G1(a,s)}}n.render=r.render||Pr}Eo(n),zo(),eT(n),Ho(),Ii()}function OT(n){return new Proxy(n.attrs,{get(e,t){return tr(n,"get","$attrs"),e[t]}})}function MS(n){const e=r=>{n.exposed=r||{}};let t;return{get attrs(){return t||(t=OT(n))},slots:n.slots,emit:n.emit,expose:e}}function bd(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(tS(Qw(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in hc)return hc[t](n)}}))}function TT(n,e=!0){return _n(n)?n.displayName||n.name:n.name||e&&n.__name}function NT(n){return _n(n)&&"__vccOpts"in n}const R=(n,e)=>IO(n,e,Jl);function IT(){return ET().attrs}function ET(){const n=Jn();return n.setupContext||(n.setupContext=MS(n))}function ep(n,e,t){const r=arguments.length;return r===2?dt(e)&&!yn(e)?xt(e)?v(n,null,[e]):v(n,e):v(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&xt(t)&&(t=[t]),v(n,e,t))}const MT="3.2.37",AT="http://www.w3.org/2000/svg",bi=typeof document<"u"?document:null,X1=bi&&bi.createElement("template"),FT={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const a=e?bi.createElementNS(AT,n):bi.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:n=>bi.createTextNode(n),createComment:n=>bi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,r,a,i){const o=t?t.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),t),!(a===i||!(a=a.nextSibling)););else{X1.innerHTML=r?`<svg>${n}</svg>`:n;const l=X1.content;if(r){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function jT(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function DT(n,e,t){const r=n.style,a=vt(t);if(t&&!a){for(const i in t)np(r,i,t[i]);if(e&&!vt(e))for(const i in e)t[i]==null&&np(r,i,"")}else{const i=r.display;a?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=i)}}const Z1=/\s*!important$/;function np(n,e,t){if(yn(t))t.forEach(r=>np(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=LT(n,e);Z1.test(t)?n.setProperty(Ko(r),t.replace(Z1,""),"important"):n[r]=t}}const Q1=["Webkit","Moz","ms"],Nf={};function LT(n,e){const t=Nf[e];if(t)return t;let r=Kt(e);if(r!=="filter"&&r in n)return Nf[e]=r;r=ld(r);for(let a=0;a<Q1.length;a++){const i=Q1[a]+r;if(i in n)return Nf[e]=i}return e}const J1="http://www.w3.org/1999/xlink";function RT(n,e,t,r,a){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(J1,e.slice(6,e.length)):n.setAttributeNS(J1,e,t);else{const i=V8(e);t==null||i&&!Aw(t)?n.removeAttribute(e):n.setAttribute(e,i?"":t)}}function $T(n,e,t,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const u=t==null?"":t;(n.value!==u||n.tagName==="OPTION")&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const u=typeof n[e];u==="boolean"?t=Aw(t):t==null&&u==="string"?(t="",l=!0):u==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}const[AS,BT]=(()=>{let n=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let tp=0;const VT=Promise.resolve(),KT=()=>{tp=0},zT=()=>tp||(VT.then(KT),tp=AS());function HT(n,e,t,r){n.addEventListener(e,t,r)}function WT(n,e,t,r){n.removeEventListener(e,t,r)}function UT(n,e,t,r,a=null){const i=n._vei||(n._vei={}),o=i[e];if(r&&o)o.value=r;else{const[l,u]=qT(e);if(r){const s=i[e]=YT(r,a);HT(n,l,s,u)}else o&&(WT(n,l,o,u),i[e]=void 0)}}const e0=/(?:Once|Passive|Capture)$/;function qT(n){let e;if(e0.test(n)){e={};let t;for(;t=n.match(e0);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[Ko(n.slice(2)),e]}function YT(n,e){const t=r=>{const a=r.timeStamp||AS();(BT||a>=t.attached-1)&&vr(GT(r,t.value),e,5,[r])};return t.value=n,t.attached=zT(),t}function GT(n,e){if(yn(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const n0=/^on[a-z]/,XT=(n,e,t,r,a=!1,i,o,l,u)=>{e==="class"?jT(n,r,a):e==="style"?DT(n,t,r):ad(e)?kh(e)||UT(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ZT(n,e,r,a))?$T(n,e,r,i,o,l,u):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),RT(n,e,r,a))};function ZT(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&n0.test(e)&&_n(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||n0.test(e)&&vt(t)?!1:e in n}const Ea="transition",ol="animation",Lt=(n,{slots:e})=>ep(vS,jS(n),e);Lt.displayName="Transition";const FS={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},QT=Lt.props=wt({},vS.props,FS),ui=(n,e=[])=>{yn(n)?n.forEach(t=>t(...e)):n&&n(...e)},t0=n=>n?yn(n)?n.some(e=>e.length>1):n.length>1:!1;function jS(n){const e={};for(const M in n)M in FS||(e[M]=n[M]);if(n.css===!1)return e;const{name:t="v",type:r,duration:a,enterFromClass:i=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:u=i,appearActiveClass:s=o,appearToClass:c=l,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,g=JT(a),y=g&&g[0],h=g&&g[1],{onBeforeEnter:m,onEnter:b,onEnterCancelled:C,onLeave:x,onLeaveCancelled:S,onBeforeAppear:w=m,onAppear:_=b,onAppearCancelled:P=C}=e,k=(M,T,N)=>{ja(M,T?c:l),ja(M,T?s:o),N&&N()},I=(M,T)=>{M._isLeaving=!1,ja(M,d),ja(M,p),ja(M,f),T&&T()},F=M=>(T,N)=>{const j=M?_:b,$=()=>k(T,M,N);ui(j,[T,$]),r0(()=>{ja(T,M?u:i),da(T,M?c:l),t0(j)||a0(T,r,y,$)})};return wt(e,{onBeforeEnter(M){ui(m,[M]),da(M,i),da(M,o)},onBeforeAppear(M){ui(w,[M]),da(M,u),da(M,s)},onEnter:F(!1),onAppear:F(!0),onLeave(M,T){M._isLeaving=!0;const N=()=>I(M,T);da(M,d),LS(),da(M,f),r0(()=>{!M._isLeaving||(ja(M,d),da(M,p),t0(x)||a0(M,r,h,N))}),ui(x,[M,N])},onEnterCancelled(M){k(M,!1),ui(C,[M])},onAppearCancelled(M){k(M,!0),ui(P,[M])},onLeaveCancelled(M){I(M),ui(S,[M])}})}function JT(n){if(n==null)return null;if(dt(n))return[If(n.enter),If(n.leave)];{const e=If(n);return[e,e]}}function If(n){return $w(n)}function da(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function ja(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function r0(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let e5=0;function a0(n,e,t,r){const a=n._endId=++e5,i=()=>{a===n._endId&&r()};if(t)return setTimeout(i,t);const{type:o,timeout:l,propCount:u}=DS(n,e);if(!o)return r();const s=o+"end";let c=0;const d=()=>{n.removeEventListener(s,f),i()},f=p=>{p.target===n&&++c>=u&&d()};setTimeout(()=>{c<u&&d()},l+1),n.addEventListener(s,f)}function DS(n,e){const t=window.getComputedStyle(n),r=g=>(t[g]||"").split(", "),a=r(Ea+"Delay"),i=r(Ea+"Duration"),o=i0(a,i),l=r(ol+"Delay"),u=r(ol+"Duration"),s=i0(l,u);let c=null,d=0,f=0;e===Ea?o>0&&(c=Ea,d=o,f=i.length):e===ol?s>0&&(c=ol,d=s,f=u.length):(d=Math.max(o,s),c=d>0?o>s?Ea:ol:null,f=c?c===Ea?i.length:u.length:0);const p=c===Ea&&/\b(transform|all)(,|$)/.test(t[Ea+"Property"]);return{type:c,timeout:d,propCount:f,hasTransform:p}}function i0(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>o0(t)+o0(n[r])))}function o0(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function LS(){return document.body.offsetHeight}const RS=new WeakMap,$S=new WeakMap,n5={name:"TransitionGroup",props:wt({},QT,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Jn(),r=fS();let a,i;return Nt(()=>{if(!a.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!i5(a[0].el,t.vnode.el,o))return;a.forEach(t5),a.forEach(r5);const l=a.filter(a5);LS(),l.forEach(u=>{const s=u.el,c=s.style;da(s,o),c.transform=c.webkitTransform=c.transitionDuration="";const d=s._moveCb=f=>{f&&f.target!==s||(!f||/transform$/.test(f.propertyName))&&(s.removeEventListener("transitionend",d),s._moveCb=null,ja(s,o))};s.addEventListener("transitionend",d)})}),()=>{const o=an(n),l=jS(o);let u=o.tag||qe;a=i,i=e.default?Rh(e.default()):[];for(let s=0;s<i.length;s++){const c=i[s];c.key!=null&&Zl(c,Xl(c,l,r,t))}if(a)for(let s=0;s<a.length;s++){const c=a[s];Zl(c,Xl(c,l,r,t)),RS.set(c,c.el.getBoundingClientRect())}return v(u,null,i)}}},zh=n5;function t5(n){const e=n.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function r5(n){$S.set(n,n.el.getBoundingClientRect())}function a5(n){const e=RS.get(n),t=$S.get(n),r=e.left-t.left,a=e.top-t.top;if(r||a){const i=n.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${a}px)`,i.transitionDuration="0s",n}}function i5(n,e,t){const r=n.cloneNode();n._vtc&&n._vtc.forEach(o=>{o.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),t.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const a=e.nodeType===1?e:e.parentNode;a.appendChild(r);const{hasTransform:i}=DS(r);return a.removeChild(r),i}const o5=["ctrl","shift","alt","meta"],l5={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>o5.some(t=>n[`${t}Key`]&&!e.includes(t))},l0=(n,e)=>(t,...r)=>{for(let a=0;a<e.length;a++){const i=l5[e[a]];if(i&&i(t,e))return}return n(t,...r)},Ar={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ll(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),ll(n,!0),r.enter(n)):r.leave(n,()=>{ll(n,!1)}):ll(n,e))},beforeUnmount(n,{value:e}){ll(n,e)}};function ll(n,e){n.style.display=e?n._vod:"none"}const u5=wt({patchProp:XT},FT);let u0;function BS(){return u0||(u0=fT(u5))}const mc=(...n)=>{BS().render(...n)},VS=(...n)=>{const e=BS().createApp(...n),{mount:t}=e;return e.mount=r=>{const a=s5(r);if(!a)return;const i=e._component;!_n(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=t(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function s5(n){return vt(n)?document.querySelector(n):n}const c5=[`/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] \u4E24\u6570\u4E4B\u548C
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sorted = []
    nums.map((item, index) => {
        sorted.push([item, index])
    })
    sorted.sort((a, b) => {return a[0] - b[0]})
    let i = 0
    let j = sorted.length - 1
    while(true) {
        if (sorted[i][0] + sorted[j][0] === target) {
            return [sorted[i][1], sorted[j][1]]
        } else if (sorted[i][0] + sorted[j][0] > target) {
            j--
        } else {
            i++
        }
    }
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] \u4E24\u6570\u4E4B\u548C
#
# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        for i, num in enumerate(nums):
            if hash_map.get(target - num) is not None:
                return [i, hash_map.get(target - num)]
            hash_map[num] = i
# @lc code=end`,`#
# @lc app=leetcode.cn id=10 lang=python3
#
# [10] \u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D
#
# @lc code=start
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        s = ' ' + s
        p = ' ' + p
        matches = [[False] for _ in range(len(s))]
        matches[0][0] = True
        for i in range(len(s)):
            for j in range(1, len(p)):
                if s[i] == p[j] or (p[j] == '.' and s[i] != ' '):
                    matches[i].append(matches[i - 1][j - 1])
                elif p[j] == '*':
                    if matches[i][j - 2]:
                        matches[i].append(True)
                    elif i != 0 and matches[i - 1][j] and (p[j - 1] == s[i] or p[j - 1] == '.'):
                        matches[i].append(True)
                    else:
                        matches[i].append(False)
                else:
                    matches[i].append(False)
        return matches[-1][-1]
# @lc code=end`,`#
# @lc app=leetcode.cn id=100 lang=python3
#
# [100] \u76F8\u540C\u7684\u6811
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        def same(pp, qq):
            if pp == None and qq == None:
                return True
            elif pp != None and qq != None:
                if pp.val != qq.val:
                    return False
                return same(pp.right, qq.right) and same(pp.left, qq.left)
            else:
                return False
        return same(p, q)
# @lc code=end`,`#
# @lc app=leetcode.cn id=101 lang=python3
#
# [101] \u5BF9\u79F0\u4E8C\u53C9\u6811
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def same(p, q):
            if p is None and q is None:
                return True
            elif p is not None and q is not None:
                if p.val != q.val:
                    return False
                return same(p.left, q.right) and same(p.right, q.left)
            else:
                return False
        return same(root.left, root.right)
# @lc code=end`,`import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=102 lang=java
 *
 * [102] \u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386
 */
import java.util.List;
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Tuple{
    public TreeNode treeNode;
    public int i;
    Tuple(TreeNode treeNode, int i) {
        this.treeNode = treeNode;
        this.i = i;
    }
    public int getI() {
        return i;
    }
    public TreeNode getTreeNode() {
        return treeNode;
    }
}
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) {
            return result;
        }
        Deque<Tuple> deque = new ArrayDeque<>();
        deque.add(new Tuple(root, 1));
        while(!deque.isEmpty()) {
            Tuple tuple = deque.pop();
            TreeNode treeNode = tuple.getTreeNode();
            if (tuple.getI() > result.size()) {
                result.add(new ArrayList<Integer>());
            }
            List r =  result.get(tuple.getI() - 1);
            r.add(treeNode.val);
            if (treeNode.left != null) {
                deque.add(new Tuple(treeNode.left, tuple.getI() + 1));
            }
            if (treeNode.right != null) {
                deque.add(new Tuple(treeNode.right, tuple.getI() + 1));
            }
        }
        return result;
    }
}
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
import javax.swing.tree.TreeNode;
/*
 * @lc app=leetcode.cn id=103 lang=java
 *
 * [103] \u4E8C\u53C9\u6811\u7684\u952F\u9F7F\u5F62\u5C42\u5E8F\u904D\u5386
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) {
            return result;
        }
        boolean is_s = false;
        Deque<TreeNode> d =  new ArrayDeque<>();
        d.push(root);
        while (!d.isEmpty()) {
            Deque<TreeNode> new_d = new ArrayDeque<>();
            List<Integer> r = new ArrayList<>();
            while (!d.isEmpty()) {
                TreeNode treeNode = d.pop();
                if (!is_s) {
                    if (treeNode.left != null) {
                        new_d.push(treeNode.left);
                    }
                    if (treeNode.right != null) {
                        new_d.push(treeNode.right);
                    }
                } else {
                    if (treeNode.right != null) {
                        new_d.push(treeNode.right);
                    }
                    if (treeNode.left != null) {
                        new_d.push(treeNode.left);
                    }
                }
                r.add(treeNode.val);
            } 
            is_s = !is_s;
            result.add(r);
            if (new_d.isEmpty())
                break;
            d = new_d;
        }
        return result;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=104 lang=python3
#
# [104] \u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        max_depth = 0
        def md(r, k):
            nonlocal max_depth
            if r.left == None and r.right == None:
                if k > max_depth:
                    max_depth = k
            if r.left != None:
                md(r.left, k + 1)
            if r.right != None:
                md(r.right, k + 1)
        md(root, 1)
        return max_depth
# @lc code=end`,`#
# @lc app=leetcode.cn id=1044 lang=python3
#
# [1044] \u6700\u957F\u91CD\u590D\u5B50\u4E32
#
# @lc code=start
class Solution:
    def longestDupSubstring(self, s: str) -> str:
# @lc code=end`,`import java.util.Arrays;
/*
 * @lc app=leetcode.cn id=105 lang=java
 *
 * [105] \u4ECE\u524D\u5E8F\u4E0E\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder.length == 0) {
            return null;
        }
        TreeNode root = new TreeNode(preorder[0]);
        int i = 0;
        while(preorder[0] != inorder[i]) i++;
        int[] left = Arrays.copyOfRange(inorder, 0, i);
        int[] lp = Arrays.copyOfRange(preorder, 1, left.length + 1);
        root.left = buildTree(lp, left);
        int[] right = Arrays.copyOfRange(inorder, i + 1, inorder.length);
        int[] rp = Arrays.copyOfRange(preorder, left.length + 1, preorder.length);
        root.right = buildTree(rp, right);
        return root;
    }
}
// @lc code=end`,`import java.util.Arrays;
/*
 * @lc app=leetcode.cn id=106 lang=java
 *
 * [106] \u4ECE\u4E2D\u5E8F\u4E0E\u540E\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        if (inorder.length == 0) return null;
        TreeNode root = new TreeNode(postorder[postorder.length - 1]);
        int i = 0;
        while (inorder[i] != postorder[postorder.length - 1]) i++;
        int[] left = Arrays.copyOfRange(inorder, 0, i);
        int[] pl = Arrays.copyOfRange(postorder, 0, i);
        root.left = buildTree(left, pl);
        int[] right = Arrays.copyOfRange(inorder, i + 1, inorder.length);
        int[] pr = Arrays.copyOfRange(postorder, i, postorder.length - 1);
        root.right = buildTree(right, pr);
        return root;
    }
}
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;
/*
 * @lc app=leetcode.cn id=107 lang=java
 *
 * [107] \u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386 II
 */
import javax.swing.tree.TreeNode;
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> result = new LinkedList<>();
        if (root == null) {
            return result;
        }
        Deque<TreeNode> stack = new ArrayDeque<>();
        stack.add(root);
        while (true) {
            List<Integer> r = new LinkedList<>();
            Deque<TreeNode> new_stack = new ArrayDeque<>();
            while(!stack.isEmpty()) {
                TreeNode treeNode = stack.pop();
                if (treeNode.left != null) {
                    new_stack.add(treeNode.left);
                }
                if (treeNode.right != null) {
                    new_stack.add(treeNode.right);
                }
                r.add(treeNode.val);
            }
            result.add(0, r);
            stack = new_stack;
            if (stack.isEmpty()) {
                break;
            }
        }
        return result;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=108 lang=python3
#
# [108] \u5C06\u6709\u5E8F\u6570\u7EC4\u8F6C\u6362\u4E3A\u4E8C\u53C9\u641C\u7D22\u6811
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        nl = len(nums) // 2
        root = TreeNode(nums[nl])
        def sat(r, left, right):
            if len(left) != 0:
                ll = len(left) // 2
                r.left = TreeNode(left[ll])
                sat(r.left, left[:ll], left[ll + 1:])
            if len(right) != 0:
                rl = len(right) // 2
                r.right = TreeNode(right[rl])
                sat(r.right, right[:rl], right[rl + 1:])
        sat(root, nums[:nl], nums[nl+1:])
        return root
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=109 lang=java
 *
 * [109] \u6709\u5E8F\u94FE\u8868\u8F6C\u6362\u4E8C\u53C9\u641C\u7D22\u6811
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode sLTBST(ListNode head, int num) {
        System.out.println(num);
        if (num == 0) {
            return null;
        }
        int m = num / 2;
        if (num % 2 == 1) {
            m ++;
        }
        int i = m;
        ListNode hc = head;
        while (--i > 0) hc = hc.next;
        TreeNode root = new TreeNode(hc.val);
        root.left = sLTBST(head, m - 1);
        root.right = sLTBST(hc.next, num - m);
        return root;
    }
    public TreeNode sortedListToBST(ListNode head) {
        if (head == null) {
            return null;
        }
        int i = 0;
        ListNode hc = head;
        while (hc != null) {
            i++;
            hc = hc.next;
        }
        return sLTBST(head, i);
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=11 lang=python3
#
# [11] \u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668
#
# @lc code=start
class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_a = 0
        for i in range(len(height) - 1, 0, -1):
            if height[i] * i < max_a:
                continue
            for j in range(i):
                if height[i] <= height[j]:
                    a = (i - j) * height[i]
                    if a > max_a:
                        max_a = a
                    break
                else:
                    a = (i - j) * height[j]
                    if a > max_a:
                        max_a = a
                if (i - j) * height[i] < max_a:
                    break
        return max_a
# @lc code=end`,`#
# @lc app=leetcode.cn id=110 lang=python3
#
# [110] \u5E73\u8861\u4E8C\u53C9\u6811
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        if root is None:
            return True
        is_ok = True
        def balanced(r, k):
            nonlocal is_ok
            if r is None:
                return k
            k1 = balanced(r.left, k + 1)
            k2 = balanced(r.right, k + 1)
            if k1 - k2 > 1 or k2 - k1 > 1:
                is_ok = False
            return max([k1, k2])
        balanced(root, 0)
        return is_ok
# @lc code=end`,`#
# @lc app=leetcode.cn id=111 lang=python3
#
# [111] \u4E8C\u53C9\u6811\u7684\u6700\u5C0F\u6DF1\u5EA6
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0
        all_depth = []
        def min_depth(r, k):
            if r.left == None and r.right == None:
                all_depth.append(k)
                return
            if r.left != None:
                min_depth(r.left, k + 1)
            if r.right != None:
                min_depth(r.right, k + 1)
        min_depth(root, 1)
        return min(all_depth)
# @lc code=end`,`#
# @lc app=leetcode.cn id=112 lang=python3
#
# [112] \u8DEF\u5F84\u603B\u548C
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if root is None:
            return False
        def hps(r, sum):
            if r.left is None and r.right is None:
                return sum == targetSum
            left = False
            if r.left is not None:
                left = hps(r.left, sum + r.left.val)
            right = False
            if r.right is not None:
                right = hps(r.right, sum + r.right.val)
            return left or right
        return hps(root, root.val)
# @lc code=end`,`import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
/*
 * @lc app=leetcode.cn id=113 lang=java
 *
 * [113] \u8DEF\u5F84\u603B\u548C II
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private static List<List<Integer>> results = new ArrayList<>();
    public void ps(TreeNode r, List<Integer> rs, int targetSum) {
        rs.add(r.val);
        targetSum -= r.val;
        if (r.left == null && r.right == null) {
            if (targetSum == 0) {
                List<Integer> ar = new ArrayList<Integer>();
                for (Integer integer : rs) {
                    ar.add(integer);
                }
                results.add(ar);
            }
        }
        if (r.left != null) {
            ps(r.left, rs, targetSum);
        }
        if (r.right != null) {
            ps(r.right, rs, targetSum);
        }
        rs.remove(rs.size() - 1);
    }
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        results.clear();
        if (root == null) {
            return results;
        }
        ps(root, new ArrayList<Integer>(), targetSum);
        return results;
    }
}
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=114 lang=java
 *
 * [114] \u4E8C\u53C9\u6811\u5C55\u5F00\u4E3A\u94FE\u8868
 */
import javax.swing.tree.TreeNode;
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public void flatten(TreeNode root) {
        if (root == null) {
            return;
        }
        Deque<TreeNode> stack = new ArrayDeque<>();
        stack.push(root);
        TreeNode f = null;
        while(!stack.isEmpty()) {
            TreeNode treeNode = stack.pop();
            if (treeNode.right != null) {
                stack.push(treeNode.right);
                treeNode.right = null;
            }
            if (treeNode.left != null) {
                stack.push(treeNode.left);
                treeNode.left = null;
            }
            if (f == null) {
                f = treeNode;
            } else {
                f.right = treeNode;
                f = treeNode;
            }
        }
    }
}
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=116 lang=java
 *
 * [116] \u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488
 */
// @lc code=start
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;
    public Node() {}
    public Node(int _val) {
        val = _val;
    }
    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/
class Solution {
    public Node connect(Node root) {
        if (root == null) {
            return null;
        }
        Deque<Node> nodes = new ArrayDeque<>();
        nodes.add(root);
        while (true) {
            Deque<Node> new_nodes = new ArrayDeque<>();
            Node m = null;
            while (!nodes.isEmpty()) {
                Node node = nodes.pop();
                node.next = m;
                m = node;
                if (node.right != null) {
                    new_nodes.add(node.right);
                }
                if (node.left != null) {
                    new_nodes.add(node.left);
                }
            }
            nodes = new_nodes;
            if (nodes.isEmpty()) {
                break;
            }
        }
        return root;
    }
}
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=117 lang=java
 *
 * [117] \u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488 II
 */
// @lc code=start
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;
    public Node() {}
    public Node(int _val) {
        val = _val;
    }
    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/
class Solution {
    public Node connect(Node root) {
        if (root == null) {
            return null;
        }
        Deque<Node> nodes = new ArrayDeque<>();
        nodes.add(root);
        while (true) {
            Deque<Node> new_nodes = new ArrayDeque<>();
            Node m = null;
            while (!nodes.isEmpty()) {
                Node node = nodes.pop();
                node.next = m;
                m = node;
                if (node.right != null) {
                    new_nodes.add(node.right);
                }
                if (node.left != null) {
                    new_nodes.add(node.left);
                }
            }
            nodes = new_nodes;
            if (nodes.isEmpty()) {
                break;
            }
        }
        return root;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=118 lang=python3
#
# [118] \u6768\u8F89\u4E09\u89D2
#
# @lc code=start
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = []
        for i in range(numRows):
            rm = []
            for j in range(i + 1):
                if j == 0 or j == i:
                    rm.append(1)
                else:
                    rm.append(result[i - 1][j - 1] + result[i - 1][j])
            result.append(rm)
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=119 lang=python3
#
# [119] \u6768\u8F89\u4E09\u89D2 II
#
# @lc code=start
class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        result = None
        for i in range(rowIndex + 1):
            rm = []
            for j in range(i + 1):
                if j == 0 or j == i:
                    rm.append(1)
                else:
                    rm.append(result[j - 1] + result[j])
            result = rm
        return result     
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=1195 lang=java
 *
 * [1195] \u4EA4\u66FF\u6253\u5370\u5B57\u7B26\u4E32
 */
// @lc code=start
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;
class FizzBuzz {
    private int n;
    private volatile int index;
    public FizzBuzz(int n) {
        this.n = n;
        this.index = 1;
    }
    private final ReentrantLock rLock = new ReentrantLock();
    private final Condition  condition = rLock.newCondition();
    // printFizz.run() outputs "fizz".
    public void fizz(Runnable printFizz) throws InterruptedException {
        rLock.lock();
        while (this.index <= this.n) {
            if (this.index % 3 == 0 && this.index % 5 != 0) {
                printFizz.run();
                this.index ++;
                condition.signalAll();
            } else {
                condition.await();
            }
        }
        rLock.unlock();
    }
    // printBuzz.run() outputs "buzz".
    public void buzz(Runnable printBuzz) throws InterruptedException {
        rLock.lock();
        while (this.index <= this.n) {
            if (this.index % 3 != 0 && this.index % 5 == 0) {
                printBuzz.run();
                this.index ++;
                condition.signalAll();
            } else {
                condition.await();
            }
        }
        rLock.unlock();
    }
    // printFizzBuzz.run() outputs "fizzbuzz".
    public void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
        rLock.lock();
        while (this.index <= this.n) {
            if (this.index % 3 == 0 && this.index % 5 == 0) {
                printFizzBuzz.run();
                this.index ++;
                condition.signalAll();
            } else {
                condition.await();
            }
        }
        rLock.unlock();
    }
    // printNumber.accept(x) outputs "x", where x is an integer.
    public void number(IntConsumer printNumber) throws InterruptedException {
        rLock.lock();
        while (this.index <= this.n) {
            if (this.index % 3 != 0 && this.index % 5 != 0) {
                printNumber.accept(this.index);
                this.index ++;
                condition.signalAll();
            } else {
                condition.await();
            }
        }
        rLock.unlock();
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=12 lang=python3
#
# [12] \u6574\u6570\u8F6C\u7F57\u9A6C\u6570\u5B57
#
# @lc code=start
class Solution:
    def get_roman(self, n, s, m, e):
        end_str = ''
        if n == 9:
            end_str += (s + e)
        else:
            if n >= 5:
                n = n - 5
                end_str += m
            else:
                if n == 4:
                    end_str += (s + m)
                    n = 0
            for _ in range(n):
                end_str += s 
        return end_str
    def intToRoman(self, num: int) -> str:
        end_str = ''
        m = num // 1000
        for _ in range(m):
            end_str += 'M'
        num = num % 1000
        c = num // 100
        end_str += self.get_roman(c, 'C', 'D', 'M')
        num = num % 100
        x = num // 10
        end_str += self.get_roman(x, 'X', 'L', 'C')
        i = num % 10
        end_str += self.get_roman(i, 'I', 'V', 'X')
        return end_str
# @lc code=end`,`import java.util.Arrays;
import java.util.Collections;
/*
 * @lc app=leetcode.cn id=120 lang=java
 *
 * [120] \u4E09\u89D2\u5F62\u6700\u5C0F\u8DEF\u5F84\u548C
 */
// @lc code=start
class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        int m = 0;
        for (int i = 1; i < triangle.size(); i++) {
            for (int j = 0; j < triangle.get(i).size(); j++) {
                int ss = triangle.get(i).get(j);
                if (j == 0) {
                    m = triangle.get(i - 1).get(j);
                } else if (j == i) {
                    m = triangle.get(i - 1).get(j - 1);
                } else {
                    m = Integer.min(triangle.get(i - 1).get(j), triangle.get(i - 1).get(j - 1));
                }
                triangle.get(i).set(j, ss + m);
            }
        }
        return Collections.min(triangle.get(triangle.size() - 1));
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=121 lang=python3
#
# [121] \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A
#
# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        price = 0
        s = prices[0]
        for p in prices:
            if p - s < 0:
                s = p
            elif p - s > price:
                price = p - s
        return price
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=122 lang=java
 *
 * [122] \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A II
 */
// @lc code=start
class Solution {
    public int maxProfit(int[] prices) {
        int sum = 0;
        int buy = -1;
        for (int i = 0; i < prices.length; i++) {
            if (i < prices.length - 1) {
                if (prices[i] <= prices[i + 1]) {
                    if (buy == -1) {
                        buy = i;
                    }
                } else {
                    if (buy != -1) {
                        sum += (prices[i] - prices[buy]);
                        buy = -1;
                    }
                }
            } else {
                if (buy != -1) {
                    sum += (prices[i] - prices[buy]);
                }
            }
        }
        return sum;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=125 lang=python3
#
# [125] \u9A8C\u8BC1\u56DE\u6587\u4E32
#
# @lc code=start
class Solution:
    def is_char(self, c):
        c = c.lower()
        return not (ord(c) >= ord('0') and ord(c) <= ord('9')) and not (ord(c) >= ord('a') and ord(c) <= ord('z'))
    def isPalindrome(self, s: str) -> bool:
        i = 0
        j = len(s) - 1
        while i < j:
            while i < j and self.is_char(s[i]): 
                i += 1
                continue
            start = s[i].lower()
            while i < j and self.is_char(s[j]): 
                j -= 1
                continue
            end = s[j].lower()
            if start != end:
                return False
            i += 1
            j -= 1
        return True
# @lc code=end`,`import java.util.HashSet;
import java.util.Set;
/*
 * @lc app=leetcode.cn id=128 lang=java
 *
 * [128] \u6700\u957F\u8FDE\u7EED\u5E8F\u5217
 */
// @lc code=start
class Solution {
    public int longestConsecutive(int[] nums) {
        int sum = 0;
        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];
            if (!set.contains(n)) {
                int s = 1;
                set.add(n);
                for (int j = 1;; j++) {
                    if (set.contains(n + j)) {
                        s += 1;
                    } else {
                        break;
                    }
                }
                for (int j = 1;; j++) {
                    if (set.contains(n - j)) {
                        s += 1;
                    } else {
                        break;
                    }
                }
                if (s > sum) {
                    sum = s;
                }
            }
        }
        return sum;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=129 lang=java
 *
 * [129] \u6C42\u6839\u8282\u70B9\u5230\u53F6\u8282\u70B9\u6570\u5B57\u4E4B\u548C
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    static int sum = 0;
    public void sn(TreeNode r, int s) {
        s = s * 10 + r.val;
        if (r.left == null && r.right == null) {
            sum += s;
            return;
        }
        if (r.left != null) {
            sn(r.left, s);
        }
        if (r.right != null) {
            sn(r.right, s);
        }
    }
    public int sumNumbers(TreeNode root) {
        sum = 0;
        if (root != null) {
            sn(root, 0);
        }
        return sum;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=13 lang=python3
#
# [13] \u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570
#
# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        char_num = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        sum_num = 0
        max_len = len(s)
        sign = False
        for i in range(len(s)):
            if sign:
                sign = False
                continue
            if i + 1 < max_len:
                n1 = char_num[s[i]]
                n2 = char_num[s[i + 1]]
                if n2 / n1 == 10 or n2 / n1 == 5:
                    sum_num = sum_num + char_num[s[i + 1]] - char_num[s[i]]
                    sign = True
                else:
                    sum_num += char_num[s[i]]
            else:
                sum_num += char_num[s[i]]
        return sum_num
# @lc code=end`,`import java.util.HashSet;
import java.util.Set;
/*
 * @lc app=leetcode.cn id=130 lang=java
 *
 * [130] \u88AB\u56F4\u7ED5\u7684\u533A\u57DF
 */
// @lc code=start
class Solution {
    Set<Integer> all_set = new HashSet<>(); 
    public boolean solve(Set<Integer> set, int i, int j, char[][] board) {
        if (i < 0 || i >= board.length) {
            return false;
        }
        if (j < 0 || j >= board[i].length) {
            return false;
        }
        if (board[i][j] == 'X') return true;
        int s = i * 300 + j;
        if (set.contains(s)) {
            return true;
        }
        all_set.add(s);
        set.add(s);
        boolean b1 = solve(set, i - 1, j, board);
        boolean b2 = solve(set, i + 1, j, board);
        boolean b3 = solve(set, i, j - 1, board);
        boolean b4 = solve(set, i, j + 1, board);
        return b1 && b2 && b3 && b4;
    }
    public void solve(char[][] board) {
        all_set.clear();
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                int s = i * 300 + j;
                if (!all_set.contains(s)) {
                    if (board[i][j] == 'O') {
                        Set<Integer> set = new HashSet<>();
                        boolean b = solve(set, i, j, board);
                        if (b) {
                            for(int ij : set) {
                                board[ij / 300][ij % 300] = 'X';
                            }
                        }
                    }
                    all_set.add(s);
                }
            }
        }
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] \u5206\u5272\u56DE\u6587\u4E32
 */
// @lc code=start
var pn = function(result, r, ss, s, i) {
    if (i >= ss.length) {
        if (s === "") {
            result.push(Object.values(r))
        }
        return
    }
    s += ss[i]
    var is_h = true
    for(var j = 0; j < parseInt(s.length / 2); j++) {
        if (s[j] != s[s.length - 1 - j]) {
            is_h = false
            break
        }
    }
    if (is_h) {
        r.push(s)
        pn(result, r, ss, "", i + 1)
        r.pop()
    }
    pn(result, r, ss, s, i + 1)
}
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    result = []
    pn(result, [], s, "", 0)
    return result
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=132 lang=java
 *
 * [132] \u5206\u5272\u56DE\u6587\u4E32 II
 */
// @lc code=start
class Solution {
    public int minCut(String s) {
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=133 lang=python3
#
# [133] \u514B\u9686\u56FE
#
# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""
class Solution:
    all_node = {}
    def cg(self, node):
        if node.val in self.all_node:
            return self.all_node[node.val]
        root = Node(node.val)
        self.all_node[root.val] = root
        for n in node.neighbors:
            root.neighbors.append(self.cg(n))
        return root
    def cloneGraph(self, node: 'Node') -> 'Node':
        self.all_node.clear()
        if node is None:
            return None
        return self.cg(node) 
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] \u52A0\u6CB9\u7AD9
 */
// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let len = gas.length
    let i = 0 
    while(i < len) {
        if (gas[i] >= cost[i]) {
            let x = gas[i]
            let k = i
            for (let j = 0; j < len; j++) {
                let c = cost[(i + j) % len]
                if (x < c) {
                    i = i + j
                    break
                }  
                x = x + gas[(i + j + 1) % len] - c
            }
            if (i == k) {
                return i
            }
        }
        i += 1
    }
    return -1
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=135 lang=java
 *
 * [135] \u5206\u53D1\u7CD6\u679C
 */
// @lc code=start
class Solution {
    public int candy(int[] ratings) {
        int min = 0;
        for (int i = 1; i < ratings.length; i++) {
            if (ratings[i] < ratings[min]) {
                min = i;
            }
        }
        int[] rs = new int[ratings.length];
        rs[min] = 1;
        for (int i = min - 1; i >= 0 ; i--) {
            if (ratings[i] > ratings[i + 1]) {
                rs[i] =rs[i + 1] + 1;
            } else if (rs[i + 1] > 1 || ratings[i + 1] == ratings[i]){
                rs[i] = 1;
            } else {
                for (int j = 1;; j++) {
                    rs[i + j] += 1;
                    if (rs[i + j] < rs[i + j + 1] || ratings[i + j] >= ratings[i + j + 1]) {
                        break;
                    }   
                }
                rs[i] = 1;
            }
        }
        for (int i = min + 1; i < ratings.length; i++) {
            if (ratings[i] > ratings[i - 1]) {
                rs[i] = rs[i - 1] + 1;
            } else if (rs[i - 1] > 1 || ratings[i - 1] == ratings[i]) {
                rs[i] = 1;
            } else {
                for (int j = 1;; j++) {
                    rs[i - j] += 1;
                    if (rs[i - j - 1] > rs[i - j] || ratings[i - j - 1] <= ratings[i - j]) {
                        break;
                    }
                }
                rs[i] = 1;
            }
        }
        int sum = 0;
        for (int r: rs) {
            sum += r;
        }
        return sum;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=136 lang=python3
#
# [136] \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57
#
# @lc code=start
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        n = nums[0]
        for i in range(1, len(nums)):
            n ^= nums[i]
        return n
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57 II
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let r = 0
    for (let i = 0; i < 32; i++) { 
        let k = 0
        for (let j = 0; j < nums.length; j++) {
            k += (nums[j] >> i) & 1
        }
        r += (k % 3) << i
    }
    return r
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=138 lang=python3
#
# [138] \u590D\u5236\u5E26\u968F\u673A\u6307\u9488\u7684\u94FE\u8868
#
# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""
from lib2to3.pytree import Node
class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        hc = head
        while hc != None:
            n = Node(hc.val)
            n.next = hc.next
            hc.next = n
            hc = hc.next.next
        hc = head
        while hc != None:
            if hc.random != None:
                hc.next.random = hc.random.next
            hc = hc.next.next
        end = None
        start = None
        hc = head 
        while hc != None:
            if start == None:
                start = hc.next
            else:
                end.next = hc.next
            end = hc.next
            hc = hc.next.next
        return start
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] \u5355\u8BCD\u62C6\u5206
 */
// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
let cache = {}
var wB = function(s, wD) {
    if (s === '') {
        return true
    }
    for (let i = 0; i < s.length; i++) {
        if (wD[s.substring(0, i + 1)] !== undefined) {
            if (cache[s.length - i - 1] !== undefined) {
                continue
            }
            let rb = wB(s.substring(i + 1, s.length), wD)
            cache[s.length - i - 1] = rb
            if (rb) {
                return true
            }
        }
    }
    return false
}
var wordBreak = function(s, wordDict) {
    cache = {}
    let wD = {}
    for (let w of wordDict) {
        wD[w] = 0
    }
    return wB(s, wD)
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=14 lang=python3
#
# [14] \u6700\u957F\u516C\u5171\u524D\u7F00
#
# @lc code=start
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        end_str = ''
        min_len = len(strs[0])
        for s in strs:
            if len(s) < min_len:
                min_len = len(s)
        for i in range(min_len):
            c = strs[0][i]
            for s in strs:
                if s[i] != c:
                    return end_str
            end_str += c
        return end_str
# @lc code=end`,`#
# @lc app=leetcode.cn id=141 lang=python3
#
# [141] \u73AF\u5F62\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        mid_result = []
        while head != None:
            if head in mid_result:
                return True
            mid_result.append(head)
            head = head.next
        return False
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] \u73AF\u5F62\u94FE\u8868 II
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head
    let slow = head
    while (true) {
        if (fast === null || fast.next === null) {
            return null
        }
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            break
        }
    }
    fast = head
    while (fast != slow) {
        fast = fast.next
        slow = slow.next
    }
    return fast
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] \u91CD\u6392\u94FE\u8868
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let nodes = []
    while (head !== null) {
        nodes.push(head)
        head = head.next
    } 
    head = nodes[0]
    let node = new ListNode(1, undefined)
    for (let i = 0; i < parseInt(nodes.length / 2); i++) {
        node.next = nodes[i]
        node = node.next
        node.next = nodes[nodes.length - 1 - i]
        node = node.next
    }
    if (nodes.length % 2 === 1) {
        node.next = nodes[parseInt(nodes.length / 2)]
        node = node.next
    }
    node.next = null
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=144 lang=python3
#
# [144] \u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        def pt(r):
            if r is None:
                return
            result.append(r.val)
            pt(r.left)
            pt(r.right)
        pt(root)
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=145 lang=python3
#
# [145] \u4E8C\u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        def pt(r):
            if r is None:
                return
            pt(r.left)
            pt(r.right)
            result.append(r.val)
        pt(root)
        return result
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU \u7F13\u5B58
 */
// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = {}
    this.cache_list = []
    this.capacity = capacity
    this.i = 0
};
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let r = this.cache[key]
    if (r === undefined) {
        return -1
    } else {
        this.cache_list.splice(this.cache_list.indexOf(key), 1)
        this.cache_list.push(key)
    }
    return r
};
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let r = this.get(key)
    if (r !== -1) {
        this.cache[key] = value
        this.cache_list.splice(this.cache_list.indexOf(key), 1)
        this.cache_list.push(key)
    } else {
        this.i += 1
        if (this.i > this.capacity) {
            let x = this.cache_list.shift()
            delete this.cache[x]
            this.i = this.capacity
        } 
        this.cache[key] = value
        this.cache_list.push(key)
    }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=147 lang=java
 *
 * [147] \u5BF9\u94FE\u8868\u8FDB\u884C\u63D2\u5165\u6392\u5E8F
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode insertionSortList(ListNode head) {
        ListNode root = new ListNode();
        ListNode first = root;
        while (head != null) {
            ListNode r = head;
            head = head.next;
            while (first != null) {
                if (first.next == null || first.next.val > r.val) {
                    r.next = first.next;
                    first.next = r;
                    first = root;
                    break;
                }
                first = first.next;
            }
        }
        return root.next;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=148 lang=java
 *
 * [148] \u6392\u5E8F\u94FE\u8868
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode sortList(ListNode head) {
        if (head == null) {
            return head;
        }
        int nodeLen = 0;
        ListNode node = head;
        while (node != null) {
            nodeLen += 1;
            node = node.next;
        }
        ListNode temp = new ListNode(0, head);
        for (int i = 1; i < nodeLen; i <<= 1) {
            ListNode pre = temp;
            ListNode m = temp.next;
            while(m != null) {
                ListNode head1 = m;
                for (int j = 1; j < i && m != null; j ++) {
                    m = m.next;
                }
                ListNode head2 = null;
                if (m != null) {
                    head2 = m.next;
                    m.next = null;
                    m = head2;
                    for (int j = 1; j < i && m != null; j ++) {
                        m = m.next;
                    }
                }
                if (m != null) {
                    ListNode next = m;
                    m = m.next;
                    next.next = null;
                }
                ListNode n = mergeList(head1, head2);
                pre.next = n.next;
                pre = n;
                n.next = null;
            }
        }
        return temp.next;
    }
    public ListNode mergeList(ListNode head1, ListNode head2) {
        ListNode root = new ListNode();
        ListNode temp = root;
        while(head1 != null && head2 != null) {
            if (head1.val <= head2.val) {
                temp.next = head1;
                temp = head1;
                head1 = head1.next;
            } else {
                temp.next = head2;
                temp = head2;
                head2 = head2.next;
            }
        }
        if (head1 != null) {
            temp.next = head1;
        } else {
            temp.next = head2;
        }
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = root.next;
        return temp;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=15 lang=python3
#
# [15] \u4E09\u6570\u4E4B\u548C
#
# @lc code=start
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums) < 3:
            return []
        nums = sorted(nums)
        result = []
        ni = None
        for i, n in enumerate(nums):
            if n == ni:
                continue
            ni = n
            k = len(nums) - 1
            j = i + 1
            while j < k:
                while nums[k] + n + nums[j] >= 0 and k > j:
                    if nums[k] + n + nums[j] == 0 and (k == len(nums) - 1 or nums[k] != nums[k + 1]):
                        result.append([n, nums[j], nums[k]])
                    k -= 1
                j += 1
        return result
# @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=150 lang=java
 *
 * [150] \u9006\u6CE2\u5170\u8868\u8FBE\u5F0F\u6C42\u503C
 */
// @lc code=start
class Solution {
    public int evalRPN(String[] tokens) {
        Deque<Integer> deque = new ArrayDeque<>();
        for(String token: tokens) {
            int ss = 0;
            if (token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/")) {
                int y = deque.pop();
                int x = deque.pop();
                if (token.equals("+")) {
                    ss = x + y;
                } else if (token.equals("-")) {
                    ss = x - y;
                } else if (token.equals("*")) {
                    ss = x * y;
                } else {
                    ss = x / y;
                }
            } else {
                ss = Integer.valueOf(token);
            }
            deque.push(ss);
        }
        return deque.pop();
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=151 lang=java
 *
 * [151] \u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD
 */
// @lc code=start
class Solution {
    public String reverseWords(String s) {
        String result = "";
        String rs =  "";
        for (char ss: s.toCharArray()) {
            if (ss != ' ') {
                rs += ss;
            } else if (!rs.equals("")) {
                result = rs + " " + result;
                rs = "";
            }
        }
        if (!rs.equals("")) {
            result = rs + " " + result;
        }
        return result.substring(0, result.length() - 1);
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=152 lang=java
 *
 * [152] \u4E58\u79EF\u6700\u5927\u5B50\u6570\u7EC4
 */
// @lc code=start
class Solution {
    public int maxProduct(int[] nums) {
        int min_ = nums[0];
        int max_ = nums[0];
        int resule = max_;
        for(int i = 1; i < nums.length ; i++) {
            int l = nums[i];
            int m = l * max_;
            int n = l * min_;
            max_ = l > m ? l > n ? l : n : m > n ? m : n;
            resule = resule > max_ ? resule : max_;
            min_ = l > m ? m > n ? n : m : l > n ? n : l;
        }
        return resule;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=153 lang=java
 *
 * [153] \u5BFB\u627E\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u6700\u5C0F\u503C
 */
// @lc code=start
class Solution {
    public int findMin(int[] nums) {
        int s = 0;
        int e = nums.length - 1;
        while (s < e) {
            int m = (s + e) / 2;
            if (nums[m] < nums[(m + 1) % nums.length] && nums[m] < nums[(m - 1 + nums.length) % nums.length]) {
                break;
            }
            if (nums[e] > nums[s]) {
                e = s;
                break;
            }  else {
                if (nums[m] < nums[e]) {
                    e = m - 1;
                } else {
                    s = m + 1;
                }
            }
        }
        return nums[(s + e) / 2];
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=155 lang=python3
#
# [155] \u6700\u5C0F\u6808
#
# @lc code=start
class MinStack:
    def __init__(self):
        self.stack = []
    def push(self, val: int) -> None:
        if len(self.stack) == 0:
            self.stack.append((val, val))
        else:
            self.stack.append((val, min(self.getMin(), val)))
    def pop(self) -> None:
        return self.stack.pop()[0]
    def top(self) -> int:
        return self.stack[-1][0]
    def getMin(self) -> int:
        return self.stack[- 1][1]
# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
# @lc code=end`,`#
# @lc app=leetcode.cn id=16 lang=python3
#
# [16] \u6700\u63A5\u8FD1\u7684\u4E09\u6570\u4E4B\u548C
#
# @lc code=start
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums = sorted(nums)
        min_r = float('inf')
        min_s = None
        for i, n in enumerate(nums):
            j = i + 1
            k = len(nums) - 1
            while j < k:
                while k > j and (nums[k] + n + nums[j] > target) :
                    k -= 1
                if k < (len(nums) - 1):
                    mid = nums[k + 1] + n + nums[j]
                    if mid - target < min_r:
                        min_r = mid - target
                        min_s = mid
                if k == j:
                    break
                mid = nums[k] + n + nums[j]
                if target - mid< min_r:
                    min_r = target - mid
                    min_s = mid
                if min_r == 0:
                    return target
                j += 1
        return min_s
# @lc code=end`,`#
# @lc app=leetcode.cn id=160 lang=python3
#
# [160] \u76F8\u4EA4\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        ha = []
        while headA is not None:
            ha.append(headA)
            headA = headA.next
        while headB is not None:
            if headB in ha:
                return headB
            headB = headB.next
        return None
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=162 lang=java
 *
 * [162] \u5BFB\u627E\u5CF0\u503C
 */
// @lc code=start
class Solution {
    public int findPeakElement(int[] nums) {
        if (nums.length == 1) {
            return 0;
        } else {
            if (nums[0] > nums[1]) {
                return 0;
            } else if (nums[nums.length - 1] > nums[nums.length - 2]) {
                return nums.length - 1;
            }
        }
        int s = 1, e = nums.length - 2;
        while(s < e) {
            int m = (s + e) / 2;
            if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) {
                return m;
            } 
            if (nums[m] < nums[m + 1]) {
                s = m + 1;
            } else {
                e = m - 1;
            }
        }
        return s;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=1624 lang=python3
#
# [1624] \u4E24\u4E2A\u76F8\u540C\u5B57\u7B26\u4E4B\u95F4\u7684\u6700\u957F\u5B50\u5B57\u7B26\u4E32
#
# @lc code=start
class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=165 lang=java
 *
 * [165] \u6BD4\u8F83\u7248\u672C\u53F7
 */
// @lc code=start
class Solution {
    public int getV(String v) {
        int i = 0;
        while(i < v.length() && v.charAt(i) == '0') i++;
        if (i < v.length()) {
            return Integer.valueOf(v.substring(i));
        }
        return 0;
    }
    public int compareVersion(String version1, String version2) {
        String[] vs1 = version1.split("\\\\.");
        String[] vs2 = version2.split("\\\\.");
        int i = 0;
        while (i < vs1.length || i < vs2.length) {
            if (i < vs1.length && i < vs2.length) {
                int v1 = getV(vs1[i]);
                int v2 = getV(vs2[i]);
                if (v1 > v2) {
                    return 1;
                } else if (v2 > v1) {
                    return -1;
                }
            } else if (i < vs1.length) {
                if (getV(vs1[i]) != 0) {
                    return 1;
                }
            } else {
                if (getV(vs2[i]) != 0) {
                    return -1;
                }
            }
            i++;
        }
        return 0;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=168 lang=python3
#
# [168] Excel\u8868\u5217\u540D\u79F0
#
# @lc code=start
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = []
        while columnNumber != 0:
            c = columnNumber % 26   
            if c == 0:
                result.insert(0, 'Z')
                columnNumber -= 1
            else:
                result.insert(0, chr(ord('A') + (c - 1)))
            columnNumber = columnNumber // 26
        return ''.join(result)
# @lc code=end`,`#
# @lc app=leetcode.cn id=169 lang=python3
#
# [169] \u591A\u6570\u5143\u7D20
#
# @lc code=start
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums = sorted(nums)
        return nums[len(nums) // 2]
# @lc code=end`,`#
# @lc app=leetcode.cn id=17 lang=python3
#
# [17] \u7535\u8BDD\u53F7\u7801\u7684\u5B57\u6BCD\u7EC4\u5408
#
# @lc code=start
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        all_r = []
        if len(digits) == 0:
            return all_r
        num2letter = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        def x(s):
            if len(s) == len(digits):
                all_r.append(s)
                return
            letter = num2letter[digits[len(s)]]
            for c in letter:
                x(s + c)
        x('')
        return all_r 
# @lc code=end`,`#
# @lc app=leetcode.cn id=171 lang=python3
#
# [171] Excel \u8868\u5217\u5E8F\u53F7
#
# @lc code=start
class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        sum_ = 0
        j = 1
        for i in range(len(columnTitle) - 1, -1, -1):
            sum_ += (ord(columnTitle[i]) - ord('A') + 1) * j
            j *= 26
        return sum_
# @lc code=end`,`#
# @lc app=leetcode.cn id=18 lang=python3
#
# [18] \u56DB\u6570\u4E4B\u548C
#
# @lc code=start
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        if len(nums) < 4:
            return []
        all_r = []
        nums = sorted(nums)
        en = None
        for i, n in enumerate(nums):
            if n == en:
                continue
            en = n
            enn = None
            for j in range(i + 1, len(nums) - 2):
                if nums[j] == enn:
                    continue
                enn = nums[j]
                k = j + 1
                m = len(nums) - 1
                while k < m:
                    rt = (n + nums[j] + nums[k] + nums[m])
                    while m > k and rt >= target:
                        if rt == target and ((m == len(nums) - 1) or nums[m] != nums[m + 1]):
                            all_r.append([n, nums[j], nums[k], nums[m]])
                        m -= 1
                        rt = (n + nums[j] + nums[k] + nums[m])
                    k += 1
        return all_r
# @lc code=end`,`#
# @lc app=leetcode.cn id=19 lang=python3
#
# [19] \u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C N \u4E2A\u7ED3\u70B9
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        l = [head]
        r = head
        while r.next is not None:
            l.append(r.next)
            r = r.next
        i = len(l) - n
        if i == 0:
            return head.next
        l[i-1].next = l[i].next
        return head
# @lc code=end`,`#
# @lc app=leetcode.cn id=190 lang=python3
#
# [190] \u98A0\u5012\u4E8C\u8FDB\u5236\u4F4D
#
# @lc code=start
class Solution:
    def reverseBits(self, n: int) -> int:
        sum_ = 0
        for i in range(32):
            sum_ |= ((n & 1) << (31 - i))
            n >>= 1
        return sum_
# @lc code=end`,`#
# @lc app=leetcode.cn id=191 lang=python3
#
# [191] \u4F4D1\u7684\u4E2A\u6570
#
# @lc code=start
class Solution:
    def hammingWeight(self, n: int) -> int:
        num = 0
        while n != 0:
            if n & 1:
                num += 1
            n >>= 1
        return num
# @lc code=end`,`#
# @lc app=leetcode.cn id=2 lang=python3
#
# [2] \u4E24\u6570\u76F8\u52A0
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        root = ListNode()
        f = root
        carry = 0
        while l1 is not None and l2 is not None: 
            val = l1.val + l2.val + carry
            carry = val // 10
            val = val % 10
            f.next = ListNode(val=val)
            f = f.next
            l1 = l1.next
            l2 = l2.next
        l3 = None
        if l1 is not None:
            l3 = l1 
        if l2 is not None:
            l3 = l2
        if carry > 0:
            if l3 is not None:
                while l3 is not None and carry != 0:
                    val = l3.val + carry
                    carry = val // 10
                    val = val % 10
                    f.next = ListNode(val=val)
                    f = f.next
                    l3 = l3.next
                if l3 is None and carry != 0:
                    f.next = ListNode(val=carry)
                else:
                    f.next = l3
            else:
                f.next = ListNode(val=carry)
        else:
            f.next = l3
        return root.next
# @lc code=end`,`#
# @lc app=leetcode.cn id=20 lang=python3
#
# [20] \u6709\u6548\u7684\u62EC\u53F7
#
# @lc code=start
class Solution:
    true_symbol = ['(', '[', '{']
    false_symbol = [')', ']', '}']
    obj_symbol = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    def isValid(self, s: str) -> bool:
        symbol = []
        for ss in s:
            if ss in Solution.true_symbol:
                symbol.append(ss)
            if ss in Solution.false_symbol:
                if len(symbol) == 0:
                    return False
                if Solution.obj_symbol[ss] != symbol.pop():
                    return False
        return len(symbol) == 0
# @lc code=end`,`#
# @lc app=leetcode.cn id=202 lang=python3
#
# [202] \u5FEB\u4E50\u6570
#
# @lc code=start
class Solution:
    def isHappy(self, n: int) -> bool:
        result = []
        def happy_sum(nn):
            sum_ = 0
            while nn != 0:
                x = nn % 10
                sum_ += x * x
                nn = nn // 10
            return sum_
        x = happy_sum(n)
        while x != 1:
            if x in result:
                return False
            result.append(x)
            x = happy_sum(x)
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=203 lang=python3
#
# [203] \u79FB\u9664\u94FE\u8868\u5143\u7D20
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        if head is None:
            return head
        root = ListNode(next=head)
        start = root
        run = head
        while run != None:
            if run.val == val:
                start.next = run.next
                run = run.next
            else:
                start = run
                run = run.next
        return root.next
# @lc code=end`,`#
# @lc app=leetcode.cn id=205 lang=python3
#
# [205] \u540C\u6784\u5B57\u7B26\u4E32
#
# @lc code=start
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        table_s_t = {}
        table_t_s = {}
        for i, ss in enumerate(s):
            tt = t[i]
            if ss in table_s_t:
                if tt != table_s_t[ss]:
                    return False
            elif tt in table_t_s:
                if ss != table_t_s[tt]:
                    return False
            else:
                table_s_t[ss] = tt
                table_t_s[tt] = ss
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=206 lang=python3
#
# [206] \u53CD\u8F6C\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head == None:
            return head
        start = None
        end = None
        def r(h):
            nonlocal start, end
            if h == None:
                return None
            rr = r(h.next)
            if rr != None:
                if start == None:
                    start = rr
                else:
                    end.next = rr 
                end = rr 
            return h
        h = r(head)
        if start == None:
            return head
        end.next = h
        h.next = None
        return start
# @lc code=end`,`#
# @lc app=leetcode.cn id=21 lang=python3
#
# [21] \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 is None:
            return list2
        if list2 is None:
            return list1
        start, end = None, None
        while list1 is not None and list2 is not None:
            if list1.val <= list2.val:
                l1 = list1.next
                if start is None:
                    start = list1
                else:
                    end.next = list1
                end = list1
                end.next = None
                list1 = l1
            else:
                l2 = list2.next
                if start is None:
                    start = list2
                else:
                    end.next = list2
                end = list2
                end.next = None
                list2 = l2
        if list1 is not None:
            end.next = list1
        if list2 is not None:
            end.next = list2
        return start
# @lc code=end`,`#
# @lc app=leetcode.cn id=217 lang=python3
#
# [217] \u5B58\u5728\u91CD\u590D\u5143\u7D20
#
# @lc code=start
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return False
        # \u5148\u6392\u5E8F\u76F8\u540C\u7684\u5143\u7D20\u5C31\u4F1A\u805A\u5728\u4E00\u8D77
        nums = sorted(nums)
        for i in range(1, len(nums)):
            # \u5224\u65AD\u524D\u4E00\u4E2A\u5143\u7D20\u4E0E\u5F53\u524D\u5143\u7D20\u662F\u5426\u76F8\u540C
            if nums[i] == nums[i - 1]:
                return True
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=2186 lang=python3
#
# [2186] \u4F7F\u4E24\u5B57\u7B26\u4E32\u4E92\u4E3A\u5B57\u6BCD\u5F02\u4F4D\u8BCD\u7684\u6700\u5C11\u6B65\u9AA4\u6570
#
# @lc code=start
class Solution:
    def minSteps(self, s: str, t: str) -> int:
# @lc code=end`,`#
# @lc app=leetcode.cn id=219 lang=python3
#
# [219] \u5B58\u5728\u91CD\u590D\u5143\u7D20 II
#
# @lc code=start
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        # \u7528 Hash \u53EF\u4EE5\u5927\u5927\u7684\u52A0\u5FEB\u7A0B\u5E8F\u8FD0\u884C
        result = {}
        for i, n in enumerate(nums):
            if n in result and i - result[n] <= k:
                return True
            result[n] = i 
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=22 lang=python3
#
# [22] \u62EC\u53F7\u751F\u6210
#
# @lc code=start
class Solution:
    def generateParenthesis(self, n: int)  -> List[str]:
        PS = []
        def gp(c1, c2, end_str):
            if c1 > n: return
            if c1 == n and c2 == n: PS.append(end_str)
            if c1 >= c2:
                gp(c1 + 1, c2, end_str + '(')
                gp(c1, c2 + 1, end_str + ')')
        gp(0, 0, '')    
        return PS
# @lc code=end`,`#
# @lc app=leetcode.cn id=225 lang=python3
#
# [225] \u7528\u961F\u5217\u5B9E\u73B0\u6808
#
# @lc code=start
class MyStack:
    # \u4EE3\u7801\u6709\u95EE\u9898
    def __init__(self):
        self.x1 = []
        self.x2 = []
    def push(self, x: int) -> None:
        self.x2.append(x)
        while len(self.x1) != 0:
            self.x2.append(self.x1[0])
            del self.x1[0]
        self.x2, self.x1 = self.x1, self.x2  
    def pop(self) -> int:
        r = self.x1[0]
        del self.x1[0]
        return r 
    def top(self) -> int:
        return self.x1[0]
    def empty(self) -> bool:
        if len(self.x1) == 0:
            return True
        return False
# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
# @lc code=end`,`#
# @lc app=leetcode.cn id=226 lang=python3
#
# [226] \u7FFB\u8F6C\u4E8C\u53C9\u6811
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if root == None:
            return root
        def it(r):
            if r.left != None:
                left, right = it(r.left)
                r.left.left = right
                r.left.right = left
            if r.right != None:
                left, right = it(r.right)
                r.right.left = right
                r.right.right = left
            return r.left, r.right
        left, right = it(root)
        root.left = right
        root.right = left
        return root
# @lc code=end`,`#
# @lc app=leetcode.cn id=228 lang=python3
#
# [228] \u6C47\u603B\u533A\u95F4
#
# @lc code=start
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0:
            return []
        result = []
        str_ = nums[0]
        for i in range(1, len(nums)):
            if nums[i] - nums[i - 1] > 1:
                if str_ == nums[i - 1]:
                    result.append(str(str_))
                else:
                    result.append(str(str_) + '->' + str(nums[i - 1]))
                str_ = nums[i]
        if str_ == nums[len(nums) - 1]:
            result.append(str(str_))
        else:
            result.append(str(str_) + '->' + str(nums[len(nums) - 1]))
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=23 lang=python3
#
# [23] \u5408\u5E76K\u4E2A\u5347\u5E8F\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        while True:
            x = True
            for l in lists:
                if l == None:
                    lists.remove(l)
                    x = False
                    break
            if x:
                break
        if len(lists) == 0:
            return None
        start = None
        end = None
        while True:
            if len(lists) == 0:
                break
            min_l = lists[0].val
            j = 0
            for i in range(1, len(lists)):
                if lists[i].val < min_l:
                    min_l = lists[i].val
                    j = i
            l = lists[j]
            if l.next == None:
                lists.remove(l)
            else:
                lists[j] = l.next
            l.next = None
            if start == None:
                start = l
                end = l
            else:
                end.next = l
                end = l
        return start
# @lc code=end`,`#
# @lc app=leetcode.cn id=231 lang=python3
#
# [231] 2 \u7684\u5E42
#
# @lc code=start
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n == 1:
            return True
        for i in range(32):
            if n == 2 << i:
                return True
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=232 lang=python3
#
# [232] \u7528\u6808\u5B9E\u73B0\u961F\u5217
#
# @lc code=start
class MyQueue:
    def __init__(self):
        self.f = []
        self.s = []
    def push(self, x: int) -> None:
        self.f.append(x)
    def pop(self) -> int:
        self.__f2s()
        return self.s.pop()
    def __f2s(self):
        if len(self.s) == 0:
            for _ in range(len(self.f)):
                self.s.append(self.f.pop())
    def peek(self) -> int:
        self.__f2s()
        return self.s[len(self.s) - 1]
    def empty(self) -> bool:
        return True if (len(self.s) + len(self.f)) == 0 else False
# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
# @lc code=end`,`import java.util.ArrayList;
/*
 * @lc app=leetcode.cn id=2327 lang=java
 *
 * [2327] \u77E5\u9053\u79D8\u5BC6\u7684\u4EBA\u6570
 */
// @lc code=start
class Solution {
    public int peopleAwareOfSecret(int n, int delay, int forget) {
        int max_ = (int) 1e9 + 7;
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        for (int i = 1; i < n; i++) {
            int s = 0;
            for (int j = list.size() - delay; j >= 0 && j > list.size() - forget; j--) {
                s += list.get(j);
                s %= max_;
            }
            list.add(s);
        }
        int s = 0;
        for (int i = list.size() - 1; i >= 0 && i >= list.size() - forget; i--) {
            s += list.get(i);
            s %= max_;
        }
        return s;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=234 lang=python3
#
# [234] \u56DE\u6587\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        heads = []
        while head != None:
            heads.append(head)
            head = head.next
        for i in range(len(heads) // 2):
            if heads[i].val != heads[len(heads) - 1 - i].val:
                return False
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=235 lang=python3
#
# [235] \u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # \u6CE8\u610F\u4F7F\u7528\u9898\u76EE\u4E2D\u7684\u641C\u7D22\u6811\u6761\u4EF6
        while True:
            if root.val > p.val and root.val > q.val:
                root = root.left
            elif root.val < p.val and root.val < q.val:
                root = root.right
            else:
                break
        return root
# @lc code=end`,`#
# @lc app=leetcode.cn id=237 lang=python3
#
# [237] \u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        node.val = node.next.val
        node.next = node.next.next
# @lc code=end`,`#
# @lc app=leetcode.cn id=24 lang=python3
#
# [24] \u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        hd = head
        s = None
        e = None
        while hd != None:
            if hd.next != None:
                x = hd.next
                hd.next = hd.next.next
                x.next = hd   
                if s == None:
                    s = x
                else:
                    e.next = x
            if s == None:
                s = hd
            e = hd
            hd = hd.next  
        return s       
# @lc code=end`,`#
# @lc app=leetcode.cn id=242 lang=python3
#
# [242] \u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD
#
# @lc code=start
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        r = {}
        for ss in s:
            r[ss] = r.get(ss, 0) + 1
        for tt in t:
            if tt not in r:
                return False
            r[tt] -= 1
            if r[tt] < 0:
                return False
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=25 lang=python3
#
# [25] K \u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        stack = []
        start = None
        end = None
        hd = head
        i = 0
        while hd != None:
            stack.append(hd)
            hd = hd.next
            i += 1
            if i == k:
                i = 0
                for _ in range(k):
                    n = stack.pop()
                    if start == None:
                        start = n
                    else:
                        end.next = n
                    end = n 
        if end != None:
            end.next = None
        if len(stack) != 0:
            if start == None:
                start = stack[0]
            else:
                end.next = stack[0]
        return start
# @lc code=end`,`#
# @lc app=leetcode.cn id=257 lang=python3
#
# [257] \u4E8C\u53C9\u6811\u7684\u6240\u6709\u8DEF\u5F84
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        result_mid = []
        result = []
        def btp(r):
            result_mid.append(str(r.val))
            if r.left is None and r.right is None:
                result.append('->'.join(result_mid))
            if r.left is not None:
                btp(r.left)
            if r.right is not None:
                btp(r.right)
            result_mid.pop()
        btp(root)
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=258 lang=python3
#
# [258] \u5404\u4F4D\u76F8\u52A0
#
# @lc code=start
class Solution:
    def addDigits(self, num: int) -> int:
        if num < 10:
            return num
        sum_ = 0
        while num > 0:
            sum_ += num % 10
            num //= 10
        return self.addDigits(sum_)
# @lc code=end`,`#
# @lc app=leetcode.cn id=26 lang=python3
#
# [26] \u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879
#
# @lc code=start
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        l = 0
        sgin = -10 ** 5
        for i in range(len(nums)):
            if sgin < nums[i]:
                nums[l] = nums[i]
                sgin = nums[i]
                l += 1
        return l
# @lc code=end`,`#
# @lc app=leetcode.cn id=263 lang=python3
#
# [263] \u4E11\u6570
#
# @lc code=start
class Solution:
    def isUgly(self, n: int) -> bool:
        if n <= 0:
            return False
        while n > 1:
            if n % 2 == 0:
                n //= 2
            elif n % 3 == 0:
                n //= 3
            elif n % 5 == 0:
                n //= 5
            else:
                return False
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=268 lang=python3
#
# [268] \u4E22\u5931\u7684\u6570\u5B57
#
# @lc code=start
from typing import List
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        nums = sorted(nums)
        s = 0
        e = len(nums) - 1
        while s <= e:
            m = (s + e) // 2
            if nums[m] == m:
                if s == e:
                    return m + 1
                s = m + 1
            elif nums[m] == m + 1:
                if s == e:
                    return m
                e = m - 1
        return e + 1
# @lc code=end`,`#
# @lc app=leetcode.cn id=27 lang=python3
#
# [27] \u79FB\u9664\u5143\u7D20
#
# @lc code=start
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        l = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[l] = nums[i]
                l += 1
        return l
# @lc code=end`,`#
# @lc app=leetcode.cn id=278 lang=python3
#
# [278] \u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C
#
# @lc code=start
# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:
class Solution:
    def firstBadVersion(self, n: int) -> int:
        s = 0
        while s < n:
            m = (s + n) // 2
            b = isBadVersion(m)
            if b:
                n = m
            else:
                s = m + 1
        return n
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=279 lang=java
 *
 * [279] \u5B8C\u5168\u5E73\u65B9\u6570
 */
// @lc code=start
class Solution {
    public int numSquares(int n) {
        int[] t = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            int x = Integer.MAX_VALUE;
            for (int j = 1; j * j <= i; j++) {
                x = Integer.min(x, t[i - j * j]);
            }
            t[i] = x + 1;
        }
        return t[n];
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=279 lang=python3
#
# [279] \u5B8C\u5168\u5E73\u65B9\u6570
#
# @lc code=start
class Solution:
    def numSquares(self, n: int) -> int:
# @lc code=end`,`#
# @lc app=leetcode.cn id=28 lang=python3
#
# [28] \u5B9E\u73B0 strStr()
#
# @lc code=start
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle == '':
            return 0
        hl = len(haystack) - len(needle) + 1
        i = 0
        while i < hl: 
            if haystack[i] == needle[0]:
                is_s = True
                for j in range(len(needle)):
                    if needle[j] != haystack[i + j]:
                        is_s = False
                        for k in range(len(haystack) - i - j):
                            if needle[j] == haystack[i + j + k]:
                                i = i + k - 1
                                break
                        break
                if is_s:
                    return i
            i += 1
        return -1
# @lc code=end`,`#
# @lc app=leetcode.cn id=283 lang=python3
#
# [283] \u79FB\u52A8\u96F6
#
# @lc code=start
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = 0
        j = 0
        n_len = len(nums)
        while i < n_len and j < n_len:
            nums[i], nums[j] = nums[j], nums[i]
            while i < n_len and nums[i] != 0: i += 1
            j = i + 1
            while j < n_len and nums[j] == 0: j += 1
# @lc code=end`,`#
# @lc app=leetcode.cn id=29 lang=python3
#
# [29] \u4E24\u6570\u76F8\u9664
#
# @lc code=start
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        if divisor == 1:
            return dividend
        if divisor == -1:
            if dividend == -2**31:
                return 2**31 -1
            else:
                return -dividend
        d = str(dividend)
        sign = 1
        if d[0] == '-':
            d = d[1:]
            sign = -sign
        if divisor < 0:
            sign = -sign
        r = ''
        s = ''
        for dd in d:
            dd = int(s + dd)
            rr = 0
            while dd > 0:
                if divisor > 0:
                    if dd - divisor >= 0:
                        rr += 1
                    else:
                        break
                    dd -= divisor
                elif divisor < 0:
                    if dd + divisor >= 0:
                        rr += 1
                    else:
                        break
                    dd += divisor
            if r != '' or rr != 0:
                r += str(rr)
            if dd > 0:
                s = str(dd)
            else:
                s = ''
        r = 0 if r == '' else int(r)
        if sign < 0:
            return -r
        return r
# @lc code=end`,`#
# @lc app=leetcode.cn id=290 lang=python3
#
# [290] \u5355\u8BCD\u89C4\u5F8B
#
# @lc code=start
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        s = s.split(' ')
        if len(s) != len(pattern):
            return False
        table_p_s = {}
        table_s_p = {}
        for i, p in enumerate(pattern):
            ss = s[i]
            if p not in table_p_s:
                table_p_s[p] = ss
            else:
                if table_p_s[p] != ss:
                    return False
            if ss not in table_s_p:
                table_s_p[ss] = p
            else:
                if table_s_p[ss] != p:
                    return False
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=292 lang=python3
#
# [292] Nim \u6E38\u620F
#
# @lc code=start
class Solution:
    def canWinNim(self, n: int) -> bool:
        return n % 4 != 0
# @lc code=end`,`#
# @lc app=leetcode.cn id=3 lang=python3
#
# [3] \u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32
#
# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if s == "":
            return 0
        max_ = 0
        r = {}
        j = 0
        for i in range(len(s)):
            if s[i] in r and r[s[i]] >= j:
                if i - j> max_:
                    max_ = i - j
                j = r[s[i]] + 1
            r[s[i]] = i
        if i + 1 - j > max_:
            max_ = i + 1 - j
        return max_
# @lc code=end`,`#
# @lc app=leetcode.cn id=30 lang=python3
#
# [30] \u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32
#
# @lc code=start
class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        word_len = len(words[0])
        words_len = word_len * len(words)
        if len(s) < words_len:
            return []
        result = []
        for i in range(len(s) - words_len + 1):
            x = s[i: i + word_len]
            if x in words:
                y = words.copy()
                is_start = True
                for j in range(len(words)):
                    sub = s[i + j * word_len: i + (j + 1) * word_len]
                    if sub not in y:
                        is_start = False
                        break
                    y.remove(sub)
                if is_start:
                    result.append(i)
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=303 lang=python3
#
# [303] \u533A\u57DF\u548C\u68C0\u7D22 - \u6570\u7EC4\u4E0D\u53EF\u53D8
#
# @lc code=start
class NumArray:
    def __init__(self, nums: List[int]):
        self.nums = nums
    def sumRange(self, left: int, right: int) -> int:
        return sum(self.nums[left: right + 1])
# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
# @lc code=end`,`#
# @lc app=leetcode.cn id=31 lang=python3
#
# [31] \u4E0B\u4E00\u4E2A\u6392\u5217
#
# @lc code=start
class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k = 0
        for i in range(len(nums) - 1, 0, -1):
            if nums[i] > nums[i - 1]:
                k = i
                for j in range(len(nums) - 1, i, -1):
                    if nums[j] > nums[i - 1]:
                        k = j
                        break
                x = nums[i - 1]
                nums[i - 1] = nums[k]
                nums[k] = x
                k = i
                break
        for i in range(k, (len(nums) + k) // 2):
            x = nums[i] 
            nums[i] = nums[len(nums) - 1 + k -i]
            nums[len(nums) - 1 + k -i] = x
        return nums
# @lc code=end`,`#
# @lc app=leetcode.cn id=316 lang=python3
#
# [316] \u53BB\u9664\u91CD\u590D\u5B57\u6BCD
#
# @lc code=start
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        ar = {}
        for ss in s:
            ar[ss] = ar.get(ss, 0) + 1
        rl = []
        rs = set()
        for ss in s:
            ar[ss] -= 1
            if ss in rs:
                continue
            while len(rl) > 0 and ord(rl[-1]) > ord(ss):
                if ar[rl[-1]] > 0:
                    rs.remove(rl[-1])
                    rl.pop()
                else:
                    break
            rl.append(ss)
            rs.add(ss)
        return ''.join(rl)
# @lc code=end`,`#
# @lc app=leetcode.cn id=32 lang=python3
#
# [32] \u6700\u957F\u6709\u6548\u62EC\u53F7
#
# @lc code=start
class Solution:
    def longestValidParentheses(self, s: str) -> int:
        x = []
        for ss in s:
            if ss == '(':
                x.append(ss)
            else:
                if len(x) > 0:
                    if x[-1] == '(':
                        x.pop()
                        x.append(2)
                    elif x[-1] != ')' and len(x) > 1:
                        if x[-2] == '(':
                            del x[-2]
                            x[-1] += 2
                        else:
                            x.append(ss)
                    else:
                        x.append(ss)
                    while len(x) > 1 and x[-2] != '(' and x[-2] != ')' and x[-1] != '(' and x[-1] != ')':
                        x[-2] += x[-1]
                        del x[-1]                 
                else:
                    x.append(ss)
        max_ = 0
        for xx in x:
            if xx != '(' and xx != ')' and xx > max_:
                max_ = xx
        return max_
# @lc code=end`,`#
# @lc app=leetcode.cn id=322 lang=python3
#
# [322] \u96F6\u94B1\u5151\u6362
#
# @lc code=start
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        max_amount = amount + 1
        all_amount = [max_amount] * max_amount
        all_amount[0] = 0
        for i in range(1, amount + 1):
            for j in coins:
                if i >= j:
                    all_amount[i] = min([all_amount[i],all_amount[i - j] + 1])
        return -1 if all_amount[amount] >= max_amount else all_amount[amount]
# @lc code=end`,`#
# @lc app=leetcode.cn id=326 lang=python3
#
# [326] 3 \u7684\u5E42
#
# @lc code=start
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n == 0:
            return False
        while n != 1:
            if n % 3 != 0:
                return False
            n //= 3
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=33 lang=python3
#
# [33] \u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4
#
# @lc code=start
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        min_ = 0
        max_ = len(nums) - 1
        while min_ < max_:
            mid_ = (min_ + max_) // 2
            if nums[mid_] > nums[max_]:
                min_ = mid_ + 1
            else:
                max_ = mid_
        max_ = min_ - 1
        min_ = - (len(nums) - min_)
        while min_ <= max_:
            mid_ = (min_ + max_) // 2
            if nums[mid_] == target:
                return (mid_ + len(nums)) % len(nums)
            elif nums[mid_] > target:
                max_ = mid_ - 1
            else:
                min_ = mid_ + 1
        return -1
# @lc code=end`,`#
# @lc app=leetcode.cn id=338 lang=python3
#
# [338] \u6BD4\u7279\u4F4D\u8BA1\u6570
#
# @lc code=start
class Solution:
    def countBits(self, n: int) -> List[int]:
        # \u51E1\u662F 2 \u7684 y \u6B21\u65B9\u5176\u7ED3\u679C\u90FD\u4E3A 1
        # 0 [0]
        # 1 [0, 1] 1 \u662F 2 \u7684 0 \u6B21\u65B9
        # 2 [0,1,1]
        # 3 [0,1,1,2]
        # 4 [0,1,1,2,1] 4 \u662F 2 \u7684\u5E73\u65B9
        # 5 [0,1,1,2,1,2]
        # 6 [0,1,1,2,1,2,2]
        # 7 [0,1,1,2,1,2,2,3]
        # 8
        result = [0]
        x = 0
        for i in range(1, n + 1):
            # \u8FD9\u884C\u53EF\u4EE5\u5224\u65AD\u662F\u5426\u662F2\u7684y\u6B21\u65B9
            # \u5982 4 -> 100 4-1 -> 11 \u4E24\u8005\u4E0E\u5FC5\u5B9A\u4E3A 0
            if i & (i - 1) == 0:
                x = i
            # \u8FD9\u884C\u4EE3\u7801\u540E\u9762\u7684\u52A01\u8868\u793A\u7684\u662F\u6700\u8FD1\u7684\u4E00\u4E2A\u4E3A 2\u7684y \u6B21\u65B9\u7684\u6570
            # result[i - x] \u8868\u793A i - \u6700\u8FD1\u4E00\u4E2A\u4E3A 2\u7684y \u6B21\u65B9\u7684\u6570
            # \u6BD4\u5982\uFF1A7 = 3 + 4 \u5176\u542B1\u91CF\u4E3A 3 \u7684\u542B1\u91CF\u52A04\u7684\u542B1\u91CF
            result.append(result[i - x] + 1)
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=34 lang=python3
#
# [34] \u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E
#
# @lc code=start
class Solution:
    def bs(self, nums, target, left):
        min_ = 0
        max_ = len(nums) - 1
        while min_ < max_:
            mid_ = (min_ + max_) // 2
            if nums[mid_] > target:
                max_ = mid_ - 1
            elif nums[mid_] == target and left:
                max_ = mid_ - 1
            else:
                min_ = mid_ + 1
        if left:
            return min_
        return max_
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 0:
            return [-1, -1]
        l = self.bs(nums, target, True)
        if nums[l] != target:
            l += 1
        r = self.bs(nums, target, False)
        if nums[r] != target:
            r -= 1
        if l == len(nums) or r == -1:
            return [-1, -1]
        if nums[l] != target or nums[r] != target:
            return [-1, -1]
        return [l, r]
# @lc code=end`,`#
# @lc app=leetcode.cn id=342 lang=python3
#
# [342] 4\u7684\u5E42
#
# @lc code=start
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n == 0:
            return False
        while n != 1:
            if n % 4 != 0:
                return False
            n >>= 2
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=344 lang=python3
#
# [344] \u53CD\u8F6C\u5B57\u7B26\u4E32
#
# @lc code=start
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        s_l = len(s) - 1
        for i in range(len(s) // 2):
            s[i], s[s_l - i] = s[s_l - i], s[i]
# @lc code=end`,`#
# @lc app=leetcode.cn id=345 lang=python3
#
# [345] \u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5143\u97F3\u5B57\u6BCD
#
# @lc code=start
class Solution:
    def reverseVowels(self, s: str) -> str:
        ss = [s_ for s_ in s]
        sy = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
        i = 0
        j = len(ss) - 1
        while i < j:
            while i < j and ss[i] not in sy: i += 1
            while i < j and ss[j] not in sy: j -= 1
            if i < j:
                ss[i], ss[j] = ss[j], ss[i]
                i += 1
                j -= 1
        return ''.join(ss)
# @lc code=end`,`#
# @lc app=leetcode.cn id=349 lang=python3
#
# [349] \u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6
#
# @lc code=start
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = set()
        r = {n for n in nums1}
        for n in nums2:
            if n in r:
                result.add(n)
        return list(result)
# @lc code=end`,`#
# @lc app=leetcode.cn id=35 lang=python3
#
# [35] \u641C\u7D22\u63D2\u5165\u4F4D\u7F6E
#
# @lc code=start
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        for i in range(len(nums)):
            if nums[i] >= target:
                return i
        return len(nums)
# @lc code=end`,`#
# @lc app=leetcode.cn id=350 lang=python3
#
# [350] \u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6 II
#
# @lc code=start
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        r1 = {}
        for n in nums1:
            r1[n] = r1.get(n, 0) + 1
        r2 = {}
        for n in nums2:
            r2[n] = r2.get(n, 0) + 1
        result = []
        for r in r1:
            if r in r2:
                result.extend([r] * min([r1[r], r2[r]]))
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=36 lang=python3
#
# [36] \u6709\u6548\u7684\u6570\u72EC
#
# @lc code=start
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        x = {}
        v = {}
        for i in range(9):
            h = []
            if i % 3 == 0:
                x = {}
            for j in range(9):
                if board[i][j] == '.':
                    continue
                if board[i][j] not in h :
                    h.append(board[i][j])
                else:
                    return False
                y = v.get(j, [])
                if board[i][j] not in y:
                    y.append(board[i][j])
                    v[j] = y
                else:
                    return False
                y = x.get(j // 3, [])
                if board[i][j] not in y:
                    y.append(board[i][j])
                    x[j // 3] = y
                else:
                    return False
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=367 lang=python3
#
# [367] \u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570
#
# @lc code=start
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        for i in range(num + 1):
            ii = i * i
            if ii == num:
                return True
            elif ii > num:
                return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=37 lang=python3
#
# [37] \u89E3\u6570\u72EC
#
# @lc code=start
class Solution:
    def sSudoku(self, board, i, j, x, y, z):
        if board[i][j] == '.':
            for k in range(1, 10):
                k = str(k)
                l = x.get(i, [])
                m = y.get(j, [])
                n = z.get(str(i // 3) + str(j // 3), [])
                if k not in l and k not in m and k not in n:
                    board[i][j] = k
                    l.append(k)
                    m.append(k)
                    n.append(k)
                    x[i] = l
                    y[j] = m
                    z[str(i // 3) + str(j // 3)] = n
                    if i == 8 and j == 8:
                        return board
                    elif j == 8:
                        s = self.sSudoku(board, i + 1, 0, x, y, z)              
                    else:
                        s = self.sSudoku(board, i, j + 1, x, y, z)
                    if s != None:
                        return s
                    l.pop()
                    m.pop()
                    n.pop()
                    x[i] = l
                    y[j] = m
                    z[str(i // 3) + str(j // 3)] = n
            board[i][j] = '.'
            return None
        else:        
            if i == 8 and j == 8:
                return board
            elif j == 8:
                return self.sSudoku(board, i + 1, 0, x, y, z)
            else:
                return self.sSudoku(board, i, j + 1, x, y, z)
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        x = {}
        y = {}
        z = {}
        for i in range(9):
            for j in range(9):
                k = board[i][j]
                if k == '.':
                    continue
                l = x.get(i, [])
                l.append(k)
                x[i] = l
                l = y.get(j, [])
                l.append(k)
                y[j] = l
                s = str(i // 3) + str(j // 3)
                l = z.get(s, [])
                l.append(k)
                z[s] = l
        return self.sSudoku(board, 0, 0, x, y, z)
# @lc code=end`,`#
# @lc app=leetcode.cn id=374 lang=python3
#
# [374] \u731C\u6570\u5B57\u5927\u5C0F
#
# @lc code=start
# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num: int) -> int:
class Solution:
    def guessNumber(self, n: int) -> int:
        i = 1
        while i <= n:
            m = (i + n) // 2
            r = guess(m)
            if r == 0:
                return m
            elif r == -1:
                n = m - 1
            else:
                i = m + 1
# @lc code=end`,`#
# @lc app=leetcode.cn id=38 lang=python3
#
# [38] \u5916\u89C2\u6570\u5217
#
# @lc code=start
class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return '1'
        s = '1'
        for _ in range(1, n):
            i = 0
            sss = ''
            r = ''
            for ss in s:
                if sss == '':
                    sss = ss
                    i += 1
                elif sss == ss:
                    i += 1
                else:
                    r = r + str(i) + sss
                    sss = ss
                    i = 1
            s =r + str(i) + sss
        return s
# @lc code=end`,`#
# @lc app=leetcode.cn id=383 lang=python3
#
# [383] \u8D4E\u91D1\u4FE1
#
# @lc code=start
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        r = {}
        m = {}
        for rn in ransomNote:
            r[rn] = r.get(rn, 0) + 1
        for mz in magazine:
            m[mz] = m.get(mz, 0) + 1
        for rr in r:
            if rr not in m or r[rr] > m[rr]:
                return False
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=387 lang=python3
#
# [387] \u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26
#
# @lc code=start
class Solution:
    def firstUniqChar(self, s: str) -> int:
        ss = {}
        for i, s_ in enumerate(s):
            if s_ in ss:
                ss[s_] = -1
            else:
                ss[s_] = i 
        i = len(s) + 1
        for s_ in ss:
            if ss[s_] != -1 and ss[s_] < i:
                i = ss[s_]
        return i if i != (len(s) + 1) else -1
# @lc code=end`,`#
# @lc app=leetcode.cn id=389 lang=python3
#
# [389] \u627E\u4E0D\u540C
#
# @lc code=start
class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        ss = {}
        tt = {}
        for s_ in s:
            ss[s_] = ss.get(s_, 0) + 1
        for t_ in t:
            tt[t_] = tt.get(t_, 0) + 1
        for t_ in tt:
            if t_ not in ss or tt[t_] != ss[t_]:
                return t_
# @lc code=end`,`#
# @lc app=leetcode.cn id=39 lang=python3
#
# [39] \u7EC4\u5408\u603B\u548C
#
# @lc code=start
class Solution:
    result = []
    def cs(self, candidates, i, x, a, target):
        if a == target:
            Solution.result.append(x.copy())
            return
        for j in range(i, len(candidates)):
            if candidates[j] + a > target:
                return
            x.append(candidates[j])
            self.cs(candidates, j, x, a + candidates[j], target)
            x.pop()
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        Solution.result = []
        candidates = sorted(candidates)
        for i, c in enumerate(candidates):
            if c > target:
                break
            self.cs(candidates,i, [c], c, target)
        return Solution.result
# @lc code=end`,`#
# @lc app=leetcode.cn id=392 lang=python3
#
# [392] \u5224\u65AD\u5B50\u5E8F\u5217
#
# @lc code=start
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i = 0 
        j = 0
        while i < len(s) and j < len(t):
            while j < len(t) and t[j] != s[i]: j += 1
            j += 1
            if j > len(t):
                return False
            i += 1
        return len(s) == i
# @lc code=end`,`#
# @lc app=leetcode.cn id=395 lang=python3
#
# [395] \u81F3\u5C11\u6709 K \u4E2A\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32
#
# @lc code=start
class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
# @lc code=end`,`#
# @lc app=leetcode.cn id=40 lang=python3
#
# [40] \u7EC4\u5408\u603B\u548C II
#
# @lc code=start
from select import select
class Solution:
    result = []
    def cs2(self, candidates, i, x, a, target):
        if a == target:
            Solution.result.append(x.copy())
        y = []
        for j in range(i + 1, len(candidates)):
            c = candidates[j]
            if c + a > target:
                return
            if c in y:
                continue
            y.append(c)
            x.append(c)
            self.cs2(candidates, j, x, a + c, target)
            x.pop()
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        Solution.result = []
        candidates = sorted(candidates)
        y = []
        for i, c in enumerate(candidates):
            if c > target:
                break
            if c in y:
                continue
            y.append(c)
            self.cs2(candidates, i, [c], c, target)
        return Solution.result
# @lc code=end`,`import java.util.ArrayList;
import java.util.List;
/*
 * @lc app=leetcode.cn id=401 lang=java
 *
 * [401] \u4E8C\u8FDB\u5236\u624B\u8868
 */
// @lc code=start
class Solution {
    public int[] hours = {1, 2, 4, 8};
    public int[] minutes = {1, 2, 4, 8, 16, 32};
    public void getHours(int s, int num, int sum, List<String> hour_list) {
        if (num == 0) {
            if (sum < 12)
                hour_list.add(sum + "");
            return;
        }
        for (int i = s; i < this.hours.length - num + 1; i++) {
            getHours(i + 1, num - 1, sum + this.hours[i], hour_list);    
        }
    }
    public List<String> getHours(int num) {
        List<String> hour_list = new ArrayList<>();
        getHours(0, num, 0, hour_list);
        return hour_list;
    }
    public void getMinutes(int s, int num, int sum, List<String> minute_list) {
        if(num == 0) {
            if (sum < 60)
                minute_list.add(sum < 10 ? "0"+sum : "" + sum);
            return;
        }
        for (int i = s; i < this.minutes.length - num + 1; i++) {
           getMinutes(i + 1, num - 1, sum + this.minutes[i], minute_list); 
        }
    }
    public List<String> getMinutes(int num) {
        List<String> minute_list = new ArrayList<>();
        getMinutes(0, num, 0, minute_list);
        return minute_list;
    }
    public List<String> readBinaryWatch(int turnedOn) {
        List<String> results = new ArrayList<>();
        if (turnedOn > 8) {
            return results;
        }
        for (int i = 0; i < 4 && i <= turnedOn; i++) {
            List<String> hours = getHours(i);
            List<String> minutes = getMinutes(turnedOn - i);
            for (String hour : hours) {
                for (String minute : minutes) {
                    results.add(hour + ':' + minute);
                }
            }
        }
        return results;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=401 lang=python3
#
# [401] \u4E8C\u8FDB\u5236\u624B\u8868
#
# @lc code=start
class Solution:
    def readBinaryWatch(self, turnedOn: int) -> List[str]:
        if turnedOn > 8:
            return []
        ms = {}
        for i in range(min([turnedOn, 5])):
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=404 lang=java
 *
 * [404] \u5DE6\u53F6\u5B50\u4E4B\u548C
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int sumOfLeftLeaves(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int sum = 0;
        if (root.left != null) {
            if (root.left.left == null && root.left.right == null)
                sum += root.left.val;
            sum += sumOfLeftLeaves(root.left);
        } 
        sum += sumOfLeftLeaves(root.right);
        return sum;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] \u6570\u5B57\u8F6C\u6362\u4E3A\u5341\u516D\u8FDB\u5236\u6570
 */
// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) {
        return "0"
    }
    const th = []
    for (let i = 7; i >= 0; i--) {
        var v = (num >> (4 * i)) & 0xf
        if (th.length > 0 || v > 0) {
            th.push(v < 10 ? String.fromCharCode('0'.charCodeAt() + v) : String.fromCharCode('a'.charCodeAt() + (v - 10)))
        }
    }
    return th.join('')
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] \u6700\u957F\u56DE\u6587\u4E32
 */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let rs = {}
    for (const ss of s) {
        let i = rs[ss]
        if (i === undefined) {
            i = 1
        } else {
            i += 1
        }
        rs[ss] = i
    }
    let is_ = false
    let j = 0
    for (const r in rs) {
        if (rs[r] % 2 === 1) {
            is_ = true
        }
        j += parseInt(rs[r] / 2)
    }
    return is_ ? j * 2 + 1: j * 2
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=41 lang=python3
#
# [41] \u7F3A\u5931\u7684\u7B2C\u4E00\u4E2A\u6B63\u6570
#
# @lc code=start
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)
        for i in range(n):
            if nums[i] <= 0:
                nums[i] = n + 1
        for i in range(n):
            num = abs(nums[i])
            if num <= n:
                nums[num  - 1] = - abs(nums[num - 1])
        for i in range(n):
            if nums[i] > 0:
                return i + 1
        return len(nums) + 1
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */
// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res.push('FizzBuzz')
        } else if (i % 3 === 0) {
            res.push('Fizz')
        } else if (i % 5 === 0) {
            res.push('Buzz')
        } else {
            res.push("" + i)
        }
    }
    return res
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] \u7B2C\u4E09\u5927\u7684\u6570
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let third = null
    let two = null
    let one = null
    for (let n of nums) {
        if (one === null || n >= one) {
            if (n === one) {
                continue
            }
            third = two
            two = one
            one = n
        } else if (two === null || n >= two) {
            if (n === two) {
                continue
            }
            third = two
            two = n
        } else if (third === null || n >= third) {
            third = n
        }
    }
    return third === null ? one : third
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] \u5B57\u7B26\u4E32\u76F8\u52A0
 */
// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = 0
    let f = 0
    let n1_len = num1.length
    let n2_len = num2.length
    let rs = ''
    while (i < n1_len || i < n2_len) {
        let n1 = i < n1_len ? parseInt(num1[n1_len - 1 - i]): 0
        let n2 = i < n2_len ? parseInt(num2[n2_len - 1 - i]) : 0
        let p = n1 + n2  + f
        if (p >= 10) {
            f = 1
            p = p % 10
        } else {
            f = 0
        }
        rs = p + rs
        i ++
    }
    if (f === 1) {
        rs = f + rs
    }
    return rs
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=42 lang=python3
#
# [42] \u63A5\u96E8\u6C34
#
# @lc code=start
class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) == 0 or len(height) == 1 or len(height) == 2:
            return 0
        x = 0 if height[0] > height[1] else 1
        y = [0, 0]
        for i in range(2, len(height)):
            if height[i] > height[i - 1]:
                hm = min(height[i], height[x])
                a = 0
                j = x
                for j in range(i - 1, x - 1, -1):
                    if height[j] >= height[i]:
                        break
                    a += hm - height[j]
                y.append(y[j] + a)
                if height[i] >= height[x]:
                    x = i
            else:
                y.append(y[-1])
        return y[-1]
# @lc code=end`,`#
# @lc app=leetcode.cn id=43 lang=python3
#
# [43] \u5B57\u7B26\u4E32\u76F8\u4E58
#
# @lc code=start
class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        x = []
        max_ = 1
        for i in range(len(num1) - 1, -1, -1):
            n1 = num1[i]
            s = '0' * (len(num1) - 1 - i)
            y = 0
            for j in range(len(num2) - 1, -1, -1):
                n2 = num2[j]
                n = int(n1) * int(n2) + y
                y = n // 10
                s = s + str(n % 10)
            s =  s + str(y)
            x.append(s)
            if len(s) > max_:
                max_ = len(s)
        y = 0
        r = ''
        for i in range(max_):
            s = 0
            for j in range(len(x)):
                if len(x[j]) > i:
                    s += int(x[j][i])
            s += y
            y = s // 10
            r = str(s % 10) + r
        r = str(y) + r 
        j = 0
        for i in range(len(r) - 1):
            if r[i] != '0':
                break
            j += 1
        return r[j:]
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] \u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570
 */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let sl = s.split(' ')
    let len = sl.length
    for (const ss of sl) {
        if (ss === '') {
            len -= 1
        }
    }
    return len
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=44 lang=python3
#
# [44] \u901A\u914D\u7B26\u5339\u914D
#
# @lc code=start
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        s = ' ' + s
        p = ' ' + p
        x = [[False] for _ in range(len(s))]
        x[0][0] = True
        for j in range(1, len(p)):
            if (p[j] == '*' and x[0][j - 1]):
                x[0].append(True)
            else:
                x[0].append(False)
        for i in range(1, len(s)):
            for j in range(1, len(p)):
                if p[j] == '*':
                    if x[i - 1][j] or x[i][j - 1] or x[i - 1][j - 1]:
                        x[i].append(True)
                    else:
                        x[i].append(False)
                elif p[j] == '?' or p[j] == s[i]:
                    x[i].append(x[i - 1][j - 1])
                else:
                    x[i].append(False)
        return x[len(s) - 1][len(p) - 1]
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] \u6392\u5217\u786C\u5E01
 */
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sum_ = 0
    for(let i = 1; i <= n; i ++) {
        if ((sum_ += i) >= n) {
            if (sum_ === n) {
                return i
            } 
            return i - 1
        }
    }
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=442 lang=python3
#
# [442] \u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u636E
#
# @lc code=start
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        l = len(nums)
        for n in nums:
            nums[(n - 1) % l] += l
        r = []
        for i in range(l):
            if nums[i] > 2 * l:
                r.append(i + 1)
        return r
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] \u627E\u5230\u6240\u6709\u6570\u7EC4\u4E2D\u6D88\u5931\u7684\u6570\u5B57
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i = 0
    while (i < nums.length) {
        let n = nums[i]
        if (nums[i] !== i + 1) {            
            nums[i] = nums[n - 1]
            nums[n - 1] = n
        }
        if (nums[i] == n) {
            i++
        }
    }
    let rs = []
    for (let i = 0; i < nums.length; i++) {
        nums[i] -= (i + 1)
        if (nums[i] !== 0) {
            rs.push(i + 1)
        }
    }
    return rs
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=45 lang=python3
#
# [45] \u8DF3\u8DC3\u6E38\u620F II
#
# @lc code=start
class Solution:
    def jump(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 0
        x = {0: 0}
        for i, n in enumerate(nums):
            if n == 0:
                continue
            k = x[i]
            if i + n + 1 >= len(nums):
                return k + 1
            for j in range(1, n + 1):
                if (j + i) not in x:
                    x[j + i] = k + 1
        return 0   
# @lc code=end`,`import java.util.Arrays;
/*
 * @lc app=leetcode.cn id=455 lang=java
 *
 * [455] \u5206\u53D1\u997C\u5E72
 */
// @lc code=start
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int sum = 0;
        int i = 0;
        for(int gg: g) {
            while (i < s.length && gg > s[i]) {
                i++;
            }
            if (i == s.length) {
                continue;
            } else {
                sum += 1;
                i++;
            }
        }
        return sum;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=459 lang=java
 *
 * [459] \u91CD\u590D\u7684\u5B50\u5B57\u7B26\u4E32
 */
// @lc code=start
class Solution {
    public boolean repeatedSubstringPattern(String s) {
        for (int i = 1; i <= s.length() / 2; i++) {
            if (s.length() % i != 0) {
                continue;
            }
            boolean is_ok = true;
            String sub = s.substring(0, i);
            for (int j = i; j < s.length(); j += i) {
                if (j + i > s.length() || !s.substring(j, j + i).equals(sub)) {
                    is_ok = false;
                    break;
                }
            }
            if (is_ok) {
                return true;
            }
        }
        return false;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=46 lang=python3
#
# [46] \u5168\u6392\u5217
#
# @lc code=start
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        x = [[n] for n in nums]
        for _ in range(len(nums) - 1):
            y = len(x)
            for i in range(y):
                for n in nums:
                    if n not in x[i]:
                        z = x[i].copy()
                        z.append(n)
                        x.append(z)
            x = x[y:]
        return x
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=461 lang=java
 *
 * [461] \u6C49\u660E\u8DDD\u79BB
 */
// @lc code=start
class Solution {
    public int hammingDistance(int x, int y) {
        int sum = 0;
        for (int i = 0; i < 32; i++) {
            if (((x >> i) & 1) != ((y >> i) & 1)) {
                sum++;
            }
        }
        return sum;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=463 lang=java
 *
 * [463] \u5C9B\u5C7F\u7684\u5468\u957F
 */
// @lc code=start
class Solution {
    public int islandPerimeter(int[][] grid) {
        int sum = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    if (i - 1 >= 0) {
                        if (grid[i - 1][j] == 0) sum++;
                    } else {
                        sum++;
                    }
                    if (i + 1 < grid.length) {
                        if (grid[i + 1][j] == 0) sum++;
                    } else {
                        sum++;
                    }
                    if (j - 1 >= 0) {
                        if (grid[i][j - 1] == 0) sum++;
                    } else {
                        sum++;
                    }
                    if (j + 1 < grid[i].length) {
                        if (grid[i][j + 1] == 0) sum ++;
                    } else {
                        sum++;
                    }
                }
            }
        }
        return sum;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=47 lang=python3
#
# [47] \u5168\u6392\u5217 II
#
# @lc code=start
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        x = [[i] for i, n in enumerate(nums) if n not in nums[:i]]
        for _ in range(len(nums) - 1):
            y = len(x)
            for i in range(y):
                for j in range(len(nums)):
                    if j not in x[i]:
                        z = x[i].copy()
                        z.append(j)
                        x.append(z)
            x = x[y:]
        y = []
        i = 0
        z = []
        for xx in x:
            s = 0
            zz = []
            for j in range(len(xx)):
                s += 10 ** j * nums[xx[j]]
                zz.append(nums[xx[j]])
            if s not in y:
                z.append(zz)
                y.append(s)
        return z
# @lc code=end`,`#
# @lc app=leetcode.cn id=48 lang=python3
#
# [48] \u65CB\u8F6C\u56FE\u50CF
#
# @lc code=start
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        for i in range(n):
            for j in range(n // 2):
                x = matrix[i][j]
                matrix[i][j] = matrix[i][n - 1 - j]
                matrix[i][n - 1 - j] = x
        for i in range(n):
            for j in range(n - i - 1):
                x = matrix[i][j]
                matrix[i][j] = matrix[n - 1 - j][n - 1 - i]
                matrix[n - 1 - j][n - 1 - i] = x
        return matrix
# @lc code=end`,`#
# @lc app=leetcode.cn id=49 lang=python3
#
# [49] \u5B57\u6BCD\u5F02\u4F4D\u8BCD\u5206\u7EC4
#
# @lc code=start
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        x = {}
        for s in strs:
            ss = ''.join(sorted(s))
            y = x.get(ss, [])
            y.append(s)
            x[ss] = y
        return list(x.values())
# @lc code=end`,`#
# @lc app=leetcode.cn id=5 lang=python3
#
# [5] \u6700\u957F\u56DE\u6587\u5B50\u4E32
#
# @lc code=start
class Solution:
    def longestPalindrome(self, s: str) -> str:
        max_str = s[0]
        s_len = len(s)
        for i in range(s_len):
            if i + 1 < s_len and s[i] == s[i + 1]:
                if len(max_str) < 2:
                    max_str = s[i: i + 2]
                for j in range(1, s_len):
                    if i - j < 0 or i + 1 + j > s_len - 1 or s[i - j] != s[i + 1 + j]:
                        ss = s[i - j + 1: i + 1 + j]  
                        if len(ss) > len(max_str):
                            max_str = ss
                        break
            if i + 2 < s_len and s[i] == s[i + 2]:
                if len(max_str) < 3:
                    max_str = s[i: i + 3]
                for j in range(1, s_len):
                    if i - j < 0 or i + 2 + j > s_len - 1 or s[i - j] != s[i + 2 + j]:
                        ss = s[i - j + 1: i + j + 2]  
                        if len(ss) > len(max_str):
                            max_str = ss
                        break
        return max_str
# @lc code=end`,`#
# @lc app=leetcode.cn id=50 lang=python3
#
# [50] Pow(x, n)
#
# @lc code=start
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if x == 0:
            return 0
        if n == 0:
            return 1
        if n < 0:
            x = 1 / x
        n = abs(n)
        r = x
        n -= 1
        while n > 0:
            s = x
            i = 1
            while n - i >= 0: 
                i = i * 2
                if n - i > 0:
                    s = s * s
                else:
                    n -= (i // 2)
            r *= s
        return r
# @lc code=end`,`#
# @lc app=leetcode.cn id=51 lang=python3
#
# [51] N \u7687\u540E
#
# @lc code=start
class Solution:
    result = []
    def snq(self, n, x, k):
        if k == n:
            Solution.result.append(x.copy())
            return
        for i in range(n):
            is_ok = True
            for xx in x:
                if xx[i] == 'Q':
                    is_ok = False
                    break
            if not is_ok:
                continue
            for j in range(len(x)):
                if i - len(x) + j >= 0 and x[j][i - len(x) + j] == 'Q':
                    is_ok = False
                    break
                if i + len(x) - j < n and x[j][i + len(x) - j] == 'Q':
                    is_ok = False
                    break
            if not is_ok:
                continue
            y = ['.'] * n
            y[i] = 'Q'
            x.append(''.join(y))
            self.snq(n, x, k + 1)
            x.pop()
    def solveNQueens(self, n: int) -> List[List[str]]:
        Solution.result = []
        self.snq(n, [], 0)
        return Solution.result
# @lc code=end`,`#
# @lc app=leetcode.cn id=52 lang=python3
#
# [52] N\u7687\u540E II
#
# @lc code=start
class Solution:
    result = 0
    def tnq(self, n, x, k):
        if k == n:
            Solution.result += 1
            return
        for i in range(n):
            is_ok = True
            for xx in x:
                if i == xx:
                    is_ok = False
                    break
            if not is_ok:
                continue
            for j in range(len(x)):
                if i - len(x) + j == x[j] or i + len(x) - j == x[j]:
                    is_ok = False
                    break
            if not is_ok:
                continue
            x.append(i)
            self.tnq(n, x, k + 1)
            x.pop()
    def totalNQueens(self, n: int) -> int:
        Solution.result = 0
        self.tnq(n, [], 0)
        return Solution.result
# @lc code=end`,`#
# @lc app=leetcode.cn id=53 lang=python3
#
# [53] \u6700\u5927\u5B50\u6570\u7EC4\u548C
#
# @lc code=start
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_ = nums[0]
        k = nums[0]
        for i in range(1, len(nums)):
            if nums[i] + k < nums[i]:
                k = nums[i]
            else:
                k = nums[i] + k
            if max_ < k:
                max_ = k
        return max_
# @lc code=end`,`#
# @lc app=leetcode.cn id=54 lang=python3
#
# [54] \u87BA\u65CB\u77E9\u9635
#
# @lc code=start
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        r = []
        i = 0
        while len(matrix) > 0 and len(matrix[0]) > 0:
            if i == 0:
                m = matrix[0]
                r.extend(m)
                del matrix[0]
            elif i == 1:
                for j in range(len(matrix)):
                    m = matrix[j][-1]
                    r.append(m)
                    del matrix[j][-1]
            elif i == 2:
                m = matrix[-1]
                del matrix[-1]
                for j in range(len(m) - 1, -1, -1):
                    r.append(m[j])
            elif i == 3:
                for j in range(len(matrix) - 1, -1, -1):
                    m = matrix[j][0]
                    r.append(m)
                    del matrix[j][0]
            i = (i + 1) % 4 
        return r
# @lc code=end`,`#
# @lc app=leetcode.cn id=55 lang=python3
#
# [55] \u8DF3\u8DC3\u6E38\u620F
#
# @lc code=start
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        max_ = 0
        for i, n in enumerate(nums):
            if max_ < i:
                return False
            if i + n >= len(nums) - 1:
                return True
            if max_ == i and n == 0:
                return False
            if i + n > max_:
                max_ = i + n
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=56 lang=python3
#
# [56] \u5408\u5E76\u533A\u95F4
#
# @lc code=start
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x:x[0])
        merge = []
        for interval in intervals:
            if not merge or merge[-1][1] < interval[0]:
                merge.append(interval)
            else:
                merge[-1][1] = max(merge[-1][1], interval[1])
        return merge
# @lc code=end`,`#
# @lc app=leetcode.cn id=57 lang=python3
#
# [57] \u63D2\u5165\u533A\u95F4
#
# @lc code=start
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        i = 0
        j = len(intervals) - 1
        while i <= j:
            k = (i + j) // 2
            if newInterval[0] == intervals[k][0]:
                i = k + 1
                break
            elif newInterval[0] > intervals[k][0]:
                i = k + 1
            else:
                j = k - 1
        intervals.insert(i, newInterval)
        insert = []
        for interval in intervals:
            if not insert or insert[-1][1] < interval[0]:
                insert.append(interval)
            else:
                insert[-1][1] = max(insert[-1][1], interval[1])
        return insert
# @lc code=end`,`#
# @lc app=leetcode.cn id=58 lang=python3
#
# [58] \u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6
#
# @lc code=start
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        end_word_len = 0
        sign = False
        for ss in s:
            if ss == ' ':
                sign = True
            elif sign:
                sign = False
                end_word_len = 1
            else:
                end_word_len += 1
        return end_word_len
# @lc code=end`,`#
# @lc app=leetcode.cn id=59 lang=python3
#
# [59] \u87BA\u65CB\u77E9\u9635 II
#
# @lc code=start
class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        x = [[0] * n for _ in range(n)]
        k = n * n
        i = n // 2
        j = (n - 1) // 2
        x[i][j] = k
        k -= 1
        m = 2
        if n % 2 == 0:
            x[i][j + 1] = k
            k -= 1
            j += 1
            x[i - 1][j] = k
            k -= 1
            i -= 1
            x[i][j - 1] = k
            k -= 1
            j -= 1
            m += 1
        while k > 0:
            j -= 1
            for n in range(m):
                x[i + n][j] = k
                k -= 1
            i += n
            for n in range(m):
                x[i][j + n + 1] = k
                k -= 1
            j = j + n + 1
            for n in range(m):
                x[i - n - 1][j] = k
                k -= 1
            i = i - n - 1
            for n in range(m):
                x[i][j - n - 1] = k
                k -= 1
            j = j - n - 1
            m += 2
        return x                
# @lc code=end`,`#
# @lc app=leetcode.cn id=6 lang=python3
#
# [6] Z \u5B57\u5F62\u53D8\u6362
#
# @lc code=start
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        end_str = ''
        for i in range(numRows):
            sl = len(s) / (2 * numRows - 2) 
            sl = int(sl) + 1 if sl > int(sl) else int(sl)
            for j in range(sl):
                k = i + j * (2 * numRows - 2)
                if k >= len(s):
                    break
                end_str += s[k]
                if i != 0 and i != (numRows - 1):
                    k1 = (numRows - i) * 2 - 2 + k
                    if k1 >= len(s):
                        break
                    end_str += s[k1]   
        return end_str
# @lc code=end`,`#
# @lc app=leetcode.cn id=60 lang=python3
#
# [60] \u6392\u5217\u5E8F\u5217
#
# @lc code=start
class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        sum_ = 1
        for i in range(1, n):
            sum_ *= i
        i = 1
        s = ''
        x = [str(i) for i in range(1, n + 1)]
        while i < n:
            j = (k - 1) // sum_
            s += x[j]
            del x[j]
            k = k % sum_
            sum_ //= (n - i)
            i += 1
        return s + x[0]
# @lc code=end`,`#
# @lc app=leetcode.cn id=61 lang=python3
#
# [61] \u65CB\u8F6C\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if head == None:
            return None
        i = k
        while i != 0:
            l = 0
            x = ListNode(next=head)
            hd = x
            start = None
            while hd.next != None:
                i -= 1
                if i <= 0:
                    if start == None:
                        start = x
                    else:
                        start = start.next
                l += 1
                hd = hd.next
            if start == x:
                return head
            if i <= 0:
                hd.next = head
                s = start.next
                start.next = None
                return s
            else:
                i %= l
        return head
# @lc code=end`,`#
# @lc app=leetcode.cn id=62 lang=python3
#
# [62] \u4E0D\u540C\u8DEF\u5F84
#
# @lc code=start
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        x = [1] * n
        for _ in range(1, m):
            for j in range(1, n):
                x[j] = x[j] + x[j - 1]
        return x[-1]
# @lc code=end`,`#
# @lc app=leetcode.cn id=63 lang=python3
#
# [63] \u4E0D\u540C\u8DEF\u5F84 II
#
# @lc code=start
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        x = [0] * len(obstacleGrid[0])
        if obstacleGrid[0][0] == 0:
            x[0] = 1
        else:
            return 0
        for i, o in enumerate(obstacleGrid):
            for j in range(len(o)):
                if obstacleGrid[i][j] == 0:
                    if j == 0:
                        continue
                    x[j] = x[j - 1] + x[j]
                else:
                    x[j] = 0
        return x[-1]
# @lc code=end`,`#
# @lc app=leetcode.cn id=64 lang=python3
#
# [64] \u6700\u5C0F\u8DEF\u5F84\u548C
#
# @lc code=start
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        x = {}
        def mps(i, j):
            g = grid[i][j]
            if i == 0 and j == 0:
                return g
            s1 = str(i * 200 + (j - 1))
            if s1 not in x and j > 0:
                x[s1] = mps(i, j - 1)
            if i == 0:
                return x[s1] + g
            s2 = str((i - 1) * 200 + j)
            if s2 not in x:
                x[s2] = mps(i - 1, j)
            if j == 0:
                return x[s2] + g
            return g + (x[s1] if x[s1] < x[s2] else x[s2])
        return mps(len(grid) - 1, len(grid[0]) - 1)
# @lc code=end`,`#
# @lc app=leetcode.cn id=65 lang=python3
#
# [65] \u6709\u6548\u6570\u5B57
#
# @lc code=start
class Solution:
    def isNumber(self, s: str) -> bool:
        is_e = False
        is_f = False
        is_i = False
        is_s = False
        for ss in s:
            if (ss  == '-' or ss == '+') and not is_s and not is_i and not is_f:
                is_s = True
                continue
            if ss == '.' and not is_f and not is_e:
                is_f = True
                continue
            if (ss == 'e' or ss == 'E') and not is_e and is_i:
                is_i = False
                is_e = True
                is_f = False
                is_s = False
                continue
            if ord(ss) >= ord('0') and ord(ss) <= ord('9'):
                is_i = True
            else:
                return False
        return is_i
# @lc code=end`,`#
# @lc app=leetcode.cn id=66 lang=python3
#
# [66] \u52A0\u4E00
#
# @lc code=start
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        j = 1
        for i in range(len(digits) - 1, -1, -1):
            if j == 0:
                break
            if digits[i] + j == 10:
                digits[i] = 0
            else:
                digits[i] += j
                j = 0
        if j == 1:
            digits.insert(0, 1)
        return digits
# @lc code=end`,`#
# @lc app=leetcode.cn id=67 lang=python3
#
# [67] \u4E8C\u8FDB\u5236\u6C42\u548C
#
# @lc code=start
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        if len(b) > len(a):
            c = b
            b = a
            a = c
        i = len(a) - len(b)
        k = 0
        end_str = ''
        for j in range(len(b) - 1, -1, -1):
            x = int(b[j]) + int(a[j + i]) + k
            if x <= 1:
                end_str = str(x) + end_str
                k = 0
            else:
                if x == 2:
                    end_str = '0' + end_str
                elif x == 3:
                    end_str = '1' + end_str
                k = 1
        for j in range(i - 1, -1, -1):
            x = int(a[j]) + k
            if x == 2:
                end_str = '0' + end_str
                k = 1
            else:
                end_str = str(x) + end_str
                k = 0
        if k == 1:
            end_str = '1' + end_str
        return end_str
# @lc code=end`,`#
# @lc app=leetcode.cn id=68 lang=python3
#
# [68] \u6587\u672C\u5DE6\u53F3\u5BF9\u9F50
#
# @lc code=start
class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        i = 0
        x = []
        while i < len(words):
            sum_ = 0
            xx = []
            while i < len(words):
                w_l = len(words[i])
                if sum_ + len(xx) + w_l <= maxWidth:
                    xx.append(words[i])
                    i += 1
                    sum_ += w_l
                else:
                    break
            x.append((xx, sum_))
        for i in range(len(x) - 1):
            if len(x[i][0]) == 1:
                x[i] = x[i][0][0] + (' ' * (maxWidth - x[i][1]))
                continue
            j = len(x[i][0]) - 1
            ss = maxWidth - x[i][1]
            s = ''
            while j > 0:
                s = x[i][0][j] + s
                sm = ss // j
                s = ' ' * sm + s
                ss = ss - sm
                j -= 1
            s = x[i][0][0] + s
            x[i] = s
        x[-1] = ' '.join(x[-1][0])
        x[-1] = x[-1] + (' ' * (maxWidth - len(x[-1])))
        return x
# @lc code=end`,`#
# @lc app=leetcode.cn id=69 lang=python3
#
# [69] Sqrt(x)
#
# @lc code=start
class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 1:
            return 1
        xx = 0
        yy = x
        while True:
            zz = (xx + yy) // 2
            zz2 = zz * zz
            zz12 = (zz + 1) * (zz + 1)
            if zz2 <= x and zz12 > x:
                return zz
            if zz12 == x:
                return zz + 1
            if zz2 > x:
                yy = zz
            else:
                xx = zz
# @lc code=end`,`#
# @lc app=leetcode.cn id=7 lang=python3
#
# [7] \u6574\u6570\u53CD\u8F6C
#
# @lc code=start
class Solution:
    MAX_VALUE = 2 ** 31 - 1
    MIN_VALUE = - 2 ** 31
    def reverse(self, x: int) -> int:
        r_x = 0
        symbol = -1 if x < 0 else 1
        x = symbol * x
        while x != 0:
            a = x % 10
            x = x // 10
            if symbol > 0:
                c = Solution.MAX_VALUE % 10
                d = Solution.MAX_VALUE // 10
            else:
                c = (-1 * Solution.MIN_VALUE) % 10
                d = -1 * Solution.MIN_VALUE // 10
            if (r_x == d and a > c) or (r_x > d):
                return 0 
            r_x = r_x * 10 + a
        return symbol * r_x
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=70 lang=java
 *
 * [70] \u722C\u697C\u68AF
 */
// @lc code=start
class Solution {
    public int climbStairs(int n) {
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return 2;
        }
        int s = 1;
        int e = 2;
        for (int i = 3; i <= n; i++) {
            int a = s + e;
            s = e;
            e = a;
        }
        return e;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=70 lang=python3
#
# [70] \u722C\u697C\u68AF
#
# @lc code=start
class Solution:
    def climbStairs(self, n: int) -> int:
        if n < 3:
            return n
        a = 1
        b = 2
        for _ in range(n - 2):
            b = a + b
            a = b - a
        return b
# @lc code=end`,`#
# @lc app=leetcode.cn id=71 lang=python3
#
# [71] \u7B80\u5316\u8DEF\u5F84
#
# @lc code=start
class Solution:
    def simplifyPath(self, path: str) -> str:
        ps = path.split('/')
        x = []
        for p in ps:
            if p == '' or p == '.':
                continue
            elif p == '..':
                if len(x) > 0:
                    x.pop()
            else:
                x.append(p)
        return '/' + '/'.join(x)
# @lc code=end`,`#
# @lc app=leetcode.cn id=72 lang=python3
#
# [72] \u7F16\u8F91\u8DDD\u79BB
#
# @lc code=start
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        word2 = ' ' + word2
        x = [i for i in range(len(word2))]
        y = [0] * len(word2)
        for w1 in word1:
            for i, w2 in enumerate(word2):
                if i == 0:
                    y[i] = x[i] + 1
                elif w1 == w2:
                    y[i] = x[i - 1]
                else:
                    y[i] = min([x[i - 1], x[i], y[i - 1]]) + 1
            x, y = y, x
        return x[-1]
# @lc code=end`,`#
# @lc app=leetcode.cn id=73 lang=python3
#
# [73] \u77E9\u9635\u7F6E\u96F6
#
# @lc code=start
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        is_c = False
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    if j == 0:
                        is_c = True
                    else:
                        matrix[0][j] = 0
                    matrix[i][0] = 0
        for i in range(len(matrix) - 1, -1, -1):
            for j in range(len(matrix[0]) - 1, -1, -1):
                if j != 0:
                    if matrix[0][j] == 0 or matrix[i][0] == 0:
                        matrix[i][j] = 0
                elif is_c:
                    matrix[i][0] = 0
# @lc code=end`,`#
# @lc app=leetcode.cn id=74 lang=python3
#
# [74] \u641C\u7D22\u4E8C\u7EF4\u77E9\u9635
#
# @lc code=start
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        i = len(matrix) - 1
        j = 0
        while j < len(matrix[0]) and i >= 0:
            if matrix[i][j] == target:
                return True
            elif matrix[i][j] > target:
                i -= 1
            else:
                j += 1
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=75 lang=python3
#
# [75] \u989C\u8272\u5206\u7C7B
#
# @lc code=start
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i, j, k = 0, 0, 0
        for n in nums:
            if n == 0:
                i += 1
            elif n == 1:
                j += 1
            else:
                k += 1
        for l in range(i):
            nums[l] = 0
        for l in range(j):
            nums[l + i] = 1
        for l in range(k):
            nums[l + i + j] = 2
# @lc code=end`,`#
# @lc app=leetcode.cn id=76 lang=python3
#
# [76] \u6700\u5C0F\u8986\u76D6\u5B50\u4E32
#
# @lc code=start
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        t_map = {}
        for tt in t:
            t_map[tt] = t_map.get(tt, 0) + 1
        j = 0
        t_sum = 0
        min_sub_str = ''
        for i in range(len(s)):
            if s[i] in t_map:
                t_map[s[i]] -= 1
                if t_map[s[i]] >= 0:
                    t_sum += 1
            if t_sum == len(t):
                while j < len(s) and t_sum == len(t):
                    if s[j] in t_map:
                        t_map[s[j]] += 1
                        if t_map[s[j]] > 0:
                            t_sum -= 1
                    j += 1
                if min_sub_str is '' or len(min_sub_str) > (i + 1 - j):
                    min_sub_str = s[j-1: i + 1]
        return min_sub_str
# @lc code=end`,`#
# @lc app=leetcode.cn id=77 lang=python3
#
# [77] \u7EC4\u5408
#
# @lc code=start
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        if k > n:
            return []
        r = [[i + 1] for i in range(n + 1 - k)]
        for l in range(k - 1):
            lr = len(r)
            for m in range(lr):
                rr = r[m]
                for nn in range(rr[-1] + 1,n + 3 - k + l):
                    rrr = rr.copy()
                    rrr.append(nn)
                    r.append(rrr)
            r = r[lr:]
        return r
# @lc code=end`,`#
# @lc app=leetcode.cn id=78 lang=python3
#
# [78] \u5B50\u96C6
#
# @lc code=start
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = [[n] for n in nums]
        result.append([])
        rm = [[i] for i in range(len(nums))]
        while len(rm) > 0:
            r = rm[0]
            del rm[0]
            for i in range(r[-1] + 1, len(nums)):
                rn = r.copy()
                rn.append(i)
                rm.append(rn)
                r_m = []
                for j in rn:
                    r_m.append(nums[j])
                result.append(r_m)
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=79 lang=python3
#
# [79] \u5355\u8BCD\u641C\u7D22
#
# @lc code=start
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        exit_ = False
        def is_exit(i, j, ls):
            nonlocal exit_
            k = len(ls) - 1
            if exit_:
                return
            if board[i][j] == word[k]:
                if k == len(word) - 1:
                    exit_ = True
                    return
                for ii, jj in [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]:
                    if ii >= 0 and ii < len(board) and jj >= 0 and jj < len(board[ii]) and (ii, jj) not in ls:
                        ls.append((ii, jj))
                        is_exit(ii, jj, ls)
                        ls.pop()
        for i in range(len(board)):
            for j in range(len(board[i])):
                is_exit(i, j, [(i, j)])
        return exit_
# @lc code=end`,`#
# @lc app=leetcode.cn id=796 lang=python3
#
# [796] \u65CB\u8F6C\u5B57\u7B26\u4E32
#
# @lc code=start
class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False
        if len(s) == 1:
            return s == goal
        for _ in range(0, len(s)):
            s = s[1:]+s[0]
            if s == goal:
                return True
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=8 lang=python3
#
# [8] \u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570 (atoi)
#
# @lc code=start
class Solution:
    MAX_VALUE = 2 ** 31 -1
    MIN_VALUE = -2 ** 31
    a = MAX_VALUE // 10
    b = MAX_VALUE % 10
    c = - MIN_VALUE // 10
    d = (- MIN_VALUE) % 10
    def myAtoi(self, s: str) -> int:
        sum_num = 0
        sign = False
        symbol = 1
        for ss in s:
            if '0' <= ss and ss <= '9':
                sign = True
                i = int(ss)
                if symbol > 0 and ((sum_num == Solution.a and i > Solution.b) or sum_num > Solution.a):
                    return Solution.MAX_VALUE
                if symbol < 0 and ((sum_num == Solution.c and i > Solution.d) or sum_num > Solution.c):
                    return Solution.MIN_VALUE
                sum_num = sum_num * 10 + i
            else:
                if sign:
                    break
                if ss == '-' or ss == '+':
                    symbol = -1 if ss == '-' else 1
                    sign = True
                    continue
                if ss != ' ':
                    break
        return symbol * sum_num
# @lc code=end`,`#
# @lc app=leetcode.cn id=80 lang=python3
#
# [80] \u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879 II
#
# @lc code=start
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) < 3:
            return len(nums)
        i = 2
        while i < len(nums):
            if nums[i] == nums[i - 1] and nums[i] == nums[i - 2]:
                del nums[i]
            else:
                i += 1
        return len(nums)
# @lc code=end`,`#
# @lc app=leetcode.cn id=81 lang=python3
#
# [81] \u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4 II
#
# @lc code=start
from typing import List
class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        s = 0
        e = len(nums) - 1
        while s <= e:
            m = (s + e) // 2
            if nums[m] == target:
                return True
            if nums[s] == nums[m] and nums[m] == nums[e]:
                s += 1
                e -= 1
            elif nums[s] <= nums[m]:
                if nums[s] <= target and target <= nums[m]:
                    e = m - 1
                else:
                    s = m + 1
            else:
                if nums[m] < target and target <= nums[-1]:
                    s = m + 1
                else:
                    e = m - 1
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=82 lang=python3
#
# [82] \u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20 II
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        root = head
        f = head
        is_i = False
        while head is not None:
            if head.next is not None and head.val == head.next.val:
                head.next = head.next.next
                is_i = True
                continue
            if is_i:
                if f == head:
                    f = head.next
                    head = head.next
                    root = f
                else:
                    f.next = head.next
                    head = head.next
                is_i = False
            else:
                f = head
                head = head.next
        return root
# @lc code=end`,`#
# @lc app=leetcode.cn id=83 lang=python3
#
# [83] \u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        values = []
        if head == None:
            return head
        hsc = head
        values.append(hsc.val)
        hc = head.next
        while hc != None:
            if hc.val not in values:
                values.append(hc.val)
                hsc = hc
                hc = hc.next
            else:
                hsc.next = hc.next
                hc = hsc.next
        return head
# @lc code=end`,`#
# @lc app=leetcode.cn id=84 lang=python3
#
# [84] \u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62
#
# @lc code=start
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        n = len(heights)
        left = [0] * n
        right = [n] * n
        l = []
        for i in range(n):
            while len(l) > 0 and heights[l[-1]] >= heights[i]:
                right[l[-1]] = i
                l.pop()
            left[i] = l[-1] if len(l) > 0 else -1
            l.append(i)
        return max([(right[i] - left[i] - 1) * heights[i] for i in range(n)]) if len(heights) > 0 else 0 
# @lc code=end`,`#
# @lc app=leetcode.cn id=86 lang=python3
#
# [86] \u5206\u9694\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: ListNode, x: int) -> ListNode:
        root = ListNode()
        root.next = head
        front = root
        hf = root
        while head is not None:
            if head.val < x:
                r = head
                hf.next = head.next
                head = head.next
                if hf == front:
                    hf = r
                r.next = front.next 
                front.next = r
                front = r
            else:
                hf = head
                head = head.next
        return root.next
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] \u94FE\u8868\u7684\u4E2D\u95F4\u7ED3\u70B9
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fast = head
    let slow = head
    while (true) {
        if (fast === null || fast.next === null) {
            return slow
        }
        slow = slow.next
        fast = fast.next.next
    }
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=88 lang=python3
#
# [88] \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4
#
# @lc code=start
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        while m > 0 and n > 0:
            if nums1[m - 1] < nums2[n - 1]:
                nums1[m + n - 1] = nums2[n - 1]
                n -= 1
            else:
                nums1[m + n - 1] = nums1[m - 1]
                m -= 1
        if n > 0:
            while n > 0:
                nums1[n - 1] = nums2[n - 1]
                n -= 1
# @lc code=end`,`#
# @lc app=leetcode.cn id=89 lang=python3
#
# [89] \u683C\u96F7\u7F16\u7801
#
# @lc code=start
class Solution:
    def grayCode(self, n: int) -> List[int]:
        result = [0, 1]
        for i in range(1, n):
            j = 1 << i
            for k in range(len(result) - 1, -1, -1):
                result.append(result[k] + j) 
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=9 lang=python3
#
# [9] \u56DE\u6587\u6570
#
# @lc code=start
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        y = x
        x_sum = 0
        while y != 0:
            z = y % 10
            y = y // 10
            x_sum = x_sum * 10 + z
        return x == x_sum
# @lc code=end`,`#
# @lc app=leetcode.cn id=90 lang=python3
#
# [90] \u5B50\u96C6 II
#
# @lc code=start
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums = sorted(nums)
        result = []
        rm = set()
        def swd(r):
            if len(r) == len(nums):
                s = []
                a = ''
                for i, rr in enumerate(r):
                    if rr == 1:
                        s.append(nums[i])
                        a +=str(nums[i])
                if a not in rm:
                    result.append(s)
                    rm.add(a)
                return
            r.append(1)
            swd(r)
            r.pop()
            r.append(0)
            swd(r)
            r.pop()
        swd([])
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=91 lang=python3
#
# [91] \u89E3\u7801\u65B9\u6CD5
#
# @lc code=start
class Solution:
    def numDecodings(self, s: str) -> int:
        a = 0
        b = 1
        c = 0
        for i in range(1, len(s) + 1):
            c = 0
            if s[i - 1] != '0':
                c += b
            if i > 1 and s[i - 2] != '0' and int(s[i - 2: i]) <= 26:
                c += a
            a, b = b, c
        return c
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=92 lang=java
 *
 * [92] \u53CD\u8F6C\u94FE\u8868 II
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode root = new ListNode();
        root.next = head;
        ListNode first = root;
        boolean hasLeft = false;
        ListNode middle = null;
        ListNode end = null;
        int i = 1;
        while(head != null) {
            if (i == left) {
                hasLeft = true;
            } 
            ListNode x = head.next;
            if (!hasLeft) {
                first = head;
            } else {
                if (i == left) {
                    end = head;
                }
                head.next = middle;
                middle = head;
            }
            if (i == right) {
                first.next = middle;
                end.next = x;
                break;
            }
            i ++;
            head = x;
        }
        return root.next;
    }
}
// @lc code=end`,`import java.util.ArrayList;
import java.util.List;
/*
 * @lc app=leetcode.cn id=93 lang=java
 *
 * [93] \u590D\u539F IP \u5730\u5740
 */
// @lc code=start
class Solution {
    public boolean isIPN(String str) {
        if ((str.length() == 1 || str.charAt(0) != '0') && new Integer(str) <= 255) {
            return true;
        }
        return false;
    }
    public List<String> restoreIpAddresses(String s) {
        List<String> ips = new ArrayList();
        if (s.length() > 12) {
            return ips;
        }
        for (int i = 0; i < 4; i++) {
            if (i >= s.length() - 3) break; 
            String s1 = s.substring(0, i + 1);
            if (!isIPN(s1)) continue;
            for (int j = i + 1; j < i + 4; j++) {
                if (j >= s.length() - 2) break;
                String s2 = s.substring(i +  1, j + 1);
                if(!isIPN(s2)) continue;
                for (int k = j + 1; k < j + 4; k++) {
                    if (k >= s.length() - 1) break;
                    String s3 = s.substring(j + 1, k + 1);
                    if (!isIPN(s3)) continue;
                    String s4 = s.substring(k + 1, s.length());
                    if (!isIPN(s4)) continue;
                    ips.add(s1 + '.' + s2 + '.' + s3 + '.' + s4);
                }
            }
        }
        return ips;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=94 lang=python3
#
# [94] \u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        def it(r):
            if r != None:
                it(r.left)
                result.append(r.val)
                it(r.right)
        it(root)
        return result
# @lc code=end`,`import java.util.LinkedList;
import java.util.List;
/*
 * @lc app=leetcode.cn id=95 lang=java
 *
 * [95] \u4E0D\u540C\u7684\u4E8C\u53C9\u641C\u7D22\u6811 II
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<TreeNode>  gt(int s, int e) {
        List<TreeNode> allTrees = new LinkedList<>();
        if (s > e) {
            allTrees.add(null);
            return allTrees;
        }
        for (int i = s; i <=e; i++) {
            List<TreeNode> leftTrees = gt(s, i - 1);
            List<TreeNode> rightTrees = gt(i + 1, e);
            for (TreeNode leftNode : leftTrees) {
                for (TreeNode rightNode : rightTrees) {
                    allTrees.add(new TreeNode(i, leftNode, rightNode));
                }
            }
        }
        return allTrees;
    }
    public List<TreeNode> generateTrees(int n) {
        if (n == 0) {
            return new LinkedList();
        }
        return gt(1, n);
    }
}
// @lc code=end`,`import java.util.HashMap;
import java.util.Map;
/*
 * @lc app=leetcode.cn id=96 lang=java
 *
 * [96] \u4E0D\u540C\u7684\u4E8C\u53C9\u641C\u7D22\u6811
 */
// @lc code=start
class Solution {
    static Map<Integer, Integer> map = new HashMap<>();
    public int nt(int s, int e) {
        int es = (e * 100) + s;
        if (map.containsKey(es)) {
            return map.get(es);
        }
        if (s > e) {
            return 1;
        }
        int a = 0;
        for (int i = s; i <= e; i++) {
            int l = nt(s, i - 1);
            int r = nt(i + 1, e);
            a += (l * r);
        }
        map.put(es, a);
        return a;
    }
    public int numTrees(int n) {
        if (n == 0) {
            return 0;
        }
        return nt(1, n);
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=97 lang=java
 *
 * [97] \u4EA4\u9519\u5B57\u7B26\u4E32
 */
// @lc code=start
class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length()) {
            return false;
        }
        int a = s1.length();
        int b = s2.length();
        boolean[] m = new boolean[b + 1];
        m[0] = true;
        for (int i = 0; i <= a; i++) {
            for (int j = 0; j <= b; j++) {
                int p = i + j - 1;
                if (i > 0) {
                    m[j] = (m[j] && s1.charAt(i - 1) == s3.charAt(p));
                } 
                if (j > 0) {
                    m[j] |= (m[j - 1] && s2.charAt(j - 1) == s3.charAt(p));
                }
            }
        }
        return m[b];
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=98 lang=java
 *
 * [98] \u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    static Integer min = null;
    public boolean iVBST(TreeNode r) {
        if (r == null) {
            return false;
        }
        boolean l= iVBST(r.left);
        if (min != null && r.val <= min) {
            return true;
        } else {
            min = r.val;
        }
        boolean rr = iVBST(r.right);
        return l | rr;
    }
    public boolean isValidBST(TreeNode root) {
        min = null;
        return !iVBST(root);
    }
}
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
import javax.swing.tree.TreeNode;
/*
 * @lc app=leetcode.cn id=99 lang=java
 *
 * [99] \u6062\u590D\u4E8C\u53C9\u641C\u7D22\u6811
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public void recoverTree(TreeNode root) {
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode x = null, y = null, f = null;
        while (!stack.isEmpty() || root != null) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            if (f != null && f.val > root.val) {
                y = root;
                if (x == null) {
                    x = f;
                } else {
                    // \u627E\u5230\u4E24\u6B21
                    break;
                }
            }
            f = root;
            root = root.right;
        }
        swap(x, y);
    }
    public void swap(TreeNode x, TreeNode y) {
        int tmp = x.val;
        x.val = y.val;
        y.val = tmp;
    }
}
// @lc code=end`],d5=["\u4E24\u6570\u4E4B\u548C","\u4E24\u6570\u4E4B\u548C","\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D","\u76F8\u540C\u7684\u6811","\u5BF9\u79F0\u4E8C\u53C9\u6811","\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386","\u4E8C\u53C9\u6811\u7684\u952F\u9F7F\u5F62\u5C42\u5E8F\u904D\u5386","\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6","\u6700\u957F\u91CD\u590D\u5B50\u4E32","\u4ECE\u524D\u5E8F\u4E0E\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811","\u4ECE\u4E2D\u5E8F\u4E0E\u540E\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811","\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386-ii","\u5C06\u6709\u5E8F\u6570\u7EC4\u8F6C\u6362\u4E3A\u4E8C\u53C9\u641C\u7D22\u6811","\u6709\u5E8F\u94FE\u8868\u8F6C\u6362\u4E8C\u53C9\u641C\u7D22\u6811","\u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668","\u5E73\u8861\u4E8C\u53C9\u6811","\u4E8C\u53C9\u6811\u7684\u6700\u5C0F\u6DF1\u5EA6","\u8DEF\u5F84\u603B\u548C","\u8DEF\u5F84\u603B\u548C-ii","\u4E8C\u53C9\u6811\u5C55\u5F00\u4E3A\u94FE\u8868","\u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488","\u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488-ii","\u6768\u8F89\u4E09\u89D2","\u6768\u8F89\u4E09\u89D2-ii","\u4EA4\u66FF\u6253\u5370\u5B57\u7B26\u4E32","\u6574\u6570\u8F6C\u7F57\u9A6C\u6570\u5B57","\u4E09\u89D2\u5F62\u6700\u5C0F\u8DEF\u5F84\u548C","\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A","\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A-ii","\u9A8C\u8BC1\u56DE\u6587\u4E32","\u6700\u957F\u8FDE\u7EED\u5E8F\u5217","\u6C42\u6839\u8282\u70B9\u5230\u53F6\u8282\u70B9\u6570\u5B57\u4E4B\u548C","\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570","\u88AB\u56F4\u7ED5\u7684\u533A\u57DF","\u5206\u5272\u56DE\u6587\u4E32","\u5206\u5272\u56DE\u6587\u4E32-ii","\u514B\u9686\u56FE","\u52A0\u6CB9\u7AD9","\u5206\u53D1\u7CD6\u679C","\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57","\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57-ii","\u590D\u5236\u5E26\u968F\u673A\u6307\u9488\u7684\u94FE\u8868","\u5355\u8BCD\u62C6\u5206","\u6700\u957F\u516C\u5171\u524D\u7F00","\u73AF\u5F62\u94FE\u8868","\u73AF\u5F62\u94FE\u8868-ii","\u91CD\u6392\u94FE\u8868","\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386","\u4E8C\u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386","lru-\u7F13\u5B58","\u5BF9\u94FE\u8868\u8FDB\u884C\u63D2\u5165\u6392\u5E8F","\u6392\u5E8F\u94FE\u8868","\u4E09\u6570\u4E4B\u548C","\u9006\u6CE2\u5170\u8868\u8FBE\u5F0F\u6C42\u503C","\u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD","\u4E58\u79EF\u6700\u5927\u5B50\u6570\u7EC4","\u5BFB\u627E\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u6700\u5C0F\u503C","\u6700\u5C0F\u6808","\u6700\u63A5\u8FD1\u7684\u4E09\u6570\u4E4B\u548C","\u76F8\u4EA4\u94FE\u8868","\u5BFB\u627E\u5CF0\u503C","\u4E24\u4E2A\u76F8\u540C\u5B57\u7B26\u4E4B\u95F4\u7684\u6700\u957F\u5B50\u5B57\u7B26\u4E32","\u6BD4\u8F83\u7248\u672C\u53F7","excel\u8868\u5217\u540D\u79F0","\u591A\u6570\u5143\u7D20","\u7535\u8BDD\u53F7\u7801\u7684\u5B57\u6BCD\u7EC4\u5408","excel-\u8868\u5217\u5E8F\u53F7","\u56DB\u6570\u4E4B\u548C","\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9","\u98A0\u5012\u4E8C\u8FDB\u5236\u4F4D","\u4F4D-1-\u7684\u4E2A\u6570","\u4E24\u6570\u76F8\u52A0","\u6709\u6548\u7684\u62EC\u53F7","\u5FEB\u4E50\u6570","\u79FB\u9664\u94FE\u8868\u5143\u7D20","\u540C\u6784\u5B57\u7B26\u4E32","\u53CD\u8F6C\u94FE\u8868","\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868","\u5B58\u5728\u91CD\u590D\u5143\u7D20","\u4F7F\u4E24\u5B57\u7B26\u4E32\u4E92\u4E3A\u5B57\u6BCD\u5F02\u4F4D\u8BCD\u7684\u6700\u5C11\u6B65\u9AA4\u6570","\u5B58\u5728\u91CD\u590D\u5143\u7D20-ii","\u62EC\u53F7\u751F\u6210","\u7528\u961F\u5217\u5B9E\u73B0\u6808","\u7FFB\u8F6C\u4E8C\u53C9\u6811","\u6C47\u603B\u533A\u95F4","\u5408\u5E76k\u4E2A\u5347\u5E8F\u94FE\u8868","2-\u7684\u5E42","\u7528\u6808\u5B9E\u73B0\u961F\u5217","\u77E5\u9053\u79D8\u5BC6\u7684\u4EBA\u6570","\u56DE\u6587\u94FE\u8868","\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148","\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9","\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9","\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD","k-\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868","\u4E8C\u53C9\u6811\u7684\u6240\u6709\u8DEF\u5F84","\u5404\u4F4D\u76F8\u52A0","\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879","\u4E11\u6570","\u4E22\u5931\u7684\u6570\u5B57","\u79FB\u9664\u5143\u7D20","\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C","\u5B8C\u5168\u5E73\u65B9\u6570","\u5B8C\u5168\u5E73\u65B9\u6570","\u5B9E\u73B0-str-str","\u79FB\u52A8\u96F6","\u4E24\u6570\u76F8\u9664","\u5355\u8BCD\u89C4\u5F8B","nim-\u6E38\u620F","\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32","\u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32","\u533A\u57DF\u548C\u68C0\u7D22-\u6570\u7EC4\u4E0D\u53EF\u53D8","\u4E0B\u4E00\u4E2A\u6392\u5217","\u53BB\u9664\u91CD\u590D\u5B57\u6BCD","\u6700\u957F\u6709\u6548\u62EC\u53F7","\u96F6\u94B1\u5151\u6362","3-\u7684\u5E42","\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4","\u6BD4\u7279\u4F4D\u8BA1\u6570","\u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E","4-\u7684\u5E42","\u53CD\u8F6C\u5B57\u7B26\u4E32","\u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5143\u97F3\u5B57\u6BCD","\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6","\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E","\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6-ii","\u6709\u6548\u7684\u6570\u72EC","\u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570","\u89E3\u6570\u72EC","\u731C\u6570\u5B57\u5927\u5C0F","\u5916\u89C2\u6570\u5217","\u8D4E\u91D1\u4FE1","\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26","\u627E\u4E0D\u540C","\u7EC4\u5408\u603B\u548C","\u5224\u65AD\u5B50\u5E8F\u5217","\u81F3\u5C11\u6709-k-\u4E2A\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32","\u7EC4\u5408\u603B\u548C-ii","\u4E8C\u8FDB\u5236\u624B\u8868","\u4E8C\u8FDB\u5236\u624B\u8868","\u5DE6\u53F6\u5B50\u4E4B\u548C","\u6570\u5B57\u8F6C\u6362\u4E3A\u5341\u516D\u8FDB\u5236\u6570","\u6700\u957F\u56DE\u6587\u4E32","\u7F3A\u5931\u7684\u7B2C\u4E00\u4E2A\u6B63\u6570","fizz-buzz","\u7B2C\u4E09\u5927\u7684\u6570","\u5B57\u7B26\u4E32\u76F8\u52A0","\u63A5\u96E8\u6C34","\u5B57\u7B26\u4E32\u76F8\u4E58","\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570","\u901A\u914D\u7B26\u5339\u914D","\u6392\u5217\u786C\u5E01","\u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u636E","\u627E\u5230\u6240\u6709\u6570\u7EC4\u4E2D\u6D88\u5931\u7684\u6570\u5B57","\u8DF3\u8DC3\u6E38\u620F-ii","\u5206\u53D1\u997C\u5E72","\u91CD\u590D\u7684\u5B50\u5B57\u7B26\u4E32","\u5168\u6392\u5217","\u6C49\u660E\u8DDD\u79BB","\u5C9B\u5C7F\u7684\u5468\u957F","\u5168\u6392\u5217-ii","\u65CB\u8F6C\u56FE\u50CF","\u5B57\u6BCD\u5F02\u4F4D\u8BCD\u5206\u7EC4","\u6700\u957F\u56DE\u6587\u5B50\u4E32","pow-x-n","n-\u7687\u540E","n\u7687\u540E-ii","\u6700\u5927\u5B50\u6570\u7EC4\u548C","\u87BA\u65CB\u77E9\u9635","\u8DF3\u8DC3\u6E38\u620F","\u5408\u5E76\u533A\u95F4","\u63D2\u5165\u533A\u95F4","\u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6","\u87BA\u65CB\u77E9\u9635-ii","z-\u5B57\u5F62\u53D8\u6362","\u6392\u5217\u5E8F\u5217","\u65CB\u8F6C\u94FE\u8868","\u4E0D\u540C\u8DEF\u5F84","\u4E0D\u540C\u8DEF\u5F84-ii","\u6700\u5C0F\u8DEF\u5F84\u548C","\u6709\u6548\u6570\u5B57","\u52A0\u4E00","\u4E8C\u8FDB\u5236\u6C42\u548C","\u6587\u672C\u5DE6\u53F3\u5BF9\u9F50","sqrt-x","\u6574\u6570\u53CD\u8F6C","\u722C\u697C\u68AF","\u722C\u697C\u68AF","\u7B80\u5316\u8DEF\u5F84","\u7F16\u8F91\u8DDD\u79BB","\u77E9\u9635\u7F6E\u96F6","\u641C\u7D22\u4E8C\u7EF4\u77E9\u9635","\u989C\u8272\u5206\u7C7B","\u6700\u5C0F\u8986\u76D6\u5B50\u4E32","\u7EC4\u5408","\u5B50\u96C6","\u5355\u8BCD\u641C\u7D22","\u65CB\u8F6C\u5B57\u7B26\u4E32","\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570-atoi","\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879-ii","\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4-ii","\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20-ii","\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20","\u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62","\u5206\u9694\u94FE\u8868","\u94FE\u8868\u7684\u4E2D\u95F4\u7ED3\u70B9","\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4","\u683C\u96F7\u7F16\u7801","\u56DE\u6587\u6570","\u5B50\u96C6-ii","\u89E3\u7801\u65B9\u6CD5","\u53CD\u8F6C\u94FE\u8868-ii","\u590D\u539F-ip-\u5730\u5740","\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386","\u4E0D\u540C\u7684\u4E8C\u53C9\u641C\u7D22\u6811-ii","\u4E0D\u540C\u7684\u4E8C\u53C9\u641C\u7D22\u6811","\u4EA4\u9519\u5B57\u7B26\u4E32","\u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811","\u6062\u590D\u4E8C\u53C9\u641C\u7D22\u6811"],f5=["js","py","py","py","py","java","java","py","py","java","java","java","py","java","py","py","py","py","java","java","java","java","py","py","java","py","java","py","java","py","java","java","py","java","js","java","py","js","java","py","js","py","js","py","py","js","js","py","py","js","java","java","py","java","java","java","java","py","py","py","java","py","java","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","java","py","py","py","py","py","py","py","py","py","py","py","py","py","java","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","java","py","java","js","js","py","js","js","js","py","py","js","py","js","py","js","py","java","java","py","java","java","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","java","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","js","py","py","py","py","py","java","java","py","java","java","java","java","java"],v5=[[0,1],[1,1],[71,2],[109,3],[163,5],[174,6],[185,7],[198,8],[208,9],[2,10],[14,11],[25,12],[32,13],[43,14],[52,15],[58,16],[65,17],[67,18],[68,19],[72,20],[77,21],[81,22],[85,23],[92,24],[94,25],[97,26],[100,27],[104,28],[106,29],[110,30],[112,31],[114,32],[117,33],[119,34],[124,35],[126,36],[128,37],[130,38],[134,39],[137,40],[143,41],[147,42],[148,43],[150,44],[154,45],[157,46],[160,47],[161,48],[162,49],[164,50],[165,51],[166,52],[167,53],[168,54],[169,55],[170,56],[171,57],[172,58],[173,59],[175,60],[176,61],[177,62],[178,63],[179,64],[180,65],[181,66],[182,67],[183,68],[184,69],[186,70],[187,70],[188,71],[189,72],[190,73],[191,74],[192,75],[193,76],[194,77],[195,78],[196,79],[199,80],[200,81],[201,82],[202,83],[203,84],[204,86],[206,88],[207,89],[209,90],[210,91],[211,92],[212,93],[213,94],[214,95],[215,96],[216,97],[217,98],[218,99],[3,100],[4,101],[5,102],[6,103],[7,104],[9,105],[10,106],[11,107],[12,108],[13,109],[15,110],[16,111],[17,112],[18,113],[19,114],[20,116],[21,117],[22,118],[23,119],[26,120],[27,121],[28,122],[29,125],[30,128],[31,129],[33,130],[34,131],[35,132],[36,133],[37,134],[38,135],[39,136],[40,137],[41,138],[42,139],[44,141],[45,142],[46,143],[47,144],[48,145],[49,146],[50,147],[51,148],[53,150],[54,151],[55,152],[56,153],[57,155],[59,160],[60,162],[62,165],[63,168],[64,169],[66,171],[69,190],[70,191],[73,202],[74,203],[75,205],[76,206],[78,217],[80,219],[82,225],[83,226],[84,228],[86,231],[87,232],[89,234],[90,235],[91,237],[93,242],[95,257],[96,258],[98,263],[99,268],[101,278],[102,279],[103,279],[105,283],[107,290],[108,292],[111,303],[113,316],[115,322],[116,326],[118,338],[120,342],[121,344],[122,345],[123,349],[125,350],[127,367],[129,374],[131,383],[132,387],[133,389],[135,392],[136,395],[138,401],[139,401],[140,404],[141,405],[142,409],[144,412],[145,414],[146,415],[149,434],[151,441],[152,442],[153,448],[155,455],[156,459],[158,461],[159,463],[197,796],[205,876],[8,1044],[24,1195],[61,1624],[79,2186],[88,2327]],p5=["js","py","java"],h5=[[0,1],[34,131],[37,134],[40,137],[42,139],[45,142],[46,143],[49,146],[141,405],[142,409],[144,412],[145,414],[146,415],[149,434],[151,441],[153,448],[205,876]],g5=[[1,1],[71,2],[109,3],[163,5],[174,6],[185,7],[198,8],[208,9],[2,10],[14,11],[25,12],[32,13],[43,14],[52,15],[58,16],[65,17],[67,18],[68,19],[72,20],[77,21],[81,22],[85,23],[92,24],[94,25],[97,26],[100,27],[104,28],[106,29],[110,30],[112,31],[114,32],[117,33],[119,34],[124,35],[126,36],[128,37],[130,38],[134,39],[137,40],[143,41],[147,42],[148,43],[150,44],[154,45],[157,46],[160,47],[161,48],[162,49],[164,50],[165,51],[166,52],[167,53],[168,54],[169,55],[170,56],[171,57],[172,58],[173,59],[175,60],[176,61],[177,62],[178,63],[179,64],[180,65],[181,66],[182,67],[183,68],[184,69],[187,70],[188,71],[189,72],[190,73],[191,74],[192,75],[193,76],[194,77],[195,78],[196,79],[199,80],[200,81],[201,82],[202,83],[203,84],[204,86],[206,88],[207,89],[209,90],[210,91],[213,94],[3,100],[4,101],[7,104],[12,108],[15,110],[16,111],[17,112],[22,118],[23,119],[27,121],[29,125],[36,133],[39,136],[41,138],[44,141],[47,144],[48,145],[57,155],[59,160],[63,168],[64,169],[66,171],[69,190],[70,191],[73,202],[74,203],[75,205],[76,206],[78,217],[80,219],[82,225],[83,226],[84,228],[86,231],[87,232],[89,234],[90,235],[91,237],[93,242],[95,257],[96,258],[98,263],[99,268],[101,278],[103,279],[105,283],[107,290],[108,292],[111,303],[113,316],[115,322],[116,326],[118,338],[120,342],[121,344],[122,345],[123,349],[125,350],[127,367],[129,374],[131,383],[132,387],[133,389],[135,392],[136,395],[139,401],[152,442],[197,796],[8,1044],[61,1624],[79,2186]],m5=[[186,70],[211,92],[212,93],[214,95],[215,96],[216,97],[217,98],[218,99],[5,102],[6,103],[9,105],[10,106],[11,107],[13,109],[18,113],[19,114],[20,116],[21,117],[26,120],[28,122],[30,128],[31,129],[33,130],[35,132],[38,135],[50,147],[51,148],[53,150],[54,151],[55,152],[56,153],[60,162],[62,165],[102,279],[138,401],[140,404],[155,455],[156,459],[158,461],[159,463],[24,1195],[88,2327]],y5={code:c5,name:d5,type:f5,number:v5,allTypes:p5,js:h5,py:g5,java:m5},b5={github:"https://github.com/ncdhz",codeMessage:{java:{name:"Java"},py:{name:"Python"},js:{name:"JavaScript"},c:{name:"C Language"},cpp:{name:"C++"},cs:{name:"C#"},ts:{name:"TypeScript"},rb:{name:"Ruby"},swift:{name:"Swift"},scala:{name:"Scala"},kt:{name:"Kotlin"},rust:{name:"Rust"},php:{name:"PHP"},rkt:{name:"Racket"},elixir:{name:"Elixir"},dart:{name:"Dart"},go:{name:"Go"}},itemSpace:10,menuSpace:5,authorImg:"./logo.png",startFlag:"code=start",endFlag:"code=end"};function kt(n,e){C5(n)&&(n="100%");var t=x5(n);return n=e===360?n:Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(String(n*e),10)/100),Math.abs(n-e)<1e-6?1:(e===360?n=(n<0?n%e+e:n%e)/parseFloat(String(e)):n=n%e/parseFloat(String(e)),n)}function qu(n){return Math.min(1,Math.max(0,n))}function C5(n){return typeof n=="string"&&n.indexOf(".")!==-1&&parseFloat(n)===1}function x5(n){return typeof n=="string"&&n.indexOf("%")!==-1}function KS(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function Yu(n){return n<=1?"".concat(Number(n)*100,"%"):n}function Pi(n){return n.length===1?"0"+n:String(n)}function w5(n,e,t){return{r:kt(n,255)*255,g:kt(e,255)*255,b:kt(t,255)*255}}function s0(n,e,t){n=kt(n,255),e=kt(e,255),t=kt(t,255);var r=Math.max(n,e,t),a=Math.min(n,e,t),i=0,o=0,l=(r+a)/2;if(r===a)o=0,i=0;else{var u=r-a;switch(o=l>.5?u/(2-r-a):u/(r+a),r){case n:i=(e-t)/u+(e<t?6:0);break;case e:i=(t-n)/u+2;break;case t:i=(n-e)/u+4;break}i/=6}return{h:i,s:o,l}}function Ef(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*(6*t):t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function S5(n,e,t){var r,a,i;if(n=kt(n,360),e=kt(e,100),t=kt(t,100),e===0)a=t,i=t,r=t;else{var o=t<.5?t*(1+e):t+e-t*e,l=2*t-o;r=Ef(l,o,n+1/3),a=Ef(l,o,n),i=Ef(l,o,n-1/3)}return{r:r*255,g:a*255,b:i*255}}function rp(n,e,t){n=kt(n,255),e=kt(e,255),t=kt(t,255);var r=Math.max(n,e,t),a=Math.min(n,e,t),i=0,o=r,l=r-a,u=r===0?0:l/r;if(r===a)i=0;else{switch(r){case n:i=(e-t)/l+(e<t?6:0);break;case e:i=(t-n)/l+2;break;case t:i=(n-e)/l+4;break}i/=6}return{h:i,s:u,v:o}}function _5(n,e,t){n=kt(n,360)*6,e=kt(e,100),t=kt(t,100);var r=Math.floor(n),a=n-r,i=t*(1-e),o=t*(1-a*e),l=t*(1-(1-a)*e),u=r%6,s=[t,o,i,i,l,t][u],c=[l,t,t,o,i,i][u],d=[i,i,l,t,t,o][u];return{r:s*255,g:c*255,b:d*255}}function ap(n,e,t,r){var a=[Pi(Math.round(n).toString(16)),Pi(Math.round(e).toString(16)),Pi(Math.round(t).toString(16))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function k5(n,e,t,r,a){var i=[Pi(Math.round(n).toString(16)),Pi(Math.round(e).toString(16)),Pi(Math.round(t).toString(16)),Pi(P5(r))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function P5(n){return Math.round(parseFloat(n)*255).toString(16)}function c0(n){return Yt(n)/255}function Yt(n){return parseInt(n,16)}function O5(n){return{r:n>>16,g:(n&65280)>>8,b:n&255}}var ip={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function lo(n){var e={r:0,g:0,b:0},t=1,r=null,a=null,i=null,o=!1,l=!1;return typeof n=="string"&&(n=I5(n)),typeof n=="object"&&(la(n.r)&&la(n.g)&&la(n.b)?(e=w5(n.r,n.g,n.b),o=!0,l=String(n.r).substr(-1)==="%"?"prgb":"rgb"):la(n.h)&&la(n.s)&&la(n.v)?(r=Yu(n.s),a=Yu(n.v),e=_5(n.h,r,a),o=!0,l="hsv"):la(n.h)&&la(n.s)&&la(n.l)&&(r=Yu(n.s),i=Yu(n.l),e=S5(n.h,r,i),o=!0,l="hsl"),Object.prototype.hasOwnProperty.call(n,"a")&&(t=n.a)),t=KS(t),{ok:o,format:n.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}var T5="[-\\+]?\\d+%?",N5="[-\\+]?\\d*\\.\\d+%?",Ka="(?:".concat(N5,")|(?:").concat(T5,")"),Mf="[\\s|\\(]+(".concat(Ka,")[,|\\s]+(").concat(Ka,")[,|\\s]+(").concat(Ka,")\\s*\\)?"),Af="[\\s|\\(]+(".concat(Ka,")[,|\\s]+(").concat(Ka,")[,|\\s]+(").concat(Ka,")[,|\\s]+(").concat(Ka,")\\s*\\)?"),Cr={CSS_UNIT:new RegExp(Ka),rgb:new RegExp("rgb"+Mf),rgba:new RegExp("rgba"+Af),hsl:new RegExp("hsl"+Mf),hsla:new RegExp("hsla"+Af),hsv:new RegExp("hsv"+Mf),hsva:new RegExp("hsva"+Af),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function I5(n){if(n=n.trim().toLowerCase(),n.length===0)return!1;var e=!1;if(ip[n])n=ip[n],e=!0;else if(n==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=Cr.rgb.exec(n);return t?{r:t[1],g:t[2],b:t[3]}:(t=Cr.rgba.exec(n),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Cr.hsl.exec(n),t?{h:t[1],s:t[2],l:t[3]}:(t=Cr.hsla.exec(n),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Cr.hsv.exec(n),t?{h:t[1],s:t[2],v:t[3]}:(t=Cr.hsva.exec(n),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Cr.hex8.exec(n),t?{r:Yt(t[1]),g:Yt(t[2]),b:Yt(t[3]),a:c0(t[4]),format:e?"name":"hex8"}:(t=Cr.hex6.exec(n),t?{r:Yt(t[1]),g:Yt(t[2]),b:Yt(t[3]),format:e?"name":"hex"}:(t=Cr.hex4.exec(n),t?{r:Yt(t[1]+t[1]),g:Yt(t[2]+t[2]),b:Yt(t[3]+t[3]),a:c0(t[4]+t[4]),format:e?"name":"hex8"}:(t=Cr.hex3.exec(n),t?{r:Yt(t[1]+t[1]),g:Yt(t[2]+t[2]),b:Yt(t[3]+t[3]),format:e?"name":"hex"}:!1)))))))))}function la(n){return Boolean(Cr.CSS_UNIT.exec(String(n)))}var Ff=function(){function n(e,t){e===void 0&&(e=""),t===void 0&&(t={});var r;if(e instanceof n)return e;typeof e=="number"&&(e=O5(e)),this.originalInput=e;var a=lo(e);this.originalInput=e,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=t.format)!==null&&r!==void 0?r:a.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return n.prototype.isDark=function(){return this.getBrightness()<128},n.prototype.isLight=function(){return!this.isDark()},n.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},n.prototype.getLuminance=function(){var e=this.toRgb(),t,r,a,i=e.r/255,o=e.g/255,l=e.b/255;return i<=.03928?t=i/12.92:t=Math.pow((i+.055)/1.055,2.4),o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),l<=.03928?a=l/12.92:a=Math.pow((l+.055)/1.055,2.4),.2126*t+.7152*r+.0722*a},n.prototype.getAlpha=function(){return this.a},n.prototype.setAlpha=function(e){return this.a=KS(e),this.roundA=Math.round(100*this.a)/100,this},n.prototype.toHsv=function(){var e=rp(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},n.prototype.toHsvString=function(){var e=rp(this.r,this.g,this.b),t=Math.round(e.h*360),r=Math.round(e.s*100),a=Math.round(e.v*100);return this.a===1?"hsv(".concat(t,", ").concat(r,"%, ").concat(a,"%)"):"hsva(".concat(t,", ").concat(r,"%, ").concat(a,"%, ").concat(this.roundA,")")},n.prototype.toHsl=function(){var e=s0(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},n.prototype.toHslString=function(){var e=s0(this.r,this.g,this.b),t=Math.round(e.h*360),r=Math.round(e.s*100),a=Math.round(e.l*100);return this.a===1?"hsl(".concat(t,", ").concat(r,"%, ").concat(a,"%)"):"hsla(".concat(t,", ").concat(r,"%, ").concat(a,"%, ").concat(this.roundA,")")},n.prototype.toHex=function(e){return e===void 0&&(e=!1),ap(this.r,this.g,this.b,e)},n.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},n.prototype.toHex8=function(e){return e===void 0&&(e=!1),k5(this.r,this.g,this.b,this.a,e)},n.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},n.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},n.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(t,", ").concat(r,")"):"rgba(".concat(e,", ").concat(t,", ").concat(r,", ").concat(this.roundA,")")},n.prototype.toPercentageRgb=function(){var e=function(t){return"".concat(Math.round(kt(t,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},n.prototype.toPercentageRgbString=function(){var e=function(t){return Math.round(kt(t,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},n.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+ap(this.r,this.g,this.b,!1),t=0,r=Object.entries(ip);t<r.length;t++){var a=r[t],i=a[0],o=a[1];if(e===o)return i}return!1},n.prototype.toString=function(e){var t=Boolean(e);e=e!=null?e:this.format;var r=!1,a=this.a<1&&this.a>=0,i=!t&&a&&(e.startsWith("hex")||e==="name");return i?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},n.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},n.prototype.clone=function(){return new n(this.toString())},n.prototype.lighten=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l+=e/100,t.l=qu(t.l),new n(t)},n.prototype.brighten=function(e){e===void 0&&(e=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new n(t)},n.prototype.darken=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l-=e/100,t.l=qu(t.l),new n(t)},n.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},n.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},n.prototype.desaturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s-=e/100,t.s=qu(t.s),new n(t)},n.prototype.saturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s+=e/100,t.s=qu(t.s),new n(t)},n.prototype.greyscale=function(){return this.desaturate(100)},n.prototype.spin=function(e){var t=this.toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,new n(t)},n.prototype.mix=function(e,t){t===void 0&&(t=50);var r=this.toRgb(),a=new n(e).toRgb(),i=t/100,o={r:(a.r-r.r)*i+r.r,g:(a.g-r.g)*i+r.g,b:(a.b-r.b)*i+r.b,a:(a.a-r.a)*i+r.a};return new n(o)},n.prototype.analogous=function(e,t){e===void 0&&(e=6),t===void 0&&(t=30);var r=this.toHsl(),a=360/t,i=[this];for(r.h=(r.h-(a*e>>1)+720)%360;--e;)r.h=(r.h+a)%360,i.push(new n(r));return i},n.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new n(e)},n.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var t=this.toHsv(),r=t.h,a=t.s,i=t.v,o=[],l=1/e;e--;)o.push(new n({h:r,s:a,v:i})),i=(i+l)%1;return o},n.prototype.splitcomplement=function(){var e=this.toHsl(),t=e.h;return[this,new n({h:(t+72)%360,s:e.s,l:e.l}),new n({h:(t+216)%360,s:e.s,l:e.l})]},n.prototype.onBackground=function(e){var t=this.toRgb(),r=new n(e).toRgb();return new n({r:r.r+(t.r-r.r)*t.a,g:r.g+(t.g-r.g)*t.a,b:r.b+(t.b-r.b)*t.a})},n.prototype.triad=function(){return this.polyad(3)},n.prototype.tetrad=function(){return this.polyad(4)},n.prototype.polyad=function(e){for(var t=this.toHsl(),r=t.h,a=[this],i=360/e,o=1;o<e;o++)a.push(new n({h:(r+o*i)%360,s:t.s,l:t.l}));return a},n.prototype.equals=function(e){return this.toRgbString()===new n(e).toRgbString()},n}(),Gu=2,d0=.16,E5=.05,M5=.05,A5=.15,zS=5,HS=4,F5=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function f0(n){var e=n.r,t=n.g,r=n.b,a=rp(e,t,r);return{h:a.h*360,s:a.s,v:a.v}}function Xu(n){var e=n.r,t=n.g,r=n.b;return"#".concat(ap(e,t,r,!1))}function j5(n,e,t){var r=t/100,a={r:(e.r-n.r)*r+n.r,g:(e.g-n.g)*r+n.g,b:(e.b-n.b)*r+n.b};return a}function v0(n,e,t){var r;return Math.round(n.h)>=60&&Math.round(n.h)<=240?r=t?Math.round(n.h)-Gu*e:Math.round(n.h)+Gu*e:r=t?Math.round(n.h)+Gu*e:Math.round(n.h)-Gu*e,r<0?r+=360:r>=360&&(r-=360),r}function p0(n,e,t){if(n.h===0&&n.s===0)return n.s;var r;return t?r=n.s-d0*e:e===HS?r=n.s+d0:r=n.s+E5*e,r>1&&(r=1),t&&e===zS&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function h0(n,e,t){var r;return t?r=n.v+M5*e:r=n.v-A5*e,r>1&&(r=1),Number(r.toFixed(2))}function eu(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=[],r=lo(n),a=zS;a>0;a-=1){var i=f0(r),o=Xu(lo({h:v0(i,a,!0),s:p0(i,a,!0),v:h0(i,a,!0)}));t.push(o)}t.push(Xu(r));for(var l=1;l<=HS;l+=1){var u=f0(r),s=Xu(lo({h:v0(u,l),s:p0(u,l),v:h0(u,l)}));t.push(s)}return e.theme==="dark"?F5.map(function(c){var d=c.index,f=c.opacity,p=Xu(j5(lo(e.backgroundColor||"#141414"),lo(t[d]),f*100));return p}):t}var xo={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},jf={},Df={};Object.keys(xo).forEach(function(n){jf[n]=eu(xo[n]),jf[n].primary=jf[n][5],Df[n]=eu(xo[n],{theme:"dark",backgroundColor:"#141414"}),Df[n].primary=Df[n][5]});var g0=[],ul=[],D5="insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";function L5(){var n=document.createElement("style");return n.setAttribute("type","text/css"),n}function R5(n,e){if(e=e||{},n===void 0)throw new Error(D5);var t=e.prepend===!0?"prepend":"append",r=e.container!==void 0?e.container:document.querySelector("head"),a=g0.indexOf(r);a===-1&&(a=g0.push(r)-1,ul[a]={});var i;return ul[a]!==void 0&&ul[a][t]!==void 0?i=ul[a][t]:(i=ul[a][t]=L5(),t==="prepend"?r.insertBefore(i,r.childNodes[0]):r.appendChild(i)),n.charCodeAt(0)===65279&&(n=n.substr(1,n.length)),i.styleSheet?i.styleSheet.cssText+=n:i.textContent+=n,i}function m0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){$5(n,a,t[a])})}return n}function $5(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function y0(n){return typeof n=="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(typeof n.icon=="object"||typeof n.icon=="function")}function op(n,e,t){return t?ep(n.tag,m0({key:e},t,n.attrs),(n.children||[]).map(function(r,a){return op(r,"".concat(e,"-").concat(n.tag,"-").concat(a))})):ep(n.tag,m0({key:e},n.attrs),(n.children||[]).map(function(r,a){return op(r,"".concat(e,"-").concat(n.tag,"-").concat(a))}))}function WS(n){return eu(n)[0]}function US(n){return n?Array.isArray(n)?n:[n]:[]}var B5=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,b0=!1,V5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:B5;dn(function(){b0||(typeof window<"u"&&window.document&&window.document.documentElement&&R5(e,{prepend:!0}),b0=!0)})},K5=["icon","primaryColor","secondaryColor"];function z5(n,e){if(n==null)return{};var t=H5(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,r)||(t[r]=n[r]))}return t}function H5(n,e){if(n==null)return{};var t={},r=Object.keys(n),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}function Os(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){W5(n,a,t[a])})}return n}function W5(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var El={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function U5(n){var e=n.primaryColor,t=n.secondaryColor;El.primaryColor=e,El.secondaryColor=t||WS(e),El.calculated=!!t}function q5(){return Os({},El)}var Wo=function(e,t){var r=Os({},e,t.attrs),a=r.icon,i=r.primaryColor,o=r.secondaryColor,l=z5(r,K5),u=El;if(i&&(u={primaryColor:i,secondaryColor:o||WS(i)}),V5(),y0(a),!y0(a))return null;var s=a;return s&&typeof s.icon=="function"&&(s=Os({},s,{icon:s.icon(u.primaryColor,u.secondaryColor)})),op(s.icon,"svg-".concat(s.name),Os({},l,{"data-icon":s.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}))};Wo.props={icon:Object,primaryColor:String,secondaryColor:String,focusable:String};Wo.inheritAttrs=!1;Wo.displayName="IconBase";Wo.getTwoToneColors=q5;Wo.setTwoToneColors=U5;const Hh=Wo;function Y5(n,e){return Q5(n)||Z5(n,e)||X5(n,e)||G5()}function G5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X5(n,e){if(!!n){if(typeof n=="string")return C0(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C0(n,e)}}function C0(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Z5(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(n);!(a=(o=t.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(u){i=!0,l=u}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function Q5(n){if(Array.isArray(n))return n}function qS(n){var e=US(n),t=Y5(e,2),r=t[0],a=t[1];return Hh.setTwoToneColors({primaryColor:r,secondaryColor:a})}function J5(){var n=Hh.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var e7=["class","icon","spin","rotate","tabindex","twoToneColor","onClick"];function n7(n,e){return i7(n)||a7(n,e)||r7(n,e)||t7()}function t7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r7(n,e){if(!!n){if(typeof n=="string")return x0(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x0(n,e)}}function x0(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function a7(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(n);!(a=(o=t.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(u){i=!0,l=u}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function i7(n){if(Array.isArray(n))return n}function w0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){lp(n,a,t[a])})}return n}function lp(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o7(n,e){if(n==null)return{};var t=l7(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,r)||(t[r]=n[r]))}return t}function l7(n,e){if(n==null)return{};var t={},r=Object.keys(n),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}qS("#1890ff");var Uo=function(e,t){var r,a=w0({},e,t.attrs),i=a.class,o=a.icon,l=a.spin,u=a.rotate,s=a.tabindex,c=a.twoToneColor,d=a.onClick,f=o7(a,e7),p=(r={anticon:!0},lp(r,"anticon-".concat(o.name),Boolean(o.name)),lp(r,i,i),r),g=l===""||!!l||o.name==="loading"?"anticon-spin":"",y=s;y===void 0&&d&&(y=-1,f.tabindex=y);var h=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,m=US(c),b=n7(m,2),C=b[0],x=b[1];return v("span",w0({role:"img","aria-label":o.name},f,{onClick:d,class:p}),[v(Hh,{class:g,icon:o,primaryColor:C,secondaryColor:x,style:h},null)])};Uo.props={spin:Boolean,rotate:Number,icon:Object,twoToneColor:String};Uo.displayName="AntdIcon";Uo.inheritAttrs=!1;Uo.getTwoToneColor=J5;Uo.setTwoToneColor=qS;const tn=Uo;var u7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};const s7=u7;function S0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){c7(n,a,t[a])})}return n}function c7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Wh=function(e,t){var r=S0({},e,t.attrs);return v(tn,S0({},r,{icon:s7}),null)};Wh.displayName="ArrowLeftOutlined";Wh.inheritAttrs=!1;const d7=Wh;var f7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};const v7=f7;function _0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){p7(n,a,t[a])})}return n}function p7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Uh=function(e,t){var r=_0({},e,t.attrs);return v(tn,_0({},r,{icon:v7}),null)};Uh.displayName="ArrowRightOutlined";Uh.inheritAttrs=!1;const h7=Uh;var g7={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};const m7=g7;function k0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){y7(n,a,t[a])})}return n}function y7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var qh=function(e,t){var r=k0({},e,t.attrs);return v(tn,k0({},r,{icon:m7}),null)};qh.displayName="BarsOutlined";qh.inheritAttrs=!1;const b7=qh;var C7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"}}]},name:"calendar",theme:"outlined"};const x7=C7;function P0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){w7(n,a,t[a])})}return n}function w7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Yh=function(e,t){var r=P0({},e,t.attrs);return v(tn,P0({},r,{icon:x7}),null)};Yh.displayName="CalendarOutlined";Yh.inheritAttrs=!1;const YS=Yh;var S7={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"filled"};const _7=S7;function O0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){k7(n,a,t[a])})}return n}function k7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Gh=function(e,t){var r=O0({},e,t.attrs);return v(tn,O0({},r,{icon:_7}),null)};Gh.displayName="CaretDownFilled";Gh.inheritAttrs=!1;const P7=Gh;var O7={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"};const T7=O7;function T0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){N7(n,a,t[a])})}return n}function N7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Xh=function(e,t){var r=T0({},e,t.attrs);return v(tn,T0({},r,{icon:T7}),null)};Xh.displayName="CaretDownOutlined";Xh.inheritAttrs=!1;const I7=Xh;var E7={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"}}]},name:"caret-up",theme:"outlined"};const M7=E7;function N0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){A7(n,a,t[a])})}return n}function A7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Zh=function(e,t){var r=N0({},e,t.attrs);return v(tn,N0({},r,{icon:M7}),null)};Zh.displayName="CaretUpOutlined";Zh.inheritAttrs=!1;const F7=Zh;var j7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};const D7=j7;function I0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){L7(n,a,t[a])})}return n}function L7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Qh=function(e,t){var r=I0({},e,t.attrs);return v(tn,I0({},r,{icon:D7}),null)};Qh.displayName="CheckCircleFilled";Qh.inheritAttrs=!1;const Cu=Qh;var R7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"};const $7=R7;function E0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){B7(n,a,t[a])})}return n}function B7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Jh=function(e,t){var r=E0({},e,t.attrs);return v(tn,E0({},r,{icon:$7}),null)};Jh.displayName="CheckCircleOutlined";Jh.inheritAttrs=!1;const eg=Jh;var V7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};const K7=V7;function M0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){z7(n,a,t[a])})}return n}function z7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var ng=function(e,t){var r=M0({},e,t.attrs);return v(tn,M0({},r,{icon:K7}),null)};ng.displayName="CheckOutlined";ng.inheritAttrs=!1;const Cd=ng;var H7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"};const W7=H7;function A0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){U7(n,a,t[a])})}return n}function U7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var tg=function(e,t){var r=A0({},e,t.attrs);return v(tn,A0({},r,{icon:W7}),null)};tg.displayName="ClockCircleOutlined";tg.inheritAttrs=!1;const GS=tg;var q7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"};const Y7=q7;function F0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){G7(n,a,t[a])})}return n}function G7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var rg=function(e,t){var r=F0({},e,t.attrs);return v(tn,F0({},r,{icon:Y7}),null)};rg.displayName="CloseCircleFilled";rg.inheritAttrs=!1;const Jr=rg;var X7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"};const Z7=X7;function j0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Q7(n,a,t[a])})}return n}function Q7(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var ag=function(e,t){var r=j0({},e,t.attrs);return v(tn,j0({},r,{icon:Z7}),null)};ag.displayName="CloseCircleOutlined";ag.inheritAttrs=!1;const ig=ag;var J7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"};const eN=J7;function D0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){nN(n,a,t[a])})}return n}function nN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var og=function(e,t){var r=D0({},e,t.attrs);return v(tn,D0({},r,{icon:eN}),null)};og.displayName="CloseOutlined";og.inheritAttrs=!1;const ea=og;var tN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const rN=tN;function L0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){aN(n,a,t[a])})}return n}function aN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var lg=function(e,t){var r=L0({},e,t.attrs);return v(tn,L0({},r,{icon:rN}),null)};lg.displayName="CopyOutlined";lg.inheritAttrs=!1;const ug=lg;var iN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"}}]},name:"copyright-circle",theme:"outlined"};const oN=iN;function R0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){lN(n,a,t[a])})}return n}function lN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var sg=function(e,t){var r=R0({},e,t.attrs);return v(tn,R0({},r,{icon:oN}),null)};sg.displayName="CopyrightCircleOutlined";sg.inheritAttrs=!1;const XS=sg;var uN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};const sN=uN;function $0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){cN(n,a,t[a])})}return n}function cN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var cg=function(e,t){var r=$0({},e,t.attrs);return v(tn,$0({},r,{icon:sN}),null)};cg.displayName="DeleteOutlined";cg.inheritAttrs=!1;const ZS=cg;var dN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]},name:"double-left",theme:"outlined"};const fN=dN;function B0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){vN(n,a,t[a])})}return n}function vN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var dg=function(e,t){var r=B0({},e,t.attrs);return v(tn,B0({},r,{icon:fN}),null)};dg.displayName="DoubleLeftOutlined";dg.inheritAttrs=!1;const pN=dg;var hN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}}]},name:"double-right",theme:"outlined"};const gN=hN;function V0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){mN(n,a,t[a])})}return n}function mN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var fg=function(e,t){var r=V0({},e,t.attrs);return v(tn,V0({},r,{icon:gN}),null)};fg.displayName="DoubleRightOutlined";fg.inheritAttrs=!1;const yN=fg;var bN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};const CN=bN;function K0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){xN(n,a,t[a])})}return n}function xN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var vg=function(e,t){var r=K0({},e,t.attrs);return v(tn,K0({},r,{icon:CN}),null)};vg.displayName="DownOutlined";vg.inheritAttrs=!1;const xu=vg;var wN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"};const SN=wN;function z0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){_N(n,a,t[a])})}return n}function _N(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var pg=function(e,t){var r=z0({},e,t.attrs);return v(tn,z0({},r,{icon:SN}),null)};pg.displayName="DownloadOutlined";pg.inheritAttrs=!1;const kN=pg;var PN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const ON=PN;function H0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){TN(n,a,t[a])})}return n}function TN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var hg=function(e,t){var r=H0({},e,t.attrs);return v(tn,H0({},r,{icon:ON}),null)};hg.displayName="EditOutlined";hg.inheritAttrs=!1;const NN=hg;var IN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const EN=IN;function W0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){MN(n,a,t[a])})}return n}function MN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var gg=function(e,t){var r=W0({},e,t.attrs);return v(tn,W0({},r,{icon:EN}),null)};gg.displayName="EllipsisOutlined";gg.inheritAttrs=!1;const mg=gg;var AN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const FN=AN;function U0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){jN(n,a,t[a])})}return n}function jN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var yg=function(e,t){var r=U0({},e,t.attrs);return v(tn,U0({},r,{icon:FN}),null)};yg.displayName="EnterOutlined";yg.inheritAttrs=!1;const DN=yg;var LN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};const RN=LN;function q0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){$N(n,a,t[a])})}return n}function $N(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var bg=function(e,t){var r=q0({},e,t.attrs);return v(tn,q0({},r,{icon:RN}),null)};bg.displayName="ExclamationCircleFilled";bg.inheritAttrs=!1;const wu=bg;var BN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"};const VN=BN;function Y0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){KN(n,a,t[a])})}return n}function KN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Cg=function(e,t){var r=Y0({},e,t.attrs);return v(tn,Y0({},r,{icon:VN}),null)};Cg.displayName="ExclamationCircleOutlined";Cg.inheritAttrs=!1;const xd=Cg;var zN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};const HN=zN;function G0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){WN(n,a,t[a])})}return n}function WN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var xg=function(e,t){var r=G0({},e,t.attrs);return v(tn,G0({},r,{icon:HN}),null)};xg.displayName="EyeInvisibleOutlined";xg.inheritAttrs=!1;const QS=xg;var UN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"};const qN=UN;function X0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){YN(n,a,t[a])})}return n}function YN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var wg=function(e,t){var r=X0({},e,t.attrs);return v(tn,X0({},r,{icon:qN}),null)};wg.displayName="EyeOutlined";wg.inheritAttrs=!1;const Su=wg;var GN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file",theme:"outlined"};const XN=GN;function Z0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){ZN(n,a,t[a])})}return n}function ZN(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Sg=function(e,t){var r=Z0({},e,t.attrs);return v(tn,Z0({},r,{icon:XN}),null)};Sg.displayName="FileOutlined";Sg.inheritAttrs=!1;const JS=Sg;var QN={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M534 352V136H232v752h560V394H576a42 42 0 01-42-42z",fill:t}},{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z",fill:e}}]}},name:"file",theme:"twotone"};const JN=QN;function Q0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){eI(n,a,t[a])})}return n}function eI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var _g=function(e,t){var r=Q0({},e,t.attrs);return v(tn,Q0({},r,{icon:JN}),null)};_g.displayName="FileTwoTone";_g.inheritAttrs=!1;const nI=_g;var tI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"}}]},name:"filter",theme:"filled"};const rI=tI;function J0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){aI(n,a,t[a])})}return n}function aI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var kg=function(e,t){var r=J0({},e,t.attrs);return v(tn,J0({},r,{icon:rI}),null)};kg.displayName="FilterFilled";kg.inheritAttrs=!1;const iI=kg;var oI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"};const lI=oI;function eb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){uI(n,a,t[a])})}return n}function uI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Pg=function(e,t){var r=eb({},e,t.attrs);return v(tn,eb({},r,{icon:lI}),null)};Pg.displayName="FolderOpenOutlined";Pg.inheritAttrs=!1;const sI=Pg;var cI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"};const dI=cI;function nb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){fI(n,a,t[a])})}return n}function fI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Og=function(e,t){var r=nb({},e,t.attrs);return v(tn,nb({},r,{icon:dI}),null)};Og.displayName="FolderOutlined";Og.inheritAttrs=!1;const vI=Og;var pI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"};const hI=pI;function tb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){gI(n,a,t[a])})}return n}function gI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Tg=function(e,t){var r=tb({},e,t.attrs);return v(tn,tb({},r,{icon:hI}),null)};Tg.displayName="GithubOutlined";Tg.inheritAttrs=!1;const mI=Tg;var yI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const bI=yI;function rb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){CI(n,a,t[a])})}return n}function CI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Ng=function(e,t){var r=rb({},e,t.attrs);return v(tn,rb({},r,{icon:bI}),null)};Ng.displayName="InfoCircleFilled";Ng.inheritAttrs=!1;const e4=Ng;var xI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};const wI=xI;function ab(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){SI(n,a,t[a])})}return n}function SI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Ig=function(e,t){var r=ab({},e,t.attrs);return v(tn,ab({},r,{icon:wI}),null)};Ig.displayName="InfoCircleOutlined";Ig.inheritAttrs=!1;const Eg=Ig;var _I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};const kI=_I;function ib(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){PI(n,a,t[a])})}return n}function PI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Mg=function(e,t){var r=ib({},e,t.attrs);return v(tn,ib({},r,{icon:kI}),null)};Mg.displayName="LeftOutlined";Mg.inheritAttrs=!1;const Di=Mg;var OI={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};const TI=OI;function ob(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){NI(n,a,t[a])})}return n}function NI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Ag=function(e,t){var r=ob({},e,t.attrs);return v(tn,ob({},r,{icon:TI}),null)};Ag.displayName="LoadingOutlined";Ag.inheritAttrs=!1;const Tr=Ag;var II={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"};const EI=II;function lb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){MI(n,a,t[a])})}return n}function MI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Fg=function(e,t){var r=lb({},e,t.attrs);return v(tn,lb({},r,{icon:EI}),null)};Fg.displayName="MenuOutlined";Fg.inheritAttrs=!1;const AI=Fg;var FI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"minus-square",theme:"outlined"};const jI=FI;function ub(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){DI(n,a,t[a])})}return n}function DI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var jg=function(e,t){var r=ub({},e,t.attrs);return v(tn,ub({},r,{icon:jI}),null)};jg.displayName="MinusSquareOutlined";jg.inheritAttrs=!1;const LI=jg;var RI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 00-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 002.1-5.4V432c0-2.2-1.8-4-4-4z"}}]},name:"ordered-list",theme:"outlined"};const $I=RI;function sb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){BI(n,a,t[a])})}return n}function BI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Dg=function(e,t){var r=sb({},e,t.attrs);return v(tn,sb({},r,{icon:$I}),null)};Dg.displayName="OrderedListOutlined";Dg.inheritAttrs=!1;const VI=Dg;var KI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"}}]},name:"paper-clip",theme:"outlined"};const zI=KI;function cb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){HI(n,a,t[a])})}return n}function HI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Lg=function(e,t){var r=cb({},e,t.attrs);return v(tn,cb({},r,{icon:zI}),null)};Lg.displayName="PaperClipOutlined";Lg.inheritAttrs=!1;const WI=Lg;var UI={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z",fill:e}},{tag:"path",attrs:{d:"M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z",fill:t}},{tag:"path",attrs:{d:"M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z",fill:t}},{tag:"path",attrs:{d:"M276 368a28 28 0 1056 0 28 28 0 10-56 0z",fill:t}},{tag:"path",attrs:{d:"M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",fill:e}}]}},name:"picture",theme:"twotone"};const qI=UI;function db(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){YI(n,a,t[a])})}return n}function YI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Rg=function(e,t){var r=db({},e,t.attrs);return v(tn,db({},r,{icon:qI}),null)};Rg.displayName="PictureTwoTone";Rg.inheritAttrs=!1;const GI=Rg;var XI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const ZI=XI;function fb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){QI(n,a,t[a])})}return n}function QI(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var $g=function(e,t){var r=fb({},e,t.attrs);return v(tn,fb({},r,{icon:ZI}),null)};$g.displayName="PlusOutlined";$g.inheritAttrs=!1;const JI=$g;var e9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"plus-square",theme:"outlined"};const n9=e9;function vb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){t9(n,a,t[a])})}return n}function t9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Bg=function(e,t){var r=vb({},e,t.attrs);return v(tn,vb({},r,{icon:n9}),null)};Bg.displayName="PlusSquareOutlined";Bg.inheritAttrs=!1;const r9=Bg;var a9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};const i9=a9;function pb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){o9(n,a,t[a])})}return n}function o9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Vg=function(e,t){var r=pb({},e,t.attrs);return v(tn,pb({},r,{icon:i9}),null)};Vg.displayName="RightOutlined";Vg.inheritAttrs=!1;const wa=Vg;var l9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};const u9=l9;function hb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){s9(n,a,t[a])})}return n}function s9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Kg=function(e,t){var r=hb({},e,t.attrs);return v(tn,hb({},r,{icon:u9}),null)};Kg.displayName="RotateLeftOutlined";Kg.inheritAttrs=!1;const c9=Kg;var d9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};const f9=d9;function gb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){v9(n,a,t[a])})}return n}function v9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var zg=function(e,t){var r=gb({},e,t.attrs);return v(tn,gb({},r,{icon:f9}),null)};zg.displayName="RotateRightOutlined";zg.inheritAttrs=!1;const p9=zg;var h9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};const g9=h9;function mb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){m9(n,a,t[a])})}return n}function m9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Hg=function(e,t){var r=mb({},e,t.attrs);return v(tn,mb({},r,{icon:g9}),null)};Hg.displayName="SearchOutlined";Hg.inheritAttrs=!1;const wd=Hg;var y9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"};const b9=y9;function yb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){C9(n,a,t[a])})}return n}function C9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Wg=function(e,t){var r=yb({},e,t.attrs);return v(tn,yb({},r,{icon:b9}),null)};Wg.displayName="StarFilled";Wg.inheritAttrs=!1;const x9=Wg;var w9={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"}}]},name:"swap-right",theme:"outlined"};const S9=w9;function bb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){_9(n,a,t[a])})}return n}function _9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Ug=function(e,t){var r=bb({},e,t.attrs);return v(tn,bb({},r,{icon:S9}),null)};Ug.displayName="SwapRightOutlined";Ug.inheritAttrs=!1;const k9=Ug;var P9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"unordered-list",theme:"outlined"};const O9=P9;function Cb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){T9(n,a,t[a])})}return n}function T9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var qg=function(e,t){var r=Cb({},e,t.attrs);return v(tn,Cb({},r,{icon:O9}),null)};qg.displayName="UnorderedListOutlined";qg.inheritAttrs=!1;const N9=qg;var I9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};const E9=I9;function xb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){M9(n,a,t[a])})}return n}function M9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Yg=function(e,t){var r=xb({},e,t.attrs);return v(tn,xb({},r,{icon:E9}),null)};Yg.displayName="UpOutlined";Yg.inheritAttrs=!1;const A9=Yg;var F9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"};const j9=F9;function wb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){D9(n,a,t[a])})}return n}function D9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Gg=function(e,t){var r=wb({},e,t.attrs);return v(tn,wb({},r,{icon:j9}),null)};Gg.displayName="VerticalAlignTopOutlined";Gg.inheritAttrs=!1;const L9=Gg;var R9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"warning",theme:"filled"};const $9=R9;function Sb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){B9(n,a,t[a])})}return n}function B9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Xg=function(e,t){var r=Sb({},e,t.attrs);return v(tn,Sb({},r,{icon:$9}),null)};Xg.displayName="WarningFilled";Xg.inheritAttrs=!1;const V9=Xg;var K9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};const z9=K9;function _b(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){H9(n,a,t[a])})}return n}function H9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Zg=function(e,t){var r=_b({},e,t.attrs);return v(tn,_b({},r,{icon:z9}),null)};Zg.displayName="ZoomInOutlined";Zg.inheritAttrs=!1;const W9=Zg;var U9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};const q9=U9;function kb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Y9(n,a,t[a])})}return n}function Y9(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Qg=function(e,t){var r=kb({},e,t.attrs);return v(tn,kb({},r,{icon:q9}),null)};Qg.displayName="ZoomOutOutlined";Qg.inheritAttrs=!1;const G9=Qg,X9=tt("Home"),n4=ae({__name:"CodeMainMenu",props:{theme:{type:String,default:"dark",require:!1},mode:{type:String,default:"horizontal",require:!1},inlineCollapsed:{type:Boolean,default:!1}},setup(n){var i;const e=(i=Jn())==null?void 0:i.proxy,t=q([0]);function r({key:o}){o!==t.value[0]&&(e==null||e.$bus.emit("menuItemId",o))}const a=e==null?void 0:e.$config;return(o,l)=>{const u=$n("a-menu-item"),s=$n("a-menu");return Sn(),An(s,{theme:n.theme,mode:n.mode,inlineCollapsed:n.inlineCollapsed,selectedKeys:t.value,"onUpdate:selectedKeys":l[0]||(l[0]=c=>t.value=c),style:{lineHeight:"64px"},onClick:r},{default:Tn(()=>{var c;return[(Sn(),An(u,{key:0},{default:Tn(()=>[X9]),_:1})),(Sn(!0),Va(qe,null,pc((c=o.$db)==null?void 0:c.allTypes,(d,f)=>(Sn(),An(u,{key:f+1},{default:Tn(()=>{var p;return[tt(mo((p=Xe(a))==null?void 0:p.codeMessage[d].name),1)]}),_:2},1024))),128))]}),_:1},8,["theme","mode","inlineCollapsed","selectedKeys"])}}}),t4=ae({__name:"CodeSearch",setup(n){const e=Jn(),t=e==null?void 0:e.proxy,r=t==null?void 0:t.$bus,a=t==null?void 0:t.$db,i=t==null?void 0:t.$config,o=q(""),l=q([]);function u(c,d){r==null||r.emit("searchId",d.id)}function s(c){const d=new RegExp(c);let f=[];for(const p of a==null?void 0:a.number)(d.test(a==null?void 0:a.name[p[0]])||d.test(""+p[1]))&&f.push({value:`${p[1]}.${a==null?void 0:a.name[p[0]]} ${i==null?void 0:i.codeMessage[a==null?void 0:a.type[p[0]]].name}`,id:p});f.length>6&&(f=f.slice(0,6)),l.value=f}return(c,d)=>{const f=$n("a-auto-complete");return Sn(),An(f,{value:o.value,"onUpdate:value":d[0]||(d[0]=p=>o.value=p),style:{width:"150px"},placeholder:"number or name",onSelect:u,onSearch:s,options:l.value,"dropdown-match-select-width":210},null,8,["value","options"])}}}),Z9={class:"logo"},Q9=["href"],J9=ae({__name:"CodeHeader",setup(n){var r;const e=(r=Jn())==null?void 0:r.proxy,t=e==null?void 0:e.$config;return(a,i)=>{const o=$n("a-space"),l=$n("a-layout-header");return Sn(),An(l,{class:"header"},{default:Tn(()=>[Qa("div",Z9,[v(o,{align:"center",size:20},{default:Tn(()=>{var u;return[v(t4),Qa("a",{href:(u=Xe(t))==null?void 0:u.github},[v(Xe(mI),{class:"logo_icon"})],8,Q9)]}),_:1})]),v(n4)]),_:1})}}});function D(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Pb(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function W(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Pb(Object(t),!0).forEach(function(r){D(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Pb(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function O(){return O=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},O.apply(this,arguments)}function Be(n){return Be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Be(n)}var eE=function(e){return typeof e=="function"},nE=Array.isArray,tE=function(e){return typeof e=="string"},rE=function(e){return e!==null&&Be(e)==="object"},aE=/^on[^a-z]/,iE=function(e){return aE.test(e)},r4=function(e){var t=Object.create(null);return function(r){var a=t[r];return a||(t[r]=e(r))}},oE=/-(\w)/g,Jg=r4(function(n){return n.replace(oE,function(e,t){return t?t.toUpperCase():""})}),lE=/\B([A-Z])/g,uE=r4(function(n){return n.replace(lE,"-$1").toLowerCase()}),sE=Object.prototype.hasOwnProperty,Ob=function(e,t){return sE.call(e,t)};function cE(n,e,t,r){var a=n[t];if(a!=null){var i=Ob(a,"default");if(i&&r===void 0){var o=a.default;r=a.type!==Function&&eE(o)?o():o}a.type===Boolean&&(!Ob(e,t)&&!i?r=!1:r===""&&(r=!0))}return r}function dE(n){return Object.keys(n).reduce(function(e,t){return(t.startsWith("data-")||t.startsWith("aria-"))&&(e[t]=n[t]),e},{})}function Ci(n){return typeof n=="number"?"".concat(n,"px"):n}function yl(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return typeof n=="function"?n(e):n!=null?n:t}function de(){for(var n=[],e=0;e<arguments.length;e++){var t=e<0||arguments.length<=e?void 0:arguments[e];if(!!t){if(tE(t))n.push(t);else if(nE(t))for(var r=0;r<t.length;r++){var a=de(t[r]);a&&n.push(a)}else if(rE(t))for(var i in t)t[i]&&n.push(i)}}return n.join(" ")}var a4=function(){if(typeof Map<"u")return Map;function n(e,t){var r=-1;return e.some(function(a,i){return a[0]===t?(r=i,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(t){var r=n(this.__entries__,t),a=this.__entries__[r];return a&&a[1]},e.prototype.set=function(t,r){var a=n(this.__entries__,t);~a?this.__entries__[a][1]=r:this.__entries__.push([t,r])},e.prototype.delete=function(t){var r=this.__entries__,a=n(r,t);~a&&r.splice(a,1)},e.prototype.has=function(t){return!!~n(this.__entries__,t)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,r){r===void 0&&(r=null);for(var a=0,i=this.__entries__;a<i.length;a++){var o=i[a];t.call(r,o[1],o[0])}},e}()}(),up=typeof window<"u"&&typeof document<"u"&&window.document===document,yc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),fE=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(yc):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}}(),vE=2;function pE(n,e){var t=!1,r=!1,a=0;function i(){t&&(t=!1,n()),r&&l()}function o(){fE(i)}function l(){var u=Date.now();if(t){if(u-a<vE)return;r=!0}else t=!0,r=!1,setTimeout(o,e);a=u}return l}var hE=20,gE=["top","right","bottom","left","width","height","size","weight"],mE=typeof MutationObserver<"u",yE=function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=pE(this.refresh.bind(this),hE)}return n.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},n.prototype.removeObserver=function(e){var t=this.observers_,r=t.indexOf(e);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},n.prototype.updateObservers_=function(){var e=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return e.forEach(function(t){return t.broadcastActive()}),e.length>0},n.prototype.connect_=function(){!up||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),mE?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!up||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(e){var t=e.propertyName,r=t===void 0?"":t,a=gE.some(function(i){return!!~r.indexOf(i)});a&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n}(),i4=function(n,e){for(var t=0,r=Object.keys(e);t<r.length;t++){var a=r[t];Object.defineProperty(n,a,{value:e[a],enumerable:!1,writable:!1,configurable:!0})}return n},Mo=function(n){var e=n&&n.ownerDocument&&n.ownerDocument.defaultView;return e||yc},o4=Sd(0,0,0,0);function bc(n){return parseFloat(n)||0}function Tb(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return e.reduce(function(r,a){var i=n["border-"+a+"-width"];return r+bc(i)},0)}function bE(n){for(var e=["top","right","bottom","left"],t={},r=0,a=e;r<a.length;r++){var i=a[r],o=n["padding-"+i];t[i]=bc(o)}return t}function CE(n){var e=n.getBBox();return Sd(0,0,e.width,e.height)}function xE(n){var e=n.clientWidth,t=n.clientHeight;if(!e&&!t)return o4;var r=Mo(n).getComputedStyle(n),a=bE(r),i=a.left+a.right,o=a.top+a.bottom,l=bc(r.width),u=bc(r.height);if(r.boxSizing==="border-box"&&(Math.round(l+i)!==e&&(l-=Tb(r,"left","right")+i),Math.round(u+o)!==t&&(u-=Tb(r,"top","bottom")+o)),!SE(n)){var s=Math.round(l+i)-e,c=Math.round(u+o)-t;Math.abs(s)!==1&&(l-=s),Math.abs(c)!==1&&(u-=c)}return Sd(a.left,a.top,l,u)}var wE=function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof Mo(n).SVGGraphicsElement}:function(n){return n instanceof Mo(n).SVGElement&&typeof n.getBBox=="function"}}();function SE(n){return n===Mo(n).document.documentElement}function _E(n){return up?wE(n)?CE(n):xE(n):o4}function kE(n){var e=n.x,t=n.y,r=n.width,a=n.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(i.prototype);return i4(o,{x:e,y:t,width:r,height:a,top:t,right:e+r,bottom:a+t,left:e}),o}function Sd(n,e,t,r){return{x:n,y:e,width:t,height:r}}var PE=function(){function n(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Sd(0,0,0,0),this.target=e}return n.prototype.isActive=function(){var e=_E(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},n}(),OE=function(){function n(e,t){var r=kE(t);i4(this,{target:e,contentRect:r})}return n}(),TE=function(){function n(e,t,r){if(this.activeObservations_=[],this.observations_=new a4,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=r}return n.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Mo(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new PE(e)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Mo(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;!t.has(e)||(t.delete(e),t.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},n.prototype.broadcastActive=function(){if(!!this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(r){return new OE(r.target,r.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n}(),l4=typeof WeakMap<"u"?new WeakMap:new a4,u4=function(){function n(e){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=yE.getInstance(),r=new TE(e,t,this);l4.set(this,r)}return n}();["observe","unobserve","disconnect"].forEach(function(n){u4.prototype[n]=function(){var e;return(e=l4.get(this))[n].apply(e,arguments)}});var NE=function(){return typeof yc.ResizeObserver<"u"?yc.ResizeObserver:u4}();const em=NE;function s4(n){if(Array.isArray(n))return n}function IE(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(n);!(a=(o=t.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(u){i=!0,l=u}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function sp(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function _d(n,e){if(!!n){if(typeof n=="string")return sp(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return sp(n,e)}}function c4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(n,e){return s4(n)||IE(n,e)||_d(n,e)||c4()}function EE(n){if(Array.isArray(n))return sp(n)}function d4(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ME(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ee(n){return EE(n)||d4(n)||_d(n)||ME()}var AE=typeof global=="object"&&global&&global.Object===Object&&global;const f4=AE;var FE=typeof self=="object"&&self&&self.Object===Object&&self,jE=f4||FE||Function("return this")();const Fr=jE;var DE=Fr.Symbol;const gr=DE;var v4=Object.prototype,LE=v4.hasOwnProperty,RE=v4.toString,sl=gr?gr.toStringTag:void 0;function $E(n){var e=LE.call(n,sl),t=n[sl];try{n[sl]=void 0;var r=!0}catch{}var a=RE.call(n);return r&&(e?n[sl]=t:delete n[sl]),a}var BE=Object.prototype,VE=BE.toString;function KE(n){return VE.call(n)}var zE="[object Null]",HE="[object Undefined]",Nb=gr?gr.toStringTag:void 0;function Ja(n){return n==null?n===void 0?HE:zE:Nb&&Nb in Object(n)?$E(n):KE(n)}function p4(n,e){return function(t){return n(e(t))}}var WE=p4(Object.getPrototypeOf,Object);const nm=WE;function Nr(n){return n!=null&&typeof n=="object"}var UE="[object Object]",qE=Function.prototype,YE=Object.prototype,h4=qE.toString,GE=YE.hasOwnProperty,XE=h4.call(Object);function tm(n){if(!Nr(n)||Ja(n)!=UE)return!1;var e=nm(n);if(e===null)return!0;var t=GE.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&h4.call(t)==XE}var ZE=function(e){return e!=null&&e!==""};const cp=ZE;var QE=function(e,t){var r=O({},e);return Object.keys(t).forEach(function(a){var i=r[a];if(i)i.type||i.default?i.default=t[a]:i.def?i.def(t[a]):r[a]={type:i,default:t[a]};else throw new Error("not have ".concat(a," prop"))}),r};const vn=QE;var rm=function(e){for(var t=Object.keys(e),r={},a={},i={},o=0,l=t.length;o<l;o++){var u=t[o];iE(u)?(r[u[2].toLowerCase()+u.slice(3)]=e[u],a[u]=e[u]):i[u]=e[u]}return{onEvents:a,events:r,extraAttrs:i}},am=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r={},a=/;(?![^(]*\))/g,i=/:(.+)/;return Be(e)==="object"?e:(e.split(a).forEach(function(o){if(o){var l=o.split(i);if(l.length>1){var u=t?Jg(l[0].trim()):l[0].trim();r[u]=l[1].trim()}}}),r)},ga=function(e,t){return e[t]!==void 0},g4=Symbol("skipFlatten"),Fn=function n(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=Array.isArray(e)?e:[e],a=[];return r.forEach(function(i){Array.isArray(i)?a.push.apply(a,Ee(n(i,t))):i&&i.type===qe?i.key===g4?a.push(i):a.push.apply(a,Ee(n(i.children,t))):i&&xt(i)?t&&!ku(i)?a.push(i):t||a.push(i):cp(i)&&a.push(i)}),a},_u=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"default",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(xt(e))return e.type===qe?t==="default"?Fn(e.children):[]:e.children&&e.children[t]?Fn(e.children[t](r)):[];var a=e.$slots[t]&&e.$slots[t](r);return Fn(a)},za=function(e){for(var t,r=((t=e==null?void 0:e.vnode)===null||t===void 0?void 0:t.el)||e&&(e.$el||e);r&&!r.tagName;)r=r.nextSibling;return r},m4=function(e){var t={};if(e.$&&e.$.vnode){var r=e.$.vnode.props||{};Object.keys(e.$props).forEach(function(l){var u=e.$props[l],s=uE(l);(u!==void 0||s in r)&&(t[l]=u)})}else if(xt(e)&&Be(e.type)==="object"){var a=e.props||{},i={};Object.keys(a).forEach(function(l){i[Jg(l)]=a[l]});var o=e.type.props||{};Object.keys(o).forEach(function(l){var u=cE(o,i,l,i[l]);(u!==void 0||l in i)&&(t[l]=u)})}return t},im=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"default",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:e,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,i=void 0;if(e.$){var o=e[t];if(o!==void 0)return typeof o=="function"&&a?o(r):o;i=e.$slots[t],i=a&&i?i(r):i}else if(xt(e)){var l=e.props&&e.props[t];if(l!==void 0&&e.props!==null)return typeof l=="function"&&a?l(r):l;e.type===qe?i=e.children:e.children&&e.children[t]&&(i=e.children[t],i=a&&i?i(r):i)}return Array.isArray(i)&&(i=Fn(i),i=i.length===1?i[0]:i,i=i.length===0?void 0:i),i};function Ib(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,t={};return n.$?t=O(O({},t),n.$attrs):t=O(O({},t),n.props),rm(t)[e?"onEvents":"events"]}function JE(n){var e=(xt(n)?n.props:n.$attrs)||{},t=e.class||{},r={};return typeof t=="string"?t.split(" ").forEach(function(a){r[a.trim()]=!0}):Array.isArray(t)?de(t).split(" ").forEach(function(a){r[a.trim()]=!0}):r=O(O({},r),t),r}function y4(n,e){var t=(xt(n)?n.props:n.$attrs)||{},r=t.style||{};if(typeof r=="string")r=am(r,e);else if(e&&r){var a={};return Object.keys(r).forEach(function(i){return a[Jg(i)]=r[i]}),a}return r}function eM(n){return n==null||n===""||Array.isArray(n)&&n.length===0}function ku(n){return n&&(n.type===nr||n.type===qe&&n.children.length===0||n.type===Ki&&n.children.trim()==="")}function nM(n){return n&&n.type===Ki}function Qn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=[];return n.forEach(function(t){Array.isArray(t)?e.push.apply(e,Ee(t)):t.type===qe?e.push.apply(e,Ee(t.children)):e.push(t)}),e.filter(function(t){return!ku(t)})}function cl(n){if(n){var e=Qn(n);return e.length?e:void 0}else return n}function at(n){return Array.isArray(n)&&n.length===1&&(n=n[0]),n&&n.__v_isVNode&&Be(n.type)!=="symbol"}function Vn(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"default",r,a;return(r=e[t])!==null&&r!==void 0?r:(a=n[t])===null||a===void 0?void 0:a.call(n)}const mr=ae({name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup:function(e,t){var r=t.slots,a=kn({width:0,height:0,offsetHeight:0,offsetWidth:0}),i=null,o=null,l=function(){o&&(o.disconnect(),o=null)},u=function(f){var p=e.onResize,g=f[0].target,y=g.getBoundingClientRect(),h=y.width,m=y.height,b=g.offsetWidth,C=g.offsetHeight,x=Math.floor(h),S=Math.floor(m);if(a.width!==x||a.height!==S||a.offsetWidth!==b||a.offsetHeight!==C){var w={width:x,height:S,offsetWidth:b,offsetHeight:C};O(a,w),p&&Promise.resolve().then(function(){p(O(O({},w),{offsetWidth:b,offsetHeight:C}),g)})}},s=Jn(),c=function(){var f=e.disabled;if(f){l();return}var p=za(s),g=p!==i;g&&(l(),i=p),!o&&p&&(o=new em(u),o.observe(p))};return Ye(function(){c()}),Nt(function(){c()}),Dt(function(){l()}),Pe(function(){return e.disabled},function(){c()},{flush:"post"}),function(){var d;return(d=r.default)===null||d===void 0?void 0:d.call(r)[0]}}});var b4=function(e){return setTimeout(e,16)},C4=function(e){return clearTimeout(e)};typeof window<"u"&&"requestAnimationFrame"in window&&(b4=function(e){return window.requestAnimationFrame(e)},C4=function(e){return window.cancelAnimationFrame(e)});var Eb=0,om=new Map;function x4(n){om.delete(n)}function Qe(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;Eb+=1;var t=Eb;function r(a){if(a===0)x4(t),n();else{var i=b4(function(){r(a-1)});om.set(t,i)}}return r(e),t}Qe.cancel=function(n){var e=om.get(n);return x4(e),C4(e)};function dp(n){var e,t=function(i){return function(){e=null,n.apply(void 0,Ee(i))}},r=function(){if(e==null){for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];e=Qe(t(o))}};return r.cancel=function(){Qe.cancel(e),e=null},r}var jn=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t},tM=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t},Gn=function(e){var t=e;return t.install=function(r){r.component(t.displayName||t.name,e)},e},w4=!1;try{var Mb=Object.defineProperty({},"passive",{get:function(){w4=!0}});window.addEventListener("testPassive",null,Mb),window.removeEventListener("testPassive",null,Mb)}catch{}const ot=w4;function Rn(n,e,t,r){if(n&&n.addEventListener){var a=r;a===void 0&&ot&&(e==="touchstart"||e==="touchmove"||e==="wheel")&&(a={passive:!1}),n.addEventListener(e,t,a)}return{remove:function(){n&&n.removeEventListener&&n.removeEventListener(e,t)}}}function Zu(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function Ab(n,e,t){if(t!==void 0&&e.top>n.top-t)return"".concat(t+e.top,"px")}function Fb(n,e,t){if(t!==void 0&&e.bottom<n.bottom+t){var r=window.innerHeight-e.bottom;return"".concat(t+r,"px")}}var S4=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],Ml=[];function jb(n,e){if(!!n){var t=Ml.find(function(r){return r.target===n});t?t.affixList.push(e):(t={target:n,affixList:[e],eventHandlers:{}},Ml.push(t),S4.forEach(function(r){t.eventHandlers[r]=Rn(n,r,function(){t.affixList.forEach(function(a){var i=a.exposed.lazyUpdatePosition;i()},(r==="touchstart"||r==="touchmove")&&ot?{passive:!0}:!1)})}))}}function Db(n){var e=Ml.find(function(t){var r=t.affixList.some(function(a){return a===n});return r&&(t.affixList=t.affixList.filter(function(a){return a!==n})),r});e&&e.affixList.length===0&&(Ml=Ml.filter(function(t){return t!==e}),S4.forEach(function(t){var r=e.eventHandlers[t];r&&r.remove&&r.remove()}))}const _4={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"};var rM={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"Ok",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"};const aM=rM;var iM={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};const k4=iM;var oM={lang:O({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},aM),timePickerLocale:O({},k4)};const nu=oM;var Wt="${label} is not a valid ${type}",lM={locale:"en",Pagination:_4,DatePicker:nu,TimePicker:k4,Calendar:nu,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No Data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:Wt,method:Wt,array:Wt,object:Wt,number:Wt,date:Wt,boolean:Wt,integer:Wt,float:Wt,regexp:Wt,email:Wt,url:Wt,hex:Wt},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"}};const Ir=lM,qo=ae({name:"LocaleReceiver",props:{componentName:String,defaultLocale:{type:[Object,Function]},children:{type:Function}},setup:function(e,t){var r=t.slots,a=on("localeData",{}),i=R(function(){var l=e.componentName,u=l===void 0?"global":l,s=e.defaultLocale,c=s||Ir[u||"global"],d=a.antLocale,f=u&&d?d[u]:{};return O(O({},typeof c=="function"?c():c),f||{})}),o=R(function(){var l=a.antLocale,u=l&&l.locale;return l&&l.exist&&!u?Ir.locale:u});return function(){var l=e.children||r.default,u=a.antLocale;return l==null?void 0:l(i.value,o.value,u)}}});function na(n,e,t){var r=on("localeData",{}),a=R(function(){var i=r.antLocale,o=Xe(e)||Ir[n||"global"],l=n&&i?i[n]:{};return O(O(O({},typeof o=="function"?o():o),l||{}),Xe(t)||{})});return[a]}var P4=function(){var e=Le("empty",{}),t=e.getPrefixCls,r=t("empty-img-default");return v("svg",{class:r,width:"184",height:"152",viewBox:"0 0 184 152"},[v("g",{fill:"none","fill-rule":"evenodd"},[v("g",{transform:"translate(24 31.67)"},[v("ellipse",{class:"".concat(r,"-ellipse"),cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"},null),v("path",{class:"".concat(r,"-path-1"),d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"},null),v("path",{class:"".concat(r,"-path-2"),d:"M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",transform:"translate(13.56)"},null),v("path",{class:"".concat(r,"-path-3"),d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"},null),v("path",{class:"".concat(r,"-path-4"),d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"},null)]),v("path",{class:"".concat(r,"-path-5"),d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"},null),v("g",{class:"".concat(r,"-g"),transform:"translate(149.65 15.383)"},[v("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"},null),v("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"},null)])])])};P4.PRESENTED_IMAGE_DEFAULT=!0;const uM=P4;var O4=function(){var e=Le("empty",{}),t=e.getPrefixCls,r=t("empty-img-simple");return v("svg",{class:r,width:"64",height:"41",viewBox:"0 0 64 41"},[v("g",{transform:"translate(0 1)",fill:"none","fill-rule":"evenodd"},[v("ellipse",{class:"".concat(r,"-ellipse"),fill:"#F5F5F5",cx:"32",cy:"33",rx:"32",ry:"7"},null),v("g",{class:"".concat(r,"-g"),"fill-rule":"nonzero",stroke:"#D9D9D9"},[v("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"},null),v("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",fill:"#FAFAFA",class:"".concat(r,"-path")},null)])])])};O4.PRESENTED_IMAGE_SIMPLE=!0;const sM=O4;function Lb(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function T4(n,e,t){return e&&Lb(n.prototype,e),t&&Lb(n,t),n}function Ts(){return(Ts=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function N4(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}function I4(n,e){if(n==null)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||(a[t]=n[t]);return a}function Rb(n){return((e=n)!=null&&typeof e=="object"&&Array.isArray(e)===!1)==1&&Object.prototype.toString.call(n)==="[object Object]";var e}var E4=Object.prototype,M4=E4.toString,cM=E4.hasOwnProperty,A4=/^\s*function (\w+)/;function $b(n){var e,t=(e=n==null?void 0:n.type)!==null&&e!==void 0?e:n;if(t){var r=t.toString().match(A4);return r?r[1]:""}return""}var Li=function(n){var e,t;return Rb(n)!==!1&&typeof(e=n.constructor)=="function"&&Rb(t=e.prototype)!==!1&&t.hasOwnProperty("isPrototypeOf")!==!1},dM=function(n){return n},Ft=dM,tu=function(n,e){return cM.call(n,e)},fM=Number.isInteger||function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n},Ao=Array.isArray||function(n){return M4.call(n)==="[object Array]"},Fo=function(n){return M4.call(n)==="[object Function]"},Cc=function(n){return Li(n)&&tu(n,"_vueTypes_name")},F4=function(n){return Li(n)&&(tu(n,"type")||["_vueTypes_name","validator","default","required"].some(function(e){return tu(n,e)}))};function lm(n,e){return Object.defineProperty(n.bind(e),"__original",{value:n})}function zi(n,e,t){var r;t===void 0&&(t=!1);var a=!0,i="";r=Li(n)?n:{type:n};var o=Cc(r)?r._vueTypes_name+" - ":"";if(F4(r)&&r.type!==null){if(r.type===void 0||r.type===!0||!r.required&&e===void 0)return a;Ao(r.type)?(a=r.type.some(function(d){return zi(d,e,!0)===!0}),i=r.type.map(function(d){return $b(d)}).join(" or ")):a=(i=$b(r))==="Array"?Ao(e):i==="Object"?Li(e):i==="String"||i==="Number"||i==="Boolean"||i==="Function"?function(d){if(d==null)return"";var f=d.constructor.toString().match(A4);return f?f[1]:""}(e)===i:e instanceof r.type}if(!a){var l=o+'value "'+e+'" should be of type "'+i+'"';return t===!1?(Ft(l),!1):l}if(tu(r,"validator")&&Fo(r.validator)){var u=Ft,s=[];if(Ft=function(d){s.push(d)},a=r.validator(e),Ft=u,!a){var c=(s.length>1?"* ":"")+s.join(`
* `);return s.length=0,t===!1?(Ft(c),a):c}}return a}function rr(n,e){var t=Object.defineProperties(e,{_vueTypes_name:{value:n,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(a){return a!==void 0||this.default?Fo(a)||zi(this,a,!0)===!0?(this.default=Ao(a)?function(){return[].concat(a)}:Li(a)?function(){return Object.assign({},a)}:a,this):(Ft(this._vueTypes_name+' - invalid default value: "'+a+'"'),this):this}}}),r=t.validator;return Fo(r)&&(t.validator=lm(r,t)),t}function Zr(n,e){var t=rr(n,e);return Object.defineProperty(t,"validate",{value:function(r){return Fo(this.validator)&&Ft(this._vueTypes_name+` - calling .validate() will overwrite the current custom validator function. Validator info:
`+JSON.stringify(this)),this.validator=lm(r,this),this}})}function Bb(n,e,t){var r,a,i=(r=e,a={},Object.getOwnPropertyNames(r).forEach(function(d){a[d]=Object.getOwnPropertyDescriptor(r,d)}),Object.defineProperties({},a));if(i._vueTypes_name=n,!Li(t))return i;var o,l,u=t.validator,s=I4(t,["validator"]);if(Fo(u)){var c=i.validator;c&&(c=(l=(o=c).__original)!==null&&l!==void 0?l:o),i.validator=lm(c?function(d){return c.call(this,d)&&u.call(this,d)}:u,i)}return Object.assign(i,s)}function kd(n){return n.replace(/^(?!\s*$)/gm,"  ")}var vM=function(){return Zr("any",{})},pM=function(){return Zr("function",{type:Function})},hM=function(){return Zr("boolean",{type:Boolean})},gM=function(){return Zr("string",{type:String})},mM=function(){return Zr("number",{type:Number})},yM=function(){return Zr("array",{type:Array})},bM=function(){return Zr("object",{type:Object})},CM=function(){return rr("integer",{type:Number,validator:function(n){return fM(n)}})},xM=function(){return rr("symbol",{validator:function(n){return typeof n=="symbol"}})};function wM(n,e){if(e===void 0&&(e="custom validation failed"),typeof n!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return rr(n.name||"<<anonymous function>>",{validator:function(t){var r=n(t);return r||Ft(this._vueTypes_name+" - "+e),r}})}function SM(n){if(!Ao(n))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var e='oneOf - value should be one of "'+n.join('", "')+'".',t=n.reduce(function(r,a){if(a!=null){var i=a.constructor;r.indexOf(i)===-1&&r.push(i)}return r},[]);return rr("oneOf",{type:t.length>0?t:void 0,validator:function(r){var a=n.indexOf(r)!==-1;return a||Ft(e),a}})}function _M(n){if(!Ao(n))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var e=!1,t=[],r=0;r<n.length;r+=1){var a=n[r];if(F4(a)){if(Cc(a)&&a._vueTypes_name==="oneOf"){t=t.concat(a.type);continue}if(Fo(a.validator)&&(e=!0),a.type!==!0&&a.type){t=t.concat(a.type);continue}}t.push(a)}return t=t.filter(function(i,o){return t.indexOf(i)===o}),rr("oneOfType",e?{type:t,validator:function(i){var o=[],l=n.some(function(u){var s=zi(Cc(u)&&u._vueTypes_name==="oneOf"?u.type||null:u,i,!0);return typeof s=="string"&&o.push(s),s===!0});return l||Ft("oneOfType - provided value does not match any of the "+o.length+` passed-in validators:
`+kd(o.join(`
`))),l}}:{type:t})}function kM(n){return rr("arrayOf",{type:Array,validator:function(e){var t,r=e.every(function(a){return(t=zi(n,a,!0))===!0});return r||Ft(`arrayOf - value validation error:
`+kd(t)),r}})}function PM(n){return rr("instanceOf",{type:n})}function OM(n){return rr("objectOf",{type:Object,validator:function(e){var t,r=Object.keys(e).every(function(a){return(t=zi(n,e[a],!0))===!0});return r||Ft(`objectOf - value validation error:
`+kd(t)),r}})}function TM(n){var e=Object.keys(n),t=e.filter(function(a){var i;return!!(!((i=n[a])===null||i===void 0)&&i.required)}),r=rr("shape",{type:Object,validator:function(a){var i=this;if(!Li(a))return!1;var o=Object.keys(a);if(t.length>0&&t.some(function(u){return o.indexOf(u)===-1})){var l=t.filter(function(u){return o.indexOf(u)===-1});return Ft(l.length===1?'shape - required property "'+l[0]+'" is not defined.':'shape - required properties "'+l.join('", "')+'" are not defined.'),!1}return o.every(function(u){if(e.indexOf(u)===-1)return i._vueTypes_isLoose===!0||(Ft('shape - shape definition does not include a "'+u+'" property. Allowed keys: "'+e.join('", "')+'".'),!1);var s=zi(n[u],a[u],!0);return typeof s=="string"&&Ft('shape - "'+u+`" property validation error:
 `+kd(s)),s===!0})}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r}var Kr=function(){function n(){}return n.extend=function(e){var t=this;if(Ao(e))return e.forEach(function(d){return t.extend(d)}),this;var r=e.name,a=e.validate,i=a!==void 0&&a,o=e.getter,l=o!==void 0&&o,u=I4(e,["name","validate","getter"]);if(tu(this,r))throw new TypeError('[VueTypes error]: Type "'+r+'" already defined');var s,c=u.type;return Cc(c)?(delete u.type,Object.defineProperty(this,r,l?{get:function(){return Bb(r,c,u)}}:{value:function(){var d,f=Bb(r,c,u);return f.validator&&(f.validator=(d=f.validator).bind.apply(d,[f].concat([].slice.call(arguments)))),f}})):(s=l?{get:function(){var d=Object.assign({},u);return i?Zr(r,d):rr(r,d)},enumerable:!0}:{value:function(){var d,f,p=Object.assign({},u);return d=i?Zr(r,p):rr(r,p),p.validator&&(d.validator=(f=p.validator).bind.apply(f,[d].concat([].slice.call(arguments)))),d},enumerable:!0},Object.defineProperty(this,r,s))},T4(n,null,[{key:"any",get:function(){return vM()}},{key:"func",get:function(){return pM().def(this.defaults.func)}},{key:"bool",get:function(){return hM().def(this.defaults.bool)}},{key:"string",get:function(){return gM().def(this.defaults.string)}},{key:"number",get:function(){return mM().def(this.defaults.number)}},{key:"array",get:function(){return yM().def(this.defaults.array)}},{key:"object",get:function(){return bM().def(this.defaults.object)}},{key:"integer",get:function(){return CM().def(this.defaults.integer)}},{key:"symbol",get:function(){return xM()}}]),n}();function j4(n){var e;return n===void 0&&(n={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),(e=function(t){function r(){return t.apply(this,arguments)||this}return N4(r,t),T4(r,null,[{key:"sensibleDefaults",get:function(){return Ts({},this.defaults)},set:function(a){this.defaults=a!==!1?Ts({},a!==!0?a:n):{}}}]),r}(Kr)).defaults=Ts({},n),e}Kr.defaults={},Kr.custom=wM,Kr.oneOf=SM,Kr.instanceOf=PM,Kr.oneOfType=_M,Kr.arrayOf=kM,Kr.objectOf=OM,Kr.shape=TM,Kr.utils={validate:function(n,e){return zi(e,n,!0)===!0},toType:function(n,e,t){return t===void 0&&(t=!1),t?Zr(n,e):rr(n,e)}};(function(n){function e(){return n.apply(this,arguments)||this}return N4(e,n),e})(j4());var D4=j4({func:void 0,bool:void 0,string:void 0,number:void 0,array:void 0,object:void 0,integer:void 0});D4.extend([{name:"looseBool",getter:!0,type:Boolean,default:void 0},{name:"style",getter:!0,type:[String,Object],default:void 0},{name:"VueNode",getter:!0,type:null}]);function L4(n){return n.default=void 0,n}const U=D4;var NM=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},R4=v(uM,null,null),$4=v(sM,null,null),Yo=function(e,t){var r=t.slots,a=r===void 0?{}:r,i=t.attrs,o,l=Le("empty",e),u=l.direction,s=l.prefixCls,c=s.value,d=O(O({},e),i),f=d.image,p=f===void 0?R4:f,g=d.description,y=g===void 0?((o=a.description)===null||o===void 0?void 0:o.call(a))||void 0:g,h=d.imageStyle,m=d.class,b=m===void 0?"":m,C=NM(d,["image","description","imageStyle","class"]);return v(qo,{componentName:"Empty",children:function(S){var w,_=typeof y<"u"?y:S.description,P=typeof _=="string"?_:"empty",k=null;return typeof p=="string"?k=v("img",{alt:P,src:p},null):k=p,v("div",W({class:de(c,b,(w={},D(w,"".concat(c,"-normal"),p===$4),D(w,"".concat(c,"-rtl"),u.value==="rtl"),w))},C),[v("div",{class:"".concat(c,"-image"),style:h},[k]),_&&v("p",{class:"".concat(c,"-description")},[_]),a.default&&v("div",{class:"".concat(c,"-footer")},[Qn(a.default())])])}},null)};Yo.displayName="AEmpty";Yo.PRESENTED_IMAGE_DEFAULT=R4;Yo.PRESENTED_IMAGE_SIMPLE=$4;Yo.inheritAttrs=!1;Yo.props={prefixCls:String,image:U.any,description:U.any,imageStyle:{type:Object,default:void 0}};const $a=Gn(Yo);var IM=function(e){var t=Le("empty",e),r=t.prefixCls,a=function(o){switch(o){case"Table":case"List":return v($a,{image:$a.PRESENTED_IMAGE_SIMPLE},null);case"Select":case"TreeSelect":case"Cascader":case"Transfer":case"Mentions":return v($a,{image:$a.PRESENTED_IMAGE_SIMPLE,class:"".concat(r.value,"-small")},null);default:return v($a,null,null)}};return a(e.componentName)};function B4(n){return v(IM,{componentName:n},null)}var Vb={};function EM(n,e){}function MM(n,e){}function V4(n,e,t){!e&&!Vb[t]&&(n(!1,t),Vb[t]=!0)}function K4(n,e){V4(EM,n,e)}function AM(n,e){V4(MM,n,e)}const rt=function(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";K4(n,"[antdv: ".concat(e,"] ").concat(t))};var fp="internalMark",Ns=ae({name:"ALocaleProvider",props:{locale:{type:Object},ANT_MARK__:String},setup:function(e,t){var r=t.slots;rt(e.ANT_MARK__===fp,"LocaleProvider","`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");var a=kn({antLocale:O(O({},e.locale),{exist:!0}),ANT_MARK__:fp});return ln("localeData",a),Pe(function(){return e.locale},function(){a.antLocale=O(O({},e.locale),{exist:!0})},{immediate:!0}),function(){var i;return(i=r.default)===null||i===void 0?void 0:i.call(r)}}});Ns.install=function(n){return n.component(Ns.name,Ns),n};const z4=Gn(Ns);jn("bottomLeft","bottomRight","topLeft","topRight");var um=function(e){return e!==void 0&&(e==="topLeft"||e==="topRight")?"slide-down":"slide-up"},ei=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=O(e?{name:e,appear:!0,enterFromClass:"".concat(e,"-enter ").concat(e,"-enter-prepare"),enterActiveClass:"".concat(e,"-enter ").concat(e,"-enter-prepare"),enterToClass:"".concat(e,"-enter ").concat(e,"-enter-active"),leaveFromClass:" ".concat(e,"-leave"),leaveActiveClass:"".concat(e,"-leave ").concat(e,"-leave-active"),leaveToClass:"".concat(e,"-leave ").concat(e,"-leave-active")}:{css:!1},t);return r},sm=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=O(e?{name:e,appear:!0,appearActiveClass:"".concat(e),appearToClass:"".concat(e,"-appear ").concat(e,"-appear-active"),enterFromClass:"".concat(e,"-appear ").concat(e,"-enter ").concat(e,"-appear-prepare ").concat(e,"-enter-prepare"),enterActiveClass:"".concat(e),enterToClass:"".concat(e,"-enter ").concat(e,"-appear ").concat(e,"-appear-active ").concat(e,"-enter-active"),leaveActiveClass:"".concat(e," ").concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-active")}:{css:!1},t);return r},Er=function(e,t,r){return r!==void 0?r:"".concat(e,"-").concat(t)};const FM=ae({name:"Notice",inheritAttrs:!1,props:["prefixCls","duration","updateMark","noticeKey","closeIcon","closable","props","onClick","onClose","holder","visible"],setup:function(e,t){var r=t.attrs,a=t.slots,i,o=R(function(){return e.duration===void 0?1.5:e.duration}),l=function(){o.value&&(i=setTimeout(function(){s()},o.value*1e3))},u=function(){i&&(clearTimeout(i),i=null)},s=function(f){f&&f.stopPropagation(),u();var p=e.onClose,g=e.noticeKey;p&&p(g)},c=function(){u(),l()};return Ye(function(){l()}),Dt(function(){u()}),Pe([o,function(){return e.updateMark},function(){return e.visible}],function(d,f){var p=Te(d,3),g=p[0],y=p[1],h=p[2],m=Te(f,3),b=m[0],C=m[1],x=m[2];(g!==b||y!==C||h!==x&&x)&&c()},{flush:"post"}),function(){var d,f,p=e.prefixCls,g=e.closable,y=e.closeIcon,h=y===void 0?(d=a.closeIcon)===null||d===void 0?void 0:d.call(a):y,m=e.onClick,b=e.holder,C=r.class,x=r.style,S="".concat(p,"-notice"),w=Object.keys(r).reduce(function(P,k){return(k.startsWith("data-")||k.startsWith("aria-")||k==="role")&&(P[k]=r[k]),P},{}),_=v("div",W({class:de(S,C,D({},"".concat(S,"-closable"),g)),style:x,onMouseenter:u,onMouseleave:l,onClick:m},w),[v("div",{class:"".concat(S,"-content")},[(f=a.default)===null||f===void 0?void 0:f.call(a)]),g?v("a",{tabindex:0,onClick:s,class:"".concat(S,"-close")},[h||v("span",{class:"".concat(S,"-close-x")},null)]):null]);return b?v(Vh,{to:b},{default:function(){return _}}):_}}});var jM=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},Kb=0,DM=Date.now();function zb(){var n=Kb;return Kb+=1,"rcNotification_".concat(DM,"_").concat(n)}var vp=ae({name:"Notification",inheritAttrs:!1,props:["prefixCls","transitionName","animation","maxCount","closeIcon"],setup:function(e,t){var r=t.attrs,a=t.expose,i=t.slots,o=new Map,l=q([]),u=R(function(){var d=e.prefixCls,f=e.animation,p=f===void 0?"fade":f,g=e.transitionName;return!g&&p&&(g="".concat(d,"-").concat(p)),sm(g)}),s=function(f,p){var g=f.key||zb(),y=O(O({},f),{key:g}),h=e.maxCount,m=l.value.map(function(C){return C.notice.key}).indexOf(g),b=l.value.concat();m!==-1?b.splice(m,1,{notice:y,holderCallback:p}):(h&&l.value.length>=h&&(y.key=b[0].notice.key,y.updateMark=zb(),y.userPassKey=g,b.shift()),b.push({notice:y,holderCallback:p})),l.value=b},c=function(f){l.value=l.value.filter(function(p){var g=p.notice,y=g.key,h=g.userPassKey,m=h||y;return m!==f})};return a({add:s,remove:c,notices:l}),function(){var d,f,p=e.prefixCls,g=e.closeIcon,y=g===void 0?(f=i.closeIcon)===null||f===void 0?void 0:f.call(i,{prefixCls:p}):g,h=l.value.map(function(b,C){var x=b.notice,S=b.holderCallback,w=C===l.value.length-1?x.updateMark:void 0,_=x.key,P=x.userPassKey,k=x.content,I=O(O(O({prefixCls:p,closeIcon:typeof y=="function"?y({prefixCls:p}):y},x),x.props),{key:_,noticeKey:P||_,updateMark:w,onClose:function(M){var T;c(M),(T=x.onClose)===null||T===void 0||T.call(x)},onClick:x.onClick});return S?v("div",{key:_,class:"".concat(p,"-hook-holder"),ref:function(M){typeof _>"u"||(M?(o.set(_,M),S(M,I)):o.delete(_))}},null):v(FM,I,{default:function(){return[typeof k=="function"?k({prefixCls:p}):k]}})}),m=(d={},D(d,p,1),D(d,r.class,!!r.class),d);return v("div",{class:m,style:r.style||{top:"65px",left:"50%"}},[v(zh,W({tag:"div"},u.value),{default:function(){return[h]}})])}}});vp.newInstance=function(e,t){var r=e||{},a=r.name,i=a===void 0?"notification":a,o=r.getContainer,l=r.appContext,u=r.prefixCls,s=r.rootPrefixCls,c=r.transitionName,d=r.hasTransitionName,f=jM(r,["name","getContainer","appContext","prefixCls","rootPrefixCls","transitionName","hasTransitionName"]),p=document.createElement("div");if(o){var g=o();g.appendChild(p)}else document.body.appendChild(p);var y=ae({name:"NotificationWrapper",setup:function(b,C){var x=C.attrs,S=q();return Ye(function(){t({notice:function(_){var P;(P=S.value)===null||P===void 0||P.add(_)},removeNotice:function(_){var P;(P=S.value)===null||P===void 0||P.remove(_)},destroy:function(){mc(null,p),p.parentNode&&p.parentNode.removeChild(p)},component:S})}),function(){var w=Xt,_=w.getPrefixCls(i,u),P=w.getRootPrefixCls(s,_),k=d?c:"".concat(P,"-").concat(c);return v(vm,W(W({},w),{},{notUpdateGlobalConfig:!0,prefixCls:P}),{default:function(){return[v(vp,W(W({ref:S},x),{},{prefixCls:_,transitionName:k}),null)]}})}}}),h=v(y,f);h.appContext=l||h.appContext,mc(h,p)};const H4=vp;var W4=3,U4,jt,LM=1,q4="",Y4="move-up",G4=!1,X4=function(){return document.body},Z4,Q4=!1;function RM(){return LM++}function $M(n){n.top!==void 0&&(U4=n.top,jt=null),n.duration!==void 0&&(W4=n.duration),n.prefixCls!==void 0&&(q4=n.prefixCls),n.getContainer!==void 0&&(X4=n.getContainer,jt=null),n.transitionName!==void 0&&(Y4=n.transitionName,jt=null,G4=!0),n.maxCount!==void 0&&(Z4=n.maxCount,jt=null),n.rtl!==void 0&&(Q4=n.rtl)}function BM(n,e){if(jt){e(jt);return}H4.newInstance({appContext:n.appContext,prefixCls:n.prefixCls||q4,rootPrefixCls:n.rootPrefixCls,transitionName:Y4,hasTransitionName:G4,style:{top:U4},getContainer:X4||n.getPopupContainer,maxCount:Z4,name:"message"},function(t){if(jt){e(jt);return}jt=t,e(t)})}var J4={info:e4,success:Cu,error:Jr,warning:wu,loading:Tr},VM=Object.keys(J4);function KM(n){var e=n.duration!==void 0?n.duration:W4,t=n.key||RM(),r=new Promise(function(i){var o=function(){return typeof n.onClose=="function"&&n.onClose(),i(!0)};BM(n,function(l){l.notice({key:t,duration:e,style:n.style||{},class:n.class,content:function(s){var c,d=s.prefixCls,f=J4[n.type],p=f?v(f,null,null):"",g=de("".concat(d,"-custom-content"),(c={},D(c,"".concat(d,"-").concat(n.type),n.type),D(c,"".concat(d,"-rtl"),Q4===!0),c));return v("div",{class:g},[typeof n.icon=="function"?n.icon():n.icon||p,v("span",null,[typeof n.content=="function"?n.content():n.content])])},onClose:o,onClick:n.onClick})})}),a=function(){jt&&jt.removeNotice(t)};return a.then=function(i,o){return r.then(i,o)},a.promise=r,a}function zM(n){return Object.prototype.toString.call(n)==="[object Object]"&&!!n.content}var xc={open:KM,config:$M,destroy:function(e){if(jt)if(e){var t=jt,r=t.removeNotice;r(e)}else{var a=jt,i=a.destroy;i(),jt=null}}};function HM(n,e){n[e]=function(t,r,a){return zM(t)?n.open(O(O({},t),{type:e})):(typeof r=="function"&&(a=r,r=void 0),n.open({content:t,duration:r,type:e,onClose:a}))}}VM.forEach(function(n){return HM(xc,n)});xc.warn=xc.warning;const kr=xc;var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e3={exports:{}},n3={exports:{}};(function(n){function e(t){return n.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n.exports.__esModule=!0,n.exports.default=n.exports,e(t)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(n3);(function(n){var e=n3.exports.default;function t(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n.exports=t=function(){return r},n.exports.__esModule=!0,n.exports.default=n.exports;var r={},a=Object.prototype,i=a.hasOwnProperty,o=typeof Symbol=="function"?Symbol:{},l=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(T,N,j){return Object.defineProperty(T,N,{value:j,enumerable:!0,configurable:!0,writable:!0}),T[N]}try{c({},"")}catch{c=function(j,$,A){return j[$]=A}}function d(T,N,j,$){var A=N&&N.prototype instanceof g?N:g,E=Object.create(A.prototype),L=new I($||[]);return E._invoke=function(B,K,H){var Z="suspendedStart";return function(Y,G){if(Z==="executing")throw new Error("Generator is already running");if(Z==="completed"){if(Y==="throw")throw G;return M()}for(H.method=Y,H.arg=G;;){var Q=H.delegate;if(Q){var z=_(Q,H);if(z){if(z===p)continue;return z}}if(H.method==="next")H.sent=H._sent=H.arg;else if(H.method==="throw"){if(Z==="suspendedStart")throw Z="completed",H.arg;H.dispatchException(H.arg)}else H.method==="return"&&H.abrupt("return",H.arg);Z="executing";var J=f(B,K,H);if(J.type==="normal"){if(Z=H.done?"completed":"suspendedYield",J.arg===p)continue;return{value:J.arg,done:H.done}}J.type==="throw"&&(Z="completed",H.method="throw",H.arg=J.arg)}}}(T,j,L),E}function f(T,N,j){try{return{type:"normal",arg:T.call(N,j)}}catch($){return{type:"throw",arg:$}}}r.wrap=d;var p={};function g(){}function y(){}function h(){}var m={};c(m,l,function(){return this});var b=Object.getPrototypeOf,C=b&&b(b(F([])));C&&C!==a&&i.call(C,l)&&(m=C);var x=h.prototype=g.prototype=Object.create(m);function S(T){["next","throw","return"].forEach(function(N){c(T,N,function(j){return this._invoke(N,j)})})}function w(T,N){function j(A,E,L,B){var K=f(T[A],T,E);if(K.type!=="throw"){var H=K.arg,Z=H.value;return Z&&e(Z)=="object"&&i.call(Z,"__await")?N.resolve(Z.__await).then(function(Y){j("next",Y,L,B)},function(Y){j("throw",Y,L,B)}):N.resolve(Z).then(function(Y){H.value=Y,L(H)},function(Y){return j("throw",Y,L,B)})}B(K.arg)}var $;this._invoke=function(A,E){function L(){return new N(function(B,K){j(A,E,B,K)})}return $=$?$.then(L,L):L()}}function _(T,N){var j=T.iterator[N.method];if(j===void 0){if(N.delegate=null,N.method==="throw"){if(T.iterator.return&&(N.method="return",N.arg=void 0,_(T,N),N.method==="throw"))return p;N.method="throw",N.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var $=f(j,T.iterator,N.arg);if($.type==="throw")return N.method="throw",N.arg=$.arg,N.delegate=null,p;var A=$.arg;return A?A.done?(N[T.resultName]=A.value,N.next=T.nextLoc,N.method!=="return"&&(N.method="next",N.arg=void 0),N.delegate=null,p):A:(N.method="throw",N.arg=new TypeError("iterator result is not an object"),N.delegate=null,p)}function P(T){var N={tryLoc:T[0]};1 in T&&(N.catchLoc=T[1]),2 in T&&(N.finallyLoc=T[2],N.afterLoc=T[3]),this.tryEntries.push(N)}function k(T){var N=T.completion||{};N.type="normal",delete N.arg,T.completion=N}function I(T){this.tryEntries=[{tryLoc:"root"}],T.forEach(P,this),this.reset(!0)}function F(T){if(T){var N=T[l];if(N)return N.call(T);if(typeof T.next=="function")return T;if(!isNaN(T.length)){var j=-1,$=function A(){for(;++j<T.length;)if(i.call(T,j))return A.value=T[j],A.done=!1,A;return A.value=void 0,A.done=!0,A};return $.next=$}}return{next:M}}function M(){return{value:void 0,done:!0}}return y.prototype=h,c(x,"constructor",h),c(h,"constructor",y),y.displayName=c(h,s,"GeneratorFunction"),r.isGeneratorFunction=function(T){var N=typeof T=="function"&&T.constructor;return!!N&&(N===y||(N.displayName||N.name)==="GeneratorFunction")},r.mark=function(T){return Object.setPrototypeOf?Object.setPrototypeOf(T,h):(T.__proto__=h,c(T,s,"GeneratorFunction")),T.prototype=Object.create(x),T},r.awrap=function(T){return{__await:T}},S(w.prototype),c(w.prototype,u,function(){return this}),r.AsyncIterator=w,r.async=function(T,N,j,$,A){A===void 0&&(A=Promise);var E=new w(d(T,N,j,$),A);return r.isGeneratorFunction(N)?E:E.next().then(function(L){return L.done?L.value:E.next()})},S(x),c(x,s,"Generator"),c(x,l,function(){return this}),c(x,"toString",function(){return"[object Generator]"}),r.keys=function(T){var N=[];for(var j in T)N.push(j);return N.reverse(),function $(){for(;N.length;){var A=N.pop();if(A in T)return $.value=A,$.done=!1,$}return $.done=!0,$}},r.values=F,I.prototype={constructor:I,reset:function(N){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!N)for(var j in this)j.charAt(0)==="t"&&i.call(this,j)&&!isNaN(+j.slice(1))&&(this[j]=void 0)},stop:function(){this.done=!0;var N=this.tryEntries[0].completion;if(N.type==="throw")throw N.arg;return this.rval},dispatchException:function(N){if(this.done)throw N;var j=this;function $(H,Z){return L.type="throw",L.arg=N,j.next=H,Z&&(j.method="next",j.arg=void 0),!!Z}for(var A=this.tryEntries.length-1;A>=0;--A){var E=this.tryEntries[A],L=E.completion;if(E.tryLoc==="root")return $("end");if(E.tryLoc<=this.prev){var B=i.call(E,"catchLoc"),K=i.call(E,"finallyLoc");if(B&&K){if(this.prev<E.catchLoc)return $(E.catchLoc,!0);if(this.prev<E.finallyLoc)return $(E.finallyLoc)}else if(B){if(this.prev<E.catchLoc)return $(E.catchLoc,!0)}else{if(!K)throw new Error("try statement without catch or finally");if(this.prev<E.finallyLoc)return $(E.finallyLoc)}}}},abrupt:function(N,j){for(var $=this.tryEntries.length-1;$>=0;--$){var A=this.tryEntries[$];if(A.tryLoc<=this.prev&&i.call(A,"finallyLoc")&&this.prev<A.finallyLoc){var E=A;break}}E&&(N==="break"||N==="continue")&&E.tryLoc<=j&&j<=E.finallyLoc&&(E=null);var L=E?E.completion:{};return L.type=N,L.arg=j,E?(this.method="next",this.next=E.finallyLoc,p):this.complete(L)},complete:function(N,j){if(N.type==="throw")throw N.arg;return N.type==="break"||N.type==="continue"?this.next=N.arg:N.type==="return"?(this.rval=this.arg=N.arg,this.method="return",this.next="end"):N.type==="normal"&&j&&(this.next=j),p},finish:function(N){for(var j=this.tryEntries.length-1;j>=0;--j){var $=this.tryEntries[j];if($.finallyLoc===N)return this.complete($.completion,$.afterLoc),k($),p}},catch:function(N){for(var j=this.tryEntries.length-1;j>=0;--j){var $=this.tryEntries[j];if($.tryLoc===N){var A=$.completion;if(A.type==="throw"){var E=A.arg;k($)}return E}}throw new Error("illegal catch attempt")},delegateYield:function(N,j,$){return this.delegate={iterator:F(N),resultName:j,nextLoc:$},this.method==="next"&&(this.arg=void 0),p}},r}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports})(e3);var Is=e3.exports(),zt=Is;try{regeneratorRuntime=Is}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Is:Function("r","regeneratorRuntime = r")(Is)}globalThis&&globalThis.__awaiter;var xi={},t3=4.5,r3="24px",a3="24px",pp="",i3="topRight",o3=function(){return document.body},l3=null,hp=!1,u3;function WM(n){var e=n.duration,t=n.placement,r=n.bottom,a=n.top,i=n.getContainer,o=n.closeIcon,l=n.prefixCls;l!==void 0&&(pp=l),e!==void 0&&(t3=e),t!==void 0&&(i3=t),r!==void 0&&(a3=typeof r=="number"?"".concat(r,"px"):r),a!==void 0&&(r3=typeof a=="number"?"".concat(a,"px"):a),i!==void 0&&(o3=i),o!==void 0&&(l3=o),n.rtl!==void 0&&(hp=n.rtl),n.maxCount!==void 0&&(u3=n.maxCount)}function UM(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:r3,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:a3,r;switch(n){case"top":r={left:"50%",transform:"translateX(-50%)",right:"auto",top:e,bottom:"auto"};break;case"topLeft":r={left:"0px",top:e,bottom:"auto"};break;case"topRight":r={right:"0px",top:e,bottom:"auto"};break;case"bottom":r={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:t};break;case"bottomLeft":r={left:"0px",top:"auto",bottom:t};break;default:r={right:"0px",top:"auto",bottom:t};break}return r}function qM(n,e){var t=n.prefixCls,r=n.placement,a=r===void 0?i3:r,i=n.getContainer,o=i===void 0?o3:i,l=n.top,u=n.bottom,s=n.closeIcon,c=s===void 0?l3:s,d=n.appContext,f=uA(),p=f.getPrefixCls,g=p("notification",t||pp),y="".concat(g,"-").concat(a,"-").concat(hp),h=xi[y];if(h){Promise.resolve(h).then(function(b){e(b)});return}var m=de("".concat(g,"-").concat(a),D({},"".concat(g,"-rtl"),hp===!0));H4.newInstance({name:"notification",prefixCls:t||pp,class:m,style:UM(a,l,u),appContext:d,getContainer:o,closeIcon:function(C){var x=C.prefixCls,S=v("span",{class:"".concat(x,"-close-x")},[yl(c,{},v(ea,{class:"".concat(x,"-close-icon")},null))]);return S},maxCount:u3,hasTransitionName:!0},function(b){xi[y]=b,e(b)})}var YM={success:eg,info:Eg,error:ig,warning:xd};function GM(n){var e=n.icon,t=n.type,r=n.description,a=n.message,i=n.btn,o=n.duration===void 0?t3:n.duration;qM(n,function(l){l.notice({content:function(s){var c=s.prefixCls,d="".concat(c,"-notice"),f=null;if(e)f=function(){return v("span",{class:"".concat(d,"-icon")},[yl(e)])};else if(t){var p=YM[t];f=function(){return v(p,{class:"".concat(d,"-icon ").concat(d,"-icon-").concat(t)},null)}}return v("div",{class:f?"".concat(d,"-with-icon"):""},[f&&f(),v("div",{class:"".concat(d,"-message")},[!r&&f?v("span",{class:"".concat(d,"-message-single-line-auto-margin")},null):null,yl(a)]),v("div",{class:"".concat(d,"-description")},[yl(r)]),i?v("span",{class:"".concat(d,"-btn")},[yl(i)]):null])},duration:o,closable:!0,onClose:n.onClose,onClick:n.onClick,key:n.key,style:n.style||{},class:n.class})})}var ru={open:GM,close:function(e){Object.keys(xi).forEach(function(t){return Promise.resolve(xi[t]).then(function(r){r.removeNotice(e)})})},config:WM,destroy:function(){Object.keys(xi).forEach(function(e){Promise.resolve(xi[e]).then(function(t){t.destroy()}),delete xi[e]})}},XM=["success","info","warning","error"];XM.forEach(function(n){ru[n]=function(e){return ru.open(O(O({},e),{type:n}))}});ru.warn=ru.warning;const cm=ru;function Hi(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var ZM="vc-util-key";function s3(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.mark;return e?e.startsWith("data-")?e:"data-".concat(e):ZM}function dm(n){if(n.attachTo)return n.attachTo;var e=document.querySelector("head");return e||document.body}function Hb(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t,r;if(!Hi())return null;var a=document.createElement("style");!((t=e.csp)===null||t===void 0)&&t.nonce&&(a.nonce=(r=e.csp)===null||r===void 0?void 0:r.nonce),a.innerHTML=n;var i=dm(e),o=i.firstChild;return e.prepend&&i.prepend?i.prepend(a):e.prepend&&o?i.insertBefore(a,o):i.appendChild(a),a}var gp=new Map;function QM(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=dm(e);return Array.from(gp.get(t).children).find(function(r){return r.tagName==="STYLE"&&r.getAttribute(s3(e))===n})}function JM(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,a,i,o=dm(t);if(!gp.has(o)){var l=Hb("",t),u=l.parentNode;gp.set(o,u),u.removeChild(l)}var s=QM(e,t);if(s)return((r=t.csp)===null||r===void 0?void 0:r.nonce)&&s.nonce!==((a=t.csp)===null||a===void 0?void 0:a.nonce)&&(s.nonce=(i=t.csp)===null||i===void 0?void 0:i.nonce),s.innerHTML!==n&&(s.innerHTML=n),s;var c=Hb(n,t);return c.setAttribute(s3(t),e),c}const On=function(n,e,t){K4(n,"[ant-design-vue: ".concat(e,"] ").concat(t))};var eA="-ant-".concat(Date.now(),"-").concat(Math.random());function nA(n,e){var t={},r=function(c,d){var f=c.clone();return f=(d==null?void 0:d(f))||f,f.toRgbString()},a=function(c,d){var f=new Ff(c),p=eu(f.toRgbString());t["".concat(d,"-color")]=r(f),t["".concat(d,"-color-disabled")]=p[1],t["".concat(d,"-color-hover")]=p[4],t["".concat(d,"-color-active")]=p[7],t["".concat(d,"-color-outline")]=f.clone().setAlpha(.2).toRgbString(),t["".concat(d,"-color-deprecated-bg")]=p[1],t["".concat(d,"-color-deprecated-border")]=p[3]};if(e.primaryColor){a(e.primaryColor,"primary");var i=new Ff(e.primaryColor),o=eu(i.toRgbString());o.forEach(function(s,c){t["primary-".concat(c+1)]=s}),t["primary-color-deprecated-l-35"]=r(i,function(s){return s.lighten(35)}),t["primary-color-deprecated-l-20"]=r(i,function(s){return s.lighten(20)}),t["primary-color-deprecated-t-20"]=r(i,function(s){return s.tint(20)}),t["primary-color-deprecated-t-50"]=r(i,function(s){return s.tint(50)}),t["primary-color-deprecated-f-12"]=r(i,function(s){return s.setAlpha(s.getAlpha()*.12)});var l=new Ff(o[0]);t["primary-color-active-deprecated-f-30"]=r(l,function(s){return s.setAlpha(s.getAlpha()*.3)}),t["primary-color-active-deprecated-d-02"]=r(l,function(s){return s.darken(2)})}e.successColor&&a(e.successColor,"success"),e.warningColor&&a(e.warningColor,"warning"),e.errorColor&&a(e.errorColor,"error"),e.infoColor&&a(e.infoColor,"info");var u=Object.keys(t).map(function(s){return"--".concat(n,"-").concat(s,": ").concat(t[s],";")});return`
  :root {
    `.concat(u.join(`
`),`
  }
  `).trim()}function tA(n,e){var t=nA(n,e);Hi()?JM(t,"".concat(eA,"-dynamic-theme")):On(!1,"ConfigProvider","SSR do not support dynamic theme with css variables.")}var c3=Symbol("GlobalFormContextKey"),rA=function(e){ln(c3,e)},aA=function(){return on(c3,{validateMessages:R(function(){})})},iA=function(){return{getTargetContainer:{type:Function},getPopupContainer:{type:Function},prefixCls:String,getPrefixCls:{type:Function},renderEmpty:{type:Function},transformCellText:{type:Function},csp:{type:Object,default:void 0},input:{type:Object},autoInsertSpaceInButton:{type:Boolean,default:void 0},locale:{type:Object,default:void 0},pageHeader:{type:Object},componentSize:{type:String},direction:{type:String},space:{type:Object},virtual:{type:Boolean,default:void 0},dropdownMatchSelectWidth:{type:[Number,Boolean],default:!0},form:{type:Object,default:void 0},notUpdateGlobalConfig:Boolean}},oA="ant";function wo(){return Xt.prefixCls||oA}var mp=kn({}),d3=kn({}),Xt=kn({});Ze(function(){O(Xt,mp,d3),Xt.prefixCls=wo(),Xt.getPrefixCls=function(n,e){return e||(n?"".concat(Xt.prefixCls,"-").concat(n):Xt.prefixCls)},Xt.getRootPrefixCls=function(n,e){return n||(Xt.prefixCls?Xt.prefixCls:e&&e.includes("-")?e.replace(/^(.*)-[^-]*$/,"$1"):wo())}});var Lf,lA=function(e){Lf&&Lf(),Lf=Ze(function(){O(d3,kn(e))}),e.theme&&tA(wo(),e.theme)},uA=function(){return{getPrefixCls:function(t,r){return r||(t?"".concat(wo(),"-").concat(t):wo())},getRootPrefixCls:function(t,r){return t||(Xt.prefixCls?Xt.prefixCls:r&&r.includes("-")?r.replace(/^(.*)-[^-]*$/,"$1"):wo())}}},Al=ae({name:"AConfigProvider",inheritAttrs:!1,props:iA(),setup:function(e,t){var r=t.slots,a=function(d,f){var p=e.prefixCls,g=p===void 0?"ant":p;return f||(d?"".concat(g,"-").concat(d):g)},i=function(d){var f=e.renderEmpty||r.renderEmpty||B4;return f(d)},o=function(d,f){var p=e.prefixCls;if(f)return f;var g=p||a("");return d?"".concat(g,"-").concat(d):g},l=kn(O(O({},e),{getPrefixCls:o,renderEmpty:i}));Object.keys(e).forEach(function(c){Pe(function(){return e[c]},function(){l[c]=e[c]})}),e.notUpdateGlobalConfig||(O(mp,l),Pe(l,function(){O(mp,l)}));var u=R(function(){var c,d,f={};return e.locale&&(f=((c=e.locale.Form)===null||c===void 0?void 0:c.defaultValidateMessages)||((d=Ir.Form)===null||d===void 0?void 0:d.defaultValidateMessages)||{}),e.form&&e.form.validateMessages&&(f=O(O({},f),e.form.validateMessages)),f});rA({validateMessages:u}),ln("configProvider",l);var s=function(d){var f;return v(z4,{locale:e.locale||d,ANT_MARK__:fp},{default:function(){return[(f=r.default)===null||f===void 0?void 0:f.call(r)]}})};return Ze(function(){e.direction&&(kr.config({rtl:e.direction==="rtl"}),cm.config({rtl:e.direction==="rtl"}))}),function(){return v(qo,{children:function(d,f,p){return s(p)}},null)}}}),fm=kn({getPrefixCls:function(e,t){return t||(e?"ant-".concat(e):"ant")},renderEmpty:B4,direction:"ltr"});Al.config=lA;Al.install=function(n){n.component(Al.name,Al)};const vm=Al,Le=function(n,e){var t=on("configProvider",fm),r=R(function(){return t.getPrefixCls(n,e.prefixCls)}),a=R(function(){var b;return(b=e.direction)!==null&&b!==void 0?b:t.direction}),i=R(function(){return t.getPrefixCls()}),o=R(function(){return t.autoInsertSpaceInButton}),l=R(function(){return t.renderEmpty}),u=R(function(){return t.space}),s=R(function(){return t.pageHeader}),c=R(function(){return t.form}),d=R(function(){return e.getTargetContainer||t.getTargetContainer}),f=R(function(){return e.getPopupContainer||t.getPopupContainer}),p=R(function(){var b;return(b=e.dropdownMatchSelectWidth)!==null&&b!==void 0?b:t.dropdownMatchSelectWidth}),g=R(function(){return(e.virtual===void 0?t.virtual!==!1:e.virtual!==!1)&&p.value!==!1}),y=R(function(){return e.size||t.componentSize}),h=R(function(){var b;return e.autocomplete||((b=t.input)===null||b===void 0?void 0:b.autocomplete)}),m=R(function(){return t.csp});return{configProvider:t,prefixCls:r,direction:a,size:y,getTargetContainer:d,getPopupContainer:f,space:u,pageHeader:s,form:c,autoInsertSpaceInButton:o,renderEmpty:l,virtual:g,dropdownMatchSelectWidth:p,rootPrefixCls:i,getPrefixCls:t.getPrefixCls,autocomplete:h,csp:m}};function un(n,e){for(var t=O({},n),r=0;r<e.length;r+=1){var a=e[r];delete t[a]}return t}function sA(){return typeof window<"u"?window:null}var po;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(po||(po={}));var cA=function(){return{offsetTop:Number,offsetBottom:Number,target:{type:Function,default:sA},prefixCls:String,onChange:Function,onTestUpdatePosition:Function}},dA=ae({name:"AAffix",props:cA(),setup:function(e,t){var r=t.slots,a=t.emit,i=t.expose,o=q(),l=q(),u=kn({affixStyle:void 0,placeholderStyle:void 0,status:po.None,lastAffix:!1,prevTarget:null,timeout:null}),s=Jn(),c=R(function(){return e.offsetBottom===void 0&&e.offsetTop===void 0?0:e.offsetTop}),d=R(function(){return e.offsetBottom}),f=function(){var C=u.status,x=u.lastAffix,S=e.target;if(!(C!==po.Prepare||!l.value||!o.value||!S)){var w=S();if(!!w){var _={status:po.None},P=Zu(w),k=Zu(o.value),I=Ab(k,P,c.value),F=Fb(k,P,d.value);I!==void 0?(_.affixStyle={position:"fixed",top:I,width:k.width+"px",height:k.height+"px"},_.placeholderStyle={width:k.width+"px",height:k.height+"px"}):F!==void 0&&(_.affixStyle={position:"fixed",bottom:F,width:k.width+"px",height:k.height+"px"},_.placeholderStyle={width:k.width+"px",height:k.height+"px"}),_.lastAffix=!!_.affixStyle,x!==_.lastAffix&&a("change",_.lastAffix),O(u,_)}}},p=function(){O(u,{status:po.Prepare,affixStyle:void 0,placeholderStyle:void 0}),s.update()},g=dp(function(){p()}),y=dp(function(){var b=e.target,C=u.affixStyle;if(b&&C){var x=b();if(x&&o.value){var S=Zu(x),w=Zu(o.value),_=Ab(w,S,c.value),P=Fb(w,S,d.value);if(_!==void 0&&C.top===_||P!==void 0&&C.bottom===P)return}}p()});i({updatePosition:g,lazyUpdatePosition:y}),Pe(function(){return e.target},function(b){var C=(b==null?void 0:b())||null;u.prevTarget!==C&&(Db(s),C&&(jb(C,s),g()),u.prevTarget=C)}),Pe(function(){return[e.offsetTop,e.offsetBottom]},g),Ye(function(){var b=e.target;b&&(u.timeout=setTimeout(function(){jb(b(),s),g()}))}),Nt(function(){f()}),Dt(function(){clearTimeout(u.timeout),Db(s),g.cancel(),y.cancel()});var h=Le("affix",e),m=h.prefixCls;return function(){var b,C=u.affixStyle,x=u.placeholderStyle,S=de(D({},m.value,C)),w=un(e,["prefixCls","offsetTop","offsetBottom","target","onChange","onTestUpdatePosition"]);return v(mr,{onResize:g},{default:function(){return[v("div",W(W({},w),{},{style:x,ref:o}),[v("div",{class:S,ref:l,style:C},[(b=r.default)===null||b===void 0?void 0:b.call(r)])])]}})}}});const f3=Gn(dA);function yp(n){return n!=null&&n===n.window}function pm(n,e){var t;if(typeof window>"u")return 0;var r=e?"scrollTop":"scrollLeft",a=0;return yp(n)?a=n[e?"pageYOffset":"pageXOffset"]:n instanceof Document?a=n.documentElement[r]:n&&(a=n[r]),n&&!yp(n)&&typeof a!="number"&&(a=(t=(n.ownerDocument||n).documentElement)===null||t===void 0?void 0:t[r]),a}function fA(n,e,t,r){var a=t-e;return n/=r/2,n<1?a/2*n*n*n+e:a/2*((n-=2)*n*n+2)+e}function hm(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.getContainer,r=t===void 0?function(){return window}:t,a=e.callback,i=e.duration,o=i===void 0?450:i,l=r(),u=pm(l,!0),s=Date.now(),c=function d(){var f=Date.now(),p=f-s,g=fA(p>o?o:p,u,n,o);yp(l)?l.scrollTo(window.pageXOffset,g):l instanceof HTMLDocument||l.constructor.name==="HTMLDocument"?l.documentElement.scrollTop=g:l.scrollTop=g,p<o?Qe(d):typeof a=="function"&&a()};Qe(c)}function Qu(){}var v3=Symbol("anchorContextKey"),vA=function(e){ln(v3,e)},pA=function(){return on(v3,{registerLink:Qu,unregisterLink:Qu,scrollTo:Qu,activeLink:R(function(){return""}),handleClick:Qu})};const hA=vA;function gA(){return window}function Wb(n,e){if(!n.getClientRects().length)return 0;var t=n.getBoundingClientRect();return t.width||t.height?e===window?(e=n.ownerDocument.documentElement,t.top-e.clientTop):t.top-e.getBoundingClientRect().top:t.top}var Ub=/#([\S ]+)$/,mA=function(){return{prefixCls:String,offsetTop:Number,bounds:Number,affix:{type:Boolean,default:!0},showInkInFixed:{type:Boolean,default:!1},getContainer:Function,wrapperClass:String,wrapperStyle:{type:Object,default:void 0},getCurrentAnchor:Function,targetOffset:Number,onChange:Function,onClick:Function}};const wi=ae({name:"AAnchor",inheritAttrs:!1,props:mA(),setup:function(e,t){var r=t.emit,a=t.attrs,i=t.slots,o=t.expose,l=Le("anchor",e),u=l.prefixCls,s=l.getTargetContainer,c=l.direction,d=q(),f=q(),p=kn({links:[],scrollContainer:null,scrollEvent:null,animating:!1}),g=q(null),y=R(function(){var S=e.getContainer;return S||s.value||gA}),h=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,_=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5,P=[],k=y.value();if(p.links.forEach(function(F){var M=Ub.exec(F.toString());if(!!M){var T=document.getElementById(M[1]);if(T){var N=Wb(T,k);N<w+_&&P.push({link:F,top:N})}}}),P.length){var I=P.reduce(function(F,M){return M.top>F.top?M:F});return I.link}return""},m=function(w){var _=e.getCurrentAnchor;g.value!==w&&(g.value=typeof _=="function"?_(w):w,r("change",w))},b=function(w){var _=e.offsetTop,P=e.targetOffset;m(w);var k=y.value(),I=pm(k,!0),F=Ub.exec(w);if(!!F){var M=document.getElementById(F[1]);if(!!M){var T=Wb(M,k),N=I+T;N-=P!==void 0?P:_||0,p.animating=!0,hm(N,{callback:function(){p.animating=!1},getContainer:y.value})}}};o({scrollTo:b});var C=function(){if(!p.animating){var w=e.offsetTop,_=e.bounds,P=e.targetOffset,k=h(P!==void 0?P:w||0,_);m(k)}},x=function(){var w=f.value.getElementsByClassName("".concat(u.value,"-link-title-active"))[0];w&&(d.value.style.top="".concat(w.offsetTop+w.clientHeight/2-4.5,"px"))};return hA({registerLink:function(w){p.links.includes(w)||p.links.push(w)},unregisterLink:function(w){var _=p.links.indexOf(w);_!==-1&&p.links.splice(_,1)},activeLink:g,scrollTo:b,handleClick:function(w,_){r("click",w,_)}}),Ye(function(){dn(function(){var S=y.value();p.scrollContainer=S,p.scrollEvent=Rn(p.scrollContainer,"scroll",C),C()})}),fn(function(){p.scrollEvent&&p.scrollEvent.remove()}),Nt(function(){if(p.scrollEvent){var S=y.value();p.scrollContainer!==S&&(p.scrollContainer=S,p.scrollEvent.remove(),p.scrollEvent=Rn(p.scrollContainer,"scroll",C),C())}x()}),function(){var S,w=e.offsetTop,_=e.affix,P=e.showInkInFixed,k=u.value,I=de("".concat(k,"-ink-ball"),{visible:g.value}),F=de(e.wrapperClass,"".concat(k,"-wrapper"),D({},"".concat(k,"-rtl"),c.value==="rtl")),M=de(k,D({},"".concat(k,"-fixed"),!_&&!P)),T=O({maxHeight:w?"calc(100vh - ".concat(w,"px)"):"100vh"},e.wrapperStyle),N=v("div",{class:F,style:T,ref:f},[v("div",{class:M},[v("div",{class:"".concat(k,"-ink")},[v("span",{class:I,ref:d},null)]),(S=i.default)===null||S===void 0?void 0:S.call(i)])]);return _?v(f3,W(W({},a),{},{offsetTop:w,target:y.value}),{default:function(){return[N]}}):N}}});var yA=function(){return{prefixCls:String,href:String,title:U.any,target:String}};const p3=ae({name:"AAnchorLink",props:vn(yA(),{href:"#"}),slots:["title"],setup:function(e,t){var r=t.slots,a=null,i=pA(),o=i.handleClick,l=i.scrollTo,u=i.unregisterLink,s=i.registerLink,c=i.activeLink,d=Le("anchor",e),f=d.prefixCls,p=function(y){var h=e.href;o(y,{title:a,href:h}),l(h)};return Pe(function(){return e.href},function(g,y){dn(function(){u(y),s(g)})}),Ye(function(){s(e.href)}),fn(function(){u(e.href)}),function(){var g,y=e.href,h=e.target,m=f.value,b=Vn(r,e,"title");a=b;var C=c.value===y,x=de("".concat(m,"-link"),D({},"".concat(m,"-link-active"),C)),S=de("".concat(m,"-link-title"),D({},"".concat(m,"-link-title-active"),C));return v("div",{class:x},[v("a",{class:S,href:y,title:typeof b=="string"?b:"",target:h,onClick:p},[b]),(g=r.default)===null||g===void 0?void 0:g.call(r)])}}});wi.Link=p3;wi.install=function(n){return n.component(wi.name,wi),n.component(wi.Link.name,wi.Link),n};function gm(n){return s4(n)||d4(n)||_d(n)||c4()}function qb(n,e){var t=n.key,r;return"value"in n&&(r=n.value),t!=null?t:r!==void 0?r:"rc-index-key-".concat(e)}function h3(n,e){var t=n||{},r=t.label,a=t.value,i=t.options;return{label:r||(e?"children":"label"),value:a||"value",options:i||"options"}}function bA(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.fieldNames,r=e.childrenAsData,a=[],i=h3(t,!1),o=i.label,l=i.value,u=i.options;function s(c,d){c.forEach(function(f){var p=f[o];if(d||!(u in f)){var g=f[l];a.push({key:qb(f,a.length),groupOption:d,data:f,label:p,value:g})}else{var y=p;y===void 0&&r&&(y=f.label),a.push({key:qb(f,a.length),group:!0,data:f,label:y}),s(f[u],!0)}})}return s(n,!1),a}function bp(n){var e=O({},n);return"props"in e||Object.defineProperty(e,"props",{get:function(){return e}}),e}function CA(n,e){if(!e||!e.length)return null;var t=!1;function r(i,o){var l=gm(o),u=l[0],s=l.slice(1);if(!u)return[i];var c=i.split(u);return t=t||c.length>1,c.reduce(function(d,f){return[].concat(Ee(d),Ee(r(f,s)))},[]).filter(function(d){return d})}var a=r(n,e);return t?a:null}function Si(n,e){return n?n.contains(e):!1}var g3=["moz","ms","webkit"];function xA(){var n=0;return function(e){var t=new Date().getTime(),r=Math.max(0,16-(t-n)),a=window.setTimeout(function(){e(t+r)},r);return n=t+r,a}}function wA(){if(typeof window>"u")return function(){};if(window.requestAnimationFrame)return window.requestAnimationFrame.bind(window);var n=g3.filter(function(e){return"".concat(e,"RequestAnimationFrame")in window})[0];return n?window["".concat(n,"RequestAnimationFrame")]:xA()}function SA(n){if(typeof window>"u")return null;if(window.cancelAnimationFrame)return window.cancelAnimationFrame(n);var e=g3.filter(function(t){return"".concat(t,"CancelAnimationFrame")in window||"".concat(t,"CancelRequestAnimationFrame")in window})[0];return e?(window["".concat(e,"CancelAnimationFrame")]||window["".concat(e,"CancelRequestAnimationFrame")]).call(this,n):clearTimeout(n)}var Yb=wA(),_A=function(e){return SA(e.id)},kA=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=Date.now();function a(){Date.now()-r>=t?e.call():i.id=Yb(a)}var i={id:Yb(a)};return i},mm={visible:Boolean,prefixCls:String,zIndex:Number,destroyPopupOnHide:Boolean,forceRender:Boolean,animation:[String,Object],transitionName:String,stretch:{type:String},align:{type:Object},point:{type:Object},getRootDomNode:{type:Function},getClassNameFromAlign:{type:Function},onMouseenter:{type:Function},onMouseleave:{type:Function},onMousedown:{type:Function},onTouchstart:{type:Function}},PA=O(O({},mm),{mobile:{type:Object}}),OA=O(O({},mm),{mask:Boolean,mobile:{type:Object},maskAnimation:String,maskTransitionName:String});function m3(n){var e=n.prefixCls,t=n.animation,r=n.transitionName;return t?{name:"".concat(e,"-").concat(t)}:r?{name:r}:{}}function y3(n){var e=n.prefixCls,t=n.visible,r=n.zIndex,a=n.mask,i=n.maskAnimation,o=n.maskTransitionName;if(!a)return null;var l={};return(o||i)&&(l=m3({prefixCls:e,transitionName:o,animation:i})),v(Lt,W({appear:!0},l),{default:function(){return[St(v("div",{style:{zIndex:r},class:"".concat(e,"-mask")},null),[[QO("if"),t]])]}})}y3.displayName="Mask";const TA=ae({name:"MobilePopupInner",inheritAttrs:!1,props:PA,emits:["mouseenter","mouseleave","mousedown","touchstart","align"],setup:function(e,t){var r=t.expose,a=t.slots,i=q();return r({forceAlign:function(){},getElement:function(){return i.value}}),function(){var o,l=e.zIndex,u=e.visible,s=e.prefixCls,c=e.mobile;c=c===void 0?{}:c;var d=c.popupClassName,f=c.popupStyle,p=c.popupMotion,g=p===void 0?{}:p,y=c.popupRender,h=O({zIndex:l},f),m=Fn((o=a.default)===null||o===void 0?void 0:o.call(a));m.length>1&&(m=v("div",{class:"".concat(s,"-content")},[m])),y&&(m=y(m));var b=de(s,d);return v(Lt,W({ref:i},g),{default:function(){return[u?v("div",{class:b,style:h},[m]):null]}})}}});var NA=globalThis&&globalThis.__awaiter||function(n,e,t,r){function a(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function l(c){try{s(r.next(c))}catch(d){o(d)}}function u(c){try{s(r.throw(c))}catch(d){o(d)}}function s(c){c.done?i(c.value):a(c.value).then(l,u)}s((r=r.apply(n,e||[])).next())})},Gb=["measure","align",null,"motion"];const IA=function(n,e){var t=q(null),r=q(),a=q(!1);function i(u){a.value||(t.value=u)}function o(){Qe.cancel(r.value)}function l(u){o(),r.value=Qe(function(){var s=t.value;switch(t.value){case"align":s="motion";break;case"motion":s="stable";break}i(s),u==null||u()})}return Pe(n,function(){i("measure")},{immediate:!0,flush:"post"}),Ye(function(){Pe(t,function(){switch(t.value){case"measure":e();break}t.value&&(r.value=Qe(function(){return NA(void 0,void 0,void 0,zt.mark(function u(){var s,c;return zt.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:s=Gb.indexOf(t.value),c=Gb[s+1],c&&s!==-1&&i(c);case 3:case"end":return f.stop()}},u)}))}))},{immediate:!0,flush:"post"})}),fn(function(){a.value=!0,o()}),[t,l]},EA=function(n){var e=q({width:0,height:0});function t(a){e.value={width:a.offsetWidth,height:a.offsetHeight}}var r=R(function(){var a={};if(n.value){var i=e.value,o=i.width,l=i.height;n.value.indexOf("height")!==-1&&l?a.height="".concat(l,"px"):n.value.indexOf("minHeight")!==-1&&l&&(a.minHeight="".concat(l,"px")),n.value.indexOf("width")!==-1&&o?a.width="".concat(o,"px"):n.value.indexOf("minWidth")!==-1&&o&&(a.minWidth="".concat(o,"px"))}return a});return[r,t]};function Xb(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Zb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Xb(Object(t),!0).forEach(function(r){MA(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Xb(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Es(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Es=function(e){return typeof e}:Es=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Es(n)}function MA(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var dl,AA={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function wc(){if(dl!==void 0)return dl;dl="";var n=document.createElement("p").style,e="Transform";for(var t in AA)t+e in n&&(dl=t);return dl}function b3(){return wc()?"".concat(wc(),"TransitionProperty"):"transitionProperty"}function Pd(){return wc()?"".concat(wc(),"Transform"):"transform"}function Qb(n,e){var t=b3();t&&(n.style[t]=e,t!=="transitionProperty"&&(n.style.transitionProperty=e))}function Rf(n,e){var t=Pd();t&&(n.style[t]=e,t!=="transform"&&(n.style.transform=e))}function FA(n){return n.style.transitionProperty||n.style[b3()]}function jA(n){var e=window.getComputedStyle(n,null),t=e.getPropertyValue("transform")||e.getPropertyValue(Pd());if(t&&t!=="none"){var r=t.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(r[12]||r[4],0),y:parseFloat(r[13]||r[5],0)}}return{x:0,y:0}}var DA=/matrix\((.*)\)/,LA=/matrix3d\((.*)\)/;function RA(n,e){var t=window.getComputedStyle(n,null),r=t.getPropertyValue("transform")||t.getPropertyValue(Pd());if(r&&r!=="none"){var a,i=r.match(DA);if(i)i=i[1],a=i.split(",").map(function(l){return parseFloat(l,10)}),a[4]=e.x,a[5]=e.y,Rf(n,"matrix(".concat(a.join(","),")"));else{var o=r.match(LA)[1];a=o.split(",").map(function(l){return parseFloat(l,10)}),a[12]=e.x,a[13]=e.y,Rf(n,"matrix3d(".concat(a.join(","),")"))}}else Rf(n,"translateX(".concat(e.x,"px) translateY(").concat(e.y,"px) translateZ(0)"))}var $A=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,Pu;function Jb(n){var e=n.style.display;n.style.display="none",n.offsetHeight,n.style.display=e}function So(n,e,t){var r=t;if(Es(e)==="object"){for(var a in e)e.hasOwnProperty(a)&&So(n,a,e[a]);return}if(typeof r<"u"){typeof r=="number"&&(r="".concat(r,"px")),n.style[e]=r;return}return Pu(n,e)}function BA(n){var e,t,r,a=n.ownerDocument,i=a.body,o=a&&a.documentElement;return e=n.getBoundingClientRect(),t=Math.floor(e.left),r=Math.floor(e.top),t-=o.clientLeft||i.clientLeft||0,r-=o.clientTop||i.clientTop||0,{left:t,top:r}}function C3(n,e){var t=n["page".concat(e?"Y":"X","Offset")],r="scroll".concat(e?"Top":"Left");if(typeof t!="number"){var a=n.document;t=a.documentElement[r],typeof t!="number"&&(t=a.body[r])}return t}function x3(n){return C3(n)}function w3(n){return C3(n,!0)}function au(n){var e=BA(n),t=n.ownerDocument,r=t.defaultView||t.parentWindow;return e.left+=x3(r),e.top+=w3(r),e}function ym(n){return n!=null&&n==n.window}function S3(n){return ym(n)?n.document:n.nodeType===9?n:n.ownerDocument}function VA(n,e,t){var r=t,a="",i=S3(n);return r=r||i.defaultView.getComputedStyle(n,null),r&&(a=r.getPropertyValue(e)||r[e]),a}var KA=new RegExp("^(".concat($A,")(?!px)[a-z%]+$"),"i"),zA=/^(top|right|bottom|left)$/,$f="currentStyle",Bf="runtimeStyle",si="left",HA="px";function WA(n,e){var t=n[$f]&&n[$f][e];if(KA.test(t)&&!zA.test(e)){var r=n.style,a=r[si],i=n[Bf][si];n[Bf][si]=n[$f][si],r[si]=e==="fontSize"?"1em":t||0,t=r.pixelLeft+HA,r[si]=a,n[Bf][si]=i}return t===""?"auto":t}typeof window<"u"&&(Pu=window.getComputedStyle?VA:WA);function Ju(n,e){return n==="left"?e.useCssRight?"right":n:e.useCssBottom?"bottom":n}function eC(n){if(n==="left")return"right";if(n==="right")return"left";if(n==="top")return"bottom";if(n==="bottom")return"top"}function nC(n,e,t){So(n,"position")==="static"&&(n.style.position="relative");var r=-999,a=-999,i=Ju("left",t),o=Ju("top",t),l=eC(i),u=eC(o);i!=="left"&&(r=999),o!=="top"&&(a=999);var s="",c=au(n);("left"in e||"top"in e)&&(s=FA(n)||"",Qb(n,"none")),"left"in e&&(n.style[l]="",n.style[i]="".concat(r,"px")),"top"in e&&(n.style[u]="",n.style[o]="".concat(a,"px")),Jb(n);var d=au(n),f={};for(var p in e)if(e.hasOwnProperty(p)){var g=Ju(p,t),y=p==="left"?r:a,h=c[p]-d[p];g===p?f[g]=y+h:f[g]=y-h}So(n,f),Jb(n),("left"in e||"top"in e)&&Qb(n,s);var m={};for(var b in e)if(e.hasOwnProperty(b)){var C=Ju(b,t),x=e[b]-c[b];b===C?m[C]=f[C]+x:m[C]=f[C]-x}So(n,m)}function UA(n,e){var t=au(n),r=jA(n),a={x:r.x,y:r.y};"left"in e&&(a.x=r.x+e.left-t.left),"top"in e&&(a.y=r.y+e.top-t.top),RA(n,a)}function qA(n,e,t){if(t.ignoreShake){var r=au(n),a=r.left.toFixed(0),i=r.top.toFixed(0),o=e.left.toFixed(0),l=e.top.toFixed(0);if(a===o&&i===l)return}t.useCssRight||t.useCssBottom?nC(n,e,t):t.useCssTransform&&Pd()in document.body.style?UA(n,e):nC(n,e,t)}function bm(n,e){for(var t=0;t<n.length;t++)e(n[t])}function _3(n){return Pu(n,"boxSizing")==="border-box"}var YA=["margin","border","padding"],Cp=-1,GA=2,xp=1,XA=0;function ZA(n,e,t){var r={},a=n.style,i;for(i in e)e.hasOwnProperty(i)&&(r[i]=a[i],a[i]=e[i]);t.call(n);for(i in e)e.hasOwnProperty(i)&&(a[i]=r[i])}function bl(n,e,t){var r=0,a,i,o;for(i=0;i<e.length;i++)if(a=e[i],a)for(o=0;o<t.length;o++){var l=void 0;a==="border"?l="".concat(a).concat(t[o],"Width"):l=a+t[o],r+=parseFloat(Pu(n,l))||0}return r}var qr={getParent:function(e){var t=e;do t.nodeType===11&&t.host?t=t.host:t=t.parentNode;while(t&&t.nodeType!==1&&t.nodeType!==9);return t}};bm(["Width","Height"],function(n){qr["doc".concat(n)]=function(e){var t=e.document;return Math.max(t.documentElement["scroll".concat(n)],t.body["scroll".concat(n)],qr["viewport".concat(n)](t))},qr["viewport".concat(n)]=function(e){var t="client".concat(n),r=e.document,a=r.body,i=r.documentElement,o=i[t];return r.compatMode==="CSS1Compat"&&o||a&&a[t]||o}});function tC(n,e,t){var r=t;if(ym(n))return e==="width"?qr.viewportWidth(n):qr.viewportHeight(n);if(n.nodeType===9)return e==="width"?qr.docWidth(n):qr.docHeight(n);var a=e==="width"?["Left","Right"]:["Top","Bottom"],i=Math.floor(e==="width"?n.getBoundingClientRect().width:n.getBoundingClientRect().height),o=_3(n),l=0;(i==null||i<=0)&&(i=void 0,l=Pu(n,e),(l==null||Number(l)<0)&&(l=n.style[e]||0),l=parseFloat(l)||0),r===void 0&&(r=o?xp:Cp);var u=i!==void 0||o,s=i||l;return r===Cp?u?s-bl(n,["border","padding"],a):l:u?r===xp?s:s+(r===GA?-bl(n,["border"],a):bl(n,["margin"],a)):l+bl(n,YA.slice(r),a)}var QA={position:"absolute",visibility:"hidden",display:"block"};function rC(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var r,a=e[0];return a.offsetWidth!==0?r=tC.apply(void 0,e):ZA(a,QA,function(){r=tC.apply(void 0,e)}),r}bm(["width","height"],function(n){var e=n.charAt(0).toUpperCase()+n.slice(1);qr["outer".concat(e)]=function(r,a){return r&&rC(r,n,a?XA:xp)};var t=n==="width"?["Left","Right"]:["Top","Bottom"];qr[n]=function(r,a){var i=a;if(i!==void 0){if(r){var o=_3(r);return o&&(i+=bl(r,["padding","border"],t)),So(r,n,i)}return}return r&&rC(r,n,Cp)}});function k3(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}var xn={getWindow:function(e){if(e&&e.document&&e.setTimeout)return e;var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},getDocument:S3,offset:function(e,t,r){if(typeof t<"u")qA(e,t,r||{});else return au(e)},isWindow:ym,each:bm,css:So,clone:function(e){var t,r={};for(t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);var a=e.overflow;if(a)for(t in e)e.hasOwnProperty(t)&&(r.overflow[t]=e.overflow[t]);return r},mix:k3,getWindowScrollLeft:function(e){return x3(e)},getWindowScrollTop:function(e){return w3(e)},merge:function(){for(var e={},t=0;t<arguments.length;t++)xn.mix(e,t<0||arguments.length<=t?void 0:arguments[t]);return e},viewportWidth:0,viewportHeight:0};k3(xn,qr);var Vf=xn.getParent;function wp(n){if(xn.isWindow(n)||n.nodeType===9)return null;var e=xn.getDocument(n),t=e.body,r,a=xn.css(n,"position"),i=a==="fixed"||a==="absolute";if(!i)return n.nodeName.toLowerCase()==="html"?null:Vf(n);for(r=Vf(n);r&&r!==t&&r.nodeType!==9;r=Vf(r))if(a=xn.css(r,"position"),a!=="static")return r;return null}var aC=xn.getParent;function JA(n){if(xn.isWindow(n)||n.nodeType===9)return!1;var e=xn.getDocument(n),t=e.body,r=null;for(r=aC(n);r&&r!==t&&r!==e;r=aC(r)){var a=xn.css(r,"position");if(a==="fixed")return!0}return!1}function Cm(n,e){for(var t={left:0,right:1/0,top:0,bottom:1/0},r=wp(n),a=xn.getDocument(n),i=a.defaultView||a.parentWindow,o=a.body,l=a.documentElement;r;){if((navigator.userAgent.indexOf("MSIE")===-1||r.clientWidth!==0)&&r!==o&&r!==l&&xn.css(r,"overflow")!=="visible"){var u=xn.offset(r);u.left+=r.clientLeft,u.top+=r.clientTop,t.top=Math.max(t.top,u.top),t.right=Math.min(t.right,u.left+r.clientWidth),t.bottom=Math.min(t.bottom,u.top+r.clientHeight),t.left=Math.max(t.left,u.left)}else if(r===o||r===l)break;r=wp(r)}var s=null;if(!xn.isWindow(n)&&n.nodeType!==9){s=n.style.position;var c=xn.css(n,"position");c==="absolute"&&(n.style.position="fixed")}var d=xn.getWindowScrollLeft(i),f=xn.getWindowScrollTop(i),p=xn.viewportWidth(i),g=xn.viewportHeight(i),y=l.scrollWidth,h=l.scrollHeight,m=window.getComputedStyle(o);if(m.overflowX==="hidden"&&(y=i.innerWidth),m.overflowY==="hidden"&&(h=i.innerHeight),n.style&&(n.style.position=s),e||JA(n))t.left=Math.max(t.left,d),t.top=Math.max(t.top,f),t.right=Math.min(t.right,d+p),t.bottom=Math.min(t.bottom,f+g);else{var b=Math.max(y,d+p);t.right=Math.min(t.right,b);var C=Math.max(h,f+g);t.bottom=Math.min(t.bottom,C)}return t.top>=0&&t.left>=0&&t.bottom>t.top&&t.right>t.left?t:null}function eF(n,e,t,r){var a=xn.clone(n),i={width:e.width,height:e.height};return r.adjustX&&a.left<t.left&&(a.left=t.left),r.resizeWidth&&a.left>=t.left&&a.left+i.width>t.right&&(i.width-=a.left+i.width-t.right),r.adjustX&&a.left+i.width>t.right&&(a.left=Math.max(t.right-i.width,t.left)),r.adjustY&&a.top<t.top&&(a.top=t.top),r.resizeHeight&&a.top>=t.top&&a.top+i.height>t.bottom&&(i.height-=a.top+i.height-t.bottom),r.adjustY&&a.top+i.height>t.bottom&&(a.top=Math.max(t.bottom-i.height,t.top)),xn.mix(a,i)}function xm(n){var e,t,r;if(!xn.isWindow(n)&&n.nodeType!==9)e=xn.offset(n),t=xn.outerWidth(n),r=xn.outerHeight(n);else{var a=xn.getWindow(n);e={left:xn.getWindowScrollLeft(a),top:xn.getWindowScrollTop(a)},t=xn.viewportWidth(a),r=xn.viewportHeight(a)}return e.width=t,e.height=r,e}function iC(n,e){var t=e.charAt(0),r=e.charAt(1),a=n.width,i=n.height,o=n.left,l=n.top;return t==="c"?l+=i/2:t==="b"&&(l+=i),r==="c"?o+=a/2:r==="r"&&(o+=a),{left:o,top:l}}function es(n,e,t,r,a){var i=iC(e,t[1]),o=iC(n,t[0]),l=[o.left-i.left,o.top-i.top];return{left:Math.round(n.left-l[0]+r[0]-a[0]),top:Math.round(n.top-l[1]+r[1]-a[1])}}function oC(n,e,t){return n.left<t.left||n.left+e.width>t.right}function lC(n,e,t){return n.top<t.top||n.top+e.height>t.bottom}function nF(n,e,t){return n.left>t.right||n.left+e.width<t.left}function tF(n,e,t){return n.top>t.bottom||n.top+e.height<t.top}function ns(n,e,t){var r=[];return xn.each(n,function(a){r.push(a.replace(e,function(i){return t[i]}))}),r}function ts(n,e){return n[e]=-n[e],n}function uC(n,e){var t;return/%$/.test(n)?t=parseInt(n.substring(0,n.length-1),10)/100*e:t=parseInt(n,10),t||0}function sC(n,e){n[0]=uC(n[0],e.width),n[1]=uC(n[1],e.height)}function P3(n,e,t,r){var a=t.points,i=t.offset||[0,0],o=t.targetOffset||[0,0],l=t.overflow,u=t.source||n;i=[].concat(i),o=[].concat(o),l=l||{};var s={},c=0,d=!!(l&&l.alwaysByViewport),f=Cm(u,d),p=xm(u);sC(i,p),sC(o,e);var g=es(p,e,a,i,o),y=xn.merge(p,g);if(f&&(l.adjustX||l.adjustY)&&r){if(l.adjustX&&oC(g,p,f)){var h=ns(a,/[lr]/gi,{l:"r",r:"l"}),m=ts(i,0),b=ts(o,0),C=es(p,e,h,m,b);nF(C,p,f)||(c=1,a=h,i=m,o=b)}if(l.adjustY&&lC(g,p,f)){var x=ns(a,/[tb]/gi,{t:"b",b:"t"}),S=ts(i,1),w=ts(o,1),_=es(p,e,x,S,w);tF(_,p,f)||(c=1,a=x,i=S,o=w)}c&&(g=es(p,e,a,i,o),xn.mix(y,g));var P=oC(g,p,f),k=lC(g,p,f);if(P||k){var I=a;P&&(I=ns(a,/[lr]/gi,{l:"r",r:"l"})),k&&(I=ns(a,/[tb]/gi,{t:"b",b:"t"})),a=I,i=t.offset||[0,0],o=t.targetOffset||[0,0]}s.adjustX=l.adjustX&&P,s.adjustY=l.adjustY&&k,(s.adjustX||s.adjustY)&&(y=eF(g,p,f,s))}return y.width!==p.width&&xn.css(u,"width",xn.width(u)+y.width-p.width),y.height!==p.height&&xn.css(u,"height",xn.height(u)+y.height-p.height),xn.offset(u,{left:y.left,top:y.top},{useCssRight:t.useCssRight,useCssBottom:t.useCssBottom,useCssTransform:t.useCssTransform,ignoreShake:t.ignoreShake}),{points:a,offset:i,targetOffset:o,overflow:s}}function rF(n,e){var t=Cm(n,e),r=xm(n);return!t||r.left+r.width<=t.left||r.top+r.height<=t.top||r.left>=t.right||r.top>=t.bottom}function wm(n,e,t){var r=t.target||e,a=xm(r),i=!rF(r,t.overflow&&t.overflow.alwaysByViewport);return P3(n,a,t,i)}wm.__getOffsetParent=wp;wm.__getVisibleRectForElement=Cm;function aF(n,e,t){var r,a,i=xn.getDocument(n),o=i.defaultView||i.parentWindow,l=xn.getWindowScrollLeft(o),u=xn.getWindowScrollTop(o),s=xn.viewportWidth(o),c=xn.viewportHeight(o);"pageX"in e?r=e.pageX:r=l+e.clientX,"pageY"in e?a=e.pageY:a=u+e.clientY;var d={left:r,top:a,width:0,height:0},f=r>=0&&r<=l+s&&a>=0&&a<=u+c,p=[t.points[0],"cc"];return P3(n,d,Zb(Zb({},t),{},{points:p}),f)}function wn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,a=n;if(Array.isArray(n)&&(a=Qn(n)[0]),!a)return null;var i=Pt(a,e,r);return i.props=t?O(O({},i.props),e):i.props,rt(Be(i.props.class)!=="object","class must be string"),i}function iF(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return n.map(function(r){return wn(r,e,t)})}const Sm=function(n){if(!n)return!1;if(n.offsetParent)return!0;if(n.getBBox){var e=n.getBBox();if(e.width||e.height)return!0}if(n.getBoundingClientRect){var t=n.getBoundingClientRect();if(t.width||t.height)return!0}return!1};function oF(n,e){return n===e?!0:!n||!e?!1:"pageX"in e&&"pageY"in e?n.pageX===e.pageX&&n.pageY===e.pageY:"clientX"in e&&"clientY"in e?n.clientX===e.clientX&&n.clientY===e.clientY:!1}function lF(n,e){n!==document.activeElement&&Si(e,n)&&typeof n.focus=="function"&&n.focus()}function cC(n,e){var t=null,r=null;function a(o){var l=Te(o,1),u=l[0].target;if(!!document.documentElement.contains(u)){var s=u.getBoundingClientRect(),c=s.width,d=s.height,f=Math.floor(c),p=Math.floor(d);(t!==f||r!==p)&&Promise.resolve().then(function(){e({width:f,height:p})}),t=f,r=p}}var i=new em(a);return n&&i.observe(n),function(){i.disconnect()}}const uF=function(n,e){var t=!1,r=null;function a(){clearTimeout(r)}function i(o){if(!t||o===!0){if(n()===!1)return;t=!0,a(),r=setTimeout(function(){t=!1},e.value)}else a(),r=setTimeout(function(){t=!1,i()},e.value)}return[i,function(){t=!1,a()}]};function sF(){this.__data__=[],this.size=0}function _m(n,e){return n===e||n!==n&&e!==e}function Od(n,e){for(var t=n.length;t--;)if(_m(n[t][0],e))return t;return-1}var cF=Array.prototype,dF=cF.splice;function fF(n){var e=this.__data__,t=Od(e,n);if(t<0)return!1;var r=e.length-1;return t==r?e.pop():dF.call(e,t,1),--this.size,!0}function vF(n){var e=this.__data__,t=Od(e,n);return t<0?void 0:e[t][1]}function pF(n){return Od(this.__data__,n)>-1}function hF(n,e){var t=this.__data__,r=Od(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this}function ka(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}ka.prototype.clear=sF;ka.prototype.delete=fF;ka.prototype.get=vF;ka.prototype.has=pF;ka.prototype.set=hF;function gF(){this.__data__=new ka,this.size=0}function mF(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}function yF(n){return this.__data__.get(n)}function bF(n){return this.__data__.has(n)}function Mr(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var CF="[object AsyncFunction]",xF="[object Function]",wF="[object GeneratorFunction]",SF="[object Proxy]";function O3(n){if(!Mr(n))return!1;var e=Ja(n);return e==xF||e==wF||e==CF||e==SF}var _F=Fr["__core-js_shared__"];const Kf=_F;var dC=function(){var n=/[^.]+$/.exec(Kf&&Kf.keys&&Kf.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function kF(n){return!!dC&&dC in n}var PF=Function.prototype,OF=PF.toString;function Wi(n){if(n!=null){try{return OF.call(n)}catch{}try{return n+""}catch{}}return""}var TF=/[\\^$.*+?()[\]{}|]/g,NF=/^\[object .+?Constructor\]$/,IF=Function.prototype,EF=Object.prototype,MF=IF.toString,AF=EF.hasOwnProperty,FF=RegExp("^"+MF.call(AF).replace(TF,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function jF(n){if(!Mr(n)||kF(n))return!1;var e=O3(n)?FF:NF;return e.test(Wi(n))}function DF(n,e){return n==null?void 0:n[e]}function Ui(n,e){var t=DF(n,e);return jF(t)?t:void 0}var LF=Ui(Fr,"Map");const iu=LF;var RF=Ui(Object,"create");const ou=RF;function $F(){this.__data__=ou?ou(null):{},this.size=0}function BF(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var VF="__lodash_hash_undefined__",KF=Object.prototype,zF=KF.hasOwnProperty;function HF(n){var e=this.__data__;if(ou){var t=e[n];return t===VF?void 0:t}return zF.call(e,n)?e[n]:void 0}var WF=Object.prototype,UF=WF.hasOwnProperty;function qF(n){var e=this.__data__;return ou?e[n]!==void 0:UF.call(e,n)}var YF="__lodash_hash_undefined__";function GF(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=ou&&e===void 0?YF:e,this}function Ri(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Ri.prototype.clear=$F;Ri.prototype.delete=BF;Ri.prototype.get=HF;Ri.prototype.has=qF;Ri.prototype.set=GF;function XF(){this.size=0,this.__data__={hash:new Ri,map:new(iu||ka),string:new Ri}}function ZF(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Td(n,e){var t=n.__data__;return ZF(e)?t[typeof e=="string"?"string":"hash"]:t.map}function QF(n){var e=Td(this,n).delete(n);return this.size-=e?1:0,e}function JF(n){return Td(this,n).get(n)}function ej(n){return Td(this,n).has(n)}function nj(n,e){var t=Td(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this}function Pa(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Pa.prototype.clear=XF;Pa.prototype.delete=QF;Pa.prototype.get=JF;Pa.prototype.has=ej;Pa.prototype.set=nj;var tj=200;function rj(n,e){var t=this.__data__;if(t instanceof ka){var r=t.__data__;if(!iu||r.length<tj-1)return r.push([n,e]),this.size=++t.size,this;t=this.__data__=new Pa(r)}return t.set(n,e),this.size=t.size,this}function Yr(n){var e=this.__data__=new ka(n);this.size=e.size}Yr.prototype.clear=gF;Yr.prototype.delete=mF;Yr.prototype.get=yF;Yr.prototype.has=bF;Yr.prototype.set=rj;var aj="__lodash_hash_undefined__";function ij(n){return this.__data__.set(n,aj),this}function oj(n){return this.__data__.has(n)}function jo(n){var e=-1,t=n==null?0:n.length;for(this.__data__=new Pa;++e<t;)this.add(n[e])}jo.prototype.add=jo.prototype.push=ij;jo.prototype.has=oj;function lj(n,e){for(var t=-1,r=n==null?0:n.length;++t<r;)if(e(n[t],t,n))return!0;return!1}function Sc(n,e){return n.has(e)}var uj=1,sj=2;function T3(n,e,t,r,a,i){var o=t&uj,l=n.length,u=e.length;if(l!=u&&!(o&&u>l))return!1;var s=i.get(n),c=i.get(e);if(s&&c)return s==e&&c==n;var d=-1,f=!0,p=t&sj?new jo:void 0;for(i.set(n,e),i.set(e,n);++d<l;){var g=n[d],y=e[d];if(r)var h=o?r(y,g,d,e,n,i):r(g,y,d,n,e,i);if(h!==void 0){if(h)continue;f=!1;break}if(p){if(!lj(e,function(m,b){if(!Sc(p,b)&&(g===m||a(g,m,t,r,i)))return p.push(b)})){f=!1;break}}else if(!(g===y||a(g,y,t,r,i))){f=!1;break}}return i.delete(n),i.delete(e),f}var cj=Fr.Uint8Array;const _c=cj;function dj(n){var e=-1,t=Array(n.size);return n.forEach(function(r,a){t[++e]=[a,r]}),t}function km(n){var e=-1,t=Array(n.size);return n.forEach(function(r){t[++e]=r}),t}var fj=1,vj=2,pj="[object Boolean]",hj="[object Date]",gj="[object Error]",mj="[object Map]",yj="[object Number]",bj="[object RegExp]",Cj="[object Set]",xj="[object String]",wj="[object Symbol]",Sj="[object ArrayBuffer]",_j="[object DataView]",fC=gr?gr.prototype:void 0,zf=fC?fC.valueOf:void 0;function kj(n,e,t,r,a,i,o){switch(t){case _j:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case Sj:return!(n.byteLength!=e.byteLength||!i(new _c(n),new _c(e)));case pj:case hj:case yj:return _m(+n,+e);case gj:return n.name==e.name&&n.message==e.message;case bj:case xj:return n==e+"";case mj:var l=dj;case Cj:var u=r&fj;if(l||(l=km),n.size!=e.size&&!u)return!1;var s=o.get(n);if(s)return s==e;r|=vj,o.set(n,e);var c=T3(l(n),l(e),r,a,i,o);return o.delete(n),c;case wj:if(zf)return zf.call(n)==zf.call(e)}return!1}function Pm(n,e){for(var t=-1,r=e.length,a=n.length;++t<r;)n[a+t]=e[t];return n}var Pj=Array.isArray;const yr=Pj;function N3(n,e,t){var r=e(n);return yr(n)?r:Pm(r,t(n))}function Oj(n,e){for(var t=-1,r=n==null?0:n.length,a=0,i=[];++t<r;){var o=n[t];e(o,t,n)&&(i[a++]=o)}return i}function I3(){return[]}var Tj=Object.prototype,Nj=Tj.propertyIsEnumerable,vC=Object.getOwnPropertySymbols,Ij=vC?function(n){return n==null?[]:(n=Object(n),Oj(vC(n),function(e){return Nj.call(n,e)}))}:I3;const Om=Ij;function Ej(n,e){for(var t=-1,r=Array(n);++t<n;)r[t]=e(t);return r}var Mj="[object Arguments]";function pC(n){return Nr(n)&&Ja(n)==Mj}var E3=Object.prototype,Aj=E3.hasOwnProperty,Fj=E3.propertyIsEnumerable,jj=pC(function(){return arguments}())?pC:function(n){return Nr(n)&&Aj.call(n,"callee")&&!Fj.call(n,"callee")};const Tm=jj;function Dj(){return!1}var M3=typeof Jt=="object"&&Jt&&!Jt.nodeType&&Jt,hC=M3&&typeof er=="object"&&er&&!er.nodeType&&er,Lj=hC&&hC.exports===M3,gC=Lj?Fr.Buffer:void 0,Rj=gC?gC.isBuffer:void 0,$j=Rj||Dj;const kc=$j;var Bj=9007199254740991,Vj=/^(?:0|[1-9]\d*)$/;function Nm(n,e){var t=typeof n;return e=e==null?Bj:e,!!e&&(t=="number"||t!="symbol"&&Vj.test(n))&&n>-1&&n%1==0&&n<e}var Kj=9007199254740991;function Im(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Kj}var zj="[object Arguments]",Hj="[object Array]",Wj="[object Boolean]",Uj="[object Date]",qj="[object Error]",Yj="[object Function]",Gj="[object Map]",Xj="[object Number]",Zj="[object Object]",Qj="[object RegExp]",Jj="[object Set]",eD="[object String]",nD="[object WeakMap]",tD="[object ArrayBuffer]",rD="[object DataView]",aD="[object Float32Array]",iD="[object Float64Array]",oD="[object Int8Array]",lD="[object Int16Array]",uD="[object Int32Array]",sD="[object Uint8Array]",cD="[object Uint8ClampedArray]",dD="[object Uint16Array]",fD="[object Uint32Array]",Un={};Un[aD]=Un[iD]=Un[oD]=Un[lD]=Un[uD]=Un[sD]=Un[cD]=Un[dD]=Un[fD]=!0;Un[zj]=Un[Hj]=Un[tD]=Un[Wj]=Un[rD]=Un[Uj]=Un[qj]=Un[Yj]=Un[Gj]=Un[Xj]=Un[Zj]=Un[Qj]=Un[Jj]=Un[eD]=Un[nD]=!1;function vD(n){return Nr(n)&&Im(n.length)&&!!Un[Ja(n)]}function Nd(n){return function(e){return n(e)}}var A3=typeof Jt=="object"&&Jt&&!Jt.nodeType&&Jt,Fl=A3&&typeof er=="object"&&er&&!er.nodeType&&er,pD=Fl&&Fl.exports===A3,Hf=pD&&f4.process,hD=function(){try{var n=Fl&&Fl.require&&Fl.require("util").types;return n||Hf&&Hf.binding&&Hf.binding("util")}catch{}}();const Do=hD;var mC=Do&&Do.isTypedArray,gD=mC?Nd(mC):vD;const F3=gD;var mD=Object.prototype,yD=mD.hasOwnProperty;function j3(n,e){var t=yr(n),r=!t&&Tm(n),a=!t&&!r&&kc(n),i=!t&&!r&&!a&&F3(n),o=t||r||a||i,l=o?Ej(n.length,String):[],u=l.length;for(var s in n)(e||yD.call(n,s))&&!(o&&(s=="length"||a&&(s=="offset"||s=="parent")||i&&(s=="buffer"||s=="byteLength"||s=="byteOffset")||Nm(s,u)))&&l.push(s);return l}var bD=Object.prototype;function Em(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||bD;return n===t}var CD=p4(Object.keys,Object);const xD=CD;var wD=Object.prototype,SD=wD.hasOwnProperty;function _D(n){if(!Em(n))return xD(n);var e=[];for(var t in Object(n))SD.call(n,t)&&t!="constructor"&&e.push(t);return e}function Ou(n){return n!=null&&Im(n.length)&&!O3(n)}function Go(n){return Ou(n)?j3(n):_D(n)}function Sp(n){return N3(n,Go,Om)}var kD=1,PD=Object.prototype,OD=PD.hasOwnProperty;function TD(n,e,t,r,a,i){var o=t&kD,l=Sp(n),u=l.length,s=Sp(e),c=s.length;if(u!=c&&!o)return!1;for(var d=u;d--;){var f=l[d];if(!(o?f in e:OD.call(e,f)))return!1}var p=i.get(n),g=i.get(e);if(p&&g)return p==e&&g==n;var y=!0;i.set(n,e),i.set(e,n);for(var h=o;++d<u;){f=l[d];var m=n[f],b=e[f];if(r)var C=o?r(b,m,f,e,n,i):r(m,b,f,n,e,i);if(!(C===void 0?m===b||a(m,b,t,r,i):C)){y=!1;break}h||(h=f=="constructor")}if(y&&!h){var x=n.constructor,S=e.constructor;x!=S&&"constructor"in n&&"constructor"in e&&!(typeof x=="function"&&x instanceof x&&typeof S=="function"&&S instanceof S)&&(y=!1)}return i.delete(n),i.delete(e),y}var ND=Ui(Fr,"DataView");const _p=ND;var ID=Ui(Fr,"Promise");const kp=ID;var ED=Ui(Fr,"Set");const _o=ED;var MD=Ui(Fr,"WeakMap");const Pp=MD;var yC="[object Map]",AD="[object Object]",bC="[object Promise]",CC="[object Set]",xC="[object WeakMap]",wC="[object DataView]",FD=Wi(_p),jD=Wi(iu),DD=Wi(kp),LD=Wi(_o),RD=Wi(Pp),gi=Ja;(_p&&gi(new _p(new ArrayBuffer(1)))!=wC||iu&&gi(new iu)!=yC||kp&&gi(kp.resolve())!=bC||_o&&gi(new _o)!=CC||Pp&&gi(new Pp)!=xC)&&(gi=function(n){var e=Ja(n),t=e==AD?n.constructor:void 0,r=t?Wi(t):"";if(r)switch(r){case FD:return wC;case jD:return yC;case DD:return bC;case LD:return CC;case RD:return xC}return e});const lu=gi;var $D=1,SC="[object Arguments]",_C="[object Array]",rs="[object Object]",BD=Object.prototype,kC=BD.hasOwnProperty;function VD(n,e,t,r,a,i){var o=yr(n),l=yr(e),u=o?_C:lu(n),s=l?_C:lu(e);u=u==SC?rs:u,s=s==SC?rs:s;var c=u==rs,d=s==rs,f=u==s;if(f&&kc(n)){if(!kc(e))return!1;o=!0,c=!1}if(f&&!c)return i||(i=new Yr),o||F3(n)?T3(n,e,t,r,a,i):kj(n,e,u,t,r,a,i);if(!(t&$D)){var p=c&&kC.call(n,"__wrapped__"),g=d&&kC.call(e,"__wrapped__");if(p||g){var y=p?n.value():n,h=g?e.value():e;return i||(i=new Yr),a(y,h,t,r,i)}}return f?(i||(i=new Yr),TD(n,e,t,r,a,i)):!1}function Id(n,e,t,r,a){return n===e?!0:n==null||e==null||!Nr(n)&&!Nr(e)?n!==n&&e!==e:VD(n,e,t,r,Id,a)}function uu(n,e){return Id(n,e)}var KD={align:Object,target:[Object,Function],onAlign:Function,monitorBufferTime:Number,monitorWindowResize:Boolean,disabled:Boolean};function PC(n){return typeof n!="function"?null:n()}function OC(n){return Be(n)!=="object"||!n?null:n}const zD=ae({name:"Align",props:KD,emits:["align"],setup:function(e,t){var r=t.expose,a=t.slots,i=q({}),o=q(),l=uF(function(){var y=e.disabled,h=e.target,m=e.align,b=e.onAlign;if(!y&&h&&o.value){var C=o.value,x,S=PC(h),w=OC(h);i.value.element=S,i.value.point=w,i.value.align=m;var _=document,P=_.activeElement;return S&&Sm(S)?x=wm(C,S,m):w&&(x=aF(C,w,m)),lF(P,C),b&&x&&b(C,x),!0}return!1},R(function(){return e.monitorBufferTime})),u=Te(l,2),s=u[0],c=u[1],d=q({cancel:function(){}}),f=q({cancel:function(){}}),p=function(){var h=e.target,m=PC(h),b=OC(h);o.value!==f.value.element&&(f.value.cancel(),f.value.element=o.value,f.value.cancel=cC(o.value,s)),(i.value.element!==m||!oF(i.value.point,b)||!uu(i.value.align,e.align))&&(s(),d.value.element!==m&&(d.value.cancel(),d.value.element=m,d.value.cancel=cC(m,s)))};Ye(function(){dn(function(){p()})}),Nt(function(){dn(function(){p()})}),Pe(function(){return e.disabled},function(y){y?c():s()},{immediate:!0,flush:"post"});var g=q(null);return Pe(function(){return e.monitorWindowResize},function(y){y?g.value||(g.value=Rn(window,"resize",s)):g.value&&(g.value.remove(),g.value=null)},{flush:"post"}),Dt(function(){d.value.cancel(),f.value.cancel(),g.value&&g.value.remove(),c()}),r({forceAlign:function(){return s(!0)}}),function(){var y=a==null?void 0:a.default();return y?wn(y[0],{ref:o},!0,!0):null}}}),HD=ae({name:"PopupInner",inheritAttrs:!1,props:mm,emits:["mouseenter","mouseleave","mousedown","touchstart","align"],setup:function(e,t){var r=t.expose,a=t.attrs,i=t.slots,o=q(),l=q(),u=q(),s=EA(We(e,"stretch")),c=Te(s,2),d=c[0],f=c[1],p=function(){e.stretch&&f(e.getRootDomNode())},g=q(!1),y;Pe(function(){return e.visible},function(F){clearTimeout(y),F?y=setTimeout(function(){g.value=e.visible}):g.value=!1},{immediate:!0});var h=IA(g,p),m=Te(h,2),b=m[0],C=m[1],x=q(),S=function(){return e.point?e.point:e.getRootDomNode},w=function(){var M;(M=o.value)===null||M===void 0||M.forceAlign()},_=function(M,T){var N,j=e.getClassNameFromAlign(T),$=u.value;u.value!==j&&(u.value=j),b.value==="align"&&($!==j?Promise.resolve().then(function(){w()}):C(function(){var A;(A=x.value)===null||A===void 0||A.call(x)}),(N=e.onAlign)===null||N===void 0||N.call(e,M,T))},P=R(function(){var F=Be(e.animation)==="object"?e.animation:m3(e);return["onAfterEnter","onAfterLeave"].forEach(function(M){var T=F[M];F[M]=function(N){C(),b.value="stable",T==null||T(N)}}),F}),k=function(){return new Promise(function(M){x.value=M})};Pe([P,b],function(){!P.value&&b.value==="motion"&&C()},{immediate:!0}),r({forceAlign:w,getElement:function(){return l.value.$el||l.value}});var I=R(function(){var F;return!(((F=e.align)===null||F===void 0?void 0:F.points)&&(b.value==="align"||b.value==="stable"))});return function(){var F,M=e.zIndex,T=e.align,N=e.prefixCls,j=e.destroyPopupOnHide,$=e.onMouseenter,A=e.onMouseleave,E=e.onTouchstart,L=E===void 0?function(){}:E,B=e.onMousedown,K=b.value,H=[O(O({},d.value),{zIndex:M,opacity:K==="motion"||K==="stable"||!g.value?null:0,pointerEvents:!g.value&&K!=="stable"?"none":null}),a.style],Z=Fn((F=i.default)===null||F===void 0?void 0:F.call(i,{visible:e.visible}));Z.length>1&&(Z=v("div",{class:"".concat(N,"-content")},[Z]));var Y=de(N,a.class,u.value),G=g.value||!e.visible,Q=G?ei(P.value.name,P.value):{};return v(Lt,W(W({ref:l},Q),{},{onBeforeEnter:k}),{default:function(){return!j||e.visible?St(v(zD,{target:S(),key:"popup",ref:o,monitorWindowResize:!0,disabled:I.value,align:T,onAlign:_},{default:function(){return v("div",W(W({class:Y,onMouseenter:$,onMouseleave:A,onMousedown:l0(B,["capture"])},D({},ot?"onTouchstartPassive":"onTouchstart",l0(L,["capture"]))),{},{style:H}),[Z])}}),[[Ar,g.value]]):null}})}}}),WD=ae({name:"Popup",inheritAttrs:!1,props:OA,setup:function(e,t){var r=t.attrs,a=t.slots,i=t.expose,o=q(!1),l=q(!1),u=q();return Pe([function(){return e.visible},function(){return e.mobile}],function(){o.value=e.visible,e.visible&&e.mobile&&(l.value=!0)},{immediate:!0,flush:"post"}),i({forceAlign:function(){var c;(c=u.value)===null||c===void 0||c.forceAlign()},getElement:function(){var c;return(c=u.value)===null||c===void 0?void 0:c.getElement()}}),function(){var s=O(O(O({},e),r),{visible:o.value}),c=l.value?v(TA,W(W({},s),{},{mobile:e.mobile,ref:u}),{default:a.default}):v(HD,W(W({},s),{},{ref:u}),{default:a.default});return v("div",null,[v(y3,s,null),c])}}});function UD(n,e,t){return t?n[0]===e[0]:n[0]===e[0]&&n[1]===e[1]}function TC(n,e,t){var r=n[e]||{};return O(O({},r),t)}function qD(n,e,t,r){for(var a=t.points,i=Object.keys(n),o=0;o<i.length;o+=1){var l=i[o];if(UD(n[l].points,a,r))return"".concat(e,"-placement-").concat(l)}return""}const qi={methods:{setState:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=typeof e=="function"?e(this.$data,this.$props):e;if(this.getDerivedStateFromProps){var a=this.getDerivedStateFromProps(m4(this),O(O({},this.$data),r));if(a===null)return;r=O(O({},r),a||{})}O(this.$data,r),this._.isMounted&&this.$forceUpdate(),dn(function(){t&&t()})},__emit:function(){var e=[].slice.call(arguments,0),t=e[0];t="on".concat(t[0].toUpperCase()).concat(t.substring(1));var r=this.$props[t]||this.$attrs[t];if(e.length&&r)if(Array.isArray(r))for(var a=0,i=r.length;a<i;a++)r[a].apply(r,Ee(e.slice(1)));else r.apply(void 0,Ee(e.slice(1)))}}};var D3=Symbol("TriggerContextKey"),L3=function(){var e=null;return ln(D3,{setPortal:function(r){e=r},popPortal:!0}),function(){return e}},YD=function(){return on(D3,{setPortal:function(){},popPortal:!1})},R3=Symbol("PortalContextKey"),Mm=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inTriggerContext:!0};ln(R3,{inTriggerContext:t.inTriggerContext,shouldRender:R(function(){var r=e||{},a=r.sPopupVisible,i=r.popupRef,o=r.forceRender,l=r.autoDestroy,u=!1;return(a||i||o)&&(u=!0),!a&&l&&(u=!1),u})})},GD=function(){Mm({},{inTriggerContext:!1});var e=on(R3,{shouldRender:R(function(){return!1}),inTriggerContext:!1});return{shouldRender:R(function(){return e.shouldRender.value||e.inTriggerContext===!1})}};const Op=ae({name:"Portal",inheritAttrs:!1,props:{getContainer:U.func.isRequired,didUpdate:Function},setup:function(e,t){var r=t.slots,a=!0,i,o=GD(),l=o.shouldRender;hd(function(){a=!1,l.value&&(i=e.getContainer())});var u=Pe(l,function(){l.value&&!i&&(i=e.getContainer()),i&&u()});return Nt(function(){dn(function(){var s;l.value&&((s=e.didUpdate)===null||s===void 0||s.call(e,e))})}),fn(function(){i&&i.parentNode&&i.parentNode.removeChild(i)}),function(){var s;return l.value?a?(s=r.default)===null||s===void 0?void 0:s.call(r):i?v(Vh,{to:i},r):null:null}}});function NC(){}function XD(){return""}function ZD(n){return n?n.ownerDocument:window.document}var QD=["onClick","onMousedown","onTouchstart","onMouseenter","onMouseleave","onFocus","onBlur","onContextmenu"];const Xo=ae({name:"Trigger",mixins:[qi],inheritAttrs:!1,props:{action:U.oneOfType([U.string,U.arrayOf(U.string)]).def([]),showAction:U.any.def([]),hideAction:U.any.def([]),getPopupClassNameFromAlign:U.any.def(XD),onPopupVisibleChange:Function,afterPopupVisibleChange:U.func.def(NC),popup:U.any,popupStyle:{type:Object,default:void 0},prefixCls:U.string.def("rc-trigger-popup"),popupClassName:U.string.def(""),popupPlacement:String,builtinPlacements:U.object,popupTransitionName:String,popupAnimation:U.any,mouseEnterDelay:U.number.def(0),mouseLeaveDelay:U.number.def(.1),zIndex:Number,focusDelay:U.number.def(0),blurDelay:U.number.def(.15),getPopupContainer:Function,getDocument:U.func.def(ZD),forceRender:{type:Boolean,default:void 0},destroyPopupOnHide:{type:Boolean,default:!1},mask:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},popupAlign:U.object.def(function(){return{}}),popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},maskTransitionName:String,maskAnimation:String,stretch:String,alignPoint:{type:Boolean,default:void 0},autoDestroy:{type:Boolean,default:!1},mobile:Object,getTriggerDOMNode:Function},setup:function(e){var t=R(function(){var u=e.popupPlacement,s=e.popupAlign,c=e.builtinPlacements;return u&&c?TC(c,u,s):s}),r=YD(),a=r.setPortal,i=r.popPortal,o=q(null),l=function(s){o.value=s};return{popPortal:i,setPortal:a,vcTriggerContext:on("vcTriggerContext",{}),popupRef:o,setPopupRef:l,triggerRef:q(null),align:t,focusTime:null,clickOutsideHandler:null,contextmenuOutsideHandler1:null,contextmenuOutsideHandler2:null,touchOutsideHandler:null,attachId:null,delayTimer:null,hasPopupMouseDown:!1,preClickTime:null,preTouchTime:null,mouseDownTimeout:null,childOriginEvents:{}}},data:function(){var e=this,t,r,a=this.$props,i;return this.popupVisible!==void 0?i=!!a.popupVisible:i=!!a.defaultPopupVisible,QD.forEach(function(o){e["fire".concat(o)]=function(l){e.fireEvents(o,l)}}),(r=(t=this).setPortal)===null||r===void 0||r.call(t,v(Op,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},{default:this.getComponent})),{prevPopupVisible:i,sPopupVisible:i,point:null}},watch:{popupVisible:function(e){e!==void 0&&(this.prevPopupVisible=this.sPopupVisible,this.sPopupVisible=e)}},created:function(){ln("vcTriggerContext",{onPopupMouseDown:this.onPopupMouseDown}),Mm(this)},deactivated:function(){this.setPopupVisible(!1)},mounted:function(){var e=this;this.$nextTick(function(){e.updatedCal()})},updated:function(){var e=this;this.$nextTick(function(){e.updatedCal()})},beforeUnmount:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),Qe.cancel(this.attachId)},methods:{updatedCal:function(){var e=this.$props,t=this.$data;if(t.sPopupVisible){var r;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextmenuToShow())&&(r=e.getDocument(this.getRootDomNode()),this.clickOutsideHandler=Rn(r,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(r=r||e.getDocument(this.getRootDomNode()),this.touchOutsideHandler=Rn(r,"touchstart",this.onDocumentClick,ot?{passive:!1}:!1)),!this.contextmenuOutsideHandler1&&this.isContextmenuToShow()&&(r=r||e.getDocument(this.getRootDomNode()),this.contextmenuOutsideHandler1=Rn(r,"scroll",this.onContextmenuClose)),!this.contextmenuOutsideHandler2&&this.isContextmenuToShow()&&(this.contextmenuOutsideHandler2=Rn(window,"blur",this.onContextmenuClose))}else this.clearOutsideHandler()},onMouseenter:function(e){var t=this.$props.mouseEnterDelay;this.fireEvents("onMouseenter",e),this.delaySetPopupVisible(!0,t,t?null:e)},onMouseMove:function(e){this.fireEvents("onMousemove",e),this.setPoint(e)},onMouseleave:function(e){this.fireEvents("onMouseleave",e),this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay)},onPopupMouseenter:function(){this.clearDelayTimer()},onPopupMouseleave:function(e){var t;e&&e.relatedTarget&&!e.relatedTarget.setTimeout&&Si((t=this.popupRef)===null||t===void 0?void 0:t.getElement(),e.relatedTarget)||this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay)},onFocus:function(e){this.fireEvents("onFocus",e),this.clearDelayTimer(),this.isFocusToShow()&&(this.focusTime=Date.now(),this.delaySetPopupVisible(!0,this.$props.focusDelay))},onMousedown:function(e){this.fireEvents("onMousedown",e),this.preClickTime=Date.now()},onTouchstart:function(e){this.fireEvents("onTouchstart",e),this.preTouchTime=Date.now()},onBlur:function(e){Si(e.target,e.relatedTarget||document.activeElement)||(this.fireEvents("onBlur",e),this.clearDelayTimer(),this.isBlurToHide()&&this.delaySetPopupVisible(!1,this.$props.blurDelay))},onContextmenu:function(e){e.preventDefault(),this.fireEvents("onContextmenu",e),this.setPopupVisible(!0,e)},onContextmenuClose:function(){this.isContextmenuToShow()&&this.close()},onClick:function(e){if(this.fireEvents("onClick",e),this.focusTime){var t;if(this.preClickTime&&this.preTouchTime?t=Math.min(this.preClickTime,this.preTouchTime):this.preClickTime?t=this.preClickTime:this.preTouchTime&&(t=this.preTouchTime),Math.abs(t-this.focusTime)<20)return;this.focusTime=0}this.preClickTime=0,this.preTouchTime=0,this.isClickToShow()&&(this.isClickToHide()||this.isBlurToHide())&&e&&e.preventDefault&&e.preventDefault(),e&&e.domEvent&&e.domEvent.preventDefault();var r=!this.$data.sPopupVisible;(this.isClickToHide()&&!r||r&&this.isClickToShow())&&this.setPopupVisible(!this.$data.sPopupVisible,e)},onPopupMouseDown:function(){var e=this,t=this.vcTriggerContext,r=t===void 0?{}:t;this.hasPopupMouseDown=!0,clearTimeout(this.mouseDownTimeout),this.mouseDownTimeout=setTimeout(function(){e.hasPopupMouseDown=!1},0),r.onPopupMouseDown&&r.onPopupMouseDown.apply(r,arguments)},onDocumentClick:function(e){if(!(this.$props.mask&&!this.$props.maskClosable)){var t=e.target,r=this.getRootDomNode(),a=this.getPopupDomNode();(!Si(r,t)||this.isContextMenuOnly())&&!Si(a,t)&&!this.hasPopupMouseDown&&this.delaySetPopupVisible(!1,.1)}},getPopupDomNode:function(){var e;return((e=this.popupRef)===null||e===void 0?void 0:e.getElement())||null},getRootDomNode:function(){var e=this.$props.getTriggerDOMNode;if(e){var t=za(this.triggerRef);return za(e(t))}try{var r=za(this.triggerRef);if(r)return r}catch{}return za(this)},handleGetPopupClassFromAlign:function(e){var t=[],r=this.$props,a=r.popupPlacement,i=r.builtinPlacements,o=r.prefixCls,l=r.alignPoint,u=r.getPopupClassNameFromAlign;return a&&i&&t.push(qD(i,o,e,l)),u&&t.push(u(e)),t.join(" ")},getPopupAlign:function(){var e=this.$props,t=e.popupPlacement,r=e.popupAlign,a=e.builtinPlacements;return t&&a?TC(a,t,r):r},getComponent:function(){var e=this,t={};this.isMouseEnterToShow()&&(t.onMouseenter=this.onPopupMouseenter),this.isMouseLeaveToHide()&&(t.onMouseleave=this.onPopupMouseleave),t.onMousedown=this.onPopupMouseDown,t[ot?"onTouchstartPassive":"onTouchstart"]=this.onPopupMouseDown;var r=this.handleGetPopupClassFromAlign,a=this.getRootDomNode,i=this.getContainer,o=this.$attrs,l=this.$props,u=l.prefixCls,s=l.destroyPopupOnHide,c=l.popupClassName,d=l.popupAnimation,f=l.popupTransitionName,p=l.popupStyle,g=l.mask,y=l.maskAnimation,h=l.maskTransitionName,m=l.zIndex,b=l.stretch,C=l.alignPoint,x=l.mobile,S=l.forceRender,w=this.$data,_=w.sPopupVisible,P=w.point,k=O(O({prefixCls:u,destroyPopupOnHide:s,visible:_,point:C?P:null,align:this.align,animation:d,getClassNameFromAlign:r,stretch:b,getRootDomNode:a,mask:g,zIndex:m,transitionName:f,maskAnimation:y,maskTransitionName:h,getContainer:i,class:c,style:p,onAlign:o.onPopupAlign||NC},t),{ref:this.setPopupRef,mobile:x,forceRender:S});return v(WD,k,{default:this.$slots.popup||function(){return im(e,"popup")}})},attachParent:function(e){var t=this;Qe.cancel(this.attachId);var r=this.$props,a=r.getPopupContainer,i=r.getDocument,o=this.getRootDomNode(),l;a?(o||a.length===0)&&(l=a(o)):l=i(this.getRootDomNode()).body,l?l.appendChild(e):this.attachId=Qe(function(){t.attachParent(e)})},getContainer:function(){var e=this.$props,t=e.getDocument,r=t(this.getRootDomNode()).createElement("div");return r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.width="100%",this.attachParent(r),r},setPopupVisible:function(e,t){var r=this.alignPoint,a=this.sPopupVisible,i=this.onPopupVisibleChange;this.clearDelayTimer(),a!==e&&(ga(this,"popupVisible")||this.setState({sPopupVisible:e,prevPopupVisible:a}),i&&i(e)),r&&t&&e&&this.setPoint(t)},setPoint:function(e){var t=this.$props.alignPoint;!t||!e||this.setState({point:{pageX:e.pageX,pageY:e.pageY}})},handlePortalUpdate:function(){this.prevPopupVisible!==this.sPopupVisible&&this.afterPopupVisibleChange(this.sPopupVisible)},delaySetPopupVisible:function(e,t,r){var a=this,i=t*1e3;if(this.clearDelayTimer(),i){var o=r?{pageX:r.pageX,pageY:r.pageY}:null;this.delayTimer=kA(function(){a.setPopupVisible(e,o),a.clearDelayTimer()},i)}else this.setPopupVisible(e,r)},clearDelayTimer:function(){this.delayTimer&&(_A(this.delayTimer),this.delayTimer=null)},clearOutsideHandler:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextmenuOutsideHandler1&&(this.contextmenuOutsideHandler1.remove(),this.contextmenuOutsideHandler1=null),this.contextmenuOutsideHandler2&&(this.contextmenuOutsideHandler2.remove(),this.contextmenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)},createTwoChains:function(e){var t=function(){},r=Ib(this);return this.childOriginEvents[e]&&r[e]?this["fire".concat(e)]:(t=this.childOriginEvents[e]||r[e]||t,t)},isClickToShow:function(){var e=this.$props,t=e.action,r=e.showAction;return t.indexOf("click")!==-1||r.indexOf("click")!==-1},isContextMenuOnly:function(){var e=this.$props.action;return e==="contextmenu"||e.length===1&&e[0]==="contextmenu"},isContextmenuToShow:function(){var e=this.$props,t=e.action,r=e.showAction;return t.indexOf("contextmenu")!==-1||r.indexOf("contextmenu")!==-1},isClickToHide:function(){var e=this.$props,t=e.action,r=e.hideAction;return t.indexOf("click")!==-1||r.indexOf("click")!==-1},isMouseEnterToShow:function(){var e=this.$props,t=e.action,r=e.showAction;return t.indexOf("hover")!==-1||r.indexOf("mouseenter")!==-1},isMouseLeaveToHide:function(){var e=this.$props,t=e.action,r=e.hideAction;return t.indexOf("hover")!==-1||r.indexOf("mouseleave")!==-1},isFocusToShow:function(){var e=this.$props,t=e.action,r=e.showAction;return t.indexOf("focus")!==-1||r.indexOf("focus")!==-1},isBlurToHide:function(){var e=this.$props,t=e.action,r=e.hideAction;return t.indexOf("focus")!==-1||r.indexOf("blur")!==-1},forcePopupAlign:function(){var e;this.$data.sPopupVisible&&((e=this.popupRef)===null||e===void 0||e.forceAlign())},fireEvents:function(e,t){this.childOriginEvents[e]&&this.childOriginEvents[e](t);var r=this.$props[e]||this.$attrs[e];r&&r(t)},close:function(){this.setPopupVisible(!1)}},render:function(){var e=this,t=this.$attrs,r=Qn(_u(this)),a=this.$props.alignPoint,i=r[0];this.childOriginEvents=Ib(i);var o={key:"trigger"};this.isContextmenuToShow()?o.onContextmenu=this.onContextmenu:o.onContextmenu=this.createTwoChains("onContextmenu"),this.isClickToHide()||this.isClickToShow()?(o.onClick=this.onClick,o.onMousedown=this.onMousedown,o[ot?"onTouchstartPassive":"onTouchstart"]=this.onTouchstart):(o.onClick=this.createTwoChains("onClick"),o.onMousedown=this.createTwoChains("onMousedown"),o[ot?"onTouchstartPassive":"onTouchstart"]=this.createTwoChains("onTouchstart")),this.isMouseEnterToShow()?(o.onMouseenter=this.onMouseenter,a&&(o.onMousemove=this.onMouseMove)):o.onMouseenter=this.createTwoChains("onMouseenter"),this.isMouseLeaveToHide()?o.onMouseleave=this.onMouseleave:o.onMouseleave=this.createTwoChains("onMouseleave"),this.isFocusToShow()||this.isBlurToHide()?(o.onFocus=this.onFocus,o.onBlur=this.onBlur):(o.onFocus=this.createTwoChains("onFocus"),o.onBlur=function(c){c&&(!c.relatedTarget||!Si(c.target,c.relatedTarget))&&e.createTwoChains("onBlur")(c)});var l=de(i&&i.props&&i.props.class,t.class);l&&(o.class=l);var u=wn(i,O(O({},o),{ref:"triggerRef"}),!0,!0);if(this.popPortal)return u;var s=v(Op,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},{default:this.getComponent});return v(qe,null,[s,u])}});var JD=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},eL=function(e){var t=e===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:t,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:t,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:t,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:t,adjustY:1}}}},nL=ae({name:"SelectTrigger",inheritAttrs:!1,props:{dropdownAlign:Object,visible:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},dropdownClassName:String,dropdownStyle:U.object,placement:String,empty:{type:Boolean,default:void 0},prefixCls:String,popupClassName:String,animation:String,transitionName:String,getPopupContainer:Function,dropdownRender:Function,containerWidth:Number,dropdownMatchSelectWidth:U.oneOfType([Number,Boolean]).def(!0),popupElement:U.any,direction:String,getTriggerDOMNode:Function,onPopupVisibleChange:Function,onPopupMouseEnter:Function},setup:function(e,t){var r=t.slots,a=t.attrs,i=t.expose,o=R(function(){var u=e.dropdownMatchSelectWidth;return eL(u)}),l=q();return i({getPopupElement:function(){return l.value}}),function(){var u=O(O({},e),a),s=u.empty,c=s===void 0?!1:s,d=JD(u,["empty"]),f=d.visible,p=d.dropdownAlign,g=d.prefixCls,y=d.popupElement,h=d.dropdownClassName,m=d.dropdownStyle,b=d.direction,C=b===void 0?"ltr":b,x=d.placement,S=d.dropdownMatchSelectWidth,w=d.containerWidth,_=d.dropdownRender,P=d.animation,k=d.transitionName,I=d.getPopupContainer,F=d.getTriggerDOMNode,M=d.onPopupVisibleChange,T=d.onPopupMouseEnter,N="".concat(g,"-dropdown"),j=y;_&&(j=_({menuNode:y,props:e}));var $=P?"".concat(N,"-").concat(P):k,A=O({minWidth:"".concat(w,"px")},m);return typeof S=="number"?A.width="".concat(S,"px"):S&&(A.width="".concat(w,"px")),v(Xo,W(W({},e),{},{showAction:M?["click"]:[],hideAction:M?["click"]:[],popupPlacement:x||(C==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:o.value,prefixCls:N,popupTransitionName:$,popupAlign:p,popupVisible:f,getPopupContainer:I,popupClassName:de(h,D({},"".concat(N,"-empty"),c)),popupStyle:A,getTriggerDOMNode:F,onPopupVisibleChange:M}),{default:r.default,popup:function(){return v("div",{ref:l,onMouseenter:T},[j])}})}}});const tL=nL;var gn={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=gn.F1&&t<=gn.F12)return!1;switch(t){case gn.ALT:case gn.CAPS_LOCK:case gn.CONTEXT_MENU:case gn.CTRL:case gn.DOWN:case gn.END:case gn.ESC:case gn.HOME:case gn.INSERT:case gn.LEFT:case gn.MAC_FF_META:case gn.META:case gn.NUMLOCK:case gn.NUM_CENTER:case gn.PAGE_DOWN:case gn.PAGE_UP:case gn.PAUSE:case gn.PRINT_SCREEN:case gn.RIGHT:case gn.SHIFT:case gn.UP:case gn.WIN_KEY:case gn.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=gn.ZERO&&e<=gn.NINE||e>=gn.NUM_ZERO&&e<=gn.NUM_MULTIPLY||e>=gn.A&&e<=gn.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&e===0)return!0;switch(e){case gn.SPACE:case gn.QUESTION_MARK:case gn.NUM_PLUS:case gn.NUM_MINUS:case gn.NUM_PERIOD:case gn.NUM_DIVISION:case gn.SEMICOLON:case gn.DASH:case gn.EQUALS:case gn.COMMA:case gn.PERIOD:case gn.SLASH:case gn.APOSTROPHE:case gn.SINGLE_QUOTE:case gn.OPEN_SQUARE_BRACKET:case gn.BACKSLASH:case gn.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const Ne=gn;var Ed=function(e,t){var r=t.slots,a,i=e.class,o=e.customizeIcon,l=e.customizeIconProps,u=e.onMousedown,s=e.onClick,c;return typeof o=="function"?c=o(l):c=o,v("span",{class:i,onMousedown:function(f){f.preventDefault(),u&&u(f)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:s,"aria-hidden":!0},[c!==void 0?c:v("span",{class:i.split(/\s+/).map(function(d){return"".concat(d,"-icon")})},[(a=r.default)===null||a===void 0?void 0:a.call(r)])])};Ed.inheritAttrs=!1;Ed.displayName="TransBtn";Ed.props={class:String,customizeIcon:U.any,customizeIconProps:U.any,onMousedown:Function,onClick:Function};const Pc=Ed;function rL(n){n.target.composing=!0}function IC(n){!n.target.composing||(n.target.composing=!1,aL(n.target,"input"))}function aL(n,e){var t=document.createEvent("HTMLEvents");t.initEvent(e,!0,!0),n.dispatchEvent(t)}function Wf(n,e,t,r){n.addEventListener(e,t,r)}var iL={created:function(e,t){(!t.modifiers||!t.modifiers.lazy)&&(Wf(e,"compositionstart",rL),Wf(e,"compositionend",IC),Wf(e,"change",IC))}};const Zo=iL;var oL={inputRef:U.any,prefixCls:String,id:String,inputElement:U.VueNode,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0},autocomplete:String,editable:{type:Boolean,default:void 0},activeDescendantId:String,value:String,open:{type:Boolean,default:void 0},tabindex:U.oneOfType([U.number,U.string]),attrs:U.object,onKeydown:{type:Function},onMousedown:{type:Function},onChange:{type:Function},onPaste:{type:Function},onCompositionstart:{type:Function},onCompositionend:{type:Function},onFocus:{type:Function},onBlur:{type:Function}},lL=ae({name:"Input",inheritAttrs:!1,props:oL,setup:function(e){var t=null,r=on("VCSelectContainerEvent");return function(){var a,i=e.prefixCls,o=e.id,l=e.inputElement,u=e.disabled,s=e.tabindex,c=e.autofocus,d=e.autocomplete,f=e.editable,p=e.activeDescendantId,g=e.value,y=e.onKeydown,h=e.onMousedown,m=e.onChange,b=e.onPaste,C=e.onCompositionstart,x=e.onCompositionend,S=e.onFocus,w=e.onBlur,_=e.open,P=e.inputRef,k=e.attrs,I=l||St(v("input",null,null),[[Zo]]),F=I.props||{},M=F.onKeydown,T=F.onInput,N=F.onFocus,j=F.onBlur,$=F.onMousedown,A=F.onCompositionstart,E=F.onCompositionend,L=F.style;return I=wn(I,O(O(O(O(O({type:"search"},F),{id:o,ref:P,disabled:u,tabindex:s,autocomplete:d||"off",autofocus:c,class:de("".concat(i,"-selection-search-input"),(a=I==null?void 0:I.props)===null||a===void 0?void 0:a.class),role:"combobox","aria-expanded":_,"aria-haspopup":"listbox","aria-owns":"".concat(o,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(o,"_list"),"aria-activedescendant":p}),k),{value:f?g:"",readonly:!f,unselectable:f?null:"on",style:O(O({},L),{opacity:f?null:0}),onKeydown:function(K){y(K),M&&M(K)},onMousedown:function(K){h(K),$&&$(K)},onInput:function(K){m(K),T&&T(K)},onCompositionstart:function(K){C(K),A&&A(K)},onCompositionend:function(K){x(K),E&&E(K)},onPaste:b,onFocus:function(){clearTimeout(t),N&&N(arguments.length<=0?void 0:arguments[0]),S&&S(arguments.length<=0?void 0:arguments[0]),r==null||r.focus(arguments.length<=0?void 0:arguments[0])},onBlur:function(){for(var K=arguments.length,H=new Array(K),Z=0;Z<K;Z++)H[Z]=arguments[Z];t=setTimeout(function(){j&&j(H[0]),w&&w(H[0]),r==null||r.blur(H[0])},100)}}),I.type==="textarea"?{}:{type:"search"}),!0,!0),I}}});const $3=lL;var uL=`accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`,sL=`onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`,EC="".concat(uL," ").concat(sL).split(/[\s\n]+/),cL="aria-",dL="data-";function MC(n,e){return n.indexOf(e)===0}function ni(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t;e===!1?t={aria:!0,data:!0,attr:!0}:e===!0?t={aria:!0}:t=O({},e);var r={};return Object.keys(n).forEach(function(a){(t.aria&&(a==="role"||MC(a,cL))||t.data&&MC(a,dL)||t.attr&&(EC.includes(a)||EC.includes(a.toLowerCase())))&&(r[a]=n[a])}),r}var B3=Symbol("OverflowContextProviderKey"),Tp=ae({name:"OverflowContextProvider",inheritAttrs:!1,props:{value:{type:Object}},setup:function(e,t){var r=t.slots;return ln(B3,R(function(){return e.value})),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}}),fL=function(){return on(B3,R(function(){return null}))},vL=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},Ji=void 0;const Ms=ae({name:"Item",props:{prefixCls:String,item:U.any,renderItem:Function,responsive:Boolean,itemKey:{type:[String,Number]},registerSize:Function,display:Boolean,order:Number,component:U.any,invalidate:Boolean},setup:function(e,t){var r=t.slots,a=t.expose,i=R(function(){return e.responsive&&!e.display}),o=q();a({itemNodeRef:o});function l(u){e.registerSize(e.itemKey,u)}return Dt(function(){l(null)}),function(){var u,s=e.prefixCls,c=e.invalidate,d=e.item,f=e.renderItem,p=e.responsive;e.registerSize,e.itemKey,e.display;var g=e.order,y=e.component,h=y===void 0?"div":y,m=vL(e,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","display","order","component"]),b=(u=r.default)===null||u===void 0?void 0:u.call(r),C=f&&d!==Ji?f(d):b,x;c||(x={opacity:i.value?0:1,height:i.value?0:Ji,overflowY:i.value?"hidden":Ji,order:p?g:Ji,pointerEvents:i.value?"none":Ji,position:i.value?"absolute":Ji});var S={};return i.value&&(S["aria-hidden"]=!0),v(mr,{disabled:!p,onResize:function(_){var P=_.offsetWidth;l(P)}},{default:function(){return v(h,W(W(W({class:de(!c&&s),style:x},S),m),{},{ref:o}),{default:function(){return[C]}})}})}}});var Uf=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};const pL=ae({name:"RawItem",inheritAttrs:!1,props:{component:U.any,title:U.any,id:String,onMouseenter:{type:Function},onMouseleave:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onFocus:{type:Function}},setup:function(e,t){var r=t.slots,a=t.attrs,i=fL();return function(){var o;if(!i.value){var l=e.component,u=l===void 0?"div":l,s=Uf(e,["component"]);return v(u,W(W({},s),a),{default:function(){return[(o=r.default)===null||o===void 0?void 0:o.call(r)]}})}var c=i.value,d=c.className,f=Uf(c,["className"]),p=a.class,g=Uf(a,["class"]);return v(Tp,{value:null},{default:function(){return[v(Ms,W(W(W({class:de(d,p)},f),g),e),r)]}})}}});var hL=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},V3="responsive",K3="invalidate";function gL(n){return"+ ".concat(n.length," ...")}var mL=function(){return{id:String,prefixCls:String,data:Array,itemKey:[String,Number,Function],itemWidth:{type:Number,default:10},renderItem:Function,renderRawItem:Function,maxCount:[Number,String],renderRest:Function,renderRawRest:Function,suffix:U.any,component:String,itemComponent:U.any,onVisibleChange:Function,ssr:String,onMousedown:Function}},Md=ae({name:"Overflow",inheritAttrs:!1,props:mL(),emits:["visibleChange"],setup:function(e,t){var r=t.attrs,a=t.emit,i=t.slots,o=R(function(){return e.ssr==="full"}),l=q(null),u=R(function(){return l.value||0}),s=q(new Map),c=q(0),d=q(0),f=q(0),p=q(null),g=q(null),y=R(function(){return g.value===null&&o.value?Number.MAX_SAFE_INTEGER:g.value||0}),h=q(!1),m=R(function(){return"".concat(e.prefixCls,"-item")}),b=R(function(){return Math.max(c.value,d.value)}),C=R(function(){return!!(e.data.length&&e.maxCount===V3)}),x=R(function(){return e.maxCount===K3}),S=R(function(){return C.value||typeof e.maxCount=="number"&&e.data.length>e.maxCount}),w=R(function(){var $=e.data;return C.value?l.value===null&&o.value?$=e.data:$=e.data.slice(0,Math.min(e.data.length,u.value/e.itemWidth)):typeof e.maxCount=="number"&&($=e.data.slice(0,e.maxCount)),$}),_=R(function(){return C.value?e.data.slice(y.value+1):e.data.slice(w.value.length)}),P=function(A,E){var L,B;return typeof e.itemKey=="function"?e.itemKey(A):(B=e.itemKey&&((L=A)===null||L===void 0?void 0:L[e.itemKey]))!==null&&B!==void 0?B:E},k=R(function(){return e.renderItem||function($){return $}}),I=function(A,E){g.value=A,E||(h.value=A<e.data.length-1,a("visibleChange",A))},F=function(A,E){l.value=E.clientWidth},M=function(A,E){var L=new Map(s.value);E===null?L.delete(A):L.set(A,E),s.value=L},T=function(A,E){c.value=d.value,d.value=E},N=function(A,E){f.value=E},j=function(A){return s.value.get(P(w.value[A],A))};return Pe([u,s,d,f,function(){return e.itemKey},w],function(){if(u.value&&b.value&&w.value){var $=f.value,A=w.value.length,E=A-1;if(!A){I(0),p.value=null;return}for(var L=0;L<A;L+=1){var B=j(L);if(B===void 0){I(L-1,!0);break}if($+=B,E===0&&$<=u.value||L===E-1&&$+j(E)<=u.value){I(E),p.value=null;break}else if($+b.value>u.value){I(L-1),p.value=$-B-f.value+d.value;break}}e.suffix&&j(0)+f.value>u.value&&(p.value=null)}}),function(){var $=h.value&&!!_.value.length,A=e.itemComponent,E=e.renderRawItem,L=e.renderRawRest,B=e.renderRest,K=e.prefixCls,H=K===void 0?"rc-overflow":K,Z=e.suffix,Y=e.component,G=Y===void 0?"div":Y,Q=e.id,z=e.onMousedown,J=r.class,ne=r.style,oe=hL(r,["class","style"]),ce={};p.value!==null&&C.value&&(ce={position:"absolute",left:"".concat(p.value,"px"),top:0});var se={prefixCls:m.value,responsive:C.value,component:A,invalidate:x.value},V=E?function(ge,fe){var re=P(ge,fe);return v(Tp,{key:re,value:O(O({},se),{order:fe,item:ge,itemKey:re,registerSize:M,display:fe<=y.value})},{default:function(){return[E(ge,fe)]}})}:function(ge,fe){var re=P(ge,fe);return v(Ms,W(W({},se),{},{order:fe,key:re,item:ge,renderItem:k.value,itemKey:re,registerSize:M,display:fe<=y.value}),null)},X=function(){return null},ee={order:$?y.value:Number.MAX_SAFE_INTEGER,className:"".concat(m.value," ").concat(m.value,"-rest"),registerSize:T,display:$};if(L)L&&(X=function(){return v(Tp,{value:O(O({},se),ee)},{default:function(){return[L(_.value)]}})});else{var ue=B||gL;X=function(){return v(Ms,W(W({},se),ee),{default:function(){return typeof ue=="function"?ue(_.value):ue}})}}var ie=function(){var fe;return v(G,W({id:Q,class:de(!x.value&&H,J),style:ne,onMousedown:z},oe),{default:function(){return[w.value.map(V),S.value?X():null,Z&&v(Ms,W(W({},se),{},{order:y.value,class:"".concat(m.value,"-suffix"),registerSize:N,display:!0,style:ce}),{default:function(){return Z}}),(fe=i.default)===null||fe===void 0?void 0:fe.call(i)]}})};return v(mr,{disabled:!C.value,onResize:F},{default:ie})}}});Md.Item=pL;Md.RESPONSIVE=V3;Md.INVALIDATE=K3;const ko=Md;var z3=Symbol("TreeSelectLegacyContextPropsKey");function yL(n){return ln(z3,n)}function Ad(){return on(z3,{})}var bL={id:String,prefixCls:String,values:U.array,open:{type:Boolean,default:void 0},searchValue:String,inputRef:U.any,placeholder:U.any,disabled:{type:Boolean,default:void 0},mode:String,showSearch:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0},autocomplete:String,activeDescendantId:String,tabindex:U.oneOfType([U.number,U.string]),removeIcon:U.any,choiceTransitionName:String,maxTagCount:U.oneOfType([U.number,U.string]),maxTagTextLength:Number,maxTagPlaceholder:U.any.def(function(){return function(n){return"+ ".concat(n.length," ...")}}),tagRender:Function,onToggleOpen:{type:Function},onRemove:Function,onInputChange:Function,onInputPaste:Function,onInputKeyDown:Function,onInputMouseDown:Function,onInputCompositionStart:Function,onInputCompositionEnd:Function},AC=function(e){e.preventDefault(),e.stopPropagation()},CL=ae({name:"MultipleSelectSelector",inheritAttrs:!1,props:bL,setup:function(e){var t=q(),r=q(0),a=q(!1),i=Ad(),o=R(function(){return"".concat(e.prefixCls,"-selection")}),l=R(function(){return e.open||e.mode==="tags"?e.searchValue:""}),u=R(function(){return e.mode==="tags"||e.showSearch&&(e.open||a.value)});Ye(function(){Pe(l,function(){r.value=t.value.scrollWidth},{flush:"post",immediate:!0})});function s(p,g,y,h,m){return v("span",{class:de("".concat(o.value,"-item"),D({},"".concat(o.value,"-item-disabled"),y)),title:typeof p=="string"||typeof p=="number"?p.toString():void 0},[v("span",{class:"".concat(o.value,"-item-content")},[g]),h&&v(Pc,{class:"".concat(o.value,"-item-remove"),onMousedown:AC,onClick:m,customizeIcon:e.removeIcon},{default:function(){return[tt("\xD7")]}})])}function c(p,g,y,h,m,b){var C,x=function(_){AC(_),e.onToggleOpen(!open)},S=b;return i.keyEntities&&(S=((C=i.keyEntities[p])===null||C===void 0?void 0:C.node)||{}),v("span",{key:p,onMousedown:x},[e.tagRender({label:g,value:p,disabled:y,closable:h,onClose:m,option:S})])}function d(p){var g=p.disabled,y=p.label,h=p.value,m=p.option,b=!e.disabled&&!g,C=y;if(typeof e.maxTagTextLength=="number"&&(typeof y=="string"||typeof y=="number")){var x=String(C);x.length>e.maxTagTextLength&&(C="".concat(x.slice(0,e.maxTagTextLength),"..."))}var S=function(_){var P;_&&_.stopPropagation(),(P=e.onRemove)===null||P===void 0||P.call(e,p)};return typeof e.tagRender=="function"?c(h,C,g,b,S,m):s(y,C,g,b,S)}function f(p){var g=e.maxTagPlaceholder,y=g===void 0?function(m){return"+ ".concat(m.length," ...")}:g,h=typeof y=="function"?y(p):y;return s(h,h,!1)}return function(){var p=e.id,g=e.prefixCls,y=e.values,h=e.open,m=e.inputRef,b=e.placeholder,C=e.disabled,x=e.autofocus,S=e.autocomplete,w=e.activeDescendantId,_=e.tabindex,P=e.onInputChange,k=e.onInputPaste,I=e.onInputKeyDown,F=e.onInputMouseDown,M=e.onInputCompositionStart,T=e.onInputCompositionEnd,N=v("div",{class:"".concat(o.value,"-search"),style:{width:r.value+"px"},key:"input"},[v($3,{inputRef:m,open:h,prefixCls:g,id:p,inputElement:null,disabled:C,autofocus:x,autocomplete:S,editable:u.value,activeDescendantId:w,value:l.value,onKeydown:I,onMousedown:F,onChange:P,onPaste:k,onCompositionstart:M,onCompositionend:T,tabindex:_,attrs:ni(e,!0),onFocus:function(){return a.value=!0},onBlur:function(){return a.value=!1}},null),v("span",{ref:t,class:"".concat(o.value,"-search-mirror"),"aria-hidden":!0},[l.value,tt("\xA0")])]),j=v(ko,{prefixCls:"".concat(o.value,"-overflow"),data:y,renderItem:d,renderRest:f,suffix:N,itemKey:"key",maxCount:e.maxTagCount,key:"overflow"},null);return v(qe,null,[j,!y.length&&!l.value&&v("span",{class:"".concat(o.value,"-placeholder")},[b])])}}});const xL=CL;var wL={inputElement:U.any,id:String,prefixCls:String,values:U.array,open:{type:Boolean,default:void 0},searchValue:String,inputRef:U.any,placeholder:U.any,disabled:{type:Boolean,default:void 0},mode:String,showSearch:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0},autocomplete:String,activeDescendantId:String,tabindex:U.oneOfType([U.number,U.string]),activeValue:String,backfill:{type:Boolean,default:void 0},optionLabelRender:Function,onInputChange:Function,onInputPaste:Function,onInputKeyDown:Function,onInputMouseDown:Function,onInputCompositionStart:Function,onInputCompositionEnd:Function},Am=ae({name:"SingleSelector",setup:function(e){var t=q(!1),r=R(function(){return e.mode==="combobox"}),a=R(function(){return r.value||e.showSearch}),i=R(function(){var c=e.searchValue||"";return r.value&&e.activeValue&&!t.value&&(c=e.activeValue),c}),o=Ad();Pe([r,function(){return e.activeValue}],function(){r.value&&(t.value=!1)},{immediate:!0});var l=R(function(){return e.mode!=="combobox"&&!e.open&&!e.showSearch?!1:!!i.value}),u=R(function(){var c=e.values[0];return c&&(typeof c.label=="string"||typeof c.label=="number")?c.label.toString():void 0}),s=function(){if(e.values[0])return null;var d=l.value?{visibility:"hidden"}:void 0;return v("span",{class:"".concat(e.prefixCls,"-selection-placeholder"),style:d},[e.placeholder])};return function(){var c,d,f,p,g=e.inputElement,y=e.prefixCls,h=e.id,m=e.values,b=e.inputRef,C=e.disabled,x=e.autofocus,S=e.autocomplete,w=e.activeDescendantId,_=e.open,P=e.tabindex,k=e.optionLabelRender,I=e.onInputKeyDown,F=e.onInputMouseDown,M=e.onInputChange,T=e.onInputPaste,N=e.onInputCompositionStart,j=e.onInputCompositionEnd,$=m[0],A=null;if($&&o.customSlots){var E=(c=$.key)!==null&&c!==void 0?c:$.value,L=((d=o.keyEntities[E])===null||d===void 0?void 0:d.node)||{};A=o.customSlots[(f=L.slots)===null||f===void 0?void 0:f.title]||o.customSlots.title||$.label,typeof A=="function"&&(A=A(L))}else A=k&&$?k($.option):$==null?void 0:$.label;return v(qe,null,[v("span",{class:"".concat(y,"-selection-search")},[v($3,{inputRef:b,prefixCls:y,id:h,open:_,inputElement:g,disabled:C,autofocus:x,autocomplete:S,editable:a.value,activeDescendantId:w,value:i.value,onKeydown:I,onMousedown:F,onChange:function(K){t.value=!0,M(K)},onPaste:T,onCompositionstart:N,onCompositionend:j,tabindex:P,attrs:ni(e,!0)},null)]),!r.value&&$&&!l.value&&v("span",{class:"".concat(y,"-selection-item"),title:u.value},[v(qe,{key:(p=$.key)!==null&&p!==void 0?p:$.value},[A])]),s()])}}});Am.props=wL;Am.inheritAttrs=!1;const SL=Am;function _L(n){return![Ne.ESC,Ne.SHIFT,Ne.BACKSPACE,Ne.TAB,Ne.WIN_KEY,Ne.ALT,Ne.META,Ne.WIN_KEY_RIGHT,Ne.CTRL,Ne.SEMICOLON,Ne.EQUALS,Ne.CAPS_LOCK,Ne.CONTEXT_MENU,Ne.F1,Ne.F2,Ne.F3,Ne.F4,Ne.F5,Ne.F6,Ne.F7,Ne.F8,Ne.F9,Ne.F10,Ne.F11,Ne.F12].includes(n)}function H3(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=null,t;fn(function(){clearTimeout(t)});function r(a){(a||e===null)&&(e=a),clearTimeout(t),t=setTimeout(function(){e=null},n)}return[function(){return e},r]}function su(){var n=function e(t){e.current=t};return n}var kL=ae({name:"Selector",inheritAttrs:!1,props:{id:String,prefixCls:String,showSearch:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},values:U.array,multiple:{type:Boolean,default:void 0},mode:String,searchValue:String,activeValue:String,inputElement:U.any,autofocus:{type:Boolean,default:void 0},activeDescendantId:String,tabindex:U.oneOfType([U.number,U.string]),disabled:{type:Boolean,default:void 0},placeholder:U.any,removeIcon:U.any,maxTagCount:U.oneOfType([U.number,U.string]),maxTagTextLength:Number,maxTagPlaceholder:U.any,tagRender:Function,optionLabelRender:Function,tokenWithEnter:{type:Boolean,default:void 0},choiceTransitionName:String,onToggleOpen:{type:Function},onSearch:Function,onSearchSubmit:Function,onRemove:Function,onInputKeyDown:{type:Function},domRef:Function},setup:function(e,t){var r=t.expose,a=su(),i=!1,o=H3(0),l=Te(o,2),u=l[0],s=l[1],c=function(S){var w=S.which;(w===Ne.UP||w===Ne.DOWN)&&S.preventDefault(),e.onInputKeyDown&&e.onInputKeyDown(S),w===Ne.ENTER&&e.mode==="tags"&&!i&&!e.open&&e.onSearchSubmit(S.target.value),_L(w)&&e.onToggleOpen(!0)},d=function(){s(!0)},f=null,p=function(S){e.onSearch(S,!0,i)!==!1&&e.onToggleOpen(!0)},g=function(){i=!0},y=function(S){i=!1,e.mode!=="combobox"&&p(S.target.value)},h=function(S){var w=S.target.value;if(e.tokenWithEnter&&f&&/[\r\n]/.test(f)){var _=f.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");w=w.replace(_,f)}f=null,p(w)},m=function(S){var w=S.clipboardData,_=w.getData("text");f=_},b=function(S){var w=S.target;if(w!==a.current){var _=document.body.style.msTouchAction!==void 0;_?setTimeout(function(){a.current.focus()}):a.current.focus()}},C=function(S){var w=u();S.target!==a.current&&!w&&S.preventDefault(),(e.mode!=="combobox"&&(!e.showSearch||!w)||!e.open)&&(e.open&&e.onSearch("",!0,!1),e.onToggleOpen())};return r({focus:function(){a.current.focus()},blur:function(){a.current.blur()}}),function(){var x=e.prefixCls,S=e.domRef,w=e.mode,_={inputRef:a,onInputKeyDown:c,onInputMouseDown:d,onInputChange:h,onInputPaste:m,onInputCompositionStart:g,onInputCompositionEnd:y},P=w==="multiple"||w==="tags"?v(xL,W(W({},e),_),null):v(SL,W(W({},e),_),null);return v("div",{ref:S,class:"".concat(x,"-selector"),onClick:b,onMousedown:C},[P])}}});const PL=kL;function OL(n,e,t){function r(a){var i,o,l,u=a.target;u.shadowRoot&&a.composed&&(u=a.composedPath()[0]||u);var s=[(i=n[0])===null||i===void 0?void 0:i.value,(l=(o=n[1])===null||o===void 0?void 0:o.value)===null||l===void 0?void 0:l.getPopupElement()];e.value&&s.every(function(c){return c&&!c.contains(u)&&c!==u})&&t(!1)}Ye(function(){window.addEventListener("mousedown",r)}),fn(function(){window.removeEventListener("mousedown",r)})}function TL(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,e=q(!1),t,r=function(){clearTimeout(t)};Ye(function(){r()});var a=function(o,l){r(),t=setTimeout(function(){e.value=o,l&&l()},n)};return[e,a,r]}var W3=Symbol("BaseSelectContextKey");function NL(n){return ln(W3,n)}function Tu(){return on(W3,{})}const Fm=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var n=navigator.userAgent||navigator.vendor||window.opera;return!!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(n==null?void 0:n.substr(0,4)))};function Oc(n){if(!Ct(n))return kn(n);var e=new Proxy({},{get:function(r,a,i){return Reflect.get(n.value,a,i)},set:function(r,a,i){return n.value[a]=i,!0},deleteProperty:function(r,a){return Reflect.deleteProperty(n.value,a)},has:function(r,a){return Reflect.has(n.value,a)},ownKeys:function(){return Object.keys(n.value)},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}}});return kn(e)}var IL=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},EL=["value","onChange","removeIcon","placeholder","autofocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabindex","OptionList","notFoundContent"],ML=function(){return{prefixCls:String,id:String,omitDomProps:Array,displayValues:Array,onDisplayValuesChange:Function,activeValue:String,activeDescendantId:String,onActiveValueChange:Function,searchValue:String,onSearch:Function,onSearchSplit:Function,maxLength:Number,OptionList:U.any,emptyOptions:Boolean}},Fd=function(){return{showSearch:{type:Boolean,default:void 0},tagRender:{type:Function},optionLabelRender:{type:Function},direction:{type:String},tabindex:Number,autofocus:Boolean,notFoundContent:U.any,placeholder:U.any,onClear:Function,choiceTransitionName:String,mode:String,disabled:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:void 0},onDropdownVisibleChange:{type:Function},getInputElement:{type:Function},getRawInputElement:{type:Function},maxTagTextLength:Number,maxTagCount:{type:[String,Number]},maxTagPlaceholder:U.any,tokenSeparators:{type:Array},allowClear:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:void 0},inputIcon:U.any,clearIcon:U.any,removeIcon:U.any,animation:String,transitionName:String,dropdownStyle:{type:Object},dropdownClassName:String,dropdownMatchSelectWidth:{type:[Boolean,Number],default:void 0},dropdownRender:{type:Function},dropdownAlign:Object,placement:{type:String},getPopupContainer:{type:Function},showAction:{type:Array},onBlur:{type:Function},onFocus:{type:Function},onKeyup:Function,onKeydown:Function,onMousedown:Function,onPopupScroll:Function,onInputKeyDown:Function,onMouseenter:Function,onMouseleave:Function,onClick:Function}},AL=function(){return O(O({},ML()),Fd())};function U3(n){return n==="tags"||n==="multiple"}const jm=ae({name:"BaseSelect",inheritAttrs:!1,props:vn(AL(),{showAction:[],notFoundContent:"Not Found"}),setup:function(e,t){var r=t.attrs,a=t.expose,i=t.slots,o=R(function(){return U3(e.mode)}),l=R(function(){return e.showSearch!==void 0?e.showSearch:o.value||e.mode==="combobox"}),u=q(!1);Ye(function(){u.value=Fm()});var s=Ad(),c=q(null),d=su(),f=q(null),p=q(null),g=q(null),y=TL(),h=Te(y,3),m=h[0],b=h[1],C=h[2],x=function(){var V;(V=p.value)===null||V===void 0||V.focus()},S=function(){var V;(V=p.value)===null||V===void 0||V.blur()};a({focus:x,blur:S,scrollTo:function(V){var X;return(X=g.value)===null||X===void 0?void 0:X.scrollTo(V)}});var w=R(function(){var se;if(e.mode!=="combobox")return e.searchValue;var V=(se=e.displayValues[0])===null||se===void 0?void 0:se.value;return typeof V=="string"||typeof V=="number"?String(V):""}),_=e.open!==void 0?e.open:e.defaultOpen,P=q(_),k=q(_),I=function(V){P.value=e.open!==void 0?e.open:V,k.value=P.value};Pe(function(){return e.open},function(){I(e.open)});var F=R(function(){return!e.notFoundContent&&e.emptyOptions});Ze(function(){k.value=P.value,(e.disabled||F.value&&k.value&&e.mode==="combobox")&&(k.value=!1)});var M=R(function(){return F.value?!1:k.value}),T=function(V){var X=V!==void 0?V:!k.value;P.value!==X&&!e.disabled&&(I(X),e.onDropdownVisibleChange&&e.onDropdownVisibleChange(X))},N=R(function(){return(e.tokenSeparators||[]).some(function(se){return[`
`,`\r
`].includes(se)})}),j=function(V,X,ee){var ue,ie,ge=!0,fe=V;(ue=e.onActiveValueChange)===null||ue===void 0||ue.call(e,null);var re=ee?null:CA(V,e.tokenSeparators);return e.mode!=="combobox"&&re&&(fe="",(ie=e.onSearchSplit)===null||ie===void 0||ie.call(e,re),T(!1),ge=!1),e.onSearch&&w.value!==fe&&e.onSearch(fe,{source:X?"typing":"effect"}),ge},$=function(V){var X;!V||!V.trim()||(X=e.onSearch)===null||X===void 0||X.call(e,V,{source:"submit"})};Pe(k,function(){!k.value&&!o.value&&e.mode!=="combobox"&&j("",!1,!1)},{immediate:!0,flush:"post"}),Pe(function(){return e.disabled},function(){P.value&&!!e.disabled&&I(!1)},{immediate:!0});var A=H3(),E=Te(A,2),L=E[0],B=E[1],K=function(V){var X,ee,ue=L(),ie=V.which;if(ie===Ne.ENTER&&(e.mode!=="combobox"&&V.preventDefault(),k.value||T(!0)),B(!!w.value),ie===Ne.BACKSPACE&&!ue&&o.value&&!w.value&&e.displayValues.length){for(var ge=Ee(e.displayValues),fe=null,re=ge.length-1;re>=0;re-=1){var le=ge[re];if(!le.disabled){ge.splice(re,1),fe=le;break}}fe&&e.onDisplayValuesChange(ge,{type:"remove",values:[fe]})}for(var te=arguments.length,he=new Array(te>1?te-1:0),ye=1;ye<te;ye++)he[ye-1]=arguments[ye];if(k.value&&g.value){var _e;(_e=g.value).onKeydown.apply(_e,[V].concat(he))}(ee=e.onKeydown)===null||ee===void 0||(X=ee).call.apply(X,[e,V].concat(he))},H=function(V){for(var X=arguments.length,ee=new Array(X>1?X-1:0),ue=1;ue<X;ue++)ee[ue-1]=arguments[ue];if(k.value&&g.value){var ie;(ie=g.value).onKeyup.apply(ie,[V].concat(ee))}e.onKeyup&&e.onKeyup.apply(e,[V].concat(ee))},Z=function(V){var X=e.displayValues.filter(function(ee){return ee!==V});e.onDisplayValuesChange(X,{type:"remove",values:[V]})},Y=q(!1),G=function(){b(!0),e.disabled||(e.onFocus&&!Y.value&&e.onFocus.apply(e,arguments),e.showAction&&e.showAction.includes("focus")&&T(!0)),Y.value=!0},Q=function(){if(b(!1,function(){Y.value=!1,T(!1)}),!e.disabled){var V=w.value;V&&(e.mode==="tags"?e.onSearch(V,{source:"submit"}):e.mode==="multiple"&&e.onSearch("",{source:"blur"})),e.onBlur&&e.onBlur.apply(e,arguments)}};ln("VCSelectContainerEvent",{focus:G,blur:Q});var z=[];Ye(function(){z.forEach(function(se){return clearTimeout(se)}),z.splice(0,z.length)}),fn(function(){z.forEach(function(se){return clearTimeout(se)}),z.splice(0,z.length)});var J=function(V){var X,ee,ue,ie=V.target,ge=(ee=f.value)===null||ee===void 0?void 0:ee.getPopupElement();if(ge&&ge.contains(ie)){var fe=setTimeout(function(){var he,ye=z.indexOf(fe);ye!==-1&&z.splice(ye,1),C(),!u.value&&!ge.contains(document.activeElement)&&((he=p.value)===null||he===void 0||he.focus())});z.push(fe)}for(var re=arguments.length,le=new Array(re>1?re-1:0),te=1;te<re;te++)le[te-1]=arguments[te];(ue=e.onMousedown)===null||ue===void 0||(X=ue).call.apply(X,[e,V].concat(le))},ne=q(null),oe=Jn(),ce=function(){oe.update()};return Ye(function(){Pe(M,function(){var se;if(M.value){var V=Math.ceil((se=c.value)===null||se===void 0?void 0:se.offsetWidth);ne.value!==V&&!Number.isNaN(V)&&(ne.value=V)}},{immediate:!0,flush:"post"})}),OL([c,f],M,T),NL(Oc(O(O({},Ni(e)),{open:k,triggerOpen:M,showSearch:l,multiple:o,toggleOpen:T}))),function(){var se,V=O(O({},e),r),X=V.prefixCls,ee=V.id;V.open,V.defaultOpen;var ue=V.mode;V.showSearch,V.searchValue,V.onSearch;var ie=V.allowClear,ge=V.clearIcon,fe=V.showArrow,re=V.inputIcon,le=V.disabled,te=V.loading,he=V.getInputElement,ye=V.getPopupContainer,_e=V.placement,Me=V.animation,De=V.transitionName,we=V.dropdownStyle,be=V.dropdownClassName,Se=V.dropdownMatchSelectWidth,Fe=V.dropdownRender,je=V.dropdownAlign;V.showAction;var ke=V.direction;V.tokenSeparators;var Ce=V.tagRender,ve=V.optionLabelRender;V.onPopupScroll,V.onDropdownVisibleChange,V.onFocus,V.onBlur,V.onKeyup,V.onKeydown,V.onMousedown;var me=V.onClear,Oe=V.omitDomProps,Ie=V.getRawInputElement,xe=V.displayValues,pe=V.onDisplayValuesChange,Ae=V.emptyOptions,$e=V.activeDescendantId,Re=V.activeValue,Ke=V.OptionList,Ve=IL(V,["prefixCls","id","open","defaultOpen","mode","showSearch","searchValue","onSearch","allowClear","clearIcon","showArrow","inputIcon","disabled","loading","getInputElement","getPopupContainer","placement","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","showAction","direction","tokenSeparators","tagRender","optionLabelRender","onPopupScroll","onDropdownVisibleChange","onFocus","onBlur","onKeyup","onKeydown","onMousedown","onClear","omitDomProps","getRawInputElement","displayValues","onDisplayValuesChange","emptyOptions","activeDescendantId","activeValue","OptionList"]),ze=ue==="combobox"&&he&&he()||null,He=typeof Ie=="function"&&Ie(),en=O({},Ve),mn;He&&(mn=function(Kn){T(Kn)}),EL.forEach(function(Mn){delete en[Mn]}),Oe==null||Oe.forEach(function(Mn){delete en[Mn]});var nn=fe!==void 0?fe:te||!o.value&&ue!=="combobox",Je;nn&&(Je=v(Pc,{class:de("".concat(X,"-arrow"),D({},"".concat(X,"-arrow-loading"),te)),customizeIcon:re,customizeIconProps:{loading:te,searchValue:w.value,open:k.value,focused:m.value,showSearch:l.value}},null));var bn,pn=function(){me==null||me(),pe([],{type:"clear",values:xe}),j("",!1,!1)};!le&&ie&&(xe.length||w.value)&&(bn=v(Pc,{class:"".concat(X,"-clear"),onMousedown:pn,customizeIcon:ge},{default:function(){return[tt("\xD7")]}}));var Dn=v(Ke,{ref:g},O(O({},s.customSlots),{option:i.option})),Pn=de(X,r.class,(se={},D(se,"".concat(X,"-focused"),m.value),D(se,"".concat(X,"-multiple"),o.value),D(se,"".concat(X,"-single"),!o.value),D(se,"".concat(X,"-allow-clear"),ie),D(se,"".concat(X,"-show-arrow"),nn),D(se,"".concat(X,"-disabled"),le),D(se,"".concat(X,"-loading"),te),D(se,"".concat(X,"-open"),k.value),D(se,"".concat(X,"-customize-input"),ze),D(se,"".concat(X,"-show-search"),l.value),se)),et=v(tL,{ref:f,disabled:le,prefixCls:X,visible:M.value,popupElement:Dn,containerWidth:ne.value,animation:Me,transitionName:De,dropdownStyle:we,dropdownClassName:be,direction:ke,dropdownMatchSelectWidth:Se,dropdownRender:Fe,dropdownAlign:je,placement:_e,getPopupContainer:ye,empty:Ae,getTriggerDOMNode:function(){return d.current},onPopupVisibleChange:mn,onPopupMouseEnter:ce},{default:function(){return He?at(He)&&wn(He,{ref:d},!1,!0):v(PL,W(W({},e),{},{domRef:d,prefixCls:X,inputElement:ze,ref:p,id:ee,showSearch:l.value,mode:ue,activeDescendantId:$e,tagRender:Ce,optionLabelRender:ve,values:xe,open:k.value,onToggleOpen:T,activeValue:Re,searchValue:w.value,onSearch:j,onSearchSubmit:$,onRemove:Z,tokenWithEnter:N.value}),null)}}),Xn;return He?Xn=et:Xn=v("div",W(W({},en),{},{class:Pn,ref:c,onMousedown:J,onKeydown:K,onKeyup:H}),[m.value&&!k.value&&v("span",{style:{width:0,height:0,display:"flex",overflow:"hidden",opacity:0},"aria-live":"polite"},["".concat(xe.map(function(Mn){var Kn=Mn.label,Zn=Mn.value;return["number","string"].includes(Be(Kn))?Kn:Zn}).join(", "))]),et,Je,bn]),Xn}}});var jd=function(e,t){var r=e.height,a=e.offset,i=e.prefixCls,o=e.onInnerResize,l=t.slots,u,s={},c={display:"flex",flexDirection:"column"};return a!==void 0&&(s={height:"".concat(r,"px"),position:"relative",overflow:"hidden"},c=O(O({},c),{transform:"translateY(".concat(a,"px)"),position:"absolute",left:0,right:0,top:0})),v("div",{style:s},[v(mr,{onResize:function(f){var p=f.offsetHeight;p&&o&&o()}},{default:function(){return[v("div",{style:c,class:de(D({},"".concat(i,"-holder-inner"),i))},[(u=l.default)===null||u===void 0?void 0:u.call(l)])]}})])};jd.displayName="Filter";jd.inheritAttrs=!1;jd.props={prefixCls:String,height:Number,offset:Number,onInnerResize:Function};const FL=jd;var q3=function(e,t){var r=e.setRef,a=t.slots,i,o=Fn((i=a.default)===null||i===void 0?void 0:i.call(a));return o&&o.length?Pt(o[0],{ref:r}):o};q3.props={setRef:{type:Function,default:function(){}}};const jL=q3;var DL=20;function FC(n){return"touches"in n?n.touches[0].pageY:n.pageY}const LL=ae({name:"ScrollBar",inheritAttrs:!1,props:{prefixCls:String,scrollTop:Number,scrollHeight:Number,height:Number,count:Number,onScroll:{type:Function},onStartMove:{type:Function},onStopMove:{type:Function}},setup:function(){return{moveRaf:null,scrollbarRef:su(),thumbRef:su(),visibleTimeout:null,state:kn({dragging:!1,pageY:null,startTop:null,visible:!1})}},watch:{scrollTop:{handler:function(){this.delayHidden()},flush:"post"}},mounted:function(){var e,t;(e=this.scrollbarRef.current)===null||e===void 0||e.addEventListener("touchstart",this.onScrollbarTouchStart,ot?{passive:!1}:!1),(t=this.thumbRef.current)===null||t===void 0||t.addEventListener("touchstart",this.onMouseDown,ot?{passive:!1}:!1)},beforeUnmount:function(){this.removeEvents(),clearTimeout(this.visibleTimeout)},methods:{delayHidden:function(){var e=this;clearTimeout(this.visibleTimeout),this.state.visible=!0,this.visibleTimeout=setTimeout(function(){e.state.visible=!1},2e3)},onScrollbarTouchStart:function(e){e.preventDefault()},onContainerMouseDown:function(e){e.stopPropagation(),e.preventDefault()},patchEvents:function(){window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),this.thumbRef.current.addEventListener("touchmove",this.onMouseMove,ot?{passive:!1}:!1),this.thumbRef.current.addEventListener("touchend",this.onMouseUp)},removeEvents:function(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),this.scrollbarRef.current.removeEventListener("touchstart",this.onScrollbarTouchStart,ot?{passive:!1}:!1),this.thumbRef.current.removeEventListener("touchstart",this.onMouseDown,ot?{passive:!1}:!1),this.thumbRef.current.removeEventListener("touchmove",this.onMouseMove,ot?{passive:!1}:!1),this.thumbRef.current.removeEventListener("touchend",this.onMouseUp),Qe.cancel(this.moveRaf)},onMouseDown:function(e){var t=this.$props.onStartMove;O(this.state,{dragging:!0,pageY:FC(e),startTop:this.getTop()}),t(),this.patchEvents(),e.stopPropagation(),e.preventDefault()},onMouseMove:function(e){var t=this.state,r=t.dragging,a=t.pageY,i=t.startTop,o=this.$props.onScroll;if(Qe.cancel(this.moveRaf),r){var l=FC(e)-a,u=i+l,s=this.getEnableScrollRange(),c=this.getEnableHeightRange(),d=c?u/c:0,f=Math.ceil(d*s);this.moveRaf=Qe(function(){o(f)})}},onMouseUp:function(){var e=this.$props.onStopMove;this.state.dragging=!1,e(),this.removeEvents()},getSpinHeight:function(){var e=this.$props,t=e.height,r=e.count,a=t/r*10;return a=Math.max(a,DL),a=Math.min(a,t/2),Math.floor(a)},getEnableScrollRange:function(){var e=this.$props,t=e.scrollHeight,r=e.height;return t-r||0},getEnableHeightRange:function(){var e=this.$props.height,t=this.getSpinHeight();return e-t||0},getTop:function(){var e=this.$props.scrollTop,t=this.getEnableScrollRange(),r=this.getEnableHeightRange();if(e===0||t===0)return 0;var a=e/t;return a*r},showScroll:function(){var e=this.$props,t=e.height,r=e.scrollHeight;return r>t}},render:function(){var e=this.state,t=e.dragging,r=e.visible,a=this.$props.prefixCls,i=this.getSpinHeight()+"px",o=this.getTop()+"px",l=this.showScroll(),u=l&&r;return v("div",{ref:this.scrollbarRef,class:de("".concat(a,"-scrollbar"),D({},"".concat(a,"-scrollbar-show"),l)),style:{width:"8px",top:0,bottom:0,right:0,position:"absolute",display:u?void 0:"none"},onMousedown:this.onContainerMouseDown,onMousemove:this.delayHidden},[v("div",{ref:this.thumbRef,class:de("".concat(a,"-scrollbar-thumb"),D({},"".concat(a,"-scrollbar-thumb-moving"),t)),style:{width:"100%",height:i,top:o,left:0,position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:"99px",cursor:"pointer",userSelect:"none"},onMousedown:this.onMouseDown},null)])}});function RL(n,e,t,r){var a=new Map,i=new Map,o=q(Symbol("update"));Pe(n,function(){o.value=Symbol("update")});var l=0;function u(){l+=1;var c=l;Promise.resolve().then(function(){c===l&&a.forEach(function(d,f){if(d&&d.offsetParent){var p=d.offsetHeight;i.get(f)!==p&&(o.value=Symbol("update"),i.set(f,d.offsetHeight))}})})}function s(c,d){var f=e(c),p=a.get(f);d?(a.set(f,d.$el||d),u()):a.delete(f),!p!=!d&&(d?t==null||t(c):r==null||r(c))}return[s,u,i,o]}function $L(n,e,t,r,a,i,o,l){var u;return function(s){if(s==null){l();return}Qe.cancel(u);var c=e.value,d=r.itemHeight;if(typeof s=="number")o(s);else if(s&&Be(s)==="object"){var f,p=s.align;"index"in s?f=s.index:f=c.findIndex(function(m){return a(m)===s.key});var g=s.offset,y=g===void 0?0:g,h=function m(b,C){if(!(b<0||!n.value)){var x=n.value.clientHeight,S=!1,w=C;if(x){for(var _=C||p,P=0,k=0,I=0,F=Math.min(c.length,f),M=0;M<=F;M+=1){var T=a(c[M]);k=P;var N=t.get(T);I=k+(N===void 0?d:N),P=I,M===f&&N===void 0&&(S=!0)}var j=n.value.scrollTop,$=null;switch(_){case"top":$=k-y;break;case"bottom":$=I-x+y;break;default:{var A=j+x;k<j?w="top":I>A&&(w="bottom")}}$!==null&&$!==j&&o($)}u=Qe(function(){S&&i(),m(b-1,w)})}};h(5)}}}var BL=(typeof navigator>"u"?"undefined":Be(navigator))==="object"&&/Firefox/i.test(navigator.userAgent);const VL=BL,Y3=function(n,e){var t=!1,r=null;function a(){clearTimeout(r),t=!0,r=setTimeout(function(){t=!1},50)}return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i<0&&n.value||i>0&&e.value;return o&&l?(clearTimeout(r),t=!1):(!l||t)&&a(),!t&&l}};function KL(n,e,t,r){var a=0,i=null,o=null,l=!1,u=Y3(e,t);function s(d){if(!!n.value){Qe.cancel(i);var f=d.deltaY;a+=f,o=f,!u(f)&&(VL||d.preventDefault(),i=Qe(function(){var p=l?10:1;r(a*p),a=0}))}}function c(d){!n.value||(l=d.detail===o)}return[s,c]}var zL=14/15;function HL(n,e,t){var r=!1,a=0,i=null,o=null,l=function(){i&&(i.removeEventListener("touchmove",u),i.removeEventListener("touchend",s))},u=function(p){if(r){var g=Math.ceil(p.touches[0].pageY),y=a-g;a=g,t(y)&&p.preventDefault(),clearInterval(o),o=setInterval(function(){y*=zL,(!t(y,!0)||Math.abs(y)<=.1)&&clearInterval(o)},16)}},s=function(){r=!1,l()},c=function(p){l(),p.touches.length===1&&!r&&(r=!0,a=Math.ceil(p.touches[0].pageY),i=p.target,i.addEventListener("touchmove",u,{passive:!1}),i.addEventListener("touchend",s))},d=function(){};Ye(function(){document.addEventListener("touchmove",d,{passive:!1}),Pe(n,function(f){e.value.removeEventListener("touchstart",c),l(),clearInterval(o),f&&e.value.addEventListener("touchstart",c,{passive:!1})},{immediate:!0})}),fn(function(){document.removeEventListener("touchmove",d)})}var WL=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},UL=[],qL={overflowY:"auto",overflowAnchor:"none"};function YL(n,e,t,r,a,i){var o=i.getKey;return n.slice(e,t+1).map(function(l,u){var s=e+u,c=a(l,s,{}),d=o(l);return v(jL,{key:d,setRef:function(p){return r(l,p)}},{default:function(){return[c]}})})}var GL=ae({name:"List",inheritAttrs:!1,props:{prefixCls:String,data:U.array,height:Number,itemHeight:Number,fullHeight:{type:Boolean,default:void 0},itemKey:{type:[String,Number,Function],required:!0},component:{type:[String,Object]},virtual:{type:Boolean,default:void 0},children:Function,onScroll:Function,onMousedown:Function,onMouseenter:Function,onVisibleChange:Function},setup:function(e,t){var r=t.expose,a=R(function(){var Z=e.height,Y=e.itemHeight,G=e.virtual;return!!(G!==!1&&Z&&Y)}),i=R(function(){var Z=e.height,Y=e.itemHeight,G=e.data;return a.value&&G&&Y*G.length>Z}),o=kn({scrollTop:0,scrollMoving:!1}),l=R(function(){return e.data||UL}),u=cn([]);Pe(l,function(){u.value=an(l.value).slice()},{immediate:!0});var s=cn(function(Z){});Pe(function(){return e.itemKey},function(Z){typeof Z=="function"?s.value=Z:s.value=function(Y){return Y==null?void 0:Y[Z]}},{immediate:!0});var c=q(),d=q(),f=q(),p=function(Y){return s.value(Y)},g={getKey:p};function y(Z){var Y;typeof Z=="function"?Y=Z(o.scrollTop):Y=Z;var G=k(Y);c.value&&(c.value.scrollTop=G),o.scrollTop=G}var h=RL(u,p,null,null),m=Te(h,4),b=m[0],C=m[1],x=m[2],S=m[3],w=kn({scrollHeight:void 0,start:0,end:0,offset:void 0}),_=q(0);Ye(function(){dn(function(){var Z;_.value=((Z=d.value)===null||Z===void 0?void 0:Z.offsetHeight)||0})}),Nt(function(){dn(function(){var Z;_.value=((Z=d.value)===null||Z===void 0?void 0:Z.offsetHeight)||0})}),Pe([a,u],function(){a.value||O(w,{scrollHeight:void 0,start:0,end:u.value.length-1,offset:void 0})},{immediate:!0}),Pe([a,u,_,i],function(){a.value&&!i.value&&O(w,{scrollHeight:_.value,start:0,end:u.value.length-1,offset:void 0})},{immediate:!0}),Pe([i,a,function(){return o.scrollTop},u,S,function(){return e.height},_],function(){if(!(!a.value||!i.value)){for(var Z=0,Y,G,Q,z=u.value.length,J=u.value,ne=o.scrollTop,oe=e.itemHeight,ce=e.height,se=ne+ce,V=0;V<z;V+=1){var X=J[V],ee=p(X),ue=x.get(ee);ue===void 0&&(ue=oe);var ie=Z+ue;Y===void 0&&ie>=ne&&(Y=V,G=Z),Q===void 0&&ie>se&&(Q=V),Z=ie}Y===void 0&&(Y=0,G=0),Q===void 0&&(Q=z-1),Q=Math.min(Q+1,z),O(w,{scrollHeight:Z,start:Y,end:Q,offset:G})}},{immediate:!0});var P=R(function(){return w.scrollHeight-e.height});function k(Z){var Y=Z;return Number.isNaN(P.value)||(Y=Math.min(Y,P.value)),Y=Math.max(Y,0),Y}var I=R(function(){return o.scrollTop<=0}),F=R(function(){return o.scrollTop>=P.value}),M=Y3(I,F);function T(Z){var Y=Z;y(Y)}function N(Z){var Y,G=Z.currentTarget.scrollTop;Math.abs(G-o.scrollTop)>=1&&y(G),(Y=e.onScroll)===null||Y===void 0||Y.call(e,Z)}var j=KL(a,I,F,function(Z){y(function(Y){var G=Y+Z;return G})}),$=Te(j,2),A=$[0],E=$[1];HL(a,c,function(Z,Y){return M(Z,Y)?!1:(A({preventDefault:function(){},deltaY:Z}),!0)});function L(Z){a.value&&Z.preventDefault()}var B=function(){c.value&&(c.value.removeEventListener("wheel",A,ot?{passive:!1}:!1),c.value.removeEventListener("DOMMouseScroll",E),c.value.removeEventListener("MozMousePixelScroll",L))};Ze(function(){dn(function(){c.value&&(B(),c.value.addEventListener("wheel",A,ot?{passive:!1}:!1),c.value.addEventListener("DOMMouseScroll",E),c.value.addEventListener("MozMousePixelScroll",L))})}),fn(function(){B()});var K=$L(c,u,x,e,p,C,y,function(){var Z;(Z=f.value)===null||Z===void 0||Z.delayHidden()});r({scrollTo:K});var H=R(function(){var Z=null;return e.height&&(Z=O(D({},e.fullHeight?"height":"maxHeight",e.height+"px"),qL),a.value&&(Z.overflowY="hidden",o.scrollMoving&&(Z.pointerEvents="none"))),Z});return Pe([function(){return w.start},function(){return w.end},u],function(){if(e.onVisibleChange){var Z=u.value.slice(w.start,w.end+1);e.onVisibleChange(Z,u.value)}},{flush:"post"}),{state:o,mergedData:u,componentStyle:H,onFallbackScroll:N,onScrollBar:T,componentRef:c,useVirtual:a,calRes:w,collectHeight:C,setInstance:b,sharedConfig:g,scrollBarRef:f,fillerInnerRef:d}},render:function(){var e=this,t=O(O({},this.$props),this.$attrs),r=t.prefixCls,a=r===void 0?"rc-virtual-list":r,i=t.height;t.itemHeight,t.fullHeight,t.data,t.itemKey,t.virtual;var o=t.component,l=o===void 0?"div":o;t.onScroll;var u=t.children,s=u===void 0?this.$slots.default:u,c=t.style,d=t.class,f=WL(t,["prefixCls","height","itemHeight","fullHeight","data","itemKey","virtual","component","onScroll","children","style","class"]),p=de(a,d),g=this.state.scrollTop,y=this.calRes,h=y.scrollHeight,m=y.offset,b=y.start,C=y.end,x=this.componentStyle,S=this.onFallbackScroll,w=this.onScrollBar,_=this.useVirtual,P=this.collectHeight,k=this.sharedConfig,I=this.setInstance,F=this.mergedData;return v("div",W({style:O(O({},c),{position:"relative"}),class:p},f),[v(l,{class:"".concat(a,"-holder"),style:x,ref:"componentRef",onScroll:S},{default:function(){return[v(FL,{prefixCls:a,height:h,offset:m,onInnerResize:P,ref:"fillerInnerRef"},{default:function(){return YL(F,b,C,I,s,k)}})]}}),_&&v(LL,{ref:"scrollBarRef",prefixCls:a,scrollTop:g,height:i,scrollHeight:h,count:F.length,onScroll:w,onStartMove:function(){e.state.scrollMoving=!0},onStopMove:function(){e.state.scrollMoving=!1}},null)])}});const G3=GL;function Dm(n,e,t){var r=q(n());return Pe(e,function(a,i){t?t(a,i)&&(r.value=n()):r.value=n()}),r}function XL(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var X3=Symbol("SelectContextKey");function ZL(n){return ln(X3,n)}function QL(){return on(X3,{})}var JL=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function jC(n){return typeof n=="string"||typeof n=="number"}var eR=ae({name:"OptionList",inheritAttrs:!1,slots:["option"],setup:function(e,t){var r=t.expose,a=t.slots,i=Tu(),o=QL(),l=R(function(){return"".concat(i.prefixCls,"-item")}),u=Dm(function(){return o.flattenOptions},[function(){return i.open},function(){return o.flattenOptions}],function(w){return w[0]}),s=su(),c=function(_){_.preventDefault()},d=function(_){s.current&&s.current.scrollTo(typeof _=="number"?{index:_}:_)},f=function(_){for(var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,k=u.value.length,I=0;I<k;I+=1){var F=(_+I*P+k)%k,M=u.value[F],T=M.group,N=M.data;if(!T&&!N.disabled)return F}return-1},p=kn({activeIndex:f(0)}),g=function(_){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;p.activeIndex=_;var k={source:P?"keyboard":"mouse"},I=u.value[_];if(!I){o.onActiveValue(null,-1,k);return}o.onActiveValue(I.value,_,k)};Pe([function(){return u.value.length},function(){return i.searchValue}],function(){g(o.defaultActiveFirstOption!==!1?f(0):-1)},{immediate:!0});var y=function(_){return o.rawValues.has(_)&&i.mode!=="combobox"};Pe([function(){return i.open},function(){return i.searchValue}],function(){if(!i.multiple&&i.open&&o.rawValues.size===1){var w=Array.from(o.rawValues)[0],_=an(u.value).findIndex(function(P){var k=P.data;return k[o.fieldNames.value]===w});_!==-1&&(g(_),dn(function(){d(_)}))}i.open&&dn(function(){var P;(P=s.current)===null||P===void 0||P.scrollTo(void 0)})},{immediate:!0,flush:"post"});var h=function(_){_!==void 0&&o.onSelect(_,{selected:!o.rawValues.has(_)}),i.multiple||i.toggleOpen(!1)},m=function(_){return typeof _.label=="function"?_.label():_.label};function b(w){var _=u.value[w];if(!_)return null;var P=_.data||{},k=P.value,I=_.group,F=ni(P,!0),M=m(_);return _?v("div",W(W({"aria-label":typeof M=="string"&&!I?M:null},F),{},{key:w,role:I?"presentation":"option",id:"".concat(i.id,"_list_").concat(w),"aria-selected":y(k)}),[k]):null}var C=function(_){var P=_.which,k=_.ctrlKey;switch(P){case Ne.N:case Ne.P:case Ne.UP:case Ne.DOWN:{var I=0;if(P===Ne.UP?I=-1:P===Ne.DOWN?I=1:XL()&&k&&(P===Ne.N?I=1:P===Ne.P&&(I=-1)),I!==0){var F=f(p.activeIndex+I,I);d(F),g(F,!0)}break}case Ne.ENTER:{var M=u.value[p.activeIndex];M&&!M.data.disabled?h(M.value):h(void 0),i.open&&_.preventDefault();break}case Ne.ESC:i.toggleOpen(!1),i.open&&_.stopPropagation()}},x=function(){},S=function(_){d(_)};return r({onKeydown:C,onKeyup:x,scrollTo:S}),function(){var w=i.id,_=i.notFoundContent,P=i.onPopupScroll,k=o.menuItemSelectedIcon,I=o.fieldNames,F=o.virtual,M=o.listHeight,T=o.listItemHeight,N=a.option,j=p.activeIndex,$=Object.keys(I).map(function(A){return I[A]});return u.value.length===0?v("div",{role:"listbox",id:"".concat(w,"_list"),class:"".concat(l.value,"-empty"),onMousedown:c},[_]):v(qe,null,[v("div",{role:"listbox",id:"".concat(w,"_list"),style:{height:0,width:0,overflow:"hidden"}},[b(j-1),b(j),b(j+1)]),v(G3,{itemKey:"key",ref:s,data:u.value,height:M,itemHeight:T,fullHeight:!1,onMousedown:c,onScroll:P,virtual:F},{default:function(E,L){var B,K,H=E.group,Z=E.groupOption,Y=E.data,G=E.value,Q=Y.key,z=typeof E.label=="function"?E.label():E.label;if(H){var J=(K=Y.title)!==null&&K!==void 0?K:jC(z)&&z;return v("div",{class:de(l.value,"".concat(l.value,"-group")),title:J},[N?N(Y):z!==void 0?z:Q])}var ne=Y.disabled,oe=Y.title;Y.children;var ce=Y.style,se=Y.class,V=Y.className,X=JL(Y,["disabled","title","children","style","class","className"]),ee=un(X,$),ue=y(G),ie="".concat(l.value,"-option"),ge=de(l.value,ie,se,V,(B={},D(B,"".concat(ie,"-grouped"),Z),D(B,"".concat(ie,"-active"),j===L&&!ne),D(B,"".concat(ie,"-disabled"),ne),D(B,"".concat(ie,"-selected"),ue),B)),fe=m(E),re=!k||typeof k=="function"||ue,le=typeof fe=="number"?fe:fe||G,te=jC(le)?le.toString():void 0;return oe!==void 0&&(te=oe),v("div",W(W({},ee),{},{"aria-selected":ue,class:ge,title:te,onMousemove:function(ye){X.onMousemove&&X.onMousemove(ye),!(j===L||ne)&&g(L)},onClick:function(ye){ne||h(G),X.onClick&&X.onClick(ye)},style:ce}),[v("div",{class:"".concat(ie,"-content")},[N?N(Y):le]),at(k)||ue,re&&v(Pc,{class:"".concat(l.value,"-option-state"),customizeIcon:k,customizeIconProps:{isSelected:ue}},{default:function(){return[ue?"\u2713":null]}})])}})])}}});const nR=eR;var tR=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function rR(n){var e=n,t=e.key,r=e.children,a=e.props,i=a.value,o=a.disabled,l=tR(a,["value","disabled"]),u=r==null?void 0:r.default;return O({key:t,value:i!==void 0?i:t,children:u,disabled:o||o===""},l)}function Z3(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=Fn(n).map(function(r,a){var i;if(!at(r)||!r.type)return null;var o=r.type.isSelectOptGroup,l=r.key,u=r.children,s=r.props;if(e||!o)return rR(r);var c=u&&u.default?u.default():void 0,d=(s==null?void 0:s.label)||((i=u.label)===null||i===void 0?void 0:i.call(u))||l;return O(O({key:"__RC_SELECT_GRP__".concat(l===null?a:String(l),"__")},s),{label:d,options:Z3(c||[])})}).filter(function(r){return r});return t}function aR(n,e,t){var r=cn(),a=cn(),i=cn(),o=cn([]);return Pe([n,e],function(){n.value?o.value=an(n.value).slice():o.value=Z3(e.value)},{immediate:!0,deep:!0}),Ze(function(){var l=o.value,u=new Map,s=new Map,c=t.value;function d(f){for(var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=0;g<f.length;g+=1){var y=f[g];!y[c.options]||p?(u.set(y[c.value],y),s.set(y[c.label],y)):d(y[c.options],!0)}}d(l),r.value=l,a.value=u,i.value=s}),{options:r,valueOptions:a,labelOptions:i}}var DC=0,iR=Hi();function oR(){var n;return iR?(n=DC,DC+=1):n="TEST_OR_SSR",n}function Lm(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:q(""),e="rc_select_".concat(oR());return n.value||e}function Q3(n){return Array.isArray(n)?n:n!==void 0?[n]:[]}function qf(n,e){return Q3(n).join("").toUpperCase().includes(e)}const lR=function(n,e,t,r,a){return R(function(){var i=t.value,o=a==null?void 0:a.value,l=r==null?void 0:r.value;if(!i||l===!1)return n.value;var u=e.value,s=u.options,c=u.label,d=u.value,f=[],p=typeof l=="function",g=i.toUpperCase(),y=p?l:function(m,b){return o?qf(b[o],g):b[s]?qf(b[c!=="children"?c:"label"],g):qf(b[d],g)},h=p?function(m){return bp(m)}:function(m){return m};return n.value.forEach(function(m){if(m[s]){var b=y(i,h(m));if(b)f.push(m);else{var C=m[s].filter(function(x){return y(i,h(x))});C.length&&f.push(O(O({},m),D({},s,C)))}return}y(i,h(m))&&f.push(m)}),f})},uR=function(n,e){var t=cn({values:new Map,options:new Map}),r=R(function(){var i=t.value,o=i.values,l=i.options,u=n.value.map(function(d){var f;return d.label===void 0?O(O({},d),{label:(f=o.get(d.value))===null||f===void 0?void 0:f.label}):d}),s=new Map,c=new Map;return u.forEach(function(d){s.set(d.value,d),c.set(d.value,e.value.get(d.value)||l.get(d.value))}),t.value.values=s,t.value.options=c,u}),a=function(o){return e.value.get(o)||t.value.options.get(o)};return[r,a]};function Wn(n,e){var t=e||{},r=t.defaultValue,a=t.value,i=a===void 0?q():a,o=typeof n=="function"?n():n;i.value!==void 0&&(o=Xe(i)),r!==void 0&&(o=typeof r=="function"?r():r);var l=q(o),u=q(o);Ze(function(){var c=i.value!==void 0?i.value:l.value;e.postState&&(c=e.postState(c)),u.value=c});function s(c){var d=u.value;l.value=c,an(u.value)!==c&&e.onChange&&e.onChange(c,d)}return Pe(i,function(){l.value=i.value}),[u,s]}function Ln(n){var e=typeof n=="function"?n():n,t=q(e);function r(a){t.value=a}return[t,r]}var sR=["inputValue"];function J3(){return O(O({},Fd()),{prefixCls:String,id:String,backfill:{type:Boolean,default:void 0},fieldNames:Object,inputValue:String,searchValue:String,onSearch:Function,autoClearSearchValue:{type:Boolean,default:void 0},onSelect:Function,onDeselect:Function,filterOption:{type:[Boolean,Function],default:void 0},filterSort:Function,optionFilterProp:String,optionLabelProp:String,options:Array,defaultActiveFirstOption:{type:Boolean,default:void 0},virtual:{type:Boolean,default:void 0},listHeight:Number,listItemHeight:Number,menuItemSelectedIcon:U.any,mode:String,labelInValue:{type:Boolean,default:void 0},value:U.any,defaultValue:U.any,onChange:Function,children:Array})}function cR(n){return!n||Be(n)!=="object"}const dR=ae({name:"Select",inheritAttrs:!1,props:vn(J3(),{prefixCls:"vc-select",autoClearSearchValue:!0,listHeight:200,listItemHeight:20,dropdownMatchSelectWidth:!0}),setup:function(e,t){var r=t.expose,a=t.attrs,i=t.slots,o=Lm(We(e,"id")),l=R(function(){return U3(e.mode)}),u=R(function(){return!!(!e.options&&e.children)}),s=R(function(){return e.filterOption===void 0&&e.mode==="combobox"?!1:e.filterOption}),c=R(function(){return h3(e.fieldNames,u.value)}),d=Wn("",{value:R(function(){return e.searchValue!==void 0?e.searchValue:e.inputValue}),postState:function(le){return le||""}}),f=Te(d,2),p=f[0],g=f[1],y=aR(We(e,"options"),We(e,"children"),c),h=y.valueOptions,m=y.labelOptions,b=y.options,C=function(le){var te=Q3(le);return te.map(function(he){var ye,_e,Me,De,we,be;cR(he)?Me=he:(we=he.key,De=he.label,Me=(ye=he.value)!==null&&ye!==void 0?ye:we);var Se=h.value.get(Me);return Se&&(De===void 0&&(De=Se==null?void 0:Se[e.optionLabelProp||c.value.label]),we===void 0&&(we=(_e=Se==null?void 0:Se.key)!==null&&_e!==void 0?_e:Me),be=Se==null?void 0:Se.disabled),{label:De,value:Me,key:we,disabled:be,option:Se}})},x=Wn(e.defaultValue,{value:We(e,"value")}),S=Te(x,2),w=S[0],_=S[1],P=R(function(){var re,le=C(w.value);return e.mode==="combobox"&&!(!((re=le[0])===null||re===void 0)&&re.value)?[]:le}),k=uR(P,h),I=Te(k,2),F=I[0],M=I[1],T=R(function(){if(!e.mode&&F.value.length===1){var re=F.value[0];if(re.value===null&&(re.label===null||re.label===void 0))return[]}return F.value.map(function(le){var te;return O(O({},le),{label:(te=typeof le.label=="function"?le.label():le.label)!==null&&te!==void 0?te:le.value})})}),N=R(function(){return new Set(F.value.map(function(re){return re.value}))});Ze(function(){var re;if(e.mode==="combobox"){var le=(re=F.value[0])===null||re===void 0?void 0:re.value;le!=null&&g(String(le))}},{flush:"post"});var j=function(le,te){var he,ye=te!=null?te:le;return he={},D(he,c.value.value,le),D(he,c.value.label,ye),he},$=cn();Ze(function(){if(e.mode!=="tags"){$.value=b.value;return}var re=b.value.slice(),le=function(he){return h.value.has(he)};Ee(F.value).sort(function(te,he){return te.value<he.value?-1:1}).forEach(function(te){var he=te.value;le(he)||re.push(j(he,te.label))}),$.value=re});var A=lR($,c,p,s,We(e,"optionFilterProp")),E=R(function(){return e.mode!=="tags"||!p.value||A.value.some(function(re){return re[e.optionFilterProp||"value"]===p.value})?A.value:[j(p.value)].concat(Ee(A.value))}),L=R(function(){return e.filterSort?Ee(E.value).sort(function(re,le){return e.filterSort(re,le)}):E.value}),B=R(function(){return bA(L.value,{fieldNames:c.value,childrenAsData:u.value})}),K=function(le){var te=C(le);if(_(te),e.onChange&&(te.length!==F.value.length||te.some(function(_e,Me){var De;return((De=F.value[Me])===null||De===void 0?void 0:De.value)!==(_e==null?void 0:_e.value)}))){var he=e.labelInValue?te.map(function(_e){return O(O({},_e),{originLabel:_e.label,label:typeof _e.label=="function"?_e.label():_e.label})}):te.map(function(_e){return _e.value}),ye=te.map(function(_e){return bp(M(_e.value))});e.onChange(l.value?he:he[0],l.value?ye:ye[0])}},H=Ln(null),Z=Te(H,2),Y=Z[0],G=Z[1],Q=Ln(0),z=Te(Q,2),J=z[0],ne=z[1],oe=R(function(){return e.defaultActiveFirstOption!==void 0?e.defaultActiveFirstOption:e.mode!=="combobox"}),ce=function(le,te){var he=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},ye=he.source,_e=ye===void 0?"keyboard":ye;ne(te),e.backfill&&e.mode==="combobox"&&le!==null&&_e==="keyboard"&&G(String(le))},se=function(le,te){var he=function(){var ke,Ce=M(le),ve=Ce==null?void 0:Ce[c.value.label];return[e.labelInValue?{label:typeof ve=="function"?ve():ve,originLabel:ve,value:le,key:(ke=Ce==null?void 0:Ce.key)!==null&&ke!==void 0?ke:le}:le,bp(Ce)]};if(te&&e.onSelect){var ye=he(),_e=Te(ye,2),Me=_e[0],De=_e[1];e.onSelect(Me,De)}else if(!te&&e.onDeselect){var we=he(),be=Te(we,2),Se=be[0],Fe=be[1];e.onDeselect(Se,Fe)}},V=function(le,te){var he,ye=l.value?te.selected:!0;ye?he=l.value?[].concat(Ee(F.value),[le]):[le]:he=F.value.filter(function(_e){return _e.value!==le}),K(he),se(le,ye),e.mode==="combobox"?G(""):(!l.value||e.autoClearSearchValue)&&(g(""),G(""))},X=function(le,te){K(le),(te.type==="remove"||te.type==="clear")&&te.values.forEach(function(he){se(he.value,!1)})},ee=function(le,te){var he;if(g(le),G(null),te.source==="submit"){var ye=(le||"").trim();if(ye){var _e=Array.from(new Set([].concat(Ee(N.value),[ye])));K(_e),se(ye,!0),g("")}return}te.source!=="blur"&&(e.mode==="combobox"&&K(le),(he=e.onSearch)===null||he===void 0||he.call(e,le))},ue=function(le){var te=le;e.mode!=="tags"&&(te=le.map(function(ye){var _e=m.value.get(ye);return _e==null?void 0:_e.value}).filter(function(ye){return ye!==void 0}));var he=Array.from(new Set([].concat(Ee(N.value),Ee(te))));K(he),he.forEach(function(ye){se(ye,!0)})},ie=R(function(){return e.virtual!==!1&&e.dropdownMatchSelectWidth!==!1});ZL(Oc(O(O({},y),{flattenOptions:B,onActiveValue:ce,defaultActiveFirstOption:oe,onSelect:V,menuItemSelectedIcon:We(e,"menuItemSelectedIcon"),rawValues:N,fieldNames:c,virtual:ie,listHeight:We(e,"listHeight"),listItemHeight:We(e,"listItemHeight"),childrenAsData:u})));var ge=q();r({focus:function(){var le;(le=ge.value)===null||le===void 0||le.focus()},blur:function(){var le;(le=ge.value)===null||le===void 0||le.blur()},scrollTo:function(le){var te;(te=ge.value)===null||te===void 0||te.scrollTo(le)}});var fe=R(function(){return un(e,["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"])});return function(){return v(jm,W(W(W({},fe.value),a),{},{id:o,prefixCls:e.prefixCls,ref:ge,omitDomProps:sR,mode:e.mode,displayValues:T.value,onDisplayValuesChange:X,searchValue:p.value,onSearch:ee,onSearchSplit:ue,dropdownMatchSelectWidth:e.dropdownMatchSelectWidth,OptionList:nR,emptyOptions:!B.value.length,activeValue:Y.value,activeDescendantId:"".concat(o,"_list_").concat(J.value)}),i)}}});var Rm=function(){return null};Rm.isSelectOption=!0;Rm.displayName="ASelectOption";const fR=Rm;var $m=function(){return null};$m.isSelectOptGroup=!0;$m.displayName="ASelectOptGroup";const vR=$m;function Bm(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.loading,r=n.multiple,a=n.prefixCls,i=n.hasFeedback,o=n.feedbackIcon,l=n.showArrow,u=n.suffixIcon||e.suffixIcon&&e.suffixIcon(),s=n.clearIcon||e.clearIcon&&e.clearIcon(),c=n.menuItemSelectedIcon||e.menuItemSelectedIcon&&e.menuItemSelectedIcon(),d=n.removeIcon||e.removeIcon&&e.removeIcon(),f=s;s||(f=v(Jr,null,null));var p=function(C){return v(qe,null,[l!==!1&&C,i&&o])},g=null;if(u!==void 0)g=p(u);else if(t)g=p(v(Tr,{spin:!0},null));else{var y="".concat(a,"-suffix");g=function(C){var x=C.open,S=C.showSearch;return p(x&&S?v(wd,{class:y},null):v(xu,{class:y},null))}}var h=null;c!==void 0?h=c:r?h=v(Cd,null,null):h=null;var m=null;return d!==void 0?m=d:m=v(ea,null,null),{clearIcon:f,suffixIcon:g,itemIcon:h,removeIcon:m}}function e6(n){var e=Symbol("contextKey"),t=function(i,o){var l=kn({});return ln(e,l),Ze(function(){O(l,i,o||{})}),l},r=function(){return on(e,n)||{}};return{useProvide:t,useInject:r}}var Tc=Symbol("ContextProps"),Nc=Symbol("InternalContextProps"),pR=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R(function(){return!0}),r=q(new Map),a=function(l,u){r.value.set(l,u),r.value=new Map(r.value)},i=function(l){r.value.delete(l),r.value=new Map(r.value)};Pe([t,r],function(){}),ln(Tc,e),ln(Nc,{addFormItemField:a,removeFormItemField:i})},Np={id:R(function(){}),onFieldBlur:function(){},onFieldChange:function(){},clearValidate:function(){}},Ip={addFormItemField:function(){},removeFormItemField:function(){}},lt=function(){var e=on(Nc,Ip),t=Symbol("FormItemFieldKey"),r=Jn();return e.addFormItemField(t,r.type),fn(function(){e.removeFormItemField(t)}),ln(Nc,Ip),ln(Tc,Np),on(Tc,Np)};const Ic=ae({name:"AFormItemRest",setup:function(e,t){var r=t.slots;return ln(Nc,Ip),ln(Tc,Np),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}});var pt=e6({}),Ec=ae({name:"NoFormStatus",setup:function(e,t){var r=t.slots;return pt.useProvide({}),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}});jn("warning","error","");function Tt(n,e,t){var r;return de((r={},D(r,"".concat(n,"-status-success"),e==="success"),D(r,"".concat(n,"-status-warning"),e==="warning"),D(r,"".concat(n,"-status-error"),e==="error"),D(r,"".concat(n,"-status-validating"),e==="validating"),D(r,"".concat(n,"-has-feedback"),t),r))}var jr=function(e,t){return t||e},Dd=function(){return O(O({},un(J3(),["inputIcon","mode","getInputElement","getRawInputElement","backfill"])),{value:{type:[Array,Object,String,Number]},defaultValue:{type:[Array,Object,String,Number]},notFoundContent:U.any,suffixIcon:U.any,itemIcon:U.any,size:String,mode:String,bordered:{type:Boolean,default:!0},transitionName:String,choiceTransitionName:{type:String,default:""},placement:String,status:String,"onUpdate:value":Function})},LC="SECRET_COMBOBOX_MODE_DO_NOT_USE",Wr=ae({name:"ASelect",Option:fR,OptGroup:vR,inheritAttrs:!1,props:vn(Dd(),{listHeight:256,listItemHeight:24}),SECRET_COMBOBOX_MODE_DO_NOT_USE:LC,slots:["notFoundContent","suffixIcon","itemIcon","removeIcon","clearIcon","dropdownRender","option","placeholder","tagRender","maxTagPlaceholder","optionLabel"],setup:function(e,t){var r=t.attrs,a=t.emit,i=t.slots,o=t.expose,l=q(),u=lt(),s=pt.useInject(),c=R(function(){return jr(s.status,e.status)}),d=function(){var N;(N=l.value)===null||N===void 0||N.focus()},f=function(){var N;(N=l.value)===null||N===void 0||N.blur()},p=function(N){var j;(j=l.value)===null||j===void 0||j.scrollTo(N)},g=R(function(){var T=e.mode;if(T!=="combobox")return T===LC?"combobox":T}),y=Le("select",e),h=y.prefixCls,m=y.direction,b=y.configProvider,C=y.size,x=y.getPrefixCls,S=R(function(){return x()}),w=R(function(){return e.placement!==void 0?e.placement:m.value==="rtl"?"bottomRight":"bottomLeft"}),_=R(function(){return Er(S.value,um(w.value),e.transitionName)}),P=R(function(){var T;return de((T={},D(T,"".concat(h.value,"-lg"),C.value==="large"),D(T,"".concat(h.value,"-sm"),C.value==="small"),D(T,"".concat(h.value,"-rtl"),m.value==="rtl"),D(T,"".concat(h.value,"-borderless"),!e.bordered),D(T,"".concat(h.value,"-in-form-item"),s.isFormItemInput),T),Tt(h.value,c.value,s.hasFeedback))}),k=function(){for(var N=arguments.length,j=new Array(N),$=0;$<N;$++)j[$]=arguments[$];a("update:value",j[0]),a.apply(void 0,["change"].concat(j)),u.onFieldChange()},I=function(N){a("blur",N),u.onFieldBlur()};o({blur:f,focus:d,scrollTo:p});var F=R(function(){return g.value==="multiple"||g.value==="tags"}),M=R(function(){return e.showArrow!==void 0?e.showArrow:e.loading||!(F.value||g.value==="combobox")});return function(){var T,N,j=e.notFoundContent,$=e.listHeight,A=$===void 0?256:$,E=e.listItemHeight,L=E===void 0?24:E,B=e.getPopupContainer,K=e.dropdownClassName,H=e.virtual,Z=e.dropdownMatchSelectWidth,Y=e.id,G=Y===void 0?u.id.value:Y,Q=e.placeholder,z=Q===void 0?(T=i.placeholder)===null||T===void 0?void 0:T.call(i):Q,J=e.showArrow,ne=s.hasFeedback,oe=s.feedbackIcon,ce=b.renderEmpty,se=b.getPopupContainer,V;j!==void 0?V=j:i.notFoundContent?V=i.notFoundContent():g.value==="combobox"?V=null:V=ce("Select");var X=Bm(O(O({},e),{multiple:F.value,prefixCls:h.value,hasFeedback:ne,feedbackIcon:oe,showArrow:M.value}),i),ee=X.suffixIcon,ue=X.itemIcon,ie=X.removeIcon,ge=X.clearIcon,fe=un(e,["prefixCls","suffixIcon","itemIcon","removeIcon","clearIcon","size","bordered","status"]),re=de(K,D({},"".concat(h.value,"-dropdown-").concat(m.value),m.value==="rtl"));return v(dR,W(W(W({ref:l,virtual:H,dropdownMatchSelectWidth:Z},fe),r),{},{placeholder:z,listHeight:A,listItemHeight:L,mode:g.value,prefixCls:h.value,direction:m.value,inputIcon:ee,menuItemSelectedIcon:ue,removeIcon:ie,clearIcon:ge,notFoundContent:V,class:[P.value,r.class],getPopupContainer:B||se,dropdownClassName:re,onChange:k,onBlur:I,id:G,dropdownRender:fe.dropdownRender||i.dropdownRender,transitionName:_.value,children:(N=i.default)===null||N===void 0?void 0:N.call(i),tagRender:e.tagRender||i.tagRender,optionLabelRender:i.optionLabel,maxTagPlaceholder:e.maxTagPlaceholder||i.maxTagPlaceholder,showArrow:ne||J}),{option:i.option})}}});Wr.install=function(n){return n.component(Wr.name,Wr),n.component(Wr.Option.displayName,Wr.Option),n.component(Wr.OptGroup.displayName,Wr.OptGroup),n};var hR=Wr.Option,gR=Wr.OptGroup;const Sa=Wr;var Vm=function(){return null};Vm.isSelectOption=!0;Vm.displayName="AAutoCompleteOption";const Po=Vm;var Km=function(){return null};Km.isSelectOptGroup=!0;Km.displayName="AAutoCompleteOptGroup";const As=Km;function mR(n){var e,t;return((e=n==null?void 0:n.type)===null||e===void 0?void 0:e.isSelectOption)||((t=n==null?void 0:n.type)===null||t===void 0?void 0:t.isSelectOptGroup)}var yR=function(){return O(O({},un(Dd(),["loading","mode","optionLabelProp","labelInValue"])),{dataSource:Array,dropdownMenuStyle:{type:Object,default:void 0},dropdownMatchSelectWidth:{type:[Number,Boolean],default:!0},prefixCls:String,showSearch:{type:Boolean,default:void 0},transitionName:String,choiceTransitionName:{type:String,default:"zoom"},autofocus:{type:Boolean,default:void 0},backfill:{type:Boolean,default:void 0},filterOption:{type:[Boolean,Function],default:!1},defaultActiveFirstOption:{type:Boolean,default:!0},status:String})},bR=Po,CR=As,Yf=ae({name:"AAutoComplete",inheritAttrs:!1,props:yR(),slots:["option"],setup:function(e,t){var r=t.slots,a=t.attrs,i=t.expose;rt(!("dataSource"in r),"AutoComplete","`dataSource` slot is deprecated, please use props `options` instead."),rt(!("options"in r),"AutoComplete","`options` slot is deprecated, please use props `options` instead.");var o=q(),l=function(){var p,g=Fn((p=r.default)===null||p===void 0?void 0:p.call(r)),y=g.length?g[0]:void 0;return y},u=function(){var p;(p=o.value)===null||p===void 0||p.focus()},s=function(){var p;(p=o.value)===null||p===void 0||p.blur()};i({focus:u,blur:s});var c=Le("select",e),d=c.prefixCls;return function(){var f,p,g,y,h=e.size,m=e.dataSource,b=e.notFoundContent,C=b===void 0?(p=r.notFoundContent)===null||p===void 0?void 0:p.call(r):b,x,S=a.class,w=(f={},D(f,S,!!S),D(f,"".concat(d.value,"-lg"),h==="large"),D(f,"".concat(d.value,"-sm"),h==="small"),D(f,"".concat(d.value,"-show-search"),!0),D(f,"".concat(d.value,"-auto-complete"),!0),f);if(e.options===void 0){var _=((g=r.dataSource)===null||g===void 0?void 0:g.call(r))||((y=r.options)===null||y===void 0?void 0:y.call(r))||[];_.length&&mR(_[0])?x=_:x=m?m.map(function(k){if(at(k))return k;switch(Be(k)){case"string":return v(Po,{key:k,value:k},{default:function(){return[k]}});case"object":return v(Po,{key:k.value,value:k.value},{default:function(){return[k.text]}});default:throw new Error("AutoComplete[dataSource] only supports type `string[] | Object[]`.")}}):[]}var P=un(O(O(O({},e),a),{mode:Sa.SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:l,notFoundContent:C,class:w,ref:o}),["dataSource","loading"]);return v(Sa,P,W({default:function(){return[x]}},un(r,["default","dataSource","options"])))}}});const xR=O(Yf,{Option:Po,OptGroup:As,install:function(e){return e.component(Yf.name,Yf),e.component(Po.displayName,Po),e.component(As.displayName,As),e}});var wR={success:Cu,info:e4,error:Jr,warning:wu},SR={success:eg,info:Eg,error:ig,warning:xd},_R=jn("success","info","warning","error"),kR=function(){return{type:U.oneOf(_R),closable:{type:Boolean,default:void 0},closeText:U.any,message:U.any,description:U.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:U.any,closeIcon:U.any,onClose:Function}},PR=ae({name:"AAlert",inheritAttrs:!1,props:kR(),setup:function(e,t){var r=t.slots,a=t.emit,i=t.attrs,o=t.expose,l=Le("alert",e),u=l.prefixCls,s=l.direction,c=q(!1),d=q(!1),f=q(),p=function(m){m.preventDefault();var b=f.value;b.style.height="".concat(b.offsetHeight,"px"),b.style.height="".concat(b.offsetHeight,"px"),c.value=!0,a("close",m)},g=function(){var m;c.value=!1,d.value=!0,(m=e.afterClose)===null||m===void 0||m.call(e)};o({animationEnd:g});var y=q({});return function(){var h,m,b=e.banner,C=e.closeIcon,x=C===void 0?(m=r.closeIcon)===null||m===void 0?void 0:m.call(r):C,S=e.closable,w=e.type,_=e.showIcon,P=Vn(r,e,"closeText"),k=Vn(r,e,"description"),I=Vn(r,e,"message"),F=Vn(r,e,"icon");_=b&&_===void 0?!0:_,w=b&&w===void 0?"warning":w||"info";var M=(k?SR:wR)[w]||null;P&&(S=!0);var T=u.value,N=de(T,(h={},D(h,"".concat(T,"-").concat(w),!0),D(h,"".concat(T,"-closing"),c.value),D(h,"".concat(T,"-with-description"),!!k),D(h,"".concat(T,"-no-icon"),!_),D(h,"".concat(T,"-banner"),!!b),D(h,"".concat(T,"-closable"),S),D(h,"".concat(T,"-rtl"),s.value==="rtl"),h)),j=S?v("button",{type:"button",onClick:p,class:"".concat(T,"-close-icon"),tabindex:0},[P?v("span",{class:"".concat(T,"-close-text")},[P]):x===void 0?v(ea,null,null):x]):null,$=F&&(at(F)?wn(F,{class:"".concat(T,"-icon")}):v("span",{class:"".concat(T,"-icon")},[F]))||v(M,{class:"".concat(T,"-icon")},null),A=ei("".concat(T,"-motion"),{appear:!1,css:!0,onAfterLeave:g,onBeforeLeave:function(L){L.style.maxHeight="".concat(L.offsetHeight,"px")},onLeave:function(L){L.style.maxHeight="0px"}});return d.value?null:v(Lt,A,{default:function(){return[St(v("div",W(W({role:"alert"},i),{},{style:[i.style,y.value],class:[i.class,N],"data-show":!c.value,ref:f}),[_?$:null,v("div",{class:"".concat(T,"-content")},[I?v("div",{class:"".concat(T,"-message")},[I]):null,k?v("div",{class:"".concat(T,"-description")},[k]):null]),j]),[[Ar,!c.value]])]}})}}});const OR=Gn(PR);var $i=["xxxl","xxl","xl","lg","md","sm","xs"],as={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)",xxxl:"(min-width: 2000px)"},ci=new Map,Gf=-1,is={},TR={matchHandlers:{},dispatch:function(e){return is=e,ci.forEach(function(t){return t(is)}),ci.size>=1},subscribe:function(e){return ci.size||this.register(),Gf+=1,ci.set(Gf,e),e(is),Gf},unsubscribe:function(e){ci.delete(e),ci.size||this.unregister()},unregister:function(){var e=this;Object.keys(as).forEach(function(t){var r=as[t],a=e.matchHandlers[r];a==null||a.mql.removeListener(a==null?void 0:a.listener)}),ci.clear()},register:function(){var e=this;Object.keys(as).forEach(function(t){var r=as[t],a=function(l){var u=l.matches;e.dispatch(O(O({},is),D({},t,u)))},i=window.matchMedia(r);i.addListener(a),e.matchHandlers[r]={mql:i,listener:a},a(i)})}};const Lo=TR;function Qo(){var n=q({}),e=null;return Ye(function(){e=Lo.subscribe(function(t){n.value=t})}),Dt(function(){Lo.unsubscribe(e)}),n}var n6=Symbol("SizeProvider"),NR=function(e){var t=on("configProvider",fm),r=R(function(){return e.size||t.componentSize});return ln(n6,r),r},t6=function(e){var t=e?R(function(){return e.size}):on(n6,R(function(){return"default"}));return t};const IR=NR;function Gt(n){var e=cn();return Ze(function(){e.value=n()},{flush:"sync"}),e}var ER=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:U.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},MR=ae({name:"AAvatar",inheritAttrs:!1,props:ER(),slots:["icon"],setup:function(e,t){var r=t.slots,a=t.attrs,i=q(!0),o=q(!1),l=q(1),u=q(null),s=q(null),c=Le("avatar",e),d=c.prefixCls,f=t6(),p=R(function(){return e.size==="default"?f.value:e.size}),g=Qo(),y=Gt(function(){if(Be(e.size)==="object"){var C=$i.find(function(S){return g.value[S]}),x=e.size[C];return x}}),h=function(x){return y.value?{width:"".concat(y.value,"px"),height:"".concat(y.value,"px"),lineHeight:"".concat(y.value,"px"),fontSize:"".concat(x?y.value/2:18,"px")}:{}},m=function(){if(!(!u.value||!s.value)){var x=u.value.offsetWidth,S=s.value.offsetWidth;if(x!==0&&S!==0){var w=e.gap,_=w===void 0?4:w;_*2<S&&(l.value=S-_*2<x?(S-_*2)/x:1)}}},b=function(){var x=e.loadError,S=x==null?void 0:x();S!==!1&&(i.value=!1)};return Pe(function(){return e.src},function(){dn(function(){i.value=!0,l.value=1})}),Pe(function(){return e.gap},function(){dn(function(){m()})}),Ye(function(){dn(function(){m(),o.value=!0})}),function(){var C,x,S=e.shape,w=e.src,_=e.alt,P=e.srcset,k=e.draggable,I=e.crossOrigin,F=Vn(r,e,"icon"),M=d.value,T=(C={},D(C,"".concat(a.class),!!a.class),D(C,M,!0),D(C,"".concat(M,"-lg"),p.value==="large"),D(C,"".concat(M,"-sm"),p.value==="small"),D(C,"".concat(M,"-").concat(S),S),D(C,"".concat(M,"-image"),w&&i.value),D(C,"".concat(M,"-icon"),F),C),N=typeof p.value=="number"?{width:"".concat(p.value,"px"),height:"".concat(p.value,"px"),lineHeight:"".concat(p.value,"px"),fontSize:F?"".concat(p.value/2,"px"):"18px"}:{},j=(x=r.default)===null||x===void 0?void 0:x.call(r),$;if(w&&i.value)$=v("img",{draggable:k,src:w,srcset:P,onError:b,alt:_,crossorigin:I},null);else if(F)$=F;else if(o.value||l.value!==1){var A="scale(".concat(l.value,") translateX(-50%)"),E={msTransform:A,WebkitTransform:A,transform:A},L=typeof p.value=="number"?{lineHeight:"".concat(p.value,"px")}:{};$=v(mr,{onResize:m},{default:function(){return[v("span",{class:"".concat(M,"-string"),ref:u,style:O(O({},L),E)},[j])]}})}else $=v("span",{class:"".concat(M,"-string"),ref:u,style:{opacity:0}},[j]);return v("span",W(W({},a),{},{ref:s,class:T,style:[N,h(!!F),a.style]}),[$])}}});const Ei=MR;var ur={adjustX:1,adjustY:1},sr=[0,0],r6={left:{points:["cr","cl"],overflow:ur,offset:[-4,0],targetOffset:sr},right:{points:["cl","cr"],overflow:ur,offset:[4,0],targetOffset:sr},top:{points:["bc","tc"],overflow:ur,offset:[0,-4],targetOffset:sr},bottom:{points:["tc","bc"],overflow:ur,offset:[0,4],targetOffset:sr},topLeft:{points:["bl","tl"],overflow:ur,offset:[0,-4],targetOffset:sr},leftTop:{points:["tr","tl"],overflow:ur,offset:[-4,0],targetOffset:sr},topRight:{points:["br","tr"],overflow:ur,offset:[0,-4],targetOffset:sr},rightTop:{points:["tl","tr"],overflow:ur,offset:[4,0],targetOffset:sr},bottomRight:{points:["tr","br"],overflow:ur,offset:[0,4],targetOffset:sr},rightBottom:{points:["bl","br"],overflow:ur,offset:[4,0],targetOffset:sr},bottomLeft:{points:["tl","bl"],overflow:ur,offset:[0,4],targetOffset:sr},leftBottom:{points:["br","bl"],overflow:ur,offset:[-4,0],targetOffset:sr}},AR={prefixCls:String,id:String,overlayInnerStyle:U.any};const FR=ae({name:"Content",props:AR,slots:["overlay"],setup:function(e,t){var r=t.slots;return function(){var a;return v("div",{class:"".concat(e.prefixCls,"-inner"),id:e.id,role:"tooltip",style:e.overlayInnerStyle},[(a=r.overlay)===null||a===void 0?void 0:a.call(r)])}}});var jR=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function RC(){}const DR=ae({name:"Tooltip",inheritAttrs:!1,props:{trigger:U.any.def(["hover"]),defaultVisible:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:U.string.def("right"),transitionName:String,animation:U.any,afterVisibleChange:U.func.def(function(){}),overlayStyle:{type:Object,default:void 0},overlayClassName:String,prefixCls:U.string.def("rc-tooltip"),mouseEnterDelay:U.number.def(.1),mouseLeaveDelay:U.number.def(.1),getPopupContainer:Function,destroyTooltipOnHide:{type:Boolean,default:!1},align:U.object.def(function(){return{}}),arrowContent:U.any.def(null),tipId:String,builtinPlacements:U.object,overlayInnerStyle:{type:Object,default:void 0},popupVisible:{type:Boolean,default:void 0},onVisibleChange:Function,onPopupAlign:Function},slots:["arrowContent","overlay"],setup:function(e,t){var r=t.slots,a=t.attrs,i=t.expose,o=q(),l=function(){var f=e.prefixCls,p=e.tipId,g=e.overlayInnerStyle;return[v("div",{class:"".concat(f,"-arrow"),key:"arrow"},[Vn(r,e,"arrowContent")]),v(FR,{key:"content",prefixCls:f,id:p,overlayInnerStyle:g},{overlay:r.overlay})]},u=function(){return o.value.getPopupDomNode()};i({getPopupDomNode:u,triggerDOM:o,forcePopupAlign:function(){var f;return(f=o.value)===null||f===void 0?void 0:f.forcePopupAlign()}});var s=q(!1),c=q(!1);return Ze(function(){var d=e.destroyTooltipOnHide;if(typeof d=="boolean")s.value=d;else if(d&&Be(d)==="object"){var f=d.keepParent;s.value=f===!0,c.value=f===!1}}),function(){var d=e.overlayClassName,f=e.trigger,p=e.mouseEnterDelay,g=e.mouseLeaveDelay,y=e.overlayStyle,h=e.prefixCls,m=e.afterVisibleChange,b=e.transitionName,C=e.animation,x=e.placement,S=e.align;e.destroyTooltipOnHide;var w=e.defaultVisible,_=jR(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible"]),P=O({},_);e.visible!==void 0&&(P.popupVisible=e.visible);var k=O(O(O({popupClassName:d,prefixCls:h,action:f,builtinPlacements:r6,popupPlacement:x,popupAlign:S,afterPopupVisibleChange:m,popupTransitionName:b,popupAnimation:C,defaultPopupVisible:w,destroyPopupOnHide:s.value,autoDestroy:c.value,mouseLeaveDelay:g,popupStyle:y,mouseEnterDelay:p},P),a),{onPopupVisibleChange:e.onVisibleChange||RC,onPopupAlign:e.onPopupAlign||RC,ref:o,popup:l()});return v(Xo,k,{default:r.default})}}});var LR=jn("success","processing","error","default","warning"),zm=jn("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime");const Hm=function(){return{trigger:[String,Array],visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:void 0},placement:String,color:String,transitionName:String,overlayStyle:{type:Object,default:void 0},overlayClassName:String,openClassName:String,prefixCls:String,mouseEnterDelay:Number,mouseLeaveDelay:Number,getPopupContainer:Function,arrowPointAtCenter:{type:Boolean,default:void 0},autoAdjustOverflow:{type:[Boolean,Object],default:void 0},destroyTooltipOnHide:{type:Boolean,default:void 0},align:{type:Object,default:void 0},builtinPlacements:{type:Object,default:void 0},children:Array,onVisibleChange:Function,"onUpdate:visible":Function}};var RR={adjustX:1,adjustY:1},$C={adjustX:0,adjustY:0},$R=[0,0];function BC(n){return typeof n=="boolean"?n?RR:$C:O(O({},$C),n)}function a6(n){var e=n.arrowWidth,t=e===void 0?4:e,r=n.horizontalArrowShift,a=r===void 0?16:r,i=n.verticalArrowShift,o=i===void 0?8:i,l=n.autoAdjustOverflow,u=n.arrowPointAtCenter,s={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(a+t),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(o+t)]},topRight:{points:["br","tc"],offset:[a+t,-4]},rightTop:{points:["tl","cr"],offset:[4,-(o+t)]},bottomRight:{points:["tr","bc"],offset:[a+t,4]},rightBottom:{points:["bl","cr"],offset:[4,o+t]},bottomLeft:{points:["tl","bc"],offset:[-(a+t),4]},leftBottom:{points:["br","cl"],offset:[-4,o+t]}};return Object.keys(s).forEach(function(c){s[c]=u?O(O({},s[c]),{overflow:BC(l),targetOffset:$R}):O(O({},r6[c]),{overflow:BC(l)}),s[c].ignoreShake=!0}),s}function Mc(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=0,t=n.length;e<t;e++)if(n[e]!==void 0)return n[e]}var BR=function(e,t){var r={},a=O({},e);return t.forEach(function(i){e&&i in e&&(r[i]=e[i],delete a[i])}),{picked:r,omitted:a}},VC=new RegExp("^(".concat(zm.join("|"),")(-inverse)?$")),i6=function(){return O(O({},Hm()),{title:U.any})},o6=function(){return{trigger:"hover",transitionName:"zoom-big-fast",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}};const VR=ae({name:"ATooltip",inheritAttrs:!1,props:vn(i6(),{trigger:"hover",transitionName:"zoom-big-fast",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}),slots:["title"],setup:function(e,t){var r=t.slots,a=t.emit,i=t.attrs,o=t.expose,l=Le("tooltip",e),u=l.prefixCls,s=l.getPopupContainer,c=q(Mc([e.visible,e.defaultVisible])),d=q();Ye(function(){rt(e.defaultVisible===void 0,"Tooltip","'defaultVisible' is deprecated, please use 'v-model:visible'")});var f;Pe(function(){return e.visible},function(S){Qe.cancel(f),f=Qe(function(){c.value=!!S})});var p=function(){var w,_=(w=e.title)!==null&&w!==void 0?w:r.title;return!_&&_!==0},g=function(w){var _=p();e.visible===void 0&&(c.value=_?!1:w),_||(a("update:visible",w),a("visibleChange",w))},y=function(){return d.value.getPopupDomNode()};o({getPopupDomNode:y,visible:c,forcePopupAlign:function(){var w;return(w=d.value)===null||w===void 0?void 0:w.forcePopupAlign()}});var h=R(function(){var S=e.builtinPlacements,w=e.arrowPointAtCenter,_=e.autoAdjustOverflow;return S||a6({arrowPointAtCenter:w,autoAdjustOverflow:_})}),m=function(w){return w||w===""},b=function(w){var _=w.type;if(Be(_)==="object"&&w.props&&((_.__ANT_BUTTON===!0||_==="button")&&m(w.props.disabled)||_.__ANT_SWITCH===!0&&(m(w.props.disabled)||m(w.props.loading)))){var P=BR(y4(w),["position","left","right","top","bottom","float","display","zIndex"]),k=P.picked,I=P.omitted,F=O(O({display:"inline-block"},k),{cursor:"not-allowed",lineHeight:1,width:w.props&&w.props.block?"100%":null}),M=O(O({},I),{pointerEvents:"none"}),T=wn(w,{style:M},!0);return v("span",{style:F,class:"".concat(u.value,"-disabled-compatible-wrapper")},[T])}return w},C=function(){var w,_;return(w=e.title)!==null&&w!==void 0?w:(_=r.title)===null||_===void 0?void 0:_.call(r)},x=function(w,_){var P=h.value,k=Object.keys(P).find(function(M){return P[M].points[0]===_.points[0]&&P[M].points[1]===_.points[1]});if(!!k){var I=w.getBoundingClientRect(),F={top:"50%",left:"50%"};k.indexOf("top")>=0||k.indexOf("Bottom")>=0?F.top="".concat(I.height-_.offset[1],"px"):(k.indexOf("Top")>=0||k.indexOf("bottom")>=0)&&(F.top="".concat(-_.offset[1],"px")),k.indexOf("left")>=0||k.indexOf("Right")>=0?F.left="".concat(I.width-_.offset[0],"px"):(k.indexOf("right")>=0||k.indexOf("Left")>=0)&&(F.left="".concat(-_.offset[0],"px")),w.style.transformOrigin="".concat(F.left," ").concat(F.top)}};return function(){var S,w,_,P=e.openClassName,k=e.color,I=e.overlayClassName,F=(_=Qn((w=r.default)===null||w===void 0?void 0:w.call(r)))!==null&&_!==void 0?_:null;F=F.length===1?F[0]:F;var M=c.value;if(e.visible===void 0&&p()&&(M=!1),!F)return null;var T=b(at(F)?F:v("span",null,[F])),N=de((S={},D(S,P||"".concat(u.value,"-open"),!0),D(S,T.props&&T.props.class,T.props&&T.props.class),S)),j=de(I,D({},"".concat(u.value,"-").concat(k),k&&VC.test(k))),$,A;k&&!VC.test(k)&&($={backgroundColor:k},A={"--antd-arrow-background-color":k});var E=O(O(O({},i),e),{prefixCls:u.value,getPopupContainer:s.value,builtinPlacements:h.value,visible:M,ref:d,overlayClassName:j,overlayInnerStyle:$,onVisibleChange:g,onPopupAlign:x});return v(DR,E,{default:function(){return[c.value?wn(T,{class:N}):T]},arrowContent:function(){return v("span",{class:"".concat(u.value,"-arrow-content"),style:A},null)},overlay:C})}}}),Or=Gn(VR);var KR=function(){return O(O({},Hm()),{content:U.any,title:U.any})},zR=ae({name:"APopover",props:vn(KR(),O(O({},o6()),{trigger:"hover",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup:function(e,t){var r=t.expose,a=t.slots,i=q();r({getPopupDomNode:function(){var f,p;return(p=(f=i.value)===null||f===void 0?void 0:f.getPopupDomNode)===null||p===void 0?void 0:p.call(f)}});var o=Le("popover",e),l=o.prefixCls,u=o.configProvider,s=R(function(){return u.getPrefixCls()}),c=function(){var f,p,g=e.title,y=g===void 0?Qn((f=a.title)===null||f===void 0?void 0:f.call(a)):g,h=e.content,m=h===void 0?Qn((p=a.content)===null||p===void 0?void 0:p.call(a)):h,b=!!(Array.isArray(y)?y.length:y),C=!!(Array.isArray(m)?m.length:y);if(!(!b&&!C))return v(qe,null,[b&&v("div",{class:"".concat(l.value,"-title")},[y]),v("div",{class:"".concat(l.value,"-inner-content")},[m])])};return function(){return v(Or,W(W({},un(e,["title","content"])),{},{prefixCls:l.value,ref:i,transitionName:Er(s.value,"zoom-big",e.transitionName)}),{title:c,default:a.default})}}});const l6=Gn(zR);var HR=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},WR=ae({name:"AAvatarGroup",inheritAttrs:!1,props:HR(),setup:function(e,t){var r=t.slots,a=t.attrs,i=Le("avatar-group",e),o=i.prefixCls,l=i.direction;return IR(e),function(){var u,s=e.maxPopoverPlacement,c=s===void 0?"top":s,d=e.maxCount,f=e.maxStyle,p=e.maxPopoverTrigger,g=p===void 0?"hover":p,y=(u={},D(u,o.value,!0),D(u,"".concat(o.value,"-rtl"),l.value==="rtl"),D(u,"".concat(a.class),!!a.class),u),h=Vn(r,e),m=Fn(h).map(function(S,w){return wn(S,{key:"avatar-key-".concat(w)})}),b=m.length;if(d&&d<b){var C=m.slice(0,d),x=m.slice(d,b);return C.push(v(l6,{key:"avatar-popover-key",content:x,trigger:g,placement:c,overlayClassName:"".concat(o.value,"-popover")},{default:function(){return[v(Ei,{style:f},{default:function(){return["+".concat(b-d)]}})]}})),v("div",W(W({},a),{},{class:y,style:a.style}),[C])}return v("div",W(W({},a),{},{class:y,style:a.style}),[m])}}});const Ac=WR;Ei.Group=Ac;Ei.install=function(n){return n.component(Ei.name,Ei),n.component(Ac.name,Ac),n};var UR=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},qR=ae({name:"ABackTop",inheritAttrs:!1,props:UR(),setup:function(e,t){var r=t.slots,a=t.attrs,i=t.emit,o=Le("back-top",e),l=o.prefixCls,u=o.direction,s=q(),c=kn({visible:!1,scrollEvent:null}),d=function(){return s.value&&s.value.ownerDocument?s.value.ownerDocument:window},f=function(m){var b=e.target,C=b===void 0?d:b,x=e.duration;hm(0,{getContainer:C,duration:x}),i("click",m)},p=dp(function(h){var m=e.visibilityHeight,b=pm(h.target,!0);c.visible=b>m}),g=function(){var m=e.target,b=m||d,C=b();c.scrollEvent=Rn(C,"scroll",function(x){p(x)}),p({target:C})},y=function(){c.scrollEvent&&c.scrollEvent.remove(),p.cancel()};return Pe(function(){return e.target},function(){y(),dn(function(){g()})}),Ye(function(){dn(function(){g()})}),vd(function(){dn(function(){g()})}),hS(function(){y()}),fn(function(){y()}),function(){var h,m,b=v("div",{class:"".concat(l.value,"-content")},[v("div",{class:"".concat(l.value,"-icon")},[v(L9,null,null)])]),C=O(O({},a),{onClick:f,class:(h={},D(h,"".concat(l.value),!0),D(h,"".concat(a.class),a.class),D(h,"".concat(l.value,"-rtl"),u.value==="rtl"),h)}),x=ei("fade");return v(Lt,x,{default:function(){return[St(v("div",W(W({},C),{},{ref:s}),[((m=r.default)===null||m===void 0?void 0:m.call(r))||b]),[[Ar,c.visible]])]}})}}});const YR=Gn(qR);function KC(n){var e=n.prefixCls,t=n.value,r=n.current,a=n.offset,i=a===void 0?0:a,o;return i&&(o={position:"absolute",top:"".concat(i,"00%"),left:0}),v("p",{style:o,class:de("".concat(e,"-only-unit"),{current:r})},[t])}function GR(n,e,t){for(var r=n,a=0;(r+10)%10!==e;)r+=t,a+=t;return a}const XR=ae({name:"SingleNumber",props:{prefixCls:String,value:String,count:Number},setup:function(e){var t=R(function(){return Number(e.value)}),r=R(function(){return Math.abs(e.count)}),a=kn({prevValue:t.value,prevCount:r.value}),i=function(){a.prevValue=t.value,a.prevCount=r.value},o=q();return Pe(t,function(){clearTimeout(o.value),o.value=setTimeout(function(){i()},1e3)},{flush:"post"}),Dt(function(){clearTimeout(o.value)}),function(){var l,u={},s=t.value;if(a.prevValue===s||Number.isNaN(s)||Number.isNaN(a.prevValue))l=[KC(O(O({},e),{current:!0}))],u={transition:"none"};else{l=[];for(var c=s+10,d=[],f=s;f<=c;f+=1)d.push(f);var p=d.findIndex(function(y){return y%10===a.prevValue});l=d.map(function(y,h){var m=y%10;return KC(O(O({},e),{value:m,offset:h-p,current:h===p}))});var g=a.prevCount<r.value?1:-1;u={transform:"translateY(".concat(-GR(a.prevValue,s,g),"00%)")}}return v("span",{class:"".concat(e.prefixCls,"-only"),style:u,onTransitionend:function(){return i()}},[l])}}});var ZR=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},QR={prefixCls:String,count:U.any,component:String,title:U.any,show:Boolean};const JR=ae({name:"ScrollNumber",inheritAttrs:!1,props:QR,setup:function(e,t){var r=t.attrs,a=t.slots,i=Le("scroll-number",e),o=i.prefixCls;return function(){var l,u=O(O({},e),r);u.prefixCls;var s=u.count,c=u.title;u.show;var d=u.component,f=d===void 0?"sup":d,p=u.class,g=u.style,y=ZR(u,["prefixCls","count","title","show","component","class","style"]),h=O(O({},y),{style:g,"data-show":e.show,class:de(o.value,p),title:c}),m=s;if(s&&Number(s)%1===0){var b=String(s).split("");m=b.map(function(x,S){return v(XR,{prefixCls:o.value,count:Number(s),value:x,key:b.length-S},null)})}g&&g.borderColor&&(h.style=O(O({},g),{boxShadow:"0 0 0 1px ".concat(g.borderColor," inset")}));var C=Qn((l=a.default)===null||l===void 0?void 0:l.call(a));return C&&C.length?wn(C,{class:de("".concat(o.value,"-custom-component"))},!1):v(f,h,{default:function(){return[m]}})}}});function Cl(n){return zm.indexOf(n)!==-1}var e$=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},n$=function(){return{prefix:String,color:{type:String},text:U.any,placement:{type:String,default:"end"}}};const Fc=ae({name:"ABadgeRibbon",inheritAttrs:!1,props:n$(),slots:["text"],setup:function(e,t){var r=t.attrs,a=t.slots,i=Le("ribbon",e),o=i.prefixCls,l=i.direction,u=R(function(){return Cl(e.color)}),s=R(function(){var c;return[o.value,"".concat(o.value,"-placement-").concat(e.placement),(c={},D(c,"".concat(o.value,"-rtl"),l.value==="rtl"),D(c,"".concat(o.value,"-color-").concat(e.color),u.value),c)]});return function(){var c,d,f=r.class,p=r.style,g=e$(r,["class","style"]),y={},h={};return e.color&&!u.value&&(y.background=e.color,h.color=e.color),v("div",W({class:"".concat(o.value,"-wrapper")},g),[(c=a.default)===null||c===void 0?void 0:c.call(a),v("div",{class:[s.value,f],style:O(O({},y),p)},[v("span",{class:"".concat(o.value,"-text")},[e.text||((d=a.text)===null||d===void 0?void 0:d.call(a))]),v("div",{class:"".concat(o.value,"-corner"),style:h},null)])])}}});var t$=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};const u6=t$;var r$=function(){return{count:U.any,showZero:{type:Boolean,default:void 0},overflowCount:{type:Number,default:99},dot:{type:Boolean,default:void 0},prefixCls:String,scrollNumberPrefixCls:String,status:{type:String},size:{type:String,default:"default"},color:String,text:U.any,offset:Array,numberStyle:{type:Object,default:void 0},title:String}};const Fs=ae({name:"ABadge",Ribbon:Fc,inheritAttrs:!1,props:r$(),slots:["text","count"],setup:function(e,t){var r=t.slots,a=t.attrs,i=Le("badge",e),o=i.prefixCls,l=i.direction,u=R(function(){return e.count>e.overflowCount?"".concat(e.overflowCount,"+"):e.count}),s=R(function(){return e.status!==null&&e.status!==void 0||e.color!==null&&e.color!==void 0}),c=R(function(){return u.value==="0"||u.value===0}),d=R(function(){return e.dot&&!c.value}),f=R(function(){return d.value?"":u.value}),p=R(function(){var x=f.value===null||f.value===void 0||f.value==="";return(x||c.value&&!e.showZero)&&!d.value}),g=q(e.count),y=q(f.value),h=q(d.value);Pe([function(){return e.count},f,d],function(){p.value||(g.value=e.count,y.value=f.value,h.value=d.value)},{immediate:!0});var m=R(function(){var x;return x={},D(x,"".concat(o.value,"-status-dot"),s.value),D(x,"".concat(o.value,"-status-").concat(e.status),!!e.status),D(x,"".concat(o.value,"-status-").concat(e.color),Cl(e.color)),x}),b=R(function(){return e.color&&!Cl(e.color)?{background:e.color}:{}}),C=R(function(){var x;return x={},D(x,"".concat(o.value,"-dot"),h.value),D(x,"".concat(o.value,"-count"),!h.value),D(x,"".concat(o.value,"-count-sm"),e.size==="small"),D(x,"".concat(o.value,"-multiple-words"),!h.value&&y.value&&y.value.toString().length>1),D(x,"".concat(o.value,"-status-").concat(e.status),!!e.status),D(x,"".concat(o.value,"-status-").concat(e.color),Cl(e.color)),x});return function(){var x,S,w,_=e.offset,P=e.title,k=e.color,I=a.style,F=Vn(r,e,"text"),M=o.value,T=g.value,N=Fn((S=r.default)===null||S===void 0?void 0:S.call(r));N=N.length?N:null;var j=!!(!p.value||r.count),$=function(){if(!_)return O({},I);var Y={marginTop:u6(_[1])?"".concat(_[1],"px"):_[1]};return l.value==="rtl"?Y.left="".concat(parseInt(_[0],10),"px"):Y.right="".concat(-parseInt(_[0],10),"px"),O(O({},Y),I)}(),A=P!=null?P:typeof T=="string"||typeof T=="number"?T:void 0,E=j||!F?null:v("span",{class:"".concat(M,"-status-text")},[F]),L=Be(T)==="object"||T===void 0&&r.count?wn(T!=null?T:(w=r.count)===null||w===void 0?void 0:w.call(r),{style:$},!1):null,B=de(M,(x={},D(x,"".concat(M,"-status"),s.value),D(x,"".concat(M,"-not-a-wrapper"),!N),D(x,"".concat(M,"-rtl"),l.value==="rtl"),x),a.class);if(!N&&s.value){var K=$.color;return v("span",W(W({},a),{},{class:B,style:$}),[v("span",{class:m.value,style:b.value},null),v("span",{style:{color:K},class:"".concat(M,"-status-text")},[F])])}var H=ei(N?"".concat(M,"-zoom"):"",{appear:!1}),Z=O(O({},$),e.numberStyle);return k&&!Cl(k)&&(Z=Z||{},Z.background=k),v("span",W(W({},a),{},{class:B}),[N,v(Lt,H,{default:function(){return[St(v(JR,{prefixCls:e.scrollNumberPrefixCls,show:j,class:C.value,count:y.value,title:A,style:Z,key:"scrollNumber"},{default:function(){return[L]}}),[[Ar,j]])]}}),E])}}});Fs.install=function(n){return n.component(Fs.name,Fs),n.component(Fc.name,Fc),n};var eo={adjustX:1,adjustY:1},no=[0,0],a$={topLeft:{points:["bl","tl"],overflow:eo,offset:[0,-4],targetOffset:no},topCenter:{points:["bc","tc"],overflow:eo,offset:[0,-4],targetOffset:no},topRight:{points:["br","tr"],overflow:eo,offset:[0,-4],targetOffset:no},bottomLeft:{points:["tl","bl"],overflow:eo,offset:[0,4],targetOffset:no},bottomCenter:{points:["tc","bc"],overflow:eo,offset:[0,4],targetOffset:no},bottomRight:{points:["tr","br"],overflow:eo,offset:[0,4],targetOffset:no}};const i$=a$;var o$=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};const s6=ae({props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:U.string.def("rc-dropdown"),transitionName:String,overlayClassName:U.string.def(""),openClassName:String,animation:U.any,align:U.object,overlayStyle:{type:Object,default:void 0},placement:U.string.def("bottomLeft"),overlay:U.any,trigger:U.oneOfType([U.string,U.arrayOf(U.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:U.array,hideAction:U.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:U.number.def(.15),mouseLeaveDelay:U.number.def(.1)},emits:["visibleChange","overlayClick"],slots:["overlay"],setup:function(e,t){var r=t.slots,a=t.emit,i=t.expose,o=q(!!e.visible);Pe(function(){return e.visible},function(g){g!==void 0&&(o.value=g)});var l=q();i({triggerRef:l});var u=function(y){e.visible===void 0&&(o.value=!1),a("overlayClick",y)},s=function(y){e.visible===void 0&&(o.value=y),a("visibleChange",y)},c=function(){var y,h=(y=r.overlay)===null||y===void 0?void 0:y.call(r),m={prefixCls:"".concat(e.prefixCls,"-menu"),onClick:u,getPopupContainer:function(){return l.value.getPopupDomNode()}};return v(qe,{key:g4},[e.arrow&&v("div",{class:"".concat(e.prefixCls,"-arrow")},null),wn(h,m,!1)])},d=R(function(){var g=e.minOverlayWidthMatchTrigger,y=g===void 0?!e.alignPoint:g;return y}),f=function(){var y,h=(y=r.default)===null||y===void 0?void 0:y.call(r);return o.value&&h?wn(h[0],{class:e.openClassName||"".concat(e.prefixCls,"-open")},!1):h},p=R(function(){return!e.hideAction&&e.trigger.indexOf("contextmenu")!==-1?["click"]:e.hideAction});return function(){var g=e.prefixCls,y=e.arrow,h=e.showAction,m=e.overlayStyle,b=e.trigger,C=e.placement,x=e.align,S=e.getPopupContainer,w=e.transitionName,_=e.animation,P=e.overlayClassName,k=o$(e,["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"]);return v(Xo,W(W({},k),{},{prefixCls:g,ref:l,popupClassName:de(P,D({},"".concat(g,"-show-arrow"),y)),popupStyle:m,builtinPlacements:i$,action:b,showAction:h,hideAction:p.value||[],popupPlacement:C,popupAlign:x,popupTransitionName:w,popupAnimation:_,popupVisible:o.value,stretch:d.value?"minWidth":"",onPopupVisibleChange:s,getPopupContainer:S}),{popup:c,default:f})}}});var Xf={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},Zf={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},uo=[],so=[];function l$(){var n=document.createElement("div"),e=n.style;"AnimationEvent"in window||(delete Xf.animationstart.animation,delete Zf.animationend.animation),"TransitionEvent"in window||(delete Xf.transitionstart.transition,delete Zf.transitionend.transition);function t(r,a){for(var i in r)if(r.hasOwnProperty(i)){var o=r[i];for(var l in o)if(l in e){a.push(o[l]);break}}}t(Xf,uo),t(Zf,so)}typeof window<"u"&&typeof document<"u"&&l$();function zC(n,e,t){n.addEventListener(e,t,!1)}function HC(n,e,t){n.removeEventListener(e,t,!1)}var u$={startEvents:uo,addStartEventListener:function(e,t){if(uo.length===0){setTimeout(t,0);return}uo.forEach(function(r){zC(e,r,t)})},removeStartEventListener:function(e,t){uo.length!==0&&uo.forEach(function(r){HC(e,r,t)})},endEvents:so,addEndEventListener:function(e,t){if(so.length===0){setTimeout(t,0);return}so.forEach(function(r){zC(e,r,t)})},removeEndEventListener:function(e,t){so.length!==0&&so.forEach(function(r){HC(e,r,t)})}};const os=u$;var Ma;function WC(n){return!n||n.offsetParent===null}function s$(n){var e=(n||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return e&&e[1]&&e[2]&&e[3]?!(e[1]===e[2]&&e[2]===e[3]):!0}const Wm=ae({name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(e,t){var r=t.slots,a=t.expose,i=Jn(),o=Le("",e),l=o.csp,u=o.prefixCls;a({csp:l});var s=null,c=null,d=null,f=!1,p=null,g=!1,y=function(w){if(!g){var _=za(i);!w||w.target!==_||f||C(_)}},h=function(w){!w||w.animationName!=="fadeEffect"||C(w.target)},m=function(){var w=e.insertExtraNode;return w?"".concat(u.value,"-click-animating"):"".concat(u.value,"-click-animating-without-extra-node")},b=function(w,_){var P,k=e.insertExtraNode,I=e.disabled;if(!(I||!w||WC(w)||w.className.indexOf("-leave")>=0)){p=document.createElement("div"),p.className="".concat(u.value,"-click-animating-node");var F=m();w.removeAttribute(F),w.setAttribute(F,"true"),Ma=Ma||document.createElement("style"),_&&_!=="#ffffff"&&_!=="rgb(255, 255, 255)"&&s$(_)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(_)&&_!=="transparent"&&(!((P=l.value)===null||P===void 0)&&P.nonce&&(Ma.nonce=l.value.nonce),p.style.borderColor=_,Ma.innerHTML=`
        [`.concat(u.value,"-click-animating-without-extra-node='true']::after, .").concat(u.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(_,`;
        }`),document.body.contains(Ma)||document.body.appendChild(Ma)),k&&w.appendChild(p),os.addStartEventListener(w,y),os.addEndEventListener(w,h)}},C=function(w){if(!(!w||w===p||!(w instanceof Element))){var _=e.insertExtraNode,P=m();w.setAttribute(P,"false"),Ma&&(Ma.innerHTML=""),_&&p&&w.contains(p)&&w.removeChild(p),os.removeStartEventListener(w,y),os.removeEndEventListener(w,h)}},x=function(w){if(!(!w||!w.getAttribute||w.getAttribute("disabled")||w.className.indexOf("disabled")>=0)){var _=function(k){if(!(k.target.tagName==="INPUT"||WC(k.target))){C(w);var I=getComputedStyle(w).getPropertyValue("border-top-color")||getComputedStyle(w).getPropertyValue("border-color")||getComputedStyle(w).getPropertyValue("background-color");c=setTimeout(function(){return b(w,I)},0),Qe.cancel(d),f=!0,d=Qe(function(){f=!1},10)}};return w.addEventListener("click",_,!0),{cancel:function(){w.removeEventListener("click",_,!0)}}}};return Ye(function(){dn(function(){var S=za(i);S.nodeType===1&&(s=x(S))})}),fn(function(){s&&s.cancel(),clearTimeout(c),g=!0}),function(){var S;return(S=r.default)===null||S===void 0?void 0:S.call(r)[0]}}});function jc(n){return n==="danger"?{danger:!0}:{type:n}}var c$=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:U.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};const c6=c$;var UC=function(e){e&&(e.style.width="0px",e.style.opacity="0",e.style.transform="scale(0)")},qC=function(e){dn(function(){e&&(e.style.width="".concat(e.scrollWidth,"px"),e.style.opacity="1",e.style.transform="scale(1)")})},YC=function(e){e&&e.style&&(e.style.width=null,e.style.opacity=null,e.style.transform=null)};const d$=ae({name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(e){return function(){var t=e.existIcon,r=e.prefixCls,a=e.loading;if(t)return v("span",{class:"".concat(r,"-loading-icon")},[v(Tr,null,null)]);var i=!!a;return v(Lt,{name:"".concat(r,"-loading-icon-motion"),onBeforeEnter:UC,onEnter:qC,onAfterEnter:YC,onBeforeLeave:qC,onLeave:function(l){setTimeout(function(){UC(l)})},onAfterLeave:YC},{default:function(){return[i?v("span",{class:"".concat(r,"-loading-icon")},[v(Tr,null,null)]):null]}})}}});var f$=function(){return{prefixCls:String,size:{type:String}}},d6=e6();const Dc=ae({name:"AButtonGroup",props:f$(),setup:function(e,t){var r=t.slots,a=Le("btn-group",e),i=a.prefixCls,o=a.direction;d6.useProvide({size:R(function(){return e.size})});var l=R(function(){var u,s=e.size,c="";switch(s){case"large":c="lg";break;case"small":c="sm";break;case"middle":case void 0:break;default:On(!s,"Button.Group","Invalid prop `size`.")}return u={},D(u,"".concat(i.value),!0),D(u,"".concat(i.value,"-").concat(c),c),D(u,"".concat(i.value,"-rtl"),o.value==="rtl"),u});return function(){var u;return v("div",{class:l.value},[Fn((u=r.default)===null||u===void 0?void 0:u.call(r))])}}});var GC=/^[\u4e00-\u9fa5]{2}$/,XC=GC.test.bind(GC);function ls(n){return n==="text"||n==="link"}const ct=ae({name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:vn(c6(),{type:"default"}),slots:["icon"],setup:function(e,t){var r=t.slots,a=t.attrs,i=t.emit,o=Le("btn",e),l=o.prefixCls,u=o.autoInsertSpaceInButton,s=o.direction,c=o.size,d=d6.useInject(),f=d.size,p=q(null),g=q(void 0),y=!1,h=q(!1),m=q(!1),b=R(function(){return u.value!==!1}),C=R(function(){return Be(e.loading)==="object"&&e.loading.delay?e.loading.delay||!0:!!e.loading});Pe(C,function(P){clearTimeout(g.value),typeof C.value=="number"?g.value=setTimeout(function(){h.value=P},C.value):h.value=P},{immediate:!0});var x=R(function(){var P,k=e.type,I=e.shape,F=I===void 0?"default":I,M=e.ghost,T=e.block,N=e.danger,j=l.value,$={large:"lg",small:"sm",middle:void 0},A=(f==null?void 0:f.value)||c.value,E=A&&$[A]||"";return P={},D(P,"".concat(j),!0),D(P,"".concat(j,"-").concat(k),k),D(P,"".concat(j,"-").concat(F),F!=="default"&&F),D(P,"".concat(j,"-").concat(E),E),D(P,"".concat(j,"-loading"),h.value),D(P,"".concat(j,"-background-ghost"),M&&!ls(k)),D(P,"".concat(j,"-two-chinese-chars"),m.value&&b.value),D(P,"".concat(j,"-block"),T),D(P,"".concat(j,"-dangerous"),!!N),D(P,"".concat(j,"-rtl"),s.value==="rtl"),P}),S=function(){var k=p.value;if(!(!k||u.value===!1)){var I=k.textContent;y&&XC(I)?m.value||(m.value=!0):m.value&&(m.value=!1)}},w=function(k){if(h.value||e.disabled){k.preventDefault();return}i("click",k)},_=function(k,I){var F=I?" ":"";if(k.type===Ki){var M=k.children.trim();return XC(M)&&(M=M.split("").join(F)),v("span",null,[M])}return k};return Ze(function(){On(!(e.ghost&&ls(e.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),Ye(S),Nt(S),fn(function(){g.value&&clearTimeout(g.value)}),function(){var P,k,I=e.icon,F=I===void 0?(P=r.icon)===null||P===void 0?void 0:P.call(r):I,M=Fn((k=r.default)===null||k===void 0?void 0:k.call(r));y=M.length===1&&!F&&!ls(e.type);var T=e.type,N=e.htmlType,j=e.disabled,$=e.href,A=e.title,E=e.target,L=e.onMousedown,B=h.value?"loading":F,K=O(O({},a),{title:A,disabled:j,class:[x.value,a.class,D({},"".concat(l.value,"-icon-only"),M.length===0&&!!B)],onClick:w,onMousedown:L});j||delete K.disabled;var H=F&&!h.value?F:v(d$,{existIcon:!!F,prefixCls:l.value,loading:!!h.value},null),Z=M.map(function(G){return _(G,y&&b.value)});if($!==void 0)return v("a",W(W({},K),{},{href:$,target:E,ref:p}),[H,Z]);var Y=v("button",W(W({},K),{},{ref:p,type:N}),[H,Z]);return ls(T)?Y:v(Wm,{ref:"wave",disabled:!!h.value},{default:function(){return[Y]}})}}});ct.Group=Dc;ct.install=function(n){return n.component(ct.name,ct),n.component(Dc.name,Dc),n};var f6=function(){return{arrow:{type:[Boolean,Object],default:void 0},trigger:{type:[Array,String]},overlay:U.any,visible:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},align:{type:Object},getPopupContainer:Function,prefixCls:String,transitionName:String,placement:String,overlayClassName:String,overlayStyle:{type:Object,default:void 0},forceRender:{type:Boolean,default:void 0},mouseEnterDelay:Number,mouseLeaveDelay:Number,openClassName:String,minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},destroyPopupOnHide:{type:Boolean,default:void 0},onVisibleChange:{type:Function},"onUpdate:visible":{type:Function}}},Qf=c6(),v$=function(){return O(O({},f6()),{type:Qf.type,size:String,htmlType:Qf.htmlType,href:String,disabled:{type:Boolean,default:void 0},prefixCls:String,icon:U.any,title:String,loading:Qf.loading,onClick:{type:Function}})},p$=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},h$=ct.Group;const cu=ae({name:"ADropdownButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:vn(v$(),{trigger:"hover",placement:"bottomRight",type:"default"}),slots:["icon","leftButton","rightButton","overlay"],setup:function(e,t){var r=t.slots,a=t.attrs,i=t.emit,o=function(f){i("update:visible",f),i("visibleChange",f)},l=Le("dropdown-button",e),u=l.prefixCls,s=l.direction,c=l.getPopupContainer;return function(){var d,f,p=O(O({},e),a),g=p.type,y=g===void 0?"default":g,h=p.disabled,m=p.loading,b=p.htmlType,C=p.class,x=C===void 0?"":C,S=p.overlay,w=S===void 0?(d=r.overlay)===null||d===void 0?void 0:d.call(r):S,_=p.trigger,P=p.align,k=p.visible;p.onVisibleChange;var I=p.placement,F=I===void 0?s.value==="rtl"?"bottomLeft":"bottomRight":I,M=p.href,T=p.title,N=p.icon,j=N===void 0?((f=r.icon)===null||f===void 0?void 0:f.call(r))||v(mg,null,null):N,$=p.mouseEnterDelay,A=p.mouseLeaveDelay,E=p.overlayClassName,L=p.overlayStyle,B=p.destroyPopupOnHide,K=p.onClick;p["onUpdate:visible"];var H=p$(p,["type","disabled","loading","htmlType","class","overlay","trigger","align","visible","onVisibleChange","placement","href","title","icon","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","onClick","onUpdate:visible"]),Z={align:P,disabled:h,trigger:h?[]:_,placement:F,getPopupContainer:c.value,onVisibleChange:o,mouseEnterDelay:$,mouseLeaveDelay:A,visible:k,overlayClassName:E,overlayStyle:L,destroyPopupOnHide:B},Y=v(ct,{type:y,disabled:h,loading:m,onClick:K,htmlType:b,href:M,title:T},{default:r.default}),G=v(ct,{type:y,icon:j},null);return v(h$,W(W({},H),{},{class:de(u.value,x)}),{default:function(){return[r.leftButton?r.leftButton({button:Y}):Y,v(Gr,Z,{default:function(){return[r.rightButton?r.rightButton({button:G}):G]},overlay:function(){return w}})]}})}}});var v6=ae({name:"ADropdown",inheritAttrs:!1,props:vn(f6(),{mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft",trigger:"hover"}),slots:["overlay"],setup:function(e,t){var r=t.slots,a=t.attrs,i=t.emit,o=Le("dropdown",e),l=o.prefixCls,u=o.rootPrefixCls,s=o.direction,c=o.getPopupContainer,d=R(function(){var y=e.placement,h=y===void 0?"":y,m=e.transitionName;return m!==void 0?m:h.indexOf("top")>=0?"".concat(u.value,"-slide-down"):"".concat(u.value,"-slide-up")}),f=function(){var h,m,b,C=e.overlay||((h=r.overlay)===null||h===void 0?void 0:h.call(r)),x=Array.isArray(C)?C[0]:C;if(!x)return null;var S=x.props||{};On(!S.mode||S.mode==="vertical","Dropdown",'mode="'.concat(S.mode,`" is not supported for Dropdown's Menu.`));var w=S.selectable,_=w===void 0?!1:w,P=S.expandIcon,k=P===void 0?(b=(m=x.children)===null||m===void 0?void 0:m.expandIcon)===null||b===void 0?void 0:b.call(m):P,I=typeof k<"u"&&at(k)?k:v("span",{class:"".concat(l.value,"-menu-submenu-arrow")},[v(wa,{class:"".concat(l.value,"-menu-submenu-arrow-icon")},null)]),F=at(x)?wn(x,{mode:"vertical",selectable:_,expandIcon:function(){return I}}):x;return F},p=R(function(){var y=e.placement;if(!y)return s.value==="rtl"?"bottomRight":"bottomLeft";if(y.includes("Center")){var h=y.slice(0,y.indexOf("Center"));return On(!y.includes("Center"),"Dropdown","You are using '".concat(y,"' placement in Dropdown, which is deprecated. Try to use '").concat(h,"' instead.")),h}return y}),g=function(h){i("update:visible",h),i("visibleChange",h)};return function(){var y,h,m=e.arrow,b=e.trigger,C=e.disabled,x=e.overlayClassName,S=(y=r.default)===null||y===void 0?void 0:y.call(r)[0],w=wn(S,O({class:de((h=S==null?void 0:S.props)===null||h===void 0?void 0:h.class,D({},"".concat(l.value,"-rtl"),s.value==="rtl"),"".concat(l.value,"-trigger"))},C?{disabled:C}:{})),_=de(x,D({},"".concat(l.value,"-rtl"),s.value==="rtl")),P=C?[]:b,k;P&&P.indexOf("contextmenu")!==-1&&(k=!0);var I=a6({arrowPointAtCenter:Be(m)==="object"&&m.pointAtCenter,autoAdjustOverflow:!0}),F=un(O(O(O({},e),a),{builtinPlacements:I,overlayClassName:_,arrow:!!m,alignPoint:k,prefixCls:l.value,getPopupContainer:c.value,transitionName:d.value,trigger:P,onVisibleChange:g,placement:p.value}),["overlay","onUpdate:visible"]);return v(s6,F,{default:function(){return[w]},overlay:f})}}});v6.Button=cu;const Gr=v6;var g$=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},m$=function(){return{prefixCls:String,href:String,separator:U.any,overlay:U.any,onClick:Function}};const du=ae({name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:m$(),slots:["separator","overlay"],setup:function(e,t){var r=t.slots,a=t.attrs,i=Le("breadcrumb",e),o=i.prefixCls,l=function(s,c){var d=Vn(r,e,"overlay");return d?v(Gr,{overlay:d,placement:"bottom"},{default:function(){return[v("span",{class:"".concat(c,"-overlay-link")},[s,v(xu,null,null)])]}}):s};return function(){var u,s=(u=Vn(r,e,"separator"))!==null&&u!==void 0?u:"/",c=Vn(r,e),d=a.class,f=a.style,p=g$(a,["class","style"]),g;return e.href!==void 0?g=v("a",W({class:"".concat(o.value,"-link"),onClick:e.onClick},p),[c]):g=v("span",W({class:"".concat(o.value,"-link"),onClick:e.onClick},p),[c]),g=l(g,o.value),c?v("li",{class:d,style:f},[g,s&&v("span",{class:"".concat(o.value,"-separator")},[s])]):null}}});function p6(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=_d(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var r=0,a=function(){};return{s:a,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(s){throw s},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,o=!1,l;return{s:function(){t=t.call(n)},n:function(){var s=t.next();return i=s.done,s},e:function(s){o=!0,l=s},f:function(){try{!i&&t.return!=null&&t.return()}finally{if(o)throw l}}}}function y$(n,e,t,r){var a=t?t.call(r,n,e):void 0;if(a!==void 0)return!!a;if(n===e)return!0;if(Be(n)!=="object"||!n||Be(e)!=="object"||!e)return!1;var i=Object.keys(n),o=Object.keys(e);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(e),u=0;u<i.length;u++){var s=i[u];if(!l(s))return!1;var c=n[s],d=e[s];if(a=t?t.call(r,c,d,s):void 0,a===!1||a===void 0&&c!==d)return!1}return!0}function co(n,e,t,r){return y$(an(n),an(e),t,r)}var h6=Symbol("menuContextKey"),g6=function(e){ln(h6,e)},ti=function(){return on(h6)},m6=Symbol("ForceRenderKey"),b$=function(e){ln(m6,e)},y6=function(){return on(m6,!1)},b6=Symbol("menuFirstLevelContextKey"),C6=function(e){ln(b6,e)},C$=function(){return on(b6,!0)},Lc=ae({name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0},isRootMenu:{type:Boolean,default:void 0}},setup:function(e,t){var r=t.slots,a=ti(),i=O({},a);return e.mode!==void 0&&(i.mode=We(e,"mode")),e.isRootMenu!==void 0&&(i.isRootMenu=We(e,"isRootMenu")),e.overflowDisabled!==void 0&&(i.overflowDisabled=We(e,"overflowDisabled")),g6(i),function(){var o;return(o=r.default)===null||o===void 0?void 0:o.call(r)}}});const x$=g6;function x6(n,e,t,r){for(var a=n.length,i=t+(r?1:-1);r?i--:++i<a;)if(e(n[i],i,n))return i;return-1}function w$(n){return n!==n}function S$(n,e,t){for(var r=t-1,a=n.length;++r<a;)if(n[r]===e)return r;return-1}function _$(n,e,t){return e===e?S$(n,e,t):x6(n,w$,t)}function w6(n,e){var t=n==null?0:n.length;return!!t&&_$(n,e,0)>-1}function S6(n,e,t){for(var r=-1,a=n==null?0:n.length;++r<a;)if(t(e,n[r]))return!0;return!1}function k$(){}var P$=1/0,O$=_o&&1/km(new _o([,-0]))[1]==P$?function(n){return new _o(n)}:k$;const T$=O$;var N$=200;function I$(n,e,t){var r=-1,a=w6,i=n.length,o=!0,l=[],u=l;if(t)o=!1,a=S6;else if(i>=N$){var s=e?null:T$(n);if(s)return km(s);o=!1,a=Sc,u=new jo}else u=e?[]:l;e:for(;++r<i;){var c=n[r],d=e?e(c):c;if(c=t||c!==0?c:0,o&&d===d){for(var f=u.length;f--;)if(u[f]===d)continue e;e&&u.push(d),l.push(c)}else a(u,d,t)||(u!==l&&u.push(d),l.push(c))}return l}function Jf(n){return n&&n.length?I$(n):[]}var _6=Symbol("siderCollapsed"),k6=Symbol("siderHookProvider"),us="$$__vc-menu-more__key",P6=Symbol("KeyPathContext"),Um=function(){return on(P6,{parentEventKeys:R(function(){return[]}),parentKeys:R(function(){return[]}),parentInfo:{}})},E$=function(e,t,r){var a=Um(),i=a.parentEventKeys,o=a.parentKeys,l=R(function(){return[].concat(Ee(i.value),[e])}),u=R(function(){return[].concat(Ee(o.value),[t])});return ln(P6,{parentEventKeys:l,parentKeys:u,parentInfo:r}),u},O6=Symbol("measure"),ZC=ae({setup:function(e,t){var r=t.slots;return ln(O6,!0),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}}),qm=function(){return on(O6,!1)};const M$=E$;function T6(n){var e=ti(),t=e.mode,r=e.rtl,a=e.inlineIndent;return R(function(){return t.value!=="inline"?null:r.value?{paddingRight:"".concat(n.value*a.value,"px")}:{paddingLeft:"".concat(n.value*a.value,"px")}})}var A$=0,F$=function(){return{id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:U.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function}};const Xr=ae({name:"AMenuItem",inheritAttrs:!1,props:F$(),slots:["icon","title"],setup:function(e,t){var r=t.slots,a=t.emit,i=t.attrs,o=Jn(),l=qm(),u=Be(o.vnode.key)==="symbol"?String(o.vnode.key):o.vnode.key;On(Be(o.vnode.key)!=="symbol","MenuItem",'MenuItem `:key="'.concat(String(u),'"` not support Symbol type'));var s="menu_item_".concat(++A$,"_$$_").concat(u),c=Um(),d=c.parentEventKeys,f=c.parentKeys,p=ti(),g=p.prefixCls,y=p.activeKeys,h=p.disabled,m=p.changeActiveKeys,b=p.rtl,C=p.inlineCollapsed,x=p.siderCollapsed,S=p.onItemClick,w=p.selectedKeys,_=p.registerMenuInfo,P=p.unRegisterMenuInfo,k=C$(),I=q(!1),F=R(function(){return[].concat(Ee(f.value),[u])}),M={eventKey:s,key:u,parentEventKeys:d,parentKeys:f,isLeaf:!0};_(s,M),fn(function(){P(s)}),Pe(y,function(){I.value=!!y.value.find(function(Y){return Y===u})},{immediate:!0});var T=R(function(){return h.value||e.disabled}),N=R(function(){return w.value.includes(u)}),j=R(function(){var Y,G="".concat(g.value,"-item");return Y={},D(Y,"".concat(G),!0),D(Y,"".concat(G,"-danger"),e.danger),D(Y,"".concat(G,"-active"),I.value),D(Y,"".concat(G,"-selected"),N.value),D(Y,"".concat(G,"-disabled"),T.value),Y}),$=function(G){return{key:u,eventKey:s,keyPath:F.value,eventKeyPath:[].concat(Ee(d.value),[s]),domEvent:G,item:O(O({},e),i)}},A=function(G){if(!T.value){var Q=$(G);a("click",G),S(Q)}},E=function(G){T.value||(m(F.value),a("mouseenter",G))},L=function(G){T.value||(m([]),a("mouseleave",G))},B=function(G){if(a("keydown",G),G.which===Ne.ENTER){var Q=$(G);a("click",G),S(Q)}},K=function(G){m(F.value),a("focus",G)},H=function(G,Q){var z=v("span",{class:"".concat(g.value,"-title-content")},[Q]);return(!G||at(Q)&&Q.type==="span")&&Q&&C.value&&k&&typeof Q=="string"?v("div",{class:"".concat(g.value,"-inline-collapsed-noicon")},[Q.charAt(0)]):z},Z=T6(R(function(){return F.value.length}));return function(){var Y,G,Q,z;if(l)return null;var J=(G=e.title)!==null&&G!==void 0?G:(Q=r.title)===null||Q===void 0?void 0:Q.call(r),ne=Fn((z=r.default)===null||z===void 0?void 0:z.call(r)),oe=ne.length,ce=J;typeof J>"u"?ce=k&&oe?ne:"":J===!1&&(ce="");var se={title:ce};!x.value&&!C.value&&(se.title=null,se.visible=!1);var V={};e.role==="option"&&(V["aria-selected"]=N.value);var X=Vn(r,e,"icon");return v(Or,W(W({},se),{},{placement:b.value?"left":"right",overlayClassName:"".concat(g.value,"-inline-collapsed-tooltip")}),{default:function(){return[v(ko.Item,W(W(W({component:"li"},i),{},{id:e.id,style:O(O({},i.style||{}),Z.value),class:[j.value,(Y={},D(Y,"".concat(i.class),!!i.class),D(Y,"".concat(g.value,"-item-only-child"),(X?oe+1:oe)===1),Y)],role:e.role||"menuitem",tabindex:e.disabled?null:-1,"data-menu-id":u,"aria-disabled":e.disabled},V),{},{onMouseenter:E,onMouseleave:L,onClick:A,onKeydown:B,onFocus:K,title:typeof J=="string"?J:void 0}),{default:function(){return[wn(X,{class:"".concat(g.value,"-item-icon")},!1),H(X,ne)]}})]}})}}});var Ha={adjustX:1,adjustY:1},j$={topLeft:{points:["bl","tl"],overflow:Ha,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ha,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Ha,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Ha,offset:[4,0]}},D$={topLeft:{points:["bl","tl"],overflow:Ha,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ha,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Ha,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Ha,offset:[4,0]}},L$={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};const QC=ae({name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:["popup"],emits:["visibleChange"],setup:function(e,t){var r=t.slots,a=t.emit,i=q(!1),o=ti(),l=o.getPopupContainer,u=o.rtl,s=o.subMenuOpenDelay,c=o.subMenuCloseDelay,d=o.builtinPlacements,f=o.triggerSubMenuAction,p=o.isRootMenu,g=o.forceSubMenuRender,y=o.motion,h=o.defaultMotions,m=o.rootClassName,b=y6(),C=R(function(){return u.value?O(O({},D$),d.value):O(O({},j$),d.value)}),x=R(function(){return L$[e.mode]}),S=q();Pe(function(){return e.visible},function(P){Qe.cancel(S.value),S.value=Qe(function(){i.value=P})},{immediate:!0}),fn(function(){Qe.cancel(S.value)});var w=function(k){a("visibleChange",k)},_=R(function(){var P,k,I=y.value||((P=h.value)===null||P===void 0?void 0:P[e.mode])||((k=h.value)===null||k===void 0?void 0:k.other),F=typeof I=="function"?I():I;return F?ei(F.name,{css:!0}):void 0});return function(){var P=e.prefixCls,k=e.popupClassName,I=e.mode,F=e.popupOffset,M=e.disabled;return v(Xo,{prefixCls:P,popupClassName:de("".concat(P,"-popup"),D({},"".concat(P,"-rtl"),u.value),k,m.value),stretch:I==="horizontal"?"minWidth":null,getPopupContainer:p.value?l.value:function(T){return T.parentNode},builtinPlacements:C.value,popupPlacement:x.value,popupVisible:i.value,popupAlign:F&&{offset:F},action:M?[]:[f.value],mouseEnterDelay:s.value,mouseLeaveDelay:c.value,onPopupVisibleChange:w,forceRender:b||g.value,popupAnimation:_.value},{popup:r.popup,default:r.default})}}});var N6=function(e,t){var r=t.slots,a=t.attrs,i,o=ti(),l=o.prefixCls,u=o.mode;return v("ul",W(W({},a),{},{class:de(l.value,"".concat(l.value,"-sub"),"".concat(l.value,"-").concat(u.value==="inline"?"inline":"vertical")),"data-menu-list":!0}),[(i=r.default)===null||i===void 0?void 0:i.call(r)])};N6.displayName="SubMenuList";const I6=N6,R$=ae({name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup:function(e,t){var r=t.slots,a=R(function(){return"inline"}),i=ti(),o=i.motion,l=i.mode,u=i.defaultMotions,s=R(function(){return l.value===a.value}),c=q(!s.value),d=R(function(){return s.value?e.open:!1});Pe(l,function(){s.value&&(c.value=!1)},{flush:"post"});var f=R(function(){var p,g,y=o.value||((p=u.value)===null||p===void 0?void 0:p[a.value])||((g=u.value)===null||g===void 0?void 0:g.other),h=typeof y=="function"?y():y;return O(O({},h),{appear:e.keyPath.length<=1})});return function(){var p;return c.value?null:v(Lc,{mode:a.value},{default:function(){return[v(Lt,f.value,{default:function(){return[St(v(I6,{id:e.id},{default:function(){return[(p=r.default)===null||p===void 0?void 0:p.call(r)]}}),[[Ar,d.value]])]}})]}})}}});var JC=0,$$=function(){return{icon:U.any,title:U.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,theme:String,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function}};const Bi=ae({name:"ASubMenu",inheritAttrs:!1,props:$$(),slots:["icon","title","expandIcon"],setup:function(e,t){var r=t.slots,a=t.attrs,i=t.emit,o,l;C6(!1);var u=qm(),s=Jn(),c=Be(s.vnode.key)==="symbol"?String(s.vnode.key):s.vnode.key;On(Be(s.vnode.key)!=="symbol","SubMenu",'SubMenu `:key="'.concat(String(c),'"` not support Symbol type'));var d=cp(c)?c:"sub_menu_".concat(++JC,"_$$_not_set_key"),f=(o=e.eventKey)!==null&&o!==void 0?o:cp(c)?"sub_menu_".concat(++JC,"_$$_").concat(c):d,p=Um(),g=p.parentEventKeys,y=p.parentInfo,h=p.parentKeys,m=R(function(){return[].concat(Ee(h.value),[d])}),b=q([]),C={eventKey:f,key:d,parentEventKeys:g,childrenEventKeys:b,parentKeys:h};(l=y.childrenEventKeys)===null||l===void 0||l.value.push(f),fn(function(){var te;y.childrenEventKeys&&(y.childrenEventKeys.value=(te=y.childrenEventKeys)===null||te===void 0?void 0:te.value.filter(function(he){return he!=f}))}),M$(f,d,C);var x=ti(),S=x.prefixCls,w=x.activeKeys,_=x.disabled,P=x.changeActiveKeys,k=x.mode,I=x.inlineCollapsed,F=x.antdMenuTheme,M=x.openKeys,T=x.overflowDisabled,N=x.onOpenChange,j=x.registerMenuInfo,$=x.unRegisterMenuInfo,A=x.selectedSubMenuKeys,E=x.expandIcon,L=c!=null,B=!u&&(y6()||!L);b$(B),(u&&L||!u&&!L||B)&&(j(f,C),fn(function(){$(f)}));var K=R(function(){return"".concat(S.value,"-submenu")}),H=R(function(){return _.value||e.disabled}),Z=q(),Y=q(),G=R(function(){return M.value.includes(d)}),Q=R(function(){return!T.value&&G.value}),z=R(function(){return A.value.includes(d)}),J=q(!1);Pe(w,function(){J.value=!!w.value.find(function(te){return te===d})},{immediate:!0});var ne=function(he){H.value||(i("titleClick",he,d),k.value==="inline"&&N(d,!G.value))},oe=function(he){H.value||(P(m.value),i("mouseenter",he))},ce=function(he){H.value||(P([]),i("mouseleave",he))},se=T6(R(function(){return m.value.length})),V=function(he){k.value!=="inline"&&N(d,he)},X=function(){P(m.value)},ee=f&&"".concat(f,"-popup"),ue=R(function(){return de(S.value,"".concat(S.value,"-").concat(e.theme||F.value),e.popupClassName)}),ie=function(he,ye){if(!ye)return I.value&&!h.value.length&&he&&typeof he=="string"?v("div",{class:"".concat(S.value,"-inline-collapsed-noicon")},[he.charAt(0)]):v("span",{class:"".concat(S.value,"-title-content")},[he]);var _e=at(he)&&he.type==="span";return v(qe,null,[wn(ye,{class:"".concat(S.value,"-item-icon")},!1),_e?he:v("span",{class:"".concat(S.value,"-title-content")},[he])])},ge=R(function(){return k.value!=="inline"&&m.value.length>1?"vertical":k.value}),fe=R(function(){return k.value==="horizontal"?"vertical":k.value}),re=R(function(){return ge.value==="horizontal"?"vertical":ge.value}),le=function(){var he=K.value,ye=Vn(r,e,"icon"),_e=e.expandIcon||r.expandIcon||E.value,Me=ie(Vn(r,e,"title"),ye);return v("div",{style:se.value,class:"".concat(he,"-title"),tabindex:H.value?null:-1,ref:Z,title:typeof Me=="string"?Me:null,"data-menu-id":d,"aria-expanded":Q.value,"aria-haspopup":!0,"aria-controls":ee,"aria-disabled":H.value,onClick:ne,onFocus:X},[Me,k.value!=="horizontal"&&_e?_e(O(O({},e),{isOpen:Q.value})):v("i",{class:"".concat(he,"-arrow")},null)])};return function(){var te,he;if(u)return L?(he=r.default)===null||he===void 0?void 0:he.call(r):null;var ye=K.value,_e=function(){return null};return!T.value&&k.value!=="inline"?_e=function(){return v(QC,{mode:ge.value,prefixCls:ye,visible:!e.internalPopupClose&&Q.value,popupClassName:ue.value,popupOffset:e.popupOffset,disabled:H.value,onVisibleChange:V},{default:function(){return[le()]},popup:function(){return v(Lc,{mode:re.value,isRootMenu:!1},{default:function(){return[v(I6,{id:ee,ref:Y},{default:r.default})]}})}})}:_e=function(){return v(QC,null,{default:le})},v(Lc,{mode:fe.value},{default:function(){return[v(ko.Item,W(W({component:"li"},a),{},{role:"none",class:de(ye,"".concat(ye,"-").concat(k.value),a.class,(te={},D(te,"".concat(ye,"-open"),Q.value),D(te,"".concat(ye,"-active"),J.value),D(te,"".concat(ye,"-selected"),z.value),D(te,"".concat(ye,"-disabled"),H.value),te)),onMouseenter:oe,onMouseleave:ce,"data-submenu-id":d}),{default:function(){return v(qe,null,[_e(),!T.value&&v(R$,{id:ee,open:Q.value,keyPath:m.value},{default:r.default})])}})]}})}}});function E6(n,e){if(n.classList)return n.classList.contains(e);var t=n.className;return" ".concat(t," ").indexOf(" ".concat(e," "))>-1}function ex(n,e){n.classList?n.classList.add(e):E6(n,e)||(n.className="".concat(n.className," ").concat(e))}function nx(n,e){if(n.classList)n.classList.remove(e);else if(E6(n,e)){var t=n.className;n.className=" ".concat(t," ").replace(" ".concat(e," ")," ")}}var B$=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant-motion-collapse",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{name:e,appear:t,css:!0,onBeforeEnter:function(a){a.style.height="0px",a.style.opacity="0",ex(a,e)},onEnter:function(a){dn(function(){a.style.height="".concat(a.scrollHeight,"px"),a.style.opacity="1"})},onAfterEnter:function(a){a&&(nx(a,e),a.style.height=null,a.style.opacity=null)},onBeforeLeave:function(a){ex(a,e),a.style.height="".concat(a.offsetHeight,"px"),a.style.opacity=null},onLeave:function(a){setTimeout(function(){a.style.height="0px",a.style.opacity="0"})},onAfterLeave:function(a){a&&(nx(a,e),a.style&&(a.style.height=null,a.style.opacity=null))}}};const Nu=B$;var V$=function(){return{title:U.any}};const fu=ae({name:"AMenuItemGroup",inheritAttrs:!1,props:V$(),slots:["title"],setup:function(e,t){var r=t.slots,a=t.attrs,i=ti(),o=i.prefixCls,l=R(function(){return"".concat(o.value,"-item-group")}),u=qm();return function(){var s,c;return u?(s=r.default)===null||s===void 0?void 0:s.call(r):v("li",W(W({},a),{},{onClick:function(f){return f.stopPropagation()},class:l.value}),[v("div",{title:typeof e.title=="string"?e.title:void 0,class:"".concat(l.value,"-title")},[Vn(r,e,"title")]),v("ul",{class:"".concat(l.value,"-list")},[(c=r.default)===null||c===void 0?void 0:c.call(r)])])}}});var K$=function(){return{prefixCls:String,dashed:Boolean}};const vu=ae({name:"AMenuDivider",props:K$(),setup:function(e){var t=Le("menu",e),r=t.prefixCls,a=R(function(){var i;return i={},D(i,"".concat(r.value,"-item-divider"),!0),D(i,"".concat(r.value,"-item-divider-dashed"),!!e.dashed),i});return function(){return v("li",{class:a.value},null)}}});var z$=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function Ep(n,e,t){return(n||[]).map(function(r,a){if(r&&Be(r)==="object"){var i=r,o=i.label,l=i.children,u=i.key,s=i.type,c=z$(i,["label","children","key","type"]),d=u!=null?u:"tmp-".concat(a),f=t?t.parentKeys.slice():[],p=[],g={eventKey:d,key:d,parentEventKeys:q(f),parentKeys:q(f),childrenEventKeys:q(p),isLeaf:!1};if(l||s==="group"){if(s==="group"){var y=Ep(l,e,t);return v(fu,W(W({key:d},c),{},{title:o}),{default:function(){return[y]}})}e.set(d,g),t&&t.childrenEventKeys.push(d);var h=Ep(l,e,{childrenEventKeys:p,parentKeys:[].concat(f,d)});return v(Bi,W(W({key:d},c),{},{title:o}),{default:function(){return[h]}})}return s==="divider"?v(vu,W({key:d},c),null):(g.isLeaf=!0,e.set(d,g),v(Xr,W({key:d},c),{default:function(){return[o]}}))}return null}).filter(function(r){return r})}function H$(n){var e=cn([]),t=q(!1),r=cn(new Map);return Pe(function(){return n.items},function(){var a=new Map;t.value=!1,n.items?(t.value=!0,e.value=Ep(n.items,a)):e.value=void 0,r.value=a},{immediate:!0,deep:!0}),{itemsNodes:e,store:r,hasItmes:t}}var W$=function(){return{id:String,prefixCls:String,items:Array,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},motion:Object,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:.1},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}},tx=[];const Yn=ae({name:"AMenu",inheritAttrs:!1,props:W$(),slots:["expandIcon","overflowedIndicator"],setup:function(e,t){var r=t.slots,a=t.emit,i=t.attrs,o=Le("menu",e),l=o.prefixCls,u=o.direction,s=o.getPrefixCls,c=cn(new Map),d=on(_6,q(void 0)),f=R(function(){return d.value!==void 0?d.value:e.inlineCollapsed}),p=H$(e),g=p.itemsNodes,y=q(!1);Ye(function(){y.value=!0}),Ze(function(){On(!(e.inlineCollapsed===!0&&e.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),On(!(d.value!==void 0&&e.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});var h=q([]),m=q([]),b=q({});Pe(c,function(){var Q={},z=p6(c.value.values()),J;try{for(z.s();!(J=z.n()).done;){var ne=J.value;Q[ne.key]=ne}}catch(oe){z.e(oe)}finally{z.f()}b.value=Q},{flush:"post"}),Ze(function(){if(e.activeKey!==void 0){var Q=[],z=e.activeKey?b.value[e.activeKey]:void 0;z&&e.activeKey!==void 0?Q=Jf([].concat(Xe(z.parentKeys),e.activeKey)):Q=[],co(h.value,Q)||(h.value=Q)}}),Pe(function(){return e.selectedKeys},function(Q){Q&&(m.value=Q.slice())},{immediate:!0,deep:!0});var C=q([]);Pe([b,m],function(){var Q=[];m.value.forEach(function(z){var J=b.value[z];J&&(Q=Q.concat(Xe(J.parentKeys)))}),Q=Jf(Q),co(C.value,Q)||(C.value=Q)},{immediate:!0});var x=function(z){if(!!e.selectable){var J=z.key,ne=m.value.includes(J),oe;e.multiple?ne?oe=m.value.filter(function(se){return se!==J}):oe=[].concat(Ee(m.value),[J]):oe=[J];var ce=O(O({},z),{selectedKeys:oe});co(oe,m.value)||(e.selectedKeys===void 0&&(m.value=oe),a("update:selectedKeys",oe),ne&&e.multiple?a("deselect",ce):a("select",ce)),I.value!=="inline"&&!e.multiple&&S.value.length&&T(tx)}},S=q([]);Pe(function(){return e.openKeys},function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:S.value;co(S.value,Q)||(S.value=Q.slice())},{immediate:!0,deep:!0});var w,_=function(z){clearTimeout(w),w=setTimeout(function(){e.activeKey===void 0&&(h.value=z),a("update:activeKey",z[z.length-1])})},P=R(function(){return!!e.disabled}),k=R(function(){return u.value==="rtl"}),I=q("vertical"),F=q(!1);Ze(function(){(e.mode==="inline"||e.mode==="vertical")&&f.value?(I.value="vertical",F.value=f.value):(I.value=e.mode,F.value=!1)});var M=R(function(){return I.value==="inline"}),T=function(z){S.value=z,a("update:openKeys",z),a("openChange",z)},N=q(S.value),j=q(!1);Pe(S,function(){M.value&&(N.value=S.value)},{immediate:!0}),Pe(M,function(){if(!j.value){j.value=!0;return}M.value?S.value=N.value:T(tx)},{immediate:!0});var $=R(function(){var Q;return Q={},D(Q,"".concat(l.value),!0),D(Q,"".concat(l.value,"-root"),!0),D(Q,"".concat(l.value,"-").concat(I.value),!0),D(Q,"".concat(l.value,"-inline-collapsed"),F.value),D(Q,"".concat(l.value,"-rtl"),k.value),D(Q,"".concat(l.value,"-").concat(e.theme),!0),Q}),A=R(function(){return s()}),E=R(function(){return{horizontal:{name:"".concat(A.value,"-slide-up")},inline:Nu,other:{name:"".concat(A.value,"-zoom-big")}}});C6(!0);var L=function Q(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],J=[],ne=c.value;return z.forEach(function(oe){var ce=ne.get(oe),se=ce.key,V=ce.childrenEventKeys;J.push.apply(J,[se].concat(Ee(Q(Xe(V)))))}),J},B=function(z){a("click",z),x(z)},K=function(z,J){var ne=b.value[z].childrenEventKeys,oe=S.value.filter(function(se){return se!==z});if(J)oe.push(z);else if(I.value!=="inline"){var ce=L(Xe(ne));oe=Jf(oe.filter(function(se){return!ce.includes(se)}))}co(S,oe)||T(oe)},H=function(z,J){c.value.set(z,J),c.value=new Map(c.value)},Z=function(z){c.value.delete(z),c.value=new Map(c.value)},Y=q(0),G=R(function(){return e.expandIcon||r.expandIcon?function(Q){var z=e.expandIcon||r.expandIcon;return z=typeof z=="function"?z(Q):z,wn(z,{class:"".concat(l.value,"-submenu-expand-icon")},!1)}:null});return x$({prefixCls:l,activeKeys:h,openKeys:S,selectedKeys:m,changeActiveKeys:_,disabled:P,rtl:k,mode:I,inlineIndent:R(function(){return e.inlineIndent}),subMenuCloseDelay:R(function(){return e.subMenuCloseDelay}),subMenuOpenDelay:R(function(){return e.subMenuOpenDelay}),builtinPlacements:R(function(){return e.builtinPlacements}),triggerSubMenuAction:R(function(){return e.triggerSubMenuAction}),getPopupContainer:R(function(){return e.getPopupContainer}),inlineCollapsed:F,antdMenuTheme:R(function(){return e.theme}),siderCollapsed:d,defaultMotions:R(function(){return y.value?E.value:null}),motion:R(function(){return y.value?e.motion:null}),overflowDisabled:q(void 0),onOpenChange:K,onItemClick:B,registerMenuInfo:H,unRegisterMenuInfo:Z,selectedSubMenuKeys:C,isRootMenu:q(!0),expandIcon:G,forceSubMenuRender:R(function(){return e.forceSubMenuRender}),rootClassName:R(function(){return""})}),function(){var Q,z,J=g.value||Fn((Q=r.default)===null||Q===void 0?void 0:Q.call(r)),ne=Y.value>=J.length-1||I.value!=="horizontal"||e.disabledOverflow,oe=I.value!=="horizontal"||e.disabledOverflow?J:J.map(function(se,V){return v(Lc,{key:se.key,overflowDisabled:V>Y.value},{default:function(){return se}})}),ce=((z=r.overflowedIndicator)===null||z===void 0?void 0:z.call(r))||v(mg,null,null);return v(ko,W(W({},i),{},{onMousedown:e.onMousedown,prefixCls:"".concat(l.value,"-overflow"),component:"ul",itemComponent:Xr,class:[$.value,i.class],role:"menu",id:e.id,data:oe,renderRawItem:function(V){return V},renderRawRest:function(V){var X=V.length,ee=X?J.slice(-X):null;return v(qe,null,[v(Bi,{eventKey:us,key:us,title:ce,disabled:ne,internalPopupClose:X===0},{default:function(){return ee}}),v(ZC,null,{default:function(){return[v(Bi,{eventKey:us,key:us,title:ce,disabled:ne,internalPopupClose:X===0},{default:function(){return ee}})]}})])},maxCount:I.value!=="horizontal"||e.disabledOverflow?ko.INVALIDATE:ko.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(V){Y.value=V}}),{default:function(){return[v(Vh,{to:"body"},{default:function(){return[v("div",{style:{display:"none"},"aria-hidden":!0},[v(ZC,null,{default:function(){return[oe]}})])]}})]}})}}});Yn.install=function(n){return n.component(Yn.name,Yn),n.component(Xr.name,Xr),n.component(Bi.name,Bi),n.component(vu.name,vu),n.component(fu.name,fu),n};Yn.Item=Xr;Yn.Divider=vu;Yn.SubMenu=Bi;Yn.ItemGroup=fu;var U$=function(){return{prefixCls:String,routes:{type:Array},params:U.any,separator:U.any,itemRender:{type:Function}}};function q$(n,e){if(!n.breadcrumbName)return null;var t=Object.keys(e).join("|"),r=n.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),function(a,i){return e[i]||a});return r}function rx(n){var e=n.route,t=n.params,r=n.routes,a=n.paths,i=r.indexOf(e)===r.length-1,o=q$(e,t);return i?v("span",null,[o]):v("a",{href:"#/".concat(a.join("/"))},[o])}const Mi=ae({name:"ABreadcrumb",props:U$(),slots:["separator","itemRender"],setup:function(e,t){var r=t.slots,a=Le("breadcrumb",e),i=a.prefixCls,o=a.direction,l=function(d,f){return d=(d||"").replace(/^\//,""),Object.keys(f).forEach(function(p){d=d.replace(":".concat(p),f[p])}),d},u=function(d,f,p){var g=Ee(d),y=l(f||"",p);return y&&g.push(y),g},s=function(d){var f=d.routes,p=f===void 0?[]:f,g=d.params,y=g===void 0?{}:g,h=d.separator,m=d.itemRender,b=m===void 0?rx:m,C=[];return p.map(function(x){var S=l(x.path,y);S&&C.push(S);var w=[].concat(C),_=null;return x.children&&x.children.length&&(_=v(Yn,null,{default:function(){return[x.children.map(function(k){return v(Yn.Item,{key:k.path||k.breadcrumbName},{default:function(){return[b({route:k,params:y,routes:p,paths:u(w,k.path,y)})]}})})]}})),v(du,{overlay:_,separator:h,key:S||x.breadcrumbName},{default:function(){return[b({route:x,params:y,routes:p,paths:w})]}})})};return function(){var c,d,f,p=e.routes,g=e.params,y=g===void 0?{}:g,h=Fn(Vn(r,e)),m=(d=Vn(r,e,"separator"))!==null&&d!==void 0?d:"/",b=e.itemRender||r.itemRender||rx;p&&p.length>0?f=s({routes:p,params:y,separator:m,itemRender:b}):h.length&&(f=h.map(function(x,S){return rt(Be(x.type)==="object"&&(x.type.__ANT_BREADCRUMB_ITEM||x.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Pt(x,{separator:m,key:S})}));var C=(c={},D(c,i.value,!0),D(c,"".concat(i.value,"-rtl"),o.value==="rtl"),c);return v("nav",{class:C},[v("ol",null,[f])])}}});var Y$=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},G$=function(){return{prefixCls:String}};const Rc=ae({name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:G$(),setup:function(e,t){var r=t.slots,a=t.attrs,i=Le("breadcrumb",e),o=i.prefixCls;return function(){var l;a.separator;var u=a.class,s=Y$(a,["separator","class"]),c=Fn((l=r.default)===null||l===void 0?void 0:l.call(r));return v("span",W({class:["".concat(o.value,"-separator"),u]},s),[c.length>0?c:"/"])}}});Mi.Item=du;Mi.Separator=Rc;Mi.install=function(n){return n.component(Mi.name,Mi),n.component(du.name,du),n.component(Rc.name,Rc),n};var M6={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(Qr,function(){var t=1e3,r=6e4,a=36e5,i="millisecond",o="second",l="minute",u="hour",s="day",c="week",d="month",f="quarter",p="year",g="date",y="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},C=function(T,N,j){var $=String(T);return!$||$.length>=N?T:""+Array(N+1-$.length).join(j)+T},x={s:C,z:function(T){var N=-T.utcOffset(),j=Math.abs(N),$=Math.floor(j/60),A=j%60;return(N<=0?"+":"-")+C($,2,"0")+":"+C(A,2,"0")},m:function T(N,j){if(N.date()<j.date())return-T(j,N);var $=12*(j.year()-N.year())+(j.month()-N.month()),A=N.clone().add($,d),E=j-A<0,L=N.clone().add($+(E?-1:1),d);return+(-($+(j-A)/(E?A-L:L-A))||0)},a:function(T){return T<0?Math.ceil(T)||0:Math.floor(T)},p:function(T){return{M:d,y:p,w:c,d:s,D:g,h:u,m:l,s:o,ms:i,Q:f}[T]||String(T||"").toLowerCase().replace(/s$/,"")},u:function(T){return T===void 0}},S="en",w={};w[S]=b;var _=function(T){return T instanceof F},P=function T(N,j,$){var A;if(!N)return S;if(typeof N=="string"){var E=N.toLowerCase();w[E]&&(A=E),j&&(w[E]=j,A=E);var L=N.split("-");if(!A&&L.length>1)return T(L[0])}else{var B=N.name;w[B]=N,A=B}return!$&&A&&(S=A),A||!$&&S},k=function(T,N){if(_(T))return T.clone();var j=typeof N=="object"?N:{};return j.date=T,j.args=arguments,new F(j)},I=x;I.l=P,I.i=_,I.w=function(T,N){return k(T,{locale:N.$L,utc:N.$u,x:N.$x,$offset:N.$offset})};var F=function(){function T(j){this.$L=P(j.locale,null,!0),this.parse(j)}var N=T.prototype;return N.parse=function(j){this.$d=function($){var A=$.date,E=$.utc;if(A===null)return new Date(NaN);if(I.u(A))return new Date;if(A instanceof Date)return new Date(A);if(typeof A=="string"&&!/Z$/i.test(A)){var L=A.match(h);if(L){var B=L[2]-1||0,K=(L[7]||"0").substring(0,3);return E?new Date(Date.UTC(L[1],B,L[3]||1,L[4]||0,L[5]||0,L[6]||0,K)):new Date(L[1],B,L[3]||1,L[4]||0,L[5]||0,L[6]||0,K)}}return new Date(A)}(j),this.$x=j.x||{},this.init()},N.init=function(){var j=this.$d;this.$y=j.getFullYear(),this.$M=j.getMonth(),this.$D=j.getDate(),this.$W=j.getDay(),this.$H=j.getHours(),this.$m=j.getMinutes(),this.$s=j.getSeconds(),this.$ms=j.getMilliseconds()},N.$utils=function(){return I},N.isValid=function(){return this.$d.toString()!==y},N.isSame=function(j,$){var A=k(j);return this.startOf($)<=A&&A<=this.endOf($)},N.isAfter=function(j,$){return k(j)<this.startOf($)},N.isBefore=function(j,$){return this.endOf($)<k(j)},N.$g=function(j,$,A){return I.u(j)?this[$]:this.set(A,j)},N.unix=function(){return Math.floor(this.valueOf()/1e3)},N.valueOf=function(){return this.$d.getTime()},N.startOf=function(j,$){var A=this,E=!!I.u($)||$,L=I.p(j),B=function(J,ne){var oe=I.w(A.$u?Date.UTC(A.$y,ne,J):new Date(A.$y,ne,J),A);return E?oe:oe.endOf(s)},K=function(J,ne){return I.w(A.toDate()[J].apply(A.toDate("s"),(E?[0,0,0,0]:[23,59,59,999]).slice(ne)),A)},H=this.$W,Z=this.$M,Y=this.$D,G="set"+(this.$u?"UTC":"");switch(L){case p:return E?B(1,0):B(31,11);case d:return E?B(1,Z):B(0,Z+1);case c:var Q=this.$locale().weekStart||0,z=(H<Q?H+7:H)-Q;return B(E?Y-z:Y+(6-z),Z);case s:case g:return K(G+"Hours",0);case u:return K(G+"Minutes",1);case l:return K(G+"Seconds",2);case o:return K(G+"Milliseconds",3);default:return this.clone()}},N.endOf=function(j){return this.startOf(j,!1)},N.$set=function(j,$){var A,E=I.p(j),L="set"+(this.$u?"UTC":""),B=(A={},A[s]=L+"Date",A[g]=L+"Date",A[d]=L+"Month",A[p]=L+"FullYear",A[u]=L+"Hours",A[l]=L+"Minutes",A[o]=L+"Seconds",A[i]=L+"Milliseconds",A)[E],K=E===s?this.$D+($-this.$W):$;if(E===d||E===p){var H=this.clone().set(g,1);H.$d[B](K),H.init(),this.$d=H.set(g,Math.min(this.$D,H.daysInMonth())).$d}else B&&this.$d[B](K);return this.init(),this},N.set=function(j,$){return this.clone().$set(j,$)},N.get=function(j){return this[I.p(j)]()},N.add=function(j,$){var A,E=this;j=Number(j);var L=I.p($),B=function(Z){var Y=k(E);return I.w(Y.date(Y.date()+Math.round(Z*j)),E)};if(L===d)return this.set(d,this.$M+j);if(L===p)return this.set(p,this.$y+j);if(L===s)return B(1);if(L===c)return B(7);var K=(A={},A[l]=r,A[u]=a,A[o]=t,A)[L]||1,H=this.$d.getTime()+j*K;return I.w(H,this)},N.subtract=function(j,$){return this.add(-1*j,$)},N.format=function(j){var $=this,A=this.$locale();if(!this.isValid())return A.invalidDate||y;var E=j||"YYYY-MM-DDTHH:mm:ssZ",L=I.z(this),B=this.$H,K=this.$m,H=this.$M,Z=A.weekdays,Y=A.months,G=function(ne,oe,ce,se){return ne&&(ne[oe]||ne($,E))||ce[oe].slice(0,se)},Q=function(ne){return I.s(B%12||12,ne,"0")},z=A.meridiem||function(ne,oe,ce){var se=ne<12?"AM":"PM";return ce?se.toLowerCase():se},J={YY:String(this.$y).slice(-2),YYYY:this.$y,M:H+1,MM:I.s(H+1,2,"0"),MMM:G(A.monthsShort,H,Y,3),MMMM:G(Y,H),D:this.$D,DD:I.s(this.$D,2,"0"),d:String(this.$W),dd:G(A.weekdaysMin,this.$W,Z,2),ddd:G(A.weekdaysShort,this.$W,Z,3),dddd:Z[this.$W],H:String(B),HH:I.s(B,2,"0"),h:Q(1),hh:Q(2),a:z(B,K,!0),A:z(B,K,!1),m:String(K),mm:I.s(K,2,"0"),s:String(this.$s),ss:I.s(this.$s,2,"0"),SSS:I.s(this.$ms,3,"0"),Z:L};return E.replace(m,function(ne,oe){return oe||J[ne]||L.replace(":","")})},N.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},N.diff=function(j,$,A){var E,L=I.p($),B=k(j),K=(B.utcOffset()-this.utcOffset())*r,H=this-B,Z=I.m(this,B);return Z=(E={},E[p]=Z/12,E[d]=Z,E[f]=Z/3,E[c]=(H-K)/6048e5,E[s]=(H-K)/864e5,E[u]=H/a,E[l]=H/r,E[o]=H/t,E)[L]||H,A?Z:I.a(Z)},N.daysInMonth=function(){return this.endOf(d).$D},N.$locale=function(){return w[this.$L]},N.locale=function(j,$){if(!j)return this.$L;var A=this.clone(),E=P(j,$,!0);return E&&(A.$L=E),A},N.clone=function(){return I.w(this.$d,this)},N.toDate=function(){return new Date(this.valueOf())},N.toJSON=function(){return this.isValid()?this.toISOString():null},N.toISOString=function(){return this.$d.toISOString()},N.toString=function(){return this.$d.toUTCString()},T}(),M=F.prototype;return k.prototype=M,[["$ms",i],["$s",o],["$m",l],["$H",u],["$W",s],["$M",d],["$y",p],["$D",g]].forEach(function(T){M[T[1]]=function(N){return this.$g(N,T[0],T[1])}}),k.extend=function(T,N){return T.$i||(T(N,F,k),T.$i=!0),k},k.locale=P,k.isDayjs=_,k.unix=function(T){return k(1e3*T)},k.en=w[S],k.Ls=w,k.p={},k})})(M6);const gt=M6.exports;var A6={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(Qr,function(){return function(t,r){r.prototype.weekday=function(a){var i=this.$locale().weekStart||0,o=this.$W,l=(o<i?o+7:o)-i;return this.$utils().u(a)?l:this.subtract(l,"day").add(a,"day")}}})})(A6);const X$=A6.exports;var F6={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(Qr,function(){return function(t,r,a){var i=r.prototype,o=function(d){return d&&(d.indexOf?d:d.s)},l=function(d,f,p,g,y){var h=d.name?d:d.$locale(),m=o(h[f]),b=o(h[p]),C=m||b.map(function(S){return S.slice(0,g)});if(!y)return C;var x=h.weekStart;return C.map(function(S,w){return C[(w+(x||0))%7]})},u=function(){return a.Ls[a.locale()]},s=function(d,f){return d.formats[f]||function(p){return p.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(g,y,h){return y||h.slice(1)})}(d.formats[f.toUpperCase()])},c=function(){var d=this;return{months:function(f){return f?f.format("MMMM"):l(d,"months")},monthsShort:function(f){return f?f.format("MMM"):l(d,"monthsShort","months",3)},firstDayOfWeek:function(){return d.$locale().weekStart||0},weekdays:function(f){return f?f.format("dddd"):l(d,"weekdays")},weekdaysMin:function(f){return f?f.format("dd"):l(d,"weekdaysMin","weekdays",2)},weekdaysShort:function(f){return f?f.format("ddd"):l(d,"weekdaysShort","weekdays",3)},longDateFormat:function(f){return s(d.$locale(),f)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};i.localeData=function(){return c.bind(this)()},a.localeData=function(){var d=u();return{firstDayOfWeek:function(){return d.weekStart||0},weekdays:function(){return a.weekdays()},weekdaysShort:function(){return a.weekdaysShort()},weekdaysMin:function(){return a.weekdaysMin()},months:function(){return a.months()},monthsShort:function(){return a.monthsShort()},longDateFormat:function(f){return s(d,f)},meridiem:d.meridiem,ordinal:d.ordinal}},a.months=function(){return l(u(),"months")},a.monthsShort=function(){return l(u(),"monthsShort","months",3)},a.weekdays=function(d){return l(u(),"weekdays",null,null,d)},a.weekdaysShort=function(d){return l(u(),"weekdaysShort","weekdays",3,d)},a.weekdaysMin=function(d){return l(u(),"weekdaysMin","weekdays",2,d)}}})})(F6);const Z$=F6.exports;var j6={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(Qr,function(){var t="week",r="year";return function(a,i,o){var l=i.prototype;l.week=function(u){if(u===void 0&&(u=null),u!==null)return this.add(7*(u-this.week()),"day");var s=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var c=o(this).startOf(r).add(1,r).date(s),d=o(this).endOf(t);if(c.isBefore(d))return 1}var f=o(this).startOf(r).date(s).startOf(t).subtract(1,"millisecond"),p=this.diff(f,t,!0);return p<0?o(this).startOf("week").week():Math.ceil(p)},l.weeks=function(u){return u===void 0&&(u=null),this.week(u)}}})})(j6);const Q$=j6.exports;var D6={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(Qr,function(){return function(t,r){r.prototype.weekYear=function(){var a=this.month(),i=this.week(),o=this.year();return i===1&&a===11?o+1:a===0&&i>=52?o-1:o}}})})(D6);const J$=D6.exports;var L6={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(Qr,function(){return function(t,r,a){var i=r.prototype,o=i.format;a.en.ordinal=function(l){var u=["th","st","nd","rd"],s=l%100;return"["+l+(u[(s-20)%10]||u[s]||u[0])+"]"},i.format=function(l){var u=this,s=this.$locale();if(!this.isValid())return o.bind(this)(l);var c=this.$utils(),d=(l||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(f){switch(f){case"Q":return Math.ceil((u.$M+1)/3);case"Do":return s.ordinal(u.$D);case"gggg":return u.weekYear();case"GGGG":return u.isoWeekYear();case"wo":return s.ordinal(u.week(),"W");case"w":case"ww":return c.s(u.week(),f==="w"?1:2,"0");case"W":case"WW":return c.s(u.isoWeek(),f==="W"?1:2,"0");case"k":case"kk":return c.s(String(u.$H===0?24:u.$H),f==="k"?1:2,"0");case"X":return Math.floor(u.$d.getTime()/1e3);case"x":return u.$d.getTime();case"z":return"["+u.offsetName()+"]";case"zzz":return"["+u.offsetName("long")+"]";default:return f}});return o.bind(this)(d)}}})})(L6);const eB=L6.exports;var R6={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(Qr,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},u=function(y){return(y=+y)+(y>68?1900:2e3)},s=function(y){return function(h){this[y]=+h}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(h){if(!h||h==="Z")return 0;var m=h.match(/([+-]|\d\d)/g),b=60*m[1]+(+m[2]||0);return b===0?0:m[0]==="+"?-b:b}(y)}],d=function(y){var h=l[y];return h&&(h.indexOf?h:h.s.concat(h.f))},f=function(y,h){var m,b=l.meridiem;if(b){for(var C=1;C<=24;C+=1)if(y.indexOf(b(C,0,h))>-1){m=C>12;break}}else m=y===(h?"pm":"PM");return m},p={A:[o,function(y){this.afternoon=f(y,!1)}],a:[o,function(y){this.afternoon=f(y,!0)}],S:[/\d/,function(y){this.milliseconds=100*+y}],SS:[a,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[i,s("seconds")],ss:[i,s("seconds")],m:[i,s("minutes")],mm:[i,s("minutes")],H:[i,s("hours")],h:[i,s("hours")],HH:[i,s("hours")],hh:[i,s("hours")],D:[i,s("day")],DD:[a,s("day")],Do:[o,function(y){var h=l.ordinal,m=y.match(/\d+/);if(this.day=m[0],h)for(var b=1;b<=31;b+=1)h(b).replace(/\[|\]/g,"")===y&&(this.day=b)}],M:[i,s("month")],MM:[a,s("month")],MMM:[o,function(y){var h=d("months"),m=(d("monthsShort")||h.map(function(b){return b.slice(0,3)})).indexOf(y)+1;if(m<1)throw new Error;this.month=m%12||m}],MMMM:[o,function(y){var h=d("months").indexOf(y)+1;if(h<1)throw new Error;this.month=h%12||h}],Y:[/[+-]?\d+/,s("year")],YY:[a,function(y){this.year=u(y)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function g(y){var h,m;h=y,m=l&&l.formats;for(var b=(y=h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(k,I,F){var M=F&&F.toUpperCase();return I||m[F]||t[F]||m[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(T,N,j){return N||j.slice(1)})})).match(r),C=b.length,x=0;x<C;x+=1){var S=b[x],w=p[S],_=w&&w[0],P=w&&w[1];b[x]=P?{regex:_,parser:P}:S.replace(/^\[|\]$/g,"")}return function(k){for(var I={},F=0,M=0;F<C;F+=1){var T=b[F];if(typeof T=="string")M+=T.length;else{var N=T.regex,j=T.parser,$=k.slice(M),A=N.exec($)[0];j.call(I,A),k=k.replace(A,"")}}return function(E){var L=E.afternoon;if(L!==void 0){var B=E.hours;L?B<12&&(E.hours+=12):B===12&&(E.hours=0),delete E.afternoon}}(I),I}}return function(y,h,m){m.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(u=y.parseTwoDigitYear);var b=h.prototype,C=b.parse;b.parse=function(x){var S=x.date,w=x.utc,_=x.args;this.$u=w;var P=_[1];if(typeof P=="string"){var k=_[2]===!0,I=_[3]===!0,F=k||I,M=_[2];I&&(M=_[2]),l=this.$locale(),!k&&M&&(l=m.Ls[M]),this.$d=function($,A,E){try{if(["x","X"].indexOf(A)>-1)return new Date((A==="X"?1e3:1)*$);var L=g(A)($),B=L.year,K=L.month,H=L.day,Z=L.hours,Y=L.minutes,G=L.seconds,Q=L.milliseconds,z=L.zone,J=new Date,ne=H||(B||K?1:J.getDate()),oe=B||J.getFullYear(),ce=0;B&&!K||(ce=K>0?K-1:J.getMonth());var se=Z||0,V=Y||0,X=G||0,ee=Q||0;return z?new Date(Date.UTC(oe,ce,ne,se,V,X,ee+60*z.offset*1e3)):E?new Date(Date.UTC(oe,ce,ne,se,V,X,ee)):new Date(oe,ce,ne,se,V,X,ee)}catch{return new Date("")}}(S,P,w),this.init(),M&&M!==!0&&(this.$L=this.locale(M).$L),F&&S!=this.format(P)&&(this.$d=new Date("")),l={}}else if(P instanceof Array)for(var T=P.length,N=1;N<=T;N+=1){_[1]=P[N-1];var j=m.apply(this,_);if(j.isValid()){this.$d=j.$d,this.$L=j.$L,this.init();break}N===T&&(this.$d=new Date(""))}else C.call(this,x)}}})})(R6);const nB=R6.exports;gt.extend(nB);gt.extend(eB);gt.extend(X$);gt.extend(Z$);gt.extend(Q$);gt.extend(J$);gt.extend(function(n,e){var t=e.prototype,r=t.format;t.format=function(i){var o=(i||"").replace("Wo","wo");return r.bind(this)(o)}});var tB={bn_BD:"bn-bd",by_BY:"be",en_GB:"en-gb",en_US:"en",fr_BE:"fr",fr_CA:"fr-ca",hy_AM:"hy-am",kmr_IQ:"ku",nl_BE:"nl-be",pt_BR:"pt-br",zh_CN:"zh-cn",zh_HK:"zh-hk",zh_TW:"zh-tw"},di=function(e){var t=tB[e];return t||e.split("_")[0]},ax=function(){AM(!1,"Not match any format. Please help to fire a issue about this.")},rB={getNow:function(){return gt()},getFixedDate:function(e){return gt(e,["YYYY-M-DD","YYYY-MM-DD"])},getEndDate:function(e){return e.endOf("month")},getWeekDay:function(e){var t=e.locale("en");return t.weekday()+t.localeData().firstDayOfWeek()},getYear:function(e){return e.year()},getMonth:function(e){return e.month()},getDate:function(e){return e.date()},getHour:function(e){return e.hour()},getMinute:function(e){return e.minute()},getSecond:function(e){return e.second()},addYear:function(e,t){return e.add(t,"year")},addMonth:function(e,t){return e.add(t,"month")},addDate:function(e,t){return e.add(t,"day")},setYear:function(e,t){return e.year(t)},setMonth:function(e,t){return e.month(t)},setDate:function(e,t){return e.date(t)},setHour:function(e,t){return e.hour(t)},setMinute:function(e,t){return e.minute(t)},setSecond:function(e,t){return e.second(t)},isAfter:function(e,t){return e.isAfter(t)},isValidate:function(e){return e.isValid()},locale:{getWeekFirstDay:function(e){return gt().locale(di(e)).localeData().firstDayOfWeek()},getWeekFirstDate:function(e,t){return t.locale(di(e)).weekday(0)},getWeek:function(e,t){return t.locale(di(e)).week()},getShortWeekDays:function(e){return gt().locale(di(e)).localeData().weekdaysMin()},getShortMonths:function(e){return gt().locale(di(e)).localeData().monthsShort()},format:function(e,t,r){return t.locale(di(e)).format(r)},parse:function(e,t,r){for(var a=di(e),i=0;i<r.length;i+=1){var o=r[i],l=t;if(o.includes("wo")||o.includes("Wo")){for(var u=l.split("-")[0],s=l.split("-")[1],c=gt(u,"YYYY").startOf("year").locale(a),d=0;d<=52;d+=1){var f=c.add(d,"week");if(f.format("Wo")===s)return f}return ax(),null}var p=gt(l,o,!0).locale(a);if(p.isValid())return p}return t||ax(),null}},toDate:function(e,t){return Array.isArray(e)?e.map(function(r){return typeof r=="string"&&r?gt(r,t):r||null}):typeof e=="string"&&e?gt(e,t):e||null},toString:function(e,t){return Array.isArray(e)?e.map(function(r){return gt.isDayjs(r)?r.format(t):r}):gt.isDayjs(e)?e.format(t):e}};const Ym=rB;var aB=9007199254740991,iB=Math.floor;function ix(n,e){var t="";if(!n||e<1||e>aB)return t;do e%2&&(t+=n),e=iB(e/2),e&&(n+=n);while(e);return t}function Ld(n,e){for(var t=-1,r=n==null?0:n.length,a=Array(r);++t<r;)a[t]=e(n[t],t,n);return a}var oB="[object Symbol]";function Rd(n){return typeof n=="symbol"||Nr(n)&&Ja(n)==oB}var lB=1/0,ox=gr?gr.prototype:void 0,lx=ox?ox.toString:void 0;function Gm(n){if(typeof n=="string")return n;if(yr(n))return Ld(n,Gm)+"";if(Rd(n))return lx?lx.call(n):"";var e=n+"";return e=="0"&&1/n==-lB?"-0":e}function $6(n,e,t){var r=-1,a=n.length;e<0&&(e=-e>a?0:a+e),t=t>a?a:t,t<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var i=Array(a);++r<a;)i[r]=n[r+e];return i}function uB(n,e,t){var r=n.length;return t=t===void 0?r:t,!e&&t>=r?n:$6(n,e,t)}var sB="\\ud800-\\udfff",cB="\\u0300-\\u036f",dB="\\ufe20-\\ufe2f",fB="\\u20d0-\\u20ff",vB=cB+dB+fB,pB="\\ufe0e\\ufe0f",hB="\\u200d",gB=RegExp("["+hB+sB+vB+pB+"]");function Xm(n){return gB.test(n)}function B6(n){return function(e){return e==null?void 0:e[n]}}var mB=B6("length");const yB=mB;var V6="\\ud800-\\udfff",bB="\\u0300-\\u036f",CB="\\ufe20-\\ufe2f",xB="\\u20d0-\\u20ff",wB=bB+CB+xB,SB="\\ufe0e\\ufe0f",_B="["+V6+"]",Mp="["+wB+"]",Ap="\\ud83c[\\udffb-\\udfff]",kB="(?:"+Mp+"|"+Ap+")",K6="[^"+V6+"]",z6="(?:\\ud83c[\\udde6-\\uddff]){2}",H6="[\\ud800-\\udbff][\\udc00-\\udfff]",PB="\\u200d",W6=kB+"?",U6="["+SB+"]?",OB="(?:"+PB+"(?:"+[K6,z6,H6].join("|")+")"+U6+W6+")*",TB=U6+W6+OB,NB="(?:"+[K6+Mp+"?",Mp,z6,H6,_B].join("|")+")",ux=RegExp(Ap+"(?="+Ap+")|"+NB+TB,"g");function IB(n){for(var e=ux.lastIndex=0;ux.test(n);)++e;return e}function Zm(n){return Xm(n)?IB(n):yB(n)}function EB(n){return n.split("")}var q6="\\ud800-\\udfff",MB="\\u0300-\\u036f",AB="\\ufe20-\\ufe2f",FB="\\u20d0-\\u20ff",jB=MB+AB+FB,DB="\\ufe0e\\ufe0f",LB="["+q6+"]",Fp="["+jB+"]",jp="\\ud83c[\\udffb-\\udfff]",RB="(?:"+Fp+"|"+jp+")",Y6="[^"+q6+"]",G6="(?:\\ud83c[\\udde6-\\uddff]){2}",X6="[\\ud800-\\udbff][\\udc00-\\udfff]",$B="\\u200d",Z6=RB+"?",Q6="["+DB+"]?",BB="(?:"+$B+"(?:"+[Y6,G6,X6].join("|")+")"+Q6+Z6+")*",VB=Q6+Z6+BB,KB="(?:"+[Y6+Fp+"?",Fp,G6,X6,LB].join("|")+")",zB=RegExp(jp+"(?="+jp+")|"+KB+VB,"g");function HB(n){return n.match(zB)||[]}function WB(n){return Xm(n)?HB(n):EB(n)}var UB=Math.ceil;function J6(n,e){e=e===void 0?" ":Gm(e);var t=e.length;if(t<2)return t?ix(e,n):e;var r=ix(e,UB(n/Zm(e)));return Xm(e)?uB(WB(r),0,n).join(""):r.slice(0,n)}var qB=/\s/;function YB(n){for(var e=n.length;e--&&qB.test(n.charAt(e)););return e}var GB=/^\s+/;function XB(n){return n&&n.slice(0,YB(n)+1).replace(GB,"")}var sx=0/0,ZB=/^[-+]0x[0-9a-f]+$/i,QB=/^0b[01]+$/i,JB=/^0o[0-7]+$/i,eV=parseInt;function Dp(n){if(typeof n=="number")return n;if(Rd(n))return sx;if(Mr(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Mr(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=XB(n);var t=QB.test(n);return t||JB.test(n)?eV(n.slice(2),t?2:8):ZB.test(n)?sx:+n}var cx=1/0,nV=17976931348623157e292;function tV(n){if(!n)return n===0?n:0;if(n=Dp(n),n===cx||n===-cx){var e=n<0?-1:1;return e*nV}return n===n?n:0}function Qm(n){var e=tV(n),t=e%1;return e===e?t?e-t:e:0}function Jm(n){return n==null?"":Gm(n)}function e_(n,e,t){n=Jm(n),e=Qm(e);var r=e?Zm(n):0;return e&&r<e?J6(e-r,t)+n:n}function it(n){var e=IT();return O(O({},n),e)}var n_=Symbol("PanelContextProps"),ey=function(e){ln(n_,e)},ta=function(){return on(n_,{})},ss={visibility:"hidden"};function ri(n,e){var t=e.slots,r,a=it(n),i=a.prefixCls,o=a.prevIcon,l=o===void 0?"\u2039":o,u=a.nextIcon,s=u===void 0?"\u203A":u,c=a.superPrevIcon,d=c===void 0?"\xAB":c,f=a.superNextIcon,p=f===void 0?"\xBB":f,g=a.onSuperPrev,y=a.onSuperNext,h=a.onPrev,m=a.onNext,b=ta(),C=b.hideNextBtn,x=b.hidePrevBtn;return v("div",{class:i},[g&&v("button",{type:"button",onClick:g,tabindex:-1,class:"".concat(i,"-super-prev-btn"),style:x.value?ss:{}},[d]),h&&v("button",{type:"button",onClick:h,tabindex:-1,class:"".concat(i,"-prev-btn"),style:x.value?ss:{}},[l]),v("div",{class:"".concat(i,"-view")},[(r=t.default)===null||r===void 0?void 0:r.call(t)]),m&&v("button",{type:"button",onClick:m,tabindex:-1,class:"".concat(i,"-next-btn"),style:C.value?ss:{}},[s]),y&&v("button",{type:"button",onClick:y,tabindex:-1,class:"".concat(i,"-super-next-btn"),style:C.value?ss:{}},[p])])}ri.displayName="Header";ri.inheritAttrs=!1;function ny(n){var e=it(n),t=e.prefixCls,r=e.generateConfig,a=e.viewDate,i=e.onPrevDecades,o=e.onNextDecades,l=ta(),u=l.hideHeader;if(u)return null;var s="".concat(t,"-header"),c=r.getYear(a),d=Math.floor(c/ya)*ya,f=d+ya-1;return v(ri,W(W({},e),{},{prefixCls:s,onSuperPrev:i,onSuperNext:o}),{default:function(){return[d,tt("-"),f]}})}ny.displayName="DecadeHeader";ny.inheritAttrs=!1;function t_(n,e,t,r,a){var i=n.setHour(e,t);return i=n.setMinute(i,r),i=n.setSecond(i,a),i}function js(n,e,t){if(!t)return e;var r=e;return r=n.setHour(r,n.getHour(t)),r=n.setMinute(r,n.getMinute(t)),r=n.setSecond(r,n.getSecond(t)),r}function rV(n,e,t,r,a,i){var o=Math.floor(n/r)*r;if(o<n)return[o,60-a,60-i];var l=Math.floor(e/a)*a;if(l<e)return[o,l,60-i];var u=Math.floor(t/i)*i;return[o,l,u]}function aV(n,e){var t=n.getYear(e),r=n.getMonth(e)+1,a=n.getEndDate(n.getFixedDate("".concat(t,"-").concat(r,"-01"))),i=n.getDate(a),o=r<10?"0".concat(r):"".concat(r);return"".concat(t,"-").concat(o,"-").concat(i)}function Yi(n){for(var e=it(n),t=e.prefixCls,r=e.disabledDate,a=e.onSelect,i=e.picker,o=e.rowNum,l=e.colNum,u=e.prefixColumn,s=e.rowClassName,c=e.baseDate,d=e.getCellClassName,f=e.getCellText,p=e.getCellNode,g=e.getCellDate,y=e.generateConfig,h=e.titleCell,m=e.headerCells,b=ta(),C=b.onDateMouseenter,x=b.onDateMouseleave,S=b.mode,w="".concat(t,"-cell"),_=[],P=0;P<o;P+=1){for(var k=[],I=void 0,F=function(N){var j,$=P*l+N,A=g(c,$),E=Bp({cellDate:A,mode:S.value,disabledDate:r,generateConfig:y});N===0&&(I=A,u&&k.push(u(I)));var L=h&&h(A);k.push(v("td",{key:N,title:L,class:de(w,O((j={},D(j,"".concat(w,"-disabled"),E),D(j,"".concat(w,"-start"),f(A)===1||i==="year"&&Number(L)%10===0),D(j,"".concat(w,"-end"),L===aV(y,A)||i==="year"&&Number(L)%10===9),j),d(A))),onClick:function(){E||a(A)},onMouseenter:function(){!E&&C&&C(A)},onMouseleave:function(){!E&&x&&x(A)}},[p?p(A):v("div",{class:"".concat(w,"-inner")},[f(A)])]))},M=0;M<l;M+=1)F(M);_.push(v("tr",{key:P,class:s&&s(I)},[k]))}return v("div",{class:"".concat(t,"-body")},[v("table",{class:"".concat(t,"-content")},[m&&v("thead",null,[v("tr",null,[m])]),v("tbody",null,[_])])])}Yi.displayName="PanelBody";Yi.inheritAttrs=!1;var Lp=3,dx=4;function ty(n){var e=it(n),t=Sr-1,r=e.prefixCls,a=e.viewDate,i=e.generateConfig,o="".concat(r,"-cell"),l=i.getYear(a),u=Math.floor(l/Sr)*Sr,s=Math.floor(l/ya)*ya,c=s+ya-1,d=i.setYear(a,s-Math.ceil((Lp*dx*Sr-ya)/2)),f=function(g){var y,h=i.getYear(g),m=h+t;return y={},D(y,"".concat(o,"-in-view"),s<=h&&m<=c),D(y,"".concat(o,"-selected"),h===u),y};return v(Yi,W(W({},e),{},{rowNum:dx,colNum:Lp,baseDate:d,getCellText:function(g){var y=i.getYear(g);return"".concat(y,"-").concat(y+t)},getCellClassName:f,getCellDate:function(g,y){return i.addYear(g,y*Sr)}}),null)}ty.displayName="DecadeBody";ty.inheritAttrs=!1;var cs=new Map;function iV(n,e){var t;function r(){Sm(n)?e():t=Qe(function(){r()})}return r(),function(){Qe.cancel(t)}}function Rp(n,e,t){if(cs.get(n)&&Qe.cancel(cs.get(n)),t<=0){cs.set(n,Qe(function(){n.scrollTop=e}));return}var r=e-n.scrollTop,a=r/t*10;cs.set(n,Qe(function(){n.scrollTop+=a,n.scrollTop!==e&&Rp(n,e,t-10)}))}function Jo(n,e){var t=e.onLeftRight,r=e.onCtrlLeftRight,a=e.onUpDown,i=e.onPageUpDown,o=e.onEnter,l=n.which,u=n.ctrlKey,s=n.metaKey;switch(l){case Ne.LEFT:if(u||s){if(r)return r(-1),!0}else if(t)return t(-1),!0;break;case Ne.RIGHT:if(u||s){if(r)return r(1),!0}else if(t)return t(1),!0;break;case Ne.UP:if(a)return a(-1),!0;break;case Ne.DOWN:if(a)return a(1),!0;break;case Ne.PAGE_UP:if(i)return i(-1),!0;break;case Ne.PAGE_DOWN:if(i)return i(1),!0;break;case Ne.ENTER:if(o)return o(),!0;break}return!1}function r_(n,e,t,r){var a=n;if(!a)switch(e){case"time":a=r?"hh:mm:ss a":"HH:mm:ss";break;case"week":a="gggg-wo";break;case"month":a="YYYY-MM";break;case"quarter":a="YYYY-[Q]Q";break;case"year":a="YYYY";break;default:a=t?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD"}return a}function a_(n,e,t){var r=n==="time"?8:10,a=typeof e=="function"?e(t.getNow()).length:e.length;return Math.max(r,a)+2}var fl=null,ds=new Set;function oV(n){return!fl&&typeof window<"u"&&window.addEventListener&&(fl=function(t){Ee(ds).forEach(function(r){r(t)})},window.addEventListener("mousedown",fl)),ds.add(n),function(){ds.delete(n),ds.size===0&&(window.removeEventListener("mousedown",fl),fl=null)}}function lV(n){var e,t=n.target;return n.composed&&t.shadowRoot&&((e=n.composedPath)===null||e===void 0?void 0:e.call(n)[0])||t}var uV=function(e){return e==="month"||e==="date"?"year":e},sV=function(e){return e==="date"?"month":e},cV=function(e){return e==="month"||e==="date"?"quarter":e},dV=function(e){return e==="date"?"week":e},fV={year:uV,month:sV,quarter:cV,week:dV,time:null,date:null};function i_(n,e){return n.some(function(t){return t&&t.contains(e)})}var Sr=10,ya=Sr*10;function ry(n){var e=it(n),t=e.prefixCls,r=e.onViewDateChange,a=e.generateConfig,i=e.viewDate,o=e.operationRef,l=e.onSelect,u=e.onPanelChange,s="".concat(t,"-decade-panel");o.value={onKeydown:function(p){return Jo(p,{onLeftRight:function(y){l(a.addYear(i,y*Sr),"key")},onCtrlLeftRight:function(y){l(a.addYear(i,y*ya),"key")},onUpDown:function(y){l(a.addYear(i,y*Sr*Lp),"key")},onEnter:function(){u("year",i)}})}};var c=function(p){var g=a.addYear(i,p*ya);r(g),u(null,g)},d=function(p){l(p,"mouse"),u("year",p)};return v("div",{class:s},[v(ny,W(W({},e),{},{prefixCls:t,onPrevDecades:function(){c(-1)},onNextDecades:function(){c(1)}}),null),v(ty,W(W({},e),{},{prefixCls:t,onSelect:d}),null)])}ry.displayName="DecadePanel";ry.inheritAttrs=!1;var Ds=7;function Gi(n,e){if(!n&&!e)return!0;if(!n||!e)return!1}function vV(n,e,t){var r=Gi(e,t);if(typeof r=="boolean")return r;var a=Math.floor(n.getYear(e)/10),i=Math.floor(n.getYear(t)/10);return a===i}function $d(n,e,t){var r=Gi(e,t);return typeof r=="boolean"?r:n.getYear(e)===n.getYear(t)}function $p(n,e){var t=Math.floor(n.getMonth(e)/3);return t+1}function o_(n,e,t){var r=Gi(e,t);return typeof r=="boolean"?r:$d(n,e,t)&&$p(n,e)===$p(n,t)}function ay(n,e,t){var r=Gi(e,t);return typeof r=="boolean"?r:$d(n,e,t)&&n.getMonth(e)===n.getMonth(t)}function ba(n,e,t){var r=Gi(e,t);return typeof r=="boolean"?r:n.getYear(e)===n.getYear(t)&&n.getMonth(e)===n.getMonth(t)&&n.getDate(e)===n.getDate(t)}function pV(n,e,t){var r=Gi(e,t);return typeof r=="boolean"?r:n.getHour(e)===n.getHour(t)&&n.getMinute(e)===n.getMinute(t)&&n.getSecond(e)===n.getSecond(t)}function l_(n,e,t,r){var a=Gi(t,r);return typeof a=="boolean"?a:n.locale.getWeek(e,t)===n.locale.getWeek(e,r)}function Oo(n,e,t){return ba(n,e,t)&&pV(n,e,t)}function fs(n,e,t,r){return!e||!t||!r?!1:!ba(n,e,r)&&!ba(n,t,r)&&n.isAfter(r,e)&&n.isAfter(t,r)}function hV(n,e,t){var r=e.locale.getWeekFirstDay(n),a=e.setDate(t,1),i=e.getWeekDay(a),o=e.addDate(a,r-i);return e.getMonth(o)===e.getMonth(t)&&e.getDate(o)>1&&(o=e.addDate(o,-7)),o}function jl(n,e,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;switch(e){case"year":return t.addYear(n,r*10);case"quarter":case"month":return t.addYear(n,r);default:return t.addMonth(n,r)}}function _t(n,e){var t=e.generateConfig,r=e.locale,a=e.format;return typeof a=="function"?a(n):t.locale.format(r.locale,n,a)}function u_(n,e){var t=e.generateConfig,r=e.locale,a=e.formatList;return!n||typeof a[0]=="function"?null:t.locale.parse(r.locale,n,a)}function Bp(n){var e=n.cellDate,t=n.mode,r=n.disabledDate,a=n.generateConfig;if(!r)return!1;var i=function(g,y,h){for(var m=y;m<=h;){var b=void 0;switch(g){case"date":{if(b=a.setDate(e,m),!r(b))return!1;break}case"month":{if(b=a.setMonth(e,m),!Bp({cellDate:b,mode:"month",generateConfig:a,disabledDate:r}))return!1;break}case"year":{if(b=a.setYear(e,m),!Bp({cellDate:b,mode:"year",generateConfig:a,disabledDate:r}))return!1;break}}m+=1}return!0};switch(t){case"date":case"week":return r(e);case"month":{var o=1,l=a.getDate(a.getEndDate(e));return i("date",o,l)}case"quarter":{var u=Math.floor(a.getMonth(e)/3)*3,s=u+2;return i("month",u,s)}case"year":return i("month",0,11);case"decade":{var c=a.getYear(e),d=Math.floor(c/Sr)*Sr,f=d+Sr-1;return i("year",d,f)}}}function iy(n){var e=it(n),t=ta(),r=t.hideHeader;if(r.value)return null;var a=e.prefixCls,i=e.generateConfig,o=e.locale,l=e.value,u=e.format,s="".concat(a,"-header");return v(ri,{prefixCls:s},{default:function(){return[l?_t(l,{locale:o,format:u,generateConfig:i}):"\xA0"]}})}iy.displayName="TimeHeader";iy.inheritAttrs=!1;const vs=ae({name:"TimeUnitColumn",props:["prefixCls","units","onSelect","value","active","hideDisabledOptions"],setup:function(e){var t=ta(),r=t.open,a=q(null),i=q(new Map),o=q();return Pe(function(){return e.value},function(){var l=i.value.get(e.value);l&&r.value!==!1&&Rp(a.value,l.offsetTop,120)}),fn(function(){var l;(l=o.value)===null||l===void 0||l.call(o)}),Pe(r,function(){var l;(l=o.value)===null||l===void 0||l.call(o),dn(function(){if(r.value){var u=i.value.get(e.value);u&&(o.value=iV(u,function(){Rp(a.value,u.offsetTop,0)}))}})},{immediate:!0,flush:"post"}),function(){var l=e.prefixCls,u=e.units,s=e.onSelect,c=e.value,d=e.active,f=e.hideDisabledOptions,p="".concat(l,"-cell");return v("ul",{class:de("".concat(l,"-column"),D({},"".concat(l,"-column-active"),d)),ref:a,style:{position:"relative"}},[u.map(function(g){var y;return f&&g.disabled?null:v("li",{key:g.value,ref:function(m){i.value.set(g.value,m)},class:de(p,(y={},D(y,"".concat(p,"-disabled"),g.disabled),D(y,"".concat(p,"-selected"),c===g.value),y)),onClick:function(){g.disabled||s(g.value)}},[v("div",{class:"".concat(p,"-inner")},[g.label])])})])}}});function s_(n,e){for(var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0",r=String(n);r.length<e;)r="".concat(t).concat(n);return r}var gV=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t};function c_(n){return n==null?[]:Array.isArray(n)?n:[n]}function d_(n){var e={};return Object.keys(n).forEach(function(t){(t.startsWith("data-")||t.startsWith("aria-")||t==="role"||t==="name")&&!t.startsWith("data-__")&&(e[t]=n[t])}),e}function Nn(n,e){return n?n[e]:null}function fr(n,e,t){var r=[Nn(n,0),Nn(n,1)];return r[t]=typeof e=="function"?e(r[t]):e,!r[0]&&!r[1]?null:r}function ev(n,e,t,r){for(var a=[],i=n;i<=e;i+=t)a.push({label:s_(i,2),value:i,disabled:(r||[]).includes(i)});return a}var mV=ae({name:"TimeBody",inheritAttrs:!1,props:["generateConfig","prefixCls","operationRef","activeColumnIndex","value","showHour","showMinute","showSecond","use12Hours","hourStep","minuteStep","secondStep","disabledHours","disabledMinutes","disabledSeconds","disabledTime","hideDisabledOptions","onSelect"],setup:function(e){var t=R(function(){return e.value?e.generateConfig.getHour(e.value):-1}),r=R(function(){return e.use12Hours?t.value>=12:!1}),a=R(function(){return e.use12Hours?t.value%12:t.value}),i=R(function(){return e.value?e.generateConfig.getMinute(e.value):-1}),o=R(function(){return e.value?e.generateConfig.getSecond(e.value):-1}),l=q(e.generateConfig.getNow()),u=q(),s=q(),c=q();gd(function(){l.value=e.generateConfig.getNow()}),Ze(function(){if(e.disabledTime){var m=e.disabledTime(l),b=[m.disabledHours,m.disabledMinutes,m.disabledSeconds];u.value=b[0],s.value=b[1],c.value=b[2]}else{var C=[e.disabledHours,e.disabledMinutes,e.disabledSeconds];u.value=C[0],s.value=C[1],c.value=C[2]}});var d=function(b,C,x,S){var w=e.value||e.generateConfig.getNow(),_=Math.max(0,C),P=Math.max(0,x),k=Math.max(0,S);return w=t_(e.generateConfig,w,!e.use12Hours||!b?_:_+12,P,k),w},f=R(function(){var m;return ev(0,23,(m=e.hourStep)!==null&&m!==void 0?m:1,u.value&&u.value())}),p=R(function(){if(!e.use12Hours)return[!1,!1];var m=[!0,!0];return f.value.forEach(function(b){var C=b.disabled,x=b.value;C||(x>=12?m[1]=!1:m[0]=!1)}),m}),g=R(function(){return e.use12Hours?f.value.filter(r.value?function(m){return m.value>=12}:function(m){return m.value<12}).map(function(m){var b=m.value%12,C=b===0?"12":s_(b,2);return O(O({},m),{label:C,value:b})}):f.value}),y=R(function(){var m;return ev(0,59,(m=e.minuteStep)!==null&&m!==void 0?m:1,s.value&&s.value(t.value))}),h=R(function(){var m;return ev(0,59,(m=e.secondStep)!==null&&m!==void 0?m:1,c.value&&c.value(t.value,i))});return function(){var m=e.prefixCls,b=e.operationRef,C=e.activeColumnIndex,x=e.showHour,S=e.showMinute,w=e.showSecond,_=e.use12Hours,P=e.hideDisabledOptions,k=e.onSelect,I=[],F="".concat(m,"-content"),M="".concat(m,"-time-panel");b.value={onUpDown:function($){var A=I[C];if(A)for(var E=A.units.findIndex(function(H){return H.value===A.value}),L=A.units.length,B=1;B<L;B+=1){var K=A.units[(E+$*B+L)%L];if(K.disabled!==!0){A.onSelect(K.value);break}}}};function T(j,$,A,E,L){j!==!1&&I.push({node:wn($,{prefixCls:M,value:A,active:C===I.length,onSelect:L,units:E,hideDisabledOptions:P}),onSelect:L,value:A,units:E})}T(x,v(vs,{key:"hour"},null),a.value,g.value,function(j){k(d(r.value,j,i.value,o.value),"mouse")}),T(S,v(vs,{key:"minute"},null),i.value,y.value,function(j){k(d(r.value,a.value,j,o.value),"mouse")}),T(w,v(vs,{key:"second"},null),o.value,h.value,function(j){k(d(r.value,a.value,i.value,j),"mouse")});var N=-1;return typeof r.value=="boolean"&&(N=r.value?1:0),T(_===!0,v(vs,{key:"12hours"},null),N,[{label:"AM",value:0,disabled:p.value[0]},{label:"PM",value:1,disabled:p.value[1]}],function(j){k(d(!!j,a.value,i.value,o.value),"mouse")}),v("div",{class:F},[I.map(function(j){var $=j.node;return $})])}}});const yV=mV;var bV=function(e){return e.filter(function(t){return t!==!1}).length};function Bd(n){var e=it(n),t=e.generateConfig,r=e.format,a=r===void 0?"HH:mm:ss":r,i=e.prefixCls,o=e.active,l=e.operationRef,u=e.showHour,s=e.showMinute,c=e.showSecond,d=e.use12Hours,f=d===void 0?!1:d,p=e.onSelect,g=e.value,y="".concat(i,"-time-panel"),h=q(),m=q(-1),b=bV([u,s,c,f]);return l.value={onKeydown:function(x){return Jo(x,{onLeftRight:function(w){m.value=(m.value+w+b)%b},onUpDown:function(w){m.value===-1?m.value=0:h.value&&h.value.onUpDown(w)},onEnter:function(){p(g||t.getNow(),"key"),m.value=-1}})},onBlur:function(){m.value=-1}},v("div",{class:de(y,D({},"".concat(y,"-active"),o))},[v(iy,W(W({},e),{},{format:a,prefixCls:i}),null),v(yV,W(W({},e),{},{prefixCls:i,activeColumnIndex:m.value,operationRef:h}),null)])}Bd.displayName="TimePanel";Bd.inheritAttrs=!1;function Vd(n){var e=n.cellPrefixCls,t=n.generateConfig,r=n.rangedValue,a=n.hoverRangedValue,i=n.isInView,o=n.isSameCell,l=n.offsetCell,u=n.today,s=n.value;function c(d){var f,p=l(d,-1),g=l(d,1),y=Nn(r,0),h=Nn(r,1),m=Nn(a,0),b=Nn(a,1),C=fs(t,m,b,d);function x(I){return o(y,I)}function S(I){return o(h,I)}var w=o(m,d),_=o(b,d),P=(C||_)&&(!i(p)||S(p)),k=(C||w)&&(!i(g)||x(g));return f={},D(f,"".concat(e,"-in-view"),i(d)),D(f,"".concat(e,"-in-range"),fs(t,y,h,d)),D(f,"".concat(e,"-range-start"),x(d)),D(f,"".concat(e,"-range-end"),S(d)),D(f,"".concat(e,"-range-start-single"),x(d)&&!h),D(f,"".concat(e,"-range-end-single"),S(d)&&!y),D(f,"".concat(e,"-range-start-near-hover"),x(d)&&(o(p,m)||fs(t,m,b,p))),D(f,"".concat(e,"-range-end-near-hover"),S(d)&&(o(g,b)||fs(t,m,b,g))),D(f,"".concat(e,"-range-hover"),C),D(f,"".concat(e,"-range-hover-start"),w),D(f,"".concat(e,"-range-hover-end"),_),D(f,"".concat(e,"-range-hover-edge-start"),P),D(f,"".concat(e,"-range-hover-edge-end"),k),D(f,"".concat(e,"-range-hover-edge-start-near-range"),P&&o(p,h)),D(f,"".concat(e,"-range-hover-edge-end-near-range"),k&&o(g,y)),D(f,"".concat(e,"-today"),o(u,d)),D(f,"".concat(e,"-selected"),o(s,d)),f}return c}var f_=Symbol("RangeContextProps"),CV=function(e){ln(f_,e)},Iu=function(){return on(f_,{rangedValue:q(),hoverRangedValue:q(),inRange:q(),panelPosition:q()})},xV=ae({name:"PanelContextProvider",inheritAttrs:!1,props:{value:{type:Object,default:function(){return{}}}},setup:function(e,t){var r=t.slots,a={rangedValue:q(e.value.rangedValue),hoverRangedValue:q(e.value.hoverRangedValue),inRange:q(e.value.inRange),panelPosition:q(e.value.panelPosition)};return CV(a),Pe(function(){return e.value},function(){Object.keys(e.value).forEach(function(i){a[i]&&(a[i].value=e.value[i])})}),function(){var i;return(i=r.default)===null||i===void 0?void 0:i.call(r)}}});function Kd(n){var e=it(n),t=e.prefixCls,r=e.generateConfig,a=e.prefixColumn,i=e.locale,o=e.rowCount,l=e.viewDate,u=e.value,s=e.dateRender,c=Iu(),d=c.rangedValue,f=c.hoverRangedValue,p=hV(i.locale,r,l),g="".concat(t,"-cell"),y=r.locale.getWeekFirstDay(i.locale),h=r.getNow(),m=[],b=i.shortWeekDays||(r.locale.getShortWeekDays?r.locale.getShortWeekDays(i.locale):[]);a&&m.push(v("th",{key:"empty","aria-label":"empty cell"},null));for(var C=0;C<Ds;C+=1)m.push(v("th",{key:C},[b[(C+y)%Ds]]));var x=Vd({cellPrefixCls:g,today:h,value:u,generateConfig:r,rangedValue:a?null:d.value,hoverRangedValue:a?null:f.value,isSameCell:function(_,P){return ba(r,_,P)},isInView:function(_){return ay(r,_,l)},offsetCell:function(_,P){return r.addDate(_,P)}}),S=s?function(w){return s({current:w,today:h})}:void 0;return v(Yi,W(W({},e),{},{rowNum:o,colNum:Ds,baseDate:p,getCellNode:S,getCellText:r.getDate,getCellClassName:x,getCellDate:r.addDate,titleCell:function(_){return _t(_,{locale:i,format:"YYYY-MM-DD",generateConfig:r})},headerCells:m}),null)}Kd.displayName="DateBody";Kd.inheritAttrs=!1;Kd.props=["prefixCls","generateConfig","value?","viewDate","locale","rowCount","onSelect","dateRender?","disabledDate?","prefixColumn?","rowClassName?"];function oy(n){var e=it(n),t=e.prefixCls,r=e.generateConfig,a=e.locale,i=e.viewDate,o=e.onNextMonth,l=e.onPrevMonth,u=e.onNextYear,s=e.onPrevYear,c=e.onYearClick,d=e.onMonthClick,f=ta(),p=f.hideHeader;if(p.value)return null;var g="".concat(t,"-header"),y=a.shortMonths||(r.locale.getShortMonths?r.locale.getShortMonths(a.locale):[]),h=r.getMonth(i),m=v("button",{type:"button",key:"year",onClick:c,tabindex:-1,class:"".concat(t,"-year-btn")},[_t(i,{locale:a,format:a.yearFormat,generateConfig:r})]),b=v("button",{type:"button",key:"month",onClick:d,tabindex:-1,class:"".concat(t,"-month-btn")},[a.monthFormat?_t(i,{locale:a,format:a.monthFormat,generateConfig:r}):y[h]]),C=a.monthBeforeYear?[b,m]:[m,b];return v(ri,W(W({},e),{},{prefixCls:g,onSuperPrev:s,onPrev:l,onNext:o,onSuperNext:u}),{default:function(){return[C]}})}oy.displayName="DateHeader";oy.inheritAttrs=!1;var wV=6;function Eu(n){var e=it(n),t=e.prefixCls,r=e.panelName,a=r===void 0?"date":r,i=e.keyboardConfig,o=e.active,l=e.operationRef,u=e.generateConfig,s=e.value,c=e.viewDate,d=e.onViewDateChange,f=e.onPanelChange,p=e.onSelect,g="".concat(t,"-").concat(a,"-panel");l.value={onKeydown:function(b){return Jo(b,O({onLeftRight:function(x){p(u.addDate(s||c,x),"key")},onCtrlLeftRight:function(x){p(u.addYear(s||c,x),"key")},onUpDown:function(x){p(u.addDate(s||c,x*Ds),"key")},onPageUpDown:function(x){p(u.addMonth(s||c,x),"key")}},i))}};var y=function(b){var C=u.addYear(c,b);d(C),f(null,C)},h=function(b){var C=u.addMonth(c,b);d(C),f(null,C)};return v("div",{class:de(g,D({},"".concat(g,"-active"),o))},[v(oy,W(W({},e),{},{prefixCls:t,value:s,viewDate:c,onPrevYear:function(){y(-1)},onNextYear:function(){y(1)},onPrevMonth:function(){h(-1)},onNextMonth:function(){h(1)},onMonthClick:function(){f("month",c)},onYearClick:function(){f("year",c)}}),null),v(Kd,W(W({},e),{},{onSelect:function(b){return p(b,"mouse")},prefixCls:t,value:s,viewDate:c,rowCount:wV}),null)])}Eu.displayName="DatePanel";Eu.inheritAttrs=!1;var fx=gV("date","time");function ly(n){var e=it(n),t=e.prefixCls,r=e.operationRef,a=e.generateConfig,i=e.value,o=e.defaultValue,l=e.disabledTime,u=e.showTime,s=e.onSelect,c="".concat(t,"-datetime-panel"),d=q(null),f=q({}),p=q({}),g=Be(u)==="object"?O({},u):{};function y(C){var x=fx.indexOf(d.value)+C,S=fx[x]||null;return S}var h=function(x){p.value.onBlur&&p.value.onBlur(x),d.value=null};r.value={onKeydown:function(x){if(x.which===Ne.TAB){var S=y(x.shiftKey?-1:1);return d.value=S,S&&x.preventDefault(),!0}if(d.value){var w=d.value==="date"?f:p;return w.value&&w.value.onKeydown&&w.value.onKeydown(x),!0}return[Ne.LEFT,Ne.RIGHT,Ne.UP,Ne.DOWN].includes(x.which)?(d.value="date",!0):!1},onBlur:h,onClose:h};var m=function(x,S){var w=x;S==="date"&&!i&&g.defaultValue?(w=a.setHour(w,a.getHour(g.defaultValue)),w=a.setMinute(w,a.getMinute(g.defaultValue)),w=a.setSecond(w,a.getSecond(g.defaultValue))):S==="time"&&!i&&o&&(w=a.setYear(w,a.getYear(o)),w=a.setMonth(w,a.getMonth(o)),w=a.setDate(w,a.getDate(o))),s&&s(w,"mouse")},b=l?l(i||null):{};return v("div",{class:de(c,D({},"".concat(c,"-active"),d.value))},[v(Eu,W(W({},e),{},{operationRef:f,active:d.value==="date",onSelect:function(x){m(js(a,x,!i&&Be(u)==="object"?u.defaultValue:null),"date")}}),null),v(Bd,W(W(W(W({},e),{},{format:void 0},g),b),{},{disabledTime:null,defaultValue:void 0,operationRef:p,active:d.value==="time",onSelect:function(x){m(x,"time")}}),null)])}ly.displayName="DatetimePanel";ly.inheritAttrs=!1;function uy(n){var e=it(n),t=e.prefixCls,r=e.generateConfig,a=e.locale,i=e.value,o="".concat(t,"-cell"),l=function(d){return v("td",{key:"week",class:de(o,"".concat(o,"-week"))},[r.locale.getWeek(a.locale,d)])},u="".concat(t,"-week-panel-row"),s=function(d){return de(u,D({},"".concat(u,"-selected"),l_(r,a.locale,i,d)))};return v(Eu,W(W({},e),{},{panelName:"week",prefixColumn:l,rowClassName:s,keyboardConfig:{onLeftRight:null}}),null)}uy.displayName="WeekPanel";uy.inheritAttrs=!1;function sy(n){var e=it(n),t=e.prefixCls,r=e.generateConfig,a=e.locale,i=e.viewDate,o=e.onNextYear,l=e.onPrevYear,u=e.onYearClick,s=ta(),c=s.hideHeader;if(c.value)return null;var d="".concat(t,"-header");return v(ri,W(W({},e),{},{prefixCls:d,onSuperPrev:l,onSuperNext:o}),{default:function(){return[v("button",{type:"button",onClick:u,class:"".concat(t,"-year-btn")},[_t(i,{locale:a,format:a.yearFormat,generateConfig:r})])]}})}sy.displayName="MonthHeader";sy.inheritAttrs=!1;var v_=3,SV=4;function cy(n){var e=it(n),t=e.prefixCls,r=e.locale,a=e.value,i=e.viewDate,o=e.generateConfig,l=e.monthCellRender,u=Iu(),s=u.rangedValue,c=u.hoverRangedValue,d="".concat(t,"-cell"),f=Vd({cellPrefixCls:d,value:a,generateConfig:o,rangedValue:s.value,hoverRangedValue:c.value,isSameCell:function(m,b){return ay(o,m,b)},isInView:function(){return!0},offsetCell:function(m,b){return o.addMonth(m,b)}}),p=r.shortMonths||(o.locale.getShortMonths?o.locale.getShortMonths(r.locale):[]),g=o.setMonth(i,0),y=l?function(h){return l({current:h,locale:r})}:void 0;return v(Yi,W(W({},e),{},{rowNum:SV,colNum:v_,baseDate:g,getCellNode:y,getCellText:function(m){return r.monthFormat?_t(m,{locale:r,format:r.monthFormat,generateConfig:o}):p[o.getMonth(m)]},getCellClassName:f,getCellDate:o.addMonth,titleCell:function(m){return _t(m,{locale:r,format:"YYYY-MM",generateConfig:o})}}),null)}cy.displayName="MonthBody";cy.inheritAttrs=!1;function dy(n){var e=it(n),t=e.prefixCls,r=e.operationRef,a=e.onViewDateChange,i=e.generateConfig,o=e.value,l=e.viewDate,u=e.onPanelChange,s=e.onSelect,c="".concat(t,"-month-panel");r.value={onKeydown:function(p){return Jo(p,{onLeftRight:function(y){s(i.addMonth(o||l,y),"key")},onCtrlLeftRight:function(y){s(i.addYear(o||l,y),"key")},onUpDown:function(y){s(i.addMonth(o||l,y*v_),"key")},onEnter:function(){u("date",o||l)}})}};var d=function(p){var g=i.addYear(l,p);a(g),u(null,g)};return v("div",{class:c},[v(sy,W(W({},e),{},{prefixCls:t,onPrevYear:function(){d(-1)},onNextYear:function(){d(1)},onYearClick:function(){u("year",l)}}),null),v(cy,W(W({},e),{},{prefixCls:t,onSelect:function(p){s(p,"mouse"),u("date",p)}}),null)])}dy.displayName="MonthPanel";dy.inheritAttrs=!1;function fy(n){var e=it(n),t=e.prefixCls,r=e.generateConfig,a=e.locale,i=e.viewDate,o=e.onNextYear,l=e.onPrevYear,u=e.onYearClick,s=ta(),c=s.hideHeader;if(c.value)return null;var d="".concat(t,"-header");return v(ri,W(W({},e),{},{prefixCls:d,onSuperPrev:l,onSuperNext:o}),{default:function(){return[v("button",{type:"button",onClick:u,class:"".concat(t,"-year-btn")},[_t(i,{locale:a,format:a.yearFormat,generateConfig:r})])]}})}fy.displayName="QuarterHeader";fy.inheritAttrs=!1;var _V=4,kV=1;function vy(n){var e=it(n),t=e.prefixCls,r=e.locale,a=e.value,i=e.viewDate,o=e.generateConfig,l=Iu(),u=l.rangedValue,s=l.hoverRangedValue,c="".concat(t,"-cell"),d=Vd({cellPrefixCls:c,value:a,generateConfig:o,rangedValue:u.value,hoverRangedValue:s.value,isSameCell:function(g,y){return o_(o,g,y)},isInView:function(){return!0},offsetCell:function(g,y){return o.addMonth(g,y*3)}}),f=o.setDate(o.setMonth(i,0),1);return v(Yi,W(W({},e),{},{rowNum:kV,colNum:_V,baseDate:f,getCellText:function(g){return _t(g,{locale:r,format:r.quarterFormat||"[Q]Q",generateConfig:o})},getCellClassName:d,getCellDate:function(g,y){return o.addMonth(g,y*3)},titleCell:function(g){return _t(g,{locale:r,format:"YYYY-[Q]Q",generateConfig:o})}}),null)}vy.displayName="QuarterBody";vy.inheritAttrs=!1;function py(n){var e=it(n),t=e.prefixCls,r=e.operationRef,a=e.onViewDateChange,i=e.generateConfig,o=e.value,l=e.viewDate,u=e.onPanelChange,s=e.onSelect,c="".concat(t,"-quarter-panel");r.value={onKeydown:function(p){return Jo(p,{onLeftRight:function(y){s(i.addMonth(o||l,y*3),"key")},onCtrlLeftRight:function(y){s(i.addYear(o||l,y),"key")},onUpDown:function(y){s(i.addYear(o||l,y),"key")}})}};var d=function(p){var g=i.addYear(l,p);a(g),u(null,g)};return v("div",{class:c},[v(fy,W(W({},e),{},{prefixCls:t,onPrevYear:function(){d(-1)},onNextYear:function(){d(1)},onYearClick:function(){u("year",l)}}),null),v(vy,W(W({},e),{},{prefixCls:t,onSelect:function(p){s(p,"mouse")}}),null)])}py.displayName="QuarterPanel";py.inheritAttrs=!1;function hy(n){var e=it(n),t=e.prefixCls,r=e.generateConfig,a=e.viewDate,i=e.onPrevDecade,o=e.onNextDecade,l=e.onDecadeClick,u=ta(),s=u.hideHeader;if(s.value)return null;var c="".concat(t,"-header"),d=r.getYear(a),f=Math.floor(d/Wa)*Wa,p=f+Wa-1;return v(ri,W(W({},e),{},{prefixCls:c,onSuperPrev:i,onSuperNext:o}),{default:function(){return[v("button",{type:"button",onClick:l,class:"".concat(t,"-decade-btn")},[f,tt("-"),p])]}})}hy.displayName="YearHeader";hy.inheritAttrs=!1;var Vp=3,vx=4;function gy(n){var e=it(n),t=e.prefixCls,r=e.value,a=e.viewDate,i=e.locale,o=e.generateConfig,l=Iu(),u=l.rangedValue,s=l.hoverRangedValue,c="".concat(t,"-cell"),d=o.getYear(a),f=Math.floor(d/Wa)*Wa,p=f+Wa-1,g=o.setYear(a,f-Math.ceil((Vp*vx-Wa)/2)),y=function(b){var C=o.getYear(b);return f<=C&&C<=p},h=Vd({cellPrefixCls:c,value:r,generateConfig:o,rangedValue:u.value,hoverRangedValue:s.value,isSameCell:function(b,C){return $d(o,b,C)},isInView:y,offsetCell:function(b,C){return o.addYear(b,C)}});return v(Yi,W(W({},e),{},{rowNum:vx,colNum:Vp,baseDate:g,getCellText:o.getYear,getCellClassName:h,getCellDate:o.addYear,titleCell:function(b){return _t(b,{locale:i,format:"YYYY",generateConfig:o})}}),null)}gy.displayName="YearBody";gy.inheritAttrs=!1;var Wa=10;function my(n){var e=it(n),t=e.prefixCls,r=e.operationRef,a=e.onViewDateChange,i=e.generateConfig,o=e.value,l=e.viewDate,u=e.sourceMode,s=e.onSelect,c=e.onPanelChange,d="".concat(t,"-year-panel");r.value={onKeydown:function(g){return Jo(g,{onLeftRight:function(h){s(i.addYear(o||l,h),"key")},onCtrlLeftRight:function(h){s(i.addYear(o||l,h*Wa),"key")},onUpDown:function(h){s(i.addYear(o||l,h*Vp),"key")},onEnter:function(){c(u==="date"?"date":"month",o||l)}})}};var f=function(g){var y=i.addYear(l,g*10);a(y),c(null,y)};return v("div",{class:d},[v(hy,W(W({},e),{},{prefixCls:t,onPrevDecade:function(){f(-1)},onNextDecade:function(){f(1)},onDecadeClick:function(){c("decade",l)}}),null),v(gy,W(W({},e),{},{prefixCls:t,onSelect:function(g){c(u==="date"?"date":"month",g),s(g,"mouse")}}),null)])}my.displayName="YearPanel";my.inheritAttrs=!1;function p_(n,e,t){return t?v("div",{class:"".concat(n,"-footer-extra")},[t(e)]):null}function h_(n){var e=n.prefixCls,t=n.rangeList,r=t===void 0?[]:t,a=n.components,i=a===void 0?{}:a,o=n.needConfirmButton,l=n.onNow,u=n.onOk,s=n.okDisabled,c=n.showNow,d=n.locale,f,p;if(r.length){var g=i.rangeItem||"span";f=v(qe,null,[r.map(function(h){var m=h.label,b=h.onClick,C=h.onMouseenter,x=h.onMouseleave;return v("li",{key:m,class:"".concat(e,"-preset")},[v(g,{onClick:b,onMouseenter:C,onMouseleave:x},{default:function(){return[m]}})])})])}if(o){var y=i.button||"button";l&&!f&&c!==!1&&(f=v("li",{class:"".concat(e,"-now")},[v("a",{class:"".concat(e,"-now-btn"),onClick:l},[d.now])])),p=o&&v("li",{class:"".concat(e,"-ok")},[v(y,{disabled:s,onClick:u},{default:function(){return[d.ok]}})])}return!f&&!p?null:v("ul",{class:"".concat(e,"-ranges")},[f,p])}function PV(){return ae({name:"PickerPanel",inheritAttrs:!1,props:{prefixCls:String,locale:Object,generateConfig:Object,value:Object,defaultValue:Object,pickerValue:Object,defaultPickerValue:Object,disabledDate:Function,mode:String,picker:{type:String,default:"date"},tabindex:{type:[Number,String],default:0},showNow:{type:Boolean,default:void 0},showTime:[Boolean,Object],showToday:Boolean,renderExtraFooter:Function,dateRender:Function,hideHeader:{type:Boolean,default:void 0},onSelect:Function,onChange:Function,onPanelChange:Function,onMousedown:Function,onPickerValueChange:Function,onOk:Function,components:Object,direction:String,hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1}},setup:function(e,t){var r=t.attrs,a=R(function(){return e.picker==="date"&&!!e.showTime||e.picker==="time"}),i=R(function(){return 24%e.hourStep===0}),o=R(function(){return 60%e.minuteStep===0}),l=R(function(){return 60%e.secondStep===0}),u=ta(),s=u.operationRef,c=u.panelRef,d=u.onSelect,f=u.hideRanges,p=u.defaultOpenValue,g=Iu(),y=g.inRange,h=g.panelPosition,m=g.rangedValue,b=g.hoverRangedValue,C=q({}),x=Wn(null,{value:We(e,"value"),defaultValue:e.defaultValue,postState:function(z){return!z&&(p==null?void 0:p.value)&&e.picker==="time"?p.value:z}}),S=Te(x,2),w=S[0],_=S[1],P=Wn(null,{value:We(e,"pickerValue"),defaultValue:e.defaultPickerValue||w.value,postState:function(z){var J=e.generateConfig,ne=e.showTime,oe=e.defaultValue,ce=J.getNow();return z?!w.value&&e.showTime?Be(ne)==="object"?js(J,Array.isArray(z)?z[0]:z,ne.defaultValue||ce):oe?js(J,Array.isArray(z)?z[0]:z,oe):js(J,Array.isArray(z)?z[0]:z,ce):z:ce}}),k=Te(P,2),I=k[0],F=k[1],M=function(z){F(z),e.onPickerValueChange&&e.onPickerValueChange(z)},T=function(z){var J=fV[e.picker];return J?J(z):z},N=Wn(function(){return e.picker==="time"?"time":T("date")},{value:We(e,"mode")}),j=Te(N,2),$=j[0],A=j[1];Pe(function(){return e.picker},function(){A(e.picker)});var E=q($.value),L=function(z){E.value=z},B=function(z,J){var ne=e.onPanelChange,oe=e.generateConfig,ce=T(z||$.value);L($.value),A(ce),ne&&($.value!==ce||Oo(oe,I.value,I.value))&&ne(J,ce)},K=function(z,J){var ne=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,oe=e.picker,ce=e.generateConfig,se=e.onSelect,V=e.onChange,X=e.disabledDate;($.value===oe||ne)&&(_(z),se&&se(z),d&&d(z,J),V&&!Oo(ce,z,w.value)&&!(X!=null&&X(z))&&V(z))},H=function(z){return C.value&&C.value.onKeydown?([Ne.LEFT,Ne.RIGHT,Ne.UP,Ne.DOWN,Ne.PAGE_UP,Ne.PAGE_DOWN,Ne.ENTER].includes(z.which)&&z.preventDefault(),C.value.onKeydown(z)):!1},Z=function(z){C.value&&C.value.onBlur&&C.value.onBlur(z)},Y=function(){var z=e.generateConfig,J=e.hourStep,ne=e.minuteStep,oe=e.secondStep,ce=z.getNow(),se=rV(z.getHour(ce),z.getMinute(ce),z.getSecond(ce),i.value?J:1,o.value?ne:1,l.value?oe:1),V=t_(z,ce,se[0],se[1],se[2]);K(V,"submit")},G=R(function(){var Q,z=e.prefixCls,J=e.direction;return de("".concat(z,"-panel"),(Q={},D(Q,"".concat(z,"-panel-has-range"),m&&m.value&&m.value[0]&&m.value[1]),D(Q,"".concat(z,"-panel-has-range-hover"),b&&b.value&&b.value[0]&&b.value[1]),D(Q,"".concat(z,"-panel-rtl"),J==="rtl"),Q))});return ey(O(O({},u),{mode:$,hideHeader:R(function(){var Q;return e.hideHeader!==void 0?e.hideHeader:(Q=u.hideHeader)===null||Q===void 0?void 0:Q.value}),hidePrevBtn:R(function(){return y.value&&h.value==="right"}),hideNextBtn:R(function(){return y.value&&h.value==="left"})})),Pe(function(){return e.value},function(){e.value&&F(e.value)}),function(){var Q=e.prefixCls,z=Q===void 0?"ant-picker":Q,J=e.locale,ne=e.generateConfig,oe=e.disabledDate,ce=e.picker,se=ce===void 0?"date":ce,V=e.tabindex,X=V===void 0?0:V,ee=e.showNow,ue=e.showTime,ie=e.showToday,ge=e.renderExtraFooter,fe=e.onMousedown,re=e.onOk,le=e.components;s&&h.value!=="right"&&(s.value={onKeydown:H,onClose:function(){C.value&&C.value.onClose&&C.value.onClose()}});var te,he=O(O(O({},r),e),{operationRef:C,prefixCls:z,viewDate:I.value,value:w.value,onViewDateChange:M,sourceMode:E.value,onPanelChange:B,disabledDate:oe});switch(delete he.onChange,delete he.onSelect,$.value){case"decade":te=v(ry,W(W({},he),{},{onSelect:function(Fe,je){M(Fe),K(Fe,je)}}),null);break;case"year":te=v(my,W(W({},he),{},{onSelect:function(Fe,je){M(Fe),K(Fe,je)}}),null);break;case"month":te=v(dy,W(W({},he),{},{onSelect:function(Fe,je){M(Fe),K(Fe,je)}}),null);break;case"quarter":te=v(py,W(W({},he),{},{onSelect:function(Fe,je){M(Fe),K(Fe,je)}}),null);break;case"week":te=v(uy,W(W({},he),{},{onSelect:function(Fe,je){M(Fe),K(Fe,je)}}),null);break;case"time":delete he.showTime,te=v(Bd,W(W(W({},he),Be(ue)==="object"?ue:null),{},{onSelect:function(Fe,je){M(Fe),K(Fe,je)}}),null);break;default:ue?te=v(ly,W(W({},he),{},{onSelect:function(Fe,je){M(Fe),K(Fe,je)}}),null):te=v(Eu,W(W({},he),{},{onSelect:function(Fe,je){M(Fe),K(Fe,je)}}),null)}var ye,_e;f!=null&&f.value||(ye=p_(z,$.value,ge),_e=h_({prefixCls:z,components:le,needConfirmButton:a.value,okDisabled:!w.value||oe&&oe(w.value),locale:J,showNow:ee,onNow:a.value&&Y,onOk:function(){w.value&&(K(w.value,"submit",!0),re&&re(w.value))}}));var Me;if(ie&&$.value==="date"&&se==="date"&&!ue){var De=ne.getNow(),we="".concat(z,"-today-btn"),be=oe&&oe(De);Me=v("a",{class:de(we,be&&"".concat(we,"-disabled")),"aria-disabled":be,onClick:function(){be||K(De,"mouse",!0)}},[J.today])}return v("div",{tabindex:X,class:de(G.value,r.class),style:r.style,onKeydown:H,onBlur:Z,onMousedown:fe,ref:c},[te,ye||_e||Me?v("div",{class:"".concat(z,"-footer")},[ye,_e,Me]):null])}}})}var OV=PV();const yy=function(n){return v(OV,n)};var TV={bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:0,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:0,adjustY:1}}};function g_(n,e){var t,r=e.slots,a=it(n),i=a.prefixCls,o=a.popupStyle,l=a.visible,u=a.dropdownClassName,s=a.dropdownAlign,c=a.transitionName,d=a.getPopupContainer,f=a.range,p=a.popupPlacement,g=a.direction,y="".concat(i,"-dropdown"),h=function(){return p!==void 0?p:g==="rtl"?"bottomRight":"bottomLeft"};return v(Xo,{showAction:[],hideAction:[],popupPlacement:h(),builtinPlacements:TV,prefixCls:y,popupTransitionName:c,popupAlign:s,popupVisible:l,popupClassName:de(u,(t={},D(t,"".concat(y,"-range"),f),D(t,"".concat(y,"-rtl"),g==="rtl"),t)),popupStyle:o,getPopupContainer:d},{default:r.default,popup:r.popupElement})}function Kp(n){var e=n.open,t=n.value,r=n.isClickOutside,a=n.triggerOpen,i=n.forwardKeydown,o=n.onKeydown,l=n.blurToCancel,u=n.onSubmit,s=n.onCancel,c=n.onFocus,d=n.onBlur,f=q(!1),p=q(!1),g=q(!1),y=q(!1),h=q(!1),m=R(function(){return{onMousedown:function(){f.value=!0,a(!0)},onKeydown:function(x){var S=function(){h.value=!0};if(o(x,S),!h.value){switch(x.which){case Ne.ENTER:{e.value?u()!==!1&&(f.value=!0):a(!0),x.preventDefault();return}case Ne.TAB:{f.value&&e.value&&!x.shiftKey?(f.value=!1,x.preventDefault()):!f.value&&e.value&&!i(x)&&x.shiftKey&&(f.value=!0,x.preventDefault());return}case Ne.ESC:{f.value=!0,s();return}}!e.value&&![Ne.SHIFT].includes(x.which)?a(!0):f.value||i(x)}},onFocus:function(x){f.value=!0,p.value=!0,c&&c(x)},onBlur:function(x){if(g.value||!r(document.activeElement)){g.value=!1;return}l.value?setTimeout(function(){for(var S=document,w=S.activeElement;w&&w.shadowRoot;)w=w.shadowRoot.activeElement;r(w)&&s()},0):e.value&&(a(!1),y.value&&u()),p.value=!1,d&&d(x)}}});Pe(e,function(){y.value=!1}),Pe(t,function(){y.value=!0});var b=q();return Ye(function(){b.value=oV(function(C){var x=lV(C);if(e.value){var S=r(x);S?(!p.value||S)&&a(!1):(g.value=!0,Qe(function(){g.value=!1}))}})}),fn(function(){b.value&&b.value()}),[m,{focused:p,typing:f}]}function zp(n){var e=n.valueTexts,t=n.onTextChange,r=q("");function a(o){r.value=o,t(o)}function i(){r.value=e.value[0]}return Pe(function(){return Ee(e.value)},function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];o.join("||")!==l.join("||")&&e.value.every(function(u){return u!==r.value})&&i()},{immediate:!0}),[r,a,i]}function $c(n,e){var t=e.formatList,r=e.generateConfig,a=e.locale,i=Dm(function(){if(!n.value)return[[""],""];for(var u="",s=[],c=0;c<t.value.length;c+=1){var d=t.value[c],f=_t(n.value,{generateConfig:r.value,locale:a.value,format:d});s.push(f),c===0&&(u=f)}return[s,u]},[n,t],function(u,s){return s[0]!==u[0]||!co(s[1],u[1])}),o=R(function(){return i.value[0]}),l=R(function(){return i.value[1]});return[o,l]}function Hp(n,e){var t=e.formatList,r=e.generateConfig,a=e.locale,i=q(null),o;function l(p){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Qe.cancel(o),g){i.value=p;return}o=Qe(function(){i.value=p})}var u=$c(i,{formatList:t,generateConfig:r,locale:a}),s=Te(u,2),c=s[1];function d(p){l(p)}function f(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;l(null,p)}return Pe(n,function(){f(!0)}),fn(function(){Qe.cancel(o)}),[c,d,f]}function NV(){return ae({name:"Picker",inheritAttrs:!1,props:["prefixCls","id","tabindex","dropdownClassName","dropdownAlign","popupStyle","transitionName","generateConfig","locale","inputReadOnly","allowClear","autofocus","showTime","showNow","showHour","showMinute","showSecond","picker","format","use12Hours","value","defaultValue","open","defaultOpen","defaultOpenValue","suffixIcon","clearIcon","disabled","disabledDate","placeholder","getPopupContainer","panelRender","inputRender","onChange","onOpenChange","onFocus","onBlur","onMousedown","onMouseup","onMouseenter","onMouseleave","onContextmenu","onClick","onKeydown","onSelect","direction","autocomplete","showToday","renderExtraFooter","dateRender","minuteStep","hourStep","secondStep","hideDisabledOptions"],setup:function(e,t){var r=t.attrs,a=t.expose,i=q(null),o=R(function(){var V;return(V=e.picker)!==null&&V!==void 0?V:"date"}),l=R(function(){return o.value==="date"&&!!e.showTime||o.value==="time"}),u=R(function(){return c_(r_(e.format,o.value,e.showTime,e.use12Hours))}),s=q(null),c=q(null),d=q(null),f=Wn(null,{value:We(e,"value"),defaultValue:e.defaultValue}),p=Te(f,2),g=p[0],y=p[1],h=q(g.value),m=function(X){h.value=X},b=q(null),C=Wn(!1,{value:We(e,"open"),defaultValue:e.defaultOpen,postState:function(X){return e.disabled?!1:X},onChange:function(X){e.onOpenChange&&e.onOpenChange(X),!X&&b.value&&b.value.onClose&&b.value.onClose()}}),x=Te(C,2),S=x[0],w=x[1],_=$c(h,{formatList:u,generateConfig:We(e,"generateConfig"),locale:We(e,"locale")}),P=Te(_,2),k=P[0],I=P[1],F=zp({valueTexts:k,onTextChange:function(X){var ee=u_(X,{locale:e.locale,formatList:u.value,generateConfig:e.generateConfig});ee&&(!e.disabledDate||!e.disabledDate(ee))&&m(ee)}}),M=Te(F,3),T=M[0],N=M[1],j=M[2],$=function(X){var ee=e.onChange,ue=e.generateConfig,ie=e.locale;m(X),y(X),ee&&!Oo(ue,g.value,X)&&ee(X,X?_t(X,{generateConfig:ue,locale:ie,format:u.value[0]}):"")},A=function(X){e.disabled&&X||w(X)},E=function(X){return S.value&&b.value&&b.value.onKeydown?b.value.onKeydown(X):!1},L=function(){e.onMouseup&&e.onMouseup.apply(e,arguments),i.value&&(i.value.focus(),A(!0))},B=Kp({blurToCancel:l,open:S,value:T,triggerOpen:A,forwardKeydown:E,isClickOutside:function(X){return!i_([s.value,c.value,d.value],X)},onSubmit:function(){return!h.value||e.disabledDate&&e.disabledDate(h.value)?!1:($(h.value),A(!1),j(),!0)},onCancel:function(){A(!1),m(g.value),j()},onKeydown:function(X,ee){var ue;(ue=e.onKeydown)===null||ue===void 0||ue.call(e,X,ee)},onFocus:function(X){var ee;(ee=e.onFocus)===null||ee===void 0||ee.call(e,X)},onBlur:function(X){var ee;(ee=e.onBlur)===null||ee===void 0||ee.call(e,X)}}),K=Te(B,2),H=K[0],Z=K[1],Y=Z.focused,G=Z.typing;Pe([S,k],function(){S.value||(m(g.value),!k.value.length||k.value[0]===""?N(""):I.value!==T.value&&j())}),Pe(o,function(){S.value||j()}),Pe(g,function(){m(g.value)});var Q=Hp(T,{formatList:u,generateConfig:We(e,"generateConfig"),locale:We(e,"locale")}),z=Te(Q,3),J=z[0],ne=z[1],oe=z[2],ce=function(X,ee){(ee==="submit"||ee!=="key"&&!l.value)&&($(X),A(!1))};ey({operationRef:b,hideHeader:R(function(){return o.value==="time"}),panelRef:s,onSelect:ce,open:S,defaultOpenValue:We(e,"defaultOpenValue"),onDateMouseenter:ne,onDateMouseleave:oe}),a({focus:function(){i.value&&i.value.focus()},blur:function(){i.value&&i.value.blur()}});var se=L3();return function(){var V,X=e.prefixCls,ee=X===void 0?"rc-picker":X,ue=e.id,ie=e.tabindex,ge=e.dropdownClassName,fe=e.dropdownAlign,re=e.popupStyle,le=e.transitionName,te=e.generateConfig,he=e.locale,ye=e.inputReadOnly,_e=e.allowClear,Me=e.autofocus,De=e.picker,we=De===void 0?"date":De;e.defaultOpenValue;var be=e.suffixIcon,Se=e.clearIcon,Fe=e.disabled,je=e.placeholder,ke=e.getPopupContainer,Ce=e.panelRender,ve=e.onMousedown,me=e.onMouseenter,Oe=e.onMouseleave,Ie=e.onContextmenu,xe=e.onClick,pe=e.onSelect,Ae=e.direction,$e=e.autocomplete,Re=$e===void 0?"off":$e,Ke=O(O(O({},e),r),{class:de(D({},"".concat(ee,"-panel-focused"),!G.value)),style:void 0,pickerValue:void 0,onPickerValueChange:void 0,onChange:null}),Ve=v(yy,W(W({},Ke),{},{generateConfig:te,value:h.value,locale:he,tabindex:-1,onSelect:function(pn){pe==null||pe(pn),m(pn)},direction:Ae,onPanelChange:function(pn,Dn){var Pn=e.onPanelChange;oe(!0),Pn==null||Pn(pn,Dn)}}),null);Ce&&(Ve=Ce(Ve));var ze=v("div",{class:"".concat(ee,"-panel-container"),onMousedown:function(pn){pn.preventDefault()}},[Ve]),He;be&&(He=v("span",{class:"".concat(ee,"-suffix")},[be]));var en;_e&&g.value&&!Fe&&(en=v("span",{onMousedown:function(pn){pn.preventDefault(),pn.stopPropagation()},onMouseup:function(pn){pn.preventDefault(),pn.stopPropagation(),$(null),A(!1)},class:"".concat(ee,"-clear"),role:"button"},[Se||v("span",{class:"".concat(ee,"-clear-btn")},null)]));var mn=O(O(O(O({id:ue,tabindex:ie,disabled:Fe,readonly:ye||typeof u.value[0]=="function"||!G.value,value:J.value||T.value,onInput:function(pn){N(pn.target.value)},autofocus:Me,placeholder:je,ref:i,title:T.value},H.value),{size:a_(we,u.value[0],te)}),d_(e)),{autocomplete:Re}),nn=e.inputRender?e.inputRender(mn):v("input",mn,null),Je=Ae==="rtl"?"bottomRight":"bottomLeft";return v(g_,{visible:S.value,popupStyle:re,prefixCls:ee,dropdownClassName:ge,dropdownAlign:fe,getPopupContainer:ke,transitionName:le,popupPlacement:Je,direction:Ae},{default:function(){return[v("div",{ref:d,class:de(ee,r.class,(V={},D(V,"".concat(ee,"-disabled"),Fe),D(V,"".concat(ee,"-focused"),Y.value),D(V,"".concat(ee,"-rtl"),Ae==="rtl"),V)),style:r.style,onMousedown:ve,onMouseup:L,onMouseenter:me,onMouseleave:Oe,onContextmenu:Ie,onClick:xe},[v("div",{class:de("".concat(ee,"-input"),D({},"".concat(ee,"-input-placeholder"),!!J.value)),ref:c},[nn,He,en]),se()])]},popupElement:function(){return ze}})}}})}const IV=NV();function EV(n,e){var t=n.picker,r=n.locale,a=n.selectedValue,i=n.disabledDate,o=n.disabled,l=n.generateConfig,u=R(function(){return Nn(a.value,0)}),s=R(function(){return Nn(a.value,1)});function c(y){return l.value.locale.getWeekFirstDate(r.value.locale,y)}function d(y){var h=l.value.getYear(y),m=l.value.getMonth(y);return h*100+m}function f(y){var h=l.value.getYear(y),m=$p(l.value,y);return h*10+m}var p=function(h){var m;if(i&&((m=i==null?void 0:i.value)===null||m===void 0?void 0:m.call(i,h)))return!0;if(o[1]&&s)return!ba(l.value,h,s.value)&&l.value.isAfter(h,s.value);if(e.value[1]&&s.value)switch(t.value){case"quarter":return f(h)>f(s.value);case"month":return d(h)>d(s.value);case"week":return c(h)>c(s.value);default:return!ba(l.value,h,s.value)&&l.value.isAfter(h,s.value)}return!1},g=function(h){var m;if(!((m=i.value)===null||m===void 0)&&m.call(i,h))return!0;if(o[0]&&u)return!ba(l.value,h,s.value)&&l.value.isAfter(u.value,h);if(e.value[0]&&u.value)switch(t.value){case"quarter":return f(h)<f(u.value);case"month":return d(h)<d(u.value);case"week":return c(h)<c(u.value);default:return!ba(l.value,h,u.value)&&l.value.isAfter(u.value,h)}return!1};return[p,g]}function MV(n,e,t,r){var a=jl(n,t,r,1);function i(o){return o(n,e)?"same":o(a,e)?"closing":"far"}switch(t){case"year":return i(function(o,l){return vV(r,o,l)});case"quarter":case"month":return i(function(o,l){return $d(r,o,l)});default:return i(function(o,l){return ay(r,o,l)})}}function AV(n,e,t,r){var a=Nn(n,0),i=Nn(n,1);if(e===0)return a;if(a&&i){var o=MV(a,i,t,r);switch(o){case"same":return a;case"closing":return a;default:return jl(i,t,r,-1)}}return a}function FV(n){var e=n.values,t=n.picker,r=n.defaultDates,a=n.generateConfig,i=q([Nn(r,0),Nn(r,1)]),o=q(null),l=R(function(){return Nn(e.value,0)}),u=R(function(){return Nn(e.value,1)}),s=function(g){return i.value[g]?i.value[g]:Nn(o.value,g)||AV(e.value,g,t.value,a.value)||l.value||u.value||a.value.getNow()},c=q(null),d=q(null);Ze(function(){c.value=s(0),d.value=s(1)});function f(p,g){if(p){var y=fr(o.value,p,g);i.value=fr(i.value,null,g)||[null,null];var h=(g+1)%2;Nn(e.value,h)||(y=fr(y,p,h)),o.value=y}else(l.value||u.value)&&(o.value=null)}return[c,d,f]}function px(n,e){return n&&n[0]&&n[1]&&e.isAfter(n[0],n[1])?[n[1],n[0]]:n}function hx(n,e,t,r){return!!(n||r&&r[e]||t[(e+1)%2])}function jV(){return ae({name:"RangerPicker",inheritAttrs:!1,props:["prefixCls","id","popupStyle","dropdownClassName","transitionName","dropdownAlign","getPopupContainer","generateConfig","locale","placeholder","autofocus","disabled","format","picker","showTime","showNow","showHour","showMinute","showSecond","use12Hours","separator","value","defaultValue","defaultPickerValue","open","defaultOpen","disabledDate","disabledTime","dateRender","panelRender","ranges","allowEmpty","allowClear","suffixIcon","clearIcon","pickerRef","inputReadOnly","mode","renderExtraFooter","onChange","onOpenChange","onPanelChange","onCalendarChange","onFocus","onBlur","onMousedown","onMouseup","onMouseenter","onMouseleave","onClick","onOk","onKeydown","components","order","direction","activePickerIndex","autocomplete","minuteStep","hourStep","secondStep","hideDisabledOptions","disabledMinutes"],setup:function(e,t){var r=t.attrs,a=t.expose,i=R(function(){return e.picker==="date"&&!!e.showTime||e.picker==="time"}),o=L3(),l=q({}),u=q(null),s=q(null),c=q(null),d=q(null),f=q(null),p=q(null),g=q(null),y=q(null),h=R(function(){return c_(r_(e.format,e.picker,e.showTime,e.use12Hours))}),m=Wn(0,{value:We(e,"activePickerIndex")}),b=Te(m,2),C=b[0],x=b[1],S=q(null),w=R(function(){var sn=e.disabled;return Array.isArray(sn)?sn:[sn||!1,sn||!1]}),_=Wn(null,{value:We(e,"value"),defaultValue:e.defaultValue,postState:function(Ue){return e.picker==="time"&&!e.order?Ue:px(Ue,e.generateConfig)}}),P=Te(_,2),k=P[0],I=P[1],F=FV({values:k,picker:We(e,"picker"),defaultDates:e.defaultPickerValue,generateConfig:We(e,"generateConfig")}),M=Te(F,3),T=M[0],N=M[1],j=M[2],$=Wn(k.value,{postState:function(Ue){var Ge=Ue;if(w.value[0]&&w.value[1])return Ge;for(var rn=0;rn<2;rn+=1)w[rn]&&!Nn(Ge,rn)&&!Nn(e.allowEmpty,rn)&&(Ge=fr(Ge,e.generateConfig.getNow(),rn));return Ge}}),A=Te($,2),E=A[0],L=A[1],B=Wn([e.picker,e.picker],{value:We(e,"mode")}),K=Te(B,2),H=K[0],Z=K[1];Pe(function(){return e.picker},function(){Z([e.picker,e.picker])});var Y=function(Ue,Ge){var rn;Z(Ue),(rn=e.onPanelChange)===null||rn===void 0||rn.call(e,Ge,Ue)},G=EV({picker:We(e,"picker"),selectedValue:E,locale:We(e,"locale"),disabled:w,disabledDate:We(e,"disabledDate"),generateConfig:We(e,"generateConfig")},l),Q=Te(G,2),z=Q[0],J=Q[1],ne=Wn(!1,{value:We(e,"open"),defaultValue:e.defaultOpen,postState:function(Ue){return w.value[C.value]?!1:Ue},onChange:function(Ue){var Ge;(Ge=e.onOpenChange)===null||Ge===void 0||Ge.call(e,Ue),!Ue&&S.value&&S.value.onClose&&S.value.onClose()}}),oe=Te(ne,2),ce=oe[0],se=oe[1],V=R(function(){return ce.value&&C.value===0}),X=R(function(){return ce.value&&C.value===1}),ee=q(0);Pe(ce,function(){!ce.value&&u.value&&(ee.value=u.value.offsetWidth)});var ue=q();function ie(sn,Ue){if(sn)clearTimeout(ue.value),l.value[Ue]=!0,x(Ue),se(sn),ce.value||j(null,Ue);else if(C.value===Ue){se(sn);var Ge=l.value;ue.value=setTimeout(function(){Ge===l.value&&(l.value={})})}}function ge(sn){ie(!0,sn),setTimeout(function(){var Ue=[p,g][sn];Ue.value&&Ue.value.focus()},0)}function fe(sn,Ue){var Ge=sn,rn=Nn(Ge,0),hn=Nn(Ge,1),nt=e.generateConfig,Ta=e.locale,Dr=e.picker,rl=e.order,ai=e.onCalendarChange,Zi=e.allowEmpty,ia=e.onChange,al=e.showTime;rn&&hn&&nt.isAfter(rn,hn)&&(Dr==="week"&&!l_(nt,Ta.locale,rn,hn)||Dr==="quarter"&&!o_(nt,rn,hn)||Dr!=="week"&&Dr!=="quarter"&&Dr!=="time"&&!(al?Oo(nt,rn,hn):ba(nt,rn,hn))?(Ue===0?(Ge=[rn,null],hn=null):(rn=null,Ge=[null,hn]),l.value=D({},Ue,!0)):(Dr!=="time"||rl!==!1)&&(Ge=px(Ge,nt))),L(Ge);var Lr=Ge&&Ge[0]?_t(Ge[0],{generateConfig:nt,locale:Ta,format:h.value[0]}):"",br=Ge&&Ge[1]?_t(Ge[1],{generateConfig:nt,locale:Ta,format:h.value[0]}):"";if(ai){var Rr={range:Ue===0?"start":"end"};ai(Ge,[Lr,br],Rr)}var ir=hx(rn,0,w.value,Zi),yf=hx(hn,1,w.value,Zi),Bu=Ge===null||ir&&yf;Bu&&(I(Ge),ia&&(!Oo(nt,Nn(k.value,0),rn)||!Oo(nt,Nn(k.value,1),hn))&&ia(Ge,[Lr,br]));var oa=null;Ue===0&&!w.value[1]?oa=1:Ue===1&&!w.value[0]&&(oa=0),oa!==null&&oa!==C.value&&(!l.value[oa]||!Nn(Ge,oa))&&Nn(Ge,Ue)?ge(oa):ie(!1,Ue)}var re=function(Ue){return ce&&S.value&&S.value.onKeydown?S.value.onKeydown(Ue):!1},le={formatList:h,generateConfig:We(e,"generateConfig"),locale:We(e,"locale")},te=$c(R(function(){return Nn(E.value,0)}),le),he=Te(te,2),ye=he[0],_e=he[1],Me=$c(R(function(){return Nn(E.value,1)}),le),De=Te(Me,2),we=De[0],be=De[1],Se=function(Ue,Ge){var rn=u_(Ue,{locale:e.locale,formatList:h.value,generateConfig:e.generateConfig}),hn=Ge===0?z:J;rn&&!hn(rn)&&(L(fr(E.value,rn,Ge)),j(rn,Ge))},Fe=zp({valueTexts:ye,onTextChange:function(Ue){return Se(Ue,0)}}),je=Te(Fe,3),ke=je[0],Ce=je[1],ve=je[2],me=zp({valueTexts:we,onTextChange:function(Ue){return Se(Ue,1)}}),Oe=Te(me,3),Ie=Oe[0],xe=Oe[1],pe=Oe[2],Ae=Ln(null),$e=Te(Ae,2),Re=$e[0],Ke=$e[1],Ve=Ln(null),ze=Te(Ve,2),He=ze[0],en=ze[1],mn=Hp(ke,le),nn=Te(mn,3),Je=nn[0],bn=nn[1],pn=nn[2],Dn=Hp(Ie,le),Pn=Te(Dn,3),et=Pn[0],Xn=Pn[1],Mn=Pn[2],Kn=function(Ue){en(fr(E.value,Ue,C.value)),C.value===0?bn(Ue):Xn(Ue)},Zn=function(){en(fr(E.value,null,C.value)),C.value===0?pn():Mn()},ut=function(Ue,Ge){return{forwardKeydown:re,onBlur:function(hn){var nt;(nt=e.onBlur)===null||nt===void 0||nt.call(e,hn)},isClickOutside:function(hn){return!i_([s.value,c.value,d.value,u.value],hn)},onFocus:function(hn){var nt;x(Ue),(nt=e.onFocus)===null||nt===void 0||nt.call(e,hn)},triggerOpen:function(hn){ie(hn,Ue)},onSubmit:function(){if(!E.value||e.disabledDate&&e.disabledDate(E.value[Ue]))return!1;fe(E.value,Ue),Ge()},onCancel:function(){ie(!1,Ue),L(k.value),Ge()}}},zn=Kp(O(O({},ut(0,ve)),{blurToCancel:i,open:V,value:ke,onKeydown:function(Ue,Ge){var rn;(rn=e.onKeydown)===null||rn===void 0||rn.call(e,Ue,Ge)}})),Rt=Te(zn,2),ar=Rt[0],aa=Rt[1],Ht=aa.focused,It=aa.typing,qn=Kp(O(O({},ut(1,pe)),{blurToCancel:i,open:X,value:Ie,onKeydown:function(Ue,Ge){var rn;(rn=e.onKeydown)===null||rn===void 0||rn.call(e,Ue,Ge)}})),ft=Te(qn,2),Oa=ft[0],d1=ft[1],f1=d1.focused,v1=d1.typing,b8=function(Ue){var Ge;(Ge=e.onClick)===null||Ge===void 0||Ge.call(e,Ue),!ce.value&&!p.value.contains(Ue.target)&&!g.value.contains(Ue.target)&&(w.value[0]?w.value[1]||ge(1):ge(0))},C8=function(Ue){var Ge;(Ge=e.onMousedown)===null||Ge===void 0||Ge.call(e,Ue),ce.value&&(Ht.value||f1.value)&&!p.value.contains(Ue.target)&&!g.value.contains(Ue.target)&&Ue.preventDefault()},x8=R(function(){var sn;return!((sn=k.value)===null||sn===void 0)&&sn[0]?_t(k.value[0],{locale:e.locale,format:"YYYYMMDDHHmmss",generateConfig:e.generateConfig}):""}),w8=R(function(){var sn;return!((sn=k.value)===null||sn===void 0)&&sn[1]?_t(k.value[1],{locale:e.locale,format:"YYYYMMDDHHmmss",generateConfig:e.generateConfig}):""});Pe([ce,ye,we],function(){ce.value||(L(k.value),!ye.value.length||ye.value[0]===""?Ce(""):_e.value!==ke.value&&ve(),!we.value.length||we.value[0]===""?xe(""):be.value!==Ie.value&&pe())}),Pe([x8,w8],function(){L(k.value)}),a({focus:function(){p.value&&p.value.focus()},blur:function(){p.value&&p.value.blur(),g.value&&g.value.blur()}});var S8=R(function(){return Object.keys(e.ranges||{}).map(function(sn){var Ue=e.ranges[sn],Ge=typeof Ue=="function"?Ue():Ue;return{label:sn,onClick:function(){fe(Ge,null),ie(!1,C.value)},onMouseenter:function(){Ke(Ge)},onMouseleave:function(){Ke(null)}}})}),_8=R(function(){return ce.value&&He.value&&He.value[0]&&He.value[1]&&e.generateConfig.isAfter(He.value[1],He.value[0])?He.value:null});function mf(){var sn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,Ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Ge=e.generateConfig,rn=e.showTime,hn=e.dateRender,nt=e.direction,Ta=e.disabledTime,Dr=e.prefixCls,rl=e.locale,ai=rn;if(rn&&Be(rn)==="object"&&rn.defaultValue){var Zi=rn.defaultValue;ai=O(O({},rn),{defaultValue:Nn(Zi,C.value)||void 0})}var ia=null;return hn&&(ia=function(Lr){var br=Lr.current,Rr=Lr.today;return hn({current:br,today:Rr,info:{range:C.value?"end":"start"}})}),v(xV,{value:{inRange:!0,panelPosition:sn,rangedValue:Re.value||E.value,hoverRangedValue:_8.value}},{default:function(){return[v(yy,W(W(W({},e),Ue),{},{dateRender:ia,showTime:ai,mode:H.value[C.value],generateConfig:Ge,style:void 0,direction:nt,disabledDate:C.value===0?z:J,disabledTime:function(br){return Ta?Ta(br,C.value===0?"start":"end"):!1},class:de(D({},"".concat(Dr,"-panel-focused"),C.value===0?!It.value:!v1.value)),value:Nn(E.value,C.value),locale:rl,tabIndex:-1,onPanelChange:function(br,Rr){C.value===0&&pn(!0),C.value===1&&Mn(!0),Y(fr(H.value,Rr,C.value),fr(E.value,br,C.value));var ir=br;sn==="right"&&H.value[C.value]===Rr&&(ir=jl(ir,Rr,Ge,-1)),j(ir,C.value)},onOk:null,onSelect:void 0,onChange:void 0,defaultValue:C.value===0?Nn(E.value,1):Nn(E.value,0)}),null)]}})}var k8=function(Ue,Ge){var rn=fr(E.value,Ue,C.value);Ge==="submit"||Ge!=="key"&&!i.value?(fe(rn,C.value),C.value===0?pn():Mn()):L(rn)};return ey({operationRef:S,hideHeader:R(function(){return e.picker==="time"}),onDateMouseenter:Kn,onDateMouseleave:Zn,hideRanges:R(function(){return!0}),onSelect:k8,open:ce}),function(){var sn,Ue,Ge,rn=e.prefixCls,hn=rn===void 0?"rc-picker":rn,nt=e.id,Ta=e.popupStyle,Dr=e.dropdownClassName,rl=e.transitionName,ai=e.dropdownAlign,Zi=e.getPopupContainer,ia=e.generateConfig,al=e.locale,Lr=e.placeholder,br=e.autofocus,Rr=e.picker,ir=Rr===void 0?"date":Rr,yf=e.showTime,Bu=e.separator,oa=Bu===void 0?"~":Bu,p1=e.disabledDate,h1=e.panelRender,P8=e.allowClear,g1=e.suffixIcon,O8=e.clearIcon,m1=e.inputReadOnly,T8=e.renderExtraFooter,N8=e.onMouseenter,I8=e.onMouseleave,E8=e.onMouseup,y1=e.onOk,M8=e.components,Qi=e.direction,b1=e.autocomplete,C1=b1===void 0?"off":b1,ii=0,x1=0;C.value&&c.value&&f.value&&s.value&&(ii=c.value.offsetWidth+f.value.offsetWidth,s.value.offsetWidth&&y.value.offsetWidth&&ii>s.value.offsetWidth-y.value.offsetWidth-(Qi==="rtl"||y.value.offsetLeft>ii?0:y.value.offsetLeft)&&(x1=ii));var A8=Qi==="rtl"?{right:"".concat(ii,"px")}:{left:"".concat(ii,"px")};function F8(){var Na,$r=p_(hn,H.value[C.value],T8),or=h_({prefixCls:hn,components:M8,needConfirmButton:i.value,okDisabled:!Nn(E.value,C.value)||p1&&p1(E.value[C.value]),locale:al,rangeList:S8.value,onOk:function(){Nn(E.value,C.value)&&(fe(E.value,C.value),y1&&y1(E.value))}});if(ir!=="time"&&!yf){var k1=C.value===0?T.value:N.value,L8=jl(k1,ir,ia),R8=H.value[C.value],xf=R8===ir,P1=mf(xf?"left":!1,{pickerValue:k1,onPickerValueChange:function(il){j(il,C.value)}}),O1=mf("right",{pickerValue:L8,onPickerValueChange:function(il){j(jl(il,ir,ia,-1),C.value)}});Qi==="rtl"?Na=v(qe,null,[O1,xf&&P1]):Na=v(qe,null,[P1,xf&&O1])}else Na=mf();var wf=v(qe,null,[v("div",{class:"".concat(hn,"-panels")},[Na]),($r||or)&&v("div",{class:"".concat(hn,"-footer")},[$r,or])]);return h1&&(wf=h1(wf)),v("div",{class:"".concat(hn,"-panel-container"),style:{marginLeft:"".concat(x1,"px")},ref:s,onMousedown:function(il){il.preventDefault()}},[wf])}var j8=v("div",{class:de("".concat(hn,"-range-wrapper"),"".concat(hn,"-").concat(ir,"-range-wrapper")),style:{minWidth:"".concat(ee.value,"px")}},[v("div",{ref:y,class:"".concat(hn,"-range-arrow"),style:A8},null),F8()]),w1;g1&&(w1=v("span",{class:"".concat(hn,"-suffix")},[g1]));var S1;P8&&(Nn(k.value,0)&&!w.value[0]||Nn(k.value,1)&&!w.value[1])&&(S1=v("span",{onMousedown:function($r){$r.preventDefault(),$r.stopPropagation()},onMouseup:function($r){$r.preventDefault(),$r.stopPropagation();var or=k.value;w.value[0]||(or=fr(or,null,0)),w.value[1]||(or=fr(or,null,1)),fe(or,null),ie(!1,C.value)},class:"".concat(hn,"-clear")},[O8||v("span",{class:"".concat(hn,"-clear-btn")},null)]));var _1={size:a_(ir,h.value[0],ia)},bf=0,Cf=0;c.value&&d.value&&f.value&&(C.value===0?Cf=c.value.offsetWidth:(bf=ii,Cf=d.value.offsetWidth));var D8=Qi==="rtl"?{right:"".concat(bf,"px")}:{left:"".concat(bf,"px")};return v(g_,{visible:ce.value,popupStyle:Ta,prefixCls:hn,dropdownClassName:Dr,dropdownAlign:ai,getPopupContainer:Zi,transitionName:rl,range:!0,direction:Qi},{default:function(){return[v("div",W({ref:u,class:de(hn,"".concat(hn,"-range"),r.class,(sn={},D(sn,"".concat(hn,"-disabled"),w.value[0]&&w.value[1]),D(sn,"".concat(hn,"-focused"),C.value===0?Ht.value:f1.value),D(sn,"".concat(hn,"-rtl"),Qi==="rtl"),sn)),style:r.style,onClick:b8,onMouseenter:N8,onMouseleave:I8,onMousedown:C8,onMouseup:E8},d_(e)),[v("div",{class:de("".concat(hn,"-input"),(Ue={},D(Ue,"".concat(hn,"-input-active"),C.value===0),D(Ue,"".concat(hn,"-input-placeholder"),!!Je.value),Ue)),ref:c},[v("input",W(W(W({id:nt,disabled:w.value[0],readonly:m1||typeof h.value[0]=="function"||!It.value,value:Je.value||ke.value,onInput:function(or){Ce(or.target.value)},autofocus:br,placeholder:Nn(Lr,0)||"",ref:p},ar.value),_1),{},{autocomplete:C1}),null)]),v("div",{class:"".concat(hn,"-range-separator"),ref:f},[oa]),v("div",{class:de("".concat(hn,"-input"),(Ge={},D(Ge,"".concat(hn,"-input-active"),C.value===1),D(Ge,"".concat(hn,"-input-placeholder"),!!et.value),Ge)),ref:d},[v("input",W(W(W({disabled:w.value[1],readonly:m1||typeof h.value[0]=="function"||!v1.value,value:et.value||Ie.value,onInput:function(or){xe(or.target.value)},placeholder:Nn(Lr,1)||"",ref:g},Oa.value),_1),{},{autocomplete:C1}),null)]),v("div",{class:"".concat(hn,"-active-bar"),style:O(O({},D8),{width:"".concat(Cf,"px"),position:"absolute"})},null),w1,S1,o()])]},popupElement:function(){return j8}})}}})}var DV=jV();const LV=DV;var RV=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},$V={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:U.any,required:Boolean};const m_=ae({name:"Checkbox",inheritAttrs:!1,props:vn($V,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(e,t){var r=t.attrs,a=t.emit,i=t.expose,o=q(e.checked===void 0?e.defaultChecked:e.checked),l=q();Pe(function(){return e.checked},function(){o.value=e.checked}),i({focus:function(){var f;(f=l.value)===null||f===void 0||f.focus()},blur:function(){var f;(f=l.value)===null||f===void 0||f.blur()}});var u=q(),s=function(f){if(!e.disabled){e.checked===void 0&&(o.value=f.target.checked),f.shiftKey=u.value;var p={target:O(O({},e),{checked:f.target.checked}),stopPropagation:function(){f.stopPropagation()},preventDefault:function(){f.preventDefault()},nativeEvent:f};e.checked!==void 0&&(l.value.checked=!!e.checked),a("change",p),u.value=!1}},c=function(f){a("click",f),u.value=f.shiftKey};return function(){var d,f=e.prefixCls,p=e.name,g=e.id,y=e.type,h=e.disabled,m=e.readonly,b=e.tabindex,C=e.autofocus,x=e.value,S=e.required,w=RV(e,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),_=r.class,P=r.onFocus,k=r.onBlur,I=r.onKeydown,F=r.onKeypress,M=r.onKeyup,T=O(O({},w),r),N=Object.keys(T).reduce(function(A,E){return(E.startsWith("data-")||E.startsWith("aria-")||E==="role")&&(A[E]=T[E]),A},{}),j=de(f,_,(d={},D(d,"".concat(f,"-checked"),o.value),D(d,"".concat(f,"-disabled"),h),d)),$=O(O({name:p,id:g,type:y,readonly:m,disabled:h,tabindex:b,class:"".concat(f,"-input"),checked:!!o.value,autofocus:C,value:x},N),{onChange:s,onClick:c,onFocus:P,onBlur:k,onKeydown:I,onKeypress:F,onKeyup:M,required:S});return v("span",{class:j},[v("input",W({ref:l},$),null),v("span",{class:"".concat(f,"-inner")},null)])}}});var y_=Symbol("radioGroupContextKey"),BV=function(e){ln(y_,e)},VV=function(){return on(y_,void 0)},b_=Symbol("radioOptionTypeContextKey"),KV=function(e){ln(b_,e)},zV=function(){return on(b_,void 0)},HV=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},C_=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:U.any,name:String,id:String,autofocus:{type:Boolean,default:void 0},onChange:Function,onFocus:Function,onBlur:Function,onClick:Function,"onUpdate:checked":Function,"onUpdate:value":Function}};const At=ae({name:"ARadio",props:C_(),setup:function(e,t){var r=t.emit,a=t.expose,i=t.slots,o=lt(),l=pt.useInject(),u=zV(),s=VV(),c=q(),d=Le("radio",e),f=d.prefixCls,p=d.direction,g=R(function(){return((s==null?void 0:s.optionType.value)||u)==="button"?"".concat(f.value,"-button"):f.value}),y=function(){c.value.focus()},h=function(){c.value.blur()};a({focus:y,blur:h});var m=function(x){var S=x.target.checked;r("update:checked",S),r("update:value",S),r("change",x),o.onFieldChange()},b=function(x){r("change",x),s&&s.onChange&&s.onChange(x)};return function(){var C,x=s;e.prefixCls;var S=e.id,w=S===void 0?o.id.value:S,_=HV(e,["prefixCls","id"]),P=O({prefixCls:g.value,id:w},un(_,["onUpdate:checked","onUpdate:value"]));x?(P.name=x.name.value,P.onChange=b,P.checked=e.value===x.value.value,P.disabled=e.disabled||x.disabled.value):P.onChange=m;var k=de((C={},D(C,"".concat(g.value,"-wrapper"),!0),D(C,"".concat(g.value,"-wrapper-checked"),P.checked),D(C,"".concat(g.value,"-wrapper-disabled"),P.disabled),D(C,"".concat(g.value,"-wrapper-rtl"),p.value==="rtl"),D(C,"".concat(g.value,"-wrapper-in-form-item"),l.isFormItemInput),C));return v("label",{class:k},[v(m_,W(W({},P),{},{type:"radio",ref:c}),null),i.default&&v("span",null,[i.default()])])}}});var WV=jn("large","default","small"),UV=function(){return{prefixCls:String,value:U.any,size:U.oneOf(WV),options:{type:Array},disabled:{type:Boolean,default:void 0},name:String,buttonStyle:{type:String,default:"outline"},id:String,optionType:{type:String,default:"default"},onChange:Function,"onUpdate:value":Function}};const by=ae({name:"ARadioGroup",props:UV(),setup:function(e,t){var r=t.slots,a=t.emit,i=lt(),o=Le("radio",e),l=o.prefixCls,u=o.direction,s=o.size,c=q(e.value),d=q(!1);Pe(function(){return e.value},function(p){c.value=p,d.value=!1});var f=function(g){var y=c.value,h=g.target.value;"value"in e||(c.value=h),!d.value&&h!==y&&(d.value=!0,a("update:value",h),a("change",g),i.onFieldChange()),dn(function(){d.value=!1})};return BV({onChange:f,value:c,disabled:R(function(){return e.disabled}),name:R(function(){return e.name}),optionType:R(function(){return e.optionType})}),function(){var p,g,y=e.options,h=e.buttonStyle,m=e.id,b=m===void 0?i.id.value:m,C="".concat(l.value,"-group"),x=de(C,"".concat(C,"-").concat(h),(p={},D(p,"".concat(C,"-").concat(s.value),s.value),D(p,"".concat(C,"-rtl"),u.value==="rtl"),p)),S=null;return y&&y.length>0?S=y.map(function(w){if(typeof w=="string"||typeof w=="number")return v(At,{key:w,prefixCls:l.value,disabled:e.disabled,value:w,checked:c.value===w},{default:function(){return[w]}});var _=w.value,P=w.disabled,k=w.label;return v(At,{key:"radio-group-value-options-".concat(_),prefixCls:l.value,disabled:P||e.disabled,value:_,checked:c.value===_},{default:function(){return[k]}})}):S=(g=r.default)===null||g===void 0?void 0:g.call(r),v("div",{class:x,id:b},[S])}}}),Bc=ae({name:"ARadioButton",props:C_(),setup:function(e,t){var r=t.slots,a=Le("radio-button",e),i=a.prefixCls;return KV("button"),function(){var o;return v(At,W(W({},e),{},{prefixCls:i.value}),{default:function(){return[(o=r.default)===null||o===void 0?void 0:o.call(r)]}})}}});At.Group=by;At.Button=Bc;At.install=function(n){return n.component(At.name,At),n.component(At.Group.name,At.Group),n.component(At.Button.name,At.Button),n};var qV=10,YV=20;function x_(n){var e=n.fullscreen,t=n.validRange,r=n.generateConfig,a=n.locale,i=n.prefixCls,o=n.value,l=n.onChange,u=n.divRef,s=r.getYear(o||r.getNow()),c=s-qV,d=c+YV;t&&(c=r.getYear(t[0]),d=r.getYear(t[1])+1);for(var f=a&&a.year==="\u5E74"?"\u5E74":"",p=[],g=c;g<d;g++)p.push({label:"".concat(g).concat(f),value:g});return v(Sa,{size:e?void 0:"small",options:p,value:s,class:"".concat(i,"-year-select"),onChange:function(h){var m=r.setYear(o,h);if(t){var b=Te(t,2),C=b[0],x=b[1],S=r.getYear(m),w=r.getMonth(m);S===r.getYear(x)&&w>r.getMonth(x)&&(m=r.setMonth(m,r.getMonth(x))),S===r.getYear(C)&&w<r.getMonth(C)&&(m=r.setMonth(m,r.getMonth(C)))}l(m)},getPopupContainer:function(){return u.value}},null)}x_.inheritAttrs=!1;function w_(n){var e=n.prefixCls,t=n.fullscreen,r=n.validRange,a=n.value,i=n.generateConfig,o=n.locale,l=n.onChange,u=n.divRef,s=i.getMonth(a||i.getNow()),c=0,d=11;if(r){var f=Te(r,2),p=f[0],g=f[1],y=i.getYear(a);i.getYear(g)===y&&(d=i.getMonth(g)),i.getYear(p)===y&&(c=i.getMonth(p))}for(var h=o.shortMonths||i.locale.getShortMonths(o.locale),m=[],b=c;b<=d;b+=1)m.push({label:h[b],value:b});return v(Sa,{size:t?void 0:"small",class:"".concat(e,"-month-select"),value:s,options:m,onChange:function(x){l(i.setMonth(a,x))},getPopupContainer:function(){return u.value}},null)}w_.inheritAttrs=!1;function S_(n){var e=n.prefixCls,t=n.locale,r=n.mode,a=n.fullscreen,i=n.onModeChange;return v(by,{onChange:function(l){var u=l.target.value;i(u)},value:r,size:a?void 0:"small",class:"".concat(e,"-mode-switch")},{default:function(){return[v(Bc,{value:"month"},{default:function(){return[t.month]}}),v(Bc,{value:"year"},{default:function(){return[t.year]}})]}})}S_.inheritAttrs=!1;const GV=ae({name:"CalendarHeader",inheritAttrs:!1,props:["mode","prefixCls","value","validRange","generateConfig","locale","mode","fullscreen"],setup:function(e,t){var r=t.attrs,a=q(null),i=pt.useInject();return pt.useProvide(i,{isFormItemInput:!1}),function(){var o=O(O({},e),r),l=o.prefixCls,u=o.fullscreen,s=o.mode,c=o.onChange,d=o.onModeChange,f=O(O({},o),{onChange:c,fullscreen:u,divRef:a});return v("div",{class:"".concat(l,"-header"),ref:a},[v(x_,f,null),s==="month"&&v(w_,f,null),v(S_,W(W({},f),{},{onModeChange:d}),null)])}}});function XV(n){function e(i,o){return i&&o&&n.getYear(i)===n.getYear(o)}function t(i,o){return e(i,o)&&n.getMonth(i)===n.getMonth(o)}function r(i,o){return t(i,o)&&n.getDate(i)===n.getDate(o)}var a=ae({name:"ACalendar",inheritAttrs:!1,props:["prefixCls","locale","validRange","disabledDate","dateFullCellRender","dateCellRender","monthFullCellRender","monthCellRender","headerRender","value","defaultValue","mode","fullscreen","onChange","onPanelChange","onSelect","valueFormat"],slots:["dateFullCellRender","dateCellRender","monthFullCellRender","monthCellRender","headerRender"],setup:function(o,l){var u=l.emit,s=l.slots,c=l.attrs,d=Le("picker",o),f=d.prefixCls,p=d.direction,g=R(function(){return"".concat(f.value,"-calendar")}),y=function(K){return o.valueFormat?n.toString(K,o.valueFormat):K},h=R(function(){return o.value?o.valueFormat?n.toDate(o.value,o.valueFormat):o.value:o.value===""?void 0:o.value}),m=R(function(){return o.defaultValue?o.valueFormat?n.toDate(o.defaultValue,o.valueFormat):o.defaultValue:o.defaultValue===""?void 0:o.defaultValue}),b=Wn(function(){return h.value||n.getNow()},{defaultValue:m.value,value:h}),C=Te(b,2),x=C[0],S=C[1],w=Wn("month",{value:We(o,"mode")}),_=Te(w,2),P=_[0],k=_[1],I=R(function(){return P.value==="year"?"month":"date"}),F=R(function(){return function(B){var K,H=o.validRange?n.isAfter(o.validRange[0],B)||n.isAfter(B,o.validRange[1]):!1;return H||!!(!((K=o.disabledDate)===null||K===void 0)&&K.call(o,B))}}),M=function(K,H){u("panelChange",y(K),H)},T=function(K){if(S(K),!r(K,x.value)){(I.value==="date"&&!t(K,x.value)||I.value==="month"&&!e(K,x.value))&&M(K,P.value);var H=y(K);u("update:value",H),u("change",H)}},N=function(K){k(K),M(x.value,K)},j=function(K){T(K),u("select",y(K))},$=R(function(){var B=o.locale,K=O(O({},nu),B);return K.lang=O(O({},K.lang),(B||{}).lang),K}),A=na("Calendar",$),E=Te(A,1),L=E[0];return function(){var B,K=n.getNow(),H=o.dateFullCellRender,Z=H===void 0?s==null?void 0:s.dateFullCellRender:H,Y=o.dateCellRender,G=Y===void 0?s==null?void 0:s.dateCellRender:Y,Q=o.monthFullCellRender,z=Q===void 0?s==null?void 0:s.monthFullCellRender:Q,J=o.monthCellRender,ne=J===void 0?s==null?void 0:s.monthCellRender:J,oe=o.headerRender,ce=oe===void 0?s==null?void 0:s.headerRender:oe,se=o.fullscreen,V=se===void 0?!0:se,X=o.validRange,ee=function(ge){var fe=ge.current;return Z?Z({current:fe}):v("div",{class:de("".concat(f.value,"-cell-inner"),"".concat(g.value,"-date"),D({},"".concat(g.value,"-date-today"),r(K,fe)))},[v("div",{class:"".concat(g.value,"-date-value")},[e_(String(n.getDate(fe)),2,"0")]),v("div",{class:"".concat(g.value,"-date-content")},[G&&G({current:fe})])])},ue=function(ge,fe){var re=ge.current;if(z)return z({current:re});var le=fe.shortMonths||n.locale.getShortMonths(fe.locale);return v("div",{class:de("".concat(f.value,"-cell-inner"),"".concat(g.value,"-date"),D({},"".concat(g.value,"-date-today"),t(K,re)))},[v("div",{class:"".concat(g.value,"-date-value")},[le[n.getMonth(re)]]),v("div",{class:"".concat(g.value,"-date-content")},[ne&&ne({current:re})])])};return v("div",W(W({},c),{},{class:de(g.value,(B={},D(B,"".concat(g.value,"-full"),V),D(B,"".concat(g.value,"-mini"),!V),D(B,"".concat(g.value,"-rtl"),p.value==="rtl"),B),c.class)}),[ce?ce({value:x.value,type:P.value,onChange:j,onTypeChange:N}):v(GV,{prefixCls:g.value,value:x.value,generateConfig:n,mode:P.value,fullscreen:V,locale:L.value.lang,validRange:X,onChange:j,onModeChange:N},null),v(yy,{value:x.value,prefixCls:f.value,locale:L.value.lang,generateConfig:n,dateRender:ee,monthCellRender:function(ge){return ue(ge,L.value.lang)},onSelect:j,mode:I.value,picker:I.value,disabledDate:F.value,hideHeader:!0},null)])}}});return a.install=function(i){return i.component(a.name,a),i},a}var ZV=XV(Ym);const QV=Gn(ZV);function JV(n){var e=q(),t=q(!1);function r(){for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];t.value||(Qe.cancel(e.value),e.value=Qe(function(){n.apply(void 0,i)}))}return fn(function(){t.value=!0,Qe.cancel(e.value)}),r}function eK(n){var e=q([]),t=q(typeof n=="function"?n():n),r=JV(function(){var i=t.value;e.value.forEach(function(o){i=o(i)}),e.value=[],t.value=i});function a(i){e.value.push(i),r()}return[t,a]}const nK=ae({name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var r=t.expose,a=t.attrs,i=q();function o(s){var c;!((c=e.tab)===null||c===void 0)&&c.disabled||e.onClick(s)}r({domRef:i});function l(s){var c;s.preventDefault(),s.stopPropagation(),e.editable.onEdit("remove",{key:(c=e.tab)===null||c===void 0?void 0:c.key,event:s})}var u=R(function(){var s;return e.editable&&e.closable!==!1&&!(!((s=e.tab)===null||s===void 0)&&s.disabled)});return function(){var s,c,d=e.prefixCls,f=e.id,p=e.active,g=e.tab,y=g.key,h=g.tab,m=g.disabled,b=g.closeIcon,C=e.renderWrapper,x=e.removeAriaLabel,S=e.editable,w=e.onFocus,_="".concat(d,"-tab"),P=v("div",{key:y,ref:i,class:de(_,(s={},D(s,"".concat(_,"-with-remove"),u.value),D(s,"".concat(_,"-active"),p),D(s,"".concat(_,"-disabled"),m),s)),style:a.style,onClick:o},[v("div",{role:"tab","aria-selected":p,id:f&&"".concat(f,"-tab-").concat(y),class:"".concat(_,"-btn"),"aria-controls":f&&"".concat(f,"-panel-").concat(y),"aria-disabled":m,tabindex:m?null:0,onClick:function(I){I.stopPropagation(),o(I)},onKeydown:function(I){[Ne.SPACE,Ne.ENTER].includes(I.which)&&(I.preventDefault(),o(I))},onFocus:w},[typeof h=="function"?h():h]),u.value&&v("button",{type:"button","aria-label":x||"remove",tabindex:0,class:"".concat(_,"-remove"),onClick:function(I){I.stopPropagation(),l(I)}},[(b==null?void 0:b())||((c=S.removeIcon)===null||c===void 0?void 0:c.call(S))||"\xD7"])]);return C?C(P):P}}});var gx={width:0,height:0,left:0,top:0};function tK(n,e){var t=q(new Map);return Ze(function(){for(var r,a,i=new Map,o=n.value,l=e.value.get((r=o[0])===null||r===void 0?void 0:r.key)||gx,u=l.left+l.width,s=0;s<o.length;s+=1){var c=o[s].key,d=e.value.get(c);d||(d=e.value.get((a=o[s-1])===null||a===void 0?void 0:a.key)||gx);var f=i.get(c)||O({},d);f.right=u-f.left-f.width,i.set(c,f)}t.value=new Map(i)}),t}const __=ae({name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var r=t.expose,a=t.attrs,i=q();return r({domRef:i}),function(){var o=e.prefixCls,l=e.editable,u=e.locale;return!l||l.showAdd===!1?null:v("button",{ref:i,type:"button",class:"".concat(o,"-nav-add"),style:a.style,"aria-label":(u==null?void 0:u.addAriaLabel)||"Add tab",onClick:function(c){l.onEdit("add",{event:c})}},[l.addIcon?l.addIcon():"+"])}}});var rK={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:U.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}};const aK=ae({name:"OperationNode",inheritAttrs:!1,props:rK,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var r=t.attrs,a=t.slots,i=Ln(!1),o=Te(i,2),l=o[0],u=o[1],s=Ln(null),c=Te(s,2),d=c[0],f=c[1],p=function(C){for(var x=e.tabs.filter(function(k){return!k.disabled}),S=x.findIndex(function(k){return k.key===d.value})||0,w=x.length,_=0;_<w;_+=1){S=(S+C+w)%w;var P=x[S];if(!P.disabled){f(P.key);return}}},g=function(C){var x=C.which;if(!l.value){[Ne.DOWN,Ne.SPACE,Ne.ENTER].includes(x)&&(u(!0),C.preventDefault());return}switch(x){case Ne.UP:p(-1),C.preventDefault();break;case Ne.DOWN:p(1),C.preventDefault();break;case Ne.ESC:u(!1);break;case Ne.SPACE:case Ne.ENTER:d.value!==null&&e.onTabClick(d.value,C);break}},y=R(function(){return"".concat(e.id,"-more-popup")}),h=R(function(){return d.value!==null?"".concat(y.value,"-").concat(d.value):null}),m=function(C,x){C.preventDefault(),C.stopPropagation(),e.editable.onEdit("remove",{key:x,event:C})};return Ye(function(){Pe(d,function(){var b=document.getElementById(h.value);b&&b.scrollIntoView&&b.scrollIntoView(!1)},{flush:"post",immediate:!0})}),Pe(l,function(){l.value||f(null)}),function(){var b,C=e.prefixCls,x=e.id,S=e.tabs,w=e.locale,_=e.mobile,P=e.moreIcon,k=P===void 0?((b=a.moreIcon)===null||b===void 0?void 0:b.call(a))||v(mg,null,null):P,I=e.moreTransitionName,F=e.editable,M=e.tabBarGutter,T=e.rtl,N=e.onTabClick,j="".concat(C,"-dropdown"),$=w==null?void 0:w.dropdownAriaLabel,A=D({},T?"marginRight":"marginLeft",M);S.length||(A.visibility="hidden",A.order=1);var E=de(D({},"".concat(j,"-rtl"),T)),L=_?null:v(s6,{prefixCls:j,trigger:["hover"],visible:l.value,transitionName:I,onVisibleChange:u,overlayClassName:E,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return v(Yn,{onClick:function(H){var Z=H.key,Y=H.domEvent;N(Z,Y),u(!1)},id:y.value,tabindex:-1,role:"listbox","aria-activedescendant":h.value,selectedKeys:[d.value],"aria-label":$!==void 0?$:"expanded dropdown"},{default:function(){return[S.map(function(H){var Z,Y,G=F&&H.closable!==!1&&!H.disabled;return v(Xr,{key:H.key,id:"".concat(y.value,"-").concat(H.key),role:"option","aria-controls":x&&"".concat(x,"-panel-").concat(H.key),disabled:H.disabled},{default:function(){return[v("span",null,[typeof H.tab=="function"?H.tab():H.tab]),G&&v("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(j,"-menu-item-remove"),onClick:function(J){J.stopPropagation(),m(J,H.key)}},[((Z=H.closeIcon)===null||Z===void 0?void 0:Z.call(H))||((Y=F.removeIcon)===null||Y===void 0?void 0:Y.call(F))||"\xD7"])]}})})]}})},default:function(){return v("button",{type:"button",class:"".concat(C,"-nav-more"),style:A,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":y.value,id:"".concat(x,"-more"),"aria-expanded":l.value,onKeydown:g},[k])}});return v("div",{class:de("".concat(C,"-nav-operations"),r.class),style:r.style},[L,v(__,{prefixCls:C,locale:w,editable:F},null)])}}});var k_=Symbol("tabsContextKey"),P_=function(e){ln(k_,e)},O_=function(){return on(k_,{tabs:q([]),prefixCls:q()})};ae({name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var r=t.slots;return P_(Ni(e)),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}});var iK=.1,mx=.01,Ls=20,yx=Math.pow(.995,Ls);function oK(n,e){var t=Ln(),r=Te(t,2),a=r[0],i=r[1],o=Ln(0),l=Te(o,2),u=l[0],s=l[1],c=Ln(0),d=Te(c,2),f=d[0],p=d[1],g=Ln(),y=Te(g,2),h=y[0],m=y[1],b=q();function C(T){var N=T.touches[0],j=N.screenX,$=N.screenY;i({x:j,y:$}),clearInterval(b.value)}function x(T){if(!!a.value){T.preventDefault();var N=T.touches[0],j=N.screenX,$=N.screenY,A=j-a.value.x,E=$-a.value.y;e(A,E),i({x:j,y:$});var L=Date.now();p(L-u.value),s(L),m({x:A,y:E})}}function S(){if(!!a.value){var T=h.value;if(i(null),m(null),T){var N=T.x/f.value,j=T.y/f.value,$=Math.abs(N),A=Math.abs(j);if(Math.max($,A)<iK)return;var E=N,L=j;b.value=setInterval(function(){if(Math.abs(E)<mx&&Math.abs(L)<mx){clearInterval(b.value);return}E*=yx,L*=yx,e(E*Ls,L*Ls)},Ls)}}}var w=q();function _(T){var N=T.deltaX,j=T.deltaY,$=0,A=Math.abs(N),E=Math.abs(j);A===E?$=w.value==="x"?N:j:A>E?($=N,w.value="x"):($=j,w.value="y"),e(-$,-$)&&T.preventDefault()}var P=q({onTouchStart:C,onTouchMove:x,onTouchEnd:S,onWheel:_});function k(T){P.value.onTouchStart(T)}function I(T){P.value.onTouchMove(T)}function F(T){P.value.onTouchEnd(T)}function M(T){P.value.onWheel(T)}Ye(function(){var T,N;document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",F,{passive:!1}),(T=n.value)===null||T===void 0||T.addEventListener("touchstart",k,{passive:!1}),(N=n.value)===null||N===void 0||N.addEventListener("wheel",M,{passive:!1})}),fn(function(){document.removeEventListener("touchmove",I),document.removeEventListener("touchend",F)})}function bx(n,e){var t=q(n);function r(a){var i=typeof a=="function"?a(t.value):a;i!==t.value&&e(i,t.value),t.value=i}return[t,r]}var lK=function(){var e=q(new Map),t=function(a){return function(i){e.value.set(a,i)}};return gd(function(){e.value=new Map}),[t,e]};const Cy=lK;var uK=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,sK=/^\w*$/;function xy(n,e){if(yr(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||Rd(n)?!0:sK.test(n)||!uK.test(n)||e!=null&&n in Object(e)}var cK="Expected a function";function wy(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(cK);var t=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=t.cache;if(i.has(a))return i.get(a);var o=n.apply(this,r);return t.cache=i.set(a,o)||i,o};return t.cache=new(wy.Cache||Pa),t}wy.Cache=Pa;var dK=500;function fK(n){var e=wy(n,function(r){return t.size===dK&&t.clear(),r}),t=e.cache;return e}var vK=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pK=/\\(\\)?/g,hK=fK(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(vK,function(t,r,a,i){e.push(a?i.replace(pK,"$1"):r||t)}),e});const gK=hK;function el(n,e){return yr(n)?n:xy(n,e)?[n]:gK(Jm(n))}var mK=1/0;function nl(n){if(typeof n=="string"||Rd(n))return n;var e=n+"";return e=="0"&&1/n==-mK?"-0":e}function zd(n,e){e=el(e,n);for(var t=0,r=e.length;n!=null&&t<r;)n=n[nl(e[t++])];return t&&t==r?n:void 0}var yK=function(){try{var n=Ui(Object,"defineProperty");return n({},"",{}),n}catch{}}();const Vc=yK;function T_(n,e,t){e=="__proto__"&&Vc?Vc(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}var bK=Object.prototype,CK=bK.hasOwnProperty;function Sy(n,e,t){var r=n[e];(!(CK.call(n,e)&&_m(r,t))||t===void 0&&!(e in n))&&T_(n,e,t)}function xK(n,e,t,r){if(!Mr(n))return n;e=el(e,n);for(var a=-1,i=e.length,o=i-1,l=n;l!=null&&++a<i;){var u=nl(e[a]),s=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return n;if(a!=o){var c=l[u];s=r?r(c,u,l):void 0,s===void 0&&(s=Mr(c)?c:Nm(e[a+1])?[]:{})}Sy(l,u,s),l=l[u]}return n}function wK(n,e,t){for(var r=-1,a=e.length,i={};++r<a;){var o=e[r],l=zd(n,o);t(l,o)&&xK(i,el(o,n),l)}return i}function SK(n,e){return n!=null&&e in Object(n)}function _K(n,e,t){e=el(e,n);for(var r=-1,a=e.length,i=!1;++r<a;){var o=nl(e[r]);if(!(i=n!=null&&t(n,o)))break;n=n[o]}return i||++r!=a?i:(a=n==null?0:n.length,!!a&&Im(a)&&Nm(o,a)&&(yr(n)||Tm(n)))}function N_(n,e){return n!=null&&_K(n,e,SK)}function kK(n,e){return wK(n,e,function(t,r){return N_(n,r)})}var Cx=gr?gr.isConcatSpreadable:void 0;function PK(n){return yr(n)||Tm(n)||!!(Cx&&n&&n[Cx])}function I_(n,e,t,r,a){var i=-1,o=n.length;for(t||(t=PK),a||(a=[]);++i<o;){var l=n[i];e>0&&t(l)?e>1?I_(l,e-1,t,r,a):Pm(a,l):r||(a[a.length]=l)}return a}function OK(n){var e=n==null?0:n.length;return e?I_(n,1):[]}function TK(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}var xx=Math.max;function E_(n,e,t){return e=xx(e===void 0?n.length-1:e,0),function(){for(var r=arguments,a=-1,i=xx(r.length-e,0),o=Array(i);++a<i;)o[a]=r[e+a];a=-1;for(var l=Array(e+1);++a<e;)l[a]=r[a];return l[e]=t(o),TK(n,this,l)}}function NK(n){return function(){return n}}function _y(n){return n}var IK=Vc?function(n,e){return Vc(n,"toString",{configurable:!0,enumerable:!1,value:NK(e),writable:!0})}:_y;const EK=IK;var MK=800,AK=16,FK=Date.now;function jK(n){var e=0,t=0;return function(){var r=FK(),a=AK-(r-t);if(t=r,a>0){if(++e>=MK)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}var DK=jK(EK);const M_=DK;function A_(n){return M_(E_(n,void 0,OK),n+"")}var LK=A_(function(n,e){return n==null?{}:kK(n,e)});const F_=LK;var wx={width:0,height:0,left:0,top:0,right:0},RK=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:U.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}};const Sx=ae({name:"TabNavList",inheritAttrs:!1,props:RK(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var r=t.attrs,a=t.slots,i=O_(),o=i.tabs,l=i.prefixCls,u=q(),s=q(),c=q(),d=q(),f=Cy(),p=Te(f,2),g=p[0],y=p[1],h=R(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),m=bx(0,function(Re,Ke){h.value&&e.onTabScroll&&e.onTabScroll({direction:Re>Ke?"left":"right"})}),b=Te(m,2),C=b[0],x=b[1],S=bx(0,function(Re,Ke){!h.value&&e.onTabScroll&&e.onTabScroll({direction:Re>Ke?"top":"bottom"})}),w=Te(S,2),_=w[0],P=w[1],k=Ln(0),I=Te(k,2),F=I[0],M=I[1],T=Ln(0),N=Te(T,2),j=N[0],$=N[1],A=Ln(null),E=Te(A,2),L=E[0],B=E[1],K=Ln(null),H=Te(K,2),Z=H[0],Y=H[1],G=Ln(0),Q=Te(G,2),z=Q[0],J=Q[1],ne=Ln(0),oe=Te(ne,2),ce=oe[0],se=oe[1],V=eK(new Map),X=Te(V,2),ee=X[0],ue=X[1],ie=tK(o,ee),ge=R(function(){return"".concat(l.value,"-nav-operations-hidden")}),fe=q(0),re=q(0);Ze(function(){h.value?e.rtl?(fe.value=0,re.value=Math.max(0,F.value-L.value)):(fe.value=Math.min(0,L.value-F.value),re.value=0):(fe.value=Math.min(0,Z.value-j.value),re.value=0)});var le=function(Ke){return Ke<fe.value?fe.value:Ke>re.value?re.value:Ke},te=q(),he=Ln(),ye=Te(he,2),_e=ye[0],Me=ye[1],De=function(){Me(Date.now())},we=function(){clearTimeout(te.value)},be=function(Ke,Ve){Ke(function(ze){var He=le(ze+Ve);return He})};oK(u,function(Re,Ke){if(h.value){if(L.value>=F.value)return!1;be(x,Re)}else{if(Z.value>=j.value)return!1;be(P,Ke)}return we(),De(),!0}),Pe(_e,function(){we(),_e.value&&(te.value=setTimeout(function(){Me(0)},100))});var Se=function(){var Ke=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,Ve=ie.value.get(Ke)||{width:0,height:0,left:0,right:0,top:0};if(h.value){var ze=C.value;e.rtl?Ve.right<C.value?ze=Ve.right:Ve.right+Ve.width>C.value+L.value&&(ze=Ve.right+Ve.width-L.value):Ve.left<-C.value?ze=-Ve.left:Ve.left+Ve.width>-C.value+L.value&&(ze=-(Ve.left+Ve.width-L.value)),P(0),x(le(ze))}else{var He=_.value;Ve.top<-_.value?He=-Ve.top:Ve.top+Ve.height>-_.value+Z.value&&(He=-(Ve.top+Ve.height-Z.value)),x(0),P(le(He))}},Fe=q(0),je=q(0);Ze(function(){var Re,Ke,Ve,ze,He,en,mn,nn=ie.value;["top","bottom"].includes(e.tabPosition)?(Ke="width",He=L.value,en=F.value,mn=z.value,Ve=e.rtl?"right":"left",ze=Math.abs(C.value)):(Ke="height",He=Z.value,en=F.value,mn=ce.value,Ve="top",ze=-_.value);var Je=He;en+mn>He&&en<He&&(Je=He-mn);var bn=o.value;if(!bn.length){var pn;return pn=[0,0],Fe.value=pn[0],je.value=pn[1],pn}for(var Dn=bn.length,Pn=Dn,et=0;et<Dn;et+=1){var Xn=nn.get(bn[et].key)||wx;if(Xn[Ve]+Xn[Ke]>ze+Je){Pn=et-1;break}}for(var Mn=0,Kn=Dn-1;Kn>=0;Kn-=1){var Zn=nn.get(bn[Kn].key)||wx;if(Zn[Ve]<ze){Mn=Kn+1;break}}return Re=[Mn,Pn],Fe.value=Re[0],je.value=Re[1],Re});var ke=function(){var Ke,Ve,ze,He,en,mn=((Ke=u.value)===null||Ke===void 0?void 0:Ke.offsetWidth)||0,nn=((Ve=u.value)===null||Ve===void 0?void 0:Ve.offsetHeight)||0,Je=((ze=d.value)===null||ze===void 0?void 0:ze.$el)||{},bn=Je.offsetWidth||0,pn=Je.offsetHeight||0;B(mn),Y(nn),J(bn),se(pn);var Dn=(((He=s.value)===null||He===void 0?void 0:He.offsetWidth)||0)-bn,Pn=(((en=s.value)===null||en===void 0?void 0:en.offsetHeight)||0)-pn;M(Dn),$(Pn),ue(function(){var et=new Map;return o.value.forEach(function(Xn){var Mn=Xn.key,Kn,Zn=y.value.get(Mn),ut=((Kn=Zn)===null||Kn===void 0?void 0:Kn.$el)||Zn;ut&&et.set(Mn,{width:ut.offsetWidth,height:ut.offsetHeight,left:ut.offsetLeft,top:ut.offsetTop})}),et})},Ce=R(function(){return[].concat(Ee(o.value.slice(0,Fe.value)),Ee(o.value.slice(je.value+1)))}),ve=Ln(),me=Te(ve,2),Oe=me[0],Ie=me[1],xe=R(function(){return ie.value.get(e.activeKey)}),pe=q(),Ae=function(){Qe.cancel(pe.value)};Pe([xe,h,function(){return e.rtl}],function(){var Re={};xe.value&&(h.value?(e.rtl?Re.right=Ci(xe.value.right):Re.left=Ci(xe.value.left),Re.width=Ci(xe.value.width)):(Re.top=Ci(xe.value.top),Re.height=Ci(xe.value.height))),Ae(),pe.value=Qe(function(){Ie(Re)})}),Pe([function(){return e.activeKey},xe,ie,h],function(){Se()},{flush:"post"}),Pe([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return o.value}],function(){ke()},{flush:"post"});var $e=function(Ke){var Ve=Ke.position,ze=Ke.prefixCls,He=Ke.extra;if(!He)return null;var en=He==null?void 0:He({position:Ve});return en?v("div",{class:"".concat(ze,"-extra-content")},[en]):null};return fn(function(){we(),Ae()}),function(){var Re,Ke=e.id,Ve=e.animated,ze=e.activeKey,He=e.rtl,en=e.editable,mn=e.locale,nn=e.tabPosition,Je=e.tabBarGutter,bn=e.onTabClick,pn=r.class,Dn=r.style,Pn=l.value,et=!!Ce.value.length,Xn="".concat(Pn,"-nav-wrap"),Mn,Kn,Zn,ut;h.value?He?(Kn=C.value>0,Mn=C.value+L.value<F.value):(Mn=C.value<0,Kn=-C.value+L.value<F.value):(Zn=_.value<0,ut=-_.value+Z.value<j.value);var zn={};nn==="top"||nn==="bottom"?zn[He?"marginRight":"marginLeft"]=typeof Je=="number"?"".concat(Je,"px"):Je:zn.marginTop=typeof Je=="number"?"".concat(Je,"px"):Je;var Rt=o.value.map(function(ar,aa){var Ht=ar.key;return v(nK,{id:Ke,prefixCls:Pn,key:Ht,tab:ar,style:aa===0?void 0:zn,closable:ar.closable,editable:en,active:Ht===ze,removeAriaLabel:mn==null?void 0:mn.removeAriaLabel,ref:g(Ht),onClick:function(qn){bn(Ht,qn)},onFocus:function(){Se(Ht),De(),u.value&&(He||(u.value.scrollLeft=0),u.value.scrollTop=0)}},a)});return v("div",{role:"tablist",class:de("".concat(Pn,"-nav"),pn),style:Dn,onKeydown:function(){De()}},[v($e,{position:"left",prefixCls:Pn,extra:a.leftExtra},null),v(mr,{onResize:ke},{default:function(){return[v("div",{class:de(Xn,(Re={},D(Re,"".concat(Xn,"-ping-left"),Mn),D(Re,"".concat(Xn,"-ping-right"),Kn),D(Re,"".concat(Xn,"-ping-top"),Zn),D(Re,"".concat(Xn,"-ping-bottom"),ut),Re)),ref:u},[v(mr,{onResize:ke},{default:function(){return[v("div",{ref:s,class:"".concat(Pn,"-nav-list"),style:{transform:"translate(".concat(C.value,"px, ").concat(_.value,"px)"),transition:_e.value?"none":void 0}},[Rt,v(__,{ref:d,prefixCls:Pn,locale:mn,editable:en,style:O(O({},Rt.length===0?void 0:zn),{visibility:et?"hidden":null})},null),v("div",{class:de("".concat(Pn,"-ink-bar"),D({},"".concat(Pn,"-ink-bar-animated"),Ve.inkBar)),style:Oe.value},null)])]}})])]}}),v(aK,W(W({},e),{},{removeAriaLabel:mn==null?void 0:mn.removeAriaLabel,ref:c,prefixCls:Pn,tabs:Ce.value,class:!et&&ge.value}),F_(a,["moreIcon"])),v($e,{position:"right",prefixCls:Pn,extra:a.rightExtra},null),v($e,{position:"right",prefixCls:Pn,extra:a.tabBarExtraContent},null)])}}}),$K=ae({name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=O_(),r=t.tabs,a=t.prefixCls;return function(){var i=e.id,o=e.activeKey,l=e.animated,u=e.tabPosition,s=e.rtl,c=e.destroyInactiveTabPane,d=l.tabPane,f=a.value,p=r.value.findIndex(function(g){return g.key===o});return v("div",{class:"".concat(f,"-content-holder")},[v("div",{class:["".concat(f,"-content"),"".concat(f,"-content-").concat(u),D({},"".concat(f,"-content-animated"),d)],style:p&&d?D({},s?"marginRight":"marginLeft","-".concat(p,"00%")):null},[r.value.map(function(g){return wn(g.node,{key:g.key,prefixCls:f,tabKey:g.key,id:i,animated:d,active:g.key===o,destroyInactiveTabPane:c})})])])}}});var _x=0,j_=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:U.any}};function BK(n){return n.map(function(e){if(at(e)){for(var t=O({},e.props||{}),r=0,a=Object.entries(t);r<a.length;r++){var i=Te(a[r],2),o=i[0],l=i[1];delete t[o],t[Kt(o)]=l}var u=e.children||{},s=e.key!==void 0?e.key:void 0,c=t.tab,d=c===void 0?u.tab:c,f=t.disabled,p=t.forceRender,g=t.closable,y=t.animated,h=t.active,m=t.destroyInactiveTabPane;return O(O({key:s},t),{node:e,closeIcon:u.closeIcon,tab:d,disabled:f===""||f,forceRender:p===""||p,closable:g===""||g,animated:y===""||y,active:h===""||h,destroyInactiveTabPane:m===""||m})}return null}).filter(function(e){return e})}var VK=ae({name:"InternalTabs",inheritAttrs:!1,props:O(O({},vn(j_(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var r=t.attrs,a=t.slots;On(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),On(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),On(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var i=Le("tabs",e),o=i.prefixCls,l=i.direction,u=i.size,s=i.rootPrefixCls,c=R(function(){return l.value==="rtl"}),d=R(function(){var N=e.animated,j=e.tabPosition;return N===!1||["left","right"].includes(j)?{inkBar:!1,tabPane:!1}:N===!0?{inkBar:!0,tabPane:!0}:O({inkBar:!0,tabPane:!1},Be(N)==="object"?N:{})}),f=Ln(!1),p=Te(f,2),g=p[0],y=p[1];Ye(function(){y(Fm())});var h=Wn(function(){var N;return(N=e.tabs[0])===null||N===void 0?void 0:N.key},{value:R(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),m=Te(h,2),b=m[0],C=m[1],x=Ln(function(){return e.tabs.findIndex(function(N){return N.key===b.value})}),S=Te(x,2),w=S[0],_=S[1];Ze(function(){var N,j=e.tabs.findIndex(function($){return $.key===b.value});j===-1&&(j=Math.max(0,Math.min(w.value,e.tabs.length-1)),C((N=e.tabs[j])===null||N===void 0?void 0:N.key)),_(j)});var P=Wn(null,{value:R(function(){return e.id})}),k=Te(P,2),I=k[0],F=k[1],M=R(function(){return g.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});Ye(function(){e.id||(F("rc-tabs-".concat(_x)),_x+=1)});var T=function(j,$){var A,E;(A=e.onTabClick)===null||A===void 0||A.call(e,j,$);var L=j!==b.value;C(j),L&&((E=e.onChange)===null||E===void 0||E.call(e,j))};return P_({tabs:R(function(){return e.tabs}),prefixCls:o}),function(){var N,j=e.id,$=e.type,A=e.tabBarGutter,E=e.tabBarStyle,L=e.locale,B=e.destroyInactiveTabPane,K=e.renderTabBar,H=K===void 0?a.renderTabBar:K,Z=e.onTabScroll,Y=e.hideAdd,G=e.centered,Q={id:I.value,activeKey:b.value,animated:d.value,tabPosition:M.value,rtl:c.value,mobile:g.value},z;$==="editable-card"&&(z={onEdit:function(se,V){var X=V.key,ee=V.event,ue;(ue=e.onEdit)===null||ue===void 0||ue.call(e,se==="add"?ee:X,se)},removeIcon:function(){return v(ea,null,null)},addIcon:a.addIcon?a.addIcon:function(){return v(JI,null,null)},showAdd:Y!==!0});var J,ne=O(O({},Q),{moreTransitionName:"".concat(s.value,"-slide-up"),editable:z,locale:L,tabBarGutter:A,onTabClick:T,onTabScroll:Z,style:E});H?J=H(O(O({},ne),{DefaultTabBar:Sx})):J=v(Sx,ne,F_(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var oe=o.value;return v("div",W(W({},r),{},{id:j,class:de(oe,"".concat(oe,"-").concat(M.value),(N={},D(N,"".concat(oe,"-").concat(u.value),u.value),D(N,"".concat(oe,"-card"),["card","editable-card"].includes($)),D(N,"".concat(oe,"-editable-card"),$==="editable-card"),D(N,"".concat(oe,"-centered"),G),D(N,"".concat(oe,"-mobile"),g.value),D(N,"".concat(oe,"-editable"),$==="editable-card"),D(N,"".concat(oe,"-rtl"),c.value),N),r.class)}),[J,v($K,W(W({destroyInactiveTabPane:B},Q),{},{animated:d.value}),null)])}}});const Ai=ae({name:"ATabs",inheritAttrs:!1,props:vn(j_(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var r=t.attrs,a=t.slots,i=t.emit,o=function(u){i("update:activeKey",u),i("change",u)};return function(){var l,u=BK(Fn((l=a.default)===null||l===void 0?void 0:l.call(a)));return v(VK,W(W(W({},un(e,["onUpdate:activeKey"])),r),{},{onChange:o,tabs:u}),a)}}});var KK=function(){return{tab:U.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}};const Kc=ae({name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:KK(),slots:["closeIcon","tab"],setup:function(e,t){var r=t.attrs,a=t.slots,i=q(e.forceRender);Pe([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?i.value=!0:e.destroyInactiveTabPane&&(i.value=!1)},{immediate:!0});var o=R(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var l,u=e.prefixCls,s=e.forceRender,c=e.id,d=e.active,f=e.tabKey;return v("div",{id:c&&"".concat(c,"-panel-").concat(f),role:"tabpanel",tabindex:d?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(f),"aria-hidden":!d,style:[o.value,r.style],class:["".concat(u,"-tabpane"),d&&"".concat(u,"-tabpane-active"),r.class]},[(d||i.value||s)&&((l=a.default)===null||l===void 0?void 0:l.call(a))])}}});Ai.TabPane=Kc;Ai.install=function(n){return n.component(Ai.name,Ai),n.component(Kc.name,Kc),n};var D_=function(){return Hi()&&window.document.documentElement},L_=function(e){if(Hi()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],r=window.document.documentElement;return t.some(function(a){return a in r.style})}return!1},zK=function(e,t){if(!L_(e))return!1;var r=document.createElement("div"),a=r.style[e];return r.style[e]=t,r.style[e]!==a};function ky(n,e){return!Array.isArray(n)&&e!==void 0?zK(n,e):L_(n)}var ps,HK=function(){if(!D_())return!1;if(ps!==void 0)return ps;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),ps=e.scrollHeight===1,document.body.removeChild(e),ps};const R_=function(){var n=q(!1);return Ye(function(){n.value=HK()}),n};var $_=Symbol("rowContextKey"),WK=function(e){ln($_,e)},UK=function(){return on($_,{gutter:R(function(){}),wrap:R(function(){}),supportFlexGap:R(function(){})})};jn("top","middle","bottom","stretch");jn("start","end","center","space-around","space-between","space-evenly");var qK=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array,Object],default:0},wrap:{type:Boolean,default:void 0}}},YK=ae({name:"ARow",props:qK(),setup:function(e,t){var r=t.slots,a=Le("row",e),i=a.prefixCls,o=a.direction,l,u=q({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),s=R_();Ye(function(){l=Lo.subscribe(function(p){var g=e.gutter||0;(!Array.isArray(g)&&Be(g)==="object"||Array.isArray(g)&&(Be(g[0])==="object"||Be(g[1])==="object"))&&(u.value=p)})}),fn(function(){Lo.unsubscribe(l)});var c=R(function(){var p=[void 0,void 0],g=e.gutter,y=g===void 0?0:g,h=Array.isArray(y)?y:[y,void 0];return h.forEach(function(m,b){if(Be(m)==="object")for(var C=0;C<$i.length;C++){var x=$i[C];if(u.value[x]&&m[x]!==void 0){p[b]=m[x];break}}else p[b]=m}),p});WK({gutter:c,supportFlexGap:s,wrap:R(function(){return e.wrap})});var d=R(function(){var p;return de(i.value,(p={},D(p,"".concat(i.value,"-no-wrap"),e.wrap===!1),D(p,"".concat(i.value,"-").concat(e.justify),e.justify),D(p,"".concat(i.value,"-").concat(e.align),e.align),D(p,"".concat(i.value,"-rtl"),o.value==="rtl"),p))}),f=R(function(){var p=c.value,g={},y=p[0]!=null&&p[0]>0?"".concat(p[0]/-2,"px"):void 0,h=p[1]!=null&&p[1]>0?"".concat(p[1]/-2,"px"):void 0;return y&&(g.marginLeft=y,g.marginRight=y),s.value?g.rowGap="".concat(p[1],"px"):h&&(g.marginTop=h,g.marginBottom=h),g});return function(){var p;return v("div",{class:d.value,style:f.value},[(p=r.default)===null||p===void 0?void 0:p.call(r)])}}});const Py=YK;function GK(n){return typeof n=="number"?"".concat(n," ").concat(n," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(n)?"0 0 ".concat(n):n}var XK=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}};const Hd=ae({name:"ACol",props:XK(),setup:function(e,t){var r=t.slots,a=UK(),i=a.gutter,o=a.supportFlexGap,l=a.wrap,u=Le("col",e),s=u.prefixCls,c=u.direction,d=R(function(){var p,g=e.span,y=e.order,h=e.offset,m=e.push,b=e.pull,C=s.value,x={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(S){var w,_={},P=e[S];typeof P=="number"?_.span=P:Be(P)==="object"&&(_=P||{}),x=O(O({},x),(w={},D(w,"".concat(C,"-").concat(S,"-").concat(_.span),_.span!==void 0),D(w,"".concat(C,"-").concat(S,"-order-").concat(_.order),_.order||_.order===0),D(w,"".concat(C,"-").concat(S,"-offset-").concat(_.offset),_.offset||_.offset===0),D(w,"".concat(C,"-").concat(S,"-push-").concat(_.push),_.push||_.push===0),D(w,"".concat(C,"-").concat(S,"-pull-").concat(_.pull),_.pull||_.pull===0),D(w,"".concat(C,"-rtl"),c.value==="rtl"),w))}),de(C,(p={},D(p,"".concat(C,"-").concat(g),g!==void 0),D(p,"".concat(C,"-order-").concat(y),y),D(p,"".concat(C,"-offset-").concat(h),h),D(p,"".concat(C,"-push-").concat(m),m),D(p,"".concat(C,"-pull-").concat(b),b),p),x)}),f=R(function(){var p=e.flex,g=i.value,y={};if(g&&g[0]>0){var h="".concat(g[0]/2,"px");y.paddingLeft=h,y.paddingRight=h}if(g&&g[1]>0&&!o.value){var m="".concat(g[1]/2,"px");y.paddingTop=m,y.paddingBottom=m}return p&&(y.flex=GK(p),l.value===!1&&!y.minWidth&&(y.minWidth=0)),y});return function(){var p;return v("div",{class:d.value,style:f.value},[(p=r.default)===null||p===void 0?void 0:p.call(r)])}}}),ZK={useBreakpoint:Qo},fo=Gn(Py),xr=Gn(Hd);var QK=Ai.TabPane,JK=function(){return{prefixCls:String,title:U.any,extra:U.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:U.any,tabList:{type:Array},tabBarExtraContent:U.any,activeTabKey:String,defaultActiveTabKey:String,cover:U.any,onTabChange:{type:Function}}},ez=ae({name:"ACard",props:JK(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(e,t){var r=t.slots,a=Le("card",e),i=a.prefixCls,o=a.direction,l=a.size,u=function(f){var p=f.map(function(g,y){return xt(g)&&!ku(g)||!xt(g)?v("li",{style:{width:"".concat(100/f.length,"%")},key:"action-".concat(y)},[v("span",null,[g])]):null});return p},s=function(f){var p;(p=e.onTabChange)===null||p===void 0||p.call(e,f)},c=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],p;return f.forEach(function(g){g&&tm(g.type)&&g.type.__ANT_CARD_GRID&&(p=!0)}),p};return function(){var d,f,p,g,y,h,m,b,C=e.headStyle,x=C===void 0?{}:C,S=e.bodyStyle,w=S===void 0?{}:S,_=e.loading,P=e.bordered,k=P===void 0?!0:P,I=e.type,F=e.tabList,M=e.hoverable,T=e.activeTabKey,N=e.defaultActiveTabKey,j=e.tabBarExtraContent,$=j===void 0?cl((p=r.tabBarExtraContent)===null||p===void 0?void 0:p.call(r)):j,A=e.title,E=A===void 0?cl((g=r.title)===null||g===void 0?void 0:g.call(r)):A,L=e.extra,B=L===void 0?cl((y=r.extra)===null||y===void 0?void 0:y.call(r)):L,K=e.actions,H=K===void 0?cl((h=r.actions)===null||h===void 0?void 0:h.call(r)):K,Z=e.cover,Y=Z===void 0?cl((m=r.cover)===null||m===void 0?void 0:m.call(r)):Z,G=Fn((b=r.default)===null||b===void 0?void 0:b.call(r)),Q=i.value,z=(d={},D(d,"".concat(Q),!0),D(d,"".concat(Q,"-loading"),_),D(d,"".concat(Q,"-bordered"),k),D(d,"".concat(Q,"-hoverable"),!!M),D(d,"".concat(Q,"-contain-grid"),c(G)),D(d,"".concat(Q,"-contain-tabs"),F&&F.length),D(d,"".concat(Q,"-").concat(l.value),l.value),D(d,"".concat(Q,"-type-").concat(I),!!I),D(d,"".concat(Q,"-rtl"),o.value==="rtl"),d),J=w.padding===0||w.padding==="0px"?{padding:"24px"}:void 0,ne=v("div",{class:"".concat(Q,"-loading-block")},null),oe=v("div",{class:"".concat(Q,"-loading-content"),style:J},[v(fo,{gutter:8},{default:function(){return[v(xr,{span:22},{default:function(){return[ne]}})]}}),v(fo,{gutter:8},{default:function(){return[v(xr,{span:8},{default:function(){return[ne]}}),v(xr,{span:15},{default:function(){return[ne]}})]}}),v(fo,{gutter:8},{default:function(){return[v(xr,{span:6},{default:function(){return[ne]}}),v(xr,{span:18},{default:function(){return[ne]}})]}}),v(fo,{gutter:8},{default:function(){return[v(xr,{span:13},{default:function(){return[ne]}}),v(xr,{span:9},{default:function(){return[ne]}})]}}),v(fo,{gutter:8},{default:function(){return[v(xr,{span:4},{default:function(){return[ne]}}),v(xr,{span:3},{default:function(){return[ne]}}),v(xr,{span:16},{default:function(){return[ne]}})]}})]),ce=T!==void 0,se=(f={size:"large"},D(f,ce?"activeKey":"defaultActiveKey",ce?T:N),D(f,"onChange",s),D(f,"class","".concat(Q,"-head-tabs")),f),V,X=F&&F.length?v(Ai,se,{default:function(){return[F.map(function(fe){var re=fe.tab,le=fe.slots,te=le==null?void 0:le.tab;On(!le,"Card","tabList slots is deprecated, Please use `customTab` instead.");var he=re!==void 0?re:r[te]?r[te](fe):null;return he=md(r,"customTab",fe,function(){return[he]}),v(QK,{tab:he,key:fe.key,disabled:fe.disabled},null)})]},rightExtra:$?function(){return $}:null}):null;(E||B||X)&&(V=v("div",{class:"".concat(Q,"-head"),style:x},[v("div",{class:"".concat(Q,"-head-wrapper")},[E&&v("div",{class:"".concat(Q,"-head-title")},[E]),B&&v("div",{class:"".concat(Q,"-extra")},[B])]),X]));var ee=Y?v("div",{class:"".concat(Q,"-cover")},[Y]):null,ue=v("div",{class:"".concat(Q,"-body"),style:w},[_?oe:G]),ie=H&&H.length?v("ul",{class:"".concat(Q,"-actions")},[u(H)]):null;return v("div",{class:z,ref:"cardContainerRef"},[V,ee,G&&G.length?ue:null,ie])}}});const To=ez;var nz=function(){return{prefixCls:String,title:U.any,description:U.any,avatar:U.any}};const zc=ae({name:"ACardMeta",props:nz(),slots:["title","description","avatar"],setup:function(e,t){var r=t.slots,a=Le("card",e),i=a.prefixCls;return function(){var o=D({},"".concat(i.value,"-meta"),!0),l=Vn(r,e,"avatar"),u=Vn(r,e,"title"),s=Vn(r,e,"description"),c=l?v("div",{class:"".concat(i.value,"-meta-avatar")},[l]):null,d=u?v("div",{class:"".concat(i.value,"-meta-title")},[u]):null,f=s?v("div",{class:"".concat(i.value,"-meta-description")},[s]):null,p=d||f?v("div",{class:"".concat(i.value,"-meta-detail")},[d,f]):null;return v("div",{class:o},[c,p])}}});var tz=function(){return{prefixCls:String,hoverable:{type:Boolean,default:!0}}};const Hc=ae({name:"ACardGrid",__ANT_CARD_GRID:!0,props:tz(),setup:function(e,t){var r=t.slots,a=Le("card",e),i=a.prefixCls,o=R(function(){var l;return l={},D(l,"".concat(i.value,"-grid"),!0),D(l,"".concat(i.value,"-grid-hoverable"),e.hoverable),l});return function(){var l;return v("div",{class:o.value},[(l=r.default)===null||l===void 0?void 0:l.call(r)])}}});To.Meta=zc;To.Grid=Hc;To.install=function(n){return n.component(To.name,To),n.component(zc.name,zc),n.component(Hc.name,Hc),n};var rz=function(){return{prefixCls:String,activeKey:{type:[Array,Number,String]},defaultActiveKey:{type:[Array,Number,String]},accordion:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},expandIcon:Function,openAnimation:U.object,expandIconPosition:U.oneOf(jn("left","right")),collapsible:{type:String},ghost:{type:Boolean,default:void 0},onChange:Function,"onUpdate:activeKey":Function}},B_=function(){return{openAnimation:U.object,prefixCls:String,header:U.any,headerClass:String,showArrow:{type:Boolean,default:void 0},isActive:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},accordion:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},expandIcon:Function,extra:U.any,panelKey:U.oneOfType([U.string,U.number]),collapsible:{type:String},role:String,onItemClick:{type:Function}}};function kx(n){var e=n;if(!Array.isArray(e)){var t=Be(e);e=t==="number"||t==="string"?[e]:[]}return e.map(function(r){return String(r)})}const Dl=ae({name:"ACollapse",inheritAttrs:!1,props:vn(rz(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,openAnimation:Nu("ant-motion-collapse",!1),expandIconPosition:"left"}),slots:["expandIcon"],setup:function(e,t){var r=t.attrs,a=t.slots,i=t.emit,o=q(kx(Mc([e.activeKey,e.defaultActiveKey])));Pe(function(){return e.activeKey},function(){o.value=kx(e.activeKey)},{deep:!0});var l=Le("collapse",e),u=l.prefixCls,s=l.direction,c=R(function(){var h=e.expandIconPosition;return h!==void 0?h:s.value==="rtl"?"right":"left"}),d=function(m){var b=e.expandIcon,C=b===void 0?a.expandIcon:b,x=C?C(m):v(wa,{rotate:m.isActive?90:void 0},null);return v("div",null,[at(Array.isArray(C)?x[0]:x)?wn(x,{class:"".concat(u.value,"-arrow")},!1):x])},f=function(m){e.activeKey===void 0&&(o.value=m);var b=e.accordion?m[0]:m;i("update:activeKey",b),i("change",b)},p=function(m){var b=o.value;if(e.accordion)b=b[0]===m?[]:[m];else{b=Ee(b);var C=b.indexOf(m),x=C>-1;x?b.splice(C,1):b.push(m)}f(b)},g=function(m,b){var C,x,S;if(!ku(m)){var w=o.value,_=e.accordion,P=e.destroyInactivePanel,k=e.collapsible,I=e.openAnimation,F=String((C=m.key)!==null&&C!==void 0?C:b),M=m.props||{},T=M.header,N=T===void 0?(S=(x=m.children)===null||x===void 0?void 0:x.header)===null||S===void 0?void 0:S.call(x):T,j=M.headerClass,$=M.collapsible,A=M.disabled,E=!1;_?E=w[0]===F:E=w.indexOf(F)>-1;var L=$!=null?$:k;(A||A==="")&&(L="disabled");var B={key:F,panelKey:F,header:N,headerClass:j,isActive:E,prefixCls:u.value,destroyInactivePanel:P,openAnimation:I,accordion:_,onItemClick:L==="disabled"?null:p,expandIcon:d,collapsible:L};return wn(m,B)}},y=function(){var m;return Fn((m=a.default)===null||m===void 0?void 0:m.call(a)).map(g)};return function(){var h,m=e.accordion,b=e.bordered,C=e.ghost,x=de((h={},D(h,u.value,!0),D(h,"".concat(u.value,"-borderless"),!b),D(h,"".concat(u.value,"-icon-position-").concat(c.value),!0),D(h,"".concat(u.value,"-rtl"),s.value==="rtl"),D(h,"".concat(u.value,"-ghost"),!!C),D(h,r.class,!!r.class),h));return v("div",W(W({class:x},dE(r)),{},{style:r.style,role:m?"tablist":null}),[y()])}}}),az=ae({name:"PanelContent",props:B_(),setup:function(e,t){var r=t.slots,a=q(!1);return Ze(function(){(e.isActive||e.forceRender)&&(a.value=!0)}),function(){var i,o;if(!a.value)return null;var l=e.prefixCls,u=e.isActive,s=e.role;return v("div",{ref:q,class:de("".concat(l,"-content"),(i={},D(i,"".concat(l,"-content-active"),u),D(i,"".concat(l,"-content-inactive"),!u),i)),role:s},[v("div",{class:"".concat(l,"-content-box")},[(o=r.default)===null||o===void 0?void 0:o.call(r)])])}}}),Wc=ae({name:"ACollapsePanel",inheritAttrs:!1,props:vn(B_(),{showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1}),slots:["expandIcon","extra","header"],setup:function(e,t){var r=t.slots,a=t.emit,i=t.attrs;On(e.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var o=Le("collapse",e),l=o.prefixCls,u=function(){a("itemClick",e.panelKey)},s=function(d){(d.key==="Enter"||d.keyCode===13||d.which===13)&&u()};return function(){var c,d,f,p,g=e.header,y=g===void 0?(f=r.header)===null||f===void 0?void 0:f.call(r):g,h=e.headerClass,m=e.isActive,b=e.showArrow,C=e.destroyInactivePanel,x=e.accordion,S=e.forceRender,w=e.openAnimation,_=e.expandIcon,P=_===void 0?r.expandIcon:_,k=e.extra,I=k===void 0?(p=r.extra)===null||p===void 0?void 0:p.call(r):k,F=e.collapsible,M=F==="disabled",T=l.value,N=de("".concat(T,"-header"),(c={},D(c,h,h),D(c,"".concat(T,"-header-collapsible-only"),F==="header"),c)),j=de((d={},D(d,"".concat(T,"-item"),!0),D(d,"".concat(T,"-item-active"),m),D(d,"".concat(T,"-item-disabled"),M),D(d,"".concat(T,"-no-arrow"),!b),D(d,"".concat(i.class),!!i.class),d)),$=v("i",{class:"arrow"},null);b&&typeof P=="function"&&($=P(e));var A=St(v(az,{prefixCls:T,isActive:m,forceRender:S,role:x?"tabpanel":null},{default:r.default}),[[Ar,m]]),E=O({appear:!1,css:!1},w);return v("div",W(W({},i),{},{class:j}),[v("div",{class:N,onClick:function(){return F!=="header"&&u()},role:x?"tab":"button",tabindex:M?-1:0,"aria-expanded":m,onKeypress:s},[b&&$,F==="header"?v("span",{onClick:u,class:"".concat(T,"-header-text")},[y]):y,I&&v("div",{class:"".concat(T,"-extra")},[I])]),v(Lt,E,{default:function(){return[!C||m?A:null]}})])}}});Dl.Panel=Wc;Dl.install=function(n){return n.component(Dl.name,Dl),n.component(Wc.name,Wc),n};var iz=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},oz=function(e){var t=/[height|width]$/;return t.test(e)},Px=function(e){var t="",r=Object.keys(e);return r.forEach(function(a,i){var o=e[a];a=iz(a),oz(a)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=a:o===!1?t+="not "+a:t+="("+a+": "+o+")",i<r.length-1&&(t+=" and ")}),t};function nv(n){var e="";return typeof n=="string"?n:n instanceof Array?(n.forEach(function(t,r){e+=Px(t),r<n.length-1&&(e+=", ")}),e):Px(n)}var lz=function(){return Fr.Date.now()};const tv=lz;var uz="Expected a function",sz=Math.max,cz=Math.min;function Wd(n,e,t){var r,a,i,o,l,u,s=0,c=!1,d=!1,f=!0;if(typeof n!="function")throw new TypeError(uz);e=Dp(e)||0,Mr(t)&&(c=!!t.leading,d="maxWait"in t,i=d?sz(Dp(t.maxWait)||0,e):i,f="trailing"in t?!!t.trailing:f);function p(w){var _=r,P=a;return r=a=void 0,s=w,o=n.apply(P,_),o}function g(w){return s=w,l=setTimeout(m,e),c?p(w):o}function y(w){var _=w-u,P=w-s,k=e-_;return d?cz(k,i-P):k}function h(w){var _=w-u,P=w-s;return u===void 0||_>=e||_<0||d&&P>=i}function m(){var w=tv();if(h(w))return b(w);l=setTimeout(m,y(w))}function b(w){return l=void 0,f&&r?p(w):(r=a=void 0,o)}function C(){l!==void 0&&clearTimeout(l),s=0,r=u=a=l=void 0}function x(){return l===void 0?o:b(tv())}function S(){var w=tv(),_=h(w);if(r=arguments,a=this,u=w,_){if(l===void 0)return g(u);if(d)return clearTimeout(l),l=setTimeout(m,e),p(u)}return l===void 0&&(l=setTimeout(m,e)),o}return S.cancel=C,S.flush=x,S}var dz={accessibility:{type:Boolean,default:!0},adaptiveHeight:{type:Boolean,default:!1},afterChange:U.any.def(null),arrows:{type:Boolean,default:!0},autoplay:{type:Boolean,default:!1},autoplaySpeed:U.number.def(3e3),beforeChange:U.any.def(null),centerMode:{type:Boolean,default:!1},centerPadding:U.string.def("50px"),cssEase:U.string.def("ease"),dots:{type:Boolean,default:!1},dotsClass:U.string.def("slick-dots"),draggable:{type:Boolean,default:!0},unslick:{type:Boolean,default:!1},easing:U.string.def("linear"),edgeFriction:U.number.def(.35),fade:{type:Boolean,default:!1},focusOnSelect:{type:Boolean,default:!1},infinite:{type:Boolean,default:!0},initialSlide:U.number.def(0),lazyLoad:U.any.def(null),verticalSwiping:{type:Boolean,default:!1},asNavFor:U.any.def(null),pauseOnDotsHover:{type:Boolean,default:!1},pauseOnFocus:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},responsive:U.array,rows:U.number.def(1),rtl:{type:Boolean,default:!1},slide:U.string.def("div"),slidesPerRow:U.number.def(1),slidesToScroll:U.number.def(1),slidesToShow:U.number.def(1),speed:U.number.def(500),swipe:{type:Boolean,default:!0},swipeEvent:U.any.def(null),swipeToSlide:{type:Boolean,default:!1},touchMove:{type:Boolean,default:!0},touchThreshold:U.number.def(5),useCSS:{type:Boolean,default:!0},useTransform:{type:Boolean,default:!0},variableWidth:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},waitForAnimate:{type:Boolean,default:!0},children:U.array,__propsSymbol__:U.any};const V_=dz;var fz={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};const vz=fz;function Wp(n,e,t){return Math.max(e,Math.min(n,t))}var No=function(e){var t=["touchstart","touchmove","wheel"];t.includes(e.type)||e.preventDefault()},Uc=function(e){for(var t=[],r=K_(e),a=z_(e),i=r;i<a;i++)e.lazyLoadedList.indexOf(i)<0&&t.push(i);return t},K_=function(e){return e.currentSlide-pz(e)},z_=function(e){return e.currentSlide+hz(e)},pz=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},hz=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},Up=function(e){return e&&e.offsetWidth||0},Oy=function(e){return e&&e.offsetHeight||0},H_=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,a=e.startX-e.curX,i=e.startY-e.curY,o=Math.atan2(i,a);return r=Math.round(o*180/Math.PI),r<0&&(r=360-Math.abs(r)),r<=45&&r>=0||r<=360&&r>=315?"left":r>=135&&r<=225?"right":t===!0?r>=35&&r<=135?"up":"down":"vertical"},Ud=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t},rv=function(e,t){var r={};return t.forEach(function(a){return r[a]=e[a]}),r},gz=function(e){var t=e.children.length,r=e.listRef,a=Math.ceil(Up(r)),i=e.trackRef,o=Math.ceil(Up(i)),l;if(e.vertical)l=a;else{var u=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(u*=a/100),l=Math.ceil((a-u)/e.slidesToShow)}var s=r&&Oy(r.querySelector('[data-index="0"]')),c=s*e.slidesToShow,d=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(d=t-1-e.initialSlide);var f=e.lazyLoadedList||[],p=Uc(O(O({},e),{currentSlide:d,lazyLoadedList:f}));f=f.concat(p);var g={slideCount:t,slideWidth:l,listWidth:a,trackWidth:o,currentSlide:d,slideHeight:s,listHeight:c,lazyLoadedList:f};return e.autoplaying===null&&e.autoplay&&(g.autoplaying="playing"),g},mz=function(e){var t=e.waitForAnimate,r=e.animating,a=e.fade,i=e.infinite,o=e.index,l=e.slideCount,u=e.lazyLoad,s=e.currentSlide,c=e.centerMode,d=e.slidesToScroll,f=e.slidesToShow,p=e.useCSS,g=e.lazyLoadedList;if(t&&r)return{};var y=o,h,m,b,C={},x={},S=i?o:Wp(o,0,l-1);if(a){if(!i&&(o<0||o>=l))return{};o<0?y=o+l:o>=l&&(y=o-l),u&&g.indexOf(y)<0&&(g=g.concat(y)),C={animating:!0,currentSlide:y,lazyLoadedList:g,targetSlide:y},x={animating:!1,targetSlide:y}}else h=y,y<0?(h=y+l,i?l%d!==0&&(h=l-l%d):h=0):!Ud(e)&&y>s?y=h=s:c&&y>=l?(y=i?l:l-1,h=i?0:l-1):y>=l&&(h=y-l,i?l%d!==0&&(h=0):h=l-f),!i&&y+f>=l&&(h=l-f),m=hu(O(O({},e),{slideIndex:y})),b=hu(O(O({},e),{slideIndex:h})),i||(m===b&&(y=h),m=b),u&&(g=g.concat(Uc(O(O({},e),{currentSlide:y})))),p?(C={animating:!0,currentSlide:h,trackStyle:W_(O(O({},e),{left:m})),lazyLoadedList:g,targetSlide:S},x={animating:!1,currentSlide:h,trackStyle:pu(O(O({},e),{left:b})),swipeLeft:null,targetSlide:S}):C={currentSlide:h,trackStyle:pu(O(O({},e),{left:b})),lazyLoadedList:g,targetSlide:S};return{state:C,nextState:x}},yz=function(e,t){var r,a,i,o=e.slidesToScroll,l=e.slidesToShow,u=e.slideCount,s=e.currentSlide,c=e.targetSlide,d=e.lazyLoad,f=e.infinite,p=u%o!==0,g=p?0:(u-s)%o;if(t.message==="previous")a=g===0?o:l-g,i=s-a,d&&!f&&(r=s-a,i=r===-1?u-1:r),f||(i=c-o);else if(t.message==="next")a=g===0?o:g,i=s+a,d&&!f&&(i=(s+o)%u+g),f||(i=c+o);else if(t.message==="dots")i=t.index*t.slidesToScroll;else if(t.message==="children"){if(i=t.index,f){var y=kz(O(O({},e),{targetSlide:i}));i>t.currentSlide&&y==="left"?i=i-u:i<t.currentSlide&&y==="right"&&(i=i+u)}}else t.message==="index"&&(i=Number(t.index));return i},bz=function(e,t,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""},Cz=function(e,t,r){return e.target.tagName==="IMG"&&No(e),!t||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}},xz=function(e,t){var r=t.scrolling,a=t.animating,i=t.vertical,o=t.swipeToSlide,l=t.verticalSwiping,u=t.rtl,s=t.currentSlide,c=t.edgeFriction,d=t.edgeDragged,f=t.onEdge,p=t.swiped,g=t.swiping,y=t.slideCount,h=t.slidesToScroll,m=t.infinite,b=t.touchObject,C=t.swipeEvent,x=t.listHeight,S=t.listWidth;if(!r){if(a)return No(e);i&&o&&l&&No(e);var w,_={},P=hu(t);b.curX=e.touches?e.touches[0].pageX:e.clientX,b.curY=e.touches?e.touches[0].pageY:e.clientY,b.swipeLength=Math.round(Math.sqrt(Math.pow(b.curX-b.startX,2)));var k=Math.round(Math.sqrt(Math.pow(b.curY-b.startY,2)));if(!l&&!g&&k>10)return{scrolling:!0};l&&(b.swipeLength=k);var I=(u?-1:1)*(b.curX>b.startX?1:-1);l&&(I=b.curY>b.startY?1:-1);var F=Math.ceil(y/h),M=H_(t.touchObject,l),T=b.swipeLength;return m||(s===0&&(M==="right"||M==="down")||s+1>=F&&(M==="left"||M==="up")||!Ud(t)&&(M==="left"||M==="up"))&&(T=b.swipeLength*c,d===!1&&f&&(f(M),_.edgeDragged=!0)),!p&&C&&(C(M),_.swiped=!0),i?w=P+T*(x/S)*I:u?w=P-T*I:w=P+T*I,l&&(w=P+T*I),_=O(O({},_),{touchObject:b,swipeLeft:w,trackStyle:pu(O(O({},t),{left:w}))}),Math.abs(b.curX-b.startX)<Math.abs(b.curY-b.startY)*.8||b.swipeLength>10&&(_.swiping=!0,No(e)),_}},wz=function(e,t){var r=t.dragging,a=t.swipe,i=t.touchObject,o=t.listWidth,l=t.touchThreshold,u=t.verticalSwiping,s=t.listHeight,c=t.swipeToSlide,d=t.scrolling,f=t.onSwipe,p=t.targetSlide,g=t.currentSlide,y=t.infinite;if(!r)return a&&No(e),{};var h=u?s/l:o/l,m=H_(i,u),b={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!i.swipeLength)return b;if(i.swipeLength>h){No(e),f&&f(m);var C,x,S=y?g:p;switch(m){case"left":case"up":x=S+Tx(t),C=c?Ox(t,x):x,b.currentDirection=0;break;case"right":case"down":x=S-Tx(t),C=c?Ox(t,x):x,b.currentDirection=1;break;default:C=S}b.triggerSlideHandler=C}else{var w=hu(t);b.trackStyle=W_(O(O({},t),{left:w}))}return b},Sz=function(e){for(var t=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,a=e.infinite?e.slidesToShow*-1:0,i=[];r<t;)i.push(r),r=a+e.slidesToScroll,a+=Math.min(e.slidesToScroll,e.slidesToShow);return i},Ox=function(e,t){var r=Sz(e),a=0;if(t>r[r.length-1])t=r[r.length-1];else for(var i in r){if(t<r[i]){t=a;break}a=r[i]}return t},Tx=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,a=e.listRef,i=a.querySelectorAll&&a.querySelectorAll(".slick-slide")||[];if(Array.from(i).every(function(u){if(e.vertical){if(u.offsetTop+Oy(u)/2>e.swipeLeft*-1)return r=u,!1}else if(u.offsetLeft-t+Up(u)/2>e.swipeLeft*-1)return r=u,!1;return!0}),!r)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,l=Math.abs(r.dataset.index-o)||1;return l}else return e.slidesToScroll},Ty=function(e,t){return t.reduce(function(r,a){return r&&e.hasOwnProperty(a)},!0)?null:console.error("Keys Missing:",e)},pu=function(e){Ty(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var t,r,a=e.slideCount+2*e.slidesToShow;e.vertical?r=a*e.slideHeight:t=_z(e)*e.slideWidth;var i={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",u=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";i=O(O({},i),{WebkitTransform:o,transform:l,msTransform:u})}else e.vertical?i.top=e.left:i.left=e.left;return e.fade&&(i={opacity:1}),t&&(i.width=t+"px"),r&&(i.height=r+"px"),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?i.marginTop=e.left+"px":i.marginLeft=e.left+"px"),i},W_=function(e){Ty(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=pu(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},hu=function(e){if(e.unslick)return 0;Ty(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t=e.slideIndex,r=e.trackRef,a=e.infinite,i=e.centerMode,o=e.slideCount,l=e.slidesToShow,u=e.slidesToScroll,s=e.slideWidth,c=e.listWidth,d=e.variableWidth,f=e.slideHeight,p=e.fade,g=e.vertical,y=0,h,m,b=0;if(p||e.slideCount===1)return 0;var C=0;if(a?(C=-Ca(e),o%u!==0&&t+u>o&&(C=-(t>o?l-(t-o):o%u)),i&&(C+=parseInt(l/2))):(o%u!==0&&t+u>o&&(C=l-o%u),i&&(C=parseInt(l/2))),y=C*s,b=C*f,g?h=t*f*-1+b:h=t*s*-1+y,d===!0){var x,S=r;if(x=t+Ca(e),m=S&&S.childNodes[x],h=m?m.offsetLeft*-1:0,i===!0){x=a?t+Ca(e):t,m=S&&S.children[x],h=0;for(var w=0;w<x;w++)h-=S&&S.children[w]&&S.children[w].offsetWidth;h-=parseInt(e.centerPadding),h+=m&&(c-m.offsetWidth)/2}}return h},Ca=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},Rs=function(e){return e.unslick||!e.infinite?0:e.slideCount},_z=function(e){return e.slideCount===1?1:Ca(e)+e.slideCount+Rs(e)},kz=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+Pz(e)?"left":"right":e.targetSlide<e.currentSlide-Oz(e)?"right":"left"},Pz=function(e){var t=e.slidesToShow,r=e.centerMode,a=e.rtl,i=e.centerPadding;if(r){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),a&&t%2===0&&(o+=1),o}return a?0:t-1},Oz=function(e){var t=e.slidesToShow,r=e.centerMode,a=e.rtl,i=e.centerPadding;if(r){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),!a&&t%2===0&&(o+=1),o}return a?t-1:0},Nx=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},av=function(e){var t,r,a,i;e.rtl?i=e.slideCount-1-e.index:i=e.index;var o=i<0||i>=e.slideCount;e.centerMode?(a=Math.floor(e.slidesToShow/2),r=(i-e.currentSlide)%e.slideCount===0,i>e.currentSlide-a-1&&i<=e.currentSlide+a&&(t=!0)):t=e.currentSlide<=i&&i<e.currentSlide+e.slidesToShow;var l;e.targetSlide<0?l=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?l=e.targetSlide-e.slideCount:l=e.targetSlide;var u=i===l;return{"slick-slide":!0,"slick-active":t,"slick-center":r,"slick-cloned":o,"slick-current":u}},Tz=function(e){var t={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(t.width=e.slideWidth+(typeof e.slideWidth=="number"?"px":"")),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight)+"px":t.left=-e.index*parseInt(e.slideWidth)+"px",t.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t},iv=function(e,t){return e.key+"-"+t},Nz=function(e,t){var r,a=[],i=[],o=[],l=t.length,u=K_(e),s=z_(e);return t.forEach(function(c,d){var f,p={message:"children",index:d,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(d)>=0?f=c:f=v("div");var g=Tz(O(O({},e),{index:d})),y=f.props.class||"",h=av(O(O({},e),{index:d}));if(a.push(wn(f,{key:"original"+iv(f,d),tabindex:"-1","data-index":d,"aria-hidden":!h["slick-active"],class:de(h,y),style:O(O({outline:"none"},f.props.style||{}),g),onClick:function(){e.focusOnSelect&&e.focusOnSelect(p)}})),e.infinite&&e.fade===!1){var m=l-d;m<=Ca(e)&&l!==e.slidesToShow&&(r=-m,r>=u&&(f=c),h=av(O(O({},e),{index:r})),i.push(wn(f,{key:"precloned"+iv(f,r),class:de(h,y),tabindex:"-1","data-index":r,"aria-hidden":!h["slick-active"],style:O(O({},f.props.style||{}),g),onClick:function(){e.focusOnSelect&&e.focusOnSelect(p)}}))),l!==e.slidesToShow&&(r=l+d,r<s&&(f=c),h=av(O(O({},e),{index:r})),o.push(wn(f,{key:"postcloned"+iv(f,r),tabindex:"-1","data-index":r,"aria-hidden":!h["slick-active"],class:de(h,y),style:O(O({},f.props.style||{}),g),onClick:function(){e.focusOnSelect&&e.focusOnSelect(p)}})))}}),e.rtl?i.concat(a,o).reverse():i.concat(a,o)},U_=function(e,t){var r=t.attrs,a=t.slots,i=Nz(r,Fn(a==null?void 0:a.default())),o=r.onMouseenter,l=r.onMouseover,u=r.onMouseleave,s={onMouseenter:o,onMouseover:l,onMouseleave:u},c=O({class:"slick-track",style:r.trackStyle},s);return v("div",c,[i])};U_.inheritAttrs=!1;const Iz=U_;var Ez=function(e){var t;return e.infinite?t=Math.ceil(e.slideCount/e.slidesToScroll):t=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,t},q_=function(e,t){for(var r=t.attrs,a=r.slideCount,i=r.slidesToScroll,o=r.slidesToShow,l=r.infinite,u=r.currentSlide,s=r.appendDots,c=r.customPaging,d=r.clickHandler,f=r.dotsClass,p=r.onMouseenter,g=r.onMouseover,y=r.onMouseleave,h=Ez({slideCount:a,slidesToScroll:i,slidesToShow:o,infinite:l}),m={onMouseenter:p,onMouseover:g,onMouseleave:y},b=[],C=function(w){var _=(w+1)*i-1,P=l?_:Wp(_,0,a-1),k=P-(i-1),I=l?k:Wp(k,0,a-1),F=de({"slick-active":l?u>=I&&u<=P:u===I}),M={message:"dots",index:w,slidesToScroll:i,currentSlide:u};function T(N){N&&N.preventDefault(),d(M)}b=b.concat(v("li",{key:w,class:F},[wn(c({i:w}),{onClick:T})]))},x=0;x<h;x++)C(x);return wn(s({dots:b}),O({class:f},m))};q_.inheritAttrs=!1;const Mz=q_;function Y_(){}function G_(n,e,t){t&&t.preventDefault(),e(n,t)}var X_=function(e,t){var r=t.attrs,a=r.clickHandler,i=r.infinite,o=r.currentSlide,l=r.slideCount,u=r.slidesToShow,s={"slick-arrow":!0,"slick-prev":!0},c=function(y){G_({message:"previous"},a,y)};!i&&(o===0||l<=u)&&(s["slick-disabled"]=!0,c=Y_);var d={key:"0","data-role":"none",class:s,style:{display:"block"},onClick:c},f={currentSlide:o,slideCount:l},p;return r.prevArrow?p=wn(r.prevArrow(O(O({},d),f)),{key:"0",class:s,style:{display:"block"},onClick:c},!1):p=v("button",W({key:"0",type:"button"},d),[" ",tt("Previous")]),p};X_.inheritAttrs=!1;var Z_=function(e,t){var r=t.attrs,a=r.clickHandler,i=r.currentSlide,o=r.slideCount,l={"slick-arrow":!0,"slick-next":!0},u=function(p){G_({message:"next"},a,p)};Ud(r)||(l["slick-disabled"]=!0,u=Y_);var s={key:"1","data-role":"none",class:de(l),style:{display:"block"},onClick:u},c={currentSlide:i,slideCount:o},d;return r.nextArrow?d=wn(r.nextArrow(O(O({},s),c)),{key:"1",class:de(l),style:{display:"block"},onClick:u},!1):d=v("button",W({key:"1",type:"button"},s),[" ",tt("Next")]),d};Z_.inheritAttrs=!1;var Az=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function Ut(){}const Fz={name:"InnerSlider",mixins:[qi],inheritAttrs:!1,props:O({},V_),data:function(){this.preProps=O({},this.$props),this.list=null,this.track=null,this.callbackTimers=[],this.clickable=!0,this.debouncedResize=null;var e=this.ssrInit();return O(O(O({},vz),{currentSlide:this.initialSlide,slideCount:this.children.length}),e)},watch:{__propsSymbol__:function(){for(var e=this,t=this.$props,r=O(O({listRef:this.list,trackRef:this.track},t),this.$data),a=!1,i=0,o=Object.keys(this.preProps);i<o.length;i++){var l=o[i];if(!t.hasOwnProperty(l)){a=!0;break}if(!(Be(t[l])==="object"||typeof t[l]=="function"||Be(t[l])==="symbol")&&t[l]!==this.preProps[l]){a=!0;break}}this.updateState(r,a,function(){e.currentSlide>=t.children.length&&e.changeSlide({message:"index",index:t.children.length-t.slidesToShow,currentSlide:e.currentSlide}),!e.preProps.autoplay&&t.autoplay?e.handleAutoPlay("playing"):t.autoplay?e.handleAutoPlay("update"):e.pause("paused")}),this.preProps=O({},t)}},mounted:function(){var e=this;if(this.__emit("init"),this.lazyLoad){var t=Uc(O(O({},this.$props),this.$data));t.length>0&&(this.setState(function(r){return{lazyLoadedList:r.lazyLoadedList.concat(t)}}),this.__emit("lazyLoad",t))}this.$nextTick(function(){var r=O({listRef:e.list,trackRef:e.track,children:e.children},e.$props);e.updateState(r,!0,function(){e.adaptHeight(),e.autoplay&&e.handleAutoPlay("playing")}),e.lazyLoad==="progressive"&&(e.lazyLoadTimer=setInterval(e.progressiveLazyLoad,1e3)),e.ro=new em(function(){e.animating?(e.onWindowResized(!1),e.callbackTimers.push(setTimeout(function(){return e.onWindowResized()},e.speed))):e.onWindowResized()}),e.ro.observe(e.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(a){a.onfocus=e.$props.pauseOnFocus?e.onSlideFocus:null,a.onblur=e.$props.pauseOnFocus?e.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",e.onWindowResized):window.attachEvent("onresize",e.onWindowResized)})},beforeUnmount:function(){var e;this.animationEndCallback&&clearTimeout(this.animationEndCallback),this.lazyLoadTimer&&clearInterval(this.lazyLoadTimer),this.callbackTimers.length&&(this.callbackTimers.forEach(function(t){return clearTimeout(t)}),this.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",this.onWindowResized):window.detachEvent("onresize",this.onWindowResized),this.autoplayTimer&&clearInterval(this.autoplayTimer),(e=this.ro)===null||e===void 0||e.disconnect()},updated:function(){if(this.checkImagesLoad(),this.__emit("reInit"),this.lazyLoad){var e=Uc(O(O({},this.$props),this.$data));e.length>0&&(this.setState(function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}}),this.__emit("lazyLoad"))}this.adaptHeight()},methods:{listRefHandler:function(e){this.list=e},trackRefHandler:function(e){this.track=e},adaptHeight:function(){if(this.adaptiveHeight&&this.list){var e=this.list.querySelector('[data-index="'.concat(this.currentSlide,'"]'));this.list.style.height=Oy(e)+"px"}},onWindowResized:function(e){var t=this;this.debouncedResize&&this.debouncedResize.cancel(),this.debouncedResize=Wd(function(){return t.resizeWindow(e)},50),this.debouncedResize()},resizeWindow:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,r=Boolean(this.track);if(!!r){var a=O(O({listRef:this.list,trackRef:this.track,children:this.children},this.$props),this.$data);this.updateState(a,t,function(){e.autoplay?e.handleAutoPlay("update"):e.pause("paused")}),this.setState({animating:!1}),clearTimeout(this.animationEndCallback),delete this.animationEndCallback}},updateState:function(e,t,r){var a=gz(e);e=O(O(O({},e),a),{slideIndex:a.currentSlide});var i=hu(e);e=O(O({},e),{left:i});var o=pu(e);(t||this.children.length!==e.children.length)&&(a.trackStyle=o),this.setState(a,r)},ssrInit:function(){var e=this.children;if(this.variableWidth){var t=0,r=0,a=[],i=Ca(O(O(O({},this.$props),this.$data),{slideCount:e.length})),o=Rs(O(O(O({},this.$props),this.$data),{slideCount:e.length}));e.forEach(function(C){var x,S,w=((S=(x=C.props.style)===null||x===void 0?void 0:x.width)===null||S===void 0?void 0:S.split("px")[0])||0;a.push(w),t+=w});for(var l=0;l<i;l++)r+=a[a.length-1-l],t+=a[a.length-1-l];for(var u=0;u<o;u++)t+=a[u];for(var s=0;s<this.currentSlide;s++)r+=a[s];var c={width:t+"px",left:-r+"px"};if(this.centerMode){var d="".concat(a[this.currentSlide],"px");c.left="calc(".concat(c.left," + (100% - ").concat(d,") / 2 ) ")}return{trackStyle:c}}var f=e.length,p=O(O(O({},this.$props),this.$data),{slideCount:f}),g=Ca(p)+Rs(p)+f,y=100/this.slidesToShow*g,h=100/g,m=-h*(Ca(p)+this.currentSlide)*y/100;this.centerMode&&(m+=(100-h*y/100)/2);var b={width:y+"%",left:m+"%"};return{slideWidth:h+"%",trackStyle:b}},checkImagesLoad:function(){var e=this,t=this.list&&this.list.querySelectorAll&&this.list.querySelectorAll(".slick-slide img")||[],r=t.length,a=0;Array.prototype.forEach.call(t,function(i){var o=function(){return++a&&a>=r&&e.onWindowResized()};if(!i.onclick)i.onclick=function(){return i.parentNode.focus()};else{var l=i.onclick;i.onclick=function(){l(),i.parentNode.focus()}}i.onload||(e.$props.lazyLoad?i.onload=function(){e.adaptHeight(),e.callbackTimers.push(setTimeout(e.onWindowResized,e.speed))}:(i.onload=o,i.onerror=function(){o(),e.__emit("lazyLoadError")}))})},progressiveLazyLoad:function(){for(var e=[],t=O(O({},this.$props),this.$data),r=this.currentSlide;r<this.slideCount+Rs(t);r++)if(this.lazyLoadedList.indexOf(r)<0){e.push(r);break}for(var a=this.currentSlide-1;a>=-Ca(t);a--)if(this.lazyLoadedList.indexOf(a)<0){e.push(a);break}e.length>0?(this.setState(function(i){return{lazyLoadedList:i.lazyLoadedList.concat(e)}}),this.__emit("lazyLoad",e)):this.lazyLoadTimer&&(clearInterval(this.lazyLoadTimer),delete this.lazyLoadTimer)},slideHandler:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=this.$props,i=a.asNavFor,o=a.currentSlide,l=a.beforeChange,u=a.speed,s=a.afterChange,c=mz(O(O(O({index:e},this.$props),this.$data),{trackRef:this.track,useCSS:this.useCSS&&!r})),d=c.state,f=c.nextState;if(!!d){l&&l(o,d.currentSlide);var p=d.lazyLoadedList.filter(function(g){return t.lazyLoadedList.indexOf(g)<0});this.$attrs.onLazyLoad&&p.length>0&&this.__emit("lazyLoad",p),!this.$props.waitForAnimate&&this.animationEndCallback&&(clearTimeout(this.animationEndCallback),s&&s(o),delete this.animationEndCallback),this.setState(d,function(){i&&t.asNavForIndex!==e&&(t.asNavForIndex=e,i.innerSlider.slideHandler(e)),f&&(t.animationEndCallback=setTimeout(function(){var g=f.animating,y=Az(f,["animating"]);t.setState(y,function(){t.callbackTimers.push(setTimeout(function(){return t.setState({animating:g})},10)),s&&s(d.currentSlide),delete t.animationEndCallback})},u))})}},changeSlide:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=O(O({},this.$props),this.$data),a=yz(r,e);if(!(a!==0&&!a)&&(t===!0?this.slideHandler(a,t):this.slideHandler(a),this.$props.autoplay&&this.handleAutoPlay("update"),this.$props.focusOnSelect)){var i=this.list.querySelectorAll(".slick-current");i[0]&&i[0].focus()}},clickHandler:function(e){this.clickable===!1&&(e.stopPropagation(),e.preventDefault()),this.clickable=!0},keyHandler:function(e){var t=bz(e,this.accessibility,this.rtl);t!==""&&this.changeSlide({message:t})},selectHandler:function(e){this.changeSlide(e)},disableBodyScroll:function(){var e=function(r){r=r||window.event,r.preventDefault&&r.preventDefault(),r.returnValue=!1};window.ontouchmove=e},enableBodyScroll:function(){window.ontouchmove=null},swipeStart:function(e){this.verticalSwiping&&this.disableBodyScroll();var t=Cz(e,this.swipe,this.draggable);t!==""&&this.setState(t)},swipeMove:function(e){var t=xz(e,O(O(O({},this.$props),this.$data),{trackRef:this.track,listRef:this.list,slideIndex:this.currentSlide}));!t||(t.swiping&&(this.clickable=!1),this.setState(t))},swipeEnd:function(e){var t=wz(e,O(O(O({},this.$props),this.$data),{trackRef:this.track,listRef:this.list,slideIndex:this.currentSlide}));if(!!t){var r=t.triggerSlideHandler;delete t.triggerSlideHandler,this.setState(t),r!==void 0&&(this.slideHandler(r),this.$props.verticalSwiping&&this.enableBodyScroll())}},touchEnd:function(e){this.swipeEnd(e),this.clickable=!0},slickPrev:function(){var e=this;this.callbackTimers.push(setTimeout(function(){return e.changeSlide({message:"previous"})},0))},slickNext:function(){var e=this;this.callbackTimers.push(setTimeout(function(){return e.changeSlide({message:"next"})},0))},slickGoTo:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e=Number(e),isNaN(e))return"";this.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"index",index:e,currentSlide:t.currentSlide},r)},0))},play:function(){var e;if(this.rtl)e=this.currentSlide-this.slidesToScroll;else if(Ud(O(O({},this.$props),this.$data)))e=this.currentSlide+this.slidesToScroll;else return!1;this.slideHandler(e)},handleAutoPlay:function(e){this.autoplayTimer&&clearInterval(this.autoplayTimer);var t=this.autoplaying;if(e==="update"){if(t==="hovered"||t==="focused"||t==="paused")return}else if(e==="leave"){if(t==="paused"||t==="focused")return}else if(e==="blur"&&(t==="paused"||t==="hovered"))return;this.autoplayTimer=setInterval(this.play,this.autoplaySpeed+50),this.setState({autoplaying:"playing"})},pause:function(e){this.autoplayTimer&&(clearInterval(this.autoplayTimer),this.autoplayTimer=null);var t=this.autoplaying;e==="paused"?this.setState({autoplaying:"paused"}):e==="focused"?(t==="hovered"||t==="playing")&&this.setState({autoplaying:"focused"}):t==="playing"&&this.setState({autoplaying:"hovered"})},onDotsOver:function(){this.autoplay&&this.pause("hovered")},onDotsLeave:function(){this.autoplay&&this.autoplaying==="hovered"&&this.handleAutoPlay("leave")},onTrackOver:function(){this.autoplay&&this.pause("hovered")},onTrackLeave:function(){this.autoplay&&this.autoplaying==="hovered"&&this.handleAutoPlay("leave")},onSlideFocus:function(){this.autoplay&&this.pause("focused")},onSlideBlur:function(){this.autoplay&&this.autoplaying==="focused"&&this.handleAutoPlay("blur")},customPaging:function(e){var t=e.i;return v("button",null,[t+1])},appendDots:function(e){var t=e.dots;return v("ul",{style:{display:"block"}},[t])}},render:function(){var e,t=this,r=de("slick-slider",this.$attrs.class,{"slick-vertical":this.vertical,"slick-initialized":!0}),a=O(O({},this.$props),this.$data),i=rv(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),o=this.$props.pauseOnHover;i=O(O({},i),{focusOnSelect:this.focusOnSelect&&this.clickable?this.selectHandler:null,ref:this.trackRefHandler,onMouseleave:o?this.onTrackLeave:Ut,onMouseover:o?this.onTrackOver:Ut});var l;if(this.dots===!0&&this.slideCount>=this.slidesToShow){var u=rv(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","infinite","appendDots"]);u.customPaging=this.customPaging,u.appendDots=this.appendDots;var s=this.$slots,c=s.customPaging,d=s.appendDots;c&&(u.customPaging=c),d&&(u.appendDots=d);var f=this.$props.pauseOnDotsHover;u=O(O({},u),{clickHandler:this.changeSlide,onMouseover:f?this.onDotsOver:Ut,onMouseleave:f?this.onDotsLeave:Ut}),l=v(Mz,u,null)}var p,g,y=rv(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow"]);y.clickHandler=this.changeSlide;var h=this.$slots,m=h.prevArrow,b=h.nextArrow;m&&(y.prevArrow=m),b&&(y.nextArrow=b),this.arrows&&(p=v(X_,y,null),g=v(Z_,y,null));var C=null;this.vertical&&(C={height:typeof this.listHeight=="number"?"".concat(this.listHeight,"px"):this.listHeight});var x=null;this.vertical===!1?this.centerMode===!0&&(x={padding:"0px "+this.centerPadding}):this.centerMode===!0&&(x={padding:this.centerPadding+" 0px"});var S=O(O({},C),x),w=this.touchMove,_=(e={ref:this.listRefHandler,class:"slick-list",style:S,onClick:this.clickHandler,onMousedown:w?this.swipeStart:Ut,onMousemove:this.dragging&&w?this.swipeMove:Ut,onMouseup:w?this.swipeEnd:Ut,onMouseleave:this.dragging&&w?this.swipeEnd:Ut},D(e,ot?"onTouchstartPassive":"onTouchstart",w?this.swipeStart:Ut),D(e,ot?"onTouchmovePassive":"onTouchmove",this.dragging&&w?this.swipeMove:Ut),D(e,"onTouchend",w?this.touchEnd:Ut),D(e,"onTouchcancel",this.dragging&&w?this.swipeEnd:Ut),D(e,"onKeydown",this.accessibility?this.keyHandler:Ut),e),P={class:r,dir:"ltr",style:this.$attrs.style};return this.unslick&&(_={class:"slick-list",ref:this.listRefHandler},P={class:r}),v("div",P,[this.unslick?"":p,v("div",_,[v(Iz,i,{default:function(){return[t.children]}})]),this.unslick?"":g,this.unslick?"":l])}},jz=ae({name:"Slider",mixins:[qi],inheritAttrs:!1,props:O({},V_),data:function(){return this._responsiveMediaHandlers=[],{breakpoint:null}},mounted:function(){var e=this;if(this.responsive){var t=this.responsive.map(function(a){return a.breakpoint});t.sort(function(a,i){return a-i}),t.forEach(function(a,i){var o;i===0?o=nv({minWidth:0,maxWidth:a}):o=nv({minWidth:t[i-1]+1,maxWidth:a}),Nx()&&e.media(o,function(){e.setState({breakpoint:a})})});var r=nv({minWidth:t.slice(-1)[0]});Nx()&&this.media(r,function(){e.setState({breakpoint:null})})}},beforeUnmount:function(){this._responsiveMediaHandlers.forEach(function(e){e.mql.removeListener(e.listener)})},methods:{innerSliderRefHandler:function(e){this.innerSlider=e},media:function(e,t){var r=window.matchMedia(e),a=function(o){var l=o.matches;l&&t()};r.addListener(a),a(r),this._responsiveMediaHandlers.push({mql:r,query:e,listener:a})},slickPrev:function(){var e;(e=this.innerSlider)===null||e===void 0||e.slickPrev()},slickNext:function(){var e;(e=this.innerSlider)===null||e===void 0||e.slickNext()},slickGoTo:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;(r=this.innerSlider)===null||r===void 0||r.slickGoTo(e,t)},slickPause:function(){var e;(e=this.innerSlider)===null||e===void 0||e.pause("paused")},slickPlay:function(){var e;(e=this.innerSlider)===null||e===void 0||e.handleAutoPlay("play")}},render:function(){var e=this,t,r,a;this.breakpoint?(a=this.responsive.filter(function(y){return y.breakpoint===e.breakpoint}),r=a[0].settings==="unslick"?"unslick":O(O({},this.$props),a[0].settings)):r=O({},this.$props),r.centerMode&&(r.slidesToScroll>1,r.slidesToScroll=1),r.fade&&(r.slidesToShow>1,r.slidesToScroll>1,r.slidesToShow=1,r.slidesToScroll=1);var i=_u(this)||[];i=i.filter(function(y){return typeof y=="string"?!!y.trim():!!y}),r.variableWidth&&(r.rows>1||r.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),r.variableWidth=!1);for(var o=[],l=null,u=0;u<i.length;u+=r.rows*r.slidesPerRow){for(var s=[],c=u;c<u+r.rows*r.slidesPerRow;c+=r.slidesPerRow){for(var d=[],f=c;f<c+r.slidesPerRow&&(r.variableWidth&&((t=i[f].props)===null||t===void 0?void 0:t.style)&&(l=i[f].props.style.width),!(f>=i.length));f+=1)d.push(wn(i[f],{key:100*u+10*c+f,tabindex:-1,style:{width:"".concat(100/r.slidesPerRow,"%"),display:"inline-block"}}));s.push(v("div",{key:10*u+c},[d]))}r.variableWidth?o.push(v("div",{key:u,style:{width:l}},[s])):o.push(v("div",{key:u},[s]))}if(r==="unslick"){var p="regular slider "+(this.className||"");return v("div",{class:p},[i])}else o.length<=r.slidesToShow&&(r.unslick=!0);var g=O(O(O({},this.$attrs),r),{children:o,ref:this.innerSliderRefHandler});return v(Fz,W(W({},g),{},{__propsSymbol__:[]}),this.$slots)}});var Dz=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},Lz=function(){return{effect:String,dots:{type:Boolean,default:!0},vertical:{type:Boolean,default:void 0},autoplay:{type:Boolean,default:void 0},easing:String,beforeChange:Function,afterChange:Function,prefixCls:String,accessibility:{type:Boolean,default:void 0},nextArrow:U.any,prevArrow:U.any,pauseOnHover:{type:Boolean,default:void 0},adaptiveHeight:{type:Boolean,default:void 0},arrows:{type:Boolean,default:!1},autoplaySpeed:Number,centerMode:{type:Boolean,default:void 0},centerPadding:String,cssEase:String,dotsClass:String,draggable:{type:Boolean,default:!1},fade:{type:Boolean,default:void 0},focusOnSelect:{type:Boolean,default:void 0},infinite:{type:Boolean,default:void 0},initialSlide:Number,lazyLoad:String,rtl:{type:Boolean,default:void 0},slide:String,slidesToShow:Number,slidesToScroll:Number,speed:Number,swipe:{type:Boolean,default:void 0},swipeToSlide:{type:Boolean,default:void 0},swipeEvent:Function,touchMove:{type:Boolean,default:void 0},touchThreshold:Number,variableWidth:{type:Boolean,default:void 0},useCSS:{type:Boolean,default:void 0},slickGoTo:Number,responsive:Array,dotPosition:{type:String,default:void 0},verticalSwiping:{type:Boolean,default:!1}}},Rz=ae({name:"ACarousel",inheritAttrs:!1,props:Lz(),setup:function(e,t){var r=t.slots,a=t.attrs,i=t.expose,o=q(),l=function(y){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m;(m=o.value)===null||m===void 0||m.slickGoTo(y,h)};i({goTo:l,autoplay:function(y){var h,m;(m=(h=o.value)===null||h===void 0?void 0:h.innerSlider)===null||m===void 0||m.handleAutoPlay(y)},prev:function(){var y;(y=o.value)===null||y===void 0||y.slickPrev()},next:function(){var y;(y=o.value)===null||y===void 0||y.slickNext()},innerSlider:R(function(){var g;return(g=o.value)===null||g===void 0?void 0:g.innerSlider})}),Ze(function(){rt(e.vertical===void 0,"Carousel","`vertical` is deprecated, please use `dotPosition` instead.")});var u=Le("carousel",e),s=u.prefixCls,c=u.direction,d=R(function(){return e.dotPosition?e.dotPosition:e.vertical!==void 0&&e.vertical?"right":"bottom"}),f=R(function(){return d.value==="left"||d.value==="right"}),p=R(function(){var g,y="slick-dots";return de((g={},D(g,y,!0),D(g,"".concat(y,"-").concat(d.value),!0),D(g,"".concat(e.dotsClass),!!e.dotsClass),g))});return function(){var g,y=e.dots,h=e.arrows,m=e.draggable,b=e.effect,C=a.class,x=a.style,S=Dz(a,["class","style"]),w=b==="fade"?!0:e.fade,_=de(s.value,(g={},D(g,"".concat(s.value,"-rtl"),c.value==="rtl"),D(g,"".concat(s.value,"-vertical"),f.value),D(g,"".concat(C),!!C),g));return v("div",{class:_,style:x},[v(jz,W(W(W({ref:o},e),S),{},{dots:!!y,dotsClass:p.value,arrows:h,draggable:m,fade:w,vertical:f.value}),r)])}}});const $z=Gn(Rz);var Ny="__RC_CASCADER_SPLIT__",Q_="SHOW_PARENT",J_="SHOW_CHILD";function Ya(n){return n.join(Ny)}function ho(n){return n.map(Ya)}function Bz(n){return n.split(Ny)}function Vz(n){var e=n||{},t=e.label,r=e.value,a=e.children,i=r||"value";return{label:t||"label",value:i,key:i,children:a||"children"}}function xl(n,e){var t,r;return(t=n.isLeaf)!==null&&t!==void 0?t:!(!((r=n[e.children])===null||r===void 0)&&r.length)}function Kz(n){var e=n.parentElement;if(!!e){var t=n.offsetTop-e.offsetTop;t-e.scrollTop<0?e.scrollTo({top:t}):t+n.offsetHeight-e.scrollTop>e.offsetHeight&&e.scrollTo({top:t+n.offsetHeight-e.offsetHeight})}}var ek=Symbol("TreeContextKey"),zz=ae({name:"TreeContext",props:{value:{type:Object}},setup:function(e,t){var r=t.slots;return ln(ek,R(function(){return e.value})),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}}),Iy=function(){return on(ek,R(function(){return{}}))},nk=Symbol("KeysStateKey"),Hz=function(e){ln(nk,e)},tk=function(){return on(nk,{expandedKeys:cn([]),selectedKeys:cn([]),loadedKeys:cn([]),loadingKeys:cn([]),checkedKeys:cn([]),halfCheckedKeys:cn([]),expandedKeysSet:R(function(){return new Set}),selectedKeysSet:R(function(){return new Set}),loadedKeysSet:R(function(){return new Set}),loadingKeysSet:R(function(){return new Set}),checkedKeysSet:R(function(){return new Set}),halfCheckedKeysSet:R(function(){return new Set}),flattenNodes:cn([])})},Wz=function(e){for(var t=e.prefixCls,r=e.level,a=e.isStart,i=e.isEnd,o="".concat(t,"-indent-unit"),l=[],u=0;u<r;u+=1){var s;l.push(v("span",{key:u,class:(s={},D(s,o,!0),D(s,"".concat(o,"-start"),a[u]),D(s,"".concat(o,"-end"),i[u]),s)},null))}return v("span",{"aria-hidden":"true",class:"".concat(t,"-indent")},[l])};const Uz=Wz;var Ey={eventKey:[String,Number],prefixCls:String,title:U.any,data:{type:Object,default:void 0},parent:{type:Object,default:void 0},isStart:{type:Array},isEnd:{type:Array},active:{type:Boolean,default:void 0},onMousemove:{type:Function},isLeaf:{type:Boolean,default:void 0},checkable:{type:Boolean,default:void 0},selectable:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},disableCheckbox:{type:Boolean,default:void 0},icon:U.any,switcherIcon:U.any,domRef:{type:Function}},qz={prefixCls:{type:String},motion:{type:Object},focusable:{type:Boolean},activeItem:{type:Object},focused:{type:Boolean},tabindex:{type:Number},checkable:{type:Boolean},selectable:{type:Boolean},disabled:{type:Boolean},height:{type:Number},itemHeight:{type:Number},virtual:{type:Boolean},onScroll:{type:Function},onKeydown:{type:Function},onFocus:{type:Function},onBlur:{type:Function},onActiveChange:{type:Function},onContextmenu:{type:Function},onListChangeStart:{type:Function},onListChangeEnd:{type:Function}},rk=function(){return{prefixCls:String,focusable:{type:Boolean,default:void 0},activeKey:[Number,String],tabindex:Number,children:U.any,treeData:{type:Array},fieldNames:{type:Object},showLine:{type:[Boolean,Object],default:void 0},showIcon:{type:Boolean,default:void 0},icon:U.any,selectable:{type:Boolean,default:void 0},expandAction:[String,Boolean],disabled:{type:Boolean,default:void 0},multiple:{type:Boolean,default:void 0},checkable:{type:Boolean,default:void 0},checkStrictly:{type:Boolean,default:void 0},draggable:{type:[Function,Boolean]},defaultExpandParent:{type:Boolean,default:void 0},autoExpandParent:{type:Boolean,default:void 0},defaultExpandAll:{type:Boolean,default:void 0},defaultExpandedKeys:{type:Array},expandedKeys:{type:Array},defaultCheckedKeys:{type:Array},checkedKeys:{type:[Object,Array]},defaultSelectedKeys:{type:Array},selectedKeys:{type:Array},allowDrop:{type:Function},dropIndicatorRender:{type:Function},onFocus:{type:Function},onBlur:{type:Function},onKeydown:{type:Function},onContextmenu:{type:Function},onClick:{type:Function},onDblclick:{type:Function},onScroll:{type:Function},onExpand:{type:Function},onCheck:{type:Function},onSelect:{type:Function},onLoad:{type:Function},loadData:{type:Function},loadedKeys:{type:Array},onMouseenter:{type:Function},onMouseleave:{type:Function},onRightClick:{type:Function},onDragstart:{type:Function},onDragenter:{type:Function},onDragover:{type:Function},onDragleave:{type:Function},onDragend:{type:Function},onDrop:{type:Function},onActiveChange:{type:Function},filterTreeNode:{type:Function},motion:U.any,switcherIcon:U.any,height:Number,itemHeight:Number,virtual:{type:Boolean,default:void 0},direction:{type:String},rootClassName:String,rootStyle:Object}},Yz=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},Ix="open",Ex="close",Gz="---";const qp=ae({name:"TreeNode",inheritAttrs:!1,props:Ey,isTreeNode:1,slots:["title","icon","switcherIcon"],setup:function(e,t){var r=t.attrs,a=t.slots,i=t.expose;"slots"in e.data,"treeData slots is deprecated, please use ".concat(Object.keys(e.data.slots||{}).map(function(we){return"`v-slot:"+we+"` "}),"instead");var o=q(!1),l=Iy(),u=tk(),s=u.expandedKeysSet,c=u.selectedKeysSet,d=u.loadedKeysSet,f=u.loadingKeysSet,p=u.checkedKeysSet,g=u.halfCheckedKeysSet,y=l.value,h=y.dragOverNodeKey,m=y.dropPosition,b=y.keyEntities,C=R(function(){return $s(e.eventKey,{expandedKeysSet:s.value,selectedKeysSet:c.value,loadedKeysSet:d.value,loadingKeysSet:f.value,checkedKeysSet:p.value,halfCheckedKeysSet:g.value,dragOverNodeKey:h,dropPosition:m,keyEntities:b})}),x=Gt(function(){return C.value.expanded}),S=Gt(function(){return C.value.selected}),w=Gt(function(){return C.value.checked}),_=Gt(function(){return C.value.loaded}),P=Gt(function(){return C.value.loading}),k=Gt(function(){return C.value.halfChecked}),I=Gt(function(){return C.value.dragOver}),F=Gt(function(){return C.value.dragOverGapTop}),M=Gt(function(){return C.value.dragOverGapBottom}),T=Gt(function(){return C.value.pos}),N=q(),j=R(function(){var we=e.eventKey,be=l.value.keyEntities,Se=be[we]||{},Fe=Se.children;return!!(Fe||[]).length}),$=R(function(){var we=e.isLeaf,be=l.value.loadData,Se=j.value;return we===!1?!1:we||!be&&!Se||be&&_.value&&!Se}),A=R(function(){return $.value?null:x.value?Ix:Ex}),E=R(function(){var we=e.disabled,be=l.value.disabled;return!!(be||we)}),L=R(function(){var we=e.checkable,be=l.value.checkable;return!be||we===!1?!1:be}),B=R(function(){var we=e.selectable,be=l.value.selectable;return typeof we=="boolean"?we:be}),K=R(function(){var we=e.data,be=e.active,Se=e.checkable,Fe=e.disableCheckbox,je=e.disabled,ke=e.selectable;return O(O({active:be,checkable:Se,disableCheckbox:Fe,disabled:je,selectable:ke},we),{dataRef:we,data:we,isLeaf:$.value,checked:w.value,expanded:x.value,loading:P.value,selected:S.value,halfChecked:k.value})}),H=Jn(),Z=R(function(){var we=e.eventKey,be=l.value.keyEntities,Se=be[we]||{},Fe=Se.parent;return O(O({},Bs(O({},e,C.value))),{parent:Fe})}),Y=kn({eventData:Z,eventKey:R(function(){return e.eventKey}),selectHandle:N,pos:T,key:H.vnode.key});i(Y);var G=function(be){var Se=l.value.onNodeDoubleClick;Se(be,Z.value)},Q=function(be){if(!E.value){var Se=l.value.onNodeSelect;be.preventDefault(),Se(be,Z.value)}},z=function(be){if(!E.value){var Se=e.disableCheckbox,Fe=l.value.onNodeCheck;if(!(!L.value||Se)){be.preventDefault();var je=!w.value;Fe(be,Z.value,je)}}},J=function(be){var Se=l.value.onNodeClick;Se(be,Z.value),B.value?Q(be):z(be)},ne=function(be){var Se=l.value.onNodeMouseEnter;Se(be,Z.value)},oe=function(be){var Se=l.value.onNodeMouseLeave;Se(be,Z.value)},ce=function(be){var Se=l.value.onNodeContextMenu;Se(be,Z.value)},se=function(be){var Se=l.value.onNodeDragStart;be.stopPropagation(),o.value=!0,Se(be,Y);try{be.dataTransfer.setData("text/plain","")}catch{}},V=function(be){var Se=l.value.onNodeDragEnter;be.preventDefault(),be.stopPropagation(),Se(be,Y)},X=function(be){var Se=l.value.onNodeDragOver;be.preventDefault(),be.stopPropagation(),Se(be,Y)},ee=function(be){var Se=l.value.onNodeDragLeave;be.stopPropagation(),Se(be,Y)},ue=function(be){var Se=l.value.onNodeDragEnd;be.stopPropagation(),o.value=!1,Se(be,Y)},ie=function(be){var Se=l.value.onNodeDrop;be.preventDefault(),be.stopPropagation(),o.value=!1,Se(be,Y)},ge=function(be){var Se=l.value.onNodeExpand;P.value||Se(be,Z.value)},fe=function(){var be=e.data,Se=l.value.draggable;return!!(Se&&(!Se.nodeDraggable||Se.nodeDraggable(be)))},re=function(){var be=l.value,Se=be.draggable,Fe=be.prefixCls;return Se!=null&&Se.icon?v("span",{class:"".concat(Fe,"-draggable-icon")},[Se.icon]):null},le=function(){var be,Se,Fe,je=e.switcherIcon,ke=je===void 0?a.switcherIcon||((be=l.value.slots)===null||be===void 0?void 0:be[(Fe=(Se=e.data)===null||Se===void 0?void 0:Se.slots)===null||Fe===void 0?void 0:Fe.switcherIcon]):je,Ce=l.value.switcherIcon,ve=ke||Ce;return typeof ve=="function"?ve(K.value):ve},te=function(){var be=l.value,Se=be.loadData,Fe=be.onNodeLoad;P.value||Se&&x.value&&!$.value&&!j.value&&!_.value&&Fe(Z.value)};Ye(function(){te()}),Nt(function(){te()});var he=function(){var be=l.value.prefixCls,Se=le();if($.value)return Se!==!1?v("span",{class:de("".concat(be,"-switcher"),"".concat(be,"-switcher-noop"))},[Se]):null;var Fe=de("".concat(be,"-switcher"),"".concat(be,"-switcher_").concat(x.value?Ix:Ex));return Se!==!1?v("span",{onClick:ge,class:Fe},[Se]):null},ye=function(){var be,Se,Fe=e.disableCheckbox,je=l.value.prefixCls,ke=E.value,Ce=L.value;return Ce?v("span",{class:de("".concat(je,"-checkbox"),w.value&&"".concat(je,"-checkbox-checked"),!w.value&&k.value&&"".concat(je,"-checkbox-indeterminate"),(ke||Fe)&&"".concat(je,"-checkbox-disabled")),onClick:z},[(Se=(be=l.value).customCheckable)===null||Se===void 0?void 0:Se.call(be)]):null},_e=function(){var be=l.value.prefixCls;return v("span",{class:de("".concat(be,"-iconEle"),"".concat(be,"-icon__").concat(A.value||"docu"),P.value&&"".concat(be,"-icon_loading"))},null)},Me=function(){var be=e.disabled,Se=e.eventKey,Fe=l.value,je=Fe.draggable,ke=Fe.dropLevelOffset,Ce=Fe.dropPosition,ve=Fe.prefixCls,me=Fe.indent,Oe=Fe.dropIndicatorRender,Ie=Fe.dragOverNodeKey,xe=Fe.direction,pe=je!==!1,Ae=!be&&pe&&Ie===Se;return Ae?Oe({dropPosition:Ce,dropLevelOffset:ke,indent:me,prefixCls:ve,direction:xe}):null},De=function(){var be,Se,Fe,je,ke,Ce,ve=e.icon,me=ve===void 0?a.icon:ve,Oe=e.data,Ie=a.title||((be=l.value.slots)===null||be===void 0?void 0:be[(Fe=(Se=e.data)===null||Se===void 0?void 0:Se.slots)===null||Fe===void 0?void 0:Fe.title])||((je=l.value.slots)===null||je===void 0?void 0:je.title)||e.title,xe=l.value,pe=xe.prefixCls,Ae=xe.showIcon,$e=xe.icon,Re=xe.loadData,Ke=E.value,Ve="".concat(pe,"-node-content-wrapper"),ze;if(Ae){var He=me||((ke=l.value.slots)===null||ke===void 0?void 0:ke[(Ce=Oe==null?void 0:Oe.slots)===null||Ce===void 0?void 0:Ce.icon])||$e;ze=He?v("span",{class:de("".concat(pe,"-iconEle"),"".concat(pe,"-icon__customize"))},[typeof He=="function"?He(K.value):He]):_e()}else Re&&P.value&&(ze=_e());var en;typeof Ie=="function"?en=Ie(K.value):en=Ie,en=en===void 0?Gz:en;var mn=v("span",{class:"".concat(pe,"-title")},[en]);return v("span",{ref:N,title:typeof Ie=="string"?Ie:"",class:de("".concat(Ve),"".concat(Ve,"-").concat(A.value||"normal"),!Ke&&(S.value||o.value)&&"".concat(pe,"-node-selected")),onMouseenter:ne,onMouseleave:oe,onContextmenu:ce,onClick:J,onDblclick:G},[ze,mn,Me()])};return function(){var we,be=O(O({},e),r),Se=be.eventKey,Fe=be.isLeaf,je=be.isStart,ke=be.isEnd,Ce=be.domRef,ve=be.active;be.data;var me=be.onMousemove,Oe=be.selectable,Ie=Yz(be,["eventKey","isLeaf","isStart","isEnd","domRef","active","data","onMousemove","selectable"]),xe=l.value,pe=xe.prefixCls,Ae=xe.filterTreeNode,$e=xe.keyEntities,Re=xe.dropContainerKey,Ke=xe.dropTargetKey,Ve=xe.draggingNodeKey,ze=E.value,He=ni(Ie,{aria:!0,data:!0}),en=$e[Se]||{},mn=en.level,nn=ke[ke.length-1],Je=fe(),bn=!ze&&Je,pn=Ve===Se,Dn=Oe!==void 0?{"aria-selected":!!Oe}:void 0;return v("div",W(W({ref:Ce,class:de(r.class,"".concat(pe,"-treenode"),(we={},D(we,"".concat(pe,"-treenode-disabled"),ze),D(we,"".concat(pe,"-treenode-switcher-").concat(x.value?"open":"close"),!Fe),D(we,"".concat(pe,"-treenode-checkbox-checked"),w.value),D(we,"".concat(pe,"-treenode-checkbox-indeterminate"),k.value),D(we,"".concat(pe,"-treenode-selected"),S.value),D(we,"".concat(pe,"-treenode-loading"),P.value),D(we,"".concat(pe,"-treenode-active"),ve),D(we,"".concat(pe,"-treenode-leaf-last"),nn),D(we,"".concat(pe,"-treenode-draggable"),bn),D(we,"dragging",pn),D(we,"drop-target",Ke===Se),D(we,"drop-container",Re===Se),D(we,"drag-over",!ze&&I.value),D(we,"drag-over-gap-top",!ze&&F.value),D(we,"drag-over-gap-bottom",!ze&&M.value),D(we,"filter-node",Ae&&Ae(Z.value)),we)),style:r.style,draggable:bn,"aria-grabbed":pn,onDragstart:bn?se:void 0,onDragenter:Je?V:void 0,onDragover:Je?X:void 0,onDragleave:Je?ee:void 0,onDrop:Je?ie:void 0,onDragend:Je?ue:void 0,onMousemove:me},Dn),He),[v(Uz,{prefixCls:pe,level:mn,isStart:je,isEnd:ke},null),re(),he(),ye(),De()])}}});globalThis&&globalThis.__rest;function zr(n,e){if(!n)return[];var t=n.slice(),r=t.indexOf(e);return r>=0&&t.splice(r,1),t}function fa(n,e){var t=(n||[]).slice();return t.indexOf(e)===-1&&t.push(e),t}function My(n){return n.split("-")}function ak(n,e){return"".concat(n,"-").concat(e)}function Xz(n){return n&&n.type&&n.type.isTreeNode}function Zz(n,e){var t=[],r=e[n];function a(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];i.forEach(function(o){var l=o.key,u=o.children;t.push(l),a(u)})}return a(r.children),t}function Qz(n){if(n.parent){var e=My(n.pos);return Number(e[e.length-1])===n.parent.children.length-1}return!1}function Jz(n){var e=My(n.pos);return Number(e[e.length-1])===0}function Mx(n,e,t,r,a,i,o,l,u,s){var c,d=n.clientX,f=n.clientY,p=n.target.getBoundingClientRect(),g=p.top,y=p.height,h=(s==="rtl"?-1:1)*(((a==null?void 0:a.x)||0)-d),m=(h-12)/r,b=l[t.eventKey];if(f<g+y/2){var C=o.findIndex(function(j){return j.key===b.key}),x=C<=0?0:C-1,S=o[x].key;b=l[S]}var w=b.key,_=b,P=b.key,k=0,I=0;if(!u.has(w))for(var F=0;F<m&&Qz(b);F+=1)b=b.parent,I+=1;var M=e.eventData,T=b.node,N=!0;return Jz(b)&&b.level===0&&f<g+y/2&&i({dragNode:M,dropNode:T,dropPosition:-1})&&b.key===t.eventKey?k=-1:(_.children||[]).length&&u.has(P)?i({dragNode:M,dropNode:T,dropPosition:0})?k=0:N=!1:I===0?m>-1.5?i({dragNode:M,dropNode:T,dropPosition:1})?k=1:N=!1:i({dragNode:M,dropNode:T,dropPosition:0})?k=0:i({dragNode:M,dropNode:T,dropPosition:1})?k=1:N=!1:i({dragNode:M,dropNode:T,dropPosition:1})?k=1:N=!1,{dropPosition:k,dropLevelOffset:I,dropTargetKey:b.key,dropTargetPos:b.pos,dragOverNodeKey:P,dropContainerKey:k===0?null:((c=b.parent)===null||c===void 0?void 0:c.key)||null,dropAllowed:N}}function Ax(n,e){if(!!n){var t=e.multiple;return t?n.slice():n.length?[n[0]]:n}}function ov(n){if(!n)return null;var e;if(Array.isArray(n))e={checkedKeys:n,halfCheckedKeys:void 0};else if(Be(n)==="object")e={checkedKeys:n.checked||void 0,halfCheckedKeys:n.halfChecked||void 0};else return null;return e}function Yp(n,e){var t=new Set;function r(a){if(!t.has(a)){var i=e[a];if(!!i){t.add(a);var o=i.parent,l=i.node;l.disabled||o&&r(o.key)}}}return(n||[]).forEach(function(a){r(a)}),Ee(t)}var eH=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function Mu(n,e){return n!=null?n:e}function qd(n){var e=n||{},t=e.title,r=e._title,a=e.key,i=e.children,o=t||"title";return{title:o,_title:r||[o],key:a||"key",children:i||"children"}}function Gp(n){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=Qn(t);return r.map(function(a){var i,o,l,u;if(!Xz(a))return null;for(var s=a.children||{},c=a.key,d={},f=0,p=Object.entries(a.props);f<p.length;f++){var g=Te(p[f],2),y=g[0],h=g[1];d[Kt(y)]=h}var m=d.isLeaf,b=d.checkable,C=d.selectable,x=d.disabled,S=d.disableCheckbox,w={isLeaf:m||m===""||void 0,checkable:b||b===""||void 0,selectable:C||C===""||void 0,disabled:x||x===""||void 0,disableCheckbox:S||S===""||void 0},_=O(O({},d),w),P=d.title,k=P===void 0?(i=s.title)===null||i===void 0?void 0:i.call(s,_):P,I=d.icon,F=I===void 0?(o=s.icon)===null||o===void 0?void 0:o.call(s,_):I,M=d.switcherIcon,T=M===void 0?(l=s.switcherIcon)===null||l===void 0?void 0:l.call(s,_):M,N=eH(d,["title","icon","switcherIcon"]),j=(u=s.default)===null||u===void 0?void 0:u.call(s),$=O(O(O({},N),{title:k,icon:F,switcherIcon:T,key:c,isLeaf:m}),w),A=e(j);return A.length&&($.children=A),$})}return e(n)}function nH(n,e,t){var r=qd(t),a=r._title,i=r.key,o=r.children,l=new Set(e===!0?[]:e),u=[];function s(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return c.map(function(f,p){for(var g=ak(d?d.pos:"0",p),y=Mu(f[i],g),h,m=0;m<a.length;m+=1){var b=a[m];if(f[b]!==void 0){h=f[b];break}}var C=O(O({},un(f,[].concat(Ee(a),[i,o]))),{title:h,key:y,parent:d,pos:g,children:null,data:f,isStart:[].concat(Ee(d?d.isStart:[]),[p===0]),isEnd:[].concat(Ee(d?d.isEnd:[]),[p===c.length-1])});return u.push(C),e===!0||l.has(y)?C.children=s(f[o]||[],C):C.children=[],C})}return s(n),u}function tH(n,e,t){var r={};Be(t)==="object"?r=t:r={externalGetKey:t},r=r||{};var a=r,i=a.childrenPropName,o=a.externalGetKey,l=a.fieldNames,u=qd(l),s=u.key,c=u.children,d=i||c,f;o?typeof o=="string"?f=function(y){return y[o]}:typeof o=="function"&&(f=function(y){return o(y)}):f=function(y,h){return Mu(y[s],h)};function p(g,y,h,m){var b=g?g[d]:n,C=g?ak(h.pos,y):"0",x=g?[].concat(Ee(m),[g]):[];if(g){var S=f(g,C),w={node:g,index:y,pos:C,key:S,parentPos:h.node?h.pos:null,level:h.level+1,nodes:x};e(w)}b&&b.forEach(function(_,P){p(_,P,{node:g,pos:C,level:h?h.level+1:-1},x)})}p(null)}function Au(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.initWrapper,r=e.processEntity,a=e.onProcessFinished,i=e.externalGetKey,o=e.childrenPropName,l=e.fieldNames,u=arguments.length>2?arguments[2]:void 0,s=i||u,c={},d={},f={posEntities:c,keyEntities:d};return t&&(f=t(f)||f),tH(n,function(p){var g=p.node,y=p.index,h=p.pos,m=p.key,b=p.parentPos,C=p.level,x=p.nodes,S={node:g,nodes:x,index:y,key:m,pos:h,level:C},w=Mu(m,h);c[h]=S,d[w]=S,S.parent=c[b],S.parent&&(S.parent.children=S.parent.children||[],S.parent.children.push(S)),r&&r(S,f)},{externalGetKey:s,childrenPropName:o,fieldNames:l}),a&&a(f),f}function $s(n,e){var t=e.expandedKeysSet,r=e.selectedKeysSet,a=e.loadedKeysSet,i=e.loadingKeysSet,o=e.checkedKeysSet,l=e.halfCheckedKeysSet,u=e.dragOverNodeKey,s=e.dropPosition,c=e.keyEntities,d=c[n],f={eventKey:n,expanded:t.has(n),selected:r.has(n),loaded:a.has(n),loading:i.has(n),checked:o.has(n),halfChecked:l.has(n),pos:String(d?d.pos:""),parent:d.parent,dragOver:u===n&&s===0,dragOverGapTop:u===n&&s===-1,dragOverGapBottom:u===n&&s===1};return f}function Bs(n){var e=n.data,t=n.expanded,r=n.selected,a=n.checked,i=n.loaded,o=n.loading,l=n.halfChecked,u=n.dragOver,s=n.dragOverGapTop,c=n.dragOverGapBottom,d=n.pos,f=n.active,p=n.eventKey,g=O(O({dataRef:e},e),{expanded:t,selected:r,checked:a,loaded:i,loading:o,halfChecked:l,dragOver:u,dragOverGapTop:s,dragOverGapBottom:c,pos:d,active:f,eventKey:p,key:p});return"props"in g||Object.defineProperty(g,"props",{get:function(){return n}}),g}const rH=function(n,e){var t=R(function(){return Au(n.value,{fieldNames:e.value,initWrapper:function(a){return O(O({},a),{pathKeyEntities:{}})},processEntity:function(a,i){var o=a.nodes.map(function(l){return l[e.value.value]}).join(Ny);i.pathKeyEntities[o]=a,a.key=o}}).pathKeyEntities});return t};function aH(n){var e=q(!1),t=q({});return Ze(function(){if(!n.value){e.value=!1,t.value={};return}var r={matchInputWidth:!0,limit:50};n.value&&Be(n.value)==="object"&&(r=O(O({},r),n.value)),r.limit<=0&&delete r.limit,e.value=!0,t.value=r}),{showSearch:e,searchConfig:t}}var Ll="__rc_cascader_search_mark__",iH=function(e,t,r){var a=r.label;return t.some(function(i){return String(i[a]).toLowerCase().includes(e.toLowerCase())})},oH=function(e){var t=e.path,r=e.fieldNames;return t.map(function(a){return a[r.label]}).join(" / ")};const lH=function(n,e,t,r,a,i){return R(function(){var o=a.value,l=o.filter,u=l===void 0?iH:l,s=o.render,c=s===void 0?oH:s,d=o.limit,f=d===void 0?50:d,p=o.sort,g=[];if(!n.value)return[];function y(h,m){h.forEach(function(b){if(!(!p&&f>0&&g.length>=f)){var C=[].concat(Ee(m),[b]),x=b[t.value.children];if((!x||x.length===0||i.value)&&u(n.value,C,{label:t.value.label})){var S;g.push(O(O({},b),(S={},D(S,t.value.label,c({inputValue:n.value,path:C,prefixCls:r.value,fieldNames:t.value})),D(S,Ll,C),S)))}x&&y(b[t.value.children],C)}})}return y(e.value,[]),p&&g.sort(function(h,m){return p(h[Ll],m[Ll],n.value,t.value)}),f>0?g.slice(0,f):g})};function Fx(n,e,t){var r=new Set(n);return n.filter(function(a){var i=e[a],o=i?i.parent:null,l=i?i.children:null;return t===J_?!(l&&l.some(function(u){return u.key&&r.has(u.key)})):!(o&&!o.node.disabled&&r.has(o.key))})}function gu(n,e,t){for(var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,a,i=e,o=[],l=function(c){var d=n[c],f=i==null?void 0:i.findIndex(function(g){var y=g[t.value];return r?String(y)===String(d):y===d}),p=f!==-1?i==null?void 0:i[f]:null;o.push({value:(a=p==null?void 0:p[t.value])!==null&&a!==void 0?a:d,index:f,option:p}),i=p==null?void 0:p[t.children]},u=0;u<n.length;u+=1)l(u);return o}const uH=function(n,e,t){return R(function(){var r=[],a=[];return t.value.forEach(function(i){var o=gu(i,n.value,e.value);o.every(function(l){return l.option})?a.push(i):r.push(i)}),[a,r]})};function ik(n,e){var t=new Set;return n.forEach(function(r){e.has(r)||t.add(r)}),t}function sH(n){var e=n||{},t=e.disabled,r=e.disableCheckbox,a=e.checkable;return!!(t||r)||a===!1}function cH(n,e,t,r){for(var a=new Set(n),i=new Set,o=0;o<=t;o+=1){var l=e.get(o)||new Set;l.forEach(function(d){var f=d.key,p=d.node,g=d.children,y=g===void 0?[]:g;a.has(f)&&!r(p)&&y.filter(function(h){return!r(h.node)}).forEach(function(h){a.add(h.key)})})}for(var u=new Set,s=t;s>=0;s-=1){var c=e.get(s)||new Set;c.forEach(function(d){var f=d.parent,p=d.node;if(!(r(p)||!d.parent||u.has(d.parent.key))){if(r(d.parent.node)){u.add(f.key);return}var g=!0,y=!1;(f.children||[]).filter(function(h){return!r(h.node)}).forEach(function(h){var m=h.key,b=a.has(m);g&&!b&&(g=!1),!y&&(b||i.has(m))&&(y=!0)}),g&&a.add(f.key),y&&i.add(f.key),u.add(f.key)}})}return{checkedKeys:Array.from(a),halfCheckedKeys:Array.from(ik(i,a))}}function dH(n,e,t,r,a){for(var i=new Set(n),o=new Set(e),l=0;l<=r;l+=1){var u=t.get(l)||new Set;u.forEach(function(f){var p=f.key,g=f.node,y=f.children,h=y===void 0?[]:y;!i.has(p)&&!o.has(p)&&!a(g)&&h.filter(function(m){return!a(m.node)}).forEach(function(m){i.delete(m.key)})})}o=new Set;for(var s=new Set,c=r;c>=0;c-=1){var d=t.get(c)||new Set;d.forEach(function(f){var p=f.parent,g=f.node;if(!(a(g)||!f.parent||s.has(f.parent.key))){if(a(f.parent.node)){s.add(p.key);return}var y=!0,h=!1;(p.children||[]).filter(function(m){return!a(m.node)}).forEach(function(m){var b=m.key,C=i.has(b);y&&!C&&(y=!1),!h&&(C||o.has(b))&&(h=!0)}),y||i.delete(p.key),h&&o.add(p.key),s.add(p.key)}})}return{checkedKeys:Array.from(i),halfCheckedKeys:Array.from(ik(o,i))}}function pr(n,e,t,r,a,i){var o;i?o=i:o=sH;var l=new Set(n.filter(function(s){var c=!!t[s];return c})),u;return e===!0?u=cH(l,a,r,o):u=dH(l,e.halfCheckedKeys,a,r,o),u}const fH=function(n,e,t,r,a){return R(function(){var i=a.value||function(o){var l=o.labels,u=r.value?l.slice(-1):l,s=" / ";return u.every(function(c){return["string","number"].includes(Be(c))})?u.join(s):u.reduce(function(c,d,f){var p=at(d)?wn(d,{key:f}):d;return f===0?[p]:[].concat(Ee(c),[s,p])},[])};return n.value.map(function(o){var l=gu(o,e.value,t.value),u=i({labels:l.map(function(c){var d=c.option,f=c.value,p;return(p=d==null?void 0:d[t.value.label])!==null&&p!==void 0?p:f}),selectedOptions:l.map(function(c){var d=c.option;return d})}),s=Ya(o);return{label:u,value:s,key:s,valueCells:o}})})};var ok=Symbol("CascaderContextKey"),vH=function(e){ln(ok,e)},Yd=function(){return on(ok)};const pH=function(){var n=Tu(),e=Yd(),t=e.values,r=Ln([]),a=Te(r,2),i=a[0],o=a[1];return Pe(function(){return n.open},function(){if(n.open&&!n.multiple){var l=t.value[0];o(l||[])}},{immediate:!0}),[i,o]},hH=function(n,e,t,r,a,i){var o=Tu(),l=R(function(){return o.direction==="rtl"}),u=[q([]),q(),q([])],s=u[0],c=u[1],d=u[2];Ze(function(){for(var h=-1,m=e.value,b=[],C=[],x=r.value.length,S=function(M){var T=m.findIndex(function(N){return N[t.value.value]===r.value[M]});if(T===-1)return"break";h=T,b.push(h),C.push(r.value[M]),m=m[h][t.value.children]},w=0;w<x&&m;w+=1){var _=S(w);if(_==="break")break}for(var P=e.value,k=0;k<b.length-1;k+=1)P=P[b[k]][t.value.children];var I=[C,h,P];s.value=I[0],c.value=I[1],d.value=I[2]});var f=function(m){a(m)},p=function(m){var b=d.value.length,C=c.value;C===-1&&m<0&&(C=b);for(var x=0;x<b;x+=1){C=(C+m+b)%b;var S=d.value[C];if(S&&!S.disabled){var w=S[t.value.value],_=s.value.slice(0,-1).concat(w);f(_);return}}},g=function(){if(s.value.length>1){var m=s.value.slice(0,-1);f(m)}else o.toggleOpen(!1)},y=function(){var m,b=((m=d.value[c.value])===null||m===void 0?void 0:m[t.value.children])||[],C=b.find(function(S){return!S.disabled});if(C){var x=[].concat(Ee(s.value),[C[t.value.value]]);f(x)}};n.expose({onKeydown:function(m){var b=m.which;switch(b){case Ne.UP:case Ne.DOWN:{var C=0;b===Ne.UP?C=-1:b===Ne.DOWN&&(C=1),C!==0&&p(C);break}case Ne.LEFT:{l.value?y():g();break}case Ne.RIGHT:{l.value?g():y();break}case Ne.BACKSPACE:{o.searchValue||g();break}case Ne.ENTER:{if(s.value.length){var x=d.value[c.value],S=(x==null?void 0:x[Ll])||[];S.length?i(S.map(function(w){return w[t.value.value]}),S[S.length-1]):i(s.value,x)}break}case Ne.ESC:o.toggleOpen(!1),open&&m.stopPropagation()}},onKeyup:function(){}})};function Gd(n){var e,t=n.prefixCls,r=n.checked,a=n.halfChecked,i=n.disabled,o=n.onClick,l=Yd(),u=l.customSlots,s=l.checkable,c=s.value!==!1?u.value.checkable:s.value,d=typeof c=="function"?c():typeof c=="boolean"?null:c;return v("span",{class:(e={},D(e,t,!0),D(e,"".concat(t,"-checked"),r),D(e,"".concat(t,"-indeterminate"),!r&&a),D(e,"".concat(t,"-disabled"),i),e),onClick:o},[d])}Gd.props=["prefixCls","checked","halfChecked","disabled","onClick"];Gd.displayName="Checkbox";Gd.inheritAttrs=!1;var lk="__cascader_fix_label__";function Xd(n){var e=n.prefixCls,t=n.multiple,r=n.options,a=n.activeValue,i=n.prevValuePath,o=n.onToggleOpen,l=n.onSelect,u=n.onActive,s=n.checkedSet,c=n.halfCheckedSet,d=n.loadingKeys,f=n.isSelectable,p,g,y,h,m,b,C="".concat(e,"-menu"),x="".concat(e,"-menu-item"),S=Yd(),w=S.fieldNames,_=S.changeOnSelect,P=S.expandTrigger,k=S.expandIcon,I=S.loadingIcon,F=S.dropdownMenuColumnStyle,M=S.customSlots,T=(p=k.value)!==null&&p!==void 0?p:(y=(g=M.value).expandIcon)===null||y===void 0?void 0:y.call(g),N=(h=I.value)!==null&&h!==void 0?h:(b=(m=M.value).loadingIcon)===null||b===void 0?void 0:b.call(m),j=P.value==="hover";return v("ul",{class:C,role:"menu"},[r.map(function($){var A,E,L=$.disabled,B=$[Ll],K=(E=$[lk])!==null&&E!==void 0?E:$[w.value.label],H=$[w.value.value],Z=xl($,w.value),Y=B?B.map(function(se){return se[w.value.value]}):[].concat(Ee(i),[H]),G=Ya(Y),Q=d.includes(G),z=s.has(G),J=c.has(G),ne=function(){!L&&(!j||!Z)&&u(Y)},oe=function(){f($)&&l(Y,Z)},ce;return typeof $.title=="string"?ce=$.title:typeof K=="string"&&(ce=K),v("li",{key:G,class:[x,(A={},D(A,"".concat(x,"-expand"),!Z),D(A,"".concat(x,"-active"),a===H),D(A,"".concat(x,"-disabled"),L),D(A,"".concat(x,"-loading"),Q),A)],style:F.value,role:"menuitemcheckbox",title:ce,"aria-checked":z,"data-path-key":G,onClick:function(){ne(),(!t||Z)&&oe()},onDblclick:function(){_.value&&o(!1)},onMouseenter:function(){j&&ne()},onMousedown:function(V){V.preventDefault()}},[t&&v(Gd,{prefixCls:"".concat(e,"-checkbox"),checked:z,halfChecked:J,disabled:L,onClick:function(V){V.stopPropagation(),oe()}},null),v("div",{class:"".concat(x,"-content")},[K]),!Q&&T&&!Z&&v("div",{class:"".concat(x,"-expand-icon")},[T]),Q&&N&&v("div",{class:"".concat(x,"-loading-icon")},[N])])})])}Xd.props=["prefixCls","multiple","options","activeValue","prevValuePath","onToggleOpen","onSelect","onActive","checkedSet","halfCheckedSet","loadingKeys","isSelectable"];Xd.displayName="Column";Xd.inheritAttrs=!1;const gH=ae({name:"OptionList",inheritAttrs:!1,setup:function(e,t){var r=t.attrs,a=t.slots,i=Tu(),o=q(),l=R(function(){return i.direction==="rtl"}),u=Yd(),s=u.options,c=u.values,d=u.halfValues,f=u.fieldNames,p=u.changeOnSelect,g=u.onSelect,y=u.searchOptions,h=u.dropdownPrefixCls,m=u.loadData,b=u.expandTrigger,C=u.customSlots,x=R(function(){return h.value||i.prefixCls}),S=cn([]),w=function(K){if(!(!m.value||i.searchValue)){var H=gu(K,s.value,f.value),Z=H.map(function(Q){var z=Q.option;return z}),Y=Z[Z.length-1];if(Y&&!xl(Y,f.value)){var G=Ya(K);S.value=[].concat(Ee(S.value),[G]),m.value(Z)}}};Ze(function(){S.value.length&&S.value.forEach(function(B){var K=Bz(B),H=gu(K,s.value,f.value,!0).map(function(Y){var G=Y.option;return G}),Z=H[H.length-1];(!Z||Z[f.value.children]||xl(Z,f.value))&&(S.value=S.value.filter(function(Y){return Y!==B}))})});var _=R(function(){return new Set(ho(c.value))}),P=R(function(){return new Set(ho(d.value))}),k=pH(),I=Te(k,2),F=I[0],M=I[1],T=function(K){M(K),w(K)},N=function(K){var H=K.disabled,Z=xl(K,f.value);return!H&&(Z||p.value||i.multiple)},j=function(K,H){var Z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;g(K),!i.multiple&&(H||p.value&&(b.value==="hover"||Z))&&i.toggleOpen(!1)},$=R(function(){return i.searchValue?y.value:s.value}),A=R(function(){for(var B=[{options:$.value}],K=$.value,H=function(Q){var z=F.value[Q],J=K.find(function(oe){return oe[f.value.value]===z}),ne=J==null?void 0:J[f.value.children];if(!(ne!=null&&ne.length))return"break";K=ne,B.push({options:ne})},Z=0;Z<F.value.length;Z+=1){var Y=H(Z);if(Y==="break")break}return B}),E=function(K,H){N(H)&&j(K,xl(H,f.value),!0)};hH(t,$,f,F,T,E);var L=function(K){K.preventDefault()};return Ye(function(){Pe(F,function(B){for(var K,H=0;H<B.length;H+=1){var Z=B.slice(0,H+1),Y=Ya(Z),G=(K=o.value)===null||K===void 0?void 0:K.querySelector('li[data-path-key="'.concat(Y.replace(/\\{0,2}"/g,'\\"'),'"]'));G&&Kz(G)}},{flush:"post",immediate:!0})}),function(){var B,K,H,Z,Y,G,Q,z=i.notFoundContent,J=z===void 0?((H=a.notFoundContent)===null||H===void 0?void 0:H.call(a))||((Y=(Z=C.value).notFoundContent)===null||Y===void 0?void 0:Y.call(Z)):z,ne=i.multiple,oe=i.toggleOpen,ce=!(!((Q=(G=A.value[0])===null||G===void 0?void 0:G.options)===null||Q===void 0)&&Q.length),se=[(B={},D(B,f.value.value,"__EMPTY__"),D(B,lk,J),D(B,"disabled",!0),B)],V=O(O({},r),{multiple:!ce&&ne,onSelect:j,onActive:T,onToggleOpen:oe,checkedSet:_.value,halfCheckedSet:P.value,loadingKeys:S.value,isSelectable:N}),X=ce?[{options:se}]:A.value,ee=X.map(function(ue,ie){var ge=F.value.slice(0,ie),fe=F.value[ie];return v(Xd,W(W({key:ie},V),{},{prefixCls:x.value,options:ue.options,prevValuePath:ge,activeValue:fe}),null)});return v("div",{class:["".concat(x.value,"-menus"),(K={},D(K,"".concat(x.value,"-menu-empty"),ce),D(K,"".concat(x.value,"-rtl"),l.value),K)],onMousedown:L,ref:o},[ee])}}});function Zd(n){var e=q(0),t=cn();return Ze(function(){var r=new Map,a=0,i=n.value||{};for(var o in i)if(Object.prototype.hasOwnProperty.call(i,o)){var l=i[o],u=l.level,s=r.get(u);s||(s=new Set,r.set(u,s)),s.add(l),a=Math.max(a,u)}e.value=a,t.value=r}),{maxLevel:e,levelEntities:t}}function mH(){return O(O({},un(Fd(),["tokenSeparators","mode","showSearch"])),{id:String,prefixCls:String,fieldNames:Object,children:Array,value:{type:[String,Number,Array]},defaultValue:{type:[String,Number,Array]},changeOnSelect:{type:Boolean,default:void 0},displayRender:Function,checkable:{type:Boolean,default:void 0},showCheckedStrategy:{type:String,default:Q_},showSearch:{type:[Boolean,Object],default:void 0},searchValue:String,onSearch:Function,expandTrigger:String,options:Array,dropdownPrefixCls:String,loadData:Function,popupVisible:{type:Boolean,default:void 0},popupClassName:String,dropdownClassName:String,dropdownMenuColumnStyle:{type:Object,default:void 0},popupStyle:{type:Object,default:void 0},dropdownStyle:{type:Object,default:void 0},popupPlacement:String,placement:String,onPopupVisibleChange:Function,onDropdownVisibleChange:Function,expandIcon:U.any,loadingIcon:U.any})}function uk(){return O(O({},mH()),{onChange:Function,customSlots:Object})}function yH(n){return Array.isArray(n)&&Array.isArray(n[0])}function jx(n){return n?yH(n)?n:(n.length===0?[]:[n]).map(function(e){return Array.isArray(e)?e:[e]}):[]}const bH=ae({name:"Cascader",inheritAttrs:!1,props:vn(uk(),{}),setup:function(e,t){var r=t.attrs,a=t.expose,i=t.slots,o=Lm(We(e,"id")),l=R(function(){return!!e.checkable}),u=Wn(e.defaultValue,{value:R(function(){return e.value}),postState:jx}),s=Te(u,2),c=s[0],d=s[1],f=R(function(){return Vz(e.fieldNames)}),p=R(function(){return e.options||[]}),g=rH(p,f),y=function(re){var le=g.value;return re.map(function(te){var he=le[te].nodes;return he.map(function(ye){return ye[f.value.value]})})},h=Wn("",{value:R(function(){return e.searchValue}),postState:function(re){return re||""}}),m=Te(h,2),b=m[0],C=m[1],x=function(re,le){C(re),le.source!=="blur"&&e.onSearch&&e.onSearch(re)},S=aH(We(e,"showSearch")),w=S.showSearch,_=S.searchConfig,P=lH(b,p,f,R(function(){return e.dropdownPrefixCls||e.prefixCls}),_,We(e,"changeOnSelect")),k=uH(p,f,c),I=[q([]),q([]),q([])],F=I[0],M=I[1],T=I[2],N=Zd(g),j=N.maxLevel,$=N.levelEntities;Ze(function(){var fe=Te(k.value,2),re=fe[0],le=fe[1];if(!l.value||!c.value.length){var te=[re,[],le];F.value=te[0],M.value=te[1],T.value=te[2];return}var he=ho(re),ye=g.value,_e=pr(he,!0,ye,j.value,$.value),Me=_e.checkedKeys,De=_e.halfCheckedKeys,we=[y(Me),y(De),le];F.value=we[0],M.value=we[1],T.value=we[2]});var A=R(function(){var fe=ho(F.value),re=Fx(fe,g.value,e.showCheckedStrategy);return[].concat(Ee(T.value),Ee(y(re)))}),E=fH(A,p,f,l,We(e,"displayRender")),L=function(re){if(d(re),e.onChange){var le=jx(re),te=le.map(function(_e){return gu(_e,p.value,f.value).map(function(Me){return Me.option})}),he=l.value?le:le[0],ye=l.value?te:te[0];e.onChange(he,ye)}},B=function(re){if(C(""),!l.value)L(re);else{var le=Ya(re),te=ho(F.value),he=ho(M.value),ye=te.includes(le),_e=T.value.some(function(ke){return Ya(ke)===le}),Me=F.value,De=T.value;if(_e&&!ye)De=T.value.filter(function(ke){return Ya(ke)!==le});else{var we=ye?te.filter(function(ke){return ke!==le}):[].concat(Ee(te),[le]),be;if(ye){var Se=pr(we,{checked:!1,halfCheckedKeys:he},g.value,j.value,$.value);be=Se.checkedKeys}else{var Fe=pr(we,!0,g.value,j.value,$.value);be=Fe.checkedKeys}var je=Fx(be,g.value,e.showCheckedStrategy);Me=y(je)}L([].concat(Ee(De),Ee(Me)))}},K=function(re,le){if(le.type==="clear"){L([]);return}var te=le.values[0].valueCells;B(te)},H=R(function(){return e.open!==void 0?e.open:e.popupVisible}),Z=R(function(){return e.dropdownClassName||e.popupClassName}),Y=R(function(){return e.dropdownStyle||e.popupStyle||{}}),G=R(function(){return e.placement||e.popupPlacement}),Q=function(re){var le,te;(le=e.onDropdownVisibleChange)===null||le===void 0||le.call(e,re),(te=e.onPopupVisibleChange)===null||te===void 0||te.call(e,re)},z=Ni(e),J=z.changeOnSelect,ne=z.checkable,oe=z.dropdownPrefixCls,ce=z.loadData,se=z.expandTrigger,V=z.expandIcon,X=z.loadingIcon,ee=z.dropdownMenuColumnStyle,ue=z.customSlots;vH({options:p,fieldNames:f,values:F,halfValues:M,changeOnSelect:J,onSelect:B,checkable:ne,searchOptions:P,dropdownPrefixCls:oe,loadData:ce,expandTrigger:se,expandIcon:V,loadingIcon:X,dropdownMenuColumnStyle:ee,customSlots:ue});var ie=q();a({focus:function(){var re;(re=ie.value)===null||re===void 0||re.focus()},blur:function(){var re;(re=ie.value)===null||re===void 0||re.blur()},scrollTo:function(re){var le;(le=ie.value)===null||le===void 0||le.scrollTo(re)}});var ge=R(function(){return un(e,["id","prefixCls","fieldNames","defaultValue","value","changeOnSelect","onChange","displayRender","checkable","searchValue","onSearch","showSearch","expandTrigger","options","dropdownPrefixCls","loadData","popupVisible","open","popupClassName","dropdownClassName","dropdownMenuColumnStyle","popupPlacement","placement","onDropdownVisibleChange","onPopupVisibleChange","expandIcon","loadingIcon","customSlots","showCheckedStrategy","children"])});return function(){var fe=!(b.value?P.value:p.value).length,re=e.dropdownMatchSelectWidth,le=re===void 0?!1:re,te=b.value&&_.value.matchInputWidth||fe?{}:{minWidth:"auto"};return v(jm,W(W(W({},ge.value),r),{},{ref:ie,id:o,prefixCls:e.prefixCls,dropdownMatchSelectWidth:le,dropdownStyle:O(O({},Y.value),te),displayValues:E.value,onDisplayValuesChange:K,mode:l.value?"multiple":void 0,searchValue:b.value,onSearch:x,showSearch:w.value,OptionList:gH,emptyOptions:fe,open:H.value,dropdownClassName:Z.value,placement:G.value,onDropdownVisibleChange:Q,getRawInputElement:function(){var ye;return(ye=i.default)===null||ye===void 0?void 0:ye.call(i)}}),i)}}});function CH(n,e){for(var t=-1,r=n==null?0:n.length;++t<r&&e(n[t],t,n)!==!1;);return n}function Fu(n,e,t,r){var a=!t;t||(t={});for(var i=-1,o=e.length;++i<o;){var l=e[i],u=r?r(t[l],n[l],l,t,n):void 0;u===void 0&&(u=n[l]),a?T_(t,l,u):Sy(t,l,u)}return t}function xH(n,e){return n&&Fu(e,Go(e),n)}function wH(n){var e=[];if(n!=null)for(var t in Object(n))e.push(t);return e}var SH=Object.prototype,_H=SH.hasOwnProperty;function kH(n){if(!Mr(n))return wH(n);var e=Em(n),t=[];for(var r in n)r=="constructor"&&(e||!_H.call(n,r))||t.push(r);return t}function Ay(n){return Ou(n)?j3(n,!0):kH(n)}function PH(n,e){return n&&Fu(e,Ay(e),n)}var sk=typeof Jt=="object"&&Jt&&!Jt.nodeType&&Jt,Dx=sk&&typeof er=="object"&&er&&!er.nodeType&&er,OH=Dx&&Dx.exports===sk,Lx=OH?Fr.Buffer:void 0,Rx=Lx?Lx.allocUnsafe:void 0;function TH(n,e){if(e)return n.slice();var t=n.length,r=Rx?Rx(t):new n.constructor(t);return n.copy(r),r}function NH(n,e){var t=-1,r=n.length;for(e||(e=Array(r));++t<r;)e[t]=n[t];return e}function IH(n,e){return Fu(n,Om(n),e)}var EH=Object.getOwnPropertySymbols,MH=EH?function(n){for(var e=[];n;)Pm(e,Om(n)),n=nm(n);return e}:I3;const ck=MH;function AH(n,e){return Fu(n,ck(n),e)}function dk(n){return N3(n,Ay,ck)}var FH=Object.prototype,jH=FH.hasOwnProperty;function DH(n){var e=n.length,t=new n.constructor(e);return e&&typeof n[0]=="string"&&jH.call(n,"index")&&(t.index=n.index,t.input=n.input),t}function Fy(n){var e=new n.constructor(n.byteLength);return new _c(e).set(new _c(n)),e}function LH(n,e){var t=e?Fy(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.byteLength)}var RH=/\w*$/;function $H(n){var e=new n.constructor(n.source,RH.exec(n));return e.lastIndex=n.lastIndex,e}var $x=gr?gr.prototype:void 0,Bx=$x?$x.valueOf:void 0;function BH(n){return Bx?Object(Bx.call(n)):{}}function VH(n,e){var t=e?Fy(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}var KH="[object Boolean]",zH="[object Date]",HH="[object Map]",WH="[object Number]",UH="[object RegExp]",qH="[object Set]",YH="[object String]",GH="[object Symbol]",XH="[object ArrayBuffer]",ZH="[object DataView]",QH="[object Float32Array]",JH="[object Float64Array]",eW="[object Int8Array]",nW="[object Int16Array]",tW="[object Int32Array]",rW="[object Uint8Array]",aW="[object Uint8ClampedArray]",iW="[object Uint16Array]",oW="[object Uint32Array]";function lW(n,e,t){var r=n.constructor;switch(e){case XH:return Fy(n);case KH:case zH:return new r(+n);case ZH:return LH(n,t);case QH:case JH:case eW:case nW:case tW:case rW:case aW:case iW:case oW:return VH(n,t);case HH:return new r;case WH:case YH:return new r(n);case UH:return $H(n);case qH:return new r;case GH:return BH(n)}}var Vx=Object.create,uW=function(){function n(){}return function(e){if(!Mr(e))return{};if(Vx)return Vx(e);n.prototype=e;var t=new n;return n.prototype=void 0,t}}();const sW=uW;function cW(n){return typeof n.constructor=="function"&&!Em(n)?sW(nm(n)):{}}var dW="[object Map]";function fW(n){return Nr(n)&&lu(n)==dW}var Kx=Do&&Do.isMap,vW=Kx?Nd(Kx):fW;const pW=vW;var hW="[object Set]";function gW(n){return Nr(n)&&lu(n)==hW}var zx=Do&&Do.isSet,mW=zx?Nd(zx):gW;const yW=mW;var bW=1,CW=2,xW=4,fk="[object Arguments]",wW="[object Array]",SW="[object Boolean]",_W="[object Date]",kW="[object Error]",vk="[object Function]",PW="[object GeneratorFunction]",OW="[object Map]",TW="[object Number]",pk="[object Object]",NW="[object RegExp]",IW="[object Set]",EW="[object String]",MW="[object Symbol]",AW="[object WeakMap]",FW="[object ArrayBuffer]",jW="[object DataView]",DW="[object Float32Array]",LW="[object Float64Array]",RW="[object Int8Array]",$W="[object Int16Array]",BW="[object Int32Array]",VW="[object Uint8Array]",KW="[object Uint8ClampedArray]",zW="[object Uint16Array]",HW="[object Uint32Array]",Hn={};Hn[fk]=Hn[wW]=Hn[FW]=Hn[jW]=Hn[SW]=Hn[_W]=Hn[DW]=Hn[LW]=Hn[RW]=Hn[$W]=Hn[BW]=Hn[OW]=Hn[TW]=Hn[pk]=Hn[NW]=Hn[IW]=Hn[EW]=Hn[MW]=Hn[VW]=Hn[KW]=Hn[zW]=Hn[HW]=!0;Hn[kW]=Hn[vk]=Hn[AW]=!1;function Rl(n,e,t,r,a,i){var o,l=e&bW,u=e&CW,s=e&xW;if(t&&(o=a?t(n,r,a,i):t(n)),o!==void 0)return o;if(!Mr(n))return n;var c=yr(n);if(c){if(o=DH(n),!l)return NH(n,o)}else{var d=lu(n),f=d==vk||d==PW;if(kc(n))return TH(n,l);if(d==pk||d==fk||f&&!a){if(o=u||f?{}:cW(n),!l)return u?AH(n,PH(o,n)):IH(n,xH(o,n))}else{if(!Hn[d])return a?n:{};o=lW(n,d,l)}}i||(i=new Yr);var p=i.get(n);if(p)return p;i.set(n,o),yW(n)?n.forEach(function(h){o.add(Rl(h,e,t,h,n,i))}):pW(n)&&n.forEach(function(h,m){o.set(m,Rl(h,e,t,m,n,i))});var g=s?u?dk:Sp:u?Ay:Go,y=c?void 0:g(n);return CH(y||n,function(h,m){y&&(m=h,h=n[m]),Sy(o,m,Rl(h,e,t,m,n,i))}),o}var WW=1,UW=4;function Vs(n){return Rl(n,WW|UW)}function Oi(){return Oi=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Oi.apply(this,arguments)}function qW(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,mu(n,e)}function Xp(n){return Xp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Xp(n)}function mu(n,e){return mu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},mu(n,e)}function YW(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ks(n,e,t){return YW()?Ks=Reflect.construct.bind():Ks=function(a,i,o){var l=[null];l.push.apply(l,i);var u=Function.bind.apply(a,l),s=new u;return o&&mu(s,o.prototype),s},Ks.apply(null,arguments)}function GW(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function Zp(n){var e=typeof Map=="function"?new Map:void 0;return Zp=function(r){if(r===null||!GW(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,a)}function a(){return Ks(r,arguments,Xp(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),mu(a,r)},Zp(n)}var XW=/%[sdj%]/g,ZW=function(){};typeof process<"u"&&process.env;function Qp(n){if(!n||!n.length)return null;var e={};return n.forEach(function(t){var r=t.field;e[r]=e[r]||[],e[r].push(t)}),e}function Qt(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=0,i=t.length;if(typeof n=="function")return n.apply(null,t);if(typeof n=="string"){var o=n.replace(XW,function(l){if(l==="%%")return"%";if(a>=i)return l;switch(l){case"%s":return String(t[a++]);case"%d":return Number(t[a++]);case"%j":try{return JSON.stringify(t[a++])}catch{return"[Circular]"}break;default:return l}});return o}return n}function QW(n){return n==="string"||n==="url"||n==="hex"||n==="email"||n==="date"||n==="pattern"}function ht(n,e){return!!(n==null||e==="array"&&Array.isArray(n)&&!n.length||QW(e)&&typeof n=="string"&&!n)}function JW(n,e,t){var r=[],a=0,i=n.length;function o(l){r.push.apply(r,l||[]),a++,a===i&&t(r)}n.forEach(function(l){e(l,o)})}function Hx(n,e,t){var r=0,a=n.length;function i(o){if(o&&o.length){t(o);return}var l=r;r=r+1,l<a?e(n[l],i):t([])}i([])}function eU(n){var e=[];return Object.keys(n).forEach(function(t){e.push.apply(e,n[t]||[])}),e}var Wx=function(n){qW(e,n);function e(t,r){var a;return a=n.call(this,"Async Validation Error")||this,a.errors=t,a.fields=r,a}return e}(Zp(Error));function nU(n,e,t,r,a){if(e.first){var i=new Promise(function(f,p){var g=function(m){return r(m),m.length?p(new Wx(m,Qp(m))):f(a)},y=eU(n);Hx(y,t,g)});return i.catch(function(f){return f}),i}var o=e.firstFields===!0?Object.keys(n):e.firstFields||[],l=Object.keys(n),u=l.length,s=0,c=[],d=new Promise(function(f,p){var g=function(h){if(c.push.apply(c,h),s++,s===u)return r(c),c.length?p(new Wx(c,Qp(c))):f(a)};l.length||(r(c),f(a)),l.forEach(function(y){var h=n[y];o.indexOf(y)!==-1?Hx(h,t,g):JW(h,t,g)})});return d.catch(function(f){return f}),d}function tU(n){return!!(n&&n.message!==void 0)}function rU(n,e){for(var t=n,r=0;r<e.length;r++){if(t==null)return t;t=t[e[r]]}return t}function Ux(n,e){return function(t){var r;return n.fullFields?r=rU(e,n.fullFields):r=e[t.field||n.fullField],tU(t)?(t.field=t.field||n.fullField,t.fieldValue=r,t):{message:typeof t=="function"?t():t,fieldValue:r,field:t.field||n.fullField}}}function qx(n,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];typeof r=="object"&&typeof n[t]=="object"?n[t]=Oi({},n[t],r):n[t]=r}}return n}var hk=function(e,t,r,a,i,o){e.required&&(!r.hasOwnProperty(e.field)||ht(t,o||e.type))&&a.push(Qt(i.messages.required,e.fullField))},aU=function(e,t,r,a,i){(/^\s+$/.test(t)||t==="")&&a.push(Qt(i.messages.whitespace,e.fullField))},hs,iU=function(){if(hs)return hs;var n="[a-fA-F\\d:]",e=function(x){return x&&x.includeBoundaries?"(?:(?<=\\s|^)(?="+n+")|(?<="+n+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",a=(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+t+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+t+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+t+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+t+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+t+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+t+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+t+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),i=new RegExp("(?:^"+t+"$)|(?:^"+a+"$)"),o=new RegExp("^"+t+"$"),l=new RegExp("^"+a+"$"),u=function(x){return x&&x.exact?i:new RegExp("(?:"+e(x)+t+e(x)+")|(?:"+e(x)+a+e(x)+")","g")};u.v4=function(C){return C&&C.exact?o:new RegExp(""+e(C)+t+e(C),"g")},u.v6=function(C){return C&&C.exact?l:new RegExp(""+e(C)+a+e(C),"g")};var s="(?:(?:[a-z]+:)?//)",c="(?:\\S+(?::\\S*)?@)?",d=u.v4().source,f=u.v6().source,p="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",g="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",y="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",h="(?::\\d{2,5})?",m='(?:[/?#][^\\s"]*)?',b="(?:"+s+"|www\\.)"+c+"(?:localhost|"+d+"|"+f+"|"+p+g+y+")"+h+m;return hs=new RegExp("(?:^"+b+"$)","i"),hs},Yx={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},wl={integer:function(e){return wl.number(e)&&parseInt(e,10)===e},float:function(e){return wl.number(e)&&!wl.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!wl.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Yx.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(iU())},hex:function(e){return typeof e=="string"&&!!e.match(Yx.hex)}},oU=function(e,t,r,a,i){if(e.required&&t===void 0){hk(e,t,r,a,i);return}var o=["integer","float","array","regexp","object","method","email","number","date","url","hex"],l=e.type;o.indexOf(l)>-1?wl[l](t)||a.push(Qt(i.messages.types[l],e.fullField,e.type)):l&&typeof t!==e.type&&a.push(Qt(i.messages.types[l],e.fullField,e.type))},lU=function(e,t,r,a,i){var o=typeof e.len=="number",l=typeof e.min=="number",u=typeof e.max=="number",s=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=t,d=null,f=typeof t=="number",p=typeof t=="string",g=Array.isArray(t);if(f?d="number":p?d="string":g&&(d="array"),!d)return!1;g&&(c=t.length),p&&(c=t.replace(s,"_").length),o?c!==e.len&&a.push(Qt(i.messages[d].len,e.fullField,e.len)):l&&!u&&c<e.min?a.push(Qt(i.messages[d].min,e.fullField,e.min)):u&&!l&&c>e.max?a.push(Qt(i.messages[d].max,e.fullField,e.max)):l&&u&&(c<e.min||c>e.max)&&a.push(Qt(i.messages[d].range,e.fullField,e.min,e.max))},to="enum",uU=function(e,t,r,a,i){e[to]=Array.isArray(e[to])?e[to]:[],e[to].indexOf(t)===-1&&a.push(Qt(i.messages[to],e.fullField,e[to].join(", ")))},sU=function(e,t,r,a,i){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||a.push(Qt(i.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var o=new RegExp(e.pattern);o.test(t)||a.push(Qt(i.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},In={required:hk,whitespace:aU,type:oU,range:lU,enum:uU,pattern:sU},cU=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(ht(t,"string")&&!e.required)return r();In.required(e,t,a,o,i,"string"),ht(t,"string")||(In.type(e,t,a,o,i),In.range(e,t,a,o,i),In.pattern(e,t,a,o,i),e.whitespace===!0&&In.whitespace(e,t,a,o,i))}r(o)},dU=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(ht(t)&&!e.required)return r();In.required(e,t,a,o,i),t!==void 0&&In.type(e,t,a,o,i)}r(o)},fU=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(t===""&&(t=void 0),ht(t)&&!e.required)return r();In.required(e,t,a,o,i),t!==void 0&&(In.type(e,t,a,o,i),In.range(e,t,a,o,i))}r(o)},vU=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(ht(t)&&!e.required)return r();In.required(e,t,a,o,i),t!==void 0&&In.type(e,t,a,o,i)}r(o)},pU=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(ht(t)&&!e.required)return r();In.required(e,t,a,o,i),ht(t)||In.type(e,t,a,o,i)}r(o)},hU=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(ht(t)&&!e.required)return r();In.required(e,t,a,o,i),t!==void 0&&(In.type(e,t,a,o,i),In.range(e,t,a,o,i))}r(o)},gU=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(ht(t)&&!e.required)return r();In.required(e,t,a,o,i),t!==void 0&&(In.type(e,t,a,o,i),In.range(e,t,a,o,i))}r(o)},mU=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(t==null&&!e.required)return r();In.required(e,t,a,o,i,"array"),t!=null&&(In.type(e,t,a,o,i),In.range(e,t,a,o,i))}r(o)},yU=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(ht(t)&&!e.required)return r();In.required(e,t,a,o,i),t!==void 0&&In.type(e,t,a,o,i)}r(o)},bU="enum",CU=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(ht(t)&&!e.required)return r();In.required(e,t,a,o,i),t!==void 0&&In[bU](e,t,a,o,i)}r(o)},xU=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(ht(t,"string")&&!e.required)return r();In.required(e,t,a,o,i),ht(t,"string")||In.pattern(e,t,a,o,i)}r(o)},wU=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(ht(t,"date")&&!e.required)return r();if(In.required(e,t,a,o,i),!ht(t,"date")){var u;t instanceof Date?u=t:u=new Date(t),In.type(e,u,a,o,i),u&&In.range(e,u.getTime(),a,o,i)}}r(o)},SU=function(e,t,r,a,i){var o=[],l=Array.isArray(t)?"array":typeof t;In.required(e,t,a,o,i,l),r(o)},lv=function(e,t,r,a,i){var o=e.type,l=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(ht(t,o)&&!e.required)return r();In.required(e,t,a,l,i,o),ht(t,o)||In.type(e,t,a,l,i)}r(l)},_U=function(e,t,r,a,i){var o=[],l=e.required||!e.required&&a.hasOwnProperty(e.field);if(l){if(ht(t)&&!e.required)return r();In.required(e,t,a,o,i)}r(o)},$l={string:cU,method:dU,number:fU,boolean:vU,regexp:pU,integer:hU,float:gU,array:mU,object:yU,enum:CU,pattern:xU,date:wU,url:lv,hex:lv,email:lv,required:SU,any:_U};function Jp(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var eh=Jp(),ju=function(){function n(t){this.rules=null,this._messages=eh,this.define(t)}var e=n.prototype;return e.define=function(r){var a=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(i){var o=r[i];a.rules[i]=Array.isArray(o)?o:[o]})},e.messages=function(r){return r&&(this._messages=qx(Jp(),r)),this._messages},e.validate=function(r,a,i){var o=this;a===void 0&&(a={}),i===void 0&&(i=function(){});var l=r,u=a,s=i;if(typeof u=="function"&&(s=u,u={}),!this.rules||Object.keys(this.rules).length===0)return s&&s(null,l),Promise.resolve(l);function c(y){var h=[],m={};function b(x){if(Array.isArray(x)){var S;h=(S=h).concat.apply(S,x)}else h.push(x)}for(var C=0;C<y.length;C++)b(y[C]);h.length?(m=Qp(h),s(h,m)):s(null,l)}if(u.messages){var d=this.messages();d===eh&&(d=Jp()),qx(d,u.messages),u.messages=d}else u.messages=this.messages();var f={},p=u.keys||Object.keys(this.rules);p.forEach(function(y){var h=o.rules[y],m=l[y];h.forEach(function(b){var C=b;typeof C.transform=="function"&&(l===r&&(l=Oi({},l)),m=l[y]=C.transform(m)),typeof C=="function"?C={validator:C}:C=Oi({},C),C.validator=o.getValidationMethod(C),C.validator&&(C.field=y,C.fullField=C.fullField||y,C.type=o.getType(C),f[y]=f[y]||[],f[y].push({rule:C,value:m,source:l,field:y}))})});var g={};return nU(f,u,function(y,h){var m=y.rule,b=(m.type==="object"||m.type==="array")&&(typeof m.fields=="object"||typeof m.defaultField=="object");b=b&&(m.required||!m.required&&y.value),m.field=y.field;function C(w,_){return Oi({},_,{fullField:m.fullField+"."+w,fullFields:m.fullFields?[].concat(m.fullFields,[w]):[w]})}function x(w){w===void 0&&(w=[]);var _=Array.isArray(w)?w:[w];!u.suppressWarning&&_.length&&n.warning("async-validator:",_),_.length&&m.message!==void 0&&(_=[].concat(m.message));var P=_.map(Ux(m,l));if(u.first&&P.length)return g[m.field]=1,h(P);if(!b)h(P);else{if(m.required&&!y.value)return m.message!==void 0?P=[].concat(m.message).map(Ux(m,l)):u.error&&(P=[u.error(m,Qt(u.messages.required,m.field))]),h(P);var k={};m.defaultField&&Object.keys(y.value).map(function(M){k[M]=m.defaultField}),k=Oi({},k,y.rule.fields);var I={};Object.keys(k).forEach(function(M){var T=k[M],N=Array.isArray(T)?T:[T];I[M]=N.map(C.bind(null,M))});var F=new n(I);F.messages(u.messages),y.rule.options&&(y.rule.options.messages=u.messages,y.rule.options.error=u.error),F.validate(y.value,y.rule.options||u,function(M){var T=[];P&&P.length&&T.push.apply(T,P),M&&M.length&&T.push.apply(T,M),h(T.length?T:null)})}}var S;if(m.asyncValidator)S=m.asyncValidator(m,y.value,x,y.source,u);else if(m.validator){try{S=m.validator(m,y.value,x,y.source,u)}catch(w){console.error==null||console.error(w),u.suppressValidatorError||setTimeout(function(){throw w},0),x(w.message)}S===!0?x():S===!1?x(typeof m.message=="function"?m.message(m.fullField||m.field):m.message||(m.fullField||m.field)+" fails"):S instanceof Array?x(S):S instanceof Error&&x(S.message)}S&&S.then&&S.then(function(){return x()},function(w){return x(w)})},function(y){c(y)},l)},e.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!$l.hasOwnProperty(r.type))throw new Error(Qt("Unknown rule type %s",r.type));return r.type||"string"},e.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var a=Object.keys(r),i=a.indexOf("message");return i!==-1&&a.splice(i,1),a.length===1&&a[0]==="required"?$l.required:$l[this.getType(r)]||void 0},n}();ju.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");$l[e]=t};ju.warning=ZW;ju.messages=eh;ju.validators=$l;function Ga(n){return n==null?[]:Array.isArray(n)?n:[n]}function gk(n,e){for(var t=n,r=0;r<e.length;r+=1){if(t==null)return;t=t[e[r]]}return t}function mk(n,e,t,r){if(!e.length)return t;var a=gm(e),i=a[0],o=a.slice(1),l;return!n&&typeof i=="number"?l=[]:Array.isArray(n)?l=Ee(n):l=O({},n),r&&t===void 0&&o.length===1?delete l[i][o[0]]:l[i]=mk(l[i],o,t,r),l}function kU(n,e,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return e.length&&r&&t===void 0&&!gk(n,e.slice(0,-1))?n:mk(n,e,t,r)}function nh(n){return Ga(n)}function PU(n,e){var t=gk(n,e);return t}function OU(n,e,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,a=kU(n,e,t,r);return a}function TU(n,e){return n&&n.some(function(t){return IU(t,e)})}function Gx(n){return Be(n)==="object"&&n!==null&&Object.getPrototypeOf(n)===Object.prototype}function yk(n,e){var t=Array.isArray(n)?Ee(n):O({},n);return e&&Object.keys(e).forEach(function(r){var a=t[r],i=e[r],o=Gx(a)&&Gx(i);t[r]=o?yk(a,i||{}):i}),t}function NU(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return t.reduce(function(a,i){return yk(a,i)},n)}function Xx(n,e){var t={};return e.forEach(function(r){var a=PU(n,r);t=OU(t,r,a)}),t}function IU(n,e){return!n||!e||n.length!==e.length?!1:n.every(function(t,r){return e[r]===t})}var qt="'${name}' is not a valid ${type}",Qd={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:qt,method:qt,array:qt,object:qt,number:qt,date:qt,boolean:qt,integer:qt,float:qt,regexp:qt,email:qt,url:qt,hex:qt},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},Jd=globalThis&&globalThis.__awaiter||function(n,e,t,r){function a(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function l(c){try{s(r.next(c))}catch(d){o(d)}}function u(c){try{s(r.throw(c))}catch(d){o(d)}}function s(c){c.done?i(c.value):a(c.value).then(l,u)}s((r=r.apply(n,e||[])).next())})},EU=ju;function MU(n,e){return n.replace(/\$\{\w+\}/g,function(t){var r=t.slice(2,-1);return e[r]})}function th(n,e,t,r,a){return Jd(this,void 0,void 0,zt.mark(function i(){var o,l,u,s,c,d,f,p;return zt.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return o=O({},t),delete o.ruleIndex,delete o.trigger,l=null,o&&o.type==="array"&&o.defaultField&&(l=o.defaultField,delete o.defaultField),u=new EU(D({},n,[o])),s=NU({},Qd,r.validateMessages),u.messages(s),c=[],y.prev=9,y.next=12,Promise.resolve(u.validate(D({},n,e),O({},r)));case 12:y.next=17;break;case 14:y.prev=14,y.t0=y.catch(9),y.t0.errors?c=y.t0.errors.map(function(h,m){var b=h.message;return at(b)?Pt(b,{key:"error_".concat(m)}):b}):(console.error(y.t0),c=[s.default()]);case 17:if(!(!c.length&&l)){y.next=22;break}return y.next=20,Promise.all(e.map(function(h,m){return th("".concat(n,".").concat(m),h,l,r,a)}));case 20:return d=y.sent,y.abrupt("return",d.reduce(function(h,m){return[].concat(Ee(h),Ee(m))},[]));case 22:return f=O(O(O({},t),{name:n,enum:(t.enum||[]).join(", ")}),a),p=c.map(function(h){return typeof h=="string"?MU(h,f):h}),y.abrupt("return",p);case 25:case"end":return y.stop()}},i,null,[[9,14]])}))}function bk(n,e,t,r,a,i){var o=this,l=n.join("."),u=t.map(function(d,f){var p=d.validator,g=O(O({},d),{ruleIndex:f});return p&&(g.validator=function(y,h,m){var b=!1,C=function(){for(var w=arguments.length,_=new Array(w),P=0;P<w;P++)_[P]=arguments[P];Promise.resolve().then(function(){b||m.apply(void 0,_)})},x=p(y,h,C);b=x&&typeof x.then=="function"&&typeof x.catch=="function",b&&x.then(function(){m()}).catch(function(S){m(S||" ")})}),g}).sort(function(d,f){var p=d.warningOnly,g=d.ruleIndex,y=f.warningOnly,h=f.ruleIndex;return!!p==!!y?g-h:p?1:-1}),s;if(a===!0)s=new Promise(function(d,f){return Jd(o,void 0,void 0,zt.mark(function p(){var g,y,h;return zt.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:g=0;case 1:if(!(g<u.length)){b.next=12;break}return y=u[g],b.next=5,th(l,e,y,r,i);case 5:if(h=b.sent,!h.length){b.next=9;break}return f([{errors:h,rule:y}]),b.abrupt("return");case 9:g+=1,b.next=1;break;case 12:d([]);case 13:case"end":return b.stop()}},p)}))});else{var c=u.map(function(d){return th(l,e,d,r,i).then(function(f){return{errors:f,rule:d}})});s=(a?FU(c):AU(c)).then(function(d){return Promise.reject(d)})}return s.catch(function(d){return d}),s}function AU(n){return Jd(this,void 0,void 0,zt.mark(function e(){return zt.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.all(n).then(function(a){var i,o=(i=[]).concat.apply(i,Ee(a));return o}));case 1:case"end":return r.stop()}},e)}))}function FU(n){return Jd(this,void 0,void 0,zt.mark(function e(){var t;return zt.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=0,a.abrupt("return",new Promise(function(i){n.forEach(function(o){o.then(function(l){l.errors.length&&i([l]),t+=1,t===n.length&&i([])})})}));case 2:case"end":return a.stop()}},e)}))}var jU=1,DU=2;function LU(n,e,t,r){var a=t.length,i=a,o=!r;if(n==null)return!i;for(n=Object(n);a--;){var l=t[a];if(o&&l[2]?l[1]!==n[l[0]]:!(l[0]in n))return!1}for(;++a<i;){l=t[a];var u=l[0],s=n[u],c=l[1];if(o&&l[2]){if(s===void 0&&!(u in n))return!1}else{var d=new Yr;if(r)var f=r(s,c,u,n,e,d);if(!(f===void 0?Id(c,s,jU|DU,r,d):f))return!1}}return!0}function Ck(n){return n===n&&!Mr(n)}function RU(n){for(var e=Go(n),t=e.length;t--;){var r=e[t],a=n[r];e[t]=[r,a,Ck(a)]}return e}function xk(n,e){return function(t){return t==null?!1:t[n]===e&&(e!==void 0||n in Object(t))}}function $U(n){var e=RU(n);return e.length==1&&e[0][2]?xk(e[0][0],e[0][1]):function(t){return t===n||LU(t,n,e)}}function BU(n,e,t){var r=n==null?void 0:zd(n,e);return r===void 0?t:r}var VU=1,KU=2;function zU(n,e){return xy(n)&&Ck(e)?xk(nl(n),e):function(t){var r=BU(t,n);return r===void 0&&r===e?N_(t,n):Id(e,r,VU|KU)}}function HU(n){return function(e){return zd(e,n)}}function WU(n){return xy(n)?B6(nl(n)):HU(n)}function jy(n){return typeof n=="function"?n:n==null?_y:typeof n=="object"?yr(n)?zU(n[0],n[1]):$U(n):WU(n)}function UU(n){return function(e,t,r){var a=Object(e);if(!Ou(e)){var i=jy(t);e=Go(e),t=function(l){return i(a[l],l,a)}}var o=n(e,t,r);return o>-1?a[i?e[o]:o]:void 0}}var qU=Math.max;function YU(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var a=t==null?0:Qm(t);return a<0&&(a=qU(r+a,0)),x6(n,jy(e),a)}var GU=UU(YU);const XU=GU;var wk=Symbol("formContextKey"),Sk=function(e){ln(wk,e)},Dy=function(){return on(wk,{name:R(function(){}),labelAlign:R(function(){return"right"}),vertical:R(function(){return!1}),addField:function(t,r){},removeField:function(t){},model:R(function(){}),rules:R(function(){}),colon:R(function(){}),labelWrap:R(function(){}),labelCol:R(function(){}),requiredMark:R(function(){return!1}),validateTrigger:R(function(){}),onValidate:function(){},validateMessages:R(function(){return Qd})})},_k=Symbol("formItemPrefixContextKey"),ZU=function(e){ln(_k,e)},QU=function(){return on(_k,{prefixCls:R(function(){return""})})},Ly=function(e,t){var r,a=t.slots,i=t.emit,o=t.attrs,l,u,s,c,d,f=O(O({},e),o),p=f.prefixCls,g=f.htmlFor,y=f.labelCol,h=f.labelAlign,m=f.colon,b=f.required,C=f.requiredMark,x=na("Form"),S=Te(x,1),w=S[0],_=(l=e.label)!==null&&l!==void 0?l:(u=a.label)===null||u===void 0?void 0:u.call(a);if(!_)return null;var P=Dy(),k=P.vertical,I=P.labelAlign,F=P.labelCol,M=P.labelWrap,T=P.colon,N=y||(F==null?void 0:F.value)||{},j=h||(I==null?void 0:I.value),$="".concat(p,"-item-label"),A=de($,j==="left"&&"".concat($,"-left"),N.class,D({},"".concat($,"-wrap"),!!M.value)),E=_,L=m===!0||(T==null?void 0:T.value)!==!1&&m!==!1,B=L&&!k.value;B&&typeof _=="string"&&_.trim()!==""&&(E=_.replace(/[:|：]\s*$/,"")),E=v(qe,null,[E,(s=a.tooltip)===null||s===void 0?void 0:s.call(a,{class:"".concat(p,"-item-tooltip")})]),C==="optional"&&!b&&(E=v(qe,null,[E,v("span",{class:"".concat(p,"-item-optional")},[((c=w.value)===null||c===void 0?void 0:c.optional)||((d=Ir.Form)===null||d===void 0?void 0:d.optional)])]));var K=de((r={},D(r,"".concat(p,"-item-required"),b),D(r,"".concat(p,"-item-required-mark-optional"),C==="optional"),D(r,"".concat(p,"-item-no-colon"),!L),r));return v(Hd,W(W({},N),{},{class:A}),{default:function(){return[v("label",{for:g,class:K,title:typeof _=="string"?_:"",onClick:function(Y){return i("click",Y)}},[E])]}})};Ly.displayName="FormItemLabel";Ly.inheritAttrs=!1;const JU=Ly,eq=ae({name:"ErrorList",props:["errors","help","onDomErrorVisibleChange","helpStatus","warnings"],setup:function(e){var t=Le("",e),r=t.prefixCls,a=QU(),i=a.prefixCls,o=a.status,l=R(function(){return"".concat(i.value,"-item-explain")}),u=R(function(){return!!(e.errors&&e.errors.length)}),s=q(o.value);return Pe([u,o],function(){u.value&&(s.value=o.value)}),function(){var c,d,f=Nu("".concat(r.value,"-show-help-item")),p=sm("".concat(r.value,"-show-help-item"),f);return p.class=l.value,!((c=e.errors)===null||c===void 0)&&c.length?v(zh,W(W({},p),{},{tag:"div"}),{default:function(){return[(d=e.errors)===null||d===void 0?void 0:d.map(function(y,h){return v("div",{key:h,role:"alert",class:s.value?"".concat(l.value,"-").concat(s.value):""},[y])})]}}):null}}});var nq=ae({slots:["help","extra","errors"],inheritAttrs:!1,props:["prefixCls","errors","hasFeedback","onDomErrorVisibleChange","wrapperCol","help","extra","status"],setup:function(e,t){var r=t.slots,a=Dy(),i=a.wrapperCol,o=O({},a);return delete o.labelCol,delete o.wrapperCol,Sk(o),ZU({prefixCls:R(function(){return e.prefixCls}),status:R(function(){return e.status})}),function(){var l,u,s,c=e.prefixCls,d=e.wrapperCol,f=e.help,p=f===void 0?(l=r.help)===null||l===void 0?void 0:l.call(r):f,g=e.errors,y=g===void 0?(u=r.errors)===null||u===void 0?void 0:u.call(r):g,h=e.extra,m=h===void 0?(s=r.extra)===null||s===void 0?void 0:s.call(r):h,b="".concat(c,"-item"),C=d||(i==null?void 0:i.value)||{},x=de("".concat(b,"-control"),C.class);return v(Hd,W(W({},C),{},{class:x}),{default:function(){var w;return v(qe,null,[v("div",{class:"".concat(b,"-control-input")},[v("div",{class:"".concat(b,"-control-input-content")},[(w=r.default)===null||w===void 0?void 0:w.call(r)])]),v(eq,{errors:y,help:p,class:"".concat(b,"-explain-connected")},null),m?v("div",{class:"".concat(b,"-extra")},[m]):null])}})}}});const tq=nq;function rq(n){var e=cn(n.value.slice()),t=null;return Ze(function(){clearTimeout(t),t=setTimeout(function(){e.value=n.value},n.value.length?0:10)}),e}jn("success","warning","error","validating","");var aq={success:Cu,warning:wu,error:Jr,validating:Tr};function uv(n,e,t){var r=n,a=e,i=0;try{for(var o=a.length;i<o-1&&!(!r&&!t);++i){var l=a[i];if(l in r)r=r[l];else{if(t)throw Error("please transfer a valid name path to form item!");break}}if(t&&!r)throw Error("please transfer a valid name path to form item!")}catch{console.error("please transfer a valid name path to form item!")}return{o:r,k:a[i],v:r?r[a[i]]:void 0}}var iq=function(){return{htmlFor:String,prefixCls:String,label:U.any,help:U.any,extra:U.any,labelCol:{type:Object},wrapperCol:{type:Object},hasFeedback:{type:Boolean,default:!1},colon:{type:Boolean,default:void 0},labelAlign:U.oneOf(jn("left","right")),prop:{type:[String,Number,Array]},name:{type:[String,Number,Array]},rules:[Array,Object],autoLink:{type:Boolean,default:!0},required:{type:Boolean,default:void 0},validateFirst:{type:Boolean,default:void 0},validateStatus:U.oneOf(jn("","success","warning","error","validating")),validateTrigger:{type:[String,Array]},messageVariables:{type:Object},hidden:Boolean,noStyle:Boolean}},oq=0,lq="form_item";const kk=ae({name:"AFormItem",inheritAttrs:!1,__ANT_NEW_FORM_ITEM:!0,props:iq(),slots:["help","label","extra"],setup:function(e,t){var r=t.slots,a=t.attrs,i=t.expose;e.prop;var o="form-item-".concat(++oq),l=Le("form",e),u=l.prefixCls,s=Dy(),c=R(function(){return e.name||e.prop}),d=q([]),f=q(!1),p=q(),g=R(function(){var B=c.value;return nh(B)}),y=R(function(){if(g.value.length){var B=s.name.value,K=g.value.join("_");return B?"".concat(B,"_").concat(K):"".concat(lq,"_").concat(K)}else return}),h=function(){var K=s.model.value;if(!(!K||!c.value))return uv(K,g.value,!0).v},m=R(function(){return h()}),b=q(Vs(m.value)),C=R(function(){var B=e.validateTrigger!==void 0?e.validateTrigger:s.validateTrigger.value;return B=B===void 0?"change":B,Ga(B)}),x=R(function(){var B=s.rules.value,K=e.rules,H=e.required!==void 0?{required:!!e.required,trigger:C.value}:[],Z=uv(B,g.value);B=B?Z.o[Z.k]||Z.v:[];var Y=[].concat(K||B||[]);return XU(Y,function(G){return G.required})?Y:Y.concat(H)}),S=R(function(){var B=x.value,K=!1;return B&&B.length&&B.every(function(H){return H.required?(K=!0,!1):!0}),K||e.required}),w=q();Ze(function(){w.value=e.validateStatus});var _=R(function(){var B={};return typeof e.label=="string"?B.label=e.label:e.name&&(B.label=String(name)),e.messageVariables&&(B=O(O({},B),e.messageVariables)),B}),P=function(K){if(g.value.length!==0){var H=e.validateFirst,Z=H===void 0?!1:H,Y=K||{},G=Y.triggerName,Q=x.value;if(G&&(Q=Q.filter(function(J){var ne=J.trigger;if(!ne&&!C.value.length)return!0;var oe=Ga(ne||C.value);return oe.includes(G)})),!Q.length)return Promise.resolve();var z=bk(g.value,m.value,Q,O({validateMessages:s.validateMessages.value},K),Z,_.value);return w.value="validating",d.value=[],z.catch(function(J){return J}).then(function(){var J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(w.value==="validating"){var ne=J.filter(function(oe){return oe&&oe.errors.length});w.value=ne.length?"error":"success",d.value=ne.map(function(oe){return oe.errors}),s.onValidate(c.value,!d.value.length,d.value.length?an(d.value[0]):null)}}),z}},k=function(){P({triggerName:"blur"})},I=function(){if(f.value){f.value=!1;return}P({triggerName:"change"})},F=function(){w.value=e.validateStatus,f.value=!1,d.value=[]},M=function(){w.value=e.validateStatus,f.value=!0,d.value=[];var K=s.model.value||{},H=m.value,Z=uv(K,g.value,!0);Array.isArray(H)?Z.o[Z.k]=[].concat(b.value):Z.o[Z.k]=b.value,dn(function(){f.value=!1})},T=R(function(){return e.htmlFor===void 0?y.value:e.htmlFor}),N=function(){var K=T.value;if(!(!K||!p.value)){var H=p.value.$el.querySelector('[id="'.concat(K,'"]'));H&&H.focus&&H.focus()}};i({onFieldBlur:k,onFieldChange:I,clearValidate:F,resetField:M}),pR({id:y,onFieldBlur:function(){e.autoLink&&k()},onFieldChange:function(){e.autoLink&&I()},clearValidate:F},R(function(){return!!(e.autoLink&&s.model.value&&c.value)}));var j=!1;Pe(c,function(B){B?j||(j=!0,s.addField(o,{fieldValue:m,fieldId:y,fieldName:c,resetField:M,clearValidate:F,namePath:g,validateRules:P,rules:x})):(j=!1,s.removeField(o))},{immediate:!0}),fn(function(){s.removeField(o)});var $=rq(d),A=R(function(){return e.validateStatus!==void 0?e.validateStatus:$.value.length?"error":w.value}),E=R(function(){var B;return B={},D(B,"".concat(u.value,"-item"),!0),D(B,"".concat(u.value,"-item-has-feedback"),A.value&&e.hasFeedback),D(B,"".concat(u.value,"-item-has-success"),A.value==="success"),D(B,"".concat(u.value,"-item-has-warning"),A.value==="warning"),D(B,"".concat(u.value,"-item-has-error"),A.value==="error"),D(B,"".concat(u.value,"-item-is-validating"),A.value==="validating"),D(B,"".concat(u.value,"-item-hidden"),e.hidden),B}),L=kn({});return pt.useProvide(L),Ze(function(){var B;if(e.hasFeedback){var K=A.value&&aq[A.value];B=K?v("span",{class:de("".concat(u.value,"-item-feedback-icon"),"".concat(u.value,"-item-feedback-icon-").concat(A.value))},[v(K,null,null)]):null}O(L,{status:A.value,hasFeedback:e.hasFeedback,feedbackIcon:B,isFormItemInput:!0})}),function(){var B,K;if(e.noStyle)return(B=r.default)===null||B===void 0?void 0:B.call(r);var H=(K=e.help)!==null&&K!==void 0?K:r.help?Qn(r.help()):null;return v(Py,W(W({},a),{},{class:[E.value,H!=null||$.value.length?"".concat(u.value,"-item-with-help"):"",a.class],key:"row"}),{default:function(){var Y,G,Q,z;return v(qe,null,[v(JU,W(W({},e),{},{htmlFor:T.value,required:S.value,requiredMark:s.requiredMark.value,prefixCls:u.value,onClick:N,label:(Y=e.label)!==null&&Y!==void 0?Y:(G=r.label)===null||G===void 0?void 0:G.call(r)}),null),v(tq,W(W({},e),{},{errors:H!=null?Ga(H):$.value,prefixCls:u.value,status:A.value,ref:p,help:H,extra:(Q=e.extra)!==null&&Q!==void 0?Q:(z=r.extra)===null||z===void 0?void 0:z.call(r)}),{default:r.default})])}})}}});function Pk(n){var e=!1,t=n.length,r=[];return n.length?new Promise(function(a,i){n.forEach(function(o,l){o.catch(function(u){return e=!0,u}).then(function(u){t-=1,r[l]=u,!(t>0)&&(e&&i(r),a(r))})})}):Promise.resolve([])}function Zx(n){return typeof n=="object"&&n!=null&&n.nodeType===1}function Qx(n,e){return(!e||n!=="hidden")&&n!=="visible"&&n!=="clip"}function sv(n,e){if(n.clientHeight<n.scrollHeight||n.clientWidth<n.scrollWidth){var t=getComputedStyle(n,null);return Qx(t.overflowY,e)||Qx(t.overflowX,e)||function(r){var a=function(i){if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}}(r);return!!a&&(a.clientHeight<r.scrollHeight||a.clientWidth<r.scrollWidth)}(n)}return!1}function gs(n,e,t,r,a,i,o,l){return i<n&&o>e||i>n&&o<e?0:i<=n&&l<=t||o>=e&&l>=t?i-n-r:o>e&&l<t||i<n&&l>t?o-e+a:0}function Jx(n,e){var t=window,r=e.scrollMode,a=e.block,i=e.inline,o=e.boundary,l=e.skipOverflowHiddenElements,u=typeof o=="function"?o:function(oe){return oe!==o};if(!Zx(n))throw new TypeError("Invalid target");for(var s=document.scrollingElement||document.documentElement,c=[],d=n;Zx(d)&&u(d);){if((d=d.parentElement)===s){c.push(d);break}d!=null&&d===document.body&&sv(d)&&!sv(document.documentElement)||d!=null&&sv(d,l)&&c.push(d)}for(var f=t.visualViewport?t.visualViewport.width:innerWidth,p=t.visualViewport?t.visualViewport.height:innerHeight,g=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,h=n.getBoundingClientRect(),m=h.height,b=h.width,C=h.top,x=h.right,S=h.bottom,w=h.left,_=a==="start"||a==="nearest"?C:a==="end"?S:C+m/2,P=i==="center"?w+b/2:i==="end"?x:w,k=[],I=0;I<c.length;I++){var F=c[I],M=F.getBoundingClientRect(),T=M.height,N=M.width,j=M.top,$=M.right,A=M.bottom,E=M.left;if(r==="if-needed"&&C>=0&&w>=0&&S<=p&&x<=f&&C>=j&&S<=A&&w>=E&&x<=$)return k;var L=getComputedStyle(F),B=parseInt(L.borderLeftWidth,10),K=parseInt(L.borderTopWidth,10),H=parseInt(L.borderRightWidth,10),Z=parseInt(L.borderBottomWidth,10),Y=0,G=0,Q="offsetWidth"in F?F.offsetWidth-F.clientWidth-B-H:0,z="offsetHeight"in F?F.offsetHeight-F.clientHeight-K-Z:0;if(s===F)Y=a==="start"?_:a==="end"?_-p:a==="nearest"?gs(y,y+p,p,K,Z,y+_,y+_+m,m):_-p/2,G=i==="start"?P:i==="center"?P-f/2:i==="end"?P-f:gs(g,g+f,f,B,H,g+P,g+P+b,b),Y=Math.max(0,Y+y),G=Math.max(0,G+g);else{Y=a==="start"?_-j-K:a==="end"?_-A+Z+z:a==="nearest"?gs(j,A,T,K,Z+z,_,_+m,m):_-(j+T/2)+z/2,G=i==="start"?P-E-B:i==="center"?P-(E+N/2)+Q/2:i==="end"?P-$+H+Q:gs(E,$,N,B,H+Q,P,P+b,b);var J=F.scrollLeft,ne=F.scrollTop;_+=ne-(Y=Math.max(0,Math.min(ne+Y,F.scrollHeight-T+z))),P+=J-(G=Math.max(0,Math.min(J+G,F.scrollWidth-N+Q)))}k.push({el:F,top:Y,left:G})}return k}function Ok(n){return n===Object(n)&&Object.keys(n).length!==0}function uq(n,e){e===void 0&&(e="auto");var t="scrollBehavior"in document.body.style;n.forEach(function(r){var a=r.el,i=r.top,o=r.left;a.scroll&&t?a.scroll({top:i,left:o,behavior:e}):(a.scrollTop=i,a.scrollLeft=o)})}function sq(n){return n===!1?{block:"end",inline:"nearest"}:Ok(n)?n:{block:"start",inline:"nearest"}}function cq(n,e){var t=n.isConnected||n.ownerDocument.documentElement.contains(n);if(Ok(e)&&typeof e.behavior=="function")return e.behavior(t?Jx(n,e):[]);if(!!t){var r=sq(e);return uq(Jx(n,r),r.behavior)}}var dq=Math.min;function fq(n,e,t){for(var r=t?S6:w6,a=n[0].length,i=n.length,o=i,l=Array(i),u=1/0,s=[];o--;){var c=n[o];o&&e&&(c=Ld(c,Nd(e))),u=dq(c.length,u),l[o]=!t&&(e||a>=120&&c.length>=120)?new jo(o&&c):void 0}c=n[0];var d=-1,f=l[0];e:for(;++d<a&&s.length<u;){var p=c[d],g=e?e(p):p;if(p=t||p!==0?p:0,!(f?Sc(f,g):r(s,g,t))){for(o=i;--o;){var y=l[o];if(!(y?Sc(y,g):r(n[o],g,t)))continue e}f&&f.push(g),s.push(p)}}return s}function vq(n,e){return M_(E_(n,e,_y),n+"")}function pq(n){return Nr(n)&&Ou(n)}function hq(n){return pq(n)?n:[]}var gq=vq(function(n){var e=Ld(n,hq);return e.length&&e[0]===n[0]?fq(e):[]});const mq=gq;function yq(n){var e=n==null?0:n.length;return e?n[e-1]:void 0}function bq(n,e){return e.length<2?n:zd(n,$6(e,0,-1))}function Cq(n,e){return e=el(e,n),n=bq(n,e),n==null||delete n[nl(yq(e))]}function xq(n){return tm(n)?void 0:n}var wq=1,Sq=2,_q=4,kq=A_(function(n,e){var t={};if(n==null)return t;var r=!1;e=Ld(e,function(i){return i=el(i,n),r||(r=i.length>1),i}),Fu(n,dk(n),t),r&&(t=Rl(t,wq|Sq|_q,xq));for(var a=e.length;a--;)Cq(t,e[a]);return t});const Pq=kq;function e2(n){var e=!1;return n&&n.length&&n.every(function(t){return t.required?(e=!0,!1):!0}),e}function n2(n){return n==null?[]:Array.isArray(n)?n:[n]}function cv(n,e,t){var r=n;e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,"");for(var a=e.split("."),i=0,o=a.length;i<o-1&&!(!r&&!t);++i){var l=a[i];if(l in r)r=r[l];else{if(t)throw new Error("please transfer a valid name path to validate!");break}}return{o:r,k:a[i],v:r?r[a[i]]:null,isValid:r&&a[i]in r}}function Oq(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:q({}),t=arguments.length>2?arguments[2]:void 0,r=Vs(Xe(n)),a=kn({}),i=cn([]),o=function(x){O(Xe(n),O(O({},Vs(r)),x)),dn(function(){Object.keys(a).forEach(function(S){a[S]={autoLink:!1,required:e2(Xe(e)[S])}})})},l=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],S=arguments.length>1?arguments[1]:void 0;return S.length?x.filter(function(w){var _=n2(w.trigger||"change");return mq(_,S).length}):x},u=null,s=function(x){for(var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w=arguments.length>2?arguments[2]:void 0,_=[],P={},k=function(j){var $=x[j],A=cv(Xe(n),$,w);if(!A.isValid)return"continue";P[$]=A.v;var E=l(Xe(e)[$],n2(S&&S.trigger));E.length&&_.push(c($,A.v,E,S||{}).then(function(){return{name:$,errors:[],warnings:[]}}).catch(function(L){var B=[],K=[];return L.forEach(function(H){var Z=H.rule.warningOnly,Y=H.errors;Z?K.push.apply(K,Ee(Y)):B.push.apply(B,Ee(Y))}),B.length?Promise.reject({name:$,errors:B,warnings:K}):{name:$,errors:B,warnings:K}}))},I=0;I<x.length;I++)var F=k(I);var M=Pk(_);u=M;var T=M.then(function(){return u===M?Promise.resolve(P):Promise.reject([])}).catch(function(N){var j=N.filter(function($){return $&&$.errors.length});return Promise.reject({values:P,errorFields:j,outOfDate:u!==M})});return T.catch(function(N){return N}),T},c=function(x,S,w){var _=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},P=bk([x],S,w,O({validateMessages:Qd},_),!!_.validateFirst);return a[x]?(a[x].validateStatus="validating",P.catch(function(k){return k}).then(function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],I;if(a[x].validateStatus==="validating"){var F=k.filter(function(M){return M&&M.errors.length});a[x].validateStatus=F.length?"error":"success",a[x].help=F.length?F.map(function(M){return M.errors}):null,(I=t==null?void 0:t.onValidate)===null||I===void 0||I.call(t,x,!F.length,F.length?an(a[x].help[0]):null)}}),P):P.catch(function(k){return k})},d=function(x,S){var w=[],_=!0;x?Array.isArray(x)?w=x:w=[x]:(_=!1,w=i.value);var P=s(w,S||{},_);return P.catch(function(k){return k}),P},f=function(x){var S=[];x?Array.isArray(x)?S=x:S=[x]:S=i.value,S.forEach(function(w){a[w]&&O(a[w],{validateStatus:"",help:null})})},p=function(x){for(var S={autoLink:!1},w=[],_=Array.isArray(x)?x:[x],P=0;P<_.length;P++){var k=_[P];(k==null?void 0:k.validateStatus)==="error"&&(S.validateStatus="error",k.help&&w.push(k.help)),S.required=S.required||(k==null?void 0:k.required)}return S.help=w,S},g=r,y=!0,h=function(x){var S=[];i.value.forEach(function(w){var _=cv(x,w,!1),P=cv(g,w,!1),k=y&&(t==null?void 0:t.immediate)&&_.isValid;(k||!uu(_.v,P.v))&&S.push(w)}),d(S,{trigger:"change"}),y=!1,g=Vs(an(x))},m=t==null?void 0:t.debounce,b=!0;return Pe(e,function(){i.value=e?Object.keys(Xe(e)):[],!b&&t&&t.validateOnRuleChange&&d(),b=!1},{deep:!0,immediate:!0}),Pe(i,function(){var C={};i.value.forEach(function(S){C[S]=O({},a[S],{autoLink:!1,required:e2(Xe(e)[S])}),delete a[S]});for(var x in a)Object.prototype.hasOwnProperty.call(a,x)&&delete a[x];O(a,C)},{immediate:!0}),Pe(n,m&&m.wait?Wd(h,m.wait,Pq(m,["wait"])):h,{immediate:t&&!!t.immediate,deep:!0}),{modelRef:n,rulesRef:e,initialModel:r,validateInfos:a,resetFields:o,validate:d,validateField:c,mergeValidateInfo:p,clearValidate:f}}var Tq=function(){return{layout:U.oneOf(jn("horizontal","inline","vertical")),labelCol:{type:Object},wrapperCol:{type:Object},colon:{type:Boolean,default:void 0},labelAlign:U.oneOf(jn("left","right")),labelWrap:{type:Boolean,default:void 0},prefixCls:String,requiredMark:{type:[String,Boolean],default:void 0},hideRequiredMark:{type:Boolean,default:void 0},model:U.object,rules:{type:Object},validateMessages:{type:Object,default:void 0},validateOnRuleChange:{type:Boolean,default:void 0},scrollToFirstError:{type:[Boolean,Object]},onSubmit:Function,name:String,validateTrigger:{type:[String,Array]},size:{type:String},onValuesChange:{type:Function},onFieldsChange:{type:Function},onFinish:{type:Function},onFinishFailed:{type:Function},onValidate:{type:Function}}};function Nq(n,e){return uu(Ga(n),Ga(e))}var Iq=ae({name:"AForm",inheritAttrs:!1,props:vn(Tq(),{layout:"horizontal",hideRequiredMark:!1,colon:!0}),Item:kk,useForm:Oq,setup:function(e,t){var r=t.emit,a=t.slots,i=t.expose,o=t.attrs,l=t6(e),u=Le("form",e),s=u.prefixCls,c=u.direction,d=u.form,f=R(function(){return e.requiredMark===""||e.requiredMark}),p=R(function(){var A;return f.value!==void 0?f.value:d&&((A=d.value)===null||A===void 0?void 0:A.requiredMark)!==void 0?d.value.requiredMark:!e.hideRequiredMark}),g=R(function(){var A,E;return(A=e.colon)!==null&&A!==void 0?A:(E=d.value)===null||E===void 0?void 0:E.colon}),y=aA(),h=y.validateMessages,m=R(function(){return O(O(O({},Qd),h.value),e.validateMessages)}),b=R(function(){var A;return de(s.value,(A={},D(A,"".concat(s.value,"-").concat(e.layout),!0),D(A,"".concat(s.value,"-hide-required-mark"),p.value===!1),D(A,"".concat(s.value,"-rtl"),c.value==="rtl"),D(A,"".concat(s.value,"-").concat(l.value),l.value),A))}),C=q(),x={},S=function(E,L){x[E]=L},w=function(E){delete x[E]},_=function(E){var L=!!E,B=L?Ga(E).map(nh):[];return L?Object.values(x).filter(function(K){return B.findIndex(function(H){return Nq(H,K.fieldName.value)})>-1}):Object.values(x)},P=function(E){if(!e.model){rt(!1,"Form","model is required for resetFields to work.");return}_(E).forEach(function(L){L.resetField()})},k=function(E){_(E).forEach(function(L){L.clearValidate()})},I=function(E){var L=e.scrollToFirstError;if(r("finishFailed",E),L&&E.errorFields.length){var B={};Be(L)==="object"&&(B=L),M(E.errorFields[0].name,B)}},F=function(){return j.apply(void 0,arguments)},M=function(E){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},B=_(E?[E]:void 0);if(B.length){var K=B[0].fieldId.value,H=K?document.getElementById(K):null;H&&cq(H,O({scrollMode:"if-needed",block:"nearest"},L))}},T=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(E===!0){var L=[];return Object.values(x).forEach(function(B){var K=B.namePath;L.push(K.value)}),Xx(e.model,L)}else return Xx(e.model,E)},N=function(E,L){if(rt(!(E instanceof Function),"Form","validateFields/validateField/validate not support callback, please use promise instead"),!e.model)return rt(!1,"Form","model is required for validateFields to work."),Promise.reject("Form `model` is required for validateFields to work.");var B=!!E,K=B?Ga(E).map(nh):[],H=[];Object.values(x).forEach(function(G){var Q;if(B||K.push(G.namePath.value),!!(!((Q=G.rules)===null||Q===void 0)&&Q.value.length)){var z=G.namePath.value;if(!B||TU(K,z)){var J=G.validateRules(O({validateMessages:m.value},L));H.push(J.then(function(){return{name:z,errors:[],warnings:[]}}).catch(function(ne){var oe=[],ce=[];return ne.forEach(function(se){var V=se.rule.warningOnly,X=se.errors;V?ce.push.apply(ce,Ee(X)):oe.push.apply(oe,Ee(X))}),oe.length?Promise.reject({name:z,errors:oe,warnings:ce}):{name:z,errors:oe,warnings:ce}}))}}});var Z=Pk(H);C.value=Z;var Y=Z.then(function(){return C.value===Z?Promise.resolve(T(K)):Promise.reject([])}).catch(function(G){var Q=G.filter(function(z){return z&&z.errors.length});return Promise.reject({values:T(K),errorFields:Q,outOfDate:C.value!==Z})});return Y.catch(function(G){return G}),Y},j=function(){return N.apply(void 0,arguments)},$=function(E){if(E.preventDefault(),E.stopPropagation(),r("submit",E),e.model){var L=N();L.then(function(B){r("finish",B)}).catch(function(B){I(B)})}};return i({resetFields:P,clearValidate:k,validateFields:N,getFieldsValue:T,validate:F,scrollToField:M}),Sk({model:R(function(){return e.model}),name:R(function(){return e.name}),labelAlign:R(function(){return e.labelAlign}),labelCol:R(function(){return e.labelCol}),labelWrap:R(function(){return e.labelWrap}),wrapperCol:R(function(){return e.wrapperCol}),vertical:R(function(){return e.layout==="vertical"}),colon:g,requiredMark:p,validateTrigger:R(function(){return e.validateTrigger}),rules:R(function(){return e.rules}),addField:S,removeField:w,onValidate:function(E,L,B){r("validate",E,L,B)},validateMessages:m}),Pe(function(){return e.rules},function(){e.validateOnRuleChange&&N()}),function(){var A;return v("form",W(W({},o),{},{onSubmit:$,class:[b.value,o.class]}),[(A=a.default)===null||A===void 0?void 0:A.call(a)])}}});const Ba=Iq;Ba.useInjectFormItemContext=lt;Ba.ItemRest=Ic;Ba.install=function(n){return n.component(Ba.name,Ba),n.component(Ba.Item.name,Ba.Item),n.component(Ic.name,Ic),n};var Eq=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function Mq(n,e,t){var r=n.toLowerCase().split(e).reduce(function(o,l,u){return u===0?[l]:[].concat(Ee(o),[e,l])},[]),a=[],i=0;return r.forEach(function(o,l){var u=i+o.length,s=n.slice(i,u);i=u,l%2===1&&(s=v("span",{class:"".concat(t,"-menu-item-keyword"),key:"seperator"},[s])),a.push(s)}),a}var Aq=function(e){var t=e.inputValue,r=e.path,a=e.prefixCls,i=e.fieldNames,o=[],l=t.toLowerCase();return r.forEach(function(u,s){s!==0&&o.push(" / ");var c=u[i.label],d=Be(c);(d==="string"||d==="number")&&(c=Mq(String(c),l,a)),o.push(c)}),o};function Fq(){return O(O({},un(uk(),["customSlots","checkable","options"])),{multiple:{type:Boolean,default:void 0},size:String,bordered:{type:Boolean,default:void 0},placement:{type:String},suffixIcon:U.any,status:String,options:Array,"onUpdate:value":Function})}var jq=ae({name:"ACascader",inheritAttrs:!1,props:vn(Fq(),{bordered:!0,choiceTransitionName:"",allowClear:!0}),setup:function(e,t){var r=t.attrs,a=t.expose,i=t.slots,o=t.emit,l=lt(),u=pt.useInject(),s=R(function(){return jr(u.status,e.status)}),c=Le("cascader",e),d=c.prefixCls,f=c.rootPrefixCls,p=c.getPrefixCls,g=c.direction,y=c.getPopupContainer,h=c.renderEmpty,m=c.size,b=R(function(){return p("select",e.prefixCls)}),C=R(function(){return g.value==="rtl"}),x=R(function(){if(!e.showSearch)return e.showSearch;var F={render:Aq};return Be(e.showSearch)==="object"&&(F=O(O({},F),e.showSearch)),F}),S=R(function(){return de(e.dropdownClassName||e.popupClassName,"".concat(d.value,"-dropdown"),D({},"".concat(d.value,"-dropdown-rtl"),C.value))}),w=q();a({focus:function(){var M;(M=w.value)===null||M===void 0||M.focus()},blur:function(){var M;(M=w.value)===null||M===void 0||M.blur()}});var _=function(){for(var M=arguments.length,T=new Array(M),N=0;N<M;N++)T[N]=arguments[N];o("update:value",T[0]),o.apply(void 0,["change"].concat(T)),l.onFieldChange()},P=function(){for(var M=arguments.length,T=new Array(M),N=0;N<M;N++)T[N]=arguments[N];o.apply(void 0,["blur"].concat(T)),l.onFieldBlur()},k=R(function(){return e.showArrow!==void 0?e.showArrow:e.loading||!e.multiple}),I=R(function(){return e.placement!==void 0?e.placement:g.value==="rtl"?"bottomRight":"bottomLeft"});return function(){var F,M,T,N=e.notFoundContent,j=N===void 0?(M=i.notFoundContent)===null||M===void 0?void 0:M.call(i):N,$=e.expandIcon,A=$===void 0?(T=i.expandIcon)===null||T===void 0?void 0:T.call(i):$,E=e.multiple,L=e.bordered,B=e.allowClear,K=e.choiceTransitionName,H=e.transitionName,Z=e.id,Y=Z===void 0?l.id.value:Z,G=Eq(e,["notFoundContent","expandIcon","multiple","bordered","allowClear","choiceTransitionName","transitionName","id"]),Q=j||h.value("Cascader"),z=A;A||(z=C.value?v(Di,null,null):v(wa,null,null));var J=v("span",{class:"".concat(b.value,"-menu-item-loading-icon")},[v(Tr,{spin:!0},null)]),ne=Bm(O(O({},e),{hasFeedback:u.hasFeedback,feedbackIcon:u.feedbackIcon,multiple:E,prefixCls:b.value,showArrow:k.value}),i),oe=ne.suffixIcon,ce=ne.removeIcon,se=ne.clearIcon;return v(bH,W(W(W({},G),r),{},{id:Y,prefixCls:b.value,class:[d.value,(F={},D(F,"".concat(b.value,"-lg"),m.value==="large"),D(F,"".concat(b.value,"-sm"),m.value==="small"),D(F,"".concat(b.value,"-rtl"),C.value),D(F,"".concat(b.value,"-borderless"),!L),D(F,"".concat(b.value,"-in-form-item"),u.isFormItemInput),F),Tt(b.value,s.value,u.hasFeedback),r.class],direction:g.value,placement:I.value,notFoundContent:Q,allowClear:B,showSearch:x.value,expandIcon:z,inputIcon:oe,removeIcon:ce,clearIcon:se,loadingIcon:J,checkable:!!E,dropdownClassName:S.value,dropdownPrefixCls:d.value,choiceTransitionName:Er(f.value,"",K),transitionName:Er(f.value,um(I.value),H),getPopupContainer:y.value,customSlots:O(O({},i),{checkable:function(){return v("span",{class:"".concat(d.value,"-checkbox-inner")},null)}}),displayRender:e.displayRender||i.displayRender,maxTagPlaceholder:e.maxTagPlaceholder||i.maxTagPlaceholder,showArrow:u.hasFeedback||e.showArrow,onChange:_,onBlur:P,ref:w}),i)}}});const Dq=Gn(O(jq,{SHOW_CHILD:J_,SHOW_PARENT:Q_}));var Lq=function(){return{name:String,prefixCls:String,options:{type:Array,default:function(){return[]}},disabled:Boolean,id:String}},Rq=function(){return O(O({},Lq()),{defaultValue:{type:Array},value:{type:Array},onChange:{type:Function},"onUpdate:value":{type:Function}})},$q=function(){return{prefixCls:String,defaultChecked:{type:Boolean,default:void 0},checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:U.any,name:String,id:String,indeterminate:{type:Boolean,default:void 0},type:{type:String,default:"checkbox"},autofocus:{type:Boolean,default:void 0},onChange:Function,"onUpdate:checked":Function,onClick:Function,skipGroup:{type:Boolean,default:!1}}},Bq=function(){return O(O({},$q()),{indeterminate:{type:Boolean,default:!1}})},Tk=Symbol("CheckboxGroupContext"),t2=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};const hr=ae({name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:Bq(),setup:function(e,t){var r=t.emit,a=t.attrs,i=t.slots,o=t.expose,l=lt(),u=pt.useInject(),s=Le("checkbox",e),c=s.prefixCls,d=s.direction,f=on(Tk,void 0),p=Symbol("checkboxUniId");Ze(function(){!e.skipGroup&&f&&f.registerValue(p,e.value)}),fn(function(){f&&f.cancelValue(p)}),Ye(function(){rt(e.checked!==void 0||f||e.value===void 0,"Checkbox","`value` is not validate prop, do you mean `checked`?")});var g=function(C){var x=C.target.checked;r("update:checked",x),r("change",C)},y=q(),h=function(){var C;(C=y.value)===null||C===void 0||C.focus()},m=function(){var C;(C=y.value)===null||C===void 0||C.blur()};return o({focus:h,blur:m}),function(){var b,C,x=Fn((C=i.default)===null||C===void 0?void 0:C.call(i)),S=e.indeterminate,w=e.skipGroup,_=e.id,P=_===void 0?l.id.value:_,k=t2(e,["indeterminate","skipGroup","id"]),I=a.onMouseenter,F=a.onMouseleave;a.onInput;var M=a.class,T=a.style,N=t2(a,["onMouseenter","onMouseleave","onInput","class","style"]),j=O(O(O({},k),{id:P,prefixCls:c.value}),N);f&&!w?(j.onChange=function(){for(var L=arguments.length,B=new Array(L),K=0;K<L;K++)B[K]=arguments[K];r.apply(void 0,["change"].concat(B)),f.toggleOption({label:x,value:e.value})},j.name=f.name.value,j.checked=f.mergedValue.value.indexOf(e.value)!==-1,j.disabled=e.disabled||f.disabled.value,j.indeterminate=S):j.onChange=g;var $=de((b={},D(b,"".concat(c.value,"-wrapper"),!0),D(b,"".concat(c.value,"-rtl"),d.value==="rtl"),D(b,"".concat(c.value,"-wrapper-checked"),j.checked),D(b,"".concat(c.value,"-wrapper-disabled"),j.disabled),D(b,"".concat(c.value,"-wrapper-in-form-item"),u.isFormItemInput),b),M),A=de(D({},"".concat(c.value,"-indeterminate"),S)),E=S?"mixed":void 0;return v("label",{class:$,style:T,onMouseenter:I,onMouseleave:F},[v(m_,W(W({"aria-checked":E},j),{},{class:A,ref:y}),null),x.length?v("span",null,[x]):null])}}}),qc=ae({name:"ACheckboxGroup",props:Rq(),setup:function(e,t){var r=t.slots,a=t.emit,i=t.expose,o=lt(),l=Le("checkbox",e),u=l.prefixCls,s=l.direction,c=q((e.value===void 0?e.defaultValue:e.value)||[]);Pe(function(){return e.value},function(){c.value=e.value||[]});var d=R(function(){return e.options.map(function(b){return typeof b=="string"||typeof b=="number"?{label:b,value:b}:b})}),f=q(Symbol()),p=q(new Map),g=function(C){p.value.delete(C),f.value=Symbol()},y=function(C,x){p.value.set(C,x),f.value=Symbol()},h=q(new Map);Pe(f,function(){var b=new Map,C=p6(p.value.values()),x;try{for(C.s();!(x=C.n()).done;){var S=x.value;b.set(S,!0)}}catch(w){C.e(w)}finally{C.f()}h.value=b});var m=function(C){var x=c.value.indexOf(C.value),S=Ee(c.value);x===-1?S.push(C.value):S.splice(x,1),e.value===void 0&&(c.value=S);var w=S.filter(function(_){return h.value.has(_)}).sort(function(_,P){var k=d.value.findIndex(function(F){return F.value===_}),I=d.value.findIndex(function(F){return F.value===P});return k-I});a("update:value",w),a("change",w),o.onFieldChange()};return ln(Tk,{cancelValue:g,registerValue:y,toggleOption:m,mergedValue:c,name:R(function(){return e.name}),disabled:R(function(){return e.disabled})}),i({mergedValue:c}),function(){var b,C=e.id,x=C===void 0?o.id.value:C,S=null,w="".concat(u.value,"-group");return d.value&&d.value.length>0&&(S=d.value.map(function(_){var P;return v(hr,{prefixCls:u.value,key:_.value.toString(),disabled:"disabled"in _?_.disabled:e.disabled,indeterminate:_.indeterminate,value:_.value,checked:c.value.indexOf(_.value)!==-1,onChange:_.onChange,class:"".concat(w,"-item")},{default:function(){return[_.label===void 0?(P=r.label)===null||P===void 0?void 0:P.call(r,_):_.label]}})})),v("div",{class:[w,D({},"".concat(w,"-rtl"),s.value==="rtl")],id:x},[S||((b=r.default)===null||b===void 0?void 0:b.call(r))])}}});hr.Group=qc;hr.install=function(n){return n.component(hr.name,hr),n.component(qc.name,qc),n};var Vq=function(){return{actions:Array,author:U.any,avatar:U.any,content:U.any,prefixCls:String,datetime:U.any}},Kq=ae({name:"AComment",props:Vq(),slots:["actions","author","avatar","content","datetime"],setup:function(e,t){var r=t.slots,a=Le("comment",e),i=a.prefixCls,o=a.direction,l=function(c,d){return v("div",{class:"".concat(c,"-nested")},[d])},u=function(c){if(!c||!c.length)return null;var d=c.map(function(f,p){return v("li",{key:"action-".concat(p)},[f])});return d};return function(){var s,c,d,f,p,g,y,h,m,b,C,x=i.value,S=(s=e.actions)!==null&&s!==void 0?s:(c=r.actions)===null||c===void 0?void 0:c.call(r),w=(d=e.author)!==null&&d!==void 0?d:(f=r.author)===null||f===void 0?void 0:f.call(r),_=(p=e.avatar)!==null&&p!==void 0?p:(g=r.avatar)===null||g===void 0?void 0:g.call(r),P=(y=e.content)!==null&&y!==void 0?y:(h=r.content)===null||h===void 0?void 0:h.call(r),k=(m=e.datetime)!==null&&m!==void 0?m:(b=r.datetime)===null||b===void 0?void 0:b.call(r),I=v("div",{class:"".concat(x,"-avatar")},[typeof _=="string"?v("img",{src:_,alt:"comment-avatar"},null):_]),F=S?v("ul",{class:"".concat(x,"-actions")},[u(Array.isArray(S)?S:[S])]):null,M=v("div",{class:"".concat(x,"-content-author")},[w&&v("span",{class:"".concat(x,"-content-author-name")},[w]),k&&v("span",{class:"".concat(x,"-content-author-time")},[k])]),T=v("div",{class:"".concat(x,"-content")},[M,v("div",{class:"".concat(x,"-content-detail")},[P]),F]),N=v("div",{class:"".concat(x,"-inner")},[I,T]),j=Fn((C=r.default)===null||C===void 0?void 0:C.call(r));return v("div",{class:[x,D({},"".concat(x,"-rtl"),o.value==="rtl")]},[N,j&&j.length?l(x,j):null])}}});const zq=Gn(Kq);var Hq=function(e,t){var r=t.attrs,a=t.slots;return v(ct,W(W({size:"small",type:"primary"},e),r),a)};const Wq=Hq;var Uq=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},qq=ae({name:"ACheckableTag",props:Uq(),setup:function(e,t){var r=t.slots,a=t.emit,i=Le("tag",e),o=i.prefixCls,l=function(c){var d=e.checked;a("update:checked",!d),a("change",!d),a("click",c)},u=R(function(){var s;return de(o.value,(s={},D(s,"".concat(o.value,"-checkable"),!0),D(s,"".concat(o.value,"-checkable-checked"),e.checked),s))});return function(){var s;return v("span",{class:u.value,onClick:l},[(s=r.default)===null||s===void 0?void 0:s.call(r)])}}});const Yc=qq;var Yq=new RegExp("^(".concat(zm.join("|"),")(-inverse)?$")),Gq=new RegExp("^(".concat(LR.join("|"),")$")),Xq=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:U.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:U.any}},Bl=ae({name:"ATag",props:Xq(),slots:["closeIcon","icon"],setup:function(e,t){var r=t.slots,a=t.emit,i=t.attrs,o=Le("tag",e),l=o.prefixCls,u=o.direction,s=q(!0);Ze(function(){e.visible!==void 0&&(s.value=e.visible)});var c=function(g){g.stopPropagation(),a("update:visible",!1),a("close",g),!g.defaultPrevented&&e.visible===void 0&&(s.value=!1)},d=R(function(){var p=e.color;return p?Yq.test(p)||Gq.test(p):!1}),f=R(function(){var p;return de(l.value,(p={},D(p,"".concat(l.value,"-").concat(e.color),d.value),D(p,"".concat(l.value,"-has-color"),e.color&&!d.value),D(p,"".concat(l.value,"-hidden"),!s.value),D(p,"".concat(l.value,"-rtl"),u.value==="rtl"),p))});return function(){var p,g,y,h=e.icon,m=h===void 0?(p=r.icon)===null||p===void 0?void 0:p.call(r):h,b=e.color,C=e.closeIcon,x=C===void 0?(g=r.closeIcon)===null||g===void 0?void 0:g.call(r):C,S=e.closable,w=S===void 0?!1:S,_=function(){return w?x?v("div",{class:"".concat(l.value,"-close-icon"),onClick:c},[x]):v(ea,{class:"".concat(l.value,"-close-icon"),onClick:c},null):null},P={backgroundColor:b&&!d.value?b:void 0},k=m||null,I=(y=r.default)===null||y===void 0?void 0:y.call(r),F=k?v(qe,null,[k,v("span",null,[I])]):I,M="onClick"in i,T=v("span",{class:f.value,style:P},[F,_()]);return M?v(Wm,null,{default:function(){return[T]}}):T}}});Bl.CheckableTag=Yc;Bl.install=function(n){return n.component(Bl.name,Bl),n.component(Yc.name,Yc),n};const Nk=Bl;function Zq(n,e){var t=e.slots,r=e.attrs;return v(Nk,W(W({color:"blue"},n),r),t)}function Qq(n,e,t){return t!==void 0?t:n==="year"&&e.lang.yearPlaceholder?e.lang.yearPlaceholder:n==="quarter"&&e.lang.quarterPlaceholder?e.lang.quarterPlaceholder:n==="month"&&e.lang.monthPlaceholder?e.lang.monthPlaceholder:n==="week"&&e.lang.weekPlaceholder?e.lang.weekPlaceholder:n==="time"&&e.timePickerLocale.placeholder?e.timePickerLocale.placeholder:e.lang.placeholder}function Jq(n,e,t){return t!==void 0?t:n==="year"&&e.lang.yearPlaceholder?e.lang.rangeYearPlaceholder:n==="month"&&e.lang.monthPlaceholder?e.lang.rangeMonthPlaceholder:n==="week"&&e.lang.weekPlaceholder?e.lang.rangeWeekPlaceholder:n==="time"&&e.timePickerLocale.placeholder?e.timePickerLocale.rangePlaceholder:e.lang.rangePlaceholder}function Ik(n,e){var t={adjustX:1,adjustY:1};switch(e){case"bottomLeft":return{points:["tl","bl"],offset:[0,4],overflow:t};case"bottomRight":return{points:["tr","br"],offset:[0,4],overflow:t};case"topLeft":return{points:["bl","tl"],offset:[0,-4],overflow:t};case"topRight":return{points:["br","tr"],offset:[0,-4],overflow:t};default:return n==="rtl"?{points:["tr","br"],offset:[0,4],overflow:t}:{points:["tl","bl"],offset:[0,4],overflow:t}}}jn("bottomLeft","bottomRight","topLeft","topRight");function Gc(){return{id:String,dropdownClassName:String,popupStyle:{type:Object},transitionName:String,placeholder:String,allowClear:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},tabindex:Number,open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:void 0},inputReadOnly:{type:Boolean,default:void 0},getPopupContainer:{type:Function},panelRender:{type:Function},onChange:{type:Function},"onUpdate:value":{type:Function},onOk:{type:Function},onOpenChange:{type:Function},"onUpdate:open":{type:Function},onFocus:{type:Function},onBlur:{type:Function},onMousedown:{type:Function},onMouseup:{type:Function},onMouseenter:{type:Function},onMouseleave:{type:Function},onClick:{type:Function},onContextmenu:{type:Function},onKeydown:{type:Function},role:String,name:String,autocomplete:String,direction:{type:String},showToday:{type:Boolean,default:void 0},showTime:{type:[Boolean,Object],default:void 0},locale:{type:Object},size:{type:String},bordered:{type:Boolean,default:void 0},dateRender:{type:Function},disabledDate:{type:Function},mode:{type:String},picker:{type:String},valueFormat:String,placement:String,status:String,disabledHours:Function,disabledMinutes:Function,disabledSeconds:Function}}function Ek(){return{defaultPickerValue:{type:[String,Object]},defaultValue:{type:[String,Object]},value:{type:[String,Object]},disabledTime:{type:Function},format:{type:[String,Function,Array]},renderExtraFooter:{type:Function},showNow:{type:Boolean,default:void 0},monthCellRender:{type:Function},monthCellContentRender:{type:Function}}}function Mk(){return{allowEmpty:{type:Array},dateRender:{type:Function},defaultPickerValue:{type:Array},defaultValue:{type:Array},value:{type:Array},disabledTime:{type:Function},disabled:{type:[Boolean,Array]},format:String,renderExtraFooter:{type:Function},separator:{type:String},ranges:{type:Object},placeholder:Array,mode:{type:Array},onChange:{type:Function},"onUpdate:value":{type:Function},onCalendarChange:{type:Function},onPanelChange:{type:Function},onOk:{type:Function}}}var eY=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function nY(n,e){function t(s,c){var d=O(O(O({},Gc()),Ek()),e);return ae({name:c,inheritAttrs:!1,props:d,slots:["suffixIcon","prevIcon","nextIcon","superPrevIcon","superNextIcon","dateRender","renderExtraFooter","monthCellRender"],setup:function(p,g){var y=g.slots,h=g.expose,m=g.attrs,b=g.emit,C=p,x=lt(),S=pt.useInject();On(!(C.monthCellContentRender||y.monthCellContentRender),"DatePicker",'`monthCellContentRender` is deprecated. Please use `monthCellRender"` instead.'),On(!m.getCalendarContainer,"DatePicker",'`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.');var w=Le("picker",C),_=w.prefixCls,P=w.direction,k=w.getPopupContainer,I=w.size,F=w.rootPrefixCls,M=q();h({focus:function(){var z;(z=M.value)===null||z===void 0||z.focus()},blur:function(){var z;(z=M.value)===null||z===void 0||z.blur()}});var T=function(z){return C.valueFormat?n.toString(z,C.valueFormat):z},N=function(z,J){var ne=T(z);b("update:value",ne),b("change",ne,J),x.onFieldChange()},j=function(z){b("update:open",z),b("openChange",z)},$=function(z){b("focus",z)},A=function(z){b("blur",z),x.onFieldBlur()},E=function(z,J){var ne=T(z);b("panelChange",ne,J)},L=function(z){var J=T(z);b("ok",J)},B=na("DatePicker",nu),K=Te(B,1),H=K[0],Z=R(function(){return C.value?C.valueFormat?n.toDate(C.value,C.valueFormat):C.value:C.value===""?void 0:C.value}),Y=R(function(){return C.defaultValue?C.valueFormat?n.toDate(C.defaultValue,C.valueFormat):C.defaultValue:C.defaultValue===""?void 0:C.defaultValue}),G=R(function(){return C.defaultPickerValue?C.valueFormat?n.toDate(C.defaultPickerValue,C.valueFormat):C.defaultPickerValue:C.defaultPickerValue===""?void 0:C.defaultPickerValue});return function(){var Q,z,J,ne,oe,ce,se,V=O(O({},H.value),C.locale),X=O(O({},C),m),ee=X.bordered,ue=ee===void 0?!0:ee,ie=X.placeholder,ge=X.suffixIcon,fe=ge===void 0?(z=y.suffixIcon)===null||z===void 0?void 0:z.call(y):ge,re=X.showToday,le=re===void 0?!0:re,te=X.transitionName,he=X.allowClear,ye=he===void 0?!0:he,_e=X.dateRender,Me=_e===void 0?y.dateRender:_e,De=X.renderExtraFooter,we=De===void 0?y.renderExtraFooter:De,be=X.monthCellRender,Se=be===void 0?y.monthCellRender||C.monthCellContentRender||y.monthCellContentRender:be,Fe=X.clearIcon,je=Fe===void 0?(J=y.clearIcon)===null||J===void 0?void 0:J.call(y):Fe,ke=X.id,Ce=ke===void 0?x.id.value:ke,ve=eY(X,["bordered","placeholder","suffixIcon","showToday","transitionName","allowClear","dateRender","renderExtraFooter","monthCellRender","clearIcon","id"]),me=X.showTime===""?!0:X.showTime,Oe=X.format,Ie={};s&&(Ie.picker=s);var xe=s||X.picker||"date";Ie=O(O(O({},Ie),me?Xc(O({format:Oe,picker:xe},Be(me)==="object"?me:{})):{}),xe==="time"?Xc(O(O({format:Oe},ve),{picker:xe})):{});var pe=_.value,Ae=v(qe,null,[fe||v(s==="time"?GS:YS,null,null),S.hasFeedback&&S.feedbackIcon]);return v(IV,W(W(W({monthCellRender:Se,dateRender:Me,renderExtraFooter:we,ref:M,placeholder:Qq(xe,V,ie),suffixIcon:Ae,dropdownAlign:Ik(P.value,C.placement),clearIcon:je||v(Jr,null,null),allowClear:ye,transitionName:te||"".concat(F.value,"-slide-up")},ve),Ie),{},{id:Ce,picker:xe,value:Z.value,defaultValue:Y.value,defaultPickerValue:G.value,showToday:le,locale:V.lang,class:de((Q={},D(Q,"".concat(pe,"-").concat(I.value),I.value),D(Q,"".concat(pe,"-borderless"),!ue),Q),Tt(pe,jr(S.status,C.status),S.hasFeedback),m.class),prefixCls:pe,getPopupContainer:m.getCalendarContainer||k.value,generateConfig:n,prevIcon:((ne=y.prevIcon)===null||ne===void 0?void 0:ne.call(y))||v("span",{class:"".concat(pe,"-prev-icon")},null),nextIcon:((oe=y.nextIcon)===null||oe===void 0?void 0:oe.call(y))||v("span",{class:"".concat(pe,"-next-icon")},null),superPrevIcon:((ce=y.superPrevIcon)===null||ce===void 0?void 0:ce.call(y))||v("span",{class:"".concat(pe,"-super-prev-icon")},null),superNextIcon:((se=y.superNextIcon)===null||se===void 0?void 0:se.call(y))||v("span",{class:"".concat(pe,"-super-next-icon")},null),components:Ak,direction:P.value,onChange:N,onOpenChange:j,onFocus:$,onBlur:A,onPanelChange:E,onOk:L}),null)}}})}var r=t(void 0,"ADatePicker"),a=t("week","AWeekPicker"),i=t("month","AMonthPicker"),o=t("year","AYearPicker"),l=t("time","TimePicker"),u=t("quarter","AQuarterPicker");return{DatePicker:r,WeekPicker:a,MonthPicker:i,YearPicker:o,TimePicker:l,QuarterPicker:u}}var tY=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function rY(n,e){var t=ae({name:"ARangePicker",inheritAttrs:!1,props:O(O(O({},Gc()),Mk()),e),slots:["suffixIcon","prevIcon","nextIcon","superPrevIcon","superNextIcon","dateRender","renderExtraFooter"],setup:function(a,i){var o=i.expose,l=i.slots,u=i.attrs,s=i.emit,c=a,d=lt(),f=pt.useInject();On(!u.getCalendarContainer,"DatePicker",'`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.');var p=Le("picker",c),g=p.prefixCls,y=p.direction,h=p.getPopupContainer,m=p.size,b=p.rootPrefixCls,C=q();o({focus:function(){var L;(L=C.value)===null||L===void 0||L.focus()},blur:function(){var L;(L=C.value)===null||L===void 0||L.blur()}});var x=function(L){return c.valueFormat?n.toString(L,c.valueFormat):L},S=function(L,B){var K=x(L);s("update:value",K),s("change",K,B),d.onFieldChange()},w=function(L){s("update:open",L),s("openChange",L)},_=function(L){s("focus",L)},P=function(L){s("blur",L),d.onFieldBlur()},k=function(L,B){var K=x(L);s("panelChange",K,B)},I=function(L){var B=x(L);s("ok",B)},F=function(L,B,K){var H=x(L);s("calendarChange",H,B,K)},M=na("DatePicker",nu),T=Te(M,1),N=T[0],j=R(function(){return c.value&&c.valueFormat?n.toDate(c.value,c.valueFormat):c.value}),$=R(function(){return c.defaultValue&&c.valueFormat?n.toDate(c.defaultValue,c.valueFormat):c.defaultValue}),A=R(function(){return c.defaultPickerValue&&c.valueFormat?n.toDate(c.defaultPickerValue,c.valueFormat):c.defaultPickerValue});return function(){var E,L,B,K,H,Z,Y,G,Q=O(O({},N.value),c.locale),z=O(O({},c),u);z.prefixCls;var J=z.bordered,ne=J===void 0?!0:J,oe=z.placeholder,ce=z.suffixIcon,se=ce===void 0?(L=l.suffixIcon)===null||L===void 0?void 0:L.call(l):ce,V=z.picker,X=V===void 0?"date":V,ee=z.transitionName,ue=z.allowClear,ie=ue===void 0?!0:ue,ge=z.dateRender,fe=ge===void 0?l.dateRender:ge,re=z.renderExtraFooter,le=re===void 0?l.renderExtraFooter:re,te=z.separator,he=te===void 0?(B=l.separator)===null||B===void 0?void 0:B.call(l):te,ye=z.clearIcon,_e=ye===void 0?(K=l.clearIcon)===null||K===void 0?void 0:K.call(l):ye,Me=z.id,De=Me===void 0?d.id.value:Me,we=tY(z,["prefixCls","bordered","placeholder","suffixIcon","picker","transitionName","allowClear","dateRender","renderExtraFooter","separator","clearIcon","id"]);delete we["onUpdate:value"],delete we["onUpdate:open"];var be=z.format,Se=z.showTime,Fe={};Fe=O(O(O({},Fe),Se?Xc(O({format:be,picker:X},Se)):{}),X==="time"?Xc(O(O({format:be},un(we,["disabledTime"])),{picker:X})):{});var je=g.value,ke=v(qe,null,[se||v(X==="time"?GS:YS,null,null),f.hasFeedback&&f.feedbackIcon]);return v(LV,W(W(W({dateRender:fe,renderExtraFooter:le,separator:he||v("span",{"aria-label":"to",class:"".concat(je,"-separator")},[v(k9,null,null)]),ref:C,dropdownAlign:Ik(y.value,c.placement),placeholder:Jq(X,Q,oe),suffixIcon:ke,clearIcon:_e||v(Jr,null,null),allowClear:ie,transitionName:ee||"".concat(b.value,"-slide-up")},we),Fe),{},{id:De,value:j.value,defaultValue:$.value,defaultPickerValue:A.value,picker:X,class:de((E={},D(E,"".concat(je,"-").concat(m.value),m.value),D(E,"".concat(je,"-borderless"),!ne),E),Tt(je,jr(f.status,c.status),f.hasFeedback),u.class),locale:Q.lang,prefixCls:je,getPopupContainer:u.getCalendarContainer||h.value,generateConfig:n,prevIcon:((H=l.prevIcon)===null||H===void 0?void 0:H.call(l))||v("span",{class:"".concat(je,"-prev-icon")},null),nextIcon:((Z=l.nextIcon)===null||Z===void 0?void 0:Z.call(l))||v("span",{class:"".concat(je,"-next-icon")},null),superPrevIcon:((Y=l.superPrevIcon)===null||Y===void 0?void 0:Y.call(l))||v("span",{class:"".concat(je,"-super-prev-icon")},null),superNextIcon:((G=l.superNextIcon)===null||G===void 0?void 0:G.call(l))||v("span",{class:"".concat(je,"-super-next-icon")},null),components:Ak,direction:y.value,onChange:S,onOpenChange:w,onFocus:_,onBlur:P,onPanelChange:k,onOk:I,onCalendarChange:F}),null)}}});return t}var Ak={button:Wq,rangeItem:Zq};function aY(n){return n?Array.isArray(n)?n:[n]:[]}function Xc(n){var e=n.format,t=n.picker,r=n.showHour,a=n.showMinute,i=n.showSecond,o=n.use12Hours,l=aY(e)[0],u=O({},n);return l&&typeof l=="string"&&(!l.includes("s")&&i===void 0&&(u.showSecond=!1),!l.includes("m")&&a===void 0&&(u.showMinute=!1),!l.includes("H")&&!l.includes("h")&&r===void 0&&(u.showHour=!1),(l.includes("a")||l.includes("A"))&&o===void 0&&(u.use12Hours=!0)),t==="time"?u:(typeof l=="function"&&delete u.format,{showTime:u})}function Fk(n,e){var t=nY(n,e),r=t.DatePicker,a=t.WeekPicker,i=t.MonthPicker,o=t.YearPicker,l=t.TimePicker,u=t.QuarterPicker,s=rY(n,e);return{DatePicker:r,WeekPicker:a,MonthPicker:i,YearPicker:o,TimePicker:l,QuarterPicker:u,RangePicker:s}}var Xi=Fk(Ym),dv=Xi.DatePicker,zs=Xi.WeekPicker,Hs=Xi.MonthPicker,iY=Xi.YearPicker,oY=Xi.TimePicker,Ws=Xi.QuarterPicker,Us=Xi.RangePicker;const lY=O(dv,{WeekPicker:zs,MonthPicker:Hs,YearPicker:iY,RangePicker:Us,TimePicker:oY,QuarterPicker:Ws,install:function(e){return e.component(dv.name,dv),e.component(Us.name,Us),e.component(Hs.name,Hs),e.component(zs.name,zs),e.component(Ws.name,Ws),e}});function ms(n){return n!=null}var uY=function(e){var t=e.itemPrefixCls,r=e.component,a=e.span,i=e.labelStyle,o=e.contentStyle,l=e.bordered,u=e.label,s=e.content,c=e.colon,d=r;if(l){var f;return v(d,{class:[(f={},D(f,"".concat(t,"-item-label"),ms(u)),D(f,"".concat(t,"-item-content"),ms(s)),f)],colSpan:a},{default:function(){return[ms(u)&&v("span",{style:i},[u]),ms(s)&&v("span",{style:o},[s])]}})}return v(d,{class:["".concat(t,"-item")],colSpan:a},{default:function(){return[v("div",{class:"".concat(t,"-item-container")},[u&&v("span",{class:["".concat(t,"-item-label"),D({},"".concat(t,"-item-no-colon"),!c)],style:i},[u]),s&&v("span",{class:"".concat(t,"-item-content"),style:o},[s])])]}})};const fv=uY;var sY=function(e){var t=function(f,p,g){var y=p.colon,h=p.prefixCls,m=p.bordered,b=g.component,C=g.type,x=g.showLabel,S=g.showContent,w=g.labelStyle,_=g.contentStyle;return f.map(function(P,k){var I,F,M=P.props||{},T=M.prefixCls,N=T===void 0?h:T,j=M.span,$=j===void 0?1:j,A=M.labelStyle,E=M.contentStyle,L=M.label,B=L===void 0?(F=(I=P.children)===null||I===void 0?void 0:I.label)===null||F===void 0?void 0:F.call(I):L,K=_u(P),H=JE(P),Z=y4(P),Y=P.key;return typeof b=="string"?v(fv,{key:"".concat(C,"-").concat(String(Y)||k),class:H,style:Z,labelStyle:O(O({},w.value),A),contentStyle:O(O({},_.value),E),span:$,colon:y,component:b,itemPrefixCls:N,bordered:m,label:x?B:null,content:S?K:null},null):[v(fv,{key:"label-".concat(String(Y)||k),class:H,style:O(O(O({},w.value),Z),A),span:1,colon:y,component:b[0],itemPrefixCls:N,bordered:m,label:B},null),v(fv,{key:"content-".concat(String(Y)||k),class:H,style:O(O(O({},_.value),Z),E),span:$*2-1,component:b[1],itemPrefixCls:N,bordered:m,content:K},null)]})},r=e.prefixCls,a=e.vertical,i=e.row,o=e.index,l=e.bordered,u=on(Lk,{labelStyle:q({}),contentStyle:q({})}),s=u.labelStyle,c=u.contentStyle;return a?v(qe,null,[v("tr",{key:"label-".concat(o),class:"".concat(r,"-row")},[t(i,e,{component:"th",type:"label",showLabel:!0,labelStyle:s,contentStyle:c})]),v("tr",{key:"content-".concat(o),class:"".concat(r,"-row")},[t(i,e,{component:"td",type:"content",showContent:!0,labelStyle:s,contentStyle:c})])]):v("tr",{key:o,class:"".concat(r,"-row")},[t(i,e,{component:l?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:s,contentStyle:c})])};const cY=sY;U.any;var dY=function(){return{prefixCls:String,label:U.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},jk=ae({name:"ADescriptionsItem",props:dY(),slots:["label"],setup:function(e,t){var r=t.slots;return function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}}),Dk={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function fY(n,e){if(typeof n=="number")return n;if(Be(n)==="object")for(var t=0;t<$i.length;t++){var r=$i[t];if(e[r]&&n[r]!==void 0)return n[r]||Dk[r]}return 3}function r2(n,e,t){var r=n;return(e===void 0||e>t)&&(r=wn(n,{span:t}),rt(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),r}function vY(n,e){var t=Fn(n),r=[],a=[],i=e;return t.forEach(function(o,l){var u,s=(u=o.props)===null||u===void 0?void 0:u.span,c=s||1;if(l===t.length-1){a.push(r2(o,s,i)),r.push(a);return}c<i?(i-=c,a.push(o)):(a.push(r2(o,c,i)),r.push(a),i=e,a=[])}),r}var pY=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:U.any,extra:U.any,column:{type:[Number,Object],default:function(){return Dk}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},Lk=Symbol("descriptionsContext"),vo=ae({name:"ADescriptions",props:pY(),slots:["title","extra"],Item:jk,setup:function(e,t){var r=t.slots,a=Le("descriptions",e),i=a.prefixCls,o=a.direction,l,u=q({});hd(function(){l=Lo.subscribe(function(c){Be(e.column)==="object"&&(u.value=c)})}),fn(function(){Lo.unsubscribe(l)}),ln(Lk,{labelStyle:We(e,"labelStyle"),contentStyle:We(e,"contentStyle")});var s=R(function(){return fY(e.column,u.value)});return function(){var c,d,f,p,g=e.size,y=e.bordered,h=y===void 0?!1:y,m=e.layout,b=m===void 0?"horizontal":m,C=e.colon,x=C===void 0?!0:C,S=e.title,w=S===void 0?(d=r.title)===null||d===void 0?void 0:d.call(r):S,_=e.extra,P=_===void 0?(f=r.extra)===null||f===void 0?void 0:f.call(r):_,k=(p=r.default)===null||p===void 0?void 0:p.call(r),I=vY(k,s.value);return v("div",{class:[i.value,(c={},D(c,"".concat(i.value,"-").concat(g),g!=="default"),D(c,"".concat(i.value,"-bordered"),!!h),D(c,"".concat(i.value,"-rtl"),o.value==="rtl"),c)]},[(w||P)&&v("div",{class:"".concat(i.value,"-header")},[w&&v("div",{class:"".concat(i.value,"-title")},[w]),P&&v("div",{class:"".concat(i.value,"-extra")},[P])]),v("div",{class:"".concat(i.value,"-view")},[v("table",null,[v("tbody",null,[I.map(function(F,M){return v(cY,{key:M,index:M,colon:x,prefixCls:i.value,vertical:b==="vertical",bordered:h,row:F},null)})])])])])}}});vo.install=function(n){return n.component(vo.name,vo),n.component(vo.Item.name,vo.Item),n};const hY=vo;var gY=function(){return{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}},mY=ae({name:"ADivider",props:gY(),setup:function(e,t){var r=t.slots,a=Le("divider",e),i=a.prefixCls,o=a.direction,l=R(function(){return e.orientation==="left"&&e.orientationMargin!=null}),u=R(function(){return e.orientation==="right"&&e.orientationMargin!=null}),s=R(function(){var f,p=e.type,g=e.dashed,y=e.plain,h=i.value;return f={},D(f,h,!0),D(f,"".concat(h,"-").concat(p),!0),D(f,"".concat(h,"-dashed"),!!g),D(f,"".concat(h,"-plain"),!!y),D(f,"".concat(h,"-rtl"),o.value==="rtl"),D(f,"".concat(h,"-no-default-orientation-margin-left"),l.value),D(f,"".concat(h,"-no-default-orientation-margin-right"),u.value),f}),c=R(function(){var f=typeof e.orientationMargin=="number"?"".concat(e.orientationMargin,"px"):e.orientationMargin;return O(O({},l.value&&{marginLeft:f}),u.value&&{marginRight:f})}),d=R(function(){return e.orientation.length>0?"-"+e.orientation:e.orientation});return function(){var f,p=Fn((f=r.default)===null||f===void 0?void 0:f.call(r));return v("div",{class:[s.value,p.length?"".concat(i.value,"-with-text ").concat(i.value,"-with-text").concat(d.value):""],role:"separator"},[p.length?v("span",{class:"".concat(i.value,"-inner-text"),style:c.value},[p]):null])}}});const yY=Gn(mY);Gr.Button=cu;Gr.install=function(n){return n.component(Gr.name,Gr),n.component(cu.name,cu),n};var vv;function Ro(n){if(typeof document>"u")return 0;if(n||vv===void 0){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var t=document.createElement("div"),r=t.style;r.position="absolute",r.top="0",r.left="0",r.pointerEvents="none",r.visibility="hidden",r.width="200px",r.height="150px",r.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var a=e.offsetWidth;t.style.overflow="scroll";var i=e.offsetWidth;a===i&&(i=t.clientWidth),document.body.removeChild(t),vv=a-i}return vv}function a2(n){var e=n.match(/^(.*)px$/),t=Number(e==null?void 0:e[1]);return Number.isNaN(t)?Ro():t}function bY(n){if(typeof document>"u"||!n||!(n instanceof Element))return{width:0,height:0};var e=getComputedStyle(n,"::-webkit-scrollbar"),t=e.width,r=e.height;return{width:a2(t),height:a2(r)}}var Rk=function(){return{prefixCls:String,width:U.oneOfType([U.string,U.number]),height:U.oneOfType([U.string,U.number]),style:{type:Object,default:void 0},class:String,placement:{type:String},wrapperClassName:String,level:{type:[String,Array]},levelMove:{type:[Number,Function,Array]},duration:String,ease:String,showMask:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},afterVisibleChange:Function,keyboard:{type:Boolean,default:void 0},contentWrapperStyle:{type:Object,default:void 0},autofocus:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0}}},CY=function(){return O(O({},Rk()),{forceRender:{type:Boolean,default:void 0},getContainer:U.oneOfType([U.string,U.func,U.object,U.looseBool])})},xY=function(){return O(O({},Rk()),{getContainer:Function,getOpenCount:Function,scrollLocker:U.any,switchScrollingEffect:Function})};function wY(n){return Array.isArray(n)?n:[n]}var $k={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},SY=Object.keys($k).filter(function(n){if(typeof document>"u")return!1;var e=document.getElementsByTagName("html")[0];return n in(e?e.style:{})})[0],i2=$k[SY];function o2(n,e,t,r){n.addEventListener?n.addEventListener(e,t,r):n.attachEvent&&n.attachEvent("on".concat(e),t)}function l2(n,e,t,r){n.removeEventListener?n.removeEventListener(e,t,r):n.attachEvent&&n.detachEvent("on".concat(e),t)}function _Y(n,e){var t=typeof n=="function"?n(e):n;return Array.isArray(t)?t.length===2?t:[t[0],t[1]]:[t]}var u2=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},pv=!(typeof window<"u"&&window.document&&window.document.createElement),kY=function n(e,t,r,a){if(!t||t===document||t instanceof Document)return!1;if(t===e.parentNode)return!0;var i=Math.max(Math.abs(r),Math.abs(a))===Math.abs(a),o=Math.max(Math.abs(r),Math.abs(a))===Math.abs(r),l=t.scrollHeight-t.clientHeight,u=t.scrollWidth-t.clientWidth,s=document.defaultView.getComputedStyle(t),c=s.overflowY==="auto"||s.overflowY==="scroll",d=s.overflowX==="auto"||s.overflowX==="scroll",f=l&&c,p=u&&d;return i&&(!f||f&&(t.scrollTop>=l&&a<0||t.scrollTop<=0&&a>0))||o&&(!p||p&&(t.scrollLeft>=u&&r<0||t.scrollLeft<=0&&r>0))?n(e,t.parentNode,r,a):!1},PY=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},vl={},OY=ae({inheritAttrs:!1,props:xY(),emits:["close","handleClick","change"],setup:function(e,t){var r=t.emit,a=t.slots,i=kn({startPos:{x:null,y:null}}),o,l=q(),u=q(),s=q(),c=q(),d=q(),f=[],p="drawer_id_".concat(Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)),g=!pv&&ot?{passive:!1}:!1;Ye(function(){dn(function(){var A,E=e.open,L=e.getContainer,B=e.showMask,K=e.autofocus,H=L==null?void 0:L();N(e),E&&(H&&H.parentNode===document.body&&(vl[p]=E),_(),dn(function(){K&&y()}),B&&((A=e.scrollLocker)===null||A===void 0||A.lock()))})}),Pe(function(){return e.level},function(){N(e)},{flush:"post"}),Pe(function(){return e.open},function(){var A=e.open,E=e.getContainer,L=e.scrollLocker,B=e.showMask,K=e.autofocus,H=E==null?void 0:E();H&&H.parentNode===document.body&&(vl[p]=!!A),_(),A?(K&&y(),B&&(L==null||L.lock())):L==null||L.unLock()},{flush:"post"}),Dt(function(){var A,E=e.open;delete vl[p],E&&(P(!1),document.body.style.touchAction=""),(A=e.scrollLocker)===null||A===void 0||A.unLock()}),Pe(function(){return e.placement},function(A){A&&(d.value=null)});var y=function(){var E,L;(L=(E=u.value)===null||E===void 0?void 0:E.focus)===null||L===void 0||L.call(E)},h=function(E){if(E.touches.length>1){i.startPos=null;return}i.startPos={x:E.touches[0].clientX,y:E.touches[0].clientY}},m=function(E){if(!(E.changedTouches.length>1||!i.startPos)){var L=E.currentTarget,B=E.changedTouches[0].clientX-i.startPos.x,K=E.changedTouches[0].clientY-i.startPos.y;(L===s.value||L===c.value||L===d.value&&kY(L,E.target,B,K))&&E.cancelable&&E.preventDefault()}},b=function A(E){var L=E.target;l2(L,i2,A),L.style.transition=""},C=function(E){r("close",E)},x=function(E){E.keyCode===Ne.ESC&&(E.stopPropagation(),C(E))},S=function(E){var L=e.open,B=e.afterVisibleChange;E.target===l.value&&E.propertyName.match(/transform$/)&&(u.value.style.transition="",!L&&T()&&(document.body.style.overflowX="",s.value&&(s.value.style.left="",s.value.style.width="")),B&&B(!!L))},w=R(function(){var A=e.placement,E=A==="left"||A==="right",L="translate".concat(E?"X":"Y");return{isHorizontal:E,placementName:L}}),_=function(){var E=e.open,L=e.width,B=e.height,K=w.value,H=K.isHorizontal,Z=K.placementName,Y=d.value?d.value.getBoundingClientRect()[H?"width":"height"]:0,G=(H?L:B)||Y;k(E,Z,G)},P=function(E,L,B,K){var H=e.placement,Z=e.levelMove,Y=e.duration,G=e.ease,Q=e.showMask;f.forEach(function(z){z.style.transition="transform ".concat(Y," ").concat(G),o2(z,i2,b);var J=E?B:0;if(Z){var ne=_Y(Z,{target:z,open:E});J=E?ne[0]:ne[1]||0}var oe=typeof J=="number"?"".concat(J,"px"):J,ce=H==="left"||H==="top"?oe:"-".concat(oe);ce=Q&&H==="right"&&K?"calc(".concat(ce," + ").concat(K,"px)"):ce,z.style.transform=J?"".concat(L,"(").concat(ce,")"):""})},k=function(E,L,B){if(!pv){var K=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth?Ro(!0):0;P(E,L,B,K),I(K)}r("change",E)},I=function(E){var L=e.getContainer,B=e.showMask,K=e.open,H=L==null?void 0:L();if(H&&H.parentNode===document.body&&B){var Z=["touchstart"],Y=[document.body,s.value,c.value,d.value];K&&document.body.style.overflow!=="hidden"?(E&&F(E),document.body.style.touchAction="none",Y.forEach(function(G,Q){!G||o2(G,Z[Q]||"touchmove",Q?m:h,g)})):T()&&(document.body.style.touchAction="",E&&M(E),Y.forEach(function(G,Q){!G||l2(G,Z[Q]||"touchmove",Q?m:h,g)}))}},F=function(E){var L=e.placement,B=e.duration,K=e.ease,H="width ".concat(B," ").concat(K),Z="transform ".concat(B," ").concat(K);switch(u.value.style.transition="none",L){case"right":u.value.style.transform="translateX(-".concat(E,"px)");break;case"top":case"bottom":u.value.style.width="calc(100% - ".concat(E,"px)"),u.value.style.transform="translateZ(0)";break}clearTimeout(o),o=setTimeout(function(){u.value&&(u.value.style.transition="".concat(Z,",").concat(H),u.value.style.width="",u.value.style.transform="")})},M=function(E){var L=e.placement,B=e.duration,K=e.ease;u.value.style.transition="none";var H,Z="width ".concat(B," ").concat(K),Y="transform ".concat(B," ").concat(K);switch(L){case"left":{u.value.style.width="100%",Z="width 0s ".concat(K," ").concat(B);break}case"right":{u.value.style.transform="translateX(".concat(E,"px)"),u.value.style.width="100%",Z="width 0s ".concat(K," ").concat(B),s.value&&(s.value.style.left="-".concat(E,"px"),s.value.style.width="calc(100% + ".concat(E,"px)"));break}case"top":case"bottom":{u.value.style.width="calc(100% + ".concat(E,"px)"),u.value.style.height="100%",u.value.style.transform="translateZ(0)",H="height 0s ".concat(K," ").concat(B);break}}clearTimeout(o),o=setTimeout(function(){u.value&&(u.value.style.transition="".concat(Y,",").concat(H?"".concat(H,","):"").concat(Z),u.value.style.transform="",u.value.style.width="",u.value.style.height="")})},T=function(){return!Object.keys(vl).some(function(E){return vl[E]})},N=function(E){var L=E.level,B=E.getContainer;if(!pv){var K=B==null?void 0:B(),H=K?K.parentNode:null;if(f=[],L==="all"){var Z=H?Array.prototype.slice.call(H.children):[];Z.forEach(function(Y){Y.nodeName!=="SCRIPT"&&Y.nodeName!=="STYLE"&&Y.nodeName!=="LINK"&&Y!==K&&f.push(Y)})}else L&&wY(L).forEach(function(Y){document.querySelectorAll(Y).forEach(function(G){f.push(G)})})}},j=function(E){r("handleClick",E)},$=q(!1);return Pe(u,function(){dn(function(){$.value=!0})}),function(){var A,E,L,B=e.width,K=e.height,H=e.open,Z=e.prefixCls,Y=e.placement;e.level,e.levelMove,e.ease,e.duration,e.getContainer,e.onChange,e.afterVisibleChange;var G=e.showMask,Q=e.maskClosable,z=e.maskStyle,J=e.keyboard;e.getOpenCount,e.scrollLocker;var ne=e.contentWrapperStyle,oe=e.style,ce=e.class,se=PY(e,["width","height","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","keyboard","getOpenCount","scrollLocker","contentWrapperStyle","style","class"]),V=H&&$.value,X=de(Z,(A={},D(A,"".concat(Z,"-").concat(Y),!0),D(A,"".concat(Z,"-open"),V),D(A,ce,!!ce),D(A,"no-mask",!G),A)),ee=w.value.placementName,ue=Y==="left"||Y==="top"?"-100%":"100%",ie=V?"":"".concat(ee,"(").concat(ue,")");return v("div",W(W({},un(se,["switchScrollingEffect","autofocus"])),{},{tabindex:-1,class:X,style:oe,ref:u,onKeydown:V&&J?x:void 0,onTransitionend:S}),[G&&v("div",{class:"".concat(Z,"-mask"),onClick:Q?C:void 0,style:z,ref:s},null),v("div",{class:"".concat(Z,"-content-wrapper"),style:O({transform:ie,msTransform:ie,width:u2(B)?"".concat(B,"px"):B,height:u2(K)?"".concat(K,"px"):K},ne),ref:l},[v("div",{class:"".concat(Z,"-content"),ref:d},[(E=a.default)===null||E===void 0?void 0:E.call(a)]),a.handler?v("div",{onClick:j,ref:c},[(L=a.handler)===null||L===void 0?void 0:L.call(a)]):null])])}}});const s2=OY;function $o(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.element,r=t===void 0?document.body:t,a={},i=Object.keys(n);return i.forEach(function(o){a[o]=r.style[o]}),i.forEach(function(o){r.style[o]=n[o]}),a}function TY(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var hv={};const c2=function(n){if(!(!TY()&&!n)){var e="ant-scrolling-effect",t=new RegExp("".concat(e),"g"),r=document.body.className;if(n){if(!t.test(r))return;$o(hv),hv={},document.body.className=r.replace(t,"").trim();return}var a=Ro();if(a&&(hv=$o({position:"relative",width:"calc(100% - ".concat(a,"px)")}),!t.test(r))){var i="".concat(r," ").concat(e);document.body.className=i.trim()}}};function d2(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function Ry(n,e,t){return e&&d2(n.prototype,e),t&&d2(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function $y(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var cr=[],Bk="ant-scrolling-effect",gv=new RegExp("".concat(Bk),"g"),NY=0,mv=new Map,IY=Ry(function n(e){var t=this;$y(this,n),this.getContainer=function(){var r;return(r=t.options)===null||r===void 0?void 0:r.container},this.reLock=function(r){var a=cr.find(function(i){var o=i.target;return o===t.lockTarget});a&&t.unLock(),t.options=r,a&&(a.options=r,t.lock())},this.lock=function(){var r;if(!cr.some(function(u){var s=u.target;return s===t.lockTarget})){if(cr.some(function(u){var s=u.options,c;return(s==null?void 0:s.container)===((c=t.options)===null||c===void 0?void 0:c.container)})){cr=[].concat(Ee(cr),[{target:t.lockTarget,options:t.options}]);return}var a=0,i=((r=t.options)===null||r===void 0?void 0:r.container)||document.body;(i===document.body&&window.innerWidth-document.documentElement.clientWidth>0||i.scrollHeight>i.clientHeight)&&(a=Ro());var o=i.className;if(cr.filter(function(u){var s=u.options,c;return(s==null?void 0:s.container)===((c=t.options)===null||c===void 0?void 0:c.container)}).length===0&&mv.set(i,$o({width:a!==0?"calc(100% - ".concat(a,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:i})),!gv.test(o)){var l="".concat(o," ").concat(Bk);i.className=l.trim()}cr=[].concat(Ee(cr),[{target:t.lockTarget,options:t.options}])}},this.unLock=function(){var r,a=cr.find(function(l){var u=l.target;return u===t.lockTarget});if(cr=cr.filter(function(l){var u=l.target;return u!==t.lockTarget}),!(!a||cr.some(function(l){var u=l.options,s;return(u==null?void 0:u.container)===((s=a.options)===null||s===void 0?void 0:s.container)}))){var i=((r=t.options)===null||r===void 0?void 0:r.container)||document.body,o=i.className;!gv.test(o)||($o(mv.get(i),{element:i}),mv.delete(i),i.className=i.className.replace(gv,"").trim())}},this.lockTarget=NY++,this.options=e}),ua=0,Sl=Hi(),ys={},ro=function(e){if(!Sl)return null;if(e){if(typeof e=="string")return document.querySelectorAll(e)[0];if(typeof e=="function")return e();if(Be(e)==="object"&&e instanceof window.HTMLElement)return e}return document.body};const Vk=ae({name:"PortalWrapper",inheritAttrs:!1,props:{wrapperClassName:String,forceRender:{type:Boolean,default:void 0},getContainer:U.any,visible:{type:Boolean,default:void 0}},setup:function(e,t){var r=t.slots,a=q(),i=q(),o=q(),l=new IY({container:ro(e.getContainer)}),u=function(){var y,h;(h=(y=a.value)===null||y===void 0?void 0:y.parentNode)===null||h===void 0||h.removeChild(a.value)},s=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(y||a.value&&!a.value.parentNode){var h=ro(e.getContainer);return h?(h.appendChild(a.value),!0):!1}return!0},c=function(){return Sl?(a.value||(a.value=document.createElement("div"),s(!0)),d(),a.value):null},d=function(){var y=e.wrapperClassName;a.value&&y&&y!==a.value.className&&(a.value.className=y)};Nt(function(){d(),s()});var f=function(){ua===1&&!Object.keys(ys).length?(c2(),ys=$o({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):ua||($o(ys),ys={},c2(!0))},p=Jn();return Ye(function(){var g=!1;Pe([function(){return e.visible},function(){return e.getContainer}],function(y,h){var m=Te(y,2),b=m[0],C=m[1],x=Te(h,2),S=x[0],w=x[1];if(Sl&&ro(e.getContainer)===document.body&&(b&&!S?ua+=1:g&&(ua-=1)),g){var _=typeof C=="function"&&typeof w=="function";(_?C.toString()!==w.toString():C!==w)&&u(),b&&b!==S&&Sl&&ro(C)!==l.getContainer()&&l.reLock({container:ro(C)})}g=!0},{immediate:!0,flush:"post"}),dn(function(){s()||(o.value=Qe(function(){p.update()}))})}),fn(function(){var g=e.visible,y=e.getContainer;Sl&&ro(y)===document.body&&(ua=g&&ua?ua-1:ua),u(),Qe.cancel(o.value)}),function(){var g=e.forceRender,y=e.visible,h=null,m={getOpenCount:function(){return ua},getContainer:c,switchScrollingEffect:f,scrollLocker:l};return(g||y||i.value)&&(h=v(Op,{getContainer:c,ref:i},{default:function(){var C;return(C=r.default)===null||C===void 0?void 0:C.call(r,m)}})),h}}});var f2=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},EY=ae({inheritAttrs:!1,props:vn(CY(),{prefixCls:"drawer",placement:"left",getContainer:"body",level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",afterVisibleChange:function(){},showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",keyboard:!0,forceRender:!1,autofocus:!0}),emits:["handleClick","close"],slots:["handler"],setup:function(e,t){var r=t.emit,a=t.slots,i=q(null),o=function(s){r("handleClick",s)},l=function(s){r("close",s)};return function(){var u=e.getContainer,s=e.wrapperClassName,c=e.forceRender,d=f2(e,["getContainer","wrapperClassName","forceRender"]),f=null;if(!u)return v("div",{class:s,ref:i},[v(s2,W(W({},d),{},{open:e.open,getContainer:function(){return i.value},onClose:l,onHandleClick:o}),a)]);var p=!!a.handler||c;return(p||e.open||i.value)&&(f=v(Vk,{visible:e.open,forceRender:p,getContainer:u,wrapperClassName:s},{default:function(y){var h=y.visible,m=y.afterClose,b=f2(y,["visible","afterClose"]);return v(s2,W(W(W({ref:i},d),b),{},{open:h!==void 0?h:e.open,afterVisibleChange:m!==void 0?m:e.afterVisibleChange,onClose:l,onHandleClick:o}),a)}})),f}}});const MY=EY;var AY=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},FY=jn("top","right","bottom","left");jn("default","large");var v2={distance:180},jY=function(){return{autofocus:{type:Boolean,default:void 0},closable:{type:Boolean,default:void 0},closeIcon:U.any,destroyOnClose:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},getContainer:{type:[String,Function,Boolean,Object],default:void 0},maskClosable:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},wrapStyle:{type:Object,default:void 0},style:{type:Object,default:void 0},class:U.any,wrapClassName:String,size:{type:String},drawerStyle:{type:Object,default:void 0},headerStyle:{type:Object,default:void 0},bodyStyle:{type:Object,default:void 0},contentWrapperStyle:{type:Object,default:void 0},title:U.any,visible:{type:Boolean,default:void 0},width:U.oneOfType([U.string,U.number]),height:U.oneOfType([U.string,U.number]),zIndex:Number,prefixCls:String,push:U.oneOfType([U.looseBool,{type:Object}]),placement:U.oneOf(FY),keyboard:{type:Boolean,default:void 0},extra:U.any,footer:U.any,footerStyle:{type:Object,default:void 0},level:U.any,levelMove:{type:[Number,Array,Function]},handle:U.any,afterVisibleChange:Function,onAfterVisibleChange:Function,"onUpdate:visible":Function,onClose:Function}},DY=ae({name:"ADrawer",inheritAttrs:!1,props:vn(jY(),{closable:!0,placement:"right",maskClosable:!0,mask:!0,level:null,keyboard:!0,push:v2}),slots:["closeIcon","title","extra","footer","handle"],setup:function(e,t){var r=t.emit,a=t.slots,i=t.attrs,o=q(!1),l=q(!1),u=q(null),s=q(!1),c=q(!1);Pe(function(){return e.visible},function(T){T?s.value=!0:c.value=!1},{immediate:!0}),Pe([function(){return e.visible},s],function(T){var N=Te(T,1),j=N[0];j&&s.value&&(c.value=!0)},{immediate:!0});var d=on("parentDrawerOpts",null),f=Le("drawer",e),p=f.prefixCls,g=f.getPopupContainer,y=f.direction,h=R(function(){return e.getContainer===void 0&&g.value?function(){return g.value(document.body)}:e.getContainer});On(!e.afterVisibleChange,"Drawer","`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead"),On(e.wrapStyle===void 0,"Drawer","`wrapStyle` prop is deprecated, please use `style` instead"),On(e.wrapClassName===void 0,"Drawer","`wrapClassName` prop is deprecated, please use `class` instead");var m=function(){o.value=!0},b=function(){o.value=!1,dn(function(){C()})};ln("parentDrawerOpts",{setPush:m,setPull:b}),Ye(function(){e.visible&&d&&d.setPush()}),Dt(function(){d&&d.setPull()}),Pe(c,function(){d&&(c.value?d.setPush():d.setPull())},{flush:"post"});var C=function(){var N,j;(j=(N=u.value)===null||N===void 0?void 0:N.domFocus)===null||j===void 0||j.call(N)},x=function(N){r("update:visible",!1),r("close",N)},S=function(N){var j;N||(l.value===!1&&(l.value=!0),e.destroyOnClose&&(s.value=!1)),(j=e.afterVisibleChange)===null||j===void 0||j.call(e,N),r("afterVisibleChange",N)},w=R(function(){var T=e.push,N=e.placement,j;return typeof T=="boolean"?j=T?v2.distance:0:j=T.distance,j=parseFloat(String(j||0)),N==="left"||N==="right"?"translateX(".concat(N==="left"?j:-j,"px)"):N==="top"||N==="bottom"?"translateY(".concat(N==="top"?j:-j,"px)"):null}),_=R(function(){var T=e.mask,N=e.placement,j=e.size,$=j===void 0?"default":j,A=e.width,E=e.height;if(!c.value&&!T)return{};var L={};if(N==="left"||N==="right"){var B=$==="large"?736:378;L.width=typeof A>"u"?B:A,L.width=typeof L.width=="string"?L.width:"".concat(L.width,"px")}else{var K=$==="large"?736:378;L.height=typeof E>"u"?K:E,L.height=typeof L.height=="string"?L.height:"".concat(L.height,"px")}return L}),P=R(function(){var T=e.zIndex,N=e.wrapStyle,j=e.mask,$=e.style,A=j?{}:_.value;return O(O(O({zIndex:T,transform:o.value?w.value:void 0},A),N),$)}),k=function(N){var j=e.closable,$=e.headerStyle,A=Vn(a,e,"extra"),E=Vn(a,e,"title");return!E&&!j?null:v("div",{class:de("".concat(N,"-header"),D({},"".concat(N,"-header-close-only"),j&&!E&&!A)),style:$},[v("div",{class:"".concat(N,"-header-title")},[I(N),E&&v("div",{class:"".concat(N,"-title")},[E])]),A&&v("div",{class:"".concat(N,"-extra")},[A])])},I=function(N){var j,$=e.closable,A=a.closeIcon?(j=a.closeIcon)===null||j===void 0?void 0:j.call(a):e.closeIcon;return $&&v("button",{key:"closer",onClick:x,"aria-label":"Close",class:"".concat(N,"-close")},[A===void 0?v(ea,null,null):A])},F=function(N){var j;if(l.value&&!e.forceRender&&!s.value)return null;var $=e.bodyStyle,A=e.drawerStyle;return v("div",{class:"".concat(N,"-wrapper-body"),style:A},[k(N),v("div",{key:"body",class:"".concat(N,"-body"),style:$},[(j=a.default)===null||j===void 0?void 0:j.call(a)]),M(N)])},M=function(N){var j=Vn(a,e,"footer");if(!j)return null;var $="".concat(N,"-footer");return v("div",{class:$,style:e.footerStyle},[j])};return function(){var T;e.width,e.height;var N=e.placement,j=e.mask,$=e.wrapClassName,A=e.class,E=e.forceRender,L=AY(e,["width","height","placement","mask","wrapClassName","class","forceRender"]),B=j?_.value:{},K=j?"":"no-mask",H=O(O(O(O({},i),un(L,["size","closeIcon","closable","destroyOnClose","drawerStyle","headerStyle","bodyStyle","title","push","wrapStyle","onAfterVisibleChange","onClose","onUpdate:visible","visible"])),B),{forceRender:E,onClose:x,afterVisibleChange:S,handler:!1,prefixCls:p.value,open:c.value,showMask:j,placement:N,class:de((T={},D(T,A,A),D(T,$,!!$),D(T,K,!!K),D(T,"".concat(p.value,"-rtl"),y.value==="rtl"),T)),style:P.value,ref:u});return v(MY,W(W({},H),{},{getContainer:h.value}),{handler:e.handle?function(){return e.handle}:a.handle,default:function(){return F(p.value)}})}}});const LY=Gn(DY);var Vl=function(e){return e!=null&&(Array.isArray(e)?Qn(e).length:!0)};function By(n){return Vl(n.prefix)||Vl(n.suffix)||Vl(n.allowClear)}function qs(n){return Vl(n.addonBefore)||Vl(n.addonAfter)}function rh(n){return typeof n>"u"||n===null?"":String(n)}function Kl(n,e,t,r){if(!!t){var a=e;if(e.type==="click"){Object.defineProperty(a,"target",{writable:!0}),Object.defineProperty(a,"currentTarget",{writable:!0});var i=n.cloneNode(!0);a.target=i,a.currentTarget=i,i.value="",t(a);return}if(r!==void 0){Object.defineProperty(a,"target",{writable:!0}),Object.defineProperty(a,"currentTarget",{writable:!0}),a.target=n,a.currentTarget=n,n.value=r,t(a);return}t(a)}}function Kk(n,e){if(!!n){n.focus(e);var t=e||{},r=t.cursor;if(r){var a=n.value.length;switch(r){case"start":n.setSelectionRange(0,0);break;case"end":n.setSelectionRange(a,a);break;default:n.setSelectionRange(0,a)}}}}var RY=function(){return{addonBefore:U.any,addonAfter:U.any,prefix:U.any,suffix:U.any,clearIcon:U.any,affixWrapperClassName:String,groupClassName:String,wrapperClassName:String,inputClassName:String,allowClear:{type:Boolean,default:void 0}}},zk=function(){return O(O({},RY()),{value:{type:[String,Number,Symbol],default:void 0},defaultValue:{type:[String,Number,Symbol],default:void 0},inputElement:U.any,prefixCls:String,disabled:{type:Boolean,default:void 0},focused:{type:Boolean,default:void 0},triggerFocus:Function,readonly:{type:Boolean,default:void 0},handleReset:Function,hidden:{type:Boolean,default:void 0}})},Hk=function(){return O(O({},zk()),{id:String,placeholder:{type:[String,Number]},autocomplete:String,type:{type:String,default:"text"},name:String,size:{type:String},autofocus:{type:Boolean,default:void 0},lazy:{type:Boolean,default:!0},maxlength:Number,loading:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},showCount:{type:[Boolean,Object]},htmlSize:Number,onPressEnter:Function,onKeydown:Function,onKeyup:Function,onFocus:Function,onBlur:Function,onChange:Function,onInput:Function,"onUpdate:value":Function,onCompositionstart:Function,onCompositionend:Function,valueModifiers:Object,hidden:{type:Boolean,default:void 0},status:String})};const $Y=ae({name:"BaseInput",inheritAttrs:!1,props:zk(),setup:function(e,t){var r=t.slots,a=t.attrs,i=q(),o=function(s){var c;if(!((c=i.value)===null||c===void 0)&&c.contains(s.target)){var d=e.triggerFocus;d==null||d()}},l=function(){var s,c,d=e.allowClear,f=e.value,p=e.disabled,g=e.readonly,y=e.handleReset,h=e.suffix,m=h===void 0?r.suffix:h,b=e.prefixCls;if(!d)return null;var C=!p&&!g&&f,x="".concat(b,"-clear-icon"),S=((c=r.clearIcon)===null||c===void 0?void 0:c.call(r))||"*";return v("span",{onClick:y,onMousedown:function(_){return _.preventDefault()},class:de((s={},D(s,"".concat(x,"-hidden"),!C),D(s,"".concat(x,"-has-suffix"),!!m),s),x),role:"button",tabindex:-1},[S])};return function(){var u,s,c=e.focused,d=e.value,f=e.disabled,p=e.allowClear,g=e.readonly,y=e.hidden,h=e.prefixCls,m=e.prefix,b=m===void 0?(u=r.prefix)===null||u===void 0?void 0:u.call(r):m,C=e.suffix,x=C===void 0?(s=r.suffix)===null||s===void 0?void 0:s.call(r):C,S=e.addonAfter,w=S===void 0?r.addonAfter:S,_=e.addonBefore,P=_===void 0?r.addonBefore:_,k=e.inputElement,I=e.affixWrapperClassName,F=e.wrapperClassName,M=e.groupClassName,T=wn(k,{value:d,hidden:y});if(By({prefix:b,suffix:x,allowClear:p})){var N,j="".concat(h,"-affix-wrapper"),$=de(j,(N={},D(N,"".concat(j,"-disabled"),f),D(N,"".concat(j,"-focused"),c),D(N,"".concat(j,"-readonly"),g),D(N,"".concat(j,"-input-with-clear-btn"),x&&p&&d),N),!qs({addonAfter:w,addonBefore:P})&&a.class,I),A=(x||p)&&v("span",{class:"".concat(h,"-suffix")},[l(),x]);T=v("span",{class:$,style:a.style,hidden:!qs({addonAfter:w,addonBefore:P})&&y,onMousedown:o,ref:i},[b&&v("span",{class:"".concat(h,"-prefix")},[b]),wn(k,{style:null,value:d,hidden:null}),A])}if(qs({addonAfter:w,addonBefore:P})){var E="".concat(h,"-group"),L="".concat(E,"-addon"),B=de("".concat(h,"-wrapper"),E,F),K=de("".concat(h,"-group-wrapper"),a.class,M);return v("span",{class:K,style:a.style,hidden:y},[v("span",{class:B},[P&&v("span",{class:L},[P]),wn(T,{style:null,hidden:null}),w&&v("span",{class:L},[w])])])}return T}}});var BY=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};const VY=ae({name:"VCInput",inheritAttrs:!1,props:Hk(),setup:function(e,t){var r=t.slots,a=t.attrs,i=t.expose,o=t.emit,l=q(e.value===void 0?e.defaultValue:e.value),u=q(!1),s=q();Pe(function(){return e.value},function(){l.value=e.value}),Pe(function(){return e.disabled},function(){e.disabled&&(u.value=!1)});var c=function(k){s.value&&Kk(s.value,k)},d=function(){var k;(k=s.value)===null||k===void 0||k.blur()},f=function(k,I,F){var M;(M=s.value)===null||M===void 0||M.setSelectionRange(k,I,F)},p=function(){var k;(k=s.value)===null||k===void 0||k.select()};i({focus:c,blur:d,input:s,stateValue:l,setSelectionRange:f,select:p});var g=function(k){o("change",k)},y=Jn(),h=function(k,I){l.value!==k&&(e.value===void 0?l.value=k:dn(function(){s.value.value!==l.value&&y.update()}),dn(function(){I&&I()}))},m=function(k){var I=k.target,F=I.value,M=I.composing;if(!((k.isComposing||M)&&e.lazy||l.value===F)){var T=k.target.value;Kl(s.value,k,g),h(T)}},b=function(k){k.keyCode===13&&o("pressEnter",k),o("keydown",k)},C=function(k){u.value=!0,o("focus",k)},x=function(k){u.value=!1,o("blur",k)},S=function(k){Kl(s.value,k,g),h("",function(){c()})},w=function(){var k,I,F=e.addonBefore,M=F===void 0?r.addonBefore:F,T=e.addonAfter,N=T===void 0?r.addonAfter:T,j=e.disabled,$=e.valueModifiers,A=$===void 0?{}:$,E=e.htmlSize,L=e.autocomplete,B=e.prefixCls,K=e.inputClassName,H=e.prefix,Z=H===void 0?(k=r.prefix)===null||k===void 0?void 0:k.call(r):H,Y=e.suffix,G=Y===void 0?(I=r.suffix)===null||I===void 0?void 0:I.call(r):Y,Q=e.allowClear,z=e.type,J=z===void 0?"text":z,ne=un(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","bordered","htmlSize","lazy","showCount","valueModifiers","showCount","affixWrapperClassName","groupClassName","inputClassName","wrapperClassName"]),oe=O(O(O({},ne),a),{autocomplete:L,onChange:m,onInput:m,onFocus:C,onBlur:x,onKeydown:b,class:de(B,D({},"".concat(B,"-disabled"),j),K,!qs({addonAfter:N,addonBefore:M})&&!By({prefix:Z,suffix:G,allowClear:Q})&&a.class),ref:s,key:"ant-input",size:E,type:J});A.lazy&&delete oe.onInput,oe.autofocus||delete oe.autofocus;var ce=v("input",un(oe,["size"]),null);return St(ce,[[Zo]])},_=function(){var k,I=e.maxlength,F=e.suffix,M=F===void 0?(k=r.suffix)===null||k===void 0?void 0:k.call(r):F,T=e.showCount,N=e.prefixCls,j=Number(I)>0;if(M||T){var $=Ee(rh(l.value)).length,A=Be(T)==="object"?T.formatter({count:$,maxlength:I}):"".concat($).concat(j?" / ".concat(I):"");return v(qe,null,[!!T&&v("span",{class:de("".concat(N,"-show-count-suffix"),D({},"".concat(N,"-show-count-has-suffix"),!!M))},[A]),M])}return null};return Ye(function(){}),function(){var P=e.prefixCls,k=e.disabled,I=BY(e,["prefixCls","disabled"]);return v($Y,W(W(W({},I),a),{},{prefixCls:P,inputElement:w(),handleReset:S,value:rh(l.value),focused:u.value,triggerFocus:c,suffix:_(),disabled:k}),r)}}});var Wk=function(){return un(Hk(),["wrapperClassName","groupClassName","inputClassName","affixWrapperClassName"])};const Vy=Wk;var Uk=function(){return O(O({},un(Wk(),["prefix","addonBefore","addonAfter","suffix"])),{rows:Number,autosize:{type:[Boolean,Object],default:void 0},autoSize:{type:[Boolean,Object],default:void 0},onResize:{type:Function},onCompositionstart:Function,onCompositionend:Function,valueModifiers:Object})},KY=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};const st=ae({name:"AInput",inheritAttrs:!1,props:Vy(),setup:function(e,t){var r=t.slots,a=t.attrs,i=t.expose,o=t.emit,l=q(),u=lt(),s=pt.useInject(),c=R(function(){return jr(s.status,e.status)}),d=Le("input",e),f=d.direction,p=d.prefixCls,g=d.size,y=d.autocomplete,h=function(I){var F;(F=l.value)===null||F===void 0||F.focus(I)},m=function(){var I;(I=l.value)===null||I===void 0||I.blur()},b=function(I,F,M){var T;(T=l.value)===null||T===void 0||T.setSelectionRange(I,F,M)},C=function(){var I;(I=l.value)===null||I===void 0||I.select()};i({focus:h,blur:m,input:l,setSelectionRange:b,select:C});var x=q([]),S=function(){x.value.push(setTimeout(function(){var I,F,M,T;((I=l.value)===null||I===void 0?void 0:I.input)&&((F=l.value)===null||F===void 0?void 0:F.input.getAttribute("type"))==="password"&&((M=l.value)===null||M===void 0?void 0:M.input.hasAttribute("value"))&&((T=l.value)===null||T===void 0||T.input.removeAttribute("value"))}))};Ye(function(){S()}),gd(function(){x.value.forEach(function(k){return clearTimeout(k)})}),fn(function(){x.value.forEach(function(k){return clearTimeout(k)})});var w=function(I){S(),o("blur",I),u.onFieldBlur()},_=function(I){S(),o("focus",I)},P=function(I){o("update:value",I.target.value),o("change",I),o("input",I),u.onFieldChange()};return function(){var k,I,F,M,T,N,j,$,A=s.hasFeedback,E=s.feedbackIcon,L=e.allowClear,B=e.bordered,K=B===void 0?!0:B,H=e.prefix,Z=H===void 0?(M=r.prefix)===null||M===void 0?void 0:M.call(r):H,Y=e.suffix,G=Y===void 0?(T=r.suffix)===null||T===void 0?void 0:T.call(r):Y,Q=e.addonAfter,z=Q===void 0?(N=r.addonAfter)===null||N===void 0?void 0:N.call(r):Q,J=e.addonBefore,ne=J===void 0?(j=r.addonBefore)===null||j===void 0?void 0:j.call(r):J,oe=e.id,ce=oe===void 0?($=u.id)===null||$===void 0?void 0:$.value:oe,se=KY(e,["allowClear","bordered","prefix","suffix","addonAfter","addonBefore","id"]),V=(A||G)&&v(qe,null,[G,A&&E]),X=p.value,ee=By({prefix:Z,suffix:G})||!!A,ue=r.clearIcon||function(){return v(Jr,null,null)};return v(VY,W(W(W({},a),un(se,["onUpdate:value","onChange","onInput"])),{},{onChange:P,id:ce,ref:l,prefixCls:X,autocomplete:y.value,onBlur:w,onFocus:_,suffix:V,allowClear:L,addonAfter:z&&v(Ec,null,{default:function(){return[z]}}),addonBefore:ne&&v(Ec,null,{default:function(){return[ne]}}),inputClassName:de((k={},D(k,"".concat(X,"-sm"),g.value==="small"),D(k,"".concat(X,"-lg"),g.value==="large"),D(k,"".concat(X,"-rtl"),f.value==="rtl"),D(k,"".concat(X,"-borderless"),!K),k),!ee&&Tt(X,c.value)),affixWrapperClassName:de((I={},D(I,"".concat(X,"-affix-wrapper-sm"),g.value==="small"),D(I,"".concat(X,"-affix-wrapper-lg"),g.value==="large"),D(I,"".concat(X,"-affix-wrapper-rtl"),f.value==="rtl"),D(I,"".concat(X,"-affix-wrapper-borderless"),!K),I),Tt("".concat(X,"-affix-wrapper"),c.value,A)),wrapperClassName:de(D({},"".concat(X,"-group-rtl"),f.value==="rtl")),groupClassName:de((F={},D(F,"".concat(X,"-group-wrapper-sm"),g.value==="small"),D(F,"".concat(X,"-group-wrapper-lg"),g.value==="large"),D(F,"".concat(X,"-group-wrapper-rtl"),f.value==="rtl"),F),Tt("".concat(X,"-group-wrapper"),c.value,A))}),O(O({},r),{clearIcon:ue}))}}}),qk=ae({name:"AInputGroup",props:{prefixCls:String,size:{type:String},compact:{type:Boolean,default:void 0},onMouseenter:{type:Function},onMouseleave:{type:Function},onFocus:{type:Function},onBlur:{type:Function}},setup:function(e,t){var r=t.slots,a=Le("input-group",e),i=a.prefixCls,o=a.direction,l=pt.useInject();pt.useProvide(l,{isFormItemInput:!1});var u=R(function(){var s,c=i.value;return s={},D(s,"".concat(c),!0),D(s,"".concat(c,"-lg"),e.size==="large"),D(s,"".concat(c,"-sm"),e.size==="small"),D(s,"".concat(c,"-compact"),e.compact),D(s,"".concat(c,"-rtl"),o.value==="rtl"),s});return function(){var s;return v("span",{class:u.value,onMouseenter:e.onMouseEnter,onMouseleave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},[(s=r.default)===null||s===void 0?void 0:s.call(r)])}}});var yv=/iPhone/i,p2=/iPod/i,h2=/iPad/i,bv=/\bAndroid(?:.+)Mobile\b/i,g2=/Android/i,ao=/\bAndroid(?:.+)SD4930UR\b/i,bs=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,sa=/Windows Phone/i,m2=/\bWindows(?:.+)ARM\b/i,y2=/BlackBerry/i,b2=/BB10/i,C2=/Opera Mini/i,x2=/\b(CriOS|Chrome)(?:.+)Mobile/i,w2=/Mobile(?:.+)Firefox\b/i;function Cn(n,e){return n.test(e)}function S2(n){var e=n||(typeof navigator<"u"?navigator.userAgent:""),t=e.split("[FBAN");if(typeof t[1]<"u"){var r=t,a=Te(r,1);e=a[0]}if(t=e.split("Twitter"),typeof t[1]<"u"){var i=t,o=Te(i,1);e=o[0]}var l={apple:{phone:Cn(yv,e)&&!Cn(sa,e),ipod:Cn(p2,e),tablet:!Cn(yv,e)&&Cn(h2,e)&&!Cn(sa,e),device:(Cn(yv,e)||Cn(p2,e)||Cn(h2,e))&&!Cn(sa,e)},amazon:{phone:Cn(ao,e),tablet:!Cn(ao,e)&&Cn(bs,e),device:Cn(ao,e)||Cn(bs,e)},android:{phone:!Cn(sa,e)&&Cn(ao,e)||!Cn(sa,e)&&Cn(bv,e),tablet:!Cn(sa,e)&&!Cn(ao,e)&&!Cn(bv,e)&&(Cn(bs,e)||Cn(g2,e)),device:!Cn(sa,e)&&(Cn(ao,e)||Cn(bs,e)||Cn(bv,e)||Cn(g2,e))||Cn(/\bokhttp\b/i,e)},windows:{phone:Cn(sa,e),tablet:Cn(m2,e),device:Cn(sa,e)||Cn(m2,e)},other:{blackberry:Cn(y2,e),blackberry10:Cn(b2,e),opera:Cn(C2,e),firefox:Cn(w2,e),chrome:Cn(x2,e),device:Cn(y2,e)||Cn(b2,e)||Cn(C2,e)||Cn(w2,e)||Cn(x2,e)},any:null,phone:null,tablet:null};return l.any=l.apple.device||l.android.device||l.windows.device||l.other.device,l.phone=l.apple.phone||l.android.phone||l.windows.phone,l.tablet=l.apple.tablet||l.android.tablet||l.windows.tablet,l}var zY=O(O({},S2()),{isMobile:S2});const HY=zY;var WY=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};const Yk=ae({name:"AInputSearch",inheritAttrs:!1,props:O(O({},Vy()),{inputPrefixCls:String,enterButton:U.any,onSearch:{type:Function}}),setup:function(e,t){var r=t.slots,a=t.attrs,i=t.expose,o=t.emit,l=q(),u=q(!1),s=function(){var P;(P=l.value)===null||P===void 0||P.focus()},c=function(){var P;(P=l.value)===null||P===void 0||P.blur()};i({focus:s,blur:c});var d=function(P){o("update:value",P.target.value),P&&P.target&&P.type==="click"&&o("search",P.target.value,P),o("change",P)},f=function(P){var k;document.activeElement===((k=l.value)===null||k===void 0?void 0:k.input)&&P.preventDefault()},p=function(P){var k,I;o("search",(I=(k=l.value)===null||k===void 0?void 0:k.input)===null||I===void 0?void 0:I.stateValue,P),HY.tablet||l.value.focus()},g=function(P){u.value||p(P)},y=function(P){u.value=!0,o("compositionstart",P)},h=function(P){u.value=!1,o("compositionend",P)},m=Le("input-search",e),b=m.prefixCls,C=m.getPrefixCls,x=m.direction,S=m.size,w=R(function(){return C("input",e.inputPrefixCls)});return function(){var _,P,k,I,F,M=e.disabled,T=e.loading,N=e.addonAfter,j=N===void 0?(P=r.addonAfter)===null||P===void 0?void 0:P.call(r):N,$=e.suffix,A=$===void 0?(k=r.suffix)===null||k===void 0?void 0:k.call(r):$,E=WY(e,["disabled","loading","addonAfter","suffix"]),L=e.enterButton,B=L===void 0?(F=(I=r.enterButton)===null||I===void 0?void 0:I.call(r))!==null&&F!==void 0?F:!1:L;B=B||B==="";var K=typeof B=="boolean"?v(wd,null,null):null,H="".concat(b.value,"-button"),Z=Array.isArray(B)?B[0]:B,Y,G=Z.type&&tm(Z.type)&&Z.type.__ANT_BUTTON;if(G||Z.tagName==="button")Y=wn(Z,O({onMousedown:f,onClick:p,key:"enterButton"},G?{class:H,size:S.value}:{}),!1);else{var Q=K&&!B;Y=v(ct,{class:H,type:B?"primary":void 0,size:S.value,disabled:M,key:"enterButton",onMousedown:f,onClick:p,loading:T,icon:Q?K:null},{default:function(){return[Q?null:K||B]}})}j&&(Y=[Y,j]);var z=de(b.value,(_={},D(_,"".concat(b.value,"-rtl"),x.value==="rtl"),D(_,"".concat(b.value,"-").concat(S.value),!!S.value),D(_,"".concat(b.value,"-with-button"),!!B),_),a.class);return v(st,W(W(W({ref:l},un(E,["onUpdate:value","onSearch","enterButton"])),a),{},{onPressEnter:g,onCompositionstart:y,onCompositionend:h,size:S.value,prefixCls:w.value,addonAfter:Y,suffix:A,onChange:d,class:z,disabled:M}),r)}}});var _2=function(e){return e!=null&&(Array.isArray(e)?Qn(e).length:!0)};function UY(n){return _2(n.addonBefore)||_2(n.addonAfter)}var qY=["text","input"];const YY=ae({name:"ClearableLabeledInput",inheritAttrs:!1,props:{prefixCls:String,inputType:U.oneOf(jn("text","input")),value:U.any,defaultValue:U.any,allowClear:{type:Boolean,default:void 0},element:U.any,handleReset:Function,disabled:{type:Boolean,default:void 0},direction:{type:String},size:{type:String},suffix:U.any,prefix:U.any,addonBefore:U.any,addonAfter:U.any,readonly:{type:Boolean,default:void 0},focused:{type:Boolean,default:void 0},bordered:{type:Boolean,default:!0},triggerFocus:{type:Function},hidden:Boolean,status:String},setup:function(e,t){var r=t.slots,a=t.attrs,i=pt.useInject(),o=function(s){var c,d=e.value,f=e.disabled,p=e.readonly,g=e.handleReset,y=e.suffix,h=y===void 0?r.suffix:y,m=!f&&!p&&d,b="".concat(s,"-clear-icon");return v(Jr,{onClick:g,onMousedown:function(x){return x.preventDefault()},class:de((c={},D(c,"".concat(b,"-hidden"),!m),D(c,"".concat(b,"-has-suffix"),!!h),c),b),role:"button"},null)},l=function(s,c){var d,f=e.value,p=e.allowClear,g=e.direction,y=e.bordered,h=e.hidden,m=e.status,b=e.addonAfter,C=b===void 0?r.addonAfter:b,x=e.addonBefore,S=x===void 0?r.addonBefore:x,w=i.status,_=i.hasFeedback;if(!p)return wn(c,{value:f});var P=de("".concat(s,"-affix-wrapper"),"".concat(s,"-affix-wrapper-textarea-with-clear-btn"),Tt("".concat(s,"-affix-wrapper"),jr(w,m),_),(d={},D(d,"".concat(s,"-affix-wrapper-rtl"),g==="rtl"),D(d,"".concat(s,"-affix-wrapper-borderless"),!y),D(d,"".concat(a.class),!UY({addonAfter:C,addonBefore:S})&&a.class),d));return v("span",{class:P,style:a.style,hidden:h},[wn(c,{style:null,value:f}),o(s)])};return function(){var u,s=e.prefixCls,c=e.inputType,d=e.element,f=d===void 0?(u=r.element)===null||u===void 0?void 0:u.call(r):d;return c===qY[0]?l(s,f):null}}});var GY=`
 min-height:0 !important;
 max-height:none !important;
 height:0 !important;
 visibility:hidden !important;
 overflow:hidden !important;
 position:absolute !important;
 z-index:-1000 !important;
 top:0 !important;
 right:0 !important
   a `).concat(o,",").concat(o," 0 1 1 ").concat(s,",").concat(-c,`
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,o={},l={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function b(C){return C instanceof u?new u(C.type,b(C.content),C.alias):Array.isArray(C)?C.map(b):C.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++i}),b.__id},clone:function b(C,x){x=x||{};var S,w;switch(l.util.type(C)){case"Object":if(w=l.util.objId(C),x[w])return x[w];S={},x[w]=S;for(var _ in C)C.hasOwnProperty(_)&&(S[_]=b(C[_],x));return S;case"Array":return w=l.util.objId(C),x[w]?x[w]:(S=[],x[w]=S,C.forEach(function(P,k){S[k]=b(P,x)}),S);default:return C}},getLanguage:function(b){for(;b;){var C=a.exec(b.className);if(C)return C[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,C){b.className=b.className.replace(RegExp(a,"gi"),""),b.classList.add("language-"+C)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(S){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack)||[])[1];if(b){var C=document.getElementsByTagName("script");for(var x in C)if(C[x].src==b)return C[x]}return null}},isActive:function(b,C,x){for(var S="no-"+C;b;){var w=b.classList;if(w.contains(C))return!0;if(w.contains(S))return!1;b=b.parentElement}return!!x}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(b,C){var x=l.util.clone(l.languages[b]);for(var S in C)x[S]=C[S];return x},insertBefore:function(b,C,x,S){S=S||l.languages;var w=S[b],_={};for(var P in w)if(w.hasOwnProperty(P)){if(P==C)for(var k in x)x.hasOwnProperty(k)&&(_[k]=x[k]);x.hasOwnProperty(P)||(_[P]=w[P])}var I=S[b];return S[b]=_,l.languages.DFS(l.languages,function(F,M){M===I&&F!=b&&(this[F]=_)}),_},DFS:function b(C,x,S,w){w=w||{};var _=l.util.objId;for(var P in C)if(C.hasOwnProperty(P)){x.call(C,P,C[P],S||P);var k=C[P],I=l.util.type(k);I==="Object"&&!w[_(k)]?(w[_(k)]=!0,b(k,x,null,w)):I==="Array"&&!w[_(k)]&&(w[_(k)]=!0,b(k,x,P,w))}}},plugins:{},highlightAll:function(b,C){l.highlightAllUnder(document,b,C)},highlightAllUnder:function(b,C,x){var S={callback:x,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",S),S.elements=Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)),l.hooks.run("before-all-elements-highlight",S);for(var w=0,_;_=S.elements[w++];)l.highlightElement(_,C===!0,S.callback)},highlightElement:function(b,C,x){var S=l.util.getLanguage(b),w=l.languages[S];l.util.setLanguage(b,S);var _=b.parentElement;_&&_.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(_,S);var P=b.textContent,k={element:b,language:S,grammar:w,code:P};function I(M){k.highlightedCode=M,l.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,l.hooks.run("after-highlight",k),l.hooks.run("complete",k),x&&x.call(k.element)}if(l.hooks.run("before-sanity-check",k),_=k.element.parentElement,_&&_.nodeName.toLowerCase()==="pre"&&!_.hasAttribute("tabindex")&&_.setAttribute("tabindex","0"),!k.code){l.hooks.run("complete",k),x&&x.call(k.element);return}if(l.hooks.run("before-highlight",k),!k.grammar){I(l.util.encode(k.code));return}if(C&&r.Worker){var F=new Worker(l.filename);F.onmessage=function(M){I(M.data)},F.postMessage(JSON.stringify({language:k.language,code:k.code,immediateClose:!0}))}else I(l.highlight(k.code,k.grammar,k.language))},highlight:function(b,C,x){var S={code:b,grammar:C,language:x};if(l.hooks.run("before-tokenize",S),!S.grammar)throw new Error('The language "'+S.language+'" has no grammar.');return S.tokens=l.tokenize(S.code,S.grammar),l.hooks.run("after-tokenize",S),u.stringify(l.util.encode(S.tokens),S.language)},tokenize:function(b,C){var x=C.rest;if(x){for(var S in x)C[S]=x[S];delete C.rest}var w=new d;return f(w,w.head,b),c(b,w,C,w.head,0),g(w)},hooks:{all:{},add:function(b,C){var x=l.hooks.all;x[b]=x[b]||[],x[b].push(C)},run:function(b,C){var x=l.hooks.all[b];if(!(!x||!x.length))for(var S=0,w;w=x[S++];)w(C)}},Token:u};r.Prism=l;function u(b,C,x,S){this.type=b,this.content=C,this.alias=x,this.length=(S||"").length|0}u.stringify=function b(C,x){if(typeof C=="string")return C;if(Array.isArray(C)){var S="";return C.forEach(function(I){S+=b(I,x)}),S}var w={type:C.type,content:b(C.content,x),tag:"span",classes:["token",C.type],attributes:{},language:x},_=C.alias;_&&(Array.isArray(_)?Array.prototype.push.apply(w.classes,_):w.classes.push(_)),l.hooks.run("wrap",w);var P="";for(var k in w.attributes)P+=" "+k+'="'+(w.attributes[k]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+P+">"+w.content+"</"+w.tag+">"};function s(b,C,x,S){b.lastIndex=C;var w=b.exec(x);if(w&&S&&w[1]){var _=w[1].length;w.index+=_,w[0]=w[0].slice(_)}return w}function c(b,C,x,S,w,_){for(var P in x)if(!(!x.hasOwnProperty(P)||!x[P])){var k=x[P];k=Array.isArray(k)?k:[k];for(var I=0;I<k.length;++I){if(_&&_.cause==P+","+I)return;var F=k[I],M=F.inside,T=!!F.lookbehind,N=!!F.greedy,j=F.alias;if(N&&!F.pattern.global){var $=F.pattern.toString().match(/[imsuy]*$/)[0];F.pattern=RegExp(F.pattern.source,$+"g")}for(var A=F.pattern||F,E=S.next,L=w;E!==C.tail&&!(_&&L>=_.reach);L+=E.value.length,E=E.next){var B=E.value;if(C.length>b.length)return;if(!(B instanceof u)){var K=1,H;if(N){if(H=s(A,L,b,T),!H||H.index>=b.length)break;var Q=H.index,Z=H.index+H[0].length,Y=L;for(Y+=E.value.length;Q>=Y;)E=E.next,Y+=E.value.length;if(Y-=E.value.length,L=Y,E.value instanceof u)continue;for(var G=E;G!==C.tail&&(Y<Z||typeof G.value=="string");G=G.next)K++,Y+=G.value.length;K--,B=b.slice(L,Y),H.index-=L}else if(H=s(A,0,B,T),!H)continue;var Q=H.index,z=H[0],J=B.slice(0,Q),ne=B.slice(Q+z.length),oe=L+B.length;_&&oe>_.reach&&(_.reach=oe);var ce=E.prev;J&&(ce=f(C,ce,J),L+=J.length),p(C,ce,K);var se=new u(P,M?l.tokenize(z,M):z,j,z);if(E=f(C,ce,se),ne&&f(C,E,ne),K>1){var V={cause:P+","+I,reach:oe};c(b,C,x,E.prev,L,V),_&&V.reach>_.reach&&(_.reach=V.reach)}}}}}}function d(){var b={value:null,prev:null,next:null},C={value:null,prev:b,next:null};b.next=C,this.head=b,this.tail=C,this.length=0}function f(b,C,x){var S=C.next,w={value:x,prev:C,next:S};return C.next=w,S.prev=w,b.length++,w}function p(b,C,x){for(var S=C.next,w=0;w<x&&S!==b.tail;w++)S=S.next;C.next=S,S.prev=C,b.length-=w}function g(b){for(var C=[],x=b.head.next;x!==b.tail;)C.push(x.value),x=x.next;return C}if(!r.document)return r.addEventListener&&(l.disableWorkerMessageHandler||r.addEventListener("message",function(b){var C=JSON.parse(b.data),x=C.language,S=C.code,w=C.immediateClose;r.postMessage(l.highlight(S,l.languages[x],x)),w&&r.close()},!1)),l;var y=l.util.currentScript();y&&(l.filename=y.src,y.hasAttribute("data-manual")&&(l.manual=!0));function h(){l.manual||l.highlightAll()}if(!l.manual){var m=document.readyState;m==="loading"||m==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return l}(e);n.exports&&(n.exports=t),typeof Qr<"u"&&(Qr.Prism=t)})(h8);const Bv=h8.exports;Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(n){var e=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,t=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(/(^|[^\w.])/.source+t+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};n.languages.java=n.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp(/(^|[^\w.])/.source+t+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:r.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+t+/[A-Z]\w*\b/.source),lookbehind:!0,inside:r.inside}],keyword:e,function:[n.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),n.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),n.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:e,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+t+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+t+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return e.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var n="line-numbers",e=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(o,l){if(!(o.tagName!=="PRE"||!o.classList.contains(n))){var u=o.querySelector(".line-numbers-rows");if(!!u){var s=parseInt(o.getAttribute("data-start"),10)||1,c=s+(u.children.length-1);l<s&&(l=s),l>c&&(l=c);var d=l-s;return u.children[d]}}},resize:function(o){r([o])},assumeViewportIndependence:!0};function r(o){if(o=o.filter(function(u){var s=a(u),c=s["white-space"];return c==="pre-wrap"||c==="pre-line"}),o.length!=0){var l=o.map(function(u){var s=u.querySelector("code"),c=u.querySelector(".line-numbers-rows");if(!(!s||!c)){var d=u.querySelector(".line-numbers-sizer"),f=s.textContent.split(e);d||(d=document.createElement("span"),d.className="line-numbers-sizer",s.appendChild(d)),d.innerHTML="0",d.style.display="block";var p=d.getBoundingClientRect().height;return d.innerHTML="",{element:u,lines:f,lineHeights:[],oneLinerHeight:p,sizer:d}}}).filter(Boolean);l.forEach(function(u){var s=u.sizer,c=u.lines,d=u.lineHeights,f=u.oneLinerHeight;d[c.length-1]=void 0,c.forEach(function(p,g){if(p&&p.length>1){var y=s.appendChild(document.createElement("span"));y.style.display="block",y.textContent=p}else d[g]=f})}),l.forEach(function(u){for(var s=u.sizer,c=u.lineHeights,d=0,f=0;f<c.length;f++)c[f]===void 0&&(c[f]=s.children[d++].getBoundingClientRect().height)}),l.forEach(function(u){var s=u.sizer,c=u.element.querySelector(".line-numbers-rows");s.style.display="none",s.innerHTML="",u.lineHeights.forEach(function(d,f){c.children[f].style.height=d+"px"})})}}function a(o){return o?window.getComputedStyle?getComputedStyle(o):o.currentStyle||null:null}var i=void 0;window.addEventListener("resize",function(){t.assumeViewportIndependence&&i===window.innerWidth||(i=window.innerWidth,r(Array.prototype.slice.call(document.querySelectorAll("pre."+n))))}),Prism.hooks.add("complete",function(o){if(!!o.code){var l=o.element,u=l.parentNode;if(!(!u||!/pre/i.test(u.nodeName))&&!l.querySelector(".line-numbers-rows")&&!!Prism.util.isActive(l,n)){l.classList.remove(n),u.classList.add(n);var s=o.code.match(e),c=s?s.length+1:1,d,f=new Array(c+1).join("<span></span>");d=document.createElement("span"),d.setAttribute("aria-hidden","true"),d.className="line-numbers-rows",d.innerHTML=f,u.hasAttribute("data-start")&&(u.style.counterReset="linenumber "+(parseInt(u.getAttribute("data-start"),10)-1)),o.element.appendChild(d),r([u]),Prism.hooks.run("line-numbers",o)}}}),Prism.hooks.add("line-numbers",function(o){o.plugins=o.plugins||{},o.plugins.lineNumbers=!0})})();const vte=["innerHTML"],kl=ae({__name:"CodeContent",props:{code:{type:String,require:!0},type:{type:String,require:!0},lineNumbers:{type:Boolean,default:!1}},setup(n){return Ye(()=>{Bv.highlightAll()}),(e,t)=>(Sn(),Va("div",{class:Wl(n.lineNumbers?"line-numbers":"")},[Qa("pre",{style:{background:"#fff"},class:Wl(`language-${n.type}`)},[Qa("code",{innerHTML:Xe(Bv).highlight(n.code,Xe(Bv).languages[n.type],n.type)},null,8,vte)],2)],2))}}),pte=ae({__name:"CodeItem",props:["data"],emits:["openCode"],setup(n,{emit:e}){const t=n,r=Jn(),a=r==null?void 0:r.proxy,i=a==null?void 0:a.$config,o=a==null?void 0:a.$db,l=q((o==null?void 0:o.type)[t.data[0]]);function u(p){let g=p.split(`
`),y=0,h=g.length-1,m=RegExp(i==null?void 0:i.startFlag),b=RegExp(i==null?void 0:i.endFlag);for(;y<g.length&&!m.test(g[y]);)y++;for(y++;h>=0&&!b.test(g[h]);)h--;return g.slice(y,h)}function s(){e("openCode")}function c(p){return p.length>6?p.slice(0,6).join(`
`)+`
...
`:p.join(`
`)}function d(){a.$copyText((o==null?void 0:o.code)[t.data[0]]).then(()=>{kr.success("Copy all succeeded.")},()=>{kr.error("Copy all failed.")})}function f(){a.$copyText(u((o==null?void 0:o.code)[t.data[0]]).join(`
`)).then(()=>{kr.success("Copy key succeeded.")},()=>{kr.error("Copy key failed.")})}return(p,g)=>{const y=$n("a-avatar"),h=$n("a-card-meta"),m=$n("a-card");return Sn(),An(m,{hoverable:"",style:{"margin-bottom":"20px"}},{cover:Tn(()=>{var b;return[Qa("div",{style:{margin:"0px 2%",width:"96%"},onClick:s},[v(kl,{type:l.value,code:c(u(((b=Xe(o))==null?void 0:b.code)[t.data[0]]))},null,8,["type","code"])])]}),actions:Tn(()=>[v(Xe(Su),{key:"eye",onClick:s}),v(Xe(XS),{key:"copy_key",onClick:f}),v(Xe(ug),{key:"copy",onClick:d})]),default:Tn(()=>[v(h,{title:`Number: ${t.data[1]}`,description:Xe(o).name[t.data[0]]},{avatar:Tn(()=>[v(y,{src:Xe(i).authorImg},null,8,["src"])]),_:1},8,["title","description"])]),_:1})}}}),hte={style:{margin:"0px 2%",width:"96%"}},gte=ae({__name:"CodeShow",props:["data"],setup(n){const e=n,t=Jn(),r=t==null?void 0:t.proxy,a=r==null?void 0:r.$config,i=r==null?void 0:r.$db,o=q((i==null?void 0:i.type)[e.data[0]]),l=q(!0),u=q(!0);function s(){l.value=!l.value}function c(){u.value=!u.value}function d(g){let y=g.split(`
`),h=0,m=y.length-1,b=RegExp(a==null?void 0:a.startFlag),C=RegExp(a==null?void 0:a.endFlag);for(;h<y.length&&!b.test(y[h]);)h++;for(h++;m>=0&&!C.test(y[m]);)m--;return y.slice(h,m).join(`
`)}function f(){r.$copyText((i==null?void 0:i.code)[e.data[0]]).then(()=>{kr.success("Copy all succeeded.")},()=>{kr.error("Copy all failed.")})}function p(){r.$copyText(d((i==null?void 0:i.code)[e.data[0]])).then(()=>{kr.success("Copy key succeeded.")},()=>{kr.error("Copy key failed.")})}return(g,y)=>{const h=$n("a-space"),m=$n("a-card");return Sn(),An(m,null,{title:Tn(()=>[v(h,{size:15},{default:Tn(()=>[l.value?(Sn(),An(Xe(Su),{key:"eye",onClick:s})):mt("",!0),l.value?mt("",!0):(Sn(),An(Xe(QS),{key:1,onClick:s})),u.value?(Sn(),An(Xe(VI),{key:2,onClick:c})):mt("",!0),u.value?mt("",!0):(Sn(),An(Xe(N9),{key:3,onClick:c})),v(Xe(XS),{key:"copy_key",onClick:p}),v(Xe(ug),{key:"copy",onClick:f})]),_:1})]),cover:Tn(()=>{var b,C,x,S;return[Qa("div",hte,[!l.value&&!u.value?(Sn(),An(kl,{key:0,type:o.value,code:d(((b=Xe(i))==null?void 0:b.code)[e.data[0]])},null,8,["type","code"])):mt("",!0),l.value&&!u.value?(Sn(),An(kl,{key:1,type:o.value,code:((C=Xe(i))==null?void 0:C.code)[e.data[0]]},null,8,["type","code"])):mt("",!0),!l.value&&u.value?(Sn(),An(kl,{key:2,"line-numbers":u.value,type:o.value,code:d(((x=Xe(i))==null?void 0:x.code)[e.data[0]])},null,8,["line-numbers","type","code"])):mt("",!0),l.value&&u.value?(Sn(),An(kl,{key:3,"line-numbers":u.value,type:o.value,code:((S=Xe(i))==null?void 0:S.code)[e.data[0]]},null,8,["line-numbers","type","code"])):mt("",!0)])]}),_:1})}}}),Mw=ae({__name:"CodeMenu",props:{menuData:null,selectedKeys:null,openKeys:null},emits:["selectedKeysUpdate"],setup(n,{emit:e}){const t=n,r=q(t.menuData),a=q(t.selectedKeys),i=q(t.openKeys);Pe(t,async u=>{r.value=u.menuData,a.value=u.selectedKeys,i.value=u.openKeys}),Pe(a,async u=>{e("selectedKeysUpdate",u[0])});function o(u){return u.length===1?"Number: "+u[0][1]:"Number: "+u[0][1]+"-"+u[u.length-1][1]}function l(u){return u.length===1&&u[0].length==1?"Title No.:"+u[0][0]:"Title No.:"+u[0][0][1]+"-"+u[u.length-1][u[u.length-1].length-1][1]}return(u,s)=>{const c=$n("a-menu-item"),d=$n("a-sub-menu"),f=$n("a-menu");return Sn(),An(f,{mode:"inline",selectedKeys:a.value,"onUpdate:selectedKeys":s[0]||(s[0]=p=>a.value=p),openKeys:i.value,"onUpdate:openKeys":s[1]||(s[1]=p=>i.value=p)},{default:Tn(()=>[(Sn(!0),Va(qe,null,pc(r.value,p=>(Sn(),An(d,{key:p},{title:Tn(()=>[tt(mo(l(p)),1)]),default:Tn(()=>[(Sn(!0),Va(qe,null,pc(p,g=>(Sn(),An(c,{key:g},{default:Tn(()=>[tt(mo(o(g)),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1},8,["selectedKeys","openKeys"])}}}),mte=tt("Search"),yte=ae({__name:"CodeDrawerMenu",emits:["closeDrawerMenu"],setup(n,{emit:e}){const t=q(!0);function r(){e("closeDrawerMenu")}return(a,i)=>{const o=$n("a-menu-item"),l=$n("a-sub-menu"),u=$n("a-menu"),s=$n("a-drawer");return Sn(),An(s,{placement:"left",closable:!1,visible:t.value,onClose:r,width:"280"},{default:Tn(()=>[v(n4,{theme:"light"}),v(u,{mode:"inline"},{default:Tn(()=>[v(l,null,{title:Tn(()=>[mte]),default:Tn(()=>[v(o,null,{default:Tn(()=>[v(t4)]),_:1})]),_:1})]),_:1}),md(a.$slots,"default")]),_:3},8,["visible"])}}}),bte=tt("Home"),Cte=tt("All"),xte=ae({__name:"CodeMain",emits:["resize"],setup(n,{emit:e}){const t=Jn(),r=t==null?void 0:t.proxy,a=r==null?void 0:r.$bus,i=r==null?void 0:r.$config,o=r==null?void 0:r.$db,l=q(!1);function u(){l.value=!l.value}let s=q(0),c=q(!1),d=q([0,0]),f=q(!1);function p(S){let w="number";S!==0&&(w=o==null?void 0:o.allTypes[S-1]);let _=o==null?void 0:o[w],P=[],k=i==null?void 0:i.menuSpace,I=i==null?void 0:i.itemSpace,F=0;for(;F*k*I<_.length;){let M=[],T=0;for(;F*k*I+T*I<_.length&&T<k;){let N=0,j=[];for(;F*k*I+T*I+N<_.length&&N<I;)j.push(_[F*k*I+T*I+N]),N++;T++,M.push(j)}F++,P.push(M)}return P}const g=S=>{s.value=S,h.value=p(S),m.value=h.value[0][0],c.value=!1};function y(){const S=document.body.clientWidth;S<650&&!f.value?(f.value=!0,l.value=!1,g(0)):S>=650&&f.value&&(f.value=!1,l.value=!1,g(0)),e("resize",f.value)}window.onresize=y;let h=q(p(s.value));const m=q(h.value[0][0]);function b(S){m.value=S}Ye(()=>{y()}),a==null||a.on("menuItemId",g),a==null||a.on("searchId",S=>{C(S)});function C(S){d.value=S,c.value=!0}function x(){c.value=!1}return(S,w)=>{const _=$n("a-breadcrumb-item"),P=$n("a-breadcrumb"),k=$n("a-layout-sider"),I=$n("a-button"),F=$n("a-affix"),M=$n("a-layout-content"),T=$n("a-layout"),N=$n("a-page-header"),j=$n("a-layout-footer");return Sn(),Va(qe,null,[v(M,{style:rd(Xe(f)?"padding: 0;":"padding: 0 50px;")},{default:Tn(()=>[Xe(f)?mt("",!0):(Sn(),An(P,{key:0,style:{margin:"16px 0"}},{default:Tn(()=>[v(_,null,{default:Tn(()=>[bte]),_:1}),Xe(c)?(Sn(),Va(qe,{key:1},[v(_,null,{default:Tn(()=>[tt(mo(Xe(i).codeMessage[Xe(o).type[Xe(d)[0]]].name),1)]),_:1}),v(_,null,{default:Tn(()=>[tt(mo(Xe(o).name[Xe(d)[0]]),1)]),_:1})],64)):(Sn(),Va(qe,{key:0},[Xe(s)==0?(Sn(),An(_,{key:0},{default:Tn(()=>[Cte]),_:1})):mt("",!0),Xe(s)!=0?(Sn(),An(_,{key:1},{default:Tn(()=>[tt(mo(Xe(i).codeMessage[Xe(o).allTypes[Xe(s)-1]].name),1)]),_:1})):mt("",!0)],64))]),_:1})),Xe(c)?mt("",!0):(Sn(),An(T,{key:1,style:{padding:"24px 0",background:"#fff"}},{default:Tn(()=>[Xe(f)?mt("",!0):(Sn(),An(k,{key:0,width:"200",style:{background:"#fff"}},{default:Tn(()=>[v(Mw,{"menu-data":Xe(h),"selected-keys":[Xe(h)[0][0]],"open-keys":[Xe(h)[0]],onSelectedKeysUpdate:b},null,8,["menu-data","selected-keys","open-keys"])]),_:1})),l.value?(Sn(),An(yte,{key:1,onCloseDrawerMenu:u},{default:Tn(()=>[v(Mw,{"menu-data":Xe(h),"selected-keys":[Xe(h)[0][0]],"open-keys":[Xe(h)[0]],onSelectedKeysUpdate:b},null,8,["menu-data","selected-keys","open-keys"])]),_:1})):mt("",!0),Xe(f)?(Sn(),An(F,{key:2,"offset-top":50},{default:Tn(()=>[v(I,{onClick:u},{icon:Tn(()=>[v(Xe(AI))]),_:1})]),_:1})):mt("",!0),v(M,{style:{padding:"0 24px",minHeight:"280px"}},{default:Tn(()=>[(Sn(!0),Va(qe,null,pc(m.value,($,A)=>(Sn(),An(pte,{key:A,onOpenCode:E=>C($),data:$},null,8,["onOpenCode","data"]))),128))]),_:1})]),_:1})),Xe(c)?(Sn(),An(T,{key:2,style:{background:"#fff",padding:"0px 24px 24px 24px"}},{default:Tn(()=>[v(N,{title:Xe(o).name[Xe(d)[0]],"sub-title":`Number: ${Xe(d)[1]}`,onBack:x},null,8,["title","sub-title"]),v(gte,{data:Xe(d)},null,8,["data"])]),_:1})):mt("",!0)]),_:1},8,["style"]),Xe(f)?mt("",!0):(Sn(),An(j,{key:0,style:{"text-align":"center"}}))],64)}}}),wte=ae({__name:"App",setup(n){let e=q(!1);function t(r){e.value=r}return(r,a)=>{const i=$n("a-layout");return Sn(),An(i,null,{default:Tn(()=>[Xe(e)?mt("",!0):(Sn(),An(J9,{key:0})),v(xte,{onResize:t})]),_:1})}}});function Ste(n){return{all:n=n||new Map,on:function(e,t){var r=n.get(e);r?r.push(t):n.set(e,[t])},off:function(e,t){var r=n.get(e);r&&(t?r.splice(r.indexOf(t)>>>0,1):n.set(e,[]))},emit:function(e,t){var r=n.get(e);r&&r.slice().map(function(a){a(t)}),(r=n.get("*"))&&r.slice().map(function(a){a(e,t)})}}}const _te=Ste();var g8={exports:{}},m8={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(n,e){(function(t,r){n.exports=r()})(Qr,function(){return r={686:function(i,c,l){l.d(c,{default:function(){return P}});var c=l(279),u=l.n(c),c=l(370),s=l.n(c),c=l(817),d=l.n(c);function f(k){try{return document.execCommand(k)}catch{return}}var p=function(k){return k=d()(k),f("cut"),k};function g(T,I){var F,M,T=(F=T,M=document.documentElement.getAttribute("dir")==="rtl",(T=document.createElement("textarea")).style.fontSize="12pt",T.style.border="0",T.style.padding="0",T.style.margin="0",T.style.position="absolute",T.style[M?"right":"left"]="-9999px",M=window.pageYOffset||document.documentElement.scrollTop,T.style.top="".concat(M,"px"),T.setAttribute("readonly",""),T.value=F,T);return I.container.appendChild(T),I=d()(T),f("copy"),T.remove(),I}var y=function(k){var I=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body},F="";return typeof k=="string"?F=g(k,I):k instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(k==null?void 0:k.type)?F=g(k.value,I):(F=d()(k),f("copy")),F};function h(k){return(h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I})(k)}var m=function(){var M=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},F=M.action,k=F===void 0?"copy":F,I=M.container,F=M.target,M=M.text;if(k!=="copy"&&k!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(F!==void 0){if(!F||h(F)!=="object"||F.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(k==="copy"&&F.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(k==="cut"&&(F.hasAttribute("readonly")||F.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}return M?y(M,{container:I}):F?k==="cut"?p(F):y(F,{container:I}):void 0};function b(k){return(b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I})(k)}function C(k,I){for(var F=0;F<I.length;F++){var M=I[F];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(k,M.key,M)}}function x(k,I){return(x=Object.setPrototypeOf||function(F,M){return F.__proto__=M,F})(k,I)}function S(k){var I=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var F,M=w(k);return F=I?(F=w(this).constructor,Reflect.construct(M,arguments,F)):M.apply(this,arguments),M=this,!(F=F)||b(F)!=="object"&&typeof F!="function"?function(T){if(T!==void 0)return T;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(M):F}}function w(k){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(I){return I.__proto__||Object.getPrototypeOf(I)})(k)}function _(k,I){if(k="data-clipboard-".concat(k),I.hasAttribute(k))return I.getAttribute(k)}var P=function(){(function(N,j){if(typeof j!="function"&&j!==null)throw new TypeError("Super expression must either be null or a function");N.prototype=Object.create(j&&j.prototype,{constructor:{value:N,writable:!0,configurable:!0}}),j&&x(N,j)})(T,u());var k,I,F,M=S(T);function T(N,j){var $;return function(A){if(!(A instanceof T))throw new TypeError("Cannot call a class as a function")}(this),($=M.call(this)).resolveOptions(j),$.listenClick(N),$}return k=T,F=[{key:"copy",value:function(N){var j=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body};return y(N,j)}},{key:"cut",value:function(N){return p(N)}},{key:"isSupported",value:function(){var N=0<arguments.length&&arguments[0]!==void 0?arguments[0]:["copy","cut"],N=typeof N=="string"?[N]:N,j=!!document.queryCommandSupported;return N.forEach(function($){j=j&&!!document.queryCommandSupported($)}),j}}],(I=[{key:"resolveOptions",value:function(){var N=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof N.action=="function"?N.action:this.defaultAction,this.target=typeof N.target=="function"?N.target:this.defaultTarget,this.text=typeof N.text=="function"?N.text:this.defaultText,this.container=b(N.container)==="object"?N.container:document.body}},{key:"listenClick",value:function(N){var j=this;this.listener=s()(N,"click",function($){return j.onClick($)})}},{key:"onClick",value:function(A){var j=A.delegateTarget||A.currentTarget,$=this.action(j)||"copy",A=m({action:$,container:this.container,target:this.target(j),text:this.text(j)});this.emit(A?"success":"error",{action:$,text:A,trigger:j,clearSelection:function(){j&&j.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(N){return _("action",N)}},{key:"defaultTarget",value:function(N){if(N=_("target",N),N)return document.querySelector(N)}},{key:"defaultText",value:function(N){return _("text",N)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&C(k.prototype,I),F&&C(k,F),T}()},828:function(i){var o;typeof Element>"u"||Element.prototype.matches||((o=Element.prototype).matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector),i.exports=function(l,u){for(;l&&l.nodeType!==9;){if(typeof l.matches=="function"&&l.matches(u))return l;l=l.parentNode}}},438:function(i,o,l){var u=l(828);function s(c,d,f,p,g){var y=function(h,m,b,C){return function(x){x.delegateTarget=u(x.target,m),x.delegateTarget&&C.call(h,x)}}.apply(this,arguments);return c.addEventListener(f,y,g),{destroy:function(){c.removeEventListener(f,y,g)}}}i.exports=function(c,d,f,p,g){return typeof c.addEventListener=="function"?s.apply(null,arguments):typeof f=="function"?s.bind(null,document).apply(null,arguments):(typeof c=="string"&&(c=document.querySelectorAll(c)),Array.prototype.map.call(c,function(y){return s(y,d,f,p,g)}))}},879:function(i,o){o.node=function(l){return l!==void 0&&l instanceof HTMLElement&&l.nodeType===1},o.nodeList=function(l){var u=Object.prototype.toString.call(l);return l!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in l&&(l.length===0||o.node(l[0]))},o.string=function(l){return typeof l=="string"||l instanceof String},o.fn=function(l){return Object.prototype.toString.call(l)==="[object Function]"}},370:function(i,o,l){var u=l(879),s=l(438);i.exports=function(c,d,f){if(!c&&!d&&!f)throw new Error("Missing required arguments");if(!u.string(d))throw new TypeError("Second argument must be a String");if(!u.fn(f))throw new TypeError("Third argument must be a Function");if(u.node(c))return m=d,b=f,(h=c).addEventListener(m,b),{destroy:function(){h.removeEventListener(m,b)}};if(u.nodeList(c))return p=c,g=d,y=f,Array.prototype.forEach.call(p,function(C){C.addEventListener(g,y)}),{destroy:function(){Array.prototype.forEach.call(p,function(C){C.removeEventListener(g,y)})}};if(u.string(c))return c=c,d=d,f=f,s(document.body,c,d,f);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var p,g,y,h,m,b}},817:function(i){i.exports=function(o){var l,u=o.nodeName==="SELECT"?(o.focus(),o.value):o.nodeName==="INPUT"||o.nodeName==="TEXTAREA"?((l=o.hasAttribute("readonly"))||o.setAttribute("readonly",""),o.select(),o.setSelectionRange(0,o.value.length),l||o.removeAttribute("readonly"),o.value):(o.hasAttribute("contenteditable")&&o.focus(),u=window.getSelection(),(l=document.createRange()).selectNodeContents(o),u.removeAllRanges(),u.addRange(l),u.toString());return u}},279:function(i){function o(){}o.prototype={on:function(l,u,s){var c=this.e||(this.e={});return(c[l]||(c[l]=[])).push({fn:u,ctx:s}),this},once:function(l,u,s){var c=this;function d(){c.off(l,d),u.apply(s,arguments)}return d._=u,this.on(l,d,s)},emit:function(l){for(var u=[].slice.call(arguments,1),s=((this.e||(this.e={}))[l]||[]).slice(),c=0,d=s.length;c<d;c++)s[c].fn.apply(s[c].ctx,u);return this},off:function(l,u){var s=this.e||(this.e={}),c=s[l],d=[];if(c&&u)for(var f=0,p=c.length;f<p;f++)c[f].fn!==u&&c[f].fn._!==u&&d.push(c[f]);return d.length?s[l]=d:delete s[l],this}},i.exports=o,i.exports.TinyEmitter=o}},a={},t.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(o,{a:o}),o},t.d=function(i,o){for(var l in o)t.o(o,l)&&!t.o(i,l)&&Object.defineProperty(i,l,{enumerable:!0,get:o[l]})},t.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},t(686).default;function t(i){if(a[i])return a[i].exports;var o=a[i]={exports:{}};return r[i](o,o.exports,t),o.exports}var r,a})})(m8);(function(n,e){var t=m8.exports,r={autoSetContainer:!1,appendToBody:!0},a={install:function(i){var o=i.version.slice(0,2)==="3."?i.config.globalProperties:i.prototype;o.$clipboardConfig=r,o.$copyText=function(l,u){return new Promise(function(s,c){var d=document.createElement("button"),f=new t(d,{text:function(){return l},action:function(){return"copy"},container:typeof u=="object"?u:document.body});f.on("success",function(p){f.destroy(),s(p)}),f.on("error",function(p){f.destroy(),c(p)}),r.appendToBody&&document.body.appendChild(d),d.click(),r.appendToBody&&document.body.removeChild(d)})},i.directive("clipboard",{bind:function(l,u,s){if(u.arg==="success")l._vClipboard_success=u.value;else if(u.arg==="error")l._vClipboard_error=u.value;else{var c=new t(l,{text:function(){return u.value},action:function(){return u.arg==="cut"?"cut":"copy"},container:r.autoSetContainer?l:void 0});c.on("success",function(d){var f=l._vClipboard_success;f&&f(d)}),c.on("error",function(d){var f=l._vClipboard_error;f&&f(d)}),l._vClipboard=c}},update:function(l,u){u.arg==="success"?l._vClipboard_success=u.value:u.arg==="error"?l._vClipboard_error=u.value:(l._vClipboard.text=function(){return u.value},l._vClipboard.action=function(){return u.arg==="cut"?"cut":"copy"})},unbind:function(l,u){!l._vClipboard||(u.arg==="success"?delete l._vClipboard_success:u.arg==="error"?delete l._vClipboard_error:(l._vClipboard.destroy(),delete l._vClipboard))}})},config:r};n.exports=a})(g8);const y8=g8.exports,tl=VS(wte);tl.config.globalProperties.$bus=_te;tl.config.globalProperties.$db=y5;tl.config.globalProperties.$config=b5;y8.config.autoSetContainer=!0;tl.use(y8);tl.use(fte);tl.mount("#app")});export default kte();