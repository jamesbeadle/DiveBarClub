var Cr={},j={};j.byteLength=_r;j.toByteArray=kr;j.fromByteArray=Dr;var S=[],R=[],Nr=typeof Uint8Array<"u"?Uint8Array:Array,q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var M=0,Sr=q.length;M<Sr;++M)S[M]=q[M],R[q.charCodeAt(M)]=M;R[45]=62;R[95]=63;function ur(p){var c=p.length;if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=p.indexOf("=");y===-1&&(y=c);var l=y===c?0:4-y%4;return[y,l]}function _r(p){var c=ur(p),y=c[0],l=c[1];return(y+l)*3/4-l}function br(p,c,y){return(c+y)*3/4-y}function kr(p){var c,y=ur(p),l=y[0],a=y[1],f=new Nr(br(p,l,a)),s=0,o=a>0?l-4:l,x;for(x=0;x<o;x+=4)c=R[p.charCodeAt(x)]<<18|R[p.charCodeAt(x+1)]<<12|R[p.charCodeAt(x+2)]<<6|R[p.charCodeAt(x+3)],f[s++]=c>>16&255,f[s++]=c>>8&255,f[s++]=c&255;return a===2&&(c=R[p.charCodeAt(x)]<<2|R[p.charCodeAt(x+1)]>>4,f[s++]=c&255),a===1&&(c=R[p.charCodeAt(x)]<<10|R[p.charCodeAt(x+1)]<<4|R[p.charCodeAt(x+2)]>>2,f[s++]=c>>8&255,f[s++]=c&255),f}function Lr(p){return S[p>>18&63]+S[p>>12&63]+S[p>>6&63]+S[p&63]}function Mr(p,c,y){for(var l,a=[],f=c;f<y;f+=3)l=(p[f]<<16&16711680)+(p[f+1]<<8&65280)+(p[f+2]&255),a.push(Lr(l));return a.join("")}function Dr(p){for(var c,y=p.length,l=y%3,a=[],f=16383,s=0,o=y-l;s<o;s+=f)a.push(Mr(p,s,s+f>o?o:s+f));return l===1?(c=p[y-1],a.push(S[c>>2]+S[c<<4&63]+"==")):l===2&&(c=(p[y-2]<<8)+p[y-1],a.push(S[c>>10]+S[c>>4&63]+S[c<<2&63]+"=")),a.join("")}var H={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */H.read=function(p,c,y,l,a){var f,s,o=a*8-l-1,x=(1<<o)-1,F=x>>1,g=-7,A=y?a-1:0,C=y?-1:1,B=p[c+A];for(A+=C,f=B&(1<<-g)-1,B>>=-g,g+=o;g>0;f=f*256+p[c+A],A+=C,g-=8);for(s=f&(1<<-g)-1,f>>=-g,g+=l;g>0;s=s*256+p[c+A],A+=C,g-=8);if(f===0)f=1-F;else{if(f===x)return s?NaN:(B?-1:1)*(1/0);s=s+Math.pow(2,l),f=f-F}return(B?-1:1)*s*Math.pow(2,f-l)};H.write=function(p,c,y,l,a,f){var s,o,x,F=f*8-a-1,g=(1<<F)-1,A=g>>1,C=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,B=l?0:f-1,D=l?1:-1,$=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(o=isNaN(c)?1:0,s=g):(s=Math.floor(Math.log(c)/Math.LN2),c*(x=Math.pow(2,-s))<1&&(s--,x*=2),s+A>=1?c+=C/x:c+=C*Math.pow(2,1-A),c*x>=2&&(s++,x/=2),s+A>=g?(o=0,s=g):s+A>=1?(o=(c*x-1)*Math.pow(2,a),s=s+A):(o=c*Math.pow(2,A-1)*Math.pow(2,a),s=0));a>=8;p[y+B]=o&255,B+=D,o/=256,a-=8);for(s=s<<a|o,F+=a;F>0;p[y+B]=s&255,B+=D,s/=256,F-=8);p[y+B-D]|=$*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(p){const c=j,y=H,l=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=o,p.SlowBuffer=fr,p.INSPECT_MAX_BYTES=50;const a=2147483647;p.kMaxLength=a,o.TYPED_ARRAY_SUPPORT=f(),!o.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function f(){try{const n=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(n,r),n.foo()===42}catch{return!1}}Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}});function s(n){if(n>a)throw new RangeError('The value "'+n+'" is invalid for option "size"');const r=new Uint8Array(n);return Object.setPrototypeOf(r,o.prototype),r}function o(n,r,t){if(typeof n=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return A(n)}return x(n,r,t)}o.poolSize=8192;function x(n,r,t){if(typeof n=="string")return C(n,r);if(ArrayBuffer.isView(n))return D(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(N(n,ArrayBuffer)||n&&N(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(N(n,SharedArrayBuffer)||n&&N(n.buffer,SharedArrayBuffer)))return $(n,r,t);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const i=n.valueOf&&n.valueOf();if(i!=null&&i!==n)return o.from(i,r,t);const e=hr(n);if(e)return e;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return o.from(n[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}o.from=function(n,r,t){return x(n,r,t)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array);function F(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function g(n,r,t){return F(n),n<=0?s(n):r!==void 0?typeof t=="string"?s(n).fill(r,t):s(n).fill(r):s(n)}o.alloc=function(n,r,t){return g(n,r,t)};function A(n){return F(n),s(n<0?0:G(n)|0)}o.allocUnsafe=function(n){return A(n)},o.allocUnsafeSlow=function(n){return A(n)};function C(n,r){if((typeof r!="string"||r==="")&&(r="utf8"),!o.isEncoding(r))throw new TypeError("Unknown encoding: "+r);const t=X(n,r)|0;let i=s(t);const e=i.write(n,r);return e!==t&&(i=i.slice(0,e)),i}function B(n){const r=n.length<0?0:G(n.length)|0,t=s(r);for(let i=0;i<r;i+=1)t[i]=n[i]&255;return t}function D(n){if(N(n,Uint8Array)){const r=new Uint8Array(n);return $(r.buffer,r.byteOffset,r.byteLength)}return B(n)}function $(n,r,t){if(r<0||n.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return r===void 0&&t===void 0?i=new Uint8Array(n):t===void 0?i=new Uint8Array(n,r):i=new Uint8Array(n,r,t),Object.setPrototypeOf(i,o.prototype),i}function hr(n){if(o.isBuffer(n)){const r=G(n.length)|0,t=s(r);return t.length===0||n.copy(t,0,0,r),t}if(n.length!==void 0)return typeof n.length!="number"||W(n.length)?s(0):B(n);if(n.type==="Buffer"&&Array.isArray(n.data))return B(n.data)}function G(n){if(n>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return n|0}function fr(n){return+n!=n&&(n=0),o.alloc(+n)}o.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==o.prototype},o.compare=function(r,t){if(N(r,Uint8Array)&&(r=o.from(r,r.offset,r.byteLength)),N(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),!o.isBuffer(r)||!o.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===t)return 0;let i=r.length,e=t.length;for(let u=0,h=Math.min(i,e);u<h;++u)if(r[u]!==t[u]){i=r[u],e=t[u];break}return i<e?-1:e<i?1:0},o.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(r,t){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return o.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<r.length;++i)t+=r[i].length;const e=o.allocUnsafe(t);let u=0;for(i=0;i<r.length;++i){let h=r[i];if(N(h,Uint8Array))u+h.length>e.length?(o.isBuffer(h)||(h=o.from(h)),h.copy(e,u)):Uint8Array.prototype.set.call(e,h,u);else if(o.isBuffer(h))h.copy(e,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=h.length}return e};function X(n,r){if(o.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||N(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);const t=n.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let e=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return V(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return or(n).length;default:if(e)return i?-1:V(n).length;r=(""+r).toLowerCase(),e=!0}}o.byteLength=X;function cr(n,r,t){let i=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(n||(n="utf8");;)switch(n){case"hex":return gr(this,r,t);case"utf8":case"utf-8":return Z(this,r,t);case"ascii":return Br(this,r,t);case"latin1":case"binary":return Er(this,r,t);case"base64":return wr(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ir(this,r,t);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),i=!0}}o.prototype._isBuffer=!0;function b(n,r,t){const i=n[r];n[r]=n[t],n[t]=i}o.prototype.swap16=function(){const r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<r;t+=2)b(this,t,t+1);return this},o.prototype.swap32=function(){const r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<r;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},o.prototype.swap64=function(){const r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<r;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},o.prototype.toString=function(){const r=this.length;return r===0?"":arguments.length===0?Z(this,0,r):cr.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(r){if(!o.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:o.compare(this,r)===0},o.prototype.inspect=function(){let r="";const t=p.INSPECT_MAX_BYTES;return r=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(r+=" ... "),"<Buffer "+r+">"},l&&(o.prototype[l]=o.prototype.inspect),o.prototype.compare=function(r,t,i,e,u){if(N(r,Uint8Array)&&(r=o.from(r,r.offset,r.byteLength)),!o.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(t===void 0&&(t=0),i===void 0&&(i=r?r.length:0),e===void 0&&(e=0),u===void 0&&(u=this.length),t<0||i>r.length||e<0||u>this.length)throw new RangeError("out of range index");if(e>=u&&t>=i)return 0;if(e>=u)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,e>>>=0,u>>>=0,this===r)return 0;let h=u-e,w=i-t;const m=Math.min(h,w),I=this.slice(e,u),d=r.slice(t,i);for(let E=0;E<m;++E)if(I[E]!==d[E]){h=I[E],w=d[E];break}return h<w?-1:w<h?1:0};function J(n,r,t,i,e){if(n.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,W(t)&&(t=e?0:n.length-1),t<0&&(t=n.length+t),t>=n.length){if(e)return-1;t=n.length-1}else if(t<0)if(e)t=0;else return-1;if(typeof r=="string"&&(r=o.from(r,i)),o.isBuffer(r))return r.length===0?-1:z(n,r,t,i,e);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?e?Uint8Array.prototype.indexOf.call(n,r,t):Uint8Array.prototype.lastIndexOf.call(n,r,t):z(n,[r],t,i,e);throw new TypeError("val must be string, number or Buffer")}function z(n,r,t,i,e){let u=1,h=n.length,w=r.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(n.length<2||r.length<2)return-1;u=2,h/=2,w/=2,t/=2}function m(d,E){return u===1?d[E]:d.readUInt16BE(E*u)}let I;if(e){let d=-1;for(I=t;I<h;I++)if(m(n,I)===m(r,d===-1?0:I-d)){if(d===-1&&(d=I),I-d+1===w)return d*u}else d!==-1&&(I-=I-d),d=-1}else for(t+w>h&&(t=h-w),I=t;I>=0;I--){let d=!0;for(let E=0;E<w;E++)if(m(n,I+E)!==m(r,E)){d=!1;break}if(d)return I}return-1}o.prototype.includes=function(r,t,i){return this.indexOf(r,t,i)!==-1},o.prototype.indexOf=function(r,t,i){return J(this,r,t,i,!0)},o.prototype.lastIndexOf=function(r,t,i){return J(this,r,t,i,!1)};function pr(n,r,t,i){t=Number(t)||0;const e=n.length-t;i?(i=Number(i),i>e&&(i=e)):i=e;const u=r.length;i>u/2&&(i=u/2);let h;for(h=0;h<i;++h){const w=parseInt(r.substr(h*2,2),16);if(W(w))return h;n[t+h]=w}return h}function sr(n,r,t,i){return O(V(r,n.length-t),n,t,i)}function lr(n,r,t,i){return O(Ar(r),n,t,i)}function ar(n,r,t,i){return O(or(r),n,t,i)}function yr(n,r,t,i){return O(Ur(r,n.length-t),n,t,i)}o.prototype.write=function(r,t,i,e){if(t===void 0)e="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")e=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,e===void 0&&(e="utf8")):(e=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const u=this.length-t;if((i===void 0||i>u)&&(i=u),r.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");e||(e="utf8");let h=!1;for(;;)switch(e){case"hex":return pr(this,r,t,i);case"utf8":case"utf-8":return sr(this,r,t,i);case"ascii":case"latin1":case"binary":return lr(this,r,t,i);case"base64":return ar(this,r,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yr(this,r,t,i);default:if(h)throw new TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),h=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function wr(n,r,t){return r===0&&t===n.length?c.fromByteArray(n):c.fromByteArray(n.slice(r,t))}function Z(n,r,t){t=Math.min(n.length,t);const i=[];let e=r;for(;e<t;){const u=n[e];let h=null,w=u>239?4:u>223?3:u>191?2:1;if(e+w<=t){let m,I,d,E;switch(w){case 1:u<128&&(h=u);break;case 2:m=n[e+1],(m&192)===128&&(E=(u&31)<<6|m&63,E>127&&(h=E));break;case 3:m=n[e+1],I=n[e+2],(m&192)===128&&(I&192)===128&&(E=(u&15)<<12|(m&63)<<6|I&63,E>2047&&(E<55296||E>57343)&&(h=E));break;case 4:m=n[e+1],I=n[e+2],d=n[e+3],(m&192)===128&&(I&192)===128&&(d&192)===128&&(E=(u&15)<<18|(m&63)<<12|(I&63)<<6|d&63,E>65535&&E<1114112&&(h=E))}}h===null?(h=65533,w=1):h>65535&&(h-=65536,i.push(h>>>10&1023|55296),h=56320|h&1023),i.push(h),e+=w}return xr(i)}const K=4096;function xr(n){const r=n.length;if(r<=K)return String.fromCharCode.apply(String,n);let t="",i=0;for(;i<r;)t+=String.fromCharCode.apply(String,n.slice(i,i+=K));return t}function Br(n,r,t){let i="";t=Math.min(n.length,t);for(let e=r;e<t;++e)i+=String.fromCharCode(n[e]&127);return i}function Er(n,r,t){let i="";t=Math.min(n.length,t);for(let e=r;e<t;++e)i+=String.fromCharCode(n[e]);return i}function gr(n,r,t){const i=n.length;(!r||r<0)&&(r=0),(!t||t<0||t>i)&&(t=i);let e="";for(let u=r;u<t;++u)e+=Tr[n[u]];return e}function Ir(n,r,t){const i=n.slice(r,t);let e="";for(let u=0;u<i.length-1;u+=2)e+=String.fromCharCode(i[u]+i[u+1]*256);return e}o.prototype.slice=function(r,t){const i=this.length;r=~~r,t=t===void 0?i:~~t,r<0?(r+=i,r<0&&(r=0)):r>i&&(r=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<r&&(t=r);const e=this.subarray(r,t);return Object.setPrototypeOf(e,o.prototype),e};function U(n,r,t){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+r>t)throw new RangeError("Trying to access beyond buffer length")}o.prototype.readUintLE=o.prototype.readUIntLE=function(r,t,i){r=r>>>0,t=t>>>0,i||U(r,t,this.length);let e=this[r],u=1,h=0;for(;++h<t&&(u*=256);)e+=this[r+h]*u;return e},o.prototype.readUintBE=o.prototype.readUIntBE=function(r,t,i){r=r>>>0,t=t>>>0,i||U(r,t,this.length);let e=this[r+--t],u=1;for(;t>0&&(u*=256);)e+=this[r+--t]*u;return e},o.prototype.readUint8=o.prototype.readUInt8=function(r,t){return r=r>>>0,t||U(r,1,this.length),this[r]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(r,t){return r=r>>>0,t||U(r,2,this.length),this[r]|this[r+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(r,t){return r=r>>>0,t||U(r,2,this.length),this[r]<<8|this[r+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(r,t){return r=r>>>0,t||U(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(r,t){return r=r>>>0,t||U(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},o.prototype.readBigUInt64LE=_(function(r){r=r>>>0,L(r,"offset");const t=this[r],i=this[r+7];(t===void 0||i===void 0)&&P(r,this.length-8);const e=t+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24,u=this[++r]+this[++r]*2**8+this[++r]*2**16+i*2**24;return BigInt(e)+(BigInt(u)<<BigInt(32))}),o.prototype.readBigUInt64BE=_(function(r){r=r>>>0,L(r,"offset");const t=this[r],i=this[r+7];(t===void 0||i===void 0)&&P(r,this.length-8);const e=t*2**24+this[++r]*2**16+this[++r]*2**8+this[++r],u=this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+i;return(BigInt(e)<<BigInt(32))+BigInt(u)}),o.prototype.readIntLE=function(r,t,i){r=r>>>0,t=t>>>0,i||U(r,t,this.length);let e=this[r],u=1,h=0;for(;++h<t&&(u*=256);)e+=this[r+h]*u;return u*=128,e>=u&&(e-=Math.pow(2,8*t)),e},o.prototype.readIntBE=function(r,t,i){r=r>>>0,t=t>>>0,i||U(r,t,this.length);let e=t,u=1,h=this[r+--e];for(;e>0&&(u*=256);)h+=this[r+--e]*u;return u*=128,h>=u&&(h-=Math.pow(2,8*t)),h},o.prototype.readInt8=function(r,t){return r=r>>>0,t||U(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},o.prototype.readInt16LE=function(r,t){r=r>>>0,t||U(r,2,this.length);const i=this[r]|this[r+1]<<8;return i&32768?i|4294901760:i},o.prototype.readInt16BE=function(r,t){r=r>>>0,t||U(r,2,this.length);const i=this[r+1]|this[r]<<8;return i&32768?i|4294901760:i},o.prototype.readInt32LE=function(r,t){return r=r>>>0,t||U(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},o.prototype.readInt32BE=function(r,t){return r=r>>>0,t||U(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},o.prototype.readBigInt64LE=_(function(r){r=r>>>0,L(r,"offset");const t=this[r],i=this[r+7];(t===void 0||i===void 0)&&P(r,this.length-8);const e=this[r+4]+this[r+5]*2**8+this[r+6]*2**16+(i<<24);return(BigInt(e)<<BigInt(32))+BigInt(t+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24)}),o.prototype.readBigInt64BE=_(function(r){r=r>>>0,L(r,"offset");const t=this[r],i=this[r+7];(t===void 0||i===void 0)&&P(r,this.length-8);const e=(t<<24)+this[++r]*2**16+this[++r]*2**8+this[++r];return(BigInt(e)<<BigInt(32))+BigInt(this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+i)}),o.prototype.readFloatLE=function(r,t){return r=r>>>0,t||U(r,4,this.length),y.read(this,r,!0,23,4)},o.prototype.readFloatBE=function(r,t){return r=r>>>0,t||U(r,4,this.length),y.read(this,r,!1,23,4)},o.prototype.readDoubleLE=function(r,t){return r=r>>>0,t||U(r,8,this.length),y.read(this,r,!0,52,8)},o.prototype.readDoubleBE=function(r,t){return r=r>>>0,t||U(r,8,this.length),y.read(this,r,!1,52,8)};function T(n,r,t,i,e,u){if(!o.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>e||r<u)throw new RangeError('"value" argument is out of bounds');if(t+i>n.length)throw new RangeError("Index out of range")}o.prototype.writeUintLE=o.prototype.writeUIntLE=function(r,t,i,e){if(r=+r,t=t>>>0,i=i>>>0,!e){const w=Math.pow(2,8*i)-1;T(this,r,t,i,w,0)}let u=1,h=0;for(this[t]=r&255;++h<i&&(u*=256);)this[t+h]=r/u&255;return t+i},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(r,t,i,e){if(r=+r,t=t>>>0,i=i>>>0,!e){const w=Math.pow(2,8*i)-1;T(this,r,t,i,w,0)}let u=i-1,h=1;for(this[t+u]=r&255;--u>=0&&(h*=256);)this[t+u]=r/h&255;return t+i},o.prototype.writeUint8=o.prototype.writeUInt8=function(r,t,i){return r=+r,t=t>>>0,i||T(this,r,t,1,255,0),this[t]=r&255,t+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(r,t,i){return r=+r,t=t>>>0,i||T(this,r,t,2,65535,0),this[t]=r&255,this[t+1]=r>>>8,t+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(r,t,i){return r=+r,t=t>>>0,i||T(this,r,t,2,65535,0),this[t]=r>>>8,this[t+1]=r&255,t+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(r,t,i){return r=+r,t=t>>>0,i||T(this,r,t,4,4294967295,0),this[t+3]=r>>>24,this[t+2]=r>>>16,this[t+1]=r>>>8,this[t]=r&255,t+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(r,t,i){return r=+r,t=t>>>0,i||T(this,r,t,4,4294967295,0),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4};function Q(n,r,t,i,e){er(r,i,e,n,t,7);let u=Number(r&BigInt(4294967295));n[t++]=u,u=u>>8,n[t++]=u,u=u>>8,n[t++]=u,u=u>>8,n[t++]=u;let h=Number(r>>BigInt(32)&BigInt(4294967295));return n[t++]=h,h=h>>8,n[t++]=h,h=h>>8,n[t++]=h,h=h>>8,n[t++]=h,t}function v(n,r,t,i,e){er(r,i,e,n,t,7);let u=Number(r&BigInt(4294967295));n[t+7]=u,u=u>>8,n[t+6]=u,u=u>>8,n[t+5]=u,u=u>>8,n[t+4]=u;let h=Number(r>>BigInt(32)&BigInt(4294967295));return n[t+3]=h,h=h>>8,n[t+2]=h,h=h>>8,n[t+1]=h,h=h>>8,n[t]=h,t+8}o.prototype.writeBigUInt64LE=_(function(r,t=0){return Q(this,r,t,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeBigUInt64BE=_(function(r,t=0){return v(this,r,t,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeIntLE=function(r,t,i,e){if(r=+r,t=t>>>0,!e){const m=Math.pow(2,8*i-1);T(this,r,t,i,m-1,-m)}let u=0,h=1,w=0;for(this[t]=r&255;++u<i&&(h*=256);)r<0&&w===0&&this[t+u-1]!==0&&(w=1),this[t+u]=(r/h>>0)-w&255;return t+i},o.prototype.writeIntBE=function(r,t,i,e){if(r=+r,t=t>>>0,!e){const m=Math.pow(2,8*i-1);T(this,r,t,i,m-1,-m)}let u=i-1,h=1,w=0;for(this[t+u]=r&255;--u>=0&&(h*=256);)r<0&&w===0&&this[t+u+1]!==0&&(w=1),this[t+u]=(r/h>>0)-w&255;return t+i},o.prototype.writeInt8=function(r,t,i){return r=+r,t=t>>>0,i||T(this,r,t,1,127,-128),r<0&&(r=255+r+1),this[t]=r&255,t+1},o.prototype.writeInt16LE=function(r,t,i){return r=+r,t=t>>>0,i||T(this,r,t,2,32767,-32768),this[t]=r&255,this[t+1]=r>>>8,t+2},o.prototype.writeInt16BE=function(r,t,i){return r=+r,t=t>>>0,i||T(this,r,t,2,32767,-32768),this[t]=r>>>8,this[t+1]=r&255,t+2},o.prototype.writeInt32LE=function(r,t,i){return r=+r,t=t>>>0,i||T(this,r,t,4,2147483647,-2147483648),this[t]=r&255,this[t+1]=r>>>8,this[t+2]=r>>>16,this[t+3]=r>>>24,t+4},o.prototype.writeInt32BE=function(r,t,i){return r=+r,t=t>>>0,i||T(this,r,t,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4},o.prototype.writeBigInt64LE=_(function(r,t=0){return Q(this,r,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),o.prototype.writeBigInt64BE=_(function(r,t=0){return v(this,r,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function rr(n,r,t,i,e,u){if(t+i>n.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function tr(n,r,t,i,e){return r=+r,t=t>>>0,e||rr(n,r,t,4),y.write(n,r,t,i,23,4),t+4}o.prototype.writeFloatLE=function(r,t,i){return tr(this,r,t,!0,i)},o.prototype.writeFloatBE=function(r,t,i){return tr(this,r,t,!1,i)};function nr(n,r,t,i,e){return r=+r,t=t>>>0,e||rr(n,r,t,8),y.write(n,r,t,i,52,8),t+8}o.prototype.writeDoubleLE=function(r,t,i){return nr(this,r,t,!0,i)},o.prototype.writeDoubleBE=function(r,t,i){return nr(this,r,t,!1,i)},o.prototype.copy=function(r,t,i,e){if(!o.isBuffer(r))throw new TypeError("argument should be a Buffer");if(i||(i=0),!e&&e!==0&&(e=this.length),t>=r.length&&(t=r.length),t||(t=0),e>0&&e<i&&(e=i),e===i||r.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),r.length-t<e-i&&(e=r.length-t+i);const u=e-i;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,e):Uint8Array.prototype.set.call(r,this.subarray(i,e),t),u},o.prototype.fill=function(r,t,i,e){if(typeof r=="string"){if(typeof t=="string"?(e=t,t=0,i=this.length):typeof i=="string"&&(e=i,i=this.length),e!==void 0&&typeof e!="string")throw new TypeError("encoding must be a string");if(typeof e=="string"&&!o.isEncoding(e))throw new TypeError("Unknown encoding: "+e);if(r.length===1){const h=r.charCodeAt(0);(e==="utf8"&&h<128||e==="latin1")&&(r=h)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,r||(r=0);let u;if(typeof r=="number")for(u=t;u<i;++u)this[u]=r;else{const h=o.isBuffer(r)?r:o.from(r,e),w=h.length;if(w===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(u=0;u<i-t;++u)this[u+t]=h[u%w]}return this};const k={};function Y(n,r,t){k[n]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${n}]`,this.stack,delete this.name}get code(){return n}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${n}]: ${this.message}`}}}Y("ERR_BUFFER_OUT_OF_BOUNDS",function(n){return n?`${n} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Y("ERR_INVALID_ARG_TYPE",function(n,r){return`The "${n}" argument must be of type number. Received type ${typeof r}`},TypeError),Y("ERR_OUT_OF_RANGE",function(n,r,t){let i=`The value of "${n}" is out of range.`,e=t;return Number.isInteger(t)&&Math.abs(t)>2**32?e=ir(String(t)):typeof t=="bigint"&&(e=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(e=ir(e)),e+="n"),i+=` It must be ${r}. Received ${e}`,i},RangeError);function ir(n){let r="",t=n.length;const i=n[0]==="-"?1:0;for(;t>=i+4;t-=3)r=`_${n.slice(t-3,t)}${r}`;return`${n.slice(0,t)}${r}`}function mr(n,r,t){L(r,"offset"),(n[r]===void 0||n[r+t]===void 0)&&P(r,n.length-(t+1))}function er(n,r,t,i,e,u){if(n>t||n<r){const h=typeof r=="bigint"?"n":"";let w;throw u>3?r===0||r===BigInt(0)?w=`>= 0${h} and < 2${h} ** ${(u+1)*8}${h}`:w=`>= -(2${h} ** ${(u+1)*8-1}${h}) and < 2 ** ${(u+1)*8-1}${h}`:w=`>= ${r}${h} and <= ${t}${h}`,new k.ERR_OUT_OF_RANGE("value",w,n)}mr(i,e,u)}function L(n,r){if(typeof n!="number")throw new k.ERR_INVALID_ARG_TYPE(r,"number",n)}function P(n,r,t){throw Math.floor(n)!==n?(L(n,t),new k.ERR_OUT_OF_RANGE(t||"offset","an integer",n)):r<0?new k.ERR_BUFFER_OUT_OF_BOUNDS:new k.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${r}`,n)}const dr=/[^+/0-9A-Za-z-_]/g;function Fr(n){if(n=n.split("=")[0],n=n.trim().replace(dr,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function V(n,r){r=r||1/0;let t;const i=n.length;let e=null;const u=[];for(let h=0;h<i;++h){if(t=n.charCodeAt(h),t>55295&&t<57344){if(!e){if(t>56319){(r-=3)>-1&&u.push(239,191,189);continue}else if(h+1===i){(r-=3)>-1&&u.push(239,191,189);continue}e=t;continue}if(t<56320){(r-=3)>-1&&u.push(239,191,189),e=t;continue}t=(e-55296<<10|t-56320)+65536}else e&&(r-=3)>-1&&u.push(239,191,189);if(e=null,t<128){if((r-=1)<0)break;u.push(t)}else if(t<2048){if((r-=2)<0)break;u.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;u.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;u.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return u}function Ar(n){const r=[];for(let t=0;t<n.length;++t)r.push(n.charCodeAt(t)&255);return r}function Ur(n,r){let t,i,e;const u=[];for(let h=0;h<n.length&&!((r-=2)<0);++h)t=n.charCodeAt(h),i=t>>8,e=t%256,u.push(e),u.push(i);return u}function or(n){return c.toByteArray(Fr(n))}function O(n,r,t,i){let e;for(e=0;e<i&&!(e+t>=r.length||e>=n.length);++e)r[e+t]=n[e];return e}function N(n,r){return n instanceof r||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===r.name}function W(n){return n!==n}const Tr=function(){const n="0123456789abcdef",r=new Array(256);for(let t=0;t<16;++t){const i=t*16;for(let e=0;e<16;++e)r[i+e]=n[t]+n[e]}return r}();function _(n){return typeof BigInt>"u"?Rr:n}function Rr(){throw new Error("BigInt not supported")}})(Cr);const $r=-1,Pr=-2,Or=-3,jr=-4,Gr=-5,Yr=-6;function Wr(p,c){if(typeof p=="number")return a(p,!0);if(!Array.isArray(p)||p.length===0)throw new Error("Invalid input");const y=p,l=Array(y.length);function a(f,s=!1){if(f===$r)return;if(f===Or)return NaN;if(f===jr)return 1/0;if(f===Gr)return-1/0;if(f===Yr)return-0;if(s)throw new Error("Invalid input");if(f in l)return l[f];const o=y[f];if(!o||typeof o!="object")l[f]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const x=o[0],F=c?.[x];if(F)return l[f]=F(a(o[1]));switch(x){case"Date":l[f]=new Date(o[1]);break;case"Set":const g=new Set;l[f]=g;for(let B=1;B<o.length;B+=1)g.add(a(o[B]));break;case"Map":const A=new Map;l[f]=A;for(let B=1;B<o.length;B+=2)A.set(a(o[B]),a(o[B+1]));break;case"RegExp":l[f]=new RegExp(o[1],o[2]);break;case"Object":l[f]=Object(o[1]);break;case"BigInt":l[f]=BigInt(o[1]);break;case"null":const C=Object.create(null);l[f]=C;for(let B=1;B<o.length;B+=2)C[o[B]]=a(o[B+1]);break;default:throw new Error(`Unknown type ${x}`)}}else{const x=new Array(o.length);l[f]=x;for(let F=0;F<o.length;F+=1){const g=o[F];g!==Pr&&(x[F]=a(g))}}else{const x={};l[f]=x;for(const F in o){const g=o[F];x[F]=a(g)}}return l[f]}return a(0)}export{Wr as u};
