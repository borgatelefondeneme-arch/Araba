var xp=0,cu=1,_p=2;var Us=1,vp=2,Ur=3,ui=0,dn=1,on=2,Hi=0,Or=1,_n=2,hu=3,uu=4,yp=5;var Os=100,Mp=101,Sp=102,Tp=103,wp=104,Ep=200,Ap=201,Rp=202,Cp=203,du=204,fu=205,Pp=206,Ip=207,Lp=208,Dp=209,Np=210,Fp=211,Up=212,Op=213,kp=214,ml=0,gl=1,bl=2,br=3,xl=4,_l=5,vl=6,yl=7,Wl=0,Bp=1,zp=2,di=0,no=1,io=2,so=3,Gi=4,ro=5,ao=6,ks=7,Xh="attached",Hp="detached",pu=300,Bs=301,kr=302,Br=303,ql=304,hn=1e3,Vn=1001,xr=1002,Ut=1003,Xl=1004;var zs=1005;var Kt=1006,zr=1007;var qn=1008;var Pn=1009,mu=1010,gu=1011,Hr=1012,jl=1013,ti=1014,Bn=1015,fn=1016,Kl=1017,Jl=1018,Hs=1020,bu=35902,xu=35899,_u=1021,vu=1022,Xn=1023,Pi=1026,Vi=1027,Yl=1028,Zl=1029,ls=1030,$l=1031;var Ql=1033,oo=33776,lo=33777,co=33778,ho=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,ac=37496,oc=37488,lc=37489,uo=37490,cc=37491,hc=37808,uc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,bc=37815,xc=37816,_c=37817,vc=37818,yc=37819,Mc=37820,Sc=37821,Tc=36492,wc=36494,Ec=36495,Ac=36283,Rc=36284,fo=36285,Cc=36286;var Ms=2300,Ss=2301,fl=2302,jh=2303,Kh=2400,Jh=2401,Yh=2402,Gp=2500;var yu=0,po=1,Gr=2,Vp=3200;var mo=0,Wp=1,Wi="",ht="srgb",Tn="srgb-linear",Sa="linear",ft="srgb";var pl=7680;var qp=519,Xp=512,jp=513,Kp=514,Mu=515,Jp=516,Yp=517,Su=518,Tu=519,wu=35044;var Eu="300 es",Wn=2e3,_r=2001;function r0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function a0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zp(){let i=vr("canvas");return i.style.display="block",i}var Mf={},yr=null;function Ta(...i){let e="THREE."+i.shift();yr?yr("log",e,...i):console.log(e,...i)}function $p(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=$p(i);let e="THREE."+i.shift();if(yr)yr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=$p(i);let e="THREE."+i.shift();if(yr)yr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ys(...i){let e=i.join(" ");e in Mf||(Mf[e]=!0,Le(...i))}function Qp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var em={[ml]:ml,[bl]:vl,[xl]:xl,[br]:_l,[gl]:gl,[vl]:bl,[yl]:yl,[_l]:br},ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sf=1234567,_a=Math.PI/180,Ts=180/Math.PI;function ni(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function Au(i,e){return(i%e+e)%e}function o0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function l0(i,e,t){return i!==e?(t-i)/(e-i):0}function va(i,e,t){return(1-t)*i+t*e}function c0(i,e,t,n){return va(i,e,1-Math.exp(-t*n))}function h0(i,e=1){return e-Math.abs(Au(i,e*2)-e)}function u0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function d0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function f0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function p0(i,e){return i+Math.random()*(e-i)}function m0(i){return i*(.5-Math.random())}function g0(i){i!==void 0&&(Sf=i);let e=Sf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function b0(i){return i*_a}function x0(i){return i*Ts}function _0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function v0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ru(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cu(i,e){if(e.constructor===Float32Array)return i;let t=Pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Pu(i,e){if(e.constructor===Float32Array)return i;let t=Pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var In={DEG2RAD:_a,RAD2DEG:Ts,generateUUID:ni,clamp:et,euclideanModulo:Au,mapLinear:o0,inverseLerp:l0,lerp:va,damp:c0,pingpong:h0,smoothstep:u0,smootherstep:d0,randInt:f0,randFloat:p0,randFloatSpread:m0,seededRandom:g0,degToRad:b0,radToDeg:x0,isPowerOfTwo:_0,ceilPowerOfTwo:v0,floorPowerOfTwo:Ru,setQuaternionFromProperEuler:y0,normalize:Pu,denormalize:Cu},Uu=class Uu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uu.prototype.isVector2=!0;var Z=Uu,Ot=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let x=Math.acos(m),y=Math.sin(x);p=Math.sin(p*x)/y,o=Math.sin(o*x)/y,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ou=class Ou{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ou.prototype.isVector3=!0;var I=Ou,xh=new I,Tf=new Ot,ku=class ku{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],y=s[4],_=s[7],S=s[2],w=s[5],b=s[8];return r[0]=a*v+o*x+l*S,r[3]=a*m+o*y+l*w,r[6]=a*p+o*_+l*b,r[1]=c*v+h*x+u*S,r[4]=c*m+h*y+u*w,r[7]=c*p+h*_+u*b,r[2]=d*v+f*x+g*S,r[5]=d*m+f*y+g*w,r[8]=d*p+f*_+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_h.makeScale(e,t)),this}rotate(e){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_h.makeRotation(-e)),this}translate(e,t){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ku.prototype.isMatrix3=!0;var qe=ku,_h=new qe,wf=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ef=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function M0(){let i={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?Sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tn]:{primaries:e,whitePoint:n,transfer:Sa,toXYZ:wf,fromXYZ:Ef,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:wf,fromXYZ:Ef,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),i}var Je=M0();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $s,Ml=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$s===void 0&&($s=vr("canvas")),$s.width=e.width,$s.height=e.height;let s=$s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=$s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},S0=0,Mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vh(s[a].image)):r.push(vh(s[a]))}else r=vh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var T0=0,yh=new I,Jt=class i extends ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Vn,s=Vn,r=Kt,a=qn,o=Xn,l=Pn,c=i.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=ni(),this.name="",this.source=new Mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=pu;Jt.DEFAULT_ANISOTROPY=1;var Bu=class Bu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(f+1)/2,S=(p+1)/2,w=(h+d)/4,b=(u+v)/4,M=(g+m)/4;return y>_&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=b/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=M/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=b/r,s=M/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bu.prototype.isVector4=!0;var yt=Bu,Sl=class extends ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Jt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},wa=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tl=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Vl=class Vl{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Qs.setFromMatrixColumn(e,0).length(),r=1/Qs.setFromMatrixColumn(e,1).length(),a=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w0,e,E0)}lookAt(e,t,n){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Ji.crossVectors(n,Nn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Ji.crossVectors(n,Nn)),Ji.normalize(),Oo.crossVectors(Nn,Ji),s[0]=Ji.x,s[4]=Oo.x,s[8]=Nn.x,s[1]=Ji.y,s[5]=Oo.y,s[9]=Nn.y,s[2]=Ji.z,s[6]=Oo.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],y=n[7],_=n[11],S=n[15],w=s[0],b=s[4],M=s[8],P=s[12],A=s[1],C=s[5],N=s[9],O=s[13],L=s[2],H=s[6],W=s[10],G=s[14],ne=s[3],q=s[7],Q=s[11],te=s[15];return r[0]=a*w+o*A+l*L+c*ne,r[4]=a*b+o*C+l*H+c*q,r[8]=a*M+o*N+l*W+c*Q,r[12]=a*P+o*O+l*G+c*te,r[1]=h*w+u*A+d*L+f*ne,r[5]=h*b+u*C+d*H+f*q,r[9]=h*M+u*N+d*W+f*Q,r[13]=h*P+u*O+d*G+f*te,r[2]=g*w+v*A+m*L+p*ne,r[6]=g*b+v*C+m*H+p*q,r[10]=g*M+v*N+m*W+p*Q,r[14]=g*P+v*O+m*G+p*te,r[3]=x*w+y*A+_*L+S*ne,r[7]=x*b+y*C+_*H+S*q,r[11]=x*M+y*N+_*W+S*Q,r[15]=x*P+y*O+_*G+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],x=l*f-c*d,y=o*f-c*u,_=o*d-l*u,S=a*f-c*h,w=a*d-l*h,b=a*u-o*h;return t*(v*x-m*y+p*_)-n*(g*x-m*S+p*w)+s*(g*y-v*S+p*b)-r*(g*_-v*w+m*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=t*o-n*a,y=t*l-s*a,_=t*c-r*a,S=n*l-s*o,w=n*c-r*o,b=s*c-r*l,M=h*v-u*g,P=h*m-d*g,A=h*p-f*g,C=u*m-d*v,N=u*p-f*v,O=d*p-f*m,L=x*O-y*N+_*C+S*A-w*P+b*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return e[0]=(o*O-l*N+c*C)*H,e[1]=(s*N-n*O-r*C)*H,e[2]=(v*b-m*w+p*S)*H,e[3]=(d*w-u*b-f*S)*H,e[4]=(l*A-a*O-c*P)*H,e[5]=(t*O-s*A+r*P)*H,e[6]=(m*_-g*b-p*y)*H,e[7]=(h*b-d*_+f*y)*H,e[8]=(a*N-o*A+c*M)*H,e[9]=(n*A-t*N-r*M)*H,e[10]=(g*w-v*_+p*x)*H,e[11]=(u*_-h*w-f*x)*H,e[12]=(o*P-a*C-l*M)*H,e[13]=(t*C-n*P+s*M)*H,e[14]=(v*y-g*S-m*x)*H,e[15]=(h*S-u*y+d*x)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,x=l*c,y=l*h,_=l*u,S=n.x,w=n.y,b=n.z;return s[0]=(1-(v+p))*S,s[1]=(f+_)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(d+p))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+y)*b,s[9]=(m-x)*b,s[10]=(1-(d+v))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Qs.set(s[0],s[1],s[2]).length(),o=Qs.set(s[4],s[5],s[6]).length(),l=Qs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Yn.copy(this);let c=1/a,h=1/o,u=1/l;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Wn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Wn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===_r)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Wn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Wn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===_r)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Vl.prototype.isMatrix4=!0;var He=Vl,Qs=new I,Yn=new He,w0=new I(0,0,0),E0=new I(1,1,1),Ji=new I,Oo=new I,Nn=new I,Af=new He,Rf=new Ot,oi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Af,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rf.setFromEuler(this),this.setFromQuaternion(Rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},A0=0,Cf=new I,er=new Ot,Mi=new He,ko=new I,aa=new I,R0=new I,C0=new Ot,Pf=new I(1,0,0),If=new I(0,1,0),Lf=new I(0,0,1),Df={type:"added"},P0={type:"removed"},tr={type:"childadded",child:null},Mh={type:"childremoved",child:null},At=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new oi,n=new Ot,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new qe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(Pf,e)}rotateY(e){return this.rotateOnAxis(If,e)}rotateZ(e){return this.rotateOnAxis(Lf,e)}translateOnAxis(e,t){return Cf.copy(e).applyQuaternion(this.quaternion),this.position.add(Cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pf,e)}translateY(e){return this.translateOnAxis(If,e)}translateZ(e){return this.translateOnAxis(Lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ko.copy(e):ko.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(aa,ko,this.up):Mi.lookAt(ko,aa,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),er.setFromRotationMatrix(Mi),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Df),tr.child=e,this.dispatchEvent(tr),tr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(P0),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Df),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,R0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new I(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},I0={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(I0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function Sh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Au(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Sh(a,r,e+1/3),this.g=Sh(a,r,e),this.b=Sh(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=ht){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){let n=tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return Je.workingToColorSpace(xn.copy(this),e),Math.round(et(xn.r*255,0,255))*65536+Math.round(et(xn.g*255,0,255))*256+Math.round(et(xn.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(xn.copy(this),t);let n=xn.r,s=xn.g,r=xn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ht){Je.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,s=xn.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(Bo);let n=va(Yi.h,Bo.h,t),s=va(Yi.s,Bo.s,t),r=va(Yi.l,Bo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Te;Te.NAMES=tm;var Ea=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ei=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zn=new I,Si=new I,Th=new I,Ti=new I,nr=new I,ir=new I,Nf=new I,wh=new I,Eh=new I,Ah=new I,Rh=new yt,Ch=new yt,Ph=new yt,Ri=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),Si.subVectors(n,t),Th.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Si),l=Zn.dot(Th),c=Si.dot(Si),h=Si.dot(Th),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Rh.setScalar(0),Ch.setScalar(0),Ph.setScalar(0),Rh.fromBufferAttribute(e,t),Ch.fromBufferAttribute(e,n),Ph.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Rh,r.x),a.addScaledVector(Ch,r.y),a.addScaledVector(Ph,r.z),a}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),Si.subVectors(e,t),Zn.cross(Si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Zn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;nr.subVectors(s,n),ir.subVectors(r,n),wh.subVectors(e,n);let l=nr.dot(wh),c=ir.dot(wh);if(l<=0&&c<=0)return t.copy(n);Eh.subVectors(e,s);let h=nr.dot(Eh),u=ir.dot(Eh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(nr,a);Ah.subVectors(e,r);let f=nr.dot(Ah),g=ir.dot(Ah);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ir,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Nf.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Nf,o);let p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(nr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zo.copy(n.boundingBox)),zo.applyMatrix4(e.matrixWorld),this.union(zo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Ho.subVectors(this.max,oa),sr.subVectors(e.a,oa),rr.subVectors(e.b,oa),ar.subVectors(e.c,oa),Zi.subVectors(rr,sr),$i.subVectors(ar,rr),gs.subVectors(sr,ar);let t=[0,-Zi.z,Zi.y,0,-$i.z,$i.y,0,-gs.z,gs.y,Zi.z,0,-Zi.x,$i.z,0,-$i.x,gs.z,0,-gs.x,-Zi.y,Zi.x,0,-$i.y,$i.x,0,-gs.y,gs.x,0];return!Ih(t,sr,rr,ar,Ho)||(t=[1,0,0,0,1,0,0,0,1],!Ih(t,sr,rr,ar,Ho))?!1:(Go.crossVectors(Zi,$i),t=[Go.x,Go.y,Go.z],Ih(t,sr,rr,ar,Ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new I,new I,new I,new I,new I,new I,new I,new I],$n=new I,zo=new sn,sr=new I,rr=new I,ar=new I,Zi=new I,$i=new I,gs=new I,oa=new I,Ho=new I,Go=new I,bs=new I;function Ih(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bs.fromArray(i,r);let o=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qt=new I,Vo=new Z,L0=0,Ht=class extends ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wu,this.updateRanges=[],this.gpuType=Bn,this.version=0,this._normalizationScale=e!==void 0?Pc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pu(e,this.array)}};var Aa=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ra=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},D0=new sn,la=new I,Lh=new I,Rn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):D0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(la,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Lh)),this.expandByPoint(la.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},N0=0,Gn=new He,Dh=new At,or=new I,Fn=new sn,ca=new sn,nn=new I,xt=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r0(e)?Ra:Aa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Fn.min,ca.min),Fn.expandByPoint(nn),nn.addVectors(Fn.max,ca.max),Fn.expandByPoint(nn)):(Fn.expandByPoint(ca.min),Fn.expandByPoint(ca.max))}Fn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)nn.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(e,c),nn.add(or)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;let h=new I,u=new I,d=new I,f=new Z,g=new Z,v=new Z,m=new I,p=new I;function x(P,A,C){c[P]=c[A]=c[C]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,C),f.fromBufferAttribute(r,P),g.fromBufferAttribute(r,A),v.fromBufferAttribute(r,C),u.sub(h),d.sub(h),g.sub(f),v.sub(f);let N=1/(g.x*v.y-v.x*g.y);isFinite(N)&&(m.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(N),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(N),o[P].add(m),o[A].add(m),o[C].add(m),l[P].add(p),l[A].add(p),l[C].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,A=y.length;P<A;++P){let C=y[P],N=C.start,O=C.count;for(let L=N,H=N+O;L<H;L+=3)x(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let _=new I,S=new I,w=new I,b=new I;function M(P){w.fromBufferAttribute(s,P),b.copy(w);let A=o[P];_.copy(A),_.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(b,A);let N=S.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,N)}for(let P=0,A=n.count;P<A;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ht(d,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wu,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ff(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ff(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Ff(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ni()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Sn=new I,ts=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Pc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pu(e,this.data.array)}},Nh=new I,F0=new I,U0=new qe,Qn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Nh.subVectors(n,t).cross(F0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Nh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||U0.getNormalMatrix(e),s=this.coplanarPoint(Nh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},O0=0,un=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Or,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=du,this.blendDst=fu,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pl,this.stencilZFail=pl,this.stencilZPass=pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Z().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Z().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wr=class extends un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lr,ha=new I,cr=new I,hr=new I,ur=new Z,ua=new Z,nm=new He,Wo=new I,da=new I,qo=new I,Uf=new Z,Fh=new Z,Of=new Z,Ca=class extends At{constructor(e=new wr){if(super(),this.isSprite=!0,this.type="Sprite",lr===void 0){lr=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ws(t,5);lr.setIndex([0,1,2,0,2,3]),lr.setAttribute("position",new ts(n,3,0,!1)),lr.setAttribute("uv",new ts(n,2,3,!1))}this.geometry=lr,this.material=e,this.center=new Z(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),nm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-hr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Xo(Wo.set(-.5,-.5,0),hr,a,cr,s,r),Xo(da.set(.5,-.5,0),hr,a,cr,s,r),Xo(qo.set(.5,.5,0),hr,a,cr,s,r),Uf.set(0,0),Fh.set(1,0),Of.set(1,1);let o=e.ray.intersectTriangle(Wo,da,qo,!1,ha);if(o===null&&(Xo(da.set(-.5,.5,0),hr,a,cr,s,r),Fh.set(0,1),o=e.ray.intersectTriangle(Wo,qo,da,!1,ha),o===null))return;let l=e.ray.origin.distanceTo(ha);l<e.near||l>e.far||t.push({distance:l,point:ha.clone(),uv:Ri.getInterpolation(ha,Wo,da,qo,Uf,Fh,Of,new Z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Xo(i,e,t,n,s,r){ur.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ua.x=r*ur.x-s*ur.y,ua.y=s*ur.x+r*ur.y):ua.copy(ur),i.copy(e),i.x+=ua.x,i.y+=ua.y,i.applyMatrix4(nm)}var Ei=new I,Uh=new I,jo=new I,Ko=new I,ns=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Uh.copy(e).add(t).multiplyScalar(.5),jo.copy(t).sub(e).normalize(),Ko.copy(this.origin).sub(Uh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(jo),o=Ko.dot(this.direction),l=-Ko.dot(jo),c=Ko.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Uh).addScaledVector(jo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ei.subVectors(e.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,x=n.y-a.y,y=n.z-a.z,_=Math.abs(l),S=Math.abs(c),w=Math.abs(h),b,M,P,A,C,N,O,L,H,W,G,ne;if(_>=S&&_>=w?(P=l,N=u,H=g,ne=p,l>=0?(b=c,M=h,A=d,C=f,O=v,L=m,W=x,G=y):(b=h,M=c,A=f,C=d,O=m,L=v,W=y,G=x)):S>=w?(P=c,N=d,H=v,ne=x,c>=0?(b=h,M=l,A=f,C=u,O=m,L=g,W=y,G=p):(b=l,M=h,A=u,C=f,O=g,L=m,W=p,G=y)):(P=h,N=f,H=m,ne=y,h>=0?(b=l,M=c,A=u,C=d,O=g,L=v,W=p,G=x):(b=c,M=l,A=d,C=u,O=v,L=g,W=x,G=p)),P===0)return null;let q=b/P,Q=M/P,te=1/P,Ee=A-q*N,ze=C-Q*N,j=O-q*H,_e=L-Q*H,Ae=W-q*ne,Ue=G-Q*ne,ve=Ae*_e-Ue*j,Oe=Ee*Ue-ze*Ae,Pt=j*ze-_e*Ee;if(s){if(ve<0||Oe<0||Pt<0)return null}else if((ve<0||Oe<0||Pt<0)&&(ve>0||Oe>0||Pt>0))return null;let Ge=ve+Oe+Pt;if(Ge===0)return null;let Qe=te*(ve*N+Oe*H+Pt*ne);return(Ge>0?Qe<0:Qe>0)?null:this.at(Qe/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},kf=new He,xs=new ns,Jo=new Rn,Bf=new I,Yo=new I,Zo=new I,$o=new I,Oh=new I,Qo=new I,zf=new I,el=new I,Be=class extends At{constructor(e=new xt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Oh.fromBufferAttribute(u,e),a?Qo.addScaledVector(Oh,h):Qo.addScaledVector(Oh.sub(t),h))}t.add(Qo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(Jo.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Jo,Bf)===null||xs.origin.distanceToSquared(Bf)>(e.far-e.near)**2))&&(kf.copy(r).invert(),xs.copy(e.ray).applyMatrix4(kf),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,S=y;_<S;_+=3){let w=o.getX(_),b=o.getX(_+1),M=o.getX(_+2);s=tl(this,p,e,n,c,h,u,w,b,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let x=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);s=tl(this,a,e,n,c,h,u,x,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,S=y;_<S;_+=3){let w=_,b=_+1,M=_+2;s=tl(this,p,e,n,c,h,u,w,b,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let x=m,y=m+1,_=m+2;s=tl(this,a,e,n,c,h,u,x,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function k0(i,e,t,n,s,r,a,o){let l;if(e.side===dn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ui,o),l===null)return null;el.copy(o),el.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(el);return c<t.near||c>t.far?null:{distance:c,point:el.clone(),object:i}}function tl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Yo),i.getVertexPosition(l,Zo),i.getVertexPosition(c,$o);let h=k0(i,e,t,n,Yo,Zo,$o,zf);if(h){let u=new I;Ri.getBarycoord(zf,Yo,Zo,$o,u),s&&(h.uv=Ri.getInterpolatedAttribute(s,o,l,c,u,new Z)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,o,l,c,u,new Z)),a&&(h.normal=Ri.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};Ri.getNormal(Yo,Zo,$o,d.normal),h.face=d,h.barycoord=u}return h}var fa=new yt,Hf=new yt,Gf=new yt,B0=new yt,Vf=new He,nl=new I,kh=new Rn,Wf=new He,Bh=new ns,Pa=class extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xh,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nl),this.boundingBox.expandByPoint(nl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nl),this.boundingSphere.expandByPoint(nl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kh.copy(this.boundingSphere),kh.applyMatrix4(s),e.ray.intersectsSphere(kh)!==!1&&(Wf.copy(s).invert(),Bh.copy(e.ray).applyMatrix4(Wf),!(this.boundingBox!==null&&Bh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Hf.fromBufferAttribute(s.attributes.skinIndex,e),Gf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(fa.copy(t),t.set(0,0,0,0)):(fa.set(t.x,t.y,t.z,1),t.set(0,0,0)),fa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Gf.getComponent(r);if(a!==0){let o=Hf.getComponent(r);Vf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(B0.copy(fa).applyMatrix4(Vf),a)}}return t.isVector4&&(t.w=fa.w),t.applyMatrix4(this.bindMatrixInverse)}},Er=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ar=class extends Jt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,h=Ut,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qf=new He,z0=new He,Ia=class i{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:z0;qf.multiplyMatrices(o,t[r]),qf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ar(t,e,e,Xn,Bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Le("Skeleton: No bone found with UUID:",r),a=new Er),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Ii=class extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},dr=new He,Xf=new He,il=[],jf=new sn,H0=new He,pa=new Be,ma=new Rn,Un=class extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,H0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),jf.copy(e.boundingBox).applyMatrix4(dr),this.boundingBox.union(jf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),ma.copy(e.boundingSphere).applyMatrix4(dr),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),e.ray.intersectsSphere(ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,dr),Xf.multiplyMatrices(n,dr),pa.matrixWorld=Xf,pa.raycast(e,il);for(let a=0,o=il.length;a<o;a++){let l=il[a];l.instanceId=r,l.object=this,t.push(l)}il.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ar(new Float32Array(s*this.count),s,this.count,Yl,Bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_s=new Rn,G0=new Z(.5,.5),sl=new I,is=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],x=r[12],y=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,p-g,S-x).normalize(),s[1].setComponents(c+a,f+h,p+g,S+x).normalize(),s[2].setComponents(c+o,f+u,p+v,S+y).normalize(),s[3].setComponents(c-o,f-u,p-v,S-y).normalize(),n)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(c-l,f-d,p-m,S-_).normalize();else if(s[4].setComponents(c-l,f-d,p-m,S-_).normalize(),t===Wn)s[5].setComponents(c+l,f+d,p+m,S+_).normalize();else if(t===_r)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);let t=G0.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(sl.x=s.normal.x>0?e.max.x:e.min.x,sl.y=s.normal.y>0?e.max.y:e.min.y,sl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Kf=new He,wl=class i{constructor(){this.coordinateSystem=Wn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Kf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new is),n[s].setFromProjectionMatrix(Kf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new is),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ss=class extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},El=new I,Al=new I,Jf=new He,ga=new ns,rl=new Rn,zh=new I,Yf=new I,Es=class extends At{constructor(e=new xt,t=new ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)El.fromBufferAttribute(t,s-1),Al.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=El.distanceTo(Al);e.setAttribute("lineDistance",new Ye(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(s),rl.radius+=r,e.ray.intersectsSphere(rl)===!1)return;Jf.copy(s).invert(),ga.copy(e.ray).applyMatrix4(Jf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=h.getX(v),x=h.getX(v+1),y=al(this,e,ga,l,p,x,v);y&&t.push(y)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=al(this,e,ga,l,v,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=al(this,e,ga,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=al(this,e,ga,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function al(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(El.fromBufferAttribute(o,s),Al.fromBufferAttribute(o,r),t.distanceSqToSegment(El,Al,zh,Yf)>n)return;zh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zh);if(!(c<e.near||c>e.far))return{distance:c,point:Yf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Zf=new I,$f=new I,As=class extends Es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zf.fromBufferAttribute(t,s),$f.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zf.distanceTo($f);e.setAttribute("lineDistance",new Ye(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},La=class extends Es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},rs=class extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qf=new He,Zh=new ns,ol=new Rn,ll=new I,Rs=class extends At{constructor(e=new xt,t=new rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(s),ol.radius+=r,e.ray.intersectsSphere(ol)===!1)return;Qf.copy(s).invert(),Zh.copy(e.ray).applyMatrix4(Qf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let m=c.getX(g);ll.fromBufferAttribute(u,m),ep(ll,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)ll.fromBufferAttribute(u,g),ep(ll,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ep(i,e,t,n,s,r,a){let o=Zh.distanceSqToPoint(i);if(o<t){let l=new I;Zh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Da=class extends Jt{constructor(e=[],t=Bs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gt=class extends Jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Li=class extends Jt{constructor(e,t,n=ti,s,r,a,o=Ut,l=Ut,c,h=Pi,u=1){if(h!==Pi&&h!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Na=class extends Li{constructor(e,t=ti,n=Bs,s,r,a=Ut,o=Ut,l,c=Pi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fa=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xt=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function g(v,m,p,x,y,_,S,w,b,M,P){let A=_/b,C=S/M,N=_/2,O=S/2,L=w/2,H=b+1,W=M+1,G=0,ne=0,q=new I;for(let Q=0;Q<W;Q++){let te=Q*C-O;for(let Ee=0;Ee<H;Ee++){let ze=Ee*A-N;q[v]=ze*x,q[m]=te*y,q[p]=L,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(Ee/b),u.push(1-Q/M),G+=1}}for(let Q=0;Q<M;Q++)for(let te=0;te<b;te++){let Ee=d+te+H*Q,ze=d+te+H*(Q+1),j=d+(te+1)+H*(Q+1),_e=d+(te+1)+H*Q;l.push(Ee,ze,_e),l.push(ze,j,_e),ne+=6}o.addGroup(f,ne,P),f+=ne,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ua=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,h=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rn=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function x(){let _=new I,S=new I,w=0,b=(t-e)/n;for(let M=0;M<=r;M++){let P=[],A=M/r,C=A*(t-e)+e;for(let N=0;N<=s;N++){let O=N/s,L=O*l+o,H=Math.sin(L),W=Math.cos(L);S.x=C*H,S.y=-A*n+m,S.z=C*W,u.push(S.x,S.y,S.z),_.set(H,b,W).normalize(),d.push(_.x,_.y,_.z),f.push(O,1-A),P.push(g++)}v.push(P)}for(let M=0;M<s;M++)for(let P=0;P<r;P++){let A=v[P][M],C=v[P+1][M],N=v[P+1][M+1],O=v[P][M+1];(e>0||P!==0)&&(h.push(A,C,O),w+=3),(t>0||P!==r-1)&&(h.push(C,N,O),w+=3)}c.addGroup(p,w,0),p+=w}function y(_){let S=g,w=new Z,b=new I,M=0,P=_===!0?e:t,A=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),g++;let C=g;for(let N=0;N<=s;N++){let L=N/s*l+o,H=Math.cos(L),W=Math.sin(L);b.x=P*W,b.y=m*A,b.z=P*H,u.push(b.x,b.y,b.z),d.push(0,A,0),w.x=H*.5+.5,w.y=W*.5*A+.5,f.push(w.x,w.y),g++}for(let N=0;N<s;N++){let O=S+N,L=C+N;_===!0?h.push(L,L+1,O):h.push(L+1,L,O),M+=3}c.addGroup(p,M,_===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Di=class i extends rn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oa=class i extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let y=new I,_=new I,S=new I;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],_),f(t[w+2],S),l(y,_,S,x)}function l(x,y,_,S){let w=S+1,b=[];for(let M=0;M<=w;M++){b[M]=[];let P=x.clone().lerp(_,M/w),A=y.clone().lerp(_,M/w),C=w-M;for(let N=0;N<=C;N++)N===0&&M===w?b[M][N]=P:b[M][N]=P.clone().lerp(A,N/C)}for(let M=0;M<w;M++)for(let P=0;P<2*(w-M)-1;P++){let A=Math.floor(P/2);P%2===0?(d(b[M][A+1]),d(b[M+1][A]),d(b[M][A])):(d(b[M][A+1]),d(b[M+1][A+1]),d(b[M+1][A]))}}function c(x){let y=new I;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(x),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let x=new I;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let _=m(x)/2/Math.PI+.5,S=p(x)/Math.PI+.5;a.push(_,1-S)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){let y=a[x+0],_=a[x+2],S=a[x+4],w=Math.max(y,_,S),b=Math.min(y,_,S);w>.9&&b<.1&&(y<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),S<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){let _=x*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){let x=new I,y=new I,_=new I,S=new I,w=new Z,b=new Z,M=new Z;for(let P=0,A=0;P<r.length;P+=9,A+=6){x.set(r[P+0],r[P+1],r[P+2]),y.set(r[P+3],r[P+4],r[P+5]),_.set(r[P+6],r[P+7],r[P+8]),w.set(a[A+0],a[A+1]),b.set(a[A+2],a[A+3]),M.set(a[A+4],a[A+5]),S.copy(x).add(y).add(_).divideScalar(3);let C=m(S);v(w,A+0,x,C),v(b,A+2,y,C),v(M,A+4,_,C)}}function v(x,y,_,S){S<0&&x.x===1&&(a[y]=x.x-1),_.x===0&&_.z===0&&(a[y]=S/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},ka=class i extends Oa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Z:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new He;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(et(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Rr=class extends On{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Z){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rl=class extends Rr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Iu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var tp=new I,np=new I,Hh=new Iu,Gh=new Iu,Vh=new Iu,Cl=class extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(np.subVectors(s[0],s[1]).add(s[0]),c=np);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(tp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=tp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Hh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Gh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Vh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Hh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Gh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Hh.calc(l),Gh.calc(l),Vh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ip(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function V0(i,e){let t=1-i;return t*t*e}function W0(i,e){return 2*(1-i)*i*e}function q0(i,e){return i*i*e}function ya(i,e,t,n){return V0(i,e)+W0(i,t)+q0(i,n)}function X0(i,e){let t=1-i;return t*t*t*e}function j0(i,e){let t=1-i;return 3*t*t*i*e}function K0(i,e){return 3*(1-i)*i*i*e}function J0(i,e){return i*i*i*e}function Ma(i,e,t,n,s){return X0(i,e)+j0(i,t)+K0(i,n)+J0(i,s)}var Ba=class extends On{constructor(e=new Z,t=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Z){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ma(e,s.x,r.x,a.x,o.x),Ma(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pl=class extends On{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ma(e,s.x,r.x,a.x,o.x),Ma(e,s.y,r.y,a.y,o.y),Ma(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},za=class extends On{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Il=class extends On{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends On{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,s.x,r.x,a.x),ya(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ll=class extends On{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,s.x,r.x,a.x),ya(e,s.y,r.y,a.y),ya(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ip(o,l.x,c.x,h.x,u.x),ip(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Z().fromArray(s))}return this}},$h=Object.freeze({__proto__:null,ArcCurve:Rl,CatmullRomCurve3:Cl,CubicBezierCurve:Ba,CubicBezierCurve3:Pl,EllipseCurve:Rr,LineCurve:za,LineCurve3:Il,QuadraticBezierCurve:Ha,QuadraticBezierCurve3:Ll,SplineCurve:Ga}),Dl=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $h[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new $h[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Va=class extends Dl{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new za(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ha(this.currentPoint.clone(),new Z(e,t),new Z(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ba(this.currentPoint.clone(),new Z(e,t),new Z(n,s),new Z(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ga(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Rr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},as=class extends Va{constructor(e){super(e),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Va().fromJSON(s))}return this}};function Y0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=im(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=tb(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Wa(r,a,t,o,l,c,0),a}function im(i,e,t,n,s){let r;if(s===db(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=sp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=sp(a/n|0,i[a],i[a+1],r);return r&&Cr(r,r.next)&&(Xa(r),r=r.next),r}function Cs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Cr(t,t.next)||Ft(t.prev,t,t.next)===0)){if(Xa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ab(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?$0(i,n,s,r):Z0(i)){e.push(l.i,i.i,c.i),Xa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Q0(Cs(i),e),Wa(i,e,t,n,s,r,2)):a===2&&eb(i,e,t,n,s,r):Wa(Cs(i),e,t,n,s,r,1);break}}}function Z0(i){let e=i.prev,t=i,n=i.next;if(Ft(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ba(s,o,r,l,a,c,g.x,g.y)&&Ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ft(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),p=Qh(f,g,e,t,n),x=Qh(v,m,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ba(o,h,l,u,c,d,y.x,y.y)&&Ft(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ba(o,h,l,u,c,d,_.x,_.y)&&Ft(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ba(o,h,l,u,c,d,y.x,y.y)&&Ft(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ba(o,h,l,u,c,d,_.x,_.y)&&Ft(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Q0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Cr(n,s)&&rm(n,t,t.next,s)&&qa(n,s)&&qa(s,n)&&(e.push(n.i,t.i,s.i),Xa(t),Xa(t.next),t=i=s),t=t.next}while(t!==i);return Cs(t)}function eb(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cb(a,o)){let l=am(a,o);a=Cs(a,a.next),l=Cs(l,l.next),Wa(a,e,t,n,s,r,0),Wa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function tb(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=im(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(lb(c))}s.sort(nb);for(let r=0;r<s.length;r++)t=ib(s[r],t);return t}function nb(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ib(i,e){let t=sb(i,e);if(!t)return e;let n=am(t,i);return Cs(n,n.next),Cs(t,t.next)}function sb(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Cr(i,t))return t;do{if(Cr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&sm(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);qa(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&rb(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function rb(i,e){return Ft(i.prev,i,e.prev)<0&&Ft(e.next,i,i.next)<0}function ab(i,e,t,n){let s=i;do s.z===0&&(s.z=Qh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ob(s)}function ob(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Qh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sm(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ba(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&sm(i,e,t,n,s,r,a,o)}function cb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hb(i,e)&&(qa(i,e)&&qa(e,i)&&ub(i,e)&&(Ft(i.prev,i,e.prev)||Ft(i,e.prev,e))||Cr(i,e)&&Ft(i.prev,i,i.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Cr(i,e){return i.x===e.x&&i.y===e.y}function rm(i,e,t,n){let s=hl(Ft(i,e,t)),r=hl(Ft(i,e,n)),a=hl(Ft(t,n,i)),o=hl(Ft(t,n,e));return!!(s!==r&&a!==o||s===0&&cl(i,t,e)||r===0&&cl(i,n,e)||a===0&&cl(t,i,n)||o===0&&cl(t,e,n))}function cl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function hl(i){return i>0?1:i<0?-1:0}function hb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&rm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function qa(i,e){return Ft(i.prev,i,i.next)<0?Ft(i,e,i.next)>=0&&Ft(i,i.prev,e)>=0:Ft(i,e,i.prev)<0||Ft(i,i.next,e)<0}function ub(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function am(i,e){let t=eu(i.i,i.x,i.y),n=eu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function sp(i,e,t,n){let s=eu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function eu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function db(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var tu=class{static triangulate(e,t,n=2){return Y0(e,t,n)}},vs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];rp(e),ap(n,e);let a=e.length;t.forEach(rp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ap(n,t[l]);let o=tu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function rp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ap(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ps=class i extends xt{constructor(e=new as([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:fb,y,_=!1,S,w,b,M;if(p){y=p.getSpacedPoints(h),_=!0,d=!1;let ee=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,ee),w=new I,b=new I,M=new I}d||(m=0,f=0,g=0,v=0);let P=o.extractPoints(c),A=P.shape,C=P.holes;if(!vs.isClockWise(A)){A=A.reverse();for(let ee=0,ue=C.length;ee<ue;ee++){let le=C[ee];vs.isClockWise(le)&&(C[ee]=le.reverse())}}function O(ee){let le=10000000000000001e-36,we=ee[0];for(let xe=1;xe<=ee.length;xe++){let je=xe%ee.length,De=ee[je],st=De.x-we.x,at=De.y-we.y,dt=st*st+at*at,U=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(we.x),Math.abs(we.y)),Vt=le*U*U;if(dt<=Vt){ee.splice(je,1),xe--;continue}we=De}}O(A),C.forEach(O);let L=C.length,H=A;for(let ee=0;ee<L;ee++){let ue=C[ee];A=A.concat(ue)}function W(ee,ue,le){return ue||Ve("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ue,le)}let G=A.length;function ne(ee,ue,le){let we,xe,je,De=ee.x-ue.x,st=ee.y-ue.y,at=le.x-ee.x,dt=le.y-ee.y,U=De*De+st*st,Vt=De*dt-st*at;if(Math.abs(Vt)>Number.EPSILON){let nt=Math.sqrt(U),Tt=Math.sqrt(at*at+dt*dt),me=ue.x-st/nt,zt=ue.y+De/nt,ke=le.x-dt/Tt,We=le.y+at/Tt,R=((ke-me)*dt-(We-zt)*at)/(De*dt-st*at);we=me+De*R-ee.x,xe=zt+st*R-ee.y;let T=we*we+xe*xe;if(T<=2)return new Z(we,xe);je=Math.sqrt(T/2)}else{let nt=!1;De>Number.EPSILON?at>Number.EPSILON&&(nt=!0):De<-Number.EPSILON?at<-Number.EPSILON&&(nt=!0):Math.sign(st)===Math.sign(dt)&&(nt=!0),nt?(we=-st,xe=De,je=Math.sqrt(U)):(we=De,xe=st,je=Math.sqrt(U/2))}return new Z(we/je,xe/je)}let q=[];for(let ee=0,ue=H.length,le=ue-1,we=ee+1;ee<ue;ee++,le++,we++)le===ue&&(le=0),we===ue&&(we=0),q[ee]=ne(H[ee],H[le],H[we]);let Q=[],te,Ee=q.concat();for(let ee=0,ue=L;ee<ue;ee++){let le=C[ee];te=[];for(let we=0,xe=le.length,je=xe-1,De=we+1;we<xe;we++,je++,De++)je===xe&&(je=0),De===xe&&(De=0),te[we]=ne(le[we],le[je],le[De]);Q.push(te),Ee=Ee.concat(te)}let ze;if(m===0)ze=vs.triangulateShape(H,C);else{let ee=[],ue=[];for(let le=0;le<m;le++){let we=le/m,xe=f*Math.cos(we*Math.PI/2),je=g*Math.sin(we*Math.PI/2)+v;for(let De=0,st=H.length;De<st;De++){let at=W(H[De],q[De],je);Oe(at.x,at.y,-xe),we===0&&ee.push(at)}for(let De=0,st=L;De<st;De++){let at=C[De];te=Q[De];let dt=[];for(let U=0,Vt=at.length;U<Vt;U++){let nt=W(at[U],te[U],je);Oe(nt.x,nt.y,-xe),we===0&&dt.push(nt)}we===0&&ue.push(dt)}}ze=vs.triangulateShape(ee,ue)}let j=ze.length,_e=g+v;for(let ee=0;ee<G;ee++){let ue=d?W(A[ee],Ee[ee],_e):A[ee];_?(b.copy(S.normals[0]).multiplyScalar(ue.x),w.copy(S.binormals[0]).multiplyScalar(ue.y),M.copy(y[0]).add(b).add(w),Oe(M.x,M.y,M.z)):Oe(ue.x,ue.y,0)}for(let ee=1;ee<=h;ee++)for(let ue=0;ue<G;ue++){let le=d?W(A[ue],Ee[ue],_e):A[ue];_?(b.copy(S.normals[ee]).multiplyScalar(le.x),w.copy(S.binormals[ee]).multiplyScalar(le.y),M.copy(y[ee]).add(b).add(w),Oe(M.x,M.y,M.z)):Oe(le.x,le.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){let ue=ee/m,le=f*Math.cos(ue*Math.PI/2),we=g*Math.sin(ue*Math.PI/2)+v;for(let xe=0,je=H.length;xe<je;xe++){let De=W(H[xe],q[xe],we);Oe(De.x,De.y,u+le)}for(let xe=0,je=C.length;xe<je;xe++){let De=C[xe];te=Q[xe];for(let st=0,at=De.length;st<at;st++){let dt=W(De[st],te[st],we);_?Oe(dt.x,dt.y+y[h-1].y,y[h-1].x+le):Oe(dt.x,dt.y,u+le)}}}Ae(),Ue();function Ae(){let ee=s.length/3;if(d){let ue=0,le=G*ue;for(let we=0;we<j;we++){let xe=ze[we];Pt(xe[2]+le,xe[1]+le,xe[0]+le)}ue=h+m*2,le=G*ue;for(let we=0;we<j;we++){let xe=ze[we];Pt(xe[0]+le,xe[1]+le,xe[2]+le)}}else{for(let ue=0;ue<j;ue++){let le=ze[ue];Pt(le[2],le[1],le[0])}for(let ue=0;ue<j;ue++){let le=ze[ue];Pt(le[0]+G*h,le[1]+G*h,le[2]+G*h)}}n.addGroup(ee,s.length/3-ee,0)}function Ue(){let ee=s.length/3,ue=0;ve(H,ue),ue+=H.length;for(let le=0,we=C.length;le<we;le++){let xe=C[le];ve(xe,ue),ue+=xe.length}n.addGroup(ee,s.length/3-ee,1)}function ve(ee,ue){let le=ee.length;for(;--le>=0;){let we=le,xe=le-1;xe<0&&(xe=ee.length-1);for(let je=0,De=h+m*2;je<De;je++){let st=G*je,at=G*(je+1),dt=ue+we+st,U=ue+xe+st,Vt=ue+xe+at,nt=ue+we+at;Ge(dt,U,Vt,nt)}}}function Oe(ee,ue,le){l.push(ee),l.push(ue),l.push(le)}function Pt(ee,ue,le){Qe(ee),Qe(ue),Qe(le);let we=s.length/3,xe=x.generateTopUV(n,s,we-3,we-2,we-1);it(xe[0]),it(xe[1]),it(xe[2])}function Ge(ee,ue,le,we){Qe(ee),Qe(ue),Qe(we),Qe(ue),Qe(le),Qe(we);let xe=s.length/3,je=x.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);it(je[0]),it(je[1]),it(je[3]),it(je[1]),it(je[2]),it(je[3])}function Qe(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function it(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return pb(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $h[s.type]().fromJSON(s)),new i(n,e.options)}},fb={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Z(r,a),new Z(o,l),new Z(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Z(a,1-l),new Z(c,1-u),new Z(d,1-g),new Z(v,1-p)]:[new Z(o,1-l),new Z(h,1-u),new Z(f,1-g),new Z(m,1-p)]}};function pb(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Pr=class i extends Oa{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},jt=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let x=p*d-a;for(let y=0;y<c;y++){let _=y*u-r;g.push(_,-x,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let y=x+c*p,_=x+c*(p+1),S=x+1+c*(p+1),w=x+1+c*p;f.push(y,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ja=class i extends xt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new I,g=new Z;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let x=p+m,y=x,_=x+n+1,S=x+n+2,w=x+1;o.push(y,_,w),o.push(_,S,w)}}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var kn=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let x=[],y=p/n,_=a+y*o,S=e*Math.cos(_),w=Math.sqrt(e*e-S*S),b=0;p===0&&a===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let M=0;M<=t;M++){let P=M/t,A=s+P*r;u.x=-w*Math.cos(A),u.y=S,u.z=w*Math.sin(A),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(P+b,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let y=h[p][x+1],_=h[p][x],S=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&f.push(y,_,w),(p!==n-1||l<Math.PI)&&f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Is=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new I,f=new I,g=new I;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let x=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,x=(s+1)*(v-1)+m-1,y=(s+1)*(v-1)+m,_=(s+1)*v+m;l.push(p,x,_),l.push(x,y,_)}this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ka=class extends un{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Te(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Gs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(op(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(op(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function vn(i){let e={};for(let t=0;t<i.length;t++){let n=Gs(i[t]);for(let s in n)e[s]=n[s]}return e}function op(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mb(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var qi={clone:Gs,merge:vn},gb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gb,this.fragmentShader=bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=mb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(s.value);break;case"v2":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new He().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ir=class extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mt=class extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mt=class extends mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ja=class extends un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nl=class extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fl=class extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function es(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function xb(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function lp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function _b(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ul=class extends li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kh,endingEnd:Kh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jh:r=e,o=2*t-n;break;case Yh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jh:a=e,l=2*n-t;break;case Yh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,x=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+x*a[c+S]+y*a[l+S]+_*a[u+S];return r}},Ol=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},kl=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bl=class extends li{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*d+g*2,x=u[p],y=u[p+1],_=e*d+g*2,S=h[_],w=h[_+1],b=yb(n,t,x,S,s);r[g]=om(b,v,y,w,m)}return r}};function om(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function vb(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function yb(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=om(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=vb(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),xa(e.settings)&&(n.settings={inTangents:es(e.settings.inTangents,Array),outTangents:es(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case Ss:t=this.InterpolantFactoryMethodLinear;break;case fl:t=this.InterpolantFactoryMethodSmooth;break;case jh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Ss;case this.InterpolantFactoryMethodSmooth:return fl;case this.InterpolantFactoryMethodBezier:return jh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;xa(this.settings)&&(cp(this.settings.inTangents,e),cp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;xa(this.settings)&&(hp(this.settings.inTangents,e),hp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&a0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,xa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function hp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ss;var Ni=class extends Cn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Ms;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};Ya.prototype.ValueTypeName="color";var Fi=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};Fi.prototype.ValueTypeName="number";var zl=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ot.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ui=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};Ui.prototype.ValueTypeName="quaternion";Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Ms;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};os.prototype.ValueTypeName="vector";var Za=class{constructor(e="",t=-1,n=[],s=Gp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ni(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Sb(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Cn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=xb(l);l=lp(l,1,h),c=lp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Fi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Mb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fi;case"vector":case"vector2":case"vector3":case"vector4":return os;case"color":return Ya;case"quaternion":return Ui;case"bool":case"boolean":return Ni;case"string":return Oi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Sb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Mb(i.type);if(i.times===void 0){let n=[],s=[];_b(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),xa(i.settings)&&(t.settings={inTangents:es(i.settings.inTangents,Float32Array),outTangents:es(i.settings.outTangents,Float32Array)}),t}var ri={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(up(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!up(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function up(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Lr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lm=new Lr,ci=class{constructor(e){this.manager=e!==void 0?e:lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai={},nu=class extends Error{constructor(e,t){super(e),this.response=t}},Dr=class extends ci{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ri.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:s});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ai[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,v=0,m=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{v+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let w=0,b=h.length;w<b;w++){let M=h[w];M.onProgress&&M.onProgress(S)}p.enqueue(_),x()}},y=>{p.error(y)})}}});return new Response(m)}else throw new nu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ri.add(`file:${e}`,c);let h=Ai[e];delete Ai[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ai[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fr=new WeakMap,Hl=class extends ci{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ri.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=fr.get(a);u===void 0&&(u=[],fr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=vr("img");function l(){h(),t&&t(this);let u=fr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}fr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),ri.remove(`image:${e}`);let d=fr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}fr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ri.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Ls=class extends ci{constructor(e){super(e)}load(e,t,n,s){let r=new Jt,a=new Hl(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ds=class extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ns=class extends Ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wh=new He,dp=new I,fp=new I,Nr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(dp),fp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===_r||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ul=new I,dl=new Ot,si=new I,$a=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ul,dl,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,dl,si.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ul,dl,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,dl,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new I,pp=new Z,mp=new Z,Nt=class extends $a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,pp,mp),t.subVectors(mp,pp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_a*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},iu=class extends Nr{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ts*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Fs=class extends Ds{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new iu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},su=class extends Nr{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0}},ki=class extends Ds{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bi=class extends $a{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ru=class extends Nr{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hi=class extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new ru}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var zi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var qh=new WeakMap,Qa=class extends ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ri.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{qh.has(a)===!0?(s&&s(qh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ri.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),qh.set(l,c),ri.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ri.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var pr=-90,mr=1,Fr=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(pr,mr,e,t);s.layers=this.layers,this.add(s);let r=new Nt(pr,mr,e,t);r.layers=this.layers,this.add(r);let a=new Nt(pr,mr,e,t);a.layers=this.layers,this.add(a);let o=new Nt(pr,mr,e,t);o.layers=this.layers,this.add(o);let l=new Nt(pr,mr,e,t);l.layers=this.layers,this.add(l);let c=new Nt(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Gl=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},eo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Tb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Tb(){this._document.hidden===!1&&this.reset()}var Du="\\[\\]\\.:\\/",wb=new RegExp("["+Du+"]","g"),Nu="[^"+Du+"]",Eb="[^"+Du.replace("\\.","")+"]",Ab=/((?:WC+[\/:])*)/.source.replace("WC",Nu),Rb=/(WCOD+)?/.source.replace("WCOD",Eb),Cb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nu),Pb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nu),Ib=new RegExp("^"+Ab+Rb+Cb+Pb+"$"),Lb=["material","materials","bones","map"],au=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wb,"")}static parseTrackName(e){let t=Ib.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=au;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vS=new Float32Array(1);var gp=new He,to=class{constructor(e,t,n=0,s=1/0){this.ray=new ns(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gp),this}intersectObject(e,t=!0,n=[]){return ou(e,this,n,t),n.sort(bp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ou(e[s],this,n,t);return n.sort(bp),n}};function bp(i,e){return i.distance-e.distance}function ou(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ou(r[a],e,t,!0)}}var zu=class zu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};zu.prototype.isMatrix2=!0;var lu=zu;function Fu(i,e,t,n){let s=Db(n);switch(t){case _u:return i*e;case Yl:return i*e/s.components*s.byteLength;case Zl:return i*e/s.components*s.byteLength;case ls:return i*e*2/s.components*s.byteLength;case $l:return i*e*2/s.components*s.byteLength;case vu:return i*e*3/s.components*s.byteLength;case Xn:return i*e*4/s.components*s.byteLength;case Ql:return i*e*4/s.components*s.byteLength;case oo:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(i,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(i,8)*Math.max(e,8)/2;case sc:case rc:case oc:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ac:case uo:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tc:case wc:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fo:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Db(i){switch(i){case Pn:case mu:return{byteLength:1,components:1};case Hr:case gu:case fn:return{byteLength:2,components:1};case Kl:case Jl:return{byteLength:2,components:4};case ti:case jl:case Bn:return{byteLength:4,components:1};case bu:case xu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Pm(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fb(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ob=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ax=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ex=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ax=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ox=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,kx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,e_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,s_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,r_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,u_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,__=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,F_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,G_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,W_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ev=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,av=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Ub,alphahash_pars_fragment:Ob,alphamap_fragment:kb,alphamap_pars_fragment:Bb,alphatest_fragment:zb,alphatest_pars_fragment:Hb,aomap_fragment:Gb,aomap_pars_fragment:Vb,batching_pars_vertex:Wb,batching_vertex:qb,begin_vertex:Xb,beginnormal_vertex:jb,bsdfs:Kb,iridescence_fragment:Jb,bumpmap_pars_fragment:Yb,clipping_planes_fragment:Zb,clipping_planes_pars_fragment:$b,clipping_planes_pars_vertex:Qb,clipping_planes_vertex:ex,color_fragment:tx,color_pars_fragment:nx,color_pars_vertex:ix,color_vertex:sx,common:rx,defaultnormal_vertex:ax,displacementmap_pars_vertex:ox,displacementmap_vertex:lx,emissivemap_fragment:cx,emissivemap_pars_fragment:hx,colorspace_fragment:ux,colorspace_pars_fragment:dx,envmap_fragment:fx,envmap_common_pars_fragment:px,envmap_pars_fragment:mx,envmap_pars_vertex:gx,envmap_physical_pars_fragment:Ax,envmap_vertex:bx,fog_vertex:xx,fog_pars_vertex:_x,fog_fragment:vx,fog_pars_fragment:yx,gradientmap_pars_fragment:Mx,lightmap_pars_fragment:Sx,lights_lambert_fragment:Tx,lights_lambert_pars_fragment:wx,lights_pars_begin:Ex,lights_toon_fragment:Rx,lights_toon_pars_fragment:Cx,lights_phong_fragment:Px,lights_phong_pars_fragment:Ix,lights_physical_fragment:Lx,lights_physical_pars_fragment:Dx,lights_fragment_begin:Nx,lights_fragment_maps:Fx,lights_fragment_end:Ux,lightprobes_pars_fragment:Ox,logdepthbuf_fragment:kx,logdepthbuf_pars_fragment:Bx,logdepthbuf_pars_vertex:zx,logdepthbuf_vertex:Hx,map_fragment:Gx,map_pars_fragment:Vx,map_particle_fragment:Wx,map_particle_pars_fragment:qx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:jx,morphinstance_vertex:Kx,morphcolor_vertex:Jx,morphnormal_vertex:Yx,morphtarget_pars_vertex:Zx,morphtarget_vertex:$x,normal_fragment_begin:Qx,normal_fragment_maps:e_,normal_pars_fragment:t_,normal_pars_vertex:n_,normal_vertex:i_,normalmap_pars_fragment:s_,clearcoat_normal_fragment_begin:r_,clearcoat_normal_fragment_maps:a_,clearcoat_pars_fragment:o_,iridescence_pars_fragment:l_,opaque_fragment:c_,packing:h_,premultiplied_alpha_fragment:u_,project_vertex:d_,dithering_fragment:f_,dithering_pars_fragment:p_,roughnessmap_fragment:m_,roughnessmap_pars_fragment:g_,shadowmap_pars_fragment:b_,shadowmap_pars_vertex:x_,shadowmap_vertex:__,shadowmask_pars_fragment:v_,skinbase_vertex:y_,skinning_pars_vertex:M_,skinning_vertex:S_,skinnormal_vertex:T_,specularmap_fragment:w_,specularmap_pars_fragment:E_,tonemapping_fragment:A_,tonemapping_pars_fragment:R_,transmission_fragment:C_,transmission_pars_fragment:P_,uv_pars_fragment:I_,uv_pars_vertex:L_,uv_vertex:D_,worldpos_vertex:N_,background_vert:F_,background_frag:U_,backgroundCube_vert:O_,backgroundCube_frag:k_,cube_vert:B_,cube_frag:z_,depth_vert:H_,depth_frag:G_,distance_vert:V_,distance_frag:W_,equirect_vert:q_,equirect_frag:X_,linedashed_vert:j_,linedashed_frag:K_,meshbasic_vert:J_,meshbasic_frag:Y_,meshlambert_vert:Z_,meshlambert_frag:$_,meshmatcap_vert:Q_,meshmatcap_frag:ev,meshnormal_vert:tv,meshnormal_frag:nv,meshphong_vert:iv,meshphong_frag:sv,meshphysical_vert:rv,meshphysical_frag:av,meshtoon_vert:ov,meshtoon_frag:lv,points_vert:cv,points_frag:hv,shadow_vert:uv,shadow_frag:dv,sprite_vert:fv,sprite_frag:pv},Me={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},pi={basic:{uniforms:vn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:vn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:vn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:vn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:vn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Te(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:vn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:vn([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:vn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:vn([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:vn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:vn([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:vn([Me.common,Me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:vn([Me.lights,Me.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};pi.physical={uniforms:vn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Ic={r:0,b:0,g:0},mv=new He,Im=new qe;Im.set(-1,0,0,0,1,0,0,0,1);function gv(i,e,t,n,s,r){let a=new Te(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){let _=x.backgroundBlurriness>0;y=e.get(y,_)}return y}function g(x){let y=!1,_=f(x);_===null?m(a,o):_&&_.isColor&&(m(_,1),y=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,y){let _=f(y);_&&_.isCubeTexture?(c===void 0&&(c=new Be(new Xt(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Gs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mv.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Im),c.material.toneMapped=Je.getTransfer(_.colorSpace)!==ft,(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Be(new jt(2,2),new an({name:"BackgroundMaterial",uniforms:Gs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(_.colorSpace)!==ft,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,y){x.getRGB(Ic,Lu(i)),t.buffers.color.setClear(Ic.r,Ic.g,Ic.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:v,dispose:p}}function bv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(C,N,O,L,H){let W=!1,G=u(C,L,O,N);r!==G&&(r=G,c(r.object)),W=f(C,L,O,H),W&&g(C,L,O,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(C,N,O,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,N,O,L){let H=L.wireframe===!0,W=n[N.id];W===void 0&&(W={},n[N.id]=W);let G=C.isInstancedMesh===!0?C.id:0,ne=W[G];ne===void 0&&(ne={},W[G]=ne);let q=ne[O.id];q===void 0&&(q={},ne[O.id]=q);let Q=q[H];return Q===void 0&&(Q=d(l()),q[H]=Q),Q}function d(C){let N=[],O=[],L=[];for(let H=0;H<t;H++)N[H]=0,O[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:L,object:C,attributes:{},index:null}}function f(C,N,O,L){let H=r.attributes,W=N.attributes,G=0,ne=O.getAttributes();for(let q in ne)if(ne[q].location>=0){let te=H[q],Ee=W[q];if(Ee===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor)),te===void 0||te.attribute!==Ee||Ee&&te.data!==Ee.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function g(C,N,O,L){let H={},W=N.attributes,G=0,ne=O.getAttributes();for(let q in ne)if(ne[q].location>=0){let te=W[q];te===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));let Ee={};Ee.attribute=te,te&&te.data&&(Ee.data=te.data),H[q]=Ee,G++}r.attributes=H,r.attributesNum=G,r.index=L}function v(){let C=r.newAttributes;for(let N=0,O=C.length;N<O;N++)C[N]=0}function m(C){p(C,0)}function p(C,N){let O=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;O[C]=1,L[C]===0&&(i.enableVertexAttribArray(C),L[C]=1),H[C]!==N&&(i.vertexAttribDivisor(C,N),H[C]=N)}function x(){let C=r.newAttributes,N=r.enabledAttributes;for(let O=0,L=N.length;O<L;O++)N[O]!==C[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function y(C,N,O,L,H,W,G){G===!0?i.vertexAttribIPointer(C,N,O,H,W):i.vertexAttribPointer(C,N,O,L,H,W)}function _(C,N,O,L){v();let H=L.attributes,W=O.getAttributes(),G=N.defaultAttributeValues;for(let ne in W){let q=W[ne];if(q.location>=0){let Q=H[ne];if(Q===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),Q!==void 0){let te=Q.normalized,Ee=Q.itemSize,ze=e.get(Q);if(ze===void 0)continue;let j=ze.buffer,_e=ze.type,Ae=ze.bytesPerElement,Ue=_e===i.INT||_e===i.UNSIGNED_INT||Q.gpuType===jl;if(Q.isInterleavedBufferAttribute){let ve=Q.data,Oe=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Pt=Q.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ge=0;Ge<q.locationSize;Ge++)p(q.location+Ge,ve.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ge=0;Ge<q.locationSize;Ge++)m(q.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Ge=0;Ge<q.locationSize;Ge++)y(q.location+Ge,Ee/q.locationSize,_e,te,Oe*Ae,(Pt+Ee/q.locationSize*Ge)*Ae,Ue)}else{if(Q.isInstancedBufferAttribute){for(let ve=0;ve<q.locationSize;ve++)p(q.location+ve,Q.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<q.locationSize;ve++)m(q.location+ve);i.bindBuffer(i.ARRAY_BUFFER,j);for(let ve=0;ve<q.locationSize;ve++)y(q.location+ve,Ee/q.locationSize,_e,te,Ee*Ae,Ee/q.locationSize*ve*Ae,Ue)}}else if(G!==void 0){let te=G[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(q.location,te);break;case 3:i.vertexAttrib3fv(q.location,te);break;case 4:i.vertexAttrib4fv(q.location,te);break;default:i.vertexAttrib1fv(q.location,te)}}}}x()}function S(){P();for(let C in n){let N=n[C];for(let O in N){let L=N[O];for(let H in L){let W=L[H];for(let G in W)h(W[G].object),delete W[G];delete L[H]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;let N=n[C.id];for(let O in N){let L=N[O];for(let H in L){let W=L[H];for(let G in W)h(W[G].object),delete W[G];delete L[H]}}delete n[C.id]}function b(C){for(let N in n){let O=n[N];for(let L in O){let H=O[L];if(H[C.id]===void 0)continue;let W=H[C.id];for(let G in W)h(W[G].object),delete W[G];delete H[C.id]}}}function M(C){for(let N in n){let O=n[N],L=C.isInstancedMesh===!0?C.id:0,H=O[L];if(H!==void 0){for(let W in H){let G=H[W];for(let ne in G)h(G[ne].object),delete G[ne];delete H[W]}delete O[L],Object.keys(O).length===0&&delete n[N]}}}function P(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function xv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _v(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==Xn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let M=b===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Pn&&b!==Bn&&!M&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,maxSamples:S,samples:w}}function vv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Qn,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,y=x*4,_=p.clippingState||null;l.value=_,_=h(g,d,y,f);for(let S=0;S!==y;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==v;++y,_+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var xo=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Da(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xt(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Hi});r.uniforms.tEquirect.value=t;let a=new Be(s,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=Kt),new Fr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},cm=256,yv=3,Mv=20,Lm=256,Dm=16,Sv=3,Tv=new I,wv=new Te,cs=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Fr(1,10,null),this._boxMesh=new Be(new Xt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Tv}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(wv));let m=new Fr(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cm,Ru(e))}_fromTexture(e,t){e.mapping===Bs||e.mapping===kr?this._setSize(e.image.length===0?cm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=hm(e,!1,!1),n=Math.log2(e)-yv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Bs||e.mapping===kr?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=um()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ev(),this._integrationMaterial=Av());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Dm);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Sv)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Lm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Rv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function hm(i,e,t){return new xo(i,{minFilter:qn,generateMipmaps:e,type:fn,colorSpace:Tn,depthBuffer:t})}function _o(i,e,t){return new an({name:i,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:dn,blending:Hi,depthTest:!1,depthWrite:!1})}function Ev(){return _o("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Lm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Av(){return _o("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Dm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rv(){return _o("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Mv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function um(){return _o("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function dm(){return _o("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Br||f===ql)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new xo(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Br||f===ql,v=f===Bs||f===kr;if(g||v){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new cs(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return g&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new cs(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Br?d.mapping=Bs:f===ql&&(d.mapping=kr),d}function l(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Pv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ys("WebGLRenderer: "+n+" extension not supported."),s}}}function Iv(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(g){let v=g.attributes;for(let m in v)e.update(v[m],i.ARRAY_BUFFER)}function u(g){let v=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let x=v!==null?v.array.length:m.array.length/3-1,y=m.count>=65535?Ra:Aa,_=new y(Math.ceil(x/3)*6,1),S=_.array;if(v!==null){let b=v.array;p=v.version;for(let M=0,P=0;M<x;M+=3){let A=b[M+0],C=b[M+1],N=b[M+2];S[P++]=A,S[P++]=C,S[P++]=C,S[P++]=N,S[P++]=N,S[P++]=A}}else{p=m.version;for(let b=0,M=0;b<x;b+=3){let P=b+0,A=b+1,C=b+2;S[M++]=P,S[M++]=A,S[M++]=A,S[M++]=C,S[M++]=C,S[M++]=P}}_.version=p;let w=r.get(g);w&&e.remove(w),r.set(g,_)}function d(g){let v=r.get(g);if(v){let m=g.index;m!==null&&v.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Lv(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Dv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Nv(i,e,t){let n=new WeakMap,s=new yt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let P=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let _=o.attributes.position.count*y,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*S*4*u),b=new wa(w,_,S,u);b.type=Bn,b.needsUpdate=!0;let M=y*4;for(let A=0;A<u;A++){let C=m[A],N=p[A],O=x[A],L=_*S*4*A;for(let H=0;H<C.count;H++){let W=H*M;f===!0&&(s.fromBufferAttribute(C,H),w[L+W+0]=s.x,w[L+W+1]=s.y,w[L+W+2]=s.z,w[L+W+3]=0),g===!0&&(s.fromBufferAttribute(N,H),w[L+W+4]=s.x,w[L+W+5]=s.y,w[L+W+6]=s.z,w[L+W+7]=0),v===!0&&(s.fromBufferAttribute(O,H),w[L+W+8]=s.x,w[L+W+9]=s.y,w[L+W+10]=s.z,w[L+W+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new Z(_,S)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fv(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Uv={[no]:"LINEAR_TONE_MAPPING",[io]:"REINHARD_TONE_MAPPING",[so]:"CINEON_TONE_MAPPING",[Gi]:"ACES_FILMIC_TONE_MAPPING",[ao]:"AGX_TONE_MAPPING",[ks]:"NEUTRAL_TONE_MAPPING",[ro]:"CUSTOM_TONE_MAPPING"};function Ov(i,e,t,n,s,r){let a=new Yt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new xt;h.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let u=new Ir({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Be(h,u),f=new Bi(-1,1,1,-1,0,1),g=null,v=null,m=!1,p,x=null,y=[],_=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),l!==null&&l.setSize(S,w);for(let b=0;b<y.length;b++){let M=y[b];M.setSize&&M.setSize(S,w)}},this.setEffects=function(S){y=S,_=y.length>0&&y[0].isRenderPass===!0;let w=a.width,b=a.height;y.length>0&&o===null&&(o=new Yt(w,b,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new Yt(w,b,{type:fn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&y.some(P=>P.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Li(w,b),r===!0&&(c.format=Vi,c.type=Hs)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let P=0;P<y.length;P++){let A=y[P];A.setSize&&A.setSize(w,b),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,w){if(m||S.toneMapping===di&&y.length===0)return!1;if(x=w,w!==null){let b=w.width,M=w.height;(a.width!==b||a.height!==M)&&this.setSize(b,M)}return _===!1&&S.setRenderTarget(a),p=S.toneMapping,S.toneMapping=di,!0},this.hasRenderPass=function(){return _},this.end=function(S,w){S.toneMapping=p,m=!0;let b=a,M=o;for(let P=0;P<y.length;P++){let A=y[P];A.enabled!==!1&&(A.render(S,M,b,w),A.needsSwap!==!1&&(b=M,M=M===o?l:o))}if(g!==S.outputColorSpace||v!==S.toneMapping){g=S.outputColorSpace,v=S.toneMapping,u.defines={},Je.getTransfer(g)===ft&&(u.defines.SRGB_TRANSFER="");let P=Uv[v];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(x),S.render(d,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Nm=new Jt,Fm=new Li(1,1),Um=new Na(1),Om=new wa,km=new Tl,Bm=new Da,fm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),bm=new Float32Array(4);function Wr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=fm[s];if(r===void 0&&(r=new Float32Array(s),fm[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nc(i,e){let t=pm[e];t===void 0&&(t=new Int32Array(e),pm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Gv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;bm.set(n),i.uniformMatrix2fv(this.addr,!1,bm),$t(t,n)}}function Vv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;gm.set(n),i.uniformMatrix3fv(this.addr,!1,gm),$t(t,n)}}function Wv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;mm.set(n),i.uniformMatrix4fv(this.addr,!1,mm),$t(t,n)}}function qv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function Kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function Jv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function $v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Fc(i){return i.version===0&&(i.compareFunction=Tu,i.needsUpdate=!0),i}function Qv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Fc(Fm):r=Nm,t.setTexture2D(e||r,s)}function ey(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||km,s)}function ty(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Fc(Um):r=Bm,t.setTextureCube(e||r,s)}function ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Om,s)}function iy(i){switch(i){case 5126:return kv;case 35664:return Bv;case 35665:return zv;case 35666:return Hv;case 35674:return Gv;case 35675:return Vv;case 35676:return Wv;case 5124:case 35670:return qv;case 35667:case 35671:return Xv;case 35668:case 35672:return jv;case 35669:case 35673:return Kv;case 5125:return Jv;case 36294:return Yv;case 36295:return Zv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}function sy(i,e){i.uniform1fv(this.addr,e)}function ry(i,e){let t=Wr(e,this.size,2);i.uniform2fv(this.addr,t)}function ay(i,e){let t=Wr(e,this.size,3);i.uniform3fv(this.addr,t)}function oy(i,e){let t=Wr(e,this.size,4);i.uniform4fv(this.addr,t)}function ly(i,e){let t=Wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cy(i,e){let t=Wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hy(i,e){let t=Wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function uy(i,e){i.uniform1iv(this.addr,e)}function dy(i,e){i.uniform2iv(this.addr,e)}function fy(i,e){i.uniform3iv(this.addr,e)}function py(i,e){i.uniform4iv(this.addr,e)}function my(i,e){i.uniform1uiv(this.addr,e)}function gy(i,e){i.uniform2uiv(this.addr,e)}function by(i,e){i.uniform3uiv(this.addr,e)}function xy(i,e){i.uniform4uiv(this.addr,e)}function _y(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Fc(Fm):a=Nm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function vy(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||km,r[a])}function yy(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Fc(Um):a=Bm;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function My(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Om,r[a])}function Sy(i){switch(i){case 5126:return sy;case 35664:return ry;case 35665:return ay;case 35666:return oy;case 35674:return ly;case 35675:return cy;case 35676:return hy;case 5124:case 35670:return uy;case 35667:case 35671:return dy;case 35668:case 35672:return fy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return by;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return My}}var Vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iy(t.type)}},Wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sy(t.type)}},qu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Hu=/(\w+)(\])?(\[|\.)?/g;function xm(i,e){i.seq.push(e),i.map[e.id]=e}function Ty(i,e,t){let n=i.name,s=n.length;for(Hu.lastIndex=0;;){let r=Hu.exec(n),a=Hu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xm(t,c===void 0?new Vu(o,i,e):new Wu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new qu(o),xm(t,u)),t=u}}}var Vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ty(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function _m(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var wy=37297,Ey=0;function Ay(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var vm=new qe;function Ry(i){Je._getMatrix(vm,Je.workingColorSpace,i);let e=`mat3( ${vm.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Sa:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ym(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ay(i.getShaderSource(e),o)}else return r}function Cy(i,e){let t=Ry(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Py={[no]:"Linear",[io]:"Reinhard",[so]:"Cineon",[Gi]:"ACESFilmic",[ao]:"AgX",[ks]:"Neutral",[ro]:"Custom"};function Iy(i,e){let t=Py[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lc=new I;function Ly(){Je.getLuminanceCoefficients(Lc);let i=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function Ny(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function bo(i){return i!==""}function Mm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Sm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(i){return i.replace(Uy,Oy)}function Oy(i,e){let t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xu(t)}var ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(i){return i.replace(ky,By)}function By(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var zy={[Us]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function Hy(i){return zy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Gy={[kr]:"ENVMAP_MODE_REFRACTION"};function Vy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Gy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wy={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[Bp]:"ENVMAP_BLENDING_MIX",[zp]:"ENVMAP_BLENDING_ADD"};function qy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Wy[i.combine]||"ENVMAP_BLENDING_NONE"}function Xy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Hy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Vy(t),u=qy(t),d=Dy(t),f=Ny(r),g=s.createProgram(),v,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(bo).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(bo).join(`
`),m.length>0&&(m+=`
`)):(v=[wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),m=[wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?$e.tonemapping_pars_fragment:"",t.toneMapping!==di?Iy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Cy("linearToOutputTexel",t.outputColorSpace),Ly(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),a=Xu(a),a=Mm(a,t),a=Sm(a,t),o=Xu(o),o=Mm(o,t),o=Sm(o,t),a=Tm(a),o=Tm(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=p+v+a,y=p+m+o,_=_m(s,s.VERTEX_SHADER,x),S=_m(s,s.FRAGMENT_SHADER,y);s.attachShader(g,_),s.attachShader(g,S),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(A){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(_)||"",O=s.getShaderInfoLog(S)||"",L=C.trim(),H=N.trim(),W=O.trim(),G=!0,ne=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,_,S);else{let q=ym(s,_,"vertex"),Q=ym(s,S,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+q+`
`+Q)}else L!==""?Le("WebGLProgram: Program Info Log:",L):(H===""||W==="")&&(ne=!1);ne&&(A.diagnostics={runnable:G,programLog:L,vertexShader:{log:H,prefix:v},fragmentShader:{log:W,prefix:m}})}s.deleteShader(_),s.deleteShader(S),b=new Vr(s,g),M=Fy(s,g)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,wy)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ey++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=S,this}var jy=0,ju=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ku(e),t.set(e,n)),n}},Ku=class{constructor(e){this.id=jy++,this.code=e,this.usedTimes=0}};function Ky(i){return i===ls||i===uo||i===fo}function Jy(i,e,t,n,s,r){let a=new Sr,o=new ju,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,M,P,A,C,N){let O=A.fog,L=C.geometry,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?A.environment:null,W=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,G=e.get(b.envMap||H,W),ne=d[b.type],q=n.precision;b.precision!==null&&(q=n.getMaxPrecision(b.precision),q!==b.precision&&Le("WebGLProgram.getParameters:",b.precision,"not supported, using",q,"instead."));let Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,te=Q!==void 0?Q.length:0,Ee=0;L.morphAttributes.position!==void 0&&(Ee=1),L.morphAttributes.normal!==void 0&&(Ee=2),L.morphAttributes.color!==void 0&&(Ee=3);let ze,j,_e,Ae;if(ne){let ye=pi[ne];ze=ye.vertexShader,j=ye.fragmentShader}else{ze=b.vertexShader,j=b.fragmentShader;let ye=o.getVertexShaderStage(b),_t=o.getFragmentShaderStage(b);o.update(b,ye,_t),_e=ye.id,Ae=_t.id}let Ue=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Oe=C.isInstancedMesh===!0,Pt=C.isBatchedMesh===!0,Ge=!!b.map,Qe=!!b.matcap,it=!!G,ee=it&&G.isPMREMTexture===!0,ue=!!b.aoMap,le=!!b.lightMap,we=!!b.bumpMap&&b.wireframe===!1,xe=!!b.normalMap,je=!!b.displacementMap,De=!!b.emissiveMap,st=!!b.metalnessMap,at=!!b.roughnessMap,dt=b.anisotropy>0,U=b.clearcoat>0,Vt=b.diffuseRoughness>0,nt=b.dispersion>0,Tt=b.retroreflectivity>0,me=b.iridescence>0,zt=b.sheen>0,ke=b.transmission>0,We=dt&&!!b.anisotropyMap,R=U&&!!b.clearcoatMap,T=U&&!!b.clearcoatNormalMap,B=U&&!!b.clearcoatRoughnessMap,se=Vt&&!!b.diffuseRoughnessMap,$=me&&!!b.iridescenceMap,ce=me&&!!b.iridescenceThicknessMap,ge=zt&&!!b.sheenColorMap,K=zt&&!!b.sheenRoughnessMap,J=!!b.specularMap,de=!!b.specularColorMap,D=!!b.specularIntensityMap,Y=ke&&!!b.transmissionMap,X=ke&&!!b.thicknessMap,fe=!!b.gradientMap,ae=!!b.alphaMap,he=b.alphaTest>0,Ne=!!b.alphaHash,Ze=!!b.extensions,re=di;b.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(re=i.toneMapping);let Fe=ee?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ke={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:ze,fragmentShader:j,defines:b.defines,customVertexShaderID:_e,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:q,batching:Pt,batchingColor:Pt&&C._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&C.instanceColor!==null,instancingMorph:Oe&&C.morphTexture!==null,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ge,matcap:Qe,envMap:it,envMapMode:it&&G.mapping,envMapPMREM:ee,envMapMaxLod:ee?Fe.length-1:null,envMapSize:ee?Fe[0].width:null,aoMap:ue,lightMap:le,bumpMap:we,normalMap:xe,displacementMap:je,emissiveMap:De,normalMapObjectSpace:xe&&b.normalMapType===Wp,normalMapTangentSpace:xe&&b.normalMapType===mo,packedNormalMap:xe&&b.normalMapType===mo&&Ky(b.normalMap.format),metalnessMap:st,roughnessMap:at,anisotropy:dt,anisotropyMap:We,clearcoat:U,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:B,diffuseRoughness:Vt,diffuseRoughnessMap:se,dispersion:nt,retroreflection:Tt,iridescence:me,iridescenceMap:$,iridescenceThicknessMap:ce,sheen:zt,sheenColorMap:ge,sheenRoughnessMap:K,specularMap:J,specularColorMap:de,specularIntensityMap:D,transmission:ke,transmissionMap:Y,thicknessMap:X,gradientMap:fe,opaque:b.transparent===!1&&b.blending===Or&&b.alphaToCoverage===!1,alphaMap:ae,alphaTest:he,alphaHash:Ne,combine:b.combine,mapUv:Ge&&f(b.map.channel),aoMapUv:ue&&f(b.aoMap.channel),lightMapUv:le&&f(b.lightMap.channel),bumpMapUv:we&&f(b.bumpMap.channel),normalMapUv:xe&&f(b.normalMap.channel),displacementMapUv:je&&f(b.displacementMap.channel),emissiveMapUv:De&&f(b.emissiveMap.channel),metalnessMapUv:st&&f(b.metalnessMap.channel),roughnessMapUv:at&&f(b.roughnessMap.channel),anisotropyMapUv:We&&f(b.anisotropyMap.channel),clearcoatMapUv:R&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(b.diffuseRoughnessMap.channel),iridescenceMapUv:$&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(b.sheenRoughnessMap.channel),specularMapUv:J&&f(b.specularMap.channel),specularColorMapUv:de&&f(b.specularColorMap.channel),specularIntensityMapUv:D&&f(b.specularIntensityMap.channel),transmissionMapUv:Y&&f(b.transmissionMap.channel),thicknessMapUv:X&&f(b.thicknessMap.channel),alphaMapUv:ae&&f(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xe||dt),vertexNormals:!!L.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(Ge||ae),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||L.attributes.normal===void 0&&xe===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ee,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:Ge&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===ft,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===on,flipSided:b.side===dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ze&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&b.extensions.multiDraw===!0||Pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function v(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(m(M,b),p(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function m(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapPMREM),b.push(M.envMapMaxLod),b.push(M.envMapSize),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.diffuseRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.numSunLights),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numSunLightShadows),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.numLightProbeGrids),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function p(b,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function x(b){let M=d[b.type],P;if(M){let A=pi[M];P=qi.clone(A.uniforms)}else P=b.uniforms;return P}function y(b,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new Xy(i,M,b,s),c.push(P),h.set(M,P)),P}function _(b){if(--b.usedTimes===0){let M=c.indexOf(b);c[M]=c[c.length-1],c.pop(),h.delete(b.cacheKey),b.destroy()}}function S(b){o.remove(b)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:x,acquireProgram:y,releaseProgram:_,releaseShaderCache:S,programs:c,dispose:w}}function Yy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Zy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Em(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Am(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},i[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=g,x.materialVariant=a(d),x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=m,x.group=p),e++,x}function l(d,f,g,v,m,p,x){x.reversedDepth===!0&&(m=-m);let y=o(d,f,g,v,m,p);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):t.push(y)}function c(d,f,g,v,m,p){let x=o(d,f,g,v,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||Zy),n.length>1&&n.sort(f||Em),s.length>1&&s.sort(f||Em)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function $y(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Am,i.set(n,[a])):s>=r.length?(a=new Am,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Te};break;case"SpotLight":t={position:new I,direction:new I,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function eM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tM=0;function nM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iM(i){let e=new Qy,t=eM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new He,a=new He;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,y=0,_=0,S=0,w=0,b=0,M=0,P=0,A=0;c.sort(nM);for(let N=0,O=c.length;N<O;N++){let L=c[N],H=L.color,W=L.intensity,G=L.distance,ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ls?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*W,u+=H.g*W,d+=H.b*W;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],W);A++}else if(L.isSunLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=ne;let Ee=Q.getViewportCount();for(let ze=0;ze<Ee;ze++)n.sunShadowMatrix[v+ze]=Q.getMatrix(ze),n.sunShadowCascade[v+ze]=Q._cascadeData[ze];v+=Ee,g++}n.sun[f]=q,f++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=q,m++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(H).multiplyScalar(W),q.distance=G,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[x]=q;let Q=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,Q.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[x]=Q.matrix,L.castShadow){let te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[x]=te,n.spotShadowMap[x]=ne,b++}x++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(H).multiplyScalar(W),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[y]=q,y++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let Q=L.shadow,te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=L.shadow.matrix,w++}n.point[p]=q,p++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(W),q.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[_]=q,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==y||C.hemiLength!==_||C.numSunShadows!==g||C.numDirectionalShadows!==S||C.numPointShadows!==w||C.numSpotShadows!==b||C.numSpotMaps!==M||C.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=y,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,C.sunLength=f,C.directionalLength=m,C.pointLength=p,C.spotLength=x,C.rectAreaLength=y,C.hemiLength=_,C.numSunShadows=g,C.numDirectionalShadows=S,C.numPointShadows=w,C.numSpotShadows=b,C.numSpotMaps=M,C.numLightProbes=A,n.version=tM++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){let _=c[x];if(_.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),u++}else if(_.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(_.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Rm(i){let e=new iM(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function sM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rm(i),e.set(s,[o])):r>=a.length?(o=new Rm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var rM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oM=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],lM=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Cm=new He,go=new I,Gu=new I;function cM(i,e,t){let n=new is,s=new Z,r=new Z,a=new yt,o=new Nl,l=new Fl,c={},h=t.maxTextureSize,u={[ui]:dn,[dn]:ui,[on]:on},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:rM,fragmentShader:aM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let p=this.type;this.render=function(w,b,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===vp&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Us);let P=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Hi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=p!==this.type;O&&b.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=w.length;L<H;L++){let W=w[L],G=W.shadow;if(G===void 0){Le("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ne=G.getFrameExtents();s.multiply(ne),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ur){if(W.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Yt(s.x,s.y,{format:ls,type:fn,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),G.map.texture.name=W.name+".shadowMap",G.map.depthTexture=new Li(s.x,s.y,Bn),G.map.depthTexture.name=W.name+".shadowMapDepth",G.map.depthTexture.format=Pi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ut,G.map.depthTexture.magFilter=Ut}else W.isPointLight?(G.map=new xo(s.x),G.map.depthTexture=new Na(s.x,ti)):(G.map=new Yt(s.x,s.y),G.map.depthTexture=new Li(s.x,s.y,ti)),G.map.depthTexture.name=W.name+".shadowMap",G.map.depthTexture.format=Pi,this.type===Us?(G.map.depthTexture.compareFunction=q?Su:Mu,G.map.depthTexture.minFilter=Kt,G.map.depthTexture.magFilter=Kt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ut,G.map.depthTexture.magFilter=Ut);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();W.isPointLight!==!0&&G.updateMatrices(W,M);let te=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:M.layers;for(let Ee=0;Ee<Q;Ee++){let ze=G.getCamera(Ee);if(W.isPointLight){let j=G.camera,_e=G.matrix,Ae=W.distance||j.far;Ae!==j.far&&(j.far=Ae,j.updateProjectionMatrix()),go.setFromMatrixPosition(W.matrixWorld),j.position.copy(go),Gu.copy(j.position),Gu.add(oM[Ee]),j.up.copy(lM[Ee]),j.lookAt(Gu),j.updateMatrixWorld(),_e.makeTranslation(-go.x,-go.y,-go.z),Cm.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Cm,j.coordinateSystem,j.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(G.map),i.clear());let j=G.getViewport(Ee);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),N.viewport(a)}n=G.getFrustum(Ee),_(b,M,ze,W,te,this.type)}G.isPointLightShadow!==!0&&this.type===Ur&&x(G,M),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(P,A,C)};function x(w,b){let M=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Yt(s.x,s.y,{format:ls,type:fn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,M,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,M,f,v,null)}function y(w,b,M,P){let A=null,C=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)A=C;else if(A=M.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let N=A.uuid,O=b.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let H=L[O];H===void 0&&(H=A.clone(),L[O]=H,b.addEventListener("dispose",S)),A=H}if(A.visible=b.visible,A.wireframe=b.wireframe,P===Ur?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:u[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=i.properties.get(A);N.light=M}return A}function _(w,b,M,P,A,C){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Ur)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let L=e.update(w),H=w.material;if(Array.isArray(H)){let W=L.groups;for(let G=0,ne=W.length;G<ne;G++){let q=W[G],Q=H[q.materialIndex];if(Q&&Q.visible){let te=y(w,Q,P,C);w.onBeforeShadow(i,w,b,M,L,te,q),i.renderBufferDirect(M,null,L,te,w,q),w.onAfterShadow(i,w,b,M,L,te,q)}}}else if(H.visible){let W=y(w,H,P,C);w.onBeforeShadow(i,w,b,M,L,W,null),i.renderBufferDirect(M,null,L,W,w,null),w.onAfterShadow(i,w,b,M,L,W,null)}}let O=w.children;for(let L=0,H=O.length;L<H;L++)_(O[L],b,M,P,A,C)}function S(w){w.target.removeEventListener("dispose",S);for(let M in c){let P=c[M],A=w.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function hM(i,e){function t(){let D=!1,Y=new yt,X=null,fe=new yt(0,0,0,0);return{setMask:function(ae){X!==ae&&!D&&(i.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){D=ae},setClear:function(ae,he,Ne,Ze,re){re===!0&&(ae*=Ze,he*=Ze,Ne*=Ze),Y.set(ae,he,Ne,Ze),fe.equals(Y)===!1&&(i.clearColor(ae,he,Ne,Ze),fe.copy(Y))},reset:function(){D=!1,X=null,fe.set(-1,0,0,0)}}}function n(){let D=!1,Y=!1,X=null,fe=null,ae=null;return{setReversed:function(he){if(Y!==he){let Ne=e.get("EXT_clip_control");he?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),Y=he;let Ze=ae;ae=null,this.setClear(Ze)}},getReversed:function(){return Y},setTest:function(he){he?ve(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(he){X!==he&&!D&&(i.depthMask(he),X=he)},setFunc:function(he){if(Y&&(he=em[he]),fe!==he){switch(he){case ml:i.depthFunc(i.NEVER);break;case gl:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case xl:i.depthFunc(i.EQUAL);break;case _l:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=he}},setLocked:function(he){D=he},setClear:function(he){ae!==he&&(ae=he,Y&&(he=1-he),i.clearDepth(he))},reset:function(){D=!1,X=null,fe=null,ae=null,Y=!1}}}function s(){let D=!1,Y=null,X=null,fe=null,ae=null,he=null,Ne=null,Ze=null,re=null;return{setTest:function(Fe){D||(Fe?ve(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(Fe){Y!==Fe&&!D&&(i.stencilMask(Fe),Y=Fe)},setFunc:function(Fe,Ke,ye){(X!==Fe||fe!==Ke||ae!==ye)&&(i.stencilFunc(Fe,Ke,ye),X=Fe,fe=Ke,ae=ye)},setOp:function(Fe,Ke,ye){(he!==Fe||Ne!==Ke||Ze!==ye)&&(i.stencilOp(Fe,Ke,ye),he=Fe,Ne=Ke,Ze=ye)},setLocked:function(Fe){D=Fe},setClear:function(Fe){re!==Fe&&(i.clearStencil(Fe),re=Fe)},reset:function(){D=!1,Y=null,X=null,fe=null,ae=null,he=null,Ne=null,Ze=null,re=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,x=null,y=null,_=null,S=null,w=null,b=null,M=new Te(0,0,0),P=0,A=!1,C=null,N=null,O=null,L=null,H=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=ne>=2);let Q=null,te={},Ee=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),j=new yt().fromArray(Ee),_e=new yt().fromArray(ze);function Ae(D,Y,X,fe){let ae=new Uint8Array(4),he=i.createTexture();i.bindTexture(D,he),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<X;Ne++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(Y+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return he}let Ue={};Ue[i.TEXTURE_2D]=Ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=Ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[i.TEXTURE_2D_ARRAY]=Ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=Ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(i.DEPTH_TEST),a.setFunc(br),we(!1),xe(cu),ve(i.CULL_FACE),ue(Hi);function ve(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Oe(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Pt(D,Y){return d[D]!==Y?(i.bindFramebuffer(D,Y),d[D]=Y,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Y),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function Ge(D,Y){let X=g,fe=!1;if(D){X=f.get(Y),X===void 0&&(X=[],f.set(Y,X));let ae=D.textures;if(X.length!==ae.length||X[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Ne=ae.length;he<Ne;he++)X[he]=i.COLOR_ATTACHMENT0+he;X.length=ae.length,fe=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,fe=!0);fe&&i.drawBuffers(X)}function Qe(D){return v!==D?(i.useProgram(D),v=D,!0):!1}let it={[Os]:i.FUNC_ADD,[Mp]:i.FUNC_SUBTRACT,[Sp]:i.FUNC_REVERSE_SUBTRACT};it[Tp]=i.MIN,it[wp]=i.MAX;let ee={[Ep]:i.ZERO,[Ap]:i.ONE,[Rp]:i.SRC_COLOR,[du]:i.SRC_ALPHA,[Np]:i.SRC_ALPHA_SATURATE,[Lp]:i.DST_COLOR,[Pp]:i.DST_ALPHA,[Cp]:i.ONE_MINUS_SRC_COLOR,[fu]:i.ONE_MINUS_SRC_ALPHA,[Dp]:i.ONE_MINUS_DST_COLOR,[Ip]:i.ONE_MINUS_DST_ALPHA,[Fp]:i.CONSTANT_COLOR,[Up]:i.ONE_MINUS_CONSTANT_COLOR,[Op]:i.CONSTANT_ALPHA,[kp]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(D,Y,X,fe,ae,he,Ne,Ze,re,Fe){if(D===Hi){m===!0&&(Oe(i.BLEND),m=!1);return}if(m===!1&&(ve(i.BLEND),m=!0),D!==yp){if(D!==p||Fe!==A){if((x!==Os||S!==Os)&&(i.blendEquation(i.FUNC_ADD),x=Os,S=Os),Fe)switch(D){case Or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _n:i.blendFunc(i.ONE,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",D);break}else switch(D){case Or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hu:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uu:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",D);break}y=null,_=null,w=null,b=null,M.set(0,0,0),P=0,p=D,A=Fe}return}ae=ae||Y,he=he||X,Ne=Ne||fe,(Y!==x||ae!==S)&&(i.blendEquationSeparate(it[Y],it[ae]),x=Y,S=ae),(X!==y||fe!==_||he!==w||Ne!==b)&&(i.blendFuncSeparate(ee[X],ee[fe],ee[he],ee[Ne]),y=X,_=fe,w=he,b=Ne),(Ze.equals(M)===!1||re!==P)&&(i.blendColor(Ze.r,Ze.g,Ze.b,re),M.copy(Ze),P=re),p=D,A=!1}function le(D,Y){D.side===on?Oe(i.CULL_FACE):ve(i.CULL_FACE);let X=D.side===dn;Y&&(X=!X),we(X),D.blending===Or&&D.transparent===!1?ue(Hi):ue(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let fe=D.stencilWrite;o.setTest(fe),fe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),De(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(D){C!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),C=D)}function xe(D){D!==xp?(ve(i.CULL_FACE),D!==N&&(D===cu?i.cullFace(i.BACK):D===_p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),N=D}function je(D){D!==O&&(G&&i.lineWidth(D),O=D)}function De(D,Y,X){D?(ve(i.POLYGON_OFFSET_FILL),(L!==Y||H!==X)&&(L=Y,H=X,a.getReversed()&&(Y=-Y,X=-X),i.polygonOffset(Y,X))):Oe(i.POLYGON_OFFSET_FILL)}function st(D){D?ve(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function at(D){D===void 0&&(D=i.TEXTURE0+W-1),Q!==D&&(i.activeTexture(D),Q=D)}function dt(D,Y,X){X===void 0&&(Q===null?X=i.TEXTURE0+W-1:X=Q);let fe=te[X];fe===void 0&&(fe={type:void 0,texture:void 0},te[X]=fe),(fe.type!==D||fe.texture!==Y)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(D,Y||Ue[D]),fe.type=D,fe.texture=Y)}function U(){let D=te[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Vt(){try{i.compressedTexImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function Tt(){try{i.texSubImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function me(){try{i.texSubImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function zt(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function We(){try{i.texStorage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function R(){try{i.texStorage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function T(){try{i.texImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function B(){try{i.texImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function se(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function $(D,Y){u[D]!==Y&&(i.pixelStorei(D,Y),u[D]=Y)}function ce(D){j.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),j.copy(D))}function ge(D){_e.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),_e.copy(D))}function K(D,Y){let X=c.get(Y);X===void 0&&(X=new WeakMap,c.set(Y,X));let fe=X.get(D);fe===void 0&&(fe=i.getUniformBlockIndex(Y,D.name),i.uniformBlockBinding(Y,fe,fe),X.set(D,fe))}function J(D,Y,X){let ae=c.get(Y).get(D);l[ae]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,ae,X),l[ae]=X)}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,te={},d={},l={},f=new WeakMap,g=[],v=null,m=!1,p=null,x=null,y=null,_=null,S=null,w=null,b=null,M=new Te(0,0,0),P=0,A=!1,C=null,N=null,O=null,L=null,H=null,j.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:Oe,bindFramebuffer:Pt,drawBuffers:Ge,useProgram:Qe,setBlending:ue,setMaterial:le,setFlipSided:we,setCullFace:xe,setLineWidth:je,setPolygonOffset:De,setScissorTest:st,activeTexture:at,bindTexture:dt,unbindTexture:U,compressedTexImage2D:Vt,compressedTexImage3D:nt,texImage2D:T,texImage3D:B,pixelStorei:$,getParameter:se,updateUBOMapping:K,uniformBlockBinding:J,texStorage2D:We,texStorage3D:R,texSubImage2D:Tt,texSubImage3D:me,compressedTexSubImage2D:zt,compressedTexSubImage3D:ke,scissor:ce,viewport:ge,reset:de}}function uM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,v=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,T){return m?new OffscreenCanvas(R,T):vr("canvas")}function x(R,T,B){let se=1,$=We(R);if(($.width>B||$.height>B)&&(se=B/Math.max($.width,$.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ce=Math.floor(se*$.width),ge=Math.floor(se*$.height);d===void 0&&(d=p(ce,ge));let K=T?p(ce,ge):d;return K.width=ce,K.height=ge,K.getContext("2d").drawImage(R,0,0,ce,ge),Le("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ce+"x"+ge+")."),K}else return"data"in R&&Le("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function y(R){return R.generateMipmaps}function _(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,T,B,se,$,ce=!1){if(R!==null){if(i[R]!==void 0)return i[R];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge;se&&(ge=e.get("EXT_texture_norm16"),ge||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=T;if(T===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&ge&&(K=ge.R16_EXT),B===i.SHORT&&ge&&(K=ge.R16_SNORM_EXT)),T===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),T===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&ge&&(K=ge.RG16_EXT),B===i.SHORT&&ge&&(K=ge.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),T===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),T===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),T===i.RGB&&(B===i.UNSIGNED_SHORT&&ge&&(K=ge.RGB16_EXT),B===i.SHORT&&ge&&(K=ge.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),T===i.RGBA){let J=ce?Sa:Je.getTransfer($);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=J===ft?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ge&&(K=ge.RGBA16_EXT),B===i.SHORT&&ge&&(K=ge.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(R,T){let B;return R?T===null||T===ti||T===Hs?B=i.DEPTH24_STENCIL8:T===Bn?B=i.DEPTH32F_STENCIL8:T===Hr&&(B=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ti||T===Hs?B=i.DEPTH_COMPONENT24:T===Bn?B=i.DEPTH_COMPONENT32F:T===Hr&&(B=i.DEPTH_COMPONENT16),B}function M(R,T){return y(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ut&&R.minFilter!==Kt?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function P(R){let T=new WeakRef(R);n.get(R).__ref=T,g.add(T),v.register(R,T,T)}function A(R){let T=n.get(R).__ref;T!==void 0&&(g.delete(T),v.unregister(T))}function C(R){O(R.target)}function N(R){L(R.target)}function O(R){R.removeEventListener("dispose",C),A(R),W(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function L(R){R.removeEventListener("dispose",N),A(R),ne(R)}function H(){for(let R of g){let T=R.deref();T!==void 0&&(T.isRenderTarget===!0?L(T):O(T))}g.clear(),u.clear()}function W(R){let T=n.get(R);if(T.__webglInit===void 0)return;let B=R.source,se=f.get(B);if(se){let $=se[T.__cacheKey];$.usedTimes--,$.usedTimes===0&&G(R),Object.keys(se).length===0&&f.delete(B)}n.remove(R)}function G(R){let T=n.get(R);i.deleteTexture(T.__webglTexture);let B=R.source,se=f.get(B);delete se[T.__cacheKey],a.memory.textures--}function ne(R){let T=n.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();let B=R.depthTexture;if(B&&B.renderTarget===R&&O(B),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let ce=0;ce<T.__webglFramebuffer[$].length;ce++)i.deleteFramebuffer(T.__webglFramebuffer[$][ce]);else i.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)i.deleteFramebuffer(T.__webglFramebuffer[$]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let se=R.textures;for(let $=0,ce=se.length;$<ce;$++){let ge=n.get(se[$]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(se[$])}n.remove(R)}let q=0;function Q(){q=0}function te(){return q}function Ee(R){q=R}function ze(){let R=q;return R>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,R}function j(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function _e(R,T){let B=n.get(R);if(R.isVideoTexture&&zt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let se=R.image;if(se===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{le(B,R,T);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+T)}function Ae(R,T){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){le(B,R,T);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+T)}function Ue(R,T){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){le(B,R,T);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+T)}function ve(R,T){let B=n.get(R);if(R.version>0&&B.__version!==R.version){we(B,R,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+T)}let Oe={[hn]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[xr]:i.MIRRORED_REPEAT},Pt={[Ut]:i.NEAREST,[Xl]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},Ge={[Xp]:i.NEVER,[Tu]:i.ALWAYS,[jp]:i.LESS,[Mu]:i.LEQUAL,[Kp]:i.EQUAL,[Su]:i.GEQUAL,[Jp]:i.GREATER,[Yp]:i.NOTEQUAL};function Qe(R,T){if(T.type===Bn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Kt||T.magFilter===zr||T.magFilter===zs||T.magFilter===qn||T.minFilter===Kt||T.minFilter===zr||T.minFilter===zs||T.minFilter===qn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Oe[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Oe[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Oe[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Pt[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Pt[T.minFilter]),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ut||T.minFilter!==zs&&T.minFilter!==qn||T.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function it(R,T){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",C),P(T));let se=T.source,$=f.get(se);$===void 0&&($={},f.set(se,$));let ce=j(T);if(ce!==R.__cacheKey){$[ce]===void 0&&($[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[ce].usedTimes++;let ge=$[R.__cacheKey];ge!==void 0&&($[R.__cacheKey].usedTimes--,ge.usedTimes===0&&G(T)),R.__cacheKey=ce,R.__webglTexture=$[ce].texture}return B}function ee(R,T,B){return Math.floor(Math.floor(R/B)/T)}function ue(R,T,B,se){let ce=R.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,B,se,T.data);else{ce.sort((D,Y)=>D.start-Y.start);let ge=0;for(let D=1;D<ce.length;D++){let Y=ce[ge],X=ce[D],fe=Y.start+Y.count,ae=ee(X.start,T.width,4),he=ee(Y.start,T.width,4);X.start<=fe+1&&ae===he&&ee(X.start+X.count-1,T.width,4)===ae?Y.count=Math.max(Y.count,X.start+X.count-Y.start):(++ge,ce[ge]=X)}ce.length=ge+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let D=0,Y=ce.length;D<Y;D++){let X=ce[D],fe=Math.floor(X.start/4),ae=Math.ceil(X.count/4),he=fe%T.width,Ne=Math.floor(fe/T.width),Ze=ae,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(i.TEXTURE_2D,0,he,Ne,Ze,re,B,se,T.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function le(R,T,B){let se=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(se=i.TEXTURE_3D);let $=it(R,T),ce=T.source;t.bindTexture(se,R.__webglTexture,i.TEXTURE0+B);let ge=n.get(ce);if(ce.version!==ge.__version||$===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let re=Je.getPrimaries(Je.workingColorSpace),Fe=T.colorSpace===Wi?null:Je.getPrimaries(T.colorSpace),Ke=T.colorSpace===Wi||re===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let J=x(T.image,!1,s.maxTextureSize);J=ke(T,J);let de=r.convert(T.format,T.colorSpace),D=r.convert(T.type),Y=w(T.internalFormat,de,D,T.normalized,T.colorSpace,T.isVideoTexture);Qe(se,T);let X,fe=T.mipmaps,ae=T.isVideoTexture!==!0,he=ge.__version===void 0||$===!0,Ne=ce.dataReady,Ze=M(T,J);if(T.isDepthTexture)Y=b(T.format===Vi,T.type),he&&(ae?t.texStorage2D(i.TEXTURE_2D,1,Y,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Y,J.width,J.height,0,de,D,null));else if(T.isDataTexture)if(fe.length>0){ae&&he&&t.texStorage2D(i.TEXTURE_2D,Ze,Y,fe[0].width,fe[0].height);for(let re=0,Fe=fe.length;re<Fe;re++)X=fe[re],ae?Ne&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,X.width,X.height,de,D,X.data):t.texImage2D(i.TEXTURE_2D,re,Y,X.width,X.height,0,de,D,X.data);T.generateMipmaps=!1}else ae?(he&&t.texStorage2D(i.TEXTURE_2D,Ze,Y,J.width,J.height),Ne&&ue(T,J,de,D)):t.texImage2D(i.TEXTURE_2D,0,Y,J.width,J.height,0,de,D,J.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,Y,fe[0].width,fe[0].height,J.depth);for(let re=0,Fe=fe.length;re<Fe;re++)if(X=fe[re],T.format!==Xn)if(de!==null)if(ae){if(Ne)if(T.layerUpdates.size>0){let Ke=Fu(X.width,X.height,T.format,T.type);for(let ye of T.layerUpdates){let _t=X.data.subarray(ye*Ke/X.data.BYTES_PER_ELEMENT,(ye+1)*Ke/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,ye,X.width,X.height,1,de,_t)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,J.depth,de,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Y,X.width,X.height,J.depth,0,X.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,J.depth,de,D,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Y,X.width,X.height,J.depth,0,de,D,X.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ae&&he&&t.texStorage2D(i.TEXTURE_2D,Ze,Y,fe[0].width,fe[0].height);for(let re=0,Fe=fe.length;re<Fe;re++)X=fe[re],T.format!==Xn?de!==null?ae?Ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,X.width,X.height,de,X.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Y,X.width,X.height,0,X.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Ne&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,X.width,X.height,de,D,X.data):t.texImage2D(i.TEXTURE_2D,re,Y,X.width,X.height,0,de,D,X.data)}else if(T.isDataArrayTexture)if(ae){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,Y,J.width,J.height,J.depth),Ne)if(T.layerUpdates.size>0){let re=Fu(J.width,J.height,T.format,T.type);for(let Fe of T.layerUpdates){let Ke=J.data.subarray(Fe*re/J.data.BYTES_PER_ELEMENT,(Fe+1)*re/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,J.width,J.height,1,de,D,Ke)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,D,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Y,J.width,J.height,J.depth,0,de,D,J.data);else if(T.isData3DTexture)ae?(he&&t.texStorage3D(i.TEXTURE_3D,Ze,Y,J.width,J.height,J.depth),Ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,D,J.data)):t.texImage3D(i.TEXTURE_3D,0,Y,J.width,J.height,J.depth,0,de,D,J.data);else if(T.isFramebufferTexture){if(he)if(ae)t.texStorage2D(i.TEXTURE_2D,Ze,Y,J.width,J.height);else{let re=J.width,Fe=J.height;for(let Ke=0;Ke<Ze;Ke++)t.texImage2D(i.TEXTURE_2D,Ke,Y,re,Fe,0,de,D,null),re>>=1,Fe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),J.parentNode!==re){re.appendChild(J),u.add(T),re.onpaint=Fe=>{let Ke=Fe.changedElements;for(let ye of u)Ke.includes(ye.image)&&(ye.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Ke=i.RGBA,ye=i.RGBA,_t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ke,ye,_t,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(ae&&he){let re=We(fe[0]);t.texStorage2D(i.TEXTURE_2D,Ze,Y,re.width,re.height)}for(let re=0,Fe=fe.length;re<Fe;re++)X=fe[re],ae?Ne&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,de,D,X):t.texImage2D(i.TEXTURE_2D,re,Y,de,D,X);T.generateMipmaps=!1}else if(ae){if(he){let re=We(J);t.texStorage2D(i.TEXTURE_2D,Ze,Y,re.width,re.height)}Ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,D,J)}else t.texImage2D(i.TEXTURE_2D,0,Y,de,D,J);y(T)&&T.mipmapsAutoUpdate===!0&&_(se),ge.__version=ce.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function we(R,T,B){if(T.image.length!==6)return;let se=it(R,T),$=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let ce=n.get($);if($.version!==ce.__version||se===!0){t.activeTexture(i.TEXTURE0+B);let ge=Je.getPrimaries(Je.workingColorSpace),K=T.colorSpace===Wi?null:Je.getPrimaries(T.colorSpace),J=T.colorSpace===Wi||ge===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let de=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,Y=[];for(let ye=0;ye<6;ye++)!de&&!D?Y[ye]=x(T.image[ye],!0,s.maxCubemapSize):Y[ye]=D?T.image[ye].image:T.image[ye],Y[ye]=ke(T,Y[ye]);let X=Y[0],fe=r.convert(T.format,T.colorSpace),ae=r.convert(T.type),he=w(T.internalFormat,fe,ae,T.normalized,T.colorSpace),Ne=T.isVideoTexture!==!0,Ze=ce.__version===void 0||se===!0,re=$.dataReady,Fe=M(T,X);Qe(i.TEXTURE_CUBE_MAP,T);let Ke;if(T.isDepthTexture){if(he=b(T.format===Vi,T.type),Ze)if(Ne)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,he,X.width,X.height);else for(let ye=0;ye<6;ye++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,X.width,X.height,0,fe,ae,null)}else if(de){Ne&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,he,X.width,X.height);for(let ye=0;ye<6;ye++){Ke=Y[ye].mipmaps;for(let _t=0;_t<Ke.length;_t++){let en=Ke[_t];T.format!==Xn?fe!==null?Ne?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t,0,0,en.width,en.height,fe,en.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t,he,en.width,en.height,0,en.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t,0,0,en.width,en.height,fe,ae,en.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t,he,en.width,en.height,0,fe,ae,en.data)}}}else{if(Ke=T.mipmaps,Ne&&Ze){Ke.length>0&&Fe++;let ye=We(Y[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,he,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(D){Ne?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Y[ye].width,Y[ye].height,fe,ae,Y[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,Y[ye].width,Y[ye].height,0,fe,ae,Y[ye].data);for(let _t=0;_t<Ke.length;_t++){let ji=Ke[_t].image[ye].image;Ne?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t+1,0,0,ji.width,ji.height,fe,ae,ji.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t+1,he,ji.width,ji.height,0,fe,ae,ji.data)}}else{Ne?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,fe,ae,Y[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,fe,ae,Y[ye]);for(let _t=0;_t<Ke.length;_t++){let en=Ke[_t];Ne?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t+1,0,0,fe,ae,en.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t+1,he,fe,ae,en.image[ye])}}}y(T)&&T.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),ce.__version=$.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function xe(R,T,B,se,$,ce){let ge=r.convert(B.format,B.colorSpace),K=r.convert(B.type),J=w(B.internalFormat,ge,K,B.normalized,B.colorSpace),de=n.get(T),D=n.get(B);if(D.__renderTarget=T,!de.__hasExternalTextures){let Y=Math.max(1,T.width>>ce),X=Math.max(1,T.height>>ce);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ce,J,Y,X,T.depth,0,ge,K,null):t.texImage2D($,ce,J,Y,X,0,ge,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),me(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,$,D.__webglTexture,0,Tt(T)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,$,D.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(R,T,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer){let se=T.depthTexture,$=se&&se.isDepthTexture?se.type:null,ce=b(T.stencilBuffer,$),ge=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(T),ce,T.width,T.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(T),ce,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,R)}else{let se=T.textures;for(let $=0;$<se.length;$++){let ce=se[$],ge=r.convert(ce.format,ce.colorSpace),K=r.convert(ce.type),J=w(ce.internalFormat,ge,K,ce.normalized,ce.colorSpace);me(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(T),J,T.width,T.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(T),J,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,J,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(R,T,B){let se=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(T.depthTexture);$.__renderTarget=T;let ce=se?T.depthTexture.image[0]:T.depthTexture.image;(!$.__webglTexture||ce.width!==T.width||ce.height!==T.height)&&(ce.width=T.width,ce.height=T.height,T.depthTexture.needsUpdate=!0),se?ve(T.depthTexture,0):_e(T.depthTexture,0);let ge=$.__webglTexture,K=Tt(T),J=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,de=T.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Pi)me(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,J,ge,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,de,J,ge,0);else if(T.depthTexture.format===Vi)me(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,J,ge,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,de,J,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(R){let T=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let se=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),se){let $=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,se.removeEventListener("dispose",$)};se.addEventListener("dispose",$),T.__depthDisposeCallback=$}T.__boundDepthTexture=se}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(B)for(let se=0;se<6;se++)De(T.__webglFramebuffer[se],R,se);else R.texture.mipmaps.length>0?De(T.__webglFramebuffer[0],R,0):De(T.__webglFramebuffer,R,0);else if(B){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]===void 0)T.__webglDepthbuffer[se]=i.createRenderbuffer(),je(T.__webglDepthbuffer[se],R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ce)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),je(T.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(R,T,B){let se=n.get(R);T!==void 0&&xe(se.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&st(R)}function dt(R){let T=R.texture,B=n.get(R),se=n.get(T);R.addEventListener("dispose",N),P(R);let $=R.textures,ce=R.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=T.version,a.memory.textures++),ce){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(T.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let J=0;J<T.mipmaps.length;J++)B.__webglFramebuffer[K][J]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(T.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<T.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ge)for(let K=0,J=$.length;K<J;K++){let de=n.get($[K]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&me(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let J=$[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let de=r.convert(J.format,J.colorSpace),D=r.convert(J.type),Y=w(J.internalFormat,de,D,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),X=Tt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,Y,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),je(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,T);for(let K=0;K<6;K++)if(T.mipmaps.length>0)for(let J=0;J<T.mipmaps.length;J++)xe(B.__webglFramebuffer[K][J],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else xe(B.__webglFramebuffer[K],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(T)?_(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let K=0,J=$.length;K<J;K++){let de=$[K],D=n.get(de),Y=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,D.__webglTexture),Qe(Y,de),xe(B.__webglFramebuffer,R,de,i.COLOR_ATTACHMENT0+K,Y,0),y(de)&&_(Y)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,se.__webglTexture),Qe(K,T),T.mipmaps.length>0)for(let J=0;J<T.mipmaps.length;J++)xe(B.__webglFramebuffer[J],R,T,i.COLOR_ATTACHMENT0,K,J);else xe(B.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,K,0);y(T)?_(K):T.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&st(R)}function U(R){let T=R.textures;for(let B=0,se=T.length;B<se;B++){let $=T[B];if(y($)&&$.mipmapsAutoUpdate===!0){let ce=S(R),ge=n.get($).__webglTexture;t.bindTexture(ce,ge),_(ce),t.unbindTexture()}}}let Vt=[];function nt(R){if(R.samples>0){if(me(R)===!1){let T=R.textures,B=R.width,se=R.height,$=i.COLOR_BUFFER_BIT,ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(R),K=T.length>1;if(K)for(let de=0;de<T.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let de=0;de<T.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);let D=n.get(T[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,B,se,0,0,B,se,$,i.NEAREST),l===!0&&(Vt.length=0,Vt.push(i.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Vt.push(ce),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let de=0;de<T.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);let D=n.get(T[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let T=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Tt(R){return Math.min(s.maxSamples,R.samples)}function me(R){let T=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function zt(R){let T=a.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function ke(R,T){let B=R.colorSpace,se=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Tn&&B!==Wi&&(Je.getTransfer(B)===ft?(se!==Xn||$!==Pn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",B)),T}function We(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ze,this.resetTextureUnits=Q,this.getTextureUnits=te,this.setTextureUnits=Ee,this.setTexture2D=_e,this.setTexture2DArray=Ae,this.setTexture3D=Ue,this.setTextureCube=ve,this.rebindTextures=at,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=me,this.dispose=H}function dM(i,e){function t(n,s=Wi){let r,a=Je.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mu)return i.BYTE;if(n===gu)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===_u)return i.ALPHA;if(n===vu)return i.RGB;if(n===Xn)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Yl)return i.RED;if(n===Zl)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===$l)return i.RG_INTEGER;if(n===Ql)return i.RGBA_INTEGER;if(n===oo||n===lo||n===co||n===ho)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===ac||n===oc||n===lc||n===uo||n===cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ac)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return r.COMPRESSED_R11_EAC;if(n===lc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===uo)return r.COMPRESSED_RG11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===bc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tc||n===wc||n===Ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Tc)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Rc||n===fo||n===Cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var fM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new an({vertexShader:fM,fragmentShader:pM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yu=class extends ai{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Ju,p={},x=t.getContextAttributes(),y=null,_=null,S=[],w=[],b=new Z,M=null,P=null,A=new Nt;A.viewport=new yt;let C=new Nt;C.viewport=new yt;let N=[A,C],O=new Gl,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let _e=S[j];return _e===void 0&&(_e=new Tr,S[j]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(j){let _e=S[j];return _e===void 0&&(_e=new Tr,S[j]=_e),_e.getGripSpace()},this.getHand=function(j){let _e=S[j];return _e===void 0&&(_e=new Tr,S[j]=_e),_e.getHandSpace()};function W(j){let _e=w.indexOf(j.inputSource);if(_e===-1)return;let Ae=S[_e];Ae!==void 0&&(Ae.update(j.inputSource,j.frame,c||a),Ae.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ne);for(let j=0;j<S.length;j++){let _e=w[j];_e!==null&&(w[j]=null,S[j].disconnect(_e))}L=null,H=null,m.reset();for(let j in p)delete p[j];if(e.setRenderTarget(y),f=null,d=null,u=null,s=null,_=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(b.width,b.height,!1),P!==null){let j=P.camera;j.fov=P.fov,j.zoom=P.zoom,j.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ne),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(b),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Ue=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=x.stencil?Vi:Pi,Ue=x.stencil?Hs:ti);let Oe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Yt(d.textureWidth,d.textureHeight,{format:Xn,type:Pn,depthTexture:new Li(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Yt(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(j){for(let _e=0;_e<j.removed.length;_e++){let Ae=j.removed[_e],Ue=w.indexOf(Ae);Ue>=0&&(w[Ue]=null,S[Ue].disconnect(Ae))}for(let _e=0;_e<j.added.length;_e++){let Ae=j.added[_e],Ue=w.indexOf(Ae);if(Ue===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=w.length){w.push(Ae),Ue=Oe;break}else if(w[Oe]===null){w[Oe]=Ae,Ue=Oe;break}if(Ue===-1)break}let ve=S[Ue];ve&&ve.connect(Ae)}}function q(j,_e){_e===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(_e.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let _e=j.near,Ae=j.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),O.near=C.near=A.near=_e,O.far=C.far=A.far=Ae,(L!==O.near||H!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,H=O.far),O.layers.mask=j.layers.mask|6,A.layers.mask=O.layers.mask&-5,C.layers.mask=O.layers.mask&-3;let Ue=j.parent,ve=O.cameras;q(O,Ue);for(let Oe=0;Oe<ve.length;Oe++)q(ve[Oe],Ue);O.projectionMatrix.copy(A.projectionMatrix),O.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&j.isPerspectiveCamera&&(P={camera:j,fov:j.fov,zoom:j.zoom}),Q(j,O,Ue)};function Q(j,_e,Ae){Ae===null?j.matrix.copy(_e.matrixWorld):(j.matrix.copy(Ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(_e.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(_e.projectionMatrix),j.projectionMatrixInverse.copy(_e.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ts*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return p[j]};let te=null;function Ee(j,_e){if(h=_e.getViewerPose(c||a),g=_e,h!==null){let Ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ue=!1;Ae.length!==O.cameras.length&&(O.cameras.length=0,Ue=!0);for(let Ge=0;Ge<Ae.length;Ge++){let Qe=Ae[Ge],it=null;if(f!==null)it=f.getViewport(Qe);else{let ue=u.getViewSubImage(d,Qe);it=ue.viewport,Ge===0&&(e.setRenderTargetTextures(_,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(_))}let ee=N[Ge];ee===void 0&&(ee=new Nt,ee.layers.enable(Ge),ee.viewport=new yt,N[Ge]=ee),ee.matrix.fromArray(Qe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Qe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(it.x,it.y,it.width,it.height),Ge===0&&(O.matrix.copy(ee.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ue===!0&&O.cameras.push(ee)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Ge=u.getDepthInformation(Ae[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Ge=0;Ge<Ae.length;Ge++){let Qe=Ae[Ge].camera;if(Qe){let it=p[Qe];it||(it=new Fa,p[Qe]=it);let ee=u.getCameraImage(Qe);it.sourceTexture=ee}}}}for(let Ae=0;Ae<S.length;Ae++){let Ue=w[Ae],ve=S[Ae];Ue!==null&&ve!==void 0&&ve.update(Ue,_e,c||a)}te&&te(j,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),g=null}let ze=new Pm;ze.setAnimationLoop(Ee),this.setAnimationLoop=function(j){te=j},this.dispose=function(){}}},mM=new He,zm=new qe;zm.set(-1,0,0,0,1,0,0,0,1);function gM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Lu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),y=x.envMap,_=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(mM.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(zm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bM(i,e,t,n){let s={},r={};function a(x,y){let _=y.program;n.uniformBlockBinding(x,_,s[x.id])}function o(x,y){let _=s[x.id];_===void 0&&(g(x),_=l(x),s[x.id]=_,x.addEventListener("dispose",m));let S=y.program;n.updateUBOMapping(x,S);let w=e.render.frame;r[x.id]!==w&&(c(x),r[x.id]=w)}function l(x){let y=i.createBuffer(),_=x.__size,S=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,_,S),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(x){let y=s[x.id],_=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,b=_.length;w<b;w++){let M=_[w];if(Array.isArray(M))for(let P=0,A=M.length;P<A;P++)h(M[P],w,P,S);else h(M,w,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,y,_,S){if(d(x,y,_,S)===!0){let w=x.__offset,b=x.value;if(Array.isArray(b)){let M=0;for(let P=0;P<b.length;P++){let A=b[P],C=v(A,!0);u(A,x.__data,M),M+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else u(b,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,x.__data)}}function u(x,y,_){typeof x=="number"||typeof x=="boolean"?y[_]=x:x.isMatrix3?(y[_]=x.elements[0],y[_+1]=x.elements[1],y[_+2]=x.elements[2],y[_+3]=0,y[_+4]=x.elements[3],y[_+5]=x.elements[4],y[_+6]=x.elements[5],y[_+7]=0,y[_+8]=x.elements[6],y[_+9]=x.elements[7],y[_+10]=x.elements[8],y[_+11]=0):ArrayBuffer.isView(x)?y.set(x.subarray(0,y.length-_),_):x.toArray(y,_)}function d(x,y,_,S){let w=x.value,b=y+"_"+_;if(Array.isArray(w)){S[b]===void 0&&(S[b]=[]);let M=S[b],P=!1;for(let A=0;A<w.length;A++)f(w[A],M,A)===!0&&(P=!0);return P}return f(w,S,b)}function f(x,y,_){if(y[_]===void 0)return typeof x=="number"||typeof x=="boolean"?y[_]=x:ArrayBuffer.isView(x)?y[_]=x.slice():y[_]=x.clone(),!0;{let S=y[_];if(typeof x=="number"||typeof x=="boolean"){if(S!==x)return y[_]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(S.equals(x)===!1)return S.copy(x),!0}}return!1}function g(x){let y=x.uniforms,_=0,S=16;for(let b=0,M=y.length;b<M;b++){let P=Array.isArray(y[b])?y[b]:[y[b]];for(let A=0,C=P.length;A<C;A++){let N=P[A],O=Array.isArray(N.value)?N.value:[N.value],L=Array.isArray(y[b])||Array.isArray(N.value),H=_;for(let G=0,ne=O.length;G<ne;G++){let q=O[G],Q=v(q,L),te=_%S,Ee=te%Q.boundary,ze=te+Ee;_+=Ee,ze!==0&&S-ze<Q.storage&&(_+=S-ze),G===0&&(H=_),_+=Q.storage}let W=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new W((_-H)/Float32Array.BYTES_PER_ELEMENT),N.__offset=H}}let w=_%S;return w>0&&(_+=S-w),x.__size=_,x.__cache={},this}function v(x,y){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=16,_.storage=48):x.isMatrix4?(_.boundary=16,_.storage=64):x.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(_.boundary=16,_.storage=x.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",x),y===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(x){let y=x.target;y.removeEventListener("dispose",m),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:p}}var xM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function _M(){return fi===null&&(fi=new Ar(xM,16,16,ls,fn),fi.name="DFG_LUT",fi.minFilter=Kt,fi.magFilter=Kt,fi.wrapS=Vn,fi.wrapT=Vn,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Dc=class{constructor(e={}){let{canvas:t=Zp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Pn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([Ql,$l,Zl]),p=new Set([Pn,ti,Hr,Hs,Kl,Jl]),x=new Uint32Array(4),y=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},S=null,w=null,b=[],M=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,N=null,O=null,L=null,H=null;this._outputColorSpace=ht;let W=0,G=0,ne=null,q=-1,Q=null,te=new yt,Ee=new yt,ze=null,j=new Te(0),_e=0,Ae=t.width,Ue=t.height,ve=1,Oe=null,Pt=null,Ge=new yt(0,0,Ae,Ue),Qe=new yt(0,0,Ae,Ue),it=!1,ee=new is,ue=new wl,le=!1,we=!1,xe=new He,je=new I,De=new yt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function dt(){return ne===null?ve:1}let U=n;function Vt(E,F){return t.getContext(E,F)}let nt,Tt,me,zt,ke,We,R,T,B,se,$,ce,ge,K,J,de,D,Y,X,fe,ae,he,Ne;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",ye,!1),U===null){let F="webgl2";if(U=Vt(F,E),U===null)throw Vt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(E){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ve("WebGLRenderer: "+E.message),E}function Ze(){nt=new Pv(U),nt.init(),ae=new dM(U,nt),Tt=new _v(U,nt,e,ae),me=new hM(U,nt),Tt.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),O=U.createFramebuffer(),L=U.createFramebuffer(),H=U.createFramebuffer(),zt=new Dv(U),ke=new Yy,We=new uM(U,nt,me,ke,Tt,ae,zt),R=new Cv(A),T=new Fb(U),he=new bv(U,T),B=new Iv(U,T,zt,he),se=new Fv(U,B,T,he,zt),Y=new Nv(U,Tt,We),J=new vv(ke),$=new Jy(A,R,nt,Tt,he,J),ce=new gM(A,ke),ge=new $y,K=new sM(nt),D=new gv(A,R,me,se,g,l),de=new cM(A,se,Tt),Ne=new bM(U,zt,Tt,me),X=new xv(U,nt,zt),fe=new Lv(U,nt,zt),zt.programs=$.programs,A.capabilities=Tt,A.extensions=nt,A.properties=ke,A.renderLists=ge,A.shadowMap=de,A.state=me,A.info=zt}v!==Pn&&(P=new Ov(v,t.width,t.height,o,s,r));let re=new Yu(A,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(E){E!==void 0&&(ve=E,this.setSize(Ae,Ue,!1))},this.getSize=function(E){return E.set(Ae,Ue)},this.setSize=function(E,F,V=!0){if(re.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=E,Ue=F,t.width=Math.floor(E*ve),t.height=Math.floor(F*ve),V===!0&&(t.style.width=E+"px",t.style.height=F+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Ae*ve,Ue*ve).floor()},this.setDrawingBufferSize=function(E,F,V){Ae=E,Ue=F,ve=V,t.width=Math.floor(E*V),t.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(v===Pn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(te)},this.getViewport=function(E){return E.copy(Ge)},this.setViewport=function(E,F,V,k){E.isVector4?Ge.set(E.x,E.y,E.z,E.w):Ge.set(E,F,V,k),me.viewport(te.copy(Ge).multiplyScalar(dt()).round())},this.getScissor=function(E){return E.copy(Qe)},this.setScissor=function(E,F,V,k){E.isVector4?Qe.set(E.x,E.y,E.z,E.w):Qe.set(E,F,V,k),me.scissor(Ee.copy(Qe).multiplyScalar(dt()).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(E){me.setScissorTest(it=E)},this.setOpaqueSort=function(E){Oe=E},this.setTransparentSort=function(E){Pt=E},this.getClearColor=function(E){return E.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,V=!0){let k=0;if(E){let z=!1;if(ne!==null){let be=ne.texture.format;z=m.has(be)}if(z){let be=ne.texture.type,Re=p.has(be),pe=D.getClearColor(),Se=D.getClearAlpha(),Ie=pe.r,Xe=pe.g,ot=pe.b;Re?(x[0]=Ie,x[1]=Xe,x[2]=ot,x[3]=Se,U.clearBufferuiv(U.COLOR,0,x)):(y[0]=Ie,y[1]=Xe,y[2]=ot,y[3]=Se,U.clearBufferiv(U.COLOR,0,y))}else k|=U.COLOR_BUFFER_BIT}F&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),D.dispose(),ge.dispose(),K.dispose(),We.dispose(),ke.dispose(),R.dispose(),se.dispose(),B.dispose(),he.dispose(),Ne.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",df),re.removeEventListener("sessionend",ff),fs.stop()};function Fe(E){E.preventDefault(),Ta("WebGLRenderer: Context Lost."),C=!0}function Ke(){Ta("WebGLRenderer: Context Restored."),C=!1;let E=zt.autoReset,F=de.enabled,V=de.autoUpdate,k=de.needsUpdate,z=de.type;Ze(),zt.autoReset=E,de.enabled=F,de.autoUpdate=V,de.needsUpdate=k,de.type=z}function ye(E){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _t(E){let F=E.target;F.removeEventListener("dispose",_t),en(F)}function en(E){ji(E),ke.remove(E)}function ji(E){let F=ke.get(E).programs;F!==void 0&&(F.forEach(function(V){$.releaseProgram(V)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,k,z,be){F===null&&(F=st);let Re=z.isMesh&&z.matrixWorld.determinantAffine()<0,pe=n0(E,F,V,k,z);me.setMaterial(k,Re);let Se=V.index,Ie=1;if(k.wireframe===!0){if(Se=B.getWireframeAttribute(V),Se===void 0)return;Ie=2}let Xe=V.drawRange,ot=V.attributes.position,Ce=Xe.start*Ie,lt=(Xe.start+Xe.count)*Ie;be!==null&&(Ce=Math.max(Ce,be.start*Ie),lt=Math.min(lt,(be.start+be.count)*Ie)),Se!==null?(Ce=Math.max(Ce,0),lt=Math.min(lt,Se.count)):ot!=null&&(Ce=Math.max(Ce,0),lt=Math.min(lt,ot.count));let Wt=lt-Ce;if(Wt<0||Wt===1/0)return;he.setup(z,k,pe,V,Se);let Ct,wt=X;if(Se!==null&&(Ct=T.get(Se),wt=fe,wt.setIndex(Ct)),z.isMesh)k.wireframe===!0?(me.setLineWidth(k.wireframeLinewidth*dt()),wt.setMode(U.LINES)):wt.setMode(U.TRIANGLES);else if(z.isLine){let mn=k.linewidth;mn===void 0&&(mn=1),me.setLineWidth(mn*dt()),z.isLineSegments?wt.setMode(U.LINES):z.isLineLoop?wt.setMode(U.LINE_LOOP):wt.setMode(U.LINE_STRIP)}else z.isPoints?wt.setMode(U.POINTS):z.isSprite&&wt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))wt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let mn=z._multiDrawStarts,Pe=z._multiDrawCounts,Mn=z._multiDrawCount,pt=Se?T.get(Se).bytesPerElement:1,ps=ke.get(k).currentProgram.getUniforms();for(let gn=0;gn<Mn;gn++)ps.setValue(U,"_gl_DrawID",gn),wt.render(mn[gn]/pt,Pe[gn])}else if(z.isInstancedMesh)wt.renderInstances(Ce,Wt,z.count);else if(V.isInstancedBufferGeometry){let mn=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Pe=Math.min(V.instanceCount,mn);wt.renderInstances(Ce,Wt,Pe)}else wt.render(Ce,Wt)};function uf(E,F,V,k){N!==null&&E.isNodeMaterial&&N.setObject(k,E),le===!0&&J.setState(E,V,!1),E.transparent===!0&&E.side===on&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,ra(E,F,k),E.side=ui,E.needsUpdate=!0,ra(E,F,k),E.side=on):ra(E,F,k)}this.compile=function(E,F,V=null){V===null&&(V=E),N!==null&&N.renderStart(E,F,V),w=K.get(V),w.init(F),M.push(w),V.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),E!==V&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),we=this.localClippingEnabled,le=J.init(this.clippingPlanes,we),le===!0&&J.setGlobalState(this.clippingPlanes,F),N!==null&&de.render(w.state.shadowsArray,V,F);let k=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let be=z.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){let pe=be[Re];uf(pe,V,F,z),k.add(pe)}else uf(be,V,F,z),k.add(be)}),w=M.pop(),N!==null&&N.renderEnd(),k},this.compileAsync=function(E,F,V=null){let k=this.compile(E,F,V);return new Promise(z=>{function be(){if(k.forEach(function(Re){let Se=ke.get(Re).currentProgram;(Se===void 0||Se.isReady())&&k.delete(Re)}),k.size===0){z(E);return}setTimeout(be,10)}nt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let gh=null;function e0(E){gh&&gh(E)}function df(){fs.stop()}function ff(){fs.start()}let fs=new Pm;fs.setAnimationLoop(e0),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(E){gh=E,re.setAnimationLoop(E),E===null?fs.stop():fs.start()},re.addEventListener("sessionstart",df),re.addEventListener("sessionend",ff),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(E,F);let V=re.enabled===!0&&re.isPresenting===!0,k=P!==null&&(ne===null||V)&&P.begin(A,ne);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,F,ne),w=K.get(E,M.length),w.init(F),w.state.textureUnits=We.getTextureUnits(),M.push(w),xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ue.setFromArrayCamera(F):ee.setFromProjectionMatrix(xe,Wn,F.reversedDepth),we=this.localClippingEnabled,le=J.init(this.clippingPlanes,we),S=ge.get(E,b.length),S.init(),b.push(S),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Re=A.xr.getDepthSensingMesh();Re!==null&&bh(Re,F,-1/0,A.sortObjects)}bh(E,F,0,A.sortObjects),S.finish(),N!==null&&N.updateLights(w.state.lightsArray),A.sortObjects===!0&&S.sort(Oe,Pt),at=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,at&&D.addToRenderList(S,E),this.info.autoReset===!0&&this.info.reset(),le===!0&&J.beginShadows();let z=w.state.shadowsArray;if(de.render(z,E,F),le===!0&&J.endShadows(),(k&&P.hasRenderPass())===!1){let Re=S.opaque,pe=S.transmissive;if(w.setupLights(),F.isArrayCamera){let Se=F.cameras;if(pe.length>0)for(let Ie=0,Xe=Se.length;Ie<Xe;Ie++){let ot=Se[Ie];mf(Re,pe,E,ot)}at&&D.render(E);for(let Ie=0,Xe=Se.length;Ie<Xe;Ie++){let ot=Se[Ie];pf(S,E,ot,ot.viewport)}}else pe.length>0&&mf(Re,pe,E,F),at&&D.render(E),pf(S,E,F)}ne!==null&&G===0&&(We.updateMultisampleRenderTarget(ne),We.updateRenderTargetMipmap(ne)),k&&P.end(A),E.isScene===!0&&E.onAfterRender(A,E,F),he.resetDefaultState(),q=-1,Q=null,M.pop(),M.length>0?(w=M[M.length-1],We.setTextureUnits(w.state.textureUnits),le===!0&&J.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?S=b[b.length-1]:S=null,N!==null&&N.renderEnd()};function bh(E,F,V,k){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Re=F.isArrayCamera?ue:ee;if(!E.frustumCulled||E.intersectsFrustum(Re)){k&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xe);let pe=se.update(E),Se=E.material;Se.visible&&S.push(E,pe,Se,V,De.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Re=F.isArrayCamera?ue:ee;if(!E.frustumCulled||E.intersectsFrustum(Re)){let pe=se.update(E),Se=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),De.copy(pe.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(xe)),Array.isArray(Se)){let Ie=pe.groups;for(let Xe=0,ot=Ie.length;Xe<ot;Xe++){let Ce=Ie[Xe],lt=Se[Ce.materialIndex];lt&&lt.visible&&S.push(E,pe,lt,V,De.z,Ce,F)}}else Se.visible&&S.push(E,pe,Se,V,De.z,null,F)}}}let be=E.children;for(let Re=0,pe=be.length;Re<pe;Re++)bh(be[Re],F,V,k)}function pf(E,F,V,k){let{opaque:z,transmissive:be,transparent:Re}=E;w.setupLightsView(V),le===!0&&J.setGlobalState(A.clippingPlanes,V),k&&me.viewport(te.copy(k)),z.length>0&&Fo(z,F,V),be.length>0&&Fo(be,F,V),Re.length>0&&Fo(Re,F,V),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function mf(E,F,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Ce=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Yt(1,1,{generateMipmaps:!0,type:Ce?fn:Pn,minFilter:qn,samples:Math.max(4,Tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let be=w.state.transmissionRenderTarget[k.id],Re=k.viewport||te;be.setSize(Re.z*A.transmissionResolutionScale,Re.w*A.transmissionResolutionScale);let pe=A.getRenderTarget(),Se=A.getActiveCubeFace(),Ie=A.getActiveMipmapLevel();A.setRenderTarget(be),A.getClearColor(j),_e=A.getClearAlpha(),_e<1&&A.setClearColor(16777215,.5),A.clear(),at&&D.render(V);let Xe=A.toneMapping;A.toneMapping=di;let ot=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),le===!0&&J.setGlobalState(A.clippingPlanes,k),Fo(E,V,k),We.updateMultisampleRenderTarget(be),We.updateRenderTargetMipmap(be),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let lt=0,Wt=F.length;lt<Wt;lt++){let Ct=F[lt],{object:wt,geometry:mn,material:Pe,group:Mn}=Ct;if(Pe.side===on&&wt.layers.test(k.layers)){let pt=Pe.side;Pe.side=dn,Pe.needsUpdate=!0,gf(wt,V,k,mn,Pe,Mn),Pe.side=pt,Pe.needsUpdate=!0,Ce=!0}}Ce===!0&&(We.updateMultisampleRenderTarget(be),We.updateRenderTargetMipmap(be))}A.setRenderTarget(pe,Se,Ie),A.setClearColor(j,_e),ot!==void 0&&(k.viewport=ot),A.toneMapping=Xe}function Fo(E,F,V){let k=F.isScene===!0?F.overrideMaterial:null;for(let z=0,be=E.length;z<be;z++){let Re=E[z],{object:pe,geometry:Se,group:Ie}=Re,Xe=Re.material;Xe.allowOverride===!0&&k!==null&&(Xe=k),pe.layers.test(V.layers)&&gf(pe,F,V,Se,Xe,Ie)}}function gf(E,F,V,k,z,be){N!==null&&z.isNodeMaterial&&N.setObject(E,z),E.onBeforeRender(A,F,V,k,z,be),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(A,F,V,k,E,be),z.transparent===!0&&z.side===on&&z.forceSinglePass===!1?(z.side=dn,z.needsUpdate=!0,A.renderBufferDirect(V,F,k,z,E,be),z.side=ui,z.needsUpdate=!0,A.renderBufferDirect(V,F,k,z,E,be),z.side=on):A.renderBufferDirect(V,F,k,z,E,be),E.onAfterRender(A,F,V,k,z,be)}function bf(E){let F=0;for(let V of E)V.texture!==null&&F++;return F}function ra(E,F,V){F.isScene!==!0&&(F=st);let k=ke.get(E),z=w.state.lights,be=w.state.shadowsArray,Re=z.state.version,pe=$.getParameters(E,z.state,be,F,V,w.state.lightProbeGridArray),Se=$.getProgramCacheKey(pe),Ie=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let Xe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=R.get(E.envMap||k.environment,Xe),k.envMapRotation=k.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",_t),Ie=new Map,k.programs=Ie,k.programVariants=new Map);let ot=Ie.get(Se);if(ot!==void 0){if(k.currentProgram===ot&&k.lightsStateVersion===Re)return _f(E,pe),ot}else pe.uniforms=$.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,V,pe),E.onBeforeCompile(pe,A),ot=$.acquireProgram(pe,Se),Ie.set(Se,ot),k.uniforms=pe.uniforms;let Ce=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=J.uniform),_f(E,pe),k.needsLights=s0(E),k.lightsStateVersion=Re,k.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.sunLights.value=z.state.sun,Ce.sunLightShadows.value=z.state.sunShadow,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.sunShadowMatrix.value=z.state.sunShadowMatrix,Ce.sunShadowCascade.value=z.state.sunShadowCascade,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),k.numLightProbeGrids=bf(w.state.lightProbeGridArray),k.currentProgram=ot,k.uniformsList=null,ot}function t0(E,F,V,k,z){let be=ke.get(E),Re=be.currentProgram.id+","+k+","+z,pe=be.programVariants.get(Re);return pe===void 0?(pe=ra(E,F,V),be.programVariants.set(Re,pe)):(be.currentProgram=pe,be.uniformsList=null,be.outputColorSpace=k,be.toneMapping=z),pe}function xf(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Vr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function _f(E,F){let V=ke.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function n0(E,F,V,k,z){F.isScene!==!0&&(F=st),We.resetTextureUnits();let be=F.fog,Re=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,pe=ne===null?A.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Je.workingColorSpace,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ie=R.get(k.envMap||Re,Se),Xe=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ot=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ce=!!V.morphAttributes.position,lt=!!V.morphAttributes.normal,Wt=!!V.morphAttributes.color,Ct=di;k.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ct=A.toneMapping);let wt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mn=wt!==void 0?wt.length:0,Pe=ke.get(k),Mn=w.state.lights;if(le===!0&&(we===!0||E!==Q)){let Dt=E===Q&&k.id===q;J.setState(k,E,Dt)}let pt=!1,ps=!1;k.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==Mn.state.version||z.isBatchedMesh&&Pe.batching===!1||!z.isBatchedMesh&&Pe.batching===!0||z.isBatchedMesh&&Pe.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Pe.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Pe.instancing===!1||!z.isInstancedMesh&&Pe.instancing===!0||z.isSkinnedMesh&&Pe.skinning===!1||!z.isSkinnedMesh&&Pe.skinning===!0||z.isInstancedMesh&&Pe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pe.instancingMorph===!1&&z.morphTexture!==null||Pe.envMap!==Ie||k.fog===!0&&Pe.fog!==be||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==J.numPlanes||Pe.numIntersection!==J.numIntersection)||Pe.vertexAlphas!==Xe||Pe.vertexTangents!==ot||Pe.morphTargets!==Ce||Pe.morphNormals!==lt||Pe.morphColors!==Wt||Pe.morphTargetsCount!==mn||Pe.numLightProbeGrids!==bf(w.state.lightProbeGridArray)?pt=!0:(Pe.outputColorSpace!==pe||Pe.toneMapping!==Ct)&&(ps=!0):(pt=!0,Pe.__version=k.version);let gn=Pe.currentProgram;(pt===!0||ps===!0)&&(gn=ps===!0?t0(k,F,z,pe,Ct):ra(k,F,z),N&&k.isNodeMaterial&&N.onUpdateProgram(k,gn,Pe));let Uo=!1,Ki=!1,ms=!1,ut=gn.getUniforms(),cn=Pe.uniforms;if(me.useProgram(gn.program)&&(Uo=!0,Ki=!0,ms=!0),k.id!==q&&(q=k.id,Ki=!0),Uo||Q!==E){me.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(U,"projectionMatrix",E.projectionMatrix),ut.setValue(U,"viewMatrix",E.matrixWorldInverse);let tn=ut.map.cameraPosition;tn!==void 0&&tn.setValue(U,je.setFromMatrixPosition(E.matrixWorld)),Tt.logarithmicDepthBuffer&&ut.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ut.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,Ki=!0,ms=!0)}if(Pe.needsLights&&(Mn.state.sunShadowMap.length>0&&ut.setValue(U,"sunShadowMap",Mn.state.sunShadowMap,We),Mn.state.directionalShadowMap.length>0&&ut.setValue(U,"directionalShadowMap",Mn.state.directionalShadowMap,We),Mn.state.spotShadowMap.length>0&&ut.setValue(U,"spotShadowMap",Mn.state.spotShadowMap,We),Mn.state.pointShadowMap.length>0&&ut.setValue(U,"pointShadowMap",Mn.state.pointShadowMap,We)),z.isSkinnedMesh){ut.setOptional(U,z,"bindMatrix"),ut.setOptional(U,z,"bindMatrixInverse");let Dt=z.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ut.setValue(U,"boneTexture",Dt.boneTexture,We))}z.isBatchedMesh&&(ut.setOptional(U,z,"batchingTexture"),ut.setValue(U,"batchingTexture",z._matricesTexture,We),ut.setOptional(U,z,"batchingIdTexture"),ut.setValue(U,"batchingIdTexture",z._indirectTexture,We),ut.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ut.setValue(U,"batchingColorTexture",z._colorsTexture,We));let Jn=V.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&Y.update(z,V,gn),(Ki||Pe.receiveShadow!==z.receiveShadow)&&(Pe.receiveShadow=z.receiveShadow,ut.setValue(U,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(cn.envMapIntensity.value=F.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=_M()),Ki){if(ut.setValue(U,"toneMappingExposure",A.toneMappingExposure),Pe.needsLights&&i0(cn,ms),be&&k.fog===!0&&ce.refreshFogUniforms(cn,be),ce.refreshMaterialUniforms(cn,k,ve,Ue,w.state.transmissionRenderTarget[E.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){let Dt=_,tn=0;for(let yi of w.state.lightProbeGridArray)yi.texture!==null&&(Dt.textures[tn]=yi.texture,Dt.min[tn]=yi.boundingBox.min,Dt.max[tn]=yi.boundingBox.max,Dt.resolution[tn]=yi.resolution,tn++);for(let yi in Dt)Dt[yi].length=tn;cn.probesSH.value=Dt.textures,cn.probesMin.value=Dt.min,cn.probesMax.value=Dt.max,cn.probesResolution.value=Dt.resolution}Vr.upload(U,xf(Pe),cn,We)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Vr.upload(U,xf(Pe),cn,We),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ut.setValue(U,"center",z.center),ut.setValue(U,"modelViewMatrix",z.modelViewMatrix),ut.setValue(U,"normalMatrix",z.normalMatrix),ut.setValue(U,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let Dt=k.uniformsGroups;for(let tn=0,yi=Dt.length;tn<yi;tn++){let yf=Dt[tn];Ne.update(yf,gn),Ne.bind(yf,gn)}}return gn}function i0(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function s0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(E,F,V){let k=ke.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ke.get(E.texture).__webglTexture=F,ke.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let V=ke.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,V=0){ne=E,W=F,G=V;let k=null,z=!1,be=!1;if(E){let pe=ke.get(E);if(pe.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(U.FRAMEBUFFER,pe.__webglFramebuffer),te.copy(E.viewport),Ee.copy(E.scissor),ze=E.scissorTest,me.viewport(te),me.scissor(Ee),me.setScissorTest(ze),q=-1;return}else if(pe.__webglFramebuffer===void 0)We.setupRenderTarget(E);else if(pe.__hasExternalTextures)We.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Xe=E.depthTexture;if(pe.__boundDepthTexture!==Xe){if(Xe!==null&&ke.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(E)}}let Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(be=!0);let Ie=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[F])?k=Ie[F][V]:k=Ie[F],z=!0):E.samples>0&&We.useMultisampledRTT(E)===!1?k=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[V]:k=Ie,te.copy(E.viewport),Ee.copy(E.scissor),ze=E.scissorTest}else te.copy(Ge).multiplyScalar(ve).floor(),Ee.copy(Qe).multiplyScalar(ve).floor(),ze=it;if(V!==0&&(k=O),me.bindFramebuffer(U.FRAMEBUFFER,k)&&me.drawBuffers(E,k),me.viewport(te),me.scissor(Ee),me.setScissorTest(ze),z){let pe=ke.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,V)}else if(be){let pe=F;for(let Se=0;Se<E.textures.length;Se++){let Ie=ke.get(E.textures[Se]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Se,Ie.__webglTexture,V,pe)}}else if(E!==null&&V!==0){let pe=ke.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pe.__webglTexture,V)}q=-1};function vf(E){let F=ke.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=Tt.textureFormatReadable(E.format),F.__typeReadable=Tt.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,V,k,z,be,Re,pe=0){if(!(E&&E.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Se=Se[Re],Array.isArray(Se)&&(Se=Se[0])),Se){me.bindFramebuffer(U.FRAMEBUFFER,Se);try{let Ie=E.textures[pe],Xe=Ie.format,ot=Ie.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe);let Ce=vf(Ie);if(Ce.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-k&&V>=0&&V<=E.height-z&&U.readPixels(F,V,k,z,ae.convert(Xe),ae.convert(ot),be)}finally{let Ie=ne!==null?ke.get(ne).__webglFramebuffer:null;me.bindFramebuffer(U.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,F,V,k,z,be,Re,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Se=Se[Re],Array.isArray(Se)&&(Se=Se[0])),Se)if(F>=0&&F<=E.width-k&&V>=0&&V<=E.height-z){me.bindFramebuffer(U.FRAMEBUFFER,Se);let Ie=E.textures[pe],Xe=Ie.format,ot=Ie.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe);let Ce=vf(Ie);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.bufferData(U.PIXEL_PACK_BUFFER,be.byteLength,U.STREAM_READ),U.readPixels(F,V,k,z,ae.convert(Xe),ae.convert(ot),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Wt=ne!==null?ke.get(ne).__webglFramebuffer:null;me.bindFramebuffer(U.FRAMEBUFFER,Wt);let Ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Qp(U,Ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,be),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(lt),U.deleteSync(Ct),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,V=0){let k=Math.pow(2,-V),z=Math.floor(E.image.width*k),be=Math.floor(E.image.height*k),Re=F!==null?F.x:0,pe=F!==null?F.y:0;We.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,Re,pe,z,be),me.unbindTexture()},this.copyTextureToTexture=function(E,F,V=null,k=null,z=0,be=0){let Re,pe,Se,Ie,Xe,ot,Ce,lt,Wt,Ct=E.isCompressedTexture?E.mipmaps[be]:E.image;if(V!==null)Re=V.max.x-V.min.x,pe=V.max.y-V.min.y,Se=V.isBox3?V.max.z-V.min.z:1,Ie=V.min.x,Xe=V.min.y,ot=V.isBox3?V.min.z:0;else{let ut=Math.pow(2,-z);Re=Math.floor(Ct.width*ut),pe=Math.floor(Ct.height*ut),E.isDataArrayTexture?Se=Ct.depth:E.isData3DTexture?Se=Math.floor(Ct.depth*ut):Se=1,Ie=0,Xe=0,ot=0}k!==null?(Ce=k.x,lt=k.y,Wt=k.z):(Ce=0,lt=0,Wt=0);let wt=ae.convert(F.format),mn=ae.convert(F.type),Pe;F.isData3DTexture?(We.setTexture3D(F,0),Pe=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(We.setTexture2DArray(F,0),Pe=U.TEXTURE_2D_ARRAY):(We.setTexture2D(F,0),Pe=U.TEXTURE_2D),me.activeTexture(U.TEXTURE0),me.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),me.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),me.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let Mn=me.getParameter(U.UNPACK_ROW_LENGTH),pt=me.getParameter(U.UNPACK_IMAGE_HEIGHT),ps=me.getParameter(U.UNPACK_SKIP_PIXELS),gn=me.getParameter(U.UNPACK_SKIP_ROWS),Uo=me.getParameter(U.UNPACK_SKIP_IMAGES);me.pixelStorei(U.UNPACK_ROW_LENGTH,Ct.width),me.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ct.height),me.pixelStorei(U.UNPACK_SKIP_PIXELS,Ie),me.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),me.pixelStorei(U.UNPACK_SKIP_IMAGES,ot);let Ki=E.isDataArrayTexture||E.isData3DTexture,ms=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let ut=ke.get(E),cn=ke.get(F),Jn=ke.get(ut.__renderTarget),Dt=ke.get(cn.__renderTarget);me.bindFramebuffer(U.READ_FRAMEBUFFER,Jn.__webglFramebuffer),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let tn=0;tn<Se;tn++)Ki&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ke.get(E).__webglTexture,z,ot+tn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ke.get(F).__webglTexture,be,Wt+tn)),U.blitFramebuffer(Ie,Xe,Ie+Re,Xe+pe,Ce,lt,Ce+Re,lt+pe,U.DEPTH_BUFFER_BIT,U.NEAREST);me.bindFramebuffer(U.READ_FRAMEBUFFER,null),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||ke.has(E)){let ut=ke.get(E),cn=ke.get(F);me.bindFramebuffer(U.READ_FRAMEBUFFER,L),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let Jn=0;Jn<Se;Jn++)Ki?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ut.__webglTexture,z,ot+Jn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ut.__webglTexture,z),ms?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,cn.__webglTexture,be,Wt+Jn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,cn.__webglTexture,be),z!==0?U.blitFramebuffer(Ie,Xe,Ie+Re,Xe+pe,Ce,lt,Ce+Re,lt+pe,U.COLOR_BUFFER_BIT,U.NEAREST):ms?U.copyTexSubImage3D(Pe,be,Ce,lt,Wt+Jn,Ie,Xe,Re,pe):U.copyTexSubImage2D(Pe,be,Ce,lt,Ie,Xe,Re,pe);me.bindFramebuffer(U.READ_FRAMEBUFFER,null),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ms?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Pe,be,Ce,lt,Wt,Re,pe,Se,wt,mn,Ct.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,be,Ce,lt,Wt,Re,pe,Se,wt,Ct.data):U.texSubImage3D(Pe,be,Ce,lt,Wt,Re,pe,Se,wt,mn,Ct):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,be,Ce,lt,Re,pe,wt,mn,Ct.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,be,Ce,lt,Ct.width,Ct.height,wt,Ct.data):U.texSubImage2D(U.TEXTURE_2D,be,Ce,lt,Re,pe,wt,mn,Ct);me.pixelStorei(U.UNPACK_ROW_LENGTH,Mn),me.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt),me.pixelStorei(U.UNPACK_SKIP_PIXELS,ps),me.pixelStorei(U.UNPACK_SKIP_ROWS,gn),me.pixelStorei(U.UNPACK_SKIP_IMAGES,Uo),be===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&U.generateMipmap(Pe),me.unbindTexture()},this.initRenderTarget=function(E){ke.get(E).__webglFramebuffer===void 0&&We.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?We.setTextureCube(E,0):E.isData3DTexture?We.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?We.setTexture2DArray(E,0):We.setTexture2D(E,0),me.unbindTexture()},this.resetState=function(){W=0,G=0,ne=null,me.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var qr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},vM=new Bi(-1,1,1,-1,0,1),Zu=class extends xt{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}},yM=new Zu,hs=class{constructor(e){this._mesh=new Be(yM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Uc=class extends zn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qi.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var vo=class extends zn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Oc=class extends zn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var kc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Z);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uc(qr),this.copyPass.material.blending=Hi,this.timer=new eo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vo!==void 0&&(a instanceof vo?n=!0:a instanceof Oc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bc=class extends zn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Te}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Hm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Xr=class i extends zn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Z(e.x,e.y):new Z(256,256),this.clearColor=new Te(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,a,{type:fn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Yt(r,a,{type:fn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Yt(r,a,{type:fn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Hm;this.highPassUniforms=qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Z(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qi.clone(qr.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:qr.vertexShader,fragmentShader:qr.fragmentShader,premultipliedAlpha:!0,blending:_n,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Te,this._oldClearAlpha=1,this._basic=new Rt,this._fsQuad=new hs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new an({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Xr.BlurDirectionX=new Z(1,0);Xr.BlurDirectionY=new Z(0,1);var yo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var zc=class extends zn{constructor(){super(),this.isOutputPass=!0,this.uniforms=qi.clone(yo.uniforms),this.material=new Ir({name:yo.name,uniforms:this.uniforms,vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader}),this._fsQuad=new hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===no?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===io?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===so?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ks?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ro&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var MM={low:{pr:1,shadows:0,bloom:!1,props:.5,range:200,aa:!1},medium:{pr:1.5,shadows:1024,bloom:!0,props:.8,range:280,aa:!0},high:{pr:2,shadows:2048,bloom:!0,props:1,range:360,aa:!0}},Hc=class{constructor(e,t="auto"){let n=matchMedia("(pointer: coarse)").matches;this.level=t==="auto"?n?"medium":"high":t,this.quality=MM[this.level];let s=this.renderer=new Dc({canvas:e,antialias:this.quality.aa,powerPreference:"high-performance",alpha:!0});s.setClearColor(0,0),s.outputColorSpace=ht,s.toneMapping=Gi,s.toneMappingExposure=.7,s.shadowMap.enabled=this.quality.shadows>0,s.shadowMap.type=Us,this.composer=new kc(s),this.renderPass=new Bc(new ei,new Nt),this.bloom=new Xr(new Z(256,256),.3,.5,.9),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(new zc),this.pr=Math.min(devicePixelRatio||1,this.quality.pr),this.resize(),addEventListener("resize",()=>this.resize()),this.fpsAcc=0,this.fpsN=0,this.adaptT=0,e.addEventListener("webglcontextlost",r=>{r.preventDefault(),setTimeout(()=>location.reload(),600)})}resize(){let e=innerWidth,t=innerHeight;this.renderer.setPixelRatio(this.pr),this.renderer.setSize(e,t,!1),this.composer.setPixelRatio(this.pr),this.composer.setSize(e,t),this.bloom.setSize(e*this.pr/2,t*this.pr/2),this.aspect=e/t,this.onResize&&this.onResize(e,t)}setBloom(e){this.bloom.strength=e,this.bloom.enabled=e>0}render(e,t,n=.016){if(this.quality.bloom?(this.renderPass.scene=e,this.renderPass.camera=t,this.composer.render(n)):this.renderer.render(e,t),this.fpsAcc+=n,this.fpsN++,this.fpsAcc>2){let s=this.fpsN/this.fpsAcc;this.fpsAcc=0,this.fpsN=0,s<40&&this.pr>.8?(this.pr=Math.max(.8,this.pr-.25),this.resize()):s>57&&this.pr<Math.min(devicePixelRatio||1,this.quality.pr)&&(this.pr=Math.min(this.pr+.25,devicePixelRatio||1,this.quality.pr),this.resize())}}};var Gc=class extends ei{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Xt;e.deleteAttribute("uv");let t=new mt({side:dn}),n=new mt,s=new ki(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Be(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Un(e,n,6),o=new At;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Be(e,jr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Be(e,jr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Be(e,jr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Be(e,jr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Be(e,jr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Be(e,jr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function jr(i){return new Ja({color:0,emissive:16777215,emissiveIntensity:i})}function $u(i,e){if(e===yu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Gr||e===po){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Gr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Gm(i){let e=new Map,t=new Map,n=i.clone();return Vm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Vm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Vm(i.children[n],e.children[n],t)}var Vc=class extends ci{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new Wc(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wc(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new _d(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=zi.extractUrlBase(e);a=zi.resolveURL(c,this.path)}else a=zi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Dr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Km){try{a[tt.KHR_BINARY_GLTF]=new vd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ad(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:a[u]=new id;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new yd(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[u]=new Md;break;case tt.KHR_MESH_QUANTIZATION:a[u]=new Sd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function SM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function kt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},nd=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Tn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ki(h),c.distance=u;break;case"spot":c=new Fs(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},id=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rt}extendParams(e,t,n){let s=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Tn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ht))}return Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},rd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Mt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Z(r,r)}return Promise.all(s)}},ad=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Mt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Mt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ld=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Mt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},cd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Mt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Tn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ht)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},hd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Mt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},ud=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Mt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(r[0],r[1],r[2],Tn),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Mt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},fd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Mt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(r[0],r[1],r[2],Tn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ht)),Promise.all(s)}},pd=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Mt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},md=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Mt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},gd=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},bd=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},xd=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Wc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},_d=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==jn.TRIANGLES&&c.mode!==jn.TRIANGLE_STRIP&&c.mode!==jn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let v=new He,m=new I,p=new Ot,x=new I(1,1,1),y=new Un(g.geometry,g.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&x.fromBufferAttribute(l.SCALE,S),y.setMatrixAt(S,v.compose(m,p,x));let _=null;for(let S in l)if(S==="_COLOR_0"){let w=l[S];y.instanceColor=new Ii(w.array,w.itemSize,w.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(_===null){let b=y.geometry;_=new xt,_.name=b.name;for(let M in b.attributes)_.setAttribute(M,b.attributes[M]);for(let M in b.morphAttributes)_.morphAttributes[M]=b.morphAttributes[M];b.index!==null&&_.setIndex(b.index),_.morphTargetsRelative=b.morphTargetsRelative;for(let M of b.groups)_.addGroup(M.start,M.count,M.materialIndex);b.boundingBox!==null&&(_.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(_.boundingSphere=b.boundingSphere.clone()),_.drawRange.start=b.drawRange.start,_.drawRange.count=b.drawRange.count,_.userData=Object.assign({},b.userData),y.geometry=_}let w=l[S];_.setAttribute(S,new Ii(w.array,w.itemSize,w.normalized))}At.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Km="glTF",Mo=12,Wm={JSON:1313821514,BIN:5130562},vd=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Mo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Km)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Mo,r=new DataView(e,Mo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Wm.JSON){let c=new Uint8Array(e,Mo+a,o);this.content=n.decode(c)}else if(l===Wm.BIN){let c=Mo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},yd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=wd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=wd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Kr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},o,c,Tn,d)})})}},Md=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Sd=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},qc=class extends li{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,x=1-m,y=p-d+u;for(let _=0;_!==o;_++){let S=a[v+_+o],w=a[v+_+l]*h,b=a[g+_+o],M=a[g+_]*h;r[_]=x*S+y*w+m*b+p*M}return r}},TM=new Ot,Td=class extends qc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return TM.fromArray(r).normalize().toArray(r),r}},jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qm={9728:Ut,9729:Kt,9984:Xl,9985:zr,9986:zs,9987:qn},Xm={33071:Vn,33648:xr,10497:hn},Qu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wM={CUBICSPLINE:void 0,LINEAR:Ss,STEP:Ms},ed={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function EM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),i.DefaultMaterial}function Vs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function AM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function RM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CM(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+td(t.attributes):e=i.indices+":"+td(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+td(i.targets[n]);return e}function td(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ed(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function PM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var IM=new He,Ad=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new SM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new Ls(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Qa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Vs(r,o,s),mi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(zi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Qu[s.type],o=Kr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ht(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Qu[s.type],c=Kr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,m;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(x);y||(v=new c(o,p*f,s.count*f/h),y=new ws(v,f/h),t.cache.add(x,y)),m=new ts(y,l,d%f/h,g)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),m=new Ht(v,l,g);if(s.sparse!==void 0){let p=Qu.SCALAR,x=Kr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,S=new x(a[1],y,s.sparse.count*p),w=new c(a[2],_,s.sparse.count*l);o!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,M=S.length;b<M;b++){let P=S[b];if(m.setX(P,w[b*l]),l>=2&&m.setY(P,w[b*l+1]),l>=3&&m.setZ(P,w[b*l+2]),l>=4&&m.setW(P,w[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=qm[d.magFilter]||Kt,h.minFilter=qm[d.minFilter]||qn,h.wrapS=Xm[d.wrapS]||hn,h.wrapT=Xm[d.wrapT]||hn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==Kt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let v=f;t.isImageBitmapLoader===!0&&(v=function(m){let p=new Jt(m);p.needsUpdate=!0,f(p)}),t.load(zi.resolveURL(d,r.path),v,void 0,g)})})}let u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),mi(d,a),d.userData.mimeType=a.mimeType||PM(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new rs,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ss,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return mt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Tn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,ht)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=on);let h=r.alphaMode||ed.OPAQUE;if(h===ed.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ed.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Rt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Z(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Rt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Rt){let u=r.emissiveFactor;o.emissive=new Te().setRGB(u[0],u[1],u[2],Tn)}return r.emissiveTexture!==void 0&&a!==Rt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ht)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),mi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Vs(s,u,r),u})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return jm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=CM(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=jm(new xt,c,t),c.mode===jn.TRIANGLE_STRIP?d=d.then(f=>$u(f,po)):c.mode===jn.TRIANGLE_FAN&&(d=d.then(f=>$u(f,Gr))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?EM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let v=h[f],m=a[f],p,x=c[f];if(m.mode===jn.TRIANGLES||m.mode===jn.TRIANGLE_STRIP||m.mode===jn.TRIANGLE_FAN||m.mode===void 0){let y=r.isSkinnedMesh===!0,_=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");y&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=y&&_?new Pa(v,x):new Be(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===jn.LINES)p=new As(v,x);else if(m.mode===jn.LINE_STRIP)p=new Es(v,x);else if(m.mode===jn.LINE_LOOP)p=new La(v,x);else if(m.mode===jn.POINTS)p=new Rs(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&RM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),mi(p,r),m.extensions&&Vs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Vs(s,u[0],r),u[0];let d=new vt;r.extensions&&Vs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(In.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Bi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new He;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ia(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let y=0,_=d.length;y<_;y++){let S=d[y],w=f[y],b=g[y],M=v[y],P=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let A=n._createAnimationTracks(S,w,b,M,P);if(A)for(let C=0;C<A.length;C++)p.push(A[C])}let x=new Za(r,void 0,p);return mi(x,s),x})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,IM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Er:c.length>1?h=new vt:c.length===1?h=c[0]:h=new At,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),mi(h,r),r.extensions&&Vs(n,h,r),r.matrix!==void 0){let u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new vt;n.name&&(r.name=s.createUniqueName(n.name)),mi(r,n),n.extensions&&Vs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Gm(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof un||d instanceof Jt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}us[r.path]===us.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(us[r.path]){case us.weights:h=Fi;break;case us.rotation:h=Ui;break;case us.translation:case us.scale:h=os;break;default:n.itemSize===1?h=Fi:h=os;break}let u=s.interpolation!==void 0?wM[s.interpolation]:Ss,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let v=new h(l[f]+"."+us[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ed(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ui?Td:qc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function LM(i,e,t){let n=e.attributes,s=new sn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let h=Ed(Kr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let v=Ed(Kr[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Rn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function jm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=wd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),mi(i,e),LM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?AM(i,e.targets,t):i})}var Jm=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),y=0;y<p.length;++y){var _=p.charCodeAt(y);x[y]=_>96?_-97:_>64?_-39:_+4}for(var S=0,y=0;y<p.length;++y)x[S++]=x[y]<60?n[x[y]]:(x[y]-60)*64+x[++y];return x.buffer.slice(0,S)}function l(p,x,y,_,S,w,b){var M=p.exports.sbrk,P=_+3&-4,A=M(P*S),C=M(w.length),N=new Uint8Array(p.exports.memory.buffer);N.set(w,C);var O=x(A,_,S,C,w.length);if(O==0&&b&&b(A,P,S),y.set(N.subarray(A,A+_*S)),M(A-M(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(y){var _=y.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function g(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),y=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(y),S=u.length;S<p;++S)u[S]=f(_);for(var S=p;S<u.length;++S)u[S].object.postMessage({});u.length=p,URL.revokeObjectURL(_)}function v(p,x,y,_,S){for(var w=u[0],b=1;b<u.length;++b)u[b].pending<w.pending&&(w=u[b]);return new Promise(function(M,P){var A=new Uint8Array(y),C=++d;w.pending+=p,w.requests[C]={resolve:M,reject:P},w.object.postMessage({id:C,count:p,size:x,source:A,mode:_,filter:S},[A.buffer])})}function m(p){var x=p.data;self.ready.then(function(y){if(!x.id)return self.close();try{var _=new Uint8Array(x.count*x.size);l(y,y.exports[x.mode],_,x.count,x.size,x.source,y.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(S){self.postMessage({id:x.id,count:x.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,y,_,S){l(r,r.exports.meshopt_decodeVertexBuffer,p,x,y,_,r.exports[c[S]])},decodeIndexBuffer:function(p,x,y,_){l(r,r.exports.meshopt_decodeIndexBuffer,p,x,y,_)},decodeIndexSequence:function(p,x,y,_){l(r,r.exports.meshopt_decodeIndexSequence,p,x,y,_)},decodeGltfBuffer:function(p,x,y,_,S,w){l(r,r.exports[h[S]],p,x,y,_,r.exports[c[w]])},decodeGltfBufferAsync:function(p,x,y,_,S){return u.length>0?v(p,x,y,h[_],c[S]):a.then(function(){var w=new Uint8Array(p*x);return l(r,r.exports[h[_]],w,p,x,y,r.exports[c[S]]),w})}}})();function Jr(i){let e=window.TURBO_ASSETS;if(!e)return i;let t=String(i).replace(/^\.\//,"").replace(location.href.replace(/[^/]*$/,""),"");return e[t]||i}var Jc={hatchback:{file:"hatchback.glb"},"1990s-sports-car":{file:"1990s-sports-car.glb"},"1990s-off-roader":{file:"1990s-off-roader.glb"},"1990s-pickup-truck":{file:"1990s-pickup-truck.glb"},"police-car":{file:"police-car.glb",fixed:!0},"muscle-car":{file:"muscle-car.glb"},"rally-car":{file:"rally-car.glb"},"monster-truck":{file:"monster-truck.glb"},"fire-truck":{file:"fire-truck.glb",fixed:!0},concept:{file:"CarConcept.glb",concept:!0},"1990s-taxi":{file:"1990s-taxi.glb",fixed:!0},"delivery-van":{file:"delivery-van.glb"},"ice-cream-truck":{file:"ice-cream-truck.glb",fixed:!0},"compact-car":{file:"compact-car.glb"},"electric-car":{file:"electric-car.glb"},"1990s-suv":{file:"1990s-suv.glb"},coupe:{file:"coupe.glb"},convertible:{file:"convertible.glb"}},$m=["compact-car","1990s-taxi","delivery-van","ice-cream-truck","electric-car","1990s-suv","coupe","convertible"],Qm=["compact-car","coupe","electric-car","convertible","1990s-taxi"],eg=new Lr;eg.setURLModifier(Jr);var Pd=new Vc(eg);Pd.setMeshoptDecoder(Jm);var Ym=()=>window.TURBO_FMT||"glb",Xc=new Map;function Id(i){if(Jc[i]||(i="hatchback"),Xc.has(i))return Xc.get(i);let e=Jc[i].file.replace(/\.glb$/,""),t=Ld("models",e).then(n=>NM(i,n.scene));return Xc.set(i,t),t.catch(()=>Xc.delete(i)),t}function Ld(i,e){return Ym()==="parts"?DM(i,e):Pd.loadAsync(`${i}/${e}.${Ym()}`)}async function DM(i,e){let[t,n]=await Promise.all([fetch(`${i}/${e}.json`).then(u=>u.json()),fetch(`${i}/${e}.geo.txt`).then(u=>u.text())]),s=Uint8Array.from(atob(n.trim()),u=>u.charCodeAt(0)),r=new TextEncoder().encode(JSON.stringify(t)),a=r.length+3&-4,o=s.length+3&-4,l=20+a+8+o,c=new Uint8Array(l),h=new DataView(c.buffer);return h.setUint32(0,1179937895,!0),h.setUint32(4,2,!0),h.setUint32(8,l,!0),h.setUint32(12,a,!0),h.setUint32(16,1313821514,!0),c.fill(32,20,20+a),c.set(r,20),h.setUint32(20+a,o,!0),h.setUint32(24+a,5130562,!0),c.set(s,28+a),Pd.parseAsync(c.buffer,i+"/")}var tg=i=>Promise.all([...new Set(i)].map(Id)),Kc=new Map;function NM(i,e){let t=Jc[i],n=new vt,s=new vt;s.rotation.y=Math.PI,s.add(e),n.add(s),e.traverse(c=>{if(!c.isMesh)return;c.castShadow=!0,c.receiveShadow=!0;let h=u=>{let d=(u.name||"").toLowerCase();return t.concept&&u.transmission>0?new Mt({name:u.name,color:1054752,roughness:.02,metalness:0,transparent:!0,opacity:.4,clearcoat:1,envMapIntensity:1.5,side:on}):d.includes("body_pbr")?new Mt({name:u.name,map:u.map,normalMap:u.normalMap,roughnessMap:u.roughnessMap,metalnessMap:u.metalnessMap,roughness:1,metalness:1,side:u.side,clearcoat:.9,clearcoatRoughness:.06,envMapIntensity:1.1}):(d.includes("glass")&&(u.envMapIntensity=1.6,u.roughness=Math.min(u.roughness,.06)),u)};c.material=Array.isArray(c.material)?c.material.map(h):h(c.material)}),n.updateMatrixWorld(!0);let r=[],a=new Ot;e.traverse(c=>{let h=c.name||"";if(/_wheel_[fr][lr]$/i.test(h)||/^Wheel(Front|Rear)[LR]$/.test(h)){c.parent.getWorldQuaternion(a);let u=new I(1,0,0).applyQuaternion(a.clone().invert()).normalize(),d=new sn().setFromObject(c);r.push({name:h,axis:u,base:c.quaternion.clone(),r:(d.max.y-d.min.y)/2})}});let l=new sn().setFromObject(n).getSize(new I);return n.userData={key:i,wheels:r,wr:r.length?r[0].r:.35,halfW:Math.min(l.x/2,1.05),halfL:l.z/2,height:l.y},!t.concept&&!t.fixed&&(n.userData.paint=FM(e)),Kc.set(i,n),n}function ng(i){let e=null;return i.traverse(t=>{t.isMesh&&(t.material.name||"").toLowerCase().includes("body_pbr")&&(e=t.material)}),e}function Yc(i,e,t){let n=Math.max(i,e,t),s=Math.min(i,e,t),r=n-s,a=0;return r&&(a=n===i?(e-t)/r%6:n===e?(t-i)/r+2:(i-e)/r+4,a*=60,a<0&&(a+=360)),[a,n?r/n:0,n]}function ig(i,e){let t=document.createElement("canvas");return t.width=t.height=e,t.getContext("2d",{willReadFrequently:!0}).drawImage(i,0,0,e,e),t}function FM(i){let e=ng(i);if(!e||!e.map?.image)return null;let t=ig(e.map.image,96),n=t.getContext("2d").getImageData(0,0,96,96).data,s=new Array(36).fill(0).map(()=>({n:0,r:0,g:0,b:0}));for(let c=0;c<n.length;c+=4){let[h,u,d]=Yc(n[c]/255,n[c+1]/255,n[c+2]/255);if(u<.22||d<.25)continue;let f=s[Math.floor(h/10)%36];f.n++,f.r+=n[c],f.g+=n[c+1],f.b+=n[c+2]}let r=s.reduce((c,h)=>h.n>c.n?h:c);if(r.n<50)return null;let a=r.r/r.n,o=r.g/r.n,l=r.b/r.n;return{rgb:[a,o,l],hsv:Yc(a/255,o/255,l/255)}}var Rd=new Map;function UM(i,e){let t=i.userData.key+e;if(Rd.has(t))return Rd.get(t);let n=Jc[i.userData.key],s=new Map,r=new Te(e);if(n.concept)i.traverse(a=>{if(a.isMesh&&/^Paint 1/.test(a.material.name)){let o=a.material.clone();o.color.copy(r),o.metalness=.6,o.roughness=.3,s.set(a.material,o)}});else if(i.userData.paint){let a=i.userData.paint,[o,l,c]=a.hsv,h=r.clone().convertLinearToSRGB(),u=[h.r*255,h.g*255,h.b*255],d=ng(i),f=Math.min(1024,d.map.image.width),g=ig(d.map.image,f),v=g.getContext("2d"),m=v.getImageData(0,0,f,f),p=m.data;for(let _=0;_<p.length;_+=4){let[S,w,b]=Yc(p[_]/255,p[_+1]/255,p[_+2]/255),M=Math.abs(S-o);if(M>180&&(M=360-M),M>26||w<l*.45)continue;let P=Math.min(1,(26-M)/10)*Math.min(1,(w-l*.45)/(l*.3)),A=b/c;for(let C=0;C<3;C++)p[_+C]=p[_+C]*(1-P)+Math.min(255,u[C]*A)*P}v.putImageData(m,0,0);let x=new Gt(g);x.flipY=d.map.flipY,x.colorSpace=ht,x.anisotropy=4;let y=d.clone();y.map=x,s.set(d,y),i.traverse(_=>{if(!_.isMesh||s.has(_.material)||_.material.map)return;let S=_.material.color.clone().convertLinearToSRGB(),[w,b]=Yc(S.r,S.g,S.b),M=Math.abs(w-o);if(M>180&&(M=360-M),M<20&&b>.2){let P=_.material.clone();P.color.copy(r),s.set(_.material,P)}})}return Rd.set(t,s),s}var OM={metal:{metalness:.65,roughness:.32,clearcoat:1,clearcoatRoughness:.04,dropMaps:!0},matte:{metalness:0,roughness:.78,clearcoat:0,clearcoatRoughness:.5,dropMaps:!0},pearl:{metalness:.25,roughness:.3,clearcoat:1,clearcoatRoughness:.03,iridescence:1,iridescenceIOR:1.35,dropMaps:!0},candy:{metalness:.85,roughness:.18,clearcoat:1,clearcoatRoughness:.02,dropMaps:!0},chrome:{metalness:1,roughness:.06,clearcoat:1,clearcoatRoughness:.02,dropMaps:!0}},jc=new Map;function kM(i,e,t,n){let s=i.userData.key+e+t;if(jc.has(s))return jc.get(s);let r=OM[t],a=new Map(n||[]);return r?(i.traverse(o=>{if(!o.isMesh)return;let l=o.material,c=a.get(l)||l,h=l.name||"";if(!(h.toLowerCase().includes("body_pbr")||/^Paint 1/.test(h)||n&&n.has(l)&&!h.toLowerCase().includes("body_pbr"))||!c.isMeshPhysicalMaterial&&!c.isMeshStandardMaterial)return;let d=c.isMeshPhysicalMaterial?c.clone():new Mt({map:c.map,color:c.color,normalMap:c.normalMap});r.dropMaps&&(d.metalnessMap=null,d.roughnessMap=null),Object.assign(d,{metalness:r.metalness,roughness:r.roughness,clearcoat:r.clearcoat,clearcoatRoughness:r.clearcoatRoughness,iridescence:r.iridescence||0}),r.iridescenceIOR&&(d.iridescenceIOR=r.iridescenceIOR),d.needsUpdate=!0,a.set(l,d)}),jc.set(s,a),a):(jc.set(s,a),a)}function Ws(i,e,t={}){let n=Kc.get(i)||Kc.get("hatchback")||Kc.values().next().value,s=n.clone(!0),r=e&&e!=="orig"?UM(n,e):null,a=t.finish&&t.finish!=="gloss"?kM(n,e||"orig",t.finish,r):r;s.traverse(c=>{c.isMesh&&(a&&a.has(c.material)&&(c.material=a.get(c.material)),(t.noShadow||t.lite)&&(c.castShadow=!1),t.lite&&(c.receiveShadow=!1))});let o={};s.traverse(c=>{c.name&&(o[c.name]=c)});let l=n.userData.wheels.map(c=>({obj:o[c.name],axis:c.axis,base:c.base,r:c.r})).filter(c=>c.obj);if(s.userData={...n.userData,wheels:l,body:s.children[0]},t.lite){let c=BM(n.userData);s.add(c)}return s}var Zm=new Ot;function So(i,e){for(let t of i.userData.wheels)Zm.setFromAxisAngle(t.axis,-e/t.r),t.obj.quaternion.copy(t.base).premultiply(Zm)}var Cd=null;function BM(i){if(!Cd){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),s=n.createRadialGradient(32,32,4,32,32,32);s.addColorStop(0,"rgba(0,0,0,0.7)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,64,64),Cd=new Gt(t)}let e=new Be(new jt(i.halfW*2.5,i.halfL*2.3),new Rt({map:Cd,transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e}var Dd=new to,wn={chrome:new mt({color:15790324,metalness:1,roughness:.12}),black:new mt({color:1316120,metalness:.3,roughness:.45}),carbon:new Mt({color:1776672,metalness:.4,roughness:.35,clearcoat:1,clearcoatRoughness:.08}),red:new Mt({color:14686232,metalness:.2,roughness:.3,clearcoat:1}),amber:new mt({color:16757504,emissive:16750592,emissiveIntensity:2.2}),blueGlow:new Rt({color:4237567})},sg=new Map,Ud=class{constructor(e){this.car=e,e.updateMatrixWorld(!0),this.inv=e.matrixWorld.clone().invert(),this.meshes=[],e.userData.body.traverse(n=>{n.isMesh&&n.visible&&this.meshes.push(n)});let t=e.userData;this.L=t.halfL,this.W=t.halfW,this.H=t.height,this.memo=sg.get(t.key)||new Map,sg.set(t.key,this.memo)}cast(e,t){let n=`${e.x.toFixed(3)},${e.y.toFixed(3)},${e.z.toFixed(3)}|${t.x},${t.y},${t.z}`;if(this.memo.has(n)){let r=this.memo.get(n);return r&&{p:r.p.clone(),n:r.n.clone()}}let s=this.castRaw(e,t);return this.memo.set(n,s&&{p:s.p.clone(),n:s.n.clone()}),s}castRaw(e,t){let n=this.car.matrixWorld;Dd.set(e.clone().applyMatrix4(n),t.clone().transformDirection(n)),Dd.far=20;let s=Dd.intersectObjects(this.meshes,!1)[0];if(!s)return null;let r=this.car.worldToLocal(s.point.clone()),a=s.face?s.face.normal.clone().transformDirection(s.object.matrixWorld).transformDirection(this.inv):new I(0,1,0);return a.dot(t)>0&&a.negate(),{p:r,n:a}}top(e,t){return this.cast(new I(e,this.H+3,t),new I(0,-1,0))}side(e,t,n){return this.cast(new I(e*(this.W+3),t,n),new I(-e,0,0))}front(e,t){return this.cast(new I(e,t,-this.L-3),new I(0,0,1))}rear(e,t){return this.cast(new I(e,t,this.L+3),new I(0,0,-1))}roof(){let e=null;for(let t=-this.L;t<=this.L;t+=.1){let n=this.top(0,t);n&&(!e||n.p.y>e.p.y)&&(e=n)}return e}};function To(i,e){let t=i.length,n=i[0].length,s=[],r=[],a=[];for(let c=0;c<t;c++)for(let h=0;h<n;h++){let u=i[c][h];s.push(u.p.x+u.n.x*.012,u.p.y+u.n.y*.012,u.p.z+u.n.z*.012),r.push(h/(n-1),c/(t-1))}for(let c=0;c<t-1;c++)for(let h=0;h<n-1;h++){let u=c*n+h,d=u+1,f=u+n,g=f+1;i[c][h].ok&&i[c][h+1].ok&&i[c+1][h].ok&&i[c+1][h+1].ok&&a.push(u,f,d,d,f,g)}let o=new xt;o.setAttribute("position",new Ye(s,3)),o.setAttribute("uv",new Ye(r,2)),o.setIndex(a),o.computeVertexNormals();let l=new Be(o,e);return l.renderOrder=2,l}function og(i){for(let e of i){let t=null;for(let n of e)n.p?t=n:t&&(n.p=t.p.clone(),n.n=t.n.clone())}for(let e of i)for(let t of e)t.p||(t.p=new I,t.n=new I(0,1,0),t.ok=!1)}function Nd(i,e,t,n,s,r,a,o,l){let c=[];for(let h=0;h<o;h++){let u=s+(r-s)*h/(o-1),d=[];for(let f=0;f<a;f++){let g=f/(a-1),v=l?t+(n-t)*g:n-(n-t)*g,m=i.side(e,u,v);d.push(m?{...m,ok:Math.abs(m.n.x)>.25}:{ok:!1})}c.push(d)}return og(c),c}function rg(i,e,t,n,s,r,a){let o=[];for(let l=0;l<a;l++){let c=s-(s-n)*l/(a-1),h=[];for(let u=0;u<r;u++){let d=e+(t-e)*u/(r-1),f=i.top(d,c);h.push(f?{...f,ok:!0}:{ok:!1})}o.push(h)}return og(o),o}var Fd=new Map;function zM(i,e){let t=i+e;if(Fd.has(t))return Fd.get(t);let n=document.createElement("canvas");n.width=512,n.height=128;let s=n.getContext("2d");if(i==="flames"){let a=s.createLinearGradient(0,0,512,0);a.addColorStop(0,"#ffeb3b"),a.addColorStop(.35,"#ff9800"),a.addColorStop(.75,"#f4511e"),a.addColorStop(1,"#b71c1c"),s.fillStyle=a,s.strokeStyle="#3e0000",s.lineWidth=5,s.beginPath(),s.moveTo(0,20),s.lineTo(0,108);let o=[[150,104],[250,86],[360,100],[470,70],[400,58],[500,40],[330,36],[420,14],[230,28],[150,8],[60,22]];for(let l=0;l<o.length;l++){let[c,h]=o[l],u=l?o[l-1][0]:0;s.quadraticCurveTo((u+c)/2,h+(l%2?-26:26),c,h)}s.closePath(),s.fill(),s.stroke()}else if(i==="number")s.fillStyle="#fff",s.beginPath(),s.arc(256,64,58,0,7),s.fill(),s.lineWidth=8,s.strokeStyle=e,s.stroke(),s.fillStyle="#111",s.font="bold 84px Arial Black, Arial, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText("7",256,70);else if(i==="stars"){let a=(o,l,c,h)=>{s.beginPath();for(let u=0;u<10;u++){let d=-Math.PI/2+u*Math.PI/5,f=u%2?c*.45:c;u?s.lineTo(o+Math.cos(d)*f,l+Math.sin(d)*f):s.moveTo(o+Math.cos(d)*f,l+Math.sin(d)*f)}s.closePath(),s.fillStyle=h,s.fill(),s.lineWidth=4,s.strokeStyle="#fff",s.stroke()};a(90,64,46,"#ffd600"),a(220,50,32,"#ff4081"),a(330,74,40,"#40c4ff"),a(440,52,30,"#76ff03")}else i==="bolt"&&(s.fillStyle="#ffeb3b",s.strokeStyle="#111",s.lineWidth=7,s.beginPath(),s.moveTo(10,70),s.lineTo(180,40),s.lineTo(170,62),s.lineTo(340,30),s.lineTo(325,56),s.lineTo(505,22),s.lineTo(320,96),s.lineTo(334,72),s.lineTo(165,104),s.lineTo(176,82),s.closePath(),s.fill(),s.stroke());let r=new Gt(n);return r.colorSpace=ht,r.anisotropy=4,Fd.set(t,r),r}var ag=i=>new mt({map:i,transparent:!0,alphaTest:.35,roughness:.35,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-4,depthWrite:!1}),Zc=null;function HM(){if(Zc)return Zc;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Zc=new Gt(i),Zc}function GM(i,e){i.quaternion.setFromUnitVectors(new I(0,1,0),e.clone().normalize())}var ii=(i,e,t,n)=>{let s=new Be(new Xt(i,e,t),n);return s.castShadow=!0,s},qs=(i,e,t)=>{let n=new Be(new rn(e,e,i,14),t);return n.castShadow=!0,n};function $c(i,e={},t={}){var _;let n=i.getObjectByName("mods");n&&i.remove(n);let s=i.userData,r=new Ud(i),a=new vt;a.name="mods",i.add(a);let o={},l=S=>o[S]||(o[S]=(()=>{let w=new vt;return w.name=S,a.add(w),w})()),c=e.paint&&e.paint!=="orig"?e.paint:"#d32f2f",h=new Mt({color:c,metalness:.3,roughness:.3,clearcoat:1,clearcoatRoughness:.04}),u=s.halfL,d=s.halfW;if(e.rim&&e.rim!=="orig"){let S=new mt({color:e.rim,metalness:.9,roughness:.22});for(let w of s.wheels)w.obj.traverse(b=>{b.isMesh&&/hubcap|rim/i.test(b.material.name||"")&&(b.material=S)})}let f={light:.35,dark:.65,black:.9}[e.tint];if(f&&i.userData.body.traverse(S=>{if(!S.isMesh||!/glass|window|windshield/i.test((S.material.name||"")+" "+(S.name||"")))return;let w=S.material.clone();w.color=new Te(w.color||2107443).lerp(new Te(131844),f),"opacity"in w&&w.transparent&&(w.opacity=Math.max(w.opacity,.5+f*.45)),w.roughness=.05,S.material=w}),e.spoiler&&e.spoiler!=="none"){let S=l("spoiler"),w=u*.86,b=r.top(0,w)||r.top(0,u*.75);if(b){let M=d*2*(e.spoiler==="big"?1:.88);if(e.spoiler==="lip"){let P=ii(M*.92,.05,.16,h);P.position.copy(b.p).add(new I(0,.03,.02)),P.rotation.x=-.25,S.add(P)}else if(e.spoiler==="duck"){let P=ii(M*.95,.1,.32,h);P.position.copy(b.p).add(new I(0,.05,.04)),P.rotation.x=-.35,S.add(P)}else{let P=e.spoiler==="big",A=P?.55:.3,C=P?.42:.32,N=ii(M,.045,C,wn.carbon);if(N.position.set(0,b.p.y+A,b.p.z+.05),N.rotation.x=.12,S.add(N),P){let O=ii(M*.96,.035,C*.55,h);O.position.set(0,b.p.y+A+.1,b.p.z+.18),O.rotation.x=.35,S.add(O)}for(let O of[-1,1]){let L=ii(.05,A,.12,wn.carbon);L.position.set(O*M*.3,b.p.y+A/2,b.p.z+.05),S.add(L);let H=ii(.03,P?.32:.2,C+.08,h);H.position.set(O*M/2,b.p.y+A+.04,b.p.z+.05),S.add(H)}}}}if(e.neon&&e.neon!=="none"){let S=l("neon"),w=new Rt({map:HM(),color:e.neon==="rainbow"?16711680:e.neon,transparent:!0,blending:_n,depthWrite:!1,opacity:.95}),b=new Be(new jt(d*2+1.4,u*2+1.2),w);b.rotation.x=-Math.PI/2,b.position.y=.025,b.renderOrder=1,S.add(b);let M=new Rt({color:w.color});for(let P of[-1,1]){let A=qs(u*1.5,.025,M);A.rotation.x=Math.PI/2,A.position.set(P*(d-.15),.12,0),A.castShadow=!1,S.add(A)}S.userData.neon={mat:w,tubeMat:M,rainbow:e.neon==="rainbow"}}let g=e.decal;if(g&&g!=="none"){let S=l("decal");if(g==="stripes"){let w=new Te(c).getHSL({}).l>.6,b=new mt({color:w?1118481:16777215,roughness:.3,polygonOffset:!0,polygonOffsetFactor:-4});for(let M of[-.2,.2])S.add(To(rg(r,M-.085,M+.085,-u*.98,u*.98,2,44),b))}else{let w=zM(g,c),b=ag(w),M=-u*.62,P=u*.25,A=s.wr*.75,C=A+(g==="number"?.5:.36);for(let N of[-1,1])if(g==="number"){let O=-u*.05;S.add(To(Nd(r,N,O-.25,O+.25,A+.05,A+.55,12,10,N<0),b))}else S.add(To(Nd(r,N,M,P,A,C,18,5,!0),b));g==="number"&&S.add(To(rg(r,-.3,.3,-u*.72,-u*.42,10,10),b))}}let v=t.speed||0;if(v>=1){let S=l("speed"),w=r.top(0,-u*.5);if(w){let b=.75+Math.min(v,6)*.07,M=new vt,P=ii(.52*b,.12*b,.7*b,v>=4?wn.carbon:h);P.position.y=.04,M.add(P);let A=ii(.42*b,.07*b,.04,wn.black);if(A.position.set(0,.05,-.36*b),M.add(A),v>=3)for(let C of[-.12,.12]){let N=ii(.02,.07*b,.03,wn.chrome);N.position.set(C*b,.05,-.37*b),M.add(N)}M.position.copy(w.p),GM(M,w.n),S.add(M)}}let m=t.nitro||0;if(m>=1||v>=2){let S=l("nitro"),w=r.rear(0,s.wr*.9)||r.rear(0,s.wr*1.3),b=w?w.p.z:u,M=m>=5?4:m>=3?2:1,P=M===1?[d*.45]:M===2?[-d*.45,d*.45]:[-d*.52,-d*.36,d*.36,d*.52];for(let A of P){let C=qs(.3,.055+(m>=4?.015:0),wn.chrome);if(C.rotation.x=Math.PI/2,C.position.set(A,s.wr*.62,b+.06),S.add(C),m>=1){let N=new Be(new Ua(.045,16),wn.blueGlow);N.position.set(A,s.wr*.62,b+.215),S.add(N)}}if(m>=3){let A=document.createElement("canvas");A.width=256,A.height=64;let C=A.getContext("2d");C.fillStyle="#29b6f6",C.font="italic 900 50px Arial Black, Arial",C.textBaseline="middle",C.fillText("N\u2082O",8,34),C.strokeStyle="#fff",C.lineWidth=2,C.strokeText("N\u2082O",8,34);let N=new Gt(A);N.colorSpace=ht;let O=ag(N);for(let L of[-1,1])S.add(To(Nd(r,L,u*.35,u*.75,s.wr*1.6,s.wr*1.6+.16,10,4,L<0),O))}}let p=t.magnet||0;if(p>=1){let S=l("magnet"),w=r.roof();if(w){let b=.45+p*.07,M=new vt,P=new Be(new Is(.28,.09,12,24,Math.PI),wn.red);P.rotation.z=Math.PI,P.position.y=.38,P.castShadow=!0,M.add(P);for(let C of[-.28,.28]){let N=qs(.14,.09,wn.chrome);N.position.set(C,.44,0),M.add(N)}let A=qs(.12,.05,wn.black);A.position.y=.06,M.add(A),M.scale.setScalar(b),M.position.copy(w.p),M.rotation.y=Math.PI/2,S.add(M)}}let x=t.armor||0;if(x>=1){let S=l("armor"),w=r.front(0,s.wr*1.1)||r.front(0,s.wr*1.5),b=r.top(0,-u*.8),M=(w?w.p.z:-u)-.14,P=d*1.5,A=s.wr*.55,C=Math.min(s.wr*.55+.6+Math.min(x,4)*.05,(b?b.p.y:1)+.05),N=.035+x*.004;for(let O of[-P/2,-P/6,P/6,P/2]){let L=qs(C-A,N,wn.chrome);L.position.set(O,(A+C)/2,M),S.add(L)}for(let O of[A+.08,C]){let L=qs(P,N,wn.chrome);L.rotation.z=Math.PI/2,L.position.set(0,O,M),S.add(L)}if(x>=3){let O=r.roof();if(O){let L=ii(d*1.3,.1,.16,wn.black);L.position.set(0,O.p.y+.12,O.p.z-.3),S.add(L);for(let H=0;H<4;H++){let W=ii(.16,.08,.04,wn.amber);W.position.set(-d*.45+H*d*.3,O.p.y+.12,O.p.z-.39),S.add(W)}}}if(x>=5)for(let O of[-1,1]){let L=qs(u*1.2,.045,wn.chrome);L.rotation.x=Math.PI/2,L.position.set(O*(d+.02),s.wr*.75,0),S.add(L)}}let y=Math.min(.09,(t.handling||0)*.016);if(y&&s.wheels.length){let S=new Set(s.wheels.map(A=>A.obj)),w=s.wheels[0].obj.parent,b=new Ot;w.getWorldQuaternion(b);let M=new Ot;i.getWorldQuaternion(M);let P=new I(0,1,0).applyQuaternion(M).applyQuaternion(b.invert());for(let A of w.children)S.has(A)||((_=A.userData).basePos??(_.basePos=A.position.clone()),A.position.copy(A.userData.basePos).addScaledVector(P,-y));a.position.y=-y,o.neon&&(o.neon.position.y=y)}return a.userData.parts=o,a}function Qc(i,e){let n=i.getObjectByName("neon")?.userData.neon;n&&(n.rainbow&&(n.mat.color.setHSL(e*.15%1,1,.55),n.tubeMat.color.copy(n.mat.color)),n.mat.opacity=.8+Math.sin(e*3)*.12)}var Yr={paint:{phi:2.35,el:.28,zoom:1},finish:{phi:2.35,el:.4,zoom:1.05},rim:{phi:1.75,el:.12,zoom:1.35},spoiler:{phi:.55,el:.42,zoom:1.15},neon:{phi:1.6,el:.1,zoom:1.05},decal:{phi:1.45,el:.25,zoom:1.1},tint:{phi:2.2,el:.3,zoom:1.15},speed:{phi:2.7,el:.6,zoom:1.25},handling:{phi:1.6,el:.08,zoom:1.2},nitro:{phi:.35,el:.15,zoom:1.3},magnet:{phi:2,el:.75,zoom:1.15},armor:{phi:2.85,el:.25,zoom:1.25}};var eh=class{constructor(e){this.engine=e;let t=this.scene=new ei;t.background=null;let n=new cs(e.renderer);t.environment=n.fromScene(new Gc,.03).texture,t.environmentIntensity=.7,n.dispose(),this.camera=new Nt(35,e.aspect,.1,200);let s=new hi(16769720,2.6);s.position.set(-7,9,4),s.castShadow=e.quality.shadows>0,s.shadow.mapSize.set(2048,2048),s.shadow.bias=-4e-4,s.shadow.normalBias=.02,s.shadow.radius=4;let r=s.shadow.camera;r.left=r.bottom=-6,r.right=r.top=6,r.near=1,r.far=30,t.add(s),t.add(new Ns(12572927,7035456,.9));let a=new hi(13623551,.7);a.position.set(5,3,6),t.add(a);let o=new Be(new jt(40,40),new Ka({opacity:.45}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,t.add(o);let l=document.createElement("canvas");l.width=l.height=128;let c=l.getContext("2d"),h=c.createRadialGradient(64,64,8,64,64,64);h.addColorStop(0,"rgba(0,0,0,0.75)"),h.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=h,c.fillRect(0,0,128,128),this.blob=new Be(new jt(1,1),new Rt({map:new Gt(l),transparent:!0,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.01,this.blob.visible=!1,t.add(this.blob),this.neonLight=new ki(16777215,0,6,1.5),this.neonLight.position.y=.2,t.add(this.neonLight),this.turn=new vt,t.add(this.turn),this.t=0,this.car=null,this.req=0,this.rot=.6,this.rotV=0,this.el=.28,this.zoom=1,this.auto=!0,this.idleT=0,this.target=null,this.zone={x:0,y:0,w:1,h:1},this.active=!1,this.bindInput(e.renderer.domElement);let u=document.getElementById("car-zone");u&&this.bindInput(u,!0)}bindInput(e,t=!1){let n=new Map,s=0,r=l=>{!this.active&&!t||(l.preventDefault?.(),n.set(l.pointerId,{x:l.clientX,y:l.clientY}),e.setPointerCapture?.(l.pointerId),this.auto=!1,this.target=null,this.idleT=0,this.rotV=0,s=0)},a=l=>{if(!this.active&&!t||!n.has(l.pointerId))return;l.preventDefault?.();let c=n.get(l.pointerId),h=l.clientX-c.x,u=l.clientY-c.y;if(c.x=l.clientX,c.y=l.clientY,n.size===1){let d=6/Math.max(300,innerWidth);this.rot+=h*d,this.rotV=h*d*60,this.el=In.clamp(this.el+u*.004,.02,1.1)}else if(n.size===2){let[d,f]=[...n.values()],g=Math.hypot(d.x-f.x,d.y-f.y);s&&(this.zoom=In.clamp(this.zoom*g/s,.7,2.6)),s=g}this.idleT=0},o=l=>{n.delete(l.pointerId),s=0};e.addEventListener("pointerdown",r),e.addEventListener("pointermove",a),e.addEventListener("pointerup",o),e.addEventListener("pointercancel",o),e.addEventListener("wheel",l=>{this.active&&(this.zoom=In.clamp(this.zoom*(l.deltaY>0?.92:1.08),.7,2.6),this.idleT=0,this.auto=!1)},{passive:!0})}async setCar(e,t={},n={},s=null){let r=++this.req;this.onLoading?.(!0);try{await Id(e)}catch(h){console.warn(h)}if(r!==this.req)return;this.onLoading?.(!1);let a;try{a=Ws(e,t.paint,{finish:t.finish})}catch(h){console.warn(h);return}this.car&&this.turn.remove(this.car),this.car=a,this.turn.add(a);let o=null;try{o=$c(a,t,n)}catch(h){console.warn("mods",h)}let l=a.userData;this.blob.visible=!0,this.blob.scale.set(l.halfW*2.6,l.halfL*2.4,1),this.R=Math.hypot(l.halfL,l.halfW),this.Hc=l.height;let c=t.neon&&t.neon!=="none";this.neonLight.intensity=c?3:0,c&&t.neon!=="rainbow"&&this.neonLight.color.set(t.neon),this.neonRainbow=t.neon==="rainbow",s&&o?.userData.parts?.[s]&&(this.pop={obj:o.userData.parts[s],t:0})}focus(e){if(!e)return;let n=.35-e.phi;for(;n-this.rot>Math.PI;)n-=Math.PI*2;for(;n-this.rot<-Math.PI;)n+=Math.PI*2;this.target={rot:n,el:e.el,zoom:e.zoom},this.auto=!1,this.idleT=0}resetView(){this.target={rot:this.rot,el:.28,zoom:1},this.auto=!0}update(e){if(this.t+=e,this.idleT+=e,this.target){let m=1-Math.exp(-e*4);this.rot+=(this.target.rot-this.rot)*m,this.el+=(this.target.el-this.el)*m,this.zoom+=(this.target.zoom-this.zoom)*m,Math.abs(this.target.rot-this.rot)<.002&&Math.abs(this.target.zoom-this.zoom)<.002&&(this.target=null)}else this.rot+=this.rotV*e,this.rotV*=Math.pow(.04,e),(this.auto||this.idleT>6)&&(this.auto=!0,this.rot+=e*.25);if(this.turn.rotation.y=this.rot,this.blob.rotation.z=this.rot,this.car&&Qc(this.car,this.t),this.neonRainbow&&this.neonLight.color.setHSL(this.t*.15%1,1,.55),this.pop){this.pop.t+=e;let m=this.pop.t,p=m<.5?1+Math.sin(m/.5*Math.PI)*.35:1;this.pop.obj.scale.setScalar(p),m>.5&&(this.pop.obj.scale.setScalar(1),this.pop=null)}let t=this.camera,n=innerWidth,s=innerHeight,r=this.zone;t.aspect=n/s,t.fov=35,t.updateProjectionMatrix();let a=Math.tan(In.degToRad(t.fov/2)),o=a*t.aspect,l=this.R||2.3,c=this.Hc||1.5,h=l/(o*(r.w*.94/n)),u=(c*.55+l*.5*Math.sin(this.el)+.3)/(a*(r.h*.92/s)),d=Math.max(h,u)/this.zoom,f=.35,g=Math.cos(this.el),v=c*.42;t.position.set(Math.sin(f)*d*g,v+Math.sin(this.el)*d,Math.cos(f)*d*g),t.lookAt(0,v,0),t.setViewOffset(n,s,n/2-(r.x+r.w/2),s/2-(r.y+r.h/2),n,s),this.engine.renderer.toneMappingExposure=.9,this.engine.setBloom(0)}render(e){this.engine.render(this.scene,this.camera,e)}};function gi(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Zr(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function $r(i,e=!0,t=!0){let n=new Gt(i);return e&&(n.colorSpace=ht),t&&(n.wrapS=n.wrapT=hn),n.anisotropy=8,n}var bi={lanes:[-3.4,0,3.4],halfWidth:6.2,texLen:12};function lg(i,e=.45){let s=Zr(128,256),r=s.getContext("2d"),a=gi(i);r.fillStyle="#000",r.fillRect(0,0,128,256);for(let l=6;l<250;l+=16)for(let c=6;c<122;c+=14)if(a()<e){let h=a();r.fillStyle=h<.6?`rgb(255,${200+a()*40},${120+a()*60})`:h<.85?"#cfe8ff":"#ffd27a",r.globalAlpha=.6+a()*.4,r.fillRect(c,l,9,10),r.globalAlpha=1}return $r(s)}function cg(i){let n=Zr(128,256),s=n.getContext("2d"),a=40+gi(i)()*40;s.fillStyle=`rgb(${a},${a+4},${a+10})`,s.fillRect(0,0,128,256);for(let o=6;o<250;o+=16)for(let l=6;l<122;l+=14)s.fillStyle="#0c1018",s.fillRect(l,o,9,10);return $r(n)}function hg(){let i=Zr(128,128),e=i.getContext("2d"),t=e.createRadialGradient(64,64,10,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.75)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),$r(i,!1,!1)}function ug(i,e="#fff"){let t=Zr(256,64),n=t.getContext("2d");n.font="bold 34px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="rgba(0,0,0,0.55)";let s=Math.min(250,n.measureText(i).width+30);return n.beginPath(),n.roundRect(128-s/2,6,s,52,26),n.fill(),n.fillStyle=e,n.fillText(i,128,33),$r(t,!0,!1)}function dg(){let i=Zr(256,64),e=i.getContext("2d");for(let n=0;n<4;n++)for(let s=0;s<16;s++)e.fillStyle=(s+n)%2?"#111":"#fafafa",e.fillRect(s*16,n*16,16,16);let t=$r(i);return t.magFilter=Ut,t}function fg(i,e){let s=Zr(256,i==="name"||i==="dir"?128:256),r=s.getContext("2d");if(r.lineJoin="round",i==="warn")r.beginPath(),r.moveTo(128,10),r.lineTo(246,226),r.lineTo(10,226),r.closePath(),r.fillStyle="#d50000",r.fill(),r.beginPath(),r.moveTo(128,46),r.lineTo(216,206),r.lineTo(40,206),r.closePath(),r.fillStyle="#fafafa",r.fill(),r.font='84px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(e,128,152);else if(i==="limit")r.beginPath(),r.arc(128,128,120,0,7),r.fillStyle="#d50000",r.fill(),r.beginPath(),r.arc(128,128,92,0,7),r.fillStyle="#fafafa",r.fill(),r.fillStyle="#111",r.font='bold 104px "Arial Narrow",Arial,sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(e,128,134);else if(i==="name")r.fillStyle="#0d47a1",r.beginPath(),r.roundRect(4,4,248,120,12),r.fill(),r.strokeStyle="#fff",r.lineWidth=6,r.beginPath(),r.roundRect(12,12,232,104,8),r.stroke(),r.fillStyle="#fff",r.font="bold 40px Arial,sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(e,128,66,220);else if(i==="dir"){r.fillStyle="#1b5e20",r.beginPath(),r.roundRect(4,4,248,120,12),r.fill(),r.strokeStyle="#fff",r.lineWidth=5,r.beginPath(),r.roundRect(12,12,232,104,8),r.stroke(),r.fillStyle="#fff",r.font="bold 30px Arial,sans-serif",r.textAlign="left",r.textBaseline="middle";let[o,l]=e.split("|");r.fillText(o,28,46,160),r.fillText(l,28,86,160),r.font="bold 44px Arial",r.fillText("\u279C",196,66)}return $r(s,!0,!1)}var VM={"oak-tree":{h:[7,10]},"apple-tree":{h:[4.5,6]},"cypress-tree":{h:[9,13]},"olive-tree":{h:[4,5.5]},bush:{h:[1.2,2]},"cottage-house":{h:[6,7],big:1},"stone-house":{h:[6,7],big:1},farmhouse:{h:[7,8],big:1},barn:{h:[8,9],big:1},windmill:{h:[12,14],big:1},silo:{h:[11,13],big:1},"hay-bale":{h:[1.4,1.6]},"hay-bale-stack":{h:[1.6,1.9]},"wooden-fence":{h:[1.1,1.2]},"village-well":{h:[3,3.4]},sunflower:{h:[1.6,2.1]},cow:{h:[1.5,1.6]},"power-pole":{h:[9,10]},"pine-tree":{h:[9,14]},"spruce-tree":{h:[10,16]},"birch-tree":{h:[9,12]},"autumn-tree":{h:[7,9]},"tree-stump":{h:[.6,.8]},"log-cabin":{h:[6,7],big:1},"boulder-rock-set":{h:[1.6,3]},cactus:{h:[3,5]},"barrel-cactus":{h:[1,1.4]},"palm-tree":{h:[8,11]},"rocky-outcrop":{h:[5,9]},"adobe-house":{h:[6,7],big:1},"small-rock-set":{h:[.6,1]},"snowy-pine-tree":{h:[9,14]},"snowy-cabin":{h:[6,7],big:1},"alpine-chalet":{h:[9,10],big:1},snowman:{h:[1.9,2.2]},"apartment-building":{h:[22,26],big:1},"high-rise-apartment":{h:[45,60],big:1},"office-tower":{h:[40,55],big:1},skyscraper:{h:[60,80],big:1},"shop-front":{h:[10,12],big:1},"corner-shop":{h:[12,14],big:1},"street-light":{h:[7,7.5]},"bus-stop-shelter":{h:[2.6,2.8]},"fire-hydrant":{h:[.8,.9]},"traffic-light":{h:[4.5,5]},"park-bench":{h:[.9,1]},"guard-rail":{h:[.8,.85]},"traffic-cone":{h:[.75,.75]},"road-barrier":{h:[1.05,1.05]},"construction-barrier":{h:[1.1,1.1]},"jersey-barrier":{h:[.95,.95]},"traffic-barrel":{h:[1.05,1.05]},"grass-clump":{h:[.5,.9]}},_g={village:["oak-tree","apple-tree","cypress-tree","olive-tree","bush","cottage-house","stone-house","farmhouse","barn","windmill","silo","hay-bale","wooden-fence","village-well","sunflower","cow","power-pole","street-light","grass-clump","guard-rail"],forest:["pine-tree","spruce-tree","birch-tree","autumn-tree","tree-stump","log-cabin","boulder-rock-set","bush","grass-clump","guard-rail","small-rock-set"],desert:["cactus","barrel-cactus","palm-tree","rocky-outcrop","adobe-house","small-rock-set","boulder-rock-set","guard-rail","power-pole"],snow:["snowy-pine-tree","snowy-cabin","alpine-chalet","snowman","boulder-rock-set","guard-rail","street-light"],city:["apartment-building","high-rise-apartment","office-tower","skyscraper","shop-front","corner-shop","street-light","bus-stop-shelter","fire-hydrant","traffic-light","park-bench","oak-tree","guard-rail"]},vg=["traffic-cone","road-barrier","construction-barrier","jersey-barrier","traffic-barrel","hay-bale","tree-stump","boulder-rock-set","snowman"],th=new Map;function WM(i){if(th.has(i))return th.get(i);let e=Ld("env",i).then(t=>{let n=t.scene;n.updateMatrixWorld(!0);let s=new sn().setFromObject(n),r=s.getSize(new I),a=[];n.traverse(l=>{if(l.isMesh){let c=Array.isArray(l.material)?l.material:[l.material];for(let h of c){h.userData.shared=!0;for(let u of["map","normalMap","roughnessMap","metalnessMap","emissiveMap"])h[u]&&(h[u].userData.shared=!0)}a.push({geometry:l.geometry,material:l.material,local:l.matrixWorld.clone()})}});let o=new He().makeTranslation(-(s.min.x+s.max.x)/2,-s.min.y,-(s.min.z+s.max.z)/2);for(let l of a)l.local.premultiply(o);return{name:i,parts:a,size:r,root:n}});return th.set(i,e),e.catch(()=>th.delete(i)),e}var qM=i=>Promise.all([...new Set(i)].map(e=>WM(e).catch(t=>(console.warn("prop",e,t),null)))),ih=new Map;async function yg(i){let e=await qM(i);for(let t of e)t&&ih.set(t.name,t);return e.filter(Boolean).length}var sh=i=>ih.get(i);function Mg(i,{h:e,w:t}={}){let n=ih.get(i);if(!n)return null;let s=new vt,r=e?e/n.size.y:1;t&&(r=Math.min(r,t/Math.max(n.size.x,.01)));for(let a of n.parts){let o=new Be(a.geometry,a.material);o.matrixAutoUpdate=!1,o.matrix.copy(a.local),o.castShadow=!0,o.receiveShadow=!0;let l=new vt;l.add(o),s.add(l)}return s.scale.setScalar(r),s.userData.size=n.size.clone().multiplyScalar(r),s}var nh=class{constructor(e,t=64){this.scene=e,this.cap=t,this.sets=new Map}ensure(e){if(this.sets.has(e))return this.sets.get(e);let t=ih.get(e);if(!t)return null;let n=VM[e]?.big?Math.ceil(this.cap/3):e==="grass-clump"||e==="sunflower"?this.cap*6:e==="guard-rail"?160:this.cap,s=t.parts.map(a=>{let o=new Un(a.geometry,a.material,n);return o.userData.shared=!0,o.castShadow=e!=="grass-clump"&&e!=="sunflower",o.receiveShadow=!0,o.frustumCulled=!1,o.count=0,this.scene.add(o),{im:o,local:a.local}}),r={t,meshes:s,cap:n,n:0};return this.sets.set(e,r),r}begin(){for(let e of this.sets.values())e.n=0}add(e,t,n,s,r,a=0){let o=this.ensure(e);if(!o||o.n>=o.cap)return!1;let l=r/o.t.size.y;pg.setFromAxisAngle(XM,a),mg.set(t,n,s),gg.set(l,l,l),bg.compose(mg,pg,gg);for(let c of o.meshes)xg.multiplyMatrices(bg,c.local),c.im.setMatrixAt(o.n,xg);return o.n++,!0}end(){for(let e of this.sets.values())for(let t of e.meshes)t.im.count=e.n,t.im.instanceMatrix.needsUpdate=!0,t.im.computeBoundingSphere?.()}},pg=new Ot,XM=new I(0,1,0),mg=new I,gg=new I,bg=new He,xg=new He;var wg={village:{sky:"village",u:.595,v:.234,horizon:12897494,fogD:.0028,sun:16773336,sunI:3.2,hemiS:13624575,hemiG:5925690,hemiI:.5,env:.9,exposure:1,ground:"leafy_grass",groundTint:15134928,hills:{near:18,far:90},bloom:0},forest:{sky:"forest",u:.596,v:.445,horizon:14081504,fogD:.0034,sun:16765600,sunI:2.8,hemiS:16769732,hemiG:3096608,hemiI:.5,env:.85,exposure:1,ground:"forest_floor",groundTint:16777215,hills:{near:26,far:140},bloom:0},desert:{sky:"desert",u:.6,v:.45,horizon:14279396,fogD:.0026,sun:16773596,sunI:3.6,hemiS:16773336,hemiG:12094032,hemiI:.5,env:.9,exposure:.95,ground:"aerial_sand",groundTint:15981748,hills:{near:10,far:70,dunes:!0},bloom:0},snow:{sky:"snow",u:.582,v:.372,horizon:14343392,fogD:.0042,sun:15660287,sunI:2,hemiS:15134719,hemiG:12109008,hemiI:.6,env:1,exposure:1,ground:"snow_02",groundTint:16777215,hills:{near:30,far:240},bloom:0},city:{sky:"city",night:!0,u:.599,v:.406,horizon:1712688,fogD:.005,sun:10466559,sunI:.6,hemiS:2767472,hemiG:1052696,hemiI:.45,env:.5,exposure:1.05,ground:"grass_path_2",groundTint:8030842,hills:{near:0,far:0},bloom:.8}},Od=new Map,jM=new Ls;function Xs(i,e){if(Od.has(i))return Od.get(i);let t=new Promise(n=>jM.load(Jr(i),s=>{e&&(s.colorSpace=ht),n(s)},void 0,()=>n(null)));return Od.set(i,t),t}var Eg={};async function Ag(i){let e=wg[i],[t,n,s,r,a,o,l]=await Promise.all([Xs(`sky/${e.sky}.jpg`,!0),Xs(`tex/${e.ground}_diff.jpg`,!0),Xs(`tex/${e.ground}_nor_gl.jpg`),Xs(`tex/${e.ground}_rough.jpg`),Xs("tex/asphalt_02_diff.jpg",!0),Xs("tex/asphalt_02_nor_gl.jpg"),Xs("tex/asphalt_02_rough.jpg")]);Eg[i]={sky:t,gd:n,gn:s,gr:r,ad:a,an:o,ar:l},await yg([..._g[i],...vg])}var rh=1200;function Sg(i,e,t,n){let s=Math.abs(e);if(!i||!i.near&&!i.far)return 0;let r=u=>2*Math.PI*u/rh,a=e>0?1.7:.6,o=.5+.25*Math.sin(r(3)*t+a+n)+.15*Math.sin(r(7)*t+e*.021)+.1*Math.sin(r(13)*t+e*.05+n*2),l=.55+.3*Math.sin(r(2)*t+a*2+n)+.15*Math.sin(r(5)*t+e*.008),c=(u,d,f)=>{let g=Math.min(1,Math.max(0,(f-u)/(d-u)));return g*g*(3-2*g)},h=i.near*c(16,90,s)*o+i.far*c(120,420,s)*l;return i.dunes&&(h+=2.2*c(14,40,s)*(Math.sin(e*.09+r(17)*t)*.5+.5)*Math.sin(r(23)*t+e*.03)),h}function KM(i,e){let s=document.createElement("canvas");s.width=512,s.height=1024;let r=s.getContext("2d"),a=512/(bi.halfWidth*2),o=p=>(p+bi.halfWidth)*a,l=512/3,c=l,h=(p,x)=>{for(let y=0;y<1024;y+=c)for(let _=0;_<512;_+=l)x.drawImage(p,_,y,l,c)};i.ad?.image?h(i.ad.image,r):(r.fillStyle="#3a3b3e",r.fillRect(0,0,512,1024)),r.fillStyle=e==="city"?"rgba(10,12,16,0.35)":"rgba(30,30,32,0.18)",r.fillRect(0,0,512,1024);for(let p of[-3.4,0,3.4]){let x=r.createLinearGradient(o(p-1.1),0,o(p+1.1),0);x.addColorStop(0,"rgba(0,0,0,0)"),x.addColorStop(.3,"rgba(0,0,0,0.16)"),x.addColorStop(.5,"rgba(0,0,0,0.02)"),x.addColorStop(.7,"rgba(0,0,0,0.16)"),x.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=x,r.fillRect(o(p-1.1),0,2.2*a,1024)}let u=(p,x,y,_,S="#f1f1ee")=>{r.fillStyle=S,r.globalAlpha=.93,r.fillRect(o(p),y,(x-p)*a,_-y),r.globalAlpha=1};for(let p of[-5.2,5.05])u(p,p+.15,0,1024);for(let p of[-1.7,1.7])u(p-.07,p+.07,0,1024*.25),u(p-.07,p+.07,1024*.5,1024*.75);let d={desert:"#b08c5c",snow:"#e9eef5",city:"#6b6e74",forest:"#5a4a35",village:"#6f6247"}[e];r.fillStyle=d,r.fillRect(0,0,o(-5.75),1024),r.fillRect(o(5.75),0,512-o(5.75),1024);let f=new Gt(s);f.colorSpace=ht;let g=p=>{if(!p?.image)return null;let x=document.createElement("canvas");return x.width=512,x.height=1024,h(p.image,x.getContext("2d")),new Gt(x)},v=g(i.an),m=g(i.ar);for(let p of[f,v,m])p&&(p.wrapS=p.wrapT=hn,p.anisotropy=8);return{map:f,normal:v,rough:m}}var Tg={village:[["warn","\u{1F404}"],["warn","\u{1F6B8}"],["warn","\u{1F69C}"],["warn","\u{1F411}"],["limit","50"],["dir","K\xF6y Meydan\u0131|2 km"],["name","YE\u015E\u0130L K\xD6Y"]],forest:[["warn","\u{1F98C}"],["warn","\u{1F43B}"],["warn","\u{1F332}"],["limit","70"],["dir","\u015Eelale|5 km"],["name","\xC7AM ORMANI"]],desert:[["warn","\u{1F42A}"],["warn","\u2600\uFE0F"],["warn","\u{1F982}"],["limit","90"],["dir","Vaha|12 km"],["name","KIZGIN \xC7\xD6L"]],snow:[["warn","\u2744\uFE0F"],["warn","\u26F7\uFE0F"],["warn","\u{1F98C}"],["limit","40"],["dir","Kayak Merkezi|3 km"],["name","KARLI DA\u011E"]],city:[["warn","\u{1F6A6}"],["warn","\u{1F6B8}"],["warn","\u{1F6B2}"],["limit","60"],["dir","\u015Eehir Merkezi|1 km"],["name","GECE \u015EEHR\u0130"]]};function JM(i,e,t){let n=new Xt(i,e,t);n.translate(0,e/2,0);let s=n.attributes.uv,r=n.attributes.normal;for(let a=0;a<s.count;a++){let o=Math.abs(r.getX(a)),l=Math.abs(r.getY(a));s.setXY(a,s.getX(a)*(o>.5?t:i)/9,s.getY(a)*(l>.5?t:e)/18)}return n}var ah=class{constructor(e,t,n=1){this.engine=e,this.theme=t,this.T=wg[t],this.seed=n;let s=this.T,r=Eg[t]||{},a=e.quality,o=this.scene=new ei;o.fog=new Ea(s.horizon,s.fogD);let l=(.5-s.v)*Math.PI,c=(s.u-.5)*Math.PI*2,h=Math.atan2(-.35,-.94);this.skyRot=c-h;let u=s.night?.9:Math.max(l,In.degToRad(28));if(this.sunDir=new I(Math.cos(u)*Math.cos(h),Math.sin(u),Math.cos(u)*Math.sin(h)).normalize(),r.sky){r.sky.mapping=Br,o.background=r.sky,o.backgroundRotation.set(0,this.skyRot,0);let p=new cs(e.renderer);this.envRT=p.fromEquirectangular(r.sky),o.environment=this.envRT.texture,o.environmentRotation.set(0,this.skyRot,0),o.environmentIntensity=s.env,p.dispose()}else o.background=new Te(s.horizon);this.hemi=new Ns(s.hemiS,s.hemiG,s.hemiI),o.add(this.hemi);let d=this.sun=new hi(s.sun,s.sunI);if(d.castShadow=a.shadows>0,d.castShadow){d.shadow.mapSize.set(a.shadows,a.shadows);let p=d.shadow.camera;p.left=-40,p.right=40,p.top=60,p.bottom=-40,p.near=1,p.far=220,d.shadow.bias=-4e-4,d.shadow.normalBias=.04}o.add(d),o.add(d.target),this.buildTerrain(r);let f=KM(r,t),g=600;for(let p of[f.map,f.normal,f.rough])p&&p.repeat.set(1,g/bi.texLen);let v=this.road=new Be(new jt(bi.halfWidth*2,g),new mt({map:f.map,normalMap:f.normal,roughnessMap:f.rough,normalScale:new Z(.9,.9),roughness:t==="city"?.55:1,metalness:t==="city"?.1:0}));v.rotation.x=-Math.PI/2,v.position.y=.01,v.receiveShadow=!0,o.add(v),this.roadLen=g;let m=new mt({color:t==="snow"?14673646:12170926,roughness:.8});this.curbs=[-1,1].map(p=>{let x=new Be(new Xt(.35,.16,g),m);return x.position.set(p*(bi.halfWidth+.1),.06,0),x.receiveShadow=!0,o.add(x),x}),this.props=new nh(o,Math.round(70*a.props)),this.buildSigns(),t==="city"&&this.buildCityBlocks(),this.chunks=new Map,this.chunkLen=40,this.lastKey="",s.night&&this.buildLampGlow()}buildTerrain(e){let t=this.T,n=1e3,s=rh*2,r=100,a=240,o=new jt(n,s,r,a);o.rotateX(-Math.PI/2);let l=o.attributes.position,c=o.attributes.uv;for(let u=0;u<l.count;u++){let d=l.getX(u),f=l.getZ(u),g=Math.abs(d);g<100&&(d=Math.sign(d)*(g*g/100)),l.setX(u,d),l.setY(u,Sg(t.hills,d,f,this.seed%7)-.04),c.setXY(u,d/9,f/9)}o.computeVertexNormals();let h=new mt({map:e.gd||null,normalMap:e.gn||null,roughnessMap:e.gr||null,color:e.gd?t.groundTint:7178826,roughness:1,normalScale:new Z(1.2,1.2)});for(let u of[e.gd,e.gn,e.gr])u&&(u.wrapS=u.wrapT=hn,u.anisotropy=8);this.terrain=new Be(o,h),this.terrain.receiveShadow=!0,this.scene.add(this.terrain)}heightAt(e,t){return Sg(this.T.hills,e,t,this.seed%7)}buildSigns(){let e=this.scene,t=this.theme;this.signDefs=Tg[t]||Tg.village,this.signInst=[];let n=new mt({color:9080984,metalness:.8,roughness:.35}),s=new rn(.05,.05,1,8);s.translate(0,.5,0),this.poles=new Un(s,n,60),this.poles.count=0,this.poles.castShadow=!0,this.poles.frustumCulled=!1,e.add(this.poles),this.signDefs.forEach(([r,a])=>{let o=fg(r,a),l=r==="name"||r==="dir",c=l?2.4:1.25,h=l?1.2:1.25,u=new jt(c,h);u.translate(0,h/2,0);let d=new mt({map:o,alphaTest:.5,roughness:.35,metalness:.1,side:on,emissive:16777215,emissiveMap:o,emissiveIntensity:t==="city"?.35:.06}),f=new Un(u,d,30);f.count=0,f.castShadow=!0,f.frustumCulled=!1,e.add(f),this.signInst.push(f)})}buildCityBlocks(){this.bVariants=[];for(let e=0;e<6;e++){let t=12+e%3*6,n=30+e*12,s=14,r=new mt({map:cg(30+e),emissiveMap:lg(50+e,.45),emissive:16777215,emissiveIntensity:1.7,roughness:.35,metalness:.4}),a=new Un(JM(t,n,s),r,60);a.count=0,a.frustumCulled=!1,this.scene.add(a),this.bVariants.push({w:t,h:n,d:s,im:a})}}buildLampGlow(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,2,32,32,32);n.addColorStop(0,"rgba(255,240,200,1)"),n.addColorStop(.3,"rgba(255,200,120,0.5)"),n.addColorStop(1,"rgba(255,180,90,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),this.glowGeo=new xt,this.glowGeo.setAttribute("position",new Ht(new Float32Array(600*3),3)),this.glow=new Rs(this.glowGeo,new rs({map:new Gt(e),size:3.2,transparent:!0,depthWrite:!1,blending:_n,fog:!0})),this.glow.frustumCulled=!1,this.scene.add(this.glow)}chunkProps(e){let t=gi(this.seed*31+e*977+13),n=this.theme,s=[],r=-e*this.chunkLen,a=this.chunkLen,o=this.engine.quality.props,l=m=>m[Math.floor(t()*m.length)],c=(m,p,x,y,_=t()*6.28)=>s.push({name:m,x:p,z:x,h:y,ry:_,y:this.heightAt(p,x)}),h=m=>{let p={"oak-tree":[7,10],"apple-tree":[4.5,6],"cypress-tree":[9,13],"olive-tree":[4,5.5],bush:[1.2,2],"pine-tree":[9,14],"spruce-tree":[10,16],"birch-tree":[9,12],"autumn-tree":[7,9],"snowy-pine-tree":[9,14],cactus:[3,5],"barrel-cactus":[1,1.4],"palm-tree":[8,11],"rocky-outcrop":[5,9],"boulder-rock-set":[1.6,3],"small-rock-set":[.6,1],"grass-clump":[.5,.9],sunflower:[1.6,2.1],"tree-stump":[.6,.8]}[m]||[1,1];return p[0]+t()*(p[1]-p[0])},u=()=>t()<.5?-1:1,d=(m,p)=>m+Math.pow(t(),1.4)*(p-m),f=(m,p,x,y)=>{for(let _=0;_<p;_++){let S=u(),w=l(m);c(w,S*d(x,y),r-t()*a,h(w))}},g=(m,p,x,y)=>{let _=u(),S=l(m);c(S,_*(p+t()*(x-p)),r-6-t()*(a-12),y??7,_>0?-Math.PI/2:Math.PI/2)},v=sh("guard-rail");if(v&&n!=="village"){let m=v.size,p=Math.max(m.x,m.z)*(.82/m.y),x=m.x>m.z;for(let y of[-1,1])for(let _=r;_>r-a;_-=p*.98)s.push({name:"guard-rail",x:y*6.75,z:_-p/2,h:.82,ry:x?Math.PI/2:0,y:0})}if(n==="village"){if(f(["grass-clump"],Math.round(26*o),7,18),f(["oak-tree","apple-tree","olive-tree","oak-tree","bush"],Math.round(9*o),11,90),t()<.6){let m=u(),p=m*(12+t()*3);for(let x=0;x<5;x++)c("cypress-tree",p,r-x*7-t()*2,h("cypress-tree"))}if(t()<.75&&g(["cottage-house","stone-house","farmhouse"],18,34,6.5+t()*1.5),t()<.25&&g(["barn","silo","windmill"],34,70,10+t()*3),t()<.35){let m=u(),p=m*(16+t()*10),x=r-8-t()*20;for(let y=0;y<7;y++)for(let _=0;_<4;_++)c("sunflower",p+m*_*1.4+(t()-.5)*.4,x-y*1.3,h("sunflower"),t()*.6-.3+(m>0?-1.2:1.2))}if(t()<.3){let m=u();c("cow",m*(14+t()*14),r-t()*a,1.55)}if(t()<.35){let m=u();c(l(["hay-bale","hay-bale","village-well"]),m*(12+t()*10),r-t()*a,t()<.7?1.5:3.2)}if(t()<.5){let m=u(),p=m*(8.6+t()*.4),x=r-t()*30;for(let y=0;y<4;y++)c("wooden-fence",p,x-y*2.6,1.15,0)}c("power-pole",9.6,r-20,9.5,0)}else if(n==="forest")f(["grass-clump"],Math.round(16*o),7,16),f(["pine-tree","spruce-tree","pine-tree","birch-tree","autumn-tree"],Math.round(22*o),9.5,85),f(["tree-stump","small-rock-set","boulder-rock-set","bush"],Math.round(5*o),8,30),t()<.12&&g(["log-cabin"],20,34,6.5);else if(n==="desert"){if(f(["cactus","barrel-cactus","cactus","small-rock-set"],Math.round(9*o),9,70),f(["rocky-outcrop","boulder-rock-set"],Math.round(3*o),18,110),t()<.12){let m=u(),p=m*(20+t()*25),x=r-t()*a;for(let y=0;y<4;y++)c("palm-tree",p+(t()-.5)*9,x+(t()-.5)*9,h("palm-tree"))}t()<.15&&g(["adobe-house"],18,36,6.5),e%2===0&&c("power-pole",-9.6,r-12,9.5,0)}else if(n==="snow"){if(f(["snowy-pine-tree"],Math.round(20*o),9.5,90),f(["boulder-rock-set"],Math.round(2*o),10,40),t()<.35&&g(["snowy-cabin","alpine-chalet"],18,34,7+t()*2),t()<.2){let m=u();c("snowman",m*(8.5+t()*4),r-t()*a,2,m>0?-1.2:1.2)}}else if(n==="city"){for(let m of[-1,1]){let p=r-t()*4;for(;p>r-a;){let x=l(["shop-front","corner-shop","apartment-building","shop-front"]),y=x==="apartment-building"?24:11+t()*2;c(x,m*(15+y*.18),p-7,y,m>0?-Math.PI/2:Math.PI/2),p-=16+t()*4}t()<.6&&c(l(["office-tower","high-rise-apartment","skyscraper"]),m*(40+t()*30),r-t()*a,40+t()*30,m>0?-Math.PI/2:Math.PI/2)}if(t()<.5){let m=u();c(l(["bus-stop-shelter","park-bench","fire-hydrant"]),m*8.4,r-t()*a,1,m>0?-Math.PI/2:Math.PI/2)}if(t()<.6){let m=u();c("oak-tree",m*(8.8+t()),r-t()*a,6+t()*2)}for(let m of[-1,1]){let p=Math.floor(t()*this.bVariants.length);s.push({block:p,x:m*(90+t()*60),z:r-t()*a,ry:Math.PI/2})}}if(n==="city"||n==="village"||n==="snow")for(let m of[-1,1]){let p=r-(m>0?4:24);c("street-light",m*7.3,p,7.2,m>0?Math.PI:0),s.push({glow:!0,x:m*5.9,y:7,z:p})}if(e%3===1||e%25===3){let m=this.signDefs.findIndex(_=>_[0]==="name"),p=e%25===3?m:Math.floor(t()*this.signDefs.length),x=e%25===3||t()<.75?1:-1,y=this.signDefs[p][0]==="name"||this.signDefs[p][0]==="dir";s.push({sign:p,x:x*7.9,z:r-30,big:y,ry:x>0?-.25:.25})}return s}rebuildInstances(e,t){for(let d=e;d<=t;d++)this.chunks.has(d)||this.chunks.set(d,this.chunkProps(d));for(let d of this.chunks.keys())(d<e-1||d>t+1)&&this.chunks.delete(d);let n=new He,s=new Ot,r=new I(0,1,0),a=new I,o=new I(1,1,1);this.props.begin();let l=this.signInst.map(()=>0),c=0,h=(this.bVariants||[]).map(()=>0),u=[];for(let d=e;d<=t;d++)for(let f of this.chunks.get(d)||[])if(f.name)this.props.add(f.name,f.x,f.y||0,f.z,f.h,f.ry);else if(f.glow)u.push(f.x,f.y,f.z);else if(f.sign!==void 0){let g=this.signInst[f.sign];if(l[f.sign]>=30)continue;s.setFromAxisAngle(r,f.ry),a.set(f.x+(f.big?.45:0),f.big?2:2.1,f.z+.05),n.compose(a,s,o),g.setMatrixAt(l[f.sign]++,n);for(let v of f.big?[0,.9]:[0]){if(c>=60)break;a.set(f.x+v,0,f.z),n.compose(a,s,new I(1,f.big?2.2:2.3,1)),this.poles.setMatrixAt(c++,n)}}else if(f.block!==void 0){let g=this.bVariants[f.block];if(h[f.block]>=60)continue;s.setFromAxisAngle(r,f.ry),a.set(f.x,0,f.z),n.compose(a,s,o),g.im.setMatrixAt(h[f.block]++,n)}if(this.props.end(),this.signInst.forEach((d,f)=>{d.count=l[f],d.instanceMatrix.needsUpdate=!0}),this.poles.count=c,this.poles.instanceMatrix.needsUpdate=!0,(this.bVariants||[]).forEach((d,f)=>{d.im.count=h[f],d.im.instanceMatrix.needsUpdate=!0}),this.glow){let d=this.glowGeo.attributes.position;d.array.fill(0),d.array.set(u.slice(0,1800)),d.needsUpdate=!0,this.glowGeo.setDrawRange(0,Math.min(600,u.length/3))}}update(e,t,n){this.terrain.position.z=Math.round(e/rh)*rh,this.road.position.z=Math.round(e/12)*12-this.roadLen/2+120;for(let h of this.curbs)h.position.z=this.road.position.z;let s=this.sun;s.target.position.set(0,0,e-22),s.position.copy(s.target.position).addScaledVector(this.sunDir,120);let r=Math.floor(-e/this.chunkLen),a=this.engine.quality.range,o=r-1,l=r+Math.ceil(a/this.chunkLen),c=o+":"+l;c!==this.lastKey&&(this.lastKey=c,this.rebuildInstances(o,l))}dispose(){this.envRT?.dispose(),this.scene.traverse(e=>{if(e.isInstancedMesh&&e.dispose(),e.isInstancedMesh&&!e.userData.shared||e===this.glow){let t=e.material;if(t&&!t.userData?.shared)for(let n of["map","emissiveMap"])t[n]&&!t[n].userData?.shared&&t[n].dispose()}}),this.glowGeo?.dispose(),this.poles?.geometry.dispose(),this.terrain.geometry.dispose(),this.road.material.map?.dispose(),this.road.material.normalMap?.dispose(),this.road.material.roughnessMap?.dispose()}};var YM=bi.lanes,ea={barrier:{hw:1.4,hl:.3,h:1.05},cones:{hw:1.3,hl:.4,h:.8},hay:{hw:1.4,hl:.8,h:1.45},logs:{hw:1.5,hl:.6,h:.95},rocks:{hw:1.3,hl:1,h:1.35},snowman:{hw:.8,hl:.8,h:2.1},jersey:{hw:1.5,hl:.5,h:.95}},Rg={village:["barrier","cones","hay"],forest:["stumps","cones","cbarrier","barrels"],desert:["rocks","barrier","barrels"],snow:["snowman","cones","cbarrier"],city:["jersey","cones","barrels","cbarrier"]};ea.stumps={hw:1.4,hl:.6,h:.9};ea.barrels={hw:1.3,hl:.5,h:1.05};ea.cbarrier={hw:1.4,hl:.4,h:1.1};var ZM={barrier:["road-barrier",1,1.05,2.9],cones:["traffic-cone",3,.75],hay:["hay-bale",2,1.45,1.45],stumps:["tree-stump",2,.85,1.3],barrels:["traffic-barrel",2,1.05],cbarrier:["construction-barrier",1,1.1,2.9],rocks:["boulder-rock-set",1,1.35,2.7],snowman:["snowman",1,2.1],jersey:["jersey-barrier",1,.95,3],logs:["tree-stump",2,.85,1.3]};function $M(i){let e=ZM[i];if(!e||!sh(e[0]))return null;let[t,n,s,r]=e,a=new vt;for(let o=0;o<n;o++){let l=Mg(t,{h:s,w:r});if(!l)return null;l.position.x=n===1?0:(o-(n-1)/2)*(2.6/n)*1.1,l.rotation.y=o*1.3%.6-.3+((t==="road-barrier"||t==="construction-barrier"||t==="jersey-barrier")&&l.userData.size.z>l.userData.size.x?Math.PI/2:0),a.add(l)}return a.userData=ea[i],a}var Qr=null;function lh(){if(Qr)return Qr;let i=document.createElement("canvas");i.width=256,i.height=64;let e=i.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,256,64),e.fillStyle="#d50000";for(let d=-2;d<10;d++)e.beginPath(),e.moveTo(d*32,64),e.lineTo(d*32+16,64),e.lineTo(d*32+48,0),e.lineTo(d*32+32,0),e.fill();let t=new Gt(i);t.colorSpace=ht;let n=document.createElement("canvas");n.width=64,n.height=256;let s=n.getContext("2d");s.fillStyle="#ffcc00",s.fillRect(0,0,64,256),s.fillStyle="#111";for(let d=0;d<256;d+=64)s.beginPath(),s.moveTo(0,d+40),s.lineTo(32,d+10),s.lineTo(64,d+40),s.lineTo(64,d+58),s.lineTo(32,d+28),s.lineTo(0,d+58),s.fill();let r=new Gt(n);r.colorSpace=ht,r.wrapS=r.wrapT=hn;let a=new as;for(let d=0;d<10;d++){let f=d/10*Math.PI*2+Math.PI/2,g=d%2?.24:.55,v=Math.cos(f)*g,m=Math.sin(f)*g;d?a.lineTo(v,m):a.moveTo(v,m)}let o=new Ps(a,{depth:.12,bevelEnabled:!0,bevelThickness:.08,bevelSize:.06,bevelSegments:3});o.center();let l=new as([new Z(0,0),new Z(7,0),new Z(7,1.3)]),c=new Ps(l,{depth:3,bevelEnabled:!1});c.translate(0,0,-1.5),c.rotateY(Math.PI/2);let h=new Di(.28,.75,16);h.translate(0,.375,0);let u=d=>new mt(d);return Qr={stripeMat:u({map:t,roughness:.5}),metal:u({color:9080985,metalness:.8,roughness:.4}),cone:u({color:16734720,roughness:.55}),coneBand:u({color:15921906,roughness:.4}),coneGeo:h,hay:u({color:14201948,roughness:1}),wood:u({color:8017204,roughness:.9}),woodEnd:u({color:13214571,roughness:.9}),rock:u({color:9202252,roughness:.95,flatShading:!0}),snow:u({color:16777215,roughness:.55}),coal:u({color:1118481}),carrot:u({color:16742912}),concrete:u({color:12105392,roughness:.9}),gold:u({color:16761370,metalness:1,roughness:.2,emissive:8014336,emissiveIntensity:.55}),starGeo:o,diamond:new Mt({color:8319231,metalness:.05,roughness:.02,emissive:761028,emissiveIntensity:.9,clearcoat:1,iridescence:.8,flatShading:!0}),diamondGeo:new Pr(.5,0).scale(.8,1.15,.8),rampTop:u({map:r,roughness:.5}),rampSide:u({color:2895667,metalness:.7,roughness:.5}),rampGeo:c,glow:new Rt({color:16777215,transparent:!0,opacity:.35,blending:_n,depthWrite:!1}),checker:dg()},Qr}function gt(i,e,t=0,n=0,s=0,r=!0){let a=new Be(i,e);return a.position.set(t,n,s),a.castShadow=r,a.receiveShadow=!0,a}function QM(i,e){let t=$M(i);if(t)return t;let n=new vt,s=lh();switch(i){case"barrier":{n.add(gt(new Xt(2.8,.42,.12),s.stripeMat,0,.78));for(let a of[-1.15,1.15])n.add(gt(new Xt(.08,1,.08),s.metal,a,.5)),n.add(gt(new Xt(.08,.06,.7),s.metal,a,.03));let r=gt(new kn(.09,10,8),new mt({color:16748800,emissive:16739584,emissiveIntensity:3}),-1.15,1.05,0,!1);n.add(r);break}case"cones":for(let r of[-1,0,1])n.add(gt(s.coneGeo,s.cone,r,0)),n.add(gt(new rn(.17,.2,.14,16),s.coneBand,r,.42,0,!1)),n.add(gt(new Xt(.6,.05,.6),s.cone,r,.025));break;case"hay":{let r=new rn(.7,.7,1.3,20);r.rotateZ(Math.PI/2),n.add(gt(r,s.hay,-.7,.7)),n.add(gt(r,s.hay,.7,.7));break}case"logs":{let r=new rn(.3,.3,3,14);r.rotateZ(Math.PI/2);for(let[a,o]of[[.3,-.32],[.3,.32],[.82,0]])n.add(gt(r,[s.wood,s.woodEnd,s.woodEnd],0,a,o));break}case"rocks":{for(let r=0;r<3;r++){let a=gt(new ka(.6+e()*.3,0),s.rock,-.9+r*.9,.5,(e()-.5)*.8);a.rotation.set(e()*3,e()*3,0),n.add(a)}break}case"snowman":{n.add(gt(new kn(.65,20,14),s.snow,0,.6)),n.add(gt(new kn(.46,20,14),s.snow,0,1.4)),n.add(gt(new kn(.32,20,14),s.snow,0,1.95));let r=gt(new Di(.06,.35,8),s.carrot,0,1.95,.4,!1);r.rotation.x=Math.PI/2,n.add(r);for(let a of[-.11,.11])n.add(gt(new kn(.04,8,6),s.coal,a,2.05,.28,!1));n.add(gt(new rn(.22,.22,.32,16),s.coal,0,2.35,0)),n.add(gt(new rn(.34,.34,.04,16),s.coal,0,2.2,0));break}case"jersey":{let r=new as([new Z(-.3,0),new Z(.3,0),new Z(.12,.3),new Z(.09,.95),new Z(-.09,.95),new Z(-.12,.3)]),a=new Ps(r,{depth:1.45,bevelEnabled:!1});a.rotateY(Math.PI/2);for(let o of[-1.48,.03])n.add(gt(a,s.concrete,o,0));n.add(gt(new Xt(2.9,.12,.2),s.stripeMat,0,.75,0,!1));break}}return n.userData=ea[i],n}function eS(i){let e=lh(),t=new vt;if(i==="star"){let n=gt(e.starGeo,e.gold,0,0,0,!0);t.add(n)}else if(i==="diamond")t.add(gt(e.diamondGeo,e.diamond,0,0,0,!0));else{let n=i==="magnet"?16717636:i==="nitro"?2718207:58879,s=new Mt({color:n,metalness:.3,roughness:.2,clearcoat:1,emissive:n,emissiveIntensity:.35});if(i==="magnet"){let a=gt(new Is(.42,.14,12,24,Math.PI),s);a.rotation.z=Math.PI,t.add(a);for(let o of[-.42,.42])t.add(gt(new rn(.14,.14,.24,12),Qr.metal,o,.12))}else if(i==="nitro")t.add(gt(new rn(.3,.3,.9,20),s)),t.add(gt(new rn(.12,.18,.25,12),Qr.metal,0,.55));else{let a=new Mt({color:8445674,transparent:!0,opacity:.35,roughness:0,clearcoat:1,emissive:48340,emissiveIntensity:.5});t.add(gt(new kn(.6,24,16),a,0,0,0,!1)),t.add(gt(new Pr(.28),s))}let r=new Be(new ja(.7,.95,32),new Rt({color:n,transparent:!0,opacity:.5,blending:_n,depthWrite:!1,side:on}));r.rotation.x=-Math.PI/2,r.position.y=-1.15,t.add(r)}return t}function tS(){let i=lh(),e=new Be(i.rampGeo,[i.rampSide,i.rampTop]);return e.castShadow=!0,e.receiveShadow=!0,e}function nS(){let i=lh(),e=new vt,t=i.checker.clone();t.needsUpdate=!0,t.wrapS=t.wrapT=hn,t.repeat.set(1,1);let n=new Be(new jt(12,2),new mt({map:t,roughness:.6}));n.rotation.x=-Math.PI/2,n.position.y=.02,n.receiveShadow=!0,e.add(n);let s=new mt({color:15658734,metalness:.6,roughness:.3});for(let a of[-7.2,7.2])e.add(gt(new rn(.25,.3,7,16),s,a,3.5));let r=i.checker.clone();r.needsUpdate=!0,r.wrapS=hn,r.repeat.set(2,1),e.add(gt(new Xt(15,1.4,.3),new mt({map:r,roughness:.5,emissive:2236962}),0,6.6));for(let a=0;a<8;a++){let o=gt(new kn(.25,12,8),new mt({color:[16717636,16771584,58998,2718207][a%4],emissive:[16717636,16771584,58998,2718207][a%4],emissiveIntensity:.6}),-6+a*1.7,5.7,0,!1);e.add(o)}return e}function kd(i){let e=gi(i.n*31+7),t=$m.filter(s=>s!=="compact-car"),n=["compact-car"];for(;n.length<4;){let s=t.splice(Math.floor(e()*t.length),1)[0];n.push(s)}return n}function iS(i,e){let t=kd(i),n=t.filter(p=>Qm.includes(p)),s=gi(e),r=[],a=i.length,o=(i.n-1)/19,l=90,c=[0,1,2],h=new Set,u=-999,d=0,f=Rg[i.theme]||Rg.village,g=p=>p[Math.floor(s()*p.length)],v=(p,x,y,_)=>{for(let S=x;S<y;S+=3.4)r.push({kind:"star",lane:p,z:S,y:_?_(S):1}),d++},m=p=>c.some(x=>Math.abs(x-p)<=1);for(;l<a-80;){let p=(46-o*18)*(.85+s()*.4)*(i.speed/26),x=s(),y=[0,1,2],_=new Set;if(x<.11+o*.05&&l-u>160){let b=[0,1,2].filter(m),M=g(b);r.push({kind:"ramp",lane:M,z:l,len:7,h:1.3});let P=l+7+13;r.push({kind:"traffic",lane:M,z:P,speed:0,ttype:g(n),color:"orig"});let A=i.speed+2;for(let C=1;C<=6;C++){let N=C*.1;r.push({kind:C===3||C===4?"diamond":"star",lane:M,z:l+7+A*N,y:1.3+11*N-15*N*N+.9}),C===3||C===4||d++}if(y=[0,1,2].filter(C=>C!==M),u=l,s()<.5){let C=g(y.filter(N=>!h.has(N)));C!==void 0&&y.length>1&&(r.push({kind:"obst",type:"barrier",lane:C,z:P}),y=y.filter(N=>N!==C))}l+=50,c=y.length?y:[M],h=new Set;continue}if(x<.11+i.density){let b=s()<.3+o*.4,M=[0,1,2].filter(m),P=g(M),A=[0,1,2].filter(C=>C!==P);b||(A=[g(A)]);for(let C of A)if(!h.has(C)){if(s()<i.traffic)r.push({kind:"traffic",lane:C,z:l,speed:4+s()*5,ttype:g(t),color:"orig"}),_.add(C);else{let N=g(f);if(r.push({kind:"obst",type:N,lane:C,z:l}),ea[N].h<=1.1&&s()<.35)for(let O=-1;O<=1;O++)r.push({kind:"star",lane:C,z:l+O*2.6,y:2.1-Math.abs(O)*.4}),d++}y=y.filter(N=>N!==C)}}let S=g(y);s()<.85&&v(S,l+8,l+p-8);let w=y.filter(b=>b!==S);s()<.075+o*.02?r.push({kind:"diamond",lane:w.length?g(w):S,z:l+p*.5,y:1.1}):s()<.07&&r.push({kind:g(["magnet","nitro","shield","magnet","nitro"]),lane:w.length?g(w):S,z:l+p*.55,y:1.3}),c=y,h=_,l+=p}v(1,a-70,a-10),r.push({kind:"finish",lane:1,z:a}),r.sort((p,x)=>p.z-x.z);for(let p of r)p.x=YM[p.lane];return{ents:r,totalStars:d}}var oh=class{constructor(e,t,n){this.scene=e,this.level=t;let s=iS(t,n);this.ents=s.ents,this.totalStars=s.totalStars,this.pools=new Map,this.next=0,this.active=[],this.r=gi(n+5)}acquire(e,t){let n=this.pools.get(e);if(n&&n.length){let s=n.pop();return s.visible=!0,s}return t()}release(e,t){t.visible=!1,this.pools.has(e)||this.pools.set(e,[]),this.pools.get(e).push(t)}spawn(e){let t,n;switch(e.kind){case"obst":t="o:"+e.type,n=this.acquire(t,()=>QM(e.type,this.r)),Object.assign(e,n.userData);break;case"traffic":t="t:"+e.ttype+e.color,n=this.acquire(t,()=>Ws(e.ttype,e.color,{lite:!0})),e.hw=n.userData.halfW,e.hl=n.userData.halfL,e.h=n.userData.height+.15;break;case"ramp":t="ramp",n=this.acquire(t,tS);break;case"finish":t="finish",n=this.acquire(t,nS);break;default:t=e.kind,n=this.acquire(t,()=>eS(e.kind))}n.rotation.set(0,0,0),n.scale.setScalar(1),n.position.set(e.x,e.y||0,-e.z),n.parent||this.scene.add(n),e.obj=n,e.key=t,e.alive=!0,e.active=!1,e.fly=null,e.collectT=0,this.active.push(e)}despawn(e){e.obj&&this.release(e.key,e.obj),e.obj=null}update(e,t,n){for(;this.next<this.ents.length&&this.ents[this.next].z<e+280;)this.spawn(this.ents[this.next++]);for(let s=this.active.length-1;s>=0;s--){let r=this.active[s],a=r.obj;r.kind==="traffic"&&r.speed>0&&r.alive&&(!r.active&&r.z-e<95&&(r.active=!0),r.active&&(r.z+=r.speed*t)),r.fly?(r.fly.vy-=25*t,a.position.x+=r.fly.vx*t,a.position.y=Math.max(0,a.position.y+r.fly.vy*t),a.position.z-=r.fly.vz*t,a.rotation.x+=r.fly.rx*t,a.rotation.z+=r.fly.rz*t):r.collectT>0?(r.collectT+=t,a.scale.setScalar(1+r.collectT*3),a.position.y+=t*6,r.collectT>.18&&(a.visible=!1)):(a.position.z=-r.z,r.magnet&&(a.position.x+=(r.magnet.x-a.position.x)*Math.min(1,t*12),a.position.y+=(r.magnet.y+1-a.position.y)*Math.min(1,t*12)),r.kind==="star"?a.rotation.y=n*3+r.z:r.kind==="diamond"?(a.rotation.y=n*2,a.position.y=r.y+Math.sin(n*3+r.z)*.15):["magnet","nitro","shield"].includes(r.kind)&&(a.rotation.y=n*2,a.position.y=r.y+Math.sin(n*3)*.15),r.kind==="traffic"&&So(a,r.z)),(r.z<e-25||r.fly&&r.fly.t!==void 0&&(r.fly.t+=t)>2.5)&&(this.despawn(r),this.active.splice(s,1))}}dispose(){for(let e of this.active)this.despawn(e);for(let e of this.pools.values())for(let t of e)this.scene.remove(t)}};var It=null,xi,js,Lg=!0,Ks={},sS=["eng_idle.wav","eng_low.wav","eng_mid.wav","eng_high.wav","road.wav","shift.wav","nitro2.wav","crash2.wav","coin2.wav","bump","diamond","powerup","jump","land","horn","countdown","go","win","lose","tires"];function Js(){if(It){It.state==="suspended"&&It.resume();return}try{It=new(window.AudioContext||window.webkitAudioContext)}catch{return}xi=It.createGain(),xi.gain.value=Lg?.8:0,xi.connect(It.destination);for(let i of sS){let e=i.includes(".")?i:i+".mp3",t=i.replace(/\.\w+$/,"");fetch(Jr(`sfx/${e}`)).then(n=>n.arrayBuffer()).then(n=>new Promise((s,r)=>It.decodeAudioData(n,s,r))).then(n=>{Ks[t]=n}).catch(()=>{})}js=It.createDynamicsCompressor(),js.threshold.value=-14,js.ratio.value=4,js.attack.value=.005,js.release.value=.2,xi.disconnect(),xi.connect(js),js.connect(It.destination)}function zd(i){Lg=i,xi&&(xi.gain.value=i?.8:0)}function yn(i,e=1,t=1){if(!It||!Ks[i])return!1;let n=It.createBufferSource(),s=It.createGain();return n.buffer=Ks[i],n.playbackRate.value=t,s.gain.value=e,n.connect(s),s.connect(xi),n.start(),!0}function Hn(i,e,t="sine",n=.3,s=0,r=0){if(!It)return;let a=It.currentTime+r,o=It.createOscillator(),l=It.createGain();o.type=t,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(i*s,a+e),l.gain.setValueAtTime(n,a),l.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(l),l.connect(xi),o.start(a),o.stop(a+e+.05)}var Cg=0,ct={star:()=>{let i=performance.now();i-Cg<45||(Cg=i,yn("coin2",.32,.97+Math.random()*.08)||Hn(1300,.12,"sine",.15,1.5))},diamond:()=>yn("diamond",.8)||Hn(1320,.25,"triangle",.2),power:()=>yn("powerup",.7)||Hn(400,.3,"square",.12,3),crash:()=>yn("crash2",.85)||Hn(90,.4,"sawtooth",.25,.5),bump:()=>yn("bump",.7)||Hn(120,.2,"square",.2),jump:()=>yn("jump",.7)||Hn(300,.25,"triangle",.15,2.2),land:()=>yn("land",.7),nitro:()=>yn("nitro2",.8)||Hn(200,.6,"sawtooth",.12,3),beep:i=>(i?yn("go",.8):yn("countdown",.7))||Hn(i?1046:523,.3,"square",.15),click:()=>Hn(700,.04,"square",.05),win:()=>yn("win",.8)||[523,659,784,1046].forEach((i,e)=>Hn(i,.3,"triangle",.2,1,e*.12)),lose:()=>yn("lose",.8)||[392,330,262].forEach((i,e)=>Hn(i,.35,"triangle",.2,1,e*.15)),buy:()=>yn("powerup",.6)||Hn(990,.2,"square",.12),horn:()=>yn("horn",.9)||Hn(440,.3,"square",.2),tires:()=>yn("tires",.25,.9+Math.random()*.2)},Pg=[["eng_idle",900],["eng_low",2500],["eng_mid",4500],["eng_high",6800]],wo=[9,15,22,30,40,70],rt=null,Bd=!1;function Ig(i){let e=It.createBufferSource(),t=It.createGain();return e.buffer=Ks[i],e.loop=!0,t.gain.value=0,e.connect(t),t.connect(rt.bus),e.start(0,Math.random()*Ks[i].duration),{s:e,g:t}}function Hd(){if(!(!It||rt)){if(Bd=!0,!Pg.every(([i])=>Ks[i])){setTimeout(()=>{!rt&&Bd&&Hd()},400);return}rt={bus:It.createGain(),lp:It.createBiquadFilter(),gear:0,rpm:900,lastV:0,lastT:It.currentTime,dip:0},rt.lp.type="lowpass",rt.lp.frequency.value=5200,rt.bus.gain.value=.9,rt.bus.connect(rt.lp),rt.lp.connect(xi),rt.layers=Pg.map(([i,e])=>({...Ig(i),rpm:e})),rt.road=Ks.road?Ig("road"):null}}function Dg(i,e){if(!rt)return;let t=It.currentTime,n=Math.max(.001,t-rt.lastT);rt.lastT=t;let s=Math.max(0,i),r=(s-rt.lastV)/n;rt.lastV=s;let a=rt.gear;for(;a<wo.length-1&&s>wo[a];)a++;for(;a>0&&s<wo[a-1]*.8;)a--;a>rt.gear&&s>6&&(yn("shift",.35,.95+Math.random()*.1),rt.dip=.12),rt.gear=a;let o=a?wo[a-1]*.8:0,l=wo[a],c=1e3+Math.min(1,Math.max(0,(s-o)/(l-o)))*5600;s<1&&(c=900),e&&(c=Math.min(7e3,c+600)),rt.rpm+=(c-rt.rpm)*Math.min(1,n*7),rt.dip=Math.max(0,rt.dip-n);let h=rt.rpm,u=Math.min(1,Math.max(.25,.45+r*.08))+(e?.2:0),d=Math.log(h),f=rt.layers.map((v,m)=>{let p=Math.log(v.rpm);return Math.max(0,1-Math.abs(d-p)/.55)}),g=f.reduce((v,m)=>v+m,0)||1;rt.layers.forEach((v,m)=>{let p=f[m]/g,x=Math.min(1.45,Math.max(.7,h/v.rpm));v.g.gain.setTargetAtTime(Math.sqrt(p)*.42*u*(rt.dip>0?.55:1),t,.05),v.s.playbackRate.setTargetAtTime(x,t,.05)}),rt.lp.frequency.setTargetAtTime(2600+h*.6+(e?1500:0),t,.1),rt.road&&(rt.road.g.gain.setTargetAtTime(Math.min(.3,s/120),t,.15),rt.road.s.playbackRate.setTargetAtTime(.85+Math.min(.4,s/120),t,.15))}function Gd(){if(Bd=!1,!rt)return;let i=[...rt.layers,rt.road].filter(Boolean);for(let e of i)try{e.g.gain.setTargetAtTime(0,It.currentTime,.1),e.s.stop(It.currentTime+.5)}catch{}rt=null}var St=i=>document.getElementById(i),rS=30,ch=class{constructor(e,t){this.engine=e,this.o=t;let{level:n,carDef:s,color:r,stats:a}=t;this.level=n,this.stats=a,this.mp=!!t.mp,this.world=new ah(e,n.theme,t.seed),this.scene=this.world.scene,this.track=new oh(this.scene,n,t.seed),e.renderer.toneMapping=ks,e.renderer.toneMappingExposure=this.world.T.exposure,e.setBloom(this.world.T.bloom),this.camera=new Nt(62,e.aspect,.3,6e3),this.car=Ws(s.type,r,{finish:t.custom?.finish}),this.scene.add(this.car);try{$c(this.car,t.custom||{},t.upg||{})}catch(f){console.warn("mods",f)}if(this.world.T.night){let f=new Fs(16773590,60,70,.45,.6,1.2);f.position.set(0,.9,-this.car.userData.halfL),f.target.position.set(0,0,-this.car.userData.halfL-25),this.car.add(f),this.car.add(f.target)}this.halfW=this.car.userData.halfW,this.halfL=this.car.userData.halfL;let o=hg(),l=new Be(new jt(this.halfW*2.6,this.halfL*2.4),new Rt({map:o,transparent:!0,depthWrite:!1,opacity:.85}));l.rotation.x=-Math.PI/2,l.position.y=.02,this.scene.add(l),this.blob=l;let c=new Rt({color:4033535,transparent:!0,opacity:.75,blending:_n,depthWrite:!1});this.flames=[];for(let f of[-.35,.35]){let g=new Be(new Di(.13,1.1,12),c);g.rotation.x=Math.PI/2,g.position.set(f,.3,this.halfL+.65),g.visible=!1,this.car.add(g),this.flames.push(g)}let h=new Rt({color:16777215,transparent:!0,opacity:.9,blending:_n,depthWrite:!1});for(let f of[-.35,.35]){let g=new Be(new Di(.06,.55,10),h);g.rotation.x=Math.PI/2,g.position.set(f,.3,this.halfL+.4),g.visible=!1,this.car.add(g),this.flames.push(g)}this.bubble=new Be(new kn(1,32,20),new Mt({color:8445674,transparent:!0,opacity:.22,roughness:0,clearcoat:1,emissive:48340,emissiveIntensity:.4,depthWrite:!1})),this.bubble.scale.set(this.halfW*1.5,1.4,this.halfL*1.3),this.bubble.position.y=.8,this.bubble.visible=!1,this.car.add(this.bubble);let u=160,d=new Float32Array(u*6);if(this.windGeo=new xt,this.windGeo.setAttribute("position",new Ht(d,3)),this.wind=new As(this.windGeo,new ss({color:16777215,transparent:!0,opacity:0,blending:_n,depthWrite:!1})),this.wind.frustumCulled=!1,this.scene.add(this.wind),this.windP=Array.from({length:u},()=>this.newWind(!0)),this.state="countdown",this.cd=t.countdown??3.2,this.lastBeep=4,this.dist=0,this.speed=0,this.lane=1,this.prevLane=1,this.x=0,this.y=0,this.vy=0,this.onRamp=null,this.time=0,this.starsGot=0,this.diamondsGot=0,this.crashes=0,this.maxHearts=1+Math.floor(a.armor/2),this.hearts=this.maxHearts,this.nitro=.35,this.nitroT=0,this.magnetT=0,this.shieldT=0,this.invT=0,this.shake=0,this.endT=0,this.camPos=new I(0,4,9),this.camLook=new I,this.remotes=new Map,this.sendT=0,this.mp)for(let f of t.players||[])f.id!==t.myId&&this.addRemote(f);this.bindInput(),this.hudInit(),Hd()}newWind(e){return{x:(Math.random()-.5)*16,y:.5+Math.random()*5,z:-(e?Math.random()*60:60),l:1+Math.random()*3}}addRemote(e){let t=Ws(e.model||"hatchback",e.color||"orig",{lite:!0}),n=new Ca(new wr({map:ug(e.name,"#ffffff"),depthTest:!1,transparent:!0}));n.scale.set(2.8,.7,1),n.position.y=t.userData.height+1.2,t.userData.label=n,n.renderOrder=10,t.add(n),t.visible=!1,this.scene.add(t),this.remotes.set(e.id,{id:e.id,name:e.name,color:e.color,car:t,d:0,x:0,y:0,s:0,rd:0,rx:0,has:!1,finished:!1}),this.hudMarkers()}remoteState(e){let t=this.remotes.get(e.id);t&&(t.d=e.d,t.x=e.x,t.y=e.y,t.s=e.s,t.has||(t.rd=e.d,t.rx=e.x),t.has=!0)}removeRemote(e){let t=this.remotes.get(e);t&&(this.scene.remove(t.car),this.remotes.delete(e),this.hudMarkers())}bindInput(){let e=St("touch"),t=0,n=0,s=0,r=!1;this.onTS=a=>{let o=a.changedTouches?a.changedTouches[0]:a;t=o.clientX,n=o.clientY,s=performance.now(),r=!1},this.onTM=a=>{if(r)return;let o=a.changedTouches?a.changedTouches[0]:a;if(a.type==="mousemove"&&!(a.buttons&1))return;let l=o.clientX-t,c=o.clientY-n,h=Math.min(innerWidth,innerHeight)*.06;(Math.abs(l)>h||Math.abs(c)>h)&&(r=!0,Math.abs(l)>Math.abs(c)?this.steer(l>0?1:-1):c<0?this.jump():this.useNitro()),a.cancelable&&a.preventDefault()},this.onTE=a=>{if(r)return;let o=a.changedTouches?a.changedTouches[0]:a;performance.now()-s<350&&this.steer(o.clientX<innerWidth/2?-1:1)},this.onKey=a=>{if(a.repeat)return;let o=a.key.toLowerCase();o==="arrowleft"||o==="a"?this.steer(-1):o==="arrowright"||o==="d"?this.steer(1):o==="arrowup"||o==="w"||o===" "?this.jump():o==="arrowdown"||o==="s"||o==="shift"?this.useNitro():(o==="escape"||o==="p")&&this.o.onPause?.()},e.addEventListener("touchstart",this.onTS,{passive:!0}),e.addEventListener("touchmove",this.onTM,{passive:!1}),e.addEventListener("touchend",this.onTE),e.addEventListener("mousedown",this.onTS),e.addEventListener("mousemove",this.onTM),e.addEventListener("mouseup",this.onTE),addEventListener("keydown",this.onKey),this.onNitroBtn=a=>{a.stopPropagation(),a.preventDefault(),this.useNitro()},St("nitro-btn").addEventListener("pointerdown",this.onNitroBtn)}unbindInput(){let e=St("touch");e.removeEventListener("touchstart",this.onTS),e.removeEventListener("touchmove",this.onTM),e.removeEventListener("touchend",this.onTE),e.removeEventListener("mousedown",this.onTS),e.removeEventListener("mousemove",this.onTM),e.removeEventListener("mouseup",this.onTE),removeEventListener("keydown",this.onKey),St("nitro-btn").removeEventListener("pointerdown",this.onNitroBtn)}steer(e){if(this.state!=="run")return;let t=Math.max(0,Math.min(2,this.lane+e));t!==this.lane&&(this.prevLane=this.lane,this.lane=t,this.speed>20&&Math.random()<.6&&ct.tires())}jump(){this.state!=="run"||this.y>.05||this.onRamp||(this.vy=9.5,ct.jump())}useNitro(){this.state!=="run"||this.nitro<1||this.nitroT>0||(this.nitroT=2.6+this.stats.nitro*.35,this.nitroDur=this.nitroT,ct.nitro(),this.flash("#4fc3f7"))}hudInit(){St("hud").classList.remove("hidden"),St("touch").classList.remove("hidden"),St("hud-level").textContent=this.mp?"Birlikte Yar\u0131\u015F":`B\xF6l\xFCm ${this.level.n}`,St("hud-hearts").classList.toggle("hidden",this.mp),St("countdown").textContent="",this.hudMarkers(),this.hudT=0,St("hud-pause").classList.toggle("hidden",this.mp)}hudMarkers(){let e=St("hud-markers");e.innerHTML="";for(let n of this.remotes.values()){let s=document.createElement("div");s.className="marker",s.style.background=n.color,s.title=n.name,s.id="mk-"+n.id,e.appendChild(s)}let t=document.createElement("div");t.className="marker me",t.id="mk-me",t.style.background=this.o.color,e.appendChild(t)}hud(e){if(this.hudT-=e,this.hudT>0)return;this.hudT=.08,St("hud-stars").textContent=this.starsGot,St("hud-diamonds").textContent=this.diamondsGot,St("hud-speed").textContent=Math.round(this.speed*3.6),St("hud-hearts").textContent="\u2764\uFE0F".repeat(this.hearts)+"\u{1F5A4}".repeat(Math.max(0,this.maxHearts-this.hearts));let t=Math.min(1,this.dist/this.level.length);St("hud-bar").style.width=t*100+"%",St("mk-me").style.left=t*100+"%";for(let r of this.remotes.values()){let a=St("mk-"+r.id);a&&(a.style.left=Math.min(100,r.rd/this.level.length*100)+"%")}let n=St("nitro-btn");n.style.setProperty("--fill",(this.nitroT>0?this.nitroT/this.nitroDur:Math.min(1,this.nitro))*100+"%"),n.classList.toggle("ready",this.nitro>=1&&this.nitroT<=0),n.classList.toggle("active",this.nitroT>0);let s="";this.magnetT>0&&(s+=`<span>\u{1F9F2} ${Math.ceil(this.magnetT)}</span>`),this.shieldT>0&&(s+=`<span>\u{1F6E1}\uFE0F ${Math.ceil(this.shieldT)}</span>`),St("hud-power").innerHTML=s}flash(e){let t=St("flash");t.style.background=e,t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}popText(e){let t=St("pop");t.textContent=e,t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}update(e){e=Math.min(e,.05),this.time+=e;let t=this.stats;if(this.state==="countdown"){this.cd-=e;let f=Math.ceil(this.cd);f!==this.lastBeep&&f>=0&&(this.lastBeep=f,f>0?(St("countdown").textContent=f,ct.beep(!1)):(St("countdown").textContent="BA\u015ELA!",ct.beep(!0))),this.cd<=0&&(this.state="run",setTimeout(()=>{St("countdown").textContent==="BA\u015ELA!"&&(St("countdown").textContent="")},700))}let n=this.state==="run";n&&(this.runT=(this.runT||0)+e);let s=this.dist/this.level.length,r=this.level.speed+(t.speed-1)*1.1+s*5;this.nitroT>0&&(r*=1.5),n||(r=this.state==="finish"?8:(this.state==="crashed",0));let a=this.speed<r?this.state==="run"?.9+t.speed*.05:2:2.5;this.speed+=(r-this.speed)*Math.min(1,e*a),this.state==="crashed"&&(this.speed*=Math.pow(.02,e)),this.dist+=this.speed*e;let o=bi.lanes[this.lane],l=7+t.handling*.9,c=this.x;this.x+=(o-this.x)*(1-Math.exp(-l*e));let h=(this.x-c)/Math.max(e,1e-4);this.verticalUpdate(e),this.nitroT>0&&(this.nitroT-=e,this.nitro=Math.max(0,this.nitroT/this.nitroDur),this.nitroT<=0&&(this.nitro=0)),this.magnetT>0&&(this.magnetT-=e),this.shieldT>0&&(this.shieldT-=e),this.invT>0&&(this.invT-=e),this.track.update(this.dist,e,this.time),n&&this.collide(),n&&this.dist>=this.level.length&&this.finish(),(this.state==="finish"||this.state==="crashed")&&(this.endT+=e,this.endT>2.2&&!this.ended&&(this.ended=!0,this.o.onEnd?.(this.result())));let u=this.car;u.position.set(this.x,this.y,-this.dist),this.roll=In.lerp(this.roll||0,h*.012,.2);let d=this.onRamp?.18:this.y>.05?In.clamp(this.vy*.015,-.12,.12):Math.sin(this.time*30)*.002*this.speed/30;u.rotation.set(d,-h*.035,this.roll),So(u,this.dist),Qc(u,this.time),u.visible=!(this.invT>0&&Math.floor(this.time*12)%2===0);for(let f of this.flames)f.visible=this.nitroT>0,f.scale.set(1,.8+Math.random()*.5,1);this.bubble.visible=this.shieldT>0,this.bubble.material.opacity=.18+Math.sin(this.time*8)*.05,this.blob.position.set(this.x,.02,-this.dist),this.blob.material.opacity=.85/(1+this.y*.6);for(let f of this.remotes.values()){if(!f.has)continue;f.finished||(f.d+=f.s*e),f.rd+=(f.d-f.rd)*Math.min(1,e*6),f.rx+=(f.x-f.rx)*Math.min(1,e*10);let g=f.rd-this.dist;f.car.visible=g>-30&&g<300,f.car.userData.label.visible=g>4,f.car.position.set(f.rx,f.y||0,-f.rd),So(f.car,f.rd)}this.mp&&(this.sendT-=e)<=0&&(this.sendT=.1,this.o.net.send({t:"state",d:+this.dist.toFixed(2),x:+this.x.toFixed(2),y:+this.y.toFixed(2),s:+this.speed.toFixed(2)})),this.updateCamera(e),this.updateWind(e),this.world.update(-this.dist,this.camera,e),Dg(this.speed,this.nitroT>0),this.hud(e)}verticalUpdate(e){if(!this.onRamp&&this.y<.3){for(let t of this.track.active)if(t.kind==="ramp"&&Math.abs(this.x-t.x)<1.6&&this.dist>=t.z&&this.dist<t.z+t.len){this.onRamp=t,this.vy=0;break}}if(this.onRamp){let t=this.onRamp;if(this.dist>=t.z+t.len||Math.abs(this.x-t.x)>1.9)this.onRamp=null,this.vy=11+this.speed*.02,this.y=t.h,ct.jump(),this.popText("U\xC7U\u015E! \u2708\uFE0F");else{this.y=(this.dist-t.z)/t.len*t.h;return}}(this.y>0||this.vy>0)&&(this.vy-=rS*e,this.y+=this.vy*e,this.y<=0&&(this.vy<-8&&(ct.land(),this.shake=.25),this.y=0,this.vy=0))}collide(){let e=this.dist,t=this.magnetT>0?30+this.stats.magnet*2:0;for(let n of this.track.active){if(!n.alive)continue;let s=n.z-e;if(n.kind==="star"||n.kind==="diamond"||n.kind==="magnet"||n.kind==="nitro"||n.kind==="shield"){t&&(n.kind==="star"||n.kind==="diamond")&&s<t&&s>-3&&(n.magnet={x:this.x,y:this.y},n.z+=(e-n.z)*Math.min(1,.016*14));let r=n.obj?n.obj.position.y:n.y||1;Math.abs(s)<this.halfL+.6&&Math.abs((n.obj?n.obj.position.x:n.x)-this.x)<this.halfW+.6&&Math.abs(r-(this.y+.9))<1.6&&this.collect(n);continue}(n.kind==="obst"||n.kind==="traffic")&&Math.abs(s)<n.hl+this.halfL*.85&&Math.abs(n.x-this.x)<n.hw+this.halfW*.8&&this.y<n.h-.05&&this.hit(n,s)}}collect(e){switch(e.alive=!1,e.collectT=.001,e.kind){case"star":this.starsGot++,this.nitro=Math.min(1,this.nitro+(this.nitroT>0?0:.03)),ct.star();break;case"diamond":this.diamondsGot++,ct.diamond(),this.popText("+1 \u{1F48E}");break;case"magnet":this.magnetT=6+this.stats.magnet*1.2,ct.power(),this.popText("MIKNATIS \u{1F9F2}");break;case"nitro":this.nitro=1,ct.power(),this.popText("N\u0130TRO HAZIR \u{1F525}");break;case"shield":this.shieldT=12,ct.power(),this.popText("KALKAN \u{1F6E1}\uFE0F");break}}knock(e,t){e.alive=!1,e.fly={vx:(Math.random()-.5)*10+t*6,vy:8+Math.random()*4,vz:this.speed*.9+10,rx:(Math.random()-.5)*10,rz:(Math.random()-.5)*10,t:0}}hit(e,t){if(this.nitroT>0||this.shieldT>0){this.knock(e,Math.sign(e.x-this.x)||1),ct.bump(),this.shake=.35,this.nitroT<=0&&(this.shieldT=0,this.popText("KALKAN KIRILDI!"),this.invT=1);return}if(this.invT>0)return;if(Math.abs(t)>(e.hl+this.halfL)*.45&&this.prevLane!==this.lane){this.lane=this.prevLane,this.speed*=.85,ct.bump(),this.shake=.3,this.flash("rgba(255,180,0,0.35)"),this.invT=.4;return}if(this.crashes++,ct.crash(),this.shake=.7,this.flash("rgba(255,40,40,0.55)"),this.knock(e,Math.sign(e.x-this.x)||1),this.mp){this.speed*=.25,this.invT=1.6,this.popText("\xC7ARPI\u015EMA! \u{1F4A5}");return}this.hearts--,this.hearts<=0?(this.state="crashed",this.endT=0,this.vy=6,this.y=Math.max(this.y,.01),Gd(),ct.lose(),this.popText("KAZA! \u{1F4A5}")):(this.speed*=.3,this.invT=2,this.popText(`${this.hearts} can kald\u0131`))}finish(){this.state="finish",this.endT=0,this.finishTime=this.runT||0,ct.win(),this.popText("B\u0130T\u0130\u015E! \u{1F3C1}"),this.mp&&this.o.net.send({t:"finish",time:+this.finishTime.toFixed(2),stars:this.starsGot})}result(){let e=this.track.totalStars?this.starsGot/this.track.totalStars:1,t=this.state==="finish",n=t?e>=.7&&this.crashes===0?3:e>=.4?2:1:0;return{success:t,rating:n,stars:this.starsGot,diamonds:this.diamondsGot,total:this.track.totalStars,crashes:this.crashes,time:this.finishTime||this.time,dist:this.dist}}updateCamera(e){let t=this.camera,n=this.engine.aspect<1,s=this.nitroT>0?1:0,r=n?8.8:7.6,a=n?4.4:3.5,o=(n?74:60)+s*12+Math.min(8,this.speed*.15);t.fov+=(o-t.fov)*Math.min(1,e*3),t.aspect=this.engine.aspect,t.updateProjectionMatrix();let l=new I(this.x*.75,a+this.y*.6,-this.dist+r-s*1.2);if(this.state==="countdown"&&l.add(new I(Math.sin(this.cd)*3*Math.max(0,this.cd-.5)/3,Math.max(0,this.cd-.5)*.6,0)),this.camPos.lerp(l,Math.min(1,e*8)),this.camPos.z=l.z,t.position.copy(this.camPos),this.shake>0){this.shake-=e;let c=this.shake*.4;t.position.x+=(Math.random()-.5)*c,t.position.y+=(Math.random()-.5)*c}this.camLook.set(this.x*.85,1+this.y*.5,-this.dist-9),t.lookAt(this.camLook)}updateWind(e){let t=this.nitroT>0?.55:Math.max(0,(this.speed-30)/30)*.3;if(this.wind.material.opacity+=(t-this.wind.material.opacity)*Math.min(1,e*4),this.wind.material.opacity<.01){this.wind.visible=!1;return}this.wind.visible=!0;let n=this.windGeo.attributes.position.array,s=-this.dist;this.windP.forEach((r,a)=>{r.z+=this.speed*e*1.2,r.z>8&&Object.assign(r,this.newWind(!1));let o=r.l*(1+this.speed/20);n.set([this.x+r.x,r.y,s+r.z,this.x+r.x,r.y,s+r.z-o],a*6)}),this.windGeo.attributes.position.needsUpdate=!0}render(e){this.engine.render(this.scene,this.camera,e)}dispose(){this.engine.renderer.toneMapping=Gi,this.unbindInput(),Gd(),this.track.dispose(),this.world.dispose(),St("hud").classList.add("hidden"),St("touch").classList.add("hidden"),St("countdown").textContent=""}};var _i=[{id:"hatch",name:"K\xF6y Ka\u015Fifi",type:"hatchback",price:{stars:0},base:{speed:1,handling:2,nitro:1,magnet:1,armor:1},colors:["#d32f2f","#1e88e5","#fdd835","#f5f5f5","orig"]},{id:"sport",name:"\u015Eim\u015Fek GT",type:"1990s-sports-car",price:{stars:600},base:{speed:3,handling:3,nitro:2,magnet:1,armor:1},colors:["#ff6d00","#c62828","#212121","#ffd600","orig"]},{id:"offroad",name:"Da\u011F Kurdu",type:"1990s-off-roader",price:{stars:1400},base:{speed:2,handling:1,nitro:2,magnet:2,armor:3},colors:["#2e7d32","#37474f","#c62828","#eceff1","orig"]},{id:"pickup",name:"Tarla Pikab\u0131",type:"1990s-pickup-truck",price:{stars:2200},base:{speed:2,handling:2,nitro:1,magnet:3,armor:3},colors:["#b71c1c","#455a64","#f9a825","#1b5e20","orig"]},{id:"police",name:"Polis Arabas\u0131",type:"police-car",price:{stars:3200},base:{speed:3,handling:3,nitro:3,magnet:2,armor:2},colors:["orig"]},{id:"muscle",name:"Kas Kral",type:"muscle-car",price:{diamonds:40},base:{speed:4,handling:2,nitro:3,magnet:1,armor:2},colors:["#1a237e","#212121","#b71c1c","#4a148c","orig"]},{id:"rally",name:"Ralli Roket",type:"rally-car",price:{diamonds:60},base:{speed:4,handling:5,nitro:3,magnet:2,armor:1},colors:["#e53935","#76ff03","#ffffff","#ff4081","orig"]},{id:"monster",name:"Canavar Kamyon",type:"monster-truck",price:{diamonds:80},base:{speed:3,handling:2,nitro:3,magnet:3,armor:5},colors:["#43a047","#e53935","#ff9800","#212121","orig"]},{id:"fire",name:"\u0130tfaiye",type:"fire-truck",price:{diamonds:100},base:{speed:3,handling:2,nitro:4,magnet:4,armor:5},colors:["orig"]},{id:"conceptgt",name:"Konsept X GT",type:"concept",price:{diamonds:200},base:{speed:5,handling:5,nitro:5,magnet:2,armor:2},colors:["#ff6d00","#121212","#fafafa","#ffd600","#304ffe"],kit:{finish:"metal",spoiler:"big",decal:"stripes",rim:"#1a1a1a",tint:"dark"},look:{speed:4,handling:5,nitro:5}},{id:"conceptrally",name:"Konsept X Ralli",type:"concept",price:{diamonds:170},base:{speed:4,handling:5,nitro:4,magnet:3,armor:5},colors:["#1e88e5","#fafafa","#43a047","#d32f2f","#ff9100"],kit:{finish:"gloss",spoiler:"gt",decal:"number",rim:"#e0e0e0"},look:{armor:5,speed:2,nitro:2}},{id:"concept",name:"Konsept X (Ultra)",type:"concept",price:{diamonds:150},base:{speed:5,handling:5,nitro:5,magnet:3,armor:3},colors:["#a80000","#e8e8ec","#2b2d33","#0d47a1","#ff6d00"]}],Vd=[{id:"speed",name:"Motor",icon:"\u26A1",desc:"Daha y\xFCksek azami h\u0131z"},{id:"handling",name:"Yol Tutu\u015F",icon:"\u{1F6DE}",desc:"\u015Eeritler aras\u0131 daha h\u0131zl\u0131 ge\xE7i\u015F"},{id:"nitro",name:"Nitro",icon:"\u{1F525}",desc:"Daha uzun ve g\xFC\xE7l\xFC nitro"},{id:"magnet",name:"M\u0131knat\u0131s",icon:"\u{1F9F2}",desc:"M\u0131knat\u0131s s\xFCresi ve menzili"},{id:"armor",name:"Z\u0131rh",icon:"\u{1F6E1}\uFE0F",desc:"Ekstra can (kalp)"}],hh=6;function Ng(i){let e=Math.round(120*Math.pow(i+1,1.7)/10)*10,t=i>=4?(i-2)*4:0;return{stars:e,diamonds:t}}function Fg(i,e){let t={};for(let n of Vd)t[n.id]=i.base[n.id]+(e?.[n.id]||0);return t}var Ao=[{id:"village",name:"Ye\u015Fil K\xF6y",theme:"village",color:"#7cb342"},{id:"forest",name:"\xC7am Orman\u0131",theme:"forest",color:"#2e7d32"},{id:"desert",name:"K\u0131zg\u0131n \xC7\xF6l",theme:"desert",color:"#e0a64b"},{id:"snow",name:"Karl\u0131 Da\u011F",theme:"snow",color:"#cfe3f2"},{id:"city",name:"Gece \u015Eehri",theme:"city",color:"#3949ab"}],Eo=4,Ln=[];Ao.forEach((i,e)=>{for(let t=0;t<Eo;t++){let n=e*Eo+t+1;Ln.push({n,region:i.id,theme:i.theme,regionName:i.name,length:900+n*110,speed:24+n*.55,density:.45+n*.025,traffic:Math.min(.55,.15+n*.02),reward:60+n*15,seed:1e3+n*7919})}});var Wd=[["#d32f2f","K\u0131rm\u0131z\u0131"],["#b71c1c","Bordo"],["#ff1744","Ate\u015F"],["#ff6d00","Turuncu"],["#ffab00","Kehribar"],["#ffd600","Sar\u0131"],["#c6ff00","Limon"],["#43a047","Ye\u015Fil"],["#1b5e20","Orman"],["#00bfa5","Turkuaz"],["#00b8d4","Camg\xF6be\u011Fi"],["#40c4ff","G\xF6k"],["#1e88e5","Mavi"],["#0d47a1","Lacivert"],["#304ffe","Elektrik"],["#7c4dff","Mor"],["#4a148c","Patl\u0131can"],["#f50057","Pembe"],["#ff80ab","\u015Eeker Pembe"],["#8d6e63","Kahve"],["#fafafa","Beyaz"],["#b0bec5","G\xFCm\xFC\u015F"],["#546e7a","Antrasit"],["#121212","Siyah"]].map(([i,e])=>({id:i,name:e})),qd=[{id:"gloss",name:"Parlak",price:0},{id:"metal",name:"Metalik",price:0},{id:"matte",name:"Mat",price:200},{id:"pearl",name:"Sedef",price:400},{id:"candy",name:"\u015Eeker Cila",price:600},{id:"chrome",name:"Krom",price:900}],Xd=[{id:"orig",name:"Orijinal",price:0},{id:"#e0e0e0",name:"G\xFCm\xFC\u015F",price:100},{id:"#1a1a1a",name:"Siyah",price:120},{id:"#d4af37",name:"Alt\u0131n",price:300},{id:"#e53935",name:"K\u0131rm\u0131z\u0131",price:150},{id:"#1e88e5",name:"Mavi",price:150},{id:"#76ff03",name:"Neon Ye\u015Fil",price:200},{id:"#ff4081",name:"Pembe",price:150},{id:"#ff9100",name:"Turuncu",price:150}],jd=[{id:"none",name:"Yok",price:0,icon:"\u2014"},{id:"lip",name:"Dudak",price:100,icon:"\u2581"},{id:"duck",name:"\xD6rdek Kuyruk",price:200,icon:"\u25E2"},{id:"gt",name:"GT Kanat",price:350,icon:"\u2564"},{id:"big",name:"Dev Kanat",price:600,icon:"\u2566"}],Kd=[{id:"none",name:"Kapal\u0131",price:0},{id:"#00e5ff",name:"Buz Mavisi",price:250},{id:"#ff00e5",name:"Pembe",price:250},{id:"#00ff6a",name:"Ye\u015Fil",price:250},{id:"#8a2bff",name:"Mor",price:250},{id:"#ff7a00",name:"Turuncu",price:250},{id:"#ff1a1a",name:"K\u0131rm\u0131z\u0131",price:250},{id:"rainbow",name:"G\xF6kku\u015Fa\u011F\u0131",price:500}],Jd=[{id:"none",name:"Yok",price:0,icon:"\u2014"},{id:"stripes",name:"Yar\u0131\u015F \u015Eeridi",price:150,icon:"\u2551"},{id:"flames",name:"Alev",price:300,icon:"\u{1F525}"},{id:"number",name:"Yar\u0131\u015F No",price:120,icon:"7"},{id:"stars",name:"Y\u0131ld\u0131zlar",price:200,icon:"\u2B50"},{id:"bolt",name:"\u015Eim\u015Fek",price:250,icon:"\u26A1"}],Yd=[{id:"none",name:"\u015Eeffaf",price:0},{id:"light",name:"A\xE7\u0131k Film",price:80},{id:"dark",name:"Koyu Film",price:120},{id:"black",name:"Limuzin",price:160}];function Ug(i){return{paint:i.colors[0],finish:"gloss",rim:"orig",spoiler:"none",neon:"none",decal:"none",tint:"none",...i.kit||{}}}var ds=150,Ys=140;function kg(i,e,t){i.innerHTML="";let n=Math.min(i.clientWidth||innerWidth,760),s=Ys*2+(Ln.length-1)*ds,r=document.createElement("div");r.className="map-inner",r.style.width=n+"px",r.style.height=s+"px";let a=document.createElement("canvas"),o=Math.min(2,devicePixelRatio||1);a.width=n*o,a.height=s*o,a.style.width=n+"px",a.style.height=s+"px",r.appendChild(a),i.appendChild(r);let l=a.getContext("2d");l.scale(o,o);let c=gi(42),h=Ln.map((m,p)=>({x:n/2+Math.sin(p*1.15)*n*.28,y:s-Ys-p*ds,l:m})),u=m=>[s-Ys-m*Eo*ds+ds*.6+(m===0?Ys:0),s-Ys-((m+1)*Eo-1)*ds-ds*.5-(m===Ao.length-1?Ys:0)],d={village:["#8bc34a","#7cb342"],forest:["#2e7d32","#3d8b40"],desert:["#f2c879","#e6b45c"],snow:["#e8f1f8","#d3e3f0"],city:["#1f2a4d","#2c3a66"]};Ao.forEach((m,p)=>{let[x,y]=u(p),_=l.createLinearGradient(0,y,0,x);_.addColorStop(0,d[m.theme][0]),_.addColorStop(1,d[m.theme][1]),l.fillStyle=_,l.fillRect(0,y,n,x-y);let S=l.createLinearGradient(0,y-30,0,y+30);S.addColorStop(0,"rgba(0,0,0,0)"),S.addColorStop(.5,"rgba(255,255,255,0.12)"),S.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=S,l.fillRect(0,y-30,n,60);for(let w=0;w<46;w++){let b=c()*n,M=y+20+c()*(x-y-40);h.some(P=>Math.hypot(P.x-b,P.y-M)<70)||aS(l,m.theme,b,M,.7+c()*.6,c)}}),l.strokeStyle="rgba(66,165,245,0.85)",l.lineWidth=22,l.lineCap="round",l.beginPath();let[,f]=u(1);for(let m=s;m>f;m-=20){let p=n*.12+Math.sin(m*.01)*30;m===s?l.moveTo(p,m):l.lineTo(p,m)}l.stroke(),l.strokeStyle="rgba(255,255,255,0.35)",l.lineWidth=3,l.stroke();let g=()=>{l.beginPath(),l.moveTo(h[0].x,h[0].y+Ys),l.lineTo(h[0].x,h[0].y);for(let m=1;m<h.length;m++){let p=h[m-1],x=h[m];l.bezierCurveTo(p.x,p.y-ds*.55,x.x,x.y+ds*.55,x.x,x.y)}};l.lineCap="round",l.lineJoin="round",g(),l.strokeStyle="rgba(0,0,0,0.25)",l.lineWidth=34,l.stroke(),g(),l.strokeStyle="#e9e2d0",l.lineWidth=30,l.stroke(),g(),l.strokeStyle="#4a4d52",l.lineWidth=24,l.stroke(),g(),l.setLineDash([10,12]),l.strokeStyle="#ffd54f",l.lineWidth=2.5,l.stroke(),l.setLineDash([]),Ao.forEach((m,p)=>{let[,x]=u(p),y=x+34;l.font="bold 20px system-ui, sans-serif";let _=l.measureText(m.name).width+36;l.fillStyle="rgba(0,0,0,0.45)",l.beginPath(),l.roundRect(n-_-14,y-18,_,36,18),l.fill(),l.fillStyle="#fff",l.textAlign="center",l.textBaseline="middle",l.fillText(m.name,n-_/2-14,y+1)});let v=null;if(h.forEach(m=>{let p=m.l,x=p.n<=e.unlocked,y=e.levels[p.n]||0,_=document.createElement("button");_.className="node"+(x?"":" locked")+(p.n===e.unlocked?" current":""),_.style.left=m.x+"px",_.style.top=m.y+"px",_.innerHTML=`<span class="num">${x?p.n:"\u{1F512}"}</span><span class="nstars">${[1,2,3].map(S=>`<i class="${S<=y?"on":""}">\u2605</i>`).join("")}</span>`,x&&(_.onclick=()=>t(p)),r.appendChild(_),p.n===Math.min(e.unlocked,Ln.length)&&(v=m)}),v){let m=document.createElement("div");m.className="map-car",m.textContent="\u{1F697}",m.style.left=v.x+"px",m.style.top=v.y-52+"px",r.appendChild(m),requestAnimationFrame(()=>{i.scrollTop=v.y-i.clientHeight*.6})}}function aS(i,e,t,n,s,r){i.save(),i.translate(t,n),i.scale(s,s);let a=()=>{i.fillStyle="rgba(0,0,0,0.18)",i.beginPath(),i.ellipse(4,4,16,6,0,0,7),i.fill()},o=r();if(e==="village")if(o<.3)a(),i.fillStyle=["#fff3e0","#ffe0b2","#f5f5f5"][Math.floor(r()*3)],i.fillRect(-14,-14,28,18),i.fillStyle="#c62828",i.beginPath(),i.moveTo(-18,-14),i.lineTo(0,-30),i.lineTo(18,-14),i.fill(),i.fillStyle="#5d4037",i.fillRect(-3,-6,6,10),i.fillStyle="#4fc3f7",i.fillRect(-11,-10,5,5),i.fillRect(6,-10,5,5);else if(o<.45){i.fillStyle="#c0ca33",i.fillRect(-26,-12,52,24),i.strokeStyle="#9e9d24",i.lineWidth=2;for(let l=-22;l<26;l+=7)i.beginPath(),i.moveTo(l,-12),i.lineTo(l,12),i.stroke()}else o<.52?(i.fillStyle="#fff",i.beginPath(),i.ellipse(0,0,9,6,0,0,7),i.fill(),i.fillStyle="#222",i.beginPath(),i.arc(-2,-1,2.5,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(9,-3,3.5,0,7),i.fill()):oS(i,"#388e3c","#66bb6a");else if(e==="forest")Og(i,o<.5?"#1b5e20":"#2e7d32");else if(e==="desert")o<.5?(i.fillStyle="#558b2f",i.fillRect(-3,-24,6,24),i.fillRect(-11,-16,5,10),i.fillRect(6,-20,5,10),i.fillRect(-11,-10,8,4),i.fillRect(3,-13,8,4)):(i.fillStyle="#d7a35a",i.beginPath(),i.ellipse(0,0,26,9,0,Math.PI,0),i.fill());else if(e==="snow")o<.4?(i.fillStyle="#90a4ae",i.beginPath(),i.moveTo(-30,8),i.lineTo(0,-36),i.lineTo(30,8),i.fill(),i.fillStyle="#fff",i.beginPath(),i.moveTo(-10,-21),i.lineTo(0,-36),i.lineTo(10,-21),i.lineTo(4,-24),i.lineTo(-3,-20),i.fill()):(Og(i,"#2e5d3a"),i.fillStyle="#fff",i.beginPath(),i.moveTo(-6,-22),i.lineTo(0,-32),i.lineTo(6,-22),i.fill());else if(e==="city"){let l=14+r()*14,c=26+r()*40;i.fillStyle="#0d1430",i.fillRect(-l/2,-c,l,c),i.fillStyle="#ffd54f";for(let h=-c+4;h<-4;h+=7)for(let u=-l/2+3;u<l/2-3;u+=6)r()<.5&&i.fillRect(u,h,3,3)}i.restore()}function oS(i,e,t){i.fillStyle="rgba(0,0,0,0.18)",i.beginPath(),i.ellipse(4,4,12,5,0,0,7),i.fill(),i.fillStyle="#6d4c41",i.fillRect(-2,-8,4,10),i.fillStyle=e,i.beginPath(),i.arc(0,-14,11,0,7),i.fill(),i.fillStyle=t,i.beginPath(),i.arc(-3,-17,6,0,7),i.fill()}function Og(i,e){i.fillStyle="rgba(0,0,0,0.2)",i.beginPath(),i.ellipse(4,4,10,4,0,0,7),i.fill(),i.fillStyle="#5d4037",i.fillRect(-2,-4,4,7),i.fillStyle=e;for(let t=0;t<3;t++)i.beginPath(),i.moveTo(-12+t*3,-4-t*9),i.lineTo(0,-20-t*9),i.lineTo(12-t*3,-4-t*9),i.fill()}var uh=class{constructor(){this.handlers={},this.impl=null,this.queue=[]}get id(){return this.impl?.id??null}get mode(){return this.impl?.mode||null}connect(){this.impl||(this.impl=window.TURBO_NET==="peer"?new ef(this):window.TURBO_NET==="room"||window.claude&&typeof window.claude.use=="function"?new Qd(this):window.TURBO_NET==="none"?new Zd(this):new $d(this)),this.impl.connect()}get connected(){return!!this.impl?.connected}send(e){this.impl?this.impl.send(e):this.queue.push(e)}on(e,t){var n;((n=this.handlers)[e]||(n[e]=[])).push(t)}emit(e,t){for(let n of this.handlers[e]||[])n(t)}},Zd=class{constructor(e){this.net=e,this.mode="none",this.id=null,this.connected=!1}connect(){this.net.emit("close"),this.net.emit("error",{msg:"Birlikte oynamak i\xE7in oyunu bilgisayardan (npm start) ya da claude.ai ba\u011Flant\u0131s\u0131ndan a\xE7."})}send(){}},$d=class{constructor(e){this.net=e,this.mode="ws",this.ws=null,this.queue=[],this.id=null}connect(){if(this.ws&&this.ws.readyState<=1)return;let e=location.protocol==="https:"?"wss":"ws";this.ws=new WebSocket(`${e}://${location.host}/ws`),this.ws.onopen=()=>{for(let t of this.queue)this.ws.send(JSON.stringify(t));this.queue=[],this.net.emit("open")},this.ws.onmessage=t=>{let n;try{n=JSON.parse(t.data)}catch{return}n.t==="welcome"&&(this.id=n.id),this.net.emit(n.t,n)},this.ws.onclose=()=>this.net.emit("close"),this.ws.onerror=()=>this.net.emit("neterror")}get connected(){return this.ws&&this.ws.readyState===1}send(e){this.connected?this.ws.send(JSON.stringify(e)):this.queue.push(e)}},dh="ABCDEFGHJKLMNPRSTUVYZ",Qd=class{constructor(e){this.net=e,this.mode="room",this.lobby=null,this.game=null,this.id=null,this.connected=!1,this.profile={name:"Oyuncu",car:"hatch",color:"orig"},this.level=1,this.code=null,this.epoch=0,this.results=[],this.ended=0,this.endTimer=null,this.pending=[],this.starting=!1}async connect(){if(this.starting)return;this.starting=!0;let e=window.claude?.use?await window.claude.use("room").catch(()=>null):null;if(!e){this.net.emit("close"),this.net.emit("error",{msg:"Birlikte oynama bu g\xF6r\xFCn\xFCmde kullan\u0131lam\u0131yor (giri\u015F yapm\u0131\u015F olmal\u0131s\u0131n)."}),this.starting=!1;return}this.lobby=e,e.onConnection(t=>{this.connected=t,this.net.emit(t?"open":"close")},()=>{this.connected=!1,this.net.emit("close")}),e.onPeers(t=>{let n=t.peers.find(s=>s.sameTab);n&&!this.id&&(this.id=n.peer,this.net.emit("welcome",{id:this.id})),this.pushRooms()});for(let t of this.net.queue.splice(0))this.send(t)}pushRooms(){if(!this.lobby)return;let e=this.lobby.peers().filter(t=>!t.sameTab&&t.presence?.game?.open).map(t=>({code:String(t.presence.game.code),host:String(t.presence.game.host||"?"),count:Number(t.presence.game.count)||1,level:Number(t.presence.game.level)||1}));this.net.emit("rooms",{t:"rooms",list:e})}advertise(e){if(!this.lobby)return;let t=this.game?this.game.peers().length:1;this.lobby.presence({game:e&&this.code?{code:this.code,host:this.profile.name,level:this.level,count:t,open:!0}:null}).catch(()=>{})}players(){return(this.game?.peers()||[]).filter(e=>e.presence&&e.presence.name).map(e=>({id:e.peer,name:String(e.presence.name).slice(0,16),car:String(e.presence.car||"hatch"),color:String(e.presence.color||"orig")}))}hostId(){let e=this.game?.peers()||[],t=e.find(s=>s.presence?.host===!0);return t?t.peer:e.map(s=>s.peer).sort()[0]||null}roomMsg(){return{t:"room",code:this.code,hostId:this.hostId(),level:this.level,state:this.racing?"race":"lobby",players:this.players()}}async joinGame(e,t){if(!this.lobby){this.net.queue.push({t:t?"create":"join",code:e});return}await this.leaveGame();let n;try{n=await this.lobby.join("g-"+e.toLowerCase())}catch{this.net.emit("error",{t:"error",msg:"Odaya ba\u011Flan\u0131lamad\u0131"});return}this.game=n,this.code=e,await n.presence({...this.profile,host:!!t,level:this.level}).catch(()=>{}),n.onPeers(s=>{let r=s.peers.find(a=>a.peer===this.hostId());r&&r.presence?.level&&(this.level=Number(r.presence.level)||this.level),this.hostId()===this.id&&!s.peers.find(a=>a.sameTab)?.presence?.host&&n.presence({host:!0}).catch(()=>{});for(let a of s.left)this.net.emit("left",{t:"left",id:a.peer});for(let a of[...s.updated,...s.joined]){if(a.sameTab)continue;let o=a.presence?.st;this.racing&&o&&o.e===this.epoch&&this.net.emit("state",{t:"state",id:a.peer,d:+o.d||0,x:+o.x||0,y:+o.y||0,s:+o.s||0})}this.checkResults(),this.net.emit("room",this.roomMsg()),this.hostId()===this.id&&this.advertise(!this.racing)}),n.on("start",s=>{if(s.peer!==this.hostId())return;let r=s.data||{},a=Number(r.epoch)||0;a<=this.epoch||(this.epoch=a,this.level=Number(r.level)||1,this.results=[],this.ended=0,this.racing=!0,clearTimeout(this.endTimer),n.presence({st:null,fin:null}).catch(()=>{}),this.net.emit("start",{t:"start",level:this.level,seed:Number(r.seed)||1,countdown:6e3,players:this.players()}),this.hostId()===this.id&&this.advertise(!1))}),t||setTimeout(()=>{this.game===n&&!n.peers().some(s=>s.presence?.host===!0&&!s.sameTab)&&(this.net.emit("error",{t:"error",msg:"Oda bulunamad\u0131"}),this.leaveGame(),this.net.emit("rooms",{t:"rooms",list:[]}),this.pushRooms())},2500),this.net.emit("room",this.roomMsg())}async leaveGame(){if(this.game){let e=this.game;this.game=null,this.code=null,this.racing=!1;try{await e.leave()}catch{}}this.advertise(!1)}checkResults(){if(!this.racing||!this.game)return;let e=this.game.peers(),t=e.filter(n=>n.presence?.fin&&n.presence.fin.e===this.epoch).map(n=>({id:n.peer,name:String(n.presence.name||"?").slice(0,16),time:+n.presence.fin.time||0,stars:+n.presence.fin.stars||0})).sort((n,s)=>n.time-s.time).map((n,s)=>({...n,place:s+1}));t.length!==this.results.length&&(this.results=t,this.net.emit("finish",{t:"finish",results:t}),t.length===1&&!this.endTimer&&(this.endTimer=setTimeout(()=>this.endRace(),45e3))),t.length&&t.length>=e.length&&this.endRace()}endRace(){!this.racing||this.ended===this.epoch||(this.ended=this.epoch,this.racing=!1,clearTimeout(this.endTimer),this.endTimer=null,this.net.emit("raceEnd",{t:"raceEnd",results:this.results}),this.net.emit("room",this.roomMsg()),this.hostId()===this.id&&this.advertise(!0))}send(e){if(!this.lobby){this.net.queue.push(e);return}let t=this.game;switch(e.t){case"profile":this.profile={name:String(e.name||"Oyuncu").slice(0,16),car:String(e.car||"hatch"),color:String(e.color||"orig")},t?.presence(this.profile).catch(()=>{});break;case"listRooms":this.pushRooms();break;case"create":{let n=Array.from({length:4},()=>dh[Math.floor(Math.random()*dh.length)]).join("");this.level=Number(e.level)||1,this.joinGame(n,!0).then(()=>this.advertise(!0));break}case"join":this.joinGame(String(e.code||"").toUpperCase(),!1);break;case"leave":this.leaveGame();break;case"setLevel":t&&this.hostId()===this.id&&(this.level=Number(e.level)||1,t.presence({level:this.level}).catch(()=>{}),this.advertise(!0),this.net.emit("room",this.roomMsg()));break;case"start":t&&this.hostId()===this.id&&t.emit("start",{level:this.level,seed:Math.floor(Math.random()*1e9),epoch:Date.now()}).catch(()=>this.net.emit("error",{t:"error",msg:"Ba\u015Flat\u0131lamad\u0131"}));break;case"state":t&&this.racing&&t.presence({st:{e:this.epoch,d:e.d,x:e.x,y:e.y,s:e.s}}).catch(()=>{});break;case"finish":t&&this.racing&&(t.presence({fin:{e:this.epoch,time:e.time,stars:e.stars}}).catch(()=>{}),setTimeout(()=>this.checkResults(),50));break}}},lS="https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js",Bg="turbokoy-oda-";function cS(i){return new Promise((e,t)=>{if(window.Peer)return e();let n=document.createElement("script");n.src=i,n.onload=e,n.onerror=t,document.head.appendChild(n)})}var ef=class{constructor(e){this.net=e,this.mode="peer",this.id=null,this.connected=!1,this.peer=null,this.conn=null,this.host=null,this.profile={name:"Oyuncu",car:"hatch",color:"orig"}}async connect(){try{await cS(lS),this.connected=!0,this.net.emit("open"),this.net.emit("rooms",{t:"rooms",list:[]})}catch{this.net.emit("close"),this.net.emit("error",{t:"error",msg:"\u0130nternet ba\u011Flant\u0131s\u0131 gerekli"})}}makePeer(e){return new Promise((t,n)=>{let s=new window.Peer(e,{debug:0});s.on("open",r=>t(s)),s.on("error",r=>n(r))})}async create(e){this.close();let t=Array.from({length:4},()=>dh[Math.floor(Math.random()*dh.length)]).join(""),n;try{n=await this.makePeer(Bg+t.toLowerCase())}catch{return this.create(e)}this.peer=n,this.id=n.id,this.net.emit("welcome",{id:this.id});let s={id:this.id,...this.profile,conn:null};this.host={code:t,hostId:this.id,level:Number(e)||1,state:"lobby",results:[],players:new Map([[this.id,s]])},n.on("connection",r=>{r.on("data",a=>this.hostHandle(r.peer,a,r)),r.on("close",()=>this.hostLeave(r.peer)),r.on("error",()=>this.hostLeave(r.peer))}),n.on("disconnected",()=>{try{n.reconnect()}catch{}}),this.hostBroadcast(this.roomInfo())}async join(e){this.close();let t;try{t=await this.makePeer()}catch{this.net.emit("error",{t:"error",msg:"Ba\u011Flant\u0131 kurulamad\u0131"});return}this.peer=t,this.id=t.id,this.net.emit("welcome",{id:this.id});let n=t.connect(Bg+e.toLowerCase(),{reliable:!0}),s=setTimeout(()=>{n.open||(this.net.emit("error",{t:"error",msg:"Oda bulunamad\u0131 \u2013 kodu kontrol et"}),this.close())},8e3);t.on("error",r=>{String(r?.type)==="peer-unavailable"&&(clearTimeout(s),this.net.emit("error",{t:"error",msg:"Oda bulunamad\u0131 \u2013 kodu kontrol et"}),this.close())}),n.on("open",()=>{clearTimeout(s),this.conn=n,n.send({t:"hello",...this.profile})}),n.on("data",r=>{r&&typeof r.t=="string"&&this.net.emit(r.t,r)}),n.on("close",()=>{this.conn===n&&(this.conn=null,this.net.emit("error",{t:"error",msg:"Oda kapand\u0131"}),this.net.emit("room",null))})}close(){try{this.conn?.close()}catch{}try{this.peer?.destroy()}catch{}this.conn=null,this.peer=null,this.host=null}roomInfo(){let e=this.host;return{t:"room",code:e.code,hostId:e.hostId,level:e.level,state:e.state,players:[...e.players.values()].map(t=>({id:t.id,name:t.name,car:t.car,color:t.color}))}}hostBroadcast(e,t){let n=this.host;if(n){for(let s of n.players.values())if(s.id!==t)if(s.conn)try{s.conn.send(e)}catch{}else this.net.emit(e.t,e)}}hostLeave(e){let t=this.host;!t||!t.players.has(e)||(t.players.delete(e),this.hostBroadcast({t:"left",id:e}),this.hostBroadcast(this.roomInfo()),this.checkEnd())}hostHandle(e,t,n){let s=this.host;if(!s||!t||typeof t.t!="string")return;let r=(a,o)=>String(a??"").slice(0,o);switch(t.t){case"hello":case"profile":{if(!s.players.has(e)){if(s.state!=="lobby"){n?.send({t:"error",msg:"Yar\u0131\u015F s\xFCr\xFCyor, biraz bekle"});return}if(s.players.size>=6){n?.send({t:"error",msg:"Oda dolu"});return}}let a=s.players.get(e)||{id:e,conn:n};Object.assign(a,{name:r(t.name,16)||"Oyuncu",car:r(t.car,20)||"hatch",color:r(t.color,9)||"orig"}),s.players.set(e,a),this.hostBroadcast(this.roomInfo());break}case"setLevel":e===s.hostId&&s.state==="lobby"&&(s.level=Math.max(1,Number(t.level)||1),this.hostBroadcast(this.roomInfo()));break;case"start":e===s.hostId&&s.state==="lobby"&&(s.state="race",s.results=[],clearTimeout(s.timer),this.hostBroadcast({t:"start",level:s.level,seed:Math.floor(Math.random()*1e9),countdown:6e3,players:this.roomInfo().players}),s.timer=setTimeout(()=>this.endRace(),360*1e3));break;case"state":s.state==="race"&&this.hostBroadcast({t:"state",id:e,d:+t.d||0,x:+t.x||0,y:+t.y||0,s:+t.s||0},e);break;case"finish":if(s.state==="race"&&!s.results.some(a=>a.id===e)){let a=s.players.get(e);s.results.push({id:e,name:a?.name||"?",time:+t.time||0,stars:+t.stars||0,place:s.results.length+1}),this.hostBroadcast({t:"finish",results:s.results}),s.results.length===1&&(clearTimeout(s.timer),s.timer=setTimeout(()=>this.endRace(),45e3)),this.checkEnd()}break}}checkEnd(){let e=this.host;e&&e.state==="race"&&[...e.players.keys()].every(t=>e.results.some(n=>n.id===t))&&this.endRace()}endRace(){let e=this.host;!e||e.state!=="race"||(clearTimeout(e.timer),e.state="lobby",this.hostBroadcast({t:"raceEnd",results:e.results}),this.hostBroadcast(this.roomInfo()))}send(e){switch(e.t){case"profile":this.profile={name:String(e.name||"Oyuncu").slice(0,16),car:String(e.car||"hatch"),color:String(e.color||"orig")},this.host?this.hostHandle(this.id,e):this.conn?.send(e);break;case"listRooms":this.net.emit("rooms",{t:"rooms",list:[]});break;case"create":this.create(e.level);break;case"join":this.join(String(e.code||"").toUpperCase());break;case"leave":this.close();break;default:this.host?this.hostHandle(this.id,e):this.conn?.send(e)}}};var Gg="turbo-koy-save-v1",tf=()=>({name:"Oyuncu",stars:150,diamonds:5,car:"hatch",owned:{hatch:!0},colors:{},upgrades:{},levels:{},unlocked:1,quality:"auto",sound:!0,custom:{},items:{}}),Lt;try{Lt=Object.assign(tf(),JSON.parse(localStorage.getItem(Gg)||"{}"))}catch{Lt=tf()}for(let[i,e]of[["suv","offroad"],["race","rally"]])Lt.owned[i]&&(Lt.owned[e]=!0,delete Lt.owned[i]),Lt.upgrades[i]&&(Lt.upgrades[e]=Lt.upgrades[i],delete Lt.upgrades[i]),Lt.car===i&&(Lt.car=e),delete Lt.colors[i];Lt.custom||(Lt.custom={});Lt.items||(Lt.items={});var zg,Hg;for(let[i,e]of Object.entries(Lt.colors||{}))(Hg=(zg=Lt.custom)[i]||(zg[i]={})).paint||(Hg.paint=e);var oe=Lt;function ln(){try{localStorage.setItem(Gg,JSON.stringify(Lt))}catch{}}function Vg(){let i=tf();for(let e of Object.keys(Lt))delete Lt[e];Object.assign(Lt,i),ln()}var ie=i=>document.getElementById(i),jg=new Hc(ie("gl"),oe.quality),pn=new eh(jg);pn.onLoading=i=>ie("car-loading").classList.toggle("hidden",!i);var bt=new uh,vi="home",Bt=null,of=!1,Lo=null,Po=null,En=null,Io=[],Zs=0;zd(oe.sound);function An(i){let e=ie("toast");e.textContent=i,e.classList.add("on"),clearTimeout(An.t),An.t=setTimeout(()=>e.classList.remove("on"),2200)}function Do(){ie("w-stars").textContent=oe.dev?"\u221E":oe.stars,ie("w-dias").textContent=oe.dev?"\u221E":oe.diamonds}var na=i=>_i.find(e=>e.id===i)||_i[0],No=i=>({...Ug(i),...oe.custom[i.id]||{}}),lf=i=>No(i).paint,ph=i=>{let e={...oe.upgrades[i.id]||{}};for(let[t,n]of Object.entries(i.look||{}))e[t]=Math.max(e[t]||0,n);return e};function rf(i){let e=innerWidth,t=innerHeight,n=e>t;if(i==="garage"){let s=ie("car-zone").getBoundingClientRect();return s.width>50&&s.height>50?{x:s.left,y:s.top,w:s.width,h:s.height}:{x:0,y:t*.15,w:e,h:t*.4}}return i==="home"?n?{x:0,y:t*.25,w:e*.55,h:t*.7}:{x:0,y:t*.22,w:e,h:t*.34}:{x:0,y:t*.2,w:e,h:t*.6}}var Kg=i=>[1,2,3].map(e=>`<i class="${e<=i?"on":""}">\u2605</i>`).join(""),Wg=i=>[i.stars?`\u2605 ${i.stars}`:"",i.diamonds?`\u25C6 ${i.diamonds}`:""].filter(Boolean).join(" + "),fh=i=>oe.stars>=(i.stars||0)&&oe.diamonds>=(i.diamonds||0);function af(i){oe.stars-=i.stars||0,oe.diamonds-=i.diamonds||0,ln(),Do()}function sa(i){vi=i;for(let e of["home","map","garage","mp","settings"])ie(e).classList.toggle("hidden",e!==i);if(ie("wallet").classList.toggle("hidden",i==="race"),document.body.classList.toggle("menu-bg",i!=="race"&&i!=="map"),pn.active=i==="garage"||i==="home",i==="home"||i==="mp"||i==="settings"){pn.zone=rf(i);let e=na(oe.car);pn.setCar(e.type,No(e),ph(e)),pn.resetView()}i==="map"&&kg(ie("map-wrap"),oe,mS),i==="garage"&&(Zs=_i.findIndex(e=>e.id===oe.car),Dn={},Qt="up",Kn(),requestAnimationFrame(()=>{pn.zone=rf("garage")})),i==="mp"&&xS(),i==="settings"&&(ie("s-name").value=oe.name,ie("s-quality").value=oe.quality,ie("s-sound").checked=oe.sound),Do()}document.querySelectorAll("[data-go]").forEach(i=>i.addEventListener("click",()=>{Js(),ct.click(),sa(i.dataset.go)}));var Qt="up",Dn={},hS=[["up","\u26A1 Y\xFCkselt"],["paint","\u{1F3A8} Boya"],["finish","\u2728 Kaplama"],["rim","\u{1F6DE} Jant"],["spoiler","\u{1FABD} Kanat"],["neon","\u{1F4A1} Neon"],["decal","\u{1F3F7}\uFE0F \xC7\u0131kartma"],["tint","\u{1F576}\uFE0F Cam"]],uS={finish:qd,rim:Xd,spoiler:jd,neon:Kd,decal:Jd,tint:Yd},Jg=(i,e)=>!e.price||!!oe.items[i+":"+e.id];function dS(i){let e=_i[Zs],t={...No(e),...Dn};pn.setCar(e.type,t,ph(e),i)}function Kn(i){let e=_i[Zs],t=!!oe.owned[e.id],n=No(e),s={...n,...Dn};dS(i),ie("g-name").textContent=e.name,ie("g-lock").textContent=t?oe.car===e.id?"\u2713 Kullan\u0131l\u0131yor":"Senin":"\u{1F512} Kilitli \u2013 \xF6nce sat\u0131n al";let r=ie("g-action");r.innerHTML="";let a=document.createElement("button");a.className="btn big",t?oe.car===e.id?(a.textContent="\u2713 Bu arabayla yar\u0131\u015F\u0131yorsun",a.disabled=!0):(a.textContent="Bu arabay\u0131 se\xE7",a.classList.add("primary"),a.onclick=()=>{oe.car=e.id,ln(),ct.buy(),Kn()}):(a.innerHTML=`Sat\u0131n al: ${Wg(e.price)}`,a.classList.add("primary"),a.disabled=!fh(e.price),a.onclick=()=>{fh(e.price)&&(af(e.price),oe.owned[e.id]=!0,oe.car=e.id,ln(),ct.buy(),An(`${e.name} senin! \u{1F389}`),Kn())}),r.appendChild(a);let o=ie("g-tabs");o.innerHTML="";for(let[h,u]of hS){let d=document.createElement("button");d.className="tab"+(Qt===h?" on":""),d.textContent=u,d.onclick=()=>{Qt=h,Dn={},ct.click(),pn.focus(Yr[h==="up"?"paint":h]),Kn()},o.appendChild(d)}let l=ie("g-body");l.innerHTML="";let c=e.colors.length===1&&e.colors[0]==="orig";if(Qt==="up"){let h=document.createElement("div");h.className="upgrades",l.appendChild(h);let u=ph(e);for(let d of Vd){let f=u[d.id]||0,g=e.base[d.id],v=document.createElement("div");v.className="upg";let m=Array.from({length:5+hh},(x,y)=>`<i class="${y<g?"b":y<g+f?"u":""}"></i>`).join("");v.innerHTML=`<div class="ico">${d.icon}</div><div><div class="nm">${d.name} <span class="muted small">Sv ${f}/${hh}</span></div><div class="ds">${d.desc}</div><div class="pips">${m}</div></div>`,v.onclick=()=>pn.focus(Yr[d.id]);let p=document.createElement("button");if(p.className="btn",!t)p.textContent="\u{1F512}",p.disabled=!0;else if(f>=hh)p.textContent="MAKS",p.disabled=!0;else{let x=Ng(f);p.innerHTML=Wg(x),p.disabled=!fh(x),p.disabled||p.classList.add("primary"),p.onclick=y=>{var _,S;y.stopPropagation(),fh(x)&&(af(x),((_=oe.upgrades)[S=e.id]||(_[S]={}))[d.id]=f+1,ln(),ct.buy(),An(`${d.name} seviye ${f+1}! Arabaya bak \u{1F440}`),pn.focus(Yr[d.id]),Kn(d.id))}}v.appendChild(p),h.appendChild(v)}}else if(Qt==="paint")if(c)l.innerHTML='<p class="note">Bu arac\u0131n boyas\u0131 \xF6zeldir \u{1F693}\u{1F692} \u2013 Kaplama, Jant, Neon ve di\u011Ferlerini deneyebilirsin!</p>';else{let h=document.createElement("div");h.className="swatches",l.appendChild(h);for(let u of[...Wd.map(d=>d.id),"orig"]){let d=document.createElement("div");d.className="swatch"+(s.paint===u?" on":""),d.title=u==="orig"?"Orijinal":Wd.find(f=>f.id===u).name,d.style.background=u==="orig"?"conic-gradient(#ff8a80, #ffd180, #b9f6ca, #80d8ff, #ea80fc, #ff8a80)":u,d.onclick=()=>{var f,g;ct.click(),pn.focus(Yr.paint),t?(((f=oe.custom)[g=e.id]||(f[g]={})).paint=u,ln(),Dn={}):Dn={paint:u},Kn()},h.appendChild(d)}}else{let h=uS[Qt],u=document.createElement("div");u.className="items",l.appendChild(u),Qt==="finish"&&c&&l.insertAdjacentHTML("afterbegin",'<p class="note small">Bu ara\xE7ta kaplama sadece \xF6zel boyaya uygulan\u0131r.</p>');for(let d of h){let f=Jg(Qt,d),g=s[Qt]===d.id,v=document.createElement("button");v.className="item"+(g?" on":"");let m="";Qt==="rim"?m=`<span class="pv" style="background:${d.id==="orig"?"radial-gradient(#ddd,#777)":`radial-gradient(circle at 35% 30%, #fff8, ${d.id})`}">\u{1F6DE}</span>`:Qt==="neon"?m=`<span class="pv" style="background:${d.id==="none"?"#333":d.id==="rainbow"?"conic-gradient(red,orange,yellow,lime,cyan,blue,magenta,red)":d.id};box-shadow:0 0 14px ${d.id==="none"?"transparent":d.id==="rainbow"?"#f0f":d.id}">\u{1F4A1}</span>`:Qt==="finish"?m=`<span class="pv" style="background:${{gloss:"radial-gradient(circle at 30% 25%,#fff,#d32f2f 45%)",metal:"radial-gradient(circle at 30% 25%,#fff,#9e9e9e 40%,#424242)",matte:"#7a2424",pearl:"linear-gradient(135deg,#fff,#f8bbd0,#b3e5fc,#fff)",candy:"radial-gradient(circle at 30% 25%,#ffcdd2,#c2185b 50%,#4a0020)",chrome:"linear-gradient(135deg,#fff,#888 40%,#fff 55%,#555)"}[d.id]}"></span>`:Qt==="tint"?m=`<span class="pv" style="background:rgba(10,15,25,${{none:.15,light:.45,dark:.75,black:.95}[d.id]});border:2px solid #9ab">\u{1F576}\uFE0F</span>`:m=`<span class="pv" style="background:rgba(255,255,255,.12)">${d.icon||"\u2022"}</span>`,v.innerHTML=`${m}<span>${d.name}</span><span class="pr ${d.price?"":"free"}">${f?d.price?"Senin":"\xDCcretsiz":"\u2605 "+d.price}</span>${f?"":'<span class="lk">\u{1F512}</span>'}`,v.onclick=()=>{var p,x;ct.click(),pn.focus(Yr[Qt]),f&&t?(((p=oe.custom)[x=e.id]||(p[x]={}))[Qt]=d.id,ln(),Dn={},Kn(Qt)):(Dn={[Qt]:d.id},Kn(Qt),fS(e,Qt,d,t))},u.appendChild(v)}}(!Dn||!Object.keys(Dn).length)&&ie("g-try").classList.add("hidden"),Do()}function fS(i,e,t,n){let s=ie("g-try");s.classList.remove("hidden"),s.innerHTML="";let r=document.createElement("button");r.className="btn",r.textContent="Vazge\xE7",r.onclick=()=>{Dn={},Kn()};let a=document.createElement("button");a.className="btn primary";let o=Jg(e,t);n?o?a.textContent="Uygula":(a.textContent=`Sat\u0131n al \u2605 ${t.price}`,a.disabled=oe.stars<t.price):(a.textContent="\xD6nce arabay\u0131 sat\u0131n al",a.disabled=!0),a.onclick=()=>{var l,c;if(!o){if(oe.stars<t.price)return;af({stars:t.price}),oe.items[e+":"+t.id]=!0}((l=oe.custom)[c=i.id]||(l[c]={}))[e]=t.id,ln(),Dn={},ct.buy(),An(`${t.name} tak\u0131ld\u0131! \u2728`),Kn(e)},s.append(r,a)}ie("g-prev").onclick=()=>{Zs=(Zs+_i.length-1)%_i.length,Dn={},ct.click(),pn.resetView(),Kn()};ie("g-next").onclick=()=>{Zs=(Zs+1)%_i.length,Dn={},ct.click(),pn.resetView(),Kn()};var pS=0;addEventListener("pointerdown",()=>{vi==="garage"&&++pS>2&&ie("drag-hint").classList.add("off")});function mS(i){Js(),ct.click(),Lo=i,ie("lc-title").textContent=`B\xF6l\xFCm ${i.n}`,ie("lc-region").textContent=i.regionName,ie("lc-stars").innerHTML=Kg(oe.levels[i.n]||0),ie("lc-len").textContent=`${(i.length/1e3).toFixed(1)} km`,ie("lc-reward").textContent=`\u2605 ${i.reward} + toplad\u0131klar\u0131n`,ie("level-card").classList.remove("hidden")}ie("lc-close").onclick=()=>ie("level-card").classList.add("hidden");ie("lc-go").onclick=()=>{ie("level-card").classList.add("hidden"),ia(Lo,{mp:!1})};function gS(){matchMedia("(pointer: coarse)").matches&&!document.fullscreenElement&&document.documentElement.requestFullscreen?.().catch(()=>{})}async function ia(i,e){Js(),gS(),Bt&&(Bt.dispose(),Bt=null);for(let s of["result","pause","level-card"])ie(s).classList.add("hidden");ie("loading").classList.remove("hidden");for(let s of["home","map","garage","mp","settings"])ie(s).classList.add("hidden");ie("wallet").classList.add("hidden"),document.body.classList.remove("menu-bg"),vi="race",Po=e,Lo=i,of=!1;let t=na(oe.car),n=(e.players||[]).map(s=>({...s,model:na(s.car).type}));try{await Promise.all([tg([t.type,...kd(i),...n.map(s=>s.model)]),Ag(i.theme)])}catch(s){console.warn(s),An("Ara\xE7 modelleri y\xFCklenemedi")}vi!=="race"||Po!==e||(Bt=new ch(jg,{level:i,carDef:t,color:lf(t),custom:No(t),upg:ph(t),stats:Fg(t,oe.upgrades[t.id]),seed:e.mp?e.seed:i.seed,mp:e.mp,net:bt,players:n,myId:bt.id,countdown:e.mp?Math.max(1.5,e.countdown/1e3-(performance.now()-e.t0)/1e3):3.2,onEnd:s=>bS(s),onPause:()=>mh(!0)}),ie("loading").classList.add("hidden"))}function bS(i){if(Po.mp){$g(i);return}let e=Lo,t=i.success&&!oe.levels[e.n],n=0,s=0;i.success&&(n=e.reward,i.rating===3&&(oe.levels[e.n]||0)<3&&(s=3),t&&(s+=1)),oe.stars+=i.stars+n,oe.diamonds+=i.diamonds+s,i.success&&(oe.levels[e.n]=Math.max(oe.levels[e.n]||0,i.rating),oe.unlocked=Math.max(oe.unlocked,Math.min(Ln.length,e.n+1))),ln(),ie("r-title").textContent=i.success?i.rating===3?"Muhte\u015Fem! \u{1F3C6}":"B\xF6l\xFCm Tamam! \u{1F3C1}":"Kaza Yapt\u0131n! \u{1F4A5}",ie("r-rating").innerHTML=Kg(i.rating),ie("r-body").innerHTML=`<div class="reward"><span>\u2605 +${i.stars+n}</span><span>\u25C6 +${i.diamonds+s}</span></div>
    <p class="muted">Toplanan y\u0131ld\u0131z: ${i.stars} / ${i.total}${i.success?` \xB7 S\xFCre: ${i.time.toFixed(1)} sn`:` \xB7 Yol: %${Math.round(i.dist/e.length*100)}`}</p>
    ${i.success&&i.rating<3?`<p class="hint">3 y\u0131ld\u0131z i\xE7in y\u0131ld\u0131zlar\u0131n %70'ini topla ve hi\xE7 \xE7arpma!</p>`:""}`;let r=ie("r-buttons");r.innerHTML="";let a=(o,l,c)=>{let h=document.createElement("button");h.className="btn "+l,h.textContent=o,h.onclick=()=>{ct.click(),c()},r.appendChild(h)};a("Harita","",()=>cf("map")),a("Tekrar","",()=>ia(e,{mp:!1})),i.success&&e.n<Ln.length&&a("Sonraki \u25B6","primary",()=>ia(Ln[e.n],{mp:!1})),ie("result").classList.remove("hidden")}function cf(i){Bt&&(Bt.dispose(),Bt=null);for(let e of["result","pause"])ie(e).classList.add("hidden");sa(i)}function mh(i){!Bt||Po.mp||(of=i,ie("pause").classList.toggle("hidden",!i))}ie("hud-pause").onclick=()=>mh(!0);ie("horn-btn").addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),ct.horn()});ie("p-resume").onclick=()=>mh(!1);ie("p-retry").onclick=()=>ia(Lo,{mp:!1});ie("p-map").onclick=()=>cf("map");document.addEventListener("visibilitychange",()=>{document.hidden&&Bt&&!Po.mp&&Bt.state==="run"&&mh(!0)});function xS(){ie("mp-name").value=oe.name,bt.connect(),ie("mp-hint").textContent=bt.mode==="peer"?'Bir cihaz "Oda Kur"a bass\u0131n. Di\u011Feri ekranda \xE7\u0131kan 4 harfli kodu yaz\u0131p "Kat\u0131l"a bass\u0131n. \u0130nternet ba\u011Flant\u0131s\u0131 yeterli, ayn\u0131 Wi-Fi gerekmez.':bt.mode==="room"?"\u0130ki cihazda da bu sayfay\u0131 ayn\u0131 Claude hesab\u0131yla a\xE7. Biri oda kursun, di\u011Feri listeden kat\u0131ls\u0131n.":"T\xFCm cihazlar ayn\u0131 Wi-Fi'de olmal\u0131. Bir cihaz oda kurar, di\u011Feri listeden kat\u0131l\u0131r.",bt.send({t:"profile",name:oe.name,car:oe.car,color:lf(na(oe.car))}),bt.send({t:"listRooms"}),hf()}function _S(i){let e=ie("mp-rooms");if(e.innerHTML="",!i.length){e.innerHTML='<p class="muted">Hen\xFCz a\xE7\u0131k oda yok. Bir oda kur!</p>';return}for(let t of i){let n=document.createElement("div");n.className="room",n.innerHTML=`<div><b>${Co(t.host)}</b> <span class="muted">\xB7 ${t.count} ki\u015Fi \xB7 B\xF6l\xFCm ${t.level}</span></div>`;let s=document.createElement("button");s.className="btn primary",s.textContent="Kat\u0131l",s.onclick=()=>Zg(t.code),n.appendChild(s),e.appendChild(n)}}function Co(i){return String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Yg(){let i=ie("mp-name").value.trim();i&&(oe.name=i,ln()),bt.send({t:"profile",name:oe.name,car:oe.car,color:lf(na(oe.car))})}function Zg(i){Js(),ct.click(),Yg(),bt.send({t:"join",code:i})}ie("mp-create").onclick=()=>{Js(),ct.click(),Yg(),bt.send({t:"create",level:Math.min(oe.unlocked,Ln.length)})};ie("mp-join").onclick=()=>{let i=ie("mp-code").value.trim().toUpperCase();i.length===4?Zg(i):An("4 harfli oda kodunu yaz")};ie("mp-leave").onclick=()=>{bt.send({t:"leave"}),En=null,hf()};ie("mp-back").onclick=()=>{En&&bt.send({t:"leave"}),En=null,sa("home")};ie("mp-start").onclick=()=>{Js(),bt.send({t:"start"})};ie("mp-level").onchange=()=>bt.send({t:"setLevel",level:+ie("mp-level").value});function hf(){if(ie("mp-lobby-list").classList.toggle("hidden",!!En),ie("mp-room").classList.toggle("hidden",!En),!En)return;let i=En.hostId===bt.id;ie("mp-rcode").textContent=En.code,ie("mp-players").innerHTML=En.players.map(n=>`<div class="player"><span class="c" style="background:${Co(n.color)}"></span>${Co(n.name)} <span class="muted">\xB7 ${Co(na(n.car).name)}</span>${n.id===En.hostId?" \u{1F451}":""}${n.id===bt.id?' <span class="muted">(sen)</span>':""}</div>`).join("");let e=ie("mp-level"),t=i?Math.max(oe.unlocked,En.level):En.level;e.innerHTML=Ln.filter(n=>n.n<=t).map(n=>`<option value="${n.n}">B\xF6l\xFCm ${n.n} \u2013 ${n.regionName}</option>`).join(""),e.value=En.level,e.disabled=!i,ie("mp-start").classList.toggle("hidden",!i),ie("mp-wait").textContent=i?En.players.length<2?"Di\u011Fer oyuncunun kat\u0131lmas\u0131n\u0131 bekle (tek ba\u015F\u0131na da ba\u015Flatabilirsin).":"Haz\u0131r olunca ba\u015Flat!":"Oda sahibinin ba\u015Flatmas\u0131 bekleniyor\u2026"}bt.on("open",()=>ie("mp-status").classList.add("on"));bt.on("close",()=>{ie("mp-status").classList.remove("on"),vi==="mp"&&bt.mode==="ws"&&An('Sunucu ba\u011Flant\u0131s\u0131 yok. Bilgisayarda "npm start" \xE7al\u0131\u015F\u0131yor mu?')});bt.on("rooms",i=>_S(i.list));bt.on("room",i=>{En=i,vi==="mp"&&hf()});bt.on("rooms",i=>{bt.mode==="peer"&&!i.list.length&&(ie("mp-rooms").innerHTML='<p class="muted">Arkada\u015F\u0131n\u0131n oda kodunu a\u015Fa\u011F\u0131ya yaz \u{1F447}</p>')});bt.on("error",i=>An(i.msg));bt.on("start",i=>{Io=[],ia(Ln[i.level-1],{mp:!0,seed:i.seed,players:i.players,countdown:i.countdown,t0:performance.now()})});bt.on("state",i=>Bt?.remoteState(i));bt.on("left",i=>Bt?.removeRemote(i.id));bt.on("finish",i=>{Io=i.results,(Bt?.ended||Bt?.state==="finish")&&ta(!1);for(let e of i.results){let t=Bt?.remotes.get(e.id);t&&(t.finished=!0)}});bt.on("raceEnd",i=>{Io=i.results,Bt&&(Bt.ended?ta(!0):(Bt.ended=!0,$g(Bt.result(),!0)))});var Ro=null;function $g(i,e){Ro=i,oe.stars+=i.stars,oe.diamonds+=i.diamonds,ln(),ta(!!e)}function ta(i){let e=Io.find(r=>r.id===bt.id),t=e&&e.place===1;i&&t&&!ta.paid&&(oe.diamonds+=3,ln(),ta.paid=!0),ie("r-title").textContent=e?e.place===1?"1. oldun! \u{1F3C6}":`${e.place}. oldun \u{1F3C1}`:"Yar\u0131\u015F bitti",ie("r-rating").innerHTML="";let n=Io.map(r=>`<li class="${r.id===bt.id?"me":""}"><span>${r.place}. ${Co(r.name)}</span><span>${r.time.toFixed(1)} sn \xB7 \u2605${r.stars}</span></li>`).join("");ie("r-body").innerHTML=`<ul class="results">${n||""}</ul>${i?"":'<p class="muted">Di\u011Fer oyuncular bekleniyor\u2026</p>'}
    ${Ro?`<div class="reward"><span>\u2605 +${Ro.stars}</span><span>\u25C6 +${Ro.diamonds+(t&&i?3:0)}</span></div>`:""}`;let s=ie("r-buttons");if(s.innerHTML="",i){let r=document.createElement("button");r.className="btn primary",r.textContent="Lobiye D\xF6n",r.onclick=()=>{ta.paid=!1,Ro=null,cf("mp")},s.appendChild(r)}ie("result").classList.remove("hidden")}ie("s-name").onchange=()=>{oe.name=ie("s-name").value.trim()||"Oyuncu",ln()};ie("s-quality").onchange=()=>{oe.quality=ie("s-quality").value,ln(),An("Kalite, oyunu yeniden a\xE7\u0131nca uygulan\u0131r")};ie("s-sound").onchange=()=>{oe.sound=ie("s-sound").checked,ln(),zd(oe.sound)};ie("s-full").onclick=()=>document.documentElement.requestFullscreen?.().catch(()=>An("Bu cihaz tam ekran\u0131 desteklemiyor"));var nf=0,qg=0;ie("s-version").onclick=()=>{let i=Date.now();nf=i-qg<4e3?nf+1:1,qg=i,nf>=5&&(ie("s-secret").classList.remove("hidden"),ie("s-dev-off").classList.toggle("hidden",!oe.dev))};ie("s-code-go").onclick=()=>{if(ie("s-code").value.trim().toUpperCase().replace(/İ/g,"I")!=="TURBO2026"){An("Kod yanl\u0131\u015F");return}oe.dev||(oe.devBackup=JSON.stringify({stars:oe.stars,diamonds:oe.diamonds,owned:oe.owned,items:oe.items,upgrades:oe.upgrades,unlocked:oe.unlocked,levels:oe.levels})),oe.dev=!0,oe.stars=999999,oe.diamonds=99999,oe.unlocked=Ln.length;for(let e of _i)oe.owned[e.id]=!0;for(let[e,t]of Object.entries({finish:qd,rim:Xd,spoiler:jd,neon:Kd,decal:Jd,tint:Yd}))for(let n of t)oe.items[e+":"+n.id]=!0;ln(),Do(),ct.buy(),ie("s-code").value="",ie("s-dev-off").classList.remove("hidden"),An("\u{1F513} Deneme modu a\xE7\u0131k: t\xFCm arabalar, par\xE7alar ve b\xF6l\xFCmler a\xE7\u0131ld\u0131")};ie("s-dev-off").onclick=()=>{if(oe.dev){try{Object.assign(oe,JSON.parse(oe.devBackup||"{}"))}catch{}oe.dev=!1,delete oe.devBackup,oe.owned[oe.car]||(oe.car="hatch"),ln(),Do(),An("Deneme modu kapand\u0131, ger\xE7ek ilerlemene d\xF6n\xFCld\xFC"),ie("s-dev-off").classList.add("hidden")}};var sf=0;ie("s-reset").onclick=()=>{if(Date.now()-sf>3e3){sf=Date.now(),ie("s-reset").textContent="Emin misin? Silmek i\xE7in tekrar bas",setTimeout(()=>{ie("s-reset").textContent="\u0130lerlemeyi s\u0131f\u0131rla"},3e3);return}sf=0,Vg(),sa("home"),An("S\u0131f\u0131rland\u0131")};addEventListener("resize",()=>{(vi==="garage"||vi==="home")&&setTimeout(()=>{pn.zone=rf(vi)},50)});var Xg=performance.now();function Qg(i){let e=Math.min(.05,(i-Xg)/1e3);Xg=i,Bt?(of||Bt.update(e),Bt.render(e)):vi!=="map"&&(pn.update(e),pn.render(e)),requestAnimationFrame(Qg)}sa("home");ie("loading").classList.add("hidden");requestAnimationFrame(Qg);window.__turboReady=!0;window.__game={get race(){return Bt},save:oe,startRace:ia,LEVELS:Ln,show:sa};
